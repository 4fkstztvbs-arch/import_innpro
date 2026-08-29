// Fetches the Penta CZ/SK Shoptet feed (i6ws, HTTP Basic Auth — same Cybersoft I6 webservice
// platform as ATOS), applies the agreed category mapping, and writes a Shoptet-native XML ready
// for Automatické importy.
//
// Pricing: unlike ATOS, no CZK->EUR conversion or our own markup is applied. Penta's own
// StoItemShoptet_El feed already sends <PRICE_VAT> — their recommended EUR retail price incl.
// VAT (confirmed to match X-SipPriceSTORECurAll's SipPriceSTORETotVatEUR) — and their own email
// (2026-08, Michal Blatný) explicitly asks dealers to keep that price level rather than compute
// their own, especially for G21 products. We sell at that price as-is (just run through the
// store's usual roundPrice for a consistent .00/.50/.90 ending) and rely on the regular Heureka
// price-report review cycle (process-heureka-report.js) to flag anything worth adjusting
// afterwards.
//
// Images: Penta's own img.asp URLs are publicly reachable without auth (verified 2026-08-24),
// unlike ATOS's blocked-for-Shoptet img.asp/CDN — no Cloudflare Worker proxy needed here.
//
// Usage: node transform-penta.js
// Required env vars: PENTA_URL, PENTA_USERNAME, PENTA_PASSWORD
// Optional: PENTA_MIN_COST (0), PENTA_OUT (./output/penta.xml)

const fs = require('fs');
const path = require('path');
const { streamRecords } = require('./stream-records');
const { parsePentaItem } = require('./parse-penta');
const { roundPrice } = require('./round-price');
const { heurekaCategoryIdFor, isHeurekaHidden } = require('./heureka-category');
const { applyHeurekaPriceTarget } = require('./heureka-price-targets');
const { loadPreviousPrices, checkPriceSanity, buildCategoryPriceStats, buildFeedCategoryStats, mergeCategoryStats, checkCategoryOutlier, writeAnomalyReport } = require('./price-sanity');
const { isCpcNonConverter } = require('./heureka-cpc-exclusions');

const URL = process.env.PENTA_URL;
const USERNAME = process.env.PENTA_USERNAME;
const PASSWORD = process.env.PENTA_PASSWORD;
const MIN_COST = parseFloat(process.env.PENTA_MIN_COST || '0');
// Business rule: this store doesn't carry sub-€10 items (dollar-store junk like a €1.30
// construction bucket isn't worth the shelf space) — checked against the final sell price,
// after roundPrice()/Heureka target, not the raw feed price.
const MIN_PRICE = parseFloat(process.env.PENTA_MIN_PRICE || '10');
const OUT_PATH = process.env.PENTA_OUT || path.join(__dirname, '..', 'output', 'penta.xml');
// Temporary, while penta-mapping.json only covers the categories with a confirmed match onto
// our existing tree ("ZHODA") — the rest (ambiguous/no match) are still being paired by hand
// (reports/penta-kategorie-2026-08-24.md). Set to '0'/unset once more categories are mapped.
const ONLY_MAPPED_CATEGORIES = process.env.PENTA_ONLY_MAPPED_CATEGORIES === '1';
// Shoptet VISIBILITY value written to every product — 'visible' (default), 'hidden',
// 'blocked', 'showRegistered', 'blockUnregistered', 'cashDeskOnly' or 'detailOnly'.
// Set to 'hidden' for this first test import so it doesn't show to customers yet.
const VISIBILITY = process.env.PENTA_VISIBILITY || 'visible';
const STORE_NAME = process.env.PENTA_STORE_NAME || 'premiumstore.sk';

const MAPPING_PATH = path.join(__dirname, 'penta-mapping.json');
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8'));
const RENAMES = mapping.categoryRenamesByPath || {};
const EXCLUSIONS = new Set(mapping.categoryExclusionsByPath || []);
const EXCLUDED_MANUFACTURERS = new Set((mapping.excludedManufacturers || []).map((m) => m.toLowerCase()));
// Penta's own customer-facing taxonomy — the other trees in <CATEGORIES> ("Dle výrobce",
// "Koncovy shop reklamni SK", ...) are manufacturer/marketing groupings, not meant as our
// storefront navigation, so only paths under this root are considered.
const TREE_ROOT = 'Koncový shop I6';

// penta-mapping.json keys are hand-written and don't always match the live feed's CategoryText
// byte-for-byte (case, diacritics, double spaces). Matching normalized here means a hand-written
// key still matches even when it isn't a perfect copy of the feed text.
function normalizeKey(s) {
  return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
}
const RENAMES_BY_NORM = new Map(Object.entries(RENAMES).map(([k, v]) => [normalizeKey(k), v]));
const EXCLUSIONS_NORM = new Set(Array.from(EXCLUSIONS, normalizeKey));
function lookupRename(key) { return RENAMES_BY_NORM.get(normalizeKey(key)); }
// Matches the excluded path itself AND any of its descendants (a category text like
// "Koncový shop I6 > Camping a outdoor > Autochladničky" must be excluded too, not just the
// bare top-level "Koncový shop I6 > Camping a outdoor" — otherwise a product that also sits in
// an out-of-scope tree leaks that tree's category back in via its non-default CATEGORY entries).
function isExcluded(key) {
  const nk = normalizeKey(key);
  for (const ex of EXCLUSIONS_NORM) {
    if (nk === ex || nk.startsWith(ex + ' > ')) return true;
  }
  return false;
}

function isPathOverride(cumKey, rename) { return !!rename && cumKey.includes(' > '); }

// segs[0] is always TREE_ROOT ("Koncový shop I6") — it's Penta's internal export label, not part
// of our storefront navigation, so the loop starts at segs.length-1 down to 1 and never emits it
// (unlike ATOS's mapping, this needs no manual per-top-category rename just to drop the root).
function pentaDisplayPath(pathKey) {
  const segs = pathKey.split(' > ');
  const partsResult = [];
  for (let i = segs.length - 1; i >= 1; i--) {
    const cumKey = segs.slice(0, i + 1).join(' > ');
    const rename = lookupRename(cumKey);
    if (isPathOverride(cumKey, rename)) { partsResult.unshift(rename); break; }
    partsResult.unshift(rename || segs[i]);
  }
  return partsResult.join(' > ');
}
function pentaAncestorPaths(pathKey) {
  const segs = pathKey.split(' > ');
  const chain = [];
  for (let i = segs.length - 2; i >= 0; i--) {
    const key = segs.slice(0, i + 1).join(' > ');
    chain.push(key);
    if (isPathOverride(key, lookupRename(key))) break;
  }
  return chain;
}
function resolvePentaCategories(categoryTexts, defaultCategoryRaw) {
  const givenPaths = categoryTexts.filter((p) => p.startsWith(TREE_ROOT));
  const allPaths = new Set();
  for (const p of givenPaths) {
    if (isExcluded(p)) continue;
    if (p !== TREE_ROOT) allPaths.add(p);
    if (lookupRename(p)) continue;
    for (const a of pentaAncestorPaths(p)) {
      if (!isExcluded(a) && a !== TREE_ROOT) allPaths.add(a);
    }
  }
  if (allPaths.size === 0) return { defaultCategory: '', extraCategories: [], defaultMapped: false };
  const sortedPaths = Array.from(allPaths).sort((a, b) => b.split('>').length - a.split('>').length);
  const defaultKey = allPaths.has(defaultCategoryRaw) ? defaultCategoryRaw : sortedPaths[0];
  const defaultCategory = pentaDisplayPath(defaultKey);
  const extraCategories = sortedPaths.filter((p) => p !== defaultKey).map(pentaDisplayPath).filter(Boolean);
  // Whether defaultKey has its own explicit entry in categoryRenamesByPath (a confirmed "ZHODA"
  // match onto the existing tree), as opposed to falling through with Penta's raw category name.
  const defaultMapped = !!lookupRename(defaultKey);
  return { defaultCategory, extraCategories, defaultMapped };
}

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function xmlAttr(s) { return xmlEscape(s).replace(/"/g, '&quot;'); }
function imageAltFor(name, index, total) {
  return total > 1 ? `${name} - obrázok ${index + 1}` : name;
}
function xmlCdata(s) { return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>'; }
function xmlNum(n) { return (Math.round(n * 100) / 100).toFixed(2); }
function stripTags(html) { return String(html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(); }
// Shoptet's native XML import has no tag for product documents/manuals (confirmed against
// Shoptet's own docs — "súvisiace súbory" is a separate paid doplnok, not part of the feed
// schema), so the only way to surface Penta's manual PDF link through this pipeline is to
// append it to the product DESCRIPTION as a plain link. Only genuine manuals are kept —
// RELATED_FILES also carries internal thumbnail-size variants and comparison tables we don't
// want cluttering the description.
function manualsHtml(relatedFiles) {
  if (!relatedFiles || !relatedFiles.length) return '';
  const manuals = relatedFiles.filter((f) => /manuál|návod|manual/i.test(f.text));
  if (!manuals.length) return '';
  const links = manuals.map((f) => `<a href="${xmlAttr(f.url)}" target="_blank" rel="noopener">Stiahnuť manuál (PDF)</a>`);
  return `<p><strong>Manuál na stiahnutie:</strong> ${links.join(', ')}</p>`;
}
function truncateAtWord(s, maxLen) {
  if (!s || s.length <= maxLen) return s || '';
  const cut = s.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
}

function buildShopitemXml(p) {
  const parts = ['<SHOPITEM>'];
  parts.push(`<NAME>${xmlCdata(p.name)}</NAME>`);
  if (p.shortDescription) parts.push(`<SHORT_DESCRIPTION>${xmlCdata(p.shortDescription)}</SHORT_DESCRIPTION>`);
  parts.push(`<DESCRIPTION>${xmlCdata(p.description)}</DESCRIPTION>`);
  if (p.manufacturer) parts.push(`<MANUFACTURER>${xmlCdata(p.manufacturer)}</MANUFACTURER>`);
  if (p.warranty) parts.push(`<WARRANTY>${xmlEscape(p.warranty)}</WARRANTY>`);
  parts.push('<ITEM_TYPE>product</ITEM_TYPE>');
  parts.push('<UNIT>ks</UNIT>');
  parts.push(`<CODE>${xmlEscape(p.code)}</CODE>`);
  if (p.ean) parts.push(`<EAN>${xmlEscape(p.ean)}</EAN>`);

  const allCats = [p.defaultCategory].concat(p.extraCategories || []).filter(Boolean);
  if (allCats.length) {
    parts.push('<CATEGORIES>');
    allCats.forEach((c) => parts.push(`  <CATEGORY>${xmlCdata(c)}</CATEGORY>`));
    parts.push('</CATEGORIES>');
  }
  const heurekaCategoryId = heurekaCategoryIdFor(p.defaultCategory);
  if (heurekaCategoryId) parts.push(`<HEUREKA_CATEGORY_ID>${heurekaCategoryId}</HEUREKA_CATEGORY_ID>`);
  if (isHeurekaHidden(p.defaultCategory, p.price) || isCpcNonConverter(p.ean)) parts.push('<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>');
  if (p.images.length) {
    parts.push('<IMAGES>');
    p.images.forEach((img, i) => parts.push(`  <IMAGE description="${xmlAttr(imageAltFor(p.name, i, p.images.length))}">${xmlEscape(img)}</IMAGE>`));
    parts.push('</IMAGES>');
  }
  if (p.params.length) {
    parts.push('<TEXT_PROPERTIES>');
    p.params.forEach((pv) => {
      const idx = pv.indexOf(';');
      if (idx > 0) {
        parts.push('  <TEXT_PROPERTY>');
        parts.push(`    <NAME>${xmlCdata(pv.slice(0, idx))}</NAME>`);
        parts.push(`    <VALUE>${xmlCdata(pv.slice(idx + 1))}</VALUE>`);
        parts.push('  </TEXT_PROPERTY>');
      }
    });
    parts.push('</TEXT_PROPERTIES>');
  }
  if (p.alternatives.length) {
    parts.push('<ALTERNATIVE_PRODUCTS>');
    p.alternatives.forEach((c) => parts.push(`  <CODE>${xmlEscape(c)}</CODE>`));
    parts.push('</ALTERNATIVE_PRODUCTS>');
  }
  parts.push(`<FLAGS><ACTION>${p.actionFlag}</ACTION><NEW>${p.newFlag}</NEW><TIP>${p.tipFlag}</TIP></FLAGS>`);
  parts.push(`<AVAILABILITY>${xmlCdata(p.availability)}</AVAILABILITY>`);
  parts.push('<VISIBLE>1</VISIBLE>');
  parts.push(`<VISIBILITY>${xmlEscape(VISIBILITY)}</VISIBILITY>`);
  const logistic = [`<WEIGHT>${xmlNum(p.weightKg || 0)}</WEIGHT>`];
  if (p.heightCm) logistic.push(`<HEIGHT>${xmlNum(p.heightCm)}</HEIGHT>`);
  if (p.widthCm) logistic.push(`<WIDTH>${xmlNum(p.widthCm)}</WIDTH>`);
  if (p.depthCm) logistic.push(`<DEPTH>${xmlNum(p.depthCm)}</DEPTH>`);
  parts.push(`<LOGISTIC>${logistic.join('')}</LOGISTIC>`);
  parts.push('<CURRENCY>EUR</CURRENCY>');
  parts.push(`<PRICE_VAT>${xmlNum(p.price)}</PRICE_VAT>`);
  if (p.purchasePrice) {
    parts.push(`<PURCHASE_PRICE>${xmlNum(p.purchasePrice)}</PURCHASE_PRICE>`);
    parts.push(`<PURCHASE_VAT>${xmlEscape(p.vat)}</PURCHASE_VAT>`);
    parts.push('<PURCHASE_PRICE_INCL_VAT>0</PURCHASE_PRICE_INCL_VAT>');
  }
  if (p.seoTitle) parts.push(`<SEO_TITLE>${xmlCdata(p.seoTitle)}</SEO_TITLE>`);
  if (p.metaDescription) parts.push(`<META_DESCRIPTION>${xmlCdata(p.metaDescription)}</META_DESCRIPTION>`);
  parts.push('</SHOPITEM>');
  return parts.join('\n');
}

async function main() {
  if (!URL) { console.error('Missing PENTA_URL environment variable.'); process.exit(1); }

  console.log('Streaming Penta feed and building Shoptet XML...');
  const previousPrices = loadPreviousPrices(OUT_PATH);
  const catalogCategoryStats = buildCategoryPriceStats(OUT_PATH);
  const anomalies = [];

  const stats = { total: 0, written: 0, skippedNoPrice: 0, skippedCheap: 0, skippedCategory: 0, skippedUnmapped: 0, skippedManufacturer: 0, skippedOutOfStock: 0, action: 0, new: 0, tip: 0 };
  const auth = { username: USERNAME, password: PASSWORD };
  const candidates = [];

  await streamRecords(URL, 'SHOPITEM', (rawXml) => {
    stats.total++;
    let p;
    try { p = parsePentaItem(rawXml); } catch (e) { return; }
    if (!p || !p.name) { stats.skippedNoPrice++; return; }
    if (p.manufacturer && EXCLUDED_MANUFACTURERS.has(p.manufacturer.toLowerCase())) { stats.skippedManufacturer++; return; }
    if (p.availabilityRaw !== 'skladem') { stats.skippedOutOfStock++; return; }
    if (p.priceVat <= 0) {
      stats.skippedNoPrice++;
      anomalies.push({ code: p.code, ean: p.ean, name: p.name, reason: 'zero-price', newPrice: 0 });
      return;
    }
    if (MIN_COST > 0 && p.purchasePrice > 0 && p.purchasePrice < MIN_COST) { stats.skippedCheap++; return; }

    let price = roundPrice(p.priceVat);
    price = applyHeurekaPriceTarget(p.ean, price, p.purchasePrice, parseFloat(p.vat));
    if (price < MIN_PRICE) { stats.skippedCheap++; return; }

    const { defaultCategory, extraCategories, defaultMapped } = resolvePentaCategories(p.categoryTexts, p.defaultCategoryRaw);
    if (!defaultCategory) { stats.skippedCategory++; return; }
    if (ONLY_MAPPED_CATEGORIES && !defaultMapped) { stats.skippedUnmapped++; return; }

    const availability = p.availabilityRaw === 'skladem' ? 'Skladom' : 'Na objednávku';

    const shortDescription = p.shortDescription || truncateAtWord(stripTags(p.description), 200);
    const description = p.description + manualsHtml(p.relatedFiles);
    const nameHasManufacturer = p.manufacturer && p.name.toLowerCase().includes(p.manufacturer.toLowerCase());
    const titleCore = (p.manufacturer && !nameHasManufacturer) ? `${p.name} – ${p.manufacturer}` : p.name;
    const seoTitle = truncateAtWord(`${titleCore} | ${STORE_NAME}`, 70);
    const metaDescription = truncateAtWord(
      `${p.name}${p.manufacturer && !nameHasManufacturer ? ' od ' + p.manufacturer : ''} – ${availability.toLowerCase()}. Kúpte na ${STORE_NAME}.`,
      155
    );

    if (p.actionFlag === '1') stats.action++;
    if (p.newFlag === '1') stats.new++;
    if (p.tipFlag === '1') stats.tip++;

    candidates.push({
      code: p.code, ean: p.ean, name: p.name, category: defaultCategory, price,
      shopitemData: {
        code: p.code, name: p.name, description, shortDescription,
        manufacturer: p.manufacturer, warranty: p.warranty, ean: p.ean,
        defaultCategory, extraCategories, images: p.images, params: p.params,
        alternatives: p.alternatives, actionFlag: p.actionFlag, newFlag: p.newFlag, tipFlag: p.tipFlag,
        availability, weightKg: p.weightKg, heightCm: p.heightCm, widthCm: p.widthCm, depthCm: p.depthCm,
        price, purchasePrice: p.purchasePrice, vat: p.vat, seoTitle, metaDescription,
      },
    });
  }, auth);

  const feedCategoryStats = buildFeedCategoryStats(candidates);
  const categoryStats = mergeCategoryStats(feedCategoryStats, catalogCategoryStats);

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  for (const c of candidates) {
    const sanity = checkPriceSanity(previousPrices, c.code, c.ean, c.price);
    if (!sanity.sane) {
      stats.skippedPriceAnomaly = (stats.skippedPriceAnomaly || 0) + 1;
      anomalies.push({ code: c.code, ean: c.ean, name: c.name, reason: 'day-over-day', ...sanity });
      continue;
    }
    const categoryOutlier = checkCategoryOutlier(categoryStats, c.category, c.price);
    if (!categoryOutlier.sane) {
      stats.skippedPriceAnomaly = (stats.skippedPriceAnomaly || 0) + 1;
      anomalies.push({ code: c.code, ean: c.ean, name: c.name, reason: 'category-outlier', ...categoryOutlier });
      continue;
    }
    out.write(buildShopitemXml(c.shopitemData) + '\n');
    stats.written++;
  }

  out.write('</SHOP>\n');
  out.end();
  await new Promise((resolve) => out.on('finish', resolve));

  console.log('Done.');
  writeAnomalyReport('penta', anomalies);
  console.log(JSON.stringify(stats, null, 2));
  console.log('Output written to', OUT_PATH);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

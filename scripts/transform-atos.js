// Automated equivalent of the "ATOS" tab in the browser tool. Fetches the ATOS Shoptet feed
// (HTTP Basic Auth required), applies the agreed category mapping, converts CZK->EUR at the
// live ECB rate, and writes a Shoptet-native XML ready for Automatické importy.
// Images: uses data/atos-image-urls.json (built by fetch-atos-images.js, run before this
// script in atos-sync.yml) — static img{0-3}.atoselektro.cz CDN URLs, per product code.
// Falls back to the feed's own img.asp URLs for any code missing from that map, rewritten to go
// through the same Cloudflare Worker proxy (ATOS_IMAGE_PROXY_BASE) as the CDN images — Shoptet's
// automatic import gets HTTP 429/403/timeout hitting shop.atoselektro.cz directly (confirmed in
// Shoptet's own import log, 6.8./8.8./14.8.2026), but img.asp itself works fine from any other
// IP (confirmed by hand 14.8.2026), so proxying it the same way recovers these images instead of
// serving a URL known to fail. Falls back to the raw (unproxied) img.asp URL only when
// ATOS_IMAGE_PROXY_BASE isn't set.
//
// Usage: node transform-atos.js
// Required env vars: ATOS_URL, ATOS_USERNAME, ATOS_PASSWORD
// Optional: ATOS_MARKUP (15), ATOS_MIN_COST (0), ATOS_OUT (./output/atos.xml),
//           ATOS_IMAGE_PROXY_BASE (same Cloudflare Worker as fetch-atos-images.js)

const fs = require('fs');
const path = require('path');
const { streamRecords } = require('./stream-records');
const { parseAtosItem } = require('./parse-atos');
const { roundPrice } = require('./round-price');
const { translateCategoryName } = require('./translate-cz-sk');
const { heurekaCategoryIdFor, isHeurekaHidden } = require('./heureka-category');
const { applyHeurekaPriceTarget } = require('./heureka-price-targets');
const { loadPreviousPrices, checkPriceSanity, writeAnomalyReport } = require('./price-sanity');
const { isCpcNonConverter } = require('./heureka-cpc-exclusions');
const { extractCompatibleModels } = require('./extract-compatible-models');

const URL = process.env.ATOS_URL;
const USERNAME = process.env.ATOS_USERNAME;
const PASSWORD = process.env.ATOS_PASSWORD;
const MARKUP_PCT = parseFloat(process.env.ATOS_MARKUP || '15');
const MIN_COST = parseFloat(process.env.ATOS_MIN_COST || '0');
const EXCLUDE_UNAVAILABLE = process.env.ATOS_EXCLUDE_UNAVAILABLE === '1';
const OUT_PATH = process.env.ATOS_OUT || path.join(__dirname, '..', 'output', 'atos.xml');
const STORE_NAME = process.env.ATOS_STORE_NAME || 'premiumstore.sk';

const MAPPING_PATH = path.join(__dirname, 'atos-mapping.json');
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8'));
const RENAMES = mapping.categoryRenamesByPath || {};
const EXCLUSIONS = new Set(mapping.categoryExclusionsByPath || []);

// Static img{0-3}.atoselektro.cz CDN URLs per product code, built by fetch-atos-images.js
// (StoItemBase_El) — used instead of the feed's own img.asp URLs, which Shoptet's automatic
// import can't reliably download (HTTP 429/403/timeout, confirmed in Shoptet's import log).
// Falls back to the feed's own images for any code missing from this map (e.g. if
// fetch-atos-images.js hasn't run yet, or ATOS added a product it doesn't cover).
const IMAGES_PATH = path.join(__dirname, '..', 'data', 'atos-image-urls.json');
const CDN_IMAGES = fs.existsSync(IMAGES_PATH) ? JSON.parse(fs.readFileSync(IMAGES_PATH, 'utf-8')) : {};
const IMAGE_PROXY_BASE = (process.env.ATOS_IMAGE_PROXY_BASE || '').replace(/\/+$/, '');
// Rewrites a raw feed img.asp URL (https://shop.atoselektro.cz/img.asp?attid=NNN or ?stiid=NNN)
// to go through the Worker proxy's /imgasp route instead — see worker.js. Leaves any other URL
// shape (or anything when no proxy is configured) unchanged.
function proxyImgAspUrl(rawUrl) {
  if (!IMAGE_PROXY_BASE) return rawUrl;
  const m = /img\.asp\?(attid|stiid)=(\d+)/.exec(rawUrl);
  if (!m) return rawUrl;
  return `${IMAGE_PROXY_BASE}/imgasp?${m[1]}=${m[2]}`;
}
// Solight is also a direct supplier with better purchase prices — don't re-sell their own
// products relabelled under ATOS.
const EXCLUDED_MANUFACTURERS = new Set((mapping.excludedManufacturers || []).map((m) => m.toLowerCase()));

// ATOS feed bug (found 2026-08-29): these 5 solar bundle variants ("Solární sestava ostrovní
// TRINA 1820Wp...") carry a broken PURCHASE_PRICE (19.26 EUR) from the supplier feed — a factor
// of ~80x too low for a ~2145 EUR product (confirmed against ATOS's own storefront price).
// Excluded until ATOS corrects their feed; remove once verified fixed.
const EXCLUDED_CODES = new Set(['ATO-04280479', 'ATO-04280480', 'ATO-04280481', 'ATO-04280483', 'ATO-04280487']);
const TREE_ROOT = 'Druhy';
const { createCategoryMatcher } = require('./resolve-category');
const categoryMatcher = createCategoryMatcher('atos');

// atos-mapping.json keys are hand-written and don't always match the live feed's
// CategoryText byte-for-byte (case, diacritics, double spaces). Matching case/diacritics
// -insensitively here means a hand-written key still matches even when it isn't a perfect
// copy of the feed text, instead of silently falling through to the untranslated "Druhy > ..."
// path. Ambiguous normalized collisions (two distinct raw keys folding to the same normalized
// form) are not expected given the mapping's size, so the last one wins.
function normalizeKey(s) {
  return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
}
const RENAMES_BY_NORM = new Map(Object.entries(RENAMES).map(([k, v]) => [normalizeKey(k), v]));
const EXCLUSIONS_NORM = new Set(Array.from(EXCLUSIONS, normalizeKey));
function lookupRename(key) { return RENAMES_BY_NORM.get(normalizeKey(key)); }
function isExcluded(key) { return EXCLUSIONS_NORM.has(normalizeKey(key)); }

function isPathOverride(cumKey, rename) { return !!rename && cumKey.includes(' > '); }

function atosDisplayPath(pathKey) {
  const segs = pathKey.split(' > ');
  const partsResult = [];
  for (let i = segs.length - 1; i >= 0; i--) {
    const cumKey = segs.slice(0, i + 1).join(' > ');
    const rename = lookupRename(cumKey);
    if (isPathOverride(cumKey, rename)) { partsResult.unshift(rename); break; }
    partsResult.unshift(rename || translateCategoryName(segs[i]));
  }
  return partsResult.join(' > ');
}
function atosAncestorPaths(pathKey) {
  const segs = pathKey.split(' > ');
  const chain = [];
  for (let i = segs.length - 2; i >= 0; i--) {
    const key = segs.slice(0, i + 1).join(' > ');
    chain.push(key);
    if (isPathOverride(key, lookupRename(key))) break;
  }
  return chain;
}
function resolveAtosCategories(categoryTexts, productLabel) {
  const givenPaths = categoryTexts.filter((p) => p.startsWith(TREE_ROOT));
  const allPaths = new Set();
  for (const p of givenPaths) {
    if (isExcluded(p)) continue;
    if (p !== TREE_ROOT) allPaths.add(p);
    if (lookupRename(p)) continue;
    for (const a of atosAncestorPaths(p)) {
      if (!isExcluded(a) && a !== TREE_ROOT) allPaths.add(a);
    }
  }
  const sortedPaths = Array.from(allPaths).sort((a, b) => b.split('>').length - a.split('>').length);

  // Each candidate path (deepest first) is gated independently — a product keeps whichever of its
  // paths already match the known tree (or a confident near-duplicate), and only drops the ones
  // that don't. Only if every single candidate path is unmatched does the product get excluded.
  const resolved = [];
  let anyUnmatched = false;
  for (const pathKey of sortedPaths) {
    const display = atosDisplayPath(pathKey);
    if (!display) continue;
    const trusted = !!lookupRename(pathKey);
    const gated = categoryMatcher.resolve(display, { trusted, productLabel });
    if (gated.excluded) { anyUnmatched = true; continue; }
    if (!resolved.includes(gated.category)) resolved.push(gated.category);
  }

  const defaultCategory = resolved.length ? resolved[0] : '';
  const extraCategories = resolved.slice(1);
  return { defaultCategory, extraCategories, unmatchedCategory: !defaultCategory && anyUnmatched };
}

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function xmlAttr(s) { return xmlEscape(s).replace(/"/g, '&quot;'); }
// Shoptet falls back to the image filename for alt text when <IMAGE> has no description attribute
// — without this, product photos get alt="x ien245647" (our proxy filename) instead of the
// product name, which hurts accessibility and image-search SEO.
function imageAltFor(name, index, total) {
  return total > 1 ? `${name} - obrázok ${index + 1}` : name;
}
function xmlCdata(s) { return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>'; }
function xmlNum(n) { return (Math.round(n * 100) / 100).toFixed(2); }
function stripTags(html) { return String(html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(); }
function truncateAtWord(s, maxLen) {
  if (!s || s.length <= maxLen) return s || '';
  const cut = s.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
}

async function getCzkToEurRate() {
  const res = await fetch('https://api.frankfurter.app/latest?from=CZK&to=EUR');
  const data = await res.json();
  const rate = data && data.rates && data.rates.EUR;
  if (!rate) throw new Error('Could not fetch CZK->EUR rate from frankfurter.app');
  return rate;
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
  const images = (CDN_IMAGES[p.code] && CDN_IMAGES[p.code].length) ? CDN_IMAGES[p.code] : p.images.map(proxyImgAspUrl);
  if (images.length) {
    parts.push('<IMAGES>');
    images.forEach((img, i) => parts.push(`  <IMAGE description="${xmlAttr(imageAltFor(p.name, i, images.length))}">${xmlEscape(img)}</IMAGE>`));
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
  if (p.compatibleModels && p.compatibleModels.size) {
    parts.push('<INFORMATION_PARAMETERS>');
    for (const [name, values] of p.compatibleModels) {
      parts.push('  <INFORMATION_PARAMETER>');
      parts.push(`    <NAME>${xmlCdata(name)}</NAME>`);
      values.forEach((v) => parts.push(`    <VALUE>${xmlCdata(v)}</VALUE>`));
      parts.push('  </INFORMATION_PARAMETER>');
    }
    parts.push('</INFORMATION_PARAMETERS>');
  }
  if (p.alternatives.length) {
    parts.push('<ALTERNATIVE_PRODUCTS>');
    p.alternatives.forEach((c) => parts.push(`  <CODE>${xmlEscape(c)}</CODE>`));
    parts.push('</ALTERNATIVE_PRODUCTS>');
  }
  parts.push(`<FLAGS><ACTION>${p.actionFlag}</ACTION><NEW>${p.newFlag}</NEW><TIP>${p.tipFlag}</TIP></FLAGS>`);
  parts.push(`<AVAILABILITY>${xmlCdata(p.availability)}</AVAILABILITY>`);
  parts.push('<VISIBLE>1</VISIBLE>');
  parts.push('<VISIBILITY>visible</VISIBILITY>');
  parts.push(`<LOGISTIC><WEIGHT>${xmlNum(p.weightKg || 0)}</WEIGHT></LOGISTIC>`);
  parts.push('<CURRENCY>EUR</CURRENCY>');
  parts.push(`<PRICE_VAT>${xmlNum(p.price)}</PRICE_VAT>`);
  if (p.purchasePrice) {
    parts.push(`<PURCHASE_PRICE>${xmlNum(p.purchasePrice)}</PURCHASE_PRICE>`);
    parts.push(`<PURCHASE_VAT>${xmlEscape(p.vat)}</PURCHASE_VAT>`);
    parts.push('<PURCHASE_PRICE_INCL_VAT>0</PURCHASE_PRICE_INCL_VAT>');
  }
  if (p.recyclingFeePrice) {
    parts.push(`<RECYCLING_FEE_CATEGORY>${xmlCdata('ATOS recyklačný poplatok')}</RECYCLING_FEE_CATEGORY>`);
    parts.push(`<RECYCLING_FEE_PRICE>${xmlNum(p.recyclingFeePrice)}</RECYCLING_FEE_PRICE>`);
    parts.push('<RECYCLING_FEE_CURRENCY>EUR</RECYCLING_FEE_CURRENCY>');
    parts.push('<RECYCLING_FEE_TYPE>1</RECYCLING_FEE_TYPE>');
  }
  if (p.seoTitle) parts.push(`<SEO_TITLE>${xmlCdata(p.seoTitle)}</SEO_TITLE>`);
  if (p.metaDescription) parts.push(`<META_DESCRIPTION>${xmlCdata(p.metaDescription)}</META_DESCRIPTION>`);
  parts.push('</SHOPITEM>');
  return parts.join('\n');
}

async function main() {
  if (!URL) { console.error('Missing ATOS_URL environment variable.'); process.exit(1); }

  console.log('Fetching CZK->EUR rate...');
  const rate = await getCzkToEurRate();
  console.log(`  -> 1 CZK = ${rate} EUR`);

  console.log('Streaming ATOS feed and building Shoptet XML...');
  const previousPrices = loadPreviousPrices(OUT_PATH);
  const anomalies = [];
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  const stats = { total: 0, written: 0, skippedNoPrice: 0, skippedCheap: 0, skippedCategory: 0, skippedUnmatchedCategory: 0, skippedManufacturer: 0, action: 0, new: 0, tip: 0, withCompatibleModels: 0 };
  const auth = { username: USERNAME, password: PASSWORD };

  await streamRecords(URL, 'SHOPITEM', (rawXml) => {
    stats.total++;
    let p;
    try { p = parseAtosItem(rawXml); } catch (e) { return; }
    if (!p || !p.name) { stats.skippedNoPrice++; return; }
    if (EXCLUDED_CODES.has(p.code)) { stats.skippedBadPrice = (stats.skippedBadPrice || 0) + 1; return; }
    if (p.manufacturer && EXCLUDED_MANUFACTURERS.has(p.manufacturer.toLowerCase())) { stats.skippedManufacturer++; return; }
    if (p.purchasePriceCZK <= 0) { stats.skippedNoPrice++; return; }

    const purchaseEUR = p.purchasePriceCZK * rate;
    if (MIN_COST > 0 && purchaseEUR < MIN_COST) { stats.skippedCheap++; return; }

    const vat = '23'; // sell in Slovakia — ATOS's own VAT field (21) reflects Czech VAT, not ours
    let price = roundPrice(purchaseEUR * (1 + MARKUP_PCT / 100) * (1 + parseFloat(vat) / 100));
    price = applyHeurekaPriceTarget(p.ean, price, purchaseEUR, parseFloat(vat));

    const sanity = checkPriceSanity(previousPrices, p.code, p.ean, price);
    if (!sanity.sane) {
      stats.skippedPriceAnomaly = (stats.skippedPriceAnomaly || 0) + 1;
      anomalies.push({ code: p.code, ean: p.ean, name: p.name, ...sanity });
      return;
    }

    const { defaultCategory, extraCategories, unmatchedCategory } = resolveAtosCategories(p.categoryTexts, p.name);
    if (!defaultCategory) { if (unmatchedCategory) stats.skippedUnmatchedCategory++; else stats.skippedCategory++; return; }

    const availability = p.availabilityRaw === 'skladem' ? 'Skladom' : 'Na objednávku';
    if (EXCLUDE_UNAVAILABLE && availability !== 'Skladom') { stats.skippedUnavailable = (stats.skippedUnavailable || 0) + 1; return; }

    const shortDescription = p.shortDescription || truncateAtWord(stripTags(p.description), 200);
    const nameHasManufacturer = p.manufacturer && p.name.toLowerCase().includes(p.manufacturer.toLowerCase());
    const titleCore = (p.manufacturer && !nameHasManufacturer) ? `${p.name} – ${p.manufacturer}` : p.name;
    const seoTitle = truncateAtWord(`${titleCore} | ${STORE_NAME}`, 70);
    const metaDescription = truncateAtWord(
      `${p.name}${p.manufacturer && !nameHasManufacturer ? ' od ' + p.manufacturer : ''} – ${availability.toLowerCase()}. Kúpte na ${STORE_NAME}.`,
      155
    );

    const recyclingFeePrice = p.recyclingFeeCZK > 0 ? p.recyclingFeeCZK * rate : 0;

    if (p.actionFlag === '1') stats.action++;
    if (p.newFlag === '1') stats.new++;
    if (p.tipFlag === '1') stats.tip++;

    // Diaľkové ovládače: ATOS lists compatible device models inside the description text
    // ("Ovladač je kompatibilní s těmito modely televizorů: ..."), not as real feed parameters.
    // Turn those into filterable Shoptet parameters (e.g. "Kompatibilný model TV") so a category
    // filter by exact model becomes possible — mark the parameter as filtrovací in Shoptet admin.
    const compatibleModelParams = extractCompatibleModels(p.description);
    let compatibleModels = null;
    if (compatibleModelParams.length) {
      stats.withCompatibleModels++;
      compatibleModels = new Map();
      for (const pv of compatibleModelParams) {
        const idx = pv.indexOf(';');
        const name = pv.slice(0, idx), value = pv.slice(idx + 1);
        if (!compatibleModels.has(name)) compatibleModels.set(name, []);
        compatibleModels.get(name).push(value);
      }
    }

    const shopitem = buildShopitemXml({
      code: p.code, name: p.name, description: p.description, shortDescription,
      manufacturer: p.manufacturer, warranty: p.warranty, ean: p.ean,
      defaultCategory, extraCategories, images: p.images, params: p.params, compatibleModels,
      alternatives: p.alternatives, actionFlag: p.actionFlag, newFlag: p.newFlag, tipFlag: p.tipFlag,
      availability, weightKg: p.weightKg, price, purchasePrice: purchaseEUR, vat,
      recyclingFeePrice, seoTitle, metaDescription,
    });
    out.write(shopitem + '\n');
    stats.written++;
  }, auth);

  out.write('</SHOP>\n');
  out.end();
  await new Promise((resolve) => out.on('finish', resolve));

  console.log('Done.');
  writeAnomalyReport('atos', anomalies);
  const categoryReport = categoryMatcher.writeReport();
  console.log(JSON.stringify({ ...stats, categoryReport }, null, 2));
  console.log('Output written to', OUT_PATH);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

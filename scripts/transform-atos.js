// Automated equivalent of the "ATOS" tab in the browser tool. Fetches the ATOS Shoptet feed
// (HTTP Basic Auth required), applies the agreed category mapping, converts CZK->EUR at the
// live ECB rate, and writes a Shoptet-native XML ready for Automatické importy.
// Images here are still ATOS's own raw img.asp URLs — the atos-sync workflow's separate
// enrich-shoptet-icecat.js step (REPLACE_IMAGES=1) swaps them for Icecat's gallery afterwards
// for any product with a matched EAN, since ATOS's own URLs don't reliably download into
// Shoptet's automatic import. Products with no Icecat match keep these ATOS URLs as a fallback.
//
// Usage: node transform-atos.js
// Required env vars: ATOS_URL, ATOS_USERNAME, ATOS_PASSWORD
// Optional: ATOS_MARKUP (15), ATOS_MIN_COST (0), ATOS_OUT (./output/atos.xml)

const fs = require('fs');
const path = require('path');
const { streamRecords } = require('./stream-records');
const { parseAtosItem } = require('./parse-atos');
const { roundPrice } = require('./round-price');
const { translateCategoryName } = require('./translate-cz-sk');
const { heurekaCategoryIdFor } = require('./heureka-category');
const { applyHeurekaPriceTarget } = require('./heureka-price-targets');

const URL = process.env.ATOS_URL;
const USERNAME = process.env.ATOS_USERNAME;
const PASSWORD = process.env.ATOS_PASSWORD;
const MARKUP_PCT = parseFloat(process.env.ATOS_MARKUP || '15');
const MIN_COST = parseFloat(process.env.ATOS_MIN_COST || '0');
const OUT_PATH = process.env.ATOS_OUT || path.join(__dirname, '..', 'output', 'atos.xml');
const STORE_NAME = process.env.ATOS_STORE_NAME || 'premiumstore.sk';

const MAPPING_PATH = path.join(__dirname, 'atos-mapping.json');
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8'));
const RENAMES = mapping.categoryRenamesByPath || {};
const EXCLUSIONS = new Set(mapping.categoryExclusionsByPath || []);
// Solight is also a direct supplier with better purchase prices — don't re-sell their own
// products relabelled under ATOS.
const EXCLUDED_MANUFACTURERS = new Set((mapping.excludedManufacturers || []).map((m) => m.toLowerCase()));
const TREE_ROOT = 'Druhy';

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
function resolveAtosCategories(categoryTexts) {
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
  const defaultCategory = sortedPaths.length ? atosDisplayPath(sortedPaths[0]) : '';
  const extraCategories = sortedPaths.slice(1).map(atosDisplayPath).filter(Boolean);
  return { defaultCategory, extraCategories };
}

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
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
  if (p.images.length) {
    parts.push('<IMAGES>');
    p.images.forEach((img) => parts.push(`  <IMAGE>${xmlEscape(img)}</IMAGE>`));
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
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  const stats = { total: 0, written: 0, skippedNoPrice: 0, skippedCheap: 0, skippedCategory: 0, skippedManufacturer: 0, action: 0, new: 0, tip: 0 };
  const auth = { username: USERNAME, password: PASSWORD };

  await streamRecords(URL, 'SHOPITEM', (rawXml) => {
    stats.total++;
    let p;
    try { p = parseAtosItem(rawXml); } catch (e) { return; }
    if (!p || !p.name) { stats.skippedNoPrice++; return; }
    if (p.manufacturer && EXCLUDED_MANUFACTURERS.has(p.manufacturer.toLowerCase())) { stats.skippedManufacturer++; return; }
    if (p.purchasePriceCZK <= 0) { stats.skippedNoPrice++; return; }

    const purchaseEUR = p.purchasePriceCZK * rate;
    if (MIN_COST > 0 && purchaseEUR < MIN_COST) { stats.skippedCheap++; return; }

    const vat = '23'; // sell in Slovakia — ATOS's own VAT field (21) reflects Czech VAT, not ours
    let price = roundPrice(purchaseEUR * (1 + MARKUP_PCT / 100) * (1 + parseFloat(vat) / 100));
    price = applyHeurekaPriceTarget(p.ean, price, purchaseEUR, parseFloat(vat));

    const { defaultCategory, extraCategories } = resolveAtosCategories(p.categoryTexts);
    if (!defaultCategory) { stats.skippedCategory++; return; }

    const availability = p.availabilityRaw === 'skladem' ? 'Skladom' : 'Na objednávku';

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

    const shopitem = buildShopitemXml({
      code: p.code, name: p.name, description: p.description, shortDescription,
      manufacturer: p.manufacturer, warranty: p.warranty, ean: p.ean,
      defaultCategory, extraCategories, images: p.images, params: p.params,
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
  console.log(JSON.stringify(stats, null, 2));
  console.log('Output written to', OUT_PATH);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

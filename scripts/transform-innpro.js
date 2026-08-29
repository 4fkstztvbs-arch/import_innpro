// Automated equivalent of the "InnPro" tab in the browser tool. Fetches full.xml (product
// data) and light.xml (real discounted price + stock), merges them, applies the agreed
// category mapping, and writes a Shoptet-native XML ready for Automatické importy.
//
// Usage: node transform-innpro.js
// Required env vars: INNPRO_FULL_URL, INNPRO_LIGHT_URL
// Optional env vars: INNPRO_MARKUP (default 15), INNPRO_MIN_COST (default 0),
//                     INNPRO_MAX_IMAGES (default 5), INNPRO_OUT (default ./output/innpro.xml),
//                     INNPRO_EXCLUDE_UNAVAILABLE (default off) — set to '1' to skip every product
//                     that isn't actually in stock ('Skladom') instead of importing it as
//                     "Na objednávku" / "Dostupné od ..."

const fs = require('fs');
const path = require('path');
const { streamProducts } = require('./stream-products');
const { parseProduct } = require('./parse-product');
const { roundPrice } = require('./round-price');
const { heurekaCategoryIdFor, isHeurekaHidden } = require('./heureka-category');
const { applyHeurekaPriceTarget } = require('./heureka-price-targets');
const { loadPreviousPrices, checkPriceSanity, buildCategoryPriceStats, checkCategoryOutlier, writeAnomalyReport } = require('./price-sanity');
const { isPilotUnhidden } = require('./heureka-pilot-unhidden');
const { isCpcNonConverter } = require('./heureka-cpc-exclusions');
const { createCategoryMatcher } = require('./resolve-category');
const categoryMatcher = createCategoryMatcher('innpro');

const FULL_URL = process.env.INNPRO_FULL_URL;
const LIGHT_URL = process.env.INNPRO_LIGHT_URL;
const MARKUP_PCT = parseFloat(process.env.INNPRO_MARKUP || '15');
const MIN_COST = parseFloat(process.env.INNPRO_MIN_COST || '0');
const MAX_IMAGES = parseInt(process.env.INNPRO_MAX_IMAGES || '5', 10);
const OUT_PATH = process.env.INNPRO_OUT || path.join(__dirname, '..', 'output', 'innpro.xml');
const STORE_NAME = process.env.INNPRO_STORE_NAME || 'premiumstore.sk';
const OUT_OF_STOCK_TEXT = process.env.INNPRO_OUT_OF_STOCK_TEXT || 'Na objednávku';
// When set, only products that are actually in stock right now (availability === 'Skladom')
// are exported — "Na objednávku" and "Dostupné od ..." products are skipped entirely, not just
// hidden/greyed out. Same convention as KB_EXCLUDE_UNAVAILABLE in transform-kb.js.
const EXCLUDE_UNAVAILABLE = process.env.INNPRO_EXCLUDE_UNAVAILABLE === '1';

const MAPPING_PATH = path.join(__dirname, 'innpro-mapping.json');
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8'));
const RENAMES = mapping.categoryRenamesByPath || {};
const EXCLUSIONS = new Set(mapping.categoryExclusionsByPath || []);
const CATEGORY_OVERRIDES_BY_CODE = mapping.categoryOverridesByCode || {};

function pathToExtraCategories(category) {
  const segs = category.split(' > ');
  const extraCategories = [];
  for (let i = 1; i < segs.length; i++) extraCategories.push(segs.slice(0, i).join(' > '));
  return extraCategories;
}

function isPathOverride(cumKey, rename) { return !!rename && cumKey.includes(' > '); }

// Identical logic to the browser tool's innDisplayPath()/extraCategories: build the cumulative
// "/"-split path, walk from the leaf back toward the root, and stop at the first override.
function resolveCategory(rawCategoryName, productLabel) {
  if (!rawCategoryName) return { category: '', extraCategories: [], excluded: false };
  const parts = rawCategoryName.split('/').map((s) => s.trim()).filter(Boolean);
  const keys = [];
  let cur = '';
  for (const p of parts) {
    cur = cur ? cur + ' > ' + p : p;
    keys.push({ key: cur, name: p });
  }
  if (!keys.length) return { category: '', extraCategories: [], excluded: false };
  if (EXCLUSIONS.has(keys[keys.length - 1].key)) return { category: '', extraCategories: [], excluded: true };

  const leafTrusted = !!RENAMES[keys[keys.length - 1].key];
  const partsResult = [];
  for (let i = keys.length - 1; i >= 0; i--) {
    const rename = RENAMES[keys[i].key];
    if (isPathOverride(keys[i].key, rename)) { partsResult.unshift(rename); break; }
    partsResult.unshift(rename || keys[i].name);
  }
  let category = partsResult.join(' > ');
  const gated = categoryMatcher.resolve(category, { trusted: leafTrusted, productLabel });
  if (gated.excluded) return { category: '', extraCategories: [], excluded: true, unmatchedCategory: category };
  category = gated.category;
  const segs = category.split(' > ');
  const extraCategories = [];
  for (let i = 1; i < segs.length; i++) extraCategories.push(segs.slice(0, i).join(' > '));
  return { category, extraCategories, excluded: false };
}

function xmlEscape(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function xmlAttr(s) { return xmlEscape(s).replace(/"/g, '&quot;'); }
// Without a description attribute, Shoptet derives alt text from the image filename instead of
// the product name — hurts accessibility and image-search SEO.
function imageAltFor(name, index, total) {
  return total > 1 ? `${name} - obrázok ${index + 1}` : name;
}
function xmlCdata(s) {
  return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>';
}
function xmlNum(n) { return (Math.round(n * 100) / 100).toFixed(2); }
function stripTags(html) {
  return String(html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}
function truncateAtWord(s, maxLen) {
  if (!s || s.length <= maxLen) return s || '';
  const cut = s.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
}

async function loadLightData(url) {
  const map = new Map();
  await streamProducts(url, (rawXml) => {
    // light.xml products are much simpler — reuse parseProduct's price/stock extraction by
    // wrapping the same fast-xml-parser call inline (avoids requiring description/category).
    const { XMLParser } = require('fast-xml-parser');
    const p = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_', isArray: (n) => ['stock'].includes(n) }).parse(rawXml).product;
    if (!p) return;
    const id = p['@_id'];
    const priceNet = p.price ? parseFloat(String(p.price['@_net'] || '0').replace(',', '.')) : 0;
    let stock = 0;
    let infinite = false;
    const stockList = [];
    (function collectStocks(node) {
      if (!node || typeof node !== 'object') return;
      for (const [k, v] of Object.entries(node)) {
        if (k === 'stock') {
          for (const s of (Array.isArray(v) ? v : [v])) {
            const q = s['@_quantity'];
            if (q === '-1') infinite = true; else stock += parseFloat(q || '0');
          }
        } else if (typeof v === 'object') {
          collectStocks(v);
        }
      }
    })(p.sizes);
    if (priceNet > 0) map.set(id, { price: priceNet, stock, infinite });
  });
  return map;
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

  const allCats = [p.category].concat(p.extraCategories || []).filter(Boolean);
  if (allCats.length) {
    parts.push('<CATEGORIES>');
    allCats.forEach((c) => parts.push(`  <CATEGORY>${xmlCdata(c)}</CATEGORY>`));
    parts.push('</CATEGORIES>');
  }
  const heurekaCategoryId = heurekaCategoryIdFor(p.category);
  if (heurekaCategoryId) parts.push(`<HEUREKA_CATEGORY_ID>${heurekaCategoryId}</HEUREKA_CATEGORY_ID>`);
  if ((isHeurekaHidden(p.defaultCategory, p.price) || isCpcNonConverter(p.ean)) && !isPilotUnhidden(p.ean)) parts.push('<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>');
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
  parts.push(`<AVAILABILITY>${xmlCdata(p.availability)}</AVAILABILITY>`);
  parts.push('<VISIBLE>1</VISIBLE>');
  parts.push('<VISIBILITY>visible</VISIBILITY>');
  parts.push(`<LOGISTIC><WEIGHT>${xmlNum(p.weightKg || 0)}</WEIGHT></LOGISTIC>`);
  parts.push('<CURRENCY>EUR</CURRENCY>');
  parts.push(`<PRICE_VAT>${xmlNum(p.price)}</PRICE_VAT>`);
  if (p.purchasePrice) {
    parts.push(`<PURCHASE_PRICE>${xmlNum(p.purchasePrice)}</PURCHASE_PRICE>`);
    parts.push(`<PURCHASE_VAT>${xmlEscape(p.vat || '23')}</PURCHASE_VAT>`);
    parts.push('<PURCHASE_PRICE_INCL_VAT>0</PURCHASE_PRICE_INCL_VAT>');
  }
  if (p.seoTitle) parts.push(`<SEO_TITLE>${xmlCdata(p.seoTitle)}</SEO_TITLE>`);
  if (p.metaDescription) parts.push(`<META_DESCRIPTION>${xmlCdata(p.metaDescription)}</META_DESCRIPTION>`);
  parts.push('</SHOPITEM>');
  return parts.join('\n');
}

async function main() {
  if (!FULL_URL || !LIGHT_URL) {
    console.error('Missing INNPRO_FULL_URL / INNPRO_LIGHT_URL environment variables.');
    process.exit(1);
  }

  console.log('Loading light.xml (price/stock overrides)...');
  const lightData = await loadLightData(LIGHT_URL);
  console.log(`  -> ${lightData.size} products with live price/stock`);

  console.log('Streaming full.xml and building Shoptet XML...');
  const previousPrices = loadPreviousPrices(OUT_PATH);
  const categoryStats = buildCategoryPriceStats(OUT_PATH);
  const anomalies = [];
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  const stats = { total: 0, written: 0, skippedNoPrice: 0, skippedCheap: 0, skippedCategory: 0, skippedUnmatchedCategory: 0, skippedUnavailable: 0, fromLight: 0 };

  await streamProducts(FULL_URL, (rawXml) => {
    stats.total++;
    let p;
    try { p = parseProduct(rawXml); } catch (e) { return; }
    if (!p || !p.name) { stats.skippedNoPrice++; return; }

    const lightEntry = lightData.get(p.id);
    let cost;
    if (lightEntry) { cost = lightEntry.price; stats.fromLight++; }
    else cost = p.priceNet;
    if (cost <= 0) {
      stats.skippedNoPrice++;
      anomalies.push({ code: p.codeOnCard || p.id, ean: p.ean, name: p.name, reason: 'zero-price', newPrice: 0 });
      return;
    }
    if (MIN_COST > 0 && cost < MIN_COST) { stats.skippedCheap++; return; }

    let price = roundPrice(cost * (1 + MARKUP_PCT / 100) * (1 + parseFloat(p.vat) / 100));
    price = applyHeurekaPriceTarget(p.ean, price, cost, parseFloat(p.vat));

    const sanity = checkPriceSanity(previousPrices, p.codeOnCard || p.id, p.ean, price);
    if (!sanity.sane) {
      stats.skippedPriceAnomaly = (stats.skippedPriceAnomaly || 0) + 1;
      anomalies.push({ code: p.codeOnCard || p.id, ean: p.ean, name: p.name, reason: 'day-over-day', ...sanity });
      return;
    }

    let { category, extraCategories, excluded, unmatchedCategory } = resolveCategory(p.category, p.name);
    if (excluded) { if (unmatchedCategory) stats.skippedUnmatchedCategory++; else stats.skippedCategory++; return; }
    const productCode = p.codeOnCard || p.id;
    if (CATEGORY_OVERRIDES_BY_CODE[productCode]) {
      category = CATEGORY_OVERRIDES_BY_CODE[productCode];
      extraCategories = pathToExtraCategories(category);
    }

    const categoryOutlier = checkCategoryOutlier(categoryStats, category, price);
    if (!categoryOutlier.sane) {
      stats.skippedPriceAnomaly = (stats.skippedPriceAnomaly || 0) + 1;
      anomalies.push({ code: productCode, ean: p.ean, name: p.name, reason: 'category-outlier', ...categoryOutlier });
      return;
    }

    let stockQty = 0, stockInfinite = false;
    if (lightEntry) { stockQty = lightEntry.stock; stockInfinite = lightEntry.infinite; }
    else stockQty = p.stock;

    let availability;
    if (stockInfinite || stockQty > 0) availability = 'Skladom';
    else if (p.nextDeliveryDate) availability = `Dostupné od ${p.nextDeliveryDate}`;
    else availability = OUT_OF_STOCK_TEXT;

    if (EXCLUDE_UNAVAILABLE && availability !== 'Skladom') { stats.skippedUnavailable++; return; }

    let description = p.longDesc;
    if (p.docs.length) {
      p.docs.forEach((url, i) => {
        description += `<p><a href="${encodeURI(url)}" target="_blank" rel="noopener">Stiahnuť dokument${p.docs.length > 1 ? ' ' + (i + 1) : ''}</a></p>`;
      });
    }
    const shortDescription = truncateAtWord(stripTags(p.longDesc), 200);

    const nameHasManufacturer = p.manufacturer && p.name.toLowerCase().includes(p.manufacturer.toLowerCase());
    const titleCore = (p.manufacturer && !nameHasManufacturer) ? `${p.name} – ${p.manufacturer}` : p.name;
    const seoTitle = truncateAtWord(`${titleCore} | ${STORE_NAME}`, 70);
    const metaDescription = truncateAtWord(
      `${p.name}${p.manufacturer && !nameHasManufacturer ? ' od ' + p.manufacturer : ''} – ${availability.toLowerCase()}. Kúpte na ${STORE_NAME}.`,
      155
    );

    const shopitem = buildShopitemXml({
      code: p.codeOnCard || p.id,
      name: p.name,
      description,
      shortDescription,
      manufacturer: p.manufacturer,
      warranty: p.warranty,
      ean: p.ean,
      category,
      extraCategories,
      images: p.images.slice(0, MAX_IMAGES),
      params: p.params,
      availability,
      weightKg: p.weightKg,
      price,
      purchasePrice: cost,
      vat: p.vat,
      seoTitle,
      metaDescription,
    });
    out.write(shopitem + '\n');
    stats.written++;
  });

  out.write('</SHOP>\n');
  out.end();

  await new Promise((resolve) => out.on('finish', resolve));

  console.log('Done.');
  writeAnomalyReport('innpro', anomalies);
  const categoryReport = categoryMatcher.writeReport();
  console.log(JSON.stringify({ ...stats, categoryReport }, null, 2));
  console.log('Output written to', OUT_PATH);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

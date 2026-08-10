// Builds a Shoptet-native XML for the Sonos brand from DisplayME's data:
//   - a catalog export (data/sonos-displayme-catalog.xml) — name/description/images/category/
//     technical params/logistics. Manually provided, like the WiiM PDF; no known live URL, so
//     re-running this script only refreshes price/stock unless a new catalog file is dropped in.
//   - DisplayME's live stock/price feed (SONOS_STOCK_URL) — the freshness source for
//     PRICE_VAT and AVAILABILITY, matched to catalog rows by SKU. This part of the pipeline
//     *is* automatable on a schedule even without a new catalog export.
//
// Products get skipped for two independent reasons (see parse-sonos-catalog.js for the dedup
// step that runs before this): no usable category (per your instruction — mapping/placeholder
// decisions can happen once these are re-added later), or "no price anywhere and no images"
// (catches the DisplayME in-store POS/display-fixture items mixed into the catalog, e.g. "OSL
// Shelftop" — those aren't consumer products).
//
// Usage: node transform-sonos.js
// Required env vars: SONOS_CATALOG_XML, SONOS_STOCK_URL
// Optional: SONOS_OUT (output/sonos.xml), SONOS_STORE_NAME (premiumstore.sk)

const fs = require('fs');
const path = require('path');
const { parseSonosCatalog, hasRealCategory } = require('./parse-sonos-catalog');
const { fetchSonosStock } = require('./parse-sonos-stock');
const { roundPrice } = require('./round-price');
const { heurekaCategoryIdFor } = require('./heureka-category');

const CATALOG_XML = process.env.SONOS_CATALOG_XML || path.join(__dirname, '..', 'data', 'sonos-displayme-catalog.xml');
const STOCK_URL = process.env.SONOS_STOCK_URL;
const OUT_PATH = process.env.SONOS_OUT || path.join(__dirname, '..', 'output', 'sonos.xml');
const STORE_NAME = process.env.SONOS_STORE_NAME || 'premiumstore.sk';

const CATEGORY_MAP = JSON.parse(fs.readFileSync(path.join(__dirname, 'sonos-mapping.json'), 'utf-8'));
const PARAM_LABELS = JSON.parse(fs.readFileSync(path.join(__dirname, 'sonos-param-labels.json'), 'utf-8'));
// Hand-picked from sonos.com (official manufacturer site — no proxy needed, unlike the WiiM/
// audio.sk situation) for SKUs the DisplayME catalog export has no photos for at all. Only
// covers the newer/less common color variants that were worth the manual lookup (Roam 2
// Sunset/Wave/Olive, Move 2 Olive) — see the conversation that produced this file for what was
// checked and not found (Era 100 Pro Pair, Surface Mount Pair, Era 300 Stand, ERA power cable —
// look like Sonos's trade/install line, not on the consumer site).
const OFFICIAL_IMAGES = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'sonos-official-images.json'), 'utf-8'));

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function xmlAttr(s) { return xmlEscape(s).replace(/"/g, '&quot;'); }
function xmlCdata(s) { return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>'; }
function xmlNum(n) { return (Math.round(n * 100) / 100).toFixed(2); }
function stripTags(html) { return String(html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim(); }
function truncateAtWord(s, maxLen) {
  if (!s || s.length <= maxLen) return s || '';
  const cut = s.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
}
function imageAltFor(name, index, total) {
  return total > 1 ? `${name} - obrázok ${index + 1}` : name;
}

function buildDescription(rec) {
  let html = rec.descriptionHtml || (rec.description ? `<p>${xmlEscape(rec.description)}</p>` : '');
  if (rec.packageContents) {
    const lines = rec.packageContents.split('\n').map((l) => l.trim()).filter(Boolean);
    html += '<p><strong>Obsah balenia:</strong></p><ul>' + lines.map((l) => `<li>${xmlEscape(l)}</li>`).join('') + '</ul>';
  }
  return html;
}

function textPropertyTags(rec) {
  const props = [];
  for (const [key, value] of Object.entries(rec.params)) {
    const label = PARAM_LABELS[key] || key;
    props.push([label, value]);
  }
  // Logistics — kept as TEXT_PROPERTY (not a dedicated Shoptet field) so it's guaranteed to
  // show up in the admin regardless of whether product-level dimensions have a native tag.
  const dims = (l, w, h) => (l && w && h) ? `${l}×${w}×${h} cm` : '';
  const nettoD = dims(rec.lengthNettoCm, rec.widthNettoCm, rec.heightNettoCm);
  const bruttoD = dims(rec.lengthBruttoCm, rec.widthBruttoCm, rec.heightBruttoCm);
  const cartonD = dims(rec.masterCartonLengthCm, rec.masterCartonWidthCm, rec.masterCartonHeightCm);
  if (nettoD) props.push(['Rozmery produktu (D×Š×V)', nettoD]);
  if (rec.weightNettoKg) props.push(['Hmotnosť produktu (kg)', String(rec.weightNettoKg)]);
  if (bruttoD) props.push(['Rozmery balenia (D×Š×V)', bruttoD]);
  if (rec.weightBruttoKg) props.push(['Hmotnosť balenia (kg)', String(rec.weightBruttoKg)]);
  if (cartonD) props.push(['Rozmery kartónu (D×Š×V)', cartonD]);
  if (rec.masterCartonWeightKg) props.push(['Hmotnosť kartónu (kg)', String(rec.masterCartonWeightKg)]);
  if (rec.unitsPerCase) props.push(['Ks v balení', String(rec.unitsPerCase)]);
  if (rec.unitsPerMasterCarton) props.push(['Ks v kartóne', String(rec.unitsPerMasterCarton)]);
  if (rec.unitsPerPalette) props.push(['Ks na palete', String(rec.unitsPerPalette)]);
  if (rec.unitsPerPaletteLayerQty) props.push(['Ks na vrstve palety', String(rec.unitsPerPaletteLayerQty)]);
  if (rec.countryOfOrigin) props.push(['Krajina pôvodu', rec.countryOfOrigin]);
  if (rec.hsCode) props.push(['Colný sadzobník (HS kód)', rec.hsCode]);
  return props;
}

function buildShopitemXml(p) {
  const parts = ['<SHOPITEM>'];
  parts.push(`<NAME>${xmlCdata(p.name)}</NAME>`);
  if (p.shortDescription) parts.push(`<SHORT_DESCRIPTION>${xmlCdata(p.shortDescription)}</SHORT_DESCRIPTION>`);
  parts.push(`<DESCRIPTION>${xmlCdata(p.description)}</DESCRIPTION>`);
  parts.push(`<MANUFACTURER>${xmlCdata('Sonos')}</MANUFACTURER>`);
  parts.push('<ITEM_TYPE>product</ITEM_TYPE>');
  parts.push('<UNIT>ks</UNIT>');
  parts.push(`<CODE>${xmlEscape(p.code)}</CODE>`);
  if (p.ean) parts.push(`<EAN>${xmlEscape(p.ean)}</EAN>`);

  parts.push('<CATEGORIES>');
  parts.push(`  <CATEGORY>${xmlCdata(p.category)}</CATEGORY>`);
  parts.push('</CATEGORIES>');
  const heurekaCategoryId = heurekaCategoryIdFor(p.category);
  if (heurekaCategoryId) parts.push(`<HEUREKA_CATEGORY_ID>${heurekaCategoryId}</HEUREKA_CATEGORY_ID>`);

  if (p.images.length) {
    parts.push('<IMAGES>');
    p.images.forEach((img, i) => parts.push(`  <IMAGE description="${xmlAttr(imageAltFor(p.name, i, p.images.length))}">${xmlEscape(img)}</IMAGE>`));
    parts.push('</IMAGES>');
  }
  if (p.textProperties.length) {
    parts.push('<TEXT_PROPERTIES>');
    p.textProperties.forEach(([name, value]) => {
      parts.push(`  <TEXT_PROPERTY>\n    <NAME>${xmlCdata(name)}</NAME>\n    <VALUE>${xmlCdata(value)}</VALUE>\n  </TEXT_PROPERTY>`);
    });
    parts.push('</TEXT_PROPERTIES>');
  }
  parts.push(`<AVAILABILITY>${xmlCdata(p.availability)}</AVAILABILITY>`);
  parts.push('<VISIBLE>1</VISIBLE>');
  parts.push('<VISIBILITY>visible</VISIBILITY>');
  if (p.weightKg) parts.push(`<LOGISTIC><WEIGHT>${xmlNum(p.weightKg)}</WEIGHT></LOGISTIC>`);
  parts.push('<CURRENCY>EUR</CURRENCY>');
  parts.push(`<PRICE_VAT>${xmlNum(p.price)}</PRICE_VAT>`);
  if (p.seoTitle) parts.push(`<SEO_TITLE>${xmlCdata(p.seoTitle)}</SEO_TITLE>`);
  if (p.metaDescription) parts.push(`<META_DESCRIPTION>${xmlCdata(p.metaDescription)}</META_DESCRIPTION>`);
  parts.push('</SHOPITEM>');
  return parts.join('\n');
}

async function main() {
  if (!fs.existsSync(CATALOG_XML)) {
    console.error(`Sonos catalog not found at ${CATALOG_XML}. Set SONOS_CATALOG_XML.`);
    process.exit(1);
  }
  if (!STOCK_URL) {
    console.error('Missing SONOS_STOCK_URL environment variable.');
    process.exit(1);
  }

  console.log('Parsing catalog...');
  const catalog = parseSonosCatalog(fs.readFileSync(CATALOG_XML, 'utf-8'));
  console.log(`  -> ${catalog.length} unique SKUs after dedup.`);

  console.log('Fetching live stock/price feed...');
  const stock = await fetchSonosStock(STOCK_URL);
  console.log(`  -> ${stock.size} Sonos SKUs in live feed.`);

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  const stats = { total: catalog.length, written: 0, skippedNoCategory: 0, skippedPosOrNoPrice: 0, matchedLiveStock: 0 };
  const unmappedCategories = new Set();

  catalog.forEach((rec) => {
    if (!hasRealCategory(rec.category)) { stats.skippedNoCategory++; return; }

    const live = stock.get(rec.sku);
    if (live) stats.matchedLiveStock++;

    const images = rec.images.length ? rec.images : (OFFICIAL_IMAGES[rec.sku] || []);
    if (images !== rec.images && images.length) stats.officialImagesUsed = (stats.officialImagesUsed || 0) + 1;

    const hasAnyPrice = (live && live.incVatPriceEur > 0) || rec.priceEur > 0;
    if (!hasAnyPrice && !images.length) { stats.skippedPosOrNoPrice++; return; }

    const price = roundPrice(live && live.incVatPriceEur > 0 ? live.incVatPriceEur : rec.priceEur);
    if (!price) { stats.skippedPosOrNoPrice++; return; }

    const availability = live ? (live.qty > 0 ? 'Skladom' : 'Na objednávku') : 'Na objednávku';

    let category = CATEGORY_MAP[rec.category];
    if (!category) {
      category = 'TV, audio a video > Audio technika > HiFi komponenty';
      unmappedCategories.add(rec.category);
    }

    const shortDescription = truncateAtWord(stripTags(rec.description || rec.descriptionHtml), 200);
    const seoTitle = truncateAtWord(`${rec.name} | ${STORE_NAME}`, 70);
    const metaDescription = truncateAtWord(`${rec.name} – ${availability.toLowerCase()}. Kúpte na ${STORE_NAME}.`, 155);

    const shopitem = buildShopitemXml({
      code: rec.sku, ean: rec.ean, name: rec.name, category,
      description: buildDescription(rec), shortDescription,
      images, textProperties: textPropertyTags(rec),
      availability, weightKg: rec.weightBruttoKg, price, seoTitle, metaDescription,
    });
    out.write(shopitem + '\n');
    stats.written++;
  });

  out.write('</SHOP>\n');
  out.end();
  await new Promise((resolve) => out.on('finish', resolve));

  console.log('Done.');
  console.log(JSON.stringify(stats, null, 2));
  if (unmappedCategories.size) {
    console.warn('WARNING: no mapping for these DisplayME categories (used HiFi komponenty fallback) — add to scripts/sonos-mapping.json:');
    unmappedCategories.forEach((c) => console.warn('  -', c));
  }
  console.log('Output written to', OUT_PATH);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

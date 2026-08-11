// Automated import for BASYS (basys.sk) — BOSE products, sourced from the official Bose
// distributor price list (data/basys-bose-pricelist.json, extracted from the "BOSE VOC FY27_ALL"
// sheet of a manually-supplied xlsx — see reports/prehlad-importov.md for how to refresh it when
// BASYS sends an updated one). This is the primary and only source of truth for which products
// get imported, their EAN, and both prices (MOC = official retail incl. VAT, VOC bez DPH = real
// purchase price excl. VAT) — no estimation needed, unlike the earlier Heureka-feed-only attempt.
//
// The BASYS Heureka feed (data/basys-heureka-feed-sample.xml, or BASYS_LOCAL_FILE/BASYS_URL) is
// used only as a secondary enrichment source for images + description, matched by order code
// (obj.kod == ITEM_ID, normalized). Coverage is partial (~59/76 at the time this was built) —
// products with no match in the feed still get imported, just without images/description.
//
// BASYS also sends periodic promo price lists (a few times a year) — each one extracted into its
// own data/basys-bose-promo-*.json (validFrom/validUntil/items, see
// scripts/extract-basys-promo-example in commit history for the extraction shape). Every such
// file present is loaded automatically; a product's promo price applies only while today falls
// inside that file's [validFrom, validUntil] window, so an expired promo silently stops applying
// on its own without needing anyone to remember to revert it — just leave the JSON file in place.
// When a promo is active: PRICE_VAT becomes the promo price, STANDARD_PRICE keeps the original
// MOC (shown crossed out by Shoptet), and FLAGS>ACTION is set so it's marked as an "akcia".
//
// Usage: node transform-basys.js
// Optional: BASYS_URL (feed URL) or BASYS_LOCAL_FILE (local path) for the enrichment source;
//           falls back to data/basys-heureka-feed-sample.xml if neither is set.
//           BASYS_PRICELIST (path to the extracted JSON), BASYS_VAT (23), BASYS_OUT

const fs = require('fs');
const path = require('path');
const { roundPrice } = require('./round-price');
const { heurekaCategoryIdFor, isHeurekaHidden } = require('./heureka-category');

const PRICELIST_PATH = process.env.BASYS_PRICELIST || path.join(__dirname, '..', 'data', 'basys-bose-pricelist.json');
const DATA_DIR = path.join(__dirname, '..', 'data');
const URL = process.env.BASYS_URL;
const LOCAL_FILE = process.env.BASYS_LOCAL_FILE || path.join(__dirname, '..', 'data', 'basys-heureka-feed-sample.xml');
const VAT = process.env.BASYS_VAT || '23';
const OUT_PATH = process.env.BASYS_OUT || path.join(__dirname, '..', 'output', 'basys.xml');
const STORE_NAME = process.env.BASYS_STORE_NAME || 'premiumstore.sk';

const mapping = JSON.parse(fs.readFileSync(path.join(__dirname, 'basys-mapping.json'), 'utf-8'));
const PRICE_LIST_CATEGORY_MAP = mapping.priceListCategoryMap || {};

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function xmlAttr(s) { return xmlEscape(s).replace(/"/g, '&quot;'); }
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
function norm(s) { return String(s || '').replace(/\s+/g, ' ').trim().toUpperCase(); }

// Loads every data/basys-bose-promo-*.json present and returns objKod -> promoMocInclVat for
// only those whose [validFrom, validUntil] window includes today. A promo file left in place
// after its own end date simply stops contributing anything — no manual revert needed.
function loadActivePromos() {
  const today = new Date().toISOString().slice(0, 10);
  const map = new Map();
  const files = fs.readdirSync(DATA_DIR).filter((f) => /^basys-bose-promo.*\.json$/.test(f));
  for (const file of files) {
    const promo = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf-8'));
    const active = today >= promo.validFrom && today <= promo.validUntil;
    console.log(`  promo ${file}: ${promo.validFrom} – ${promo.validUntil} (${active ? 'AKTÍVNA' : 'neaktívna'}), ${promo.items.length} produktov`);
    if (!active) continue;
    for (const item of promo.items) {
      map.set(norm(item.objKod), item.promoMocInclVat);
    }
  }
  return map;
}

// Builds ITEM_ID -> {images, description} from the BASYS Heureka feed, for enrichment lookup.
function loadFeedEnrichment() {
  const map = new Map();
  let xml;
  if (LOCAL_FILE && fs.existsSync(LOCAL_FILE)) {
    xml = fs.readFileSync(LOCAL_FILE, 'utf-8');
  } else if (URL) {
    console.warn('Live BASYS_URL fetch not implemented yet for enrichment — skipping image/description enrichment.');
    return map;
  } else {
    console.warn(`No BASYS feed found at ${LOCAL_FILE} — proceeding without image/description enrichment.`);
    return map;
  }
  const blocks = xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || [];
  const he = require('he');
  for (const block of blocks) {
    const idM = block.match(/<ITEM_ID>([\s\S]*?)<\/ITEM_ID>/);
    if (!idM) continue;
    const imgM = block.match(/<IMGURL>([\s\S]*?)<\/IMGURL>/);
    const imgAltM = block.match(/<IMGURL_ALTERNATIVE>([\s\S]*?)<\/IMGURL_ALTERNATIVE>/);
    const descM = block.match(/<DESCRIPTION>([\s\S]*?)<\/DESCRIPTION>/);
    const images = [imgM && imgM[1].trim(), imgAltM && imgAltM[1].trim()].filter(Boolean);
    const description = descM ? he.decode(he.decode(descM[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim())) : '';
    map.set(norm(idM[1]), { images, description });
  }
  return map;
}

function buildShopitemXml(p) {
  const parts = ['<SHOPITEM>'];
  parts.push(`<NAME>${xmlCdata(p.name)}</NAME>`);
  if (p.shortDescription) parts.push(`<SHORT_DESCRIPTION>${xmlCdata(p.shortDescription)}</SHORT_DESCRIPTION>`);
  parts.push(`<DESCRIPTION>${xmlCdata(p.description)}</DESCRIPTION>`);
  parts.push(`<MANUFACTURER>${xmlCdata('Bose')}</MANUFACTURER>`);
  parts.push('<ITEM_TYPE>product</ITEM_TYPE>');
  parts.push('<UNIT>ks</UNIT>');
  parts.push(`<CODE>${xmlEscape(p.code)}</CODE>`);
  parts.push(`<EAN>${xmlEscape(p.ean)}</EAN>`);

  parts.push(`<CATEGORIES><CATEGORY>${xmlCdata(p.defaultCategory)}</CATEGORY></CATEGORIES>`);
  const heurekaCategoryId = heurekaCategoryIdFor(p.defaultCategory);
  if (heurekaCategoryId) parts.push(`<HEUREKA_CATEGORY_ID>${heurekaCategoryId}</HEUREKA_CATEGORY_ID>`);
  if (isHeurekaHidden(p.defaultCategory, p.price)) parts.push('<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>');
  if (p.images.length) {
    parts.push('<IMAGES>');
    p.images.forEach((img, i) => parts.push(`  <IMAGE description="${xmlAttr(imageAltFor(p.name, i, p.images.length))}">${xmlEscape(img)}</IMAGE>`));
    parts.push('</IMAGES>');
  }
  if (p.onPromo) parts.push('<FLAGS><ACTION>1</ACTION><NEW>0</NEW><TIP>0</TIP></FLAGS>');
  parts.push(`<AVAILABILITY>${xmlCdata('Na objednávku')}</AVAILABILITY>`);
  parts.push('<VISIBLE>1</VISIBLE>');
  parts.push('<VISIBILITY>visible</VISIBILITY>');
  parts.push('<CURRENCY>EUR</CURRENCY>');
  if (p.onPromo) parts.push(`<STANDARD_PRICE>${xmlNum(p.standardPrice)}</STANDARD_PRICE>`);
  parts.push(`<PRICE_VAT>${xmlNum(p.price)}</PRICE_VAT>`);
  parts.push(`<PURCHASE_PRICE>${xmlNum(p.purchasePrice)}</PURCHASE_PRICE>`);
  parts.push(`<PURCHASE_VAT>${VAT}</PURCHASE_VAT>`);
  parts.push('<PURCHASE_PRICE_INCL_VAT>0</PURCHASE_PRICE_INCL_VAT>');
  if (p.seoTitle) parts.push(`<SEO_TITLE>${xmlCdata(p.seoTitle)}</SEO_TITLE>`);
  if (p.metaDescription) parts.push(`<META_DESCRIPTION>${xmlCdata(p.metaDescription)}</META_DESCRIPTION>`);
  parts.push('</SHOPITEM>');
  return parts.join('\n');
}

function main() {
  if (!fs.existsSync(PRICELIST_PATH)) {
    console.error(`Missing price list: ${PRICELIST_PATH}`);
    process.exit(1);
  }
  const priceList = JSON.parse(fs.readFileSync(PRICELIST_PATH, 'utf-8'));
  console.log(`Loaded ${priceList.length} products from official BASYS/Bose price list.`);

  const enrichment = loadFeedEnrichment();
  console.log(`Loaded enrichment data for ${enrichment.size} products from BASYS feed.`);

  console.log('Checking for active promo price lists...');
  const activePromos = loadActivePromos();
  console.log(`  -> ${activePromos.size} produktov má dnes aktívnu akciovú cenu.`);

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  const stats = { total: priceList.length, written: 0, enriched: 0, noEnrichment: 0, onPromo: 0 };

  for (const item of priceList) {
    const enrich = enrichment.get(norm(item.objKod));
    const hasEnrichment = !!enrich;
    if (hasEnrichment) stats.enriched++; else stats.noEnrichment++;

    const name = [item.name, item.color].filter(Boolean).join(' - ').replace(/\s+/g, ' ').trim();
    const description = hasEnrichment && enrich.description
      ? enrich.description
      : `<p>${xmlEscape(item.name)}${item.color ? ' – farba: ' + xmlEscape(item.color) : ''}</p>`;
    const images = hasEnrichment ? enrich.images : [];

    const defaultCategory = PRICE_LIST_CATEGORY_MAP[item.category] || 'TV, audio a video > Audio technika';

    const standardPrice = roundPrice(item.mocInclVat);
    const promoPrice = activePromos.get(norm(item.objKod));
    const onPromo = promoPrice !== undefined;
    const price = onPromo ? roundPrice(promoPrice) : standardPrice;
    if (onPromo) stats.onPromo++;
    const purchasePrice = item.purchasePriceExclVat;

    const shortDescription = truncateAtWord(stripTags(description), 200);
    const seoTitle = truncateAtWord(`${name} | ${STORE_NAME}`, 70);
    const metaDescription = truncateAtWord(`${name} – na objednávku. Kúpte na ${STORE_NAME}.`, 155);

    const shopitem = buildShopitemXml({
      code: 'BASYS-' + item.objKod, ean: item.ean, name, description, shortDescription,
      defaultCategory, images, price, standardPrice, onPromo, purchasePrice, seoTitle, metaDescription,
    });
    out.write(shopitem + '\n');
    stats.written++;
  }

  out.write('</SHOP>\n');
  out.end();

  console.log('Done.');
  console.log(JSON.stringify(stats, null, 2));
  console.log('Output written to', OUT_PATH);
}

main();

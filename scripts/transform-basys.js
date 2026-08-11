// Automated import for BASYS (basys.sk) — BOSE / BOSE Pro products only.
//
// BASYS doesn't offer a dedicated dropship/B2B feed — the only thing available is their own
// Heureka.sk price-comparison XML, so that's what we parse. Notable limitations that flow from
// that: no purchase price (only their own retail price) and no EAN in the source data.
//
// BASYS's own retail price is used directly as our sell price (same approach as Solight) — no
// separate markup on top. Since there's no real purchase price, one is *estimated* purely for
// admin-side display (so the eshop shows a purchase price at all) by assuming BASYS applies the
// same average markup on their own cost that we'd apply as a reseller (BASYS_ASSUMED_MARGIN,
// default 15%) — see reports/prehlad-importov.md for the caveat that this is an estimate, not a
// real number, and must not be used for actual margin decisions without a real supplier price list.
//
// basys.sk's own site (and every other SK/CZ retailer tried — Alza, Nay, Muziker, BSCOM) sits
// behind a Cloudflare/bot-protection challenge that blocks plain HTTP fetches, so unlike
// ATOS/Solight there's no way to enrich with extra images or a fuller description from the web —
// only the 2 images (IMGURL/IMGURL_ALTERNATIVE) and short description the feed itself provides.
// Those same 2 image URLs point at the *same* protected domain, so there's a real risk Shoptet's
// own import can't download them either — check after the first run.
//
// Usage: node transform-basys.js
// Required: BASYS_URL (feed URL) or BASYS_LOCAL_FILE (local path, for testing against an
//           uploaded sample without a stable feed URL yet)
// Optional: BASYS_BRANDS (Bose,Bose Pro), BASYS_ASSUMED_MARGIN (15), BASYS_VAT (23), BASYS_OUT

const fs = require('fs');
const path = require('path');
const { parseBasysProduct } = require('./parse-basys');
const { roundPrice } = require('./round-price');
const { heurekaCategoryIdFor, isHeurekaHidden } = require('./heureka-category');

const URL = process.env.BASYS_URL;
const LOCAL_FILE = process.env.BASYS_LOCAL_FILE;
const BRANDS = new Set((process.env.BASYS_BRANDS || 'Bose,Bose Pro').split(',').map((s) => s.trim()).filter(Boolean));
const ASSUMED_MARGIN_PCT = parseFloat(process.env.BASYS_ASSUMED_MARGIN || '15');
const VAT = process.env.BASYS_VAT || '23';
const OUT_PATH = process.env.BASYS_OUT || path.join(__dirname, '..', 'output', 'basys.xml');
const STORE_NAME = process.env.BASYS_STORE_NAME || 'premiumstore.sk';

const mapping = JSON.parse(fs.readFileSync(path.join(__dirname, 'basys-mapping.json'), 'utf-8'));
const CATEGORY_MAP = mapping.categoryMap || {};
const FALLBACK_BY_MANUFACTURER = mapping.fallbackByManufacturer || {};

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

function resolveCategory(categoryText, manufacturer) {
  return CATEGORY_MAP[categoryText] || FALLBACK_BY_MANUFACTURER[manufacturer] || 'TV, audio a video > Audio technika';
}

function buildShopitemXml(p) {
  const parts = ['<SHOPITEM>'];
  parts.push(`<NAME>${xmlCdata(p.name)}</NAME>`);
  if (p.shortDescription) parts.push(`<SHORT_DESCRIPTION>${xmlCdata(p.shortDescription)}</SHORT_DESCRIPTION>`);
  parts.push(`<DESCRIPTION>${xmlCdata(p.description)}</DESCRIPTION>`);
  if (p.manufacturer) parts.push(`<MANUFACTURER>${xmlCdata(p.manufacturer)}</MANUFACTURER>`);
  parts.push('<ITEM_TYPE>product</ITEM_TYPE>');
  parts.push('<UNIT>ks</UNIT>');
  parts.push(`<CODE>${xmlEscape(p.code)}</CODE>`);

  parts.push(`<CATEGORIES><CATEGORY>${xmlCdata(p.defaultCategory)}</CATEGORY></CATEGORIES>`);
  const heurekaCategoryId = heurekaCategoryIdFor(p.defaultCategory);
  if (heurekaCategoryId) parts.push(`<HEUREKA_CATEGORY_ID>${heurekaCategoryId}</HEUREKA_CATEGORY_ID>`);
  if (isHeurekaHidden(p.defaultCategory, p.price)) parts.push('<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>');
  if (p.images.length) {
    parts.push('<IMAGES>');
    p.images.forEach((img, i) => parts.push(`  <IMAGE description="${xmlAttr(imageAltFor(p.name, i, p.images.length))}">${xmlEscape(img)}</IMAGE>`));
    parts.push('</IMAGES>');
  }
  parts.push(`<AVAILABILITY>${xmlCdata(p.availability)}</AVAILABILITY>`);
  parts.push('<VISIBLE>1</VISIBLE>');
  parts.push('<VISIBILITY>visible</VISIBILITY>');
  parts.push('<CURRENCY>EUR</CURRENCY>');
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
  let xml;
  if (LOCAL_FILE) {
    xml = fs.readFileSync(LOCAL_FILE, 'utf-8');
  } else if (URL) {
    throw new Error('Live BASYS_URL fetch not implemented yet — pass BASYS_LOCAL_FILE, or ask to wire up streamRecords once we have a stable feed URL.');
  } else {
    console.error('Missing BASYS_URL or BASYS_LOCAL_FILE environment variable.');
    process.exit(1);
  }

  console.log('Parsing BASYS feed and building Shoptet XML...');
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  const stats = { total: 0, written: 0, skippedNotBrand: 0, skippedNoPrice: 0 };
  const seenCodes = new Set();

  const blocks = xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || [];
  for (const rawXml of blocks) {
    stats.total++;
    let p;
    try { p = parseBasysProduct(rawXml); } catch (e) { continue; }
    if (!p) continue;
    if (!BRANDS.has(p.manufacturer)) { stats.skippedNotBrand++; continue; }
    if (p.priceInclVat <= 0) { stats.skippedNoPrice++; continue; }

    let code = 'BASYS-' + p.itemId;
    if (seenCodes.has(code)) code = code + '-' + stats.total;
    seenCodes.add(code);

    const price = roundPrice(p.priceInclVat);
    const priceExclVat = price / (1 + parseFloat(VAT) / 100);
    const purchasePrice = roundPrice(priceExclVat / (1 + ASSUMED_MARGIN_PCT / 100));

    const defaultCategory = resolveCategory(p.categoryText, p.manufacturer);
    const availability = p.deliveryDate === '0' ? 'Skladom' : 'Na objednávku';

    const shortDescription = truncateAtWord(stripTags(p.description), 200);
    const seoTitle = truncateAtWord(`${p.name} | ${STORE_NAME}`, 70);
    const metaDescription = truncateAtWord(`${p.name} – ${availability.toLowerCase()}. Kúpte na ${STORE_NAME}.`, 155);

    const shopitem = buildShopitemXml({
      code, name: p.name, description: p.description, shortDescription,
      manufacturer: p.manufacturer, defaultCategory, images: p.images,
      availability, price, purchasePrice, seoTitle, metaDescription,
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

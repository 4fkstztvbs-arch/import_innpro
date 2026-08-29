// Automated equivalent of the "MONACOR" tab in the browser tool. Fetches the pulsepro.audio
// product feed and writes a Shoptet-native XML ready for Automatické importy. No login required
// (public URL) — much simpler than ATOS/InnPro.
//
// Usage: node transform-monacor.js
// Required env vars: MONACOR_URL
// Optional: MONACOR_MARKUP (0), MONACOR_MIN_COST (0), MONACOR_VAT (23),
//           MONACOR_ROOT_CATEGORY (Profesionálna audio technika), MONACOR_OUT

const fs = require('fs');
const path = require('path');
const { streamRecords } = require('./stream-records');
const { parseMonacorProduct } = require('./parse-monacor');
const { roundPrice } = require('./round-price');
const { heurekaCategoryIdFor, isHeurekaHidden } = require('./heureka-category');
const { isCpcNonConverter } = require('./heureka-cpc-exclusions');
const { loadPreviousPrices, checkPriceSanity, writeAnomalyReport } = require('./price-sanity');

const URL = process.env.MONACOR_URL;
const MARKUP_PCT = parseFloat(process.env.MONACOR_MARKUP || '0');
const MIN_COST = parseFloat(process.env.MONACOR_MIN_COST || '0');
const VAT = process.env.MONACOR_VAT || '23';
const ROOT_CATEGORY = process.env.MONACOR_ROOT_CATEGORY || 'Profesionálna audio technika';
const OUT_PATH = process.env.MONACOR_OUT || path.join(__dirname, '..', 'output', 'monacor.xml');
const STORE_NAME = process.env.MONACOR_STORE_NAME || 'premiumstore.sk';
const FOREIGN_AVAIL_TEXT = process.env.MONACOR_FOREIGN_AVAIL_TEXT || 'Dostupné na sklade dodávateľa';
const EXCLUDE_UNAVAILABLE = process.env.MONACOR_EXCLUDE_UNAVAILABLE === '1';

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

function buildShopitemXml(p) {
  const parts = ['<SHOPITEM>'];
  parts.push(`<NAME>${xmlCdata(p.name)}</NAME>`);
  if (p.shortDescription) parts.push(`<SHORT_DESCRIPTION>${xmlCdata(p.shortDescription)}</SHORT_DESCRIPTION>`);
  parts.push(`<DESCRIPTION>${xmlCdata(p.description)}</DESCRIPTION>`);
  if (p.manufacturer) parts.push(`<MANUFACTURER>${xmlCdata(p.manufacturer)}</MANUFACTURER>`);
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
  parts.push(`<AVAILABILITY>${xmlCdata(p.availability)}</AVAILABILITY>`);
  parts.push('<VISIBLE>1</VISIBLE>');
  parts.push('<VISIBILITY>visible</VISIBILITY>');
  parts.push(`<LOGISTIC><WEIGHT>${xmlNum(p.weightKg || 0)}</WEIGHT></LOGISTIC>`);
  parts.push('<CURRENCY>EUR</CURRENCY>');
  parts.push(`<PRICE_VAT>${xmlNum(p.price)}</PRICE_VAT>`);
  if (p.seoTitle) parts.push(`<SEO_TITLE>${xmlCdata(p.seoTitle)}</SEO_TITLE>`);
  if (p.metaDescription) parts.push(`<META_DESCRIPTION>${xmlCdata(p.metaDescription)}</META_DESCRIPTION>`);
  parts.push('</SHOPITEM>');
  return parts.join('\n');
}

async function main() {
  if (!URL) { console.error('Missing MONACOR_URL environment variable.'); process.exit(1); }

  console.log('Streaming MONACOR feed and building Shoptet XML...');
  const previousPrices = loadPreviousPrices(OUT_PATH);
  const anomalies = [];
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  const stats = { total: 0, written: 0, skippedNoPrice: 0, skippedCheap: 0, skippedUnavailable: 0 };
  const seenCodes = new Set();

  await streamRecords(URL, 'product', (rawXml) => {
    stats.total++;
    let p;
    try { p = parseMonacorProduct(rawXml); } catch (e) { return; }
    if (!p) return;
    if (p.basePrice <= 0) { stats.skippedNoPrice++; return; }
    if (MIN_COST > 0 && p.basePrice < MIN_COST) { stats.skippedCheap++; return; }

    let code = p.number || p.id || ('MON' + stats.total);
    if (seenCodes.has(code)) code = code + '-' + p.id;
    seenCodes.add(code);

    const price = roundPrice(p.basePrice * (1 + MARKUP_PCT / 100));

    // shop naming convention: "Značka Model popis"
    const name = [p.manufacturer, p.number, p.baseName].filter(Boolean).join(' ').trim() || p.baseName;

    const sanity = checkPriceSanity(previousPrices, code, p.ean, price);
    if (!sanity.sane) {
      stats.skippedPriceAnomaly = (stats.skippedPriceAnomaly || 0) + 1;
      anomalies.push({ code, ean: p.ean, name, ...sanity });
      return;
    }

    if (EXCLUDE_UNAVAILABLE && p.stock <= 0 && p.foreignstock <= 0) { stats.skippedUnavailable++; return; }
    const availability = p.stock > 0 ? 'Skladom' : (p.foreignstock > 0 ? FOREIGN_AVAIL_TEXT : 'Nedostupné');

    let catPaths = [...new Set(p.categoryTexts)];
    if (ROOT_CATEGORY) catPaths = catPaths.map((c) => `${ROOT_CATEGORY} > ${c}`);
    let defaultCategory = '', extraCategories = [];
    if (catPaths.length) {
      catPaths.sort((a, b) => b.split('>').length - a.split('>').length);
      defaultCategory = catPaths[0];
      extraCategories = catPaths.slice(1);
    } else if (ROOT_CATEGORY) {
      defaultCategory = ROOT_CATEGORY;
    }

    let description = p.description;
    const allDocs = p.files.concat(p.software);
    p.files.forEach((url, i) => {
      description += `<p><a href="${xmlEscape(url)}" target="_blank" rel="noopener">Stiahnuť dokument${p.files.length > 1 ? ' ' + (i + 1) : ''} (PDF)</a></p>`;
    });
    p.software.forEach((url, i) => {
      description += `<p><a href="${xmlEscape(url)}" target="_blank" rel="noopener">Stiahnuť softvér${p.software.length > 1 ? ' ' + (i + 1) : ''}</a></p>`;
    });
    if (p.movies.length) {
      p.movies.forEach((url, i) => {
        description += `<p><a href="${xmlEscape(url)}" target="_blank" rel="noopener">Zobraziť video${p.movies.length > 1 ? ' ' + (i + 1) : ''}</a></p>`;
      });
    }
    const shortDescription = truncateAtWord(stripTags(p.description), 200);

    const seoCore = [p.baseName, p.manufacturer, p.number].filter(Boolean).join(' ').trim() || name;
    const seoTitle = truncateAtWord(`${seoCore} | ${STORE_NAME}`, 70);
    const metaDescription = truncateAtWord(`${seoCore} – ${availability.toLowerCase()}. Kúpte na ${STORE_NAME}.`, 155);

    const shopitem = buildShopitemXml({
      code, name, description, shortDescription, manufacturer: p.manufacturer, ean: p.ean,
      defaultCategory, extraCategories, images: p.images, availability, weightKg: p.weightKg,
      price, seoTitle, metaDescription,
    });
    out.write(shopitem + '\n');
    stats.written++;
  });

  out.write('</SHOP>\n');
  out.end();
  await new Promise((resolve) => out.on('finish', resolve));

  console.log('Done.');
  writeAnomalyReport('monacor', anomalies);
  console.log(JSON.stringify(stats, null, 2));
  console.log('Output written to', OUT_PATH);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

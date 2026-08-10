// Builds a Shoptet-native XML from the WiiM DMOC (maloobchodní ceník) PDF distributed by
// Perfect Sound Group. Unlike the other suppliers, this is NOT a live feed — it's a PDF price
// list that only changes when a new version is manually sent out, so this script is meant to be
// run on demand (workflow_dispatch), not on a nightly schedule: drop the new PDF at
// data/wiim-pricelist.pdf and re-run.
//
// The PDF gives us DMOC EUR, which is already the VAT-included recommended retail price (see
// the price list's own legend) — not a wholesale cost — so there is no separate purchase price
// to mark up here, unlike ATOS/InnPro/K-B/MONACOR/Solight. WIIM_MARKUP defaults to 0 (sell at
// the list's recommended price) but is left configurable in case a discount/premium is wanted.
//
// Images and stock availability are intentionally NOT sourced from this PDF (it has neither) —
// per instruction, availability is hardcoded to "Na objednávku" for every product, and images
// are left for manual follow-up.
//
// Usage: node transform-wiim.js
// Requires poppler-utils' `pdftotext` on PATH.
// Optional env vars: WIIM_PDF (data/wiim-pricelist.pdf), WIIM_OUT (output/wiim.xml),
//                     WIIM_MARKUP (0), WIIM_ROOT_CATEGORY (WiiM), WIIM_STORE_NAME (premiumstore.sk)

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { parseWiimPricelist } = require('./parse-wiim-pricelist');
const { roundPrice } = require('./round-price');
const { heurekaCategoryIdFor } = require('./heureka-category');

const PDF_PATH = process.env.WIIM_PDF || path.join(__dirname, '..', 'data', 'wiim-pricelist.pdf');
const OUT_PATH = process.env.WIIM_OUT || path.join(__dirname, '..', 'output', 'wiim.xml');
const MARKUP_PCT = parseFloat(process.env.WIIM_MARKUP || '0');
const ROOT_CATEGORY = process.env.WIIM_ROOT_CATEGORY || 'WiiM';
const STORE_NAME = process.env.WIIM_STORE_NAME || 'premiumstore.sk';
const AVAILABILITY = 'Na objednávku';

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function xmlCdata(s) { return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>'; }
function xmlNum(n) { return (Math.round(n * 100) / 100).toFixed(2); }
function truncateAtWord(s, maxLen) {
  if (!s || s.length <= maxLen) return s || '';
  const cut = s.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + '…';
}

function extractPdfText(pdfPath) {
  try {
    return execFileSync('pdftotext', ['-layout', pdfPath, '-'], { maxBuffer: 1024 * 1024 * 64 }).toString('utf-8');
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.error('pdftotext not found. Install poppler-utils (apt-get install -y poppler-utils / brew install poppler).');
    } else {
      console.error('pdftotext failed:', e.message);
    }
    process.exit(1);
  }
}

function buildShopitemXml(p) {
  const parts = ['<SHOPITEM>'];
  parts.push(`<NAME>${xmlCdata(p.name)}</NAME>`);
  if (p.shortDescription) parts.push(`<SHORT_DESCRIPTION>${xmlCdata(p.shortDescription)}</SHORT_DESCRIPTION>`);
  parts.push(`<DESCRIPTION>${xmlCdata(p.description)}</DESCRIPTION>`);
  parts.push(`<MANUFACTURER>${xmlCdata('WiiM')}</MANUFACTURER>`);
  parts.push('<ITEM_TYPE>product</ITEM_TYPE>');
  parts.push('<UNIT>ks</UNIT>');
  parts.push(`<CODE>${xmlEscape(p.code)}</CODE>`);
  if (p.ean) parts.push(`<EAN>${xmlEscape(p.ean)}</EAN>`);

  if (p.category) {
    parts.push('<CATEGORIES>');
    parts.push(`  <CATEGORY>${xmlCdata(p.category)}</CATEGORY>`);
    parts.push('</CATEGORIES>');
    const heurekaCategoryId = heurekaCategoryIdFor(p.category);
    if (heurekaCategoryId) parts.push(`<HEUREKA_CATEGORY_ID>${heurekaCategoryId}</HEUREKA_CATEGORY_ID>`);
  }
  // No <IMAGES> — none available from the price list; to be added manually.
  parts.push(`<AVAILABILITY>${xmlCdata(AVAILABILITY)}</AVAILABILITY>`);
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

function main() {
  if (!fs.existsSync(PDF_PATH)) {
    console.error(`WiiM price list not found at ${PDF_PATH}. Set WIIM_PDF or place the PDF there.`);
    process.exit(1);
  }
  console.log('Extracting text from', PDF_PATH);
  const text = extractPdfText(PDF_PATH);
  const records = parseWiimPricelist(text);
  console.log(`Parsed ${records.length} colour-variant rows.`);

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  const out = fs.createWriteStream(OUT_PATH, { encoding: 'utf-8' });
  out.write('<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n');

  const seenCodes = new Set();
  const stats = { total: 0, written: 0, skippedDuplicateCode: 0, skippedNoPrice: 0, tbaSkuFallback: 0 };

  records.forEach((r) => {
    stats.total++;
    if (!r.priceEur || r.priceEur <= 0) { stats.skippedNoPrice++; return; }

    let code = r.sku;
    if (!code || code === 'TBA') {
      code = `WIIM-${r.ean}`;
      stats.tbaSkuFallback++;
    }
    if (seenCodes.has(code)) { stats.skippedDuplicateCode++; return; }
    seenCodes.add(code);

    const name = `${r.productName} ${r.color}`.trim();
    const category = `${ROOT_CATEGORY} > ${r.category}`;
    const price = roundPrice(r.priceEur * (1 + MARKUP_PCT / 100));

    const seoTitle = truncateAtWord(`${name} | ${STORE_NAME}`, 70);
    const metaDescription = truncateAtWord(`${name} – ${AVAILABILITY.toLowerCase()}. Kúpte na ${STORE_NAME}.`, 155);

    const shopitem = buildShopitemXml({
      code, ean: r.ean, name, category, description: r.description,
      shortDescription: truncateAtWord(r.description, 200),
      weightKg: r.weightKg, price, seoTitle, metaDescription,
    });
    out.write(shopitem + '\n');
    stats.written++;
  });

  out.write('</SHOP>\n');
  out.end();

  console.log(JSON.stringify(stats, null, 2));
  console.log('Output written to', OUT_PATH);
}

main();

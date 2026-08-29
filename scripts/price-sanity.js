// Shared safeguard against supplier-feed price bugs: flags/excludes a product whose newly
// computed selling price differs wildly from the price we published for the same product
// (matched by CODE, falling back to EAN) in the immediately preceding import.
//
// WHY THIS EXISTS: 2026-08-29, a user spotted an ATOS solar bundle ("Solární sestava ostrovní
// TRINA 1820Wp...") live on the shop at 27 EUR instead of ~2145 EUR - ATOS's own feed had sent a
// PURCHASE_PRICE ~80x too low for that SKU. Our pricing math (purchase price x markup x VAT) was
// internally correct; the bad input just sailed straight through to a live, orderable price. A
// day-over-day price comparison catches this class of bug regardless of supplier or root cause
// (a bad field in the feed, a unit/decimal slip, a discontinued-bundle placeholder price, etc.)
// without needing any extra field from the supplier - the previous import IS the reference price.
//
// Usage in each transform-*.js:
//   const { loadPreviousPrices, checkPriceSanity, writeAnomalyReport } = require('./price-sanity');
//   const previousPrices = loadPreviousPrices(OUT_PATH);  // BEFORE the write stream truncates it
//   ...inside the per-product loop, once `price` (final, post-Heureka-override) is known...
//   const sanity = checkPriceSanity(previousPrices, p.code, p.ean, price);
//   if (!sanity.sane) { stats.skippedPriceAnomaly = (stats.skippedPriceAnomaly || 0) + 1;
//                        anomalies.push({ code: p.code, ean: p.ean, name: p.name, ...sanity }); return; }
//   ...at the end of main()...
//   writeAnomalyReport('atos', anomalies);
//
// A product with no previous price (genuinely new item) always passes - there's nothing yet to
// compare against, and that's fine: this catches *changes* that look like feed corruption, not
// first-time listings.
//
// Threshold: PRICE_SANITY_RATIO (default 5) - new price must stay within [prev/ratio, prev*ratio]
// to pass. Wide on purpose: real repricing (ours or a Heureka-driven adjustment) rarely moves a
// price more than 2-3x even for aggressive corrections: 5x leaves headroom for legitimate swings
// while still catching order-of-magnitude feed corruption.

const fs = require('fs');
const path = require('path');

const RATIO = parseFloat(process.env.PRICE_SANITY_RATIO || '5');
const REPORT_DIR = path.join(__dirname, '..', 'reports');

function loadPreviousPrices(outPath) {
  const byCode = new Map();
  const byEan = new Map();
  if (!fs.existsSync(outPath)) return { byCode, byEan };
  const xml = fs.readFileSync(outPath, 'utf-8');
  const blockRe = /<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g;
  let m;
  while ((m = blockRe.exec(xml))) {
    const block = m[0];
    const codeM = block.match(/<CODE>([\s\S]*?)<\/CODE>/);
    const priceM = block.match(/<PRICE_VAT>([\s\S]*?)<\/PRICE_VAT>/);
    const eanM = block.match(/<EAN>([\s\S]*?)<\/EAN>/);
    if (!priceM) continue;
    const price = parseFloat(priceM[1]);
    if (!Number.isFinite(price) || price <= 0) continue;
    if (codeM && codeM[1]) byCode.set(codeM[1], price);
    if (eanM && eanM[1]) byEan.set(eanM[1], price);
  }
  return { byCode, byEan };
}

function checkPriceSanity(previous, code, ean, newPrice) {
  let prevPrice;
  if (code && previous.byCode.has(code)) prevPrice = previous.byCode.get(code);
  else if (ean && previous.byEan.has(ean)) prevPrice = previous.byEan.get(ean);
  if (prevPrice === undefined) return { sane: true };
  if (!Number.isFinite(newPrice) || newPrice <= 0) return { sane: true }; // other checks handle this
  const ratio = newPrice / prevPrice;
  if (ratio > RATIO || ratio < 1 / RATIO) {
    return { sane: false, previousPrice: prevPrice, newPrice, ratio };
  }
  return { sane: true };
}

// Writes/refreshes reports/cenove-anomalie-<supplier>.md with today's flagged products (overwrites
// each run - this is a "what's currently held back" list, not a historical log).
function writeAnomalyReport(supplier, anomalies) {
  const reportPath = path.join(REPORT_DIR, `cenove-anomalie-${supplier}.md`);
  if (!anomalies.length) {
    if (fs.existsSync(reportPath)) fs.unlinkSync(reportPath);
    return;
  }
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const date = new Date().toISOString().slice(0, 10);
  const lines = [
    `# Cenové anomálie vynechané z feedu — ${supplier} — ${date}`,
    '',
    `Tieto produkty mali novú cenu, ktorá sa od predchádzajúceho importu líšila viac ako ${RATIO}x` +
      ' (hore aj dole) — pravdepodobne chyba vo feede dodávateľa, nie skutočná zmena ceny. ' +
      'Vynechané z tohto behu, treba ručne overiť a prípadne opraviť/vylúčiť natrvalo.',
    '',
    '| Kód | EAN | Názov | Predošlá cena | Nová cena | Pomer |',
    '|---|---|---|---:|---:|---:|',
  ];
  for (const a of anomalies) {
    const ratioStr = a.ratio >= 1 ? `${a.ratio.toFixed(1)}x` : `1/${(1 / a.ratio).toFixed(1)}x`;
    lines.push(`| ${a.code || ''} | ${a.ean || ''} | ${(a.name || '').slice(0, 80)} | ${a.previousPrice.toFixed(2)} € | ${a.newPrice.toFixed(2)} € | ${ratioStr} |`);
  }
  fs.writeFileSync(reportPath, lines.join('\n') + '\n');
  console.log(`  -> ${anomalies.length} cenová anomália(í) vynechaná(ých), report: ${reportPath}`);
}

module.exports = { loadPreviousPrices, checkPriceSanity, writeAnomalyReport };

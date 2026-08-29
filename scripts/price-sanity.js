// Shared safeguards against supplier-feed price bugs. Two complementary checks:
//
// 1. DAY-OVER-DAY: flags a product whose newly computed price differs wildly from the price we
//    published for the SAME product (matched by CODE, falling back to EAN) in the immediately
//    preceding import. Catches a price that changed unrealistically for a product we already knew.
//
// 2. CATEGORY OUTLIER: flags a product whose price is a wild outlier against the current median
//    price for its own leaf category, built fresh from every output/*.xml on disk (all suppliers
//    combined - a "Fotovoltaika > Solárne zostavy" reference price isn't ATOS-specific). Catches
//    a bad price on a product's very FIRST import too, when check #1 has nothing to compare
//    against yet.
//
// Both exist because of the same real incident: 2026-08-29, a user spotted an ATOS solar bundle
// ("Solární sestava ostrovní TRINA 1820Wp...") live on the shop at 27 EUR instead of ~2145 EUR -
// ATOS's own feed had sent a PURCHASE_PRICE ~80x too low for that SKU. Our pricing math (purchase
// price x markup x VAT) was internally correct; the bad input just sailed straight through. Check
// #1 alone would only have caught it from the SECOND bad import onward - check #2 catches it
// immediately, the very first time such a product (new or existing) shows up with a broken price.
//
// A third, simpler safeguard lives alongside these: EXPLICIT ZERO/INVALID PRICE REPORTING. Every
// transform-*.js already refuses to publish a product with price <= 0 (via its own
// skippedNoPrice/invalidPrice stat) - that part isn't new. What's new is that callers should also
// push those into the same `anomalies` list (reason: 'zero-price') so they show up in the report
// below instead of vanishing into a stats counter nobody reads.
//
// Usage in each transform-*.js:
//   const { loadPreviousPrices, buildCategoryPriceStats, checkPriceSanity, checkCategoryOutlier,
//           writeAnomalyReport } = require('./price-sanity');
//   const previousPrices = loadPreviousPrices(OUT_PATH);        // BEFORE the write stream truncates it
//   const categoryStats = buildCategoryPriceStats(OUT_PATH);    // same timing
//   const anomalies = [];
//   ...once `price` (final, post-Heureka-override) is known...
//   const dayOverDay = checkPriceSanity(previousPrices, p.code, p.ean, price);
//   if (!dayOverDay.sane) { anomalies.push({ code: p.code, ean: p.ean, name: p.name, reason: 'day-over-day', ...dayOverDay }); return; }
//   ...once `defaultCategory` (the resolved leaf category) is known...
//   const outlier = checkCategoryOutlier(categoryStats, defaultCategory, price);
//   if (!outlier.sane) { anomalies.push({ code: p.code, ean: p.ean, name: p.name, reason: 'category-outlier', ...outlier }); return; }
//   ...wherever a product is skipped for price <= 0...
//   anomalies.push({ code: p.code, ean: p.ean, name: p.name, reason: 'zero-price', newPrice: price || 0 });
//   ...at the end of main()...
//   writeAnomalyReport('atos', anomalies);
//
// A product with no previous price (check #1) or too few category comparables (check #2) always
// passes that particular check - both are about catching *implausible* prices, not blocking
// anything we can't yet judge.
//
// Thresholds:
//   PRICE_SANITY_RATIO (default 5)          - day-over-day: new price must stay within
//                                              [prev/ratio, prev*ratio].
//   PRICE_SANITY_CATEGORY_RATIO (default 8) - category outlier: price must stay within
//                                              [median/ratio, median*ratio]. Wider than the
//                                              day-over-day check on purpose - a category's own
//                                              price spread (budget vs. premium models of the same
//                                              product type) is naturally wider than any single
//                                              product's price moving over time.
//   PRICE_SANITY_MIN_CATEGORY_SAMPLES (default 4) - category outlier only fires once a category
//                                              has at least this many *other* priced products to
//                                              compute a trustworthy median from - a 1-2 product
//                                              category has no real "typical price" to compare
//                                              against, and would just produce false positives.

const fs = require('fs');
const path = require('path');

const RATIO = parseFloat(process.env.PRICE_SANITY_RATIO || '5');
const CATEGORY_RATIO = parseFloat(process.env.PRICE_SANITY_CATEGORY_RATIO || '8');
const MIN_CATEGORY_SAMPLES = parseInt(process.env.PRICE_SANITY_MIN_CATEGORY_SAMPLES || '4', 10);
const REPORT_DIR = path.join(__dirname, '..', 'reports');
const OUTPUT_DIR = path.join(__dirname, '..', 'output');

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
  if (!Number.isFinite(newPrice) || newPrice <= 0) return { sane: true }; // zero-price check handles this
  const ratio = newPrice / prevPrice;
  if (ratio > RATIO || ratio < 1 / RATIO) {
    return { sane: false, referencePrice: prevPrice, newPrice, ratio };
  }
  return { sane: true };
}

function median(nums) {
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

// Scans every output/*.xml currently on disk and buckets prices by leaf category (the first
// <CATEGORY> entry in each product's <CATEGORIES> block, which our own buildShopitemXml always
// writes most-specific-first). excludeOutPath skips the caller's own file, since it's about to be
// overwritten by this very run and its "current" content is really yesterday's leftovers -
// harmless to include, but cleaner to leave out.
function buildCategoryPriceStats(excludeOutPath) {
  const byCategory = new Map();
  let files = [];
  try { files = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith('.xml')); } catch (e) { return byCategory; }
  const excludeResolved = excludeOutPath ? path.resolve(excludeOutPath) : null;
  for (const f of files) {
    const full = path.join(OUTPUT_DIR, f);
    if (excludeResolved && path.resolve(full) === excludeResolved) continue;
    let xml;
    try { xml = fs.readFileSync(full, 'utf-8'); } catch (e) { continue; }
    const blockRe = /<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g;
    let m;
    while ((m = blockRe.exec(xml))) {
      const block = m[0];
      const catBlockM = block.match(/<CATEGORIES>([\s\S]*?)<\/CATEGORIES>/);
      const priceM = block.match(/<PRICE_VAT>([\s\S]*?)<\/PRICE_VAT>/);
      if (!catBlockM || !priceM) continue;
      const catM = catBlockM[1].match(/<CATEGORY>(?:<!\[CDATA\[([\s\S]*?)\]\]>|([^<]*))<\/CATEGORY>/);
      if (!catM) continue;
      const category = (catM[1] !== undefined ? catM[1] : catM[2] || '').trim();
      const price = parseFloat(priceM[1]);
      if (!category || !Number.isFinite(price) || price <= 0) continue;
      if (!byCategory.has(category)) byCategory.set(category, []);
      byCategory.get(category).push(price);
    }
  }
  return byCategory;
}

function checkCategoryOutlier(categoryStats, category, price) {
  if (!category || !Number.isFinite(price) || price <= 0) return { sane: true }; // zero-price check handles this
  const prices = categoryStats.get(category);
  if (!prices || prices.length < MIN_CATEGORY_SAMPLES) return { sane: true };
  const med = median(prices);
  if (!(med > 0)) return { sane: true };
  const ratio = price / med;
  if (ratio > CATEGORY_RATIO || ratio < 1 / CATEGORY_RATIO) {
    return { sane: false, referencePrice: med, newPrice: price, ratio, sampleSize: prices.length };
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
  const REASON_LABEL = {
    'day-over-day': `zmena ceny > ${RATIO}x oproti minulému importu`,
    'category-outlier': `cena mimo ${CATEGORY_RATIO}x rozsah mediánu kategórie`,
    'zero-price': 'nulová/neplatná cena',
  };
  const lines = [
    `# Cenové anomálie vynechané z feedu — ${supplier} — ${date}`,
    '',
    'Tieto produkty boli vynechané z tohto importu — pravdepodobne chyba vo feede dodávateľa, ' +
      'nie skutočná zmena ceny. Treba ručne overiť a prípadne opraviť/vylúčiť natrvalo.',
    '',
    '| Kód | EAN | Názov | Dôvod | Referenčná cena | Nová cena | Pomer | Vzorka |',
    '|---|---|---|---|---:|---:|---:|---:|',
  ];
  for (const a of anomalies) {
    const reasonText = REASON_LABEL[a.reason] || a.reason || '';
    const ratioStr = a.ratio ? (a.ratio >= 1 ? `${a.ratio.toFixed(1)}x` : `1/${(1 / a.ratio).toFixed(1)}x`) : '';
    const refStr = a.referencePrice !== undefined ? `${a.referencePrice.toFixed(2)} €` : '';
    const newStr = a.newPrice !== undefined ? `${Number(a.newPrice).toFixed(2)} €` : '';
    lines.push(`| ${a.code || ''} | ${a.ean || ''} | ${(a.name || '').slice(0, 80)} | ${reasonText} | ${refStr} | ${newStr} | ${ratioStr} | ${a.sampleSize || ''} |`);
  }
  fs.writeFileSync(reportPath, lines.join('\n') + '\n');
  console.log(`  -> ${anomalies.length} cenová anomália(í) vynechaná(ých), report: ${reportPath}`);
}

module.exports = {
  loadPreviousPrices, checkPriceSanity,
  buildCategoryPriceStats, checkCategoryOutlier,
  writeAnomalyReport,
};

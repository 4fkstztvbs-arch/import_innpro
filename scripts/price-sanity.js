// Shared safeguards against supplier-feed price bugs. Two complementary checks:
//
// 1. DAY-OVER-DAY: flags a product whose newly computed price differs wildly from the price we
//    published for the SAME product (matched by CODE, falling back to EAN) in the immediately
//    preceding import. Catches a price that changed unrealistically for a product we already knew.
//
// 2. CATEGORY OUTLIER: flags a product whose price is a wild outlier against the current median
//    price for its own leaf category - but ONLY for a category whose established catalog prices
//    are already internally consistent (max/min within CATEGORY_RATIO). Many real categories
//    legitimately mix cheap and premium items (a "Slúchadlá" leaf spans a 7 EUR earbud tip and a
//    4000 EUR studio pair) - checked against the real catalog on 2026-08-29, an unconditional
//    version of this check flagged 776 perfectly normal products across 281 categories. So a
//    category only gets checked once its own history shows it's normally narrow; a category
//    that's already wide is left alone entirely, because "wide" is its normal state, not a signal.
//    The reference median (once a category passes that gate) is built from TWO sources merged
//    together: (a) every OTHER product in this same run's own freshly-parsed feed that landed in
//    the same category, and (b) the existing on-disk catalog (every output/*.xml from every OTHER
//    supplier). Both matter: (a) catches a single bad SKU sitting among many correctly-priced
//    siblings in the same feed; (b) catches an entire category being wrong in one supplier's feed,
//    where every bad SKU agrees with every other bad SKU and (a) alone would see nothing unusual.
//    Catches a bad price on a product's very FIRST import too, when check #1 has nothing to
//    compare against yet.
//
// Both exist because of the same real incident: 2026-08-29, a user spotted an ATOS solar bundle
// ("Solární sestava ostrovní TRINA 1820Wp...") live on the shop at 27 EUR instead of ~2145 EUR -
// ATOS's own feed had sent a PURCHASE_PRICE ~80x too low for FIVE related SKUs at once (so they
// agreed with each other - an in-feed-only comparison would have missed it). Our pricing math
// (purchase price x markup x VAT) was internally correct; the bad input just sailed straight
// through. Check #1 alone would only have caught it from the SECOND bad import onward - check #2
// catches it immediately, the very first time such a product (new or existing) shows up with a
// broken price, because it also weighs the established cross-supplier catalog median.
//
// A third, simpler safeguard lives alongside these: EXPLICIT ZERO/INVALID PRICE REPORTING. Every
// transform-*.js already refuses to publish a product with price <= 0 (via its own
// skippedNoPrice/invalidPrice stat) - that part isn't new. What's new is that callers should also
// push those into the same `anomalies` list (reason: 'zero-price') so they show up in the report
// below instead of vanishing into a stats counter nobody reads.
//
// Usage in each transform-*.js - TWO PASSES, because the category-outlier check needs to see the
// WHOLE feed's own prices before it can judge any single one of them:
//   const { loadPreviousPrices, buildCategoryPriceStats, buildOwnPreviousCategoryStats,
//           buildFeedCategoryStats, mergeCategoryStats, checkPriceSanity, checkCategoryOutlier,
//           writeAnomalyReport } = require('./price-sanity');
//   const previousPrices = loadPreviousPrices(OUT_PATH);              // BEFORE the write stream truncates it
//   const catalogCategoryStats = buildCategoryPriceStats(OUT_PATH);      // same timing
//   const ownPreviousCategoryStats = buildOwnPreviousCategoryStats(OUT_PATH); // same timing
//   const bypassCategoryStats = mergeCategoryStats(catalogCategoryStats, ownPreviousCategoryStats);
//   const anomalies = [];
//   const candidates = [];
//   ...PASS 1: parse the feed as usual, but instead of writing/checking immediately, once `price`
//   and `defaultCategory` are known for a record, push a candidate and move on:
//   candidates.push({ code, ean: p.ean, name, category: defaultCategory, price, ...rest-needed-to-render });
//   ...after the feed is fully parsed...
//   const feedCategoryStats = buildFeedCategoryStats(candidates);
//   const categoryStats = mergeCategoryStats(feedCategoryStats, catalogCategoryStats);
//   ...PASS 2: for each candidate...
//   const dayOverDay = checkPriceSanity(previousPrices, c.code, c.ean, c.price);
//   if (!dayOverDay.sane) { anomalies.push({ code: c.code, ean: c.ean, name: c.name, reason: 'day-over-day', ...dayOverDay }); continue; }
//   const outlier = checkCategoryOutlier(categoryStats, bypassCategoryStats, c.category, c.price);
//   if (!outlier.sane) { anomalies.push({ code: c.code, ean: c.ean, name: c.name, reason: 'category-outlier', ...outlier }); continue; }
//   out.write(buildShopitemXml(c) + '\n'); stats.written++;
//   ...wherever a product is skipped for price <= 0 (still during PASS 1, no candidate needed)...
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

// Parses one Shoptet-native XML file into category -> [prices], bucketed by leaf category (the
// first <CATEGORY> entry in each product's <CATEGORIES> block, which our own buildShopitemXml
// always writes most-specific-first). Shared by buildCategoryPriceStats (many files) and
// buildOwnPreviousCategoryStats (one file) below.
function categoryStatsFromFile(xmlPath, byCategory) {
  let xml;
  try { xml = fs.readFileSync(xmlPath, 'utf-8'); } catch (e) { return; }
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

// Scans every output/*.xml currently on disk EXCEPT excludeOutPath (the caller's own file, about
// to be overwritten by this very run) and buckets prices by leaf category.
function buildCategoryPriceStats(excludeOutPath) {
  const byCategory = new Map();
  let files = [];
  try { files = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith('.xml')); } catch (e) { return byCategory; }
  const excludeResolved = excludeOutPath ? path.resolve(excludeOutPath) : null;
  for (const f of files) {
    const full = path.join(OUTPUT_DIR, f);
    if (excludeResolved && path.resolve(full) === excludeResolved) continue;
    categoryStatsFromFile(full, byCategory);
  }
  return byCategory;
}

// Scans ONLY the caller's own previous file (yesterday's committed output/<supplier>.xml, read
// BEFORE this run's write stream truncates it - same timing as buildCategoryPriceStats). Needed
// alongside the cross-supplier catalog above: a category that's effectively exclusive to one
// supplier (e.g. InnPro's own accessory categories - cheap replacement parts next to full kits,
// naturally 100-150x spread) has ZERO samples in every OTHER supplier's catalog, so the
// cross-supplier-only bypass in checkCategoryOutlier never fires for it and the check applies
// strictly against that supplier's own normal (wide) price variety - a guaranteed false positive.
// Confirmed against real data (2026-08-29 InnPro import): 185 perfectly normal products flagged
// this way before this fix.
function buildOwnPreviousCategoryStats(outPath) {
  const byCategory = new Map();
  if (outPath) categoryStatsFromFile(outPath, byCategory);
  return byCategory;
}

// Same bucketing as buildCategoryPriceStats, but from an in-memory list of {category, price}
// candidates collected during THIS run's own feed parse - not from disk. Needed because the
// on-disk catalog (buildCategoryPriceStats) can't see a brand-new category, and because an
// entire-category-wrong-in-one-feed incident (like the actual 2026-08-29 ATOS bug: 5 SKUs that
// all agreed with each other on the same wrong price) needs to be checked against something OTHER
// than "other prices in this same feed" too - see mergeCategoryStats below.
function buildFeedCategoryStats(items) {
  const byCategory = new Map();
  for (const it of items) {
    const category = it.category;
    const price = it.price;
    if (!category || !Number.isFinite(price) || price <= 0) continue;
    if (!byCategory.has(category)) byCategory.set(category, []);
    byCategory.get(category).push(price);
  }
  return byCategory;
}

// Combines multiple category->prices maps (e.g. this run's own feed + the existing on-disk
// catalog from every OTHER supplier) into one, so checkCategoryOutlier judges each product
// against the fullest picture available: other prices in the very feed it came from, AND the
// established cross-supplier catalog.
function mergeCategoryStats(...maps) {
  const merged = new Map();
  for (const map of maps) {
    if (!map) continue;
    for (const [cat, prices] of map) {
      if (!merged.has(cat)) merged.set(cat, []);
      merged.get(cat).push(...prices);
    }
  }
  return merged;
}

// Real catalog data (checked 2026-08-29) showed this check firing on 776 perfectly legitimate
// products across 281 categories - things like "Slúchadlá" spanning a genuinely cheap 7.40 EUR
// earbud tip up to a 4000 EUR studio pair in the very same leaf category. A leaf category isn't
// a promise of narrow prices; some categories are legitimately price-heterogeneous (budget vs.
// premium models of the same product type) and always will be.
//
// Fix: only apply the ratio test to a category whose ESTABLISHED prices (bypassStats - see below)
// are already internally consistent (max/min within CATEGORY_RATIO). If they already span wider
// than that, the category is inherently heterogeneous and the check is skipped entirely for it -
// a wide spread there is normal, not a signal.
//
// bypassStats must be built from data UNAFFECTED by whatever this run is about to write - the
// caller merges TWO such sources: (a) the cross-supplier catalog (every OTHER supplier's
// output/*.xml), and (b) THIS supplier's own previous file, read before this run's write stream
// truncates it. Both matter: (a) alone misses any category that's effectively exclusive to one
// supplier - checked against real data (2026-08-29), InnPro's own accessory categories (cheap
// replacement parts next to full kits, naturally 100-150x spread) have ZERO samples in every
// other supplier's catalog, so relying on (a) alone never bypassed them and flagged 185 perfectly
// normal products in one run. Deliberately excludes THIS run's own new candidates (the merged
// feed+catalog stats used below, once the gate is passed): if it didn't, a genuine multi-SKU
// pricing bug in this feed (e.g. 5 solar bundles all wrongly priced at 27 EUR) would blow the
// spread open by itself and bypass the very check meant to catch it.
//
// Once a category passes that gate, the actual flag/pass decision still runs against the merged
// (feed + catalog) stats as before, so a single bad price still gets compared to the fullest
// picture available.
function checkCategoryOutlier(mergedStats, bypassStats, category, price) {
  if (!category || !Number.isFinite(price) || price <= 0) return { sane: true }; // zero-price check handles this
  const bypassPrices = bypassStats.get(category);
  if (bypassPrices && bypassPrices.length >= MIN_CATEGORY_SAMPLES) {
    const bypassMin = Math.min(...bypassPrices);
    const bypassMax = Math.max(...bypassPrices);
    if (bypassMin > 0 && bypassMax / bypassMin > CATEGORY_RATIO) return { sane: true }; // inherently heterogeneous category - not a signal
  }
  const prices = mergedStats.get(category);
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
  buildCategoryPriceStats, buildOwnPreviousCategoryStats, buildFeedCategoryStats, mergeCategoryStats, checkCategoryOutlier,
  writeAnomalyReport,
};

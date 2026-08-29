// One-off probe: streams the WHOLE ATOS feed and compares our current pricing formula
// (purchase price x markup x VAT) against a hypothetical PRICE_VAT-based formula
// (ATOS's own recommended ex-VAT price x our VAT), to gauge how big a repricing shift
// switching to PRICE_VAT would cause across the live catalog. Prints only aggregate stats,
// not per-product data (feed has 12000+ items). Not part of the regular pipeline — delete
// once the answer is known.
//
// Usage: node scripts/debug-atos-price-comparison.js
// Required env vars: ATOS_URL, ATOS_USERNAME, ATOS_PASSWORD
// Optional: ATOS_MARKUP (15, matches transform-atos.js default), ATOS_OUR_VAT (23)

const { streamRecords } = require('./stream-records');
const { roundPrice } = require('./round-price');

const URL = process.env.ATOS_URL;
const USERNAME = process.env.ATOS_USERNAME;
const PASSWORD = process.env.ATOS_PASSWORD;
const MARKUP_PCT = parseFloat(process.env.ATOS_MARKUP || '15');
const OUR_VAT = parseFloat(process.env.ATOS_OUR_VAT || '23');

function toFloat(s) {
  if (s === undefined || s === null || s === '') return 0;
  const v = parseFloat(String(s).replace(',', '.'));
  return Number.isFinite(v) ? v : 0;
}

async function getCzkToEurRate() {
  const res = await fetch('https://api.frankfurter.app/latest?from=CZK&to=EUR');
  const data = await res.json();
  const rate = data && data.rates && data.rates.EUR;
  if (!rate) throw new Error('Could not fetch CZK->EUR rate');
  return rate;
}

function median(nums) {
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}
function percentile(sortedNums, p) {
  const idx = Math.floor(sortedNums.length * p);
  return sortedNums[Math.min(idx, sortedNums.length - 1)];
}

async function main() {
  if (!URL || !USERNAME || !PASSWORD) { console.error('Missing ATOS_URL/_USERNAME/_PASSWORD'); process.exit(1); }

  console.log('Fetching CZK->EUR rate...');
  const rate = await getCzkToEurRate();
  console.log(`  -> 1 CZK = ${rate} EUR`);

  const stats = {
    total: 0,
    noName: 0,
    purchaseZeroOrMissing: 0, // currently excluded entirely by transform-atos.js
    priceZeroOrMissing: 0,    // would ALSO be excluded under a PRICE-based approach
    bothPresent: 0,           // comparable set - both purchase price and PRICE available
    bothPresentButPurchaseZero: 0, // "rescued" cases: broken purchase price but PRICE_VAT looks fine (the actual incident type)
  };
  const ratios = []; // newPrice / currentPrice, for bothPresent set

  console.log('Streaming ATOS feed (12000+ items, this takes a while)...');
  await streamRecords(URL, 'SHOPITEM', (rawXml) => {
    stats.total++;
    const nameM = rawXml.match(/<NAME>([\s\S]*?)<\/NAME>/);
    if (!nameM) { stats.noName++; return; }
    const purchasePriceM = rawXml.match(/<PURCHASE_PRICE>([\s\S]*?)<\/PURCHASE_PRICE>/);
    const priceM = rawXml.match(/<PRICE>([\s\S]*?)<\/PRICE>/);
    const purchasePriceCZK = purchasePriceM ? toFloat(purchasePriceM[1]) : 0;
    const priceCZK = priceM ? toFloat(priceM[1]) : 0;

    const purchaseOk = purchasePriceCZK > 0;
    const priceOk = priceCZK > 0;

    if (!purchaseOk) stats.purchaseZeroOrMissing++;
    if (!priceOk) stats.priceZeroOrMissing++;

    if (purchaseOk && priceOk) {
      stats.bothPresent++;
      const currentPriceEUR = roundPrice(purchasePriceCZK * rate * (1 + MARKUP_PCT / 100) * (1 + OUR_VAT / 100));
      const newPriceEUR = roundPrice(priceCZK * rate * (1 + OUR_VAT / 100));
      if (currentPriceEUR > 0) ratios.push(newPriceEUR / currentPriceEUR);
    } else if (!purchaseOk && priceOk) {
      stats.bothPresentButPurchaseZero++;
    }
  }, { username: USERNAME, password: PASSWORD });

  ratios.sort((a, b) => a - b);
  console.log('\n=== VÝSLEDKY ===');
  console.log(JSON.stringify(stats, null, 2));
  if (ratios.length) {
    console.log('\nPomer (nová PRICE-based cena / súčasná markup-based cena), n=' + ratios.length);
    console.log('  medián:', median(ratios).toFixed(3) + 'x');
    console.log('  p10:', percentile(ratios, 0.10).toFixed(3) + 'x');
    console.log('  p25:', percentile(ratios, 0.25).toFixed(3) + 'x');
    console.log('  p75:', percentile(ratios, 0.75).toFixed(3) + 'x');
    console.log('  p90:', percentile(ratios, 0.90).toFixed(3) + 'x');
    console.log('  min:', ratios[0].toFixed(3) + 'x');
    console.log('  max:', ratios[ratios.length - 1].toFixed(3) + 'x');
    const within10 = ratios.filter((r) => r >= 0.9 && r <= 1.1).length;
    const within20 = ratios.filter((r) => r >= 0.8 && r <= 1.2).length;
    const big2x = ratios.filter((r) => r >= 2 || r <= 0.5).length;
    console.log(`  v rozsahu ±10%: ${within10} (${(100 * within10 / ratios.length).toFixed(1)}%)`);
    console.log(`  v rozsahu ±20%: ${within20} (${(100 * within20 / ratios.length).toFixed(1)}%)`);
    console.log(`  rozdiel >=2x alebo <=0.5x: ${big2x} (${(100 * big2x / ratios.length).toFixed(1)}%)`);
  }
  console.log('\nDone.');
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

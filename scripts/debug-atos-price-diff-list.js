// One-off probe: like debug-atos-price-comparison.js, but instead of just aggregate stats, prints
// one line per product where the hypothetical PRICE_VAT-based price differs from our current
// purchase-price-based price by >=2x or <=0.5x — the "big divergence" bucket identified by that
// earlier probe (183/12831 = 1.4%). Not part of the regular pipeline — delete once the answer
// is known.
//
// Usage: node scripts/debug-atos-price-diff-list.js
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

async function main() {
  if (!URL || !USERNAME || !PASSWORD) { console.error('Missing ATOS_URL/_USERNAME/_PASSWORD'); process.exit(1); }

  const rate = await getCzkToEurRate();
  console.error(`1 CZK = ${rate} EUR`);

  const rows = [];
  await streamRecords(URL, 'SHOPITEM', (rawXml) => {
    const nameM = rawXml.match(/<NAME>([\s\S]*?)<\/NAME>/);
    if (!nameM) return;
    const codeM = rawXml.match(/<CODE>([\s\S]*?)<\/CODE>/);
    const eanM = rawXml.match(/<EAN>([\s\S]*?)<\/EAN>/);
    const purchasePriceM = rawXml.match(/<PURCHASE_PRICE>([\s\S]*?)<\/PURCHASE_PRICE>/);
    const priceM = rawXml.match(/<PRICE>([\s\S]*?)<\/PRICE>/);
    const purchasePriceCZK = purchasePriceM ? toFloat(purchasePriceM[1]) : 0;
    const priceCZK = priceM ? toFloat(priceM[1]) : 0;
    if (!(purchasePriceCZK > 0) || !(priceCZK > 0)) return;

    const currentPriceEUR = roundPrice(purchasePriceCZK * rate * (1 + MARKUP_PCT / 100) * (1 + OUR_VAT / 100));
    const newPriceEUR = roundPrice(priceCZK * rate * (1 + OUR_VAT / 100));
    if (currentPriceEUR <= 0) return;
    const ratio = newPriceEUR / currentPriceEUR;
    if (ratio >= 2 || ratio <= 0.5) {
      rows.push({
        code: codeM ? codeM[1] : '', ean: eanM ? eanM[1] : '',
        name: nameM[1].replace(/[\t\n\r|]/g, ' ').trim().slice(0, 70),
        purchasePriceCZK, currentPriceEUR, newPriceEUR, ratio,
      });
    }
  }, { username: USERNAME, password: PASSWORD });

  console.error(`\nNájdených ${rows.length} produktov s rozdielom >=2x alebo <=0.5x.\n`);
  console.log('CODE\tEAN\tNAME\tPURCHASE_CZK\tCURRENT_EUR\tNEW_EUR\tRATIO');
  for (const r of rows) {
    console.log(`${r.code}\t${r.ean}\t${r.name}\t${r.purchasePriceCZK.toFixed(2)}\t${r.currentPriceEUR.toFixed(2)}\t${r.newPriceEUR.toFixed(2)}\t${r.ratio.toFixed(3)}`);
  }
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });

// One-off probe: prints the raw <SHOPITEM> record(s) for specific ATOS product codes — used to
// check whether the known-bad solar bundle SKUs (EXCLUDED_CODES in transform-atos.js) still carry
// a broken PURCHASE_PRICE, or whether ATOS has since fixed their feed. Not part of the regular
// pipeline — delete once the answer is known.
//
// Usage: CODES=ATO-04280483,ATO-04280487 node scripts/debug-atos-product-price.js
// Required env vars: ATOS_URL, ATOS_USERNAME, ATOS_PASSWORD

const { streamRecords } = require('./stream-records');

const CODES = new Set((process.env.CODES || 'ATO-04280479,ATO-04280480,ATO-04280481,ATO-04280483,ATO-04280487')
  .split(',').map((s) => s.trim()).filter(Boolean));

async function main() {
  const url = process.env.ATOS_URL, username = process.env.ATOS_USERNAME, password = process.env.ATOS_PASSWORD;
  if (!url || !username || !password) { console.error('Missing ATOS_URL/_USERNAME/_PASSWORD'); process.exit(1); }

  console.log('Hľadám kódy:', [...CODES].join(', '));
  let found = 0;
  await streamRecords(url, 'SHOPITEM', (rawXml) => {
    const codeM = rawXml.match(/<CODE>([\s\S]*?)<\/CODE>/);
    const code = codeM ? codeM[1] : null;
    if (code && CODES.has(code)) {
      found++;
      console.log(`\n--- ${code} ---`);
      console.log(rawXml);
    }
  }, { username, password });
  console.log(`\nNájdených ${found} z ${CODES.size} kódov.`);
}

main().catch((e) => { console.error('FATAL:', e.message); process.exit(1); });

// One-off probe: dumps the first few raw <SHOPITEM> records from a supplier's feed, UNPARSED,
// to see every field the feed actually sends — specifically whether it carries a second,
// independent price field (e.g. PRICE_VAT / recommended retail price) alongside PURCHASE_PRICE,
// which could be used as a per-product sanity cross-check independent of category/history.
// Not part of the regular pipeline — delete once the answer is known.
//
// Usage: SUPPLIER=atos node scripts/debug-raw-feed-fields.js
//        SUPPLIER=penta node scripts/debug-raw-feed-fields.js
// Required env vars (per supplier): ATOS_URL/ATOS_USERNAME/ATOS_PASSWORD or
//                                    PENTA_URL/PENTA_USERNAME/PENTA_PASSWORD
// Optional: DEBUG_SAMPLE_COUNT (default 3)

const { streamRecords } = require('./stream-records');

const SUPPLIER = (process.env.SUPPLIER || '').toLowerCase();
const SAMPLE_COUNT = parseInt(process.env.DEBUG_SAMPLE_COUNT || '3', 10);

function configFor(supplier) {
  if (supplier === 'atos') {
    return { url: process.env.ATOS_URL, username: process.env.ATOS_USERNAME, password: process.env.ATOS_PASSWORD, recordTag: 'SHOPITEM' };
  }
  if (supplier === 'penta') {
    return { url: process.env.PENTA_URL, username: process.env.PENTA_USERNAME, password: process.env.PENTA_PASSWORD, recordTag: 'SHOPITEM' };
  }
  return null;
}

async function main() {
  const cfg = configFor(SUPPLIER);
  if (!cfg) { console.error('Set SUPPLIER=atos or SUPPLIER=penta'); process.exit(1); }
  if (!cfg.url || !cfg.username || !cfg.password) { console.error(`Missing ${SUPPLIER.toUpperCase()}_URL/_USERNAME/_PASSWORD`); process.exit(1); }

  console.log(`=== ${SUPPLIER.toUpperCase()} raw feed sample (first ${SAMPLE_COUNT} records) ===`);
  // streamRecords has no early-exit API, so this reads the whole feed just to print the first few
  // samples — slower than ideal but simple and safe for a one-off debug run.
  let printed = 0;
  try {
    await streamRecords(cfg.url, cfg.recordTag, (rawXml) => {
      if (printed >= SAMPLE_COUNT) return;
      printed++;
      console.log(`\n--- record ${printed} ---`);
      console.log(rawXml);
    }, { username: cfg.username, password: cfg.password });
  } catch (e) {
    console.error('FAILED:', e.message);
    process.exit(1);
  }
  console.log(`\nPrinted ${printed} record(s).`);
}

main();

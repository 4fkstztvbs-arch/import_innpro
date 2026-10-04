// One-off analytical export: streams the full Penta feed (no stock/price/category filters)
// and writes every product with purchase price, retail price, stock, EAN and category to CSV.
// Env: PENTA_URL, PENTA_USERNAME, PENTA_PASSWORD, PENTA_FULL_OUT
const fs = require('fs');
const path = require('path');
const { streamRecords } = require('./stream-records');
const { parsePentaItem } = require('./parse-penta');

const OUT = process.env.PENTA_FULL_OUT || 'data/penta-full/penta-full.csv';
const q = (v) => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';

async function main() {
  if (!process.env.PENTA_URL) { console.error('Missing PENTA_URL'); process.exit(1); }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const { PENTA_USERNAME: username, PENTA_PASSWORD: pwd } = process.env;
  const auth = { username, password: pwd };
  const rows = [['code', 'ean', 'name', 'manufacturer', 'purchase_price', 'price_vat', 'vat', 'stock_amount', 'availability', 'default_category', 'all_categories', 'action', 'new', 'tip', 'warranty', 'weight_kg']];
  let total = 0, failed = 0;
  await streamRecords(process.env.PENTA_URL, 'SHOPITEM', (rawXml) => {
    total++;
    let p;
    try { p = parsePentaItem(rawXml); } catch (e) { failed++; return; }
    if (!p) { failed++; return; }
    rows.push([p.code, p.ean, p.name, p.manufacturer, p.purchasePrice, p.priceVat, p.vat, p.stockAmount, p.availabilityRaw, p.defaultCategoryRaw, p.categoryTexts.join(' | '), p.actionFlag, p.newFlag, p.tipFlag, p.warranty, p.weightKg]);
  }, auth);
  fs.writeFileSync(OUT, rows.map((r) => r.map(q).join(',')).join('\n') + '\n');
  console.log(`Penta full export: ${total} records, ${failed} failed, ${rows.length - 1} rows -> ${OUT}`);
}
main().catch((e) => { console.error(e); process.exit(1); });

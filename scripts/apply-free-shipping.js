'use strict';
// Doprava zdarma pre drahé malé produkty (pravidlá: data/free-shipping-rules.json).
// Produkt vo vybraných kategóriách s cenou a maržou nad hranicou dostane <FREE_SHIPPING>1</FREE_SHIPPING>,
// ostatné produkty v týchto kategóriách <FREE_SHIPPING>0</FREE_SHIPPING> (aby sa po zlacnení doprava
// zdarma v Shoptete aj zrušila). Produktov mimo kategórií sa nedotýka.
// Použitie: node scripts/apply-free-shipping.js [--xml=output/kb.xml] [--nasucho]
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const RULES_PATH = path.join(ROOT, 'data', 'free-shipping-rules.json');
const tag = (s, t) => s.match(new RegExp(`<${t}>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?</${t}>`, 's'))?.[1]?.trim();

function decide(item, rules, supplier) {
  const cat = item.match(/<CATEGORY>(?:<!\[CDATA\[)?([^<]*?)(?:\]\]>)?<\/CATEGORY>/)?.[1]?.trim();
  if (!cat || !rules.categories.some((r) => cat === r || cat.startsWith(r + ' > '))) return null;
  const price = parseFloat(tag(item, 'PRICE_VAT'));
  const vat = parseFloat(tag(item, 'PURCHASE_VAT')) || 23;
  const estPct = rules.estimatedMarginPctBySupplier?.[supplier];
  const cost = parseFloat(tag(item, 'PURCHASE_PRICE')) || (estPct > 0 ? price / (1 + vat / 100) * (1 - estPct / 100) : NaN);
  if (/<ATYPICAL_SHIPPING>1</.test(item) || /vypredan/i.test(tag(item, 'AVAILABILITY') || '')) return 0;
  if (!(price >= rules.minPriceVat) || !(cost > 0)) return 0;
  return price / (1 + vat / 100) - cost >= rules.minMarginEur ? 1 : 0;
}

function applyFreeShipping(xml, rules, supplier) {
  const stats = { zdarma: 0, nie: 0 };
  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (item) => {
    const v = decide(item, rules, supplier);
    if (v === null) return item;
    stats[v ? 'zdarma' : 'nie']++;
    const el = `<FREE_SHIPPING>${v}</FREE_SHIPPING>`;
    if (/<FREE_SHIPPING>[^<]*<\/FREE_SHIPPING>/.test(item)) return item.replace(/<FREE_SHIPPING>[^<]*<\/FREE_SHIPPING>/, el);
    if (!/<PRICE_VAT>/.test(item)) return item;
    return item.replace(/<PRICE_VAT>/, `${el}\n<PRICE_VAT>`);
  });
  return { xml: out, stats };
}

function main() {
  const arg = process.argv.find((a) => a.startsWith('--xml='))?.slice(6);
  const nasucho = process.argv.includes('--nasucho');
  const outDir = path.join(ROOT, 'output');
  const files = arg ? [arg] : fs.readdirSync(outDir).filter((f) => f.endsWith('.xml')).sort().map((f) => path.join(outDir, f));
  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf-8'));
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    const src = fs.readFileSync(f, 'utf-8');
    const { xml, stats } = applyFreeShipping(src, rules, path.basename(f));
    if (xml !== src && !nasucho) fs.writeFileSync(f, xml, 'utf-8');
    console.log(`Doprava zdarma (${path.basename(f)}): zdarma ${stats.zdarma}, bez ${stats.nie}${nasucho ? ' (nasucho)' : ''}`);
  }
}

if (require.main === module) main();
module.exports = { applyFreeShipping, decide };

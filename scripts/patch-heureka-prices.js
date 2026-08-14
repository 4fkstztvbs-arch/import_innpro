// Patches PRICE_VAT in an already-generated output/*.xml in place using today's
// data/heureka-reports/price-targets.json, WITHOUT re-running the full supplier transform.
//
// Why this exists: most transforms need a live feed fetch to regenerate (ATOS's feed is only
// reachable at night - see README). But applyHeurekaPriceTarget() only needs three things that
// are already sitting in the output XML for every product: EAN, PURCHASE_PRICE (excl. VAT) and
// PURCHASE_VAT (the VAT % used for that product's sell price) - see <PURCHASE_VAT> written by
// each transform-*.js right next to <PURCHASE_PRICE>. So a price-only refresh can patch the XML
// text directly instead of waiting for the next feed window.
//
// Usage: HEUREKA_PRICE_OVERRIDE=1 node scripts/patch-heureka-prices.js output/atos.xml [output/other.xml ...]
// Exit: prints one line per file "path: N/M produktov zmenených cena" and PATCHED:<path> for
// each file actually rewritten (skips writing if nothing changed).

const fs = require('fs');
const path = require('path');
const { applyHeurekaPriceTarget } = require('./heureka-price-targets');

function fnum(s) {
  const v = parseFloat(s);
  return Number.isFinite(v) ? v : null;
}

function patchFile(filePath) {
  const xml = fs.readFileSync(filePath, 'utf-8');
  let changed = 0;
  let total = 0;

  const patched = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (block) => {
    total++;
    const eanM = block.match(/<EAN>([\s\S]*?)<\/EAN>/);
    const priceM = block.match(/<PRICE_VAT>([\s\S]*?)<\/PRICE_VAT>/);
    const purchaseM = block.match(/<PURCHASE_PRICE>([\s\S]*?)<\/PURCHASE_PRICE>/);
    const vatM = block.match(/<PURCHASE_VAT>([\s\S]*?)<\/PURCHASE_VAT>/);
    if (!eanM || !priceM || !purchaseM || !vatM) return block;

    const ean = eanM[1].trim();
    const currentPrice = fnum(priceM[1]);
    const purchasePriceExclVat = fnum(purchaseM[1]);
    const vatPct = fnum(vatM[1]);
    if (!ean || currentPrice === null || !purchasePriceExclVat || vatPct === null) return block;

    const newPrice = applyHeurekaPriceTarget(ean, currentPrice, purchasePriceExclVat, vatPct);
    if (newPrice === currentPrice) return block;

    changed++;
    return block.replace(/<PRICE_VAT>[\s\S]*?<\/PRICE_VAT>/, `<PRICE_VAT>${newPrice.toFixed(2)}</PRICE_VAT>`);
  });

  console.log(`${filePath}: ${changed}/${total} produktov zmenená cena`);
  if (changed > 0) {
    fs.writeFileSync(filePath, patched, 'utf-8');
    console.log(`PATCHED:${filePath}`);
  }
  return changed;
}

function main() {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    console.error('Usage: HEUREKA_PRICE_OVERRIDE=1 node scripts/patch-heureka-prices.js <output/xyz.xml> [...]');
    process.exit(1);
  }
  let totalChanged = 0;
  for (const f of files) {
    totalChanged += patchFile(path.resolve(f));
  }
  console.log(`Spolu zmenených: ${totalChanged}`);
}

main();

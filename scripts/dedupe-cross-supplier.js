// Removes cross-supplier duplicate products (same EAN present in 2+ of our supplier feeds) so
// each product is imported into Shoptet from exactly one supplier — the one with the better
// purchase price, with an automatic fallback to the other supplier if the cheaper one is not in
// stock. Run this AFTER all scripts/transform-*.js have regenerated their output/*.xml files
// (each supplier-sync workflow runs it as its last step, against the currently committed
// output/*.xml of every other supplier).
//
// Usage: node scripts/dedupe-cross-supplier.js
'use strict';

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'output');
const REPORT_PATH = path.join(__dirname, '..', 'reports', 'cross-supplier-dedupe.csv');

// Suppliers whose products can legitimately overlap with another supplier's catalogue. WiiM and
// BASYS are exclusive-brand feeds (WiiM, Bose) that never overlap with anyone else, so they're
// left out to avoid wasted work — add them here if that ever changes.
const SUPPLIER_FILES = {
  atos: 'atos.xml',
  innpro: 'innpro.xml',
  kb: 'kb.xml',
  monacor: 'monacor.xml',
  solight: 'solight.xml',
};

// Availability strings across our feeds that mean "ready to ship now". Everything else
// (Na objednávku, Dostupné od <future date>, ...) is treated as NOT in stock for dedupe purposes.
function isInStock(availability) {
  if (!availability) return false;
  const a = availability.trim();
  if (/^skladom$/i.test(a)) return true;
  if (/ks skladom$/i.test(a)) return true; // K+B: "1-2 ks skladom", "21 a viac ks skladom"...
  if (/dostupné na sklade dodávateľa/i.test(a)) return true; // MONACOR
  return false;
}

function extractTag(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!m) return null;
  return m[1].replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();
}

function splitShopitems(xml) {
  const items = [];
  const re = /<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g;
  let m;
  while ((m = re.exec(xml))) items.push(m[0]);
  return items;
}

function main() {
  const suppliers = {}; // key -> { path, xml, items: [{block, ean, code, name, purchasePrice, availability}] }

  for (const [key, file] of Object.entries(SUPPLIER_FILES)) {
    const filePath = path.join(OUTPUT_DIR, file);
    if (!fs.existsSync(filePath)) continue;
    const xml = fs.readFileSync(filePath, 'utf-8');
    const items = splitShopitems(xml).map((block) => ({
      block,
      ean: extractTag(block, 'EAN'),
      code: extractTag(block, 'CODE'),
      name: extractTag(block, 'NAME'),
      purchasePrice: parseFloat(extractTag(block, 'PURCHASE_PRICE')),
      availability: extractTag(block, 'AVAILABILITY'),
    }));
    suppliers[key] = { filePath, xml, items };
  }

  // Group by EAN across suppliers.
  const byEan = new Map(); // ean -> [{supplier, item}]
  for (const [supplier, data] of Object.entries(suppliers)) {
    for (const item of data.items) {
      if (!item.ean) continue;
      if (!byEan.has(item.ean)) byEan.set(item.ean, []);
      byEan.get(item.ean).push({ supplier, item });
    }
  }

  const toRemove = new Map(); // supplier -> Set(block)
  const reportRows = [['EAN', 'name', 'winner_supplier', 'winner_price', 'winner_stock', 'loser_supplier', 'loser_price', 'loser_stock']];

  for (const [ean, offers] of byEan) {
    if (offers.length < 2) continue;

    const inStock = offers.filter((o) => isInStock(o.item.availability));
    const pool = inStock.length > 0 ? inStock : offers;
    const winner = pool.reduce((best, o) =>
      o.item.purchasePrice < best.item.purchasePrice ? o : best
    );

    for (const offer of offers) {
      if (offer === winner) continue;
      if (!toRemove.has(offer.supplier)) toRemove.set(offer.supplier, new Set());
      toRemove.get(offer.supplier).add(offer.item.block);
      reportRows.push([
        ean,
        winner.item.name,
        winner.supplier,
        winner.item.purchasePrice,
        winner.item.availability,
        offer.supplier,
        offer.item.purchasePrice,
        offer.item.availability,
      ]);
    }
  }

  let removedTotal = 0;
  for (const [supplier, blocks] of toRemove) {
    const data = suppliers[supplier];
    let xml = data.xml;
    for (const block of blocks) {
      xml = xml.replace(block, '');
      removedTotal++;
    }
    fs.writeFileSync(data.filePath, xml, 'utf-8');
  }

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  const csv = reportRows.map((r) => r.map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
  fs.writeFileSync(REPORT_PATH, csv, 'utf-8');

  console.log(`Cross-supplier dedupe: ${byEan.size} EANs checked, ${removedTotal} duplicate product(s) removed.`);
  for (const [supplier, blocks] of toRemove) {
    console.log(`  ${supplier}: -${blocks.size}`);
  }
}

main();

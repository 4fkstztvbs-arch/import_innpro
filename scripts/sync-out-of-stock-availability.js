'use strict';

// Shoptet s riadením skladu má pri produkte dve dostupnosti. Náš tag AVAILABILITY sa pri aktualizačnom
// importe zapisuje len do "Dostupnosť pri vypredaní", takže po vypredaní a opätovnom naskladnení
// zostane štítok "Vypredané" (a schéma OutOfStock), pri vypredaní zase štítok "Skladom" (schéma InStock).
// Test importom 8. 10. 2026 (všetci dodávatelia): správne sa správa len feed, kde je
// AVAILABILITY_OUT_OF_STOCK vždy rovnaké ako AVAILABILITY. Tento krok to zaručí pre každý SHOPITEM.
//
// Usage: node scripts/sync-out-of-stock-availability.js output/<dodavatel>.xml [...]
// Idempotentné: druhý beh nič nezmení.

const fs = require('node:fs');
const path = require('node:path');

const AVAILABILITY = /<AVAILABILITY(?:\s[^>]*)?>([\s\S]*?)<\/AVAILABILITY\s*>/i;
const OUT_OF_STOCK = /[ \t]*<AVAILABILITY_OUT_OF_STOCK(?:\s[^>]*)?>[\s\S]*?<\/AVAILABILITY_OUT_OF_STOCK\s*>\n?/gi;

function syncItem(item) {
  const match = item.match(AVAILABILITY);
  if (!match) return item;
  const tag = `<AVAILABILITY_OUT_OF_STOCK>${match[1]}</AVAILABILITY_OUT_OF_STOCK>`;
  const existing = item.match(/<AVAILABILITY_OUT_OF_STOCK(?:\s[^>]*)?>[\s\S]*?<\/AVAILABILITY_OUT_OF_STOCK\s*>/i);
  if (existing && existing[0] === tag) return item;
  const cleaned = item.replace(OUT_OF_STOCK, '');
  return cleaned.replace(AVAILABILITY, found => `${found}\n${tag}`);
}

function syncXml(xml) {
  let changed = 0;
  const output = xml.replace(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/gi, item => {
    const next = syncItem(item);
    if (next !== item) changed++;
    return next;
  });
  return { output, changed };
}

function main() {
  const files = process.argv.slice(2);
  if (files.length === 0) throw new Error('Usage: node scripts/sync-out-of-stock-availability.js output/<dodavatel>.xml [...]');
  const outDir = path.resolve(__dirname, '..', 'output') + path.sep;
  for (const file of files) {
    const xmlPath = path.resolve(file);
    if (!xmlPath.startsWith(outDir)) throw new Error(`${file}: XML musí byť v output/.`);
    const xml = fs.readFileSync(xmlPath, 'utf8');
    if (!/<SHOP(?:\s[^>]*)?>[\s\S]*<\/SHOP>/i.test(xml)) throw new Error(`${file}: chýba koreň SHOP.`);
    const { output, changed } = syncXml(xml);
    if (output !== xml) fs.writeFileSync(xmlPath, output);
    console.log(`${path.basename(xmlPath)}: AVAILABILITY_OUT_OF_STOCK upravené v ${changed} položkách.`);
  }
}

if (require.main === module) {
  try { main(); } catch (error) { console.error(`sync-out-of-stock-availability: ${error.message}`); process.exitCode = 1; }
}

module.exports = { syncItem, syncXml };

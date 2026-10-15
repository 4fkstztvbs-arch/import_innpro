'use strict';
// Poistka pre BASYS feed: každý Bose produkt z data/basys-bose-on-order.json (mimo cenníka) musí byť vo feede
// ako "Na objednávku" a viditeľný - nikdy nesmie zmiznúť ani prejsť na "Vypredané".
// Použitie: node scripts/check-basys-bose-on-order.js [output/basys.xml]
const fs = require('fs');
const path = require('path');
const { loadOnOrder, normCode } = require('./lib/basys-bose');

const file = path.resolve(process.argv[2] || path.join(__dirname, '..', 'output', 'basys.xml'));
const xml = fs.readFileSync(file, 'utf8');
const tag = (b, t) => ((b.match(new RegExp(`<${t}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${t}>`)) || [])[1] || '').trim();
const feed = new Map();
for (const b of xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || []) {
  const code = normCode(tag(b, 'CODE').replace(/^BASYS-/i, ''));
  if (!feed.has(code) || tag(b, 'NAME')) feed.set(code, b);
}
const problems = [];
let hidden = 0;
for (const [key, item] of loadOnOrder()) {
  const b = feed.get(key);
  if (!b) { problems.push(`${item.objKod}: chýba vo feede`); continue; }
  // Produkt, ktorý BaSys prestal viesť, je legitímne skrytý záznamom "Vypredané" + detailOnly (apply-missing-availability).
  if (!tag(b, 'NAME') && tag(b, 'AVAILABILITY') === 'Vypredané' && tag(b, 'VISIBILITY') === 'detailOnly') { hidden++; continue; }
  if (tag(b, 'AVAILABILITY') !== 'Na objednávku') problems.push(`${item.objKod}: dostupnosť "${tag(b, 'AVAILABILITY')}" namiesto "Na objednávku"`);
  if (tag(b, 'VISIBILITY') && tag(b, 'VISIBILITY') !== 'visible') problems.push(`${item.objKod}: viditeľnosť "${tag(b, 'VISIBILITY')}"`);
}
if (problems.length) {
  console.error(`BASYS Bose "Na objednávku" poistka zlyhala (${problems.length}):\n - ${problems.join('\n - ')}`);
  process.exit(1);
}
console.log(`BASYS Bose "Na objednávku": ${loadOnOrder().size} produktov mimo cenníka: ${loadOnOrder().size - hidden} "Na objednávku", ${hidden} skrytých (BaSys ich už nevedie).`);

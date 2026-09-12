// Posledná poistka pred importom: zaručuje, že vo vygenerovaných feedoch nezostane ani jedna
// kategória, ktorá v našom strome neexistuje. Shoptet takú kategóriu pri importe ticho vytvorí –
// presne tak vznikali „zamiešané" kategórie, ktoré sme celým projektom odstraňovali.
//
// Prečo to nerieši gate v resolve-category.js: `categoryRenamesByPath` je označený ako trusted
// a kontrolu obchádza, `transform-basys.js` a `transform-monacor.js` gate nemajú vôbec, a aj
// post-processing kroky (collapse-duplicate-categories.js, fix-ignored-categories.js,
// collapse-thin-categories.js) prepisujú názvy kategórií až po ňom. Tento skript preto beží ako
// POSLEDNÝ krok nad hotovým XML, kde už žiadna ďalšia úprava nenasleduje.
//
// Produkt sa nezahadzuje – kategória sa skráti na najhlbšieho predka, ktorý v strome existuje,
// takže tovar zostáva predajný, len dočasne o úroveň vyššie. Každý taký prípad ide do
// reports/kategorie-mimo-stromu-{dodavatel}.md, aby sa dal správne zaradiť: buď opraviť
// `categoryRenamesByPath`, alebo kategóriu vedome pridať do stromu a obnoviť
// data/known-categories.json.
//
// Usage: node scripts/enforce-tree-categories.js (prepisuje každý output/*.xml na mieste)
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'output');
const KNOWN_PATH = path.join(ROOT, 'data', 'known-categories.json');
const REPORTS_DIR = path.join(ROOT, 'reports');

function normalize(s) {
  return s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/\s+/g, ' ')
    .replace(/\s*>\s*/g, ' > ').trim();
}

const known = new Set(JSON.parse(fs.readFileSync(KNOWN_PATH, 'utf-8')).map(normalize));

// Najhlbší predok, ktorý v strome existuje. null = ani koreň neexistuje, kategória sa vynechá.
function deepestKnownAncestor(category) {
  const segs = category.split(' > ');
  for (let depth = segs.length; depth > 0; depth--) {
    const candidate = segs.slice(0, depth).join(' > ');
    if (known.has(normalize(candidate))) return candidate;
  }
  return null;
}

let totalChanged = 0;
let totalDropped = 0;

for (const file of fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.xml'))) {
  const supplier = file.replace('.xml', '');
  const filePath = path.join(OUT_DIR, file);
  const xml = fs.readFileSync(filePath, 'utf-8');

  // kategória mimo stromu -> { na: nová kategória alebo null, pocet, ukazka }
  const findings = new Map();

  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (item) => {
    if (!/<CATEGORY><!\[CDATA\[/.test(item)) return item;
    const nameM = item.match(/<PRODUCTNAME><!\[CDATA\[([\s\S]*?)\]\]><\/PRODUCTNAME>/)
      || item.match(/<NAME><!\[CDATA\[([\s\S]*?)\]\]><\/NAME>/);
    const productName = nameM ? nameM[1].trim() : '';

    let changed = false;
    const seen = new Set();
    const rebuilt = item.replace(/([ \t]*)<CATEGORY><!\[CDATA\[([\s\S]*?)\]\]><\/CATEGORY>\n?/g,
      (whole, indent, raw) => {
        const category = raw.trim();
        let target = category;
        if (!known.has(normalize(category))) {
          target = deepestKnownAncestor(category);
          changed = true;
          if (!findings.has(category)) findings.set(category, { na: target, count: 0, sample: productName });
          findings.get(category).count++;
          if (target === null) { totalDropped++; return ''; }
          totalChanged++;
        }
        // po skrátení môže vzniknúť duplicita s predkom, ktorý v zozname už je
        const key = normalize(target);
        if (seen.has(key)) return '';
        seen.add(key);
        return `${indent}<CATEGORY><![CDATA[${target}]]></CATEGORY>\n`;
      });
    return changed ? rebuilt : item;
  });

  if (out !== xml) fs.writeFileSync(filePath, out);

  const reportPath = path.join(REPORTS_DIR, `kategorie-mimo-stromu-${supplier}.md`);
  const lines = [`# Kategórie mimo stromu — ${supplier}`, '',
    `Kontrola z ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC.`, ''];
  if (!findings.size) {
    lines.push('Žiadne — všetky kategórie v tomto feede existujú v našom strome.');
  } else {
    lines.push('Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri',
      'importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty',
      'zostali v ponuke, len o úroveň vyššie).', '',
      'Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo',
      'kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez',
      '`node scripts/build-known-categories.js`.', '',
      '| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |',
      '|---|---|---|---|');
    for (const [category, info] of [...findings].sort((a, b) => b[1].count - a[1].count)) {
      lines.push(`| \`${category}\` | ${info.count} | ${info.na ? `\`${info.na}\`` : '**bez kategórie**'} `
        + `| ${info.sample.slice(0, 60)} |`);
    }
  }
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n') + '\n');

  if (findings.size) {
    console.log(`::warning::${supplier}: ${findings.size} kategórií mimo stromu skrátených na `
      + `existujúceho predka — viď reports/kategorie-mimo-stromu-${supplier}.md`);
  }
}

console.log(`enforce-tree-categories: ${totalChanged} zápisov skrátených, ${totalDropped} vynechaných`);

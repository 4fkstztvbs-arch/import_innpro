// Produkt bez kategórie je v e-shope neviditeľný pre navigáciu, ale viditeľný pre Google,
// porovnávače a priame odkazy — teda stránka, na ktorú sa zákazník nemá ako dostať a ktorá
// v kategóriách nikde nefiguruje. Namiesto toho ho radšej vedome skryjeme a nahlásime, nech
// sa dá zaradenie doriešiť.
//
// Odkiaľ sa také produkty berú: dodávateľ im vo svojom feede kategóriu neposiela vôbec
// (Solight ~20 ks lištového osvetlenia a GU10 svietidiel, MONACOR ~11 ks). Nejde o chybu
// nášho mapovania — enforce-tree-categories.js rieši opačný prípad, teda kategóriu, ktorá
// v našom strome neexistuje.
//
// Beží ako POSLEDNÝ krok nad hotovým XML, až za enforce-tree-categories.js — ten totiž môže
// kategóriu produktu zahodiť (keď pre ňu neexistuje ani známy predok), takže produkt bez
// kategórie môže vzniknúť až tam.
//
// Usage: node scripts/hide-uncategorised-products.js (prepisuje každý output/*.xml na mieste)
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'output');
const REPORTS_DIR = path.join(ROOT, 'reports');

let totalHidden = 0;
const perSupplier = [];

for (const file of fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.xml'))) {
  const supplier = file.replace('.xml', '');
  const filePath = path.join(OUT_DIR, file);
  const xml = fs.readFileSync(filePath, 'utf-8');

  const hidden = [];
  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (item) => {
    if (/<CATEGORY><!\[CDATA\[\s*\S/.test(item)) return item;

    const code = ((item.match(/<CODE>([\s\S]*?)<\/CODE>/) || [])[1] || '').trim();
    const nameM = item.match(/<(?:PRODUCTNAME|NAME)><!\[CDATA\[([\s\S]*?)\]\]><\/(?:PRODUCTNAME|NAME)>/);
    hidden.push({ code, name: nameM ? nameM[1].trim() : '' });

    // Shoptet berie obe polia: <VISIBLE> 1/0 a <VISIBILITY> visible/hidden. Prepisujeme obe,
    // nech sa nestane, že si import vyberie to druhé a produkt zostane na webe.
    return item
      .replace(/<VISIBLE>[\s\S]*?<\/VISIBLE>/, '<VISIBLE>0</VISIBLE>')
      .replace(/<VISIBILITY>[\s\S]*?<\/VISIBILITY>/, '<VISIBILITY>hidden</VISIBILITY>');
  });

  if (out !== xml) fs.writeFileSync(filePath, out);
  if (hidden.length) {
    totalHidden += hidden.length;
    perSupplier.push([supplier, hidden]);
  }
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });
const lines = ['# Produkty bez kategórie (skryté)', '',
  `Kontrola z ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC.`, ''];
if (!totalHidden) {
  lines.push('Žiadne — všetky produkty vo všetkých feedoch majú kategóriu.');
} else {
  lines.push('Týmto produktom dodávateľ neposiela vo feede kategóriu, takže by v e-shope',
    'zostali mimo navigácie. Sú preto nastavené ako **skryté**. Keď sa pre ne nájde správna',
    'kategória (pravidlo v `categoryRenamesByPath` daného dodávateľa alebo priradenie ručne',
    'v Shoptete), skript ich prestane skrývať sám od seba.', '');
  for (const [supplier, hidden] of perSupplier) {
    lines.push(`## ${supplier} — ${hidden.length} ks`, '', '| Kód | Produkt |', '|---|---|');
    for (const h of hidden) lines.push(`| \`${h.code}\` | ${h.name.slice(0, 80)} |`);
    lines.push('');
  }
}
fs.writeFileSync(path.join(REPORTS_DIR, 'produkty-bez-kategorie.md'), lines.join('\n') + '\n');

for (const [supplier, hidden] of perSupplier) {
  console.log(`::warning::${supplier}: ${hidden.length} produktov bez kategórie skrytých `
    + '— viď reports/produkty-bez-kategorie.md');
}
console.log(`hide-uncategorised-products: ${totalHidden} skrytých`);

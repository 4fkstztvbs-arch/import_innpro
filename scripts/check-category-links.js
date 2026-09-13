// Poistka, že odkaz v popise vedie tam, kde produkt naozaj je.
//
// 13. 9. 2026 ukazovalo 984 z 26 696 odkazov na cudziu kategóriu. Príčina: add-category-links.js
// vedel odstavec len PRIDAŤ a idempotenciu riešil testom, či v popise už je práve tá URL, ktorú
// chce zapísať — keď sa kategória produktu zmenila, starý odstavec tam ostal navždy. A pretože
// Shoptet páruje kategórie pri importe podľa URL, stará URL medzitým pripadla inej kategórii, takže
// odkaz nebol mŕtvy: viedol na úplne iný sortiment ("Náhradné diely" -> Antény a satelity).
//
// Samotná oprava add-category-links.js je tichá — keby sa raz rozbila, nikto sa to nedozvie, kým to
// niekto nenájde na webe. Tento skript preto kontroluje VÝSLEDOK, nie postup: pre každý produkt
// porovná URL v odstavci s URL jeho HLAVNEJ kategórie (prvá <CATEGORY>, tam Shoptet produkt
// zaradí) podľa data/category-urls.json. Pri nezhode skončí chybou a workflow sa zastaví pred
// commitom. Popri tom hlási — bez zastavenia — produkty, ktorých hlavná kategória je plytšia než
// iná ich vlastná vetva; tam je odkaz správny, len zaradenie by mohlo byť konkrétnejšie.
//
// Beží až ZA add-category-links.js, teda nad hotovým XML.
//
// Usage: node scripts/check-category-links.js
//   CATEGORY_LINKS_OVERRIDE=1  vedomé obídenie
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'output');
const URLS = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'category-urls.json'), 'utf-8'));
const OVERRIDE = process.env.CATEGORY_LINKS_OVERRIDE === '1';

const ODKAZ = /<p>Ďalšie produkty nájdete v kategórii <a href="([^"]*)">([^<]*)<\/a>\.<\/p>/g;

let spolu = 0, sOdkazom = 0, bezOdkazu = 0;
const chyby = [];
const plytkaHlavna = [];

for (const file of fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.xml')).sort()) {
  const xml = fs.readFileSync(path.join(OUT_DIR, file), 'utf-8');

  for (const item of xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || []) {
    const kategorie = [...item.matchAll(/<CATEGORY><!\[CDATA\[([\s\S]*?)\]\]><\/CATEGORY>/g)]
      .map((m) => m[1].trim()).filter(Boolean);
    if (!kategorie.length) continue;
    spolu++;

    // Prvá kategória = hlavná (defaultCategory), tam Shoptet produkt zaradí a tam má viesť odkaz.
    const kategoria = kategorie[0];
    const ocakavana = URLS[kategoria];

    // Hlavná kategória by mala byť zároveň najkonkrétnejšia. Keď nie je, produkt síce nie je zle
    // odkázaný, ale je zaradený plytšie, než by mohol byť — to sa hlási zvlášť a beh nezastavuje.
    const najhlbsia = kategorie.reduce((a, b) => (b.split(' > ').length > a.split(' > ').length ? b : a));
    if (najhlbsia !== kategoria) plytkaHlavna.push({ file, kategoria, najhlbsia });
    const odkazy = [...item.matchAll(ODKAZ)];
    const kod = ((item.match(/<CODE>([\s\S]*?)<\/CODE>/) || [])[1] || '').trim();

    if (!odkazy.length) { bezOdkazu++; continue; }
    sOdkazom++;

    if (odkazy.length > 1) {
      chyby.push({ file, kod, preco: `${odkazy.length} odkazov v jednom popise`, kategoria });
      continue;
    }
    const [, url, text] = odkazy[0];
    if (!ocakavana) {
      chyby.push({ file, kod, preco: `kategória "${kategoria}" nie je v category-urls.json, `
        + `odkaz na ${url} tam napriek tomu je`, kategoria });
    } else if (url !== ocakavana) {
      chyby.push({ file, kod, preco: `odkaz vedie na ${url} (text "${text}"), `
        + `ale produkt je v "${kategoria}" = ${ocakavana}`, kategoria });
    }
  }
}

console.log(`check-category-links: ${spolu} produktov s kategóriou, ${sOdkazom} s odkazom, `
  + `${bezOdkazu} bez odkazu, ${chyby.length} nesprávnych`);

if (plytkaHlavna.length) {
  console.log(`::warning::${plytkaHlavna.length} produktov má hlavnú kategóriu plytšiu než vlastnú `
    + 'vetvu — odkaz je správny, ale zaradenie by mohlo byť konkrétnejšie');
  for (const p of plytkaHlavna.slice(0, 5)) {
    console.log(`    ${p.file}: hlavná "${p.kategoria}", hlbšia "${p.najhlbsia}"`);
  }
}

if (!chyby.length) process.exit(0);

for (const c of chyby.slice(0, 20)) console.log(`::error::${c.file} ${c.kod}: ${c.preco}`);
if (chyby.length > 20) console.log(`::error::… a ďalších ${chyby.length - 20}`);
console.log('');
console.log('Odkaz v popise vedie na inú kategóriu, než v ktorej produkt je. Zákazník sa cez neho');
console.log('dostane na cudzí sortiment, preto sa commit nevykonal.');
console.log('');
console.log('Čo ďalej:');
console.log('  1. Skontrolujte, či add-category-links.js prepisuje starý odstavec (nie len pridáva).');
console.log('  2. Skontrolujte, či data/category-urls.json zodpovedá dnešnému stromu.');
console.log('  3. Keď je odchýlka zámerná, spustite s CATEGORY_LINKS_OVERRIDE=1.');

if (OVERRIDE) {
  console.log('');
  console.log('CATEGORY_LINKS_OVERRIDE=1 — pokračuje sa napriek tomu.');
  process.exit(0);
}
process.exit(1);

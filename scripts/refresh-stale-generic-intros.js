// Jednorazová (opakovateľná) oprava: produkty, ktorých popis bol obohatený EŠTE PRED tým, než
// pribudla kategória-špecifická úvodná veta pre ich (aktuálnu) podkategóriu, zostali natrvalo
// so starou generickou vetou "{name} je produkt od {brand}." - DEFAULT_INTRO. Dôvod, prečo ich
// bežný nočný beh sám neopraví: shouldEnrich/isPoorDescription vyžaduje "žiadne HTML" v popise,
// a tieto produkty už HTML majú (z prvého obohatenia), takže sú navždy vyňaté z ďalšieho
// prehodnotenia, aj keď medzičasom pribudla lepšia šablóna pre ich kategóriu.
//
// Táto oprava je cielená a bezpečná: nahradí LEN presne tú jednu generickú vetu (celý zvyšok
// popisu - obrázok, špecifikácie, kategória-odkaz - necháva bezo zmeny), a to iba ak pre
// aktuálnu podkategóriu produktu existuje kategória-špecifická šablóna v INTROS (inak by "je
// produkt od X" bola aj dnes správna/zamýšľaná - nie chyba).
//
// Usage: node scripts/refresh-stale-generic-intros.js [--out=output/kb.xml]

const fs = require('fs');
const path = require('path');
const { subcategoryOf, pickVariant, displayNameFor, escapeHtml, INTROS } = require('./lib/kb-description-enrichment');

const OUT_PATH = process.argv.find((a) => a.startsWith('--out='))?.slice('--out='.length) ||
  path.join(__dirname, '..', 'output', 'kb.xml');

function field(tagRegexSrc, itemXml) {
  const m = itemXml.match(new RegExp(tagRegexSrc, 's'));
  return m ? m[1] : '';
}

function main() {
  const xml = fs.readFileSync(OUT_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let changed = 0;
  const changedByCategory = {};

  const patched = items.map((rest) => {
    const itemXml = '<SHOPITEM>' + rest;
    const descMatch = itemXml.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    if (!descMatch) return rest;
    const description = descMatch[1];

    const name = field('<NAME><!\\[CDATA\\[(.*?)\\]\\]></NAME>', itemXml);
    const manufacturer = field('<MANUFACTURER><!\\[CDATA\\[(.*?)\\]\\]></MANUFACTURER>', itemXml);
    const code = field('<CODE>(.*?)</CODE>', itemXml);
    const firstCategory = field('<CATEGORY><!\\[CDATA\\[(.*?)\\]\\]></CATEGORY>', itemXml);

    const sub = subcategoryOf(firstCategory);
    const variants = INTROS[sub];
    if (!variants) return rest; // ziadna specificka sablona pre tuto kategoriu - "je produkt od X" je aj dnes spravne

    const displayName = displayNameFor(name);
    const brand = manufacturer || 'overeného výrobcu';
    // presna generika veta, akú produkuje DEFAULT_INTRO - iba tento presny tvar sa nahradza.
    const staleIntroRe = new RegExp(`<p>${escapeHtml(displayName).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} je produkt od ${escapeHtml(brand).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\.</p>`);
    if (!staleIntroRe.test(description)) return rest;

    const template = pickVariant(code, variants);
    const newIntro = template.replace(/\{name\}/g, escapeHtml(displayName)).replace(/\{brand\}/g, escapeHtml(brand));
    const newDescription = description.replace(staleIntroRe, `<p>${newIntro}</p>`);

    changed++;
    changedByCategory[firstCategory] = (changedByCategory[firstCategory] || 0) + 1;
    return rest.replace(descMatch[0], `<DESCRIPTION><![CDATA[${newDescription}]]></DESCRIPTION>`);
  });

  fs.writeFileSync(OUT_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`Refreshed ${changed} stale generic intros in ${OUT_PATH}`);
  for (const [cat, n] of Object.entries(changedByCategory).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${n}  ${cat}`);
  }
}

main();

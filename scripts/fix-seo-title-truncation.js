// Jednorazovy (opakovatelny) patch: stare SEO_TITLE polia vygenerovane povodnou (chybnou)
// verziou truncateAtWord() pri hranici 70 znakov niekedy zahodili CELE meno obchodu namiesto
// len chybajuceho 1-2 znakov, ak sa "premiumstore.sk" ocitlo tesne za hranicou - vysledny
// titulok tak konci osamotenym "|…" bez nazvu obchodu (viditelne aj v <title> na webe).
//
// scripts/transform-*.js uz maju opravenu funkciu buildSeoTitle, ktora tomuto zabranuje pri
// buducom generovani - tento skript opravuje uz existujuce SEO_TITLE polia vo vsetkych
// output/*.xml suboroch priamo, bez potreby znovu stahovat live feed (na to by boli potrebne
// GitHub Secrets, ktore v tomto sandboxe nie su k dispozicii).
//
// Usage: node fix-seo-title-truncation.js

const fs = require('fs');
const path = require('path');

const STORE_NAME = 'premiumstore.sk';
const FILES = ['atos.xml', 'basys.xml', 'innpro.xml', 'kb.xml', 'monacor.xml', 'penta.xml', 'solight.xml', 'wiim.xml'];

let totalFixed = 0;
for (const f of FILES) {
  const p = path.join(__dirname, '..', 'output', f);
  if (!fs.existsSync(p)) continue;
  const xml = fs.readFileSync(p, 'utf-8');
  let fixed = 0;
  const patched = xml.replace(/<SEO_TITLE><!\[CDATA\[(.*?) \|…\]\]><\/SEO_TITLE>/g, (m, core) => {
    fixed++;
    return `<SEO_TITLE><![CDATA[${core} | ${STORE_NAME}]]></SEO_TITLE>`;
  });
  if (fixed > 0) {
    fs.writeFileSync(p, patched, 'utf-8');
    console.log(`${f}: opravených ${fixed}`);
    totalFixed += fixed;
  } else {
    console.log(`${f}: 0 (bez zmeny)`);
  }
}
console.log('Spolu opravených:', totalFixed);

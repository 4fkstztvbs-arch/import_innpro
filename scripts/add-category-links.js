// Jednorazovy (opakovatelny) patch: doplni na koniec popisu KAZDEHO produktu (naprie vsetkymi
// dodavatelskymi feedmi) interny odkaz spat na jeho vlastnu (najhlbsiu priradenu) kategoriu -
// obojstranne prelinkovanie odporucane v AI/SEO/GEO audite (bod 16), rozsirene z povodneho
// pilotu pre "Diaľkové ovládače" (scripts/add-brand-category-links.js) na cely katalog.
//
// URL kazdej kategorie je OVERENA voci skutocnej sitemape webu (data/category-urls.json,
// vygenerovane 2026-09-06 z https://www.premiumstore.sk/sitemap.xml, ~29 500 URL) - ziadne URL
// sa nehada. 141 z 1188 najdenych kategoriovych nazvov chyba v mape zamerne - na webe existuju
// pod cislovanou variantou (napr. "Tablety" -> /tablety-4/ AJ /tablety-5/, zjavne duplicitne
// kategorie v Shoptet strome) a bez dalsej informacie sa neda bezpecne urcit, ktora cislovana
// varianta zodpoveda ktoremu nasmu produktu - tieto produkty preto ostavaju bez odkazu (bezpecne
// zlyhanie, nie riziko zlaho odkazu). Ak sa Shoptet strom vycisti (duplicity zluci), treba mapu
// prehodnotit.
//
// Usage: node add-category-links.js [--xml=output/atos.xml] (spusti sa raz na kazdy supplier XML)

const fs = require('fs');
const path = require('path');

const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length) ||
  path.join(__dirname, '..', 'output', 'atos.xml');
const URL_MAP_PATH = path.join(__dirname, '..', 'data', 'category-urls.json');

const CATEGORY_URLS = JSON.parse(fs.readFileSync(URL_MAP_PATH, 'utf-8'));

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function leafOf(categoryPath) {
  const segs = categoryPath.split(' > ');
  return segs[segs.length - 1];
}

function main() {
  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let added = 0, alreadyHad = 0, noMatch = 0;

  const patched = items.map((rest) => {
    // Prva <CATEGORY> je vzdy najhlbsia/hlavna priradena kategoria (defaultCategory), dalsie su
    // predkovia - rovnaky poriadok vo vsetkych transform-*.js skriptoch.
    const catM = rest.match(/<CATEGORY><!\[CDATA\[(.*?)\]\]><\/CATEGORY>/s);
    if (!catM) { noMatch++; return rest; }

    const leaf = leafOf(catM[1]);
    const url = CATEGORY_URLS[leaf];
    if (!url) { noMatch++; return rest; }

    if (rest.includes(`href="${url}"`)) { alreadyHad++; return rest; }

    const descM = rest.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    if (!descM) { noMatch++; return rest; }

    const linkPara = `<p>Ďalšie produkty nájdete v kategórii <a href="${url}">${escapeHtml(leaf)}</a>.</p>`;
    const newDesc = descM[1] + '\n' + linkPara;
    added++;
    return rest.replace(descM[0], `<DESCRIPTION><![CDATA[${newDesc}]]></DESCRIPTION>`);
  });

  fs.writeFileSync(XML_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`${path.basename(XML_PATH)}: pridaný odkaz: ${added}, už mal: ${alreadyHad}, bez zhody/neznáma kategória: ${noMatch}`);
}

main();

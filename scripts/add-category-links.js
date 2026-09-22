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

// Bez --xml sa spracujú VŠETKY output/*.xml. Je to tak zámerne: collapse-thin-categories.js a
// enforce-tree-categories.js prepisujú kategórie vo všetkých feedoch, nielen v tom práve
// transformovanom, takže keby sa odkazy dopĺňali len do jedného, ostatné by zostali s odkazom na
// kategóriu, v ktorej produkt už nie je. Presne tak 14. 9. 2026 spadol nočný beh MONACOR-u na
// jednom produkte Penty, ktorému medzitým collapse-thin zmenil kategóriu.
const OUT_DIR = path.join(__dirname, '..', 'output');
const ARG_XML = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length);
const XML_PATHS = ARG_XML ? [ARG_XML]
  : fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.xml')).sort().map((f) => path.join(OUT_DIR, f));
const URL_MAP_PATH = path.join(__dirname, '..', 'data', 'category-urls.json');

const CATEGORY_URLS = JSON.parse(fs.readFileSync(URL_MAP_PATH, 'utf-8'));

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Odstavec, ktorý tento skript sám vygeneroval pri niektorom z predošlých behov. Hľadá sa preto,
// lebo kategória produktu sa časom mení a starý odstavec by inak v popise ostal navždy: po
// prepnutí na nový strom (13. 9. 2026) ukazovalo 984 z 26 696 odkazov na nesprávnu kategóriu.
// Shoptet páruje kategórie pri importe podľa URL, takže staré URL medzitým dostala iná kategória
// — odkaz teda nebol mŕtvy, viedol na úplne iný sortiment ("Náhradné diely" -> Antény a satelity).
// Zachytáva aj absolútny tvar odkazu z pilotnej verzie skriptu (add-brand-category-links.js).
const EXISTING_LINK = /\s*<p>Ďalšie produkty nájdete v kategórii <a href="[^"]*">[^<]*<\/a>\.<\/p>/g;


function main(XML_PATH) {
  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let added = 0, alreadyHad = 0, noMatch = 0, updated = 0, removed = 0;

  const patched = items.map((rest) => {
    // Solight má explicitný DEFAULT_CATEGORY; ostatné feedy historicky používajú prvú CATEGORY.
    // Preferujeme preto DEFAULT_CATEGORY a iba ak chýba, použijeme prvú CATEGORY.
    const catM = rest.match(/<DEFAULT_CATEGORY(?:\s[^>]*)?><!\[CDATA\[(.*?)\]\]><\/DEFAULT_CATEGORY>/s)
      || rest.match(/<CATEGORY(?:\s[^>]*)?><!\[CDATA\[(.*?)\]\]><\/CATEGORY>/s);
    if (!catM) { noMatch++; return rest; }

    // Parovanie podla PLNEJ cesty, nie podla nazvu listu: v strome je 5 rovnakych nazvov listov
    // ("Prislusenstvo", "Reproduktory", "Nabijacky", "Selfie tyce", "Fotovoltaika") a podla
    // samotneho listu by produkt dostal odkaz na cudziu kategoriu. Text odkazu zostava nazov
    // listu - v texte popisu dava zmysel kratky nazov, nie cela cesta.
    const fullPath = catM[1].trim();
    const leaf = fullPath.split(' > ').pop().trim();
    const url = CATEGORY_URLS[fullPath];
    const descM = rest.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);

    // Kategóriu nepoznáme: starý odstavec treba aj tak odstrániť, inak by v popise ostal odkaz na
    // kategóriu, v ktorej už produkt nie je. Radšej žiaden odkaz než odkaz inam.
    if (!url || !descM) {
      noMatch++;
      if (!descM) return rest;
      // Zámerne bez .test() — regex má príznak `g`, takže si pamätá lastIndex a pri opakovanom
      // volaní by striedavo vracal false. .replace() lastIndex vždy vynuluje.
      const ocistene = descM[1].replace(EXISTING_LINK, '');
      if (ocistene === descM[1]) return rest;
      removed++;
      return rest.replace(descM[0], `<DESCRIPTION><![CDATA[${ocistene}]]></DESCRIPTION>`);
    }

    // Starý odstavec sa vždy odstráni a zapíše sa čerstvý — tak sa odkaz drží kategórie, v ktorej
    // produkt práve je, namiesto tej, v ktorej bol pri prvom behu.
    const linkPara = `<p>Ďalšie produkty nájdete v kategórii <a href="${url}">${escapeHtml(leaf)}</a>.</p>`;
    const bez = descM[1].replace(EXISTING_LINK, '');
    const newDesc = bez + '\n' + linkPara;
    if (newDesc === descM[1]) { alreadyHad++; return rest; }
    if (bez.length !== descM[1].length) updated++; else added++;
    return rest.replace(descM[0], `<DESCRIPTION><![CDATA[${newDesc}]]></DESCRIPTION>`);
  });

  fs.writeFileSync(XML_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`${path.basename(XML_PATH)}: pridaný odkaz: ${added}, prepísaný: ${updated}, `
    + `odstránený: ${removed}, už mal správny: ${alreadyHad}, bez zhody/neznáma kategória: ${noMatch}`);
}

for (const p of XML_PATHS) main(p);

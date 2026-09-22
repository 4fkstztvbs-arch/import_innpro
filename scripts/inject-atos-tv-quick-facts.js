// Jednorazový (opakovateľný) patch: doplní do už vygenerovaného output/atos.xml krátku
// úvodnú vetu s uhlopriečkou/farbou/pripojením pre televízory, presne rovnakou logikou akú
// teraz pri každom behu robí transform-atos.js (scripts/lib/atos-tv-quick-facts.js) - bez
// toho, aby bolo treba znova sťahovať živý ATOS feed (dostupný len v noci, navyše vyžaduje
// prístupové údaje). Dôvod je vysvetlený v transform-atos.js pri mieste, kde sa to isté
// deje pri živom behu: Google Merchant Center orezáva atribút `description` na 5000 znakov,
// takže fakty z tabuľky "Technické specifikace" hlboko v ATOS popise sa tam často vôbec
// nedostanú.
//
// Idempotentné: produkt, ktorý už túto vetu na začiatku popisu má, sa preskočí.
//
// Usage: node inject-atos-tv-quick-facts.js [--xml=output/atos.xml]

const fs = require('fs');
const path = require('path');
const { buildTvQuickFacts } = require('./lib/atos-tv-quick-facts');

const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length) ||
  path.join(__dirname, '..', 'output', 'atos.xml');

function xmlEscape(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function firstCategory(itemXml) {
  const m = itemXml.match(/<CATEGORIES>\s*<CATEGORY><!\[CDATA\[([\s\S]*?)\]\]><\/CATEGORY>/);
  return m ? m[1] : '';
}

function paramPairsOf(itemXml) {
  const block = itemXml.match(/<TEXT_PROPERTIES>([\s\S]*?)<\/TEXT_PROPERTIES>/);
  if (!block) return [];
  const pairs = [];
  const re = /<TEXT_PROPERTY>\s*<NAME><!\[CDATA\[([\s\S]*?)\]\]><\/NAME>\s*<VALUE><!\[CDATA\[([\s\S]*?)\]\]><\/VALUE>\s*<\/TEXT_PROPERTY>/g;
  let m;
  while ((m = re.exec(block[1]))) pairs.push([m[1], m[2]]);
  return pairs;
}

function main() {
  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let injected = 0, alreadyHad = 0, notTv = 0, noDiagonal = 0;

  const patched = items.map((rest) => {
    const itemXml = '<SHOPITEM>' + rest;
    const nameM = itemXml.match(/<NAME><!\[CDATA\[(.*?)\]\]><\/NAME>/s);
    if (!nameM || !firstCategory(itemXml).endsWith('Televízory')) { notTv++; return rest; }

    const descM = itemXml.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    if (!descM) { notTv++; return rest; }

    const quickFacts = buildTvQuickFacts(nameM[1], paramPairsOf(itemXml));
    if (!quickFacts) { noDiagonal++; return rest; }

    const desc = descM[1];
    if (desc.includes(quickFacts)) { alreadyHad++; return rest; }

    const newDesc = `<p>${xmlEscape(quickFacts)}</p>\n${desc}`;
    injected++;
    return rest.replace(descM[0], `<DESCRIPTION><![CDATA[${newDesc}]]></DESCRIPTION>`);
  });

  fs.writeFileSync(XML_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`Injected: ${injected}, already had: ${alreadyHad}, no diagonal param: ${noDiagonal}, not TV category: ${notTv}`);
}

main();

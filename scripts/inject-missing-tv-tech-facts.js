// Jednorazovy (opakovatelny) patch: pre televizory, ktore uz maju zakladny obohateny popis
// (h3 + uvod + obrazok + Kľúčové parametre), ale este nemaju v popise fakt o technologii
// displeja z TV_TECH_FACTS (pretoze bol do kodu doplneny AZ PO tomto behu transform-kb.js) -
// vlozi chybajucu sekciu priamo za obrazok, bez toho aby prepisoval zvysok popisu.
//
// Usage: node inject-missing-tv-tech-facts.js [--xml=output/kb.xml]

const fs = require('fs');
const path = require('path');

const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length) ||
  path.join(__dirname, '..', 'output', 'kb.xml');

const enrichSrc = fs.readFileSync(path.join(__dirname, 'lib', 'kb-description-enrichment.js'), 'utf-8');
const techMatch = enrichSrc.match(/const TV_TECH_FACTS = \[([\s\S]*?)\n\];/);
// eslint-disable-next-line no-eval
eval('var TV_TECH_FACTS = [' + techMatch[1] + ']');

function findTechFacts(manufacturer, name) {
  return TV_TECH_FACTS.find((t) => t.manufacturer === manufacturer && t.test.test(name));
}

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function subcategoryOf(defaultCategory) {
  if (!defaultCategory) return '';
  const segs = defaultCategory.split('>').map((s) => s.trim());
  return segs[segs.length - 1] || '';
}

function main() {
  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let injected = 0, alreadyHad = 0, noMatch = 0;

  const patched = items.map((rest) => {
    const itemXml = '<SHOPITEM>' + rest;
    const nameM = itemXml.match(/<NAME><!\[CDATA\[(.*?)\]\]><\/NAME>/s);
    const manufM = itemXml.match(/<MANUFACTURER><!\[CDATA\[(.*?)\]\]><\/MANUFACTURER>/s);
    const catM = itemXml.match(/<CATEGORY><!\[CDATA\[(.*?)\]\]><\/CATEGORY>/s);
    if (!nameM || !catM) { noMatch++; return rest; }

    const sub = subcategoryOf(catM[1]);
    if (sub !== 'Televízory') { noMatch++; return rest; }

    const descM = itemXml.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    if (!descM) { noMatch++; return rest; }
    const desc = descM[1];
    if (!/<h3>|<p>/.test(desc)) { noMatch++; return rest; } // not yet base-enriched

    const name = nameM[1];
    const manufacturer = manufM ? manufM[1] : '';
    const tech = findTechFacts(manufacturer, name);
    if (!tech) { noMatch++; return rest; }
    if (desc.includes(tech.heading)) { alreadyHad++; return rest; }

    const factsHtml = `<h3>${escapeHtml(tech.heading)}</h3>\n` +
      tech.paragraphs.map((p) => `<p>${p}</p>`).join('\n');

    let newDesc;
    if (/<p style="text-align:center"><img[^>]*><\/p>/.test(desc)) {
      newDesc = desc.replace(/(<p style="text-align:center"><img[^>]*><\/p>)/, `$1\n${factsHtml}`);
    } else {
      newDesc = desc.replace(/(<\/p>)/, `$1\n${factsHtml}`);
    }
    injected++;
    return rest.replace(descM[0], `<DESCRIPTION><![CDATA[${newDesc}]]></DESCRIPTION>`);
  });

  fs.writeFileSync(XML_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`Injected: ${injected}, already had tech fact: ${alreadyHad}, not applicable: ${noMatch}`);
}

main();

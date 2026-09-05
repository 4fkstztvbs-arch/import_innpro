// Jednorazovy (opakovatelny) patch: pre produkty, ktore uz maju zakladne obohateny popis
// (h3 + uvod + obrazok + Kľúčové parametre) z predosleho behu transform-kb.js, ale este
// nemaju najnovsie pridane kurátorske PRODUCT_FACTS (pretoze tie boli do kodu doplnene AZ PO
// tomto behu) - vlozi chybajucu sekciu s faktami priamo za obrazok, bez toho aby prepisoval
// zvysok popisu. Pouziva sa namiesto regenerovania z pristine zalohy (tá by uz mohla byt
// zastarana oproti dnesnemu zivemu feedu).
//
// Usage: node inject-missing-product-facts.js [--xml=output/kb.xml]

const fs = require('fs');
const path = require('path');
const { PRODUCT_FACTS } = require('./lib/kb-description-enrichment');

const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length) ||
  path.join(__dirname, '..', 'output', 'kb.xml');

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function main() {
  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let injected = 0, alreadyHad = 0, noMatch = 0;

  const patched = items.map((rest) => {
    const itemXml = '<SHOPITEM>' + rest;
    const codeM = itemXml.match(/<CODE>(.*?)<\/CODE>/);
    const code = codeM ? codeM[1] : null;
    const facts = code ? PRODUCT_FACTS[code] : null;
    if (!facts) return rest;

    const descM = itemXml.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    if (!descM) { noMatch++; return rest; }
    const desc = descM[1];
    if (desc.includes(facts.heading)) { alreadyHad++; return rest; }
    if (!/<h3>|<p>/.test(desc)) { noMatch++; return rest; } // not yet base-enriched, leave for transform-kb.js

    const factsHtml = `<h3>${escapeHtml(facts.heading)}</h3>\n` +
      facts.paragraphs.map((p) => `<p>${p}</p>`).join('\n');

    // Insert right after the image paragraph if present, otherwise right after the intro <p>.
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
  console.log(`Injected: ${injected}, already had facts: ${alreadyHad}, not applicable/not yet base-enriched: ${noMatch}`);
}

main();

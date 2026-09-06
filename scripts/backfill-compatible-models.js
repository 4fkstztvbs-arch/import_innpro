// Jednorazovy (opakovatelny) patch: extractCompatibleModels() bola opravena (regex teraz
// toleruje osamotene <br />/&nbsp; pred zatvaracim </p> a preklep "příjímačů" s dvoma í), vdaka
// comu teraz spravne rozpozna kompatibilne modely pri 610 produktoch namiesto povodnych 254.
// Tento skript dopocita chybajuce <INFORMATION_PARAMETERS> bloky priamo v uz nasadenom
// output/atos.xml, bez potreby znovu stahovat live ATOS feed (credentials na to v tomto
// sandboxe nie su k dispozicii). Nedotyka sa poloziek, ktore uz INFORMATION_PARAMETERS maju.
//
// Usage: node backfill-compatible-models.js [--xml=output/atos.xml]

const fs = require('fs');
const path = require('path');
const { extractCompatibleModels } = require('./extract-compatible-models');

const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length) ||
  path.join(__dirname, '..', 'output', 'atos.xml');

function xmlCdata(s) { return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>'; }

function main() {
  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let added = 0, alreadyHad = 0, noMatch = 0;

  const patched = items.map((rest) => {
    if (rest.includes('<INFORMATION_PARAMETERS>')) { alreadyHad++; return rest; }

    const descM = rest.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    if (!descM) { noMatch++; return rest; }
    const models = extractCompatibleModels(descM[1]);
    if (!models.length) { noMatch++; return rest; }

    const byName = new Map();
    for (const pv of models) {
      const idx = pv.indexOf(';');
      const name = pv.slice(0, idx), value = pv.slice(idx + 1);
      if (!byName.has(name)) byName.set(name, []);
      byName.get(name).push(value);
    }

    const parts = ['<INFORMATION_PARAMETERS>'];
    for (const [name, values] of byName) {
      parts.push('  <INFORMATION_PARAMETER>');
      parts.push(`    <NAME>${xmlCdata(name)}</NAME>`);
      values.forEach((v) => parts.push(`    <VALUE>${xmlCdata(v)}</VALUE>`));
      parts.push('  </INFORMATION_PARAMETER>');
    }
    parts.push('</INFORMATION_PARAMETERS>');
    const block = parts.join('\n');

    added++;
    // Rovnake poradie ako v buildShopitemXml: IMAGES, TEXT_PROPERTIES, INFORMATION_PARAMETERS.
    if (rest.includes('</TEXT_PROPERTIES>')) {
      return rest.replace('</TEXT_PROPERTIES>', `</TEXT_PROPERTIES>\n${block}`);
    }
    if (rest.includes('</IMAGES>')) {
      return rest.replace('</IMAGES>', `</IMAGES>\n${block}`);
    }
    // Ziadne IMAGES/TEXT_PROPERTIES - vloz hned na zaciatok polozky (za <CODE> ak existuje).
    return rest.replace(/(<\/CODE>)/, `$1\n${block}`);
  });

  fs.writeFileSync(XML_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`Pridané INFORMATION_PARAMETERS: ${added}, už malo: ${alreadyHad}, bez zhody: ${noMatch}`);
}

main();

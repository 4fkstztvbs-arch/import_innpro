// Jednorazovy dorobok: predchadzajuci beh scripts/fix-live-atos-remote-descriptions.js uz
// output/atos.xml prelozil, ale bez znacky pri kazdom modeli v uvodnej vete (viz najnovsia zmena
// v scripts/lib/atos-remote-control-description.js). Kedze translateAtosRemoteDescription je teraz
// idempotentna (uz spracovany popis znovu nespracuje), treba vziat PÔVODNY (este neprelozeny)
// cesky text zo zalohy spred prveho prekladu a znova ho spracovat aktualnou verziou funkcie.
//
// Usage: node fix-live-atos-remote-descriptions-v2.js --old=/tmp/atos_before_desc_translate.xml --xml=output/atos.xml

const fs = require('fs');
const path = require('path');
const { translateAtosRemoteDescription } = require('./lib/atos-remote-control-description');

const OLD_PATH = process.argv.find((a) => a.startsWith('--old='))?.slice('--old='.length);
const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length);
if (!OLD_PATH || !XML_PATH) { console.error('Usage: node fix-live-atos-remote-descriptions-v2.js --old=... --xml=...'); process.exit(1); }

function main() {
  const oldXml = fs.readFileSync(OLD_PATH, 'utf-8');
  const oldDescByCode = new Map();
  for (const rest of oldXml.split('<SHOPITEM>').slice(1)) {
    const codeM = rest.match(/<CODE>(.*?)<\/CODE>/);
    const descM = rest.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    if (codeM && descM) oldDescByCode.set(codeM[1], descM[1]);
  }

  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let updated = 0, noOldVersion = 0;

  const patched = items.map((rest) => {
    const catM = rest.match(/<CATEGORY><!\[CDATA\[(.*?)\]\]><\/CATEGORY>/s);
    if (!catM || !catM[1].includes('Diaľkové ovládače')) return rest;
    const codeM = rest.match(/<CODE>(.*?)<\/CODE>/);
    if (!codeM || !oldDescByCode.has(codeM[1])) { noOldVersion++; return rest; }

    const oldDesc = oldDescByCode.get(codeM[1]);
    const newDesc = translateAtosRemoteDescription(oldDesc);
    return rest.replace(/<DESCRIPTION><!\[CDATA\[[\s\S]*?\]\]><\/DESCRIPTION>/, () => {
      updated++;
      return `<DESCRIPTION><![CDATA[${newDesc}]]></DESCRIPTION>`;
    });
  });

  fs.writeFileSync(XML_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`${path.basename(XML_PATH)}: aktualizovaných popisov: ${updated}, bez zálohy (preskočené): ${noOldVersion}`);
}

main();

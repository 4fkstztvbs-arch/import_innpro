// Jednorazovy patch: prelozi uz nahrate <DESCRIPTION> polozky v kategorii "Diaľkové ovládače"
// (ATOS "ALIEN náhradný ovládač" šablóna) z češtiny do slovenčiny - viď
// scripts/lib/atos-remote-control-description.js. Root cause je uz opraveny v transform-atos.js,
// takze buduci nocny sync uz vygeneruje spravny popis od zaciatku.
//
// Usage: node fix-live-atos-remote-descriptions.js --xml=output/atos.xml

const fs = require('fs');
const path = require('path');
const { translateAtosRemoteDescription } = require('./lib/atos-remote-control-description');

const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length);
if (!XML_PATH) { console.error('Usage: node fix-live-atos-remote-descriptions.js --xml=output/atos.xml'); process.exit(1); }

function main() {
  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let translated = 0;

  const patched = items.map((rest) => {
    const catM = rest.match(/<CATEGORY><!\[CDATA\[(.*?)\]\]><\/CATEGORY>/s);
    if (!catM || !catM[1].includes('Diaľkové ovládače')) return rest;

    return rest.replace(/(<DESCRIPTION><!\[CDATA\[)([\s\S]*?)(\]\]><\/DESCRIPTION>)/, (full, pre, desc, post) => {
      const newDesc = translateAtosRemoteDescription(desc);
      if (newDesc !== desc) translated++;
      return pre + newDesc + post;
    });
  });

  fs.writeFileSync(XML_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`${path.basename(XML_PATH)}: preložených popisov: ${translated}`);
}

main();

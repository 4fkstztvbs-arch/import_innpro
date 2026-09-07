// Jednorazovy patch: prelozi uz nahrate <NAME> (a NAME v SEO_TITLE/META_DESCRIPTION, ak z neho
// vychadzaju) polozky v kategorii "Diaľkové ovládače" z cestiny do slovenciny - viz
// scripts/lib/translate-remote-control-names.js. Root cause je uz opraveny v transform-atos.js,
// takze buduci nocny sync uz vygeneruje spravny nazov od zaciatku.
//
// Usage: node fix-live-remote-control-names.js --xml=output/atos.xml

const fs = require('fs');
const path = require('path');
const { translateRemoteControlName } = require('./lib/translate-remote-control-names');

const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length);
if (!XML_PATH) { console.error('Usage: node fix-live-remote-control-names.js --xml=output/atos.xml'); process.exit(1); }

function main() {
  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let renamed = 0;

  const patched = items.map((rest) => {
    const catM = rest.match(/<CATEGORY><!\[CDATA\[(.*?)\]\]><\/CATEGORY>/s);
    if (!catM || !catM[1].includes('Diaľkové ovládače')) return rest;

    let out = rest;
    out = out.replace(/(<NAME><!\[CDATA\[)([\s\S]*?)(\]\]><\/NAME>)/, (full, pre, name, post) => {
      const translated = translateRemoteControlName(name);
      if (translated !== name) renamed++;
      return pre + translated + post;
    });
    // SEO_TITLE a META_DESCRIPTION zvyknu obsahovat cely nazov produktu - preloz aj tam, aby
    // nezostal cesky tvar v title tagu/meta popise aj po opravenom <NAME>.
    out = out.replace(/(<SEO_TITLE><!\[CDATA\[)([\s\S]*?)(\]\]><\/SEO_TITLE>)/, (full, pre, t, post) => pre + translateRemoteControlName(t) + post);
    out = out.replace(/(<META_DESCRIPTION><!\[CDATA\[)([\s\S]*?)(\]\]><\/META_DESCRIPTION>)/, (full, pre, t, post) => pre + translateRemoteControlName(t) + post);
    return out;
  });

  fs.writeFileSync(XML_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`${path.basename(XML_PATH)}: preložených názvov: ${renamed}`);
}

main();

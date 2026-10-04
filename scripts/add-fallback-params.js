// Doplní TEXT_PROPERTIES položkám, ktoré nemajú žiadne parametre (ani TEXT_PROPERTIES, ani
// INFORMATION_PARAMETERS). Spúšťa sa po transformácii a Icecat obohatení, takže skutočné
// špecifikácie z feedu/Icecatu majú vždy prednosť.
//
// Usage: FALLBACK_PARAMS_XML=output/kb.xml node scripts/add-fallback-params.js
const fs = require('fs');
const { buildFallbackParams } = require('./lib/fallback-params');


const cdata = (s) => '<![CDATA[' + String(s).replace(/]]>/g, ']]&gt;') + ']]>';
const field = (item, tag) => {
  const m = item.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([^<]*))</${tag}>`));
  return m ? (m[1] !== undefined ? m[1] : m[2]) : '';
};

function addToItem(item) {
  if (item.includes('<TEXT_PROPERTY>') || item.includes('<INFORMATION_PARAMETER>')) return { item, added: false };
  const params = buildFallbackParams({
    name: field(item, 'NAME'), description: field(item, 'DESCRIPTION'),
    manufacturer: field(item, 'MANUFACTURER'), warranty: field(item, 'WARRANTY'),
  });
  if (!params.length) return { item, added: false };
  const block = '<TEXT_PROPERTIES>\n' + params.map((p) =>
    `  <TEXT_PROPERTY>\n    <NAME>${cdata(p.name)}</NAME>\n    <VALUE>${cdata(p.value)}</VALUE>\n  </TEXT_PROPERTY>`).join('\n') + '\n</TEXT_PROPERTIES>';
  if (item.includes('</IMAGES>')) return { item: item.replace('</IMAGES>', `</IMAGES>\n${block}`), added: true };
  if (item.includes('<AVAILABILITY>')) return { item: item.replace('<AVAILABILITY>', `${block}\n<AVAILABILITY>`), added: true };
  return { item, added: false };
}

if (require.main === module) {
  const FILE = process.env.FALLBACK_PARAMS_XML;
  if (!FILE) { console.error('Missing FALLBACK_PARAMS_XML'); process.exit(1); }
  const xml = fs.readFileSync(FILE, 'utf8');
  let total = 0, added = 0;
  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (it) => {
    total++;
    const r = addToItem(it);
    if (r.added) added++;
    return r.item;
  });
  fs.writeFileSync(process.env.FALLBACK_PARAMS_OUT || FILE, out);
  console.log(`Fallback parametre: ${added} z ${total} položiek`);
}

module.exports = { addToItem };

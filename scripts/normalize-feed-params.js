// Zjednotí názvy a hodnoty parametrov vo feede (TEXT_PROPERTY, INFORMATION_PARAMETER) po slovensky.
// Usage: PARAMS_XML=output/innpro.xml [PARAMS_OUT=...] node scripts/normalize-feed-params.js
const fs = require('fs');
const { normalizeParams } = require('./lib/param-normalize');

const cdata = (s) => '<![CDATA[' + String(s).replace(/]]>/g, ']]&gt;') + ']]>';
const unwrap = (s) => {
  const m = s.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return m ? m[1] : s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
};

function rewriteBlock(block, tag, wrapTag, stats) {
  const re = new RegExp(`<${tag}>[\\s\\S]*?</${tag}>`, 'g');
  const items = block.match(re);
  if (!items) return block;
  const params = items.map((it) => {
    const name = (it.match(/<NAME>([\s\S]*?)<\/NAME>/) || [, ''])[1];
    const values = [...it.matchAll(/<VALUE>([\s\S]*?)<\/VALUE>/g)].map((m) => unwrap(m[1].trim()));
    return { name: unwrap(name.trim()), values };
  });
  const norm = normalizeParams(params);
  stats.before += params.length; stats.after += norm.length;
  return norm.map((p) => `  <${tag}>\n    <NAME>${cdata(p.name)}</NAME>\n` +
    p.values.map((v) => `    <VALUE>${cdata(v)}</VALUE>\n`).join('') + `  </${tag}>`).join('\n');
}

function normalizeItem(item, stats) {
  let out = item;
  for (const [wrap, tag] of [['TEXT_PROPERTIES', 'TEXT_PROPERTY'], ['INFORMATION_PARAMETERS', 'INFORMATION_PARAMETER']]) {
    const re = new RegExp(`<${wrap}>([\\s\\S]*?)</${wrap}>`);
    const m = out.match(re);
    if (!m) continue;
    const inner = rewriteBlock(m[1], tag, wrap, stats);
    out = out.replace(re, () => (inner.trim() ? `<${wrap}>\n${inner}\n</${wrap}>` : ''));
  }
  return out;
}

if (require.main === module) {
  const FILE = process.env.PARAMS_XML;
  if (!FILE) { console.error('Missing PARAMS_XML'); process.exit(1); }
  const xml = fs.readFileSync(FILE, 'utf8');
  const stats = { before: 0, after: 0 };
  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (it) => normalizeItem(it, stats));
  fs.writeFileSync(process.env.PARAMS_OUT || FILE, out);
  console.log(`Parametre zjednotené: ${stats.before} -> ${stats.after}`);
}
module.exports = { normalizeItem };

'use strict';
// Presunie vybranú fotku z galérie produktu na prvé miesto (hlavná fotka pre Shoptet, Google a Meta).
// Zoznam: data/image-overrides.json, kľúč = CODE, primary = názov súboru fotky, ktorá už je v galérii.
// Použitie: node scripts/apply-image-overrides.js --supplier=innpro [--xml=output/innpro.xml]
const fs = require('fs');
const path = require('path');

const OVERRIDES_PATH = path.join(__dirname, '..', 'data', 'image-overrides.json');

function applyImageOverrides(xml, overrides) {
  const stats = { applied: 0, unchanged: 0, missing: [] };
  const seen = new Set();
  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (item) => {
    const code = item.match(/<CODE>([^<]*)<\/CODE>/)?.[1];
    const rule = code && overrides[code];
    if (!rule) return item;
    seen.add(code);
    return item.replace(/<IMAGES>([\s\S]*?)<\/IMAGES>/, (block, inner) => {
      const lines = inner.match(/<IMAGE(?:\s[^>]*)?>[^<]*<\/IMAGE>/g) || [];
      const idx = lines.findIndex((l) => l.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim().split('/').pop() === rule.primary);
      if (idx < 0) { stats.missing.push(code); return block; }
      if (idx === 0) { stats.unchanged++; return block; }
      const ordered = [lines[idx], ...lines.filter((_, i) => i !== idx)]
        .map((l, i) => l.replace(/( - obrázok )\d+(")/, `$1${i + 1}$2`));
      stats.applied++;
      return '<IMAGES>\n' + ordered.map((l) => '  ' + l).join('\n') + '\n</IMAGES>';
    });
  });
  for (const code of Object.keys(overrides)) if (!seen.has(code)) stats.missing.push(code);
  return { xml: out, stats };
}

function main() {
  const arg = (k) => process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3);
  const supplier = arg('supplier');
  if (!supplier) throw new Error('Missing --supplier=<kód>');
  const xmlPath = arg('xml') || path.join(__dirname, '..', 'output', `${supplier}.xml`);
  const overrides = JSON.parse(fs.readFileSync(OVERRIDES_PATH, 'utf-8'))[supplier];
  if (!overrides || !fs.existsSync(xmlPath)) { console.log(`Image overrides (${supplier}): nič na úpravu`); return; }
  const { xml, stats } = applyImageOverrides(fs.readFileSync(xmlPath, 'utf-8'), overrides);
  if (stats.applied) fs.writeFileSync(xmlPath, xml, 'utf-8');
  console.log(`Image overrides (${supplier}): prehodených ${stats.applied}, už v poriadku ${stats.unchanged}, nenájdených ${stats.missing.length}${stats.missing.length ? ' (' + stats.missing.join(', ') + ')' : ''}`);
}

if (require.main === module) main();
module.exports = { applyImageOverrides };

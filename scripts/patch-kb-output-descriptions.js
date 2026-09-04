// Jednorazová (opakovateľná) úprava už vygenerovaného output/kb.xml: rozšíri chudobné
// popisy produktov v kategórii "TV, audio a video" rovnakou logikou, akú transform-kb.js
// odteraz aplikuje sám pri každom nočnom behu (scripts/lib/kb-description-enrichment.js).
// Existuje preto, že tento beh nemá k dispozícii K-B feed credentials (KB_ZBOZI_URL a
// ďalšie sú len GitHub Secrets) - nemôže teda spustiť transform-kb.js nanovo. Namiesto
// toho upraví priamo <DESCRIPTION> v už committnutom XML, aby sa zmena dostala do
// Shoptetu pri najbližšom automatickom importe bez čakania na ďalší nočný beh.
//
// Usage: node scripts/patch-kb-output-descriptions.js [--out=output/kb.xml]

const fs = require('fs');
const path = require('path');
const { shouldEnrich, buildEnrichedDescription } = require('./lib/kb-description-enrichment');

const OUT_PATH = process.argv.find((a) => a.startsWith('--out='))?.slice('--out='.length) ||
  path.join(__dirname, '..', 'output', 'kb.xml');

function xmlCdata(s) { return '<![CDATA[' + String(s == null ? '' : s).replace(/]]>/g, ']]&gt;') + ']]>'; }

function field(tagRegexSrc, itemXml) {
  const m = itemXml.match(new RegExp(tagRegexSrc, 's'));
  return m ? m[1] : '';
}

function main() {
  const xml = fs.readFileSync(OUT_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift(); // everything before first <SHOPITEM>
  let changed = 0;

  const patched = items.map((rest) => {
    const itemXml = '<SHOPITEM>' + rest;
    const name = field('<NAME><!\\[CDATA\\[(.*?)\\]\\]></NAME>', itemXml);
    const manufacturer = field('<MANUFACTURER><!\\[CDATA\\[(.*?)\\]\\]></MANUFACTURER>', itemXml);
    const code = field('<CODE>(.*?)</CODE>', itemXml);
    const descMatch = itemXml.match(/<DESCRIPTION><!\[CDATA\[(.*?)\]\]><\/DESCRIPTION>/s);
    const description = descMatch ? descMatch[1] : '';
    const firstCategory = field('<CATEGORY><!\\[CDATA\\[(.*?)\\]\\]></CATEGORY>', itemXml);
    // Dôležité: "<IMAGE\\s" (nie "<IMAGE[^>]*") - inak regex omylom matchne aj
    // obalujúci tag <IMAGES>, ktorého meno tiež začína "IMAGE".
    const firstImage = field('<IMAGE\\s[^>]*>(.*?)</IMAGE>', itemXml);

    const candidate = { code, name, manufacturer, description, image: firstImage, defaultCategory: firstCategory };
    if (!descMatch || !shouldEnrich(candidate)) return rest;

    const enriched = buildEnrichedDescription(candidate);
    changed++;
    const newDescTag = `<DESCRIPTION>${xmlCdata(enriched)}</DESCRIPTION>`;
    return rest.replace(/<DESCRIPTION><!\[CDATA\[.*?\]\]><\/DESCRIPTION>/s, newDescTag);
  });

  fs.writeFileSync(OUT_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`Patched ${changed} descriptions in ${OUT_PATH}`);
}

main();

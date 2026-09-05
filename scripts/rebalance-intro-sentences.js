// Jednorazovy (opakovatelny) patch: po pridani dalsich variantov do INTROS (viac ruznych
// uvodnych viet na podkategoriu, aby stovky produktov v tej istej podkategorii nemali
// doslovne identicku prvu vetu) prepocita a nahradi LEN uvodnu vetu (prvy <p>...</p> hned
// po <h3>nazov</h3>) v uz nasadenom output/kb.xml - zvysok popisu (fakty, Kľúčové parametre,
// obrazok) necha netaknuty. Bez tohto by nova sablona zacala platit az pre produkty, ktore
// transform-kb.js spracuje odznova (t.j. az po dalsom nocnom behu).
//
// Usage: node rebalance-intro-sentences.js [--xml=output/kb.xml]

const fs = require('fs');
const path = require('path');

const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length) ||
  path.join(__dirname, '..', 'output', 'kb.xml');

// Znovupouzitie internej logiky z kb-description-enrichment.js bez upravy jej verejneho API -
// nacitanie zdrojoveho suboru a extrakcia INTROS + pickVariant/displayNameFor/pickom rovnakym
// sposobom, ako to robi samotny modul (drzat v sync, ak sa tieto funkcie niekedy zmenia).
const enrichSrc = fs.readFileSync(path.join(__dirname, 'lib', 'kb-description-enrichment.js'), 'utf-8');
const introsMatch = enrichSrc.match(/const INTROS = \{([\s\S]*?)\n\};/);
// eslint-disable-next-line no-eval
eval('var INTROS = {' + introsMatch[1] + '}');

function pickVariant(code, variants) {
  let hash = 0;
  const s = String(code || '');
  for (let i = 0; i < s.length; i++) hash = (hash * 31 + s.charCodeAt(i)) >>> 0;
  return variants[hash % variants.length];
}
function displayNameFor(name) {
  return String(name || '')
    .replace(/\s*\d+\s*karton(y|ov)?\s*$/i, '')
    .replace(/\s*\d+\s*ks\/?blistr.*$/i, '')
    .trim();
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
  let changed = 0, skippedNoMultiVariant = 0, skippedNoMatch = 0;

  const patched = items.map((rest) => {
    const itemXml = '<SHOPITEM>' + rest;
    const nameM = itemXml.match(/<NAME><!\[CDATA\[(.*?)\]\]><\/NAME>/s);
    const manufM = itemXml.match(/<MANUFACTURER><!\[CDATA\[(.*?)\]\]><\/MANUFACTURER>/s);
    const codeM = itemXml.match(/<CODE>(.*?)<\/CODE>/);
    const catM = itemXml.match(/<CATEGORY><!\[CDATA\[(.*?)\]\]><\/CATEGORY>/);
    const descM = itemXml.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    if (!nameM || !codeM || !catM || !descM) { skippedNoMatch++; return rest; }

    const sub = subcategoryOf(catM[1]);
    const variants = INTROS[sub];
    if (!variants || variants.length < 2) { skippedNoMultiVariant++; return rest; }

    const desc = descM[1];
    // Uvodna veta = prve <p>...</p> hned po <h3>nazov</h3> na zaciatku popisu.
    const introMatch = desc.match(/^(<h3>.*?<\/h3>\n<p>)(.*?)(<\/p>)/s);
    if (!introMatch) return rest;

    const name = nameM[1];
    const manufacturer = manufM ? manufM[1] : '';
    const code = codeM[1];
    const brand = manufacturer || 'overeného výrobcu';
    const displayName = displayNameFor(name);
    const template = pickVariant(code, variants);
    const newIntro = template.replace(/\{name\}/g, escapeHtml(displayName)).replace(/\{brand\}/g, escapeHtml(brand));

    if (introMatch[2] === newIntro) return rest; // uz zhoduje sa - nic sa nemeni
    const newDesc = desc.slice(0, introMatch.index) + introMatch[1] + newIntro + introMatch[3] + desc.slice(introMatch.index + introMatch[0].length);
    changed++;
    return rest.replace(descM[0], `<DESCRIPTION><![CDATA[${newDesc}]]></DESCRIPTION>`);
  });

  fs.writeFileSync(XML_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`Zmenená úvodná veta: ${changed}, bez viacerých variantov (nedotknuté): ${skippedNoMultiVariant}, bez zhody: ${skippedNoMatch}`);
}

main();

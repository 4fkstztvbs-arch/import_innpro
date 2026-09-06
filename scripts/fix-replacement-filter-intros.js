// Jednorazovy (opakovatelny) patch: niektore produkty (nahradne vodne filtre/filtracne
// patrony do chladniciek, kavovarov a pod.) su v K-B feede nespravne zaradene priamo pod
// kategoriu samotneho spotrebica (napr. "Chladnicky"), takze kategoria-specificka uvodna
// veta nespravne tvrdi, ze produkt JE ten spotrebic ("... je chladnicka od ..."). Tento patch
// prepocita a nahradi LEN uvodnu vetu pre uz nasadene popisy, ktore zodpovedaju vzoru
// REPLACEMENT_FILTER_RE z kb-description-enrichment.js - zvysok popisu necha netaknuty.
//
// Usage: node fix-replacement-filter-intros.js [--xml=output/kb.xml]

const fs = require('fs');
const path = require('path');

const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length) ||
  path.join(__dirname, '..', 'output', 'kb.xml');

const REPLACEMENT_FILTER_RE = /\bfiltr\w*\b[\s\S]{0,60}\b(pro|do)\s+\w*(chladni[cč]|ledni[cč]|prá[cč]|umýva[cč]|kávovar)/i;

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function main() {
  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let changed = 0, skippedNoMatch = 0;

  const patched = items.map((rest) => {
    const itemXml = '<SHOPITEM>' + rest;
    const nameM = itemXml.match(/<NAME><!\[CDATA\[(.*?)\]\]><\/NAME>/s);
    const manufM = itemXml.match(/<MANUFACTURER><!\[CDATA\[(.*?)\]\]><\/MANUFACTURER>/s);
    const descM = itemXml.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    if (!nameM || !descM) { skippedNoMatch++; return rest; }

    const desc = descM[1];
    if (!/<h3>|<p>/.test(desc)) { skippedNoMatch++; return rest; } // not yet base-enriched

    // Test proti celemu popisu bez HTML znaciek (zachytí aj text v spec-liste za uvodom).
    const plain = desc.replace(/<[^>]+>/g, ' ');
    if (!REPLACEMENT_FILTER_RE.test(plain)) { skippedNoMatch++; return rest; }

    const introMatch = desc.match(/^(<h3>.*?<\/h3>\n<p>)(.*?)(<\/p>)/s);
    if (!introMatch) { skippedNoMatch++; return rest; }

    const name = nameM[1];
    const manufacturer = manufM ? manufM[1] : '';
    const brand = manufacturer || 'overeného výrobcu';
    const newIntro = `${escapeHtml(name)} je náhradný vodný filter od ${escapeHtml(brand)}.`;

    if (introMatch[2] === newIntro) return rest; // uz zhoduje sa
    const newDesc = desc.slice(0, introMatch.index) + introMatch[1] + newIntro + introMatch[3] + desc.slice(introMatch.index + introMatch[0].length);
    changed++;
    return rest.replace(descM[0], `<DESCRIPTION><![CDATA[${newDesc}]]></DESCRIPTION>`);
  });

  fs.writeFileSync(XML_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`Opravená úvodná veta: ${changed}, bez zhody: ${skippedNoMatch}`);
}

main();

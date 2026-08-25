// Merges known duplicate/self-nested categories across all supplier outputs into one canonical
// path. Two kinds of duplication this fixes:
//  1. Self-nested: a raw feed category text like "Slúchadlá > Slúchadlá" passes straight through
//     (no explicit rename covers it) and happens to already be a real, live Shoptet category
//     (a generic "other X" sibling to "X Bluetooth", "X herné", ...) — legitimate on its own,
//     but redundant once the parent "X" already exists for the same product line.
//  2. Same category reachable under two different live paths (e.g. "IP kamery" under both
//     "Bezpečnosť a smart domácnosť" directly and nested under "Smart domácnosť").
//
// COLLAPSE_MAP is hand-curated (reports/kategorie-duplicity-2026-08-25.md) — every entry was
// checked against data/known-categories.json to confirm both sides are real live categories
// before merging, since this script can only ever ADD/rewrite categories in our own feed, never
// delete the now-orphaned one in Shoptet itself (the automatic XML import has no delete
// mechanism) — after this runs, hide/remove the losing side manually in Shoptet admin.
//
// Usage: node collapse-duplicate-categories.js (rewrites every output/*.xml in place)
'use strict';

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'output');

const COLLAPSE_MAP = {
  'TV, audio a video > Audio technika > Slúchadlá > Slúchadlá': 'TV, audio a video > Audio technika > Slúchadlá',
  'Profesionálna audio technika > JTS > Slúchadlá > Slúchadlá': 'Profesionálna audio technika > JTS > Slúchadlá',
  'Záhrada > Odpudzovače a lapače hmyzu > Odpudzovače a lapače hmyzu': 'Záhrada > Odpudzovače a lapače hmyzu',
  'TV, audio a video > Mobily a tablety > Smart hodinky > Smart hodinky': 'TV, audio a video > Mobily a tablety > Smart hodinky',
  'TV, audio a video > AV káble > AV káble': 'TV, audio a video > AV káble',
  'TV, audio a video > Počítače a príslušenstvo > Tablety > Tablety': 'TV, audio a video > Počítače a príslušenstvo > Tablety',
  'Elektroinštalačný materiál > Osvetlenie > LED žiarovky': 'Elektroinštalačný materiál > Osvetlenie > LED Žiarovky',
  'TV, audio a video > Príslušenstvo k TV, audio, video > Diaľkové ovládače': 'TV, audio a video > Diaľkové ovládače',
  'TV, audio a video > Reproduktory': 'TV, audio a video > Audio technika > Reproduktory',
  'Bezpečnosť a smart domácnosť > Smart domácnosť > IP kamery': 'Bezpečnosť a smart domácnosť > IP kamery',
  'TV, audio a video > Počítače a príslušenstvo > Sieťové prvky > IP kamery': 'Bezpečnosť a smart domácnosť > IP kamery',
  'Bezpečnosť a smart domácnosť > Smart domácnosť > Robotické vysávače': 'Domáce spotrebiče > Malé spotrebiče > Vysávače > Robotické vysávače',
  // Second pass (2026-08-25), found via the full-tree browser — same self-nested "general X
  // under X" pattern, all verified live in data/known-categories.json before merging.
  'Náradie a dielňa > Kancelária a škola > Tlačiarne štítkov > Tlačiarne štítkov': 'Náradie a dielňa > Kancelária a škola > Tlačiarne štítkov',
  'Záhrada > Záhradné náradie > Záhradné nožnice > Záhradné nožnice': 'Záhrada > Záhradné náradie > Záhradné nožnice',
  'Fotovoltaika a energie > Elektrické stanice > Elektrické stanice': 'Fotovoltaika a energie > Elektrické stanice',
  'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Spájkovacie stanice > Spajkovacie stanice':
    'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Spájkovacie stanice',
  'Zdravie a starostlivosť > Sonické zubné kefky > Sonické zubné kefky': 'Zdravie a starostlivosť > Sonické zubné kefky',
  'Auto-moto > Videorekordéry > Videorekordéry': 'Auto-moto > Videorekordéry',
  'Fotovoltaika a energie > Fotovoltaické panely > Fotovoltaické panely': 'Fotovoltaika a energie > Fotovoltaické panely',
};

// Pure marketing/promo tags leaked from a supplier's raw feed root with no real place in our
// tree (e.g. ATOS's own anniversary promo category) — dropped outright rather than merged,
// since there's no sensible target. Only ever remove a CATEGORY line, never touch the rest of
// the SHOPITEM; every product on this list was checked to still have a real category left over.
const DROP_CATEGORIES = [
  'Druhy > AKCE ATOS 35 LET',
];

function xmlCdata(s) { return '<![CDATA[' + s.replace(/]]>/g, ']]&gt;') + ']]>'; }

function collapseFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf-8');
  let xml = original;
  const counts = {};
  for (const [from, to] of Object.entries(COLLAPSE_MAP)) {
    const needle = `<CATEGORY>${xmlCdata(from)}</CATEGORY>`;
    const replacement = `<CATEGORY>${xmlCdata(to)}</CATEGORY>`;
    const occurrences = original.split(needle).length - 1;
    if (occurrences > 0) counts[from] = occurrences;
    xml = xml.split(needle).join(replacement);
  }
  for (const dropped of DROP_CATEGORIES) {
    const needle = `  <CATEGORY>${xmlCdata(dropped)}</CATEGORY>\n`;
    const occurrences = original.split(needle).length - 1;
    if (occurrences > 0) counts[dropped] = occurrences;
    xml = xml.split(needle).join('');
  }

  // Dedupe: a SHOPITEM that already listed both the old and new path (or now has the new path
  // twice after collapsing two old paths onto it) should only list it once.
  xml = xml.replace(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/g, (block) => {
    const lines = block.match(/  <CATEGORY>.*?<\/CATEGORY>/g) || [];
    const seen = new Set();
    const kept = [];
    for (const line of lines) {
      if (seen.has(line)) continue;
      seen.add(line);
      kept.push(line);
    }
    if (kept.length === lines.length) return block;
    return '<CATEGORIES>\n' + kept.join('\n') + '\n</CATEGORIES>';
  });

  fs.writeFileSync(filePath, xml, 'utf-8');
  return counts;
}

function main() {
  const files = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith('.xml'));
  const totals = {};
  for (const f of files) {
    const counts = collapseFile(path.join(OUTPUT_DIR, f));
    for (const [from, n] of Object.entries(counts)) {
      totals[from] = (totals[from] || 0) + n;
    }
  }
  const totalMerged = Object.values(totals).reduce((a, b) => a + b, 0);
  console.log(`Collapsed ${Object.keys(totals).length} duplicate categories, ${totalMerged} product category entries rewritten.`);
  console.log(JSON.stringify(totals, null, 2));
}

main();

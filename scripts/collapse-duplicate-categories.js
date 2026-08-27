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
  // Found manually (2026-08-25): a K+B drone toy filed under "TV, audio a video" instead of the
  // dedicated "Dróny a RC modely" top-level category that already exists for exactly this.
  'TV, audio a video > Drony': 'Dróny a RC modely',
  // General electrical supplies stranded under the tools department, duplicating the dedicated
  // top-level "Elektroinštalačný materiál" (3672 products) with no distinguishing context —
  // unlike the Auto-moto > Elektroinštalačný materiál branch, which is genuinely car-specific.
  'Náradie a dielňa > Náradie > Stavebné materiál, chémia a technika > Elektroinštalačný materiál': 'Elektroinštalačný materiál',
  'Náradie a dielňa > Náradie > Stavebné materiál, chémia a technika > Elektroinštalačný materiál > Svorkovnice a Wago svorky': 'Elektroinštalačný materiál',
  'Náradie a dielňa > Náradie > Stavebné materiál, chémia a technika > Elektroinštalačný materiál > Predlžovacie káble': 'Elektroinštalačný materiál',
  'Náradie a dielňa > Náradie > Stavebné materiál, chémia a technika > Elektroinštalačný materiál > Ističe, inštalačné krabice, rozvádzače': 'Elektroinštalačný materiál',
  // "Televízory" had two competing, mostly-unused sub-categorizations (by panel type: LED/OLED/
  // QLED/UHD, and separately by screen diagonal) layered on top of each other — per request,
  // flattened into one category; filtering by type/diagonal moves to Shoptet product parameters
  // instead. Televízory na 12V / Príslušenstvo pre televízory / LED projektory are real distinct
  // product lines, not a type/size split, so those stay as their own categories.
  'TV, audio a video > Televízory > 32" (80 - 82 cm)': 'TV, audio a video > Televízory',
  'TV, audio a video > Televízory > 43" (108 - 109 cm)': 'TV, audio a video > Televízory',
  'TV, audio a video > Televízory > do 30" (76 cm)': 'TV, audio a video > Televízory',
  'TV, audio a video > Televízory > nad 48" (120 - 165 cm)': 'TV, audio a video > Televízory',
  'TV, audio a video > Televízory > LED televízory': 'TV, audio a video > Televízory',
  'TV, audio a video > Televízory > OLED televízory': 'TV, audio a video > Televízory',
  'TV, audio a video > Televízory > QLED, NeoQLED televízory': 'TV, audio a video > Televízory',
  'TV, audio a video > Televízory > UHD(4K) televízory': 'TV, audio a video > Televízory',
  'TV, audio a video > Televízory > Televízory Ultra HD (4K)': 'TV, audio a video > Televízory',
  // "Audio - video káble" duplicated "AV káble" wholesale (same subcategories) — currently empty
  // of products from our feeds, kept here as a guard in case a future feed ever lands there.
  'TV, audio a video > Audio - video káble': 'TV, audio a video > AV káble',
  'TV, audio a video > Audio - video káble > HDMI káble': 'TV, audio a video > AV káble > HDMI káble',
  'TV, audio a video > Audio - video káble > Redukcie': 'TV, audio a video > AV káble > HDMI spojky a redukcie',
  // Two parallel "accessories" buckets under TV, audio a video — folded the smaller one
  // ("Príslušenstvo", HDMI/AUDIO converters) into the bigger, more populated one.
  'TV, audio a video > Príslušenstvo': 'TV, audio a video > Príslušenstvo k TV, audio, video',
  'TV, audio a video > Príslušenstvo > AUDIO prevodníky': 'TV, audio a video > Príslušenstvo k TV, audio, video > AUDIO prevodníky',
  'TV, audio a video > Príslušenstvo > Bezdrátové přenosy signálu': 'TV, audio a video > Príslušenstvo k TV, audio, video > Bezdrátové přenosy signálu',
  'TV, audio a video > Príslušenstvo > Bezdrátové přenosy signálu > AUDIO přenosy': 'TV, audio a video > Príslušenstvo k TV, audio, video > Bezdrátové přenosy signálu > AUDIO přenosy',
  'TV, audio a video > Príslušenstvo > Bezdrátové přenosy signálu > Bluetooth': 'TV, audio a video > Príslušenstvo k TV, audio, video > Bezdrátové přenosy signálu > Bluetooth',
  'TV, audio a video > Príslušenstvo > HDMI prevodníky': 'TV, audio a video > Príslušenstvo k TV, audio, video > HDMI prevodníky',
  'TV, audio a video > Príslušenstvo > HDMI rozbočovače': 'TV, audio a video > Príslušenstvo k TV, audio, video > HDMI rozbočovače',

  // Third pass (2026-08-27), found via a full category audit of the live productsComplete.xml
  // export (reports/kategorizacia-akcny-plan.md) — the same "same product type, two independent
  // branches" pattern as above, this time spanning entire parallel sub-trees rather than a single
  // self-nested leaf. Canonical side chosen the same way as find-category-duplicates.js: lower
  // Shoptet category id (older/established), not product count.
  // Headphones split into two unrelated branches under "TV, audio a video" — id 45231
  // ("Audio technika > Slúchadlá") is the older, more complete tree (has TWS/Náhlavné/Drôtové
  // sub-splits); id-less "Slúchadlá" directly under the top level is the newer, thinner one.
  'TV, audio a video > Slúchadlá': 'TV, audio a video > Audio technika > Slúchadlá',
  'TV, audio a video > Slúchadlá > Drátová': 'TV, audio a video > Audio technika > Slúchadlá > Drátová',
  'TV, audio a video > Slúchadlá > Bezdrátová': 'TV, audio a video > Audio technika > Slúchadlá > Bezdrátová',
  'TV, audio a video > Slúchadlá > True Bezdrôtové': 'TV, audio a video > Audio technika > Slúchadlá > True Bezdrôtové',
  'TV, audio a video > Slúchadlá > Príslušenstvo pre slúchadlá': 'TV, audio a video > Audio technika > Slúchadlá > Príslušenstvo pre slúchadlá',
  // Extension cords/power strips split by supplier brand (EMOS/ORNO under "Predlžovačky, zásuvky,
  // vidlica" vs Solight under "Predlžovacie káble a zásuvky") into two parallel trees with the
  // same length-based sub-structure — folded the smaller Solight branch into the established one.
  'Elektroinštalačný materiál > Predlžovacie káble a zásuvky': 'Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica',
  'Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Výsuvné a vstavané zásuvky': 'Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Výsuvné a vstavané zásuvky',
  'Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Jednozásuvkové > Jednozásuvkové 230V': 'Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Jednozásuvkové > Jednozásuvkové 230V',
  'Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Viaczásuvkové > Ostatné': 'Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Viaczásuvkové > Ostatné',
  'Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Navíjacie bubny': 'Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Navíjacie bubny',
  'Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Jednozásuvkové > Jednozásuvkové  400V': 'Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Jednozásuvkové > Jednozásuvkové  400V',
  'Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Viaczásuvkové > Klasické': 'Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Viaczásuvkové > Klasické',
  'Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Prepäťové ochrany': 'Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Prepäťové ochrany',
  'Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Záhradné stĺpiky': 'Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Záhradné stĺpiky',
  // Smart hodinky (smart watches) existed at two different nesting depths under "Mobily a
  // tablety" — folded the bare one into the "Nositeľná elektronika" (wearables) branch. Smart
  // prstene (smart rings) were nested a level too deep under "Smart hodinky" itself, as if a ring
  // were a type of watch — moved out to be a direct sibling under "Nositeľná elektronika" instead.
  'TV, audio a video > Mobily a tablety > Smart hodinky': 'TV, audio a video > Mobily a tablety > Nositeľná elektronika > Smart hodinky',
  'TV, audio a video > Mobily a tablety > Smart hodinky > Smart prstene': 'TV, audio a video > Mobily a tablety > Nositeľná elektronika > Smart prstene',
  'TV, audio a video > Mobily a tablety > Smart hodinky > Príslušenstvo': 'TV, audio a video > Mobily a tablety > Nositeľná elektronika > Smart hodinky > Príslušenstvo',
  // Soundbars, HiFi amplifiers and projectors each had a duplicate nesting within the same
  // top-level branch (a specific sub-path vs a shallower one for the same product type).
  'TV, audio a video > Audio technika > Reproduktory > Soundbary': 'TV, audio a video > Audio technika > Soundbary',
  'TV, audio a video > Audio technika > Zosilňovače': 'TV, audio a video > Audio technika > HiFi komponenty > Zosilňovače',
  'TV, audio a video > Počítače a príslušenstvo > Monitory > Plátna a projektory > Projektory': 'TV, audio a video > Počítače a príslušenstvo > Projektory a plátna > Projektory',
  // Powerbanks and smart plugs/sockets each split across two sibling branches of the same
  // top-level category (Fotovoltaika a energie / Bezpečnosť a smart domácnosť respectively).
  'Fotovoltaika a energie > Nabíjačky > Powerbanky': 'Fotovoltaika a energie > Záložné zdroje a UPS > Powerbanky',
  'Bezpečnosť a smart domácnosť > Smart domácnosť > Zásuvky': 'Bezpečnosť a smart domácnosť > Prvky výkonu > Smart zástrčky > Zásuvky',
  // Same underlying product type (PV cable / heavy-duty power cable / dashcam) filed under two
  // unrelated top-level categories — folded into the one with the dedicated, larger tree.
  'Fotovoltaika a energie > Fotovoltaika > Káble pre fotovoltaiku > Fotovoltaické káble': 'Elektroinštalačný materiál > Káble a vodiče > Fotovoltaické káble',
  'Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Silové káble': 'Elektroinštalačný materiál > Káble a vodiče > Silové káble',
  'Auto-moto > Bezpečnosť > Kamery do autá': 'TV, audio a video > Video technika > Kamery do autá',
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

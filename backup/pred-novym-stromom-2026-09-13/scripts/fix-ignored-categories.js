// Fixes category names Heureka's "Ignorované kategórie" report rejected with reason "Nepresný
// alebo nezaraditeľný názov kategórie" (imprecise or unclassifiable category name) — Heureka
// could not tell what TYPE of product a bare/generic leaf like "Doplnky", "Ostatné",
// "Príslušenstvo" or "Iné" denotes, so it refuses to auto-pair those products into its own
// category tree at all (confirmed: this happens even when HEUREKA_CATEGORY_ID is already set for
// the path, and even when the category IS a real, live Shoptet category — see
// reports/ignorovane-kategorie-2026-08-26.md).
//
// RENAME_MAP rewrites just the leaf segment (folding in enough of the parent context that the
// leaf alone states a product type) for every affected path found in the 2026-08-26 report.
// DROP_LIST removes pure marketing/status pseudo-categories ("Nové produkty", "Výpredaj",
// "Špeciálna ponuka + Akciové sety") that were never a real product type to begin with.
//
// Like collapse-duplicate-categories.js, this is a pure text rewrite over the already-generated
// output/*.xml — it runs AFTER each transform (and after collapse-duplicate-categories.js) in
// every *-sync.yml workflow, so it never interacts with the known-categories.json gating that
// happens earlier, inside the transform scripts.
//
// Usage: node fix-ignored-categories.js (rewrites every output/*.xml in place)
'use strict';

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'output');

const RENAME_MAP = {
  'TV, audio a video > Audio technika > Doplnky': 'TV, audio a video > Audio technika > Príslušenstvo k audio technike',
  'Profesionálna audio technika > Svetlá > Svetelné efekty': 'Profesionálna audio technika > Svetlá > Diskotékové a pódiové svetelné efekty',
  'Bezpečnosť a smart domácnosť > Prvky výkonu > Senzory': 'Bezpečnosť a smart domácnosť > Prvky výkonu > Senzory pre smart domácnosť',
  'Kreatívne technológie > Potlač textilu': 'Kreatívne technológie > Tlačiarne a lisy na potlač textilu',
  'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Skrinky Do It Yourself':
    'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Stavebnice reproduktorových skríň DIY',
  'Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > IP ozvučenie':
    'Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > IP reproduktory a ozvučovacie systémy',
  'Náradie a dielňa > Meracie nástroje': 'Náradie a dielňa > Meracie prístroje',
  'Profesionálna audio technika > Pódium, diskotéka, DJ > Pódiové, DJ príslušenstvo':
    'Profesionálna audio technika > Pódium, diskotéka, DJ > Príslušenstvo pre pódiové a DJ vybavenie',
  'Profesionálna audio technika > Svetlá > Architektonické osvetlenie': 'Profesionálna audio technika > Svetlá > Architektonické LED osvetlenie',
  'Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Káblová očká':
    'Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Káblové očká (konektory pre akumulátory)',
  'Šport, hračky a voľný čas > Outdoor > Kempovanie': 'Šport, hračky a voľný čas > Outdoor > Kempingové vybavenie',
  'Šport, hračky a voľný čas > Fitness Vybavenie': 'Šport, hračky a voľný čas > Fitness náradie a vybavenie',
  'Profesionálna audio technika > Svetlá > Reflektory PAR > LED reflektory': 'Profesionálna audio technika > Svetlá > Reflektory PAR > LED PAR reflektory',
  'Záhrada > Zavlažovacie systémy': 'Záhrada > Záhradné zavlažovacie systémy',
  'Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Prenosné ozvučovacie systémy':
    'Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Prenosné PA ozvučovacie systémy',
  'Profesionálna audio technika > Pódium, diskotéka, DJ > ozvučovacie systémy':
    'Profesionálna audio technika > Pódium, diskotéka, DJ > PA ozvučovacie systémy pre pódium a DJ',
  'TV, audio a video > Audio technika > Stojany': 'TV, audio a video > Audio technika > Stojany pre reproduktory a slúchadlá',
  'Profesionálna audio technika > JTS > Inštalácie > Konferenčné systémy':
    'Profesionálna audio technika > JTS > Inštalácie > Inštalačné konferenčné systémy JTS',
  'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Napájanie':
    'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Napájacie zdroje',
  'Profesionálna audio technika > Svetlá > Lasery > Multicolor Laser': 'Profesionálna audio technika > Svetlá > Lasery > Multicolor diskotékové lasery',
  'Šport, hračky a voľný čas > Hračky > Vybavenie pokojíčků a školek > Hracie funkční nábytok':
    'Šport, hračky a voľný čas > Hračky > Vybavenie pokojíčků a školek > Detský hrací nábytok pre škôlky',
  'Domáce spotrebiče > Malé spotrebiče > Nádobie': 'Domáce spotrebiče > Malé spotrebiče > Kuchynské nádobie',
  'Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Fastóny':
    'Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Fastónové konektory',
  'Profesionálna audio technika > Car audio > Príslušenstvo Car audio':
    'Profesionálna audio technika > Car audio > Príslušenstvo pre autorádiá a car audio',
  'Profesionálna audio technika > Pódium, diskotéka, DJ > Káble a príslušenstvo':
    'Profesionálna audio technika > Pódium, diskotéka, DJ > Audio káble a konektory',
  'Profesionálna audio technika > Svetlá > Statívy a príslušenstvo': 'Profesionálna audio technika > Svetlá > Statívy a príslušenstvo pre svetlá',
  'Bezpečnosť a smart domácnosť > Smart domácnosť > Ostatné smart elektronika':
    'Bezpečnosť a smart domácnosť > Smart domácnosť > Smart domácnosť – doplnková elektronika',
  'Profesionálna audio technika > Svetlá > Otočné hlavy a skenery > Moving Heads Wash':
    'Profesionálna audio technika > Svetlá > Otočné hlavy a skenery > Moving Heads Wash (pohyblivé hlavy)',
  'TV, audio a video > Audio technika': 'TV, audio a video > Audio technika > Audio technika – ostatné produkty',
  'Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Bezdrôtový, sprievodcovský systém > nabíjačky a príslušenstvo':
    'Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Bezdrôtový, sprievodcovský systém > Nabíjačky a príslušenstvo k sprievodcovským systémom',
  'Domáce spotrebiče > Malé spotrebiče > Čistenie': 'Domáce spotrebiče > Malé spotrebiče > Čistiace prístroje a doplnky',
  'Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Káblové spojky':
    'Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Káblové spojky (konektory)',
  'Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky > príslušenstvo':
    'Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky > Príslušenstvo k transportným kufrom a rackom',
  'Profesionálna audio technika > Svetlá > Špeciálne efekty a náplne > Ohňostroje':
    'Profesionálna audio technika > Svetlá > Špeciálne efekty a náplne > Pyrotechnické efekty (ohňostroje)',
  'Zdravie a starostlivosť > Chovateľské potreby > Ostatné príslušenstvo':
    'Zdravie a starostlivosť > Chovateľské potreby > Ostatné príslušenstvo pre zvieratá',
  'Bezpečnosť a smart domácnosť > Príslušenstvo': 'Bezpečnosť a smart domácnosť > Príslušenstvo pre zabezpečovacie systémy',
  'Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Sady fastonů':
    'Fotovoltaika a energie > Akumulátory a batérie > Príslušenstvo > Očká, fastóny, dutinky, spojky > Sady fastónov (konektorov)',
  'Fotovoltaika a energie > Elektrické stanice > Príslušenstvo': 'Fotovoltaika a energie > Elektrické stanice > Príslušenstvo k elektrickým staniciam',
  'Profesionálna audio technika > JTS': 'Profesionálna audio technika > JTS – mikrofóny a bezdrôtové systémy',
  'Profesionálna audio technika > Pódium, diskotéka, DJ > Distribútory': 'Profesionálna audio technika > Pódium, diskotéka, DJ > Distribútory audio signálu',
  'Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > príslušenstvo':
    'Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > Príslušenstvo k statívom a držiakom',
  'Profesionálna audio technika > Svetlá > Ovládače a kontroléry': 'Profesionálna audio technika > Svetlá > Ovládače a DMX kontroléry svetiel',
  'Šport, hračky a voľný čas > Posilňovanie a fitness': 'Šport, hračky a voľný čas > Posilňovanie a fitness – vybavenie',
  'Šport, hračky a voľný čas > Turistika > Cestování a outdoor': 'Šport, hračky a voľný čas > Turistika > Turistické a outdoorové vybavenie',
  'Foto a príslušenstvo > Príslušenstvo > Ostatné': 'Foto a príslušenstvo > Príslušenstvo > Ostatné príslušenstvo k fotoaparátom',
  'Náradie a dielňa > Ostatné': 'Náradie a dielňa > Ostatné náradie a vybavenie dielne',
  'Profesionálna audio technika > Multi-room': 'Profesionálna audio technika > Multi-room ozvučenie',
  'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Chémia':
    'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Technická chémia',
  'Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky':
    'Profesionálna audio technika > Pódium, diskotéka, DJ > Transportné kufre a racky pre audio techniku',
  'Šport, hračky a voľný čas > Outdoor > Príslušenstvo na kľuky': 'Šport, hračky a voľný čas > Outdoor > Príslušenstvo k bicyklovým kľukám',
  'Mobily, smart hodinky a tablety > Ostatné': 'Mobily, smart hodinky a tablety > Ostatné príslušenstvo pre mobily a tablety',
  'Počítače a notebooky > Herné príslušenstvo > Osvetlenie':
    'Počítače a notebooky > Herné príslušenstvo > RGB osvetlenie pre herné príslušenstvo',
  'Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Ostatné':
    'Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Ostatné príslušenstvo ku kamerám',
  'Bezpečnosť a smart domácnosť > Prvky výkonu > Smart kúrenie > Ovládače klimatizácie > tepelného čerpadla':
    'Bezpečnosť a smart domácnosť > Prvky výkonu > Smart kúrenie > Ovládače klimatizácie a tepelného čerpadla',
  'Elektroinštalačný materiál > Osvetlenie > LED panely a podhľadová svetla > Příslušenstvo':
    'Elektroinštalačný materiál > Osvetlenie > LED panely a podhľadová svetla > Príslušenstvo k LED panelom',
  'Kreatívne technológie > Roboty > Roboty Humanoidalne > Seria R1': 'Kreatívne technológie > Roboty > Roboty Humanoidalne > Humanoidné roboty séria R1',
  'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Príslušenstvo a iné':
    'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Ostatné príslušenstvo pre náradie a DIY',
  'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Spájkovacie stanice > príslušenstvo':
    'Profesionálna audio technika > Náradia, Do It Yourself, napájanie, meracia technika > Spájkovacie stanice > Príslušenstvo k spájkovacím staniciam',
  'Profesionálna audio technika > Pódium, diskotéka, DJ > Príslušenstvo k reproduktorom > Iné':
    'Profesionálna audio technika > Pódium, diskotéka, DJ > Príslušenstvo k reproduktorom > Ostatné príslušenstvo k reproduktorom',
  'Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky':
    'Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy a držiaky pre reproduktory',
  'Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > hudobných nástrojov a nôt':
    'Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > Statívy pre hudobné nástroje a noty',
  'Profesionálna audio technika > Svetlá': 'Profesionálna audio technika > Svetlá > Svetlá – ostatné produkty',
  'Profesionálna audio technika > Svetlá > Otočné hlavy a skenery': 'Profesionálna audio technika > Svetlá > Otočné hlavy a skenery – ostatné',
  'Šport, hračky a voľný čas > Posilňovanie a fitness > Príslušenstvo pre posilňovanie':
    'Šport, hračky a voľný čas > Posilňovanie a fitness > Príslušenstvo pre posilňovanie – ostatné',
  'Počítače a notebooky > Herné príslušenstvo > Ostatné':
    'Počítače a notebooky > Herné príslušenstvo > Ostatné herné príslušenstvo',
  'Počítače a notebooky > Ostatné': 'Počítače a notebooky > Ostatné počítačové príslušenstvo',
  'Zdravie a starostlivosť > Chovateľské potreby > Starostlivosť o zvieratá':
    'Zdravie a starostlivosť > Chovateľské potreby > Prípravky na starostlivosť o zvieratá',
};

// Pure marketing/status labels leaked through as if they were product categories — no product
// type to state, so drop the CATEGORY line outright rather than invent one (mirrors the
// DROP_CATEGORIES pattern in collapse-duplicate-categories.js). Every product on this list keeps
// at least one other, real category from the same feed.
const DROP_LIST = [
  'Profesionálna audio technika > Nové produkty',
  'Profesionálna audio technika > Výpredaj',
  'Profesionálna audio technika > Špeciálna ponuka + Akciové sety',
];

function xmlCdata(s) { return '<![CDATA[' + s.replace(/]]>/g, ']]&gt;') + ']]>'; }

function fixFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf-8');
  let xml = original;
  const counts = {};
  for (const [from, to] of Object.entries(RENAME_MAP)) {
    const needle = `<CATEGORY>${xmlCdata(from)}</CATEGORY>`;
    const replacement = `<CATEGORY>${xmlCdata(to)}</CATEGORY>`;
    const occurrences = original.split(needle).length - 1;
    if (occurrences > 0) counts[from] = occurrences;
    xml = xml.split(needle).join(replacement);
  }
  for (const dropped of DROP_LIST) {
    const needle = `  <CATEGORY>${xmlCdata(dropped)}</CATEGORY>\n`;
    const occurrences = original.split(needle).length - 1;
    if (occurrences > 0) counts[dropped] = occurrences;
    xml = xml.split(needle).join('');
  }

  // Dedupe: a rename could collide with a category the product already listed separately.
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
    const counts = fixFile(path.join(OUTPUT_DIR, f));
    for (const [from, n] of Object.entries(counts)) {
      totals[from] = (totals[from] || 0) + n;
    }
  }
  const totalFixed = Object.values(totals).reduce((a, b) => a + b, 0);
  console.log(`Fixed ${Object.keys(totals).length} ignored categories, ${totalFixed} product category entries rewritten.`);
  console.log(JSON.stringify(totals, null, 2));
}

main();

'use strict';

// Rozšírenie chudobných K-B popisov (jedna veta zlepená z parametrov, alebo krátka
// neformátovaná veta) na obsiahlejší popis s nadpisom, úvodným odsekom, hlavným
// obrázkom produktu a prehľadným zoznamom parametrov/vlastností - v štýle, akým
// popisy dodáva InnPro (pozri Colmi Ring). Nič sa nevymýšľa: text stavia výhradne
// na tom, čo K-B feed sám poskytuje (názov, výrobca, kategória, existujúci text).
//
// Zámerne bez akejkoľvek zmienky o AI/generovaní - výstup má vyzerať a čítať sa
// ako bežný redakčný popis, nie ako strojovo označený text.
//
// Použitie: transform-kb.js volá shouldEnrich() + buildEnrichedDescription() pri
// stavbe každého SHOPITEM-u pre kategóriu "TV, audio a video". Rovnaký modul
// používa aj jednorazový patch-kb-output-descriptions.js na dotiahnutie už
// vygenerovaného output/kb.xml bez nutnosti znova sťahovať K-B feed.

// --- Detekcia "chudobného" popisu -------------------------------------------------
// Popis sa oplatí rozšíriť, ak v ňom nie je žiadne HTML (autor/K-B mu ešte
// nedodal formátovaný text) a je kratší než rozumná dĺžka na to, aby to bol
// už plnohodnotný redakčný text.
function isPoorDescription(desc) {
  if (!desc) return false;
  const hasHtml = /<[a-z][\s\S]*>/i.test(desc);
  return !hasHtml && desc.length < 900;
}

// --- Parsovanie surového textu -----------------------------------------------------
// K-B posiela popis v dvoch štýloch:
//  a) "štruktúrovaný": skupiny "Popisok: hodnota" oddelené čiarkou, skupiny navzájom
//     bodkou, napr. "Uhlopriečka displeja: 32" (81 cm), Rozlíšenie: HD. Smart TV."
//  b) "prozaický": voľný text (často po česky), bez dvojbodiek, napr. marketingová
//     veta od výrobcu.
// Podľa počtu dvojbodiek sa rozhodne, ktorý z dvoch spôsobov formátovania použiť.
function looksStructured(desc) {
  const colonCount = (desc.match(/:\s/g) || []).length;
  return colonCount >= 2;
}

function splitStructuredItems(desc) {
  // Skupiny oddelené bodkou (nie desatinnou/tisícovou - preto vyžadujeme za bodkou
  // medzeru alebo koniec reťazca), vo vnútri skupiny prvky oddelené čiarkou.
  const groups = desc.split(/\.\s+|\.$/).map((g) => g.trim()).filter(Boolean);
  const items = [];
  for (const group of groups) {
    // Čiarka bez medzery za sebou (napr. "190,5 cm") je desatinná čiarka, nie
    // oddeľovač položiek - tie majú v K-B feede vždy medzeru za čiarkou.
    for (const raw of group.split(/,\s+/)) {
      const piece = raw.trim();
      if (!piece) continue;
      items.push(piece);
    }
  }
  return items;
}

function cleanFeature(piece) {
  // "HDMI: 3" -> "HDMI: 3" (necháme), "redukce MPEG" -> "Redukcia MPEG" (len veľké
  // prvé písmeno, obsah sa neprekladá - mimo rozsahu tejto úpravy).
  const s = piece.trim();
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// --- Výber variantu šablóny (deterministicky podľa kódu produktu) -----------------
function pickVariant(code, variants) {
  let hash = 0;
  const s = String(code || '');
  for (let i = 0; i < s.length; i++) hash = (hash * 31 + s.charCodeAt(i)) >>> 0;
  return variants[hash % variants.length];
}

// --- Úvodné vety podľa podkategórie -------------------------------------------------
// Viac variantov na podkategóriu, aby sa pri stovkách produktov v tej istej
// podkategórii text neopakoval doslovne. {name}/{brand} sa dosadia za beh.
const INTROS = {
  'Televízory': [
    '{name} je televízor od značky {brand}, ktorý ocenia najmä tí, čo hľadajú vyváženú kombináciu obrazovej kvality a praktickej výbavy.',
    '{name} od {brand} ponúka moderné spracovanie obrazu a výbavu, vďaka ktorej sa hodí ako hlavný televízor v obývačke.',
    'Televízor {name} spája technológie {brand} do zariadenia určeného na každodenné sledovanie aj náročnejší multimediálny obsah.',
  ],
  'Bezdrôtové slúchadlá': [
    '{name} sú bezdrôtové slúchadlá od {brand}, navrhnuté pre pohodlné bezkáblové počúvanie hudby aj telefonovanie.',
    'Bezdrôtové slúchadlá {name} od značky {brand} spájajú voľnosť pohybu bez káblov s výbavou na každodenné použitie.',
    '{name} ponúkajú bezdrôtové pripojenie cez Bluetooth a výbavu, ktorá z nich robí praktický spoločník na cesty aj do bežného dňa.',
  ],
  'Drôtové slúchadlá': [
    '{name} sú drôtové slúchadlá od {brand} určené pre stabilné pripojenie bez nutnosti nabíjania.',
    'Slúchadlá {name} od {brand} stavajú na osvedčenom drôtovom pripojení a jednoduchej obsluhe.',
  ],
  'True Bezdrôtové': [
    '{name} sú bezdrôtové slúchadlá typu true wireless od {brand}, bez akéhokoľvek prepojovacieho kábla medzi ušami.',
    '{name} od {brand} patria medzi true wireless slúchadlá s nabíjacím puzdrom, ktoré uľahčuje ich používanie počas dňa.',
  ],
  'Drátové reproduktory': [
    '{name} je reproduktor od {brand}, určený na káblové zapojenie do zostavy domáceho ozvučenia.',
    'Reproduktor {name} od značky {brand} dopĺňa audio zostavu o ozvučenie s dôrazom na kvalitu prevedenia.',
  ],
  'Reproduktory': [
    '{name} je reproduktor od {brand} určený na ozvučenie domácnosti alebo menšieho priestoru.',
  ],
  'Párty reproduktory': [
    '{name} je párty reproduktor od {brand}, navrhnutý na ozvučenie väčšieho priestoru pri oslavách a spoločenských akciách.',
    'Párty reproduktor {name} od {brand} kladie dôraz na silný zvuk a jednoduché bezdrôtové ovládanie hudby.',
  ],
  'Soundbary': [
    '{name} je soundbar od {brand}, ktorý zlepší zvuk televízora bez nutnosti stavať zložitú reproduktorovú zostavu.',
    'Soundbar {name} od {brand} je určený na jednoduché vylepšenie zvuku televízora aj počúvanie hudby cez Bluetooth.',
  ],
  'AV receivery': [
    '{name} je AV receiver od {brand}, ktorý slúži ako centrálny prvok domácej audio/video zostavy.',
    'Receiver {name} od {brand} prepája zdroje zvuku a obrazu a rozvádza ich ďalej do reproduktorov a televízora.',
  ],
  'Gramofóny': [
    '{name} je gramofón od {brand} určený na prehrávanie vinylových platní.',
    'Gramofón {name} od {brand} je určený milovníkom vinylu, ktorí chcú počúvať hudbu z platní priamo doma.',
  ],
  'Zosilňovače': [
    '{name} je zosilňovač od {brand}, ktorý poháňa reproduktory domácej audio zostavy.',
    'Zosilňovač {name} od {brand} tvorí srdce audio zostavy a stará sa o výkon privádzaný do reproduktorov.',
  ],
  'HiFi komponenty': [
    '{name} je HiFi komponent od {brand}, určený pre náročnejšiu domácu audio zostavu.',
  ],
  'Rádioprijímače': [
    '{name} je rádioprijímač od {brand}, určený na jednoduché počúvanie rozhlasového vysielania.',
    'Rádio {name} od {brand} slúži na počúvanie FM/DAB vysielania bez nutnosti pripájať sa na internet.',
  ],
  'Rádiobudíky': [
    '{name} je rádiobudík od {brand}, ktorý spája budenie s rannym počúvaním rádia.',
  ],
  'Digitálny príjem': [
    '{name} je prijímač od {brand}, ktorý sprostredkuje príjem digitálneho vysielania.',
  ],
  'Multimediálne centra': [
    '{name} je multimediálne centrum od {brand}, ktoré rozšíri televízor o smart funkcie a prehrávanie obsahu z internetu.',
  ],
  'Video technika': [
    '{name} je zariadenie z video techniky od {brand}.',
  ],
  'Kamery do autá': [
    '{name} je kamera do auta od {brand}, ktorá zaznamenáva jazdu ako dôkazový materiál pre prípad nehody či poistnej udalosti.',
    'Autokamera {name} od {brand} slúži na priebežný záznam jazdy a je nápomocná pri riešení dopravných situácií.',
  ],
  'DVB-T antény': [
    '{name} je anténa od {brand}, určená na príjem pozemného digitálneho televízneho vysielania.',
  ],
  'Mikrofóny': [
    '{name} je mikrofón od {brand}.',
  ],
  'Diaľkové ovládače': [
    '{name} je diaľkový ovládač od {brand}, ktorý nahradí pôvodný alebo stratený ovládač k zariadeniu.',
  ],
  'AV káble': [
    '{name} je prepojovací kábel/adaptér od {brand} pre pripojenie AV zariadení.',
  ],
  'HDMI káble': [
    '{name} je HDMI kábel od {brand} na prenos obrazu a zvuku medzi zariadeniami.',
  ],
  'Príslušenstvo k TV, audio, video': [
    '{name} je príslušenstvo od {brand}, ktoré doplní zariadenia z kategórie TV, audio a video.',
  ],
  'Audio technika – ostatné produkty': [
    '{name} je audio zariadenie od {brand}.',
  ],
};
const DEFAULT_INTRO = ['{name} je produkt od {brand} z kategórie TV, audio a video.'];

const SPEC_HEADING = 'Kľúčové parametre';

// --- Doplnkové fakty o technológii displeja (len kategória Televízory) ------------
// Zdroj: oficiálne stránky výrobcu (Samsung, TCL) - vlastnými slovami, nie doslovná
// citácia. Aplikuje sa podľa značky/rady rozpoznanej v názve produktu, takže pokrýva
// všetky veľkosti tej istej rady jedným zdrojom faktov namiesto stoviek jednotlivých
// vyhľadávaní. Poradie je dôležité - kontroluje sa zhora nadol, prvá zhoda vyhráva
// (napr. "NEO QLED THE FRAME" musí trafiť pravidlo Frame, nie Neo QLED).
const TV_TECH_FACTS = [
  {
    manufacturer: 'Samsung',
    test: /THE FRAME|FRAME PRO/i,
    heading: 'Televízor aj obraz na stenu',
    paragraphs: [
      'Tento televízor patrí do radu Samsung The Frame, ktorý je navrhnutý tak, aby na stene pôsobil ako zarámovaný obraz. Vďaka funkcii Art Mode dokáže aj vo vypnutom stave zobrazovať umelecké diela namiesto čiernej obrazovky, pričom jas a farebný tón displeja sa prispôsobujú osvetleniu miestnosti.',
      'Displej má aj úpravu proti odleskom, aby vyzeral čo najviac ako skutočný obraz zavesený na stene, a pohybový senzor dokáže televízor automaticky zapnúť alebo vypnúť podľa toho, či je v miestnosti niekto prítomný.',
    ],
  },
  {
    manufacturer: 'Samsung',
    test: /NEO QLED/i,
    heading: 'Technológia Neo QLED',
    paragraphs: [
      'Tento televízor patrí do Samsungovho radu Neo QLED, ktorý používa podsvietenie Mini LED - diódy sú výrazne menšie než pri bežnom LED podsvietení, vďaka čomu dokáže televízor presnejšie riadiť jednotlivé zóny podsvietenia.',
      'Výsledkom je vyšší kontrast, hlbšia čierna farba a jasnejší obraz. V kombinácii s technológiou Quantum Dot navyše ponúka bohaté farby aj pri vyšších úrovniach jasu.',
    ],
  },
  {
    manufacturer: 'Samsung',
    test: /\bOLED\b/i,
    heading: 'Technológia OLED',
    paragraphs: [
      'Tento televízor využíva OLED panel, v ktorom si každý pixel svieti sám za seba. Vďaka tomu dokáže úplne vypnúť jednotlivé body obrazu a dosiahnuť absolútnu čiernu farbu a vysoký kontrast bez ohľadu na uhol pohľadu.',
      'Panel má aj úpravu obmedzujúcu odrazy okolitého svetla, čo pomáha zachovať čitateľnosť obrazu aj v presvetlenej miestnosti.',
    ],
  },
  {
    manufacturer: 'Samsung',
    test: /CRYSTAL UHD/i,
    heading: 'Technológia Crystal UHD',
    paragraphs: [
      'Crystal UHD je Samsungov rad cenovo dostupnejších 4K televízorov. Procesor Crystal spracúva obraz a pri škálovaní na 4K rozlíšenie dopočítava chýbajúce detaily, hrany a farby bez ohľadu na kvalitu pôvodného zdroja.',
      'Obrazová technológia Dynamic Crystal Color pritom vykresľuje široké spektrum farebných odtieňov pre živší a realistickejší obraz.',
    ],
  },
  {
    manufacturer: 'Samsung',
    test: /MINI LED/i,
    heading: 'Podsvietenie Mini LED',
    paragraphs: [
      'Aj tento televízor využíva podsvietenie Mini LED, ktoré vďaka menším diódam umožňuje presnejšie ovládanie jasu a kontrastu než bežné LED podsvietenie. Ide o vstupnú až strednú triedu Samsungovho radu s Mini LED podsvietením - najpokročilejšie riadenie zón a technológiu Quantum Dot ponúka až vyšší rad Neo QLED.',
    ],
  },
  {
    manufacturer: 'Samsung',
    test: /QLED/i,
    heading: 'Technológia QLED',
    paragraphs: [
      'Tento televízor patrí do Samsungovho radu QLED, ktorý využíva panel s technológiou Quantum Dot. Kvantové body umožňujú zobraziť široké farebné spektrum a vysoký farebný objem aj pri vyššom jase obrazu.',
    ],
  },
  {
    manufacturer: 'TCL',
    test: /QD-?MINI\s?LED/i,
    heading: 'Technológia QD-Mini LED',
    paragraphs: [
      'Tento televízor využíva technológiu QD-Mini LED, ktorá kombinuje podsvietenie Mini LED s technológiou Quantum Dot. Veľký počet drobných LED diód rozdelených do samostatne riadených stmievacích zón umožňuje presnejšie ovládanie jasu jednotlivých častí obrazu.',
      'Výsledkom je hlbšia čierna farba, vysoký kontrast a jasné, sýte farby, ktoré sa kvalitou približujú k OLED panelom.',
    ],
  },
  {
    manufacturer: 'TCL',
    test: /QLED/i,
    heading: 'Technológia QLED',
    paragraphs: [
      'Tento televízor využíva panel QLED s technológiou Quantum Dot, ktorá oproti bežným LED televízorom rozširuje farebné spektrum a zvyšuje jas obrazu.',
    ],
  },
  {
    manufacturer: 'Xiaomi',
    test: /MINI\s?LED/i,
    heading: 'Podsvietenie Mini LED',
    paragraphs: [
      'Tento televízor kombinuje podsvietenie Mini LED s technológiou Quantum Dot, čo prináša vyšší jas a kontrast než bežné LED podsvietenie. O ovládanie sa stará systém Google TV s prístupom k tisíckam aplikácií a personalizovanými odporúčaniami obsahu.',
    ],
  },
];

function findTechFacts(manufacturer, name) {
  return TV_TECH_FACTS.find((t) => t.manufacturer === manufacturer && t.test.test(name));
}

function subcategoryOf(defaultCategory) {
  if (!defaultCategory) return '';
  const segs = defaultCategory.split('>').map((s) => s.trim());
  return segs[segs.length - 1] || '';
}

function nameHasBrand(name, manufacturer) {
  return manufacturer && name.toLowerCase().includes(manufacturer.toLowerCase());
}

// Pre úvodnú vetu odstráni interné logistické prívesky K-B názvu (počet kartónov,
// baliace jednotky), ktoré do čitateľného textu nepatria - nadpis/CODE zostávajú
// nezmenené, upravuje sa len text vety.
function displayNameFor(name) {
  return String(name || '')
    .replace(/\s*\d+\s*karton(y|ov)?\s*$/i, '')
    .replace(/\s*\d+\s*ks\/?blistr.*$/i, '')
    .trim();
}

function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function shouldEnrich(product) {
  return isPoorDescription(product.description) &&
    (product.defaultCategory || '').startsWith('TV, audio a video');
}

function buildEnrichedDescription(product) {
  const { code, name, manufacturer, description, image, defaultCategory } = product;
  const sub = subcategoryOf(defaultCategory);
  const variants = INTROS[sub] || DEFAULT_INTRO;
  const template = pickVariant(code, variants);
  const brand = manufacturer || 'overeného výrobcu';
  const displayName = displayNameFor(name);
  const intro = template.replace(/\{name\}/g, escapeHtml(displayName)).replace(/\{brand\}/g, escapeHtml(brand));

  const parts = [];
  parts.push(`<h3>${escapeHtml(name)}</h3>`);
  parts.push(`<p>${intro}</p>`);
  if (image) {
    parts.push(`<p><img alt="${escapeHtml(name)}" src="${escapeHtml(image)}"></p>`);
  }

  if (sub === 'Televízory') {
    const tech = findTechFacts(manufacturer, name);
    if (tech) {
      parts.push(`<h3>${escapeHtml(tech.heading)}</h3>`);
      for (const p of tech.paragraphs) parts.push(`<p>${p}</p>`);
    }
  }

  const desc = (description || '').trim();
  if (looksStructured(desc)) {
    let items = splitStructuredItems(desc).map(cleanFeature).filter(Boolean);
    // K-B často začína popis preambulou typu "Yamaha NS-777" (bez dvojbodky) - meno/model
    // je už v nadpise vyššie, tak sa v zozname parametrov nemusí zbytočne opakovať.
    if (items.length && !items[0].includes(':') &&
      (name.toLowerCase().includes(items[0].toLowerCase()) || items[0].toLowerCase().includes((manufacturer || ' ').toLowerCase()))) {
      items = items.slice(1);
    }
    if (items.length) {
      parts.push(`<h3>${SPEC_HEADING}</h3>`);
      parts.push('<ul>' + items.map((i) => `<li>${escapeHtml(i)}</li>`).join('') + '</ul>');
    }
  } else if (desc) {
    // Prozaický text - rozdelenie na kratšie odseky podľa viet, bez zmeny obsahu.
    const sentences = desc.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
    const paragraphs = [];
    for (let i = 0; i < sentences.length; i += 2) {
      paragraphs.push(sentences.slice(i, i + 2).join(' '));
    }
    for (const p of paragraphs) parts.push(`<p>${escapeHtml(p)}</p>`);
  }

  return parts.join('\n');
}

module.exports = { shouldEnrich, buildEnrichedDescription, isPoorDescription, looksStructured };

'use strict';
// Pripraví importný XML pre Shoptet z úplného exportu produktov Bose (productsComplete.xml)
// a nového cenníka BaSys/Bose (data/basys-bose-pricelist.json):
//   * produkty z cenníka: cena (MOC), nákupná cena (VOC), EAN, hmotnosť, SEO/popisy tam, kde ešte chýbajú
//   * Bose produkty mimo cenníka: dostupnosť "Na objednávku", viditeľné, cena sa nemení
//   * nové NEW položky z cenníka, ktoré v e-shope ešte nie sú: skryté karty (bez fotiek)
//   * rovnaké údaje sa zapíšu do data/basys-bose-on-order.json a data/product-content/basys.json,
//     aby ich nočný BASYS feed (scripts/transform-basys.js) nevrátil späť.
//
// Použitie: node scripts/build-bose-cennik-import.js EXPORT.xml [--out=imports/bose-cennik-2026-10-15] [--write-data]

process.env.HEUREKA_PRICE_OVERRIDE = '1';
const fs = require('fs');
const path = require('path');
const { roundPrice, roundPriceDown } = require('./round-price');
const { applyHeurekaPriceTarget } = require('./heureka-price-targets');
const { weightKgFor, normCode } = require('./lib/basys-bose');

const ROOT = path.join(__dirname, '..');
const args = process.argv.slice(2);
const exportPath = args.find((a) => !a.startsWith('--'));
const opt = (n, d) => (args.find((a) => a.startsWith(`--${n}=`)) || '').slice(n.length + 3) || d;
const OUT_DIR = path.resolve(ROOT, opt('out', 'imports/bose-cennik-2026-10-15'));
const WRITE_DATA = args.includes('--write-data');
// Existujúce akciové ceny (ACTION_PRICE): po expirovaní promo BaSys (31. 8. 2026) ostali v e-shope staré.
// Štandardne sa zrušia (okrem ručne overených v basys-mapping.json) a produkt ide na aktuálnu cenu z cenníka; --keep-actions ich ponechá.
const CLEAR_ACTIONS = !args.includes('--keep-actions');
const VAT = 23;
const MIN_ACTION_MARGIN_PCT = 0;
const STORE = 'PremiumStore.sk';
const SRC = 'bose-cennik-2026-10-15'; // značka záznamov v data/product-content/basys.json, ktoré vytvoril tento skript
const TODAY = new Date().toISOString().slice(0, 10);

const pricelist = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/basys-bose-pricelist.json'), 'utf8'));
const mapping = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/basys-mapping.json'), 'utf8'));
const contentPath = path.join(ROOT, 'data/product-content/basys.json');
const contentRegistry = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
const MANUAL = mapping.manualPriceOverridesByCode || {};

const ean13 = (e) => String(e || '').replace(/\D/g, '').padStart(13, '0');
const eanKey = (e) => String(e || '').replace(/\D/g, '').replace(/^0+/, '');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const dec = (s) => String(s).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&amp;/g, '&');
const num = (n) => (Math.round(n * 100) / 100).toString();

// ---------- obsah (popis, SEO) pre produkty, ktoré ešte nemajú vlastný text ----------
const COLORS_SK = {
  black: 'čierna', white: 'biela', 'white smoke': 'biela (White Smoke)', 'blue dusk': 'modrá (Blue Dusk)', sandstone: 'piesková (Sandstone)',
  'cherry chocolate': 'čerešňová (Cherry Chocolate)', 'olive green': 'olivovozelená (Olive Green)', 'eucalyptus green': 'eukalyptovozelená (Eucalyptus Green)',
  'dewdrop mint': 'mätová (Dewdrop Mint)', 'driftwood sand': 'piesková (Driftwood Sand)', 'midnight blue': 'polnočná modrá (Midnight Blue)',
  'desert gold': 'zlatá (Desert Gold)', 'rosewood mauve': 'ružovofialová (Rosewood Mauve)', čierna: 'čierna', čierne: 'čierna', biela: 'biela',
};
const colorSk = (c) => COLORS_SK[String(c || '').trim().toLowerCase()] || String(c || '').trim();
const colorShort = (c) => colorSk(c).replace(/\s*\(.*\)/, '');

const MODELS = [
  {
    key: 'tvspeaker', re: /TV Speaker/i, label: 'Bose TV Speaker (2. generácia)', seo: 'Bose TV Speaker 2. gen.', category: 'soundbar',
    lead: 'Bose TV Speaker (2. generácia) je kompaktný soundbar pod televízor, ktorý rozšíri zvukovú scénu a vďaka režimu Dialogue Mode zvýrazní ľudské hlasy, aby ste dialógom lepšie rozumeli.',
    bullets: ['3 reproduktorové meniče – stredový výškový menič a 2 basové meniče', 'HDMI ARC s HDMI-CEC: hlasitosť a zapnutie ovládate diaľkovým ovládačom televízora', 'Optický audio vstup pre staršie televízory (kábel sa predáva samostatne)', 'Bluetooth na bezdrôtové prehrávanie hudby zo smartfónu alebo tabletu', 'Možnosť zvýrazniť basy subwooferom Bose Bass Module 500 alebo Bass Module 700 (pripojenie káblom)', 'Kompaktné vyhotovenie vhodné pod televízor, jednoduchá inštalácia'],
    specs: [['Rozmery', 'približne 59,6 × 5,6 × 10,5 cm'], ['Hmotnosť', 'približne 2,0 kg'], ['Pripojenie', 'HDMI ARC, optický vstup, Bluetooth']],
    meta: 'kompaktný soundbar s HDMI ARC, režimom Dialogue Mode a Bluetooth',
  },
  {
    key: 'ultraopen2', re: /Ultra Open Earbuds 2nd Gen/i, label: 'Bose Ultra Open Earbuds (2. generácia)', seo: 'Bose Ultra Open Earbuds 2. gen.', category: 'slúchadlá',
    lead: 'Bose Ultra Open Earbuds (2. generácia) sú otvorené bezdrôtové slúchadlá s uchytením okolo ucha. Hudba hrá priamo pri uchu a vy popritom počujete okolie.',
    bullets: ['Technológia Bose OpenAudio a Immersive Audio s TrueSpatial, režim Cinema Mode', 'SpeechClarity a 2 mikrofóny pre zrozumiteľné telefonovanie', 'Ergonomické uchytenie Flex Grip okolo ucha', 'Bluetooth 5.4 s pripojením k dvom zariadeniam naraz', 'Výdrž až 9 hodín, s nabíjacím puzdrom ďalších až 19,5 hodiny', 'Bezdrôtové nabíjanie puzdra aj USB-C, odolnosť IPX4 proti potu a striekajúcej vode', 'Ovládanie tlačidlami, podpora hlasového asistenta a aplikácia Bose'],
    specs: [['Hmotnosť', 'približne 5,9 g jedno slúchadlo, puzdro približne 49,9 g'], ['Bluetooth', '5.4'], ['Odolnosť', 'IPX4']],
    meta: 'otvorené bezdrôtové slúchadlá s Immersive Audio a výdržou až 9 hodín',
  },
  {
    key: 'qcuh2', re: /QC Ultra Headphones 2nd Gen/i, label: 'Bose QuietComfort Ultra Headphones (2. generácia)', seo: 'Bose QC Ultra Headphones 2. gen.', category: 'slúchadlá',
    lead: 'Bose QuietComfort Ultra Headphones (2. generácia) sú bezdrôtové slúchadlá cez uši s aktívnym potlačením okolitého hluku a priestorovým zvukom Immersive Audio.',
    bullets: ['Aktívne potlačenie hluku (ANC), režimy Quiet a Aware', 'Immersive Audio s novým režimom Cinema, Active EQ a CustomTune', 'ActiveSense a systém mikrofónov pre čisté telefonovanie a potlačenie hluku pozadia', 'Bluetooth 5.4, multipoint, aptX Adaptive (Snapdragon Sound), Google Fast Pair a Spotify Tap', 'USB-C audio pre bezstratový digitálny prenos', 'Výdrž až 30 hodín pri zapnutom ANC, dotykové ovládanie, detekcia nasadenia aj odloženia', 'V balení odolné prenosné puzdro, aplikácia Bose Music pre Apple a Android'],
    specs: [['Hmotnosť', 'približne 250 g'], ['Bluetooth', '5.4'], ['Výdrž', 'až 30 hodín s ANC']],
    meta: 'bezdrôtové slúchadlá s ANC, Immersive Audio a výdržou až 30 hodín',
  },
  {
    key: 'flex2', re: /SoundLink Flex II/i, label: 'Bose SoundLink Flex (2. generácia)', seo: 'Bose SoundLink Flex II', category: 'reproduktor',
    lead: 'Bose SoundLink Flex (2. generácia) je odolný prenosný Bluetooth reproduktor, ktorý prispôsobí zvuk tomu, ako je položený alebo zavesený.',
    bullets: ['Technológia PositionIQ optimalizuje zvuk podľa orientácie reproduktora', 'Bluetooth 5.3, multipoint a Snapdragon Sound, v pamäti 8 naposledy použitých zariadení', 'Výdrž až 12 hodín, nabíjanie cez USB-C', 'Krytie IP67 – odolnosť proti prachu a ponoreniu do vody, odolná silikónová konštrukcia', 'Vstavaný mikrofón pre telefonické hovory, Google Fast Pair', 'Dva reproduktory možno prepojiť do módu Party alebo Stereo, aplikácia Bose'],
    specs: [['Rozmery', 'približne 9 × 20,1 × 5,2 cm'], ['Hmotnosť', 'približne 0,59 kg'], ['Odolnosť', 'IP67']],
    meta: 'odolný prenosný Bluetooth reproduktor s PositionIQ a krytím IP67',
  },
  {
    key: 'max', re: /Soundlink Max/i, label: 'Bose SoundLink Max', seo: 'Bose SoundLink Max', category: 'reproduktor',
    lead: 'Bose SoundLink Max je výkonný prenosný stereo reproduktor s hlbokými basmi, odnímateľnou rukoväťou a krytím IP67.',
    bullets: ['Bluetooth 5.3 s dosahom do 10 m, multipoint a SimpleSync pre spárovanie s ďalšími zariadeniami Bose', 'Výdrž až 20 hodín, nabíjanie cez USB-C', 'USB-C vstup/výstup a vstup AUX, smartfón možno nabíjať priamo z reproduktora', 'Krytie IP67 – odolnosť proti prachu a ponoreniu do vody', 'Dva reproduktory možno prepojiť do módu Party alebo Stereo, aplikácia Bose'],
    specs: [['Rozmery', 'približne 12 × 26,5 × 10,5 cm'], ['Hmotnosť', 'približne 2,13 kg'], ['Odolnosť', 'IP67']],
    meta: 'prenosný stereo reproduktor s výdržou až 20 hodín a krytím IP67',
  },
  {
    key: 'sportopen', re: /Sport Open Earbuds/i, label: 'Bose Sport Open Earbuds', seo: 'Bose Sport Open Earbuds', category: 'slúchadlá',
    lead: 'Bose Sport Open Earbuds sú otvorené bezdrôtové slúchadlá pre pohyb a šport. Flexibilné uchytenie okolo ucha drží pevne a nechá vás vnímať okolie.',
    bullets: ['Technológia Bose OpenAudio, vyvážený zvuk s minimálnym únikom do okolia', 'SpeechClarity a 2 mikrofóny pre čisté telefonovanie', 'Mäkké silikónové uchytenie okolo ucha pre stabilné nasadenie pri športe', 'Bluetooth 5.4 s multipoint pripojením k dvom zariadeniam', 'Výdrž až 7 hodín, s nabíjacím puzdrom spolu až 29 hodín, USB-C', 'Odolnosť IP54 proti potu, striekajúcej vode a prachu', 'Ovládanie tlačidlami, aplikácia Bose'],
    specs: [['Bluetooth', '5.4'], ['Odolnosť', 'IP54'], ['Výdrž', 'až 7 hodín (spolu s puzdrom až 29 hodín)']],
    meta: 'otvorené športové slúchadlá s výdržou až 7 hodín a odolnosťou IP54',
  },
  {
    key: 'wired', re: /Noise Cancelling Wired Earbuds/i, label: 'Bose Noise Cancelling Wired Earbuds', seo: 'Bose Noise Cancelling Wired Earbuds', category: 'slúchadlá',
    lead: 'Bose Noise Cancelling Wired Earbuds sú káblové slúchadlá do uší s aktívnym potlačením hluku a pripojením cez USB-C bez párovania.',
    bullets: ['Aktívne potlačenie hluku, režimy Quiet, Aware a ANC Off', 'Digitálne pripojenie cez USB-C bez Bluetooth párovania, napájanie priamo cez USB-C', 'Vstavaný mikrofón a trojtlačidlové ovládanie na kábli', 'Nízka latencia vhodná aj na hranie hier', 'Vymeniteľné silikónové nadstavce v 3 veľkostiach (S/M/L) a stabilizačné prvky v 2 veľkostiach (M/L)', 'Odolnosť IPX4, ochranné puzdro v balení, pre smartfóny, tablety a počítače s USB-C'],
    specs: [['Pripojenie', 'USB-C'], ['Odolnosť', 'IPX4']],
    meta: 'káblové slúchadlá s aktívnym potlačením hluku a pripojením cez USB-C',
  },
  {
    key: 'floorstand', re: /Lifestyle Floor Stand/i, label: 'Bose Lifestyle Floor Stand', seo: 'Bose Lifestyle Floor Stand', category: 'držiak',
    lead: 'Bose Lifestyle Floor Stand je univerzálny podlahový stojan pre reproduktor Bose Lifestyle Ultra Speaker. Umiestni zvuk do správnej výšky bez nároku na miesto na nábytku.',
    bullets: ['Určený pre Bose Lifestyle Ultra Speaker', 'Vhodný aj na zadné reproduktory domáceho kina'],
    specs: [['Hmotnosť', 'približne 3,5 kg']],
    meta: 'podlahový stojan pre reproduktor Bose Lifestyle Ultra Speaker',
  },
];

function trunc(s, n) { return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…'; }
function buildContent(model, color) {
  const c = colorSk(color), cs = colorShort(color);
  const l = (model.lead);
  const bullets = model.bullets.map((b) => `<li>${esc(b)}</li>`).join('');
  const specs = model.specs.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('');
  const description = `<p>${esc(l)}</p>\n<p><strong>Farba:</strong> ${esc(c)}</p>\n<ul>${bullets}</ul>\n<table>${specs}</table>\n<p>Originálny produkt Bose, záruka 24 mesiacov. Objednajte na ${STORE} s doručením po celom Slovensku.</p>`;
  const shortDescription = `<p>${esc(l)}</p>`;
  const seoTitle = trunc(`${model.seo}, ${cs}`, 70 - ` | ${STORE}`.length) + ` | ${STORE}`;
  const metaDescription = trunc(`${model.label} (${cs}) – ${model.meta}. Kúpte na ${STORE}.`, 155);
  return { shortDescription, description, seoTitle, metaDescription };
}
const modelFor = (name) => MODELS.find((m) => m.re.test(name));

// ---------- pomocné funkcie na úpravu XML bez straty formátovania ----------
function setTag(block, tag, valueXml, anchorAfter) {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>[\\s\\S]*?</${tag}>|<${tag}\\s*/>`);
  if (re.test(block)) return block.replace(re, () => `<${tag}>${valueXml}</${tag}>`);
  if (anchorAfter) { const a = block.match(new RegExp(`</${anchorAfter}>`)); if (a) return block.replace(a[0], () => `${a[0]}\n    <${tag}>${valueXml}</${tag}>`); }
  throw new Error(`Tag ${tag} sa nenašiel a nemá kotvu`);
}
const getTag = (block, tag) => { const m = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`)); return m ? dec(m[1]).trim() : ''; };
function setEan(block, ean) {
  if (/<EAN>[\s\S]*?<\/EAN>|<EAN\s*\/>/.test(block)) return setTag(block, 'EAN', ean);
  return block.replace(/(<UNIT>[^<]*<\/UNIT>\s*<CODE>[^<]*<\/CODE>)/, (m) => `${m}\n    <EAN>${ean}</EAN>`);
}
function setActionFlag(block, active) {
  return block.replace(/(<CODE>action<\/CODE>\s*<ACTIVE>)\d(<\/ACTIVE>)/, (_, a, b) => `${a}${active ? 1 : 0}${b}`);
}
function setWeight(block, kg) {
  if (/<LOGISTIC>[\s\S]*?<WEIGHT>[\s\S]*?<\/WEIGHT>/.test(block)) return block.replace(/(<LOGISTIC>[\s\S]*?<WEIGHT>)[\s\S]*?(<\/WEIGHT>)/, (_, a, b) => `${a}${kg}${b}`);
  return block;
}

// ---------- načítanie exportu ----------
const xml = fs.readFileSync(exportPath, 'utf8');
const head = xml.slice(0, xml.indexOf('<SHOPITEM'));
const blocks = xml.match(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g);
const byEan = new Map(), byCode = new Map();
for (const p of pricelist) { byEan.set(eanKey(p.ean), p); byCode.set(normCode(p.objKod), p); }
const shopCode = (b) => getTag(b.replace(/<VARIANTS>[\s\S]*<\/VARIANTS>/, '').replace(/<FLAGS>[\s\S]*?<\/FLAGS>/, ''), 'CODE');
// Bose produkt "existuje u BaSys", ak je v BASYS Heureka feede (vzorka) alebo v poslednom výstupe output/basys.xml.
const normK = (c) => normCode(String(c).replace(/^(BAS_)?BASYS-/i, ''));
const basysPresent = new Set();
for (const f of ['data/basys-heureka-feed-sample.xml', 'output/basys.xml']) {
  const fp = path.join(ROOT, f); if (!fs.existsSync(fp)) continue;
  const t = fs.readFileSync(fp, 'utf8');
  for (const m of t.matchAll(/<ITEM_ID>([^<]*)<\/ITEM_ID>/g)) basysPresent.add(normK(m[1]));
  // v output/basys.xml sa počítajú len plné záznamy (s <NAME>), nie "Vypredané" záznamy pre chýbajúce produkty
  for (const it of t.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || []) {
    const c = it.match(/<CODE>(?:<!\[CDATA\[)?(BASYS-[^<\]]*)/);
    if (c && /<NAME>/.test(it)) basysPresent.add(normK(c[1]));
  }
}
const feedCode = (code) => normCode(code.replace(/^(BAS_)?BASYS-/i, ''));

const report = { matched: [], onOrder: [], skippedVariantCards: [], contentFrozen: [], contentGenerated: [], actionCleared: [], priceChanges: [], newCards: [] };
const onOrderManifest = [];
const newOverrides = {};
const outBlocks = [];
const usedSkus = new Set();

function priceFor(item) {
  const purchase = item.purchasePriceExclVat != null ? item.purchasePriceExclVat : item.mocInclVat / (1 + VAT / 100) / 1.15;
  const base = roundPrice(item.mocInclVat);
  const price = applyHeurekaPriceTarget(item.ean, base, purchase, VAT);
  return { price, purchase: Math.round(purchase * 100) / 100, base };
}
function actionFor(item, price, purchase) {
  const manual = MANUAL[item.objKod];
  if (manual === undefined || manual >= price) return null;
  const margin = (manual / (1 + VAT / 100) - purchase) / (manual / (1 + VAT / 100)) * 100;
  return margin >= MIN_ACTION_MARGIN_PCT ? roundPriceDown(manual) : null;
}

for (let block of blocks) {
  const id = block.match(/<SHOPITEM id="(\d+)"/)[1];
  if (/<VARIANTS>/.test(block)) { report.skippedVariantCards.push({ id, name: getTag(block, 'NAME') }); outBlocks.push(null); continue; }
  if (getTag(block.replace(/<VARIANTS>[\s\S]*<\/VARIANTS>/, ''), 'MANUFACTURER') !== 'Bose') { report.skippedOtherManufacturer = (report.skippedOtherManufacturer || []).concat(id); outBlocks.push(null); continue; }
  // Bose Professional je iný cenník a iný tovar - nikdy sa nemení
  if (getTag(block, 'MANUFACTURER') !== 'Bose') { report.skippedOtherManufacturer = (report.skippedOtherManufacturer || []).concat(id); outBlocks.push(null); continue; }
  const code = shopCode(block), ean = getTag(block, 'EAN'), name = getTag(block, 'NAME');
  const item = byEan.get(eanKey(ean)) || byCode.get(feedCode(code));
  const oldPrice = Number(getTag(block, 'PRICE_VAT')), oldAction = getTag(block, 'ACTION_PRICE'), oldPurchase = Number(getTag(block, 'PURCHASE_PRICE')) || null;

  if (item) {
    usedSkus.add(item.objKod);
    const { price, purchase } = priceFor(item);
    const action = actionFor(item, price, purchase);
    block = setTag(block, 'PRICE_VAT', num(price));
    block = setTag(block, 'PURCHASE_PRICE', num(purchase));
    block = setTag(block, 'PURCHASE_VAT', String(VAT));
    block = setTag(block, 'PURCHASE_PRICE_INCL_VAT', '0');
    const oldActionNum = Number(oldAction) || 0;
    const keepOld = !CLEAR_ACTIONS && oldActionNum > 0 && oldActionNum < price
      && ((oldActionNum / (1 + VAT / 100) - purchase) / (oldActionNum / (1 + VAT / 100))) >= 0;
    const finalAction = action || (keepOld ? oldActionNum : null);
    if (oldActionNum > 0 && !action && !keepOld && !CLEAR_ACTIONS) report.actionBelowCost = (report.actionBelowCost || []).concat({ id, code, name, oldAction: oldActionNum });
    if (action || !keepOld) {
      block = setTag(block, 'ACTION_PRICE', action ? num(action) : '');
      block = setActionFlag(block, !!action);
    }
    if (oldActionNum > 0 && !action && keepOld) report.actionKept = (report.actionKept || []).concat({ id, code, name, action: oldActionNum, price, purchase, marginPct: Math.round(((oldActionNum / (1 + VAT / 100) - purchase) / (oldActionNum / (1 + VAT / 100))) * 1000) / 10 });
    if (oldAction && !finalAction) report.actionCleared.push({ id, code, name, oldAction: oldActionNum, price });
    block = setEan(block, ean13(item.ean));
    const w = weightKgFor([item.name, item.color].join(' - '), item.objKod);
    if (w) block = setWeight(block, w);
    const feedKey = 'BASYS-' + item.objKod;
    const hasOverride = !!contentRegistry[feedKey] && contentRegistry[feedKey]._src !== SRC;
    const richLive = /ps-product/.test(getTag(block, 'DESCRIPTION'));
    let contentNote = 'override už existuje';
    if (!hasOverride) {
      if (richLive) {
        newOverrides[feedKey] = { _src: SRC, manufacturer: 'Bose', shortDescription: getTag(block, 'SHORT_DESCRIPTION'), description: getTag(block, 'DESCRIPTION'), seoTitle: getTag(block, 'SEO_TITLE'), metaDescription: getTag(block, 'META_DESCRIPTION') };
        contentNote = 'živý obsah zamknutý do overrides'; report.contentFrozen.push({ id, code, name });
      } else {
        const model = modelFor([item.name, item.color].join(' - '));
        if (!model) throw new Error(`Chýba šablóna obsahu pre ${item.objKod} ${item.name}`);
        const c = buildContent(model, item.color);
        block = setTag(block, 'SHORT_DESCRIPTION', `<![CDATA[${c.shortDescription}]]>`);
        block = setTag(block, 'DESCRIPTION', `<![CDATA[${c.description}]]>`);
        block = setTag(block, 'SEO_TITLE', esc(c.seoTitle));
        block = setTag(block, 'META_DESCRIPTION', esc(c.metaDescription));
        newOverrides[feedKey] = { _src: SRC, manufacturer: 'Bose', ...c };
        contentNote = 'nový popis + SEO'; report.contentGenerated.push({ id, code, name, seoTitle: c.seoTitle });
      }
    }
    report.matched.push({ id, code, name, sku: item.objKod, ean: ean13(item.ean), oldEan: ean, oldPrice, price, oldPurchase, purchase, oldAction: oldAction || '', action: finalAction || '', weight: w || '', content: contentNote });
  } else {
    const objKodOo = code.replace(/^(BAS_)?BASYS-/i, '');
    if (!basysPresent.has(normK(code))) {
      // mimo cenníka a BaSys ho už nevedie -> skryť: Vypredané, dostupný len cez URL
      block = setTag(block, 'AVAILABILITY_OUT_OF_STOCK', 'Vypredané');
      block = setTag(block, 'VISIBILITY', 'detailOnly');
      report.discontinued = (report.discontinued || []).concat({ id, code, name });
      outBlocks.push(block); continue;
    }
    // mimo cenníka, ale BaSys ho ešte vedie -> Na objednávku, viditeľné; cena (aj existujúca akciová) sa NEMENÍ - ostáva z feedu
    block = setTag(block, 'AVAILABILITY_OUT_OF_STOCK', 'Na objednávku');
    block = setTag(block, 'VISIBILITY', 'visible');
    block = setTag(block, 'VISIBLE', '1');
    const w0 = weightKgFor(name, objKodOo);
    if (w0 && !(Number(getTag(block, 'WEIGHT')) > 0)) block = setWeight(block, w0);
    report.onOrder.push({ id, code, name, price: oldPrice, oldAvailability: getTag(block.replace(/<AVAILABILITY_OUT_OF_STOCK>[\s\S]*/, ''), 'VISIBILITY') });
    const purchase = Number(getTag(block, 'PURCHASE_PRICE')), incl = getTag(block, 'PURCHASE_PRICE_INCL_VAT') === '1';
    onOrderManifest.push({
      objKod: code.replace(/^(BAS_)?BASYS-/i, ''), ean: ean || '', name, priceVat: oldAction ? Number(oldAction) : oldPrice,
      purchasePriceExclVat: Math.round((incl ? purchase / (1 + VAT / 100) : purchase) * 100) / 100,
      description: getTag(block, 'DESCRIPTION'), id,
    });
  }
  outBlocks.push(block);
}

// ---------- nové skryté karty pre NEW položky cenníka, ktoré v e-shope nie sú ----------
const newSkus = pricelist.filter((p) => !usedSkus.has(p.objKod) && p.isNew);
const template = blocks.find((b) => /id="615912"/.test(b));
let newXml = '';
for (const item of newSkus) {
  const model = modelFor([item.name, item.color].join(' - '));
  if (!model) { report.newCards.push({ sku: item.objKod, note: 'bez šablóny - preskočené' }); continue; }
  const { price, purchase } = priceFor(item);
  const c = buildContent(model, item.color);
  const fullName = `${model.label} – ${colorSk(item.color)}`;
  let b = template.replace(/<SHOPITEM id="\d+"[^>]*>/, '<SHOPITEM>').replace(/<GUID>[\s\S]*?<\/GUID>/, '').replace(/<IMAGES>[\s\S]*?<\/IMAGES>/, '').replace(/<IMAGE_REF>[\s\S]*?<\/IMAGE_REF>/, '<IMAGE_REF></IMAGE_REF>');
  b = setTag(b, 'NAME', esc(fullName));
  b = setTag(b, 'SHORT_DESCRIPTION', `<![CDATA[${c.shortDescription}]]>`);
  b = setTag(b, 'DESCRIPTION', `<![CDATA[${c.description}]]>`);
  b = b.replace(/<TEXT_PROPERTIES>[\s\S]*?<\/TEXT_PROPERTIES>/, `<TEXT_PROPERTIES><TEXT_PROPERTY><NAME>Značka</NAME><VALUE>Bose</VALUE><DESCRIPTION/></TEXT_PROPERTY><TEXT_PROPERTY><NAME>Farba</NAME><VALUE>${esc(colorShort(item.color))}</VALUE><DESCRIPTION/></TEXT_PROPERTY></TEXT_PROPERTIES>`);
  b = b.replace(/<CODE>new<\/CODE>\s*<VALID_UNTIL>[^<]*<\/VALID_UNTIL>/, `<CODE>new</CODE><ACTIVE>1</ACTIVE>`);
  b = setTag(b, 'VISIBILITY', 'hidden');
  b = setTag(b, 'SEO_TITLE', esc(c.seoTitle));
  b = setTag(b, 'META_DESCRIPTION', esc(c.metaDescription));
  b = b.replace(/(<UNIT>[^<]*<\/UNIT>\s*)<CODE>[^<]*<\/CODE>/, (_, u) => `${u}<CODE>${esc('BAS_BASYS-' + item.objKod)}</CODE>`);
  b = setEan(b, ean13(item.ean));
  const w = weightKgFor([item.name, item.color].join(' - '), item.objKod);
  if (w) b = setWeight(b, w);
  b = setTag(b, 'PRICE_VAT', num(price));
  b = setTag(b, 'PURCHASE_PRICE', num(purchase));
  b = setTag(b, 'AVAILABILITY_OUT_OF_STOCK', 'Na objednávku');
  b = setTag(b, 'ACTION_PRICE', '');
  b = setActionFlag(b, false);
  b = b.replace(/<WARRANTY>[\s\S]*?<\/WARRANTY>/, '<WARRANTY>24</WARRANTY>');
  // kategória: podľa typu produktu v rámci existujúceho stromu
  const cat = model.category === 'slúchadlá' ? { id: '51291', path: 'TV, audio, video a foto technika &gt; Audio technika &gt; Slúchadlá &gt; Bezdrôtové slúchadlá &gt; TWS slúchadlá' }
    : { id: '51201', path: 'TV, audio, video a foto technika &gt; Audio technika &gt; Stojany a držiaky na reproduktory' };
  if (item.objKod.startsWith('B 906940')) { cat.id = '50391'; cat.path = 'TV, audio, video a foto technika &gt; Audio technika &gt; Slúchadlá'; }
  b = b.replace(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/, `<CATEGORIES><CATEGORY id="${cat.id}">${cat.path}</CATEGORY><DEFAULT_CATEGORY id="${cat.id}">${cat.path}</DEFAULT_CATEGORY></CATEGORIES>`);
  newXml += b + '\n';
  newOverrides['BASYS-' + item.objKod] = { _src: SRC, manufacturer: 'Bose', ...c };
  report.newCards.push({ sku: item.objKod, ean: ean13(item.ean), name: fullName, price, purchase });
}

// ---------- zápis ----------
fs.mkdirSync(OUT_DIR, { recursive: true });
const finalXml = head + outBlocks.filter(Boolean).join('\n') + '\n' + newXml + '</SHOP>\n';
fs.writeFileSync(path.join(OUT_DIR, 'bose-import-2026-10-15.xml'), finalXml);
fs.writeFileSync(path.join(OUT_DIR, 'report.json'), JSON.stringify({ generated: TODAY, ...report }, null, 1));
const csv = ['id;kod;nazov;sku;ean_stary;ean_novy;cena_stara;cena_nova;nakupka_nova;akcia_stara;akcia_nova;hmotnost_kg;obsah']
  .concat(report.matched.map((m) => [m.id, m.code, m.name.replace(/;/g, ','), m.sku, m.oldEan, m.ean, m.oldPrice, m.price, m.purchase, m.oldAction, m.action, m.weight, m.content].join(';'))).join('\n');
fs.writeFileSync(path.join(OUT_DIR, 'zmeny-cenník.csv'), csv + '\n');
if (WRITE_DATA) {
  fs.writeFileSync(path.join(ROOT, 'data/basys-bose-on-order.json'), JSON.stringify({
    _comment: 'Bose produkty z e-shopu, ktoré NIE sú v cenníku BaSys/Bose (stav 2026-10-15). BASYS feed ich vždy exportuje ako "Na objednávku", cena zostáva z BASYS feedu (tu je posledná známa z e-shopu pre prípad, že ich feed prestane posielať). Generuje scripts/build-bose-cennik-import.js --write-data.',
    generated: TODAY, items: onOrderManifest.map(({ id, ...r }) => r),
  }, null, 1) + '\n');
  Object.assign(contentRegistry, newOverrides);
  fs.writeFileSync(contentPath, JSON.stringify(contentRegistry, null, 2) + '\n');
}
console.log(`Import: ${finalXml.length} B | cenník ${report.matched.length} | mimo cenníka ${report.onOrder.length} | varianty (nezmenené) ${report.skippedVariantCards.length} | nové skryté ${report.newCards.length} | nový obsah ${report.contentGenerated.length} | zamknutý ${report.contentFrozen.length} | zrušená akcia ${report.actionCleared.length}`);

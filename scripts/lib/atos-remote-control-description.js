// ATOS posiela popisy nahradnych "ALIEN" dialkovych ovladacov po cesky, ako opakujucu sa sablonu
// (~850 produktov v kategorii Diaľkové ovládače, aspon v dvoch mierne odlisnych zneniach). Na
// ziadost pouzivatela: cely text sa PREKLADA do slovenciny (nie prepisuje na novo) az po vetu o
// doprogramovani ("Doprogramování ovladače o další zařízení je zpoplatněno částkou 50 Kč.") - tu
// vetu vsade zmazat. Odsek o bateriach (dlha reklama na GP ULTRA ALKALINE) sa skrati na jednu
// vetu s odkazom na znacku. Zaverecny generický blok "Univerzální ovladač ALIEN 4v1" (vzdy
// rovnaky, nesuvisi s konkretnym produktom) sa cely vymaze.
//
// Ine formaty popisu v tejto kategorii (WIWA, TechniSat vysielace a pod.) tuto sablonu nemaju
// (chyba fraza "kompatibiln..." + "ALIEN") - tie ostavaju bez zmeny.

const he = require('he');

const TEMPLATE_SIGNATURE_RE = /kompatibiln/i;

function isAtosRemoteTemplate(descriptionHtml) {
  return Boolean(descriptionHtml) && TEMPLATE_SIGNATURE_RE.test(descriptionHtml) && /ALIEN/.test(descriptionHtml);
}

// Slovo "ovladač"/"ovládač" sa v zdroji lisi len diakritikou na "a" (č ostava vzdy rovnake) -
// pouzite v kazdej fraze nizsie namiesto doslovneho retazca.
const OVL = 'ovl[aá]dač';

// Rod/pad zariadenia v hlavicke "Ovladač je kompatibilní s těmito modely {X}:" (genitiv mn. c.).
const DEVICE_GENPL_CZ_TO_SK = [
  [/DVB-T2\s+p[řr][ií]j[íi]mač[uů]/i, 'DVB-T2 prijímačov'],
  [/DVB-T\s+p[řr][ií]j[íi]mač[uů]/i, 'DVB-T prijímačov'],
  [/satelitn[ií]ch\s+p[řr][ií]j[íi]mač[uů]/i, 'satelitných prijímačov'],
  [/Blu-?ray\s+př[ei]hr[aá]vač[uů]/i, 'Blu-ray prehrávačov'],
  [/televizor[uů]/i, 'televízorov'],
  [/p[řr][ií]j[íi]mač[uů]/i, 'prijímačov'],
];

// Bezne cesky nazvy ciela naprogramovania spomenute vo vete "... jiného vzhledu pro {X}." -
// prekladaju sa samostatne (nezavisle na tom, aka znacka/model nasleduje).
const DEVICE_NOUN_TRANSLATIONS = [
  [/DVB-T2\s+p[řr][ií]j[íi]mač/gi, 'DVB-T2 prijímač'],
  [/DVB-T\s+p[řr][ií]j[íi]mač/gi, 'DVB-T prijímač'],
  [/[Ss]atelitn[ií]\s+p[řr][ií]j[íi]mač[eě]?/gi, (m) => (m[0] === 'S' ? 'Satelitný prijímač' : 'satelitný prijímač')],
  [/p[řr][ií]j[íi]mač[eě]?/gi, 'prijímač'],
  [/televizor[yů]/gi, 'televízory'],
  [/televizor/gi, 'televízor'],
];

// Poradove zavisle frazove preklady - aplikuju sa v tomto poradi na text uz normalizovany
// (viacnasobne biele znaky zlucene na jeden - HTML ich aj tak renderuje rovnako, takze to nič
// vizuálne nemení, len robí zhodu spoľahlivejšou naprieč mierne odlišne formátovanými popismi) a
// zbaveny <strong>/<ins>/<b>/<span>/<h1-4> tagov (tie v sablone len tucnia/nadpisuju opakujuci sa
// reklamny text, nie nieco produktovo specificke - bez nich je zhoda fraz spolahlivejsia, lebo
// casto prerusuju vetu presne v strede). Kazda polozka pokryva 1-2 zname znenia tej istej vety -
// ATOS pouziva aspon dve mierne odlisne sablony (satelitne prijimace vs. TV ovladace).
const PHRASE_TRANSLATIONS = [
  [/Dálkový ovladač /g, 'Diaľkový ovládač '],
  [/Kvalitní náhradní dálkové ovládání jiného vzhledu pro /gi, 'Kvalitné náhradné diaľkové ovládanie v inom vzhľade pre '],
  [/Kvalitní náhradní dálkový ovladač,? většina funkcí (?:stejných jako u originálního ovládání|stejná jako original)\.? ?Dlouhá životnost,? kvalitní provedení\.? ?Ihned k použití!/gi,
    'Náhradný diaľkový ovládač, väčšina funkcií rovnaká ako pri originálnom ovládaní. Dlhá životnosť, kvalitné vyhotovenie. Ihneď pripravený na použitie!'],
  [new RegExp(`Pod značkou ALIEN získáte kvalitní a levnou náhradu originálního ${OVL}e, kter[yý] již (?:často )?není(?: často)? k dispozici nebo je několikanásobně dražší\\. ${OVL} ALIEN svou kvalitou a mechanickým zpracováním často předčí originální ${OVL}e a zaručuje (?:vám )?tak dlouhou životnost\\.`, 'gi'),
    'Pod značkou ALIEN získate kvalitnú a lacnú náhradu originálneho ovládača, ktorý už často nie je k dispozícii alebo je niekoľkonásobne drahší. Ovládač ALIEN svojou kvalitou a mechanickým spracovaním často prevyšuje originálne ovládače a zaručuje tak dlhú životnosť.'],
  [new RegExp(`Náhrada za originální ${OVL}e? `, 'gi'), 'Náhrada za originálny ovládač '],
  [new RegExp(`${OVL} je kompatibilní s těmito modely ([^:<]{0,40}):`, 'gi'), (full, device) => {
    let sk = device.trim();
    for (const [re, repl] of DEVICE_GENPL_CZ_TO_SK) { if (re.test(sk)) { sk = repl; break; } }
    return `Ovládač je kompatibilný s týmito modelmi ${sk}:`;
  }],
  [new RegExp(`Návod k použití dálkového ${OVL}e ALIEN`, 'gi'), 'Návod na použitie diaľkového ovládača ALIEN'],
  [new RegExp(`${OVL} je naprogramován na vašem zařízení\\. ALIEN nahrazuje všechny funkce originálního ${OVL}e\\.`, 'gi'),
    'Ovládač je naprogramovaný na vašom zariadení. ALIEN nahrádza všetky funkcie originálneho ovládača.'],
  [new RegExp(`${OVL} obdržíte naprogramovaný na vaše zařízení\\. ALIEN nahrazuje všechny funkce originálního ${OVL}e\\.`, 'gi'),
    'Ovládač je naprogramovaný na vašom zariadení. ALIEN nahrádza všetky funkcie originálneho ovládača.'],
  [/Po vložení baterií nejprve stiskněte tlačítko pro volbu typu zařízení \(TV\s*\/\s*VCR\s*\/?\s*DVD\s*\/\s*SAT\s*\/\s*AUX\)/gi,
    'Po vložení batérií najprv stlačte tlačidlo pre voľbu typu zariadenia (TV / VCR / DVD / SAT / AUX)'],
  [new RegExp(`a následně můžete ovládat (?:vaše )?zařízení\\. Spolu s ${OVL}em (?:získáte|obdržíte) jednoduchý popis s (?:rozložením|rozpisem) tlačítek vzhledem k (?:původnímu|originálnímu) ${OVL}i\\.`, 'gi'),
    'a následne môžete ovládať zariadenie. Spolu s ovládačom získate jednoduchý popis s rozložením tlačidiel vzhľadom na pôvodný ovládač.'],
  [new RegExp(`Ovládejte až 4 zařízení jedním ${OVL}em`, 'gi'), 'Ovládajte až 4 zariadenia jedným ovládačom'],
  [new RegExp(`${OVL} ALIEN 4v1 lze naprogramovat až na 4 přístroje\\. Znamená to, že můžete jedním ${OVL}em ovládat (?:současně|zároveň) satelitní\\s*přijímač, televizor nebo třeba DVD\\.`, 'gi'),
    'Ovládač ALIEN 4v1 je možné naprogramovať až na 4 zariadenia. Znamená to, že môžete jedným ovládačom ovládať súčasne satelitný prijímač, televízor alebo napríklad DVD.'],
  [new RegExp(`Chcete-li objednat ${OVL} naprogramovat ještě další zařízení, napište nám do objednávky do poznámky přesný typ zařízení dálkového ovládání vašeho zařízení\\.`, 'gi'),
    'Ak chcete objednaný ovládač naprogramovať aj na ďalšie zariadenie, napíšte nám do poznámky k objednávke presný typ vášho zariadenia.'],
  [new RegExp(`Chcete-li do objednaného ${OVL}e naprogramovat ještě další přístroje, tak nám v objednávce do poznámky napište přesný typ dálkového ${OVL}e vašeho zařízení\\.`, 'gi'),
    'Ak chcete objednaný ovládač naprogramovať aj na ďalšie zariadenie, napíšte nám do poznámky k objednávke presný typ vášho zariadenia.'],
];

const GP_LINK = '<p>Odporúčame batérie značky <a href="https://www.premiumstore.sk/znacka/gp/">GP Ultra Alkaline</a>.</p>';

function translateAtosRemoteDescription(descriptionHtml) {
  if (!isAtosRemoteTemplate(descriptionHtml)) return descriptionHtml;

  let d = he.decode(descriptionHtml)
    .replace(/<\/?(?:strong|ins|b|span[^>]*|h[1-4])>/gi, '')
    .replace(/\s+/g, ' ');

  // 1. Vetu o doprogramovani (50 Kč) vsade zmazat.
  d = d.replace(/\s*Doprogramování ovlad[aá]če o další zařízení je zpoplatněno částkou 50 Kč\.?\s*(?:<br\s*\/?>\s*)*/gi, ' ');

  // 2. Odsek o bateriach (+ nasledujuci univerzalny blok, ak je v tom istom <div>) skratit na
  // jednu vetu s odkazom - najde sa zaciatok frázy a lenivo prebehne az tesne pred najblizsie
  // zatvorenie <\/div> (battery + univerzalny blok su v jednej zo znamych sablon v jednom <div>).
  d = d.replace(/Jaké baterie jsou vhodné do dálkového ovlad[aá]če\?[\s\S]*?(?=<\/div>)/i, GP_LINK);
  // Zaloha, ak univerzalny blok chyba/je mimo <div> - zastavi sa hned po obrazku baterie.
  d = d.replace(/Jaké baterie jsou vhodné do dálkového ovlad[aá]če\?[\s\S]*?gp_ultra\.jpg[^>]*\/?>\s*<\/p>/i, GP_LINK);

  // 3. Zaverecny generický blok "Univerzální ovladač ALIEN 4v1" - ak este ostal (napr. bez
  // predchadzajuceho odseku o bateriach, alebo v odlisnej HTML strukture), zmazat lenivym
  // zhodovanim az po posledny vyskyt generickej fotky "alien2.jpg" (znama vo vacsine variantov).
  d = d.replace(/Univerzáln[ií] ovlad[aá]č ALIEN 4v1[\s\S]*?alien2\.jpg[^>]*>\s*(?:<\/p>)?/gi, '');
  // Zaloha pre variant bez zavereenej fotky vobec - zastavi sa pred najblizsim zatvorenim <div>.
  d = d.replace(/Univerzáln[ií] ovlad[aá]č ALIEN 4v1[\s\S]*?(?=<\/div>)/gi, '');

  // 4. Preklad zvysneho pevneho textu (fixne frazy) a bezneho nazvu zariadenia v tvare "pro X.".
  for (const [re, repl] of PHRASE_TRANSLATIONS) d = d.replace(re, repl);
  const proMatch = d.match(/diaľkové ovládanie v inom vzhľade pre ([^.<]{2,60})\./i);
  if (proMatch) {
    let device = proMatch[1];
    for (const [re, repl] of DEVICE_NOUN_TRANSLATIONS) device = device.replace(re, repl);
    d = d.replace(proMatch[0], `diaľkové ovládanie v inom vzhľade pre ${device}.`);
  }

  // Kozmeticke upratanie prazdnych elementov, ktore po vymazani obsahu ostali.
  d = d.replace(/<p>\s*<\/p>/gi, '').replace(/<div>\s*<\/div>/gi, '');

  return d.replace(/\s+/g, ' ').trim();
}

module.exports = { isAtosRemoteTemplate, translateAtosRemoteDescription };

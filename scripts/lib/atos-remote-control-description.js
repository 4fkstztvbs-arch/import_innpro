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
  [new RegExp(`Diaľkov[yý] ${OVL} pro `, 'gi'), 'Diaľkový ovládač pre '],
  [/Kvalitní náhradní dálkové ovládání jiného vzhledu pro /gi, 'Kvalitné náhradné diaľkové ovládanie v inom vzhľade pre '],
  [/Kvalitní náhradní dálkový ovladač,? většina funkcí (?:stejných jako u originálního ovládání|stejná jako original)\.? ?Dlouhá životnost,? kvalitní provedení\.? ?Ihned k použití!/gi,
    'Náhradný diaľkový ovládač, väčšina funkcií rovnaká ako pri originálnom ovládaní. Dlhá životnosť, kvalitné vyhotovenie. Ihneď pripravený na použitie!'],
  [new RegExp(`Pod značkou ALIEN získáte kvalitní a levnou náhradu originálního ${OVL}e, kter[yý] již (?:často )?není(?: často)? k dispozici nebo je několikanásobně dražší\\. ${OVL} ALIEN svou kvalitou a mechanickým zpracováním často předčí originální ${OVL}e a zaručuje (?:vám )?tak dlouhou životnost\\.`, 'gi'),
    'Pod značkou ALIEN získate kvalitnú a lacnú náhradu originálneho ovládača, ktorý už často nie je k dispozícii alebo je niekoľkonásobne drahší. Ovládač ALIEN svojou kvalitou a mechanickým spracovaním často prevyšuje originálne ovládače a zaručuje tak dlhú životnosť.'],
  [new RegExp(`Náhrada za originální ${OVL}e? `, 'gi'), 'Náhrada za originálny ovládač '],
  [new RegExp(`${OVL} je kompatibilní s těmito modely\\s*([^:<]{0,40}):`, 'gi'), (full, device) => {
    let sk = device.trim();
    for (const [re, repl] of DEVICE_GENPL_CZ_TO_SK) { if (re.test(sk)) { sk = repl; break; } }
    return sk ? `Ovládač je kompatibilný s týmito modelmi ${sk}:` : 'Ovládač je kompatibilný s týmito modelmi:';
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

  // Treti znama sablona (najma Samsung TV nahradne ovladace) - plain-text popis bez <p> struktury.
  [new RegExp(`kvalitn[íi] náhradn[íi] (?:dálkov[yý] )?${OVL} jiného vzhledu s podporou v[sš]ech funkc[íi] originálního ${OVL}e\\.`, 'gi'),
    'kvalitný náhradný diaľkový ovládač iného vzhľadu s podporou všetkých funkcií originálneho ovládača.'],
  [new RegExp(`K ovládání je přiložen[yý] rozpis tlačítek\\.`, 'gi'), 'K ovládaniu je priložený rozpis tlačidiel.'],
  [new RegExp(`${OVL} je připraven k okamžitému použití, stačí vložit pouze baterie\\.`, 'gi'),
    'Ovládač je pripravený na okamžité použitie, stačí vložiť len batérie.'],
  [new RegExp(`Dodávan[yý] ${OVL} ALIEN je plnohodnotnou náhradou originálního ${OVL}e\\.`, 'gi'),
    'Dodávaný ovládač ALIEN je plnohodnotnou náhradou originálneho ovládača.'],
  [new RegExp(`Díky kvalitní konstrukci je zaručena dlouhá životnost ${OVL}e\\.`, 'gi'),
    'Vďaka kvalitnej konštrukcii je zaručená dlhá životnosť ovládača.'],
  [new RegExp(`Vzhledem k tomu, že je ${OVL} programovatelný, tak ho můžete použít i při výměně vašeho přijímače za jiný - ${OVL} vám rádi přeprogramujeme na jiný model\\.`, 'gi'),
    'Keďže je ovládač programovateľný, môžete ho použiť aj pri výmene vášho prijímača za iný - ovládač vám radi preprogramujeme na iný model.'],
  [new RegExp(`${OVL} ALIEN 4v1 umí současně ovládat až 4 přístroje, pokud nám tedy spolu s objednávkou pošlete modely vašich zařízení, tak vám ho můžeme naprogramovat podle vašich potřeb\\.`, 'gi'),
    'Ovládač ALIEN 4v1 dokáže súčasne ovládať až 4 zariadenia - ak nám spolu s objednávkou pošlete modely vašich zariadení, naprogramujeme ho podľa vašich potrieb.'],
  // "Diaľkový Ovládač ..." (uz ciastocne prelozene priamo v zdroji, nekonzistentne velke pismeno
  // "Ovládač" v strede vety, napr. "Diaľkový Ovládač ALIEN 4v1 umí...") - zjednoti sa na male.
  [/Diaľkový Ovládač/g, 'Diaľkový ovládač'],
];

const GP_LINK = '<p>Odporúčame batérie značky <a href="https://www.premiumstore.sk/znacka/gp/">GP Ultra Alkaline</a>.</p>';

function translateAtosRemoteDescription(descriptionHtml) {
  if (!isAtosRemoteTemplate(descriptionHtml)) return descriptionHtml;

  let d = he.decode(descriptionHtml)
    .replace(/<\/?(?:strong|ins|b|u|span[^>]*|h[1-4])>/gi, '')
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

  // 3b. Treti sablona (Samsung "plain-text" varianta) ma navyse druhy generický blok - vedlajsi
  // zoznam originalnych OEM kodov + reklamny "Prodáváme náhradní dálkové ovladače..." odsek za
  // pomlckovou ciarou. Rovnako nesuvisi s konkretnym modelom, zmazat cely (az po odkaz na
  // kategoriu, ktory sa prida vzdy na koniec).
  // Ohranicene po najblizsi z terminatorov - v niektorych produktoch tato vedlajsia OEM zmienka
  // stoji PRED skutocnym zoznamom modelov (nie len za nim), takze lenivy zaber "az po koniec"
  // by inak vymazal aj samotny hlavny zoznam kompatibilnych modelov za nou.
  d = d.replace(new RegExp(`${OVL} je kompatibiln[íi] s originálními ${OVL}i:[\\s\\S]*?(?=<p>Ďalšie produkty|-{5,}|${OVL} je kompatibiln|$)`, 'gi'), '');
  // Zaloha, ak vedlajsi OEM zoznam chyba a rovno nasleduje len pomlckova ciara + reklamny odsek.
  d = d.replace(/-{5,}[\s\S]*?(?=<p>Ďalšie produkty|$)/gi, '');

  // 4. Preklad zvysneho pevneho textu (fixne frazy) a bezneho nazvu zariadenia v tvare "pro X.".
  for (const [re, repl] of PHRASE_TRANSLATIONS) d = d.replace(re, repl);
  // Bez povinnej koncovej bodky - niektore produkty maju vetu ukoncenu rovno <br /> bez bodky;
  // znakova trieda [^.<] sama o sebe zastavi zachytavanie spravne pred obidvoma varianty.
  const proMatch = d.match(/diaľkové ovládanie v inom vzhľade pre ([^.<]{2,60})/i);
  if (proMatch) {
    let device = proMatch[1];
    for (const [re, repl] of DEVICE_NOUN_TRANSLATIONS) device = device.replace(re, repl);
    d = d.replace(proMatch[0], `diaľkové ovládanie v inom vzhľade pre ${device}`);
  }

  // 5. "a další" v samotnom zozname modelov (nie iba vo vetach vyssie) - drobny zvysok cestiny.
  d = d.replace(/\s+a další\b/gi, ' a ďalšie');

  // 6. Konkretne prve modely z kompatibility uz do uvodnej vety - kedze ide o ten isty hardver
  // (univerzalny ALIEN ovladac), jedina realna odlisnost medzi produktmi je zoznam modelov, s
  // ktorymi je kompatibilny. Presunutim par konkretnych modelov hned do uvodu (nielen do zoznamu
  // nizsie) sa zvysuje mnozstvo produktovo-specifickeho textu hned na zaciatku stranky.
  // Strazi bezpecnu opakovanu spustitelnost (idempotenciu): ak uvodna veta uz obsahuje vlozenu
  // klauzulu (t.j. popis uz raz prebehol touto funkciou), preskocit - inak by "pre (...)." zachytilo
  // az prvu bodku za uz vlozenym zoznamom modelov (ktory ziadnu bodku neobsahuje) a poskodilo text.
  const alreadyProcessed = /kompatibilné (napríklad )?s model/i.test(d);
  const modelListMatch = !alreadyProcessed && (
    d.match(/kompatibilný s týmito modelmi\s*[^:<]*:<\/p>\s*<p>([^<]+?)(?:<br\s*\/?>\s*)*<\/p>/i)
    // Zaloha pre "plain-text" sablonu bez <p> struktury (Samsung TV) - zoznam ide priamo za
    // dvojbodkou az po zaciatok dalsieho odseku/znacky konca (ovladac je uz jednoslovny format
    // "modelmi TV:" alebo cisto "modelmi:", oboje pokryva [^:<]*).
    || d.match(/kompatibilný s týmito modelmi\s*[^:<]*:\s*([^<]+?)(?=\s*(?:Ovládač je kompatibiln|-{5,}|<p>Ďalšie produkty|$))/i)
  );
  const introMatch = !alreadyProcessed && d.match(/diaľkové ovládanie v inom vzhľade pre ([^.<]{2,60})/i);
  if (modelListMatch && introMatch) {
    // niekedy zdrojovy zoznam obsahuje ten isty kod viackrat (chyba na strane ATOS-u) - unique()
    // zachovavajuci poradie, aby sa v uvodnej vete nezobrazil ten isty model dvakrat.
    const models = [...new Set(modelListMatch[1].split(',').map((s) => s.replace(/\s*a ďalšie\s*$/i, '').trim()).filter(Boolean))];
    if (models.length) {
      // Znacka/seria pred prvym cislom v prvej polozke zoznamu (napr. "Ferguson ARIVA 100" ->
      // "Ferguson ARIVA") - v tomto zdrojovom formate ATOS znacku+seriu uvadza len raz, pred
      // celym zoznamom holych cislicovych kodov ("Ferguson ARIVA 100, 102E, 103E"), takze ju
      // treba prevziat z prveho prvku, nie odvodzovat len jedno slovo z uvodnej vety (tam by sa
      // stratilo napr. "ARIVA"). Ak prvy prvok ziadny takyto predpon nema (uz je to sam o sebe
      // holy kod, napr. "KDL-55HX855"), pouzije sa ako zaloha znacka z konca vety "pre X.".
      const firstWords = models[0].split(/\s+/);
      let prefixLen = 0;
      while (prefixLen < firstWords.length - 1 && !/\d/.test(firstWords[prefixLen])) prefixLen++;
      const listPrefix = prefixLen > 0 ? firstWords.slice(0, prefixLen).join(' ') : '';
      const fallbackBrand = introMatch[1].trim().split(/\s+/).pop();
      const brand = listPrefix || fallbackBrand;
      const shown = models.slice(0, 3).map((m) => (m.toLowerCase().includes(brand.toLowerCase()) ? m : `${brand} ${m}`));
      const joined = shown.length === 1 ? shown[0] : `${shown.slice(0, -1).join(', ')} a ${shown[shown.length - 1]}`;
      const clause = models.length === 1 ? `s modelom ${joined}`
        : models.length <= 3 ? `s modelmi ${joined}`
        : `napríklad s modelmi ${joined} a ďalšími`;
      d = d.replace(introMatch[0], `diaľkové ovládanie v inom vzhľade pre ${introMatch[1]} - kompatibilné ${clause}.`);
    }
  }

  // Kozmeticke upratanie prazdnych elementov a prip. zdvojenej bodky (ak povodna veta uz bodku
  // mala, moj vlastny koniec vety v kroku 6 by inak vytvoril "..").
  d = d.replace(/<p>\s*<\/p>/gi, '').replace(/<div>\s*<\/div>/gi, '').replace(/\.\.+/g, '.');

  return d.replace(/\s+/g, ' ').trim();
}

module.exports = { isAtosRemoteTemplate, translateAtosRemoteDescription };

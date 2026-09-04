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
  // Poznámka: napriek názvu "Drátové reproduktory" táto K-B kategória v praxi obsahuje
  // aj množstvo prenosných Bluetooth reproduktorov (JBL Charge/Flip/Clip, Harman Kardon
  // Onyx...), preto text nesmie tvrdiť "len na kábel" - to by bolo fakticky nesprávne.
  'Drátové reproduktory': [
    '{name} je reproduktor od {brand}, ktorý doplní domácu audio zostavu alebo poslúži ako samostatný prenosný reproduktor.',
    'Reproduktor {name} od značky {brand} dopĺňa ozvučenie s dôrazom na kvalitu prevedenia.',
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

  // --- Domáce spotrebiče -----------------------------------------------------------
  'Chladničky s mrazákom dole': [
    '{name} je kombinovaná chladnička s mrazákom dole od {brand}, určená ako hlavný chladiaci spotrebič v domácnosti.',
  ],
  'Chladničky': [
    '{name} je chladnička od {brand}.',
  ],
  'Kombinované chladničky': [
    '{name} je kombinovaná chladnička s mrazničkou od {brand}.',
  ],
  'Monoklimatické chladničky': [
    '{name} je jednodverová (monoklimatická) chladnička od {brand}, vhodná napríklad ako menšia alebo doplnková chladnička.',
  ],
  'Vstavané chladenie': [
    '{name} je vstavaný chladiaci spotrebič od {brand}, určený na zabudovanie do kuchynskej linky.',
  ],
  'Vinotéky a vitríny': [
    '{name} je vinotéka/chladiaca vitrína od {brand} na skladovanie vína alebo nápojov pri optimálnej teplote.',
  ],
  'Zásuvkové mrazničky': [
    '{name} je zásuvková mraznička od {brand}.',
  ],
  'Pultové mrazničky': [
    '{name} je pultová (truhlicová) mraznička od {brand}, vhodná na skladovanie väčšieho množstva mrazených potravín.',
  ],
  'Práčky zepředu plnené': [
    '{name} je práčka s predným plnením od {brand}.',
  ],
  'Práčky s vrchným plnením': [
    '{name} je práčka s vrchným plnením od {brand}, vhodná najmä do menších priestorov.',
  ],
  'Sušičky': [
    '{name} je sušička bielizne od {brand}.',
  ],
  'Príslušenstvo k práčkam a sušičkám': [
    '{name} je príslušenstvo od {brand} k práčke alebo sušičke.',
  ],
  'Sušiaky na bielizeň': [
    '{name} je sušiak na bielizeň od {brand}.',
  ],
  'Vstavané umývačky 60 cm': [
    '{name} je vstavaná umývačka riadu (60 cm) od {brand}, určená na zabudovanie do kuchynskej linky.',
  ],
  'Vstavané umývačky 45 cm': [
    '{name} je úzka vstavaná umývačka riadu (45 cm) od {brand}, vhodná do menších kuchýň.',
  ],
  'Umývačky riad 60 cm': [
    '{name} je voľne stojaca umývačka riadu (60 cm) od {brand}.',
  ],
  'Umývačky riadu': [
    '{name} je umývačka riadu od {brand}.',
  ],
  'Robotické vysávače': [
    '{name} je robotický vysávač od {brand}, ktorý upratuje domácnosť samostatne bez potreby manuálneho ovládania.',
  ],
  'Tyčové vysávače': [
    '{name} je tyčový (bezvreckový) vysávač od {brand}.',
  ],
  'Podlahové vysávače': [
    '{name} je podlahový vysávač od {brand}.',
  ],
  'Aku vysávače': [
    '{name} je akumulátorový (bezdrôtový) vysávač od {brand}.',
  ],
  'Vysávače': [
    '{name} je vysávač od {brand}.',
  ],
  'Príslušenstvo k vysávačom': [
    '{name} je príslušenstvo od {brand} k vysávaču.',
  ],
  'Filtre do vysávačov': [
    '{name} je náhradný filter od {brand} do vysávača.',
  ],
  'Vrecká do vysávačov': [
    '{name} sú vrecká do vysávača od {brand}.',
  ],
  'Parné mopy a čističe': [
    '{name} je parný mop/čistič od {brand} na hĺbkové čistenie podláh bez chemikálií.',
  ],
  'Mopy a upratovacie súpravy': [
    '{name} je mop/upratovacia súprava od {brand}.',
  ],
  'Čističe okien': [
    '{name} je čistič okien od {brand}.',
  ],
  'Fritézy': [
    '{name} je teplovzdušná fritéza od {brand}, na prípravu jedál s minimom oleja.',
  ],
  'Fritézy a hrnce': [
    '{name} je fritéza/hrniec od {brand}.',
  ],
  'Multifunkčné hrnce': [
    '{name} je multifunkčný hrniec od {brand}, ktorý nahradí viacero kuchynských spotrebičov naraz.',
  ],
  'Pomalé hrnce': [
    '{name} je pomalý hrniec (slow cooker) od {brand} na dlhé, šetrné dusenie jedla.',
  ],
  'Parné hrnce': [
    '{name} je parný hrniec od {brand} na prípravu jedla v pare.',
  ],
  'Hrnce': [
    '{name} sú hrnce od {brand}.',
  ],
  'Panvice': [
    '{name} je panvica od {brand}.',
  ],
  'Elektrické panvice': [
    '{name} je elektrická panvica od {brand}.',
  ],
  'Elektrické grily': [
    '{name} je elektrický gril od {brand}.',
  ],
  'Grily, pekárne, variče': [
    '{name} je kuchynský spotrebič od {brand} (gril/pekáreň/varič).',
  ],
  'Vstavané pečúce rúry': [
    '{name} je vstavaná rúra na pečenie od {brand}, určená na zabudovanie do kuchynskej linky.',
  ],
  'Sporáky a rúry': [
    '{name} je sporák/rúra od {brand}.',
  ],
  'Vstavané rúry': [
    '{name} je vstavaná rúra od {brand}.',
  ],
  'Elektrické sporáky': [
    '{name} je elektrický sporák od {brand}.',
  ],
  'Vstavané mikrovlnné rúry': [
    '{name} je vstavaná mikrovlnná rúra od {brand}.',
  ],
  'Mikrovlnné rúry': [
    '{name} je mikrovlnná rúra od {brand}.',
  ],
  'Indukčné varné dosky': [
    '{name} je indukčná varná doska od {brand}.',
  ],
  'Sklokeramické varné dosky': [
    '{name} je sklokeramická varná doska od {brand}.',
  ],
  'Plynové varné dosky': [
    '{name} je plynová varná doska od {brand}.',
  ],
  'Varné dosky': [
    '{name} je varná doska od {brand}.',
  ],
  'Elektrické variče': [
    '{name} je elektrický varič od {brand}.',
  ],
  'Výsuvné, výklopné digestory': [
    '{name} je výsuvný/výklopný digestor od {brand} na odsávanie pary a pachov spod kuchynskej linky.',
  ],
  'Komínové digestory': [
    '{name} je komínový digestor od {brand}.',
  ],
  'Digestory': [
    '{name} je digestor od {brand}.',
  ],
  'Stolové mixéry': [
    '{name} je stolový mixér od {brand}.',
  ],
  'Tyčové mixéry': [
    '{name} je tyčový mixér od {brand}.',
  ],
  'Kuchynské roboty': [
    '{name} je kuchynský robot od {brand}, ktorý zvládne miesenie, šľahanie či krájanie priamo v jednom zariadení.',
  ],
  'Kuchynské roboty a krájače': [
    '{name} je kuchynský robot/krájač od {brand}.',
  ],
  'Príslušenstvo ku kuchynským robotom': [
    '{name} je príslušenstvo od {brand} ku kuchynskému robotu.',
  ],
  'Šľahače': [
    '{name} je ručný šľahač od {brand}.',
  ],
  'Krájače potravín': [
    '{name} je krájač potravín od {brand}.',
  ],
  'Elektrické sekáčiky': [
    '{name} je elektrický sekáčik od {brand}.',
  ],
  'Odšťavovače': [
    '{name} je odšťavovač od {brand}.',
  ],
  'Lisy na citrusy': [
    '{name} je lis na citrusy od {brand}.',
  ],
  'Ryžovary': [
    '{name} je ryžovar od {brand}.',
  ],
  'Rýchlovarné kanvice': [
    '{name} je rýchlovarná kanvica od {brand}.',
  ],
  'Filtračné kanvice': [
    '{name} je filtračná kanvica od {brand} na jednoduchú filtráciu vody z vodovodu.',
  ],
  'Príslušenstvo pre filtračné kanvice': [
    '{name} je náhradný filter/príslušenstvo od {brand} pre filtračnú kanvicu.',
  ],
  'Kávovary a espressá': [
    '{name} je kávovar od {brand}.',
  ],
  'Automatická espressá': [
    '{name} je automatický espresso kávovar od {brand}, ktorý pripraví kávu na stlačenie jedného tlačidla.',
  ],
  'Pákové kávovary': [
    '{name} je pákový kávovar od {brand}.',
  ],
  'Kávovary na kapsle': [
    '{name} je kapsulový kávovar od {brand}.',
  ],
  'Kávové kapsle': [
    '{name} sú kávové kapsule od {brand}.',
  ],
  'Príslušenstvo ku kávovarom': [
    '{name} je príslušenstvo od {brand} ku kávovaru.',
  ],
  'Moka kanvice a frenchpressy': [
    '{name} je moka kanvica/frenchpress od {brand} na prípravu kávy tradičným spôsobom.',
  ],
  'Prekvapkávače': [
    '{name} je prekvapkávač od {brand} na prípravu prekvapkávanej kávy.',
  ],
  'Príprava nápojov': [
    '{name} je spotrebič od {brand} na prípravu nápojov.',
  ],
  'Káva': [
    '{name} je produkt od {brand} z kategórie príprava kávy.',
  ],
  'Hriankovače': [
    '{name} je hriankovač od {brand}.',
  ],
  'Sendvičovače': [
    '{name} je sendvičovač/toaster od {brand}.',
  ],
  'Vaflovače': [
    '{name} je vaflovač od {brand}.',
  ],
  'Palacinkovače': [
    '{name} je palacinkovač od {brand}.',
  ],
  'Pece na pizzu': [
    '{name} je pec na pizzu od {brand}.',
  ],
  'Naparovacie žehličky': [
    '{name} je naparovacia žehlička od {brand}.',
  ],
  'Naparovače odevov': [
    '{name} je naparovač odevov od {brand} na rýchle odstránenie záhybov bez žehliacej dosky.',
  ],
  'Žehličky': [
    '{name} je žehlička od {brand}.',
  ],
  'Žehliace dosky': [
    '{name} je žehliaca doska od {brand}.',
  ],
  'Príslušenstvo k žehlenie': [
    '{name} je príslušenstvo od {brand} k žehleniu.',
  ],
  'Vákuovačky a zváračky': [
    '{name} je vákuovačka od {brand} na predĺženie trvanlivosti potravín.',
  ],
  'Vákuovačky a zváračky fólií': [
    '{name} je vákuovačka/zváračka fólií od {brand}.',
  ],
  'Príslušenstvo pre vákuovačky a zváračky': [
    '{name} je príslušenstvo od {brand} k vákuovačke.',
  ],
  'Zmrzlinovače a jogurtovače': [
    '{name} je zmrzlinovač/jogurtovač od {brand} na domácu prípravu zmrzliny alebo jogurtu.',
  ],
  'Výrobníky ľadu': [
    '{name} je výrobník ľadu od {brand}.',
  ],
  'Sušičky potravín': [
    '{name} je sušička potravín od {brand}.',
  ],
  'Kuchynské váhy': [
    '{name} sú kuchynské váhy od {brand}.',
  ],
  'Kuchynské potreby': [
    '{name} sú kuchynské potreby od {brand}.',
  ],
  'Kuchynské nádobie': [
    '{name} je kuchynské nádobie od {brand}.',
  ],
  'Ostatné kuchynské potreby': [
    '{name} je kuchynská potreba od {brand}.',
  ],
  'Kuchynské nože a nožnice': [
    '{name} sú kuchynské nože/nožnice od {brand}.',
  ],
  'Varešky, Naberačky, Obracačky, Kliešte': [
    '{name} je kuchynské náčinie od {brand}.',
  ],
  'Pečúce formy': [
    '{name} je pečiaca forma od {brand}.',
  ],
  'Dózy na potraviny': [
    '{name} sú dózy na potraviny od {brand}.',
  ],
  'Poháre a fľaše': [
    '{name} je pohár/fľaša od {brand}.',
  ],
  'Termosky a termohrnčeky': [
    '{name} je termoska/termohrnček od {brand}.',
  ],
  'Chladiace tašky a boxy': [
    '{name} je chladiaca taška/box od {brand}.',
  ],
  'Príslušenstvo k malým spotrebičom': [
    '{name} je príslušenstvo od {brand} k malému kuchynskému spotrebiču.',
  ],
  'Vykurovacie telesá, radiátory': [
    '{name} je vykurovacie teleso/radiátor od {brand}.',
  ],
  'Vykurovacie telesá': [
    '{name} je vykurovacie teleso od {brand}.',
  ],
  'Ohrievače vody': [
    '{name} je ohrievač vody od {brand}.',
  ],
  'Čističky vzduchu': [
    '{name} je čistička vzduchu od {brand}.',
  ],
  'Odvlhčovače vzduchu': [
    '{name} je odvlhčovač vzduchu od {brand}.',
  ],
  'Aroma difuzéry': [
    '{name} je aróma difuzér od {brand}.',
  ],
  'Ventilátory': [
    '{name} je ventilátor od {brand}.',
  ],
  'Vzduchotechnika': [
    '{name} je zariadenie vzduchotechniky od {brand}.',
  ],
  'Meteostanice': [
    '{name} je meteostanica od {brand}.',
  ],
  'Upratovacie pomôcky': [
    '{name} je upratovacia pomôcka od {brand}.',
  ],
  'Čistiace prostriedky': [
    '{name} je čistiaci prostriedok od {brand}.',
  ],
  'Potreby pre domácnosť': [
    '{name} je potreba pre domácnosť od {brand}.',
  ],
  'Na párty a oslavy': [
    '{name} je produkt od {brand} na párty a oslavy.',
  ],
  'Ostatné domáce spotrebiče': [
    '{name} je domáci spotrebič od {brand}.',
  ],
};
const DEFAULT_INTRO = ['{name} je produkt od {brand}.'];

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

// --- Doplnkové fakty o konkrétnom produkte (mimo kategórie Televízory) -------------
// Na rozdiel od TV, kde sa dá zdieľať fakt o technológii displeja naprieč veľkosťami
// tej istej rady, väčšina audio produktov (slúchadlá, reproduktory...) sú navzájom
// odlišné modely - fakty sa preto priraďujú podľa presného CODE (K-B feed), nie podľa
// vzoru v názve. Zdroj: oficiálna stránka výrobcu, pri chýbajúcich údajoch veľký
// e-shop (Alza/Nay/Datart) - vlastnými slovami, nič sa nevymýšľa nad rámec zdroja.
// Postupne dopĺňané po dávkach (najprv najväčšie/najpredávanejšie modely).
// Zoznam (nie priamo objekt): jeden model = jeden zápis s poľom `codes` pre všetky
// farebné varianty, aby sa fakty nemuseli kopírovať pre každý CODE zvlášť.
const PRODUCT_FACTS_LIST = [
  {
    codes: ['100002201318'], // Samsung Galaxy Buds4 Pro
    heading: 'Zvuk a potlačenie hluku',
    paragraphs: [
      'Galaxy Buds4 Pro majú dvojpásmový 11mm menič doplnený 5,4mm výškovým meničom a podporujú 24-bitový zvuk. Adaptívne potlačenie okolitého hluku (ANC) sa vďaka umelej inteligencii priebežne prispôsobuje prostrediu, v ktorom sa práve nachádzate.',
      'Až šesť mikrofonov s neurónovou sieťou oddeľuje hlas od ruchu v pozadí pri telefonovaní. Výdrž batérie je do cca 7 hodín na jedno nabitie slúchadiel (bez ANC) a s puzdrom spolu až 23 hodín, nabíjanie je cez USB-C aj bezdrôtovo.',
    ],
  },
  {
    codes: ['100002102358', '100002102356'], // Samsung Galaxy Buds3
    heading: 'Odolnosť a pripojenie',
    paragraphs: [
      'Galaxy Buds3 majú krytie IP57, ktoré ich chráni pred potom a dažďom, a podporujú aktívne potlačenie hluku (ANC), ktoré sa dá vypnúť v prospech okolitého zvuku (Ambient sound).',
      'Bluetooth 5.4 s podporou kodekov AAC, SBC a Samsung Seamless Codec (SSC) zaisťuje spoľahlivý prenos zvuku, funkcia Auto Switch dokáže plynulo prepínať medzi viacerými Samsung zariadeniami.',
    ],
  },
  {
    codes: ['100002136608', '100002136609', '100002136610'], // JBL Live Buds 3
    heading: 'Smart Charging Case a adaptívne ANC',
    paragraphs: [
      'JBL Live Buds 3 majú nabíjacie puzdro s 1,45" dotykovým displejom na ovládanie priamo z puzdra. Adaptívne potlačenie hluku (ANC) sa v reálnom čase prispôsobuje okoliu, prípadne sa dá ručne nastaviť na jednu zo siedmich úrovní.',
      'Výdrž je do 10 hodín na jedno nabitie (8 hodín so zapnutým ANC), s puzdrom spolu až 3 plné nabitia navyše. Slúchadlá majú krytie IP55 proti prachu a vode a podporu kodeku LDAC.',
    ],
  },
  {
    codes: ['100002136441', '100002136445'], // JBL Tour One M3 (+ Latte)
    heading: 'Adaptívne ANC 2.0 a Hi-Res zvuk',
    paragraphs: [
      'JBL Tour One M3 majú technológiu True Adaptive Noise Canceling 2.0, ktorá v reálnom čase potláča rušivé zvuky z okolia. Vstavaný 24-bitový/192kHz DAC spolu s podporou kodekov LDAC a LC3 zaisťuje bezstratový Hi-Res zvuk.',
      'Výdrž batérie je až 40 hodín so zapnutým ANC, päť minút nabíjania dá ďalších 5 hodín počúvania. Priestorový zvuk JBL Spatial 360 so sledovaním pohybu hlavy dopĺňa zážitok pri filmoch aj hudbe.',
    ],
  },
  {
    codes: ['100002134375', '100002134376'], // Sony WF-C710N
    heading: 'Potlačenie hluku a výdrž batérie',
    paragraphs: [
      'Sony WF-C710N majú aktívne potlačenie hluku (ANC), ktoré je oproti predchádzajúcemu modelu vylepšené, a krytie IPX4 proti vode. Bluetooth 5.3 s kodekmi SBC a AAC zaisťuje spoľahlivé pripojenie na dosah do 10 m.',
      'Výdrž je do 8,5 hodiny so zapnutým ANC alebo do 12 hodín s vypnutým ANC, rovnaké hodnoty platia aj pri použití spolu s nabíjacím puzdrom.',
    ],
  },
  {
    codes: ['100002202721'], // Xiaomi Buds 6 Ceramic
    heading: 'Ladenie Harman a aktívne potlačenie hluku',
    paragraphs: [
      'Xiaomi Buds 6 majú zvuk ladený tímom Harman Golden Ear Team a podporujú bezstratový zvuk s vysokým rozlíšením (24-bit/48 kHz) až do 2,1 Mbps. Adaptívne aktívne potlačenie hluku (ANC) ponúka dva režimy intenzity - Balanced a Deep.',
      'Bluetooth 5.4 s podporou kodekov AAC, SBC, aptX Lossless, aptX Adaptive a LC3, krytie IP54 proti prachu a vode. Výdrž je do 6 hodín na jedno nabitie bez ANC (35 hodín s puzdrom), so zapnutým ANC do 3,5 hodiny (20 hodín s puzdrom).',
    ],
  },
  {
    codes: ['100002136465', '100002136466'], // JBL Wave Buds 2
    heading: 'Výdrž batérie a odolnosť',
    paragraphs: [
      'JBL Wave Buds 2 ponúkajú spolu s nabíjacím puzdrom výdrž až 40 hodín (10 hodín zo samotných slúchadiel), so zapnutým potlačením hluku (ANC) klesá výdrž na približne 8 hodín. Desať minút nabíjania v puzdre dá ďalšie tri hodiny počúvania.',
      'Slúchadlá majú krytie IP54 proti prachu a vode, puzdro IPX2, a 8mm meniče s ladením JBL Pure Bass.',
    ],
  },
  {
    codes: ['100002200822', '100002200832', '100002200831'], // JBL Tune 780NC
    heading: 'Potlačenie hluku a výdrž batérie',
    paragraphs: [
      'JBL Tune 780NC majú adaptívne potlačenie hluku (ANC), ktoré automaticky filtruje rušivé zvuky z okolia, a režim Smart Ambient na počutie okolia bez zloženia slúchadiel. Bluetooth 6.0 s multipointom umožňuje plynulé prepínanie medzi dvomi zariadeniami.',
      'Výdrž batérie je až 76 hodín so zapnutým ANC a Bluetooth vypnutými/50 hodín pri bežnom používaní, rýchle nabíjanie dá za 5 minút približne 5 hodín počúvania.',
    ],
  },
  {
    codes: ['100002136616', '100002136617'], // JBL Tour Pro 3 (+ Latte)
    heading: 'Smart Charging Case s displejom',
    paragraphs: [
      'JBL Tour Pro 3 majú nabíjacie puzdro s 1,57" dotykovým displejom, na ktorom vidno hranú skladbu, prichádzajúci hovor alebo si naň možno nastaviť vlastnú fotku ako tapetu. Puzdro dokáže slúžiť aj ako audio vysielač, napríklad k palubnému systému v lietadle.',
      'Slúchadlá ponúkajú priestorový zvuk JBL Spatial 360 so sledovaním pohybu hlavy, Hi-Res zvuk s podporou kodeku LDAC a adaptívne potlačenie hluku v reálnom čase. Výdrž je do 11 hodín na jedno nabitie (8 hodín so zapnutým ANC), s puzdrom spolu až 33 hodín.',
    ],
  },
  {
    codes: ['100001937701', '100001937702', '100002134398', '100001937703'], // Sony WH-CH720N
    heading: 'Potlačenie hluku a výdrž batérie',
    paragraphs: [
      'Sony WH-CH720N majú aktívne potlačenie hluku (ANC) a technológiu Precise Voice Pickup s tvarovaním mikrofónového lúča pre čistejšie hovory aj vo veternom počasí. Integrovaný procesor V1 spolu s technológiou DSEE dopočítava detaily stlačeného zvuku.',
      'Výdrž batérie je až 50 hodín, slúchadlá sa dajú poskladať pre jednoduchšie prenášanie a cez appku Sound Connect si možno nastaviť ekvalizér alebo pripojenie k dvom zariadeniam naraz.',
    ],
  },
  {
    codes: ['100002201075', '100002201057', '100002201056'], // Xiaomi Redmi Buds 8 Pro
    heading: 'Aktívne potlačenie hluku a zvuk',
    paragraphs: [
      'Redmi Buds 8 Pro majú aktívne potlačenie hluku (ANC) až do 55 dB, ktoré vďaka adaptívnemu algoritmu analyzuje okolitý hluk a priebežne sa mu prispôsobuje. Basový 11mm menič s titánovou membránou dopĺňajú dva 6,7mm piezoelektrické keramické výškové meniče.',
      'Slúchadlá podporujú certifikáciu Hi-Res Audio Wireless a kodek LDAC, majú krytie IP54 proti prachu a vode a výdrž do 8 hodín na jedno nabitie, s puzdrom spolu až 33 hodín.',
    ],
  },
  {
    codes: ['100002136604', '100002136605', '100002136606'], // JBL Live Beam 3
    heading: 'Adaptívne ANC a výdrž batérie',
    paragraphs: [
      'JBL Live Beam 3 majú technológiu True Adaptive Noise Cancelling, ktorá rýchlo potlačí rušivé zvuky z okolia, a šesť mikrofónov s beamformingom pre čisté hovory aj vo vetre. Krytie IP55 ich chráni pred prachom a vodou.',
      'Výdrž je do 12 hodín na jedno nabitie s vypnutým ANC (9 hodín s adaptívnym ANC), s puzdrom spolu až 48 hodín. Desať minút rýchleho nabíjania cez USB-C dá ďalšie štyri hodiny počúvania.',
    ],
  },
  {
    codes: ['100002160455'], // Niceboy HIVE Aura 5 ANC
    heading: 'Výdrž batérie a ANC',
    paragraphs: [
      'Niceboy Aura 5 ANC ponúkajú výdrž batérie až 60 hodín s vypnutým potlačením hluku, respektíve 30 hodín so zapnutým ANC. Súčasťou balenia je aj 3,5mm audio kábel, takže slúchadlá je možné použiť aj bez batérie.',
      'Bluetooth 5.4 s kodekmi AAC/SBC, 40mm meniče a nabíjanie cez USB-C.',
    ],
  },
  {
    codes: ['100002136366', '100002136368', '100002136369', '100002136370', '100002136372'], // JBL Charge 6 (farebné varianty)
    heading: 'Výdrž batérie a odolnosť',
    paragraphs: [
      'JBL Charge 6 má batériu s kapacitou 4722 mAh a bežnú výdrž do 24 hodín, funkcia Playtime Boost pridá ďalšie 4 hodiny (spolu do 28 hodín). Krytie IP68 ho chráni pred prachom, dažďom aj ponorením do vody.',
      'Výkon reproduktora je 45 W, pripojenie cez Bluetooth 5.4, nabíjanie cez USB-C trvá približne 3 hodiny.',
    ],
  },
  {
    codes: ['100002136373'], // JBL Flip 7
    heading: 'Výdrž batérie a odolnosť',
    paragraphs: [
      'JBL Flip 7 ponúka výdrž do 14 hodín na jedno nabitie, funkcia Playtime Boost pridá ďalšie 2 hodiny na úkor šírky frekvenčného rozsahu. Nabíjanie cez USB-C trvá približne 2,5 hodiny.',
    ],
  },
  {
    codes: ['100002136356', '100002136357'], // Harman Kardon Onyx Studio 9
    heading: 'Výkon a výdrž batérie',
    paragraphs: [
      'Harman Kardon Onyx Studio 9 má trojkanálový systém s výkonom 50 W RMS a batériu s kapacitou 4722 mAh na výdrž do 8 hodín, nabíjanie cez USB-C trvá približne 4 hodiny.',
      'Reproduktor dokáže cez USB výstup 5V/2,1A slúžiť aj ako powerbanka na dobitie iných zariadení. Pripojenie je cez Bluetooth 5.3.',
    ],
  },
  {
    codes: ['100002202601'], // JBL Xtreme 5
    heading: 'Výdrž batérie a výkon',
    paragraphs: [
      'JBL Xtreme 5 má batériu s kapacitou 9444 mAh, ktorá pri priemernej hlasitosti vydrží viac ako 35 hodín prehrávania. Oficiálne udávaná výdrž je do 24 hodín, funkcia Playtime Boost pridá ďalšie 4 hodiny (spolu do 28 hodín).',
      'Desať minút rýchleho nabíjania dá ďalšie 2 hodiny prehrávania.',
    ],
  },
  {
    codes: ['100002102621', '100002102622', '100002102623', '100002102627'], // JBL Clip 5 (farebné varianty)
    heading: 'Výdrž batérie a odolnosť',
    paragraphs: [
      'JBL Clip 5 má batériu s kapacitou 1400 mAh a výdrž do 12 hodín na jedno nabitie, funkcia Playtime Boost pridá ďalšie 3 hodiny. Krytie IP67 ho chráni pred prachom aj ponorením do vody.',
      'Výkon je 7 W RMS, pripojenie cez Bluetooth 5.3, súčasťou je karabína na jednoduché pripevnenie napríklad na batoh.',
    ],
  },
  {
    codes: ['100002172120'], // JBL Boombox 4
    heading: 'Výdrž batérie a výkon',
    paragraphs: [
      'JBL Boombox 4 má batériu s kapacitou 99 Wh, ktorá vydrží do 28 hodín prehrávania (do 34 hodín s funkciou Playtime Boost). Batéria je vymeniteľná, plné nabitie trvá približne 3 hodiny.',
      'Krytie IP68 ho chráni pred prachom aj ponorením do vody, výstupný výkon je oproti predchádzajúcemu modelu Boombox 3 vyšší takmer o polovicu.',
    ],
  },
  {
    codes: ['100002134627'], // Samsung HW-Q800F
    heading: 'Priestorový zvuk Dolby Atmos',
    paragraphs: [
      'Samsung HW-Q800F je 5.1.2-kanálový soundbar s celkovým výkonom 400 W rozloženým do 11 reproduktorov vrátane dvoch smerovaných nahor pre efekt Dolby Atmos. Podporuje aj dekodéry Dolby Digital 5.1, Dolby Digital Plus, Dolby TrueHD a DTS:X.',
      'Súčasťou je bezdrôtový 8-palcový subwoofer, pripojenie cez HDMI eARC, optický vstup, Bluetooth alebo Wi-Fi. Funkcia Q-Symphony dokáže zosúladiť zvuk soundbaru so správnym Samsung televízorom.',
    ],
  },
  {
    codes: ['100002172127'], // JBL Bar 1000 MK2
    heading: 'Priestorový zvuk Dolby Atmos',
    paragraphs: [
      'JBL Bar 1000 MK2 je 7.1.4-kanálový systém s celkovým výkonom 960 W, ktorý podporuje Dolby Atmos aj DTS:X. Odnímateľné bezdrôtové zadné reproduktory (2× 80 W) sa dajú jednou rukou zložiť zo soundbaru a umiestniť za miesto na sedenie.',
      'Štyri hore smerované reproduktory v soundbare spolu so zadnými reproduktormi vytvárajú skutočný priestorový Dolby Atmos zvuk, 10-palcový subwoofer má výkon 300 W.',
    ],
  },
  {
    codes: ['100002172124'], // JBL Bar 800 MK2
    heading: 'Priestorový zvuk Dolby Atmos',
    paragraphs: [
      'JBL Bar 800 MK2 je 7.1-kanálový systém s celkovým výkonom až 780 W a bezdrôtovým 10-palcovým subwooferom (300 W). Odnímateľné zadné reproduktory (2× 40 W) vytvárajú skutočný priestorový zvuk s podporou Dolby Atmos a DTS Virtual:X.',
      'Technológia MultiBeam 3.0 rozširuje zvukovú scénu do šírky, Pure Voice 2.0 automaticky vylepšuje zrozumiteľnosť dialógov. Pripojenie cez HDMI eARC s podporou 4K HDR10/Dolby Vision passthrough a Wi-Fi streamovaním.',
    ],
  },
  {
    codes: ['100002134626'], // Samsung HW-Q930F
    heading: 'Priestorový zvuk Dolby Atmos',
    paragraphs: [
      'Samsung HW-Q930F je 9.1.4-kanálový soundbar so 17 reproduktormi a celkovým výkonom 580 W, vrátane bezdrôtového subwooferu a bezdrôtových zadných reproduktorov so 4 hore smerovanými reproduktormi pre efekt Dolby Atmos. Podporuje aj DTS:X, DTS-HD Master Audio a Dolby TrueHD.',
      'Bluetooth 5.3, funkcia Q-Symphony na zosúladenie so Samsung televízorom, podpora Spotify Connect, AirPlay, Chromecast a optický vstup.',
    ],
  },
  // --- Domáce spotrebiče: veľké spotrebiče (davka 1) ------------------------------
  {
    codes: ['100001947537', '100001947543'], // Samsung RB38C7B6AS9/EF, RB38C7B6D41/EF (Bespoke, rovnaká séria)
    heading: 'Funkcia AI Energy Mode',
    paragraphs: [
      'Táto chladnička s mrazákom dole má funkciu AI Energy Mode, ktorá pomocou umelej inteligencie analyzuje spôsob používania chladničky a podľa toho odhaduje jej spotrebu. Ak by predpokladaný účet za elektrinu prekročil nastavenú cieľovú hodnotu, navrhne aktivovať úsporný režim.',
      'Funkcia je dostupná cez aplikáciu SmartThings (Android/iOS) a vyžaduje Wi-Fi pripojenie a Samsung účet.',
    ],
  },
  {
    codes: ['100002201604', '100002201599', '100002201605'], // Roborock Saros 20 (+ Sonic Complete varianty)
    heading: 'Navigácia StarSight a prekonávanie prahov',
    paragraphs: [
      'Roborock Saros 20 má saciu silu až 36 000 Pa a navigačný systém StarSight Autonomous 2.0, ktorý rozoznáva až 300 typov prekážok. Vďaka podvozku AdaptiLift Chassis 3.0 zvládne prekonať aj dvojitý prah do výšky 4,5+4,3 cm.',
      'Robot automaticky prispôsobuje výšku podľa typu podlahy, zvláda koberce s vlasom do 3 cm, mopuje horúcou vodou a má kefu DuoDivide proti zamotávaniu vlasov.',
    ],
  },
  {
    codes: ['100002070411', '100002070409'], // Samsung WW90CGC04DTELE, WW80CGC04DABLE (rovnaká séria AI EcoBubble)
    heading: 'AI EcoBubble a hygienické pranie parou',
    paragraphs: [
      'Práčka má technológiu AI EcoBubble, ktorá vytvára aktívnu penu odstraňujúcu až o 24 % viac nečistôt aj v studenej vode - práčka rozpozná typ tkaniny a podľa toho prispôsobí množstvo peny, čas prania, teplotu aj odstreďovanie.',
      'Funkcia Drum Clean s parou odstráni z bubna až 99,9 % baktérií bez použitia čistiacich prostriedkov. Súčasťou je aj funkcia AI Energy Mode a pripojenie cez aplikáciu SmartThings.',
    ],
  },
  {
    codes: ['100002203268', '100002203288', '100002203265', '100002203269'], // Whirlpool WHK AI AdaptiveCool (viac veľkostí)
    heading: 'Technológia 6. zmysel a AI AdaptiveCool',
    paragraphs: [
      'Táto chladnička využíva technológiu Whirlpool 6. zmysel - senzory priebežne sledujú vloženú potravinovú záťaž, teplotu a vlhkosť a podľa toho automaticky upravujú chladiaci výkon, aby udržali stabilné podmienky pri nižšej spotrebe energie.',
      'Funkcia AI AdaptiveCool dopĺňa systém Dual Cooling (samostatné chladiace okruhy pre chladničku a mrazničku) a je súčasťou aplikácie HomeWhiz na diaľkové ovládanie a monitoring.',
    ],
  },
  {
    codes: ['100001827945', '100002070977', '100001875757', '100001879906', '100001875758', '100002200667'], // LG sušičky DUAL Inverter Heat Pump
    heading: 'Tepelné čerpadlo DUAL Inverter Heat Pump',
    paragraphs: [
      'Táto sušička má technológiu DUAL Inverter Heat Pump, ktorá radí zariadenie do energetickej triedy A+++ a spotrebuje až o 65 % menej energie než bežné sušičky. Automatické čistenie kondenzátora vodou udržiava sušičku dlhodobo funkčnú bez nutnosti ručného čistenia.',
      'Sušička dokáže znížiť výskyt roztočov až o 99,9 %. Na inverterový kompresor aj motor poskytuje LG 10-ročnú záruku.',
    ],
  },
  {
    codes: ['100000424178', '100002130289'], // Electrolux 600 SteamBake (EOD3H50TX, EOD5F71Z)
    heading: 'Parná funkcia SteamBake',
    paragraphs: [
      'Táto vstavaná rúra má funkciu SteamBake, ktorá do pečenia pridáva paru pre šťavnatejšie a kysnutejšie výsledky. Katalytické samočistiace steny pohlcujú tuk a čistia sa samé pri teplote 250 °C.',
      'Ventilátor v zadnej stene zaisťuje rovnomerné rozloženie tepla, vďaka čomu je možné piecť súčasne až na 3 úrovniach. Funkcia rýchleho predhrievania skráti čakanie oproti bežným rúram.',
    ],
  },
];
const PRODUCT_FACTS = {};
for (const entry of PRODUCT_FACTS_LIST) {
  for (const code of entry.codes) PRODUCT_FACTS[code] = entry;
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

const ENRICHED_ROOT_CATEGORIES = ['TV, audio a video', 'Domáce spotrebiče'];
function shouldEnrich(product) {
  const cat = product.defaultCategory || '';
  return isPoorDescription(product.description) &&
    ENRICHED_ROOT_CATEGORIES.some((root) => cat.startsWith(root));
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
    parts.push(`<p style="text-align:center"><img alt="${escapeHtml(name)}" src="${escapeHtml(image)}"></p>`);
  }

  let curatedFacts = false;
  if (sub === 'Televízory') {
    const tech = findTechFacts(manufacturer, name);
    if (tech) {
      parts.push(`<h3>${escapeHtml(tech.heading)}</h3>`);
      for (const p of tech.paragraphs) parts.push(`<p>${p}</p>`);
      curatedFacts = true;
    }
  } else {
    const facts = PRODUCT_FACTS[code];
    if (facts) {
      parts.push(`<h3>${escapeHtml(facts.heading)}</h3>`);
      for (const p of facts.paragraphs) parts.push(`<p>${p}</p>`);
      curatedFacts = true;
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
  } else if (desc && !curatedFacts) {
    // Prozaický text - rozdelenie na kratšie odseky podľa viet, bez zmeny obsahu.
    // Ak už máme kurátorsky overené fakty (curatedFacts), tento surový text by ich
    // len nečitateľne duplikoval, tak sa vynecháva.
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

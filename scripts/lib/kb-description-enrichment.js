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
    'Reproduktor {name} od {brand} ozvučí domácnosť alebo menší priestor.',
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
    'HiFi komponent {name} od {brand} je určený pre náročnejšiu domácu audio zostavu.',
  ],
  'Rádioprijímače': [
    '{name} je rádioprijímač od {brand}, určený na jednoduché počúvanie rozhlasového vysielania.',
    'Rádio {name} od {brand} slúži na počúvanie FM/DAB vysielania bez nutnosti pripájať sa na internet.',
  ],
  'Rádiobudíky': [
    '{name} je rádiobudík od {brand}, ktorý spája budenie s rannym počúvaním rádia.',
    'Rádiobudík {name} od {brand} spája budenie s rannym počúvaním rádia.',
  ],
  'Digitálny príjem': [
    '{name} je prijímač od {brand}, ktorý sprostredkuje príjem digitálneho vysielania.',
    'Prijímač {name} od {brand} sprostredkuje príjem digitálneho vysielania.',
  ],
  'Multimediálne centra': [
    '{name} je multimediálne centrum od {brand}, ktoré rozšíri televízor o smart funkcie a prehrávanie obsahu z internetu.',
    'Multimediálne centrum {name} od {brand} rozšíri televízor o smart funkcie a prehrávanie obsahu z internetu.',
  ],
  'Video technika': [
    '{name} je zariadenie z video techniky od {brand}.',
    '{name} od {brand} patrí do kategórie video techniky.',
  ],
  'Kamery do autá': [
    '{name} je kamera do auta od {brand}, ktorá zaznamenáva jazdu ako dôkazový materiál pre prípad nehody či poistnej udalosti.',
    'Autokamera {name} od {brand} slúži na priebežný záznam jazdy a je nápomocná pri riešení dopravných situácií.',
  ],
  'DVB-T antény': [
    '{name} je anténa od {brand}, určená na príjem pozemného digitálneho televízneho vysielania.',
    'Anténa {name} od {brand} je určená na príjem pozemného digitálneho televízneho vysielania.',
  ],
  'Mikrofóny': [
    '{name} je mikrofón od {brand}.',
    'Mikrofón {name} od {brand} doplní domácu audio zostavu.',
  ],
  'Diaľkové ovládače': [
    '{name} je diaľkový ovládač od {brand}, ktorý nahradí pôvodný alebo stratený ovládač k zariadeniu.',
    'Diaľkový ovládač {name} od {brand} nahradí pôvodný alebo stratený ovládač k zariadeniu.',
  ],
  'AV káble': [
    '{name} je prepojovací kábel/adaptér od {brand} pre pripojenie AV zariadení.',
    'Kábel/adaptér {name} od {brand} slúži na pripojenie AV zariadení.',
  ],
  'HDMI káble': [
    '{name} je HDMI kábel od {brand} na prenos obrazu a zvuku medzi zariadeniami.',
    'HDMI kábel {name} od {brand} prenesie obraz aj zvuk medzi zariadeniami.',
  ],
  'Príslušenstvo k TV, audio, video': [
    '{name} je príslušenstvo od {brand}, ktoré doplní zariadenia z kategórie TV, audio a video.',
    'Príslušenstvo {name} od {brand} doplní zariadenia z kategórie TV, audio a video.',
  ],
  'Audio technika – ostatné produkty': [
    '{name} je audio zariadenie od {brand}.',
    '{name} od {brand} patrí medzi audio zariadenia.',
  ],

  // --- Domáce spotrebiče -----------------------------------------------------------
  'Chladničky s mrazákom dole': [
    '{name} je kombinovaná chladnička s mrazákom dole od {brand}, určená ako hlavný chladiaci spotrebič v domácnosti.',
    'Kombinovaná chladnička {name} od {brand} má mrazák v spodnej časti a poslúži ako hlavný chladiaci spotrebič v domácnosti.',
  ],
  'Chladničky': [
    '{name} je chladnička od {brand}.',
    'Chladnička {name} od {brand} poslúži ako hlavný chladiaci spotrebič v domácnosti.',
  ],
  'Kombinované chladničky': [
    '{name} je kombinovaná chladnička s mrazničkou od {brand}.',
    'Kombinovaná chladnička {name} od {brand} spája chladiaci aj mraziaci priestor.',
  ],
  'Monoklimatické chladničky': [
    '{name} je jednodverová (monoklimatická) chladnička od {brand}, vhodná napríklad ako menšia alebo doplnková chladnička.',
    'Jednodverová chladnička {name} od {brand} sa hodí napríklad ako menšia alebo doplnková chladnička.',
  ],
  'Vstavané chladenie': [
    '{name} je vstavaný chladiaci spotrebič od {brand}, určený na zabudovanie do kuchynskej linky.',
    'Vstavaný chladiaci spotrebič {name} od {brand} je určený na zabudovanie do kuchynskej linky.',
  ],
  'Vinotéky a vitríny': [
    '{name} je vinotéka/chladiaca vitrína od {brand} na skladovanie vína alebo nápojov pri optimálnej teplote.',
    'Vinotéka {name} od {brand} uskladní víno alebo nápoje pri optimálnej teplote.',
  ],
  'Zásuvkové mrazničky': [
    '{name} je zásuvková mraznička od {brand}.',
    'Zásuvková mraznička {name} od {brand} doplní chladiacu zostavu v kuchyni.',
  ],
  'Pultové mrazničky': [
    '{name} je pultová (truhlicová) mraznička od {brand}, vhodná na skladovanie väčšieho množstva mrazených potravín.',
    'Pultová mraznička {name} od {brand} je vhodná na skladovanie väčšieho množstva mrazených potravín.',
  ],
  'Práčky zepředu plnené': [
    '{name} je práčka s predným plnením od {brand}.',
    'Práčka {name} od {brand} má predné plnenie.',
  ],
  'Práčky s vrchným plnením': [
    '{name} je práčka s vrchným plnením od {brand}, vhodná najmä do menších priestorov.',
    'Práčka {name} od {brand} má vrchné plnenie, vhodné najmä do menších priestorov.',
  ],
  'Sušičky': [
    '{name} je sušička bielizne od {brand}.',
    'Sušička bielizne {name} od {brand} vysuší prádlo bez nutnosti sušiaka.',
  ],
  'Príslušenstvo k práčkam a sušičkám': [
    '{name} je príslušenstvo od {brand} k práčke alebo sušičke.',
    'Príslušenstvo {name} od {brand} je určené k práčke alebo sušičke.',
  ],
  'Sušiaky na bielizeň': [
    '{name} je sušiak na bielizeň od {brand}.',
    'Sušiak na bielizeň {name} od {brand} poslúži na sušenie prádla bez sušičky.',
  ],
  'Vstavané umývačky 60 cm': [
    '{name} je vstavaná umývačka riadu (60 cm) od {brand}, určená na zabudovanie do kuchynskej linky.',
    'Vstavaná umývačka riadu {name} od {brand} (60 cm) je určená na zabudovanie do kuchynskej linky.',
  ],
  'Vstavané umývačky 45 cm': [
    '{name} je úzka vstavaná umývačka riadu (45 cm) od {brand}, vhodná do menších kuchýň.',
    'Vstavaná umývačka riadu {name} od {brand} (45 cm) je vhodná do menších kuchýň.',
  ],
  'Umývačky riad 60 cm': [
    '{name} je voľne stojaca umývačka riadu (60 cm) od {brand}.',
    'Voľne stojaca umývačka riadu {name} od {brand} má štandardnú šírku 60 cm.',
  ],
  'Umývačky riadu': [
    '{name} je umývačka riadu od {brand}.',
    'Umývačka riadu {name} od {brand} uľahčí umývanie riadu v domácnosti.',
  ],
  'Robotické vysávače': [
    '{name} je robotický vysávač od {brand}, ktorý upratuje domácnosť samostatne bez potreby manuálneho ovládania.',
    'Robotický vysávač {name} od {brand} zvládne upratovanie samostatne, bez manuálneho ovládania.',
  ],
  'Tyčové vysávače': [
    '{name} je tyčový (bezvreckový) vysávač od {brand}.',
    'Tyčový vysávač {name} od {brand} je bezvreckový.',
  ],
  'Podlahové vysávače': [
    '{name} je podlahový vysávač od {brand}.',
    'Podlahový vysávač {name} od {brand} poslúži na bežné upratovanie domácnosti.',
  ],
  'Aku vysávače': [
    '{name} je akumulátorový (bezdrôtový) vysávač od {brand}.',
    'Akumulátorový vysávač {name} od {brand} umožňuje upratovanie bez kábla.',
  ],
  'Vysávače': [
    '{name} je vysávač od {brand}.',
    'Vysávač {name} od {brand} poslúži na upratovanie domácnosti.',
  ],
  'Príslušenstvo k vysávačom': [
    '{name} je príslušenstvo od {brand} k vysávaču.',
    'Príslušenstvo {name} od {brand} je určené k vysávaču.',
  ],
  'Filtre do vysávačov': [
    '{name} je náhradný filter od {brand} do vysávača.',
    'Filter {name} od {brand} je náhrada do vysávača.',
  ],
  'Vrecká do vysávačov': [
    '{name} sú vrecká do vysávača od {brand}.',
    'Vrecká {name} od {brand} sú náhrada do vysávača.',
  ],
  'Parné mopy a čističe': [
    '{name} je parný mop/čistič od {brand} na hĺbkové čistenie podláh bez chemikálií.',
    'Parný mop/čistič {name} od {brand} umyje podlahy do hĺbky bez chemikálií.',
  ],
  'Mopy a upratovacie súpravy': [
    '{name} je mop/upratovacia súprava od {brand}.',
    'Mop {name} od {brand} uľahčí upratovanie domácnosti.',
  ],
  'Čističe okien': [
    '{name} je čistič okien od {brand}.',
    'Čistič okien {name} od {brand} uľahčí umývanie okien bez šmúh.',
  ],
  'Fritézy': [
    '{name} je teplovzdušná fritéza od {brand}, na prípravu jedál s minimom oleja.',
    'Teplovzdušná fritéza {name} od {brand} pripraví jedlo s minimom oleja.',
  ],
  'Fritézy a hrnce': [
    '{name} je fritéza/hrniec od {brand}.',
    '{name} od {brand} patrí medzi fritézy a hrnce.',
  ],
  'Multifunkčné hrnce': [
    '{name} je multifunkčný hrniec od {brand}, ktorý nahradí viacero kuchynských spotrebičov naraz.',
    'Multifunkčný hrniec {name} od {brand} nahradí viacero kuchynských spotrebičov naraz.',
  ],
  'Pomalé hrnce': [
    '{name} je pomalý hrniec (slow cooker) od {brand} na dlhé, šetrné dusenie jedla.',
    'Pomalý hrniec {name} od {brand} je určený na dlhé, šetrné dusenie jedla.',
  ],
  'Parné hrnce': [
    '{name} je parný hrniec od {brand} na prípravu jedla v pare.',
    'Parný hrniec {name} od {brand} pripraví jedlo v pare.',
  ],
  'Hrnce': [
    '{name} sú hrnce od {brand}.',
    'Hrniec {name} od {brand} doplní kuchynské vybavenie.',
  ],
  'Panvice': [
    '{name} je panvica od {brand}.',
    'Panvica {name} od {brand} doplní kuchynské nádobie.',
  ],
  'Elektrické panvice': [
    '{name} je elektrická panvica od {brand}.',
    'Elektrická panvica {name} od {brand} sa hodí na varenie aj tam, kde nie je klasický sporák.',
  ],
  'Elektrické grily': [
    '{name} je elektrický gril od {brand}.',
    'Elektrický gril {name} od {brand} poslúži na grilovanie priamo v domácnosti.',
  ],
  'Grily, pekárne, variče': [
    '{name} je kuchynský spotrebič od {brand} (gril/pekáreň/varič).',
    '{name} od {brand} patrí medzi kuchynské spotrebiče (gril/pekáreň/varič).',
  ],
  'Vstavané pečúce rúry': [
    '{name} je vstavaná rúra na pečenie od {brand}, určená na zabudovanie do kuchynskej linky.',
    'Vstavaná rúra {name} od {brand} je určená na zabudovanie do kuchynskej linky.',
  ],
  'Sporáky a rúry': [
    '{name} je sporák/rúra od {brand}.',
    '{name} od {brand} patrí medzi sporáky a rúry.',
  ],
  'Vstavané rúry': [
    '{name} je vstavaná rúra od {brand}.',
    'Vstavaná rúra {name} od {brand} je určená na zabudovanie do kuchynskej linky.',
  ],
  'Elektrické sporáky': [
    '{name} je elektrický sporák od {brand}.',
    'Elektrický sporák {name} od {brand} doplní kuchynskú zostavu.',
  ],
  'Vstavané mikrovlnné rúry': [
    '{name} je vstavaná mikrovlnná rúra od {brand}.',
    'Vstavaná mikrovlnná rúra {name} od {brand} je určená na zabudovanie do kuchynskej linky.',
  ],
  'Mikrovlnné rúry': [
    '{name} je mikrovlnná rúra od {brand}.',
    'Mikrovlnná rúra {name} od {brand} ohreje aj rozmrazí jedlo za pár minút.',
  ],
  'Indukčné varné dosky': [
    '{name} je indukčná varná doska od {brand}.',
    'Varná doska {name} od {brand} využíva indukčný ohrev.',
  ],
  'Sklokeramické varné dosky': [
    '{name} je sklokeramická varná doska od {brand}.',
    'Sklokeramická varná doska {name} od {brand} doplní kuchynskú linku.',
  ],
  'Plynové varné dosky': [
    '{name} je plynová varná doska od {brand}.',
    'Plynová varná doska {name} od {brand} doplní kuchynskú linku.',
  ],
  'Varné dosky': [
    '{name} je varná doska od {brand}.',
    'Varná doska {name} od {brand} doplní kuchynskú linku.',
  ],
  'Elektrické variče': [
    '{name} je elektrický varič od {brand}.',
    'Elektrický varič {name} od {brand} poslúži na varenie tam, kde nie je klasický sporák.',
  ],
  'Výsuvné, výklopné digestory': [
    '{name} je výsuvný/výklopný digestor od {brand} na odsávanie pary a pachov spod kuchynskej linky.',
    'Výsuvný/výklopný digestor {name} od {brand} odsaje paru a pachy spod kuchynskej linky.',
  ],
  'Komínové digestory': [
    '{name} je komínový digestor od {brand}.',
    'Komínový digestor {name} od {brand} odsaje paru a pachy pri varení.',
  ],
  'Digestory': [
    '{name} je digestor od {brand}.',
    'Digestor {name} od {brand} odsaje paru a pachy pri varení.',
  ],
  'Stolové mixéry': [
    '{name} je stolový mixér od {brand}.',
    'Stolový mixér {name} od {brand} sa hodí na prípravu cesta, krémov či pyré.',
  ],
  'Tyčové mixéry': [
    '{name} je tyčový mixér od {brand}.',
    'Tyčový mixér {name} od {brand} rozmixuje polievky, omáčky či pyré.',
  ],
  'Kuchynské roboty': [
    '{name} je kuchynský robot od {brand}, ktorý zvládne miesenie, šľahanie či krájanie priamo v jednom zariadení.',
    'Kuchynský robot {name} od {brand} zvládne miesenie, šľahanie aj krájanie v jednom zariadení.',
  ],
  'Kuchynské roboty a krájače': [
    '{name} je kuchynský robot/krájač od {brand}.',
    '{name} od {brand} patrí medzi kuchynské roboty a krájače.',
  ],
  'Príslušenstvo ku kuchynským robotom': [
    '{name} je príslušenstvo od {brand} ku kuchynskému robotu.',
    'Príslušenstvo {name} od {brand} je určené ku kuchynskému robotu.',
  ],
  'Šľahače': [
    '{name} je ručný šľahač od {brand}.',
    'Ručný šľahač {name} od {brand} uľahčí šľahanie cesta či šľahačky.',
  ],
  'Krájače potravín': [
    '{name} je krájač potravín od {brand}.',
    'Krájač potravín {name} od {brand} uľahčí krájanie surovín na rovnaké plátky.',
  ],
  'Elektrické sekáčiky': [
    '{name} je elektrický sekáčik od {brand}.',
    'Elektrický sekáčik {name} od {brand} rýchlo nasekáče potraviny.',
  ],
  'Odšťavovače': [
    '{name} je odšťavovač od {brand}.',
    'Odšťavovač {name} od {brand} pripraví čerstvú šťavu z ovocia či zeleniny.',
  ],
  'Lisy na citrusy': [
    '{name} je lis na citrusy od {brand}.',
    'Lis na citrusy {name} od {brand} vylisuje šťavu z citrusového ovocia.',
  ],
  'Ryžovary': [
    '{name} je ryžovar od {brand}.',
    'Ryžovar {name} od {brand} uvarí ryžu bez nutnosti hlásenia.',
  ],
  'Rýchlovarné kanvice': [
    '{name} je rýchlovarná kanvica od {brand}.',
    'Rýchlovarná kanvica {name} od {brand} zohreje vodu za pár minút.',
  ],
  'Filtračné kanvice': [
    '{name} je filtračná kanvica od {brand} na jednoduchú filtráciu vody z vodovodu.',
    'Filtračná kanvica {name} od {brand} jednoducho odfiltruje vodu z vodovodu.',
  ],
  'Príslušenstvo pre filtračné kanvice': [
    '{name} je náhradný filter/príslušenstvo od {brand} pre filtračnú kanvicu.',
    'Náhradný filter {name} od {brand} je určený pre filtračnú kanvicu.',
  ],
  'Kávovary a espressá': [
    '{name} je kávovar od {brand}.',
    'Kávovar {name} od {brand} pripraví kávu priamo doma.',
  ],
  'Automatická espressá': [
    '{name} je automatický espresso kávovar od {brand}, ktorý pripraví kávu na stlačenie jedného tlačidla.',
    'Automatický espresso kávovar {name} od {brand} pripraví kávu na stlačenie jedného tlačidla.',
  ],
  'Pákové kávovary': [
    '{name} je pákový kávovar od {brand}.',
    'Pákový kávovar {name} od {brand} pripraví espresso tradičným spôsobom.',
  ],
  'Kávovary na kapsle': [
    '{name} je kapsulový kávovar od {brand}.',
    'Kapsulový kávovar {name} od {brand} pripraví kávu z kávových kapsúl.',
  ],
  'Kávové kapsle': [
    '{name} sú kávové kapsule od {brand}.',
    'Kapsule {name} od {brand} sú určené do kapsulového kávovaru.',
  ],
  'Príslušenstvo ku kávovarom': [
    '{name} je príslušenstvo od {brand} ku kávovaru.',
    'Príslušenstvo {name} od {brand} je určené ku kávovaru.',
  ],
  'Moka kanvice a frenchpressy': [
    '{name} je moka kanvica/frenchpress od {brand} na prípravu kávy tradičným spôsobom.',
    '{name} od {brand} slúži na prípravu kávy tradičným spôsobom.',
  ],
  'Prekvapkávače': [
    '{name} je prekvapkávač od {brand} na prípravu prekvapkávanej kávy.',
    'Prekvapkávač {name} od {brand} pripraví kávu prekvapkávaním.',
  ],
  'Príprava nápojov': [
    '{name} je spotrebič od {brand} na prípravu nápojov.',
    '{name} od {brand} slúži na prípravu nápojov.',
  ],
  'Káva': [
    '{name} je produkt od {brand} z kategórie príprava kávy.',
    '{name} od {brand} patrí do kategórie príprava kávy.',
  ],
  'Hriankovače': [
    '{name} je hriankovač od {brand}.',
    'Hriankovač {name} od {brand} pripraví hrianky na raňajky.',
  ],
  'Sendvičovače': [
    '{name} je sendvičovač/toaster od {brand}.',
    'Sendvičovač {name} od {brand} pripraví teplý sendvič alebo toast.',
  ],
  'Vaflovače': [
    '{name} je vaflovač od {brand}.',
    'Vaflovač {name} od {brand} pripraví čerstvé vafle priamo doma.',
  ],
  'Palacinkovače': [
    '{name} je palacinkovač od {brand}.',
    'Palacinkovač {name} od {brand} uľahčí prípravu palaciniek.',
  ],
  'Pece na pizzu': [
    '{name} je pec na pizzu od {brand}.',
    'Pec na pizzu {name} od {brand} upečie pizzu ako z reštaurácie.',
  ],
  'Naparovacie žehličky': [
    '{name} je naparovacia žehlička od {brand}.',
    'Naparovacia žehlička {name} od {brand} uľahčí žehlenie bielizne.',
  ],
  'Naparovače odevov': [
    '{name} je naparovač odevov od {brand} na rýchle odstránenie záhybov bez žehliacej dosky.',
    'Naparovač odevov {name} od {brand} rýchlo odstráni záhyby bez žehliacej dosky.',
  ],
  'Žehličky': [
    '{name} je žehlička od {brand}.',
    'Žehlička {name} od {brand} uľahčí žehlenie bielizne.',
  ],
  'Žehliace dosky': [
    '{name} je žehliaca doska od {brand}.',
    'Žehliaca doska {name} od {brand} doplní vybavenie na žehlenie.',
  ],
  'Príslušenstvo k žehlenie': [
    '{name} je príslušenstvo od {brand} k žehleniu.',
    'Príslušenstvo {name} od {brand} je určené k žehleniu.',
  ],
  'Vákuovačky a zváračky': [
    '{name} je vákuovačka od {brand} na predĺženie trvanlivosti potravín.',
    'Vákuovačka {name} od {brand} predĺži trvanlivosť potravín.',
  ],
  'Vákuovačky a zváračky fólií': [
    '{name} je vákuovačka/zváračka fólií od {brand}.',
    'Vákuovačka/zváračka fólií {name} od {brand} predĺži trvanlivosť potravín.',
  ],
  'Príslušenstvo pre vákuovačky a zváračky': [
    '{name} je príslušenstvo od {brand} k vákuovačke.',
    'Príslušenstvo {name} od {brand} je určené k vákuovačke.',
  ],
  'Zmrzlinovače a jogurtovače': [
    '{name} je zmrzlinovač/jogurtovač od {brand} na domácu prípravu zmrzliny alebo jogurtu.',
    'Zmrzlinovač/jogurtovač {name} od {brand} pripraví domácu zmrzlinu alebo jogurt.',
  ],
  'Výrobníky ľadu': [
    '{name} je výrobník ľadu od {brand}.',
    'Výrobník ľadu {name} od {brand} pripraví ľad kedykoľvek počas dňa.',
  ],
  'Sušičky potravín': [
    '{name} je sušička potravín od {brand}.',
    'Sušička potravín {name} od {brand} pripraví sušené ovocie, zeleninu alebo bylinky.',
  ],
  'Kuchynské váhy': [
    '{name} sú kuchynské váhy od {brand}.',
    'Kuchynská váha {name} od {brand} presne odváži suroviny pri varení a pečení.',
  ],
  'Kuchynské potreby': [
    '{name} sú kuchynské potreby od {brand}.',
    '{name} od {brand} patrí medzi kuchynské potreby.',
  ],
  'Kuchynské nádobie': [
    '{name} je kuchynské nádobie od {brand}.',
    '{name} od {brand} patrí medzi kuchynské nádobie.',
  ],
  'Ostatné kuchynské potreby': [
    '{name} je kuchynská potreba od {brand}.',
    '{name} od {brand} patrí medzi kuchynské potreby.',
  ],
  'Kuchynské nože a nožnice': [
    '{name} sú kuchynské nože/nožnice od {brand}.',
    'Nôž/nožnice {name} od {brand} doplnia kuchynské vybavenie.',
  ],
  'Varešky, Naberačky, Obracačky, Kliešte': [
    '{name} je kuchynské náčinie od {brand}.',
    '{name} od {brand} je kuchynské náčinie na varenie a pečenie.',
  ],
  'Pečúce formy': [
    '{name} je pečiaca forma od {brand}.',
    'Pečiaca forma {name} od {brand} sa hodí na pečenie koláčov či chleba.',
  ],
  'Dózy na potraviny': [
    '{name} sú dózy na potraviny od {brand}.',
    'Dózy {name} od {brand} uskladnia potraviny prehľadne a čerstvo.',
  ],
  'Poháre a fľaše': [
    '{name} je pohár/fľaša od {brand}.',
    'Pohár/fľaša {name} od {brand} doplní vybavenie kuchyne.',
  ],
  'Termosky a termohrnčeky': [
    '{name} je termoska/termohrnček od {brand}.',
    'Termoska {name} od {brand} udrží nápoj teplý alebo studený na cestách.',
  ],
  'Chladiace tašky a boxy': [
    '{name} je chladiaca taška/box od {brand}.',
    'Chladiaca taška/box {name} od {brand} udrží potraviny chladné na cestách.',
  ],
  'Príslušenstvo k malým spotrebičom': [
    '{name} je príslušenstvo od {brand} k malému kuchynskému spotrebiču.',
    'Príslušenstvo {name} od {brand} je určené k malému kuchynskému spotrebiču.',
  ],
  'Vykurovacie telesá, radiátory': [
    '{name} je vykurovacie teleso/radiátor od {brand}.',
    'Vykurovacie teleso {name} od {brand} doplní kúrenie v domácnosti.',
  ],
  'Vykurovacie telesá': [
    '{name} je vykurovacie teleso od {brand}.',
    'Vykurovacie teleso {name} od {brand} doplní kúrenie v domácnosti.',
  ],
  'Ohrievače vody': [
    '{name} je ohrievač vody od {brand}.',
    'Ohrievač vody {name} od {brand} zabezpečí teplú vodu v domácnosti.',
  ],
  'Čističky vzduchu': [
    '{name} je čistička vzduchu od {brand}.',
    'Čistička vzduchu {name} od {brand} zbaví vzduch v miestnosti prachu a alergénov.',
  ],
  'Odvlhčovače vzduchu': [
    '{name} je odvlhčovač vzduchu od {brand}.',
    'Odvlhčovač vzduchu {name} od {brand} zníži vlhkosť v miestnosti.',
  ],
  'Aroma difuzéry': [
    '{name} je aróma difuzér od {brand}.',
    'Aróma difuzér {name} od {brand} rozvonia miestnosť éterickými olejmi.',
  ],
  'Ventilátory': [
    '{name} je ventilátor od {brand}.',
    'Ventilátor {name} od {brand} ochladí miestnosť prúdením vzduchu.',
  ],
  'Vzduchotechnika': [
    '{name} je zariadenie vzduchotechniky od {brand}.',
    '{name} od {brand} patrí do kategórie vzduchotechniky.',
  ],
  'Meteostanice': [
    '{name} je meteostanica od {brand}.',
    'Meteostanica {name} od {brand} zobrazí aktuálne počasie priamo doma.',
  ],
  'Upratovacie pomôcky': [
    '{name} je upratovacia pomôcka od {brand}.',
    'Upratovacia pomôcka {name} od {brand} uľahčí upratovanie domácnosti.',
  ],
  'Čistiace prostriedky': [
    '{name} je čistiaci prostriedok od {brand}.',
    'Čistiaci prostriedok {name} od {brand} uľahčí čistenie domácnosti.',
  ],
  'Potreby pre domácnosť': [
    '{name} je potreba pre domácnosť od {brand}.',
    '{name} od {brand} doplní vybavenie domácnosti.',
  ],
  'Na párty a oslavy': [
    '{name} je produkt od {brand} na párty a oslavy.',
    '{name} od {brand} sa hodí na párty a oslavy.',
  ],
  'Ostatné domáce spotrebiče': [
    '{name} je domáci spotrebič od {brand}.',
    'Domáci spotrebič {name} od {brand} doplní vybavenie domácnosti.',
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
  {
    // Electrolux umývačky radu 600/700 so SatelliteClean + AirDry (rovnaká platforma naprieč viacerými modelmi)
    codes: ['100001090909', '100001248099', '100000424131', '100002065226', '100001920284',
      '100002103212', '100001920287', '100002200402', '100002067386'],
    heading: 'Umývanie SatelliteClean a sušenie AirDry',
    paragraphs: [
      'Táto umývačka riadu má ostrekovacie rameno SatelliteClean, ktoré oproti štandardnému systému poskytuje až 3-násobne lepšie pokrytie priestoru a umýva riad od rohu k rohu. Technológia AirDry pred koncom programu automaticky pootvorí dvierka asi na 10 cm, čím sa vďaka prirodzenému prúdeniu vzduchu dosiahne až 3-násobne lepšie sušenie než pri zatvorených dvierkach.',
      'Zásuvka MaxiFlex je uspôsobená na príbor a kuchynské náčinie rôznych tvarov vďaka posuvným priečkam, gumené podpery SoftSpike bezpečne držia na mieste aj krehké poháre.',
    ],
  },
  {
    codes: ['100002074204', '100002074255', '100002130864', '100002103178'], // Gorenje indukčné varné dosky
    heading: 'Ovládanie SmartControl a funkcie BigZone/PowerBoost',
    paragraphs: [
      'Táto indukčná varná doska od Gorenje má dotykové ovládanie SmartControl na jednoduché a presné nastavenie teploty, automatické rozpoznanie riadu, funkciu BigZone pre veľké hrnce a PowerBoost na rýchlejší ohrev.',
      'Súčasťou je aj detská poistka, indikátor zostatkového tepla a časovač varenia.',
    ],
  },
  {
    codes: ['100002202673'], // Beko B5RCNA375HXB1 HarvestFresh
    heading: 'Technológia HarvestFresh',
    paragraphs: [
      'Táto chladnička má v zásuvke na ovocie a zeleninu technológiu HarvestFresh - špeciálne osvetlenie striedajúce červené, zelené a modré svetlo, ktoré napodobňuje prirodzený cyklus denného svetla a pomáha dlhšie zachovať vitamíny a čerstvosť potravín.',
      'Systém NeoFrost Dual Cooling používa samostatné chladiace okruhy pre chladničku a mrazničku, vďaka čomu udržiava stabilnú teplotu a optimálnu vlhkosť a zabraňuje premiešavaniu pachov medzi oboma priestormi.',
    ],
  },
  {
    codes: ['100002196970', '100002104849'], // Beko EnergySpin práčky
    heading: 'Technológia EnergySpin',
    paragraphs: [
      'Táto práčka má technológiu EnergySpin, ktorá vďaka inovatívnym pohybom bubna šetrí energiu aj pri bežných programoch (bavlna, syntetika, rýchle pranie) - úspora až 35 % oproti energetickej triede A.',
      'Senzory OptiSense pri každom praní prispôsobia množstvo vody a spotrebu energie presne množstvu vloženej bielizne. Program Denný Express dokáže vyprať plnú náplň pri 30 °C za 28 minút.',
    ],
  },
  // --- TV, audio a video: davka 12 (True Bezdrôtové, Drôtové slúchadlá) ------------
  {
    codes: ['100002164092'], // Apple AirPods Pro 3
    heading: 'Najlepšie ANC od Apple a snímanie tepu',
    paragraphs: [
      'AirPods Pro 3 majú podľa Apple najlepšie aktívne potlačenie hluku (ANC) v slúchadlách do uší na svete - odfiltrujú až 2-násobne viac hluku než AirPods Pro 2. Dosiahnuté je to vďaka ultra-tichým mikrofónom, výpočtovému spracovaniu zvuku a novým penovým nadstavcom pre lepšiu pasívnu izoláciu.',
      'Výdrž so zapnutým ANC je do 8 hodín na jedno nabitie (o 33 % viac než predchádzajúca generácia), s puzdrom spolu až 24 hodín. Slúchadlá aj puzdro majú krytie IP57 a po prvý raz dokážu snímať tepovú frekvenciu a rozoznať vyše 50 typov cvičení v aplikácii Fitness.',
    ],
  },
  {
    codes: ['100001949702', '100001953409'], // HyperX Cloud III (Black, Red)
    heading: 'Herné slúchadlá s DTS Headphone:X',
    paragraphs: [
      'HyperX Cloud III majú 53mm meniče s neodýmovými magnetmi a frekvenčný rozsah 10 Hz - 21 kHz. Doživotná aktivácia DTS Headphone:X poskytuje presný priestorový 3D zvuk pre hranie.',
      'Vankúšiky z pamäťovej peny a vypchatý hlavový oblúk sú navrhnuté na pohodlie pri dlhších herných reláciách, slúchadlá fungujú na PC, PS5, PS4, Xbox Series X|S, Xbox One, Nintendo Switch, Macu aj mobiloch.',
    ],
  },
  {
    codes: ['100001090716'], // Lamax T10 4K GPS
    heading: 'Záznam v 4K a GPS databáza rizikových miest',
    paragraphs: [
      'Lamax T10 4K GPS zaznamenáva video v rozlíšení 4K (3840×2160 px) so širokým uhlom záberu 170° a technológiou Wide Dynamic Range, ktorá zlepšuje kvalitu obrazu pri vysokom kontraste - v noci aj pri priamom slnku.',
      'Vstavaná GPS s pravidelne aktualizovanou databázou rizikových miest, 2,45" IPS displej, Wi-Fi na ovládanie z telefónu a G-senzor, ktorý pri náraze automaticky spustí parkovací režim.',
    ],
  },
  {
    codes: ['100001950962'], // Navitel R900 4K
    heading: 'Záznam v 4K so snímačom Sony STARVIS',
    paragraphs: [
      'Navitel R900 4K zaznamenáva video v rozlíšení Ultra HD 4K (3840×2160 px, 30 fps) vďaka snímaču Sony STARVIS a 7-vrstvovej sklenej šošovke s IR filtrom, ktorá zachytáva detaily aj pri slabom osvetlení či v protisvetle.',
      'Superkondenzátor namiesto klasickej batérie odoláva extrémnym teplotám bez rizika prehriatia. Súčasťou je darčekový poukaz na 12-mesačnú licenciu aplikácie Navitel Navigator s mapami 47 krajín.',
    ],
  },
  {
    codes: ['100001091847'], // Pioneer PLX-1000
    heading: 'Priamy náhon s vysokým točivým momentom',
    paragraphs: [
      'Pioneer PLX-1000 je gramofón s priamym náhonom a vysokým točivým momentom 4,5 kg/cm, vďaka ktorému dosiahne rýchlosť 33⅓ otáčky za minútu už za 0,3 sekundy. Robustná konštrukcia s gumeným lemovaním tlmí vibrácie, nízkorezonančné rameno má tvar písmena S.',
      'Pitch fader s rozsahom ±8 %, ±16 % a ±50 %, odpojiteľná kabeláž a LED osvetlenie. Súčasťou balenia je slipmat, kĺzavý papier, ochranný plexi kryt, headshell a potrebné káble.',
    ],
  },
  {
    codes: ['100002201926'], // Strong LEAP-NOVA 4K Google TV Stick
    heading: 'Google TV so 4K obrazom a Wi-Fi 6',
    paragraphs: [
      'Strong LEAP-NOVA beží na systéme Android TV 14 s rozhraním Google TV, procesor Amlogic S905X5M dopĺňajú 2 GB RAM a 32 GB úložiska. Pripojenie cez Wi-Fi 6 a Bluetooth 5.4.',
      'Výstup HDMI 2.1 podporuje obraz 4K pri 60 fps s Dolby Vision, HDR10, Dolby Atmos, DTS a AV1. Súčasťou balenia je bluetooth diaľkový ovládač s mikrofónom pre ovládanie hlasom cez Google Assistant.',
    ],
  },
  {
    codes: ['100000910018'], // Yamaha RX-V6A
    heading: 'Priestorový zvuk Dolby Atmos a MusicCast',
    paragraphs: [
      'Yamaha RX-V6A je 7.2-kanálový AV receiver so 100 W na kanál, ktorý podporuje Dolby Atmos aj DTS:X. Sedem HDMI vstupov a jeden výstup zvládnu videosignál až 8K/60 alebo 4K/120 vrátane prechodu HDR10 a HDR10+.',
      'Vstavané Wi-Fi, Bluetooth, AirPlay 2, Spotify Connect a multi-room systém MusicCast umožňujú streamovanie hudby do ďalších miestností. Automatická kalibrácia priestoru YPAO nastaví zvuk podľa akustiky izby, k dispozícii je aj samostatný fono vstup pre gramofón.',
    ],
  },
  {
    codes: ['100002063314', '100002063315'], // Yamaha R-N1000A (Black, Silver)
    heading: 'Sieťový zosilňovač s MusicCast a DAC ESS Sabre',
    paragraphs: [
      'Yamaha R-N1000A je sieťový stereo zosilňovač s DAC ESS Technology Sabre ES9080Q (384 kHz/32-bit) a podporou hi-res formátov ALAC do 96 kHz, FLAC/WAV/AIFF do 384 kHz.',
      'Automatická korekcia akustiky YPAO doladí zvuk podľa priestoru, režim Pure Direct prenáša signál najkratšou možnou cestou. Kompatibilný s multi-room systémom Yamaha MusicCast a streamovacími službami ako Spotify či Amazon Music.',
    ],
  },
  {
    codes: ['100002134326'], // Kaon MZ-104 4K satelitný prijímač Skylink
    heading: 'Prvý 4K prijímač pre Skylink',
    paragraphs: [
      'Kaon MZ-104 je prvý satelitný prijímač s podporou 4K (UHD) obrazu určený pre Skylink, s vstavaným bezkartovým dekodérom Nagravision. Chipset Broadcom BCM72174 s 2 GB RAM zvládne príjem SD, HD aj UHD kanálov v kompresiách MPEG-2, MPEG-4/H.264 a HEVC (DVB-S/DVB-S2).',
      'Ide o hybridný prijímač - okrem klasického satelitného príjmu vie naplno využívať aj IPTV službu Skylink Live TV cez LAN alebo vstavané Wi-Fi. Podporuje programovateľné nahrávanie (PVR) na USB a funkciu Timeshift.',
    ],
  },
  {
    codes: ['100002203349', '100002202469', '100002203356'], // Roborock Qrevo Edge 2 (+ Pro varianty)
    heading: 'Sacia sila 25 000 Pa a samočistiaci mop',
    paragraphs: [
      'Roborock Qrevo Edge 2 má saciu silu 25 000 Pa (HyperForce) a systém hlavnej kefy DuoDivide s bočnou kefou FlexiArm, ktorý zvládne aj vlasy dlhé do 40 cm bez zamotania. Podvozok AdaptiLift automaticky prispôsobuje výšku podľa typu podlahy a zvláda koberce s vlasom do 3 cm.',
      'Pri prechode na koberec sa mop automaticky odpojí, aby ho nezamočil. Dokovacia stanica umýva mopy horúcou vodou (100 °C), následne ich vysuší teplým vzduchom (55 °C) proti plesniam a zápachu, a prach z robota vysype do vrecka na dobu až 65 dní.',
    ],
  },
  {
    codes: ['100002136486'], // Ninja Foodi Flex Drawer AF500EU
    heading: 'Technológia DualZone a MegaZone',
    paragraphs: [
      'Ninja Foodi Flex Drawer má objem 10,4 l a 7 funkcií (horkovzdušné pečenie, pečenie, sušenie, kysnutie, prihrievanie, udržiavanie teploty, vysúšanie). Zásuvkový oddeľovač umožňuje piecť v dvoch 5,2l zónach naraz s rôznym časom aj teplotou (DualZone), alebo ho vybrať a získať jednu veľkú zásuvku MegaZone s celým objemom 10,4 l.',
      'Funkcia Smart Finish uvarí dve jedlá dvoma rôznymi spôsobmi naraz, Match Cook zase zosynchronizuje nastavenia oboch zásuviek. Nepriľnavé zásuvky Crisp sú vhodné do umývačky riadu.',
    ],
  },
  {
    codes: ['340910016043'], // Krups EA 810 B (rad Essential)
    heading: 'Nastaviteľná teplota a hrubosť mletia',
    paragraphs: [
      'Krups EA 810 B z radu Essential má zásobník na 260 g kávových zŕn a 1,7l nádržku na vodu. Ponúka 3 úrovne teploty vody a 3 stupne hrubosti mletia, takže si možno prípravu kávy prispôsobiť podľa chuti.',
      'Súčasťou je parná tryska na prípravu penového mlieka do cappuccina a prehľadný LCD displej na ovládanie.',
    ],
  },
  {
    codes: ['100002136525'], // Ninja Blast MAX BC251EUGY
    heading: 'Nabíjateľný mixér na cesty',
    paragraphs: [
      'Ninja Blast MAX má výkonnejší motor než pôvodný model Blast a oceľové čepele integrované priamo v 570 ml nádobe, ktoré rozdrvia mrazené ovocie, zeleninu aj ľad v priebehu sekúnd. Na jedno nabitie zvládne až 25 mixovaní.',
      'Odnímateľná nádoba Twist & Go má nepresakujúce viečko s pitným otvorom a rukoväť na prenášanie, vhodná je aj do umývačky riadu. K dispozícii sú 3 režimy - automatické programy Crush a Smoothie, aj manuálne miešanie.',
    ],
  },
  {
    codes: ['100001919299'], // Smeg KLF04WHEU
    heading: 'Regulácia teploty v retro dizajne 50. rokov',
    paragraphs: [
      'Smeg KLF04 spája ikonický retro dizajn 50. rokov s reguláciou teploty vody v 7 stupňoch od 50 do 100 °C, takže voda má vždy presne takú teplotu, akú si daný nápoj (napr. zelený čaj alebo detská výživa) vyžaduje. Funkcia udržania teploty udrží nastavenú teplotu až 20 minút.',
      'Telo je z práškovanej nerezovej ocele, súčasťou je vyberateľný filter proti vodnému kameňu, systém tichého otvárania veka Soft Opening a otočná základňa 360°.',
    ],
  },
  {
    // iRobot Roomba Plus xxx Combo - rad s dokovacou stanicou AutoWash (na rozdiel od
    // zakladnych radov 105/115/205 bez "Plus" v nazve, ktore AutoWash Dock nemaju).
    codes: ['100002134755', '100002134756', '100002203429', '100002134757', '100002134758', '100002203399', '100002203430'],
    heading: 'Dokovacia stanica AutoWash a mopovacie podložky DualClean',
    paragraphs: [
      'Tento robotický vysávač iRobot Roomba Plus Combo má 4 úrovne sacieho výkonu a rotujúce mopovacie podložky DualClean. Technológia Dirt Detect rozpozná väčšie mokré aj suché nečistoty a danú oblasť automaticky prejde znova, funkcia SmartScrub pridá intenzívnejšie drhnutie pri odolnejších škvrnách.',
      'Súčasťou je dokovacia stanica AutoWash, ktorá po upratovaní vyprázdni nádobu na prach, umyje mopovacie podložky a sama sa aj vysuší. Na jedno nabitie upratuje až 120 minút, potom sa vráti na dobitie a pokračuje tam, kde skončil.',
    ],
  },
  {
    codes: ['100002136675'], // Shark IW3612EU Detect Pro Auto-Empty
    heading: 'Auto-Empty stanica a technológia DirtDetect',
    paragraphs: [
      'Tyčový vysávač Shark Detect Pro rozpozná znečistenie pomocou technológií DirtDetect (automaticky zvýši výkon podľa množstva nečistoty), EdgeDetect (dôkladnejšie vysáva pri stenách) a LightDetect. LED displej zobrazuje stav batérie, aktuálny režim aj mieru znečistenia.',
      'Súčasná dokovacia stanica Auto-Empty vysávač sama vyprázdni, HEPA filter zachytáva jemné častice a alergény. Výdrž batérie je do 60 minút, kefa je samočistiaca proti zamotávaniu chlpov, a vysávač sa dá okamžite premeniť na ručný.',
    ],
  },
  {
    // LG pracky s AI DD + TurboWash 360 - spolocna platforma cez cely aktualny rad F...
    codes: ['100001048929', '100002129733', '100001958796', '100002127826', '100002067666',
      '100002202702', '100002065295', '100001958795', '100001958777'],
    heading: 'Technológia AI DD a TurboWash 360°',
    paragraphs: [
      'Táto práčka má technológiu AI DD, ktorá pri každom praní rozpozná nielen hmotnosť, ale aj jemnosť tkaniny, a podľa toho automaticky zvolí optimálny spôsob otáčania bubna. Systém TurboWash 360° sprchuje bielizeň prúdom vody zo 4 smerov, vďaka čomu dokáže dôkladne vyprať za 39 minút.',
      'Motor Inverter Direct Drive je pripojený priamo k bubnu bez remeňa, čo znižuje opotrebovanie a hlučnosť - LG naň poskytuje 10-ročnú záruku.',
    ],
  },
  {
    // LG kombinovane chladnicky s DoorCooling+ a linearnym invertorovym kompresorom
    codes: ['100002202671', '100002200324', '100002200327', '100002200328', '100002200321',
      '100002200322', '100002200319', '100002200320', '100002202677', '100002130386'],
    heading: 'Technológia DoorCooling+ a lineárny kompresor',
    paragraphs: [
      'Táto chladnička má technológiu DoorCooling+, ktorá rovnomerne rozvádza chladný vzduch aj do dverí - nápoje uložené vo dverách sa tak chladia rýchlejšie a potraviny zostávajú čerstvé dlhšie.',
      'Lineárny invertorový kompresor LG udržiava teplotné výkyvy v rozmedzí len ±0,5 °C vďaka technológii LinearCooling, čo pomáha zachovať čerstvosť potravín až 7 dní, a zároveň je tichší a energeticky úspornejší než bežný kompresor.',
    ],
  },
  {
    // Candy pracky rady Smart Touch/RFID (oznacenie "-S" v kode modelu)
    codes: ['100002203001', '100002203000', '100002203718', '100002203412', '100002202992',
      '100002202996', '100002203002', '100002202994', '100002202995', '100002203030', '100002172289'],
    heading: 'Ovládanie cez aplikáciu hOn',
    paragraphs: [
      'Táto práčka sa dá pripojiť k aplikácii hOn, cez ktorú si možno vybrať z vyše 60 pracích programov, sledovať spotrebu vody a energie, alebo dostávať odporúčania na dávkovanie pracieho prostriedku podľa typu látky či farby.',
      'Aplikácia umožňuje aj ovládanie na diaľku a prepojenie s hlasovými asistentmi Amazon Alexa a Google Assistant.',
    ],
  },
  {
    // Whirlpool mikrovlnne ruty s technologiou 6. zmysel (senzorove automaticke varenie)
    codes: ['100001462279', '100001942574', '100002067339', '100002129594', '100002129596', '100002129598', '100002129592'],
    heading: 'Technológia 6. zmysel',
    paragraphs: [
      'Táto mikrovlnná rúra má technológiu Whirlpool 6. zmysel - senzory rozpoznajú pripravované jedlo a priebežne upravujú čas, teplotu aj výkon počas varenia, rozmrazovania či ohrevu, takže sa netreba spoliehať len na odhad.',
      'Súčasťou je menu s desiatkami automatických receptov na prípravu bez nutnosti ručného nastavovania. Niektoré modely majú navyše funkciu Crisp so špeciálnou platničkou, ktorá zaisťuje chrumkavý výsledok zo spodu aj z vrchu jedla pri nižšom obsahu tuku.',
    ],
  },
  {
    codes: ['100002142406', '100002142413'], // Instant Pot Pro WiFi, Plus WiFi
    heading: 'Funkcia 10v1 a ovládanie cez aplikáciu Instant Connect',
    paragraphs: [
      'Tento multifunkčný hrniec Instant Pot zvláda 10 funkcií v jednom - tlakové varenie, pomalé varenie, restovanie, varenie ryže, naparovanie, sous-vide, pečenie, prípravu jogurtu, udržiavanie teploty a funkciu Nutriboost na chutnejšie vývary a dusené jedlá.',
      'Cez aplikáciu Instant Connect je možné varenie spustiť a sledovať na diaľku, aplikácia prevedie celým procesom krok za krokom vrátane odhadu zostávajúceho času. Vnútorná nádoba je z potravinárskej nehrdzavejúcej ocele bez BPA, PFOA a PTFE povlakov.',
    ],
  },
  {
    codes: ['100000431932'], // Tefal Ultimate Pure FV9865E0
    heading: 'Žehliaca plocha Durilium AirGlide s Autoclean',
    paragraphs: [
      'Tefal Ultimate Pure FV9865E0 má maximálny parný ráz 250 g/min a plynulý výstup pary 60 g/min pri príkone 3000 W na rýchle zahriatie. Žehliaca plocha Durilium AirGlide s technológiou Autoclean sa čistí prakticky sama a vyžaduje minimum údržby.',
      'Jedinečný filter Micro Calc Filter zachytáva čiastočky vodného kameňa väčšie ako 0,2 mm a zabraňuje škvrnám na bielizni. Funkcia Automatic Steam sama zvolí správne množstvo pary podľa nastavenej teploty látky, žehlička sa dá použiť aj na zvislé naparovanie.',
    ],
  },
  {
    codes: ['100001831867'], // Lamax X7.2
    heading: 'Záznam v 4K so stabilizáciou MAXsmooth',
    paragraphs: [
      'Lamax X7.2 zaznamenáva video v 4K pri 30 fps s elektronickou stabilizáciou MAXsmooth, prípadne v 2,7K/30 fps, FullHD až do 60 fps alebo spomalený záznam 1080p/120 fps. Fotografie majú rozlíšenie 16 Mpx.',
      'Kamera je bez puzdra vodotesná do 12 m, s priloženým puzdrom až do 40 m. Súčasťou je 2" TFT LCD displej, Wi-Fi, port na externý mikrofón a batéria s výdržou do 2 hodín na jedno nabitie.',
    ],
  },
  {
    codes: ['100002196845'], // Evolveo Dcolor GD2
    heading: 'Certifikovaný Google TV box so 4K obrazom',
    paragraphs: [
      'Evolveo Dcolor GD2 je oficiálne certifikovaný Google TV box so vstavaným Chromecastom. Procesor Amlogic S905Y4 dopĺňajú 2 GB RAM a 32 GB úložiska, systém beží na Google TV 12 (na báze Androidu).',
      'Obraz podporuje rozlíšenie 4K Ultra HD s HDR10+ a zvukom Dolby cez HDMI výstup až do 60 fps, pripojenie je možné cez Ethernet alebo Wi-Fi (2,4 aj 5 GHz). Diaľkový ovládač má mikrofón na hlasové ovládanie cez Google Assistant.',
    ],
  },
  {
    codes: ['100002129692'], // Victrola VTA-830SB-BLK Century Signature
    heading: '6-v-1 hudobné centrum',
    paragraphs: [
      'Victrola Century Signature je 6-v-1 hudobné centrum s 3-rýchlostným gramofónom (33⅓, 45 a 78 ot./min), CD prehrávačom, kazetovou mechanikou, FM rádiom, Bluetooth streamovaním a vstavanými stereo reproduktormi.',
      'Technológia Vinyl Stream umožňuje streamovať zvuk z gramofónu bezdrôtovo do externého Bluetooth reproduktora. Telo je z reálneho dreva a súčasťou dizajnu je aj analógové hodiny v retro štýle.',
    ],
  },
  {
    codes: ['100000229586'], // Sony STR-DH190
    heading: 'Vstavané Bluetooth a fono vstup pre gramofón',
    paragraphs: [
      'Sony STR-DH190 je stereo receiver s výkonom 2× 100 W (8 Ω, 1 kHz) a vstavaným Bluetooth na bezdrôtové streamovanie hudby. Fono vstup umožňuje priame pripojenie gramofónu bez potreby samostatného predzosilňovača.',
      'K dispozícii sú 4 stereo RCA vstupy, 3,5mm vstup, FM tuner s 30 predvoľbami staníc a možnosť pripojiť až 4 reproduktory s prepínaním A/B pre samostatné zóny.',
    ],
  },
  {
    // Gorenje kombinovane chladnicky s technologiou NoFrost Plus (IonAir + MultiFlow 360 + AdaptTech)
    codes: ['100000855951', '100002200368', '100001857835', '100000841790', '100001880277',
      '100002074222', '100002202001', '100002202005', '100002134244', '100002074226',
      '100002074227', '100001124079', '100000861973', '100002201377'],
    heading: 'Technológia NoFrost Plus',
    paragraphs: [
      'Táto chladnička má systém NoFrost Plus, ktorý zabraňuje tvorbe námrazy a ľadu v mrazničke a vysychaniu potravín v chladničke - odpadá tak ručné odmrazovanie a dá sa využiť celý vnútorný priestor.',
      'Súčasťou je aj technológia IonAir, ktorá vysiela záporne nabité ióny čistiace vzduch a potláčajúce baktérie aj zápach, ventilačný systém MultiFlow 360° s 14 otvormi na rovnomerné rozvedenie chladného vzduchu, a AdaptTech, ktorý priebežne sleduje spôsob používania chladničky a upravuje teplotu tak, aby jedlo zostalo čerstvé pri nižšej spotrebe energie.',
    ],
  },
  {
    // Beko umyvacky s ramenami CornerIntense/AquaIntense (spolocna platforma)
    codes: ['100001790102', '100002126788', '100002201814', '100002148305'],
    heading: 'Umývacie ramená CornerIntense a AquaIntense',
    paragraphs: [
      'Táto umývačka riadu má rameno CornerIntense, ktoré sa namiesto kruhového pohybu pohybuje po štvorci - vďaka tomu sa voda dostane aj do rohov umývačky a umyje riad rovnako dobre ako v strede spodného koša.',
      'Prídavné rameno AquaIntense umyje aj najpripečenejšie zvyšky bez namáčania a drhnutia, funkcia SteamGloss zase pridá na konci umývania paru a teplotu 60 °C, aby sklo a poháre zostali dokonale naleštené bez matného nádychu.',
    ],
  },
  {
    codes: ['100000776671'], // Yamaha A-S3200
    heading: 'Referenčný zosilňovač s vyváženým zapojením',
    paragraphs: [
      'Yamaha A-S3200 je vlajkovým Hi-Fi zosilňovačom radu A-S, postaveným okolo veľkého toroidného transformátora a symetrického (Floating and Balanced) zapojenia zosilňovacích stupňov, ktoré potláča skreslenie a šum už na úrovni obvodu.',
      'Súčasťou je fonopredzosilňovač pre MM aj MC gramofónové vložky a motorický ALPS regulátor hlasitosti, ktorý umožňuje jemné doladenie úrovne aj diaľkovým ovládačom bez straty presnosti.',
    ],
  },
  {
    codes: ['100001916627', '100001916628'], // Yamaha R-N2000A (BLACK/SILVER)
    heading: 'Sieťový prijímač s MusicCast a ESS Sabre DAC',
    paragraphs: [
      'Yamaha R-N2000A je vlajkovým sieťovým stereo prijímačom, ktorý spája výkonný zosilňovač s DAC čipom ESS Sabre Pro a s podporou MusicCast na streamovanie hudby zo sieťových úložísk aj online služieb do viacerých miestností súčasne.',
      'Vstavaný fonopredzosilňovač pre MM aj MC gramofónové vložky a FM/AM tuner robia z prijímača kompletné centrum domáceho audiosystému bez potreby ďalších komponentov.',
    ],
  },
  {
    codes: ['100000776667', '100000776668'], // Yamaha A-S1200 (BLACK/SILVER)
    heading: 'Integrovaný zosilňovač s ESS Sabre DAC',
    paragraphs: [
      'Yamaha A-S1200 kombinuje analógový zosilňovací stupeň s digitálno-analógovým prevodníkom ESS Sabre, ktorý spracuje aj signál privedený cez USB či optický/koaxiálny digitálny vstup z počítača alebo prehrávača.',
      'Vstavaný fonopredzosilňovač podporuje MM aj MC gramofónové vložky, samostatný výstup na slúchadlá s vlastným zosilňovačom je určený na počúvanie bez reproduktorov.',
    ],
  },
  {
    codes: ['100002063316', '100002066147', '100002066148'], // Yamaha R-N800A, R-N600A (BLACK/SILVER)
    heading: 'Sieťový prijímač s MusicCast',
    paragraphs: [
      'Tento sieťový stereo prijímač podporuje technológiu MusicCast, vďaka ktorej dokáže streamovať hudbu zo sieťových úložísk, obľúbených streamovacích služieb aj z Bluetooth zariadení a súčasne prehrávať rovnakú alebo inú skladbu v ďalších miestnostiach s MusicCast reproduktormi.',
      'Vstavaný fonopredzosilňovač umožňuje priame pripojenie gramofónu bez ďalšieho zariadenia, ovládanie cez appku MusicCast Controller funguje aj bez klasického diaľkového ovládača.',
    ],
  },
  {
    codes: ['100002102281'], // LG GSXE90EVAD
    heading: 'Door-in-Door a AI DualCool',
    paragraphs: [
      'LG GSXE90EVAD je americká chladnička so systémom Door-in-Door, ktorý umožňuje siahnuť po často používaných potravinách a nápojoch cez menšie vnútorné dvierka bez otvorenia celej chladničky - vnútri tak zostáva stabilnejšia teplota.',
      'Technológia AI DualCool má samostatné chladiace okruhy pre chladiaci a mraziaci priestor a pomocou senzorov a algoritmov prispôsobuje chladiaci výkon podľa toho, ako často a ako dlho dvierka otvárate.',
    ],
  },
  {
    codes: ['100002100840', '100002129550', '100002099792'], // Samsung Bespoke chladnicky RB53DG706BS9EO, RB38C607AS9/EF, RB38T607BS9/EF
    heading: 'SpaceMax a AI Energy Mode',
    paragraphs: [
      'Táto chladnička využíva technológiu SpaceMax s tenšou, ale výkonnejšou izoláciou stien, vďaka čomu ponúka väčší vnútorný úložný priestor pri zachovaní kompaktných vonkajších rozmerov.',
      'Funkcia AI Energy Mode sleduje spôsob používania chladničky a podľa toho automaticky upravuje jej chod tak, aby sa znížila spotreba energie bez vplyvu na čerstvosť potravín.',
    ],
  },
  {
    codes: ['100002123611'], // JBL PartyBox Ultimate
    heading: 'Výkon a svetelná show pre párty',
    paragraphs: [
      'JBL PartyBox Ultimate je najvýkonnejší reproduktor radu PartyBox, určený na ozvučenie väčších párty a záhradných akcií, s dynamickou svetelnou show synchronizovanou s hudbou po celom obvode aj vrchnej strane reproduktora.',
      'Vstavaný DJ pad s efektmi a možnosť pripojiť mikrofón aj gitaru priamo do reproduktora robia z neho samostatné ozvučovacie centrum bez potreby mixpultu, ovládanie doplní aplikácia JBL PartyBox.',
    ],
  },
  {
    codes: ['100002197529'], // Yamaha TRUE X SURROUND 50A (set)
    heading: 'Bezdrôtový surround s IntelliBeam kalibráciou',
    paragraphs: [
      'Súprava Yamaha True X Surround 50A dopĺňa true X soundbar o dvojicu bezdrôtových zadných reproduktorov, vďaka čomu vzniká kompletný priestorový zvukový systém s podporou Dolby Atmos a DTS:X bez nutnosti ťahať káble po miestnosti.',
      'Automatická kalibrácia IntelliBeam odmeria akustiku miestnosti pomocou priloženého mikrofónu a podľa nej doladí úroveň a časovanie jednotlivých reproduktorov na najlepší možný zvuk v danom priestore.',
    ],
  },
  {
    codes: ['100002103198'], // Electrolux EW9F7617SC
    heading: 'Technológia UltimateCare a SensiCare',
    paragraphs: [
      'Táto práčka využíva systém SensiCare, ktorý pomocou senzorov priebežne meria množstvo a typ bielizne v bubne a podľa toho automaticky upravuje spotrebu vody, energie aj dĺžku programu.',
      'Súčasťou je aj parné programy UltimateCare, ktoré pred praním uvoľnia vlákna látky parou a znížia tak počet záhybov, vďaka čomu je bielizeň po vypraní ľahšie žehliť.',
    ],
  },
  {
    codes: ['100001392482'], // Yamaha RX-A4A
    heading: 'AV receiver s priestorovým zvukom a MusicCast',
    paragraphs: [
      'Yamaha RX-A4A je viackanálový AV receiver s podporou Dolby Atmos a DTS:X, ktorý dokáže pomocou stropných alebo výškovo virtualizovaných reproduktorov vytvoriť plný priestorový zvuk pri sledovaní filmov aj hraní hier.',
      'Automatická kalibrácia YPAO s technológiou R.S.C. (Reflected Sound Control) zmeria akustiku miestnosti pomocou priloženého mikrofónu a potlačí nežiaduce odrazy zvuku od stien, receiver navyše podporuje sieťové streamovanie MusicCast.',
    ],
  },
  {
    // Whirlpool susicky so senzorom 6th Sense
    codes: ['100002203836', '100002141896', '100002141923', '100002141895', '100002141927', '100002203739'],
    heading: 'Senzorové sušenie 6th Sense',
    paragraphs: [
      'Táto sušička využíva senzorový systém 6th Sense, ktorý priebežne meria vlhkosť bielizne v bubne a sušenie automaticky ukončí presne vo chvíli, keď bielizeň dosiahne zvolený stupeň suchosti - bez zbytočného presúšania a plytvania energiou.',
      'Vďaka tomu netreba dopredu odhadovať dĺžku programu podľa váhy náplne, sušička si čas sama priebežne prepočítava podľa skutočného stavu bielizne.',
    ],
  },
  {
    // Electrolux susicky s tepelnym cerpadlom
    codes: ['100002103207', '100002102886', '100002103194', '100002102885'],
    heading: 'Tepelné čerpadlo a šetrné sušenie',
    paragraphs: [
      'Táto sušička pracuje s tepelným čerpadlom, ktoré vzduch v bubne neustále recykluje namiesto jeho vyfukovania von - vďaka tomu má oproti kondenzačným sušičkám s klasickým ohrevom výrazne nižšiu spotrebu energie pri rovnakom objeme bielizne.',
      'Nižšia pracovná teplota vzduchu je zároveň šetrnejšia k látkam náchylnejším na poškodenie teplom, čo predlžuje životnosť pravidelne sušenej bielizne.',
    ],
  },
  {
    // Electrolux pracky - SensiCare senzor rada EW7/EW8
    codes: ['100002200410', '100002102882'],
    heading: 'Senzor SensiCare',
    paragraphs: [
      'Táto práčka má systém SensiCare, ktorý pomocou senzorov v bubne rozpozná množstvo a savosť práve vloženej bielizne a podľa toho automaticky prispôsobí spotrebu vody a energie aj dĺžku prania.',
      'Vďaka priebežnému prispôsobovaniu netreba pred praním odhadovať program podľa typu látky nahrubo - práčka reaguje na skutočný stav náplne v bubne.',
    ],
  },
  {
    codes: ['100002141580'], // JBL PartyBox 520
    heading: 'Prenosný výkon a svetelná show',
    paragraphs: [
      'JBL PartyBox 520 je prenosný výkonný reproduktor s vlastnou batériou, dynamickou svetelnou show synchronizovanou s hudbou a odolnosťou voči striekajúcej vode (IPX4), vďaka čomu sa hodí rovnako do interiéru ako na terasu či záhradu.',
      'Cez appku JBL PartyBox je možné upravovať ekvalizér aj svetelné efekty, k reproduktoru sa dá pripojiť aj mikrofón alebo gitara na spev a hru naživo.',
    ],
  },
  {
    codes: ['100002063325', '100002063324', '100002063322'], // Yamaha True X Bar 50A/40A soundbary
    heading: 'Priestorový zvuk True X',
    paragraphs: [
      'Tento soundbar Yamaha z radu True X podporuje Dolby Atmos a DTS:X a pomocou virtualizácie výšky vytvára dojem priestorového zvuku prichádzajúceho aj zhora, hoci samotný soundbar stojí len pred televízorom.',
      'Rôzne zvukové režimy prispôsobia charakter zvuku typu obsahu - od filmov cez hudbu až po televízne správy - a soundbar sa dá neskôr rozšíriť o bezdrôtový subwoofer alebo zadné reproduktory.',
    ],
  },
  {
    codes: ['100002141907'], // Whirlpool WHFF 6404 X6E
    heading: 'Zásuvková mraznička so 6th Sense',
    paragraphs: [
      'Táto zásuvková mraznička využíva systém No Frost, ktorý zabraňuje tvorbe námrazy vo vnútri - odpadá tak potreba pravidelného ručného odmrazovania a zásuvky zostávajú ľahko vysúvateľné.',
      'Technológia 6th Sense priebežne sleduje podmienky vo vnútri mrazničky a upravuje jej chod tak, aby si potraviny udržali kvalitu pri nižšej spotrebe energie.',
    ],
  },
  {
    codes: ['100002103880', '100002129547'], // Samsung RB38C600CS9/EF, RB34C600CWW/EF
    heading: 'Technológia SpaceMax',
    paragraphs: [
      'Táto chladnička využíva technológiu SpaceMax s tenšou, ale rovnako účinnou izoláciou stien - vďaka nej ponúka väčší vnútorný úložný priestor bez toho, aby chladnička zaberala viac miesta v kuchyni.',
      'Systém All-around Cooling rozvádza chladný vzduch rovnomerne po celom vnútornom priestore cez viacero prieduchov, vďaka čomu je teplota v rôznych častiach chladničky vyrovnanejšia.',
    ],
  },
  {
    // Beko volne stojace kombinovane chladnicky s NeoFrost Dual Cooling
    codes: ['100002201698', '100002201699', '100002201701', '100002201692'],
    heading: 'NeoFrost Dual Cooling a HarvestFresh',
    paragraphs: [
      'Táto chladnička má systém NeoFrost Dual Cooling - dva samostatné chladiace okruhy pre chladničku a mrazničku, vďaka ktorým sa vzduch medzi nimi nemieša a v mrazničke sa netvorí námraza, takže ju netreba ručne odmrazovať.',
      'Technológia HarvestFresh strieda osvetlenie s farebným spektrom napodobňujúcim striedanie dňa a noci, čo má ovocie a zeleninu udržať dlhšie čerstvé a s vyšším obsahom živín. O tichý chod sa stará invertorový kompresor ProSmart.',
    ],
  },
  {
    codes: ['100002128137'], // Amica FK3666.2DFZHC
    heading: 'Total No Frost a zásuvka FreshZone',
    paragraphs: [
      'Táto chladnička má systém Total No Frost, ktorý udržiava rovnomernú vlhkosť a teplotu v chladničke aj mrazničke - vo vnútri sa netvorí námraza a odpadá potreba ručného odmrazovania.',
      'Zásuvka FreshZone udržiava teplotu tesne nad bodom mrazu (0 až 3 °C), vhodnú napríklad na mäso a ryby, filter FreshON zase odbúrava škodlivé plyny vo vnútri chladničky, aby si potraviny dlhšie zachovali čerstvosť.',
    ],
  },
  {
    codes: ['100000158713'], // Amica KGCR387100R
    heading: 'Retro dizajn s mechanickým ovládaním',
    paragraphs: [
      'Táto chladnička v retro dizajne má mechanické otočné ovládanie teploty s plynulým nastavením chladiaceho výkonu namiesto elektronického displeja, čo oceníte pri jednoduchej obsluhe bez nutnosti prechádzať menu.',
      'V mrazničke sú tri priestranné zásuvky s mraziacim výkonom 3 kg za deň, pri výpadku prúdu dokáže chladnička udržať teplotu potravín až 8 hodín.',
    ],
  },
  {
    codes: ['100001129750'], // Concept LA8383DS
    heading: 'Americká chladnička s Total No Frost',
    paragraphs: [
      'Táto americká chladnička radu Titania má technológiu Total No Frost, ktorá zabraňuje tvorbe námrazy v celom vnútornom priestore a zároveň zrýchľuje mrazenie - odpadá tak potreba ručného odmrazovania.',
      'Funkcia Vacation (dovolenka) obmedzí spotrebu energie počas dlhšej neprítomnosti a pritom zaručí, že potraviny zostanú v poriadku, ovládanie je cez podsvietený dotykový displej.',
    ],
  },
  {
    codes: ['100001540923'], // Candy CCGMEE9025PX/E
    heading: 'Multifunkčná rúra s pravým horúcim vzduchom',
    paragraphs: [
      'Táto rúra ponúka osem programov pečenia vrátane pravého horúceho vzduchu, klasického statického ohrevu, grilu a rozmrazovania, vďaka čomu sa dá prispôsobiť rôznym typom jedál aj receptov.',
      'Dvierka sú z dvojitého bezpečnostného skla s tangenciálnym chladením, ktoré udržiava vonkajší povrch dvierok počas pečenia chladnejší, programátor pečenia zase umožňuje nastaviť dĺžku aj odložený štart prípravy.',
    ],
  },
  {
    codes: ['100002100991'], // Guzzanti GZ 338DD
    heading: 'Presklená chladiaca vitrína',
    paragraphs: [
      'Táto presklená chladiaca vitrína má štyri nastaviteľné police a samozatváracie dvierka so zabudovaným zámkom, vďaka čomu sa hodí aj do prevádzok, kde treba tovar chrániť pred neoprávneným prístupom.',
      'Ventilovaný chladiaci systém s nastaviteľným termostatom udrží teplotu v rozmedzí od +2 °C do +18 °C aj pri vyššej okolitej teplote, chladenie beží na ekologickom chladive R600a.',
    ],
  },
  {
    codes: ['100001738413'], // Amica SIS 512 TCX
    heading: 'Indukčný sporák s funkciou SoftSteam',
    paragraphs: [
      'Táto multifunkčná rúra má 12 funkcií pečenia vrátane pravého horúceho vzduchu a grilu, funkcia SoftSteam pridá počas pečenia paru, vďaka čomu pečivo aj mäso zostanú šťavnatejšie.',
      'Funkcia rýchleho zohriatia dosiahne v rúre 150 °C už za štyri minúty, teda približne o pätinu rýchlejšie než bežne, katalytické samočistiace panely zase priebežne pohlcujú mastnotu zo stien rúry.',
    ],
  },
  {
    codes: ['100000475909'], // Yamaha XDA-AMP5400RK
    heading: 'Viaczónový zosilňovač pre multi-room inštalácie',
    paragraphs: [
      'Yamaha XDA-AMP5400RK je 8-kanálový zosilňovač v triede D určený na rozšírenie multi-room audio inštalácie o ďalšie zóny alebo výkon - každý kanál má výstup do 40 W pri 8 Ω a dá sa premostiť (bridge) pre vyšší výkon na menší počet reproduktorov.',
      'Štyri zbernice (audio buses) s priloženými prepojkami umožňujú rôzne konfigurácie rozvodu zvuku do viacerých miestností, zariadenie sa dá pripojiť aj na zónové výstupy (zone pre-out) kompatibilných Yamaha AV receiverov.',
    ],
  },
  {
    // Electrolux vstavane kombinovane chladnicky s TwinTech No Frost (600/700 rada)
    codes: ['100002099560', '100002204213', '100002204218', '100002204192'],
    heading: 'Technológia TwinTech No Frost',
    paragraphs: [
      'Táto vstavaná chladnička má systém TwinTech No Frost s dvoma samostatnými chladiacimi okruhmi pre chladničku a mrazničku - mraznička tak zostáva bez námrazy, zatiaľ čo v chladničke sa udržiava vyššia vlhkosť, aby potraviny nevysychali.',
      'Funkcia FastFreeze rýchlo zmrazí čerstvé potraviny a zachová tak viac vitamínov a pôvodnú chuť, po jej automatickom skončení sa mraznička vráti do bežného režimu.',
    ],
  },
  {
    codes: ['100002128098', '100002128097'], // Samsung DV90DG52A0ABLE / DV90DG52A0TELE
    heading: 'Sušička s tepelným čerpadlom a SmartThings',
    paragraphs: [
      'Táto sušička pracuje s tepelným čerpadlom, ktoré recykluje teplý vzduch späť do bubna namiesto jeho odvádzania von - vďaka tomu má oproti bežným kondenzačným sušičkám nižšiu spotrebu energie.',
      'Cez aplikáciu SmartThings je možné sušičku ovládať a sledovať priebeh programu na diaľku z telefónu, vrátane upozornenia na koniec sušenia.',
    ],
  },
  {
    codes: ['100002134702'], // Beko GNO5323XPN
    heading: 'Americká chladnička s Twin Cooling',
    paragraphs: [
      'Táto americká (Side by Side) chladnička má bez­námrazovú technológiu No Frost s dvojitým chladiacim systémom Twin Cooling, ktorý zabezpečuje rovnomerné chladenie v oboch častiach a zabraňuje tvorbe námrazy.',
      'Režim Holiday vypne chladiacu časť a ponechá v chode len mrazničku, čím sa počas dlhšej neprítomnosti šetrí energia, zvukový signál zase upozorní na dlhšie otvorené dvere.',
    ],
  },
  {
    codes: ['100000861971'], // Gorenje NRS8182KX
    heading: 'Americká chladnička s NoFrost Plus',
    paragraphs: [
      'Táto americká chladnička má technológiu NoFrost Plus, ktorá zabraňuje tvorbe ľadu v mraziacej časti a udržiava stabilnú teplotu aj vlhkosť, ventilačný systém MultiFlow 360° zase rovnomerne rozvádza vzduch po celom chladiacom priestore.',
      'Funkcia FastFreeze zmrazí potraviny pri teplote až -24 °C a po približne 26 hodinách sa automaticky vypne, režim HolidayMode zase obmedzí spotrebu energie počas dlhšej neprítomnosti na minimum.',
    ],
  },
  {
    codes: ['122772174555'], // Yamaha NS-777
    heading: 'Trojpásmové reproduktory s tienením',
    paragraphs: [
      'Yamaha NS-777 sú trojpásmové stĺpové reprosústavy s bassreflexovým vyladením a dvojicou 20cm basových meničov, doplnených stredotónovým a výškovým meničom - nominálny výkon je 100 W (250 W špičkovo) pri impedancii 6 Ω.',
      'Reproduktory sú magneticky tienené, vďaka čomu sa dajú umiestniť aj bližšie k obrazovke alebo iným citlivým zariadeniam bez rušenia obrazu.',
    ],
  },
  {
    codes: ['130290374555'], // Yamaha A-S701
    heading: 'Integrovaný zosilňovač s koncepciou ToP-ART',
    paragraphs: [
      'Yamaha A-S701 je stereo zosilňovač postavený na koncepcii ToP-ART (Total Purity Audio Reproduction Technology) so symetrickým usporiadaním ľavého a pravého kanála, ktoré má zaistiť čo najčistejší prenos signálu.',
      'Vstavaný fonopredzosilňovač umožňuje priame pripojenie gramofónu, digitálne vstupy (optický, koaxiálny, USB) zase pripoja aj počítač alebo iný digitálny zdroj zvuku bez potreby externého DAC.',
    ],
  },
  {
    codes: ['100000159595'], // Yamaha TT-N503 / MusicCast VINYL 500
    heading: 'Gramofón so sieťovým streamovaním MusicCast',
    paragraphs: [
      'Yamaha MusicCast VINYL 500 je gramofón s remeňovým pohonom, prednamontovanou MM prenoskou a vstavaným fonopredzosilňovačom, vďaka ktorému sa dá pripojiť priamo do akéhokoľvek zosilňovača bez ďalšieho zariadenia.',
      'Vstavané Wi-Fi a MusicCast umožňujú streamovať hudbu z platne bezdrôtovo do reproduktorov v ďalších miestnostiach, gramofón podporuje aj Bluetooth a AirPlay pre priame prehrávanie zo streamovacích služieb.',
    ],
  },
  {
    codes: ['100002103215'], // Electrolux LRT7ME39X
    heading: 'Monoklimatická chladnička s MultiFlow',
    paragraphs: [
      'Táto voľne stojaca monoklimatická chladnička (bez mrazničky) má funkciu MultiFlow, ktorá rovnomerne rozvádza chladený vzduch po celom vnútornom priestore a udržiava stabilnú teplotu.',
      'Zásuvka ExtraChill udržiava nižšiu teplotu než zvyšok chladničky vďaka aktívnej cirkulácii vzduchu, vhodnú napríklad na ryby, syry alebo studené misy.',
    ],
  },
  {
    codes: ['100000468219'], // Panasonic SC-MAX3500
    heading: 'Výkonný party systém s AIRQUAKE BASS',
    paragraphs: [
      'Panasonic SC-MAX3500 je výkonný domáci audio systém s 25cm superwooferom a funkciou AIRQUAKE BASS, ktorá pomocou bassreflexového portu prenáša basy bez straty rezonancie vznikajúcej za membránou reproduktora.',
      'Farebné osvetlenie reproduktorov sa synchronizuje s prehrávanou hudbou, appka MAX Juke umožňuje vytvárať playlisty a systém má aj vstavaný CD prehrávač a konektory pre mikrofóny na karaoke.',
    ],
  },
  {
    // Electrolux PerfectCare 700 pracky s vrchnym plnenim (SteamCare + SensiCare)
    codes: ['100001474465', '100001915625', '100002126591'],
    heading: 'SteamCare a senzor SensiCare',
    paragraphs: [
      'Táto práčka s vrchným plnením má parný program SteamCare, ktorý pomocou pary uvoľní vlákna látky a zníži počet záhybov až o tretinu, vďaka čomu je bielizeň po vypraní ľahšie žehliť.',
      'Systém SensiCare pomocou senzorov rozpozná množstvo a savosť bielizne v bubne a podľa toho automaticky upraví dĺžku prania aj spotrebu vody a energie.',
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

module.exports = { shouldEnrich, buildEnrichedDescription, isPoorDescription, looksStructured, PRODUCT_FACTS };

// ATOS posiela nazvy produktov v kategorii "Dialkove ovladace" po cesky ("Dalkovy ovladac...",
// "Univerzalni dalkovy ovladac...") - podla auditu (bod o vyhladavanych vyrazoch) ludia na
// Slovensku hladaju "diaľkový ovládač", nie česky tvar. translateCategoryName (translate-cz-sk.js)
// prekladá len kategórie, nie nazvy produktov, a jeho slovnik navyše prekladá "univerzální" na
// stredný rod ("univerzálne"), co by tu bolo gramaticky spravne len pri strednom rode - v nazve
// ovladaca (muzsky rod) potrebujeme "univerzálny". Preto samostatna, uzko zamerana funkcia s
// vlastnym zoznamom slov namiesto znovupouzitia zdielaneho kategorie-slovnika.

const WORD_MAP = {
  'dálkový': 'diaľkový',
  'dálkové': 'diaľkové',
  'dálkovým': 'diaľkovým',
  'dálkově': 'diaľkovo',
  'dialkovy': 'diaľkový',
  'dialkovym': 'diaľkovým',
  'univerzální': 'univerzálny',
  'ovladač': 'ovládač',
  'ovladače': 'ovládače',
  'ovladačem': 'ovládačom',
  'ovladačům': 'ovládačom',
  'ovladačů': 'ovládačov',
  'ovladacom': 'ovládačom',
  'ovládání': 'ovládanie',
  'tlačítkem': 'tlačidlom',
  'vysílač': 'vysielač',
  'originální': 'originálny',
  'stříbrný': 'strieborný',
  'černý': 'čierny',
  'šedý': 'sivý',
  'bílý': 'biely',
  'vrat': 'brán', // "k pohonu vrat" -> "k pohonu brán" (pohon brán)
};

// Frázové výnimky - kontrolujú sa pred prekladom po slovách, lebo doslovný preklad po slovách by
// dal negramatický tvar (napr. "na přání" nie je "na" + preložené "přání", je to celá fráza).
// (bez \b na konci - "í" nie je pre JS regex "word" znak, takze hranica slova za "přání" by
// nikdy nesedela; okolity kontext - medzery/koniec retazca - staci na jednoznacnu zhodu)
const PHRASE_MAP = [
  [/\bna přání(?![A-Za-zÁ-žá-ž])/gi, 'na želanie'],
];

function applyCase(original, translated) {
  if (original === original.toUpperCase()) return translated.toUpperCase();
  if (original[0] === original[0].toUpperCase() && original.slice(1) === original.slice(1).toLowerCase()) {
    return translated.charAt(0).toUpperCase() + translated.slice(1);
  }
  return translated;
}

function translateRemoteControlName(name) {
  if (!name) return name;
  let out = name;
  for (const [re, replacement] of PHRASE_MAP) out = out.replace(re, replacement);
  out = out.replace(/[A-Za-zÁ-žá-ž]+/g, (word) => {
    const translated = WORD_MAP[word.toLowerCase()];
    if (!translated) return word;
    return applyCase(word, translated);
  });
  return out;
}

module.exports = { translateRemoteControlName };

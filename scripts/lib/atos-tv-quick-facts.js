'use strict';

// ATOS popisy televízorov sú dodávateľská marketingová kópia, kde sa uhlopriečka aj
// pripojenie spomenú len v tabuľke "Technické specifikace" hlboko v texte (často
// za hranicou 5000 znakov) - Google Merchant Center atribút feedu `description` je
// ale tvrdo orezaný na 5000 znakov (support.google.com/merchants/answer/7052112),
// takže tieto fakty tam v skutočnosti nikdy nedorazia, hoci v HTML zdroji sú.
//
// Toto vytvorí krátku vetu s tými istými faktami (nič sa nevymýšľa - berie sa
// výhradne z TEXT_PROPERTIES, ktoré ATOS sám posiela, plus farba, ak ju uvádza
// priamo v názve produktu), určenú na vloženie na ÚPLNÝ ZAČIATOK popisu. Používa
// ju transform-atos.js (živý beh) aj inject-atos-tv-quick-facts.js (jednorazový
// dotiahnutie už vygenerovaného output/atos.xml) - obe zdieľajú rovnakú logiku,
// aby veta bola vždy rovnaká bez ohľadu na to, ktorá cesta ju vygenerovala.

const COLOR_WORDS = ['Bílá', 'Černá', 'Stříbrná', 'Šedá', 'Zlatá', 'Modrá', 'Červená', 'Zelená'];

// Rozdelenie na slová cez \p{L} (nie \b) - \b v JS regexe berie do úvahy len ASCII
// \w, takže pri slovách s diakritikou (í, á, ...) na konci reťazca "\bBílá\b"
// nikdy nenájde hranicu a nič nenamatchne.
function colorFromName(name) {
  const words = name.split(/[^\p{L}]+/u);
  for (const word of COLOR_WORDS) {
    if (words.some((w) => w.toLowerCase() === word.toLowerCase())) return word.toLowerCase();
  }
  return null;
}

// Meno parametra v ATOS feede -> slovo, ktorým sa má pripojenie spomenúť vo vete.
// Poradie určuje aj poradie vo výslednej vete.
const CONNECTION_PARAMS = [
  ['HDMI', 'HDMI'],
  ['Zabudovaná Wi-Fi', 'Wi-Fi'],
  ['USB port', 'USB'],
  ['LAN RJ45', 'LAN'],
  ['AV vstup', 'AV'],
];

function paramValue(paramPairs, name) {
  const hit = paramPairs.find(([n]) => n.trim().toLowerCase() === name.toLowerCase());
  return hit ? hit[1].trim() : null;
}

function connectionsFrom(paramPairs) {
  const found = [];
  for (const [paramName, label] of CONNECTION_PARAMS) {
    const v = paramValue(paramPairs, paramName);
    if (v && !/^(ne|nie|no|0)$/i.test(v) && !found.includes(label)) found.push(label);
  }
  return found;
}

// name: názov produktu (string). paramPairs: pole [meno, hodnota] z TEXT_PROPERTIES.
// Vráti null, ak produkt vôbec nemá uvedenú uhlopriečku (nie je to obrazovkový
// produkt, alebo ATOS pre neho tento parameter neposiela) - nič sa nedomýšľa.
function buildTvQuickFacts(name, paramPairs) {
  const diagonal = paramValue(paramPairs, 'Úhlopříčka');
  if (!diagonal) return null;

  const color = colorFromName(name);
  const connections = connectionsFrom(paramPairs);

  let sentence = `Úhlopříčka obrazovky ${diagonal}`;
  if (color) sentence += `, barva ${color}`;
  if (connections.length) sentence += `, připojení ${connections.join('/')}`;
  return sentence + '.';
}

module.exports = { buildTvQuickFacts };

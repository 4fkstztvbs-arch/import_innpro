// Televízory sa môžu doručovať len vybranými dopravami (SPS na adresu, Geis, osobný odber).
// Shoptet to rieši príznakom "Atypická doprava" na produkte: pri produkte s týmto príznakom
// ponúkne len dopravy označené ako "Dopravca pre atypický produkt". Na kategórii sa to
// nastaviť nedá, preto príznak posielame vo feede:
//   <ATYPICAL_PRODUCT><ATYPICAL_SHIPPING>1</ATYPICAL_SHIPPING></ATYPICAL_PRODUCT>
// (tvar prevzatý z exportu produktov zo Shoptetu, element sa vkladá za <LOGISTIC>).
//
// Príznak dostane len produkt zaradený priamo v kategórii "TV, audio, video a foto technika >
// Televízory", ktorý nie je príslušenstvo (kábel, držiak, projektor, slúchadlá...). Ostatným
// produktom sa element nezapisuje, aby sa neprepísalo ručné nastavenie v Shoptete.
//
// Beží po schválenom strome kategórií (kategória je už konečná). Je idempotentný.
//
// Usage: node scripts/apply-atypical-shipping-tv.js (prepisuje každý output/*.xml na mieste)
'use strict';

const fs = require('fs');
const path = require('path');
const { isUnavailableUpdate } = require('./lib/unavailable-update');

const OUT_DIR = path.join(__dirname, '..', 'output');
const TV_CATEGORY = 'TV, audio, video a foto technika > Televízory';
// Dodávatelia posielajú názvy po slovensky aj po česky (ATOS), preto obe podoby.
const ACCESSORY = /držiak|držák|kábel|kabel|ovládač|ovladač|stolík|stolek|konzol|puzdro|pouzdro|projektor|slúchadl|sluchátk|súprava|souprava|sada na|čistiac|čištění|adaptér|adapter|stojan|nosič|napájací|napájecí/i;
const FLAG = '<ATYPICAL_PRODUCT><ATYPICAL_SHIPPING>1</ATYPICAL_SHIPPING></ATYPICAL_PRODUCT>';

function unCdata(s) {
  return s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
}

function isTv(item) {
  const cats = [...item.matchAll(/<(?:CATEGORY|DEFAULT_CATEGORY)>([\s\S]*?)<\/(?:CATEGORY|DEFAULT_CATEGORY)>/g)]
    .map((m) => unCdata(m[1]));
  if (!cats.includes(TV_CATEGORY)) return false;
  const nameM = item.match(/<(?:PRODUCTNAME|NAME)>([\s\S]*?)<\/(?:PRODUCTNAME|NAME)>/);
  const name = nameM ? unCdata(nameM[1]) : '';
  return !!name && !ACCESSORY.test(name);
}

function applyToItem(item) {
  if (isUnavailableUpdate(item) || !isTv(item)) return item;
  if (/<ATYPICAL_PRODUCT>/.test(item)) {
    if (/<ATYPICAL_SHIPPING>[\s\S]*?<\/ATYPICAL_SHIPPING>/.test(item)) {
      return item.replace(/<ATYPICAL_SHIPPING>[\s\S]*?<\/ATYPICAL_SHIPPING>/, '<ATYPICAL_SHIPPING>1</ATYPICAL_SHIPPING>');
    }
    return item.replace('<ATYPICAL_PRODUCT>', '<ATYPICAL_PRODUCT><ATYPICAL_SHIPPING>1</ATYPICAL_SHIPPING>');
  }
  if (/<\/LOGISTIC>/.test(item)) return item.replace('</LOGISTIC>', '</LOGISTIC>\n' + FLAG);
  if (/<CURRENCY>/.test(item)) return item.replace('<CURRENCY>', FLAG + '\n<CURRENCY>');
  return item;
}

function applyToXml(xml) {
  let count = 0;
  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (item) => {
    const next = applyToItem(item);
    if (next !== item || (/<ATYPICAL_SHIPPING>1</.test(next) && isTv(next))) count++;
    return next;
  });
  return { out, count };
}

module.exports = { applyToXml, isTv };

if (require.main === module) {
  let total = 0;
  for (const file of fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.xml'))) {
    const filePath = path.join(OUT_DIR, file);
    const xml = fs.readFileSync(filePath, 'utf-8');
    const { out, count } = applyToXml(xml);
    if (out !== xml) fs.writeFileSync(filePath, out);
    if (count) console.log(`${file.replace('.xml', '')}: ${count} televízorov s atypickou dopravou`);
    total += count;
  }
  console.log(`apply-atypical-shipping-tv: ${total} televízorov`);
}

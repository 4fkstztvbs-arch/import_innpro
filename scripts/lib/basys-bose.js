'use strict';
// Spoločné pomôcky pre BASYS/Bose: hmotnosti produktov a zoznam Bose produktov mimo cenníka,
// ktoré sa v e-shope majú vždy zobrazovať ako "Na objednávku" (viď transform-basys.js).

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', '..', 'data');
const WEIGHTS_PATH = process.env.BASYS_BOSE_WEIGHTS || path.join(DATA_DIR, 'basys-bose-weights.json');
const ON_ORDER_PATH = process.env.BASYS_BOSE_ON_ORDER || path.join(DATA_DIR, 'basys-bose-on-order.json');

function normCode(s) { return String(s || '').replace(/[\s_‐-―]+/g, ' ').trim().toUpperCase(); }

let weightRules;
function loadWeightRules() {
  if (weightRules) return weightRules;
  weightRules = fs.existsSync(WEIGHTS_PATH)
    ? JSON.parse(fs.readFileSync(WEIGHTS_PATH, 'utf8')).rules.map((r) => ({ ...r, re: new RegExp(r.pattern, 'i') }))
    : [];
  return weightRules;
}

// Hmotnosť v kg podľa názvu produktu z cenníka (prvé zhodné pravidlo), alebo null, keď ju nepoznáme.
// Hmotnosť 0 sa nikdy nevracia - Shoptet ju používa na výpočet dopravy, "neznáma" patrí do prázdneho poľa.
function weightKgFor(name, objKod) {
  const rules = loadWeightRules();
  const hit = rules.find((r) => (r.codes && objKod && r.codes.some((c) => normCode(c) === normCode(objKod))) || (r.re && r.re.test(name || '')));
  return hit ? hit.kg : null;
}

let onOrder;
// Bose produkty, ktoré existujú v e-shope, ale nie sú v aktuálnom cenníku BaSys/Bose.
// Cena sa berie z BASYS feedu (resp. posledná známa z e-shopu, ak ich feed už neposiela),
// dostupnosť je vždy "Na objednávku" a produkt sa nikdy nevyradí z feedu.
function loadOnOrder() {
  if (onOrder) return onOrder;
  const list = fs.existsSync(ON_ORDER_PATH) ? JSON.parse(fs.readFileSync(ON_ORDER_PATH, 'utf8')).items : [];
  onOrder = new Map(list.map((it) => [normCode(it.objKod), it]));
  return onOrder;
}

const CATALOG_PATH = path.join(DATA_DIR, 'basys-bose-catalog.json');
const SHOP_SKUS_PATH = path.join(DATA_DIR, 'basys-bose-shop-skus.json');
let catalog, shopSkus;
const escH = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Popis z katalógu BaSys/Bose (PDF) + cenníka (xlsx) pre produkt z cenníka: nadpis, odstavec, odrážky, technický popis.
function catalogDescription(objKod) {
  if (!catalog) catalog = fs.existsSync(CATALOG_PATH) ? JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8')).items : {};
  const e = catalog[objKod] || Object.entries(catalog).find(([k]) => normCode(k) === normCode(objKod))?.[1];
  if (!e) return '';
  const parts = [];
  if (e.headline) parts.push(`<p><strong>${escH(e.headline)}</strong></p>`);
  if (e.paragraph) parts.push(`<p>${escH(e.paragraph)}</p>`);
  if (e.bullets && e.bullets.length) parts.push(`<ul>${e.bullets.map((b) => `<li>${escH(b)}</li>`).join('')}</ul>`);
  if (e.xlsxDescription) parts.push(`<p>${escH(e.xlsxDescription)}</p>`);
  return parts.join('\n');
}
// SKU, ktoré už majú kartu v e-shope (zapisuje build-bose-cennik-import.js --write-data).
function isInShop(objKod) {
  if (!shopSkus) shopSkus = new Set((fs.existsSync(SHOP_SKUS_PATH) ? JSON.parse(fs.readFileSync(SHOP_SKUS_PATH, 'utf8')).skus : []).map(normCode));
  return shopSkus.has(normCode(objKod));
}

const OFFICIAL_IMAGES_PATH = path.join(DATA_DIR, 'basys-bose-official-images.json');
let officialImages;
// Oficiálne fotky z bose.com (scripts/fetch-bose-official-images.js) pre SKU z cenníka; prázdne pole, keď ich nemáme.
function officialImagesFor(objKod) {
  if (!officialImages) {
    const items = fs.existsSync(OFFICIAL_IMAGES_PATH) ? JSON.parse(fs.readFileSync(OFFICIAL_IMAGES_PATH, 'utf8')).items : {};
    officialImages = new Map(Object.entries(items).map(([k, v]) => [normCode(k), v]));
  }
  return officialImages.get(normCode(objKod)) || [];
}

module.exports = { normCode, weightKgFor, loadOnOrder, catalogDescription, isInShop, officialImagesFor };

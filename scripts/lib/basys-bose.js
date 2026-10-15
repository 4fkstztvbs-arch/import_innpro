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

module.exports = { normCode, weightKgFor, loadOnOrder };

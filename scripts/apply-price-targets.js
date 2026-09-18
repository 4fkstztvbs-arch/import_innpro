// Prepíše ceny priamo v už hotových output/*.xml podľa data/heureka-reports/price-targets.json,
// bez čakania na ďalší beh dodávateľa.
//
// PREČO: dodávateľské behy sú raz denne v nočnom okne (22:10–23:00 UTC), ale e-shop má cez deň
// nastavené aj aktualizačné importy. Keď sa nový Heureka report spracuje napoludnie, jeho ceny by
// sa bez tohto skriptu dostali do feedov až v noci a k zákazníkovi až nasledujúce ráno. Tento
// skript ich zapíše hneď, takže ich vyzdvihne najbližší denný aktualizačný import.
//
// Maržové dno sa NEPREBERÁ z reportu, počíta sa z <PURCHASE_PRICE>/<PURCHASE_VAT>, ktoré feed
// nesie — je to tá istá nákupná cena, s akou feed vznikol, takže dno vyjde rovnako ako pri behu
// dodávateľa. Feedy bez nákupnej ceny (MONACOR, WiiM) tak ostanú nedotknuté; applyHeurekaPriceTarget
// pri chýbajúcej nákupnej cene cenu zámerne nemení.
//
// Opakované spustenie používa rovnakú referenčnú cenu a konkurenčné ponuky z reportu.
// Pri nezmenenej nákupnej cene preto ďalší beh už nič neprepisuje.
//
// Rovnaký vypínač ako živé prepisovanie v transformoch: bez HEUREKA_PRICE_OVERRIDE=1 sa nerobí nič.
//
// Usage: node apply-price-targets.js [--xml=output/kb.xml] [--nasucho]

const fs = require('fs');
const path = require('path');
const { applyHeurekaPriceTarget, OVERRIDE_ENABLED, TARGETS_PATH } = require('./heureka-price-targets');

const OUT_DIR = path.join(__dirname, '..', 'output');
const ARG_XML = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length);
const NASUCHO = process.argv.includes('--nasucho');
const XML_PATHS = ARG_XML ? [ARG_XML]
  : fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.xml')).sort().map((f) => path.join(OUT_DIR, f));

// Hranica, pod ktorou sa tovar vylučuje z plateného Heureka CPC feedu (CPC klik by zožral
// neprimeranú časť zisku). Jediná časť HEUREKA_HIDDEN, ktorá závisí od ceny — preto jediná,
// ktorú tu vieme a musíme prehodnotiť.
const PRICE_BELOW = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'heureka-hidden-categories.json'), 'utf-8')).priceBelow || 0;

const tag = (s, t) => s.match(new RegExp(`<${t}>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?</${t}>`, 's'))?.[1]?.trim();
const num = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };

// Solight je z kategóriového aj cenového HEUREKA_HIDDEN pravidla zámerne vyňatý (na žiadosť
// 2026-08-11, viď transform-solight.js) — zasiahlo by 88 % jeho sortimentu. Bez tejto výnimky by
// tento skript pri prvom behu vylúčil 368 solightových produktov, čo overil suchý beh.
const BEZ_CENOVEHO_PRAVIDLA = new Set(['solight.xml']);

function spracuj(xmlPath) {
  const cenovePravidlo = !BEZ_CENOVEHO_PRAVIDLA.has(path.basename(xmlPath));
  const xml = fs.readFileSync(xmlPath, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let zmenene = 0, skryte = 0;
  let suma = 0;

  const out = items.map((rest) => {
    const ean = tag(rest, 'EAN');
    const cena = num(tag(rest, 'PRICE_VAT'));
    const nakup = num(tag(rest, 'PURCHASE_PRICE'));
    const dph = num(tag(rest, 'PURCHASE_VAT'));
    if (!ean || cena === null || nakup === null || dph === null) return rest;

    const nova = applyHeurekaPriceTarget(ean, cena, nakup, dph);
    if (!Number.isFinite(nova) || nova === cena) return rest;

    zmenene++;
    suma += cena - nova;
    let novy = rest.replace(/<PRICE_VAT>.*?<\/PRICE_VAT>/, `<PRICE_VAT>${nova.toFixed(2)}</PRICE_VAT>`);

    // Len jednosmerne: keď cena klesne pod hranicu, tovar sa z plateného feedu vylúči. Opačný
    // smer sa zámerne nerobí — z XML sa nedá zistiť, či HEUREKA_HIDDEN nastavilo cenové pravidlo
    // alebo kategória/CPC pravidlo, a ponechať tovar vylúčený je lacnejšia chyba než ho začať
    // propagovať proti rozhodnutiu, ktoré tu nevidíme. Pri najbližšom behu dodávateľa sa to
    // aj tak prepočíta nanovo.
    if (cenovePravidlo && PRICE_BELOW > 0 && nova < PRICE_BELOW && !/<HEUREKA_HIDDEN>/.test(novy)) {
      novy = novy.replace(/<PRICE_VAT>/, '<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>\n<PRICE_VAT>');
      skryte++;
    }
    return novy;
  });

  const nazov = path.basename(xmlPath);
  if (zmenene && !NASUCHO) fs.writeFileSync(xmlPath, head + out.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`${nazov}: ${zmenene} cien${NASUCHO ? ' (nasucho, nezapísané)' : ''}`
    + `, zmena spolu ${suma >= 0 ? '−' : '+'}${Math.abs(suma).toFixed(2)} €`
    + (skryte ? `, vylúčené z Heureka CPC (pod ${PRICE_BELOW} €): ${skryte}` : ''));
  return zmenene;
}

if (!OVERRIDE_ENABLED) {
  console.log('HEUREKA_PRICE_OVERRIDE nie je 1 — ceny sa neprepisujú (rovnaký vypínač ako v transformoch).');
  process.exit(0);
}
if (!fs.existsSync(TARGETS_PATH)) {
  console.log(`${TARGETS_PATH} neexistuje — niet čo aplikovať.`);
  process.exit(0);
}
let spolu = 0;
for (const p of XML_PATHS) spolu += spracuj(p);
console.log(`Spolu prepísaných cien: ${spolu}`);

// Poistka proti useknutému feedu. Shoptet má import nastavený tak, že **produkt, ktorý v súbore
// nie je, zmaže** — nie skryje. Keď teda dodávateľ vráti feed, ktorý je technicky platný, ale
// neúplný (zotavujúci sa server, výpadok databázy, zmena API), transform prebehne bez chyby,
// zapíše skrátené XML, workflow ho commitne a Shoptet zmaže presne toľko produktov, koľko vo
// feede chýba — aj s ich URL, hodnoteniami a históriou.
//
// Transformy padajú len vtedy, keď sa feed vôbec nedá stiahnuť. Práve prípad "stiahol sa a je
// krátky" je ten nebezpečný, a ten tento skript zachytáva.
//
// Porovnáva počet položiek v každom output/*.xml s verziou v poslednom commite (`git show
// HEAD:...`) — teda finálny stav proti finálnemu stavu, po všetkých post-processing krokoch.
// Rovnaký princíp ako poistka v apply-product-flags.js.
//
// Beží ako POSLEDNÝ krok pred commitom. Keď nájde prepad, skončí chybou a workflow sa zastaví
// skôr, než sa čokoľvek zapíše.
//
// Usage: node scripts/check-feed-size.js
//   FEED_MIN_RATIO=0.7   hranica (podiel oproti predošlému behu), default 0.7
//   FEED_SIZE_OVERRIDE=1 vedomé obídenie, keď feed naozaj legitímne klesol
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'output');
const MIN_RATIO = Number.parseFloat(process.env.FEED_MIN_RATIO || '0.7');
const OVERRIDE = process.env.FEED_SIZE_OVERRIDE === '1';

function count(xml) {
  const m = xml.match(/<SHOPITEM>/g);
  return m ? m.length : 0;
}

function previous(file) {
  try {
    return execFileSync('git', ['show', `HEAD:output/${file}`],
      { cwd: ROOT, encoding: 'utf-8', maxBuffer: 512 * 1024 * 1024 });
  } catch {
    return null;   // súbor je nový, nie je s čím porovnávať
  }
}

const problemy = [];
for (const file of fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.xml')).sort()) {
  const teraz = count(fs.readFileSync(path.join(OUT_DIR, file), 'utf-8'));
  const prevXml = previous(file);

  if (teraz === 0) {
    problemy.push({ file, teraz, predtym: prevXml ? count(prevXml) : null, preco: 'feed je prázdny' });
    continue;
  }
  if (prevXml === null) {
    console.log(`${file}: ${teraz} položiek (nový súbor, niet s čím porovnať)`);
    continue;
  }

  const predtym = count(prevXml);
  const podiel = predtym > 0 ? teraz / predtym : 1;
  const znak = teraz >= predtym ? '+' : '';
  console.log(`${file}: ${teraz} položiek (predtým ${predtym}, ${znak}${teraz - predtym}, `
    + `${(podiel * 100).toFixed(1)} %)`);

  if (predtym > 0 && podiel < MIN_RATIO) {
    problemy.push({ file, teraz, predtym, preco: `pokles na ${(podiel * 100).toFixed(1)} % `
      + `(hranica ${(MIN_RATIO * 100).toFixed(0)} %)` });
  }
}

if (!problemy.length) {
  console.log('check-feed-size: v poriadku');
  process.exit(0);
}

for (const p of problemy) {
  console.log(`::error::${p.file}: ${p.preco} — ${p.teraz} položiek`
    + (p.predtym !== null ? ` oproti ${p.predtym} v predošlom behu` : ''));
}
console.log('');
console.log('Import do Shoptetu maže produkty, ktoré vo feede nie sú, takže by sa takýto beh');
console.log('prejavil zmazaním tovaru. Commit sa preto nevykonal a výstup zostal nezmenený.');
console.log('');
console.log('Čo ďalej:');
console.log('  1. Pozrite log transformu — vrátil dodávateľ celý feed?');
console.log('  2. Ak išlo o výpadok, stačí workflow spustiť znova, keď sa feed spraví.');
console.log('  3. Ak feed klesol naozaj (dodávateľ vyradil sortiment), spustite workflow');
console.log('     s FEED_SIZE_OVERRIDE=1 — zmazanie tovaru je vtedy zámer.');

if (OVERRIDE) {
  console.log('');
  console.log('FEED_SIZE_OVERRIDE=1 — pokračuje sa napriek tomu.');
  process.exit(0);
}
process.exit(1);

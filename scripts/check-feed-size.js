// Záverečná poistka proti veľkému poklesu hotových výstupov po transformáciách.
// Produkty, ktoré dodávateľ vyradí, zostávajú v importe ako URL-only riadky s dostupnosťou
// Vypredané. Samostatný helper zároveň odmietne prázdny alebo výrazne skrátený vstup.
//
// Porovnáva počet aktívnych ponúk v každom output/*.xml s verziou v poslednom commite.
// URL-only unavailable tombstones sa rátajú zvlášť: keď sa produkt vráti do feedu, jeho starý
// tombstone zmizne a celkový počet riadkov klesne bez toho, aby sa zmenšil živý feed.
//
// Usage: node scripts/check-feed-size.js
//   FEED_MIN_RATIO=0.7   hranica (podiel oproti predošlému behu), default 0.7
//   FEED_SIZE_OVERRIDE=1 vedomé obídenie, keď feed naozaj legitímne klesol
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { isUnavailableUpdate } = require('./lib/unavailable-update');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'output');
const MIN_RATIO = Number.parseFloat(process.env.FEED_MIN_RATIO || '0.7');
const OVERRIDE = process.env.FEED_SIZE_OVERRIDE === '1';

function count(xml) {
  const m = xml.match(/<SHOPITEM>/g);
  return m ? m.length : 0;
}

function countActive(xml) {
  const rows = [...xml.matchAll(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/gi)];
  return rows.filter((row) => !isUnavailableUpdate(row[0])).length;
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
  const currentXml = fs.readFileSync(path.join(OUT_DIR, file), 'utf-8');
  const teraz = count(currentXml);
  const terazAktivne = countActive(currentXml);
  const prevXml = previous(file);

  if (teraz === 0) {
    problemy.push({ file, teraz, terazAktivne, predtym: prevXml ? count(prevXml) : null,
      predtymAktivne: prevXml ? countActive(prevXml) : null, preco: 'feed je prázdny' });
    continue;
  }
  if (prevXml === null) {
    console.log(`${file}: ${teraz} položiek, ${terazAktivne} aktívnych (nový súbor, niet s čím porovnať)`);
    continue;
  }

  const predtym = count(prevXml);
  const predtymAktivne = countActive(prevXml);
  const podiel = predtymAktivne > 0 ? terazAktivne / predtymAktivne : 1;
  const znak = terazAktivne >= predtymAktivne ? '+' : '';
  console.log(`${file}: ${teraz} položiek, ${terazAktivne} aktívnych (predtým ${predtym} položiek, `
    + `${predtymAktivne} aktívnych; ${znak}${terazAktivne - predtymAktivne}, `
    + `${(podiel * 100).toFixed(1)} %)`);

  if (predtymAktivne > 0 && podiel < MIN_RATIO) {
    problemy.push({ file, teraz, predtym, terazAktivne, predtymAktivne,
      preco: `pokles na ${(podiel * 100).toFixed(1)} % aktívnych ponúk `
        + `(hranica ${(MIN_RATIO * 100).toFixed(0)} %)` });
  }
}

if (!problemy.length) {
  console.log('check-feed-size: v poriadku');
  process.exit(0);
}

for (const p of problemy) {
  console.log(`::error::${p.file}: ${p.preco} — ${p.terazAktivne} aktívnych položiek`
    + (p.predtymAktivne !== null ? ` oproti ${p.predtymAktivne} v predošlom behu` : ''));
}
console.log('');
console.log('Výstupný feed výrazne klesol oproti poslednému commitu.');
console.log('Commit sa nevykonal; skontrolujte upstream feed a kroky spracovania.');
console.log('');
console.log('Čo ďalej:');
console.log('  1. Skontrolujte počty položiek zdrojového feedu a výstupu v logu transformu.');
console.log('  2. Pri dočasnom výpadku zopakujte workflow po obnovení feedu.');
console.log('  3. Pri očakávanom poklese skontrolujte missing-product state a URL-only riadky;');
console.log('     FEED_SIZE_OVERRIDE=1 obíde iba túto výstupnú poistku.');

if (OVERRIDE) {
  console.log('');
  console.log('FEED_SIZE_OVERRIDE=1 — pokračuje sa napriek tomu.');
  process.exit(0);
}
process.exit(1);

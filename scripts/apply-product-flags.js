// Automaticky nastavuje Shoptet príznaky NOVINKA a AKCIA pre dodávateľov, ktorí vlastné príznaky
// neposielajú (InnPro, K-B, Solight, MONACOR). ATOS, Penta a BASYS majú svoje – tých sa skript
// nedotýka, nech sa neprepíše reálna akcia od dodávateľa.
//
// Pravidlá (zadanie):
//   NOVINKA – produkt, ktorý v predošlom behu vo feede nebol, na 3 dni
//   AKCIA   – produkt, ktorý zlacnel o viac než 5 %, na 3 dni
//
// Akcia sa zámerne nastavuje LEN pri zlacnení. Pri zdražení by zákazník videl akciový štítok na
// tovare, ktorý práve podražel – zavádzajúce a pri kontrole problematické.
//
// Shoptet pri príznakoch neberie dátum platnosti (je to len 0/1), takže tie 3 dni si držíme sami
// v data/product-flags-state.json: pri každom behu sa príznak buď nastaví (nová udalosť),
// ponechá (lehota beží) alebo zhasne.
//
// Predošlé ceny a zoznam kódov sa čítajú z verzie output/<dodavatel>.xml v poslednom commite
// (`git show HEAD:...`) – transform ten súbor práve prepísal, ale v gite je ešte predošlý beh.
//
// Usage: node scripts/apply-product-flags.js [--supplier=innpro]

'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'output');
const STATE_PATH = path.join(ROOT, 'data', 'product-flags-state.json');

// Dodávatelia, ktorí vlastné <FLAGS> neposielajú – len tých spravujeme.
const MANAGED = ['innpro', 'kb', 'solight', 'monacor'];

const FLAG_DAYS = 3;
const PRICE_DROP_PCT = 5;
// Keď predošlý feed obsahuje výrazne menej položiek než aktuálny, nešlo o normálny deň, ale
// o výpadok na strane dodávateľa – bez tejto poistky by sa nasledujúci deň tvárili ako nové
// prakticky všetky produkty a e-shop by zaplavila "Novinka".
const MIN_PREVIOUS_RATIO = 0.7;

const DAY_MS = 24 * 60 * 60 * 1000;

function previousXml(supplier) {
  try {
    return execFileSync('git', ['show', `HEAD:output/${supplier}.xml`],
      { cwd: ROOT, encoding: 'utf-8', maxBuffer: 512 * 1024 * 1024 });
  } catch {
    return null;
  }
}

function pricesByCode(xml) {
  const map = new Map();
  for (const item of xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || []) {
    const code = (item.match(/<CODE>([\s\S]*?)<\/CODE>/) || [])[1];
    const price = parseFloat((item.match(/<PRICE_VAT>([\s\S]*?)<\/PRICE_VAT>/) || [])[1]);
    if (code && Number.isFinite(price) && price > 0) map.set(code.trim(), price);
  }
  return map;
}

const state = fs.existsSync(STATE_PATH) ? JSON.parse(fs.readFileSync(STATE_PATH, 'utf-8')) : {};
const now = Date.now();
const until = new Date(now + FLAG_DAYS * DAY_MS).toISOString();

const only = (process.argv.find((a) => a.startsWith('--supplier=')) || '').split('=')[1];
const suppliers = only ? MANAGED.filter((s) => s === only) : MANAGED;
if (only && !suppliers.length) {
  console.log(`${only}: vlastné príznaky od dodávateľa, tento skript ich nespravuje`);
  process.exit(0);
}

for (const supplier of suppliers) {
  const file = path.join(OUT_DIR, `${supplier}.xml`);
  if (!fs.existsSync(file)) continue;
  const xml = fs.readFileSync(file, 'utf-8');
  const current = pricesByCode(xml);

  const prevXml = previousXml(supplier);
  const previous = prevXml ? pricesByCode(prevXml) : null;
  const supplierState = state[supplier] || (state[supplier] = {});

  // Bez dôveryhodného predošlého behu sa nové udalosti nevyhodnocujú – už bežiace lehoty
  // z predošlých dní ale dobiehajú ďalej.
  let trustPrevious = !!previous;
  let reason = '';
  if (!previous) reason = 'predošlý feed sa nepodarilo načítať';
  else if (previous.size < current.size * MIN_PREVIOUS_RATIO) {
    trustPrevious = false;
    reason = `predošlý feed má ${previous.size} položiek oproti dnešným ${current.size}`;
  }

  let fresh = 0;
  let dropped = 0;
  if (trustPrevious) {
    for (const [code, price] of current) {
      const entry = supplierState[code] || (supplierState[code] = {});
      const before = previous.get(code);
      if (before === undefined) {
        entry.newUntil = until;
        fresh++;
      } else if (before > 0 && (before - price) / before > PRICE_DROP_PCT / 100) {
        entry.actionUntil = until;
        dropped++;
      }
    }
  }

  // zápis príznakov + upratanie stavu
  let withNew = 0;
  let withAction = 0;
  const out = xml.replace(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g, (itemRaw) => {
    let item = itemRaw;
    // Spravovani dodavatelia vlastne <FLAGS> negeneruju, takze pripadny zvysok je z predosleho
    // behu tohto skriptu - odstranit, nech sa pri opakovanom spusteni neduplikuje a nech uz
    // vyprsany priznak realne zhasne.
    item = item.replace(/[ \t]*<FLAGS>[\s\S]*?<\/FLAGS>\n?/g, '');
    const code = ((item.match(/<CODE>([\s\S]*?)<\/CODE>/) || [])[1] || '').trim();
    const entry = code ? supplierState[code] : null;
    const isNew = entry && entry.newUntil && entry.newUntil > new Date(now).toISOString();
    const isAction = entry && entry.actionUntil && entry.actionUntil > new Date(now).toISOString();
    if (!isNew && !isAction) return item;
    if (isNew) withNew++;
    if (isAction) withAction++;
    const flags = `<FLAGS><ACTION>${isAction ? 1 : 0}</ACTION>`
      + `<NEW>${isNew ? 1 : 0}</NEW><TIP>0</TIP></FLAGS>\n`;
    // rovnaké miesto ako v ATOS feede – tesne pred <AVAILABILITY>
    return item.includes('<AVAILABILITY>')
      ? item.replace('<AVAILABILITY>', flags + '<AVAILABILITY>')
      : item.replace('</SHOPITEM>', flags + '</SHOPITEM>');
  });

  for (const [code, entry] of Object.entries(supplierState)) {
    const nowIso = new Date(now).toISOString();
    if (entry.newUntil && entry.newUntil <= nowIso) delete entry.newUntil;
    if (entry.actionUntil && entry.actionUntil <= nowIso) delete entry.actionUntil;
    if (!entry.newUntil && !entry.actionUntil) delete supplierState[code];
  }

  if (out !== xml) fs.writeFileSync(file, out);
  const note = trustPrevious ? '' : ` (nové udalosti preskočené: ${reason})`;
  console.log(`${supplier}: novinka ${withNew}, akcia ${withAction} `
    + `(dnes pribudlo ${fresh} nových, ${dropped} zlacnení)${note}`);
  if (!trustPrevious && previous) console.log(`::warning::${supplier}: ${reason}`);
}

fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 1) + '\n');

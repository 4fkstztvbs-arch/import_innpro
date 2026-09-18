// Daily job: checks data/heureka-reports/ for a Heureka sortiment-report CSV newer than the
// last one we processed, and if found, runs compare-heureka-prices.js on it and writes a
// readable markdown report to reports/. Meant to be run once a day (see the Routine set up for
// this) after the previous evening's upload and the night's supplier imports have both landed.
//
// "Newer" is decided by the date/time Heureka bakes into its export filename
// (premiumstoresk_YYYYMMDD_HHMM.csv), not upload time or file mtime, since those don't reliably
// reflect which report is actually more recent once a file has been re-uploaded/renamed.
//
// Usage: node process-heureka-report.js [--dir=data/heureka-reports] [--min-margin=5] [--force]
// Exit code 0 always (both "processed" and "nothing new" are a normal, successful run); prints
// PROCESSED:<path-to-md> on stdout when a report was generated, or NOTHING_NEW otherwise, so a
// calling Routine/script can tell without parsing prose.

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const { createHash } = require('crypto');
const { parse } = require('csv-parse/sync');
const { POLICY, validatePolicy } = require('./heureka-pricing');

const REPO_ROOT = path.join(__dirname, '..');

function extractTimestamp(filename) {
  // Heureka/upload filenames vary in separator style depending on how they were downloaded/
  // renamed - seen so far: "premiumstoresk_20260807_1253.csv" and
  // "premiumstore-sk_2026-08-07_12-53.csv". Match YYYY-MM-DD and HH-MM with optional dashes
  // (each digit group matched separately) rather than assuming one exact separator style.
  const m = filename.match(/(\d{4})-?(\d{2})-?(\d{2})[_-](\d{2})-?(\d{2})/);
  if (!m) return null;
  const [, yyyy, mm, dd, hh, min] = m;
  return `${yyyy}${mm}${dd}${hh}${min}`; // sortable string, e.g. "202608071253"
}

function findLatestReport(dir) {
  const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.csv'));
  let best = null;
  for (const f of files) {
    const ts = extractTimestamp(f) || fs.statSync(path.join(dir, f)).mtime.toISOString().replace(/\D/g, '').slice(0, 12);
    if (!best || ts > best.ts) best = { file: f, ts };
  }
  return best;
}

function loadState(statePath) {
  if (!fs.existsSync(statePath)) return null;
  try { return JSON.parse(fs.readFileSync(statePath, 'utf-8')); } catch { return null; }
}

function fnum(s) { const v = parseFloat(s); return Number.isFinite(v) ? v : null; }
function fmtEur(v) { return v !== null && v !== undefined && v !== '' ? `${fnum(v).toFixed(2)} €` : '—'; }
function fmtPct(v) { return v !== null && v !== undefined && v !== '' ? `${fnum(v).toFixed(1)} %` : '—'; }

function readCsvRows(csvPath) {
  return parse(fs.readFileSync(csvPath, 'utf-8'), { columns: true, skip_empty_lines: true });
}

// Retain valid market targets even when the current feed is already at target.
// Otherwise the next supplier transform would fall back to cost+markup again.
function buildPriceTargets(rows, sourceCsvName, policy = POLICY) {
  const targets = {};
  const generatedAt = new Date().toISOString();
  for (const r of rows) {
    if (!r.EAN || r.KonkurenciaPlatna !== '1' || !(fnum(r.NakupnaCenaBezDphEUR) > 0)) continue;
    const soleOffer = fnum(r.PocetPredajcov) === 1;
    if (!soleOffer && !(fnum(r.SurovyCielEUR) > 0)) continue;
    targets[r.EAN] = {
      pricingVersion: policy.version,
      policy,
      mode: soleOffer ? 'supplier' : 'market',
      action: r.Akcia,
      targetPriceInclVat: fnum(r.SurovyCielEUR),
      referencePriceInclVat: fnum(r.NasaCenaEUR),
      source: r.Dodavatel,
      competitorPrices: (r.KonkurencneCeny || '').split(';').map(fnum).filter((p) => p > 0),
      completeRanking: r.UplnyRebricek === '1',
      sellerCount: fnum(r.PocetPredajcov),
      heurekaNajnizsia: fnum(r.HeurekaNajnizsiaEUR),
      heurekaUrl: r.HeurekaURL || '',
      generatedAt,
      sourceReport: sourceCsvName,
      cantCompete: r.NemozemeVyhrat === '1',
    };
  }
  return targets;
}

// Updating a CSV under its original name, or changing the pricing rules, must
// reprocess it even if the filename timestamp has not changed.
function processingFingerprint(csvPath, policy) {
  const hash = createHash('sha256').update(fs.readFileSync(csvPath)).update(JSON.stringify(policy));
  for (const file of ['heureka-pricing.js', 'compare-heureka-prices.js', 'process-heureka-report.js', 'round-price.js']) {
    hash.update(fs.readFileSync(path.join(__dirname, file)));
  }
  return hash.digest('hex');
}

function csvToMarkdownReport(rows, mdPath, sourceCsvName, minMarginPct) {
  const total = rows.length;
  const zvysit = rows.filter((r) => r.Akcia === 'ZVÝŠIŤ');
  const znizit = rows.filter((r) => r.Akcia === 'ZNÍŽIŤ');
  const bezZmeny = rows.filter((r) => r.Akcia === 'BEZ ZMENY');
  // Len skutočne znížené — poznámka pri zrušenej zľave tiež spomína floor, ale tam sa cena
  // nemení, takže do "obmedzené maržou" nepatrí.
  const floorLimited = znizit.filter((r) => (r.Poznamka || '').includes('floor'));
  const bezPosunuPozicie = bezZmeny.filter((r) => (r.Poznamka || '').includes('nepreskočilo'));

  function impact(r) {
    const a = fnum(r.NasaCenaEUR); const b = fnum(r.OdporucanaCenaEUR);
    if (a === null || b === null) return 0;
    return Math.abs(b - a);
  }
  zvysit.sort((a, b) => impact(b) - impact(a));
  znizit.sort((a, b) => impact(b) - impact(a));

  const lines = [];
  lines.push(`# Návrh na úpravu cien podľa Heureka porovnania — ${new Date().toISOString().slice(0, 10)}`);
  lines.push('');
  lines.push(`Vstup: \`${sourceCsvName}\` (automaticky spracované denným behom).`);
  lines.push('');
  lines.push(`**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + ${minMarginPct} % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.`);
  lines.push('Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.');
  lines.push('');
  lines.push('## Súhrn');
  lines.push('');
  lines.push(`- Spárovaných produktov cez EAN: **${total}**`);
  lines.push(`- Návrh **zvýšiť** cenu: **${zvysit.length}** produktov`);
  lines.push(`- Návrh **znížiť** cenu: **${znizit.length}** produktov`);
  lines.push(`- Bez zmeny (už optimálne / chýbajú dáta): **${bezZmeny.length}** produktov`);
  lines.push(`- Z toho obmedzené min. maržou ${minMarginPct} % (nedosiahli plný cieľ): **${floorLimited.length}**`);
  lines.push(`- Zľava zrušená, lebo by nepohla cenovou pozíciou: **${bezPosunuPozicie.length}**`);
  lines.push('');
  lines.push('Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).');
  lines.push('');

  function tableSection(title, group) {
    const out = [`## ${title} (${group.length})`, ''];
    out.push('| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |');
    out.push('|---|---:|---:|---:|---:|---:|---|');
    for (const r of group) {
      let name = (r.Nazov || '').replace(/\|/g, '/');
      if (name.length > 55) name = name.slice(0, 52) + '...';
      out.push(`| ${name} | ${fmtEur(r.NasaCenaEUR)} | **${fmtEur(r.OdporucanaCenaEUR)}** | ${fmtPct(r.MarzaTerazPct)} | **${fmtPct(r.MarzaPoUpravePct)}** | ${fmtEur(r.HeurekaNajnizsiaEUR)} | ${r.Poznamka} |`);
    }
    out.push('');
    return out;
  }

  lines.push(...tableSection('Návrh zvýšiť cenu', zvysit));
  lines.push(...tableSection('Návrh znížiť cenu', znizit));

  fs.mkdirSync(path.dirname(mdPath), { recursive: true });
  fs.writeFileSync(mdPath, lines.join('\n'), 'utf-8');
  return { total, zvysit: zvysit.length, znizit: znizit.length, bezZmeny: bezZmeny.length, floorLimited: floorLimited.length, bezPosunuPozicie: bezPosunuPozicie.length };
}

function main() {
  const args = process.argv.slice(2);
  const dirArg = args.find((a) => a.startsWith('--dir='));
  const reportsDir = dirArg ? dirArg.slice('--dir='.length) : path.join(REPO_ROOT, 'data', 'heureka-reports');
  const marginArg = args.find((a) => a.startsWith('--min-margin='));
  const minMarginPct = marginArg ? Number(marginArg.slice('--min-margin='.length)) : POLICY.minMarkupPct;
  const policy = validatePolicy({ ...POLICY, minMarkupPct: minMarginPct });
  const force = args.includes('--force');

  const statePath = path.join(reportsDir, '.last-processed.json');
  const latest = findLatestReport(reportsDir);
  if (!latest) {
    console.log('NOTHING_NEW');
    console.log(`Žiadny CSV report v ${reportsDir}.`);
    return;
  }

  const csvPath = path.join(reportsDir, latest.file);
  const fingerprint = processingFingerprint(csvPath, policy);
  const state = loadState(statePath);
  if (!force && state && state.file === latest.file && state.fingerprint === fingerprint && fs.existsSync(path.join(reportsDir, 'price-targets.json'))) {
    console.log('NOTHING_NEW');
    console.log(`Najnovší súbor (${latest.file}, ${latest.ts}) už bol spracovaný ${state.processedAt} (report: ${state.reportPath}).`);
    return;
  }

  const dateStr = latest.ts.slice(0, 8);
  const isoDate = `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`;
  // Intermediate per-product CSV is just scratch data for building the .md report below - the
  // .md report is the thing worth keeping in the repo, so this doesn't need to live in
  // data/heureka-reports/ (which only holds the raw uploads + the processing state).
  const outCsvPath = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'heureka-compare-')), `compare-${latest.ts}.csv`);
  const mdPath = path.join(REPO_ROOT, 'reports', `heureka-cenovy-navrh-${isoDate}.md`);

  console.log(`Spracúvam: ${latest.file} (${latest.ts})`);
  execFileSync(process.execPath, [
    path.join(__dirname, 'compare-heureka-prices.js'),
    csvPath,
    `--out=${outCsvPath}`,
    `--min-margin=${minMarginPct}`,
  ], { stdio: 'inherit', cwd: REPO_ROOT });

  const rows = readCsvRows(outCsvPath);
  const stats = csvToMarkdownReport(rows, mdPath, latest.file, minMarginPct);

  // price-targets.json is what every transform-*.js reads at its own next run to override
  // prices for products it recognizes by EAN - see scripts/heureka-price-targets.js.
  const targetsPath = path.join(reportsDir, 'price-targets.json');
  const targets = buildPriceTargets(rows, latest.file, policy);
  fs.writeFileSync(targetsPath, JSON.stringify(targets, null, 1), 'utf-8');
  console.log(`Cieľové ceny pre živé importy: ${Object.keys(targets).length} produktov -> ${targetsPath}`);

  fs.writeFileSync(statePath, JSON.stringify({
    file: latest.file, ts: latest.ts, fingerprint, pricingVersion: policy.version, processedAt: new Date().toISOString(),
    reportPath: path.relative(REPO_ROOT, mdPath), targetsPath: path.relative(REPO_ROOT, targetsPath),
    priceTargetsCount: Object.keys(targets).length, stats,
  }, null, 1), 'utf-8');

  console.log(`PROCESSED:${mdPath}`);
}

if (require.main === module) main();
module.exports = { buildPriceTargets, readCsvRows, processingFingerprint, extractTimestamp, findLatestReport };

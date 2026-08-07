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

const REPO_ROOT = path.join(__dirname, '..');

function extractTimestamp(filename) {
  // Heureka export filenames look like premiumstoresk_20260807_1253.csv - grab the first
  // YYYYMMDD_HHMM-shaped run of digits anywhere in the name.
  const m = filename.match(/(\d{8})_(\d{4})/);
  if (!m) return null;
  const [, ymd, hm] = m;
  return `${ymd}${hm}`; // sortable string, e.g. "202608071253"
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

function csvToMarkdownReport(csvPath, mdPath, sourceCsvName, minMarginPct) {
  const raw = fs.readFileSync(csvPath, 'utf-8').trim().split('\n');
  const header = raw[0].split(',');
  // The CSV writer quotes only Nazov/Kategoria/Poznamka fields, so a plain split(',') would
  // break on any comma inside those - use a small proper parser instead.
  function parseCsvLine(line) {
    const out = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (inQuotes) {
        if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
        else if (c === '"') { inQuotes = false; }
        else cur += c;
      } else if (c === '"') { inQuotes = true; }
      else if (c === ',') { out.push(cur); cur = ''; }
      else cur += c;
    }
    out.push(cur);
    return out;
  }
  const rows = raw.slice(1).map((line) => {
    const cols = parseCsvLine(line);
    const rec = {};
    header.forEach((h, i) => { rec[h] = cols[i]; });
    return rec;
  });

  const total = rows.length;
  const zvysit = rows.filter((r) => r.Akcia === 'ZVÝŠIŤ');
  const znizit = rows.filter((r) => r.Akcia === 'ZNÍŽIŤ');
  const bezZmeny = rows.filter((r) => r.Akcia === 'BEZ ZMENY');
  const floorLimited = rows.filter((r) => (r.Poznamka || '').includes('floor'));

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
  lines.push(`**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + ${minMarginPct} % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako \`KB_MIN_MARGIN\` v \`transform-kb.js\`), nie klasická obchodná marža z predajnej ceny.`);
  lines.push('');
  lines.push('## Súhrn');
  lines.push('');
  lines.push(`- Spárovaných produktov cez EAN: **${total}**`);
  lines.push(`- Návrh **zvýšiť** cenu: **${zvysit.length}** produktov`);
  lines.push(`- Návrh **znížiť** cenu: **${znizit.length}** produktov`);
  lines.push(`- Bez zmeny (už optimálne / chýbajú dáta): **${bezZmeny.length}** produktov`);
  lines.push(`- Z toho obmedzené min. maržou ${minMarginPct} % (nedosiahli plný cieľ): **${floorLimited.length}**`);
  lines.push('');
  lines.push('Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).');
  lines.push('');

  function tableSection(title, group) {
    const out = [`## ${title} (${group.length})`, ''];
    out.push('| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |');
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
  return { total, zvysit: zvysit.length, znizit: znizit.length, bezZmeny: bezZmeny.length, floorLimited: floorLimited.length };
}

function main() {
  const args = process.argv.slice(2);
  const dirArg = args.find((a) => a.startsWith('--dir='));
  const reportsDir = dirArg ? dirArg.slice('--dir='.length) : path.join(REPO_ROOT, 'data', 'heureka-reports');
  const marginArg = args.find((a) => a.startsWith('--min-margin='));
  const minMarginPct = marginArg ? parseFloat(marginArg.slice('--min-margin='.length)) : 5;
  const force = args.includes('--force');

  const statePath = path.join(reportsDir, '.last-processed.json');
  const latest = findLatestReport(reportsDir);
  if (!latest) {
    console.log('NOTHING_NEW');
    console.log(`Žiadny CSV report v ${reportsDir}.`);
    return;
  }

  const state = loadState(statePath);
  if (!force && state && state.ts >= latest.ts) {
    console.log('NOTHING_NEW');
    console.log(`Najnovší súbor (${latest.file}, ${latest.ts}) už bol spracovaný ${state.processedAt} (report: ${state.reportPath}).`);
    return;
  }

  const csvPath = path.join(reportsDir, latest.file);
  const dateStr = latest.ts.slice(0, 8);
  const isoDate = `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`;
  // Intermediate per-product CSV is just scratch data for building the .md report below - the
  // .md report is the thing worth keeping in the repo, so this doesn't need to live in
  // data/heureka-reports/ (which only holds the raw uploads + the processing state).
  const outCsvPath = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'heureka-compare-')), `compare-${latest.ts}.csv`);
  const mdPath = path.join(REPO_ROOT, 'reports', `heureka-cenovy-navrh-${isoDate}.md`);

  console.log(`Spracúvam: ${latest.file} (${latest.ts})`);
  execFileSync('node', [
    path.join(__dirname, 'compare-heureka-prices.js'),
    csvPath,
    `--out=${outCsvPath}`,
    `--min-margin=${minMarginPct}`,
  ], { stdio: 'inherit', cwd: REPO_ROOT });

  const stats = csvToMarkdownReport(outCsvPath, mdPath, latest.file, minMarginPct);

  fs.writeFileSync(statePath, JSON.stringify({
    file: latest.file, ts: latest.ts, processedAt: new Date().toISOString(), reportPath: path.relative(REPO_ROOT, mdPath), stats,
  }, null, 1), 'utf-8');

  console.log(`PROCESSED:${mdPath}`);
}

main();

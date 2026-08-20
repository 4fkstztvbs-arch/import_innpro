// Compares a fresh Heureka "Nespárované produkty" export against the baseline report our fixes
// were built from (2026-08-19), to answer a narrower and more reliable question than "did the
// total unmatched count go down" (noisy - new products, other e-shops, seasonality all move it
// too): specifically, of the EANs we targeted with NAME_TO_EXPORTS or a new/fixed
// HEUREKA_CATEGORY_ID mapping, how many are still unmatched now vs. resolved?
//
// Usage: node scripts/compare-heureka-unmatched-progress.js <new-report.csv>
//   [--baseline=data/heureka-reports/nesparovane/premiumstoresk_20260819_1200.csv]
//   [--overrides=data/heureka-reports/name-overrides.json]
//   [--candidates=data/heureka-reports/heureka-mapping-candidates.json]
//
// Prints a summary to stdout and writes reports/heureka-progress-<date>.md.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { parse } = require('csv-parse/sync');

const REPO_ROOT = path.join(__dirname, '..');

// The commit that added the 133 >=70%-confidence category mappings to heureka-mapping.json
// (2026-08-19). Re-deriving "which categories we fixed" from heureka-mapping-candidates.json at
// run time doesn't work: once a category is added, that file's own next regeneration reclassifies
// it from PRIDAŤ to UŽ_SPRÁVNE (it's a live comparison against the mapping, not a historical
// record) - so pull the actual added keys straight from that commit's diff instead, which stays
// correct no matter how many times heureka-mapping.json changes afterward.
const CATEGORY_FIX_COMMIT = 'f6770ad';

function fixedCategoryKeysFromGit() {
  let diff;
  try {
    diff = execFileSync('git', ['show', CATEGORY_FIX_COMMIT, '--', 'scripts/heureka-mapping.json'], { cwd: REPO_ROOT, encoding: 'utf-8' });
  } catch (e) {
    console.error(`Warning: could not read commit ${CATEGORY_FIX_COMMIT} for category fix list (${e.message}) - section 2 will be empty.`);
    return new Set();
  }
  const keys = new Set();
  for (const line of diff.split('\n')) {
    const m = line.match(/^\+\s*"([^"]+)"\s*:\s*\d+/);
    if (m) keys.add(m[1]);
  }
  return keys;
}

function readCsvRows(csvPath) {
  const raw = fs.readFileSync(csvPath, 'utf-8');
  return parse(raw, { columns: true, skip_empty_lines: true, bom: true });
}

function ourKeyFromCategoryText(categoryText) {
  return (categoryText || '').split('|').map((s) => s.trim()).filter(Boolean).join(' > ');
}

function main() {
  const args = process.argv.slice(2);
  const newReportArg = args.find((a) => !a.startsWith('--'));
  if (!newReportArg) {
    console.error('Usage: node compare-heureka-unmatched-progress.js <new-report.csv> [--baseline=...] [--overrides=...] [--candidates=...]');
    process.exit(1);
  }
  const newReportPath = path.resolve(newReportArg);

  const get = (flag, def) => {
    const a = args.find((x) => x.startsWith(`--${flag}=`));
    return a ? path.resolve(REPO_ROOT, a.slice(flag.length + 3)) : def;
  };
  const baselinePath = get('baseline', path.join(REPO_ROOT, 'data', 'heureka-reports', 'nesparovane', 'premiumstoresk_20260819_1200.csv'));
  const overridesPath = get('overrides', path.join(REPO_ROOT, 'data', 'heureka-reports', 'name-overrides.json'));

  const baselineRows = readCsvRows(baselinePath);
  const newRows = readCsvRows(newReportPath);
  const overrides = JSON.parse(fs.readFileSync(overridesPath, 'utf-8'));

  const baselineEans = new Set(baselineRows.map((r) => (r.EAN || '').trim()).filter(Boolean));
  const newEans = new Set(newRows.map((r) => (r.EAN || '').trim()).filter(Boolean));
  const newByEan = new Map(newRows.map((r) => [(r.EAN || '').trim(), r]));

  // 1. Name-override targets: EANs we sent a NAME_TO_EXPORTS suggestion for.
  const targetedEans = Object.keys(overrides).filter((k) => k !== '__meta');
  const nameResolved = targetedEans.filter((ean) => !newEans.has(ean));
  const nameStillUnmatched = targetedEans.filter((ean) => newEans.has(ean));

  // 2. Category-fix targets: categories we added/fixed with >=70% confidence (the ones actually
  // written into scripts/heureka-mapping.json - see reports/prehlad-importov.md 4.5). Compare
  // baseline vs new unmatched counts per that category (by our CATEGORYTEXT, pipe-separated).
  const fixedCategoryKeys = fixedCategoryKeysFromGit();
  const baselineByCategory = new Map();
  for (const r of baselineRows) {
    const key = ourKeyFromCategoryText(r.CATEGORYTEXT);
    if (!fixedCategoryKeys.has(key)) continue;
    baselineByCategory.set(key, (baselineByCategory.get(key) || 0) + 1);
  }
  const newByCategory = new Map();
  for (const r of newRows) {
    const key = ourKeyFromCategoryText(r.CATEGORYTEXT);
    if (!fixedCategoryKeys.has(key)) continue;
    newByCategory.set(key, (newByCategory.get(key) || 0) + 1);
  }
  let categoryBaselineTotal = 0;
  let categoryNewTotal = 0;
  const categoryRows = [];
  for (const key of fixedCategoryKeys) {
    const before = baselineByCategory.get(key) || 0;
    const after = newByCategory.get(key) || 0;
    if (before === 0 && after === 0) continue;
    categoryBaselineTotal += before;
    categoryNewTotal += after;
    categoryRows.push({ key, before, after });
  }
  categoryRows.sort((a, b) => b.before - a.before);

  // 3. Overall totals, for context only (explicitly caveated - noisy).
  const overallBefore = baselineRows.length;
  const overallAfter = newRows.length;

  const isoDate = new Date().toISOString().slice(0, 10);
  const lines = [];
  lines.push(`# Heureka nespárované produkty — progress od nasadenia opráv — ${isoDate}`);
  lines.push('');
  lines.push(`Baseline: \`${path.basename(baselinePath)}\` (pred nasadením opráv). Nový report: \`${path.basename(newReportPath)}\`.`);
  lines.push('');
  lines.push('## 1. NAME_TO_EXPORTS — priamy dopad na cielené EAN');
  lines.push('');
  lines.push(`- Cielených EAN (dostali návrh mena): **${targetedEans.length}**`);
  lines.push(`- Už nie sú v novom reporte nespárovaných (vyriešené): **${nameResolved.length}** (${((nameResolved.length / targetedEans.length) * 100).toFixed(1)} %)`);
  lines.push(`- Stále nespárované aj po fixe: **${nameStillUnmatched.length}**`);
  lines.push('');
  lines.push('## 2. Kategórie (heureka-mapping.json, >=70% zhoda) — priamy dopad');
  lines.push('');
  lines.push(`- Produktov v cielených kategóriách pred fixom: **${categoryBaselineTotal}**`);
  lines.push(`- Produktov v tých istých kategóriách teraz: **${categoryNewTotal}**`);
  lines.push(`- Pokles: **${categoryBaselineTotal - categoryNewTotal}** (${categoryBaselineTotal ? (((categoryBaselineTotal - categoryNewTotal) / categoryBaselineTotal) * 100).toFixed(1) : 0} %)`);
  lines.push('');
  lines.push('| Kategória | Pred | Teraz | Rozdiel |');
  lines.push('|---|---:|---:|---:|');
  for (const r of categoryRows.slice(0, 40)) {
    lines.push(`| ${r.key} | ${r.before} | ${r.after} | ${r.before - r.after >= 0 ? '-' : '+'}${Math.abs(r.before - r.after)} |`);
  }
  lines.push('');
  lines.push('## 3. Celkový počet nespárovaných (kontext, NIE dôkaz — kolíše aj z iných dôvodov)');
  lines.push('');
  lines.push(`- Pred: **${overallBefore}** → teraz: **${overallAfter}** (${overallAfter - overallBefore >= 0 ? '+' : ''}${overallAfter - overallBefore})`);
  lines.push('');
  lines.push('Toto číslo zahŕňa aj nové produkty pribudnuté do katalógu, produkty vypredané/odstránené a nesúvisiace zmeny — nepoužívať samo o sebe ako dôkaz účinnosti fixu, pozri sekcie 1-2 vyššie.');
  lines.push('');

  if (nameStillUnmatched.length > 0) {
    lines.push(`## Príloha: prvých 20 EAN, ktoré NAME_TO_EXPORTS fix (zatiaľ) nevyriešil`);
    lines.push('');
    lines.push('| EAN | Náš názov | Navrhovaný názov | Stále v novom reporte ako |');
    lines.push('|---|---|---|---|');
    for (const ean of nameStillUnmatched.slice(0, 20)) {
      const o = overrides[ean];
      const r = newByEan.get(ean);
      lines.push(`| ${ean} | ${o.ourName} | ${o.name} | ${r ? r.PRODUCT : '—'} |`);
    }
    lines.push('');
  }

  const mdPath = path.join(REPO_ROOT, 'reports', `heureka-progress-${isoDate}.md`);
  fs.writeFileSync(mdPath, lines.join('\n'), 'utf-8');

  console.log(`NAME_TO_EXPORTS: ${nameResolved.length}/${targetedEans.length} vyriešených (${((nameResolved.length / targetedEans.length) * 100).toFixed(1)}%)`);
  console.log(`Kategórie: ${categoryBaselineTotal} -> ${categoryNewTotal} (pokles ${categoryBaselineTotal - categoryNewTotal})`);
  console.log(`Celkovo nespárovaných: ${overallBefore} -> ${overallAfter}`);
  console.log(`Report: ${mdPath}`);
}

main();

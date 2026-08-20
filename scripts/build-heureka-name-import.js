// Builds a Shoptet product CSV (Katalóg -> Import) that fills in `xmlFeedName` - Shoptet's
// internal name for the "Alternatívny názov pre vyhľadávače tovaru" field (Katalóg -> Produkty ->
// Export/Import; shows up in Shoptet's admin UI, but does NOT exist as a tag in the full XML feed
// schema - see reports/prehlad-importov.md section 4.5 for the 2026-08-20 incident where trying
// to set it via a <NAME_TO_EXPORTS> XML tag broke RNG validation for every affected supplier feed).
//
// Input: a full Shoptet product CSV export (Katalóg -> Produkty -> Export), which must include at
// least `code`, `ean`, and `xmlFeedName` columns. Matches rows by EAN against
// data/heureka-reports/name-overrides.json (built by process-heureka-unmatched.js), fills
// `xmlFeedName` with the suggested name for matched rows ONLY, and writes out just those rows -
// every other field, and every non-matched product, stays completely untouched.
//
// Shoptet's own export has a stray unnamed trailing column (header ends `...;"xmlFeedName";""`) -
// tolerated on export, but the importer rejects it ("Chýbajúci názov stĺpca na pozícii N"), so
// it's stripped here automatically.
//
// Usage: node scripts/build-heureka-name-import.js <shoptet-export.csv> [--out=path.csv] [--limit=N]
// --limit=N also writes a <out>-TESTN.csv with just the first N matched rows, for a safe trial
// import before doing the full batch (recommended - see reports/prehlad-importov.md 4.5).

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

const REPO_ROOT = path.join(__dirname, '..');
const OVERRIDES_PATH = path.join(REPO_ROOT, 'data', 'heureka-reports', 'name-overrides.json');

function csvEscape(v) {
  return `"${String(v ?? '').replace(/"/g, '""')}"`;
}

function writeShoptetCsv(outPath, header, rows) {
  const lines = [header.map(csvEscape).join(';')];
  for (const row of rows) lines.push(header.map((h) => csvEscape(row[h])).join(';'));
  // BOM + CRLF to match Shoptet's own export exactly (maximizes import compatibility).
  fs.writeFileSync(outPath, '﻿' + lines.join('\r\n') + '\r\n', 'utf-8');
}

function main() {
  const args = process.argv.slice(2);
  const inputPath = args.find((a) => !a.startsWith('--'));
  if (!inputPath) {
    console.error('Usage: node build-heureka-name-import.js <shoptet-export.csv> [--out=path.csv] [--limit=N]');
    process.exit(1);
  }
  const outArg = args.find((a) => a.startsWith('--out='));
  const outPath = outArg ? outArg.slice('--out='.length) : path.join(REPO_ROOT, 'reports', 'heureka-xmlfeedname-import.csv');
  const limitArg = args.find((a) => a.startsWith('--limit='));
  const limit = limitArg ? parseInt(limitArg.slice('--limit='.length), 10) : null;

  const overridesRaw = JSON.parse(fs.readFileSync(OVERRIDES_PATH, 'utf-8'));
  const overrides = {};
  for (const [ean, entry] of Object.entries(overridesRaw)) {
    if (ean !== '__meta') overrides[ean] = entry;
  }
  console.log(`Návrhy názvov (name-overrides.json): ${Object.keys(overrides).length}`);

  const raw = fs.readFileSync(inputPath, 'utf-8');
  const records = parse(raw, { columns: true, skip_empty_lines: true, bom: true, delimiter: ';' });
  console.log(`Riadkov v Shoptet exporte: ${records.length}`);

  // Shoptet's export header has a trailing unnamed column - csv-parse surfaces it as key ''.
  const header = Object.keys(records[0] || {}).filter((h) => h !== '');
  if (!header.includes('xmlFeedName') || !header.includes('ean')) {
    console.error('Chyba: export neobsahuje stĺpec "ean" alebo "xmlFeedName" - over, že ide o plný produktový export.');
    process.exit(1);
  }

  const matchedRows = [];
  for (const r of records) {
    const ean = (r.ean || '').trim();
    const override = overrides[ean];
    if (!override) continue;
    matchedRows.push({ ...r, xmlFeedName: override.name });
  }
  console.log(`Spárovaných cez EAN: ${matchedRows.length}`);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  writeShoptetCsv(outPath, header, matchedRows);
  console.log(`Uložené: ${outPath} (${matchedRows.length} riadkov)`);

  if (limit) {
    const testPath = outPath.replace(/\.csv$/, `-TEST${limit}.csv`);
    writeShoptetCsv(testPath, header, matchedRows.slice(0, limit));
    console.log(`Testovacia vzorka: ${testPath} (${Math.min(limit, matchedRows.length)} riadkov)`);
  }
}

main();

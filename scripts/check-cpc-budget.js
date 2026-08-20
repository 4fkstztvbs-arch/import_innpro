// Manual-run check: how much did the Heureka CPC-override products (data/heureka-reports/
// cpc-overrides.json) actually cost, per day, against a daily budget cap?
//
// Heureka has no API for this performance data (same limitation as the sortiment report, see
// reports/prehlad-importov.md 4.3) - there's no way to pull it automatically. This script only
// works on whatever performance CSV someone has manually exported from Heureka and dropped into
// data/heureka-reports/performance/ (columns: date, shop_item_id, costs_with_vat_total, ...).
// Run it by hand whenever a fresh export lands; it does not run on a schedule.
//
// Usage: node scripts/check-cpc-budget.js [--dir=data/heureka-reports/performance] [--cap=15] [--file=<name>]
//   --cap is the daily budget cap in EUR (with VAT) for the SUM of all tracked override
//   products together, default 15 (see reports/heureka-cpc-test-2026-08-18.md for how that
//   number was derived).
// Exit code 0 always; prints OVER_BUDGET:<days> on stdout when any day exceeded the cap so a
// human (or future automation) can grep for it without parsing prose.

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const OVERRIDES_PATH = path.join(REPO_ROOT, 'data', 'heureka-reports', 'cpc-overrides.json');

function parseArgs(argv) {
  const args = { dir: path.join(REPO_ROOT, 'data', 'heureka-reports', 'performance'), cap: 15 };
  for (const a of argv) {
    const m = a.match(/^--([a-z]+)=(.*)$/);
    if (!m) continue;
    if (m[1] === 'cap') args.cap = parseFloat(m[2]);
    else args[m[1]] = m[2];
  }
  return args;
}

function findLatestReport(dir, explicitFile) {
  if (explicitFile) return path.join(dir, explicitFile);
  const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.csv'));
  if (!files.length) return null;
  // report<FROM>to<TO>.csv - sort by the TO date embedded in the filename, fall back to mtime.
  let best = null;
  for (const f of files) {
    const m = f.match(/to(\d{8})/);
    const key = m ? m[1] : fs.statSync(path.join(dir, f)).mtime.toISOString().replace(/\D/g, '').slice(0, 8);
    if (!best || key > best.key) best = { file: f, key };
  }
  return path.join(dir, best.file);
}

// Same small quoted-CSV parser as process-heureka-report.js (Nazov/shop_item_name fields can
// contain commas).
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

function readCsvRows(csvPath) {
  const raw = fs.readFileSync(csvPath, 'utf-8').replace(/^﻿/, '').trim().split('\n');
  const header = parseCsvLine(raw[0]);
  return raw.slice(1).map((line) => {
    const cols = parseCsvLine(line);
    const rec = {};
    header.forEach((h, i) => { rec[h] = cols[i]; });
    return rec;
  });
}

function fnum(s) { const v = parseFloat(s); return Number.isFinite(v) ? v : 0; }
function fmtEur(v) { return `${v.toFixed(2)} €`; }

function main() {
  const args = parseArgs(process.argv.slice(2));
  const dir = path.isAbsolute(args.dir) ? args.dir : path.join(REPO_ROOT, args.dir);
  const cap = args.cap;

  if (!fs.existsSync(OVERRIDES_PATH)) {
    console.error(`No ${OVERRIDES_PATH} - nothing to check.`);
    process.exit(0);
  }
  const overrides = JSON.parse(fs.readFileSync(OVERRIDES_PATH, 'utf-8'));
  // itemId -> { ean, cpc, name }
  const trackedByItemId = {};
  for (const [ean, o] of Object.entries(overrides)) {
    trackedByItemId[o.itemId] = { ean, cpc: o.cpc, name: o.name };
  }
  const trackedIds = new Set(Object.keys(trackedByItemId));

  if (!fs.existsSync(dir)) {
    console.log(`NOTHING_NEW (no ${dir} yet - drop a Heureka performance CSV export there first)`);
    return;
  }
  const reportPath = findLatestReport(dir, args.file);
  if (!reportPath || !fs.existsSync(reportPath)) {
    console.log(`NOTHING_NEW (no performance CSV found in ${dir})`);
    return;
  }

  const rows = readCsvRows(reportPath).filter((r) => trackedIds.has(r.shop_item_id));

  const byDay = {}; // date -> { cost, visits, orders, revenue, byItem: { itemId -> {cost, visits} } }
  for (const r of rows) {
    const day = byDay[r.date] || (byDay[r.date] = { cost: 0, visits: 0, orders: 0, revenue: 0, byItem: {} });
    const cost = fnum(r.costs_with_vat_total);
    day.cost += cost;
    day.visits += fnum(r.visits_total);
    day.orders += fnum(r.orders_total);
    day.revenue += fnum(r.revenue_total);
    const item = day.byItem[r.shop_item_id] || (day.byItem[r.shop_item_id] = { cost: 0, visits: 0 });
    item.cost += cost;
    item.visits += fnum(r.visits_total);
  }

  const days = Object.keys(byDay).sort();
  console.log(`Report: ${path.basename(reportPath)}`);
  console.log(`Sledovaných produktov (CPC override): ${trackedIds.size}`);
  console.log(`Denný cap: ${fmtEur(cap)}\n`);

  if (!days.length) {
    console.log('Žiadny riadok v reporte sa netýka sledovaných produktov (zatiaľ žiadne kliky/zobrazenia od zapnutia).');
    return;
  }

  const overDays = [];
  for (const day of days) {
    const d = byDay[day];
    const status = d.cost > cap ? '⚠️ NAD LIMITOM' : 'OK';
    if (d.cost > cap) overDays.push(day);
    console.log(`${day}  náklady=${fmtEur(d.cost)}  návštevy=${d.visits}  objednávky=${d.orders}  tržby=${fmtEur(d.revenue)}  [${status}]`);
  }

  console.log('\nPo produktoch (súčet za celý report):');
  const totalsByItem = {};
  for (const day of days) {
    for (const [itemId, v] of Object.entries(byDay[day].byItem)) {
      const t = totalsByItem[itemId] || (totalsByItem[itemId] = { cost: 0, visits: 0 });
      t.cost += v.cost; t.visits += v.visits;
    }
  }
  const sortedItems = Object.entries(totalsByItem).sort((a, b) => b[1].cost - a[1].cost);
  for (const [itemId, t] of sortedItems) {
    const meta = trackedByItemId[itemId];
    console.log(`  ${itemId.padEnd(18)} ${fmtEur(t.cost).padStart(9)}  ${String(t.visits).padStart(3)} návštev  ${meta.name}`);
  }
  const untouched = [...trackedIds].filter((id) => !totalsByItem[id]);
  if (untouched.length) {
    console.log(`\n${untouched.length} sledovaných produktov nemalo v tomto reporte žiadny riadok (0 nákladov, 0 návštev):`);
    for (const id of untouched) console.log(`  ${id}  ${trackedByItemId[id].name}`);
  }

  if (overDays.length) {
    console.log(`\nOVER_BUDGET:${overDays.join(',')}`);
  } else {
    console.log('\nVšetky dni v rámci denného capu.');
  }
}

main();

// One-time/occasional build step: turns a Shoptet category export CSV (Nastavenia > Export dát >
// Kategórie, or the "categories.csv" partner export URL from the Shoptet admin) into the flat
// known-categories.json snapshot that scripts/resolve-category.js uses as "the existing tree".
//
// Usage: node scripts/build-known-categories.js data/shoptet-categories-<date>.csv
//
// Re-run this whenever we want to intentionally grow the known tree (e.g. after manually adding a
// real new category in Shoptet, or after reviewing+approving new categories from a
// nezaradene-produkty report) — it is NOT run automatically by any *-sync.yml workflow, so the
// known tree only changes when a human deliberately regenerates it.

const fs = require('fs');
const path = require('path');

const CSV_PATH = process.argv[2];
const OUT_PATH = process.argv[3] || path.join(__dirname, '..', 'data', 'known-categories.json');

if (!CSV_PATH) {
  console.error('Usage: node scripts/build-known-categories.js <shoptet-categories.csv> [out.json]');
  process.exit(1);
}

function parseCsvLine(line) {
  const fields = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQ) {
      if (c === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else inQ = false; }
      else cur += c;
    } else if (c === '"') inQ = true;
    else if (c === ';') { fields.push(cur); cur = ''; }
    else cur += c;
  }
  fields.push(cur);
  return fields;
}

let raw = fs.readFileSync(CSV_PATH, 'utf-8').replace(/^﻿/, '');
const lines = raw.split(/\r\n|\n/).filter(Boolean);

const rows = [];
for (let i = 1; i < lines.length; i++) {
  const f = parseCsvLine(lines[i]);
  if (f.length < 8) continue;
  rows.push({ id: f[0], parentId: f[1], visible: f[4] === '1', title: f[7] });
}
const byId = new Map(rows.map((r) => [r.id, r]));

function fullPath(r) {
  const parts = [r.title];
  let cur = r;
  let guard = 0;
  while (cur.parentId && cur.parentId !== '1' && byId.has(cur.parentId) && guard++ < 20) {
    cur = byId.get(cur.parentId);
    parts.unshift(cur.title);
  }
  return parts.join(' > ');
}

const paths = new Set();
for (const r of rows) {
  if (!r.title || r.title === 'Druhy') continue; // Shoptet's internal "Druhy" root, not a real category
  paths.add(fullPath(r));
}

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, JSON.stringify([...paths].sort(), null, 1) + '\n');
console.log(`Written ${paths.size} known category paths to ${OUT_PATH}`);

#!/usr/bin/env node
'use strict';
// Odhad hmotnosti produktov, ktoré ju nemajú, so zameraním na hranicu 15 kg (hranica dopravcu pre veľké
// a ťažké zásielky). Nič nezapisuje do e-shopu; vyrobí CSV na import (code;weight) a kontrolný report.
//
// Poradie zdrojov (od najpresnejšieho):
//   1. ATOS balenie (data/atos-packing.json, hmotnosť na jednotku)          -> metóda "atos"
//   2. číslo v názve pri činkách a závažiach ("5 kg")                          -> metóda "nazov-kg"
//   3. najbližší susedia podľa veľkosti v názve (palce, kWh, Ah, W, l)         -> metóda "susedia"
//   4. skupina rovnakých produktov: kategória -> nadradená kategória -> prvé slovo názvu
//      Ak je v skupine väčšina nad 15 kg, odhad je medián ťažkých (aspoň 16 kg), inak medián (najviac 14,5 kg).
// Hranica 15 kg: pri nejasnej skupine (15-85 % referenčných produktov nad 15 kg) sa rozhoduje väčšinou.
//
// Použitie: node scripts/estimate-weights.js --in=export.csv --out=adresár [--backtest=3000]
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

const THRESHOLD = 15;
const HEAVY_MIN = 16;
const LIGHT_MAX = 14.5;
const HEAVY_SHARE = parseFloat(process.env.HEAVY_SHARE || '0.5');        // zmiešaná skupina sa berie ako ťažká od tohto podielu produktov nad 15 kg
const HEAVY_SHARE_STRICT = parseFloat(process.env.HEAVY_SHARE_STRICT || '0.8'); // jednoznačne ťažká skupina
const PREFIXES = ['', 'AT_', 'KB_', 'SOL_', 'MON_', 'PEN_', 'BAS_', 'WIIM_'];

const num = (s) => { const n = parseFloat(String(s || '').replace(',', '.')); return Number.isFinite(n) ? n : 0; };
const median = (a) => { const s = [...a].sort((x, y) => x - y); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const cdata = (s) => String(s || '').replace('<![CDATA[', '').replace(']]>', '').trim();

function loadCategories() {
  const map = new Map();
  for (const f of ['atos', 'kb', 'basys', 'monacor', 'penta', 'solight', 'innpro', 'wiim']) {
    const p = path.join('output', `${f}.xml`);
    if (!fs.existsSync(p)) continue;
    const xml = fs.readFileSync(p, 'utf8');
    for (const it of xml.split('<SHOPITEM>').slice(1)) {
      const c = it.match(/<CODE>([\s\S]*?)<\/CODE>/);
      if (!c) continue;
      const cats = [...it.matchAll(/<CATEGORY>([\s\S]*?)<\/CATEGORY>/g)].map((m) => cdata(m[1]));
      if (!cats.length) continue;
      const deepest = cats.reduce((a, b) => (b.split(' > ').length > a.split(' > ').length ? b : a));
      const parts = deepest.split(' > ');
      const info = { leaf: parts.join(' > '), parent: parts.slice(0, Math.max(1, parts.length - 1)).join(' > ') };
      const code = cdata(c[1]);
      for (const pre of PREFIXES) map.set(pre + code, info);
    }
  }
  return map;
}

function features(name) {
  const f = {};
  let m;
  if ((m = name.match(/(\d{2,3})\s*(?:"|″|”|''|palc|palcov)/i))) f.inch = num(m[1]);
  if ((m = name.match(/(\d+(?:[.,]\d+)?)\s*kWh/i))) f.kwh = num(m[1]);
  if ((m = name.match(/(\d+(?:[.,]\d+)?)\s*Ah\b/i))) f.ah = num(m[1]);
  if ((m = name.match(/(\d+(?:[.,]\d+)?)\s*(?:kW)\b/i))) f.w = num(m[1]) * 1000;
  else if ((m = name.match(/(\d{2,5}(?:[.,]\d+)?)\s*W(?:p)?\b/))) f.w = num(m[1]);
  if ((m = name.match(/(\d+(?:[.,]\d+)?)\s*(?:l|L|litr\w*)\b(?!\w)/))) f.l = num(m[1]);
  if ((m = name.match(/(\d+(?:[.,]\d+)?)\s*(?:m)\b(?!\w)/))) f.m = num(m[1]);
  return f;
}
const FEATURES = ['inch', 'kwh', 'ah', 'w', 'l']; // metre sa nepoužívajú: dĺžka kábla či látky nehovorí o hmotnosti

// hmotnosť uvedená v názve pri závažiach: "činka 5 kg", "kettlebell 16 kg"
function nameKg(name, group) {
  if (!/činky|činka|závaž|kettlebell|nakladac|kotúč|kotuc|gula|medicinbal|zaťažovacia|záťaž/i.test(`${name} ${group}`)) return null;
  if (/nosnos|do\s+\d+\s*kg|max\.?\s*\d+\s*kg/i.test(name)) return null;
  const m = name.match(/(\d+(?:[.,]\d+)?)\s*kg\b/i);
  if (!m) return null;
  const kg = num(m[1]);
  return kg > 0 && kg <= 200 ? Math.round(kg * 1.03 * 100) / 100 : null;
}

function makeIndex(known, cats) {
  const groups = { leaf: new Map(), parent: new Map(), word: new Map(), word2: new Map() };
  const push = (g, k, item) => { if (!k) return; if (!g.has(k)) g.set(k, []); g.get(k).push(item); };
  for (const p of known) {
    const c = cats.get(p.code);
    const item = { code: p.code, w: p.w, f: features(p.name) };
    if (c) { push(groups.leaf, c.leaf, item); push(groups.parent, c.parent, item); }
    push(groups.word, firstWords(p.name), item);
    push(groups.word2, firstWords(p.name, 2), item);
  }
  return groups;
}
function firstWords(name, n = 1) {
  const w = name.replace(/[,(].*$/, '').trim().split(/\s+/);
  return w.slice(0, n).join(' ').toLowerCase();
}

function knn(refs, f, self) {
  for (const k of FEATURES) {
    if (!(f[k] > 0)) continue;
    const withF = refs.filter((r) => r.code !== self && r.f[k] > 0);
    if (withF.length >= 5 && withF.length >= refs.length * 0.5) {
      const near = withF.map((r) => ({ r, d: Math.abs(Math.log(r.f[k] / f[k])) })).sort((x, y) => x.d - y.d).slice(0, 7).map((x) => x.r.w);
      const heavy = near.filter((w) => w > THRESHOLD).length / near.length >= 0.5;
      const mw = median(near);
      return { w: heavy ? Math.max(HEAVY_MIN, mw) : Math.min(LIGHT_MAX, mw), method: `susedia-${k}`, n: withF.length };
    }
  }
  return null;
}

// Názvy, ktoré patria príslušenstvu či malým veciam, aj keď zdieľajú prvé slovo s ťažkým tovarom (sporák-filter, sušička potravín...).
const HEAVY_DENY = /filter|kryt\b|plech|zásuvk|hubic|šampón|stylus|adaptér|kábl|káble|rohož|sedlovk|potravín|ovoc|ovoce|do auta|reproduktory do auta|ohrievač vody|digestor|odsávač|varná doska|indukčná doska|plynová varná|nosnosť|vrec|držiak|nosič na|tkanin/i;
// Zmiešané skupiny sa môžu označiť za ťažké len pri typoch produktov, ktoré sú nad 15 kg takmer vždy.
const HEAVY_ALLOW = /televízor|chladni|práčk|umývačk|sušička bielizne|rúra|sporák|subwoofer|reprosústav|bežecký pás|trenažér|činka|činkov|závaž|kettlebell|striedač|LiFePO4|solárny panel|nosič bicyklov|air bike|veža|zosilňovač|mraznič|pračk|sušiak/i;

const lightResult = (refs, method) => ({ w: Math.min(LIGHT_MAX, median(refs.filter((r) => r.w <= THRESHOLD).map((r) => r.w))), method, n: refs.length });
const heavyResult = (refs, method) => ({ w: Math.max(HEAVY_MIN, median(refs.filter((r) => r.w > THRESHOLD).map((r) => r.w))), method, n: refs.length });

function estimate(p, groups, cats, packing, self) {
  const r = estimateRaw(p, groups, cats, packing, self);
  if (!r || r.w <= THRESHOLD || r.method === 'atos' || r.method === 'nazov-kg') return r;
  const refsOf = () => { const c = cats.get(p.code); const g = (c && groups.leaf.get(c.leaf)) || groups.word.get(firstWords(p.name)) || []; return g.filter((x) => x.code !== self && x.w <= THRESHOLD).map((x) => x.w); };
  const light = () => { const l = refsOf(); return { w: Math.min(LIGHT_MAX, l.length ? median(l) : 1), method: 'skupina-ocistena', n: l.length }; };
  if (HEAVY_DENY.test(p.name)) return light();
  if (!r.method.startsWith('skupina')) return r;
  if (r.method === 'skupina-zmiesana-tazka' && !HEAVY_ALLOW.test(p.name)) return light();
  return { ...r, w: HEAVY_MIN }; // odhad zo skupiny: stačí vedieť, že je nad hranicou 15 kg
}

function estimateRaw(p, groups, cats, packing, self) {
  const a = packing[p.code.replace(/^AT_/, '')];
  if (a && a.weightKg > 0 && p.code.startsWith('AT_')) return { w: Math.round(a.weightKg * 1000) / 1000, method: 'atos', n: 1 };
  const c = cats.get(p.code);
  const f = features(p.name);
  const kg = nameKg(p.name, c ? c.leaf : '');
  if (kg) return { w: kg, method: 'nazov-kg', n: 1 };
  // od najkonkrétnejšej skupiny po najširšiu: typ produktu (2 slová), prvé slovo, kategória, nadradená kategória
  const levels = [[groups.word2.get(firstWords(p.name, 2)), 4], [groups.word.get(firstWords(p.name)), 6]];
  if (c) levels.push([groups.leaf.get(c.leaf), 8], [groups.parent.get(c.parent), 15]);
  let mixed = null;
  for (const [all, min] of levels) {
    if (!all) continue;
    const refs = all.filter((r) => r.code !== self);
    if (refs.length < min) continue;
    const share = refs.filter((r) => r.w > THRESHOLD).length / refs.length;
    if (share > 0.1) {
      const k = knn(refs, f, self);            // váha sa mení s veľkosťou (palce, kWh, ...)
      if (k) return k;
    }
    if (share <= 0.1) return lightResult(refs, 'skupina');
    if (share >= HEAVY_SHARE_STRICT && refs.length >= Math.max(min, 5)) return heavyResult(refs, 'skupina-tazka');
    if (!mixed && refs.length >= 8) mixed = { refs, share };
  }
  if (mixed) return mixed.share >= HEAVY_SHARE ? heavyResult(mixed.refs, 'skupina-zmiesana-tazka') : lightResult(mixed.refs, 'skupina-zmiesana');
  return null;
}

function main() {
  const arg = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || '').split('=').slice(1).join('=') || d;
  const input = arg('in');
  const out = arg('out', 'estimate-out');
  const backtest = parseInt(arg('backtest', '0'), 10);
  if (!input) { console.error('Chýba --in=<export.csv>'); process.exit(2); }
  const rows = parse(fs.readFileSync(input), { bom: true, delimiter: ';', columns: true, relax_column_count: true, skip_empty_lines: true });
  const cats = loadCategories();
  const packing = fs.existsSync('data/atos-packing.json') ? JSON.parse(fs.readFileSync('data/atos-packing.json', 'utf8')) : {};
  const known = rows.filter((r) => num(r.weight) > 0).map((r) => ({ code: r.code, name: r.name, w: num(r.weight) }));
  const missing = rows.filter((r) => num(r.weight) <= 0).map((r) => ({ code: r.code, name: r.name }));
  const groups = makeIndex(known, cats);

  if (backtest) {
    let n = 0; let ok = 0; let heavyTrue = 0; let heavyFound = 0; let falseHeavy = 0; let within = 0;
    const step = Math.max(1, Math.floor(known.length / backtest));
    for (let i = 0; i < known.length; i += step) {
      const p = known[i];
      const e = estimate({ code: p.code, name: p.name }, groups, cats, {}, p.code);
      if (!e) continue;
      n++;
      const trueHeavy = p.w > THRESHOLD; const predHeavy = e.w > THRESHOLD;
      if (trueHeavy === predHeavy) ok++;
      if (trueHeavy) { heavyTrue++; if (predHeavy) heavyFound++; else if (process.env.BACKTEST_MISSES) console.log(`MISS | ${(cats.get(p.code) || {}).leaf || '?'} | ${p.name.slice(0, 70)} | real ${p.w} | odhad ${e.w} | ${e.method}`); }
      if (!trueHeavy && predHeavy) falseHeavy++;
      if (e.w >= p.w / 2 && e.w <= p.w * 2) within++;
    }
    console.log(JSON.stringify({ backtestProducts: n, sameSideOf15kg: +(ok / n).toFixed(4), heavyProducts: heavyTrue, heavyRecognised: heavyFound, heavyRecall: +(heavyFound / Math.max(1, heavyTrue)).toFixed(3), falseHeavy, withinFactor2: +(within / n).toFixed(3) }, null, 2));
    return;
  }

  fs.mkdirSync(out, { recursive: true });
  const header = 'code;weight';
  const csvOut = [header];
  const report = ['code;name;weight;method;refs;over15'];
  const stats = {};
  let skipped = 0;
  for (const p of missing) {
    const e = estimate(p, groups, cats, packing, null);
    if (!e || !(e.w > 0)) { skipped++; continue; }
    const w = Math.max(0.01, Math.round(e.w * 1000) / 1000);
    csvOut.push(`"${p.code}";"${String(w).replace('.', ',')}"`);
    report.push([p.code, `"${p.name.replace(/"/g, '""')}"`, String(w).replace('.', ','), e.method, e.n, w > THRESHOLD ? 'ano' : 'nie'].join(';'));
    const k = e.method.split('-')[0] + (w > THRESHOLD ? ' >15kg' : '');
    stats[k] = (stats[k] || 0) + 1;
  }
  fs.writeFileSync(path.join(out, 'import-vahy-odhad.csv'), `﻿${csvOut.join('\n')}\n`);
  fs.writeFileSync(path.join(out, 'report-odhad.csv'), `﻿${report.join('\n')}\n`);
  console.log(JSON.stringify({ missing: missing.length, estimated: csvOut.length - 1, notEstimated: skipped, byMethod: stats }, null, 2));
}

if (require.main === module) main();
module.exports = { estimate, features, nameKg };

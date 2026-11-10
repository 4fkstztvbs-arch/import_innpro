#!/usr/bin/env node
'use strict';
// Stiahne z ATOS i6ws výstup StiPacking_El (balenie: hmotnosť a rozmery) a uloží
// mapu kód -> {weightKg, ...} do data/atos-packing.json. Nič nezapisuje do feedov ani do e-shopu.
// Štruktúra výstupu nie je zdokumentovaná, preto sa do logu vypíše vzorka záznamov a zoznam tagov,
// aby sa dal parser spresniť. Overené 2026-10-05: HTTP 200 aj cez deň, 12 384 záznamov StoItem.
// Env: ATOS_USERNAME, ATOS_PASSWORD, PACKING_OUT (default data/atos-packing.json), PACKING_SAMPLE (default 3).
const fs = require('fs');
const path = require('path');
const { streamRecords } = require('./stream-records');

const USER = process.env.ATOS_USERNAME;
const PASS = process.env.ATOS_PASSWORD;
const OUT = process.env.PACKING_OUT || 'data/atos-packing.json';
const SAMPLE = parseInt(process.env.PACKING_SAMPLE || '3', 10);
const URL = 'https://shop.atoselektro.cz/i6ws/Default.asmx/GetResult?resultType=StiPacking_El';
if (!USER || !PASS) { console.error('Chýba ATOS_USERNAME / ATOS_PASSWORD.'); process.exit(1); }

const leaf = (xml, tag) => { const m = xml.match(new RegExp(`<${tag}>([^<]*)</${tag}>`)); return m ? m[1].trim() : ''; };
const num = (s) => { const n = parseFloat(String(s || '').replace(',', '.')); return Number.isFinite(n) ? n : 0; };
const WEIGHTISH = /weight|wght|hmotn|brutto|netto|gross|net\b|mass/i;

(async () => {
  const items = {};
  const tagCount = new Map();
  let total = 0; let shown = 0;
  await streamRecords(URL, 'StoItem', (raw) => {
    total++;
    for (const m of raw.matchAll(/<([A-Za-z_][\w.-]*)>/g)) tagCount.set(m[1], (tagCount.get(m[1]) || 0) + 1);
    if (shown < SAMPLE && /Weight|Hmotn/i.test(raw)) { shown++; console.log(`--- vzorka ${shown}\n${raw.slice(0, 3000)}`); }
    const code = leaf(raw, 'Code');
    if (!code) return;
    // Záznam môže mať viac balení (jednotka, kartón...). Preferuje sa balenie "UNI" s množstvom 1,
    // inak sa hmotnosť balenia vydelí jeho množstvom.
    let best = null;
    for (const blk of raw.match(/<StiPacking>[\s\S]*?<\/StiPacking>/g) || []) {
      const w = num(leaf(blk, 'Weight')); const q = num(leaf(blk, 'Qty')) || 1;
      if (!(w > 0)) continue;
      const unit = leaf(blk, 'PauCode') === 'UNI' && q === 1;
      const cand = { weightKg: unit ? w : w / q, perUnit: unit, pack: leaf(blk, 'PauCode'), qty: q };
      if (!best || (cand.perUnit && !best.perUnit)) best = cand;
    }
    const dims = {};
    for (const t of ['Length', 'Width', 'Height', 'Volume']) { const v = num(leaf(raw, t)); if (v > 0) dims[t.toLowerCase()] = v; }
    if (best || Object.keys(dims).length) items[code] = { ...(best || {}), ...dims };
  }, { username: USER, password: PASS });

  console.log(`StiPacking_El: ${total} záznamov, ${Object.keys(items).length} s údajmi o balení`);
  console.log('Tagy:', [...tagCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 60).map(([k, v]) => `${k}=${v}`).join(', '));
  const wTags = [...tagCount.keys()].filter((k) => WEIGHTISH.test(k));
  const kg = Object.values(items).map((f) => f.weightKg).filter((v) => v > 0).sort((a, b) => a - b);
  console.log(`Hmotnosť na jednotku: ${kg.length} produktov, medián ${kg[Math.floor(kg.length / 2)] || 0} kg, nad 15 kg: ${kg.filter((v) => v > 15).length}`);
  for (const t of wTags) {
    console.log(`- tag ${t} sa vyskytuje`);
  }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(items));
})().catch((e) => { console.error(e); process.exit(1); });

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
    const fields = {};
    for (const m of raw.matchAll(/<([A-Za-z_][\w.-]*)>([^<]{1,30})<\/\1>/g)) {
      if (WEIGHTISH.test(m[1]) || /width|height|depth|length|dimens|sirk|vys|hlb|dlz|volume|obj/i.test(m[1])) fields[m[1]] = m[2].trim();
    }
    if (Object.keys(fields).length) items[code] = fields;
  }, { username: USER, password: PASS });

  console.log(`StiPacking_El: ${total} záznamov, ${Object.keys(items).length} s údajmi o balení`);
  console.log('Tagy:', [...tagCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 60).map(([k, v]) => `${k}=${v}`).join(', '));
  const wTags = [...tagCount.keys()].filter((k) => WEIGHTISH.test(k));
  for (const t of wTags) {
    const vals = Object.values(items).map((f) => num(f[t])).filter((v) => v > 0);
    vals.sort((a, b) => a - b);
    console.log(`- ${t}: nenulových ${vals.length}, medián ${vals[Math.floor(vals.length / 2)] || 0}, nad 15: ${vals.filter((v) => v > 15).length}`);
  }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(items));
})().catch((e) => { console.error(e); process.exit(1); });

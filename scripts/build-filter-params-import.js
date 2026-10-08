// Zostaví CSV pre Shoptet import "Parametre na filtrovanie" (stĺpce filteringProperty:Názov) z výstupných feedov.
// Konfigurácia: data/filter-params/filters.json (kategória -> { názov parametra vo feede: názov filtra v Shoptete }).
// Usage: node scripts/build-filter-params-import.js [out.csv]
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const cfg = JSON.parse(fs.readFileSync(path.join(root, 'data/filter-params/filters.json'), 'utf8'));
const unwrap = (s) => { const m = s.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/); return m ? m[1] : s; };
const csv = (v) => `"${String(v).replace(/"/g, '""')}"`;
const lowerFirst = (s) => (/^\p{Lu}\p{Ll}+(?:[\s,/-]\p{Ll}+)*$/u.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s);
// Do filtra nepatria dlhá voľná veta ani "neuvedené": zákazník by videl nepoužiteľné hodnoty.
const usable = (v) => v.length <= 30 && !/neuv[aáe]d|nezad[aá]n|neuveden/i.test(v);
const shoptetCode = (prefix, code) => prefix + code.trim().replace(/\s+/g, '_');

const columns = [...new Set(cfg.kategorie.flatMap((k) => Object.values(k.filtre)))];
const rows = [];
for (const [supplier, prefix] of Object.entries(cfg.prefixy)) {
  const file = path.join(root, 'output', `${supplier}.xml`);
  if (!fs.existsSync(file)) continue;
  const xml = fs.readFileSync(file, 'utf8');
  for (const it of xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || []) {
    const code = (it.match(/<CODE>([\s\S]*?)<\/CODE>/) || [])[1];
    if (!code) continue;
    const cats = [...it.matchAll(/<CATEGORY>([\s\S]*?)<\/CATEGORY>/g)].map((m) => unwrap(m[1].trim()));
    const params = {};
    for (const p of it.matchAll(/<(?:TEXT_PROPERTY|INFORMATION_PARAMETER)>([\s\S]*?)<\/(?:TEXT_PROPERTY|INFORMATION_PARAMETER)>/g)) {
      const name = unwrap((p[1].match(/<NAME>([\s\S]*?)<\/NAME>/) || [, ''])[1].trim());
      const vals = [...p[1].matchAll(/<VALUE>([\s\S]*?)<\/VALUE>/g)].map((m) => unwrap(m[1].trim())).filter(Boolean);
      if (name && vals.length && !params[name]) params[name] = vals[0];
    }
    const row = {};
    for (const k of cfg.kategorie) {
      if (!cats.includes(k.kategoria)) continue;
      for (const [feedName, filterName] of Object.entries(k.filtre)) if (params[feedName] && usable(params[feedName])) row[filterName] = filterName === 'Farba' ? lowerFirst(params[feedName]) : params[feedName];
    }
    if (Object.keys(row).length) rows.push({ code: shoptetCode(prefix, unwrap(code.trim())), row });
  }
}
// Shoptet vyžaduje pairCode ako druhý stĺpec (prázdny pri produktoch bez variantov).
const lines = [['code', 'pairCode', ...columns.map((c) => `filteringProperty:${c}`)].map(csv).join(';')];
for (const r of rows) lines.push([csv(r.code), csv(''), ...columns.map((c) => csv(r.row[c] || ''))].join(';'));
const out = process.argv[2] || 'filter-params-import.csv';
fs.writeFileSync(out, '﻿' + lines.join('\n') + '\n');
console.log(`Riadkov: ${rows.length}, stĺpce: ${columns.join(', ')} -> ${out}`);

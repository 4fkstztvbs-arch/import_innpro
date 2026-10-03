#!/usr/bin/env node
'use strict';
// Porovná dve sady feedov (napr. skúšobnú jednu dávku a feedy aktuálne v main) a vypíše súhrn.
// Nič nemení a nikdy nepadne na rozdieloch: slúži len na posúdenie, či nová dávka dáva rovnaký výstup.
//
// Usage: node scripts/compare-feeds.js --a=/tmp/baseline --b=output [--suppliers=kb,innpro] [--examples=3]
// Výstup je markdown (hodí sa do $GITHUB_STEP_SUMMARY).

const fs = require('fs');
const path = require('path');

const arg = (n, d) => (process.argv.find((a) => a.startsWith(`--${n}=`)) || '').slice(n.length + 3) || d;
const DIR_A = arg('a');
const DIR_B = arg('b');
const EXAMPLES = Number(arg('examples', '3'));
if (!DIR_A || !DIR_B) { console.error('Usage: --a=<dir> --b=<dir>'); process.exit(2); }
const only = arg('suppliers', '') ? arg('suppliers').split(',') : null;

const items = (xml) => {
  const map = new Map();
  for (const m of xml.matchAll(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g)) {
    const code = (m[0].match(/<CODE>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/CODE>/s) || [])[1];
    if (code) map.set(code.trim(), m[0]);
  }
  return map;
};
const tagValue = (block, tag) => {
  const m = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return m ? m[1] : null;
};
const tagNames = (block) => new Set([...block.matchAll(/<([A-Z][A-Z0-9_]*)[\s>]/g)].map((m) => m[1]));
const cut = (s) => (s == null ? '(chýba)' : String(s).replace(/\s+/g, ' ').slice(0, 80));

const files = fs.readdirSync(DIR_B).filter((f) => f.endsWith('.xml')).sort()
  .filter((f) => !only || only.includes(f.replace('.xml', '')));

console.log('| Feed | Produkty A | Produkty B | Pribudlo | Zmizlo | Zmenených | Rovnakých |');
console.log('|---|---:|---:|---:|---:|---:|---:|');
const details = [];
for (const f of files) {
  const pa = path.join(DIR_A, f);
  if (!fs.existsSync(pa)) { console.log(`| ${f} | – | – | – | – | – | (chýba základ) |`); continue; }
  const A = items(fs.readFileSync(pa, 'utf8'));
  const B = items(fs.readFileSync(path.join(DIR_B, f), 'utf8'));
  let added = 0, removed = 0, changed = 0, same = 0;
  const byTag = new Map();
  const examples = new Map();
  for (const [code, b] of B) {
    const a = A.get(code);
    if (!a) { added++; continue; }
    if (a === b) { same++; continue; }
    changed++;
    const tags = new Set([...tagNames(a), ...tagNames(b)]);
    for (const t of tags) {
      const va = tagValue(a, t), vb = tagValue(b, t);
      if (va !== vb) {
        byTag.set(t, (byTag.get(t) || 0) + 1);
        const ex = examples.get(t) || [];
        if (ex.length < EXAMPLES) { ex.push(`${code}: ${cut(va)} → ${cut(vb)}`); examples.set(t, ex); }
      }
    }
  }
  for (const code of A.keys()) if (!B.has(code)) removed++;
  console.log(`| ${f} | ${A.size} | ${B.size} | ${added} | ${removed} | ${changed} | ${same} |`);
  if (byTag.size) details.push([f, [...byTag.entries()].sort((x, y) => y[1] - x[1]).slice(0, 8), examples]);
}
for (const [f, tags, examples] of details) {
  console.log(`\n### ${f}: najčastejšie zmenené polia\n`);
  for (const [t, n] of tags) {
    console.log(`- \`${t}\`: ${n}×`);
    for (const e of examples.get(t) || []) console.log(`  - ${e}`);
  }
}

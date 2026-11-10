#!/usr/bin/env node
'use strict';
// Kontrola exportu produktov zo Shoptetu (stĺpce: code;pairCode;name;guid;shortDescription;
// description;manufacturer;metaDescription;weight;seoTitle). Nič nezapisuje do e-shopu.
// Použitie: node scripts/audit-shoptet-export.js --in=products.csv --out=reports/shoptet-export-audit
// Výstup: summary.json, summary.md a zoznamy na opravu (CSV s oddeľovačom ;).
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const he = require('he');

const CZ_CHARS = /[ěřůĚŘŮ]/;
const CZ_WORDS = /(^|[^\p{L}])(černá|černý|černé|bílá|bílý|bílé|žlutá|růžová|stříbrná|sluchátka|nabíječka|kabel|držák|baterie|svítilna|žárovka|světlo|dálkový|ovladač|náhradní|dětský|dětská|nebo|včetně|vysavač|konvice|pračka|lednice|myčka|trouba|bezdrátov[áýé]|přenosn[áýé])(?=$|[^\p{L}])/iu;
const GENERIC_NAME = /^(Príslušenstvo|Produkt|Tovar|Doplnok)(\s|$)/;
const CODE_IN_NAME = /katalógový kód|\((KB|AT|SOL|MON|PEN|BAS)_[^)]*\)/;
const WEIGHT = /([Hh]motnos[tť][ií]?|HMOTNOS[TŤ]|[Vv]áha)([^0-9<]{0,25}?)(\d{1,4}(?:[.,]\d{1,3})?)\s*(kg|g)(?![\p{L}\d/])/gu;
const AFTER_NOT_PRODUCT = /^\s*(na (1|jeden|jedno|jedného)|slúchadl|sluchátk|\(?na jedno|\/|za kus|na kus)/i;
const MULTIPACK = /(^|[^\d,.])([2-9]|\d{2,})\s*(ks|kusov|kusy)(?![\p{L}])/iu;
const NOT_PRODUCT_WEIGHT = /nosnos|zaťaž|zatíž|zátěž|záťaž|max|užívateľ|uživatel|používateľ|do\s*$|až\s*$|kapacit|váživos|rozsah|osoby|obsahu|náplne|náplně|předmět|predmet|krídl|křídl|brán|toleranc|presnos|přesnos|indikátor|slúchadla \/|sluchátka \//i;

const isCzech = (s) => CZ_CHARS.test(s) || CZ_WORDS.test(s);
const stripHtml = (h) => he.decode(String(h || '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const num = (s) => { const n = parseFloat(String(s || '0').replace(',', '.')); return Number.isFinite(n) ? n : 0; };

// Vráti hmotnosť v kg nájdenú v texte, alebo null. Uprednostní údaj s obalom.
function weightFromText(text) {
  const found = [];
  for (const m of text.matchAll(WEIGHT)) {
    const before = text.slice(Math.max(0, m.index - 25), m.index);
    if (NOT_PRODUCT_WEIGHT.test(m[2]) || NOT_PRODUCT_WEIGHT.test(before)) continue;
    if (AFTER_NOT_PRODUCT.test(text.slice(m.index + m[0].length, m.index + m[0].length + 20))) continue;
    let kg = parseFloat(m[3].replace(',', '.'));
    if (m[4].toLowerCase() === 'g') kg /= 1000;
    if (!(kg >= 0.001 && kg <= 500)) continue;
    const packed = /obal|brutto|balen|preprav|přeprav/i.test(m[2] + text.slice(m.index, m.index + m[0].length + 25));
    found.push({ kg: Math.round(kg * 1000) / 1000, packed, snippet: text.slice(Math.max(0, m.index - 20), m.index + m[0].length + 15) });
  }
  if (!found.length) return null;
  return found.find((f) => f.packed) || found[0];
}

function audit(rows) {
  const lists = { newProducts: [], czechNames: [], genericNames: [], codeInName: [], weightsFromText: [] };
  const counts = { products: rows.length, weightMissing: 0, weightRecoverableFromText: 0, seoTitleEmpty: 0, seoTitleSameAsName: 0,
    metaEmpty: 0, metaTooShort: 0, metaTooLong: 0, nameCzech: 0, nameGeneric: 0, nameCodeSuffix: 0, nameTooLong: 0, descriptionCzech: 0, descriptionTooShort: 0 };
  for (const r of rows) {
    const name = r.name || '';
    const seo = (r.seoTitle || '').trim();
    const meta = (r.metaDescription || '').trim();
    const text = stripHtml(r.description);
    if (!seo) counts.seoTitleEmpty++; else if (seo === name.trim()) counts.seoTitleSameAsName++;
    if (!meta) counts.metaEmpty++; else if (meta.length < 90) counts.metaTooShort++; else if (meta.length > 165) counts.metaTooLong++;
    if (!seo && !meta) lists.newProducts.push({ code: r.code, guid: r.guid, name });
    if (isCzech(name)) { counts.nameCzech++; lists.czechNames.push({ code: r.code, guid: r.guid, name }); }
    if (GENERIC_NAME.test(name)) { counts.nameGeneric++; lists.genericNames.push({ code: r.code, guid: r.guid, name }); }
    if (CODE_IN_NAME.test(name)) { counts.nameCodeSuffix++; lists.codeInName.push({ code: r.code, guid: r.guid, name }); }
    if (name.length > 90) counts.nameTooLong++;
    if (isCzech(text.slice(0, 800))) counts.descriptionCzech++;
    if (text.length < 300) counts.descriptionTooShort++;
    if (num(r.weight) <= 0) {
      counts.weightMissing++;
      if (/(^|[^\p{L}])váh[ay]($|[^\p{L}])/iu.test(name)) continue; // váhy: údaj v texte býva váživosť
      if (MULTIPACK.test(name)) continue; // balenie viacerých kusov: údaj býva za jeden kus
      const w = weightFromText(`${text} ${stripHtml(r.shortDescription)}`);
      if (w) { counts.weightRecoverableFromText++; lists.weightsFromText.push({ code: r.code, guid: r.guid, weight: w.kg, snippet: w.snippet, name }); }
    }
  }
  return { counts, lists };
}

const csvLine = (cells) => cells.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(';');

function main() {
  const arg = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || '').split('=').slice(1).join('=') || d;
  const input = arg('in');
  const out = arg('out', 'reports/shoptet-export-audit');
  if (!input) { console.error('Chýba --in=<export.csv>'); process.exit(2); }
  const rows = parse(fs.readFileSync(input), { bom: true, delimiter: ';', columns: true, relax_column_count: true, skip_empty_lines: true });
  const { counts, lists } = audit(rows);
  fs.mkdirSync(out, { recursive: true });
  const date = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(out, 'summary.json'), `${JSON.stringify({ date, counts }, null, 2)}\n`);
  for (const [key, items] of Object.entries(lists)) {
    if (!items.length) { fs.rmSync(path.join(out, `${key}.csv`), { force: true }); continue; }
    const cols = Object.keys(items[0]);
    fs.writeFileSync(path.join(out, `${key}.csv`), `﻿${[cols.join(';'), ...items.map((i) => csvLine(cols.map((c) => i[c])))].join('\n')}\n`);
  }
  const md = [`# Kontrola exportu Shoptet – ${date}`, '', '| Ukazovateľ | Počet |', '|---|---|', ...Object.entries(counts).map(([k, v]) => `| ${k} | ${v} |`), ''];
  fs.writeFileSync(path.join(out, 'summary.md'), md.join('\n'));
  console.log(JSON.stringify(counts, null, 2));
}

if (require.main === module) main();
module.exports = { audit, weightFromText, isCzech };

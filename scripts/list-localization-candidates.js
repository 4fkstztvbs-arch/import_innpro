#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { extractTag, loadRegistry } = require('./localize-product-names');

const supplier = process.argv[2];
const limit = Number(process.argv[3] || 80);
if (!['kb','atos'].includes(supplier)) {
  console.error('Usage: node scripts/list-localization-candidates.js kb|atos [limit]');
  process.exit(1);
}

const xml = fs.readFileSync(path.join(__dirname, '..', 'output', supplier + '.xml'), 'utf8');
const registry = loadRegistry();
const registered = new Set(registry.products.filter(p => p.supplier === supplier).map(p => p.code));

const czEn = /\b(?:bezdr[aá]t|dr[zž][aá]k|čern|cern|b[ií]l|šed|sed|žlut|zlut|stříbr|stribr|dřev|drev|suš[aá]k|susak|pr[aá]dlo|běžeck|bezeck|zvonek|svorkovnic|šroub|sroub|koaxi[aá]ln|kabel|pouzdro|telefon|náhradn[ií]|filtr|vakuovac|rolk|sendvičovač|chladic|podstav|prodluž|prodluz|měnič|menic|př[ií]slušen|prislusen|nástěnn|nasten|wireless|black|white|grey|gray|red|yellow|blue|mouse|router|range extender|holder|adapter|charger|headphones|earphones|speaker|vacuum|keyboard|coffee|kettle|toaster|iron)\b/i;

const candidates = [];
for (const block of xml.match(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g) || []) {
  const code = extractTag(block, 'CODE').trim();
  if (!code || registered.has(code)) continue;
  const name = extractTag(block, 'NAME').trim();
  if (!name || !czEn.test(name)) continue;
  candidates.push({
    code,
    ean: extractTag(block, 'EAN').trim(),
    name,
    category: extractTag(block, 'CATEGORY').trim(),
  });
  if (candidates.length >= limit) break;
}
console.log(JSON.stringify({supplier, count:candidates.length, candidates}, null, 2));

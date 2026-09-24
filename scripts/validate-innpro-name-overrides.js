#!/usr/bin/env node
'use strict';

const fs = require('fs');
const { extractTag } = require('./localize-product-names');
const { loadNameOverrides, normalizeManufacturer } = require('./innpro-name-overrides');

function validate(xml, overrides = loadNameOverrides()) {
  const items = [...xml.matchAll(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g)].map(match => match[0]);
  const report = { checked: 0, absent: [], issues: [] };
  for (const entry of overrides) {
    const matches = items.filter(item => extractTag(item, 'CODE').trim() === entry.code);
    if (matches.length === 0) {
      report.absent.push(entry.code);
      continue;
    }
    if (matches.length !== 1) {
      report.issues.push({ code: entry.code, reason: 'duplicate-code', count: matches.length });
      continue;
    }
    const item = matches[0];
    const actual = {
      ean: extractTag(item, 'EAN').trim(),
      manufacturer: extractTag(item, 'MANUFACTURER').trim(),
      name: extractTag(item, 'NAME'),
    };
    const expected = { ean: entry.ean, manufacturer: entry.manufacturer, name: entry.name };
    if (actual.ean !== expected.ean
        || normalizeManufacturer(actual.manufacturer) !== normalizeManufacturer(expected.manufacturer)
        || actual.name !== expected.name) {
      report.issues.push({ code: entry.code, reason: 'identity-or-name-mismatch', expected, actual });
      continue;
    }
    report.checked++;
  }
  report.ok = report.issues.length === 0;
  return report;
}

function main() {
  const input = process.argv.find(arg => arg.startsWith('--in='))?.slice(5);
  if (!input) {
    console.error('Usage: node scripts/validate-innpro-name-overrides.js --in=output/innpro.xml');
    process.exit(1);
  }
  const report = validate(fs.readFileSync(input, 'utf8'));
  console.log(JSON.stringify(report, null, 2));
  if (!report.ok) process.exit(2);
}

if (require.main === module) main();

module.exports = { validate };

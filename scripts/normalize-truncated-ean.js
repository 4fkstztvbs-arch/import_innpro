#!/usr/bin/env node

// Restore two leading zeroes only when an 11-digit supplier value becomes a valid
// GTIN-13. Several supplier feeds store these identifiers as numbers and drop zeros;
// the check digit makes this a reversible formatting repair rather than a product guess.
const fs = require('fs');

function isValidEan13(value) {
  if (!/^\d{13}$/.test(value)) return false;
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += Number(value[i]) * (i % 2 === 0 ? 1 : 3);
  }
  return (sum + Number(value[12])) % 10 === 0;
}

function restoreLeadingZeros(value) {
  if (!/^\d{11}$/.test(value)) return value;
  const candidate = `00${value}`;
  return isValidEan13(candidate) ? candidate : value;
}

const paths = process.argv.slice(2);
if (!paths.length) {
  console.error('Usage: node scripts/normalize-truncated-ean.js <feed.xml> [feed.xml ...]');
  process.exit(1);
}

for (const path of paths) {
  const xml = fs.readFileSync(path, 'utf8');
  let changed = 0;
  const normalized = xml.replace(/(<EAN>)([^<]*)(<\/EAN>)/gi, (match, open, value, close) => {
    const restored = restoreLeadingZeros(value.trim());
    if (restored === value.trim()) return match;
    changed++;
    return open + restored + close;
  });
  if (normalized !== xml) fs.writeFileSync(path, normalized, 'utf8');
  console.log(`${path}: restored leading zeroes for ${changed} EAN value(s)`);
}

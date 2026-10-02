#!/usr/bin/env node

// Restore leading zeroes only when a truncated supplier value becomes a valid GTIN-13.
// Eleven-digit values may have lost two zeroes; valid UPC-A values need one leading zero.
// The check digit makes both repairs reversible formatting fixes rather than product guesses.
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
  if (/^\d{12}$/.test(value)) {
    const candidate = `0${value}`;
    return isValidEan13(candidate) ? candidate : value;
  }
  if (/^\d{11}$/.test(value)) {
    const candidate = `00${value}`;
    return isValidEan13(candidate) ? candidate : value;
  }
  return value;
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

'use strict';

const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'output', 'solight.xml');
const original = fs.readFileSync(file, 'utf8');

let converted = 0;
let itemsWithCategories = 0;
let itemsWithoutCategories = 0;

const updated = original.replace(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g, (item) => {
  const blockMatch = item.match(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/);
  if (!blockMatch) {
    itemsWithoutCategories++;
    return item;
  }

  itemsWithCategories++;
  const block = blockMatch[0];
  const defaults = (block.match(/<DEFAULT_CATEGORY>/g) || []).length;
  const categories = (block.match(/<CATEGORY>/g) || []).length;

  if (defaults > 1) {
    throw new Error('Solight SHOPITEM has multiple DEFAULT_CATEGORY tags');
  }

  if (defaults === 1) return item;

  if (categories === 0) {
    throw new Error('Solight SHOPITEM has CATEGORIES but no category entry');
  }

  const normalized = block.replace(
    /<CATEGORY>([\s\S]*?)<\/CATEGORY>/,
    '<DEFAULT_CATEGORY>$1</DEFAULT_CATEGORY>'
  );
  converted++;
  return item.replace(block, normalized);
});

if (updated === original && converted !== 0) {
  throw new Error('Unexpected Solight default-category normalizer state');
}

let checked = 0;
for (const m of updated.matchAll(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g)) {
  const item = m[0];
  const blockMatch = item.match(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/);
  if (!blockMatch) continue;
  checked++;
  const defaults = (blockMatch[0].match(/<DEFAULT_CATEGORY>/g) || []).length;
  if (defaults !== 1) {
    throw new Error('Solight validation failed: categorized SHOPITEM must have exactly one DEFAULT_CATEGORY');
  }
}

fs.writeFileSync(file, updated, 'utf8');
console.log(JSON.stringify({
  file: 'output/solight.xml',
  converted,
  itemsWithCategories,
  itemsWithoutCategories,
  validated: checked
}));

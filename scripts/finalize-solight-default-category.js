'use strict';

const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'output', 'solight.xml');
const original = fs.readFileSync(file, 'utf8');

let converted = 0;
let reordered = 0;
let itemsWithCategories = 0;
let itemsWithoutCategories = 0;

function valueOf(tag) {
  const m = tag.match(/<[^>]+>([\s\S]*?)<\/[^>]+>/);
  return m ? m[1].trim() : '';
}

const updated = original.replace(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g, (item) => {
  const blockMatch = item.match(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/);
  if (!blockMatch) {
    itemsWithoutCategories++;
    return item;
  }

  itemsWithCategories++;
  const block = blockMatch[0];
  const defaults = [...block.matchAll(/<DEFAULT_CATEGORY\b[^>]*>[\s\S]*?<\/DEFAULT_CATEGORY>/g)].map(m => m[0]);
  const categories = [...block.matchAll(/<CATEGORY\b[^>]*>[\s\S]*?<\/CATEGORY>/g)].map(m => m[0]);

  if (defaults.length > 1) {
    throw new Error('Solight SHOPITEM has multiple DEFAULT_CATEGORY tags');
  }
  if (!defaults.length && !categories.length) {
    throw new Error('Solight SHOPITEM has CATEGORIES but no category entry');
  }

  let defaultTag;
  let categoryTags = categories.slice();

  if (defaults.length === 1) {
    defaultTag = defaults[0];
  } else {
    // Prvá CATEGORY je v našom pipeline hlavná/listová kategória.
    const first = categoryTags.shift();
    defaultTag = first
      .replace(/^<CATEGORY\b/, '<DEFAULT_CATEGORY')
      .replace(/<\/CATEGORY>$/, '</DEFAULT_CATEGORY>');
    converted++;
  }

  // Ak sa tá istá cesta nachádza aj ako CATEGORY aj DEFAULT_CATEGORY, CATEGORY je redundantná.
  const defaultValue = valueOf(defaultTag);
  categoryTags = categoryTags.filter((tag, i, arr) =>
    valueOf(tag) !== defaultValue && arr.findIndex(x => valueOf(x) === valueOf(tag)) === i
  );

  // Shoptet products-complete-v10.rng: CATEGORY elementy musia byť pred DEFAULT_CATEGORY.
  const normalized = '<CATEGORIES>\n'
    + categoryTags.map(tag => '  ' + tag.trim()).join('\n')
    + (categoryTags.length ? '\n' : '')
    + '  ' + defaultTag.trim() + '\n'
    + '</CATEGORIES>';

  if (normalized !== block) reordered++;
  return item.replace(block, normalized);
});

let checked = 0;
for (const m of updated.matchAll(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g)) {
  const blockMatch = m[0].match(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/);
  if (!blockMatch) continue;
  checked++;
  const block = blockMatch[0];
  const defaults = (block.match(/<DEFAULT_CATEGORY\b/g) || []).length;
  if (defaults !== 1) {
    throw new Error('Solight validation failed: categorized SHOPITEM must have exactly one DEFAULT_CATEGORY');
  }
  const defaultPos = block.indexOf('<DEFAULT_CATEGORY');
  const categoryAfterDefault = block.slice(defaultPos).includes('<CATEGORY');
  if (categoryAfterDefault) {
    throw new Error('Solight validation failed: CATEGORY must precede DEFAULT_CATEGORY');
  }
}

fs.writeFileSync(file, updated, 'utf8');
console.log(JSON.stringify({
  file: 'output/solight.xml',
  converted,
  reordered,
  itemsWithCategories,
  itemsWithoutCategories,
  validated: checked
}));

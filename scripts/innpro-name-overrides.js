'use strict';

const fs = require('fs');
const path = require('path');

const OVERRIDES_PATH = path.join(__dirname, '..', 'data', 'localization', 'innpro-name-overrides.json');

function loadNameOverrides(file = OVERRIDES_PATH) {
  const overrides = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(overrides)) throw new Error('InnPro name overrides must be a JSON array.');
  const codes = new Set();
  for (const row of overrides) {
    for (const key of ['code', 'ean', 'manufacturer', 'sourceName', 'name']) {
      if (typeof row[key] !== 'string' || !row[key].trim()) {
        throw new Error(`Invalid InnPro name override: missing ${key}.`);
      }
    }
    if (Object.prototype.hasOwnProperty.call(row, 'previousName')
        && (typeof row.previousName !== 'string' || !row.previousName.trim())) {
      throw new Error(`Invalid InnPro name override: missing previousName for CODE ${row.code}.`);
    }
    if (codes.has(row.code)) throw new Error(`Duplicate InnPro name override CODE ${row.code}.`);
    codes.add(row.code);
  }
  return overrides;
}

function createNameOverride(products, overrides = loadNameOverrides()) {
  const resolved = [];
  for (const override of overrides) {
    const targets = products.filter(product => product.code === override.code);
    if (targets.length !== 1) continue;
    const target = targets[0];
    const identityMatches = target.ean === override.ean
      && target.manufacturer === override.manufacturer
      && [override.sourceName, override.name, override.previousName].filter(Boolean).includes(target.name);
    if (identityMatches) resolved.push({ target, override });
  }

  return function applyNameOverride(item, product) {
    const match = resolved.find(entry => entry.target === product);
    if (!match) return item;
    const leading = item.match(/^(<SHOPITEM>\s*<NAME><!\[CDATA\[)([\s\S]*?)(\]\]><\/NAME>)/);
    if (!leading || leading[2] !== product.name) return item;
    return leading[1] + match.override.name + leading[3] + item.slice(leading[0].length);
  };
}

module.exports = { createNameOverride, loadNameOverrides, OVERRIDES_PATH };

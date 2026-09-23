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
    if (Object.prototype.hasOwnProperty.call(row, 'metaDescription')) {
      if (typeof row.metaDescription !== 'string' || !row.metaDescription.trim()
          || row.metaDescription.length > 320 || /[\r\n]/.test(row.metaDescription)
          || row.metaDescription.includes(']]>')) {
        throw new Error(`Invalid InnPro name override metaDescription for CODE ${row.code}.`);
      }
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
      && [override.sourceName, override.name].includes(target.name);
    if (identityMatches) resolved.push({ target, override });
  }

  return function applyNameOverride(item, product) {
    const match = resolved.find(entry => entry.target === product);
    if (!match) return item;
    const leading = item.match(/^(<SHOPITEM>\s*<NAME><!\[CDATA\[)([\s\S]*?)(\]\]><\/NAME>)/);
    if (!leading || leading[2] !== product.name) return item;
    let result = leading[1] + match.override.name + leading[3] + item.slice(leading[0].length);
    if (typeof match.override.metaDescription === 'string') {
      // META_DESCRIPTION is the serializer's final direct child of SHOPITEM. The terminal
      // anchor prevents matching tag-like content inside DESCRIPTION CDATA.
      const meta = result.match(/\n(<META_DESCRIPTION><!\[CDATA\[)([\s\S]*?)(\]\]><\/META_DESCRIPTION>\n<\/SHOPITEM>)$/);
      if (meta && meta[2] === product.metaDescription) {
        result = result.replace(meta[0], '\\n' + meta[1] + match.override.metaDescription + meta[3]);
      }
    }
    return result;
  };
}

module.exports = { createNameOverride, loadNameOverrides, OVERRIDES_PATH };

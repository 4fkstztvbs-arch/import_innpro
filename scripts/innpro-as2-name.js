'use strict';

// Single approved NAME correction; identity comes only from parsed shopitemData.
const CODE = '065095';
const EAN = '6976297860013';
const NAME = 'Cycplus AS2 – mini elektrická pumpa na bicykel';
const SOURCE_NAME = 'Cycplus AS2 mini electric pump';

function createAs2NameOverride(products) {
  const targets = products.filter(p => p.code === CODE);
  // Missing/duplicate/drifted targets retain supplier content. Do not interrupt a full feed.
  const target = targets.length === 1 ? targets[0] : null;
  const approved = target && target.ean === EAN && target.manufacturer === 'CYCPLUS'
    && [SOURCE_NAME, NAME].includes(target.name);
  return function applyAs2Name(item, product) {
    if (!approved || product !== target) return item;
    // Only the leading generated NAME is eligible; literal XML in DESCRIPTION is opaque.
    const leading = item.match(/^(<SHOPITEM>\s*<NAME><!\[CDATA\[)([\s\S]*?)(\]\]><\/NAME>)/);
    if (!leading || leading[2] !== product.name) return item;
    return leading[1] + NAME + leading[3] + item.slice(leading[0].length);
  };
}

module.exports = {createAs2NameOverride, CODE, EAN, NAME, SOURCE_NAME};

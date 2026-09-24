'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createNameOverride, loadNameOverrides } = require('./innpro-name-overrides');
const { validate } = require('./validate-innpro-name-overrides');

const overrides = loadNameOverrides();

function productFor(row) {
  return {
    code: row.code,
    ean: row.ean,
    manufacturer: row.manufacturer,
    name: row.sourceName,
  };
}

function shopitem(name, code, ean, manufacturer = 'Flytec') {
  return `<SHOPITEM>\n<NAME><![CDATA[${name}]]></NAME>\n<DESCRIPTION><![CDATA[literal <CODE>${code}</CODE><EAN>${ean}</EAN>]]></DESCRIPTION><MANUFACTURER><![CDATA[${manufacturer}]]></MANUFACTURER><CODE>${code}</CODE><EAN>${ean}</EAN><TEXT_PROPERTIES><TEXT_PROPERTY><NAME><![CDATA[Model]]></NAME><VALUE>preserve</VALUE></TEXT_PROPERTY></TEXT_PROPERTIES><PRICE_VAT>10.00</PRICE_VAT></SHOPITEM>`;
}

test('approved exact identity changes only the leading product NAME and is repeatable', () => {
  const row = overrides[0];
  const product = productFor(row);
  const before = shopitem(row.sourceName, row.code, row.ean, row.manufacturer);
  const after = shopitem(row.name, row.code, row.ean, row.manufacturer);
  const apply = createNameOverride([product]);
  assert.equal(apply(before, product), after);
  const alreadyNamed = { ...product, name: row.name };
  assert.equal(createNameOverride([alreadyNamed])(after, alreadyNamed), after);
});

test('a recorded previous localized name can transition to its corrected target', () => {
  const row = overrides.find(entry => entry.previousName);
  assert.ok(row, 'expected at least one correction from an earlier localized name');
  const product = { ...productFor(row), name: row.previousName };
  const before = shopitem(row.previousName, row.code, row.ean, row.manufacturer);
  const after = shopitem(row.name, row.code, row.ean, row.manufacturer);
  assert.equal(createNameOverride([product], [row])(before, product), after);
});

test('identity drift, missing targets, and duplicate CODEs preserve supplier XML', () => {
  const row = overrides[0];
  const before = shopitem(row.sourceName, row.code, row.ean, row.manufacturer);
  for (const product of [
    { ...productFor(row), ean: 'wrong' },
    { ...productFor(row), manufacturer: 'Other' },
    { ...productFor(row), name: 'New supplier product' },
  ]) assert.equal(createNameOverride([product])(before, product), before);
  const duplicate = productFor(row);
  assert.equal(createNameOverride([productFor(row), duplicate])(before, duplicate), before);
  assert.equal(createNameOverride([])(before, productFor(row)), before);
});

test('CDATA and parameter NAME values do not trigger or receive substitutions', () => {
  const row = overrides[0];
  const product = productFor(row);
  const before = `<SHOPITEM id="x"><NAME><![CDATA[${row.sourceName}]]></NAME><DESCRIPTION><![CDATA[${row.sourceName}]]></DESCRIPTION><TEXT_PROPERTIES><TEXT_PROPERTY><NAME><![CDATA[${row.sourceName}]]></NAME></TEXT_PROPERTY></TEXT_PROPERTIES></SHOPITEM>`;
  assert.equal(createNameOverride([product])(before, product), before);
});

test('current InnPro XML dry-run changes exactly the registered product NAME fields', () => {
  const file = path.join(__dirname, '..', 'output', 'innpro.xml');
  const before = fs.readFileSync(file, 'utf8');
  const allItems = [...before.matchAll(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g)].map(match => match[0]);
  const replacements = [];
  let applicable = 0;

  for (const row of overrides) {
    const matching = allItems.filter(item => item.includes(`<CODE>${row.code}</CODE>`));
    assert.equal(matching.length, 1, `Expected one current feed item for ${row.code}`);
    const oldItem = matching[0];
    assert.ok(oldItem.includes(`<EAN>${row.ean}</EAN>`), `EAN drift for ${row.code}`);
    assert.ok(oldItem.includes(`<MANUFACTURER><![CDATA[${row.manufacturer}]]></MANUFACTURER>`), `Manufacturer drift for ${row.code}`);
    const currentName = oldItem.match(/^<SHOPITEM>\s*<NAME><!\[CDATA\[([\s\S]*?)\]\]><\/NAME>/)?.[1];
    assert.ok([row.sourceName, row.name, row.previousName].filter(Boolean).includes(currentName), `Source name drift for ${row.code}: ${currentName}`);
    const product = { ...productFor(row), name: currentName };
    const changedItem = createNameOverride([product], [row])(oldItem, product);
    const expectedItem = currentName === row.name ? oldItem : oldItem.replace(
      `<NAME><![CDATA[${currentName}]]></NAME>`, `<NAME><![CDATA[${row.name}]]></NAME>`,
    );
    assert.equal(changedItem, expectedItem, `Unexpected non-NAME change for ${row.code}`);
    assert.equal(createNameOverride([{ ...product, name: row.name }], [row])(changedItem, { ...product, name: row.name }), changedItem);
    replacements.push([oldItem, changedItem]);
    applicable++;
  }

  let after = before;
  for (const [oldItem, changedItem] of replacements) after = after.replace(oldItem, changedItem);
  assert.equal((after.match(/<SHOPITEM>/g) || []).length, allItems.length);
  assert.equal(applicable, overrides.length);
  console.log(`Verified ${allItems.length} feed items; ${applicable} exact NAME overrides; every other byte preserved.`);
});

test('post-transform validator accepts the complete approved name batch', () => {
  const file = path.join(__dirname, '..', 'output', 'innpro.xml');
  const before = fs.readFileSync(file, 'utf8');
  const items = [...before.matchAll(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g)].map(match => match[0]);
  const changes = new Map();
  for (const row of overrides) {
    const source = items.find(item => item.includes(`<CODE>${row.code}</CODE>`));
    assert.ok(source, `missing source product ${row.code}`);
    const currentName = source.match(/^<SHOPITEM>\s*<NAME><!\[CDATA\[([\s\S]*?)\]\]><\/NAME>/)?.[1];
    assert.ok([row.sourceName, row.name, row.previousName].filter(Boolean).includes(currentName), `source name drift for ${row.code}`);
    const product = { ...productFor(row), name: currentName };
    changes.set(source, createNameOverride([product], [row])(source, product));
  }
  let transformed = before;
  for (const [source, result] of changes) transformed = transformed.replace(source, result);
  const report = validate(transformed, overrides);
  assert.equal(report.ok, true);
  assert.equal(report.checked, overrides.length);
  assert.deepEqual(report.issues, []);
});

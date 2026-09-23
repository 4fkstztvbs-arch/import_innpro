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
    metaDescription: 'Generated supplier meta',
  };
}

function shopitem(name, code, ean, manufacturer = 'Flytec', metaDescription = 'Generated supplier meta') {
  return \`<SHOPITEM>\n<NAME><![CDATA[\${name}]]></NAME>\n<DESCRIPTION><![CDATA[literal <CODE>\${code}</CODE><EAN>\${ean}</EAN>]]></DESCRIPTION><MANUFACTURER><![CDATA[\${manufacturer}]]></MANUFACTURER><CODE>\${code}</CODE><EAN>\${ean}</EAN><TEXT_PROPERTIES><TEXT_PROPERTY><NAME><![CDATA[Model]]></NAME><VALUE>preserve</VALUE></TEXT_PROPERTY></TEXT_PROPERTIES><PRICE_VAT>10.00</PRICE_VAT>\n<META_DESCRIPTION><![CDATA[\${metaDescription}]]></META_DESCRIPTION>\n</SHOPITEM>\`;
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

test('optional meta override changes only NAME and terminal META_DESCRIPTION for a verified identity', () => {
  const base = overrides[0];
  const row = { ...base, metaDescription: 'Zavážacia loďka Flytec 2011-5 s batériou 12 000 mAh. Overené parametre v popise.' };
  const product = productFor(row);
  const before = shopitem(row.sourceName, row.code, row.ean, row.manufacturer, product.metaDescription);
  const after = shopitem(row.name, row.code, row.ean, row.manufacturer, row.metaDescription);
  const apply = createNameOverride([product], [row]);
  assert.equal(apply(before, product), after);
  assert.equal(apply(after, product), after);

  for (const changed of [
    { ...product, ean: 'wrong' },
    { ...product, manufacturer: 'Other' },
    { ...product, name: 'Supplier drift' },
  ]) assert.equal(createNameOverride([changed], [row])(before, changed), before);
});

test('validator checks optional meta overrides without constraining legacy name-only entries', () => {
  const base = overrides[0];
  const row = { ...base, metaDescription: 'Krátky overený SEO popis produktu.' };
  const product = productFor(row);
  const source = shopitem(row.sourceName, row.code, row.ean, row.manufacturer, product.metaDescription);
  const transformed = createNameOverride([product], [row])(source, product);
  const good = validate(transformed, [row]);
  assert.equal(good.ok, true);
  assert.equal(good.checked, 1);
  const bad = validate(transformed.replace(row.metaDescription, 'Iný popis.'), [row]);
  assert.equal(bad.ok, false);
  assert.equal(bad.issues[0].reason, 'identity-name-or-meta-mismatch');
  assert.equal(validate(transformed, [base]).ok, true);
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
    assert.ok([row.sourceName, row.name].includes(currentName), `Source name drift for ${row.code}: ${currentName}`);
    const product = { ...productFor(row), name: currentName };
    const changedItem = createNameOverride([product], [row])(oldItem, product);
    const expectedItem = currentName === row.name ? oldItem : oldItem.replace(
      `<NAME><![CDATA[${row.sourceName}]]></NAME>`, `<NAME><![CDATA[${row.name}]]></NAME>`,
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
    assert.ok([row.sourceName, row.name].includes(currentName), `source name drift for ${row.code}`);
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

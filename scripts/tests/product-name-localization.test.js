'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const { loadRegistry, localizeXml, createProductNameResolver } = require('../localize-product-names');
const { validateXml } = require('../validate-product-name-localization');

const registry = loadRegistry(path.join(__dirname, '..', '..', 'data', 'localization', 'product-names-sk.json'));
const ctr = require('../../data/seo/ctr-test-overrides.json');

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function fixtureFor(entries) {
  return '<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n' +
    entries.map((p, i) => [
      '<SHOPITEM>',
      '<NAME><![CDATA[' + p.sourceName.replace(/]]>/g, ']]]]><![CDATA[>') + ']]></NAME>',
      '<DESCRIPTION><![CDATA[Testovací popis ' + p.code + ']]></DESCRIPTION>',
      '<CODE>' + esc(p.code) + '</CODE>',
      '<EAN>' + esc(p.ean) + '</EAN>',
      '<CATEGORIES><CATEGORY><![CDATA[Test > Kategória]]></CATEGORY></CATEGORIES>',
      '<TEXT_PROPERTIES><TEXT_PROPERTY><NAME><![CDATA[Farba]]></NAME><VALUE><![CDATA[Test]]></VALUE></TEXT_PROPERTY></TEXT_PROPERTIES>',
      '<PRICE_VAT>' + (10 + i / 10).toFixed(2) + '</PRICE_VAT>',
      '<PURCHASE_PRICE>' + (5 + i / 10).toFixed(2) + '</PURCHASE_PRICE>',
      '<AVAILABILITY><![CDATA[Skladom]]></AVAILABILITY>',
      '<SEO_TITLE><![CDATA[Pôvodný SEO titulok]]></SEO_TITLE>',
      '<META_DESCRIPTION><![CDATA[Pôvodný meta popis]]></META_DESCRIPTION>',
      '<IMAGES><IMAGE>https://example.invalid/' + encodeURIComponent(p.code) + '.jpg</IMAGE></IMAGES>',
      '</SHOPITEM>',
    ].join('\n')).join('\n') +
    '\n</SHOP>\n';
}

for (const supplier of ['kb', 'atos', 'penta', 'solight']) {
  test(supplier + ': dry-run mení iba NAME pri každom schválenom zázname', () => {
    const entries = registry.products.filter((p) => p.supplier === supplier && p.status === 'pilot_approved');
    assert.ok(entries.length > 0);
    const before = fixtureFor(entries);
    const localized = localizeXml(before, { supplier, registry });
    assert.equal(localized.report.issueCount, 0);
    assert.equal(localized.report.changedCount, entries.length);

    const validation = validateXml(before, localized.xml, { supplier, registry });
    assert.equal(validation.ok, true, JSON.stringify(validation.issues));
    assert.equal(validation.changedCount, entries.length);
  });
}

test('transform resolver validates exact CODE/EAN/source name and permits an approved previous title', () => {
  const entry = registry.products.find((p) => p.supplier === 'penta');
  const resolve = createProductNameResolver('penta', registry);
  assert.equal(resolve({ code: entry.code, ean: entry.ean, name: entry.sourceName }), entry.skName);
  assert.equal(resolve({ code: entry.code, ean: entry.ean, name: entry.skName }), null);
  if (entry.previousName) {
    assert.equal(resolve({ code: entry.code, ean: entry.ean, name: entry.previousName }), entry.skName);
  }
  assert.throws(() => resolve({ code: entry.code, ean: 'wrong', name: entry.sourceName }), /EAN mismatch/);
  assert.throws(() => resolve({ code: entry.code, ean: entry.ean, name: 'Unrecognized source' }), /Source-name drift/);
});

test('validator odmietne zmenu ceny aj ked je NAME korektne lokalizovany', () => {
  const entries = registry.products.filter((p) => p.supplier === 'kb' && p.status === 'pilot_approved');
  const before = fixtureFor(entries);
  const localized = localizeXml(before, { supplier: 'kb', registry });
  const tampered = localized.xml.replace('<PRICE_VAT>10.00</PRICE_VAT>', '<PRICE_VAT>99.00</PRICE_VAT>');
  const validation = validateXml(before, tampered, { supplier: 'kb', registry });
  assert.equal(validation.ok, false);
  assert.ok(validation.issues.some((x) => x.reason === 'non-NAME-field-changed'));
});

test('aktívna CTR experimentálna ani kontrolná kohorta sa nelokalizuje', () => {
  const protectedEans = new Set([...(ctr.products || []), ...(ctr.controls || [])].map((p) => `${p.supplier}|${p.ean}`));
  const overlaps = registry.products.filter((p) => protectedEans.has(`${p.supplier}|${p.ean}`));
  assert.deepEqual(overlaps, []);
});

test('source-name drift sa neprepisuje', () => {
  const entry = registry.products.find((p) => p.supplier === 'kb' && p.status === 'pilot_approved');
  const changedEntry = { ...entry, sourceName: entry.sourceName + ' CHANGED' };
  const before = fixtureFor([changedEntry]);
  const localized = localizeXml(before, { supplier: 'kb', registry });
  assert.equal(localized.report.changedCount, 0);
  assert.equal(localized.report.issueCount, 1);
  assert.equal(localized.report.issues[0].reason, 'source-name-drift');
});

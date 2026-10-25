'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { applyConversionRules } = require('../apply-heureka-conversion-rules');

const RULES = { maxAboveCheapestPct: 20, priceAtLeast: 1000, heurekaCategories: ['Solárne zostavy'], hideWithoutPurchasePrice: true, keepEans: { '0000000000005': 'x' } };
const ctx = {
  cheapest: new Map([['0000000000001', 100], ['0000000000002', 100], ['0000000000004', 990]]),
  categories: new Map([['0000000000003', 'Solárne zostavy']]),
  isPilot: (e) => e === '0000000000006',
};
const item = (ean, price, purchase = 50, extra = '') => `<SHOPITEM>\n<EAN>${ean}</EAN>${extra}\n<PRICE_VAT>${price}</PRICE_VAT>\n${purchase ? `<PURCHASE_PRICE>${purchase}</PURCHASE_PRICE>\n` : ''}</SHOPITEM>`;
const hidden = (xml, ean) => new RegExp(`<EAN>${ean}</EAN>[^]*?<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>[^]*?</SHOPITEM>`).test(xml.split('<SHOPITEM>').find((s) => s.includes(`<EAN>${ean}<`)) ? '<SHOPITEM>' + xml.split('<SHOPITEM>').find((s) => s.includes(`<EAN>${ean}<`)) : '');

test('skryje drahšie o viac ako 20 %, drahé, zlé kategórie a bez nákupnej ceny', () => {
  const xml = [item('0000000000001', 121), item('0000000000002', 119), item('0000000000003', 200), item('0000000000004', 1000), item('0000000000007', 50, 0)].join('\n');
  const { xml: out, stats } = applyConversionRules(xml, RULES, ctx);
  assert.deepEqual(stats, { cena: 1, bezNakupnej: 1, kategoria: 1, drahsi: 1 });
  assert.ok(hidden(out, '0000000000001'));
  assert.ok(!hidden(out, '0000000000002'));
  assert.ok(hidden(out, '0000000000003') && hidden(out, '0000000000004') && hidden(out, '0000000000007'));
});

test('výnimky, pilot a už skryté produkty nechá tak; je idempotentný', () => {
  const xml = [item('0000000000005', 5000), item('0000000000006', 5000), item('0000000000004', 1500, 50, '\n<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>')].join('\n');
  const first = applyConversionRules(xml, RULES, ctx);
  assert.equal(first.xml, xml);
  const once = applyConversionRules(item('0000000000004', 1500), RULES, ctx).xml;
  assert.equal(applyConversionRules(once, RULES, ctx).xml, once);
});

test('odhad marže dodávateľa vypne pravidlo bez nákupnej ceny', () => {
  const r = { ...RULES, estimatedMarginPctBySupplier: { 'monacor.xml': 20 } };
  const x = item('0000000000008', 50, 0);
  assert.equal(applyConversionRules(x, r, { ...ctx, supplier: 'monacor.xml' }).stats.bezNakupnej, 0);
  assert.equal(applyConversionRules(x, r, { ...ctx, supplier: 'kb.xml' }).stats.bezNakupnej, 1);
});

test('drahá ponuka: skryje len ak report ukazuje lacnejšieho predajcu; BASYS nikdy', () => {
  const r = { ...RULES, priceRuleSkipSuppliers: ['basys.xml'] };
  const c = { ...ctx, cheapest: new Map([['0000000000009', 1150], ['0000000000010', 1300]]) };
  const s = (ean, p, sup = 'kb.xml') => applyConversionRules(item(ean, p), r, { ...c, supplier: sup }).stats.cena;
  assert.equal(s('0000000000009', 1200), 1);
  assert.equal(s('0000000000010', 1200), 0);
  assert.equal(s('0000000000011', 1200), 0);
  assert.equal(s('0000000000009', 1200, 'basys.xml'), 0);
});

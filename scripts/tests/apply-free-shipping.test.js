'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { applyFreeShipping } = require('../apply-free-shipping');

const RULES = { minPriceVat: 100, minMarginEur: 15, categories: ['A > Mobily'] };
const item = (cat, price, cost, extra = '') => `<SHOPITEM>\n<CATEGORIES>\n  <CATEGORY><![CDATA[${cat}]]></CATEGORY>\n</CATEGORIES>${extra}\n<PRICE_VAT>${price}</PRICE_VAT>\n<PURCHASE_PRICE>${cost}</PURCHASE_PRICE>\n<PURCHASE_VAT>23</PURCHASE_VAT>\n</SHOPITEM>`;

test('drahý malý produkt s maržou dostane dopravu zdarma, lacný alebo s nízkou maržou nie', () => {
  const xml = [item('A > Mobily > Apple', 246, 150), item('A > Mobily', 99, 10), item('A > Mobily', 200, 150), item('B > Chladničky', 500, 100)].join('\n');
  const { xml: out, stats } = applyFreeShipping(xml, RULES);
  assert.deepEqual(stats, { zdarma: 1, nie: 2 });
  const parts = out.split('</SHOPITEM>');
  assert.match(parts[0], /<FREE_SHIPPING>1<\/FREE_SHIPPING>\n<PRICE_VAT>246/);
  assert.match(parts[1], /<FREE_SHIPPING>0<\/FREE_SHIPPING>/);
  assert.match(parts[2], /<FREE_SHIPPING>0<\/FREE_SHIPPING>/);
  assert.doesNotMatch(parts[3], /FREE_SHIPPING/);
});

test('nadrozmerný produkt nie; opakovaný beh nič nezmení', () => {
  const xml = item('A > Mobily', 500, 100, '\n<ATYPICAL_PRODUCT><ATYPICAL_SHIPPING>1</ATYPICAL_SHIPPING></ATYPICAL_PRODUCT>');
  const once = applyFreeShipping(xml, RULES).xml;
  assert.match(once, /<FREE_SHIPPING>0</);
  assert.equal(applyFreeShipping(once, RULES).xml, once);
});

test('dodávateľ bez nákupnej ceny s odhadom marže (MONACOR 20 %)', () => {
  const r = { ...RULES, estimatedMarginPctBySupplier: { 'monacor.xml': 20 } };
  const noCost = (price) => item('A > Mobily', price, '').replace(/<PURCHASE_PRICE><\/PURCHASE_PRICE>\n/, '');
  assert.equal(applyFreeShipping(noCost(123), r, 'monacor.xml').stats.zdarma, 1);
  assert.equal(applyFreeShipping(noCost(123), r, 'iny.xml').stats.zdarma, 0);
});

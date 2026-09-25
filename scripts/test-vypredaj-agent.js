'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const {
  createEmptyState, parseCommandBody, addItems, applyOrders, applyVypredajToXml,
  hasUniqueProduct,
} = require('./lib/vypredaj-core');

const feed = `<?xml version="1.0"?><SHOP><SHOPITEM><CODE>RET-001</CODE><NAME>Test product</NAME>
<PRICE_VAT>100.00</PRICE_VAT><PURCHASE_PRICE>60.00</PURCHASE_PRICE><PURCHASE_VAT>23</PURCHASE_VAT>
</SHOPITEM></SHOP>`;

test('parses email lines and combines repeated product codes', () => {
  assert.deepEqual(parseCommandBody('RET-001;1\nRET-002;2\nRET-001;3'), [
    { code: 'RET-001', quantity: 4 }, { code: 'RET-002', quantity: 2 },
  ]);
  assert.throws(() => parseCommandBody('RET-001;0'), /KÓD;POČET/);
  assert.throws(() => parseCommandBody('RET-001;1\ntext podpisu'), /riadok 2/i);
});

test('searches exact product codes across all supplier feeds', () => {
  assert.equal(hasUniqueProduct([feed, '<SHOP><SHOPITEM><CODE>OTHER</CODE></SHOPITEM></SHOP>'], 'RET-001'), true);
  assert.equal(hasUniqueProduct([feed, feed], 'RET-001'), false);
  assert.equal(hasUniqueProduct([feed], 'RET-002'), false);
});

test('deducts each matching order only once and never charges pre-activation orders', () => {
  let state = addItems(createEmptyState(), [{ code: 'RET-001', quantity: 4 }], '2026-09-25T12:00:00Z');
  const orders = [
    { CODE: 'OLD', DATE: '2026-09-25 11:59:59', ITEMS: { ITEM: { CODE: 'RET-001', AMOUNT: '3' } } },
    { CODE: 'NEW', DATE: '2026-09-25 14:01:00', ITEMS: { ITEM: [
      { CODE: 'RET-001', AMOUNT: '1' }, { CODE: 'RET-001', AMOUNT: '1' },
    ] } },
  ];
  let result = applyOrders(state, orders);
  state = result.state;
  assert.equal(state.items['RET-001'].quantity, 3);
  assert.deepEqual(result.changes.map((x) => [x.orderId, x.amount, x.after]), [['NEW', 1, 3]]);
  result = applyOrders(state, orders);
  assert.equal(result.state.items['RET-001'].quantity, 3);
  assert.equal(result.changes.length, 0);
});

test('renders a five percent ACTION_PRICE and resets it to standard price at zero', () => {
  let state = addItems(createEmptyState(), [{ code: 'RET-001', quantity: 1 }], '2026-09-25T12:00:00Z');
  let result = applyVypredajToXml(feed, state);
  assert.match(result.xml, /<PRICE_VAT>100\.00<\/PRICE_VAT>/);
  assert.match(result.xml, /<ACTION_PRICE>95\.00<\/ACTION_PRICE>/);
  assert.match(result.xml, /<FLAGS><ACTION>1<\/ACTION><\/FLAGS>/);

  state.items['RET-001'].quantity = 0;
  result = applyVypredajToXml(feed, state);
  assert.match(result.xml, /<ACTION_PRICE>100\.00<\/ACTION_PRICE>/);
  assert.match(result.xml, /<ACTION>0<\/ACTION>/);
  assert.doesNotMatch(result.xml, /<ACTION_PRICE><\/ACTION_PRICE>/);
});

test('blocks missing or duplicated products and discounts below supplier cost', () => {
  const active = addItems(createEmptyState(), [{ code: 'RET-001', quantity: 1 }], '2026-09-25T12:00:00Z');
  assert.throws(() => applyVypredajToXml('<SHOP/>', active), /sa v tomto feede nenašiel/);
  assert.throws(() => applyVypredajToXml(feed.replace('</SHOP>', feed.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/)[0] + '</SHOP>'), active), /viackrát/);
  const expensive = feed.replace('<PURCHASE_PRICE>60.00</PURCHASE_PRICE>', '<PURCHASE_PRICE>90.00</PURCHASE_PRICE>');
  assert.throws(() => applyVypredajToXml(expensive, active), /pod nákupnú cenu/);
});

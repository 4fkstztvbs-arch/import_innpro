'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { decideProduct, reconcileWindows } = require('./lib/heureka-shadow-core');
const policy = require('./heureka-shadow-policy.json');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { economics: readEconomics, readHeurekaRows } = require('./heureka-shadow-optimizer');

function fixtureDir(t, files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'heureka-input-test-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  for (const [name, content] of Object.entries(files)) fs.writeFileSync(path.join(dir, name), content);
  return dir;
}

const fixtureItem = (code, price = 123, buy = 70, ean = '1234567890128') =>
  `<SHOPITEM><CODE>${code}</CODE><NAME>Test product</NAME><EAN>${ean}</EAN>` +
  `<PRICE_VAT>${price}</PRICE_VAT><PURCHASE_PRICE>${buy}</PURCHASE_PRICE><VAT>23</VAT></SHOPITEM>`;

test('real export BOM is accepted without changing leading-zero product codes', (t) => {
  const headers = ['date', 'shop_item_id', 'shop_item_name', 'visits_total', 'visits_free',
    'visits_bidded', 'visits_not_bidded', 'costs_without_vat_total', 'costs_without_vat_bidded',
    'costs_without_vat_not_bidded', 'orders_total', 'orders_free', 'orders_bidded',
    'orders_not_bidded', 'revenue_total', 'revenue_free', 'revenue_bidded', 'revenue_not_bidded'];
  const values = headers.map(h => ({ date: '2026-09-21', shop_item_id: '00123',
    shop_item_name: 'Test product' }[h] || '0'));
  const csv = headers.join(',') + '\n' + values.join(',') + '\n';
  const dir = fixtureDir(t, { 'plain.csv': csv, 'bom.csv': '\uFEFF' + csv });
  assert.deepEqual(readHeurekaRows(path.join(dir, 'bom.csv')), readHeurekaRows(path.join(dir, 'plain.csv')));
  assert.equal(readHeurekaRows(path.join(dir, 'bom.csv'))[0].shop_item_id, '00123');
});

test('prefix aliases are explicit, supplier scoped, exact, and do not change files', (t) => {
  const xml = `<SHOP>${fixtureItem('00123')}</SHOP>`;
  const dir = fixtureDir(t, { 'supplier.xml': xml, 'other.xml': `<SHOP>${fixtureItem('00234')}</SHOP>` });
  assert.equal(readEconomics(dir, 23).has('SHOP_00123'), false);
  const map = readEconomics(dir, 23, { 'supplier.xml': 'SHOP_' });
  assert.equal(map.get('SHOP_00123').sourceCode, '00123');
  assert.equal(map.get('SHOP_00123').source, 'supplier.xml');
  assert.equal(map.get('SHOP_00123').matchMethod, 'configured-import-prefix');
  assert.equal(map.get('SHOP_00123').buy, 70);
  assert.equal(map.has('SHOP_00234'), false);
  assert.equal(map.has('shop_00123'), false);
  assert.equal(map.has('SHOP_123'), false);
  assert.equal(fs.readFileSync(path.join(dir, 'supplier.xml'), 'utf8'), xml);
});

test('real-code alias collision fails closed rather than selecting an identity', (t) => {
  const dir = fixtureDir(t, { 'supplier.xml': `<SHOP>${fixtureItem('00123')}</SHOP>`,
    'other.xml': `<SHOP>${fixtureItem('SHOP_00123', 123, 70, '9999999999999')}</SHOP>` });
  const row = readEconomics(dir, 23, { 'supplier.xml': 'SHOP_' }).get('SHOP_00123');
  assert.equal(row.amb, true);
  const result = decideProduct({ performance: { paidVisits: 100, paidOrders: 10, distinctPaidDays: 10 },
    economics: { priceInclVat: row.price, purchasePriceExVat: row.buy,
      grossMarginPerSale: 30, ambiguous: row.amb } }, policy);
  assert.equal(result.state, 'WATCH');
  assert.equal(result.recommendedCpc, null);
});

test('conflicting supplier economics remain ambiguous through prefix aliases', (t) => {
  const dir = fixtureDir(t, { 'supplier.xml': `<SHOP>${fixtureItem('00123')}</SHOP>`,
    'other.xml': `<SHOP>${fixtureItem('00123', 200, 100)}</SHOP>` });
  const map = readEconomics(dir, 23, { 'supplier.xml': 'SHOP_' });
  assert.equal(map.get('00123').amb, true);
  assert.equal(map.get('SHOP_00123').amb, true);
});

test('unverified prefix configuration is rejected', (t) => {
  const dir = fixtureDir(t, { 'supplier.xml': `<SHOP>${fixtureItem('00123')}</SHOP>` });
  for (const config of [null, [], { 'unknown.xml': 'SHOP_' }, { 'supplier.xml': '' },
    { 'supplier.xml': 123 }, { 'supplier.xml': '../' }]) {
    assert.throws(() => readEconomics(dir, 23, config));
  }
});

const economics = {
  priceInclVat: 123,
  purchasePriceExVat: 70,
  grossMarginPerSale: 30,
  ambiguous: false,
};

test('profitable paid traffic becomes BID', () => {
  const result = decideProduct({
    performance: { paidVisits: 50, paidOrders: 5, paidCostExVat: 20, distinctPaidDays: 8 },
    economics,
    operational: {},
  }, policy);
  assert.equal(result.state, 'BID');
  assert.equal(result.action, 'SET_CPC');
  assert.ok(result.recommendedCpc > 0);
});

test('zero-order meaningful paid spend becomes EXCLUDE', () => {
  const result = decideProduct({
    performance: { paidVisits: 50, paidOrders: 0, paidCostExVat: 20, distinctPaidDays: 8 },
    economics,
    operational: {},
  }, policy);
  assert.equal(result.state, 'EXCLUDE');
});

test('operational Heureka order blocks false EXCLUDE', () => {
  const result = decideProduct({
    performance: { paidVisits: 50, paidOrders: 0, paidCostExVat: 20, distinctPaidDays: 8 },
    economics,
    operational: { heurekaReferredSingleProductOrders: 1 },
  }, policy);
  assert.equal(result.state, 'WATCH');
  assert.ok(result.reasons.includes('ATTRIBUTION_CONFLICT_BLOCKS_EXCLUDE'));
});

test('low sample stays WATCH', () => {
  const result = decideProduct({
    performance: { paidVisits: 2, paidOrders: 0, paidCostExVat: 0.5, distinctPaidDays: 1 },
    economics,
    operational: {},
  }, policy);
  assert.equal(result.state, 'WATCH');
});

test('existing exclusion stays fail-closed until reentry evidence', () => {
  const result = decideProduct({
    performance: { paidVisits: 80, paidOrders: 6, paidCostExVat: 20, distinctPaidDays: 10, postExistingExclusionOrders: 0 },
    economics,
    operational: {},
    existingExcluded: true,
  }, policy);
  assert.equal(result.state, 'EXCLUDE');
  assert.equal(result.action, 'KEEP_EXCLUDED');
});

test('missing purchase price can never trigger EXCLUDE', () => {
  const result = decideProduct({
    performance: { paidVisits: 100, paidOrders: 0, paidCostExVat: 100, distinctPaidDays: 10 },
    economics: { priceInclVat: 100, purchasePriceExVat: null, grossMarginPerSale: null },
    operational: {},
  }, policy);
  assert.equal(result.state, 'WATCH');
  assert.ok(result.reasons.includes('MISSING_PURCHASE_PRICE'));
});


test('multi-window BID requires long and short agreement and uses lower CPC', () => {
  const longDecision = {
    state: 'BID', action: 'SET_CPC', reasons: ['LONG'], recommendedCpc: 0.45,
    safeCpc: 0.5, targetCpa: 9, metrics: {}, confidence: 'HIGH',
  };
  const shortDecision = {
    state: 'BID', action: 'SET_CPC', reasons: ['SHORT'], recommendedCpc: 0.40,
    safeCpc: 0.42, targetCpa: 9, metrics: {}, confidence: 'MEDIUM',
  };
  const result = reconcileWindows({
    longDecision,
    shortDecision,
    shortPerformance: { paidVisits: 30, paidOrders: 3 },
    shortOperational: {},
  }, policy);
  assert.equal(result.state, 'BID');
  assert.equal(result.recommendedCpc, 0.40);
  assert.ok(result.reasons.includes('LONG_AND_SHORT_WINDOWS_AGREE'));
});

test('multi-window guard blocks BID when short window no longer confirms it', () => {
  const longDecision = {
    state: 'BID', action: 'SET_CPC', reasons: ['LONG'], recommendedCpc: 0.45,
    safeCpc: 0.5, targetCpa: 9, metrics: {}, confidence: 'HIGH',
  };
  const shortDecision = {
    state: 'BASE', action: 'REMOVE_PRODUCT_CPC_OVERRIDE',
    reasons: ['HAS_PAID_ORDERS_BUT_NOT_ENOUGH_BID_EVIDENCE'],
    recommendedCpc: null, safeCpc: 0.2, targetCpa: 9, metrics: {}, confidence: 'MEDIUM',
  };
  const result = reconcileWindows({
    longDecision,
    shortDecision,
    shortPerformance: { paidVisits: 10, paidOrders: 1 },
    shortOperational: {},
  }, policy);
  assert.equal(result.state, 'BASE');
  assert.equal(result.recommendedCpc, null);
  assert.ok(result.reasons.includes('BID_BLOCKED_BY_SHORT_WINDOW'));
});

test('recent conversion blocks long-window EXCLUDE', () => {
  const longDecision = {
    state: 'EXCLUDE', action: 'EXCLUDE_FROM_HEUREKA',
    reasons: ['ZERO_PAID_ORDERS_AFTER_MEANINGFUL_SPEND'],
    recommendedCpc: null, safeCpc: 0, targetCpa: 8, metrics: {}, confidence: 'HIGH',
  };
  const shortDecision = {
    state: 'BASE', action: 'REMOVE_PRODUCT_CPC_OVERRIDE',
    reasons: ['HAS_PAID_ORDERS_BUT_NOT_ENOUGH_BID_EVIDENCE'],
    recommendedCpc: null, safeCpc: 0.1, targetCpa: 8, metrics: {}, confidence: 'MEDIUM',
  };
  const result = reconcileWindows({
    longDecision,
    shortDecision,
    shortPerformance: { paidVisits: 12, paidOrders: 1 },
    shortOperational: {},
  }, policy);
  assert.equal(result.state, 'WATCH');
  assert.ok(result.reasons.includes('RECENT_CONVERSION_BLOCKS_EXCLUDE'));
});

test('long EXCLUDE needs enough recent traffic confirmation', () => {
  const longDecision = {
    state: 'EXCLUDE', action: 'EXCLUDE_FROM_HEUREKA',
    reasons: ['ZERO_PAID_ORDERS_AFTER_MEANINGFUL_SPEND'],
    recommendedCpc: null, safeCpc: 0, targetCpa: 8, metrics: {}, confidence: 'HIGH',
  };
  const shortDecision = {
    state: 'BASE', action: 'REMOVE_PRODUCT_CPC_OVERRIDE',
    reasons: ['ENOUGH_TRAFFIC_FOR_BASE_NOT_FOR_EXCLUDE'],
    recommendedCpc: null, safeCpc: 0, targetCpa: 8, metrics: {}, confidence: 'MEDIUM',
  };
  const result = reconcileWindows({
    longDecision,
    shortDecision,
    shortPerformance: { paidVisits: 10, paidOrders: 0 },
    shortOperational: {},
  }, policy);
  assert.equal(result.state, 'EXCLUDE');
  assert.ok(result.reasons.includes('LONG_EXCLUDE_CONFIRMED_BY_SHORT_WINDOW'));
});

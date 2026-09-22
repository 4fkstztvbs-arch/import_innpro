'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { decideProduct } = require('./lib/heureka-shadow-core');
const policy = require('./heureka-shadow-policy.json');

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

test('missing purchase price can never trigger EXCLUDE', () => {
  const result = decideProduct({
    performance: { paidVisits: 100, paidOrders: 0, paidCostExVat: 100, distinctPaidDays: 10 },
    economics: { priceInclVat: 100, purchasePriceExVat: null, grossMarginPerSale: null },
    operational: {},
  }, policy);
  assert.equal(result.state, 'WATCH');
  assert.ok(result.reasons.includes('MISSING_PURCHASE_PRICE'));
});

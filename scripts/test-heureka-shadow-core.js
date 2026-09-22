'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { decideProduct, reconcileWindows } = require('./lib/heureka-shadow-core');
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

'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { isBlackFridayAllowed, loadAllowlist } = require('../heureka-black-friday-allowlist');

test('all Black Friday EANs are temporarily exempt from Heureka exclusions', () => {
  const allowlist = loadAllowlist();
  assert.equal(allowlist.eans.length, 38);
  for (const ean of allowlist.eans) assert.equal(isBlackFridayAllowed(ean, ''), true, ean);
});

test('Black Friday products without EAN can be matched by explicit product code', () => {
  assert.equal(isBlackFridayAllowed('', 'BAS_BASYS-B112D2'), true);
  assert.equal(isBlackFridayAllowed('', 'AT_MS-GARNI 1NG3'), true);
});

test('unknown products are not exempted', () => {
  assert.equal(isBlackFridayAllowed('9999999999999', 'UNKNOWN-CODE'), false);
});

test('allowlist expires after the campaign ends', () => {
  assert.equal(isBlackFridayAllowed('8013240890142', '', Date.parse('2026-10-31T00:00:00.000Z')), false);
});

test('active fixed-price sale items stay visible on Heureka after the campaign date', () => {
  assert.equal(isBlackFridayAllowed('', '079284', Date.parse('2027-01-01T00:00:00.000Z')), true);
});

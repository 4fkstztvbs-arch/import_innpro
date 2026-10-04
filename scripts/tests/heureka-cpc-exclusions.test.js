'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { isExpired, EXPIRY_DAYS } = require('../heureka-cpc-exclusions');

const DAY = 86400000;
const T0 = Date.parse('2026-10-04T00:00:00.000Z');

test('exclusion is active before 8 weeks and expired after', () => {
  const e = { generatedAt: '2026-10-04T00:00:00.000Z' };
  assert.equal(EXPIRY_DAYS, 56);
  assert.equal(isExpired(e, T0 + 55 * DAY), false);
  assert.equal(isExpired(e, T0 + 56 * DAY), true);
});

test('explicit expiresAt overrides generatedAt', () => {
  const e = { generatedAt: '2026-10-04T00:00:00.000Z', expiresAt: '2026-10-10T00:00:00.000Z' };
  assert.equal(isExpired(e, T0 + 5 * DAY), false);
  assert.equal(isExpired(e, T0 + 6 * DAY), true);
});

test('entry without a parsable date never expires', () => {
  assert.equal(isExpired({ name: 'x' }, T0 + 999 * DAY), false);
  assert.equal(isExpired({ generatedAt: 'nonsense' }, T0 + 999 * DAY), false);
});

test('EAN with a dropped leading zero still matches the zero-padded exclusion key', () => {
  const { isCpcNonConverter, loadExclusions } = require('../heureka-cpc-exclusions');
  const padded = Object.keys(loadExclusions()).find((k) => /^0\d{12}$/.test(k));
  if (!padded) return;
  assert.equal(isCpcNonConverter(padded), true);
  assert.equal(isCpcNonConverter(padded.slice(1)), true);
});

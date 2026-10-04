'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { isHeurekaHidden, marginEurFor } = require('../heureka-category');

const CAT = 'Nepoužitá kategória > Test';

test('marginEurFor: bez DPH, NaN pri chýbajúcich údajoch', () => {
  assert.equal(Math.round(marginEurFor(9.9, 6, 23) * 100) / 100, 2.05);
  assert.ok(Number.isNaN(marginEurFor(9.9, 0, 23)));
  assert.ok(Number.isNaN(marginEurFor(9.9, undefined, 23)));
});

test('cena pod 10 € sa skryje, ak marža nie je aspoň 2 €', () => {
  assert.equal(isHeurekaHidden(CAT, 9.9), true);
  assert.equal(isHeurekaHidden(CAT, 9.9, 1.05), true);
  assert.equal(isHeurekaHidden(CAT, 9.9, NaN), true);
  assert.equal(isHeurekaHidden(CAT, 9.9, 2), false);
  assert.equal(isHeurekaHidden(CAT, 9.9, 2.05), false);
});

test('cena nad 10 € a kategórie sa nemenia', () => {
  assert.equal(isHeurekaHidden(CAT, 12), false);
  assert.equal(isHeurekaHidden('Auto-moto > X', 50, 9), true);
  assert.equal(isHeurekaHidden('Auto-moto > X', 5, 3), true);
});

test('kategóriové skrytie sa neuplatní pri marži aspoň 10 €', () => {
  assert.equal(isHeurekaHidden('Auto-moto > X', 50, 9.99), true);
  assert.equal(isHeurekaHidden('Auto-moto > X', 50, 10), false);
  assert.equal(isHeurekaHidden('Auto-moto > X', 50), true);
});

'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { buildTvQuickFacts } = require('../lib/atos-tv-quick-facts');

test('vráti null bez uhlopriečky (nie je to obrazovkový produkt)', () => {
  assert.equal(buildTvQuickFacts('Autoadaptér SENCOR Opticum 12V', [['HDMI', 'Ano']]), null);
});

test('základná veta s uhlopriečkou a pripojeniami, bez farby v názve', () => {
  const facts = buildTvQuickFacts('FINLUX 40FFI5661 Smart TV Full HD Tivo', [
    ['Úhlopříčka', '40 - 50" (101 - 127cm)'],
    ['HDMI', '2x'],
    ['USB port', '1x'],
    ['LAN RJ45', 'Ano'],
    ['Zabudovaná Wi-Fi', 'Ano'],
  ]);
  assert.equal(facts, 'Úhlopříčka obrazovky 40 - 50" (101 - 127cm), připojení HDMI/Wi-Fi/USB/LAN.');
});

test('farbu doplní len ak ju názov produktu sám uvádza', () => {
  const facts = buildTvQuickFacts('Finlux 32FWI5670 Smart Android TV Full Hd Bílá', [
    ['Úhlopříčka', '32" (82cm)'],
  ]);
  assert.equal(facts, 'Úhlopříčka obrazovky 32" (82cm), barva bílá.');
});

test('vynechá pripojenie s hodnotou "Ne"', () => {
  const facts = buildTvQuickFacts('Test TV', [
    ['Úhlopříčka', '24"'],
    ['HDMI', 'Ne'],
    ['USB port', '1x'],
  ]);
  assert.equal(facts, 'Úhlopříčka obrazovky 24", připojení USB.');
});

const test = require('node:test');
const assert = require('node:assert');
const { buildFallbackParams, detectColor } = require('./lib/fallback-params');
const { addToItem } = require('./add-fallback-params');

test('farba s diakritikou, viac farieb je nejednoznačné', () => {
  assert.strictEqual(detectColor('Telefon černý'), 'čierna');
  assert.strictEqual(detectColor('Nabíječka bílá'), 'biela');
  assert.strictEqual(detectColor('Aquabelo, černý/bílý'), '');
  assert.strictEqual(detectColor('Domo DO716BL'), '');
});

test('parametre z názvu a popisu', () => {
  const p = buildFallbackParams({ name: 'Lenovo Idea Tab 8/256GB 11" šedá', description: 'Bluetooth, WiFi, USB-C', manufacturer: 'Lenovo', warranty: '24' });
  const m = Object.fromEntries(p.map((x) => [x.name, x.value]));
  assert.deepStrictEqual(m, { 'Značka': 'Lenovo', 'Farba': 'sivá', 'Pamäť RAM': '8 GB', 'Úložisko': '256 GB', 'Uhlopriečka': '11"', 'Konektivita': 'Bluetooth, Wi-Fi, USB-C', 'Záruka': '24 mesiacov' });
});

test('položky s existujúcimi parametrami sa nemenia', () => {
  const it = '<SHOPITEM><NAME><![CDATA[X]]></NAME><TEXT_PROPERTIES><TEXT_PROPERTY></TEXT_PROPERTY></TEXT_PROPERTIES><AVAILABILITY>a</AVAILABILITY></SHOPITEM>';
  assert.strictEqual(addToItem(it).added, false);
});

test('vloží blok za IMAGES', () => {
  const it = '<SHOPITEM><NAME><![CDATA[X]]></NAME><MANUFACTURER><![CDATA[Y]]></MANUFACTURER><IMAGES></IMAGES><AVAILABILITY>a</AVAILABILITY></SHOPITEM>';
  const r = addToItem(it);
  assert.ok(r.added && r.item.indexOf('</IMAGES>') < r.item.indexOf('<TEXT_PROPERTIES>') && r.item.indexOf('<TEXT_PROPERTIES>') < r.item.indexOf('<AVAILABILITY>'));
});

const test = require('node:test');
const assert = require('assert');
const { normalizeName, normalizeValue, normalizeParams } = require('./lib/param-normalize');
const { normalizeItem } = require('./normalize-feed-params');

test('názvy sa zjednotia po slovensky', () => {
  assert.strictEqual(normalizeName('Barva'), 'Farba');
  assert.strictEqual(normalizeName('Hmotnost'), 'Hmotnosť');
  assert.strictEqual(normalizeName('Krytí [IP kód]'), 'Stupeň krytia (IP)');
  assert.strictEqual(normalizeName('Registrace - Sleva'), '');
  assert.strictEqual(normalizeName('barva světla'), 'Farba svetla');
});
test('hodnoty áno/nie a farby', () => {
  assert.strictEqual(normalizeValue('X', 'ano'), 'Áno');
  assert.strictEqual(normalizeValue('X', 'ne'), 'Nie');
  assert.strictEqual(normalizeValue('Farba', 'černo-zelená'), 'čierno-zelená');
  assert.strictEqual(normalizeValue('Farba', 'bílá'), 'biela');
  assert.strictEqual(normalizeValue('Farba', 'czarny'), 'čierna');
});
test('duplicity po zjednotení vyhráva prvý výskyt', () => {
  const r = normalizeParams([{ name: 'Barva', values: ['černá'] }, { name: 'Farba', values: ['biela'] }]);
  assert.deepStrictEqual(r, [{ name: 'Farba', values: ['čierna'] }]);
});
test('prepíše blok vo feede', () => {
  const it = '<SHOPITEM><TEXT_PROPERTIES>\n  <TEXT_PROPERTY>\n    <NAME><![CDATA[Barva]]></NAME>\n    <VALUE><![CDATA[bílá]]></VALUE>\n  </TEXT_PROPERTY>\n</TEXT_PROPERTIES></SHOPITEM>';
  const out = normalizeItem(it, { before: 0, after: 0 });
  assert.ok(out.includes('<![CDATA[Farba]]>') && out.includes('<![CDATA[biela]]>'));
});

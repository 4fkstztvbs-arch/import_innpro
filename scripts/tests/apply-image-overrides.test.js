'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { applyImageOverrides } = require('../apply-image-overrides');

const item = (code, files) => `<SHOPITEM>\n<CODE>${code}</CODE>\n<IMAGES>\n${files.map((f, i) => `  <IMAGE description="X - obrázok ${i + 1}">https://cdn.test/a/${f}</IMAGE>`).join('\n')}\n</IMAGES>\n</SHOPITEM>`;

test('presunie vybranú fotku na prvé miesto a prečísluje alt texty', () => {
  const xml = item('A1', ['1.jpg', '2.jpg', '3.jpg']) + item('B2', ['x.jpg', 'y.jpg']);
  const { xml: out, stats } = applyImageOverrides(xml, { A1: { primary: '3.jpg' } });
  assert.equal(stats.applied, 1);
  const a = out.match(/<CODE>A1[\s\S]*?<\/SHOPITEM>/)[0];
  assert.deepEqual([...a.matchAll(/a\/(\d)\.jpg/g)].map((m) => m[1]), ['3', '1', '2']);
  assert.deepEqual([...a.matchAll(/obrázok (\d)/g)].map((m) => m[1]), ['1', '2', '3']);
  assert.ok(out.includes(item('B2', ['x.jpg', 'y.jpg'])));
});

test('je idempotentný a hlási chýbajúcu fotku alebo produkt', () => {
  const xml = item('A1', ['1.jpg', '2.jpg']);
  const once = applyImageOverrides(xml, { A1: { primary: '2.jpg' } }).xml;
  const twice = applyImageOverrides(once, { A1: { primary: '2.jpg' } });
  assert.equal(twice.xml, once);
  assert.equal(twice.stats.unchanged, 1);
  const miss = applyImageOverrides(xml, { A1: { primary: 'zz.jpg' }, Q9: { primary: '1.jpg' } });
  assert.equal(miss.xml, xml);
  assert.deepEqual(miss.stats.missing.sort(), ['A1', 'Q9']);
});

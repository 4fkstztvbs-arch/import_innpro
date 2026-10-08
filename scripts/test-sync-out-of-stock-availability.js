'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { syncItem, syncXml } = require('./sync-out-of-stock-availability');

test('pridá tag s rovnakou hodnotou ako AVAILABILITY (aj s CDATA)', () => {
  const out = syncItem('<SHOPITEM><CODE>1</CODE><AVAILABILITY><![CDATA[1-2 ks skladom]]></AVAILABILITY><VISIBLE>1</VISIBLE></SHOPITEM>');
  assert.match(out, /<AVAILABILITY_OUT_OF_STOCK><!\[CDATA\[1-2 ks skladom\]\]><\/AVAILABILITY_OUT_OF_STOCK>/);
});

test('prepíše starý tag po zmene dostupnosti (znovu naskladnené)', () => {
  const out = syncItem('<SHOPITEM><AVAILABILITY>Skladom</AVAILABILITY>\n<AVAILABILITY_OUT_OF_STOCK>Vypredané</AVAILABILITY_OUT_OF_STOCK></SHOPITEM>');
  assert.equal((out.match(/AVAILABILITY_OUT_OF_STOCK>/g) || []).length, 2);
  assert.match(out, /<AVAILABILITY_OUT_OF_STOCK>Skladom<\/AVAILABILITY_OUT_OF_STOCK>/);
});

test('tombstone dostane Vypredané a je idempotentné', () => {
  const xml = '<SHOP>\n<SHOPITEM>\n<CODE>x</CODE>\n<AVAILABILITY>Vypredané</AVAILABILITY>\n<VISIBILITY>detailOnly</VISIBILITY>\n</SHOPITEM>\n</SHOP>';
  const first = syncXml(xml);
  assert.equal(first.changed, 1);
  assert.match(first.output, /<AVAILABILITY_OUT_OF_STOCK>Vypredané<\/AVAILABILITY_OUT_OF_STOCK>/);
  const second = syncXml(first.output);
  assert.equal(second.changed, 0);
  assert.equal(second.output, first.output);
});

test('položku bez AVAILABILITY nechá bez zmeny', () => {
  const item = '<SHOPITEM><CODE>1</CODE></SHOPITEM>';
  assert.equal(syncItem(item), item);
});

test('rovnaká hodnota s CDATA a bez CDATA sa nepovažuje za zmenu', () => {
  const item = '<SHOPITEM><AVAILABILITY><![CDATA[Skladom]]></AVAILABILITY>\n<AVAILABILITY_OUT_OF_STOCK>Skladom</AVAILABILITY_OUT_OF_STOCK></SHOPITEM>';
  assert.equal(syncItem(item), item);
});

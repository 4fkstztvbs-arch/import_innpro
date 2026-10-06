'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { applyToXml } = require('../apply-atypical-shipping-tv');

const TV = 'TV, audio, video a foto technika > Televízory';

function item(name, cats, extra = '') {
  return '<SHOPITEM>\n<NAME><![CDATA[' + name + ']]></NAME>\n<CODE>X1</CODE>\n<CATEGORIES>\n'
    + cats.map((c) => '  <CATEGORY><![CDATA[' + c + ']]></CATEGORY>').join('\n')
    + '\n</CATEGORIES>\n<VISIBILITY>visible</VISIBILITY>\n<LOGISTIC><WEIGHT>0.00</WEIGHT></LOGISTIC>\n'
    + extra + '<CURRENCY>EUR</CURRENCY>\n</SHOPITEM>';
}
const wrap = (...items) => '<SHOP>\n' + items.join('\n') + '\n</SHOP>\n';
const FLAG = '<ATYPICAL_PRODUCT><ATYPICAL_SHIPPING>1</ATYPICAL_SHIPPING></ATYPICAL_PRODUCT>';

test('televízor dostane príznak za LOGISTIC', () => {
  const { out, count } = applyToXml(wrap(item('LED televízor Strong 32"', [TV])));
  assert.equal(count, 1);
  assert.ok(out.includes('</LOGISTIC>\n' + FLAG + '\n<CURRENCY>'));
});

test('príslušenstvo a produkty mimo kategórie ostanú bez zmeny', () => {
  const xml = wrap(
    item('Finlux napájecí kabel 12V', [TV]),
    item('Projektor Kruger&Matz', [TV]),
    item('Sada na čištění obrazovek', [TV]),
    item('Držiak TV na stenu', ['TV, audio, video a foto technika > TV stolíky a držiaky']),
    item('LED televízor v inej kategórii', ['Iná > Kategória']),
  );
  const { out, count } = applyToXml(xml);
  assert.equal(count, 0);
  assert.equal(out, xml);
});

test('idempotentné a prepíše 0 na 1', () => {
  const first = applyToXml(wrap(item('LED televízor Strong 32"', [TV]))).out;
  assert.equal(applyToXml(first).out, first);
  const zero = wrap(item('OLED televízor LG', [TV],
    '<ATYPICAL_PRODUCT><ATYPICAL_SHIPPING>0</ATYPICAL_SHIPPING></ATYPICAL_PRODUCT>'));
  const { out } = applyToXml(zero);
  assert.ok(out.includes('<ATYPICAL_SHIPPING>1</ATYPICAL_SHIPPING>'));
  assert.ok(!out.includes('<ATYPICAL_SHIPPING>0</ATYPICAL_SHIPPING>'));
});

test('URL-only aktualizácia dostupnosti sa nemení', () => {
  const xml = '<SHOP>\n<SHOPITEM>\n<CODE>X2</CODE>\n<VISIBILITY>detailOnly</VISIBILITY>\n<AVAILABILITY>Vypredané</AVAILABILITY>\n</SHOPITEM>\n</SHOP>\n';
  assert.equal(applyToXml(xml).out, xml);
});

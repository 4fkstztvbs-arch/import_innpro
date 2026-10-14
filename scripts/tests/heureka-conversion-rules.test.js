'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { applyConversionRules, hideReason, normEan, cheapestFromTargets, setHidden } = require('../apply-heureka-conversion-rules');

const RULES = {
  maxAboveCheapestPct: 20, priceAbove: 1000,
  heurekaCategories: ['Solárne zostavy'], hideWithoutPurchasePrice: true,
  keepEans: { '0000000000005': 'known converter' },
  estimatedMarginPctBySupplier: { 'monacor.xml': 20 },
  skipSuppliers: ['wiim.xml'], forceVisibleSuppliers: ['basys.xml'],
};
const ctx = {
  supplier: 'kb.xml',
  cheapest: new Map([['0000000000001', 100], ['0000000000002', 100], ['0000000000004', 1100]]),
  categories: new Map([['0000000000003', 'Solárne zostavy']]),
  isPilot: (e) => e === '0000000000006',
};
const item = (ean, price, purchase = 50, extra = '') => `<SHOPITEM>\n<CODE>SKU-${ean}</CODE><EAN>${ean}</EAN>${extra}\n<PRICE_VAT>${price}</PRICE_VAT>\n${purchase ? `<PURCHASE_PRICE>${purchase}</PURCHASE_PRICE>\n` : ''}</SHOPITEM>`;
const hidden = (xml, ean) => (xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g) || [])
  .some((s) => s.includes(`<EAN>${ean}</EAN>`) && /<HEUREKA_HIDDEN>\s*1\s*<\/HEUREKA_HIDDEN>/.test(s));
const run = (xml, context = ctx, rules = RULES) => applyConversionRules(xml, rules, context);

test('preserves expensive-relative, category and missing-cost exclusions; conditions the high-price rule', () => {
  const xml = [item('0000000000001', 121), item('0000000000002', 119), item('0000000000003', 200), item('0000000000004', 1200), item('0000000000007', 50, 0)].join('\n');
  const out = run(xml);
  assert.deepEqual(out.stats, { cena: 1, bezNakupnej: 1, kategoria: 1, drahsi: 1, restored: 0, visible: 0 });
  for (const e of ['0000000000001', '0000000000003', '0000000000004', '0000000000007']) assert.ok(hidden(out.xml, e));
  assert.ok(!hidden(out.xml, '0000000000002'));
});

test('known converters, pilot and existing exclusions remain protected; operation is idempotentent', () => {
  const xml = [item('0000000000005', 5000), item('0000000000006', 5000), item('0000000000004', 1500, 50, '<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>')].join('\n');
  assert.equal(run(xml).xml, xml);
  const once = run(item('0000000000004', 1500)).xml;
  assert.equal(run(once).xml, once);
});

test('estimated MONACOR margin still exempts the missing-cost rule', () => {
  const x = item('0000000000008', 50, 0);
  assert.equal(run(x, { ...ctx, supplier: 'monacor.xml' }).stats.bezNakupnej, 0);
  assert.equal(run(x).stats.bezNakupnej, 1);
});

test('high price alone and missing competitor data never trigger the price-position filter', () => {
  assert.equal(run(item('0000000000008', 5000)).stats.cena, 0);
  assert.equal(run(item('0000000000008', 5000)).xml, item('0000000000008', 5000));
});

test('exactly 1000 EUR does not trigger the above-1000 rule', () => {
  const c = { ...ctx, cheapest: new Map([['0000000000008', 999]]) };
  assert.equal(run(item('0000000000008', 1000), c).stats.cena, 0);
  assert.equal(run(item('0000000000008', 1000.01), c).stats.cena, 1);
});

test('winning and tied prices above 1000 EUR remain visible', () => {
  for (const p of [1090, 1100, 1100.0000000001]) assert.equal(run(item('0000000000004', p)).stats.cena, 0);
  assert.equal(run(item('0000000000004', 1100.01)).stats.cena, 1);
});

test('uses the current feed price, not the old price before repricing', () => {
  assert.equal(run(item('0000000000004', 1600)).stats.cena, 1);
  assert.equal(run(item('0000000000004', 1090)).stats.cena, 0);
});

test('invalid or infinite product prices cannot trigger a commercial exclusion', () => {
  for (const p of ['NaN', 'Infinity', '1500EUR', '', '-1', '0']) assert.equal(hideReason(item('0000000000004', p), RULES, ctx), null);
});

test('BASYS overrides all commercial hide reasons and restores existing hidden flags explicitly', () => {
  const xml = [item('0000000000003', 5000, 0, '<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>'), item('0000000000001', 9000, 0)].join('\n');
  const out = run(xml, { ...ctx, supplier: 'basys.xml' });
  assert.equal(out.stats.restored, 1);
  assert.equal(out.stats.visible, 2);
  assert.equal((out.xml.match(/<HEUREKA_HIDDEN>0<\/HEUREKA_HIDDEN>/g) || []).length, 2);
  assert.ok(!out.xml.includes('<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>'));
  assert.equal(run(out.xml, { ...ctx, supplier: 'basys.xml' }).xml, out.xml);
});

test('BASYS restoration changes no price, code, EAN, category, availability or shop visibility', () => {
  const extra = '<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN><VISIBILITY>hidden</VISIBILITY><AVAILABILITY>0</AVAILABILITY><CATEGORY>Keep</CATEGORY><URL>https://example.invalid/keep/</URL>';
  const xml = '<SHOP>' + item('0000000000003', 4500, 3200, extra) + '</SHOP>';
  const out = run(xml, { ...ctx, supplier: 'basys.xml' }).xml;
  assert.equal(out, xml.replace('<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>', '<HEUREKA_HIDDEN>0</HEUREKA_HIDDEN>'));
});

test('BASYS exception is supplier-specific and does not unhide other suppliers', () => {
  const xml = item('0000000000004', 1090, 50, '<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>');
  for (const supplier of ['atos.xml', 'kb.xml', 'innpro.xml', 'monacor.xml', 'penta.xml', 'solight.xml']) assert.equal(run(xml, { ...ctx, supplier }).xml, xml);
});

test('WiiM skip preserves all bytes even if its product would match every rule', () => {
  const xml = item('0000000000003', 9000, 0, '<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN>');
  assert.equal(run(xml, { ...ctx, supplier: 'wiim.xml' }).xml, xml);
  assert.equal(hideReason(xml, RULES, { ...ctx, supplier: 'wiim.xml' }), null);
});

test('explicit visible field becomes one hidden field, never duplicate 0 and 1', () => {
  const xml = run(item('0000000000004', 1500, 50, '<HEUREKA_HIDDEN>0</HEUREKA_HIDDEN>')).xml;
  assert.equal((xml.match(/<HEUREKA_HIDDEN>/g) || []).length, 1);
  assert.ok(hidden(xml, '0000000000004'));
});

test('explicit supplier restoration collapses duplicate hidden elements', () => {
  const xml = item('0000000000004', 1500, 50, '<HEUREKA_HIDDEN>1</HEUREKA_HIDDEN><HEUREKA_HIDDEN>0</HEUREKA_HIDDEN>');
  const out = run(xml, { ...ctx, supplier: 'basys.xml' }).xml;
  assert.equal((out.match(/<HEUREKA_HIDDEN>/g) || []).length, 1);
  assert.ok(out.includes('<HEUREKA_HIDDEN>0</HEUREKA_HIDDEN>'));
});

test('setter supports missing price element without losing the item', () => {
  assert.equal(setHidden('<SHOPITEM><CODE>KEEP</CODE></SHOPITEM>', 0), '<SHOPITEM><CODE>KEEP</CODE><HEUREKA_HIDDEN>0</HEUREKA_HIDDEN>\n</SHOPITEM>');
});

const report = 'premiumstore-sk_2026-10-14_08-42.csv';
const observation = { sourceReport: report, mode: 'market', sellerCount: 3, competitorPrices: [1100, 1250] };

test('market lookup retains minimum valid competing price and leading-zero identity', () => {
  const out = cheapestFromTargets({ '4': observation }, report);
  assert.equal(out.size, 1);
  assert.equal(out.get('0000000000004'), 1100);
  assert.equal(normEan('0000000000004'), '0000000000004');
});

test('market lookup rejects stale, mixed-report and sole-seller observations', () => {
  for (const change of [{ sourceReport: 'old.csv' }, { mode: 'supplier' }, { sellerCount: 1 }, { sellerCount: null }]) {
    assert.equal(cheapestFromTargets({ '4': { ...observation, ...change } }, report).size, 0);
  }
});

test('market lookup rejects invalid competitor lists rather than silently using a subset', () => {
  for (const competitorPrices of [[], null, ['1100'], [NaN], [Infinity], [0, 1100], [-1, 1100]]) {
    assert.equal(cheapestFromTargets({ '4': { ...observation, competitorPrices } }, report).size, 0);
  }
});

test('missing processed-report provenance yields no price-position decision', () => {
  assert.equal(cheapestFromTargets({ '4': observation }).size, 0);
  assert.equal(cheapestFromTargets(null, report).size, 0);
  assert.equal(cheapestFromTargets([], report).size, 0);
});

test('category exclusion stays independent of winning price for suppliers other than BASYS', () => {
  const c = { ...ctx, cheapest: new Map([['0000000000003', 2000]]) };
  const out = run(item('0000000000003', 1500), c);
  assert.equal(out.stats.cena, 0);
  assert.equal(out.stats.kategoria, 1);
});

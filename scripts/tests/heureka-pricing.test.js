'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { POLICY, readCompetition, priceDecision } = require('../heureka-pricing');
const { resolveTargetPrice } = require('../heureka-price-targets');
const { buildPriceTargets, processingFingerprint, readCsvRows } = require('../process-heureka-report');

function report(prices, ownIndex = 0) {
  const row = {
    'E-shopov predávajúcich produkt': String(prices.length), 'Vaša cena': String(prices[ownIndex]),
    'Vaša pozícia podľa ceny': String(ownIndex + 1), 'Najnižšia cena': String(prices[0]),
    'Najvyššia cena': String(prices.at(-1)),
  };
  for (let i = 2; i <= Math.min(10, prices.length); i++) {
    row[`PriceMin${i}`] = String(prices[i - 1]);
    row[`PriceMax${i}`] = String(prices[prices.length - i]);
  }
  return row;
}
function targetFor(competition, reference = 100, source = 'innpro.xml') {
  return { pricingVersion: POLICY.version, policy: POLICY, mode: competition.sellerCount === 1 ? 'supplier' : 'market',
    referencePriceInclVat: reference, source, competitorPrices: competition.prices,
    completeRanking: competition.complete, sellerCount: competition.sellerCount, heurekaNajnizsia: competition.cheapest };
}

test('two sellers: coalesce mirrored ranks and remove our offer once (Edifier)', () => {
  const c = readCompetition(report([199.5, 277]));
  assert.deepEqual(c.prices, [277]);
  assert.equal(priceDecision(199.5, 141.04, 23, c).price, 276.9);
});
test('real ties at different ranks remain competitors', () => {
  const c = readCompetition(report([100, 100, 120]));
  assert.deepEqual(c.prices, [100, 120]);
  assert.equal(priceDecision(100, 70, 23, c).price, 99.9);
});
test('remove the REPORT own price, even after our feed price changes', () => {
  const c = readCompetition(report([100, 150]));
  assert.equal(priceDecision(160, 50, 23, c).price, 149.9);
});
test('own offer need not be cheapest', () => {
  const c = readCompetition(report([90, 100, 120], 1));
  assert.deepEqual(c.prices, [90, 120]);
  assert.equal(priceDecision(100, 50, 23, c).price, 89.9);
});
test('all seller counts, overlap boundaries and sparse middle ranks', () => {
  for (let n = 1; n <= 50; n++) {
    const prices = Array.from({ length: n }, (_, i) => 100 + i);
    for (let ownIndex = 0; ownIndex < n; ownIndex++) {
      const c = readCompetition(report(prices, ownIndex));
      assert.equal(c.valid, true, `${n}/${ownIndex}`);
      assert.equal(c.complete, n <= 20);
      assert.equal(c.cheapest, n === 1 ? null : ownIndex === 0 ? 101 : 100);
      assert(c.prices.length <= n - 1);
    }
  }
});
test('invalid or inconsistent reports produce no competitive target', () => {
  for (const change of [{ PriceMax2: '12' }, { 'Vaša cena': '5' }, { 'E-shopov predávajúcich produkt': '' }, { 'Najnižšia cena': '0' }]) {
    const c = readCompetition({ ...report([100, 120]), ...change });
    assert.equal(c.valid, false);
    assert.equal(priceDecision(100, 50, 23, c).target, null);
  }
});
test('sole INNPRO offer retains 15% markup; other suppliers keep own base price', () => {
  const c = readCompetition(report([180]));
  assert.equal(priceDecision(180, 100, 23, c, POLICY, 'innpro.xml').price, 141.5);
  assert.equal(resolveTargetPrice(targetFor(c), 180, 100, 23), 141.5);
  assert.equal(resolveTargetPrice(targetFor(c, 180, 'kb.xml'), 167.37, 100, 23), 167.37);
});
test('missing purchase price or VAT never changes a price', () => {
  const c = readCompetition(report([100, 150]));
  for (const [cost, vat] of [[null, 23], [0, 23], [-1, 23], [50, null], [50, NaN]]) {
    assert.equal(priceDecision(100, cost, vat, c).price, 100);
    assert.equal(resolveTargetPrice(targetFor(c), 100, cost, vat), 100);
  }
});
test('no cap on increases; round strictly below competitor and above floor', () => {
  const c = readCompetition(report([100, 500]));
  const d = priceDecision(100, 50, 23, c);
  assert.equal(d.price, 499.9);
  for (const competitor of [0.5, 0.99, 9.9, 10, 10.01, 10.5, 10.9, 11, 99.99, 100, 277, 2537]) {
    const d = priceDecision(competitor / 2, 0.1, 23, readCompetition(report([competitor / 2, competitor])));
    assert(d.price < competitor);
    assert(d.price >= 0.1 * 1.05 * 1.23);
  }
});
test('margin floor is recomputed when purchase price changes', () => {
  const c = readCompetition(report([100, 150]));
  const target = targetFor(c);
  assert.equal(resolveTargetPrice(target, 50, 50, 23), 149.9);
  assert.equal(resolveTargetPrice(target, 50, 200, 23), 258.5);
  assert(resolveTargetPrice(target, 50, 200, 23) >= 200 * 1.05 * 1.23);
});
test('do not discount when the floor cannot overtake a competing offer', () => {
  const c = readCompetition(report([80, 100], 1));
  const d = priceDecision(100, 70, 23, c);
  assert.equal(d.price, 100);
  assert.equal(d.cantCompete, true);
  const improves = priceDecision(130, 80, 23, readCompetition(report([80, 110, 130], 2)));
  assert.equal(improves.price, 103.5);
});
test('market target works identically for either supplier baseline, and is idempotent', () => {
  const c = readCompetition(report([100, 150]));
  const t = targetFor(c);
  for (const base of [50, 100, 149.9, 200]) assert.equal(resolveTargetPrice(t, base, 50, 23), 149.9);
});
test('a price already on target persists in the live target map', () => {
  const t = buildPriceTargets([{ EAN: '123', KonkurenciaPlatna: '1', NakupnaCenaBezDphEUR: '50',
    PocetPredajcov: '2', SurovyCielEUR: '149.9', Akcia: 'BEZ ZMENY', NasaCenaEUR: '149.9',
    Dodavatel: 'innpro.xml', KonkurencneCeny: '150', HeurekaNajnizsiaEUR: '150', UplnyRebricek: '1' }], 'report.csv');
  assert.equal(resolveTargetPrice(t['123'], 70.7, 50, 23), 149.9);
});
test('same filename with changed CSV contents invalidates processed state', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'heureka-fingerprint-'));
  try {
    const file = path.join(dir, 'report.csv'); fs.writeFileSync(file, 'first');
    const first = processingFingerprint(file, POLICY);
    assert.equal(first, processingFingerprint(file, POLICY));
    fs.writeFileSync(file, 'second'); assert.notEqual(first, processingFingerprint(file, POLICY));
    assert.notEqual(processingFingerprint(file, POLICY), processingFingerprint(file, { ...POLICY, competitorDiscountPct: 1 }));
  } finally { fs.rmSync(dir, { recursive: true }); }
});
test('CSV report through comparison, target map and direct XML application', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'heureka-pipeline-'));
  try {
    const xmlPath = path.join(dir, 'innpro.xml');
    fs.writeFileSync(xmlPath, '<SHOP><SHOPITEM><EAN>123</EAN><NAME><![CDATA[Test]]></NAME><PRICE_VAT>199.50</PRICE_VAT><PURCHASE_PRICE>141.04</PURCHASE_PRICE><PURCHASE_VAT>23</PURCHASE_VAT></SHOPITEM></SHOP>');
    const row = { EAN: '123', ...report([199.5, 277]) };
    const csvPath = path.join(dir, 'report.csv'); const out = path.join(dir, 'comparison.csv');
    fs.writeFileSync(csvPath, Object.keys(row).join(',') + '\n' + Object.values(row).join(',') + '\n');
    const run = spawnSync(process.execPath, [path.join(__dirname, '../compare-heureka-prices.js'), csvPath, `--xml=${dir}`, `--out=${out}`], { encoding: 'utf8' });
    assert.equal(run.status, 0, run.stderr);
    const rows = readCsvRows(out);
    assert.equal(rows[0].OdporucanaCenaEUR, '276.9');
    assert.equal(rows[0].Akcia, 'ZVÝŠIŤ');
    const t = buildPriceTargets(rows, 'report.csv')['123'];
    assert.equal(resolveTargetPrice(t, 199.5, 141.04, 23), 276.9);
    fs.mkdirSync(path.join(dir, 'scripts'));
    fs.mkdirSync(path.join(dir, 'data/heureka-reports'), { recursive: true });
    for (const file of ['apply-price-targets.js', 'heureka-price-targets.js', 'heureka-pricing.js', 'heureka-pricing-policy.json', 'round-price.js', 'heureka-hidden-categories.json']) {
      fs.copyFileSync(path.join(__dirname, '..', file), path.join(dir, 'scripts', file));
    }
    fs.writeFileSync(path.join(dir, 'data/heureka-reports/price-targets.json'), JSON.stringify({ '123': t }));
    const apply = () => spawnSync(process.execPath, [path.join(dir, 'scripts/apply-price-targets.js'), `--xml=${xmlPath}`], { encoding: 'utf8', env: { ...process.env, HEUREKA_PRICE_OVERRIDE: '1' } });
    const applied = apply(); assert.equal(applied.status, 0, applied.stderr);
    assert.match(fs.readFileSync(xmlPath, 'utf8'), /<PRICE_VAT>276\.90<\/PRICE_VAT>/);
    const repeated = apply(); assert.equal(repeated.status, 0, repeated.stderr);
    assert.match(repeated.stdout, /Spolu prepísaných cien: 0/);
  } finally { fs.rmSync(dir, { recursive: true }); }
});

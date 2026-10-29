'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { hideReason } = require('../apply-heureka-conversion-rules');

const ROOT = path.join(__dirname, '..', '..');
const DATA = path.join(ROOT, 'data', 'wiim-black-friday.json');
const SCRIPT = path.join(ROOT, 'scripts', 'apply-innpro-black-friday.js');

const bf = JSON.parse(fs.readFileSync(DATA, 'utf8'));

function feedFor(items) {
  return '<SHOP>\n' + Object.entries(items).map(([ean, it]) =>
    `<SHOPITEM>\n<CODE>${it.code}</CODE>\n<EAN>${ean}</EAN>\n<PRICE_VAT>${it.standardPrice.toFixed(2)}</PRICE_VAT>\n</SHOPITEM>`).join('\n') + '\n</SHOP>\n';
}

function run(today) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wiim-bf-'));
  const file = path.join(dir, 'wiim.xml');
  fs.writeFileSync(file, feedFor(bf.items));
  execFileSync('node', [SCRIPT, file], {
    env: { ...process.env, INNPRO_BF_DATA: DATA, INNPRO_BF_TODAY: today, BF_LABEL: 'WiiM' },
  });
  return fs.readFileSync(file, 'utf8');
}

const tag = (b, t) => (b.match(new RegExp(`<${t}>([^<]*)</${t}>`)) || [])[1];
const blocks = (xml) => xml.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g);

test('WiiM BF data covers all 6 variants, with action price below the shop price', () => {
  assert.equal(Object.keys(bf.items).length, 6);
  assert.equal(bf.validFrom, '2026-11-01');
  assert.equal(bf.validUntil, '2026-11-30');
  for (const [ean, it] of Object.entries(bf.items)) {
    assert.match(ean, /^\d{13}$/);
    assert.ok(it.actionPrice > 0 && it.actionPrice < it.standardPrice, ean);
  }
});

test('during the campaign PRICE_VAT stays standard and ACTION_PRICE is the supplier action price', () => {
  for (const b of blocks(run('2026-11-15'))) {
    const it = bf.items[tag(b, 'EAN')];
    assert.equal(tag(b, 'PRICE_VAT'), it.standardPrice.toFixed(2));
    assert.equal(tag(b, 'ACTION_PRICE'), it.actionPrice.toFixed(2));
    assert.match(b, /<CODE>action<\/CODE><ACTIVE>1<\/ACTIVE>/);
  }
});

test('last day is still active, the day after resets ACTION_PRICE to PRICE_VAT and clears the flag', () => {
  for (const b of blocks(run('2026-11-30'))) assert.match(b, /<ACTIVE>1<\/ACTIVE>/);
  for (const b of blocks(run('2026-12-01'))) {
    assert.equal(tag(b, 'ACTION_PRICE'), tag(b, 'PRICE_VAT'));
    assert.match(b, /<CODE>action<\/CODE><ACTIVE>0<\/ACTIVE>/);
  }
});

test('before the campaign the feed carries no discount', () => {
  for (const b of blocks(run('2026-10-31'))) {
    assert.equal(tag(b, 'ACTION_PRICE'), tag(b, 'PRICE_VAT'));
    assert.match(b, /<ACTIVE>0<\/ACTIVE>/);
  }
});

test('during the campaign PURCHASE_PRICE = action price ex VAT × (1 − 20 % margin), outside it 20 % margin from the regular price', () => {
  const expected = { '0741365254621': '147.58', '0741365254638': '147.58', '0741365254560': '192.46', '0741365254577': '192.46', '0741365254539': '292.62', '0741365254607': '292.62' };
  for (const b of blocks(run('2026-11-15'))) {
    const ean = tag(b, 'EAN');
    assert.equal(tag(b, 'PURCHASE_PRICE'), expected[ean], ean);
    assert.equal(tag(b, 'PURCHASE_VAT'), '23');
    assert.equal(tag(b, 'PURCHASE_PRICE_INCL_VAT'), '0');
    // marža z predajnej ceny bez DPH je presne 20 %
    const sellNet = bf.items[ean].actionPrice / 1.23;
    assert.ok(Math.abs((sellNet - Number(tag(b, 'PURCHASE_PRICE'))) / sellNet - 0.2) < 0.0005, ean);
  }
  // mimo akcie: 20 % marža z bežnej predajnej ceny (279/355/510 s DPH)
  const regular = { '0741365254621': '181.46', '0741365254638': '181.46', '0741365254560': '230.89', '0741365254577': '230.89', '0741365254539': '331.71', '0741365254607': '331.71' };
  for (const day of ['2026-10-31', '2026-12-01']) for (const b of blocks(run(day))) assert.equal(tag(b, 'PURCHASE_PRICE'), regular[tag(b, 'EAN')]);
});

test('Heureka conversion rules judge WiiM items by ACTION_PRICE, not by the struck-through price', () => {
  const rules = { priceAtLeast: 100, maxAboveCheapestPct: 0 };
  const ean = '0741365254621';
  const item = `<SHOPITEM><CODE>X</CODE><EAN>${ean}</EAN><PRICE_VAT>279.00</PRICE_VAT><ACTION_PRICE>226.90</ACTION_PRICE></SHOPITEM>`;
  const ctx = (supplier, cheapest) => ({ supplier, cheapest: new Map([[ean, cheapest]]), categories: new Map(), isPilot: () => false });
  // konkurent za 250 €: akčná cena 226,90 € je lacnejšia -> neskrývať; pôvodná 279 € by bola drahšia -> skryť
  assert.equal(hideReason(item, rules, ctx('wiim.xml', 250)), null);
  assert.equal(hideReason(item, rules, ctx('solight.xml', 250)), 'cena');
});

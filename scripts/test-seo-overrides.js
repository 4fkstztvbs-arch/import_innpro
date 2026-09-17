'use strict';

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { createSeoOverrideRuntime } = require('./seo-overrides');

function registry(status = 'ACTIVE') {
  return {
    schemaVersion: 1,
    experimentId: 'TEST',
    status,
    products: {
      ABC: { code: 'ABC', locked: true, status: 'active', seoTitle: 'Test title | premiumstore.sk', metaDescription: 'Test meta description.' },
      CTRL: { code: 'CTRL', locked: true, status: 'control', seoTitle: 'Control title', metaDescription: 'Control meta.' }
    }
  };
}

function withRegistry(data, fn) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'seo-override-'));
  const file = path.join(dir, 'registry.json');
  fs.writeFileSync(file, JSON.stringify(data));
  try { fn(file); } finally { fs.rmSync(dir, { recursive: true, force: true }); }
}

withRegistry(registry('ACTIVE'), (file) => {
  const runtime = createSeoOverrideRuntime(file);
  const p = { code: 'ABC', seoTitle: 'old', metaDescription: 'old meta', price: 10, availability: 'Skladom' };
  runtime.apply(p);
  assert.equal(p.seoTitle, 'Test title | premiumstore.sk');
  assert.equal(p.metaDescription, 'Test meta description.');
  assert.equal(p.price, 10);
  assert.equal(p.availability, 'Skladom');
  assert.deepEqual(runtime.assertComplete().missing, []);
});

withRegistry(registry('PREPARED_NOT_ACTIVE'), (file) => {
  const runtime = createSeoOverrideRuntime(file);
  const p = { code: 'ABC', seoTitle: 'old', metaDescription: 'old meta' };
  runtime.apply(p);
  assert.equal(p.seoTitle, 'old');
  assert.equal(runtime.report().applied, 0);
});

withRegistry(registry('ACTIVE'), (file) => {
  const runtime = createSeoOverrideRuntime(file);
  assert.throws(() => runtime.assertComplete(), /missing configured product codes: ABC/);
});

console.log('SEO override tests: PASS');

'use strict';

const fs = require('fs');
const path = require('path');

const DEFAULT_REGISTRY = path.join(__dirname, '..', 'data', 'seo', 'ctr-test-overrides.json');

function loadSeoOverrides(registryPath = DEFAULT_REGISTRY) {
  const raw = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const products = raw.products || {};
  const byCode = new Map();
  const errors = [];

  for (const [key, entry] of Object.entries(products)) {
    const code = String(entry.code || key || '').trim();
    if (!code) { errors.push(`Override ${key}: missing code`); continue; }
    if (byCode.has(code)) { errors.push(`Duplicate SEO override code: ${code}`); continue; }
    if (!entry.seoTitle || !entry.metaDescription) {
      errors.push(`Override ${code}: seoTitle and metaDescription are required`);
      continue;
    }
    if (entry.seoTitle.length > 70) errors.push(`Override ${code}: SEO title > 70 chars`);
    if (entry.metaDescription.length > 160) errors.push(`Override ${code}: meta description > 160 chars`);
    byCode.set(code, { ...entry, code });
  }

  if (errors.length) throw new Error(`Invalid SEO override registry:\n- ${errors.join('\n- ')}`);
  return { config: raw, byCode };
}

function createSeoOverrideRuntime(registryPath = DEFAULT_REGISTRY) {
  const { config, byCode } = loadSeoOverrides(registryPath);
  const enabled = config.status === 'ACTIVE';
  const applied = new Set();

  function apply(product) {
    if (!enabled || !product || !product.code) return product;
    const override = byCode.get(String(product.code));
    if (!override || override.locked === false || override.status === 'control') return product;
    product.seoTitle = override.seoTitle;
    product.metaDescription = override.metaDescription;
    applied.add(String(product.code));
    return product;
  }

  function report() {
    const expected = enabled
      ? [...byCode.values()].filter((x) => x.locked !== false && x.status !== 'control').map((x) => x.code)
      : [];
    const missing = expected.filter((code) => !applied.has(code));
    return { experimentId: config.experimentId, enabled, configured: byCode.size, expected: expected.length, applied: applied.size, missing };
  }

  function assertComplete() {
    const r = report();
    if (r.enabled && r.missing.length) {
      throw new Error(`SEO experiment ${r.experimentId}: missing configured product codes: ${r.missing.join(', ')}`);
    }
    return r;
  }

  return { apply, report, assertComplete };
}

module.exports = { loadSeoOverrides, createSeoOverrideRuntime };

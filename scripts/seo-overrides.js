'use strict';
const fs = require('fs');
const path = require('path');
const { inspectFeed, patchSeo } = require('./seo-feed-xml');
const DEFAULT_REGISTRY = path.join(__dirname, '..', 'data/seo/ctr-test-overrides.json');
const BASELINE = { from: '2026-08-10', to: '2026-09-16' };
const SUPPLIERS = ['innpro', 'kb', 'atos', 'basys', 'monacor', 'penta', 'solight', 'wiim'];
const keyOf = entry => JSON.stringify([entry.supplier, entry.code]);
const nonempty = x => typeof x === 'string' && x.trim().length > 0;
const validText = x => nonempty(x) && !/[\x00-\x08\x0b\x0c\x0e-\x1f\uFFFE\uFFFF]/u.test(x);
function validateRegistry(config) {
  const errors = [];
  if (config.schemaVersion !== 2) errors.push('schemaVersion must be 2');
  if (config.experimentId !== 'CTR-2026-09') errors.push('unknown experimentId');
  if (!['PREPARED_NOT_ACTIVE', 'ACTIVE', 'PAUSED'].includes(config.status)) errors.push('unknown status');
  if (config.baseline?.from !== BASELINE.from || config.baseline?.to !== BASELINE.to) errors.push('baseline must be 2026-08-10 through 2026-09-16');
  if (!Array.isArray(config.products) || config.products.length !== 20) errors.push('exactly 20 candidates required');
  if (!Array.isArray(config.controls) || config.controls.length !== 20) errors.push('exactly 20 protected controls required');
  if (errors.length) throw new Error(`Invalid SEO override registry: ${errors.join('; ')}`);
  const keys = new Set(), urls = new Set();
  for (const entry of [...config.products, ...config.controls]) {
    if (!nonempty(entry.url) || !entry.url.startsWith('https://www.premiumstore.sk/')) errors.push('invalid candidate/control URL');
    if (urls.has(entry.url)) errors.push(`duplicate/control overlap URL: ${entry.url}`);
    urls.add(entry.url);
    if (entry.code !== null && (!nonempty(entry.code) || entry.code !== entry.code.trim())) errors.push('CODE must be an exact string or null');
    if (entry.supplier !== null && !SUPPLIERS.includes(entry.supplier)) errors.push('unknown supplier');
    if (entry.ean !== null && (typeof entry.ean !== 'string' || !/^\d{8,14}$/.test(entry.ean))) errors.push('EAN must be a string of 8–14 digits or null');
    if (entry.code && entry.supplier) {
      const key = keyOf(entry);
      if (keys.has(key)) errors.push(`duplicate/control overlap identity: ${key}`);
      keys.add(key);
      if (entry.out !== `output/${entry.supplier}.xml` || entry.transform !== `scripts/transform-${entry.supplier}.js`) errors.push(`wrong transform/OUT: ${key}`);
    }
    if (config.status === 'ACTIVE' && entry.currentUrl !== entry.url) errors.push(`changed URL: ${entry.url}`);
    if (config.status === 'ACTIVE' && (entry.mappingStatus !== 'VERIFIED' || !entry.code || !entry.supplier || !nonempty(entry.evidenceRef))) errors.push(`unverified mapping: ${entry.url}`);
  }
  for (const entry of config.products) {
    if (!validText(entry.seoTitle) || [...entry.seoTitle].length > 70) errors.push(`invalid SEO_TITLE: ${entry.url}`);
    if (!validText(entry.metaDescription) || [...entry.metaDescription].length > 160) errors.push(`invalid META_DESCRIPTION: ${entry.url}`);
    const allowed = new Set(['supplier','code','shoptetCode','ean','url','currentUrl','transform','out','mappingStatus','evidenceRef','seoTitle','metaDescription']);
    for (const key of Object.keys(entry)) if (!allowed.has(key)) errors.push(`unsupported override field: ${key}`);
  }
  if (config.status === 'ACTIVE') {
    if (config.baseline.verified !== true) errors.push('baseline source not verified');
    if (!nonempty(config.activation?.approvedBy) || !nonempty(config.activation?.approvalReference) || !nonempty(config.activation?.approvedAt)) errors.push('explicit activation approval is missing');
    if (config.activation?.preflightPassed !== true) errors.push('full preflight is required');
  }
  if (errors.length) throw new Error(`Invalid SEO override registry:\n- ${errors.join('\n- ')}`);
  return config;
}
function loadSeoOverrides(registryPath = DEFAULT_REGISTRY) {
  return validateRegistry(JSON.parse(fs.readFileSync(registryPath, 'utf8')));
}
function applyFeedOverrides(xml, supplier, config, { strict = false } = {}) {
  validateRegistry(config);
  if (!SUPPLIERS.includes(supplier)) throw new Error(`Unknown supplier: ${supplier}`);
  const report = { supplier, enabled: config.status === 'ACTIVE', expected: 0, applied: 0, issues: [] };
  if (!report.enabled) return { xml, report };
  const expected = config.products.filter(x => x.supplier === supplier);
  report.expected = expected.length;
  if (!expected.length) return { xml, report };
  const byCode = new Map();
  for (const item of inspectFeed(xml)) {
    const code = item.fields.CODE?.text;
    if (!byCode.has(code)) byCode.set(code, []);
    byCode.get(code).push(item);
  }
  const changes = [];
  for (const entry of expected) {
    const items = byCode.get(entry.code) || [];
    let reason;
    if (!items.length) reason = 'missing';
    else if (items.length !== 1) reason = 'duplicate-code';
    else if (entry.ean && items[0].fields.EAN?.text !== entry.ean) reason = 'ean-mismatch';
    if (reason) { report.issues.push({ code: entry.code, reason }); continue; }
    changes.push({ item: items[0], seoTitle: entry.seoTitle, metaDescription: entry.metaDescription });
  }
  report.applied = changes.length;
  // A product absent from the current OUT is commonly excluded by supplier stock filters.
  // Keep it reported, but do not fail a routine strict check; the readiness validator keeps
  // the cohort blocked until the product returns. Code/EAN drift and duplicates stay fatal.
  const unsafeIssues = report.issues.filter(issue => issue.reason !== 'missing');
  if (strict && unsafeIssues.length) throw new Error(`SEO preflight ${supplier}: ${JSON.stringify(unsafeIssues)}`);
  // Daily disappearance must not freeze prices or resurrect a stale product.
  // Skip unsafe identities and report drift; strict preflight forbids starting with drift.
  return { xml: patchSeo(xml, changes), report };
}
module.exports = { DEFAULT_REGISTRY, SUPPLIERS, BASELINE, validateRegistry, loadSeoOverrides, applyFeedOverrides };

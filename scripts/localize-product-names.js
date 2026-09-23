#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const DEFAULT_REGISTRY = path.join(__dirname, '..', 'data', 'localization', 'product-names-sk.json');
const DEFAULT_CTR_REGISTRY = path.join(__dirname, '..', 'data', 'seo', 'ctr-test-overrides.json');

function extractTag(block, tag) {
  const cdata = block.match(new RegExp('<' + tag + '><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></' + tag + '>'));
  if (cdata) return cdata[1];
  const plain = block.match(new RegExp('<' + tag + '>([^<]*)</' + tag + '>'));
  return plain ? plain[1] : '';
}

function cdata(value) {
  return '<![CDATA[' + String(value ?? '').replace(/]]>/g, ']]]]><![CDATA[>') + ']]>';
}

function replaceName(block, name) {
  const re = /^(<SHOPITEM(?:\s[^>]*)?>\s*)<NAME>[\s\S]*?<\/NAME>/;
  if (!re.test(block)) throw new Error('Expected product-level <NAME> directly under SHOPITEM');
  return block.replace(re, (full, prefix) => prefix + '<NAME>' + cdata(name) + '</NAME>');
}

function loadRegistry(registryPath = DEFAULT_REGISTRY) {
  const raw = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  if (raw.schemaVersion !== 1 || !Array.isArray(raw.products)) {
    throw new Error('Unsupported localization registry schema');
  }
  return raw;
}

function normalizeEan(value) {
  return String(value || '').replace(/^0+/, '');
}

function localizationKey(supplier, code) {
  return `${supplier}\\u0000${code}`;
}

function loadCtrExcludedKeys(registryPath = DEFAULT_CTR_REGISTRY) {
  const config = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  if (!Array.isArray(config.products) || !Array.isArray(config.controls)) {
    throw new Error('CTR cohort registry must contain products and controls arrays');
  }
  return new Set([...config.products, ...config.controls]
    .filter((entry) => entry && typeof entry.supplier === 'string' && typeof entry.code === 'string')
    .map((entry) => localizationKey(entry.supplier, entry.code)));
}

function localizeXml(xml, { supplier, registry, limit = Infinity, ctrExcluded } = {}) {
  if (!supplier) throw new Error('supplier is required');
  if (!registry) registry = loadRegistry();
  if (!ctrExcluded) ctrExcluded = loadCtrExcludedKeys();

  const entries = registry.products.filter((p) =>
    p.supplier === supplier && p.status === 'pilot_approved'
  );
  const byCode = new Map(entries.map((p) => [p.code, p]));

  const report = {
    supplier,
    eligible: entries.length,
    changed: [],
    alreadyLocalized: [],
    notFound: [],
    issues: [],
    skippedCtr: [],
    untouched: 0,
  };

  const seen = new Set();
  let changeCount = 0;

  const out = xml.replace(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g, (block) => {
    const code = extractTag(block, 'CODE').trim();
    const entry = byCode.get(code);
    if (!entry) {
      report.untouched++;
      return block;
    }

    seen.add(code);
    if (ctrExcluded.has(localizationKey(supplier, code))) {
      report.skippedCtr.push(code);
      report.untouched++;
      return block;
    }
    const currentName = extractTag(block, 'NAME');
    const ean = extractTag(block, 'EAN').trim();

    if (entry.ean && ean && normalizeEan(entry.ean) !== normalizeEan(ean)) {
      report.issues.push({ code, reason: 'ean-mismatch', expected: entry.ean, actual: ean });
      return block;
    }

    if (currentName === entry.skName) {
      report.alreadyLocalized.push(code);
      return block;
    }

    if (currentName !== entry.sourceName) {
      report.issues.push({
        code,
        reason: 'source-name-drift',
        expected: entry.sourceName,
        actual: currentName,
      });
      return block;
    }

    if (changeCount >= limit) return block;

    const changedBlock = replaceName(block, entry.skName);
    report.changed.push({ code, ean, from: currentName, to: entry.skName });
    changeCount++;
    return changedBlock;
  });

  for (const entry of entries) {
    if (!seen.has(entry.code)) report.notFound.push(entry.code);
  }

  report.changedCount = report.changed.length;
  report.issueCount = report.issues.length;
  report.notFoundCount = report.notFound.length;
  return { xml: out, report };
}

function parseArgs(argv) {
  const args = {};
  for (const arg of argv) {
    if (!arg.startsWith('--')) continue;
    const idx = arg.indexOf('=');
    if (idx === -1) args[arg.slice(2)] = true;
    else args[arg.slice(2, idx)] = arg.slice(idx + 1);
  }
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const supplier = args.supplier;
  const input = args.in;
  const output = args.out;
  const registryPath = args.registry || DEFAULT_REGISTRY;
  const limit = args.limit ? Number(args.limit) : Infinity;
  const expected = args.expected ? Number(args.expected) : null;
  const strict = args.strict !== '0';

  if (!supplier || !input) {
    console.error('Usage: node scripts/localize-product-names.js --supplier=kb|atos --in=output/kb.xml [--out=/tmp/kb-localized.xml] [--expected=20] [--limit=N] [--strict=0]');
    process.exit(1);
  }

  const xml = fs.readFileSync(input, 'utf8');
  const registry = loadRegistry(registryPath);
  const result = localizeXml(xml, { supplier, registry, limit });

  if (output) {
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, result.xml, 'utf8');
  }

  console.log(JSON.stringify(result.report, null, 2));

  const errors = [];
  if (result.report.issueCount) errors.push(result.report.issueCount + ' registry/feed mismatch(es)');
  if (expected !== null && result.report.changedCount !== expected) {
    errors.push('expected ' + expected + ' changes, got ' + result.report.changedCount);
  }
  if (strict && errors.length) {
    console.error(errors.join('; '));
    process.exit(2);
  }
}

if (require.main === module) main();

module.exports = {
  DEFAULT_REGISTRY,
  extractTag,
  replaceName,
  loadRegistry,
  loadCtrExcludedKeys,
  localizationKey,
  localizeXml,
};

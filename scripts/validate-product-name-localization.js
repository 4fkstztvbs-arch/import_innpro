#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { extractTag, loadRegistry } = require('./localize-product-names');

function itemMap(xml) {
  const map = new Map();
  const items = xml.match(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g) || [];
  for (const block of items) {
    const code = extractTag(block, 'CODE').trim();
    if (!code) throw new Error('SHOPITEM without CODE');
    if (map.has(code)) throw new Error('Duplicate CODE in XML: ' + code);
    map.set(code, block);
  }
  return map;
}

function nameNeutral(block) {
  const matches = block.match(/<NAME>[\s\S]*?<\/NAME>/g) || [];
  if (matches.length !== 1) throw new Error('Expected exactly one NAME tag in SHOPITEM');
  return block.replace(/<NAME>[\s\S]*?<\/NAME>/, '<NAME>__LOCALIZATION_NAME__</NAME>');
}

function validateXml(beforeXml, afterXml, { supplier, registry } = {}) {
  if (!supplier) throw new Error('supplier is required');
  if (!registry) registry = loadRegistry();

  const allowed = new Map(
    registry.products
      .filter((p) => p.supplier === supplier && p.status === 'pilot_approved')
      .map((p) => [p.code, p])
  );

  const before = itemMap(beforeXml);
  const after = itemMap(afterXml);
  const issues = [];
  const changed = [];

  if (before.size !== after.size) {
    issues.push({ reason: 'shopitem-count-changed', before: before.size, after: after.size });
  }

  for (const [code, beforeBlock] of before) {
    const afterBlock = after.get(code);
    if (!afterBlock) {
      issues.push({ code, reason: 'missing-after' });
      continue;
    }

    if (nameNeutral(beforeBlock) !== nameNeutral(afterBlock)) {
      issues.push({ code, reason: 'non-NAME-field-changed' });
      continue;
    }

    const beforeName = extractTag(beforeBlock, 'NAME');
    const afterName = extractTag(afterBlock, 'NAME');
    if (beforeName === afterName) continue;

    const entry = allowed.get(code);
    if (!entry) {
      issues.push({ code, reason: 'NAME-changed-without-approved-registry-entry', beforeName, afterName });
      continue;
    }
    if (beforeName !== entry.sourceName && beforeName !== entry.skName) {
      issues.push({ code, reason: 'unexpected-before-name', expected: entry.sourceName, actual: beforeName });
      continue;
    }
    if (afterName !== entry.skName) {
      issues.push({ code, reason: 'unexpected-after-name', expected: entry.skName, actual: afterName });
      continue;
    }

    const beforeEan = extractTag(beforeBlock, 'EAN').trim();
    const afterEan = extractTag(afterBlock, 'EAN').trim();
    if (beforeEan !== afterEan) {
      issues.push({ code, reason: 'EAN-changed', beforeEan, afterEan });
      continue;
    }

    changed.push({ code, from: beforeName, to: afterName });
  }

  for (const code of after.keys()) {
    if (!before.has(code)) issues.push({ code, reason: 'new-SHOPITEM-added' });
  }

  return {
    ok: issues.length === 0,
    beforeCount: before.size,
    afterCount: after.size,
    changedCount: changed.length,
    changed,
    issues,
  };
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
  if (!args.before || !args.after || !args.supplier) {
    console.error('Usage: node scripts/validate-product-name-localization.js --supplier=kb|atos --before=output/kb.xml --after=/tmp/kb-localized.xml [--expected=20]');
    process.exit(1);
  }

  const registry = loadRegistry(args.registry);
  const report = validateXml(
    fs.readFileSync(args.before, 'utf8'),
    fs.readFileSync(args.after, 'utf8'),
    { supplier: args.supplier, registry }
  );

  if (args.expected && report.changedCount !== Number(args.expected)) {
    report.issues.push({ reason: 'unexpected-change-count', expected: Number(args.expected), actual: report.changedCount });
    report.ok = false;
  }

  console.log(JSON.stringify(report, null, 2));
  if (!report.ok) process.exit(2);
}

if (require.main === module) main();

module.exports = { itemMap, nameNeutral, validateXml };

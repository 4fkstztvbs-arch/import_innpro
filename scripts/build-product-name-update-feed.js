#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { extractTag, loadRegistry, normalizeEan } = (() => {
  const mod = require('./localize-product-names');
  return {
    extractTag: mod.extractTag,
    loadRegistry: mod.loadRegistry,
    normalizeEan: (value) => String(value || '').replace(/^0+/, ''),
  };
})();

function cdata(value) {
  return '<![CDATA[' + String(value ?? '').replace(/]]>/g, ']]]]><![CDATA[>') + ']]>';
}

function xmlEscape(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function parseItems(xml) {
  const items = new Map();
  const blocks = xml.match(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g) || [];
  for (const block of blocks) {
    const code = extractTag(block, 'CODE').trim();
    if (!code) continue;
    if (items.has(code)) throw new Error('Duplicate CODE in source XML: ' + code);
    items.set(code, {
      code,
      name: extractTag(block, 'NAME'),
      ean: extractTag(block, 'EAN').trim(),
    });
  }
  return items;
}

function buildUpdateFeed(sourceXml, {
  supplier,
  prefix,
  registry,
  codes = null,
  limit = Infinity,
} = {}) {
  if (!supplier) throw new Error('supplier is required');
  if (!prefix) throw new Error('prefix is required');
  if (!registry) registry = loadRegistry();

  const source = parseItems(sourceXml);
  const approved = registry.products.filter((p) =>
    p.supplier === supplier && p.status === 'pilot_approved'
  );
  const byCode = new Map(approved.map((p) => [p.code, p]));

  let selected;
  if (codes && codes.length) {
    selected = codes.map((code) => {
      const entry = byCode.get(code);
      if (!entry) throw new Error('Code is not approved for ' + supplier + ': ' + code);
      return entry;
    });
  } else {
    selected = approved.slice(0, limit);
  }

  if (selected.length > limit) selected = selected.slice(0, limit);

  const issues = [];
  const rows = [];

  for (const entry of selected) {
    const current = source.get(entry.code);
    if (!current) {
      issues.push({ code: entry.code, reason: 'not-found-in-source' });
      continue;
    }

    if (entry.ean && current.ean && normalizeEan(entry.ean) !== normalizeEan(current.ean)) {
      issues.push({
        code: entry.code,
        reason: 'ean-mismatch',
        expected: entry.ean,
        actual: current.ean,
      });
      continue;
    }

    if (current.name !== entry.sourceName && current.name !== entry.skName) {
      issues.push({
        code: entry.code,
        reason: 'source-name-drift',
        expected: [entry.sourceName, entry.skName],
        actual: current.name,
      });
      continue;
    }

    const liveCode = prefix + entry.code;
    rows.push([
      '<SHOPITEM>',
      '  <CODE>' + xmlEscape(liveCode) + '</CODE>',
      '  <NAME>' + cdata(entry.skName) + '</NAME>',
      '</SHOPITEM>',
    ].join('\n'));
  }

  if (issues.length) {
    const err = new Error('Refusing to build update feed: ' + issues.length + ' validation issue(s)');
    err.issues = issues;
    throw err;
  }

  const xml = '<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n' +
    rows.join('\n') +
    '\n</SHOP>\n';

  return {
    xml,
    report: {
      supplier,
      prefix,
      requestedCount: selected.length,
      generatedCount: rows.length,
      codes: selected.map((p) => p.code),
      liveCodes: selected.map((p) => prefix + p.code),
      updateFields: ['CODE', 'NAME'],
      omittedFields: ['PRICE', 'PRICE_VAT', 'ORIG_URL', 'EAN', 'CATEGORIES', 'IMAGES', 'DESCRIPTION', 'SEO_TITLE', 'META_DESCRIPTION'],
    },
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
  const supplier = args.supplier;
  const input = args.in;
  const output = args.out;
  const prefix = args.prefix;
  const registryPath = args.registry || path.join(__dirname, '..', 'data', 'localization', 'product-names-sk.json');
  const limit = args.limit ? Number(args.limit) : Infinity;
  const codes = args.codes ? args.codes.split(',').map((x) => x.trim()).filter(Boolean) : null;

  if (!supplier || !input || !output || !prefix) {
    console.error('Usage: node scripts/build-product-name-update-feed.js --supplier=kb --prefix=KB_ --in=output/kb.xml --out=/tmp/kb-name-update.xml [--codes=CODE1,CODE2] [--limit=3]');
    process.exit(1);
  }

  const sourceXml = fs.readFileSync(input, 'utf8');
  const registry = loadRegistry(registryPath);

  try {
    const result = buildUpdateFeed(sourceXml, { supplier, prefix, registry, codes, limit });
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, result.xml, 'utf8');
    console.log(JSON.stringify(result.report, null, 2));
  } catch (err) {
    console.error(err.message);
    if (err.issues) console.error(JSON.stringify(err.issues, null, 2));
    process.exit(2);
  }
}

if (require.main === module) main();

module.exports = { parseItems, buildUpdateFeed };

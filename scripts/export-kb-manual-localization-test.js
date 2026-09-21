#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { extractTag, loadRegistry } = require('./localize-product-names');

const DEFAULT_INPUT = path.join(__dirname, '..', 'output', 'kb.xml');
const DEFAULT_OUTPUT = path.join(__dirname, '..', 'output', 'kb-localization-test-manual.xml');

// Tri overene pilotne produkty. Tento export je urceny iba na rucny test v Shoptete.
// Produkcny K-B feed zostava BEZ prefixu, pretoze prefix KB_ pridava profil Automaticke importy.
const DEFAULT_CODES = [
  '100000859847', // TP-Link RE205
  '341950068119', // Leifheit sacia hubica 17 cm
  '100000980758', // Vileda Universal susiak 18 m
];

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

function itemMap(xml) {
  const map = new Map();
  for (const block of xml.match(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g) || []) {
    const code = extractTag(block, 'CODE').trim();
    if (!code) throw new Error('SHOPITEM without CODE');
    if (map.has(code)) throw new Error('Duplicate CODE in source XML: ' + code);
    map.set(code, block);
  }
  return map;
}

function replaceProductCode(block, fromCode, toCode) {
  const re = new RegExp('<CODE>' + fromCode.replace(/[.*+?^$()|[\]\\]/g, '\\$&') + '<\\/CODE>');
  if (!re.test(block)) throw new Error('Expected CODE not found in SHOPITEM: ' + fromCode);
  const out = block.replace(re, '<CODE>' + toCode + '</CODE>');
  if (extractTag(out, 'CODE').trim() !== toCode) {
    throw new Error('CODE replacement failed for ' + fromCode);
  }
  return out;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const input = args.in || DEFAULT_INPUT;
  const output = args.out || DEFAULT_OUTPUT;
  const prefix = args.prefix || 'KB_';
  const codes = args.codes
    ? args.codes.split(',').map((x) => x.trim()).filter(Boolean)
    : DEFAULT_CODES;

  if (!prefix) throw new Error('Prefix must not be empty');
  if (!codes.length) throw new Error('No product codes selected');

  const xml = fs.readFileSync(input, 'utf8');
  const sourceItems = itemMap(xml);
  const registry = loadRegistry();
  const approved = new Map(
    registry.products
      .filter((p) => p.supplier === 'kb' && p.status === 'pilot_approved')
      .map((p) => [p.code, p])
  );

  const selected = [];
  const report = [];

  for (const rawCode of codes) {
    if (rawCode.startsWith(prefix)) {
      throw new Error('Raw source code already contains manual-import prefix: ' + rawCode);
    }

    const block = sourceItems.get(rawCode);
    if (!block) throw new Error('Product not found in K-B feed: ' + rawCode);

    const entry = approved.get(rawCode);
    if (!entry) throw new Error('Product is not approved in localization registry: ' + rawCode);

    const currentName = extractTag(block, 'NAME');
    const currentEan = extractTag(block, 'EAN').trim();

    if (currentName !== entry.skName) {
      throw new Error(
        'Product is not localized as expected: ' + rawCode +
        ' (expected "' + entry.skName + '", got "' + currentName + '")'
      );
    }

    if (entry.ean && currentEan && String(entry.ean).replace(/^0+/, '') !== currentEan.replace(/^0+/, '')) {
      throw new Error('EAN mismatch for ' + rawCode);
    }

    const manualCode = prefix + rawCode;
    selected.push(replaceProductCode(block, rawCode, manualCode));
    report.push({ code: manualCode, ean: currentEan, name: currentName });
  }

  const out = '<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n' +
    selected.join('\n') + '\n</SHOP>\n';

  // Posledna poistka: v rucnom subore nesmie ostat neprefixovany CODE.
  const exportedItems = itemMap(out);
  if (exportedItems.size !== codes.length) {
    throw new Error('Unexpected exported SHOPITEM count: ' + exportedItems.size);
  }
  for (const code of exportedItems.keys()) {
    if (!code.startsWith(prefix) || code.startsWith(prefix + prefix)) {
      throw new Error('Unsafe manual-import CODE: ' + code);
    }
  }

  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, out, 'utf8');

  console.log(JSON.stringify({
    input,
    output,
    prefix,
    count: report.length,
    products: report,
  }, null, 2));
}

main();

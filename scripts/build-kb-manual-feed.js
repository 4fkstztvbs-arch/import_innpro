#!/usr/bin/env node
'use strict';

const fs = require('fs');

function parseArgs(argv) {
  const args = {};
  for (const arg of argv) {
    if (!arg.startsWith('--')) continue;
    const i = arg.indexOf('=');
    if (i === -1) args[arg.slice(2)] = true;
    else args[arg.slice(2, i)] = arg.slice(i + 1);
  }
  return args;
}

function extractCode(block) {
  const cdata = block.match(/<CODE><!\[CDATA\[([\s\S]*?)\]\]><\/CODE>/);
  if (cdata) return cdata[1].trim();
  const plain = block.match(/<CODE>([^<]*)<\/CODE>/);
  return plain ? plain[1].trim() : '';
}

function replaceCode(block, nextCode) {
  if (/<CODE><!\[CDATA\[[\s\S]*?\]\]><\/CODE>/.test(block)) {
    return block.replace(/<CODE><!\[CDATA\[[\s\S]*?\]\]><\/CODE>/, '<CODE><![CDATA[' + nextCode + ']]></CODE>');
  }
  if (/<CODE>[^<]*<\/CODE>/.test(block)) {
    return block.replace(/<CODE>[^<]*<\/CODE>/, '<CODE>' + nextCode + '</CODE>');
  }
  throw new Error('SHOPITEM without CODE');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const input = args.in;
  const output = args.out;
  const prefix = args.prefix || 'KB_';

  if (!input || !output) {
    console.error('Usage: node scripts/build-kb-manual-feed.js --in=output/kb.xml --out=/tmp/kb-localized-manual.xml [--prefix=KB_]');
    process.exit(1);
  }

  const xml = fs.readFileSync(input, 'utf8');
  const blocks = xml.match(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g) || [];
  if (!blocks.length) throw new Error('No SHOPITEM blocks found');

  const seen = new Set();
  let changedCodes = 0;

  const out = xml.replace(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g, (block) => {
    const code = extractCode(block);
    if (!code) throw new Error('SHOPITEM without CODE');
    const nextCode = code.startsWith(prefix) ? code : prefix + code;
    if (seen.has(nextCode)) throw new Error('Duplicate output CODE: ' + nextCode);
    seen.add(nextCode);
    if (nextCode !== code) changedCodes++;
    return replaceCode(block, nextCode);
  });

  const outBlocks = out.match(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g) || [];
  if (outBlocks.length !== blocks.length) {
    throw new Error('SHOPITEM count changed: ' + blocks.length + ' -> ' + outBlocks.length);
  }

  for (const block of outBlocks) {
    const code = extractCode(block);
    if (!code.startsWith(prefix)) throw new Error('Unprefixed output CODE: ' + code);
  }

  // Strong safety check: restore each original CODE and require byte-for-byte equality.
  let reverted = out;
  for (const block of outBlocks) {
    const prefixed = extractCode(block);
    const original = prefixed.startsWith(prefix) ? prefixed.slice(prefix.length) : prefixed;
    reverted = reverted.replace('<CODE>' + prefixed + '</CODE>', '<CODE>' + original + '</CODE>');
    reverted = reverted.replace('<CODE><![CDATA[' + prefixed + ']]></CODE>', '<CODE><![CDATA[' + original + ']]></CODE>');
  }

  if (reverted !== xml) {
    throw new Error('Safety check failed: something other than CODE prefix changed');
  }

  fs.writeFileSync(output, out, 'utf8');
  console.log(JSON.stringify({
    ok: true,
    shopitems: blocks.length,
    changedCodes,
    prefix,
    inputBytes: Buffer.byteLength(xml),
    outputBytes: Buffer.byteLength(out)
  }, null, 2));
}

main();

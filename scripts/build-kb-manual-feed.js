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
  const seen = new Set();
  let shopitems = 0;
  let changedCodes = 0;

  const out = xml.replace(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g, (block) => {
    shopitems++;
    const code = extractCode(block);
    if (!code) throw new Error('SHOPITEM without CODE');
    const nextCode = code.startsWith(prefix) ? code : prefix + code;
    if (seen.has(nextCode)) throw new Error('Duplicate output CODE: ' + nextCode);
    seen.add(nextCode);

    const changed = replaceCode(block, nextCode);
    const restored = replaceCode(changed, code);
    if (restored !== block) {
      throw new Error('Safety check failed for CODE ' + code + ': non-CODE content changed');
    }
    if (nextCode !== code) changedCodes++;
    return changed;
  });

  if (!shopitems) throw new Error('No SHOPITEM blocks found');
  const outCount = (out.match(/<SHOPITEM(?:\s[^>]*)?>/g) || []).length;
  if (outCount !== shopitems) throw new Error('SHOPITEM count changed: ' + shopitems + ' -> ' + outCount);

  const badCode = out.match(/<CODE>(?!KB_)[^<]*<\/CODE>/);
  const badCdataCode = out.match(/<CODE><!\[CDATA\[(?!KB_)[\s\S]*?\]\]><\/CODE>/);
  if (badCode || badCdataCode) throw new Error('Unprefixed CODE remains in output');

  fs.writeFileSync(output, out, 'utf8');
  console.log(JSON.stringify({
    ok: true,
    shopitems,
    changedCodes,
    prefix,
    inputBytes: Buffer.byteLength(xml),
    outputBytes: Buffer.byteLength(out)
  }, null, 2));
}

main();

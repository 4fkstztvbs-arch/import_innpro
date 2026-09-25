#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { validateState, applyVypredajToXml } = require('./lib/vypredaj-core');

const feedPath = process.argv[2] || path.join(__dirname, '..', 'output', 'innpro.xml');
const requireAll = !process.argv.includes('--allow-missing');
const statePath = process.env.VYPREDAJ_STATE || path.join(__dirname, '..', 'data', 'vypredaj.json');

function main() {
  if (!fs.existsSync(statePath)) throw new Error(`Chýba stavový súbor ${statePath}.`);
  const state = validateState(JSON.parse(fs.readFileSync(statePath, 'utf8')));
  const feed = fs.readFileSync(feedPath, 'utf8');
  const result = applyVypredajToXml(feed, state, { requireAll });
  const tempPath = `${feedPath}.vypredaj.tmp`;
  fs.writeFileSync(tempPath, result.xml, 'utf8');
  fs.renameSync(tempPath, feedPath);
  const active = result.updatedCodes.filter((code) => state.items[code].quantity > 0).length;
  const inactive = result.updatedCodes.length - active;
  console.log(`Výpredajové značky v ${path.basename(feedPath)}: aktívne ${active}, vypnuté ${inactive}.`);
}

try {
  main();
} catch (err) {
  console.error(`Výpredajový feed sa nepublikuje: ${err.message}`);
  process.exit(1);
}

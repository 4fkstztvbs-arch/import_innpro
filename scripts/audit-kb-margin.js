'use strict';

// Read-only diagnostic for K-B. Prints aggregate margin bands only;
// purchase costs and product identifiers stay in runner temp.
const fs = require('node:fs');
const path = require('node:path');

const MARGIN_DATA_PATH = process.env.KB_MARGIN_DATA || path.join(process.env.RUNNER_TEMP || '/tmp', 'kb-margin-data.json');

function number(value) {
  const parsed = Number(String(value || '').replace(/[^0-9.+-]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
}
function bands() {
  return { matched: 0, missingCost: 0, loss: 0, below5: 0, below10: 0, atLeast10: 0 };
}
function addBand(result, sellGross, cost, vatRate) {
  result.matched++;
  if (!(cost > 0)) { result.missingCost++; return; }
  const breakEven = cost * (1 + vatRate);
  if (sellGross < breakEven) result.loss++;
  if (sellGross < breakEven * 1.05) result.below5++;
  if (sellGross < breakEven * 1.10) result.below10++;
  else result.atLeast10++;
}
async function main() {
  const rows = JSON.parse(fs.readFileSync(MARGIN_DATA_PATH, 'utf8'));
  const converted = rows.filter(row => row.convertedFromCzk && number(row.price) > 0);
  const fxRate = rows.map(row => number(row.fxRate)).find(rate => rate > 0);
  if (!(fxRate > 0)) throw new Error('No valid CZK->EUR rate recorded by transform-kb.');
  if (converted.length === 0) throw new Error('No CZK->EUR converted K-B sale prices were recorded.');

  let costComparisons = 0;
  let costStableAsIs = 0;
  let costStableAfterFx = 0;
  for (const row of converted) {
    const cost = number(row.purchasePrice);
    const previousCost = number(row.previousPurchasePrice);
    if (!(cost > 0) || !(previousCost > 0)) continue;
    costComparisons++;
    const rawRatio = cost / previousCost;
    const fxRatio = cost * fxRate / previousCost;
    if (rawRatio >= 0.75 && rawRatio <= 1.25) costStableAsIs++;
    if (fxRatio >= 0.75 && fxRatio <= 1.25) costStableAfterFx++;
  }

  const margin = bands();
  for (const row of rows) {
    const price = number(row.price);
    if (!(price > 0)) continue;
    addBand(margin, price, number(row.purchasePrice), number(row.vat) / 100 || 0.23);
  }

  const fmt = b => 'priced=' + b.matched + ', missing cost=' + b.missingCost
    + ', below break-even=' + b.loss + ', below 5% margin=' + b.below5
    + ', below 10% margin=' + b.below10 + ', at/above 10%=' + b.atLeast10;
  console.log('K-B margin diagnostic after currency normalization and all price floors (aggregate only):');
  console.log('  Current FX rate: 1 EUR = ' + (1 / fxRate).toFixed(3) + ' CZK');
  console.log('  Confirmed CZK->EUR sale-price conversions: ' + converted.length);
  console.log('  Purchase cost evidence vs prior feed (converted SKUs): matched=' + costComparisons
    + ', stable without conversion=' + costStableAsIs + ', stable after CZK->EUR=' + costStableAfterFx);
  console.log('  Final feed prices vs EUR purchase costs: ' + fmt(margin));
}
main().catch(error => { console.error('K-B margin diagnostic failed:', error.message); process.exit(1); });

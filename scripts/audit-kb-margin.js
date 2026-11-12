'use strict';

// Read-only diagnostic for the K-B currency investigation.
// It reports aggregate margin bands only; never prints per-product or purchase-price values.
const fs = require('node:fs');

const MARGIN_DATA_PATH = process.env.KB_MARGIN_DATA || require('node:path').join(process.env.RUNNER_TEMP || '/tmp', 'kb-margin-data.json');
const REPORT_PATH = process.env.KB_PRICE_ANOMALY_REPORT || 'reports/cenove-anomalie-kb.md';

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
  const marginRows = JSON.parse(fs.readFileSync(MARGIN_DATA_PATH, 'utf8'));
  const report = fs.readFileSync(REPORT_PATH, 'utf8');
  const products = new Map(marginRows.map(row => [row.code, {
    cost: number(row.purchasePrice),
    vat: number(row.vat) || 23,\n    previousCost: number(row.previousPurchasePrice),
  }]));

  const response = await fetch('https://api.frankfurter.app/latest?from=CZK&to=EUR');
  if (!response.ok) throw new Error('Frankfurter FX lookup failed with HTTP ' + response.status);
  const data = await response.json();
  const rate = Number(data && data.rates && data.rates.EUR);
  if (!(rate > 0)) throw new Error('Frankfurter did not return a CZK->EUR rate.');
  const czkPerEur = 1 / rate;

  const candidates = [];
  for (const line of report.split(/\r?\n/)) {
    if (!line.startsWith('|') || line.includes('---') || line.includes('Kód')) continue;
    const columns = line.slice(1, line.lastIndexOf('|')).split('|').map(value => value.trim());
    if (columns.length < 7) continue;
    const code = columns[0];
    const reason = columns[3];
    const oldPrice = number(columns[4]);
    const newPrice = number(columns[5]);
    if (!code || !(newPrice > 0) || !reason.includes('zmena ceny')) continue;
    const product = products.get(code);
    if (!product) continue;
    const fxAdjustedRatio = oldPrice > 0 ? (newPrice * rate) / oldPrice : 0;
    // Restrict the likely-CZK group to records whose converted price is close to the last accepted EUR price.
    if (fxAdjustedRatio >= 0.75 && fxAdjustedRatio <= 1.25) candidates.push({ product, newPrice });
  }

  if (candidates.length === 0) throw new Error('No likely-CZK K-B anomaly rows matched the generated feed.');
  let costComparisons = 0;
  let costStableAsIs = 0;
  let costStableAfterFx = 0;
  for (const { product } of candidates) {
    if (!(product.cost > 0) || !(product.previousCost > 0)) continue;
    costComparisons++;
    const rawRatio = product.cost / product.previousCost;
    const fxRatio = product.cost * rate / product.previousCost;
    if (rawRatio >= 0.75 && rawRatio <= 1.25) costStableAsIs++;
    if (fxRatio >= 0.75 && fxRatio <= 1.25) costStableAfterFx++;
  }

  const costEur = bands();
  const costCzk = bands();
  for (const { product, newPrice } of candidates) {
    const vatRate = product.vat / 100;
    // Scenario 1: purchase cost nCena is already EUR (as documented); convert only the sale price.
    addBand(costEur, newPrice * rate, product.cost, vatRate);
    // Scenario 2: both nCena and the selected sale-price field are CZK; convert both.
    addBand(costCzk, newPrice * rate, product.cost * rate, vatRate);
  }

  const fmt = b => 'matched=' + b.matched + ', missing cost=' + b.missingCost
    + ', below break-even=' + b.loss + ', below 5% margin floor=' + b.below5
    + ', below 10% target=' + b.below10 + ', at/above 10%=' + b.atLeast10;
  console.log('K-B likely-CZK anomaly margin diagnostic (aggregate only; no product or cost values):');
  console.log('  Current ECB-derived rate: 1 EUR = ' + czkPerEur.toFixed(3) + ' CZK');
  console.log('  Purchase-cost currency evidence vs prior feed: matched=' + costComparisons + ', stable without conversion=' + costStableAsIs + ', stable after CZK->EUR=' + costStableAfterFx);
  console.log('  Cost assumed EUR: ' + fmt(costEur));
  console.log('  Cost assumed CZK: ' + fmt(costCzk));
}
main().catch(error => { console.error('K-B margin diagnostic failed:', error.message); process.exit(1); });

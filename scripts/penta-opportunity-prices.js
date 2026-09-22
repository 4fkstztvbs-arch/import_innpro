'use strict';

const fs = require('fs');
const path = require('path');
const { roundPrice, roundPriceUp } = require('./round-price');
const { POLICY } = require('./heureka-pricing');

const CONFIG_PATH = path.join(__dirname, '..', 'data', 'penta-opportunity-prices.json');

let cache;
function loadPentaOpportunityPrices() {
  if (cache !== undefined) return cache;
  if (!fs.existsSync(CONFIG_PATH)) { cache = {}; return cache; }
  try {
    cache = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
  } catch (e) {
    console.error(`Warning: could not parse ${CONFIG_PATH}, ignoring Penta opportunity prices: ${e.message}`);
    cache = {};
  }
  return cache;
}

// Bootstrap pricing for selected Penta opportunities that are not yet represented reliably
// in the daily Heureka report. The normal Heureka target is applied AFTER this function in
// transform-penta.js, so as soon as a product is present in the daily report the dynamic
// market-based price takes precedence.
//
// Safety rule: never go below the same minimum markup floor used by the global Heureka pricing
// policy (currently 5% over purchase cost incl. VAT). This is a hard floor, not a target.
function applyPentaOpportunityPrice(ean, computedPriceInclVat, purchasePriceExclVat, vatPct) {
  if (!ean || !(Number.isFinite(computedPriceInclVat) && computedPriceInclVat > 0)
      || !(Number.isFinite(purchasePriceExclVat) && purchasePriceExclVat > 0)
      || !Number.isFinite(vatPct) || vatPct < 0) return computedPriceInclVat;

  const entry = loadPentaOpportunityPrices()[String(ean)];
  if (!entry || entry.enabled !== true || !(Number.isFinite(entry.targetPriceInclVat) && entry.targetPriceInclVat > 0)) {
    return computedPriceInclVat;
  }

  const grossCost = purchasePriceExclVat * (1 + vatPct / 100);
  const floor = roundPriceUp(grossCost * (1 + POLICY.minMarkupPct / 100));
  const target = roundPrice(entry.targetPriceInclVat);
  return Math.max(floor, target);
}

module.exports = { applyPentaOpportunityPrice, loadPentaOpportunityPrices, CONFIG_PATH };

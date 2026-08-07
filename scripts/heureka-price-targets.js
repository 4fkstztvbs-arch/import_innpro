// Shared lookup for the daily Heureka-derived competitive price targets, used by every
// transform-*.js to override its own computed PRICE_VAT for products with a known EAN.
//
// data/heureka-reports/price-targets.json is written once a day by process-heureka-report.js
// (keyed by EAN -> { action, targetPriceInclVat, ... }). targetPriceInclVat is the RAW
// competitor-derived price (2nd-cheapest to match, or an undercut of the current cheapest) -
// deliberately NOT pre-clamped to a floor, because the floor must be re-derived here from
// TODAY's purchase price at import time, not whatever the purchase price was when the report
// was generated (a supplier price change since then must still be respected).
//
// If there's no targets file yet (no report processed) or no entry for a given EAN, the
// product's own transform-*.js price is used unchanged - this module never invents a price.
//
// KILL SWITCH: this whole mechanism is built and wired in, but deliberately held INACTIVE until
// someone explicitly turns it on with HEUREKA_PRICE_OVERRIDE=1 (e.g. as a step env var in the
// supplier sync workflows, or a repo-level Actions variable). Until then every call is a no-op
// and returns the price unchanged, regardless of what's in price-targets.json. See
// reports/prehlad-importov.md section 4.4.

const fs = require('fs');
const path = require('path');
const { roundPrice, roundPriceUp } = require('./round-price');

const TARGETS_PATH = path.join(__dirname, '..', 'data', 'heureka-reports', 'price-targets.json');
const DEFAULT_MIN_MARGIN_PCT = 5;
const OVERRIDE_ENABLED = process.env.HEUREKA_PRICE_OVERRIDE === '1';

let cache;
function loadTargets() {
  if (cache !== undefined) return cache;
  if (!fs.existsSync(TARGETS_PATH)) { cache = {}; return cache; }
  try {
    cache = JSON.parse(fs.readFileSync(TARGETS_PATH, 'utf-8'));
  } catch (e) {
    console.error(`Warning: could not parse ${TARGETS_PATH}, ignoring Heureka price targets: ${e.message}`);
    cache = {};
  }
  return cache;
}

// computedPriceInclVat: the price this transform script would otherwise send.
// purchasePriceExclVat: this product's OWN current purchase price, excl. VAT.
// vatPct: VAT rate used for the sell price (e.g. 23).
// minMarginPct: safety-floor markup over purchase price, default 5% (see reports/prehlad-importov.md 4.3).
// Returns computedPriceInclVat unchanged if there's no target for this EAN or no purchase price
// to safely derive a floor from.
//
// The override only ever moves price in the direction the report intended (up for ZVÝŠIŤ, down
// for ZNÍŽIŤ) and never past the target - it must NOT blindly clamp to the target regardless of
// today's computed price, because that price can have moved since the report was generated (a
// purchase-price change shifts the formula price and therefore the floor). Concretely:
//   ZVÝŠIŤ: never go below what today's own formula already computed (only raises).
//   ZNÍŽIŤ: never go above what today's own formula already computed (only lowers).
// Both directions still respect today's floor.
function applyHeurekaPriceTarget(ean, computedPriceInclVat, purchasePriceExclVat, vatPct, minMarginPct = DEFAULT_MIN_MARGIN_PCT) {
  if (!OVERRIDE_ENABLED) return computedPriceInclVat;
  if (!ean || !purchasePriceExclVat) return computedPriceInclVat;
  const target = loadTargets()[ean];
  if (!target || !Number.isFinite(target.targetPriceInclVat)) return computedPriceInclVat;
  const floor = roundPriceUp(purchasePriceExclVat * (1 + minMarginPct / 100) * (1 + vatPct / 100));
  if (target.action === 'ZVÝŠIŤ') {
    return roundPrice(Math.max(computedPriceInclVat, floor, target.targetPriceInclVat));
  }
  if (target.action === 'ZNÍŽIŤ') {
    return roundPrice(Math.max(floor, Math.min(computedPriceInclVat, target.targetPriceInclVat)));
  }
  return computedPriceInclVat;
}

module.exports = { applyHeurekaPriceTarget, loadTargets, TARGETS_PATH, OVERRIDE_ENABLED };

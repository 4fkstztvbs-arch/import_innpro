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
// Business rule: minimum margin is the MIN_MARGIN_PCT floor, full stop. Above that, being
// competitive (ideally cheapest) matters more than squeezing extra margin.
//   ZVÝŠIŤ (we're currently cheapest): the target price is the one that keeps us #1 - just under
//     the 2nd-cheapest competitor - so we use it directly, clamped only by the floor. We do NOT
//     blend in computedPriceInclVat here: a supplier's own "recommended price" field (K-B's
//     nCenaInternetSK/nDoporucenaCena, used verbatim as computedPriceInclVat when present) can be
//     stale or wrong and spike far above what's competitive - e.g. Gorenje NRK6192AXL4: target
//     399€ (keeps position #1), but K-B's own field said 559€, a real incident, not hypothetical.
//     Trusting that number over the Heureka-derived target would both overprice the product AND
//     lose position #1, the opposite of the point of this whole mechanism.
//   ZNÍŽIŤ (we're not cheapest): undercut toward the target, but never below the floor - if
//     reaching the target would break the floor, land on the floor instead and accept not being
//     #1 rather than sell under margin.
function applyHeurekaPriceTarget(ean, computedPriceInclVat, purchasePriceExclVat, vatPct, minMarginPct = DEFAULT_MIN_MARGIN_PCT) {
  if (!OVERRIDE_ENABLED) return computedPriceInclVat;
  if (!ean || !purchasePriceExclVat) return computedPriceInclVat;
  const target = loadTargets()[ean];
  if (!target || !Number.isFinite(target.targetPriceInclVat)) return computedPriceInclVat;
  const floor = roundPriceUp(purchasePriceExclVat * (1 + minMarginPct / 100) * (1 + vatPct / 100));
  if (target.action === 'ZVÝŠIŤ') {
    return roundPrice(Math.max(floor, target.targetPriceInclVat));
  }
  if (target.action === 'ZNÍŽIŤ') {
    return roundPrice(Math.max(floor, Math.min(computedPriceInclVat, target.targetPriceInclVat)));
  }
  return computedPriceInclVat;
}

// True when the last processed Heureka report found that, even priced at our margin floor, this
// EAN still doesn't undercut the cheapest competitor - we cannot win on price here. Independent
// of the OVERRIDE_ENABLED kill switch (that one gates whether we let live prices move; this is
// about feed *visibility*, a separate decision the user made explicitly).
function cannotCompeteOnPrice(ean) {
  if (!ean) return false;
  const target = loadTargets()[ean];
  return !!(target && target.cantCompete);
}

module.exports = { applyHeurekaPriceTarget, cannotCompeteOnPrice, loadTargets, TARGETS_PATH, OVERRIDE_ENABLED };

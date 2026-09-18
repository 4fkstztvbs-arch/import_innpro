// Shared lookup for the daily Heureka-derived competitive price targets, used by every
// transform-*.js to override its own computed PRICE_VAT for products with a known EAN.
//
// Targets retain market observations and a stable reference price, including products
// already at their target. Recompute the 5% minimum markup from the current purchase
// price on every import. Single-offer INNPRO products use the standard 15% markup.
// Set HEUREKA_PRICE_OVERRIDE=1 to enable price overrides.

const fs = require('fs');
const path = require('path');
const { roundPrice, roundPriceUp } = require('./round-price');
const { POLICY, priceDecision } = require('./heureka-pricing');

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
function resolveTargetPrice(target, computedPriceInclVat, purchasePriceExclVat, vatPct, minMarginPct) {
  if (!target || !(Number.isFinite(purchasePriceExclVat) && purchasePriceExclVat > 0)
      || !Number.isFinite(vatPct) || vatPct < 0) return computedPriceInclVat;
  if (target.pricingVersion === POLICY.version) {
    const policy = { ...target.policy, ...(minMarginPct === undefined ? {} : { minMarkupPct: minMarginPct }) };
    if (target.mode === 'supplier') {
      // Other transforms already use their supplier's recommended/base price.
      // INNPRO explicitly keeps its 15% markup when it is the only seller.
      if (policy.soleOfferMarkupBySupplier?.[target.source] === undefined) return computedPriceInclVat;
      return priceDecision(computedPriceInclVat, purchasePriceExclVat, vatPct,
        { valid: true, sellerCount: 1, cheapest: null, prices: [] }, policy, target.source).price;
    }
    if (target.mode !== 'market' || !(Number.isFinite(target.referencePriceInclVat) && target.referencePriceInclVat > 0) || !(target.heurekaNajnizsia > 0)
        || !Array.isArray(target.competitorPrices) || target.competitorPrices.some((p) => !Number.isFinite(p) || p <= 0)) return computedPriceInclVat;
    return priceDecision(target.referencePriceInclVat, purchasePriceExclVat, vatPct, {
      valid: true, sellerCount: target.sellerCount, cheapest: target.heurekaNajnizsia,
      prices: target.competitorPrices, complete: target.completeRanking,
    }, policy, target.source).price;
  }
  // Compatibility for the previous targets during the first migration run.
  if (!Number.isFinite(target.targetPriceInclVat)) return computedPriceInclVat;
  const floor = roundPriceUp(purchasePriceExclVat * (1 + (minMarginPct ?? DEFAULT_MIN_MARGIN_PCT) / 100) * (1 + vatPct / 100));
  if (target.action === 'ZVÝŠIŤ') return roundPrice(Math.max(floor, target.targetPriceInclVat));
  if (target.action === 'ZNÍŽIŤ') return roundPrice(Math.max(floor, Math.min(computedPriceInclVat, target.targetPriceInclVat)));
  return computedPriceInclVat;
}

function applyHeurekaPriceTarget(ean, computedPriceInclVat, purchasePriceExclVat, vatPct, minMarginPct) {
  if (!OVERRIDE_ENABLED) return computedPriceInclVat;
  if (!ean || !purchasePriceExclVat) return computedPriceInclVat;
  const target = loadTargets()[ean];
  return resolveTargetPrice(target, computedPriceInclVat, purchasePriceExclVat, vatPct, minMarginPct);
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

module.exports = { applyHeurekaPriceTarget, resolveTargetPrice, cannotCompeteOnPrice, loadTargets, TARGETS_PATH, OVERRIDE_ENABLED };

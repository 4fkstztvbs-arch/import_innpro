'use strict';

const { roundPrice, roundPriceDown, roundPriceUp } = require('./round-price');
const POLICY = Object.freeze(require('./heureka-pricing-policy.json'));

function number(value) {
  if (value === null || value === undefined || String(value).trim() === '') return null;
  const n = Number(String(value).trim().replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

function validatePolicy(policy) {
  if (!Number.isInteger(policy.version) || policy.version < 2
      || !Number.isFinite(policy.minMarkupPct) || policy.minMarkupPct < 0
      || (policy.maxMarkupPct !== null && (!Number.isFinite(policy.maxMarkupPct) || policy.maxMarkupPct < policy.minMarkupPct))
      || !Number.isFinite(policy.competitorDiscountPct) || policy.competitorDiscountPct < 0 || policy.competitorDiscountPct >= 100) {
    throw new Error('Invalid Heureka pricing policy');
  }
  for (const markup of Object.values(policy.soleOfferMarkupBySupplier || {})) {
    if (!Number.isFinite(markup) || markup < policy.minMarkupPct) throw new Error('Invalid sole-offer markup');
  }
  return policy;
}
validatePolicy(POLICY);

// PriceMinN and PriceMaxN describe ranks, not distinct shops. Coalesce the
// same rank, but keep equal prices at DIFFERENT ranks (real competing ties).
function readCompetition(row) {
  const sellerCount = number(row['E-shopov predávajúcich produkt']);
  const ownPrice = number(row['Vaša cena']);
  const invalid = (reason) => ({ valid: false, reason, sellerCount, prices: [], cheapest: null });
  if (!Number.isInteger(sellerCount) || sellerCount < 1 || !(ownPrice > 0)) return invalid('chýba počet predajcov alebo naša cena v reporte');
  const ranks = new Map();
  let conflict = false;
  function add(rank, field) {
    const price = number(row[field]);
    if (rank < 1 || rank > sellerCount || price === null) return;
    if (price <= 0 || (ranks.has(rank) && Math.abs(ranks.get(rank) - price) > 0.005)) { conflict = true; return; }
    ranks.set(rank, price);
  }
  add(1, 'Najnižšia cena');
  add(sellerCount, 'Najvyššia cena');
  for (let n = 2; n <= 10; n++) {
    add(n, `PriceMin${n}`);
    add(sellerCount - n + 1, `PriceMax${n}`);
  }
  const offers = [...ranks].sort((a, b) => a[0] - b[0]);
  if (conflict || !offers.length || offers.some((o, i) => i > 0 && o[1] < offers[i - 1][1] - 0.005)) return invalid('nekonzistentné ceny na pozíciách reportu');
  const ownRank = offers.find(([rank, price]) => rank === number(row['Vaša pozícia podľa ceny']) && Math.abs(price - ownPrice) < 0.005)
    || offers.find(([, price]) => Math.abs(price - ownPrice) < 0.005);
  const complete = ranks.size === sellerCount;
  // In large markets the export omits middle ranks. Our own offer can be
  // absent only inside that missing middle, never below the known minimum.
  if (!ownRank && (complete || ownPrice < offers[0][1] || ownPrice > offers[offers.length - 1][1])) return invalid('naša ponuka sa nezhoduje s cenovým rebríčkom');
  const competitors = offers.filter(([rank]) => !ownRank || rank !== ownRank[0]);
  if (sellerCount > 1 && (!competitors.length || competitors[0][0] > (ownRank?.[0] === 1 ? 2 : 1))) return invalid('chýba najlacnejšia konkurenčná ponuka');
  return { valid: true, reason: '', sellerCount, ownPrice, complete, prices: competitors.map(([, p]) => p), cheapest: competitors[0]?.[1] ?? null };
}

// Use the feed price at report processing time as a stable reference. Supplier
// transforms can supply an unrelated base price; it must not pull us back below
// the established market target. Recompute economic bounds from TODAY's cost.
function priceDecision(referencePrice, purchasePrice, vatPct, competition, policy = POLICY, supplier = null) {
  validatePolicy(policy);
  const result = { price: referencePrice, target: null, floor: null, cap: null, action: 'BEZ ZMENY', cantCompete: false, reason: '' };
  if (!(Number.isFinite(referencePrice) && referencePrice > 0)) return { ...result, reason: 'neplatná predajná cena' };
  if (!(Number.isFinite(purchasePrice) && purchasePrice > 0 && Number.isFinite(vatPct) && vatPct >= 0)) return { ...result, reason: 'chýba platná nákupná cena alebo DPH' };
  if (!competition.valid) return { ...result, reason: competition.reason };
  const grossCost = purchasePrice * (1 + vatPct / 100);
  if (!(competition.cheapest > 0)) {
    const markup = policy.soleOfferMarkupBySupplier?.[supplier];
    result.price = markup === undefined ? referencePrice : Math.max(roundPrice(grossCost * (1 + markup / 100)), roundPriceUp(grossCost * (1 + policy.minMarkupPct / 100)));
    result.reason = markup === undefined ? 'jediná ponuka; ponechaná cena dodávateľského importu' : `jediná ponuka; základná prirážka dodávateľa ${markup} %`;
    result.action = result.price > referencePrice ? 'ZVÝŠIŤ' : result.price < referencePrice ? 'ZNÍŽIŤ' : 'BEZ ZMENY';
    return result;
  }
  result.floor = roundPriceUp(grossCost * (1 + policy.minMarkupPct / 100));
  result.cap = policy.maxMarkupPct === null ? null : roundPriceDown(grossCost * (1 + policy.maxMarkupPct / 100));
  const market = roundPriceDown(Math.min(competition.cheapest - 0.01, competition.cheapest * (1 - policy.competitorDiscountPct / 100)));
  if (!(market > 0)) return { ...result, reason: 'konkurenčná cena je príliš nízka na platné zaokrúhlenie' };
  result.target = market;
  result.price = Math.max(result.floor, Math.min(market, result.cap ?? Infinity));
  result.reason = 'cena podľa najlacnejšieho iného predajcu';
  if (result.cap !== null && result.cap < market) result.reason += '; obmedzené maximálnou prirážkou';
  if (result.floor > Math.min(market, result.cap ?? Infinity)) result.reason += '; obmedzené min. prirážkou (floor)';
  // Do not discount an existing market leader just to introduce a buffer or
  // enforce a cap on a margin it already earns. The cap limits new increases.
  if (result.price < referencePrice && referencePrice < competition.cheapest && referencePrice >= result.floor) {
    result.price = referencePrice;
    result.reason = 'už sme najlacnejší; ďalšia zľava by iba znížila maržu';
  }
  // Preserve the established rule against discounts that overtake no observed
  // competing offer. Sparse middle ranks never justify inventing a position.
  if (result.price < referencePrice && result.price >= competition.cheapest
      && !competition.prices.some((p) => p >= result.price && p < referencePrice)) {
    result.price = referencePrice;
    result.reason = 'zníženie po floor by nepreskočilo žiadnu známu konkurenčnú ponuku';
  }
  result.cantCompete = result.price >= competition.cheapest;
  result.action = result.price > referencePrice ? 'ZVÝŠIŤ' : result.price < referencePrice ? 'ZNÍŽIŤ' : 'BEZ ZMENY';
  return result;
}

module.exports = { POLICY, validatePolicy, readCompetition, priceDecision };

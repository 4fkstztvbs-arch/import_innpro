'use strict';

function finite(value, fallback = null) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function round(value, digits = 2) {
  if (!Number.isFinite(value)) return null;
  const p = 10 ** digits;
  return Math.round((value + Number.EPSILON) * p) / p;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function decideProduct(input, policy) {
  const p = policy || {};
  const ev = p.evidence || {};
  const eco = p.economics || {};

  const performance = input.performance || {};
  const economics = input.economics || {};
  const operational = input.operational || {};

  const paidVisits = finite(performance.paidVisits, 0);
  const paidOrders = finite(performance.paidOrders, 0);
  const paidCost = finite(performance.paidCostExVat, 0);
  const paidDays = finite(performance.distinctPaidDays, 0);
  const currentAvgCpc = paidVisits > 0 ? paidCost / paidVisits : 0;

  const grossMarginPerSale = finite(economics.grossMarginPerSale, null);
  const currentPriceInclVat = finite(economics.priceInclVat, null);
  const purchasePriceExVat = finite(economics.purchasePriceExVat, null);
  const ambiguousEconomics = !!economics.ambiguous;

  const reasons = [];
  const metrics = {
    paidVisits,
    paidOrders,
    paidCostExVat: round(paidCost),
    distinctPaidDays: paidDays,
    currentAvgCpc: round(currentAvgCpc, 4),
    grossMarginPerSale: round(grossMarginPerSale),
  };

  if (ambiguousEconomics) reasons.push('AMBIGUOUS_PRODUCT_ECONOMICS');
  if (!(currentPriceInclVat > 0)) reasons.push('MISSING_CURRENT_PRICE');
  if (!(purchasePriceExVat > 0)) reasons.push('MISSING_PURCHASE_PRICE');
  if (!(grossMarginPerSale > finite(eco.minGrossMarginPerSale, 0))) reasons.push('MARGIN_NOT_USABLE');

  if (reasons.length) {
    return {
      state: 'WATCH',
      action: 'NO_CHANGE',
      reasons,
      recommendedCpc: null,
      safeCpc: null,
      targetCpa: null,
      metrics,
      confidence: 'LOW',
    };
  }

  const maxCostShare = finite(eco.maxCostShareOfGrossMarginForBid, 0.3);
  const targetCpa = grossMarginPerSale * maxCostShare;
  const paidCvr = paidVisits > 0 ? paidOrders / paidVisits : 0;
  const safeCpc = paidCvr * targetCpa;
  const grossMarginFromPaidOrders = paidOrders * grossMarginPerSale;
  const costShareOfMargin = grossMarginFromPaidOrders > 0 ? paidCost / grossMarginFromPaidOrders : null;
  metrics.paidConversionRate = round(paidCvr, 5);
  metrics.targetCpa = round(targetCpa);
  metrics.safeCpc = round(safeCpc, 4);
  metrics.costShareOfGrossMargin = costShareOfMargin === null ? null : round(costShareOfMargin, 4);
  metrics.contributionAfterHeurekaCost = round(grossMarginFromPaidOrders - paidCost);

  const operationalHeurekaOrders =
    finite(operational.heurekaReferredSingleProductOrders, 0) +
    finite(operational.heurekaReferredMultiProductContains, 0);
  const attributionConflict = paidOrders === 0 && operationalHeurekaOrders > 0;

  const minPaidVisitsBid = finite(ev.minPaidVisitsForBid, 15);
  const minPaidOrdersBid = finite(ev.minPaidOrdersForBid, 2);
  const minPaidDaysBid = finite(ev.minDistinctPaidDaysForBid, 4);
  const minPaidVisitsExclude = finite(ev.minPaidVisitsForExclude, 40);
  const minPaidDaysExclude = finite(ev.minDistinctPaidDaysForExclude, 7);
  const exclusionSpendMultiplier = finite(ev.excludeSpendToTargetCpaMultiplier, 2.0);

  if (input.existingExcluded) {
    const postExclusionOrders = finite(performance.postExistingExclusionOrders, 0);
    if (postExclusionOrders > 0) {
      reasons.push('POST_EXCLUSION_ORDER_SIGNAL_REQUIRES_REENTRY_REVIEW');
      return {
        state: 'WATCH',
        action: 'REVIEW_REENTRY',
        reasons,
        recommendedCpc: null,
        safeCpc: round(safeCpc, 4),
        targetCpa: round(targetCpa),
        metrics,
        confidence: 'LOW',
      };
    }
    reasons.push('EXISTING_EXCLUSION_WITHOUT_REENTRY_EVIDENCE');
    return {
      state: 'EXCLUDE',
      action: 'KEEP_EXCLUDED',
      reasons,
      recommendedCpc: null,
      safeCpc: round(safeCpc, 4),
      targetCpa: round(targetCpa),
      metrics,
      confidence: 'MEDIUM',
    };
  }

  if (
    paidOrders >= minPaidOrdersBid &&
    paidVisits >= minPaidVisitsBid &&
    paidDays >= minPaidDaysBid &&
    costShareOfMargin !== null &&
    costShareOfMargin <= maxCostShare
  ) {
    const maxRecommendedCpc = finite(eco.maxRecommendedCpc, 2.0);
    const minRecommendedCpc = finite(eco.minRecommendedCpc, 0.01);
    const maxStepPct = finite(eco.maxCpcStepPct, 20) / 100;
    let recommended = safeCpc;
    if (currentAvgCpc > 0 && maxStepPct >= 0) {
      recommended = clamp(
        recommended,
        currentAvgCpc * (1 - maxStepPct),
        currentAvgCpc * (1 + maxStepPct)
      );
    }
    recommended = clamp(recommended, minRecommendedCpc, maxRecommendedCpc);
    reasons.push('PROFITABLE_PAID_CONVERSION_EVIDENCE');
    return {
      state: 'BID',
      action: 'SET_CPC',
      reasons,
      recommendedCpc: round(recommended, 2),
      safeCpc: round(safeCpc, 4),
      targetCpa: round(targetCpa),
      metrics,
      confidence: paidOrders >= Math.max(4, minPaidOrdersBid * 2) ? 'HIGH' : 'MEDIUM',
    };
  }

  const exclusionSpendThreshold = targetCpa * exclusionSpendMultiplier;
  metrics.exclusionSpendThreshold = round(exclusionSpendThreshold);

  if (
    paidOrders === 0 &&
    paidVisits >= minPaidVisitsExclude &&
    paidDays >= minPaidDaysExclude &&
    paidCost >= exclusionSpendThreshold
  ) {
    if (attributionConflict) {
      reasons.push('ATTRIBUTION_CONFLICT_BLOCKS_EXCLUDE');
      return {
        state: 'WATCH',
        action: 'NO_CHANGE',
        reasons,
        recommendedCpc: null,
        safeCpc: round(safeCpc, 4),
        targetCpa: round(targetCpa),
        metrics,
        confidence: 'LOW',
      };
    }
    reasons.push('ZERO_PAID_ORDERS_AFTER_MEANINGFUL_SPEND');
    return {
      state: 'EXCLUDE',
      action: 'EXCLUDE_FROM_HEUREKA',
      reasons,
      recommendedCpc: null,
      safeCpc: round(safeCpc, 4),
      targetCpa: round(targetCpa),
      metrics,
      confidence: 'HIGH',
    };
  }

  if (attributionConflict) reasons.push('ATTRIBUTION_CONFLICT');
  if (paidOrders > 0) reasons.push('HAS_PAID_ORDERS_BUT_NOT_ENOUGH_BID_EVIDENCE');
  else if (paidVisits >= finite(ev.minPaidVisitsForBase, 8)) reasons.push('ENOUGH_TRAFFIC_FOR_BASE_NOT_FOR_EXCLUDE');
  else reasons.push('INSUFFICIENT_EVIDENCE');

  const baseEligible =
    !attributionConflict &&
    (paidOrders > 0 || paidVisits >= finite(ev.minPaidVisitsForBase, 8));

  return {
    state: baseEligible ? 'BASE' : 'WATCH',
    action: baseEligible ? 'REMOVE_PRODUCT_CPC_OVERRIDE' : 'NO_CHANGE',
    reasons,
    recommendedCpc: null,
    safeCpc: round(safeCpc, 4),
    targetCpa: round(targetCpa),
    metrics,
    confidence: baseEligible ? 'MEDIUM' : 'LOW',
  };
}

function reconcileWindows(input, policy) {
  const mw = policy?.multiWindow || {};
  const longDecision = input.longDecision;
  const shortDecision = input.shortDecision;
  const shortPerformance = input.shortPerformance || {};
  const shortOperational = input.shortOperational || {};
  const existingExcluded = !!input.existingExcluded;

  if (!longDecision || !shortDecision) {
    throw new Error('reconcileWindows requires longDecision and shortDecision');
  }

  const shortPaidVisits = finite(shortPerformance.paidVisits, 0);
  const shortPaidOrders = finite(shortPerformance.paidOrders, 0);
  const shortOperationalOrders =
    finite(shortOperational.heurekaReferredSingleProductOrders, 0) +
    finite(shortOperational.heurekaReferredMultiProductContains, 0);
  const shortHasConversion = shortPaidOrders > 0 || shortOperationalOrders > 0;
  const shortConfirmExcludeVisits = finite(mw.minShortPaidVisitsForExcludeConfirmation, 8);

  const result = {
    state: longDecision.state,
    action: longDecision.action,
    reasons: [...(longDecision.reasons || [])],
    recommendedCpc: longDecision.recommendedCpc,
    safeCpc: longDecision.safeCpc,
    targetCpa: longDecision.targetCpa,
    metrics: longDecision.metrics,
    confidence: longDecision.confidence,
    windows: {
      long: {
        state: longDecision.state,
        action: longDecision.action,
        recommendedCpc: longDecision.recommendedCpc,
        reasons: longDecision.reasons || [],
      },
      short: {
        state: shortDecision.state,
        action: shortDecision.action,
        recommendedCpc: shortDecision.recommendedCpc,
        reasons: shortDecision.reasons || [],
      },
    },
  };

  if (existingExcluded) {
    if (longDecision.state === 'WATCH' || shortDecision.state === 'WATCH') {
      return {
        ...result,
        state: 'WATCH',
        action: 'REVIEW_REENTRY',
        recommendedCpc: null,
        confidence: 'LOW',
        reasons: [...result.reasons, 'EXISTING_EXCLUSION_REQUIRES_REENTRY_REVIEW'],
      };
    }
    return {
      ...result,
      state: 'EXCLUDE',
      action: 'KEEP_EXCLUDED',
      recommendedCpc: null,
      confidence: 'MEDIUM',
      reasons: [...result.reasons, 'EXISTING_EXCLUSION_FAIL_CLOSED'],
    };
  }

  if (longDecision.state === 'BID') {
    if (mw.requireBidAgreement !== false && shortDecision.state !== 'BID') {
      const state = shortHasConversion ? 'BASE' : 'WATCH';
      return {
        ...result,
        state,
        action: state === 'BASE' ? 'REMOVE_PRODUCT_CPC_OVERRIDE' : 'NO_CHANGE',
        recommendedCpc: null,
        confidence: shortHasConversion ? 'MEDIUM' : 'LOW',
        reasons: [...result.reasons, 'BID_BLOCKED_BY_SHORT_WINDOW'],
      };
    }

    if (shortDecision.state === 'BID') {
      const candidates = [longDecision.recommendedCpc, shortDecision.recommendedCpc]
        .filter(Number.isFinite);
      const recommendedCpc = candidates.length ? Math.min(...candidates) : null;
      return {
        ...result,
        state: 'BID',
        action: 'SET_CPC',
        recommendedCpc: round(recommendedCpc, 2),
        confidence:
          longDecision.confidence === 'HIGH' && shortDecision.confidence === 'HIGH'
            ? 'HIGH'
            : 'MEDIUM',
        reasons: [...result.reasons, 'LONG_AND_SHORT_WINDOWS_AGREE'],
      };
    }
  }

  if (longDecision.state === 'EXCLUDE') {
    if (shortHasConversion) {
      return {
        ...result,
        state: 'WATCH',
        action: 'NO_CHANGE',
        recommendedCpc: null,
        confidence: 'LOW',
        reasons: [...result.reasons, 'RECENT_CONVERSION_BLOCKS_EXCLUDE'],
      };
    }

    if (shortPaidVisits < shortConfirmExcludeVisits) {
      return {
        ...result,
        state: 'WATCH',
        action: 'NO_CHANGE',
        recommendedCpc: null,
        confidence: 'LOW',
        reasons: [...result.reasons, 'EXCLUDE_NOT_CONFIRMED_BY_SHORT_WINDOW'],
      };
    }

    return {
      ...result,
      state: 'EXCLUDE',
      action: 'EXCLUDE_FROM_HEUREKA',
      recommendedCpc: null,
      confidence: 'HIGH',
      reasons: [...result.reasons, 'LONG_EXCLUDE_CONFIRMED_BY_SHORT_WINDOW'],
    };
  }

  if (shortDecision.state === 'EXCLUDE' && longDecision.state !== 'EXCLUDE') {
    return {
      ...result,
      state: 'WATCH',
      action: 'NO_CHANGE',
      recommendedCpc: null,
      confidence: 'LOW',
      reasons: [...result.reasons, 'SHORT_TERM_DETERIORATION_NEEDS_LONG_CONFIRMATION'],
    };
  }

  if (longDecision.state === 'BASE' && shortDecision.state === 'BID') {
    return {
      ...result,
      state: 'BASE',
      action: 'REMOVE_PRODUCT_CPC_OVERRIDE',
      recommendedCpc: null,
      confidence: 'MEDIUM',
      reasons: [...result.reasons, 'SHORT_UPSIDE_NOT_YET_CONFIRMED_LONG_TERM'],
    };
  }

  return result;
}

module.exports = { finite, round, clamp, decideProduct, reconcileWindows };

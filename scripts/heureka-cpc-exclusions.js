// Shared lookup for per-EAN exclusion from the extended Heureka CPC feed (HEUREKA_HIDDEN), based
// on actual click/order performance data from Heureka's own per-product CPC report (Marketing ->
// Heureka -> "Náklady na PPC" / per-produkt export - visits, costs, orders, revenue per day).
//
// This is a THIRD source of HEUREKA_HIDDEN, alongside the category/price-based rules
// (scripts/heureka-hidden-categories.json, see isHeurekaHidden()) and the "can't win on price"
// rule (cannotCompeteOnPrice() in heureka-price-targets.js). Where those are category/price
// heuristics, this one is empirical: a product that gets repeat paid clicks over weeks without a
// single order is a demonstrated bad spend, independent of its category or price.
//
// data/heureka-reports/cpc-hidden-products.json is built manually from a downloaded Heureka CPC
// report (no API - same manual-download situation as the sortiment/unmatched reports, see
// data/heureka-reports/README.md). Criterion used for the 2026-08-22 batch: clicked (visits > 0)
// on >= 3 distinct days within a ~7-week window, 0 orders across the whole window - see
// reports/prehlad-importov.md section 4.6 for the full analysis and reasoning.
//
// EAN not in this file = no exclusion, exactly like the other two mechanisms - this module never
// invents an exclusion.

const fs = require('fs');
const path = require('path');

const EXCLUSIONS_PATH = path.join(__dirname, '..', 'data', 'heureka-reports', 'cpc-hidden-products.json');

let cache;
function loadExclusions() {
  if (cache !== undefined) return cache;
  if (!fs.existsSync(EXCLUSIONS_PATH)) { cache = {}; return cache; }
  try {
    cache = JSON.parse(fs.readFileSync(EXCLUSIONS_PATH, 'utf-8'));
  } catch (e) {
    console.error(`Warning: could not parse ${EXCLUSIONS_PATH}, ignoring CPC exclusions: ${e.message}`);
    cache = {};
  }
  return cache;
}

function isCpcNonConverter(ean) {
  if (!ean) return false;
  return !!loadExclusions()[ean];
}

module.exports = { isCpcNonConverter, loadExclusions, EXCLUSIONS_PATH };

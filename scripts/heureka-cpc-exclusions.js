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
// Exclusions expire after 8 weeks (see EXPIRY_DAYS).
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

// An exclusion is a snapshot of past performance, so it expires: after EXPIRY_DAYS (8 weeks) from
// `generatedAt` the product gets clicks again and can be re-evaluated from a fresh CPC report.
// An entry may override this with its own `expiresAt` (ISO date). Entries without a parsable
// date never expire (conservative: keep the exclusion).
const EXPIRY_DAYS = 56;

function isExpired(entry, now) {
  if (!entry) return false;
  const explicit = entry.expiresAt && Date.parse(entry.expiresAt);
  if (explicit) return now >= explicit;
  const generated = entry.generatedAt && Date.parse(entry.generatedAt);
  if (!generated) return false;
  return now - generated >= EXPIRY_DAYS * 86400000;
}

function isCpcNonConverter(ean, now = Date.now()) {
  if (!ean) return false;
  const all = loadExclusions();
  // Supplier feeds sometimes drop the leading zero(s) of an EAN-13 (finalize-feed pads it back later,
  // see normalize-truncated-ean.js), while the exclusion list is keyed by the padded EAN.
  const key = String(ean).trim();
  const entry = all[key] || (/^\d{1,12}$/.test(key) ? all[key.padStart(13, '0')] : undefined);
  return !!entry && !isExpired(entry, now);
}

module.exports = { isCpcNonConverter, isExpired, loadExclusions, EXCLUSIONS_PATH, EXPIRY_DAYS };

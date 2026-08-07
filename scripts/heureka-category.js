// Shared lookup for the Heureka.sk comparison-shopping category ID (HEUREKA_CATEGORY_ID),
// keyed by our own resolved Shoptet category path (the same string written to <CATEGORIES>).
//
// scripts/heureka-mapping.json only covers the categories we're confident enough about to
// publish (~56% of the catalog as of 2026-08-07 — see reports/heureka-mapovanie-navrh-*.xlsx
// for the full review, including the categories intentionally left out pending better matching).
// A category not in the map simply gets no HEUREKA_CATEGORY_ID; Shoptet/Heureka fall back to
// their own category-pairing mechanism for those products.

const fs = require('fs');
const path = require('path');

const MAPPING_PATH = path.join(__dirname, 'heureka-mapping.json');
const MAPPING = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8'));

function heurekaCategoryIdFor(categoryPath) {
  return MAPPING[categoryPath] || null;
}

module.exports = { heurekaCategoryIdFor };

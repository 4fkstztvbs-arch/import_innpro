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

// HEUREKA_HIDDEN — vylúčenie z rozšíreného Heureka CPC feedu podľa top-level kategórie a/alebo
// nízkej ceny. Oboje sú obchodné rozhodnutia (návrh v reports/heureka-kategorie-marza.md pre
// kategórie; cenový strop pridaný na žiadosť 2026-08-11 — lacné produkty sa na Heureke neoplatia
// propagovať), nie automaticky odvodené — uprav scripts/heureka-hidden-categories.json.
const HIDDEN_PATH = path.join(__dirname, 'heureka-hidden-categories.json');
const HIDDEN_CONFIG = JSON.parse(fs.readFileSync(HIDDEN_PATH, 'utf-8'));
const HIDDEN_TOP_CATEGORIES = new Set((HIDDEN_CONFIG.categories || []).map((c) => c.trim()));
const HIDDEN_PRICE_BELOW = Number.isFinite(HIDDEN_CONFIG.priceBelow) ? HIDDEN_CONFIG.priceBelow : 0;

function isHeurekaHidden(categoryPath, priceInclVat) {
  if (Number.isFinite(priceInclVat) && HIDDEN_PRICE_BELOW > 0 && priceInclVat < HIDDEN_PRICE_BELOW) return true;
  if (!categoryPath) return false;
  const top = categoryPath.split('>')[0].trim();
  return HIDDEN_TOP_CATEGORIES.has(top);
}

module.exports = { heurekaCategoryIdFor, isHeurekaHidden };

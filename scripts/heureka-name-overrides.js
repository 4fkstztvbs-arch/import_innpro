// Shared lookup for per-product NAME_TO_EXPORTS overrides, used by every transform-*.js.
//
// Shoptet's NAME_TO_EXPORTS field ("Alternatívny názov produktu") sends a different name to
// price comparators (#NAME#, #PRODUCT#, #PRODUCTNAME# in feed templates) than what's shown on
// the storefront. We use it to fix Heureka "Nespárované produkty" mismatches, where Heureka
// already knows the exact product (matched by EAN) but rejects it because our sent name doesn't
// look like Heureka's own catalogue name for that EAN.
//
// data/heureka-reports/name-overrides.json is written by process-heureka-unmatched.js (keyed by
// EAN -> { name, ... }), built only from rows where Heureka's suggestion is corroborated by our
// own price falling inside the suggested product's price range - see that script for the
// tolerance rule. A product with no EAN match here keeps its normal transform-*.js name
// unchanged - this module never invents a name.
//
// KILL SWITCH: same pattern as heureka-price-targets.js - inactive until someone explicitly sets
// HEUREKA_NAME_OVERRIDE=1 (e.g. in a supplier sync workflow's env). Until then every call is a
// no-op. See reports/prehlad-importov.md section 4.5.

const fs = require('fs');
const path = require('path');

const OVERRIDES_PATH = path.join(__dirname, '..', 'data', 'heureka-reports', 'name-overrides.json');
const OVERRIDE_ENABLED = process.env.HEUREKA_NAME_OVERRIDE === '1';

let cache;
function loadOverrides() {
  if (cache !== undefined) return cache;
  if (!fs.existsSync(OVERRIDES_PATH)) { cache = {}; return cache; }
  try {
    cache = JSON.parse(fs.readFileSync(OVERRIDES_PATH, 'utf-8'));
  } catch (e) {
    console.error(`Warning: could not parse ${OVERRIDES_PATH}, ignoring Heureka name overrides: ${e.message}`);
    cache = {};
  }
  return cache;
}

function heurekaNameOverrideFor(ean) {
  if (!OVERRIDE_ENABLED) return null;
  if (!ean) return null;
  const entry = loadOverrides()[ean];
  return entry && entry.name ? entry.name : null;
}

module.exports = { heurekaNameOverrideFor, loadOverrides, OVERRIDES_PATH, OVERRIDE_ENABLED };

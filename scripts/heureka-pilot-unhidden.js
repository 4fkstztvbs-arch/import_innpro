// Per-EAN pilot override: forces a product to stay VISIBLE in the extended Heureka CPC feed even
// though it would otherwise be caught by isHeurekaHidden()'s price<10EUR floor (or any of the
// other two HEUREKA_HIDDEN sources - cannotCompeteOnPrice, isCpcNonConverter).
//
// Why this exists: the <10EUR price floor (scripts/heureka-hidden-categories.json) hides ~94% of
// InnPro's sub-10EUR catalog on the reasoning that a single non-converting click costs more than
// the unit's own profit. That reasoning has never actually been tested for cheap InnPro
// accessories specifically - they've been hidden since before Heureka CPC reporting started, so
// there's zero real click/conversion data to confirm or refute it (see
// reports/prehlad-importov.md section 4.6 addendum). data/heureka-reports/heureka-pilot-unhidden.json
// is a small (~96 product), time-boxed pilot: the 5 leaf categories with the highest per-unit
// profit among InnPro's hidden sub-10EUR products, released to actually collect Heureka CPC data.
// Review the `__meta.reviewAfter` date in that file, download a fresh Heureka CPC report, and
// decide whether to keep them visible, extend the pilot, or revert based on real numbers - don't
// leave this running indefinitely on the same untested assumption it's supposed to test.

const fs = require('fs');
const path = require('path');

const PILOT_PATH = path.join(__dirname, '..', 'data', 'heureka-reports', 'heureka-pilot-unhidden.json');

let cache;
function loadPilot() {
  if (cache !== undefined) return cache;
  if (!fs.existsSync(PILOT_PATH)) { cache = {}; return cache; }
  try {
    cache = JSON.parse(fs.readFileSync(PILOT_PATH, 'utf-8'));
  } catch (e) {
    console.error(`Warning: could not parse ${PILOT_PATH}, ignoring pilot overrides: ${e.message}`);
    cache = {};
  }
  return cache;
}

function isPilotUnhidden(ean) {
  if (!ean) return false;
  return !!loadPilot()[ean];
}

module.exports = { isPilotUnhidden, loadPilot, PILOT_PATH };

# PS-20261014-HEUREKA-BASYS-PRICE-POSITION

- DATE: 2026-10-14
- AREA: Heureka-only commercial visibility; correction of PS-20261012-HEUREKA-CONVERSION-RULES.
- APPROVAL: Explicit owner instruction in chat on 2026-10-14: BASYS must not be hidden; offers above EUR 1000 may be hidden by the high-price rule only when the processed Sortiment report shows their resulting price outside first place; preserve exclusions of unproductive paid traffic. This does not authorize advertising-budget changes.
- OBJECTIVE: More profitable orders with fewer wasted paid clicks, not maximum pairing count or minimum spend in isolation.

## Change
1. `forceVisibleSuppliers: ["basys.xml"]` is evaluated before commercial conversion rules. The final conversion-rule step emits explicit `HEUREKA_HIDDEN=0`, including existing BASYS flags from older category/CPC rules. It does not change shop visibility, availability, prices, IDs or safety validators.
2. Replace unconditional `priceAtLeast >= 1000` with `priceAbove > 1000` AND actual post-repricing feed price greater than the cheapest valid competing offer. Ties at the lowest cent price count as shared first place. Exactly EUR 1000 alone is not sufficient.
3. Use valid market observations tied to the same `.last-processed.json` source report. Missing, invalid, sole-seller or mixed-report observations cannot by themselves trigger the price-position rule. Existing pricing and margin floors are untouched.
4. Retain independent existing category, relative-overpricing, missing-cost and historical non-converter exclusions for other suppliers. Keep WiiM, MONACOR margin estimate, explicit converter and pilot exceptions. Do not create new exclusions merely because impressions or a small sample have no purchases.
5. Setting a hidden flag replaces any existing 0 rather than creating contradictory duplicate XML elements.

## Validation and rollout
- Tested module Git blob: `ba2cca2f7f69bdc3071d4f49d19ea27da8e55a55`.
- Local Node v22.16.0: 20/20 focused tests passed; syntax check passed. Tests include BASYS restoration, ties, exact threshold, missing evidence, source-report mismatch, supplier scope, preserved independent exclusions, unchanged protected fields and idempotency.
- Actual supplier-wide dry run and live Heureka processing were not verified in this change record. Do not claim all products have returned based only on code tests.
- Work on branch `fix/heureka-basys-price-position-20261014`; merge through normal pull-request controls, without bypassing reviews or checks. Existing Heureka workflow reacts to changed rule/script on main. Supplier pipelines reevaluate the same rules.
- BASYS existing flags can be cleared by the final rule step. For other suppliers, already hidden flags are deliberately preserved because their original reason is not recorded in XML. Previously price-only hidden offers require a fresh supplier rebuild and downstream import; do not mass-clear independent exclusions.
- This patch does not fix persistence of observations for offers absent from the latest Sortiment report. That broader state-management risk remains an explicitly separate follow-up, not silently replaced with guesses.

## Production validation
- Verify workflow success and that final BASYS XML contains explicit 0 instead of commercial Heureka hidden flags; preserve all codes/EAN/URLs/prices/availability and item counts.
- For other suppliers, compare a fresh feed against the same report: >1000 EUR plus a higher price triggers the price filter; lowest/tied or unknown market does not, while independent exclusions remain effective.
- Verify downstream Shoptet import and subsequent Heureka report before declaring visibility restored.
- Continue evaluating real orders, gross contribution after advertising cost, cost per order and wasted paid clicks. Check conversion quality and observation windows before further exclusions.

## Rollback
Revert this pull request's code/config/tests and regenerate through the existing supplier pipeline. Do not manually restore prices or protected identity fields; they are outside this change. Record actual merge and downstream verification in the PR/history rather than inventing a deployment time here.

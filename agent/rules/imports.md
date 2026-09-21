# Import and localization rules

The import system is business critical. Shoptet may delete products that disappear from a full supplier feed, so unexpected omissions are destructive until proven otherwise.

Before changing product data, identify:
- supplier
- supplier product ID
- SKU/CODE
- EAN
- URL
- source feed
- transformations and post-processing steps
- pricing rules
- category mapping
- stock/availability handling
- downstream exports/imports
- whether absence from the output causes deletion

## Non-negotiable identifiers
Do not change unless explicitly approved:
- URL
- SKU/CODE
- EAN
- supplier ID
- product ID

Never repair identifier mismatches by guessing or substituting a "likely" value.

## Import invariants
For a change intended to modify only one field/class of fields, all unrelated fields must remain unchanged.

For NAME-only localization, validation must prove that:
- SHOPITEM count is unchanged
- product CODE/SKU set is unchanged
- EAN is unchanged
- URL is unchanged
- PRICE_VAT and purchase-price fields are unchanged
- availability/visibility is unchanged
- categories are unchanged
- images, parameters and other product fields are unchanged
- only explicitly approved NAME values changed

The existing before/after localization validator is the model for this pattern. New automated transformations should get an equivalent invariant check before being enabled supplier-wide.

## Deletion and feed-size policy
Unexpected product disappearance is fail-closed.

The generic feed-size ratio check is a last-resort catastrophic safeguard, not permission to remove products below that threshold. The agent must separately inspect and explain removals caused by its change.

Without explicit approval, an agent-authored change must not intentionally cause bulk product deletion. Legitimate supplier delisting must be distinguished from agent-caused regression and documented.

Never use `FEED_SIZE_OVERRIDE` or an equivalent bypass autonomously.

## Pricing and availability isolation
Localization, SEO copy, internal linking or category-content work must not modify:
- PRICE_VAT
- PURCHASE_PRICE/PURCHASE_VAT
- Heureka price targets/visibility
- supplier markup/minimum margin/minimum cost
- availability
- hide/unhide state

Any diff in these fields changes the task classification to APPROVAL REQUIRED.

## Localization
For Czech/English -> Slovak localization:
- preserve all identifiers
- preserve import compatibility
- rules must survive subsequent supplier imports
- do not interfere with pricing, Heureka-based rules, categorization or availability logic
- preserve technical/model tokens, brand names and units unless an approved rule explicitly changes them
- stop on source-name drift or EAN mismatch rather than guessing

## Rollout
Use staged rollout:
100 products -> validate next real import -> 500 -> validate -> 2,000 -> validate -> supplier-wide

Each stage requires:
- before/after diff
- invariant validation
- successful next supplier import
- spot check on the live site
- no unexplained deletions or protected-field changes

Preferred pilot suppliers when appropriate:
- ATOS
- K-B

## URL policy
Product URLs must not be changed without explicit approval.

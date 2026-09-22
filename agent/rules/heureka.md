# Heureka Growth Engine rules

## Role

Heureka is a PRIMARY GROWTH CHANNEL for PremiumStore and currently a leading source of orders.

The objective is not to maximize clicks, bidding position, pairing percentage, or Heureka revenue in isolation. The objective is to maximize sustainable profitable contribution from the Heureka channel while protecting margin, data quality, customer experience and production stability.

Think about Heureka as one connected commercial system:

`PremiumStore product -> feed quality -> pairing -> product card/visibility -> price + availability -> bidding/CPC -> click -> PremiumStore -> operational order/revenue -> margin/contribution -> next decision`

Optimize the whole loop, not one local metric.

## Existing mechanisms are production systems

Before proposing changes, inspect and understand the existing repository mechanisms, including:
- Heureka pricing/report processing
- price targets and margin floors
- category mapping
- unmatched-product processing
- CPC exclusions
- pilot unhide logic
- Heureka visibility/hide rules
- supplier transforms that consume Heureka-derived data

Do not replace, bypass or duplicate an existing mechanism until its purpose, safeguards and production effects are understood.

## Browser access

The owner may provide an authenticated Heureka admin session through the browser in ChatGPT Work.

Authenticated browser access does NOT grant blanket write authority. For the first authenticated audit, follow `../runbooks/heureka-browser.md`.

Default browser mode for Heureka is READ / OBSERVE:
- inspect dashboards and settings
- inspect pairing state and product diagnostics
- inspect bidding/performance views
- download approved reports for analysis
- compare Heureka state with repository, PremiumStore exports and analytics

Never copy or persist passwords, cookies, session tokens, API keys, signed download URLs or other credentials into GitHub, Slack, Drive reports, screenshots or logs.

The following browser actions are APPROVAL REQUIRED until a narrower policy explicitly promotes them:
- changing CPC/bids or budgets
- changing prices or availability
- changing feed/shop configuration
- changing pairing/category settings with production effect
- changing conversion measurement/tracking configuration
- generating, rotating or changing API credentials/scopes
- bulk hide/unhide or other visibility changes

## 1. Pairing Engine

Maintain a clear view of:
- products sent to Heureka
- paired products
- products waiting for pairing
- unmatched products
- products excluded/hidden from paid visibility
- known causes of pairing failure

Diagnose pairing using reliable product identity and feed evidence such as EAN, product name, category, parameters and current Heureka feedback.

Do not optimize for raw 100% pairing coverage. Prioritize VALUE-WEIGHTED PAIRING COVERAGE.

Prioritization should consider:
- Heureka demand/popularity signal
- expected revenue/contribution potential
- product availability
- margin/contribution
- strategic importance
- confidence that the pairing fix is correct
- expected cost/risk of the fix

Never use fuzzy matching or a suggested Heureka product/category as authority for an automatic bulk identity change. EAN/SKU/product identity mistakes can corrupt pricing, pairing and reporting.

Bulk category mapping, identifier changes and material visibility changes remain approval-required.


### Pairing diagnostic order and blocked state

For every unmatched-product backlog or pairing candidate, use this order. Do not jump directly to title rewriting or fuzzy matching.

1. **DATA INTEGRITY**
   - verify that PRODUCTNAME, URL, ITEM_ID/SKU, EAN where available, supplier identity and the actual product refer to the same product
   - if identity fields conflict, classify the item as `BLOCKED / DATA ERROR`
   - do not attempt an automatic pairing, title rewrite, category rewrite or identifier substitution for a blocked item
   - trace the error back to the source/import mechanism and propose a source-level fix
2. **DUPLICATE / VARIANT CHECK**
   - detect identical or near-identical names used by multiple SKU/ITEM_ID values
   - determine whether they are legitimate variants missing a distinguishing attribute, true duplicates, or separate products
   - do not pair several distinct products to one Heureka product card merely because their names are identical
3. **PRODUCT FAMILY PATTERN**
   - cluster unmatched products by brand, model family, series and repeated naming/category pattern
   - when many products from one family fail in the same way, search for the common root cause and one safe reusable rule instead of editing items one by one
   - validate the rule on a small representative sample before expanding it to the family
4. **BUSINESS PRIORITY**
   - after identity is trustworthy, prioritize by expected commercial value: demand/popularity, price/revenue potential, margin/contribution, availability, strategic importance and confidence of a safe fix
   - high price alone is not sufficient for priority
5. **PAIRING CHANGE**
   - simulate or stage the smallest safe change first
   - validate the result after Heureka reprocesses the feed
   - expand only rules that improve correct valuable pairing without introducing identity/category corruption

`BLOCKED / DATA ERROR` is separate from the commercial A-D backlog. A blocked product cannot be promoted into an automatic pairing tier until its identity conflict is resolved.

### Pairing priority tiers

Use value-weighted tiers for products that passed the identity and duplicate/variant checks:

- **Tier A** — high commercial potential, unambiguous product identity and high confidence that a safe pairing/feed fix exists.
- **Tier B** — meaningful commercial potential with clear identity, but lower confidence, weaker evidence or a fix that needs controlled validation.
- **Tier C** — lower-value or long-tail products that are safe to investigate, especially when a reusable family rule can resolve many items together.
- **Tier D** — products with low expected Heureka value, weak demand/evidence, or products where a valid Heureka product card/category may not exist; investigate only after higher-value work unless a family-level fix makes them cheap to resolve.

Do not use the tier label as permission to bypass approval requirements.

### Unmatched-product report as a recurring diagnostic input

Treat the current Heureka unmatched-products export as a recurring diagnostic dataset, not a one-off cleanup list.

Track at minimum:
- newly unmatched products
- products resolved since the previous report
- products still unmatched
- `BLOCKED / DATA ERROR` items
- duplicate/variant conflicts
- product-family clusters and the rule responsible for each attempted fix
- validation status after Heureka reprocessing
- regressions caused by a previously successful rule

Measure progress primarily as **Valuable Pairing Coverage** and correct resolved value, not raw item count. The agent should be able to show whether a rule improved valuable correct pairing and whether it created any false pairing, identity, category or reporting regression.

For every reusable family-level pairing rule, keep a validation trail:
`ROOT CAUSE -> SAMPLE -> PROPOSED RULE -> DRY RUN/DIFF -> HEUREKA REPROCESS -> RESULT -> EXPAND/HOLD/ROLLBACK`

A rule that increases raw pairing while creating wrong product identity is a failure and must be rolled back or blocked.

## 2. Market and Pricing Engine

Use Heureka market data to understand:
- number of competing sellers
- our price position
- competitor price distribution
- demand/popularity where available
- availability
- bidding position/CPC where available
- whether price competition is economically rational

Do not apply the rule "competitor is cheaper -> lower our price".

For each meaningful pricing opportunity evaluate:
- current contribution/margin
- expected demand
- Heureka conversion/performance evidence
- stock/availability
- seller count and market position
- alternative of improving bidding instead of cutting price
- downstream cancellations/returns where relevant

Price and margin changes remain protected under `safety.md`.

A higher product price with efficient bidding may be more profitable than winning the lowest-price position. Evaluate price and bidding jointly when evidence permits.

## 3. Performance / Conversion Measurement

Build a Heureka performance view at product/category/channel level using approved measurement sources.

Useful metrics include:
- visits/clicks
- cost
- attributed orders
- attributed revenue
- conversion rate
- cost per attributed order
- PNO / cost-to-revenue ratio
- ROAS where useful
- revenue per click
- contribution after Heureka cost when reliable margin data is available
- bidded vs non-bidded/free traffic where the source supports it

Heureka attribution is a marketing attribution system, not the operational accounting source of truth.

Always distinguish:
- ACQUISITION PRODUCT: the Heureka product/offer that generated the visit
- PURCHASED PRODUCT: the item actually bought in PremiumStore

Do not assume these are the same. Verify the current Heureka attribution model/window from current documentation or configuration before making attribution-sensitive conclusions.

For authoritative business totals, follow `data-sources.md`: PremiumStore operational orders are the source of truth. Heureka and GA4 are attribution/behavioural measurement layers.

## 4. Bidding Engine

The long-term goal is product-level, economics-aware bidding.

Never optimize bidding solely for:
- highest position
- maximum traffic
- lowest CPC
- highest click-through rate
- attributed revenue without cost/margin context

A bidding decision should consider:
- contribution/margin available on the product or acquisition path
- observed conversion rate and its uncertainty
- current CPC/cost
- position response to CPC
- price competitiveness
- availability/stock
- popularity/demand
- cancellation/return risk when material
- incremental value versus non-bidded/free traffic

Estimate a break-even CPC only from defensible economics and conversion evidence. Apply a safety margin; do not bid at theoretical break-even by default.

Never extrapolate a product-level bid from tiny samples without an explicit exploration policy.

## Bidding autonomy ladder

### Phase 1 — OBSERVE
Default state.
- read Heureka data
- establish baselines
- identify measurement gaps
- make no bidding/CPC writes

### Phase 2 — SHADOW BIDDING
- calculate what CPC/bid changes the agent would recommend
- record proposed action, evidence, expected impact and guardrails
- do not apply changes
- compare recommendations with subsequent outcomes and refine the model

### Phase 3 — APPROVED PILOT
Requires explicit human approval for a named pilot and scope.

A pilot must define:
- eligible products/categories
- control/comparison method
- maximum CPC
- maximum daily and total spend
- maximum CPC step/change rate
- minimum margin/contribution guardrail
- PNO/profitability guardrail
- minimum evidence/sample requirement
- stock/availability requirement
- cooldown/minimum observation window
- anomaly stop
- rollback/reversion method
- start/end/review dates

Only the approved scope may be changed.

### Phase 4 — CONTROLLED AUTONOMY
Not enabled by this document.

It may be enabled later only through a separately reviewed governance change after successful pilots demonstrate safe decision quality.

A future policy must still impose hard budget/CPC/margin/PNO limits, evidence thresholds, change-rate limits, anomaly stops, audit logging and rollback.

## 5. Feed quality

Treat feed quality as part of channel performance.

Monitor issues involving:
- EAN/product identity
- product names
- Heureka category mapping
- required parameters
- images
- availability
- price consistency
- pairing state
- hidden/excluded products

A pairing or feed-quality change is not automatically good because coverage increases. Validate that it maps the correct product and improves valuable channel coverage without corrupting identifiers or categories.

## 6. Experiments and causal discipline

Heureka work should follow `experiments.md` when a meaningful commercial change is being tested.

For bidding/pricing experiments:
- define the hypothesis before launch
- define primary commercial metric and guardrails
- preserve a control/comparison where practical
- avoid simultaneous price + bid + feed changes when that destroys attribution
- account for seasonality, availability and competitor changes
- do not stop early solely because early results look positive
- distinguish observed correlation from demonstrated incremental effect

Preferred outcome metrics are contribution/profitability measures when reliable, supported by orders/revenue and channel-cost metrics.

## 7. Decision record

For a material Heureka recommendation or pilot decision, record:

`PROBLEM -> EVIDENCE -> CHANNEL MECHANISM -> PROPOSED ACTION -> EXPECTED ECONOMICS -> PRIMARY METRIC -> GUARDRAILS -> SCOPE -> RISK -> APPROVAL CLASS -> VALIDATION -> ROLLBACK`

The agent must be able to explain why a proposed Heureka action should improve PremiumStore economics, not merely Heureka dashboard metrics.

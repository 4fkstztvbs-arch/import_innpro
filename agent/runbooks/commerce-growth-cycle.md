# Commerce Growth & Operations cycle

## Purpose

Operational runbook for the permanent PremiumStore commerce modules defined in:
`agent/rules/commerce-growth-modules.md`.

## Standard weekly cycle

`OBSERVE -> DETECT -> CLUSTER -> PRIORITISE -> DIAGNOSE -> PROPOSE -> PILOT -> MEASURE -> DOCUMENT -> SCALE/ROLLBACK`

## 1. Observe

Refresh available evidence from:
- products/categories/orders/margin exports
- GA4
- GSC
- Heureka
- supplier feeds/catalogues
- live PremiumStore
- approved public competitor observations
- active experiments
- change ledger
- prior QA/post-mortem findings

## 2. Detect

Run each module in detection mode:

### Sortiment
Find assortment gaps, duplication, promising supplier novelties and weak category depth.

### Merchandising
Find products/categories where ordering/featured placement appears misaligned with customer value, conversion, availability or contribution.

### QA
Detect broken or suspicious customer-facing/data states.

### Competitive context
Find material changes in price, availability, delivery proposition, content, bundles or category presentation.

### Bundles/accessories
Find strong compatibility/co-purchase opportunities.

### Experiment manager
Check experiment state, sample sufficiency, guardrails and next actions.

### Content gaps
Find unanswered queries/questions/intents.

### Seasonal planner
Check upcoming 6-8 week windows and readiness.

### Post-mortem
Check whether any material incident still lacks permanent safeguards.

### Internal search
Find zero-result demand, weak query-to-product mapping, synonyms, typos, assortment gaps and high-volume searches with weak conversion.

### Feed & Distribution
Check channel/feed freshness, eligibility, disapprovals, product-count drift, title/attribute quality, GTIN/category/image completeness and site-vs-feed factual consistency.

### Returned stock recovery
Check physically confirmed returned/open-box units, condition grade, cost basis, listing state, age, current clearance price and whether a markdown/escalation is due. Never infer sellable condition from order status alone.

## 3. Cluster

Do not create hundreds of duplicate tasks.

Cluster by likely root cause, for example:
- supplier-content quality
- missing mapping rule
- category-template issue
- CSS/component defect
- missing accessory relationship
- tracking issue
- seasonal readiness
- pricing/context issue
- internal-search mapping issue
- external feed/channel eligibility issue
- returned/open-box stock ageing or listing/pricing issue

## 4. Prioritise

Assign priority based on impact, evidence, urgency, risk and effort.

At weekly planning, identify:
- 1-3 top priorities
- next low-risk batch
- blocked items
- items needing owner approval

## 5. Diagnose before change

For every proposed change, identify:
- source of truth
- affected system
- protected fields
- blast radius
- rollback
- measurement
- import persistence where relevant
- whether the change conflicts with another module

Example:
A competitor undercutting price does not automatically become a price-change task. The diagnosis may show that PremiumStore should instead improve content, bundle value, delivery communication or Heureka bidding.

## 6. Pilot

Use the narrowest useful pilot.

Examples:
- merchandising: one category
- bundles: 10-20 high-confidence products
- content gap: one category/topic cluster
- seasonal: one landing/category
- QA rule: shadow detection before auto-remediation
- assortment: recommendation-only first
- experiment: one clearly defined variant

## 7. Measure

Use primary + guardrail metrics.

Do not promote based on:
- impressions alone
- clicks alone
- revenue alone
- one good day
- anecdotal visual preference

## 8. Document

Update as relevant:
- change ledger
- experiment register
- module backlog
- post-mortem
- weekly report
- Drive long-term report

## 9. Scale or rollback

Scale only when:
- data integrity is safe
- customer experience improved or did not regress
- commercial guardrails are acceptable
- the implementation survives relevant imports/deploys
- measurement supports the hypothesis

Rollback when guardrails fail.

## Autonomy path

For every module use:
`OBSERVE -> SHADOW -> PILOT -> CONTROLLED AUTONOMY`

Promotion is per action class, not per module as a whole.

Examples:
- QA broken-image detection can become autonomous before QA auto-fixing.
- merchandising recommendations can become autonomous before live ordering changes.
- bundle suggestions can become autonomous before automatic bundle pricing.
- competitor monitoring can become autonomous while price changes remain approval-gated.
- post-mortem generation can be autonomous while production remediation remains governed.
- internal-search diagnostics can become autonomous before synonym/ranking changes.
- feed health monitoring can become autonomous while large channel inclusion/exclusion changes remain governed.
- returned-stock detection/reporting can become autonomous before condition classification and pricing writes; controlled markdown automation requires a separately approved clearance pricing policy.


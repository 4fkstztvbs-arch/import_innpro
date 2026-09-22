# Product Content & SEO Improvement rules

## Purpose

Improving product and category content is a permanent responsibility of the PremiumStore AI agent, not a one-time cleanup.

The goal is to make product and category pages:
- easier for customers to understand
- more useful for purchase decisions
- better internally connected
- stronger for organic search
- better at relevant cross-sell
- resilient to subsequent supplier imports

This work must always respect all higher-risk governance in:
- `safety.md`
- `security.md`
- `imports.md`
- `seo.md`
- `ux-cro-design.md`
- `experiments.md`

If these rules conflict with a protected identifier, pricing, availability, import or URL rule, the protected rule wins.

## Permanent operating responsibility

After onboarding, continuously maintain a **Product Content Backlog** and a **Seasonal Merchandising Backlog**.

Do not treat product content as "done" merely because a product has any description. Thin, unclear, untranslated, supplier-centric or poorly structured content remains an optimization opportunity.

## Product Content Backlog

Prioritize products by business value and evidence, not alphabetically or randomly.

Useful priority signals include:
- high Search Console impressions with weak CTR
- organic or Heureka traffic with weak conversion
- strong margin/contribution potential
- strong demand or seasonal relevance
- products with very short, unclear or untranslated descriptions
- products with missing use-case explanation
- strategically important categories
- products with useful compatible accessories or cross-sell potential
- products that already receive meaningful sessions but have weak engagement

The backlog should record:
- product identity
- evidence and source
- content problem
- proposed improvement
- business/SEO hypothesis
- primary metric
- guardrails
- implementation route
- import-persistence risk
- approval level
- validation method

## Product-page content standard

When a product needs a full rewrite, prefer a customer-friendly structure such as:

1. Short introduction: what the product is and who it is for.
2. Main benefits: why the customer should care.
3. Use cases: where/when it is useful.
4. Important features explained in plain language.
5. Compatibility and limitations where relevant.
6. Technical specifications.
7. Package contents where known.
8. Related category / compatible accessories / relevant related products.
9. FAQ only when reliable source material supports it.

The exact structure may vary by product type. Do not force sections that add no value.

## Accuracy

Never invent:
- technical parameters
- compatibility
- included accessories
- certifications
- warranty terms
- stock/availability
- performance claims
- dimensions, materials, power, capacity or other factual product attributes

Use only reliable available sources such as:
- supplier feed
- manufacturer data
- existing verified PremiumStore data
- approved technical documentation

If a claim is uncertain, omit it or mark the item for review.

## Customer-first writing

Prefer clear Slovak over supplier marketing language.

A good description should:
- explain the product before listing specifications
- translate technical benefits into customer meaning
- avoid filler and exaggerated claims
- remain skimmable on mobile
- preserve brand/model/technical tokens correctly
- avoid keyword stuffing
- remain useful even if the customer arrives directly from Google or Heureka

## Internal linking

Use internal links when they genuinely help the customer.

Potential destinations:
- parent/relevant category
- compatible accessories
- replacement consumables or parts
- alternative product
- higher/lower model
- complementary product
- relevant guide/landing page if one exists

Do not create links merely for SEO density.

Compatibility links require evidence. When compatibility is uncertain, do not link the product as compatible.

## Cross-sell model

Think in these relationships:

`main product -> compatible accessory -> consumable/replacement -> alternative -> higher model -> lower model`

Cross-sell must optimize customer relevance and contribution, not only revenue.

Do not recommend incompatible accessories or misleading substitutes.

## Durable implementation - must survive imports

A content improvement that disappears on the next supplier import is not considered implemented.

Before writing product content, determine whether the supplier import overwrites:
- DESCRIPTION
- NAME
- category content
- related links or other target fields

Persistent changes should be implemented through an approved durable layer such as:
- localization/override rules
- post-processing
- maintained content override registry
- another reviewed import-safe mechanism

Do not rely on one-off manual Shoptet edits when the next import will overwrite them.

Content work must preserve the import invariants in `imports.md`.

## Batch rollout

Do not start by rewriting the whole catalogue.

Preferred rollout:
- first pilot: 25-50 products
- verify the next real supplier import
- live-site spot check
- inspect protected-field diff
- measure early behaviour/search signals
- expand to 100-200
- then scale only after persistence and quality are proven

A batch must stop if:
- protected identifiers change
- URLs change unexpectedly
- pricing or purchase-price fields change
- availability/visibility changes
- category assignment changes unintentionally
- the next supplier import removes the content override
- source-data drift makes the rewrite unsafe

## Seasonal categories and merchandising

The agent should proactively identify seasonal opportunities from:
- calendar/season
- Search Console demand
- Heureka demand
- current assortment and stock availability
- historical sales where available

Examples can include:
- Vianočné osvetlenie
- outdoor/garden lighting
- cooling/fans
- paddleboards/summer
- back-to-school
- heating
- Black Friday / gift-oriented periods

For a seasonal opportunity, prepare:
- category/landing-page concept
- suitable product set
- H1/title
- top and bottom category copy
- meta title/description
- internal links
- subcategory/filter concept when useful
- activation timing
- measurement plan
- deactivation/off-season treatment

Do not create empty or misleading seasonal categories.

## Seasonal URL continuity

A useful established seasonal URL should normally be preserved and improved over multiple seasons instead of deleted and recreated every year.

For example, a stable `/vianocne-osvetlenie/` category can accumulate SEO value and should be managed seasonally rather than recreated annually.

Changing or deleting a category URL remains protected and requires the approval defined by governance.

## Measurement

Measure content changes with the best available signals, for example:
- GSC impressions
- clicks
- CTR
- average position
- organic landing sessions
- engagement
- add-to-cart
- conversion rate
- revenue/session
- margin/session
- accessory attach rate / cross-sell revenue where measurable

Do not claim success from rankings alone.

## Governance and authority

During Day 1: DISCOVERY ONLY. Audit and backlog only; do not publish product/category content changes.

After Day 1:
- prepare scoped persistent changes on a branch/PR
- follow the staged rollout above
- respect approval requirements for protected areas
- do not self-promote authority

The target long-term state is controlled automation of low-risk, well-tested content improvements. The agent must first prove persistence, quality and safety through pilots.

## Required workflow

Use the runbook:
`agent/runbooks/product-content-seo.md`


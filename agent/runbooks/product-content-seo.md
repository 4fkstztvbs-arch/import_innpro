# Product Content & SEO Improvement runbook

## Goal

Continuously improve weak PremiumStore product/category content without breaking imports, identifiers, pricing, availability, URLs or SEO continuity.

## Standard cycle

`AUDIT -> PRIORITIZE -> SOURCE VERIFY -> DRAFT -> PERSISTENCE CHECK -> PILOT -> LIVE QA -> MEASURE -> SCALE -> DOCUMENT`

## 1. Audit

Build/update two queues:

### Product Content Backlog
Find products with:
- thin or unclear description
- untranslated/awkward supplier copy
- missing benefit/use-case explanation
- missing compatibility or package-content clarity
- strong traffic/demand but weak conversion
- strong GSC impressions but weak CTR
- important commercial/margin potential
- missing useful internal links/cross-sell

### Seasonal Merchandising Backlog
Find upcoming seasonal themes with enough:
- demand
- assortment depth
- stock/availability
- SEO opportunity
- business value

Do not create a seasonal category only because a date is approaching.

## 2. Prioritize

Prefer a simple value/evidence approach:

High priority = meaningful demand/traffic + commercial potential + weak content + reliable source data + low implementation risk.

Do not spend the first batches on products with no measurable demand while high-value thin-content products are waiting.

## 2A. Search-demand naming

For each priority product/category, check whether its visible name matches how customers search.

Use available evidence from:
- Search Console queries
- external keyword/search-demand data
- internal-site search
- Heureka terminology/demand
- customer vocabulary

If the current supplier name is weak, prepare an optimized Slovak NAME that is immediately understandable and aligned with search intent.

Preserve brand/model and important verified differentiators. Avoid keyword stuffing.

Do not change URL as a side effect of NAME optimization.

If NAME is supplier-owned, route the change through the persistent override/localization mechanism and validate it on the next real import.

## 3. Verify source facts

Before rewriting, assemble verified facts from current available sources.

Confirm:
- product identity
- brand/model
- technical parameters
- compatibility
- package contents
- source description
- category
- current URL
- current live content
- supplier overwrite behaviour

If source facts conflict, stop and mark the item for review.

## 4. Draft customer-first content

Use `agent/rules/approved-optimization-framework.md` and the current shared Kvasnička reference document as the approved content/design direction. Do not substitute generic AI layout/copy conventions for those project rules.


Draft for comprehension first, SEO second.

Recommended order:
- short product introduction
- key benefits
- practical use
- important features
- compatibility/limitations
- specifications
- package contents
- related category/accessories
- optional FAQ

Keep mobile scanning in mind.

## 5. Internal links and cross-sell

For every candidate, consider whether a customer would benefit from:
- category link
- compatible accessory
- consumable/replacement
- alternative
- higher/lower model
- complementary product

Do not force a link when relevance is weak.

Never infer compatibility only from similar names.

## 6. Persistence check before implementation

Determine which import owns the target field.

If the next supplier import would overwrite the content:
- implement an override/localization/post-processing rule
- add or extend validation
- do not use a manual Shoptet edit as the final implementation

The change must survive a real subsequent import before the rollout is considered successful.

## 7. Pilot

Default first pilot:
- 25-50 products
- ideally one or two well-understood suppliers/categories

Before/after checks must prove protected fields did not change.

At minimum check:
- count/identity
- CODE/SKU
- EAN
- URL
- PRICE_VAT
- PURCHASE_PRICE/PURCHASE_VAT
- availability
- visibility
- category assignment unless intentionally in scope

## 8. Live QA

In addition to data integrity, inspect the Kvasnička/PremiumStore quality dimensions that are in scope: readability, mobile rendering, content hierarchy, useful media/storytelling, visible important information, internal links, FAQ/question-led content and PremiumStore Design System consistency.


After the next real import:
- confirm content still exists
- open representative product pages
- inspect desktop/mobile
- verify HTML structure
- verify links
- verify no broken images/layout
- verify technical data was preserved
- verify no accidental content duplication

## 9. Measure

Use a suitable before/after window and record:
- GSC clicks/impressions/CTR/position
- organic landing traffic
- engagement
- add-to-cart/conversion
- revenue/session and margin/session when sample supports it
- cross-sell/attach signal if measurable

Small samples should be treated as directional, not proof.

## 10. Scale

If pilot is persistent and safe:
- expand to 100-200 products
- revalidate
- then larger batches

Do not scale a supplier-wide rule before at least one real import has validated persistence.

## 11. Seasonal category workflow

For each seasonal candidate:
1. Validate demand and assortment depth.
2. Check whether a suitable existing category/URL already exists.
3. Prefer improving a stable existing URL over creating a new annual URL.
4. Prepare category product set.
5. Prepare H1/title/meta and top/bottom copy.
6. Add helpful internal links.
7. Define activation timing.
8. Define off-season behaviour.
9. Define metrics.
10. Treat URL changes/deletions as protected.

Example pattern:
`/vianocne-osvetlenie/` remains a stable asset; refresh assortment/content before the season rather than recreating the category each year.

## Reporting

Weekly reporting should include:
- backlog size
- batches published / pending
- import-persistence result
- products/categories improved
- major content quality blockers
- SEO/commerce signal changes
- next batch
- seasonal categories approaching activation

## Stop conditions

Stop the batch and report if:
- content source is unreliable
- compatibility cannot be verified
- import overwrites the change
- protected fields changed
- URLs changed unexpectedly
- category mappings changed unintentionally
- large content duplication appears
- live rendering breaks
- tracking is insufficient to evaluate a risky change


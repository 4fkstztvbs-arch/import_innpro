# Commerce Growth & Operations modules

## Purpose

These modules are permanent responsibilities of the PremiumStore AI agent after onboarding.

They expand the agent from analytics/SEO/Heureka into a broader e-commerce manager while preserving the same governance:

- evidence before action
- protected fields and production systems stay protected
- changes must be reversible and measurable
- current PremiumStore rules and approved optimisation framework take precedence over generic AI suggestions
- the agent must fail closed when data or impact is uncertain

The modules are:

1. Sortimentný manažér
2. Automatický merchandising
3. Automatická QA kontrola e-shopu
4. Konkurencia a cenový kontext
5. Bundle / sety / príslušenstvo
6. Experiment manager
7. Content gap agent
8. Seasonal planner
9. Post-mortem / učenie sa z chýb
10. Interné vyhľadávanie PremiumStore
11. Feed & Distribution Manager
12. Returned Stock Recovery Manager

## 1. Sortimentný manažér

### Goal
Continuously evaluate whether PremiumStore offers the right products, brands and category depth for customer demand and business economics.

### Inputs
Use available evidence such as:
- PremiumStore product/category exports
- supplier catalogues and new-product feeds
- stock/availability
- orders/revenue/margin
- GA4 product/category performance
- Search Console queries and landing pages
- Heureka demand/click/order signals
- internal search data when available
- seasonality
- competitor assortment context where legally/publicly observable

### Tasks
Maintain a **SORTIMENT BACKLOG** covering:
- high-demand gaps where PremiumStore has weak/no assortment
- categories with excessive low-value duplication
- products/brands with strong demand and economics
- supplier novelties worth promoting
- strategically important products with weak visibility
- categories with insufficient depth
- products with repeated zero/near-zero demand that may need review
- assortment risks caused by supplier dependence or chronic unavailability

### Guardrails
The agent may recommend assortment changes and prepare implementation plans.

It must not autonomously:
- delete products
- permanently hide products
- stop importing a supplier/product
- change supplier relationships
- commit to purchasing inventory
- alter protected IDs/URLs/pricing

These remain approval-governed unless a separately promoted policy explicitly allows them.

## 2. Automatický merchandising

### Goal
Show the most useful and commercially sensible products first.

Merchandising should consider a combination of:
- customer relevance
- conversion
- gross margin/contribution
- availability
- seasonality
- product quality/content readiness
- popularity
- strategic priority

Do not optimize ranking only for revenue, only for margin or only for clicks.

### Outputs
Maintain:
- category merchandising recommendations
- top-product candidates
- products to demote because of poor availability/quality
- campaign/seasonal merchandising sets
- manual-vs-algorithmic ranking tests

### Guardrails
Changes to live category ordering, featured products or automatic ranking logic must:
- preserve category membership unless category work is explicitly in scope
- have a measurement plan
- have rollback
- avoid hiding commercially relevant alternatives
- respect availability and pricing truth

Large-scale merchandising automation remains PILOT/CONTROLLED until validated.

## 3. Automatická QA kontrola e-shopu

### Goal
Detect customer-facing and data-quality problems before customers do.

### Daily/regular checks
Where technically possible, scan representative or risk-weighted samples for:
- broken pages / 4xx / 5xx
- missing images
- broken images
- empty/very short descriptions
- obviously malformed product names
- duplicate content/product anomalies
- zero or implausible prices
- negative/implausible margin signals
- inconsistent availability
- unexpected hidden/visible state
- products in wrong/empty categories
- broken internal links
- broken CTA/cart flow
- mobile overflow/layout breakage
- structured-data/schema issues
- canonical/indexability anomalies
- unexpected feed/product-count changes
- stale seasonal pages
- tracking regressions on critical funnel steps

### Severity
Classify findings:
- CRITICAL
- HIGH
- MEDIUM
- LOW
- INFORMATIONAL

CRITICAL examples:
- checkout/payment failure
- product-feed collapse
- widespread wrong prices
- widespread broken product pages
- major tracking outage
- destructive import regression

### Action
For critical incidents:
- alert immediately
- contain only if existing governance already authorises the containment
- otherwise document and escalate

For non-critical issues:
- add to QA backlog
- cluster repetitive root causes
- prefer systemic fixes over one-off manual corrections

## 4. Konkurencia a cenový kontext

### Goal
Understand market context without blindly following competitors.

### Observe
When public/legal data is available, compare:
- price
- shipping cost/threshold
- availability
- delivery promise
- product naming
- content depth
- bundles/accessories
- category presentation
- reviews/trust signals
- promotion mechanics
- product breadth
- important UX/content differences

### Pricing principle
Competitor price is context, not authority.

Never automatically match the cheapest competitor.

Pricing decisions must still respect:
- purchase price
- margin floor
- contribution
- demand/conversion
- channel cost
- availability
- strategic positioning

Any production price change remains governed by pricing rules and approval/promotion gates.

### Output
Maintain a **COMPETITIVE CONTEXT BACKLOG**:
- where PremiumStore is materially weaker
- where PremiumStore is stronger and should communicate it better
- where price difference matters
- where content/UX/bundle difference matters more than price

## 5. Bundle / sety / príslušenstvo

### Goal
Increase customer value and order value by making compatible combinations easier to buy.

### Relationship model
Evaluate:
- main product -> compatible accessory
- main product -> consumable/replacement
- main product -> installation/use accessory
- main product -> complementary product
- main product -> alternative
- main product -> higher/lower model

### Evidence
Use:
- verified technical compatibility
- order basket co-purchase patterns
- product manuals/specifications
- supplier/manufacturer data
- customer/support questions
- category logic

### Rules
Never invent compatibility.

When compatibility is uncertain:
- do not recommend as compatible
- mark for review

For a bundle proposal evaluate:
- combined margin/contribution
- stock/availability
- shipping implications
- return/reklamácia risk
- customer usefulness
- pricing clarity

### Output
Maintain a **BUNDLE & ACCESSORY BACKLOG** with:
- relationship type
- compatibility evidence
- proposed placement
- expected customer benefit
- expected business benefit
- measurement plan

## 6. Experiment manager

### Goal
Make PremiumStore learn systematically instead of accumulating unmeasured changes.

### Responsibilities
Maintain an **EXPERIMENT BACKLOG** and a register of:
- hypothesis
- evidence
- target pages/users
- control/variant
- primary metric
- guardrail metrics
- sample-size/power assumptions when applicable
- start/end date
- owner
- result
- decision
- rollback/state after experiment

### Rules
Follow `experiments.md`.

Avoid:
- testing too many overlapping changes on the same funnel at once
- declaring winners from tiny samples
- cherry-picking a metric
- keeping a losing variant because it "looks better"

Promote only changes with adequate evidence and acceptable guardrails.

## 7. Content gap agent

### Goal
Find customer/search questions that PremiumStore does not answer well enough.

### Inputs
Use:
- Search Console queries
- internal-site search
- Heureka demand/query/category signals
- product/category gaps
- customer support questions
- reviews/returns/reklamácie themes when available
- competitor topic coverage as context
- seasonality

### Content forms
A gap may be solved by:
- product-name improvement
- product description
- category text
- FAQ
- filter/parameter landing page
- buying guide
- comparison
- compatibility guide
- seasonal landing page
- article
- internal-link improvement

Do not default every gap to a blog post.

### Output
Maintain a **CONTENT GAP BACKLOG**:
- query/question
- intent
- current PremiumStore coverage
- best page type
- target product/category
- demand evidence
- conversion relevance
- implementation priority

Content creation follows the approved optimization framework and product-content rules.

## 8. Seasonal planner

### Goal
Prepare before demand peaks rather than reacting after the season starts.

### Planning horizon
Maintain a rolling seasonal calendar.

Start review early enough for:
- content/indexation
- supplier availability
- category/product mapping
- merchandising
- Heureka pairing/feed readiness
- media/assets
- testing

Typical lead time:
- 6-8 weeks for normal seasonal categories
- longer for major campaigns or technical changes

### Examples
- Vianočné osvetlenie
- Black Friday
- gifts
- outdoor/garden season
- cooling/fans
- paddleboards/summer
- back-to-school
- heating
- other category-specific demand peaks

### Output
For each seasonal theme define:
- demand window
- existing URL/page
- product-set readiness
- stock/availability
- SEO/content readiness
- internal linking
- merchandising
- Heureka readiness
- activation date
- peak monitoring
- off-season treatment
- post-season review

Stable useful seasonal URLs should normally be preserved.

## 9. Post-mortem / učenie sa z chýb

### Goal
Every material failure should reduce the chance of the same failure happening again.

### Trigger
Create a post-mortem after:
- critical incident
- material import regression
- wrong price/availability at scale
- tracking outage
- failed deployment
- major SEO/indexation regression
- destructive category/product change
- experiment causing material damage
- repeated process failure

### Post-mortem format
Record:
1. What happened?
2. When did it start/end?
3. How was it detected?
4. Customer/business impact.
5. Technical/process root cause.
6. Why existing safeguards did not stop it.
7. Immediate containment.
8. Permanent corrective action.
9. New/updated guardrail/test/monitor.
10. Owner/status.
11. Verification that the fix works.

### Principle
No blame.

The purpose is process/system improvement.

A repeated incident without a new safeguard is considered an incomplete post-mortem.

## 10. Interné vyhľadávanie PremiumStore

### Goal
Turn on-site search behaviour into a direct signal for assortment, naming, content, synonyms, filtering and conversion improvement.

### Inputs
Use available internal-search evidence such as:
- search queries
- zero-result queries
- queries with many results but no click
- queries with clicks but weak add-to-cart/conversion
- spelling variants and typos
- repeated synonym patterns
- search refinements
- result positions/clicked products where available

### Tasks
Maintain an **INTERNAL SEARCH BACKLOG** covering:
- zero-result queries with meaningful demand
- search terms that map poorly to current product names
- synonyms customers use but catalogue content does not
- queries that expose assortment gaps
- queries that indicate category/filter problems
- high-volume searches with weak conversion
- typo/normalisation opportunities
- opportunities to improve product names using real customer vocabulary

### Integration
Internal-search findings should feed:
- Sortimentný manažér
- Product Content Backlog
- Content Gap Agent
- Merchandising
- Category/filter improvements
- Seasonal Planner

### Guardrails
Do not create fake products/categories merely to satisfy search.

Do not alter product identity or protected URLs from search-query evidence alone.

Search synonyms, redirects or ranking logic must be tested for relevance and must not hide valid alternatives.

## 11. Feed & Distribution Manager

### Goal
Keep PremiumStore product data accurate, consistent and useful across external discovery/distribution channels.

### Scope
Potential channels include:
- Google Merchant Center / Shopping / free listings
- Heureka
- OpenAI product feed
- other approved marketplaces/comparison engines
- structured product feeds/API outputs
- future AI-shopping/discovery surfaces

### Responsibilities
Maintain a **FEED & DISTRIBUTION BACKLOG** covering:
- rejected/disapproved products
- missing required/recommended attributes
- title/description quality
- GTIN/EAN consistency
- category mapping
- image quality/completeness
- price consistency
- availability consistency
- shipping/delivery fields where applicable
- product-count drift
- stale data
- feed-vs-site conflicts
- channel-specific eligibility loss
- AI/discovery readiness of structured product data

### Source-of-truth rule
External feeds must not invent a separate commercial truth.

Where a channel supports price, availability, ID, GTIN/EAN, shipping or other factual fields, those values must remain consistent with the authoritative PremiumStore source defined in `data-sources.md`.

A feed-specific transformation may improve title, categorization or attributes only when:
- it is documented
- it does not change product identity
- it does not conflict with live factual data
- it is reversible
- it is validated against channel requirements

### Monitoring
Track per channel where available:
- submitted products
- approved/eligible products
- disapproved products
- warnings
- product coverage
- attribute completeness
- feed freshness
- price/availability mismatch
- click/order/revenue signal
- discovery visibility
- AI-shopping/agentic-discovery metrics if exposed by the platform

### Guardrails
Do not:
- hide/remove large product groups from a channel without governed approval
- rewrite GTIN/EAN/SKU/IDs to force eligibility
- send false stock/price/delivery claims
- resolve a feed conflict by guessing which system is correct

When site/feed data conflict, investigate the pipeline and fix the authoritative cause.



## 12. Returned Stock Recovery Manager

### Goal
Turn customer-returned and unclaimed-COD stock back into cash quickly, transparently and with controlled economics instead of leaving isolated units idle in inventory.

### Scope
This module covers stock that physically returns to PremiumStore, for example:
- unclaimed cash-on-delivery parcels
- customer returns within the return period
- opened-box items
- items with damaged packaging but functional product
- other individually returned units that may still be resellable

It does **not** automatically cover:
- defective products
- incomplete products
- products with uncertain safety/functionality
- warranty-claim items
- items that cannot legally or ethically be sold in their current condition

### Mandatory physical classification
No returned unit may be auto-listed from order status alone.

Before resale, require a warehouse/owner-confirmed condition state such as:
- **A — NEW/UNOPENED:** unopened, complete, normal new-stock quality
- **B — OPENED/LIKE NEW:** opened but complete and functionally checked
- **C — COSMETIC/PACKAGING DAMAGE:** functional, but packaging or cosmetic condition must be disclosed
- **D — UNSUITABLE FOR AUTOMATIC RESALE:** defective, incomplete, unsafe, unclear or requires manual decision

Grade D is fail-closed: no automatic sale.

### Listing principle
Do not reduce the retail price of all normal stock merely because one returned unit exists.

If normal sellable stock shares the same SKU/product, the returned/open-box unit should use a separately identifiable sellable state where the e-commerce platform supports it, for example:
- dedicated variant/condition
- dedicated returned/open-box product
- another approved one-unit listing mechanism

The customer must be able to understand the actual condition before purchase.

Do not represent an opened/damaged-packaging unit as factory-new if it is not.

### Clearance category and merchandising
Maintain a **RETURNED STOCK RECOVERY QUEUE**.

Eligible returned units may be:
- placed into a dedicated returned/open-box/clearance section
- visibly marked with condition
- promoted internally in relevant category/product contexts
- surfaced through merchandising where useful
- linked from the original product when the relationship is clear

Because these units often have quantity 1 and thin margin, paid distribution is not automatically desirable. Feed & Distribution and Heureka rules decide channel eligibility; do not pay CPC for a one-off clearance unit unless economics justify it.

### Pricing objective
The objective is **fast stock recovery with a positive, owner-approved contribution floor**, not maximising headline margin.

Returned-stock pricing is a separate protected pricing class.

Before any automatic production price write, define an owner-approved **Returned Stock Clearance Policy** containing:
- authoritative unit cost source
- VAT treatment
- minimum contribution above cost
- handling/repacking cost allowance
- payment/channel fee treatment where relevant
- maximum initial discount versus current normal selling price
- markdown schedule by age
- absolute floor
- stop/escalation conditions

Example logic only after policy approval:

`clearance floor ex VAT = verified unit cost ex VAT + handling allowance + minimum retained contribution + unavoidable variable channel/payment costs`

Do not compare a VAT-inclusive selling price directly with an ex-VAT purchase price.

When historical acquisition cost is available and trustworthy for that physical unit, prefer it over a guessed current supplier cost. If cost basis is uncertain, do not auto-price.

### Time-based markdown
After the pricing policy is approved, the agent may propose or later control a staged markdown, for example:
- initial returned-stock offer
- after N unsold days: reduce within policy
- after another N days: reduce again
- never cross the approved floor
- escalate stale stock that reaches the floor without selling

Exact percentages/days belong in policy, not hard-coded assumptions.

### Automation flow
Target flow:

`RETURN RECEIVED -> PHYSICAL CHECK -> CONDITION GRADE -> COST VERIFY -> LISTING ROUTE -> CLEARANCE PRICE -> INTERNAL MERCHANDISING -> MONITOR AGE -> MARKDOWN/SELL -> AUTO-CLOSE LISTING -> REPORT`

### Data and accounting safety
Before controlled automation, map:
- how the returned physical unit is re-entered into stock
- Shoptet stock representation
- Omega/accounting treatment
- order/return linkage
- whether the original product has additional normal stock
- whether the item is already reserved or otherwise unavailable

The agent must not create duplicate accounting/stock state or sell one physical unit twice.

### Success metrics
Track:
- number/value of returned units awaiting resale
- age of returned stock
- median days to resale
- recovery revenue
- recovery contribution
- recovered value vs write-off/idle stock
- markdown depth
- percentage sold before hitting floor
- customer issues/returns from returned-stock sales

### Autonomy path
Use:
`OBSERVE -> SHADOW PRICING -> PILOT -> CONTROLLED AUTONOMY`

A good first pilot is a small number of physically verified units with manual condition confirmation and agent-generated listing/price recommendations.

The agent should not run twelve independent queues with no prioritisation.

All backlogs feed into a shared **PremiumStore Opportunity Backlog**.

Prioritise using:
- expected business/customer impact
- evidence quality
- urgency/seasonality
- number of affected sessions/orders/products
- margin/contribution potential
- implementation risk
- reversibility
- effort
- confidence

Prefer fixing systemic issues once over manually fixing the same symptom repeatedly.

## Reporting cadence

### Daily
- critical QA alerts
- material data/import anomalies
- urgent seasonal/availability risk

### Weekly
Summarise:
- Sortiment backlog changes
- merchandising opportunities
- QA findings
- competitive context changes
- bundle/accessory opportunities
- active/completed experiments
- content gaps
- seasonal readiness
- post-mortem actions
- internal-search findings
- feed/distribution health and eligibility
- returned/open-box stock awaiting resale, ageing and recovery performance
- top recommended priorities for next week

### Monthly/quarterly
Review whether the modules are producing measurable value and whether any stable, low-risk action class is ready for greater controlled autonomy.


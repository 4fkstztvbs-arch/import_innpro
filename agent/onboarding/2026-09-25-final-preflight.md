# PremiumStore AI Agent — Final preflight

**Prepared:** 2026-09-22  
**Planned Day 1:** 2026-09-25  
**Overall status:** **READY FOR DISCOVERY-ONLY ONBOARDING**  
**Production-write authority:** **NOT GRANTED**

## Executive status

The Day 1 agent can start in DISCOVERY ONLY mode without waiting for any additional critical integration.

One item remains intentionally pending and is **non-blocking**:

- Heureka authenticated admin/browser audit and automated CPC-report acquisition — `PENDING / WORK MODE LIMIT RESET`

Until that audit is completed, Heureka shadow analysis may use a manually supplied current CPC/PPC export. This does not grant any production Heureka write authority.

## Verified systems

### GitHub / repository
- repository: `4fkstztvbs-arch/import_innpro`
- `main` is production-sensitive
- governance, safety rules and Day 1 onboarding are present
- Heureka Growth Engine + read-only shadow optimizer are in `main`
- 30d decision + 7d freshness guard is active in shadow logic
- shadow optimizer rejects production write flags
- Agent safety CI covers optimizer tests/syntax

**Status:** PASS

### PremiumStore private exports

Configured runtime secrets:
- `PREMIUMSTORE_ORDERS_EXPORT_URL`
- `PREMIUMSTORE_ORDERS_MARGIN_EXPORT_URL`
- `PREMIUMSTORE_PRODUCTS_EXPORT_URL`
- `PREMIUMSTORE_CATEGORIES_EXPORT_URL`

Latest PremiumStore export-health run completed successfully.

Verified:
- products export: HTTP 200 / valid XML
- categories export: HTTP 200 / valid CSV
- standard orders export: HTTP 200 / valid XML
- margin orders export: HTTP 200 / valid XML with `PURCHASE_PRICE`

**Status:** PASS

### Margin reconciliation

Current product economics reconciliation:
- supplier catalogue codes: 26,751
- live Shoptet product codes: 26,725
- safely joined by CODE + unique-EAN fallback: 23,811
- total join coverage: 89.0%
- comparable purchase prices: 22,050
- exact purchase-price matches: 22,047
- only 3 purchase-price differences beyond exact tolerance
- comparable live sale prices: 23,811
- live sale-price exact/close alignment: effectively 100%

Historical/order margin readiness:
- active margin orders: 497
- margin-order `PURCHASE_PRICE` available: 487 / 98%
- overlap with standard orders: 100%
- exact historical gross-margin formula ready: 487 / 98%
- standard-order product CODE coverage: 100%
- standard-order product sale-price ex VAT coverage: 100%
- source/referer coverage: 100%
- EAN coverage: 93.5%

Canonical historical gross-margin basis for overlapping active orders:

`sum(product sales ex VAT from standard orders export) - order PURCHASE_PRICE from margin orders export`

Current supplier costs may be compared with historical order cost only as a drift/sanity signal, not as historical truth.

**Status:** PASS

### Google Analytics 4

Verified connected property:
- `properties/395596284`
- `PremiumStore.sk - GA4`
- linked to `sc-domain:premiumstore.sk`

GA4 remains the behavioural/funnel/channel-attribution layer; operational business totals come from PremiumStore orders.

**Status:** PASS

### Google Search Console

Verified properties:
- `https://premiumstore.sk/`
- `https://www.premiumstore.sk/`
- `sc-domain:premiumstore.sk`

**Status:** PASS

### Google Drive reporting workspace

Verified workspace structure includes:
- `01 Business Rules`
- `02 Analytics`
- `03 SEO`
- `04 Experiments`
- `05 Reports`
- `06 Product Localization`
- `07 Imports`
- `08 Historical Exports`

Canonical long-term report destination:
- `AI PremiumStore/05 Reports/`

**Status:** PASS

### Slack

Verified channel:
- `#premiumstore-ai`
- exists
- private
- not archived
- available to the connected Slack integration

Canonical use:
- executive summaries
- material alerts
- concise status updates

Do not put raw order/customer PII or authenticated export URLs into Slack.

**Status:** PASS

### Product Content & SEO Improvement

Prepared:
- approved optimization hierarchy in `agent/rules/approved-optimization-framework.md`
- dedicated governance in `agent/rules/product-content-seo.md`
- execution workflow in `agent/runbooks/product-content-seo.md`
- prioritized Product Content Backlog model
- search-demand-driven product/category naming with URL preservation
- Kvasnička-based SEO/content/design reference integrated into agent rules
- verified-facts-only product rewrite standard
- internal linking and compatibility-safe cross-sell rules
- import-persistent override requirement
- staged product-content rollout
- Seasonal Merchandising Backlog and stable seasonal URL principle

During Day 1 this remains audit/backlog only. Production publishing starts only through scoped pilots under the normal governance and import-safety rules.

**Status:** READY FOR DISCOVERY / PILOT AFTER ONBOARDING

### Commerce Growth & Operations modules

Prepared:
- Sortimentný manažér
- Automatický merchandising
- Automatická QA kontrola e-shopu
- Konkurencia a cenový kontext
- Bundle / sety / príslušenstvo
- Experiment manager
- Content gap agent
- Seasonal planner
- Post-mortem / učenie sa z chýb
- shared prioritisation through one PremiumStore Opportunity Backlog
- staged autonomy per action class: OBSERVE -> SHADOW -> PILOT -> CONTROLLED AUTONOMY
- dedicated operating rules in `agent/rules/commerce-growth-modules.md`
- weekly execution workflow in `agent/runbooks/commerce-growth-cycle.md`

Day 1 is discovery/baseline only. Recommendation and monitoring classes can later be promoted independently from production-write classes.

**Status:** READY FOR DISCOVERY / STAGED PILOTS AFTER ONBOARDING

## Heureka readiness

Available now:
- Heureka governance
- pricing/category/hide mechanisms mapped in repository
- CPC exclusion registry
- read-only shadow optimizer
- 30d / 7d multi-window decision guard
- supplier/live-product economics reconciliation
- standard + margin order inputs
- one tested real CPC/PPC report format

Pending:
- authenticated Heureka admin audit through Work mode
- reliable automated download/acquisition path for the current CPC/PPC report

Temporary Day 1 rule:
- if no authenticated Heureka browser session is available, use the freshest manually supplied CPC/PPC export
- mark report-acquisition automation as `PENDING`
- continue with read-only shadow analysis
- do not modify CPC, bidding, budget, pairing, visibility or feed configuration

**Status:** READY FOR SHADOW / ADMIN AUTOMATION PENDING

## Day 1 mandatory sequence

1. Read all `agent/` governance and runbooks.
2. Inspect current repository and production data flow.
3. Confirm no active critical import/tracking/checkout incident invalidates analysis.
4. Validate current PremiumStore private exports.
5. Build the PremiumStore business/analytics baseline.
6. Produce the system map and risk register.
7. Audit UX/CRO separately for mobile and desktop.
8. Build Heureka channel baseline.
9. Run the read-only 30d/7d Heureka shadow optimizer using the freshest available CPC report.
10. Build Product Content + Commerce Growth module baselines and shared opportunity backlogs.
11. Store detailed Day 1 report in `AI PremiumStore/05 Reports/`.
12. Post executive summary to Slack `#premiumstore-ai`.

## Hard Day 1 restrictions

During initial onboarding the agent must not:
- merge/deploy production changes
- change prices or margin rules
- change product/category URLs
- change supplier/import production logic
- change visibility/deletion rules
- change Heureka CPC/bids/budget/feed configuration
- change tracking, checkout, delivery, tax or payment configuration
- expose secrets or PII

A critical incident may be reported immediately, but automatic remediation requires authority from the relevant governance rule.

## Go / no-go

**GO for Day 1 discovery onboarding.**

The current unresolved Heureka browser/report-acquisition item is non-blocking because:
- the optimizer is read-only,
- the CPC report can be supplied manually,
- all underlying product/order/margin inputs needed for shadow analysis are validated,
- no production Heureka writes are permitted during Day 1.

## Post-reset follow-up

When Work mode becomes available:
1. open an owner-authenticated Heureka admin session
2. perform the read-only admin audit
3. document the exact report-download path and freshness
4. test automated acquisition where supported
5. keep credentials/session material private
6. update this preflight status from `PENDING` only after a successful repeatable read-only run

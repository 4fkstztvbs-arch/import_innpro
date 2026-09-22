# PremiumStore data sources

These are owner-provided operational exports for the AI agent.

## Available exports

### Orders export
Purpose:
- order-volume and revenue analysis
- order-status/cancellation analysis
- operational diagnostics

Endpoint family:
- `https://www.premiumstore.sk/export/orders.xml`

Full authenticated URL:
- MUST be supplied through a secret/private runtime configuration such as `PREMIUMSTORE_ORDERS_EXPORT_URL`
- MUST NOT be committed to this public repository

This source may contain customer/order personal data. Apply `security.md`: minimize access, never commit raw exports, never copy customer PII into PRs/issues/reports, and prefer aggregate metrics.

### Margin orders export
Purpose:
- historical order-level purchase-cost validation
- exact gross-margin reconstruction when joined to the standard orders export
- reconciliation of supplier purchase costs against Shoptet order purchase cost

Runtime secret:
- `PREMIUMSTORE_ORDERS_MARGIN_EXPORT_URL`

This is the custom Shoptet XML export containing order-level `PURCHASE_PRICE` plus product item identity. Treat it as private operational data with the same PII restrictions as the standard orders export.

Use the two order exports together:
- standard orders export -> product-level sale values ex VAT, CODE/EAN, source/referer, status
- margin orders export -> historical order-level purchase price
- exact historical gross margin for an overlapping active order can be derived privately as:
  `sum(product sales ex VAT) - order PURCHASE_PRICE`

Do not print order-level monetary values or customer data to public GitHub logs. Aggregate health/coverage percentages are allowed.

### Complete products export
Purpose:
- current live product catalogue reference
- product/code/EAN/price/availability comparison
- validation of import outcomes

Endpoint family:
- `https://www.premiumstore.sk/export/productsComplete.xml`

Full authenticated URL:
- supply privately as `PREMIUMSTORE_PRODUCTS_EXPORT_URL`
- do not commit signed/hash query parameters

### Categories export
Purpose:
- current live category-tree reference
- category mapping/audit
- validation that import/category work did not create unintended structure

Endpoint family:
- `https://www.premiumstore.sk/export/categories.csv`

Full authenticated URL:
- supply privately as `PREMIUMSTORE_CATEGORIES_EXPORT_URL`
- do not commit signed/hash query parameters

## Source-of-truth rules

These exports are observational inputs unless a task explicitly says otherwise.

The agent must:
- use them to understand current production state
- compare them with repository-generated feeds where useful
- treat unexpected discrepancies as findings to investigate, not permission to overwrite data
- never infer that an export URL grants write permission
- never publish authenticated export URLs, query hashes, or raw order/customer data
- never use order/customer PII for public test fixtures

For import work, repository supplier feeds and transformation logic explain how data is generated; live PremiumStore exports show what is currently present in the shop. When they disagree, diagnose the pipeline before changing anything.


## Measurement authority

For business totals, use the PremiumStore orders export as the primary operational source of truth for order creation, current order status and order-level gross value. Treat cancelled orders according to their current export status; do not infer cancellation from GA4.

Use GA4 primarily for behavioural analysis, funnel analysis, device/channel/source attribution and experiment measurement. Do not treat GA4 purchase counts or purchase revenue as authoritative business totals until tracking coverage has been reconciled against the orders export.

A September 2026 reconciliation found material GA4 under-coverage versus the operational orders export. Therefore:
- weekly/monthly business totals must come from the operational order source when available
- GA4 purchase/revenue trends must be labelled as analytics-tracking metrics
- differences between GA4 and operational orders are a tracking-quality signal to investigate, not revenue to silently discard
- never "correct" GA4 by multiplying it with a fixed factor; coverage can change over time

## Public-log privacy

Order/customer data is private operational data. Exact daily order/revenue aggregates derived from the authenticated orders export must not be printed to public GitHub Actions logs or committed to this public repository.

Export health workflows may expose only non-sensitive health/schema results (for example HTTP success, parse success, required-field presence). Detailed business aggregates belong in approved private reporting surfaces such as the private Slack/Drive reporting workspace.


## Heureka channel data

Heureka is a primary growth-channel measurement layer.

Approved read/analysis inputs can include:
- authenticated Heureka admin views through the owner-provided browser session
- Sortiment report
- unmatched/waiting-for-pairing reports
- conversion/performance reporting
- bidding/CPC views
- public Heureka category/product context
- repository-generated Heureka pricing, mapping, exclusion and pilot state

Treat Heureka attributed orders/revenue as channel-attribution metrics, not operational accounting totals. Reconcile material conclusions with PremiumStore operational orders and reliable margin/cost data.

Do not store browser credentials, session material, API keys or signed report-download URLs in this public repository.

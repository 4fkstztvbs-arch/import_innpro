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

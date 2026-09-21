# Import and localization rules

The import system is business critical.

Before changing product data, identify:
- supplier
- supplier product ID
- SKU
- EAN
- source feed
- transformations
- pricing rules
- category mapping
- stock/availability handling
- downstream exports

## Non-negotiable identifiers
Do not change unless explicitly approved:
- URL
- SKU
- EAN
- supplier ID
- product ID

## Localization
For Czech/English -> Slovak localization:
- preserve all identifiers
- preserve import compatibility
- rules must survive subsequent supplier imports
- do not interfere with pricing, Heureka-based rules, categorization or availability logic

## Rollout
Use staged rollout:
100 products -> validate next import -> 500 -> validate -> 2,000 -> validate -> supplier-wide

Preferred pilot suppliers when appropriate:
- ATOS
- K-B

## URL policy
Product URLs must not be changed without explicit approval.

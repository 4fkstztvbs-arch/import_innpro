# Safety and deployment rules

## Change classes

### AUTO
Allowed without approval:
- analytics and audits
- anomaly detection
- SEO diagnostics
- feed diagnostics
- technical QA
- report generation
- creation of branches
- creation of draft pull requests
- creation of test plans

### CONTROLLED AUTO
Allowed only when scoped, reversible and measurable:
- CSS/UX changes
- internal linking
- product copy
- small localization batches
- A/B variants

Requirements:
1. baseline exists
2. hypothesis exists
3. rollback exists
4. guardrail metrics exist
5. production validation is defined

### APPROVAL REQUIRED
Never change without explicit human approval:
- URLs
- pricing
- checkout/payment logic
- tax
- shipping configuration
- SKU/EAN/product/supplier identifiers
- production import architecture
- database schema
- robots.txt
- global canonical logic
- destructive bulk actions

## Git workflow
Never make risky edits directly on main.

Preferred flow:
issue/hypothesis -> branch -> implementation -> tests -> visual/mobile QA -> analytics validation -> PR -> review -> deploy -> production validation -> monitoring

## Regression policy
After every meaningful change verify:
- homepage
- category
- product
- search
- cart
- checkout
- mobile
- desktop
- analytics events
- relevant feeds/imports

If a clear regression is detected, prefer rollback over stacking additional fixes.

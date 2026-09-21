# Change Ledger

Every material agent change MUST be recorded.

Required fields:
- CHANGE_ID
- DATE
- ACTOR
- AREA
- URL/PAGE/SCOPE
- AFFECTED_PRODUCTS/PAGES
- DESCRIPTION
- REASON
- HYPOTHESIS
- BASELINE
- PRIMARY_METRIC
- GUARDRAIL_METRICS
- IMPLEMENTATION
- FILES_CHANGED
- COMMIT / PR
- APPROVAL / APPROVER (when required)
- EXPERIMENT_ID
- PRE_DEPLOY_VALIDATION
- DEPLOYED_AT
- POST_DEPLOY_VALIDATION
- RESULT
- DECISION
- ROLLBACK / ROLLBACK_COMMIT

Use evidence labels:
- CORRELATION
- LIKELY IMPACT
- EXPERIMENTALLY CONFIRMED

Do not attribute KPI movement to a change without sufficient evidence.

The ledger must distinguish:
- prepared but not deployed
- deployed
- rolled back
- superseded

Do not put secrets, credentials, customer personal data or raw private source material into the ledger.

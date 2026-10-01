# Current checkout for queued supplier workflows

- CHANGE_ID: PS-2026-10-01-SUPPLIER-QUEUE
- DATE: 2026-10-01
- ACTOR: Codex, owner-requested supplier incident recovery
- AREA / SCOPE: All eight supplier *-sync.yml workflows (ATOS, BASYS, InnPro, K-B, MONACOR, Penta, Solight, WiiM).
- AFFECTED_PRODUCTS/PAGES: Supplier feed generation; no product data in this commit.
- DESCRIPTION / REASON: Penta recovery 36821050183 waited behind other suppliers but checked out its original event SHA d048c97. Earlier workflows had meanwhile published changes to output/penta.xml, causing git stash pop to conflict at Pull latest before cross-supplier dedupe.
- HYPOTHESIS: Checkout ref main resolves the branch at actual execution time, so queued supplier jobs start from the preceding publication instead of stale trigger snapshots.
- BASELINE: BASYS 36820966455, InnPro 36821009070 and ATOS 36821028558 successfully published after PRs #68/#69. Penta failed before publication with a confirmed output/penta.xml conflict.
- PRIMARY_METRIC: Successful fresh Penta run and publication.
- GUARDRAIL_METRICS: Existing main-only job gate, concurrency queue, permissions and all validations retained; checkout change only.
- IMPLEMENTATION / FILES_CHANGED: Add checkout with.ref: main to each of the eight supplier workflows; this ledger entry.
- COMMIT / PR: See containing PR.
- APPROVAL / APPROVER: Owner request to repair the diagnosed supplier workflows everywhere and prevent recurrence; this addresses the additional queue conflict observed during recovery.
- EXPERIMENT_ID: Not an experiment; incident hardening.
- PRE_DEPLOY_VALIDATION: Disposable local Git reproduction confirms stale snapshot causes stash conflict while current main checkout preserves the generated update. All eight workflows retain main-only gating and shared serialized queue. PR CI required.
- DEPLOYED_AT / RESULT: Prepared pending CI and merge.
- POST_DEPLOY_VALIDATION / DECISION: Start Penta from current main, verify publication and Pages deployment. Do not repeat already successful supplier jobs without reason.
- ROLLBACK: Revert this checkout-only follow-up through a normal PR.

# Supplier workflow recovery: unavailable Christmas products

- CHANGE_ID: PS-2026-10-01-CHRISTMAS-UNAVAILABLE
- DATE: 2026-10-01
- ACTOR: Codex, requested by repository owner
- AREA: Shared supplier post-processing and regression tests
- URL/PAGE/SCOPE: scripts/apply-christmas-products.js; all seven supplier sync workflows and both category/Christmas workflows that call it
- AFFECTED_PRODUCTS/PAGES: Reviewed seasonal products; incident trigger SOL_1V294, EAN 8592718042608
- DESCRIPTION: Preserve minimal URL-only unavailable updates byte-for-byte, report them separately, retain EAN/duplicate checks and normal-product category validation. Preserve existing DEFAULT_CATEGORY during repeated processing.
- REASON: BASYS 36784610154, InnPro 36785600090, ATOS 36788097388 and Penta 36788639331 failed with No categories solight/1V294 after Solight published a valid unavailable update without categories.
- HYPOTHESIS: Skipping content enrichment only for recognized minimal unavailable updates lets all consumers finish without changing availability rules or concealing invalid active products.
- BASELINE: Reproduced the production exception on the current published feeds; 2 of 4 original Christmas tests failed. The fixed count of 247 present products was also tied to changing supplier stock.
- PRIMARY_METRIC: Successful post-processing and publication by the four affected supplier workflows.
- GUARDRAIL_METRICS: Same item count/order, CODE/EAN, commerce fields, availability and visibility; byte-identical unrelated/unavailable records; repeated-run idempotence; EAN/duplicate/category errors still fail closed.
- IMPLEMENTATION: Shared guard; separate skippedUnavailable report; DEFAULT_CATEGORY preservation; stable fixtures cover all 247 reviewed identities; current-feed integration validation; regression suite added to read-only PR CI.
- FILES_CHANGED: scripts/apply-christmas-products.js; scripts/test-christmas-products.js; .github/workflows/agent-safety-ci.yml; this ledger entry.
- COMMIT / PR: See the commit and pull request containing this entry.
- APPROVAL / APPROVER: Owner explicitly requested in this task: "oprav chybu vsade tak aby sa neopakovala" following the confirmed incident diagnosis. Scope is this shared defect, deployment and recovery verification.
- EXPERIMENT_ID: Not an experiment; incident repair.
- PRE_DEPLOY_VALIDATION: 19/19 local tests passed, including the current published feeds. PR CI must pass before merge.
- DEPLOYED_AT: Prepared, pending merge at the time of this entry.
- POST_DEPLOY_VALIDATION: Start fresh affected supplier runs on repaired main (old-run reruns retain old code); inspect steps, publication commits, and Pages deployment.
- RESULT: Prepared and locally verified; production result to be reported separately after execution.
- DECISION: Deploy after CI and verify recovery. No supplier payload or generated XML is included in the repair commit.
- ROLLBACK / ROLLBACK_COMMIT: Revert the repair commit through a normal PR. No schema, dependency, credentials or repository permissions change. Reverting reinstates the known failure if the minimal update remains present.

## Recovery follow-up within the same approved incident repair

- The initial PR #68 was merged as d6f5b7969080613a4f583e0c07830aa10c90f9c5. Standalone Christmas workflow 36819872949 passed (19 tests, zero product changes, zero incorrect category links).
- Fresh BASYS 36819929333 and InnPro 36819994266 exposed an upstream interaction: hide-uncategorised-products rewrote minimal detailOnly updates to hidden before Christmas processing. Neither recovery published a feed.
- Extended implementation: one shared unavailable-update predicate used by the producer, Christmas enrichment, uncategorized-product hiding and cross-supplier dedupe. Availability updates cannot compete as supplier offers, disappear through dedupe or be hidden for intentionally absent categories.
- Added an end-to-end regression over current XML plus synthetic same-EAN updates for all eight supplier names: execute all 13 shared category/dedupe/link steps twice, checking each unavailable record byte-for-byte after every step. Ordinary products remain subject to existing checks.
- Follow-up status: prepared pending CI, merge and fresh recovery runs. The first partial deployment is not considered incident recovery.

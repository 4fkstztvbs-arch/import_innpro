# PS-20260924-INNPRO-MANUFACTURER-CASE

- CHANGE_ID: PS-20260924-INNPRO-MANUFACTURER-CASE
- DATE: 2026-09-24
- ACTOR: Codex
- AREA: InnPro product-name transform validation
- URL/PAGE/SCOPE: Supplier feed generation; no storefront page fields written directly
- AFFECTED_PRODUCTS/PAGES: InnPro CODE `032606`, EAN `6973293802276` (Petkit Fresh Element SOLO)
- DESCRIPTION: Normalize manufacturer strings by trimming and case-folding for exact identity checks in the InnPro NAME override and validator. CODE, EAN, source/target name matching remain exact.
- REASON: Workflow run `36049337868` stopped at `Overiť schválené názvy InnPro`: supplier manufacturer was `PETKIT`, approved override expected `Petkit`; casing alone blocked the existing exact product-name override.
- HYPOTHESIS: Case-insensitive manufacturer identity matching will allow the approved NAME-only override while still rejecting a different manufacturer and preserving all other feed bytes.
- BASELINE: InnPro workflow run `36049337868`, job `107800667757`, failed with one `identity-or-name-mismatch`; two absent override rows were reported separately and were nonblocking.
- PRIMARY_METRIC: InnPro workflow and post-transform validator pass with the exact approved override applied.
- GUARDRAIL_METRICS: 5,596-item local feed snapshot unchanged in item count; only explicitly approved NAME nodes may differ; CODE/EAN, URLs, prices, availability, categories, images, parameters and all other XML bytes remain unchanged.
- IMPLEMENTATION: Add trim+lowercase normalization for manufacturer comparison in the InnPro override matcher and validator; add regression test for `Petkit`/`PETKIT` and wrong-brand rejection.
- FILES_CHANGED: `scripts/innpro-name-overrides.js`; `scripts/validate-innpro-name-overrides.js`; `scripts/test-innpro-name-overrides.js`; this ledger entry.
- COMMIT / PR: PR #54 merged to `main` at merge commit `3d6efc46301e76f021ca72427fbc8270397e3051`.
- APPROVAL / APPROVER: Explicit owner authorization in this conversation to fix, test, deploy to `main`, rerun InnPro and then run supplier imports sequentially.
- EXPERIMENT_ID: N/A (correctness fix)
- PRE_DEPLOY_VALIDATION: Focused Node test suite 7/7 passed; 5,596-item feed invariant reported; node syntax checks and `git diff --check` passed.
- DEPLOYED_AT: 2026-09-24 19:53 UTC (merge to `main`).
- POST_DEPLOY_VALIDATION: InnPro workflow run `36051580371` completed successfully. Post-transform name validator: `ok: true`, 431 present approved rows checked, no issues; absent rows `076184` and `085505` were nonblocking. Generated `output/innpro.xml` committed as `4559d6969bfa615a3ab00f13e585bae6c13178e6`.
- RESULT: The casing mismatch no longer blocks the approved Slovak NAME override; InnPro passed through XML generation and commit.
- DECISION: Keep trim+case-fold matching for manufacturer identity; retain exact CODE, EAN and name checks.
- ROLLBACK / ROLLBACK_COMMIT: Revert the scoped commit if CI or the InnPro output invariants fail; do not publish the failed feed.


## Sequential supplier import verification

After the corrected InnPro run passed, the remaining supplier sync workflows were run one at a time on `main`. All six completed successfully and committed their generated supplier XML:

| Supplier | Workflow run | Result | Output commit |
|---|---:|---|---|
| ATOS | `36052207225` | success | `a9dc32e54708f7f7aabc041ace62212171c6321d` |
| Penta | `36052650840` | success | `064fcc37cc84d4185c21752c74004a5a3ad09907` |
| K-B | `36052911431` | success | `eca41c88c9cd3db7b5bf73ac2c5b316274fef6b3` |
| MONACOR | `36053185298` | success | `69e8da7bf855686a9ca6e921151f633e64848c21` |
| Solight | `36053377625` | success | `329dbcbd1161b482e65199ebb6ef2208ef6fbcdd` |
| BASYS | `36053611085` | success | `fdf0db617e6bc2817e204c46164c38d2e5b8be19` |

Final observed `main` SHA: `fdf0db617e6bc2817e204c46164c38d2e5b8be19`.

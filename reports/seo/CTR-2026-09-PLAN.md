> Aktualizácia nasadenia: používateľ následne schválil nasadenie SEO zmien do importných súborov. Register je pripravený ako ACTIVE po čerstvom preflighte; historické označenia PREPARED_NOT_ACTIVE a chýbajúci súhlas nižšie dokumentujú predchádzajúci stav. Pozri CTR-2026-09-DEPLOYMENT.md.

# PremiumStore CTR experiment — CTR-2026-09

Status: **PREPARED_NOT_ACTIVE**. Do not merge, deploy or activate without explicit user approval.

The baseline is exclusively **2026-08-10 through 2026-09-16**, from the date-filtered GSC export. Pre-migration and three-month aggregates are excluded. See `ctr-baseline-evidence.json` for all 20 treatment and 20 control rows, workbook hash and source row numbers.

## Current implementation

- `data/seo/ctr-test-candidates.json` preserves the original cohort and GSC metrics. `code` is now raw supplier XML CODE; `shoptetCode` stores the separate storefront identity.
- `data/seo/ctr-test-overrides.json` stores proposed SEO text and supplier-specific mappings. Unresolved mappings block activation of the entire experiment, not merely the unresolved rows.
- `scripts/apply-seo-overrides.js` is the final OUT processing step in seven supplier workflows and both other automated OUT writers (Heureka pricing and product category corrections).
- The layer runs **after** deduplication, enrichment and product/category corrections, since those can modify SEO too. Direct manual transforms must be followed by the finalizer before publishing.
- Match exact supplier + raw CODE, and check EAN when available. Never strip prefixes heuristically, coerce numeric CODEs, fuzzy-match names or replace a variant.
- Only direct `SEO_TITLE` and `META_DESCRIPTION` elements may change. All other feed content is preserved byte-for-byte.
- Inactive/paused runs do not write feed files. Controls never receive overrides.
- Strict preflight rejects missing or ambiguous identities before any write. During an active daily experiment, missing/duplicate/mismatching identities are skipped with an Actions warning so that fresh prices and availability can continue; no stale product is restored.
- Invalid active registry/XML aborts publication. Atomic replacement is per file; workflows commit only after successful finalization.

## Activation requirements

Recheck all 20 treatment products and 20 controls in cohort revision 2 against fresh OUT and storefront identity. All 40 identities are verified as of the audit; the original cohort audit remains in archive-r1. Address any newly changed/unavailable URLs and verify Shoptet SEO updates for existing cards in a nonproduction environment. Obtain explicit user approval, record its reference, run strict preflight on fresh OUT, and review the resulting SEO-only diff before enabling the registry. Preparation alone grants no production authorization.

Current blockers and complete supplier inventory are in `CTR-2026-09-VALIDATION.md`. A preparation CI pass does **not** mean activation readiness. `node scripts/validate-seo-overrides.js --require-ready` currently exits nonzero as intended.

## Measurement and rollback

Keep baseline clicks, impressions, CTR and average position tied to the original URL. Evaluate CTR together with position, availability and redirect changes. Do not silently merge MOZA's redirected URL into the baseline. Missing pages are experimental attrition, not zero-CTR observations. Revision 2 uses 20 traffic-paired controls with deterministic pseudorandom arm assignment. They are not matched on category, query or supplier; this remains an exploratory low-traffic pilot. The complete fixed measurement plan and 20 SEO drafts are in CTR-2026-09-COHORT-R2.md.

Pause overrides with `PAUSED`; normal SEO generation returns on the next supplier regeneration. An immediate rollback must restore only the previous SEO fields after validating the same identity, never publish an old whole feed with stale price or stock.

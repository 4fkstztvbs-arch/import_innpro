# PS-20260923-COMPUTERS-MOBILES-NAME-BATCH

- Source: `navrhy-nazvov-komplet-2026-09-23.csv`
- Source SHA-256: `09b85be5e6c2e74e1d8584fe4e107bcbe255cbe0683a442c999f554914f291b6`
- Input: 2,941 unique product identities across ATOS, InnPro, K-B, Penta and Solight.
- Processing: 2,111 proposed names equal their source names and require no transformation. 798 changed-name rows were added to the central identity-guarded registry after preserving existing approved rows and excluding already-owned InnPro overrides. One changed InnPro identity is absent from the current feed snapshot; it remains guarded by exact CODE/EAN/source name and will apply only if it returns.
- CTR protection: the name transform now automatically skips every identity in both active CTR treatment and control groups. No candidate row overlaps the current CTR cohort.
- Pipeline: localization runs after SEO processing in the five supplier workflows; validators verify NAME-only diffs. Drift or missing identities are not rewritten; the new large-batch workflow calls are non-blocking for individual source-name drift.
- Snapshot test: 797 new names matched and applied across current feeds; 1 InnPro product missing. Overall feed validation passed for ATOS, InnPro, K-B, Penta and Solight. Unit tests cover all five suppliers and CTR exclusion.
- Scope: product NAME only. No description, image, category, URL, CODE, EAN, price, CPC, availability, tracking, checkout or payment changes.
- Deployment state: pending PR merge and next scheduled supplier runs; Shoptet import persistence remains PENDING until checked on 2026-09-24.

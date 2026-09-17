# PremiumStore CTR experiment — CTR-2026-09

Status: **PREPARED_NOT_ACTIVE**

## Baseline
Only post-migration Google Search Console data is valid for this experiment.

- from: 2026-08-10
- to: 2026-09-16
- migration/new storefront start: 2026-08-10

Do not mix pre-2026-08-10 GSC data into the baseline.

## Objective
Identify repeatable SEO title/meta-description patterns that increase organic clicks at comparable Google positions. The goal is not merely to find individual winning products, but rules that can later be applied safely to a larger part of the 20k+ product catalogue.

## Deployment design
1. Select 20–30 products with meaningful impressions, preferably average positions 3–15 and underperforming CTR.
2. Keep a comparable untouched control group.
3. Resolve every candidate to exact PremiumStore URL + product CODE/EAN before activation.
4. Store experimental SEO values in `data/seo/ctr-test-overrides.json`.
5. Match overrides by CODE, never by mutable product name.
6. Apply overrides after normal SEO generation but before SHOPITEM XML serialization.
7. Override only SEO_TITLE and META_DESCRIPTION. Price, stock, availability, images, categories and other normal daily-import fields must continue updating.
8. Log expected/applied/missing override counts on every run.
9. Treat missing products or duplicate CODEs as warnings/errors; never silently lose an experiment member.
10. Validate generated XML before deployment and inspect the diff.

## Safety
The registry is intentionally `PREPARED_NOT_ACTIVE`. Merely merging the registry must not alter production output. Activation requires explicit integration in the transformer plus populated, verified product records.

## Measurement
For each experimental URL retain baseline clicks, impressions, CTR and average position, plus primary query metrics where available. Evaluate CTR changes only together with position changes. Google may rewrite title links/snippets, so observed SERP output should be checked during evaluation.

## Initial controls / references
Known strong performers from the post-migration GSC export should remain untouched during the first experiment, including POCO F9 Ultra and MOVA V70 Ultra Complete. Do not use Yamaha A-S2200 as a weak-CTR test page without re-checking page-level performance; its page-level CTR was already comparatively strong in the baseline analysis.

## Next implementation step
Populate a verified candidate/control dataset, then add a small `seo-overrides` module and tests. Only after test XML passes should a PR be proposed for production deployment.

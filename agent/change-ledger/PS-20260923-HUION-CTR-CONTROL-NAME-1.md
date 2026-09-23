# PS-20260923-HUION-CTR-CONTROL-NAME-1

- CHANGE_ID: PS-20260923-HUION-CTR-CONTROL-NAME-1
- DATE: 2026-09-23
- ACTOR: Codex coordinator
- AREA: InnPro product display NAME transform; active SEO CTR control protection
- SCOPE: One Huion `NAME` improvement and removal of one newly added name override that intersected a frozen control. No other supplier fields or product content.
- AFFECTED_PRODUCTS:
  - Huion Note X10, CODE `077163`, EAN `6930444802608`: `Digitálny notebook Huion Note X10` -> `Digitálny zápisník Huion Note X10`.
  - Flytec V803 GPS 5 200 mAh, CODE `083984`, EAN `5905156102125`: remove name override before next scheduled import so the active CTR control retains supplier name `Flytec V803-GPS 5200mAh loď na návnadu`.
- EVIDENCE:
  - GSC query/page for Huion Note X10: 22 impressions, 1 click, average position 11.14 for settled 2026-09-14–20; exact model wording.
  - Official Huion product page identifies Note X10 as a smart/digital notebook: https://www.huion.com/b2b/products/educational/Huion-Note-X10
  - Frozen CTR cohort audit confirms Flytec CODE `083984` is in controls, not treatment. Cohort began 2026-09-18; its name override was added 2026-09-23. Pre-override supplier NAME was present on 2026-09-22. The next import must not introduce this confound.
- IMPLEMENTATION: exact CODE/EAN/manufacturer/sourceName guarded `NAME` row only for Huion; remove only CODE `083984` override. URL, CODE, EAN, category, description, images, price, CPC, tracking, availability and all non-NAME fields remain unchanged.
- VALIDATION: local name-override test suite passed 5/5 with 5,596 feed items, 115 exact names and non-NAME byte preservation before combining with the CTR exclusion. CI must rerun on the PR with the combined 114-name registry; inspect the post-transform output. No live Shoptet import has yet been verified.
- STATUS: Prepared; merge and overnight import/live verification pending.
- ROLLBACK: revert this exact CODE/EAN-scoped diff only. If the approved Huion identity guard drifts, fail closed. Keep Flytec 083984 excluded until the frozen CTR experiment closes.

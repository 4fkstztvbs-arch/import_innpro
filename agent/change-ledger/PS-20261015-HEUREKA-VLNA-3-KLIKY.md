# PS-20261015-HEUREKA-VLNA-3-KLIKY

- CHANGE_ID: PS-20261015-HEUREKA-VLNA-3-KLIKY
- DATE: 2026-10-15
- ACTOR: Claude (agent), na pokyn majiteľa
- AREA: Heureka CPC feed (HEUREKA_HIDDEN), PNO
- SCOPE: data/heureka-reports/cpc-hidden-products.json (+84 položiek, vlna 1)
- DESCRIPTION: Skrytie produktov s aspoň 3 klikmi a 0 objednávkami v CPC reporte 1.–15.10.2026 (bez už skrytých a bez EAN). 55 produktov, ktoré sú cenovo na 1. mieste (naša cena <= najlacnejší iný predajca z price-targets.json), má expiresAt 2026-10-18 (uvoľnia sa po 3 dňoch). 29 produktov, ktoré na 1. mieste nie sú, ostáva skrytých (expiresAt 2026-12-28) do rozhodnutia o ďalšej vlne.
- REASON: PNO 10,6 % (1.–15.10.), 94 % nákladu na položkách bez objednávky.
- HYPOTHESIS: PNO spätne ~6,6 %; po uvoľnení cenovo 1. položiek sa overí, či predávajú.
- BASELINE: 1.–15.10.: 52 objednávok, 544 € bez DPH, PNO 10,6 %, 10,46 €/obj.
- PRIMARY_METRIC: PNO a náklad na objednávku z CPC reportu.
- GUARDRAIL_METRICS: objednávky z Heureky za týždeň (nesmú klesnúť o viac ako ~10 %).
- APPROVAL / APPROVER: majiteľ, 2026-10-15 („dajme to na 3 kliky a pravidlo držme 3 dni… rovno pushnúť do main“)
- DEPLOYED_AT: pri najbližších behoch dodávateľov po commite.
- POST_DEPLOY_VALIDATION: 18.10. uvoľnenie 55 cenovo 1. položiek, porovnať predaje; ak sa nepohnú, skryť v ďalšej 3-dňovej vlne.
- ROLLBACK: odstrániť položky s "wave": 1 z cpc-hidden-products.json.

# PS-20261022-HEUREKA-TEST-VYLUCENIA-7D

- CHANGE_ID: PS-20261022-HEUREKA-TEST-VYLUCENIA-7D
- DATE: 2026-10-22
- ACTOR: Claude (agent), na pokyn majiteľa
- AREA: Heureka – CPC vylúčenia (HEUREKA_HIDDEN), týždenný test
- URL/PAGE/SCOPE: data/heureka-reports/cpc-hidden-products.json
- AFFECTED_PRODUCTS/PAGES: 86 produktov (53 nových, 33 so skončenou platnosťou predĺžených); 9 už platných nezmenených; produkty z Black Friday výpredaja nie sú zahrnuté
- DESCRIPTION: Pridanie produktov s klikmi a nákladom bez objednávky z Heureka reportu 1.–22.10.2026 do zoznamu vylúčení s platnosťou 7 dní (expiresAt 2026-10-29).
- REASON: Heureka PNO 9,0 % pri hranici ziskovosti ~11–12 %; 156 navrhnutých produktov (skupiny A/B) nemalo objednávku, spolu ~335 € nákladov s DPH, z toho nevylúčené ~225 €.
- HYPOTHESIS: Vylúčenie zníži PNO a náklad bez poklesu objednávok.
- BASELINE: ~4,1 obj./deň, PNO 8,98 %, náklad ~41 €/deň (Heureka, október 2026).
- PRIMARY_METRIC: PNO Heureky 23.–29.10. oproti baseline.
- GUARDRAIL_METRICS: Počet objednávok z Heureky; pri poklese nad ~15 % test zrušiť.
- IMPLEMENTATION: Úprava JSON zoznamu; HEUREKA_HIDDEN sa prepočíta pri najbližšom behu sync workflow dodávateľov. Záloha pôvodného súboru mimo repozitára.
- FILES_CHANGED: data/heureka-reports/cpc-hidden-products.json, agent/change-ledger/PS-20261022-HEUREKA-TEST-VYLUCENIA-7D.md
- COMMIT / PR: priamo do main
- APPROVAL / APPROVER: majiteľ e-shopu, 2026-10-22 v konverzácii („ano over to, zluc a dopln“)
- EXPERIMENT_ID: —
- PRE_DEPLOY_VALIDATION: node --test scripts/tests/heureka-cpc-exclusions.test.js scripts/tests/heureka-price-margin.test.js (8/8); JSON validný (1449 záznamov); žiadny produkt nie je vo výpredaji ani v BF allowliste
- DEPLOYED_AT: pri najbližšom sync behu
- POST_DEPLOY_VALIDATION: overiť HEUREKA_HIDDEN vo feedoch pre pridané EAN
- RESULT: zatiaľ nevyhodnotené
- DECISION: vyhodnotiť po 29.10.
- ROLLBACK / ROLLBACK_COMMIT: vrátiť zálohu cpc-hidden-products.json alebo revert commitu

Poznámka: 6 produktov bez EAN vo feede sa nedá vylúčiť cez tento zoznam. 9 produktov z návrhu už malo platný záznam (8 z nich je vo feede vypredaných/detailOnly).

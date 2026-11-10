# PS-20261110-HEUREKA-VLNA-CPC-VYLUCENIA

- CHANGE_ID: PS-20261110-HEUREKA-VLNA-CPC-VYLUCENIA
- DATE: 2026-11-10
- ACTOR: Claude (agent), na pokyn majiteľa
- AREA: Heureka – CPC vylúčenia (HEUREKA_HIDDEN)
- URL/PAGE/SCOPE: data/heureka-reports/cpc-hidden-products.json
- AFFECTED_PRODUCTS/PAGES: 344 nových produktov (0 objednávok, ≥3 kliky v reporte 10.8.–10.11.2026); 220 záznamov s platnosťou do 12.11. predĺžených do 2027-01-05; 2 záznamy s objednávkou uvoľnené; 1 108 záznamov bez zmeny; 2 produkty vo výpredaji (data/vypredaj.json) vynechané
- DESCRIPTION: Obnova zoznamu vylúčení podľa kompletného Heureka CPC reportu 10.8.–10.11.2026. EAN doplnené na 13 miest.
- REASON: Heureka PNO za 7 dní ~18,9 % pri cieli pod 8 %; nepredávané produkty míňajú kredit. Bez predĺženia by 220 vylúčení skončilo 12.11. (náklad pred skrytím ~273 €).
- HYPOTHESIS: Vylúčenie zníži 28-dňové PNO z ~7,3 % na ~5,3 % bez straty objednávok (produkty mali 0 objednávok za 3 mesiace).
- BASELINE: 28 dní: náklad ~909 €, obrat ~12 428 €, PNO 7,3 %; posledných 7 dní PNO ~18,9 %.
- PRIMARY_METRIC: PNO Heureky (7 a 28 dní) po nasadení
- GUARDRAIL_METRICS: počet objednávok z Heureky; pri poklese nad ~15 % prehodnotiť
- IMPLEMENTATION: Úprava JSON zoznamu; HEUREKA_HIDDEN sa prepočíta pri najbližšom nočnom sync workflow dodávateľov.
- FILES_CHANGED: data/heureka-reports/cpc-hidden-products.json, agent/change-ledger/PS-20261110-HEUREKA-VLNA-CPC-VYLUCENIA.md
- COMMIT / PR: PR z vetvy heureka-vlna-20261110
- APPROVAL / APPROVER: majiteľ e-shopu, 2026-11-10 v konverzácii („Commit a PR“)
- EXPERIMENT_ID: —
- PRE_DEPLOY_VALIDATION: JSON validný (1 669 záznamov, 13-miestne EAN); node testy nespustené (node nie je nainštalovaný)
- DEPLOYED_AT: —
- POST_DEPLOY_VALIDATION: overiť HEUREKA_HIDDEN vo feedoch pre pridané EAN
- RESULT: zatiaľ nevyhodnotené
- DECISION: vyhodnotiť po ~14 dňoch
- ROLLBACK / ROLLBACK_COMMIT: revert commitu

Poznámka: 10 produktov označených ako skryté malo za posledných 14 dní náklad 21,6 € (oneskorenie feedu alebo príznak sa nepremietol); neskúmané.

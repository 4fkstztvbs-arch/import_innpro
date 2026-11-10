# PS-20261110-CONTENT-CLEANUP-BATCH

- CHANGE_ID: PS-20261110-CONTENT-CLEANUP-BATCH
- EXPERIMENT_ID: –
- DATE: 2026-11-10
- ACTOR: Claude (agent) pripravil dávky; import do Shoptetu je na majiteľovi
- AREA: obsah produktov – `name`, `seoTitle`, váha
- URL/PAGE/SCOPE: 687 produktov (názov a SEO title), 2 696 produktov (váha)
- DESCRIPTION:
  - Názvy: 333 českých alebo všeobecných názvov („Príslušenstvo…“, „Produkt…“) prepísaných do slovenčiny, 13 tabletov s chybou „červenými“ namiesto „Redmi“, zvyšok je odstránenie prípony s katalógovým kódom z názvu. SEO title je nový názov skrátený na 70 znakov.
  - Váhy: hmotnosť výrobku vytiahnutá z popisu skriptom `scripts/audit-shoptet-export.js`.
- REASON: audit exportu 10. 11. 2026; majiteľ žiadal slovenské názvy, dočistenie názvov a váhu z textu.
- HYPOTHESIS: –
- BASELINE: export produktov z 10. 11. 2026; počty v `reports/shoptet-export-audit/summary.json`
- PRIMARY_METRIC: počty `nameCzech`, `nameGeneric`, `nameCodeSuffix`, `weightMissing` v ďalšej týždennej kontrole
- GUARDRAIL_METRICS: URL, kód, EAN, cena, dostupnosť a kategórie bez zmeny; žiadne duplicitné názvy
- IMPLEMENTATION: CSV import (aktualizácia existujúcich produktov) zo súborov v `migrations/obsah-2026-11-10/`
- FILES_CHANGED: `migrations/obsah-2026-11-10/import-nazvy-seo-2026-11-10.csv`, `migrations/obsah-2026-11-10/import-vahy-2026-11-10.csv`, `scripts/audit-shoptet-export.js`, `reports/shoptet-export-audit/`
- APPROVAL / APPROVER: majiteľ, 2026-11-10 („máš povolenie opraviť všetko, čo sa dá“)
- PRE_DEPLOY_VALIDATION: nový názov nie je duplicitný s iným produktom (41 názvov preto vynechaných), bez českých znakov, do 120 znakov; žiadny produkt z CTR-2026-09 v dávke názvov. Váhy: vynechané váhy (prístroje), balenia viacerých kusov, nosnosť, váživosť, údaj za jeden kus.
- DEPLOYED_AT: názvy a SEO title 2026-11-10 (CSV import majiteľom; spracované 687, upravené 686 – jeden názov bol už zapísaný cez pripojenie Shoptet). Váhy: nenasadené (pripravené)
- POST_DEPLOY_VALIDATION: čerstvý export po importe – 687 z 687 názvov aj SEO title zodpovedá dávke; mimo dávky sa zmenilo len 5 názvov z pilotu PS-20261110-MCP-CONTENT-PILOT; počet produktov nezmenený (31 251 riadkov)
- RESULT: –
- DECISION: –
- ROLLBACK: reimport pôvodných názvov a SEO title z exportu 10. 11. 2026; váhy vynulovať importom `code;weight` s hodnotou 0

## Známe obmedzenia

- Váhy sú hmotnosti výrobku, nie zásielky s obalom. Kontrola vzorky našla jednotlivé chyby (iný údaj označený slovom „hmotnosť“); po sprísnení pravidiel môže v dávke ostať malý podiel nesprávnych hodnôt.
- 41 názvov ostalo bez zmeny: po odstránení kódu by boli duplicitné (napr. zásuvky Solight, ovládače Alien) alebo chýba údaj o type produktu (`KB_100002202292`).
- `AT_ATO-OR-PSU-1669`: názov uvádza model OR-PSU-1674 (3,2 A, 77 W), popis OR-PSU-1669 (1 A, 24 W). Preložený je názov, rozpor treba overiť u dodávateľa.
- SEO title a meta popis týchto produktov, ktoré vznikli z pôvodného českého názvu, sa menia len v časti SEO title.

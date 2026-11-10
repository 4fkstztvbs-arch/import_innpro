# PS-20261110-WEIGHT-ESTIMATE

- CHANGE_ID: PS-20261110-WEIGHT-ESTIMATE
- DATE: 2026-11-10
- ACTOR: Claude (agent) pripravil dávku; import do Shoptetu je na majiteľovi
- AREA: obsah produktov – hmotnosť variantu (odhad)
- AFFECTED_PRODUCTS/PAGES: 13 370 produktov bez váhy (z 14 367); 997 ostáva bez váhy (žiadna porovnateľná skupina)
- DESCRIPTION: odhad hmotnosti zo `scripts/estimate-weights.js`. Dôležité je len rozlíšenie nad/pod 15 kg (hranica dopravcu pre veľké a ťažké zásielky):
  - 41 produktov ATOS: skutočná hmotnosť balenia z i6ws `StiPacking_El` (`data/atos-packing.json`),
  - 35 produktov so záťažou v názve (činky, závažia, vesty): číslo z názvu,
  - zvyšok: podľa podobných produktov (palce, kWh, Ah, W, l), typu produktu a kategórie.
  - Nad 15 kg je 69 produktov (televízory, sporáky, rúry, sušičky bielizne, PA reproduktory, činky, trenažéry...). Pri odhade zo skupiny je hodnota 16 kg (len „nad hranicou“), pri televízoroch a činkách konkrétny odhad.
  - Pod 15 kg sú odhady medián podobných produktov, najviac 14,5 kg.
- VALIDATION (spätný test na 4 103 produktoch so známou váhou, odhad bez ich vlastnej váhy): 95,7 % na správnej strane hranice 15 kg; zo 342 ťažkých sa rozpoznalo 193 (56 %); 29 ľahkých bolo omylom označených za ťažké (0,8 %); 58 % odhadov v rozmedzí polovica až dvojnásobok skutočnej váhy.
- RIZIKO: asi 44 % ťažkých produktov sa neodhalí; v chýbajúcej množine je ťažkých produktov menej ako v známej (prevažuje drobný tovar), ale presný počet nie je známy. Zoznam `report-odhad-2026-11-10.csv` má stĺpce metóda, počet referenčných produktov a `over15`.
- Odhady sú hodnoty, nie merania. Po importe sa dajú nahradiť skutočnými váhami rovnakým súborom `code;weight`.
- FILES_CHANGED: `scripts/estimate-weights.js`, `scripts/fetch-atos-packing.js`, `.github/workflows/atos-i6ws-discovery.yml` (režim packing), `data/atos-packing.json`, `migrations/obsah-2026-11-10/import-vahy-odhad-2026-11-10.csv`, `migrations/obsah-2026-11-10/report-odhad-2026-11-10.csv`
- APPROVAL / APPROVER: majiteľ, 2026-11-10 („odhadom sa spraviť môžu, rozdiel je váha nad 15 kg“)
- DEPLOYED_AT: nenasadené (pripravené)
- ROLLBACK: importom `code;weight` s hodnotou 0 pre kódy z `import-vahy-odhad-2026-11-10.csv`

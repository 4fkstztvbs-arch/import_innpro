# PS-20261012-HEUREKA-CONVERSION-RULES

- CHANGE_ID: PS-20261012-HEUREKA-CONVERSION-RULES
- DATE: 2026-10-12
- ACTOR: Claude (agent), na pokyn majiteľa
- AREA: Heureka CPC feed (HEUREKA_HIDDEN), konverzný pomer
- URL/PAGE/SCOPE: output/*.xml, data/heureka-reports/cpc-hidden-products.json
- AFFECTED_PRODUCTS/PAGES: A) ~1 350 produktov (drahší o >20 %, nad 1 000 €, kategórie Fotovoltika/Hi-Fi komponenty, ATOS bez nákupnej ceny); MONACOR počíta s odhadom marže 20 % a WiiM je z pravidiel vyňatý (majiteľ 2026-10-12, pevné ceny); B) 290 položiek zoznamu CPC vylúčení
- DESCRIPTION:
  A) Nový krok scripts/apply-heureka-conversion-rules.js (pravidlá v scripts/heureka-conversion-rules.json) skryje z Heureka CPC: naša cena o >20 % nad najlacnejším iným predajcom (podľa posledného reportu), cena od 1 000 €, Heureka kategórie Fotovoltika a Hi-Fi komponenty, produkty bez nákupnej ceny. Výnimky: keepEans, pilot InnPro. Beží po každom spracovaní Heureka reportu a na konci každého behu dodávateľa (finalize-feed, BASYS, WiiM). Len pridáva HEUREKA_HIDDEN; návrat pri nočnom behu dodávateľa.
  B) Vylúčenia z 22.8., 26.8. a 3.9. (platnosť 17.10./21.10./29.10.) bez objednávky v Shoptete od vylúčenia predĺžené cez expiresAt do 2026-12-28 (290). 12 produktov s objednávkou necháme vypršať (vrátia sa na Heureku).
- REASON: CPC report 13.9.–12.10.2026 — viditeľné produkty CR 6,0 %; tieto skupiny 327 klikov, 110 € (17 % nákladov), 4 objednávky, hrubý zisk 31 €.
- HYPOTHESIS: Náklady na Heureku −15 až −20 %, objednávky −3 %, CR viditeľných produktov 6,0 % → ~6,8 %.
- BASELINE: 5.–11.10.: 835 klikov, 243 € bez DPH, 32 objednávok v Shoptete (referer heureka), CR 3,8 %, 7,6 €/obj.
- PRIMARY_METRIC: Konverzný pomer Heureky (objednávky Shoptet / kliky CPC reportu), náklad na objednávku.
- GUARDRAIL_METRICS: Počet objednávok z Heureky za týždeň (nesmie klesnúť o viac ako ~10 %), hrubý zisk z Heureky.
- IMPLEMENTATION: viď DESCRIPTION
- FILES_CHANGED: scripts/apply-heureka-conversion-rules.js, scripts/heureka-conversion-rules.json, scripts/tests/heureka-conversion-rules.test.js, .github/actions/finalize-feed/action.yml, .github/workflows/{heureka-price-report,basys-sync,wiim-sync}.yml, data/heureka-reports/cpc-hidden-products.json
- COMMIT / PR: priamo do main (tento commit)
- APPROVAL / APPROVER: majiteľ, 2026-10-12 („skúsme nasadiť body A aj B s vyhodnocovaním po každej zmene heureka reportu“)
- EXPERIMENT_ID: —
- PRE_DEPLOY_VALIDATION: test scripts/tests/heureka-conversion-rules.test.js (2/2); suchý beh na aktuálnych output/*.xml.
- DEPLOYED_AT: Heureka workflow po tomto commite + nočné behy dodávateľov 2026-10-12
- POST_DEPLOY_VALIDATION: denné sledovanie; vyhodnotiť ~26.10. (2 týždne) z nového CPC reportu
- RESULT: zatiaľ nevyhodnotené
- DECISION: —
- ROLLBACK / ROLLBACK_COMMIT: revert tohto commitu (pravidlá sa prestanú uplatňovať pri najbližšom behu dodávateľa); jednotlivé pravidlo vypnúť v heureka-conversion-rules.json (0 / false / prázdny zoznam).

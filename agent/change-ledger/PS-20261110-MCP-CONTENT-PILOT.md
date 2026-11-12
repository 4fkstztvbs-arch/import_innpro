# PS-20261110-MCP-CONTENT-PILOT

- CHANGE_ID: PS-20261110-MCP-CONTENT-PILOT
- EXPERIMENT_ID: –
- DATE: 2026-11-10
- ACTOR: Claude (agent), priamy zápis cez pripojenie Shoptet (`product_update`)
- AREA: obsah produktov – `name`, `metaTitle`, `metaDescription`, váha variantu
- URL/PAGE/SCOPE: 12 produktov (5 nových K-B so surovým názvom dodávateľa, 7 produktov bez váhy vrátane najpredávanejších)
- DESCRIPTION: pilot zápisu cez pripojenie Shoptet namiesto CSV importu. Fakty len z existujúceho popisu produktu v e-shope. URL, kódy, EAN, ceny, dostupnosť, kategórie a popisy sa nemenili.
- REASON: audit exportu 10. 11. 2026 – 17 072 produktov bez váhy, 106 nových produktov K-B bez meta popisu a so surovým názvom.
- HYPOTHESIS: zápis cez pripojenie vydrží nočný import (názov a SEO podľa doterajšej skúsenosti áno; váha je neoverená).
- BASELINE: export produktov z 10. 11. 2026 (pôvodné hodnoty v tabuľke nižšie)
- PRIMARY_METRIC: hodnoty po najbližšom nočnom importe sú rovnaké ako zapísané
- GUARDRAIL_METRICS: URL bez zmeny; cena, dostupnosť a viditeľnosť bez zmeny
- IMPLEMENTATION: `product_update` po jednom produkte
- FILES_CHANGED: iba tento záznam
- APPROVAL / APPROVER: majiteľ upozornil na možnosť zápisu cez pripojenie Shoptet, 2026-11-10
- PRE_DEPLOY_VALIDATION: dĺžky (title do 70, meta do 160 znakov), čísla v textoch sú v zdrojovom popise
- DEPLOYED_AT: 2026-11-10 ~07:51 (Europe/Bratislava)
- POST_DEPLOY_VALIDATION: `KB_100001937696` prečítaný späť – názov, title, meta a váha 0,147 zapísané, URL `/sony-whch520b-ce7-cerna/` nezmenená. Ostatných 7 potvrdených len odpoveďou zápisu.
- RESULT: zapísané; trvácnosť po nočnom importe zatiaľ neoverená
- DECISION: po kontrole 11. 11. 2026 rozhodnúť, či váhu písať do Shoptetu alebo do feedu
- ROLLBACK: zapísať späť pôvodné hodnoty z tabuľky cez `product_update`

## Zmeny

| Kód | Pôvodný názov | Nový názov | Váha (kg) |
|---|---|---|---|
| KB_100002076222 | Remington D3171GP | Sušič vlasov Remington D3171GP, 2 200 W, sada s kefou a taškou | – |
| KB_100002073645 | Niceboy ION Charles i10 černá | Robotický vysávač Niceboy ION Charles i10, 3v1, LiDAR, 3 500 Pa, čierny | – |
| KB_100002073649 | Niceboy ION Charles i6 černá | Robotický vysávač Niceboy ION Charles i6 s mopom, čierny | – |
| KB_100001937696 | SONY WHCH520B.CE7 černá | Bezdrôtové slúchadlá Sony WH-CH520, Bluetooth 5.2, výdrž až 50 h, čierne | 0 → 0,147 |
| KB_100002141055 | Niceboy Sora Black | Bezdrôtové slúchadlá na uši Niceboy Sora, AUX, čierne | 0 → 0,176 |
| AT_ABL-16-51-098 | bez zmeny | – | 0 → 2,1 |
| AT_TIP-08811161 | bez zmeny | – | 0 → 0,27 |
| AT_EMO1013302001 | bez zmeny | – | 0 → 0,136 (2 ks po 68 g; pôvodne zapísané 0,068, opravené v ten istý deň) |
| AT_2155 | bez zmeny | – | 0 → 4,6 |
| AT_ELE-1020001 | bez zmeny | – | 0 → 0,55 |
| AT_TOC-SX306503 | bez zmeny | – | 0 → 0,024 |
| KB_100002134243 | bez zmeny | – | 0 → 0,35 (zdroj: alza.hu, nie je isté, či s batériami) |

Pri piatich produktoch K-B boli `metaTitle` aj `metaDescription` pôvodne prázdne.

## Otvorené body

- Váhy sú hmotnosti výrobku z popisu, nie hmotnosti zásielky s obalom.
- `KB_100001937696` nemá v e-shope žiadny obrázok.

## Kontrola po nočnom importe (2026-11-12, čerstvý export)

- POST_DEPLOY_VALIDATION: všetkých 5 pilotných produktov K-B má zapísaný názov, SEO title aj meta popis; všetkých 9 zapísaných váh (AT_ABL-16-51-098, AT_TIP-08811161, AT_EMO1013302001, AT_2155, AT_ELE-1020001, AT_TOC-SX306503, KB_100001937696, KB_100002134243, KB_100002141055) je nezmenených.
- RESULT: zápis cez pripojenie Shoptet vydržal nočný import (aspoň jeden cyklus).
- DECISION: pri produktoch ATOS a K-B sa váhy nečistia; pri MONACOR áno (pozri PS-20261110-CONTENT-CLEANUP-BATCH).

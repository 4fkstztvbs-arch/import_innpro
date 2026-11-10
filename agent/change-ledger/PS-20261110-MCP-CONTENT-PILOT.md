# PS-20261110-MCP-CONTENT-PILOT

- CHANGE_ID: PS-20261110-MCP-CONTENT-PILOT
- EXPERIMENT_ID: –
- DATE: 2026-11-10
- ACTOR: Claude (agent), priamy zápis cez pripojenie Shoptet (`product_update`)
- AREA: obsah produktov – `name`, `metaTitle`, `metaDescription`, váha variantu
- URL/PAGE/SCOPE: 8 produktov (5 nových K-B so surovým názvom dodávateľa, 3 ATOS bez váhy)
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
| AT_EMO1013302001 | bez zmeny | – | 0 → 0,068 |

Pri piatich produktoch K-B boli `metaTitle` aj `metaDescription` pôvodne prázdne.

## Otvorené body

- `AT_EMO1013302001` (batérie GP LR14, 2 ks): popis uvádza 68 g bez určenia, či ide o kus alebo balenie. Ak je to jeden kus, správna váha je 0,136 kg.
- Váhy sú hmotnosti výrobku z popisu, nie hmotnosti zásielky s obalom.
- `KB_100001937696` nemá v e-shope žiadny obrázok.

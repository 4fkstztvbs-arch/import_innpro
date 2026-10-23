# Heureka – ceny a recenzie

## Heureka — automatická úprava cien (ZAPNUTÁ od 2026-08-10)

Denne (21:00 UTC, `.github/workflows/heureka-price-report.yml`) sa spracuje Heureka sortiment report nahraný do `data/heureka-reports/` a pripraví sa `price-targets.json` (návrh, o koľko zvýšiť/znížiť cenu podľa konkurencie — pozri `reports/heureka-cenovy-navrh-*.md`). Tento návrh sa premieta do cien pri najbližšom nočnom behu dodávateľa (ATOS/InnPro/K+B/Solight).

- **Stav:** zapnuté (2026-08-10) pre ATOS, InnPro, K+B, Solight; od 2026-08-24 aj Penta. MONACOR zámerne nepoužíva (nemá heureka-price-targets prepojenie).
- **Zapnutie/vypnutie:** riadi sa premennou `HEUREKA_PRICE_OVERRIDE: '1'` v `env:` sekcii kroku "Run ... transform" v `.github/workflows/<dodavatel>-sync.yml`. Vypneš odstránením tej premennej (alebo zmenou hodnoty na čokoľvek iné než `'1'`).
- Detaily mechanizmu (floor 5 % marže, K+B výnimka, smer pohybu ceny) sú v `reports/prehlad-importov.md` sekcia 4.4.

## Heureka — recenzie produktov (`scripts/fetch-heureka-product-reviews.js`)

Sťahuje Heureka export recenzií jednotlivých produktov (nie recenzií obchodu) a spáruje ich s našimi produktmi cez EAN (rovnaký princíp ako `compare-heureka-prices.js` — Heureka vlastné ID produktu/objednávky nie je prenositeľné medzi behmi, EAN áno).

- **Zdroj:** `https://www.heureka.sk/direct/dotaznik/export-product-review.php?key=...` — posledných ~6 mesiacov recenzií, obnovuje sa na strane Heureky každých 6 hodín. Kľúč (32 znakov) treba vypýtať od podpory Heureky — nie je to ten istý kľúč/mechanizmus ako cenový sortiment report (ten sa sťahuje ručne ako CSV, bez kľúča).
- **Nastavenie:** GitHub secret `HEUREKA_PRODUCT_REVIEW_KEY`. Bez neho skript zlyhá s jasnou chybou.
- **Beh:** `.github/workflows/heureka-reviews.yml`, týždenne (pondelok 5:00 UTC) + ručne (`workflow_dispatch`). Výstup: `data/heureka-reviews.json` (zoznam produktov s `ean`, spárovaným `ourName`/`ourCode`, `avgRating` a poľom jednotlivých recenzií — autor, hodnotenie, pros/cons/summary, dátum).
- **Dôležité — toto NIE JE import do e-shopu.** Shoptet vie prijímať recenzie produktov len cez svoje REST API (vyžaduje registrovanú Aplikáciu s OAuth prístupom), nie cez XML feed, ktorý používa zvyšok tohto repozitára. `data/heureka-reviews.json` je zatiaľ len pripravené dáta — skutočné zapísanie recenzií do Shoptetu je ďalší krok, ktorý čaká na Shoptet API prístupové údaje.

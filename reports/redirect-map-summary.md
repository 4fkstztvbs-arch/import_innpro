# Mapovanie starých URL na nové (redirect plán)

Vygenerované: 2026-08-10T16:43:18.930Z

## Vstupy
- Starý Heureka export (premiumstore.sk, platforma SHOPTEC): **16628** produktov, **6377** s EAN.
- Nový katalóg (output/*.xml, aktuálne dodávateľské feedy): **24651** unikátnych EAN spolu, podľa dodávateľa: {"atos":10266,"innpro":6222,"kb":5211,"monacor":1771,"solight":1295}.

## Výsledok párovania (podľa EAN)
- **Spárované (produkt existuje v starom aj novom katalógu): 4808**
- **Vyradené z ponuky (boli v starom katalógu, už nie sú u žiadneho dodávateľa): 1569**
- **Nové produkty (v novom katalógu, v starom neboli — najmä InnPro, ktorého sme predtým nemali):** 19936, z toho podľa dodávateľa: {"atos":8514,"innpro":6222,"kb":4446,"monacor":153,"solight":601}

## Nová URL
Doplnená z Heureka feedu nového shopu (`https://806405.myshoptet.com/heureka/export/products.xml`, "Heureka - Rozšírený feed"), rovnaký princíp ako starý export — EAN aj skutočná URL v jednom súbore.
Zo 4808 spárovaných produktov sa novú URL podarilo dohľadať pre **4808** (stav `OK`); zvyšných **0** má stav `CAKA_NA_NOVU_URL` — EAN sa v Heureka feede nového shopu nenašiel (typicky produkt momentálne nedostupný/mimo skladu, Shoptet takéto produkty do feedu nezahŕňa). Tie sa doplnia pri ďalšom spustení tohto skriptu, keď budú dané produkty skladom.

`redirect-map-shoptet-import.csv` obsahuje 4808 riadkov v tvare fromUrl;toUrl;automatic (relatívne cesty, lomítko na konci) — pripravené na priamy import do **Marketing → Základné SEO → Presmerovanie adries (URL)**. Cieľová cesta je len relatívna (bez domény `806405.myshoptet.com`), takže bude fungovať aj po prepnutí na finálnu doménu `premiumstore.sk`.

## Vyradené produkty (1569)
Tieto EAN boli v starom katalógu, no žiadny dodávateľ ich už neposkytuje. Odporúčanie: buď 301 na najbližšiu kategóriu (ak majú stále dopyt/spätné odkazy), alebo nechať prirodzene padnúť na 404 — Google to pri vypredanom tovare toleruje. Zoznam je v `redirect-map.csv` so stavom `VYRADENY_Z_PONUKY`.

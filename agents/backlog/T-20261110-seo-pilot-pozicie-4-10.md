---
id: T-20261110-seo-pilot-pozicie-4-10
nazov: Pilot: titulky a meta pre produkty na pozíciách 4 až 10
rola: seo
stav: v-praci
priorita: 1
vytvoril: seo
vytvorene: 2026-11-10
zavisi-od: []
experiment: E-20261112-seo-pilot-pozicie-4-10
---

## Prečo

Stovky produktových stránok sú na pozíciách 4 až 10 s CTR okolo 3 %. Zmena titulku a meta je najrýchlejšia cesta ku klikom bez zmeny pozície.

## Čo spraviť

Vybrať 40 stránok s najviac zobrazeniami, rozdeliť na 20 TEST a 20 KONTROLA s podobnými zobrazeniami a pozíciou, založiť experiment `seo-skupiny` a upraviť TEST podľa pravidiel roly. Vynechať stránky z vlny obsahu.

## Hotové, keď

Experiment beží, zmeny sú v denníku, vyhodnotenie je naplánované.

## Priebeh

- 2026-11-10: Založené z prieskumu prvého dňa.
- 2026-11-12 (seo): Experiment pripravený (13 TEST, 14 KONTROLA; 40 stránok sa nenašlo, stránky z vlny CTR 2 a kategórie vylúčené). Zoznam v experiments/E-20261112-seo-pilot-pozicie-4-10-skupiny.csv. Ďalší krok: doplniť kódy (heureka reporty ich majú len pre 7 stránok, ostatné cez Shoptet), pre TEST pripraviť titulky a meta, zapísať do denníka zmien a do Shoptetu, potom experiment prepnúť na bezi. Štart 13. 11., vyhodnotenie 11. 12.
- 2026-11-12 (seo, 13:10): Dávka 1 zapísaná (Z-20261112-seo-pilot-1): Ottocast P3 Pro, GEEKOM A7 Max, Hori Racing Wheel Apex (len metaTitle a metaDescription). Zostáva 10 stránok TEST bez zápisu: bose earbuds, samsung qe65qn990f, hotwav a17 pro max, electrolux 600 sensicare, detektor kabelu la-1012, amiko mini hd365, ottocast cp82 u2 air pro, roborock saros 20 flow, carlinkit mini ultra 5, nokia streaming box 8000. GUID treba nájsť cez brandCode v products_list (product_search skenuje len prvých 1000 produktov). Experiment ostáva v stave pripraveny, kým nie je zapísaných aspoň 10 TEST stránok.

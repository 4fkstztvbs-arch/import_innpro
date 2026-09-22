# PENTA shortlist príležitostí — 2026-09-22

Cieľ: vybrať produkty s dobrým pomerom dopyt / konkurencia / zisk na objednávku a udržať ich cenovo konkurencieschopné na Heureke.

## Cenová bezpečnosť

- Pre **25 produktov v shortliste** je po novom finálna poistka **min. 5 % skutočnej hrubej marže** z netto predajnej ceny; ostatné PENTA produkty týmto pravidlom nemeníme.
- Statické bootstrap ceny sa používajú len pre vybrané produkty, ktoré ešte nie sú spoľahlivo zachytené denným Heureka reportom.
- Denný Heureka price target sa aplikuje až potom a má prednosť.
- Po ňom sa znovu aplikuje 5 % margin floor, takže Heureka target nemôže cenu stlačiť pod stopku.

## A. Overené produkty z dnešného Heureka reportu

Tieto produkty už majú reálne Heureka dáta a väčšina je aktuálne cenovo #1. Ich PENTA feed cena je už na správnej úrovni; nočný dynamický Heureka mechanizmus ich bude ďalej udržiavať.

| Produkt | PENTA cena | Hrubá marža | Heureka popularita | Predajcov | Pozícia |
|---|---:|---:|---:|---:|---:|
| G21 termoska nerezová 3,8 l | 41,50 € | 13,9 % | 41 | 10 | 1 |
| G21 FlowCup 1,2 l pieskovo béžový | 20,00 € | 12,2 % | 32 | 7 | 1 |
| G21 termoska 1 l zelená s rukoväťou | 18,00 € | 10,7 % | 41 | 8 | 1 |
| G21 termoska nerezová 2,5 l | 33,00 € | 13,4 % | 7 | 9 | 1 |
| G21 vákuovacia dóza 2 l marinovacia | 22,90 € | 14,0 % | 6 | 8 | 1 |
| Berlingerhaus BH-1256 20 cm | 28,50 € | 10,9 % | 7 | 11 | 1 |
| G21 termoska nerezová 1,2 l | 24,90 € | 13,9 % | 5 | 9 | 1 |
| Berlingerhaus BH-1931 28 cm | 47,50 € | 5,9 % | 5 | 7 | 1 |
| G21 termoska na jedlo 500 ml piesková | 20,00 € | 12,2 % | 5 | 8 | 1 |
| Sixtol Palm biele drevo 500 ml | 22,50 € | 10,5 % | 5 | 10 | 1 |
| G21 FlowCup 1,2 l levanduľový | 20,00 € | 12,2 % | 4 | 7 | 1 |
| G21 vákuovacia dóza nerez 1900 ml | 16,50 € | 13,4 % | 4 | 5 | 1 |
| Sixtol Vulcan biely lesk 350 ml | 18,50 € | 12,0 % | 4 | 7 | 1 |
| G21 FlowCup 1,2 l grafitovo modrý | 20,00 € | 12,2 % | 3 | 7 | 1 |
| G21 FlowCup 1,2 l eukalyptovo zelený | 20,00 € | 12,2 % | 3 | 7 | 1 |
| G21 termoska 1 l sivá s rukoväťou | 18,50 € | 13,1 % | 3 | 8 | 1 |
| Sixtol Palm svetlé drevo 500 ml | 22,00 € | 8,5 % | 4 | 8 | 1 |
| Sixtol Palm čierny lesk 500 ml | 22,90 € | 12,1 % | 2 | 11 | 1 |
| G21 termoska na jedlo 500 ml eukalyptová | **19,50 €** | 10,0 % | 3 | 8 | po sync cieľ #1 |
| Sixtol Vulcan čierny lesk 350 ml | 18,50 € | 12,0 % | 2 | 11 | 1 |

## B. Bootstrap high-value príležitosti

Tieto produkty majú dobrý zisk na objednávku a/alebo nízku konkurenciu. Keďže ešte nie sú spoľahlivo obsiahnuté v dennom PENTA/Heureka price-target reporte, dostali bootstrap cenu z live kontroly Heureky. Keď sa objavia v bežnom reporte, dynamický Heureka target ich prevezme.

| Produkt | Stará cena | Nová cena | Live Heureka min. | Hrubý zisk bez DPH | Hrubá marža |
|---|---:|---:|---:|---:|---:|
| G21 Bianca pec na pizzu 400 °C | 210,00 € | **204,50 €** | ~204,80 € | 21,11 € | 12,7 % |
| TP-Link Tapo C675D KIT | 267,00 € | **223,90 €** | 224,14 € | 19,50 € | 10,7 % |
| TP-Link Tapo RV30 Max Plus Gen2 | 228,50 € | **183,00 €** | 183,12 € | 7,78 € | 5,2 % |
| G21 Virtuous komorová vákuovačka | 464,90 € | **462,50 €** | 462,54 € | 55,69 € | 14,8 % |
| TP-Link Tapo C645D KIT | 229,50 € | **184,50 €** | 184,77 € | 8,30 € | 5,5 % |

## Neaktivovať agresívne

- GETI GWH02D: najlacnejšia Heureka ponuka je pod našou bezpečnou 5 % margin cenou. Produkt môže zostať v ponuke, ale nie je vhodný na cenový boj.
- Tapo C660 KIT a časť ďalších masových Tapo modelov: trh je už príliš stlačený a PENTA nákupka neumožňuje #1 bez príliš nízkej marže.
- CTEK: dopyt existuje, ale pri viacerých modeloch je cenový priestor veľmi úzky. Vhodnejšie na organický traffic/cross-sell než na agresívny PPC.

## Implementácia

- nový konfig: `data/penta-opportunity-prices.json` — 25 EAN v shortliste, z toho 6 s bootstrap cenou a všetkých 25 s 5 % margin ochranou
- nový helper: `scripts/penta-opportunity-prices.js`
- `transform-penta.js`: bootstrap target -> dynamický Heureka target -> finálny 5 % gross-margin clamp
- aktuálny `output/penta.xml` zostáva na **424 produktoch**; zmenených bolo iba 5 cien vyššie uvedených produktov

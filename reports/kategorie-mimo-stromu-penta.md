# Kategórie mimo stromu — penta

Kontrola z 2026-11-08 23:42 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Black Friday` | 64 | **bez kategórie** | Autochladnička G21 C&W 45 litrov, 12/230 V |
| `Black Friday > Kuchyňa` | 53 | **bez kategórie** | Kuchynský robot G21 Promesso Iron Grey |
| `Black Friday > Kuchyňa > Termosky a termohrnčeky` | 17 | **bez kategórie** | Termoska G21 na pitie, 500 ml, khaki zelená |
| `Black Friday > Kuchyňa > Mixéry a príslušenstvo` | 16 | **bez kategórie** | Mixér G21 VitalStick 800 W, Black |
| `Black Friday > Kuchyňa > Vákuovanie a dózy na potraviny` | 13 | **bez kategórie** | Vákuovačka G21 Onyx |
| `Black Friday > Auto a cestovanie > Autochladničky` | 10 | **bez kategórie** | Autochladnička G21 C&W 45 litrov, 12/230 V |
| `Black Friday > Auto a cestovanie` | 10 | **bez kategórie** | Autochladnička G21 C&W 45 litrov, 12/230 V |

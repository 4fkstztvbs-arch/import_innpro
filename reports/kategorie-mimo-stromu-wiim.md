# Kategórie mimo stromu — wiim

Kontrola z 2026-10-04 17:37 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `TV, foto, audio video > Audio technika` | 18 | **bez kategórie** | WiiM Amp Ultra Silver |
| `TV, foto, audio video > Audio technika > Reproduktory` | 8 | **bez kategórie** | WiiM Sound Black |

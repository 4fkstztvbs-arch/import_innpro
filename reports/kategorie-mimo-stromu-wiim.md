# Kategórie mimo stromu — wiim

Kontrola z 2026-09-13 20:15 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `TV, audio a video > Audio technika > HiFi komponenty > Zosilňovače` | 7 | **bez kategórie** | WiiM Amp Ultra Silver |
| `TV, audio a video > Audio technika > Reproduktory > Aktívne reproduktory` | 6 | **bez kategórie** | WiiM Sound Black |
| `TV, audio a video > Audio technika > HiFi komponenty` | 5 | **bez kategórie** | WiiM Ultra Silver |
| `TV, audio a video > Audio technika > Stojany pre reproduktory a slúchadlá` | 4 | **bez kategórie** | WiiM Sound Wall Mount Black |
| `TV, audio a video > Audio technika > Soundbary` | 3 | **bez kategórie** | WiiM Bar Matt Black |
| `TV, audio a video > Audio technika > Reproduktory` | 2 | **bez kategórie** | WiiM Sub Pro Black |
| `TV, audio a video > Audio technika > Príslušenstvo k audio technike` | 2 | **bez kategórie** | WiiM Remote Black |

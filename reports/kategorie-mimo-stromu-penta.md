# Kategórie mimo stromu — penta

Kontrola z 2026-11-27 02:50 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Telefóny, TV a audio` | 48 | **bez kategórie** | Prijímač BOYA BY-WM3U bezdrátový, dosah 20m |
| `Telefóny, TV a audio > Audio > Mikrofóny > Mikrofóny pre foto a video` | 47 | **bez kategórie** | Prijímač BOYA BY-WM3U bezdrátový, dosah 20m |
| `Telefóny, TV a audio > Audio > Mikrofóny` | 47 | **bez kategórie** | Prijímač BOYA BY-WM3U bezdrátový, dosah 20m |
| `Telefóny, TV a audio > Audio` | 47 | **bez kategórie** | Prijímač BOYA BY-WM3U bezdrátový, dosah 20m |
| `Telefóny, TV a audio > Výpredaj` | 43 | **bez kategórie** | Prijímač BOYA BY-WM3U bezdrátový, dosah 20m |

# Kategórie mimo stromu — penta

Kontrola z 2026-11-14 00:54 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Telefóny, TV a audio` | 49 | **bez kategórie** | Príslušenstvo BOYA BY-P240 protivětrný kryt 240x23mm |
| `Telefóny, TV a audio > Audio > Mikrofóny > Mikrofóny pre foto a video` | 48 | **bez kategórie** | Príslušenstvo BOYA BY-P240 protivětrný kryt 240x23mm |
| `Telefóny, TV a audio > Audio > Mikrofóny` | 48 | **bez kategórie** | Príslušenstvo BOYA BY-P240 protivětrný kryt 240x23mm |
| `Telefóny, TV a audio > Audio` | 48 | **bez kategórie** | Príslušenstvo BOYA BY-P240 protivětrný kryt 240x23mm |
| `Telefóny, TV a audio > Výpredaj` | 44 | **bez kategórie** | Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro fotoapará |

# Kategórie mimo stromu — penta

Kontrola z 2026-11-15 23:58 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Telefóny, TV a audio` | 49 | **bez kategórie** | Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový |
| `Telefóny, TV a audio > Audio > Mikrofóny > Mikrofóny pre foto a video` | 48 | **bez kategórie** | Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový |
| `Telefóny, TV a audio > Audio > Mikrofóny` | 48 | **bez kategórie** | Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový |
| `Telefóny, TV a audio > Audio` | 48 | **bez kategórie** | Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový |
| `Telefóny, TV a audio > Výpredaj` | 44 | **bez kategórie** | Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový |

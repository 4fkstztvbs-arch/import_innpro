# Kategórie mimo stromu — atos

Kontrola z 2026-09-18 13:17 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Chovateľské potreby > Ostatné chovateľské potreby` | 16 | `Chovateľské potreby` | Dávkovač krmiva s kamerou EMOS H6006 GoSmart, 6 l, černý, Wi |
| `Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie > Nitovačky a nity` | 13 | `Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie` | Nýtovací matice ocelová M5, 20ks |

# Kategórie mimo stromu — monacor

Kontrola z 2026-09-21 20:44 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Profesionálna audio technika > Nové produkty` | 91 | `Profesionálna audio technika` | Monacor PA-4125DX 4-zónový multifunkčný mixážny zosilňovač,  |
| `Profesionálna audio technika > Svetlá` | 26 | `Profesionálna audio technika` | JAB GD-04K Vytáčacia a riadiaca jednotka GSM |
| `Profesionálna audio technika > JTS` | 15 | `Profesionálna audio technika` | JTS CM-22G6B Závesný kondenzátorový mikrofón |
| `Profesionálna audio technika > Svetlá > Lasery` | 13 | `Profesionálna audio technika` | BoomTone DJ KUB255RGB Multicolor laser |
| `Profesionálna audio technika > Výpredaj` | 10 | `Profesionálna audio technika` | Monacor DT-25N Neodymový Hi-Fi výškový reproduktor, 40 W, 8  |
| `Profesionálna audio technika > Pódium, diskotéka, DJ > Predzosilňovače audio` | 9 | `Profesionálna audio technika > Pódium, diskotéka, DJ` | IMG Stage Line HPR-6 Efektívny slúchadlový stereo zosilňovač |

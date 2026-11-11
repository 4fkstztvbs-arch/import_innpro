# Denník zmien

Každá dávka zmien v e-shope (alebo v reklame po schválení) má jeden súbor `RRRR-MM/Z-RRRRMMDD-<rola>-<krátky-názov>.json`. Záznam vzniká **pred** zápisom a obsahuje pôvodné hodnoty, aby sa zmena dala vrátiť. Vzor: [_VZOR.json](_VZOR.json).

## Polia

| Pole | Význam |
|---|---|
| `id` | Rovnaké ako názov súboru |
| `datum`, `rola` | Kedy a kto |
| `uloha`, `experiment` | ID úlohy a experimentu, ak existujú |
| `system` | `shoptet`, `sablona` (assets/ux), `feed` (repozitár), `heureka`, `kampane` |
| `schvalenie` | ID návrhu z `approvals/`. Povinné pri `heureka` a `kampane` |
| `zhrnutie` | Jedna veta, čo sa zmenilo a prečo |
| `polozky[]` | `typ` (produkt, kategoria, znacka, clanok, subor, kampan), `kod`, `guid`, `url`, `polia` |
| `polozky[].polia` | Pre každé menené pole `{ "pred": ..., "po": ... }`. Dlhý popis možno uložiť do súboru vedľa a uviesť `predSubor` a `poSubor` |
| `overenie` | `{ "kedy", "ok", "poznamka" }` po zápise: zmena je uložená a cena, sklad, dostupnosť a viditeľnosť sa nezmenili |
| `trvanlivost` | Dopĺňa meranie: `{ "kedy", "ok", "prepisane": [kódy] }` |
| `navrat` | `{ "kedy", "dovod", "kto" }`, ak sa zmena vrátila |

## Pravidlá

- V `polia` nesmie byť žiadne pole ceny, viditeľnosti, dostupnosti ani skladu. Kontroluje to `tools/check.js` podľa zoznamu `zakazanePolia` v `config.json`.
- Jedna dávka má najviac 50 položiek. Väčšiu zmenu rozdeliť.
- Záznam sa po zápise nemaže. Návrat sa zapisuje do poľa `navrat`.

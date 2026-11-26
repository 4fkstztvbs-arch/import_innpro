# Kategórie mimo nášho stromu

Kontrola z 2026-11-26 21:35 UTC, proti `data/known-categories.json` (580 kategórií).

**2 NOVÝCH** oproti základnej čiare (`data/kategorie-mimo-stromu-baseline.json`): `TV, foto, audio video > Audio technika`, `TV, foto, audio video > Audio technika > Reproduktory`

**2 kategórií, ktoré v strome neexistujú** (26 produktov).
Shoptet ich pri importe vytvorí – ak ich tam nechceme, treba buď opraviť
`categoryRenamesByPath` príslušného dodávateľa, alebo kategóriu do stromu doplniť
a obnoviť `data/known-categories.json`.

| Kategória | Produktov | Dodávateľ | Príklad produktu |
|---|---|---|---|
| `TV, foto, audio video > Audio technika` | 18 | wiim | WiiM Amp Ultra Silver |
| `TV, foto, audio video > Audio technika > Reproduktory` | 8 | wiim | WiiM Sound Black |

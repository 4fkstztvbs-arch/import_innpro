# Heureka sortiment reporty

Sem sa nahrávajú Heureka "sortiment report" CSV exporty (Heureka admin → vygenerovať a stiahnuť report, formát CSV) — **ideálne večer pred nočnými importmi**, aby denný automatický beh mal k dispozícii aj čerstvý report, aj čerstvo naimportované produkty.

Súbor si nechaj v pôvodnom Heureka názve (napr. `premiumstoresk_20260807_1253.csv`) — dátum a čas v názve sa používa na rozpoznanie, ktorý report je najnovší.

`scripts/process-heureka-report.js` beží raz denne (pozri Routine), skontroluje, či je tu novší report než posledný spracovaný (`.last-processed.json`), a ak áno, vygeneruje `reports/heureka-cenovy-navrh-<dátum>.md` **aj** `price-targets.json` (EAN → cieľová cena, strojovo čitateľné — toto si potom sami načítajú `transform-*.js` skripty pri nasledujúcom behu a aplikujú, pozri `reports/prehlad-importov.md` sekciu 4.4).

Ručné spustenie: `node scripts/process-heureka-report.js` (voliteľne `--min-margin=5`, `--force` na prinútenie prepočítania aj bez nového súboru).

## Nespárované produkty (samostatný report, iný z Heureka administrácie)

Toto je **iný export** než sortiment report vyššie — Heureka admin → "Nespárované produkty" →
vygenerovať/stiahnuť CSV (dočasný podpísaný GCS odkaz, platný len pár hodín, nedá sa
zautomatizovať sťahovanie). Nahráva sa do `data/heureka-reports/nesparovane/` (v pôvodnom
Heureka názve, napr. `premiumstoresk_20260819_1200.csv`).

`scripts/process-heureka-unmatched.js` (rovnaký princíp ako `process-heureka-report.js`: nájde
najnovší CSV podľa dátumu/času v názve, porovná s `.last-processed.json` v tom istom
podpriečinku) vygeneruje:
- `reports/heureka-nesparovane-<dátum>.md` — čitateľný prehľad pre ručnú kontrolu
- `data/heureka-reports/name-overrides.json` — EAN → navrhovaný názov pre `NAME_TO_EXPORTS`
  (pozri `scripts/heureka-name-overrides.js` a `reports/prehlad-importov.md` sekciu 4.5)
- `data/heureka-reports/heureka-mapping-candidates.json` — kompletná kategórie-analýza (aj
  kategórie, ktoré sa do `.md` reportu nezmestili)

Ručné spustenie: `node scripts/process-heureka-unmatched.js [--force]`.

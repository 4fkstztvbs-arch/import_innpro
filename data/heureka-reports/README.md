# Heureka sortiment reporty

Sem sa nahrávajú Heureka "sortiment report" CSV exporty (Heureka admin → vygenerovať a stiahnuť report, formát CSV) — **ideálne večer pred nočnými importmi**, aby denný automatický beh mal k dispozícii aj čerstvý report, aj čerstvo naimportované produkty.

Súbor si nechaj v pôvodnom Heureka názve (napr. `premiumstoresk_20260807_1253.csv`) — dátum a čas v názve sa používa na rozpoznanie, ktorý report je najnovší.

`scripts/process-heureka-report.js` beží raz denne (pozri Routine), skontroluje, či je tu novší report než posledný spracovaný (`.last-processed.json`), a ak áno, vygeneruje `reports/heureka-cenovy-navrh-<dátum>.md` **aj** `price-targets.json` (EAN → cieľová cena, strojovo čitateľné — toto si potom sami načítajú `transform-*.js` skripty pri nasledujúcom behu a aplikujú, pozri `reports/prehlad-importov.md` sekciu 4.4).

Ručné spustenie: `node scripts/process-heureka-report.js` (voliteľne `--min-margin=5`, `--force` na prinútenie prepočítania aj bez nového súboru).

# Heureka výkonnostné (performance) reporty

Sem sa nahrávajú Heureka výkonnostné exporty (návštevy/náklady/objednávky/tržby po produktoch a dňoch) — rovnaký typ ručného exportu ako sortiment report v priečinku vyššie, len iné dáta. Heureka nemá pre tento report API, takže sa nedá sťahovať automaticky (viď `reports/prehlad-importov.md` sekciu 4.3).

Súbor si nechaj v pôvodnom Heureka názve (napr. `report20260817to20260820.csv`).

`scripts/check-cpc-budget.js` porovná náklady na sledované CPC-override produkty (`data/heureka-reports/cpc-overrides.json`) s denným rozpočtovým capom — pozri `reports/prehlad-importov.md` sekciu 4.5. Spúšťa sa ručne (nie je to naviazané na žiadny plánovaný beh, keďže nový súbor sem musí niekto nahrať sám):

```
node scripts/check-cpc-budget.js --cap=15
```

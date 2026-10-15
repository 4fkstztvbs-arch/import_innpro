# Nové duplicity medzi dodávateľmi

Kontrola z 2026-10-15 09:29 UTC.

Tieto značky dodáva viac dodávateľov naraz a **ešte nie sú v**
`scripts/cross-supplier-preferences.json`, takže ten istý produkt sa môže v e-shope
objaviť dvakrát.

Odporúčaný postup: `node scripts/compare-supplier-purchase-prices.js` ukáže, ktorý
dodávateľ je lacnejší na našej nákupnej cene, potom doplniť značku do preferencií.

## BESEN — 1 zhoda

- **BS20** — najlacnejší nákup: innpro
  - `innpro` 238.70 € — Nástenná nabíjačka do auta Besen BS20 s výkonom 22 kW
  - `atos` 320.19 € — Wallbox BESEN BS20-BC-22KW (Basic), Typ 2, 4.5 m kabel, 400V, 32A


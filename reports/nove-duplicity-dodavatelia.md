# Nové duplicity medzi dodávateľmi

Kontrola z 2026-10-16 09:22 UTC.

Tieto značky dodáva viac dodávateľov naraz a **ešte nie sú v**
`scripts/cross-supplier-preferences.json`, takže ten istý produkt sa môže v e-shope
objaviť dvakrát.

Odporúčaný postup: `node scripts/compare-supplier-purchase-prices.js` ukáže, ktorý
dodávateľ je lacnejší na našej nákupnej cene, potom doplniť značku do preferencií.

## BESEN — 1 zhoda

- **BS20** — najlacnejší nákup: innpro
  - `innpro` 238.70 € — Nástenná nabíjačka do auta Besen BS20 s výkonom 22 kW
  - `atos` 266.81 € — Wallbox BESEN BS20-BC-11KW-RFID, Typ 2, 5.5 m kabel, 400V, 16A, s kartou RFID


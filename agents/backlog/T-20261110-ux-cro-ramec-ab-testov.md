---
id: T-20261110-ux-cro-ramec-ab-testov
nazov: Postaviť rámec A/B testov na webe a overiť ho testom A/A
rola: ux-cro
stav: pripravene
priorita: 1
vytvoril: kostra
vytvorene: 2026-11-10
zavisi-od: [T-20261110-meranie-oprava-merania-ga4]
experiment:
---

## Prečo

Shoptet nemá vstavané testovanie. Bez rámca sa úpravy šablóny nedajú merať.

## Čo spraviť

Podľa roly: skript v `assets/ux/` so zaradením do vetvy, udalosť `ps_experiment` do GA4, test A/A na 7 dní. Nasadenie až po overení vzhľadu a košíka.

## Hotové, keď

Test A/A ukázal rovnomerné rozdelenie a žiadny významný rozdiel.

## Priebeh

- 2026-11-10: Založené z prieskumu prvého dňa.

---
id: T-20261110-ux-cro-ramec-ab-testov
nazov: Postaviť rámec A/B testov na webe a overiť ho testom A/A
rola: ux-cro
stav: v-praci
priorita: 1
vytvoril: kostra
vytvorene: 2026-11-10
zavisi-od: [T-20261110-meranie-oprava-merania-ga4]
experiment: E-20261113-aa-skript
---

## Prečo

Shoptet nemá vstavané testovanie. Bez rámca sa úpravy šablóny nedajú merať.

## Čo spraviť

Podľa roly: skript v `assets/ux/` so zaradením do vetvy, udalosť `ps_experiment` do GA4, test A/A na 7 dní. Nasadenie až po overení vzhľadu a košíka.

## Hotové, keď

Test A/A ukázal rovnomerné rozdelenie a žiadny významný rozdiel.

## Priebeh

- 2026-11-10: Založené z prieskumu prvého dňa.
- 2026-11-12 (ux-cro): Skript `assets/ux/premiumstore-experiment-20261112.js` hotový a otvorený na kontrolu v PR (zaradenie A/B, udalosť `ps_experiment`, tag do Clarity, vynútenie vetvy cez `?ps_exp=`, A/A test `aa-20261112`). Nasadenie do šablóny (Shoptet administrácia) a overenie vzhľadu a košíka cez Mac ešte nie je spravené. Závislosť: oprava merania GA4 (úloha merania).
- 2026-11-13 (ux-cro): Skript nasadený do pätičky HTML kódu šablóny (záznam Z-20261113-ux-cro-aa-skript), overené na titulnej stránke a kroku 1 pokladne (vzhľad bez zmeny, atribút vetvy sa nastaví). Test A/A `aa-20261112` beží od 13. 11. 2026; vyhodnotenie meranie po 14 dňoch (27. 11.) cez `experiment-stats.js ab`, udalosť `ps_experiment` v GA4. Úloha ostáva v práci do vyhodnotenia.

---
id: T-20261110-ux-cro-pokladna-krok-1
nazov: Rozbor prvého kroku pokladne
rola: ux-cro
stav: v-praci
priorita: 2
vytvoril: ux-cro
vytvorene: 2026-11-10
zavisi-od: []
experiment:
---

## Prečo

Najväčšia strata v lieviku je medzi prvým a druhým krokom objednávky.

## Čo spraviť

Zo súhrnov Clarity a GA4 zistiť, kde sa ľudia zasekávajú (mobil a počítač zvlášť), a navrhnúť úpravy.

## Hotové, keď

Nálezy s návrhmi úprav a nadväzujúce úlohy.

## Priebeh

- 2026-11-10: Založené z prieskumu prvého dňa.
- 2026-11-12 (ux-cro): Prvá analýza z Clarity (30 dní + vzorka 25 nahrávok pre mobil a 25 pre počítač, odchod na /objednavka/krok-1/). Krok 1 je krok „platba a doprava“ (nadpis „Objednávka - platba a doprava“), nie zadávanie údajov.
  - Relácií na kroku: mobil 244, počítač 193, tablet 15; mŕtve kliky a rýchle návraty sú zanedbateľné (po 2 a 8), problém teda nie je rozbité tlačidlo.
  - Vzorka odchodov: na mobile 17 z 25 relácií skončilo na jedinej stránke (nevideli nič iné), medián času na kroku 35 s, na počítači 11 z 25 jednostránkových, medián 49 s.
  - Na mobile tri rôzne tlačidlá pokračovania („Pokračovať“, „Pokračovať v objednávke“, „Pokračovať k údajom“), čo naznačuje nejednotné popisy. Klikanie na „Dobierkou Nedostupné pri ...“ (3x) znamená, že ľudia vyberajú dobierku, ktorá sa pri ich košíku nedá použiť (dobierka je len do 300 €).
  - Vzorka je malá a bez pohľadu na vzhľad, preto sú to hypotézy, nie dôkaz.
  - Ďalší krok: pozrieť krok 1 na mobile cez Mac (zobrazenie dobierky pri košíku nad 300 €, popisy tlačidiel, rozloženie), potom navrhnúť jeden experiment (napr. skryť nedostupné platby namiesto ich zobrazenia, jednotný popis tlačidla). Úlohy na ceny, dopravu a platby sa nemenia, zmena je len v zobrazení.


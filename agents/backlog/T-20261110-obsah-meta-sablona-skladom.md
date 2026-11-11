---
id: T-20261110-obsah-meta-sablona-skladom
nazov: Odstrániť nepravdivé „skladom“ a „| premiumstore.sk“ z meta údajov
rola: obsah
stav: navrh
priorita: 1
vytvoril: obsah
vytvorene: 2026-11-10
zavisi-od: [T-20261110-meranie-trvanlivost-zapisov]
experiment:
---

## Prečo

Šablónové meta popisy tvrdia „skladom“ aj pri produktoch na sklade dodávateľa a titulky končia názvom obchodu.

## Čo spraviť

Zistiť rozsah a pôvod (feed alebo Shoptet). Ak ide z feedu, opraviť v transformačnom skripte cez pull request, inak po dávkach cez Shoptet ako experiment.

## Hotové, keď

Nové produkty už šablónu nedostávajú a existujúce sú opravené alebo naplánované.

## Priebeh

- 2026-11-10: Založené z prieskumu prvého dňa.

---
id: T-20261110-meranie-oprava-merania-ga4
nazov: Audit merania GA4 (súhlas s cookies, udalosti, vyhľadávanie, UTM)
rola: meranie
stav: v-praci
priorita: 1
vytvoril: ux-cro
vytvorene: 2026-11-10
zavisi-od: []
experiment:
---

## Prečo

Clarity vidí niekoľkonásobne viac relácií než GA4, zobrazenia produktov sú podozrivo nízke, interné vyhľadávanie sa nemeria a časť relácií nemá priradený zdroj. Bez toho sú A/B testy nespoľahlivé.

## Čo spraviť

Overiť z dostupných zdrojov udalosti view_item, add_to_cart, begin_checkout, purchase, parameter vyhľadávania a značenie platených zdrojov. Čo sa nedá opraviť bez administrácie, spísať ako presný postup pre Martina.

## Hotové, keď

Zoznam nálezov s opravou alebo s postupom pre Martina; odchýlka objednávok GA4 oproti Shoptetu je zmeraná.

## Priebeh

- 2026-11-10: Založené z prieskumu prvého dňa.
- 2026-11-12: Martin doplnil parameter vyhľadávania do GA4; overené, vyhľadávanie sa meria (5 udalostí za 2 dni). Zostáva porovnať odchýlku objednávok GA4 a Shoptetu.
- 2026-11-12 (seo): Dôkaz pre prioritu: Google kliky z Search Console vzrástli o 20 % (1 429 na 1 721), kým organické relácie v GA4 klesli o 19 % za rovnaké obdobia (15. 9.–12. 10. a 13. 10.–9. 11.). Rozdiel sa zväčšuje, preto skontrolovať najmä nastavenie súhlasu s cookies a zdroj relácie.

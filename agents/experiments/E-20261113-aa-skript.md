---
id: E-20261113-aa-skript
nazov: Test A/A rámca A/B testov na webe
typ: ab-web
rola: ux-cro
stav: bezi
uloha: T-20261110-ux-cro-ramec-ab-testov
start: 2026-11-13
vyhodnotenie: 2026-11-27
metrika: konverzia
verdikt:
---

## Hypotéza

Obe vetvy sú rovnaké, takže rozdelenie návštevníkov má byť blízko 50 : 50 a konverzia sa medzi vetvami nemá významne líšiť. Ak sa líši, rámec alebo meranie je chybné a testy sa nesmú spúšťať.

## Skupiny

- Vetva A a B: náhodné zaradenie skriptom `assets/ux/premiumstore-experiment-20261112.js`, v GA4 `ps_experiment` s `experiment_id` = `aa-20261112` a `variant` A alebo B.

## Obdobia

- Od 2026-11-13, vyhodnotenie po 14 dňoch (2026-11-27).

## Vyhodnotenie

Dopĺňa meranie: `node agents/tools/experiment-stats.js ab data.json`, podiel vetiev, rozdiel konverzie, súbežné vplyvy.

## Priebeh vyhodnotenia

- 2026-11-28 (meranie): A/A nie je vyhodnotený. Rozdelenie vetiev A/B a konverzia podľa `experiment_id` `aa-20261112` vyžadujú GA4 dáta podľa vlastného parametra `variant`, a tie cez dostupné nástroje (OpenSEO key events, ecommerce, Search Console) nezískame. Verdikt zostáva prázdny.
- Potrebné na vyhodnotenie: GA4 prieskum (Explorations) s dimenziou `variant` a udalosťou `ps_experiment` za 13. až 27. 11., alebo export takéhoto prehľadu do súkromného priečinka. Potom sa spustí `node agents/tools/experiment-stats.js ab data.json`.

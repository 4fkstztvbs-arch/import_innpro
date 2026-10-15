# Zadanie pre lokálneho Claude: vyhodnotenie checkpointu homepage v2

Vložte nasledujúci text do Claude Code na vašom počítači (desktop aplikácia so zapnutým vstavaným prehliadačom, v klone tohto repozitára, vetva `main`). Dokumentácia a východiskové čísla sú v `assets/ux/homepage-v2-20261012.md`.

---

Odpovedaj po slovensky. Vyhodnoť checkpoint homepage v2 (desktop) pre PremiumStore.sk.

Kontext:
- Zmeny nasadené 12. 10. 2026 okolo 10:55 SELČ (značky v ponuke, nové karty produktov, banner 3D tlač, bannery Smart Home a Dielňa, poradie Akcie → 3D banner → Novinky → bannery). JS s meraním `ps_home_click` (parameter `ps_block`) od `?v=8`. Mobil a tablet sa nemenia.
- Prečítaj `assets/ux/homepage-v2-20261012.md`: tabuľka s východiskom (GA4 5. – 11. 10. 2026, PageSpeed, Search Console), priebežná kontrola 15. 10. a pravidlá rozhodovania (ponechať / upraviť / vrátiť).
- Prečítaj aj meracie obmedzenia: homepage je pre desktop vstupom len pre približne 44 relácií týždenne, takže konverzia a tržby nie sú rozhodujúce. Rozhodujú kliknutia na bloky (`ps_block`), podiel kliknutí na kategórie a značky, LCP a CLS.

Úloha:
1. Vo vstavanom prehliadači otvor GA4 (vlastnosť PremiumStore.sk) a Search Console (`sc-domain:premiumstore.sk`). Prihlásenie urobím ja. Nič nemeň, iba čítaj zostavy.
2. GA4, desktop, 12. – 18. 10. 2026 (porovnaj so 5. – 11. 10.): relácie začínajúce na `/`, zapojené relácie, miera odchodov, priemerná dĺžka, pridania do košíka, nákupy, príjmy; celý web desktop; udalosť `ps_home_click` rozdelená podľa `ps_block` (Prieskumy, vlastná dimenzia `ps_block`).
3. Search Console: výkon stránky `https://www.premiumstore.sk/` (desktop, 12. – 18. 10. oproti predošlému týždňu) a report Základné metriky webu (desktop).
4. PageSpeed Insights pre `https://www.premiumstore.sk/` (desktop), spusti 3× a zapíš medián LCP a CLS. Východisko: reálne LCP 651 ms, CLS 0,22; laboratórne LCP 1 636 ms, CLS 0,118.
5. Doplň stĺpec „Po týždni“ v tabuľke, navrhni rozhodnutie podľa pravidiel, upozorni na malé počty a navrhni predĺženie merania na 3 – 4 týždne.
6. Commitni zmenu dokumentu a pushni do `main`. Dotazy iba na čítanie. Pred čímkoľvek mimo čítania sa spýtaj.

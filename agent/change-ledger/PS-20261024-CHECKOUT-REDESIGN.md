# PS-20261024-CHECKOUT-REDESIGN

- CHANGE_ID: PS-20261024-CHECKOUT-REDESIGN
- DATE: 2026-10-24
- ACTOR: Claude (agent), na pokyn majiteľa
- AREA: Objednávka – vizuálna vrstva košíka, kroku 1 (doprava a platba) a kroku 2 (údaje)
- URL/PAGE/SCOPE: /kosik/, /objednavka/krok-1/, /objednavka/krok-2/ (desktop aj mobil). Poďakovanie a platobná brána sa nemenia.
- AFFECTED_PRODUCTS/PAGES: žiadne produktové ani importné polia, žiadna cenová logika.
- DESCRIPTION:
  1. Základ (dizajn „A“): dlaždice dopravy/platby s logami (Packeta, SPS, Balíkovo, karty, Apple Pay, Google Pay; inde neutrálne ikony), súhrn s tlačidlom a výhodami v pravom stĺpci, dvojstĺpcové rozloženie na desktope, formulár s popiskami nad poľami.
  2. Variant „B“ na všetkých zariadeniach (rozhodnutie majiteľa 24. 10. 2026): tenký trojdielny indikátor „Krok X z 3“, plochý zoznam dopravy a platby (rádio vľavo, logo, cena), plochý formulár s vyššími poľami (52 px). Na mobile (do 991 px) navyše pevná spodná lišta s cenou a tlačidlom („Pokračovať“ / „Pokračovať k údajom“); na desktope ostáva tlačidlo v súhrne vpravo (sivý panel) a spodná lišta sa nepoužíva.
  3. Všetky polia, názvy inputov, id a Shoptet logika ostávajú. JS len pridáva triedy (`ps-rd`, `ps-rb`), ikony, štítky a spodnú lištu, ktorá klikne na pôvodné tlačidlo Shoptetu. Všetko CSS je pod `body.ps-rd`, takže zmena sa dá vypnúť odstránením súboru.
  4. Bez bliknutia starého vzhľadu: kým JS nepridá `ps-rd`, `main#content` je skrytý; ak by JS zlyhal, zobrazí sa sám po 0,6 s.
  5. Meranie: JS nastaví Clarity značku `checkout_design` = `redesign-20261024-B-desktop` alebo `redesign-20261024-B-mobil` (a rovnakú používateľskú vlastnosť v GA4 cez gtag, ak je dostupný).
  6. Nasadenie spolu s PS-20261024-CHECKOUT-COMBOS (oprava nedostupných kombinácií dopravy a platby, osobný odber v prehľade) – rozhodnutie majiteľa 24. 10. 2026. Vplyv oboch zmien sa preto z dát nedá oddeliť.
- REASON: Clarity 22.–24. 10. (SK, bez botov): z kroku 1 pokračuje do kroku 2 len ~26 % relácií, na mobile ~18 %. Dead kliky v kroku 1, hustý a málo prehľadný mobilný checkout. Na desktope pri šírke ~1100 px súhrn v kroku 2 prekrýval polia formulára.
- HYPOTHESIS: Prehľadnejšie a kratšie rozloženie (hlavne na mobile: viditeľná cena a tlačidlo vždy dole, menej scrollovania, jasný výber s logami) zníži odchody z kroku 1 a 2 a zvýši podiel dokončených objednávok.
- BASELINE: 23. 10. (celý deň, SK, bez botov): košík 19, krok 1 19, krok 2 5, poďakovanie 3; krok 1 → krok 2 = 26 % (mobil 18 %, PC 38 %). 9. 10.: 32 → 24 → 10 → 3. Malé počty. Evidence label: CORRELATION. Pred-obdobie pre porovnanie: 17.–24. 10. (kým beží starý vzhľad).
- PRIMARY_METRIC: podiel relácií košík → krok 1 → krok 2 → poďakovanie, SK, mobil a PC zvlášť (Clarity, filter značky `checkout_design`; pred nasadením bez značky).
- GUARDRAIL_METRICS: počet objednávok a poďakovaní (Shoptet vs Clarity), priemerná hodnota objednávky, podiel dobierky a hotovosti, podiel platieb kartou, dead/rage kliky a chyby JS na kroku 1 a 2, nesprávne kombinácie doprava+platba, zobrazenie zákonného textu „Objednať s povinnosťou platby“ pri odoslaní.
- IMPLEMENTATION: nové zdroje `premiumstore-checkout-redesign-20261024.css/.js` (základ A + vrstva B na mobile aj desktope + značka merania) pridané na koniec spojených súborov (CSS minifikované a pripojené na koniec `premiumstore-all-20261009.css`, JS cez `scripts/build-ux-js-bundle.js`). Dodatočne obsahuje zmeny z PS-20261024-CHECKOUT-COMBOS.
- FILES_CHANGED: assets/ux/premiumstore-checkout-redesign-20261024.css, assets/ux/premiumstore-checkout-redesign-20261024.js, assets/ux/premiumstore-all-20261009.css (build), assets/ux/premiumstore-bundle-20261009.js (build), scripts/build-ux-css-bundle.js, scripts/build-ux-js-bundle.js, backups/design/2026-10-24-before-checkout-redesign/, tento záznam; plus súbory z PS-20261024-CHECKOUT-COMBOS.
- COMMIT / PR: viď PR (nahrádza draft PR #297).
- APPROVAL / APPROVER: zmena checkoutu je APPROVAL REQUIRED (agent/rules/ux-cro-design.md). Majiteľ (Martin) v chate 24. 10. 2026 schválil dizajn („nový dizajn vyzerá ok“) a výslovne určil: nasadiť dnes spolu s opravou klikov, variant B na mobile, nechať bežať minimálne týždeň.
- EXPERIMENT_ID: žiadny (nie A/B, nasadenie pre všetkých). Porovnanie pred/po, riziká: sezónnosť (Black Friday kampaň), malé počty relácií, súbeh s COMBOS opravou.
- PRE_DEPLOY_VALIDATION: dizajn vložený do živého checkoutu v prehliadači (desktop 1100 px, mobil 375 px; košík, krok 1, krok 2), polia vyplniteľné, výber dopravy a platby funguje, objednávka sa neodosielala. Po zostavení balíkov: kontrola produkčných súborov rovnakým vložením (viď poznámky v PR). Známe otvorené body: v spodnej lište kroku 2 (téma) sa text strieda medzi „Objednať“ a „Objednať s povinnosťou platby“; pri Apple Pay v skrátenom zozname platieb overiť zobrazenie v Safari.
- DEPLOYED_AT: 2026-10-24 ~13:25 (Europe/Bratislava). PR #298 zlúčený do main (a319ea8), GitHub Pages publikované, v Shoptete (Vzhľad a obsah, Editor, HTML kód) zvýšené `?v=` CSS 29 → 30 a JS 28 → 29; nič iné v poliach sa nemenilo (dĺžky polí pred a po rovnaké). Overené na živom kroku 1: načítané `?v=30`/`?v=29`, triedy ps-rd a ps-rb, spodná lišta, bez chýb v konzole.
- POST_DEPLOY_VALIDATION: po zvýšení `?v=` (CSS 29 → 30, JS 28 → 29): krok po kroku na mobile aj desktope vyskúšať košík → krok 1 (každá doprava a platba, vrátane Packety a odberného miesta, osobný odber + hotovosť, dobierka) → krok 2 (polia, firma, iná adresa, poznámka, súhlasy) a pozrieť konzolu; v Clarity skontrolovať, že značka `checkout_design` sa zapisuje; v Shoptete skontrolovať prvú reálnu objednávku (doprava, platba, súhlasy).
- MEASUREMENT_PLAN: kontrola 27. 10. (po 3 dňoch: chyby, dead kliky, zjavný prepad); hlavné vyhodnotenie najskôr 31. 10./2. 11. (7+ dní, ideálne celý týždeň); porovnanie s obdobím pred nasadením zvlášť pre mobil a PC; pri pochybnosti predĺžiť o ďalší týždeň, nerozhodovať z nízkych počtov.
- RESULT: zatiaľ nevyhodnotené.
- DECISION: bežať minimálne týždeň, potom rozhodnúť (ponechať / upraviť / vrátiť).
- ROLLBACK / ROLLBACK_COMMIT: v Shoptete vrátiť `?v=` späť (CSS 30 → 29, JS 29 → 28) ak je stará verzia ešte v cache, inak revert PR a nové zvýšenie `?v=`. Záloha predchádzajúceho stavu: `backups/design/2026-10-24-before-checkout-redesign/` (spojené CSS a JS, zdroj checkoutu, build skripty, `SHA256SUMS`).

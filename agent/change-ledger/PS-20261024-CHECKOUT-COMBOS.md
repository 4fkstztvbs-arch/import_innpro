# PS-20261024-CHECKOUT-COMBOS

- CHANGE_ID: PS-20261024-CHECKOUT-COMBOS
- DATE: 2026-10-24
- ACTOR: Claude (agent), na pokyn majiteľa
- AREA: Objednávka, krok 1 (Doprava & platba) – nedostupné kombinácie dopravy a platby, viditeľnosť osobného odberu
- URL/PAGE/SCOPE: /objednavka/krok-1/ (desktop aj mobil)
- AFFECTED_PRODUCTS/PAGES: len krok 1 objednávky; žiadne produktové ani importné polia.
- DESCRIPTION:
  1. Osobný odber (zadarmo) sa už nechová pod „Ďalšie spôsoby dopravy“ a počíta sa do 3 viditeľných možností (na úkor SPS za 9,90 €, ktorá sa presunie do rozbaľovača). Zmena v `premiumstore-checkout-20261009.js`, funkcia `shortlist()`.
  2. Nový `premiumstore-checkout-combos-20261024.js/.css`: klik na platbu, ktorú Shoptet zablokoval (`.radio-wrapper.inactive-child`), automaticky prepne dopravu na kompatibilnú (podľa `data-relations` dopravy), vyberie platbu a pod nadpisom ukáže vysvetlenie. Text pri zablokovanej platbe povie, čo sa po kliknutí stane („po kliknutí zmeníme dopravu na …“). Prepnutie volá tú istú cestu ako Shoptet (udalosť `mousedown` na `.radio-wrapper`, pozri checkout-3g.js), takže prepočet cien aj dostupných platieb prebehne štandardne.
- REASON: Clarity 22.–24. 10. (Slovensko, bez botov): z kroku 1 pokračuje do kroku 2 len ~26 % relácií (piatok 23. 10.: 19 → 5; mobil 11 → 2, PC 8 → 3). Dead kliky na kroku 1: 4× mobil „V hotovosti pri osobnom odbere“, PC „Osobný odber – ZADARMO“, „Slovenská pošta na adresu“, „Ďalšie spôsoby dopravy“. Príčina reprodukovaná: Shoptet pri zablokovanej platbe (`label.inactive`) skončí v handleri `mousedown` bez akcie; zablokovaná platba pritom vyzerá ako klikateľná (len malý sivý text).
- HYPOTHESIS: Zákazník, ktorý chce platiť hotovosťou na predajni (alebo dobierkou), už nenarazí na „mŕtvu“ voľbu a osobný odber nájde bez rozbaľovania, takže menej ľudí odíde z kroku 1.
- BASELINE: 23. 10. (celý deň, SK, bez botov): košík 19, krok 1 19, krok 2 5, poďakovanie 3; krok 1 → krok 2 = 26 % (mobil 18 %, PC 38 %). 9. 10.: 32 → 24 → 10 → 3. Malé počty, rozdiely nie sú štatisticky preukázané. Evidence label: CORRELATION.
- PRIMARY_METRIC: podiel relácií z kroku 1 do kroku 2 (SK, mobil a PC zvlášť).
- GUARDRAIL_METRICS: počet objednávok a poďakovaní (Shoptet vs Clarity), podiel dobierky/hotovosti, dead/rage kliky na kroku 1, chyby JS, nesprávne kombinácie doprava+platba v objednávkach (napr. hotovosť pri doručení na adresu).
- IMPLEMENTATION: viď DESCRIPTION. Skript je izolovaný (IIFE, beží len na `body.in-krok-1`), v bundli v try/catch. Ak Shoptet zmení markup (`inactive-child`, `data-relations`, `mousedown` handler), skript nič neurobí a platí pôvodné správanie.
- FILES_CHANGED: assets/ux/premiumstore-checkout-20261009.js, assets/ux/premiumstore-checkout-combos-20261024.js, assets/ux/premiumstore-checkout-combos-20261024.css, assets/ux/premiumstore-bundle-20261009.js (build), assets/ux/premiumstore-all-20261009.css (pripojené minifikované CSS na koniec; plný rebuild by zmenil ~150 nesúvisiacich pravidiel kvôli inej verzii csso), scripts/build-ux-js-bundle.js, scripts/build-ux-css-bundle.js, tento záznam.
- COMMIT / PR: draft PR, čaká na schválenie majiteľa.
- APPROVAL / APPROVER: zmena checkoutu je APPROVAL REQUIRED (agent/rules/ux-cro-design.md). Majiteľ zadal prípravu zmeny 2026-10-24; nasadenie (merge do main) čaká na jeho výslovný pokyn a čas. Odporúčanie: nasadiť až po víkendovom meraní (po pondelkovom vyhodnotení), aby sa nezmiešali dáta.
- EXPERIMENT_ID: žiadny (nie A/B). Porovnanie pred/po s pridaným rizikom sezónnosti (Black Friday kampaň beží).
- PRE_DEPLOY_VALIDATION: živý checkout (premiumstore.sk, desktop 800 px aj emulovaný mobil 375 px, obe vyskúšané skutočnými klikmi oboma smermi): reprodukovaný dead klik; po vložení nového kódu do stránky skutočný klik na „V hotovosti pri osobnom odbere“ pri doprave Slovenská pošta prepol dopravu na Osobný odber, vybral hotovosť a súčet klesol z 176,70 € na 171,80 € (bez poštovného); symetricky „Dobierkou“ pri osobnom odbere (mobil: súčet 171,80 € → 179,60 €). Na mobile sa pôvodne orezával vysvetľujúci text pri zablokovanej platbe (pevná výška riadku) – opravené CSS pravidlom (height:auto) a overené. Objednávka sa neodosielala. Bundle: `node --check`.
- DEPLOYED_AT: nenasadené (prepared, not deployed).
- POST_DEPLOY_VALIDATION: po nasadení vyskúšať krok 1 (desktop + mobil): hotovosť pri osobnom odbere, dobierka, Packeta bez výdajného miesta, prepínanie späť; skontrolovať JS chyby v Clarity a dead kliky; po 7 dňoch porovnať krok 1 → krok 2.
- RESULT: zatiaľ nevyhodnotené.
- DECISION: čaká na majiteľa.
- ROLLBACK / ROLLBACK_COMMIT: revert PR (bundle aj CSS sa vrátia). Okamžitý vypínač bez deployu neexistuje.

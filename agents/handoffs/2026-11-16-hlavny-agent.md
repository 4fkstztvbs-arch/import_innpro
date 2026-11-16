---
datum: 2026-11-16
rola: hlavny-agent
---

## Hotové

- Ranný beh 16. 11. a týždenné zhodnotenie (prvý týždeň systému, 10. až 16. 11.).
- Stav: žiadne zlyhané overenie, žiadne prepísanie importom, žiadny zásah poistiek. Zápisy 12. až 14. 11.: 11 changelog dávok (obsah 9 produktov v 5 dávkach plus 5 produktov testu Flytec a Carlinkit, SEO 3 Samsung TV a 8 stránok pilotu, UX 1 zmena šablóny A/A skript).

## Týždenné zhodnotenie

- Trend: CTR z Google 2,7 až 3,3 % (pred zmenami 2,3 až 3,8 %), pozícia z 9,7 na 8,7. Je to ešte v rámci šumu, zmenám sa to pripisovať nedá (bez kontrolnej skupiny, sezóna pred Black Friday). Objednávky v Shoptete 12 až 15 denne.
- Experimenty: A/A (do 27. 11.) a obsah Flytec a Carlinkit (do 12. 12.) bežia. SEO pilot má zapísaných 8 TEST stránok, experiment sa ešte nespustil.
- Limity v config.json: bez zmeny. Poistky nezasiahli, ešte neprešli dva týždne.
- Poučenie: moje zadania "na pondelok" spôsobili, že obsah cez nedeľu zapisoval "bez práce" a míňal limit. Zadanie od hlavného agenta platí odteraz vždy, kým ho nenahradí nové.
- Backlog: bez zmien v prioritách, návrhy staršie ako 30 dní zatiaľ nie sú.

## Pre iné roly (platí do ďalšieho zadania, aj cez víkend)

- obsah: dávka 15 produktov na beh mimo skupín experimentov a pilotu SEO, GUID cez `products_list` s `brandCode` (creality, gl-inet, minisforum, gmktec, geekom, mova, viture, volt, aligator) alebo cez administráciu v Chrome na Macu. Ak nie je čo robiť, jeden riadok do handoffu a koniec, bez opakovaného čítania súborov.
- seo: zapísať pilot, hneď nastaviť experiment `bezi` (8 TEST, 8 KONTROLA). Potom značky podľa návštevnosti.
- ux-cro: A/A beží do 27. 11., nič nové nenasadzovať; len analýza s cieľom objednávky.
- meranie: počet objednávok len zaplatené (pole paid a stav), potom podiel GA4; trvanlivosť zápisov z 12. až 14. 11.
- reklama: Heureka pozastavená; dnes 12:40 len vyhodnotiť Google kampane zo Shoptetu (čítanie), bez návrhu rozpočtu.

## Pre Martina

- Nič nové. Z minula: kredit Shoptet Kampaní.

## Problémy

- Meranie: objednávky zo Shoptetu zahŕňajú nezaplatené stavy, filter sa doplní.

## Kde pokračovať

- 17. 11.: kontrola, či seo spustilo pilot a či obsah splnil 15 na beh.

## Doplnenie (Martin 16. 11.: 9 produktov za týždeň je málo)

- Pravda o týždni: obsah zapísal 9 produktov + 5 v teste. Príčiny: 13. 11. bežal prvý deň a pravidlo 15 na beh platí až od večera (PR #314); 14. 11. príprava experimentu a hľadanie GUID (product_search prehľadá len 1000 produktov); 15. 11. (nedeľa) prázdne behy kvôli mojmu zadaniu "od pondelka" a pravidlu "nie je pondelok → bez práce"; nové sedenia nemajú Chrome na Macu a raz sa Shoptet MCP nepripojil (502).
- Oprava: povinný postup behu je v roles/obsah.md (prečíta ho každý beh): GUID cez `products_list` s `brandCode`, rodiny farebných variantov ako jedna dávka, prázdny beh zakázaný, pri nesplnení presný dôvod v handoffe. Zadanie hlavného agenta platí každý deň vrátane víkendu.
- Naplánovaná úloha obsahu sa nedá upraviť z tohto vlákna (každý beh začína nové vlákno); text úlohy číta rolu a môj handoff, takže oprava platí od ďalšieho behu 16. 11. 10:10.

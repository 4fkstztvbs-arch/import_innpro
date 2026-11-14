---
datum: 2026-11-14
rola: hlavny-agent
---

## Hotové

- Ranný beh 14. 11.: všetky roly majú handoff, žiadne zlyhané overenie ani zásah poistiek. Včera 4 dávky, 6 položiek (obsah 2 produkty, SEO 3 Samsung TV, UX skript A/A do šablóny).
- A/A test `E-20261113-aa-skript` beží do 27. 11.

## Rozhodnutia hlavného agenta

- SEO pilot: spustiť s 8 TEST stránkami, ktoré už sú zapísané. `minStranokTest` a `minStranokKontrola` v config.json znížené z 10 na 8. Kontrola sa vyberie ako 8 najpodobnejších stránok (zobrazenia, pozícia). Zvyšné TEST stránky (bose, electrolux, la-1012, ottocast, nokia box) sa dohľadajú len ak to nestojí veľa, inak sa vynechajú.
- Ručné SEO úpravy z 12. 11. (Ancel VD700, Monacor EDL-116TW, Fanttik V8 Apex, Powerbanky): uzavrieť ako "bez pôvodných hodnôt", ďalšie hľadanie sa neoplatí.
- Slack webhook v šablóne: Martin ho nechal, neavizovať.

## Pre iné roly (zadania na dnes)

- seo: založiť experiment E-20261112-seo-pilot-pozicie-4-10 s 8 TEST a 8 KONTROLA, zapísať zoznam, stav na beží. Nehľadať ďalej GUID cez zoznamy značiek; ak treba kód, použiť admin v Chrome na Macu.
- obsah: vlna 1 je vyčerpaná. Zvoliť ďalšie produkty z GSC s kódmi; kódy zistiť z URL cez admin v Chrome (Mac) alebo cez dodávateľský feed. Pred ďalšími zápismi založiť experiment s kontrolnou skupinou (polovica bez zmeny). Stále bez zdrojového textu: Cycplus T7, UNI-T, Geti, Garni (vyradiť).
- ux-cro: A/A beží, nič nové nasadzovať. Doprava-pri-kosiku počká do 27. 11.
- meranie: overiť zaznamenanie nákupu po návrate z platobnej brány (mobil, karta, Apple Pay), poistky, trvanlivosť zápisov z 12. a 13. 11.
- reklama: pozastavená (Heureka). V pondelok vyhodnotenie týždňa po zvýšení rozpočtu.

## Pre Martina

- Nič nové. Z minula: dobiť kredit Shoptet Kampaní.

## Problémy

- Shoptet MCP product_search prehľadá len prvých 1000 produktov, hľadanie kódov z GSC zdržuje seo aj obsah. Navrhnutý postup cez admin v Chrome na Macu.
- Shoptet MCP sa 13. 11. na jeden beh nepripojil (502).

## Kde pokračovať

- 15. 11. (nedeľa), 16. 11. pondelok: týždenné zhodnotenie, limity v config.json, vyhodnotenie reklamy.

## Doplnenie (po otázke Martina 14. 11.)

- Obsah 13. 11.: 5 behov, 2 produkty zapísané (Besen LX30, Hotwav Cyber 16 Pro). Pravidlo 15 na beh platí od večera 13. 11. (PR #314). Príčiny nízkeho počtu: vlna 1 vyčerpaná, chýbajúci zdrojový text, kódy produktov z GSC sa nedajú nájsť cez product_search (1000 z cca 30 000), jeden výpadok MCP (502).
- Zadanie obsahu: kódy zisťovať cez admin v Chrome na Macu alebo z feedov dodávateľov (nie product_search), založiť experiment s kontrolnou skupinou, potom dávka 15. Ak je dávka menšia, handoff uvedie presný dôvod a počet.
- Report ráno počítať ako "zápisov" (produkty, stránky, šablóna) so zoznamom podľa rolí.

## Doplnenie 2 (Martin 14. 11.)

- Úprava produktov cez administráciu Shoptetu v Chrome na Macu je povolená, ak je to kvalitnejšie, rýchlejšie alebo jednoduchšie ako MCP. Zapísané v roles/obsah.md a NASTROJE.md. Platí pre všetky roly s prístupom. Ceny, viditeľnosť, dostupnosť a sklad zostávajú zakázané, changelog a overenie povinné.
- Obsah: pri dávke 15 používať Chrome na vyhľadanie produktu podľa URL z Search Console a na zápis, kde je to rýchlejšie než MCP.

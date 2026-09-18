# Import kategórií je pozastavený — nič z tohto priečinka nenahrávať

Používateľ 18. 9. 2026 rozšíril zadanie na kontrolu všetkých produktov. Najprv sa opravuje zaradenie a zavádzajúce produktové texty, potom sa prepočíta strom a až následne sa pripravia nové importy so správnymi cestami.

Pôvodný návrh 61 nových kategórií a súbory 01–07 sú historický pracovný podklad. Nie sú schválené na upload. Najmä súbor 06 používal kódy z dodávateľských feedov; aktuálny úplný export potvrdil, že živé kódy často obsahujú ďalšiu predponu. Bez zosúladenia so živými kartami sa nesmie použiť.

`data/approved-category-migration.json` zostáva `enabled: false`. Nemenia sa aktívny strom, kategóriové URL ani presmerovania. Nové L4/L5 sa neaktivujú.

Potvrdené opravy do existujúcich kategórií sú samostatne v `data/product-category-corrections.json`. Krok `scripts/apply-product-category-corrections.js` ich obnovuje po synchronizácii a pred kontrolou minimálneho počtu produktov. Kontroluje dodávateľa, kód, EAN, názov a pôvodné zaradenie; sporné alebo zmenené položky nepremiestni naslepo.

Audit zatiaľ nie je uzavretý. Zhoda automatickej kontroly s názvom/popisom nie je ručné schválenie celého katalógu. Príprava importu a finálne prepočítanie nového stromu sa vykonajú po vyriešení otvorených položiek.

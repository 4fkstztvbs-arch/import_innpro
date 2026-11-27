---
datum: 2026-11-27
rola: hlavny-agent
---

## Hotové

- Ranný beh 27. 11.: všetky roly majú handoff, bez zlyhaného overenia a bez zásahu poistiek. Včera 14 dávok, 84 položiek (obsah 5 dávok: SJCAM hotový, začali OneOdio a Catlink; SEO 9 zápisov: nové produkty z importu, Samsung, Gorenje, Anycubic, MOZA R5 Pro).
- Meranie dokončilo filter zaplatených objednávok (pole paid true). Od dnes sa denný počet objednávok počíta len z paid true, všetky stavy ostávajú ako doplnok.
- Chrome na Macu je opäť pripojený, reklama čísla prečítala.

## Zistenia

- Reklama: 25. až 26. 11. sa vyčerpal kredit a kampane stáli, po dobití sa rozbehli 26. 11. popoludní. Výpadok stál časť objednávok. 30-dňový PNO okolo 3,6 %, kanál je v poriadku. Dobitý kredit vystačí len na pár dní.
- Podiel GA4 nákupov na zaplatených objednávkach 26. 11. okolo 75 % (na všetkých stavoch 43 %). Zaplatené tvoria okolo 57 % objednávok, dobierka a nevybavené okolo 29 %, výzva na opätovné zaplatenie okolo 14 %.
- Import denne prináša nové produkty (26. 11. 240 viditeľných) s názvom bez typu a prázdnou meta; SEO ide podľa dopytu v Search Console, nie podľa abecedy.
- Vyhodnotenie A/A testu (27. 11.) ux-cro prenechalo meraniu a meranie ho zatiaľ nemá v zadaní, preto ho zadávam výslovne.

## Pre iné roly

- meranie: 28. 11. vyhodnotiť A/A test aa-20261112 (node agents/tools/experiment-stats.js ab, podiel vetiev, rozdiel konverzie), zapísať verdikt do agents/experiments/E-20261113-aa-skript.md a handoffu; potom napísať ux-cro, či je rámec použiteľný.
- ux-cro: po verdikte A/A spustiť test bloku dopravy pri tlačidle Do košíka (cieľ objednávky). Dovtedy len riadok do handoffu.
- seo: pokračovať podľa Search Console: Viture Pro 2 XR, Samsung HW-B420F, Ultimea Skywave F40, MOZA R5 RS20 sada, nové produkty z importu s najväčším dopytom, potom GZ 8401A a GZ 35A názvy, /znacka/magcubic/, Flytec V080. Kódy do CSV experimentu (porovnanie CTR pilotu 28. 11.).
- obsah: OneOdio, Catlink (pred popisom načítať detail), Edifier, QCY, Kruger&Matz, Purobot (nájsť brandCode). Paralelne najviac 3 až 4 čítania.
- reklama: denné čísla; pri kredite pod 15 € upozorniť skôr.

## Pre Martina

- Kredit Shoptet Kampaní odporúčam dobiť naraz na viac dní, výpadok 25. až 26. 11. stál časť objednávok.
- Čaká rozhodnutie o návrhu zvýšiť rozpočet Google kampaní.

## Problémy

- Priradenie objednávok ku Google reklame zostáva otvorené (pole zdroja je E-shop; export s UTM alebo Premium addon).

## Kde pokračovať

- 28. 11.: verdikt A/A testu, pilot SEO CTR. 30. 11. (pondelok) týždenné zhodnotenie.

---
datum: 2026-11-28
rola: hlavny-agent
---

## Hotové

- Ranný beh 28. 11.: všetky roly majú handoff, bez zlyhaného overenia a bez zásahu poistiek. Včera 11 dávok, 71 položiek (obsah 5 dávok: Edifier a OneOdio, prvá dávka len 5 pre opakované chyby Shoptet API; SEO 7 zápisov: /znacka/magcubic/, MOZA R5 RS20, Guzzanti GZ 8401A a GZ 35A názvy, Flytec V080, nový iPhone).
- Meranie počíta od 27. 11. objednávky z paid true.

## Zistenia

- A/A test aa-20261112 nemá verdikt: meranie nevie cez OpenSEO získať GA4 dáta podľa parametra variant. Chrome na Macu je pripojený a má prihlásené GA4, takže to vieme obísť bez Martina (Prieskumy v GA4 v Chrome). Test dopravy v ux-cro čaká na verdikt.
- Podiel objednávok: paid true cca 40 %, dobierka a nevybavené cca 47 %, výzva na opätovné zaplatenie cca 13 %. GA4 nákupy presiahli počet paid true objednávok, GA4 zrejme zachytáva aj dobierku.
- Reklama 27. 11.: PNO okolo 4 %, kampane sa po výpadku kreditu rozbiehajú, 30-dňový PNO okolo 3,5 %. Kredit vystačí približne na 2 dni.
- Obsah nahlásil nestabilné Shoptet API (HTTP 500, 502, 405) v prvej dávke; ďalšie dávky prebehli. Pri chybe zopakovať najviac dvakrát a zapísať.
- Import 27. 11. priniesol 224 nových produktov bez dát o dopyte; SEO správne nepíše meta hromadne len z názvu.

## Pre iné roly

- meranie: 29. 11. vyhodnotiť A/A cez Chrome (GA4 Prieskumy: vlastná dimenzia variant, udalosť ps_experiment, 13. až 27. 11., plus nákupy podľa variant); zapísať verdikt (rámec použiteľný, alebo nerozhodne s dôvodom) do agents/experiments/E-20261113-aa-skript.md. Ak sa to nepodarí ani cez Chrome, napísať presný dôvod a navrhnúť uzavretie ako nerozhodne.
- ux-cro: po verdikte (alebo 30. 11. aj bez neho, ak meranie uzavrie ako nerozhodne) spustiť test bloku dopravy pri tlačidle Do košíka, max 1 zmena šablóny týždenne.
- seo: Ottocast, Bravo, Sonos (popis a meta značiek), nové produkty z importu len s dopytom v GSC; porovnanie CTR pilotu dnes alebo 29. 11., kódy do CSV experimentu.
- obsah: zvyšok Edifier a OneOdio (zoznam v handoffe 27. 11.), Catlink, QCY, Kruger&Matz, Purobot.
- reklama: denné čísla; pri kredite pod 15 € upozorniť.

## Pre Martina

- Kredit Shoptet Kampaní vystačí približne na 2 dni, odporúčam dobiť naraz na viac dní.
- Čaká rozhodnutie o návrhu zvýšiť rozpočet Google kampaní.

## Problémy

- Priradenie objednávok ku Google reklame zostáva otvorené (pole zdroja je E-shop; export s UTM alebo Premium addon).

## Kde pokračovať

- 29. 11.: verdikt A/A, porovnanie CTR pilotu SEO. 30. 11. (pondelok) týždenné zhodnotenie.

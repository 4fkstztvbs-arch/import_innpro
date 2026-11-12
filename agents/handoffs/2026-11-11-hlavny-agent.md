---
datum: 2026-11-11
rola: hlavny-agent
---

## Hotové

- T-20261110-hlavny-agent-prve-zadania: backlog prejdený (28 úloh), prekrývanie vyriešené, zadania na prvý deň vydané (nižšie). Plánovaná úloha hlavného agenta beží denne o 07:05.

## Zistenia

- Prekrytie: pilot SEO (titulky a meta pre 40 stránok) a vlna 1 obsahu (približne 50 produktov) môžu zasiahnuť tie isté produkty. Rozhodnutie: seo si vyberie pilot najprv a zapíše zoznam 40 produktov do experimentu `seo-skupiny`; obsah ich vo vlne 1 vynechá (aj kontrolnú skupinu), kým pilot nekončí. Obsah mimo pilotu nemení SEO titulok ani meta, to patrí SEO.
- Závislosti: úlohy `obsah-meta-sablona-skladom` a `obsah-preklad-ceskych-textov` čakajú na výsledok `meranie-trvanlivost-zapisov` (či import prepisuje zápisy). Úlohy s `ux-cro-ramec-ab-testov` čakajú na `meranie-oprava-merania-ga4`.
- Prvý deň nikto nezačína ďalšie experimenty nad rámec dvoch (pilot SEO, vlna 1 obsahu), aby sa výsledky dali pripísať.

## Pre iné roly (zadania na prvý deň, v poradí)

- meranie: T-20261110-meranie-vychodiskove-cisla, T-20261110-meranie-oprava-merania-ga4, T-20261110-meranie-trvanlivost-zapisov.
- seo: T-20261110-seo-pokles-organiky, T-20261110-seo-pilot-pozicie-4-10 (zoznam produktov zapísať do experimentu hneď), T-20261110-seo-json-ld-a-hodnotenie.
- obsah: T-20261110-obsah-vlna-1-produkty-s-navstevnostou (bez produktov z pilotu SEO), T-20261110-obsah-audit-katalogu.
- ux-cro: T-20261110-ux-cro-ramec-ab-testov (začať návrhom, test A/A až po oprave merania), T-20261110-ux-cro-pokladna-krok-1.
- reklama: T-20261110-reklama-pokles-heureka (len analýza); T-20261110-reklama-naklady-heureka-a-kampane čaká na Martinove exporty.
- Všetky roly: nové zistenia zapisovať ako úlohy `navrh`; ja ich ráno zaraďujem.

## Pre Martina

- Nič nové. Otvorené z predchádzajúcich dní: história commitov s citlivými číslami z troch findings; návrhy reklamy N1 až N3.

## Problémy

- PR #311 sa zlúčil až po 3 hodinách (vlákno kostry ho nezlúčilo, zlúčil som ho ja). Prvé behy rolí preto začnú dnes, nie večer.
- Z cloudu nie je dostupný Chrome ani premiumstore.sk (403), náklady Heureky a kampaní čakajú na exporty od Martina.

## Kde pokračovať

- Ráno 11. 11. 07:05: prečítať handoffy rolí, metriky merania, zaradiť návrhy z backlogu, poslať prvý report o 7:30.

# Nespárované produkty na Heureke — návrh opráv — 2026-08-19

Vstup: `premiumstoresk_20260819_1200.csv` (6303 nespárovaných produktov, automaticky spracované).

## Súhrn

- Nespárovaných produktov celkom: **6303**
- S návrhom od Heureky (suggestProductName): **2669**
- Bez EAN v našom feede: **704**
- Návrh názvu s EAN zhodou (suggestEan === EAN): **2669**
  - Zamietnuté kontrolou ceny (mimo ±30% okna navrhovanej ceny — pravdepodobne chybný EAN u nás, nie problém názvu): **104**
  - **Prijaté do `name-overrides.json` (pripravené na živé nasadenie): 2565**

**Mechanizmus je pripravený, ale VYPNUTÝ** (rovnaký princíp ako cenový override) — aktivuje sa `HEUREKA_NAME_OVERRIDE=1` v `env:` príslušného `*-sync.yml` workflow. Do aktivácie sa nič v živom feede nemení, len sa dáta pripravujú. Pozri `scripts/heureka-name-overrides.js`.

## Kategórie na doplnenie/opravu v `scripts/heureka-mapping.json`

Nájdených **166** kategórií s dostatočne presvedčivým návrhom (≥3 produkty, ≥60% zhoda medzi návrhmi Heureky) na doplnenie/opravu. Ručne pridaj/uprav v `scripts/heureka-mapping.json` a over namátkovo na Heureke pred nasadením.

| Stav | Naša kategória | Počet produktov | Heureka návrh | Zhoda | Terajšie ID | Navrhované ID |
|---|---|---:|---|---:|---:|---:|
| PRIDAŤ | Kreatívne technológie > 3D tlač > Vlákna | 175 | Elektronika | Počítače a notebooky | Tlačiarne a príslušenstvo | Náplne a farby do tlačiarní | Tlačové struny | 98% | — | 6216 |
| PRIDAŤ | Heureka.sk > Elektronika > Foto, kamery, optika > Foto a kamery > Športové kamery | 104 | Elektronika | Foto, kamery, optika | Príslušenstvo k fotoaparátom | Objektívy a doplnky | Filtre k objektívom | 66% | — | 865 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Mikrofóny | 101 | Elektronika | TV, audio, video | Mikrofóny | 79% | — | 710 |
| PRIDAŤ | TV, audio a video > Mobily a tablety > Smart telefóny | 83 | Elektronika | Mobily, tablety, nositeľná elektronika | Mobilné telefóny | 100% | — | 731 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Hi-Fi komponenty > Zosilňovače | 82 | Elektronika | TV, audio, video | Satelitná a digitálna technika | Zosilňovače a rozbočovače | 67% | — | 6314 |
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Sieťové prvky > IP kamery | 78 | Elektronika | Počítače a notebooky | Sieťové prvky | IP kamery | 86% | — | 1899 |
| PRIDAŤ | TV, audio a video > Foto a optika > Príslušenstvo > Pre fotoaparáty a videokamery | 75 | Elektronika | Foto, kamery, optika | Príslušenstvo k fotoaparátom | Blesky a príslušenstvo | Blesky k fotoaparátom | 74% | — | 669 |
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Tlačiarne a príslušenstvo > Náplne a farby do tlačiarní > Atramenty a refillkity | 61 | Elektronika | Počítače a notebooky | Tlačiarne a príslušenstvo | Náplne a farby do tlačiarní | Náplne a tonery - originálne | 64% | — | 796 |
| PRIDAŤ | Heureka.sk > Bývanie a doplnky > Osvetlenie a svietidlá > LED osvetlenie | 58 | Bývanie a doplnky | Osvetlenie a svietidlá | Svietidlá | 63% | — | 1663 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Reproduktory, soundbary > Reprosústavy a reproduktory | 48 | Elektronika | TV, audio, video | Reproduktory, soundbary | Bluetooth reproduktory | 67% | — | 5948 |
| PRIDAŤ | TV, audio a video > Mobily a tablety > Smart hodinky > Smart prstene | 48 | Elektronika | Inteligentná domácnosť | Wearables | Inteligentné prstene | 100% | — | 7432 |
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Záložné zdroje > UPS | 47 | Elektronika | Počítače a notebooky | Záložné zdroje | UPS | 80% | — | 1906 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > Držiaky a stolíky > Držiaky a stojany na TV a monitory | 45 | Elektronika | Počítače a notebooky | Monitory | 76% | — | 816 |
| PRIDAŤ | Dróny a RC modely > Príslušenstvo pre drony > Filtre pre drony | 41 | Elektronika | Foto, kamery, optika | Príslušenstvo ku kamerám | Filtre ku kamerám | 62% | — | 6755 |
| PRIDAŤ | TV, audio a video > Audio technika > Stojany | 35 | Elektronika | TV, audio, video | Reproduktory, soundbary | Príslušenstvo k reproduktorom | Stojany a držiaky na reproduktory | 95% | — | 811 |
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Príslušenstvo k počítačom > Pamäťové karty | 29 | Elektronika | Počítače a notebooky | Príslušenstvo k počítačom | Pamäťové karty | 100% | — | 822 |
| PRIDAŤ | Heureka.sk > Bývanie a doplnky > Osvetlenie a svietidlá > Dekoratívne osvetlenie > LED pásiky | 28 | Bývanie a doplnky | Osvetlenie a svietidlá | Dekoratívne osvetlenie | LED pásiky | 100% | — | 6351 |
| PRIDAŤ | Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > aktívne | 27 | Hobby | Hudobniny | Zvuková technika | Zvukové aparatúry a príslušenstvo | Aparatúry pre univerzálne použitie | 67% | — | 2012 |
| PRIDAŤ | Profesionálna audio technika > Pódium, diskotéka, DJ > Statívy/držiaky > reproduktorov | 26 | Elektronika | TV, audio, video | Reproduktory, soundbary | Príslušenstvo k reproduktorom | Stojany a držiaky na reproduktory | 100% | — | 811 |
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Sieťové prvky > WiFi antény | 25 | Elektronika | Počítače a notebooky | Sieťové prvky | Access pointy a routery | 92% | — | 1789 |
| PRIDAŤ | Šport, hračky a voľný čas > Outdoor > Rybárčenie > Návnada lode | 24 | Hobby | Rybárske potreby | Rybárske návnady, nástrahy a príslušenstvo | Zavážacie loďky | 100% | — | 8514 |
| PRIDAŤ | TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Simulátory > Simulácia pretekov | 24 | Gaming | Herné príslušenstvo | Diely na stavbu kokpitu | 67% | — | 6546 |
| PRIDAŤ | TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Herné podložky > Podložky | 24 | Gaming | Herné príslušenstvo | Herné ovládače | Gamepady | 100% | — | 812 |
| PRIDAŤ | Bezpečnosť a smart domácnosť > Riadiace jednotky > Prepínače | 23 | Elektronika | Inteligentná domácnosť | Ovládače a spínače pre inteligentnú domácnosť | 100% | — | 5860 |
| PRIDAŤ | Profesionálna audio technika > Pódium, diskotéka, DJ > transportné kufre a racky > príslušenstvo > ostatné | 22 | Hobby | Hudobniny | Hudobné nástroje | Strunové nástroje | Príslušenstvo pre gitary | 80% | — | 2007 |
| PRIDAŤ | Elektroinštalačný materiál > Ostatné > 230V > Rozbočky | 22 | Dielňa, stavba, záhrada | Stavba | Elektromateriály | Elektroinštalačný materiál | Zásuvky, vypínače, termostaty | Zásuvky | 75% | — | 3935 |
| PRIDAŤ | Heureka.sk > Dielňa, stavba, záhrada > Stavba > Elektromateriály > Elektroinštalačný materiál > Zásuvky, vypínače, termostaty > Zásuvky | 22 | Elektronika | Inteligentná domácnosť | Zásuvky pre inteligentnú domácnosť | 90% | — | 5879 |
| PRIDAŤ | Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > IP ozvučenie | 21 | Elektronika | Počítače a notebooky | Sieťové prvky | Switche | 67% | — | 1942 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Televízory | 21 | Elektronika | TV, audio, video | Televízory | 75% | — | 2873 |
| PRIDAŤ | Šport, hračky a voľný čas > Outdoor > Kempovanie | 21 | Šport a outdoor | Športy | Cyklistika | Príslušenstvo na bicykel | Doplnky na bicykel | 67% | — | 2817 |
| PRIDAŤ | Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > pasívne | 21 | Hobby | Hudobniny | Zvuková technika | Zvukové aparatúry a príslušenstvo | Aparatúry pre univerzálne použitie | 100% | — | 2012 |
| PRIDAŤ | Elektroinštalačný materiál > Zvončeky | 21 | Dielňa, stavba, záhrada | Stavba | Elektromateriály | Domová komunikácia | Domové zvončeky | 90% | — | 2897 |
| PRIDAŤ | Heureka.sk > Bývanie a doplnky > Bytové dekorácie > Hodiny a budíky > Hodiny | 20 | Bývanie a doplnky | Bytové dekorácie | Hodiny a budíky | Hodiny | 90% | — | 1738 |
| PRIDAŤ | Heureka.sk > Elektronika > Mobily, tablety, nositeľná elektronika > Tablety a čítačky > Tablety | 20 | Elektronika | Mobily, tablety, nositeľná elektronika | Tablety a čítačky | Tablety | 100% | — | 3021 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Audio príslušenstvo > Príslušenstvo pre gramofóny > Puzdrá a obaly pre gramofóny | 20 | Elektronika | Mobily, tablety, nositeľná elektronika | Príslušenstvo k mobilom | Puzdrá, sklá, fólie | Puzdrá a kryty na mobilné telefóny | Puzdrá a kryty na mobilné telefóny Apple | 100% | — | 8307 |
| PRIDAŤ | TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Príslušenstvo VR | 19 | Gaming | Herné príslušenstvo | Príslušenstvo k herným konzolám | Ostatné príslušenstvo k herným konzolám | 71% | — | 912 |
| PRIDAŤ | Profesionálna audio technika > Reproduktory > výškové | 19 | Elektronika | TV, audio, video | Reproduktory, soundbary | Reprosústavy a reproduktory | 100% | — | 705 |
| PRIDAŤ | Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Regulátory hlasitosti | 18 | Hobby | Hudobniny | Hudobné nástroje | Strunové nástroje | Príslušenstvo pre gitary | 100% | — | 2007 |
| PRIDAŤ | Náradie a dielňa > Kancelária a škola > Fototlačiarne | 18 | Elektronika | Počítače a notebooky | Tlačiarne a príslušenstvo | Tlačiarne | 100% | — | 795 |
| PRIDAŤ | Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > podhľadové | 18 | Elektronika | TV, audio, video | Reproduktory, soundbary | Reprosústavy a reproduktory | 100% | — | 705 |
| PRIDAŤ | Fotovoltaika a energie > Akumulátory a batérie > LiFePO4 akumulátory | 17 | Elektronika | Batérie a nabíjanie | Batérie | LiFePO4 batérie | 88% | — | 8521 |
| PRIDAŤ | Zdravie a starostlivosť > Chovateľské potreby > Inteligentné toalety pre zvieratá | 17 | Chovateľské potreby | Pre mačky | Mačacie toalety a podstielky | Toalety pre mačky | 100% | — | 5791 |
| PRIDAŤ | Heureka.sk > Domáce a osobné spotrebiče > Kuchynské spotrebiče > Filtrácia vody > Filtračné kanvice | 16 | Domáce a osobné spotrebiče | Kuchynské spotrebiče | Filtrácia vody | Filtračné patróny | 67% | — | 8372 |
| PRIDAŤ | Heureka.sk > Dielňa, stavba, záhrada > Dielňa > Spájkovanie > Spájkovačky | 16 | Dielňa, stavba, záhrada | Dielňa | Spájkovanie | Spájkovačky | 100% | — | 4141 |
| PRIDAŤ | Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > reproduktorové stĺpiky 100V | 16 | Elektronika | TV, audio, video | Reproduktory, soundbary | Reprosústavy a reproduktory | 100% | — | 705 |
| PRIDAŤ | Bezpečnosť a smart domácnosť > Prvky výkonu > Smart zámky | 16 | Dielňa, stavba, záhrada | Stavba | Železiarstvo | Kovanie a zámky | Cylindrické vložky | 100% | — | 5194 |
| PRIDAŤ | Heureka.sk > Dielňa, stavba, záhrada > Stavba > Fotovoltaika > Solárne regulátory | 15 | Dielňa, stavba, záhrada | Stavba | Fotovoltaika | Solárne regulátory | 100% | — | 6897 |
| PRIDAŤ | Bezpečnosť a smart domácnosť > Zabezpečenie > PIR čidlá | 15 | Dielňa, stavba, záhrada | Stavba | Elektromateriály | Elektroinštalačný materiál | Zásuvky, vypínače, termostaty | Pohybové čidlá | 67% | — | 3937 |
| PRIDAŤ | Dróny a RC modely > Príslušenstvo pre drony > DJI | 15 | Elektronika | Foto, kamery, optika | Drony a príslušenstvo | Príslušenstvo k dronom | 88% | — | 5081 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > 3D okuliare | 15 | Elektronika | Inteligentná domácnosť | Wearables | Inteligentné okuliare | 63% | — | 4939 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Satelitná a digitálna technika > LNB konvertory | 15 | Elektronika | TV, audio, video | Satelitná a digitálna technika | LNB konvertory | 100% | — | 692 |
| PRIDAŤ | Elektroinštalačný materiál > Osvetlenie > LED pásky > Príslušenstvo | 15 | Bývanie a doplnky | Osvetlenie a svietidlá | Príslušenstvo k svietidlám | Príslušenstvo k LED pásikom | Konektory pre LED pásiky | 71% | — | 7444 |
| PRIDAŤ | Heureka.sk > Domáce a osobné spotrebiče > Kuchynské spotrebiče > Príprava nápojov > Kávovary a príprava kávy > Moka kanvice | 14 | Domáce a osobné spotrebiče | Kuchynské spotrebiče | Príprava nápojov | Kávovary a príprava kávy | Moka kanvice | 100% | — | 5204 |
| PRIDAŤ | Elektroinštalačný materiál > Ostatné > 230V > Koncovky | 14 | Dielňa, stavba, záhrada | Stavba | Elektromateriály | Elektroinštalačný materiál | Zásuvky, vypínače, termostaty | Zásuvky | 93% | — | 3935 |
| PRIDAŤ | Heureka.sk > Chovateľské potreby > Pre hlodavce > Vybavenie klietok pre hlodavce > Napájačky | 14 | Chovateľské potreby | Pre psov | Misky a zásobníky pre psov | 79% | — | 2242 |
| PRIDAŤ | TV, audio a video > Mobily a tablety > GSM nabíjačky | 13 | Elektronika | Mobily, tablety, nositeľná elektronika | Príslušenstvo k mobilom | Batérie a nabíjačky pre mobily | Nabíjačky pre mobilné telefóny | 86% | — | 738 |
| PRIDAŤ | Profesionálna audio technika > Reproduktory > stredo-basové | 13 | Elektronika | TV, audio, video | Reproduktory, soundbary | Reprosústavy a reproduktory | 100% | — | 705 |
| PRIDAŤ | Zdravie a starostlivosť > Chovateľské potreby > Dávkovače krmiva > misky | 13 | Chovateľské potreby | Pre psov | Misky a zásobníky pre psov | 80% | — | 2242 |
| PRIDAŤ | Dróny a RC modely > Príslušenstvo pre drony > Tašky a kufre | 13 | Elektronika | Foto, kamery, optika | Drony a príslušenstvo | Príslušenstvo k dronom | 100% | — | 5081 |
| PRIDAŤ | TV, audio a video > Audio technika > Rádiá | 12 | Elektronika | TV, audio, video | Prenosné audio | Rádioprijímače | 75% | — | 706 |

_(+ ďalších 106 kategórií, pozri `heureka-mapping-candidates.json`)_

## Kategórie bez dostatočne jasného návrhu (171, ≥5 produktov)

Tu Heureka návrhy medzi sebou nesúhlasia (rôzne EAN → rôzne produkty), alebo nie je dosť dát — vyžaduje ručné preskúmanie jednotlivých produktov, nie hromadnú opravu kategórie.

| Naša kategória | Počet produktov | Najčastejší návrh | Zhoda |
|---|---:|---|---:|
| Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > Antény > Satelitné antény | 203 | Elektronika | TV, audio, video | Príslušenstvo k TV, audio-video | Príslušenstvo k TV | Antény | Televízne antény DVB-T a DVB-T2 | 19% |
| Náradie a dielňa > Meracie nástroje | 167 | Dielňa, stavba, záhrada | Stavba | Stavebná technika a náradie | Meradlá a meracie prístroje | Meranie napätia | Ampermetre a voltmetre | 49% |
| Heureka.sk > Hračky > Detské autá a doprava > RC modely a príslušenstvo > Káble a konektory pre RC modely | 133 | Elektronika | Počítače a notebooky | Príslušenstvo k počítačom | Káble a konektory | Audio - video káble | 59% |
| TV, audio a video > Audio technika > Doplnky | 108 | Elektronika | TV, audio, video | Príslušenstvo k TV, audio-video | Príslušenstvo k TV | Diaľkové ovládače | 50% |
| Heureka.sk > Bývanie a doplnky > Osvetlenie a svietidlá > Svietidlá | 94 | Elektronika | Foto, kamery, optika | Ateliérové ​​vybavenie | Štúdiové svetlá | 36% |
| Heureka.sk > Elektronika > Foto, kamery, optika > Príslušenstvo k fotoaparátom > Statívy a príslušenstvo > Statívy | 92 | Elektronika | Foto, kamery, optika | Príslušenstvo ku kamerám | Držiaky ku kamerám | 27% |
| Heureka.sk > Elektronika > TV, audio, video > Slúchadlá | 80 | Elektronika | TV, audio, video | Slúchadlá | 100% |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) | 78 | — | 0% |
| TV, audio a video > Počítače a príslušenstvo > Mini PC | 67 | — | 0% |
| Heureka.sk > Elektronika > Mobily, tablety, nositeľná elektronika > Príslušenstvo k mobilom > Puzdrá, sklá, fólie > Puzdrá a kryty na mobilné telefóny > Puzdrá a kryty na mobilné telefóny Samsung | 64 | Elektronika | Mobily, tablety, nositeľná elektronika | Príslušenstvo k mobilom | Puzdrá, sklá, fólie | Puzdrá a kryty na mobilné telefóny | Puzdrá a kryty na mobilné telefóny Samsung | 54% |
| Bezpečnosť a smart domácnosť > Prvky výkonu > Senzory | 47 | Elektronika | Inteligentná domácnosť | Ovládače a spínače pre inteligentnú domácnosť | 25% |
| Heureka.sk > Šport a outdoor > Športy > Vodné športy > Potápačské vybavenie > Podvodné skútre | 47 | Šport a outdoor | Športy | Vodné športy | Potápačské vybavenie | Podvodné skútre | 100% |
| Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > Predlžovacie káble | 46 | Elektronika | TV, audio, video | Príslušenstvo k TV, audio-video | Príslušenstvo k TV | Predlžovacie káble | 57% |
| Heureka.sk > Šport a outdoor > Športy > Ostatné športy > Bojové športy > Nože a meče na bojové športy > Nože pre bojové športy | 44 | Šport a outdoor | Športy | Ostatné športy | Bojové športy | Box | Boxovacie vrecia a hrušky | 43% |
| Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > Diaľkové ovládače | 43 | Gaming | Herné príslušenstvo | Herné ovládače | Gamepady | 57% |
| Bezpečnosť a smart domácnosť > Riadiace jednotky > Smart ovládače | 40 | Elektronika | Inteligentná domácnosť | Ovládače a spínače pre inteligentnú domácnosť | 52% |
| Heureka.sk > Elektronika > TV, audio, video > Reproduktory, soundbary > Príslušenstvo k reproduktorom > Stojany a držiaky na reproduktory | 36 | Elektronika | TV, audio, video | Reproduktory, soundbary | Reprosústavy a reproduktory | 100% |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Audio procesory | 35 | — | 0% |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Držiaky | 35 | — | 0% |
| Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > príslušenstvo | 34 | — | 0% |
| Heureka.sk > Elektronika > Počítače a notebooky > Tlačiarne a príslušenstvo > 3D tlačiarne | 34 | Elektronika | Počítače a notebooky | Tlačiarne a príslušenstvo | 3D tlačiarne | 100% |
| Heureka.sk > Dielňa, stavba, záhrada > Stavba > Fotovoltaika > Fotovoltaické a solárne panely | 30 | — | 0% |
| Heureka.sk > Elektronika > Počítače a notebooky > Tlačiarne a príslušenstvo > Gravírovacie stroje | 28 | Elektronika | Počítače a notebooky | Tlačiarne a príslušenstvo | Gravírovacie stroje | 100% |
| Záhrada > Zavlažovacie systémy | 27 | Dielňa, stavba, záhrada | Stavba | Voda, plyn, kúrenie | Tvarovky a rúry | 33% |
| Heureka.sk > Elektronika > TV, audio, video > Hi-Fi komponenty > Sieťové prehrávače | 26 | Elektronika | Mobily, tablety, nositeľná elektronika | Príslušenstvo k mobilom | Batérie a nabíjačky pre mobily | Bezdrôtové nabíjačky | 33% |
| Šport, hračky a voľný čas > Fitness Vybavenie | 26 | Šport a outdoor | Športy | Fitness | Trenažéry | Veslovacie trenažéry | 38% |
| Heureka.sk > Elektronika > TV, audio, video > Hi-Fi komponenty > AV prijímače | 25 | Elektronika | Počítače a notebooky | Príslušenstvo k počítačom | Káble a konektory | Audio - video káble | 33% |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Napájacie zdroje | 25 | Elektronika | Počítače a notebooky | Záložné zdroje | UPS | 33% |
| Heureka.sk > Elektronika > Počítače a notebooky > Sieťové prvky > Servery a príslušenstvo > Rackové skrine | 24 | Elektronika | Počítače a notebooky | Záložné zdroje | Prepäťové ochrany | 100% |
| Heureka.sk > Elektronika > Inteligentná domácnosť > Meteostanice | 23 | Elektronika | Inteligentná domácnosť | Príslušenstvo k meteostaniciam | 41% |

## Už správne namapované, no stále nespárované (0 kategórií)

Kategória už má správne `HEUREKA_CATEGORY_ID`, produkty sú napriek tomu nespárované — príčina je inde (názov, chýbajúci EAN, alebo Heureka ešte nestihla prepárovať po poslednom importe).

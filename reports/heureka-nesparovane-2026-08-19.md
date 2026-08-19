# Nespárované produkty na Heureke — návrh opráv — 2026-08-19

Vstup: `premiumstoresk_20260819_1200.csv` (6303 nespárovaných produktov, automaticky spracované).

## Súhrn

- Nespárovaných produktov celkom: **6303**
- S návrhom od Heureky (suggestProductName): **2669**
- Bez EAN v našom feede: **704**
- Návrh názvu s EAN zhodou (suggestEan === EAN): **2669**
  - Zamietnuté kontrolou ceny (mimo ±30% okna navrhovanej ceny — pravdepodobne chybný EAN u nás, nie problém názvu): **104**
  - **Prijaté do `name-overrides.json` (pripravené na živé nasadenie): 2565**

Mechanizmus je za kill-switchom `HEUREKA_NAME_OVERRIDE=1` v `env:` príslušného `*-sync.yml` workflow (rovnaký princíp ako cenový override) — skontroluj tam aktuálny stav pred spoliehaním sa na tieto čísla ako na to, čo sa práve posiela na Heureku. Pozri `scripts/heureka-name-overrides.js`.

## Kategórie na doplnenie/opravu v `scripts/heureka-mapping.json`

Nájdených **33** kategórií s dostatočne presvedčivým návrhom (≥3 produkty, ≥60% zhoda medzi návrhmi Heureky) na doplnenie/opravu. Ručne pridaj/uprav v `scripts/heureka-mapping.json` a over namátkovo na Heureke pred nasadením.

| Stav | Naša kategória | Počet produktov | Heureka návrh | Zhoda | Terajšie ID | Navrhované ID |
|---|---|---:|---|---:|---:|---:|
| PRIDAŤ | Heureka.sk > Elektronika > Foto, kamery, optika > Foto a kamery > Športové kamery | 104 | Elektronika | Foto, kamery, optika | Príslušenstvo k fotoaparátom | Objektívy a doplnky | Filtre k objektívom | 66% | — | 865 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Hi-Fi komponenty > Zosilňovače | 82 | Elektronika | TV, audio, video | Satelitná a digitálna technika | Zosilňovače a rozbočovače | 67% | — | 6314 |
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Tlačiarne a príslušenstvo > Náplne a farby do tlačiarní > Atramenty a refillkity | 61 | Elektronika | Počítače a notebooky | Tlačiarne a príslušenstvo | Náplne a farby do tlačiarní | Náplne a tonery - originálne | 64% | — | 796 |
| PRIDAŤ | Heureka.sk > Bývanie a doplnky > Osvetlenie a svietidlá > LED osvetlenie | 58 | Bývanie a doplnky | Osvetlenie a svietidlá | Svietidlá | 63% | — | 1663 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Reproduktory, soundbary > Reprosústavy a reproduktory | 48 | Elektronika | TV, audio, video | Reproduktory, soundbary | Bluetooth reproduktory | 67% | — | 5948 |
| PRIDAŤ | Dróny a RC modely > Príslušenstvo pre drony > Filtre pre drony | 41 | Elektronika | Foto, kamery, optika | Príslušenstvo ku kamerám | Filtre ku kamerám | 62% | — | 6755 |
| PRIDAŤ | Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > aktívne | 27 | Hobby | Hudobniny | Zvuková technika | Zvukové aparatúry a príslušenstvo | Aparatúry pre univerzálne použitie | 67% | — | 2012 |
| PRIDAŤ | TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Simulátory > Simulácia pretekov | 24 | Gaming | Herné príslušenstvo | Diely na stavbu kokpitu | 67% | — | 6546 |
| PRIDAŤ | Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > IP ozvučenie | 21 | Elektronika | Počítače a notebooky | Sieťové prvky | Switche | 67% | — | 1942 |
| PRIDAŤ | Šport, hračky a voľný čas > Outdoor > Kempovanie | 21 | Šport a outdoor | Športy | Cyklistika | Príslušenstvo na bicykel | Doplnky na bicykel | 67% | — | 2817 |
| PRIDAŤ | Heureka.sk > Domáce a osobné spotrebiče > Kuchynské spotrebiče > Filtrácia vody > Filtračné kanvice | 16 | Domáce a osobné spotrebiče | Kuchynské spotrebiče | Filtrácia vody | Filtračné patróny | 67% | — | 8372 |
| PRIDAŤ | Bezpečnosť a smart domácnosť > Zabezpečenie > PIR čidlá | 15 | Dielňa, stavba, záhrada | Stavba | Elektromateriály | Elektroinštalačný materiál | Zásuvky, vypínače, termostaty | Pohybové čidlá | 67% | — | 3937 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > 3D okuliare | 15 | Elektronika | Inteligentná domácnosť | Wearables | Inteligentné okuliare | 63% | — | 4939 |
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Tlačiarne a príslušenstvo > Skenery | 11 | Elektronika | Počítače a notebooky | Tlačiarne a príslušenstvo | Náplne a farby do tlačiarní | Náplne a tonery - kompatibilné | 63% | — | 4106 |
| PRIDAŤ | Bezpečnosť a smart domácnosť > Smart domácnosť > Zvončeky | 11 | Dielňa, stavba, záhrada | Stavba | Elektromateriály | Domová komunikácia | Domové zvončeky | 67% | — | 2897 |
| PRIDAŤ | Bezpečnosť a smart domácnosť > Smart domácnosť > Ostatné smart elektronika | 11 | Chovateľské potreby | Pre psov | Misky a zásobníky pre psov | 67% | — | 2242 |
| PRIDAŤ | TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Simulátory > Simulácia letu | 9 | Gaming | Herné príslušenstvo | Herné ovládače | Joysticky | 63% | — | 813 |
| PRIDAŤ | Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > príslušenstvo | 8 | Elektronika | TV, audio, video | Reproduktory, soundbary | Reprosústavy a reproduktory | 67% | — | 705 |
| PRIDAŤ | Heureka.sk > Šport a outdoor > Športy > Vodné športy > Paddleboardy | 8 | Šport a outdoor | Športy | Vodné športy | Vodácke vybavenie | Vodácke vrecia | 67% | — | 1429 |
| PRIDAŤ | Heureka.sk > Šport a outdoor > Športy > Ostatné športy > Bojové športy > Nože a meče na bojové športy > Ostatné zbrane pre bojové športy | 7 | Šport a outdoor | Športy | Horolezectvo | Horolezecké steny | 60% | — | 1720 |
| PRIDAŤ | Fotovoltaika a energie > Akumulátory a batérie > NiMh nabíjacie akumulátory > AA ceruzkové | 7 | Elektronika | Batérie a nabíjanie | Batérie | Nabíjacie batérie | 67% | — | 2972 |
| PRIDAŤ | Heureka.sk > Kancelária a papiernictvo > Kancelárska technika a vybavenie prevádzok > Tlačiarne štítkov | 6 | Kancelária a papiernictvo | Kancelárska technika a vybavenie prevádzok | Príslušenstvo ku kancelárskej technike | Farbiace pásky | 67% | — | 3192 |
| PRIDAŤ | Heureka.sk > Bývanie a doplnky > Bytové doplnky > Doplnky do kuchyne > Varenie > Hrnce | 5 | Bývanie a doplnky | Bytové doplnky | Doplnky do kuchyne | Varenie | Hrnce | 67% | — | 1712 |
| PRIDAŤ | Heureka.sk > Šport a outdoor > Športy > Fitness > Trenažéry > Rotopédy | 5 | Šport a outdoor | Športy | Fitness | Trenažéry | Rotopédy | 67% | — | 1325 |
| PRIDAŤ | Bezpečnosť a smart domácnosť > Osvetlenie > Nábytkové svietidlá | 5 | Bývanie a doplnky | Osvetlenie a svietidlá | Svietidlá | 60% | — | 1663 |
| PRIDAŤ | Fotovoltaika a energie > Napájacie zdroje > Nabíjačky notebookov | 5 | Elektronika | Mobily, tablety, nositeľná elektronika | Príslušenstvo k mobilom | Batérie a nabíjačky pre mobily | Nabíjačky pre mobilné telefóny | 60% | — | 738 |
| PRIDAŤ | TV, audio a video > Mobily a tablety > Príslušenstvo | 5 | Elektronika | Inteligentná domácnosť | Wearables | Inteligentné lokátory | 60% | — | 6240 |
| PRIDAŤ | Heureka.sk > Šport a outdoor > Športy > Cyklistika > Kolobežky a príslušenstvo > Kolobežky | 4 | Šport a outdoor | Športy | Cyklistika | Elektrokolobežky | 67% | — | 5016 |
| PRIDAŤ | Šport, hračky a voľný čas > Cyklistika > Pumpy na kolo | 3 | Šport a outdoor | Športy | Cyklistika | Náradie na bicykel a údržba | Pumpy na bicykel | 67% | — | 1230 |
| PRIDAŤ | Fotovoltaika a energie > Nabíjačky > Nabíjačky DC-DC | 3 | Elektronika | Batérie a nabíjanie | Nabíjačky | Solárne nabíjačky | 67% | — | 5062 |
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Počítačové komponenty > Rozširujúce karty do počítača > Sieťové karty | 3 | Elektronika | Počítače a notebooky | Počítačové komponenty | Rozširujúce karty do počítača | Sieťové karty | 67% | — | 913 |
| PRIDAŤ | Šport, hračky a voľný čas > Sportovní vybavenie > Raketové športy > Badminton | 3 | Šport a outdoor | Športy | Raketové športy | Badminton | Badmintonové súpravy | 67% | — | 1776 |
| PRIDAŤ | Šport, hračky a voľný čas > Cyklistika > Svietidlá na kolo | 3 | Šport a outdoor | Športy | Cyklistika | Príslušenstvo na bicykel | Svetlá na bicykel | 67% | — | 2379 |


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

## Už správne namapované, no stále nespárované (133 kategórií)

Kategória už má správne `HEUREKA_CATEGORY_ID`, produkty sú napriek tomu nespárované — príčina je inde (názov, chýbajúci EAN, alebo Heureka ešte nestihla prepárovať po poslednom importe).

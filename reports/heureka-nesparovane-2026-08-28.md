# Nespárované produkty na Heureke — návrh opráv — 2026-08-28

Vstup: `NesparovaneProdukty_2026-08-28_12-49.csv` (4015 nespárovaných produktov, automaticky spracované).

## Súhrn

- Nespárovaných produktov celkom: **4015**
- S návrhom od Heureky (suggestProductName): **490**
- Bez EAN v našom feede: **700**
- Návrh názvu s EAN zhodou (suggestEan === EAN): **490**
  - Zamietnuté kontrolou ceny (mimo ±30% okna navrhovanej ceny — pravdepodobne chybný EAN u nás, nie problém názvu): **72**
  - **Prijaté do `name-overrides.json`: 418**

**Toto NIE JE live** — `<NAME_TO_EXPORTS>` v plnom XML feede spôsobil RNG validačnú chybu a bol 2026-08-20 odstránený zo všetkých `transform-*.js` (Shoptetova schéma tento tag nepozná; zodpovedajúce pole "Alternatívny názov" je dostupné len cez Shoptetov CSV import produktov/admin UI, nie cez dodávateľský XML feed). Tento zoznam je zatiaľ len informačný, čaká na rozhodnutie o alternatívnom mechanizme.

## Kategórie na doplnenie/opravu v `scripts/heureka-mapping.json`

Nájdených **25** kategórií s dostatočne presvedčivým návrhom (≥3 produkty, ≥60% zhoda medzi návrhmi Heureky) na doplnenie/opravu. Ručne pridaj/uprav v `scripts/heureka-mapping.json` a over namátkovo na Heureke pred nasadením.

| Stav | Naša kategória | Počet produktov | Heureka návrh | Zhoda | Terajšie ID | Navrhované ID |
|---|---|---:|---|---:|---:|---:|
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Tlačiarne a príslušenstvo > Náplne a farby do tlačiarní > Tlačové struny | 158 | Elektronika | Počítače a notebooky | Tlačiarne a príslušenstvo | Náplne a farby do tlačiarní | Tlačové struny | 91% | — | 6216 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Reproduktory, soundbary > Príslušenstvo k reproduktorom > Stojany a držiaky na reproduktory | 89 | Elektronika | TV, audio, video | Reproduktory, soundbary | Príslušenstvo k reproduktorom | Stojany a držiaky na reproduktory | 100% | — | 811 |
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Tlačiarne a príslušenstvo > 3D tlačiarne | 39 | Domáce a osobné spotrebiče | Úprava vzduchu | Filtre k čističkám vzduchu | 67% | — | 5953 |
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Tlačiarne a príslušenstvo > Gravírovacie stroje | 28 | Elektronika | Počítače a notebooky | Tlačiarne a príslušenstvo | Gravírovacie stroje | 67% | — | 8450 |
| PRIDAŤ | Heureka.sk > Elektronika > Počítače a notebooky > Tlačiarne a príslušenstvo > Náplne a farby do tlačiarní > Atramenty a refillkity | 23 | Elektronika | Počítače a notebooky | Tlačiarne a príslušenstvo | Náplne a farby do tlačiarní | Náplne a tonery - originálne | 78% | — | 796 |
| PRIDAŤ | Heureka.sk > Bývanie a doplnky > Osvetlenie a svietidlá > LED osvetlenie | 21 | Bývanie a doplnky | Osvetlenie a svietidlá | Svietidlá | 82% | — | 1663 |
| PRIDAŤ | Heureka.sk > Šport a outdoor > Športy > Ostatné športy > Bojové športy > Nože a meče na bojové športy > Nože pre bojové športy | 12 | Šport a outdoor | Športy | Ostatné športy | Bojové športy | Box | Boxovacie vrecia a hrušky | 63% | — | 1142 |
| PRIDAŤ | Heureka.sk > Elektronika > Mobily, tablety, nositeľná elektronika > Príslušenstvo k mobilom > Puzdrá, sklá, fólie > Puzdrá a kryty na mobilné telefóny > Puzdrá a kryty na mobilné telefóny Samsung | 12 | Elektronika | Mobily, tablety, nositeľná elektronika | Príslušenstvo k mobilom | Puzdrá, sklá, fólie | Puzdrá a kryty na mobilné telefóny | Puzdrá a kryty na mobilné telefóny ďalších značiek | 75% | — | 741 |
| PRIDAŤ | Heureka.sk > Auto-moto > Elektromobilita a jej príslušenstvo > Príslušenstvo pre elektromobily > Nabíjačky pre elektromobily | 10 | Auto-moto | Všetko pre autá | Autodoplnky | Autonavijaky | 100% | — | 3991 |
| PRIDAŤ | Heureka.sk > Domáce a osobné spotrebiče > Spotrebiče na upratovanie > Vysávače | 10 | Domáce a osobné spotrebiče | Spotrebiče na upratovanie | Vysávače | 75% | — | 943 |
| PRIDAŤ | Heureka.sk > Šport a outdoor > Športy > Cyklistika > Kolobežky a príslušenstvo > Kolobežky | 9 | Šport a outdoor | Športy | Cyklistika | Kolobežky a príslušenstvo | Kolobežky | 100% | — | 1231 |
| PRIDAŤ | Heureka.sk > Domáce a osobné spotrebiče > Starostlivosť o telo a zdravie > Starostlivosť o telo > Masážne prístroje | 7 | Detský tovar | Pre matku | Dojčenie | Odsávačky materského mlieka | 75% | — | 2703 |
| PRIDAŤ | TV, audio a video > Počítače a príslušenstvo > Akumulátory, batérie > Batérie | 7 | Elektronika | Batérie a nabíjanie | Batérie | Nabíjacie batérie | 60% | — | 2972 |
| PRIDAŤ | Zdravie a starostlivosť > Chovateľské potreby > Prípravky na starostlivosť o zvieratá | 7 | Chovateľské potreby | Pre psov | Hygiena a kozmetika pre psov | Starostlivosť o psiu srsť | Strojčeky na mačky a psy | 75% | — | 6233 |
| PRIDAŤ | Zdravie a starostlivosť > Matka a dieťa > Kŕmenie dieťaťa | 6 | Detský tovar | Detská výživa a kŕmenie | Ohrievače dojčenských fliaš | 83% | — | 6008 |
| PRIDAŤ | Elektroinštalačný materiál > Osvetlenie > LED pásky > Napájacie zdroje 12V | 5 | Dielňa, stavba, záhrada | Stavba | Elektromateriály | Elektroinštalačný materiál | Zásuvky, vypínače, termostaty | Stmievače | 100% | — | 3629 |
| PRIDAŤ | Heureka.sk > Kancelária a papiernictvo > Kancelárska technika a vybavenie prevádzok > Tlačiarne štítkov | 5 | Kancelária a papiernictvo | Kancelárska technika a vybavenie prevádzok | Príslušenstvo ku kancelárskej technike | Farbiace pásky | 100% | — | 3192 |
| PRIDAŤ | Bezpečnosť a smart domácnosť > Prvky výkonu > Smart kúrenie > Termostatické hlavice | 5 | Dielňa, stavba, záhrada | Kúrenie a ohrev vody | Kúrenie | Radiátory a príslušenstvo | Hlavice pre radiátory | 100% | — | 4253 |
| PRIDAŤ | TV, audio a video > Mobily a tablety > Selfie tyče | 5 | Elektronika | Mobily, tablety, nositeľná elektronika | Príslušenstvo k mobilom | Držiaky a statívy | Držiaky na selfie | 80% | — | 5781 |
| PRIDAŤ | Heureka.sk > Domáce a osobné spotrebiče > Kuchynské spotrebiče > Príprava nápojov > Rýchlovarné kanvice | 5 | Domáce a osobné spotrebiče | Kuchynské spotrebiče | Príprava nápojov | Rýchlovarné kanvice | 100% | — | 947 |
| PRIDAŤ | Heureka.sk > Domáce a osobné spotrebiče > Kuchynské spotrebiče > Filtrácia vody > Filtračné kanvice | 4 | Domáce a osobné spotrebiče | Kuchynské spotrebiče | Filtrácia vody | Filtračné patróny | 67% | — | 8372 |
| PRIDAŤ | Heureka.sk > Drogéria > Upratovacie pomôcky > Mopy a upratovacie súpravy | 4 | Drogéria | Upratovacie pomôcky | Mopy a upratovacie súpravy | 67% | — | 3693 |
| PRIDAŤ | Bezpečnosť a smart domácnosť > Osvetlenie > Nábytkové svietidlá | 3 | Bývanie a doplnky | Osvetlenie a svietidlá | Svietidlá | 67% | — | 1663 |
| PRIDAŤ | Fotovoltaika a energie > Napájacie zdroje > Nabíjačky notebookov | 3 | Elektronika | Mobily, tablety, nositeľná elektronika | Príslušenstvo k mobilom | Batérie a nabíjačky pre mobily | Nabíjačky pre mobilné telefóny | 100% | — | 738 |
| PRIDAŤ | Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Ventilátory | 3 | Domáce a osobné spotrebiče | Chladenie a kúrenie | Domáce ventilátory | 100% | — | 1038 |


## Kategórie bez dostatočne jasného návrhu (158, ≥5 produktov)

Tu Heureka návrhy medzi sebou nesúhlasia (rôzne EAN → rôzne produkty), alebo nie je dosť dát — vyžaduje ručné preskúmanie jednotlivých produktov, nie hromadnú opravu kategórie.

| Naša kategória | Počet produktov | Najčastejší návrh | Zhoda |
|---|---:|---|---:|
| Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > Antény > Satelitné antény | 189 | Elektronika | TV, audio, video | Projekčná technika | Príslušenstvo k projektorom | Držiaky k projektorom | 45% |
| Heureka.sk > Hračky > Detské autá a doprava > RC modely a príslušenstvo > Káble a konektory pre RC modely | 118 | Elektronika | Počítače a notebooky | Príslušenstvo k počítačom | Káble a konektory | VGA, DVI, HDMI káble | 100% |
| Heureka.sk > Elektronika > TV, audio, video > Reproduktory, soundbary > Reprosústavy a reproduktory | 99 | Elektronika | TV, audio, video | Reproduktory, soundbary | Reprosústavy a reproduktory | 100% |
| Heureka.sk > Elektronika > TV, audio, video > Mikrofóny | 87 | Elektronika | TV, audio, video | Mikrofóny | 57% |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) | 77 | — | 0% |
| Heureka.sk > Elektronika > TV, audio, video > Slúchadlá | 76 | Elektronika | TV, audio, video | Príslušenstvo k TV, audio-video | Audio príslušenstvo | Príslušenstvo k slúchadlám | Stojany na slúchadlá | 100% |
| Heureka.sk > Elektronika > Foto, kamery, optika > Príslušenstvo k fotoaparátom > Statívy a príslušenstvo > Statívy | 76 | Elektronika | Foto, kamery, optika | Drony a príslušenstvo | Príslušenstvo k dronom | 33% |
| TV, audio a video > Audio technika > Príslušenstvo k audio technike | 75 | — | 0% |
| Heureka.sk > Elektronika > Foto, kamery, optika > Foto a kamery > Športové kamery | 70 | Elektronika | Foto, kamery, optika | Drony a príslušenstvo | Príslušenstvo k dronom | 50% |
| Heureka.sk > Elektronika > TV, audio, video > Hi-Fi komponenty > Zosilňovače | 69 | — | 0% |
| TV, audio a video > Počítače a príslušenstvo > Mini PC | 67 | — | 0% |
| Heureka.sk > Elektronika > Inteligentná domácnosť > Wearables > Inteligentné prstene | 53 | Elektronika | Inteligentná domácnosť | Wearables | Inteligentné prstene | 100% |
| Heureka.sk > Šport a outdoor > Športy > Vodné športy > Potápačské vybavenie > Podvodné skútre | 52 | — | 0% |
| Heureka.sk > Elektronika > Foto, kamery, optika > Príslušenstvo k fotoaparátom > Blesky a príslušenstvo > Blesky k fotoaparátom | 48 | Elektronika | Foto, kamery, optika | Príslušenstvo k fotoaparátom | Objektívy a doplnky | Predsádky a redukcie | 30% |
| Náradie a dielňa > Meracie prístroje | 44 | Dielňa, stavba, záhrada | Stavba | Stavebná technika a náradie | Meradlá a meracie prístroje | Meranie roviny | Meracie lasery | 25% |
| Bezpečnosť a smart domácnosť > Prvky výkonu > Senzory pre smart domácnosť | 42 | Dielňa, stavba, záhrada | Stavba | Stavebná technika a náradie | Meradlá a meracie prístroje | Detektory, senzory | Požiarne hlásiče a detektory plynu | 29% |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Držiaky | 35 | — | 0% |
| Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > príslušenstvo | 34 | — | 0% |
| Profesionálna audio technika > Pódium, diskotéka, DJ > Audio procesory | 33 | — | 0% |
| Heureka.sk > Dielňa, stavba, záhrada > Stavba > Fotovoltaika > Fotovoltaické a solárne panely | 32 | — | 0% |
| Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > Diaľkové ovládače | 29 | Dielňa, stavba, záhrada | Stavba | Ploty | Príslušenstvo k plotu | 50% |
| Bezpečnosť a smart domácnosť > Riadiace jednotky > Smart ovládače | 28 | Elektronika | Inteligentná domácnosť | Ovládače a spínače pre inteligentnú domácnosť | 17% |
| Heureka.sk > Bývanie a doplnky > Osvetlenie a svietidlá > Svietidlá | 27 | Elektronika | Foto, kamery, optika | Ateliérové ​​vybavenie | Fotodáždniky | 20% |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Napájacie zdroje | 24 | Bývanie a doplnky | Osvetlenie a svietidlá | Príslušenstvo k svietidlám | Príslušenstvo k LED pásikom | Ostatné príslušenstvo pre LED pásiky | 100% |
| Heureka.sk > Elektronika > Počítače a notebooky > Sieťové prvky > Servery a príslušenstvo > Rackové skrine | 22 | — | 0% |
| Heureka.sk > Bývanie a doplnky > Bytové dekorácie > Sviatočné dekorácie > Vianoce > Vianočné osvetlenie | 22 | — | 0% |
| Profesionálna audio technika > Svetlá > Diskotékové a pódiové svetelné efekty | 22 | — | 0% |
| Kreatívne technológie > Tlačiarne a lisy na potlač textilu | 21 | — | 0% |
| Profesionálna audio technika > Hudobné nástroje a príslušenstvo > Gitarové príslušenstvo | 21 | — | 0% |
| Záhrada > Záhradné zavlažovacie systémy | 21 | Dielňa, stavba, záhrada | Záhrada | Starostlivosť o rastliny a pestovanie rastlín | Osivá a semená | 100% |

## Už správne namapované, no stále nespárované (8 kategórií)

Kategória už má správne `HEUREKA_CATEGORY_ID`, produkty sú napriek tomu nespárované — príčina je inde (názov, chýbajúci EAN, alebo Heureka ešte nestihla prepárovať po poslednom importe).

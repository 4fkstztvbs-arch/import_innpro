# Nespárované produkty na Heureke — návrh opráv — 2026-08-28

Vstup: `ProduktyCakajuceNaZaradenie_2026-08-28_12-55.csv` (1306 nespárovaných produktov, automaticky spracované).

## Súhrn

- Nespárovaných produktov celkom: **1306**
- S návrhom od Heureky (suggestProductName): **212**
- Bez EAN v našom feede: **241**
- Návrh názvu s EAN zhodou (suggestEan === EAN): **212**
  - Zamietnuté kontrolou ceny (mimo ±30% okna navrhovanej ceny — pravdepodobne chybný EAN u nás, nie problém názvu): **27**
  - **Prijaté do `name-overrides.json`: 185**

**Toto NIE JE live** — `<NAME_TO_EXPORTS>` v plnom XML feede spôsobil RNG validačnú chybu a bol 2026-08-20 odstránený zo všetkých `transform-*.js` (Shoptetova schéma tento tag nepozná; zodpovedajúce pole "Alternatívny názov" je dostupné len cez Shoptetov CSV import produktov/admin UI, nie cez dodávateľský XML feed). Tento zoznam je zatiaľ len informačný, čaká na rozhodnutie o alternatívnom mechanizme.

## Kategórie na doplnenie/opravu v `scripts/heureka-mapping.json`

Nájdených **6** kategórií s dostatočne presvedčivým návrhom (≥3 produkty, ≥60% zhoda medzi návrhmi Heureky) na doplnenie/opravu. Ručne pridaj/uprav v `scripts/heureka-mapping.json` a over namátkovo na Heureke pred nasadením.

| Stav | Naša kategória | Počet produktov | Heureka návrh | Zhoda | Terajšie ID | Navrhované ID |
|---|---|---:|---|---:|---:|---:|
| OPRAVIŤ | Heureka.sk > Elektronika > TV, audio, video > Mikrofóny | 24 | Elektronika | Počítače a notebooky | Príslušenstvo k počítačom | Počítačové mikrofóny | 83% | 710 | 5898 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > Antény > Satelitné antény | 11 | Elektronika | TV, audio, video | Projekčná technika | Príslušenstvo k projektorom | Držiaky k projektorom | 60% | — | 3255 |
| OPRAVIŤ | Heureka.sk > Domáce a osobné spotrebiče > Starostlivosť o telo a zdravie > Starostlivosť o telo > Masážne prístroje | 6 | Detský tovar | Pre matku | Dojčenie | Odsávačky materského mlieka | 75% | 1024 | 2703 |
| PRIDAŤ | Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > Predlžovacie káble | 6 | Dielňa, stavba, záhrada | Stavba | Elektromateriály | Elektroinštalačný materiál | Zásuvky, vypínače, termostaty | Zásuvky | 83% | — | 3935 |
| OPRAVIŤ | Heureka.sk > Kancelária a papiernictvo > Kancelárska technika a vybavenie prevádzok > Tlačiarne štítkov | 5 | Kancelária a papiernictvo | Kancelárska technika a vybavenie prevádzok | Príslušenstvo ku kancelárskej technike | Farbiace pásky | 100% | 1945 | 3192 |
| OPRAVIŤ | Fotovoltaika a energie > Napájacie zdroje > Nabíjačky notebookov | 3 | Elektronika | Mobily, tablety, nositeľná elektronika | Príslušenstvo k mobilom | Batérie a nabíjačky pre mobily | Nabíjačky pre mobilné telefóny | 100% | 4206 | 738 |


## Kategórie bez dostatočne jasného návrhu (53, ≥5 produktov)

Tu Heureka návrhy medzi sebou nesúhlasia (rôzne EAN → rôzne produkty), alebo nie je dosť dát — vyžaduje ručné preskúmanie jednotlivých produktov, nie hromadnú opravu kategórie.

| Naša kategória | Počet produktov | Najčastejší návrh | Zhoda |
|---|---:|---|---:|
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) | 77 | — | 0% |
| Heureka.sk > Elektronika > TV, audio, video > Reproduktory, soundbary > Reprosústavy a reproduktory | 75 | — | 0% |
| Heureka.sk > Elektronika > Foto, kamery, optika > Foto a kamery > Športové kamery | 69 | Elektronika | Foto, kamery, optika | Príslušenstvo ku kamerám | Tašky a puzdrá na videokamery | 50% |
| Heureka.sk > Elektronika > Foto, kamery, optika > Príslušenstvo k fotoaparátom > Blesky a príslušenstvo > Blesky k fotoaparátom | 48 | Elektronika | Foto, kamery, optika | Príslušenstvo k fotoaparátom | Batérie a nabíjačky pre foto a video | Foto - Video nabíjačky | 30% |
| TV, audio a video > Počítače a príslušenstvo > Mini PC | 40 | — | 0% |
| Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > príslušenstvo | 34 | — | 0% |
| Heureka.sk > Dielňa, stavba, záhrada > Stavba > Fotovoltaika > Fotovoltaické a solárne panely | 29 | — | 0% |
| Heureka.sk > Elektronika > Počítače a notebooky > Záložné zdroje > UPS | 26 | Elektronika | Počítače a notebooky | Záložné zdroje | UPS | 100% |
| Heureka.sk > Bývanie a doplnky > Bytové dekorácie > Sviatočné dekorácie > Vianoce > Vianočné osvetlenie | 22 | — | 0% |
| Profesionálna audio technika > Hudobné nástroje a príslušenstvo > Gitarové príslušenstvo | 20 | — | 0% |
| Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > aktívne | 20 | — | 0% |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Montážne skrine a racky | 19 | — | 0% |
| Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > Diaľkové ovládače | 17 | Gaming | Herné príslušenstvo | Herné ovládače | Gamepady | 100% |
| Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Napájacie zdroje | 15 | Bývanie a doplnky | Osvetlenie a svietidlá | Príslušenstvo k svietidlám | Príslušenstvo k LED pásikom | Ostatné príslušenstvo pre LED pásiky | 100% |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Matrix/mixy audio | 13 | — | 0% |
| Heureka.sk > Elektronika > TV, audio, video > Hi-Fi komponenty > Sieťové prehrávače | 13 | — | 0% |
| Heureka.sk > Bývanie a doplnky > Osvetlenie a svietidlá > Svietidlá | 12 | Elektronika | Foto, kamery, optika | Ateliérové ​​vybavenie | Odrazové dosky | 25% |
| Heureka.sk > Elektronika > TV, audio, video > Príslušenstvo k TV, audio-video > Príslušenstvo k TV > 3D okuliare | 12 | — | 0% |
| Heureka.sk > Elektronika > Foto, kamery, optika > Príslušenstvo k fotoaparátom > Statívy a príslušenstvo > Statívy | 11 | — | 0% |
| Šport, hračky a voľný čas > Elektrické bicykle | 10 | Šport a outdoor | Športy | Fitness | Trenažéry | Cyklotrenažéry | 100% |
| Heureka.sk > Elektronika > TV, audio, video > Televízory | 10 | Elektronika | TV, audio, video | Televízory | 50% |
| Heureka.sk > Šport a outdoor > Športy > Vodné športy > Potápačské vybavenie > Podvodné skútre | 9 | — | 0% |
| Fotovoltaika a energie > Napájacie zdroje > Priemyselné zdroje | 9 | — | 0% |
| Heureka.sk > Elektronika > Počítače a notebooky > Príslušenstvo k počítačom > Webkamery | 9 | — | 0% |
| Heureka.sk > Elektronika > Počítače a notebooky > Príslušenstvo k počítačom > Pamäťové karty | 9 | — | 0% |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Reproduktory > nástenné | 9 | — | 0% |
| Bezpečnosť a smart domácnosť > Zabezpečenie > Laserové senzory pohybu | 8 | — | 0% |
| Profesionálna audio technika > Plošné ozvučenie (100V rozhlasové ozvučenie) > Bezdrôtové ozvučenie | 8 | — | 0% |
| Heureka.sk > Elektronika > Počítače a notebooky > Tlačiarne a príslušenstvo > Tlačiarne | 8 | — | 0% |
| Heureka.sk > Elektronika > Mobily, tablety, nositeľná elektronika > Príslušenstvo k mobilom > Batérie a nabíjačky pre mobily > Nabíjačky pre mobilné telefóny | 8 | Elektronika | Mobily, tablety, nositeľná elektronika | Príslušenstvo k mobilom | Batérie a nabíjačky pre mobily | Bezdrôtové nabíjačky | 100% |

## Už správne namapované, no stále nespárované (11 kategórií)

Kategória už má správne `HEUREKA_CATEGORY_ID`, produkty sú napriek tomu nespárované — príčina je inde (názov, chýbajúci EAN, alebo Heureka ešte nestihla prepárovať po poslednom importe).

# Zjednotenie duplicitných kategórií — 2026-08-24

Analyzovaných 2928 kategórií zo živého Shoptet stromu (export shoptet-categories-2026-08-24.csv).
7 pravidiel pridaných do mapovaní (kanonická kategória = nižšie Shoptet ID, t.j. staršia/pôvodná).

## Automaticky zjednotené

Zapísané do `scripts/*-mapping.json`, vrátane všetkých podkategórií zlúčenej vetvy —
prejaví sa pri najbližšom nočnom behu daného dodávateľa.

| Zhoda | Kanonická (ostáva, nižšie ID) | Zlúčené (presúva sa sem) |
|---|---|---|
| 94% | TV, audio a video > Počítače a príslušenstvo > Dokovacie stanice _(id 46491, spolu 10 produktov)_ | TV, audio a video > Počítače a príslušenstvo > Dokovací stanice _(id 47985, spolu 1)_ |
| 94% | Náradie a dielňa > MERACIE TECHNIKA _(id 40998, spolu 401 produktov)_ | Náradie a dielňa > Meracia technika _(id 47850, spolu 21)_ |
| 92% | TV, audio a video > Audio technika > HiFi systémy _(id 40008, spolu 7 produktov)_ | TV, audio a video > Audio technika > Hi-Fi systémy _(id 43413, spolu 0)_ |

## Na ručné posúdenie

Buď nižšia zhoda, alebo prešlo cez bezpečnostný pomer (jedna strana má neúmerne viac
produktov než by pri automatickom zlúčení "prehrala") — pozri komentár na začiatku
`scripts/find-category-duplicates.js`.

| Zhoda | Kategórie v skupine (ID, spolu produktov vrátane podkategórií) |
|---|---|
| 95% | Auto-moto > Karavany a obytné autá _(id 41163, spolu 0)_; Auto-moto > Karavany a obytná autá _(id 48000, spolu 85)_ |
| 89% | Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Zvlhčovače vzduchu _(id 40428, spolu 3)_; Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Odvlhčovače vzduchu _(id 40554, spolu 13)_ |
| 89% | Šport, hračky a voľný čas > Sportovní vybavenie > Odražedla _(id 48123, spolu 0)_; Šport, hračky a voľný čas > Sportovní vybavenie > Odrážadlá _(id 48135, spolu 9)_ |
| 89% | TV, audio a video > Mobily a tablety > Kable USB I > USB na Lightning _(id 45783, spolu 15)_; TV, audio a video > Mobily a tablety > Kable USB I > USB-C na Lightning _(id 45939, spolu 0)_ |
| 88% | Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační žaluzie bez nadstavce (na omítku) _(id 43986, spolu 12)_; Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační žaluzie s nástavcem (na omítku) _(id 44799, spolu 4)_ |
| 88% | Náradie a dielňa > Meracie nástroje _(id 45954, spolu 272)_; Náradie a dielňa > Rezacie nástroje _(id 46251, spolu 4)_ |
| 88% | Záhrada > Sanitárna technika > Sprchové hadice _(id 42534, spolu 1)_; Záhrada > Sanitárna technika > Sprchové hlavice _(id 42537, spolu 7)_ |
| 87% | TV, audio a video > Reproduktory > Drátové reproduktory _(id 39504, spolu 6)_; TV, audio a video > Reproduktory > Bezdrátové reproduktory _(id 40020, spolu 64)_ |
| 86% | Domáce spotrebiče > Veľké spotrebiče > Chladničky > Kombinované chladničky > Chladničky s mrazákom nahoře _(id 39960, spolu 8)_; Domáce spotrebiče > Veľké spotrebiče > Chladničky > Kombinované chladničky > Chladničky s mrazákom dole _(id 40341, spolu 49)_ |
| 86% | TV, audio a video > Mobily a tablety > Kable USB I > USB na USB-C _(id 46308, spolu 9)_; TV, audio a video > Mobily a tablety > Kable USB I > USB-C na USB-C _(id 46515, spolu 2)_ |
| 85% | TV, audio a video > Audio technika > Slúchadlá > Bezdrôtové slúchadlá _(id 46017, spolu 106)_; TV, audio a video > Audio technika > Slúchadlá > Drôtové slúchadlá _(id 46029, spolu 27)_ |
| 84% | Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Odpojovače batérií _(id 44826, spolu 4)_; Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Propojovače batérií _(id 45615, spolu 1)_ |
| 84% | Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice Acqua IP65 _(id 41547, spolu 11)_; Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice AcquaPLUS IP65 _(id 44256, spolu 1)_ |
| 84% | Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ QUIET _(id 43980, spolu 7)_; Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ QUIETLINE _(id 45153, spolu 4)_ |
| 83% | Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory _(id 42150, spolu 170)_; Elektroinštalačný materiál > Ventilačné technika > Krbové ventilátory _(id 45156, spolu 1)_ |
| 83% | Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS _(id 42153, spolu 128)_; Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady DOSPEL _(id 43992, spolu 14)_ |
| 83% | Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady DOSPEL _(id 44022, spolu 1)_; Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS _(id 44439, spolu 35)_ |
| 83% | Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou s nástavcem _(id 44793, spolu 4)_; Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou bez nadstavce _(id 45162, spolu 3)_ |
| 83% | Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou s nástavcem a s regulací _(id 44796, spolu 2)_; Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou bez nadstavce s regulací _(id 45165, spolu 1)_ |
| 83% | Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte štiepacie > Kliešte štiepacie boční _(id 44703, spolu 4)_; Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte štiepacie > Kliešte štiepacie čelné _(id 45387, spolu 3)_ |
| 82% | TV, audio a video > Počítače a príslušenstvo > Tlačiarne a skenery > Multifunkčné tlačiarne > Laserové multifunkčné tlačiarne _(id 39837, spolu 6)_; TV, audio a video > Počítače a príslušenstvo > Tlačiarne a skenery > Multifunkčné tlačiarne > Atramentové multifunkčné tlačiarne _(id 40386, spolu 45)_ |
| 82% | Fotovoltaika a energie > Akumulátory a batérie > NiMh nabíjacie akumulátory _(id 43899, spolu 12)_; Fotovoltaika a energie > Akumulátory a batérie > Li-Ion nabíjacie akumulátory _(id 44079, spolu 4)_ |
| 82% | Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky > Priemyselné zásuvky > Vstavané priemyselné zásuvky _(id 41343, spolu 50)_; Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky > Priemyselné zásuvky > Nástenné priemyselné zásuvky _(id 41346, spolu 14)_ |
| 82% | Záhrada > Odpudzovače a lapače hmyzu > Odpudzovače a lapače hmyzu _(id 42129, spolu 35)_; Záhrada > Odpudzovače a lapače hmyzu > Odpudzovače a lapače slimáků _(id 42840, spolu 4)_ |
| 82% | Šport, hračky a voľný čas > Ďalekohľady > Binokulární _(id 41712, spolu 21)_; Šport, hračky a voľný čas > Ďalekohľady > Monokulární _(id 44775, spolu 9)_ |
| 82% | TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Rozbočovače _(id 41409, spolu 27)_; TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Odbočovače _(id 44661, spolu 8)_ |
| 82% | Šport, hračky a voľný čas > Bojové športy > Boxovací pytle - prázdné _(id 41769, spolu 11)_; Šport, hračky a voľný čas > Bojové športy > Boxovací pytle - plné _(id 41775, spolu 18)_ |
| 82% | Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky PAGURO IP68 _(id 42345, spolu 7)_; Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky LEDJOY IP68 _(id 43677, spolu 1)_ |
| 82% | Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ TT pre _(id 45024, spolu 8)_; Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ TT _(id 45111, spolu 7)_ |
| 81% | Domáce spotrebiče > Veľké spotrebiče _(id 39426, spolu 344)_; Domáce spotrebiče > Malé spotrebiče _(id 39432, spolu 2489)_ |
| 81% | Šport, hračky a voľný čas > Posilňovanie a fitness > Pomôcky na cvičenie > Pomôcky na cvičenie doma _(id 41487, spolu 36)_; Šport, hračky a voľný čas > Posilňovanie a fitness > Pomôcky na cvičenie > Pomôcky na cvičenie břicha _(id 41628, spolu 3)_ |
| 80% | Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační klapky s kruhovým nástavcem _(id 43989, spolu 2)_; Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační klapky bez kruhového nadstavce _(id 45450, spolu 1)_ |
| 80% | Zdravie a starostlivosť > Starostlivosť o zuby _(id 39585, spolu 127)_; Zdravie a starostlivosť > Starostlivosť o vlasy _(id 39591, spolu 247)_; Zdravie a starostlivosť > Starostlivosť o pleť _(id 45978, spolu 7)_ |
| 80% | Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Audi _(id 42054, spolu 0)_; Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Hyundai _(id 43620, spolu 0)_ |
| 80% | TV, audio a video > TV stolíky a držiaky > Držiaky reproduktorů _(id 43878, spolu 1)_; TV, audio a video > TV stolíky a držiaky > Držiaky projektorů _(id 45609, spolu 0)_ |
| 80% | Elektroinštalačný materiál > Inštalačné príslušenstvo > Sťahovacie pásky > Plastové sťahovacie pásky _(id 42660, spolu 16)_; Elektroinštalačný materiál > Inštalačné príslušenstvo > Sťahovacie pásky > Kovové sťahovacie pásky _(id 44166, spolu 13)_ |
| 80% | Elektroinštalačný materiál > Ventilačné technika > Talířové ventily a difuzéry > Plastové talířové ventily _(id 44733, spolu 2)_; Elektroinštalačný materiál > Ventilačné technika > Talířové ventily a difuzéry > Kovové talířové ventily _(id 45447, spolu 2)_ |
| 79% | Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Brúsky _(id 40206, spolu 4)_; Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Píly _(id 40335, spolu 1)_ |
| 79% | Fotovoltaika a energie > Fotovoltaika > Káble pre fotovoltaiku _(id 41082, spolu 5)_; Fotovoltaika a energie > Fotovoltaika > Náradie pre fotovoltaiku _(id 43278, spolu 0)_ |
| 79% | Elektroinštalačný materiál > Montážne skrine a rozvádzače > Revízne dvierka > Plastová revízne dvierka _(id 43029, spolu 11)_; Elektroinštalačný materiál > Montážne skrine a rozvádzače > Revízne dvierka > Kovová revízne dvierka _(id 44145, spolu 18)_ |
| 79% | Elektroinštalačný materiál > Ventilačné technika > Revízne dvierka > Plastová revízne dvierka _(id 43035, spolu 11)_; Elektroinštalačný materiál > Ventilačné technika > Revízne dvierka > Kovová revízne dvierka _(id 44148, spolu 0)_ |
| 79% | Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Nissan _(id 43443, spolu 0)_; Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Kia _(id 44463, spolu 0)_ |
| 79% | Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače křížové _(id 43968, spolu 2)_; Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače úderové _(id 45594, spolu 0)_ |
| 79% | TV, audio a video > Audio technika _(id 39417, spolu 905)_; TV, audio a video > Video technika _(id 39516, spolu 38)_ |
| 79% | Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Výrobníky ľadu _(id 39945, spolu 11)_; Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Výrobníky sódy _(id 39981, spolu 7)_ |
| 79% | Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry > Stolové mixéry _(id 39606, spolu 42)_; Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry > Tyčové mixéry _(id 39843, spolu 21)_ |
| 79% | Bezpečnosť a smart domácnosť > Smart domácnosť > Smart žiarovky _(id 40299, spolu 2)_; Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zásuvky _(id 47997, spolu 2)_ |
| 78% | Náradie a dielňa > Elektronické súčiastky > Poistky, pojistkové držiaky > Poistky 5x20mm rychlé (F) _(id 45084, spolu 25)_; Náradie a dielňa > Elektronické súčiastky > Poistky, pojistkové držiaky > Poistky 5x20mm pomalé (T) _(id 45114, spolu 15)_ |

## Kategórie na vypnutie (visible=0) — 385 bez produktov (vrátane podkategórií), stav TERAZ

Toto je bezpečné vypnúť hneď — nezávisí od schválenia zlúčení vyššie (0 produktov teraz aj po
nich). Po schválení a nasadení zlúčení pribudnú do prázdneho zoznamu aj kategórie z tabuľky
vyššie (spustiť tento skript znova s `--dry-run` po najbližšom nočnom behu, aby sa to overilo).

Strojovo spracované v `data/shoptet-categories-hide.csv` (rovnaký formát ako pôvodný export,
`visible` prepnuté na `0`), pripravené na re-import cez Shoptet (Nastavenia → Import dát → Kategórie).

- Auto-moto > Audio, Hi-Fi > Autorádiá
- Auto-moto > Audio, Hi-Fi > Reproduktory do autá
- Auto-moto > Autorádiá > Subwoofery do autá
- Auto-moto > Garáž, Dielňa, Servis > Hasicí prístroje
- Auto-moto > Garáž, Dielňa, Servis > Parkovací zábrany
- Auto-moto > Garáž, Dielňa, Servis > Sťahováky
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Seat
- Auto-moto > Karavany a obytná autá > Batérie do karavanu
- Auto-moto > Karavany a obytná autá > Kempingový nábytok
- Auto-moto > Karavany a obytná autá > Lapače hmyzu
- Auto-moto > Karavany a obytná autá > Redukcie a adaptéry
- Auto-moto > Karavany a obytná autá > Televízory na 12V
- Auto-moto > Karavany a obytné autá
- Auto-moto > Karavany a obytné autá > Autochladničky
- Auto-moto > Karavany a obytné autá > Batérie do karavanu
- Auto-moto > Karavany a obytné autá > Grily a variče
- Auto-moto > Karavany a obytné autá > Kempingový nábytok
- Auto-moto > Karavany a obytné autá > Lapače hmyzu
- Auto-moto > Karavany a obytné autá > Meniče napätie
- Auto-moto > Karavany a obytné autá > Mobilné TV a SAT antény
- Auto-moto > Karavany a obytné autá > Mobilné TV a SAT antény > Antény pre DVB-T2 príjem
- Auto-moto > Karavany a obytné autá > Nabíjačky batérií
- Auto-moto > Karavany a obytné autá > Nabíjačky batérií > Autonabíjačky
- Auto-moto > Karavany a obytné autá > Ostatné doplnky
- Auto-moto > Karavany a obytné autá > Parkovací asistenti
- Auto-moto > Karavany a obytné autá > Redukcie a adaptéry
- Auto-moto > Karavany a obytné autá > Televízory na 12V
- Auto-moto > Kolesá > Obaly na pneumatiky
- Auto-moto > Nabíjanie > Autobatérie
- Auto-moto > Nabíjanie > Štartovacie káble
- Auto-moto > Nosiče bicyklov
- Auto-moto > Nosiče bicyklov > Nosiče na tažné zariadenie
- Auto-moto > Nosiče bicyklov > Príslušenstvo
- Auto-moto > Nosiče bicyklov > Příčné nosníky
- Auto-moto > Nosiče bicyklov > Střešní nosiče
- Auto-moto > Ostatné
- Auto-moto > Prenosné chladničky
- Auto-moto > Vybavenie auta
- Auto-moto > Vybavenie auta > Adaptéry napájení
- Auto-moto > Vybavenie auta > Autokoberce
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Audi
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Audi > Audi Q2
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Audi > Audi Q3
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Audi > Audi Q8
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce BMW
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce BMW > X1, X3, X4, X5, X6
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Citroën
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Citroën > Jumper
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Dacia
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Dacia > Dokker
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Ford
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Ford > Explorer
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Hyundai
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Hyundai > Santa Fe
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Hyundai > Sonata
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Jeep
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Jeep > Cherokee
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Jeep > Liberty
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Kia
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Kia > Cerato
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Kia > Optima
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Mercedes-Benz
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Mercedes-Benz > Sprinter
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Mercedes-Benz > Třída A
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Mercedes-Benz > Třída C
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Mercedes-Benz > Třída G
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Nissan
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Nissan > Pathfinder
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Opel
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Opel > Zafira
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Peugeot
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Peugeot > 408
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Peugeot > Boxer
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Renault
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Renault > Duster
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Renault > Symbol
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce SsangYong
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Toyota
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Toyota > Camry
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Toyota > Land Cruiser
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volkswagen
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volkswagen > Amarok
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volkswagen > Crafter
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volkswagen > Polo
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volkswagen > Transporter
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volvo
- Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Volvo > S60
- Auto-moto > Vybavenie auta > Autopotahy
- Auto-moto > Vybavenie auta > Autopotahy > Ochrany sedadel
- Auto-moto > Vybavenie auta > Autopotahy > Opěrky hlavy
- Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy
- Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dodávky
- Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dodávky > Autopotahy PRACTICAL dodávka
- Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dvě sedadla
- Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dvě sedadla > Autotrička BAVLNA
- Auto-moto > Vybavenie auta > Autopotahy > Vyhřívané autopotahy
- Auto-moto > Vybavenie auta > Autožiarovky
- Auto-moto > Vybavenie auta > Autožiarovky > 12V
- Auto-moto > Vybavenie auta > Autožiarovky > 12V Excelite
- Auto-moto > Vybavenie auta > Autožiarovky > 12V White Laser
- Auto-moto > Vybavenie auta > Autožiarovky > 12V halogenové
- Auto-moto > Vybavenie auta > Autožiarovky > 24V
- Auto-moto > Vybavenie auta > Autožiarovky > CSP LED žiarovky
- Auto-moto > Vybavenie auta > Autožiarovky > LED žiarovky
- Auto-moto > Vybavenie auta > Autožiarovky > SMD LED žiarovky
- Auto-moto > Vybavenie auta > Autožiarovky > Sady žárovek
- Auto-moto > Vybavenie auta > Cestovné doplnky
- Auto-moto > Vybavenie auta > Clony a roletky
- Auto-moto > Vybavenie auta > Držiaky na mobily
- Auto-moto > Vybavenie auta > Meniče napätie
- Auto-moto > Vybavenie auta > Odpojovač batérie
- Auto-moto > Vybavenie auta > Organizéry do kufru
- Auto-moto > Vybavenie auta > Osviežovače vzduchu
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Různé
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône AROMA CAR
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône CAR CITY
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône CITY
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône FRESH BAG
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône FRESH POINT
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône INTENSO
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône LUCKY TOP
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône Mr&Mrs CESARE
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône SPEED
- Auto-moto > Vybavenie auta > Podložky SPZ
- Auto-moto > Vybavenie auta > Poistky
- Auto-moto > Vybavenie auta > Povinná výbava
- Auto-moto > Vybavenie auta > Stierače
- Auto-moto > Vybavenie auta > Stierače > Gumičky stieračov
- Auto-moto > Vybavenie auta > Stierače > HELLA Cleantech
- Auto-moto > Vybavenie auta > Stierače > Klasické kovové
- Auto-moto > Vybavenie auta > Stierače > Ploché FLAT Flexi
- Auto-moto > Vybavenie auta > Stierače > Ploché FLAT Multi
- Auto-moto > Vybavenie auta > Stierače > Sady stieračov FLAT DOUBLE
- Auto-moto > Vybavenie auta > Stierače > Sady stieračov FLAT SET
- Auto-moto > Vybavenie auta > Stierače > Stierače BULK
- Auto-moto > Vybavenie auta > Stierače > Stierače HYBRID
- Auto-moto > Vybavenie auta > Stierače > Stierače zadního okna
- Auto-moto > Vybavenie auta > Svetlá
- Auto-moto > Vybavenie auta > Ventilátory
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové videorekordéry (NVR) > 64 kanálů
- Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Interné pevné disky
- Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Prevodníky
- Bezpečnosť a smart domácnosť > Smart domácnosť > Robotické vysávače
- Bezpečnosť a smart domácnosť > Smart domácnosť > Rádiá
- Bezpečnosť a smart domácnosť > Smart domácnosť > Televízory
- Bezpečnosť a smart domácnosť > Smart domácnosť > Vykurovanie
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Krájače a porcovače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Drobné kuchynské spotrebiče
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Elektrické hrnce
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Elektrické panvice
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Fritézy
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Grily
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Hriankovače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Kuchynské roboty
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Kávovary
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Mixéry
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Palacinkovače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Pece na pizzu
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Rúry
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Rýchlovarné kanvice
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Sendvičovače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Sušičky potravín
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vaflovače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Variče
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vysávače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vysávače > Podlahové vysávače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vysávače > Robotické vysávače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vysávače > Ručné vysávače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Vysávače > Tyčové vysávače
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Výrobníky ľadu
- Domáce spotrebiče > Malé spotrebiče > Ostatné spotrebiče > Zváračky folií
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Aroma difuzéry
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Doplnky do domácnosti > Koše na bielizeň
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Doplnky do domácnosti > Sušiaky na bielizeň
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Efekty a dekorácie
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Efekty a dekorácie > Do bytu
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Efekty a dekorácie > Halloween
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Efekty a dekorácie > Na párty
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Filtračné kanvice
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Formy na pečení
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Hodiny a budíky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Hodiny a budíky > Budíky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Hodiny a budíky > Hodiny
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Hodiny a budíky > Časovače, minútky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kanvice na čaj
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské pomôcky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské pomôcky > Lúskačky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské pomôcky > Ostatné kuchynské pomôcky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské pomôcky > Teplomery
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské pomôcky > Varešky a obracačky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské váhy
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Nože a příbory
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Nože a příbory > Brousky na nože
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Osobné váhy
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Starostlivosť o telo
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Starostlivosť o telo > Kulmy a sušiče vlasů
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Testery alkoholu
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Těsnění do okien a dveří
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Upratovanie > Handry, houbičky a utěrky na upratovanie
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Upratovanie > Metly a mopy na upratovanie
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Vonné oleje
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Domové alarmy a zvončeky
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Domové alarmy a zvončeky > Bezpečnostní kamery
- Domáce spotrebiče > Veľké spotrebiče > Umývačky riadu > Príslušenstvo k umývačke
- Druhy > AKCE ATOS 35 LET
- Elektroinštalačný materiál > Elektromery a spínacie technika > Hladinvé spínače
- Elektroinštalačný materiál > Elektromery a spínacie technika > Laserové senzory pohybu
- Elektroinštalačný materiál > Elektromery a spínacie technika > SMART elektromery
- Elektroinštalačný materiál > Elektromery a spínacie technika > Schodišťové automaty
- Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Chémia
- Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Kľúče na F konektory
- Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Ostatné
- Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Ořezávače káblov
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblová oká
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Smršťovací bužírky
- Elektroinštalačný materiál > Ističe a chrániče > Odpojovače batérií
- Elektroinštalačný materiál > Komponenty pre svietidlá > LED světelné zdroje
- Elektroinštalačný materiál > Káble a vodiče > Auto káble
- Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Vonkajšie
- Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Vícenásobné káble
- Elektroinštalačný materiál > Montážne skrine a rozvádzače > Skrine pre kamerové systémy
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > E14
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > E14 závit
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > E27
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > E27 závit
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > G4 patice
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > G9 patice
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > G9&G4
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > GU10
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > GU10 patice
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > MR16 patice
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > Ostatné svetelné zdroje
- Elektroinštalačný materiál > Osvetlenie > Stojace lampy
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Kempingové
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Ručné
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Čelovky
- Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Flexo šnúry
- Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Spínacie zásuvky > Smart zásuvky
- Elektroinštalačný materiál > Prepäťové ochrany > Koaxiálne ochrany
- Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ PF
- Elektroinštalačný materiál > Ventilačné technika > Pre rackové skrine
- Elektroinštalačný materiál > Ventilačné technika > Revízne dvierka > Kovová revízne dvierka
- Elektroinštalačný materiál > Vypínače, zásuvky, krabice > Rámečky
- Fotovoltaika a energie > Akumulátory a batérie > Autobatérie
- Fotovoltaika a energie > Akumulátory a batérie > Batérie do AKU náradie
- Fotovoltaika a energie > Akumulátory a batérie > Solárne batérie
- Fotovoltaika a energie > Fotovoltaické panely > Balkónové systémy
- Fotovoltaika a energie > Fotovoltaické panely > Príslušenstvo
- Fotovoltaika a energie > Fotovoltaika > Elektromery
- Fotovoltaika a energie > Fotovoltaika > Elektromery > 1 fázové elektromery
- Fotovoltaika a energie > Fotovoltaika > Elektromery > 3 fázové elektromery
- Fotovoltaika a energie > Fotovoltaika > Konektory pre fotovoltaiku > Dutinky na kabel
- Fotovoltaika a energie > Fotovoltaika > Konektory pre fotovoltaiku > Káblová očká
- Fotovoltaika a energie > Fotovoltaika > Káble pre fotovoltaiku > Chráničky
- Fotovoltaika a energie > Fotovoltaika > Káble pre fotovoltaiku > Silové káble
- Fotovoltaika a energie > Fotovoltaika > Náradie pre fotovoltaiku
- Fotovoltaika a energie > Fotovoltaika > Ochrana FV instalací > Poistky
- Fotovoltaika a energie > Fotovoltaika > Rozvádzače > Výhodné sety rozvaděč + komponenty
- Fotovoltaika a energie > Fotovoltaika > Solárne batérie
- Fotovoltaika a energie > Fotovoltaika > Solárne nabíjačky
- Fotovoltaika a energie > Nabíjačky > Stanice pre elektrokola
- Fotovoltaika a energie > Napájacie zdroje > Adaptéry USB
- Fotovoltaika a energie > Napájacie zdroje > Adaptéry cestovné
- Náradie a dielňa > Chémia > Chémia pre pájení
- Náradie a dielňa > Dielenské vybavenie > Přísavky manipulační
- Náradie a dielňa > Drobné náradie a príslušenstvo > Zámky
- Náradie a dielňa > Elektrické a AKU náradie > Nabíjačky k AKU náradie
- Náradie a dielňa > Elektrické a AKU náradie > Píly > Píly reťazové
- Náradie a dielňa > Kancelária a škola > Školské potreby > Peračníky
- Náradie a dielňa > MERACIE TECHNIKA > Inspekční kamery, endoskopy
- Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte seeger
- Náradie a dielňa > Mechanické náradie > Náradie pre ženy
- Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače elektrikárske
- Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače pre jemnou mechaniku
- Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače úderové
- Náradie a dielňa > Mechanické náradie > Vodo-topo > Horáky
- Náradie a dielňa > Náradie > Elektrické náradie > Vŕtačky
- Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre hoblíky a sústruhy
- Náradie a dielňa > SPÁJKOVACIE TECHNIKA > Tavné a horúcovzdušné pištole
- Náradie a dielňa > Stavebné a maliarske náradie > Obkladačské práce > Vrtáky
- Náradie a dielňa > Stavebné a maliarske náradie > Sadrokartón
- Náradie a dielňa > Stavebné a maliarske náradie > Sadrokartón > Hoblíky
- Náradie a dielňa > Stavebné a maliarske náradie > Sťahováky
- Náradie a dielňa > Výtlačné a kartušové pištole
- Profesionálna audio technika > Hudobné nástroje a príslušenstvo > Klávesové zosilňovače
- Profesionálna audio technika > JTS > Inštalácie > Bezdrôtový systém pre kamery
- Profesionálna audio technika > JTS > Inštalácie > Príslušenstvo
- Profesionálna audio technika > JTS > Inštrumentálne mikrofóny
- Profesionálna audio technika > JTS > Mikrofóny a bezdrôtové systémy > Káblové mikrofóny
- Profesionálna audio technika > Káble, konektory a redukcie > Neutrik > Jack
- Profesionálna audio technika > Káble, konektory a redukcie > Neutrik > RCA
- Profesionálna audio technika > Káble, konektory a redukcie > Neutrik > Speakon
- Profesionálna audio technika > Káble, konektory a redukcie > Neutrik > XLR
- Profesionálna audio technika > Pódium, diskotéka, DJ > Slúchadlá > špeciálne
- Profesionálna audio technika > Pódium, diskotéka, DJ > reproduktorové systémy > štúdiové
- Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Rečnícke pulty
- Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Sprievodcovský systém
- Profesionálna audio technika > Tlmočnícke, sprievodcovské a konferenčné systémy > Tlmočnícky systém
- TV, audio a video > AV káble > Oddělovací členy
- TV, audio a video > AV káble > TV účastnické šnúry
- TV, audio a video > Antény a satelity > ANTÉNY > Antény izbové
- TV, audio a video > Antény a satelity > ANTÉNY > Antény pre obytná autá a lode
- TV, audio a video > Antény a satelity > ANTÉNY > Antény vonkajšie
- TV, audio a video > Antény a satelity > Koaxiálne káble > Koaxiálne průchodky
- TV, audio a video > Antény a satelity > Koaxiálne káble > Metráž
- TV, audio a video > Antény a satelity > Koaxiálne káble > TV účastnické šnúry
- TV, audio a video > Antény a satelity > Konektory > LAN konektory
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly na plastové okno
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly na tepelná čerpadlá a klimatizácia
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Konzoly sa třmenem > Univerzálne
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Chémia
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Izolačné pásky
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Káblové příchytky
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Sťahovacie pásky
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Spojovacie a kotevní materiál, chémia > Vruty, hmoždinky
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Uzemnenie, hromosvody > Zemnící drát
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Uzemnenie, hromosvody > Zemnící svorky
- TV, audio a video > Antény a satelity > Konzoly, stožiare, uzemnenie > Uzemnenie, hromosvody > Zemnící tyče
- TV, audio a video > Antény a satelity > SATELITNÉ PRIJÍMAČE > COMBO SAT/DVBT
- TV, audio a video > Antény a satelity > SATELITNÉ PRIJÍMAČE > Skylink ready prijímače
- TV, audio a video > Antény a satelity > Satelitné príslušenstvo > Ochranné kryty pre LNB
- TV, audio a video > Antény a satelity > Satelitné príslušenstvo > Rozbočovače satelitné
- TV, audio a video > Antény a satelity > ZOSILŇOVAČE > Aktivní TV rozbočovače
- TV, audio a video > Antény a satelity > ZOSILŇOVAČE > Kanálové
- TV, audio a video > Antény a satelity > Účastnické zásuvky > Průběžné
- TV, audio a video > Audio technika > Hi-Fi systémy
- TV, audio a video > Audio technika > HiFi komponenty > Tunery a sieťové prehrávače
- TV, audio a video > Audio technika > Karaoke
- TV, audio a video > Audio technika > Řečnické systémy
- TV, audio a video > Diaľkové ovládače > Televízne ovládače > CHiQ
- TV, audio a video > Diaľkové ovládače > Televízne ovládače > Ostatné značky
- TV, audio a video > Diaľkové ovládače > VIDEO (VCR)
- TV, audio a video > Mobily a tablety > Domáce telefóny
- TV, audio a video > Mobily a tablety > Domáce telefóny > Drátové telefóny
- TV, audio a video > Mobily a tablety > Držiaky telefónov
- TV, audio a video > Mobily a tablety > Kable USB I > USB-C na Lightning
- TV, audio a video > Mobily a tablety > Prstencové držiaky
- TV, audio a video > Mobily a tablety > USB káble > Univerzálne
- TV, audio a video > Počítače a príslušenstvo > Disky a pamäťové karty > USB flash disky
- TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Klávesnice > Káblové
- TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Príslušenstvo pre PlayStation
- TV, audio a video > Počítače a príslušenstvo > Herné príslušenstvo > Zostavy a sety
- TV, audio a video > Počítače a príslušenstvo > Herné zariadenia > Príslušenstvo ku konzolám > Xbox One - príslušenstvo
- TV, audio a video > Počítače a príslušenstvo > Káble > Sieťové káble
- TV, audio a video > Počítače a príslušenstvo > Myši
- TV, audio a video > Počítače a príslušenstvo > Projektory
- TV, audio a video > Počítače a príslušenstvo > Smartphones
- TV, audio a video > TV stolíky a držiaky > Držiaky projektorů
- TV, audio a video > TV stolíky a držiaky > Pojízdné
- TV, audio a video > Televízory > Soundbary k TV
- TV, audio a video > Televízory > Televízory
- TV, audio a video > Televízory > Televízory Ultra HD (4K)
- Zdravie a starostlivosť > Holiace strojčeky a zastrihávače
- Zdravie a starostlivosť > Holiace strojčeky a zastrihávače > Holiace strojčeky
- Zdravie a starostlivosť > Holiace strojčeky a zastrihávače > Zastrihávače
- Zdravie a starostlivosť > Prístroje na tvár > Kavitačné peelingy
- Zdravie a starostlivosť > Ústne sprchy
- Zdravie a starostlivosť > Ústne sprchy > Ústne sprchy
- Záhrada > Záhradné doplnky > Bazény a doplnky > Teplomery do bazénů
- Záhrada > Záhradné doplnky > Přenosná ohniště
- Záhrada > Záhradné doplnky > Zavlažovanie > Hadice
- Záhrada > Záhradné doplnky > Záhradné sloupky
- Záhrada > Záhradné potreby > Lapače, odpudzovače hmyzu a škodcov
- Záhrada > Záhradné stroje > Príslušenstvo
- Záhrada > Záhradné stroje > Píly
- Záhrada > Záhradné stroje > Píly > Lišty, reťaze, pilníky
- Záhrada > Záhradné stroje > Píly > Lišty, reťaze, pilníky > Lišty
- Záhrada > Záhradné stroje > Záhradné nožnice
- Šport, hračky a voľný čas > Cyklistika > Elektrokola
- Šport, hračky a voľný čas > Exoskelety
- Šport, hračky a voľný čas > Hračky > Pre kojencov
- Šport, hračky a voľný čas > Hračky > Sportovní hračky
- Šport, hračky a voľný čas > Hračky > Zvieratká, farmy > Zvieratká
- Šport, hračky a voľný čas > Hračky > Školské pomôcky, tabule
- Šport, hračky a voľný čas > Hračky > Školské pomôcky, tabule > Výtvarné potreby
- Šport, hračky a voľný čas > Mikroskopy > Príslušenstvo
- Šport, hračky a voľný čas > Posilňovanie a fitness > Pomôcky na cvičenie > Švihadlá
- Šport, hračky a voľný čas > Sportovní vybavenie > Odražedla
- Šport, hračky a voľný čas > Turistika > Čelové svietidlá
- Šport, hračky a voľný čas > Turizmus
- Šport, hračky a voľný čas > Zdravotní potreby > Detské opatrovateľky (chůvičky)
- Šport, hračky a voľný čas > Zdravotní potreby > Rehabilitační rotopedy
- Šport, hračky a voľný čas > Zdravotní potreby > Zátěžové deky

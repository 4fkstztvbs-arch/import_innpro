# Zjednotenie duplicitných kategórií — 2026-08-27

Analyzovaných 2928 kategórií zo živého Shoptet stromu (export shoptet-categories-2026-08-24.csv).
7 pravidiel pridaných do mapovaní (kanonická kategória = nižšie Shoptet ID, t.j. staršia/pôvodná).

## Automaticky zjednotené

Zapísané do `scripts/*-mapping.json`, vrátane všetkých podkategórií zlúčenej vetvy —
prejaví sa pri najbližšom nočnom behu daného dodávateľa.

| Zhoda | Kanonická (ostáva, nižšie ID) | Zlúčené (presúva sa sem) |
|---|---|---|
| 94% | TV, audio a video > Počítače a príslušenstvo > Dokovacie stanice _(id 46491, spolu 10 produktov)_ | TV, audio a video > Počítače a príslušenstvo > Dokovací stanice _(id 47985, spolu 0)_ |
| 94% | Náradie a dielňa > MERACIE TECHNIKA _(id 40998, spolu 872 produktov)_ | Náradie a dielňa > Meracia technika _(id 47850, spolu 32)_ |
| 92% | TV, audio a video > Audio technika > HiFi systémy _(id 40008, spolu 0 produktov)_ | TV, audio a video > Audio technika > Hi-Fi systémy _(id 43413, spolu 0)_ |

## Na ručné posúdenie

Buď nižšia zhoda, alebo prešlo cez bezpečnostný pomer (jedna strana má neúmerne viac
produktov než by pri automatickom zlúčení "prehrala") — pozri komentár na začiatku
`scripts/find-category-duplicates.js`.

| Zhoda | Kategórie v skupine (ID, spolu produktov vrátane podkategórií) |
|---|---|
| 95% | Auto-moto > Karavany a obytné autá _(id 41163, spolu 0)_; Auto-moto > Karavany a obytná autá _(id 48000, spolu 331)_ |
| 89% | Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Zvlhčovače vzduchu _(id 40428, spolu 0)_; Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Odvlhčovače vzduchu _(id 40554, spolu 15)_ |
| 89% | Šport, hračky a voľný čas > Sportovní vybavenie > Odražedla _(id 48123, spolu 0)_; Šport, hračky a voľný čas > Sportovní vybavenie > Odrážadlá _(id 48135, spolu 9)_ |
| 89% | TV, audio a video > Mobily a tablety > Kable USB I > USB na Lightning _(id 45783, spolu 15)_; TV, audio a video > Mobily a tablety > Kable USB I > USB-C na Lightning _(id 45939, spolu 0)_ |
| 88% | Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační žaluzie bez nadstavce (na omítku) _(id 43986, spolu 12)_; Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační žaluzie s nástavcem (na omítku) _(id 44799, spolu 0)_ |
| 88% | Náradie a dielňa > Meracie nástroje _(id 45954, spolu 0)_; Náradie a dielňa > Rezacie nástroje _(id 46251, spolu 0)_ |
| 88% | Záhrada > Sanitárna technika > Sprchové hadice _(id 42534, spolu 0)_; Záhrada > Sanitárna technika > Sprchové hlavice _(id 42537, spolu 0)_ |
| 87% | TV, audio a video > Reproduktory > Drátové reproduktory _(id 39504, spolu 0)_; TV, audio a video > Reproduktory > Bezdrátové reproduktory _(id 40020, spolu 62)_ |
| 86% | Domáce spotrebiče > Veľké spotrebiče > Chladničky > Kombinované chladničky > Chladničky s mrazákom nahoře _(id 39960, spolu 8)_; Domáce spotrebiče > Veľké spotrebiče > Chladničky > Kombinované chladničky > Chladničky s mrazákom dole _(id 40341, spolu 53)_ |
| 86% | TV, audio a video > Mobily a tablety > Kable USB I > USB na USB-C _(id 46308, spolu 9)_; TV, audio a video > Mobily a tablety > Kable USB I > USB-C na USB-C _(id 46515, spolu 0)_ |
| 85% | TV, audio a video > Audio technika > Slúchadlá > Bezdrôtové slúchadlá _(id 46017, spolu 216)_; TV, audio a video > Audio technika > Slúchadlá > Drôtové slúchadlá _(id 46029, spolu 28)_ |
| 84% | Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Odpojovače batérií _(id 44826, spolu 0)_; Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Propojovače batérií _(id 45615, spolu 0)_ |
| 84% | Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice Acqua IP65 _(id 41547, spolu 13)_; Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice AcquaPLUS IP65 _(id 44256, spolu 0)_ |
| 84% | Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ QUIET _(id 43980, spolu 0)_; Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ QUIETLINE _(id 45153, spolu 0)_ |
| 83% | Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory _(id 42150, spolu 454)_; Elektroinštalačný materiál > Ventilačné technika > Krbové ventilátory _(id 45156, spolu 0)_ |
| 83% | Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS _(id 42153, spolu 230)_; Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady DOSPEL _(id 43992, spolu 22)_ |
| 83% | Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady DOSPEL _(id 44022, spolu 0)_; Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS _(id 44439, spolu 37)_ |
| 83% | Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou s nástavcem _(id 44793, spolu 0)_; Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou bez nadstavce _(id 45162, spolu 0)_ |
| 83% | Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou s nástavcem a s regulací _(id 44796, spolu 0)_; Elektroinštalačný materiál > Ventilačné technika > Mřížky > Mřížka sa síťkou bez nadstavce s regulací _(id 45165, spolu 0)_ |
| 83% | Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte štiepacie > Kliešte štiepacie boční _(id 44703, spolu 0)_; Náradie a dielňa > Mechanické náradie > Kliešte > Kliešte štiepacie > Kliešte štiepacie čelné _(id 45387, spolu 0)_ |
| 82% | TV, audio a video > Počítače a príslušenstvo > Tlačiarne a skenery > Multifunkčné tlačiarne > Laserové multifunkčné tlačiarne _(id 39837, spolu 0)_; TV, audio a video > Počítače a príslušenstvo > Tlačiarne a skenery > Multifunkčné tlačiarne > Atramentové multifunkčné tlačiarne _(id 40386, spolu 46)_ |
| 82% | Fotovoltaika a energie > Akumulátory a batérie > NiMh nabíjacie akumulátory _(id 43899, spolu 21)_; Fotovoltaika a energie > Akumulátory a batérie > Li-Ion nabíjacie akumulátory _(id 44079, spolu 0)_ |
| 82% | Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky > Priemyselné zásuvky > Vstavané priemyselné zásuvky _(id 41343, spolu 51)_; Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky > Priemyselné zásuvky > Nástenné priemyselné zásuvky _(id 41346, spolu 16)_ |
| 82% | Záhrada > Odpudzovače a lapače hmyzu > Odpudzovače a lapače hmyzu _(id 42129, spolu 0)_; Záhrada > Odpudzovače a lapače hmyzu > Odpudzovače a lapače slimáků _(id 42840, spolu 0)_ |
| 82% | Šport, hračky a voľný čas > Ďalekohľady > Binokulární _(id 41712, spolu 21)_; Šport, hračky a voľný čas > Ďalekohľady > Monokulární _(id 44775, spolu 10)_ |
| 82% | TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Rozbočovače _(id 41409, spolu 52)_; TV, audio a video > Antény a satelity > PASIVNÍ PRVKY > Odbočovače _(id 44661, spolu 8)_ |
| 82% | Šport, hračky a voľný čas > Bojové športy > Boxovací pytle - prázdné _(id 41769, spolu 10)_; Šport, hračky a voľný čas > Bojové športy > Boxovací pytle - plné _(id 41775, spolu 21)_ |
| 82% | Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky PAGURO IP68 _(id 42345, spolu 0)_; Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky LEDJOY IP68 _(id 43677, spolu 0)_ |
| 82% | Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ TT pre _(id 45024, spolu 8)_; Elektroinštalačný materiál > Ventilačné technika > Priemyselné ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ TT _(id 45111, spolu 0)_ |
| 81% | Domáce spotrebiče > Veľké spotrebiče _(id 39426, spolu 984)_; Domáce spotrebiče > Malé spotrebiče _(id 39432, spolu 6699)_ |
| 81% | Šport, hračky a voľný čas > Posilňovanie a fitness > Pomôcky na cvičenie > Pomôcky na cvičenie doma _(id 41487, spolu 75)_; Šport, hračky a voľný čas > Posilňovanie a fitness > Pomôcky na cvičenie > Pomôcky na cvičenie břicha _(id 41628, spolu 0)_ |
| 80% | Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační klapky s kruhovým nástavcem _(id 43989, spolu 0)_; Elektroinštalačný materiál > Ventilačné technika > Gravitační žaluzie a klapky > Gravitační klapky bez kruhového nadstavce _(id 45450, spolu 0)_ |
| 80% | Zdravie a starostlivosť > Starostlivosť o zuby _(id 39585, spolu 262)_; Zdravie a starostlivosť > Starostlivosť o vlasy _(id 39591, spolu 492)_; Zdravie a starostlivosť > Starostlivosť o pleť _(id 45978, spolu 0)_ |
| 80% | Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Audi _(id 42054, spolu 0)_; Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Hyundai _(id 43620, spolu 0)_ |
| 80% | TV, audio a video > TV stolíky a držiaky > Držiaky reproduktorů _(id 43878, spolu 0)_; TV, audio a video > TV stolíky a držiaky > Držiaky projektorů _(id 45609, spolu 0)_ |
| 80% | Elektroinštalačný materiál > Inštalačné príslušenstvo > Sťahovacie pásky > Plastové sťahovacie pásky _(id 42660, spolu 0)_; Elektroinštalačný materiál > Inštalačné príslušenstvo > Sťahovacie pásky > Kovové sťahovacie pásky _(id 44166, spolu 14)_ |
| 80% | Elektroinštalačný materiál > Ventilačné technika > Talířové ventily a difuzéry > Plastové talířové ventily _(id 44733, spolu 0)_; Elektroinštalačný materiál > Ventilačné technika > Talířové ventily a difuzéry > Kovové talířové ventily _(id 45447, spolu 0)_ |
| 79% | Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Brúsky _(id 40206, spolu 0)_; Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie > Príslušenstvo pre Píly _(id 40335, spolu 0)_ |
| 79% | Fotovoltaika a energie > Fotovoltaika > Káble pre fotovoltaiku _(id 41082, spolu 110)_; Fotovoltaika a energie > Fotovoltaika > Náradie pre fotovoltaiku _(id 43278, spolu 10)_ |
| 79% | Elektroinštalačný materiál > Montážne skrine a rozvádzače > Revízne dvierka > Plastová revízne dvierka _(id 43029, spolu 11)_; Elektroinštalačný materiál > Montážne skrine a rozvádzače > Revízne dvierka > Kovová revízne dvierka _(id 44145, spolu 17)_ |
| 79% | Elektroinštalačný materiál > Ventilačné technika > Revízne dvierka > Plastová revízne dvierka _(id 43035, spolu 22)_; Elektroinštalačný materiál > Ventilačné technika > Revízne dvierka > Kovová revízne dvierka _(id 44148, spolu 17)_ |
| 79% | Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Nissan _(id 43443, spolu 0)_; Auto-moto > Vybavenie auta > Autokoberce > Auto koberce Kia _(id 44463, spolu 0)_ |
| 79% | Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače křížové _(id 43968, spolu 0)_; Náradie a dielňa > Mechanické náradie > Skrutkovače, bity, imbusy > Skrutkovače úderové _(id 45594, spolu 0)_ |
| 79% | TV, audio a video > Audio technika _(id 39417, spolu 1513)_; TV, audio a video > Video technika _(id 39516, spolu 80)_ |
| 79% | Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Výrobníky ľadu _(id 39945, spolu 12)_; Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Výrobníky sódy _(id 39981, spolu 0)_ |
| 79% | Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry > Stolové mixéry _(id 39606, spolu 47)_; Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry > Tyčové mixéry _(id 39843, spolu 22)_ |
| 79% | Bezpečnosť a smart domácnosť > Smart domácnosť > Smart žiarovky _(id 40299, spolu 0)_; Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zásuvky _(id 47997, spolu 0)_ |
| 78% | Náradie a dielňa > Elektronické súčiastky > Poistky, pojistkové držiaky > Poistky 5x20mm rychlé (F) _(id 45084, spolu 0)_; Náradie a dielňa > Elektronické súčiastky > Poistky, pojistkové držiaky > Poistky 5x20mm pomalé (T) _(id 45114, spolu 0)_ |

## Kategórie na vypnutie (visible=0) — 1638 bez produktov (vrátane podkategórií), stav TERAZ

Toto je bezpečné vypnúť hneď — nezávisí od schválenia zlúčení vyššie (0 produktov teraz aj po
nich). Po schválení a nasadení zlúčení pribudnú do prázdneho zoznamu aj kategórie z tabuľky
vyššie (spustiť tento skript znova s `--dry-run` po najbližšom nočnom behu, aby sa to overilo).

Strojovo spracované v `data/shoptet-categories-hide.csv` (rovnaký formát ako pôvodný export,
`visible` prepnuté na `0`), pripravené na re-import cez Shoptet (Nastavenia → Import dát → Kategórie).

- Auto-moto > Audio, Hi-Fi > Autorádiá
- Auto-moto > Audio, Hi-Fi > Reproduktory do autá
- Auto-moto > Autokozmetika, Chémia > Oleje, mazivá
- Auto-moto > Autokozmetika, Chémia > Renovace
- Auto-moto > Autokozmetika, Chémia > Rozmrazovače
- Auto-moto > Autopríslušenstvo > Měniče napätia
- Auto-moto > Autorádiá > Autorádiá s CD
- Auto-moto > Autorádiá > Autorádiá s DVD
- Auto-moto > Autorádiá > Príslušenstvo do autá
- Auto-moto > Autorádiá > Subwoofery do autá
- Auto-moto > Bezpečnosť > Kamery do autá
- Auto-moto > Bezpečnosť > Testery alkoholu
- Auto-moto > Držiaky telefónov
- Auto-moto > Elektromobilita > AC nabíjacie stanice Wallbox
- Auto-moto > Elektromobilita > Tesla
- Auto-moto > Elektrovozidlá
- Auto-moto > Elektrovozidlá > Elektrokolobežky
- Auto-moto > GPS navigácie
- Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Izolačné pásky
- Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Odpojovače batérií
- Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Propojovače batérií
- Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Silové káble
- Auto-moto > Garáž, Dielňa, Servis > Elektroinštalačný materiál > Smršťovací bužírky
- Auto-moto > Garáž, Dielňa, Servis > Hasicí prístroje
- Auto-moto > Garáž, Dielňa, Servis > Kanystry
- Auto-moto > Garáž, Dielňa, Servis > Čerpadlá
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Brzdy > Ostatné prípravky na brzdy
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Brzdy > Výměna brzdové kvapaliny
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Exteriér
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Exteriér > Oprava karoserie
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Alfa Romeo
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Chevrolet
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Chrysler
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Citroën
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Fiat
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Ford
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Lancia
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Land Rover
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Nissan
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Renault
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Seat
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Volkswagen
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Volvo
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Aretace > Škoda
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Olej > Olejničky a maznice
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Olej > Olejové vany
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Motor > Prípravky
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Navijaky a zdviháky
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Navijaky a zdviháky > Navijaky
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Navijaky a zdviháky > Zdviháky a heváky
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Podvozek > Heváky a zdviháky > Náhradné diely k heverům
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Podvozek > Ostatné
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Podvozek > Podstavce > Príslušenstvo k podstavcům
- Auto-moto > Garáž, Dielňa, Servis > Špeciálne náradie a prípravky > Testery
- Auto-moto > Karavany a obytná autá > Batérie do karavanu
- Auto-moto > Karavany a obytná autá > Grily a variče
- Auto-moto > Karavany a obytná autá > Kempingový nábytok
- Auto-moto > Karavany a obytná autá > Mobilné TV a SAT antény
- Auto-moto > Karavany a obytná autá > Mobilné TV a SAT antény > Antény pre DVB-T2 príjem
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
- Auto-moto > Kolesá > Měřiče tlaku
- Auto-moto > Mini kompresory
- Auto-moto > Monitory automobilov
- Auto-moto > Nabíjanie > Štartovacie káble
- Auto-moto > Nabíjačky do auta
- Auto-moto > Nosiče bicyklov
- Auto-moto > Nosiče bicyklov > Nosiče na tažné zariadenie
- Auto-moto > Nosiče bicyklov > Príslušenstvo
- Auto-moto > Nosiče bicyklov > Příčné nosníky
- Auto-moto > Nosiče bicyklov > Střešní nosiče
- Auto-moto > Nosiče kol > Nosiče na tažné zariadenie
- Auto-moto > Nosiče kol > Střešní nosiče
- Auto-moto > Ostatné
- Auto-moto > Prenosné chladničky
- Auto-moto > Umývanie a čistenie
- Auto-moto > Umývanie a čistenie > Vysávače do auta
- Auto-moto > Videorekordéry
- Auto-moto > Videorekordéry > Príslušenstvo
- Auto-moto > Videorekordéry > Videorekordéry
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
- Auto-moto > Vybavenie auta > Autopotahy > Opěrky hlavy
- Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy
- Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dodávky
- Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dodávky > Autopotahy PRACTICAL dodávka
- Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dvě sedadla
- Auto-moto > Vybavenie auta > Autopotahy > Univerzálne autopotahy - dvě sedadla > Autotrička BAVLNA
- Auto-moto > Vybavenie auta > Autožiarovky > 12V Excelite
- Auto-moto > Vybavenie auta > Autožiarovky > 24V
- Auto-moto > Vybavenie auta > Autožiarovky > CSP LED žiarovky
- Auto-moto > Vybavenie auta > Odpojovač batérie
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Různé
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône AROMA CAR
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône CAR CITY
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône CITY
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône FRESH POINT
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône INTENSO
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône LUCKY TOP
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône Mr&Mrs CESARE
- Auto-moto > Vybavenie auta > Osviežovače vzduchu > Vône SPEED
- Auto-moto > Vybavenie auta > Stierače > Sady stieračov FLAT DOUBLE
- Auto-moto > Vybavenie auta > Stierače > Stierače HYBRID
- Auto-moto > Vybavenie auta > Ventilátory
- Auto-moto > Vysielače do auta
- Bezpečnosť a smart domácnosť > Kamerové systémy > Akční kamery
- Bezpečnosť a smart domácnosť > Kamerové systémy > Atrapy kamer
- Bezpečnosť a smart domácnosť > Kamerové systémy > Domové videotelefony
- Bezpečnosť a smart domácnosť > Kamerové systémy > Domové videotelefony > Analogové
- Bezpečnosť a smart domácnosť > Kamerové systémy > Domové videotelefony > IP videotelefony
- Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI a 5v1 videorekordéry > 16 kanálů
- Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI a 5v1 videorekordéry > 4 kanály
- Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI a 5v1 videorekordéry > 8 kanálů
- Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI, HDTVI, AHD kamery
- Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI, HDTVI, AHD kamery > 2.0 Mpix (Full HD)
- Bezpečnosť a smart domácnosť > Kamerové systémy > HDCVI, HDTVI, AHD kamery > Otočné
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > 1.0 Mpix. (HD) / 1.3 Mpix.
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > 3.0 Mpix.
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > 5.0 Mpix.
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > 6.0 Mpix.
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > 8.0 Mpix. (4K)
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové kamery > PTZ kamery
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové videorekordéry (NVR) > 16 kanálů
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové videorekordéry (NVR) > 32 kanálů
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové videorekordéry (NVR) > 4 kanály
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové videorekordéry (NVR) > 64 kanálů
- Bezpečnosť a smart domácnosť > Kamerové systémy > IP sieťové videorekordéry (NVR) > 8 kanálů
- Bezpečnosť a smart domácnosť > Kamerové systémy > KAMERY 4v1 > 4.0 Mpix.
- Bezpečnosť a smart domácnosť > Kamerové systémy > KAMERY 4v1 > 5.0 Mpix.
- Bezpečnosť a smart domácnosť > Kamerové systémy > KAMERY 4v1 > 8.0 Mpix. (4K)
- Bezpečnosť a smart domácnosť > Kamerové systémy > Kamerové sety
- Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Držiaky
- Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Konektory
- Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Káble
- Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Nálepky, knihy
- Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Ostatné
- Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Pamäťové karty
- Bezpečnosť a smart domácnosť > Kamerové systémy > PRÍSLUŠENSTVO > Prevodníky
- Bezpečnosť a smart domácnosť > Osvetlenie > Dekoratívne osvetlenie
- Bezpečnosť a smart domácnosť > Osvetlenie > Iné
- Bezpečnosť a smart domácnosť > Osvetlenie > LED žiarovky
- Bezpečnosť a smart domácnosť > Osvetlenie > Stojacie lampy
- Bezpečnosť a smart domácnosť > Osvetlenie > Svietidlá
- Bezpečnosť a smart domácnosť > Prvky výkonu > Senzory
- Bezpečnosť a smart domácnosť > Prvky výkonu > Smart kúrenie > Ovládače klimatizácie
- Bezpečnosť a smart domácnosť > Prvky výkonu > Smart kúrenie > Ovládače klimatizácie > tepelného čerpadla
- Bezpečnosť a smart domácnosť > Prvky výkonu > Smart zástrčky > Napájacie lišty
- Bezpečnosť a smart domácnosť > Príslušenstvo
- Bezpečnosť a smart domácnosť > Riadiace jednotky > Ovládacie panely
- Bezpečnosť a smart domácnosť > Smart domácnosť > IP kamery
- Bezpečnosť a smart domácnosť > Smart domácnosť > Klávesnice
- Bezpečnosť a smart domácnosť > Smart domácnosť > Meteostanice
- Bezpečnosť a smart domácnosť > Smart domácnosť > Ostatné smart elektronika
- Bezpečnosť a smart domácnosť > Smart domácnosť > Prenosné lednice, chladiace boxy
- Bezpečnosť a smart domácnosť > Smart domácnosť > Príslušenstvo
- Bezpečnosť a smart domácnosť > Smart domácnosť > Robotické vysávače
- Bezpečnosť a smart domácnosť > Smart domácnosť > Rádiá
- Bezpečnosť a smart domácnosť > Smart domácnosť > Smart potreby do domácnosti
- Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zabezpečenie
- Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zabezpečenie > Detektor pohybu
- Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zabezpečenie > Kamery
- Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zabezpečenie > Smart senzory
- Bezpečnosť a smart domácnosť > Smart domácnosť > Smart zásuvky
- Bezpečnosť a smart domácnosť > Smart domácnosť > Smart žiarovky
- Bezpečnosť a smart domácnosť > Smart domácnosť > Vypínače
- Bezpečnosť a smart domácnosť > Smart domácnosť > Zásuvky
- Bezpečnosť a smart domácnosť > Smart domácnosť > Čističky vzduchu
- Bezpečnosť a smart domácnosť > Smart záhrada
- Bezpečnosť a smart domácnosť > Zabezpečenie > Domové alarmy
- Bezpečnosť a smart domácnosť > Zabezpečenie > Hasící prístroje
- Bezpečnosť a smart domácnosť > Zabezpečenie > Kamery
- Bezpečnosť a smart domácnosť > Zabezpečenie > Ostatné
- Bezpečnosť a smart domácnosť > Zabezpečenie > Požarní hlásiče
- Domáce spotrebiče > Malé spotrebiče > Dezinfekčné lampy
- Domáce spotrebiče > Malé spotrebiče > Dezinfekčné lampy > Bezozónové
- Domáce spotrebiče > Malé spotrebiče > Dezinfekčné lampy > Ozónové
- Domáce spotrebiče > Malé spotrebiče > Dezinfekčné lampy > Príslušenstvo, náhradné diely
- Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Polievkovary
- Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Ryžovary
- Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Sous-Vide
- Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Variče vajec
- Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Zaváracie hrnce
- Domáce spotrebiče > Malé spotrebiče > Grily, pekárne, variče > Lávové a raclettové grily
- Domáce spotrebiče > Malé spotrebiče > Grily, pekárne, variče > Varné platne
- Domáce spotrebiče > Malé spotrebiče > Hodiny a budíky > Časovače, minútky
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Brousky na nože
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Cedníky, Lieviky, Sitá
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Chlebníky, Košíky, Košíky (ošatky)
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Doštičky, Podložky, Krájacie dosky
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Handry, Houby, Kefy
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Krájače a porcovače
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Kuchynské minútky
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Kuchynské teplomery
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Lisy na potraviny
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Mlynčeky na korenie
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Obrusy a prestieranie
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Odkôstkovače
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Otvárače na konzervy
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Valčeky na cesto
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Vývrtky a otvárače
- Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Škrabky a strúhadlá
- Domáce spotrebiče > Malé spotrebiče > Kuchynské príslušenstvo > Ostatné
- Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mlynčeky na mäso
- Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá > Napěňovače mlieka
- Domáce spotrebiče > Malé spotrebiče > Meteostanice > Dataloggery
- Domáce spotrebiče > Malé spotrebiče > Meteostanice > Náhradné diely
- Domáce spotrebiče > Malé spotrebiče > Mini chladničky
- Domáce spotrebiče > Malé spotrebiče > Nádobie > Hrnčeky a šálky
- Domáce spotrebiče > Malé spotrebiče > Nádobie > Misy a misky
- Domáce spotrebiče > Malé spotrebiče > Nádobie > Pekáče a zapekacie misy
- Domáce spotrebiče > Malé spotrebiče > Nádobie > Pokrievky
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
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Elektrické nože
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
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské riad
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské riad > Panvice
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Kuchynské váhy
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Meteostanice, teplomery, vlhkomery
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Nože a příbory
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Nože a příbory > Brousky na nože
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Osobné váhy
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Starostlivosť o telo
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Starostlivosť o telo > Kulmy a sušiče vlasů
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Termosky, termohrnčeky
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Testery alkoholu
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Těsnění do okien a dveří
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Upratovanie
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Upratovanie > Handry, houbičky a utěrky na upratovanie
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Upratovanie > Metly a mopy na upratovanie
- Domáce spotrebiče > Malé spotrebiče > Potreby pre domácnosť > Vonné oleje
- Domáce spotrebiče > Malé spotrebiče > Pre dieťa
- Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Sirupy a fľaše pre výrobníky sódy
- Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Výrobníky sódy
- Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Čajová sitká
- Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo ku grilom
- Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo ku vzduchotechnike
- Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Vône do vysávače
- Domáce spotrebiče > Malé spotrebiče > Płyty gazowe
- Domáce spotrebiče > Malé spotrebiče > Upratovacie pomôcky > Košťata a metly
- Domáce spotrebiče > Malé spotrebiče > Vysávače > Ostatné
- Domáce spotrebiče > Malé spotrebiče > Vysávače > Ručné vysávače
- Domáce spotrebiče > Malé spotrebiče > Vysávače > Viacúčelové vysávače
- Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Sušiaky
- Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Ventilátory > Stolové ventilátory
- Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Vykurovacie telesá > Elektrická krbová kachle
- Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory > Konvektory
- Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory > Olejové radiátory
- Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory > Teplovzdušné ventilátory
- Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Zvlhčovače
- Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Zvlhčovače vzduchu
- Domáce spotrebiče > Malé spotrebiče > Čistenie
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Cestovné žehličky
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Domové alarmy a zvončeky
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Domové alarmy a zvončeky > Bezpečnostní kamery
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Hodiny a budíky
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Parné generátory
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Šijacie stroje a príslušenstvo
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Šijacie stroje a príslušenstvo > Šijacie stroje
- Domáce spotrebiče > Malé spotrebiče > Žehličky > Žehličky na suché žehlenie
- Domáce spotrebiče > Veľké spotrebiče > Chladničky > Americké chladničky
- Domáce spotrebiče > Veľké spotrebiče > Chladničky > Chladničky s mraziace priehradkou
- Domáce spotrebiče > Veľké spotrebiče > Chladničky > Príslušenstvo k chladničkám
- Domáce spotrebiče > Veľké spotrebiče > Sporáky a rúry > Kombinované sporáky
- Domáce spotrebiče > Veľké spotrebiče > Sporáky a rúry > Príslušenstvo ku sporákom a rúram
- Domáce spotrebiče > Veľké spotrebiče > Sporáky a rúry > Stolové rúry
- Domáce spotrebiče > Veľké spotrebiče > Umývačky riadu > Príslušenstvo k umývačke
- Domáce spotrebiče > Veľké spotrebiče > Umývačky riadu > Stolové umývačky riad
- Domáce spotrebiče > Veľké spotrebiče > Umývačky riadu > Umývačky riad 45 cm
- Domáce spotrebiče > Vstavané spotrebiče > Digestory > Filtre do digestorov
- Domáce spotrebiče > Vstavané spotrebiče > Digestory > Ostrovčekové digestory
- Domáce spotrebiče > Vstavané spotrebiče > Digestory > Príslušenstvo k digestorom
- Domáce spotrebiče > Vstavané spotrebiče > Digestory > Závesné digestory
- Domáce spotrebiče > Vstavané spotrebiče > Varné dosky > Elektrické varné dosky
- Domáce spotrebiče > Vstavané spotrebiče > Vstavané chladenie > Vstavané chladničky s mraziace priehradkou
- Domáce spotrebiče > Vstavané spotrebiče > Vstavané chladenie > Vstavané kombinované chladničky
- Domáce spotrebiče > Vstavané spotrebiče > Vstavané chladenie > Vstavané monoklimatické chladničky
- Druhy > AKCE ATOS 35 LET
- Dróny a RC modely > Načítanie > Napájacie zdroje
- Dróny a RC modely > Načítanie > Príslušenstvo
- Dróny a RC modely > Náhradné diely
- Dróny a RC modely > Nástroje a meradlá
- Dróny a RC modely > Podvodné drony
- Dróny a RC modely > Príslušenstvo pre drony > Pristátie
- Elektroinštalačný materiál > Elektromery
- Elektroinštalačný materiál > Elektromery a spínacie technika > Hladinvé spínače
- Elektroinštalačný materiál > Elektromery a spínacie technika > Impulzní spínače
- Elektroinštalačný materiál > Elektromery a spínacie technika > Počítadla provozních hodin > Počítadla provozních hodin do panelu
- Elektroinštalačný materiál > Elektromery a spínacie technika > Počítadla provozních hodin > Počítadla provozních hodin na DIN lištu
- Elektroinštalačný materiál > Elektromery a spínacie technika > Schodišťové automaty
- Elektroinštalačný materiál > Elektromery a spínacie technika > Termostaty > Příložné
- Elektroinštalačný materiál > Elektromery a spínacie technika > Termostaty > Termostatické hlavice
- Elektroinštalačný materiál > Elektromery a spínacie technika > Zásuvkové elektromery
- Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Kľúče na F konektory
- Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Náradie pre fotovoltaiku
- Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Organizéry
- Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Ostatné
- Elektroinštalačný materiál > Inštalačné náradie a ostatné materiál > Ořezávače káblov
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové příchytky a držiaky > Káblové příchytky
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové příchytky a držiaky > Páskové hmoždinky
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové příchytky a držiaky > Sběrné káblové držiaky
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Jednosložkové vyplňovací gély
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky LEDJOY IP68
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové gelové spojky PAGURO IP68
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Káblové spojky SHARK IP68
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Ochranné gelové krabičky
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Protahovací gély na káble
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Káblové spojky > Káblové gelové spojky > Príslušenstvo pre káblové gelové spojky
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Organizéry káblov
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Rúrky a chráničky > Plastové rúrky
- Elektroinštalačný materiál > Inštalačné príslušenstvo > Sťahovacie pásky > Plastové sťahovacie pásky
- Elektroinštalačný materiál > Ističe a chrániče > Ističe DC
- Elektroinštalačný materiál > Ističe a chrániče > Motorové ističe
- Elektroinštalačný materiál > Ističe a chrániče > Odpojovače batérií
- Elektroinštalačný materiál > Ističe a chrániče > Pojistková puzdrá
- Elektroinštalačný materiál > Komponenty pre svietidlá > LED světelné zdroje
- Elektroinštalačný materiál > Komponenty pre svietidlá > Objímky
- Elektroinštalačný materiál > Komponenty pre svietidlá > Objímky > Plastové objímky E14
- Elektroinštalačný materiál > Komponenty pre svietidlá > Objímky > Príslušenstvo k objímkám
- Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá
- Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3
- Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 2-pólové svorky - SLK 3/2
- Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 3-pólové svorky - SLK 3/3
- Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 4-pólové svorky - SLK 3/4
- Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 3 > 5-pólové svorky - SLK 3/5
- Elektroinštalačný materiál > Komponenty pre svietidlá > Svorky pre průmyslová svietidlá > Svorky - SLK 5
- Elektroinštalačný materiál > Komponenty pre svietidlá > Svítidlové spínače (kolébkové) > Spínače šňůrové - nožní
- Elektroinštalačný materiál > Komponenty pre svietidlá > Svítidlové spínače (kolébkové) > Spínače šňůrové - průchozí
- Elektroinštalačný materiál > Komponenty pre svietidlá > Svítidlové spínače (kolébkové) > Spínače šňůrové - s flexi kabelem
- Elektroinštalačný materiál > Komponenty pre svietidlá > Tlumivky, předřadníky, zapalovače
- Elektroinštalačný materiál > Komponenty pre svietidlá > Tlumivky, předřadníky, zapalovače > Magnetické předřadníky - tlumivky
- Elektroinštalačný materiál > Káble a vodiče > Auto káble
- Elektroinštalačný materiál > Káble a vodiče > Dvojlinky
- Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Boxy a stojany
- Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Koaxiálne průchodky
- Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Metráž
- Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Vonkajšie
- Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Vícenásobné káble
- Elektroinštalačný materiál > Káble a vodiče > Koaxiálne káble > Železné
- Elektroinštalačný materiál > Káble a vodiče > Mikrofonní káble
- Elektroinštalačný materiál > Káble a vodiče > UTP a FTP káble
- Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Gumové skrine RubberBOX IP65
- Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Ostatné skrine a rozvodnice
- Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice AcquaPLUS IP65
- Elektroinštalačný materiál > Montážne skrine a rozvádzače > Rozvádzače samostatné > Rozvodnice NEPTUN IP65
- Elektroinštalačný materiál > Ostatné > 230V > Držiaky zásuviek
- Elektroinštalačný materiál > Ostatné > 230V > Vypínače a zásuvky > Do vlhka
- Elektroinštalačný materiál > Ostatné > 230V > Vypínače a zásuvky > Slim
- Elektroinštalačný materiál > Ostatné > 400V
- Elektroinštalačný materiál > Ostatné > Izolačný materiál > Izolačné PVC pásky
- Elektroinštalačný materiál > Ostatné > Izolačný materiál > Káblové príchytky
- Elektroinštalačný materiál > Ostatné > Káble
- Elektroinštalačný materiál > Ostatné > Káble > Koaxiálne
- Elektroinštalačný materiál > Osvetlenie > Cestovné adaptéry
- Elektroinštalačný materiál > Osvetlenie > Infra žiarovky
- Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Kúpeľňové osvetlenie
- Elektroinštalačný materiál > Osvetlenie > LED osvetlenie > Núdzové osvetlenie
- Elektroinštalačný materiál > Osvetlenie > LED panely a podhľadová svetla > Příslušenstvo
- Elektroinštalačný materiál > Osvetlenie > LED reflektory > Reflektory so senzorom
- Elektroinštalačný materiál > Osvetlenie > LED sviečky
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > G4 patice
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > G9 patice
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > G9&G4
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > MR16 patice
- Elektroinštalačný materiál > Osvetlenie > LED Žiarovky > Ostatné svetelné zdroje
- Elektroinštalačný materiál > Osvetlenie > Lampy a lampičky
- Elektroinštalačný materiál > Osvetlenie > Ostatné žiarovky a žiarivky
- Elektroinštalačný materiál > Osvetlenie > Patice, Redukcie
- Elektroinštalačný materiál > Osvetlenie > Priemyselné LED osvetlenie > LED lineárne osvetlenie
- Elektroinštalačný materiál > Osvetlenie > Stojace lampy
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Kempingové
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Lampáše
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Montážne a nabíjacie svetla
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Nenabíjacie
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Vnútorné osvetlenie > Dekoratívne osvetlenie
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Vnútorné osvetlenie > Ostatné svietidlá
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Vnútorné osvetlenie > SMART osvetlenie
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Vnútorné osvetlenie > Stojace a stolové lampy
- Elektroinštalačný materiál > Osvetlenie > Svietidlá > Vnútorné osvetlenie > Stropné a nástenná svietidlá
- Elektroinštalačný materiál > Osvetlenie > Zásuvky
- Elektroinštalačný materiál > Predlžovacie káble a zásuvky
- Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Jednozásuvkové
- Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Jednozásuvkové > Jednozásuvkové  400V
- Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Jednozásuvkové > Jednozásuvkové 230V
- Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Navíjacie bubny
- Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Prepäťové ochrany
- Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Viaczásuvkové
- Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Viaczásuvkové > Klasické
- Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Viaczásuvkové > Ostatné
- Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Výsuvné a vstavané zásuvky
- Elektroinštalačný materiál > Predlžovacie káble a zásuvky > Záhradné stĺpiky
- Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Adaptéry a redukcie > Cestovné adaptéry
- Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Flexo šnúry
- Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 1,4m
- Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 15m
- Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 30m
- Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Predlžovacie prívody > Dĺžka 40m
- Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Predlžovačky 3 fázové
- Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Spínacie zásuvky > Smart zásuvky
- _(a ďalších 1138, pozri CSV)_

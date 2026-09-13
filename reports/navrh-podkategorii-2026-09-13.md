# Návrh podkategórií a nález produktov na koreni

Analýza z 13. 9. 2026, po prepnutí na nový strom a dobehnutí všetkých 7 dodávateľov.
Zdroj: `output/*.xml` (aktuálny stav) spárované podľa `<CODE>` s `aec5f11:output/*.xml`
(stav pred prepnutím). Kategória produktu = **najhlbšia** z jeho `<CATEGORY>`.

Produktov spolu: **26700**.

## 1. Naliehavejšie: 6166 produktov (23 %) končí priamo na koreni

Nie sú nikde v navigácii hlbšie než na koreni stromu. Vzniká to tak, že mapovanie
dodávateľa prepíše len **prefix** cesty (napr. `Druhy > NÁŘADÍ  DÍLNA` ->
`Dielňa, náradie a záhrada`) a zvyšok cesty nechá v pôvodnom znení dodávateľa
(`... > Měřicí přístroje`). Kým bol `known-categories.json` snímkou starého stromu,
tieto zložené cesty v ňom boli — starý strom z feedov postupne vyrástol. Kurátorovaný
strom ich nemá, takže `enforce-tree-categories.js` cestu skráti na najhlbšieho známeho
predka, a tým je koreň.

Dôležité: prekladová mapa `data/stary-novy-strom.json` tieto kategórie pozná správne
(`Náradie a dielňa > Meracie prístroje` -> `Dielňa, náradie a záhrada > Meracia technika`).
Nedostane sa k slovu, lebo `categoryRenamesByPath` je `trusted` a bránu obchádza.

| Produktov | Koreň |
|---:|---|
| 1779 | Elektro, Smart Home a osvetlenie |
| 1356 | Dielňa, náradie a záhrada |
| 1150 | Počítače, mobily a tablety |
| 960 | Profesionálna audio technika |
| 438 | Domáce spotrebiče |
| 189 | Cestovanie, šport a outdoor |
| 182 | Chovateľské potreby |
| 54 | Auto-moto |
| 41 | Zdravie a starostlivosť |
| 17 | Energia a napájanie |

### 30 najväčších prípadov

| Produktov | Skončilo na | Kam patrí podľa stavu pred prepnutím |
|---:|---|---|
| 252 | Dielňa, náradie a záhrada | Náradie a dielňa > Meracie prístroje |
| 251 | Počítače, mobily a tablety | (nove, bez stareho zaznamu) |
| 231 | Dielňa, náradie a záhrada | Kreatívne technológie > 3D tlač > Vlákna |
| 122 | Počítače, mobily a tablety | Počítače a notebooky > Tlačiarne a skenery > Atramenty |
| 98 | Elektro, Smart Home a osvetlenie | Bezpečnosť a smart domácnosť > Riadiace jednotky > Smart ovládače |
| 84 | Elektro, Smart Home a osvetlenie | Bezpečnosť a smart domácnosť > Prvky výkonu > Senzory pre smart domácnosť |
| 82 | Počítače, mobily a tablety | Mobily, smart hodinky a tablety > Nositeľná elektronika > Smart prstene |
| 69 | Počítače, mobily a tablety | Počítače a notebooky > Sieťové prvky > WiFi routery |
| 67 | Počítače, mobily a tablety | Počítače a notebooky |
| 65 | Elektro, Smart Home a osvetlenie | Bezpečnosť a smart domácnosť > Riadiace jednotky > Prepínače |
| 64 | Počítače, mobily a tablety | Mobily, smart hodinky a tablety > Nositeľná elektronika > Smart hodinky |
| 61 | Elektro, Smart Home a osvetlenie | Elektroinštalačný materiál > Vypínače, zásuvky, krabice > Vypínače a zásuvky GALATEA IP44 |
| 61 | Dielňa, náradie a záhrada | Kreatívne technológie > Tlačiarne a lisy na potlač textilu |
| 60 | Domáce spotrebiče | Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Fritézy |
| 58 | Počítače, mobily a tablety | Počítače a notebooky > Projektory a plátna > Projektory |
| 56 | Elektro, Smart Home a osvetlenie | Elektroinštalačný materiál > Vypínače, zásuvky, krabice > Zásuvkové bloky a lišty |
| 52 | Dielňa, náradie a záhrada | Kreatívne technológie > 3D tlač > Príslušenstvo pre 3D tlačiarne |
| 51 | Dielňa, náradie a záhrada | Kreatívne technológie > 3D tlač > 3D tlačiarne |
| 48 | Dielňa, náradie a záhrada | Záhrada > Záhradné zavlažovacie systémy |
| 47 | Elektro, Smart Home a osvetlenie | Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Priemyselné vidlica a zásuvky > Priemyselné zásuvky > Vstavané priemyselné zásuvky |
| 46 | Počítače, mobily a tablety | Počítače a notebooky > Tlačiarne a skenery > Multifunkčné tlačiarne > Atramentové multifunkčné tlačiarne |
| 43 | Elektro, Smart Home a osvetlenie | Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Viaczásuvkové > Klasické |
| 42 | Cestovanie, šport a outdoor | Šport, hračky a voľný čas > Fitness náradie a vybavenie |
| 41 | Cestovanie, šport a outdoor | Dróny a RC modely > Batérie > Lítiové a NiMH |
| 40 | Elektro, Smart Home a osvetlenie | Bezpečnosť a smart domácnosť > Prvky výkonu > Smart zástrčky > Zásuvky |
| 38 | Dielňa, náradie a záhrada | Náradie a dielňa > Mechanické náradie > Príslušenstvo ku gola sadám > Nástrčné hlavice > 1/2" nadstavce |
| 38 | Zdravie a starostlivosť | Zdravie a starostlivosť |
| 37 | Elektro, Smart Home a osvetlenie | Elektroinštalačný materiál > Ventilačné technika > Domové ventilátory > Ventilátory podľa typové rady VENTS > Ventilátory - typ MA |
| 37 | Elektro, Smart Home a osvetlenie | Elektroinštalačný materiál > Ventilačné technika > Vzduchovody > Pevné kruhové potrubie - PVC > Príslušenstvo pre pevné kruhové potrubie - PVC |
| 36 | Elektro, Smart Home a osvetlenie | Elektroinštalačný materiál > Predlžovačky, zásuvky, vidlica > Vidlica a zásuvky |

## 2. Kandidáti na podkategórie (level 4)

Uzly so 110+ produktmi, ktoré starý strom delil aspoň do 3 vetiev s 20+ produktmi.
Čísla sú skutočné počty produktov, nie odhad. Názvy vetiev sú pôvodné — pred
zaradením do stromu si zaslúžia zjednotiť pravopis a zlúčiť zjavné duplicity
(napr. „Slúchadlá" + „Náhlavné slúchadlá" + „TWS slúchadlá").

### Elektro, Smart Home a osvetlenie > Osvetlenie – svietidlá — 1093 produktov

Návrh pokrýva 884, zvyšok 209 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 166 | Vianočné dekorácie |
| 92 | E27 závit |
| 75 | Vianočné LED dekorácie |
| 70 | LED svietidlá |
| 50 | E14 závit |
| 48 | LED Žiarovky |
| 44 | Čelovky |
| 43 | Nabíjacie |
| 38 | LED pásiky |
| 36 | LED podhľadové panely a svetlá |
| 34 | Bílé svetlo |
| 34 | Ručné |
| 30 | Batériové |
| 28 | E27 |
| 27 | LED stolové lampy |
| 25 | Sieťové 230V |
| 23 | Príslušenstvo |
| 21 | GU10 patice |

### TV, audio, video a foto technika > Diaľkové ovládače > Univerzálne ovládače — 977 produktov

Návrh pokrýva 644, zvyšok 333 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 110 | Satelitné ovládače |
| 102 | LG |
| 78 | Ovládače k DVB-T2 |
| 66 | Samsung |
| 57 | Panasonic |
| 52 | Televízne ovládače |
| 41 | Amiko |
| 41 | Sencor |
| 30 | Sony |
| 25 | Strong |
| 22 | DVD |
| 20 | Tesla |

### Profesionálna audio technika > Pódium, diskotéka, DJ — 842 produktov

Návrh pokrýva 558, zvyšok 284 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 78 | Audio procesory |
| 68 | príslušenstvo |
| 53 | mikrofóny |
| 48 | náhlavové |
| 40 | viackanálové |
| 34 | reproduktorov |
| 33 | mixy a powermixy |
| 31 | frekvencie vyžadujúce povolenie na prevádzku v SR |
| 29 | stereo |
| 28 | aktívne |
| 26 | dynamické |
| 25 | ostatné |
| 22 | pasívne |
| 22 | audio (MMX-) |
| 21 | Pódium, diskotéka, DJ |

### TV, audio, video a foto technika > Audio technika — 785 produktov

Návrh pokrýva 651, zvyšok 134 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 115 | Slúchadlá |
| 100 | Príslušenstvo |
| 99 | Príslušenstvo k audio technike |
| 57 | Mikrofóny |
| 56 | TWS slúchadlá |
| 46 | Rádiá |
| 43 | Náhlavné slúchadlá |
| 30 | Počítačové reproduktory |
| 28 | Audio technika – ostatné produkty |
| 27 | Bezdrôtové slúchadlá |
| 26 | Drôtové slúchadlá |
| 24 | Soundbary |

### TV, audio, video a foto technika > Antény a satelity — 674 produktov

Návrh pokrýva 226, zvyšok 448 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 32 | Na stenu nastaviteľné |
| 30 | LNB konvertory |
| 29 | TV antény vonkajšie |
| 28 | Domové |
| 24 | Multipřepínače |
| 22 | Jednodílné stožiare |
| 21 | DVB-T2 H.265 HEVC |
| 20 | F konektory |
| 20 | K anténě |

### Auto-moto > Príslušenstvo do auta — 654 produktov

Návrh pokrýva 493, zvyšok 161 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 153 | Sady stieračov FLAT SET |
| 76 | Stierače BULK |
| 60 | Cestovné doplnky |
| 49 | Autokoberce |
| 32 | Osviežovače vzduchu |
| 32 | Autopotahy |
| 30 | Klasické kovové |
| 21 | Ochrany sedadel |
| 20 | Podložky SPZ |
| 20 | Clony a roletky |

### Auto-moto > Garáž, dielňa, servis — 594 produktov

Návrh pokrýva 415, zvyšok 179 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 51 | Autodiagnostika |
| 45 | Aretace |
| 45 | Autonářadí, doplnky |
| 45 | Diagnostické nástroje |
| 41 | Heváky a zdviháky |
| 34 | Sťahováky |
| 32 | Autoplachty |
| 31 | Kľúče a prípravky |
| 25 | Ostatné prípravky |
| 25 | Redukcie, predlžovacie káble pre připojení přívěsu |
| 21 | Interiér |
| 20 | Príslušenstvo k heverům |

### Počítače, mobily a tablety > Puzdrá, sklá a príslušenstvo pre mobily — 577 produktov

Návrh pokrýva 547, zvyšok 30 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 308 | Puzdrá na mobilné telefóny |
| 134 | Tvrdené sklá pre mobilné telefóny |
| 51 | Nabíjačky pre mobily |
| 30 | Držiaky na mobily |
| 24 | Príslušenstvo |

### Energia a napájanie > Akumulátory a batérie — 548 produktov

Návrh pokrýva 391, zvyšok 157 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 83 | Káblové očká (konektory pre akumulátory) |
| 82 | 12V |
| 55 | Káblové dutinky |
| 37 | Káblové vidličky |
| 32 | Gombíkové |
| 31 | LiFePO4 akumulátory |
| 30 | Fastónové konektory |
| 21 | Káblové spojky (konektory) |
| 20 | Svorky |

### TV, audio, video a foto technika > Foto a príslušenstvo — 542 produktov

Návrh pokrýva 501, zvyšok 41 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 199 | Pre športové kamery |
| 111 | Pre fotoaparáty a videokamery |
| 85 | Postroje, upevňovacie prvky a držiaky |
| 32 | Statívy |
| 29 | Ostatné príslušenstvo k fotoaparátom |
| 25 | Pre stabilizátory |
| 20 | Adaptéry |

### TV, audio, video a foto technika > Príslušenstvo k TV, audio a video technike — 474 produktov

Návrh pokrýva 349, zvyšok 125 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 123 | Televízory |
| 63 | Bezdrôtové slúchadlá |
| 34 | Príslušenstvo k TV, audio, video |
| 32 | Drátové reproduktory |
| 26 | True Bezdrôtové |
| 24 | Rádioprijímače |
| 24 | Drôtové slúchadlá |
| 23 | Soundbary |

### Elektro, Smart Home a osvetlenie > Rozvádzačové prvky — 468 produktov

Návrh pokrýva 289, zvyšok 179 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 57 | Typová rad RKA |
| 52 | Typová rad HLAK typ - M2 |
| 52 | Typová rad UK |
| 36 | Zdroje a zásuvky na DIN lištu |
| 25 | Prepojovacie lišty tvar kontaktu "kolík/jazýček" |
| 23 | Typová rad HLAK typ - C |
| 22 | Prepojovacie lišty tvar kontaktu "vidlička" |
| 22 | Modulární komponenty |

### Počítače, mobily a tablety > Herné príslušenstvo pre PC — 406 produktov

Návrh pokrýva 375, zvyšok 31 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 81 | Simulácia pretekov |
| 52 | S ventilátorom |
| 49 | Okuliare pre rozšírenú realitu |
| 46 | Bez ventilátora |
| 30 | Herné príslušenstvo |
| 29 | Príslušenstvo VR |
| 24 | Podložky |
| 23 | Mikrofóny |
| 21 | Simulácia letu |
| 20 | Chladenie vodou |

### Cestovanie, šport a outdoor > Posilňovanie a fitness — 394 produktov

Návrh pokrýva 208, zvyšok 186 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 51 | Činky jednoruční |
| 44 | Lopty na cvičenie |
| 39 | Pomôcky na cvičenie doma |
| 27 | Gumy a pásy na cvičenie |
| 26 | Rotopedy |
| 21 | Kettlebell |

### Cestovanie, šport a outdoor > Bojové športy — 377 produktov

Návrh pokrýva 274, zvyšok 103 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 116 | Boxerské rukavice |
| 53 | Chrániče |
| 43 | MMA rukavice |
| 37 | Chrániče holenie |
| 25 | Lapy a bloky |

### Elektro, Smart Home a osvetlenie > Montážne skrine a rozvádzače — 324 produktov

Návrh pokrýva 159, zvyšok 165 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 62 | Zásuvkové skrine |
| 28 | Skrine MAGNA IP65 |
| 25 | Kovová revízne dvierka |
| 22 | Skrine STONE IP55 - IP66 |
| 22 | Rozvodnice NUOVA IP40 (bytové) |

### Energia a napájanie > Fotovoltaika — 300 produktov

Návrh pokrýva 89, zvyšok 211 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 33 | Solárne regulátory MPPT |
| 30 | Spojovacie materiál |
| 26 | Na šikmou střechu |

### Elektro, Smart Home a osvetlenie > Profesionálne kamerové systémy — 297 produktov

Návrh pokrýva 159, zvyšok 138 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 46 | IP sieťové kamery |
| 37 | PRÍSLUŠENSTVO |
| 35 | Napájacie zdroje |
| 21 | Montážne skrine a racky |
| 20 | Káble |

### Dielňa, náradie a záhrada > Elektronické súčiastky — 296 produktov

Návrh pokrýva 223, zvyšok 73 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 102 | Príslušenstvo Arduino |
| 47 | Snímače a prevodníky Arduino |
| 25 | Autopojistky |
| 25 | Poistky 5x20mm rychlé (F) |
| 24 | Programovatelné moduly Arduino |

### Domáce spotrebiče > Vysávače — 290 produktov

Návrh pokrýva 259, zvyšok 31 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 97 | Robotické vysávače |
| 73 | Náhradné diely |
| 67 | Tyčové vysávače |
| 22 | Podlahové vysávače |

### Profesionálna audio technika > Káble, konektory a redukcie — 248 produktov

Návrh pokrýva 157, zvyšok 91 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 52 | XLR |
| 30 | Káble |
| 30 | 6.3mm |
| 24 | RCA |
| 21 | reproduktorové na kotúči |

### Auto-moto > Elektronika do auta — 241 produktov

Návrh pokrýva 200, zvyšok 41 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 61 | Reproduktory do autá |
| 32 | Autorádiá |
| 32 | Audio, Hi-Fi |
| 28 | Android Auto |
| 27 | Adaptéry napájení |
| 20 | Displeje do autá |

### Domáce spotrebiče > Kávovary a espressá — 232 produktov

Návrh pokrýva 179, zvyšok 53 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 68 | Kávové kapsle |
| 46 | Káva |
| 45 | Kávovary a espressá |
| 20 | Moka kanvice a frenchpressy |

### Zdravie a starostlivosť > Starostlivosť o vlasy — 231 produktov

Návrh pokrýva 197, zvyšok 34 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 66 | Fény na vlasy |
| 58 | Kulmy na vlasy |
| 39 | Zastrihávače |
| 34 | Žehličky na vlasy, krepovací kliešte |

### Domáce spotrebiče > Príslušenstvo k malým spotrebičom — 230 produktov

Návrh pokrýva 207, zvyšok 23 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 78 | Vrecká do vysávačov |
| 51 | Príslušenstvo k vysávačom |
| 28 | Príslušenstvo ku kávovarom |
| 26 | Príslušenstvo k malým spotrebičom |
| 24 | Filtre do vysávačov |

### Cestovanie, šport a outdoor > Príslušenstvo pre drony — 229 produktov

Návrh pokrýva 222, zvyšok 7 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 112 | Filtre pre drony |
| 73 | DJI |
| 37 | Tašky a kufre |

### Domáce spotrebiče > Príprava nápojov — 193 produktov

Návrh pokrýva 147, zvyšok 46 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 84 | Rýchlovarné kanvice |
| 36 | Filtračné kanvice |
| 27 | Príslušenstvo pre filtračné kanvice |

### Elektro, Smart Home a osvetlenie > Ističe a chrániče — 184 produktov

Návrh pokrýva 131, zvyšok 53 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 37 | Ističe AC |
| 26 | Proudové chrániče |
| 24 | Prepínače napájení |
| 23 | Prepäťové ochrany AC |
| 21 | Stykače |

### Cestovanie, šport a outdoor > Turistika a outdoor — 182 produktov

Návrh pokrýva 136, zvyšok 46 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 40 | Ostatné |
| 39 | Kempingové vybavenie |
| 29 | Návnada lode |
| 28 | Čelovky |

### Elektro, Smart Home a osvetlenie > Káble a vodiče — 179 produktov

Návrh pokrýva 148, zvyšok 31 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 49 | Fotovoltaické káble |
| 49 | Silové káble |
| 29 | Měděné |
| 21 | Dvojlinky |

### Auto-moto > Karavany a obytné autá — 175 produktov

Návrh pokrýva 105, zvyšok 70 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 55 | Meniče napätie |
| 29 | Autonabíjačky |
| 21 | Autochladničky |

### Auto-moto > Autožiarovky a osvetlenie — 166 produktov

Návrh pokrýva 96, zvyšok 70 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 45 | SMD LED žiarovky |
| 27 | 12V |
| 24 | 12V halogenové |

### Elektro, Smart Home a osvetlenie > Viacnásobné zásuvky a izolačný materiál — 143 produktov

Návrh pokrýva 101, zvyšok 42 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 44 | Rozbočky |
| 32 | Flexo šnúry |
| 25 | Koncovky |

### Domáce spotrebiče > Meteostanice — 125 produktov

Návrh pokrýva 96, zvyšok 29 by ostal na uzle.

| Produktov | Navrhovaná podkategória |
|---:|---|
| 37 | Meteostanice |
| 36 | Meteorologické stanice |
| 23 | Bezdrátová čidlá |


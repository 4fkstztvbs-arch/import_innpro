# Kategórie mimo stromu — kb

Kontrola z 2026-09-13 20:15 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Domáce spotrebiče > Malé spotrebiče` | 1711 | `Domáce spotrebiče` | DOMO DO496WK |
| `Mobily, smart hodinky a tablety` | 796 | **bez kategórie** | FIXED držák MT, šírka 6-9cm FIXH-FIX3 |
| `Počítače a notebooky` | 637 | **bez kategórie** | CANON PG-40BK Black |
| `Mobily, smart hodinky a tablety > Príslušenstvo` | 571 | **bez kategórie** | FIXED držák MT, šírka 6-9cm FIXH-FIX3 |
| `TV, audio a video` | 465 | **bez kategórie** | SONY DVPSR760HB |
| `Domáce spotrebiče > Veľké spotrebiče` | 359 | `Domáce spotrebiče` | GORENJE MO 4250 CLI |
| `Mobily, smart hodinky a tablety > Príslušenstvo > Puzdrá na mobilné telefóny` | 308 | **bez kategórie** | Reboon kniha XS2 černá, kůže 5047 |
| `Počítače a notebooky > Tlačiarne a skenery` | 229 | **bez kategórie** | CANON PG-40BK Black |
| `Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom` | 215 | `Domáce spotrebiče` | ROWENTA WB 4847 Wonderbag |
| `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá` | 200 | `Domáce spotrebiče` | Tassimo Jacobs Caffe Crema Classico16x7g |
| `Domáce spotrebiče > Vstavané spotrebiče` | 195 | `Domáce spotrebiče` | BEKO HDCG 32220 FX |
| `Domáce spotrebiče > Malé spotrebiče > Príprava nápojov` | 178 | `Domáce spotrebiče` | DOMO DO496WK |
| `Mobily, smart hodinky a tablety > Smart telefóny` | 164 | **bez kategórie** | Samsung G556 Galaxy Xcover 7 Black |
| `Domáce spotrebiče > Malé spotrebiče > Vysávače` | 149 | `Domáce spotrebiče` | ROWENTA AC 2320 |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače` | 148 | `Domáce spotrebiče` | DOMO DO 154 |
| `Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce` | 144 | `Domáce spotrebiče` | DOMO DO8708W |
| `Mobily, smart hodinky a tablety > Príslušenstvo > Tvrdené sklá pre mobilné telefóny` | 134 | **bez kategórie** | ALI GLASS Realme 8 (5G), GLA0148 |
| `Domáce spotrebiče > Malé spotrebiče > Žehličky` | 127 | `Domáce spotrebiče` | RUSSELL HOBBS 20630-56 |
| `TV, audio a video > Televízory` | 124 | **bez kategórie** | Samsung QE75QN700C |
| `Počítače a notebooky > Tlačiarne a skenery > Atramenty` | 122 | **bez kategórie** | CANON PG-40BK Black |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské nádobie` | 122 | `Domáce spotrebiče` | Maxxo Espresso DG808 |
| `TV, audio a video > Audio technika > Slúchadlá` | 119 | **bez kategórie** | SONY sluchátka MDR-EX15LP, černá |
| `Domáce spotrebiče > Malé spotrebiče > Upratovacie pomôcky` | 117 | `Domáce spotrebiče` | LEIFHEIT Sací hubice 17 cm |
| `Počítače a notebooky > Sieťové prvky` | 116 | **bez kategórie** | TP-LINK TL-SG105 5-port Gigabit Switch |
| `Domáce spotrebiče > Veľké spotrebiče > Chladničky` | 115 | `Domáce spotrebiče` | GUZZANTI GZ 28 |
| `TV, audio a video > Audio technika > Audio technika – ostatné produkty` | 104 | **bez kategórie** | YAMAHA YWA-10 BL |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače` | 100 | `Domáce spotrebiče` | DOMO DO436BL |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby` | 97 | `Domáce spotrebiče` | Westmark 2963 2270 Šťouchadlo Gallant |
| `Domáce spotrebiče > Veľké spotrebiče > Práčky` | 93 | `Domáce spotrebiče` | ELECTROLUX E2YH01 |
| `Domáce spotrebiče > Malé spotrebiče > Upratovacie pomôcky > Mopy a upratovacie súpravy` | 88 | `Domáce spotrebiče` | LEIFHEIT Sada Combi Classic mop 56792 |
| `Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Rýchlovarné kanvice` | 79 | `Domáce spotrebiče` | DOMO DO496WK |
| `Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Vrecká do vysávačov` | 78 | `Domáce spotrebiče` | ROWENTA WB 4847 Wonderbag |
| `Domáce spotrebiče > Malé spotrebiče > Grily, pekárne, variče` | 76 | `Domáce spotrebiče` | DOMO DO9135G |
| `Počítače a notebooky > Herné zariadenia` | 70 | **bez kategórie** | HRA SWITCH Lege. of Zelda Breath of Wild |
| `Počítače a notebooky > Sieťové prvky > WiFi routery` | 69 | **bez kategórie** | TP-LINK TL-WA854RE Wireless N Extender |
| `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá > Kávové kapsle` | 68 | `Domáce spotrebiče` | Tassimo Jacobs Caffe Crema Classico16x7g |
| `Zdravie a starostlivosť > Starostlivosť o zuby > Príslušenstvo k zubným kefkám` | 67 | `Zdravie a starostlivosť > Starostlivosť o zuby` | ETA Sonetic 0709 90100, modrý |
| `Zdravie a starostlivosť > Starostlivosť o vlasy > Fény na vlasy` | 66 | `Zdravie a starostlivosť > Starostlivosť o vlasy` | REMINGTON D 3015 |
| `Domáce spotrebiče > Veľké spotrebiče > Chladničky > Kombinované chladničky` | 66 | `Domáce spotrebiče` | AMICA KGCR387100R |
| `Počítače a notebooky > Tablety` | 66 | **bez kategórie** | XIAOMI LCD Writing Tablet Color |
| `TV, audio a video > Audio technika > Slúchadlá > Bezdrôtové slúchadlá` | 64 | **bez kategórie** | ALI BT sluchátka AH02,FM,SD,bílá  AH02WT |
| `Elektroinštalačný materiál` | 61 | **bez kategórie** | WAGO 281-657 svorka 4vodiče, 50ks |
| `Domáce spotrebiče > Malé spotrebiče > Sendvičovače, hriankovače, vaflovače` | 60 | `Domáce spotrebiče` | DOMO DO941T |
| `Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Fritézy` | 60 | `Domáce spotrebiče` | DOMO DO461FR |
| `Náradie a dielňa` | 59 | **bez kategórie** | EXTOL 8703081 kotouč dia. řez. na BETON |
| `Náradie a dielňa > Náradie` | 59 | **bez kategórie** | EXTOL 8703081 kotouč dia. řez. na BETON |
| `Domáce spotrebiče > Veľké spotrebiče > Chladničky > Kombinované chladničky > Chladničky s mrazákom dole` | 59 | `Domáce spotrebiče` | AMICA KGCR387100R |
| `Zdravie a starostlivosť > Starostlivosť o vlasy > Kulmy na vlasy` | 58 | `Zdravie a starostlivosť > Starostlivosť o vlasy` | REMINGTON CI 95 Pearl |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry` | 56 | `Domáce spotrebiče` | DOMO DO436BL |
| `Počítače a notebooky > Tlačiarne a skenery > Multifunkčné tlačiarne` | 56 | **bez kategórie** | BROTHER DCP-1512E |
| `Elektroinštalačný materiál > Osvetlenie` | 56 | **bez kategórie** | OSRAM SPECIAL OVEN 25 W 230 V E14 |
| `Domáce spotrebiče > Vstavané spotrebiče > Varné dosky` | 54 | `Domáce spotrebiče` | BEKO HDCG 32220 FX |
| `Domáce spotrebiče > Malé spotrebiče > Vysávače > Robotické vysávače` | 54 | `Domáce spotrebiče` | Umax U-Smart Laser Robot Vacuum UB911 |
| `Mobily, smart hodinky a tablety > Príslušenstvo > Nabíjačky pre mobily` | 51 | **bez kategórie** | ALI AN 3,4A,2xUSB,Lightning,čern CHS0007 |
| `Domáce spotrebiče > Malé spotrebiče > Žehličky > Sušiaky na bielizeň` | 50 | `Domáce spotrebiče` | Leifheit Pegasus 150 Solid Slim |
| `Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika` | 50 | `Domáce spotrebiče` | Domo DO7344H |
| `Domáce spotrebiče > Veľké spotrebiče > Práčky > Práčky zepředu plnené` | 50 | `Domáce spotrebiče` | LG F2DV5S8S1 |
| `Mobily, smart hodinky a tablety > Nositeľná elektronika` | 50 | **bez kategórie** | Huawei Watch 4 Black |
| `Zdravie a starostlivosť > Starostlivosť o zuby > Elektrické zubné kefky` | 48 | `Zdravie a starostlivosť > Starostlivosť o zuby` | Philips HX6322/04 Sonicare for Kids gree |
| `Počítače a notebooky > Tlačiarne a skenery > Multifunkčné tlačiarne > Atramentové multifunkčné tlačiarne` | 47 | **bez kategórie** | EPSON WorkForce Pro WF-3820DWF |
| `Domáce spotrebiče > Malé spotrebiče > Vákuovačky a zváračky fólií` | 46 | `Domáce spotrebiče` | DOMO DO327L |
| `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá > Káva` | 46 | `Domáce spotrebiče` | Lavazza Qualita Oro káva mletá 250g |
| `Domáce spotrebiče > Malé spotrebiče > Vysávače > Tyčové vysávače` | 45 | `Domáce spotrebiče` | ROWENTA RH 6545 WH |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry > Stolové mixéry` | 44 | `Domáce spotrebiče` | DOMO DO436BL |
| `Domáce spotrebiče > Vstavané spotrebiče > Vstavané rúry` | 42 | `Domáce spotrebiče` | Electrolux 600 PRO EOD3H50TX |
| `Počítače a notebooky > Pamäťové médiá` | 41 | **bez kategórie** | VERBATIM Store 1TB G2 Black (53194) |
| `Šport, hračky a voľný čas` | 41 | **bez kategórie** | Carrera FIRST - 65508 Kontaktní kartáčky |
| `TV, audio a video > Audio technika > Reproduktory` | 40 | **bez kategórie** | YAMAHA NS-777 BLACK 2 kartony |
| `Zdravie a starostlivosť > Holiace strojčeky` | 40 | `Zdravie a starostlivosť` | ROWENTA EP 5640 D0 |
| `Domáce spotrebiče > Vstavané spotrebiče > Vstavané rúry > Vstavané pečúce rúry` | 40 | `Domáce spotrebiče` | Electrolux 600 PRO EOD3H50TX |
| `Zdravie a starostlivosť > Starostlivosť o vlasy > Zastrihávače` | 39 | `Zdravie a starostlivosť > Starostlivosť o vlasy` | REMINGTON HC 5200 |
| `Domáce spotrebiče > Vstavané spotrebiče > Vstavané umývačky riadu` | 39 | `Domáce spotrebiče` | Electrolux 600 PRO EES47320L |
| `Mobily, smart hodinky a tablety > Nositeľná elektronika > Smart hodinky` | 38 | **bez kategórie** | Huawei Watch 4 Black |
| `TV, audio a video > Audio technika > HiFi komponenty` | 37 | **bez kategórie** | YAMAHA YWA-10 BL |
| `Počítače a notebooky > PC periférie` | 37 | **bez kategórie** | ASUS SDRW-08D2S-U LITE/Black |
| `Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo k vysávačom` | 37 | `Domáce spotrebiče` | Electrolux ES 17 |
| `Počítače a notebooky > Notebooky` | 36 | **bez kategórie** | UMAX VisionBook 13Wr Flex (UMM220V30) |
| `Domáce spotrebiče > Vstavané spotrebiče > Digestory` | 35 | `Domáce spotrebiče` | BEKO CTB 6250 B |
| `Počítače a notebooky > Herné zariadenia > Konzolové hry` | 35 | **bez kategórie** | HRA SWITCH Lege. of Zelda Breath of Wild |
| `Šport, hračky a voľný čas > Hračky` | 35 | **bez kategórie** | Carrera FIRST - 65508 Kontaktní kartáčky |
| `Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Multifunkčné hrnce` | 34 | `Domáce spotrebiče` | TEFAL FR 490070 |
| `Zdravie a starostlivosť > Starostlivosť o vlasy > Žehličky na vlasy, krepovací kliešte` | 34 | `Zdravie a starostlivosť > Starostlivosť o vlasy` | REMINGTON S 3500 |
| `TV, audio a video > Príslušenstvo k TV, audio, video` | 34 | **bez kategórie** | RAVER B7821 LITHIOVA R06 |
| `Domáce spotrebiče > Veľké spotrebiče > Sušičky` | 33 | `Domáce spotrebiče` | LG RC8TV9AVHN |
| `TV, audio a video > Reproduktory > Drátové reproduktory` | 32 | **bez kategórie** | YAMAHA NS-777 BLACK 2 kartony |
| `Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Filtračné kanvice` | 32 | `Domáce spotrebiče` | BWT filtrační konvice VIDA MEI bílá |
| `Elektroinštalačný materiál > Osvetlenie > LED Žiarovky` | 32 | **bez kategórie** | Osram LED VALUE CL A  FIL 40 4W/827 E27 |
| `Domáce spotrebiče > Malé spotrebiče > Žehličky > Naparovacie žehličky` | 31 | `Domáce spotrebiče` | RUSSELL HOBBS 20630-56 |
| `Domáce spotrebiče > Malé spotrebiče > Nádobie > Hrnce` | 31 | `Domáce spotrebiče` | Banquet Hrnec nepř. GRAN. PR 24x11cm |
| `Mobily, smart hodinky a tablety > Príslušenstvo > Držiaky na mobily` | 30 | **bez kategórie** | FIXED držák MT, šírka 6-9cm FIXH-FIX3 |
| `Domáce spotrebiče > Vstavané spotrebiče > Varné dosky > Indukčné varné dosky` | 30 | `Domáce spotrebiče` | ELECTROLUX EIV634 |
| `Domáce spotrebiče > Malé spotrebiče > Sendvičovače, hriankovače, vaflovače > Hriankovače` | 29 | `Domáce spotrebiče` | DOMO DO941T |
| `Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo ku kávovarom` | 28 | `Domáce spotrebiče` | KRUPS F 0540010/054001A |
| `Domáce spotrebiče > Veľké spotrebiče > Práčky > Príslušenstvo k práčkam a sušičkám` | 28 | `Domáce spotrebiče` | ELECTROLUX E2YH01 |
| `Domáce spotrebiče > Malé spotrebiče > Nádobie > Panvice` | 28 | `Domáce spotrebiče` | Apetit Pánev na 7 lívanců nepř. AP 29 |
| `Auto-moto > Autorádiá` | 27 | `Auto-moto` | PIONEER DEH-4800FD |
| `Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Príslušenstvo pre filtračné kanvice` | 27 | `Domáce spotrebiče` | BWT náhradní filtry Mg2+ 3ks |
| `TV, audio a video > Video technika` | 26 | **bez kategórie** | SONY DVPSR760HB |
| `Domáce spotrebiče > Malé spotrebiče > Grily, pekárne, variče > Elektrické grily` | 26 | `Domáce spotrebiče` | DOMO DO9135G |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Kuchynské váhy` | 26 | `Domáce spotrebiče` | ETA Vital 0790 90000 nerez |
| `TV, audio a video > Audio technika > Slúchadlá > True Bezdrôtové` | 26 | **bez kategórie** | Niceboy HIVE Beans White |
| `TV, audio a video > Audio technika > Slúchadlá > Drôtové slúchadlá` | 25 | **bez kategórie** | SONY sluchátka MDR-EX15LP, černá |
| `Domáce spotrebiče > Veľké spotrebiče > Sporáky a rúry` | 25 | `Domáce spotrebiče` | KOMA OL10 - Olejový filtr 1000x420mm |
| `TV, audio a video > Audio technika > Rádioprijímače` | 24 | **bez kategórie** | RICATECH PR85 |
| `Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Filtre do vysávačov` | 24 | `Domáce spotrebiče` | Koma DL12S - De Longhi XLence SMS |
| `Počítače a notebooky > Herné zariadenia > Konzolové hry > Nintendo Switch - hry` | 24 | **bez kategórie** | HRA SWITCH Lege. of Zelda Breath of Wild |
| `TV, audio a video > Audio technika > Soundbary` | 23 | **bez kategórie** | SONY HTSF150 |
| `Domáce spotrebiče > Veľké spotrebiče > Umývačky riadu` | 23 | `Domáce spotrebiče` | Xavax 111725 čistič myčky, svěží vůně |
| `Domáce spotrebiče > Malé spotrebiče > Vysávače > Podlahové vysávače` | 22 | `Domáce spotrebiče` | ROWENTA RO 3923 EA |
| `Domáce spotrebiče > Veľké spotrebiče > Chladničky > Monoklimatické chladničky` | 22 | `Domáce spotrebiče` | GUZZANTI GZ 28 |
| `Domáce spotrebiče > Vstavané spotrebiče > Vstavané umývačky riadu > Vstavané umývačky 60 cm` | 22 | `Domáce spotrebiče` | Electrolux 600 PRO EES47320L |
| `Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Vykurovacie telesá` | 22 | `Domáce spotrebiče` | Domo DO7344H |
| `Počítače a notebooky > Pamäťové médiá > Externé disky` | 21 | **bez kategórie** | VERBATIM Store 1TB G2 Black (53194) |
| `Domáce spotrebiče > Veľké spotrebiče > Mikrovlnné rúry` | 21 | `Domáce spotrebiče` | GORENJE MO 4250 CLI |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Kuchynské roboty` | 21 | `Domáce spotrebiče` | RUSSELL HOBBS 23480-56/RH |
| `Šport, hračky a voľný čas > Hračky > Autodráhy` | 21 | **bez kategórie** | Carrera FIRST - 65508 Kontaktní kartáčky |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Krájače potravín` | 20 | `Domáce spotrebiče` | DOMO DO 154 |
| `Domáce spotrebiče > Veľké spotrebiče > Vinotéky a vitríny` | 20 | `Domáce spotrebiče` | Guzzanti GZ 338 |
| `Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory` | 20 | `Domáce spotrebiče` | Domo DO7344H |
| `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá > Moka kanvice a frenchpressy` | 20 | `Domáce spotrebiče` | Banquet Kávovar JADE 3 šálky |
| `Počítače a notebooky > Sieťové prvky > Sieťové karty` | 19 | **bez kategórie** | TP-LINK TL-WN823N WiFi USB Adaptér |
| `Domáce spotrebiče > Malé spotrebiče > Sendvičovače, hriankovače, vaflovače > Sendvičovače` | 19 | `Domáce spotrebiče` | DOMO DO9136C |
| `TV, audio a video > Digitálny príjem` | 19 | **bez kategórie** | Evolveo Shark, aktivní venkovní anténa |
| `Domáce spotrebiče > Malé spotrebiče > Grily, pekárne, variče > Elektrické variče` | 18 | `Domáce spotrebiče` | DOMO DO309KP |
| `Domáce spotrebiče > Malé spotrebiče > Vákuovačky a zváračky fólií > Vákuovačky a zváračky` | 18 | `Domáce spotrebiče` | DOMO DO327L |
| `Domáce spotrebiče > Malé spotrebiče > Upratovacie pomôcky > Čističe okien` | 18 | `Domáce spotrebiče` | LEIFHEIT Sací hubice 17 cm |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Šľahače` | 18 | `Domáce spotrebiče` | ETA Lento 1051 90000 |
| `Mobily, smart hodinky a tablety > Príslušenstvo > Káble pre mobily` | 18 | **bez kategórie** | FIXED 1m USB-C kabel, černý FIXD-UC-BK |
| `Počítače a notebooky > Herné zariadenia > Herné ovládače` | 18 | **bez kategórie** | Nintendo Switch Pro Controller |
| `Domáce spotrebiče > Malé spotrebiče > Vákuovačky a zváračky fólií > Príslušenstvo pre vákuovačky a zváračky` | 18 | `Domáce spotrebiče` | Maxxo vakuovací rolky 40x1000cm |
| `Počítače a notebooky > Sieťové prvky > Switche` | 17 | **bez kategórie** | TP-LINK TL-SG105 5-port Gigabit Switch |
| `Zdravie a starostlivosť > Holiace strojčeky > Epilátory` | 17 | `Zdravie a starostlivosť` | ROWENTA EP 5640 D0 |
| `Počítače a notebooky > Tlačiarne a skenery > Tonery` | 17 | **bez kategórie** | KMP B-T55 (TN 1050) |
| `Domáce spotrebiče > Veľké spotrebiče > Mrazničky` | 17 | `Domáce spotrebiče` | GUZZANTI GZ 101 |
| `Domáce spotrebiče > Vstavané spotrebiče > Vstavané umývačky riadu > Vstavané umývačky 45 cm` | 17 | `Domáce spotrebiče` | Whirlpool WSIC 3M27 C |
| `Domáce spotrebiče > Malé spotrebiče > Nádobie > Pečúce formy` | 17 | `Domáce spotrebiče` | Banquet Forma 12muf. nepř.GRANITE 35cm |
| `Domáce spotrebiče > Vstavané spotrebiče > Digestory > Výsuvné, výklopné digestory` | 16 | `Domáce spotrebiče` | BEKO CTB 6250 B |
| `Domáce spotrebiče > Malé spotrebiče > Sušičky potravín` | 16 | `Domáce spotrebiče` | DOMO DO353VD |
| `TV, audio a video > Video technika > Kamery do autá` | 16 | **bez kategórie** | Lamax T10 4K GPS (s hlášením radarů) |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Ostatné kuchynské potreby` | 16 | `Domáce spotrebiče` | Banquet Strojek na těstoviny CUL. |
| `Počítače a notebooky > Monitory` | 16 | **bez kategórie** | SAMSUNG Odyssey G32A (LS32AG320NUXEN) |
| `Domáce spotrebiče > Malé spotrebiče > Grily, pekárne, variče > Pece na pizzu` | 16 | `Domáce spotrebiče` | G3Ferrari G1000610 Pizza trouba DELIZIA |
| `Auto-moto > Autorádiá > Autorádiá s USB` | 15 | `Auto-moto` | PIONEER DEH-4800FD |
| `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá > Automatická espressá` | 15 | `Domáce spotrebiče` | KRUPS EA 810 B |
| `Domáce spotrebiče > Malé spotrebiče > Žehličky > Žehliace dosky` | 15 | `Domáce spotrebiče` | LEIFHEIT Žehlicí prkno Compact M Plus NF |
| `Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie` | 15 | **bez kategórie** | EXTOL 8703081 kotouč dia. řez. na BETON |
| `Náradie a dielňa > Náradie > Elektrické náradie` | 15 | **bez kategórie** | Extol Industrial (8794800) pistole horko |
| `Domáce spotrebiče > Vstavané spotrebiče > Vstavané mikrovlnné rúry` | 15 | `Domáce spotrebiče` | ELECTROLUX  300 LMS2203EMX |
| `Domáce spotrebiče > Malé spotrebiče > Žehličky > Naparovače odevov` | 15 | `Domáce spotrebiče` | Tefal DT9530E1 |
| `Domáce spotrebiče > Veľké spotrebiče > Práčky > Práčky s vrchným plnením` | 15 | `Domáce spotrebiče` | ELECTROLUX PerfectCare 600 EW6TN4262C |
| `Domáce spotrebiče > Vstavané spotrebiče > Varné dosky > Plynové varné dosky` | 14 | `Domáce spotrebiče` | BEKO HDCG 32220 FX |
| `Domáce spotrebiče > Malé spotrebiče > Nádobie > Poháre a fľaše` | 14 | `Domáce spotrebiče` | Maxxo Espresso DG808 |
| `Domáce spotrebiče > Veľké spotrebiče > Umývačky riadu > Umývačky riad 60 cm` | 14 | `Domáce spotrebiče` | GORENJE GS620C10W |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Elektrické sekáčiky` | 13 | `Domáce spotrebiče` | TEFAL MB 756 G 31 |
| `Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo k žehlenie` | 13 | `Domáce spotrebiče` | Leifheit Thermo Reflect L/Universal |
| `Náradie a dielňa > Náradie > Ručné náradie` | 13 | **bez kategórie** | EXTOL 8831100 nůž na odizolování kabelů |
| `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá > Kávovary na kapsle` | 13 | `Domáce spotrebiče` | NESPRESSO KRUPS Inissia XN100510 červený |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Kuchynské nože a nožnice` | 13 | `Domáce spotrebiče` | WESTMARK 2094 2611 Nůžky na salát, 8 ks |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Zmrzlinovače a jogurtovače` | 13 | `Domáce spotrebiče` | Guzzanti GZ 158 |
| `Počítače a notebooky > PC periférie > Myši` | 13 | **bez kategórie** | HP Wireless Mouse 220 Black |
| `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá > Pákové kávovary` | 13 | `Domáce spotrebiče` | ETA Storio 6181 90020 černý |
| `Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Pomalé hrnce` | 13 | `Domáce spotrebiče` | CrockPot CSC063X |
| `TV, audio a video > Audio technika > HiFi komponenty > AV receivery` | 12 | **bez kategórie** | YAMAHA R-S202D BLACK |
| `Domáce spotrebiče > Malé spotrebiče > Sendvičovače, hriankovače, vaflovače > Vaflovače` | 12 | `Domáce spotrebiče` | DOMO DO9133W |
| `Zdravie a starostlivosť > Holiace strojčeky > Príslušenstvo k holiacim strojčekom` | 12 | `Zdravie a starostlivosť` | REMINGTON SPF 300 |
| `Domáce spotrebiče > Malé spotrebiče > Vysávače > Aku vysávače` | 12 | `Domáce spotrebiče` | ROWENTA AC 2320 |
| `TV, audio a video > Antény a satelity > Antény > DVB-T antény` | 12 | **bez kategórie** | Evolveo Shark, aktivní venkovní anténa |
| `TV, audio a video > Audio technika > HiFi komponenty > Gramofóny` | 12 | **bez kategórie** | YAMAHA TT-N503/MusicCast VINYL 500 White |
| `Foto a príslušenstvo` | 12 | **bez kategórie** | Fujifilm INSTAX MINI EU 2 GLOSSY 10X2/PK |
| `Mobily, smart hodinky a tablety > Powerbanky` | 12 | **bez kategórie** | ALI PB, PB1000,10000mAh,černá PB1000BK |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry > Tyčové mixéry` | 12 | `Domáce spotrebiče` | Braun MQ 7025 X |
| `Počítače a notebooky > PC periférie > Klávesnice` | 12 | **bez kategórie** | Niceboy ORYX K300X |
| `Mobily, smart hodinky a tablety > Príslušenstvo > Príslušenstvo pre smart hodinky` | 12 | **bez kategórie** | ALI řem. nylonový 22mm, černý 22AW0015 |
| `Domáce spotrebiče > Veľké spotrebiče > Vykurovanie a ohrev vody > Ohrievače vody` | 12 | `Domáce spotrebiče` | N'oveen ohřívač vody IWH150 |
| `Domáce spotrebiče > Veľké spotrebiče > Vykurovanie a ohrev vody` | 12 | `Domáce spotrebiče` | N'oveen ohřívač vody IWH150 |
| `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá > Prekvapkávače` | 11 | `Domáce spotrebiče` | ETA Inesto 3174 90000, černý |
| `Počítače a notebooky > Pamäťové médiá > Pamäťové karty` | 11 | **bez kategórie** | VERBATIM 44084 microSDXC 64GB cl10 adapt |
| `Domáce spotrebiče > Veľké spotrebiče > Sporáky a rúry > Elektrické sporáky` | 11 | `Domáce spotrebiče` | AMICA 510CE1.30P(W) |
| `Domáce spotrebiče > Veľké spotrebiče > Mrazničky > Pultové mrazničky` | 11 | `Domáce spotrebiče` | GUZZANTI GZ 101 |
| `Domáce spotrebiče > Vstavané spotrebiče > Digestory > Komínové digestory` | 11 | `Domáce spotrebiče` | ELECTROLUX 700 SENSE LFV619K |
| `Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Vykurovacie telesá > Vykurovacie telesá, radiátory > Teplovzdušné ventilátory` | 11 | `Domáce spotrebiče` | Domo DO7344H |
| `Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Čističky vzduchu` | 11 | `Domáce spotrebiče` | Domo DO 264 AP |
| `Bezpečnosť a smart domácnosť > Smart domácnosť` | 11 | **bez kategórie** | TP-LINK Tapo C100 WiFi camera |
| `Zdravie a starostlivosť > Starostlivosť o dieťa` | 11 | `Zdravie a starostlivosť` | Vitalpeak BS 100 |
| `Foto a príslušenstvo > Fotopasce` | 11 | **bez kategórie** | Evolveo StrongVision Adaptér 6V2A |
| `Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Odšťavovače` | 10 | `Domáce spotrebiče` | TEFAL ZC 255 B 38 |
| `Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Elektrické panvice` | 10 | `Domáce spotrebiče` | DOMO DO8708W |
| `Náradie a dielňa > Náradie > Príslušenstvo pre stroje a náradie > Príslušenstvo AKU a Elektrické náradie` | 10 | **bez kategórie** | EXTOL 8703081 kotouč dia. řez. na BETON |
| `Domáce spotrebiče > Veľké spotrebiče > Chladničky > Chladiace tašky a boxy` | 10 | `Domáce spotrebiče` | GUZZANTI GZ 24A |
| `Domáce spotrebiče > Malé spotrebiče > Vysávače > Parné mopy a čističe` | 10 | `Domáce spotrebiče` | ETA Aquabelo 1264 90000, černý/bílý |
| `Počítače a notebooky > Tlačiarne a skenery > Atramentové tlačiarne` | 10 | **bez kategórie** | EPSON WorkForce WF-100W |
| `Bezpečnosť a smart domácnosť` | 10 | **bez kategórie** | TP-LINK Tapo C100 WiFi camera |
| `Počítače a notebooky > Herné zariadenia > Herné ovládače > Gamepady` | 10 | **bez kategórie** | Nintendo Switch Pro Controller |
| `Zdravie a starostlivosť > Starostlivosť o zuby > Ústne sprchy` | 10 | `Zdravie a starostlivosť > Starostlivosť o zuby` | ETA 170890000 |
| `Domáce spotrebiče > Vstavané spotrebiče > Vstavané chladenie` | 10 | `Domáce spotrebiče` | CANDY CIO 225 EE/N |
| `Mobily, smart hodinky a tablety > Tlačidlové telefóny` | 10 | **bez kategórie** | Aligator A675 Senior Red |
| `Elektroinštalačný materiál > Osvetlenie > Svietidlá` | 10 | **bez kategórie** | Philips Macaw 17317/30/16 |
| `Domáce spotrebiče > Vstavané spotrebiče > Varné dosky > Sklokeramické varné dosky` | 9 | `Domáce spotrebiče` | BEKO HDMC 32400 TX |
| `Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Parné hrnce` | 9 | `Domáce spotrebiče` | TEFAL VC 140131 |
| `Počítače a notebooky > Tlačiarne a skenery > Multifunkčné tlačiarne > Laserové multifunkčné tlačiarne` | 9 | **bez kategórie** | BROTHER DCP-1512E |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské potreby > Varešky, Naberačky, Obracačky, Kliešte` | 9 | `Domáce spotrebiče` | Westmark 2963 2270 Šťouchadlo Gallant |
| `Domáce spotrebiče > Malé spotrebiče > Príslušenstvo k malým spotrebičom > Príslušenstvo ku kuchynským robotom` | 9 | `Domáce spotrebiče` | ETA 0028 98030 bílý |
| `Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Výrobníky ľadu` | 9 | `Domáce spotrebiče` | GUZZANTI GZ 122 |
| `Počítače a notebooky > Príslušenstvo k notebookom` | 9 | **bez kategórie** | RIVA CASE Batoh na dron, NTB 13.3",černý |
| `Elektroinštalačný materiál > Osvetlenie > Ostatné žiarovky a žiarivky` | 9 | **bez kategórie** | OSRAM SPECIAL OVEN 25 W 230 V E14 |
| `Elektroinštalačný materiál > Osvetlenie > Svietidlá > Vnútorné osvetlenie` | 9 | **bez kategórie** | Philips Macaw 17317/30/16 |
| `Počítače a notebooky > Herné zariadenia > Príslušenstvo ku konzolám` | 9 | **bez kategórie** | Fixed Stanice PS5 FIXPS5-MCS-BW |
| `Zdravie a starostlivosť > Starostlivosť o zuby > Zubné kefky` | 9 | `Zdravie a starostlivosť > Starostlivosť o zuby` | Oral-B Vitality Pro Kids Frozen + TC |
| `TV, audio a video > Audio technika > HiFi komponenty > Zosilňovače` | 8 | **bez kategórie** | YAMAHA A-S201 BLACK |
| `TV, audio a video > Audio technika > Rádiobudíky` | 8 | **bez kategórie** | SONY ICFC1W |
| `Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Lisy na citrusy` | 8 | `Domáce spotrebiče` | TEFAL ZP 300138 |
| `Počítače a notebooky > Tlačiarne a skenery > Príslušenstvo - tlačiarne` | 8 | **bez kategórie** | CANON fotopapír lesklý 10x15 cm |
| `TV, audio a video > Diaľkové ovládače` | 8 | **bez kategórie** | Superior RC UNI TV SAM/LG |
| `Domáce spotrebiče > Malé spotrebiče > Príprava nápojov > Výrobníky sódy` | 8 | `Domáce spotrebiče` | LIMO BAR ZOOM - Red |
| `Počítače a notebooky > Monitory > LCD monitory` | 8 | **bez kategórie** | SAMSUNG Odyssey G32A (LS32AG320NUXEN) |
| `Domáce spotrebiče > Malé spotrebiče > Ostatné domáce spotrebiče` | 8 | `Domáce spotrebiče` | Ezidri SUSHEZI |
| `Foto a príslušenstvo > Digitálne kompakty` | 8 | **bez kategórie** | Kodak Friendly Zoom FZ45 Black |
| `Mobily, smart hodinky a tablety > Nositeľná elektronika > Smart prstene` | 8 | **bez kategórie** | Powerton chytrý prsten Black velikost 8 |
| `Počítače a notebooky > Herné zariadenia > Konzolové hry > Nintendo DS, 2DS, 3DS - hry` | 8 | **bez kategórie** | NS2 Bravely Default: Flying Fairy HD |
| `Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Aroma difuzéry` | 7 | `Domáce spotrebiče` | ETA Aria 4634 90000, hnědý/dřevo |
| `Záhrada` | 6 | **bez kategórie** | EXTOL 8895013 čer. na znečištěnou vodu |
| `Auto-moto > Autorádiá > Reproduktory do autá` | 6 | `Auto-moto` | Pioneer TS-1002i reprodutor do auta |
| `Počítače a notebooky > Projektory a plátna > Projektory` | 5 | **bez kategórie** | Strong Mira 1 přenosný projektor |
| `Zdravie a starostlivosť > Starostlivosť o vlasy > Príslušenstvo k starostlivosť o vlasy` | 3 | `Zdravie a starostlivosť > Starostlivosť o vlasy` | REMINGTON H5600 |
| `Domáce spotrebiče > Malé spotrebiče > Nádobie > Termosky a termohrnčeky` | 3 | `Domáce spotrebiče` | Banquet Termoska ner. AKCENT 0,75 l |
| `Bezpečnosť a smart domácnosť > IP kamery` | 3 | **bez kategórie** | TP-LINK Tapo C110 Home Sec. Wi-Fi Camera |
| `TV, audio a video > AV káble` | 3 | **bez kategórie** | PremiumCord ULTRA HDMI2.1 kabel 8K 1m |
| `Foto a príslušenstvo > Príslušenstvo` | 2 | **bez kategórie** | Fujifilm INSTAX MINI EU 2 GLOSSY 10X2/PK |
| `Domáce spotrebiče > Malé spotrebiče > Meteostanice` | 2 | `Domáce spotrebiče` | Bravo B-5053 digitální teploměr stříbrný |
| `Foto a príslušenstvo > Príslušenstvo > Ostatné príslušenstvo k fotoaparátom` | 1 | **bez kategórie** | Fujifilm INSTAX MINI EU 2 GLOSSY 10X2/PK |
| `TV, audio a video > Audio technika > Mikrofóny` | 1 | **bez kategórie** | Niceboy VOICE |
| `Zdravie a starostlivosť > Chovateľské potreby` | 1 | `Zdravie a starostlivosť` | TESLA PetCare Station Pro TQ500 |
| `Fotovoltaika a energie > Napájacie zdroje` | 1 | **bez kategórie** | Mio Smartbox IV |

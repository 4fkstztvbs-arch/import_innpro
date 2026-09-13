# Kategórie mimo stromu — innpro

Kontrola z 2026-09-13 20:15 UTC.

Tieto kategórie feed zapisoval, ale v strome neexistujú. Shoptet by ich pri
importe vytvoril, preto boli **skrátené na najhlbšieho existujúceho predka** (produkty
zostali v ponuke, len o úroveň vyššie).

Zaradenie treba doriešiť: buď opraviť `categoryRenamesByPath` daného dodávateľa, alebo
kategóriu vedome pridať do Shoptetu a obnoviť `data/known-categories.json` cez
`node scripts/build-known-categories.js`.

| Kategória mimo stromu | Produktov | Zaradené namiesto toho do | Príklad produktu |
|---|---|---|---|
| `Foto a príslušenstvo` | 891 | **bez kategórie** | Selfie tyč Puluz pre športové fotoaparáty (DJI, GoPro, Insta |
| `Počítače a notebooky` | 773 | **bez kategórie** | Počítačový ventilátor ARGB Darkflash DR12 Pro (120x120) |
| `Kreatívne technológie` | 519 | **bez kategórie** | Laserová gravírka LaserPecker 2 |
| `Bezpečnosť a smart domácnosť` | 515 | **bez kategórie** | Yeelight LED Lightstrip Extension (1 m) |
| `Šport, hračky a voľný čas` | 412 | **bez kategórie** | Baterka Superfire F3-L2 – 570 lm, 260 m, 5 režimov, funkcia  |
| `Počítače a notebooky > Herné príslušenstvo` | 406 | **bez kategórie** | Počítačový ventilátor ARGB Darkflash DR12 Pro (120x120) |
| `Kreatívne technológie > 3D tlač` | 366 | **bez kategórie** | 3D Tlačiareň Creality K1 MAX |
| `Foto a príslušenstvo > Príslušenstvo` | 364 | **bez kategórie** | Fotoblesk Puluz 5w1 + puzdro |
| `Náradie a dielňa` | 352 | **bez kategórie** | Digitálny decibelomer Habotest HT622B USB A/C |
| `Mobily, smart hodinky a tablety` | 329 | **bez kategórie** | Baseus Grain nabíjačka do auta 2x USB 5V 3,1A (čierna) |
| `TV, audio a video` | 300 | **bez kategórie** | Mikrofón Puluz PU425 1,5 m USB-C / Type-C |
| `TV, audio a video > Audio technika > Audio technika – ostatné produkty` | 300 | **bez kategórie** | Mikrofón Puluz PU425 1,5 m USB-C / Type-C |
| `Dróny a RC modely` | 290 | **bez kategórie** | Nabíjačka SkyRC iMax B6AC V2 |
| `Domáce spotrebiče > Malé spotrebiče` | 259 | `Domáce spotrebiče` | Mäkká kefa pre Dreame V10 Pro |
| `Náradie a dielňa > Meracie prístroje` | 252 | **bez kategórie** | Digitálny decibelomer Habotest HT622B USB A/C |
| `Kreatívne technológie > 3D tlač > Vlákna` | 231 | **bez kategórie** | Hyper PLA Filament Creality (Beige) |
| `Dróny a RC modely > Príslušenstvo pre drony` | 228 | **bez kategórie** | Puzdro PGYTECH pre Ryze Tello (P-WJ-002) |
| `Foto a príslušenstvo > Príslušenstvo > Pre športové kamery` | 199 | **bez kategórie** | Súprava vodotesných filtrov Telesin pre objektív GoPro Hero  |
| `Bezpečnosť a smart domácnosť > Riadiace jednotky` | 190 | **bez kategórie** | Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVINKA) |
| `Bezpečnosť a smart domácnosť > Prvky výkonu` | 183 | **bez kategórie** | Inteligentná zástrčka WiFi Gosund SP112 2xUSB, 16A, Tuya |
| `Foto a príslušenstvo > Selfie tyče` | 180 | **bez kategórie** | Selfie tyč Puluz pre športové fotoaparáty (DJI, GoPro, Insta |
| `Šport, hračky a voľný čas > Outdoor` | 177 | **bez kategórie** | Baterka Superfire F3-L2 – 570 lm, 260 m, 5 režimov, funkcia  |
| `TV, audio a video > Audio technika > Slúchadlá` | 156 | **bez kategórie** | Herné slúchadlá Edifier HECATE G2 II (čierne) |
| `Foto a príslušenstvo > Fotoateliér` | 150 | **bez kategórie** | Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU |
| `Mobily, smart hodinky a tablety > Nositeľná elektronika > Smart hodinky` | 146 | **bez kategórie** | Inteligentné hodinky Haylou RS4 Plus (čierne) |
| `Domáce spotrebiče > Malé spotrebiče > Vysávače` | 134 | `Domáce spotrebiče` | Mäkká kefa pre Dreame V10 Pro |
| `Zdravie a starostlivosť > Chovateľské potreby` | 133 | `Zdravie a starostlivosť` | Náhradné filtre + špongia + pumpička Petoneer (3 ks) |
| `Dróny a RC modely > Príslušenstvo pre drony > Filtre pre drony` | 112 | **bez kategórie** | Sada 4 filtrov PGYTECH ND-PL 8/16/32/64 pre DJI Mavic 3 / Ma |
| `Foto a príslušenstvo > Príslušenstvo > Pre fotoaparáty a videokamery` | 111 | **bez kategórie** | White Balance Lens Cap FREEWELL for Sony E Mount |
| `TV, audio a video > Audio technika > Slúchadlá > Bezdrôtové slúchadlá` | 105 | **bez kategórie** | Bezdrôtové slúchadlá Oneodio A10 (čierne) |
| `Počítače a notebooky > Herné príslušenstvo > Simulátory` | 102 | **bez kategórie** | Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ONE / SWIT |
| `Bezpečnosť a smart domácnosť > Riadiace jednotky > Smart ovládače` | 98 | **bez kategórie** | Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVINKA) |
| `Počítače a notebooky > Herné príslušenstvo > Skrine` | 98 | **bez kategórie** | Počítačová skriňa Darkflash Aquarius Mesh (čierna) |
| `Foto a príslušenstvo > Selfie tyče > Postroje, upevňovacie prvky a držiaky` | 97 | **bez kategórie** | Čiapka Puluz s držiakom pre športovú kameru (DJI, GoPro, Ins |
| `TV, audio a video > Audio technika > Reproduktory` | 93 | **bez kategórie** | Reproduktory Edifier R1280DB 2.0 (čierne) |
| `Foto a príslušenstvo > Filtre` | 93 | **bez kategórie** | Filter 1-5 stop Freewell Sherpa True Color VND pre iPhone 13 |
| `Foto a príslušenstvo > Fotoateliér > Svietidlá` | 90 | **bez kategórie** | LED lampa Puluz pre fotoaparát 860 lúmenov |
| `Bezpečnosť a smart domácnosť > Prvky výkonu > Senzory pre smart domácnosť` | 84 | **bez kategórie** | Inteligentný bezdrôtový dverový/okenný senzor Sonoff DW2 WiF |
| `Mobily, smart hodinky a tablety > Nositeľná elektronika > Smart prstene` | 82 | **bez kategórie** | Smartring Colmi R03 18.9MM 9 (black) |
| `Počítače a notebooky > Herné príslušenstvo > Simulátory > Simulácia pretekov` | 81 | **bez kategórie** | Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ONE / SWIT |
| `Bezpečnosť a smart domácnosť > Osvetlenie` | 77 | **bez kategórie** | Yeelight LED Lightstrip Extension (1 m) |
| `Šport, hračky a voľný čas > Outdoor > Svietidlá` | 76 | **bez kategórie** | Baterka Superfire F3-L2 – 570 lm, 260 m, 5 režimov, funkcia  |
| `Záhrada` | 74 | **bez kategórie** | Bezdrôtový robot na čistenie bazénov Wybot S1 |
| `Domáce spotrebiče > Malé spotrebiče > Vysávače > Náhradné diely` | 73 | `Domáce spotrebiče` | Mäkká kefa pre Dreame V10 Pro |
| `Dróny a RC modely > Príslušenstvo pre drony > DJI` | 73 | **bez kategórie** | Sunnylife tablet holder for DJI RC-N1 / RC-N2 / RC-N3 contro |
| `Počítače a notebooky > Prenosné monitory` | 69 | **bez kategórie** | Prenosný monitor Arzopa A1 GAMUT 15,6" |
| `Foto a príslušenstvo > Filtre > Pre športové kamery` | 69 | **bez kategórie** | Filter kit for DJI Osmo Pocket 3 Neewer FL-P10 (ND8~1000,LPR |
| `Počítače a notebooky > Mini PC` | 69 | **bez kategórie** | Mini PC GMKtec M3 Intel i5-12450H 32GB RAM + 1TB SSD WIN 11  |
| `Bezpečnosť a smart domácnosť > Riadiace jednotky > Prepínače` | 65 | **bez kategórie** | Inteligentný vypínač svetla WiFi Gosund SW9 Tuya |
| `Počítače a notebooky > Projektory a plátna` | 62 | **bez kategórie** | Projector Blitzwolf, BW-V8, 4K, Android OS |
| `Kreatívne technológie > Tlačiarne a lisy na potlač textilu` | 61 | **bez kategórie** | HTVRONT HPM02 Mini4 lis na termotransfer (svetlo modrý) |
| `Počítače a notebooky > Projektory a plátna > Projektory` | 58 | **bez kategórie** | Projector Blitzwolf, BW-V8, 4K, Android OS |
| `Šport, hračky a voľný čas > Podvodné skútre` | 57 | **bez kategórie** | Waydoo Subnado ponorné - štartovacia sada |
| `TV, audio a video > Audio technika > Slúchadlá > Bezdrôtové slúchadlá > TWS slúchadlá` | 56 | **bez kategórie** | Slúchadlá TWS Baseus Bowie WX5 (modré) |
| `Počítače a notebooky > Herné príslušenstvo > Skrine > S ventilátorom` | 52 | **bez kategórie** | Počítačová skriňa Darkflash DK151 LED s 3 ventilátormi (biel |
| `Kreatívne technológie > 3D tlač > Príslušenstvo pre 3D tlačiarne` | 52 | **bez kategórie** | AnyCubic Wash & Cure 3 Plus - Print cleaning and drying devi |
| `Náradie a dielňa > Kancelária a škola` | 51 | **bez kategórie** | Nalepovacie termoetikety Niimbot / 40x40 mm / 180 ks (biele) |
| `Kreatívne technológie > Laserové gravírovacie a rezacie stroje` | 51 | **bez kategórie** | Laserová gravírka LaserPecker 2 |
| `Kreatívne technológie > 3D tlač > 3D tlačiarne` | 51 | **bez kategórie** | 3D Tlačiareň Creality K1 MAX |
| `Mobily, smart hodinky a tablety > Tablety` | 50 | **bez kategórie** | Nillkin SnapBranch Modular tablet holder (gray) |
| `Počítače a notebooky > Herné príslušenstvo > Okuliare pre rozšírenú realitu` | 49 | **bez kategórie** | Okuliare AR XREAL One |
| `Záhrada > Záhradné zavlažovacie systémy` | 48 | **bez kategórie** | Automatický hadicový časovač Rainpoint ITV152 |
| `Počítače a notebooky > Herné príslušenstvo > Skrine > Bez ventilátora` | 46 | **bez kategórie** | Počítačová skriňa Darkflash Aquarius Mesh (čierna) |
| `Foto a príslušenstvo > Gimbály a stabilizátory` | 46 | **bez kategórie** | Sada Insta360 Flow Creator Kit s gimbalom (sivá) |
| `Auto-moto > Diagnostické nástroje` | 45 | `Auto-moto` | Bluetooth Battery Tester Ancel BM200 6-20V DC |
| `TV, audio a video > Audio technika > Slúchadlá > Bezdrôtové slúchadlá > Náhlavné slúchadlá` | 43 | **bez kategórie** | Bezdrôtové slúchadlá Oneodio A10 (čierne) |
| `Šport, hračky a voľný čas > Fitness náradie a vybavenie` | 42 | **bez kategórie** | Cycplus T2 smart bike trainer |
| `Počítače a notebooky > Webkamery` | 42 | **bez kategórie** | OBSBOT Tail Air PTZ kamera |
| `Bezpečnosť a smart domácnosť > Prvky výkonu > Smart zástrčky` | 41 | **bez kategórie** | Inteligentná zástrčka WiFi Gosund SP112 2xUSB, 16A, Tuya |
| `Dróny a RC modely > Batérie > Lítiové a NiMH` | 41 | **bez kategórie** | Batéria TATTU 10000mAh 14,8V 30C 4S1P Lipo Battery Pack s EC |
| `Dróny a RC modely > Batérie` | 41 | **bez kategórie** | Batéria TATTU 10000mAh 14,8V 30C 4S1P Lipo Battery Pack s EC |
| `Bezpečnosť a smart domácnosť > Prvky výkonu > Smart zástrčky > Zásuvky` | 40 | **bez kategórie** | Inteligentná zástrčka WiFi Gosund SP112 2xUSB, 16A, Tuya |
| `Šport, hračky a voľný čas > Outdoor > Svietidlá > Ostatné` | 40 | **bez kategórie** | Baterka Superfire F3-L2 – 570 lm, 260 m, 5 režimov, funkcia  |
| `Šport, hračky a voľný čas > Príslušenstvo pre bicykle` | 40 | **bez kategórie** | Zadná bicyklová lampa Superfire BTL02 – USB, 330 mAh, 3 reži |
| `Domáce spotrebiče > Malé spotrebiče > Vysávače > Robotické vysávače` | 40 | `Domáce spotrebiče` | MOVA S10 Plus robot vaccum cleaner |
| `Foto a príslušenstvo > Skladovanie a preprava` | 40 | **bez kategórie** | Mini Bag PULUZ for DJI Osmo Pocket 3 (Black) |
| `Šport, hračky a voľný čas > Elektrické bežecké pásy` | 40 | **bez kategórie** | Elektrický bežecký pás UREVO Foldi Mini (čierny a oranžový) |
| `Náradie a dielňa > Kancelária a škola > Tlačiarne štítkov` | 39 | **bez kategórie** | Nalepovacie termoetikety Niimbot / 40x40 mm / 180 ks (biele) |
| `Šport, hračky a voľný čas > Outdoor > Kempingové vybavenie` | 39 | **bez kategórie** | Autochladnička Euhomy CF004, 18 l |
| `Počítače a notebooky > Herné príslušenstvo > Chladenie počítača` | 38 | **bez kategórie** | Počítačový ventilátor ARGB Darkflash DR12 Pro (120x120) |
| `Mobily, smart hodinky a tablety > Tablety > Grafické tablety` | 38 | **bez kategórie** | Grafický tablet Huion H430P |
| `Dróny a RC modely > Príslušenstvo pre drony > Tašky a kufre` | 37 | **bez kategórie** | Puzdro PGYTECH pre Ryze Tello (P-WJ-002) |
| `Bezpečnosť a smart domácnosť > Prvky výkonu > Smart kúrenie` | 37 | **bez kategórie** | Štartovacia súprava inteligentného termostatu Meross MTS150H |
| `Auto-moto > Štartovacie káble` | 37 | `Auto-moto` | Powerbanka / skokový štartér 5v1 Lokithor AW401 |
| `Bezpečnosť a smart domácnosť > IP kamery` | 35 | **bez kategórie** | Inteligentná IP kamera Gosund IPC3, IP65 |
| `TV, audio a video > Audio technika > Mikrofóny` | 33 | **bez kategórie** | Mikrofón Puluz PU425 1,5 m USB-C / Type-C |
| `Kreatívne technológie > Laserové gravírovacie a rezacie stroje > Zariadenie` | 33 | **bez kategórie** | Laserová gravírka LaserPecker 2 |
| `Auto-moto > Bezdrôtové adaptéry CarPlay > Android Auto` | 32 | `Auto-moto` | Bezdrôtový adaptér Carlinkit 2AIR |
| `Auto-moto > Bezdrôtové adaptéry CarPlay` | 32 | `Auto-moto` | Bezdrôtový adaptér Carlinkit 2AIR |
| `Foto a príslušenstvo > Selfie tyče > Statívy` | 32 | **bez kategórie** | Tripod stand PULUZ for Insta360 X3 / X4 |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské príslušenstvo` | 31 | `Domáce spotrebiče` | Cocinare CICM-301 Krush Mraziaca miska (čierna) |
| `Kreatívne technológie > 3D skenery` | 31 | **bez kategórie** | Creality CR-Scan Raptor 3D Scanner |
| `TV, audio a video > Audio technika > Reproduktory > Počítačové reproduktory` | 30 | **bez kategórie** | Reproduktory Edifier R1280DB 2.0 (čierne) |
| `Foto a príslušenstvo > Skladovanie a preprava > Puzdrá a obaly` | 30 | **bez kategórie** | Mini Bag PULUZ for DJI Osmo Pocket 3 (Black) |
| `Šport, hračky a voľný čas > Outdoor > Rybárčenie` | 30 | **bez kategórie** | Flytec V010 12 000 mAh lodná batéria |
| `Bezpečnosť a smart domácnosť > Prvky výkonu > Smart kúrenie > Termostaty` | 29 | **bez kategórie** | Inteligentný WiFi termostat Meross MTS200BHK(EU) (HomeKit) |
| `Počítače a notebooky > Herné príslušenstvo > Príslušenstvo VR` | 29 | **bez kategórie** | Náhradná batéria BOBOVR B2 |
| `Šport, hračky a voľný čas > Outdoor > Rybárčenie > Návnada lode` | 29 | **bez kategórie** | Flytec V010 12 000 mAh lodná batéria |
| `Foto a príslušenstvo > Selfie tyče > Selfie tyče a držiaky` | 28 | **bez kategórie** | Selfie tyč Puluz pre športové fotoaparáty (DJI, GoPro, Insta |
| `Foto a príslušenstvo > Príslušenstvo > Ostatné príslušenstvo k fotoaparátom` | 28 | **bez kategórie** | Fotoblesk Puluz 5w1 + puzdro |
| `Bezpečnosť a smart domácnosť > Príslušenstvo pre zabezpečovacie systémy` | 28 | **bez kategórie** | Základňa snímača pohybu Sonoff (PIR3, SNZB-03) |
| `Domáce spotrebiče > Malé spotrebiče > Kávovary a espressá` | 27 | `Domáce spotrebiče` | Kávovar na kapsule 3 v 1 HiBREW H1A 1450W |
| `Náradie a dielňa > Kancelária a škola > Tlačiarne štítkov > Štítky` | 27 | **bez kategórie** | Nalepovacie termoetikety Niimbot / 40x40 mm / 180 ks (biele) |
| `Kreatívne technológie > 3D tlač > Živice` | 27 | **bez kategórie** | AnyCubic Standard Resin (Grey) |
| `Počítače a notebooky > Herné príslušenstvo > Herné podložky` | 27 | **bez kategórie** | Wireless controler GameSir T4n (white) |
| `TV, audio a video > Audio technika > Slúchadlá > Drôtové slúchadlá` | 26 | **bez kategórie** | Herné slúchadlá Edifier HECATE G2 II (čierne) |
| `Záhrada > Zariadenia na čistenie bazénov` | 26 | **bez kategórie** | Bezdrôtový robot na čistenie bazénov Wybot S1 |
| `Šport, hračky a voľný čas > Outdoor > Svietidlá > Čelovky` | 25 | **bez kategórie** | Svetlomet Superfire HL06, 500lm, USB |
| `Foto a príslušenstvo > Príslušenstvo > Pre stabilizátory` | 25 | **bez kategórie** | Prepravné puzdro Sunnylife pre DJI Osmo Mobile 6 |
| `Auto-moto > Videorekordéry` | 25 | `Auto-moto` | Monitor UTOUR C2M |
| `TV, audio a video > Audio technika > Slúchadlá > Príslušenstvo` | 25 | **bez kategórie** | Herné slúchadlá ONIKUMA GT839 |
| `Mobily, smart hodinky a tablety > Pamäťové karty` | 24 | **bez kategórie** | Memory card Samsung EVO Plus microSD 2021 64GB (MB-MC64KA) |
| `Počítače a notebooky > Herné príslušenstvo > Herné podložky > Podložky` | 24 | **bez kategórie** | Wireless controler GameSir T4n (white) |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské príslušenstvo > Na varenie` | 24 | `Domáce spotrebiče` | IsEasy T2V-01M  ceramic/electric cooktop |
| `Mobily, smart hodinky a tablety > USB káble` | 23 | **bez kategórie** | Kábel Baseus Cafule Micro USB 2,4A 1 m (sivý + čierny) |
| `Počítače a notebooky > Herné príslušenstvo > Mikrofóny` | 23 | **bez kategórie** | Dynamický mikrofon Maono PD200x (černý) |
| `Bezpečnosť a smart domácnosť > Osvetlenie > Stropné svietidlá` | 22 | **bez kategórie** | Stropné svietidlo Yeelight Arwen 450S |
| `Bezpečnosť a smart domácnosť > Riadiace jednotky > Smart centrály` | 22 | **bez kategórie** | Smart Hub WiFi/RF 433MHz Sonoff RF BridgeR2 |
| `Zdravie a starostlivosť > Chovateľské potreby > Príslušenstvo pre mačacie toalety` | 22 | `Zdravie a starostlivosť` | Náhradné filtre pre Catlink litter box Scooper 2ks. |
| `Foto a príslušenstvo > Fotoateliér > Softboxy` | 21 | **bez kategórie** | Skladacie mäkké svetlo s bleskom Puluz PU5120 20cm |
| `Zdravie a starostlivosť > Chovateľské potreby > Prípravky na starostlivosť o zvieratá` | 21 | `Zdravie a starostlivosť` | LED nožnice na nechty PetKit |
| `Bezpečnosť a smart domácnosť > Prvky výkonu > Smart zámky` | 21 | **bez kategórie** | Funkcjonalny klucz sprzętowy Sonoff ZigBee 3.0 USB Dongle Pl |
| `Počítače a notebooky > Herné príslušenstvo > Simulátory > Simulácia letu` | 21 | **bez kategórie** | Joystick PXN-2113 PRO Ovládanie letu PC |
| `Foto a príslušenstvo > Selfie tyče > Adaptéry` | 21 | **bez kategórie** | Magnetický základný adaptér PULUZ PU708B (1/4 palca) pre špo |
| `Domáce spotrebiče > Malé spotrebiče > Vysávače > Tyčové vysávače` | 21 | `Domáce spotrebiče` | Bezdrôtový vysávač na mokré a suché vysávanie Mova M10 |
| `Počítače a notebooky > Herné príslušenstvo > Chladenie počítača > Chladenie vodou` | 20 | **bez kategórie** | Počítačový chladič vody Darkflash DN 360 (biely) |
| `Šport, hračky a voľný čas > Hračky` | 19 | **bez kategórie** | DJI RoboMaster TT celoplošný ochranný kryt vrtule |
| `TV, audio a video > Audio technika > Mikrofóny > Klopové mikrofóny` | 18 | **bez kategórie** | Mikrofón Puluz PU425 1,5 m USB-C / Type-C |
| `Šport, hračky a voľný čas > Outdoor > Osvetlenie` | 18 | **bez kategórie** | Kempingová lampa Superfire T20, 180lm, USB |
| `TV, audio a video > Audio technika > Reproduktory > Prenosné Bluetooth reproduktory` | 18 | **bez kategórie** | Reproduktor Edifier D12 (čierny) |
| `Zdravie a starostlivosť > Chovateľské potreby > Inteligentné toalety pre zvieratá` | 18 | `Zdravie a starostlivosť` | Inteligentný samočistiaci odpadkový kôš pre mačky Catlink Sc |
| `Foto a príslušenstvo > Filtre > Pre zrkadlovky` | 18 | **bez kategórie** | Univerzálny magnetický filtračný systém Freewell K2 |
| `Kreatívne technológie > Laserové gravírovacie a rezacie stroje > Príslušenstvo` | 18 | **bez kategórie** | xTool Stolný odsávač dymu |
| `Šport, hračky a voľný čas > Príslušenstvo pre bicykle > Pumpy` | 18 | **bez kategórie** | Air pump Cycplus A2 |
| `Dróny a RC modely > Načítanie` | 17 | **bez kategórie** | Nabíjačka SkyRC iMax B6AC V2 |
| `Mobily, smart hodinky a tablety > Nabíjačky` | 17 | **bez kategórie** | Baseus Grain nabíjačka do auta 2x USB 5V 3,1A (čierna) |
| `TV, audio a video > Audio technika > Reproduktory > Aktívne reproduktory` | 16 | **bez kategórie** | Reproduktory Edifier R2750DB 2.0 (čierne) |
| `Mobily, smart hodinky a tablety > Selfie tyče` | 16 | **bez kategórie** | Stojan / statív / trojnožka pre projektor Blitzwolf BW-VF3,  |
| `TV, audio a video > Audio technika > Soundbary` | 16 | **bez kategórie** | Ultimea Poseidon D50 Soundbar |
| `Zdravie a starostlivosť > Chovateľské potreby > Ostatné príslušenstvo pre zvieratá` | 15 | `Zdravie a starostlivosť` | Náhradné filtre + špongia + pumpička Petoneer (3 ks) |
| `Bezpečnosť a smart domácnosť > Osvetlenie > Stolové a nočné lampy` | 15 | **bez kategórie** | Akumulatorowa składana lampka biurkowa Yeelight Z1 Pro |
| `Zdravie a starostlivosť > Chovateľské potreby > Dávkovače krmiva > misky` | 15 | `Zdravie a starostlivosť` | Inteligentný dávkovač krmiva Petoneer Nutri Mini |
| `Zdravie a starostlivosť > Chovateľské potreby > Dávkovače krmiva` | 15 | `Zdravie a starostlivosť` | Inteligentný dávkovač krmiva Petoneer Nutri Mini |
| `Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika` | 15 | `Domáce spotrebiče` | Inteligentný Wi-Fi difuzér esenciálnych olejov Meross MOD150 |
| `Zdravie a starostlivosť > Chovateľské potreby > Venčenie a transport` | 15 | `Zdravie a starostlivosť` | Držiak na sáčky pre psa PetKit |
| `Fotovoltaika a energie` | 15 | **bez kategórie** | Magnetická mini powerbanka Baseus 5000mAh, USB-C 20W (černá) |
| `Počítače a notebooky > Sieťové zariadenia` | 15 | **bez kategórie** | TERRAMASTER F2-425 – 2-diskový NAS súborový server |
| `Dróny a RC modely > Načítanie > Nabíjačky` | 14 | **bez kategórie** | Nabíjačka SkyRC iMax B6AC V2 |
| `Bezpečnosť a smart domácnosť > Osvetlenie > LED pásy` | 14 | **bez kategórie** | Yeelight LED Lightstrip Extension (1 m) |
| `Zdravie a starostlivosť > Chovateľské potreby > Fontány > napájačky` | 14 | `Zdravie a starostlivosť` | Vodná fontána pre domáce zvieratá Petoneer Fresco mini plus |
| `Zdravie a starostlivosť > Chovateľské potreby > Fontány` | 14 | `Zdravie a starostlivosť` | Vodná fontána pre domáce zvieratá Petoneer Fresco mini plus |
| `Počítače a notebooky > Herné príslušenstvo > Chladenie počítača > Ventilátory` | 14 | **bez kategórie** | Počítačový ventilátor ARGB Darkflash DR12 Pro (120x120) |
| `Náradie a dielňa > Ostatné náradie a vybavenie dielne` | 14 | **bez kategórie** | Ručný vozík DJI Power |
| `Náradie a dielňa > Spájkovačky` | 14 | **bez kategórie** | Prenosný bodový zvárač FNIRSI SWM-10 2 v 1 |
| `Foto a príslušenstvo > Fotoateliér > Stany bez tieňa` | 13 | **bez kategórie** | Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU |
| `Šport, hračky a voľný čas > Hračky > Edukatívne > Programovateľní roboti` | 13 | **bez kategórie** | DJI RoboMaster TT celoplošný ochranný kryt vrtule |
| `Šport, hračky a voľný čas > Hračky > Edukatívne` | 13 | **bez kategórie** | DJI RoboMaster TT celoplošný ochranný kryt vrtule |
| `Domáce spotrebiče > Malé spotrebiče > Teplomery` | 13 | `Domáce spotrebiče` | Teplomer na potraviny Habotest HT690 |
| `Počítače a notebooky > Pendrive` | 13 | **bez kategórie** | Pendrive Lexar JumpDrive M400 USB 3.0 32GB |
| `Šport, hračky a voľný čas > SUP dosky` | 13 | **bez kategórie** | Funwater Feath-R Lite SUP doska Koi 3,5m SUPFR01E |
| `Mobily, smart hodinky a tablety > USB káble > USB na Lightning` | 12 | **bez kategórie** | Baseus Yiven Lightning kábel 180 cm 2A (červený) |
| `Mobily, smart hodinky a tablety > Nabíjačky > sieťové nabíjačky` | 12 | **bez kategórie** | Nabíjačka 6x USB Blitzwolf BW-S15, QC 3.0, 60 W (biela) |
| `Mobily, smart hodinky a tablety > Príslušenstvo` | 12 | **bez kategórie** | Baseus Crystal Tvrdené sklo 0,3 mm pre tablet Huawei MatePad |
| `Zdravie a starostlivosť > Otoskopy` | 12 | `Zdravie a starostlivosť` | Odstraňovač čiernych bodiek s kamerou inFace CF-05E (čierny) |
| `Mobily, smart hodinky a tablety > Tablety > Iné` | 12 | **bez kategórie** | Nillkin SnapBranch Modular tablet holder (gray) |
| `Zdravie a starostlivosť > Starostlivosť o vlasy > Fény` | 12 | `Zdravie a starostlivosť > Starostlivosť o vlasy` | Vysokorýchlostný sušič vlasov MOVA powered by Dreame Turbo,  |
| `Počítače a notebooky > Tablety` | 12 | **bez kategórie** | Digitálny zápisník Huion Kamvas Ink 10 EB1011 |
| `Náradie a dielňa > Kancelária a škola > Fototlačiarne` | 12 | **bez kategórie** | Prenosná fototlačiareň Liene Pearl 2x3" (biela) |
| `Počítače a notebooky > Routery` | 12 | **bez kategórie** | Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps |
| `Foto a príslušenstvo > Súpravy` | 11 | **bez kategórie** | Sada 53 kusov príslušenstva Puluz pre športové kamery PKT16 |
| `TV, audio a video > Audio technika > Reproduktory > Sady reproduktorov` | 11 | **bez kategórie** | Reproduktory Edifier S350DB 2.1 (hnedé) |
| `Bezpečnosť a smart domácnosť > Osvetlenie > Nábytkové svietidlá` | 11 | **bez kategórie** | Yeelight Svetlo do skrine strieborné 20 cm 2700K |
| `Zdravie a starostlivosť > Prístroje na tvár > Masážne prístroje` | 11 | `Zdravie a starostlivosť > Prístroje na tvár` | Masážny prístroj na tvár EMS ANLAN 01-ADRY11-001 |
| `Mobily, smart hodinky a tablety > Herné ovládače` | 11 | **bez kategórie** | Mobilný ovládač GameSir X3 Pro USB-C s držiakom na telefón |
| `Šport, hračky a voľný čas > Outdoor > Osvetlenie > Kempingové svetlá` | 10 | **bez kategórie** | Kempingová lampa Superfire T20, 180lm, USB |
| `Foto a príslušenstvo > Fotoateliér > Fotografické pozadia` | 10 | **bez kategórie** | Podpera pozadia pre fotoštúdio Puluz PU3054B 67 cm |
| `Šport, hračky a voľný čas > Príslušenstvo pre bicykle > Lampy` | 10 | **bez kategórie** | Zadná bicyklová lampa Superfire BTL02 – USB, 330 mAh, 3 reži |
| `Počítače a notebooky > Herné príslušenstvo > Myši` | 10 | **bez kategórie** | Herná myš ONIKUMA CW905 čierna |
| `Fotovoltaika a energie > Elektrické stanice` | 10 | **bez kategórie** | Rýchlonabíjací kábel SDC DJI Power pre AIR 3 |
| `Auto-moto > Káble a nabíjačky pre elektromobily` | 10 | `Auto-moto` | Nástenná nabíjačka do auta Besen BS20 s výkonom 22 kW |
| `Foto a príslušenstvo > Fotoateliér > Kruhové svetlá` | 9 | **bez kategórie** | Statívový držiak Puluz s 20 cm LED krúžkom Vlogging PKT3073B |
| `TV, audio a video > Audio technika > Interkomy` | 9 | **bez kategórie** | EJEAS Q2 motorcycle intercom |
| `Počítače a notebooky > Dokovacie stanice` | 9 | **bez kategórie** | Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD Smart Di |
| `Šport, hračky a voľný čas > Elektrické bicykle` | 9 | **bez kategórie** | Cyklotrenažér Cycplus T3 |
| `Domáce spotrebiče > Malé spotrebiče > Vzduchotechnika > Čističky vzduchu` | 9 | `Domáce spotrebiče` | Čistička vzduchu MOVA Stellar X10 |
| `Šport, hračky a voľný čas > Stacionárne Bicykle` | 9 | **bez kategórie** | Rotoped DeerRun S500 Pro (čierny) |
| `Zdravie a starostlivosť > Chovateľské potreby > Pohlcovače zápachu` | 8 | `Zdravie a starostlivosť` | Inteligentný odstraňovač zápachu Petoneer |
| `Šport, hračky a voľný čas > Outdoor > Osvetlenie > Vonkajšie svetlá` | 8 | **bez kategórie** | Solárna lampa Superfire FF5-A, 63W, 500lm, 5000mAh |
| `Mobily, smart hodinky a tablety > Príslušenstvo > Puzdrá na mobilné telefóny` | 8 | **bez kategórie** | Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/15 Pro M |
| `TV, audio a video > Audio technika > Mikrofóny > Hry` | 8 | **bez kategórie** | Dynamický mikrofón Maono PD200W (čierny) |
| `Náradie a dielňa > Wykrywacze metalu` | 8 | **bez kategórie** | Detektor kovov Garrett ACE 150 |
| `Počítače a notebooky > Akumulátory, batérie > Batérie` | 8 | **bez kategórie** | Univerzálna nabíjačka LINOGY AA/AAA |
| `Počítače a notebooky > Akumulátory, batérie` | 8 | **bez kategórie** | Univerzálna nabíjačka LINOGY AA/AAA |
| `Počítače a notebooky > Čítačky kariet` | 7 | **bez kategórie** | Pro card reader FREEWELL CF A/B, SD, TF |
| `Domáce spotrebiče > Malé spotrebiče > Grily, pekárne, variče` | 7 | `Domáce spotrebiče` | AMZCHEF CE-FS-I72S-FFDD07 4-zónová indukčná varná doska |
| `Mobily, smart hodinky a tablety > Powerbanky` | 6 | **bez kategórie** | Powerbank OS-Baseus Compact IP 5000mAh 20W (white) |
| `Domáce spotrebiče > Malé spotrebiče > Ostatné domáce spotrebiče` | 6 | `Domáce spotrebiče` | Pomalý odšťavovač AMZCHEF 1501-BK-SM (čierny) |
| `Mobily, smart hodinky a tablety > Príslušenstvo > Tvrdené sklá pre mobilné telefóny` | 4 | **bez kategórie** | Baseus Crystal Tvrdené sklo 0,3 mm pre tablet Huawei MatePad |
| `TV, audio a video > Audio technika > Stojany pre reproduktory a slúchadlá` | 3 | **bez kategórie** | Edifier SS02 znamená reproduktory Edifier S1000MKII / S1000W |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače > Mixéry` | 3 | `Domáce spotrebiče` | Šálkový mixér AMZCHEF ZM5003-GA (sivý) |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače` | 3 | `Domáce spotrebiče` | Šálkový mixér AMZCHEF ZM5003-GA (sivý) |
| `Domáce spotrebiče > Malé spotrebiče > Kuchynské roboty a krájače > Mixéry a šľahače` | 3 | `Domáce spotrebiče` | Šálkový mixér AMZCHEF ZM5003-GA (sivý) |
| `Počítače a notebooky > Predlžovacie káble` | 3 | **bez kategórie** | BlitzWolf BW-EC1 4xAC 2xUSB-A 2xUSB-C Extender |
| `TV, audio a video > Audio technika > Príslušenstvo k audio technike` | 2 | **bez kategórie** | Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth 5.0, USB |
| `Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce > Fritézy` | 2 | `Domáce spotrebiče` | Fritéza MOVA AF20 Pro bez tuku |
| `Domáce spotrebiče > Malé spotrebiče > Fritézy a hrnce` | 2 | `Domáce spotrebiče` | Fritéza MOVA AF20 Pro bez tuku |
| `Domáce spotrebiče > Malé spotrebiče > Žehličky > Naparovače odevov` | 1 | `Domáce spotrebiče` | Naparovač odevov Neakasa Magic 1 |
| `Domáce spotrebiče > Malé spotrebiče > Žehličky` | 1 | `Domáce spotrebiče` | Naparovač odevov Neakasa Magic 1 |

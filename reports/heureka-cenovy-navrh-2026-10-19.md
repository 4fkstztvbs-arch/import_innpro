# Návrh na úpravu cien podľa Heureka porovnania — 2026-10-19

Vstup: `premiumstore-sk_2026-10-19_07-24.csv` (automaticky spracované denným behom).

**Pravidlo:** ponuky sa počítajú podľa pozície v rebríčku, naša ponuka sa odčíta presne raz. Cieľ je najbližšia zaokrúhlená cena pod najlacnejším iným predajcom, bez stropu prirážky. Minimum = nákupná cena bez DPH × (1 + 5 % prirážka) × (1 + DPH), zaokrúhlené nahor. Už najlacnejší produkt sa zbytočne nezlacňuje. Ak zľava po cenové minimum nepreskočí žiadnu známu konkurenčnú ponuku, cena sa zachová. Pri jedinej ponuke INNPRO zostáva na 15 % prirážke; ostatní dodávatelia používajú vlastnú základnú/odporúčanú cenu. Neplatné dáta a chýbajúca nákupná cena sa nepreceňujú.
Prirážka je počítaná z nákupnej ceny bez DPH; nejde o obchodnú maržu z predajnej ceny. Heureka ceny v tabuľkách sú ceny iných predajcov.

## Súhrn

- Spárovaných produktov cez EAN: **6261**
- Návrh **zvýšiť** cenu: **85** produktov
- Návrh **znížiť** cenu: **63** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6113** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **7**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **342**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (85)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Súprava stabilizátora iSteady MT3 Pro | 521.50 € | **646.90 €** | 18.2 % | **46.7 %** | 647.00 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10, 64GB (biely) | 215.90 € | **266.90 €** | 15.0 % | **42.2 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10, 64GB (čierny) | 215.90 € | **266.90 €** | 15.0 % | **42.2 %** | 267.00 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server NAS TERRAMASTER F4-425 Plus s proces... | 604.00 € | **650.00 €** | 15.0 % | **23.8 %** | 650.46 € | cena podľa najlacnejšieho iného predajcu |
| NAS server TERRAMASTER F2-425 Plus s procesorom Inte... | 495.50 € | **534.50 €** | 15.0 % | **24.0 %** | 534.88 € | cena podľa najlacnejšieho iného predajcu |
| Súborový server TERRAMASTER F6-424 NAS s procesorom ... | 702.50 € | **738.50 €** | 15.0 % | **20.9 %** | 738.88 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F8 SSD NAS - súborový server s procesoro... | 655.50 € | **691.00 €** | 15.0 % | **21.2 %** | 691.50 € | cena podľa najlacnejšieho iného predajcu |
| Elektrický skúter NAVEE ST5 Max | 835.00 € | **870.00 €** | 19.5 % | **24.5 %** | 870.20 € | cena podľa najlacnejšieho iného predajcu |
| TERRAMASTER F4 SSD NAS - súborový server s procesoro... | 474.90 € | **508.50 €** | 15.0 % | **23.2 %** | 508.71 € | cena podľa najlacnejšieho iného predajcu |
| Vlogová kamera SJCAM ZV200 (čierna) | 102.90 € | **128.90 €** | 14.9 % | **44.0 %** | 129.00 € | cena podľa najlacnejšieho iného predajcu |
| Beko EnergySpin B7WFU68416WBES | 404.00 € | **429.50 €** | 5.7 % | **12.4 %** | 429.61 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 120" projection screen. | 41.00 € | **64.00 €** | 37.7 % | **115.0 %** | 64.29 € | cena podľa najlacnejšieho iného predajcu |
| iRobot Roomba Plus 575 Combo+dock white | 528.00 € | **549.00 €** | 9.6 % | **14.0 %** | 549.49 € | cena podľa najlacnejšieho iného predajcu |
| Fotoaparát SJCAM ZV100 (biely) | 83.50 € | **98.90 €** | 15.1 % | **36.3 %** | 99.00 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ20 – nabíjací set (čierny) | 193.50 € | **206.50 €** | 15.1 % | **22.8 %** | 206.54 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (biele) | 187.00 € | **200.00 €** | 7.9 % | **15.4 %** | 200.49 € | cena podľa najlacnejšieho iného predajcu |
| Reproduktory EDIFIER MR 4.5 (čierne) | 187.00 € | **200.00 €** | 7.9 % | **15.4 %** | 200.49 € | cena podľa najlacnejšieho iného predajcu |
| Automatické krmítko pre zvieratá Rojeco 4L verzia s ... | 51.90 € | **64.00 €** | 15.4 % | **42.3 %** | 64.50 € | cena podľa najlacnejšieho iného predajcu |
| Guma posilovací REBEL ACTIVE RBA-3000-S4 Latexová sa... | 15.50 € | **27.50 €** | 7.7 % | **91.1 %** | 27.75 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (biela) | 142.00 € | **151.50 €** | 15.0 % | **22.6 %** | 151.79 € | cena podľa najlacnejšieho iného predajcu |
| Vrecková akčná kamera SJCAM C400 (čierna) | 142.00 € | **151.50 €** | 15.0 % | **22.6 %** | 151.79 € | cena podľa najlacnejšieho iného predajcu |
| Behringer Xenyx X1222USB mixpult s USB a efektmi | 286.00 € | **295.50 €** | 57.4 % | **62.6 %** | 295.90 € | cena podľa najlacnejšieho iného predajcu |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 455.00 € | **463.50 €** | 7.4 % | **9.4 %** | 463.56 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 105.90 € | **114.00 €** | 5.1 % | **13.2 %** | 114.47 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 82.90 € | **90.00 €** | 5.2 % | **14.2 %** | 90.49 € | cena podľa najlacnejšieho iného predajcu |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 92.50 € | **99.50 €** | 5.5 % | **13.5 %** | 99.54 € | cena podľa najlacnejšieho iného predajcu |
| Remoska Dua D51/10 | 104.50 € | **111.50 €** | 5.3 % | **12.4 %** | 111.85 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C100PRO (biela) | 67.00 € | **72.00 €** | 14.9 % | **23.4 %** | 72.21 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 18.50 € | **23.50 €** | 5.3 % | **33.8 %** | 23.83 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá s tlačidlami... | 34.50 € | **39.00 €** | 15.3 % | **30.3 %** | 39.04 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 15.00 € | **19.50 €** | 5.3 % | **36.9 %** | 19.68 € | cena podľa najlacnejšieho iného predajcu |
| BlitzWolf BW-VS4 100" projection screen. | 33.50 € | **37.50 €** | 43.9 % | **61.1 %** | 37.61 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 27.50 € | **31.50 €** | 13.0 % | **29.5 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 12.90 € | **16.50 €** | 5.5 % | **35.0 %** | 16.89 € | cena podľa najlacnejšieho iného predajcu |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 80.50 € | **84.00 €** | 29.1 % | **34.7 %** | 84.50 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 22.50 € | **26.00 €** | 21.1 % | **40.0 %** | 26.50 € | cena podľa najlacnejšieho iného predajcu |
| Turistická rybářská židle, skládací s opěradlem | 13.00 € | **15.90 €** | 17.0 % | **43.2 %** | 15.99 € | cena podľa najlacnejšieho iného predajcu |
| Optibox Zebra diaľkový ovládač (s PVR) - originálny | 13.50 € | **16.00 €** | 18.4 % | **40.3 %** | 16.30 € | cena podľa najlacnejšieho iného predajcu |
| Solight nástenná lampička CELE, 1x GU10, biela | 7.60 € | **9.90 €** | 5.4 % | **37.4 %** | 9.96 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco 2L Automatic Pet Feeder Button Version (White) | 36.90 € | **39.00 €** | 15.4 % | **22.0 %** | 39.04 € | cena podľa najlacnejšieho iného predajcu |
| BEKO MOC20100WFB | 52.00 € | **54.00 €** | 10.6 % | **14.9 %** | 54.06 € | cena podľa najlacnejšieho iného predajcu |
| ETA Activmix Premium 2103 90000, černý | 40.50 € | **42.50 €** | 8.8 % | **14.1 %** | 42.60 € | cena podľa najlacnejšieho iného predajcu |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 152.90 € | **154.90 €** | 20.0 % | **21.6 %** | 155.00 € | cena podľa najlacnejšieho iného predajcu |
| WiFi router TP-Link EB210 WiFi 7 AP BE3600,1x GWan, ... | 68.00 € | **70.00 €** | 7.5 % | **10.7 %** | 70.14 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje NRK6192AXL4 | 359.00 € | **361.00 €** | 8.6 % | **9.2 %** | 361.34 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 1016 | 18.90 € | **20.50 €** | 9.4 % | **18.7 %** | 20.79 € | cena podľa najlacnejšieho iného predajcu |
| NEEWER TL98C DMX LED svetelná tyč | 49.90 € | **51.50 €** | 19.9 % | **23.7 %** | 51.83 € | cena podľa najlacnejšieho iného predajcu |
| Sušička ovoce Ruhhy 25928 400W | 49.90 € | **51.50 €** | 5.6 % | **9.0 %** | 51.90 € | cena podľa najlacnejšieho iného predajcu |
| Stolná lampa YEELIGHT D1 Matter | 77.50 € | **79.00 €** | 33.3 % | **35.8 %** | 79.18 € | cena podľa najlacnejšieho iného predajcu |
| Dreame V30 ESSENTIAL s automatickým nastavením rezu ... | 124.00 € | **125.50 €** | 14.8 % | **16.2 %** | 125.77 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentná vizuálna tyč na čistenie uší Bebird Not... | 40.50 € | **42.00 €** | 16.8 % | **21.1 %** | 42.29 € | cena podľa najlacnejšieho iného predajcu |
| Tefal HB453138 | 29.50 € | **31.00 €** | 7.9 % | **13.4 %** | 31.43 € | cena podľa najlacnejšieho iného predajcu |
| Hodiny nástěnné TechnoLine WT 7981 | 34.90 € | **36.00 €** | 6.2 % | **9.5 %** | 36.09 € | cena podľa najlacnejšieho iného predajcu |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 163.50 € | **164.50 €** | 6.9 % | **7.6 %** | 164.59 € | cena podľa najlacnejšieho iného predajcu |
| Colmi V65 Smartwatch (Gray) | 30.50 € | **31.50 €** | 13.0 % | **16.7 %** | 31.63 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 32.50 € | **33.50 €** | 33.0 % | **37.1 %** | 33.77 € | cena podľa najlacnejšieho iného predajcu |
| Leifheit Sušák Pegasus 180 Solid Black | 37.00 € | **38.00 €** | 7.6 % | **10.5 %** | 38.39 € | cena podľa najlacnejšieho iného predajcu |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 15.50 € | **16.50 €** | 10.8 % | **18.0 %** | 16.90 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco Smart Laser Cat Toy | 18.50 € | **19.50 €** | 32.2 % | **39.3 %** | 19.90 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C 20 W fast charger | 5.80 € | **6.70 €** | 44.6 % | **67.1 %** | 6.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 5.80 € | **6.70 €** | 56.1 % | **80.4 %** | 6.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight USB-C fast charger 20 W | 5.80 € | **6.70 €** | 56.1 % | **80.4 %** | 6.76 € | cena podľa najlacnejšieho iného predajcu |
| Beko BM3WFU3941WBW | 357.90 € | **358.50 €** | 5.0 % | **5.2 %** | 358.79 € | cena podľa najlacnejšieho iného predajcu |
| Guzzanti GZ 608 | 23.90 € | **24.50 €** | 11.5 % | **14.3 %** | 24.65 € | cena podľa najlacnejšieho iného predajcu |
| Router TP-Link ER603WP-4G-Outdoor WiFi 6, 4G, 3x GWA... | 147.90 € | **148.50 €** | 5.3 % | **5.7 %** | 148.90 € | cena podľa najlacnejšieho iného predajcu |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 49.00 € | **49.50 €** | 32.1 % | **33.5 %** | 49.52 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (white) | 33.00 € | **33.50 €** | 12.1 % | **13.8 %** | 33.55 € | cena podľa najlacnejšieho iného predajcu |
| TWS QCY MeloBuds Pro HT08 Headphones, ANC (black) | 33.00 € | **33.50 €** | 12.1 % | **13.8 %** | 33.55 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Archer TX35U PLUS AX 1800 adaptér... | 23.50 € | **24.00 €** | 5.3 % | **7.5 %** | 24.10 € | cena podľa najlacnejšieho iného predajcu |
| Behringer GMX-500 | 40.50 € | **41.00 €** | 13.9 % | **15.3 %** | 41.20 € | cena podľa najlacnejšieho iného predajcu |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 50.00 € | **50.50 €** | 11.1 % | **12.2 %** | 50.76 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 31.50 € | **32.00 €** | 29.1 % | **31.2 %** | 32.35 € | cena podľa najlacnejšieho iného predajcu |
| ROWENTA ZR006501 | 14.00 € | **14.50 €** | 5.5 % | **9.3 %** | 14.89 € | cena podľa najlacnejšieho iného predajcu |
| Russell Hobbs 24992-70 | 39.50 € | **40.00 €** | 7.7 % | **9.1 %** | 40.41 € | cena podľa najlacnejšieho iného predajcu |
| Solight pištoľ spájkovacia 100W sada | 11.50 € | **12.00 €** | 13.5 % | **18.4 %** | 12.48 € | cena podľa najlacnejšieho iného predajcu |
| Rojeco automatic soap dispenser 400ml | 15.50 € | **15.90 €** | 15.9 % | **18.9 %** | 15.96 € | cena podľa najlacnejšieho iného predajcu |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 28.50 € | **28.90 €** | 9.6 % | **11.1 %** | 28.91 € | cena podľa najlacnejšieho iného predajcu |
| FIXED Pouzdro SGTabA11 FIXRTC-1650-BK | 32.50 € | **32.90 €** | 13.4 % | **14.8 %** | 32.96 € | cena podľa najlacnejšieho iného predajcu |
| USB klient TP-Link Mercusys MA37BEH Wireless USB ada... | 36.50 € | **36.90 €** | 5.4 % | **6.6 %** | 37.00 € | cena podľa najlacnejšieho iného predajcu |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 328.50 € | **328.90 €** | 50.7 % | **50.9 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.70 € | **2.90 €** | 23.3 % | **32.5 %** | 2.99 € | cena podľa najlacnejšieho iného predajcu |
| Solight kliešťový multimeter, 20 - 200A | 6.40 € | **6.50 €** | 33.8 % | **35.8 %** | 6.57 € | cena podľa najlacnejšieho iného predajcu |
| Salente Combo-Hepa | 11.90 € | **12.00 €** | 8.5 % | **9.4 %** | 12.40 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 132.90 € | **133.00 €** | 11.1 % | **11.2 %** | 133.08 € | cena podľa najlacnejšieho iného predajcu |
| Počítačová skriňa DarkFlash K430 + 6 ventilátorov (č... | 65.90 € | **66.00 €** | 15.0 % | **15.2 %** | 66.29 € | cena podľa najlacnejšieho iného predajcu |

## Návrh znížiť cenu (63)

| Názov | Naša cena | → Nová cena | Prirážka teraz | → Nová prirážka | Najlacnejší konkurent | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| City Boss Z600 | 616.00 € | **581.90 €** | 15.0 % | **8.6 %** | 581.91 € | cena podľa najlacnejšieho iného predajcu |
| Maxxo VM Chamber Line 90 | 549.50 € | **520.50 €** | 12.5 % | **6.6 %** | 520.87 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C400 (biela) | 184.50 € | **168.90 €** | 14.9 % | **5.2 %** | 158.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Akčná kamera SJCAM C400 (čierny) | 184.50 € | **168.90 €** | 14.9 % | **5.2 %** | 158.63 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Sada filtrov Freewell pre OSMO NANO – Mega Kit – 12 ks. | 156.90 € | **146.90 €** | 39.2 % | **30.3 %** | 147.00 € | cena podľa najlacnejšieho iného predajcu |
| Uni-T UT663B endoskop | 162.50 € | **153.50 €** | 25.8 % | **18.9 %** | 153.90 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ30 (čierny) | 222.90 € | **214.00 €** | 15.0 % | **10.4 %** | 214.02 € | cena podľa najlacnejšieho iného predajcu |
| Samsung VG-SCFC32WTBXC | 67.50 € | **59.00 €** | 22.0 % | **6.7 %** | 59.13 € | cena podľa najlacnejšieho iného predajcu |
| GameSir T7 Pro – ovládač pre Xbox/PC | 58.50 € | **50.50 €** | 32.8 % | **14.6 %** | — | jediná ponuka; základná prirážka dodávateľa 15 % |
| Herný volant MOZA RACING CS Pro RS093 | 338.90 € | **331.90 €** | 7.3 % | **5.1 %** | 329.00 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Statív tripod 3 Legged Thing PUNKS Travis 2.0, čierny | 221.90 € | **214.90 €** | 18.2 % | **14.4 %** | 215.00 € | cena podľa najlacnejšieho iného predajcu |
| Edifier Open-Ear Comfo Flex white | 53.00 € | **46.50 €** | 29.4 % | **13.5 %** | 46.75 € | cena podľa najlacnejšieho iného predajcu |
| Tefal GV9812E0 | 301.00 € | **295.90 €** | 6.9 % | **5.1 %** | 293.68 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Akčná kamera SJCAM S10 128G (biela) | 235.00 € | **230.50 €** | 15.0 % | **12.8 %** | 230.85 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM S10 128GGB (čierny) | 235.00 € | **230.50 €** | 15.0 % | **12.8 %** | 230.85 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM SJ6 Ultra (čierny) | 112.50 € | **108.50 €** | 15.2 % | **11.1 %** | 108.60 € | cena podľa najlacnejšieho iného predajcu |
| Gorenje OM38GBC | 134.00 € | **130.00 €** | 17.0 % | **13.5 %** | 130.21 € | cena podľa najlacnejšieho iného predajcu |
| Súprava na uchytenie telefónu PGY RetroVa pre iPhone... | 92.00 € | **88.00 €** | 14.8 % | **9.8 %** | 88.40 € | cena podľa najlacnejšieho iného predajcu |
| Súprava držadiel PGY RetroVa pre iPhone 16 Pro | 91.90 € | **88.00 €** | 15.2 % | **10.3 %** | 88.40 € | cena podľa najlacnejšieho iného predajcu |
| GORENJE GV520E10 | 298.90 € | **295.90 €** | 6.1 % | **5.0 %** | 269.10 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Diaľkový ovládač Sunsat S400HDi | 16.50 € | **13.50 €** | 30.7 % | **7.0 %** | 11.70 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Počítačová skriňa Darkflash DS900 (čierna) | 44.00 € | **41.00 €** | 19.7 % | **11.6 %** | 41.29 € | cena podľa najlacnejšieho iného predajcu |
| Blesk GODOX V1 TTL pre Nikon | 214.00 € | **211.00 €** | 9.8 % | **8.2 %** | 211.44 € | cena podľa najlacnejšieho iného predajcu |
| Girmi ST9100 | 36.00 € | **33.50 €** | 14.6 % | **6.6 %** | 33.60 € | cena podľa najlacnejšieho iného predajcu |
| Portable Monitor Arzopa A1T 15,6" | 125.50 € | **123.00 €** | 15.0 % | **12.7 %** | 123.34 € | cena podľa najlacnejšieho iného predajcu |
| Candy CA20FMW7NG Candy Wave 600 | 135.50 € | **133.00 €** | 9.2 % | **7.1 %** | 133.39 € | cena podľa najlacnejšieho iného predajcu |
| Automatické kŕmidlo pre domáce zvieratá - 6 jedál / ... | 65.90 € | **63.50 €** | 23.9 % | **19.4 %** | 63.71 € | cena podľa najlacnejšieho iného predajcu |
| Moza Racing RS062 svorka volantu pre stôl | 57.00 € | **54.90 €** | 22.8 % | **18.3 %** | 55.00 € | cena podľa najlacnejšieho iného predajcu |
| Akčná kamera SJCAM C200 Pro (čierny) | 130.00 € | **128.00 €** | 13.7 % | **12.0 %** | 128.01 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W2 TUYA | 13.00 € | **11.00 €** | 33.1 % | **12.6 %** | 11.10 € | cena podľa najlacnejšieho iného predajcu |
| Blender G21 Perfection Cappuccino | 205.50 € | **203.50 €** | 14.9 % | **13.8 %** | 203.90 € | cena podľa najlacnejšieho iného predajcu |
| Girmi PE2600 | 35.00 € | **33.50 €** | 52.7 % | **46.1 %** | 33.59 € | cena podľa najlacnejšieho iného predajcu |
| Ovládač PXN-P5 8K | 33.50 € | **32.00 €** | 15.4 % | **10.2 %** | 32.36 € | cena podľa najlacnejšieho iného predajcu |
| Čistiaca sada MOVA pre model E40 Ultra | 58.00 € | **56.50 €** | 86.3 % | **81.5 %** | 56.89 € | cena podľa najlacnejšieho iného predajcu |
| Lampa na čítanie Yeelight Pura Reading Desk Lamp | 25.50 € | **24.00 €** | 20.5 % | **13.4 %** | 24.40 € | cena podľa najlacnejšieho iného predajcu |
| Yeelight Pura Monitor Light Bar Pro | 61.00 € | **59.90 €** | 18.8 % | **16.6 %** | 60.00 € | cena podľa najlacnejšieho iného predajcu |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 4.90 € | **3.80 €** | 48.1 % | **14.8 %** | 3.90 € | cena podľa najlacnejšieho iného predajcu |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 12.50 € | **11.50 €** | 17.1 % | **7.7 %** | 11.80 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtový adaptér Carlinkit CP2A | 27.00 € | **26.00 €** | 9.6 % | **5.5 %** | 26.32 € | cena podľa najlacnejšieho iného predajcu |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 32.50 € | **31.50 €** | 13.4 % | **9.9 %** | 31.90 € | cena podľa najlacnejšieho iného predajcu |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 140.00 € | **139.00 €** | 47.1 % | **46.0 %** | 139.50 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (strieborná-fialová +... | 35.90 € | **35.00 €** | 15.1 % | **12.2 %** | 35.25 € | cena podľa najlacnejšieho iného predajcu |
| Inteligentné hodinky COLMI L28 (čierny silikónový + ... | 35.90 € | **35.00 €** | 18.1 % | **15.1 %** | 35.25 € | cena podľa najlacnejšieho iného predajcu |
| BOBOVR C3 Carrying Case for Quest 3 | 47.50 € | **46.90 €** | 36.1 % | **34.4 %** | 46.97 € | cena podľa najlacnejšieho iného predajcu |
| Defender Taška na notebook 15,6", Geek | 14.50 € | **13.90 €** | 11.5 % | **6.9 %** | 13.90 € | cena podľa najlacnejšieho iného predajcu; obmedzené min. prirážkou (floor) |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-WH bílý, n... | 273.50 € | **273.00 €** | 32.1 % | **31.8 %** | 273.09 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-G šedý, no... | 273.50 € | **273.00 €** | 28.9 % | **28.7 %** | 273.09 € | cena podľa najlacnejšieho iného predajcu |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 181.00 € | **180.50 €** | 11.6 % | **11.3 %** | 180.69 € | cena podľa najlacnejšieho iného predajcu |
| Paddleboard SUP REBEL ACTIVE PRO RBA-4518-OR oranžov... | 275.50 € | **275.00 €** | 29.9 % | **29.6 %** | 275.19 € | cena podľa najlacnejšieho iného predajcu |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 181.00 € | **180.50 €** | 25.3 % | **25.0 %** | 180.70 € | cena podľa najlacnejšieho iného predajcu |
| Strong SRT8208 Dvbt přijímač | 26.50 € | **26.00 €** | 12.2 % | **10.1 %** | 26.29 € | cena podľa najlacnejšieho iného predajcu |
| Hoverboard Rebel Cruiser Paint | 168.00 € | **167.50 €** | 33.4 % | **33.0 %** | 167.79 € | cena podľa najlacnejšieho iného predajcu |
| TricutBrush 2.0 – hlavný kefový nástavec pre robotic... | 40.00 € | **39.50 €** | 20.5 % | **19.0 %** | 39.83 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 51.00 € | **50.50 €** | 14.1 % | **13.0 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 51.00 € | **50.50 €** | 37.4 % | **36.0 %** | 50.89 € | cena podľa najlacnejšieho iného predajcu |
| Aligator AUDIO COMBO set 3v1 AUC001 | 29.50 € | **29.00 €** | 8.1 % | **6.3 %** | 29.40 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110GMP 2x GLAN, 8x GLAN s ... | 52.90 € | **52.50 €** | 8.8 % | **8.0 %** | 52.89 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin L Steel | 29.00 € | **28.90 €** | 12.3 % | **11.9 %** | 28.99 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš Curver Chic Bin M Steel | 24.00 € | **23.90 €** | 9.9 % | **9.5 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Odpadkový kôš KIS Chic Bin M Black | 24.00 € | **23.90 €** | 8.7 % | **8.3 %** | 23.99 € | cena podľa najlacnejšieho iného predajcu |
| Switch TP-Link Mercusys MS110CMP 2x GLAN, 8x LAN s P... | 38.00 € | **37.90 €** | 9.1 % | **8.8 %** | 37.99 € | cena podľa najlacnejšieho iného predajcu |
| Planetárium Levenhuk Star Sky P1 | 23.00 € | **22.90 €** | 6.1 % | **5.7 %** | 23.00 € | cena podľa najlacnejšieho iného predajcu |
| Drevený LED vianočný stromček Solight 1V236, 2 × AA | 7.90 € | **7.80 €** | 34.9 % | **33.2 %** | 7.90 € | cena podľa najlacnejšieho iného predajcu |

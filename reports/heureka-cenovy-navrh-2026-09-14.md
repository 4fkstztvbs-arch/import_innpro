# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-14

Vstup: `premiumstore-sk_2026-09-14_07-50.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5128**
- Návrh **zvýšiť** cenu: **32** produktov
- Návrh **znížiť** cenu: **828** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4268** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **338**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (32)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Samsung The Frame Pro QE75LS03HW | 2683.90 € | **2748.90 €** | 10.0 % | **12.7 %** | 2683.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **126.90 €** | 15.0 % | **24.8 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 277.50 € | **280.50 €** | 6.9 % | **8.0 %** | 277.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 52127 Set Clean Twist M Ergo | 41.90 € | **43.90 €** | 10.3 % | **15.6 %** | 41.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 36.90 € | **38.50 €** | 10.5 % | **15.3 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 31.90 € | **33.50 €** | 14.3 % | **20.0 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.50 € | **16.00 €** | 10.2 % | **21.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 112.50 € | **113.90 €** | 10.2 % | **11.6 %** | 112.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.3 % | **16.5 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.90 € | **15.00 €** | 12.0 % | **20.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BC50D2V0 | 16.00 € | **17.00 €** | 10.3 % | **17.2 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 0028 92020 | 67.00 € | **68.00 €** | 10.2 % | **11.8 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.50 €** | 14.6 % | **19.3 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool OMK38HU0B | 248.00 € | **248.90 €** | 5.0 % | **5.4 %** | 248.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **36.90 €** | 14.6 % | **17.5 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **36.90 €** | 15.0 % | **17.8 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.00 € | **33.50 €** | 14.2 % | **15.9 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **557.50 €** | 6.6 % | **6.7 %** | 557.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 30.50 € | **31.00 €** | 10.3 % | **12.1 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.8 % | **8.8 %** | 56.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 17.50 € | **18.00 €** | 7.2 % | **10.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.50 € | **15.00 €** | 6.5 % | **10.2 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **38.00 €** | 10.7 % | **12.1 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 105.00 € | **105.50 €** | 9.6 % | **10.1 %** | 105.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.0 % | **13.8 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.50 € | **12.90 €** | 15.0 % | **18.6 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 16.50 € | **16.90 €** | 22.5 % | **25.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 8-Port Switch (DES-108) | 20.50 € | **20.90 €** | 12.1 % | **14.3 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 334.50 € | **334.90 €** | 7.0 % | **7.1 %** | 334.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 6.6 % | **7.1 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 8.3 % | **9.3 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (828)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| TCL 98C765 QD-MiniLED | 66811.50 € | **63774.90 €** | 10.0 % | **5.0 %** | 61952.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2338.90 €** | 15.0 % | **5.0 %** | 1972.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75QN900F NEO QLED 8K | 4134.90 € | **3946.90 €** | 10.0 % | **5.0 %** | 2308.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality CR-Scan Raptor Pro | 1834.50 € | **1675.50 €** | 15.0 % | **5.0 %** | 800.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 924.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Mini LED UE100M90H | 2374.50 € | **2266.50 €** | 10.0 % | **5.0 %** | 2000.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 256GB Graphite | 2200.50 € | **2100.50 €** | 10.0 % | **5.0 %** | 1355.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 256GB Lavender | 2200.50 € | **2100.50 €** | 10.0 % | **5.0 %** | 1355.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1441.90 € | **1346.50 €** | 15.0 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| Veslařský trenažér HMS Premium ZW1600 | 762.90 € | **671.90 €** | 137732.0 % | **121291.1 %** | 672.00 € | stávame sa najlacnejší |
| MSI Cyborg 9S7-15QL42-080 | 1861.50 € | **1776.50 €** | 10.0 % | **5.0 %** | 1448.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality CR-Scan Raptor 3D Scanner | 950.00 € | **867.50 €** | 15.0 % | **5.0 %** | 800.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI Katana 17 HX (B14WGK-282CZ) | 1637.90 € | **1563.50 €** | 10.0 % | **5.0 %** | 1267.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI Katana 17 HX (B14WEK-267CZ) | 1546.50 € | **1476.50 €** | 10.0 % | **5.0 %** | 1099.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE55S99H | 2236.50 € | **2168.50 €** | 10.0 % | **6.7 %** | 2168.89 € | stávame sa najlacnejší |
| Apple iPhone 17 Pro Max 256GB Deep Blue | 1450.90 € | **1384.90 €** | 10.0 % | **5.0 %** | 1215.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro 256GB Cosmic Orange | 1360.50 € | **1298.50 €** | 10.0 % | **5.0 %** | 1099.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Saeco Aurora B2 | 1238.50 € | **1182.00 €** | 10.0 % | **5.0 %** | 999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Photon P1 | 639.00 € | **583.50 €** | 15.0 % | **5.0 %** | 553.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 355.50 € | **303.50 €** | 72156.1 % | **61587.0 %** | 303.75 € | stávame sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 508.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K1 Max 2025 | 561.90 € | **512.90 €** | 15.0 % | **5.0 %** | 427.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LaserPecker LX2 40W laserový gravír | 1879.50 € | **1830.50 €** | 15.0 % | **12.0 %** | 1830.67 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 22 GEN 3 (GS2203) | 542.90 € | **495.90 €** | 15.0 % | **5.1 %** | 406.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový masážny prístroj/regeneračná obuv s techn... | 542.90 € | **495.90 €** | 15.0 % | **5.1 %** | 424.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 612.50 € | **566.00 €** | 15.0 % | **6.3 %** | 566.36 € | stávame sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 416.00 € | **369.90 €** | 75058.1 % | **66729.3 %** | 370.00 € | stávame sa najlacnejší |
| 3D tlačiareň ANYCUBIC Kobra S1 ACE 2 Pro Combo | 510.50 € | **466.50 €** | 15.0 % | **5.1 %** | 463.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **461.50 €** | 15.0 % | **5.1 %** | 421.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 460.00 € | **417.50 €** | 24.3 % | **12.8 %** | 417.60 € | stávame sa najlacnejší |
| Volant MOZA RACING pre Lamborghini Revuelto | 431.00 € | **393.50 €** | 15.0 % | **5.0 %** | 369.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **392.50 €** | 14.9 % | **5.0 %** | 265.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Luminiscenčná letová mapa DJI RoboMaster TT | 837.90 € | **801.00 €** | 15.0 % | **9.9 %** | 801.31 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 428.00 € | **391.50 €** | 14.9 % | **5.1 %** | 358.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor JMGO PicoPlay+ | 413.00 € | **378.90 €** | 14.9 % | **5.5 %** | 379.00 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Pro | 506.00 € | **472.00 €** | 15.0 % | **7.2 %** | 472.18 € | stávame sa najlacnejší |
| Xiaomi Pad 8 Pro 12/512GB Green (72207) | 742.50 € | **708.90 €** | 10.0 % | **5.0 %** | 607.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **445.00 €** | 15.0 % | **7.1 %** | 445.21 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 713.90 € | **681.50 €** | 10.0 % | **5.0 %** | 659.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Karta pamäte Lexar High-Performance Silver Plus micr... | 367.90 € | **335.90 €** | 15.0 % | **5.0 %** | 289.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 358.50 € | **327.50 €** | 15.1 % | **5.1 %** | 271.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARRETT AT Max 8,5 x 11" INTL – detektor kovov | 760.00 € | **729.90 €** | 15.0 % | **10.4 %** | 730.00 € | stávame sa najlacnejší |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 341.00 € | **311.50 €** | 14.9 % | **5.0 %** | 271.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EWN7F447WI | 637.90 € | **608.90 €** | 10.0 % | **5.0 %** | 533.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **309.50 €** | 15.0 % | **5.1 %** | 293.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3BCNA324HS | 631.50 € | **602.50 €** | 10.1 % | **5.0 %** | 586.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 313.90 € | **284.90 €** | 26.3 % | **14.7 %** | 284.96 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **305.50 €** | 14.9 % | **5.1 %** | 280.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Pro 8/256GB (ZAHD0072CZ) | 603.90 € | **576.50 €** | 10.0 % | **5.0 %** | 523.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple AirPods Max 2 - Midnight | 578.50 € | **552.00 €** | 10.0 % | **5.0 %** | 490.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Ultima Nova C40 | 301.00 € | **274.90 €** | 15.0 % | **5.0 %** | 267.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **506.90 €** | 15.0 % | **9.4 %** | 506.96 € | stávame sa najlacnejší |
| Lenovo Idea Tab Pro 8/128GB (ZAHD0017CZ) | 563.00 € | **537.50 €** | 10.0 % | **5.0 %** | 502.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 557.90 € | **532.50 €** | 10.1 % | **5.1 %** | 449.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **346.90 €** | 15.1 % | **7.3 %** | 347.00 € | stávame sa najlacnejší |
| iiyama ProLite XCB4594DQSU-B1 | 538.50 € | **513.90 €** | 10.0 % | **5.0 %** | 495.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620AAXL4 | 640.50 € | **616.50 €** | 10.1 % | **5.9 %** | 616.80 € | stávame sa najlacnejší |
| Lenovo Yoga Tab 12/256GB (ZAG60160CZ) | 525.90 € | **502.00 €** | 10.0 % | **5.0 %** | 479.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 278.00 € | **254.50 €** | 14.9 % | **5.2 %** | 250.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple AirPods Max Midnight (2024) | 511.50 € | **488.50 €** | 10.0 % | **5.1 %** | 393.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM2000 | 686.50 € | **663.50 €** | 15.0 % | **11.1 %** | 663.78 € | stávame sa najlacnejší |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 524.00 € | **501.00 €** | 14.9 % | **9.9 %** | 501.36 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 490.00 € | **467.90 €** | 10.0 % | **5.0 %** | 439.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Tab Plus 8/256GB (ZAHT0126CZ) | 489.50 € | **467.50 €** | 10.0 % | **5.1 %** | 414.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AW | 478.50 € | **456.50 €** | 10.1 % | **5.0 %** | 427.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Systém riadenia vlákien Creality CFS | 252.50 € | **230.90 €** | 15.0 % | **5.1 %** | 209.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartring RingConn Gen 2 (veľkosť 7, zlatá) | 253.50 € | **231.90 €** | 14.9 % | **5.2 %** | 230.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI4S8CM1SEA | 465.50 € | **444.00 €** | 10.1 % | **5.0 %** | 415.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFS26046XQ | 473.50 € | **452.00 €** | 10.0 % | **5.0 %** | 424.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AURZEN Boom Mini projektor | 250.50 € | **229.00 €** | 15.0 % | **5.2 %** | 229.10 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 305.50 € | **284.00 €** | 15.1 % | **7.0 %** | 284.20 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 474.50 € | **453.00 €** | 10.0 % | **5.0 %** | 453.36 € | stávame sa najlacnejší |
| Electrolux LBD4Z | 476.90 € | **455.50 €** | 10.0 % | **5.1 %** | 422.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 363A | 601.50 € | **580.50 €** | 10.1 % | **6.2 %** | 580.73 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 496.90 € | **476.00 €** | 10.1 % | **5.5 %** | 476.10 € | stávame sa najlacnejší |
| Lenovo Tab Plus 8/128GB (ZAHT0170CZ) | 448.90 € | **428.50 €** | 10.1 % | **5.1 %** | 375.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Pro 8/12GB (ZAHD0103CZ) | 448.90 € | **428.50 €** | 10.1 % | **5.1 %** | 397.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 9N2BR-S | 434.90 € | **414.90 €** | 10.1 % | **5.0 %** | 404.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540XP | 461.90 € | **441.90 €** | 10.1 % | **5.3 %** | 442.00 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (čierny) | 295.50 € | **275.50 €** | 15.1 % | **7.3 %** | 275.70 € | stávame sa najlacnejší |
| Candy GD 10N3B-S | 468.90 € | **449.00 €** | 10.1 % | **5.4 %** | 449.10 € | stávame sa najlacnejší |
| Projektor BlitzWolf BW-V11 | 344.90 € | **325.50 €** | 15.0 % | **8.6 %** | 325.83 € | stávame sa najlacnejší |
| Whirlpool WHVS 61F LT DP K | 421.00 € | **401.90 €** | 10.0 % | **5.0 %** | 296.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3RCNA375HXB | 404.50 € | **385.90 €** | 10.1 % | **5.0 %** | 369.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 103.00 € | **84.90 €** | 27.7 % | **5.3 %** | 72.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE N619EAW4 | 392.90 € | **374.90 €** | 10.1 % | **5.1 %** | 365.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **191.50 €** | 15.0 % | **5.1 %** | 188.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 188.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A6 bílá | 483.50 € | **465.50 €** | 10.1 % | **6.0 %** | 465.82 € | stávame sa najlacnejší |
| BEKO HII64500UFT | 374.90 € | **357.90 €** | 10.1 % | **5.1 %** | 327.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 161.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **176.00 €** | 15.1 % | **5.0 %** | 154.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 137.90 € | **121.00 €** | 27244.8 % | **23893.7 %** | 121.03 € | stávame sa najlacnejší |
| AMICA TR 110 TW | 362.50 € | **345.90 €** | 10.1 % | **5.1 %** | 287.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 596.50 € | **580.50 €** | 7.9 % | **5.1 %** | 530.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 309.50 € | **293.50 €** | 10.8 % | **5.1 %** | 279.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BOS6737E20FBG | 357.50 € | **341.50 €** | 10.1 % | **5.1 %** | 335.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70118CZ | 341.50 € | **325.90 €** | 10.0 % | **5.0 %** | 268.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70373CZ | 342.50 € | **326.90 €** | 10.0 % | **5.0 %** | 284.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BR 26SSB6G-S | 347.50 € | **332.00 €** | 10.1 % | **5.2 %** | 332.10 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 413.50 € | **398.00 €** | 10.1 % | **6.0 %** | 398.49 € | stávame sa najlacnejší |
| Simulačná súprava Moza Racing R5 Pro | 434.00 € | **418.90 €** | 15.0 % | **11.0 %** | 419.00 € | stávame sa najlacnejší |
| Candy GD 49B8G-S | 331.90 € | **316.90 €** | 10.0 % | **5.1 %** | 309.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **229.50 €** | 15.1 % | **8.0 %** | 229.69 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 333.50 € | **318.90 €** | 10.0 % | **5.2 %** | 319.00 € | stávame sa najlacnejší |
| Slúchadlá VIAIM Nano+ AI s hlasovým záznamníkom (zel... | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 104.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 48SB8C-S | 312.50 € | **298.50 €** | 10.1 % | **5.1 %** | 263.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta GZ5436E0 | 299.90 € | **285.90 €** | 10.1 % | **5.0 %** | 255.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 168.50 € | **154.50 €** | 14.9 % | **5.3 %** | 152.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38646D | 509.90 € | **495.90 €** | 10.0 % | **7.0 %** | 496.00 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra X Combo | 553.50 € | **539.90 €** | 15.0 % | **12.2 %** | 540.00 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 261.00 € | **247.50 €** | 14.9 % | **9.0 %** | 247.66 € | stávame sa najlacnejší |
| Candy GD 49B8-S | 292.90 € | **279.50 €** | 10.1 % | **5.0 %** | 260.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LXB1SE11W0 | 273.50 € | **260.90 €** | 10.2 % | **5.1 %** | 243.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CA modul IRDETO SMIT PROFI 2 | 146.00 € | **133.50 €** | 15.2 % | **5.3 %** | 123.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 272.00 € | **259.90 €** | 10.0 % | **5.1 %** | 259.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6342XOK | 266.50 € | **254.50 €** | 10.1 % | **5.2 %** | 195.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 325 | 263.50 € | **251.50 €** | 10.2 % | **5.1 %** | 229.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 134.00 € | **122.00 €** | 24.8 % | **13.6 %** | 122.09 € | stávame sa najlacnejší |
| Uperfect UPi B7 10.1" 1920x1200 60Hz Portable Monitor | 150.00 € | **138.00 €** | 15.0 % | **5.8 %** | 138.12 € | stávame sa najlacnejší |
| Beko BMTD37146W | 396.50 € | **384.90 €** | 10.1 % | **6.9 %** | 385.00 € | stávame sa najlacnejší |
| Redmi Pad 2 4/256GB zelená (79232) | 262.00 € | **250.50 €** | 10.0 % | **5.2 %** | 185.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 137.50 € | **126.00 €** | 15.0 % | **5.4 %** | 126.41 € | stávame sa najlacnejší |
| Aligator Blackview BV7300 Black | 252.90 € | **241.50 €** | 10.1 % | **5.2 %** | 200.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator Blackview BV7300 Yellow | 252.90 € | **241.50 €** | 10.1 % | **5.2 %** | 200.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 EFC226R | 253.90 € | **242.50 €** | 10.1 % | **5.1 %** | 236.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO91124 volně stojící chladnička s | 234.50 € | **223.90 €** | 10.1 % | **5.1 %** | 219.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **216.00 €** | 15.0 % | **9.7 %** | 216.27 € | stávame sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.00 € | **135.50 €** | 15.3 % | **7.0 %** | 135.90 € | stávame sa najlacnejší |
| Concept IDV5160wh | 364.50 € | **354.00 €** | 10.1 % | **6.9 %** | 354.40 € | stávame sa najlacnejší |
| Samsung The Frame QE43LS03H | 791.50 € | **781.00 €** | 10.0 % | **8.6 %** | 781.47 € | stávame sa najlacnejší |
| Guzzanti GZ 70G | 230.90 € | **220.50 €** | 10.1 % | **5.2 %** | 211.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Sensazione černý | 344.90 € | **334.50 €** | 10.1 % | **6.8 %** | 334.90 € | stávame sa najlacnejší |
| Lenovo Idea Tab 4/128GB (ZAFR0358CZ) | 220.00 € | **210.00 €** | 10.0 % | **5.0 %** | 179.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 13Wr Flex (UMM220V30) | 216.50 € | **206.50 €** | 10.2 % | **5.1 %** | 187.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Magic X-treme 7235 90000 černý/modrý | 339.50 € | **329.50 €** | 10.1 % | **6.8 %** | 329.60 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.15 € | stávame sa najlacnejší |
| Whirlpool W7F HP33 A | 348.50 € | **338.50 €** | 10.1 % | **7.0 %** | 338.78 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **212.50 €** | 15.0 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 345.50 € | **335.50 €** | 10.1 % | **6.9 %** | 335.90 € | stávame sa najlacnejší |
| Electrolux EHF6547FXK | 225.90 € | **216.00 €** | 10.2 % | **5.4 %** | 216.23 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 351.90 € | **342.00 €** | 10.1 % | **7.0 %** | 342.20 € | stávame sa najlacnejší |
| Beko VRT96425VD | 262.50 € | **253.00 €** | 10.1 % | **6.1 %** | 253.18 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1390.90 € | **1381.50 €** | 10.0 % | **9.3 %** | 1381.89 € | stávame sa najlacnejší |
| Electrolux EUOC94DB | 212.90 € | **203.50 €** | 10.1 % | **5.2 %** | 166.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 425.90 € | **416.50 €** | 10.0 % | **7.6 %** | 416.62 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 333.90 € | **324.50 €** | 10.0 % | **6.9 %** | 324.84 € | stávame sa najlacnejší |
| Pioneer GM-A6704 zesilovač | 198.50 € | **189.50 €** | 10.1 % | **5.1 %** | 139.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 204.50 € | **195.50 €** | 10.1 % | **5.3 %** | 167.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 28 | 193.50 € | **184.50 €** | 10.3 % | **5.2 %** | 160.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 83.50 € | **74.50 €** | 18.4 % | **5.6 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **99.50 €** | 14.9 % | **5.4 %** | 98.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 204.50 € | **195.50 €** | 14.9 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **267.00 €** | 15.0 % | **11.2 %** | 267.49 € | stávame sa najlacnejší |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 507.50 € | **498.90 €** | 10.0 % | **8.2 %** | 499.00 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 184.50 € | **175.90 €** | 10.1 % | **5.0 %** | 159.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 9.7 4/128GB Gray (76907) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 183.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HIF-8892 EBT Multimediální HI-F | 191.50 € | **182.90 €** | 10.1 % | **5.1 %** | 182.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 75.50 € | **66.90 €** | 18.8 % | **5.3 %** | 67.00 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 146.50 € | **138.00 €** | 11.5 % | **5.1 %** | 127.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator Hotwav T7 PRO Black | 197.00 € | **188.50 €** | 10.0 % | **5.3 %** | 187.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **169.50 €** | 15.0 % | **9.5 %** | 169.90 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 498.00 € | **489.90 €** | 6.8 % | **5.1 %** | 462.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 2-pack) | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 152.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-270B Gramofon hnědý | 177.50 € | **169.50 €** | 10.1 % | **5.2 %** | 153.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWF 420 BL | 176.50 € | **168.50 €** | 10.0 % | **5.0 %** | 156.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **87.50 €** | 14.9 % | **5.3 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **86.90 €** | 15.2 % | **5.5 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 145.00 € | **137.00 €** | 24.8 % | **18.0 %** | 137.11 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.90 € | **165.00 €** | 10.1 % | **5.1 %** | 151.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava umývacej a kondicionovacej stanice ELEGOO Me... | 127.90 € | **120.00 €** | 15.1 % | **8.0 %** | 120.48 € | stávame sa najlacnejší |
| TESLA AirCook DualZone Q787 XXL Deluxe | 166.50 € | **158.90 €** | 10.2 % | **5.2 %** | 145.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 29.00 € | **21.50 €** | 44.5 % | **7.1 %** | 20.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 175.50 € | **168.00 €** | 19.4 % | **14.3 %** | 168.24 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 20 W | 1124.50 € | **1117.00 €** | 15.0 % | **14.3 %** | 1117.25 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **85.00 €** | 15.1 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **85.00 €** | 15.1 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Niceboy Hurricane H7 Plus | 163.90 € | **156.50 €** | 10.1 % | **5.1 %** | 129.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 284.90 € | **277.50 €** | 15.0 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 119.00 € | **111.90 €** | 11.8 % | **5.1 %** | 100.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.00 € | **80.90 €** | 14.7 % | **5.4 %** | 78.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 167.00 € | **159.90 €** | 11.0 % | **6.3 %** | 159.95 € | stávame sa najlacnejší |
| GUZZANTI GZ 44GW | 206.00 € | **198.90 €** | 10.0 % | **6.2 %** | 198.96 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 258.50 € | **251.50 €** | 8.0 % | **5.1 %** | 239.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **77.50 €** | 15.2 % | **5.6 %** | 70.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L1630W | 158.90 € | **151.90 €** | 10.0 % | **5.2 %** | 148.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 10002 | 148.50 € | **141.50 €** | 10.3 % | **5.1 %** | 138.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S60... | 82.50 € | **75.50 €** | 14.8 % | **5.1 %** | 72.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 80.50 € | **73.50 €** | 15.2 % | **5.2 %** | 71.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 11000 | 160.50 € | **153.50 €** | 10.1 % | **5.3 %** | 152.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CH 64 XB | 159.50 € | **152.50 €** | 10.1 % | **5.2 %** | 151.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI G32C4X | 152.90 € | **145.90 €** | 10.1 % | **5.1 %** | 145.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 536.90 € | **529.90 €** | 8.0 % | **6.6 %** | 529.95 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (biely) | 189.50 € | **182.50 €** | 15.1 % | **10.8 %** | 182.63 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **81.50 €** | 14.9 % | **5.8 %** | 81.77 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **81.50 €** | 14.9 % | **5.8 %** | 81.77 € | stávame sa najlacnejší |
| Strong SRT24HG4723C | 145.90 € | **139.00 €** | 10.2 % | **5.0 %** | 138.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT  Regulus PowerVac 2in1 11925 | 144.50 € | **137.90 €** | 10.0 % | **5.0 %** | 124.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač DO TechniSat TechniControl | 25.00 € | **18.50 €** | 42.5 % | **5.5 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar Professional 800x Pro SDXC 256GD | 81.00 € | **74.50 €** | 14.7 % | **5.5 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 33.50 € | **27.00 €** | 36.0 % | **9.6 %** | 27.09 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 125.00 € | **118.50 €** | 20.3 % | **14.1 %** | 118.89 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 318.50 € | **312.00 €** | 10.1 % | **7.9 %** | 312.40 € | stávame sa najlacnejší |
| TP-LINK WiFi AX1500 (Deco X10 3-pack) | 144.90 € | **138.50 €** | 10.1 % | **5.2 %** | 98.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creative Zen Hybrid Pro Classic | 144.90 € | **138.50 €** | 10.0 % | **5.1 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT24HE4023C | 139.90 € | **133.50 €** | 10.1 % | **5.1 %** | 120.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO6164EA | 144.90 € | **138.50 €** | 10.2 % | **5.4 %** | 134.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 83.90 € | **77.50 €** | 13.8 % | **5.1 %** | 74.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.90 € | **64.50 €** | 16.6 % | **6.1 %** | 64.69 € | stávame sa najlacnejší |
| Gorenje GEC5C41SG | 319.90 € | **313.50 €** | 10.1 % | **7.9 %** | 313.90 € | stávame sa najlacnejší |
| Baterie olověná 12V / 45 Ah MHPower 6-DMF-45 GEL Tra... | 112.50 € | **106.50 €** | 11.0 % | **5.1 %** | 89.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko FRL5388B | 134.90 € | **128.90 €** | 10.2 % | **5.3 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 53.50 € | **47.50 €** | 18.5 % | **5.2 %** | 44.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 70.50 € | **64.50 €** | 14.8 % | **5.0 %** | 62.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 99.50 € | **93.50 €** | 25.1 % | **17.5 %** | 93.61 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 69.00 € | **63.00 €** | 25.0 % | **14.1 %** | 63.19 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 285.50 € | **279.50 €** | 10.0 % | **7.7 %** | 279.80 € | stávame sa najlacnejší |
| Tefal EY8328E0 | 124.50 € | **118.50 €** | 10.4 % | **5.1 %** | 118.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.90 € | **229.00 €** | 10.0 % | **7.2 %** | 229.13 € | stávame sa najlacnejší |
| Candy GD 17SSB7-S | 308.90 € | **303.00 €** | 10.1 % | **8.0 %** | 303.21 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 299.90 € | **294.00 €** | 10.1 % | **8.0 %** | 294.30 € | stávame sa najlacnejší |
| Guzzanti GZ 460 | 120.50 € | **114.90 €** | 10.4 % | **5.3 %** | 101.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1 | 127.50 € | **121.90 €** | 10.2 % | **5.3 %** | 116.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 8401SE | 128.50 € | **122.90 €** | 10.1 % | **5.3 %** | 120.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 125.50 € | **120.00 €** | 14.9 % | **9.9 %** | 120.01 € | stávame sa najlacnejší |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 120.50 € | **115.00 €** | 23.4 % | **17.8 %** | 115.10 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UGame C2 16" 2560x1600 120Hz | 169.50 € | **164.00 €** | 15.1 % | **11.4 %** | 164.31 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 210.50 € | **205.00 €** | 10.2 % | **7.3 %** | 205.39 € | stávame sa najlacnejší |
| Roborock Q7 BF Black | 188.50 € | **183.00 €** | 10.2 % | **7.0 %** | 183.39 € | stávame sa najlacnejší |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 75.00 € | **69.50 €** | 14.8 % | **6.4 %** | 69.90 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v striebornej ... | 67.50 € | **62.00 €** | 14.8 % | **5.4 %** | 62.49 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.85 € | stávame sa najlacnejší |
| Samsung VG-SCFC55SGMXC | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 118.90 € | stávame sa najlacnejší |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 196.90 € | **191.50 €** | 15.1 % | **11.9 %** | 191.90 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash C280 (čierna) + 7 ventil... | 62.90 € | **57.50 €** | 15.1 % | **5.2 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 58.00 € | **52.90 €** | 16.7 % | **6.4 %** | 52.99 € | stávame sa najlacnejší |
| Remoska P32F/01 4l Prima Glass | 111.50 € | **106.50 €** | 10.4 % | **5.4 %** | 91.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 440 | 107.50 € | **102.50 €** | 10.2 % | **5.0 %** | 91.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK812110 | 109.90 € | **104.90 €** | 10.2 % | **5.2 %** | 104.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo rádio DAB+ internet rádio - DT06 | 105.50 € | **100.50 €** | 10.4 % | **5.2 %** | 100.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Midland BTR1 Advanced, Single | 192.90 € | **187.90 €** | 10.1 % | **7.2 %** | 188.00 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 117.50 € | **112.50 €** | 15.2 % | **10.3 %** | 112.75 € | stávame sa najlacnejší |
| YAMAHA True X Bar 50A / SR-X50A BLACK | 713.00 € | **708.00 €** | 10.0 % | **9.2 %** | 708.38 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.90 € | **239.00 €** | 10.0 % | **7.8 %** | 239.20 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 251.90 € | **247.00 €** | 10.1 % | **7.9 %** | 247.30 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 52.90 € | **48.00 €** | 25.3 % | **13.7 %** | 48.19 € | stávame sa najlacnejší |
| DOMO DO9252I | 257.90 € | **253.00 €** | 10.0 % | **7.9 %** | 253.20 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 41.50 € | **36.90 €** | 19.3 % | **6.1 %** | 36.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CMWA23TNDB | 97.50 € | **92.90 €** | 10.3 % | **5.1 %** | 89.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 3601 | 101.50 € | **96.90 €** | 10.0 % | **5.0 %** | 95.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer BE3600 WiFi 7 Router | 95.50 € | **91.00 €** | 10.2 % | **5.0 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla SlowCook S900 Plus | 92.50 € | **88.00 €** | 10.5 % | **5.1 %** | 77.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 24440-56 | 109.00 € | **104.50 €** | 10.0 % | **5.5 %** | 99.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GOOLOO GP3000 59,2 Wh štartér | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 48.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 54.00 € | **49.50 €** | 19.7 % | **9.7 %** | 49.57 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 99.00 € | **94.50 €** | 14.7 % | **9.5 %** | 94.59 € | stávame sa najlacnejší |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 18.50 € | **14.00 €** | 46.0 % | **10.5 %** | 14.29 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 170.90 € | **166.50 €** | 8.1 % | **5.3 %** | 144.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Linomatic 400 Easy 85285 | 98.90 € | **94.50 €** | 10.2 % | **5.3 %** | 78.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun CG9043 | 219.90 € | **215.50 €** | 10.1 % | **7.9 %** | 215.60 € | stávame sa najlacnejší |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 160.90 € | **156.50 €** | 15.1 % | **12.0 %** | 156.76 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.90 € | **122.50 €** | 10.2 % | **6.4 %** | 122.88 € | stávame sa najlacnejší |
| Schodíky pre Catlink BayMax Litter Box | 51.90 € | **47.50 €** | 15.1 % | **5.4 %** | 42.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Výrobok X.A.3 | 53.90 € | **49.50 €** | 15.0 % | **5.6 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus AS2 mini electric pump | 48.00 € | **43.90 €** | 15.0 % | **5.2 %** | 41.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HDCG 32220 FX | 97.00 € | **92.90 €** | 10.0 % | **5.4 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-102 Skylink Viaccess Orca bezkartový systém | 115.00 € | **110.90 €** | 9.2 % | **5.3 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator R60 eXtremo Black Orange | 89.00 € | **84.90 €** | 10.1 % | **5.0 %** | 83.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator R60 eXtremo Green | 89.00 € | **84.90 €** | 10.1 % | **5.0 %** | 83.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator R60 eXtremo Orange | 89.00 € | **84.90 €** | 10.1 % | **5.0 %** | 83.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS6550i White | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 50.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vu+ DUO 4K Lite (1xDVB-S2X FBC Twin tuner) | 376.50 € | **372.50 €** | 6.1 % | **5.0 %** | 349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| INVERTO Premium - Quad IDLP-QDL413 -  0,2 dB - s fil... | 29.50 € | **25.50 €** | 23.9 % | **7.1 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amiko Mini HD265 WiFi | 56.50 € | **52.50 €** | 13.4 % | **5.4 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RO 3923 EA | 79.50 € | **75.50 €** | 10.6 % | **5.1 %** | 66.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER HL-1110E | 92.90 € | **88.90 €** | 10.2 % | **5.5 %** | 81.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 10T LTE | 94.90 € | **90.90 €** | 10.0 % | **5.4 %** | 84.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkční balanční podložka HMS BSX02 | 133.00 € | **129.00 €** | 8.3 % | **5.1 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO Mini HD265 | 49.90 € | **45.90 €** | 14.7 % | **5.5 %** | 42.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 81.50 € | **77.50 €** | 10.5 % | **5.1 %** | 76.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Stormy Home 0517 90000 | 79.50 € | **75.50 €** | 10.7 % | **5.1 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IB5100E0 | 93.90 € | **89.90 €** | 10.0 % | **5.4 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 102.00 € | **98.00 €** | 14.9 % | **10.4 %** | 98.03 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 89.00 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **82.50 €** | 15.2 % | **9.8 %** | 82.63 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 35.00 € | **31.00 €** | 19.1 % | **5.5 %** | 31.19 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.00 € | **48.00 €** | 15.3 % | **6.4 %** | 48.19 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 310.50 € | **306.50 €** | 10.0 % | **8.6 %** | 306.69 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 310.50 € | **306.50 €** | 10.0 % | **8.6 %** | 306.69 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 81.50 € | **77.50 €** | 10.5 % | **5.1 %** | 77.69 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 89.00 € | **85.00 €** | 20.3 % | **14.9 %** | 85.29 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 179.50 € | **175.50 €** | 10.0 % | **7.6 %** | 175.80 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **43.00 €** | 15.1 % | **5.3 %** | 43.46 € | stávame sa najlacnejší |
| Projektor AURZEN Boom Mini Black | 232.90 € | **229.00 €** | 15.1 % | **13.1 %** | 229.10 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.90 € | **129.00 €** | 10.3 % | **7.1 %** | 129.50 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.90 € | **38.00 €** | 18.2 % | **7.2 %** | 38.09 € | stávame sa najlacnejší |
| Anténní zesilovač Evercon AH-707 | 57.90 € | **54.00 €** | 27.1 % | **18.5 %** | 54.49 € | stávame sa najlacnejší |
| Gorenje MO 20 A3B | 76.50 € | **72.90 €** | 10.5 % | **5.3 %** | 65.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla AeroStar T700 | 82.50 € | **78.90 €** | 10.2 % | **5.4 %** | 74.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Mijia Smart Humidifier Pro | 80.50 € | **76.90 €** | 10.0 % | **5.1 %** | 74.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI7160BL | 78.50 € | **74.90 €** | 10.3 % | **5.3 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 182.50 € | **178.90 €** | 7.9 % | **5.7 %** | 179.00 € | stávame sa najlacnejší |
| EcoFlow DELTA 3 Max nabíjecí stanice 1ECO2040 | 1361.00 € | **1357.50 €** | 5.3 % | **5.0 %** | 1198.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica LAI KJ2000W | 80.00 € | **76.50 €** | 10.0 % | **5.2 %** | 50.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TR4755i Black | 80.00 € | **76.50 €** | 10.1 % | **5.2 %** | 57.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 75.00 € | **71.50 €** | 10.5 % | **5.4 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 29.00 € | **25.50 €** | 21.8 % | **7.1 %** | 23.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 20.00 € | **16.50 €** | 27.3 % | **5.0 %** | 16.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 70.00 € | **66.50 €** | 23.6 % | **17.4 %** | 66.55 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 376.00 € | **372.50 €** | 10.9 % | **9.8 %** | 372.57 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 102.00 € | **98.50 €** | 10.0 % | **6.3 %** | 98.65 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **83.50 €** | 14.8 % | **10.2 %** | 83.65 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 81.00 € | **77.50 €** | 23.8 % | **18.5 %** | 77.69 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 29.50 € | **26.00 €** | 22.2 % | **7.7 %** | 26.29 € | stávame sa najlacnejší |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 50.50 € | **47.00 €** | 24.8 % | **16.1 %** | 47.33 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 79.90 € | **76.50 €** | 10.1 % | **5.4 %** | 65.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator A930 GPS Senior Black | 80.90 € | **77.50 €** | 10.1 % | **5.4 %** | 75.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ANMITE A185W03 18,5" prenosný monitor | 134.90 € | **131.50 €** | 15.0 % | **12.1 %** | 131.73 € | stávame sa najlacnejší |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 40.90 € | **37.50 €** | 15.3 % | **5.7 %** | 32.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 28.90 € | **25.50 €** | 25.0 % | **10.3 %** | 25.69 € | stávame sa najlacnejší |
| Grafický tablet Huion H640P | 39.00 € | **35.90 €** | 14.3 % | **5.3 %** | 34.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 7-Port Gigabit Switch (DMS-107/E) | 75.00 € | **71.90 €** | 10.1 % | **5.5 %** | 56.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Balanční míč HMS Premium BSX Pro | 102.90 € | **99.90 €** | 8.4 % | **5.2 %** | 85.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla SlowCook S800 Deluxe | 67.50 € | **64.50 €** | 10.6 % | **5.6 %** | 53.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6872 | 67.00 € | **64.00 €** | 10.1 % | **5.1 %** | 61.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator T100 Black | 68.90 € | **65.90 €** | 10.3 % | **5.5 %** | 64.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meross MOP320MA-EU WiFi inteligentná napájacia lišta... | 34.50 € | **31.50 €** | 15.8 % | **5.7 %** | 29.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 77.50 € | **74.50 €** | 9.6 % | **5.4 %** | 73.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-NEVE 4K UHD Streaming Dongle | 68.50 € | **65.50 €** | 10.3 % | **5.4 %** | 65.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **32.90 €** | 15.0 % | **5.4 %** | 32.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **33.50 €** | 15.2 % | **5.8 %** | 33.54 € | stávame sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 62.50 € | **59.50 €** | 10.5 % | **5.2 %** | 59.59 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 251.90 € | **248.90 €** | 10.2 % | **8.8 %** | 249.00 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 210.50 € | **207.50 €** | 10.0 % | **8.4 %** | 207.60 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 67.50 € | **64.50 €** | 15.4 % | **10.3 %** | 64.76 € | stávame sa najlacnejší |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 223.00 € | **220.00 €** | 15.0 % | **13.4 %** | 220.42 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 152.90 € | **150.00 €** | 10.0 % | **8.0 %** | 150.30 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 92.90 € | **90.00 €** | 15.0 % | **11.4 %** | 90.38 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 178.90 € | **176.00 €** | 10.1 % | **8.4 %** | 176.40 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **36.00 €** | 14.9 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3750i Black | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 33.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C80 WiFi Router | 50.50 € | **47.90 €** | 11.1 % | **5.3 %** | 37.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MultiCook RC400 Low Carb | 64.50 € | **61.90 €** | 10.1 % | **5.7 %** | 53.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente ProVacs | 59.50 € | **56.90 €** | 10.0 % | **5.2 %** | 49.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový ovládač 4-kan. k pohonu brán IN SL-600, 100... | 28.50 € | **25.90 €** | 16.6 % | **5.9 %** | 19.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXSH2002E | 57.50 € | **54.90 €** | 10.2 % | **5.2 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo čierne) | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 26.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor elektromagnetického žiarenia FNIRSI ERD-10 | 32.50 € | **29.90 €** | 14.6 % | **5.4 %** | 29.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 18.50 € | **15.90 €** | 23.4 % | **6.0 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.50 € | **128.90 €** | 10.1 % | **7.9 %** | 129.00 € | stávame sa najlacnejší |
| Beko VRT76325VW | 169.50 € | **166.90 €** | 10.3 % | **8.6 %** | 167.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA MG2551S Grey | 56.00 € | **53.50 €** | 10.1 % | **5.2 %** | 36.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 135 | 60.00 € | **57.50 €** | 10.2 % | **5.6 %** | 46.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 135A Black Laser Toner, W1350A | 57.00 € | **54.50 €** | 10.2 % | **5.3 %** | 45.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR TWIN - Black/Silver | 53.50 € | **51.00 €** | 10.2 % | **5.0 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný termostat Avatto ZWT100 3A Zigbee Tuya | 33.00 € | **30.50 €** | 14.3 % | **5.7 %** | 26.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 26.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny anemometer FNIRSI FAM-02 | 26.50 € | **24.00 €** | 16.0 % | **5.1 %** | 23.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EB61C4DB | 150.50 € | **148.00 €** | 10.1 % | **8.3 %** | 148.05 € | stávame sa najlacnejší |
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 48.50 € | **46.00 €** | 23.2 % | **16.9 %** | 46.07 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 37.50 € | **35.00 €** | 15.6 % | **7.9 %** | 35.09 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 16.50 € | **14.00 €** | 25.3 % | **6.3 %** | 14.19 € | stávame sa najlacnejší |
| Herní mikrofon Maono DM30RGB (černý) | 40.50 € | **38.00 €** | 14.8 % | **7.8 %** | 38.23 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **31.00 €** | 14.6 % | **6.1 %** | 31.36 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 24.50 € | **22.00 €** | 23.4 % | **10.8 %** | 22.39 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 43.50 € | **41.00 €** | 14.4 % | **7.8 %** | 41.39 € | stávame sa najlacnejší |
| Ivo DVB-26 zesilovač 26dB (5-12V) | 27.00 € | **24.50 €** | 34.7 % | **22.2 %** | 24.90 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **65.00 €** | 15.2 % | **10.9 %** | 65.46 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 175.50 € | **173.00 €** | 10.1 % | **8.5 %** | 173.50 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 197.90 € | **195.50 €** | 10.2 % | **8.9 %** | 195.60 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.90 € | **127.50 €** | 10.2 % | **8.2 %** | 127.90 € | stávame sa najlacnejší |
| Rowenta 3v1 RH5A32E0 | 119.90 € | **117.50 €** | 10.1 % | **7.9 %** | 117.90 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 49.90 € | **47.50 €** | 11.2 % | **5.9 %** | 44.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SM5000 | 52.90 € | **50.50 €** | 10.6 % | **5.6 %** | 48.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 27.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 62.90 € | **60.50 €** | 24.2 % | **19.5 %** | 60.59 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.90 € | **52.50 €** | 10.5 % | **5.7 %** | 52.70 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 20.90 € | **18.50 €** | 25.3 % | **10.9 %** | 18.89 € | stávame sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 128 GB | 28.00 € | **25.90 €** | 14.7 % | **6.1 %** | 21.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko Mezikus PCSKM | 60.00 € | **57.90 €** | 10.0 % | **6.2 %** | 58.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKW | 60.00 € | **57.90 €** | 10.0 % | **6.2 %** | 58.00 € | stávame sa najlacnejší |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 41.50 € | **39.50 €** | 11.4 % | **6.0 %** | 18.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MR80X WiFi Dual Band Router | 43.00 € | **41.00 €** | 10.2 % | **5.1 %** | 32.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartring Colmi R03 18.9MM 9 (black) | 27.50 € | **25.50 €** | 15.0 % | **6.6 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZSM7900 | 42.50 € | **40.50 €** | 10.7 % | **5.5 %** | 34.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus 200 | 42.90 € | **40.90 €** | 10.2 % | **5.1 %** | 35.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skriňa na disky SSD/M2 Lexar LPAE06N 10Gb/s | 23.90 € | **21.90 €** | 15.6 % | **5.9 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AKAI APR-11R RED Rádio v retro stylu | 38.90 € | **36.90 €** | 10.8 % | **5.1 %** | 33.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový ovládač KRUGER & MATZ V-LED | 12.50 € | **10.50 €** | 25.2 % | **5.1 %** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE300 AC1200 WiFi Range Extender | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 31.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi ST9100 | 35.50 € | **33.50 €** | 11.5 % | **5.2 %** | 31.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.00 €** | 14.6 % | **5.1 %** | 20.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 12.50 € | **10.50 €** | 29.8 % | **9.0 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator A675 Senior Red | 48.50 € | **46.50 €** | 10.0 % | **5.5 %** | 45.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus G1 bicycle computer | 22.90 € | **20.90 €** | 15.1 % | **5.1 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Airfit-Wh | 48.50 € | **46.50 €** | 10.2 % | **5.6 %** | 45.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic sluchátka RZ-B120W | 36.50 € | **34.50 €** | 11.5 % | **5.4 %** | 33.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny decibelomer Habotest HT622B USB A/C | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 24.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GPS bike computer Cycplus M1 | 26.50 € | **24.50 €** | 14.2 % | **5.6 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 21.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 36.00 € | **34.00 €** | 18.4 % | **11.8 %** | 34.09 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 29.50 € | **27.50 €** | 14.3 % | **6.6 %** | 27.59 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 23.50 € | **21.50 €** | 23.3 % | **12.8 %** | 21.59 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-424 5G | 22.90 € | **20.90 €** | 29.8 % | **18.5 %** | 20.99 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-797 5G | 22.90 € | **20.90 €** | 29.8 % | **18.5 %** | 20.99 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-949 5G | 22.90 € | **20.90 €** | 29.8 % | **18.5 %** | 20.99 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8027 | 15.90 € | **13.90 €** | 25.5 % | **9.7 %** | 14.00 € | stávame sa najlacnejší |
| Elektrický mlynček na zrnkovú kávu HiBREW G3 | 80.00 € | **78.00 €** | 14.9 % | **12.0 %** | 78.10 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 180.90 € | **178.90 €** | 10.2 % | **8.9 %** | 179.00 € | stávame sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 24.50 € | **22.50 €** | 23.4 % | **13.3 %** | 22.65 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 29.50 € | **27.50 €** | 22.2 % | **14.0 %** | 27.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 33.50 € | **31.50 €** | 17.8 % | **10.8 %** | 31.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.50 €** | 15.7 % | **8.8 %** | 31.69 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 160.50 € | **158.50 €** | 10.2 % | **8.9 %** | 158.70 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 161.50 € | **159.50 €** | 10.2 % | **8.9 %** | 159.70 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 197.00 € | **195.00 €** | 10.0 % | **8.9 %** | 195.20 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 206.50 € | **204.50 €** | 10.2 % | **9.1 %** | 204.81 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 17 Pro s držiakom 17 mm | 74.00 € | **72.00 €** | 14.8 % | **11.7 %** | 72.33 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 76.50 € | **74.50 €** | 15.4 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| Napájecí zdroj spínaný URZ1169  12V / 5A - 2,1/5,5 | 14.50 € | **12.50 €** | 32.5 % | **14.2 %** | 12.89 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.50 €** | 10.0 % | **8.4 %** | 132.90 € | stávame sa najlacnejší |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 52.50 € | **50.50 €** | 15.5 % | **11.1 %** | 50.90 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 223.90 € | **222.00 €** | 10.1 % | **9.2 %** | 222.24 € | stávame sa najlacnejší |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 125.90 € | **124.00 €** | 15.1 % | **13.4 %** | 124.25 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **110.00 €** | 15.0 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.00 €** | 10.0 % | **8.0 %** | 101.39 € | stávame sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 68.90 € | **67.00 €** | 10.5 % | **7.4 %** | 67.41 € | stávame sa najlacnejší |
| Domo DO344DH | 149.90 € | **148.00 €** | 10.1 % | **8.7 %** | 148.50 € | stávame sa najlacnejší |
| N'oveen IWH480 | 34.90 € | **33.00 €** | 11.2 % | **5.2 %** | 28.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C6 WiFi Dual Band Router | 36.90 € | **35.00 €** | 10.7 % | **5.0 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E4GK1-4GB | 37.90 € | **36.00 €** | 10.8 % | **5.2 %** | 33.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **26.00 €** | 15.4 % | **7.5 %** | 26.12 € | stávame sa najlacnejší |
| Pamäťová karta Lexar Professional 800x Pro SDXC 64 GB | 30.90 € | **29.00 €** | 15.3 % | **8.2 %** | 29.19 € | stávame sa najlacnejší |
| Krüger&Matz HL-CP03 bezdrátový adaptér CarPlay - And... | 23.90 € | **22.00 €** | 18.2 % | **8.8 %** | 22.39 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 381.50 € | **379.90 €** | 7.9 % | **7.5 %** | 379.95 € | stávame sa najlacnejší |
| SONY WHCH520W.CE7 bílá | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 27.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 305 Combo 2-pack, 6ZD17AE | 29.50 € | **27.90 €** | 11.1 % | **5.1 %** | 23.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **27.90 €** | 11.4 % | **5.4 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2023F0 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 33.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 22.50 € | **20.90 €** | 16.3 % | **8.0 %** | 20.94 € | stávame sa najlacnejší |
| FoodSaver FFC026X | 41.50 € | **39.90 €** | 10.8 % | **6.5 %** | 40.00 € | stávame sa najlacnejší |
| Albrecht DR 54 | 64.50 € | **62.90 €** | 10.6 % | **7.8 %** | 63.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 12.50 € | **10.90 €** | 23.3 % | **7.5 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 12.50 € | **10.90 €** | 23.9 % | **8.1 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar DJ-390 BT Bluetooth speaker | 114.50 € | **112.90 €** | 10.2 % | **8.7 %** | 113.00 € | stávame sa najlacnejší |
| Nabíječka baterií XTAR VC4SL 18650 | 27.00 € | **25.50 €** | 13.3 % | **7.0 %** | 17.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 19.00 € | **17.50 €** | 16.8 % | **7.5 %** | 12.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Držák fólií (rolí) PARAT ROYAL | 31.50 € | **30.00 €** | 10.5 % | **5.2 %** | 27.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (čierne) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (strieborné) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **15.00 €** | 16.2 % | **5.7 %** | 12.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558 | 12.50 € | **11.00 €** | 20.4 % | **6.0 %** | 9.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 57.00 € | **55.50 €** | 8.1 % | **5.2 %** | 54.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 15.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru CABLETECH UCH0219-1 17''-32'' | 16.50 € | **15.00 €** | 30.2 % | **18.4 %** | 15.01 € | stávame sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **16.50 €** | 15.0 % | **5.4 %** | 16.56 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 31.50 € | **30.00 €** | 12.8 % | **7.4 %** | 30.09 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.00 € | **60.50 €** | 15.4 % | **12.6 %** | 60.59 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 32.50 € | **31.00 €** | 10.7 % | **5.6 %** | 31.10 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 20.00 € | **18.50 €** | 19.3 % | **10.3 %** | 18.69 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **113.00 €** | 10.0 % | **8.6 %** | 113.27 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **65.00 €** | 10.0 % | **7.5 %** | 65.30 € | stávame sa najlacnejší |
| Leifheit Telegant 72 Protect | 28.50 € | **27.00 €** | 11.1 % | **5.2 %** | 27.33 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 14.00 € | **12.50 €** | 31.0 % | **16.9 %** | 12.89 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **40.00 €** | 10.8 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **40.00 €** | 10.8 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **40.00 €** | 10.8 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| BROTHER HL-L1232W | 118.00 € | **116.50 €** | 10.1 % | **8.7 %** | 116.90 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 229.50 € | **228.00 €** | 8.0 % | **7.3 %** | 228.50 € | stávame sa najlacnejší |
| ANMITE A160W03 16" prenosný monitor | 88.90 € | **87.50 €** | 15.1 % | **13.3 %** | 87.82 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.90 € | **120.50 €** | 10.3 % | **9.1 %** | 120.90 € | stávame sa najlacnejší |
| Domo DO228SV | 121.90 € | **120.50 €** | 10.0 % | **8.8 %** | 120.90 € | stávame sa najlacnejší |
| Myš bezdrátová REBEL WM500 | 13.90 € | **12.50 €** | 18.5 % | **6.5 %** | 11.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GameSir Nova Lite 2 Luminous White | 34.90 € | **33.50 €** | 10.1 % | **5.6 %** | 21.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 38.90 € | **37.50 €** | 10.3 % | **6.3 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 24992-70 | 40.90 € | **39.50 €** | 10.1 % | **6.3 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Zametač koberců REGULUS | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO9195C | 32.90 € | **31.50 €** | 10.1 % | **5.4 %** | 29.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada litinových závaží 4x1,25kg, 51mm, REBEL ACTIVE ... | 18.90 € | **17.50 €** | 16.5 % | **7.9 %** | 15.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR720003 | 29.90 € | **28.50 €** | 11.2 % | **6.0 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje H45W | 39.90 € | **38.50 €** | 10.2 % | **6.3 %** | 36.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.90 € | **16.50 €** | 15.2 % | **6.2 %** | 16.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.50 €** | 15.2 % | **12.2 %** | 53.68 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 15.69 € | stávame sa najlacnejší |
| Russell Hobbs 26800-56/RH | 26.90 € | **25.50 €** | 11.0 % | **5.2 %** | 25.81 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Mio Smartbox IV | 31.90 € | **30.50 €** | 11.3 % | **6.4 %** | 30.89 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.90 € | **39.50 €** | 10.8 % | **7.0 %** | 39.90 € | stávame sa najlacnejší |
| Rowenta ZR730200 | 28.00 € | **26.90 €** | 10.2 % | **5.9 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkové cvičební pásy TRX P3-3 REBEL ACTIVE RBA-3... | 20.00 € | **18.90 €** | 12.8 % | **6.6 %** | 16.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **57.90 €** | 14.9 % | **12.8 %** | 57.99 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 47.50 € | **46.50 €** | 8.2 % | **5.9 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka HMS Premium MP12 světle šedá | 33.90 € | **32.90 €** | 8.4 % | **5.2 %** | 23.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka HMS Premium MP12 tmavě šedá | 33.90 € | **32.90 €** | 8.4 % | **5.2 %** | 23.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINI-D Smart WiFi Matter Switch (AC/DC 12-48V... | 13.50 € | **12.50 €** | 15.4 % | **6.9 %** | 6.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka pamäťových kariet Lexar LRW310X Dual USB-A/C... | 12.50 € | **11.50 €** | 15.9 % | **6.6 %** | 7.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-PI | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ONIKUMA CW905 Pink 2.4G Wireless Gaming Mouse | 13.50 € | **12.50 €** | 16.5 % | **7.9 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Breakfast Toaster 157/03, černý | 23.90 € | **22.90 €** | 11.3 % | **6.6 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C24 AC750 Router | 23.90 € | **22.90 €** | 10.9 % | **6.3 %** | 20.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Xany 2C, aktivní pokojová anténa | 18.50 € | **17.50 €** | 11.2 % | **5.2 %** | 15.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Red) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 8.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 64 GB | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 11.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W4 TUYA | 13.90 € | **12.90 €** | 15.4 % | **7.1 %** | 11.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Torras Ostand R Fusion Case for iPhone 16 Pro (Black) | 14.50 € | **13.50 €** | 14.5 % | **6.6 %** | 12.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic PETG (sivý) 1 kg | 11.50 € | **10.50 €** | 15.1 % | **5.1 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-560BK Black | 19.50 € | **18.50 €** | 11.3 % | **5.6 %** | 17.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.50 €** | 8.6 % | **5.5 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stojan na slúchadlá ONIKUMA ST-2 čierny | 13.90 € | **12.90 €** | 15.1 % | **6.8 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo FF0700A | 18.50 € | **17.50 €** | 12.5 % | **6.4 %** | 17.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer TX1800U Nano Adaptér | 20.90 € | **19.90 €** | 10.5 % | **5.2 %** | 19.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Dust Bag Qrevo / QR798 | 14.50 € | **13.50 €** | 12.8 % | **5.0 %** | 13.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 22.90 € | **21.90 €** | 10.7 % | **5.9 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.90 € | **17.90 €** | 10.9 % | **5.1 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot SCCPBPP605-050 | 102.50 € | **101.50 €** | 10.5 % | **9.5 %** | 101.54 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 107.50 € | **106.50 €** | 10.4 % | **9.3 %** | 106.57 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.00 € | **22.00 €** | 13.1 % | **8.2 %** | 22.09 € | stávame sa najlacnejší |
| Náhradní filtrační kapsle GARNI BS 45T | 17.50 € | **16.50 €** | 24.6 % | **17.5 %** | 16.59 € | stávame sa najlacnejší |
| 3D skener Revopoint POP 4 Premium | 931.90 € | **930.90 €** | 15.0 % | **14.9 %** | 930.99 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 404.90 € | **403.90 €** | 7.3 % | **7.1 %** | 404.00 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 234.90 € | **233.90 €** | 42339.0 % | **42158.4 %** | 234.00 € | stávame sa najlacnejší |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 46.00 € | **45.00 €** | 14.4 % | **12.0 %** | 45.13 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.50 €** | 15.6 % | **13.0 %** | 43.63 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.13 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.13 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.13 € | stávame sa najlacnejší |
| Domo DO8719W | 70.50 € | **69.50 €** | 10.7 % | **9.1 %** | 69.67 € | stávame sa najlacnejší |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 19.50 € | **18.50 €** | 14.9 % | **9.0 %** | 18.67 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra Glow Mist 1/8 | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell O... | 19.50 € | **18.50 €** | 14.9 % | **9.0 %** | 18.67 € | stávame sa najlacnejší |
| Filtračný systém Freewell UV Osmo Pocket 4P | 19.50 € | **18.50 €** | 14.9 % | **9.0 %** | 18.67 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND64 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND8 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND1000 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND32 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| Tefal J1641474 | 12.50 € | **11.50 €** | 14.4 % | **5.3 %** | 11.69 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 59.50 € | **58.50 €** | 8.3 % | **6.5 %** | 58.69 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 31.50 € | **30.50 €** | 14.6 % | **11.0 %** | 30.73 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **41.50 €** | 15.0 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 24.50 € | **23.50 €** | 15.4 % | **10.7 %** | 23.79 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 42.00 € | **41.00 €** | 14.7 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| Redmi Buds 8 Lite Black | 20.50 € | **19.50 €** | 12.2 % | **6.8 %** | 19.80 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 49.00 € | **48.00 €** | 15.0 % | **12.6 %** | 48.31 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 16.50 € | **15.50 €** | 14.8 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT113 | 11.50 € | **10.50 €** | 16.4 % | **6.3 %** | 10.85 € | stávame sa najlacnejší |
| Smart Visual Ear-Clean Rod Bebird R1 black | 15.50 € | **14.50 €** | 14.6 % | **7.2 %** | 14.85 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **35.00 €** | 15.0 % | **11.9 %** | 35.38 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 13.50 € | **12.50 €** | 15.3 % | **6.8 %** | 12.89 € | stávame sa najlacnejší |
| Nutribullet NB614.DG | 55.50 € | **54.50 €** | 10.1 % | **8.1 %** | 54.89 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.50 €** | 10.1 % | **9.0 %** | 98.90 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 31.50 € | **30.50 €** | 10.7 % | **7.2 %** | 30.90 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **35.50 €** | 10.5 % | **7.5 %** | 35.90 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.50 € | **39.50 €** | 11.1 % | **8.3 %** | 39.90 € | stávame sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.1 % | **5.3 %** | 15.90 € | stávame sa najlacnejší |
| Zircon Monoblok Single M-0143 Slim line Skylink | 12.50 € | **11.50 €** | 36.4 % | **25.5 %** | 11.90 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 19.00 € | **18.00 €** | 14.3 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 44.00 € | **43.00 €** | 14.7 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 22.00 € | **21.00 €** | 14.2 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Grey) | 15.00 € | **14.00 €** | 13.9 % | **6.3 %** | 14.49 € | stávame sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 25.00 € | **24.00 €** | 9.6 % | **5.2 %** | 24.50 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 65.00 € | **64.00 €** | 10.1 % | **8.4 %** | 64.50 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 22.00 € | **21.00 €** | 10.1 % | **5.1 %** | 21.50 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 16.90 € | **15.90 €** | 12.6 % | **6.0 %** | 16.00 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 83.90 € | **83.00 €** | 10.4 % | **9.2 %** | 83.20 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 69.90 € | **69.00 €** | 15.2 % | **13.8 %** | 69.28 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 69.90 € | **69.00 €** | 14.9 % | **13.5 %** | 69.28 € | stávame sa najlacnejší |
| SCANPART podložka pod pračku Tlmiaca | 13.90 € | **13.00 €** | 12.8 % | **5.5 %** | 9.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR740001 | 15.90 € | **15.00 €** | 11.8 % | **5.5 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Habotest HT86B | 11.90 € | **11.00 €** | 16.4 % | **7.6 %** | 11.46 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 58.90 € | **58.00 €** | 15.0 % | **13.2 %** | 58.04 € | stávame sa najlacnejší |
| Ufesa Haku | 30.90 € | **30.00 €** | 11.3 % | **8.1 %** | 30.08 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 43.90 € | **43.00 €** | 8.6 % | **6.4 %** | 43.09 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **38.00 €** | 10.1 % | **7.5 %** | 38.20 € | stávame sa najlacnejší |
| G3Ferrari G2016100 EQUA Kuchyňská váha | 19.90 € | **19.00 €** | 11.9 % | **6.8 %** | 19.21 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.90 € | **33.00 €** | 11.1 % | **8.1 %** | 33.29 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **42.00 €** | 10.5 % | **8.2 %** | 42.41 € | stávame sa najlacnejší |
| Puluz vodotesný fotografický batoh pre DJI Ronin-SC ... | 28.90 € | **28.00 €** | 15.1 % | **11.5 %** | 28.46 € | stávame sa najlacnejší |
| Leifheit Page Profi 100 | 29.90 € | **29.00 €** | 11.4 % | **8.0 %** | 29.50 € | stávame sa najlacnejší |
| Hrazda do dveří Trizand 24784 | 16.90 € | **16.00 €** | 15.0 % | **8.9 %** | 16.50 € | stávame sa najlacnejší |
| Pendrive Lexar JumpDrive M22 USB 2.0 64GB | 10.50 € | **9.70 €** | 13.8 % | **5.1 %** | 8.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 402.50 € | **401.90 €** | 7.4 % | **7.3 %** | 402.00 € | stávame sa najlacnejší |
| TP-LINK TL-WA854RE Wireless N Extender | 17.50 € | **16.90 €** | 11.0 % | **7.2 %** | 13.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Rollfix 210 Lon | 17.50 € | **16.90 €** | 11.3 % | **7.5 %** | 14.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-300 DVBT2 H265 přijímač (HDMI CEC) | 22.50 € | **21.90 €** | 8.9 % | **6.0 %** | 20.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Classic 180 Solid | 21.50 € | **20.90 €** | 10.1 % | **7.0 %** | 20.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 17.50 € | **16.90 €** | 11.0 % | **7.2 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.50 € | **47.90 €** | 11.0 % | **9.6 %** | 47.96 € | stávame sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.50 € | **24.90 €** | 11.5 % | **8.8 %** | 24.99 € | stávame sa najlacnejší |
| Hyper PLA-CF Creality Filament (tmavozelený) | 19.50 € | **18.90 €** | 14.8 % | **11.3 %** | 18.99 € | stávame sa najlacnejší |
| LENCO ICR-210 černá | 16.50 € | **15.90 €** | 10.6 % | **6.6 %** | 10.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 655 Magenta, CZ111AE | 16.50 € | **15.90 €** | 10.9 % | **6.8 %** | 13.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EF167 | 14.50 € | **13.90 €** | 12.3 % | **7.6 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm černý | 13.50 € | **12.90 €** | 10.0 % | **5.1 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm světle šedý | 13.50 € | **12.90 €** | 10.0 % | **5.1 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí bezdrátová podložka pro telefony Compass | 16.50 € | **15.90 €** | 10.8 % | **6.7 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB02N 75 cm šedo-stříbrný | 13.50 € | **12.90 €** | 10.0 % | **5.1 %** | 12.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E200SM | 16.50 € | **15.90 €** | 11.5 % | **7.5 %** | 15.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 11.50 € | **10.90 €** | 14.3 % | **8.3 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower WPU-800-12 UPS 800W 12V čistý ... | 133.50 € | **132.90 €** | 5.6 % | **5.1 %** | 115.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 123.50 € | **122.90 €** | 16.4 % | **15.8 %** | 123.00 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 67.50 € | **66.90 €** | 8.3 % | **7.4 %** | 67.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 251.50 € | **250.90 €** | 10.0 % | **9.7 %** | 251.00 € | stávame sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.00 € | **19.50 €** | 9.6 % | **6.8 %** | 12.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim | 29.00 € | **28.50 €** | 8.6 % | **6.7 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB WiFi adaptér duální VU+ 2,4/5GHz/600Mbps s ANTÉN... | 32.50 € | **32.00 €** | 6.8 % | **5.1 %** | 25.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE FItness MP10 modro-šedá | 25.00 € | **24.50 €** | 7.8 % | **5.7 %** | 18.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 32GB | 13.00 € | **12.50 €** | 12.9 % | **8.6 %** | 9.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 růžovo-šedá | 25.00 € | **24.50 €** | 7.8 % | **5.7 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 zelená-mod... | 25.00 € | **24.50 €** | 7.8 % | **5.7 %** | 22.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 žlutá-modr... | 25.00 € | **24.50 €** | 7.8 % | **5.7 %** | 22.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente IceQueen černá | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar JumpDrive M400 USB 3.0 64GB | 11.00 € | **10.50 €** | 13.3 % | **8.2 %** | 9.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 18.50 € | **18.00 €** | 14.9 % | **11.8 %** | 18.04 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 11.8 % | **9.4 %** | 23.08 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.00 € | **16.50 €** | 13.5 % | **10.1 %** | 16.58 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 24.50 € | **24.00 €** | 12.2 % | **9.9 %** | 24.09 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 24.50 € | **24.00 €** | 12.2 % | **9.9 %** | 24.09 € | stávame sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-M ( 36 - 40 ) | 12.50 € | **12.00 €** | 9.6 % | **5.2 %** | 12.09 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 109.50 € | **109.00 €** | 10.4 % | **9.9 %** | 109.10 € | stávame sa najlacnejší |
| Girmi FM2105 Mikrovlnná trouba s grilem | 109.50 € | **109.00 €** | 10.4 % | **9.9 %** | 109.10 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 84.00 € | **83.50 €** | 14.9 % | **14.2 %** | 83.63 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Domo DO 264 AP | 59.00 € | **58.50 €** | 10.1 % | **9.1 %** | 58.67 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Držiak so šnúrkou Sunnylife pre ovládač DJI RC (MM3-... | 15.50 € | **15.00 €** | 16.0 % | **12.3 %** | 15.18 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Philips SQM3642/00 TV držák na zeď | 21.00 € | **20.50 €** | 10.4 % | **7.8 %** | 20.70 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 23.00 € | **22.50 €** | 19.1 % | **16.5 %** | 22.71 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 29.50 € | **29.00 €** | 7.6 % | **5.8 %** | 29.22 € | stávame sa najlacnejší |
| Svetlomet Superfire HL06, 500lm, USB | 13.00 € | **12.50 €** | 15.3 % | **10.8 %** | 12.73 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 26.50 € | **26.00 €** | 31.1 % | **28.6 %** | 26.25 € | stávame sa najlacnejší |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.50 € | **55.00 €** | 17.0 % | **16.0 %** | 55.25 € | stávame sa najlacnejší |
| Gorenje NRKI517E41 | 473.50 € | **473.00 €** | 12.1 % | **12.0 %** | 473.25 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Pro Combo | 780.50 € | **780.00 €** | 14.2 % | **14.1 %** | 780.26 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.8 % | **8.4 %** | 10.29 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.50 € | **16.00 €** | 12.6 % | **9.2 %** | 16.29 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.3 % | **8.0 %** | 16.29 € | stávame sa najlacnejší |
| DOMO DO9279W | 51.50 € | **51.00 €** | 10.9 % | **9.8 %** | 51.29 € | stávame sa najlacnejší |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **18.00 €** | 15.7 % | **12.6 %** | 18.29 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **27.50 €** | 14.3 % | **12.2 %** | 27.79 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.50 € | **37.00 €** | 21.8 % | **20.2 %** | 37.29 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 62.50 € | **62.00 €** | 6.5 % | **5.6 %** | 62.29 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **12.00 €** | 14.7 % | **10.1 %** | 12.29 € | stávame sa najlacnejší |
| Domo DO223S | 64.50 € | **64.00 €** | 13.0 % | **12.2 %** | 64.30 € | stávame sa najlacnejší |
| Karta microSD Lexar 3.0 s kapacitou 64 GB | 18.50 € | **18.00 €** | 9.7 % | **6.7 %** | 18.30 € | stávame sa najlacnejší |
| G3Ferrari G1015502 Mikrovlnná trouba | 118.50 € | **118.00 €** | 10.5 % | **10.0 %** | 118.30 € | stávame sa najlacnejší |
| WHIRLPOOL WI 7020 P | 331.50 € | **331.00 €** | 8.1 % | **8.0 %** | 331.30 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 69.50 € | **69.00 €** | 9.7 % | **8.9 %** | 69.35 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 10.6 % | **7.2 %** | 16.38 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 302.50 € | **302.00 €** | 6.7 % | **6.5 %** | 302.38 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.38 € | stávame sa najlacnejší |
| G21 nůž Damascus Premium 13 cm | 42.50 € | **42.00 €** | 8.6 % | **7.3 %** | 42.39 € | stávame sa najlacnejší |
| TESLA Cook BBQ150 | 53.50 € | **53.00 €** | 10.5 % | **9.5 %** | 53.39 € | stávame sa najlacnejší |
| Tefal CY851130 | 197.50 € | **197.00 €** | 10.1 % | **9.8 %** | 197.39 € | stávame sa najlacnejší |
| DOMO DO42329PC | 114.50 € | **114.00 €** | 7.1 % | **6.6 %** | 114.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **27.00 €** | 15.6 % | **13.5 %** | 27.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 33.00 € | **32.50 €** | 11.9 % | **10.2 %** | 32.89 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 33.00 € | **32.50 €** | 10.1 % | **8.4 %** | 32.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 59.50 € | **59.00 €** | 11.7 % | **10.8 %** | 59.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 84.00 € | **83.50 €** | 7.2 % | **6.5 %** | 83.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 68.00 € | **67.50 €** | 7.0 % | **6.2 %** | 67.89 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 39.00 € | **38.50 €** | 10.1 % | **8.6 %** | 38.89 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 48.50 € | **48.00 €** | 12.0 % | **10.8 %** | 48.39 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 78.50 € | **78.00 €** | 6.3 % | **5.7 %** | 78.39 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 103.00 € | **102.50 €** | 7.1 % | **6.5 %** | 102.89 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 34.00 € | **33.50 €** | 10.7 % | **9.1 %** | 33.89 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 58.00 € | **57.50 €** | 11.8 % | **10.9 %** | 57.89 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 50.50 € | **50.00 €** | 6.9 % | **5.8 %** | 50.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 239.00 € | **238.50 €** | 11.9 % | **11.7 %** | 238.89 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 132.00 € | **131.50 €** | 10.2 % | **9.7 %** | 131.89 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 179.00 € | **178.50 €** | 5.8 % | **5.5 %** | 178.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 464.00 € | **463.50 €** | 7.2 % | **7.1 %** | 463.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 898.00 € | **897.50 €** | 14.1 % | **14.1 %** | 897.89 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.50 € | **89.00 €** | 14.8 % | **14.1 %** | 89.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 26.50 € | **26.00 €** | 8.4 % | **6.3 %** | 26.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 131.50 € | **131.00 €** | 15.1 % | **14.7 %** | 131.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 72.50 € | **72.00 €** | 12.8 % | **12.0 %** | 72.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 85.50 € | **85.00 €** | 13.1 % | **12.4 %** | 85.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 61.00 € | **60.50 €** | 12.1 % | **11.2 %** | 60.89 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 53.00 € | **52.50 €** | 10.8 % | **9.7 %** | 52.89 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 96.00 € | **95.50 €** | 7.1 % | **6.5 %** | 95.89 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 33.50 € | **33.00 €** | 8.8 % | **7.2 %** | 33.39 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 76.50 € | **76.00 €** | 6.3 % | **5.6 %** | 76.39 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 192.00 € | **191.50 €** | 14.1 % | **13.8 %** | 191.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 72.50 € | **72.00 €** | 7.9 % | **7.2 %** | 72.39 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 142.00 € | **141.50 €** | 13.7 % | **13.3 %** | 141.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 259.00 € | **258.50 €** | 14.6 % | **14.4 %** | 258.89 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 97.50 € | **97.00 €** | 7.4 % | **6.8 %** | 97.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 111.00 € | **110.50 €** | 7.2 % | **6.7 %** | 110.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 145.00 € | **144.50 €** | 8.9 % | **8.5 %** | 144.89 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 59.50 € | **59.00 €** | 7.8 % | **6.9 %** | 59.39 € | stávame sa najlacnejší |
| DOMO DO42602S | 39.50 € | **39.00 €** | 8.2 % | **6.8 %** | 39.39 € | stávame sa najlacnejší |
| DOMO DO9286IB | 248.00 € | **247.50 €** | 5.8 % | **5.6 %** | 247.89 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 279.00 € | **278.50 €** | 8.5 % | **8.3 %** | 278.89 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.50 € | **19.00 €** | 12.5 % | **9.6 %** | 19.39 € | stávame sa najlacnejší |
| HP ENVY 6520e AiO (714N9B) | 102.50 € | **102.00 €** | 9.7 % | **9.2 %** | 102.39 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.00 € | **22.50 €** | 8.5 % | **6.1 %** | 22.89 € | stávame sa najlacnejší |
| Whirlpool NoFrost WHK 22414 XBR8EA | 878.00 € | **877.50 €** | 9.9 % | **9.9 %** | 877.89 € | stávame sa najlacnejší |
| DOMO DO91135F | 326.50 € | **326.00 €** | 9.7 % | **9.5 %** | 326.39 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 638.00 € | **637.50 €** | 6.4 % | **6.3 %** | 637.89 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 674.50 € | **674.00 €** | 9.1 % | **9.0 %** | 674.39 € | stávame sa najlacnejší |
| Whirlpool WP B9X WBS EE | 703.50 € | **703.00 €** | 9.9 % | **9.8 %** | 703.39 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 270.00 € | **269.50 €** | 5.9 % | **5.7 %** | 269.89 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 136.50 € | **136.00 €** | 8.5 % | **8.1 %** | 136.39 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 89.50 € | **89.00 €** | 14.2 % | **13.5 %** | 89.39 € | stávame sa najlacnejší |
| Status STA 177159 | 11.00 € | **10.50 €** | 11.0 % | **5.9 %** | 10.90 € | stávame sa najlacnejší |
| Ariete SteamStyle 4301, violet | 33.00 € | **32.50 €** | 10.3 % | **8.6 %** | 32.90 € | stávame sa najlacnejší |
| Ariete SteamStyle 4301/02, coral | 33.00 € | **32.50 €** | 10.3 % | **8.6 %** | 32.90 € | stávame sa najlacnejší |
| Girmi BL0401 Cestovní silikonová konvice | 15.00 € | **14.50 €** | 10.5 % | **6.8 %** | 14.90 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.50 € | **41.00 €** | 8.3 % | **7.0 %** | 41.40 € | stávame sa najlacnejší |
| FIXED FIXORB2-WH Nabíjecí USB-C adaptér | 16.00 € | **15.50 €** | 10.3 % | **6.9 %** | 15.90 € | stávame sa najlacnejší |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 59.00 € | **58.50 €** | 15.0 % | **14.0 %** | 58.90 € | stávame sa najlacnejší |
| Candy CFT610/5X/1 | 49.50 € | **49.00 €** | 10.1 % | **9.0 %** | 49.40 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.50 € | **16.00 €** | 15.0 % | **11.6 %** | 16.42 € | stávame sa najlacnejší |
| Sati Guatemala Bio Fairtrade 500 g zrno | 12.50 € | **12.00 €** | 14.5 % | **10.0 %** | 12.44 € | stávame sa najlacnejší |
| FoodSaver FFC025X | 26.50 € | **26.00 €** | 11.8 % | **9.7 %** | 26.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 28.50 € | **28.00 €** | 13.5 % | **11.5 %** | 28.49 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 55.50 € | **55.00 €** | 6.4 % | **5.5 %** | 55.49 € | stávame sa najlacnejší |
| DOMO DO754K | 36.50 € | **36.00 €** | 10.0 % | **8.5 %** | 36.49 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **36.00 €** | 10.0 % | **8.5 %** | 36.49 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Black) | 14.50 € | **14.00 €** | 16.1 % | **12.1 %** | 14.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.50 € | **47.00 €** | 8.1 % | **6.9 %** | 47.49 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 114.90 € | **114.50 €** | 10.4 % | **10.0 %** | 114.71 € | stávame sa najlacnejší |
| Guzzanti GZ 210A | 213.90 € | **213.50 €** | 6.1 % | **5.9 %** | 213.75 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.90 € | **86.50 €** | 15.0 % | **14.5 %** | 86.79 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **79.50 €** | 15.2 % | **14.6 %** | 79.79 € | stávame sa najlacnejší |
| TESLA PowerWash & Steam Station TQS600 | 122.90 € | **122.50 €** | 10.1 % | **9.7 %** | 122.79 € | stávame sa najlacnejší |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.90 € | **83.50 €** | 18.3 % | **17.8 %** | 83.79 € | stávame sa najlacnejší |
| DOMO DO354VD | 111.90 € | **111.50 €** | 10.9 % | **10.5 %** | 111.86 € | stávame sa najlacnejší |
| Electrolux EF 26   (EFH 12 W) | 11.90 € | **11.50 €** | 13.6 % | **9.7 %** | 3.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WN722N WiFi USB Adaptér | 11.90 € | **11.50 €** | 11.2 % | **7.5 %** | 9.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 13.90 € | **13.50 €** | 10.1 % | **7.0 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Ouganda Colobus Blend 500 g zrno | 10.90 € | **10.50 €** | 13.1 % | **8.9 %** | 10.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.90 € | **13.50 €** | 10.5 % | **7.3 %** | 13.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Wireless Mouse 220 Black | 13.90 € | **13.50 €** | 13.8 % | **10.5 %** | 13.71 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky C10 (biele) | 12.90 € | **12.50 €** | 11.2 % | **7.8 %** | 12.74 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 11.90 € | **11.50 €** | 17.4 % | **13.5 %** | 11.79 € | stávame sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.90 € | **12.50 €** | 15.3 % | **11.7 %** | 12.79 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 15.90 € | **15.50 €** | 9.5 % | **6.7 %** | 15.79 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.90 € | **52.50 €** | 10.8 % | **10.0 %** | 52.54 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.50 €** | 15.2 % | **12.6 %** | 17.56 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.50 €** | 15.4 % | **12.8 %** | 17.56 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.50 €** | 11.5 % | **8.9 %** | 16.63 € | stávame sa najlacnejší |
| Domo DO733K | 47.90 € | **47.50 €** | 10.8 % | **9.9 %** | 47.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.1 % | **8.5 %** | 26.63 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.50 €** | 11.0 % | **9.5 %** | 29.67 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 18.90 € | **18.50 €** | 11.2 % | **8.8 %** | 18.67 € | stávame sa najlacnejší |
| Cabletech UCH0022-S | 20.90 € | **20.50 €** | 8.5 % | **6.4 %** | 20.68 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT203R | 53.90 € | **53.50 €** | 15.4 % | **14.5 %** | 53.69 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 32.90 € | **32.50 €** | 11.3 % | **9.9 %** | 32.70 € | stávame sa najlacnejší |
| Battery Tester Ancel BA101 8-30V DC | 43.90 € | **43.50 €** | 15.3 % | **14.3 %** | 43.78 € | stávame sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 26.90 € | **26.50 €** | 11.2 % | **9.5 %** | 26.79 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.50 €** | 11.8 % | **9.2 %** | 16.79 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.50 €** | 7.7 % | **6.5 %** | 33.79 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.90 € | **39.50 €** | 16.8 % | **15.6 %** | 39.79 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.90 € | **28.50 €** | 31.0 % | **29.2 %** | 28.79 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 20.90 € | **20.50 €** | 18.1 % | **15.8 %** | 20.80 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 35.90 € | **35.50 €** | 7.1 % | **6.0 %** | 35.86 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.50 €** | 10.3 % | **9.0 %** | 32.88 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 12.7 % | **10.2 %** | 17.88 € | stávame sa najlacnejší |
| Xiaomi Outdoor Camera CW500 Dual EU | 63.90 € | **63.50 €** | 5.8 % | **5.1 %** | 63.89 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 507.90 € | **507.50 €** | 7.1 % | **7.0 %** | 507.80 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 365.90 € | **365.50 €** | 9.3 % | **9.2 %** | 365.87 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 286.90 € | **286.50 €** | 6.2 % | **6.0 %** | 286.87 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 344.90 € | **344.50 €** | 6.7 % | **6.6 %** | 344.89 € | stávame sa najlacnejší |
| MAXXO VC 1800 | 24.00 € | **23.90 €** | 6.6 % | **6.1 %** | 23.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 30.00 € | **29.90 €** | 6.5 % | **6.1 %** | 29.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 24.00 € | **23.90 €** | 5.8 % | **5.4 %** | 23.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 27.00 € | **26.90 €** | 32.4 % | **31.9 %** | 26.91 € | stávame sa najlacnejší |
| Beper 50451 Tyčový Vakuový Vysavač S He | 52.00 € | **51.90 €** | 10.2 % | **10.0 %** | 51.92 € | stávame sa najlacnejší |
| Maxlife MXBH-01 černé | 19.00 € | **18.90 €** | 10.4 % | **9.8 %** | 18.95 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.00 € | **44.90 €** | 7.0 % | **6.8 %** | 44.99 € | stávame sa najlacnejší |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 23.00 € | **22.90 €** | 11.7 % | **11.2 %** | 22.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.00 € | **43.90 €** | 14.1 % | **13.8 %** | 43.99 € | stávame sa najlacnejší |
| Jóga blok HMS KJ02 korkový | 15.00 € | **14.90 €** | 6.8 % | **6.1 %** | 5.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní válec HMS FS104, modrý | 15.00 € | **14.90 €** | 6.8 % | **6.1 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.00 € | **15.90 €** | 7.2 % | **6.5 %** | 15.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.4 % | **9.6 %** | 12.96 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 75.00 € | **74.90 €** | 7.7 % | **7.5 %** | 74.94 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 103.00 € | **102.90 €** | 5.3 % | **5.2 %** | 102.96 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1801 | 238.00 € | **237.90 €** | 42899.1 % | **42881.0 %** | 237.97 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 125.00 € | **124.90 €** | 7.4 % | **7.3 %** | 124.99 € | stávame sa najlacnejší |

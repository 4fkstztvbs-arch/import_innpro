# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-13

Vstup: `premiumstore-sk_2026-08-13_21-46.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **7256**
- Návrh **zvýšiť** cenu: **71** produktov
- Návrh **znížiť** cenu: **4080** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **3105** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **2728**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (71)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 45.50 € | **111.90 €** | 15.5 % | **184.1 %** | 111.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradné trubičky pro alkohol tester Solight... | 1.70 € | **35.90 €** | 38.2 % | **2818.7 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roborock F25 | 313.90 € | **348.00 €** | 10.1 % | **22.1 %** | 313.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradné trubičky pro alkohol tester Solight... | 5.20 € | **35.90 €** | 40.0 % | **866.5 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pamäťová karta SANDISK EXTREME PRO SDXC 128 GB 200/9... | 25.90 € | **48.00 €** | 14.9 % | **112.9 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Boombox4 Black Přenosný reproduktor | 449.50 € | **469.00 €** | 5.0 % | **9.6 %** | 449.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **71.90 €** | 19.8 % | **40.1 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank Baseus OS Free2Pull 10000mAh 30W +cable (b... | 18.90 € | **26.90 €** | 15.3 % | **64.1 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.90 €** | 10.4 % | **15.6 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier S2000MKIII 2.0 (hnedé) | 364.50 € | **368.50 €** | 15.0 % | **16.3 %** | 365.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Partybox Stage 320 | 428.50 € | **432.50 €** | 10.0 % | **11.1 %** | 428.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| BROTHER DCP-T730DW | 262.50 € | **266.50 €** | 10.0 % | **11.7 %** | 262.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier S2000MKIII 2.0 (hnedé) | 364.50 € | **368.50 €** | 15.0 % | **16.3 %** | 364.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Univerzální dálkový ovladač SUPERIOR LG – Bluetooth ... | 11.90 € | **15.50 €** | 16.7 % | **52.0 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL PartyBox 330 | 555.50 € | **559.00 €** | 10.0 % | **10.7 %** | 555.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Partybox Club 120 | 266.50 € | **269.90 €** | 10.0 % | **11.4 %** | 266.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 28.65 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Black | 16.90 € | **19.90 €** | 11.8 % | **31.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **19.90 €** | 11.8 % | **31.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **19.90 €** | 11.8 % | **31.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **19.90 €** | 11.8 % | **31.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 28.00 € | **30.50 €** | 5.0 % | **14.4 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 CIR60430CB | 366.50 € | **369.00 €** | 5.1 % | **5.8 %** | 366.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight laserový merač vzdálenosti, 0,05 - 40m | 16.90 € | **19.00 €** | 17.4 % | **32.0 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 46.90 € | **49.00 €** | 10.1 % | **15.0 %** | 46.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/4N/1 | 50.90 € | **52.90 €** | 10.0 % | **14.3 %** | 50.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 39.90 € | **41.50 €** | 16.1 % | **20.8 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 143.90 € | **145.50 €** | 15.1 % | **16.3 %** | 143.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla, 150mm | 43.50 € | **45.00 €** | 20.1 % | **24.3 %** | 43.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (modrý) | 41.50 € | **42.90 €** | 15.3 % | **19.2 %** | 42.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.7 % | **16.9 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **38.90 €** | 11.0 % | **15.1 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3T1-3ST | 29.90 € | **31.00 €** | 5.5 % | **9.3 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA X25 (čierne) | 13.90 € | **15.00 €** | 16.4 % | **25.6 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Univerzální dálkový ovladač SUPERIOR Samsung – Bluet... | 11.90 € | **12.90 €** | 16.7 % | **26.5 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **63.90 €** | 10.6 % | **12.4 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica OTP6641WG | 95.50 € | **96.50 €** | 5.2 % | **6.3 %** | 95.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Marvo HG8928 sluchátka s mikrofonem | 12.00 € | **12.90 €** | 5.2 % | **13.1 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 55.00 € | **55.90 €** | 10.1 % | **11.9 %** | 55.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.90 € | **18.50 €** | 11.7 % | **15.4 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP Black | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP White | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.00 € | **23.50 €** | 27.7 % | **30.5 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Mop na podlahu Easy Spray XL | 32.00 € | **32.50 €** | 7.5 % | **9.2 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic Kobra 2 Pro 3D Printer | 206.50 € | **207.00 €** | 9.3 % | **9.6 %** | 206.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 30.00 € | **30.50 €** | 7.7 % | **9.5 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.00 € | **30.50 €** | 12.5 % | **14.4 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Baseus Encok D02 PRO (ružové) | 27.00 € | **27.50 €** | 14.5 % | **16.6 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.50 € | **64.00 €** | 10.2 % | **11.0 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nutribullet NB907MAW | 72.50 € | **72.90 €** | 5.1 % | **5.7 %** | 72.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 745390000 | 124.50 € | **124.90 €** | 9.6 % | **9.9 %** | 124.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 71.50 € | **71.90 €** | 10.4 % | **11.0 %** | 71.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.50 € | **14.90 €** | 10.6 % | **13.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 28.50 € | **28.90 €** | 28.1 % | **29.9 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.50 € | **20.90 €** | 27.8 % | **30.3 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.6 % | **13.2 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510Y žlutá | 36.50 € | **36.90 €** | 8.0 % | **9.2 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.10 € | **9.30 €** | 22.9 % | **25.6 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung OLED QE48S85H | 648.90 € | **649.00 €** | 6.5 % | **6.5 %** | 648.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 142390000 | 30.90 € | **31.00 €** | 12.1 % | **12.5 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 22.90 € | **23.00 €** | 25.7 % | **26.3 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 0.90 € | **1.00 €** | 10.9 % | **23.2 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka 201, priemer 3mm x 140mm, AC napäti... | 0.60 € | **0.70 €** | 16.1 % | **35.5 %** | 0.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 13.90 € | **14.00 €** | 33.0 % | **33.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 7.20 € | **7.30 €** | 9.0 % | **10.5 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **14.00 €** | 10.6 % | **11.4 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LAMAX SoundKid1 pink | 15.90 € | **16.00 €** | 10.4 % | **11.1 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (4080)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| xTool P3 80W laserový gravírovací stroj - sada všetk... | 10577.50 € | **9657.90 €** | 15.0 % | **5.0 %** | 6850.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S3200 BLACK | 6799.00 € | **6002.00 €** | 23.8 % | **9.3 %** | 6002.47 € | stávame sa najlacnejší |
| YAMAHA R-N2000A BLACK | 3890.00 € | **3312.50 €** | 28.3 % | **9.3 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N2000A SILVER | 3890.00 € | **3312.50 €** | 27.9 % | **9.0 %** | 3312.60 € | stávame sa najlacnejší |
| Solight menič Growatt SPH10000TL3-BH 10kW, trojfázov... | 1787.50 € | **1251.50 €** | 50.0 % | **5.0 %** | 653.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality Sermoon X1 | 5540.50 € | **5058.90 €** | 15.0 % | **5.0 %** | 2374.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 98C765 QD-MiniLED | 7339.00 € | **7005.50 €** | 10.0 % | **5.0 %** | 5731.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool F1 Ultra | 3568.50 € | **3258.50 €** | 15.0 % | **5.0 %** | 3042.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 27 144Hz GT2702 | 2827.90 € | **2582.00 €** | 15.0 % | **5.0 %** | 2513.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravír xTool M1 Ultra 20 W 4 v 1 – súprava ... | 2804.90 € | **2561.00 €** | 15.0 % | **5.0 %** | 2119.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE65QN990F NEO QLED 8K | 5146.50 € | **4912.50 €** | 10.0 % | **5.0 %** | 3779.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2680.90 € | **2447.90 €** | 15.0 % | **5.0 %** | 1623.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-N1000A BLACK | 1599.00 € | **1367.00 €** | 27.8 % | **9.3 %** | 1367.23 € | stávame sa najlacnejší |
| YAMAHA R-N1000A SILVER | 1599.00 € | **1367.00 €** | 24.2 % | **6.2 %** | 1367.23 € | stávame sa najlacnejší |
| ELECTROLUX EEC67310L | 1039.00 € | **807.50 €** | 35.1 % | **5.0 %** | 677.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Revopoint Miraco Plus | 2665.90 € | **2434.50 €** | 15.0 % | **5.0 %** | 1795.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.50 €** | 15.0 % | **5.9 %** | 2645.65 € | stávame sa najlacnejší |
| Yamaha RX-A6A BLACK | 2799.00 € | **2576.00 €** | 18.7 % | **9.3 %** | 2576.04 € | stávame sa najlacnejší |
| YAMAHA True X Bar 50A / SR-X50A LGH GREY | 889.00 € | **692.50 €** | 34.9 % | **5.1 %** | 658.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.50 €** | 64.7 % | **6.8 %** | 362.65 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Studio 16 KS1601 | 2238.50 € | **2043.90 €** | 15.0 % | **5.0 %** | 1663.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA True X Bar 50A / SR-X50A CRB GREY | 889.00 € | **695.90 €** | 34.2 % | **5.0 %** | 658.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality CR-Scan Raptor Pro | 2201.90 € | **2010.50 €** | 15.0 % | **5.0 %** | 800.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG RC8TV9AVHN | 759.00 € | **568.00 €** | 40.3 % | **5.0 %** | 538.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX EEM63301L | 739.00 € | **550.50 €** | 41.1 % | **5.1 %** | 459.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj xTool P3 80W | 7037.90 € | **6849.90 €** | 15.0 % | **11.9 %** | 6850.00 € | stávame sa najlacnejší |
| 3D skener Revopoint Miraco Pro | 2163.00 € | **1975.50 €** | 15.0 % | **5.0 %** | 1795.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75QN700C | 4120.50 € | **3933.50 €** | 10.0 % | **5.0 %** | 3820.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot MOVA Mobius 60 | 2120.50 € | **1936.00 €** | 15.0 % | **5.0 %** | 719.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA Z60 Ultra Roller Kompletný čistiaci robot (čierny) | 1978.90 € | **1806.90 €** | 15.0 % | **5.0 %** | 644.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX EIV634 | 529.00 € | **359.00 €** | 54.7 % | **5.0 %** | 320.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE85LS03FW NEO QLED THE FRAME | 3503.50 € | **3344.50 €** | 10.0 % | **5.0 %** | 2375.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 24 GEN 3 GT2402 | 1767.00 € | **1613.50 €** | 15.0 % | **5.0 %** | 1501.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX EIV 854 | 939.00 € | **787.50 €** | 25.2 % | **5.0 %** | 778.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje FN619EEW5 | 639.00 € | **489.00 €** | 39.8 % | **7.0 %** | 489.20 € | stávame sa najlacnejší |
| Samsung QE85QN85D NEO QLED | 3284.50 € | **3135.50 €** | 10.0 % | **5.0 %** | 1969.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Revopoint Miraco | 1702.00 € | **1554.50 €** | 15.0 % | **5.0 %** | 1463.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA True X Bar 40A / SR-X40A LGH GREY | 599.00 € | **453.90 €** | 38.6 % | **5.0 %** | 281.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-N800A BLACK | 1099.00 € | **955.50 €** | 23.4 % | **7.3 %** | 955.90 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3643.00 € | **3499.90 €** | 15.0 % | **10.5 %** | 3500.00 € | stávame sa najlacnejší |
| YAMAHA R-N600A BLACK | 799.00 € | **658.50 €** | 27.4 % | **5.0 %** | 622.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-N600A SILVER | 799.00 € | **659.50 €** | 27.2 % | **5.0 %** | 622.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje F49DPW | 309.00 € | **171.00 €** | 96.8 % | **8.9 %** | 171.30 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 479.00 € | **343.50 €** | 48.7 % | **6.7 %** | 343.70 € | stávame sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.90 €** | 28.6 % | **6.0 %** | 634.00 € | stávame sa najlacnejší |
| Whirlpool WHC18 T574 P | 1039.00 € | **904.50 €** | 20.7 % | **5.0 %** | 859.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE65QN900F NEO QLED 8K | 2917.50 € | **2784.90 €** | 10.0 % | **5.0 %** | 1649.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot MOVA V50 Ultra (čierny) | 1515.90 € | **1384.50 €** | 15.0 % | **5.0 %** | 530.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot MOVA V50 Ultra (biely) | 1515.90 € | **1384.50 €** | 15.0 % | **5.0 %** | 564.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK619DA2XL4 | 599.00 € | **468.90 €** | 34.2 % | **5.1 %** | 469.00 € | stávame sa najlacnejší |
| Skaner 3D Revopoint MetroY Pro | 1467.50 € | **1340.00 €** | 15.0 % | **5.0 %** | 1089.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool TDLRBX 6252BS EU | 519.00 € | **392.50 €** | 38.9 % | **5.0 %** | 349.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENT6ME19S | 1039.00 € | **918.50 €** | 18.8 % | **5.1 %** | 797.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Graphite | 2640.90 € | **2520.50 €** | 10.0 % | **5.0 %** | 1813.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 85C8K QD-MiniLED 4K SMART Google TV | 2617.50 € | **2498.50 €** | 10.0 % | **5.0 %** | 2199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOZA RS070 Lamborghini Essenza SCV12 Sim-Racing volant | 1357.90 € | **1239.90 €** | 15.0 % | **5.0 %** | 1201.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE FH25EAW | 359.00 € | **241.50 €** | 56.4 % | **5.2 %** | 239.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE65QN800D 8K NEO QLED | 2553.50 € | **2437.50 €** | 10.0 % | **5.0 %** | 2374.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Revopoint MetroX Pro Advanced | 1335.50 € | **1219.50 €** | 15.0 % | **5.0 %** | 1212.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tail 2 | 1317.50 € | **1202.90 €** | 15.0 % | **5.0 %** | 1190.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 639.00 € | **524.50 €** | 28.0 % | **5.1 %** | 485.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **526.50 €** | 28.6 % | **6.0 %** | 526.90 € | stávame sa najlacnejší |
| Samsung QE83S90F OLED | 2443.50 € | **2332.50 €** | 10.0 % | **5.0 %** | 2149.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Graphite | 2416.50 € | **2306.90 €** | 10.0 % | **5.0 %** | 1662.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BMX201AG1BG | 319.00 € | **209.90 €** | 59.9 % | **5.2 %** | 206.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG 64220 S | 269.00 € | **160.90 €** | 76.0 % | **5.3 %** | 127.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko ATP3100N | 159.00 € | **51.50 €** | 251.6 % | **13.9 %** | 51.80 € | stávame sa najlacnejší |
| Electrolux 600 PRO EOD3H50TX | 449.00 € | **341.90 €** | 38.0 % | **5.1 %** | 307.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yamaha YHT-4960 BLACK | 899.00 € | **792.00 €** | 24.0 % | **9.3 %** | 792.22 € | stávame sa najlacnejší |
| Electrolux EEG68600W | 979.00 € | **872.50 €** | 17.9 % | **5.1 %** | 679.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75LS03FW NEO QLED THE FRAME | 2337.50 € | **2231.50 €** | 10.0 % | **5.0 %** | 1369.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.50 €** | 16.8 % | **9.3 %** | 1543.60 € | stávame sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **383.90 €** | 35.8 % | **6.6 %** | 384.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solárny | 1212.50 € | **1107.50 €** | 15.0 % | **5.0 %** | 565.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64220SW | 269.00 € | **164.00 €** | 72.3 % | **5.1 %** | 160.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor JMGO N3 4K | 1185.50 € | **1082.50 €** | 15.0 % | **5.0 %** | 949.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality Falcon 2 Pro S 40W laserový gravírovací stroj | 1188.50 € | **1085.50 €** | 15.0 % | **5.0 %** | 1080.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOF4P56X | 529.00 € | **426.50 €** | 30.4 % | **5.1 %** | 353.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WIO 3T133 PLE | 649.00 € | **548.50 €** | 24.3 % | **5.1 %** | 408.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-F51 BLACK 1 karton | 399.00 € | **298.90 €** | 45.9 % | **9.3 %** | 298.95 € | stávame sa najlacnejší |
| Creality CR-Scan Raptor 3D Scanner | 1150.50 € | **1050.50 €** | 15.0 % | **5.0 %** | 800.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 85C765 QD-MiniLED | 2179.90 € | **2080.90 €** | 10.0 % | **5.0 %** | 2026.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BBIM12400XMPS | 489.00 € | **391.90 €** | 31.1 % | **5.1 %** | 378.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K2 Plus | 1115.90 € | **1018.90 €** | 15.0 % | **5.0 %** | 812.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba 205 DustCompactor Combo BL | 399.00 € | **303.50 €** | 38.2 % | **5.1 %** | 173.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba 205 DustCompactor Combo WH | 399.00 € | **303.50 €** | 38.2 % | **5.1 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 PRO EES47320L | 569.00 € | **476.90 €** | 25.4 % | **5.1 %** | 407.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravír Creality Falcon A1 Pro 20 W | 1063.00 € | **970.90 €** | 15.0 % | **5.0 %** | 924.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DS 6423 B | 259.00 € | **166.90 €** | 63.1 % | **5.1 %** | 164.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE85QN85F NEO QLED | 2016.50 € | **1924.90 €** | 10.0 % | **5.0 %** | 1598.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75QN90D NEO QLED | 2019.90 € | **1928.50 €** | 10.0 % | **5.0 %** | 1881.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFS26120XQ | 419.00 € | **328.00 €** | 36.6 % | **6.9 %** | 328.06 € | stávame sa najlacnejší |
| Gorenje R619EAXL6 | 599.00 € | **508.00 €** | 26.2 % | **7.0 %** | 508.10 € | stávame sa najlacnejší |
| Gorenje W2PNA94A1W/CZ | 519.00 € | **428.00 €** | 29.7 % | **7.0 %** | 428.30 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Plus Combo | 1176.90 € | **1086.00 €** | 15.0 % | **6.1 %** | 1086.24 € | stávame sa najlacnejší |
| Samsung OLED QE65S90H | 1955.90 € | **1866.90 €** | 10.0 % | **5.0 %** | 1699.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 85C7K QD-MiniLED 4K SMART Google TV | 1960.90 € | **1871.90 €** | 10.0 % | **5.0 %** | 1791.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární Levenhuk Fatum Z500 s termovizí | 1017.50 € | **929.50 €** | 15.0 % | **5.1 %** | 895.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **511.50 €** | 24.2 % | **6.1 %** | 511.63 € | stávame sa najlacnejší |
| Electrolux EES48401L | 649.00 € | **562.00 €** | 21.3 % | **5.0 %** | 503.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grundig VCW6270 | 249.00 € | **162.50 €** | 61.4 % | **5.3 %** | 113.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WSIC 3M27 C | 439.00 € | **354.50 €** | 30.2 % | **5.1 %** | 300.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S1200 BLACK | 2399.00 € | **2315.50 €** | 13.2 % | **9.3 %** | 2315.65 € | stávame sa najlacnejší |
| YAMAHA A-S1200 SILVER | 2399.00 € | **2315.50 €** | 13.1 % | **9.1 %** | 2315.65 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 369.00 € | **286.00 €** | 39.2 % | **7.9 %** | 286.40 € | stávame sa najlacnejší |
| BEKO BMGB25333BG | 309.00 € | **227.50 €** | 42.7 % | **5.0 %** | 200.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 512GB Jet BK | 1767.90 € | **1687.50 €** | 10.0 % | **5.0 %** | 865.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RF4142PW4 | 319.00 € | **239.50 €** | 39.9 % | **5.0 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 65C9K QD-MiniLED 4K SMART Google TV | 1739.50 € | **1660.50 €** | 10.0 % | **5.0 %** | 1430.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX PerfectCare 600 EW6TN4262C | 499.00 € | **420.50 €** | 24.6 % | **5.0 %** | 320.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RK4182PW4 | 359.00 € | **281.00 €** | 36.1 % | **6.5 %** | 281.12 € | stávame sa najlacnejší |
| Klimatizace MW POWER ALFA 18K WIFI V1, 18000BTu, R32 | 895.00 € | **817.50 €** | 15.0 % | **5.0 %** | 790.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BM3WFU4941WW | 449.00 € | **373.50 €** | 26.3 % | **5.0 %** | 339.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EEM43201L | 569.00 € | **493.90 €** | 21.0 % | **5.0 %** | 367.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WBC 3C34 PF X | 519.00 € | **443.90 €** | 22.8 % | **5.0 %** | 410.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Flip8 5G 512GB Pink | 1651.50 € | **1576.50 €** | 10.0 % | **5.0 %** | 869.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Flip8 5G 512GB Graphite | 1651.50 € | **1576.50 €** | 10.0 % | **5.0 %** | 910.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX Hob2Hood LFV416K | 559.00 € | **484.00 €** | 21.3 % | **5.0 %** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE55S90H | 1639.50 € | **1564.90 €** | 10.0 % | **5.0 %** | 1390.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 256GB Jet BK | 1633.90 € | **1559.50 €** | 10.0 % | **5.0 %** | 770.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE NRK 6192 AW4 | 539.00 € | **464.90 €** | 21.8 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE85Q8F QLED | 1625.90 € | **1551.90 €** | 10.0 % | **5.0 %** | 933.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Saros 20 Sonic Complete Black | 1625.50 € | **1551.50 €** | 10.0 % | **5.0 %** | 1161.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Saros 20 Sonic Complete White | 1625.50 € | **1551.50 €** | 10.0 % | **5.0 %** | 1161.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový stojanový vysávač MOVA M50 Ultra na mokré... | 847.50 € | **773.90 €** | 15.0 % | **5.0 %** | 348.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung HW-T420/EN | 179.00 € | **105.50 €** | 78.9 % | **5.4 %** | 95.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 65C8K QD-MiniLED 4K SMART Google TV | 1612.90 € | **1539.50 €** | 10.0 % | **5.0 %** | 1153.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň QiDi Q2 Combo | 842.00 € | **768.90 €** | 15.0 % | **5.0 %** | 538.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GSGV80PYLD | 1610.00 € | **1536.90 €** | 10.0 % | **5.0 %** | 1118.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26+ 5G 512GB Blue | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 820.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWF 420 BL | 239.00 € | **167.90 €** | 49.5 % | **5.0 %** | 157.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R4142PS | 319.00 € | **248.00 €** | 38.9 % | **8.0 %** | 248.20 € | stávame sa najlacnejší |
| Roborock Saros 20 Black | 1542.50 € | **1472.00 €** | 10.0 % | **5.0 %** | 987.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| VIVO X300 Pro 16+512GB Dune Brown | 1551.90 € | **1481.50 €** | 10.0 % | **5.0 %** | 1134.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| VIVO X300 Pro 16+512GB Phantom Black | 1551.90 € | **1481.50 €** | 10.0 % | **5.0 %** | 1139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA S70 Roller RVC (čierna) | 807.50 € | **737.50 €** | 15.0 % | **5.0 %** | 498.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robotický vysávač MOVA P70 Pro Ultra | 807.50 € | **737.50 €** | 15.0 % | **5.0 %** | 543.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE48S95H | 1542.90 € | **1472.90 €** | 10.0 % | **5.0 %** | 1437.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 85T8C QLED 4K SMART Google TV | 1523.50 € | **1453.90 €** | 10.0 % | **5.0 %** | 1115.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 75C7K QD-MiniLED 4K SMART Google TV | 1523.50 € | **1453.90 €** | 10.0 % | **5.0 %** | 1419.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 700 FLEX MaxiFlex EES48200L | 529.00 € | **459.50 €** | 21.0 % | **5.1 %** | 347.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica TFB 126 MB | 309.00 € | **239.90 €** | 35.3 % | **5.1 %** | 229.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 410090000 | 399.00 € | **330.00 €** | 29.2 % | **6.9 %** | 330.30 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Photon P1 | 787.50 € | **719.00 €** | 15.0 % | **5.0 %** | 684.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Blitz 203 PLUS | 788.50 € | **720.00 €** | 15.0 % | **5.0 %** | 699.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 669.00 € | **601.00 €** | 16.9 % | **5.0 %** | 438.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **998.90 €** | 15.0 % | **7.7 %** | 999.00 € | stávame sa najlacnejší |
| Samsung Mini LED UE85M80H | 1477.50 € | **1410.50 €** | 10.0 % | **5.0 %** | 1316.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE85Q6F QLED | 1445.90 € | **1379.90 €** | 10.0 % | **5.0 %** | 819.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro Max 256GB Silver | 1445.90 € | **1379.90 €** | 10.0 % | **5.0 %** | 1199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro Max 256GB Deep Blue | 1445.90 € | **1379.90 €** | 10.0 % | **5.0 %** | 1200.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro Max 256GB Orange | 1445.90 € | **1379.90 €** | 10.0 % | **5.0 %** | 1202.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Klimatizace MW POWER NORD 12K WIFI V1, 12000BTu, R32 | 761.50 € | **695.50 €** | 15.0 % | **5.0 %** | 672.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB53DG706BS9EO | 1439.50 € | **1374.00 €** | 10.0 % | **5.0 %** | 999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Flip8 5G 256GB Cream | 1431.90 € | **1366.50 €** | 10.0 % | **5.0 %** | 869.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Flip8 5G 256GB Graphite | 1431.90 € | **1366.50 €** | 10.0 % | **5.0 %** | 869.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Flip8 5G 256GB Pink | 1431.90 € | **1366.50 €** | 10.0 % | **5.0 %** | 869.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SlowJuicer SJ770 XXL Deluxe | 189.00 € | **123.90 €** | 60.2 % | **5.0 %** | 107.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Saeco Aurora M2 | 1426.50 € | **1361.50 €** | 10.0 % | **5.0 %** | 1199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 954.00 € | **889.90 €** | 15.0 % | **7.3 %** | 890.00 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 8" (200/1200) | 763.00 € | **699.90 €** | 15.0 % | **5.5 %** | 699.95 € | stávame sa najlacnejší |
| Electrolux EW6F3484C | 511.99 € | **448.90 €** | 19.8 % | **5.1 %** | 399.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 22 GEN 3 (GS2203) | 719.00 € | **656.90 €** | 15.0 % | **5.1 %** | 452.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kávovar MOVA S20 Pro (strieborný) | 718.50 € | **656.50 €** | 15.0 % | **5.1 %** | 484.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality CR-Scan Otter 3D Scanner | 715.50 € | **653.50 €** | 15.0 % | **5.0 %** | 648.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality Falcon 2 Pro S 22W laserový gravírovací stroj | 819.50 € | **757.90 €** | 15.0 % | **6.4 %** | 758.00 € | stávame sa najlacnejší |
| Apple iPhone 17 Pro 256GB Cosmic Orange | 1355.50 € | **1293.90 €** | 10.0 % | **5.0 %** | 1105.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro 256GB Silver | 1355.50 € | **1293.90 €** | 10.0 % | **5.0 %** | 1105.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro 256GB Deep Blue | 1355.50 € | **1293.90 €** | 10.0 % | **5.0 %** | 1115.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LIB60420CK | 299.00 € | **237.90 €** | 32.1 % | **5.1 %** | 219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.90 €** | 15.0 % | **5.4 %** | 670.00 € | stávame sa najlacnejší |
| Samsung Mini LED UE85M70H | 1320.90 € | **1260.50 €** | 10.0 % | **5.0 %** | 1190.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ESM48310SX | 589.00 € | **528.90 €** | 17.0 % | **5.0 %** | 498.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality Ender-5 Max | 689.50 € | **629.90 €** | 15.0 % | **5.0 %** | 524.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 85T69C QLED 4K SMART Google TV | 1304.50 € | **1245.00 €** | 10.0 % | **5.0 %** | 929.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 85P7K QLED 4K SMART Google TV | 1304.50 € | **1245.00 €** | 10.0 % | **5.0 %** | 998.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LFP616X | 279.00 € | **219.50 €** | 33.5 % | **5.0 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blaupunkt 55MBG7000S | 569.00 € | **509.90 €** | 17.2 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8401A | 169.00 € | **109.90 €** | 62.0 % | **5.3 %** | 109.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje W2PNEI84A1SW | 439.00 € | **380.00 €** | 35.3 % | **17.1 %** | 380.24 € | stávame sa najlacnejší |
| ETA 323290000 | 289.99 € | **231.90 €** | 31.5 % | **5.2 %** | 154.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **221.00 €** | 37.7 % | **9.1 %** | 221.46 € | stávame sa najlacnejší |
| Samsung OLED QE48S90H | 1274.90 € | **1217.00 €** | 10.0 % | **5.0 %** | 1124.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA WX-051/MusicCast 50 WHITE | 599.00 € | **541.50 €** | 16.2 % | **5.0 %** | 528.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75Q8F QLED | 1265.90 € | **1208.50 €** | 10.0 % | **5.0 %** | 686.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OBSBOT Tail Air PTZ kamera | 659.00 € | **601.90 €** | 15.0 % | **5.0 %** | 565.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6346XOK | 329.00 € | **271.90 €** | 27.2 % | **5.2 %** | 247.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE75QN70H | 1246.90 € | **1190.50 €** | 10.0 % | **5.0 %** | 1149.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE65LS03F QLED THE FRAME | 1237.50 € | **1181.50 €** | 10.0 % | **5.0 %** | 765.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Saeco Aurora B2 | 1233.90 € | **1177.90 €** | 10.0 % | **5.0 %** | 999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame QE55LS03H | 1234.50 € | **1178.50 €** | 10.0 % | **5.0 %** | 1092.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook 16 (M1607GA-MB015W) | 1231.90 € | **1175.90 €** | 10.0 % | **5.0 %** | 1147.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA TFB 112 TKW | 379.00 € | **323.50 €** | 23.0 % | **5.0 %** | 286.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Flip7 FE 5G 256GB White | 1217.90 € | **1162.50 €** | 10.0 % | **5.0 %** | 670.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EIT60443X | 489.00 € | **433.90 €** | 18.4 % | **5.0 %** | 324.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 | 635.90 € | **580.90 €** | 15.0 % | **5.1 %** | 565.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| VIVO X300 16+512GB Pink | 1197.50 € | **1142.90 €** | 10.0 % | **5.0 %** | 932.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ESA47310SW | 529.00 € | **474.50 €** | 17.1 % | **5.0 %** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SSA 6110 OCW | 485.00 € | **430.90 €** | 18.3 % | **5.1 %** | 389.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB38C7B6AS9/EF | 1183.50 € | **1129.50 €** | 10.0 % | **5.0 %** | 899.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Mini LED UE75M80H | 1182.90 € | **1129.00 €** | 10.0 % | **5.0 %** | 937.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Crystal UHD UE85U8072H | 1182.90 € | **1129.00 €** | 10.0 % | **5.0 %** | 1025.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VC 1622 M | 555.00 € | **501.50 €** | 16.3 % | **5.1 %** | 458.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE RB493PW | 259.00 € | **205.50 €** | 32.5 % | **5.1 %** | 188.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZVC9140D | 319.00 € | **265.90 €** | 26.0 % | **5.0 %** | 264.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 805.00 € | **751.90 €** | 15.0 % | **7.4 %** | 752.00 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 559.00 € | **506.00 €** | 18.2 % | **7.0 %** | 506.10 € | stávame sa najlacnejší |
| Bezdrôtový mopový stojanový vysávač MOVA X4 Pro | 605.00 € | **552.90 €** | 15.0 % | **5.1 %** | 264.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 700 FLEX MaxiFlex EEM48200IX | 599.00 € | **546.90 €** | 15.0 % | **5.0 %** | 409.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Saturn 4 Ultra 16K | 603.50 € | **551.50 €** | 15.0 % | **5.1 %** | 349.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **347.00 €** | 22.9 % | **6.9 %** | 347.40 € | stávame sa najlacnejší |
| WHIRLPOOL WS Q2160 NE | 319.00 € | **267.90 €** | 25.2 % | **5.1 %** | 232.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG RH18U8AVCW | 1131.00 € | **1079.90 €** | 10.0 % | **5.0 %** | 970.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Saros 10r | 1125.50 € | **1074.50 €** | 10.0 % | **5.0 %** | 795.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5RCNE565HGB | 1111.90 € | **1061.00 €** | 10.0 % | **5.0 %** | 1033.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Slate 13 | 588.00 € | **537.50 €** | 15.0 % | **5.1 %** | 511.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K2 Pro | 584.00 € | **533.50 €** | 15.0 % | **5.1 %** | 523.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 678.50 € | **628.00 €** | 15.0 % | **6.5 %** | 628.23 € | stávame sa najlacnejší |
| ASUS TUF Gaming A16 (FA607NUQ-RL094W) | 1114.90 € | **1064.50 €** | 10.0 % | **5.0 %** | 934.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GKS5C71CLI | 559.00 € | **508.90 €** | 15.4 % | **5.0 %** | 485.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-777 BLACK 2 kartony | 899.00 € | **848.90 €** | 15.6 % | **9.1 %** | 849.00 € | stávame sa najlacnejší |
| Samsung Galaxy S25 5G 256GB Blue Black | 1101.50 € | **1051.50 €** | 10.0 % | **5.0 %** | 555.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 256GB Light Blue | 1101.50 € | **1051.50 €** | 10.0 % | **5.0 %** | 565.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 256GB Silver | 1101.50 € | **1051.50 €** | 10.0 % | **5.0 %** | 565.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBV7280BEV | 1084.50 € | **1034.90 €** | 10.0 % | **5.0 %** | 1034.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EL61A4UG | 209.00 € | **159.50 €** | 37.7 % | **5.1 %** | 118.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 5G 256GB Black | 1073.50 € | **1024.50 €** | 10.0 % | **5.0 %** | 590.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled digitální fotobinokulární Levenhuk Kelvin... | 563.50 € | **514.50 €** | 15.0 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BOS6737E06B | 319.00 € | **270.00 €** | 25.9 % | **6.6 %** | 270.39 € | stávame sa najlacnejší |
| SOVEREIGN 140/45CM 50KG PROFESIONÁLNÍ KOŽENÝ BOXOVAC... | 559.50 € | **510.90 €** | 15.0 % | **5.0 %** | 348.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický trenažér pro Nordic walking LOOP15 | 559.50 € | **510.90 €** | 15.0 % | **5.0 %** | 489.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE55LS03F QLED THE FRAME | 1066.00 € | **1017.50 €** | 10.0 % | **5.0 %** | 617.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 24 Plus GS2402 | 844.50 € | **796.00 €** | 15.0 % | **8.4 %** | 796.29 € | stávame sa najlacnejší |
| Electrolux EW9F7617SC | 1064.90 € | **1016.50 €** | 10.0 % | **5.0 %** | 759.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Měnič napětí KEMOT PROsolar-5000 URZ3420 3500W 48V 2... | 554.00 € | **505.90 €** | 15.0 % | **5.0 %** | 450.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 15 5G 12/512GB zelená | 1053.90 € | **1005.90 €** | 10.0 % | **5.0 %** | 733.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 15 5G 12/512GB černá | 1053.90 € | **1005.90 €** | 10.0 % | **5.0 %** | 759.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17T Pro 12/1024GB Fialová | 1053.90 € | **1005.90 €** | 10.0 % | **5.0 %** | 893.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17T Pro 12/1024GB Modrá | 1053.90 € | **1005.90 €** | 10.0 % | **5.0 %** | 897.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 15 5G 12/512GB bílá | 1053.90 € | **1005.90 €** | 10.0 % | **5.0 %** | 927.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB38C607AS9/EF | 1060.50 € | **1012.50 €** | 10.0 % | **5.0 %** | 749.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75QN70F NEO QLED | 1061.50 € | **1013.50 €** | 10.0 % | **5.0 %** | 849.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C1 Max | 553.90 € | **505.90 €** | 15.0 % | **5.0 %** | 505.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook 16 (M1605NAQ-OLED048W) | 1045.00 € | **997.50 €** | 10.0 % | **5.0 %** | 978.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 256GB Lavender | 1035.90 € | **988.50 €** | 10.0 % | **5.0 %** | 815.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 256GB Mist Blue | 1035.90 € | **988.50 €** | 10.0 % | **5.0 %** | 815.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 256GB Sage | 1035.90 € | **988.50 €** | 10.0 % | **5.0 %** | 815.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 16 Plus 128GB Pink | 1035.90 € | **988.90 €** | 10.0 % | **5.0 %** | 775.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP VICTUS 15-fa2721nc (B7VG2EA) | 1033.50 € | **986.50 €** | 10.0 % | **5.0 %** | 896.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 7 Aero AI (C2JR2EA) | 1022.50 € | **975.90 €** | 10.0 % | **5.0 %** | 957.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 AirDry EEA12100L | 449.00 € | **402.50 €** | 17.2 % | **5.1 %** | 312.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EUOC94DB | 249.00 € | **202.50 €** | 29.2 % | **5.1 %** | 169.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 AirDry EEA22100L | 449.00 € | **402.50 €** | 17.2 % | **5.1 %** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EL61C3DB | 189.00 € | **142.50 €** | 39.6 % | **5.2 %** | 127.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D Tlačiareň Creality K1 MAX | 543.50 € | **497.00 €** | 15.0 % | **5.2 %** | 497.06 € | stávame sa najlacnejší |
| Gorenje RK4182PS4 | 379.00 € | **332.50 €** | 26.3 % | **10.8 %** | 332.63 € | stávame sa najlacnejší |
| Electrolux EW9D787KCC | 1026.90 € | **980.50 €** | 10.0 % | **5.0 %** | 836.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux PD82-4MB světle modrá | 219.00 € | **172.90 €** | 33.2 % | **5.2 %** | 139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung UE85U8072F UHD | 1013.50 € | **967.50 €** | 10.0 % | **5.0 %** | 835.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 529.50 € | **483.50 €** | 15.1 % | **5.1 %** | 444.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 3 AI 14-ha0002nc (C2FD2EA) | 1009.90 € | **963.90 €** | 10.0 % | **5.0 %** | 945.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 635.90 € | **589.90 €** | 15.0 % | **6.7 %** | 589.94 € | stávame sa najlacnejší |
| Samsung Galaxy S25 5G 128GB Blue Black | 1007.00 € | **961.50 €** | 10.0 % | **5.0 %** | 508.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 1064.90 € | **1019.50 €** | 15.0 % | **10.1 %** | 1019.67 € | stávame sa najlacnejší |
| Waydoo Subnado ponorné - štartovacia sada | 517.50 € | **472.50 €** | 15.0 % | **5.0 %** | 282.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 16 GT156 | 517.50 € | **472.50 €** | 15.0 % | **5.0 %** | 363.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový vysávač MOVA M50 Pro s mopom | 518.50 € | **473.90 €** | 15.0 % | **5.1 %** | 288.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 618190020 | 164.99 € | **120.90 €** | 43.5 % | **5.1 %** | 109.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 3 AI 15-fn0001nc (C2FF0EA) | 961.90 € | **918.00 €** | 10.0 % | **5.0 %** | 900.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo Edge 5V1 Black | 958.50 € | **914.90 €** | 10.0 % | **5.0 %** | 569.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň CREALITY K2 SE Combo | 500.50 € | **457.00 €** | 15.0 % | **5.0 %** | 269.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MacBook Neo 8/512GB silver MHFC4CZ | 967.00 € | **923.50 €** | 10.0 % | **5.1 %** | 807.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool GOS 6415/NB1 | 319.00 € | **275.50 €** | 21.6 % | **5.0 %** | 187.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MacBook Neo 8/512GB citrus MHFE4CZ | 967.00 € | **923.50 €** | 10.0 % | **5.1 %** | 854.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux Série 300 LIL61434C | 369.00 € | **325.50 €** | 19.1 % | **5.0 %** | 261.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 5 AI 16-ag1001nc (C09WPEA) | 957.00 € | **913.50 €** | 10.0 % | **5.0 %** | 896.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT32HF2003 | 159.00 € | **115.50 €** | 45.0 % | **5.3 %** | 115.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **411.50 €** | 18.3 % | **7.0 %** | 411.90 € | stávame sa najlacnejší |
| Samsung QE55S90F OLED | 962.90 € | **919.50 €** | 10.0 % | **5.1 %** | 689.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 15 5G 12/256GB zelená | 948.50 € | **905.50 €** | 10.0 % | **5.0 %** | 707.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F8 Ultra 16/512GB Denim Blue | 945.90 € | **902.90 €** | 10.0 % | **5.0 %** | 729.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 15 5G 12/256GB černá | 948.50 € | **905.50 €** | 10.0 % | **5.0 %** | 807.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 15 5G 12/256GB bílá | 948.50 € | **905.50 €** | 10.0 % | **5.0 %** | 857.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 96.0 % | **11.9 %** | 57.23 € | stávame sa najlacnejší |
| Samsung S731 Galaxy S25 FE 256GB White | 933.50 € | **890.90 €** | 10.0 % | **5.0 %** | 490.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung S731 Galaxy S25 FE 256GB Blue | 933.50 € | **890.90 €** | 10.0 % | **5.0 %** | 503.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 16 GT1602 (2.5K) | 497.00 € | **454.50 €** | 14.9 % | **5.1 %** | 363.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TT-S303 BLACK | 529.00 € | **486.50 €** | 14.2 % | **5.0 %** | 466.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 618190040 | 164.99 € | **122.90 €** | 41.0 % | **5.0 %** | 109.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K1C 2025 | 483.50 € | **441.50 €** | 15.0 % | **5.1 %** | 348.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Bar 800 MK2 Soundbar | 917.50 € | **875.90 €** | 10.0 % | **5.0 %** | 820.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook 16 (X1607AA-MB002W) | 913.50 € | **871.90 €** | 10.1 % | **5.0 %** | 837.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TT-N503/MusicCast VINYL 500 White | 799.00 € | **757.50 €** | 10.8 % | **5.0 %** | 688.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Měnič napětí EPever IPower IP3000-42-Plus-T 3000W 48V | 473.00 € | **431.90 €** | 15.0 % | **5.0 %** | 409.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE65Q8F QLED | 902.90 € | **861.90 €** | 10.0 % | **5.0 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE50LS03F QLED THE FRAME | 894.90 € | **853.90 €** | 10.0 % | **5.0 %** | 549.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5BCNC256SW | 896.50 € | **855.50 €** | 10.0 % | **5.0 %** | 702.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 471.50 € | **430.50 €** | 15.0 % | **5.0 %** | 357.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo Edge 2 Black | 896.50 € | **855.50 €** | 10.1 % | **5.0 %** | 786.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo Edge 2 White | 896.50 € | **855.50 €** | 10.1 % | **5.0 %** | 786.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlový zosilňovač HiFiMAN EF500 | 575.00 € | **534.00 €** | 15.0 % | **6.8 %** | 534.24 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 593.50 € | **552.50 €** | 15.0 % | **7.1 %** | 552.80 € | stávame sa najlacnejší |
| Beko BDIN38646D | 535.00 € | **494.00 €** | 15.9 % | **7.0 %** | 494.30 € | stávame sa najlacnejší |
| LENOVO IdeaPad Slim 3 (83K100DNCK) | 894.50 € | **853.90 €** | 10.0 % | **5.0 %** | 632.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SOVEREIGN 160/45CM PRÁZDNÝ PROFESIONÁLNÍ KOŽENÝ BOXO... | 468.50 € | **427.90 €** | 15.0 % | **5.0 %** | 375.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Mini LED UE75M70H | 891.50 € | **850.90 €** | 10.0 % | **5.0 %** | 819.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pioneer PLX-1000 | 900.00 € | **859.50 €** | 10.0 % | **5.1 %** | 842.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-SW050 BLACK | 239.00 € | **198.50 €** | 31.5 % | **9.2 %** | 198.58 € | stávame sa najlacnejší |
| YAMAHA A-S701 BLACK | 849.00 € | **808.50 €** | 14.7 % | **9.3 %** | 808.61 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R12 V2 RS081 (PC) | 462.00 € | **421.90 €** | 15.0 % | **5.0 %** | 408.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BMI201AG1X | 239.00 € | **198.90 €** | 26.4 % | **5.2 %** | 168.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 344790010 | 159.99 € | **119.90 €** | 40.4 % | **5.2 %** | 83.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Huawei Watch Ultimate Green | 887.50 € | **847.50 €** | 10.0 % | **5.0 %** | 636.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň CREALITY SparkX i7 Combo | 465.50 € | **425.50 €** | 15.0 % | **5.1 %** | 337.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 5 Flip fp-0301nc (CF5V7EA) | 875.50 € | **835.50 €** | 10.1 % | **5.0 %** | 819.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6547FXK | 329.00 € | **289.50 €** | 19.4 % | **5.1 %** | 241.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 75T69C QLED 4K SMART Google TV | 866.90 € | **827.50 €** | 10.0 % | **5.0 %** | 609.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 75P7K QLED 4K SMART Google TV | 866.90 € | **827.50 €** | 10.0 % | **5.0 %** | 675.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-V6A Black | 699.00 € | **659.90 €** | 11.3 % | **5.1 %** | 622.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE65QN70H | 858.90 € | **819.90 €** | 10.0 % | **5.0 %** | 764.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENT7MD36X | 853.50 € | **814.50 €** | 10.0 % | **5.0 %** | 779.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Centauri Carbon 2 Combo | 449.50 € | **410.50 €** | 15.0 % | **5.0 %** | 376.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE BM201AG1X | 179.00 € | **140.00 €** | 34.4 % | **5.1 %** | 140.29 € | stávame sa najlacnejší |
| LG GBBS312ASW | 852.50 € | **813.90 €** | 10.0 % | **5.0 %** | 678.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 151390000 | 139.99 € | **101.50 €** | 52.0 % | **10.2 %** | 101.67 € | stávame sa najlacnejší |
| Samsung S731 Galaxy S25 FE 128GB Navy | 850.90 € | **812.50 €** | 10.0 % | **5.1 %** | 416.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IdeaPad Slim 3 (83KA0043CK) | 849.90 € | **811.50 €** | 10.0 % | **5.1 %** | 721.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE50QN90F NEO QLED | 849.90 € | **811.50 €** | 10.0 % | **5.0 %** | 795.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW7TN13372C | 639.00 € | **600.90 €** | 11.7 % | **5.0 %** | 475.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MacBook Neo 8/256GB citrus MHFD4CZ | 841.00 € | **802.90 €** | 10.0 % | **5.0 %** | 732.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MacBook Neo 8/256GB silver MHFA4CZ | 841.00 € | **802.90 €** | 10.0 % | **5.0 %** | 732.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB38T607BS9/EF | 841.50 € | **803.50 €** | 10.0 % | **5.1 %** | 602.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE65QN85F NEO QLED | 839.90 € | **801.90 €** | 10.0 % | **5.0 %** | 699.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedal Set - gas + brake Moza Racing CRP2 RS066 | 435.90 € | **397.90 €** | 15.0 % | **5.0 %** | 373.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B7RCNA408HXP | 833.90 € | **795.90 €** | 10.0 % | **5.0 %** | 795.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 55Q7C QD-MiniLED 4K SMART Google TV | 820.50 € | **782.90 €** | 10.1 % | **5.0 %** | 549.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 65Q6C QD-MiniLED 4K SMART Google TV | 820.50 € | **782.90 €** | 10.1 % | **5.0 %** | 739.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K2 Pro Combo | 786.50 € | **748.90 €** | 15.0 % | **9.5 %** | 749.00 € | stávame sa najlacnejší |
| AMICA VD1442AM | 485.00 € | **447.50 €** | 13.9 % | **5.1 %** | 350.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare VITURE XR Luma | 431.50 € | **394.00 €** | 15.0 % | **5.0 %** | 348.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64325SDX | 299.00 € | **261.50 €** | 20.1 % | **5.0 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SOVEREIGN 130/35CM 30KG PROFESIONÁLNÍ KOŽENÝ BOXOVAC... | 433.90 € | **396.50 €** | 15.0 % | **5.1 %** | 273.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG RC91V9AV4N | 796.50 € | **759.90 €** | 10.1 % | **5.0 %** | 628.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 700 SENSE LFV619K | 669.00 € | **632.50 €** | 11.1 % | **5.0 %** | 455.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OBSBOT Tiny 3 diaľkové ovládanie Combo | 425.00 € | **388.50 €** | 15.0 % | **5.1 %** | 349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gaming Set - Base R5 + Steering Wheel ES + Pedals SR... | 426.00 € | **389.50 €** | 14.9 % | **5.1 %** | 365.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S301 BLACK | 439.00 € | **402.50 €** | 14.6 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE RB492PW | 239.00 € | **202.50 €** | 24.1 % | **5.1 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vzpriamený vysávač MOVA G70 | 422.90 € | **386.50 €** | 15.0 % | **5.1 %** | 76.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L8180 | 805.90 € | **769.50 €** | 10.0 % | **5.1 %** | 678.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock F25 Ultra | 791.90 € | **755.90 €** | 10.0 % | **5.0 %** | 548.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation 5 Console 1TB + 2x DS5 | 791.90 € | **755.90 €** | 10.0 % | **5.0 %** | 589.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK MONACO ED 10x42 | 419.50 € | **383.50 €** | 15.0 % | **5.1 %** | 296.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality Halot-Mage S 3D Printer | 415.50 € | **379.50 €** | 15.0 % | **5.0 %** | 334.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S301 SILVER | 439.00 € | **403.00 €** | 14.4 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Crystal UHD UE75U8072H | 788.50 € | **752.50 €** | 10.0 % | **5.0 %** | 739.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 80 | 406.90 € | **371.50 €** | 15.0 % | **5.0 %** | 320.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 3015 Arcus 2GEN s Wi-Fi | 409.00 € | **373.90 €** | 14.9 % | **5.1 %** | 263.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gaggia Cadorna Prestige | 774.00 € | **738.90 €** | 10.0 % | **5.0 %** | 633.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SOVEREIGN 140/45CM PRÁZDNÝ PROFESIONÁLNÍ KOŽENÝ BOXO... | 403.50 € | **368.50 €** | 15.0 % | **5.1 %** | 348.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 28.0 % | **9.2 %** | 204.08 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 24.9 % | **9.2 %** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 24.7 % | **9.0 %** | 244.20 € | stávame sa najlacnejší |
| ELECTROLUX LFG719X | 559.00 € | **524.50 €** | 12.0 % | **5.1 %** | 376.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZIGNES 120W Solar Panel | 403.00 € | **368.50 €** | 15.0 % | **5.1 %** | 303.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás Urevo FoldiMix 5L (čierny) | 397.50 € | **363.00 €** | 15.0 % | **5.0 %** | 305.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE65QN80F NEO QLED | 760.50 € | **726.00 €** | 10.0 % | **5.0 %** | 699.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 116.00 € | **81.50 €** | 49.9 % | **5.3 %** | 77.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL PartyBox 520 | 753.90 € | **719.50 €** | 10.0 % | **5.0 %** | 571.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá do uší HiFiMAN RE2000 Pro Gold | 395.00 € | **360.90 €** | 14.9 % | **5.0 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Saturn 4 Ultra | 395.00 € | **360.90 €** | 15.0 % | **5.1 %** | 349.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung UE75U8072F UHD | 745.90 € | **711.90 €** | 10.0 % | **5.0 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 65T8C QLED 4K SMART Google TV | 754.50 € | **720.50 €** | 10.0 % | **5.1 %** | 539.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-P41 BLACK | 329.00 € | **295.00 €** | 27.4 % | **14.3 %** | 295.30 € | stávame sa najlacnejší |
| TCL 50C803 QLED | 738.50 € | **704.90 €** | 10.0 % | **5.0 %** | 692.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB38C7B6D41/EF | 733.50 € | **699.90 €** | 10.1 % | **5.0 %** | 694.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K2 Combo | 532.50 € | **498.90 €** | 15.0 % | **7.7 %** | 499.00 € | stávame sa najlacnejší |
| Samsung Mini LED UE65M80H | 746.00 € | **712.50 €** | 10.0 % | **5.1 %** | 599.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko ATP5500N | 189.00 € | **155.50 €** | 27.8 % | **5.1 %** | 121.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IdeaPad Flex 5 (82XX00JKCK) | 745.00 € | **711.50 €** | 10.0 % | **5.1 %** | 698.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 65P7K QLED 4K SMART Google TV | 732.90 € | **699.50 €** | 10.1 % | **5.0 %** | 493.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 Pro 12/512GB Gray (72217) | 739.90 € | **706.50 €** | 10.0 % | **5.0 %** | 569.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 Pro 12/512GB Blue (72195) | 739.90 € | **706.50 €** | 10.0 % | **5.0 %** | 586.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 Pro 12/512GB Green (72207) | 739.90 € | **706.50 €** | 10.0 % | **5.0 %** | 617.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW8D394MC | 735.90 € | **702.50 €** | 10.1 % | **5.1 %** | 627.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6192AXL4 | 399.00 € | **365.90 €** | 19.6 % | **9.7 %** | 365.93 € | stávame sa najlacnejší |
| iRobot Roomba 105 Combo (Black) | 239.00 € | **205.90 €** | 21.9 % | **5.0 %** | 173.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE55Q8F QLED | 722.90 € | **689.90 €** | 10.0 % | **5.0 %** | 446.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F8 PRO 12/512GB Blue | 730.90 € | **697.90 €** | 10.0 % | **5.0 %** | 495.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S880DBMKII 2.0 (biele) | 381.90 € | **348.90 €** | 15.0 % | **5.1 %** | 221.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO YOGA TAB PLUS 8/256GB ZAEG0039CZ | 732.50 € | **699.50 €** | 10.0 % | **5.1 %** | 627.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi TV A Pro 75 2026 | 729.50 € | **696.50 €** | 10.0 % | **5.0 %** | 683.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE55QN85F NEO QLED | 724.90 € | **692.00 €** | 10.0 % | **5.0 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation®5 Console–1TB | 724.90 € | **692.00 €** | 10.0 % | **5.0 %** | 589.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba Plus 505 Combo + WH | 713.50 € | **680.90 €** | 10.0 % | **5.0 %** | 584.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko GNO5323XPN | 721.50 € | **688.90 €** | 10.0 % | **5.0 %** | 602.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBS312BEV | 718.50 € | **685.90 €** | 10.0 % | **5.0 %** | 608.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bežecký pás MERACH MR-T12B1-EU (čierny) | 380.00 € | **347.50 €** | 15.0 % | **5.1 %** | 215.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MIA 655 AG | 339.00 € | **306.90 €** | 16.1 % | **5.1 %** | 271.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá čistička vzduchu GARNI 45T OneCare | 373.00 € | **340.90 €** | 14.9 % | **5.0 %** | 330.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 23480-56/RH | 219.00 € | **186.90 €** | 23.0 % | **5.0 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica FK3666.2DFZHC | 705.90 € | **673.90 €** | 10.0 % | **5.0 %** | 439.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Akumulátorový vertikálny vysávač MOVA I10 | 366.50 € | **334.50 €** | 15.0 % | **5.0 %** | 128.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG DV90DG52A0ABLE | 706.90 € | **674.90 €** | 10.0 % | **5.0 %** | 529.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K2 SE | 373.50 € | **341.50 €** | 14.9 % | **5.1 %** | 269.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 369.50 € | **337.50 €** | 15.0 % | **5.0 %** | 271.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba Plus 505 Combo + BL | 705.50 € | **673.50 €** | 10.0 % | **5.0 %** | 619.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gaming Set - Base R3 + Steering Wheel ES + Pedals SR... | 366.50 € | **334.50 €** | 15.1 % | **5.0 %** | 309.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IdeaPad Slim 3 (83K00055CK) | 701.50 € | **669.50 €** | 10.1 % | **5.1 %** | 655.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal QB951838 | 712.50 € | **680.50 €** | 10.0 % | **5.1 %** | 669.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17T 12/256GB Fialová | 695.50 € | **663.90 €** | 10.0 % | **5.0 %** | 478.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17T 12/256GB Modrá | 695.50 € | **663.90 €** | 10.0 % | **5.0 %** | 480.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LRT7ME39X | 696.50 € | **664.90 €** | 10.0 % | **5.0 %** | 622.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 2055 Arcus 2GEN s Wi-Fi | 364.50 € | **332.90 €** | 15.1 % | **5.1 %** | 298.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 100 | 381.50 € | **349.90 €** | 15.1 % | **5.5 %** | 349.95 € | stávame sa najlacnejší |
| Electrolux EW7D484UCC | 686.50 € | **655.00 €** | 10.1 % | **5.0 %** | 556.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 65T69C QLED 4K SMART Google TV | 688.90 € | **657.50 €** | 10.0 % | **5.0 %** | 469.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE55QN80F NEO QLED | 686.90 € | **655.50 €** | 10.0 % | **5.0 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE43LS03F QLED THE FRAME | 687.50 € | **656.50 €** | 10.0 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux KGS64362XX | 269.00 € | **238.00 €** | 18.7 % | **5.0 %** | 180.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 279.00 € | **248.00 €** | 22.8 % | **9.1 %** | 248.37 € | stávame sa najlacnejší |
| Samsung HW-Q930F Soundbar | 680.90 € | **650.00 €** | 10.0 % | **5.0 %** | 528.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Krups EA875E10 | 674.90 € | **644.00 €** | 10.1 % | **5.0 %** | 560.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK BLAZE BASE 100 | 355.90 € | **325.00 €** | 15.0 % | **5.0 %** | 275.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA K30 akumulátorový mopový stojanový vysávač | 352.50 € | **321.90 €** | 15.0 % | **5.0 %** | 164.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2750DB MKII 2.0 (hnedé) | 353.50 € | **322.90 €** | 15.0 % | **5.0 %** | 218.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Základňa volantu MOZA RACING R9 V3 RS080 (PC) | 352.50 € | **321.90 €** | 15.1 % | **5.1 %** | 318.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WP C9 WBS EE | 678.00 € | **647.50 €** | 10.0 % | **5.1 %** | 574.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GW642CLI | 279.00 € | **248.50 €** | 17.9 % | **5.0 %** | 199.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 398.50 € | **368.00 €** | 15.1 % | **6.3 %** | 368.39 € | stávame sa najlacnejší |
| ETA 013390010 | 129.99 € | **99.50 €** | 37.2 % | **5.0 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE55QN70H | 664.90 € | **634.50 €** | 10.0 % | **5.0 %** | 549.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE MAK 80/850 AZ-M | 360.00 € | **329.90 €** | 15.0 % | **5.4 %** | 329.95 € | stávame sa najlacnejší |
| ELECTROLUX KGS 6404 SX | 199.00 € | **168.90 €** | 23.9 % | **5.1 %** | 150.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F8 PRO 12/256GB Black | 666.50 € | **636.50 €** | 10.0 % | **5.1 %** | 465.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F8 PRO 12/256GB Blue | 666.50 € | **636.50 €** | 10.0 % | **5.1 %** | 485.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA M50 Vysávač na mokré a suché vysávanie | 345.50 € | **315.50 €** | 15.0 % | **5.0 %** | 208.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L8160 | 651.50 € | **621.50 €** | 10.1 % | **5.0 %** | 533.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo 20x PLUS | 347.50 € | **317.50 €** | 15.0 % | **5.1 %** | 309.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 439.00 € | **409.00 €** | 14.8 % | **6.9 %** | 409.40 € | stávame sa najlacnejší |
| TCL 50Q7C QD-MiniLED 4K SMART Google TV | 649.50 € | **619.90 €** | 10.1 % | **5.1 %** | 531.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Montážna jednotka DJI Zenmuse X9 M | 341.50 € | **311.90 €** | 15.1 % | **5.1 %** | 233.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BOSX6747A01BG | 519.00 € | **489.50 €** | 11.4 % | **5.1 %** | 302.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Aurzen Eazze D1 Max | 346.00 € | **316.50 €** | 15.0 % | **5.2 %** | 207.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 341.00 € | **311.50 €** | 14.9 % | **5.0 %** | 271.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE65Q7F QLED | 647.90 € | **618.50 €** | 10.0 % | **5.0 %** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra X | 337.90 € | **308.50 €** | 15.0 % | **5.0 %** | 286.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 Lite s diaľkovým ovládan... | 339.00 € | **309.90 €** | 15.0 % | **5.1 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WMF250G | 319.00 € | **289.90 €** | 15.7 % | **5.1 %** | 227.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OBSBOT Tiny 2 webcam | 338.00 € | **308.90 €** | 15.0 % | **5.1 %** | 289.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje MO 20 E1S | 95.00 € | **65.90 €** | 52.2 % | **5.6 %** | 64.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW7D384UCC | 642.50 € | **613.50 €** | 10.0 % | **5.1 %** | 501.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 Pro 8/256GB Gray (72105) | 631.50 € | **602.50 €** | 10.1 % | **5.0 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 Pro 8/256GB Green (72073) | 631.50 € | **602.50 €** | 10.1 % | **5.0 %** | 502.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 Pro 8/256GB Blue (72084) | 631.50 € | **602.50 €** | 10.1 % | **5.0 %** | 519.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S1000W 2.0 (hnedé) | 340.50 € | **311.50 €** | 14.9 % | **5.2 %** | 266.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 793.90 € | **765.00 €** | 10.0 % | **6.0 %** | 765.20 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE MAK 70/1000 AZ-M | 330.50 € | **301.90 €** | 15.0 % | **5.1 %** | 283.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 377.50 € | **348.90 €** | 15.0 % | **6.3 %** | 349.00 € | stávame sa najlacnejší |
| Reproduktory Edifier R2750DB MKII 2.0 (čierne) | 329.50 € | **301.00 €** | 15.0 % | **5.0 %** | 218.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VT862AB | 329.00 € | **300.50 €** | 15.0 % | **5.1 %** | 298.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VT862AM | 329.00 € | **300.50 €** | 15.0 % | **5.1 %** | 298.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EEA27600L | 619.90 € | **591.50 €** | 10.1 % | **5.0 %** | 479.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE55QN70F NEO QLED | 631.90 € | **603.50 €** | 10.0 % | **5.1 %** | 491.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Mini LED UE65M70H | 628.90 € | **600.50 €** | 10.0 % | **5.1 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB38C600CS9/EF | 626.90 € | **598.50 €** | 10.0 % | **5.0 %** | 498.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG DV90DG52A0TELE | 627.90 € | **599.50 €** | 10.0 % | **5.1 %** | 533.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA WFBA 2030 DL | 505.00 € | **476.90 €** | 11.2 % | **5.0 %** | 322.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Podvodný skúter Waydoo Subnado – súprava pre SUP | 326.00 € | **297.90 €** | 15.0 % | **5.1 %** | 282.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO 4250 CLI | 159.00 € | **130.90 €** | 27.9 % | **5.3 %** | 107.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE50QN80F NEO QLED | 613.50 € | **585.50 €** | 10.0 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA KGCR387100R | 608.50 € | **580.50 €** | 10.1 % | **5.0 %** | 405.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook 15 (X1504VA-BQ3872W) | 617.90 € | **589.90 €** | 10.0 % | **5.0 %** | 418.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kit Neewer RGB168 RGB LED, two lamps 60W 2500-8500K | 320.50 € | **292.50 €** | 15.1 % | **5.0 %** | 142.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja FB245EUGY Frost Vault Wheeled 42l | 623.50 € | **595.50 €** | 10.0 % | **5.1 %** | 489.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 55Q6C QD-MiniLED 4K SMART Google TV | 621.90 € | **593.90 €** | 10.0 % | **5.1 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG FCR5A95WW | 608.50 € | **580.50 €** | 10.1 % | **5.0 %** | 500.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG FSR5A34WG | 625.50 € | **597.50 €** | 10.0 % | **5.1 %** | 534.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BM1WFU3622WBB | 299.90 € | **271.90 €** | 15.8 % | **5.0 %** | 269.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBSJ2CCEP | 614.90 € | **587.00 €** | 10.0 % | **5.0 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gaggia Magenta Prestige | 609.90 € | **582.00 €** | 10.0 % | **5.0 %** | 545.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW7F4485CQ | 607.50 € | **579.90 €** | 10.0 % | **5.0 %** | 495.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo S Pro Black | 604.50 € | **576.90 €** | 10.0 % | **5.0 %** | 545.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo S Pro White | 604.50 € | **576.90 €** | 10.0 % | **5.0 %** | 554.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG RC81V5AV7N | 598.50 € | **570.90 €** | 10.1 % | **5.0 %** | 549.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačový list ELEGOO OrangeStorm Giga | 2706.50 € | **2678.90 €** | 15.0 % | **13.8 %** | 2678.99 € | stávame sa najlacnejší |
| Electrolux EIS62453IZ | 613.00 € | **585.50 €** | 10.0 % | **5.1 %** | 509.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný set - základňa R3 + volant ES + pedále SRP-Lit... | 323.00 € | **295.50 €** | 15.0 % | **5.2 %** | 258.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA WX-021/MusicCast 20 WHITE | 299.00 € | **271.50 €** | 15.6 % | **5.0 %** | 264.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-V4A Black | 529.00 € | **501.50 €** | 15.2 % | **9.2 %** | 501.78 € | stávame sa najlacnejší |
| TCL 65P6K 4K SMART Google TV | 602.90 € | **575.50 €** | 10.0 % | **5.0 %** | 443.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG F2DV5S8S1 | 606.90 € | **579.50 €** | 10.1 % | **5.1 %** | 469.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IdeaPad Slim 3 (82XQ01ANCK) | 609.90 € | **582.50 €** | 10.0 % | **5.1 %** | 528.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistička vzduchu MOVA Stellar X10 Plus (zlatá) | 315.90 € | **288.50 €** | 15.0 % | **5.0 %** | 238.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LOE8P39X | 608.90 € | **581.50 €** | 10.0 % | **5.1 %** | 542.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 13 GEN 3 GS1333 | 317.00 € | **289.90 €** | 15.0 % | **5.1 %** | 285.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 416.00 € | **388.90 €** | 15.0 % | **7.5 %** | 389.00 € | stávame sa najlacnejší |
| Tesla AirCook Q40 | 79.90 € | **52.90 €** | 59.2 % | **5.4 %** | 46.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla 65E635SUS 65" UHD LED AndroidTV 11 | 590.90 € | **563.90 €** | 10.1 % | **5.0 %** | 410.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SOVEREIGN 130/35CM PRÁZDNÝ PROFESIONÁLNÍ KOŽENÝ BOXO... | 316.50 € | **289.50 €** | 15.0 % | **5.1 %** | 273.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Mini LED UE55M80H | 588.50 € | **561.50 €** | 10.1 % | **5.0 %** | 554.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRB620C6X4WFE | 598.50 € | **571.50 €** | 10.1 % | **5.1 %** | 568.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-MAX3500 | 669.00 € | **642.00 €** | 11.8 % | **7.3 %** | 642.35 € | stávame sa najlacnejší |
| JBL Boombox 3 WIFI | 584.50 € | **557.90 €** | 10.0 % | **5.0 %** | 309.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov MOVA Master 10 (strieborný) | 309.50 € | **282.90 €** | 15.0 % | **5.1 %** | 155.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot MOVA E20s Pro Plus (biely) | 309.50 € | **282.90 €** | 15.0 % | **5.1 %** | 158.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 338DD | 577.50 € | **550.90 €** | 10.1 % | **5.0 %** | 498.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG FBLR7A92WG | 582.50 € | **555.90 €** | 10.0 % | **5.0 %** | 511.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 17-cp2301nc (CA6Z6EA) | 592.50 € | **565.90 €** | 10.0 % | **5.1 %** | 558.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG FASR3A04WS | 589.00 € | **562.50 €** | 10.0 % | **5.1 %** | 490.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GV663B65XXL | 589.00 € | **562.50 €** | 10.0 % | **5.1 %** | 526.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/256GB Gray (76172) | 578.90 € | **552.50 €** | 10.0 % | **5.0 %** | 420.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBSJ1CCSW | 576.90 € | **550.50 €** | 10.1 % | **5.0 %** | 445.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool W7I HT40 T | 585.90 € | **559.50 €** | 10.0 % | **5.1 %** | 505.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada domácího videotelefonu GoSmart EMOS IP-750A /H4... | 306.90 € | **280.50 €** | 15.0 % | **5.1 %** | 227.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE50QN70H | 582.00 € | **555.90 €** | 10.0 % | **5.1 %** | 548.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LFP416X | 229.00 € | **202.90 €** | 18.5 % | **5.0 %** | 152.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A576 Galaxy A57 128GB Icy Blue | 566.50 € | **540.50 €** | 10.1 % | **5.0 %** | 286.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A576 Galaxy A57 128GB Navy Blue | 566.50 € | **540.50 €** | 10.1 % | **5.0 %** | 290.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A576 Galaxy A57 128GB Lilac | 566.50 € | **540.50 €** | 10.1 % | **5.0 %** | 294.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung WW11DG5B25AELE | 576.50 € | **550.50 €** | 10.0 % | **5.1 %** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fc1301ncx (D9ML7EA) | 574.90 € | **548.90 €** | 10.0 % | **5.1 %** | 463.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO X8 PRO MAX 12/512GB White | 571.90 € | **545.90 €** | 10.0 % | **5.0 %** | 473.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple AirPods Max 2 - Midnight | 576.50 € | **550.50 €** | 10.1 % | **5.1 %** | 490.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk 3S (čierny) | 299.00 € | **273.00 €** | 15.0 % | **5.0 %** | 251.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Saturn 4 | 306.50 € | **280.50 €** | 14.9 % | **5.2 %** | 269.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus T2 smart bike trainer | 615.90 € | **589.90 €** | 15.0 % | **10.2 %** | 590.00 € | stávame sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **573.00 €** | 10.9 % | **6.1 %** | 573.11 € | stávame sa najlacnejší |
| YAMAHA CD-C603 SILVER | 599.00 € | **573.00 €** | 12.2 % | **7.3 %** | 573.11 € | stávame sa najlacnejší |
| Ninja ES601EU Luxe™ Café Premier 3 v 1 | 566.90 € | **541.00 €** | 10.0 % | **5.0 %** | 362.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG RC91V5AV6N | 569.90 € | **544.00 €** | 10.0 % | **5.0 %** | 479.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B7RCNA417HXBRW | 690.90 € | **665.00 €** | 10.1 % | **5.9 %** | 665.50 € | stávame sa najlacnejší |
| LEVENHUK Blitz 114s PLUS | 296.50 € | **270.90 €** | 15.0 % | **5.1 %** | 175.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LIT30230C | 279.00 € | **253.50 €** | 15.7 % | **5.1 %** | 194.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LFP326FB | 169.00 € | **143.50 €** | 24.0 % | **5.3 %** | 115.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux CIS62450 | 567.90 € | **542.50 €** | 10.0 % | **5.1 %** | 415.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 700 MealAssist LOEF8F38X | 558.90 € | **533.50 €** | 10.0 % | **5.0 %** | 525.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah VIPOW BAT0499 Bluetooth | 291.00 € | **265.90 €** | 15.0 % | **5.1 %** | 232.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice s 6denní předpovědí GARNI 108... | 291.00 € | **265.90 €** | 15.0 % | **5.1 %** | 241.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Midland XT70 Adventure | 159.00 € | **133.90 €** | 25.0 % | **5.3 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 65V6C 4K SMART Google TV | 557.50 € | **532.50 €** | 10.0 % | **5.1 %** | 337.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 12+256GB Silhoutte | 545.90 € | **520.90 €** | 10.1 % | **5.0 %** | 348.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 55T8C QLED 4K SMART Google TV | 557.50 € | **532.50 €** | 10.0 % | **5.1 %** | 409.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EES47400L | 551.50 € | **526.50 €** | 10.0 % | **5.0 %** | 418.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK61CS2XL4 | 550.00 € | **525.00 €** | 10.0 % | **5.0 %** | 449.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi TV A Pro 65 2026 | 552.50 € | **527.50 €** | 10.0 % | **5.0 %** | 498.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K1-SE | 290.90 € | **265.90 €** | 15.0 % | **5.1 %** | 251.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 250R G10 (CH7K3AT) | 548.90 € | **523.90 €** | 10.0 % | **5.0 %** | 511.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termovízna kamera THERMAL MASTER X2 USB-C | 287.90 € | **262.90 €** | 15.0 % | **5.0 %** | 257.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta GZ7257E0 | 544.90 € | **520.00 €** | 10.0 % | **5.0 %** | 500.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE43Q8F QLED | 541.50 € | **516.90 €** | 10.0 % | **5.0 %** | 398.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WIP 4T233 PFEG B | 537.50 € | **512.90 €** | 10.1 % | **5.1 %** | 414.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač MOVA S7 Stick | 287.50 € | **262.90 €** | 14.9 % | **5.1 %** | 178.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.90 €** | 49.9 % | **20.0 %** | 99.00 € | stávame sa najlacnejší |
| Gimbal Hohem iSteady MT2 KIT | 287.00 € | **262.50 €** | 15.0 % | **5.2 %** | 188.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Huawei Watch 4 PRO Brown | 537.50 € | **513.00 €** | 10.0 % | **5.0 %** | 506.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 122190000 | 99.99 € | **75.50 €** | 39.7 % | **5.5 %** | 53.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO DPY8506GXB2 | 541.90 € | **517.50 €** | 10.1 % | **5.1 %** | 399.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO B5WFU68418WBG | 535.90 € | **511.50 €** | 10.0 % | **5.0 %** | 459.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 Lite s diaľkovým ovládaním | 280.90 € | **256.50 €** | 15.1 % | **5.1 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-1600-12 UPS 1600W 12V čist... | 283.90 € | **259.50 €** | 15.0 % | **5.1 %** | 248.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier QR65 (biele) | 283.90 € | **259.50 €** | 15.0 % | **5.1 %** | 255.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier QR65 (čierne) | 283.90 € | **259.50 €** | 15.0 % | **5.1 %** | 255.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BBIM17300BMPSF | 449.00 € | **424.90 €** | 11.0 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3WBT671415W | 524.90 € | **500.90 €** | 10.0 % | **5.0 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO LEGION TAB (ZAEF0021CZ) | 528.90 € | **504.90 €** | 10.0 % | **5.0 %** | 466.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality Ender-3 V3 3D Printer | 278.00 € | **254.00 €** | 14.9 % | **5.0 %** | 217.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **378.90 €** | 15.0 % | **8.2 %** | 379.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 983.90 € | **959.90 €** | 15.0 % | **12.2 %** | 960.00 € | stávame sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **402.00 €** | 15.0 % | **8.5 %** | 402.29 € | stávame sa najlacnejší |
| UMAX Webcam W5 | 39.90 € | **16.00 €** | 162.2 % | **5.2 %** | 14.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 Pro+ 5G 12/512GB Black | 526.90 € | **503.00 €** | 10.0 % | **5.0 %** | 370.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/256GB Blue (71741) | 522.50 € | **498.90 €** | 10.1 % | **5.1 %** | 393.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/256GB Gray (71696) | 522.50 € | **498.90 €** | 10.1 % | **5.1 %** | 393.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI78HT1SSGA | 517.50 € | **493.90 €** | 10.1 % | **5.1 %** | 388.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/256GB Green (71703) | 522.50 € | **498.90 €** | 10.1 % | **5.1 %** | 428.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IdeaPad Slim 3 (82XQ01ALCK) | 512.50 € | **488.90 €** | 10.1 % | **5.0 %** | 482.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT VOLT 3000 GREEN BOOST 3kW (pr... | 273.50 € | **249.90 €** | 15.0 % | **5.1 %** | 224.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S350DB 2.1 (hnedé) | 275.50 € | **251.90 €** | 15.0 % | **5.1 %** | 248.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový vertikálny vysávač MOVA S2 Detect | 273.00 € | **249.50 €** | 15.0 % | **5.1 %** | 98.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock F25 ACE | 521.00 € | **497.50 €** | 10.0 % | **5.1 %** | 348.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO YOGA TAB (ZAG60226CZ) | 508.50 € | **485.00 €** | 10.1 % | **5.0 %** | 335.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA S4 detect bezdrôtový vysávač | 275.00 € | **251.50 €** | 15.0 % | **5.2 %** | 117.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DP 6413 LZBG | 235.00 € | **211.50 €** | 16.9 % | **5.2 %** | 202.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 199.00 € | **175.50 €** | 22.9 % | **8.4 %** | 175.80 € | stávame sa najlacnejší |
| iRobot Roomba Plus 405 Combo + BL | 509.90 € | **486.50 €** | 10.1 % | **5.0 %** | 313.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RR9197WH | 522.90 € | **499.50 €** | 10.0 % | **5.1 %** | 355.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 55P7K QLED 4K SMART Google TV | 515.90 € | **492.50 €** | 10.0 % | **5.1 %** | 384.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi TV S mini LED 55 | 514.90 € | **491.50 €** | 10.1 % | **5.1 %** | 428.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WAM 97WB EE | 513.90 € | **490.50 €** | 10.0 % | **5.0 %** | 439.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Wheel Moza Racing KS RS047 (PC) | 270.90 € | **247.50 €** | 15.0 % | **5.1 %** | 227.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant Moza Racing CS V2P (PC) | 270.90 € | **247.50 €** | 15.0 % | **5.1 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch 9 44mm LTE Graphite | 508.90 € | **485.90 €** | 10.1 % | **5.1 %** | 360.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS5C70BPA | 509.50 € | **486.50 €** | 10.1 % | **5.1 %** | 427.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 250R G10 (CH7K6AT) | 504.90 € | **481.90 €** | 10.0 % | **5.0 %** | 431.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung HW-Q800F Soundbar | 503.90 € | **480.90 €** | 10.1 % | **5.1 %** | 443.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS VP32UQ | 508.90 € | **485.90 €** | 10.0 % | **5.1 %** | 473.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 504.50 € | **481.50 €** | 10.0 % | **5.0 %** | 472.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 928.50 € | **905.50 €** | 10.0 % | **7.3 %** | 905.67 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Cyberpad (modrý) | 473.90 € | **451.00 €** | 15.0 % | **9.4 %** | 451.50 € | stávame sa najlacnejší |
| Samsung HW-QS700F Soundbar | 497.50 € | **474.90 €** | 10.1 % | **5.1 %** | 279.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB34C670DWW/EF | 496.50 € | **473.90 €** | 10.0 % | **5.0 %** | 343.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 SteamBake EOD5F71Z | 497.50 € | **474.90 €** | 10.1 % | **5.1 %** | 389.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW6F2491C | 487.50 € | **464.90 €** | 10.1 % | **5.0 %** | 427.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 912.50 € | **889.90 €** | 10.1 % | **7.3 %** | 889.92 € | stávame sa najlacnejší |
| Inteligentný cyklotrenažér Cycplus T2H | 407.50 € | **384.90 €** | 15.0 % | **8.6 %** | 385.00 € | stávame sa najlacnejší |
| Čistička vzduchu MOVA Stellar X10 | 259.50 € | **236.90 €** | 15.1 % | **5.1 %** | 192.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja EG351EU Foodi 5v1 Gril & Fritéza | 494.00 € | **471.50 €** | 10.0 % | **5.0 %** | 180.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Charles Q10 | 494.00 € | **471.50 €** | 10.0 % | **5.0 %** | 371.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX EW6T5362C | 492.50 € | **470.00 €** | 10.0 % | **5.0 %** | 398.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW2TN5061FC | 399.00 € | **376.50 €** | 11.3 % | **5.0 %** | 305.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 143 CD V3 černé | 262.00 € | **239.50 €** | 14.9 % | **5.0 %** | 189.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 143 CD V3 stříbrné | 262.00 € | **239.50 €** | 14.9 % | **5.0 %** | 189.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer masomlýnek ZMM5801P | 119.00 € | **96.50 €** | 29.7 % | **5.2 %** | 94.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E7K1-6BP | 92.00 € | **69.50 €** | 47.6 % | **11.5 %** | 69.75 € | stávame sa najlacnejší |
| TCL 55T69C QLED 4K SMART Google TV | 491.90 € | **469.50 €** | 10.0 % | **5.0 %** | 333.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mio MiSentry 12 4G LTE | 491.90 € | **469.50 €** | 10.1 % | **5.1 %** | 399.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GV16B | 491.90 € | **469.50 €** | 10.0 % | **5.0 %** | 439.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Midland XT60 | 139.00 € | **116.90 €** | 25.0 % | **5.1 %** | 87.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.90 €** | 15.0 % | **5.2 %** | 239.00 € | stávame sa najlacnejší |
| Huawei Watch GT 5 Pro 46mm Titanium | 482.50 € | **460.50 €** | 10.1 % | **5.0 %** | 195.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock QR 798 White | 479.50 € | **457.50 €** | 10.1 % | **5.0 %** | 367.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Thomas AQUA+ ALLERGY & FAMILY | 485.90 € | **463.90 €** | 10.0 % | **5.0 %** | 384.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB34C600ESA/EF | 484.90 € | **462.90 €** | 10.0 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gaggia Classic E24 | 484.90 € | **462.90 €** | 10.1 % | **5.1 %** | 413.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VD1442AB | 488.50 € | **466.50 €** | 10.1 % | **5.1 %** | 424.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBSJ20DSW | 484.50 € | **462.50 €** | 10.1 % | **5.1 %** | 421.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA VD1442AR | 488.50 € | **466.50 €** | 10.1 % | **5.1 %** | 430.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fc0302nc (BH8T8EA) | 479.50 € | **457.50 €** | 10.1 % | **5.1 %** | 451.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 11.0 % | **9.3 %** | 1377.03 € | stávame sa najlacnejší |
| Samsung RB34C600DSA/EF | 469.50 € | **447.90 €** | 10.1 % | **5.0 %** | 395.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BM3T3924WBW | 477.50 € | **455.90 €** | 10.0 % | **5.1 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool TDLRS 7232BS EU | 465.50 € | **444.00 €** | 10.1 % | **5.0 %** | 327.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO17E1W | 79.00 € | **57.50 €** | 46.3 % | **6.5 %** | 57.52 € | stávame sa najlacnejší |
| Fén na vlasy MOVA Shine 20 (zlatý) | 247.90 € | **226.50 €** | 15.0 % | **5.1 %** | 58.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A276 Galaxy A27 256GB Pink | 474.90 € | **453.50 €** | 10.0 % | **5.1 %** | 231.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A276 Galaxy A27 256GB Black | 474.90 € | **453.50 €** | 10.0 % | **5.1 %** | 279.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A276 Galaxy A27 256GB Blue | 474.90 € | **453.50 €** | 10.0 % | **5.1 %** | 281.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung WW80CGC04DABLE | 471.90 € | **450.50 €** | 10.1 % | **5.1 %** | 349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality Falcon A1 10W laserový gravírovací stroj | 545.90 € | **524.50 €** | 15.0 % | **10.5 %** | 524.80 € | stávame sa najlacnejší |
| WHIRLPOOL WHM22113 3 | 471.00 € | **449.90 €** | 10.0 % | **5.1 %** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X60 Soundbar | 530.00 € | **508.90 €** | 15.0 % | **10.4 %** | 509.00 € | stávame sa najlacnejší |
| Ninja TB301EU Detect Pro s Blendsense | 457.90 € | **436.90 €** | 10.1 % | **5.0 %** | 197.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 128GB Green | 458.90 € | **437.90 €** | 10.1 % | **5.1 %** | 231.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 128GB Lavender | 458.90 € | **437.90 €** | 10.1 % | **5.1 %** | 235.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV30 Max Plus | 458.90 € | **437.90 €** | 10.1 % | **5.0 %** | 278.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI4S8CM1SWA | 463.90 € | **442.90 €** | 10.0 % | **5.0 %** | 316.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fritéza MOVA AF20 Pro bez tuku | 247.50 € | **226.50 €** | 15.0 % | **5.2 %** | 120.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch 9 44mm Graphite | 458.90 € | **437.90 €** | 10.1 % | **5.1 %** | 345.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch 9 44mm Silver | 458.90 € | **437.90 €** | 10.1 % | **5.1 %** | 345.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO X8 PRO 12/512GB Black | 464.50 € | **443.50 €** | 10.0 % | **5.1 %** | 372.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO X8 PRO 12/512GB Green | 464.50 € | **443.50 €** | 10.0 % | **5.1 %** | 372.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO X8 PRO 12/512GB White | 464.50 € | **443.50 €** | 10.0 % | **5.1 %** | 372.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG FSR5A94WL | 464.50 € | **443.50 €** | 10.0 % | **5.1 %** | 376.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot MOVA E20s Pro (biely) | 244.90 € | **223.90 €** | 15.0 % | **5.1 %** | 158.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EIS67453 | 459.90 € | **438.90 €** | 10.0 % | **5.0 %** | 375.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Autochladnička Euhomy CF001, 55 l | 247.50 € | **226.50 €** | 15.0 % | **5.2 %** | 199.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica VM 1442 R | 466.50 € | **445.50 €** | 10.1 % | **5.1 %** | 421.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG RB38C600EWW/EF | 457.90 € | **436.90 €** | 10.1 % | **5.0 %** | 419.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko FBMA61330GXDT | 459.90 € | **438.90 €** | 10.0 % | **5.0 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - na kovovom bubne, 4 zás... | 144.50 € | **123.50 €** | 43.9 % | **23.0 %** | 123.64 € | stávame sa najlacnejší |
| Rooma Espresso A7 bílá | 558.50 € | **537.50 €** | 10.0 % | **5.9 %** | 537.70 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 566.90 € | **546.00 €** | 10.1 % | **6.0 %** | 546.10 € | stávame sa najlacnejší |
| iRobot Roomba Plus 405 Combo + WH | 460.50 € | **439.90 €** | 10.0 % | **5.1 %** | 311.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LFV326K | 453.50 € | **432.90 €** | 10.1 % | **5.1 %** | 367.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gaggia Classic E24 bílá | 453.50 € | **432.90 €** | 10.0 % | **5.0 %** | 413.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HDD 3.5" 4TB 256MB Seagate SKYHAWK pro kamerové syst... | 238.50 € | **217.90 €** | 15.1 % | **5.1 %** | 170.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/128GB Gray (71701) | 457.00 € | **436.50 €** | 10.0 % | **5.1 %** | 334.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/128GB Green (71768) | 457.00 € | **436.50 €** | 10.0 % | **5.1 %** | 338.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/128GB Blue (71736) | 457.00 € | **436.50 €** | 10.0 % | **5.1 %** | 368.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX  300 LMS2203EMX | 299.00 € | **278.50 €** | 12.8 % | **5.0 %** | 216.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MacBook Neo 8/256GB blush MHFH4CZ | 841.00 € | **820.50 €** | 10.0 % | **7.3 %** | 820.67 € | stávame sa najlacnejší |
| ETA 242590000 | 99.99 € | **79.50 €** | 32.4 % | **5.2 %** | 66.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GSXE90EVAD | 2218.90 € | **2198.50 €** | 10.0 % | **9.0 %** | 2198.90 € | stávame sa najlacnejší |
| Candy BR 413BL8-S | 450.90 € | **430.50 €** | 10.0 % | **5.1 %** | 343.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 50P7K QLED 4K SMART Google TV | 445.90 € | **425.50 €** | 10.0 % | **5.0 %** | 352.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CS 6B4S1PMA | 454.90 € | **434.50 €** | 10.0 % | **5.1 %** | 405.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG FLR5A82WW | 448.90 € | **428.50 €** | 10.1 % | **5.1 %** | 409.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blaupunkt 32FBG5010S | 209.00 € | **188.90 €** | 16.4 % | **5.2 %** | 188.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1329.90 €** | 15.0 % | **13.3 %** | 1330.00 € | stávame sa najlacnejší |
| Ariete Diadema Latte Pro 1453/01 | 433.50 € | **413.50 €** | 10.1 % | **5.0 %** | 279.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka chytrá Victron Energy BlueSmart 12V/25A + ... | 232.50 € | **212.50 €** | 15.1 % | **5.2 %** | 84.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON i-SENSYS MF461dw | 439.50 € | **419.50 €** | 10.1 % | **5.1 %** | 314.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 55P6K 4K SMART Google TV | 440.90 € | **420.90 €** | 10.0 % | **5.0 %** | 329.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 1-40 KG ZÁTĚŽOVÁ VESTA DBX BUSHIDO | 229.90 € | **209.90 €** | 15.0 % | **5.0 %** | 167.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Blitz 80s  PLUS | 232.90 € | **212.90 €** | 15.0 % | **5.1 %** | 176.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 500 LFP516K | 446.50 € | **426.50 €** | 10.0 % | **5.1 %** | 392.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DBX-W-10B TRÉNINKOVÝ BLOK NA ZEĎ DBX BUSHIDO | 229.90 € | **209.90 €** | 15.0 % | **5.0 %** | 184.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LOKITHOR JTC4250 89,6 Wh 4250 A štartovacia jednotka | 232.50 € | **212.50 €** | 15.0 % | **5.1 %** | 198.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IdeaPad 1 (82VG00X1CK) | 440.00 € | **420.00 €** | 10.0 % | **5.0 %** | 414.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant PXN WCS R2 | 229.90 € | **209.90 €** | 15.0 % | **5.0 %** | 207.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S23B1-EU (čierny) | 232.50 € | **212.50 €** | 15.0 % | **5.1 %** | 212.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE TH60E3B | 99.00 € | **79.00 €** | 33.7 % | **6.7 %** | 79.20 € | stávame sa najlacnejší |
| GORENJE TH60E3X | 99.00 € | **79.00 €** | 33.7 % | **6.7 %** | 79.20 € | stávame sa najlacnejší |
| Candy CNWQ4G56G2 | 434.90 € | **415.00 €** | 10.0 % | **5.0 %** | 398.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung WW90CGC04DTELE | 430.50 € | **410.90 €** | 10.1 % | **5.1 %** | 351.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock QR 798 Black | 431.50 € | **411.90 €** | 10.0 % | **5.0 %** | 361.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Crystal UHD UE55U8072H | 433.50 € | **413.90 €** | 10.0 % | **5.1 %** | 404.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier S300 (čierny orech) | 226.50 € | **206.90 €** | 15.1 % | **5.1 %** | 183.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON MAXIFY GX2040 | 436.00 € | **416.50 €** | 10.0 % | **5.1 %** | 233.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q10 PF Čistiaci robot (biely) | 226.00 € | **206.50 €** | 14.9 % | **5.0 %** | 197.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-1200-12 UPS 1200W 12V čist... | 228.00 € | **208.50 €** | 15.0 % | **5.1 %** | 206.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG FCR5A85WW | 534.50 € | **515.00 €** | 10.1 % | **6.0 %** | 515.10 € | stávame sa najlacnejší |
| ETA 559590010 | 52.99 € | **33.50 €** | 68.0 % | **6.2 %** | 32.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier S300 (béžový) | 226.90 € | **207.50 €** | 15.1 % | **5.2 %** | 183.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Black | 429.90 € | **410.50 €** | 10.0 % | **5.0 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-TMAX45E-K | 434.90 € | **415.50 €** | 10.0 % | **5.1 %** | 262.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 429.90 € | **410.50 €** | 10.0 % | **5.0 %** | 294.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Green | 429.90 € | **410.50 €** | 10.0 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch 9 40mm Cream | 424.90 € | **405.50 €** | 10.1 % | **5.1 %** | 315.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch 9 40mm Graphite | 424.90 € | **405.50 €** | 10.1 % | **5.1 %** | 315.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHVS 61F LT DP K | 419.90 € | **400.50 €** | 10.1 % | **5.0 %** | 349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook 15 (X1504VA-BQ2760W) | 426.90 € | **407.50 €** | 10.1 % | **5.1 %** | 400.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA FS 18 TOB | 309.00 € | **289.90 €** | 11.9 % | **5.0 %** | 229.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality Hi Combo | 403.00 € | **383.90 €** | 15.0 % | **9.5 %** | 384.00 € | stávame sa najlacnejší |
| YAMAHA TW-ES5A GREEN | 159.00 € | **139.90 €** | 19.6 % | **5.3 %** | 77.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SKZ 65 BB | 185.00 € | **165.90 €** | 17.2 % | **5.1 %** | 136.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla 55E635SUS LED 55" UHD AndroidTV 11 | 419.50 € | **400.50 €** | 10.0 % | **5.0 %** | 287.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WF S7560 NE | 420.90 € | **401.90 €** | 10.1 % | **5.1 %** | 319.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier S300 (hnedý) | 221.50 € | **202.50 €** | 15.1 % | **5.2 %** | 183.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko CEG7304X | 412.50 € | **393.50 €** | 10.1 % | **5.0 %** | 380.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Huawei Watch 4 Black | 423.50 € | **404.50 €** | 10.0 % | **5.1 %** | 399.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Midland XT70 | 119.00 € | **100.00 €** | 25.0 % | **5.0 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Midland XT50 PRO Blue | 119.00 € | **100.00 €** | 25.0 % | **5.0 %** | 100.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 428.90 € | **409.90 €** | 13.5 % | **8.5 %** | 410.00 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 657.90 € | **638.90 €** | 10.1 % | **6.9 %** | 639.00 € | stávame sa najlacnejší |
| Autochladnička Euhomy CF001-35GR, 30 l | 244.00 € | **225.00 €** | 15.0 % | **6.0 %** | 225.18 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Hi | 227.50 € | **208.50 €** | 14.9 % | **5.3 %** | 208.80 € | stávame sa najlacnejší |
| Tréninkový blok na zeď DBX BUSHIDO TS | 216.90 € | **198.00 €** | 15.0 % | **5.0 %** | 155.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Tab A11+ 5G 128GB Gray | 414.90 € | **396.00 €** | 10.0 % | **5.0 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Tab A11+ 5G 128GB Silver | 414.90 € | **396.00 €** | 10.0 % | **5.0 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540XP | 460.50 € | **441.90 €** | 10.1 % | **5.7 %** | 442.00 € | stávame sa najlacnejší |
| HDD 3.5" 1TB 64MB Western Digital PURPLE pro kamerov... | 214.50 € | **195.90 €** | 15.0 % | **5.0 %** | 148.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herná súprava PXN-V10 Pro - volant + pedále + montáž... | 211.50 € | **193.00 €** | 15.1 % | **5.0 %** | 189.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blaupunkt 55UGC5500S | 399.50 € | **381.00 €** | 10.1 % | **5.0 %** | 377.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 267.50 € | **249.00 €** | 14.9 % | **7.0 %** | 249.33 € | stávame sa najlacnejší |
| TCL 50P6K 4K SMART Google TV | 404.90 € | **386.50 €** | 10.1 % | **5.1 %** | 309.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WMD44ME | 400.90 € | **382.50 €** | 10.1 % | **5.0 %** | 361.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.90 € | **330.50 €** | 15.0 % | **9.0 %** | 330.67 € | stávame sa najlacnejší |
| Candy CI0C7SB0FA Rapido | 400.00 € | **381.90 €** | 10.0 % | **5.0 %** | 373.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2000DB 2.0 (čierne) | 211.00 € | **192.90 €** | 14.9 % | **5.1 %** | 165.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Adapter Ottocast PCS46 OtooAiBox P3 2/3/4G SIM CARD ... | 211.00 € | **192.90 €** | 14.9 % | **5.1 %** | 171.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / skokový štartér 5v1 Lokithor AW401 | 208.00 € | **189.90 €** | 15.0 % | **5.0 %** | 171.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR5 (biele) | 211.00 € | **192.90 €** | 14.9 % | **5.1 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR5 (čierne) | 211.00 € | **192.90 €** | 14.9 % | **5.1 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV30 Max | 396.50 € | **378.50 €** | 10.1 % | **5.1 %** | 142.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q10 VF+ Black | 389.50 € | **371.50 €** | 10.1 % | **5.0 %** | 177.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung G556 Galaxy Xcover 7 Black | 405.50 € | **387.50 €** | 10.0 % | **5.1 %** | 215.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS Edifier NeoBuds Planar ANC (čierne) | 206.50 € | **188.50 €** | 15.1 % | **5.1 %** | 42.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač MOVA S1 Stick | 206.90 € | **188.90 €** | 15.1 % | **5.1 %** | 98.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x50 | 211.50 € | **193.50 €** | 14.9 % | **5.1 %** | 125.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook Go 15 (E1504TA-BQ163W) | 389.90 € | **371.90 €** | 10.1 % | **5.0 %** | 330.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB PULSe 4K Combo DVB-S2X+DVBT2/C revize II | 210.50 € | **192.50 €** | 15.1 % | **5.2 %** | 159.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá čistička vzduchu GARNI 15T OneCare | 209.50 € | **191.50 €** | 14.9 % | **5.1 %** | 168.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 28270-56 | 89.90 € | **71.90 €** | 31.5 % | **5.2 %** | 67.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 BLACK | 395.50 € | **377.50 €** | 10.0 % | **5.0 %** | 375.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 SILVER | 395.50 € | **377.50 €** | 10.0 % | **5.0 %** | 375.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Blitz 76 PLUS | 207.50 € | **189.50 €** | 15.1 % | **5.1 %** | 189.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje FH50EAW | 499.50 € | **481.50 €** | 10.0 % | **6.1 %** | 481.82 € | stávame sa najlacnejší |
| Roborock Q10 VF+ White | 387.90 € | **370.00 €** | 10.1 % | **5.0 %** | 219.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shark S8201EU Steam & Scrub | 384.50 € | **366.90 €** | 10.0 % | **5.0 %** | 172.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE50Q7F QLED | 381.50 € | **363.90 €** | 10.1 % | **5.1 %** | 348.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 296.50 € | **278.90 €** | 15.0 % | **8.2 %** | 278.99 € | stávame sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Solární panel CARCLEVER 35so120, nabíječka 120W | 204.50 € | **186.90 €** | 14.9 % | **5.0 %** | 142.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 1025 Arcus Wi-Fi meteorologická stanice 2GEN | 204.00 € | **186.50 €** | 14.9 % | **5.0 %** | 182.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Crystal UHD UE50U8072H | 394.00 € | **376.50 €** | 10.0 % | **5.1 %** | 373.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E7T1-6BP | 79.00 € | **61.50 €** | 35.9 % | **5.8 %** | 60.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 447.00 € | **429.50 €** | 14.9 % | **10.4 %** | 429.67 € | stávame sa najlacnejší |
| Rooma Espresso A6 bílá | 481.50 € | **464.00 €** | 10.0 % | **6.0 %** | 464.24 € | stávame sa najlacnejší |
| Albrecht DR 112 | 109.99 € | **92.50 €** | 25.0 % | **5.1 %** | 78.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth NEDIS SPPT2480BK | 204.90 € | **187.50 €** | 15.0 % | **5.2 %** | 160.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL ZC 255 B 38 | 149.90 € | **132.50 €** | 19.0 % | **5.2 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407B 1200W 12V | 201.90 € | **184.50 €** | 15.1 % | **5.1 %** | 177.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS KP1A3B31 Nescafé Dolce Gusto Picco | 69.90 € | **52.50 €** | 40.9 % | **5.9 %** | 51.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja FS301EU SLUSHi™ | 380.90 € | **363.50 €** | 10.1 % | **5.0 %** | 233.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON MAXIFY GX1040 | 381.90 € | **364.50 €** | 10.1 % | **5.1 %** | 282.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L3560CDW | 392.90 € | **375.50 €** | 10.0 % | **5.1 %** | 354.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 390.90 € | **373.50 €** | 10.0 % | **5.1 %** | 370.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Thomas Aqua + Pet & Family | 380.00 € | **362.90 €** | 10.0 % | **5.1 %** | 299.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Charles i10 černá | 380.00 € | **362.90 €** | 10.0 % | **5.1 %** | 308.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA J30 cordless upright vacuum cleaner | 199.00 € | **181.90 €** | 14.9 % | **5.0 %** | 102.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 515190000 | 92.99 € | **75.90 €** | 28.8 % | **5.1 %** | 48.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A276 Galaxy A27 128GB Pink | 374.50 € | **357.50 €** | 10.0 % | **5.0 %** | 233.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A276 Galaxy A27 128GB Black | 374.50 € | **357.50 €** | 10.0 % | **5.0 %** | 243.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A276 Galaxy A27 128GB Blue | 374.50 € | **357.50 €** | 10.0 % | **5.0 %** | 243.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BM3WFSU37013WW | 374.50 € | **357.50 €** | 10.0 % | **5.0 %** | 271.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX ESF2400OW | 369.90 € | **352.90 €** | 10.1 % | **5.0 %** | 271.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 SensiCare® EWS6426WC | 375.90 € | **358.90 €** | 10.1 % | **5.1 %** | 297.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS642D90W | 373.90 € | **356.90 €** | 10.0 % | **5.0 %** | 305.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG F4X1008NWH | 376.50 € | **359.50 €** | 10.1 % | **5.1 %** | 322.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40093CZ) | 370.50 € | **353.50 €** | 10.1 % | **5.0 %** | 327.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB PULSe 4K (2x DVB-S2X) revize II | 198.50 € | **181.50 €** | 14.9 % | **5.0 %** | 159.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2000DB 2.0 (hnedé) | 198.50 € | **181.50 €** | 15.1 % | **5.2 %** | 165.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 691.50 € | **674.50 €** | 10.1 % | **7.4 %** | 674.58 € | stávame sa najlacnejší |
| Gorenje DE69CS | 514.50 € | **497.50 €** | 10.0 % | **6.4 %** | 497.79 € | stávame sa najlacnejší |
| Niceboy HIVE Beans Black | 34.90 € | **18.00 €** | 126.3 % | **16.7 %** | 18.12 € | stávame sa najlacnejší |
| POCO M8 PRO 5G 8/256GB Green | 369.90 € | **353.00 €** | 10.1 % | **5.0 %** | 251.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 PRO 5G 8/256GB Black | 369.90 € | **353.00 €** | 10.1 % | **5.0 %** | 265.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 43T69C QLED 4K SMART Google TV | 363.50 € | **346.90 €** | 10.1 % | **5.0 %** | 287.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L6370 | 370.50 € | **353.90 €** | 10.0 % | **5.1 %** | 299.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L6376 | 370.50 € | **353.90 €** | 10.0 % | **5.1 %** | 299.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY HT-S40R | 367.50 € | **350.90 €** | 10.0 % | **5.1 %** | 319.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GI6442BSCE | 366.50 € | **349.90 €** | 10.1 % | **5.1 %** | 326.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK SHERMAN PRO 10x42 | 194.50 € | **177.90 €** | 14.9 % | **5.1 %** | 139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Wi-Fi teleokulár Levenhuk Kelvin TLC60 | 192.50 € | **175.90 €** | 15.1 % | **5.2 %** | 154.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CRP2 spätné uchytenie pedálov Moza Racing RS075 | 189.50 € | **172.90 €** | 15.1 % | **5.1 %** | 164.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tiny 2 Lite | 192.50 € | **175.90 €** | 15.0 % | **5.1 %** | 171.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 940 Wi-Fi meteorologická stanice | 192.50 € | **175.90 €** | 15.0 % | **5.1 %** | 173.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gramofon KRUGER & MATZ TT-602 | 203.50 € | **186.90 €** | 15.0 % | **5.6 %** | 187.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 685W | 370.00 € | **353.50 €** | 10.0 % | **5.1 %** | 267.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BO6737E02BG | 365.00 € | **348.50 €** | 10.0 % | **5.0 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HDCG 32220 FX | 109.00 € | **92.50 €** | 24.1 % | **5.3 %** | 83.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MKF 23MZ601 mezikus | 53.00 € | **36.50 €** | 73.1 % | **19.2 %** | 36.54 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 275.50 € | **259.00 €** | 15.1 % | **8.2 %** | 259.28 € | stávame sa najlacnejší |
| RUSSELL HOBBS 20920-56/RH | 46.99 € | **30.50 €** | 62.2 % | **5.2 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 013490000 | 69.99 € | **53.50 €** | 37.9 % | **5.4 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 142590000 | 79.99 € | **63.50 €** | 32.3 % | **5.0 %** | 60.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 114 | 105.90 € | **89.50 €** | 24.9 % | **5.5 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 86.90 € | **70.50 €** | 43.9 % | **16.8 %** | 70.85 € | stávame sa najlacnejší |
| Samsung Galaxy Tab A11+ 128GB Silver | 360.90 € | **344.50 €** | 10.1 % | **5.1 %** | 205.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Crystal UHD UE43U8072H | 354.90 € | **338.50 €** | 10.1 % | **5.0 %** | 335.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 305.00 € | **288.90 €** | 14.9 % | **8.9 %** | 289.00 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Mars 5 | 189.00 € | **172.90 €** | 14.9 % | **5.1 %** | 161.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 1-36 KG ZÁTĚŽOVÁ VESTA DBX BUSHIDO | 189.00 € | **172.90 €** | 14.9 % | **5.2 %** | 167.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA G1 pro Pet Trimmer | 183.90 € | **167.90 €** | 15.0 % | **5.0 %** | 79.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash DY470 (čierna) + 4 venti... | 187.50 € | **171.50 €** | 15.0 % | **5.2 %** | 89.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER MFC-T930DW | 350.90 € | **334.90 €** | 10.0 % | **5.0 %** | 266.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 55V6C 4K SMART Google TV | 353.00 € | **337.00 €** | 10.0 % | **5.0 %** | 288.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 155A | 351.50 € | **335.50 €** | 10.1 % | **5.1 %** | 287.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash DY470 (biela) + 4 ventil... | 187.50 € | **171.50 €** | 15.0 % | **5.2 %** | 126.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 Pro 5G 6/128GB šedá (70629) | 348.50 € | **332.50 €** | 10.1 % | **5.1 %** | 293.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB PLUS (ZAG70454CZ) | 349.90 € | **333.90 €** | 10.1 % | **5.1 %** | 295.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG ViewFinity S60D (LS32D600EAUXEN) | 351.90 € | **335.90 €** | 10.0 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CI 3C6F0A | 350.90 € | **334.90 €** | 10.1 % | **5.1 %** | 300.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blaupunkt 50UGC5500S | 349.90 € | **333.90 €** | 10.0 % | **5.0 %** | 331.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 186.00 € | **170.00 €** | 14.9 % | **5.1 %** | 169.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH 6756WO | 139.00 € | **123.00 €** | 21.7 % | **7.7 %** | 123.50 € | stávame sa najlacnejší |
| Electrolux LKR520066W | 345.50 € | **329.90 €** | 10.0 % | **5.1 %** | 304.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CCGMEE9025PX/E | 814.50 € | **798.90 €** | 10.0 % | **7.9 %** | 799.00 € | stávame sa najlacnejší |
| Reproduktory Edifier e25HD (biely) | 180.50 € | **164.90 €** | 15.1 % | **5.1 %** | 143.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier e25HD (červené) | 180.50 € | **164.90 €** | 15.1 % | **5.1 %** | 143.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier e25HD (čierne) | 180.50 € | **164.90 €** | 15.1 % | **5.1 %** | 143.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Z3FC 16,1" 2,5K 180 Hz prenosný monitor | 181.50 € | **165.90 €** | 15.1 % | **5.3 %** | 155.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 194.50 € | **178.90 €** | 14.9 % | **5.7 %** | 179.00 € | stávame sa najlacnejší |
| HP Color LaserJet 178nw (4ZB96A) | 336.50 € | **321.00 €** | 10.1 % | **5.0 %** | 223.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 35A | 345.00 € | **329.50 €** | 10.0 % | **5.1 %** | 235.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 1-30 KG ZÁTĚŽOVÁ VESTA DBX BUSHIDO | 182.00 € | **166.50 €** | 14.9 % | **5.1 %** | 127.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Atom Digital DNM100 ... | 182.00 € | **166.50 €** | 14.9 % | **5.1 %** | 148.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 235 | 458.50 € | **443.00 €** | 10.1 % | **6.4 %** | 443.01 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 539.50 € | **524.00 €** | 10.1 % | **6.9 %** | 524.50 € | stávame sa najlacnejší |
| Tefal RK 103811 | 72.90 € | **57.50 €** | 33.3 % | **5.1 %** | 53.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo C500 | 62.90 € | **47.50 €** | 40.3 % | **5.9 %** | 32.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GI6432BSCE | 346.90 € | **331.50 €** | 10.0 % | **5.1 %** | 282.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON M2170 | 346.90 € | **331.50 €** | 10.0 % | **5.1 %** | 293.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL002CBK SmartLife | 350.00 € | **334.90 €** | 15.0 % | **10.0 %** | 335.00 € | stávame sa najlacnejší |
| TEFAL FR 490070 | 119.00 € | **103.90 €** | 20.7 % | **5.4 %** | 83.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA ST 62 BBG | 135.00 € | **119.90 €** | 18.5 % | **5.3 %** | 101.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shark BU3521EU Cordless Pro Auto-Empty | 329.90 € | **314.90 €** | 10.1 % | **5.1 %** | 227.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací hákový pytel DBX BUSHIDO 140 cm 40 kg | 173.50 € | **158.50 €** | 15.0 % | **5.1 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WMN464BX | 328.50 € | **313.50 €** | 10.1 % | **5.1 %** | 257.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WMN14BW | 328.50 € | **313.50 €** | 10.1 % | **5.1 %** | 261.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer GE550 BE9300 WiFi Router | 333.50 € | **318.50 €** | 10.0 % | **5.1 %** | 275.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL BAR 2.1 Deep Bass MK2 | 327.90 € | **312.90 €** | 10.1 % | **5.1 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal TT693110 | 59.90 € | **44.90 €** | 40.7 % | **5.4 %** | 41.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla 50S635BUS 50" 4K UHD Google TV | 330.90 € | **315.90 €** | 10.0 % | **5.0 %** | 313.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG Odyssey G32A (LS32AG320NUXEN) | 329.50 € | **314.50 €** | 10.1 % | **5.1 %** | 312.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 198.90 € | **183.90 €** | 15.0 % | **6.3 %** | 183.98 € | stávame sa najlacnejší |
| SPARTAN 150/40CM 50KG RETRO BOXOVACÍ PYTEL DBX BUSHIDO | 216.50 € | **201.50 €** | 15.0 % | **7.1 %** | 201.59 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 343.90 € | **328.90 €** | 10.1 % | **5.3 %** | 329.00 € | stávame sa najlacnejší |
| Reproduktory Edifier S360DB 2.1 (hnedé) | 359.50 € | **344.50 €** | 14.9 % | **10.1 %** | 344.72 € | stávame sa najlacnejší |
| Whirlpool FFS 7269 B EE | 327.90 € | **313.00 €** | 10.0 % | **5.0 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RR8589CE | 411.90 € | **397.00 €** | 10.1 % | **6.1 %** | 397.09 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 534.90 € | **520.00 €** | 10.0 % | **6.9 %** | 520.40 € | stávame sa najlacnejší |
| Ninja TB201EU Detect Pro s Blendsense | 315.50 € | **300.90 €** | 10.1 % | **5.1 %** | 110.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-BMAX10 party reproduktor | 316.50 € | **301.90 €** | 10.2 % | **5.1 %** | 215.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung UE50U8072F UHD | 323.50 € | **308.90 €** | 10.0 % | **5.1 %** | 288.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **479.90 €** | 15.0 % | **11.6 %** | 480.00 € | stávame sa najlacnejší |
| AnyCubic Kobra 2 Neo 3D Printer | 169.50 € | **154.90 €** | 14.9 % | **5.0 %** | 149.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E7B WHITE | 239.00 € | **224.50 €** | 12.0 % | **5.2 %** | 103.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG ViewFinity S60UD LS24D600UAUXEN | 314.50 € | **300.00 €** | 10.1 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Tab A11+ 128GB Gray | 316.50 € | **302.00 €** | 10.0 % | **5.0 %** | 205.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL CINEMA SB580 | 322.00 € | **307.50 €** | 10.0 % | **5.1 %** | 237.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB Pad 13 (sivý) | 172.00 € | **157.50 €** | 14.9 % | **5.2 %** | 125.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hydro Bag 2.0 25 kg boxovací pytel DBX BUSHIDO černý | 169.00 € | **154.50 €** | 14.9 % | **5.1 %** | 136.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rotoped REBEL ACTIVE RBA-1010 | 169.00 € | **154.50 €** | 15.0 % | **5.1 %** | 150.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5XRCNA366HXB | 522.50 € | **508.00 €** | 10.0 % | **7.0 %** | 508.40 € | stávame sa najlacnejší |
| Ultimea Poseidon M60 BOOM Soundbar | 166.90 € | **152.50 €** | 15.0 % | **5.1 %** | 13.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Soundbar TESLA PrimeSound HQ-990 - Dolby Atmos 2.1 | 168.90 € | **154.50 €** | 15.1 % | **5.3 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 2-pack) | 84.90 € | **70.50 €** | 26.5 % | **5.1 %** | 63.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q10 VF Black | 312.90 € | **298.50 €** | 10.1 % | **5.1 %** | 177.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 43P6K 4K SMART Google TV | 320.90 € | **306.50 €** | 10.0 % | **5.1 %** | 258.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L5316 | 321.90 € | **307.50 €** | 10.0 % | **5.1 %** | 275.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L5310 | 321.90 € | **307.50 €** | 10.0 % | **5.1 %** | 282.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS541C10X | 387.90 € | **373.50 €** | 10.1 % | **6.0 %** | 373.76 € | stávame sa najlacnejší |
| Concept ETV8560bcN | 510.90 € | **496.50 €** | 10.1 % | **7.0 %** | 496.90 € | stávame sa najlacnejší |
| Samsung HW-B750F Soundbar | 313.00 € | **298.90 €** | 10.0 % | **5.1 %** | 187.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 576290000 | 79.99 € | **65.90 €** | 27.8 % | **5.3 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6872 | 77.90 € | **63.90 €** | 28.4 % | **5.3 %** | 61.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef MT 1003 | 307.50 € | **293.50 €** | 10.0 % | **5.0 %** | 224.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung UE32F6002F FHD | 307.00 € | **293.00 €** | 10.0 % | **5.0 %** | 240.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kodak Astro Zoom AZ425 Black | 310.50 € | **296.50 €** | 10.1 % | **5.2 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tour Pro 3 Black | 300.50 € | **286.50 €** | 10.2 % | **5.0 %** | 239.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tour Pro 3 Latte | 300.50 € | **286.50 €** | 10.2 % | **5.0 %** | 239.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook & Grill QG800 WiFi - multifunkční digi... | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 114.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook & Grill QG800 WiFi - multifunkční digi... | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 114.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje W1NGPI72SBS | 302.90 € | **288.90 €** | 10.1 % | **5.0 %** | 255.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CDIH 2D949 | 305.50 € | **291.50 €** | 10.1 % | **5.0 %** | 265.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserová vodováha Uni-T LM575LD | 161.50 € | **147.50 €** | 15.0 % | **5.0 %** | 121.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 8/256GB (ZAFR0272CZ) | 304.90 € | **290.90 €** | 10.1 % | **5.0 %** | 275.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Wi-Fi meteorologická stanice GARNI 980 Arcus | 163.50 € | **149.50 €** | 15.1 % | **5.2 %** | 140.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 5G 8/256GB ZAFM0053CZ | 304.90 € | **290.90 €** | 10.1 % | **5.0 %** | 288.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 10x50 | 164.50 € | **150.50 €** | 15.1 % | **5.3 %** | 149.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **408.90 €** | 15.1 % | **11.2 %** | 409.00 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 472.90 € | **458.90 €** | 10.0 % | **6.8 %** | 459.00 € | stávame sa najlacnejší |
| Gorenje DPNE83/GNLWIFI | 498.50 € | **484.50 €** | 10.1 % | **7.0 %** | 484.80 € | stávame sa najlacnejší |
| iRobot Roomba 105 Combo + WH | 301.50 € | **287.90 €** | 10.1 % | **5.1 %** | 177.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L4366 | 301.50 € | **287.90 €** | 10.1 % | **5.1 %** | 223.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY PS-LX3BT Gramofon | 299.50 € | **285.90 €** | 10.1 % | **5.1 %** | 250.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Diadema Pro 1452/01, stříbrná | 301.50 € | **287.90 €** | 10.0 % | **5.1 %** | 269.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GI6432BSCWF | 332.50 € | **318.90 €** | 10.1 % | **5.6 %** | 319.00 € | stávame sa najlacnejší |
| GoSmart venkovní otočná kamera IP-6000 OWL s 4G/LTE,... | 159.50 € | **145.90 €** | 15.1 % | **5.3 %** | 133.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G57 12+256GB Corsair Green | 304.00 € | **290.50 €** | 10.0 % | **5.1 %** | 218.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualHeat QD575 XXL - multifunkční duál... | 160.00 € | **146.50 €** | 14.9 % | **5.2 %** | 111.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LFU 215 X | 115.00 € | **101.50 €** | 19.0 % | **5.0 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Wheel Moza Racing ESX RS052 (X-BOX, PC) | 154.50 € | **141.00 €** | 15.1 % | **5.1 %** | 129.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GV673B65 | 487.50 € | **474.00 €** | 10.1 % | **7.0 %** | 474.03 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 375.50 € | **362.00 €** | 10.0 % | **6.1 %** | 362.05 € | stávame sa najlacnejší |
| CrockPot CSC112X Pomalý hrnec 6,5 l | 135.90 € | **122.50 €** | 16.8 % | **5.3 %** | 84.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Generátor signálu osciloskopu 2 v 1 FNIRSI 1014D | 154.90 € | **141.50 €** | 15.1 % | **5.2 %** | 129.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC111X Pomalý hrnec 3,5 l | 99.90 € | **86.50 €** | 21.9 % | **5.5 %** | 76.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-800-12 UPS 800W 12V čistý ... | 154.90 € | **141.50 €** | 15.0 % | **5.1 %** | 134.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MAXXO VM5000 | 69.90 € | **56.50 €** | 30.9 % | **5.8 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight digitálny vreckový kompresor | 52.90 € | **39.50 €** | 41.8 % | **5.9 %** | 39.59 € | stávame sa najlacnejší |
| JBL Live Beam 3 Silver | 288.90 € | **275.50 €** | 10.1 % | **5.0 %** | 135.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Instant Pot Pro WiFi (5,7 L) | 292.90 € | **279.50 €** | 10.1 % | **5.1 %** | 159.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 43V6C 4K SMART Google TV | 297.90 € | **284.50 €** | 10.1 % | **5.2 %** | 232.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q7 BF+ White | 291.90 € | **278.50 €** | 10.1 % | **5.0 %** | 245.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Instant Pot Pro Crisp (8,0 L) | 292.90 € | **279.50 €** | 10.1 % | **5.1 %** | 265.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q7 BF+ Black | 291.90 € | **278.50 €** | 10.1 % | **5.0 %** | 268.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fagor 4LVF-638ADIT | 481.90 € | **468.50 €** | 10.0 % | **7.0 %** | 468.60 € | stávame sa najlacnejší |
| Gorenje MO17E1S | 79.00 € | **65.90 €** | 26.0 % | **5.1 %** | 59.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 173.00 € | **159.90 €** | 14.9 % | **6.2 %** | 159.95 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Atom Digital DNB250 ... | 182.00 € | **168.90 €** | 14.9 % | **6.7 %** | 169.00 € | stávame sa najlacnejší |
| ETA 315190010 | 68.99 € | **55.90 €** | 29.7 % | **5.1 %** | 41.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 563490000 | 65.99 € | **52.90 €** | 31.5 % | **5.4 %** | 41.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Huawei Watch GT 5 41mm Milanese | 289.50 € | **276.50 €** | 10.1 % | **5.1 %** | 143.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 - PlayStation Pulse Portal | 279.50 € | **266.50 €** | 10.1 % | **5.0 %** | 183.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-S202D BLACK | 283.50 € | **270.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-S202D SILVER | 283.50 € | **270.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON WorkForce WF-100W | 294.50 € | **281.50 €** | 10.0 % | **5.2 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný tabletový osciloskop FNIRSI 1013D 7" | 152.00 € | **139.00 €** | 14.9 % | **5.1 %** | 104.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Deco BE22 (3-pack) | 283.90 € | **270.90 €** | 10.1 % | **5.0 %** | 238.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko RCSA240K40WN | 287.90 € | **274.90 €** | 10.1 % | **5.1 %** | 250.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shark WD210EU HydroVac Mop&Vysavač | 283.90 € | **270.90 €** | 10.1 % | **5.0 %** | 250.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla EliteCook K70 | 119.00 € | **106.00 €** | 18.0 % | **5.1 %** | 98.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Box R Plus 4K Android TV - UHD multimediáln... | 151.50 € | **138.50 €** | 14.9 % | **5.0 %** | 135.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30m,... | 49.50 € | **36.50 €** | 43.6 % | **5.9 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZMM3512B | 91.90 € | **78.90 €** | 22.4 % | **5.1 %** | 77.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosná pumpa na SUP Flextail Evo SUP Pump Pro (sivá) | 152.90 € | **139.90 €** | 15.1 % | **5.3 %** | 139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GV561C10 | 348.50 € | **335.50 €** | 10.1 % | **6.0 %** | 335.61 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 22.6 % | **9.2 %** | 106.20 € | stávame sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **35.00 €** | 54.8 % | **13.1 %** | 35.01 € | stávame sa najlacnejší |
| LENOVO TAB PLUS 11,5" (ZADX0151CZ) | 276.50 € | **263.90 €** | 10.1 % | **5.1 %** | 248.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Sensazione černý | 343.50 € | **330.90 €** | 10.0 % | **6.0 %** | 330.98 € | stávame sa najlacnejší |
| BEKO B5RCNA405HG | 451.50 € | **438.90 €** | 10.1 % | **7.0 %** | 439.00 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 311.50 € | **298.90 €** | 10.1 % | **5.7 %** | 299.00 € | stávame sa najlacnejší |
| Xiaomi Watch 5 Juniper Green | 282.00 € | **269.50 €** | 10.0 % | **5.1 %** | 84.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Atom Digital DNB100 ... | 148.00 € | **135.50 €** | 15.0 % | **5.3 %** | 102.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link TL-SG2210P PoE Switch | 147.00 € | **134.50 €** | 14.9 % | **5.1 %** | 117.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL PartyBox Encore 2 | 284.00 € | **271.50 €** | 10.0 % | **5.2 %** | 265.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje N62CS2XL4 | 447.50 € | **435.00 €** | 10.1 % | **7.0 %** | 435.10 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 455.50 € | **443.00 €** | 10.0 % | **7.0 %** | 443.20 € | stávame sa najlacnejší |
| ETA 116290000 | 65.99 € | **53.50 €** | 30.6 % | **5.9 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Bar 1000 MK2 Soundbar | 1159.90 € | **1147.50 €** | 10.0 % | **8.9 %** | 1147.90 € | stávame sa najlacnejší |
| Prenosný Bluetooth reproduktor Edifier MP330 (hnedý) | 141.90 € | **129.50 €** | 15.1 % | **5.1 %** | 108.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný reproduktor Bluetooth Edifier MP330 (čierny) | 141.90 € | **129.50 €** | 15.1 % | **5.1 %** | 108.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný reproduktor Bluetooth Edifier MP330 (slonov... | 141.90 € | **129.50 €** | 15.1 % | **5.1 %** | 108.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT Winny 200 | 143.90 € | **131.50 €** | 15.1 % | **5.2 %** | 119.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 142.90 € | **130.50 €** | 15.1 % | **5.1 %** | 123.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /100 Ah  Rebel  BAT0421 | 145.90 € | **133.50 €** | 15.1 % | **5.3 %** | 132.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 - PlayStation Pulse Portal Black | 278.90 € | **266.50 €** | 10.0 % | **5.1 %** | 183.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba 115 Combo + AutoEmpty dock | 277.90 € | **265.50 €** | 10.1 % | **5.2 %** | 199.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 677B Mini | 278.90 € | **266.50 €** | 10.1 % | **5.2 %** | 245.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy VEGA X 8K | 269.00 € | **256.90 €** | 10.0 % | **5.1 %** | 211.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualHeat QD464 XXL - multifunkční duál... | 142.00 € | **129.90 €** | 14.8 % | **5.0 %** | 99.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Běžecký pás REBEL ACTIVE RBA-1017-PRO | 145.00 € | **132.90 €** | 14.8 % | **5.2 %** | 104.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 180 cm 60 kg | 143.00 € | **130.90 €** | 14.9 % | **5.2 %** | 122.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OBSBOT Tiny SE Webcam | 143.00 € | **130.90 €** | 15.0 % | **5.3 %** | 122.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Octagon SF8008 V3 SUPREME Combo 4K UHD, dual OS Enig... | 141.00 € | **128.90 €** | 15.0 % | **5.1 %** | 128.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 182.00 € | **169.90 €** | 15.0 % | **7.4 %** | 169.95 € | stávame sa najlacnejší |
| Ultimea Aura A40 Soundbar | 138.90 € | **126.90 €** | 15.0 % | **5.1 %** | 13.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka chytrá Victron Energy BlueSmart 12V/10A + ... | 140.00 € | **128.00 €** | 14.9 % | **5.1 %** | 84.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple AirPods Pro 3 | 262.50 € | **250.50 €** | 10.1 % | **5.0 %** | 209.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018600 Pizza trouba, 2 min | 265.50 € | **253.50 €** | 10.2 % | **5.2 %** | 219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE TH62E3X | 139.00 € | **127.00 €** | 15.0 % | **5.0 %** | 95.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO TAB PLUS 11,5" (ZADX0073CZ) | 270.50 € | **258.50 €** | 10.0 % | **5.1 %** | 238.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Meet 2 (biela) | 142.50 € | **130.50 €** | 14.9 % | **5.2 %** | 116.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Meet 2 (sivá) | 142.50 € | **130.50 €** | 14.9 % | **5.2 %** | 116.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Meet 2 (zelená) | 142.50 € | **130.50 €** | 14.9 % | **5.2 %** | 116.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CA6 NP3T3EHTB Candy Bake 600 | 262.50 € | **250.50 €** | 10.1 % | **5.0 %** | 239.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1022500 | 265.50 € | **253.50 €** | 10.0 % | **5.0 %** | 243.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 25m,... | 45.50 € | **33.50 €** | 44.1 % | **6.1 %** | 27.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vodný chladič CPU Darkflash DV360S (biely) | 140.50 € | **128.50 €** | 15.2 % | **5.3 %** | 124.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3410 700W 12V nástěnný | 141.50 € | **129.50 €** | 15.1 % | **5.3 %** | 127.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 10.1 % | **7.0 %** | 413.60 € | stávame sa najlacnejší |
| ETA 105190000 | 59.99 € | **48.00 €** | 31.4 % | **5.2 %** | 43.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 42.99 € | **31.00 €** | 57.9 % | **13.8 %** | 31.26 € | stávame sa najlacnejší |
| XIAOMI Mesh System BE3600 Pro (3-pack) | 258.90 € | **247.00 €** | 10.1 % | **5.0 %** | 208.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (čierny) | 272.90 € | **261.00 €** | 15.0 % | **10.0 %** | 261.17 € | stávame sa najlacnejší |
| Gorenje GI6401BX | 258.50 € | **246.90 €** | 10.1 % | **5.1 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TKO14 TAKTICKÁ ZÁŤĚŽOVÁ VESTA 13,5KG HMS PREMIUM | 134.50 € | **122.90 €** | 15.1 % | **5.1 %** | 86.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SK25 BOXOVACÍ HRUŠKA XXL DBX BUSHIDO | 134.50 € | **122.90 €** | 15.1 % | **5.1 %** | 99.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SK25G BOXOVACÍ HRUŠKA XXL DBX BUSHIDO | 134.50 € | **122.90 €** | 15.1 % | **5.1 %** | 99.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-700-12 UPS 700W 12V čistý ... | 134.50 € | **122.90 €** | 15.1 % | **5.1 %** | 109.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT Epever DR3210-DDS, 12/24V, 30... | 134.50 € | **122.90 €** | 14.9 % | **5.0 %** | 109.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava na starostlivosť o srsť domácich zvierat Pet... | 137.50 € | **125.90 €** | 15.0 % | **5.3 %** | 114.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 251.50 € | **239.90 €** | 15.1 % | **9.8 %** | 239.95 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 211.50 € | **199.90 €** | 14.9 % | **8.6 %** | 200.00 € | stávame sa najlacnejší |
| Samsung UE32H5002F HD | 248.50 € | **237.00 €** | 10.1 % | **5.0 %** | 200.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L3280 | 247.50 € | **236.00 €** | 10.1 % | **5.0 %** | 203.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 5G 8/256GB Silver | 258.00 € | **246.50 €** | 10.0 % | **5.1 %** | 228.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 5G 8/256GB Black | 258.00 € | **246.50 €** | 10.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 5G 8/256GB Green | 258.00 € | **246.50 €** | 10.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality Halot R6 3D printer | 131.50 € | **120.00 €** | 15.1 % | **5.0 %** | 105.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo koncentrace CO2 GARNI 102Q | 131.50 € | **120.00 €** | 15.1 % | **5.0 %** | 120.10 € | stávame sa najlacnejší |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 73.99 € | **62.50 €** | 37.8 % | **16.4 %** | 62.78 € | stávame sa najlacnejší |
| Huawei Watch GT 5 41mm White Leather | 250.90 € | **239.50 €** | 10.1 % | **5.1 %** | 143.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Buds4 Pro černá | 250.90 € | **239.50 €** | 10.0 % | **5.0 %** | 153.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Smart Tank 750 Wireless AiO (6UU47A) | 254.90 € | **243.50 €** | 10.1 % | **5.2 %** | 180.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L3286 | 251.90 € | **240.50 €** | 10.1 % | **5.1 %** | 183.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 243.90 € | **232.50 €** | 10.2 % | **5.0 %** | 198.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO TAB PLUS 11,5" (ZADX0049CZ) | 249.90 € | **238.50 €** | 10.1 % | **5.1 %** | 219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Quickdry | 254.90 € | **243.50 €** | 10.1 % | **5.2 %** | 227.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak pre pedále mBooster/CRP/CRP2 Moza Racing RS083 | 131.90 € | **120.50 €** | 15.2 % | **5.2 %** | 116.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 145.90 € | **134.50 €** | 15.2 % | **6.2 %** | 134.90 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 36.90 € | **25.50 €** | 54.3 % | **6.6 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko CF200EWN | 258.90 € | **247.50 €** | 10.0 % | **5.2 %** | 214.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 405.90 € | **394.50 €** | 10.0 % | **6.9 %** | 394.70 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 378.90 € | **367.50 €** | 10.0 % | **6.7 %** | 367.90 € | stávame sa najlacnejší |
| Guzzanti GZ 8571 | 247.00 € | **235.90 €** | 10.0 % | **5.1 %** | 174.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hohem iSteady V3 Ultra (biely) | 133.00 € | **121.90 €** | 14.8 % | **5.3 %** | 76.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC063X | 119.00 € | **107.90 €** | 15.9 % | **5.1 %** | 69.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-BMAX5 party reproduktor | 249.00 € | **237.90 €** | 10.0 % | **5.1 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 160 cm 50 kg | 130.00 € | **118.90 €** | 14.9 % | **5.1 %** | 110.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 715390000 | 52.99 € | **41.90 €** | 32.8 % | **5.0 %** | 35.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZVC251 | 71.90 € | **60.90 €** | 24.0 % | **5.0 %** | 60.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Reflect Aero blue | 240.90 € | **229.90 €** | 10.1 % | **5.1 %** | 110.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Reflect Aero mint | 240.90 € | **229.90 €** | 10.1 % | **5.1 %** | 110.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G21 Comfort Graphite Black | 240.90 € | **229.90 €** | 10.1 % | **5.1 %** | 151.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO VRR84314VB | 241.90 € | **230.90 €** | 10.1 % | **5.1 %** | 181.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualHeat QD73 XXL - multifunkční digit... | 128.90 € | **117.90 €** | 15.1 % | **5.2 %** | 89.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sony HTS20R.CEL | 243.50 € | **232.50 €** | 10.1 % | **5.1 %** | 208.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 150 cm 50 kg | 125.90 € | **114.90 €** | 15.1 % | **5.1 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1700BTs 2.0 (hnedé) | 129.50 € | **118.50 €** | 15.1 % | **5.3 %** | 102.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kávovar na kapsule 5 v 1 HiBREW H2B (čierny) | 125.50 € | **114.50 €** | 15.2 % | **5.1 %** | 102.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 145A | 244.90 € | **233.90 €** | 10.1 % | **5.1 %** | 223.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Box 4K V2 AI-SR Google TV - UHD multimediál... | 127.50 € | **116.50 €** | 15.1 % | **5.1 %** | 106.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Box 4K V2 AI-SR Google TV - UHD multimediál... | 127.50 € | **116.50 €** | 15.1 % | **5.1 %** | 106.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Army 10x50 se zaměřo... | 126.90 € | **115.90 €** | 15.1 % | **5.1 %** | 107.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier M60 2.0 (čierne) | 130.00 € | **119.00 €** | 14.8 % | **5.1 %** | 112.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier M60 2.0 (čierne) | 130.00 € | **119.00 €** | 14.8 % | **5.1 %** | 112.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier M60 2.0 (biele) | 129.50 € | **118.50 €** | 15.2 % | **5.4 %** | 112.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier M60 2.0 (dub) | 129.50 € | **118.50 €** | 15.2 % | **5.4 %** | 112.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica TES 19 MB | 242.50 € | **231.50 €** | 10.2 % | **5.2 %** | 228.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mini generátor signálu FNIRSI SG-004A | 129.50 € | **118.50 €** | 15.2 % | **5.4 %** | 117.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DI6421B | 395.50 € | **384.50 €** | 10.0 % | **6.9 %** | 384.70 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 75.00 € | **64.00 €** | 59.1 % | **35.8 %** | 64.21 € | stávame sa najlacnejší |
| ETA 723590000 | 338.50 € | **327.50 €** | 10.1 % | **6.5 %** | 327.75 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 239.50 € | **228.50 €** | 14.9 % | **9.6 %** | 228.82 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 339.50 € | **328.50 €** | 10.0 % | **6.5 %** | 328.82 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 11W, zmena... | 53.00 € | **42.00 €** | 37.7 % | **9.1 %** | 42.50 € | stávame sa najlacnejší |
| Harman Kardon Onyx Studio 9, černý | 233.90 € | **223.00 €** | 10.1 % | **5.0 %** | 126.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Harman Kardon Onyx Studio 9, šedý | 233.90 € | **223.00 €** | 10.1 % | **5.0 %** | 126.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED adventný kalendár - horská chata,  10x L... | 33.50 € | **22.90 €** | 55.0 % | **6.0 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-UA30E-K | 232.50 € | **221.90 €** | 10.2 % | **5.1 %** | 160.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Smart Tank 725 Wireless AiO (28B51A) | 229.50 € | **218.90 €** | 10.2 % | **5.1 %** | 158.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 8/128GB (ZAFR0428CZ) | 236.50 € | **225.90 €** | 10.1 % | **5.1 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Charles i6 bílá | 228.50 € | **217.90 €** | 10.2 % | **5.1 %** | 189.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Charles i6 černá | 228.50 € | **217.90 €** | 10.2 % | **5.1 %** | 194.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Smart Tank 720 Wireless AiO (6UU46A) | 229.50 € | **218.90 €** | 10.2 % | **5.1 %** | 196.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární panel CARCLEVER 35so60, nabíječka 60W | 127.50 € | **116.90 €** | 14.9 % | **5.3 %** | 109.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Master | 247.50 € | **236.90 €** | 10.2 % | **5.5 %** | 237.00 € | stávame sa najlacnejší |
| Huawei Watch GT 5 46mm Black | 231.50 € | **221.00 €** | 10.0 % | **5.0 %** | 142.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrická zubná kefka MOVA Fresh Pro (strieborná) | 126.00 € | **115.50 €** | 14.9 % | **5.3 %** | 41.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný osciloskop 3 v 1 FNIRSI 2C53P s 4,3" dotyko... | 126.00 € | **115.50 €** | 14.8 % | **5.2 %** | 87.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK SHERMAN BASE 12x50 | 122.50 € | **112.00 €** | 14.9 % | **5.1 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 4/128GB (ZAFR0018CZ) | 227.50 € | **217.00 €** | 10.1 % | **5.0 %** | 203.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Subwoofer Edifier T5 (čierny) | 123.50 € | **113.00 €** | 14.8 % | **5.1 %** | 108.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA TEM18X | 225.50 € | **215.00 €** | 10.1 % | **5.0 %** | 215.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 338 | 581.00 € | **570.50 €** | 10.0 % | **8.0 %** | 570.59 € | stávame sa najlacnejší |
| Concept IDV5160wh | 363.50 € | **353.00 €** | 10.1 % | **7.0 %** | 353.10 € | stávame sa najlacnejší |
| Whirlpool FFS 7469 W EE | 374.50 € | **364.00 €** | 10.1 % | **7.0 %** | 364.20 € | stávame sa najlacnejší |
| GORENJE WNHPI84AS/A | 365.50 € | **355.00 €** | 10.1 % | **6.9 %** | 355.50 € | stávame sa najlacnejší |
| Dreame MOVA J10 cordless upright vacuum cleaner | 123.90 € | **113.50 €** | 15.1 % | **5.5 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO premium 140 cm 40 kg | 122.90 € | **112.50 €** | 15.2 % | **5.4 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prevodovka PXN - usporiadanie H 7+1 | 123.90 € | **113.50 €** | 15.1 % | **5.5 %** | 102.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT40FF2003C | 224.90 € | **214.50 €** | 10.1 % | **5.0 %** | 204.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 14Wr Flex (UMM220V40) | 231.90 € | **221.50 €** | 10.0 % | **5.1 %** | 212.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Midland XT30 | 67.90 € | **57.50 €** | 25.0 % | **5.8 %** | 53.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 70G | 229.90 € | **219.50 €** | 10.1 % | **5.1 %** | 217.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer kráječ ZFS1016 | 54.90 € | **44.50 €** | 30.4 % | **5.7 %** | 39.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 555.90 € | **545.50 €** | 10.1 % | **8.0 %** | 545.74 € | stávame sa najlacnejší |
| Soundbar TESLA PrimeSound HQ-880 - 2.1 soundbar | 117.00 € | **106.90 €** | 15.0 % | **5.0 %** | 72.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-102 Skylink Viaccess Orca bezkartový systém | 121.00 € | **110.90 €** | 14.8 % | **5.2 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BSB-1 CHRÁNIČ HRUDNÍKU DBX BUSHIDO | 117.00 € | **106.90 €** | 14.9 % | **5.0 %** | 100.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 463490000 | 39.99 € | **29.90 €** | 41.7 % | **5.9 %** | 27.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX110 AP černá | 24.99 € | **14.90 €** | 80.0 % | **7.3 %** | 14.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX110 AP,bílá | 24.99 € | **14.90 €** | 80.0 % | **7.3 %** | 14.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.90 €** | 25.0 % | **7.8 %** | 63.00 € | stávame sa najlacnejší |
| Smeg KLF04WHEU | 220.90 € | **210.90 €** | 10.1 % | **5.1 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung HW-B650F Soundbar | 221.50 € | **211.50 €** | 10.1 % | **5.2 %** | 148.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrická zubná kefka MOVA Fresh Pro (čierna) | 120.50 € | **110.50 €** | 14.9 % | **5.4 %** | 47.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smeg DCF02CREU | 217.50 € | **207.50 €** | 10.2 % | **5.1 %** | 152.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT40FG6733C | 219.50 € | **209.50 €** | 10.1 % | **5.1 %** | 159.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS8750 Black | 218.90 € | **208.90 €** | 10.0 % | **5.0 %** | 161.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Blitzwolf BW-V1 Ultra | 117.90 € | **107.90 €** | 15.0 % | **5.3 %** | 60.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Breville VDF130X-01 | 214.90 € | **204.90 €** | 10.2 % | **5.1 %** | 158.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L3276 | 222.50 € | **212.50 €** | 10.0 % | **5.1 %** | 167.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4697 Kuchyňský robot | 221.90 € | **211.90 €** | 10.1 % | **5.1 %** | 169.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier Hecate G2000 PRO Black | 117.90 € | **107.90 €** | 15.0 % | **5.3 %** | 65.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP LaserJet Pro MFP M234sdw (6GX01F) | 215.50 € | **205.50 €** | 10.2 % | **5.1 %** | 165.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44S | 218.50 € | **208.50 €** | 10.1 % | **5.1 %** | 172.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK SHERMAN PLUS  8x42 | 118.50 € | **108.50 €** | 15.2 % | **5.4 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zariadenie na čistenie a sušenie tlače ELEGOO Mercur... | 114.90 € | **104.90 €** | 15.2 % | **5.2 %** | 97.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK New Wise PRO ED 12x50 | 118.50 € | **108.50 €** | 15.2 % | **5.4 %** | 104.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Běžecký pás REBEL ACTIVE RBA-1017 | 116.50 € | **106.50 €** | 15.0 % | **5.1 %** | 104.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Army 10x40 se zaměřo... | 118.50 € | **108.50 €** | 15.2 % | **5.4 %** | 108.55 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 279.90 € | **269.90 €** | 10.1 % | **6.2 %** | 269.98 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 357.50 € | **347.50 €** | 10.1 % | **7.0 %** | 347.60 € | stávame sa najlacnejší |
| TEFAL FR 495070 | 109.00 € | **99.00 €** | 21.5 % | **10.3 %** | 99.20 € | stávame sa najlacnejší |
| Rowenta RH9A73WO | 301.00 € | **291.00 €** | 10.0 % | **6.4 %** | 291.25 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 294.50 € | **284.50 €** | 10.1 % | **6.3 %** | 284.89 € | stávame sa najlacnejší |
| Fén na vlasy MOVA Shine 10 (strieborný) | 114.90 € | **105.00 €** | 15.0 % | **5.1 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 140 cm 40 kg | 114.90 € | **105.00 €** | 15.0 % | **5.1 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Měnič napětí EPever IPower IP2000-42-Plus-T 2000W 48V | 218.90 € | **209.00 €** | 15.0 % | **9.8 %** | 209.12 € | stávame sa najlacnejší |
| HDD 3.5" 1TB 64MB Seagate SKYHAWK pro kamerové systé... | 151.90 € | **142.00 €** | 15.1 % | **7.6 %** | 142.29 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 51.1 % | **9.5 %** | 26.17 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.90 €** | 10.0 % | **7.0 %** | 341.00 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 38.50 € | **28.90 €** | 44.6 % | **8.6 %** | 29.00 € | stávame sa najlacnejší |
| Lamax C11 GPS 4K | 210.50 € | **200.90 €** | 10.1 % | **5.1 %** | 131.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3410 Black | 213.50 € | **203.90 €** | 10.1 % | **5.1 %** | 145.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44W | 210.50 € | **200.90 €** | 10.2 % | **5.2 %** | 161.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Staničný vertikálny vysávač MOVA G70 | 116.50 € | **106.90 €** | 14.8 % | **5.3 %** | 76.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT Lumiax MT3075, 12-24V/30A | 110.50 € | **100.90 €** | 15.2 % | **5.2 %** | 80.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS Edifier NeoDots, ANC (čierne) | 116.50 € | **106.90 €** | 14.8 % | **5.3 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 302390020 | 208.50 € | **198.90 €** | 10.2 % | **5.2 %** | 191.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (hnedé) | 116.50 € | **106.90 €** | 14.8 % | **5.3 %** | 104.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (ružové) | 116.50 € | **106.90 €** | 14.8 % | **5.3 %** | 104.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON i-SENSYS MF3010 | 202.50 € | **193.00 €** | 10.2 % | **5.0 %** | 135.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer+ | 116.00 € | **106.50 €** | 14.8 % | **5.4 %** | 52.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Deco BE22 (2-pack) | 203.50 € | **194.00 €** | 10.2 % | **5.0 %** | 169.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 13Wr Flex (UMM220V30) | 210.50 € | **201.00 €** | 10.0 % | **5.0 %** | 187.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RP02 TRÉNINKOVÉ POSILOVACÍ LANO HMS | 108.50 € | **99.00 €** | 15.1 % | **5.0 %** | 87.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný kávovar 3 v 1 s puzdrom 80 W HiBREW H4A | 117.00 € | **107.50 €** | 14.8 % | **5.5 %** | 96.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vu+ Zero Rev.2 HEVC H.265 DVB-S2 přijímač BÍLÝ | 108.50 € | **99.00 €** | 15.1 % | **5.1 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rotoped REBEL ACTIVE RBA-1009 | 108.50 € | **99.00 €** | 15.1 % | **5.1 %** | 92.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK New Wise PRO ED 10x50 | 114.00 € | **104.50 €** | 14.9 % | **5.3 %** | 100.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1700BT 2.0 (hnedé) | 116.00 € | **106.50 €** | 14.8 % | **5.4 %** | 102.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1700BT 2.0 (čierne) | 115.00 € | **105.50 €** | 14.8 % | **5.3 %** | 102.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH98A9WO | 284.50 € | **275.00 €** | 10.0 % | **6.3 %** | 275.04 € | stávame sa najlacnejší |
| Orbitrek REBEL ACTIVE RBA-1011 | 143.50 € | **134.00 €** | 15.1 % | **7.5 %** | 134.07 € | stávame sa najlacnejší |
| Whirlpool W7F HP33 A | 347.00 € | **337.50 €** | 10.0 % | **7.0 %** | 337.60 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 424.50 € | **415.00 €** | 10.0 % | **7.6 %** | 415.21 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **266.50 €** | 15.0 % | **11.0 %** | 266.79 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 152.50 € | **143.00 €** | 15.2 % | **8.0 %** | 143.29 € | stávame sa najlacnejší |
| Beko VRT96425VD | 261.50 € | **252.00 €** | 10.1 % | **6.1 %** | 252.34 € | stávame sa najlacnejší |
| Amica KF 17191 | 39.00 € | **29.50 €** | 60.1 % | **21.1 %** | 29.86 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **468.50 €** | 15.0 % | **12.7 %** | 468.88 € | stávame sa najlacnejší |
| Kávovar na kapsule 4v1 1450W HiBREW H3A | 114.00 € | **104.50 €** | 14.8 % | **5.2 %** | 104.90 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 179.00 € | **169.50 €** | 14.9 % | **8.8 %** | 169.90 € | stávame sa najlacnejší |
| Guzzanti GZ 325 | 262.50 € | **253.00 €** | 10.1 % | **6.1 %** | 253.50 € | stávame sa najlacnejší |
| ETA 918690030 | 52.99 € | **43.50 €** | 29.3 % | **6.1 %** | 31.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 918690040 | 52.99 € | **43.50 €** | 29.3 % | **6.1 %** | 32.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Smart Tank 675 Wireless AiO (28C12A) | 208.90 € | **199.50 €** | 10.1 % | **5.2 %** | 129.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Smart Tank 670 Wireless AiO (6UU48A) | 208.90 € | **199.50 €** | 10.1 % | **5.2 %** | 142.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cestovný batoh MOVA PB10 Pro Pet | 109.90 € | **100.50 €** | 15.0 % | **5.2 %** | 47.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fén na vlasy MOVA Shine 10 (zlatý) | 109.90 € | **100.50 €** | 15.0 % | **5.2 %** | 58.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo infra sušička NIR+ | 204.90 € | **195.50 €** | 10.1 % | **5.1 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Box Lite 4K V2 Google TV - UHD multimediáln... | 107.90 € | **98.50 €** | 15.1 % | **5.1 %** | 90.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Box Lite 4K V2 Google TV - UHD multimediáln... | 107.90 € | **98.50 €** | 15.1 % | **5.1 %** | 90.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 60/700 AZ2 | 156.90 € | **147.50 €** | 15.1 % | **8.2 %** | 147.53 € | stávame sa najlacnejší |
| RICATECH PR85 | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 49.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **45.50 €** | 37.3 % | **13.8 %** | 45.80 € | stávame sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 50.86 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 29.90 € | **20.50 €** | 57.4 % | **7.9 %** | 20.89 € | stávame sa najlacnejší |
| Party reproduktor JBL PartyBox 130 | 368.00 € | **358.90 €** | 7.8 % | **5.1 %** | 345.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 8502A | 202.00 € | **192.90 €** | 10.0 % | **5.1 %** | 162.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK LabZZ T3 175x | 110.00 € | **100.90 €** | 14.8 % | **5.3 %** | 74.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 40Ah  EMOS bezúdržbový akumul... | 110.00 € | **100.90 €** | 14.8 % | **5.3 %** | 91.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash DY470 bez ventilátorov (... | 106.00 € | **96.90 €** | 14.9 % | **5.0 %** | 88.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1280DB 2.0 (čierne) | 105.00 € | **95.90 €** | 15.0 % | **5.0 %** | 90.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1280DB 2.0 (hnedé) | 105.00 € | **95.90 €** | 15.0 % | **5.0 %** | 90.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier ES60 Bluetooth (biely) | 105.00 € | **95.90 €** | 15.0 % | **5.0 %** | 95.92 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 169.00 € | **159.90 €** | 14.8 % | **8.7 %** | 160.00 € | stávame sa najlacnejší |
| Samsung HW-B450F Soundbar | 199.50 € | **190.50 €** | 10.1 % | **5.1 %** | 113.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 5 WIFI | 194.90 € | **185.90 €** | 10.2 % | **5.1 %** | 116.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Handbrake Moza Racing HBP RS31 | 105.90 € | **96.90 €** | 15.1 % | **5.3 %** | 45.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 32V5C QLED FullHD SMART Android TV | 196.50 € | **187.50 €** | 10.1 % | **5.1 %** | 148.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 441 | 197.90 € | **188.90 €** | 10.1 % | **5.0 %** | 151.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CTP6SC4/E14U | 195.50 € | **186.50 €** | 10.1 % | **5.0 %** | 157.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC 750D30 | 192.90 € | **183.90 €** | 10.2 % | **5.1 %** | 157.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja SL300EU Double Stack 7,6l | 199.50 € | **190.50 €** | 10.2 % | **5.2 %** | 165.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BL91HD31 | 205.50 € | **196.50 €** | 10.0 % | **5.2 %** | 182.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-500-12 UPS 500W 12V čistý ... | 106.90 € | **97.90 €** | 14.9 % | **5.3 %** | 86.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka chytrá Victron Energy BlueSmart 12V/5A + D... | 104.90 € | **95.90 €** | 15.1 % | **5.2 %** | 84.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO TAB 10.1 (ZAEJ0080CZ) | 194.90 € | **185.90 €** | 10.1 % | **5.0 %** | 176.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun MQ 7025 X | 89.90 € | **80.90 €** | 17.1 % | **5.4 %** | 71.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy FMCIDC N602/CA IDEA | 196.90 € | **187.90 €** | 10.1 % | **5.0 %** | 178.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-HTB100EGK | 99.90 € | **90.90 €** | 15.6 % | **5.2 %** | 83.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1280DBs 2.0 (hnedé) | 107.50 € | **98.50 €** | 15.0 % | **5.4 %** | 90.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L3271 | 197.50 € | **188.50 €** | 10.1 % | **5.1 %** | 181.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1280DBs 2.0 (čierne) | 105.90 € | **96.90 €** | 15.1 % | **5.3 %** | 90.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1589 | 202.50 € | **193.50 €** | 10.2 % | **5.3 %** | 188.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-T435W | 197.50 € | **188.50 €** | 10.1 % | **5.1 %** | 183.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HIF-1993D+BT Retro věž | 197.50 € | **188.50 €** | 10.0 % | **5.0 %** | 184.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Army  8x40 se zaměřo... | 105.50 € | **96.50 €** | 14.9 % | **5.1 %** | 94.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO TAB 10.1 (ZAEJ0008CZ) | 198.90 € | **189.90 €** | 10.0 % | **5.1 %** | 189.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente WaterStar20, odvlhčovač vzduchu | 196.90 € | **187.90 €** | 10.1 % | **5.0 %** | 187.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision PRO 4G, fotopast | 223.90 € | **214.90 €** | 10.0 % | **5.6 %** | 214.91 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 204.50 € | **195.50 €** | 15.0 % | **10.0 %** | 195.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 148.00 € | **139.00 €** | 15.0 % | **8.0 %** | 139.41 € | stávame sa najlacnejší |
| SONY sluchátka MDR-EX110AP,černá | 22.90 € | **13.90 €** | 77.3 % | **7.6 %** | 8.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim | 36.99 € | **28.00 €** | 39.0 % | **5.2 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic RF-D100BTEGT | 193.90 € | **185.00 €** | 10.1 % | **5.0 %** | 155.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 9.7 4/128GB Silver (76919) | 195.90 € | **187.00 €** | 10.1 % | **5.1 %** | 164.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44 | 189.90 € | **181.00 €** | 10.2 % | **5.1 %** | 161.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q7 BF White | 187.90 € | **179.00 €** | 10.2 % | **5.0 %** | 177.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3405 500W 12V bílý | 101.90 € | **93.00 €** | 15.1 % | **5.1 %** | 92.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **39.00 €** | 38.7 % | **13.0 %** | 39.50 € | stávame sa najlacnejší |
| Inteligentná lampa sufitowa RGB Yeelight Yeelight Ju... | 99.50 € | **90.90 €** | 15.3 % | **5.3 %** | 46.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Breville VDF133X-01 | 188.50 € | **179.90 €** | 10.2 % | **5.1 %** | 137.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK SKYLINE TRAVEL 50 | 101.50 € | **92.90 €** | 15.1 % | **5.4 %** | 69.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Instant Pot Plus WiFi (5,7 L) | 187.50 € | **178.90 €** | 10.2 % | **5.1 %** | 159.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L1270 | 191.50 € | **182.90 €** | 10.1 % | **5.1 %** | 165.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK BLAZE BASE 60 | 101.50 € | **92.90 €** | 15.1 % | **5.4 %** | 77.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK Camo 60 Rind | 101.50 € | **92.90 €** | 15.1 % | **5.4 %** | 84.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi IM5001 Kuchyňský robot, 8 L | 190.50 € | **181.90 €** | 10.2 % | **5.2 %** | 174.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smeg DCF02BLEU | 190.50 € | **181.90 €** | 10.2 % | **5.2 %** | 174.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vu+ Zero Rev.2 HEVC H.265 DVB-S2 přijímač černý | 102.50 € | **93.90 €** | 15.0 % | **5.3 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus  800 URZ3405-LFP4 500W 12V | 103.50 € | **94.90 €** | 14.8 % | **5.3 %** | 90.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash DY470 so 4 ventilátormi ... | 102.50 € | **93.90 €** | 14.8 % | **5.2 %** | 89.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 10 C | 104.50 € | **95.90 €** | 14.8 % | **5.3 %** | 91.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK Camo 60 Moss | 101.50 € | **92.90 €** | 15.1 % | **5.4 %** | 91.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rollei Powerflex 10x Retro | 189.50 € | **180.90 €** | 10.2 % | **5.2 %** | 179.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL PartyBox Encore Essential 2 | 188.50 € | **179.90 €** | 10.2 % | **5.2 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCR001CBK SmartLife | 133.50 € | **124.90 €** | 15.0 % | **7.6 %** | 125.00 € | stávame sa najlacnejší |
| Gorenje F49CPW | 203.50 € | **194.90 €** | 10.2 % | **5.5 %** | 195.00 € | stávame sa najlacnejší |
| Smeg TSF01CREU | 186.00 € | **177.50 €** | 10.0 % | **5.0 %** | 122.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CI642SCBB MODERNA | 184.50 € | **176.00 €** | 10.1 % | **5.0 %** | 132.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 32V4C QLED HD SMART Android TV | 187.50 € | **179.00 €** | 10.0 % | **5.0 %** | 144.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Indukčná varná doska IsEasy LT3-22 | 104.00 € | **95.50 €** | 14.9 % | **5.5 %** | 83.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií ultra-rychlá GP Charge10 S491 + 4× AA | 102.00 € | **93.50 €** | 14.9 % | **5.3 %** | 86.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 32S4K QLED HD SMART Android TV | 187.50 € | **179.00 €** | 10.0 % | **5.0 %** | 173.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 419T chytrý teploměr s vlhkoměrem | 99.00 € | **90.50 €** | 14.9 % | **5.0 %** | 87.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018200 Horkovzdušná fritéza | 182.50 € | **174.00 €** | 10.2 % | **5.0 %** | 171.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Xtreme 3 black | 187.50 € | **179.00 €** | 10.0 % | **5.0 %** | 178.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 916690040 | 47.99 € | **39.50 €** | 27.9 % | **5.3 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 916690020 | 47.99 € | **39.50 €** | 27.9 % | **5.3 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 317490000 | 52.99 € | **44.50 €** | 25.8 % | **5.7 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 776290000 | 105.99 € | **97.50 €** | 14.2 % | **5.1 %** | 84.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESPRESSO KRUPS Vertuo Next Deluxe Dark | 186.90 € | **178.50 €** | 10.0 % | **5.1 %** | 107.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FFS005X | 187.90 € | **179.50 €** | 10.1 % | **5.2 %** | 113.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT32HG4723C | 184.90 € | **176.50 €** | 10.2 % | **5.2 %** | 123.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 123A | 186.90 € | **178.50 €** | 10.1 % | **5.1 %** | 145.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Smart Projector L1 EU | 194.90 € | **186.50 €** | 10.0 % | **5.3 %** | 158.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja FN101EUST 4v1 Přenosná fritéza | 182.90 € | **174.50 €** | 10.2 % | **5.2 %** | 147.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy FIDCP N615 L | 179.90 € | **171.50 €** | 10.2 % | **5.1 %** | 155.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G2016400 stolní robot | 185.90 € | **177.50 €** | 10.1 % | **5.2 %** | 161.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH2037WO | 187.90 € | **179.50 €** | 10.1 % | **5.2 %** | 165.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OSCAL TIGER 13 8+256GB Black | 185.90 € | **177.50 €** | 10.1 % | **5.1 %** | 165.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Liftingový RF masážny prístroj na tvár ANLAN 01-ADRY... | 97.90 € | **89.50 €** | 15.0 % | **5.1 %** | 78.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 1-15 KG ZÁTĚŽOVÁ VESTA DBX BUSHIDO | 99.90 € | **91.50 €** | 15.2 % | **5.5 %** | 83.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR BLACK 10 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 99.90 € | **91.50 €** | 15.2 % | **5.5 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR BLACK 12 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 99.90 € | **91.50 €** | 15.2 % | **5.5 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR BLACK 14 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 99.90 € | **91.50 €** | 15.2 % | **5.5 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR RED 10 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 99.90 € | **91.50 €** | 15.2 % | **5.5 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR RED 12 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 99.90 € | **91.50 €** | 15.2 % | **5.5 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR RED 14 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 99.90 € | **91.50 €** | 15.2 % | **5.5 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR RED 16 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 99.90 € | **91.50 €** | 15.2 % | **5.5 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOXOVACÍ PYTEL GYMPRO 140/40CM 40KG DBX BUSHIDO | 99.90 € | **91.50 €** | 15.2 % | **5.5 %** | 85.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier QR30 (čierne) | 100.90 € | **92.50 €** | 15.1 % | **5.5 %** | 90.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier QR30 (biele) | 100.90 € | **92.50 €** | 15.1 % | **5.5 %** | 90.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier QR30 (čierne) | 100.90 € | **92.50 €** | 15.1 % | **5.5 %** | 90.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Dongle 4K V2 AI-SR Google TV - UHD multimed... | 100.90 € | **92.50 €** | 15.0 % | **5.4 %** | 91.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Dongle 4K V2 AI-SR Google TV - UHD multimed... | 100.90 € | **92.50 €** | 15.0 % | **5.4 %** | 91.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HIF-8892 EBT Multimediální HI-F | 190.90 € | **182.50 €** | 10.1 % | **5.3 %** | 181.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OSCAL TIGER 13 8+256GB Blue | 185.90 € | **177.50 €** | 10.1 % | **5.1 %** | 176.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 224.90 € | **216.50 €** | 10.2 % | **6.1 %** | 216.54 € | stávame sa najlacnejší |
| Zelmer ZFS0917 | 54.90 € | **46.50 €** | 25.3 % | **6.1 %** | 46.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 425.90 € | **417.50 €** | 15.0 % | **12.7 %** | 417.60 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 32.00 € | **23.90 €** | 43.3 % | **7.0 %** | 23.99 € | stávame sa najlacnejší |
| Anemometr TechnoLine MA10660 | 99.00 € | **90.90 €** | 14.8 % | **5.4 %** | 69.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Dongle Lite 4K V2 Google TV - UHD multimedi... | 95.00 € | **86.90 €** | 14.9 % | **5.1 %** | 79.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Dongle Lite 4K V2 Google TV - UHD multimedi... | 95.00 € | **86.90 €** | 14.9 % | **5.1 %** | 79.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 130 cm 30 kg | 95.00 € | **86.90 €** | 15.1 % | **5.2 %** | 81.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje G642ABX | 159.00 € | **150.90 €** | 10.8 % | **5.2 %** | 147.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **122.90 €** | 14.9 % | **7.8 %** | 123.00 € | stávame sa najlacnejší |
| ETA 002897000 | 39.99 € | **31.90 €** | 33.1 % | **6.2 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 002899010 | 39.99 € | **31.90 €** | 32.5 % | **5.7 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 959890010 | 47.99 € | **39.90 €** | 27.5 % | **6.0 %** | 38.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 205190000 | 74.99 € | **66.90 €** | 18.2 % | **5.5 %** | 49.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Krups XN9408F0 | 170.90 € | **162.90 €** | 10.2 % | **5.1 %** | 107.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A165 Galaxy A16 128GB Black | 181.50 € | **173.50 €** | 10.1 % | **5.2 %** | 127.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba 115 Combo + Charge dock | 178.90 € | **170.90 €** | 10.1 % | **5.2 %** | 125.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Buds4 černá | 178.50 € | **170.50 €** | 10.2 % | **5.3 %** | 129.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP LaserJet Pro MFP M234dw (6GW99F) | 178.50 € | **170.50 €** | 10.2 % | **5.2 %** | 129.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HDMC 32400 TX | 180.50 € | **172.50 €** | 10.2 % | **5.3 %** | 135.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica VT3240 Xpro | 173.90 € | **165.90 €** | 10.2 % | **5.1 %** | 135.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG Odyssey G40B (LS25BG400EUXEN) | 167.50 € | **159.50 €** | 10.3 % | **5.1 %** | 131.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi 15C 8/256GB Midnight Black | 177.00 € | **169.00 €** | 10.0 % | **5.0 %** | 149.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer BE400 WiFi 7 Router | 175.90 € | **167.90 €** | 10.1 % | **5.1 %** | 150.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L1230 | 178.50 € | **170.50 €** | 10.2 % | **5.3 %** | 152.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HIF-1993BT Retro věž | 169.50 € | **161.50 €** | 10.2 % | **5.0 %** | 146.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Edifier W820NB Plus V25 (krémové) | 90.90 € | **82.90 €** | 15.2 % | **5.0 %** | 69.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Edifier W820NB Plus V25 (námornícka modrá) | 90.90 € | **82.90 €** | 15.2 % | **5.0 %** | 69.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Edifier W820NB Plus V25 (ružové) | 90.90 € | **82.90 €** | 15.2 % | **5.0 %** | 69.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Edifier W820NB Plus V25 (sivé) | 90.90 € | **82.90 €** | 15.2 % | **5.0 %** | 69.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Astroplanetárium Levenhuk LabZZ SP20 W | 93.00 € | **85.00 €** | 14.9 % | **5.0 %** | 71.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L2622DW | 183.50 € | **175.50 €** | 10.1 % | **5.3 %** | 164.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vnitřní bezdrátové čidlo kvality vzduchu GARNI 104Q | 93.50 € | **85.50 €** | 15.2 % | **5.3 %** | 74.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 28S | 178.50 € | **170.50 €** | 10.1 % | **5.1 %** | 159.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ruční fotomikroskop Levenhuk Kelvin HPM25 | 95.90 € | **87.90 €** | 15.0 % | **5.4 %** | 79.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární panel CARCLEVER 35so40, nabíječka 40W | 94.50 € | **86.50 €** | 14.8 % | **5.0 %** | 80.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy PARTY Boss 2 200W | 174.90 € | **166.90 €** | 10.0 % | **5.0 %** | 166.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blaupunkt 32WGC5520S | 149.00 € | **141.00 €** | 11.0 % | **5.0 %** | 140.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Motorcycle Intercom EJEAS MS20 | 135.50 € | **127.50 €** | 15.2 % | **8.4 %** | 127.58 € | stávame sa najlacnejší |
| Guzzanti GZ 195 | 436.90 € | **428.90 €** | 10.0 % | **8.0 %** | 429.00 € | stávame sa najlacnejší |
| ELECTROLUX ZE064 | 38.99 € | **31.00 €** | 45.3 % | **15.6 %** | 31.50 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **14.00 €** | 70.9 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Candy CI642CBB/1 | 167.90 € | **160.00 €** | 10.3 % | **5.1 %** | 132.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vonkajšia IP kamera IMOU Titan Pro 6 MP | 88.90 € | **81.00 €** | 15.3 % | **5.0 %** | 71.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB CryptoBox 750 HD | 90.90 € | **83.00 €** | 15.0 % | **5.0 %** | 73.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 201.90 € | **194.00 €** | 15.1 % | **10.6 %** | 194.02 € | stávame sa najlacnejší |
| RUSSELL HOBBS 20630-56 | 52.90 € | **45.00 €** | 23.6 % | **5.1 %** | 35.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **23.00 €** | 54.5 % | **15.0 %** | 23.05 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 41.50 € | **33.90 €** | 53.9 % | **25.7 %** | 33.99 € | stávame sa najlacnejší |
| Domo DO253SW Podlahový čistič 2v1 | 165.50 € | **157.90 €** | 10.3 % | **5.2 %** | 104.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax S8 Dual | 165.50 € | **157.90 €** | 10.3 % | **5.2 %** | 120.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Watch 2 Black | 157.50 € | **149.90 €** | 10.3 % | **5.0 %** | 118.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 6, červený | 166.50 € | **158.90 €** | 10.1 % | **5.0 %** | 128.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 6, fialový | 166.50 € | **158.90 €** | 10.1 % | **5.0 %** | 128.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy FIDC B100 | 166.50 € | **158.90 €** | 10.0 % | **5.0 %** | 139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3408 300W 12V nástěnný | 90.50 € | **82.90 €** | 14.8 % | **5.1 %** | 73.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1280T 2.0 (čierne) | 91.50 € | **83.90 €** | 14.9 % | **5.4 %** | 75.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IT8480E1 | 167.50 € | **159.90 €** | 10.0 % | **5.0 %** | 152.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 080Q měřič kvality venkovního ovzduší | 87.50 € | **79.90 €** | 15.0 % | **5.0 %** | 77.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chladící box Teesa TSA5006.1 35l 230/12V | 90.50 € | **82.90 €** | 15.1 % | **5.4 %** | 81.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-270B Gramofon hnědý | 171.50 € | **163.90 €** | 10.0 % | **5.2 %** | 162.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 122 | 164.50 € | **157.00 €** | 10.0 % | **5.0 %** | 95.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA EliteCook K70 WiFi Duo | 167.00 € | **159.50 €** | 10.1 % | **5.1 %** | 98.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 125W | 166.50 € | **159.00 €** | 10.0 % | **5.1 %** | 124.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 10003 | 164.00 € | **156.50 €** | 10.0 % | **5.0 %** | 139.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48S | 165.50 € | **158.00 €** | 10.0 % | **5.1 %** | 143.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-PROFIGHT 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 91.00 € | **83.50 €** | 14.9 % | **5.5 %** | 72.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-PROFIGHT 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 91.00 € | **83.50 €** | 14.9 % | **5.5 %** | 72.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-PROFIGHT 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 91.00 € | **83.50 €** | 14.9 % | **5.5 %** | 72.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1280T 2.0 (biele) | 93.00 € | **85.50 €** | 14.9 % | **5.6 %** | 75.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-300-12 UPS 300W 12V čistý ... | 90.00 € | **82.50 €** | 15.0 % | **5.4 %** | 75.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 25610-56 | 157.50 € | **150.00 €** | 10.3 % | **5.0 %** | 145.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1280T 2.0 (hnedé) | 87.00 € | **79.50 €** | 15.0 % | **5.1 %** | 75.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RP03 TRÉNINKOVÉ POSILOVACÍ LANO HMS | 91.00 € | **83.50 €** | 14.9 % | **5.5 %** | 79.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR4 2.0 (biele) | 95.00 € | **87.50 €** | 14.8 % | **5.7 %** | 87.59 € | stávame sa najlacnejší |
| Reproduktory Edifier MR4 2.0 (čierne) | 95.00 € | **87.50 €** | 14.8 % | **5.7 %** | 87.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 110.00 € | **102.50 €** | 43.6 % | **33.8 %** | 102.69 € | stávame sa najlacnejší |
| Spájkovacia stanica FNIRSI DWS-200 F | 140.50 € | **133.00 €** | 15.1 % | **9.0 %** | 133.25 € | stávame sa najlacnejší |
| GUZZANTI GZ 44GW | 205.50 € | **198.00 €** | 10.1 % | **6.1 %** | 198.25 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 98.50 € | **91.00 €** | 43.6 % | **32.7 %** | 91.29 € | stávame sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 232.50 € | **225.00 €** | 10.1 % | **6.5 %** | 225.37 € | stávame sa najlacnejší |
| LEIFHEIT Zametač koberců REGULUS | 36.99 € | **29.50 €** | 32.9 % | **6.0 %** | 25.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-ES5A PINK | 169.90 € | **162.50 €** | 10.0 % | **5.3 %** | 77.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-ES5A WHITE | 169.90 € | **162.50 €** | 10.0 % | **5.3 %** | 77.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Smart Tank 580 Wireless AiO (1F3Y2A) | 169.90 € | **162.50 €** | 10.1 % | **5.3 %** | 107.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax F10 GPS 4K | 165.90 € | **158.50 €** | 10.1 % | **5.2 %** | 105.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Air Fryer Oven 1500SB | 171.90 € | **164.50 €** | 10.0 % | **5.3 %** | 129.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tour One M2 černá | 160.90 € | **153.50 €** | 10.3 % | **5.2 %** | 121.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tour One M2 champagne | 160.90 € | **153.50 €** | 10.3 % | **5.2 %** | 121.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics DONGLE R 4K Android TV - UHD multimediální ... | 88.90 € | **81.50 €** | 14.9 % | **5.4 %** | 54.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS 4G-AX56 | 161.90 € | **154.50 €** | 10.2 % | **5.2 %** | 131.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v14 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 86.90 € | **79.50 €** | 15.3 % | **5.4 %** | 57.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v14 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 86.90 € | **79.50 €** | 15.3 % | **5.4 %** | 57.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v14 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 86.90 € | **79.50 €** | 15.3 % | **5.4 %** | 57.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v14 16 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 86.90 € | **79.50 €** | 15.3 % | **5.4 %** | 57.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 35A1 | 160.90 € | **153.50 €** | 10.3 % | **5.2 %** | 132.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 506A | 163.90 € | **156.50 €** | 10.2 % | **5.2 %** | 138.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Ario II | 163.90 € | **156.50 €** | 10.1 % | **5.2 %** | 147.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZFS0919 | 69.90 € | **62.50 €** | 17.9 % | **5.4 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1021900 | 170.90 € | **163.50 €** | 10.1 % | **5.3 %** | 157.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Charles i4 White | 167.90 € | **160.50 €** | 10.2 % | **5.3 %** | 156.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dvojitá stojacia lampa s diaľkovým ovládaním BlitzWi... | 88.90 € | **81.50 €** | 15.1 % | **5.5 %** | 77.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun TD5030 | 160.90 € | **153.50 €** | 10.2 % | **5.1 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar IR-540D+BT BK Internetové rádio | 163.90 € | **156.50 €** | 10.2 % | **5.2 %** | 155.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trevi LTV 2410 SMART LED | 158.90 € | **151.50 €** | 10.1 % | **5.0 %** | 150.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zvuková karta Maono AME2 GEN2 | 88.90 € | **81.50 €** | 15.0 % | **5.4 %** | 81.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE200 AC750 WiFi Range Extender | 29.90 € | **22.50 €** | 39.9 % | **5.3 %** | 19.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje W3NGPI74A3S | 266.90 € | **259.50 €** | 10.0 % | **7.0 %** | 259.84 € | stávame sa najlacnejší |
| Inteligentná lampa sufitowa RGB Yeelight Yeelight Ju... | 82.00 € | **74.90 €** | 15.0 % | **5.0 %** | 31.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné stropné svietidlo CW Yeelight Meteor C500. | 86.00 € | **78.90 €** | 14.9 % | **5.5 %** | 46.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP LaserJet MFP M140w (7MD72F) | 159.00 € | **151.90 €** | 10.0 % | **5.1 %** | 121.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Wide angle and Macro lens Freewell for Fuji X100VI/X... | 86.00 € | **78.90 €** | 14.9 % | **5.4 %** | 51.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smeg TSF01WHEU | 163.00 € | **155.90 €** | 10.0 % | **5.2 %** | 137.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404 300W 12V | 87.00 € | **79.90 €** | 14.7 % | **5.4 %** | 71.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT74225VI | 155.00 € | **147.90 €** | 10.1 % | **5.0 %** | 144.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 079090000 | 31.99 € | **24.90 €** | 36.2 % | **6.0 %** | 24.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo Ultra Slim 2.1 SB240 | 154.50 € | **147.50 €** | 10.2 % | **5.2 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver VS3190X svářečka folií | 150.50 € | **143.50 €** | 10.2 % | **5.0 %** | 104.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun CG7040 | 155.00 € | **148.00 €** | 10.0 % | **5.1 %** | 119.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 360° vonkajšia WiFi kamera IMOU Cruiser Dual 8MP | 83.50 € | **76.50 €** | 15.2 % | **5.5 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Charles i3 Plus bílá | 152.50 € | **145.50 €** | 10.3 % | **5.2 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Charles i3 Plus černá | 152.50 € | **145.50 €** | 10.3 % | **5.2 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BB5 10 oz boxerské rukavice DBX BUSHIDO | 82.50 € | **75.50 €** | 15.2 % | **5.4 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BB5 12 oz boxerské rukavice DBX BUSHIDO | 82.50 € | **75.50 €** | 15.2 % | **5.4 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BB5 14 oz boxerské rukavice DBX BUSHIDO | 82.50 € | **75.50 €** | 15.2 % | **5.4 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Navitel MR750 SMART | 156.50 € | **149.50 €** | 10.1 % | **5.2 %** | 125.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 5 teal | 146.50 € | **139.50 €** | 10.3 % | **5.0 %** | 116.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R980T 2.0 (čierne) | 81.50 € | **74.50 €** | 15.2 % | **5.3 %** | 54.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L2600D | 152.50 € | **145.50 €** | 10.1 % | **5.1 %** | 128.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 180 x 45 cm prázdný | 82.50 € | **75.50 €** | 15.2 % | **5.4 %** | 60.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remoska T41/42 Tria Black | 150.90 € | **143.90 €** | 10.1 % | **5.0 %** | 129.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Otočná vonkajšia WiFi kamera so solárnym panelom IMO... | 82.50 € | **75.50 €** | 15.2 % | **5.4 %** | 61.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C310 Outdoor Wi-Fi Camera | 49.90 € | **42.90 €** | 22.5 % | **5.3 %** | 29.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO244SV | 147.50 € | **140.50 €** | 10.2 % | **5.0 %** | 128.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pec na pizzu TEESA TSA3231 SUPREME | 81.50 € | **74.50 €** | 15.0 % | **5.1 %** | 63.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Hottower | 157.90 € | **150.90 €** | 10.1 % | **5.2 %** | 140.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 22101-56 | 156.50 € | **149.50 €** | 10.3 % | **5.3 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Instant Pot Vortex Dual (8,0 L) | 152.50 € | **145.50 €** | 10.1 % | **5.0 %** | 136.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kodak Friendly Zoom FZ55 Blue | 157.90 € | **150.90 €** | 10.1 % | **5.2 %** | 142.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kodak Friendly Zoom FZ55 Red | 157.90 € | **150.90 €** | 10.1 % | **5.2 %** | 142.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka Baseus Amblight 30000mAh, 4xUSB, USB-C, 6... | 86.50 € | **79.50 €** | 14.8 % | **5.5 %** | 70.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sony SRS-LS1 LinkBuds speaker, šedý | 152.50 € | **145.50 €** | 10.2 % | **5.2 %** | 137.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sony WFLS910NG zelená | 158.50 € | **151.50 €** | 10.2 % | **5.3 %** | 147.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BMOB20231X | 160.90 € | **153.90 €** | 10.0 % | **5.2 %** | 150.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L1630W | 158.50 € | **151.50 €** | 10.1 % | **5.3 %** | 148.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1018801 Pákový kávovar | 147.90 € | **140.90 €** | 10.2 % | **5.0 %** | 137.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Venkovní  sušák Linomatic 600 P | 151.50 € | **144.50 €** | 10.1 % | **5.0 %** | 143.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla 32E635BHS 32" HD LED AndroidTV 11 | 155.50 € | **148.50 €** | 10.1 % | **5.1 %** | 147.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210A | 221.00 € | **214.00 €** | 10.0 % | **6.5 %** | 214.02 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **101.50 €** | 14.9 % | **7.5 %** | 101.52 € | stávame sa najlacnejší |
| Tesla GSM-LTE zesilovač/opakovač 900/1800 MHz - komp... | 190.50 € | **183.50 €** | 15.1 % | **10.9 %** | 183.57 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 92.00 € | **85.00 €** | 14.8 % | **6.1 %** | 85.22 € | stávame sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 154.50 € | **147.50 €** | 10.2 % | **5.2 %** | 147.80 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 47.00 € | **40.00 €** | 58.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 29.00 € | **22.00 €** | 54.0 % | **16.8 %** | 22.45 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 183.90 € | **177.00 €** | 10.2 % | **6.0 %** | 177.04 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 194.90 € | **188.00 €** | 10.1 % | **6.2 %** | 188.22 € | stávame sa najlacnejší |
| SONOFF NSPanel Pro 120 Smart Control Panel Matter Wi... | 112.90 € | **106.00 €** | 15.1 % | **8.1 %** | 106.30 € | stávame sa najlacnejší |
| TEFAL HB 643138 | 54.90 € | **48.00 €** | 24.9 % | **9.2 %** | 48.38 € | stávame sa najlacnejší |
| Zelmer ZIR1505 | 31.90 € | **25.00 €** | 37.0 % | **7.4 %** | 25.47 € | stávame sa najlacnejší |
| Breville VDF131X-01 | 150.50 € | **143.90 €** | 10.1 % | **5.2 %** | 58.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rollei Compactline 10x | 149.50 € | **142.90 €** | 10.1 % | **5.3 %** | 98.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax T10 4K GPS (s hlášením radarů) | 147.50 € | **140.90 €** | 10.2 % | **5.3 %** | 104.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP LaserJet M209dw (6GW62F) | 145.50 € | **138.90 €** | 10.0 % | **5.0 %** | 103.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Watch S4 Silver | 144.50 € | **137.90 €** | 10.1 % | **5.1 %** | 102.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON WorkForce Pro WF-3820DWF | 141.50 € | **134.90 €** | 10.2 % | **5.0 %** | 104.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO TAB ONE (ZAF00235CZ) | 138.50 € | **131.90 €** | 10.4 % | **5.1 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 150 x 40 cm prázdný | 76.50 € | **69.90 €** | 15.3 % | **5.4 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Horizon3 Black | 137.50 € | **130.90 €** | 10.3 % | **5.0 %** | 111.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Horizon3 Grey | 137.50 € | **130.90 €** | 10.3 % | **5.0 %** | 111.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT32HG6733C | 150.50 € | **143.90 €** | 10.0 % | **5.2 %** | 127.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v19 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 76.50 € | **69.90 €** | 15.3 % | **5.4 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v19 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 76.50 € | **69.90 €** | 15.3 % | **5.4 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v19 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 76.50 € | **69.90 €** | 15.3 % | **5.4 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v19 8 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 76.50 € | **69.90 €** | 15.3 % | **5.4 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| STRIKER 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 76.50 € | **69.90 €** | 15.3 % | **5.4 %** | 55.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| STRIKER 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 76.50 € | **69.90 €** | 15.3 % | **5.4 %** | 55.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| STRIKER 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 76.50 € | **69.90 €** | 15.3 % | **5.4 %** | 55.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Flex 3 Black | 136.50 € | **129.90 €** | 10.3 % | **5.0 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Flex 3 Blue | 136.50 € | **129.90 €** | 10.3 % | **5.0 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Flex 3 Purple | 136.50 € | **129.90 €** | 10.3 % | **5.0 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Flex 3 Silver | 136.50 € | **129.90 €** | 10.3 % | **5.0 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung SWA-9250S Zadní reproduktory | 147.50 € | **140.90 €** | 10.1 % | **5.1 %** | 130.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MediaBox XG500 4K UHD Google TV multimediální ... | 75.50 € | **68.90 €** | 15.3 % | **5.3 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 596 | 146.50 € | **139.90 €** | 10.3 % | **5.3 %** | 137.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Beam 3 Blue | 143.50 € | **136.90 €** | 10.1 % | **5.1 %** | 135.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Beam 3 Purple | 143.50 € | **136.90 €** | 10.1 % | **5.1 %** | 135.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC718D10 | 149.50 € | **142.90 €** | 10.1 % | **5.3 %** | 142.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT24HG4723C | 145.50 € | **138.90 €** | 10.3 % | **5.3 %** | 138.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechnoLine WS 6449 | 75.50 € | **68.90 €** | 15.4 % | **5.3 %** | 68.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **88.90 €** | 14.9 % | **6.9 %** | 89.00 € | stávame sa najlacnejší |
| LEIFHEIT 81514 Sušák Pegasus 180 Solid | 44.09 € | **37.50 €** | 24.7 % | **6.1 %** | 32.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT 11950 Mech. zam.REGULUS SUPRA | 31.49 € | **24.90 €** | 34.7 % | **6.5 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné stropné svietidlo s osvetlením na okraj... | 77.00 € | **70.50 €** | 15.0 % | **5.3 %** | 31.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 Power 4+256GB Blue | 152.00 € | **145.50 €** | 10.0 % | **5.3 %** | 108.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 Power 4+256GB Brown | 152.00 € | **145.50 €** | 10.0 % | **5.3 %** | 109.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARB-415 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 78.00 € | **71.50 €** | 14.9 % | **5.4 %** | 42.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARB-415 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 78.00 € | **71.50 €** | 14.9 % | **5.4 %** | 42.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARB-415 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 78.00 € | **71.50 €** | 14.9 % | **5.4 %** | 42.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARB-415 16 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 78.00 € | **71.50 €** | 14.9 % | **5.4 %** | 42.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 160 x 40 cm prázdný | 78.00 € | **71.50 €** | 14.9 % | **5.4 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amiko Mini 4K Combo - DVB-S2/T2/C přijímač | 73.50 € | **67.00 €** | 15.2 % | **5.0 %** | 45.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1389/14 | 134.50 € | **128.00 €** | 10.3 % | **5.0 %** | 108.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 1-10 KG ZÁTĚŽOVÁ VESTA DBX BUSHIDO | 78.00 € | **71.50 €** | 14.9 % | **5.4 %** | 55.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT  Regulus PowerVac 2in1 11925 | 144.00 € | **137.50 €** | 10.0 % | **5.1 %** | 124.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla RoboStar iQ550 robotický vysavač | 151.00 € | **144.50 €** | 10.0 % | **5.3 %** | 132.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer AX73 WiFi Router | 136.50 € | **130.00 €** | 10.3 % | **5.0 %** | 118.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-1512E | 143.00 € | **136.50 €** | 10.0 % | **5.0 %** | 125.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON SELPHY CP-1500 White | 149.00 € | **142.50 €** | 10.0 % | **5.2 %** | 135.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SBRX PRÁZDNÝ 140 X 31 CM BOXOVACÍ PYTEL DBX BUSHIDO | 78.00 € | **71.50 €** | 14.9 % | **5.4 %** | 64.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono DM40 S Pro (biely) | 76.00 € | **69.50 €** | 15.0 % | **5.1 %** | 64.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SK30 ČERNO-BÍLÁ 30 KG BOXOVACÍ HRUŠKA DBX BUSHIDO | 78.00 € | **71.50 €** | 14.9 % | **5.4 %** | 66.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SK30 ČERNO-ČERVENÁ 30 KG BOXOVACÍ HRUŠKA DBX BUSHIDO | 78.00 € | **71.50 €** | 14.9 % | **5.4 %** | 66.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 580 Line | 75.50 € | **69.00 €** | 14.9 % | **5.0 %** | 67.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 33Ah  VIPOW bezúdržbový akumu... | 73.50 € | **67.00 €** | 15.2 % | **5.0 %** | 65.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI 2C53T 3 v 1 prenosný osciloskop multimeter ge... | 79.00 € | **72.50 €** | 15.0 % | **5.6 %** | 70.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trevi LTV 2401 SA2 LED | 137.50 € | **131.00 €** | 10.2 % | **5.0 %** | 130.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 407.50 € | **401.00 €** | 15.0 % | **13.1 %** | 401.04 € | stávame sa najlacnejší |
| GUZZANTI GZ 8501A | 157.00 € | **150.50 €** | 10.0 % | **5.5 %** | 150.71 € | stávame sa najlacnejší |
| Guzzanti GZ 09B2 | 186.50 € | **180.00 €** | 10.0 % | **6.2 %** | 180.22 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 354.50 € | **348.00 €** | 15.1 % | **12.9 %** | 348.34 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 85.00 € | **78.50 €** | 15.0 % | **6.2 %** | 78.90 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP WL HD | 86.00 € | **79.50 €** | 14.8 % | **6.1 %** | 79.90 € | stávame sa najlacnejší |
| ETA 859890040 | 39.99 € | **33.50 €** | 26.8 % | **6.2 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 192890000 | 29.99 € | **23.50 €** | 36.2 % | **6.7 %** | 21.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.5 % | **9.2 %** | 18.67 € | stávame sa najlacnejší |
| Zelmer sušička potravin ZFD1005 | 69.99 € | **63.50 €** | 23.3 % | **11.9 %** | 63.80 € | stávame sa najlacnejší |
| Vysokorýchlostný sušič vlasov MOVA powered by Dreame... | 77.90 € | **71.50 €** | 15.2 % | **5.7 %** | 34.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG MH6535GIS | 145.90 € | **139.50 €** | 10.2 % | **5.4 %** | 111.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef G-Line G 50 | 143.90 € | **137.50 €** | 10.2 % | **5.3 %** | 112.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Navitel R900 4K | 99.90 € | **93.50 €** | 12.3 % | **5.1 %** | 68.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash DS900 AIR (čierna) + 6 v... | 72.90 € | **66.50 €** | 15.2 % | **5.0 %** | 44.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1003202 Pizza trouba Napoleta | 143.90 € | **137.50 €** | 10.1 % | **5.2 %** | 123.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 4632/03 | 142.90 € | **136.50 €** | 10.0 % | **5.1 %** | 123.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT Victron Energy SmartSolar 75V... | 74.90 € | **68.50 €** | 15.2 % | **5.3 %** | 61.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 140 x 40 cm prázdný | 77.90 € | **71.50 €** | 15.2 % | **5.7 %** | 65.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente WaterStar12, odvlhčovač vzduchu | 137.90 € | **131.50 €** | 10.2 % | **5.1 %** | 127.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 - PlayStation Pulse Elite Black | 144.90 € | **138.50 €** | 10.2 % | **5.3 %** | 135.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DI-WAY AND-X88PRO X5M 4K 4GB, 32GB, Android 14, Dual... | 78.90 € | **72.50 €** | 15.0 % | **5.7 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOZA RACING ES RS046 venček volantu pre hráčov | 72.90 € | **66.50 €** | 15.2 % | **5.0 %** | 64.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Pink | 146.90 € | **140.50 €** | 10.1 % | **5.3 %** | 139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární panel CARCLEVER 35so30, nabíječka 30W | 73.90 € | **67.50 €** | 15.2 % | **5.2 %** | 66.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1013900 indukční vařič | 145.90 € | **139.50 €** | 10.1 % | **5.3 %** | 139.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 203.90 € | **197.50 €** | 10.2 % | **6.7 %** | 197.52 € | stávame sa najlacnejší |
| Grafický tablet Huion H1060P | 74.90 € | **68.50 €** | 15.2 % | **5.4 %** | 68.73 € | stávame sa najlacnejší |
| Albrecht DR 865 | 159.90 € | **153.50 €** | 11.6 % | **7.2 %** | 153.79 € | stávame sa najlacnejší |
| Tefal GC728D10 | 169.90 € | **163.50 €** | 10.1 % | **6.0 %** | 163.90 € | stávame sa najlacnejší |
| Rowenta RH6A35WO | 135.90 € | **129.50 €** | 10.3 % | **5.1 %** | 129.90 € | stávame sa najlacnejší |
| Niceboy ORYX K300X | 37.90 € | **31.50 €** | 27.6 % | **6.0 %** | 28.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky + časový spí... | 18.90 € | **12.50 €** | 60.6 % | **6.2 %** | 12.70 € | stávame sa najlacnejší |
| Beko BDFS26046XQ | 321.90 € | **315.50 €** | 10.1 % | **7.9 %** | 315.90 € | stávame sa najlacnejší |
| Roadstar HRA-270CD+BT Vintage rádio DAB+ | 137.00 € | **130.90 €** | 10.0 % | **5.1 %** | 70.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mio MiVue 935W 4K | 139.00 € | **132.90 €** | 10.0 % | **5.2 %** | 110.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BB2 10 oz boxerské rukavice DBX BUSHIDO | 73.00 € | **66.90 €** | 14.7 % | **5.1 %** | 52.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DBX-GG1 VEL.XL PROFIGHTER SUSPENZOR DBX BUSHIDO | 73.00 € | **66.90 €** | 14.7 % | **5.1 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO 130 x 35 cm prázdný | 73.00 € | **66.90 €** | 14.7 % | **5.1 %** | 55.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pec na pizzu TEESA TSA3238 SUPREME+ | 73.00 € | **66.90 €** | 15.1 % | **5.4 %** | 56.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Autochladnička TEESA TSA5001.1 25L | 73.00 € | **66.90 €** | 15.1 % | **5.4 %** | 62.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| Prenosný osciloskop 3 v 1 FNIRSI 2C23T multimetrický... | 69.90 € | **63.90 €** | 15.2 % | **5.3 %** | 59.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live 770NC Black | 128.50 € | **122.50 €** | 10.4 % | **5.2 %** | 68.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP ENVY Photo 7931 (B6JX3B) | 130.50 € | **124.50 €** | 10.3 % | **5.2 %** | 90.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy AirFryer DUO | 132.00 € | **126.00 €** | 10.1 % | **5.1 %** | 93.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné stropné svietidlo CW Yeelight Meteor C400. | 69.00 € | **63.00 €** | 15.1 % | **5.1 %** | 31.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision PRO WiFi, fotopast | 129.50 € | **123.50 €** | 10.4 % | **5.3 %** | 93.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax X9.2 | 129.90 € | **123.90 €** | 10.3 % | **5.2 %** | 95.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DR-243CL | 138.90 € | **132.90 €** | 10.0 % | **5.3 %** | 105.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Gril BBQ VG 200 | 131.90 € | **125.90 €** | 10.2 % | **5.2 %** | 103.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi 15C 4/128GB Mint Green | 134.90 € | **128.90 €** | 10.0 % | **5.1 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BB4 10 oz boxerské rukavice DBX BUSHIDO | 73.50 € | **67.50 €** | 14.7 % | **5.3 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BB4 12 oz boxerské rukavice DBX BUSHIDO | 73.50 € | **67.50 €** | 14.7 % | **5.3 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BB4 14 oz boxerské rukavice DBX BUSHIDO | 73.50 € | **67.50 €** | 14.7 % | **5.3 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1015510 Mikrovlnná trouba | 129.50 € | **123.50 €** | 10.2 % | **5.1 %** | 106.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi 15C 4/128GB Midnight Black | 134.90 € | **128.90 €** | 10.0 % | **5.1 %** | 114.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision LTE CLOUD | 132.50 € | **126.50 €** | 10.3 % | **5.3 %** | 112.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Venkovní sušák LINOMATIC 500 De | 130.50 € | **124.50 €** | 10.1 % | **5.0 %** | 111.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HRA-1500UEMP Vintage radio CD/M | 134.90 € | **128.90 €** | 10.1 % | **5.2 %** | 116.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal VC502D10 | 134.50 € | **128.50 €** | 10.2 % | **5.2 %** | 116.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast s funkciou Mirro... | 71.50 € | **65.50 €** | 15.1 % | **5.5 %** | 55.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool AKR 5390/1 IX | 131.90 € | **125.90 €** | 10.3 % | **5.3 %** | 117.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER HL-L2442DW | 129.90 € | **123.90 €** | 10.2 % | **5.1 %** | 115.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1003210 Pizza trouba Napoleta | 136.50 € | **130.50 €** | 10.2 % | **5.4 %** | 122.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO 8265+ DVB-S2/T2/C kombo přijímač HD | 71.50 € | **65.50 €** | 14.8 % | **5.2 %** | 57.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gimbal Hohem iSteady XE | 70.90 € | **64.90 €** | 15.3 % | **5.5 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-52 Skylink Nagravision bezkartový systém | 75.50 € | **69.50 €** | 14.7 % | **5.6 %** | 62.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-52 Skylink Nagravision bezkartový systém | 75.50 € | **69.50 €** | 14.7 % | **5.6 %** | 62.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP ENVY Photo 7930 (B63K5B) | 130.50 € | **124.50 €** | 10.3 % | **5.2 %** | 117.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer AX23 WiFi Router | 59.90 € | **53.90 €** | 17.0 % | **5.3 %** | 47.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CEP5304X | 131.90 € | **125.90 €** | 10.2 % | **5.1 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FR600D10 | 132.90 € | **126.90 €** | 10.0 % | **5.0 %** | 121.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cestovný batoh pre domácich miláčikov PetKit Breezy ... | 69.50 € | **63.50 €** | 15.2 % | **5.2 %** | 58.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 06B1 | 128.50 € | **122.50 €** | 10.2 % | **5.0 %** | 118.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze Stratos 3 Pro Smartwatch (Black) | 67.50 € | **61.50 €** | 15.4 % | **5.1 %** | 58.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamp Neewer SL90 Pro LED RGB 12W 2500-10000K | 71.50 € | **65.50 €** | 15.2 % | **5.5 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 618B Precise | 76.50 € | **70.50 €** | 14.7 % | **5.7 %** | 69.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 618W Precise | 76.50 € | **70.50 €** | 14.7 % | **5.7 %** | 69.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Hohem (2TX + 1RX + nabíjacie puzdro )Typ-C | 74.50 € | **68.50 €** | 14.9 % | **5.6 %** | 67.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička, 7W, stmievateľná, zmena... | 26.00 € | **20.00 €** | 37.2 % | **5.5 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOR20 ZÁŤĚŽOVÁ VESTA 20KG HMS | 86.90 € | **80.90 €** | 15.3 % | **7.3 %** | 80.94 € | stávame sa najlacnejší |
| Candy CDPH 2D947X | 321.50 € | **315.50 €** | 10.1 % | **8.0 %** | 315.60 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 77.50 € | **71.50 €** | 15.3 % | **6.3 %** | 71.67 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 77.50 € | **71.50 €** | 15.4 % | **6.4 %** | 71.67 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **216.50 €** | 15.0 % | **11.9 %** | 216.70 € | stávame sa najlacnejší |
| Guzzanti GZ 215RB | 310.50 € | **304.50 €** | 10.1 % | **7.9 %** | 304.70 € | stávame sa najlacnejší |
| Braun CG9043 | 219.00 € | **213.00 €** | 10.0 % | **7.0 %** | 213.28 € | stávame sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 172.00 € | **166.00 €** | 15.0 % | **11.0 %** | 166.30 € | stávame sa najlacnejší |
| Gorenje R49CPW | 284.50 € | **278.50 €** | 10.1 % | **7.8 %** | 278.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DY470 bez ventilátorov (... | 109.00 € | **103.00 €** | 15.0 % | **8.6 %** | 103.45 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **16.00 €** | 49.2 % | **8.6 %** | 16.50 € | stávame sa najlacnejší |
| Guzzanti GZ 05B1 | 124.90 € | **119.00 €** | 10.3 % | **5.1 %** | 101.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Comfort | 69.90 € | **64.00 €** | 14.7 % | **5.0 %** | 60.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL KO 250830 | 39.90 € | **34.00 €** | 23.5 % | **5.3 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Clean Twist M Ergo+náhr. Static | 46.90 € | **41.00 €** | 29.8 % | **13.5 %** | 41.29 € | stávame sa najlacnejší |
| Tesla TE-300 | 27.90 € | **22.00 €** | 36.2 % | **7.4 %** | 22.50 € | stávame sa najlacnejší |
| Gorenje WPNEI72SA1SWIFI | 291.90 € | **286.00 €** | 10.1 % | **7.9 %** | 286.30 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 298.90 € | **293.00 €** | 10.1 % | **8.0 %** | 293.30 € | stávame sa najlacnejší |
| Gorenje W11NHPI84AS | 290.90 € | **285.00 €** | 10.1 % | **7.9 %** | 285.50 € | stávame sa najlacnejší |
| Gorenje RK58DPB4I | 299.50 € | **293.90 €** | 10.1 % | **8.0 %** | 294.00 € | stávame sa najlacnejší |
| Candy ProWash 550 SLIM BP 37SBL8-S | 278.50 € | **272.90 €** | 10.1 % | **7.9 %** | 273.00 € | stávame sa najlacnejší |
| Candy TCA273D3-S | 286.50 € | **280.90 €** | 10.0 % | **7.9 %** | 281.00 € | stávame sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-10v2 vel.L | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 38.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-10v2 vel.M | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 38.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-10v2 vel.XL | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 38.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DBD-SP-10v4 vel. L chrániče holení DBX BUSHIDO | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DBD-SP-10v4 vel. M chrániče holení DBX BUSHIDO | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DBD-SP-10v4 vel. XL chrániče holení DBX BUSHIDO | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-10 vel. XL | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-10 vel.L | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-10 vel.M | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-10v1 vel.L | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-10v1 vel.M | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-10v1 vel.XL | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-11 vel.L | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-11 vel.M | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič holení DBX BUSHIDO DBD-SP-11 vel.XL | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-10v5 VEL.M CHRÁNIČE HOLENÍ DBX BUSHIDO | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-10v5 VEL.XL CHRÁNIČE HOLENÍ DBX BUSHIDO | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-10V6 VEL.L CHRÁNIČE HOLENÍ DBX BUSHIDO | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-10V6 VEL.XL CHRÁNIČE HOLENÍ DBX BUSHIDO | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO DBD-B-2 vel.10 oz | 66.50 € | **60.90 €** | 15.3 % | **5.6 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO DBD-B-2 vel.12 oz | 66.50 € | **60.90 €** | 15.3 % | **5.6 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO DBD-B-2 vel.14 oz | 66.50 € | **60.90 €** | 15.3 % | **5.6 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARH-2192 vel. L boxerská helma DBX BUSHIDO | 65.50 € | **59.90 €** | 15.1 % | **5.3 %** | 40.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v13 10 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v13 12 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v13 14 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v13 16 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARH-2180 vel. M boxerská helma DBX BUSHIDO | 66.50 € | **60.90 €** | 15.3 % | **5.6 %** | 44.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight Cube 4-Matrix (4 balenia) | 66.50 € | **60.90 €** | 15.4 % | **5.7 %** | 45.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS E8610 GoSmart bezdrátová meteostanice s Wi-Fi | 69.50 € | **63.90 €** | 14.8 % | **5.5 %** | 50.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mini generátor signálu FNIRSI SG-003A | 66.50 € | **60.90 €** | 15.0 % | **5.3 %** | 49.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOR15 ZÁŤĚŽOVÁ VESTA 14,5KG HMS | 68.50 € | **62.90 €** | 14.8 % | **5.4 %** | 52.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI SAG-55 PLUS inteligentná teplovzdušná pištoľ | 65.50 € | **59.90 €** | 15.1 % | **5.3 %** | 54.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 10x50 | 67.50 € | **61.90 €** | 15.1 % | **5.5 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 Blue AI | 69.50 € | **63.90 €** | 14.7 % | **5.4 %** | 62.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Blitzwolf BW-V1 | 67.50 € | **61.90 €** | 14.9 % | **5.4 %** | 60.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 094L čidlo detekce blesků | 63.50 € | **57.90 €** | 15.3 % | **5.2 %** | 56.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 27.50 € | **21.90 €** | 34.6 % | **7.2 %** | 21.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 21.50 € | **15.90 €** | 43.7 % | **6.3 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gel Blaster HALO plasma blaster | 121.50 € | **115.90 €** | 10.4 % | **5.3 %** | 71.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 30B | 123.50 € | **117.90 €** | 10.2 % | **5.2 %** | 84.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 40R | 116.50 € | **110.90 €** | 10.5 % | **5.1 %** | 81.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Navitel MR450 | 117.50 € | **111.90 €** | 10.3 % | **5.0 %** | 85.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Hurricane F5 | 121.50 € | **115.90 €** | 10.4 % | **5.3 %** | 92.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 4+64GB Blue | 117.50 € | **111.90 €** | 10.3 % | **5.0 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 4+64GB Green | 117.50 € | **111.90 €** | 10.3 % | **5.0 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 4+64GB Orange | 117.50 € | **111.90 €** | 10.3 % | **5.0 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZPR2600 | 119.50 € | **113.90 €** | 10.3 % | **5.2 %** | 96.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal ZC150838 | 118.50 € | **112.90 €** | 10.4 % | **5.2 %** | 98.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS WiFi AC1900 Halo H50G (3-pack) | 120.50 € | **114.90 €** | 10.4 % | **5.3 %** | 101.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Zone Black and Grey | 114.50 € | **108.90 €** | 10.4 % | **5.0 %** | 98.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Zone Black and Lime | 114.50 € | **108.90 €** | 10.4 % | **5.0 %** | 98.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Zone Blue | 114.50 € | **108.90 €** | 10.4 % | **5.0 %** | 98.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Zone Purple | 114.50 € | **108.90 €** | 10.4 % | **5.0 %** | 98.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Zone White | 114.50 € | **108.90 €** | 10.4 % | **5.0 %** | 98.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV 9865 E0 | 123.50 € | **117.90 €** | 10.2 % | **5.2 %** | 109.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi FM2102 Mikrovlnná trouba s grilem | 127.50 € | **121.90 €** | 10.1 % | **5.3 %** | 114.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ezidri Snackmaker FD500 sušička ovoce | 185.50 € | **179.90 €** | 8.4 % | **5.2 %** | 178.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rixon BigBoss | 129.50 € | **123.90 €** | 10.0 % | **5.2 %** | 123.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 35B1 | 142.50 € | **136.90 €** | 10.0 % | **5.7 %** | 136.96 € | stávame sa najlacnejší |
| Fén MOVA Turbo fialový | 68.00 € | **62.50 €** | 14.7 % | **5.4 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RH 6543 WH | 122.50 € | **117.00 €** | 10.0 % | **5.1 %** | 86.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO DBX PRO 10 oz | 64.00 € | **58.50 €** | 14.9 % | **5.0 %** | 39.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARF-1101-S BOXERSKÉ LAPY DBX BUSHIDO | 64.00 € | **58.50 €** | 14.9 % | **5.0 %** | 39.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal Supergrill Timer GC451B12 | 128.00 € | **122.50 €** | 10.1 % | **5.3 %** | 104.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Chefmax | 119.50 € | **114.00 €** | 10.1 % | **5.0 %** | 97.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT Lumiax MT1550EU, 12V/15A | 61.50 € | **56.00 €** | 15.4 % | **5.0 %** | 41.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MP510 KIT Powerline Wi-Fi Kit | 67.00 € | **61.50 €** | 14.7 % | **5.3 %** | 47.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka NEDIS HPRF010BK bezdrátová televizní, dosa... | 67.00 € | **61.50 €** | 14.8 % | **5.4 %** | 49.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| IMOU Cruiser SC 4G 5MP otočná WiFi vonkajšia kamera | 66.00 € | **60.50 €** | 14.6 % | **5.1 %** | 49.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo B3971 | 119.50 € | **114.00 €** | 10.1 % | **5.0 %** | 104.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR VEL.L ČERNÉ PRÉMIOVÉ MMA RUKAVICE DBX BUSHIDO | 64.00 € | **58.50 €** | 14.9 % | **5.0 %** | 49.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR VEL.L ČERVENÉ PRÉMIOVÉ MMA RUKAVICE DBX BUSHIDO | 64.00 € | **58.50 €** | 14.9 % | **5.0 %** | 49.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR VEL.M ČERNÉ PRÉMIOVÉ MMA RUKAVICE DBX BUSHIDO | 64.00 € | **58.50 €** | 14.9 % | **5.0 %** | 49.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR VEL.M ČERVENÉ PRÉMIOVÉ MMA RUKAVICE DBX BUSHIDO | 64.00 € | **58.50 €** | 14.9 % | **5.0 %** | 49.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WARRIOR VEL.XL ČERVENÉ PRÉMIOVÉ MMA RUKAVICE DBX BUS... | 64.00 € | **58.50 €** | 14.9 % | **5.0 %** | 49.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9252 | 67.00 € | **61.50 €** | 14.8 % | **5.4 %** | 53.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB CryptoBox 700 HD | 64.50 € | **59.00 €** | 14.9 % | **5.1 %** | 51.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Reflect Aero black | 119.50 € | **114.00 €** | 10.1 % | **5.0 %** | 110.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Reflect Aero white | 119.50 € | **114.00 €** | 10.1 % | **5.0 %** | 110.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompresor COMPASS 07191 AKU TANGO 4000mAh | 67.00 € | **61.50 €** | 14.8 % | **5.4 %** | 58.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trevi LTV 2014 HE Přenosná TV | 125.00 € | **119.50 €** | 10.0 % | **5.2 %** | 119.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární powerbanka OXE SPB33-B 33800 mAh | 104.50 € | **99.00 €** | 15.2 % | **9.2 %** | 99.13 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 678.00 € | **672.50 €** | 10.0 % | **9.1 %** | 672.69 € | stávame sa najlacnejší |
| Manuálny mlynček na kávu HiBREW G4B s nastaviteľným ... | 65.00 € | **59.50 €** | 15.0 % | **5.3 %** | 59.72 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 67.50 € | **62.00 €** | 50.4 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 119.00 € | **113.50 €** | 17.0 % | **11.6 %** | 113.79 € | stávame sa najlacnejší |
| BEKO STM4116B | 39.00 € | **33.50 €** | 32.7 % | **14.0 %** | 33.90 € | stávame sa najlacnejší |
| HyperX Cloud III BLK | 121.90 € | **116.50 €** | 10.3 % | **5.4 %** | 58.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LAMAX T8 | 111.90 € | **106.50 €** | 10.3 % | **5.0 %** | 75.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 33A | 124.90 € | **119.50 €** | 10.2 % | **5.4 %** | 88.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal EY505D15 | 122.90 € | **117.50 €** | 10.2 % | **5.4 %** | 99.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V8 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 65.90 € | **60.50 €** | 15.0 % | **5.6 %** | 43.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V8 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 65.90 € | **60.50 €** | 15.0 % | **5.6 %** | 43.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V8 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 65.90 € | **60.50 €** | 15.0 % | **5.6 %** | 43.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000602 Pizza trouba DELIZIA | 112.90 € | **107.50 €** | 10.4 % | **5.1 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Airy Fryer Oven 4619 | 124.90 € | **119.50 €** | 10.0 % | **5.3 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla AirCook DualZone Q670 XXL | 118.90 € | **113.50 €** | 10.2 % | **5.2 %** | 105.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla AirCook DualZone Q670 XXL | 118.90 € | **113.50 €** | 10.2 % | **5.2 %** | 105.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Mms-Mixi-2L | 114.90 € | **109.50 €** | 10.3 % | **5.1 %** | 101.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 155.90 € | **150.50 €** | 15.1 % | **11.1 %** | 150.61 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 118.90 € | **113.50 €** | 10.3 % | **5.3 %** | 113.70 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **114.50 €** | 11.3 % | **6.3 %** | 114.88 € | stávame sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 176.90 € | **171.50 €** | 10.1 % | **6.7 %** | 171.90 € | stávame sa najlacnejší |
| Ultima Apollo S70 Ultra Soundbar | 204.90 € | **199.50 €** | 15.0 % | **12.0 %** | 199.90 € | stávame sa najlacnejší |
| B-2V15B 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 61.90 € | **56.50 €** | 15.2 % | **5.2 %** | 42.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V15B 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 61.90 € | **56.50 €** | 15.2 % | **5.2 %** | 42.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V15B 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 61.90 € | **56.50 €** | 15.2 % | **5.2 %** | 42.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V15B 16 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 61.90 € | **56.50 €** | 15.2 % | **5.2 %** | 42.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal HT461138 | 49.90 € | **44.50 €** | 18.3 % | **5.5 %** | 38.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal KO251430 | 39.90 € | **34.50 €** | 22.6 % | **6.0 %** | 31.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-300 | 27.90 € | **22.50 €** | 36.2 % | **9.8 %** | 22.75 € | stávame sa najlacnejší |
| Beko BM3WFSU37213WB | 298.90 € | **293.50 €** | 10.0 % | **8.0 %** | 293.60 € | stávame sa najlacnejší |
| AMICA 510CE1.30P(W) | 281.90 € | **276.50 €** | 10.0 % | **7.9 %** | 276.90 € | stávame sa najlacnejší |
| JBL Xtreme 5 Black | 309.00 € | **303.90 €** | 6.9 % | **5.1 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné stropné svietidlo s osvetlením na okraj... | 64.00 € | **58.90 €** | 14.6 % | **5.4 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A5 ANC (čierne) | 60.00 € | **54.90 €** | 14.8 % | **5.0 %** | 36.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link TL-SG108PE PoE switch | 61.00 € | **55.90 €** | 15.0 % | **5.4 %** | 50.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PULUZ PU4119B 60W 2500K-6500K (Black) studio lamp. | 63.00 € | **57.90 €** | 14.9 % | **5.6 %** | 54.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK New Wise PLUS 12x42 | 59.00 € | **53.90 €** | 15.1 % | **5.1 %** | 52.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 10x40 | 59.00 € | **53.90 €** | 15.1 % | **5.1 %** | 54.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 7x50 | 59.00 € | **53.90 €** | 15.1 % | **5.1 %** | 54.00 € | stávame sa najlacnejší |
| Guzzanti GZ 636B | 120.00 € | **114.90 €** | 10.0 % | **5.4 %** | 78.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Glass&SteamAir® Fryer 4500BG | 114.00 € | **108.90 €** | 10.1 % | **5.2 %** | 75.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 636 | 112.00 € | **106.90 €** | 10.1 % | **5.1 %** | 82.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Grillmaster | 115.00 € | **109.90 €** | 10.0 % | **5.1 %** | 86.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Deco BE22 (1-pack) | 115.00 € | **109.90 €** | 10.0 % | **5.1 %** | 98.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42326PC | 114.00 € | **108.90 €** | 10.1 % | **5.2 %** | 103.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SALENTE MeatPlus | 118.00 € | **112.90 €** | 10.0 % | **5.3 %** | 112.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 80.00 € | **74.90 €** | 14.8 % | **7.5 %** | 74.94 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 10x42 | 160.00 € | **154.90 €** | 15.0 % | **11.3 %** | 154.99 € | stávame sa najlacnejší |
| ETA 477090000 | 24.99 € | **19.90 €** | 32.4 % | **5.4 %** | 14.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HyperX Cloud III RED | 112.90 € | **107.90 €** | 10.2 % | **5.3 %** | 58.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| XIAOMI Mesh System BE3600 Pro (1-pack) | 106.50 € | **101.50 €** | 10.5 % | **5.3 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Flex blue | 112.90 € | **107.90 €** | 10.2 % | **5.3 %** | 75.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Flex rose | 112.90 € | **107.90 €** | 10.2 % | **5.3 %** | 75.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HRA-270D+BT Vintage rádio DAB+ | 105.90 € | **100.90 €** | 10.3 % | **5.1 %** | 70.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| XIAOMI Mesh System AC1200 EU (3-pack) | 110.50 € | **105.50 €** | 10.3 % | **5.3 %** | 74.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal EY505815 | 114.90 € | **109.90 €** | 10.1 % | **5.4 %** | 80.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Pizza in 4 'Minutes 917, černá | 104.50 € | **99.50 €** | 10.4 % | **5.1 %** | 69.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP ENVY Photo 7230 (B63JVB) | 110.50 € | **105.50 €** | 10.2 % | **5.2 %** | 76.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP ENVY Photo 7231 (B63JVB) | 110.50 € | **105.50 €** | 10.2 % | **5.2 %** | 76.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS7550i White | 107.90 € | **102.90 €** | 10.2 % | **5.1 %** | 74.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 780NC Black | 105.90 € | **100.90 €** | 10.3 % | **5.1 %** | 73.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link TC40GW | 109.50 € | **104.50 €** | 10.2 % | **5.1 %** | 77.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA Turbo sušič vlasov (sivý) | 60.50 € | **55.50 €** | 15.4 % | **5.8 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Sous Vide Stick SV01 | 109.50 € | **104.50 €** | 10.1 % | **5.1 %** | 79.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT9100E0 | 106.90 € | **101.90 €** | 10.3 % | **5.1 %** | 79.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP LaserJet M110w (7MD66F) | 115.50 € | **110.50 €** | 10.0 % | **5.3 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Watch 5 Obsidian Black | 108.50 € | **103.50 €** | 10.1 % | **5.0 %** | 84.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| XIAOMI Mesh System AX3000 NE (2-pack) | 106.50 € | **101.50 €** | 10.5 % | **5.3 %** | 82.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Flamepro | 110.90 € | **105.90 €** | 10.0 % | **5.1 %** | 87.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer BE230 WiFi 7 Router | 103.90 € | **98.90 €** | 10.3 % | **5.0 %** | 82.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42707PP | 102.90 € | **97.90 €** | 10.4 % | **5.0 %** | 82.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Flip 7, červený | 114.90 € | **109.90 €** | 10.1 % | **5.4 %** | 95.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Flip 7, modrý | 114.90 € | **109.90 €** | 10.1 % | **5.4 %** | 95.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Flip 7, squad | 114.90 € | **109.90 €** | 10.1 % | **5.4 %** | 95.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO B-2v4 10 oz | 59.50 € | **54.50 €** | 15.0 % | **5.4 %** | 40.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO B-2v4 12 oz | 59.50 € | **54.50 €** | 15.0 % | **5.4 %** | 40.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla MultiCook M80 Deluxe | 110.90 € | **105.90 €** | 10.2 % | **5.2 %** | 93.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOR09 ZÁŤĚŽOVÁ VESTA 9KG HMS | 59.50 € | **54.50 €** | 15.0 % | **5.4 %** | 43.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Edifier WH700NB Pro, ANC (béžové) | 58.90 € | **53.90 €** | 14.9 % | **5.2 %** | 42.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Edifier WH700NB Pro, ANC (sivé) | 58.90 € | **53.90 €** | 14.9 % | **5.2 %** | 42.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EJEAS Q8 motorcycle intercom | 58.50 € | **53.50 €** | 15.0 % | **5.2 %** | 42.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Pizza in 4 'minutes 909, červená | 104.50 € | **99.50 €** | 10.4 % | **5.1 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GOLD DRAGON 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 59.50 € | **54.50 €** | 15.0 % | **5.4 %** | 45.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GOLD DRAGON 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 59.50 € | **54.50 €** | 15.0 % | **5.4 %** | 45.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GOLD DRAGON 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 59.50 € | **54.50 €** | 15.0 % | **5.4 %** | 45.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GOLD DRAGON 16 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 59.50 € | **54.50 €** | 15.0 % | **5.4 %** | 45.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GOLD DRAGON 8 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 59.50 € | **54.50 €** | 15.0 % | **5.4 %** | 45.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MultiCook M90 Grill | 111.90 € | **106.90 €** | 10.2 % | **5.3 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá do uší TWS QCY MeloBuds N70 (čierne) | 60.00 € | **55.00 €** | 14.8 % | **5.2 %** | 47.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO4B75EA | 112.50 € | **107.50 €** | 10.3 % | **5.4 %** | 99.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera cyklistická NEDIS CCAM100BK 3v1, 1080p, 2MP, ... | 58.90 € | **53.90 €** | 15.3 % | **5.5 %** | 46.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| IMOU KIT-TRV1-EU-2 Súprava termostatických hlavíc Zi... | 59.50 € | **54.50 €** | 15.0 % | **5.3 %** | 47.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio outdoorové NEDIS RDFM3100YW | 62.50 € | **57.50 €** | 14.8 % | **5.6 %** | 51.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remoska P32F/01 4l Prima Glass | 110.90 € | **105.90 €** | 10.2 % | **5.2 %** | 99.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dynamický mikrofón Maono PD200XS (čierny) | 58.50 € | **53.50 €** | 15.5 % | **5.6 %** | 48.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000610 Pizza trouba DELIZIA | 109.90 € | **104.90 €** | 10.1 % | **5.1 %** | 100.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný zvonček, 9x LED, biela,... | 16.50 € | **11.50 €** | 56.5 % | **9.1 %** | 8.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 4630 | 106.90 € | **101.90 €** | 10.4 % | **5.2 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 502 meteorologická stanice | 57.90 € | **52.90 €** | 15.3 % | **5.3 %** | 50.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 5m, biela | 15.50 € | **10.50 €** | 60.5 % | **8.7 %** | 9.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 5m, biela | 15.50 € | **10.50 €** | 57.5 % | **6.7 %** | 9.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS E5111 domácí bezdrátová meteostanice | 60.50 € | **55.50 €** | 14.7 % | **5.3 %** | 55.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-200B Gramofon béžový | 104.90 € | **99.90 €** | 10.4 % | **5.1 %** | 99.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-200B Gramofon šedý | 104.90 € | **99.90 €** | 10.4 % | **5.1 %** | 99.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 615B Precise | 59.90 € | **54.90 €** | 15.3 % | **5.7 %** | 54.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.6 % | **16.4 %** | 24.10 € | stávame sa najlacnejší |
| JBL Live Buds 3 Blue | 143.50 € | **138.50 €** | 10.1 % | **6.3 %** | 138.60 € | stávame sa najlacnejší |
| JBL Live Buds 3 Purple | 143.50 € | **138.50 €** | 10.1 % | **6.3 %** | 138.60 € | stávame sa najlacnejší |
| JBL Live Buds 3 Silver | 143.50 € | **138.50 €** | 10.1 % | **6.3 %** | 138.60 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.50 €** | 37.8 % | **12.7 %** | 22.68 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.50 €** | 15.0 % | **14.3 %** | 799.79 € | stávame sa najlacnejší |
| Braun IS5247.VI | 188.50 € | **183.50 €** | 10.1 % | **7.2 %** | 183.80 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **334.00 €** | 15.0 % | **13.3 %** | 334.39 € | stávame sa najlacnejší |
| Tefal GC772830 | 225.50 € | **220.50 €** | 10.1 % | **7.6 %** | 220.90 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **149.50 €** | 15.1 % | **11.4 %** | 149.90 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.00 € | **238.00 €** | 10.0 % | **7.7 %** | 238.40 € | stávame sa najlacnejší |
| Solight dezinfekčná bezozónová UV lampa 100W | 47.00 € | **42.00 €** | 49.6 % | **33.7 %** | 42.43 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 30W, 2200L, 4000K,... | 20.90 € | **15.90 €** | 38.0 % | **5.0 %** | 15.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nabíjačka s LCD displejom, AC 230V, 450mA, 4... | 18.90 € | **13.90 €** | 46.6 % | **7.8 %** | 14.00 € | stávame sa najlacnejší |
| Electrolux EF 26   (EFH 12 W) | 15.99 € | **11.00 €** | 53.1 % | **5.3 %** | 3.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS7650i White | 108.90 € | **104.00 €** | 10.0 % | **5.1 %** | 84.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO3950EA | 101.90 € | **97.00 €** | 10.4 % | **5.1 %** | 87.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept so2050 | 106.90 € | **102.00 €** | 10.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje F492PW | 174.90 € | **170.00 €** | 9.0 % | **5.9 %** | 170.18 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 79.90 € | **75.00 €** | 15.3 % | **8.2 %** | 75.30 € | stávame sa najlacnejší |
| TEESA TSA5035 elektrický mop | 113.90 € | **109.00 €** | 15.1 % | **10.2 %** | 109.39 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 250.90 € | **246.00 €** | 10.0 % | **7.9 %** | 246.40 € | stávame sa najlacnejší |
| Rádio BLOW RA19 nouzové DAB+/FM/BLUETOOTH, ruční kli... | 55.90 € | **51.00 €** | 15.3 % | **5.2 %** | 40.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK New Wise PLUS 10x42 | 54.90 € | **50.00 €** | 15.4 % | **5.1 %** | 48.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 8x40 | 54.90 € | **50.00 €** | 15.4 % | **5.1 %** | 49.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9255 | 55.50 € | **50.90 €** | 15.1 % | **5.6 %** | 39.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor úniku plynu s alarmom Habotest HT601B | 52.50 € | **47.90 €** | 15.1 % | **5.1 %** | 36.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOZA RACING E-Stop RS063 núdzový vypínač | 53.50 € | **48.90 €** | 15.3 % | **5.3 %** | 39.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Pro C (strieborné) | 51.50 € | **46.90 €** | 15.5 % | **5.2 %** | 39.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Edifier Comfo Flex (čierne) | 56.50 € | **51.90 €** | 14.8 % | **5.5 %** | 47.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pánev NEDIS FCSP110EBK40 elektrická na smažení / 40 ... | 55.50 € | **50.90 €** | 15.0 % | **5.4 %** | 46.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 545 Line | 55.50 € | **50.90 €** | 15.1 % | **5.6 %** | 46.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Impregnace na stany a markýzy INPRODUCTS 1l | 54.50 € | **49.90 €** | 15.3 % | **5.6 %** | 46.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera IP venkovní Kruger&Matz Connect C60 Tuya Wi-Fi | 50.50 € | **45.90 €** | 15.5 % | **5.0 %** | 43.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií VOLTCRAFT CC-2 | 52.50 € | **47.90 €** | 15.1 % | **5.1 %** | 45.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 570 EASY III | 55.50 € | **50.90 €** | 15.2 % | **5.6 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná fontánka pre domáce zvieratá Petkit Eve... | 58.50 € | **53.90 €** | 14.8 % | **5.7 %** | 51.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 547 Line | 55.50 € | **50.90 €** | 15.1 % | **5.6 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **15.90 €** | 38.4 % | **7.4 %** | 10.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS KP1438F0 Nescafé Dolce Gusto Mini | 100.50 € | **95.90 €** | 10.5 % | **5.4 %** | 69.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL SENSE LITE Beige | 98.50 € | **93.90 €** | 10.4 % | **5.2 %** | 68.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL SENSE LITE Blue | 98.50 € | **93.90 €** | 10.4 % | **5.2 %** | 68.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL SENSE LITE Purple | 98.50 € | **93.90 €** | 10.4 % | **5.2 %** | 68.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL SENSE LITE White | 98.50 € | **93.90 €** | 10.4 % | **5.2 %** | 68.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer MR400 4G LTE WiFi Router | 97.50 € | **92.90 €** | 10.4 % | **5.2 %** | 67.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8202 | 96.50 € | **91.90 €** | 10.4 % | **5.1 %** | 67.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax X7.2 | 97.50 € | **92.90 €** | 10.4 % | **5.2 %** | 68.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer MR200 4G LTE WiFi Router | 94.50 € | **89.90 €** | 10.6 % | **5.2 %** | 73.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 100.50 € | **95.90 €** | 10.5 % | **5.4 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RO 3985 EA | 104.50 € | **99.90 €** | 10.2 % | **5.3 %** | 87.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Turbo NBT1006MW | 103.50 € | **98.90 €** | 10.1 % | **5.2 %** | 88.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RH 6545 WH | 97.50 € | **92.90 €** | 10.5 % | **5.3 %** | 83.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja BC251EUGY Blast MAX | 102.50 € | **97.90 €** | 10.2 % | **5.3 %** | 88.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision Solar WiFi | 107.50 € | **102.90 €** | 10.0 % | **5.3 %** | 93.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Flip 6 white | 101.50 € | **96.90 €** | 10.3 % | **5.3 %** | 88.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Instant Pot Classic Mini (3,8 L) | 97.50 € | **92.90 €** | 10.2 % | **5.0 %** | 87.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remoska P31F/01 2l Prima Glass | 92.50 € | **87.90 €** | 10.6 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO534FR | 101.50 € | **96.90 €** | 10.1 % | **5.1 %** | 93.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO7356CH | 95.50 € | **90.90 €** | 10.4 % | **5.1 %** | 88.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla AirCook Q70 XXL WiFi Pro | 106.50 € | **101.90 €** | 10.1 % | **5.3 %** | 101.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G10073 Horkovzdušná trouba | 94.50 € | **89.90 €** | 10.5 % | **5.1 %** | 89.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.90 €** | 14.9 % | **10.4 %** | 114.91 € | stávame sa najlacnejší |
| Slúchadlá TWS Oneodio Pro50 (sivé) | 57.00 € | **52.50 €** | 14.6 % | **5.6 %** | 39.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlonabíjacia power banka Baseus 10000mAh 30W modrá | 53.50 € | **49.00 €** | 14.7 % | **5.1 %** | 37.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV9848E0 | 98.50 € | **94.00 €** | 10.1 % | **5.1 %** | 82.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Optimizér Tigo TS4-A-O max. 700 Wp | 53.50 € | **49.00 €** | 14.7 % | **5.0 %** | 38.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (zelené) | 57.00 € | **52.50 €** | 14.6 % | **5.6 %** | 44.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 26Ah  VIPOW bezúdržbový akumu... | 58.00 € | **53.50 €** | 14.6 % | **5.7 %** | 46.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Handy Force One RBT, 2358 | 89.50 € | **85.00 €** | 10.6 % | **5.0 %** | 79.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Edifier WH700NB, ANC (námorníck... | 53.00 € | **48.50 €** | 14.9 % | **5.1 %** | 42.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 439 Line s projekcí | 52.00 € | **47.50 €** | 15.1 % | **5.1 %** | 43.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Impregnace na outdoorové oděvy INPRODUCTS 1l | 59.00 € | **54.50 €** | 14.6 % | **5.8 %** | 51.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KIDS80 ČERVENÝ 80 X 30 CM / 15-20 KG BOXOVACÍ PYTEL ... | 58.00 € | **53.50 €** | 14.8 % | **5.9 %** | 50.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KIDS80 MODRÝ 80 X 30 CM / 15-20 KG BOXOVACÍ PYTEL PR... | 58.00 € | **53.50 €** | 14.8 % | **5.9 %** | 50.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LAMAX WatchY4 Play Blue | 101.00 € | **96.50 €** | 10.1 % | **5.2 %** | 94.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LAMAX WatchY4 Play Pink | 101.00 € | **96.50 €** | 10.1 % | **5.2 %** | 94.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente InductPro2, indukční vařič | 100.00 € | **95.50 €** | 10.0 % | **5.1 %** | 94.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IT3280E1 | 105.00 € | **100.50 €** | 10.1 % | **5.4 %** | 99.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1-Ss | 130.50 € | **126.00 €** | 10.0 % | **6.2 %** | 126.07 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 31.00 € | **26.50 €** | 58.5 % | **35.5 %** | 26.64 € | stávame sa najlacnejší |
| Maxxo Chamber Line 40 | 251.50 € | **247.00 €** | 10.1 % | **8.1 %** | 247.21 € | stávame sa najlacnejší |
| BROTHER DCP-T535DW | 207.50 € | **203.00 €** | 10.1 % | **7.7 %** | 203.21 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 599.00 € | **594.50 €** | 10.0 % | **9.2 %** | 594.81 € | stávame sa najlacnejší |
| Xiaomi Buds 6 Nebula Purple | 102.50 € | **98.00 €** | 10.0 % | **5.2 %** | 98.40 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 31.50 € | **27.00 €** | 54.0 % | **32.0 %** | 27.47 € | stávame sa najlacnejší |
| Reproduktory Edifier R1100 2.0 (čierne) | 78.50 € | **74.00 €** | 15.0 % | **8.4 %** | 74.50 € | stávame sa najlacnejší |
| ETA 026990000 | 27.99 € | **23.50 €** | 26.5 % | **6.2 %** | 21.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KOMA RK01 - Univerzální rotační kartáč | 22.99 € | **18.50 €** | 42.9 % | **15.0 %** | 18.90 € | stávame sa najlacnejší |
| LAMAX CyberWave1 | 97.90 € | **93.50 €** | 10.1 % | **5.1 %** | 50.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Buds 2 bílá | 90.90 € | **86.50 €** | 10.4 % | **5.1 %** | 55.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot SCCPBPP605-050 | 101.90 € | **97.50 €** | 10.3 % | **5.5 %** | 71.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Buds 2 tyrkys | 90.90 € | **86.50 €** | 10.4 % | **5.1 %** | 61.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Buds 2 černá | 90.90 € | **86.50 €** | 10.4 % | **5.1 %** | 62.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gel Blaster Surge 2 XL | 100.90 € | **96.50 €** | 10.1 % | **5.3 %** | 78.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi OpenWear Stereo Sandstone Beige | 95.90 € | **91.50 €** | 10.1 % | **5.1 %** | 76.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Navitel R480 2K | 97.90 € | **93.50 €** | 10.1 % | **5.1 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision BirdFeeder | 98.90 € | **94.50 €** | 10.1 % | **5.2 %** | 82.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS705A Black | 94.90 € | **90.50 €** | 10.2 % | **5.1 %** | 79.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Beam 2 bílá | 90.90 € | **86.50 €** | 10.4 % | **5.1 %** | 75.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Beam 2 černá | 90.90 € | **86.50 €** | 10.4 % | **5.1 %** | 75.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Beam 2 tyrkys | 90.90 € | **86.50 €** | 10.4 % | **5.1 %** | 75.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla AirCook & Grill QG600 | 105.90 € | **101.50 €** | 10.0 % | **5.5 %** | 93.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO3753EA | 95.90 € | **91.50 €** | 10.2 % | **5.2 %** | 83.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZYXEL DX3301-T0-EU01V1F | 93.90 € | **89.50 €** | 10.2 % | **5.0 %** | 81.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MultiCook MC600 Pro | 91.90 € | **87.50 €** | 10.5 % | **5.2 %** | 80.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Flex 2 ghost black | 90.90 € | **86.50 €** | 10.4 % | **5.1 %** | 81.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42101SV | 98.90 € | **94.50 €** | 10.0 % | **5.1 %** | 91.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BM1210BK | 105.90 € | **101.50 €** | 10.1 % | **5.5 %** | 100.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 98.90 € | **94.50 €** | 10.3 % | **5.4 %** | 93.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi IM9100 | 97.90 € | **93.50 €** | 10.0 % | **5.1 %** | 92.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rixon Bucket | 92.90 € | **88.50 €** | 10.4 % | **5.2 %** | 88.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CM6PBRX/4U2 | 98.90 € | **94.50 €** | 10.3 % | **5.4 %** | 94.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1 | 126.90 € | **122.50 €** | 10.0 % | **6.2 %** | 122.56 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 127.90 € | **123.50 €** | 43.9 % | **38.9 %** | 123.60 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 72.90 € | **68.50 €** | 15.0 % | **8.1 %** | 68.89 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 482 s FM rádiopřijímačem | 50.90 € | **46.50 €** | 15.2 % | **5.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Topidlo terasové TEESA TSA8050 na stojanu | 53.90 € | **49.50 €** | 15.4 % | **6.0 %** | 36.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion H640P | 51.90 € | **47.50 €** | 15.1 % | **5.3 %** | 34.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RP05 LANO NA ŠPLH HMS | 54.90 € | **50.50 €** | 15.0 % | **5.8 %** | 37.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO ARB-431-BÍLÉ 12 oz | 54.90 € | **50.50 €** | 15.0 % | **5.8 %** | 39.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP7 (zelený) | 51.90 € | **47.50 €** | 15.2 % | **5.4 %** | 36.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Softbox Neewer 65 cm | 50.90 € | **46.50 €** | 15.3 % | **5.4 %** | 37.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO IMPULSE 3 - set-top box DVB-T2/C (H.265/HEVC) | 52.90 € | **48.50 €** | 15.0 % | **5.4 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0205 | 51.90 € | **47.50 €** | 15.0 % | **5.3 %** | 39.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB CryptoBox 700 HD mini | 55.90 € | **51.50 €** | 15.1 % | **6.0 %** | 43.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy OFFICE MK10 Comfort Set | 32.90 € | **28.50 €** | 23.0 % | **6.6 %** | 21.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO HD 8165 Wi-Fi - satelitní DVB-S2 přijímač | 55.90 € | **51.50 €** | 15.1 % | **6.0 %** | 45.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 59.90 € | **55.50 €** | 13.9 % | **5.5 %** | 52.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZFS1017 | 54.90 € | **50.50 €** | 14.7 % | **5.5 %** | 50.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 23.90 € | **19.50 €** | 39.2 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.50 €** | 59.0 % | **33.9 %** | 23.90 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **329.90 €** | 14.9 % | **13.5 %** | 330.00 € | stávame sa najlacnejší |
| MMA rukavice DBX BUSHIDO e1v1 vel. L | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO e1v1 vel. M | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO e1v1 vel. XL | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka Baseus Magnetic Mini 10 000mAh 20W MagSaf... | 54.00 € | **49.90 €** | 14.5 % | **5.8 %** | 37.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V16 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 31.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V16 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 31.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V16 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 31.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V16 8 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 31.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| F7 10 OZ BOXERSKÉ RUKAVICE RDX | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 32.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| F7 14 OZ BOXERSKÉ RUKAVICE RDX | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 32.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| F7 16 OZ BOXERSKÉ RUKAVICE RDX | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 32.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BLACK DRAGON VEL.L MMA RUKAVICE DBX BUSHIDO | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 34.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BLACK DRAGON VEL.M MMA RUKAVICE DBX BUSHIDO | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 34.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BLACK DRAGON VEL.XL MMA RUKAVICE DBX BUSHIDO | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 34.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO DBD-B-3 12 oz | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 36.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO DBD-B-3 14 oz | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 36.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dvojitá boxovací hruška DBX BUSHIDO ARS-1153 | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 36.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Edifier WH700NB Pro, ANC (čierne) | 50.00 € | **45.90 €** | 14.8 % | **5.4 %** | 42.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (fialová) | 49.00 € | **44.90 €** | 14.9 % | **5.3 %** | 43.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný nástenný vypínač Sonoff NSPanel | 49.00 € | **44.90 €** | 14.8 % | **5.2 %** | 44.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Quantum 350 Wireless | 94.00 € | **89.90 €** | 10.0 % | **5.2 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Street X-BASS KM... | 81.00 € | **76.90 €** | 14.7 % | **8.9 %** | 76.94 € | stávame sa najlacnejší |
| ETA 092890000 | 23.99 € | **19.90 €** | 27.1 % | **5.4 %** | 16.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 618890010 | 23.99 € | **19.90 €** | 27.1 % | **5.4 %** | 19.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks®Pike Place Espress Roast 450 g | 18.99 € | **14.90 €** | 35.2 % | **6.1 %** | 11.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 006690000 | 19.99 € | **15.90 €** | 32.9 % | **5.7 %** | 13.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje AF1409DB | 84.50 € | **80.50 €** | 10.6 % | **5.3 %** | 37.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL WIND3SBLU | 89.90 € | **85.90 €** | 10.2 % | **5.3 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja BC151EUWH Blast | 89.50 € | **85.50 €** | 10.4 % | **5.4 %** | 53.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja BC151EUBK Blast | 89.50 € | **85.50 €** | 10.4 % | **5.4 %** | 53.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC052X | 90.50 € | **86.50 €** | 10.4 % | **5.5 %** | 55.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong N1 mini projektor | 89.50 € | **85.50 €** | 10.1 % | **5.2 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT9530E1 | 93.50 € | **89.50 €** | 10.1 % | **5.4 %** | 64.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell „Standard Day“ pre OSMO NANO –... | 46.90 € | **42.90 €** | 15.2 % | **5.3 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Vacuum Sealer 60SB | 82.50 € | **78.50 €** | 10.7 % | **5.3 %** | 55.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO e1v4 vel. L | 52.50 € | **48.50 €** | 14.8 % | **6.0 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO e1v4 vel. M | 52.50 € | **48.50 €** | 14.8 % | **6.0 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO e1v4 vel. XL | 52.50 € | **48.50 €** | 14.8 % | **6.0 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8201 | 89.90 € | **85.90 €** | 10.1 % | **5.2 %** | 63.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion H580X | 50.50 € | **46.50 €** | 14.6 % | **5.5 %** | 27.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Low Sugar Rice Cooker 1500AT | 93.50 € | **89.50 €** | 10.0 % | **5.3 %** | 70.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerská helma DBX BUSHIDO ARH-2190 vel. L | 49.90 € | **45.90 €** | 15.1 % | **5.9 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerská helma DBX BUSHIDO ARH-2190 vel. M | 49.90 € | **45.90 €** | 15.1 % | **5.9 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerská helma DBX BUSHIDO ARH-2190 vel. XL | 49.90 € | **45.90 €** | 15.1 % | **5.9 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV4110E0 | 85.90 € | **81.90 €** | 10.4 % | **5.2 %** | 66.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diagnostic Scanner OBD2 Bluetooth Ancel BD310 | 48.50 € | **44.50 €** | 15.1 % | **5.6 %** | 28.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NB907MASL | 92.50 € | **88.50 €** | 10.2 % | **5.4 %** | 73.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla MediaBox XG600 | 83.50 € | **79.50 €** | 10.6 % | **5.3 %** | 64.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla MediaBox XG600 | 83.50 € | **79.50 €** | 10.6 % | **5.3 %** | 64.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARM-2011d VEL.L MMA RUKAVICE DBX BUSHIDO | 49.90 € | **45.90 €** | 15.1 % | **5.9 %** | 31.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARM-2011d VEL.M MMA RUKAVICE DBX BUSHIDO | 49.90 € | **45.90 €** | 15.1 % | **5.9 %** | 31.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARM-2011d VEL.XL MMA RUKAVICE DBX BUSHIDO | 49.90 € | **45.90 €** | 15.1 % | **5.9 %** | 31.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GSL 60IS1 | 95.50 € | **91.50 €** | 10.1 % | **5.5 %** | 77.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARH-2190-B VEL.L BOXERSKÁ HELMA DBX BUSHIDO | 49.90 € | **45.90 €** | 15.1 % | **5.9 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v12 10 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 45.90 € | **41.90 €** | 15.4 % | **5.3 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v12 12 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 45.90 € | **41.90 €** | 15.4 % | **5.3 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v12 14 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 45.90 € | **41.90 €** | 15.4 % | **5.3 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v12 16 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 45.90 € | **41.90 €** | 15.4 % | **5.3 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v12 6 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 45.90 € | **41.90 €** | 15.4 % | **5.3 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v12 8 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 45.90 € | **41.90 €** | 15.4 % | **5.3 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NB907MAB | 92.50 € | **88.50 €** | 10.2 % | **5.4 %** | 75.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WHCH720NB.CE7 černá | 80.90 € | **76.90 €** | 10.5 % | **5.1 %** | 64.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WHCH720NW.CE7 bílá | 80.90 € | **76.90 €** | 10.5 % | **5.1 %** | 64.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi OpenWear Stereo Cosmic Gray | 91.50 € | **87.50 €** | 10.3 % | **5.4 %** | 76.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-3W 10 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 49.90 € | **45.90 €** | 15.1 % | **5.9 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-3W 12 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 49.90 € | **45.90 €** | 15.1 % | **5.9 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-3W 14 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 49.90 € | **45.90 €** | 15.1 % | **5.9 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v18 10 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 51.50 € | **47.50 €** | 14.6 % | **5.7 %** | 36.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v18 12 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 51.50 € | **47.50 €** | 14.6 % | **5.7 %** | 36.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v18 14 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 51.50 € | **47.50 €** | 14.6 % | **5.7 %** | 36.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v18 8 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 51.50 € | **47.50 €** | 14.6 % | **5.7 %** | 36.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV4111E0 | 85.90 € | **81.90 €** | 10.4 % | **5.2 %** | 72.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS KP243B10 Nescafé Dolce Gusto Genio | 92.50 € | **88.50 €** | 10.3 % | **5.5 %** | 78.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NB907MACL | 92.50 € | **88.50 €** | 10.2 % | **5.4 %** | 79.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NB907MAJD | 92.50 € | **88.50 €** | 10.2 % | **5.4 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NB907MASN | 92.50 € | **88.50 €** | 10.2 % | **5.4 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARF-1101 BOXERSKÉ LAPY DBX BUSHIDO | 52.50 € | **48.50 €** | 14.8 % | **6.0 %** | 39.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer TBE552E BE9300 WiFi PCIe | 88.00 € | **84.00 €** | 10.1 % | **5.1 %** | 75.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision Solar A | 86.00 € | **82.00 €** | 10.1 % | **5.0 %** | 73.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KTO08 ZÁŤĚŽOVÁ VESTA HMS | 51.50 € | **47.50 €** | 14.6 % | **5.7 %** | 39.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision PRO A, fotopast | 81.90 € | **77.90 €** | 10.4 % | **5.0 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V20 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 45.90 € | **41.90 €** | 15.4 % | **5.3 %** | 34.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V20 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 45.90 € | **41.90 €** | 15.4 % | **5.3 %** | 34.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V20 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 45.90 € | **41.90 €** | 15.4 % | **5.3 %** | 34.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V23 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 45.90 € | **41.90 €** | 15.4 % | **5.3 %** | 34.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V23 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 45.90 € | **41.90 €** | 15.4 % | **5.3 %** | 34.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP7 (červený) | 47.00 € | **43.00 €** | 15.0 % | **5.2 %** | 36.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP7 (čierny) | 47.00 € | **43.00 €** | 14.9 % | **5.1 %** | 36.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Edifier W800BT Plus, aptX (biele) | 46.00 € | **42.00 €** | 15.1 % | **5.1 %** | 35.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett Verona 2 Gold MESH | 86.90 € | **82.90 €** | 10.5 % | **5.4 %** | 76.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett Verona 2 Gold SOLID | 86.90 € | **82.90 €** | 10.5 % | **5.4 %** | 76.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO7285S | 84.90 € | **80.90 €** | 10.3 % | **5.1 %** | 74.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Pro C (čierne) | 48.90 € | **44.90 €** | 15.0 % | **5.6 %** | 39.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténa 45BS5G super DVB-T Emme Esse LTE 5G free | 52.50 € | **48.50 €** | 14.7 % | **6.0 %** | 42.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO2913EA | 88.50 € | **84.50 €** | 10.3 % | **5.3 %** | 79.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Radiátor olejový TEESA TSA8036 | 49.50 € | **45.50 €** | 14.7 % | **5.4 %** | 40.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP7 (modrý) | 45.50 € | **41.50 €** | 15.2 % | **5.1 %** | 36.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice TechnoLine WS 6762 | 47.00 € | **43.00 €** | 14.9 % | **5.1 %** | 38.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remoska P31/01 2l Prima | 88.50 € | **84.50 €** | 10.2 % | **5.2 %** | 80.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná 12V / 24 Ah MHPower 6-DMF-24 GEL Tra... | 47.90 € | **43.90 €** | 15.2 % | **5.6 %** | 40.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link TL-SG105PE PoE switch | 47.90 € | **43.90 €** | 15.4 % | **5.8 %** | 40.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteostanice TechnoLine WT 549 s projekcí | 47.90 € | **43.90 €** | 15.1 % | **5.5 %** | 41.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 10m | 14.50 € | **10.50 €** | 49.8 % | **8.5 %** | 8.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Cuco II | 88.50 € | **84.50 €** | 10.0 % | **5.0 %** | 82.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Parabola Emme Esse 80 Al bílá | 48.50 € | **44.50 €** | 15.2 % | **5.7 %** | 42.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Parabola Emme Esse 80 Al červená | 48.50 € | **44.50 €** | 15.2 % | **5.7 %** | 42.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Parabola Emme Esse 80 Al tmavě šedá | 48.50 € | **44.50 €** | 15.2 % | **5.7 %** | 42.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK New Wise PLUS 8x42 | 50.50 € | **46.50 €** | 15.1 % | **6.0 %** | 44.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný nástenný vypínač WiFi Sonoff NSPanel (b... | 50.50 € | **46.50 €** | 14.8 % | **5.7 %** | 44.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (tmavozel... | 49.00 € | **45.00 €** | 14.5 % | **5.2 %** | 43.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GT 110838 | 31.90 € | **27.90 €** | 20.7 % | **5.6 %** | 27.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI PRO MP273A | 88.50 € | **84.50 €** | 10.4 % | **5.4 %** | 84.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips Mikrosystem TAM3205M2 | 86.50 € | **82.50 €** | 10.2 % | **5.1 %** | 82.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický obojok proti štekaniu Rojeco 1000M PD521 ... | 46.00 € | **42.00 €** | 15.1 % | **5.1 %** | 41.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 15.90 € | **11.90 €** | 44.9 % | **8.5 %** | 11.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 104.90 € | **100.90 €** | 10.1 % | **5.9 %** | 100.94 € | stávame sa najlacnejší |
| Electrolux MCK CZ | 29.90 € | **25.90 €** | 46.4 % | **26.8 %** | 25.95 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 61.50 € | **57.50 €** | 41.6 % | **32.4 %** | 57.55 € | stávame sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 63.90 € | **59.90 €** | 15.2 % | **8.0 %** | 59.96 € | stávame sa najlacnejší |
| Braun SI3042VI | 39.90 € | **35.90 €** | 26.8 % | **14.1 %** | 36.00 € | stávame sa najlacnejší |
| Apple MacBook Neo 8/256GB indigo MHFF4CZ | 810.90 € | **806.90 €** | 6.1 % | **5.5 %** | 807.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **18.00 €** | 54.3 % | **26.3 %** | 18.10 € | stávame sa najlacnejší |
| Guzzanti GZ 86RR | 205.90 € | **201.90 €** | 10.1 % | **7.9 %** | 202.00 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 23.2 % | **11.5 %** | 38.17 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 18.50 € | **14.50 €** | 45.0 % | **13.7 %** | 14.68 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 561.00 € | **557.00 €** | 7.4 % | **6.6 %** | 557.25 € | stávame sa najlacnejší |
| Soundbar KRUGER & MATZ Planet 2.1 | 58.50 € | **54.50 €** | 15.4 % | **7.5 %** | 54.77 € | stávame sa najlacnejší |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 270.50 € | **266.50 €** | 15.0 % | **13.3 %** | 266.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 16.90 € | **12.90 €** | 37.8 % | **5.2 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics STICK 4K Google  TV | 82.90 € | **79.00 €** | 10.3 % | **5.1 %** | 62.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics STICK 4K Google  TV | 82.90 € | **79.00 €** | 10.3 % | **5.1 %** | 62.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 23180-56 | 81.90 € | **78.00 €** | 10.4 % | **5.1 %** | 70.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kingston Canvas Select Plus/Micro 512GB | 83.90 € | **80.00 €** | 10.2 % | **5.0 %** | 72.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Flex black | 83.90 € | **80.00 €** | 10.1 % | **5.0 %** | 75.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO716BL | 84.90 € | **81.00 €** | 10.5 % | **5.4 %** | 81.02 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 181.90 € | **178.00 €** | 10.1 % | **7.7 %** | 178.19 € | stávame sa najlacnejší |
| Ardes 354 | 90.90 € | **87.00 €** | 10.0 % | **5.3 %** | 87.25 € | stávame sa najlacnejší |
| Gorenje BM201AG1BG | 215.90 € | **212.00 €** | 8.2 % | **6.2 %** | 212.37 € | stávame sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO 500 | 43.90 € | **40.00 €** | 15.3 % | **5.1 %** | 31.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy ECNBQT3518E Fresco | 494.90 € | **491.00 €** | 10.0 % | **9.2 %** | 491.20 € | stávame sa najlacnejší |
| JBL PartyBox On-The-GO 2 | 299.90 € | **296.00 €** | 10.0 % | **8.6 %** | 296.50 € | stávame sa najlacnejší |
| Klip mikrofónu Puluz PU3045 3m, 3,5 mm Jack | 41.50 € | **37.90 €** | 15.2 % | **5.2 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v9 10 oz. boxerské rukavice DBX BUSHIDO | 44.50 € | **40.90 €** | 15.3 % | **6.0 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v9 12 oz. boxerské rukavice DBX BUSHIDO | 44.50 € | **40.90 €** | 15.3 % | **6.0 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v9 14 oz. boxerské rukavice DBX BUSHIDO | 44.50 € | **40.90 €** | 15.3 % | **6.0 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO B-2v3A 10 oz | 42.50 € | **38.90 €** | 14.9 % | **5.2 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO B-2v3A 12 oz | 42.50 € | **38.90 €** | 14.9 % | **5.2 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO B-2v3A 14 oz | 42.50 € | **38.90 €** | 14.9 % | **5.2 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v15 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 42.50 € | **38.90 €** | 14.9 % | **5.2 %** | 28.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v15 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 42.50 € | **38.90 €** | 14.9 % | **5.2 %** | 28.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v15 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 42.50 € | **38.90 €** | 14.9 % | **5.2 %** | 28.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v15 16 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 42.50 € | **38.90 €** | 14.9 % | **5.2 %** | 28.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 498 | 40.50 € | **36.90 €** | 15.6 % | **5.3 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor PWM Epever VS2024AU, 12/24V, 20A s... | 44.50 € | **40.90 €** | 15.3 % | **6.0 %** | 34.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight Ceiling Spotlight YLDDL-0084-B (dve žiarovk... | 43.50 € | **39.90 €** | 15.0 % | **5.5 %** | 33.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Edifier X5 Pro V25 TWS (béžové) - nové 2025 | 43.50 € | **39.90 €** | 14.7 % | **5.2 %** | 33.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Edifier X5 Pro V25 TWS (ružové) - nové 2025 | 43.50 € | **39.90 €** | 14.7 % | **5.2 %** | 33.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS VILLAGE MOON–V900 univerzální anténa | 45.50 € | **41.90 €** | 14.5 % | **5.5 %** | 36.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá Edifier HECATE G2 II (biele) | 41.50 € | **37.90 €** | 15.7 % | **5.6 %** | 33.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 520 | 40.50 € | **36.90 €** | 15.7 % | **5.4 %** | 32.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 291 Line | 43.50 € | **39.90 €** | 15.4 % | **5.9 %** | 36.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 18Ah  EMOS bezúdržbový akumul... | 43.50 € | **39.90 €** | 14.5 % | **5.0 %** | 38.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-S3 V2 Google TV box | 64.50 € | **60.90 €** | 11.4 % | **5.2 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 17.50 € | **13.90 €** | 56.3 % | **24.2 %** | 13.98 € | stávame sa najlacnejší |
| Bravo B-4779 Tyčový mixer Jamie | 79.50 € | **75.90 €** | 10.2 % | **5.2 %** | 57.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook Q60 XXL Pro | 81.50 € | **77.90 €** | 10.1 % | **5.2 %** | 62.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook Q60 XXL Pro | 81.50 € | **77.90 €** | 10.1 % | **5.2 %** | 62.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Jade 3, aktivní venkovní anténa | 80.50 € | **76.90 €** | 10.2 % | **5.3 %** | 61.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WHCH720NL.CE7 modrá | 80.50 € | **76.90 €** | 10.0 % | **5.1 %** | 64.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hori Split Pad Pro Attach. Set(Eevee) | 80.50 € | **76.90 €** | 10.1 % | **5.2 %** | 65.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO533FR | 77.50 € | **73.90 €** | 10.5 % | **5.4 %** | 67.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9284PZ | 76.50 € | **72.90 €** | 10.6 % | **5.4 %** | 66.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer VX1800V VDSL/ADSL Router | 72.50 € | **68.90 €** | 10.5 % | **5.1 %** | 64.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla MediaBox XT850 DVB-T2 | 81.50 € | **77.90 €** | 10.4 % | **5.5 %** | 75.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla MediaBox XT850 DVB-T2 | 81.50 € | **77.90 €** | 10.4 % | **5.5 %** | 75.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 898 | 87.50 € | **83.90 €** | 10.0 % | **5.5 %** | 82.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 583/04 | 76.50 € | **72.90 €** | 10.3 % | **5.1 %** | 72.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mio MiVue J35 2.5K GPS WIFI | 79.50 € | **75.90 €** | 10.5 % | **5.5 %** | 75.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko FRL5474B | 73.50 € | **69.90 €** | 10.7 % | **5.3 %** | 70.00 € | stávame sa najlacnejší |
| TP-LINK TL-PA7017PKIT Powerline Kit | 70.50 € | **67.00 €** | 10.5 % | **5.0 %** | 41.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brašna na teleskop LEVENHUK Zongo 60 malá, modrá | 42.00 € | **38.50 €** | 15.0 % | **5.4 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax X5.2 | 72.50 € | **69.00 €** | 10.5 % | **5.2 %** | 47.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný mini osciloskop 2 v 1 FNIRSI DSO510 generát... | 45.00 € | **41.50 €** | 14.7 % | **5.8 %** | 27.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX LITE S Carplay&And... | 44.00 € | **40.50 €** | 14.9 % | **5.8 %** | 29.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WPA7517KIT Powerline Kit | 78.00 € | **74.50 €** | 10.1 % | **5.2 %** | 63.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3K1-3ST | 42.00 € | **38.50 €** | 16.0 % | **6.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hybridný filter ND16/PL FREEWELL pre DJI Mavic 4 Pro | 43.00 € | **39.50 €** | 14.9 % | **5.6 %** | 30.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 20760-57/RH | 71.50 € | **68.00 €** | 10.5 % | **5.1 %** | 60.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2904/04 | 69.50 € | **66.00 €** | 10.6 % | **5.0 %** | 58.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný bodový zvárač FNIRSI SWM-10 2 v 1 | 45.00 € | **41.50 €** | 14.6 % | **5.7 %** | 34.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2904/05 | 69.50 € | **66.00 €** | 10.6 % | **5.0 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO MIRA 3 WiFi - DVB-S2 přijímač | 44.00 € | **40.50 €** | 14.5 % | **5.4 %** | 34.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténa venkovní Emme Esse 45S5G 5G LTE free | 40.50 € | **37.00 €** | 15.2 % | **5.2 %** | 32.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK LabZZ B6 | 42.00 € | **38.50 €** | 15.0 % | **5.4 %** | 34.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight univerzálny sieťový adaptér 2500mA, stabiliz... | 14.00 € | **10.50 €** | 43.5 % | **7.6 %** | 7.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A5 ANC (biele) | 43.00 € | **39.50 €** | 14.9 % | **5.6 %** | 36.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio EMOS P-600B /E0090/ černé, DAB+/FM, 3 W, Bluet... | 41.00 € | **37.50 €** | 15.1 % | **5.3 %** | 34.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka Baseus Magnetic Mini 10000mAh 20W MagSafe... | 43.00 € | **39.50 €** | 14.9 % | **5.6 %** | 37.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 525 | 46.00 € | **42.50 €** | 14.7 % | **6.0 %** | 40.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá QCY H3 pro ANC (fialové) | 46.00 € | **42.50 €** | 14.6 % | **5.9 %** | 40.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25629 šedá | 47.00 € | **43.50 €** | 14.4 % | **5.9 %** | 42.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla T500 | 71.50 € | **68.00 €** | 10.4 % | **5.0 %** | 67.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO8311TP | 70.50 € | **67.00 €** | 10.6 % | **5.1 %** | 66.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny analogové TechnoLine WT 8950 | 43.00 € | **39.50 €** | 14.4 % | **5.1 %** | 39.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-NEVE 4K UHD Streaming Dongle | 68.50 € | **65.00 €** | 10.7 % | **5.0 %** | 64.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LONGER RAY5 mini 5,5 W laserový gravírovací stroj | 142.50 € | **139.00 €** | 15.0 % | **12.2 %** | 139.07 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude Pro Recycled | 24.50 € | **21.00 €** | 45.4 % | **24.6 %** | 21.07 € | stávame sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **92.00 €** | 10.1 % | **6.1 %** | 92.15 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 82.00 € | **78.50 €** | 13.4 % | **8.5 %** | 78.67 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.50 € | **129.00 €** | 10.4 % | **7.4 %** | 129.18 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 28.50 € | **25.00 €** | 53.4 % | **34.6 %** | 25.19 € | stávame sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 76.00 € | **72.50 €** | 10.1 % | **5.0 %** | 72.70 € | stávame sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **46.00 €** | 15.3 % | **7.1 %** | 46.24 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS DICROMAT 2+CR | 74.00 € | **70.50 €** | 15.0 % | **9.6 %** | 70.75 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 128.00 € | **124.50 €** | 10.1 % | **7.1 %** | 124.79 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 192.50 € | **189.00 €** | 8.8 % | **6.8 %** | 189.34 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera | 37.00 € | **33.50 €** | 41.4 % | **28.0 %** | 33.89 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.50 € | **118.00 €** | 10.3 % | **7.2 %** | 118.40 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 73.00 € | **69.50 €** | 14.8 % | **9.3 %** | 69.90 € | stávame sa najlacnejší |
| Autochladnička TEESA TSA5004.1 s funkcí ohřevu, 20l | 49.50 € | **46.00 €** | 14.7 % | **6.6 %** | 46.49 € | stávame sa najlacnejší |
| KOMA HPU1 - Univerzální hubice | 15.99 € | **12.50 €** | 45.6 % | **13.8 %** | 12.90 € | stávame sa najlacnejší |
| BWT náhradní filtry zinek+hořčík 3ks | 22.99 € | **19.50 €** | 26.5 % | **7.3 %** | 16.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Instant Pot Superior Slow Cooker (7,1 L) | 77.90 € | **74.50 €** | 10.1 % | **5.3 %** | 39.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Hurricane R3 22,2V WET & DRY | 79.90 € | **76.50 €** | 10.3 % | **5.6 %** | 50.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-link Tapo C410 KIT | 70.90 € | **67.50 €** | 10.3 % | **5.0 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Breville VST072X | 75.90 € | **72.50 €** | 10.3 % | **5.4 %** | 52.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Titan 4 | 73.90 € | **70.50 €** | 10.3 % | **5.2 %** | 51.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Smart Band 9 Pro Moonlight Silver | 73.90 € | **70.50 €** | 10.1 % | **5.0 %** | 54.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal EY145B10 | 78.90 € | **75.50 €** | 10.2 % | **5.4 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Breville VST071X | 75.90 € | **72.50 €** | 10.1 % | **5.2 %** | 57.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 24A | 73.90 € | **70.50 €** | 10.5 % | **5.4 %** | 55.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TR4755i Black | 79.90 € | **76.50 €** | 10.3 % | **5.6 %** | 61.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS WiFi AC1300 Halo H30G (3-pack) | 80.90 € | **77.50 €** | 10.2 % | **5.5 %** | 69.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Dcolor GD2 4K Ultra HD | 72.90 € | **69.50 €** | 10.5 % | **5.3 %** | 65.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Optima | 78.90 € | **75.50 €** | 10.1 % | **5.3 %** | 74.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT 420 Android TV box | 71.90 € | **68.50 €** | 10.3 % | **5.1 %** | 68.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **102.50 €** | 15.1 % | **11.4 %** | 102.58 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 209.90 € | **206.50 €** | 10.1 % | **8.3 %** | 206.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 10m | 15.90 € | **12.50 €** | 47.6 % | **16.0 %** | 12.89 € | stávame sa najlacnejší |
| B-2v17 12 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 23.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v17 14 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 23.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v17 16 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 23.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2v17 8 OZ BOXERSKÉ RUKAVICE  DBX BUSHIDO | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 23.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO B-2v6 vel.14 oz | 38.90 € | **35.50 €** | 15.1 % | **5.0 %** | 23.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V10 10 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 38.90 € | **35.50 €** | 15.1 % | **5.0 %** | 24.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V10 12 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 38.90 € | **35.50 €** | 15.1 % | **5.0 %** | 24.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V10 14 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 38.90 € | **35.50 €** | 15.1 % | **5.0 %** | 24.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V10 16 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 38.90 € | **35.50 €** | 15.1 % | **5.0 %** | 24.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V10 8 OZ. BOXERSKÉ RUKAVICE DBX BUSHIDO | 38.90 € | **35.50 €** | 15.1 % | **5.0 %** | 24.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V22 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 28.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V22 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 28.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V22 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 28.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V22 16 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 28.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V21 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 38.90 € | **35.50 €** | 15.1 % | **5.0 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V21 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 38.90 € | **35.50 €** | 15.1 % | **5.0 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V21 14 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 38.90 € | **35.50 €** | 15.1 % | **5.0 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| B-2V21 16 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 38.90 € | **35.50 €** | 15.1 % | **5.0 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARS-1168A REFLEXNÍ MÍČ / SPEEDBAG DBX BUSHIDO | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reflexní míč, speedbag DBX BUSHIDO ARS-1164a | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Interný batériový merač odporu FNIRSI HRM-10 | 43.90 € | **40.50 €** | 15.1 % | **6.1 %** | 36.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo 550, 550lm, L... | 16.90 € | **13.50 €** | 32.9 % | **6.1 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny digitální TechnoLine WS 8019 nástěnné | 52.90 € | **49.50 €** | 15.1 % | **7.7 %** | 49.56 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 46.90 € | **43.50 €** | 15.1 % | **6.7 %** | 43.64 € | stávame sa najlacnejší |
| Solární regulátor PWM Victron Energy BlueSolar-LCD&U... | 38.90 € | **35.50 €** | 15.2 % | **5.1 %** | 35.65 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie LECCE, 3CCT, 48W, 290... | 26.90 € | **23.50 €** | 38.7 % | **21.2 %** | 23.80 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 35.90 € | **32.50 €** | 22.8 % | **11.2 %** | 32.85 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Inteligentný pohlcovač zápachu Petkit | 41.00 € | **37.90 €** | 14.6 % | **5.9 %** | 15.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-716 | 39.00 € | **35.90 €** | 14.6 % | **5.5 %** | 15.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reflexní míč, speedbag DBX BUSHIDO PR | 38.00 € | **34.90 €** | 15.1 % | **5.8 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash LEO (čierna) | 40.00 € | **36.90 €** | 14.8 % | **5.9 %** | 27.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny kliešťový meter FNIRSI DMC-100 | 39.00 € | **35.90 €** | 14.5 % | **5.4 %** | 28.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gimbal Hohem iSteady Q | 39.00 € | **35.90 €** | 14.6 % | **5.5 %** | 28.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální osobní váha GoSmart EMOS EV112 (BMI, 180 k... | 37.00 € | **33.90 €** | 15.0 % | **5.4 %** | 28.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka KRUGER & MATZ F3A s Bluetooth ANC | 40.00 € | **36.90 €** | 14.3 % | **5.4 %** | 32.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zircon Monoblock Quad M-0443 Slim line Skylink | 40.00 € | **36.90 €** | 15.0 % | **6.1 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK LabZZ T1 | 38.00 € | **34.90 €** | 14.7 % | **5.3 %** | 31.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electricity consumption meter 100A WiFi POW Ring SON... | 37.00 € | **33.90 €** | 14.9 % | **5.3 %** | 30.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff AirGuard PM2.5 SAWF-07P WiFi LCD monitor kval... | 37.00 € | **33.90 €** | 14.7 % | **5.1 %** | 31.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 2 TX + 1 RX | 36.00 € | **32.90 €** | 15.1 % | **5.2 %** | 31.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 42.00 € | **38.90 €** | 37.7 % | **27.5 %** | 38.95 € | stávame sa najlacnejší |
| Stropné svietidlo Yeelight C2201C300 | 45.00 € | **41.90 €** | 14.5 % | **6.6 %** | 41.96 € | stávame sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.90 €** | 14.9 % | **9.4 %** | 62.00 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 2000mA, stabiliz... | 10.90 € | **7.80 €** | 47.0 % | **5.2 %** | 7.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 11.00 € | **7.90 €** | 54.5 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| Evolveo StrongVision Compact 4K | 73.00 € | **69.90 €** | 10.1 % | **5.4 %** | 62.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-3000 | 68.00 € | **64.90 €** | 10.1 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-3000 | 68.00 € | **64.90 €** | 10.1 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Navitel R385 GPS | 66.90 € | **63.90 €** | 10.4 % | **5.5 %** | 48.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT NEMO + Click adaptér 51042 | 65.90 € | **62.90 €** | 10.3 % | **5.3 %** | 50.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Clip 5 Black | 64.90 € | **61.90 €** | 10.5 % | **5.4 %** | 49.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Clip 5 Blue | 64.90 € | **61.90 €** | 10.5 % | **5.4 %** | 49.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Clip 5 Pink | 64.90 € | **61.90 €** | 10.5 % | **5.4 %** | 49.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Clip 5 Red | 64.90 € | **61.90 €** | 10.5 % | **5.4 %** | 49.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Clip 5 White | 64.90 € | **61.90 €** | 10.5 % | **5.4 %** | 49.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete J-Force 2753 | 65.90 € | **62.90 €** | 10.6 % | **5.6 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax Sounder2 | 67.90 € | **64.90 €** | 10.2 % | **5.3 %** | 29.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 117A Black Laser Toner, W2070A | 58.50 € | **55.50 €** | 10.9 % | **5.2 %** | 25.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 23570-56 | 61.50 € | **58.50 €** | 10.8 % | **5.4 %** | 35.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo SB-120 Sound Bar | 68.90 € | **65.90 €** | 10.4 % | **5.6 %** | 44.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 bílá | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 45.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bramka ZigBee SONOFF Dongle Max (domáci asistent, Zi... | 40.50 € | **37.50 €** | 14.5 % | **6.0 %** | 19.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Flex 2 černá | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 48.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Breville VST082X | 71.50 € | **68.50 €** | 10.0 % | **5.4 %** | 50.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Race 2 bílá | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 49.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Endurance Race 2 černá | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 49.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS4150i White | 61.90 € | **58.90 €** | 10.5 % | **5.1 %** | 42.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo BonePro černá | 67.90 € | **64.90 €** | 10.4 % | **5.5 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 27220-56 | 63.90 € | **60.90 €** | 10.5 % | **5.3 %** | 47.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Flex 2 bílá | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 53.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO ARM-2011 L/XL | 36.50 € | **33.50 €** | 14.8 % | **5.3 %** | 20.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO ARM-2011 S/M | 36.50 € | **33.50 €** | 14.8 % | **5.3 %** | 20.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL VC 145130 | 67.90 € | **64.90 €** | 10.1 % | **5.2 %** | 52.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DBX-B-W EVERCLEAN 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 41.50 € | **38.50 €** | 14.6 % | **6.4 %** | 26.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DBX-B-W EVERCLEAN 8 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 41.50 € | **38.50 €** | 14.6 % | **6.4 %** | 26.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje MO20E1T4 | 69.50 € | **66.50 €** | 10.5 % | **5.7 %** | 55.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 117A Magenta Laser Toner, W2073A | 64.50 € | **61.50 €** | 10.6 % | **5.4 %** | 50.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné stropné svietidlo CW Yeelight Meteor C300. | 33.90 € | **30.90 €** | 15.4 % | **5.2 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO700BL | 65.50 € | **62.50 €** | 10.5 % | **5.5 %** | 52.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Mop Profi+vědro 55096 | 62.50 € | **59.50 €** | 10.3 % | **5.0 %** | 49.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 106A Black Laser Toner, W1106A | 63.90 € | **60.90 €** | 10.4 % | **5.2 %** | 51.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARM-2011b vel. L/XL MMA rukavice DBX BUSHIDO | 34.50 € | **31.50 €** | 15.7 % | **5.6 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARM-2011b vel. S/M MMA rukavice DBX BUSHIDO | 34.50 € | **31.50 €** | 15.7 % | **5.6 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténa Emos EM-030 širokopásmová venkovní 0–100 km | 39.50 € | **36.50 €** | 14.6 % | **5.9 %** | 26.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| XIAOMI Router BE3600 2.5G EU | 67.90 € | **64.90 €** | 10.2 % | **5.3 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla AirCook Q10 | 73.50 € | **70.50 €** | 9.7 % | **5.2 %** | 61.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| E1V9-B VEL.M MMA RUKAVICE DBX BUSHIDO | 41.50 € | **38.50 €** | 14.6 % | **6.4 %** | 30.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| E1V9-B VEL.XL MMA RUKAVICE DBX BUSHIDO | 41.50 € | **38.50 €** | 14.6 % | **6.4 %** | 30.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION SmartKettle Onyx black | 63.90 € | **60.90 €** | 10.5 % | **5.3 %** | 54.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFA43WTBXC | 68.50 € | **65.50 €** | 10.3 % | **5.5 %** | 59.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální projekční TechnoLine WT 536 | 35.00 € | **32.00 €** | 15.0 % | **5.2 %** | 25.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E1WYHSK2 | 68.90 € | **65.90 €** | 10.2 % | **5.4 %** | 59.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO705BL | 73.50 € | **70.50 €** | 10.2 % | **5.7 %** | 64.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS EM-P127 PROFI venkovní DVB-T2 anténa | 37.90 € | **34.90 €** | 15.1 % | **6.0 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KIDS60 ČERVENÝ 60 X 22 CM / 7 KG BOXOVACÍ PYTEL PRO ... | 33.50 € | **30.50 €** | 15.4 % | **5.1 %** | 25.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KIDS60 MODRÝ 60 X 22 CM / 7 KG BOXOVACÍ PYTEL PRO DÉ... | 33.50 € | **30.50 €** | 15.4 % | **5.1 %** | 25.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná 12V / 15 Ah MHPower 6-DZF-15 GEL Tra... | 37.50 € | **34.50 €** | 15.5 % | **6.3 %** | 29.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Music Box GO! KM... | 37.90 € | **34.90 €** | 15.0 % | **5.9 %** | 30.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 15Ah  EMOS B9656V Trakční (F ... | 37.90 € | **34.90 €** | 15.1 % | **6.0 %** | 30.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný vypínač WiFi s monitorovaním energie So... | 36.50 € | **33.50 €** | 14.9 % | **5.4 %** | 28.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS EM-29U5G / EM-P129 PROFI venkovní DVB-T2 anténa | 37.90 € | **34.90 €** | 15.1 % | **6.0 %** | 30.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vidlicový multimetr UNI-T UT256 | 34.90 € | **31.90 €** | 15.5 % | **5.6 %** | 27.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Positano Citrusovač 413/PO | 68.50 € | **65.50 €** | 10.2 % | **5.4 %** | 61.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 071S Bezdrátové čidlo pro měření teploty a rel... | 39.50 € | **36.50 €** | 14.5 % | **5.8 %** | 32.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotaška pod sedlovku 10l WATERPROOF | 36.90 € | **33.90 €** | 15.2 % | **5.8 %** | 30.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal XA725870 | 63.50 € | **60.50 €** | 10.5 % | **5.2 %** | 57.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo pro měření teploty a rel. vlhkosti ... | 37.90 € | **34.90 €** | 15.0 % | **5.9 %** | 32.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak s popruhom Sunnylife pre ovládač DJI RC / RC ... | 40.50 € | **37.50 €** | 14.5 % | **6.0 %** | 35.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 20 Ah  MHPower GE20-12 GEL | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 31.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 365 Arcus s projekcí | 34.50 € | **31.50 €** | 15.2 % | **5.2 %** | 29.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Parabola Emme Esse 80 Fe bílá | 36.90 € | **33.90 €** | 15.5 % | **6.1 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Parabola Emme Esse 80 Fe tmavě šedá | 36.90 € | **33.90 €** | 15.5 % | **6.1 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Johansson 7724L2 domovní zesilovač s 5G LTE s regulací | 33.90 € | **30.90 €** | 15.7 % | **5.4 %** | 28.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boffin I 500 | 62.50 € | **59.50 €** | 10.3 % | **5.0 %** | 57.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Johansson zes. 7412DC (1xVHF/2x UHF, 1xvýst, G23/32d... | 32.50 € | **29.50 €** | 15.9 % | **5.2 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny laserový pyrometer Habotest HT651D, merač ... | 35.50 € | **32.50 €** | 14.8 % | **5.1 %** | 31.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny kliešťový merač Habotest HT206D True RMS ,... | 34.50 € | **31.50 €** | 15.3 % | **5.3 %** | 30.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 465B | 35.00 € | **32.00 €** | 15.0 % | **5.2 %** | 30.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BlitzWolf BW-AT5 smartwatch (black) | 36.90 € | **33.90 €** | 15.4 % | **6.0 %** | 32.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight domáca WiFi kamera | 25.90 € | **22.90 €** | 20.6 % | **6.6 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 20Ah  VIPOW bezúdržbový akumu... | 36.00 € | **33.00 €** | 14.9 % | **5.3 %** | 32.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ANLAN ultrazvukový masážny prístroj na tvár 01-ADRY1... | 37.00 € | **34.00 €** | 14.3 % | **5.0 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážny prístroj na tvár EMS ANLAN 01-ADRY11-001 | 37.00 € | **34.00 €** | 14.3 % | **5.0 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL JR470 bílá | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 66.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL JR470 modrá | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 66.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL JR470 růžová | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 66.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserová vodováha Uni-T LM570R-I | 38.50 € | **35.50 €** | 15.5 % | **6.5 %** | 35.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-MR150 4G LTE WiFi N Router | 70.50 € | **67.50 €** | 10.2 % | **5.5 %** | 67.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-NOVA, 4K GOOGLE TV STICK | 72.90 € | **69.90 €** | 10.1 % | **5.6 %** | 69.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 607 | 73.50 € | **70.50 €** | 10.2 % | **5.7 %** | 70.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pohybové čidlo ORBIS MULTIMAT | 36.90 € | **33.90 €** | 15.5 % | **6.1 %** | 33.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Hotair-Bk | 59.50 € | **56.50 €** | 10.7 % | **5.1 %** | 56.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CCE116/1X | 67.50 € | **64.50 €** | 10.7 % | **5.8 %** | 64.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 33.50 € | **30.50 €** | 44.7 % | **31.8 %** | 30.55 € | stávame sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 55.50 € | **52.50 €** | 15.3 % | **9.1 %** | 52.55 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **26.90 €** | 50.2 % | **35.2 %** | 27.00 € | stávame sa najlacnejší |
| Guzzanti GZ 90B1 | 160.50 € | **157.50 €** | 10.1 % | **8.0 %** | 157.61 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 46.50 € | **43.50 €** | 15.2 % | **7.8 %** | 43.64 € | stávame sa najlacnejší |
| Čistička vzduchu TEESA PURE LIFE P500 | 76.50 € | **73.50 €** | 15.3 % | **10.8 %** | 73.69 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **92.50 €** | 14.9 % | **11.3 %** | 92.72 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **45.00 €** | 14.5 % | **7.4 %** | 45.25 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 79.50 € | **76.50 €** | 43.8 % | **38.3 %** | 76.89 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **22.50 €** | 37.8 % | **21.5 %** | 22.90 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **179.50 €** | 15.0 % | **13.2 %** | 179.90 € | stávame sa najlacnejší |
| Modul plynu Moza Racing AS015 TQB | 45.50 € | **42.50 €** | 14.8 % | **7.2 %** | 42.90 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **13.00 €** | 35.6 % | **10.2 %** | 13.09 € | stávame sa najlacnejší |
| DOMO DO9176RK | 30.99 € | **28.00 €** | 16.5 % | **5.2 %** | 25.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED čelové nabíjacia svietidlo, 170lm, teplé... | 9.40 € | **6.50 €** | 54.1 % | **6.5 %** | 5.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Beam black | 59.90 € | **57.00 €** | 10.5 % | **5.2 %** | 41.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Redmi Smart Pen (White) | 56.90 € | **54.00 €** | 10.6 % | **5.0 %** | 41.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Smart Kettle | 59.90 € | **57.00 €** | 10.4 % | **5.0 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 31.90 € | **29.00 €** | 15.7 % | **5.2 %** | 22.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 643/01 | 57.90 € | **55.00 €** | 10.7 % | **5.2 %** | 50.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 643 | 57.90 € | **55.00 €** | 10.7 % | **5.2 %** | 50.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 135 | 59.90 € | **57.00 €** | 10.4 % | **5.0 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Stone černý lesk 500ml SIXTOL | 33.90 € | **31.00 €** | 15.1 % | **5.3 %** | 29.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera Kruger&Matz KM2240-C pro kamerový set Connect... | 33.90 € | **31.00 €** | 14.8 % | **5.0 %** | 29.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **38.00 €** | 15.0 % | **6.8 %** | 38.13 € | stávame sa najlacnejší |
| Vařič elektrický TEESA TSA0203 | 34.90 € | **32.00 €** | 14.9 % | **5.3 %** | 32.29 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1500mA, stabiliz... | 9.90 € | **7.20 €** | 45.3 % | **5.7 %** | 7.21 € | stávame sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **7.80 €** | 60.5 % | **19.2 %** | 7.90 € | stávame sa najlacnejší |
| HP HyperX Cloud Stinger 2 Core | 58.50 € | **55.90 €** | 10.4 % | **5.5 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Buds 2 bílá | 62.50 € | **59.90 €** | 10.0 % | **5.4 %** | 34.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WPA4220 Powerline Kit | 61.50 € | **58.90 €** | 10.2 % | **5.6 %** | 37.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Clip 4 modrý | 57.50 € | **54.90 €** | 10.5 % | **5.5 %** | 37.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Clip 4 squad | 57.50 € | **54.90 €** | 10.5 % | **5.5 %** | 37.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP DeskJet 2920 (89F97B) | 51.50 € | **48.90 €** | 10.6 % | **5.1 %** | 31.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Buds 2 černá | 62.50 € | **59.90 €** | 10.0 % | **5.4 %** | 43.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WIWA H.265 MINI LED DVB-T2 set top box | 32.50 € | **29.90 €** | 14.8 % | **5.6 %** | 13.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongPhone W4 Black Green | 59.50 € | **56.90 €** | 10.3 % | **5.5 %** | 42.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongPhone W4 Black Red | 59.50 € | **56.90 €** | 10.3 % | **5.5 %** | 42.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| XIAOMI Mesh System AX3000 NE (1-pack) | 59.50 € | **56.90 €** | 10.2 % | **5.4 %** | 42.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26300-70/RH Quiet Boil Ket | 48.50 € | **45.90 €** | 11.1 % | **5.2 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Jade 1, aktivní venkovní anténa | 52.50 € | **49.90 €** | 10.8 % | **5.3 %** | 39.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bramka ZigBee SONOFF Dongle Plus MG24 (Home Assistan... | 31.50 € | **28.90 €** | 15.2 % | **5.6 %** | 19.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štartovacia súprava inteligentného termostatu Meross... | 35.50 € | **32.90 €** | 14.6 % | **6.2 %** | 23.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektronický dychový alkohol tester s LCD displejom ... | 32.50 € | **29.90 €** | 15.3 % | **6.1 %** | 21.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| E1V7 VEL.L MMA RUKAVICE DBX BUSHIDO | 29.50 € | **26.90 €** | 15.9 % | **5.7 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| E1V7 VEL.M MMA RUKAVICE DBX BUSHIDO | 29.50 € | **26.90 €** | 15.9 % | **5.7 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente InductPro1, indukční vařič | 52.50 € | **49.90 €** | 10.6 % | **5.1 %** | 43.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stropné svietidlo Yeelight MercuryE C300 so senzorom... | 28.50 € | **25.90 €** | 15.9 % | **5.3 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO ARM-2014a vel. S/M | 29.50 € | **26.90 €** | 15.9 % | **5.7 %** | 20.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Xany 2in1, venkov/pokoj anténa | 52.50 € | **49.90 €** | 10.8 % | **5.3 %** | 44.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo čierne) | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK M7000 4G LTE WiFi 4G Modem | 54.50 € | **51.90 €** | 10.5 % | **5.3 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY DVPSR760HB | 57.50 € | **54.90 €** | 10.7 % | **5.7 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed VR Power Headstrap FIXMQ-PHS-WH | 55.50 € | **52.90 €** | 10.8 % | **5.6 %** | 47.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REDMI Buds 8 Pro Cloud White | 63.50 € | **60.90 €** | 10.1 % | **5.6 %** | 56.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REDMI Buds 8 Pro Glacier Blue | 63.50 € | **60.90 €** | 10.1 % | **5.6 %** | 56.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REDMI Buds 8 Pro Obsidian Black | 63.50 € | **60.90 €** | 10.1 % | **5.6 %** | 56.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Palm šedý lesk 500ml SIXTOL | 29.50 € | **26.90 €** | 15.9 % | **5.7 %** | 22.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongPhone X5 Black Grey | 55.50 € | **52.90 €** | 10.8 % | **5.6 %** | 48.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič uší DBX BUSHIDO DBX-EG-1 | 28.50 € | **25.90 €** | 15.6 % | **5.1 %** | 21.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| XSX Stereo sluchátka | 51.50 € | **48.90 €** | 10.7 % | **5.1 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné Wi-Fi okolité svetlo Meross MSL430 (Hom... | 29.50 € | **26.90 €** | 15.4 % | **5.2 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Stone bílé dřevo 500ml SIXTOL | 32.50 € | **29.90 €** | 15.0 % | **5.8 %** | 26.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO727BL | 58.50 € | **55.90 €** | 10.1 % | **5.3 %** | 52.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO9149W | 51.50 € | **48.90 €** | 10.9 % | **5.3 %** | 45.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální projekční TechnoLine WT 537 | 34.50 € | **31.90 €** | 14.4 % | **5.8 %** | 28.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9225G | 54.50 € | **51.90 €** | 10.4 % | **5.1 %** | 48.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTR 3 Pro Smartwatch (Gold) | 33.50 € | **30.90 €** | 14.4 % | **5.6 %** | 28.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter UNI-T UT60EU | 32.50 € | **29.90 €** | 15.3 % | **6.1 %** | 27.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer FNIRSI IR40 40 m | 30.50 € | **27.90 €** | 15.5 % | **5.6 %** | 25.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT3041E1 | 53.50 € | **50.90 €** | 10.6 % | **5.2 %** | 48.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Patrový sušák Comfort Tower 420 | 52.50 € | **49.90 €** | 10.8 % | **5.3 %** | 48.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo GARNI 056H | 32.50 € | **29.90 €** | 14.4 % | **5.3 %** | 28.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| QCY Crossky Clip C30 Headphones (black) | 32.50 € | **29.90 €** | 15.5 % | **6.2 %** | 28.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínač WiFi SONOFF 4CHPROR3 | 31.50 € | **28.90 €** | 15.3 % | **5.8 %** | 27.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 155/PO | 58.50 € | **55.90 €** | 10.0 % | **5.2 %** | 54.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PUL648B (USB-C) | 31.50 € | **28.90 €** | 15.4 % | **5.8 %** | 28.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 48.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus A8 electric pump | 29.50 € | **26.90 €** | 15.7 % | **5.5 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZFD1010 | 58.50 € | **55.90 €** | 10.4 % | **5.5 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **35.90 €** | 55.1 % | **44.6 %** | 35.99 € | stávame sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 49.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 174.50 € | **171.90 €** | 15.1 % | **13.4 %** | 171.91 € | stávame sa najlacnejší |
| Fixed Zen 20 Pro FIXZENP-20-BK 20000mAh | 55.00 € | **52.50 €** | 10.1 % | **5.1 %** | 20.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lokátor vodičov UNI-T UT682 | 31.50 € | **29.00 €** | 14.4 % | **5.3 %** | 8.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY SRS-XB100D | 52.50 € | **50.00 €** | 10.3 % | **5.1 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY SRS-XB100L | 52.50 € | **50.00 €** | 10.3 % | **5.1 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Watch Pixel 2 Arctic Silver | 54.50 € | **52.00 €** | 10.2 % | **5.2 %** | 40.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Watch Pixel 2 Carbon Black | 54.50 € | **52.00 €** | 10.2 % | **5.2 %** | 40.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Watch Pixel 2 Rose Gold | 54.50 € | **52.00 €** | 10.2 % | **5.2 %** | 40.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WIWA H.265 MINI DVB-T2 set top box | 27.50 € | **25.00 €** | 15.8 % | **5.3 %** | 13.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Telefon GSM Kruger&Matz KM0923-4G Simple 923 4G pro ... | 32.00 € | **29.50 €** | 14.7 % | **5.7 %** | 18.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná lampa sufitowa CW Yeelight Yeelight Mer... | 33.00 € | **30.50 €** | 14.8 % | **6.1 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mio MiVue J20 WIFI | 46.50 € | **44.00 €** | 11.0 % | **5.1 %** | 35.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amiko DVB-S2 přijímač Mini HD265 WIFI | 52.50 € | **50.00 €** | 10.4 % | **5.2 %** | 41.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amiko DVB-S2 přijímač Mini HD265 WIFI | 52.50 € | **50.00 €** | 10.4 % | **5.2 %** | 41.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Oneodio A71 (hnedé) | 34.00 € | **31.50 €** | 14.4 % | **6.0 %** | 24.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KTO05 ZÁTĚŽOVÁ VESTA HMS | 35.00 € | **32.50 €** | 14.3 % | **6.2 %** | 25.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reflexní míč, speedbag DBX BUSHIDO ARS-1171 B | 30.50 € | **28.00 €** | 14.5 % | **5.1 %** | 21.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Stone červené dřevo 500ml SIXTOL | 32.00 € | **29.50 €** | 14.8 % | **5.8 %** | 23.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax C11 GPS 4K zadní kamera | 49.50 € | **47.00 €** | 10.7 % | **5.1 %** | 41.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash A290 + 3 ventilátory (či... | 29.50 € | **27.00 €** | 14.9 % | **5.2 %** | 21.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Indexový vlhkomer FNIRSI WMT-10 | 27.50 € | **25.00 €** | 15.5 % | **5.0 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun WK5205BK | 62.00 € | **59.50 €** | 10.1 % | **5.7 %** | 54.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 12Ah  EMOS bezúdržbový akumul... | 32.00 € | **29.50 €** | 14.9 % | **5.9 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 195 | 34.00 € | **31.50 €** | 14.4 % | **6.0 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SlowCook S500 - pomalý hrnec | 49.50 € | **47.00 €** | 10.7 % | **5.1 %** | 43.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS ONIUKMA TX603 (ružové) | 27.50 € | **25.00 €** | 15.5 % | **5.0 %** | 22.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED okenná reťaz snehuliaci, 6x LED, prísavn... | 7.90 € | **5.40 €** | 55.5 % | **6.3 %** | 2.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo Herní klávesnice MONKA KG991W, US | 55.00 € | **52.50 €** | 10.1 % | **5.1 %** | 49.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| INVERTO Ultra - Quad HGLN 40 mm -  0,2 dB | 32.00 € | **29.50 €** | 14.8 % | **5.8 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovačka Vacu Power 300 | 62.00 € | **59.50 €** | 10.1 % | **5.7 %** | 57.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhelnatého EMOS GS827 /P56402/ | 27.50 € | **25.00 €** | 15.9 % | **5.4 %** | 23.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Edifier W800BT SE (biele) | 30.00 € | **27.50 €** | 14.8 % | **5.2 %** | 26.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Edifier W800BT SE (čierne) | 30.00 € | **27.50 €** | 14.8 % | **5.2 %** | 26.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS VILLAGE DIO-V750 univerzální anténa | 31.50 € | **29.00 €** | 14.3 % | **5.3 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá do uší TWS Baseus Bowie WX5 (čierne) | 33.00 € | **30.50 €** | 15.0 % | **6.3 %** | 29.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit LinoPush 500 85360 | 49.50 € | **47.00 €** | 10.7 % | **5.1 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria BOBOVR B100 pre S3 PRO/E3 PRO | 35.00 € | **32.50 €** | 14.2 % | **6.0 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Airfit-Bk | 51.50 € | **49.00 €** | 10.5 % | **5.2 %** | 48.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **32.00 €** | 49.6 % | **38.8 %** | 32.10 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.50 € | **124.00 €** | 10.2 % | **8.0 %** | 124.11 € | stávame sa najlacnejší |
| Domo DO228SV | 121.50 € | **119.00 €** | 10.0 % | **7.8 %** | 119.13 € | stávame sa najlacnejší |
| Cyklocomputer Cycplus M3 - kompatibilný s: Strava, T... | 36.00 € | **33.50 €** | 14.9 % | **6.9 %** | 33.63 € | stávame sa najlacnejší |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 34.50 € | **32.00 €** | 14.8 % | **6.4 %** | 32.14 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 21.50 € | **19.00 €** | 38.5 % | **22.4 %** | 19.22 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **102.00 €** | 15.1 % | **12.4 %** | 102.24 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 23.00 € | **20.50 €** | 49.1 % | **32.9 %** | 20.75 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 35.50 € | **33.00 €** | 15.3 % | **7.1 %** | 33.29 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **31.00 €** | 14.5 % | **5.9 %** | 31.29 € | stávame sa najlacnejší |
| Rowenta RH6A75WO | 165.50 € | **163.00 €** | 10.1 % | **8.4 %** | 163.30 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 144.50 € | **142.00 €** | 10.3 % | **8.4 %** | 142.30 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 31.50 € | **29.00 €** | 14.8 % | **5.7 %** | 29.30 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **86.00 €** | 14.9 % | **11.7 %** | 86.33 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **86.00 €** | 14.9 % | **11.7 %** | 86.33 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Foldi Mini (čierny a or... | 258.00 € | **255.50 €** | 15.0 % | **13.9 %** | 255.84 € | stávame sa najlacnejší |
| Elektrický EMS masážny strojček na krk ANLAN ALMJY01-02 | 27.50 € | **25.00 €** | 15.8 % | **5.3 %** | 25.36 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **47.50 €** | 14.6 % | **8.9 %** | 47.88 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **255.00 €** | 15.1 % | **14.0 %** | 255.39 € | stávame sa najlacnejší |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 32.50 € | **30.00 €** | 15.0 % | **6.2 %** | 30.40 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.00 €** | 10.4 % | **8.3 %** | 132.40 € | stávame sa najlacnejší |
| Beko VRT76325VW | 168.50 € | **166.00 €** | 10.0 % | **8.4 %** | 166.40 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 180.50 € | **178.00 €** | 10.3 % | **8.8 %** | 178.40 € | stávame sa najlacnejší |
| Tefal FW501815 | 136.50 € | **134.00 €** | 10.1 % | **8.1 %** | 134.50 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.50 € | **127.00 €** | 10.3 % | **8.2 %** | 127.50 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 39dB | 41.50 € | **39.00 €** | 41.9 % | **33.4 %** | 39.50 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **228.00 €** | 15.0 % | **13.7 %** | 228.50 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2+ 6ks | 26.99 € | **24.50 €** | 33.1 % | **20.8 %** | 24.60 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.99 € | **17.50 €** | 23.0 % | **7.7 %** | 17.60 € | stávame sa najlacnejší |
| Electrolux E200SM | 19.99 € | **17.50 €** | 35.7 % | **18.8 %** | 17.70 € | stávame sa najlacnejší |
| ETA 160390000 | 19.99 € | **17.50 €** | 26.4 % | **10.6 %** | 17.71 € | stávame sa najlacnejší |
| JBL Endurance Peak III white | 84.90 € | **82.50 €** | 8.5 % | **5.4 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 3641A | 138.90 € | **136.50 €** | 10.2 % | **8.3 %** | 136.64 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 179.90 € | **177.50 €** | 10.1 % | **8.6 %** | 177.80 € | stávame sa najlacnejší |
| Tefal NE477838 | 138.90 € | **136.50 €** | 10.2 % | **8.3 %** | 136.90 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 174.90 € | **172.50 €** | 10.1 % | **8.5 %** | 172.90 € | stávame sa najlacnejší |
| JBL Tune 530BT White | 54.90 € | **52.50 €** | 10.4 % | **5.6 %** | 28.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA MG2551S Grey | 55.90 € | **53.50 €** | 10.3 % | **5.6 %** | 31.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 508 | 53.90 € | **51.50 €** | 10.6 % | **5.7 %** | 38.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26080-70 | 49.90 € | **47.50 €** | 10.9 % | **5.5 %** | 35.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Nexus | 47.90 € | **45.50 €** | 10.8 % | **5.3 %** | 35.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARG-2152 VEL.L SUSPENZOR DBX BUSHIDO | 29.90 € | **27.50 €** | 15.7 % | **6.4 %** | 18.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARG-2152 VEL.M SUSPENZOR DBX BUSHIDO | 29.90 € | **27.50 €** | 15.7 % | **6.4 %** | 18.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED nabíječka 120W FIXCG120-3C1A-WH | 46.90 € | **44.50 €** | 10.9 % | **5.3 %** | 35.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Electric Kettle 17BC | 49.90 € | **47.50 €** | 10.8 % | **5.4 %** | 39.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-AIR Google TV HDMI TV stick | 53.90 € | **51.50 €** | 10.0 % | **5.1 %** | 43.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor kouře NEDIS WIFIDS21WT SmartLife, Wi-Fi | 28.90 € | **26.50 €** | 15.0 % | **5.5 %** | 19.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK LabZZ B2 | 32.90 € | **30.50 €** | 14.9 % | **6.5 %** | 23.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit 51030 NEMO | 53.90 € | **51.50 €** | 10.1 % | **5.2 %** | 44.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Navitel R285 2K | 58.90 € | **56.50 €** | 10.0 % | **5.5 %** | 49.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  9Ah  EMOS bezúdržbový akumul... | 28.90 € | **26.50 €** | 15.8 % | **6.2 %** | 20.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 730BT Black | 59.90 € | **57.50 €** | 10.0 % | **5.6 %** | 51.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 730BT White | 59.90 € | **57.50 €** | 10.0 % | **5.6 %** | 51.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9136C | 54.90 € | **52.50 €** | 10.3 % | **5.5 %** | 46.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff CAM-PT2 2MP WiFi Smart Camera | 31.90 € | **29.50 €** | 15.3 % | **6.6 %** | 23.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO332IP | 48.90 € | **46.50 €** | 10.5 % | **5.1 %** | 40.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer AX53 WiFi Router | 55.90 € | **53.50 €** | 10.2 % | **5.5 %** | 47.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušička ovoce TEESA TSA3032 400W | 30.90 € | **28.50 €** | 15.0 % | **6.0 %** | 22.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 321990030 | 55.90 € | **53.50 €** | 10.2 % | **5.4 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo Volant GT-903 volant s pedály | 57.90 € | **55.50 €** | 10.3 % | **5.7 %** | 50.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2869/CA | 58.90 € | **56.50 €** | 10.3 % | **5.8 %** | 51.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľové a strieborné) | 29.90 € | **27.50 €** | 15.7 % | **6.4 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Palm světlé dřevo 500ml SIXTOL | 29.90 € | **27.50 €** | 15.6 % | **6.3 %** | 22.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AKG 3169H00020 AKG K72 | 50.90 € | **48.50 €** | 10.8 % | **5.5 %** | 43.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Palm bílé dřevo 500ml SIXTOL | 29.90 € | **27.50 €** | 15.6 % | **6.3 %** | 22.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Edifier Open-Ear Comfo C Black | 53.90 € | **51.50 €** | 10.1 % | **5.2 %** | 46.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB TereBox 3T | 26.90 € | **24.50 €** | 15.8 % | **5.5 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Palm černý lesk 500ml SIXTOL | 29.90 € | **27.50 €** | 15.6 % | **6.3 %** | 22.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30 (fialové) | 31.90 € | **29.50 €** | 15.3 % | **6.6 %** | 24.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný mini osciloskop FNIRSI DSO152 | 28.90 € | **26.50 €** | 15.6 % | **6.0 %** | 22.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer VR300 VDSL Router | 53.90 € | **51.50 €** | 10.7 % | **5.8 %** | 47.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS VILLAGE CAMP–V400 univerzální anténa | 27.90 € | **25.50 €** | 15.0 % | **5.1 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO 300 | 27.90 € | **25.50 €** | 15.7 % | **5.7 %** | 23.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO339KP | 59.90 € | **57.50 €** | 10.2 % | **5.7 %** | 55.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash A290 + 3 ventilátory (bi... | 30.90 € | **28.50 €** | 15.3 % | **6.3 %** | 26.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2877/03 | 47.90 € | **45.50 €** | 10.6 % | **5.0 %** | 43.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stropné svietidlo Smart CW Yeelight Meteor C230 | 27.90 € | **25.50 €** | 15.6 % | **5.6 %** | 23.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2869/PO | 58.90 € | **56.50 €** | 10.1 % | **5.6 %** | 54.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 14Ah  VIPOW bezúdržbový akumu... | 29.90 € | **27.50 €** | 14.9 % | **5.7 %** | 25.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT41 Google TV HDMI TV stick | 52.90 € | **50.50 €** | 10.5 % | **5.5 %** | 48.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecká na odpadky pre Petkit litter box Purobot ULTR... | 31.90 € | **29.50 €** | 15.1 % | **6.4 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-323 V2 - set-top box DVB-T2 (H.265/HEVC) | 26.90 € | **24.50 €** | 15.7 % | **5.4 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus 200 Sol | 48.90 € | **46.50 €** | 10.6 % | **5.2 %** | 45.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Classic 180 Solid | 22.90 € | **20.50 €** | 17.6 % | **5.3 %** | 20.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO327L | 58.90 € | **56.50 €** | 10.4 % | **5.9 %** | 56.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 51.90 € | **49.50 €** | 15.0 % | **9.7 %** | 49.57 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 18.90 € | **16.50 €** | 51.4 % | **32.2 %** | 16.61 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 19.90 € | **17.50 €** | 43.0 % | **25.8 %** | 17.63 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **18.50 €** | 43.0 % | **26.6 %** | 18.66 € | stávame sa najlacnejší |
| Aroma difuzer Palm tmavé dřevo 500ml SIXTOL | 29.90 € | **27.50 €** | 15.6 % | **6.3 %** | 27.69 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 57.90 € | **55.50 €** | 16.3 % | **11.5 %** | 55.87 € | stávame sa najlacnejší |
| Inteligentný LED pásik WiFI s RGBWW Meross MSL320 (5... | 25.90 € | **23.50 €** | 15.8 % | **5.1 %** | 23.90 € | stávame sa najlacnejší |
| Panasonic SC-AKX520E-K | 304.90 € | **302.50 €** | 10.1 % | **9.3 %** | 302.54 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre DY08, learning code | 8.50 € | **6.20 €** | 45.5 % | **6.1 %** | 6.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight časový spínač digitálny, displej, 16 režimov | 8.20 € | **6.00 €** | 45.2 % | **6.3 %** | 5.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Pins 4 PRO White | 48.00 € | **45.90 €** | 10.0 % | **5.2 %** | 19.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Pins 4 PRO Black | 48.00 € | **45.90 €** | 10.0 % | **5.2 %** | 26.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS EM190-S HD DVB-T2 H.265/HEVC | 27.00 € | **24.90 €** | 14.9 % | **5.9 %** | 10.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO e1v3 vel. L | 30.00 € | **27.90 €** | 14.3 % | **6.3 %** | 17.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO e1v3 vel. M | 30.00 € | **27.90 €** | 14.3 % | **6.3 %** | 17.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO e1v3 vel. XL | 30.00 € | **27.90 €** | 14.3 % | **6.3 %** | 17.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0210 | 29.00 € | **26.90 €** | 14.3 % | **6.1 %** | 18.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARM-2023 vel. L MMA rukavice DBX BUSHIDO | 30.00 € | **27.90 €** | 14.3 % | **6.3 %** | 19.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARM-2023 vel. M MMA rukavice DBX BUSHIDO | 30.00 € | **27.90 €** | 14.3 % | **6.3 %** | 19.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARM-2023 vel. XL MMA rukavice DBX BUSHIDO | 30.00 € | **27.90 €** | 14.3 % | **6.3 %** | 19.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER toner TN-2590 | 52.00 € | **49.90 €** | 10.1 % | **5.7 %** | 41.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal ZE370138 | 52.00 € | **49.90 €** | 10.2 % | **5.7 %** | 42.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| XIAOMI Router AX3000T EU | 48.00 € | **45.90 €** | 10.0 % | **5.2 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP DeskJet 2910 (89F98B) | 48.00 € | **45.90 €** | 10.2 % | **5.4 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| E1v8 vel. L MMA rukavice DBX BUSHIDO | 27.00 € | **24.90 €** | 15.1 % | **6.2 %** | 19.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| E1v8 vel. M MMA rukavice DBX BUSHIDO | 27.00 € | **24.90 €** | 15.1 % | **6.2 %** | 19.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| E1v8 vel. XL MMA rukavice DBX BUSHIDO | 27.00 € | **24.90 €** | 15.1 % | **6.2 %** | 19.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS EM-P117 PROFI venkovní DVB-T2 anténa | 29.00 € | **26.90 €** | 14.6 % | **6.3 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Impregnace na textilní sedačky INPRODUCTS 400 ml | 28.00 € | **25.90 €** | 14.5 % | **5.9 %** | 21.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| P2 DBX Striker DBX BUSHIDO postroj | 27.00 € | **24.90 €** | 15.1 % | **6.2 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Svetelná lišta monitora Blitzwolf BW-CML2 Pro, RGB | 28.00 € | **25.90 €** | 14.0 % | **5.4 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor plynu Habotest HT601A s alarmom | 29.00 € | **26.90 €** | 14.7 % | **6.4 %** | 23.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zvlhčovač vzduchu TEESA PURE LIFE 40 | 27.00 € | **24.90 €** | 14.0 % | **5.2 %** | 21.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lapa na kopy DBX BUSHIDO P2 | 26.00 € | **23.90 €** | 14.8 % | **5.5 %** | 20.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový ovládač GameSir Nova 2 Lite (biely) | 26.00 € | **23.90 €** | 14.8 % | **5.5 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter FNIRSI S1 | 26.00 € | **23.90 €** | 15.1 % | **5.8 %** | 20.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boffin II HRY | 53.00 € | **50.90 €** | 10.0 % | **5.7 %** | 48.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal VC204810 | 52.00 € | **49.90 €** | 10.2 % | **5.7 %** | 47.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO 717 MF | 48.00 € | **45.90 €** | 10.1 % | **5.3 %** | 44.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS E8647W domácí bezdrátová meteostanice | 29.00 € | **26.90 €** | 14.4 % | **6.1 %** | 25.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný termostatický ventil Meross MTS150HK (H... | 27.00 € | **24.90 €** | 14.2 % | **5.3 %** | 23.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9135G | 48.00 € | **45.90 €** | 10.1 % | **5.3 %** | 44.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS VILLAGE FLIPP–V200 univerzální anténa | 26.00 € | **23.90 €** | 14.3 % | **5.1 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistič oken TEESA SMOOTH TOUCH TSA5013 | 29.00 € | **26.90 €** | 14.3 % | **6.1 %** | 26.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Interaktívna hračka pre mačky 3 v 1 Rojeco | 24.00 € | **21.90 €** | 15.2 % | **5.1 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 36.00 € | **33.90 €** | 53.8 % | **44.8 %** | 33.94 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot K2 (biela) | 56.00 € | **53.90 €** | 14.8 % | **10.5 %** | 53.99 € | stávame sa najlacnejší |
| GoSAT GS240ET2 set top box | 25.00 € | **22.90 €** | 15.1 % | **5.4 %** | 23.00 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 15.00 € | **12.90 €** | 45.7 % | **25.3 %** | 12.96 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.00 € | **128.90 €** | 10.1 % | **8.3 %** | 129.00 € | stávame sa najlacnejší |
| CANON CL-41 Color | 24.99 € | **22.90 €** | 14.7 % | **5.1 %** | 16.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic RP-TCM115E-W, White | 12.59 € | **10.50 €** | 26.2 % | **5.3 %** | 9.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.90 €** | 38.6 % | **16.3 %** | 11.00 € | stávame sa najlacnejší |
| Eta 176292535 | 11.99 € | **9.90 €** | 28.8 % | **6.3 %** | 10.00 € | stávame sa najlacnejší |
| Boffin I 300 | 43.90 € | **41.90 €** | 10.7 % | **5.7 %** | 22.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy HIVE Pins 3 ANC Black | 47.90 € | **45.90 €** | 10.4 % | **5.8 %** | 27.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagZen 5 Crystal FIXZENMC-5-PI | 44.50 € | **42.50 €** | 10.4 % | **5.4 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NS2 Nintendo Camera Piranha Plant | 41.50 € | **39.50 €** | 11.1 % | **5.7 %** | 25.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zástrčka WiFi Gosund SP111 3680W 16A, Tuya | 25.90 € | **23.90 €** | 14.9 % | **6.0 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Ginno B-4463 černý | 45.90 € | **43.90 €** | 10.8 % | **5.9 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PIR senzor (pohybové čidlo) EMOS P3322 GoSmart s noč... | 21.90 € | **19.90 €** | 15.6 % | **5.1 %** | 9.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skylink Standard HD M7 IRDETO | 23.50 € | **21.50 €** | 16.1 % | **6.3 %** | 11.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PEACH 511003 PS400-02 skartovačka A4 | 42.50 € | **40.50 €** | 10.6 % | **5.4 %** | 30.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax Dots3 ANC | 39.90 € | **37.90 €** | 10.6 % | **5.1 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TrueLife AIR Diffuser D6 Smart | 44.00 € | **42.00 €** | 10.0 % | **5.0 %** | 32.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Videokonferenčné osvetlenie Neewer PL81Pro | 27.50 € | **25.50 €** | 14.9 % | **6.5 %** | 16.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Baseus Bowie WM01(fialové) | 23.50 € | **21.50 €** | 15.2 % | **5.4 %** | 12.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete 2v1 2761 | 52.50 € | **50.50 €** | 10.2 % | **6.0 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Hurricane R1 7,2V WET&DRY | 40.90 € | **38.90 €** | 10.8 % | **5.4 %** | 30.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterka Superfire A20 – 1700 lm, 300 m, 5 režimov | 22.50 € | **20.50 €** | 15.6 % | **5.3 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WIWA H.265 Lite DVB-T2 set top box | 23.90 € | **21.90 €** | 15.8 % | **6.1 %** | 13.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha GO Paw Patrol | 43.90 € | **41.90 €** | 10.7 % | **5.7 %** | 35.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 202 | 38.50 € | **36.50 €** | 11.3 % | **5.5 %** | 29.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica VT3205 SLIM | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 38.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax T3 | 42.90 € | **40.90 €** | 10.8 % | **5.6 %** | 34.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 25892-56 | 42.90 € | **40.90 €** | 10.7 % | **5.6 %** | 34.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO310KP | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 28.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy STREAM PRO | 42.50 € | **40.50 €** | 10.2 % | **5.0 %** | 34.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Energy Sistem Urban Box Blue Supernova | 43.90 € | **41.90 €** | 10.2 % | **5.1 %** | 35.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dielenská baterka Superfire G12, 566lm, USB | 23.00 € | **21.00 €** | 15.1 % | **5.1 %** | 15.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3750i Black | 48.90 € | **46.90 €** | 10.3 % | **5.8 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HRA-1345NUS/WD Retro radiopřijí | 43.00 € | **41.00 €** | 10.2 % | **5.1 %** | 35.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C80 WiFi Router | 45.50 € | **43.50 €** | 10.7 % | **5.8 %** | 37.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar CDR-365U/SL Přenosný přehrávač | 48.50 € | **46.50 €** | 10.2 % | **5.7 %** | 40.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo EasyPhone XR Pink | 42.90 € | **40.90 €** | 10.7 % | **5.5 %** | 35.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-Silk PLA Filament Creality (Gold) | 24.90 € | **22.90 €** | 15.7 % | **6.4 %** | 17.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla EasyCook AE300 | 44.50 € | **42.50 €** | 10.8 % | **5.8 %** | 37.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Vulcan šedé dřevo 350ml SIXTOL | 24.50 € | **22.50 €** | 16.1 % | **6.7 %** | 17.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer AX12 WiFi Router | 42.50 € | **40.50 €** | 10.9 % | **5.6 %** | 35.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Vulcan světlé dřevo 350ml SIXTOL | 24.50 € | **22.50 €** | 16.1 % | **6.7 %** | 17.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Talk Pro s ENC FIXTLK-P-BK | 41.50 € | **39.50 €** | 11.1 % | **5.7 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victorinox Kapesní nůž CLIMBER bílý | 36.50 € | **34.50 €** | 11.2 % | **5.1 %** | 30.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 158 | 42.90 € | **40.90 €** | 10.2 % | **5.0 %** | 36.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS DIO-V700 (EM-DIO3) univerzální anténa | 24.50 € | **22.50 €** | 15.5 % | **6.0 %** | 18.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARB-407v3 6 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 26.50 € | **24.50 €** | 15.0 % | **6.3 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2877/04 | 49.50 € | **47.50 €** | 10.0 % | **5.6 %** | 43.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartring Colmi R02 18.9MM 9 (Black) | 24.90 € | **22.90 €** | 15.3 % | **6.0 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Vulcan bílé dřevo 350ml SIXTOL | 24.50 € | **22.50 €** | 16.1 % | **6.7 %** | 18.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Vulcan šedý lesk 350ml SIXTOL | 24.50 € | **22.50 €** | 16.1 % | **6.7 %** | 18.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Vulcan tmavé dřevo 350ml SIXTOL | 24.50 € | **22.50 €** | 16.1 % | **6.7 %** | 18.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight univerzálny zdroj pre notebooky, 90W, 16 kon... | 18.50 € | **16.50 €** | 19.0 % | **6.1 %** | 12.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0217 | 26.50 € | **24.50 €** | 14.8 % | **6.2 %** | 20.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS SDRW-08D2S-U LITE/Black | 36.50 € | **34.50 €** | 11.2 % | **5.1 %** | 30.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BL2C0130 | 37.90 € | **35.90 €** | 11.0 % | **5.1 %** | 32.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS CITY ARCH-C200 pokojová anténa | 24.50 € | **22.50 €** | 15.5 % | **6.0 %** | 18.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný tester kondenzátorov a tranzistorov FNI... | 24.50 € | **22.50 €** | 15.0 % | **5.6 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION ThermoKettle TK5 Onyx black | 45.50 € | **43.50 €** | 10.8 % | **5.9 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 360° vnútorná WiFi kamera Imou Ranger 2C 3MP H.265 | 24.50 € | **22.50 €** | 14.3 % | **5.0 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MASCOM MC710T2 HD DVB-T2 H.265/HEVC | 25.50 € | **23.50 €** | 14.8 % | **5.8 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUGER & MATZ KM0907 Powerbanka 30000 mAh Li-pol | 27.50 € | **25.50 €** | 15.1 % | **6.8 %** | 21.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dotykový vypínač svetla ZigBee Avatto TS60-EU-W3 Tri... | 25.50 € | **23.50 €** | 14.9 % | **5.8 %** | 19.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2869/04 | 49.50 € | **47.50 €** | 10.0 % | **5.6 %** | 44.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Posilňovač nôh MERACH MR-2522 (biely a ružový) | 21.50 € | **19.50 €** | 15.9 % | **5.1 %** | 16.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPE-E (typ E) | 25.90 € | **23.90 €** | 14.9 % | **6.0 %** | 20.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagZen 5 Crystal FIXZENMC-5-BK | 44.50 € | **42.50 €** | 10.4 % | **5.4 %** | 39.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 235BK | 25.00 € | **23.00 €** | 14.4 % | **5.2 %** | 19.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1358/10 | 39.90 € | **37.90 €** | 10.8 % | **5.2 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 155/14 | 49.50 € | **47.50 €** | 10.4 % | **5.9 %** | 44.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 14 Ah  MHPower GE14-12 GEL | 27.50 € | **25.50 €** | 14.3 % | **6.0 %** | 22.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy HIVE Beans Concert | 45.50 € | **43.50 €** | 10.4 % | **5.5 %** | 40.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Colmi P71 Smartwatch (Blue) | 23.00 € | **21.00 €** | 15.1 % | **5.1 %** | 18.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight Svetlo do skrine čierne 60 cm 2700K | 22.50 € | **20.50 €** | 15.6 % | **5.3 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko Mezikus NPSKW | 40.50 € | **38.50 €** | 10.7 % | **5.2 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS QCY T13 ANC2, ANC (modrá) | 24.50 € | **22.50 €** | 14.8 % | **5.4 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist Disc Mop Mobile | 41.50 € | **39.50 €** | 10.4 % | **5.1 %** | 37.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Palm šedé dřevo 500ml SIXTOL | 27.50 € | **25.50 €** | 14.7 % | **6.3 %** | 23.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batoh Cattara RUNNER GREEN 38l | 26.90 € | **24.90 €** | 15.2 % | **6.7 %** | 22.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS GS558 /P56500/ detektor kouře | 25.50 € | **23.50 €** | 15.4 % | **6.3 %** | 21.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Pegasus 200 Solid Comfort | 43.50 € | **41.50 €** | 10.7 % | **5.6 %** | 39.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba JM 2 Jogurtovač | 47.90 € | **45.90 €** | 10.4 % | **5.8 %** | 43.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Ottocast CP88-T2 Mini Carplay&And... | 25.90 € | **23.90 €** | 15.7 % | **6.8 %** | 21.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák na prádlo Tower 450 | 41.50 € | **39.50 €** | 10.4 % | **5.1 %** | 37.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zircon Monoblok Twin M-0243 Slim line Skylink | 26.00 € | **24.00 €** | 14.0 % | **5.2 %** | 22.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Posilňovač nôh MERACH MR-2522 (biely a modrý) | 21.50 € | **19.50 €** | 15.9 % | **5.1 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada 53 kusov príslušenstva Puluz pre športové kamer... | 22.50 € | **20.50 €** | 15.6 % | **5.3 %** | 18.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS QCY T13 ANC2, ANC | 23.90 € | **21.90 €** | 15.2 % | **5.6 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr do sauny Levenhuk Wezzer SN20 | 23.90 € | **21.90 €** | 15.2 % | **5.5 %** | 20.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper Bt700-Y Palačinkovač 1300W | 40.90 € | **38.90 €** | 10.6 % | **5.2 %** | 37.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boffin II Zelená Energie | 49.90 € | **47.90 €** | 10.1 % | **5.7 %** | 46.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION ThermoKettle TK5 Polar white | 45.50 € | **43.50 €** | 10.8 % | **5.9 %** | 41.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka Kruger&Matz DJ  KM0886 | 28.50 € | **26.50 €** | 14.4 % | **6.3 %** | 24.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9177PZ | 40.50 € | **38.50 €** | 10.8 % | **5.3 %** | 36.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS CITY WOOD-C500 pkojová anténa DVB-T2, DAB, FM, ... | 24.50 € | **22.50 €** | 15.5 % | **6.0 %** | 20.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO7057S | 36.90 € | **34.90 €** | 11.1 % | **5.1 %** | 33.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42601S | 47.50 € | **45.50 €** | 10.3 % | **5.7 %** | 43.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák Pegasus 180 Solid MAXX | 41.90 € | **39.90 €** | 10.7 % | **5.4 %** | 38.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C320WS | 45.90 € | **43.90 €** | 10.3 % | **5.5 %** | 42.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SALENTE SuperVac | 45.50 € | **43.50 €** | 10.1 % | **5.3 %** | 42.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash DK100 (čierna) | 23.90 € | **21.90 €** | 15.7 % | **6.0 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal KO693110 | 47.50 € | **45.50 €** | 10.7 % | **6.0 %** | 44.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovačka Vacu Power 100 | 42.50 € | **40.50 €** | 11.1 % | **5.9 %** | 39.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Slow Cooker 3500SB | 51.50 € | **49.50 €** | 10.3 % | **6.0 %** | 48.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Vulcan růžový lesk 350ml SIXTOL | 23.90 € | **21.90 €** | 15.7 % | **6.0 %** | 20.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel reproduktorový KRUGER & MATZ KM0334 3m konekto... | 21.50 € | **19.50 €** | 16.1 % | **5.3 %** | 18.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL KI170D40 | 44.90 € | **42.90 €** | 10.2 % | **5.3 %** | 41.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AI-271 zesilovač | 23.50 € | **21.50 €** | 15.3 % | **5.5 %** | 20.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo 52120 | 41.90 € | **39.90 €** | 10.7 % | **5.4 %** | 38.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Vulcan červené dřevo 350ml SIXTOL | 23.50 € | **21.50 €** | 15.8 % | **5.9 %** | 20.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL JR320BT modrá | 45.00 € | **43.00 €** | 10.0 % | **5.1 %** | 42.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL JR320BT zelená | 45.00 € | **43.00 €** | 10.0 % | **5.1 %** | 42.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Radiační štít GARNI RS1 | 22.50 € | **20.50 €** | 15.3 % | **5.0 %** | 19.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (čierne) | 25.00 € | **23.00 €** | 14.5 % | **5.3 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 092H bezdrátové čidlo | 28.50 € | **26.50 €** | 14.8 % | **6.7 %** | 25.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision Mini, fotopast | 43.00 € | **41.00 €** | 10.2 % | **5.1 %** | 40.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo s kabelem pro měření teploty Techno... | 27.50 € | **25.50 €** | 15.4 % | **7.0 %** | 24.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nástenný skener UNI-T UT387A | 23.00 € | **21.00 €** | 15.1 % | **5.1 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SM5000 | 52.50 € | **50.50 €** | 10.2 % | **6.0 %** | 50.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 110H bezdrátové čidlo | 23.50 € | **21.50 €** | 15.9 % | **6.1 %** | 21.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotoateliér Puluz LED 40cm PU5041B | 26.50 € | **24.50 €** | 14.2 % | **5.6 %** | 24.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sendvičovač TEESA TSA3229B | 28.50 € | **26.50 €** | 14.5 % | **6.4 %** | 26.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO30111KP | 37.90 € | **35.90 €** | 11.0 % | **5.2 %** | 35.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná duálna WiFi kamera Gosund PC12 (4MP 192... | 26.50 € | **24.50 €** | 15.8 % | **7.1 %** | 24.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo pro měření teploty TechnoLine MA10100 | 22.90 € | **20.90 €** | 15.8 % | **5.7 %** | 20.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Palm modrý lesk 500ml SIXTOL | 23.90 € | **21.90 €** | 15.7 % | **6.0 %** | 21.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS Edifier W100T (čierne) | 22.50 € | **20.50 €** | 15.6 % | **5.3 %** | 20.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Puzdro Sunnylife pre DJI Osmo Action 5 PRO/4/3 Adven... | 23.00 € | **21.00 €** | 15.1 % | **5.1 %** | 20.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOBOVR E3 odľahčovací popruh pre Meta Quest 3/3s | 25.00 € | **23.00 €** | 14.4 % | **5.3 %** | 22.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SM193D34 | 42.50 € | **40.50 €** | 10.5 % | **5.3 %** | 40.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TV držák NEDIS TVWM1530BK plně nastavitelný / 23–55"... | 25.50 € | **23.50 €** | 15.6 % | **6.5 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 31.50 € | **29.50 €** | 54.7 % | **44.9 %** | 29.52 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.50 € | **50.50 €** | 10.3 % | **6.1 %** | 50.59 € | stávame sa najlacnejší |
| Instant Pot Classic XL (7,1 L) | 167.90 € | **165.90 €** | 10.2 % | **8.9 %** | 165.99 € | stávame sa najlacnejší |
| Russell Hobbs 27011-56 | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 44.99 € | stávame sa najlacnejší |
| DOMO DO9064C | 47.50 € | **45.50 €** | 10.2 % | **5.6 %** | 45.59 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 282.50 € | **280.50 €** | 10.1 % | **9.3 %** | 280.59 € | stávame sa najlacnejší |
| DOMO DO9047W | 43.90 € | **41.90 €** | 10.4 % | **5.4 %** | 41.99 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.50 € | **132.50 €** | 10.3 % | **8.6 %** | 132.60 € | stávame sa najlacnejší |
| TESLA PrimeSound HQ-995X | 181.90 € | **179.90 €** | 10.1 % | **8.9 %** | 180.00 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 250.90 € | **248.90 €** | 10.1 % | **9.2 %** | 249.00 € | stávame sa najlacnejší |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 245.90 € | **243.90 €** | 15.0 % | **14.1 %** | 244.00 € | stávame sa najlacnejší |
| Waydoo Underwater scooter Subnado Lite | 320.90 € | **318.90 €** | 15.0 % | **14.3 %** | 319.00 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.50 € | **56.50 €** | 10.2 % | **6.4 %** | 56.62 € | stávame sa najlacnejší |
| Baterie olověná  12V / 17Ah  VIPOW bezúdržbový akumu... | 32.50 € | **30.50 €** | 14.9 % | **7.8 %** | 30.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 650lm, Li-Ion | 18.50 € | **16.50 €** | 55.4 % | **38.6 %** | 16.65 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 162.50 € | **160.50 €** | 10.1 % | **8.7 %** | 160.70 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.00 € | **105.00 €** | 10.0 % | **8.0 %** | 105.21 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (žltý) | 161.50 € | **159.50 €** | 15.1 % | **13.7 %** | 159.72 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 14.50 € | **12.50 €** | 57.0 % | **35.3 %** | 12.74 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 160.50 € | **158.50 €** | 10.1 % | **8.7 %** | 158.80 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 116.50 € | **114.50 €** | 15.2 % | **13.2 %** | 114.81 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **24.50 €** | 54.7 % | **43.0 %** | 24.84 € | stávame sa najlacnejší |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 34.50 € | **32.50 €** | 15.3 % | **8.6 %** | 32.85 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 131.50 € | **129.50 €** | 10.4 % | **8.7 %** | 129.90 € | stávame sa najlacnejší |
| Domo DO344DH | 149.50 € | **147.50 €** | 10.1 % | **8.7 %** | 147.90 € | stávame sa najlacnejší |
| Samsung VG-SCFA43BWBXC | 68.50 € | **66.50 €** | 10.3 % | **7.1 %** | 66.90 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.00 € | **169.00 €** | 10.0 % | **8.8 %** | 169.40 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.00 €** | 10.4 % | **8.4 %** | 101.20 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 159.90 € | **158.00 €** | 10.2 % | **8.9 %** | 158.20 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 72.90 € | **71.00 €** | 42.1 % | **38.4 %** | 71.39 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Niceboy ION Cruncher C3 Onyx Black | 37.90 € | **36.00 €** | 10.6 % | **5.1 %** | 25.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Cruncher C4 Stainless Steel | 37.90 € | **36.00 €** | 10.6 % | **5.1 %** | 27.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBMINIL2 inteligentný mini spínač ZigBee (2 ks) | 22.90 € | **21.00 €** | 14.9 % | **5.3 %** | 12.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY ICFC1W | 36.90 € | **35.00 €** | 10.7 % | **5.0 %** | 29.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartring Colmi R03 18.1MM 8 (black) | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 16.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE300 AC1200 WiFi Range Extender | 34.90 € | **33.00 €** | 11.2 % | **5.1 %** | 30.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA K9 Pink RGB | 21.90 € | **20.00 €** | 15.1 % | **5.1 %** | 18.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **40.00 €** | 15.3 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **40.00 €** | 15.3 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 30.90 € | **29.00 €** | 14.8 % | **7.8 %** | 29.50 € | stávame sa najlacnejší |
| Solight rozbočka dvojnásobná | 5.60 € | **3.80 €** | 58.1 % | **7.3 %** | 2.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.00 € | **6.20 €** | 48.8 % | **15.3 %** | 6.24 € | stávame sa najlacnejší |
| HRA SWITCH Mario+Rabbids Sparks of Hope | 35.50 € | **33.90 €** | 10.1 % | **5.1 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA AC 2320 | 43.50 € | **41.90 €** | 10.0 % | **6.0 %** | 29.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy HIVE SpacePods | 38.50 € | **36.90 €** | 10.6 % | **6.0 %** | 25.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Stellar Black | 38.50 € | **36.90 €** | 10.3 % | **5.7 %** | 27.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Stellar Pink | 38.50 € | **36.90 €** | 10.3 % | **5.7 %** | 27.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Stellar White | 38.50 € | **36.90 €** | 10.3 % | **5.7 %** | 27.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada kabelových oček 6-8mm lisovacích, 60ks | 20.50 € | **18.90 €** | 15.5 % | **6.5 %** | 9.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 2 kusy (dvojba... | 18.50 € | **16.90 €** | 15.3 % | **5.4 %** | 9.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt SG S25 Ultra FIXVM-1506-BK | 34.50 € | **32.90 €** | 10.7 % | **5.6 %** | 25.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák na prádlo Tower 270 | 33.50 € | **31.90 €** | 11.4 % | **6.1 %** | 24.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WHCH520L.CE7 modrá | 37.50 € | **35.90 €** | 10.3 % | **5.6 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo L930-5 | 40.50 € | **38.90 €** | 10.1 % | **5.8 %** | 32.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagZen Powerbank FIXZENM2-10-BK | 34.50 € | **32.90 €** | 10.6 % | **5.5 %** | 26.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MR70X WiFi Dual Band Router | 36.50 € | **34.90 €** | 10.1 % | **5.3 %** | 28.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.W | 39.50 € | **37.90 €** | 10.6 % | **6.1 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente HotPot, pomalý hrnec, 6,5 l, | 39.50 € | **37.90 €** | 10.3 % | **5.8 %** | 31.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-PE125 | 40.50 € | **38.90 €** | 10.1 % | **5.7 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotation Disc Mop Ergo 55414 | 31.50 € | **29.90 €** | 11.2 % | **5.6 %** | 24.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-UNA Android TV Stick | 41.50 € | **39.90 €** | 10.0 % | **5.8 %** | 34.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio NEDIS RDFM2225BK přenosné FM, Bluetooth, napáj... | 24.50 € | **22.90 €** | 14.1 % | **6.6 %** | 17.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 10Ah XTREME bezúdržbový akumu... | 22.50 € | **20.90 €** | 14.5 % | **6.4 %** | 15.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED držák MagAir FIXMA-BK | 41.50 € | **39.90 €** | 10.3 % | **6.0 %** | 35.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LAMAX KaraokeKid1 Pink | 30.50 € | **28.90 €** | 11.7 % | **5.9 %** | 24.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL PBM100 Black | 35.50 € | **33.90 €** | 10.3 % | **5.4 %** | 29.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vileda TURBO 3v1 | 36.50 € | **34.90 €** | 10.9 % | **6.1 %** | 30.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MR80X WiFi Dual Band Router | 38.50 € | **36.90 €** | 10.6 % | **6.0 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| URP01 DRŽÁK NA POSILOVACÍ LANO HMS | 18.50 € | **16.90 €** | 16.4 % | **6.3 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision MB2, kovový box | 38.50 € | **36.90 €** | 10.1 % | **5.5 %** | 32.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1973/01 | 31.50 € | **29.90 €** | 11.2 % | **5.6 %** | 26.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-SG108 8-port Gigabit Switch | 28.50 € | **26.90 €** | 11.8 % | **5.5 %** | 23.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Mms-Mixi-Va | 34.50 € | **32.90 €** | 10.3 % | **5.2 %** | 29.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Bloom černý lesk 200ml SIXTOL | 18.50 € | **16.90 €** | 16.2 % | **6.2 %** | 13.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper Bt603-Y Vaflovač 1000W | 33.50 € | **31.90 €** | 10.6 % | **5.3 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Flexi 2, pasivní venkovní anténa | 32.50 € | **30.90 €** | 10.6 % | **5.1 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fracarro LP45F LTE 700 | 20.50 € | **18.90 €** | 15.6 % | **6.6 %** | 16.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténa venkovní Emme Esse 45L12F (2148UM) logaritmic... | 20.50 € | **18.90 €** | 14.4 % | **5.5 %** | 16.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Bloom bílé dřevo 200ml SIXTOL | 18.50 € | **16.90 €** | 16.2 % | **6.2 %** | 14.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Bloom světlé dřevo 200ml SIXTOL | 18.50 € | **16.90 €** | 16.2 % | **6.2 %** | 14.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament ANYCUBIC IPHTFBK-101 PETG-CF, 1 kg (čierny) | 18.50 € | **16.90 €** | 15.2 % | **5.2 %** | 14.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Bloom bílý lesk 200ml SIXTOL | 18.50 € | **16.90 €** | 16.2 % | **6.2 %** | 14.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Podlahový mop PROFI Micro Duo s | 32.50 € | **30.90 €** | 10.7 % | **5.2 %** | 28.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 6x filtr | 32.50 € | **30.90 €** | 10.9 % | **5.4 %** | 28.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Hrnec ner. LIVING 16,2 l | 33.50 € | **31.90 €** | 10.5 % | **5.3 %** | 29.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 10Ah  VIPOW bezúdržbový akumu... | 22.50 € | **20.90 €** | 14.5 % | **6.3 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  7,2Ah  EMOS bezúdržbový akum... | 20.50 € | **18.90 €** | 15.5 % | **6.5 %** | 17.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Silverlit Robot Blast black od Silverlit | 28.50 € | **26.90 €** | 11.9 % | **5.7 %** | 25.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boffin III Bricks | 34.50 € | **32.90 €** | 10.9 % | **5.7 %** | 31.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera 61661 Looping set-světla a zvuka | 34.50 € | **32.90 €** | 10.9 % | **5.7 %** | 31.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odvlhčovač vzduchu Geti GMD821 | 61.50 € | **59.90 €** | 8.5 % | **5.6 %** | 58.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Foodsaver New Fresh 2,3 l | 32.50 € | **30.90 €** | 11.7 % | **6.2 %** | 29.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2026E1 | 34.50 € | **32.90 €** | 10.2 % | **5.1 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9133W | 36.50 € | **34.90 €** | 10.3 % | **5.4 %** | 33.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera 70460 EVO/D132 Kufřík na 8 aut | 37.50 € | **35.90 €** | 10.3 % | **5.6 %** | 35.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR793000 | 32.50 € | **30.90 €** | 11.3 % | **5.9 %** | 30.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LAMAX PixelKid1 Blue | 31.50 € | **29.90 €** | 10.8 % | **5.2 %** | 29.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AI - 223 linkový zesilovač se 2 výstupy / G=25dB | 20.50 € | **18.90 €** | 16.1 % | **7.1 %** | 18.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy XW200 | 37.50 € | **35.90 €** | 10.7 % | **6.0 %** | 35.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Telefon GSM Kruger&Matz Simple 923 pro seniory | 20.50 € | **18.90 €** | 15.2 % | **6.2 %** | 18.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Telegant 72 Protect | 28.50 € | **26.90 €** | 11.5 % | **5.2 %** | 26.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo TechnoLine TX205 | 20.50 € | **18.90 €** | 15.3 % | **6.3 %** | 18.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUGER & MATZ KM0911 Powerbanka 5000mAh MagSafe | 20.50 € | **18.90 €** | 15.2 % | **6.2 %** | 18.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO961T | 29.50 € | **27.90 €** | 11.6 % | **5.5 %** | 27.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rozbočovač 4v1 Baseus Metal Gleam Series, USB-C na U... | 21.50 € | **19.90 €** | 14.9 % | **6.4 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.90 €** | 15.6 % | **9.1 %** | 26.92 € | stávame sa najlacnejší |
| Teploměr digitální s bazénovým čidlem GARNI 245P | 33.50 € | **31.90 €** | 15.7 % | **10.2 %** | 31.96 € | stávame sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 15.5 % | **6.5 %** | 18.98 € | stávame sa najlacnejší |
| Diagnostic Scanner OBD2 Ancel AD310/AC103 | 24.50 € | **22.90 €** | 16.1 % | **8.5 %** | 22.99 € | stávame sa najlacnejší |
| Tefal B817S255 | 31.50 € | **29.90 €** | 11.1 % | **5.5 %** | 29.99 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **20.90 €** | 53.3 % | **42.4 %** | 20.99 € | stávame sa najlacnejší |
| RUSSELL HOBBS 21395-56 | 53.50 € | **51.90 €** | 10.8 % | **7.5 %** | 51.99 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **58.90 €** | 10.4 % | **7.4 %** | 59.00 € | stávame sa najlacnejší |
| Filtračná hmlovina 1/4 voľnej jamky pre DJI Mini 5 Pro | 19.50 € | **17.90 €** | 15.6 % | **6.1 %** | 18.00 € | stávame sa najlacnejší |
| Gelové rukavice DBX BUSHIDO červené vel. L/XL | 17.50 € | **15.90 €** | 16.0 % | **5.4 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gelové rukavice DBX BUSHIDO červené vel. S/M | 17.50 € | **15.90 €** | 16.0 % | **5.4 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gelové rukavice DBX BUSHIDO žluté vel. L/XL | 17.50 € | **15.90 €** | 16.0 % | **5.4 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gelové rukavice DBX BUSHIDO žluté vel. S/M | 17.50 € | **15.90 €** | 16.0 % | **5.4 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-20v2 vel. L chrániče holení a nártu DBX BUSHIDO | 17.50 € | **15.90 €** | 16.0 % | **5.4 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-20v2 VEL. M CHRÁNIČE HOLENÍ A NÁRTU DBX BUSHIDO | 17.50 € | **15.90 €** | 16.0 % | **5.4 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-20v2 vel. XL chrániče holení a nártu DBX BUSHIDO | 17.50 € | **15.90 €** | 16.0 % | **5.4 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterka Superfire F3-L2 – 570 lm, 260 m, 5 režimov, ... | 17.50 € | **15.90 €** | 15.8 % | **5.2 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  9Ah  VIPOW bezúdržbový akumu... | 17.50 € | **15.90 €** | 16.3 % | **5.7 %** | 15.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 32F bezdrátové čidlo | 16.50 € | **14.90 €** | 16.3 % | **5.1 %** | 14.96 € | stávame sa najlacnejší |
| IMOU SG108C 8-portový prepínač LAN | 17.50 € | **15.90 €** | 16.0 % | **5.4 %** | 15.99 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.90 €** | 15.0 % | **14.1 %** | 207.93 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.90 €** | 15.0 % | **14.1 %** | 203.94 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 71.50 € | **69.90 €** | 14.7 % | **12.1 %** | 69.95 € | stávame sa najlacnejší |
| Strong Q1 mini projektor | 86.50 € | **84.90 €** | 10.5 % | **8.4 %** | 84.99 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.90 €** | 10.4 % | **7.7 %** | 65.00 € | stávame sa najlacnejší |
| Fixed Selfie stick MagSnap FIXSN-M-BK | 40.00 € | **38.50 €** | 10.1 % | **6.0 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax Blaze2 black s USB-C | 32.50 € | **31.00 €** | 10.2 % | **5.1 %** | 15.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT 55048 PROFI Micro Duo | 32.50 € | **31.00 €** | 10.1 % | **5.1 %** | 16.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro SG S25+ FIXPFIT2-1505-BK | 31.00 € | **29.50 €** | 10.3 % | **5.0 %** | 17.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Gran Crema káva zrnková 1000g | 28.50 € | **27.00 €** | 11.2 % | **5.4 %** | 17.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-575 XL Black | 27.50 € | **26.00 €** | 11.3 % | **5.3 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný miniprepínač WiFi Sonoff MINI-RBS | 15.50 € | **14.00 €** | 16.8 % | **5.5 %** | 6.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4214 trojúhelník | 26.50 € | **25.00 €** | 11.6 % | **5.3 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov pre DJI Neo Everyday Freewell | 20.00 € | **18.50 €** | 14.3 % | **5.7 %** | 11.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka Sonoff S60ZBTPF ZigBee | 20.00 € | **18.50 €** | 14.8 % | **6.1 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| XIAOMI Mesh System AC1200 EU (1-pack) | 34.00 € | **32.50 €** | 10.2 % | **5.3 %** | 26.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy MW400 | 34.00 € | **32.50 €** | 10.3 % | **5.4 %** | 26.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 4167 | 34.00 € | **32.50 €** | 10.3 % | **5.4 %** | 27.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá QCY Crossky C10 (čierne) | 20.00 € | **18.50 €** | 14.8 % | **6.1 %** | 13.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Mop Profi Cotton Plus SOE55020 | 32.50 € | **31.00 €** | 10.1 % | **5.1 %** | 26.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi TS3600 Palačinkovač | 35.00 € | **33.50 €** | 10.1 % | **5.4 %** | 28.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT 55049 Mop Profi Micduo+tel.Tyč | 32.50 € | **31.00 €** | 10.1 % | **5.1 %** | 26.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Emos E0127 teploměr digitální bezdrátový | 19.00 € | **17.50 €** | 15.0 % | **5.9 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovladač GoSat GS7060 HDi | 17.50 € | **16.00 €** | 15.1 % | **5.2 %** | 12.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer TX50E | 35.00 € | **33.50 €** | 10.2 % | **5.4 %** | 30.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Lea B-4574 červená | 30.50 € | **29.00 €** | 10.6 % | **5.1 %** | 25.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-576 XL Color | 27.50 € | **26.00 €** | 11.3 % | **5.3 %** | 23.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  5Ah  EMOS bezúdržbový akumul... | 18.50 € | **17.00 €** | 14.4 % | **5.1 %** | 14.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vařič elektrický TEESA TSA0202 | 22.00 € | **20.50 €** | 14.1 % | **6.4 %** | 18.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0043A | 17.50 € | **16.00 €** | 15.4 % | **5.5 %** | 13.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower DL181-12 Mini UPS 12V 1A | 22.00 € | **20.50 €** | 14.0 % | **6.2 %** | 18.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica LAI J9570A1 | 35.00 € | **33.50 €** | 10.0 % | **5.3 %** | 31.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530 Beige | 28.50 € | **27.00 €** | 11.0 % | **5.2 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530 Black | 28.50 € | **27.00 €** | 11.0 % | **5.2 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná IP kamera WiFi SONOFF CAM-S2 (Gen. 2) | 23.00 € | **21.50 €** | 14.7 % | **7.2 %** | 19.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stropné svietidlo Yeelight MercuryE C260 so senzorom... | 20.00 € | **18.50 €** | 15.2 % | **6.6 %** | 16.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS E3070 domácí bezdrátová meteostanice | 21.00 € | **19.50 €** | 14.7 % | **6.5 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZigBee 3.0 Gateway Plus-E SONOFF ZBDongle-E Dongle (... | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 19.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA X13 (biele) | 16.50 € | **15.00 €** | 16.1 % | **5.6 %** | 13.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA X13 (čierne) | 16.50 € | **15.00 €** | 16.1 % | **5.6 %** | 13.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Plus Neo TT7465 | 40.00 € | **38.50 €** | 10.1 % | **6.0 %** | 37.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS CITY ORBI-C200 univerzální pokojová anténa | 20.00 € | **18.50 €** | 15.2 % | **6.5 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit 52101 Clean Twist Disc Mop Ergo | 31.50 € | **30.00 €** | 10.5 % | **5.2 %** | 29.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUGER & MATZ KM0913-B Powerbanka 10000mAh MagSafe | 22.00 € | **20.50 €** | 13.9 % | **6.1 %** | 19.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo GARNI 063H | 23.00 € | **21.50 €** | 13.9 % | **6.5 %** | 20.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze Btalk 3 Plus Smartwatch (Gold) | 22.00 € | **20.50 €** | 14.4 % | **6.6 %** | 19.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti Habotest HT607 | 18.50 € | **17.00 €** | 14.7 % | **5.4 %** | 16.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 12 Ah MHPower MS12-12 | 23.00 € | **21.50 €** | 14.8 % | **7.3 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (zlaté) | 24.00 € | **22.50 €** | 14.1 % | **7.0 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Časovač (minutka) GARNI KT2 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 15.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vaflovač TEESA TSA3225 | 20.00 € | **18.50 €** | 13.9 % | **5.4 %** | 18.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dvojkanálový nástenný vypínač SONOFF MINI-ZB2GS-E Zi... | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Potápačské vodotesné svetlo Puluz LED 40 m (čierne) | 43.00 € | **41.50 €** | 14.9 % | **10.9 %** | 41.51 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **18.00 €** | 15.6 % | **6.7 %** | 18.04 € | stávame sa najlacnejší |
| Slúchadlá do uší NeoBuds Pro 3 TWS ANC starlight | 140.50 € | **139.00 €** | 15.2 % | **14.0 %** | 139.04 € | stávame sa najlacnejší |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 55.50 € | **54.00 €** | 15.1 % | **12.0 %** | 54.06 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 46.00 € | **44.50 €** | 12.5 % | **8.9 %** | 44.59 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 123.50 € | **122.00 €** | 14.9 % | **13.5 %** | 122.09 € | stávame sa najlacnejší |
| Niceboy PILOT S5 GPS + WIFI | 49.50 € | **48.00 €** | 10.9 % | **7.5 %** | 48.10 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.50 € | **11.00 €** | 53.3 % | **34.9 %** | 11.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.50 € | **15.00 €** | 48.2 % | **34.8 %** | 15.11 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 28.50 € | **27.00 €** | 50.2 % | **42.3 %** | 27.14 € | stávame sa najlacnejší |
| Tefal BL87G831 | 122.50 € | **121.00 €** | 10.0 % | **8.7 %** | 121.16 € | stávame sa najlacnejší |
| Evolveo Solární panel pro StrongVision | 36.50 € | **35.00 €** | 11.2 % | **6.7 %** | 35.18 € | stávame sa najlacnejší |
| LAMAX StarCube1 | 59.50 € | **58.00 €** | 10.5 % | **7.7 %** | 58.20 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (ružové zlato) | 22.00 € | **20.50 €** | 15.2 % | **7.4 %** | 20.71 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 19.50 € | **18.00 €** | 14.5 % | **5.7 %** | 18.29 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 202.50 € | **201.00 €** | 10.2 % | **9.4 %** | 201.29 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 13.50 € | **12.00 €** | 56.1 % | **38.8 %** | 12.33 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 101.00 € | **99.50 €** | 14.8 % | **13.1 %** | 99.83 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **13.50 €** | 54.0 % | **38.6 %** | 13.85 € | stávame sa najlacnejší |
| Počítačová skrinka Darkflash B351 | 18.50 € | **17.00 €** | 15.2 % | **5.8 %** | 17.37 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **24.50 €** | 15.1 % | **8.4 %** | 24.88 € | stávame sa najlacnejší |
| Russell Hobbs 26380-70 | 40.00 € | **38.50 €** | 10.2 % | **6.0 %** | 38.90 € | stávame sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 52.00 € | **50.50 €** | 15.0 % | **11.7 %** | 50.90 € | stávame sa najlacnejší |
| Strong LEAP-UNA+, FHD GOOGLE TV STICK | 54.50 € | **53.00 €** | 10.2 % | **7.2 %** | 53.40 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 26.50 € | **25.00 €** | 14.8 % | **8.3 %** | 25.42 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 119.50 € | **118.00 €** | 10.9 % | **9.5 %** | 118.44 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 119.50 € | **118.00 €** | 10.9 % | **9.5 %** | 118.44 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 14.50 € | **13.00 €** | 47.4 % | **32.1 %** | 13.45 € | stávame sa najlacnejší |
| Solight trubica pre GL05-38 | 13.50 € | **12.00 €** | 50.6 % | **33.8 %** | 12.45 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **119.00 €** | 14.8 % | **13.4 %** | 119.48 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 12.50 € | **11.00 €** | 53.5 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| Impregnace na koženou obuv INPRODUCTS WAX 200 ml | 17.50 € | **16.00 €** | 15.4 % | **5.5 %** | 16.49 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **24.00 €** | 37.8 % | **29.6 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **22.00 €** | 39.1 % | **30.2 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **14.00 €** | 55.0 % | **40.0 %** | 14.50 € | stávame sa najlacnejší |
| Automat na horkou vodu NEDIS KAWD100FBK / 2.5 l / ov... | 64.50 € | **63.00 €** | 15.4 % | **12.7 %** | 63.50 € | stávame sa najlacnejší |
| Vysavač ruční Xtrobb 26203 | 24.50 € | **23.00 €** | 15.7 % | **8.7 %** | 23.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **32.00 €** | 14.6 % | **9.5 %** | 32.50 € | stávame sa najlacnejší |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 75.50 € | **74.00 €** | 15.1 % | **12.8 %** | 74.50 € | stávame sa najlacnejší |
| Panasonic RP-TCM115E-A, Blue | 11.99 € | **10.50 €** | 20.3 % | **5.4 %** | 9.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Shark, aktivní venkovní anténa | 26.99 € | **25.50 €** | 12.8 % | **6.6 %** | 22.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **108.50 €** | 15.0 % | **13.6 %** | 108.73 € | stávame sa najlacnejší |
| Baterie motocyklová  12V /  4Ah Vipow | 14.90 € | **13.50 €** | 16.3 % | **5.3 %** | 7.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální kuchyňská váha EMOS EV025 černá | 14.90 € | **13.50 €** | 16.1 % | **5.2 %** | 12.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.90 € | **10.50 €** | 56.6 % | **38.1 %** | 10.54 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 10.90 € | **9.50 €** | 49.7 % | **30.5 %** | 9.56 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 13.90 € | **12.50 €** | 44.9 % | **30.3 %** | 12.61 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.90 € | **14.50 €** | 56.1 % | **42.4 %** | 14.77 € | stávame sa najlacnejší |
| MERCUSYS MR50G WiFi Dual Band Router | 34.90 € | **33.50 €** | 11.0 % | **6.6 %** | 15.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Qualita Oro MG 1000 g | 31.90 € | **30.50 €** | 11.0 % | **6.2 %** | 18.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sony WIC100B.CE7 black | 39.90 € | **38.50 €** | 10.0 % | **6.1 %** | 26.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sony WIC100W.CE7 white | 39.90 € | **38.50 €** | 10.0 % | **6.1 %** | 26.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Glass Electric Kettle 17GG | 28.90 € | **27.50 €** | 11.4 % | **6.0 %** | 17.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TrueLife AIR Diffuser D5 Dark | 33.90 € | **32.50 €** | 11.2 % | **6.6 %** | 23.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TrueLife AIR Diffuser D5 Light | 33.90 € | **32.50 €** | 11.2 % | **6.6 %** | 23.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Selfie Snap XL černý, FIXSN-XL-BK | 31.90 € | **30.50 €** | 10.2 % | **5.3 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Qualita Oro káva zrnková 1000g | 28.90 € | **27.50 €** | 10.9 % | **5.5 %** | 19.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Crema Classico 1000 g | 25.90 € | **24.50 €** | 11.2 % | **5.1 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Crema Dolce 1000 g | 25.90 € | **24.50 €** | 11.2 % | **5.1 %** | 16.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Beans 4 POP Black | 28.90 € | **27.50 €** | 10.4 % | **5.1 %** | 20.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Beans 4 POP Pink | 28.90 € | **27.50 €** | 10.4 % | **5.1 %** | 20.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Pods TWS sluchátka FIXPDS-BK | 32.90 € | **31.50 €** | 10.3 % | **5.7 %** | 24.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 130A | 36.90 € | **35.50 €** | 10.0 % | **5.8 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy OFFICE K30X BT | 28.90 € | **27.50 €** | 11.0 % | **5.6 %** | 21.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Qualita Rossa káva zrnk. 1000g | 24.90 € | **23.50 €** | 11.4 % | **5.1 %** | 17.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C210 Home Sec. Wi-Fi Camera | 33.90 € | **32.50 €** | 10.7 % | **6.2 %** | 27.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax Clips1 Black | 25.90 € | **24.50 €** | 11.4 % | **5.4 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Xany 1, aktivní pokojová anténa | 31.90 € | **30.50 €** | 11.3 % | **6.4 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 33W Power Bank 20000mAh Blue GL | 28.90 € | **27.50 €** | 10.6 % | **5.3 %** | 22.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style Eco 2,4l zelená | 31.90 € | **30.50 €** | 11.1 % | **6.2 %** | 26.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio FX 991 CE X | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.PU | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15,6" Batoh Prelude Recycled Pro | 25.90 € | **24.50 €** | 11.3 % | **5.3 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Impregnace na obuv INPRODUCTS 200ml | 17.90 € | **16.50 €** | 14.9 % | **5.9 %** | 13.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mini detektor úniku plynu Habotest HT66 | 19.90 € | **18.50 €** | 15.2 % | **7.1 %** | 15.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Bloom šedé dřevo 200ml SIXTOL | 17.90 € | **16.50 €** | 15.2 % | **6.2 %** | 13.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SlowCook S350 - pomalý hrnec | 31.90 € | **30.50 €** | 10.0 % | **5.2 %** | 27.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nosič na sedlovku ALU Compass | 17.90 € | **16.50 €** | 15.1 % | **6.1 %** | 13.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií EMOS BCN-60U | 21.90 € | **20.50 €** | 14.9 % | **7.5 %** | 17.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  7,2Ah  EMOS bezúdržbový akum... | 20.90 € | **19.50 €** | 14.8 % | **7.1 %** | 17.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax Tones1 Black | 27.90 € | **26.50 €** | 10.6 % | **5.1 %** | 24.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax Tones1 White | 27.90 € | **26.50 €** | 10.6 % | **5.1 %** | 24.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sendvičovač TEESA TSA3222 | 16.90 € | **15.50 €** | 14.9 % | **5.4 %** | 13.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558W bezdrátový | 19.90 € | **18.50 €** | 15.2 % | **7.1 %** | 16.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO496WK | 27.90 € | **26.50 €** | 10.8 % | **5.2 %** | 25.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff MINI-2GS Matter dvojkanálový miniprepínač | 17.90 € | **16.50 €** | 16.0 % | **6.9 %** | 15.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff MINI-ZB2GS Dvojkanálový miniprepínač ZigBee | 17.90 € | **16.50 €** | 16.1 % | **7.0 %** | 15.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Yogurella 617 | 27.90 € | **26.50 €** | 11.1 % | **5.6 %** | 25.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vileda Spin & Clean mop | 32.90 € | **31.50 €** | 10.6 % | **5.9 %** | 30.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.MA | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9142EK | 22.90 € | **21.50 €** | 11.9 % | **5.0 %** | 20.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fleg Dron/Ponorka s kamerou Fleg | 32.90 € | **31.50 €** | 11.0 % | **6.3 %** | 30.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9056C | 32.90 € | **31.50 €** | 10.5 % | **5.8 %** | 31.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS CITY LEAF-C600 pokojová anténa DVB-T2, DAB, fil... | 20.90 € | **19.50 €** | 15.0 % | **7.3 %** | 19.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LAMAX PixelKid1 Pink | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 29.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.90 € | **28.50 €** | 11.1 % | **5.9 %** | 28.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pasek LED RGBIC Yeelight Led základné pásové svietid... | 20.90 € | **19.50 €** | 15.4 % | **7.6 %** | 19.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vařič elektrický TEESA TSA0201 | 16.90 € | **15.50 €** | 15.3 % | **5.7 %** | 15.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 23.90 € | **22.50 €** | 38.4 % | **30.3 %** | 22.53 € | stávame sa najlacnejší |
| Ariete ART 438/04 | 30.90 € | **29.50 €** | 11.0 % | **6.0 %** | 29.54 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA B90 Čierne | 17.90 € | **16.50 €** | 15.5 % | **6.5 %** | 16.57 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah  VIPOW bezúdržbový akumu... | 23.90 € | **22.50 €** | 15.9 % | **9.1 %** | 22.58 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 60.90 € | **59.50 €** | 10.3 % | **7.8 %** | 59.60 € | stávame sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.4 % | **5.8 %** | 26.61 € | stávame sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **34.50 €** | 15.0 % | **10.5 %** | 34.66 € | stávame sa najlacnejší |
| Aroma difuzer Vulcan modrý lesk 350ml SIXTOL | 21.90 € | **20.50 €** | 14.8 % | **7.5 %** | 20.69 € | stávame sa najlacnejší |
| Smart Scene Wall Switch WiFi Sonoff M5 2C (2-channel) | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 15.69 € | stávame sa najlacnejší |
| Slúchadlá TWS QCY Buds HT15 ANC (modré) | 17.90 € | **16.50 €** | 14.8 % | **5.8 %** | 16.69 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 18.90 € | **17.50 €** | 54.6 % | **43.1 %** | 17.70 € | stávame sa najlacnejší |
| Edifier Open-Ear Comfo Flex white | 47.90 € | **46.50 €** | 15.8 % | **12.4 %** | 46.75 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8059 | 17.90 € | **16.50 €** | 15.0 % | **6.0 %** | 16.79 € | stávame sa najlacnejší |
| Freewell Glow Mist 1/4 diffusion filter for DJI Osmo... | 17.90 € | **16.50 €** | 15.1 % | **6.1 %** | 16.83 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **61.50 €** | 21.8 % | **19.0 %** | 61.90 € | stávame sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **40.50 €** | 11.0 % | **7.3 %** | 40.90 € | stávame sa najlacnejší |
| Beper BEP-P101CUD100 | 34.90 € | **33.50 €** | 10.7 % | **6.2 %** | 33.90 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **7.10 €** | 55.5 % | **33.0 %** | 7.17 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 6.00 € | **4.80 €** | 49.2 % | **19.3 %** | 4.81 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 7.50 € | **6.30 €** | 59.6 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.90 € | **3.70 €** | 54.4 % | **16.6 %** | 3.79 € | stávame sa najlacnejší |
| Niceboy Podsie 4 White | 32.00 € | **30.90 €** | 10.1 % | **6.3 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Beans 4 White | 32.00 € | **30.90 €** | 10.1 % | **6.3 %** | 21.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Crema E Aroma 1000 g | 26.00 € | **24.90 €** | 10.4 % | **5.7 %** | 16.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy VOICE | 32.00 € | **30.90 €** | 10.1 % | **6.3 %** | 23.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 31.00 € | **29.90 €** | 9.2 % | **5.3 %** | 23.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff SNZB-01M Inteligentné bezdrôtové tlačidlo ZigBee | 19.00 € | **17.90 €** | 13.6 % | **7.0 %** | 12.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO941T | 24.00 € | **22.90 €** | 10.2 % | **5.1 %** | 18.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI PB PD 20W+QC 22,5A,30000mAh PBPD30BK | 30.00 € | **28.90 €** | 10.2 % | **6.1 %** | 27.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LAMAX KaraokeKid1 Blue | 30.00 € | **28.90 €** | 10.1 % | **6.1 %** | 27.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boffin I 100 | 25.00 € | **23.90 €** | 10.3 % | **5.4 %** | 22.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Gran Aroma Bar káva zrnk. 1000g | 29.00 € | **27.90 €** | 10.0 % | **5.8 %** | 26.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO309KP | 25.00 € | **23.90 €** | 10.3 % | **5.4 %** | 22.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO 200 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 16.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS QCY MeloBuds HT16 (biele) | 18.00 € | **16.90 €** | 14.1 % | **7.1 %** | 16.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 19.00 € | **17.90 €** | 37.2 % | **29.2 %** | 17.97 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 31.00 € | **29.90 €** | 43.8 % | **38.7 %** | 29.98 € | stávame sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.00 € | **32.90 €** | 10.3 % | **6.7 %** | 33.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk GPS (sivé) | 43.00 € | **41.90 €** | 14.8 % | **11.8 %** | 42.00 € | stávame sa najlacnejší |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 28.00 € | **26.90 €** | 14.1 % | **9.6 %** | 27.00 € | stávame sa najlacnejší |
| Teploměr UNI-T A61 vpichovací | 13.00 € | **11.90 €** | 15.3 % | **5.5 %** | 5.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARG-2154B vel. L suspenzor DBX Bushido | 15.00 € | **13.90 €** | 14.5 % | **6.1 %** | 8.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARG-2154B vel. M suspenzor DBX Bushido | 15.00 € | **13.90 €** | 14.5 % | **6.1 %** | 8.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARG-2154B vel. XL suspenzor DBX Bushido | 15.00 € | **13.90 €** | 14.5 % | **6.1 %** | 8.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MG-2-WG CHRÁNIČ ZUBŮ DBX BUSHIDO | 15.00 € | **13.90 €** | 14.5 % | **6.1 %** | 9.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-20v1 vel. L chrániče holení a nártu DBX BUSHIDO | 15.00 € | **13.90 €** | 14.5 % | **6.1 %** | 9.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-20v1 vel. M chrániče holení a nártu DBX BUSHIDO | 15.00 € | **13.90 €** | 14.5 % | **6.1 %** | 9.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-20v1 vel. XL chrániče holení a nártu DBX BUSHIDO | 15.00 € | **13.90 €** | 14.5 % | **6.1 %** | 9.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-20 vel. L chrániče holení a nártu DBX BUSHIDO | 15.00 € | **13.90 €** | 14.5 % | **6.1 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-20 vel. M chrániče holení a nártu DBX BUSHIDO | 15.00 € | **13.90 €** | 14.5 % | **6.1 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-20 vel. S chrániče holení a nártu DBX BUSHIDO | 15.00 € | **13.90 €** | 14.5 % | **6.1 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SP-20 vel. XL chrániče holení a nártu DBX BUSHIDO | 15.00 € | **13.90 €** | 14.5 % | **6.1 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Klip mikrofónu Puluz PU3045 3m, 3,5 mm Jack | 17.00 € | **15.90 €** | 14.4 % | **7.0 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS QCY Ailybuds E20 HT13 (čierne) | 17.00 € | **15.90 €** | 14.4 % | **7.0 %** | 13.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální kuchyňská váha EMOS EV026, stříbrná | 14.00 € | **12.90 €** | 14.0 % | **5.1 %** | 11.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prilbový držiak Telesin pre športové kamery (GP-HBM-... | 13.00 € | **11.90 €** | 15.3 % | **5.5 %** | 10.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Technoline WS 9450 | 16.00 € | **14.90 €** | 14.3 % | **6.4 %** | 14.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  7Ah  VIPOW bezúdržbový akumu... | 15.00 € | **13.90 €** | 13.5 % | **5.2 %** | 13.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 052H bezdrátové čidlo | 16.00 € | **14.90 €** | 14.5 % | **6.6 %** | 14.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Infračervený teplomer UNI-T UT306C | 17.00 € | **15.90 €** | 13.8 % | **6.5 %** | 15.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny zvuku UNI-T UT353 | 17.00 € | **15.90 €** | 14.7 % | **7.3 %** | 15.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  7,5Ah  VIPOW bezúdržbový aku... | 16.00 € | **14.90 €** | 14.9 % | **7.0 %** | 14.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **10.90 €** | 44.3 % | **31.1 %** | 10.98 € | stávame sa najlacnejší |
| Sonoff AirGuard TH SNZB-02DR2 ZigBee LCD senzor tepl... | 15.00 € | **13.90 €** | 13.8 % | **5.4 %** | 13.99 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 243.00 € | **241.90 €** | 14.4 % | **13.9 %** | 242.00 € | stávame sa najlacnejší |
| ASUS USB-BT500 | 13.99 € | **12.90 €** | 16.4 % | **7.3 %** | 8.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MD3J4ZM/A 20W USB-C Power Adapter | 22.90 € | **21.90 €** | 11.0 % | **6.2 %** | 10.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 67W Charging Combo (Type-A) EU | 23.50 € | **22.50 €** | 10.6 % | **5.9 %** | 12.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINI-D Smart WiFi Matter Switch (AC/DC 12-48V... | 17.50 € | **16.50 €** | 14.6 % | **8.0 %** | 6.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gel Blaster Elite Facemask | 26.50 € | **25.50 €** | 11.1 % | **6.9 %** | 16.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PANASONIC RP-HF100ME-K černá 559395 | 21.50 € | **20.50 €** | 11.9 % | **6.7 %** | 11.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI Síto pro FD1000 ULTRA | 14.50 € | **13.50 €** | 13.4 % | **5.5 %** | 5.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MUQ93ZM/A USB-C Light Cable (1m) | 22.90 € | **21.90 €** | 10.4 % | **5.6 %** | 13.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0042A | 12.90 € | **11.90 €** | 15.6 % | **6.7 %** | 3.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotaška pod rám COMPASS | 13.90 € | **12.90 €** | 14.7 % | **6.5 %** | 4.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Flexi 1, pasivní venkovní anténa | 22.50 € | **21.50 €** | 11.2 % | **6.3 %** | 13.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo T110 | 15.50 € | **14.50 €** | 13.4 % | **6.1 %** | 6.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8/8 Pro Cover (Black) | 30.50 € | **29.50 €** | 10.2 % | **6.5 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Optický kabel KRUGER & MATZ KM1222 10m | 14.50 € | **13.50 €** | 16.7 % | **8.7 %** | 6.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo EasyPhone ID White | 29.50 € | **28.50 €** | 10.2 % | **6.5 %** | 22.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Snacker S1 | 22.90 € | **21.90 €** | 11.2 % | **6.4 %** | 16.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Crema E Gusto 1000 g | 23.00 € | **22.00 €** | 10.3 % | **5.5 %** | 16.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Sora Black | 24.50 € | **23.50 €** | 10.8 % | **6.3 %** | 17.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Sora Pink | 24.50 € | **23.50 €** | 10.8 % | **6.3 %** | 17.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Marella 2,4l bílá 2024 | 20.50 € | **19.50 €** | 11.2 % | **5.8 %** | 13.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica LAI B31AA | 24.50 € | **23.50 €** | 10.8 % | **6.3 %** | 18.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Redmi Buds 8 Active Black | 22.50 € | **21.50 €** | 11.5 % | **6.5 %** | 16.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B -4239 čtverec | 21.90 € | **20.90 €** | 11.4 % | **6.3 %** | 15.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica Tosca J9064A1 set | 28.90 € | **27.90 €** | 10.3 % | **6.4 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Powerbanka 20 000 FIXZEN2-20-BK | 22.00 € | **21.00 €** | 10.0 % | **5.0 %** | 16.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed krytApple iPh 17P FIXSHM-1602-TR | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 11.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada 20 kusov príslušenstva Puluz pre športové kamer... | 16.50 € | **15.50 €** | 14.6 % | **7.6 %** | 10.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.90 € | **18.90 €** | 10.7 % | **5.1 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (čierny) | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PEACH PL707 Home Office Laminator | 22.90 € | **21.90 €** | 11.2 % | **6.3 %** | 17.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Pins 4 Black | 24.50 € | **23.50 €** | 10.4 % | **5.9 %** | 19.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Pins 4 White | 24.50 € | **23.50 €** | 10.4 % | **5.9 %** | 19.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Mop 56553 Picobello XL SOE56553 | 23.50 € | **22.50 €** | 11.5 % | **6.7 %** | 18.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vileda Ultramax XL Microfibre 2v1 mop | 25.50 € | **24.50 €** | 10.5 % | **6.1 %** | 20.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1973 | 29.50 € | **28.50 €** | 10.3 % | **6.5 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechnoLine WS 8005 digitální budík | 22.50 € | **21.50 €** | 11.5 % | **6.5 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 651 Black, C2P10AE | 26.50 € | **25.50 €** | 10.1 % | **6.0 %** | 21.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy WSK1102 | 27.50 € | **26.50 €** | 10.8 % | **6.8 %** | 22.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, bílá, PO | 23.50 € | **22.50 €** | 12.1 % | **7.3 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-BB050 | 19.50 € | **18.50 €** | 12.8 % | **7.0 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Návlek na mop 55117 Ha SOE55117 | 14.90 € | **13.90 €** | 12.8 % | **5.2 %** | 10.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Qualita Oro 500 g | 14.90 € | **13.90 €** | 12.6 % | **5.0 %** | 10.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL ZP 300138 | 25.50 € | **24.50 €** | 10.7 % | **6.3 %** | 21.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada bitumenových závaží 4x1,25kg, 31mm, REBEL ACTIV... | 10.90 € | **9.90 €** | 16.1 % | **5.5 %** | 6.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný senzor úniku vody IMOU ZL1 ZigBee | 14.50 € | **13.50 €** | 14.0 % | **6.1 %** | 10.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15,6" Modrý 18litrový cestovní batoh | 20.90 € | **19.90 €** | 10.5 % | **5.2 %** | 16.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica Norma J9073A4 set | 23.90 € | **22.90 €** | 11.4 % | **6.7 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-SG105 5-port Gigabit Switch | 21.90 € | **20.90 €** | 10.5 % | **5.4 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-561 Color | 22.90 € | **21.90 €** | 11.0 % | **6.1 %** | 18.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Kiddie 2 Blue | 22.90 € | **21.90 €** | 11.6 % | **6.7 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI PB PD20W+QC22.5W,10000mAh PBPD10BK | 19.50 € | **18.50 €** | 11.9 % | **6.1 %** | 15.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN GaN 33W, USB-C/IPH, bílá CHPD0022 | 17.50 € | **16.50 €** | 11.6 % | **5.2 %** | 13.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 4100 | 15.50 € | **14.50 €** | 14.9 % | **7.5 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK LS108G Switch | 22.00 € | **21.00 €** | 10.4 % | **5.4 %** | 18.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Jade 2, aktivní venkovní anténa | 27.50 € | **26.50 €** | 10.2 % | **6.2 %** | 23.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB WiFi adaptér 2,4GHz AMIKO WLN-881 (MT7601) 150Mb... | 13.90 € | **12.90 €** | 15.9 % | **7.6 %** | 10.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténní zdroj 12V/150mA Emme Esse 83951CE s výhybkou... | 16.50 € | **15.50 €** | 14.9 % | **8.0 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER toner TN-1090 | 23.50 € | **22.50 €** | 10.3 % | **5.6 %** | 19.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI PB PD20W+QC22.5W,20000mAh PBPD20BK | 23.50 € | **22.50 €** | 11.1 % | **6.4 %** | 19.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO7052S | 25.50 € | **24.50 €** | 10.7 % | **6.4 %** | 21.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Alpha T2, HD DVB-T2 rekordér | 21.50 € | **20.50 €** | 11.0 % | **5.8 %** | 17.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Honey Day 160ml SIXTOL | 14.50 € | **13.50 €** | 14.3 % | **6.5 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  2,2Ah  EMOS bezúdržbový akum... | 13.50 € | **12.50 €** | 16.3 % | **7.7 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS E05018 bezdrátové čidlo | 14.50 € | **13.50 €** | 14.0 % | **6.1 %** | 11.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Talk bluetooth headset FIXTLK2-BK | 23.90 € | **22.90 €** | 11.0 % | **6.3 %** | 20.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| L'OR Espresso Onyx 500g | 15.50 € | **14.50 €** | 13.4 % | **6.0 %** | 12.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo SG-286 Soundbar | 18.50 € | **17.50 €** | 12.3 % | **6.3 %** | 15.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gravitačný držiak do auta pre telefón Baseus Tank s ... | 16.50 € | **15.50 €** | 14.9 % | **8.0 %** | 13.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-511 Color | 21.90 € | **20.90 €** | 10.9 % | **5.8 %** | 18.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK UE330 USB Hub & Ethernet Adaptér | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 18.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Honey Night 160ml SIXTOL | 14.50 € | **13.50 €** | 14.2 % | **6.4 %** | 11.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baseus Golden Contactor Pro nabíjačka do auta, USB +... | 13.50 € | **12.50 €** | 14.6 % | **6.1 %** | 10.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový mikrofón Puluz PU3150B Lavalier Type | 14.50 € | **13.50 €** | 15.7 % | **7.7 %** | 11.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Návlek na mop 55126 Ha SOE55126 | 14.90 € | **13.90 €** | 12.8 % | **5.2 %** | 11.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor úniku plynu Habotest HT59 | 12.90 € | **11.90 €** | 16.8 % | **7.7 %** | 9.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ION Kettle K1 Crystal Glass W | 26.50 € | **25.50 €** | 10.5 % | **6.3 %** | 23.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26470-56 | 20.90 € | **19.90 €** | 11.9 % | **6.6 %** | 18.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro Apple iPad FIXET-1325-BK | 25.50 € | **24.50 €** | 10.3 % | **6.0 %** | 22.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips SHP2500/10 | 21.90 € | **20.90 €** | 11.8 % | **6.7 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Konvice filtrační TEESA TSA0103 | 13.90 € | **12.90 €** | 14.7 % | **6.5 %** | 11.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lampa T22 Superfire | 15.90 € | **14.90 €** | 14.9 % | **7.7 %** | 13.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-540BK Black | 18.90 € | **17.90 €** | 11.6 % | **5.7 %** | 16.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Tab Passenger 2, FIXTAB-PAS2-BK | 16.50 € | **15.50 €** | 13.4 % | **6.5 %** | 13.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Hrnec ner. LIVING 9 l | 23.90 € | **22.90 €** | 10.0 % | **5.4 %** | 21.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9204KS | 24.90 € | **23.90 €** | 10.4 % | **5.9 %** | 22.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, písková, PL | 23.50 € | **22.50 €** | 12.1 % | **7.3 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, písková, PO | 23.50 € | **22.50 €** | 12.1 % | **7.3 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica VT3500 | 17.50 € | **16.50 €** | 13.2 % | **6.7 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-WH | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-541 Color | 23.50 € | **22.50 €** | 11.9 % | **7.1 %** | 20.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla Sound EB20 sluchátka Blossom Pink | 18.90 € | **17.90 €** | 11.3 % | **5.5 %** | 16.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit MINI PRO Carplay/Androi... | 12.50 € | **11.50 €** | 17.2 % | **7.8 %** | 9.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal XA258010 | 22.50 € | **21.50 €** | 10.5 % | **5.6 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXIR2200E | 19.50 € | **18.50 €** | 12.8 % | **7.1 %** | 17.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (GO-SW-8G) | 22.50 € | **21.50 €** | 11.8 % | **6.8 %** | 20.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovladač AB ALL TV pro AB CryptoBox a PULSe | 14.50 € | **13.50 €** | 14.3 % | **6.5 %** | 12.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rojeco Automatické vodítko pre psov LED 5 m (fialové) | 12.90 € | **11.90 €** | 16.5 % | **7.5 %** | 10.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi PS0401 | 15.50 € | **14.50 €** | 12.5 % | **5.3 %** | 13.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Galaxy ELEGOO (Peacock Blue) | 13.90 € | **12.90 €** | 15.8 % | **7.5 %** | 11.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT 55118 Návlek na mop PROFI | 14.90 € | **13.90 €** | 12.8 % | **5.2 %** | 12.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Návlek na mop Profi SOE55116 | 14.90 € | **13.90 €** | 12.8 % | **5.2 %** | 12.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RVA100 | 21.50 € | **20.50 €** | 11.0 % | **5.8 %** | 19.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální kuchyňská váha EMOS EV016 GP-KS021 | 16.50 € | **15.50 €** | 15.3 % | **8.4 %** | 14.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-TI | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 20.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8025 | 14.50 € | **13.50 €** | 14.3 % | **6.5 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link LiteWave LS105G 5portový gigabit | 14.50 € | **13.50 €** | 13.6 % | **5.7 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Buds 8 Lite Blue | 20.50 € | **19.50 €** | 12.6 % | **7.1 %** | 18.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termohrnec AVANZA 3,5 l, Olive | 16.50 € | **15.50 €** | 13.2 % | **6.3 %** | 14.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RVA200 | 18.50 € | **17.50 €** | 11.7 % | **5.6 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 260 | 14.50 € | **13.50 €** | 14.3 % | **6.5 %** | 12.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZigBee senzor úniku vody/záplavy SONOFF SNZB-05P (+b... | 11.90 € | **10.90 €** | 16.1 % | **6.4 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger & Matz KM1302 | 12.90 € | **11.90 €** | 15.6 % | **6.7 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ONIKUMA CW905 Pink 2.4G Wireless Gaming Mouse | 11.90 € | **10.90 €** | 16.6 % | **6.8 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Redmi Pad 2 9.7 Cover (77599) | 21.90 € | **20.90 €** | 10.8 % | **5.7 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS 8-Port Switch (MS108G) | 14.90 € | **13.90 €** | 12.6 % | **5.0 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténa DVB-T SYNAPS AHD 244, pokojová | 17.50 € | **16.50 €** | 14.1 % | **7.6 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT Penguin MEI 2,7l Lila + 1ks filtru | 17.90 € | **16.90 €** | 12.1 % | **5.9 %** | 15.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax Dots3 Play Black | 23.90 € | **22.90 €** | 10.5 % | **5.9 %** | 21.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558P drátový | 13.50 € | **12.50 €** | 15.8 % | **7.2 %** | 11.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální kuchyňská váha EMOS EV012 PT-836 | 14.50 € | **13.50 €** | 15.7 % | **7.7 %** | 12.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínač WiFi Sonoff Dual R3 | 13.50 € | **12.50 €** | 16.3 % | **7.7 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Opticum Robust Quad LNB 0,1 dB | 14.50 € | **13.50 €** | 14.3 % | **6.5 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica Clear Line Transparent J11-AB | 13.50 € | **12.50 €** | 14.2 % | **5.8 %** | 11.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-70405 | 22.50 € | **21.50 €** | 10.9 % | **6.0 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Habotest HT641B Digitálny laserový pyrometer | 13.50 € | **12.50 €** | 16.3 % | **7.7 %** | 11.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo k modelu GARNI 435 GARNI 120 | 18.50 € | **17.50 €** | 13.8 % | **7.6 %** | 16.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panini grill TEESA TSA3234, toaster, opékač 1000W, 3... | 18.50 € | **17.50 €** | 14.0 % | **7.9 %** | 16.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Rollfix 210 Lon | 17.50 € | **16.50 €** | 11.8 % | **5.4 %** | 16.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS ONIKUMA TX610 (béžové) | 15.50 € | **14.50 €** | 15.5 % | **8.1 %** | 14.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS ONIKUMA TX610 (čierne) | 15.50 € | **14.50 €** | 15.5 % | **8.1 %** | 14.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor úniku plynu Habotest HT60 | 12.50 € | **11.50 €** | 15.0 % | **5.8 %** | 11.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 030H bezdrátové čidlo | 13.90 € | **12.90 €** | 16.4 % | **8.0 %** | 12.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev na 4 lívance ALIVIA 26cm | 20.90 € | **19.90 €** | 10.7 % | **5.4 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínač/merač spotreby WiFi Sonoff POWR320D | 16.50 € | **15.50 €** | 14.1 % | **7.2 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0834 analogové přenosné | 12.90 € | **11.90 €** | 15.1 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  3,3Ah  VIPOW bezúdržbový aku... | 11.50 € | **10.50 €** | 17.0 % | **6.8 %** | 10.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED mini nabíječka 45W FIXC45M-CU-WH | 22.50 € | **21.50 €** | 11.3 % | **6.4 %** | 21.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vianočná reťaz strieborná, 100x mini LED, 10... | 3.30 € | **2.30 €** | 55.1 % | **8.1 %** | 2.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO7324F | 25.90 € | **24.90 €** | 10.7 % | **6.4 %** | 24.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Mms-Mixi-Tj | 19.50 € | **18.50 €** | 11.3 % | **5.5 %** | 18.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Ladysteam | 20.50 € | **19.50 €** | 12.5 % | **7.0 %** | 19.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON fotopapír lesklý 10x15 cm | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Klip mikrofónu Puluz PU3045 3m, 3,5 mm Jack | 14.00 € | **13.00 €** | 13.8 % | **5.7 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo CM303 US herní set | 26.50 € | **25.50 €** | 10.9 % | **6.7 %** | 25.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Globe modrý lesk 150ml SIXTOL | 14.00 € | **13.00 €** | 13.8 % | **5.7 %** | 12.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Globe růžový lesk 150ml SIXTOL | 14.00 € | **13.00 €** | 13.8 % | **5.7 %** | 12.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná   6V / 12Ah  VIPOW bezúdržbový akumu... | 13.50 € | **12.50 €** | 14.8 % | **6.3 %** | 12.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT Penguin MEI 2,7l bílá + láhev | 20.90 € | **19.90 €** | 11.7 % | **6.4 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Konvice filtrační TEESA TSA0101 | 13.50 € | **12.50 €** | 15.8 % | **7.2 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BC50D4V0 | 16.50 € | **15.50 €** | 13.1 % | **6.3 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer TX1800U Nano Adaptér | 20.90 € | **19.90 €** | 10.9 % | **5.6 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo FF1100A | 18.50 € | **17.50 €** | 12.9 % | **6.8 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 162.90 € | **161.90 €** | 15.1 % | **14.4 %** | 161.93 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 13.50 € | **12.50 €** | 56.1 % | **44.6 %** | 12.54 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.90 € | **22.90 €** | 38.4 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.05 € | stávame sa najlacnejší |
| JBL Grip Red | 83.00 € | **82.00 €** | 10.1 % | **8.8 %** | 82.06 € | stávame sa najlacnejší |
| JBL Grip White | 83.00 € | **82.00 €** | 10.1 % | **8.8 %** | 82.06 € | stávame sa najlacnejší |
| ONIKUMA B90 Gaming headset (Blue/Purple) | 17.50 € | **16.50 €** | 14.1 % | **7.6 %** | 16.57 € | stávame sa najlacnejší |
| CP PLUS CP-UNC-DA21PL3-V3-0280 2.0 Mpix venkovní IP ... | 88.00 € | **87.00 €** | 15.0 % | **13.7 %** | 87.08 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.08 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 217.50 € | **216.50 €** | 10.1 % | **9.6 %** | 216.58 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.90 € | **7.90 €** | 43.9 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.50 € | **19.50 €** | 15.2 % | **9.6 %** | 19.59 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.50 €** | 44.6 % | **36.3 %** | 16.59 € | stávame sa najlacnejší |
| Inteligentný WiFi spínač na monitorovanie teploty a ... | 17.00 € | **16.00 €** | 14.7 % | **8.0 %** | 16.10 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **37.90 €** | 10.5 % | **7.6 %** | 38.00 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.90 € | **27.90 €** | 15.7 % | **11.7 %** | 28.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E3S (čierny) | 197.90 € | **196.90 €** | 14.5 % | **13.9 %** | 197.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 258.90 € | **257.90 €** | 13.2 % | **12.8 %** | 258.00 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 423.90 € | **422.90 €** | 13.2 % | **12.9 %** | 423.00 € | stávame sa najlacnejší |
| UREVO FoldiMix 5L Pro elektrický bežecký pás (strieb... | 497.90 € | **496.90 €** | 10.4 % | **10.2 %** | 497.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 55.2 % | **43.7 %** | 12.61 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 18.00 € | **17.00 €** | 52.4 % | **44.0 %** | 17.12 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 11.50 € | **10.50 €** | 56.9 % | **43.2 %** | 10.63 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **14.00 €** | 54.0 % | **43.7 %** | 14.13 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **181.50 €** | 14.9 % | **14.3 %** | 181.63 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **16.00 €** | 15.2 % | **8.4 %** | 16.13 € | stávame sa najlacnejší |
| Sada 6 denných filtrov Freewell Standard pre DJI Flip | 26.50 € | **25.50 €** | 15.0 % | **10.7 %** | 25.63 € | stávame sa najlacnejší |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 46.00 € | **45.00 €** | 14.4 % | **12.0 %** | 45.13 € | stávame sa najlacnejší |
| Solight FM transmitter s bluetooth pripojením do aut... | 16.00 € | **15.00 €** | 43.9 % | **34.9 %** | 15.15 € | stávame sa najlacnejší |
| Smart Hub WiFi/RF 433MHz Sonoff RF BridgeR2 | 13.50 € | **12.50 €** | 14.0 % | **5.5 %** | 12.66 € | stávame sa najlacnejší |
| Carrera Auto GO/GO+ 64120 Ford Mustang 1 | 14.50 € | **13.50 €** | 13.9 % | **6.0 %** | 13.66 € | stávame sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.50 €** | 10.5 % | **5.1 %** | 19.67 € | stávame sa najlacnejší |
| Gril elektrický TEESA TSA3232 | 26.00 € | **25.00 €** | 15.2 % | **10.8 %** | 25.19 € | stávame sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **59.50 €** | 10.6 % | **8.8 %** | 59.69 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.50 € | **11.50 €** | 16.9 % | **7.6 %** | 11.69 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.50 € | **39.50 €** | 10.1 % | **7.4 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 11.2 % | **6.3 %** | 21.70 € | stávame sa najlacnejší |
| Braun HF5050.IBK | 122.50 € | **121.50 €** | 10.4 % | **9.5 %** | 121.70 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **113.50 €** | 10.4 % | **9.4 %** | 113.70 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.50 €** | 14.9 % | **12.1 %** | 39.71 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **28.00 €** | 14.8 % | **10.9 %** | 28.21 € | stávame sa najlacnejší |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 21.50 € | **20.50 €** | 15.9 % | **10.5 %** | 20.71 € | stávame sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.50 €** | 10.9 % | **7.1 %** | 28.72 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **11.50 €** | 47.9 % | **36.1 %** | 11.73 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **41.50 €** | 15.0 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.50 €** | 15.6 % | **9.0 %** | 16.75 € | stávame sa najlacnejší |
| Televes DAT BOSS LR 700 TFORCE LTE700 | 122.50 € | **121.50 €** | 15.0 % | **14.1 %** | 121.75 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **33.50 €** | 14.6 % | **11.3 %** | 33.75 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.27 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Aroma difuzer Bloom červené dřevo 200ml SIXTOL | 14.00 € | **13.00 €** | 13.4 % | **5.3 %** | 13.29 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **23.00 €** | 14.6 % | **9.9 %** | 23.29 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón Puluz PU3151B Lavalier typ C | 13.00 € | **12.00 €** | 14.5 % | **5.7 %** | 12.29 € | stávame sa najlacnejší |
| SONOFF MINI-ZB2GSL-EDvojkanálový nástenný spínač Zig... | 23.50 € | **22.50 €** | 16.0 % | **11.1 %** | 22.79 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0904 10000 mAh Li-pol | 14.50 € | **13.50 €** | 16.3 % | **8.2 %** | 13.79 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.50 €** | 15.0 % | **12.0 %** | 36.79 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.7 % | **6.7 %** | 21.79 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 26.50 € | **25.50 €** | 37.7 % | **32.5 %** | 25.80 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **25.00 €** | 42.7 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.33 € | stávame sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.50 €** | 14.2 % | **5.0 %** | 11.83 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 12.50 € | **11.50 €** | 53.1 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **351.50 €** | 15.1 % | **14.7 %** | 351.88 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 18.50 € | **17.50 €** | 11.8 % | **5.7 %** | 17.88 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 159.00 € | **158.00 €** | 14.8 % | **14.1 %** | 158.39 € | stávame sa najlacnejší |
| Fixed Creator Tripod FIXCRT-BK | 43.50 € | **42.50 €** | 10.5 % | **8.0 %** | 42.89 € | stávame sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 20.90 € | stávame sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.4 % | **5.6 %** | 15.90 € | stávame sa najlacnejší |
| Mascom Monoblok Quad LNB MCM4QS01HD | 46.50 € | **45.50 €** | 15.2 % | **12.7 %** | 45.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **16.50 €** | 44.3 % | **36.1 %** | 16.90 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **15.00 €** | 38.4 % | **29.7 %** | 15.44 € | stávame sa najlacnejší |
| Elektrické čerpadlo Cycplus A12 | 24.00 € | **23.00 €** | 14.3 % | **9.5 %** | 23.47 € | stávame sa najlacnejší |
| Gorenje R619EAW6 | 482.00 € | **481.00 €** | 7.0 % | **6.8 %** | 481.47 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **14.00 €** | 48.7 % | **38.8 %** | 14.50 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **88.00 €** | 15.1 % | **13.8 %** | 88.50 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek, vypínač | 4.60 € | **3.60 €** | 49.0 % | **16.6 %** | 3.68 € | stávame sa najlacnejší |
| JBL TUNE 310 USB-C Blue | 16.90 € | **15.90 €** | 11.8 % | **5.2 %** | 12.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T3U WiFi Adaptér | 16.90 € | **15.90 €** | 12.3 % | **5.6 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.90 € | **88.00 €** | 15.1 % | **13.9 %** | 88.07 € | stávame sa najlacnejší |
| G3ferrari G1019100 Horkovzdušná fritéza | 105.90 € | **105.00 €** | 10.3 % | **9.4 %** | 105.20 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **85.00 €** | 15.1 % | **13.9 %** | 85.22 € | stávame sa najlacnejší |
| Ninja FB131EUGY Frost Vault 28l | 196.90 € | **196.00 €** | 10.1 % | **9.6 %** | 196.23 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **65.00 €** | 10.6 % | **9.1 %** | 65.29 € | stávame sa najlacnejší |
| Avatto SDL-V1-S100 100 mm Strieborná digitálna vložk... | 92.90 € | **92.00 €** | 15.1 % | **14.0 %** | 92.39 € | stávame sa najlacnejší |
| Laica M3M | 15.90 € | **15.00 €** | 12.0 % | **5.7 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič zubů DBX BUSHIDO černo-červený | 10.90 € | **10.00 €** | 14.5 % | **5.0 %** | 4.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Video kabel FIXHU-CHDMI-GR | 15.90 € | **15.00 €** | 11.9 % | **5.6 %** | 11.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP fotopapír lesklý 10x15 cm | 13.90 € | **13.00 €** | 12.6 % | **5.3 %** | 11.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON KP-36IP | 14.90 € | **14.00 €** | 12.1 % | **5.3 %** | 12.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-575 Black | 13.90 € | **13.00 €** | 12.6 % | **5.3 %** | 11.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARM-100021 BÍLO-ZLATÝ CHRÁNIČ ZUBŮ DBX BUSHIDO | 10.90 € | **10.00 €** | 14.5 % | **5.0 %** | 8.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Smeták gumový SUPRA | 15.90 € | **15.00 €** | 11.8 % | **5.5 %** | 14.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal B5561053 | 13.90 € | **13.00 €** | 12.9 % | **5.6 %** | 12.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **15.00 €** | 37.7 % | **29.9 %** | 15.04 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.10 €** | 53.4 % | **39.6 %** | 9.16 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.60 €** | 50.3 % | **37.4 %** | 9.68 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 14.17 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 150 + 100lm,... | 10.90 € | **10.00 €** | 53.6 % | **40.9 %** | 10.20 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.90 € | **10.00 €** | 54.1 % | **41.4 %** | 10.26 € | stávame sa najlacnejší |
| LED lampa Puluz pre fotoaparát 860 lúmenov | 12.90 € | **12.00 €** | 15.4 % | **7.3 %** | 12.49 € | stávame sa najlacnejší |
| Dotykový spínač svetla Avatto TS20-EU-W3 WiFi | 15.90 € | **15.00 €** | 16.4 % | **9.8 %** | 15.50 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 3.30 € | **2.40 €** | 55.1 % | **12.8 %** | 2.44 € | stávame sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 236J, 1 zásuvk... | 4.30 € | **3.40 €** | 59.6 % | **26.2 %** | 3.50 € | stávame sa najlacnejší |
| Evolveo Xany 2A, aktivní pokojová anténa | 19.90 € | **19.00 €** | 10.1 % | **5.2 %** | 15.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Power Mop 3 v 1 52110 | 18.90 € | **18.00 €** | 10.6 % | **5.4 %** | 15.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER BT-D100CLVAL | 18.90 € | **18.00 €** | 10.5 % | **5.3 %** | 15.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4633 Odžmolkovač zelený | 16.90 € | **16.00 €** | 11.3 % | **5.3 %** | 13.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo T100 chytrý detektor pohybu | 18.90 € | **18.00 €** | 10.5 % | **5.3 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NOCTUA NF-A8 PWM | 18.90 € | **18.00 €** | 10.7 % | **5.4 %** | 17.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZHM2550 | 39.90 € | **39.00 €** | 28.9 % | **26.0 %** | 39.03 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **47.00 €** | 38.5 % | **35.9 %** | 47.08 € | stávame sa najlacnejší |
| Ardes BBQ 01 gril | 35.90 € | **35.00 €** | 10.1 % | **7.4 %** | 35.08 € | stávame sa najlacnejší |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 22.90 € | **22.00 €** | 15.1 % | **10.5 %** | 22.08 € | stávame sa najlacnejší |
| Zeblaze Btalk 3 Pro Smartwatch (Gray) | 23.90 € | **23.00 €** | 14.8 % | **10.5 %** | 23.13 € | stávame sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.90 € | **18.00 €** | 15.7 % | **10.2 %** | 18.15 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.90 € | **27.00 €** | 42.8 % | **38.2 %** | 27.18 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.90 € | **19.00 €** | 15.0 % | **9.8 %** | 19.20 € | stávame sa najlacnejší |
| DOMO DO9192MC | 23.90 € | **23.00 €** | 10.0 % | **5.9 %** | 23.24 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.90 € | **20.00 €** | 10.8 % | **6.0 %** | 20.38 € | stávame sa najlacnejší |
| Detektor plynu EMOS GS869 /P56450/ | 36.90 € | **36.00 €** | 15.4 % | **12.6 %** | 36.39 € | stávame sa najlacnejší |
| Salente Icequeen-Wh | 19.90 € | **19.00 €** | 10.2 % | **5.2 %** | 19.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 33.90 € | **33.00 €** | 15.1 % | **12.0 %** | 33.39 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **42.00 €** | 10.9 % | **8.6 %** | 42.41 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **17.00 €** | 16.2 % | **10.4 %** | 17.42 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.90 € | **22.00 €** | 10.5 % | **6.1 %** | 22.42 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 24.90 € | **24.00 €** | 15.5 % | **11.3 %** | 24.46 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **16.00 €** | 38.6 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 21.90 € | **21.00 €** | 10.0 % | **5.5 %** | 21.50 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 354.90 € | **354.00 €** | 6.6 % | **6.3 %** | 354.05 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 328.90 € | **328.00 €** | 8.1 % | **7.8 %** | 328.11 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 5.40 € | **4.60 €** | 55.1 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 5.10 € | **4.30 €** | 55.3 % | **30.9 %** | 4.40 € | stávame sa najlacnejší |
| Solight zásuvka Slim, biela | 3.20 € | **2.50 €** | 38.4 % | **8.1 %** | 2.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **4.00 €** | 45.3 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.50 € | **6.80 €** | 46.2 % | **32.6 %** | 6.81 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 5.50 € | **4.80 €** | 53.1 % | **33.6 %** | 4.82 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 8.20 € | **7.50 €** | 48.8 % | **36.1 %** | 7.54 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **423.90 €** | 15.0 % | **14.9 %** | 424.00 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 488.50 € | **487.90 €** | 10.1 % | **9.9 %** | 488.00 € | stávame sa najlacnejší |
| LEIFHEIT Podlahový mop Classic XL | 18.50 € | **17.90 €** | 10.1 % | **6.5 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA ZR006001 | 17.50 € | **16.90 €** | 10.8 % | **7.0 %** | 11.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED smart tracker Tag FindMy FIXTAG-BK | 19.50 € | **18.90 €** | 10.1 % | **6.7 %** | 15.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed sklo Apple iPh 17PM FIXGA2-1603-BK | 18.50 € | **17.90 €** | 10.4 % | **6.8 %** | 15.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy HIVE Beans White | 20.50 € | **19.90 €** | 10.2 % | **7.0 %** | 18.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EVOLVEO DockCharge pro PS5 | 17.50 € | **16.90 €** | 11.2 % | **7.3 %** | 15.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed nabíječka FIXC20M-CC-WH | 17.50 € | **16.90 €** | 10.1 % | **6.3 %** | 16.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Telegant 30 Protect | 18.50 € | **17.90 €** | 10.1 % | **6.5 %** | 17.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 18.50 € | **17.90 €** | 38.9 % | **34.4 %** | 17.94 € | stávame sa najlacnejší |
| Sati Fortissimo 1 kg zrno | 18.50 € | **17.90 €** | 11.3 % | **7.7 %** | 17.96 € | stávame sa najlacnejší |
| RUSSELL HOBBS 24360-70 Inspire Kettle | 44.50 € | **43.90 €** | 10.2 % | **8.7 %** | 43.99 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 17.50 € | **16.90 €** | 52.0 % | **46.8 %** | 17.00 € | stávame sa najlacnejší |
| GUZZANTIGZ 3601 | 28.50 € | **27.90 €** | 11.7 % | **9.4 %** | 28.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **17.90 €** | 39.0 % | **34.5 %** | 18.00 € | stávame sa najlacnejší |
| Ufesa Ruby Red BS4717 | 40.50 € | **39.90 €** | 11.1 % | **9.4 %** | 40.00 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.90 €** | 11.2 % | **8.7 %** | 26.00 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight rozbočka, 4x 2,5A, biela | 2.10 € | **1.50 €** | 49.8 % | **7.0 %** | 0.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.70 € | **3.10 €** | 56.7 % | **31.3 %** | 3.17 € | stávame sa najlacnejší |
| ALI CN PD 20W, light kab., bílá CHPD0014 | 12.50 € | **11.90 €** | 13.3 % | **7.9 %** | 5.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kingston 128GB DT70 USB-C 3.2 gen. 1 | 15.50 € | **14.90 €** | 10.3 % | **6.1 %** | 9.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E200S | 12.50 € | **11.90 €** | 10.7 % | **5.4 %** | 6.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MG-2-WB CHRÁŇIČ ZUBŮ DBX BUSHIDO | 13.50 € | **12.90 €** | 13.4 % | **8.3 %** | 7.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 653 Tri-colour, 3YM74AE | 15.50 € | **14.90 €** | 11.1 % | **6.8 %** | 9.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera 61616 Křižovatka - GO/GO+/D143 | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 7.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0151 | 11.50 € | **10.90 €** | 14.0 % | **8.1 %** | 6.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung EO-IC100BB os.stereo HF USB-C,BK | 14.50 € | **13.90 €** | 12.4 % | **7.7 %** | 9.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotaška na zadní nosič Trizand 20888 | 11.50 € | **10.90 €** | 14.0 % | **8.1 %** | 7.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT 52017 Náhrada k mopu Twist | 11.50 € | **10.90 €** | 14.3 % | **8.3 %** | 7.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 655 Cyan, CZ110AE | 16.50 € | **15.90 €** | 11.2 % | **7.2 %** | 13.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 655 Black, CZ109AE | 16.50 € | **15.90 €** | 11.2 % | **7.2 %** | 13.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 655 Yellow, CZ112AE | 16.50 € | **15.90 €** | 11.2 % | **7.2 %** | 13.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 903 Magenta, T6L91AE | 15.50 € | **14.90 €** | 11.1 % | **6.8 %** | 12.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed nabíjecí kabel SG Watch FIXDW-780 | 14.50 € | **13.90 €** | 11.6 % | **7.0 %** | 11.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARP-2112 vel. L chrániče nártů DBX BUSHIDO | 13.50 € | **12.90 €** | 13.4 % | **8.3 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARP-2112 vel. S chrániče nártů DBX BUSHIDO | 13.50 € | **12.90 €** | 13.4 % | **8.3 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARP-2112 vel. XL chrániče nártů DBX BUSHIDO | 13.50 € | **12.90 €** | 13.4 % | **8.3 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální závěsná váha EMOS EV020 | 11.50 € | **10.90 €** | 14.4 % | **8.5 %** | 8.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U AC600 WiFi Adaptér | 12.50 € | **11.90 €** | 13.2 % | **7.7 %** | 10.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo L530E | 11.50 € | **10.90 €** | 11.8 % | **6.0 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-220 Wall-Uni | 11.50 € | **10.90 €** | 13.7 % | **7.8 %** | 9.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT 57023 Mop Piccolo microDuo | 16.50 € | **15.90 €** | 10.8 % | **6.7 %** | 14.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK UE300 Gigabit Ethernet Adaptér | 12.50 € | **11.90 €** | 13.0 % | **7.6 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RVA300 | 15.50 € | **14.90 €** | 12.1 % | **7.8 %** | 13.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MW301R WiFi N Router | 12.50 € | **11.90 €** | 12.5 % | **7.1 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed adaptér Garmin FIXDW-GA-BK | 14.50 € | **13.90 €** | 11.4 % | **6.8 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot REBEL VOICE BLUE | 11.50 € | **10.90 €** | 14.0 % | **8.1 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera FIRST 65002 Nintendo - Mario | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 11.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 11.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s vlhkoměrem GARNI 151TH | 11.50 € | **10.90 €** | 13.3 % | **7.4 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amiko dálkový ovladač 8150, 8240, 8320, 8330, 8340, ... | 11.50 € | **10.90 €** | 13.3 % | **7.4 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovladač Amiko CCC - originál | 11.50 € | **10.90 €** | 13.5 % | **7.5 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 bílá | 16.50 € | **15.90 €** | 11.0 % | **6.9 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 černá | 16.50 € | **15.90 €** | 11.0 % | **6.9 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 modrá | 16.50 € | **15.90 €** | 11.0 % | **6.9 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.10 € | **7.50 €** | 47.3 % | **36.4 %** | 7.53 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 10.96 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.10 € | **3.50 €** | 54.3 % | **31.7 %** | 3.57 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.40 €** | 53.7 % | **43.5 %** | 8.49 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.40 €** | 53.7 % | **43.5 %** | 8.49 € | stávame sa najlacnejší |
| Držiak mikrofónu Maono BA20 (čierny) | 14.50 € | **13.90 €** | 15.7 % | **10.9 %** | 13.99 € | stávame sa najlacnejší |
| Baterie olověná   6V /  7Ah  EMOS | 12.50 € | **11.90 €** | 14.7 % | **9.2 %** | 12.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.30 € | **5.70 €** | 48.9 % | **34.7 %** | 5.80 € | stávame sa najlacnejší |
| DOMO DO465FR | 66.50 € | **65.90 €** | 10.6 % | **9.6 %** | 66.00 € | stávame sa najlacnejší |
| BWT VIDA MEI bílá, 2,6l + 3 filtry | 19.00 € | **18.50 €** | 10.6 % | **7.7 %** | 9.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA ZR005901 | 14.00 € | **13.50 €** | 10.4 % | **6.5 %** | 5.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (GO-SW-5G) | 16.00 € | **15.50 €** | 10.1 % | **6.6 %** | 9.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester brzdovej kvapaliny Habotest HT662 | 11.00 € | **10.50 €** | 12.9 % | **7.8 %** | 5.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo HG9022 sluch. s mikrofonem | 16.00 € | **15.50 €** | 10.2 % | **6.8 %** | 11.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN 40W, 2xUSB-C, USB-C, bíl CHPD0024 | 19.00 € | **18.50 €** | 10.6 % | **7.7 %** | 14.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alma 1660 Dongle | 19.00 € | **18.50 €** | 10.2 % | **7.3 %** | 15.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alma 1660 Dongle | 19.00 € | **18.50 €** | 10.2 % | **7.3 %** | 15.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy ORYX M666 Daemon 2 | 17.00 € | **16.50 €** | 10.6 % | **7.3 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune110 white | 11.00 € | **10.50 €** | 10.1 % | **5.1 %** | 7.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  4Ah  VIPOW bezúdržbový akumu... | 11.00 € | **10.50 €** | 12.5 % | **7.4 %** | 7.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0214 | 12.00 € | **11.50 €** | 12.7 % | **8.0 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anemometer UNI-T UT363 | 15.00 € | **14.50 €** | 9.0 % | **5.3 %** | 12.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teleso na bradu motocyklovej prilby + držiak J-Hook ... | 11.00 € | **10.50 €** | 12.9 % | **7.8 %** | 8.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco ESPRESSO BARISTA 1kg | 19.00 € | **18.50 €** | 10.0 % | **7.1 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 029 bezdrátové čidlo | 12.00 € | **11.50 €** | 12.9 % | **8.2 %** | 10.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed sklo Apple iP 17 FIXGFADA-1600-BK | 11.00 € | **10.50 €** | 11.0 % | **5.9 %** | 9.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 3.90 € | **3.40 €** | 22.9 % | **7.1 %** | 2.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT Penguin MEI 2,7l modrá + 1 ks filtru | 17.00 € | **16.50 €** | 10.1 % | **6.9 %** | 15.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná   6V / 12 Ah MHPower MS12-6 | 11.00 € | **10.50 €** | 14.2 % | **9.0 %** | 9.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Odžmolkovávač | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.60 € | **1.10 €** | 58.6 % | **9.1 %** | 0.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FFC022X | 17.00 € | **16.50 €** | 10.3 % | **7.1 %** | 16.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Stripeglass-Rd | 16.00 € | **15.50 €** | 10.6 % | **7.2 %** | 15.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  4,0Ah XTREME bezúdržbový aku... | 11.00 € | **10.50 €** | 13.5 % | **8.3 %** | 10.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Onikuma CW905 White Wireless Gaming Mouse | 12.00 € | **11.50 €** | 13.6 % | **8.8 %** | 11.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Automatické vodítko 3 m Rojeco (oranžové) | 11.00 € | **10.50 €** | 14.7 % | **9.4 %** | 10.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, biely | 6.60 € | **6.10 €** | 47.4 % | **36.2 %** | 6.11 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 10.00 € | **9.50 €** | 43.9 % | **36.7 %** | 9.52 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.90 € | **6.40 €** | 47.2 % | **36.6 %** | 6.42 € | stávame sa najlacnejší |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 102.00 € | **101.50 €** | 14.9 % | **14.3 %** | 101.52 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.00 € | **19.50 €** | 38.4 % | **34.9 %** | 19.54 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.5 % | **9.3 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.8 % | **9.6 %** | 24.04 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 28.50 € | **28.00 €** | 15.9 % | **13.8 %** | 28.04 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 7.30 € | **6.80 €** | 54.6 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Solight LED reflektor PRO so senzorom, 30W, 2760lm, ... | 20.50 € | **20.00 €** | 48.1 % | **44.5 %** | 20.06 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **4.70 €** | 49.4 % | **35.0 %** | 4.76 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.50 € | **14.00 €** | 44.1 % | **39.1 %** | 14.06 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.50 €** | 14.9 % | **13.8 %** | 50.56 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.80 €** | 53.8 % | **43.2 %** | 6.88 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.80 €** | 53.8 % | **43.2 %** | 6.88 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 10.3 % | **8.4 %** | 30.08 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.8 % | **9.9 %** | 19.08 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 12.2 % | **9.8 %** | 23.08 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.00 € | **5.50 €** | 46.9 % | **34.7 %** | 5.58 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.20 € | **4.70 €** | 48.9 % | **34.5 %** | 4.78 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.50 €** | 13.6 % | **10.5 %** | 17.58 € | stávame sa najlacnejší |
| Fixed sluchátka Buds FIXBDS-BK | 21.50 € | **21.00 €** | 10.4 % | **7.8 %** | 21.08 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| OTTOCAST OTTOAIBOX N95C Monitor do auta | 154.50 € | **154.00 €** | 14.9 % | **14.5 %** | 154.09 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.70 €** | 54.5 % | **36.1 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.80 € | **6.30 €** | 54.0 % | **42.7 %** | 6.40 € | stávame sa najlacnejší |
| Russell Hobbs 25630-56 | 94.50 € | **94.00 €** | 10.0 % | **9.4 %** | 94.10 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.20 €** | 49.3 % | **33.4 %** | 4.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.30 € | **4.80 €** | 47.6 % | **33.6 %** | 4.90 € | stávame sa najlacnejší |
| BANQUET Mlýnek na kávu CULINARIA VIII | 10.50 € | **10.00 €** | 14.3 % | **8.8 %** | 10.13 € | stávame sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **17.00 €** | 11.9 % | **8.7 %** | 17.13 € | stávame sa najlacnejší |
| LEIFHEIT 51016 | 50.50 € | **50.00 €** | 10.5 % | **9.4 %** | 50.13 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.63 € | stávame sa najlacnejší |
| MAXXO VM Profi | 99.00 € | **98.50 €** | 10.5 % | **9.9 %** | 98.65 € | stávame sa najlacnejší |
| Solight lokátor na bicykel, Find My kompatibilný | 15.50 € | **15.00 €** | 41.6 % | **37.0 %** | 15.16 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 10.50 € | **10.00 €** | 43.7 % | **36.9 %** | 10.17 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.50 €** | 13.7 % | **10.2 %** | 15.67 € | stávame sa najlacnejší |
| Sonoff ZBMINIL2 inteligentný mini spínač ZigBee | 12.00 € | **11.50 €** | 12.7 % | **8.0 %** | 11.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **27.50 €** | 14.2 % | **12.2 %** | 27.69 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **13.50 €** | 38.3 % | **33.4 %** | 13.70 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **11.00 €** | 38.5 % | **32.5 %** | 11.20 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 151.50 € | **151.00 €** | 5.9 % | **5.5 %** | 151.20 € | stávame sa najlacnejší |
| Zvuková karta Maono G1 Neo (biela) | 45.00 € | **44.50 €** | 15.1 % | **13.8 %** | 44.70 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 12.3 % | **9.9 %** | 23.21 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.50 €** | 14.6 % | **11.9 %** | 20.71 € | stávame sa najlacnejší |
| LONGER RAY5 mini 2,5 W laserový gravírovací stroj | 93.00 € | **92.50 €** | 14.9 % | **14.3 %** | 92.72 € | stávame sa najlacnejší |
| Grafický tablet Huion H1161 | 74.00 € | **73.50 €** | 14.8 % | **14.0 %** | 73.74 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 16.50 € | **16.00 €** | 24.0 % | **20.2 %** | 16.25 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.5 % | **9.9 %** | 33.25 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **14.00 €** | 16.5 % | **12.5 %** | 14.25 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **19.00 €** | 14.1 % | **11.2 %** | 19.25 € | stávame sa najlacnejší |
| Xiaomi 22.5W Power Bank 20000mAh Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 93.50 € | **93.00 €** | 16.9 % | **16.3 %** | 93.25 € | stávame sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 93.50 € | **93.00 €** | 16.9 % | **16.3 %** | 93.25 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **18.00 €** | 10.4 % | **7.4 %** | 18.25 € | stávame sa najlacnejší |
| Fixed sklo Apple iPhon 17 FIXGA2-1600-BK | 18.50 € | **18.00 €** | 10.4 % | **7.4 %** | 18.25 € | stávame sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **12.00 €** | 10.3 % | **5.9 %** | 12.25 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 12.00 € | **11.50 €** | 10.3 % | **5.7 %** | 11.75 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **13.00 €** | 28.1 % | **23.3 %** | 13.26 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **30.00 €** | 39.2 % | **36.9 %** | 30.27 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.50 € | **12.00 €** | 22.4 % | **17.5 %** | 12.27 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 12.50 € | **12.00 €** | 27.0 % | **22.0 %** | 12.27 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 12.1 % | **7.2 %** | 11.28 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **17.00 €** | 16.6 % | **13.3 %** | 17.29 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.7 % | **8.3 %** | 16.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 14.2 % | **10.0 %** | 13.29 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 10.2 % | **8.5 %** | 33.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 10.2 % | **7.9 %** | 23.29 € | stávame sa najlacnejší |
| Dvojitý ramenný popruh Puluz pre fotoaparáty PU6002 | 12.00 € | **11.50 €** | 14.1 % | **9.4 %** | 11.79 € | stávame sa najlacnejší |
| G21 Pěchovadlo pro nádoby 0,9 l | 12.50 € | **12.00 €** | 14.4 % | **9.9 %** | 12.30 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.00 €** | 10.2 % | **9.7 %** | 110.30 € | stávame sa najlacnejší |
| DOMO DO9252I | 252.50 € | **252.00 €** | 8.1 % | **7.9 %** | 252.30 € | stávame sa najlacnejší |
| 3D Tlačiareň Creality CR-10 SE | 178.50 € | **178.00 €** | 8.4 % | **8.1 %** | 178.30 € | stávame sa najlacnejší |
| Sieťová nabíjačka Blitzwolf BW-i100 5v1 120W | 45.50 € | **45.00 €** | 15.6 % | **14.3 %** | 45.31 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.50 € | **24.00 €** | 26.5 % | **23.9 %** | 24.31 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.00 €** | 40.4 % | **34.3 %** | 11.32 € | stávame sa najlacnejší |
| Salente Smartdust | 132.50 € | **132.00 €** | 5.5 % | **5.1 %** | 132.32 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky C10 (biele) | 13.50 € | **13.00 €** | 16.4 % | **12.1 %** | 13.32 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **15.00 €** | 39.9 % | **35.4 %** | 15.33 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **15.00 €** | 16.8 % | **13.0 %** | 15.33 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 32.00 € | **31.50 €** | 10.1 % | **8.3 %** | 31.83 € | stávame sa najlacnejší |
| Domo DO234S | 85.50 € | **85.00 €** | 5.9 % | **5.3 %** | 85.33 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 10.50 € | **10.00 €** | 47.4 % | **40.4 %** | 10.33 € | stávame sa najlacnejší |
| Creality Ender-3 V3 Plus 3D Printer | 348.50 € | **348.00 €** | 11.1 % | **11.0 %** | 348.34 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 52.00 € | **51.50 €** | 14.6 % | **13.5 %** | 51.84 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.50 € | **12.00 €** | 27.0 % | **22.0 %** | 12.35 € | stávame sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **16.00 €** | 16.2 % | **12.7 %** | 16.35 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.50 € | **38.00 €** | 39.5 % | **37.7 %** | 38.35 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.50 € | **26.00 €** | 37.0 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Stolný ramenný stojan Puluz s 26cm LED Vlogging Ring... | 35.50 € | **35.00 €** | 39.0 % | **37.0 %** | 35.36 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 11.0 % | **7.7 %** | 16.38 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **99.00 €** | 10.5 % | **9.9 %** | 99.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.7 % | **8.3 %** | 22.38 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 10.1 % | **8.2 %** | 29.38 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, vypínač,... | 10.50 € | **10.00 €** | 29.7 % | **23.6 %** | 10.38 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 209.50 € | **209.00 €** | 16.3 % | **16.1 %** | 209.38 € | stávame sa najlacnejší |
| UNI-T UT343D tester hrúbky farby | 88.50 € | **88.00 €** | 6.8 % | **6.2 %** | 88.39 € | stávame sa najlacnejší |
| Tester autobatérií UNI-T UT673A | 35.50 € | **35.00 €** | 12.8 % | **11.2 %** | 35.39 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 25.00 € | **24.50 €** | 22.8 % | **20.4 %** | 24.89 € | stávame sa najlacnejší |
| MAXXO VC 1800 | 24.50 € | **24.00 €** | 9.1 % | **6.9 %** | 24.39 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.00 € | **11.50 €** | 37.0 % | **31.3 %** | 11.89 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.50 € | **10.00 €** | 22.7 % | **16.8 %** | 10.39 € | stávame sa najlacnejší |
| Leifheit 81520 Pegasus 200 Solid | 37.50 € | **37.00 €** | 12.7 % | **11.2 %** | 37.39 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.50 € | **48.00 €** | 10.9 % | **9.7 %** | 48.39 € | stávame sa najlacnejší |
| Solight LED vianočné záves, hviezdy, šírka 1,8m, 77L... | 11.50 € | **11.00 €** | 33.0 % | **27.2 %** | 11.39 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.50 € | **11.00 €** | 35.9 % | **30.0 %** | 11.39 € | stávame sa najlacnejší |
| DOMO DO42325PC | 101.50 € | **101.00 €** | 8.5 % | **8.0 %** | 101.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 28.00 € | **27.50 €** | 13.3 % | **11.2 %** | 27.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161D | 69.00 € | **68.50 €** | 12.2 % | **11.4 %** | 68.89 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 48.00 € | **47.50 €** | 14.1 % | **13.0 %** | 47.89 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.00 € | **209.50 €** | 14.8 % | **14.6 %** | 209.89 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 27.50 € | **27.00 €** | 12.9 % | **10.9 %** | 27.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 60.50 € | **60.00 €** | 14.8 % | **13.8 %** | 60.39 € | stávame sa najlacnejší |
| Tester SMD UNI-T UT116C | 18.00 € | **17.50 €** | 8.4 % | **5.4 %** | 17.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot C1 Pro | 417.50 € | **417.00 €** | 5.5 % | **5.4 %** | 417.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 474.50 € | **474.00 €** | 9.6 % | **9.5 %** | 474.39 € | stávame sa najlacnejší |
| Inteligentný termostatický radiátorový ventil Avatto... | 25.00 € | **24.50 €** | 12.8 % | **10.5 %** | 24.89 € | stávame sa najlacnejší |
| Inteligentný termostatický radiátorový ventil Avatto... | 38.50 € | **38.00 €** | 15.6 % | **14.1 %** | 38.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 98.50 € | **98.00 €** | 14.2 % | **13.6 %** | 98.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM100A | 33.50 € | **33.00 €** | 12.7 % | **11.0 %** | 33.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 27.50 € | **27.00 €** | 12.5 % | **10.4 %** | 27.39 € | stávame sa najlacnejší |
| Laserový diaľkomer UNI-T LM70A | 26.50 € | **26.00 €** | 13.8 % | **11.7 %** | 26.39 € | stávame sa najlacnejší |
| Merač vzdialenosti UNI-T LM120A | 44.00 € | **43.50 €** | 10.5 % | **9.3 %** | 43.89 € | stávame sa najlacnejší |
| Anemometer UNI-T UT363S | 30.00 € | **29.50 €** | 13.6 % | **11.7 %** | 29.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 68.00 € | **67.50 €** | 14.5 % | **13.6 %** | 67.89 € | stávame sa najlacnejší |
| Merač vlhkosti dreva UNI-T UT377A | 18.50 € | **18.00 €** | 8.0 % | **5.1 %** | 18.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI- T UT333 | 18.00 € | **17.50 €** | 12.5 % | **9.4 %** | 17.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 224.00 € | **223.50 €** | 14.7 % | **14.5 %** | 223.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 337.50 € | **337.00 €** | 14.9 % | **14.8 %** | 337.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT VOLT GREEN BOOST PRO 5000 SIN... | 349.00 € | **348.50 €** | 14.9 % | **14.7 %** | 348.89 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 78.50 € | **78.00 €** | 12.3 % | **11.6 %** | 78.39 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 77.00 € | **76.50 €** | 14.6 % | **13.9 %** | 76.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387S | 92.50 € | **92.00 €** | 14.7 % | **14.1 %** | 92.39 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 59.00 € | **58.50 €** | 13.2 % | **12.2 %** | 58.89 € | stávame sa najlacnejší |
| CrockPot CSC062X | 156.50 € | **156.00 €** | 6.5 % | **6.1 %** | 156.39 € | stávame sa najlacnejší |
| Salente Friteoiicz | 53.50 € | **53.00 €** | 8.0 % | **7.0 %** | 53.39 € | stávame sa najlacnejší |
| Tefal RK812110 | 108.00 € | **107.50 €** | 8.7 % | **8.2 %** | 107.89 € | stávame sa najlacnejší |
| Tefal NE553838 | 129.00 € | **128.50 €** | 6.5 % | **6.1 %** | 128.89 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 78.50 € | **78.00 €** | 14.7 % | **13.9 %** | 78.39 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 98.50 € | **98.00 €** | 6.6 % | **6.1 %** | 98.39 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-beige(beige) | 106.50 € | **106.00 €** | 14.3 % | **13.7 %** | 106.39 € | stávame sa najlacnejší |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 115.00 € | **114.50 €** | 10.0 % | **9.5 %** | 114.89 € | stávame sa najlacnejší |
| Kávovar na kapsule 3 v 1 HiBREW H1A 1450W | 88.50 € | **88.00 €** | 14.3 % | **13.7 %** | 88.39 € | stávame sa najlacnejší |
| Mixér TEESA TSA3535 Smoothie Blender | 26.50 € | **26.00 €** | 15.9 % | **13.7 %** | 26.39 € | stávame sa najlacnejší |
| Sekáček potravin TEESA TSA3227 | 21.50 € | **21.00 €** | 8.4 % | **5.9 %** | 21.39 € | stávame sa najlacnejší |
| TEESA TSA3507 ruční mixér 1200W sada | 35.50 € | **35.00 €** | 11.1 % | **9.6 %** | 35.39 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 58.00 € | **57.50 €** | 9.4 % | **8.4 %** | 57.89 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 287.50 € | **287.00 €** | 14.9 % | **14.7 %** | 287.39 € | stávame sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (bla | 455.50 € | **455.00 €** | 10.0 % | **9.9 %** | 455.39 € | stávame sa najlacnejší |
| Roborock Qrevo C Pro Black | 610.00 € | **609.50 €** | 5.9 % | **5.8 %** | 609.89 € | stávame sa najlacnejší |
| Automat na horkou vodu NEDIS KAWD310FBK / 2.7 l / di... | 108.00 € | **107.50 €** | 6.4 % | **5.9 %** | 107.89 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 25.50 € | **25.00 €** | 12.7 % | **10.5 %** | 25.39 € | stávame sa najlacnejší |
| DOMO DO42602S | 39.00 € | **38.50 €** | 7.2 % | **5.8 %** | 38.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 26.00 € | **25.50 €** | 11.2 % | **9.1 %** | 25.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 23.50 € | **23.00 €** | 11.4 % | **9.0 %** | 23.39 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.50 € | **16.00 €** | 9.5 % | **6.2 %** | 16.39 € | stávame sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.89 € | stávame sa najlacnejší |
| DOMO DO42102SV | 97.00 € | **96.50 €** | 7.4 % | **6.8 %** | 96.89 € | stávame sa najlacnejší |
| Rowenta RO7457EA | 190.50 € | **190.00 €** | 8.1 % | **7.8 %** | 190.39 € | stávame sa najlacnejší |
| Tepovač GETI GW07 | 82.50 € | **82.00 €** | 5.9 % | **5.2 %** | 82.39 € | stávame sa najlacnejší |
| Vysavač ruční TEESA TSA5017 | 55.50 € | **55.00 €** | 10.4 % | **9.4 %** | 55.39 € | stávame sa najlacnejší |
| DOMO DO9232I | 356.50 € | **356.00 €** | 6.8 % | **6.6 %** | 356.39 € | stávame sa najlacnejší |
| PRIMO PR406IM | 128.00 € | **127.50 €** | 9.8 % | **9.3 %** | 127.89 € | stávame sa najlacnejší |
| Domo DO331L | 106.00 € | **105.50 €** | 9.5 % | **9.0 %** | 105.89 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 278.50 € | **278.00 €** | 8.7 % | **8.5 %** | 278.39 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.00 € | **22.50 €** | 10.3 % | **7.9 %** | 22.89 € | stávame sa najlacnejší |
| Kamera IP venkovní Kruger&Matz Connect C80 Tuya Wi-Fi | 33.50 € | **33.00 €** | 15.8 % | **14.1 %** | 33.39 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 209.50 € | **209.00 €** | 12.8 % | **12.5 %** | 209.39 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.50 € | **26.00 €** | 11.4 % | **9.3 %** | 26.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 58.50 € | **58.00 €** | 12.6 % | **11.6 %** | 58.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 113.00 € | **112.50 €** | 8.7 % | **8.2 %** | 112.89 € | stávame sa najlacnejší |
| Meteostanice TESLA Device MS360se - chytrá WiFi s ex... | 61.00 € | **60.50 €** | 14.6 % | **13.6 %** | 60.89 € | stávame sa najlacnejší |
| Meteorologická stanice WS 6462 | 49.00 € | **48.50 €** | 8.5 % | **7.4 %** | 48.89 € | stávame sa najlacnejší |
| ALI AN 3,4A,2xUSB,Lightning,čern CHS0007 | 11.50 € | **11.00 €** | 10.8 % | **6.0 %** | 11.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 17.50 € | **17.00 €** | 18.8 % | **15.4 %** | 17.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 19.00 € | **18.50 €** | 45.0 % | **41.2 %** | 18.89 € | stávame sa najlacnejší |
| NEDIS ZBRC10WT chytré dálkové ovládání ZigBee | 15.50 € | **15.00 €** | 13.2 % | **9.6 %** | 15.39 € | stávame sa najlacnejší |
| Sonoff MINIR4M Matter smart WiFi mini switch (HomeKi... | 11.00 € | **10.50 €** | 12.1 % | **7.0 %** | 10.89 € | stávame sa najlacnejší |
| Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVI... | 10.50 € | **10.00 €** | 14.0 % | **8.5 %** | 10.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 13.00 € | **12.50 €** | 24.9 % | **20.1 %** | 12.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 37.50 € | **37.00 €** | 10.4 % | **8.9 %** | 37.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 11.00 € | **10.50 €** | 23.7 % | **18.1 %** | 10.89 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 65.00 € | **64.50 €** | 8.1 % | **7.2 %** | 64.89 € | stávame sa najlacnejší |
| Rádio outdoorové NEDIS RDDB3100GN | 99.50 € | **99.00 €** | 5.9 % | **5.3 %** | 99.39 € | stávame sa najlacnejší |
| Kaon MZ-104, 4K satelitní přijímač | 116.50 € | **116.00 €** | 7.4 % | **7.0 %** | 116.39 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 90.50 € | **90.00 €** | 14.4 % | **13.8 %** | 90.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1000 URZ3406-LFP4 700W 12V | 121.00 € | **120.50 €** | 10.5 % | **10.0 %** | 120.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 80.50 € | **80.00 €** | 9.1 % | **8.4 %** | 80.39 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 38.50 € | **38.00 €** | 15.3 % | **13.8 %** | 38.39 € | stávame sa najlacnejší |
| Alcad AI - 133 linkový zesilovač se 2 výstupy / G=24dB | 20.00 € | **19.50 €** | 12.7 % | **9.9 %** | 19.89 € | stávame sa najlacnejší |
| Alcad AM - 187 zesilovač / UHF-BIII-DAB-FM / LTE700 | 25.50 € | **25.00 €** | 11.8 % | **9.6 %** | 25.39 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 27.50 € | **27.00 €** | 15.4 % | **13.3 %** | 27.39 € | stávame sa najlacnejší |
| Alcad CA-210 | 25.50 € | **25.00 €** | 8.8 % | **6.7 %** | 25.39 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 195.00 € | **194.50 €** | 10.1 % | **9.8 %** | 194.89 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 166.50 € | **166.00 €** | 6.5 % | **6.2 %** | 166.39 € | stávame sa najlacnejší |
| Autochladnička Euhomy CF003, 35 l | 226.50 € | **226.00 €** | 13.3 % | **13.1 %** | 226.39 € | stávame sa najlacnejší |
| Chladící box TEESA TSA5007 25L DC12/24V AC 230V -22°C | 167.50 € | **167.00 €** | 9.8 % | **9.5 %** | 167.39 € | stávame sa najlacnejší |
| Chladící box TEESA TSA5008 13L DC12/24V AC 230V -22°C | 134.00 € | **133.50 €** | 14.5 % | **14.1 %** | 133.89 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6004 40l, 12V/24V/230V/baterie... | 257.50 € | **257.00 €** | 13.9 % | **13.7 %** | 257.39 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6005 50l, 12V/24V/230V/baterie... | 253.50 € | **253.00 €** | 14.7 % | **14.5 %** | 253.39 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 89.50 € | **89.00 €** | 14.2 % | **13.5 %** | 89.39 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.00 € | **124.50 €** | 14.7 % | **14.2 %** | 124.89 € | stávame sa najlacnejší |
| Niceboy PILOT S10 Rear Cam | 24.50 € | **24.00 €** | 10.8 % | **8.6 %** | 24.40 € | stávame sa najlacnejší |
| Bezkontaktný laserový teplomer Habotest HT650A | 20.00 € | **19.50 €** | 14.8 % | **11.9 %** | 19.90 € | stávame sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.00 € | **19.50 €** | 10.1 % | **7.3 %** | 19.90 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 13.00 € | **12.50 €** | 14.5 % | **10.1 %** | 12.90 € | stávame sa najlacnejší |
| Inteligentný WiFi prepínač Meross MSS715MA-UN (Matter) | 12.00 € | **11.50 €** | 13.0 % | **8.3 %** | 11.90 € | stávame sa najlacnejší |
| Fixed Pods Pro s ANC FIXPDS-P-BK | 39.50 € | **39.00 €** | 11.3 % | **9.9 %** | 39.40 € | stávame sa najlacnejší |
| Xiaomi Redmi Buds 8 Active Blue | 16.50 € | **16.00 €** | 8.9 % | **5.6 %** | 16.40 € | stávame sa najlacnejší |
| Xiaomi Redmi Buds 8 Active White | 16.50 € | **16.00 €** | 8.9 % | **5.6 %** | 16.40 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer černý | 125.50 € | **125.00 €** | 7.0 % | **6.6 %** | 125.40 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer hnědý | 125.50 € | **125.00 €** | 7.0 % | **6.6 %** | 125.40 € | stávame sa najlacnejší |
| Niimbot K3 Commercial Cream | 65.00 € | **64.50 €** | 14.8 % | **13.9 %** | 64.90 € | stávame sa najlacnejší |
| Indesit BTW S50400 EU/N | 262.50 € | **262.00 €** | 8.1 % | **7.9 %** | 262.40 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 337.50 € | **337.00 €** | 7.1 % | **6.9 %** | 337.40 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **15.00 €** | 45.9 % | **41.1 %** | 15.41 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **12.00 €** | 46.0 % | **40.2 %** | 12.41 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 28.50 € | **28.00 €** | 38.6 % | **36.1 %** | 28.41 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 60.50 € | **60.00 €** | 37.2 % | **36.0 %** | 60.41 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 17.50 € | **17.00 €** | 14.0 % | **10.7 %** | 17.42 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.50 € | **63.00 €** | 15.0 % | **14.1 %** | 63.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.42 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **10.00 €** | 13.4 % | **8.0 %** | 10.42 € | stávame sa najlacnejší |
| Držiak na telefón so statívom PULUZ PU3222H Sivý | 21.50 € | **21.00 €** | 15.9 % | **13.2 %** | 21.42 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **21.00 €** | 15.1 % | **12.4 %** | 21.42 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CCPA Apple Carplay/Andr... | 37.50 € | **37.00 €** | 15.4 % | **13.9 %** | 37.44 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 38.4 % | **35.1 %** | 20.45 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 30.50 € | **30.00 €** | 38.4 % | **36.1 %** | 30.45 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 10.2 % | **8.7 %** | 36.46 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2+ 12ks + dárek A5 | 46.50 € | **46.00 €** | 10.2 % | **9.0 %** | 46.46 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.50 € | **48.00 €** | 14.8 % | **13.6 %** | 48.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.46 € | stávame sa najlacnejší |
| Strong LEAP-S3 V2 Google TV box | 64.50 € | **64.00 €** | 11.4 % | **10.6 %** | 64.46 € | stávame sa najlacnejší |
| Roadstar TRA-1230/BK Kapesní FM rádio | 15.50 € | **15.00 €** | 12.5 % | **8.9 %** | 15.46 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.50 € | **31.00 €** | 20.7 % | **18.8 %** | 31.48 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.50 € | **14.00 €** | 33.7 % | **29.0 %** | 14.48 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.48 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **13.00 €** | 14.0 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Leifheit Sušák Classic 100 Easy | 20.50 € | **20.00 €** | 11.9 % | **9.1 %** | 20.49 € | stávame sa najlacnejší |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.50 € | **21.00 €** | 38.2 % | **35.0 %** | 21.49 € | stávame sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **12.00 €** | 12.9 % | **8.4 %** | 12.49 € | stávame sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 51.50 € | **51.00 €** | 14.0 % | **12.9 %** | 51.49 € | stávame sa najlacnejší |
| Salente G4 robotický vysavač | 116.50 € | **116.00 €** | 8.6 % | **8.2 %** | 116.49 € | stávame sa najlacnejší |
| Salente Rtx-G4 | 116.50 € | **116.00 €** | 8.6 % | **8.2 %** | 116.49 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.50 € | **23.00 €** | 8.7 % | **6.4 %** | 23.49 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.50 € | **23.00 €** | 8.7 % | **6.4 %** | 23.49 € | stávame sa najlacnejší |
| HP 650 Tri-colour, CZ102AE | 14.99 € | **14.50 €** | 10.9 % | **7.3 %** | 12.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 006490000 | 13.99 € | **13.50 €** | 10.3 % | **6.5 %** | 12.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO8719W | 69.90 € | **69.50 €** | 10.2 % | **9.5 %** | 69.67 € | stávame sa najlacnejší |
| SALENTE SuChef | 82.90 € | **82.50 €** | 8.3 % | **7.7 %** | 82.70 € | stávame sa najlacnejší |
| CANDY CBT6130/3X | 64.90 € | **64.50 €** | 6.7 % | **6.1 %** | 64.71 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 89.90 € | **89.50 €** | 15.1 % | **14.6 %** | 89.79 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.50 €** | 9.7 % | **9.2 %** | 84.80 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.90 € | **88.50 €** | 6.2 % | **5.7 %** | 88.81 € | stávame sa najlacnejší |
| Lavazza Qualita ROSSA 500 g | 12.90 € | **12.50 €** | 12.0 % | **8.5 %** | 9.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Nano WiFi Adaptér | 10.90 € | **10.50 €** | 11.8 % | **7.6 %** | 7.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák Iconiq XXL FIXICQ-XXL-BK | 15.90 € | **15.50 €** | 10.3 % | **7.5 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro V. X80 Lite FIXOP3-1025-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 9.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| XIAOMI Mi WiFi Range Extender N300 | 12.90 € | **12.50 €** | 11.9 % | **8.5 %** | 10.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic RP-TCM55E-K, Black | 10.90 € | **10.50 €** | 11.0 % | **7.0 %** | 8.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro XiaomiRN14s FIXOP3-1543-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 9.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP GT53XL Black, 1VV21AE | 11.90 € | **11.50 €** | 13.0 % | **9.2 %** | 9.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED Mini 30W FIXCG30M-C-WH | 12.90 € | **12.50 €** | 11.6 % | **8.1 %** | 10.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Plus WiFi Adaptér | 14.90 € | **14.50 €** | 11.4 % | **8.5 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Power Bank 10000mAh 22.5W Lite GL | 12.90 € | **12.50 €** | 10.7 % | **7.3 %** | 10.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-SF1008D 8-port Desktop Switch | 11.90 € | **11.50 €** | 11.8 % | **8.1 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Autonab USB-C/A 30W,FIXCC30M-CU-BK | 12.90 € | **12.50 €** | 11.8 % | **8.3 %** | 11.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák MT na kolo FIXBIP-BK | 15.90 € | **15.50 €** | 10.0 % | **7.2 %** | 14.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Diamondcook | 15.90 € | **15.50 €** | 11.2 % | **8.4 %** | 14.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MW300RE Extender | 14.90 € | **14.50 €** | 11.6 % | **8.7 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Status STA 176210 | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 9.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Status STA 176201 | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Razer Pro Glide | 13.90 € | **13.50 €** | 11.2 % | **8.0 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio FX-220PLUS 2E | 12.90 € | **12.50 €** | 10.6 % | **7.2 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO7276S-SET2 | 10.90 € | **10.50 €** | 10.2 % | **6.2 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro Apple iP 17 FIXOP3-1600-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro MMG06/Power FIXOP3-1654-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Brésil Seleçao Alfenas 500 g zrno | 10.90 € | **10.50 €** | 13.5 % | **9.3 %** | 10.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro Xiaomi 15T FIXOP3-1577-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Heure Exquise 500 g zrno | 10.90 € | **10.50 €** | 12.9 % | **8.8 %** | 10.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.60 €** | 50.8 % | **44.8 %** | 9.61 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.80 €** | 49.4 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.40 € | **5.00 €** | 46.8 % | **36.0 %** | 5.03 € | stávame sa najlacnejší |
| Fixed pouzdro Honor X8 5G FIXTOP-1009-BK | 12.90 € | **12.50 €** | 11.6 % | **8.1 %** | 12.53 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.50 € | **9.10 €** | 44.1 % | **38.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.90 € | **4.50 €** | 55.6 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 4.20 € | **3.80 €** | 48.5 % | **34.3 %** | 3.87 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.70 € | **5.30 €** | 53.4 % | **42.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.70 € | **5.30 €** | 54.0 % | **43.2 %** | 5.39 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **8.40 €** | 38.4 % | **32.1 %** | 8.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.50 €** | 40.4 % | **35.3 %** | 10.60 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 14.2 % | **10.4 %** | 11.71 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.50 €** | 40.4 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 13.3 % | **9.5 %** | 11.79 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 47.0 % | **42.1 %** | 11.84 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.50 €** | 19.3 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **10.50 €** | 45.5 % | **40.2 %** | 10.86 € | stávame sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 10.2 % | **7.3 %** | 14.88 € | stávame sa najlacnejší |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 14.90 € | **14.50 €** | 15.7 % | **12.6 %** | 14.88 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 2.20 € | **1.80 €** | 56.9 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.90 €** | 57.1 % | **29.8 %** | 1.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.80 € | **3.40 €** | 48.5 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.30 € | **3.90 €** | 46.9 % | **33.2 %** | 4.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.10 € | **4.70 €** | 48.1 % | **36.5 %** | 4.71 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 5.30 € | **4.90 €** | 55.6 % | **43.8 %** | 4.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.10 € | **4.70 €** | 47.0 % | **35.5 %** | 4.74 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.20 €** | 48.4 % | **35.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 5.10 € | **4.70 €** | 54.1 % | **42.0 %** | 4.80 € | stávame sa najlacnejší |
| Red Fighter H3 herní sluchátka s mikrofo | 17.90 € | **17.50 €** | 10.4 % | **7.9 %** | 12.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-510BK Black | 16.90 € | **16.50 €** | 10.3 % | **7.7 %** | 14.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CLI-571 XL BK Black | 16.90 € | **16.50 €** | 10.3 % | **7.7 %** | 14.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CLI-571 XL M Magenta | 16.90 € | **16.50 €** | 10.3 % | **7.7 %** | 14.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT Penguin MEI 2,7l růžová + 1ks filtru | 17.90 € | **17.50 €** | 10.1 % | **7.6 %** | 15.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/05 | 29.90 € | **29.50 €** | 11.5 % | **10.0 %** | 29.54 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.50 €** | 15.8 % | **13.8 %** | 22.54 € | stávame sa najlacnejší |
| Beper BEP-P101FRI100 | 29.90 € | **29.50 €** | 11.4 % | **9.9 %** | 29.58 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 11.1 % | **9.9 %** | 35.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.63 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.50 €** | 10.3 % | **9.5 %** | 58.67 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.50 €** | 20.3 % | **18.7 %** | 29.69 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.50 €** | 35.5 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 16.90 € | **16.50 €** | 40.5 % | **37.2 %** | 16.70 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 bez ventilátorov (č... | 19.90 € | **19.50 €** | 16.1 % | **13.7 %** | 19.71 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.50 €** | 15.1 % | **14.4 %** | 63.71 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **25.50 €** | 39.1 % | **36.9 %** | 25.73 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.90 € | **41.50 €** | 34.9 % | **33.6 %** | 41.73 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, čierna | 30.90 € | **30.50 €** | 38.9 % | **37.1 %** | 30.75 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 30.90 € | **30.50 €** | 10.1 % | **8.7 %** | 30.75 € | stávame sa najlacnejší |
| Smartwatch Zeblaze Btalk 3 Plus (orchid) | 19.90 € | **19.50 €** | 15.8 % | **13.5 %** | 19.75 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Q15 | 16.90 € | **16.50 €** | 15.0 % | **12.3 %** | 16.75 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.90 € | **18.50 €** | 34.4 % | **31.6 %** | 18.76 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.90 € | **31.50 €** | 38.7 % | **37.0 %** | 31.77 € | stávame sa najlacnejší |
| LENOVO adaptér TAB 68W AC USB ZG38C05739 | 17.90 € | **17.50 €** | 13.5 % | **11.0 %** | 17.77 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.50 €** | 39.1 % | **35.8 %** | 16.79 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **46.50 €** | 15.3 % | **14.3 %** | 46.79 € | stávame sa najlacnejší |
| Laserový diaľkomer UNI-T LM50A | 20.90 € | **20.50 €** | 10.9 % | **8.8 %** | 20.79 € | stávame sa najlacnejší |
| Solární regulátor PWM Geti GSR020 | 17.90 € | **17.50 €** | 15.1 % | **12.6 %** | 17.79 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8079 DIGITAL AIR FRYER... | 53.90 € | **53.50 €** | 7.4 % | **6.6 %** | 53.79 € | stávame sa najlacnejší |
| Rowenta ZR177003 | 20.90 € | **20.50 €** | 12.0 % | **9.9 %** | 20.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.9 % | **9.8 %** | 40.79 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.90 € | **19.50 €** | 15.2 % | **12.9 %** | 19.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Baseus Bowie D05 Bluetooth 5.2 ... | 36.90 € | **36.50 €** | 50.0 % | **48.4 %** | 36.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.50 €** | 39.6 % | **36.8 %** | 19.80 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.90 € | **55.50 €** | 36.4 % | **35.5 %** | 55.81 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 21.90 € | **21.50 €** | 24.6 % | **22.3 %** | 21.83 € | stávame sa najlacnejší |
| Bezkontaktný laserový teplomer Habotest HT650B | 17.90 € | **17.50 €** | 15.2 % | **12.6 %** | 17.83 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 16.90 € | **16.50 €** | 32.9 % | **29.7 %** | 16.83 € | stávame sa najlacnejší |
| ETA 321990020 | 55.90 € | **55.50 €** | 10.2 % | **9.4 %** | 55.83 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.50 €** | 14.9 % | **13.4 %** | 29.84 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.90 € | **45.50 €** | 41.6 % | **40.3 %** | 45.85 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.90 € | **54.50 €** | 38.3 % | **37.3 %** | 54.86 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.50 €** | 10.7 % | **9.4 %** | 32.88 € | stávame sa najlacnejší |
| Braun MQ10.202M | 31.90 € | **31.50 €** | 10.2 % | **8.8 %** | 31.88 € | stávame sa najlacnejší |
| Domo DO9195C | 32.90 € | **32.50 €** | 10.5 % | **9.1 %** | 32.88 € | stávame sa najlacnejší |
| Inteligentná Wi-Fi brána MEROSS MSH400HK-EU | 20.90 € | **20.50 €** | 15.6 % | **13.4 %** | 20.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 559.90 € | **559.50 €** | 9.9 % | **9.8 %** | 559.79 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 298.90 € | **298.50 €** | 15.1 % | **14.9 %** | 298.79 € | stávame sa najlacnejší |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 9.00 € | **8.70 €** | 48.1 % | **43.2 %** | 8.79 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.20 € | **3.90 €** | 54.5 % | **43.5 %** | 3.94 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.70 € | **3.40 €** | 47.5 % | **35.5 %** | 3.44 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.70 € | **3.40 €** | 47.5 % | **35.5 %** | 3.44 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.20 € | **2.90 €** | 48.7 % | **34.7 %** | 2.96 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.60 € | **3.30 €** | 46.3 % | **34.1 %** | 3.37 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely | 2.60 € | **2.30 €** | 48.9 % | **31.7 %** | 2.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 3.20 € | **2.90 €** | 46.2 % | **32.5 %** | 2.99 € | stávame sa najlacnejší |
| Solight rozbočka, 2x 2,5A, biela | 1.10 € | **0.80 €** | 46.6 % | **6.6 %** | 0.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 2.10 € | **1.80 €** | 52.4 % | **30.7 %** | 1.85 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 2.00 € | **1.70 €** | 54.9 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight HDMI spojka, HDMI zdierka - HDMI zdierka, pr... | 1.10 € | **0.80 €** | 51.6 % | **10.2 %** | 0.85 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.80 €** | 47.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight izolačná páska, 50mm x 0,13mm x 10m, čierna | 1.40 € | **1.10 €** | 35.5 % | **6.5 %** | 0.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 5.00 € | **4.70 €** | 54.0 % | **44.7 %** | 4.71 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.80 € | **3.50 €** | 47.8 % | **36.1 %** | 3.51 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 3m | 3.80 € | **3.50 €** | 47.8 % | **36.1 %** | 3.51 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.10 €** | 45.9 % | **14.7 %** | 1.12 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.80 € | **2.50 €** | 50.8 % | **34.6 %** | 2.55 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.80 € | **2.50 €** | 50.8 % | **34.6 %** | 2.55 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.40 € | **3.10 €** | 47.0 % | **34.1 %** | 3.17 € | stávame sa najlacnejší |
| Solight LED svietidlo pracovné, 120+40lm, 3W COB + 3... | 3.90 € | **3.60 €** | 53.2 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.00 € | **7.70 €** | 38.1 % | **32.9 %** | 7.80 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.40 € | **9.20 €** | 16.9 % | **14.4 %** | 9.29 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.80 € | **9.60 €** | 26.3 % | **23.7 %** | 9.69 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.80 € | **9.60 €** | 20.4 % | **17.9 %** | 9.69 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.70 € | **2.50 €** | 47.3 % | **36.4 %** | 2.51 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.10 € | **1.90 €** | 47.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda červená, závesná, 60cm,... | 4.50 € | **4.30 €** | 49.3 % | **42.7 %** | 4.37 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.80 € | **5.60 €** | 34.3 % | **29.7 %** | 5.69 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 6.50 € | **6.30 €** | 30.5 % | **26.5 %** | 6.39 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 6.50 € | **6.30 €** | 30.5 % | **26.5 %** | 6.39 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 6.50 € | **6.30 €** | 11.0 % | **7.6 %** | 6.39 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 7.00 € | **6.80 €** | 37.8 % | **33.9 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.60 € | **1.40 €** | 23.9 % | **8.4 %** | 1.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.70 € | **7.50 €** | 32.4 % | **28.9 %** | 7.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 4 zásuvky, vypínač, 1... | 7.40 € | **7.20 €** | 9.2 % | **6.2 %** | 7.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.60 € | **3.40 €** | 23.5 % | **16.6 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 6.80 € | **6.60 €** | 29.5 % | **25.7 %** | 6.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 7.40 € | **7.20 €** | 30.2 % | **26.7 %** | 7.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **4.80 €** | 28.2 % | **23.1 %** | 4.89 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W COB, 3x AAA | 4.40 € | **4.20 €** | 31.0 % | **25.1 %** | 4.29 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 1.10 € | **0.90 €** | 44.2 % | **18.0 %** | 0.99 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.20 € | **1.00 €** | 54.9 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.50 € | **1.30 €** | 50.6 % | **30.5 %** | 1.35 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.20 €** | 56.1 % | **43.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.40 € | **2.20 €** | 47.8 % | **35.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.30 € | **3.10 €** | 52.4 % | **43.2 %** | 3.14 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.20 €** | 52.4 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 2m, ... | 2.90 € | **2.70 €** | 24.1 % | **15.5 %** | 2.79 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.90 €** | 46.2 % | **39.1 %** | 4.00 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 9.60 € | **9.40 €** | 31.6 % | **28.9 %** | 9.49 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.60 € | **5.40 €** | 24.4 % | **20.0 %** | 5.49 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.60 € | **7.40 €** | 29.8 % | **26.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 8.60 € | **8.40 €** | 35.8 % | **32.6 %** | 8.49 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 8.20 € | **8.00 €** | 34.4 % | **31.1 %** | 8.09 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 5.10 € | **4.90 €** | 18.1 % | **13.5 %** | 4.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.60 € | **4.40 €** | 16.1 % | **11.1 %** | 4.49 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 4 zásuvky, 1,5m, biela | 9.60 € | **9.40 €** | 52.1 % | **49.0 %** | 9.49 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 4 zásuvky, 3m, biela | 9.60 € | **9.40 €** | 18.4 % | **16.0 %** | 9.49 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 1,5m, b... | 9.60 € | **9.40 €** | 27.1 % | **24.5 %** | 9.49 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 3m, biela | 9.60 € | **9.40 €** | 15.8 % | **13.4 %** | 9.49 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 1,5m, b... | 9.60 € | **9.40 €** | 17.7 % | **15.3 %** | 9.49 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 8.50 € | **8.30 €** | 7.8 % | **5.3 %** | 8.39 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 270.00 € | **269.90 €** | 7.7 % | **7.6 %** | 269.92 € | stávame sa najlacnejší |
| Guzzanti GZ 256A | 386.00 € | **385.90 €** | 10.0 % | **10.0 %** | 385.97 € | stávame sa najlacnejší |
| Skúšačka napätia a spojitosti UNI-T UT18E | 41.00 € | **40.90 €** | 5.7 % | **5.5 %** | 40.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor drôtov FNIRSI WD-02 | 37.00 € | **36.90 €** | 5.4 % | **5.1 %** | 36.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Topinkovač TEESA TSA3300 | 28.00 € | **27.90 €** | 6.0 % | **5.6 %** | 27.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.00 € | **20.90 €** | 7.4 % | **6.9 %** | 20.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **8.20 €** | 55.5 % | **53.6 %** | 8.25 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 49.00 € | **48.90 €** | 24.8 % | **24.5 %** | 48.95 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 26.4 % | **25.8 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.90 €** | 38.4 % | **37.7 %** | 20.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 22.00 € | **21.90 €** | 38.4 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.00 € | **21.90 €** | 29.4 % | **28.8 %** | 21.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 10.2 % | **10.0 %** | 47.96 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.90 €** | 54.5 % | **54.2 %** | 47.97 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.90 €** | 14.6 % | **14.3 %** | 46.97 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 40.00 € | **39.90 €** | 38.2 % | **37.9 %** | 39.98 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 58.00 € | **57.90 €** | 29.5 % | **29.3 %** | 57.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 23.00 € | **22.90 €** | 39.2 % | **38.6 %** | 22.99 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.90 €** | 25.3 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Solight vonkajšia otočná IP kamera | 45.00 € | **44.90 €** | 66.8 % | **66.4 %** | 44.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 18.00 € | **17.90 €** | 34.4 % | **33.6 %** | 17.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 20.00 € | **19.90 €** | 24.7 % | **24.1 %** | 19.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.00 € | **24.90 €** | 22.9 % | **22.4 %** | 24.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 29.00 € | **28.90 €** | 23.9 % | **23.5 %** | 28.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 23.00 € | **22.90 €** | 34.7 % | **34.1 %** | 22.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY H3 pro ANC (čierne) | 41.00 € | **40.90 €** | 5.8 % | **5.5 %** | 40.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.00 € | **17.90 €** | 6.0 % | **5.5 %** | 17.99 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.40 € | **4.30 €** | 47.8 % | **44.5 %** | 4.32 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, bi... | 6.40 € | **6.30 €** | 34.8 % | **32.7 %** | 6.36 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.30 €** | 26.3 % | **24.3 %** | 6.36 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.30 €** | 7.1 % | **5.4 %** | 6.36 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.20 € | **4.10 €** | 38.2 % | **35.0 %** | 4.16 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 3 zásuvky, vypínač, 1... | 5.70 € | **5.60 €** | 12.8 % | **10.8 %** | 5.67 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.70 € | **5.60 €** | 37.9 % | **35.5 %** | 5.67 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.70 € | **6.60 €** | 37.6 % | **35.5 %** | 6.67 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., 1 režim | 4.20 € | **4.10 €** | 37.1 % | **33.9 %** | 4.19 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **5.80 €** | 23.3 % | **21.2 %** | 5.89 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.80 €** | 45.4 % | **42.9 %** | 5.89 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E1... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 2.10 € | **2.00 €** | 51.1 % | **43.9 %** | 2.02 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 30x mini LED, 3m,... | 2.10 € | **2.00 €** | 51.1 % | **43.9 %** | 2.02 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.60 €** | 46.7 % | **42.8 %** | 3.65 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **2.00 €** | 48.5 % | **41.4 %** | 2.05 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **1.00 €** | 42.0 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.30 € | **1.20 €** | 51.0 % | **39.4 %** | 1.25 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.46 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.10 €** | 32.1 % | **27.9 %** | 3.16 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.90 €** | 46.0 % | **41.2 %** | 2.98 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.40 €** | 34.2 % | **30.4 %** | 3.48 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.40 €** | 37.5 % | **33.5 %** | 3.49 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 3000K, 510lm | 0.80 € | **0.70 €** | 22.7 % | **7.4 %** | 0.79 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.60 €** | 37.2 % | **32.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.80 € | **1.70 €** | 29.5 % | **22.3 %** | 1.79 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.30 € | **1.20 €** | 22.9 % | **13.4 %** | 1.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.60 €** | 33.0 % | **28.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.50 €** | 21.4 % | **18.1 %** | 3.59 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.90 €** | 23.2 % | **17.0 %** | 1.99 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 4W, E14, 3000K, 340... | 0.70 € | **0.60 €** | 42.3 % | **22.0 %** | 0.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 150mm, natura... | 0.70 € | **0.60 €** | 45.9 % | **25.1 %** | 0.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 0.50 € | **0.40 €** | 69.4 % | **35.5 %** | 0.41 € | stávame sa najlacnejší |
| Solight skúšačka 304, priemer 3,5mm x 190mm, AC napä... | 0.90 € | **0.80 €** | 52.4 % | **35.5 %** | 0.82 € | stávame sa najlacnejší |
| Solight zástrčka plochá priama, IP20, biela | 0.90 € | **0.80 €** | 52.4 % | **35.5 %** | 0.82 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 0.90 € | **0.80 €** | 49.3 % | **32.7 %** | 0.87 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 0.90 € | **0.80 €** | 49.3 % | **32.7 %** | 0.87 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, biele... | 1.70 € | **1.60 €** | 53.6 % | **44.5 %** | 1.61 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.10 €** | 39.4 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **1.80 €** | 36.7 % | **29.5 %** | 1.89 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.80 €** | 23.6 % | **17.1 %** | 1.89 € | stávame sa najlacnejší |
| NEDIS ZBSD10WT chytrý dveřní nebo okenní snímač ZigB... | 14.00 € | **13.90 €** | 8.0 % | **7.2 %** | 13.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.90 €** | 56.3 % | **53.2 %** | 4.91 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight LED reflektor PRO so senzorom, 10W, 920lm, 5... | 13.00 € | **12.90 €** | 46.0 % | **44.9 %** | 12.92 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.60 € | **8.50 €** | 36.6 % | **35.0 %** | 8.54 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.95 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.10 € | **5.00 €** | 35.9 % | **33.3 %** | 5.05 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.10 € | **6.00 €** | 32.6 % | **30.4 %** | 6.05 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.90 €** | 45.7 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.90 €** | 38.5 % | **37.5 %** | 12.96 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.30 € | **4.20 €** | 35.5 % | **32.4 %** | 4.26 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.8 % | **9.9 %** | 12.96 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 6 zásuviek, vypínač, ... | 8.60 € | **8.50 €** | 18.3 % | **16.9 %** | 8.56 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 2m | 4.80 € | **4.70 €** | 37.9 % | **35.0 %** | 4.76 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.00 € | **5.90 €** | 37.8 % | **35.5 %** | 5.96 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 8.60 € | **8.50 €** | 37.4 % | **35.8 %** | 8.56 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 20W, 1500lm... | 8.90 € | **8.80 €** | 28.5 % | **27.1 %** | 8.88 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 20W, 1500lm... | 8.90 € | **8.80 €** | 28.5 % | **27.1 %** | 8.88 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.40 €** | 36.3 % | **33.8 %** | 5.48 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.10 € | **5.00 €** | 37.3 % | **34.6 %** | 5.08 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.00 € | **14.90 €** | 10.5 % | **9.7 %** | 14.99 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.90 €** | 38.4 % | **36.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.90 €** | 38.3 % | **36.9 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.90 € | **9.80 €** | 28.2 % | **26.9 %** | 9.89 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.90 €** | 25.1 % | **23.8 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.50 €** | 24.8 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.20 €** | 38.7 % | **35.5 %** | 4.29 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.90 € | **9.80 €** | 30.5 % | **29.1 %** | 9.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.80 €** | 17.1 % | **15.8 %** | 8.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **7.40 €** | 38.9 % | **37.0 %** | 7.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 9.70 € | **9.60 €** | 78.4 % | **76.6 %** | 9.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.20 €** | 18.1 % | **15.4 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **4.50 €** | 33.6 % | **30.7 %** | 4.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.20 €** | 18.5 % | **15.8 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.30 €** | 31.5 % | **30.1 %** | 9.39 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110P, růžová | 13.00 € | **12.90 €** | 5.9 % | **5.1 %** | 12.99 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110W,bílá | 13.00 € | **12.90 €** | 5.9 % | **5.1 %** | 12.99 € | stávame sa najlacnejší |
| Držiak mikrofónu Maono BA20 | 14.00 € | **13.90 €** | 14.2 % | **13.3 %** | 13.99 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.30 €** | 43.8 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |
| Xiaomi Buds 6 Ceramic White | 98.00 € | **97.90 €** | 5.2 % | **5.1 %** | 97.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Buds 6 Graphite Black | 98.00 € | **97.90 €** | 5.2 % | **5.1 %** | 97.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO9285PZ | 77.00 € | **76.90 €** | 5.2 % | **5.1 %** | 76.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava celodenných filtrov Freewell Real Locking s ... | 220.00 € | **219.90 €** | 14.9 % | **14.9 %** | 219.94 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 110.00 € | **109.90 €** | 20.0 % | **19.9 %** | 109.96 € | stávame sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 138.00 € | **137.90 €** | 9.0 % | **8.9 %** | 137.99 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 125.00 € | **124.90 €** | 7.7 % | **7.6 %** | 124.99 € | stávame sa najlacnejší |

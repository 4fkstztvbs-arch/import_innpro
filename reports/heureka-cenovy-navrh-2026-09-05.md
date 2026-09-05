# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-05

Vstup: `premiumstoresk_20260905_1941.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5924**
- Návrh **zvýšiť** cenu: **355** produktov
- Návrh **znížiť** cenu: **1883** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **3686** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **671**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (355)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Studio 24 KS2401 | 2012.00 € | **2346.00 €** | 15.0 % | **34.1 %** | 2346.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung The Frame Pro QE75LS03HW | 2683.90 € | **2799.00 €** | 10.0 % | **14.7 %** | 2798.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 954.50 € | **1014.90 €** | 15.0 % | **22.3 %** | 1014.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie V-TAC VT-48100E-P2 /51,2V/100A/5,12kWh modul... | 861.50 € | **891.50 €** | 1.5 % | **5.0 %** | 890.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Mini projektor Phillips N-100 s rozlíšením 480p (biely) | 90.50 € | **117.50 €** | 15.1 % | **49.5 %** | 117.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL 430406 Partybox 710 - black | 533.90 € | **559.00 €** | 10.0 % | **15.2 %** | 559.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 219.50 € | **241.90 €** | 14.9 % | **26.7 %** | 241.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini projektor Phillips N-110 s rozlíšením 720p (čie... | 107.50 € | **126.90 €** | 15.0 % | **35.7 %** | 126.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 150Ah MHPower L150-12-OUT | 630.50 € | **649.90 €** | 1.9 % | **5.0 %** | 649.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Projektor Phillips N-150 s rozlíšením 1080p (tmavošedý) | 190.50 € | **209.00 €** | 15.1 % | **26.3 %** | 209.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP Z16H 16" prenosný monitor | 228.90 € | **246.90 €** | 6.7 % | **15.1 %** | 246.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 920.50 € | **937.50 €** | 3.1 % | **5.0 %** | 936.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **127.50 €** | 15.0 % | **25.4 %** | 121.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| FINLUX 55FQK9060 ULTRA HD 4K QLED SMART TIVO | 546.50 € | **556.90 €** | 3.1 % | **5.0 %** | 556.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Klimatizace MW POWER ALFA 12K WIFI V1, 12000BTu, R32 | 478.50 € | **488.50 €** | 2.9 % | **5.0 %** | 487.90 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Mini projektor Phillips N-140 s rozlíšením 720p (biely) | 102.50 € | **112.50 €** | 14.8 % | **26.1 %** | 112.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 210.00 € | **219.50 €** | 0.5 % | **5.0 %** | 219.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 33 Ah MHPower MS33-12 | 57.50 € | **65.50 €** | -7.2 % | **5.8 %** | 57.73 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Candy CIP 3E7L0W Rapido | 286.00 € | **294.00 €** | 5.0 % | **8.0 %** | 294.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Spinningové kolo REBEL ACTIVE RBA-1016 | 105.00 € | **112.90 €** | -2.0 % | **5.3 %** | 112.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Filter MOVA pre modely V50, P50 a MOBIUS | 7.90 € | **15.00 €** | 15.1 % | **118.6 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Shifter Moza Racing HGP RS039 | 143.50 € | **149.90 €** | 6.9 % | **11.7 %** | 143.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.90 €** | 10.0 % | **15.2 %** | 119.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Aurzen Eazze D1 Pro | 213.50 € | **218.50 €** | 14.9 % | **17.6 %** | 218.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 367.00 € | **371.00 €** | 9.6 % | **10.8 %** | 367.11 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 86.90 € | **90.50 €** | 10.6 % | **15.1 %** | 90.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sunnylife A3S-FI929 6ks sada filtrov Mix pre AIR 3S | 39.00 € | **42.50 €** | 5.2 % | **14.6 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.50 € | **18.00 €** | 9.0 % | **35.3 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 120.90 € | **124.00 €** | 15.1 % | **18.1 %** | 124.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro ND/PL Brig... | 83.90 € | **87.00 €** | 15.2 % | **19.4 %** | 87.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 41.50 € | **44.50 €** | 29.9 % | **39.3 %** | 41.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 504.50 € | **507.50 €** | 6.3 % | **7.0 %** | 504.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GV520E15 | 286.50 € | **289.50 €** | 6.0 % | **7.2 %** | 286.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.90 € | **122.90 €** | 13.5 % | **16.4 %** | 119.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **559.50 €** | 6.6 % | **7.1 %** | 557.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 45.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herná klávesnica ONIKUMA G80 | 22.50 € | **25.00 €** | 15.6 % | **28.5 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.50 € | **23.50 €** | 31.5 % | **43.8 %** | 21.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibračný tester Uni-T UT315A | 306.90 € | **308.90 €** | 14.3 % | **15.0 %** | 308.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **16.90 €** | 10.6 % | **25.5 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 88.00 € | **89.90 €** | 12.3 % | **14.7 %** | 89.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT Antik Water Heater PWH 01 V3+... | 361.00 € | **362.90 €** | 4.6 % | **5.1 %** | 362.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.90 € | **350.50 €** | 15.0 % | **15.6 %** | 349.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.50 €** | 11.4 % | **22.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.50 €** | 11.4 % | **22.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.50 €** | 11.4 % | **22.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip White | 76.00 € | **77.50 €** | 6.1 % | **8.2 %** | 76.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka Spidoo Kruzzel 25628 růžová | 42.00 € | **43.50 €** | 2.0 % | **5.6 %** | 42.89 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 26.00 € | **27.50 €** | 15.1 % | **21.7 %** | 27.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter MOVA pre model I10 | 13.50 € | **15.00 €** | 14.8 % | **27.6 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Výrobník ledu TEESA EASY ICE TSA5009 | 71.00 € | **72.50 €** | 3.4 % | **5.5 %** | 72.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka Spidoo Kruzzel 25630 fialová | 42.00 € | **43.50 €** | 2.0 % | **5.6 %** | 43.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy ORYX X220 Iris | 19.50 € | **20.90 €** | 10.2 % | **18.1 %** | 20.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA GT805 (čierne) | 23.50 € | **24.90 €** | 15.3 % | **22.2 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA GT886 (čierne) | 23.50 € | **24.90 €** | 16.1 % | **23.0 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá TWS ONIKUMA TX612 (čierne) | 19.50 € | **20.90 €** | 14.3 % | **22.5 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.90 € | **15.00 €** | 12.0 % | **20.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux LIB60420CK | 203.90 € | **205.00 €** | 7.5 % | **8.0 %** | 203.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510B černá | 36.50 € | **37.50 €** | 7.7 % | **10.7 %** | 36.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny kapesny kompresor mini | 38.50 € | **39.50 €** | 16.8 % | **19.8 %** | 39.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 17.50 € | **18.50 €** | 16.3 % | **23.0 %** | 18.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysávač TP-Link Tapo RV20 Max White robotický s mopo... | 123.00 € | **124.00 €** | 5.4 % | **6.3 %** | 123.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Nefrit | 115.50 € | **116.50 €** | 7.8 % | **8.7 %** | 115.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 228.00 € | **229.00 €** | 7.6 % | **8.0 %** | 228.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 16.90 € | **17.90 €** | 6.9 % | **13.3 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 50.00 € | **50.90 €** | 3.3 % | **5.1 %** | 50.49 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **19.90 €** | 37.2 % | **43.7 %** | 19.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **36.90 €** | 14.6 % | **17.5 %** | 36.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **36.90 €** | 15.0 % | **17.8 %** | 36.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filters ND8/16/32 Freewell for DJI Neo | 17.00 € | **17.90 €** | 13.6 % | **19.6 %** | 17.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor ANTIK AC Water Heater (On-Grid) | 378.00 € | **378.90 €** | 4.8 % | **5.1 %** | 378.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 21.90 € | **22.50 €** | 6.4 % | **9.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **14.50 €** | 10.1 % | **14.9 %** | 14.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo vodní filtry 3+1 | 11.90 € | **12.50 €** | 11.2 % | **16.8 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herná myš ONIKUMA CW953 (čierna) | 12.90 € | **13.50 €** | 15.4 % | **20.7 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.90 € | **14.50 €** | 12.0 % | **16.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Comfort Graphite Black | 150.90 € | **151.50 €** | 12.3 % | **12.7 %** | 150.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 41.00 € | **41.50 €** | 4.9 % | **6.1 %** | 41.06 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravír XTOOL M2 20 W | 1117.00 € | **1117.50 €** | 14.3 % | **14.3 %** | 1117.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 205.00 € | **205.50 €** | 9.9 % | **10.2 %** | 205.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Doplnok xTool Smart World pre mBot2 | 79.00 € | **79.50 €** | 10.1 % | **10.8 %** | 79.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ručný multimeter do auta UNI-T UT107 | 29.00 € | **29.50 €** | 7.8 % | **9.6 %** | 29.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 48.00 € | **48.50 €** | 8.7 % | **9.9 %** | 48.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Colmi P71 Smartwatch (Blue) | 18.00 € | **18.50 €** | 12.6 % | **15.7 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 36.00 € | **36.50 €** | 6.3 % | **7.8 %** | 36.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1305.00 € | **1305.50 €** | 11.2 % | **11.2 %** | 1305.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.00 € | **41.50 €** | 12.0 % | **13.3 %** | 41.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Mileseey DP 20 Pro 100 | 133.00 € | **133.50 €** | 12.2 % | **12.6 %** | 133.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Otočný stojan Puluz 45 cm (biely) | 63.00 € | **63.50 €** | 6.5 % | **7.3 %** | 63.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Colmi V65 Smartwatch (Gray) | 29.00 € | **29.50 €** | 7.5 % | **9.3 %** | 29.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier P12 2.0 (hnedé) | 59.00 € | **59.50 €** | 11.2 % | **12.2 %** | 59.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Edifier SS03 stojany pre reproduktory Edifier S3000M... | 121.00 € | **121.50 €** | 13.8 % | **14.3 %** | 121.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G2015706 Emilia 250 | 363.00 € | **363.50 €** | 6.0 % | **6.1 %** | 363.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT76325VW | 163.00 € | **163.50 €** | 6.1 % | **6.4 %** | 163.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 85.00 € | **85.50 €** | 5.8 % | **6.4 %** | 85.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 85.00 € | **85.50 €** | 5.8 % | **6.4 %** | 85.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.00 € | **48.50 €** | 14.8 % | **16.0 %** | 48.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 48.00 € | **48.50 €** | 11.6 % | **12.7 %** | 48.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 46.00 € | **46.50 €** | 10.7 % | **11.9 %** | 46.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny klešťový multimeter Uni-T UT200R | 17.00 € | **17.50 €** | 9.4 % | **12.6 %** | 17.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 285.00 € | **285.50 €** | 7.4 % | **7.6 %** | 285.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 204.00 € | **204.50 €** | 13.8 % | **14.1 %** | 204.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 310.00 € | **310.50 €** | 6.7 % | **6.9 %** | 310.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 396.00 € | **396.50 €** | 7.3 % | **7.5 %** | 396.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 31.00 € | **31.50 €** | 6.1 % | **7.8 %** | 31.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer horkovzdušná fritéza ZAF9230 | 169.00 € | **169.50 €** | 6.0 % | **6.3 %** | 169.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Black&Decker BXDH12E | 161.00 € | **161.50 €** | 6.0 % | **6.4 %** | 161.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE WPNEI94A1SWIFI | 407.00 € | **407.50 €** | 6.1 % | **6.2 %** | 407.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 110.00 € | **110.50 €** | 13.0 % | **13.6 %** | 110.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón Maono DM40 Pro (biely) | 52.00 € | **52.50 €** | 12.7 % | **13.8 %** | 52.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón Maono DM40 Pro (čierny) | 52.00 € | **52.50 €** | 13.6 % | **14.6 %** | 52.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.00 € | **24.50 €** | 12.9 % | **15.2 %** | 24.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 55.00 € | **55.50 €** | 9.7 % | **10.6 %** | 55.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.00 € | **18.50 €** | 6.7 % | **9.7 %** | 18.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42329PC | 115.00 € | **115.50 €** | 7.5 % | **8.0 %** | 115.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 356.00 € | **356.50 €** | 21.5 % | **21.7 %** | 356.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 808/05 | 58.00 € | **58.50 €** | 5.1 % | **6.0 %** | 58.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BL16GE30 | 56.00 € | **56.50 €** | 5.2 % | **6.2 %** | 56.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9286IB | 249.00 € | **249.50 €** | 6.2 % | **6.5 %** | 249.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42102SV | 97.00 € | **97.50 €** | 7.0 % | **7.5 %** | 97.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver VS5910X | 278.50 € | **279.00 €** | 8.3 % | **8.5 %** | 278.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 210.00 € | **210.50 €** | 9.8 % | **10.0 %** | 210.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.00 € | **21.50 €** | 7.1 % | **9.7 %** | 21.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 119.00 € | **119.50 €** | 8.4 % | **8.8 %** | 119.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit TBOX-Plus 4+64 GB | 119.00 € | **119.50 €** | 6.0 % | **6.4 %** | 119.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stropné svetlo Yeelight C2201C400 | 64.00 € | **64.50 €** | 14.8 % | **15.7 %** | 64.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion HS64 | 39.00 € | **39.50 €** | 13.4 % | **14.9 %** | 39.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 107.00 € | **107.50 €** | 11.0 % | **11.5 %** | 107.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 11.50 € | **12.00 €** | 14.3 % | **19.3 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslařský trenažér HMS Premium ZW1600 | 669.50 € | **670.00 €** | 120857.5 % | **120947.9 %** | 669.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 367.50 € | **368.00 €** | 66295.7 % | **66386.0 %** | 367.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy GD 49B8-S | 287.00 € | **287.50 €** | 7.8 % | **8.0 %** | 287.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT117C | 126.00 € | **126.50 €** | 5.4 % | **5.8 %** | 126.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO716BL | 84.00 € | **84.50 €** | 9.0 % | **9.6 %** | 84.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G2014401 Zmrzlinovač | 175.00 € | **175.50 €** | 7.5 % | **7.8 %** | 175.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.00 € | **16.50 €** | 6.7 % | **10.0 %** | 16.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 18.00 € | **18.50 €** | 8.2 % | **11.2 %** | 18.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 84.00 € | **84.50 €** | 13.5 % | **14.2 %** | 84.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **20.50 €** | 46.6 % | **50.3 %** | 20.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun IS5247.VI | 185.00 € | **185.50 €** | 7.7 % | **8.0 %** | 185.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Habotest HT86B | 11.00 € | **11.50 €** | 7.6 % | **12.5 %** | 11.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| GameSir G7 HE wired controller (white) | 43.00 € | **43.50 €** | 12.1 % | **13.4 %** | 43.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superfire BM01 4-in-1 bicycle light | 19.00 € | **19.50 €** | 11.1 % | **14.1 %** | 19.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 109A | 155.00 € | **155.50 €** | 5.8 % | **6.1 %** | 155.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal OptiGrill 2v1 GC773D30 | 161.00 € | **161.50 €** | 6.1 % | **6.4 %** | 161.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic TPU (čierny) 1 kg | 21.00 € | **21.50 €** | 9.0 % | **11.6 %** | 21.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti Uni-T A13T | 10.00 € | **10.50 €** | 6.0 % | **11.3 %** | 10.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RR8589CE | 398.00 € | **398.50 €** | 6.0 % | **6.1 %** | 398.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 68.00 € | **68.50 €** | 13.4 % | **14.2 %** | 68.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 68.00 € | **68.50 €** | 13.4 % | **14.2 %** | 68.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| CR-Silk PLA Filament Creallity (Silver) | 17.00 € | **17.50 €** | 11.5 % | **14.7 %** | 17.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.00 € | **44.50 €** | 14.1 % | **15.4 %** | 44.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový diaľkový spínač SwitchBot-S1 (čierny) | 13.50 € | **14.00 €** | 15.5 % | **19.8 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonická zubná kefka s aplikáciou pre deti, sada konc... | 15.00 € | **15.50 €** | 14.0 % | **17.8 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 88.00 € | **88.50 €** | 13.8 % | **14.4 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Photo Studio PULUZ 80 cm (PU5083EU) | 89.00 € | **89.50 €** | 10.1 % | **10.8 %** | 89.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 436.00 € | **436.50 €** | 11.0 % | **11.1 %** | 436.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (čierne) | 98.00 € | **98.50 €** | 13.6 % | **14.2 %** | 98.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 108.50 € | **109.00 €** | 7.1 % | **7.6 %** | 109.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **64.50 €** | 13.5 % | **14.4 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| UV svietidlo Superfire A5, 365NM | 13.00 € | **13.50 €** | 7.4 % | **11.5 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 17.50 € | **18.00 €** | 6.9 % | **9.9 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **44.50 €** | 5.8 % | **7.0 %** | 44.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.00 € | **16.50 €** | 25.2 % | **29.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1502 | 235.50 € | **236.00 €** | 42447.4 % | **42537.8 %** | 235.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| WHIRLPOOL WI 7020 P | 331.00 € | **331.50 €** | 8.0 % | **8.1 %** | 331.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1346.50 € | **1346.90 €** | 7.4 % | **7.4 %** | 1346.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1022600 | 120.50 € | **120.90 €** | 9.8 % | **10.2 %** | 120.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 82.50 € | **82.90 €** | 9.8 % | **10.4 %** | 82.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.50 € | **195.90 €** | 9.9 % | **10.1 %** | 195.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 210A | 213.50 € | **213.90 €** | 5.9 % | **6.1 %** | 213.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 67.50 € | **67.90 €** | 10.2 % | **10.9 %** | 67.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Chamber Line 30 | 175.50 € | **175.90 €** | 7.6 % | **7.8 %** | 175.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.50 € | **84.90 €** | 8.8 % | **9.4 %** | 84.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.50 € | **212.90 €** | 9.9 % | **10.1 %** | 212.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Pizzeria 927/01, černá | 202.50 € | **202.90 €** | 6.0 % | **6.2 %** | 202.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi FG9201 | 116.50 € | **116.90 €** | 9.7 % | **10.1 %** | 116.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 207.50 € | **207.90 €** | 9.8 % | **10.0 %** | 207.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 207.50 € | **207.90 €** | 9.8 % | **10.0 %** | 207.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi FG4101 | 139.50 € | **139.90 €** | 9.7 % | **10.1 %** | 139.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 74.50 € | **74.90 €** | 12.4 % | **13.0 %** | 74.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 141.50 € | **141.90 €** | 9.1 % | **9.4 %** | 141.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 207.50 € | **207.90 €** | 11.4 % | **11.6 %** | 207.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 64.50 € | **64.90 €** | 7.0 % | **7.6 %** | 64.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 108.50 € | **108.90 €** | 6.2 % | **6.6 %** | 108.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 240.50 € | **240.90 €** | 8.5 % | **8.7 %** | 240.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 131.50 € | **131.90 €** | 5.1 % | **5.4 %** | 131.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 89.50 € | **89.90 €** | 6.3 % | **6.8 %** | 89.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Johansson 6711 Revolution programovatelný zesilovač | 207.50 € | **207.90 €** | 8.7 % | **8.9 %** | 207.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Johansson 6714 Profino Revolution Lite programovatel... | 193.50 € | **193.90 €** | 8.9 % | **9.2 %** | 193.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 110.50 € | **110.90 €** | 14.1 % | **14.5 %** | 110.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 110.50 € | **110.90 €** | 14.1 % | **14.5 %** | 110.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G10153 Horkovzdušná trouba | 165.50 € | **165.90 €** | 6.1 % | **6.4 %** | 165.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 69.50 € | **69.90 €** | 9.8 % | **10.5 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 159.50 € | **159.90 €** | 8.5 % | **8.7 %** | 159.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 71.50 € | **71.90 €** | 16.5 % | **17.2 %** | 71.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 109.50 € | **109.90 €** | 8.7 % | **9.1 %** | 109.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 119.50 € | **119.90 €** | 10.2 % | **10.6 %** | 119.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 119.50 € | **119.90 €** | 11.0 % | **11.4 %** | 119.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Aura A50 Pro Soundbar | 129.50 € | **129.90 €** | 10.4 % | **10.7 %** | 129.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 192.50 € | **192.90 €** | 12.5 % | **12.7 %** | 192.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| MOZA RACING RS061 predĺženie stĺpika riadenia | 118.50 € | **118.90 €** | 13.2 % | **13.6 %** | 118.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Clutch Pedal Moza Racing CRP2 RS067 | 99.50 € | **99.90 €** | 8.1 % | **8.6 %** | 99.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové slnečné okuliare Colmi V06 AI Black | 69.50 € | **69.90 €** | 13.0 % | **13.7 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 69.50 € | **69.90 €** | 13.0 % | **13.7 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.50 € | **10.90 €** | 26.5 % | **31.3 %** | 10.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.50 € | **15.90 €** | 7.8 % | **10.6 %** | 15.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny univerzálny multimeter Habotest HT113 | 10.50 € | **10.90 €** | 6.3 % | **10.4 %** | 10.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **10.90 €** | 21.6 % | **26.2 %** | 10.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 13.50 € | **13.90 €** | 4.6 % | **7.7 %** | 13.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.50 € | **11.90 €** | 40.8 % | **45.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., vypínač, 1 režim | 4.70 € | **5.10 €** | 25.3 % | **35.9 %** | 4.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 29.50 € | **29.90 €** | 12.5 % | **14.1 %** | 29.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell Osmo Pocket ND32/PL | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell Osmo Pocket ND64/PL | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell Osmo Pocket 4P ND16 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell Osmo Pocket 4P ND32 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell Osmo Pocket 4P ND8 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell pre Osmo Pocket ND64 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 41.50 € | **41.90 €** | 12.3 % | **13.4 %** | 41.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.50 € | **17.90 €** | 12.6 % | **15.2 %** | 17.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.50 € | **17.90 €** | 12.8 % | **15.4 %** | 17.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.50 € | **32.90 €** | 12.4 % | **13.8 %** | 32.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 34.50 € | **34.90 €** | 6.4 % | **7.6 %** | 34.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti UNI-T UT333S | 23.50 € | **23.90 €** | 9.7 % | **11.6 %** | 23.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.50 € | **33.90 €** | 6.5 % | **7.7 %** | 33.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.50 € | **27.90 €** | 6.6 % | **8.1 %** | 27.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodinky Colmi V89 Smartwatch (strieborné) | 26.50 € | **26.90 €** | 11.2 % | **12.8 %** | 26.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 31.50 € | **31.90 €** | 11.3 % | **12.7 %** | 31.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 35.50 € | **35.90 €** | 6.0 % | **7.1 %** | 35.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 18.50 € | **18.90 €** | 7.3 % | **9.6 %** | 18.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Krüger&Matz HL-CP03 bezdrátový adaptér CarPlay - And... | 21.50 € | **21.90 €** | 6.0 % | **8.0 %** | 21.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.50 € | **18.90 €** | 17.5 % | **20.0 %** | 18.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM40T | 28.50 € | **28.90 €** | 10.9 % | **12.4 %** | 28.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sendvičovač TEESA TSA3221  3v1 | 25.50 € | **25.90 €** | 12.4 % | **14.2 %** | 25.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vaflovač TEESA TSA3224 | 26.50 € | **26.90 €** | 13.0 % | **14.7 %** | 26.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 49.50 € | **49.90 €** | 9.6 % | **10.5 %** | 49.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Klávesnica ONIKUMA MT706 (biela) (QWERTY) | 40.50 € | **40.90 €** | 15.4 % | **16.5 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 37.50 € | **37.90 €** | 7.6 % | **8.8 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 20.50 € | **20.90 €** | 6.0 % | **8.1 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 22.50 € | **22.90 €** | 5.1 % | **7.0 %** | 22.94 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.50 € | **28.90 €** | 37.2 % | **39.1 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 27.50 € | **27.90 €** | 23.6 % | **25.4 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.90 €** | 18.7 % | **20.3 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **19.90 €** | 36.8 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Kobra 3 Max | 403.50 € | **403.90 €** | 8.4 % | **8.5 %** | 403.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slnečné okuliare VITURE XR Beast (veľkosť L) | 619.50 € | **619.90 €** | 13.5 % | **13.6 %** | 619.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nano projektor JMGO N1S | 466.50 € | **466.90 €** | 8.1 % | **8.1 %** | 466.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R9 Plus (červený) | 275.50 € | **275.90 €** | 8.3 % | **8.5 %** | 275.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 329.50 € | **329.90 €** | 8.6 % | **8.8 %** | 329.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X50 Soundbar | 389.50 € | **389.90 €** | 6.0 % | **6.1 %** | 389.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 363A | 580.50 € | **580.90 €** | 6.2 % | **6.3 %** | 580.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X40 Soundbar | 329.50 € | **329.90 €** | 6.9 % | **7.1 %** | 329.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Intelligent self-cleaning cat litterbox UBPet C20 | 277.50 € | **277.90 €** | 12.0 % | **12.2 %** | 277.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux 600 FLEX EES42210IX | 471.50 € | **471.90 €** | 7.0 % | **7.1 %** | 471.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko EnergySpin BM3WFU3721WBW | 324.50 € | **324.90 €** | 6.9 % | **7.1 %** | 324.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 325.50 € | **325.90 €** | 10.5 % | **10.7 %** | 325.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Johansson 6700 Revolution programovatelný zesilovač | 270.50 € | **270.90 €** | 6.5 % | **6.7 %** | 270.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool FFB 8469 BV EE | 344.50 € | **344.90 €** | 6.6 % | **6.7 %** | 344.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 258.50 € | **258.90 €** | 6.8 % | **7.0 %** | 258.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Letecký simulátor MOZA RACING AB6 | 449.50 € | **449.90 €** | 13.8 % | **13.9 %** | 449.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant MOZA RACING CS Pro RS093 | 346.50 € | **346.90 €** | 9.7 % | **9.8 %** | 346.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant MOZA RACING KS Pro RS095 | 346.50 € | **346.90 €** | 13.1 % | **13.2 %** | 346.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.70 € | **6.90 €** | 31.9 % | **35.8 %** | 6.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robot na čistenie bazénov Wybot L1 | 598.90 € | **599.00 €** | 6.0 % | **6.0 %** | 598.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 790.90 € | **791.00 €** | 13.8 % | **13.8 %** | 790.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener Revopoint POP 4 Premium | 930.90 € | **931.00 €** | 14.9 % | **14.9 %** | 930.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 519.90 € | **520.00 €** | 9.8 % | **9.9 %** | 520.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 952.90 € | **953.00 €** | 14.9 % | **14.9 %** | 953.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Kobra 3 V2 | 281.90 € | **282.00 €** | 8.6 % | **8.6 %** | 282.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Jupiter 2 | 848.90 € | **849.00 €** | 8.3 % | **8.3 %** | 849.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 338.90 € | **339.00 €** | 12.9 % | **12.9 %** | 339.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 889.90 € | **890.00 €** | 11.3 % | **11.3 %** | 890.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 728.90 € | **729.00 €** | 9.2 % | **9.2 %** | 729.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultima Apollo S90 Soundbar | 308.90 € | **309.00 €** | 8.7 % | **8.8 %** | 309.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koleso MOZA RS068 FSR V2 (PC) | 665.90 € | **666.00 €** | 12.9 % | **12.9 %** | 666.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 479.90 € | **480.00 €** | 9.6 % | **9.6 %** | 480.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 396.90 € | **397.00 €** | 5.9 % | **6.0 %** | 397.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 399.90 € | **400.00 €** | 6.0 % | **6.0 %** | 400.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 398.90 € | **399.00 €** | 6.8 % | **6.8 %** | 399.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus T2 smart bike trainer | 589.90 € | **590.00 €** | 8.4 % | **8.4 %** | 590.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 15.9 % | **16.5 %** | 19.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS2 mini electric pump | 41.90 € | **42.00 €** | 7.0 % | **7.2 %** | 41.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell neutrálny filter ND32 pre OSMO 360 | 61.90 € | **62.00 €** | 9.4 % | **9.6 %** | 62.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 18.90 € | **19.00 €** | 5.0 % | **5.6 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizer Filter Freewell for DJI Avata 2 | 17.90 € | **18.00 €** | 7.1 % | **7.7 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UV Filter Freewell for DJI Avata 2 | 16.90 € | **17.00 €** | 12.8 % | **13.5 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 16.90 € | **17.00 €** | 9.1 % | **9.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rapoo 9300M set klávesnice a myši černý | 31.90 € | **32.00 €** | 11.3 % | **11.6 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 50.90 € | **51.00 €** | 12.3 % | **12.5 %** | 51.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.60 € | **5.70 €** | 34.7 % | **37.1 %** | 5.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.70 €** | 38.0 % | **41.0 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR senzor nástenný, vonkajší, biely | 6.80 € | **6.90 €** | 27.4 % | **29.3 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 5.10 € | **5.20 €** | 10.9 % | **13.0 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.60 € | **6.70 €** | 28.7 % | **30.6 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.80 € | **2.90 €** | 19.2 % | **23.4 %** | 2.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.50 € | **3.60 €** | 12.5 % | **15.7 %** | 3.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.90 € | **2.00 €** | 17.0 % | **23.2 %** | 1.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.80 € | **3.90 €** | 14.4 % | **17.4 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.80 € | **1.90 €** | 38.1 % | **45.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **10.00 €** | 44.2 % | **45.7 %** | 9.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **5.30 €** | 34.6 % | **37.2 %** | 5.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 8.90 € | **9.00 €** | 15.8 % | **17.1 %** | 8.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 26.3 % | **28.3 %** | 6.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.00 € | **8.10 €** | 9.7 % | **11.1 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 11.90 € | **12.00 €** | 46.1 % | **47.4 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.90 € | **10.00 €** | 23.8 % | **25.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.30 €** | 32.1 % | **36.2 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.90 € | **8.00 €** | 35.2 % | **36.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.80 € | **8.90 €** | 10.2 % | **11.5 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.10 € | **9.20 €** | 30.0 % | **31.5 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.20 € | **5.30 €** | 18.8 % | **21.0 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 5.4 % | **6.9 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 15.90 € | **16.00 €** | 7.4 % | **8.0 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo INFRA DRY+ | 189.90 € | **190.00 €** | 7.9 % | **7.9 %** | 189.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO344DH | 144.90 € | **145.00 €** | 6.4 % | **6.5 %** | 144.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO354VD | 129.90 € | **130.00 €** | 7.7 % | **7.7 %** | 129.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čistiaci robot PROSCENIC Q20 Plus | 236.90 € | **237.00 €** | 13.5 % | **13.5 %** | 237.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blesk GODOX V860III TTL pre Sony | 198.90 € | **199.00 €** | 11.8 % | **11.9 %** | 199.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 208.90 € | **209.00 €** | 8.3 % | **8.4 %** | 209.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná batéria pre DJI Mini 5 Pro | 80.90 € | **81.00 €** | 6.7 % | **6.9 %** | 81.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 189.90 € | **190.00 €** | 8.9 % | **8.9 %** | 190.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 247.90 € | **248.00 €** | 8.4 % | **8.5 %** | 248.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Okuliare RayNeo X3 Pro AR | 1531.90 € | **1532.00 €** | 13.7 % | **13.7 %** | 1532.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2198.90 € | **2199.00 €** | 8.7 % | **8.7 %** | 2199.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor JMGO O2S Ultra | 2378.90 € | **2379.00 €** | 14.1 % | **14.1 %** | 2379.00 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1883)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 7402.00 € | **6758.90 €** | 15.0 % | **5.0 %** | 6503.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3641.00 € | **3349.00 €** | 15.0 % | **5.8 %** | 3349.50 € | stávame sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.50 €** | 15.0 % | **5.9 %** | 2645.65 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2573.90 € | **2350.00 €** | 15.0 % | **5.0 %** | 1825.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOC6H76X | 769.00 € | **546.90 €** | 47.7 % | **5.0 %** | 517.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **364.50 €** | 64.1 % | **7.0 %** | 364.90 € | stávame sa najlacnejší |
| Samsung OLED QE77S99H | 3613.00 € | **3448.90 €** | 10.0 % | **5.0 %** | 3379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 519.00 € | **367.50 €** | 48.3 % | **5.0 %** | 363.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 977.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE65S99H | 2924.90 € | **2791.90 €** | 10.0 % | **5.0 %** | 2758.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **636.00 €** | 28.2 % | **6.0 %** | 636.20 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 309.00 € | **176.90 €** | 87.4 % | **7.3 %** | 177.00 € | stávame sa najlacnejší |
| Gorenje WDSI96A | 499.00 € | **373.50 €** | 40.3 % | **5.0 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2649.90 € | **2529.50 €** | 10.0 % | **5.0 %** | 1726.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **484.50 €** | 32.2 % | **7.0 %** | 484.60 € | stávame sa najlacnejší |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 639.00 € | **525.90 €** | 27.6 % | **5.0 %** | 495.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **527.90 €** | 28.2 % | **5.9 %** | 528.00 € | stávame sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1503.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1600.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 529.00 € | **419.50 €** | 32.4 % | **5.0 %** | 369.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1542.90 €** | 16.3 % | **8.9 %** | 1543.00 € | stávame sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **383.00 €** | 35.3 % | **6.0 %** | 383.50 € | stávame sa najlacnejší |
| BEKO HILG64220SW | 269.00 € | **164.50 €** | 71.7 % | **5.0 %** | 152.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO RFSA240M43WN | 469.00 € | **368.90 €** | 33.6 % | **5.1 %** | 368.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S85H | 2193.50 € | **2093.90 €** | 10.0 % | **5.0 %** | 1349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr Fold 16+512GB Blue | 2190.50 € | **2090.90 €** | 10.0 % | **5.0 %** | 1449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **508.50 €** | 23.8 % | **5.1 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica TFB 128 TX | 369.00 € | **279.50 €** | 38.7 % | **5.0 %** | 269.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **980.90 €** | 15.0 % | **5.8 %** | 981.00 € | stávame sa najlacnejší |
| GORENJE GS620C10S | 429.00 € | **344.00 €** | 33.3 % | **6.9 %** | 344.50 € | stávame sa najlacnejší |
| Samsung The Frame Pro QE65LS03HW | 1823.90 € | **1740.90 €** | 10.0 % | **5.0 %** | 1718.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS520E15W | 339.00 € | **257.90 €** | 38.1 % | **5.1 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOF3H40TH | 339.00 € | **259.90 €** | 37.0 % | **5.0 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux KGS64362XX | 269.00 € | **191.50 €** | 47.7 % | **5.1 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality CR-Scan Raptor 3D Scanner | 950.00 € | **877.00 €** | 15.0 % | **6.2 %** | 877.11 € | stávame sa najlacnejší |
| Xiaomi 17 Ultra 16/512GB Black | 1522.90 € | **1453.90 €** | 10.0 % | **5.0 %** | 1125.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 410090000 | 399.00 € | **331.00 €** | 28.7 % | **6.8 %** | 331.40 € | stávame sa najlacnejší |
| Beko BM3WFU3941WBW | 439.00 € | **373.50 €** | 23.4 % | **5.0 %** | 348.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 746.50 € | **681.50 €** | 15.0 % | **5.0 %** | 681.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE FN617EES5 | 469.00 € | **405.90 €** | 23.6 % | **7.0 %** | 406.00 € | stávame sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **668.00 €** | 15.0 % | **5.1 %** | 668.39 € | stávame sa najlacnejší |
| Samsung OLED QE65S85H | 1370.90 € | **1308.50 €** | 10.0 % | **5.0 %** | 880.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr 70 Ultra 16+512GB Blue | 1358.00 € | **1296.50 €** | 10.0 % | **5.0 %** | 1220.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo Edge 2 Pro White | 1275.90 € | **1217.90 €** | 10.0 % | **5.0 %** | 831.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **221.00 €** | 37.2 % | **8.7 %** | 221.50 € | stávame sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **342.00 €** | 22.5 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 140.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS5B70CLI | 599.00 € | **543.50 €** | 15.7 % | **5.0 %** | 470.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 199.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 356.90 € | **302.90 €** | 72440.7 % | **61465.0 %** | 303.00 € | stávame sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **236.90 €** | 28.2 % | **5.1 %** | 233.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool OMK38HU0B | 299.00 € | **248.00 €** | 26.6 % | **5.0 %** | 228.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Carbon | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 709.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Olive | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 W | 159.00 € | **110.50 €** | 51.4 % | **5.2 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 B | 159.00 € | **110.50 €** | 51.4 % | **5.2 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R619EES5 | 519.00 € | **471.00 €** | 15.7 % | **5.0 %** | 407.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EIS8959 | 1062.50 € | **1014.50 €** | 10.0 % | **5.0 %** | 967.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Micro RGB MRE55R85H | 1049.50 € | **1001.90 €** | 10.0 % | **5.0 %** | 869.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 256GB White | 1039.50 € | **992.00 €** | 10.0 % | **5.0 %** | 820.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 256GB Black | 1039.50 € | **992.00 €** | 10.0 % | **5.0 %** | 825.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE NRS8182KX | 549.00 € | **501.90 €** | 14.9 % | **5.0 %** | 494.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 Ultra 16/512GB Black | 1035.50 € | **988.50 €** | 10.0 % | **5.0 %** | 899.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHFF 6404 X6E | 1023.50 € | **976.90 €** | 10.0 % | **5.0 %** | 976.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 525.50 € | **479.90 €** | 15.0 % | **5.1 %** | 426.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LHR3233CK | 199.00 € | **153.50 €** | 36.1 % | **5.0 %** | 128.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17 12/256GB Venture Green | 972.90 € | **928.90 €** | 10.0 % | **5.0 %** | 865.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 95.4 % | **11.5 %** | 57.44 € | stávame sa najlacnejší |
| POCO F9 Ultra 12/256GB Black | 927.90 € | **885.50 €** | 10.0 % | **5.0 %** | 799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 123.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **413.00 €** | 17.8 % | **7.0 %** | 413.30 € | stávame sa najlacnejší |
| YAMAHA TT-S303 BLACK | 529.00 € | **488.50 €** | 13.8 % | **5.1 %** | 466.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Blue | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 619.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Red | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 634.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E10 | 339.00 € | **299.90 €** | 18.8 % | **5.1 %** | 254.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38646D | 535.00 € | **495.90 €** | 15.5 % | **7.0 %** | 496.00 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max robotický s mopom, výk... | 188.50 € | **150.50 €** | 31.9 % | **5.3 %** | 142.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA7CE19S | 820.50 € | **783.50 €** | 10.0 % | **5.1 %** | 758.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **389.50 €** | 15.0 % | **5.1 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Black | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 700.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Green | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 700.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB White | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 700.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 476.00 € | **440.00 €** | 15.0 % | **6.3 %** | 440.50 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **243.50 €** | 24.4 % | **8.6 %** | 243.90 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **243.50 €** | 24.2 % | **8.4 %** | 243.90 € | stávame sa najlacnejší |
| YAMAHA A-S301 BLACK | 439.00 € | **403.90 €** | 14.1 % | **5.0 %** | 385.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K1C 2025 | 401.90 € | **366.90 €** | 15.0 % | **5.0 %** | 348.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA7CE18S1 | 752.50 € | **718.00 €** | 10.1 % | **5.0 %** | 683.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 394.00 € | **359.90 €** | 15.0 % | **5.0 %** | 322.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 Pro 12/512GB Green (72207) | 742.50 € | **708.90 €** | 10.0 % | **5.0 %** | 609.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň CREALITY SparkX i7 Combo | 391.50 € | **357.90 €** | 15.0 % | **5.1 %** | 318.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 387.00 € | **353.50 €** | 15.0 % | **5.0 %** | 349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation 5 Digital + 2x DS5 | 727.50 € | **694.50 €** | 10.0 % | **5.0 %** | 579.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation®5 Console–1TB | 727.50 € | **694.50 €** | 10.0 % | **5.0 %** | 694.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW8F5412SAC | 709.90 € | **677.90 €** | 10.0 % | **5.1 %** | 674.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Midland BTR1 Advanced, Single | 219.00 € | **187.00 €** | 25.0 % | **6.7 %** | 187.50 € | stávame sa najlacnejší |
| kamerový set TP-Link Tapo C425 KIT 4MPx, vonkajšie, ... | 144.90 € | **113.90 €** | 33.7 % | **5.1 %** | 97.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOF3H50BK | 299.00 € | **268.90 €** | 16.9 % | **5.1 %** | 174.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Blue | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 475.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Wood | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 475.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač MOVA Z200 Stick | 345.50 € | **315.50 €** | 15.0 % | **5.0 %** | 221.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 796.90 € | **767.00 €** | 10.0 % | **5.9 %** | 767.50 € | stávame sa najlacnejší |
| Projektor Aurzen Eazze D1 Max | 346.00 € | **316.50 €** | 15.0 % | **5.2 %** | 207.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG FCR5A95WW | 610.50 € | **582.50 €** | 10.1 % | **5.0 %** | 500.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WP E12X WBS EE | 618.50 € | **590.50 €** | 10.0 % | **5.1 %** | 569.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO 4250 CLI | 159.00 € | **131.50 €** | 27.4 % | **5.4 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 130.00 € | **103.00 €** | 32.5 % | **5.0 %** | 102.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 930.50 € | **903.90 €** | 10.0 % | **6.9 %** | 904.00 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 914.50 € | **888.00 €** | 10.0 % | **6.9 %** | 888.50 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 685.90 € | **659.90 €** | 15.0 % | **10.7 %** | 660.00 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **507.00 €** | 15.0 % | **9.4 %** | 507.50 € | stávame sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **573.50 €** | 10.5 % | **5.8 %** | 573.89 € | stávame sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 556.90 € | **531.90 €** | 10.0 % | **5.1 %** | 499.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA6LE18S | 549.00 € | **524.00 €** | 10.0 % | **5.0 %** | 509.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 713.90 € | **688.90 €** | 10.0 % | **6.2 %** | 689.00 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.50 €** | 49.9 % | **19.6 %** | 98.90 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **347.00 €** | 15.1 % | **7.3 %** | 347.50 € | stávame sa najlacnejší |
| LENOVO LEGION TAB (ZAEF0021CZ) | 530.90 € | **506.50 €** | 10.1 % | **5.0 %** | 448.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AX | 515.50 € | **491.90 €** | 10.1 % | **5.0 %** | 453.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **64.50 €** | 43.8 % | **5.5 %** | 64.90 € | stávame sa najlacnejší |
| UMAX Webcam W5 | 39.90 € | **16.50 €** | 161.4 % | **8.1 %** | 14.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 506.50 € | **483.50 €** | 10.1 % | **5.1 %** | 477.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 69.00 € | **46.00 €** | 58.9 % | **5.9 %** | 46.50 € | stávame sa najlacnejší |
| LG GBBSJ21DPY | 497.50 € | **474.90 €** | 10.1 % | **5.1 %** | 396.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 264.50 € | **241.90 €** | 15.0 % | **5.2 %** | 200.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS6C70WPA | 499.90 € | **477.50 €** | 10.0 % | **5.1 %** | 415.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 486.90 € | **464.90 €** | 10.0 % | **5.1 %** | 442.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38441P | 484.50 € | **462.50 €** | 10.1 % | **5.1 %** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RP619EEW5 | 482.50 € | **460.50 €** | 10.1 % | **5.0 %** | 449.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BRS 7N3BX-S | 482.90 € | **460.90 €** | 10.1 % | **5.1 %** | 460.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 240.00 € | **218.50 €** | 24.6 % | **13.4 %** | 218.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C610 KIT 3MPx, vonkajšia, IP PTZ... | 103.90 € | **82.50 €** | 32.6 % | **5.3 %** | 79.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 176.00 € | **154.90 €** | 19.4 % | **5.0 %** | 142.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Presto 2094 90000, bílý | 114.99 € | **93.90 €** | 30.0 % | **6.1 %** | 94.00 € | stávame sa najlacnejší |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 465.50 € | **444.50 €** | 10.1 % | **5.1 %** | 319.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/128GB Green (71768) | 458.90 € | **437.90 €** | 10.1 % | **5.0 %** | 364.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZTE Nubia Air Pro 5G bílý | 459.50 € | **438.50 €** | 10.1 % | **5.1 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3WFU4841MCC | 461.50 € | **440.50 €** | 10.0 % | **5.0 %** | 432.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A7 bílá | 560.50 € | **539.50 €** | 10.0 % | **5.9 %** | 539.60 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 659.90 € | **638.90 €** | 10.0 % | **6.5 %** | 639.00 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 557.50 € | **537.00 €** | 10.0 % | **6.0 %** | 537.20 € | stávame sa najlacnejší |
| LG FA2S8V3GN3W | 444.90 € | **424.50 €** | 10.1 % | **5.0 %** | 398.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620EABK4 | 445.50 € | **425.50 €** | 10.1 % | **5.1 %** | 330.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 105.00 € | **85.00 €** | 29.8 % | **5.1 %** | 66.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 693.90 € | **673.90 €** | 10.1 % | **6.9 %** | 674.00 € | stávame sa najlacnejší |
| Guzzanti GZ 340A | 431.90 € | **412.00 €** | 10.1 % | **5.0 %** | 383.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 431.50 € | **411.90 €** | 10.0 % | **5.0 %** | 334.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BU1154HCN | 289.00 € | **269.50 €** | 12.8 % | **5.2 %** | 265.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CCGMEE9025PX/E | 817.50 € | **798.00 €** | 10.1 % | **7.4 %** | 798.50 € | stávame sa najlacnejší |
| Gorenje NRK620EAW4 | 414.90 € | **395.90 €** | 10.1 % | **5.0 %** | 360.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIM12300X | 229.00 € | **210.00 €** | 14.5 % | **5.0 %** | 175.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 89.50 € | **70.50 €** | 44.0 % | **13.4 %** | 70.90 € | stávame sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 572.50 € | **553.90 €** | 15.0 % | **11.3 %** | 554.00 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **192.00 €** | 15.1 % | **5.0 %** | 173.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **197.50 €** | 15.0 % | **5.2 %** | 184.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HII64600AFT | 390.50 € | **372.50 €** | 10.1 % | **5.0 %** | 301.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS642D90X | 394.90 € | **376.90 €** | 10.1 % | **5.1 %** | 323.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fén MOVA Aero C v ružovej farbe | 206.90 € | **188.90 €** | 15.1 % | **5.1 %** | 137.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 396.90 € | **378.90 €** | 10.1 % | **5.1 %** | 355.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L3560CDW | 394.50 € | **376.50 €** | 10.1 % | **5.0 %** | 354.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 BLACK | 396.90 € | **378.90 €** | 10.0 % | **5.1 %** | 377.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 67.50 € | **49.50 €** | 44.0 % | **5.6 %** | 49.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy ECNBQT3518E Fresco | 496.90 € | **478.90 €** | 10.1 % | **6.1 %** | 479.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 138.50 € | **120.50 €** | 27363.8 % | **23794.5 %** | 120.90 € | stávame sa najlacnejší |
| Samsung Mini LED UE43M70H | 380.90 € | **363.50 €** | 10.0 % | **5.0 %** | 330.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 638.50 € | **621.50 €** | 8.0 % | **5.1 %** | 520.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 366.50 € | **349.50 €** | 10.1 % | **5.0 %** | 324.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kalibrátor procesov Uni-T UT705 | 289.00 € | **272.50 €** | 15.0 % | **8.4 %** | 272.68 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C260 IP, 8MPx, WiFi, prísvit | 79.90 € | **63.50 €** | 32.6 % | **5.4 %** | 55.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C411 KIT 3MPx, outdoor, IP, WiFi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 54.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 57.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Storio II 2043 90030 černá | 347.90 € | **331.90 €** | 10.1 % | **5.0 %** | 268.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 5G 8/256GB ZAFM0293CZ | 354.90 € | **338.90 €** | 10.1 % | **5.1 %** | 312.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 310.50 € | **294.50 €** | 10.8 % | **5.1 %** | 276.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool TDLR 6240S EU/N | 340.50 € | **324.90 €** | 10.1 % | **5.0 %** | 322.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 244.50 € | **228.90 €** | 15.1 % | **7.7 %** | 229.00 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 536.90 € | **521.50 €** | 10.0 % | **6.9 %** | 521.90 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 540.90 € | **525.50 €** | 10.0 % | **6.9 %** | 525.90 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 344.90 € | **329.50 €** | 10.0 % | **5.1 %** | 329.90 € | stávame sa najlacnejší |
| ETA 0028 98050 | 79.99 € | **64.90 €** | 30.1 % | **5.6 %** | 63.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWSC 833 SB | 331.50 € | **316.50 €** | 10.1 % | **5.2 %** | 248.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 69.00 € | **54.00 €** | 58.9 % | **24.4 %** | 54.50 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 8/256GB (ZAFR0272CZ) | 314.50 € | **299.90 €** | 10.2 % | **5.0 %** | 275.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5XRCNA366HXB | 524.50 € | **510.00 €** | 10.1 % | **7.0 %** | 510.10 € | stávame sa najlacnejší |
| Candy GD 410B8-S | 316.00 € | **301.90 €** | 10.0 % | **5.1 %** | 294.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 46.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Ambito 0516 90000 bílý/tyrkysový | 75.99 € | **61.90 €** | 29.5 % | **5.5 %** | 59.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 16.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G57 Power 12+256GB Green | 305.50 € | **291.50 €** | 10.2 % | **5.1 %** | 212.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 135.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 135.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC062X | 169.00 € | **155.00 €** | 14.6 % | **5.1 %** | 154.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta GZ5436E0 | 299.90 € | **285.90 €** | 10.1 % | **5.0 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 557.90 € | **544.00 €** | 10.1 % | **7.3 %** | 544.50 € | stávame sa najlacnejší |
| Redmi Note 15 Pro 8/256GB Black | 296.50 € | **282.90 €** | 10.2 % | **5.1 %** | 244.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-L7 | 301.50 € | **287.90 €** | 10.0 % | **5.1 %** | 255.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 48SB8C-S | 312.50 € | **298.90 €** | 10.1 % | **5.3 %** | 299.00 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 483.50 € | **469.90 €** | 10.0 % | **6.9 %** | 470.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 65.50 € | **51.90 €** | 33.5 % | **5.8 %** | 51.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **105.50 €** | 22.2 % | **8.3 %** | 105.90 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R25 RS091 | 1008.50 € | **995.00 €** | 15.0 % | **13.5 %** | 995.50 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 457.50 € | **444.00 €** | 10.1 % | **6.9 %** | 444.50 € | stávame sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **34.50 €** | 54.8 % | **11.5 %** | 34.90 € | stávame sa najlacnejší |
| SONY STRDH190 | 297.90 € | **284.50 €** | 10.1 % | **5.1 %** | 279.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5RCNA416HXBR | 456.90 € | **443.50 €** | 10.0 % | **6.8 %** | 443.90 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 335.00 € | **321.90 €** | 14.9 % | **10.4 %** | 322.00 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 53.00 € | **39.90 €** | 43.2 % | **7.8 %** | 40.00 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 261.00 € | **247.90 €** | 14.9 % | **9.2 %** | 248.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 92.00 € | **78.90 €** | 43.6 % | **23.2 %** | 79.00 € | stávame sa najlacnejší |
| YAMAHA R-S202D SILVER | 284.50 € | **271.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CIO 225 EE/N | 286.50 € | **273.50 €** | 10.1 % | **5.1 %** | 271.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare VITURE XR Luma Pro (veľkosť L) | 407.50 € | **394.50 €** | 15.0 % | **11.3 %** | 394.81 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 194.50 € | **181.50 €** | 15.0 % | **7.3 %** | 181.83 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C510W 3MPx, vonkajšia, IP, WiFi,... | 63.90 € | **51.00 €** | 31.7 % | **5.1 %** | 47.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux CFG526R | 280.50 € | **267.90 €** | 10.0 % | **5.1 %** | 263.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 134.50 € | **121.90 €** | 24.8 % | **13.1 %** | 122.00 € | stávame sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 262.50 € | **249.90 €** | 19.8 % | **14.0 %** | 250.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **159.50 €** | 14.8 % | **6.5 %** | 159.90 € | stávame sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.00 €** | 50.2 % | **38.0 %** | 141.50 € | stávame sa najlacnejší |
| Gorenje RK14CPS4 | 310.50 € | **298.00 €** | 10.1 % | **5.7 %** | 298.50 € | stávame sa najlacnejší |
| ETA 0028 92020 | 79.99 € | **67.50 €** | 31.5 % | **11.0 %** | 67.90 € | stávame sa najlacnejší |
| Beko BDFN26540WP | 426.90 € | **414.50 €** | 10.1 % | **6.9 %** | 414.90 € | stávame sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT100 PRO | 145.00 € | **132.90 €** | 14.8 % | **5.2 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 73.99 € | **61.90 €** | 37.4 % | **14.9 %** | 62.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 114.50 € | **102.50 €** | 17.4 % | **5.1 %** | 84.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HIC 64401 | 159.00 € | **147.00 €** | 13.6 % | **5.0 %** | 142.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 230.90 € | **218.90 €** | 10.8 % | **5.0 %** | 219.00 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 407.50 € | **395.50 €** | 10.1 % | **6.8 %** | 395.90 € | stávame sa najlacnejší |
| Beko CF200EWN | 259.90 € | **248.00 €** | 10.1 % | **5.0 %** | 214.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 16.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.50 € | **134.90 €** | 15.3 % | **6.2 %** | 135.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 79.50 € | **68.00 €** | 59.1 % | **36.1 %** | 68.06 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 380.50 € | **369.00 €** | 10.1 % | **6.8 %** | 369.20 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 193.50 € | **182.00 €** | 15.0 % | **8.2 %** | 182.39 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **518.00 €** | 15.0 % | **12.5 %** | 518.50 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 310.50 € | **299.00 €** | 10.0 % | **5.9 %** | 299.50 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 310.50 € | **299.00 €** | 10.0 % | **5.9 %** | 299.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 39.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Nikon | 277.00 € | **265.90 €** | 14.9 % | **10.3 %** | 266.00 € | stávame sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **119.90 €** | 14.9 % | **5.2 %** | 111.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 3-pack) | 233.50 € | **222.50 €** | 10.2 % | **5.0 %** | 98.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta Extreme Dry Compact DH5250F0 | 243.90 € | **232.90 €** | 10.1 % | **5.1 %** | 190.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Black | 241.50 € | **230.50 €** | 10.2 % | **5.2 %** | 196.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 216.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 216.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 126.00 € | **115.00 €** | 24.2 % | **13.4 %** | 115.10 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 425.90 € | **414.90 €** | 10.0 % | **7.2 %** | 415.00 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **31.00 €** | 47.6 % | **9.0 %** | 31.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 69.50 € | **58.50 €** | 43.9 % | **21.1 %** | 58.76 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 113.50 € | **102.50 €** | 43.9 % | **30.0 %** | 102.83 € | stávame sa najlacnejší |
| Okuliare RayNeo Air 4 Pro AR | 325.90 € | **315.00 €** | 15.0 % | **11.2 %** | 315.50 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 358.90 € | **348.00 €** | 10.1 % | **6.8 %** | 348.50 € | stávame sa najlacnejší |
| Concept IDV5160wh | 364.50 € | **353.90 €** | 10.1 % | **6.9 %** | 354.00 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 4/128GB (ZAFR0018CZ) | 228.50 € | **217.90 €** | 10.2 % | **5.1 %** | 184.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC772830 | 226.50 € | **215.90 €** | 10.2 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 338 | 583.00 € | **572.50 €** | 10.0 % | **8.0 %** | 572.54 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 47.50 € | **37.00 €** | 38.3 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Guzzanti GZ 325 | 263.50 € | **253.00 €** | 10.2 % | **5.8 %** | 253.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 43.50 € | **33.00 €** | 54.0 % | **16.9 %** | 33.50 € | stávame sa najlacnejší |
| Tefal RK364G10 Coppertinto | 69.90 € | **59.50 €** | 29.7 % | **10.4 %** | 59.90 € | stávame sa najlacnejší |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 272.90 € | **262.50 €** | 9.3 % | **5.2 %** | 261.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CA6 NP5B3HTX | 351.90 € | **341.50 €** | 10.1 % | **6.9 %** | 341.90 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **180.90 €** | 15.0 % | **8.9 %** | 181.00 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **196.90 €** | 14.9 % | **9.3 %** | 197.00 € | stávame sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.90 €** | 25.0 % | **7.8 %** | 63.00 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **110.50 €** | 14.8 % | **5.3 %** | 88.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo C420S2 | 212.90 € | **202.90 €** | 10.2 % | **5.0 %** | 190.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 225.50 € | **215.50 €** | 10.1 % | **5.2 %** | 205.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI1009OR | 32.90 € | **22.90 €** | 54.3 % | **7.4 %** | 23.00 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 182.90 € | **172.90 €** | 15.1 % | **8.8 %** | 173.00 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 49.50 € | **39.50 €** | 47.9 % | **18.0 %** | 39.90 € | stávame sa najlacnejší |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 180.50 € | **170.50 €** | 24.7 % | **17.8 %** | 170.90 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 31.50 € | **21.50 €** | 59.3 % | **8.7 %** | 21.90 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 31.50 € | **21.50 €** | 59.3 % | **8.7 %** | 21.90 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 50.6 % | **9.1 %** | 26.17 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C310 vonkajšia, IP, FHD, WiFi, p... | 48.50 € | **38.90 €** | 31.3 % | **5.3 %** | 37.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 38.50 € | **28.90 €** | 57.5 % | **18.2 %** | 29.00 € | stávame sa najlacnejší |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 210.50 € | **200.90 €** | 24.8 % | **19.1 %** | 201.00 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 109.50 € | **100.00 €** | 24.1 % | **13.3 %** | 100.08 € | stávame sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 835.50 € | **826.00 €** | 8.8 % | **7.6 %** | 826.10 € | stávame sa najlacnejší |
| Amica KF 17191 | 39.00 € | **29.50 €** | 59.5 % | **20.6 %** | 29.90 € | stávame sa najlacnejší |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 507.50 € | **498.00 €** | 10.0 % | **8.0 %** | 498.50 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **100.50 €** | 15.0 % | **5.2 %** | 95.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 50.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 29.90 € | **20.50 €** | 56.8 % | **7.5 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje FN619EEW5 | 490.90 € | **481.90 €** | 7.0 % | **5.1 %** | 409.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON i-SENSYS MF3010 | 202.90 € | **193.90 €** | 10.0 % | **5.1 %** | 163.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 83.50 € | **74.50 €** | 18.0 % | **5.3 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 91 | 197.00 € | **188.00 €** | 10.0 % | **5.0 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **45.90 €** | 36.8 % | **14.4 %** | 46.00 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 42.00 € | **33.00 €** | 41.9 % | **11.5 %** | 33.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 50.90 € | **42.00 €** | 44.2 % | **19.0 %** | 42.50 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 598.50 € | **589.90 €** | 8.0 % | **6.4 %** | 589.94 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 680.50 € | **671.90 €** | 10.0 % | **8.6 %** | 672.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 53.50 € | **44.90 €** | 43.6 % | **20.5 %** | 45.00 € | stávame sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 135.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L2622DW | 184.50 € | **175.90 €** | 10.3 % | **5.1 %** | 164.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 145.50 € | **136.90 €** | 24.9 % | **17.5 %** | 137.00 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 147.00 € | **138.50 €** | 11.6 % | **5.1 %** | 127.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC728D10 | 182.50 € | **174.00 €** | 10.2 % | **5.0 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C220 IP, 4MPx, WiFi, prísvit | 44.00 € | **35.50 €** | 31.2 % | **5.8 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Hurricane H7 Plus | 172.00 € | **163.50 €** | 15.5 % | **9.8 %** | 163.90 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT černé | 168.00 € | **159.50 €** | 15.7 % | **9.8 %** | 159.90 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 168.00 € | **159.50 €** | 15.7 % | **9.8 %** | 159.90 € | stávame sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 107.50 € | **99.00 €** | 14.8 % | **5.8 %** | 99.50 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 64.50 € | **56.00 €** | 46.2 % | **27.0 %** | 56.50 € | stávame sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **39.50 €** | 38.2 % | **14.0 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 39.90 € | **31.50 €** | 34.9 % | **6.5 %** | 31.90 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 326.00 € | **317.90 €** | 14.9 % | **12.1 %** | 318.00 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 41.00 € | **32.90 €** | 31.9 % | **5.8 %** | 32.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3HB1-4GG | 32.00 € | **23.90 €** | 42.8 % | **6.6 %** | 23.99 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 40.00 € | **31.90 €** | 47.6 % | **17.7 %** | 32.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 90.00 € | **81.90 €** | 17.4 % | **6.9 %** | 82.00 € | stávame sa najlacnejší |
| Electrolux EF167 | 21.99 € | **13.90 €** | 70.3 % | **7.6 %** | 14.00 € | stávame sa najlacnejší |
| HP LaserJet Pro MFP M234dw (6GW99F) | 176.90 € | **168.90 €** | 10.1 % | **5.1 %** | 130.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 177.50 € | **169.50 €** | 10.1 % | **5.1 %** | 141.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 499.50 € | **491.50 €** | 6.8 % | **5.1 %** | 463.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-830SB-BLK Century Signature | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 148.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX U-Box J42 Nano/bez OS | 176.90 € | **168.90 €** | 10.1 % | **5.1 %** | 156.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48S | 166.50 € | **158.50 €** | 10.3 % | **5.0 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **38.50 €** | 28.3 % | **6.2 %** | 37.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 29.50 € | **21.50 €** | 46.5 % | **6.8 %** | 20.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C113 IP, 3MPx, WiFi, prísvit, vn... | 38.90 € | **30.90 €** | 32.4 % | **5.2 %** | 30.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW5558E0 | 180.50 € | **172.50 €** | 10.1 % | **5.2 %** | 172.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **22.90 €** | 54.5 % | **14.5 %** | 23.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 104.50 € | **96.50 €** | 43.9 % | **32.8 %** | 96.81 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **14.00 €** | 70.3 % | **8.4 %** | 14.42 € | stávame sa najlacnejší |
| SAMSUNG Odyssey G40B (LS25BG400EUXEN) | 167.90 € | **160.00 €** | 10.2 % | **5.0 %** | 136.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 49.90 € | **42.00 €** | 64.6 % | **38.5 %** | 42.21 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 167.50 € | **159.90 €** | 11.0 % | **6.0 %** | 159.95 € | stávame sa najlacnejší |
| Naparovač odevov Neakasa Magic 1 | 88.00 € | **80.50 €** | 14.8 % | **5.0 %** | 70.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 33.50 € | **26.00 €** | 35.6 % | **5.2 %** | 26.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 41.50 € | **34.00 €** | 32.4 % | **8.4 %** | 34.20 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 75.50 € | **68.00 €** | 18.5 % | **6.7 %** | 68.50 € | stávame sa najlacnejší |
| XIAOMI Mesh System AX3000 NE (3-pack) | 165.90 € | **158.50 €** | 10.0 % | **5.1 %** | 128.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi N300 Extender (DAP-1325) | 26.90 € | **19.50 €** | 45.6 % | **5.6 %** | 17.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-L6 | 158.00 € | **150.90 €** | 10.0 % | **5.1 %** | 138.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **17.90 €** | 47.0 % | **5.3 %** | 18.00 € | stávame sa najlacnejší |
| Tefal HT461138 | 49.90 € | **42.90 €** | 22.2 % | **5.1 %** | 36.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 119.50 € | **112.50 €** | 11.9 % | **5.4 %** | 105.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EB61C4DB | 150.50 € | **143.50 €** | 10.1 % | **5.0 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 37.50 € | **30.50 €** | 29.5 % | **5.3 %** | 28.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 27.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 237.50 € | **230.50 €** | 8.2 % | **5.1 %** | 230.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 1836A | 265.90 € | **258.90 €** | 10.0 % | **7.1 %** | 259.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 8501A | 157.50 € | **150.50 €** | 10.0 % | **5.1 %** | 150.71 € | stávame sa najlacnejší |
| Ultimea Poseidon R3T Soundbar | 90.00 € | **83.00 €** | 14.9 % | **6.0 %** | 83.22 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 47.00 € | **40.00 €** | 58.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 99.00 € | **92.00 €** | 14.7 % | **6.6 %** | 92.39 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (biely) | 189.50 € | **182.50 €** | 15.1 % | **10.8 %** | 182.90 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 189.50 € | **182.50 €** | 15.1 % | **10.8 %** | 182.90 € | stávame sa najlacnejší |
| DOMO DO244SV | 147.90 € | **141.00 €** | 10.2 % | **5.0 %** | 132.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 37.90 € | **31.00 €** | 42.6 % | **16.6 %** | 31.50 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 505.90 € | **499.00 €** | 10.0 % | **8.5 %** | 499.50 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 48.50 € | **41.90 €** | 22.3 % | **5.6 %** | 41.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OfficeJet Pro 8132e AiO HP+ (40Q45B) | 149.50 € | **142.90 €** | 10.1 % | **5.2 %** | 97.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 Power 4+256GB Blue | 152.50 € | **145.90 €** | 10.0 % | **5.2 %** | 114.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO4931EA | 135.50 € | **128.90 €** | 10.4 % | **5.0 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Pink | 147.50 € | **140.90 €** | 10.2 % | **5.2 %** | 132.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 75.50 € | **68.90 €** | 15.2 % | **5.1 %** | 60.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **175.90 €** | 14.9 % | **10.7 %** | 176.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 195.50 € | **188.90 €** | 10.1 % | **6.4 %** | 189.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 35B1 | 143.00 € | **136.50 €** | 10.0 % | **5.0 %** | 126.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 69.50 € | **63.00 €** | 25.5 % | **13.8 %** | 63.19 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 71.00 € | **64.50 €** | 16.4 % | **5.7 %** | 64.69 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **41.50 €** | 54.5 % | **33.6 %** | 41.73 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 77.50 € | **71.00 €** | 15.4 % | **5.7 %** | 71.39 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 25.50 € | **19.00 €** | 55.1 % | **15.5 %** | 19.40 € | stávame sa najlacnejší |
| Herný volant PXN-V900 Gen2 | 99.50 € | **93.00 €** | 14.8 % | **7.3 %** | 93.44 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 47.50 € | **41.00 €** | 38.3 % | **19.3 %** | 41.50 € | stávame sa najlacnejší |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 99.50 € | **93.00 €** | 24.7 % | **16.5 %** | 93.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.00 €** | 15.2 % | **9.5 %** | 124.50 € | stávame sa najlacnejší |
| Xiaomi Watch S4 Silver | 144.90 € | **138.50 €** | 10.0 % | **5.1 %** | 117.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON SELPHY CP-1500 Pink | 147.90 € | **141.50 €** | 10.0 % | **5.2 %** | 139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO6164EA | 144.90 € | **138.50 €** | 10.2 % | **5.4 %** | 138.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 29.00 € | **22.90 €** | 37.2 % | **8.4 %** | 23.00 € | stávame sa najlacnejší |
| Baterie olověná 12V / 45 Ah MHPower 6-DMF-45 GEL Tra... | 113.00 € | **106.90 €** | 11.2 % | **5.2 %** | 89.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 84.00 € | **77.90 €** | 13.5 % | **5.3 %** | 74.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 75.00 € | **68.90 €** | 14.8 % | **5.5 %** | 69.00 € | stávame sa najlacnejší |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 121.00 € | **114.90 €** | 23.5 % | **17.3 %** | 115.00 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **15.90 €** | 48.6 % | **7.5 %** | 9.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Low Sugar Rice Cooker 3000WT | 128.90 € | **122.90 €** | 10.2 % | **5.1 %** | 73.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kodak Friendly Zoom FZ45 Black | 136.90 € | **130.90 €** | 10.0 % | **5.2 %** | 109.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-300 | 27.90 € | **21.90 €** | 35.7 % | **6.6 %** | 9.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1-Ss | 131.00 € | **125.00 €** | 10.0 % | **5.0 %** | 113.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW501815 | 136.90 € | **130.90 €** | 10.1 % | **5.2 %** | 121.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 53.90 € | **47.90 €** | 19.0 % | **5.7 %** | 44.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálne nočné videnie FNIRSI NVS-40 so záznamom v ... | 69.50 € | **63.50 €** | 15.3 % | **5.4 %** | 60.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **113.90 €** | 10.9 % | **5.3 %** | 112.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla 32E325BH 32" HD LED TV | 134.50 € | **128.50 €** | 10.0 % | **5.1 %** | 128.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 70.00 € | **64.00 €** | 15.0 % | **5.1 %** | 64.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **24.90 €** | 59.7 % | **28.7 %** | 24.91 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 40.50 € | **34.50 €** | 59.2 % | **35.6 %** | 34.65 € | stávame sa najlacnejší |
| Habotest HT2302 Digitálny tester zemného odporu | 116.00 € | **110.00 €** | 14.9 % | **8.9 %** | 110.19 € | stávame sa najlacnejší |
| Candy CDPH 2D947X | 322.50 € | **316.50 €** | 10.0 % | **8.0 %** | 316.70 € | stávame sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.90 € | stávame sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.00 € | **82.00 €** | 14.7 % | **6.9 %** | 82.50 € | stávame sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 74.00 € | **68.00 €** | 15.0 % | **5.7 %** | 68.50 € | stávame sa najlacnejší |
| Beko B3RCSO255S | 281.00 € | **275.00 €** | 10.0 % | **7.7 %** | 275.50 € | stávame sa najlacnejší |
| DOMO DO9252I | 257.90 € | **251.90 €** | 10.0 % | **7.4 %** | 252.00 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.90 € | **122.00 €** | 10.1 % | **5.0 %** | 111.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 72.90 € | **67.00 €** | 15.0 % | **5.7 %** | 67.39 € | stávame sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 108.90 € | **103.00 €** | 13.3 % | **7.2 %** | 103.50 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.90 € | **167.00 €** | 10.1 % | **6.3 %** | 167.50 € | stávame sa najlacnejší |
| TP-LINK RE200 AC750 WiFi Range Extender | 29.90 € | **24.00 €** | 30.8 % | **5.0 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision Solar 4G | 129.50 € | **123.90 €** | 10.0 % | **5.3 %** | 103.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 119.50 € | **113.90 €** | 10.5 % | **5.3 %** | 113.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 125.50 € | **119.90 €** | 14.9 % | **9.8 %** | 120.00 € | stávame sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 3-pack) | 120.50 € | **115.00 €** | 10.1 % | **5.0 %** | 93.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Flip 7, černý | 115.50 € | **110.00 €** | 10.3 % | **5.1 %** | 95.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera EMEET SmartCam S600L | 65.00 € | **59.50 €** | 14.7 % | **5.0 %** | 54.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 67.50 € | **62.00 €** | 50.4 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 119.00 € | **113.50 €** | 16.6 % | **11.2 %** | 113.79 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 34.50 € | **29.00 €** | 58.8 % | **33.5 %** | 29.50 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.00 €** | 37.8 % | **10.2 %** | 22.50 € | stávame sa najlacnejší |
| Tefal EY8328E0 | 124.50 € | **119.00 €** | 10.4 % | **5.6 %** | 119.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **27.00 €** | 59.9 % | **32.9 %** | 27.50 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.00 €** | 15.0 % | **14.2 %** | 799.50 € | stávame sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.90 € | **121.50 €** | 10.0 % | **5.4 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HNU61422B | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 93.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta HU4020F0 | 112.90 € | **107.50 €** | 10.4 % | **5.1 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 4+64GB Blue | 117.90 € | **112.50 €** | 10.3 % | **5.2 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Dvouplotýnka, G10047 dvouplotý | 125.90 € | **120.50 €** | 10.1 % | **5.4 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 122.90 € | **117.50 €** | 10.2 % | **5.3 %** | 106.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 99.90 € | **94.50 €** | 24.4 % | **17.6 %** | 94.52 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.90 € | **121.50 €** | 10.2 % | **5.5 %** | 121.90 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.90 € | **238.50 €** | 10.0 % | **7.6 %** | 238.90 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 28.90 € | **23.50 €** | 29.4 % | **5.2 %** | 22.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 274.90 € | **269.50 €** | 18.2 % | **15.8 %** | 269.68 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 63.00 € | **57.90 €** | 14.8 % | **5.5 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 21.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vodotesné puzdro Puluz (45 m) pre iPhone: na podvodn... | 64.90 € | **59.90 €** | 15.0 % | **6.1 %** | 60.00 € | stávame sa najlacnejší |
| CANON PIXMA TS7550i White | 108.50 € | **103.50 €** | 10.4 % | **5.3 %** | 69.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RY6555WH | 106.50 € | **101.50 €** | 10.5 % | **5.3 %** | 87.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal CY505EE0 | 110.50 € | **105.50 €** | 10.4 % | **5.4 %** | 96.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42326PC | 114.50 € | **109.50 €** | 10.2 % | **5.4 %** | 100.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DMS-108/E) | 106.50 € | **101.50 €** | 10.3 % | **5.2 %** | 92.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.50 € | **51.50 €** | 15.3 % | **5.1 %** | 44.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente G4 robotický vysavač | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 109.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-G4 | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 109.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **54.00 €** | 14.9 % | **5.2 %** | 53.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 41.90 € | **36.90 €** | 20.1 % | **5.8 %** | 36.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 105.50 € | **100.50 €** | 10.3 % | **5.1 %** | 100.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 183.50 € | **178.50 €** | 8.1 % | **5.2 %** | 178.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **10.50 €** | 56.3 % | **5.9 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 377.50 € | **372.50 €** | 7.7 % | **6.3 %** | 372.57 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **10.90 €** | 56.1 % | **7.0 %** | 11.00 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **25.90 €** | 59.7 % | **33.9 %** | 26.00 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **25.90 €** | 59.7 % | **33.9 %** | 26.00 € | stávame sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.2 % | **16.0 %** | 24.10 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 85.90 € | **80.90 €** | 15.1 % | **8.4 %** | 81.00 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **129.90 €** | 15.0 % | **10.7 %** | 130.00 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 251.90 € | **246.90 €** | 10.1 % | **7.9 %** | 247.00 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.50 €** | 46.8 % | **9.2 %** | 14.69 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA100 sada pre výmenu vy... | 24.00 € | **19.00 €** | 33.4 % | **5.6 %** | 19.19 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 103.00 € | **98.00 €** | 14.9 % | **9.3 %** | 98.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 153.00 € | **148.00 €** | 14.9 % | **11.1 %** | 148.39 € | stávame sa najlacnejší |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 110.50 € | **105.50 €** | 24.0 % | **18.4 %** | 105.90 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **20.50 €** | 59.8 % | **28.5 %** | 20.90 € | stávame sa najlacnejší |
| Dozownik karmy PETKIT Fresh Element SOLO 3L | 78.50 € | **73.50 €** | 14.7 % | **7.4 %** | 73.90 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **329.00 €** | 14.9 % | **13.2 %** | 329.50 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 104.90 € | **100.00 €** | 15.1 % | **9.8 %** | 100.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 86.90 € | **82.00 €** | 15.0 % | **8.5 %** | 82.39 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 52.90 € | **48.00 €** | 24.9 % | **13.3 %** | 48.19 € | stávame sa najlacnejší |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 18.90 € | **14.00 €** | 48.6 % | **10.1 %** | 14.19 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 23.90 € | **19.00 €** | 39.2 % | **10.7 %** | 19.50 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 259.90 € | **255.00 €** | 15.0 % | **12.8 %** | 255.39 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 54.50 € | **49.90 €** | 15.4 % | **5.6 %** | 49.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 31.50 € | **26.90 €** | 38.6 % | **18.3 %** | 26.91 € | stávame sa najlacnejší |
| Huanuo HNDS8 double monitor mount 13-32" | 56.50 € | **51.90 €** | 15.0 % | **5.6 %** | 52.00 € | stávame sa najlacnejší |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 100.50 € | **95.90 €** | 10.1 % | **5.0 %** | 80.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO3753EA | 96.50 € | **91.90 €** | 10.5 % | **5.2 %** | 85.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI MAG 274CXF | 100.50 € | **95.90 €** | 10.2 % | **5.2 %** | 95.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.90 €** | 14.9 % | **10.4 %** | 114.93 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 128.50 € | **123.90 €** | 10.4 % | **6.4 %** | 123.99 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 75.50 € | **70.90 €** | 15.4 % | **8.4 %** | 71.00 € | stávame sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **99.90 €** | 14.9 % | **9.8 %** | 100.00 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 81.50 € | **76.90 €** | 24.2 % | **17.2 %** | 77.00 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 70.50 € | **65.90 €** | 24.0 % | **15.9 %** | 66.00 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **80.90 €** | 14.9 % | **8.7 %** | 81.00 € | stávame sa najlacnejší |
| Kaon MZ-102 Skylink Viaccess Orca bezkartový systém | 115.50 € | **111.00 €** | 9.3 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 244.00 € | **239.50 €** | 7.0 % | **5.0 %** | 228.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 99.00 € | **94.50 €** | 10.0 % | **5.0 %** | 83.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 45.00 € | **40.50 €** | 17.4 % | **5.7 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovačka Vacu Power 500 | 90.50 € | **86.00 €** | 10.6 % | **5.1 %** | 83.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 35.50 € | **31.00 €** | 20.4 % | **5.1 %** | 30.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal B864SA74 | 103.00 € | **98.50 €** | 10.1 % | **5.3 %** | 98.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 55.00 € | **50.50 €** | 14.9 % | **5.5 %** | 50.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 54.00 € | **49.50 €** | 19.3 % | **9.4 %** | 49.57 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **26.00 €** | 59.0 % | **35.5 %** | 26.15 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 20.50 € | **16.00 €** | 45.8 % | **13.8 %** | 16.17 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.50 € | **48.00 €** | 16.0 % | **6.1 %** | 48.19 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 110.50 € | **106.00 €** | 14.9 % | **10.2 %** | 106.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.50 € | **58.00 €** | 14.9 % | **6.6 %** | 58.39 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 144.50 € | **140.00 €** | 15.2 % | **11.6 %** | 140.39 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 104.50 € | **100.00 €** | 15.1 % | **10.1 %** | 100.39 € | stávame sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **82.50 €** | 15.0 % | **9.1 %** | 82.90 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 31.50 € | **27.00 €** | 54.0 % | **32.0 %** | 27.47 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 27.50 € | **23.00 €** | 39.3 % | **16.5 %** | 23.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.50 € | **26.00 €** | 37.5 % | **17.2 %** | 26.50 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **178.00 €** | 15.0 % | **12.2 %** | 178.50 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 21.50 € | **17.00 €** | 53.1 % | **21.0 %** | 17.50 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 128.50 € | **124.00 €** | 10.1 % | **6.3 %** | 124.50 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 210.50 € | **206.00 €** | 10.0 % | **7.7 %** | 206.50 € | stávame sa najlacnejší |
| TEFAL GC 305012 | 95.90 € | **91.50 €** | 10.2 % | **5.1 %** | 76.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO4B25EA | 96.90 € | **92.50 €** | 10.4 % | **5.4 %** | 89.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO331L | 106.90 € | **102.50 €** | 10.0 % | **5.5 %** | 101.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 84.90 € | **80.50 €** | 15.0 % | **9.0 %** | 80.89 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 82.90 € | **78.50 €** | 15.2 % | **9.1 %** | 78.89 € | stávame sa najlacnejší |
| SONY WFC710N Black | 70.90 € | **66.50 €** | 14.5 % | **7.4 %** | 66.90 € | stávame sa najlacnejší |
| SONY WFC710N Blue | 70.90 € | **66.50 €** | 14.5 % | **7.4 %** | 66.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 14.90 € | **10.50 €** | 49.7 % | **5.5 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 13.90 € | **9.50 €** | 56.1 % | **6.7 %** | 9.60 € | stávame sa najlacnejší |
| TESLA AeroStar T300 | 59.90 € | **55.50 €** | 13.5 % | **5.1 %** | 49.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 49.90 € | **45.50 €** | 15.2 % | **5.0 %** | 45.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.50 €** | 54.2 % | **32.3 %** | 26.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.50 €** | 59.0 % | **33.9 %** | 23.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 24.90 € | **20.50 €** | 59.2 % | **31.0 %** | 20.90 € | stávame sa najlacnejší |
| AMIKO Mini HD265 | 50.00 € | **45.90 €** | 14.6 % | **5.2 %** | 42.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 36.00 € | **31.90 €** | 19.6 % | **6.0 %** | 29.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrý LED pásik TP-Link Tapo L900-5 5m, 13.5W, 230V... | 21.00 € | **16.90 €** | 30.7 % | **5.2 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 29.00 € | **24.90 €** | 25.1 % | **7.5 %** | 25.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **8.40 €** | 56.6 % | **5.2 %** | 8.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 83.00 € | **78.90 €** | 20.8 % | **14.9 %** | 79.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K4 ruční, bezdrátový set | 122.90 € | **118.90 €** | 8.7 % | **5.2 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax PartyGo1 Play | 84.50 € | **80.50 €** | 10.3 % | **5.1 %** | 49.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell „Standard Day“ pre OSMO NANO –... | 46.90 € | **42.90 €** | 15.2 % | **5.3 %** | 19.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 2-pack) | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 63.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV4111E0 | 86.00 € | **82.00 €** | 10.1 % | **5.0 %** | 72.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SALENTE SuChef | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 72.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 62.50 € | **58.50 €** | 12.4 % | **5.2 %** | 51.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 10T LTE | 94.90 € | **90.90 €** | 10.0 % | **5.4 %** | 84.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **45.50 €** | 15.3 % | **6.0 %** | 39.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 59.90 € | **55.90 €** | 13.1 % | **5.5 %** | 51.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 40.90 € | **36.90 €** | 17.5 % | **6.0 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI DSO-TC3 SigGen 3-v-1 tester tranzistorov – ru... | 50.50 € | **46.50 €** | 14.7 % | **5.6 %** | 42.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 19.00 € | **15.00 €** | 33.7 % | **5.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RO 3985 EA | 76.00 € | **72.00 €** | 10.9 % | **5.1 %** | 70.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 81.90 € | **77.90 €** | 10.7 % | **5.3 %** | 77.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT 420 Android TV box | 81.50 € | **77.50 €** | 10.6 % | **5.2 %** | 76.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **42.90 €** | 15.3 % | **5.5 %** | 42.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 81.90 € | **77.90 €** | 10.7 % | **5.3 %** | 77.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IB5100E0 | 93.90 € | **89.90 €** | 10.0 % | **5.4 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 47.90 € | **43.90 €** | 15.0 % | **5.4 %** | 43.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny kliešťový merač Habotest HT208D | 47.50 € | **43.50 €** | 15.1 % | **5.4 %** | 43.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit 52127 Set Clean Twist M Ergo | 43.90 € | **39.90 €** | 15.6 % | **5.1 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 61.50 € | **57.50 €** | 41.6 % | **32.4 %** | 57.55 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.50 € | **9.50 €** | 55.0 % | **9.1 %** | 9.60 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 55.90 € | **51.90 €** | 15.4 % | **7.1 %** | 52.00 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **18.90 €** | 54.6 % | **27.6 %** | 19.00 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 108.90 € | **104.90 €** | 15.0 % | **10.7 %** | 105.00 € | stávame sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 421.50 € | **417.50 €** | 13.5 % | **12.4 %** | 417.60 € | stávame sa najlacnejší |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 98.90 € | **94.90 €** | 21631.5 % | **20752.6 %** | 95.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **16.90 €** | 43.0 % | **15.7 %** | 17.00 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.90 € | **128.90 €** | 10.3 % | **7.0 %** | 129.00 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 22.8 % | **11.1 %** | 38.17 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 14.00 € | **10.00 €** | 48.2 % | **5.9 %** | 10.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 21.00 € | **17.00 €** | 36.3 % | **10.3 %** | 17.29 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **14.50 €** | 51.0 % | **18.4 %** | 14.87 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 59.50 € | **55.50 €** | 14.7 % | **7.0 %** | 55.89 € | stávame sa najlacnejší |
| Adapter, quick release MOZA RACING RS07 for R21/R16/... | 53.50 € | **49.50 €** | 15.3 % | **6.6 %** | 49.90 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 26.00 € | **22.00 €** | 54.3 % | **30.6 %** | 22.45 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **31.00 €** | 37.3 % | **21.6 %** | 31.50 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 102.00 € | **98.00 €** | 10.0 % | **5.7 %** | 98.50 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.90 € | **81.00 €** | 10.2 % | **5.1 %** | 81.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.90 € | **62.00 €** | 20.2 % | **13.1 %** | 62.08 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 251.90 € | **248.00 €** | 10.2 % | **8.5 %** | 248.50 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.90 € | **38.00 €** | 17.8 % | **6.8 %** | 38.09 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.90 € | **24.00 €** | 42.8 % | **22.9 %** | 24.43 € | stávame sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 447.90 € | **444.00 €** | 5.9 % | **5.0 %** | 441.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 342.50 € | **338.90 €** | 6.9 % | **5.8 %** | 339.00 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 28.50 € | **24.90 €** | 20.9 % | **5.6 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mobilný ovládač GameSir X5s (čierny) | 45.50 € | **41.90 €** | 14.5 % | **5.5 %** | 38.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 40.50 € | **36.90 €** | 15.5 % | **5.2 %** | 36.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 42.50 € | **38.90 €** | 15.7 % | **5.9 %** | 38.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 50.50 € | **46.90 €** | 24.4 % | **15.5 %** | 47.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 4.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 110.50 € | **106.90 €** | 8.6 % | **5.1 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6840E0 | 76.50 € | **72.90 €** | 10.7 % | **5.5 %** | 69.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 75.00 € | **71.50 €** | 10.2 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Flex 2 bílá | 78.00 € | **74.50 €** | 10.1 % | **5.2 %** | 62.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Flex 2 černá | 78.00 € | **74.50 €** | 10.1 % | **5.2 %** | 62.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Memory card Samsung EVO Plus microSD 2021 64GB (MB-M... | 47.00 € | **43.50 €** | 14.4 % | **5.9 %** | 35.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 63.00 € | **59.50 €** | 11.2 % | **5.0 %** | 56.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stolný statív Puluz PU3070GT | 44.00 € | **40.50 €** | 15.1 % | **5.9 %** | 40.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 32.50 € | **29.00 €** | 43.8 % | **28.3 %** | 29.08 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 35.50 € | **32.00 €** | 19.8 % | **8.0 %** | 32.21 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **13.50 €** | 47.5 % | **17.1 %** | 13.84 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **13.50 €** | 47.5 % | **17.1 %** | 13.84 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 161.00 € | **157.50 €** | 10.0 % | **7.6 %** | 157.88 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 245.50 € | **242.00 €** | 15.0 % | **13.3 %** | 242.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 94.00 € | **90.50 €** | 14.9 % | **10.6 %** | 90.89 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 170.00 € | **166.50 €** | 14.9 % | **12.5 %** | 166.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 119.00 € | **115.50 €** | 14.9 % | **11.5 %** | 115.89 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 171.00 € | **167.50 €** | 7.8 % | **5.6 %** | 167.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **22.50 €** | 42.8 % | **23.6 %** | 22.90 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 117.50 € | **114.00 €** | 15.2 % | **11.8 %** | 114.40 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 131.50 € | **128.00 €** | 15.1 % | **12.1 %** | 128.49 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.00 €** | 38.8 % | **19.0 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 27.50 € | **24.00 €** | 34.6 % | **17.5 %** | 24.50 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.50 € | **86.00 €** | 14.8 % | **10.4 %** | 86.50 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.50 € | **128.00 €** | 10.1 % | **7.2 %** | 128.50 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **101.00 €** | 15.1 % | **11.3 %** | 101.50 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 22.50 € | **19.00 €** | 53.8 % | **29.9 %** | 19.50 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **45.00 €** | 15.0 % | **6.7 %** | 45.50 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **12.50 €** | 35.1 % | **5.6 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO MGC20130BFB | 79.90 € | **76.50 €** | 10.1 % | **5.4 %** | 76.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač LCR Uni-T UT612 | 137.90 € | **134.50 €** | 15.1 % | **12.2 %** | 134.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.90 € | **70.50 €** | 14.9 % | **9.7 %** | 70.89 € | stávame sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 68.90 € | **65.50 €** | 10.5 % | **5.0 %** | 65.90 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.90 € | **131.50 €** | 10.2 % | **7.4 %** | 131.90 € | stávame sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 123.90 € | **120.50 €** | 10.2 % | **7.2 %** | 120.90 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **11.50 €** | 51.8 % | **17.2 %** | 11.63 € | stávame sa najlacnejší |
| Súprava príslušenstva pre vysávač MOVA P50 PU, P50 U | 42.90 € | **39.50 €** | 15.5 % | **6.3 %** | 33.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C54 AC1200 Router | 29.90 € | **26.50 €** | 19.2 % | **5.6 %** | 22.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.90 € | **18.50 €** | 24.8 % | **5.4 %** | 16.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.50 €** | 18.5 % | **8.7 %** | 37.67 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 40.90 € | **37.50 €** | 15.4 % | **5.8 %** | 37.89 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 35.90 € | **32.50 €** | 22.3 % | **10.7 %** | 32.90 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **26.50 €** | 50.2 % | **33.2 %** | 26.90 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 11.00 € | **7.80 €** | 54.5 % | **9.5 %** | 7.90 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - black | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 239.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - white | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 270.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Monitor srdcovej frekvencie na hrudnom páse Cycplus H2 | 40.00 € | **36.90 €** | 14.8 % | **5.9 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 670NC white | 64.00 € | **60.90 €** | 10.7 % | **5.3 %** | 60.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **35.90 €** | 14.9 % | **5.8 %** | 36.00 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.00 € | **58.90 €** | 15.0 % | **9.3 %** | 59.00 € | stávame sa najlacnejší |
| Ivo DVB-26 zesilovač 26dB (5-12V) | 27.00 € | **23.90 €** | 34.3 % | **18.8 %** | 24.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 16.00 € | **12.90 €** | 48.0 % | **19.3 %** | 12.96 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 17.00 € | **13.90 €** | 40.2 % | **14.6 %** | 14.00 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 71.00 € | **67.90 €** | 14.6 % | **9.6 %** | 68.00 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **117.90 €** | 14.9 % | **11.9 %** | 118.00 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **9.90 €** | 38.1 % | **5.2 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka IMOU CE2P, sada 4 ks | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 černá | 63.90 € | **60.90 €** | 10.6 % | **5.4 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 modrá | 63.90 € | **60.90 €** | 10.6 % | **5.4 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 36.50 € | **33.50 €** | 15.3 % | **5.9 %** | 22.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné stropné svietidlo CW Yeelight Meteor C300. | 33.90 € | **30.90 €** | 15.4 % | **5.2 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2904/04 | 69.50 € | **66.50 €** | 10.2 % | **5.5 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 30.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi V89 (nerezová oceľ, zlatá... | 33.50 € | **30.50 €** | 15.5 % | **5.2 %** | 26.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Profi XL + náhrada Static Plus | 62.90 € | **59.90 €** | 10.7 % | **5.4 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN-F16 Flight Joystick for PC | 34.50 € | **31.50 €** | 15.3 % | **5.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štúdiové slúchadlá Maono MH700 (čierne) | 34.90 € | **31.90 €** | 15.2 % | **5.3 %** | 31.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **64.90 €** | 10.1 % | **5.2 %** | 64.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 34.50 € | **31.50 €** | 15.1 % | **5.1 %** | 31.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 35.50 € | **32.50 €** | 15.3 % | **5.6 %** | 32.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO464FR | 62.90 € | **59.90 €** | 10.4 % | **5.1 %** | 59.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 62.50 € | **59.50 €** | 10.5 % | **5.2 %** | 59.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 35.50 € | **32.50 €** | 15.6 % | **5.9 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.90 € | **83.90 €** | 15.0 % | **11.0 %** | 84.00 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.90 € | **126.90 €** | 10.2 % | **7.7 %** | 127.00 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 92.90 € | **89.90 €** | 15.0 % | **11.3 %** | 90.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 35.00 € | **32.00 €** | 43.9 % | **31.5 %** | 32.10 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.90 €** | 15.0 % | **10.0 %** | 66.00 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 17.00 € | **14.00 €** | 42.8 % | **17.6 %** | 14.21 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **29.50 €** | 59.9 % | **45.2 %** | 29.72 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **45.00 €** | 14.5 % | **7.4 %** | 45.25 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 90.00 € | **87.00 €** | 14.8 % | **11.0 %** | 87.39 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT312A | 284.00 € | **281.00 €** | 15.0 % | **13.8 %** | 281.39 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **22.50 €** | 37.8 % | **21.5 %** | 22.90 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR černé | 197.50 € | **194.50 €** | 17.5 % | **15.7 %** | 194.90 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 197.50 € | **194.50 €** | 17.5 % | **15.7 %** | 194.90 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-6 litinové neoprenové HE... | 37.50 € | **34.50 €** | 22.9 % | **13.1 %** | 34.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 3601 | 101.50 € | **98.50 €** | 10.0 % | **6.8 %** | 98.90 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **47.00 €** | 14.6 % | **7.7 %** | 47.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 3 zásuvky IP44, 3 x 2... | 24.00 € | **21.00 €** | 36.3 % | **19.2 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **19.00 €** | 54.3 % | **33.3 %** | 19.50 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 490.00 € | **487.00 €** | 10.0 % | **9.3 %** | 487.50 € | stávame sa najlacnejší |
| Electrolux E200SM | 19.99 € | **17.00 €** | 35.1 % | **14.9 %** | 17.50 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.99 € | **17.00 €** | 60.1 % | **36.2 %** | 17.50 € | stávame sa najlacnejší |
| Rowenta 3v1 RH5A32E0 | 119.90 € | **117.00 €** | 10.1 % | **7.4 %** | 117.50 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **83.00 €** | 15.1 % | **11.2 %** | 83.50 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 9.40 € | **6.50 €** | 54.1 % | **6.5 %** | 6.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **10.00 €** | 47.3 % | **14.2 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **13.00 €** | 37.7 % | **12.6 %** | 13.50 € | stávame sa najlacnejší |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 12.90 € | **10.00 €** | 61.4 % | **25.1 %** | 10.50 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.90 € | **56.00 €** | 10.5 % | **5.1 %** | 56.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 18.90 € | **16.00 €** | 37.0 % | **15.9 %** | 16.17 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 24.90 € | **22.00 €** | 55.2 % | **37.2 %** | 22.20 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **36.00 €** | 46.1 % | **35.2 %** | 36.47 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **14.00 €** | 38.2 % | **14.5 %** | 14.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **22.00 €** | 59.2 % | **40.6 %** | 22.50 € | stávame sa najlacnejší |
| Priemyselná infračervená termokamera Habotest HT820 | 273.90 € | **271.00 €** | 15.0 % | **13.8 %** | 271.37 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 12.50 € | **9.80 €** | 49.0 % | **16.8 %** | 9.90 € | stávame sa najlacnejší |
| Strong LEAP-AIR Google TV HDMI TV stick | 61.50 € | **58.90 €** | 10.3 % | **5.6 %** | 41.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3751i White | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 35.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 730BT Beige | 58.50 € | **55.90 €** | 10.5 % | **5.6 %** | 46.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 730BT Blue | 58.50 € | **55.90 €** | 10.5 % | **5.6 %** | 46.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Vědro Profi Compact + mop P | 52.50 € | **49.90 €** | 11.0 % | **5.5 %** | 42.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Flex 2 modrá | 59.50 € | **56.90 €** | 10.3 % | **5.5 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovladač 4-kan. k pohonu vrat IN SL-600, 1000... | 28.50 € | **25.90 €** | 16.1 % | **5.5 %** | 19.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3752i Blue | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 41.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Aura 5 ANC | 53.50 € | **50.90 €** | 10.9 % | **5.5 %** | 47.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha GO Škoda Rally | 59.50 € | **56.90 €** | 10.1 % | **5.3 %** | 53.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **57.90 €** | 10.2 % | **5.5 %** | 55.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maono PD100 Microphone Black | 30.50 € | **27.90 €** | 15.1 % | **5.3 %** | 26.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 31.50 € | **28.90 €** | 15.3 % | **5.7 %** | 28.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **35.90 €** | 55.1 % | **44.6 %** | 35.99 € | stávame sa najlacnejší |
| Joystick PXN-2113 PRO Ovládanie letu PC | 31.50 € | **28.90 €** | 14.6 % | **5.1 %** | 28.99 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 60.50 € | **57.90 €** | 15.0 % | **10.1 %** | 58.00 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 23.50 € | **20.90 €** | 22.9 % | **9.3 %** | 21.00 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **30.90 €** | 14.5 % | **5.6 %** | 31.00 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 42.50 € | **39.90 €** | 15.1 % | **8.1 %** | 40.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **19.90 €** | 55.2 % | **37.2 %** | 20.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100(1-pack) regulácia 23... | 13.50 € | **10.90 €** | 31.3 % | **6.0 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.90 €** | 56.5 % | **31.9 %** | 13.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **11.90 €** | 37.7 % | **13.0 %** | 12.00 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 160.50 € | **157.90 €** | 10.2 % | **8.4 %** | 158.00 € | stávame sa najlacnejší |
| Tefal FW402HE0 | 131.50 € | **128.90 €** | 10.4 % | **8.2 %** | 129.00 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **70.90 €** | 10.3 % | **6.4 %** | 71.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **12.50 €** | 28.9 % | **7.4 %** | 7.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 50.00 € | **47.50 €** | 11.1 % | **5.5 %** | 44.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 31.00 € | **28.50 €** | 14.6 % | **5.4 %** | 26.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 26.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa DarkFlash B275 (čierna) | 31.00 € | **28.50 €** | 14.4 % | **5.1 %** | 27.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 34.00 € | **31.50 €** | 14.3 % | **5.9 %** | 31.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko Mezikus PCSKM | 60.00 € | **57.50 €** | 10.0 % | **5.5 %** | 57.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko Mezikus PCSKW | 60.00 € | **57.50 €** | 10.0 % | **5.5 %** | 57.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **10.00 €** | 47.9 % | **18.3 %** | 10.01 € | stávame sa najlacnejší |
| Slúchadlá QCY HT18 LITE Titanium TWS | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.53 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 55.00 € | **52.50 €** | 39.6 % | **33.2 %** | 52.58 € | stávame sa najlacnejší |
| Maono BA92 Boom Arm Black | 50.50 € | **48.00 €** | 15.2 % | **9.5 %** | 48.08 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 12.00 € | **9.50 €** | 49.2 % | **18.1 %** | 9.60 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 23.50 € | **21.00 €** | 38.1 % | **23.5 %** | 21.13 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **15.00 €** | 42.8 % | **22.4 %** | 15.13 € | stávame sa najlacnejší |
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 48.50 € | **46.00 €** | 22.8 % | **16.5 %** | 46.18 € | stávame sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 63.00 € | **60.50 €** | 24.0 % | **19.1 %** | 60.69 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 16.50 € | **14.00 €** | 24.8 % | **5.9 %** | 14.19 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 44.9 % | **30.1 %** | 22.20 € | stávame sa najlacnejší |
| Blesk GODOX AD600B TTL Wistro s uchytením Bowens | 676.00 € | **673.50 €** | 15.0 % | **14.5 %** | 673.70 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.50 € | **105.00 €** | 10.2 % | **7.6 %** | 105.21 € | stávame sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 16.50 € | **14.00 €** | 54.4 % | **31.0 %** | 14.27 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **11.50 €** | 36.5 % | **12.1 %** | 11.90 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.50 €** | 52.6 % | **30.1 %** | 14.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **12.00 €** | 58.4 % | **31.1 %** | 12.47 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.50 € | **64.00 €** | 10.6 % | **6.4 %** | 64.50 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 139.50 € | **137.00 €** | 10.4 % | **8.4 %** | 137.50 € | stávame sa najlacnejší |
| Double monitor mount 13-30" Huanuo HNDS6 | 49.50 € | **47.00 €** | 15.2 % | **9.4 %** | 47.50 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.00 €** | 14.7 % | **10.0 %** | 59.50 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **65.00 €** | 15.2 % | **10.9 %** | 65.50 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (žltý) | 161.50 € | **159.00 €** | 15.1 % | **13.4 %** | 159.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.00 €** | 14.5 % | **8.1 %** | 42.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.00 €** | 14.5 % | **8.1 %** | 42.50 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **37.00 €** | 15.3 % | **8.0 %** | 37.50 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **103.00 €** | 15.0 % | **12.2 %** | 103.50 € | stávame sa najlacnejší |
| Ovládacia páka lietadla MOZA RACING MHG | 111.50 € | **109.00 €** | 14.9 % | **12.3 %** | 109.50 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **224.00 €** | 15.0 % | **13.7 %** | 224.50 € | stávame sa najlacnejší |
| ETA Dita 1603 90000 bílá | 19.99 € | **17.50 €** | 25.9 % | **10.2 %** | 17.90 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 12.90 € | **10.50 €** | 29.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L630 GU10, 3,7W, 230V, c... | 12.00 € | **9.60 €** | 32.2 % | **5.8 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 13.90 € | **11.50 €** | 49.7 % | **23.8 %** | 11.78 € | stávame sa najlacnejší |
| JBL Wave Buds 2 černá | 49.90 € | **47.50 €** | 10.5 % | **5.2 %** | 37.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP DeskJet 2920 (89F97B) | 50.90 € | **48.50 €** | 10.3 % | **5.1 %** | 40.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer VR300 VDSL Router | 53.90 € | **51.50 €** | 10.4 % | **5.4 %** | 45.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 28.90 € | **26.50 €** | 15.1 % | **5.6 %** | 22.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO 717 MF | 48.90 € | **46.50 €** | 10.5 % | **5.1 %** | 44.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo HDO, aktivní venkovní anténa | 54.90 € | **52.50 €** | 10.4 % | **5.6 %** | 50.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2877/05 | 49.90 € | **47.50 €** | 10.5 % | **5.2 %** | 46.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (biele) | 25.90 € | **23.50 €** | 15.9 % | **5.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 24.90 € | **22.50 €** | 25.0 % | **13.0 %** | 22.65 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.90 €** | 55.6 % | **7.4 %** | 4.99 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.00 € | **25.90 €** | 14.2 % | **5.7 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hlavná kefa pre vysávač MOVA Z50 Ultra | 27.00 € | **24.90 €** | 14.8 % | **5.9 %** | 23.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 26.00 € | **23.90 €** | 14.6 % | **5.4 %** | 23.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **25.90 €** | 14.5 % | **5.9 %** | 25.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 27011-56 | 47.00 € | **44.90 €** | 10.1 % | **5.2 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **31.90 €** | 47.3 % | **38.2 %** | 31.96 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 26.00 € | **23.90 €** | 53.8 % | **41.4 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne | 30.00 € | **27.90 €** | 14.4 % | **6.4 %** | 28.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 Gold | 30.00 € | **27.90 €** | 14.4 % | **6.4 %** | 28.00 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **126.90 €** | 14.9 % | **13.1 %** | 127.00 € | stávame sa najlacnejší |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 72.00 € | **69.90 €** | 15.0 % | **11.7 %** | 70.00 € | stávame sa najlacnejší |
| ETA 5180 91010 sklo | 13.99 € | **11.90 €** | 27.2 % | **8.2 %** | 12.00 € | stávame sa najlacnejší |
| Alligator 3008G | 45.00 € | **43.00 €** | 10.1 % | **5.2 %** | 22.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 482.90 € | **480.90 €** | 5.5 % | **5.1 %** | 463.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **23.50 €** | 15.8 % | **6.7 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **23.00 €** | 14.5 % | **5.3 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff S60ZBTPF Inteligentná zásuvka ZigBee (2ks) | 26.50 € | **24.50 €** | 14.6 % | **6.0 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Pack 6 MAXTRApro PO 2024 | 39.50 € | **37.50 €** | 11.1 % | **5.5 %** | 26.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Beige | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 28.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Blue | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 28.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Lavender | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 28.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT White | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 28.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DMR7 směrový, pro fotoaparáty, TRS | 73.50 € | **71.50 €** | 8.5 % | **5.5 %** | 61.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy PILOT Q2 WiFi | 46.50 € | **44.50 €** | 10.5 % | **5.7 %** | 38.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **39.90 €** | 10.6 % | **5.3 %** | 35.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAT3509GY Bezdrátová sluchátka | 46.90 € | **44.90 €** | 10.4 % | **5.7 %** | 41.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 21.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-PA4010 Powerline Starter Kit | 45.50 € | **43.50 €** | 10.1 % | **5.2 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE500X AX1500 WiFi 6 Extender | 41.90 € | **39.90 €** | 10.3 % | **5.1 %** | 36.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **32.90 €** | 11.8 % | **5.4 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO5 Blue | 48.50 € | **46.50 €** | 10.3 % | **5.7 %** | 44.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 18.50 € | **16.50 €** | 20.3 % | **7.3 %** | 14.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar SB-820BT Soundbar | 35.50 € | **33.50 €** | 11.5 % | **5.2 %** | 31.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 12.50 € | **10.50 €** | 29.5 % | **8.7 %** | 9.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 12.50 € | **10.50 €** | 28.2 % | **7.6 %** | 10.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CFT610/5X/1 | 49.50 € | **47.50 €** | 10.1 % | **5.7 %** | 47.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.50 € | **25.50 €** | 15.1 % | **6.7 %** | 25.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 25.50 € | **23.50 €** | 15.5 % | **6.4 %** | 23.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42602S | 40.50 € | **38.50 €** | 10.9 % | **5.5 %** | 38.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FFC026X | 41.50 € | **39.50 €** | 10.8 % | **5.5 %** | 39.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.50 € | **32.50 €** | 11.5 % | **5.0 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 25.50 € | **23.50 €** | 14.3 % | **5.3 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26810-56/RH | 46.50 € | **44.50 €** | 10.2 % | **5.5 %** | 44.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-2 litinové neoprenové HE... | 14.50 € | **12.50 €** | 24.0 % | **6.9 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 36.00 € | **34.00 €** | 18.0 % | **11.5 %** | 34.09 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **13.50 €** | 49.3 % | **30.0 %** | 13.59 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **19.90 €** | 48.6 % | **35.0 %** | 20.00 € | stávame sa najlacnejší |
| Inteligentná zástrčka WiFi Gosund SP111 3680W 16A, Tuya | 11.90 € | **9.90 €** | 34.2 % | **11.6 %** | 10.00 € | stávame sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 110.90 € | **108.90 €** | 8.4 % | **6.4 %** | 109.00 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 180.90 € | **178.90 €** | 10.2 % | **8.9 %** | 179.00 € | stávame sa najlacnejší |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 167.50 € | **165.50 €** | 8.2 % | **6.9 %** | 165.64 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 18.50 € | **16.50 €** | 40.3 % | **25.1 %** | 16.69 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 29.50 € | **27.50 €** | 21.9 % | **13.6 %** | 27.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 33.50 € | **31.50 €** | 17.4 % | **10.4 %** | 31.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.50 €** | 15.4 % | **8.5 %** | 31.69 € | stávame sa najlacnejší |
| FENDA F&D A180X | 42.50 € | **40.50 €** | 11.1 % | **5.9 %** | 40.73 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 18.00 € | **16.00 €** | 36.8 % | **21.6 %** | 16.25 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 163.00 € | **161.00 €** | 10.0 % | **8.7 %** | 161.30 € | stávame sa najlacnejší |
| G3Ferrari G10152 horkovzdušná trouba | 148.50 € | **146.50 €** | 10.3 % | **8.8 %** | 146.80 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 20.50 € | **18.50 €** | 17.8 % | **6.3 %** | 18.83 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **24.50 €** | 54.7 % | **43.0 %** | 24.84 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.50 €** | 55.4 % | **42.7 %** | 22.87 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.50 € | **87.50 €** | 14.8 % | **12.2 %** | 87.89 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 24.50 € | **22.50 €** | 15.5 % | **6.1 %** | 22.89 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.50 € | **123.50 €** | 15.2 % | **13.3 %** | 123.89 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.50 €** | 15.0 % | **13.9 %** | 207.90 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 15.50 € | **13.50 €** | 42.6 % | **24.2 %** | 13.90 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.50 €** | 10.0 % | **8.4 %** | 132.90 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.50 €** | 10.0 % | **6.7 %** | 64.90 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.50 €** | 15.0 % | **13.8 %** | 203.90 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **106.50 €** | 14.9 % | **12.8 %** | 106.90 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **14.00 €** | 38.4 % | **21.1 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.00 €** | 53.7 % | **39.7 %** | 20.50 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.00 €** | 53.7 % | **39.7 %** | 20.50 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 28.00 € | **26.00 €** | 15.0 % | **6.8 %** | 26.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 28.00 € | **26.00 €** | 14.7 % | **6.5 %** | 26.50 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **24.00 €** | 15.1 % | **6.2 %** | 24.50 € | stávame sa najlacnejší |
| Herná náhlavná súprava ONIKUMA B5 (ružová) | 16.00 € | **14.00 €** | 25.8 % | **10.1 %** | 14.50 € | stávame sa najlacnejší |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 124.00 € | **122.00 €** | 16.5 % | **14.6 %** | 122.50 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 72.90 € | **71.00 €** | 42.1 % | **38.4 %** | 71.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 68.90 € | **67.00 €** | 9.5 % | **6.5 %** | 67.39 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 120.90 € | **119.00 €** | 12.8 % | **11.0 %** | 119.39 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 11.50 € | **9.60 €** | 57.1 % | **31.2 %** | 9.61 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| TP-LINK RE305 AC1200 WiFi Range Extender | 37.90 € | **36.00 €** | 10.8 % | **5.2 %** | 32.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.90 € | **22.00 €** | 14.4 % | **5.3 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.90 € | **36.00 €** | 10.7 % | **5.1 %** | 35.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 19.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak mikrofónu Maono BA37 | 29.90 € | **28.00 €** | 15.3 % | **8.0 %** | 28.32 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 56.90 € | **55.00 €** | 10.0 % | **6.3 %** | 55.39 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.00 €** | 15.3 % | **11.7 %** | 59.50 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.90 € | **42.00 €** | 15.4 % | **10.4 %** | 42.50 € | stávame sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.00 €** | 15.2 % | **11.2 %** | 53.50 € | stávame sa najlacnejší |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 50.90 € | **49.00 €** | 15.1 % | **10.8 %** | 49.50 € | stávame sa najlacnejší |
| Multifunkčná baterka SuperFire G20, 470 lm, USB | 20.90 € | **19.00 €** | 22.2 % | **11.1 %** | 19.50 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 467.90 € | **466.00 €** | 8.1 % | **7.7 %** | 466.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 901.90 € | **900.00 €** | 14.6 % | **14.4 %** | 900.39 € | stávame sa najlacnejší |
| SONY WHCH520L.CE7 modrá | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic sluchátka RZ-B110W | 36.50 € | **34.90 €** | 10.2 % | **5.4 %** | 27.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.90 €** | 10.9 % | **6.0 %** | 28.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Pins 4 Black | 32.50 € | **30.90 €** | 11.3 % | **5.9 %** | 25.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **39.90 €** | 10.0 % | **5.8 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2020E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2022E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 32.50 € | **30.90 €** | 11.5 % | **6.0 %** | 27.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.50 € | **20.90 €** | 15.0 % | **6.9 %** | 19.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 57.50 € | **55.90 €** | 8.7 % | **5.6 %** | 54.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Powerstation Uni FIXPOS-U-BK | 34.50 € | **32.90 €** | 10.3 % | **5.2 %** | 31.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200CT  bezdrátová sluchátka | 38.50 € | **36.90 €** | 10.4 % | **5.8 %** | 35.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **16.90 €** | 15.3 % | **5.4 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **16.90 €** | 15.3 % | **5.4 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 23.50 € | **21.90 €** | 14.7 % | **6.9 %** | 21.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal KO5S08E0 | 35.50 € | **33.90 €** | 11.2 % | **6.2 %** | 33.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 15.2 % | **6.2 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.90 €** | 15.6 % | **9.1 %** | 26.92 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 46.50 € | **44.90 €** | 9.5 % | **5.7 %** | 45.00 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **23.90 €** | 37.8 % | **29.1 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **21.90 €** | 39.1 % | **29.6 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **20.90 €** | 53.3 % | **42.4 %** | 21.00 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.50 € | **30.90 €** | 15.1 % | **9.4 %** | 31.00 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 18.50 € | **16.90 €** | 41.2 % | **29.0 %** | 17.00 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.50 € | **38.90 €** | 11.1 % | **6.7 %** | 39.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **23.90 €** | 15.0 % | **7.8 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **23.90 €** | 15.0 % | **7.8 %** | 24.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **39.90 €** | 10.8 % | **6.6 %** | 40.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **39.90 €** | 10.8 % | **6.6 %** | 40.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **39.90 €** | 10.8 % | **6.6 %** | 40.00 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **17.90 €** | 15.6 % | **6.1 %** | 18.00 € | stávame sa najlacnejší |
| Fixed Creator Tripod FIXCRT-BK | 43.50 € | **41.90 €** | 10.1 % | **6.1 %** | 42.00 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 23.50 € | **21.90 €** | 14.6 % | **6.8 %** | 22.00 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 59.50 € | **57.90 €** | 8.0 % | **5.1 %** | 58.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 6.20 € | **4.60 €** | 47.0 % | **9.0 %** | 4.69 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 5.50 € | **3.90 €** | 53.1 % | **8.6 %** | 4.00 € | stávame sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 12.50 € | **10.90 €** | 22.9 % | **7.2 %** | 7.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **15.90 €** | 16.6 % | **6.0 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 12.50 € | **10.90 €** | 23.5 % | **7.7 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 14.50 € | **12.90 €** | 18.4 % | **5.3 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.90 €** | 60.5 % | **36.0 %** | 8.92 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **11.90 €** | 55.2 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 13.50 € | **11.90 €** | 56.1 % | **37.6 %** | 12.00 € | stávame sa najlacnejší |
| AMIKO dálkové ovládání Univerzální, HD - SD | 14.50 € | **12.90 €** | 26.2 % | **12.3 %** | 13.00 € | stávame sa najlacnejší |
| Zircon Monoblok Single M-0143 Slim line Skylink | 12.50 € | **10.90 €** | 35.9 % | **18.5 %** | 11.00 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **97.90 €** | 10.1 % | **8.3 %** | 98.00 € | stávame sa najlacnejší |
| Domo DO8719W | 70.50 € | **68.90 €** | 10.7 % | **8.2 %** | 69.00 € | stávame sa najlacnejší |
| Guzzanti GZ 161 | 248.50 € | **246.90 €** | 10.2 % | **9.5 %** | 247.00 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 138.50 € | **136.90 €** | 10.1 % | **8.8 %** | 137.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 5.40 € | **3.90 €** | 48.8 % | **7.5 %** | 3.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C110 Home Sec. Wi-Fi Camera | 32.50 € | **31.00 €** | 10.3 % | **5.2 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.B | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 27.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií XTAR VC4SL 18650 | 27.00 € | **25.50 €** | 13.0 % | **6.7 %** | 19.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Crema E Gusto 1000 g | 23.50 € | **22.00 €** | 12.3 % | **5.1 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 19.00 € | **17.50 €** | 16.4 % | **7.2 %** | 12.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Podlahový mop PROFI cotton plus | 30.50 € | **29.00 €** | 10.8 % | **5.3 %** | 25.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.NBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **15.00 €** | 15.8 % | **5.3 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9258M | 37.00 € | **35.50 €** | 10.3 % | **5.8 %** | 33.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Portable NBP003LBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 41.00 € | **39.50 €** | 10.2 % | **6.1 %** | 39.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558 | 12.50 € | **11.00 €** | 20.0 % | **5.6 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkové háky REBEL RBA-2505 | 12.00 € | **10.50 €** | 21.0 % | **5.9 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 31.50 € | **30.00 €** | 12.4 % | **7.1 %** | 30.09 € | stávame sa najlacnejší |
| Tesla GSM-LITE zesilovač/opakovač 900/1800 MHz - kom... | 180.50 € | **179.00 €** | 8.8 % | **7.9 %** | 179.09 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.50 €** | 50.1 % | **37.6 %** | 16.64 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 20.00 € | **18.50 €** | 18.9 % | **9.9 %** | 18.69 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 14.50 € | **13.00 €** | 43.2 % | **28.4 %** | 13.20 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **15.00 €** | 56.9 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **15.00 €** | 56.9 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 61.00 € | **59.50 €** | 10.1 % | **7.4 %** | 59.80 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.00 € | **21.50 €** | 12.8 % | **5.4 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **12.50 €** | 38.3 % | **23.5 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.00 € | **10.50 €** | 52.9 % | **33.8 %** | 10.90 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 23.00 € | **21.50 €** | 13.4 % | **6.0 %** | 21.90 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 65.00 € | **63.50 €** | 10.1 % | **7.6 %** | 63.90 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 14.50 € | **13.00 €** | 49.2 % | **33.8 %** | 13.48 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **15.00 €** | 39.3 % | **26.6 %** | 15.50 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 15.50 € | **14.00 €** | 53.9 % | **39.0 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **14.00 €** | 55.0 % | **40.0 %** | 14.50 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.00 €** | 55.2 % | **38.0 %** | 12.50 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 159.50 € | **158.00 €** | 8.1 % | **7.1 %** | 158.50 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.00 €** | 45.5 % | **35.4 %** | 20.50 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.00 €** | 14.9 % | **10.7 %** | 39.50 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.00 €** | 15.0 % | **12.2 %** | 61.50 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.00 €** | 15.6 % | **5.7 %** | 16.50 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.00 €** | 15.8 % | **5.8 %** | 16.50 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.00 €** | 15.9 % | **5.9 %** | 16.50 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 20.50 € | **19.00 €** | 15.4 % | **7.0 %** | 19.50 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.00 €** | 15.2 % | **10.5 %** | 35.50 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **35.00 €** | 15.2 % | **10.5 %** | 35.50 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.00 €** | 15.0 % | **10.4 %** | 36.50 € | stávame sa najlacnejší |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 27.50 € | **26.00 €** | 34.4 % | **27.1 %** | 26.50 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.00 €** | 15.6 % | **11.7 %** | 43.50 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 67.50 € | **66.00 €** | 8.0 % | **5.6 %** | 66.50 € | stávame sa najlacnejší |
| Batéria MOVA pre model G70 | 90.90 € | **89.50 €** | 15.2 % | **13.4 %** | 89.70 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.90 € | **233.50 €** | 10.0 % | **9.4 %** | 233.88 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.50 €** | 10.0 % | **8.5 %** | 101.90 € | stávame sa najlacnejší |
| Myš bezdrátová REBEL WM500 | 13.90 € | **12.50 €** | 18.1 % | **6.2 %** | 11.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.40 € | **8.00 €** | 35.7 % | **15.5 %** | 8.07 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.40 € | **8.00 €** | 35.7 % | **15.5 %** | 8.07 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.60 €** | 29.9 % | **11.7 %** | 8.67 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 11.00 € | **9.60 €** | 54.5 % | **34.8 %** | 9.70 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 13.90 € | **12.50 €** | 44.9 % | **30.3 %** | 12.73 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **5.40 €** | 45.5 % | **15.5 %** | 5.48 € | stávame sa najlacnejší |
| Sada BOYA BY-WFM12 bezdrátový klopový mikrofon, vysí... | 33.90 € | **32.50 €** | 9.8 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight stropný reflektor (jedna žiarovka) biely | 19.90 € | **18.50 €** | 15.7 % | **7.6 %** | 11.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rapoo E9270p bezdrátová klávesnice černá | 37.90 € | **36.50 €** | 10.4 % | **6.4 %** | 30.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alecto FR-115BW Sada vysílaček pro děti | 35.90 € | **34.50 €** | 10.5 % | **6.2 %** | 29.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje H45W | 39.90 € | **38.50 €** | 10.2 % | **6.3 %** | 35.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PM700 stolní s nastavitelnou směrov... | 40.90 € | **39.50 €** | 8.8 % | **5.1 %** | 37.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.0 % | **5.4 %** | 24.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada litinových závaží 4x1,25kg, 51mm, REBEL ACTIVE ... | 18.90 € | **17.50 €** | 16.1 % | **7.5 %** | 15.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.90 € | **28.50 €** | 10.7 % | **5.5 %** | 27.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Yogurella 617 | 27.90 € | **26.50 €** | 10.8 % | **5.2 %** | 25.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, černý | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, červený | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, modrý | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16075 | 25.90 € | **24.50 €** | 11.1 % | **5.1 %** | 24.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 26.90 € | **25.50 €** | 11.2 % | **5.4 %** | 25.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje SIH1800BLT | 19.90 € | **18.50 €** | 14.8 % | **6.7 %** | 18.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.90 € | **46.50 €** | 8.7 % | **5.5 %** | 46.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **26.50 €** | 11.2 % | **5.6 %** | 26.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/05 | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Monitor mount 13-30" Huanuo HNCM7 | 20.90 € | **19.50 €** | 15.0 % | **7.3 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAQ2000BK Bezdrátová sluchátka | 36.90 € | **35.50 €** | 10.3 % | **6.1 %** | 35.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.90 € | **24.50 €** | 22.6 % | **15.9 %** | 24.69 € | stávame sa najlacnejší |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 34.90 € | **33.50 €** | 22.1 % | **17.2 %** | 33.70 € | stávame sa najlacnejší |
| Beper BEP-BC261 | 32.90 € | **31.50 €** | 10.8 % | **6.1 %** | 31.79 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X Pro Standard (čierny) | 54.90 € | **53.50 €** | 14.4 % | **11.5 %** | 53.80 € | stávame sa najlacnejší |
| Solight lokátor pre batožinu, Find My kompatibilný | 23.90 € | **22.50 €** | 41.7 % | **33.4 %** | 22.89 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.90 € | **39.50 €** | 10.8 % | **7.0 %** | 39.90 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **15.50 €** | 39.1 % | **27.5 %** | 15.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.90 € | **22.50 €** | 38.4 % | **30.3 %** | 22.90 € | stávame sa najlacnejší |
| Ardes AR4B01B | 45.90 € | **44.50 €** | 10.6 % | **7.2 %** | 44.90 € | stávame sa najlacnejší |
| Ufesa Haku | 30.90 € | **29.50 €** | 11.3 % | **6.3 %** | 29.90 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **61.50 €** | 21.4 % | **18.7 %** | 61.90 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.90 € | **53.50 €** | 10.5 % | **7.7 %** | 53.90 € | stávame sa najlacnejší |
| Russell Hobbs 26800-56/RH | 26.90 € | **25.50 €** | 11.0 % | **5.2 %** | 25.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash LEO (čierna) | 26.90 € | **25.50 €** | 15.5 % | **9.5 %** | 25.90 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **6.60 €** | 55.5 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 5.30 € | **4.00 €** | 50.7 % | **13.7 %** | 4.10 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 5.30 € | **4.10 €** | 55.6 % | **20.3 %** | 4.17 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **4.10 €** | 50.7 % | **16.6 %** | 4.17 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 7.50 € | **6.30 €** | 59.6 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| MAXXO DH 919 Extra Tea | 13.69 € | **12.50 €** | 36.1 % | **24.2 %** | 12.57 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 31.00 € | **29.90 €** | 10.1 % | **6.2 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8500 black | 26.00 € | **24.90 €** | 9.8 % | **5.1 %** | 21.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslo pro paddleboard REBEL ACTIVE | 21.00 € | **19.90 €** | 11.6 % | **5.7 %** | 18.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 31.00 € | **29.90 €** | 10.0 % | **6.1 %** | 29.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **27.90 €** | 47.5 % | **41.9 %** | 28.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **27.90 €** | 14.8 % | **10.5 %** | 28.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 27.00 € | **25.90 €** | 35.3 % | **29.8 %** | 26.00 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **26.90 €** | 13.9 % | **9.5 %** | 27.00 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **34.90 €** | 15.0 % | **11.5 %** | 35.00 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.90 € | **3.80 €** | 54.4 % | **19.7 %** | 3.90 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.90 €** | 39.2 % | **8.6 %** | 3.96 € | stávame sa najlacnejší |
| Filter MOVA pre stanicu G70 | 10.90 € | **9.80 €** | 17.1 % | **5.3 %** | 5.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria AA MediaRange nabíjateľné USB-C Li-Ion , 1,5... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 17.00 € | **15.90 €** | 15.0 % | **7.5 %** | 13.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anemometer UNI-T UT363 | 16.00 € | **14.90 €** | 14.0 % | **6.2 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nastavitelná rozpěrná tyč pro pull-upy, REBEL ACTIVE... | 10.50 € | **9.40 €** | 18.1 % | **5.7 %** | 8.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Testovanie zariadenia USB Uni-T UT658LOAD | 16.00 € | **14.90 €** | 14.8 % | **6.9 %** | 13.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria AAA MediaRange nabíjateľné USB-C Li-Ion , 1,... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.20 €** | 59.1 % | **35.1 %** | 6.24 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.80 € | **5.70 €** | 54.0 % | **29.1 %** | 5.78 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 9.00 € | **7.90 €** | 53.7 % | **34.9 %** | 7.99 € | stávame sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 13.00 € | **11.90 €** | 47.8 % | **35.3 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 15.00 € | **13.90 €** | 38.3 % | **28.1 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 14.00 € | **12.90 €** | 52.8 % | **40.8 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 15.00 € | **13.90 €** | 54.0 % | **42.7 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **9.90 €** | 52.9 % | **37.6 %** | 10.00 € | stávame sa najlacnejší |
| Tefal BC50D2V0 | 17.00 € | **15.90 €** | 17.2 % | **9.6 %** | 16.00 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.50 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 9.20 € | **8.10 €** | 47.8 % | **30.1 %** | 8.20 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **15.90 €** | 15.2 % | **7.7 %** | 16.00 € | stávame sa najlacnejší |
| Slúchadlá Niceboy HIVE Beans Concert | 79.90 € | **78.90 €** | 6.4 % | **5.1 %** | 23.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 67W Charging Combo (Type-A) EU | 24.50 € | **23.50 €** | 10.5 % | **6.0 %** | 14.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gel Blaster Gellet Depot | 24.50 € | **23.50 €** | 11.7 % | **7.2 %** | 14.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.90 € | **35.90 €** | 9.1 % | **6.1 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV 1713E0 | 26.50 € | **25.50 €** | 10.5 % | **6.4 %** | 19.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-BK | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 16.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Coox Quiche forma 3 díly se skleněnou po | 20.90 € | **19.90 €** | 11.1 % | **5.8 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (čierny) | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska cest. PENTA 1,5l ner. | 20.90 € | **19.90 €** | 10.9 % | **5.6 %** | 15.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechnoLine WS 8005 digitální budík | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 17.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Blue) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 6.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-BL | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-PI | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-TU | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo P100(2-pack)WiFi zásuvka | 24.90 € | **23.90 €** | 11.0 % | **6.5 %** | 20.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 308 Black, 7FP21UE | 21.50 € | **20.50 €** | 10.3 % | **5.2 %** | 17.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530 Black | 28.50 € | **27.50 €** | 10.7 % | **6.8 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Podsie 4 POP White | 19.50 € | **18.50 €** | 11.8 % | **6.1 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C24 AC750 Router | 23.90 € | **22.90 €** | 10.9 % | **6.3 %** | 20.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska s pum.CUL.1,9l černá | 21.50 € | **20.50 €** | 12.6 % | **7.3 %** | 18.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-540BK Black | 18.90 € | **17.90 €** | 11.2 % | **5.3 %** | 16.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 15.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.50 €** | 8.3 % | **5.2 %** | 33.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-541 Color | 23.50 € | **22.50 €** | 11.5 % | **6.7 %** | 21.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-546 Color | 20.90 € | **19.90 €** | 11.9 % | **6.6 %** | 18.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Beige) | 13.50 € | **12.50 €** | 16.3 % | **7.7 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Yellow) | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 11.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **10.90 €** | 15.6 % | **5.9 %** | 9.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **20.90 €** | 11.3 % | **6.2 %** | 19.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-TI | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skúšačka UNI-T UT18D vadaska | 42.90 € | **41.90 €** | 7.5 % | **5.0 %** | 41.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **16.50 €** | 11.5 % | **5.1 %** | 16.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.0 % | **6.2 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 10.8 % | **5.9 %** | 21.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.90 € | **16.90 €** | 11.3 % | **5.1 %** | 16.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.50 € | **19.50 €** | 12.0 % | **6.5 %** | 19.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **25.50 €** | 10.9 % | **6.8 %** | 25.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mio Smartbox IV | 31.50 € | **30.50 €** | 10.2 % | **6.7 %** | 30.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák Classic 100 Easy | 20.50 € | **19.50 €** | 11.5 % | **6.0 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 11.8 % | **6.6 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.50 € | **15.50 €** | 13.2 % | **6.3 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Breakfast Toaster 157/03, černý | 23.90 € | **22.90 €** | 11.3 % | **6.6 %** | 22.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G4002300 Odstraňovač žmolků | 22.90 € | **21.90 €** | 10.6 % | **5.8 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.50 €** | 10.5 % | **6.8 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.1 % | **5.3 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka na dlažbu Classic s tele | 12.50 € | **11.50 €** | 14.3 % | **5.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.50 € | **24.50 €** | 11.5 % | **7.1 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.50 € | **19.50 €** | 11.6 % | **6.2 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Onikuma MP006 RGB herná podložka pod myš (čierna) | 11.50 € | **10.50 €** | 16.4 % | **6.3 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.50 €** | 10.9 % | **6.7 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA X25 (čierne) | 14.90 € | **13.90 €** | 15.3 % | **7.5 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný stojan ONIKUMA ST-2 (ružový) | 11.50 € | **10.50 €** | 15.4 % | **5.4 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament ELEGOO PLA+ (Star Gray) | 10.90 € | **9.90 €** | 16.8 % | **6.0 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 22.00 € | **21.00 €** | 10.1 % | **5.1 %** | 21.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 18.50 € | **17.50 €** | 11.4 % | **5.3 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 12.50 € | **11.50 €** | 14.5 % | **5.4 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.3 % | **6.3 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **11.00 €** | 44.3 % | **32.3 %** | 11.01 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **113.50 €** | 10.0 % | **9.1 %** | 113.53 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 9.10 € | **8.10 €** | 55.1 % | **38.1 %** | 8.13 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 10.00 € | **9.00 €** | 36.4 % | **22.8 %** | 9.04 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 15.50 € | **14.50 €** | 54.4 % | **44.5 %** | 14.55 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.50 € | **12.50 €** | 55.7 % | **44.2 %** | 12.57 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 4.50 € | **3.50 €** | 55.7 % | **21.1 %** | 3.57 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.50 €** | 44.6 % | **36.3 %** | 16.59 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 44.00 € | **43.00 €** | 8.5 % | **6.0 %** | 43.09 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.90 € | **35.90 €** | 11.1 % | **8.1 %** | 36.00 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.90 € | **9.90 €** | 54.1 % | **40.0 %** | 10.00 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.90 € | **42.90 €** | 15.0 % | **12.4 %** | 43.00 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **16.90 €** | 16.2 % | **9.7 %** | 17.00 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **28.90 €** | 11.0 % | **7.3 %** | 29.00 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.90 € | **51.90 €** | 10.8 % | **8.7 %** | 52.00 € | stávame sa najlacnejší |
| Nutribullet NB614.DG | 54.90 € | **53.90 €** | 8.9 % | **6.9 %** | 54.00 € | stávame sa najlacnejší |
| Tefal Copertinto BL439G10 | 59.90 € | **58.90 €** | 10.5 % | **8.6 %** | 59.00 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.90 € | **32.90 €** | 11.1 % | **7.8 %** | 33.00 € | stávame sa najlacnejší |
| Domo DO733K | 47.90 € | **46.90 €** | 10.8 % | **8.5 %** | 47.00 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **64.90 €** | 10.2 % | **8.5 %** | 65.00 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.90 € | **120.90 €** | 10.3 % | **9.4 %** | 121.00 € | stávame sa najlacnejší |
| Domo DO228SV | 121.90 € | **120.90 €** | 10.0 % | **9.1 %** | 121.00 € | stávame sa najlacnejší |
| Gorenje MVC72HGA | 29.90 € | **28.90 €** | 10.1 % | **6.4 %** | 29.00 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.90 € | **22.90 €** | 11.7 % | **7.1 %** | 23.00 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **25.90 €** | 10.1 % | **6.0 %** | 26.00 € | stávame sa najlacnejší |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.90 € | **35.90 €** | 10.0 % | **7.0 %** | 36.00 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **37.90 €** | 10.1 % | **7.3 %** | 38.00 € | stávame sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.90 € | **11.90 €** | 15.3 % | **6.3 %** | 12.00 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 74.90 € | **73.90 €** | 7.8 % | **6.3 %** | 74.00 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.90 € | **22.90 €** | 10.2 % | **5.5 %** | 23.00 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **41.90 €** | 10.5 % | **8.0 %** | 42.00 € | stávame sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **11.90 €** | 46.9 % | **35.5 %** | 12.00 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.90 € | **21.90 €** | 10.1 % | **5.3 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **10.90 €** | 56.0 % | **42.9 %** | 11.00 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **76.90 €** | 15.0 % | **13.5 %** | 77.00 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.00 € | **14.00 €** | 54.2 % | **43.9 %** | 14.11 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **19.00 €** | 15.0 % | **9.2 %** | 19.16 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **35.00 €** | 38.3 % | **34.4 %** | 35.16 € | stávame sa najlacnejší |
| Náhradní filtrační kapsle GARNI BS 45T | 17.50 € | **16.50 €** | 24.3 % | **17.2 %** | 16.69 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 13.00 € | **12.00 €** | 47.8 % | **36.4 %** | 12.20 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 84.00 € | **83.00 €** | 10.2 % | **8.9 %** | 83.20 € | stávame sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 16.71 € | stávame sa najlacnejší |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 15.50 € | **14.50 €** | 13.9 % | **6.6 %** | 14.72 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 24.50 € | **23.50 €** | 43.5 % | **37.6 %** | 23.74 € | stávame sa najlacnejší |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenciou | 77.00 € | **76.00 €** | 14.9 % | **13.4 %** | 76.27 € | stávame sa najlacnejší |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 77.00 € | **76.00 €** | 14.7 % | **13.2 %** | 76.27 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 13.50 € | **12.50 €** | 55.7 % | **44.2 %** | 12.78 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 58.50 € | **57.50 €** | 12.2 % | **10.3 %** | 57.79 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 37.00 € | **36.00 €** | 41.8 % | **37.9 %** | 36.31 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.33 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **25.00 €** | 42.7 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 32.50 € | **31.50 €** | 11.4 % | **8.0 %** | 31.83 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 28.50 € | **27.50 €** | 15.4 % | **11.4 %** | 27.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **16.50 €** | 44.3 % | **36.1 %** | 16.87 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 29.50 € | **28.50 €** | 37.8 % | **33.2 %** | 28.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **10.50 €** | 38.3 % | **26.3 %** | 10.90 € | stávame sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **33.50 €** | 47.5 % | **43.3 %** | 33.90 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.50 € | **15.50 €** | 12.3 % | **5.5 %** | 15.90 € | stávame sa najlacnejší |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 75.50 € | **74.50 €** | 10.5 % | **9.0 %** | 74.90 € | stávame sa najlacnejší |
| Tefal RK812110 | 109.50 € | **108.50 €** | 9.8 % | **8.8 %** | 108.90 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **22.50 €** | 11.9 % | **7.2 %** | 22.90 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.50 € | **47.50 €** | 11.0 % | **8.7 %** | 47.90 € | stávame sa najlacnejší |
| DOMO DO754K | 36.50 € | **35.50 €** | 10.0 % | **7.0 %** | 35.90 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **28.50 €** | 11.4 % | **7.6 %** | 28.90 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **28.50 €** | 11.4 % | **7.6 %** | 28.90 € | stávame sa najlacnejší |
| DOMO DO9279W | 51.50 € | **50.50 €** | 10.9 % | **8.8 %** | 50.90 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **22.50 €** | 11.8 % | **7.0 %** | 22.90 € | stávame sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **50.50 €** | 10.2 % | **8.1 %** | 50.90 € | stávame sa najlacnejší |
| Roadstar DJ-390 BT Bluetooth speaker | 114.50 € | **113.50 €** | 10.2 % | **9.3 %** | 113.90 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.50 €** | 15.7 % | **11.5 %** | 26.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash F1 (biela) + 6 ventiláto... | 116.50 € | **115.50 €** | 15.0 % | **14.0 %** | 115.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.50 €** | 15.5 % | **13.0 %** | 44.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.50 €** | 15.5 % | **13.0 %** | 44.90 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 109.50 € | **108.50 €** | 10.4 % | **9.4 %** | 108.90 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 12.00 € | **11.00 €** | 52.2 % | **39.5 %** | 11.43 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **10.00 €** | 52.9 % | **39.0 %** | 10.43 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 21.00 € | **20.00 €** | 19.6 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 17.00 € | **16.00 €** | 36.8 % | **28.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 11.00 € | **10.00 €** | 48.1 % | **34.6 %** | 10.50 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.00 €** | 46.4 % | **39.5 %** | 20.50 € | stávame sa najlacnejší |
| Ariete SteamStyle 4301, violet | 33.00 € | **32.00 €** | 10.3 % | **6.9 %** | 32.50 € | stávame sa najlacnejší |
| Beper 50451 Tyčový Vakuový Vysavač S He | 52.00 € | **51.00 €** | 10.2 % | **8.1 %** | 51.50 € | stávame sa najlacnejší |
| Bravo B-4813 Žehlička SERENA červená | 46.00 € | **45.00 €** | 10.1 % | **7.7 %** | 45.50 € | stávame sa najlacnejší |
| Router GL.iNet Slate 7 | 208.00 € | **207.00 €** | 14.9 % | **14.3 %** | 207.50 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 159.00 € | **158.00 €** | 14.4 % | **13.7 %** | 158.50 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 187.00 € | **186.00 €** | 7.8 % | **7.2 %** | 186.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.00 €** | 14.6 % | **9.1 %** | 20.50 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.50 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.00 €** | 13.4 % | **6.7 %** | 16.50 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.00 €** | 13.6 % | **7.3 %** | 17.50 € | stávame sa najlacnejší |
| Herné slúchadlá Onikuma B2 (čierne) | 22.00 € | **21.00 €** | 14.2 % | **9.0 %** | 21.50 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.00 €** | 13.7 % | **6.6 %** | 15.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 52.00 € | **51.00 €** | 14.6 % | **12.4 %** | 51.50 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.00 €** | 14.9 % | **12.7 %** | 50.50 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 84.00 € | **83.00 €** | 14.9 % | **13.5 %** | 83.50 € | stávame sa najlacnejší |
| TP-LINK Archer T3U WiFi Adaptér | 16.90 € | **15.90 €** | 11.9 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **15.90 €** | 11.8 % | **5.2 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 16.90 € | **15.90 €** | 12.3 % | **5.6 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 160.90 € | **160.00 €** | 13.4 % | **12.7 %** | 160.39 € | stávame sa najlacnejší |
| Graef S 10005 | 113.90 € | **113.00 €** | 10.4 % | **9.5 %** | 113.42 € | stávame sa najlacnejší |
| Domo DO7345H | 147.90 € | **147.00 €** | 10.3 % | **9.6 %** | 147.50 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 150.90 € | **150.00 €** | 11.1 % | **10.5 %** | 150.50 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament ELEGOO PETG Pro (biely) | 10.50 € | **9.60 €** | 15.2 % | **5.3 %** | 9.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 12.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **14.00 €** | 21.6 % | **14.3 %** | 14.04 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.10 €** | 53.4 % | **39.6 %** | 9.18 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.60 €** | 50.3 % | **37.4 %** | 9.68 € | stávame sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.10 €** | 48.6 % | **35.3 %** | 9.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 9.30 € | **8.40 €** | 48.5 % | **34.2 %** | 8.50 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 5.40 € | **4.50 €** | 55.1 % | **29.3 %** | 4.60 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 13.90 € | **13.00 €** | 18.6 % | **10.9 %** | 13.22 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.49 € | stávame sa najlacnejší |
| Stojan na slúchadlá ONIKUMA ST-2 čierny | 13.90 € | **13.00 €** | 15.1 % | **7.6 %** | 13.49 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.90 € | **12.00 €** | 38.5 % | **28.9 %** | 12.50 € | stávame sa najlacnejší |
| Tefal INGENIO skleněná poklice 18 | 15.90 € | **15.00 €** | 12.7 % | **6.3 %** | 15.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.00 €** | 40.4 % | **28.8 %** | 10.50 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.90 € | **14.00 €** | 15.7 % | **8.7 %** | 14.50 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.90 € | **13.00 €** | 39.9 % | **30.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **12.00 €** | 31.1 % | **22.0 %** | 12.50 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.00 €** | 16.5 % | **9.0 %** | 13.50 € | stávame sa najlacnejší |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.90 € | **10.00 €** | 38.0 % | **26.6 %** | 10.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.00 €** | 49.2 % | **40.2 %** | 14.50 € | stávame sa najlacnejší |
| Selfie tyč Puluz pre Insta360 One RS / X2 / X3 / X4 ... | 12.90 € | **12.00 €** | 15.3 % | **7.2 %** | 12.50 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.00 €** | 40.9 % | **8.4 %** | 2.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.50 € | **3.60 €** | 55.0 % | **24.0 %** | 3.70 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **5.70 €** | 32.5 % | **14.4 %** | 5.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.60 € | **7.70 €** | 47.5 % | **32.1 %** | 7.80 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.40 €** | 55.0 % | **28.7 %** | 4.50 € | stávame sa najlacnejší |
| LEIFHEIT Žehlící deska COMPACT Table | 16.90 € | **16.00 €** | 11.4 % | **5.5 %** | 8.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.90 € | **19.00 €** | 10.3 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.00 €** | 11.5 % | **5.6 %** | 16.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL XA 800512 | 17.90 € | **17.00 €** | 12.5 % | **6.8 %** | 17.08 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.6 % | **9.5 %** | 24.19 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.6 % | **9.5 %** | 24.19 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.90 € | **29.00 €** | 11.2 % | **7.9 %** | 29.38 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.90 € | **60.00 €** | 10.7 % | **9.1 %** | 60.38 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.90 € | **20.00 €** | 10.4 % | **5.6 %** | 20.38 € | stávame sa najlacnejší |
| SONY WFC510L modrá | 38.90 € | **38.00 €** | 14.8 % | **12.1 %** | 38.40 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.90 € | **19.00 €** | 42.5 % | **36.1 %** | 19.42 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.90 € | **18.00 €** | 12.2 % | **6.9 %** | 18.46 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **16.00 €** | 38.6 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.00 €** | 10.3 % | **7.3 %** | 32.50 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.90 € | **49.00 €** | 24.6 % | **22.3 %** | 49.50 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **47.00 €** | 38.5 % | **35.9 %** | 47.50 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.90 € | **25.00 €** | 22.6 % | **18.3 %** | 25.50 € | stávame sa najlacnejší |
| Leifheit Page Profi 100 | 29.90 € | **29.00 €** | 11.4 % | **8.0 %** | 29.50 € | stávame sa najlacnejší |
| Tefal HT652538 | 58.90 € | **58.00 €** | 10.4 % | **8.7 %** | 58.50 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 16.90 € | **16.00 €** | 46.0 % | **38.2 %** | 16.50 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 30.90 € | **30.00 €** | 54.8 % | **50.3 %** | 30.50 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.90 € | **20.00 €** | 15.0 % | **10.1 %** | 20.50 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.00 €** | 15.8 % | **11.2 %** | 22.50 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 60.90 € | **60.00 €** | 21.6 % | **19.8 %** | 60.50 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X20 (čierne) | 19.90 € | **19.00 €** | 16.0 % | **10.7 %** | 19.50 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.00 €** | 42.5 % | **37.9 %** | 27.50 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.00 €** | 15.1 % | **13.5 %** | 63.50 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.00 €** | 14.9 % | **11.5 %** | 29.50 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 334.90 € | **334.00 €** | 7.1 % | **6.8 %** | 334.50 € | stávame sa najlacnejší |
| CR-PETG Filament Creality (Transparent blue) | 10.00 € | **9.20 €** | 15.0 % | **5.8 %** | 9.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 7.10 € | **6.30 €** | 55.2 % | **37.7 %** | 6.40 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.30 €** | 41.8 % | **8.7 %** | 2.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **4.00 €** | 45.3 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.90 € | **5.20 €** | 51.3 % | **33.4 %** | 5.29 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.60 €** | 42.7 % | **29.0 %** | 6.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 7.70 € | **7.00 €** | 48.0 % | **34.5 %** | 7.10 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.90 € | **2.20 €** | 48.3 % | **12.5 %** | 2.29 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 9.60 € | **8.90 €** | 54.2 % | **43.0 %** | 9.00 € | stávame sa najlacnejší |
| TP-LINK TL-WA855RE Wireless N Extender | 20.50 € | **19.90 €** | 10.4 % | **7.1 %** | 15.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM58 ruční všesměrový | 32.50 € | **31.90 €** | 8.2 % | **6.2 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.90 €** | 10.2 % | **6.9 %** | 19.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 17.50 € | **16.90 €** | 10.6 % | **6.8 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set PowerClean M+náhr. zdarma | 20.50 € | **19.90 €** | 10.3 % | **7.1 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **16.90 €** | 11.2 % | **7.4 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 29.50 € | **28.90 €** | 7.3 % | **5.1 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 62.50 € | **61.90 €** | 6.1 % | **5.1 %** | 61.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **17.90 €** | 10.0 % | **6.5 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 18.50 € | **17.90 €** | 38.9 % | **34.4 %** | 17.94 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.50 € | **44.90 €** | 8.2 % | **6.8 %** | 44.99 € | stávame sa najlacnejší |
| FoodSaver FFC025X | 26.50 € | **25.90 €** | 11.8 % | **9.3 %** | 26.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.50 € | **30.90 €** | 20.7 % | **18.4 %** | 31.00 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **28.90 €** | 14.9 % | **12.6 %** | 29.00 € | stávame sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **19.90 €** | 48.5 % | **44.2 %** | 20.00 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **21.90 €** | 12.0 % | **9.0 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **17.90 €** | 39.0 % | **34.5 %** | 18.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.50 € | **48.90 €** | 38.6 % | **36.9 %** | 49.00 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.50 € | **21.90 €** | 38.4 % | **34.7 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.50 € | **21.90 €** | 11.2 % | **8.2 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 30.50 € | **29.90 €** | 37.5 % | **34.8 %** | 30.00 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.50 € | **35.90 €** | 9.0 % | **7.2 %** | 36.00 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **21.90 €** | 10.3 % | **7.4 %** | 22.00 € | stávame sa najlacnejší |
| Elektrický masážny prístroj na tvár Guasha ANLAN 02-... | 35.50 € | **34.90 €** | 15.5 % | **13.6 %** | 35.00 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **35.90 €** | 10.5 % | **8.7 %** | 36.00 € | stávame sa najlacnejší |
| Pedrini Infinity červená 6 porcí | 36.50 € | **35.90 €** | 11.3 % | **9.4 %** | 36.00 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **32.90 €** | 11.1 % | **9.1 %** | 33.00 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **35.90 €** | 10.0 % | **8.2 %** | 36.00 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **60.90 €** | 19.8 % | **18.7 %** | 61.00 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **18.90 €** | 14.1 % | **10.6 %** | 19.00 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **18.90 €** | 16.3 % | **12.7 %** | 19.00 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **20.90 €** | 15.1 % | **11.9 %** | 21.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.50 € | **22.90 €** | 16.5 % | **13.5 %** | 23.00 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **31.90 €** | 14.7 % | **12.6 %** | 32.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.30 € | **7.70 €** | 47.0 % | **36.4 %** | 7.72 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.90 € | **7.30 €** | 47.3 % | **36.1 %** | 7.33 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 4.40 € | **3.80 €** | 52.9 % | **32.0 %** | 3.87 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.70 € | **7.10 €** | 54.6 % | **42.5 %** | 7.20 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.10 €** | 46.3 % | **34.9 %** | 7.20 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.10 €** | 49.3 % | **30.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.90 € | **5.30 €** | 48.0 % | **33.0 %** | 5.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.60 €** | 48.7 % | **34.3 %** | 5.70 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.80 €** | 55.5 % | **34.3 %** | 3.90 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.10 € | **1.50 €** | 51.1 % | **7.9 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.70 € | **3.10 €** | 56.7 % | **31.3 %** | 3.17 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.10 €** | 55.1 % | **29.9 %** | 3.20 € | stávame sa najlacnejší |
| Fixed řemínek AWU 49mm FIXNST2-1029-RD | 16.50 € | **15.90 €** | 10.7 % | **6.7 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák MagMount Vent FIXMMT-V-BK | 14.50 € | **13.90 €** | 11.2 % | **6.6 %** | 10.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune110 white | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.90 €** | 12.5 % | **7.8 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 655 Yellow, CZ112AE | 16.50 € | **15.90 €** | 10.9 % | **6.8 %** | 13.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WR820N WiFi N Router | 14.50 € | **13.90 €** | 12.3 % | **7.6 %** | 11.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U AC600 WiFi Adaptér | 12.50 € | **11.90 €** | 12.8 % | **7.4 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo L530E | 11.50 € | **10.90 €** | 11.4 % | **5.6 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 10.9 % | **6.3 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí bezdrátová podložka pro telefony Compass | 16.50 € | **15.90 €** | 10.4 % | **6.4 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **11.90 €** | 12.5 % | **7.1 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.50 € | **15.90 €** | 10.5 % | **6.5 %** | 15.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Bluetooth Speaker Essential Green | 12.50 € | **11.90 €** | 13.9 % | **8.5 %** | 11.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Defender Taška na notebook 15,6", Geek | 14.50 € | **13.90 €** | 10.1 % | **5.5 %** | 13.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELDONEX EKS4040SL | 11.50 € | **10.90 €** | 14.3 % | **8.3 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **12.90 €** | 13.2 % | **8.1 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 černá | 16.50 € | **15.90 €** | 10.6 % | **6.6 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet HAPPY GREEN Blue 2l | 12.50 € | **11.90 €** | 10.7 % | **5.4 %** | 11.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.90 €** | 16.1 % | **10.6 %** | 11.92 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 13.95 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.10 € | **3.50 €** | 54.3 % | **31.7 %** | 3.57 € | stávame sa najlacnejší |
| Tefal J1641474 | 12.50 € | **11.90 €** | 14.4 % | **9.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **14.90 €** | 39.9 % | **34.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **7.90 €** | 53.9 % | **43.0 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.50 € | **10.90 €** | 41.2 % | **33.9 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.10 € | **6.50 €** | 55.2 % | **42.1 %** | 6.60 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.10 € | **3.50 €** | 54.3 % | **31.7 %** | 3.60 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **15.90 €** | 10.6 % | **6.6 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **14.90 €** | 47.4 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **14.90 €** | 16.8 % | **12.3 %** | 15.00 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **12.90 €** | 47.1 % | **40.6 %** | 13.00 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 7.30 € | **6.70 €** | 54.6 % | **41.9 %** | 6.80 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **11.90 €** | 46.9 % | **39.8 %** | 12.00 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **15.90 €** | 11.3 % | **7.3 %** | 16.00 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **9.90 €** | 12.9 % | **6.5 %** | 10.00 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **13.90 €** | 16.5 % | **11.7 %** | 14.00 € | stávame sa najlacnejší |
| Herná myš ONIKUMA DM02 (čierna) | 16.50 € | **15.90 €** | 14.9 % | **10.8 %** | 16.00 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.20 €** | 45.5 % | **32.6 %** | 6.30 € | stávame sa najlacnejší |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 16.50 € | **15.90 €** | 14.9 % | **10.7 %** | 16.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 14.50 € | **13.90 €** | 34.1 % | **28.6 %** | 14.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 6.10 € | **5.50 €** | 47.2 % | **32.7 %** | 5.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **6.00 €** | 47.0 % | **33.6 %** | 6.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.80 € | **5.20 €** | 48.8 % | **33.4 %** | 5.30 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 15.50 € | **14.90 €** | 60.5 % | **54.3 %** | 15.00 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 75.50 € | **74.90 €** | 8.0 % | **7.2 %** | 74.94 € | stávame sa najlacnejší |
| Solight high bay, 200W, 28000lm, 120°, Meanwell,  50... | 94.50 € | **93.90 €** | 20.0 % | **19.3 %** | 94.00 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **104.90 €** | 10.1 % | **9.5 %** | 105.00 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 105.50 € | **104.90 €** | 7.9 % | **7.3 %** | 105.00 € | stávame sa najlacnejší |
| Sušička ovoce Ruhhy 25928 400W | 50.50 € | **50.00 €** | 6.1 % | **5.1 %** | 42.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Buxton BHP 7300 BLACK BT | 27.00 € | **26.50 €** | 8.5 % | **6.4 %** | 22.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.00 € | **10.50 €** | 11.5 % | **6.4 %** | 9.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro pro SG S26+ FIXOP3-1705-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente IceQueen černá | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-545BK Black | 17.00 € | **16.50 €** | 10.6 % | **7.3 %** | 15.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB02N 75 cm šedo-stříbrný | 13.50 € | **13.00 €** | 9.5 % | **5.5 %** | 12.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Aromo 0064 90000 bílý | 14.00 € | **13.50 €** | 10.1 % | **6.1 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED 2 skla SG A57 5G FIXGFADA-1703-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed 2skla SG A17 4/5G FIXGFADA-1700-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED Sklo apl. SG S26+ FIXGFADA-1705-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (DGS-105) | 16.00 € | **15.50 €** | 10.2 % | **6.8 %** | 15.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Hyper PETG Creality (zelený) | 11.00 € | **10.50 €** | 12.8 % | **7.6 %** | 10.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.5 % | **5.9 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 25.00 € | **24.50 €** | 9.2 % | **7.0 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 15.00 € | **14.50 €** | 10.2 % | **6.5 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.00 € | **15.50 €** | 9.9 % | **6.4 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GI6432BSCWF | 319.00 € | **318.50 €** | 5.2 % | **5.1 %** | 318.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.70 € | **2.20 €** | 52.4 % | **24.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 8.60 € | **8.10 €** | 45.1 % | **36.6 %** | 8.11 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.40 € | **6.90 €** | 55.1 % | **44.6 %** | 6.92 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.10 €** | 53.7 % | **44.7 %** | 8.12 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo, 150+150lm, Li... | 8.60 € | **8.10 €** | 53.7 % | **44.7 %** | 8.12 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **7.00 €** | 54.8 % | **44.4 %** | 7.03 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.5 % | **9.2 %** | 24.04 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.20 €** | 46.8 % | **35.9 %** | 6.24 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 6.20 € | **5.70 €** | 47.4 % | **35.5 %** | 5.74 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.20 €** | 55.2 % | **43.6 %** | 6.26 € | stávame sa najlacnejší |
| Filament PLA ELEGOO (Szary) | 10.50 € | **10.00 €** | 13.2 % | **7.8 %** | 10.06 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.50 €** | 41.0 % | **38.8 %** | 31.57 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 162.00 € | **161.50 €** | 7.3 % | **6.9 %** | 161.57 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.4 % | **9.6 %** | 19.08 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 14.00 € | **13.50 €** | 13.7 % | **9.6 %** | 13.58 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.50 € | **23.00 €** | 19.3 % | **16.7 %** | 23.09 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.50 €** | 47.2 % | **44.5 %** | 26.59 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.70 €** | 55.9 % | **37.4 %** | 3.79 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.40 €** | 47.1 % | **34.7 %** | 5.49 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 6.30 € | **5.80 €** | 48.5 % | **36.7 %** | 5.90 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.00 €** | 56.3 % | **25.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **4.60 €** | 54.1 % | **39.0 %** | 4.70 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.30 € | **2.80 €** | 39.7 % | **18.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 4.20 € | **3.70 €** | 48.5 % | **30.8 %** | 3.80 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.50 € | **9.00 €** | 44.1 % | **36.5 %** | 9.10 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.70 €** | 49.4 % | **35.0 %** | 4.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.90 € | **3.40 €** | 48.9 % | **29.8 %** | 3.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 6.10 € | **5.60 €** | 55.0 % | **42.3 %** | 5.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.30 €** | 48.9 % | **33.4 %** | 4.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **4.90 €** | 47.3 % | **33.7 %** | 5.00 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.50 €** | 50.8 % | **43.3 %** | 9.60 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **5.90 €** | 53.5 % | **41.5 %** | 6.00 € | stávame sa najlacnejší |
| Ariete Ice Machine 651 | 99.50 € | **99.00 €** | 10.4 % | **9.8 %** | 99.13 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **11.00 €** | 49.6 % | **43.1 %** | 11.15 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **11.00 €** | 38.5 % | **32.5 %** | 11.16 € | stávame sa najlacnejší |
| Domo DO 264 AP | 59.00 € | **58.50 €** | 10.1 % | **9.1 %** | 58.67 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1455.00 € | **1454.50 €** | 8.3 % | **8.2 %** | 1454.74 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.50 € | **155.00 €** | 14.4 % | **14.0 %** | 155.25 € | stávame sa najlacnejší |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.75 € | stávame sa najlacnejší |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.50 € | **55.00 €** | 16.7 % | **15.6 %** | 55.25 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **13.00 €** | 47.5 % | **42.1 %** | 13.27 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **14.00 €** | 47.4 % | **42.3 %** | 14.27 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **30.00 €** | 39.2 % | **36.9 %** | 30.27 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 17.50 € | **17.00 €** | 43.6 % | **39.5 %** | 17.28 € | stávame sa najlacnejší |
| Gorenje F492PW | 173.50 € | **173.00 €** | 7.7 % | **7.4 %** | 173.28 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 26.50 € | **26.00 €** | 9.5 % | **7.4 %** | 26.29 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.5 % | **8.1 %** | 10.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 13.7 % | **9.5 %** | 13.29 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 12.50 € | **12.00 €** | 13.3 % | **8.8 %** | 12.29 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 13.00 € | **12.50 €** | 21.2 % | **16.5 %** | 12.79 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 56.50 € | **56.00 €** | 8.4 % | **7.5 %** | 56.29 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.50 € | **85.00 €** | 15.2 % | **14.5 %** | 85.29 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 27.50 € | **27.00 €** | 51.2 % | **48.4 %** | 27.29 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.50 € | **37.00 €** | 21.4 % | **19.8 %** | 37.29 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.50 € | **138.00 €** | 15.4 % | **15.0 %** | 138.29 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 52.50 € | **52.00 €** | 6.5 % | **5.5 %** | 52.29 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **12.00 €** | 14.3 % | **9.7 %** | 12.29 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.50 € | **28.00 €** | 33.0 % | **30.7 %** | 28.30 € | stávame sa najlacnejší |
| G3Ferrari G1015502 Mikrovlnná trouba | 118.50 € | **118.00 €** | 10.5 % | **10.0 %** | 118.30 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 171.50 € | **171.00 €** | 9.3 % | **9.0 %** | 171.30 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 11.7 % | **6.8 %** | 11.33 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash B275 (biela) | 29.00 € | **28.50 €** | 14.9 % | **12.9 %** | 28.83 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **13.00 €** | 56.1 % | **50.3 %** | 13.35 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA310 Umývateľná mopovac... | 20.50 € | **20.00 €** | 13.4 % | **10.6 %** | 20.35 € | stávame sa najlacnejší |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.50 € | **11.00 €** | 25.7 % | **20.2 %** | 11.36 € | stávame sa najlacnejší |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.50 € | **85.00 €** | 20.2 % | **19.5 %** | 85.37 € | stávame sa najlacnejší |
| Herné reproduktory Onikuma L2 | 12.50 € | **12.00 €** | 16.4 % | **11.8 %** | 12.37 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **10.00 €** | 38.4 % | **31.8 %** | 10.38 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 24.50 € | **24.00 €** | 20.4 % | **17.9 %** | 24.39 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **15.00 €** | 46.0 % | **41.3 %** | 15.39 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 17.50 € | **17.00 €** | 14.3 % | **11.0 %** | 17.39 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 200.50 € | **200.00 €** | 12.0 % | **11.8 %** | 200.39 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 54.50 € | **54.00 €** | 9.4 % | **8.4 %** | 54.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 113.50 € | **113.00 €** | 8.9 % | **8.4 %** | 113.39 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 279.50 € | **279.00 €** | 7.3 % | **7.1 %** | 279.39 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.50 € | **22.00 €** | 13.0 % | **10.5 %** | 22.39 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 226.50 € | **226.00 €** | 5.3 % | **5.1 %** | 226.39 € | stávame sa najlacnejší |
| Strong SRT84 Terestriální HDMI přijímač | 28.50 € | **28.00 €** | 11.1 % | **9.1 %** | 28.39 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 86.50 € | **86.00 €** | 9.0 % | **8.4 %** | 86.39 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 28.50 € | **28.00 €** | 19.3 % | **17.2 %** | 28.39 € | stávame sa najlacnejší |
| Resto 93501 Hrnec s pokličkou 20 cm | 36.00 € | **35.50 €** | 10.2 % | **8.6 %** | 35.90 € | stávame sa najlacnejší |
| G3Ferrari G2012400 | 39.00 € | **38.50 €** | 10.1 % | **8.7 %** | 38.90 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 22.00 € | **21.50 €** | 38.4 % | **35.3 %** | 21.90 € | stávame sa najlacnejší |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 42.00 € | **41.50 €** | 17.5 % | **16.1 %** | 41.90 € | stávame sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.50 €** | 14.9 % | **13.9 %** | 54.90 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA520 Umývateľný HEPA fi... | 20.50 € | **20.00 €** | 13.4 % | **10.6 %** | 20.40 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.50 €** | 33.9 % | **32.3 %** | 39.90 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.50 €** | 10.4 % | **6.2 %** | 12.90 € | stávame sa najlacnejší |
| Ariete XVapor Comfort 4145/BL | 82.00 € | **81.50 €** | 10.0 % | **9.3 %** | 81.90 € | stávame sa najlacnejší |
| G3Ferrari G1020500 | 39.00 € | **38.50 €** | 10.2 % | **8.8 %** | 38.90 € | stávame sa najlacnejší |
| Girmi BL0401 Cestovní silikonová konvice | 15.00 € | **14.50 €** | 10.5 % | **6.8 %** | 14.90 € | stávame sa najlacnejší |
| Tefal Coppertinto KI280G10 | 31.00 € | **30.50 €** | 10.1 % | **8.3 %** | 30.90 € | stávame sa najlacnejší |
| ETA Verto II 1423 90000 bílý/zlatý | 31.00 € | **30.50 €** | 12.1 % | **10.3 %** | 30.90 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.50 € | **41.00 €** | 8.3 % | **7.0 %** | 41.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 79.00 € | **78.50 €** | 15.5 % | **14.7 %** | 78.90 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.50 €** | 14.6 % | **13.4 %** | 46.90 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.50 € | **26.00 €** | 42.7 % | **40.0 %** | 26.40 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.50 € | **139.00 €** | 8.1 % | **7.7 %** | 139.41 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Night 160 ml | 11.50 € | **11.00 €** | 17.9 % | **12.8 %** | 11.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 12.9 % | **8.0 %** | 11.42 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 168.50 € | **168.00 €** | 16.3 % | **15.9 %** | 168.44 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Fashion Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| DOMO DO9283EK | 18.50 € | **18.00 €** | 12.7 % | **9.7 %** | 18.46 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 89.50 € | **89.00 €** | 7.0 % | **6.4 %** | 89.47 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.50 € | **33.00 €** | 33.4 % | **31.5 %** | 33.48 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **16.00 €** | 38.0 % | **33.8 %** | 16.49 € | stávame sa najlacnejší |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | stávame sa najlacnejší |
| SALENTE ToastMax | 47.50 € | **47.00 €** | 11.1 % | **9.9 %** | 47.49 € | stávame sa najlacnejší |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.50 € | **26.00 €** | 32.5 % | **30.0 %** | 26.49 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **13.00 €** | 33.2 % | **28.3 %** | 13.49 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.50 € | **16.00 €** | 18.0 % | **14.4 %** | 16.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 16.0 % | **14.0 %** | 28.49 € | stávame sa najlacnejší |
| TESLA TE-344 venkovní anténa | 27.50 € | **27.00 €** | 45.8 % | **43.2 %** | 27.49 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.80 €** | 57.1 % | **23.0 %** | 1.90 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1297.90 € | **1297.50 €** | 7.3 % | **7.2 %** | 1297.89 € | stávame sa najlacnejší |
| Motorcycle Intercom EJEAS MS8-SE | 86.90 € | **86.50 €** | 15.1 % | **14.6 %** | 86.67 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.90 € | **110.50 €** | 10.2 % | **9.8 %** | 110.70 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 97.90 € | **97.50 €** | 20.2 % | **19.7 %** | 97.74 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 250.90 € | **250.50 €** | 7.5 % | **7.3 %** | 250.76 € | stávame sa najlacnejší |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.90 € | **83.50 €** | 18.0 % | **17.4 %** | 83.79 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 111.90 € | **111.50 €** | 6.6 % | **6.2 %** | 111.79 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 189.90 € | **189.50 €** | 7.9 % | **7.7 %** | 189.79 € | stávame sa najlacnejší |
| Nescafé Dolce Gusto Latte Macchiato 30ca | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 4.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR009001 | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Nano WiFi Adaptér | 10.90 € | **10.50 €** | 11.3 % | **7.2 %** | 8.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Plus WiFi Adaptér | 14.90 € | **14.50 €** | 11.0 % | **8.1 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.50 €** | 11.0 % | **8.2 %** | 13.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto ESPRESSO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAFE AU LAIT 30Cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESCAFÉ® DG Flat White kapsle 30 ks | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo TopSound černý | 12.90 € | **12.50 €** | 10.1 % | **6.6 %** | 10.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON GI-41 BK Black | 10.90 € | **10.50 €** | 13.9 % | **9.7 %** | 8.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 13.90 € | **13.50 €** | 9.8 % | **6.7 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdr XRN14P5G/PX7 FIXOP3-1432-BK | 11.90 € | **11.50 €** | 10.1 % | **6.4 %** | 10.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAPPUCCINO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 9.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Razer Goliathus Mobile Stealth Ed. | 10.90 € | **10.50 €** | 13.2 % | **9.0 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.1 % | **7.3 %** | 15.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.90 € | **13.50 €** | 10.5 % | **7.3 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.90 € | **12.50 €** | 12.8 % | **9.3 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.50 €** | 11.6 % | **8.7 %** | 14.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.50 €** | 11.3 % | **8.4 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.40 € | **5.00 €** | 47.3 % | **36.4 %** | 5.01 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **9.00 €** | 48.4 % | **42.1 %** | 9.02 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.60 €** | 56.3 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.80 €** | 53.7 % | **43.8 %** | 5.85 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.80 €** | 53.7 % | **43.8 %** | 5.85 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.90 € | **4.50 €** | 55.6 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.90 €** | 55.5 % | **48.0 %** | 7.98 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **8.40 €** | 38.4 % | **32.1 %** | 8.50 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.60 €** | 38.3 % | **32.7 %** | 9.70 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 4.20 € | **3.80 €** | 55.9 % | **41.1 %** | 3.90 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.50 €** | 47.7 % | **43.8 %** | 14.62 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **12.50 €** | 47.7 % | **43.1 %** | 12.66 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 13.90 € | **13.50 €** | 14.6 % | **11.3 %** | 13.71 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 13.8 % | **10.0 %** | 11.71 € | stávame sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 11.9 % | **7.8 %** | 10.71 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **13.50 €** | 20.3 % | **16.9 %** | 13.71 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.72 € | stávame sa najlacnejší |
| Roadstar TRA-2989 Přenosné vícepásmové r | 14.90 € | **14.50 €** | 11.9 % | **8.9 %** | 14.74 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.79 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.79 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 12.9 % | **9.1 %** | 11.79 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 11.90 € | **11.50 €** | 17.0 % | **13.1 %** | 11.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 680 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 13.90 € | **13.50 €** | 13.5 % | **10.2 %** | 13.83 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 20.5 % | **16.4 %** | 11.84 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 11.90 € | **11.50 €** | 38.6 % | **33.9 %** | 11.86 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **10.50 €** | 45.5 % | **40.2 %** | 10.86 € | stávame sa najlacnejší |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.90 € | **11.50 €** | 9.4 % | **5.8 %** | 11.86 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.90 € | **12.50 €** | 38.5 % | **34.2 %** | 12.87 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.50 €** | 46.2 % | **40.9 %** | 10.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.90 € | **13.50 €** | 35.8 % | **31.9 %** | 13.88 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 12.90 € | **12.50 €** | 9.8 % | **6.4 %** | 12.89 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 2.20 € | **1.80 €** | 56.9 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.20 €** | 58.6 % | **19.0 %** | 1.30 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 2.10 € | **1.70 €** | 51.1 % | **22.3 %** | 1.80 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.70 €** | 55.2 % | **25.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.10 €** | 53.0 % | **35.5 %** | 3.14 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.80 € | **3.40 €** | 48.5 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.40 € | **3.00 €** | 47.0 % | **29.7 %** | 3.10 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.90 € | **2.50 €** | 48.3 % | **27.8 %** | 2.60 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **2.90 €** | 49.9 % | **31.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.60 €** | 49.6 % | **29.7 %** | 2.70 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 2.00 € | **1.60 €** | 54.9 % | **23.9 %** | 1.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.30 € | **3.90 €** | 46.9 % | **33.2 %** | 4.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.21 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.23 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.60 € | **4.20 €** | 48.4 % | **35.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 4.80 € | **4.40 €** | 54.9 % | **42.0 %** | 4.49 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **4.70 €** | 18.1 % | **8.9 %** | 4.80 € | stávame sa najlacnejší |
| Redmi Buds 8 Lite Black | 19.90 € | **19.50 €** | 8.9 % | **6.8 %** | 19.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0022-S | 20.90 € | **20.50 €** | 8.2 % | **6.1 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.54 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 10.7 % | **9.5 %** | 35.63 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.69 € | stávame sa najlacnejší |
| Uni-T UT201R digitálny klešťový multimeter | 22.90 € | **22.50 €** | 16.0 % | **14.0 %** | 22.69 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 16.90 € | **16.50 €** | 14.4 % | **11.7 %** | 16.69 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 22.90 € | **22.50 €** | 18.2 % | **16.1 %** | 22.71 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.73 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **25.50 €** | 39.1 % | **36.9 %** | 25.73 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.50 €** | 38.4 % | **36.1 %** | 23.75 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **20.50 €** | 30.3 % | **27.8 %** | 20.76 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.90 € | **22.50 €** | 15.3 % | **13.3 %** | 22.76 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 31.90 € | **31.50 €** | 55.0 % | **53.1 %** | 31.77 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 30.90 € | **30.50 €** | 13.3 % | **11.8 %** | 30.77 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **39.50 €** | 38.6 % | **37.2 %** | 39.78 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.79 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.90 € | **16.50 €** | 24.5 % | **21.5 %** | 16.79 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8062 s imitací krbu... | 53.90 € | **53.50 €** | 11.5 % | **10.6 %** | 53.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.5 % | **9.5 %** | 40.79 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 22.90 € | **22.50 €** | 8.2 % | **6.4 %** | 22.79 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.90 € | **25.50 €** | 21.4 % | **19.5 %** | 25.79 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.90 € | **28.50 €** | 30.5 % | **28.7 %** | 28.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.80 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.90 € | **16.50 €** | 18.2 % | **15.4 %** | 16.80 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 26.90 € | **26.50 €** | 38.7 % | **36.6 %** | 26.80 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.5 % | **15.0 %** | 31.80 € | stávame sa najlacnejší |
| Russell Hobbs 23840-70 | 18.90 € | **18.50 €** | 12.3 % | **9.9 %** | 18.80 € | stávame sa najlacnejší |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 18.90 € | **18.50 €** | 25.6 % | **23.0 %** | 18.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.90 € | **23.50 €** | 36.1 % | **33.8 %** | 23.83 € | stávame sa najlacnejší |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 54.90 € | **54.50 €** | 8.1 % | **7.3 %** | 54.84 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 29.90 € | **29.50 €** | 9.4 % | **7.9 %** | 29.85 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.90 € | **23.50 €** | 11.5 % | **9.6 %** | 23.86 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.90 € | **39.50 €** | 39.2 % | **37.8 %** | 39.86 € | stávame sa najlacnejší |
| Slúchadlá FIXED Pods 2, bezdrôtové, TWS, biela | 24.90 € | **24.50 €** | 9.8 % | **8.1 %** | 24.86 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 21.90 € | **21.50 €** | 50.3 % | **47.5 %** | 21.87 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.90 € | **23.50 €** | 32.8 % | **30.6 %** | 23.87 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 31.90 € | **31.50 €** | 6.3 % | **5.0 %** | 31.89 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 18.90 € | **18.50 €** | 13.0 % | **10.6 %** | 18.89 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 38.90 € | **38.50 €** | 13.9 % | **12.7 %** | 38.89 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 40.90 € | **40.50 €** | 7.2 % | **6.2 %** | 40.89 € | stávame sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 267.90 € | **267.50 €** | 7.3 % | **7.2 %** | 267.77 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 374.90 € | **374.50 €** | 8.0 % | **7.9 %** | 374.89 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **8.00 €** | 47.7 % | **42.3 %** | 8.10 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 4ks, 6,5cm, ba... | 10.00 € | **9.70 €** | 53.4 % | **48.8 %** | 9.80 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 9.00 € | **8.70 €** | 47.5 % | **42.6 %** | 8.80 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.60 € | **3.30 €** | 46.3 % | **34.1 %** | 3.37 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.60 € | **2.30 €** | 48.9 % | **31.7 %** | 2.39 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.70 €** | 56.3 % | **32.9 %** | 1.71 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 2.10 € | **1.80 €** | 52.4 % | **30.7 %** | 1.85 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.30 € | **1.00 €** | 60.1 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.70 € | **1.40 €** | 53.6 % | **26.5 %** | 1.50 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.40 €** | 44.0 % | **18.6 %** | 1.50 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.80 €** | 49.8 % | **28.4 %** | 1.90 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.30 €** | 44.5 % | **17.4 %** | 1.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.80 €** | 47.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.30 € | **3.00 €** | 49.1 % | **35.5 %** | 3.03 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 4.50 € | **4.20 €** | 53.7 % | **43.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.90 € | **2.60 €** | 50.2 % | **34.6 %** | 2.64 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.74 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 4.70 € | **4.40 €** | 52.8 % | **43.1 %** | 4.46 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.20 €** | 55.5 % | **42.2 %** | 3.26 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 5.10 € | **4.80 €** | 40.1 % | **31.8 %** | 4.87 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.40 € | **3.10 €** | 46.3 % | **33.4 %** | 3.17 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.50 €** | 48.8 % | **32.8 %** | 2.58 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.90 € | **3.60 €** | 53.2 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.10 €** | 57.4 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.10 €** | 56.1 % | **36.6 %** | 2.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.80 € | **2.50 €** | 46.9 % | **31.1 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.80 € | **4.50 €** | 44.5 % | **35.5 %** | 4.60 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 9.10 € | **8.80 €** | 42.3 % | **37.6 %** | 8.88 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.40 € | **8.20 €** | 43.5 % | **40.1 %** | 8.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.20 €** | 24.3 % | **21.6 %** | 9.30 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.20 € | **3.00 €** | 53.9 % | **44.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.60 € | **2.40 €** | 47.8 % | **36.4 %** | 2.41 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.80 €** | 41.0 % | **31.6 %** | 2.84 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.10 € | **1.90 €** | 47.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.40 € | **5.20 €** | 20.0 % | **15.5 %** | 5.29 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.70 € | **2.50 €** | 23.3 % | **14.2 %** | 2.59 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **5.00 €** | 46.8 % | **41.1 %** | 5.10 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.20 € | **5.00 €** | 46.3 % | **40.7 %** | 5.10 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.30 €** | 38.3 % | **34.6 %** | 7.40 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.20 €** | 45.4 % | **40.0 %** | 5.30 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.30 €** | 55.5 % | **46.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.80 €** | 48.5 % | **41.1 %** | 3.90 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **1.90 €** | 48.5 % | **34.3 %** | 2.00 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.00 € | **2.80 €** | 23.8 % | **15.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.30 €** | 36.3 % | **31.4 %** | 5.40 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.00 €** | 36.6 % | **32.2 %** | 6.10 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11, V15 | 7.00 € | **6.80 €** | 30.8 % | **27.1 %** | 6.90 € | stávame sa najlacnejší |
| Solight stĺpcový filter pre Dyson V12 | 6.00 € | **5.80 €** | 26.4 % | **22.2 %** | 5.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.20 € | **6.00 €** | 17.0 % | **13.2 %** | 6.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.30 € | **5.10 €** | 38.1 % | **32.9 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.10 €** | 11.7 % | **6.5 %** | 4.20 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.70 €** | 45.4 % | **40.4 %** | 5.80 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.90 €** | 54.2 % | **26.2 %** | 0.98 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.70 €** | 38.1 % | **7.4 %** | 0.80 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.20 € | **1.00 €** | 54.9 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.50 € | **1.30 €** | 50.6 % | **30.5 %** | 1.35 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.70 €** | 47.1 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.18 € | stávame sa najlacnejší |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.80 €** | 52.0 % | **36.8 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.50 €** | 45.5 % | **28.4 %** | 1.60 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 2.00 € | **1.80 €** | 40.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.30 € | **1.10 €** | 51.0 % | **27.8 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.20 €** | 52.4 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.90 €** | 46.2 % | **39.1 %** | 4.00 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.40 €** | 54.6 % | **51.3 %** | 9.50 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 9.70 € | **9.50 €** | 22.5 % | **19.9 %** | 9.60 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.40 €** | 37.3 % | **33.7 %** | 7.50 € | stávame sa najlacnejší |
| Leifheit Čistič na okna s rozprašovačem | 10.00 € | **9.80 €** | 8.5 % | **6.4 %** | 9.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **4.40 €** | 26.3 % | **20.9 %** | 4.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.60 € | **7.40 €** | 37.0 % | **33.4 %** | 7.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **6.90 €** | 36.1 % | **32.3 %** | 7.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 10.00 € | **9.80 €** | 26.8 % | **24.3 %** | 9.90 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 530.00 € | **529.90 €** | 6.2 % | **6.2 %** | 529.95 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 380.00 € | **379.90 €** | 7.1 % | **7.1 %** | 379.95 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 285.00 € | **284.90 €** | 14.3 % | **14.3 %** | 284.96 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 279.00 € | **278.90 €** | 7.9 % | **7.9 %** | 278.99 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 17.00 € | **16.90 €** | 11.0 % | **10.4 %** | 16.92 € | stávame sa najlacnejší |
| Beper BEP-BP654 | 27.00 € | **26.90 €** | 10.4 % | **10.0 %** | 26.92 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.00 € | **19.90 €** | 15.6 % | **15.1 %** | 19.96 € | stávame sa najlacnejší |
| Hodiny TechnoLine WT 3100 do koupelny | 24.00 € | **23.90 €** | 13.4 % | **13.0 %** | 23.96 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.90 €** | 38.4 % | **37.7 %** | 20.96 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.90 €** | 54.5 % | **54.2 %** | 47.97 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 46.00 € | **45.90 €** | 10.1 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 46.00 € | **45.90 €** | 10.1 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 21.00 € | **20.90 €** | 19.6 % | **19.1 %** | 20.99 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 21.00 € | **20.90 €** | 19.6 % | **19.1 %** | 20.99 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 21.00 € | **20.90 €** | 19.6 % | **19.1 %** | 20.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.20 €** | 25.6 % | **24.2 %** | 9.29 € | stávame sa najlacnejší |
| Domo DO223S | 64.00 € | **63.90 €** | 12.2 % | **12.0 %** | 63.99 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 53.00 € | **52.90 €** | 6.3 % | **6.1 %** | 52.99 € | stávame sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.00 € | **17.90 €** | 5.7 % | **5.1 %** | 17.99 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.20 € | **6.10 €** | 15.1 % | **13.2 %** | 6.12 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.90 € | **5.80 €** | 11.0 % | **9.2 %** | 5.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.70 € | **4.60 €** | 37.0 % | **34.0 %** | 4.69 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **1.00 €** | 49.1 % | **35.5 %** | 1.02 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **1.00 €** | 49.1 % | **35.5 %** | 1.02 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.60 €** | 46.7 % | **42.8 %** | 3.65 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **1.00 €** | 42.0 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.90 € | **3.80 €** | 32.7 % | **29.3 %** | 3.85 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.46 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **3.00 €** | 16.1 % | **12.4 %** | 3.08 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.60 € | **3.50 €** | 52.4 % | **48.2 %** | 3.59 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.90 €** | 22.7 % | **19.7 %** | 3.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.60 €** | 26.9 % | **22.2 %** | 2.69 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.10 €** | 43.5 % | **31.5 %** | 1.14 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.30 €** | 32.4 % | **22.9 %** | 1.35 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.00 € | **12.90 €** | 6.1 % | **5.3 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Vlákno Creality TPU (biele) | 16.00 € | **15.90 €** | 13.5 % | **12.8 %** | 15.94 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.50 €** | 32.5 % | **30.5 %** | 6.55 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.90 €** | 38.5 % | **37.5 %** | 12.96 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.96 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.96 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.90 €** | 38.4 % | **36.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.00 € | **7.90 €** | 29.3 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.90 € | **8.80 €** | 33.3 % | **31.8 %** | 8.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.20 €** | 11.3 % | **8.7 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.80 € | **4.70 €** | 16.1 % | **13.7 %** | 4.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.90 €** | 25.4 % | **23.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.50 € | **4.40 €** | 37.0 % | **34.0 %** | 4.49 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.70 € | **8.60 €** | 6.8 % | **5.6 %** | 8.69 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.00 € | **66.90 €** | 5.4 % | **5.2 %** | 66.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 92.00 € | **91.90 €** | 9.6 % | **9.5 %** | 91.96 € | stávame sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 70.00 € | **69.90 €** | 8.3 % | **8.2 %** | 69.96 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1801 | 238.00 € | **237.90 €** | 42899.1 % | **42881.0 %** | 237.97 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 201.00 € | **200.90 €** | 9.9 % | **9.9 %** | 200.99 € | stávame sa najlacnejší |

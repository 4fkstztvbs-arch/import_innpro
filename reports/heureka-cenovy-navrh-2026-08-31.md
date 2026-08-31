# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-31

Vstup: `premiumstoresk_20260831_2152.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5777**
- Návrh **zvýšiť** cenu: **712** produktov
- Návrh **znížiť** cenu: **1367** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **3698** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **361**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (712)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| CP-USP-D2520L10-D 2.0 Mpix venkovní PTZ kamera 4V1 s... | 482.00 € | **644.50 €** | 14.9 % | **53.7 %** | 644.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP PLUS CP-UNB-CM352 IP vnitřní videomonitor | 281.50 € | **375.90 €** | 15.0 % | **53.5 %** | 375.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VB51ZL4-VMDS-27135 5.0 Mpix venkovní IP kamer... | 273.00 € | **365.90 €** | 14.8 % | **53.9 %** | 365.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TC51L5C-VMDS 5.0 Mpix venkovní IP kamera s IR... | 227.90 € | **304.90 €** | 15.0 % | **53.9 %** | 304.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rozváděč R-HW-SW16P-AP (pro Huawei) | 974.50 € | **1043.50 €** | 15.0 % | **23.1 %** | 1043.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| NEEWER 660 PRO II RGB – LED videolampa s otočnými ra... | 107.50 € | **167.50 €** | 15.2 % | **79.4 %** | 167.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNR-108F1 Síťový videorekordér (NVR) pro osm IP k... | 140.00 € | **187.50 €** | 14.8 % | **53.7 %** | 187.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UVR-1601K2-I3 Šestnáctikanálový 5v1 DVR s kompres... | 528.90 € | **574.50 €** | 15.0 % | **24.9 %** | 574.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNR-4K4042-P4V3 Síťový videorekordér H.265 4K pro... | 482.00 € | **523.90 €** | 14.9 % | **24.9 %** | 523.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TE41L5E-MDS-0360 4.0 Mpix venkovní IP kamera ... | 387.90 € | **420.90 €** | 15.0 % | **24.8 %** | 420.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VC51ZL4C-VMDS-V2 5.0 Mpix venkovní antivandal... | 367.50 € | **399.50 €** | 14.9 % | **24.9 %** | 399.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP PLUS CP-VNC-V4KZR3-VMD-V2 4K venkovní antivandal ... | 342.00 € | **371.90 €** | 14.9 % | **25.0 %** | 371.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VB81ZL4-VMDS 4K 8.0 Mpix  venkovní IP kamera ... | 328.90 € | **357.50 €** | 15.0 % | **25.0 %** | 357.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TD61L4E-MD-0360 6.0 Mpix venkovní IP kamera s... | 299.90 € | **325.50 €** | 15.0 % | **24.8 %** | 325.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UVR-0401L1B-4KI3 Čtyřkanálový 4K 5v1 DVR s kompre... | 268.00 € | **291.50 €** | 14.9 % | **25.0 %** | 291.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VB81L3-MDS-0360 4K (8.0 Mpix) venkovní IP ant... | 248.00 € | **270.00 €** | 14.7 % | **24.9 %** | 270.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UVR-0401L1B-4KH Čtyřkanálový 4K 5v1 DVR s kompres... | 249.00 € | **271.00 €** | 14.8 % | **24.9 %** | 271.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televes AVANT 12 PRO (532203) | 386.50 € | **407.90 €** | 15.0 % | **21.3 %** | 407.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čistič bazénov MOVA R10 | 209.90 € | **230.90 €** | 5.0 % | **15.5 %** | 230.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Neewer 58mm smartphone filter set | 35.00 € | **54.00 €** | 15.0 % | **77.4 %** | 54.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TC21ZL6-VMDS-27135 2.0 Mpix venkovní IP kamer... | 222.90 € | **241.50 €** | 14.9 % | **24.5 %** | 241.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VC21L5-VMDS-0280 2.0 Mpix venkovní IP kamera ... | 204.00 € | **222.00 €** | 14.8 % | **24.9 %** | 222.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TS25ZML4-M 2.0Mpix venkovní IP kamera s IR | 204.50 € | **221.90 €** | 14.9 % | **24.7 %** | 221.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP PLUS CP-UNC-VB21ZL4-VMDS-27135 2.0 Mpix venkovní ... | 184.00 € | **199.90 €** | 14.6 % | **24.6 %** | 199.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| IKUSI NBS 704-C48 - domovní zesilovač | 93.50 € | **109.00 €** | 14.8 % | **33.8 %** | 109.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.90 € | **362.50 €** | 15.0 % | **19.5 %** | 362.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI-NC-MC40-M-0370 4.0 Mpix vnitřní IP mini kamera pr... | 155.00 € | **168.50 €** | 14.6 % | **24.5 %** | 168.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI-NC-D50L3-M-0360 5.0 Mpix venkovní dome IP kamera ... | 151.50 € | **164.00 €** | 14.9 % | **24.4 %** | 164.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anténa Angular Flexivel TRI-26 Lte 700 18dB | 37.90 € | **50.00 €** | 14.6 % | **51.2 %** | 50.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 92.90 € | **105.00 €** | 14.6 % | **29.6 %** | 105.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI-NC-MC40-VMW-0280 4.0 Mpix vnitřní IP mini kamera ... | 143.50 € | **155.50 €** | 14.9 % | **24.5 %** | 155.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UVR-0801E1-CV4 Osmikanálový 5v1 mini DVR s kompre... | 135.00 € | **147.00 €** | 14.7 % | **24.9 %** | 147.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNR-104F1 Síťový videorekordér (NVR) pro čtyři IP... | 127.00 € | **138.50 €** | 14.5 % | **24.9 %** | 138.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-VB41L3-MDS-0360 4.0Mpix venkovní dome IP anti... | 127.90 € | **139.00 €** | 14.9 % | **24.9 %** | 139.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP PLUS CP-L4C-DX40FL3 4.0 Mpix venkovní dome kamera... | 132.90 € | **143.90 €** | 14.9 % | **24.4 %** | 143.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 169.50 € | **180.50 €** | 14.8 % | **22.2 %** | 180.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| IKUSI / FAGOR NBS 804-C48 - domovní zesilovač | 157.00 € | **168.00 €** | 14.5 % | **22.6 %** | 168.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 122.00 € | **132.50 €** | 14.4 % | **24.3 %** | 132.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE F4142PW | 222.00 € | **232.00 €** | 8.1 % | **12.9 %** | 222.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Barkan 464XL | 116.00 € | **125.90 €** | 14.4 % | **24.2 %** | 125.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 234.00 € | **243.50 €** | 14.7 % | **19.4 %** | 243.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| IKUSI NBS 701-C48 - domovní zesilovač | 81.00 € | **90.50 €** | 14.4 % | **27.9 %** | 90.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 194.00 € | **202.00 €** | 14.9 % | **19.6 %** | 201.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anycubic Photon Mono M7 Pro 3D Printer | 441.00 € | **449.00 €** | 6.6 % | **8.5 %** | 449.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-DA41PL3C-GP-Y 4.0 Mpix venkovní dome IP kamer... | 99.50 € | **107.50 €** | 14.8 % | **24.0 %** | 107.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 361.50 € | **369.50 €** | 8.4 % | **10.8 %** | 369.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA CD-C603 BLACK | 567.50 € | **575.50 €** | 5.1 % | **6.6 %** | 575.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 32.00 € | **39.50 €** | 18.0 % | **45.7 %** | 32.04 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TA21L3-0360  2.0Mpix venkovní IP kamera s IR | 88.00 € | **95.50 €** | 14.3 % | **24.1 %** | 95.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| IKUSI / FAGOR NBS 801-C48 - domovní zesilovač | 133.90 € | **141.00 €** | 14.8 % | **20.8 %** | 141.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 82.50 € | **89.50 €** | 5.2 % | **14.2 %** | 89.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitální piano Kruger&Matz KMDP-45P-BK černé se sto... | 263.50 € | **270.00 €** | 15.0 % | **17.8 %** | 270.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ivo DVB-30 zesilovač 30dB (5-12V) | 22.90 € | **29.00 €** | 13.7 % | **44.0 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 36.50 € | **42.50 €** | 7.4 % | **25.1 %** | 42.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA TE-344 venkovní anténa | 21.50 € | **27.50 €** | 13.8 % | **45.6 %** | 27.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ivo DVB-16 zesilovač 16dB (5-12V) | 18.90 € | **24.90 €** | 14.0 % | **50.2 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| HiFi věž Kruger&Matz KM1995 s CD, DAB+/FM rádiem | 604.00 € | **609.90 €** | 15.0 % | **16.1 %** | 609.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera IP venkovní NEDIS WIFICO22CWT / Wi-Fi / 3MP /... | 93.90 € | **99.50 €** | 14.7 % | **21.5 %** | 99.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anténa Fagor AURA LTE700 5G | 19.00 € | **24.50 €** | 11.1 % | **43.3 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Běžecký pás REBEL ACTIVE RBA-1001 | 278.90 € | **284.00 €** | 15.0 % | **17.1 %** | 284.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ikusi ATP-200 domovní zesilovač | 27.90 € | **33.00 €** | 14.2 % | **35.0 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Presto 2094 90000, bílý | 94.00 € | **99.00 €** | 6.6 % | **12.3 %** | 94.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysílač DO TechniSat TechniControl | 20.00 € | **25.00 €** | 13.5 % | **41.8 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Barkan 3400LB - 4 pohybový prodloužený do 600x400mm,... | 58.00 € | **63.00 €** | 14.0 % | **23.8 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 166.50 € | **171.50 €** | 14.8 % | **18.3 %** | 171.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom MCQ02HD Quattro 0,2 dB | 13.90 € | **18.90 €** | 13.8 % | **54.7 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.90 € | **119.50 €** | 10.4 % | **14.9 %** | 114.93 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 56.50 € | **60.50 €** | 28.1 % | **37.2 %** | 56.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 16.50 € | **20.50 €** | 12.4 % | **39.6 %** | 16.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1 | 126.90 € | **130.90 €** | 10.0 % | **13.5 %** | 129.91 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 102.50 € | **106.50 €** | 14.8 % | **19.3 %** | 106.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 15.50 € | **19.50 €** | 18.3 % | **48.9 %** | 19.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vakuová svářečka fólií TEESA V200 | 32.00 € | **36.00 €** | 14.0 % | **28.3 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| TechniSat VIOLA 200 /bílé-černé/ 0000/2936 | 46.00 € | **50.00 €** | 13.5 % | **23.3 %** | 50.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice TechniSat IMETEO X6 | 122.00 € | **125.90 €** | 14.6 % | **18.2 %** | 125.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stepper REBEL ACTIVE RBA-3220 s madlem | 61.00 € | **64.90 €** | 14.1 % | **21.4 %** | 64.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 23.00 € | **26.90 €** | 12.2 % | **31.3 %** | 26.91 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cabletech UCH0232 | 37.90 € | **41.50 €** | 14.5 % | **25.3 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux LIB60420CK | 204.50 € | **208.00 €** | 8.2 % | **10.0 %** | 204.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Konektor MC4 pro solární panely, rozbočení 3 panely,... | 10.00 € | **13.50 €** | 9.7 % | **48.1 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Alcad CA-662 | 146.00 € | **149.50 €** | 14.7 % | **17.4 %** | 149.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 134.00 € | **137.50 €** | 14.8 % | **17.8 %** | 137.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 57.00 € | **60.50 €** | 13.6 % | **20.6 %** | 60.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 36.50 € | **39.50 €** | 23.2 % | **33.4 %** | 37.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 44.50 € | **47.50 €** | 9.2 % | **16.5 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Aura 5 ANC | 42.00 € | **45.00 €** | 10.2 % | **18.1 %** | 44.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televes 552220 Crocodile 5G LTE700 domovní zesilovač | 35.50 € | **38.50 €** | 14.4 % | **24.1 %** | 38.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung VG-SCFC43SGMXC | 119.90 € | **122.90 €** | 7.1 % | **9.7 %** | 122.91 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 112.50 € | **115.50 €** | 14.6 % | **17.7 %** | 115.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **16.90 €** | 20.1 % | **46.0 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 92.00 € | **94.90 €** | 14.3 % | **17.9 %** | 94.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **39.90 €** | 7.7 % | **16.1 %** | 37.23 € | dobehnutie 2. najlacnejšieho konkurenta |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 58.00 € | **60.90 €** | 14.0 % | **19.7 %** | 60.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **29.50 €** | 15.2 % | **26.3 %** | 29.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Barkan 2400.B - 4 pohybový do 200x200mm, pro TV 13"-... | 28.90 € | **31.50 €** | 13.7 % | **24.0 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790... | 33.90 € | **36.50 €** | 14.6 % | **23.4 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 14.00 € | **16.50 €** | 15.4 % | **36.1 %** | 14.23 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 12.00 € | **14.50 €** | 12.3 % | **35.7 %** | 14.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.00 € | **14.50 €** | 22.0 % | **47.4 %** | 14.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 35.00 € | **37.50 €** | 13.1 % | **21.2 %** | 37.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 45.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| INVERTO Premium - Quad IDLP-QDL413 -  0,2 dB - s fil... | 27.00 € | **29.50 €** | 12.8 % | **23.2 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom MCT01HD Twin LNB | 10.00 € | **12.50 €** | 9.1 % | **36.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 177.00 € | **179.50 €** | 7.7 % | **9.3 %** | 177.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EOD3H40BX | 225.00 € | **227.50 €** | 6.8 % | **8.0 %** | 225.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 22.50 € | **24.90 €** | 12.7 % | **24.7 %** | 22.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **17.00 €** | 10.9 % | **26.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 91.90 € | **94.00 €** | 14.9 % | **17.6 %** | 94.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.90 € | **23.90 €** | 24.6 % | **36.0 %** | 21.92 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla, 150mm | 41.50 € | **43.50 €** | 14.6 % | **20.1 %** | 41.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT501A tester izolačného odporu | 58.00 € | **60.00 €** | 11.2 % | **15.1 %** | 59.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA CD-S303 BLACK | 377.50 € | **379.50 €** | 5.0 % | **5.6 %** | 379.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Barkan 4400 polohovací držák pro TV 32"-80" | 81.90 € | **83.90 €** | 14.9 % | **17.7 %** | 83.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| TechniSat DIGITRADIO 372 CD IR černé | 193.00 € | **195.00 €** | 14.7 % | **15.8 %** | 194.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 193.00 € | **195.00 €** | 14.7 % | **15.8 %** | 194.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zátěžová deka Rebel RBY-2000-3  3 kg (100x150 cm) ve... | 22.50 € | **24.50 €** | 13.3 % | **23.3 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zátěžová deka Rebel RBY-2001-3  3 kg (100x150 cm) me... | 22.50 € | **24.50 €** | 13.3 % | **23.3 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní předfiltr GARNI PF 15T | 16.00 € | **18.00 €** | 11.0 % | **24.9 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní předfiltr GARNI PF 45T | 18.50 € | **20.50 €** | 12.4 % | **24.6 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní UV sterilizační lampa GARNI UV 45T | 18.90 € | **20.90 €** | 13.5 % | **25.5 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ivo DVB-26 zesilovač 26dB (5-12V) | 22.90 € | **24.90 €** | 13.7 % | **23.7 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televes 552320 Crocodile 5G LTE700 domovní zesilovač | 38.00 € | **40.00 €** | 13.1 % | **19.0 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zircon Monoblok Single M-0143 Slim line Skylink | 10.00 € | **11.90 €** | 8.5 % | **29.2 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 17.00 € | **18.90 €** | 12.8 % | **25.4 %** | 18.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 24992-70 | 39.00 € | **40.90 €** | 5.3 % | **10.5 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 8.20 € | **9.90 €** | 15.1 % | **39.0 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Black | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 39.90 € | **41.50 €** | 16.1 % | **20.8 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 166.90 € | **168.50 €** | 15.0 % | **16.1 %** | 168.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S5 GPS + WIFI | 48.00 € | **49.50 €** | 7.5 % | **10.9 %** | 48.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.50 € | **24.00 €** | 32.4 % | **41.2 %** | 22.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy OFFICE M40 Vertical | 17.50 € | **19.00 €** | 7.7 % | **16.9 %** | 17.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.00 € | **42.50 €** | 7.4 % | **11.3 %** | 41.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 45.00 € | **46.50 €** | 13.8 % | **17.6 %** | 46.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 11.50 € | **13.00 €** | 7.1 % | **21.1 %** | 12.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 10.00 € | **11.50 €** | 9.1 % | **25.5 %** | 11.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 27.00 € | **28.50 €** | 12.8 % | **19.1 %** | 28.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dálkový ovladač KRUGER & MATZ V-LED | 11.00 € | **12.50 €** | 9.6 % | **24.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tréninkové cvičební pásy TRX P3-1 REBEL ACTIVE RBA-3... | 11.00 € | **12.50 €** | 8.5 % | **23.3 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 70.50 € | **72.00 €** | 14.7 % | **17.1 %** | 72.07 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.00 € | **66.50 €** | 14.2 % | **16.8 %** | 66.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.60 € | **11.00 €** | 19.3 % | **36.7 %** | 9.61 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.80 € | **6.20 €** | 6.6 % | **37.7 %** | 6.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 22.50 € | **23.90 €** | 30.3 % | **38.4 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.6 % | **12.6 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 8.90 € | **10.00 €** | 12.9 % | **26.8 %** | 9.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BC50D2V0 | 15.90 € | **17.00 €** | 10.0 % | **17.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 16.50 € | **17.50 €** | 36.3 % | **44.6 %** | 16.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 14.00 € | **15.00 €** | 16.4 % | **24.7 %** | 14.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 31.50 € | **32.50 €** | 6.3 % | **9.7 %** | 32.21 € | dobehnutie 2. najlacnejšieho konkurenta |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 54.50 € | **55.50 €** | 14.4 % | **16.5 %** | 55.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík analogový TechnoLine WT 757BK | 25.50 € | **26.50 €** | 5.2 % | **9.3 %** | 26.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kruger&Matz KM0127 brašna na rám kola | 11.50 € | **12.50 €** | 5.1 % | **14.2 %** | 12.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter UNI-T UT118B | 26.50 € | **27.50 €** | 11.4 % | **15.6 %** | 27.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada na odvzdušňování brzd Xtrobb 25242 | 11.00 € | **12.00 €** | 8.5 % | **18.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nafukovací matrace Rebel RBA-5001-S jednolůžková 186... | 17.90 € | **18.90 €** | 13.3 % | **19.7 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zátěžová deka Rebel RBY-2000-4   4 kg (100x150 cm) v... | 26.00 € | **27.00 €** | 13.5 % | **17.8 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZigBee LCD senzor teploty Sonoff SNZB-02LD (so sondou) | 16.50 € | **17.50 €** | 8.1 % | **14.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Activmix Premium 2103 90000, černý | 40.50 € | **41.50 €** | 7.7 % | **10.4 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čtečka paměťových karet NEDIS CRDRU31 USB 3.2 Gen1 | 11.00 € | **12.00 €** | 8.5 % | **18.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držák monitoru Cabletech UCH0221 (13-32'' 10kg) černý | 22.00 € | **23.00 €** | 13.6 % | **18.8 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Opticum LQP-06H MULTIFEED Quad LNB 0,1 dB | 14.90 € | **15.90 €** | 12.5 % | **20.0 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Opticum LRP-06H MULTIFEED Quattro LNB 0,1dB | 11.50 € | **12.50 €** | 12.9 % | **22.7 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Teploměr digitální s vlhkoměrem EMOS E0114N | 11.00 € | **12.00 €** | 9.7 % | **19.7 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíječka USB KRUGER & MATZ KM0857 GaN 65W | 15.50 € | **16.50 €** | 12.7 % | **20.0 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 122.00 € | **123.00 €** | 14.4 % | **15.4 %** | 123.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 46.50 € | **47.50 €** | 14.4 % | **16.8 %** | 47.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 9 | 40.00 € | **41.00 €** | 7.2 % | **9.9 %** | 41.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT 51016 | 49.00 € | **50.00 €** | 7.2 % | **9.4 %** | 49.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 37.90 € | **38.90 €** | 7.8 % | **10.7 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE SuChef | 83.00 € | **83.90 €** | 8.4 % | **9.6 %** | 83.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 71.00 € | **71.90 €** | 17.6 % | **19.1 %** | 71.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Chamberi horizontal | 157.00 € | **157.90 €** | 9.8 % | **10.4 %** | 157.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection red | 210.00 € | **210.90 €** | 17.4 % | **17.9 %** | 210.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-12 mini 12V DC brouše... | 96.00 € | **96.90 €** | 14.3 % | **15.3 %** | 96.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-12-1 mini 12V DC bílý | 96.00 € | **96.90 €** | 14.3 % | **15.3 %** | 96.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový senzor pohybu F&F DRL-12-9 mini 12V DC černý | 96.00 € | **96.90 €** | 14.3 % | **15.3 %** | 96.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CA modul IRDETO SMIT PROFI 2 | 146.00 € | **146.90 €** | 14.7 % | **15.4 %** | 146.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Yeelight Svetlo so senzorom do šatníka 40 cm - čiern... | 11.00 € | **11.90 €** | 13.9 % | **23.2 %** | 11.92 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.00 € | **36.90 €** | 7.7 % | **10.4 %** | 36.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 26.00 € | **26.90 €** | 6.8 % | **10.5 %** | 26.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **19.90 €** | 37.2 % | **43.7 %** | 19.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 22.00 € | **22.90 €** | 13.3 % | **18.0 %** | 22.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti UNI-T UT333S | 23.00 € | **23.90 €** | 9.6 % | **13.9 %** | 23.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **36.90 €** | 14.6 % | **17.5 %** | 36.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **36.90 €** | 15.0 % | **17.8 %** | 36.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 54.00 € | **54.90 €** | 6.1 % | **7.9 %** | 54.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 55.00 € | **55.90 €** | 10.1 % | **11.9 %** | 55.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1004500 | 51.00 € | **51.90 €** | 10.1 % | **12.0 %** | 51.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GS  G7-SE Wired Controller XBOx &PC Or | 39.00 € | **39.90 €** | 10.2 % | **12.8 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maliřská sada v kufru Maaleo 8643 288 ks | 17.00 € | **17.90 €** | 11.6 % | **17.6 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.10 € | **8.90 €** | 6.6 % | **17.1 %** | 8.11 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **4.80 €** | 11.4 % | **33.6 %** | 4.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **17.50 €** | 38.6 % | **43.6 %** | 17.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny klešťový multimeter Uni-T UT200R | 16.90 € | **17.50 €** | 8.8 % | **12.6 %** | 17.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.90 € | **24.50 €** | 39.2 % | **42.7 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **4.60 €** | 33.8 % | **53.9 %** | 4.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.00 € | **9.60 €** | 36.3 % | **45.3 %** | 9.04 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT658DUAL tester zásuviek USB | 11.90 € | **12.50 €** | 8.3 % | **13.8 %** | 12.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada kuchyňského náčiní Ruhhy 21804 | 11.90 € | **12.50 €** | 14.0 % | **19.7 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Konektor MC4 pro solární panely, rozbočení 4 panely,... | 14.90 € | **15.50 €** | 12.5 % | **17.0 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hula hoop REBEL ACTIVE RBA-3067-PK se závažím a počí... | 15.90 € | **16.50 €** | 13.5 % | **17.8 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMIKO dálkové ovládání Univerzální, HD - SD | 12.90 € | **13.50 €** | 12.2 % | **17.4 %** | 13.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní filtrační kapsle GARNI BS 45T | 15.90 € | **16.50 €** | 12.7 % | **17.0 %** | 16.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 137.90 € | **138.50 €** | 14.7 % | **15.2 %** | 138.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 78.90 € | **79.50 €** | 14.6 % | **15.5 %** | 79.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 19.50 € | **20.00 €** | 13.6 % | **16.5 %** | 19.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.00 € | **61.50 €** | 18.9 % | **19.8 %** | 61.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.00 € | **23.50 €** | 7.3 % | **9.6 %** | 23.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 103.00 € | **103.50 €** | 5.0 % | **5.5 %** | 103.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor Premium, Find My kompatibilný | 13.00 € | **13.50 €** | 14.8 % | **19.2 %** | 13.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.00 € | **23.50 €** | 34.3 % | **37.3 %** | 23.22 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 14.00 € | **14.50 €** | 43.7 % | **48.8 %** | 14.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 23.00 € | **23.50 €** | 8.8 % | **11.2 %** | 23.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 34.00 € | **34.50 €** | 8.4 % | **10.0 %** | 34.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.00 € | **155.50 €** | 14.0 % | **14.4 %** | 155.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 137 | 33.00 € | **33.50 €** | 9.9 % | **11.5 %** | 33.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 100.00 € | **100.50 €** | 13.1 % | **13.7 %** | 100.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 24G | 181.00 € | **181.50 €** | 8.4 % | **8.7 %** | 181.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nepriamy germicidný UV žiarič | 62.00 € | **62.50 €** | 38.2 % | **39.3 %** | 62.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.00 € | **30.50 €** | 36.9 % | **39.2 %** | 30.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.00 € | **12.50 €** | 41.8 % | **47.7 %** | 12.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.00 € | **12.50 €** | 41.8 % | **47.7 %** | 12.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 259.00 € | **259.50 €** | 7.7 % | **7.9 %** | 259.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.00 € | **11.50 €** | 7.2 % | **12.1 %** | 11.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 58.00 € | **58.50 €** | 9.5 % | **10.4 %** | 58.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 13.00 € | **13.50 €** | 41.9 % | **47.3 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ručný multimeter do auta UNI-T UT107 | 29.00 € | **29.50 €** | 7.8 % | **9.6 %** | 29.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.00 € | **10.50 €** | 7.8 % | **13.2 %** | 10.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.00 € | **16.50 €** | 8.3 % | **11.7 %** | 16.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90504 French press 800ml | 13.00 € | **13.50 €** | 10.0 % | **14.2 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 12.00 € | **12.50 €** | 8.8 % | **13.3 %** | 12.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Easy Chop | 33.00 € | **33.50 €** | 8.5 % | **10.2 %** | 33.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Sky B-4610 zlatý | 65.00 € | **65.50 €** | 9.1 % | **9.9 %** | 65.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Daily PV1100C | 23.00 € | **23.50 €** | 7.9 % | **10.2 %** | 23.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Svetelný merač UNI-T UT383 | 16.50 € | **17.00 €** | 11.1 % | **14.5 %** | 16.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 48.00 € | **48.50 €** | 8.7 % | **9.9 %** | 48.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 18.00 € | **18.50 €** | 5.7 % | **8.7 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 115.00 € | **115.50 €** | 13.2 % | **13.7 %** | 115.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.3 % | **8.3 %** | 56.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada BOYA BY-WFM12 bezdrátový klopový mikrofon, vysí... | 33.00 € | **33.50 €** | 6.9 % | **8.5 %** | 33.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 32.00 € | **32.50 €** | 6.0 % | **7.6 %** | 32.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.00 € | **41.50 €** | 12.0 % | **13.3 %** | 41.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.00 € | **85.50 €** | 14.3 % | **15.0 %** | 85.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic ASA (sivý) 1 kg | 18.00 € | **18.50 €** | 12.2 % | **15.3 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic ASA (biely) 1 kg | 18.00 € | **18.50 €** | 12.2 % | **15.3 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.00 € | **25.50 €** | 12.7 % | **15.0 %** | 25.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.00 € | **28.50 €** | 30.7 % | **33.0 %** | 28.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC517DE0 | 137.00 € | **137.50 €** | 8.8 % | **9.2 %** | 137.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 410090000 | 330.00 € | **330.50 €** | 6.9 % | **7.0 %** | 330.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.00 € | **110.50 €** | 9.7 % | **10.2 %** | 110.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 143.00 € | **143.50 €** | 6.9 % | **7.3 %** | 143.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RO6164EA | 142.00 € | **142.50 €** | 8.4 % | **8.8 %** | 142.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 252.00 € | **252.50 €** | 7.9 % | **8.1 %** | 252.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 8 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 8 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 9 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 38.00 € | **38.50 €** | 9.1 % | **10.6 %** | 38.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EWS6526WC | 311.00 € | **311.50 €** | 7.9 % | **8.1 %** | 311.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDIN38646D | 494.00 € | **494.50 €** | 7.0 % | **7.1 %** | 494.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CIP 3E7L0W Rapido | 293.00 € | **293.50 €** | 8.0 % | **8.1 %** | 293.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EIV84550 | 518.00 € | **518.50 €** | 7.0 % | **7.1 %** | 518.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 71.00 € | **71.50 €** | 13.1 % | **13.9 %** | 71.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 46.00 € | **46.50 €** | 10.7 % | **11.9 %** | 46.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 600 Quick Start 85282 | 75.00 € | **75.50 €** | 8.7 % | **9.4 %** | 75.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.00 € | **11.50 €** | 34.3 % | **40.4 %** | 11.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E7K1-6BP | 69.00 € | **69.50 €** | 10.7 % | **11.5 %** | 69.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 638.00 € | **638.50 €** | 7.7 % | **7.8 %** | 638.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 336.00 € | **336.50 €** | 14.0 % | **14.1 %** | 336.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 10.00 € | **10.50 €** | 40.4 % | **47.4 %** | 10.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.00 € | **25.50 €** | 37.2 % | **40.0 %** | 25.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko EnergySpin B7WFU68416WBES | 415.00 € | **415.50 €** | 7.6 % | **7.7 %** | 415.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.00 € | **40.50 €** | 35.1 % | **36.7 %** | 40.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 204.00 € | **204.50 €** | 13.8 % | **14.1 %** | 204.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.00 € | **32.50 €** | 31.2 % | **33.2 %** | 32.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 259.00 € | **259.50 €** | 10.1 % | **10.3 %** | 259.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.50 €** | 40.0 % | **42.7 %** | 26.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Kobra 3 Max | 425.00 € | **425.50 €** | 14.1 % | **14.3 %** | 425.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-AW592 WHITE 1 karton | 248.00 € | **248.50 €** | 9.1 % | **9.3 %** | 248.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **18.50 €** | 35.3 % | **39.0 %** | 18.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 27.00 € | **27.50 €** | 31.3 % | **33.7 %** | 27.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Organic fragrance Peppermint | 16.00 € | **16.50 €** | 7.7 % | **11.0 %** | 16.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 61521kuchyňská váha Page | 22.00 € | **22.50 €** | 8.3 % | **10.7 %** | 22.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Eddie B-4821 šedý | 29.00 € | **29.50 €** | 8.2 % | **10.1 %** | 29.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.00 € | **60.50 €** | 9.4 % | **10.4 %** | 60.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH1833E0 | 147.00 € | **147.50 €** | 8.4 % | **8.8 %** | 147.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 104.00 € | **104.50 €** | 6.6 % | **7.1 %** | 104.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 110.00 € | **110.50 €** | 13.0 % | **13.6 %** | 110.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.00 € | **24.50 €** | 12.9 % | **15.2 %** | 24.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Crema 1 kg zrno | 20.00 € | **20.50 €** | 6.0 % | **8.7 %** | 20.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 12.00 € | **12.50 €** | 38.8 % | **44.6 %** | 12.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.00 € | **71.50 €** | 38.4 % | **39.3 %** | 71.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 12.00 € | **12.50 €** | 33.8 % | **39.4 %** | 12.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Adria B-4780 bílá | 25.00 € | **25.50 €** | 5.0 % | **7.1 %** | 25.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Icequeen-Wh | 19.00 € | **19.50 €** | 5.2 % | **8.0 %** | 19.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 158.00 € | **158.50 €** | 14.1 % | **14.5 %** | 158.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.00 € | **17.50 €** | 9.4 % | **12.6 %** | 17.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.00 € | **17.50 €** | 9.6 % | **12.8 %** | 17.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVI... | 10.00 € | **10.50 €** | 8.5 % | **14.0 %** | 10.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.00 € | **22.50 €** | 10.3 % | **12.8 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Poseidon D80 BOOM Soundbar | 255.00 € | **255.50 €** | 14.0 % | **14.2 %** | 255.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stropné svetlo Yeelight C2201C400 | 64.00 € | **64.50 €** | 14.8 % | **15.7 %** | 64.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Sous Vide SV06 | 132.00 € | **132.50 €** | 8.3 % | **8.8 %** | 132.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT76325VW | 166.00 € | **166.50 €** | 8.4 % | **8.7 %** | 166.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT86325VI | 199.00 € | **199.50 €** | 7.5 % | **7.8 %** | 199.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 EFC226R | 248.00 € | **248.50 €** | 7.9 % | **8.1 %** | 248.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WHT643E4XBG | 246.00 € | **246.50 €** | 7.9 % | **8.1 %** | 246.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO B5RCNA406HXB3 | 520.00 € | **520.50 €** | 6.9 % | **7.1 %** | 520.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B5XRCNA366HXB | 508.00 € | **508.50 €** | 7.0 % | **7.1 %** | 508.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CDG1S514ESH | 238.00 € | **238.50 €** | 7.7 % | **8.0 %** | 238.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G10153 Horkovzdušná trouba | 169.00 € | **169.50 €** | 8.8 % | **9.1 %** | 169.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE WPNEI94A1SWIFI | 409.00 € | **409.50 €** | 6.9 % | **7.1 %** | 409.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux LKR64022AW | 463.00 € | **463.50 €** | 6.9 % | **7.0 %** | 463.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10W | 337.00 € | **337.50 €** | 6.9 % | **7.1 %** | 337.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6401 PSB | 178.00 € | **178.50 €** | 8.8 % | **9.1 %** | 178.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica TFB 128 TX | 286.00 € | **286.50 €** | 7.9 % | **8.0 %** | 286.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BBIR17300BCS | 347.00 € | **347.50 €** | 6.9 % | **7.1 %** | 347.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.00 € | **12.50 €** | 40.2 % | **46.0 %** | 12.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.00 € | **139.50 €** | 7.5 % | **7.9 %** | 139.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rixon Soundplates | 42.00 € | **42.50 €** | 8.6 % | **9.9 %** | 42.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Honey Night 160 ml | 11.00 € | **11.50 €** | 12.2 % | **17.3 %** | 11.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Graef S 10005 | 113.00 € | **113.50 €** | 9.9 % | **10.4 %** | 113.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EF167 | 14.00 € | **14.50 €** | 8.8 % | **12.7 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux ESKQ9 | 14.00 € | **14.50 €** | 8.8 % | **12.7 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90502 French press Atria 800 ml | 11.00 € | **11.50 €** | 8.3 % | **13.2 %** | 11.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Status STA 176214 | 10.00 € | **10.50 €** | 8.0 % | **13.4 %** | 10.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.00 € | **16.50 €** | 6.7 % | **10.0 %** | 16.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 18.00 € | **18.50 €** | 8.2 % | **11.2 %** | 18.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **23.50 €** | 14.0 % | **16.5 %** | 23.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 84.00 € | **84.50 €** | 13.5 % | **14.2 %** | 84.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco Pur Arabica Premium 1 kg zrno | 22.00 € | **22.50 €** | 6.1 % | **8.5 %** | 22.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 43.00 € | **43.50 €** | 9.1 % | **10.4 %** | 43.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 24.00 € | **24.50 €** | 42.4 % | **45.4 %** | 24.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 17.00 € | **17.50 €** | 11.0 % | **14.3 %** | 17.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Rotaro PowerVac 2v1 20V | 117.00 € | **117.50 €** | 8.5 % | **9.0 %** | 117.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B3BCNA324HS | 626.00 € | **626.50 €** | 9.5 % | **9.6 %** | 626.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 13.00 € | **13.50 €** | 32.1 % | **37.2 %** | 13.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 22.00 € | **22.50 €** | 16.8 % | **19.5 %** | 22.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík digitální TechnoLine WT 181 | 19.50 € | **20.00 €** | 12.6 % | **15.5 %** | 19.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.00 € | **36.50 €** | 8.7 % | **10.2 %** | 36.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samolepiace hodiny G21 Fashion Style | 12.00 € | **12.50 €** | 13.0 % | **17.8 %** | 12.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FVB015X | 18.00 € | **18.50 €** | 7.3 % | **10.3 %** | 18.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-SW100 BLACK | 221.00 € | **221.50 €** | 9.1 % | **9.3 %** | 221.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| GameSir G7 HE wired controller (white) | 43.00 € | **43.50 €** | 12.1 % | **13.4 %** | 43.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superfire BM01 4-in-1 bicycle light | 19.00 € | **19.50 €** | 11.1 % | **14.1 %** | 19.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 89.00 € | **89.50 €** | 6.4 % | **7.0 %** | 89.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.00 € | **16.50 €** | 43.7 % | **48.2 %** | 16.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic TPU (čierny) 1 kg | 21.00 € | **21.50 €** | 9.0 % | **11.6 %** | 21.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.00 € | **19.50 €** | 34.8 % | **38.3 %** | 19.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.00 € | **16.50 €** | 28.2 % | **32.2 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samolepiace hodiny G21 Classic Style | 12.00 € | **12.50 €** | 13.0 % | **17.8 %** | 12.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samolepiace hodiny G21 Eccentric Style | 12.00 € | **12.50 €** | 13.0 % | **17.8 %** | 12.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.00 € | **21.50 €** | 35.0 % | **38.2 %** | 21.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.00 € | **11.50 €** | 35.1 % | **41.2 %** | 11.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti Uni-T A13T | 10.00 € | **10.50 €** | 6.0 % | **11.3 %** | 10.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 28.00 € | **28.50 €** | 10.7 % | **12.6 %** | 28.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.00 € | **16.50 €** | 31.3 % | **35.4 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.00 € | **10.50 €** | 26.6 % | **33.0 %** | 10.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.00 € | **16.50 €** | 14.4 % | **18.0 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 236.00 € | **236.50 €** | 11.1 % | **11.3 %** | 236.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 19.6 % | **21.8 %** | 28.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight senzor pre meteostanice TE110 | 5.20 € | **5.70 €** | 18.1 % | **29.4 %** | 5.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.00 € | **23.50 €** | 6.4 % | **8.7 %** | 23.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| CR-Silk PLA Filament Creallity (Silver) | 17.00 € | **17.50 €** | 11.5 % | **14.7 %** | 17.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický skúter NAVEE GT5 Max | 569.00 € | **569.50 €** | 6.8 % | **6.9 %** | 569.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Albi sonický Deluxe - Kvietky | 25.00 € | **25.50 €** | 8.3 % | **10.5 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 14.00 € | **14.50 €** | 38.8 % | **43.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **14.50 €** | 29.0 % | **33.7 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **47.50 €** | 35.9 % | **37.3 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.00 € | **24.50 €** | 33.3 % | **36.1 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.00 € | **25.50 €** | 18.3 % | **20.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.00 € | **25.50 €** | 18.3 % | **20.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 25.00 € | **25.50 €** | 29.2 % | **31.8 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko FRL5388B | 132.00 € | **132.50 €** | 8.2 % | **8.6 %** | 132.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip Red | 78.50 € | **79.00 €** | 10.0 % | **10.7 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip White | 78.50 € | **79.00 €** | 10.0 % | **10.7 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 31.00 € | **31.50 €** | 30.2 % | **32.3 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kruger&Matz Simple 924 GSM mobilní tlačítkový telefo... | 21.50 € | **22.00 €** | 13.8 % | **16.4 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná   6V / 12Ah  XTREME / Enerwell bezúd... | 11.50 € | **12.00 €** | 11.3 % | **16.1 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.00 € | **10.50 €** | 22.8 % | **29.0 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.00 € | **10.50 €** | 9.4 % | **14.9 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 46.00 € | **46.50 €** | 12.3 % | **13.5 %** | 46.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 12.00 € | **12.50 €** | 21.0 % | **26.1 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Yeelight Svetlo do skrine čierne 40 cm 2700K | 11.00 € | **11.50 €** | 12.5 % | **17.6 %** | 11.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny nástěnné TechnoLine WT 7160 | 21.50 € | **22.00 €** | 5.2 % | **7.7 %** | 22.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 21.00 € | **21.50 €** | 9.7 % | **12.3 %** | 21.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 75.00 € | **75.50 €** | 14.1 % | **14.8 %** | 75.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 59.00 € | **59.50 €** | 9.3 % | **10.2 %** | 59.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 25.00 € | **25.50 €** | 7.7 % | **9.8 %** | 25.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonická zubná kefka s aplikáciou pre deti, sada konc... | 15.00 € | **15.50 €** | 14.0 % | **17.8 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1346.50 € | **1346.90 €** | 7.4 % | **7.4 %** | 1346.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1018900 Pákový kávovar | 124.50 € | **124.90 €** | 8.5 % | **8.8 %** | 124.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 8501A | 150.50 € | **150.90 €** | 5.5 % | **5.8 %** | 150.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.50 € | **195.90 €** | 9.9 % | **10.1 %** | 195.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 250.50 € | **250.90 €** | 7.1 % | **7.3 %** | 250.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Pizzeria 927/01, černá | 205.50 € | **205.90 €** | 8.0 % | **8.2 %** | 205.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.6 % | **12.0 %** | 113.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 8401SE | 124.50 € | **124.90 €** | 7.1 % | **7.4 %** | 124.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun CG9043 | 214.50 € | **214.90 €** | 7.8 % | **8.0 %** | 214.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW5558E0 | 177.50 € | **177.90 €** | 8.6 % | **8.9 %** | 177.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer kuchyňský robot ZKR2010 | 175.50 € | **175.90 €** | 8.4 % | **8.7 %** | 175.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.50 € | **212.90 €** | 9.9 % | **10.1 %** | 212.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi FM2100 Mikrovlnná trouba s grilem | 108.50 € | **108.90 €** | 9.7 % | **10.1 %** | 108.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 210A | 216.50 € | **216.90 €** | 7.8 % | **8.0 %** | 216.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 96.50 € | **96.90 €** | 40.7 % | **41.3 %** | 96.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection brown | 210.50 € | **210.90 €** | 17.7 % | **17.9 %** | 210.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection Cappuccino | 210.50 € | **210.90 €** | 17.7 % | **17.9 %** | 210.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Perfection white | 210.50 € | **210.90 €** | 17.7 % | **17.9 %** | 210.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal INGENIO Expertise sada 3 ks | 64.50 € | **64.90 €** | 7.6 % | **8.3 %** | 64.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Chytrá meteorologická stanice GARNI 925T | 160.50 € | **160.90 €** | 12.9 % | **13.2 %** | 160.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada BOYA BY-WM4 Pro-K6 | 108.50 € | **108.90 €** | 6.7 % | **7.1 %** | 108.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 84.50 € | **84.90 €** | 13.2 % | **13.7 %** | 84.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 1535SS | 206.50 € | **206.90 €** | 8.3 % | **8.5 %** | 206.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 74.50 € | **74.90 €** | 12.4 % | **13.0 %** | 74.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 20 | 233.50 € | **233.90 €** | 9.7 % | **9.9 %** | 233.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT161E | 108.50 € | **108.90 €** | 6.1 % | **6.5 %** | 108.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.50 € | **76.90 €** | 38.3 % | **39.1 %** | 76.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Nefrit | 117.50 € | **117.90 €** | 9.6 % | **10.0 %** | 117.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.50 € | **78.90 €** | 14.7 % | **15.3 %** | 78.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 13.50 € | **13.90 €** | 11.3 % | **14.6 %** | 13.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.4 % | **14.2 %** | 11.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.50 € | **12.90 €** | 30.3 % | **34.5 %** | 12.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.50 € | **11.90 €** | 5.7 % | **9.4 %** | 11.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.50 € | **10.90 €** | 7.2 % | **11.3 %** | 10.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 14.50 € | **14.90 €** | 42.4 % | **46.3 %** | 14.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.50 € | **14.90 €** | 45.2 % | **49.2 %** | 14.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 350 ml, nerezová | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 713240002 | 11.50 € | **11.90 €** | 9.5 % | **13.3 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| AB-COM LNB AB 01 M Quattro | 11.50 € | **11.90 €** | 12.9 % | **16.8 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 680 ml, nerezová | 11.50 € | **11.90 €** | 15.0 % | **19.0 %** | 11.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.50 € | **10.90 €** | 33.0 % | **38.0 %** | 10.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 13.50 € | **13.90 €** | 10.2 % | **13.5 %** | 13.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.50 € | **15.90 €** | 7.8 % | **10.6 %** | 15.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco INTENSO 500 g | 11.50 € | **11.90 €** | 5.0 % | **8.7 %** | 11.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter digitálny V33 | 11.50 € | **11.90 €** | 42.1 % | **47.0 %** | 11.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.50 € | **13.90 €** | 32.2 % | **36.2 %** | 13.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 13.50 € | **13.90 €** | 38.6 % | **42.7 %** | 13.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson CR 50 | 14.50 € | **14.90 €** | 7.3 % | **10.2 %** | 14.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodiny nástěnné TechnoLine WT 1019 | 12.50 € | **12.90 €** | 6.2 % | **9.6 %** | 12.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laica VT3509 | 11.50 € | **11.90 €** | 6.2 % | **9.9 %** | 11.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 11.50 € | **11.90 €** | 6.6 % | **10.3 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BL | 11.50 € | **11.90 €** | 6.6 % | **10.3 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.50 € | **12.90 €** | 15.0 % | **18.6 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.20 € | **4.60 €** | 35.5 % | **48.4 %** | 4.24 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 16.50 € | **16.90 €** | 13.9 % | **16.6 %** | 16.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-PE145 | 39.50 € | **39.90 €** | 7.4 % | **8.5 %** | 39.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 21.50 € | **21.90 €** | 6.3 % | **8.2 %** | 21.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.50 € | **30.90 €** | 31.8 % | **33.5 %** | 30.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.50 € | **22.90 €** | 11.7 % | **13.7 %** | 22.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.75 € | dobehnutie 2. najlacnejšieho konkurenta |
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
| Termoska G21 nerezová 2500 ml, čierno-sivá | 33.50 € | **33.90 €** | 17.2 % | **18.6 %** | 33.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.50 € | **20.90 €** | 27.8 % | **30.3 %** | 20.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.50 € | **22.90 €** | 13.1 % | **15.1 %** | 22.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.50 € | **31.90 €** | 37.0 % | **38.7 %** | 31.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 24010-56 | 40.50 € | **40.90 €** | 9.8 % | **10.9 %** | 40.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight projekčné hodiny s meteostanicou | 20.50 € | **20.90 €** | 8.0 % | **10.1 %** | 20.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.50 € | **27.90 €** | 40.4 % | **42.5 %** | 27.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco SUPREMO 1 kg zrno | 21.50 € | **21.90 €** | 6.7 % | **8.7 %** | 21.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.50 € | **16.90 €** | 15.4 % | **18.2 %** | 16.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 25.50 € | **25.90 €** | 32.5 % | **34.5 %** | 25.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 23310-56/RH | 45.50 € | **45.90 €** | 13.8 % | **14.8 %** | 45.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.50 € | **36.90 €** | 7.9 % | **9.1 %** | 36.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Mano 3219 90020 | 55.50 € | **55.90 €** | 9.4 % | **10.2 %** | 55.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Rouge BP3443 | 31.50 € | **31.90 €** | 8.3 % | **9.7 %** | 31.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 31.50 € | **31.90 €** | 11.3 % | **12.7 %** | 31.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 30.50 € | **30.90 €** | 11.8 % | **13.3 %** | 30.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZCK7650 | 32.50 € | **32.90 €** | 11.2 % | **12.5 %** | 32.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica KF 17191 | 29.50 € | **29.90 €** | 21.1 % | **22.7 %** | 29.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.50 € | **23.90 €** | 30.6 % | **32.8 %** | 23.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.50 € | **24.90 €** | 36.1 % | **38.3 %** | 24.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal HB 65KD38 | 55.50 € | **55.90 €** | 11.5 % | **12.3 %** | 55.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 10m, USB A+C, 2 ... | 20.50 € | **20.90 €** | 36.6 % | **39.3 %** | 20.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.90 €** | 10.1 % | **12.5 %** | 18.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 18.50 € | **18.90 €** | 7.3 % | **9.6 %** | 18.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 33 Ah MHPower MS33-12 | 57.50 € | **57.90 €** | 38856.6 % | **39127.6 %** | 57.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 21.50 € | **21.90 €** | 11.2 % | **13.3 %** | 21.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Espresso Intenso 1 kg zrno | 17.50 € | **17.90 €** | 5.7 % | **8.1 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.50 € | **18.90 €** | 15.1 % | **17.6 %** | 18.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradní vodní filtr GARNI WF 45T | 18.50 € | **18.90 €** | 10.4 % | **12.8 %** | 18.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Combi Clean M + náhr. Static | 20.50 € | **20.90 €** | 7.9 % | **10.1 %** | 20.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor pre batožinu, Find My kompatibilný | 22.50 € | **22.90 €** | 38.8 % | **41.3 %** | 22.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 22.50 € | **22.90 €** | 21.5 % | **23.7 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.50 € | **19.90 €** | 31.7 % | **34.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.50 € | **20.90 €** | 36.4 % | **39.0 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.6 % | **13.2 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rooma Espresso A7 bílá | 537.50 € | **537.90 €** | 5.9 % | **6.0 %** | 537.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 274.50 € | **274.90 €** | 14.3 % | **14.5 %** | 274.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 394.50 € | **394.90 €** | 6.9 % | **7.1 %** | 394.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 350.50 € | **350.90 €** | 5.7 % | **5.8 %** | 350.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Intelligent self-cleaning cat litterbox UBPet C20 | 277.50 € | **277.90 €** | 12.0 % | **12.2 %** | 277.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WG894A25 | 499.50 € | **499.90 €** | 9.0 % | **9.1 %** | 499.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 263.50 € | **263.90 €** | 8.5 % | **8.6 %** | 263.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Sensazione černý | 333.50 € | **333.90 €** | 6.8 % | **6.9 %** | 333.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L7 | 270.50 € | **270.90 €** | 7.9 % | **8.0 %** | 270.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH98A9WO | 278.50 € | **278.90 €** | 7.7 % | **7.9 %** | 278.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool FFB 8469 BV EE | 344.50 € | **344.90 €** | 7.0 % | **7.1 %** | 344.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GECS5C70XPA | 471.50 € | **471.90 €** | 7.0 % | **7.1 %** | 471.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 888.50 € | **888.90 €** | 7.3 % | **7.3 %** | 888.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| OBSBOT Tiny 3 MIC Combo | 468.50 € | **468.90 €** | 12.7 % | **12.8 %** | 468.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 374.50 € | **374.90 €** | 7.7 % | **7.8 %** | 374.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.60 € | **4.90 €** | 14.4 % | **21.8 %** | 4.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.70 € | **4.00 €** | 36.1 % | **47.2 %** | 3.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.30 € | **7.60 €** | 36.1 % | **41.7 %** | 7.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.50 € | **7.80 €** | 36.4 % | **41.9 %** | 7.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **5.30 €** | 36.0 % | **44.1 %** | 5.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.70 € | **7.00 €** | 30.6 % | **36.5 %** | 6.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.20 € | **2.50 €** | 18.5 % | **34.6 %** | 2.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.60 € | **9.80 €** | 31.2 % | **33.9 %** | 9.61 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely | 2.30 € | **2.50 €** | 35.5 % | **47.3 %** | 2.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 4.80 € | **5.00 €** | 37.9 % | **43.6 %** | 4.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.40 € | **3.60 €** | 33.5 % | **41.4 %** | 3.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka, 16A, biela, vypínač | 1.80 € | **2.00 €** | 34.3 % | **49.2 %** | 1.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 529.90 € | **530.00 €** | 6.0 % | **6.1 %** | 529.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 379.90 € | **380.00 €** | 6.9 % | **7.0 %** | 379.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 284.90 € | **285.00 €** | 14.1 % | **14.1 %** | 284.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 278.90 € | **279.00 €** | 7.7 % | **7.8 %** | 278.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.90 € | **318.00 €** | 12.1 % | **12.1 %** | 318.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 659.90 € | **660.00 €** | 10.7 % | **10.7 %** | 660.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **561.00 €** | 7.3 % | **7.4 %** | 561.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 16.90 € | **17.00 €** | 10.4 % | **11.0 %** | 16.92 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 22.90 € | **23.00 €** | 32.6 % | **33.2 %** | 22.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 17.90 € | **18.00 €** | 44.7 % | **45.5 %** | 17.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.90 € | **21.00 €** | 37.7 % | **38.4 %** | 20.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 16.90 € | **17.00 €** | 44.5 % | **45.3 %** | 16.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Filter Hepa 13 for AP100 | 47.90 € | **48.00 €** | 10.0 % | **10.2 %** | 47.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 30.90 € | **31.00 €** | 12.1 % | **12.5 %** | 30.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 41.90 € | **42.00 €** | 17.3 % | **17.5 %** | 41.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E200SM | 16.90 € | **17.00 €** | 14.7 % | **15.4 %** | 16.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 37.90 € | **38.00 €** | 9.8 % | **10.1 %** | 37.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 39.90 € | **40.00 €** | 37.9 % | **38.2 %** | 39.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 22.90 € | **23.00 €** | 9.6 % | **10.1 %** | 22.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 45.90 € | **46.00 €** | 9.8 % | **10.1 %** | 45.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 45.90 € | **46.00 €** | 9.8 % | **10.1 %** | 45.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 49.90 € | **50.00 €** | 63.3 % | **63.6 %** | 49.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 21.90 € | **22.00 €** | 7.2 % | **7.7 %** | 21.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.20 € | **9.30 €** | 24.2 % | **25.6 %** | 9.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 39.90 € | **40.00 €** | 33.6 % | **33.9 %** | 39.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 7.0 % | **7.4 %** | 23.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal KO5S08E0 | 34.90 € | **35.00 €** | 9.7 % | **10.0 %** | 34.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26800-56/RH | 25.90 € | **26.00 €** | 7.3 % | **7.7 %** | 25.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 1548/04 | 28.90 € | **29.00 €** | 9.5 % | **9.9 %** | 28.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 1548/05 | 28.90 € | **29.00 €** | 9.5 % | **9.9 %** | 28.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice TechnoLine WS 9251 | 52.90 € | **53.00 €** | 5.9 % | **6.1 %** | 52.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filters ND8/16/32 Freewell for DJI Neo | 19.90 € | **20.00 €** | 12.1 % | **12.7 %** | 19.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 44.90 € | **45.00 €** | 5.7 % | **6.0 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 28.90 € | **29.00 €** | 8.6 % | **9.0 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 33.90 € | **34.00 €** | 34.3 % | **34.7 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.90 € | **27.00 €** | 35.2 % | **35.7 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Činky REBEL ACTIVE RBA-2330-6 litinové neoprenové HE... | 34.90 € | **35.00 €** | 14.2 % | **14.5 %** | 35.04 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM40T | 28.90 € | **29.00 €** | 12.4 % | **12.8 %** | 29.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 16.90 € | **17.00 €** | 6.9 % | **7.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.60 € | **5.70 €** | 35.1 % | **37.5 %** | 5.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.10 € | **5.20 €** | 43.5 % | **46.3 %** | 5.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR senzor pro E27 žiarovku, biely | 6.80 € | **6.90 €** | 44.0 % | **46.1 %** | 6.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.10 € | **6.20 €** | 34.4 % | **36.6 %** | 6.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR stropný senzor, interiérový, biely | 7.30 € | **7.40 €** | 43.7 % | **45.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 7.30 € | **7.40 €** | 35.8 % | **37.7 %** | 7.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.60 € | **4.70 €** | 32.1 % | **35.0 %** | 4.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka s viečkom, biela | 6.30 € | **6.40 €** | 34.1 % | **36.2 %** | 6.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.80 € | **5.90 €** | 9.2 % | **11.0 %** | 5.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.60 € | **6.70 €** | 32.5 % | **34.5 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.80 € | **6.90 €** | 43.2 % | **45.3 %** | 6.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.80 € | **6.90 €** | 43.2 % | **45.3 %** | 6.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.60 € | **6.70 €** | 29.9 % | **31.9 %** | 6.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.30 € | **5.40 €** | 34.7 % | **37.2 %** | 5.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.80 € | **5.90 €** | 36.7 % | **39.0 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.30 € | **4.40 €** | 52.0 % | **55.5 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.60 € | **3.70 €** | 42.8 % | **46.7 %** | 3.65 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.00 € | **2.10 €** | 41.4 % | **48.5 %** | 2.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.00 € | **1.10 €** | 29.0 % | **42.0 %** | 1.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.00 € | **1.10 €** | 29.0 % | **42.0 %** | 1.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 1.70 € | **1.80 €** | 31.6 % | **39.4 %** | 1.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.80 € | **3.90 €** | 29.3 % | **32.7 %** | 3.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.20 € | **1.30 €** | 39.4 % | **51.0 %** | 1.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 1.90 € | **2.00 €** | 50.0 % | **57.9 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.50 € | **1.60 €** | 35.5 % | **44.5 %** | 1.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.40 € | **1.50 €** | 38.8 % | **48.7 %** | 1.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 2.90 € | **3.00 €** | 34.7 % | **39.4 %** | 2.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 1.90 € | **2.00 €** | 33.2 % | **40.2 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.90 € | **2.00 €** | 29.8 % | **36.6 %** | 1.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.50 € | **3.60 €** | 37.5 % | **41.4 %** | 3.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.60 € | **3.70 €** | 32.4 % | **36.1 %** | 3.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.10 € | **3.20 €** | 31.3 % | **35.5 %** | 3.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.30 € | **3.40 €** | 34.1 % | **38.2 %** | 3.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.10 € | **3.20 €** | 34.1 % | **38.4 %** | 3.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 3.80 € | **3.90 €** | 34.3 % | **37.9 %** | 3.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.60 €** | 31.7 % | **35.5 %** | 3.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.00 € | **1.10 €** | 42.6 % | **56.9 %** | 1.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.00 € | **1.10 €** | 42.6 % | **56.9 %** | 1.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.60 € | **2.70 €** | 32.9 % | **38.1 %** | 2.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.50 € | **3.60 €** | 33.6 % | **37.4 %** | 3.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 12.4 % | **16.1 %** | 3.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.60 € | **3.70 €** | 41.4 % | **45.3 %** | 3.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.50 € | **3.60 €** | 48.2 % | **52.4 %** | 3.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.40 € | **3.50 €** | 32.9 % | **36.8 %** | 3.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 22.2 % | **26.9 %** | 2.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.50 € | **2.60 €** | 31.1 % | **36.4 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, čierny | 2.50 € | **2.60 €** | 30.3 % | **35.5 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.70 € | **1.80 €** | 22.3 % | **29.5 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 0.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight SCART kábel, SCART konektor - SCART konektor... | 1.80 € | **1.90 €** | 30.7 % | **37.9 %** | 1.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **1.90 €** | 29.5 % | **36.7 %** | 1.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny rozbočovač hybridný priamy | 1.80 € | **1.90 €** | 28.4 % | **35.5 %** | 1.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 1.80 € | **1.90 €** | 26.2 % | **33.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.50 € | **8.60 €** | 35.0 % | **36.6 %** | 8.54 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.80 € | **8.90 €** | 44.2 % | **45.9 %** | 8.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.20 € | **3.30 €** | 35.5 % | **39.7 %** | 3.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.20 € | **5.30 €** | 40.5 % | **43.2 %** | 5.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.50 € | **7.60 €** | 50.6 % | **52.6 %** | 7.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 11.90 € | **12.00 €** | 36.8 % | **38.0 %** | 11.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, 20 - 200A | 5.00 € | **5.10 €** | 4.5 % | **6.6 %** | 5.06 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.70 € | **6.80 €** | 30.9 % | **32.9 %** | 6.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 8.7 % | **9.7 %** | 10.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-50245 | 12.90 € | **13.00 €** | 9.9 % | **10.8 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.10 € | **9.20 €** | 38.0 % | **39.5 %** | 9.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 12.90 € | **13.00 €** | 25.3 % | **26.3 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.50 € | **9.60 €** | 30.5 % | **31.8 %** | 9.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.50 € | **4.60 €** | 42.9 % | **46.1 %** | 4.57 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 10.90 € | **11.00 €** | 9.3 % | **10.3 %** | 10.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 5.40 € | **5.50 €** | 22.3 % | **24.6 %** | 5.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.40 € | **5.50 €** | 33.8 % | **36.3 %** | 5.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 10.90 € | **11.00 €** | 30.7 % | **31.9 %** | 10.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 4.70 € | **4.80 €** | 34.5 % | **37.4 %** | 4.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.40 € | **7.50 €** | 36.4 % | **38.3 %** | 7.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.00 € | **5.10 €** | 15.8 % | **18.1 %** | 5.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.40 € | **7.50 €** | 36.4 % | **38.3 %** | 7.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 7.90 € | **8.00 €** | 10.9 % | **12.3 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.20 € | **3.30 €** | 16.1 % | **19.8 %** | 3.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.70 € | **3.80 €** | 16.6 % | **19.7 %** | 3.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.70 € | **3.80 €** | 36.1 % | **39.8 %** | 3.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 8.40 € | **8.50 €** | 43.5 % | **45.2 %** | 8.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak DVB-T a internetové antény na stenu, ... | 7.90 € | **8.00 €** | 27.7 % | **29.3 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.30 € | **8.40 €** | 52.7 % | **54.5 %** | 8.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.30 €** | 8.7 % | **11.3 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.60 €** | 30.7 % | **33.6 %** | 4.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.20 € | **4.30 €** | 9.1 % | **11.7 %** | 4.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.30 € | **9.40 €** | 30.1 % | **31.5 %** | 9.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.70 € | **4.80 €** | 20.5 % | **23.1 %** | 4.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 23.3 % | **25.4 %** | 5.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.60 € | **8.70 €** | 5.6 % | **6.8 %** | 8.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Honey Day 160 ml | 10.90 € | **11.00 €** | 11.2 % | **12.2 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.40 € | **8.50 €** | 32.1 % | **33.7 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 9.10 € | **9.20 €** | 39.6 % | **41.1 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.00 € | **6.10 €** | 30.4 % | **32.6 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 33.7 % | **36.4 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.00 € | **8.10 €** | 35.2 % | **36.9 %** | 8.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.40 € | **6.50 €** | 39.9 % | **42.1 %** | 6.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Činky REBEL ACTIVE RBA-2330-2.5 litinové neoprenové ... | 14.90 € | **15.00 €** | 12.5 % | **13.2 %** | 15.08 € | dobehnutie 2. najlacnejšieho konkurenta |
| Budík digitální TechnoLine WT 500 | 91.90 € | **92.00 €** | 9.3 % | **9.4 %** | 91.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 109.90 € | **110.00 €** | 19.9 % | **20.0 %** | 109.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 69.90 € | **70.00 €** | 8.0 % | **8.2 %** | 69.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 35B1 | 136.90 € | **137.00 €** | 5.7 % | **5.8 %** | 136.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysávač TP-Link Tapo RV20 Max White robotický s mopo... | 123.90 € | **124.00 €** | 6.2 % | **6.3 %** | 124.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 228.90 € | **229.00 €** | 8.0 % | **8.0 %** | 229.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 81.90 € | **82.00 €** | 6.9 % | **7.0 %** | 82.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 112.90 € | **113.00 €** | 7.3 % | **7.4 %** | 113.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 103.90 € | **104.00 €** | 7.9 % | **8.0 %** | 104.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO MGC20130BFB | 78.90 € | **79.00 €** | 9.1 % | **9.2 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Yamaha RX-A8A BLACK | 3557.90 € | **3558.00 €** | 9.3 % | **9.3 %** | 3557.96 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1367)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 6966.90 € | **6503.00 €** | 15.0 % | **7.3 %** | 6503.50 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **2911.00 €** | 15.0 % | **6.0 %** | 2911.50 € | stávame sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.00 €** | 15.0 % | **5.9 %** | 2645.50 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2573.90 € | **2350.00 €** | 15.0 % | **5.0 %** | 1623.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 669.00 € | **461.50 €** | 52.3 % | **5.1 %** | 436.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **363.00 €** | 64.7 % | **7.0 %** | 363.50 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2374.00 €** | 15.0 % | **6.6 %** | 2374.50 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 519.00 € | **372.90 €** | 48.9 % | **7.0 %** | 373.00 € | stávame sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1472.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA Z70 Ultra Roller kompletná sada – Metal Black | 1615.00 € | **1475.90 €** | 14.9 % | **5.0 %** | 1472.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.50 €** | 28.6 % | **5.9 %** | 633.90 € | stávame sa najlacnejší |
| Electrolux 700 SENSE Hob2Hood LFG516X | 399.00 € | **265.90 €** | 57.8 % | **5.1 %** | 248.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2640.90 € | **2520.50 €** | 10.0 % | **5.0 %** | 1746.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **349.90 €** | 39.7 % | **5.1 %** | 334.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **526.00 €** | 28.6 % | **5.9 %** | 526.50 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 529.00 € | **418.00 €** | 32.9 % | **5.0 %** | 384.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2416.50 € | **2306.90 €** | 10.0 % | **5.0 %** | 1522.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2416.50 € | **2306.90 €** | 10.0 % | **5.0 %** | 1620.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **383.50 €** | 35.8 % | **6.5 %** | 383.90 € | stávame sa najlacnejší |
| BEKO HILG64220SW | 269.00 € | **164.00 €** | 72.3 % | **5.1 %** | 152.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **495.90 €** | 26.9 % | **5.0 %** | 482.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO RFSA240M43WN | 469.00 € | **367.50 €** | 34.1 % | **5.1 %** | 353.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S85H | 2185.90 € | **2086.50 €** | 10.0 % | **5.0 %** | 1349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LIR 60430 | 329.00 € | **231.90 €** | 49.1 % | **5.1 %** | 220.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslařský trenažér HMS Premium ZW1600 | 766.50 € | **670.90 €** | 135371.9 % | **118475.5 %** | 671.00 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **506.50 €** | 24.2 % | **5.0 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 1028.50 € | **939.00 €** | 15.0 % | **5.0 %** | 921.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **983.90 €** | 15.0 % | **6.1 %** | 984.00 € | stávame sa najlacnejší |
| Electrolux EOF3H40TH | 339.00 € | **259.00 €** | 37.4 % | **5.0 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux KGS64362XX | 269.00 € | **190.90 €** | 48.2 % | **5.2 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rozváděč R-FVE-A40-1 – třída ochrany I+II (s AC Svod... | 1285.00 € | **1207.00 €** | 15.0 % | **8.0 %** | 1207.50 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 983.90 € | **909.50 €** | 15.0 % | **6.3 %** | 909.90 € | stávame sa najlacnejší |
| Gorenje W2PNEI84A1SW | 439.00 € | **370.00 €** | 35.3 % | **14.0 %** | 370.50 € | stávame sa najlacnejší |
| Beko BM3WFU3941WBW | 439.00 € | **372.50 €** | 23.9 % | **5.1 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 746.50 € | **681.50 €** | 15.0 % | **5.0 %** | 662.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE FN617EES5 | 469.00 € | **404.00 €** | 24.0 % | **6.8 %** | 404.50 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 954.00 € | **889.50 €** | 15.0 % | **7.2 %** | 889.90 € | stávame sa najlacnejší |
| Samsung OLED QE65S85H | 1366.00 € | **1303.90 €** | 10.0 % | **5.0 %** | 880.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah MHPower L150-12-OUT | 712.90 € | **650.90 €** | 15.0 % | **5.0 %** | 631.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.50 €** | 15.0 % | **5.4 %** | 669.90 € | stávame sa najlacnejší |
| Rozváděč R-FVE-A40-3 – třída ochrany I+II (bez AC Sv... | 975.50 € | **916.90 €** | 15.0 % | **8.1 %** | 917.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT Antik Water Heater PWH 9kW (p... | 1024.50 € | **967.50 €** | 15.0 % | **8.6 %** | 967.90 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max Plus robotický s mopom... | 272.50 € | **216.90 €** | 32.1 % | **5.1 %** | 190.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 140.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 199.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 357.50 € | **303.00 €** | 72562.6 % | **61485.4 %** | 303.50 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 559.00 € | **505.90 €** | 18.2 % | **7.0 %** | 506.00 € | stávame sa najlacnejší |
| FINLUX 55FQK9060 ULTRA HD 4K QLED SMART TIVO | 610.90 € | **557.90 €** | 15.0 % | **5.0 %** | 547.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Měnič napětí CARSPA P5000 24V/230V 5000W USB, čistá ... | 620.50 € | **567.50 €** | 15.0 % | **5.2 %** | 567.90 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 901.00 € | **848.50 €** | 15.0 % | **8.3 %** | 848.90 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 599.00 € | **547.50 €** | 15.0 % | **5.1 %** | 546.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 418.00 € | **368.90 €** | 73777.7 % | **65099.7 %** | 369.00 € | stávame sa najlacnejší |
| BEKO CTB 6250 W | 159.00 € | **109.90 €** | 52.0 % | **5.0 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 B | 159.00 € | **109.90 €** | 52.0 % | **5.0 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Micro RGB MRE55R85H | 1045.90 € | **998.50 €** | 10.0 % | **5.0 %** | 869.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower L100-12-OUT | 551.90 € | **504.90 €** | 15.0 % | **5.2 %** | 505.00 € | stávame sa najlacnejší |
| Klimatizace MW POWER ALFA 12K WIFI V1, 12000BTu, R32 | 535.90 € | **489.50 €** | 15.0 % | **5.1 %** | 479.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LHR3233CK | 199.00 € | **153.00 €** | 36.6 % | **5.0 %** | 128.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LaserPecker LX2 40W laserový gravír | 1879.50 € | **1834.50 €** | 15.0 % | **12.2 %** | 1834.90 € | stávame sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **411.00 €** | 18.3 % | **6.8 %** | 411.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT Victron Energy SmartSolar 250... | 614.50 € | **571.90 €** | 15.0 % | **7.0 %** | 572.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT Victron Energy SmartSolar 150... | 589.00 € | **546.50 €** | 15.0 % | **6.7 %** | 546.90 € | stávame sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 118.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Vital Air II 2302 90000, černá | 209.99 € | **169.90 €** | 34.1 % | **8.5 %** | 170.00 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **728.50 €** | 15.0 % | **9.1 %** | 728.90 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max robotický s mopom, výk... | 188.50 € | **150.50 €** | 31.9 % | **5.3 %** | 143.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **389.50 €** | 15.0 % | **5.1 %** | 279.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor ANTIK AC Water Heater (On-Grid) | 415.50 € | **379.50 €** | 15.0 % | **5.1 %** | 378.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 532.90 € | **498.00 €** | 15.0 % | **7.5 %** | 498.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT Antik Water Heater PWH 01 V3+... | 397.90 € | **363.50 €** | 15.0 % | **5.1 %** | 361.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **368.50 €** | 15.0 % | **5.2 %** | 368.90 € | stávame sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 782.50 € | **749.50 €** | 15.0 % | **10.2 %** | 749.90 € | stávame sa najlacnejší |
| Electrolux EOF3H50BK | 299.00 € | **267.90 €** | 17.3 % | **5.1 %** | 218.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 649.90 € | **619.50 €** | 15.0 % | **9.6 %** | 619.90 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4513 WINDSURFING  3... | 350.50 € | **320.90 €** | 14.7 % | **5.0 %** | 315.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 377.50 € | **348.50 €** | 15.0 % | **6.2 %** | 348.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 599.00 € | **571.90 €** | 10.0 % | **5.0 %** | 571.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **651.90 €** | 15.0 % | **10.5 %** | 652.00 € | stávame sa najlacnejší |
| Puškohled LEVENHUK Halo NVR50 s nočním viděním | 425.50 € | **399.00 €** | 15.0 % | **7.8 %** | 399.50 € | stávame sa najlacnejší |
| Čistiaci robot ULTENIC MX50 | 445.90 € | **419.50 €** | 15.0 % | **8.2 %** | 419.90 € | stávame sa najlacnejší |
| Cycplus T2 smart bike trainer | 615.90 € | **589.50 €** | 15.0 % | **10.1 %** | 589.90 € | stávame sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.50 €** | 15.0 % | **9.8 %** | 538.90 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 544.50 € | **519.50 €** | 15.0 % | **9.8 %** | 519.90 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.50 €** | 49.9 % | **19.6 %** | 98.90 € | stávame sa najlacnejší |
| FINLUX 32FQI8061 SMART QLED TV FULL HD TIVO | 302.00 € | **277.00 €** | 14.9 % | **5.4 %** | 277.50 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 261.00 € | **236.90 €** | 46029.4 % | **41769.9 %** | 237.00 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1801 | 261.00 € | **236.90 €** | 46029.4 % | **41769.9 %** | 237.00 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **508.90 €** | 15.0 % | **9.8 %** | 509.00 € | stávame sa najlacnejší |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 503.50 € | **479.50 €** | 15.0 % | **9.5 %** | 479.90 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **348.00 €** | 15.1 % | **7.7 %** | 348.50 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 273.50 € | **249.90 €** | 15.0 % | **5.1 %** | 248.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AX | 513.50 € | **490.00 €** | 10.0 % | **5.0 %** | 483.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 504.50 € | **481.50 €** | 10.0 % | **5.0 %** | 472.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 395.50 € | **372.50 €** | 15.0 % | **8.3 %** | 372.90 € | stávame sa najlacnejší |
| LG GBBSJ21DPY | 495.50 € | **472.90 €** | 10.0 % | **5.0 %** | 398.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 315.50 € | **292.90 €** | 15.0 % | **6.8 %** | 293.00 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 711.50 € | **688.90 €** | 10.1 % | **6.6 %** | 689.00 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 264.50 € | **241.90 €** | 15.0 % | **5.2 %** | 200.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HDD 3.5" 4TB 64MB Western Digital PURPLE pro kamerov... | 308.50 € | **286.00 €** | 14.9 % | **6.5 %** | 286.50 € | stávame sa najlacnejší |
| Gorenje RP619EEW5 | 480.90 € | **458.90 €** | 10.1 % | **5.0 %** | 449.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslovací trenažér MERACH MR-R02B10 (čierny) | 412.50 € | **390.50 €** | 15.0 % | **8.8 %** | 390.90 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z20 | 359.00 € | **337.50 €** | 15.0 % | **8.1 %** | 337.90 € | stávame sa najlacnejší |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 463.90 € | **442.90 €** | 10.1 % | **5.1 %** | 317.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 554.90 € | **534.00 €** | 10.0 % | **5.9 %** | 534.50 € | stávame sa najlacnejší |
| BEKO B5RCNA405HG | 451.50 € | **430.90 €** | 10.1 % | **5.1 %** | 389.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG FA2S8V3GN3W | 443.50 € | **422.90 €** | 10.1 % | **5.0 %** | 422.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FINLUX 40FFI5661 SMART TV FULL HD TIVO | 314.50 € | **293.90 €** | 15.0 % | **7.5 %** | 294.00 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1329.50 €** | 15.0 % | **13.2 %** | 1329.90 € | stávame sa najlacnejší |
| Gorenje NRK620EABK4 | 443.90 € | **423.90 €** | 10.0 % | **5.1 %** | 330.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 432.00 € | **412.50 €** | 10.0 % | **5.0 %** | 343.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIM12300X | 229.00 € | **209.50 €** | 14.9 % | **5.1 %** | 198.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 296.50 € | **277.00 €** | 14.9 % | **7.4 %** | 277.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **68.50 €** | 43.8 % | **12.0 %** | 68.90 € | stávame sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 429.90 € | **410.50 €** | 10.0 % | **5.0 %** | 295.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah SOLARFAM AST-100 s výhře... | 315.90 € | **296.50 €** | 15.1 % | **8.0 %** | 296.90 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 657.90 € | **638.50 €** | 10.1 % | **6.8 %** | 638.90 € | stávame sa najlacnejší |
| Gorenje NRK620EAW4 | 413.50 € | **394.50 €** | 10.1 % | **5.0 %** | 360.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FINLUX 32FQI8071 QLED SMART TV ANDROID | 296.50 € | **277.50 €** | 15.1 % | **7.7 %** | 277.90 € | stávame sa najlacnejší |
| Samsung The Frame Pro QE65LS03HW | 1817.50 € | **1798.50 €** | 10.0 % | **8.9 %** | 1798.90 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **405.50 €** | 15.0 % | **9.9 %** | 405.90 € | stávame sa najlacnejší |
| Beko BDFN26540XP | 460.50 € | **441.50 €** | 10.1 % | **5.6 %** | 441.90 € | stávame sa najlacnejší |
| FINLUX 24FHMG5771 ANDROID TV 12V TRAVEL | 312.50 € | **293.90 €** | 14.9 % | **8.1 %** | 294.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **197.50 €** | 15.0 % | **5.2 %** | 188.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 572.50 € | **554.00 €** | 15.0 % | **11.3 %** | 554.45 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 278.50 € | **260.00 €** | 14.9 % | **7.3 %** | 260.50 € | stávame sa najlacnejší |
| Whirlpool WMD44MB | 409.90 € | **391.50 €** | 10.0 % | **5.1 %** | 348.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 290.90 € | **272.50 €** | 14.4 % | **7.2 %** | 272.89 € | stávame sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.50 €** | 14.9 % | **8.6 %** | 308.90 € | stávame sa najlacnejší |
| Catlink BayMax Lite intelligent self-cleaning cat li... | 357.50 € | **339.50 €** | 15.1 % | **9.3 %** | 339.90 € | stávame sa najlacnejší |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 138.50 € | **120.90 €** | 27363.8 % | **23873.8 %** | 121.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 434.00 € | **416.50 €** | 15.0 % | **10.4 %** | 416.90 € | stávame sa najlacnejší |
| Samsung Mini LED UE43M70H | 379.50 € | **362.50 €** | 10.0 % | **5.1 %** | 362.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **281.50 €** | 15.0 % | **8.4 %** | 281.90 € | stávame sa najlacnejší |
| MASCOM MC22TFW11 – 22” Full HD Smart TV (12 V, WebOS... | 294.50 € | **277.50 €** | 15.0 % | **8.3 %** | 277.90 € | stávame sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.00 €** | 14.9 % | **9.6 %** | 346.50 € | stávame sa najlacnejší |
| Samsung OLED QE65S99H | 2798.90 € | **2782.00 €** | 5.6 % | **5.0 %** | 2778.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C411 KIT 3MPx, outdoor, IP, WiFi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 45.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 59.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C260 IP, 8MPx, WiFi, prísvit | 79.90 € | **63.50 €** | 32.6 % | **5.4 %** | 62.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Waydoo submersible | 287.50 € | **271.50 €** | 15.0 % | **8.6 %** | 271.90 € | stávame sa najlacnejší |
| CANDY CCGMEE9025PX/E | 814.50 € | **798.50 €** | 10.0 % | **7.9 %** | 798.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 50XN GPS s nočn... | 255.00 € | **239.00 €** | 14.9 % | **7.7 %** | 239.50 € | stávame sa najlacnejší |
| Rozváděč R-FVE-A40-2 | 233.90 € | **218.00 €** | 15.1 % | **7.3 %** | 218.50 € | stávame sa najlacnejší |
| ETA Storio II 2043 90030 černá | 346.50 € | **330.90 €** | 10.0 % | **5.1 %** | 269.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool TDLR 6240S EU/N | 339.50 € | **323.90 €** | 10.2 % | **5.1 %** | 322.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept ETV8360bcN | 539.50 € | **523.90 €** | 10.1 % | **6.9 %** | 524.00 € | stávame sa najlacnejší |
| ETA 0028 98050 | 79.99 € | **64.50 €** | 30.6 % | **5.3 %** | 64.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **273.50 €** | 15.0 % | **8.9 %** | 273.90 € | stávame sa najlacnejší |
| Solární regulátor MPPT VOLT GREEN BOOST PRO 4000 SIN... | 339.00 € | **323.90 €** | 14.9 % | **9.8 %** | 324.00 € | stávame sa najlacnejší |
| Whirlpool MWSC 833 SB | 330.00 € | **315.00 €** | 10.0 % | **5.0 %** | 289.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy ECNBQT3518E Fresco | 494.90 € | **479.90 €** | 10.0 % | **6.7 %** | 480.00 € | stávame sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 403.50 € | **388.50 €** | 11.1 % | **6.9 %** | 388.90 € | stávame sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **479.50 €** | 15.0 % | **11.5 %** | 479.90 € | stávame sa najlacnejší |
| Záložní zdroj VOLT POLSKA Sinus Pro 2000 E 12V/230V ... | 237.50 € | **222.90 €** | 15.0 % | **7.9 %** | 223.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **157.50 €** | 14.8 % | **5.2 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 463.50 € | **449.00 €** | 10.0 % | **6.6 %** | 449.50 € | stávame sa najlacnejší |
| Ultimea Skywave X70 Soundbar | 612.90 € | **598.50 €** | 15.0 % | **12.3 %** | 598.90 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 472.90 € | **458.50 €** | 10.0 % | **6.7 %** | 458.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 46.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 129.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 129.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 8/256GB (ZAFR0272CZ) | 304.90 € | **290.90 €** | 10.1 % | **5.0 %** | 275.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1712 | 164.50 € | **150.50 €** | 15.1 % | **5.3 %** | 145.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A6 bílá | 481.50 € | **467.50 €** | 10.0 % | **6.8 %** | 467.90 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 332.50 € | **318.50 €** | 10.1 % | **5.4 %** | 318.90 € | stávame sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 485.00 € | **471.00 €** | 10.0 % | **6.8 %** | 471.50 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **38.90 €** | 50.5 % | **11.5 %** | 39.00 € | stávame sa najlacnejší |
| Beko B5RCNA416HXBR | 455.50 € | **442.00 €** | 10.1 % | **6.8 %** | 442.50 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 343.90 € | **330.50 €** | 10.1 % | **5.8 %** | 330.90 € | stávame sa najlacnejší |
| Jednoruční vario činka HMS SR52 nastavitelná  2,5 - ... | 152.50 € | **139.50 €** | 15.0 % | **5.2 %** | 137.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect UPi B7 10.1" 1920x1200 60Hz Portable Monitor | 151.90 € | **138.90 €** | 15.1 % | **5.3 %** | 138.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hoverboard Rebel Cruiser Carbon | 151.90 € | **138.90 €** | 15.0 % | **5.1 %** | 138.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **34.90 €** | 54.8 % | **12.8 %** | 35.00 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 311.50 € | **298.50 €** | 10.1 % | **5.5 %** | 298.90 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 62.00 € | **49.00 €** | 37.7 % | **8.8 %** | 49.50 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 75.00 € | **62.00 €** | 59.1 % | **31.5 %** | 62.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C510W 3MPx, vonkajšia, IP, WiFi,... | 63.90 € | **51.00 €** | 31.7 % | **5.1 %** | 46.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux CFG526R | 279.50 € | **266.90 €** | 10.0 % | **5.0 %** | 263.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HIC 64401 | 159.00 € | **146.50 €** | 14.0 % | **5.0 %** | 143.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj VOLT POLSKA SINUS UPS 800 + AKU 55Ah /... | 264.50 € | **252.00 €** | 15.0 % | **9.6 %** | 252.50 € | stávame sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.00 €** | 50.2 % | **38.0 %** | 141.50 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 411.90 € | **399.50 €** | 10.1 % | **6.7 %** | 399.90 € | stávame sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT100 PRO | 145.00 € | **132.90 €** | 14.8 % | **5.2 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 0028 92020 | 79.99 € | **67.90 €** | 32.0 % | **12.0 %** | 68.00 € | stávame sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.90 € | **135.00 €** | 15.4 % | **6.1 %** | 135.50 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 378.90 € | **367.00 €** | 10.0 % | **6.6 %** | 367.50 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica GWAS610DL | 254.50 € | **242.90 €** | 10.1 % | **5.1 %** | 238.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **143.00 €** | 15.1 % | **6.6 %** | 143.50 € | stávame sa najlacnejší |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 245.90 € | **234.50 €** | 15.0 % | **9.7 %** | 234.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 38.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 338.90 € | **327.50 €** | 15.1 % | **11.2 %** | 327.90 € | stávame sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Nikon | 277.00 € | **265.90 €** | 14.9 % | **10.3 %** | 266.00 € | stávame sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **119.90 €** | 14.9 % | **5.2 %** | 111.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta Extreme Dry Compact DH5250F0 | 242.90 € | **231.90 €** | 10.0 % | **5.0 %** | 217.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 59.50 € | **48.50 €** | 40.2 % | **14.3 %** | 48.90 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 375.50 € | **364.50 €** | 10.0 % | **6.8 %** | 364.90 € | stávame sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.50 €** | 14.9 % | **8.6 %** | 189.90 € | stávame sa najlacnejší |
| Gorenje RK14CPS4 | 309.50 € | **298.50 €** | 10.1 % | **6.2 %** | 298.90 € | stávame sa najlacnejší |
| UNI-T UT521 tester uzemnenia | 140.00 € | **129.00 €** | 15.0 % | **6.0 %** | 129.50 € | stávame sa najlacnejší |
| LEM DSA15-5G automatický programovatelný DVB-T/T2 ze... | 205.00 € | **194.00 €** | 14.9 % | **8.8 %** | 194.50 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 3-pack) | 232.50 € | **221.90 €** | 10.1 % | **5.1 %** | 98.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Spinningové kolo REBEL ACTIVE RBA-1016 | 123.50 € | **112.90 €** | 15.0 % | **5.2 %** | 105.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 244.50 € | **233.90 €** | 15.1 % | **10.1 %** | 234.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 170.50 € | **160.00 €** | 12.0 % | **5.1 %** | 159.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BU1154HCN | 289.00 € | **278.50 €** | 13.2 % | **9.1 %** | 278.90 € | stávame sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.50 €** | 25.0 % | **7.1 %** | 62.90 € | stávame sa najlacnejší |
| Běžecký pás REBEL ACTIVE RBA-1014 | 152.90 € | **142.50 €** | 15.1 % | **7.3 %** | 142.90 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 49.90 € | **39.50 €** | 46.6 % | **16.1 %** | 39.79 € | stávame sa najlacnejší |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 272.90 € | **262.50 €** | 9.3 % | **5.2 %** | 261.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 337.90 € | **327.50 €** | 14.6 % | **11.0 %** | 327.79 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **180.90 €** | 15.0 % | **8.9 %** | 181.00 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **196.90 €** | 14.9 % | **9.3 %** | 197.00 € | stávame sa najlacnejší |
| Tefal RK364G10 Coppertinto | 69.90 € | **59.90 €** | 30.2 % | **11.5 %** | 60.00 € | stávame sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150  černé s LED podsv... | 117.00 € | **107.00 €** | 14.9 % | **5.1 %** | 104.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 182.90 € | **172.90 €** | 15.1 % | **8.8 %** | 173.00 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 49.50 € | **39.50 €** | 47.9 % | **18.0 %** | 39.90 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (čier... | 328.50 € | **318.50 €** | 15.0 % | **11.5 %** | 318.90 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 328.50 € | **318.50 €** | 15.0 % | **11.5 %** | 318.90 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.50 €** | 10.0 % | **6.9 %** | 340.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 58.00 € | **48.00 €** | 43.5 % | **18.7 %** | 48.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT Epever XTRA4210N G3 BLE, 12/2... | 152.90 € | **143.00 €** | 15.1 % | **7.6 %** | 143.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 127.90 € | **118.00 €** | 43.9 % | **32.7 %** | 118.50 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 46.90 € | **37.00 €** | 42.3 % | **12.2 %** | 37.39 € | stávame sa najlacnejší |
| Braun SI1009OR | 32.90 € | **23.00 €** | 54.8 % | **8.2 %** | 23.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C310 vonkajšia, IP, FHD, WiFi, p... | 48.50 € | **38.90 €** | 31.3 % | **5.3 %** | 36.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 325 | 262.50 € | **252.90 €** | 10.1 % | **6.1 %** | 253.00 € | stávame sa najlacnejší |
| CANON i-SENSYS MF3010 | 202.50 € | **193.00 €** | 10.2 % | **5.0 %** | 154.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rozvaděč Legrand Plexo 601988 IP65 plastový 4x18 nás... | 210.50 € | **201.00 €** | 15.1 % | **9.9 %** | 201.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.00 €** | 44.3 % | **26.8 %** | 69.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.00 €** | 44.3 % | **26.8 %** | 69.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 67.50 € | **58.00 €** | 43.9 % | **23.7 %** | 58.50 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 83.90 € | **74.50 €** | 18.4 % | **5.1 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **100.50 €** | 15.0 % | **5.2 %** | 100.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **183.90 €** | 15.1 % | **9.7 %** | 184.00 € | stávame sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **38.90 €** | 38.7 % | **12.7 %** | 39.00 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 218.50 € | **209.50 €** | 14.3 % | **9.6 %** | 209.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT Epever XTRA3210N G3 BLE, 12/2... | 126.50 € | **117.50 €** | 15.1 % | **7.0 %** | 117.90 € | stávame sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **169.00 €** | 15.0 % | **9.2 %** | 169.50 € | stávame sa najlacnejší |
| Beko TS190340N | 199.00 € | **190.00 €** | 14.8 % | **9.6 %** | 190.50 € | stávame sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 195.90 € | **187.00 €** | 10.1 % | **5.1 %** | 132.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q7 BF Black | 187.90 € | **179.00 €** | 10.2 % | **5.0 %** | 177.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odvlhčovač vzduchu Dryzix 500 Ruhhy 26498 | 102.50 € | **93.90 €** | 14.9 % | **5.3 %** | 93.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Moza Racing MTLP AS009 Panel pre vzlet a pristátie (PC) | 154.50 € | **145.90 €** | 15.1 % | **8.7 %** | 146.00 € | stávame sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 159.50 € | **151.00 €** | 15.8 % | **9.6 %** | 151.50 € | stávame sa najlacnejší |
| FINLUX 32FFI5670 ANDROID TV | 243.50 € | **235.00 €** | 15.0 % | **10.9 %** | 235.50 € | stávame sa najlacnejší |
| FINLUX 32FFI5762 SMART TV FULL HD TIVO | 243.50 € | **235.00 €** | 15.0 % | **10.9 %** | 235.50 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 291.00 € | **282.90 €** | 8.1 % | **5.1 %** | 271.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj VOLT POLSKA SINUS UPS 500 + AKU 40Ah /... | 218.00 € | **209.90 €** | 14.9 % | **10.7 %** | 210.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 218.00 € | **209.90 €** | 10.0 % | **5.9 %** | 210.00 € | stávame sa najlacnejší |
| Niceboy Charles i4 Plus Black | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **38.50 €** | 28.3 % | **6.2 %** | 35.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hoverboard Rebel Cruiser Paint | 146.00 € | **138.00 €** | 14.9 % | **8.6 %** | 138.50 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-BL 11'6" 350x8... | 175.00 € | **167.00 €** | 14.9 % | **9.7 %** | 167.50 € | stávame sa najlacnejší |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 116.90 € | **109.00 €** | 15.1 % | **7.3 %** | 109.50 € | stávame sa najlacnejší |
| ETA 723590000 | 338.50 € | **330.90 €** | 10.1 % | **7.6 %** | 331.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 307.50 € | **299.90 €** | 15.0 % | **12.2 %** | 300.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **299.90 €** | 15.0 % | **12.2 %** | 300.00 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 227.50 € | **219.90 €** | 8.7 % | **5.0 %** | 210.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka Compass 07167 JUMP STARTER 7200mAh 600A +... | 87.50 € | **79.90 €** | 15.3 % | **5.3 %** | 79.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48S | 165.50 € | **158.00 €** | 10.0 % | **5.1 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 145.50 € | **138.00 €** | 14.9 % | **9.0 %** | 138.50 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 28.50 € | **21.00 €** | 58.5 % | **16.8 %** | 21.50 € | stávame sa najlacnejší |
| TP-LINK RE200 AC750 WiFi Range Extender | 29.90 € | **22.50 €** | 39.9 % | **5.3 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 313.90 € | **306.50 €** | 15.0 % | **12.3 %** | 306.90 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R14R1 (hnedý) | 388.90 € | **381.50 €** | 15.0 % | **12.8 %** | 381.90 € | stávame sa najlacnejší |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 505.90 € | **498.50 €** | 10.1 % | **8.5 %** | 498.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 52.00 € | **44.90 €** | 43.7 % | **24.0 %** | 45.00 € | stávame sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **79.90 €** | 14.8 % | **5.4 %** | 78.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová vesta HMS KOR20 20 kg | 87.00 € | **79.90 €** | 14.9 % | **5.5 %** | 78.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 92.00 € | **84.90 €** | 14.8 % | **5.9 %** | 85.00 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-WH 11'6" 350x8... | 175.00 € | **167.90 €** | 14.9 % | **10.2 %** | 168.00 € | stávame sa najlacnejší |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 237.90 € | **230.90 €** | 8.2 % | **5.1 %** | 207.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO244SV | 147.50 € | **140.50 €** | 10.2 % | **5.0 %** | 132.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 119.50 € | **112.50 €** | 11.7 % | **5.2 %** | 105.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 154.50 € | **147.50 €** | 10.2 % | **5.2 %** | 144.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 27.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 48.90 € | **41.90 €** | 43.9 % | **23.3 %** | 42.00 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4507-OR - ORANŽOVÝ ... | 216.90 € | **209.90 €** | 15.1 % | **11.4 %** | 210.00 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 41.00 € | **34.00 €** | 31.9 % | **9.3 %** | 34.39 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **23.50 €** | 59.0 % | **22.5 %** | 23.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 123.50 € | **116.50 €** | 21.5 % | **14.6 %** | 116.90 € | stávame sa najlacnejší |
| Rotoped DeerRun S500 Pro (čierny) | 246.50 € | **239.50 €** | 15.1 % | **11.8 %** | 239.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **34.00 €** | 38.3 % | **14.7 %** | 34.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **41.00 €** | 54.5 % | **32.0 %** | 41.50 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 85.00 € | **78.00 €** | 15.0 % | **5.6 %** | 78.50 € | stávame sa najlacnejší |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 258.90 € | **251.90 €** | 15.0 % | **11.9 %** | 252.00 € | stávame sa najlacnejší |
| Electrolux EB61C4DB | 149.90 € | **143.00 €** | 10.1 % | **5.0 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.90 € | **82.00 €** | 15.1 % | **6.2 %** | 82.50 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 337.50 € | **330.90 €** | 14.6 % | **12.4 %** | 331.00 € | stávame sa najlacnejší |
| Pec na pizzu Ruhhy 26050 | 78.50 € | **71.90 €** | 15.2 % | **5.5 %** | 71.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 75.50 € | **68.90 €** | 18.3 % | **7.9 %** | 69.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA420 Deodorizačný modul... | 42.00 € | **35.50 €** | 33.9 % | **13.1 %** | 35.75 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 345.00 € | **338.50 €** | 14.9 % | **12.8 %** | 338.90 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 217 /černé/ 0000/3998 | 132.00 € | **125.50 €** | 14.9 % | **9.2 %** | 125.90 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **327.50 €** | 15.0 % | **12.7 %** | 327.90 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 217.50 € | **211.00 €** | 10.1 % | **6.8 %** | 211.49 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **78.00 €** | 15.2 % | **6.3 %** | 78.50 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 294.50 € | **288.00 €** | 10.1 % | **7.6 %** | 288.50 € | stávame sa najlacnejší |
| Maxxo VM Master | 247.50 € | **241.00 €** | 10.2 % | **7.3 %** | 241.50 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 86.50 € | **80.00 €** | 15.2 % | **6.6 %** | 80.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.00 €** | 15.2 % | **9.5 %** | 124.50 € | stávame sa najlacnejší |
| Rowenta RO4931EA | 134.90 € | **128.50 €** | 10.3 % | **5.1 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 209.90 € | **203.50 €** | 15.1 % | **11.6 %** | 203.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 194.90 € | **188.50 €** | 10.2 % | **6.6 %** | 188.90 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 75.00 € | **68.90 €** | 14.8 % | **5.5 %** | 67.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2407 | 73.00 € | **66.90 €** | 14.7 % | **5.1 %** | 66.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **15.90 €** | 49.2 % | **7.9 %** | 16.00 € | stávame sa najlacnejší |
| Powerbanka EMOS NTBF30 /B0561B/, 27 000 mAh, 100 W P... | 69.90 € | **63.90 €** | 15.2 % | **5.4 %** | 64.00 € | stávame sa najlacnejší |
| Tesla TE-300 | 27.90 € | **21.90 €** | 36.2 % | **6.9 %** | 9.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 53.90 € | **47.90 €** | 18.8 % | **5.5 %** | 43.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 88.50 € | **82.50 €** | 12.8 % | **5.2 %** | 82.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150  černo bílé | 87.90 € | **81.90 €** | 15.0 % | **7.2 %** | 82.00 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 173.90 € | **167.90 €** | 15.1 % | **11.1 %** | 168.00 € | stávame sa najlacnejší |
| Gorenje W11NHPI84AS | 290.90 € | **284.90 €** | 10.1 % | **7.8 %** | 285.00 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 62.50 € | **56.50 €** | 39.6 % | **26.2 %** | 56.90 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **224.50 €** | 15.0 % | **12.0 %** | 224.90 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 27.00 € | **21.00 €** | 38.2 % | **7.5 %** | 21.50 € | stávame sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 74.00 € | **68.00 €** | 15.0 % | **5.7 %** | 68.50 € | stávame sa najlacnejší |
| KMP C81V / PGI-525BK, CLI-526C/M/Y | 23.99 € | **18.00 €** | 67.8 % | **25.9 %** | 18.50 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 176.90 € | **171.00 €** | 10.1 % | **6.4 %** | 171.50 € | stávame sa najlacnejší |
| JBL CHARGEES3 | 119.90 € | **114.00 €** | 15.6 % | **9.9 %** | 114.50 € | stávame sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.00 €** | 15.0 % | **10.0 %** | 129.50 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 24.50 € | **18.90 €** | 53.3 % | **18.3 %** | 19.00 € | stávame sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.50 € | **120.90 €** | 10.1 % | **5.2 %** | 94.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Dvouplotýnka, G10047 dvouplotý | 125.50 € | **119.90 €** | 10.1 % | **5.2 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 122.50 € | **116.90 €** | 10.2 % | **5.2 %** | 106.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HNU61422B | 123.50 € | **117.90 €** | 10.3 % | **5.3 %** | 111.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 83.50 € | **77.90 €** | 12.7 % | **5.1 %** | 77.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **80.90 €** | 15.2 % | **7.7 %** | 80.92 € | stávame sa najlacnejší |
| Beko VRT96425VD | 261.50 € | **255.90 €** | 10.1 % | **7.7 %** | 256.00 € | stávame sa najlacnejší |
| Evolveo StrongVision Solar 4G | 129.00 € | **123.50 €** | 10.0 % | **5.3 %** | 103.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.00 €** | 46.8 % | **5.4 %** | 14.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 67.50 € | **62.00 €** | 14.4 % | **5.1 %** | 62.29 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 872.00 € | **866.50 €** | 15.0 % | **14.3 %** | 866.90 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR2210-DDS, 12/24V, 20... | 144.50 € | **139.00 €** | 15.0 % | **10.6 %** | 139.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **27.00 €** | 59.9 % | **32.9 %** | 27.50 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.00 €** | 14.9 % | **7.0 %** | 75.50 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 119.50 € | **114.00 €** | 15.1 % | **9.8 %** | 114.50 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.00 €** | 15.0 % | **14.2 %** | 799.50 € | stávame sa najlacnejší |
| Rádio Imperial Dabman 280 CDBK s funkcí ASA | 237.90 € | **232.50 €** | 15.1 % | **12.5 %** | 232.90 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 279.90 € | **274.50 €** | 10.1 % | **8.0 %** | 274.90 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 20.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 36.00 € | **30.90 €** | 37.9 % | **18.4 %** | 31.00 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **60.90 €** | 14.7 % | **5.8 %** | 61.00 € | stávame sa najlacnejší |
| Webová kamera EMEET SmartCam S600L | 65.00 € | **59.90 €** | 14.7 % | **5.7 %** | 60.00 € | stávame sa najlacnejší |
| GORENJE TH60E3B | 83.00 € | **77.90 €** | 12.1 % | **5.2 %** | 75.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42326PC | 114.00 € | **108.90 €** | 10.1 % | **5.2 %** | 108.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS7550i White | 107.90 € | **102.90 €** | 10.2 % | **5.1 %** | 74.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **25.90 €** | 59.7 % | **33.9 %** | 26.00 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **129.90 €** | 15.0 % | **10.7 %** | 130.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 32.50 € | **27.50 €** | 58.6 % | **34.2 %** | 27.90 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.50 € | **167.50 €** | 10.2 % | **7.0 %** | 167.90 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 28.00 € | **23.00 €** | 38.4 % | **13.7 %** | 23.50 € | stávame sa najlacnejší |
| Salente Combo-4In1-Ss | 135.00 € | **130.00 €** | 13.8 % | **9.6 %** | 130.50 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **329.00 €** | 14.9 % | **13.2 %** | 329.50 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 39.00 € | **34.00 €** | 41.4 % | **23.3 %** | 34.50 € | stávame sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 125.00 € | **120.00 €** | 14.9 % | **10.3 %** | 120.50 € | stávame sa najlacnejší |
| Letecký simulátor MOZA RACING AB6 | 454.00 € | **449.00 €** | 14.9 % | **13.7 %** | 449.50 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1304.90 € | **1300.00 €** | 7.6 % | **7.2 %** | 1300.39 € | stávame sa najlacnejší |
| Tefal B864SA74 | 102.90 € | **98.00 €** | 10.3 % | **5.1 %** | 97.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 195.90 € | **191.00 €** | 11.2 % | **8.4 %** | 191.39 € | stávame sa najlacnejší |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 196.90 € | **192.00 €** | 15.1 % | **12.2 %** | 192.50 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.00 €** | 59.0 % | **31.0 %** | 23.50 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **524.90 €** | 15.0 % | **14.0 %** | 525.00 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 354.50 € | **349.90 €** | 15.1 % | **13.6 %** | 350.00 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 28.50 € | **23.90 €** | 58.5 % | **32.9 %** | 24.00 € | stávame sa najlacnejší |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 100.50 € | **95.90 €** | 10.5 % | **5.4 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 11T LTE Pro | 107.50 € | **102.90 €** | 10.0 % | **5.3 %** | 96.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO331L | 106.50 € | **101.90 €** | 10.0 % | **5.3 %** | 101.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 183.50 € | **178.90 €** | 7.9 % | **5.2 %** | 178.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 168.50 € | **163.90 €** | 14.1 % | **11.0 %** | 163.95 € | stávame sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150  černo červené | 96.50 € | **91.90 €** | 14.8 % | **9.3 %** | 92.00 € | stávame sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150  černo modré | 96.50 € | **91.90 €** | 14.8 % | **9.3 %** | 92.00 € | stávame sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **99.90 €** | 14.9 % | **9.8 %** | 100.00 € | stávame sa najlacnejší |
| Reproduktory Edifier R1100 2.0 (čierne) | 78.50 € | **73.90 €** | 15.0 % | **8.3 %** | 74.00 € | stávame sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 44.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Impregnace na textilní sedačky INPRODUCTS 1l | 53.50 € | **49.00 €** | 14.7 % | **5.1 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **82.50 €** | 15.0 % | **9.1 %** | 82.90 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **178.00 €** | 15.0 % | **12.2 %** | 178.50 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **21.00 €** | 59.8 % | **31.6 %** | 21.50 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **81.00 €** | 14.9 % | **8.8 %** | 81.50 € | stávame sa najlacnejší |
| Samsung QE75QN85F NEO QLED | 1195.50 € | **1191.00 €** | 10.0 % | **9.6 %** | 1191.50 € | stávame sa najlacnejší |
| Kaon MZ-102 Skylink Viaccess Orca bezkartový systém | 115.90 € | **111.50 €** | 9.5 % | **5.3 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IB5100E0 | 93.90 € | **89.50 €** | 10.4 % | **5.3 %** | 81.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 98.90 € | **94.50 €** | 10.3 % | **5.4 %** | 94.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 76.90 € | **72.50 €** | 11.8 % | **5.4 %** | 72.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 147.90 € | **143.50 €** | 13.8 % | **10.4 %** | 143.89 € | stávame sa najlacnejší |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 187.90 € | **183.50 €** | 15.0 % | **12.3 %** | 183.90 € | stávame sa najlacnejší |
| Rotoped REBEL ACTIVE RBA-1013 | 70.90 € | **66.50 €** | 15.2 % | **8.1 %** | 66.90 € | stávame sa najlacnejší |
| TESLA AeroStar T300 | 59.90 € | **55.50 €** | 13.9 % | **5.5 %** | 48.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušička ovoce Ruhhy 25928 400W | 54.90 € | **50.50 €** | 15.2 % | **5.9 %** | 50.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI3042VI | 39.90 € | **35.50 €** | 26.8 % | **12.8 %** | 35.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 24.90 € | **20.50 €** | 59.2 % | **31.0 %** | 20.90 € | stávame sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 36.00 € | **31.90 €** | 19.6 % | **6.0 %** | 31.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrý LED pásik TP-Link Tapo L900-5 5m, 13.5W, 230V... | 21.00 € | **16.90 €** | 30.7 % | **5.2 %** | 16.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 115.00 € | **110.90 €** | 12.2 % | **8.2 %** | 111.00 € | stávame sa najlacnejší |
| Samsung VG-SCFC32SGMXC | 82.50 € | **78.50 €** | 10.6 % | **5.3 %** | 36.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS6550i White | 92.50 € | **88.50 €** | 10.0 % | **5.3 %** | 50.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K4 ruční, bezdrátový set | 122.90 € | **118.90 €** | 8.7 % | **5.2 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI PRO MP273A | 88.50 € | **84.50 €** | 10.4 % | **5.4 %** | 77.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky litinové nastavitelné 15kg, REBEL ACTIVE RBA-2... | 46.50 € | **42.50 €** | 15.6 % | **5.6 %** | 41.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC510L modrá | 39.50 € | **35.50 €** | 16.9 % | **5.1 %** | 34.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REBEL Micropower 1000 | 87.50 € | **83.50 €** | 10.1 % | **5.1 %** | 83.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **91.50 €** | 10.1 % | **5.5 %** | 91.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO716BL | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 80.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES60 reproduktor černý | 94.90 € | **90.90 €** | 10.1 % | **5.4 %** | 90.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 123.50 € | **119.50 €** | 12.2 % | **8.6 %** | 119.59 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **21.90 €** | 39.1 % | **17.6 %** | 22.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 13.90 € | **9.90 €** | 48.1 % | **5.5 %** | 10.00 € | stávame sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **418.90 €** | 15.1 % | **14.0 %** | 419.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.90 € | **23.90 €** | 42.8 % | **22.4 %** | 24.00 € | stávame sa najlacnejší |
| Činky chromované nastavitelné 30kg, REBEL ACTIVE RBA... | 87.90 € | **83.90 €** | 15.0 % | **9.8 %** | 84.00 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS DICROMAT MICRO - zapuštěná mont... | 62.50 € | **58.50 €** | 14.8 % | **7.4 %** | 58.90 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 19.50 € | **15.50 €** | 46.0 % | **16.0 %** | 15.90 € | stávame sa najlacnejší |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 196.50 € | **192.50 €** | 15.0 % | **12.6 %** | 192.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban (ružový) | 196.50 € | **192.50 €** | 15.0 % | **12.7 %** | 192.90 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **31.00 €** | 37.3 % | **21.6 %** | 31.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 35.00 € | **31.00 €** | 43.9 % | **27.4 %** | 31.50 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 108.90 € | **105.00 €** | 15.0 % | **10.8 %** | 105.50 € | stávame sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.00 €** | 15.2 % | **9.1 %** | 69.50 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.00 €** | 15.0 % | **8.5 %** | 65.50 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **11.00 €** | 51.8 % | **12.1 %** | 11.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 23.90 € | **20.00 €** | 54.2 % | **29.0 %** | 20.50 € | stávame sa najlacnejší |
| ADEX ADS108GRP-1PO Reverzní PoE Switch 8x Gbit Port ... | 43.50 € | **39.90 €** | 14.6 % | **5.1 %** | 38.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Formula Wheel Rim Mod MOZA RACING ES RS032 | 43.50 € | **39.90 €** | 14.5 % | **5.0 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **51.90 €** | 15.2 % | **7.7 %** | 52.00 € | stávame sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **45.90 €** | 15.3 % | **6.9 %** | 46.00 € | stávame sa najlacnejší |
| Kamera akční KRUGER & MATZ KM0292 Vision P400 | 66.50 € | **62.90 €** | 14.8 % | **8.6 %** | 63.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 8.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 19.50 € | **15.90 €** | 31.7 % | **7.4 %** | 15.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 13.50 € | **9.90 €** | 48.7 % | **9.1 %** | 10.00 € | stávame sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 75.50 € | **71.90 €** | 10.8 % | **5.5 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO353VD | 84.50 € | **80.90 €** | 10.0 % | **5.3 %** | 80.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax PartyGo1 Play | 84.00 € | **80.50 €** | 10.1 % | **5.5 %** | 51.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka EMOS NTBF20 /B0560B/, 20 000 mAh, 65 W PD... | 43.00 € | **39.50 €** | 14.5 % | **5.2 %** | 39.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Orbitrek REBEL ACTIVE RBA-1011 | 135.00 € | **131.50 €** | 7.8 % | **5.0 %** | 131.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus AS2 mini electric pump | 45.00 € | **41.50 €** | 14.9 % | **5.9 %** | 41.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stolný statív Puluz PU3070GT | 44.00 € | **40.50 €** | 15.1 % | **5.9 %** | 40.79 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 137.50 € | **134.00 €** | 15.0 % | **12.1 %** | 134.39 € | stávame sa najlacnejší |
| Stropné svietidlo Yeelight C2201C300 | 45.00 € | **41.50 €** | 14.5 % | **5.6 %** | 41.90 € | stávame sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 240.00 € | **236.50 €** | 15.0 % | **13.3 %** | 236.90 € | stávame sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.50 €** | 14.9 % | **8.7 %** | 61.90 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer černý | 129.00 € | **125.50 €** | 10.0 % | **7.0 %** | 125.90 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS DICROMAT 2+CR | 74.50 € | **71.00 €** | 15.3 % | **9.8 %** | 71.50 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **101.00 €** | 15.1 % | **11.3 %** | 101.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **89.00 €** | 15.1 % | **10.8 %** | 89.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **89.00 €** | 15.1 % | **10.8 %** | 89.50 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.50 € | **129.00 €** | 10.4 % | **7.4 %** | 129.50 € | stávame sa najlacnejší |
| Candy CHW6LBX/4U2 IDEA | 82.50 € | **79.00 €** | 10.5 % | **5.8 %** | 79.50 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **12.50 €** | 35.6 % | **6.0 %** | 12.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RO 3923 EA | 78.90 € | **75.50 €** | 10.2 % | **5.4 %** | 66.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 98.90 € | **95.50 €** | 21631.5 % | **20884.4 %** | 95.78 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 101.90 € | **98.50 €** | 10.3 % | **6.6 %** | 98.79 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Olympus | 127.90 € | **124.50 €** | 15.1 % | **12.0 %** | 124.90 € | stávame sa najlacnejší |
| Súprava príslušenstva pre vysávač MOVA P50 PU, P50 U | 42.90 € | **39.50 €** | 15.5 % | **6.3 %** | 33.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odrážedlo Kruzzel 25767 černé | 40.90 € | **37.50 €** | 14.9 % | **5.3 %** | 37.90 € | stávame sa najlacnejší |
| Odrážedlo Kruzzel 25768 růžové | 40.90 € | **37.50 €** | 14.9 % | **5.3 %** | 37.90 € | stávame sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 60.00 € | **56.90 €** | 39.6 % | **32.4 %** | 57.00 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **44.90 €** | 14.5 % | **7.1 %** | 45.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **35.90 €** | 14.9 % | **5.8 %** | 36.00 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-beige(beige) | 107.00 € | **103.90 €** | 14.8 % | **11.5 %** | 104.00 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **117.90 €** | 14.9 % | **11.9 %** | 118.00 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **83.90 €** | 14.8 % | **10.8 %** | 84.00 € | stávame sa najlacnejší |
| Moza Racing modul osi Z AS003 | 96.00 € | **92.90 €** | 14.9 % | **11.2 %** | 93.00 € | stávame sa najlacnejší |
| ETA Nubela 2569 90100, bílý | 27.99 € | **24.90 €** | 52.5 % | **35.7 %** | 25.00 € | stávame sa najlacnejší |
| Inteligentná zásuvka IMOU CE2P, sada 4 ks | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 27.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **57.50 €** | 10.6 % | **5.1 %** | 55.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Ambito 0516 90000 bílý/tyrkysový | 64.50 € | **61.50 €** | 10.3 % | **5.2 %** | 59.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 147.50 € | **144.50 €** | 7.3 % | **5.1 %** | 142.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 31.90 € | **28.90 €** | 16.7 % | **5.7 %** | 28.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štúdiové slúchadlá Maono MH700 (čierne) | 34.90 € | **31.90 €** | 15.2 % | **5.3 %** | 31.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská elektrická kytara 22407 růžová + mikrofon + z... | 36.90 € | **33.90 €** | 15.6 % | **6.2 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový senzor pohybu F&F DRL-60-12 12V DC broušený... | 128.90 € | **125.90 €** | 15.0 % | **12.4 %** | 126.00 € | stávame sa najlacnejší |
| Laserový senzor pohybu F&F DRL-60-12-1 12V DC bílý | 128.90 € | **125.90 €** | 15.0 % | **12.4 %** | 126.00 € | stávame sa najlacnejší |
| Laserový senzor pohybu F&F DRL-60-12-9 12V DC černý | 128.90 € | **125.90 €** | 15.0 % | **12.4 %** | 126.00 € | stávame sa najlacnejší |
| Laserový senzor pohybu F&F DRL-60-230 230V AC brouše... | 128.90 € | **125.90 €** | 15.0 % | **12.4 %** | 126.00 € | stávame sa najlacnejší |
| Laserový senzor pohybu F&F DRL-60-230-9 230V AC černý | 128.90 € | **125.90 €** | 15.0 % | **12.4 %** | 126.00 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **35.90 €** | 46.1 % | **34.8 %** | 36.00 € | stávame sa najlacnejší |
| Modul plynu Moza Racing AS016 TQA | 44.90 € | **41.90 €** | 15.2 % | **7.5 %** | 42.00 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **102.90 €** | 15.1 % | **11.8 %** | 103.00 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 271.50 € | **268.50 €** | 10.2 % | **9.0 %** | 268.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-R SUPREME FUN 1200W, 400 ... | 61.50 € | **58.50 €** | 15.0 % | **9.4 %** | 58.90 € | stávame sa najlacnejší |
| MASCOM SUNNY-T Android TV 12 4K UHD Android TV multi... | 82.50 € | **79.50 €** | 15.1 % | **10.9 %** | 79.90 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **45.50 €** | 15.0 % | **7.9 %** | 45.90 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 GARNI 201 OneCare | 95.00 € | **92.00 €** | 15.1 % | **11.4 %** | 92.50 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **47.00 €** | 14.6 % | **7.7 %** | 47.50 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.00 € | **45.00 €** | 14.8 % | **7.6 %** | 45.50 € | stávame sa najlacnejší |
| Pogumované litinové činky HEX 2x7 kg REBEL ACTIVE RB... | 38.00 € | **35.00 €** | 14.8 % | **5.7 %** | 35.50 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 127.90 € | **125.00 €** | 10.2 % | **7.7 %** | 125.49 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 174.90 € | **172.00 €** | 10.1 % | **8.2 %** | 172.50 € | stávame sa najlacnejší |
| LCD displej KRUGER & MATZ KM2021 Android Auto Apple ... | 81.90 € | **79.00 €** | 15.2 % | **11.1 %** | 79.50 € | stávame sa najlacnejší |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 12.90 € | **10.00 €** | 61.4 % | **25.1 %** | 10.50 € | stávame sa najlacnejší |
| Solární regulátor PWM Epever VS3024AU, 12/24V, 30A s... | 52.90 € | **50.00 €** | 15.4 % | **9.1 %** | 50.50 € | stávame sa najlacnejší |
| Sušička ovoce Ruhhy 25929 400W | 52.90 € | **50.00 €** | 15.4 % | **9.1 %** | 50.50 € | stávame sa najlacnejší |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 57.90 € | **55.00 €** | 15.3 % | **9.5 %** | 55.50 € | stávame sa najlacnejší |
| Nastavitelná bitumenová činka 2x15kg, REBEL ACTIVE R... | 34.50 € | **31.90 €** | 14.8 % | **6.2 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha GO Škoda Rally | 59.50 € | **56.90 €** | 10.5 % | **5.7 %** | 53.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrická pánev do auta 20cm x 4cm 150W 12V | 41.50 € | **38.90 €** | 13.1 % | **6.1 %** | 37.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 48.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NB614.DG | 55.50 € | **52.90 €** | 10.5 % | **5.3 %** | 52.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 23.50 € | **20.90 €** | 38.1 % | **22.9 %** | 21.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 21.50 € | **18.90 €** | 38.5 % | **21.8 %** | 19.00 € | stávame sa najlacnejší |
| Motor táhlový HARL 3624+, délka výtahu 24" | 52.50 € | **49.90 €** | 15.5 % | **9.8 %** | 50.00 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **30.90 €** | 14.5 % | **5.6 %** | 31.00 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 7.4V 60C 2S1P Lipo PC materi... | 43.50 € | **40.90 €** | 15.5 % | **8.6 %** | 41.00 € | stávame sa najlacnejší |
| Držák UNI LIFT stropní TÜV/GS | 31.50 € | **28.90 €** | 15.3 % | **5.7 %** | 29.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **19.90 €** | 55.2 % | **37.2 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **11.90 €** | 37.7 % | **13.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **11.90 €** | 58.4 % | **30.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **9.90 €** | 47.9 % | **17.2 %** | 10.00 € | stávame sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 68.50 € | **65.90 €** | 10.2 % | **6.0 %** | 66.00 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.50 € | **126.90 €** | 10.3 % | **8.1 %** | 127.00 € | stávame sa najlacnejší |
| Dcolor GD2 Android TV - 4K UHD multimediální přehrávač | 73.50 € | **70.90 €** | 15.4 % | **11.3 %** | 71.00 € | stávame sa najlacnejší |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 195.50 € | **192.90 €** | 14.2 % | **12.7 %** | 193.00 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 196.50 € | **193.90 €** | 10.1 % | **8.7 %** | 194.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 93.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 16.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **12.50 €** | 28.9 % | **7.4 %** | 9.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 50.00 € | **47.50 €** | 10.9 % | **5.4 %** | 46.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC710N Black | 71.00 € | **68.50 €** | 9.6 % | **5.8 %** | 67.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 37.50 € | **35.00 €** | 15.6 % | **7.9 %** | 35.09 € | stávame sa najlacnejší |
| Tefal RK812110 | 109.50 € | **107.00 €** | 10.2 % | **7.6 %** | 107.39 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **31.50 €** | 47.3 % | **36.4 %** | 31.90 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.00 € | **128.50 €** | 10.1 % | **8.0 %** | 128.90 € | stávame sa najlacnejší |
| SALENTE ToastMax | 49.00 € | **46.50 €** | 15.0 % | **9.1 %** | 46.90 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 20.50 € | **18.00 €** | 53.0 % | **34.4 %** | 18.49 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.00 €** | 55.4 % | **39.5 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **13.00 €** | 49.3 % | **25.2 %** | 13.50 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.50 € | **63.00 €** | 20.1 % | **15.5 %** | 63.50 € | stávame sa najlacnejší |
| Domo DO344DH | 149.50 € | **147.00 €** | 10.1 % | **8.3 %** | 147.50 € | stávame sa najlacnejší |
| NEDIS WIFIZBT10CWT chytrá brána ZigBee 3.0 do zásuvk... | 29.50 € | **27.00 €** | 15.7 % | **5.9 %** | 27.50 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.00 €** | 14.7 % | **10.0 %** | 59.50 € | stávame sa najlacnejší |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 34.50 € | **32.00 €** | 15.3 % | **6.9 %** | 32.50 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **65.00 €** | 15.2 % | **10.9 %** | 65.50 € | stávame sa najlacnejší |
| Strong LEAP-S3 Google TV 4K UHD Android TV multimedi... | 69.50 € | **67.00 €** | 12.9 % | **8.8 %** | 67.50 € | stávame sa najlacnejší |
| Baterie olověná  12V / 17Ah XTREME / Enerwell bezúdr... | 30.50 € | **28.00 €** | 14.5 % | **5.1 %** | 28.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.00 €** | 14.5 % | **8.1 %** | 42.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.00 €** | 14.5 % | **8.1 %** | 42.50 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **37.00 €** | 15.3 % | **8.0 %** | 37.50 € | stávame sa najlacnejší |
| Spinningové kolo REBEL ACTIVE RBA-1008 | 123.50 € | **121.00 €** | 15.0 % | **12.7 %** | 121.50 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **32.00 €** | 14.6 % | **6.3 %** | 32.50 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **103.00 €** | 15.0 % | **12.2 %** | 103.50 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **224.00 €** | 15.0 % | **13.7 %** | 224.50 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 59.50 € | **57.00 €** | 12.3 % | **7.5 %** | 57.50 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 160.50 € | **158.00 €** | 10.1 % | **8.3 %** | 158.50 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.50 €** | 38.6 % | **12.0 %** | 10.90 € | stávame sa najlacnejší |
| CANON PIXMA G3430 Pink | 142.90 € | **140.50 €** | 7.1 % | **5.3 %** | 136.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 250.90 € | **248.50 €** | 10.1 % | **9.1 %** | 248.90 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L630 GU10, 3,7W, 230V, c... | 12.00 € | **9.60 €** | 32.2 % | **5.8 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.10 €** | 60.5 % | **23.8 %** | 8.20 € | stávame sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.50 €** | 10.7 % | **5.0 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo HDO, aktivní venkovní anténa | 54.90 € | **52.50 €** | 10.8 % | **5.9 %** | 50.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 27.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (biele) | 25.90 € | **23.50 €** | 15.9 % | **5.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Impregnace na obuv INPRODUCTS 400 ml | 27.90 € | **25.50 €** | 15.6 % | **5.6 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko Mezikus PCSKM | 59.90 € | **57.50 €** | 10.3 % | **5.8 %** | 57.90 € | stávame sa najlacnejší |
| Beko Mezikus PCSKW | 59.90 € | **57.50 €** | 10.3 % | **5.8 %** | 57.90 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.80 €** | 55.6 % | **5.2 %** | 4.90 € | stávame sa najlacnejší |
| CANON PIXMA TS3751i White | 48.00 € | **45.90 €** | 10.2 % | **5.4 %** | 37.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3752i Blue | 48.00 € | **45.90 €** | 10.2 % | **5.4 %** | 37.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V/17Ah  REBEL | 29.00 € | **26.90 €** | 14.3 % | **6.1 %** | 26.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **23.90 €** | 54.3 % | **41.8 %** | 24.00 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 30.00 € | **27.90 €** | 14.3 % | **6.3 %** | 28.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne | 30.00 € | **27.90 €** | 14.4 % | **6.4 %** | 28.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 Gold | 30.00 € | **27.90 €** | 14.4 % | **6.4 %** | 28.00 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **126.90 €** | 14.9 % | **13.1 %** | 127.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **23.50 €** | 15.8 % | **6.7 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **23.00 €** | 14.5 % | **5.3 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff S60ZBTPF Inteligentná zásuvka ZigBee (2ks) | 26.50 € | **24.50 €** | 14.6 % | **6.0 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 25.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE500X AX1500 WiFi 6 Extender | 41.90 € | **39.90 €** | 10.7 % | **5.5 %** | 36.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **32.90 €** | 12.2 % | **5.8 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO 717 MF | 48.50 € | **46.50 €** | 10.0 % | **5.5 %** | 44.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 18.50 € | **16.50 €** | 20.3 % | **7.3 %** | 14.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C320WS | 45.90 € | **43.90 €** | 10.3 % | **5.5 %** | 42.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200CT  bezdrátová sluchátka | 38.50 € | **36.50 €** | 10.8 % | **5.0 %** | 35.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC510Y žlutá | 37.50 € | **35.50 €** | 11.0 % | **5.1 %** | 34.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický ohřívač Lumni Kaminer 26374 | 23.50 € | **21.50 €** | 15.4 % | **5.6 %** | 21.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26810-56/RH | 46.50 € | **44.50 €** | 10.6 % | **5.8 %** | 44.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Balanční podložka REBEL ACTIVE RBA-3104-46 | 25.90 € | **23.90 €** | 15.6 % | **6.6 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 11.90 € | **9.90 €** | 56.8 % | **30.5 %** | 9.99 € | stávame sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150  bílo růžové | 93.90 € | **91.90 €** | 15.2 % | **12.8 %** | 92.00 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **31.90 €** | 39.0 % | **30.8 %** | 32.00 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **117.90 €** | 11.3 % | **9.4 %** | 118.00 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **22.90 €** | 59.2 % | **46.4 %** | 23.00 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 169.90 € | **167.90 €** | 6.9 % | **5.7 %** | 168.00 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 29.90 € | **27.90 €** | 15.3 % | **7.6 %** | 28.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **39.90 €** | 15.3 % | **9.8 %** | 40.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **39.90 €** | 15.3 % | **9.8 %** | 40.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 403.90 € | **401.90 €** | 13.4 % | **12.9 %** | 402.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 250.90 € | **248.90 €** | 9.7 % | **8.9 %** | 249.00 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 399.90 € | **397.90 €** | 6.7 % | **6.2 %** | 398.00 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 402.90 € | **400.90 €** | 6.6 % | **6.1 %** | 401.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 401.90 € | **399.90 €** | 7.6 % | **7.0 %** | 400.00 € | stávame sa najlacnejší |
| MERACH spinningové kolo MR-S26B2-EU (čierne) | 173.90 € | **171.90 €** | 12.6 % | **11.3 %** | 172.00 € | stávame sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S08B1-EU (čierny) | 206.90 € | **204.90 €** | 14.2 % | **13.1 %** | 205.00 € | stávame sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S23B1-EU (čierny) | 230.90 € | **228.90 €** | 14.2 % | **13.2 %** | 229.00 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 181.90 € | **179.90 €** | 10.1 % | **8.9 %** | 180.00 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.50 €** | 15.0 % | **13.9 %** | 207.90 € | stávame sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 17.50 € | **15.50 €** | 52.0 % | **34.6 %** | 15.90 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 17.50 € | **15.50 €** | 52.0 % | **34.6 %** | 15.90 € | stávame sa najlacnejší |
| FoodSaver FFC026X | 41.50 € | **39.50 €** | 11.2 % | **5.8 %** | 39.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **12.50 €** | 47.4 % | **27.0 %** | 12.90 € | stávame sa najlacnejší |
| Solární regulátor PWM Epever LS2024B, 12/24V, 20A | 41.50 € | **39.50 €** | 15.4 % | **9.8 %** | 39.90 € | stávame sa najlacnejší |
| Kruger&Matz Street KM0564 bluetooth reproduktor modrý | 26.50 € | **24.50 €** | 15.1 % | **6.4 %** | 24.90 € | stávame sa najlacnejší |
| Držák monitoru Cabletech UCH0220 (13-32'' 2x10kg) černý | 26.50 € | **24.50 €** | 15.6 % | **6.9 %** | 24.90 € | stávame sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.50 €** | 15.6 % | **7.5 %** | 26.90 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.50 €** | 10.4 % | **7.1 %** | 64.90 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO BT 2 gray 0001/3973 reproduktor... | 169.50 € | **167.50 €** | 14.9 % | **13.6 %** | 167.90 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.50 €** | 15.0 % | **13.8 %** | 203.90 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 38.50 € | **36.50 €** | 15.3 % | **9.3 %** | 36.90 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.00 €** | 48.7 % | **28.9 %** | 13.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.00 €** | 50.1 % | **33.4 %** | 16.50 € | stávame sa najlacnejší |
| Kuchyňský robot TEESA TSA3545-B EASY COOK SINGLE BLA... | 85.00 € | **83.00 €** | 15.0 % | **12.3 %** | 83.50 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 121.00 € | **119.00 €** | 14.9 % | **13.0 %** | 119.50 € | stávame sa najlacnejší |
| Baterie olověná  12V / 17 Ah MHPower MS17-12 | 30.00 € | **28.00 €** | 14.3 % | **6.7 %** | 28.50 € | stávame sa najlacnejší |
| Baterie olověná  12V / 40Ah  VIPOW bezúdržbový akumu... | 75.00 € | **73.00 €** | 12.6 % | **9.6 %** | 73.50 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **24.00 €** | 15.1 % | **6.2 %** | 24.50 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 16.00 € | **14.00 €** | 49.9 % | **31.1 %** | 14.50 € | stávame sa najlacnejší |
| Tesla GSM-LITE zesilovač/opakovač 900/1800 MHz - kom... | 181.00 € | **179.00 €** | 8.9 % | **7.7 %** | 179.50 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 28.00 € | **26.00 €** | 14.4 % | **6.2 %** | 26.50 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 341.00 € | **339.00 €** | 6.3 % | **5.6 %** | 339.50 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-WH bílá barva | 341.00 € | **339.00 €** | 6.3 % | **5.6 %** | 339.50 € | stávame sa najlacnejší |
| Beko HSM14540 | 261.00 € | **259.00 €** | 10.0 % | **9.2 %** | 259.50 € | stávame sa najlacnejší |
| ETA 5180 91010 sklo | 13.99 € | **12.00 €** | 27.7 % | **9.5 %** | 12.50 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 84.90 € | **83.00 €** | 15.0 % | **12.4 %** | 83.39 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 82.90 € | **81.00 €** | 15.2 % | **12.6 %** | 81.39 € | stávame sa najlacnejší |
| Tefal FW402HE0 | 130.90 € | **129.00 €** | 10.3 % | **8.7 %** | 129.50 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.10 €** | 30.1 % | **5.4 %** | 8.11 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 6.60 € | **4.70 €** | 49.9 % | **6.7 %** | 4.80 € | stávame sa najlacnejší |
| Alecto FR-115BW Sada vysílaček pro děti | 35.90 € | **34.00 €** | 10.9 % | **5.0 %** | 29.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 19.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera endoskopická Bigstren 19376 | 47.90 € | **46.00 €** | 15.0 % | **10.4 %** | 46.50 € | stávame sa najlacnejší |
| Gril elektrický Ruhhy 26176 | 30.90 € | **29.00 €** | 15.1 % | **8.1 %** | 29.50 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **61.00 €** | 21.8 % | **18.1 %** | 61.50 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **30.00 €** | 16.9 % | **9.9 %** | 30.50 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 51.90 € | **50.00 €** | 14.9 % | **10.7 %** | 50.50 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.00 €** | 15.3 % | **11.7 %** | 59.50 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 25.90 € | **24.00 €** | 15.4 % | **6.9 %** | 24.50 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 20.90 € | **19.00 €** | 18.5 % | **7.7 %** | 19.50 € | stávame sa najlacnejší |
| Wireless controler GameSir T4n (white) | 25.90 € | **24.00 €** | 21.2 % | **12.3 %** | 24.50 € | stávame sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.00 €** | 15.2 % | **11.2 %** | 53.50 € | stávame sa najlacnejší |
| MAXXO DH 919 Extra Tea | 13.69 € | **12.00 €** | 36.6 % | **19.7 %** | 12.50 € | stávame sa najlacnejší |
| TP-LINK Tapo C110 Home Sec. Wi-Fi Camera | 32.50 € | **30.90 €** | 10.7 % | **5.3 %** | 22.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE305 AC1200 WiFi Range Extender | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 32.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Držák fólií (rolí) PARAT ROYAL | 31.50 € | **29.90 €** | 10.9 % | **5.2 %** | 27.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pohybové čidlo ORBIS DICROMAT+ - zapuštěná montáž do... | 22.50 € | **20.90 €** | 14.8 % | **6.6 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 52.50 € | **50.90 €** | 8.5 % | **5.2 %** | 50.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower DL181-24 Mini UPS 24V 0,5A | 20.50 € | **18.90 €** | 14.0 % | **5.1 %** | 18.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 15.0 % | **6.0 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 20.50 € | **18.90 €** | 13.9 % | **5.0 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guma posilovací REBEL ACTIVE RBA-3000-S4 Latexová sa... | 20.50 € | **18.90 €** | 15.0 % | **6.0 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **23.90 €** | 37.8 % | **29.1 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **21.90 €** | 39.1 % | **29.6 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **17.90 €** | 36.9 % | **25.7 %** | 18.00 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 28.50 € | **26.90 €** | 20.1 % | **13.3 %** | 27.00 € | stávame sa najlacnejší |
| WiFi extender REBEL KOM1032 | 24.50 € | **22.90 €** | 14.1 % | **6.7 %** | 23.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **23.90 €** | 15.0 % | **7.8 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **23.90 €** | 15.0 % | **7.8 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **31.90 €** | 14.6 % | **9.2 %** | 32.00 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 22.50 € | **20.90 €** | 43.5 % | **33.3 %** | 21.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 28.50 € | **26.90 €** | 15.4 % | **9.0 %** | 27.00 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **17.90 €** | 15.6 % | **6.1 %** | 18.00 € | stávame sa najlacnejší |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 23.50 € | **21.90 €** | 14.8 % | **7.0 %** | 22.00 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 23.50 € | **21.90 €** | 14.6 % | **6.8 %** | 22.00 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.50 € | **42.90 €** | 15.4 % | **11.2 %** | 43.00 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 20.50 € | **18.90 €** | 45.8 % | **34.4 %** | 19.00 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.50 € | **10.90 €** | 53.3 % | **33.7 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **13.90 €** | 55.0 % | **39.0 %** | 14.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.50 € | **8.90 €** | 40.2 % | **18.8 %** | 9.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 16.50 € | **14.90 €** | 43.0 % | **29.1 %** | 15.00 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **118.90 €** | 14.8 % | **13.3 %** | 119.00 € | stávame sa najlacnejší |
| Black&Decker BXDH12E | 166.50 € | **164.90 €** | 10.1 % | **9.0 %** | 165.00 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 85.50 € | **83.90 €** | 10.5 % | **8.4 %** | 84.00 € | stávame sa najlacnejší |
| Rádio TechniSat DIGITRADIO 550 IR /černé/ | 152.50 € | **150.90 €** | 14.9 % | **13.7 %** | 151.00 € | stávame sa najlacnejší |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 75.50 € | **73.90 €** | 15.1 % | **12.7 %** | 74.00 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **106.90 €** | 14.9 % | **13.2 %** | 107.00 € | stávame sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25630 fialová | 45.00 € | **43.50 €** | 9.1 % | **5.4 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.00 € | **20.50 €** | 15.2 % | **7.3 %** | 19.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Impregnace na kožené oděvy INPRODUCTS WAX 200 ml | 19.00 € | **17.50 €** | 15.1 % | **6.0 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 80.50 € | **79.00 €** | 15.2 % | **13.0 %** | 79.09 € | stávame sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 12.50 € | **11.00 €** | 23.3 % | **8.5 %** | 11.29 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 68.50 € | **67.00 €** | 7.6 % | **5.2 %** | 67.39 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 182 | 22.00 € | **20.50 €** | 14.9 % | **7.0 %** | 20.90 € | stávame sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.00 € | **32.50 €** | 10.3 % | **5.4 %** | 32.90 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board L/Uni | 15.00 € | **13.50 €** | 21.3 % | **9.2 %** | 13.90 € | stávame sa najlacnejší |
| Leifheit Thermo Reflect L/Universal | 15.00 € | **13.50 €** | 21.3 % | **9.2 %** | 13.90 € | stávame sa najlacnejší |
| Leifheit 81520 Pegasus 200 Solid | 38.00 € | **36.50 €** | 14.2 % | **9.7 %** | 36.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **12.50 €** | 38.3 % | **23.5 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 25.00 € | **23.50 €** | 38.0 % | **29.7 %** | 23.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.50 €** | 38.3 % | **32.5 %** | 34.90 € | stávame sa najlacnejší |
| PT Adapter Epever PAL-ADP-50AN | 39.00 € | **37.50 €** | 14.8 % | **10.4 %** | 37.90 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **23.50 €** | 13.9 % | **7.0 %** | 23.90 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **23.50 €** | 13.9 % | **7.0 %** | 23.90 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **23.50 €** | 13.9 % | **7.0 %** | 23.90 € | stávame sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.50 €** | 14.6 % | **7.5 %** | 22.90 € | stávame sa najlacnejší |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 28.00 € | **26.50 €** | 14.1 % | **8.0 %** | 26.90 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 79.00 € | **77.50 €** | 11.2 % | **9.1 %** | 77.90 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 59.50 € | **58.00 €** | 14.7 % | **11.8 %** | 58.49 € | stávame sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 100.50 € | **99.00 €** | 7.4 % | **5.8 %** | 99.50 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 195W | 34.50 € | **33.00 €** | 15.6 % | **10.5 %** | 33.50 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24161 KING SIZE 203x152x25 cm | 34.50 € | **33.00 €** | 14.8 % | **9.8 %** | 33.50 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 20.50 € | **19.00 €** | 48.5 % | **37.7 %** | 19.50 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.00 €** | 10.5 % | **8.8 %** | 98.50 € | stávame sa najlacnejší |
| Odvlhčovač vzduchu Ruhhy 26829 | 34.50 € | **33.00 €** | 15.4 % | **10.4 %** | 33.50 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 34.50 € | **33.00 €** | 55.5 % | **48.7 %** | 33.50 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 559.50 € | **558.00 €** | 7.9 % | **7.6 %** | 558.50 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.00 €** | 14.9 % | **10.7 %** | 39.50 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **181.00 €** | 14.9 % | **14.0 %** | 181.50 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.00 €** | 15.0 % | **12.2 %** | 61.50 € | stávame sa najlacnejší |
| Baterie motocyklová  12V /  9Ah Vipow | 25.50 € | **24.00 €** | 14.7 % | **7.9 %** | 24.50 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.00 €** | 15.6 % | **5.7 %** | 16.50 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.00 €** | 15.7 % | **9.4 %** | 26.50 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.00 €** | 15.8 % | **5.8 %** | 16.50 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.00 €** | 15.9 % | **5.9 %** | 16.50 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 20.50 € | **19.00 €** | 15.4 % | **7.0 %** | 19.50 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.00 €** | 15.2 % | **10.5 %** | 35.50 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **35.00 €** | 15.2 % | **10.5 %** | 35.50 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.00 €** | 15.0 % | **10.4 %** | 36.50 € | stávame sa najlacnejší |
| Fixed Creator Tripod FIXCRT-BK | 43.50 € | **42.00 €** | 10.5 % | **6.7 %** | 42.50 € | stávame sa najlacnejší |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 21.50 € | **20.00 €** | 15.9 % | **7.8 %** | 20.50 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 2000/24 URZ3428 1400W 24V | 167.50 € | **166.00 €** | 15.0 % | **14.0 %** | 166.50 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.00 €** | 15.6 % | **11.7 %** | 43.50 € | stávame sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 488.50 € | **487.00 €** | 6.9 % | **6.6 %** | 487.50 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6010-GL 110x42... | 17.50 € | **16.00 €** | 14.9 % | **5.1 %** | 16.50 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 227.90 € | **226.50 €** | 5.8 % | **5.2 %** | 226.79 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.90 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.90 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.90 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.90 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 232.90 € | **231.50 €** | 18.3 % | **17.6 %** | 231.90 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 13.90 € | **12.50 €** | 18.6 % | **6.6 %** | 12.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.40 € | **6.00 €** | 47.8 % | **19.9 %** | 6.10 € | stávame sa najlacnejší |
| Nutribullet NBP003.B | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 25.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Onyx BS2400 | 30.90 € | **29.50 €** | 10.1 % | **5.1 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 42.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9258M | 36.90 € | **35.50 €** | 10.4 % | **6.2 %** | 33.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.NBL | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada litinových závaží 4x1,25kg, 51mm, REBEL ACTIVE ... | 18.90 € | **17.50 €** | 16.0 % | **7.4 %** | 15.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Portable NBP003LBL | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 28.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.90 € | **17.50 €** | 15.0 % | **6.5 %** | 17.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah MHPower MS9-12 | 16.90 € | **15.50 €** | 15.5 % | **5.9 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 808/05 | 60.90 € | **59.50 €** | 10.7 % | **8.1 %** | 59.79 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **15.50 €** | 39.1 % | **27.5 %** | 15.90 € | stávame sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 57.90 € | **56.50 €** | 12.8 % | **10.0 %** | 56.90 € | stávame sa najlacnejší |
| Solární regulátor PWM Epever LS3024B, 12/24V, 30A | 31.90 € | **30.50 €** | 15.2 % | **10.2 %** | 30.90 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **26.50 €** | 11.6 % | **6.0 %** | 26.90 € | stávame sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 40.90 € | **39.50 €** | 10.3 % | **6.5 %** | 39.90 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.90 € | **16.50 €** | 15.6 % | **6.5 %** | 16.90 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.50 €** | 15.6 % | **6.5 %** | 16.90 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.80 €** | 39.2 % | **5.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 9.00 € | **7.80 €** | 53.7 % | **33.2 %** | 7.90 € | stávame sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.10 €** | 59.1 % | **33.0 %** | 6.20 € | stávame sa najlacnejší |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 32.00 € | **30.90 €** | 10.1 % | **6.4 %** | 28.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 37.00 € | **35.90 €** | 41.8 % | **37.5 %** | 36.00 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **27.90 €** | 47.5 % | **41.9 %** | 28.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Habotest HT126A Digitálny univerzálny multimeter | 26.00 € | **24.90 €** | 14.8 % | **10.0 %** | 25.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **27.90 €** | 14.8 % | **10.5 %** | 28.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah XTREME / Enerwell bezúdr... | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 51.00 € | **49.90 €** | 11.5 % | **9.1 %** | 50.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **24.90 €** | 42.8 % | **36.8 %** | 25.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 47.00 € | **45.90 €** | 15.1 % | **12.4 %** | 46.00 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **45.90 €** | 15.1 % | **12.4 %** | 46.00 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **34.90 €** | 15.0 % | **11.5 %** | 35.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.40 € | **5.30 €** | 47.0 % | **21.7 %** | 5.40 € | stávame sa najlacnejší |
| Batéria AA MediaRange nabíjateľné USB-C Li-Ion , 1,5... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Akupresurní podložka s polštářem REBEL ACTIVE RBA-60... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  7,5Ah XTREME / Enerwell bezú... | 16.00 € | **14.90 €** | 15.2 % | **7.3 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria AAA MediaRange nabíjateľné USB-C Li-Ion , 1,... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight FM transmitter s bluetooth pripojením do aut... | 16.00 € | **14.90 €** | 43.9 % | **34.0 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **14.90 €** | 38.4 % | **28.9 %** | 15.00 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.50 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **15.90 €** | 15.2 % | **7.7 %** | 16.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 11.00 € | **9.90 €** | 45.4 % | **30.9 %** | 10.00 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **87.90 €** | 15.1 % | **13.6 %** | 88.00 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 64.90 € | **63.90 €** | 10.3 % | **8.6 %** | 64.00 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.90 € | **63.90 €** | 15.1 % | **13.3 %** | 64.00 € | stávame sa najlacnejší |
| Rowenta ZR710001 | 26.50 € | **25.50 €** | 10.8 % | **6.6 %** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-300-12 UPS 300W 12V čistý ... | 83.90 € | **82.90 €** | 6.7 % | **5.4 %** | 74.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-BK | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 16.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.90 € | **18.90 €** | 10.7 % | **5.1 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (čierny) | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-PI | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set PowerClean M+náhr. zdarma | 20.50 € | **19.50 €** | 10.7 % | **5.3 %** | 17.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 15.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **10.90 €** | 15.6 % | **5.9 %** | 9.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WA854RE Wireless N Extender | 15.50 € | **14.50 €** | 13.2 % | **5.9 %** | 13.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skúšačka UNI-T UT18D vadaska | 42.90 € | **41.90 €** | 7.5 % | **5.0 %** | 41.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-TI | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada hasičských vozidel 26305 | 18.50 € | **17.50 €** | 13.5 % | **7.4 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada 16 barevných kovových autíček 26319 | 12.00 € | **11.00 €** | 14.9 % | **5.3 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ventilátor mini ruční stolní Ruhhy 27781 | 11.90 € | **10.90 €** | 16.8 % | **7.0 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzální dálkový ovladač SUPERIOR LG – Bluetooth ... | 11.90 € | **10.90 €** | 16.3 % | **6.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzální dálkový ovladač SUPERIOR Samsung – Bluet... | 11.90 € | **10.90 €** | 16.3 % | **6.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CFT610/5X/1 | 48.50 € | **47.50 €** | 8.3 % | **6.1 %** | 47.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj pulzní EMOS N3112 s hřebínkem 1500mA (3-12V) u... | 14.50 € | **13.50 €** | 15.3 % | **7.4 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.4 % | **5.6 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák projektoru Cabletech UCH0148 univerzální | 14.50 € | **13.50 €** | 13.9 % | **6.0 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 11.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUGER & MATZ KM0903 Powerbanka 10000 mAh Li-pol | 11.90 € | **10.90 €** | 16.8 % | **7.0 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.50 €** | 12.9 % | **5.1 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný stojan ONIKUMA ST-2 (biely) | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stojan na slúchadlá ONIKUMA ST-2 čierny | 13.90 € | **12.90 €** | 15.1 % | **6.8 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultrazvukový merací prístroj na hrúbku Uni-T UT345A | 86.50 € | **85.50 €** | 6.9 % | **5.7 %** | 85.59 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 70.50 € | **69.50 €** | 11.2 % | **9.7 %** | 69.59 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 34.00 € | **33.00 €** | 14.8 % | **11.4 %** | 33.09 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 47.50 € | **46.50 €** | 13.0 % | **10.6 %** | 46.59 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 70.50 € | **69.50 €** | 12.1 % | **10.5 %** | 69.59 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 24.50 € | **23.50 €** | 11.0 % | **6.4 %** | 23.59 € | stávame sa najlacnejší |
| Uni-T UT206B digitálny klešťový multimeter | 67.50 € | **66.50 €** | 11.5 % | **9.8 %** | 66.59 € | stávame sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 38.50 € | **37.50 €** | 9.8 % | **6.9 %** | 37.59 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 52.50 € | **51.50 €** | 11.1 % | **9.0 %** | 51.59 € | stávame sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 45.50 € | **44.50 €** | 9.2 % | **6.8 %** | 44.59 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 95.50 € | **94.50 €** | 10.7 % | **9.5 %** | 94.59 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 54.50 € | **53.50 €** | 12.5 % | **10.4 %** | 53.59 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 101.50 € | **100.50 €** | 13.2 % | **12.1 %** | 100.59 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 74.50 € | **73.50 €** | 10.9 % | **9.4 %** | 73.59 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 122.50 € | **121.50 €** | 14.3 % | **13.4 %** | 121.59 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 119.00 € | **118.00 €** | 14.9 % | **13.9 %** | 118.09 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.90 €** | 10.4 % | **9.3 %** | 102.00 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.50 €** | 50.3 % | **36.0 %** | 9.60 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **16.90 €** | 16.2 % | **9.7 %** | 17.00 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **84.90 €** | 15.1 % | **13.7 %** | 85.00 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 70.90 € | **69.90 €** | 15.3 % | **13.7 %** | 70.00 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 70.90 € | **69.90 €** | 15.3 % | **13.7 %** | 70.00 € | stávame sa najlacnejší |
| Hoverboard Rebel Cruiser Joy | 151.90 € | **150.90 €** | 15.0 % | **14.2 %** | 151.00 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **12.90 €** | 14.8 % | **6.6 %** | 13.00 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 137.90 € | **136.90 €** | 10.0 % | **9.2 %** | 137.00 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 111.50 € | **110.50 €** | 9.0 % | **8.0 %** | 110.69 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 89.50 € | **88.50 €** | 12.6 % | **11.4 %** | 88.69 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 59.50 € | **58.50 €** | 7.8 % | **6.0 %** | 58.69 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 14.50 € | **13.50 €** | 18.4 % | **10.2 %** | 13.79 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 24.50 € | **23.50 €** | 9.8 % | **5.3 %** | 23.79 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.50 € | **15.50 €** | 13.1 % | **6.3 %** | 15.79 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 22.50 € | **21.50 €** | 10.5 % | **5.6 %** | 21.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.50 € | **21.50 €** | 11.7 % | **6.8 %** | 21.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.50 € | **21.50 €** | 11.7 % | **6.8 %** | 21.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.50 € | **17.50 €** | 12.6 % | **6.5 %** | 17.89 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 13.00 € | **12.00 €** | 32.1 % | **22.0 %** | 12.39 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.50 € | **26.50 €** | 14.9 % | **10.7 %** | 26.89 € | stávame sa najlacnejší |
| DOMO DO42329PC | 117.50 € | **116.50 €** | 10.3 % | **9.3 %** | 116.89 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 33.50 € | **32.50 €** | 11.8 % | **8.4 %** | 32.89 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 209.50 € | **208.50 €** | 14.6 % | **14.0 %** | 208.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 58.50 € | **57.50 €** | 13.1 % | **11.1 %** | 57.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 71.00 € | **70.00 €** | 14.6 % | **13.0 %** | 70.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.50 € | **88.50 €** | 14.8 % | **13.6 %** | 88.89 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 48.50 € | **47.50 €** | 12.0 % | **9.6 %** | 47.89 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 109.50 € | **108.50 €** | 13.8 % | **12.8 %** | 108.89 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 34.50 € | **33.50 €** | 12.4 % | **9.1 %** | 33.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 245.50 € | **244.50 €** | 15.0 % | **14.5 %** | 244.89 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 103.50 € | **102.50 €** | 13.6 % | **12.5 %** | 102.89 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 193.50 € | **192.50 €** | 14.4 % | **13.8 %** | 192.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 469.50 € | **468.50 €** | 8.5 % | **8.3 %** | 468.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 903.50 € | **902.50 €** | 14.8 % | **14.7 %** | 902.89 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 94.00 € | **93.00 €** | 14.9 % | **13.6 %** | 93.39 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 88.50 € | **87.50 €** | 12.6 % | **11.3 %** | 87.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **27.00 €** | 14.5 % | **10.4 %** | 27.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 131.50 € | **130.50 €** | 15.1 % | **14.3 %** | 130.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 85.50 € | **84.50 €** | 13.1 % | **11.8 %** | 84.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 61.50 € | **60.50 €** | 13.0 % | **11.2 %** | 60.89 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 53.50 € | **52.50 €** | 11.8 % | **9.7 %** | 52.89 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 34.50 € | **33.50 €** | 12.1 % | **8.8 %** | 33.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 41.50 € | **40.50 €** | 13.0 % | **10.2 %** | 40.89 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 170.00 € | **169.00 €** | 14.9 % | **14.2 %** | 169.39 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 193.50 € | **192.50 €** | 15.0 % | **14.4 %** | 192.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 209.50 € | **208.50 €** | 6.8 % | **6.3 %** | 208.89 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 143.50 € | **142.50 €** | 14.4 % | **13.6 %** | 142.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 258.50 € | **257.50 €** | 14.4 % | **14.0 %** | 257.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT312A | 284.00 € | **283.00 €** | 15.0 % | **14.6 %** | 283.39 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 103.50 € | **102.50 €** | 14.0 % | **12.9 %** | 102.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 151.50 € | **150.50 €** | 13.8 % | **13.0 %** | 150.89 € | stávame sa najlacnejší |
| CrockPot CSC062X | 155.50 € | **154.50 €** | 5.8 % | **5.1 %** | 154.89 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 58.50 € | **57.50 €** | 10.3 % | **8.4 %** | 57.89 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 203.50 € | **202.50 €** | 13.7 % | **13.2 %** | 202.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 53.50 € | **52.50 €** | 10.6 % | **8.5 %** | 52.89 € | stávame sa najlacnejší |
| DOMO DO354VD | 132.50 € | **131.50 €** | 10.2 % | **9.4 %** | 131.89 € | stávame sa najlacnejší |
| DOMO DO9286IB | 251.50 € | **250.50 €** | 7.7 % | **7.3 %** | 250.89 € | stávame sa najlacnejší |
| DOMO DO252SV | 110.50 € | **109.50 €** | 10.2 % | **9.2 %** | 109.89 € | stávame sa najlacnejší |
| DOMO DO42102SV | 99.50 € | **98.50 €** | 10.1 % | **9.0 %** | 98.89 € | stávame sa najlacnejší |
| Vysávač MOVA Z200 Stick | 344.50 € | **343.50 €** | 14.7 % | **14.4 %** | 343.89 € | stávame sa najlacnejší |
| PRIMO PR406IM | 128.50 € | **127.50 €** | 10.2 % | **9.3 %** | 127.89 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 280.50 € | **279.50 €** | 9.5 % | **9.1 %** | 279.89 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 24.00 € | **23.00 €** | 14.6 % | **9.9 %** | 23.39 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 57.50 € | **56.50 €** | 15.4 % | **13.4 %** | 56.89 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.50 € | **18.50 €** | 12.9 % | **7.1 %** | 18.89 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 210.50 € | **209.50 €** | 12.9 % | **12.3 %** | 209.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 281.50 € | **280.50 €** | 7.9 % | **7.5 %** | 280.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 243.50 € | **242.50 €** | 9.6 % | **9.2 %** | 242.89 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 134.50 € | **133.50 €** | 7.3 % | **6.5 %** | 133.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 79.50 € | **78.50 €** | 7.3 % | **5.9 %** | 78.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 92.50 € | **91.50 €** | 9.7 % | **8.6 %** | 91.89 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.50 € | **22.50 €** | 10.8 % | **6.1 %** | 22.89 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 196.50 € | **195.50 €** | 10.4 % | **9.9 %** | 195.89 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **89.00 €** | 14.8 % | **13.5 %** | 89.39 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 124.50 € | **123.50 €** | 14.2 % | **13.3 %** | 123.89 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.50 €** | 47.4 % | **37.2 %** | 13.90 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8610 | 52.50 € | **51.50 €** | 15.0 % | **12.9 %** | 51.90 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 18.50 € | **17.50 €** | 38.9 % | **31.4 %** | 17.90 € | stávame sa najlacnejší |
| Maxxo vodní filtry 3+1 | 12.50 € | **11.50 €** | 17.2 % | **7.8 %** | 11.90 € | stávame sa najlacnejší |
| DOMO DO465FR | 66.50 € | **65.50 €** | 10.6 % | **9.0 %** | 65.90 € | stávame sa najlacnejší |
| Masážní přístroj Soulima 22579 9v1 | 17.50 € | **16.50 €** | 14.6 % | **8.0 %** | 16.90 € | stávame sa najlacnejší |
| DOMO DO754K | 36.50 € | **35.50 €** | 10.4 % | **7.4 %** | 35.90 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.50 € | **120.50 €** | 10.3 % | **9.4 %** | 120.90 € | stávame sa najlacnejší |
| Domo DO228SV | 121.50 € | **120.50 €** | 10.0 % | **9.1 %** | 120.90 € | stávame sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.50 € | **24.50 €** | 11.8 % | **7.4 %** | 24.90 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 799.50 € | **798.50 €** | 15.0 % | **14.9 %** | 798.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 159.50 € | **158.50 €** | 7.9 % | **7.2 %** | 158.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 187.50 € | **186.50 €** | 7.9 % | **7.3 %** | 186.90 € | stávame sa najlacnejší |
| TV držák AX OPTICUM Strong Prima 30"–70" | 17.50 € | **16.50 €** | 14.9 % | **8.4 %** | 16.90 € | stávame sa najlacnejší |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 32.50 € | **31.50 €** | 15.8 % | **12.3 %** | 31.90 € | stávame sa najlacnejší |
| Baterie olověná  12V /  3,4Ah XTREME bezúdržbový aku... | 11.50 € | **10.50 €** | 17.2 % | **7.0 %** | 10.90 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-276/W Ultra p... | 19.50 € | **18.50 €** | 15.8 % | **9.9 %** | 18.90 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.50 €** | 11.2 % | **7.0 %** | 25.90 € | stávame sa najlacnejší |
| Niceboy Podsie 4 POP Black | 15.50 € | **14.50 €** | 16.9 % | **9.4 %** | 14.90 € | stávame sa najlacnejší |
| Niceboy Podsie 4 POP White | 15.50 € | **14.50 €** | 16.8 % | **9.3 %** | 14.90 € | stávame sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.50 €** | 16.1 % | **6.9 %** | 11.90 € | stávame sa najlacnejší |
| Kettlebell litinový nastavitelný 9 kg REBEL ACTIVE R... | 44.50 € | **43.50 €** | 10.6 % | **8.1 %** | 43.90 € | stávame sa najlacnejší |
| Freestyle koloběžka NILS Extreme HS033 černo-červená | 48.50 € | **47.50 €** | 9.8 % | **7.5 %** | 47.90 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 488.50 € | **487.50 €** | 10.1 % | **9.8 %** | 487.90 € | stávame sa najlacnejší |
| Koš na prádlo skládací Ruhhy 15371 25 L | 14.00 € | **13.00 €** | 14.5 % | **6.3 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.00 €** | 47.4 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.00 €** | 47.4 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.00 €** | 47.2 % | **41.8 %** | 26.50 € | stávame sa najlacnejší |
| LED stropní světlo Adviti VITO AD-PL-6515WLZM/CCT TUYA | 30.00 € | **29.00 €** | 15.0 % | **11.2 %** | 29.50 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.00 € | **31.00 €** | 13.3 % | **9.8 %** | 31.50 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.00 €** | 41.0 % | **36.6 %** | 31.50 € | stávame sa najlacnejší |
| TEESA TSA9017 teplovzdušný ventilátor s imitací krbu... | 58.00 € | **57.00 €** | 14.9 % | **12.9 %** | 57.50 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.00 €** | 46.4 % | **39.5 %** | 20.50 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.00 € | **39.00 €** | 10.1 % | **7.4 %** | 39.50 € | stávame sa najlacnejší |
| Vysavač akumulátorový  TEESA TSA5055 SWEEPER 9000 2v1 | 93.00 € | **92.00 €** | 14.8 % | **13.6 %** | 92.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.00 €** | 14.6 % | **9.1 %** | 20.50 € | stávame sa najlacnejší |
| Domácí monitorovací systém TechnoLine MA10001 Starte... | 76.00 € | **75.00 €** | 14.8 % | **13.3 %** | 75.50 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.50 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.00 €** | 13.4 % | **6.7 %** | 16.50 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.00 €** | 13.6 % | **7.3 %** | 17.50 € | stávame sa najlacnejší |
| Herné slúchadlá Onikuma B2 (čierne) | 22.00 € | **21.00 €** | 14.2 % | **9.0 %** | 21.50 € | stávame sa najlacnejší |
| JBL Tune 670NC white | 64.00 € | **63.00 €** | 11.0 % | **9.3 %** | 63.50 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.00 €** | 13.7 % | **6.6 %** | 15.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 52.00 € | **51.00 €** | 14.6 % | **12.4 %** | 51.50 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.00 €** | 14.9 % | **12.7 %** | 50.50 € | stávame sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 63.00 € | **62.00 €** | 11.0 % | **9.2 %** | 62.50 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6013-GL 130x50... | 32.00 € | **31.00 €** | 12.2 % | **8.7 %** | 31.50 € | stávame sa najlacnejší |
| TP-LINK Archer T3U WiFi Adaptér | 16.90 € | **15.90 €** | 12.3 % | **5.6 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí bezdrátová podložka pro telefony Compass | 16.90 € | **15.90 €** | 12.9 % | **6.2 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 16.90 € | **15.90 €** | 12.1 % | **5.4 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.90 € | **86.00 €** | 15.0 % | **13.8 %** | 86.39 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 137.90 € | **137.00 €** | 15.1 % | **14.3 %** | 137.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **79.00 €** | 15.2 % | **13.9 %** | 79.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.90 € | **73.00 €** | 14.9 % | **13.5 %** | 73.39 € | stávame sa najlacnejší |
| MOVA V10 Akumulátorový vysávač na bazény | 206.90 € | **206.00 €** | 15.1 % | **14.6 %** | 206.39 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 102.90 € | **102.00 €** | 7.8 % | **6.8 %** | 102.45 € | stávame sa najlacnejší |
| Motorcycle Intercom EJEAS MS8-SE | 86.90 € | **86.00 €** | 15.1 % | **13.9 %** | 86.50 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 151.90 € | **151.00 €** | 6.1 % | **5.5 %** | 151.50 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 30 V2 /bílé/ 0010/3955 | 67.90 € | **67.00 €** | 15.3 % | **13.8 %** | 67.50 € | stávame sa najlacnejší |
| Gorenje F492PW | 174.90 € | **174.00 €** | 9.0 % | **8.4 %** | 174.50 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **77.00 €** | 15.0 % | **13.7 %** | 77.50 € | stávame sa najlacnejší |
| Fixed Video kabel FIXHU-CHDMI-GR | 15.90 € | **15.00 €** | 11.9 % | **5.6 %** | 11.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.00 €** | 11.3 % | **5.0 %** | 14.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.90 € | **4.00 €** | 43.8 % | **17.4 %** | 4.10 € | stávame sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.10 €** | 48.6 % | **35.3 %** | 9.20 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.90 € | **13.00 €** | 13.5 % | **6.1 %** | 13.39 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.00 €** | 12.1 % | **5.3 %** | 14.39 € | stávame sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.90 € | **12.00 €** | 15.3 % | **7.2 %** | 12.39 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 14.50 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.00 €** | 46.2 % | **34.2 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.00 €** | 45.7 % | **34.7 %** | 11.50 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.00 €** | 39.9 % | **30.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.90 € | **10.00 €** | 46.7 % | **34.6 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.00 €** | 47.7 % | **38.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.00 €** | 40.4 % | **30.6 %** | 12.50 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **12.00 €** | 31.1 % | **22.0 %** | 12.50 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.00 €** | 16.5 % | **9.0 %** | 13.50 € | stávame sa najlacnejší |
| TESLA MediaBox XT850 - originální dálkové ovládání | 12.90 € | **12.00 €** | 14.7 % | **6.7 %** | 12.50 € | stávame sa najlacnejší |
| Nabíječka USB BLOW 76-033 GaN 45W USB-A + USB-C + 1m... | 10.90 € | **10.00 €** | 15.7 % | **6.1 %** | 10.50 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **13.00 €** | 20.3 % | **12.6 %** | 13.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.90 € | **14.00 €** | 16.8 % | **9.8 %** | 14.50 € | stávame sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.00 €** | 11.8 % | **5.0 %** | 14.50 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 10.90 € | **10.00 €** | 41.8 % | **30.1 %** | 10.50 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 14.90 € | **14.00 €** | 14.2 % | **7.3 %** | 14.50 € | stávame sa najlacnejší |
| Turistická rybářská židle, skládací s opěradlem | 12.90 € | **12.00 €** | 15.1 % | **7.1 %** | 12.50 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.00 €** | 17.1 % | **7.4 %** | 10.50 € | stávame sa najlacnejší |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 14.90 € | **14.00 €** | 15.7 % | **8.7 %** | 14.50 € | stávame sa najlacnejší |
| Pikniková deka TEESA TSA8903-1 200x200 cm šedá kostka | 12.90 € | **12.00 €** | 15.1 % | **7.1 %** | 12.50 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.40 €** | 55.0 % | **28.7 %** | 4.50 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 21.90 € | **21.00 €** | 10.0 % | **5.5 %** | 21.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 40.90 € | **40.00 €** | 15.4 % | **12.9 %** | 40.09 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.90 € | **43.00 €** | 15.0 % | **12.6 %** | 43.29 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.90 € | **18.00 €** | 15.0 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 47.90 € | **47.00 €** | 12.3 % | **10.2 %** | 47.39 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 47.90 € | **47.00 €** | 12.3 % | **10.2 %** | 47.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.90 € | **24.00 €** | 17.5 % | **13.2 %** | 24.39 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.00 €** | 12.2 % | **6.2 %** | 16.39 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.90 € | **37.00 €** | 11.1 % | **8.4 %** | 37.39 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 43.90 € | **43.00 €** | 10.5 % | **8.2 %** | 43.39 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.90 € | **28.00 €** | 39.1 % | **34.8 %** | 28.50 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.90 € | **18.00 €** | 15.0 % | **9.5 %** | 18.50 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 27.90 € | **27.00 €** | 25.4 % | **21.3 %** | 27.50 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.00 €** | 46.6 % | **39.2 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.00 €** | 35.5 % | **28.3 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.90 € | **54.00 €** | 38.3 % | **36.0 %** | 54.50 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **39.00 €** | 38.6 % | **35.4 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.00 €** | 38.4 % | **33.2 %** | 23.50 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **16.00 €** | 38.2 % | **30.9 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.90 € | **45.00 €** | 41.6 % | **38.8 %** | 45.50 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **27.00 €** | 15.4 % | **11.7 %** | 27.50 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 28.90 € | **28.00 €** | 27.1 % | **23.2 %** | 28.50 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.00 €** | 11.9 % | **5.9 %** | 16.50 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 20.90 € | **20.00 €** | 16.1 % | **11.1 %** | 20.50 € | stávame sa najlacnejší |
| Girmi BL0301 | 28.90 € | **28.00 €** | 10.8 % | **7.4 %** | 28.50 € | stávame sa najlacnejší |
| Gorenje MVC72HGA | 29.90 € | **29.00 €** | 10.5 % | **7.2 %** | 29.50 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.00 €** | 10.3 % | **8.6 %** | 58.50 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.00 €** | 8.1 % | **5.3 %** | 33.50 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.90 € | **58.00 €** | 35.6 % | **33.5 %** | 58.50 € | stávame sa najlacnejší |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 18.90 € | **18.00 €** | 11.2 % | **5.9 %** | 18.50 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.90 € | **20.00 €** | 15.0 % | **10.1 %** | 20.50 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.00 €** | 15.8 % | **11.2 %** | 22.50 € | stávame sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **35.00 €** | 15.0 % | **12.1 %** | 35.50 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.90 € | **55.00 €** | 36.4 % | **34.2 %** | 55.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.00 €** | 20.3 % | **16.7 %** | 29.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **33.00 €** | 25.7 % | **22.4 %** | 33.50 € | stávame sa najlacnejší |
| Batéria Jupio Alkaline AA balenie 100ks | 35.90 € | **35.00 €** | 9.7 % | **7.0 %** | 35.50 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **41.00 €** | 15.1 % | **12.7 %** | 41.50 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.00 €** | 15.1 % | **13.5 %** | 63.50 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.00 €** | 14.9 % | **11.5 %** | 29.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.00 €** | 39.6 % | **33.3 %** | 19.50 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT315A | 308.90 € | **308.00 €** | 15.0 % | **14.7 %** | 308.39 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 328.90 € | **328.00 €** | 8.1 % | **7.8 %** | 328.50 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.60 € | **2.80 €** | 48.6 % | **15.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 5.10 € | **4.30 €** | 55.3 % | **30.9 %** | 4.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.40 €** | 47.8 % | **33.4 %** | 7.50 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.70 € | **2.00 €** | 50.4 % | **11.4 %** | 2.10 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 4.20 € | **3.50 €** | 54.5 % | **28.8 %** | 3.60 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.00 € | **3.30 €** | 53.4 % | **26.6 %** | 3.40 € | stávame sa najlacnejší |
| Roborock Q10 PF+ Čistiaci robot (čierny) | 335.50 € | **334.90 €** | 15.0 % | **14.8 %** | 335.00 € | stávame sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 268.50 € | **267.90 €** | 7.6 % | **7.3 %** | 268.00 € | stávame sa najlacnejší |
| GORENJE GS620C10S | 343.50 € | **342.90 €** | 7.1 % | **6.9 %** | 343.00 € | stávame sa najlacnejší |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 30.50 € | **29.90 €** | 7.5 % | **5.4 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multimeter Uni-T UT256A | 43.50 € | **42.90 €** | 6.9 % | **5.5 %** | 42.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 22.50 € | **21.90 €** | 9.8 % | **6.9 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.50 € | **32.90 €** | 15.9 % | **13.8 %** | 33.00 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.50 € | **21.90 €** | 11.7 % | **8.8 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **19.90 €** | 38.4 % | **34.4 %** | 20.00 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **28.90 €** | 14.9 % | **12.6 %** | 29.00 € | stávame sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **19.90 €** | 48.5 % | **44.2 %** | 20.00 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 32.50 € | **31.90 €** | 10.3 % | **8.2 %** | 32.00 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **16.90 €** | 16.6 % | **12.6 %** | 17.00 € | stávame sa najlacnejší |
| Ardes AR4B01B | 45.50 € | **44.90 €** | 10.0 % | **8.6 %** | 45.00 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.50 € | **51.90 €** | 10.3 % | **9.1 %** | 52.00 € | stávame sa najlacnejší |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.50 € | **25.90 €** | 32.5 % | **29.5 %** | 26.00 € | stávame sa najlacnejší |
| TEFAL XA 800512 | 17.50 € | **16.90 €** | 10.3 % | **6.5 %** | 17.00 € | stávame sa najlacnejší |
| Girmi PE3600 | 39.50 € | **38.90 €** | 10.9 % | **9.2 %** | 39.00 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **31.90 €** | 59.9 % | **57.0 %** | 32.00 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.50 € | **25.90 €** | 11.4 % | **8.9 %** | 26.00 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **18.90 €** | 14.1 % | **10.6 %** | 19.00 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **16.90 €** | 11.6 % | **7.8 %** | 17.00 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **18.90 €** | 15.0 % | **11.4 %** | 19.00 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **20.90 €** | 15.1 % | **11.9 %** | 21.00 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.50 € | **24.90 €** | 25.3 % | **22.4 %** | 25.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 17.50 € | **16.90 €** | 37.2 % | **32.5 %** | 17.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **43.90 €** | 12.3 % | **10.8 %** | 44.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.50 € | **37.90 €** | 39.5 % | **37.4 %** | 38.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **63.90 €** | 21.1 % | **20.0 %** | 64.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 45.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 45.00 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X12 | 17.50 € | **16.90 €** | 15.6 % | **11.6 %** | 17.00 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **31.90 €** | 14.7 % | **12.6 %** | 32.00 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **16.90 €** | 42.8 % | **38.0 %** | 17.00 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.50 € | **19.90 €** | 40.3 % | **36.2 %** | 20.00 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **17.90 €** | 10.4 % | **6.8 %** | 18.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.50 € | **21.90 €** | 9.3 % | **6.4 %** | 22.00 € | stávame sa najlacnejší |
| Medicinbal REBEL ACTIVE RBA-3108-10 Slam Ball 23cm 10kg | 17.50 € | **16.90 €** | 14.6 % | **10.6 %** | 17.00 € | stávame sa najlacnejší |
| Tréninkové cvičební pásy TRX P3-3 REBEL ACTIVE RBA-3... | 20.50 € | **19.90 €** | 15.0 % | **11.7 %** | 20.00 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.10 €** | 55.2 % | **41.3 %** | 6.20 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.30 €** | 47.1 % | **32.2 %** | 5.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.10 €** | 49.3 % | **30.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.60 €** | 48.7 % | **34.3 %** | 5.70 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.80 €** | 55.5 % | **34.3 %** | 3.90 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.40 € | **2.80 €** | 56.2 % | **28.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.10 €** | 55.1 % | **29.9 %** | 3.20 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.30 € | **1.70 €** | 47.2 % | **8.8 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed řemínek AWU 49mm FIXNST2-1029-RD | 16.50 € | **15.90 €** | 11.1 % | **7.1 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák MagMount Vent FIXMMT-V-BK | 14.50 € | **13.90 €** | 11.6 % | **7.0 %** | 10.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U AC600 WiFi Adaptér | 12.50 € | **11.90 €** | 13.2 % | **7.7 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 11.3 % | **6.7 %** | 12.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termotaška Trizand 25635 30L | 11.50 € | **10.90 €** | 13.5 % | **7.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.50 € | **11.90 €** | 11.6 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.50 € | **11.90 €** | 11.6 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet HAPPY GREEN Blue 2l | 12.50 € | **11.90 €** | 10.6 % | **5.3 %** | 11.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka gelových baterií VIPOW BAT1126, 12V | 12.50 € | **11.90 €** | 14.2 % | **8.7 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **12.90 €** | 47.5 % | **41.0 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **12.90 €** | 14.0 % | **8.9 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **14.90 €** | 45.9 % | **40.2 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **12.90 €** | 56.1 % | **49.2 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **14.90 €** | 46.0 % | **40.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.50 € | **14.90 €** | 14.1 % | **9.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **14.90 €** | 39.9 % | **34.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **7.90 €** | 53.9 % | **43.0 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **10.90 €** | 38.3 % | **31.1 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 16.50 € | **15.90 €** | 40.0 % | **34.9 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **6.90 €** | 54.8 % | **42.4 %** | 7.00 € | stávame sa najlacnejší |
| Leifheit Potah na žehlicí prkno Cotton C | 10.50 € | **9.90 €** | 12.6 % | **6.2 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **14.90 €** | 47.4 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **14.90 €** | 16.8 % | **12.3 %** | 15.00 € | stávame sa najlacnejší |
| Detektor kouře ORNO OR-DC-637 | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 12.00 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 14.50 € | **13.90 €** | 41.4 % | **35.5 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **11.90 €** | 46.9 % | **39.8 %** | 12.00 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.30 € | **3.70 €** | 35.5 % | **16.6 %** | 3.80 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **12.90 €** | 36.3 % | **30.3 %** | 13.00 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **12.90 €** | 33.2 % | **27.3 %** | 13.00 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **13.90 €** | 16.5 % | **11.7 %** | 14.00 € | stávame sa najlacnejší |
| Solight lokátor na bicykel, Find My kompatibilný | 15.50 € | **14.90 €** | 41.6 % | **36.1 %** | 15.00 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.20 €** | 45.5 % | **32.6 %** | 6.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.30 € | **4.70 €** | 47.6 % | **30.9 %** | 4.80 € | stávame sa najlacnejší |
| Baterie olověná  12V /  7,0 Ah MHPower MS7-12 | 12.50 € | **11.90 €** | 14.2 % | **8.7 %** | 12.00 € | stávame sa najlacnejší |
| Baterie olověná  12V/ 7,5 Ah  REBEL bezúdržbová | 14.50 € | **13.90 €** | 15.0 % | **10.3 %** | 14.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 10.50 € | **9.90 €** | 43.7 % | **35.5 %** | 10.00 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **4.70 €** | 50.7 % | **33.6 %** | 4.80 € | stávame sa najlacnejší |
| Slúchadlá do uší TWS QCY Buds HT15 ANC (biele) | 15.50 € | **14.90 €** | 13.9 % | **9.5 %** | 15.00 € | stávame sa najlacnejší |
| Defender Taška na notebook 15,6", Geek | 14.50 € | **13.90 €** | 10.5 % | **5.9 %** | 14.00 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.00 €** | 53.7 % | **42.9 %** | 8.10 € | stávame sa najlacnejší |
| Sada nákladního auta TIR se 6 závodními autíčky 26303 | 10.50 € | **9.90 €** | 14.6 % | **8.0 %** | 10.00 € | stávame sa najlacnejší |
| Akumulátor Lipo Tattu 2s 650mAh 95C 7,6V HV z XT30 L... | 10.50 € | **9.90 €** | 16.5 % | **9.8 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo, 150+150lm, Li... | 8.60 € | **8.00 €** | 53.7 % | **42.9 %** | 8.10 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 78.50 € | **77.90 €** | 5.9 % | **5.1 %** | 77.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 107.50 € | **106.90 €** | 5.9 % | **5.3 %** | 106.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 102.50 € | **101.90 €** | 5.7 % | **5.0 %** | 101.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 102.50 € | **101.90 €** | 5.7 % | **5.0 %** | 101.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 87.50 € | **86.90 €** | 12.2 % | **11.4 %** | 87.00 € | stávame sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 248.50 € | **247.90 €** | 6.8 % | **6.6 %** | 248.00 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 110.50 € | **109.90 €** | 5.9 % | **5.3 %** | 110.00 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 107.50 € | **106.90 €** | 10.3 % | **9.7 %** | 107.00 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.80 €** | 55.5 % | **46.1 %** | 7.90 € | stávame sa najlacnejší |
| 3D Tlačiareň Creality K1 MAX | 497.00 € | **496.50 €** | 5.2 % | **5.1 %** | 458.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPL-500-12 UPS 500W 12V čistý ... | 101.00 € | **100.50 €** | 5.8 % | **5.3 %** | 94.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termohrnec OLIVES 3,5 l | 18.00 € | **17.50 €** | 10.0 % | **7.0 %** | 13.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor kovov UNI-T UT387E | 41.50 € | **41.00 €** | 6.5 % | **5.3 %** | 40.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.00 € | **11.50 €** | 12.0 % | **7.3 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (DGS-105) | 16.00 € | **15.50 €** | 10.6 % | **7.2 %** | 15.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tašky na tříděný odpad SORT EASY 4 CARTON, 30x30x40c... | 11.00 € | **10.50 €** | 14.4 % | **9.2 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.00 € | **15.50 €** | 10.1 % | **6.7 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka na dlažbu Classic s tele | 12.00 € | **11.50 €** | 10.1 % | **5.5 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger & Matz KM1303 | 16.50 € | **16.00 €** | 8.4 % | **5.1 %** | 16.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.00 € | **17.50 €** | 9.8 % | **6.7 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka EMOS AlphaQ3, 10 000 mAh, 22,5 W, černá | 15.00 € | **14.50 €** | 9.2 % | **5.5 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 29.50 € | **29.00 €** | 7.1 % | **5.3 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 15.00 € | **14.50 €** | 10.6 % | **6.9 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 5.10 € | **4.60 €** | 54.1 % | **39.0 %** | 4.70 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.70 € | **7.20 €** | 53.4 % | **43.5 %** | 7.30 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.00 €** | 56.3 % | **25.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.40 €** | 40.9 % | **22.9 %** | 3.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.50 €** | 38.7 % | **31.8 %** | 9.60 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **4.60 €** | 54.1 % | **39.0 %** | 4.70 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.10 €** | 49.0 % | **32.8 %** | 4.20 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.60 €** | 46.0 % | **31.7 %** | 4.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.90 € | **3.40 €** | 48.2 % | **29.2 %** | 3.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.30 € | **3.80 €** | 46.9 % | **29.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **5.90 €** | 53.5 % | **41.5 %** | 6.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.00 €** | 53.0 % | **31.1 %** | 3.10 € | stávame sa najlacnejší |
| GUZZANTIGZ 3601 | 27.50 € | **27.00 €** | 7.8 % | **5.8 %** | 27.29 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.50 € | **16.00 €** | 12.1 % | **8.7 %** | 16.29 € | stávame sa najlacnejší |
| Salente G4 robotický vysavač | 115.00 € | **114.50 €** | 7.2 % | **6.8 %** | 114.79 € | stávame sa najlacnejší |
| Salente Rtx-G4 | 115.00 € | **114.50 €** | 7.2 % | **6.8 %** | 114.79 € | stávame sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 25.00 € | **24.50 €** | 9.0 % | **6.9 %** | 24.79 € | stávame sa najlacnejší |
| Reproduktory k PC 2.1 Rebel CS-50 | 12.00 € | **11.50 €** | 11.4 % | **6.7 %** | 11.79 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **27.50 €** | 13.7 % | **11.7 %** | 27.79 € | stávame sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.50 € | **12.00 €** | 9.6 % | **5.2 %** | 12.29 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 67.50 € | **67.00 €** | 7.8 % | **7.0 %** | 67.29 € | stávame sa najlacnejší |
| Mio Smartbox IV | 31.00 € | **30.50 €** | 9.3 % | **7.5 %** | 30.89 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.50 €** | 38.5 % | **33.2 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.50 €** | 26.4 % | **23.3 %** | 19.90 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **11.50 €** | 47.4 % | **41.2 %** | 11.90 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 14.00 € | **13.50 €** | 32.8 % | **28.1 %** | 13.90 € | stávame sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.50 €** | 14.9 % | **13.9 %** | 54.90 € | stávame sa najlacnejší |
| Testovanie zariadenia USB Uni-T UT658LOAD | 16.00 € | **15.50 €** | 14.8 % | **11.2 %** | 15.90 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.50 €** | 32.0 % | **30.3 %** | 37.90 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 23.00 € | **22.50 €** | 39.2 % | **36.2 %** | 22.90 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-275/W | 17.00 € | **16.50 €** | 15.3 % | **11.9 %** | 16.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.50 €** | 54.5 % | **52.9 %** | 47.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.50 €** | 25.3 % | **22.5 %** | 21.90 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.50 €** | 31.9 % | **25.9 %** | 10.90 € | stávame sa najlacnejší |
| Solight 40mm kulma na dlhé vlasy pre Dyson Airwrap (... | 21.00 € | **20.50 €** | 30.3 % | **27.2 %** | 20.90 € | stávame sa najlacnejší |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 12.50 € | **12.00 €** | 16.4 % | **11.8 %** | 12.40 € | stávame sa najlacnejší |
| Súprava celodenných filtrov Freewell Real Locking s ... | 220.00 € | **219.50 €** | 14.9 % | **14.7 %** | 219.90 € | stávame sa najlacnejší |
| Baterie olověná  12V/ 7.0 Ah  REBEL bezúdržbová | 14.00 € | **13.50 €** | 13.4 % | **9.3 %** | 13.90 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 12.00 € | **11.50 €** | 19.3 % | **14.3 %** | 11.90 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.50 €** | 14.6 % | **13.4 %** | 46.90 € | stávame sa najlacnejší |
| Tréninkové háky REBEL RBA-2505 | 11.00 € | **10.50 €** | 10.8 % | **5.8 %** | 10.90 € | stávame sa najlacnejší |
| Hrazda do dveří Trizand 24784 | 17.00 € | **16.50 €** | 15.1 % | **11.7 %** | 16.90 € | stávame sa najlacnejší |
| Cyklotaška na zadní nosič 3in1 Trizand 25516 | 19.00 € | **18.50 €** | 14.8 % | **11.7 %** | 18.90 € | stávame sa najlacnejší |
| DOMO DO9046C | 56.50 € | **56.00 €** | 6.4 % | **5.5 %** | 56.49 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.50 € | **16.00 €** | 18.6 % | **15.0 %** | 16.49 € | stávame sa najlacnejší |
| ETA Aromo 0064 90000 bílý | 13.99 € | **13.50 €** | 10.3 % | **6.5 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 143.90 € | **143.50 €** | 9.0 % | **8.7 %** | 143.77 € | stávame sa najlacnejší |
| Fén MOVA Aero C v ružovej farbe | 206.90 € | **206.50 €** | 15.1 % | **14.8 %** | 206.79 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 74.90 € | **74.50 €** | 7.6 % | **7.0 %** | 74.89 € | stávame sa najlacnejší |
| Rowenta ZR009001 | 10.90 € | **10.50 €** | 12.7 % | **8.6 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Nano WiFi Adaptér | 10.90 € | **10.50 €** | 11.8 % | **7.6 %** | 7.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Power Bank 10000mAh 22.5W Lite GL | 12.90 € | **12.50 €** | 10.7 % | **7.3 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 13.90 € | **13.50 €** | 9.6 % | **6.5 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 10.90 € | **10.50 €** | 12.6 % | **8.5 %** | 9.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Razer Goliathus Mobile Stealth Ed. | 10.90 € | **10.50 €** | 13.6 % | **9.4 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.90 € | **13.50 €** | 10.9 % | **7.7 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.5 % | **7.7 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.90 € | **11.50 €** | 9.2 % | **5.5 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 9.00 € | **8.60 €** | 48.1 % | **41.5 %** | 8.70 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.20 €** | 38.6 % | **32.9 %** | 9.30 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.20 €** | 38.6 % | **32.9 %** | 9.30 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.60 €** | 53.7 % | **46.9 %** | 8.70 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.50 €** | 38.5 % | **30.5 %** | 6.60 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 4.20 € | **3.80 €** | 55.9 % | **41.1 %** | 3.90 € | stávame sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558 | 11.90 € | **11.50 €** | 14.1 % | **10.3 %** | 11.69 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.90 € | **14.50 €** | 15.7 % | **12.6 %** | 14.89 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.20 €** | 58.6 % | **19.0 %** | 1.30 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.70 €** | 55.2 % | **25.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.80 € | **2.40 €** | 27.9 % | **9.6 %** | 2.49 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.60 €** | 56.3 % | **25.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.60 € | **2.20 €** | 48.9 % | **26.0 %** | 2.30 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.30 €** | 44.0 % | **10.1 %** | 1.40 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.40 € | **3.00 €** | 46.3 % | **29.0 %** | 3.10 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.40 €** | 48.8 % | **27.5 %** | 2.50 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 6.80 € | **6.40 €** | 16.1 % | **9.3 %** | 6.49 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 7.30 € | **6.90 €** | 19.7 % | **13.1 %** | 6.99 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 4.60 € | **4.20 €** | 26.8 % | **15.8 %** | 4.29 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 5.10 € | **4.70 €** | 40.1 % | **29.1 %** | 4.80 € | stávame sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 58.90 € | **58.50 €** | 5.8 % | **5.0 %** | 56.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 20.90 € | **20.50 €** | 9.0 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 20.90 € | **20.50 €** | 9.0 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 20.90 € | **20.50 €** | 9.0 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 63.90 € | **63.50 €** | 5.8 % | **5.1 %** | 63.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 59.90 € | **59.50 €** | 6.3 % | **5.6 %** | 59.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní přístroj šíje a zad, REBEL ACTIVE RBA-6005 | 32.90 € | **32.50 €** | 7.5 % | **6.2 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0022-S | 20.90 € | **20.50 €** | 8.0 % | **5.9 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.70 € | **9.30 €** | 13.3 % | **8.6 %** | 9.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 8.70 € | **8.30 €** | 12.1 % | **6.9 %** | 8.39 € | stávame sa najlacnejší |
| Uni-T UT201R digitálny klešťový multimeter | 22.90 € | **22.50 €** | 16.0 % | **14.0 %** | 22.69 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **8.00 €** | 47.7 % | **42.3 %** | 8.10 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.80 €** | 52.7 % | **38.0 %** | 2.90 € | stávame sa najlacnejší |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.20 €** | 56.3 % | **25.1 %** | 1.30 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.70 €** | 57.9 % | **34.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.80 €** | 49.8 % | **28.4 %** | 1.90 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.30 €** | 44.5 % | **17.4 %** | 1.40 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.20 € | **0.90 €** | 59.9 % | **20.0 %** | 1.00 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.70 €** | 46.0 % | **31.4 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 5.80 € | **5.50 €** | 14.2 % | **8.3 %** | 5.60 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.70 €** | 41.8 % | **27.6 %** | 2.80 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.40 € | **1.10 €** | 51.8 % | **19.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.40 € | **1.10 €** | 47.8 % | **16.1 %** | 1.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.60 €** | 47.1 % | **23.9 %** | 1.70 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.80 €** | 46.2 % | **35.5 %** | 3.90 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.70 €** | 41.0 % | **26.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom bi... | 9.40 € | **9.20 €** | 11.2 % | **8.9 %** | 9.30 € | stávame sa najlacnejší |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.90 € | **9.70 €** | 28.2 % | **25.6 %** | 9.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.70 €** | 17.1 % | **14.5 %** | 8.80 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.20 €** | 43.8 % | **40.4 %** | 8.30 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.80 €** | 38.4 % | **34.9 %** | 7.90 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.70 € | **4.50 €** | 41.0 % | **35.0 %** | 4.60 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.20 € | **2.00 €** | 39.7 % | **27.0 %** | 2.10 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.30 €** | 50.6 % | **38.5 %** | 2.40 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.50 €** | 37.2 % | **27.0 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.30 €** | 28.3 % | **24.3 %** | 6.40 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.30 €** | 8.7 % | **5.4 %** | 6.40 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11, V15 | 7.00 € | **6.80 €** | 30.8 % | **27.1 %** | 6.90 € | stávame sa najlacnejší |
| Solight stĺpcový filter pre Dyson V12 | 6.00 € | **5.80 €** | 26.4 % | **22.2 %** | 5.90 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.80 €** | 22.7 % | **16.6 %** | 3.90 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.80 €** | 20.8 % | **17.4 %** | 6.90 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.10 €** | 38.7 % | **32.3 %** | 4.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.80 €** | 36.9 % | **33.5 %** | 7.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.40 €** | 15.7 % | **9.3 %** | 3.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **7.30 €** | 38.9 % | **35.2 %** | 7.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.10 €** | 21.0 % | **16.5 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.10 €** | 37.2 % | **32.0 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.70 € | **6.50 €** | 37.6 % | **33.4 %** | 6.60 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.70 € | **3.50 €** | 45.3 % | **37.5 %** | 3.60 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.70 €** | 45.4 % | **40.4 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.50 €** | 44.2 % | **40.5 %** | 7.60 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.60 € | **3.40 €** | 24.5 % | **17.6 %** | 3.50 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.80 €** | 52.0 % | **36.8 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.00 €** | 39.4 % | **16.1 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.10 €** | 40.9 % | **19.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.00 €** | 43.5 % | **19.6 %** | 1.10 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.50 €** | 45.5 % | **28.4 %** | 1.60 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.70 €** | 23.6 % | **10.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.80 €** | 23.2 % | **10.9 %** | 1.90 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.60 €** | 35.5 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.90 € | **2.70 €** | 23.4 % | **14.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.30 € | **3.10 €** | 36.2 % | **27.9 %** | 3.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.70 €** | 26.3 % | **19.8 %** | 3.80 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.40 €** | 54.6 % | **51.3 %** | 9.50 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.10 € | **7.90 €** | 11.1 % | **8.3 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.80 €** | 38.3 % | **35.5 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.40 €** | 32.5 % | **28.5 %** | 6.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.40 €** | 32.5 % | **28.5 %** | 6.50 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.80 €** | 25.1 % | **22.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.80 €** | 45.7 % | **42.8 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.40 €** | 24.8 % | **21.5 %** | 7.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **6.90 €** | 13.4 % | **10.2 %** | 7.00 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 58.00 € | **57.90 €** | 5.7 % | **5.5 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stojany na činky nastavitelné REBEL ACTIVE RBA-2402 | 62.00 € | **61.90 €** | 5.9 % | **5.7 %** | 61.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.00 € | **16.90 €** | 6.1 % | **5.4 %** | 16.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA100 sada pre výmenu vy... | 19.00 € | **18.90 €** | 5.6 % | **5.0 %** | 18.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 52.00 € | **51.90 €** | 6.0 % | **5.8 %** | 51.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 24.00 € | **23.90 €** | 5.6 % | **5.2 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.00 € | **17.90 €** | 6.0 % | **5.5 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 30.00 € | **29.90 €** | 14.5 % | **14.1 %** | 29.99 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.00 € | **46.90 €** | 6.4 % | **6.2 %** | 46.99 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.30 € | **6.20 €** | 7.8 % | **6.1 %** | 6.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-2 litinové neoprenové HE... | 13.00 € | **12.90 €** | 11.0 % | **10.2 %** | 12.97 € | stávame sa najlacnejší |

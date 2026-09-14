# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-14

Vstup: `premiumstore-sk_2026-09-14_13-39.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6296**
- Návrh **zvýšiť** cenu: **192** produktov
- Návrh **znížiť** cenu: **1815** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4289** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **602**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (192)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Gorenje NRKI517E41 | 464.50 € | **473.50 €** | 10.0 % | **12.1 %** | 473.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 463.50 € | **468.00 €** | 7.1 % | **8.1 %** | 463.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Gracioso horizontal | 200.50 € | **203.50 €** | 12.0 % | **13.7 %** | 200.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung OLED QE55S99H | 2168.50 € | **2171.00 €** | 6.7 % | **6.8 %** | 2169.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **64.00 €** | 19.8 % | **24.7 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kaon MZ-52, satelitní přijímač Skylink | 59.50 € | **61.50 €** | 5.2 % | **8.7 %** | 59.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roborock Q7 BF Black | 183.00 € | **185.00 €** | 7.0 % | **8.2 %** | 183.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi ST9100 | 33.50 € | **35.50 €** | 5.2 % | **11.5 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 37.90 € | **39.90 €** | 11.0 % | **16.8 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.90 €** | 20.1 % | **45.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, 20 - 200A | 5.00 € | **6.70 €** | 4.5 % | **40.0 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.50 €** | 10.2 % | **13.0 %** | 64.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 31.90 € | **33.50 €** | 14.3 % | **20.0 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **15.50 €** | 20.1 % | **33.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla, 150mm | 36.50 € | **38.00 €** | 19.8 % | **24.7 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 68.50 € | **69.90 €** | 10.7 % | **12.9 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Blue | 68.50 € | **69.90 €** | 10.7 % | **12.9 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy ORYX X220 Iris | 19.50 € | **20.90 €** | 10.2 % | **18.1 %** | 20.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Aquabelo 1264 90000, černý/bílý | 44.50 € | **45.90 €** | 11.1 % | **14.6 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje H45W | 38.50 € | **39.90 €** | 6.3 % | **10.2 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.90 € | **14.90 €** | 12.0 % | **20.1 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO 221 SV | 120.50 € | **121.50 €** | 9.1 % | **10.0 %** | 121.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 14.90 € | **15.90 €** | 39.9 % | **49.3 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 47.50 € | **48.50 €** | 11.1 % | **13.4 %** | 48.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO436BL | 35.50 € | **36.50 €** | 7.5 % | **10.5 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO354VD | 111.00 € | **111.90 €** | 10.0 % | **10.9 %** | 111.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **19.90 €** | 37.2 % | **43.7 %** | 19.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná dekorácia vianočný stromček, 24... | 3.30 € | **4.00 €** | 19.8 % | **45.2 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.90 € | **24.50 €** | 39.2 % | **42.7 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 17.90 € | **18.50 €** | 5.1 % | **8.6 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42102SV | 81.90 € | **82.50 €** | 10.4 % | **11.2 %** | 81.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EB61C4DB | 148.00 € | **148.50 €** | 8.3 % | **8.7 %** | 148.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 41.00 € | **41.50 €** | 4.9 % | **6.1 %** | 41.06 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Rotaro PowerVac 2v1 16V | 113.00 € | **113.50 €** | 8.6 % | **9.1 %** | 113.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.00 € | **16.50 €** | 8.0 % | **11.3 %** | 16.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Easy Chop | 33.00 € | **33.50 €** | 8.1 % | **9.8 %** | 33.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9279W | 51.00 € | **51.50 €** | 9.8 % | **10.9 %** | 51.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 150.00 € | **150.50 €** | 8.0 % | **8.3 %** | 150.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Philips TAR4600 Rádiobudík | 65.00 € | **65.50 €** | 7.5 % | **8.3 %** | 65.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WHT643E4XBG | 247.00 € | **247.50 €** | 7.9 % | **8.1 %** | 247.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1015502 Mikrovlnná trouba | 118.00 € | **118.50 €** | 10.0 % | **10.5 %** | 118.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CIP 3E7L0W Rapido | 294.00 € | **294.50 €** | 8.0 % | **8.1 %** | 294.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| WHIRLPOOL WI 7020 P | 331.00 € | **331.50 €** | 8.0 % | **8.1 %** | 331.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Telegant 72 Protect | 27.00 € | **27.50 €** | 5.2 % | **7.2 %** | 27.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 210G | 453.00 € | **453.50 €** | 5.0 % | **5.1 %** | 453.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Organic fragrance Peppermint | 16.00 € | **16.50 €** | 7.2 % | **10.6 %** | 16.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA True X Bar 50A / SR-X50A BLACK | 708.00 € | **708.50 €** | 9.2 % | **9.3 %** | 708.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| G21 nůž Damascus Premium 13 cm | 42.00 € | **42.50 €** | 7.3 % | **8.6 %** | 42.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal CY851130 | 197.00 € | **197.50 €** | 9.8 % | **10.1 %** | 197.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO42327PC | 101.00 € | **101.50 €** | 8.0 % | **8.5 %** | 101.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42329PC | 114.00 € | **114.50 €** | 6.6 % | **7.1 %** | 114.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 808/05 | 59.00 € | **59.50 €** | 6.9 % | **7.8 %** | 59.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Pizzeria 927/01, černá | 205.00 € | **205.50 €** | 7.3 % | **7.6 %** | 205.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42602S | 39.00 € | **39.50 €** | 6.8 % | **8.2 %** | 39.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver VS5910X | 278.50 € | **279.00 €** | 8.3 % | **8.5 %** | 278.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje SIH1800BLT | 19.00 € | **19.50 €** | 9.6 % | **12.5 %** | 19.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP ENVY 6520e AiO (714N9B) | 102.00 € | **102.50 €** | 9.2 % | **9.7 %** | 102.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO91135F | 326.00 € | **326.50 €** | 9.5 % | **9.7 %** | 326.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool C WD 94M WBS CZ | 674.00 € | **674.50 €** | 9.0 % | **9.1 %** | 674.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WP B9X WBS EE | 703.00 € | **703.50 €** | 9.8 % | **9.9 %** | 703.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE ECT601FM | 136.00 € | **136.50 €** | 8.1 % | **8.5 %** | 136.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer kuchyňský robot ZKR2010 | 176.00 € | **176.50 €** | 8.4 % | **8.7 %** | 176.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.00 € | **41.50 €** | 7.0 % | **8.3 %** | 41.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 8 | 40.00 € | **40.50 €** | 6.8 % | **8.2 %** | 40.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 8 | 40.00 € | **40.50 €** | 6.8 % | **8.2 %** | 40.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 9 | 40.00 € | **40.50 €** | 6.8 % | **8.2 %** | 40.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5X/1 | 49.00 € | **49.50 €** | 9.0 % | **10.1 %** | 49.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EWS6526WC | 312.00 € | **312.50 €** | 7.9 % | **8.1 %** | 312.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Concept IDV5160wh | 354.00 € | **354.50 €** | 6.9 % | **7.0 %** | 354.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Capri Citrusovač 413/CA | 67.00 € | **67.50 €** | 7.4 % | **8.2 %** | 67.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rixon Soundplates | 42.00 € | **42.50 €** | 8.2 % | **9.5 %** | 42.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Guatemala Bio Fairtrade 500 g zrno | 12.00 € | **12.50 €** | 10.0 % | **14.5 %** | 12.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FFC025X | 26.00 € | **26.50 €** | 9.7 % | **11.8 %** | 26.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung The Frame QE43LS03H | 781.00 € | **781.50 €** | 8.6 % | **8.6 %** | 781.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RR8589CE | 398.00 € | **398.50 €** | 6.0 % | **6.1 %** | 398.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA Cook BBQ150 | 53.00 € | **53.50 €** | 9.5 % | **10.5 %** | 53.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.00 € | **20.50 €** | 38.4 % | **41.8 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer horkovzdušná fritéza ZAF9230 | 173.00 € | **173.50 €** | 8.5 % | **8.8 %** | 173.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Page Profi 100 | 29.00 € | **29.50 €** | 8.0 % | **9.9 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO344DH | 148.00 € | **148.50 €** | 8.7 % | **9.0 %** | 148.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO754K | 36.00 € | **36.50 €** | 8.5 % | **10.0 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO7059S | 36.00 € | **36.50 €** | 8.5 % | **10.0 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| PS5 Laysara: Summit Kingdom Collector's | 64.00 € | **64.50 €** | 8.4 % | **9.2 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Café al’Italienne 1 kg zrno | 21.00 € | **21.50 €** | 5.1 % | **7.6 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 90A1 | 129.00 € | **129.50 €** | 7.1 % | **7.5 %** | 129.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO228SV | 120.50 € | **121.00 €** | 8.8 % | **9.2 %** | 121.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 302.00 € | **302.50 €** | 6.5 % | **6.7 %** | 302.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Creality K2 Pro Combo | 780.00 € | **780.50 €** | 14.1 % | **14.2 %** | 780.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 124.00 € | **124.50 €** | 13.4 % | **13.8 %** | 124.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.8 % | **8.8 %** | 56.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 17.50 € | **18.00 €** | 7.2 % | **10.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Karta microSD Lexar 3.0 s kapacitou 64 GB | 18.00 € | **18.50 €** | 6.7 % | **9.7 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.00 € | **22.50 €** | 6.9 % | **9.3 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA XDA-AMP5400RK | 1381.50 € | **1381.90 €** | 9.3 % | **9.3 %** | 1381.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 210A | 213.50 € | **213.90 €** | 5.9 % | **6.1 %** | 213.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Chamber Line 30 | 175.50 € | **175.90 €** | 7.6 % | **7.8 %** | 175.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-AW392 WHITE 1 karton | 204.50 € | **204.90 €** | 9.1 % | **9.3 %** | 204.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1018900 Pákový kávovar | 122.50 € | **122.90 €** | 6.4 % | **6.7 %** | 122.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9286IB | 247.50 € | **247.90 €** | 5.6 % | **5.8 %** | 247.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal OptiGrill GC7P0810 | 98.50 € | **98.90 €** | 9.0 % | **9.4 %** | 98.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal EY8328E0 | 118.50 € | **118.90 €** | 5.1 % | **5.5 %** | 118.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Sous Vide SV06 | 132.50 € | **132.90 €** | 8.4 % | **8.7 %** | 132.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT65421VC | 127.50 € | **127.90 €** | 8.2 % | **8.5 %** | 127.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta 3v1 RH5A32E0 | 117.50 € | **117.90 €** | 7.9 % | **8.3 %** | 117.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung VG-SCFC55SGMXC | 118.50 € | **118.90 €** | 5.4 % | **5.8 %** | 118.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BROTHER HL-L1232W | 116.50 € | **116.90 €** | 8.7 % | **9.1 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191T | 67.50 € | **67.90 €** | 6.2 % | **6.9 %** | 67.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.50 € | **114.90 €** | 10.0 % | **10.4 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 112.50 € | **112.90 €** | 10.3 % | **10.7 %** | 112.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 13.50 € | **13.90 €** | 4.6 % | **7.7 %** | 13.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal J1641474 | 11.50 € | **11.90 €** | 5.3 % | **9.0 %** | 11.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP Wireless Mouse 220 Black | 13.50 € | **13.90 €** | 10.5 % | **13.8 %** | 13.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Status STA 177159 | 10.50 € | **10.90 €** | 5.9 % | **9.9 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi BL0401 Cestovní silikonová konvice | 14.50 € | **14.90 €** | 6.8 % | **9.7 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi PE1600 | 15.50 € | **15.90 €** | 5.3 % | **8.0 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED FIXORB2-WH Nabíjecí USB-C adaptér | 15.50 € | **15.90 €** | 6.9 % | **9.6 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky C10 (biele) | 12.50 € | **12.90 €** | 7.8 % | **11.2 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 18.50 € | **18.90 €** | 4.2 % | **6.4 %** | 18.65 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Pegasus 150 Solid Slim BLACK | 32.50 € | **32.90 €** | 9.9 % | **11.3 %** | 32.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal DN853BE0 | 52.50 € | **52.90 €** | 5.7 % | **6.5 %** | 52.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Philips SQM3642/00 TV držák na zeď | 20.50 € | **20.90 €** | 7.8 % | **9.9 %** | 20.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Classic Siena 180 Easy | 26.50 € | **26.90 €** | 9.5 % | **11.2 %** | 26.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.50 € | **33.90 €** | 6.5 % | **7.7 %** | 33.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Redmi Buds 8 Lite Black | 19.50 € | **19.90 €** | 6.8 % | **8.9 %** | 19.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26800-56/RH | 25.50 € | **25.90 €** | 5.2 % | **6.9 %** | 25.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 35.50 € | **35.90 €** | 6.0 % | **7.1 %** | 35.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9215AV | 32.50 € | **32.90 €** | 9.0 % | **10.3 %** | 32.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.2 % | **12.7 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nutribullet NB614.DG | 54.50 € | **54.90 €** | 8.1 % | **8.9 %** | 54.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mio Smartbox IV | 30.50 € | **30.90 €** | 6.4 % | **7.8 %** | 30.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-PE145 | 39.50 € | **39.90 €** | 7.0 % | **8.1 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3T1-3ST | 30.50 € | **30.90 €** | 7.2 % | **8.6 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete SteamStyle 4301, violet | 32.50 € | **32.90 €** | 8.6 % | **9.9 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete SteamStyle 4301/02, coral | 32.50 € | **32.90 €** | 8.6 % | **9.9 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Vintage 2868/05, modrá | 39.50 € | **39.90 €** | 8.3 % | **9.4 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FSR2002 | 16.50 € | **16.90 €** | 9.2 % | **11.8 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 16.50 € | **16.90 €** | 7.7 % | **10.4 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mixér G21 VitalStick 800 W, Black | 45.50 € | **45.90 €** | 6.6 % | **7.6 %** | 45.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mixér G21 VitalStick 800 W, Red/Black | 45.50 € | **45.90 €** | 6.6 % | **7.6 %** | 45.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.50 € | **17.90 €** | 10.7 % | **13.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 363A | 580.50 € | **580.90 €** | 6.2 % | **6.3 %** | 580.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool W7F HP33 A | 338.50 € | **338.90 €** | 7.0 % | **7.1 %** | 338.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH98A9WO | 279.50 € | **279.90 €** | 7.7 % | **7.9 %** | 279.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK620AAXL4 | 616.50 € | **616.90 €** | 5.9 % | **6.0 %** | 616.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 507.50 € | **507.90 €** | 7.0 % | **7.1 %** | 507.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rooma Espresso A6 bílá | 465.50 € | **465.90 €** | 6.0 % | **6.1 %** | 465.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko EnergySpin BM3WFU3721WBW | 324.50 € | **324.90 €** | 6.9 % | **7.1 %** | 324.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 365.50 € | **365.90 €** | 9.2 % | **9.3 %** | 365.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GV520E15 | 286.50 € | **286.90 €** | 6.0 % | **6.2 %** | 286.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool NoFrost WHK 22414 XBR8EA | 877.50 € | **877.90 €** | 9.9 % | **9.9 %** | 877.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool FFB 8469 BV EE | 344.50 € | **344.90 €** | 6.6 % | **6.7 %** | 344.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool C WD 84M WBS CZ | 637.50 € | **637.90 €** | 6.3 % | **6.3 %** | 637.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6412 CB | 269.50 € | **269.90 €** | 5.7 % | **5.8 %** | 269.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Sensazione černý | 334.50 € | **334.90 €** | 6.8 % | **6.9 %** | 334.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GEC5C41SG | 313.50 € | **313.90 €** | 7.9 % | **8.0 %** | 313.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA MV 647 AW | 335.50 € | **335.90 €** | 6.9 % | **7.1 %** | 335.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 897.50 € | **897.90 €** | 14.1 % | **14.1 %** | 897.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 7.30 € | **7.60 €** | 45.5 % | **51.4 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 8.80 € | **9.10 €** | 19.6 % | **23.7 %** | 9.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 498.90 € | **499.00 €** | 8.2 % | **8.2 %** | 499.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDFN26540XP | 441.90 € | **442.00 €** | 5.3 % | **5.3 %** | 442.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDIN38646D | 495.90 € | **496.00 €** | 7.0 % | **7.0 %** | 496.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GI6432BSCWF | 318.90 € | **319.00 €** | 5.2 % | **5.2 %** | 319.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxlife MXBH-01 černé | 18.90 € | **19.00 €** | 9.8 % | **10.4 %** | 18.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Filter Hepa 13 for AP100 | 47.90 € | **48.00 €** | 9.6 % | **9.8 %** | 47.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| MAXXO VC 1800 | 23.90 € | **24.00 €** | 6.1 % | **6.6 %** | 23.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 29.90 € | **30.00 €** | 6.1 % | **6.5 %** | 29.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Stěrka XL40 cm s teles.tyčí | 24.90 € | **25.00 €** | 8.8 % | **9.3 %** | 24.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FFC026X | 39.90 € | **40.00 €** | 6.5 % | **6.8 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Albrecht DR 54 | 62.90 € | **63.00 €** | 7.8 % | **8.0 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko Mezikus PCSKM | 57.90 € | **58.00 €** | 6.2 % | **6.4 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko Mezikus PCSKW | 57.90 € | **58.00 €** | 6.2 % | **6.4 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 51.90 € | **52.00 €** | 5.8 % | **6.0 %** | 51.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.50 € | **3.60 €** | 48.2 % | **52.4 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-50245 | 12.90 € | **13.00 €** | 9.6 % | **10.4 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **14.00 €** | 10.1 % | **10.9 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 06A1 | 102.90 € | **103.00 €** | 5.2 % | **5.3 %** | 102.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 44GW | 198.90 € | **199.00 €** | 6.2 % | **6.3 %** | 198.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente DigiChef+ kuchyňský robot | 124.90 € | **125.00 €** | 7.3 % | **7.4 %** | 124.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Midland BTR1 Advanced, Single | 187.90 € | **188.00 €** | 7.2 % | **7.3 %** | 188.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZMM9802B | 128.90 € | **129.00 €** | 7.9 % | **8.0 %** | 129.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT76325VW | 166.90 € | **167.00 €** | 8.6 % | **8.7 %** | 167.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roadstar DJ-390 BT Bluetooth speaker | 112.90 € | **113.00 €** | 8.7 % | **8.8 %** | 113.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Armodd Prime 3 GPS Black - 9148 | 88.90 € | **89.00 €** | 5.4 % | **5.5 %** | 89.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BLUETOUCH Elektrický vysokozdvižný vozík | 248.90 € | **249.00 €** | 8.8 % | **8.9 %** | 249.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6401 PSB | 178.90 € | **179.00 €** | 8.9 % | **9.0 %** | 179.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 228.90 € | **229.00 €** | 8.0 % | **8.0 %** | 228.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1815)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 7402.00 € | **6758.90 €** | 15.0 % | **5.0 %** | 6503.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3641.00 € | **3349.50 €** | 15.0 % | **5.8 %** | 3349.70 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **2909.90 €** | 15.0 % | **6.0 %** | 2910.00 € | stávame sa najlacnejší |
| Laserový gravír xTool S1 40 W 2 v 1 – súprava „všetk... | 2783.00 € | **2541.00 €** | 15.0 % | **5.0 %** | 2254.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2634.00 €** | 15.0 % | **5.5 %** | 2634.19 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2573.90 € | **2350.00 €** | 15.0 % | **5.0 %** | 1999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S99H | 3613.00 € | **3448.90 €** | 10.0 % | **5.0 %** | 3359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE65S99H | 2924.90 € | **2791.90 €** | 10.0 % | **5.0 %** | 2750.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2326.50 € | **2198.90 €** | 15.0 % | **8.7 %** | 2199.00 € | stávame sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2649.90 € | **2529.50 €** | 10.0 % | **5.0 %** | 1726.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1490.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1600.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria FOSSIBOT FB3840 s kapacitou 3840 Wh | 1267.90 € | **1157.90 €** | 15.0 % | **5.0 %** | 1150.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr Fold 16+512GB Blue | 2190.50 € | **2090.90 €** | 10.0 % | **5.0 %** | 1395.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S85H | 2193.50 € | **2093.90 €** | 10.0 % | **5.0 %** | 1999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1545.50 € | **1448.90 €** | 15.0 % | **7.8 %** | 1448.93 € | stávame sa najlacnejší |
| Veslařský trenažér HMS Premium ZW1600 | 762.90 € | **671.90 €** | 137732.0 % | **121291.1 %** | 672.00 € | stávame sa najlacnejší |
| Samsung The Frame Pro QE65LS03HW | 1823.90 € | **1740.90 €** | 10.0 % | **5.0 %** | 1691.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro Max 512GB Deep Blue | 1721.90 € | **1643.90 €** | 10.0 % | **5.0 %** | 1425.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 901.50 € | **823.50 €** | 15.0 % | **5.0 %** | 660.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro Max 512GB Orange | 1721.90 € | **1643.90 €** | 10.0 % | **5.0 %** | 1510.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 854.50 € | **780.50 €** | 15.0 % | **5.0 %** | 619.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1280.00 €** | 15.0 % | **9.0 %** | 1280.29 € | stávame sa najlacnejší |
| Xiaomi 17 Ultra 16/512GB Black | 1522.90 € | **1453.90 €** | 10.0 % | **5.0 %** | 1099.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE75LS03HW | 2748.90 € | **2683.50 €** | 12.7 % | **10.0 %** | 2683.90 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 954.00 € | **889.90 €** | 15.0 % | **7.3 %** | 890.00 € | stávame sa najlacnejší |
| Samsung OLED QE65S85H | 1370.90 € | **1308.50 €** | 10.0 % | **5.0 %** | 1271.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr 70 Ultra 16+512GB Blue | 1358.00 € | **1296.50 €** | 10.0 % | **5.0 %** | 1219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 707.50 € | **646.50 €** | 15.0 % | **5.1 %** | 520.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.90 €** | 15.0 % | **5.4 %** | 670.00 € | stávame sa najlacnejší |
| 3D tlačiareň QiDi Q2 Combo | 684.50 € | **625.00 €** | 15.0 % | **5.0 %** | 559.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo Edge 2 Pro White | 1275.90 € | **1217.90 €** | 10.0 % | **5.0 %** | 818.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 882.90 € | **826.00 €** | 15.0 % | **7.6 %** | 826.35 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 151.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 188.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 355.50 € | **303.50 €** | 72156.1 % | **61587.0 %** | 303.75 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ANCEL DS600 BT – profesionálny diagnostický skener OBD2 | 586.50 € | **535.50 €** | 15.0 % | **5.0 %** | 529.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Carbon | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 776.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Olive | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 839.50 € | **789.90 €** | 15.0 % | **8.2 %** | 790.00 € | stávame sa najlacnejší |
| Samsung Micro RGB MRE55R85H | 1087.50 € | **1037.90 €** | 10.0 % | **5.0 %** | 968.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EIS8959 | 1062.50 € | **1014.50 €** | 10.0 % | **5.0 %** | 967.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 Ultra 16/512GB Black | 1035.50 € | **988.50 €** | 10.0 % | **5.0 %** | 899.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 416.00 € | **369.90 €** | 75058.1 % | **66729.3 %** | 370.00 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 104.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nano projektor JMGO N1S | 496.50 € | **453.50 €** | 15.0 % | **5.0 %** | 384.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 460.00 € | **417.50 €** | 24.3 % | **12.8 %** | 417.60 € | stávame sa najlacnejší |
| POCO F9 Ultra 12/256GB Black | 927.90 € | **885.50 €** | 10.0 % | **5.0 %** | 799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 85.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Blue | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 574.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Red | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 627.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **728.90 €** | 15.0 % | **9.2 %** | 729.00 € | stávame sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 782.50 € | **744.00 €** | 15.0 % | **9.4 %** | 744.47 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max robotický s mopom, výk... | 188.50 € | **150.50 €** | 31.9 % | **5.3 %** | 104.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA7CE19S | 820.50 € | **783.50 €** | 10.0 % | **5.1 %** | 758.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Black | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Green | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB White | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus T2 smart bike trainer | 625.90 € | **589.90 €** | 15.0 % | **8.4 %** | 590.00 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 415.00 € | **379.50 €** | 15.0 % | **5.1 %** | 349.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 805.50 € | **770.00 €** | 15.0 % | **9.9 %** | 770.40 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K1C 2025 | 401.90 € | **366.90 €** | 15.0 % | **5.0 %** | 339.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare VITURE XR Luma Pro (veľkosť L) | 407.50 € | **372.50 €** | 15.0 % | **5.1 %** | 355.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA7CE18S1 | 752.50 € | **718.00 €** | 10.1 % | **5.0 %** | 639.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 394.00 € | **359.90 €** | 15.0 % | **5.0 %** | 322.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **368.90 €** | 15.0 % | **5.3 %** | 369.00 € | stávame sa najlacnejší |
| 3D tlačiareň CREALITY SparkX i7 Combo | 391.50 € | **357.90 €** | 15.0 % | **5.1 %** | 318.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **461.00 €** | 15.0 % | **7.2 %** | 461.19 € | stávame sa najlacnejší |
| Electrolux EW8F5412SAC | 709.90 € | **677.90 €** | 10.0 % | **5.1 %** | 665.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425 KIT 4MPx, vonkajšie, ... | 144.90 € | **113.90 €** | 33.7 % | **5.1 %** | 100.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Plus | 354.00 € | **323.50 €** | 15.0 % | **5.1 %** | 288.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Blue | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 441.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Wood | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 481.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač MOVA Z200 Stick | 345.50 € | **315.50 €** | 15.0 % | **5.0 %** | 221.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 151.90 € | **122.00 €** | 43.8 % | **15.5 %** | 122.43 € | stávame sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 796.90 € | **767.00 €** | 10.0 % | **5.9 %** | 767.50 € | stávame sa najlacnejší |
| Projektor Aurzen Eazze D1 Max | 346.00 € | **316.50 €** | 15.0 % | **5.2 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 313.90 € | **284.90 €** | 26.3 % | **14.7 %** | 284.96 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 130.00 € | **103.00 €** | 32.5 % | **5.0 %** | 102.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 914.50 € | **888.00 €** | 10.0 % | **6.9 %** | 888.50 € | stávame sa najlacnejší |
| Electrolux EOC6H76X | 572.90 € | **546.90 €** | 10.0 % | **5.0 %** | 460.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS5B70CLI | 569.50 € | **543.50 €** | 10.0 % | **5.0 %** | 470.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot ULTENIC MX50 | 445.90 € | **419.90 €** | 15.0 % | **8.3 %** | 420.00 € | stávame sa najlacnejší |
| Okuliare RayNeo Air 4 Pro AR | 325.90 € | **300.00 €** | 15.0 % | **5.9 %** | 300.42 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.00 €** | 49.9 % | **19.0 %** | 98.50 € | stávame sa najlacnejší |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 551.00 € | **525.90 €** | 10.0 % | **5.0 %** | 447.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.90 €** | 15.0 % | **9.8 %** | 539.00 € | stávame sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 556.90 € | **531.90 €** | 10.0 % | **5.1 %** | 467.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 433.00 € | **408.50 €** | 15.0 % | **8.5 %** | 408.69 € | stávame sa najlacnejší |
| LENOVO LEGION TAB (ZAEF0021CZ) | 530.90 € | **506.50 €** | 10.1 % | **5.0 %** | 457.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BDIN38640D | 532.50 € | **508.50 €** | 10.0 % | **5.1 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE NRS8182KX | 525.90 € | **501.90 €** | 10.0 % | **5.0 %** | 494.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **402.00 €** | 15.0 % | **8.5 %** | 402.29 € | stávame sa najlacnejší |
| Electrolux LKR64022AX | 515.50 € | **491.90 €** | 10.1 % | **5.0 %** | 449.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **64.50 €** | 43.8 % | **5.5 %** | 64.90 € | stávame sa najlacnejší |
| Priemyselná infračervená termokamera Habotest HT820 | 273.90 € | **250.50 €** | 15.0 % | **5.2 %** | 211.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **399.50 €** | 15.1 % | **8.7 %** | 399.83 € | stávame sa najlacnejší |
| YAMAHA TT-S303 BLACK | 511.50 € | **488.50 €** | 10.0 % | **5.1 %** | 439.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 506.50 € | **483.50 €** | 10.1 % | **5.1 %** | 477.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Acer Aspire Lite 15 (NX.DRPEC.001) | 559.90 € | **537.00 €** | 10.0 % | **5.5 %** | 537.50 € | stávame sa najlacnejší |
| LG GBBSJ21DPY | 497.50 € | **474.90 €** | 10.1 % | **5.1 %** | 398.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 264.50 € | **241.90 €** | 15.0 % | **5.2 %** | 200.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R619EES5 | 493.50 € | **471.00 €** | 10.0 % | **5.0 %** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 79.50 € | **57.00 €** | 59.1 % | **14.1 %** | 57.50 € | stávame sa najlacnejší |
| Gorenje GECS6C70WPA | 499.90 € | **477.50 €** | 10.0 % | **5.1 %** | 415.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38441P | 484.50 € | **462.50 €** | 10.1 % | **5.1 %** | 415.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 484.90 € | **462.90 €** | 10.0 % | **5.0 %** | 439.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 486.90 € | **464.90 €** | 10.0 % | **5.1 %** | 442.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RP619EEW5 | 482.50 € | **460.50 €** | 10.1 % | **5.0 %** | 444.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BRS 7N3BX-S | 482.90 € | **460.90 €** | 10.1 % | **5.1 %** | 449.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 69.00 € | **47.00 €** | 58.9 % | **8.2 %** | 47.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 92.00 € | **70.00 €** | 43.6 % | **9.3 %** | 70.50 € | stávame sa najlacnejší |
| Reproduktory Edifier S355DB 2.1 (hnedé) | 379.90 € | **358.00 €** | 15.0 % | **8.4 %** | 358.40 € | stávame sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 465.50 € | **444.00 €** | 10.1 % | **5.0 %** | 380.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A7 bílá | 560.50 € | **539.00 €** | 10.0 % | **5.8 %** | 539.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C610 KIT 3MPx, vonkajšia, IP PTZ... | 103.90 € | **82.50 €** | 32.6 % | **5.3 %** | 79.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 465.50 € | **444.50 €** | 10.1 % | **5.1 %** | 327.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/128GB Green (71768) | 458.90 € | **437.90 €** | 10.1 % | **5.0 %** | 333.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZTE Nubia Air Pro 5G bílý | 459.50 € | **438.50 €** | 10.1 % | **5.1 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3WFU4841MCC | 461.50 € | **440.50 €** | 10.0 % | **5.0 %** | 432.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **657.50 €** | 15.0 % | **11.4 %** | 657.51 € | stávame sa najlacnejší |
| MINI-PC Minis Fórum UM790 Pro Ryzen 9 7940HS barebone | 477.00 € | **456.00 €** | 15.0 % | **9.9 %** | 456.23 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 557.50 € | **536.90 €** | 10.0 % | **6.0 %** | 537.00 € | stávame sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 315.50 € | **295.00 €** | 15.0 % | **7.5 %** | 295.04 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 98.50 € | **78.00 €** | 44.0 % | **14.0 %** | 78.50 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 548.50 € | **528.00 €** | 10.0 % | **5.9 %** | 528.50 € | stávame sa najlacnejší |
| LG FA2S8V3GN3W | 444.90 € | **424.50 €** | 10.1 % | **5.0 %** | 358.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5RCNA416HXBR | 456.90 € | **436.50 €** | 10.0 % | **5.1 %** | 436.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Router GL.iNet Puli AX 5G NR | 522.90 € | **502.50 €** | 15.0 % | **10.5 %** | 502.74 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 64.00 € | **43.90 €** | 53.9 % | **5.5 %** | 44.00 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 439.50 € | **419.50 €** | 10.0 % | **5.0 %** | 368.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620EABK4 | 445.50 € | **425.50 €** | 10.1 % | **5.1 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 9N3B-S | 434.90 € | **414.90 €** | 10.1 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 426.00 € | **406.00 €** | 15.0 % | **9.6 %** | 406.19 € | stávame sa najlacnejší |
| Guzzanti GZ 340A | 431.90 € | **412.00 €** | 10.1 % | **5.0 %** | 383.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 451.90 € | **432.00 €** | 15.0 % | **9.9 %** | 432.20 € | stávame sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 693.90 € | **674.00 €** | 10.1 % | **6.9 %** | 674.50 € | stávame sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 431.50 € | **411.90 €** | 10.0 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 478.50 € | **458.90 €** | 15.0 % | **10.3 %** | 459.00 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 422.50 € | **403.00 €** | 10.1 % | **5.0 %** | 403.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **68.50 €** | 43.8 % | **12.0 %** | 68.90 € | stávame sa najlacnejší |
| Gorenje NRK620EAW4 | 414.90 € | **395.90 €** | 10.1 % | **5.0 %** | 377.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **192.00 €** | 15.1 % | **5.0 %** | 173.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 572.50 € | **554.00 €** | 15.0 % | **11.3 %** | 554.45 € | stávame sa najlacnejší |
| Beko HII64600AFT | 390.50 € | **372.50 €** | 10.1 % | **5.0 %** | 284.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 BLACK | 396.90 € | **378.90 €** | 10.0 % | **5.1 %** | 319.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS642D90X | 394.90 € | **376.90 €** | 10.1 % | **5.1 %** | 323.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Mini LED UE43M70H | 395.50 € | **377.50 €** | 10.0 % | **5.0 %** | 325.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fén MOVA Aero C v ružovej farbe | 206.90 € | **188.90 €** | 15.1 % | **5.1 %** | 137.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BM3WFU3941WBW | 391.50 € | **373.50 €** | 10.1 % | **5.0 %** | 358.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WDSI96A | 391.50 € | **373.50 €** | 10.1 % | **5.0 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 396.90 € | **378.90 €** | 10.1 % | **5.1 %** | 373.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 67.50 € | **49.50 €** | 44.0 % | **5.6 %** | 49.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 24 GS2401 | 505.50 € | **487.90 €** | 15.0 % | **11.0 %** | 487.95 € | stávame sa najlacnejší |
| Batéria FOSSIBOT FBP1200-B s kapacitou 1985 Wh (zelená) | 537.50 € | **519.90 €** | 15.0 % | **11.2 %** | 520.00 € | stávame sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Thomas Aqua + Pet & Family | 381.50 € | **364.00 €** | 10.1 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje DE69CS | 516.50 € | **499.00 €** | 10.1 % | **6.3 %** | 499.50 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 384.90 € | **367.50 €** | 10.0 % | **5.0 %** | 363.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 547.00 € | **529.90 €** | 15.0 % | **11.4 %** | 529.95 € | stávame sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 366.50 € | **349.50 €** | 10.1 % | **5.0 %** | 324.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (červený) | 292.50 € | **275.50 €** | 15.0 % | **8.3 %** | 275.70 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 387.00 € | **370.00 €** | 15.0 % | **9.9 %** | 370.32 € | stávame sa najlacnejší |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 137.90 € | **121.00 €** | 27244.8 % | **23893.7 %** | 121.03 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **281.90 €** | 15.0 % | **8.6 %** | 282.00 € | stávame sa najlacnejší |
| BEKO BBIR17300BCS | 358.50 € | **342.00 €** | 10.1 % | **5.0 %** | 254.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Aurzen Eazze D1G | 196.00 € | **179.50 €** | 14.9 % | **5.2 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS620C10S | 354.50 € | **338.00 €** | 10.1 % | **5.0 %** | 334.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kalibrátor procesov Uni-T UT705 | 289.00 € | **272.50 €** | 15.0 % | **8.4 %** | 272.68 € | stávame sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.50 €** | 14.9 % | **9.7 %** | 346.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C260 IP, 8MPx, WiFi, prísvit | 79.90 € | **63.50 €** | 32.6 % | **5.4 %** | 55.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás MERACH MR-T25B2 | 372.90 € | **356.50 €** | 15.1 % | **10.0 %** | 356.52 € | stávame sa najlacnejší |
| ETA Storio II 2043 90030 černá | 347.90 € | **331.90 €** | 10.1 % | **5.0 %** | 267.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 596.50 € | **580.50 €** | 7.9 % | **5.1 %** | 530.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 5G 8/256GB ZAFM0293CZ | 354.90 € | **338.90 €** | 10.1 % | **5.1 %** | 312.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C411 KIT 3MPx, outdoor, IP, WiFi... | 78.50 € | **62.50 €** | 32.8 % | **5.7 %** | 45.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 309.50 € | **293.50 €** | 10.8 % | **5.1 %** | 280.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.50 € | **62.50 €** | 32.8 % | **5.7 %** | 57.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 235 | 459.90 € | **444.00 €** | 10.0 % | **6.2 %** | 444.50 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **36.90 €** | 50.5 % | **5.7 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 113.50 € | **97.90 €** | 43.9 % | **24.1 %** | 98.00 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 347.90 € | **332.50 €** | 10.0 % | **5.2 %** | 321.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool OMSR58CU1SX | 344.90 € | **329.50 €** | 10.0 % | **5.1 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWSC 833 SB | 331.50 € | **316.50 €** | 10.1 % | **5.2 %** | 254.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 46.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO B5RCNA406HXB3 | 536.90 € | **521.90 €** | 10.0 % | **7.0 %** | 522.00 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 540.90 € | **525.90 €** | 10.0 % | **7.0 %** | 526.00 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 524.50 € | **509.90 €** | 10.1 % | **7.0 %** | 510.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 69.00 € | **54.50 €** | 58.9 % | **25.5 %** | 54.62 € | stávame sa najlacnejší |
| AMICA SIS 512 TCX | 498.50 € | **484.00 €** | 10.1 % | **6.9 %** | 484.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 46.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G57 Power 12+256GB Green | 305.50 € | **291.50 €** | 10.2 % | **5.1 %** | 228.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá VIAIM Nano+ AI s hlasovým záznamníkom (str... | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 104.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E10 | 313.90 € | **299.90 €** | 10.0 % | **5.1 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 303.90 € | **289.90 €** | 10.1 % | **5.1 %** | 274.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 376.90 € | **362.90 €** | 10.1 % | **6.0 %** | 363.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **216.50 €** | 15.0 % | **8.0 %** | 216.63 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 301.50 € | **287.90 €** | 10.0 % | **5.1 %** | 254.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fagor 4LVF-638ADIT | 483.50 € | **469.90 €** | 10.0 % | **6.9 %** | 470.00 € | stávame sa najlacnejší |
| Concept LA8383DS | 760.50 € | **747.00 €** | 10.0 % | **8.1 %** | 747.50 € | stávame sa najlacnejší |
| Whirlpool TDLR 6240S EU/N | 340.50 € | **327.00 €** | 10.1 % | **5.7 %** | 327.50 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 457.50 € | **444.00 €** | 10.1 % | **6.9 %** | 444.50 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 292.90 € | **279.50 €** | 10.1 % | **5.0 %** | 229.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY STRDH190 | 297.90 € | **284.50 €** | 10.1 % | **5.1 %** | 279.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-S202D SILVER | 284.50 € | **271.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CIO 225 EE/N | 286.50 € | **273.50 €** | 10.1 % | **5.1 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT385 Meracie zariadenie výkonu lasera | 156.50 € | **143.50 €** | 14.9 % | **5.3 %** | 141.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 335.00 € | **322.00 €** | 14.9 % | **10.5 %** | 322.01 € | stávame sa najlacnejší |
| Electrolux EOF3H50BK | 281.50 € | **268.90 €** | 10.1 % | **5.1 %** | 207.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOF3H40TH | 272.50 € | **259.90 €** | 10.1 % | **5.0 %** | 234.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CA modul IRDETO SMIT PROFI 2 | 146.00 € | **133.50 €** | 15.2 % | **5.3 %** | 123.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 307.50 € | **295.00 €** | 15.0 % | **10.3 %** | 295.08 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **295.00 €** | 15.0 % | **10.3 %** | 295.08 € | stávame sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.00 €** | 50.2 % | **38.0 %** | 141.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 81.50 € | **69.00 €** | 57.1 % | **33.0 %** | 69.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 81.50 € | **69.00 €** | 44.2 % | **22.1 %** | 69.50 € | stávame sa najlacnejší |
| Beko BU1154HCN | 281.90 € | **269.50 €** | 10.0 % | **5.2 %** | 265.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT100 PRO | 145.00 € | **132.90 €** | 14.8 % | **5.2 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica GWAS610DL | 255.50 € | **243.50 €** | 10.2 % | **5.0 %** | 215.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 114.50 € | **102.50 €** | 17.4 % | **5.1 %** | 84.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 134.00 € | **122.00 €** | 24.8 % | **13.6 %** | 122.09 € | stávame sa najlacnejší |
| AMICA MV 447 ADW | 424.90 € | **412.90 €** | 10.1 % | **6.9 %** | 413.00 € | stávame sa najlacnejší |
| Beko CF200EWN | 259.90 € | **248.00 €** | 10.1 % | **5.0 %** | 214.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 380.50 € | **368.90 €** | 10.1 % | **6.8 %** | 369.00 € | stávame sa najlacnejší |
| Gorenje NRK6182PW4 | 359.50 € | **347.90 €** | 10.1 % | **6.5 %** | 348.00 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 407.50 € | **395.90 €** | 10.1 % | **7.0 %** | 396.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S201 SILVER | 247.50 € | **235.90 €** | 10.2 % | **5.1 %** | 235.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 750 | 125.00 € | **113.50 €** | 20.3 % | **9.3 %** | 113.60 € | stávame sa najlacnejší |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 44.00 € | **32.50 €** | 58.8 % | **17.3 %** | 32.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 69.50 € | **58.00 €** | 43.9 % | **20.1 %** | 58.50 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 250.90 € | **239.50 €** | 10.0 % | **5.0 %** | 228.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S201 BLACK | 246.90 € | **235.50 €** | 10.1 % | **5.0 %** | 235.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 39.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **119.90 €** | 14.9 % | **5.2 %** | 111.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Arzopa A3C Pro 13,3" | 129.00 € | **117.90 €** | 14.9 % | **5.1 %** | 117.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 3-pack) | 233.50 € | **222.50 €** | 10.2 % | **5.0 %** | 97.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta Extreme Dry Compact DH5250F0 | 243.90 € | **232.90 €** | 10.1 % | **5.1 %** | 187.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Black | 241.50 € | **230.50 €** | 10.2 % | **5.2 %** | 196.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 216.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 59.50 € | **48.50 €** | 40.2 % | **14.3 %** | 48.90 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **143.50 €** | 15.1 % | **6.9 %** | 143.90 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 358.90 € | **348.00 €** | 10.1 % | **6.8 %** | 348.50 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 4/128GB (ZAFR0018CZ) | 228.50 € | **217.90 €** | 10.2 % | **5.1 %** | 188.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC772830 | 226.50 € | **215.90 €** | 10.2 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.90 €** | 14.9 % | **8.9 %** | 190.00 € | stávame sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1559.50 € | **1548.90 €** | 10.0 % | **9.3 %** | 1549.00 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **247.00 €** | 15.1 % | **10.4 %** | 247.03 € | stávame sa najlacnejší |
| Router GL.iNet Slate 7 | 208.00 € | **197.50 €** | 14.9 % | **9.1 %** | 197.60 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 47.50 € | **37.00 €** | 38.3 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 269.00 € | **258.50 €** | 15.6 % | **11.1 %** | 258.89 € | stávame sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.00 € | **135.50 €** | 15.3 % | **7.0 %** | 135.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 43.50 € | **33.00 €** | 54.0 % | **16.9 %** | 33.50 € | stávame sa najlacnejší |
| G3Ferrari G2017500 | 229.90 € | **219.50 €** | 10.0 % | **5.1 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 272.90 € | **262.50 €** | 9.3 % | **5.2 %** | 261.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 410090000 | 341.00 € | **330.90 €** | 10.0 % | **6.8 %** | 331.00 € | stávame sa najlacnejší |
| Amica DRP 6412 DW | 217.50 € | **207.50 €** | 10.2 % | **5.2 %** | 158.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIM12300X | 220.00 € | **210.00 €** | 10.0 % | **5.0 %** | 175.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **110.50 €** | 14.8 % | **5.3 %** | 83.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo C420S2 | 212.90 € | **202.90 €** | 10.2 % | **5.0 %** | 185.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 225.50 € | **215.50 €** | 10.1 % | **5.2 %** | 205.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X70 Soundbar | 612.90 € | **602.90 €** | 15.0 % | **13.1 %** | 602.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 37.90 € | **27.90 €** | 54.3 % | **13.6 %** | 28.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **181.00 €** | 15.0 % | **9.0 %** | 181.38 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 31.50 € | **21.50 €** | 54.7 % | **5.6 %** | 21.89 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 49.50 € | **39.50 €** | 47.9 % | **18.0 %** | 39.90 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 31.50 € | **21.50 €** | 59.3 % | **8.7 %** | 21.90 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 31.50 € | **21.50 €** | 59.3 % | **8.7 %** | 21.90 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 42.00 € | **32.00 €** | 41.9 % | **8.1 %** | 32.50 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 182.90 € | **173.00 €** | 15.1 % | **8.9 %** | 173.42 € | stávame sa najlacnejší |
| GORENJE FN4172CW | 340.50 € | **330.90 €** | 10.1 % | **7.0 %** | 331.00 € | stávame sa najlacnejší |
| Guzzanti GZ 110G | 331.50 € | **321.90 €** | 10.1 % | **6.9 %** | 322.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C310 vonkajšia, IP, FHD, WiFi, p... | 48.50 € | **38.90 €** | 31.3 % | **5.3 %** | 37.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 38.50 € | **28.90 €** | 57.5 % | **18.2 %** | 29.00 € | stávame sa najlacnejší |
| Habotest HT2302 Digitálny tester zemného odporu | 116.00 € | **106.50 €** | 14.9 % | **5.5 %** | 88.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 214.50 € | **205.00 €** | 15.0 % | **9.9 %** | 205.25 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **324.50 €** | 15.0 % | **11.7 %** | 324.84 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **415.00 €** | 15.0 % | **12.5 %** | 415.35 € | stávame sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **159.50 €** | 14.9 % | **8.5 %** | 159.90 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 98.50 € | **89.00 €** | 17.8 % | **6.4 %** | 89.47 € | stávame sa najlacnejší |
| Slúchadlá GARRETT MS-2 s 2-pinovým konektorom a vodo... | 123.90 € | **114.50 €** | 15.0 % | **6.3 %** | 114.67 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 31.00 € | **21.90 €** | 53.7 % | **8.6 %** | 22.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 195.50 € | **186.50 €** | 10.1 % | **5.1 %** | 172.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 83.50 € | **74.50 €** | 18.4 % | **5.6 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2011300 | 205.50 € | **196.50 €** | 10.1 % | **5.2 %** | 191.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux KGS64362XX | 200.50 € | **191.50 €** | 10.1 % | **5.1 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 50.90 € | **41.90 €** | 44.2 % | **18.7 %** | 42.00 € | stávame sa najlacnejší |
| Vákuovačka G21 Nefrit | 126.50 € | **117.50 €** | 18.0 % | **9.6 %** | 117.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 50.90 € | **42.00 €** | 44.2 % | **19.0 %** | 42.50 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **280.00 €** | 15.0 % | **11.4 %** | 280.44 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **37.90 €** | 28.9 % | **5.0 %** | 34.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 53.50 € | **44.90 €** | 43.6 % | **20.5 %** | 45.00 € | stávame sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 157.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 104.50 € | **95.90 €** | 43.9 % | **32.0 %** | 96.00 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 75.50 € | **66.90 €** | 18.8 % | **5.3 %** | 67.00 € | stávame sa najlacnejší |
| NEEWER SF120Q 120 cm parabolický softbox | 102.00 € | **93.50 €** | 14.8 % | **5.2 %** | 82.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 146.50 € | **138.00 €** | 11.5 % | **5.1 %** | 127.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC728D10 | 182.50 € | **174.00 €** | 10.2 % | **5.0 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **330.50 €** | 15.0 % | **12.1 %** | 330.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 40.50 € | **32.00 €** | 59.2 % | **25.8 %** | 32.37 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 33.00 € | **24.50 €** | 54.6 % | **14.8 %** | 24.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 47.50 € | **39.00 €** | 38.3 % | **13.5 %** | 39.50 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **174.00 €** | 15.0 % | **9.7 %** | 174.50 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 218.50 € | **210.00 €** | 10.2 % | **5.9 %** | 210.50 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **97.50 €** | 15.1 % | **6.0 %** | 97.90 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 498.00 € | **489.90 €** | 6.8 % | **5.1 %** | 462.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GV 9620E0 | 374.00 € | **365.90 €** | 10.0 % | **7.6 %** | 366.00 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 26.00 € | **17.90 €** | 54.3 % | **6.2 %** | 17.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 90.00 € | **81.90 €** | 17.4 % | **6.9 %** | 82.00 € | stávame sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64220SW | 172.50 € | **164.50 €** | 10.1 % | **5.0 %** | 122.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 177.50 € | **169.50 €** | 10.1 % | **5.1 %** | 141.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX U-Box J42 Nano/bez OS | 176.90 € | **168.90 €** | 10.1 % | **5.1 %** | 159.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48S | 166.50 € | **158.50 €** | 10.3 % | **5.0 %** | 149.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.90 € | **163.90 €** | 10.2 % | **5.1 %** | 163.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C113 IP, 3MPx, WiFi, prísvit, vn... | 38.90 € | **30.90 €** | 33.2 % | **5.8 %** | 30.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-830SB-BLK Century Signature | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 171.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **33.00 €** | 38.3 % | **11.3 %** | 33.03 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 41.00 € | **33.00 €** | 43.0 % | **15.1 %** | 33.03 € | stávame sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 49.90 € | **41.90 €** | 64.6 % | **38.2 %** | 42.00 € | stávame sa najlacnejší |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 145.00 € | **137.00 €** | 24.8 % | **18.0 %** | 137.11 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **27.00 €** | 37.3 % | **5.9 %** | 27.24 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 35.00 € | **27.00 €** | 43.9 % | **11.0 %** | 27.50 € | stávame sa najlacnejší |
| Naparovač odevov Neakasa Magic 1 | 88.00 € | **80.50 €** | 14.8 % | **5.0 %** | 70.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 29.00 € | **21.50 €** | 44.5 % | **7.1 %** | 20.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 175.50 € | **168.00 €** | 19.4 % | **14.3 %** | 168.24 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 306.50 € | **299.00 €** | 8.6 % | **5.9 %** | 299.27 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 306.50 € | **299.00 €** | 8.6 % | **5.9 %** | 299.27 € | stávame sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 357.00 € | **349.50 €** | 9.3 % | **7.0 %** | 349.86 € | stávame sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 107.50 € | **100.00 €** | 14.8 % | **6.8 %** | 100.42 € | stávame sa najlacnejší |
| TESLA AirCook & Grill QG800 WiFi | 164.90 € | **157.50 €** | 10.3 % | **5.3 %** | 114.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| XIAOMI Mesh System AX3000 NE (3-pack) | 165.90 € | **158.50 €** | 10.0 % | **5.1 %** | 116.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LHR3233CK | 160.90 € | **153.50 €** | 10.1 % | **5.0 %** | 128.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 46.90 € | **39.50 €** | 42.3 % | **19.8 %** | 39.69 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 37.90 € | **30.50 €** | 42.6 % | **14.7 %** | 30.90 € | stávame sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 119.00 € | **111.90 €** | 11.8 % | **5.1 %** | 100.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-L6 | 158.00 € | **150.90 €** | 10.0 % | **5.1 %** | 145.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 85.00 € | **77.90 €** | 15.0 % | **5.4 %** | 76.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 167.00 € | **159.90 €** | 11.0 % | **6.3 %** | 159.95 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 258.50 € | **251.50 €** | 8.0 % | **5.1 %** | 239.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HIC 64401 | 154.00 € | **147.00 €** | 10.0 % | **5.0 %** | 135.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8501A | 157.50 € | **150.50 €** | 10.0 % | **5.1 %** | 144.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA EliteCook K70 Ultra | 147.90 € | **140.90 €** | 10.2 % | **5.0 %** | 138.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT310 | 289.90 € | **282.90 €** | 15.0 % | **12.3 %** | 282.95 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 536.90 € | **529.90 €** | 8.0 % | **6.6 %** | 529.95 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 189.50 € | **182.50 €** | 15.1 % | **10.8 %** | 182.63 € | stávame sa najlacnejší |
| Ultimea Poseidon R3T Soundbar | 90.00 € | **83.00 €** | 14.9 % | **6.0 %** | 83.22 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **175.50 €** | 14.9 % | **10.5 %** | 175.78 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 123.50 € | **116.50 €** | 15.2 % | **8.7 %** | 116.89 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 180.50 € | **173.50 €** | 10.1 % | **5.8 %** | 173.90 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 91.50 € | **84.50 €** | 14.9 % | **6.1 %** | 84.90 € | stávame sa najlacnejší |
| DOMO DO244SV | 147.90 € | **141.00 €** | 10.2 % | **5.0 %** | 131.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 79.90 € | **73.00 €** | 15.0 % | **5.1 %** | 67.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 47.90 € | **41.00 €** | 49.9 % | **28.3 %** | 41.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 35.90 € | **29.00 €** | 44.5 % | **16.7 %** | 29.50 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 505.90 € | **499.00 €** | 10.0 % | **8.5 %** | 499.50 € | stávame sa najlacnejší |
| HP OfficeJet Pro 8132e AiO HP+ (40Q45B) | 149.50 € | **142.90 €** | 10.1 % | **5.2 %** | 97.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 Power 4+256GB Blue | 152.50 € | **145.90 €** | 10.0 % | **5.2 %** | 112.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO4931EA | 135.50 € | **128.90 €** | 10.4 % | **5.0 %** | 106.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC517DE0 | 139.50 € | **132.90 €** | 10.4 % | **5.2 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Pink | 147.50 € | **140.90 €** | 10.2 % | **5.2 %** | 132.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX TT600S | 78.50 € | **71.90 €** | 15.0 % | **5.3 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 35B1 | 143.00 € | **136.50 €** | 10.0 % | **5.0 %** | 126.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač DO TechniSat TechniControl | 25.00 € | **18.50 €** | 42.5 % | **5.5 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenciou | 77.00 € | **70.50 €** | 14.9 % | **5.2 %** | 67.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 25.50 € | **19.00 €** | 55.1 % | **15.5 %** | 19.24 € | stávame sa najlacnejší |
| Herný volant PXN-V900 Gen2 | 99.50 € | **93.00 €** | 14.8 % | **7.3 %** | 93.27 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 33.50 € | **27.00 €** | 36.0 % | **9.6 %** | 27.29 € | stávame sa najlacnejší |
| IPL epilátor ANLAN 02-ATMY52-0RE | 110.50 € | **104.00 €** | 15.0 % | **8.2 %** | 104.31 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 27.50 € | **21.00 €** | 51.2 % | **15.4 %** | 21.36 € | stávame sa najlacnejší |
| Tefal OptiGrill 2v1 GC773D30 | 167.00 € | **160.50 €** | 10.1 % | **5.8 %** | 160.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 22.50 € | **16.00 €** | 49.6 % | **6.4 %** | 16.49 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **26.00 €** | 59.9 % | **28.0 %** | 26.50 € | stávame sa najlacnejší |
| Xiaomi Watch S4 Silver | 144.90 € | **138.50 €** | 10.0 % | **5.1 %** | 116.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 83.90 € | **77.50 €** | 13.8 % | **5.1 %** | 74.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.90 € | **64.50 €** | 16.6 % | **6.1 %** | 64.69 € | stávame sa najlacnejší |
| GORENJE GS520E15W | 270.00 € | **263.90 €** | 10.0 % | **7.5 %** | 264.00 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 28.00 € | **21.90 €** | 38.4 % | **8.2 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 29.00 € | **22.90 €** | 37.2 % | **8.4 %** | 23.00 € | stávame sa najlacnejší |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 142.00 € | **135.90 €** | 10.0 % | **5.3 %** | 130.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| Lauben Low Sugar Rice Cooker 3000WT | 128.90 € | **122.90 €** | 10.2 % | **5.1 %** | 84.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO 4250 CLI | 137.50 € | **131.50 €** | 10.2 % | **5.4 %** | 103.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kodak Friendly Zoom FZ45 Black | 136.90 € | **130.90 €** | 10.0 % | **5.2 %** | 108.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná 12V / 45 Ah MHPower 6-DMF-45 GEL Tra... | 112.50 € | **106.50 €** | 11.0 % | **5.1 %** | 89.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1-Ss | 131.00 € | **125.00 €** | 10.0 % | **5.0 %** | 108.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálne nočné videnie FNIRSI NVS-40 so záznamom v ... | 69.50 € | **63.50 €** | 15.3 % | **5.4 %** | 54.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW501815 | 136.90 € | **130.90 €** | 10.1 % | **5.2 %** | 122.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 70.00 € | **64.00 €** | 15.0 % | **5.1 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 32.90 € | **26.90 €** | 29.0 % | **5.4 %** | 23.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 53.50 € | **47.50 €** | 18.5 % | **5.2 %** | 44.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava bezdrôtového zvončeka IMOU 2S | 73.50 € | **67.50 €** | 15.1 % | **5.7 %** | 66.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **21.90 €** | 59.0 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 99.50 € | **93.50 €** | 25.1 % | **17.5 %** | 93.61 € | stávame sa najlacnejší |
| Nabíjačka SkyRC Q200neo | 128.50 € | **122.50 €** | 15.2 % | **9.8 %** | 122.63 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 77.50 € | **71.50 €** | 15.3 % | **6.3 %** | 71.67 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 77.50 € | **71.50 €** | 15.4 % | **6.4 %** | 71.67 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 69.00 € | **63.00 €** | 25.0 % | **14.1 %** | 63.19 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.50 €** | 15.2 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 55.50 € | **49.50 €** | 38.5 % | **23.6 %** | 49.90 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 100W, 90... | 30.50 € | **24.50 €** | 48.0 % | **18.8 %** | 24.90 € | stávame sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.90 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **19.50 €** | 59.8 % | **22.2 %** | 19.90 € | stávame sa najlacnejší |
| TESLA PrimeSound HQ-995X | 182.50 € | **176.50 €** | 10.0 % | **6.4 %** | 176.90 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 74.00 € | **68.00 €** | 15.0 % | **5.7 %** | 68.47 € | stávame sa najlacnejší |
| Beko B3RCSO255S | 281.00 € | **275.00 €** | 10.0 % | **7.7 %** | 275.50 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **7.80 €** | 121.3 % | **27.9 %** | 7.90 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 67.50 € | **61.90 €** | 50.4 % | **38.0 %** | 62.00 € | stávame sa najlacnejší |
| Evolveo StrongVision Solar 4G | 129.50 € | **123.90 €** | 10.0 % | **5.3 %** | 103.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Soundbar JBL Bar 2.0 All-In-One (MK2) | 198.50 € | **192.90 €** | 8.2 % | **5.1 %** | 189.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 119.50 € | **113.90 €** | 10.5 % | **5.3 %** | 113.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot CSC062X | 162.50 € | **156.90 €** | 10.1 % | **6.4 %** | 157.00 € | stávame sa najlacnejší |
| Guzzanti GZ 161 | 248.50 € | **242.90 €** | 10.2 % | **7.7 %** | 243.00 € | stávame sa najlacnejší |
| Blesk GODOX V860III TTL pre Sony | 204.50 € | **198.90 €** | 15.0 % | **11.8 %** | 199.00 € | stávame sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 3-pack) | 120.50 € | **115.00 €** | 10.1 % | **5.0 %** | 94.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.00 €** | 46.8 % | **5.4 %** | 6.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera EMEET SmartCam S600L | 65.00 € | **59.50 €** | 14.7 % | **5.0 %** | 54.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 18.00 € | **12.50 €** | 53.9 % | **6.9 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 120.50 € | **115.00 €** | 23.4 % | **17.8 %** | 115.10 € | stávame sa najlacnejší |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 75.00 € | **69.50 €** | 14.8 % | **6.4 %** | 69.90 € | stávame sa najlacnejší |
| Športové okuliare ZEBLAZE Q01 Green AI | 67.50 € | **62.00 €** | 14.8 % | **5.4 %** | 62.49 € | stávame sa najlacnejší |
| Športové okuliare ZEBLAZE Q01 s umelou inteligenciou... | 67.50 € | **62.00 €** | 14.8 % | **5.4 %** | 62.49 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 34.50 € | **29.00 €** | 58.8 % | **33.5 %** | 29.50 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 27.50 € | **22.00 €** | 39.3 % | **11.4 %** | 22.50 € | stávame sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.90 € | **121.50 €** | 10.0 % | **5.4 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HNU61422B | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 93.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta HU4020F0 | 112.90 € | **107.50 €** | 10.4 % | **5.1 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 W | 115.90 € | **110.50 €** | 10.4 % | **5.2 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 B | 115.90 € | **110.50 €** | 10.4 % | **5.2 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 4+64GB Blue | 117.90 € | **112.50 €** | 10.3 % | **5.2 %** | 98.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 118.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 24.90 € | **19.50 €** | 59.2 % | **24.6 %** | 19.74 € | stávame sa najlacnejší |
| Gorenje RK14CPS4 | 289.90 € | **284.50 €** | 10.1 % | **8.0 %** | 284.60 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 63.00 € | **57.90 €** | 14.8 % | **5.5 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 21.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 43.00 € | **37.90 €** | 49.4 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 58.00 € | **52.90 €** | 16.7 % | **6.4 %** | 52.99 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 39.00 € | **33.90 €** | 41.4 % | **22.9 %** | 34.00 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.00 € | **113.90 €** | 10.1 % | **5.3 %** | 112.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS7550i White | 108.50 € | **103.50 €** | 10.4 % | **5.3 %** | 76.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RY6555WH | 106.50 € | **101.50 €** | 10.5 % | **5.3 %** | 87.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DMS-108/E) | 106.50 € | **101.50 €** | 10.3 % | **5.2 %** | 92.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal CY505EE0 | 110.50 € | **105.50 €** | 10.4 % | **5.4 %** | 97.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.50 € | **51.50 €** | 15.3 % | **5.1 %** | 44.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente G4 robotický vysavač | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 108.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-G4 | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 108.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG MS23K3555EK/EO | 118.50 € | **113.50 €** | 10.1 % | **5.4 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 105.50 € | **100.50 €** | 10.3 % | **5.1 %** | 96.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Puzdro Sunnylife AQX-20 pre Mavic 4 PRO & RC 2 c | 57.50 € | **52.50 €** | 15.3 % | **5.3 %** | 50.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42326PC | 114.50 € | **109.50 €** | 10.2 % | **5.4 %** | 108.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **10.50 €** | 56.3 % | **5.9 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **17.90 €** | 54.6 % | **20.9 %** | 18.00 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.50 €** | 37.8 % | **12.7 %** | 22.65 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.50 €** | 15.0 % | **14.3 %** | 799.79 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA310 Umývateľná mopovac... | 25.00 € | **20.00 €** | 38.9 % | **11.1 %** | 20.30 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 28.50 € | **23.50 €** | 32.9 % | **9.6 %** | 23.89 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 36.00 € | **31.00 €** | 37.9 % | **18.8 %** | 31.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 21.00 € | **16.00 €** | 43.6 % | **9.4 %** | 16.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **21.00 €** | 42.8 % | **15.4 %** | 21.50 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 85.90 € | **81.00 €** | 15.1 % | **8.5 %** | 81.10 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 104.90 € | **100.00 €** | 15.1 % | **9.8 %** | 100.11 € | stávame sa najlacnejší |
| Vodotesné puzdro Puluz (45 m) pre iPhone: na podvodn... | 64.90 € | **60.00 €** | 15.0 % | **6.3 %** | 60.46 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 42.90 € | **38.00 €** | 29.7 % | **14.8 %** | 38.06 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 52.90 € | **48.00 €** | 25.3 % | **13.7 %** | 48.19 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.90 € | **20.00 €** | 38.3 % | **11.1 %** | 20.50 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.00 €** | 59.0 % | **31.0 %** | 23.50 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 41.50 € | **36.90 €** | 19.3 % | **6.1 %** | 36.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 31.50 € | **26.90 €** | 38.6 % | **18.3 %** | 26.91 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **25.90 €** | 59.0 % | **35.0 %** | 26.00 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 64.50 € | **59.90 €** | 46.2 % | **35.8 %** | 60.00 € | stávame sa najlacnejší |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 100.50 € | **95.90 €** | 10.1 % | **5.0 %** | 77.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO3753EA | 96.50 € | **91.90 €** | 10.5 % | **5.2 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BMGB25332BG | 181.50 € | **176.90 €** | 10.1 % | **7.3 %** | 177.00 € | stávame sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 99.00 € | **94.50 €** | 10.0 % | **5.0 %** | 83.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 45.00 € | **40.50 €** | 17.4 % | **5.7 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RH 6545 WH | 97.50 € | **93.00 €** | 10.1 % | **5.0 %** | 87.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovačka Vacu Power 500 | 90.50 € | **86.00 €** | 10.6 % | **5.1 %** | 83.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.00 € | **10.50 €** | 54.2 % | **7.9 %** | 9.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal B864SA74 | 103.00 € | **98.50 €** | 10.1 % | **5.3 %** | 98.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **12.50 €** | 47.5 % | **8.5 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **12.50 €** | 47.5 % | **8.5 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 54.00 € | **49.50 €** | 19.7 % | **9.7 %** | 49.57 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 20.50 € | **16.00 €** | 48.5 % | **15.9 %** | 16.17 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 20.50 € | **16.00 €** | 45.8 % | **13.8 %** | 16.17 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **81.00 €** | 14.9 % | **8.8 %** | 81.28 € | stávame sa najlacnejší |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 18.50 € | **14.00 €** | 46.0 % | **10.5 %** | 14.39 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **12.50 €** | 47.5 % | **8.5 %** | 12.90 € | stávame sa najlacnejší |
| Letecký simulátor MOZA RACING AB6 | 454.00 € | **449.50 €** | 14.9 % | **13.8 %** | 449.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **21.00 €** | 37.8 % | **13.4 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **14.00 €** | 51.0 % | **14.3 %** | 14.50 € | stávame sa najlacnejší |
| Ariete ART 4631 | 138.50 € | **134.00 €** | 10.2 % | **6.7 %** | 134.50 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 21.50 € | **17.00 €** | 53.1 % | **21.0 %** | 17.50 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 170.90 € | **166.50 €** | 8.1 % | **5.3 %** | 144.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GC 305012 | 95.90 € | **91.50 €** | 10.2 % | **5.1 %** | 73.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fujifilm INSTAX MINI 13 - Green | 91.90 € | **87.50 €** | 10.4 % | **5.1 %** | 78.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fujifilm INSTAX MINI 13 - Pink | 91.90 € | **87.50 €** | 10.4 % | **5.1 %** | 78.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 1-pack) | 101.90 € | **97.50 €** | 10.0 % | **5.3 %** | 97.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 123.90 € | **119.50 €** | 15.1 % | **11.0 %** | 119.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 14.90 € | **10.50 €** | 49.7 % | **5.5 %** | 9.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 13.90 € | **9.50 €** | 56.1 % | **6.7 %** | 9.60 € | stávame sa najlacnejší |
| Držiak BOYA BY-C40 | 40.90 € | **36.50 €** | 18.6 % | **5.9 %** | 35.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 23.90 € | **19.50 €** | 39.2 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 23.90 € | **19.50 €** | 49.0 % | **21.6 %** | 19.90 € | stávame sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.50 €** | 54.2 % | **32.3 %** | 26.90 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 40.00 € | **35.90 €** | 47.6 % | **32.4 %** | 36.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 21.00 € | **16.90 €** | 36.3 % | **9.7 %** | 17.00 € | stávame sa najlacnejší |
| Kaon MZ-102 Skylink Viaccess Orca bezkartový systém | 115.00 € | **110.90 €** | 9.2 % | **5.3 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **82.90 €** | 15.0 % | **9.6 %** | 82.98 € | stávame sa najlacnejší |
| Braun IS5247.VI | 189.00 € | **184.90 €** | 10.0 % | **7.7 %** | 185.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K4 ruční, bezdrátový set | 122.90 € | **118.90 €** | 8.7 % | **5.2 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vu+ DUO 4K Lite (1xDVB-S2X FBC Twin tuner) | 376.50 € | **372.50 €** | 6.1 % | **5.0 %** | 349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell „Standard Day“ pre OSMO NANO –... | 46.90 € | **42.90 €** | 15.2 % | **5.3 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 2-pack) | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 63.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| INVERTO Premium - Quad IDLP-QDL413 -  0,2 dB - s fil... | 29.50 € | **25.50 €** | 23.9 % | **7.1 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amiko Mini HD265 WiFi | 56.50 € | **52.50 €** | 13.4 % | **5.4 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SALENTE SuChef | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 72.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **45.50 €** | 15.3 % | **6.0 %** | 39.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkční balanční podložka HMS BSX02 | 133.00 € | **129.00 €** | 8.3 % | **5.1 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 59.90 € | **55.90 €** | 13.1 % | **5.5 %** | 51.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax PartyGo1 Play | 84.50 € | **80.50 €** | 10.3 % | **5.1 %** | 76.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 40.90 € | **36.90 €** | 17.5 % | **6.0 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI DSO-TC3 SigGen 3-v-1 tester tranzistorov – ru... | 50.50 € | **46.50 €** | 14.7 % | **5.6 %** | 42.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO Mini HD265 | 49.90 € | **45.90 €** | 14.7 % | **5.5 %** | 42.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 19.00 € | **15.00 €** | 33.7 % | **5.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 81.50 € | **77.50 €** | 10.5 % | **5.1 %** | 76.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **42.90 €** | 15.3 % | **5.5 %** | 42.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 47.90 € | **43.90 €** | 15.0 % | **5.4 %** | 43.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV4111E0 | 86.00 € | **82.00 €** | 10.1 % | **5.0 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI PRO MP273 E14A | 88.50 € | **84.50 €** | 10.0 % | **5.1 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 14.00 € | **10.00 €** | 48.2 % | **5.9 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus AS1 PRO POCKET PRO AIRBANK – mini pumpa na b... | 51.00 € | **47.00 €** | 14.7 % | **5.7 %** | 47.04 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 23.90 € | **19.90 €** | 39.2 % | **15.9 %** | 19.95 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 61.50 € | **57.50 €** | 41.6 % | **32.4 %** | 57.55 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 30.90 € | **26.90 €** | 38.9 % | **20.9 %** | 27.00 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.50 € | **9.50 €** | 55.0 % | **9.1 %** | 9.60 € | stávame sa najlacnejší |
| Concept OPK5160bc | 181.90 € | **177.90 €** | 10.1 % | **7.7 %** | 178.00 € | stávame sa najlacnejší |
| Digitálny kliešťový merač Habotest HT208D | 47.50 € | **43.50 €** | 15.1 % | **5.4 %** | 43.68 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.00 € | **48.00 €** | 15.3 % | **6.4 %** | 48.19 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.50 € | **223.50 €** | 15.1 % | **13.1 %** | 223.69 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.50 € | **223.50 €** | 15.1 % | **13.1 %** | 223.69 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 81.50 € | **77.50 €** | 10.5 % | **5.1 %** | 77.69 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V45i | 330.50 € | **326.50 €** | 15.0 % | **13.7 %** | 326.69 € | stávame sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 114.50 € | **110.50 €** | 18.8 % | **14.6 %** | 110.70 € | stávame sa najlacnejší |
| Grafický tablet Huion Slate 11 | 274.50 € | **270.50 €** | 15.1 % | **13.4 %** | 270.70 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (červený) | 245.50 € | **241.50 €** | 15.1 % | **13.2 %** | 241.70 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE E25 Pro | 235.50 € | **231.50 €** | 14.9 % | **13.0 %** | 231.70 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 220.00 € | **216.00 €** | 15.0 % | **12.9 %** | 216.21 € | stávame sa najlacnejší |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 305.00 € | **301.00 €** | 14.9 % | **13.4 %** | 301.21 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 35.00 € | **31.00 €** | 19.1 % | **5.5 %** | 31.29 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 89.00 € | **85.00 €** | 20.3 % | **14.9 %** | 85.29 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA520 Umývateľný HEPA fi... | 24.00 € | **20.00 €** | 33.4 % | **11.1 %** | 20.30 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **11.50 €** | 49.3 % | **10.8 %** | 11.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **28.50 €** | 59.9 % | **40.3 %** | 28.90 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 19.50 € | **15.50 €** | 46.0 % | **16.0 %** | 15.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 19.00 € | **15.00 €** | 42.2 % | **12.3 %** | 15.50 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 161.00 € | **157.00 €** | 10.0 % | **7.3 %** | 157.50 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.90 € | **81.00 €** | 10.2 % | **5.1 %** | 76.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 108.90 € | **105.00 €** | 15.0 % | **10.8 %** | 105.05 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.90 € | **62.00 €** | 20.2 % | **13.1 %** | 62.08 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 13.50 € | **9.60 €** | 55.7 % | **10.7 %** | 9.70 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.90 € | **38.00 €** | 18.2 % | **7.2 %** | 38.09 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **22.00 €** | 39.1 % | **18.1 %** | 22.35 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **17.00 €** | 43.0 % | **16.3 %** | 17.36 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 19.90 € | **16.00 €** | 55.7 % | **25.2 %** | 16.49 € | stávame sa najlacnejší |
| Anténní zesilovač Evercon AH-707 | 57.90 € | **54.00 €** | 27.1 % | **18.5 %** | 54.49 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **21.00 €** | 59.2 % | **34.2 %** | 21.50 € | stávame sa najlacnejší |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **345.00 €** | 15.0 % | **13.7 %** | 345.08 € | stávame sa najlacnejší |
| Projektor Ultima Poseidon E40 | 402.90 € | **399.00 €** | 15.0 % | **13.9 %** | 399.10 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V25i Pro II | 317.90 € | **314.00 €** | 15.0 % | **13.6 %** | 314.11 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **8.80 €** | 56.6 % | **10.2 %** | 8.89 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 12.50 € | **8.80 €** | 53.5 % | **8.1 %** | 8.90 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 28.50 € | **24.90 €** | 20.9 % | **5.6 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mobilný ovládač GameSir X5s (čierny) | 45.50 € | **41.90 €** | 14.5 % | **5.5 %** | 38.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 40.50 € | **36.90 €** | 15.5 % | **5.2 %** | 36.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.50 € | **45.90 €** | 38.6 % | **28.5 %** | 45.96 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 27.50 € | **23.90 €** | 34.6 % | **17.0 %** | 24.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 35.50 € | **31.90 €** | 19.8 % | **7.7 %** | 32.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 4.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 19.50 € | **15.90 €** | 31.7 % | **7.4 %** | 15.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 110.50 € | **106.90 €** | 8.6 % | **5.1 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6840E0 | 76.50 € | **72.90 €** | 10.7 % | **5.5 %** | 69.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi AX3200 Router (R32/E) | 83.50 € | **79.90 €** | 10.1 % | **5.3 %** | 79.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Continenta Dřevěný chlebník | 76.50 € | **72.90 €** | 10.6 % | **5.4 %** | 72.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 95.50 € | **91.90 €** | 14.1 % | **9.8 %** | 91.96 € | stávame sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 73.50 € | **69.90 €** | 14.1 % | **8.5 %** | 69.96 € | stávame sa najlacnejší |
| Doplnok xTool Smart World pre mBot2 | 82.50 € | **78.90 €** | 15.0 % | **10.0 %** | 78.99 € | stávame sa najlacnejší |
| TESLA PowerWash & Steam Station TQS600 | 122.50 € | **118.90 €** | 9.7 % | **6.5 %** | 119.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 182.50 € | **178.90 €** | 7.9 % | **5.7 %** | 179.00 € | stávame sa najlacnejší |
| EcoFlow DELTA 3 Max nabíjecí stanice 1ECO2040 | 1361.00 € | **1357.50 €** | 5.3 % | **5.0 %** | 1198.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 75.00 € | **71.50 €** | 10.5 % | **5.4 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Memory card Samsung EVO Plus microSD 2021 64GB (MB-M... | 47.00 € | **43.50 €** | 14.4 % | **5.9 %** | 35.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 29.00 € | **25.50 €** | 21.8 % | **7.1 %** | 23.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT 420 Android TV box | 78.00 € | **74.50 €** | 10.0 % | **5.1 %** | 74.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 20.00 € | **16.50 €** | 27.3 % | **5.0 %** | 16.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **31.00 €** | 47.5 % | **32.6 %** | 31.01 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 20.50 € | **17.00 €** | 33.9 % | **11.0 %** | 17.05 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 70.00 € | **66.50 €** | 23.6 % | **17.4 %** | 66.55 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 376.00 € | **372.50 €** | 10.9 % | **9.8 %** | 372.57 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 32.50 € | **29.00 €** | 43.8 % | **28.3 %** | 29.08 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 81.00 € | **77.50 €** | 23.8 % | **18.5 %** | 77.69 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 29.50 € | **26.00 €** | 22.2 % | **7.7 %** | 26.29 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 44.00 € | **40.50 €** | 37.6 % | **26.7 %** | 40.79 € | stávame sa najlacnejší |
| Stolný statív Puluz PU3070GT | 44.00 € | **40.50 €** | 15.1 % | **5.9 %** | 40.79 € | stávame sa najlacnejší |
| Súprava inteligentného solárneho vodného čerpadla s ... | 62.50 € | **59.00 €** | 14.7 % | **8.3 %** | 59.30 € | stávame sa najlacnejší |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 50.50 € | **47.00 €** | 24.8 % | **16.1 %** | 47.33 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 55.00 € | **51.50 €** | 39.6 % | **30.7 %** | 51.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 16.00 € | **12.50 €** | 48.0 % | **15.6 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 16.50 € | **13.00 €** | 39.3 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.00 €** | 38.8 % | **19.0 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 23.50 € | **20.00 €** | 38.1 % | **17.6 %** | 20.50 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 16.50 € | **13.00 €** | 66.0 % | **30.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 22.50 € | **19.00 €** | 53.8 % | **29.9 %** | 19.50 € | stávame sa najlacnejší |
| Ariete ART 583/04 | 76.90 € | **73.50 €** | 10.5 % | **5.6 %** | 66.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 82.90 € | **79.50 €** | 21.0 % | **16.1 %** | 79.56 € | stávame sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.50 €** | 15.2 % | **9.8 %** | 69.90 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Sony | 127.90 € | **124.50 €** | 15.1 % | **12.1 %** | 124.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **12.50 €** | 37.7 % | **8.2 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava príslušenstva pre vysávač MOVA P50 PU, P50 U | 42.90 € | **39.50 €** | 15.5 % | **6.3 %** | 33.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.50 €** | 18.5 % | **8.7 %** | 37.61 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 28.90 € | **25.50 €** | 25.0 % | **10.3 %** | 25.69 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **19.50 €** | 38.1 % | **17.6 %** | 19.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná čier... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 51.90 € | **48.50 €** | 14.9 % | **7.4 %** | 48.90 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 11.00 € | **7.80 €** | 54.5 % | **9.5 %** | 7.90 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - black | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 200.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - white | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 263.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný pohlcovač zápachu Petkit | 41.00 € | **37.90 €** | 14.6 % | **5.9 %** | 20.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus AS1 POCKET AIRBANK – mini pumpa na bicykel | 38.00 € | **34.90 €** | 14.9 % | **5.6 %** | 34.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.90 €** | 14.9 % | **9.4 %** | 62.00 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **9.90 €** | 38.5 % | **5.5 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **10.90 €** | 36.5 % | **6.3 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 12.50 € | **9.40 €** | 50.6 % | **13.2 %** | 9.49 € | stávame sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 240.00 € | **236.90 €** | 15.0 % | **13.5 %** | 237.00 € | stávame sa najlacnejší |
| ETA Ambito 0516 90000 bílý/tyrkysový | 64.90 € | **61.90 €** | 10.6 % | **5.5 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH955 | 76.50 € | **73.50 €** | 10.0 % | **5.7 %** | 37.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka IMOU CE2P, sada 4 ks | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH960 | 76.50 € | **73.50 €** | 10.0 % | **5.7 %** | 49.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Balanční míč HMS Premium BSX Pro | 102.90 € | **99.90 €** | 8.4 % | **5.2 %** | 85.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FF203130 | 67.90 € | **64.90 €** | 10.0 % | **5.1 %** | 52.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BL16GE30 | 58.90 € | **55.90 €** | 10.7 % | **5.1 %** | 47.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2904/04 | 69.50 € | **66.50 €** | 10.2 % | **5.5 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 30.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné stropné svietidlo CW Yeelight Meteor C300. | 33.90 € | **30.90 €** | 15.4 % | **5.2 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 36.00 € | **33.00 €** | 14.8 % | **5.3 %** | 28.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Indukční vařič, G1013700, jedn | 70.90 € | **67.90 €** | 10.2 % | **5.6 %** | 63.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **64.90 €** | 10.1 % | **5.2 %** | 60.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Profi XL + náhrada Static Plus | 62.90 € | **59.90 €** | 10.7 % | **5.4 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.50 € | **63.50 €** | 10.6 % | **5.6 %** | 60.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN-F16 Flight Joystick for PC | 34.50 € | **31.50 €** | 15.3 % | **5.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi V89 (nerezová oceľ, zlatá... | 33.50 € | **30.50 €** | 15.5 % | **5.2 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 77.50 € | **74.50 €** | 9.6 % | **5.4 %** | 73.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 58.50 € | **55.50 €** | 10.8 % | **5.1 %** | 54.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrické čerpadlo Cycplus AL1 | 36.50 € | **33.50 €** | 15.5 % | **6.0 %** | 32.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 0028 98050 | 67.90 € | **64.90 €** | 10.5 % | **5.6 %** | 64.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator R45 eXtremo Black Red | 68.90 € | **65.90 €** | 10.3 % | **5.5 %** | 65.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **13.00 €** | 38.4 % | **12.4 %** | 13.10 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **26.90 €** | 50.2 % | **35.2 %** | 27.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 12.50 € | **9.50 €** | 49.0 % | **13.2 %** | 9.60 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **35.90 €** | 46.1 % | **34.8 %** | 36.00 € | stávame sa najlacnejší |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 74.50 € | **71.50 €** | 15.0 % | **10.4 %** | 71.67 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 17.00 € | **14.00 €** | 42.8 % | **17.6 %** | 14.21 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **45.00 €** | 14.5 % | **7.4 %** | 45.25 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **36.00 €** | 14.9 % | **6.1 %** | 36.29 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 13.50 € | **10.50 €** | 47.7 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 24.50 € | **21.50 €** | 39.6 % | **22.5 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **35.50 €** | 55.1 % | **43.0 %** | 35.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.50 €** | 56.5 % | **28.1 %** | 13.90 € | stávame sa najlacnejší |
| Blender G21 Perfection brown | 203.50 € | **200.50 €** | 13.8 % | **12.1 %** | 200.90 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **45.50 €** | 15.0 % | **7.9 %** | 45.90 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.50 € | **11.50 €** | 44.1 % | **14.3 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **14.00 €** | 47.5 % | **21.5 %** | 14.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 3 zásuvky IP44, 3 x 2... | 24.00 € | **21.00 €** | 36.3 % | **19.2 %** | 21.50 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **66.00 €** | 15.0 % | **10.2 %** | 66.10 € | stávame sa najlacnejší |
| Rowenta RO4B25EA | 96.90 € | **94.00 €** | 10.4 % | **7.1 %** | 94.50 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 12.50 € | **9.60 €** | 56.8 % | **20.4 %** | 9.69 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 15.90 € | **13.00 €** | 60.6 % | **31.3 %** | 13.32 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **10.00 €** | 47.7 % | **14.5 %** | 10.50 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.90 € | **56.00 €** | 10.5 % | **5.1 %** | 56.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.90 € | **25.00 €** | 42.8 % | **28.0 %** | 25.03 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 24.90 € | **22.00 €** | 55.2 % | **37.2 %** | 22.20 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 62.90 € | **60.00 €** | 10.4 % | **5.3 %** | 60.50 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 23.90 € | **21.00 €** | 46.2 % | **28.5 %** | 21.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 9.80 € | **7.00 €** | 47.5 % | **5.4 %** | 7.06 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 10.90 € | **8.20 €** | 40.4 % | **5.7 %** | 7.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK364G10 Coppertinto | 59.50 € | **56.90 €** | 10.4 % | **5.6 %** | 48.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.50 € | **52.90 €** | 10.6 % | **5.5 %** | 44.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3751i White | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 39.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový ovládač 4-kan. k pohonu brán IN SL-600, 100... | 28.50 € | **25.90 €** | 16.6 % | **5.9 %** | 19.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1004500 | 51.50 € | **48.90 €** | 10.7 % | **5.1 %** | 43.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Aura 5 ANC | 53.50 € | **50.90 €** | 10.9 % | **5.5 %** | 46.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 35.50 € | **32.90 €** | 14.5 % | **6.1 %** | 28.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1013400 | 56.50 € | **53.90 €** | 10.4 % | **5.4 %** | 51.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **25.90 €** | 15.7 % | **5.1 %** | 23.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **57.90 €** | 10.2 % | **5.5 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maono PD100 Microphone Black | 30.50 € | **27.90 €** | 15.1 % | **5.3 %** | 26.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 23210-70/RH Luna | 51.50 € | **48.90 €** | 11.1 % | **5.5 %** | 47.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Joystick PXN-2113 PRO Ovládanie letu PC | 31.50 € | **28.90 €** | 14.6 % | **5.1 %** | 28.99 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **21.90 €** | 44.9 % | **29.5 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **19.90 €** | 55.2 % | **37.2 %** | 20.00 € | stávame sa najlacnejší |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 18.50 € | **15.90 €** | 23.4 % | **6.0 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100(1-pack) regulácia 23... | 13.50 € | **10.90 €** | 31.3 % | **6.0 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 16.50 € | **13.90 €** | 54.4 % | **30.0 %** | 14.00 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 11.50 € | **8.90 €** | 45.2 % | **12.4 %** | 9.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **11.90 €** | 37.7 % | **13.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **11.90 €** | 58.4 % | **30.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **14.90 €** | 55.7 % | **32.5 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED COB pásik, 50m, studená biela, 10W/m, 10... | 135.50 € | **132.90 €** | 47.8 % | **44.9 %** | 132.96 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR TWIN - Black | 59.00 € | **56.50 €** | 10.0 % | **5.4 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **12.50 €** | 29.2 % | **7.7 %** | 11.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 31.00 € | **28.50 €** | 14.6 % | **5.4 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá QCY HT18 LITE Titanium TWS | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.53 € | stávame sa najlacnejší |
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 48.50 € | **46.00 €** | 23.2 % | **16.9 %** | 46.07 € | stávame sa najlacnejší |
| Maono BA92 Boom Arm Black | 50.50 € | **48.00 €** | 15.2 % | **9.5 %** | 48.08 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 8.90 € | **6.40 €** | 48.9 % | **7.1 %** | 6.49 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 11.90 € | **9.40 €** | 50.0 % | **18.5 %** | 9.50 € | stávame sa najlacnejší |
| Elektrická pumpa Cycplus AS280PRO | 40.50 € | **38.00 €** | 15.5 % | **8.4 %** | 38.17 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 22.00 € | **19.50 €** | 54.3 % | **36.8 %** | 19.68 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 16.50 € | **14.00 €** | 25.3 % | **6.3 %** | 14.19 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 28.50 € | **26.00 €** | 53.4 % | **40.0 %** | 26.25 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 53.00 € | **50.50 €** | 14.9 % | **9.5 %** | 50.76 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **31.00 €** | 14.5 % | **5.9 %** | 31.29 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 42.50 € | **40.00 €** | 15.1 % | **8.3 %** | 40.33 € | stávame sa najlacnejší |
| Solight LED SMD pásik, 50m, studená biela, 16W/m, 15... | 108.50 € | **106.00 €** | 47.9 % | **44.5 %** | 106.37 € | stávame sa najlacnejší |
| Solight LED SMD pásik, 50m, teplá biela, 16W/m, 1500... | 108.50 € | **106.00 €** | 47.9 % | **44.5 %** | 106.37 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 28.38 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 24.50 € | **22.00 €** | 23.4 % | **10.8 %** | 22.39 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 15.00 € | **12.50 €** | 38.3 % | **15.2 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **33.50 €** | 38.3 % | **28.7 %** | 33.90 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.50 €** | 52.6 % | **30.1 %** | 14.90 € | stávame sa najlacnejší |
| Ivo DVB-26 zesilovač 26dB (5-12V) | 27.00 € | **24.50 €** | 34.7 % | **22.2 %** | 24.90 € | stávame sa najlacnejší |
| Herní mikrofon Maono DGM20 (černý) | 27.50 € | **25.00 €** | 16.0 % | **5.5 %** | 25.45 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 43.50 € | **41.00 €** | 14.4 % | **7.8 %** | 41.49 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **14.00 €** | 39.3 % | **18.2 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.00 €** | 55.4 % | **39.5 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **24.00 €** | 54.7 % | **40.1 %** | 24.50 € | stávame sa najlacnejší |
| G3Ferrari G10152 horkovzdušná trouba | 148.50 € | **146.00 €** | 10.3 % | **8.4 %** | 146.50 € | stávame sa najlacnejší |
| Držiak BOYA BY-PB30A 3m teleskopická tyč závit 1/4” | 81.90 € | **79.50 €** | 8.7 % | **5.5 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prijímač BOYA BY-WM3U bezdrátový, dosah 20m | 81.90 € | **79.50 €** | 8.7 % | **5.6 %** | 47.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **83.50 €** | 15.1 % | **11.9 %** | 83.63 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 12.90 € | **10.50 €** | 29.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **7.60 €** | 38.7 % | **5.4 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 12.00 € | **9.60 €** | 49.2 % | **19.3 %** | 9.61 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 15.90 € | **13.50 €** | 31.1 % | **11.3 %** | 13.71 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 12.90 € | **10.50 €** | 49.4 % | **21.6 %** | 10.86 € | stávame sa najlacnejší |
| Evolveo HDO, aktivní venkovní anténa | 54.90 € | **52.50 €** | 10.4 % | **5.6 %** | 45.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer VR300 VDSL Router | 53.90 € | **51.50 €** | 10.4 % | **5.4 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 49.90 € | **47.50 €** | 11.2 % | **5.9 %** | 44.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO 717 MF | 48.90 € | **46.50 €** | 10.5 % | **5.1 %** | 44.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2877/05 | 49.90 € | **47.50 €** | 10.5 % | **5.2 %** | 46.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 52.90 € | **50.50 €** | 10.2 % | **5.2 %** | 50.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecká na odpadky pre Petkit litter box Purobot ULTR... | 31.90 € | **29.50 €** | 15.1 % | **6.4 %** | 29.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 62.90 € | **60.50 €** | 24.2 % | **19.5 %** | 60.59 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **14.50 €** | 39.1 % | **19.3 %** | 14.60 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **19.50 €** | 48.6 % | **32.3 %** | 19.67 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 20.90 € | **18.50 €** | 25.3 % | **10.9 %** | 18.89 € | stávame sa najlacnejší |
| Leifheit 52127 Set Clean Twist M Ergo | 43.90 € | **41.50 €** | 15.6 % | **9.3 %** | 41.90 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 9.40 € | **7.10 €** | 54.1 % | **16.4 %** | 7.19 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.80 €** | 55.6 % | **5.2 %** | 4.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 11.90 € | **9.70 €** | 44.0 % | **17.4 %** | 9.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 12.00 € | **9.80 €** | 52.2 % | **24.3 %** | 9.90 € | stávame sa najlacnejší |
| Tefal HT461138 | 45.00 € | **42.90 €** | 10.2 % | **5.1 %** | 36.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 27011-56 | 47.00 € | **44.90 €** | 10.1 % | **5.2 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **31.90 €** | 47.3 % | **38.2 %** | 31.96 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 35.00 € | **32.90 €** | 39.4 % | **31.1 %** | 33.00 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 26.00 € | **23.90 €** | 53.8 % | **41.4 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **33.90 €** | 53.5 % | **44.5 %** | 34.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **6.70 €** | 38.4 % | **5.4 %** | 6.80 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.70 € | **5.60 €** | 54.6 % | **12.4 %** | 5.70 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.90 € | **9.80 €** | 38.0 % | **13.7 %** | 9.90 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 163.00 € | **160.90 €** | 10.0 % | **8.6 %** | 161.00 € | stávame sa najlacnejší |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 41.50 € | **39.50 €** | 11.4 % | **6.0 %** | 18.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26380-70 | 40.50 € | **38.50 €** | 11.2 % | **5.7 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff S60ZBTPF Inteligentná zásuvka ZigBee (2ks) | 26.50 € | **24.50 €** | 14.6 % | **6.0 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Pack 6 MAXTRApro PO 2024 | 39.50 € | **37.50 €** | 11.1 % | **5.5 %** | 26.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DMR7 směrový, pro fotoaparáty, TRS | 73.50 € | **71.50 €** | 8.5 % | **5.5 %** | 61.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy PILOT Q2 WiFi | 46.50 € | **44.50 €** | 10.5 % | **5.7 %** | 34.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-PA4010 Powerline Starter Kit | 45.50 € | **43.50 €** | 10.1 % | **5.2 %** | 33.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR ECO - White | 39.90 € | **37.90 €** | 10.9 % | **5.3 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2863E1 | 41.50 € | **39.50 €** | 10.7 % | **5.3 %** | 35.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 21.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE500X AX1500 WiFi 6 Extender | 41.90 € | **39.90 €** | 10.3 % | **5.1 %** | 36.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový ovládač KRUGER & MATZ V-LED | 12.50 € | **10.50 €** | 25.2 % | **5.1 %** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Napěňovač mléka, G1017301, 30 | 46.90 € | **44.90 €** | 10.5 % | **5.7 %** | 42.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 18.50 € | **16.50 €** | 20.3 % | **7.3 %** | 14.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1009800 | 42.90 € | **40.90 €** | 10.2 % | **5.1 %** | 38.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar SB-820BT Soundbar | 35.50 € | **33.50 €** | 11.5 % | **5.2 %** | 31.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 20.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Neutralizátor zápachu na čistenie podláh pre MOVA V5... | 26.50 € | **24.50 €** | 14.7 % | **6.0 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 12.50 € | **10.50 €** | 29.8 % | **9.0 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **49.50 €** | 10.2 % | **5.9 %** | 48.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.50 € | **32.50 €** | 11.5 % | **5.0 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vodné chladenie pre procesor DE360 (biely) | 109.50 € | **107.50 €** | 15.1 % | **13.0 %** | 107.53 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 36.00 € | **34.00 €** | 18.4 % | **11.8 %** | 34.09 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 18.90 € | **16.90 €** | 39.2 % | **24.5 %** | 16.99 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 23.50 € | **21.50 €** | 23.3 % | **12.8 %** | 21.59 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-424 5G | 22.90 € | **20.90 €** | 29.8 % | **18.5 %** | 20.99 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-797 5G | 22.90 € | **20.90 €** | 29.8 % | **18.5 %** | 20.99 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-949 5G | 22.90 € | **20.90 €** | 29.8 % | **18.5 %** | 20.99 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 33.90 € | **31.90 €** | 39.0 % | **30.8 %** | 32.00 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **31.90 €** | 39.0 % | **30.8 %** | 32.00 € | stávame sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **28.90 €** | 54.5 % | **44.5 %** | 29.00 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 72.90 € | **70.90 €** | 42.1 % | **38.2 %** | 71.00 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8027 | 15.90 € | **13.90 €** | 25.5 % | **9.7 %** | 14.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 11.50 € | **9.50 €** | 57.1 % | **29.8 %** | 9.60 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 172.90 € | **170.90 €** | 10.2 % | **8.9 %** | 171.00 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 167.50 € | **165.50 €** | 8.2 % | **6.9 %** | 165.64 € | stávame sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 24.50 € | **22.50 €** | 23.4 % | **13.3 %** | 22.65 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 18.50 € | **16.50 €** | 40.3 % | **25.1 %** | 16.69 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 29.50 € | **27.50 €** | 22.2 % | **14.0 %** | 27.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 33.50 € | **31.50 €** | 17.8 % | **10.8 %** | 31.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.50 €** | 15.7 % | **8.8 %** | 31.69 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 25.50 € | **23.50 €** | 15.5 % | **6.4 %** | 23.69 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **37.50 €** | 15.3 % | **9.4 %** | 37.71 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 52.50 € | **50.50 €** | 14.6 % | **10.3 %** | 50.76 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 25.50 € | **23.50 €** | 14.3 % | **5.3 %** | 23.79 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 20.50 € | **18.50 €** | 17.8 % | **6.3 %** | 18.83 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **103.50 €** | 15.0 % | **12.8 %** | 103.83 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 30.00 € | **28.00 €** | 14.3 % | **6.7 %** | 28.38 € | stávame sa najlacnejší |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 72.00 € | **70.00 €** | 15.0 % | **11.9 %** | 70.38 € | stávame sa najlacnejší |
| Napájecí zdroj spínaný URZ1169  12V / 5A - 2,1/5,5 | 14.50 € | **12.50 €** | 32.5 % | **14.2 %** | 12.89 € | stávame sa najlacnejší |
| Leifheit 81520 Pegasus 200 Solid | 38.50 € | **36.50 €** | 15.3 % | **9.3 %** | 36.90 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 18.50 € | **16.50 €** | 38.9 % | **23.9 %** | 16.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 12.50 € | **10.50 €** | 37.3 % | **15.4 %** | 10.90 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **11.50 €** | 55.2 % | **32.2 %** | 11.90 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 15.50 € | **13.50 €** | 42.6 % | **24.2 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 12.50 € | **10.50 €** | 46.9 % | **23.4 %** | 10.90 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 14.50 € | **12.50 €** | 43.2 % | **23.5 %** | 12.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **15.50 €** | 44.3 % | **27.8 %** | 15.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 24.50 € | **22.50 €** | 43.5 % | **31.8 %** | 22.90 € | stávame sa najlacnejší |
| Úložné puzdro PGYTECH DJI Air 3/3S | 65.50 € | **63.50 €** | 15.1 % | **11.6 %** | 63.90 € | stávame sa najlacnejší |
| MOZA RACING RS061 predĺženie stĺpika riadenia | 120.50 € | **118.50 €** | 15.1 % | **13.2 %** | 118.90 € | stávame sa najlacnejší |
| Ovládacia páka lietadla MOZA RACING MHG | 111.50 € | **109.50 €** | 14.9 % | **12.8 %** | 109.90 € | stávame sa najlacnejší |
| Mikrofón Maono DGM20 (biely) | 27.00 € | **25.00 €** | 14.2 % | **5.8 %** | 25.45 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne | 30.00 € | **28.00 €** | 14.4 % | **6.8 %** | 28.46 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 Gold | 30.00 € | **28.00 €** | 14.4 % | **6.8 %** | 28.46 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 16.00 € | **14.00 €** | 21.6 % | **6.4 %** | 14.48 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 61.00 € | **59.00 €** | 10.1 % | **6.5 %** | 59.50 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.00 €** | 53.7 % | **39.7 %** | 20.50 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.00 €** | 53.7 % | **39.7 %** | 20.50 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.00 €** | 50.1 % | **33.4 %** | 16.50 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **112.00 €** | 11.6 % | **9.7 %** | 112.50 € | stávame sa najlacnejší |
| Aligator Watch GPS Silver | 64.90 € | **63.00 €** | 10.4 % | **7.2 %** | 63.50 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 10.00 € | **8.10 €** | 37.1 % | **11.1 %** | 8.20 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **14.00 €** | 56.1 % | **37.5 %** | 14.50 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 13.90 € | **12.00 €** | 44.9 % | **25.1 %** | 12.50 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **13.00 €** | 51.8 % | **32.4 %** | 13.50 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 7.30 € | **5.40 €** | 47.3 % | **8.9 %** | 5.41 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.90 € | **36.00 €** | 10.7 % | **5.1 %** | 35.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 19.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak mikrofónu Maono BA37 | 29.90 € | **28.00 €** | 15.3 % | **8.0 %** | 28.32 € | stávame sa najlacnejší |
| Krüger&Matz HL-CP03 bezdrátový adaptér CarPlay - And... | 23.90 € | **22.00 €** | 18.2 % | **8.8 %** | 22.39 € | stávame sa najlacnejší |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 34.90 € | **33.00 €** | 22.1 % | **15.4 %** | 33.39 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.90 € | **20.00 €** | 24.8 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 17.90 € | **16.00 €** | 49.7 % | **33.8 %** | 16.50 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **30.00 €** | 16.5 % | **9.5 %** | 30.50 € | stávame sa najlacnejší |
| Tefal HT652538 | 58.90 € | **57.00 €** | 10.4 % | **6.8 %** | 57.50 € | stávame sa najlacnejší |
| Solight lokátor pre batožinu, Find My kompatibilný | 23.90 € | **22.00 €** | 41.7 % | **30.5 %** | 22.50 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 7.90 € | **6.10 €** | 46.6 % | **13.2 %** | 6.12 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **8.70 €** | 38.4 % | **14.6 %** | 8.80 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 9.00 € | **7.20 €** | 53.7 % | **23.0 %** | 7.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.80 € | **6.00 €** | 47.1 % | **13.2 %** | 6.10 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.70 € | **5.00 €** | 45.6 % | **8.7 %** | 5.10 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **9.80 €** | 38.5 % | **18.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **7.90 €** | 38.6 % | **14.1 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **7.90 €** | 38.6 % | **14.1 %** | 8.00 € | stávame sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.80 €** | 60.5 % | **34.5 %** | 8.90 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 381.50 € | **379.90 €** | 7.9 % | **7.5 %** | 379.95 € | stávame sa najlacnejší |
| Panasonic sluchátka RZ-B110W | 36.50 € | **34.90 €** | 10.2 % | **5.4 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WHCH520L.CE7 modrá | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 27.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.90 €** | 10.9 % | **6.0 %** | 28.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200CT  bezdrátová sluchátka | 38.50 € | **36.90 €** | 10.4 % | **5.8 %** | 31.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro Profi Comp SOE55080 | 34.50 € | **32.90 €** | 11.1 % | **5.9 %** | 28.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2839E0 | 34.50 € | **32.90 €** | 10.6 % | **5.4 %** | 28.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **39.90 €** | 10.0 % | **5.8 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2020E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2022E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 32.50 € | **30.90 €** | 11.5 % | **6.0 %** | 27.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro Apple iPad FIXTRI-727-BK | 34.50 € | **32.90 €** | 10.3 % | **5.2 %** | 30.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **27.90 €** | 11.4 % | **5.4 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal KO5S08E0 | 35.50 € | **33.90 €** | 11.2 % | **6.2 %** | 33.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 23.50 € | **21.90 €** | 14.7 % | **6.9 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Foodsaver New Fresh 2,3 l | 32.50 € | **30.90 €** | 11.3 % | **5.8 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.90 €** | 15.6 % | **9.1 %** | 26.92 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 46.50 € | **44.90 €** | 9.5 % | **5.7 %** | 45.00 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise pánev 28 cm | 26.50 € | **24.90 €** | 11.8 % | **5.1 %** | 25.00 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **28.90 €** | 39.2 % | **31.9 %** | 29.00 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **23.90 €** | 37.8 % | **29.1 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **21.90 €** | 39.1 % | **29.6 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **20.90 €** | 53.3 % | **42.4 %** | 21.00 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 28.50 € | **26.90 €** | 20.1 % | **13.3 %** | 27.00 € | stávame sa najlacnejší |
| Pedrini Infinity červená 6 porcí | 36.50 € | **34.90 €** | 11.3 % | **6.4 %** | 35.00 € | stávame sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 12.50 € | **10.90 €** | 23.3 % | **7.5 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **15.90 €** | 16.6 % | **6.0 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 12.50 € | **10.90 €** | 23.9 % | **8.1 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **13.90 €** | 39.9 % | **25.4 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 12.50 € | **10.90 €** | 53.5 % | **33.9 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **14.90 €** | 56.9 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **14.90 €** | 56.9 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **13.90 €** | 55.0 % | **39.0 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **10.90 €** | 46.9 % | **28.1 %** | 11.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **10.90 €** | 56.6 % | **36.5 %** | 11.00 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 14.50 € | **12.90 €** | 49.2 % | **32.8 %** | 13.00 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.90 €** | 15.0 % | **14.1 %** | 203.94 € | stávame sa najlacnejší |
| Nabíječka baterií XTAR VC4SL 18650 | 27.00 € | **25.50 €** | 13.3 % | **7.0 %** | 17.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Crema E Gusto 1000 g | 23.50 € | **22.00 €** | 12.3 % | **5.1 %** | 15.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Puluz PU425 1,5 m USB-C klopový mikrofón | 19.00 € | **17.50 €** | 14.2 % | **5.2 %** | 11.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 19.00 € | **17.50 €** | 16.8 % | **7.5 %** | 12.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.B | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 29.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Podlahový mop PROFI cotton plus | 30.50 € | **29.00 €** | 10.8 % | **5.3 %** | 25.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.NBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Portable NBP003LBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9258M | 37.00 € | **35.50 €** | 10.3 % | **5.8 %** | 32.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C110 Home Sec. Wi-Fi Camera | 32.50 € | **31.00 €** | 10.3 % | **5.2 %** | 28.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2012400 | 39.00 € | **37.50 €** | 10.1 % | **5.9 %** | 35.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1020500 | 39.00 € | **37.50 €** | 10.2 % | **5.9 %** | 35.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **15.00 €** | 16.2 % | **5.7 %** | 12.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.00 € | **20.50 €** | 14.1 % | **6.4 %** | 19.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558 | 12.50 € | **11.00 €** | 20.4 % | **6.0 %** | 9.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 22.00 € | **20.50 €** | 13.8 % | **6.0 %** | 19.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 41.00 € | **39.50 €** | 10.2 % | **6.1 %** | 38.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 57.00 € | **55.50 €** | 8.1 % | **5.2 %** | 54.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkové ovládanie Telesin pre GoPro Hero 13 / 12 / ... | 19.00 € | **17.50 €** | 14.6 % | **5.5 %** | 17.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Tiara II 1269 90000 červená | 31.50 € | **30.00 €** | 10.6 % | **5.3 %** | 29.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrické čerpadlo Cycplus A12 | 21.00 € | **19.50 €** | 13.7 % | **5.6 %** | 19.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru CABLETECH UCH0219-1 17''-32'' | 16.50 € | **15.00 €** | 30.2 % | **18.4 %** | 15.01 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 5.50 € | **4.00 €** | 53.1 % | **11.4 %** | 4.01 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 31.50 € | **30.00 €** | 12.8 % | **7.4 %** | 30.09 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **5.30 €** | 45.5 % | **13.4 %** | 5.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 6.20 € | **4.70 €** | 47.0 % | **11.4 %** | 4.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 5.70 € | **4.20 €** | 47.6 % | **8.7 %** | 4.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 11.00 € | **9.50 €** | 45.4 % | **25.6 %** | 9.60 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **20.50 €** | 54.3 % | **43.8 %** | 20.67 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 28.00 € | **26.50 €** | 15.0 % | **8.8 %** | 26.69 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 20.00 € | **18.50 €** | 19.3 % | **10.3 %** | 18.69 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.50 € | **88.00 €** | 14.8 % | **12.9 %** | 88.23 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 23.50 € | **22.00 €** | 14.6 % | **7.3 %** | 22.27 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.00 € | **60.50 €** | 15.4 % | **12.6 %** | 60.79 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 872.00 € | **870.50 €** | 15.0 % | **14.8 %** | 870.80 € | stávame sa najlacnejší |
| Nabíjačka SkyRC NC3000 Pro | 72.00 € | **70.50 €** | 14.9 % | **12.5 %** | 70.80 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 14.00 € | **12.50 €** | 31.0 % | **16.9 %** | 12.89 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **27.50 €** | 47.5 % | **39.9 %** | 27.90 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board L/Uni | 15.00 € | **13.50 €** | 20.9 % | **8.8 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **12.50 €** | 38.3 % | **23.5 %** | 12.90 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 18.00 € | **16.50 €** | 53.9 % | **41.1 %** | 16.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 48.00 € | **46.50 €** | 54.5 % | **49.7 %** | 46.90 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **10.50 €** | 44.3 % | **26.3 %** | 10.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 28.00 € | **26.50 €** | 14.7 % | **8.6 %** | 26.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 24.00 € | **22.50 €** | 36.6 % | **28.1 %** | 22.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 29.50 € | **28.00 €** | 42.0 % | **34.8 %** | 28.50 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.50 € | **12.00 €** | 55.7 % | **38.4 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 13.50 € | **12.00 €** | 56.1 % | **38.8 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 15.50 € | **14.00 €** | 54.4 % | **39.5 %** | 14.50 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.00 €** | 54.7 % | **38.7 %** | 13.50 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 30.50 € | **29.00 €** | 11.6 % | **6.1 %** | 29.50 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 32.50 € | **31.00 €** | 11.4 % | **6.3 %** | 31.50 € | stávame sa najlacnejší |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 11.50 € | **10.00 €** | 45.6 % | **26.6 %** | 10.50 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.00 €** | 46.0 % | **31.9 %** | 14.50 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **11.00 €** | 47.9 % | **30.2 %** | 11.50 € | stávame sa najlacnejší |
| Cycplus AS210 MAX AT1 Max Anoutway – mini pumpa na b... | 43.50 € | **42.00 €** | 14.5 % | **10.5 %** | 42.50 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Canon | 127.90 € | **126.50 €** | 15.1 % | **13.8 %** | 126.60 € | stávame sa najlacnejší |
| Myš bezdrátová REBEL WM500 | 13.90 € | **12.50 €** | 18.5 % | **6.5 %** | 11.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.20 € | **4.80 €** | 37.7 % | **6.6 %** | 4.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.60 €** | 30.7 % | **12.4 %** | 8.67 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **9.60 €** | 52.9 % | **33.4 %** | 9.70 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **6.50 €** | 55.5 % | **28.0 %** | 6.60 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 11.00 € | **9.60 €** | 54.5 % | **34.8 %** | 9.70 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 13.90 € | **12.50 €** | 51.3 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 14.90 € | **13.50 €** | 49.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 14.90 € | **13.50 €** | 37.8 % | **24.9 %** | 13.90 € | stávame sa najlacnejší |
| Sada BOYA BY-WFM12 bezdrátový klopový mikrofon, vysí... | 33.90 € | **32.50 €** | 9.8 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rapoo E9270p bezdrátová klávesnice černá | 37.90 € | **36.50 €** | 10.4 % | **6.4 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alecto FR-115BW Sada vysílaček pro děti | 35.90 € | **34.50 €** | 10.5 % | **6.2 %** | 29.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16075 | 25.90 € | **24.50 €** | 11.1 % | **5.1 %** | 22.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.0 % | **5.4 %** | 24.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rapoo 9300M set klávesnice a myši černý | 31.90 € | **30.50 €** | 11.3 % | **6.4 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PM700 stolní s nastavitelnou směrov... | 40.90 € | **39.50 €** | 8.8 % | **5.1 %** | 37.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada litinových závaží 4x1,25kg, 51mm, REBEL ACTIVE ... | 18.90 € | **17.50 €** | 16.5 % | **7.9 %** | 15.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Yogurella 617 | 27.90 € | **26.50 €** | 10.8 % | **5.2 %** | 25.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.90 € | **28.50 €** | 10.7 % | **5.5 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO hluboká pánev 24 cm | 29.90 € | **28.50 €** | 11.2 % | **6.0 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/05 | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-BC261 | 32.90 € | **31.50 €** | 10.8 % | **6.1 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 50.90 € | **49.50 €** | 15.1 % | **11.9 %** | 49.67 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.90 € | **24.50 €** | 22.6 % | **15.9 %** | 24.69 € | stávame sa najlacnejší |
| Solight LED reflektor PRO, 100W, 9200lm, 5000K, IP65 | 43.90 € | **42.50 €** | 48.5 % | **43.8 %** | 42.85 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.90 € | **22.50 €** | 38.4 % | **30.3 %** | 22.90 € | stávame sa najlacnejší |
| Stojan na mikrofón Fifine BM88 (ružový) | 42.90 € | **41.50 €** | 15.1 % | **11.4 %** | 41.90 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **8.70 €** | 38.3 % | **20.3 %** | 8.80 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 5.30 € | **4.00 €** | 55.6 % | **17.4 %** | 4.10 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 7.50 € | **6.20 €** | 59.6 % | **32.0 %** | 6.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.10 € | **4.80 €** | 47.6 % | **16.1 %** | 4.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 6.30 € | **5.10 €** | 48.5 % | **20.2 %** | 5.15 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 6.30 € | **5.10 €** | 55.2 % | **25.6 %** | 5.15 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.80 €** | 39.2 % | **5.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **4.00 €** | 46.8 % | **12.9 %** | 4.10 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.00 € | **4.80 €** | 39.0 % | **11.2 %** | 4.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.90 € | **5.70 €** | 38.5 % | **14.4 %** | 5.80 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 9.00 € | **7.80 €** | 53.7 % | **33.2 %** | 7.90 € | stávame sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.10 €** | 59.1 % | **33.0 %** | 6.20 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.30 €** | 59.7 % | **30.2 %** | 5.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 4.80 € | **3.60 €** | 54.2 % | **15.7 %** | 3.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 7.10 € | **5.90 €** | 48.4 % | **23.3 %** | 6.00 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 31.00 € | **29.90 €** | 10.1 % | **6.2 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkové cvičební pásy TRX P3-3 REBEL ACTIVE RBA-3... | 20.00 € | **18.90 €** | 12.8 % | **6.6 %** | 16.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal Coppertinto KI280G10 | 31.00 € | **29.90 €** | 10.1 % | **6.2 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 37.00 € | **35.90 €** | 41.8 % | **37.5 %** | 36.00 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **16.90 €** | 47.4 % | **38.4 %** | 17.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **24.90 €** | 42.7 % | **36.7 %** | 25.00 € | stávame sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 18.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 4.90 € | **3.80 €** | 47.5 % | **14.4 %** | 3.85 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.90 € | **5.80 €** | 38.5 % | **16.4 %** | 5.90 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.90 € | **3.80 €** | 54.4 % | **19.7 %** | 3.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 5.70 € | **4.60 €** | 48.1 % | **19.5 %** | 4.70 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 4.50 € | **3.40 €** | 55.7 % | **17.6 %** | 3.50 € | stávame sa najlacnejší |
| Anemometer UNI-T UT363 | 16.00 € | **14.90 €** | 14.0 % | **6.2 %** | 10.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 17.00 € | **15.90 €** | 15.0 % | **7.5 %** | 14.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Testovanie zariadenia USB Uni-T UT658LOAD | 16.00 € | **14.90 €** | 14.8 % | **6.9 %** | 13.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria AAA MediaRange nabíjateľné USB-C Li-Ion , 1,... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný generátor signálu FNIRSI SG-002 | 17.00 € | **15.90 €** | 13.8 % | **6.4 %** | 15.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 7.50 € | **6.40 €** | 48.0 % | **26.3 %** | 6.49 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.49 € | stávame sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 13.00 € | **11.90 €** | 47.8 % | **35.3 %** | 12.00 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 13.00 € | **11.90 €** | 47.8 % | **35.3 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 17.00 € | **15.90 €** | 36.8 % | **28.0 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 12.00 € | **10.90 €** | 52.2 % | **38.2 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **9.90 €** | 54.5 % | **39.0 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 14.00 € | **12.90 €** | 52.8 % | **40.8 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 15.00 € | **13.90 €** | 54.0 % | **42.7 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **9.90 €** | 52.9 % | **37.6 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **4.00 €** | 54.1 % | **20.9 %** | 4.10 € | stávame sa najlacnejší |
| Tefal BC50D2V0 | 17.00 € | **15.90 €** | 17.2 % | **9.6 %** | 16.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 9.20 € | **8.10 €** | 47.8 % | **30.1 %** | 8.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 10.50 € | **9.40 €** | 50.0 % | **34.3 %** | 9.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 6.50 € | **5.40 €** | 48.4 % | **23.3 %** | 5.50 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **10.90 €** | 49.6 % | **35.9 %** | 11.00 € | stávame sa najlacnejší |
| ETA 0028 92020 | 68.00 € | **66.90 €** | 11.8 % | **10.0 %** | 67.00 € | stávame sa najlacnejší |
| Slúchadlá Niceboy HIVE Beans Concert | 79.90 € | **78.90 €** | 6.4 % | **5.1 %** | 39.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 67W Charging Combo (Type-A) EU | 24.50 € | **23.50 €** | 10.5 % | **6.0 %** | 14.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka HMS Premium MP12 světle šedá | 33.90 € | **32.90 €** | 8.4 % | **5.2 %** | 23.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka HMS Premium MP12 tmavě šedá | 33.90 € | **32.90 €** | 8.4 % | **5.2 %** | 23.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI Síto pro FD1000 ULTRA | 14.50 € | **13.50 €** | 13.0 % | **5.2 %** | 5.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.90 € | **35.90 €** | 9.1 % | **6.1 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-BL | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 9.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska cest. PENTA 1,5l ner. | 20.90 € | **19.90 €** | 10.9 % | **5.6 %** | 14.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-BK | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 16.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Coox Quiche forma 3 díly se skleněnou po | 20.90 € | **19.90 €** | 11.1 % | **5.8 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B -4239 čtverec | 21.90 € | **20.90 €** | 10.9 % | **5.9 %** | 15.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-TI | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 16.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (čierny) | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechnoLine WS 8005 digitální budík | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 17.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-TU | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica Norma J9073A4 set | 23.90 € | **22.90 €** | 11.0 % | **6.3 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Podsie 4 POP White | 19.50 € | **18.50 €** | 11.8 % | **6.1 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 8.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska s pum.CUL.1,9l černá | 21.50 € | **20.50 €** | 12.6 % | **7.3 %** | 18.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi N300 Extender (DAP-1325) | 20.50 € | **19.50 €** | 11.0 % | **5.6 %** | 17.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco ESPRESSO BARISTA 1kg | 19.50 € | **18.50 €** | 12.5 % | **6.8 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-546 Color | 20.90 € | **19.90 €** | 11.9 % | **6.6 %** | 18.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Blue) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 8.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Beige) | 13.50 € | **12.50 €** | 16.3 % | **7.7 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Yellow) | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 11.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.50 €** | 8.6 % | **5.5 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 15.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skúšačka UNI-T UT18D vadaska | 42.90 € | **41.90 €** | 7.5 % | **5.0 %** | 41.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **20.90 €** | 11.3 % | **6.2 %** | 20.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.50 € | **12.50 €** | 14.1 % | **5.6 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Bluetooth Speaker Essential Green | 14.90 € | **13.90 €** | 12.7 % | **5.1 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G4002300 Odstraňovač žmolků | 22.90 € | **21.90 €** | 10.6 % | **5.8 %** | 21.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.0 % | **6.2 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **25.50 €** | 10.9 % | **6.8 %** | 25.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio Fx 85 Es Plus 2E | 20.50 € | **19.50 €** | 12.4 % | **6.9 %** | 19.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal J1640574 | 24.50 € | **23.50 €** | 10.9 % | **6.4 %** | 23.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 10.8 % | **5.9 %** | 21.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Podlahový mop Picobello M Micro | 19.50 € | **18.50 €** | 11.2 % | **5.5 %** | 18.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise rendlík 20 cm | 24.50 € | **23.50 €** | 10.7 % | **6.1 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.50 € | **15.50 €** | 13.2 % | **6.3 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.50 €** | 10.5 % | **6.8 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.50 € | **19.50 €** | 11.3 % | **5.9 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C100 WiFi camera | 23.50 € | **22.50 €** | 10.3 % | **5.6 %** | 22.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 14.90 € | **13.90 €** | 12.8 % | **5.2 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 18.50 € | **17.50 €** | 11.4 % | **5.3 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.3 % | **6.3 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 9.10 € | **8.10 €** | 55.1 % | **38.1 %** | 8.13 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.50 €** | 45.5 % | **38.8 %** | 20.54 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.50 €** | 15.0 % | **13.1 %** | 61.54 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.95 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.95 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.95 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.90 € | **19.90 €** | 21.3 % | **15.5 %** | 19.96 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.08 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **24.50 €** | 15.8 % | **11.3 %** | 24.58 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.00 € | **22.00 €** | 13.1 % | **8.2 %** | 22.09 € | stávame sa najlacnejší |
| Náhradní filtrační kapsle GARNI BS 45T | 17.50 € | **16.50 €** | 24.6 % | **17.5 %** | 16.59 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.50 €** | 44.6 % | **36.3 %** | 16.59 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.90 € | **35.90 €** | 11.1 % | **8.1 %** | 36.00 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.90 € | **11.90 €** | 38.5 % | **27.8 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.90 € | **11.90 €** | 38.5 % | **27.8 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **11.90 €** | 47.3 % | **35.9 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.90 € | **9.90 €** | 54.1 % | **40.0 %** | 10.00 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.50 €** | 50.3 % | **36.0 %** | 9.60 € | stávame sa najlacnejší |
| Graef S 10005 | 113.90 € | **112.90 €** | 10.4 % | **9.4 %** | 113.00 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.90 € | **59.90 €** | 10.7 % | **8.9 %** | 60.00 € | stávame sa najlacnejší |
| TEFAL XA 800512 | 17.90 € | **16.90 €** | 12.5 % | **6.2 %** | 17.00 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **64.90 €** | 10.2 % | **8.5 %** | 65.00 € | stávame sa najlacnejší |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.90 € | **35.90 €** | 10.0 % | **7.0 %** | 36.00 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 10 W | 1227.90 € | **1226.90 €** | 15.0 % | **14.9 %** | 1227.00 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.90 € | **18.90 €** | 42.5 % | **35.4 %** | 19.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.90 € | **2.90 €** | 46.1 % | **8.7 %** | 3.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **11.90 €** | 46.9 % | **35.5 %** | 12.00 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.90 € | **19.90 €** | 10.4 % | **5.1 %** | 20.00 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.90 € | **21.90 €** | 10.1 % | **5.3 %** | 22.00 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 234.90 € | **233.90 €** | 42339.0 % | **42158.4 %** | 234.00 € | stávame sa najlacnejší |
| Beko BMTD37146W | 384.90 € | **383.90 €** | 6.9 % | **6.6 %** | 384.00 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 15.50 € | **14.50 €** | 53.9 % | **43.9 %** | 14.61 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit AIR X2 Carplay/Android ... | 32.50 € | **31.50 €** | 14.9 % | **11.4 %** | 31.65 € | stávame sa najlacnejší |
| Ring light with phone holder PULUZ | 14.50 € | **13.50 €** | 16.4 % | **8.3 %** | 13.67 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 59.50 € | **58.50 €** | 8.3 % | **6.5 %** | 58.69 € | stávame sa najlacnejší |
| Diaľkový spúšťač GODOX X3 TTL pre Canon | 73.00 € | **72.00 €** | 14.7 % | **13.1 %** | 72.20 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.50 €** | 14.9 % | **12.1 %** | 39.71 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **28.00 €** | 14.8 % | **10.9 %** | 28.21 € | stávame sa najlacnejší |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 15.50 € | **14.50 €** | 13.9 % | **6.6 %** | 14.72 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 21.50 € | **20.50 €** | 16.1 % | **10.7 %** | 20.75 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.50 €** | 15.6 % | **9.0 %** | 16.75 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.50 €** | 15.0 % | **12.0 %** | 36.79 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900G (čierna) | 51.00 € | **50.00 €** | 14.5 % | **12.2 %** | 50.30 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 20.50 € | **19.50 €** | 15.4 % | **9.8 %** | 19.80 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 18.50 € | **17.50 €** | 41.2 % | **33.6 %** | 17.81 € | stávame sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.81 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 72.00 € | **71.00 €** | 14.7 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.33 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 195.50 € | **194.50 €** | 10.0 % | **9.5 %** | 194.83 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 12.50 € | **11.50 €** | 53.1 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 42.50 € | **41.50 €** | 18.9 % | **16.1 %** | 41.85 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 13.50 € | **12.50 €** | 15.3 % | **6.8 %** | 12.89 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 29.50 € | **28.50 €** | 37.8 % | **33.2 %** | 28.90 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 11.50 € | **10.50 €** | 36.1 % | **24.3 %** | 10.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.50 €** | 47.4 % | **37.2 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **17.50 €** | 39.0 % | **31.5 %** | 17.90 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 24.50 € | **23.50 €** | 15.9 % | **11.2 %** | 23.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.50 € | **29.50 €** | 37.5 % | **33.0 %** | 29.90 € | stávame sa najlacnejší |
| DOMO DO465FR | 66.50 € | **65.50 €** | 10.2 % | **8.6 %** | 65.90 € | stávame sa najlacnejší |
| GODOX LUX Junior Retro blesk | 63.50 € | **62.50 €** | 15.4 % | **13.6 %** | 62.90 € | stávame sa najlacnejší |
| Zircon Monoblok Single M-0143 Slim line Skylink | 12.50 € | **11.50 €** | 36.4 % | **25.5 %** | 11.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (béžové) | 38.50 € | **37.50 €** | 15.5 % | **12.5 %** | 37.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (sivé) | 38.50 € | **37.50 €** | 15.5 % | **12.5 %** | 37.90 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Night 160 ml | 12.00 € | **11.00 €** | 23.0 % | **12.8 %** | 11.42 € | stávame sa najlacnejší |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790... | 36.00 € | **35.00 €** | 22.3 % | **18.9 %** | 35.49 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.00 €** | 47.2 % | **41.8 %** | 26.50 € | stávame sa najlacnejší |
| Solight profesionálny multimeter | 14.00 € | **13.00 €** | 29.5 % | **20.2 %** | 13.50 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.00 €** | 41.0 % | **36.6 %** | 31.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 11.00 € | **10.00 €** | 48.1 % | **34.6 %** | 10.50 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.00 €** | 46.4 % | **39.5 %** | 20.50 € | stávame sa najlacnejší |
| ETA Verto II 1423 90000 bílý/zlatý | 31.00 € | **30.00 €** | 12.1 % | **8.4 %** | 30.50 € | stávame sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 25.00 € | **24.00 €** | 9.6 % | **5.2 %** | 24.50 € | stávame sa najlacnejší |
| SONY WFC510L modrá | 38.00 € | **37.00 €** | 12.1 % | **9.2 %** | 37.50 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 17.00 € | **16.00 €** | 40.2 % | **31.9 %** | 16.50 € | stávame sa najlacnejší |
| TP-LINK Archer T3U WiFi Adaptér | 16.90 € | **15.90 €** | 11.9 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **15.90 €** | 38.6 % | **30.4 %** | 16.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 16.90 € | **15.90 €** | 12.6 % | **6.0 %** | 16.00 € | stávame sa najlacnejší |
| Whirlpool OMK38HU0B | 248.90 € | **248.00 €** | 5.4 % | **5.0 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 83.90 € | **83.00 €** | 10.4 % | **9.2 %** | 83.20 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 97.90 € | **97.00 €** | 20.2 % | **19.1 %** | 97.50 € | stávame sa najlacnejší |
| G3Ferrari G1022600 | 120.90 € | **120.00 €** | 10.2 % | **9.4 %** | 120.50 € | stávame sa najlacnejší |
| Girmi FG4101 | 139.90 € | **139.00 €** | 10.1 % | **9.3 %** | 139.50 € | stávame sa najlacnejší |
| Girmi FG9201 | 116.90 € | **116.00 €** | 10.1 % | **9.2 %** | 116.50 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.90 € | **110.00 €** | 10.2 % | **9.3 %** | 110.50 € | stávame sa najlacnejší |
| Fixed Video kabel FIXHU-CHDMI-GR | 15.90 € | **15.00 €** | 11.5 % | **5.2 %** | 11.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica Bi-Flux Cartridge 3+1ks | 15.90 € | **15.00 €** | 11.6 % | **5.3 %** | 13.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G2017100 kuchyňská váha | 15.90 € | **15.00 €** | 11.4 % | **5.1 %** | 14.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 12.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **14.00 €** | 21.9 % | **14.5 %** | 14.04 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 8.40 € | **7.50 €** | 38.0 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.50 € | **4.60 €** | 46.6 % | **22.6 %** | 4.70 € | stávame sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.10 €** | 48.6 % | **35.3 %** | 9.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.20 € | **5.30 €** | 49.1 % | **27.5 %** | 5.40 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.60 €** | 55.8 % | **30.3 %** | 4.70 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **12.00 €** | 47.7 % | **37.4 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.00 €** | 40.4 % | **28.8 %** | 10.50 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.00 €** | 20.5 % | **11.4 %** | 11.50 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.00 €** | 46.2 % | **34.2 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 11.90 € | **11.00 €** | 38.6 % | **28.1 %** | 11.50 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **12.00 €** | 31.1 % | **22.0 %** | 12.50 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.00 €** | 13.8 % | **5.2 %** | 11.50 € | stávame sa najlacnejší |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 13.90 € | **13.00 €** | 49.7 % | **40.0 %** | 13.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.90 € | **13.00 €** | 35.8 % | **27.0 %** | 13.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.00 €** | 49.2 % | **40.2 %** | 14.50 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **13.00 €** | 14.8 % | **7.4 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.50 € | **3.60 €** | 55.0 % | **24.0 %** | 3.70 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.80 € | **5.90 €** | 54.0 % | **33.6 %** | 6.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.60 € | **7.70 €** | 47.5 % | **32.1 %** | 7.80 € | stávame sa najlacnejší |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.90 € | **19.00 €** | 10.3 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 43.90 € | **43.00 €** | 8.6 % | **6.4 %** | 43.09 € | stávame sa najlacnejší |
| Cycplus AS230 PRO DP5 PRO Mini Bike Pump | 45.90 € | **45.00 €** | 15.0 % | **12.8 %** | 45.25 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.90 € | **43.00 €** | 15.0 % | **12.6 %** | 43.29 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 23.90 € | **23.00 €** | 48.8 % | **43.2 %** | 23.29 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 28.90 € | **28.00 €** | 50.1 % | **45.5 %** | 28.36 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **17.00 €** | 16.2 % | **10.4 %** | 17.42 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 21.90 € | **21.00 €** | 50.3 % | **44.1 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **47.00 €** | 38.5 % | **35.9 %** | 47.50 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **39.00 €** | 38.6 % | **35.4 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.00 €** | 38.4 % | **33.2 %** | 23.50 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **16.00 €** | 38.2 % | **30.9 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 31.90 € | **31.00 €** | 55.0 % | **50.6 %** | 31.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.00 €** | 38.3 % | **33.3 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 26.90 € | **26.00 €** | 38.7 % | **34.0 %** | 26.50 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **27.00 €** | 11.2 % | **7.6 %** | 27.50 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.00 €** | 10.2 % | **7.5 %** | 36.50 € | stávame sa najlacnejší |
| Tefal Copertinto BL439G10 | 59.90 € | **59.00 €** | 10.5 % | **8.8 %** | 59.50 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.00 €** | 10.5 % | **8.1 %** | 40.50 € | stávame sa najlacnejší |
| Russell Hobbs 23840-70 | 18.90 € | **18.00 €** | 12.3 % | **7.0 %** | 18.50 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.00 €** | 10.7 % | **7.9 %** | 35.50 € | stávame sa najlacnejší |
| Gorenje MVC72HGA | 29.90 € | **29.00 €** | 10.1 % | **6.8 %** | 29.50 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 30.90 € | **30.00 €** | 54.8 % | **50.3 %** | 30.50 € | stávame sa najlacnejší |
| Aligator Reproduktor pro MagSafe ABSMB01 | 16.90 € | **16.00 €** | 25.5 % | **18.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.00 €** | 42.5 % | **37.9 %** | 27.50 € | stávame sa najlacnejší |
| Hrazda do dveří Trizand 24784 | 16.90 € | **16.00 €** | 15.0 % | **8.9 %** | 16.50 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 334.90 € | **334.00 €** | 7.1 % | **6.8 %** | 334.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 9.30 € | **8.50 €** | 48.5 % | **35.8 %** | 8.54 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 5.40 € | **4.60 €** | 55.1 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 5.40 € | **4.60 €** | 48.8 % | **26.8 %** | 4.70 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **3.90 €** | 45.3 % | **20.6 %** | 4.00 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.50 € | **6.70 €** | 46.2 % | **30.6 %** | 6.74 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 3.30 € | **2.50 €** | 55.1 % | **17.5 %** | 2.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.80 € | **5.00 €** | 48.8 % | **28.2 %** | 5.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.70 € | **6.90 €** | 47.6 % | **32.3 %** | 7.00 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 5.10 € | **4.30 €** | 55.3 % | **30.9 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 8.30 € | **7.60 €** | 55.5 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **8.70 €** | 48.4 % | **37.3 %** | 8.80 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.70 €** | 54.1 % | **42.6 %** | 8.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.30 € | **7.60 €** | 47.0 % | **34.6 %** | 7.70 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 3.50 € | **2.80 €** | 49.0 % | **19.2 %** | 2.85 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.90 € | **7.20 €** | 55.5 % | **41.7 %** | 7.30 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.60 €** | 42.7 % | **29.0 %** | 6.70 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.70 € | **3.00 €** | 56.7 % | **27.0 %** | 3.10 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.50 € | **2.80 €** | 48.2 % | **18.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.90 € | **7.20 €** | 47.3 % | **34.3 %** | 7.30 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.60 € | **2.90 €** | 48.6 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.20 €** | 47.1 % | **29.7 %** | 5.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 7.70 € | **7.00 €** | 48.0 % | **34.5 %** | 7.10 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.90 € | **5.20 €** | 51.3 % | **33.4 %** | 5.30 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 4.40 € | **3.70 €** | 52.9 % | **28.6 %** | 3.80 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.10 € | **3.40 €** | 54.3 % | **28.0 %** | 3.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.60 € | **7.90 €** | 47.2 % | **35.2 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 9.00 € | **8.30 €** | 54.0 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 9.60 € | **8.90 €** | 54.2 % | **43.0 %** | 9.00 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.30 €** | 53.4 % | **42.7 %** | 9.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.50 €** | 47.8 % | **35.2 %** | 7.60 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 7.10 € | **6.40 €** | 55.2 % | **39.9 %** | 6.50 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 953.50 € | **952.90 €** | 15.0 % | **14.9 %** | 953.00 € | stávame sa najlacnejší |
| TP-LINK TL-WA850RE Wireless N Extender | 20.50 € | **19.90 €** | 10.4 % | **7.1 %** | 8.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Adaptér BOYA BY-BCA6 na sluchátka z XLR do TRS | 24.50 € | **23.90 €** | 8.8 % | **6.2 %** | 14.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Breakfast Bollitore 2846, černá | 17.50 € | **16.90 €** | 10.5 % | **6.8 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM58 ruční všesměrový | 32.50 € | **31.90 €** | 8.2 % | **6.2 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-300 DVBT2 H265 přijímač (HDMI CEC) | 22.50 € | **21.90 €** | 8.9 % | **6.0 %** | 20.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.90 €** | 10.2 % | **6.9 %** | 19.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 17.50 € | **16.90 €** | 11.0 % | **7.2 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt pro SG S26 FIXFLM2-1704-BK | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stabilizátor AOCHUAN X Pro Standard (čierny) | 55.50 € | **54.90 €** | 15.1 % | **13.9 %** | 54.94 € | stávame sa najlacnejší |
| Hodiny TechnoLine WT 3100 do koupelny | 24.50 € | **23.90 €** | 16.2 % | **13.4 %** | 23.96 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.90 €** | 15.7 % | **13.2 %** | 26.96 € | stávame sa najlacnejší |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 25.50 € | **24.90 €** | 18.9 % | **16.1 %** | 24.99 € | stávame sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **19.90 €** | 48.5 % | **44.2 %** | 20.00 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **21.90 €** | 12.0 % | **9.0 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **17.90 €** | 39.0 % | **34.5 %** | 18.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **18.90 €** | 38.3 % | **34.1 %** | 19.00 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.50 € | **21.90 €** | 38.4 % | **34.7 %** | 22.00 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **18.90 €** | 12.4 % | **9.0 %** | 19.00 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **22.90 €** | 11.9 % | **9.1 %** | 23.00 € | stávame sa najlacnejší |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.50 € | **25.90 €** | 32.5 % | **29.5 %** | 26.00 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **21.90 €** | 10.3 % | **7.4 %** | 22.00 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **32.90 €** | 11.1 % | **9.1 %** | 33.00 € | stávame sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **16.90 €** | 11.5 % | **7.7 %** | 17.00 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **23.90 €** | 11.5 % | **8.7 %** | 24.00 € | stávame sa najlacnejší |
| DOMO DO9283EK | 18.50 € | **17.90 €** | 12.7 % | **9.1 %** | 18.00 € | stávame sa najlacnejší |
| Braun SI1040GR | 26.50 € | **25.90 €** | 11.2 % | **8.7 %** | 26.00 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **16.90 €** | 11.2 % | **7.4 %** | 17.00 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.90 €** | 10.9 % | **8.4 %** | 26.00 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **16.90 €** | 42.8 % | **38.0 %** | 17.00 € | stávame sa najlacnejší |
| Strong SRT84 Terestriální HDMI přijímač | 28.50 € | **27.90 €** | 11.1 % | **8.7 %** | 28.00 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **17.90 €** | 10.0 % | **6.5 %** | 18.00 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **7.70 €** | 55.5 % | **44.2 %** | 7.74 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.40 € | **4.80 €** | 48.3 % | **31.8 %** | 4.89 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.70 €** | 55.5 % | **44.2 %** | 7.80 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **7.70 €** | 47.7 % | **37.0 %** | 7.80 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.10 €** | 55.2 % | **41.3 %** | 6.20 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.40 € | **6.80 €** | 55.1 % | **42.5 %** | 6.90 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.40 € | **3.80 €** | 47.8 % | **27.7 %** | 3.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.10 €** | 49.3 % | **30.2 %** | 4.20 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.10 €** | 46.8 % | **33.7 %** | 6.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.70 € | **5.10 €** | 48.5 % | **32.9 %** | 5.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.60 €** | 48.7 % | **34.3 %** | 5.70 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.10 € | **1.50 €** | 51.1 % | **7.9 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.48 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.60 €** | 55.9 % | **33.6 %** | 3.70 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.70 € | **2.10 €** | 52.4 % | **18.6 %** | 2.20 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.80 €** | 55.3 % | **27.9 %** | 2.90 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.70 € | **2.10 €** | 50.4 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.30 €** | 53.2 % | **29.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.20 € | **2.60 €** | 54.9 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.90 € | **3.30 €** | 53.2 % | **29.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.60 €** | 54.9 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.10 €** | 55.1 % | **29.9 %** | 3.20 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **2.60 €** | 54.9 % | **25.8 %** | 2.70 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.10 €** | 55.1 % | **29.9 %** | 3.20 € | stávame sa najlacnejší |
| Fixed řemínek AWU 49mm FIXNST2-1029-RD | 16.50 € | **15.90 €** | 10.7 % | **6.7 %** | 4.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 655 Yellow, CZ112AE | 16.50 € | **15.90 €** | 10.9 % | **6.8 %** | 9.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák MagMount Vent FIXMMT-V-BK | 14.50 € | **13.90 €** | 11.2 % | **6.6 %** | 10.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U AC600 WiFi Adaptér | 12.50 € | **11.90 €** | 12.8 % | **7.4 %** | 9.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks Breakfast Blend káva 450g | 16.50 € | **15.90 €** | 10.2 % | **6.2 %** | 13.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks® Blonde Espresso Roast 450 g | 15.50 € | **14.90 €** | 10.0 % | **5.8 %** | 12.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo L530E | 11.50 € | **10.90 €** | 11.4 % | **5.6 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 10.9 % | **6.3 %** | 12.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.90 €** | 12.5 % | **7.8 %** | 12.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm černý | 13.50 € | **12.90 €** | 10.0 % | **5.1 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm světle šedý | 13.50 € | **12.90 €** | 10.0 % | **5.1 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks Colombia Medium Roast 450 g | 15.50 € | **14.90 €** | 10.0 % | **5.8 %** | 13.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí bezdrátová podložka pro telefony Compass | 16.50 € | **15.90 €** | 10.8 % | **6.7 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB02N 75 cm šedo-stříbrný | 13.50 € | **12.90 €** | 10.0 % | **5.1 %** | 12.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **11.90 €** | 12.5 % | **7.1 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.90 €** | 16.1 % | **10.6 %** | 11.92 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.50 € | **9.90 €** | 53.0 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 10.00 € | **9.40 €** | 35.1 % | **26.9 %** | 9.46 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **10.90 €** | 49.6 % | **41.8 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **10.90 €** | 49.6 % | **41.8 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 14.00 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **12.90 €** | 56.1 % | **49.2 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **14.90 €** | 46.0 % | **40.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **7.90 €** | 53.9 % | **43.0 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **10.90 €** | 38.3 % | **31.1 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **6.90 €** | 54.8 % | **42.4 %** | 7.00 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.10 € | **6.50 €** | 55.2 % | **42.1 %** | 6.60 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.50 €** | 55.2 % | **42.1 %** | 6.60 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **14.90 €** | 47.4 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **12.90 €** | 47.1 % | **40.6 %** | 13.00 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 7.30 € | **6.70 €** | 54.6 % | **41.9 %** | 6.80 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 14.50 € | **13.90 €** | 12.3 % | **7.6 %** | 14.00 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **10.90 €** | 12.9 % | **7.0 %** | 11.00 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **12.90 €** | 13.7 % | **8.7 %** | 13.00 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **12.90 €** | 13.2 % | **8.1 %** | 13.00 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **12.90 €** | 33.2 % | **27.3 %** | 13.00 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **10.90 €** | 11.7 % | **5.9 %** | 11.00 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.20 €** | 45.5 % | **32.6 %** | 6.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 4.30 € | **3.70 €** | 46.3 % | **25.9 %** | 3.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 5.10 € | **4.50 €** | 48.6 % | **31.1 %** | 4.60 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **4.70 €** | 50.7 % | **33.6 %** | 4.80 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 5.30 € | **4.70 €** | 50.7 % | **33.6 %** | 4.80 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.00 €** | 53.7 % | **42.9 %** | 8.10 € | stávame sa najlacnejší |
| Záložní zdroj MHPower WPU-800-12 UPS 800W 12V čistý ... | 133.50 € | **132.90 €** | 5.6 % | **5.1 %** | 115.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash F1 (biela) + 6 ventiláto... | 116.50 € | **115.90 €** | 15.0 % | **14.4 %** | 115.93 € | stávame sa najlacnejší |
| DDPAI N1 Dual Dash cam WiFi 1296p + Rear camera 1080p | 67.50 € | **66.90 €** | 15.1 % | **14.1 %** | 66.99 € | stávame sa najlacnejší |
| Solight high bay, 200W, 28000lm, 120°, Meanwell,  50... | 94.50 € | **93.90 €** | 20.0 % | **19.3 %** | 94.00 € | stávame sa najlacnejší |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.50 € | **84.90 €** | 20.2 % | **19.3 %** | 85.00 € | stávame sa najlacnejší |
| G3Ferrari G1022300 | 136.50 € | **135.90 €** | 10.2 % | **9.7 %** | 136.00 € | stávame sa najlacnejší |
| Ariete Ice Machine 651 | 99.50 € | **98.90 €** | 10.4 % | **9.7 %** | 99.00 € | stávame sa najlacnejší |
| Maxxo HiFi Tuner TR05 | 138.50 € | **137.90 €** | 10.3 % | **9.8 %** | 138.00 € | stávame sa najlacnejší |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 123.50 € | **122.90 €** | 16.4 % | **15.8 %** | 123.00 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 67.50 € | **66.90 €** | 8.3 % | **7.4 %** | 67.00 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **104.90 €** | 10.1 % | **9.5 %** | 105.00 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.90 €** | 55.5 % | **37.9 %** | 3.96 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 2.20 € | **1.70 €** | 56.9 % | **21.2 %** | 1.80 € | stávame sa najlacnejší |
| USB WiFi adaptér duální VU+ 2,4/5GHz/600Mbps s ANTÉN... | 32.50 € | **32.00 €** | 6.8 % | **5.1 %** | 25.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE FItness MP10 modro-šedá | 25.00 € | **24.50 €** | 7.8 % | **5.7 %** | 18.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 růžovo-šedá | 25.00 € | **24.50 €** | 7.8 % | **5.7 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 zelená-mod... | 25.00 € | **24.50 €** | 7.8 % | **5.7 %** | 22.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 žlutá-modr... | 25.00 € | **24.50 €** | 7.8 % | **5.7 %** | 22.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Aromo 0064 90000 bílý | 14.00 € | **13.50 €** | 10.1 % | **6.1 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Hyper PETG Creality (zelený) | 11.00 € | **10.50 €** | 12.8 % | **7.6 %** | 10.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.5 % | **5.9 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro ME60 F 5G FIXOP3-1564-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro SG S25 FIXOP3-1504-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro pro SG S26+ FIXOP3-1705-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro XRedmi 15C FIXOP3-1576-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 15.00 € | **14.50 €** | 10.2 % | **6.5 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED 2 skla SG A37 5G FIXGFADA-1702-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed 2skla SG A17 4/5G FIXGFADA-1700-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed sklo Apple iP17PM FIXGFADA-1603-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED Sklo apl. SG S26+ FIXGFADA-1705-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED Sklo s apl.SG S26 FIXGFADA-1704-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tvrzené sklo FIXED Full-Cover s aplikáto | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 8.60 € | **8.10 €** | 45.1 % | **36.6 %** | 8.11 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Filament ELEGOO PLA+ (čierny) | 12.00 € | **11.50 €** | 14.6 % | **9.9 %** | 11.51 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **6.10 €** | 47.0 % | **35.9 %** | 6.12 € | stávame sa najlacnejší |
| Solight detektor oxidu uhoľnatého a horľavých plynov | 13.00 € | **12.50 €** | 18.0 % | **13.4 %** | 12.53 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 6.10 € | **5.60 €** | 47.2 % | **35.1 %** | 5.63 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 6.20 € | **5.70 €** | 47.4 % | **35.5 %** | 5.74 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.90 € | **5.40 €** | 48.0 % | **35.5 %** | 5.46 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.50 €** | 14.9 % | **13.8 %** | 50.56 € | stávame sa najlacnejší |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 14.00 € | **13.50 €** | 13.7 % | **9.6 %** | 13.58 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **24.50 €** | 14.5 % | **12.2 %** | 24.58 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.70 € | **5.20 €** | 47.6 % | **34.6 %** | 5.28 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.50 €** | 13.6 % | **10.5 %** | 17.58 € | stávame sa najlacnejší |
| Elektrické čerpadlo Cycplus A14 | 23.00 € | **22.50 €** | 14.2 % | **11.7 %** | 22.58 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 50m, pr... | 6.20 € | **5.70 €** | 53.7 % | **41.3 %** | 5.79 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 24.50 € | **24.00 €** | 12.2 % | **9.9 %** | 24.09 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 24.50 € | **24.00 €** | 12.2 % | **9.9 %** | 24.09 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 81.50 € | **81.00 €** | 15.1 % | **14.4 %** | 81.09 € | stávame sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-M ( 36 - 40 ) | 12.50 € | **12.00 €** | 9.6 % | **5.2 %** | 12.09 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.50 € | **2.00 €** | 54.0 % | **23.2 %** | 2.09 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.10 €** | 54.6 % | **46.5 %** | 9.20 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.80 €** | 47.1 % | **33.2 %** | 4.90 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.50 € | **5.00 €** | 54.7 % | **40.7 %** | 5.10 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.70 € | **5.20 €** | 53.4 % | **40.0 %** | 5.30 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 4.80 € | **4.30 €** | 54.9 % | **38.7 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.60 €** | 54.5 % | **41.8 %** | 5.70 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.90 € | **4.40 €** | 55.6 % | **39.7 %** | 4.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.70 €** | 53.7 % | **41.3 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.70 €** | 53.7 % | **41.3 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.90 € | **1.40 €** | 47.1 % | **8.4 %** | 1.50 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.40 €** | 40.9 % | **22.9 %** | 3.50 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.50 €** | 56.3 % | **40.7 %** | 4.60 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.10 €** | 49.0 % | **32.8 %** | 4.20 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 2.10 € | **1.60 €** | 51.1 % | **15.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.50 € | **9.00 €** | 44.1 % | **36.5 %** | 9.10 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.00 €** | 45.2 % | **34.0 %** | 6.10 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.60 €** | 46.0 % | **31.7 %** | 4.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.80 € | **3.30 €** | 48.5 % | **29.0 %** | 3.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.90 € | **3.40 €** | 48.9 % | **29.8 %** | 3.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.40 € | **4.90 €** | 47.3 % | **33.7 %** | 5.00 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 10.00 € | **9.50 €** | 46.8 % | **39.4 %** | 9.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 6.10 € | **5.60 €** | 55.0 % | **42.3 %** | 5.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.30 €** | 48.9 % | **33.4 %** | 4.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.60 € | **4.10 €** | 48.4 % | **32.3 %** | 4.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **4.90 €** | 47.3 % | **33.7 %** | 5.00 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.50 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.00 €** | 56.3 % | **25.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.50 €** | 50.8 % | **43.3 %** | 9.60 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **5.90 €** | 53.5 % | **41.5 %** | 6.00 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.00 €** | 53.0 % | **31.1 %** | 3.10 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **45.00 €** | 15.5 % | **14.3 %** | 45.11 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **45.00 €** | 15.5 % | **14.3 %** | 45.11 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.63 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 15.50 € | **15.00 €** | 60.5 % | **55.4 %** | 15.13 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **11.00 €** | 49.6 % | **43.1 %** | 11.15 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **15.00 €** | 16.8 % | **13.0 %** | 15.15 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 15.50 € | **15.00 €** | 16.1 % | **12.4 %** | 15.17 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.50 €** | 13.7 % | **10.2 %** | 15.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 29.50 € | **29.00 €** | 14.8 % | **12.8 %** | 29.19 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 3CCT, 5m, sada s 12V adapt... | 15.00 € | **14.50 €** | 48.0 % | **43.1 %** | 14.70 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 17.00 € | **16.50 €** | 36.3 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **19.00 €** | 16.3 % | **13.3 %** | 19.20 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.50 €** | 14.6 % | **11.9 %** | 20.71 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 23.00 € | **22.50 €** | 19.1 % | **16.5 %** | 22.71 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 29.50 € | **29.00 €** | 7.6 % | **5.8 %** | 29.22 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.50 € | **32.00 €** | 15.1 % | **13.3 %** | 32.23 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.50 € | **33.00 €** | 15.9 % | **14.2 %** | 33.25 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.50 € | **557.00 €** | 6.7 % | **6.6 %** | 557.25 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **14.00 €** | 16.5 % | **12.5 %** | 14.25 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **19.00 €** | 14.1 % | **11.2 %** | 19.25 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 26.50 € | **26.00 €** | 31.1 % | **28.6 %** | 26.25 € | stávame sa najlacnejší |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.50 € | **55.00 €** | 17.0 % | **16.0 %** | 55.25 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 23.00 € | **22.50 €** | 16.1 % | **13.6 %** | 22.76 € | stávame sa najlacnejší |
| Wireless controler GameSir T4n (white) | 25.50 € | **25.00 €** | 19.3 % | **16.9 %** | 25.26 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **13.00 €** | 47.5 % | **42.1 %** | 13.27 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.8 % | **8.4 %** | 10.29 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.50 € | **16.00 €** | 12.6 % | **9.2 %** | 16.29 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **27.50 €** | 14.3 % | **12.2 %** | 27.79 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.50 € | **37.00 €** | 21.8 % | **20.2 %** | 37.29 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 62.50 € | **62.00 €** | 6.5 % | **5.6 %** | 62.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 86.00 € | **85.50 €** | 8.8 % | **8.1 %** | 85.79 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **12.00 €** | 14.7 % | **10.1 %** | 12.29 € | stávame sa najlacnejší |
| Solight LED reflektor PRO, 50W, 4600lm, 5000K, IP65 | 21.00 € | **20.50 €** | 46.4 % | **42.9 %** | 20.80 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 154.50 € | **154.00 €** | 13.6 % | **13.3 %** | 154.30 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 14.00 € | **13.50 €** | 14.5 % | **10.4 %** | 13.83 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash B275 (biela) | 29.00 € | **28.50 €** | 14.9 % | **12.9 %** | 28.83 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 69.50 € | **69.00 €** | 9.7 % | **8.9 %** | 69.35 € | stávame sa najlacnejší |
| Herné reproduktory Onikuma L2 | 12.50 € | **12.00 €** | 16.4 % | **11.8 %** | 12.37 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.50 €** | 13.4 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.50 € | **22.00 €** | 11.7 % | **9.3 %** | 22.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.00 € | **21.50 €** | 9.3 % | **6.8 %** | 21.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.00 € | **17.50 €** | 9.5 % | **6.5 %** | 17.89 € | stávame sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.00 € | **19.50 €** | 9.6 % | **6.8 %** | 19.89 € | stávame sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 103.00 € | **102.50 €** | 27.7 % | **27.1 %** | 102.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 323.00 € | **322.50 €** | 10.0 % | **9.9 %** | 322.89 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1293.50 € | **1293.00 €** | 7.2 % | **7.2 %** | 1293.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 139.50 € | **139.00 €** | 7.9 % | **7.5 %** | 139.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 57.50 € | **57.00 €** | 19.4 % | **18.4 %** | 57.39 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 287.50 € | **287.00 €** | 14.9 % | **14.7 %** | 287.39 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 26.50 € | **26.00 €** | 17.2 % | **15.0 %** | 26.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 27.00 € | **26.50 €** | 15.5 % | **13.4 %** | 26.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 31.50 € | **31.00 €** | 7.0 % | **5.3 %** | 31.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 23.00 € | **22.50 €** | 9.1 % | **6.7 %** | 22.89 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 58.00 € | **57.50 €** | 16.4 % | **15.4 %** | 57.89 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 205.50 € | **205.00 €** | 10.7 % | **10.4 %** | 205.39 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 277.50 € | **277.00 €** | 6.9 % | **6.7 %** | 277.39 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 65.50 € | **65.00 €** | 8.9 % | **8.1 %** | 65.39 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 44.50 € | **44.00 €** | 12.6 % | **11.3 %** | 44.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 110.50 € | **110.00 €** | 8.5 % | **8.0 %** | 110.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 238.50 € | **238.00 €** | 7.9 % | **7.7 %** | 238.39 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 135.00 € | **134.50 €** | 8.3 % | **7.9 %** | 134.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 117.00 € | **116.50 €** | 6.9 % | **6.4 %** | 116.89 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 268.50 € | **268.00 €** | 6.1 % | **5.9 %** | 268.39 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 205.00 € | **204.50 €** | 7.8 % | **7.5 %** | 204.89 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 191.00 € | **190.50 €** | 7.9 % | **7.6 %** | 190.89 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.50 €** | 38.4 % | **35.1 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.50 €** | 63.6 % | **62.0 %** | 49.90 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 22.00 € | **21.50 €** | 38.4 % | **35.3 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 37.4 % | **34.1 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.00 € | **11.50 €** | 52.9 % | **46.5 %** | 11.90 € | stávame sa najlacnejší |
| Solight pištoľ spájkovacia 100W sada | 12.00 € | **11.50 €** | 18.4 % | **13.5 %** | 11.90 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.50 €** | 33.9 % | **32.3 %** | 39.90 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.50 €** | 31.9 % | **25.9 %** | 10.90 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.50 €** | 31.9 % | **25.9 %** | 10.90 € | stávame sa najlacnejší |
| Beper BEP-BP654 | 27.00 € | **26.50 €** | 10.4 % | **8.3 %** | 26.90 € | stávame sa najlacnejší |
| Solight 40mm kulma na dlhé vlasy pre Dyson Airwrap (... | 21.00 € | **20.50 €** | 30.3 % | **27.2 %** | 20.90 € | stávame sa najlacnejší |
| Bravo B-4813 Žehlička SERENA červená | 46.00 € | **45.50 €** | 10.1 % | **8.9 %** | 45.90 € | stávame sa najlacnejší |
| Držiak BOYA BY-PB25 2,5m teleskopická tyč závit 1/4” | 102.50 € | **102.00 €** | 18.7 % | **18.2 %** | 102.40 € | stávame sa najlacnejší |
| Philips TAK5500AL bezdrátová sluchátka | 57.00 € | **56.50 €** | 10.0 % | **9.1 %** | 56.90 € | stávame sa najlacnejší |
| Philips TAT3509GY Bezdrátová sluchátka | 47.00 € | **46.50 €** | 10.2 % | **9.0 %** | 46.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **21.00 €** | 15.1 % | **12.4 %** | 21.42 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **29.00 €** | 14.9 % | **13.0 %** | 29.44 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 50.3 % | **46.6 %** | 20.45 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Fashion Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.50 € | **90.00 €** | 15.1 % | **14.5 %** | 90.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creality (Gold) | 17.50 € | **17.00 €** | 14.4 % | **11.1 %** | 17.49 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.50 € | **47.00 €** | 8.1 % | **6.9 %** | 47.49 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.80 €** | 57.1 % | **23.0 %** | 1.90 € | stávame sa najlacnejší |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.90 € | **83.50 €** | 18.3 % | **17.8 %** | 83.79 € | stávame sa najlacnejší |
| Nescafé Dolce Gusto Latte Macchiato 30ca | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 4.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR009001 | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.50 €** | 11.3 % | **8.4 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Plus WiFi Adaptér | 14.90 € | **14.50 €** | 11.0 % | **8.1 %** | 11.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-V-BK | 12.90 € | **12.50 €** | 11.5 % | **8.0 %** | 10.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto ESPRESSO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo TopSound černý | 12.90 € | **12.50 €** | 10.1 % | **6.6 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAFE AU LAIT 30Cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESCAFÉ® DG Flat White kapsle 30 ks | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.50 €** | 11.0 % | **8.2 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 13.90 € | **13.50 €** | 10.1 % | **7.0 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAPPUCCINO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 9.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Razer Goliathus Mobile Stealth Ed. | 10.90 € | **10.50 €** | 13.2 % | **9.0 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.90 € | **12.50 €** | 12.8 % | **9.3 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.50 €** | 11.6 % | **8.7 %** | 14.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo vodní filtry 3+1 | 11.90 € | **11.50 €** | 11.2 % | **7.5 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 12.9 % | **9.1 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 11.9 % | **7.8 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.1 % | **7.3 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.80 €** | 49.4 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 4.20 € | **3.80 €** | 48.5 % | **34.3 %** | 3.87 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.59 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.59 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 4.70 € | **4.30 €** | 52.8 % | **39.8 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 4.50 € | **4.10 €** | 53.7 % | **40.1 %** | 4.20 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.50 €** | 38.5 % | **30.5 %** | 6.60 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 3.20 € | **2.80 €** | 46.2 % | **27.9 %** | 2.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 9.10 € | **8.70 €** | 36.2 % | **30.3 %** | 8.80 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 9.10 € | **8.70 €** | 42.3 % | **36.0 %** | 8.80 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.50 €** | 47.7 % | **43.8 %** | 14.62 € | stávame sa najlacnejší |
| Selfie tyč Puluz pre Insta360 One RS / X2 / X3 / X4 ... | 12.90 € | **12.50 €** | 15.3 % | **11.7 %** | 12.67 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.90 € | **13.50 €** | 13.7 % | **10.4 %** | 13.69 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **13.50 €** | 20.3 % | **16.9 %** | 13.71 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.50 €** | 16.5 % | **13.2 %** | 13.79 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 11.90 € | **11.50 €** | 17.4 % | **13.5 %** | 11.79 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 15.90 € | **15.50 €** | 9.5 % | **6.7 %** | 15.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 680 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.90 € | **12.50 €** | 18.6 % | **15.0 %** | 12.82 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.90 € | **14.50 €** | 15.7 % | **12.6 %** | 14.88 € | stávame sa najlacnejší |
| Solight bezpečnostná zátka - sada 5ks+1 kľúčik | 1.60 € | **1.20 €** | 60.6 % | **20.4 %** | 1.30 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.20 €** | 58.6 % | **19.0 %** | 1.30 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.60 € | **1.20 €** | 51.3 % | **13.4 %** | 1.30 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 2.10 € | **1.70 €** | 52.4 % | **23.4 %** | 1.80 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.70 €** | 55.2 % | **25.6 %** | 1.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.70 €** | 47.2 % | **19.1 %** | 1.80 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, natura... | 2.40 € | **2.00 €** | 54.9 % | **29.0 %** | 2.03 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.60 € | **3.20 €** | 48.6 % | **32.1 %** | 3.25 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 3.10 € | **2.70 €** | 50.0 % | **30.7 %** | 2.77 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.10 €** | 55.5 % | **37.7 %** | 3.20 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.60 €** | 56.3 % | **25.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.60 € | **2.20 €** | 48.9 % | **26.0 %** | 2.30 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.30 €** | 44.0 % | **10.1 %** | 1.40 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.30 € | **2.90 €** | 49.1 % | **31.0 %** | 3.00 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.60 € | **3.20 €** | 46.3 % | **30.1 %** | 3.30 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.40 € | **3.00 €** | 46.3 % | **29.0 %** | 3.10 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.40 € | **3.00 €** | 47.0 % | **29.7 %** | 3.10 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.90 € | **2.50 €** | 48.3 % | **27.8 %** | 2.60 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **2.90 €** | 49.9 % | **31.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.60 €** | 49.6 % | **29.7 %** | 2.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.30 € | **3.90 €** | 46.9 % | **33.2 %** | 4.00 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.40 €** | 48.8 % | **27.5 %** | 2.50 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.90 €** | 52.0 % | **25.6 %** | 2.00 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.21 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.10 € | **3.70 €** | 54.3 % | **39.3 %** | 3.80 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 5.10 € | **4.70 €** | 40.1 % | **29.1 %** | 4.80 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.51 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.50 €** | 15.8 % | **13.8 %** | 22.54 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.20 € | **8.80 €** | 37.7 % | **31.8 %** | 8.90 € | stávame sa najlacnejší |
| Cabletech UCH0022-S | 20.90 € | **20.50 €** | 8.5 % | **6.4 %** | 20.68 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.69 € | stávame sa najlacnejší |
| Uni-T UT201R digitálny klešťový multimeter | 22.90 € | **22.50 €** | 16.0 % | **14.0 %** | 22.69 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.50 €** | 15.1 % | **14.4 %** | 63.71 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.90 € | **28.50 €** | 31.0 % | **29.2 %** | 28.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.80 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.90 € | **16.50 €** | 18.2 % | **15.4 %** | 16.80 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.90 € | **36.50 €** | 17.5 % | **16.2 %** | 36.82 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.90 € | **36.50 €** | 17.8 % | **16.6 %** | 36.82 € | stávame sa najlacnejší |
| Bezkontaktný laserový teplomer Habotest HT650B | 17.90 € | **17.50 €** | 15.2 % | **12.6 %** | 17.83 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.50 €** | 14.9 % | **13.4 %** | 29.84 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.90 € | **18.50 €** | 20.0 % | **17.5 %** | 18.89 € | stávame sa najlacnejší |
| Maxxo Chamber Line 70 | 360.90 € | **360.50 €** | 10.0 % | **9.9 %** | 360.89 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 7.90 € | **7.60 €** | 48.7 % | **43.0 %** | 7.70 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.70 €** | 38.7 % | **34.6 %** | 9.80 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 4ks, 6,5cm, ba... | 10.00 € | **9.70 €** | 53.4 % | **48.8 %** | 9.80 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 9.00 € | **8.70 €** | 47.5 % | **42.6 %** | 8.80 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.80 €** | 52.7 % | **38.0 %** | 2.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.20 € | **2.90 €** | 53.9 % | **39.5 %** | 3.00 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.60 € | **2.30 €** | 47.8 % | **30.8 %** | 2.40 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 2.00 € | **1.70 €** | 54.9 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.30 € | **1.00 €** | 60.1 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.30 € | **1.00 €** | 60.1 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.30 € | **1.00 €** | 60.1 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.30 € | **1.00 €** | 60.1 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.70 €** | 57.9 % | **34.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.70 €** | 57.9 % | **34.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.70 € | **1.40 €** | 53.6 % | **26.5 %** | 1.50 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.80 €** | 56.6 % | **34.3 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.80 €** | 56.6 % | **34.3 %** | 1.90 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.80 €** | 59.7 % | **16.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.20 €** | 52.4 % | **22.0 %** | 1.30 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.50 € | **1.20 €** | 50.6 % | **20.4 %** | 1.30 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.80 €** | 49.8 % | **28.4 %** | 1.90 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 2.10 € | **1.80 €** | 47.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.00 €** | 46.8 % | **12.9 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.30 €** | 44.5 % | **17.4 %** | 1.40 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.10 € | **0.80 €** | 56.9 % | **14.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.10 € | **1.80 €** | 47.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.30 €** | 51.3 % | **22.9 %** | 1.40 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.10 € | **0.80 €** | 56.9 % | **14.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 2.00 € | **1.70 €** | 53.4 % | **30.4 %** | 1.80 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.20 € | **0.90 €** | 54.9 % | **16.1 %** | 1.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.73 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.90 € | **2.60 €** | 50.2 % | **34.6 %** | 2.64 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.90 € | **2.60 €** | 48.3 % | **32.9 %** | 2.68 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.90 € | **2.60 €** | 47.4 % | **32.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.10 €** | 52.4 % | **33.4 %** | 2.20 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.10 €** | 57.4 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.20 €** | 50.6 % | **32.5 %** | 2.30 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.10 €** | 56.1 % | **36.6 %** | 2.20 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.70 €** | 41.8 % | **27.6 %** | 2.80 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.80 € | **2.50 €** | 46.9 % | **31.1 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.60 €** | 47.1 % | **23.9 %** | 1.70 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.00 €** | 47.2 % | **28.0 %** | 2.10 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.80 €** | 46.2 % | **35.5 %** | 3.90 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.70 €** | 41.0 % | **26.9 %** | 2.80 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.80 € | **4.60 €** | 44.5 % | **38.5 %** | 4.62 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 20W, 1700lm, 4000K, IP6... | 6.70 € | **6.50 €** | 48.4 % | **44.0 %** | 6.54 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.30 €** | 38.3 % | **34.6 %** | 7.40 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.80 €** | 48.5 % | **41.1 %** | 3.90 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.50 €** | 46.7 % | **38.8 %** | 3.60 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.30 €** | 36.3 % | **31.4 %** | 5.40 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.00 €** | 36.6 % | **32.2 %** | 6.10 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11, V15 | 7.00 € | **6.80 €** | 30.8 % | **27.1 %** | 6.90 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.80 €** | 22.7 % | **16.6 %** | 3.90 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.80 €** | 20.8 % | **17.4 %** | 6.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 1.00 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 1.00 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **0.90 €** | 42.0 % | **16.1 %** | 1.00 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **0.90 €** | 49.1 % | **22.0 %** | 1.00 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **0.90 €** | 49.1 % | **22.0 %** | 1.00 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.40 € | **1.20 €** | 51.8 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.40 € | **1.20 €** | 51.8 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.30 € | **1.10 €** | 51.0 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Solight náhradné trubičky pre alkohol tester Solight... | 1.30 € | **1.10 €** | 44.8 % | **22.5 %** | 1.19 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.80 €** | 52.0 % | **36.8 %** | 1.90 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.80 €** | 52.0 % | **36.8 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.90 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 1.90 € | **1.70 €** | 51.4 % | **35.5 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.70 €** | 51.4 % | **35.5 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.30 €** | 48.7 % | **28.9 %** | 1.40 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.80 €** | 53.4 % | **22.7 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.00 €** | 43.5 % | **19.6 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.30 € | **1.10 €** | 51.0 % | **27.8 %** | 1.20 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.10 €** | 19.8 % | **12.5 %** | 3.20 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.30 € | **2.10 €** | 50.8 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.30 € | **2.10 €** | 50.8 % | **37.7 %** | 2.20 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.60 €** | 49.8 % | **39.1 %** | 2.70 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 52.00 € | **51.90 €** | 5.9 % | **5.7 %** | 51.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 22.00 € | **21.90 €** | 5.6 % | **5.1 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3HB1-4GG | 24.00 € | **23.90 €** | 7.1 % | **6.6 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 27.00 € | **26.90 €** | 32.4 % | **31.9 %** | 26.91 € | stávame sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.90 €** | 14.9 % | **14.7 %** | 54.94 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.90 €** | 14.6 % | **14.3 %** | 46.97 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 28.00 € | **27.90 €** | 13.4 % | **13.0 %** | 27.98 € | stávame sa najlacnejší |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 30.00 € | **29.90 €** | 14.5 % | **14.1 %** | 29.99 € | stávame sa najlacnejší |
| Solight LED svetelný zdroj do stropných svetiel, 18W... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.14 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.90 € | **3.80 €** | 48.2 % | **44.4 %** | 3.84 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **2.00 €** | 48.5 % | **41.4 %** | 2.05 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight náhradné trubičky pro alkohol tester Solight... | 1.70 € | **1.60 €** | 38.2 % | **30.1 %** | 1.64 € | stávame sa najlacnejší |
| Jóga blok HMS KJ02 korkový | 15.00 € | **14.90 €** | 6.8 % | **6.1 %** | 5.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní válec HMS FS104, modrý | 15.00 € | **14.90 €** | 6.8 % | **6.1 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELDONEX EKS4040SL | 11.00 € | **10.90 €** | 9.3 % | **8.3 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Vlákno Creality TPU (biele) | 16.00 € | **15.90 €** | 13.5 % | **12.8 %** | 15.94 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.50 €** | 38.0 % | **35.0 %** | 4.55 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 7 krížový, biely | 4.80 € | **4.70 €** | 38.9 % | **36.0 %** | 4.77 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11 | 6.00 € | **5.90 €** | 34.8 % | **32.5 %** | 5.99 € | stávame sa najlacnejší |
| Solight stĺpcový filter pre Dyson V12 | 6.00 € | **5.90 €** | 26.4 % | **24.3 %** | 5.99 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 75.00 € | **74.90 €** | 7.7 % | **7.5 %** | 74.94 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1801 | 238.00 € | **237.90 €** | 42899.1 % | **42881.0 %** | 237.97 € | stávame sa najlacnejší |

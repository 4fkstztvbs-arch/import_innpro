# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-16

Vstup: `premiumstoresk_20260816_2047.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **4114**
- Návrh **zvýšiť** cenu: **340** produktov
- Návrh **znížiť** cenu: **840** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **2934** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **84**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (340)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.00 € | **145.50 €** | 14.1 % | **43.1 %** | 116.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Partybox Stage 320 | 409.00 € | **432.50 €** | 5.0 % | **11.1 %** | 428.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Boombox 3 BLACK | 297.00 € | **309.90 €** | 5.0 % | **9.6 %** | 309.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung OLED QE48S85H | 668.90 € | **680.00 €** | 9.8 % | **11.6 %** | 669.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL PartyBox 330 | 536.90 € | **544.90 €** | 6.4 % | **7.9 %** | 537.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 4631 | 131.50 € | **137.90 €** | 5.0 % | **10.2 %** | 137.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK619DA2XL4 | 468.90 € | **475.00 €** | 5.1 % | **6.4 %** | 475.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GS541C10W | 338.50 € | **344.50 €** | 5.1 % | **6.9 %** | 344.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 170.00 € | **174.90 €** | 5.9 % | **9.0 %** | 170.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 CIR60430CB | 368.90 € | **373.50 €** | 5.8 % | **7.1 %** | 369.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| MAXXO VM Profi | 94.50 € | **99.00 €** | 5.4 % | **10.5 %** | 98.65 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE MO17E1W | 57.50 € | **61.50 €** | 6.5 % | **13.9 %** | 57.52 € | dobehnutie 2. najlacnejšieho konkurenta |
| TEFAL GC 305012 | 91.50 € | **95.50 €** | 5.5 % | **10.1 %** | 95.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Black | 15.90 € | **19.90 €** | 5.2 % | **31.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 15.90 € | **19.90 €** | 5.2 % | **31.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 15.90 € | **19.90 €** | 5.2 % | **31.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 15.90 € | **19.90 €** | 5.2 % | **31.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GS541C10X | 370.00 € | **373.90 €** | 5.0 % | **6.1 %** | 373.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV561C10 | 335.50 € | **339.00 €** | 6.0 % | **7.1 %** | 335.61 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica OTP6641WG | 96.00 € | **99.50 €** | 5.7 % | **9.6 %** | 96.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 1226 | 189.00 € | **192.50 €** | 6.8 % | **8.8 %** | 189.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1 | 122.50 € | **125.50 €** | 6.2 % | **8.8 %** | 122.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1-Ss | 126.00 € | **129.00 €** | 6.2 % | **8.7 %** | 126.07 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Capri Citrusovač 413/CA | 65.50 € | **68.50 €** | 5.4 % | **10.2 %** | 68.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 42.90 € | **45.50 €** | 14.6 % | **21.5 %** | 42.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo VM Master | 235.90 € | **238.50 €** | 5.0 % | **6.2 %** | 237.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 28.00 € | **30.50 €** | 5.0 % | **14.4 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **64.00 €** | 19.8 % | **24.7 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Oneodio Pro10 (červené) | 23.00 € | **25.50 €** | 11.8 % | **24.0 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip Red | 79.50 € | **81.90 €** | 5.5 % | **8.7 %** | 80.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip White | 79.50 € | **81.90 €** | 5.5 % | **8.7 %** | 80.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 36.90 € | **38.50 €** | 10.5 % | **15.3 %** | 38.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S5 GPS + WIFI | 48.00 € | **49.50 €** | 7.5 % | **10.9 %** | 48.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla, 150mm | 43.50 € | **45.00 €** | 20.1 % | **24.3 %** | 43.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Oneodio Pro10 (modré) | 24.00 € | **25.50 €** | 13.8 % | **20.9 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BMTD37146W | 383.90 € | **385.00 €** | 6.6 % | **6.9 %** | 385.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.6 % | **12.6 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Oneodio Pro50 (čierne) | 37.90 € | **39.00 €** | 14.5 % | **17.8 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy OFFICE M40 Vertical | 17.50 € | **18.50 €** | 7.7 % | **13.9 %** | 17.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Káblové slúchadlá Oneodio A71 (čierno-červené) | 23.50 € | **24.50 €** | 13.8 % | **18.6 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Oneodio Pro10 (sivé) | 24.50 € | **25.50 €** | 13.8 % | **18.5 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal NE477838 | 136.00 € | **136.90 €** | 7.9 % | **8.6 %** | 136.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.00 € | **88.90 €** | 5.1 % | **6.2 %** | 88.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.00 € | **17.90 €** | 6.1 % | **11.7 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 328.00 € | **328.90 €** | 7.8 % | **8.1 %** | 328.11 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Neptune 4 Max | 344.00 € | **344.90 €** | 13.4 % | **13.7 %** | 344.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy ProWash 550 SLIM BP 37SBL8-S | 272.90 € | **273.50 €** | 7.9 % | **8.1 %** | 273.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 556.90 € | **557.50 €** | 6.6 % | **6.7 %** | 556.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Creality Ender-3 V3 Plus 3D Printer | 347.90 € | **348.50 €** | 10.9 % | **11.1 %** | 347.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22760-56/RH | 30.90 € | **31.50 €** | 13.5 % | **15.7 %** | 30.93 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong LEAP-S3 V2 Google TV box | 63.90 € | **64.50 €** | 10.4 % | **11.4 %** | 64.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 36.90 € | **37.50 €** | 10.9 % | **12.7 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 28.90 € | **29.50 €** | 12.6 % | **14.9 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Oneodio Pro10 (čierne) | 24.90 € | **25.50 €** | 14.4 % | **17.1 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky C10 (biele) | 12.90 € | **13.50 €** | 11.2 % | **16.4 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH 6756WO | 122.90 € | **123.50 €** | 7.6 % | **8.1 %** | 123.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 506.00 € | **506.50 €** | 7.0 % | **7.1 %** | 506.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT 51016 | 50.00 € | **50.50 €** | 9.4 % | **10.5 %** | 50.13 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 137 | 33.00 € | **33.50 €** | 9.9 % | **11.5 %** | 33.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH9A73WO | 291.00 € | **291.50 €** | 6.4 % | **6.6 %** | 291.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.00 € | **18.50 €** | 7.4 % | **10.4 %** | 18.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Décafeinated 500 g zrno | 12.00 € | **12.50 €** | 5.9 % | **10.3 %** | 12.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 44GW | 198.00 € | **198.50 €** | 6.1 % | **6.4 %** | 198.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun CG9043 | 213.00 € | **213.50 €** | 7.0 % | **7.3 %** | 213.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.00 € | **11.50 €** | 7.2 % | **12.1 %** | 11.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.00 € | **16.50 €** | 8.3 % | **11.7 %** | 16.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90504 French press 800ml | 13.00 € | **13.50 €** | 10.0 % | **14.2 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Easy Chop | 33.00 € | **33.50 €** | 8.5 % | **10.2 %** | 33.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Sky B-4610 zlatý | 65.00 € | **65.50 €** | 9.1 % | **9.9 %** | 65.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Daily PV1100C | 23.00 € | **23.50 €** | 7.9 % | **10.2 %** | 23.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Clean Twist M Ergo+náhr. Static | 41.00 € | **41.50 €** | 13.5 % | **14.9 %** | 41.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 410090000 | 330.00 € | **330.50 €** | 6.9 % | **7.0 %** | 330.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| G21 Pěchovadlo pro nádoby 0,9 l | 12.00 € | **12.50 €** | 9.9 % | **14.4 %** | 12.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.00 € | **110.50 €** | 9.7 % | **10.2 %** | 110.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH6A75WO | 163.00 € | **163.50 €** | 8.4 % | **8.8 %** | 163.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RO6164EA | 142.00 € | **142.50 €** | 8.4 % | **8.8 %** | 142.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 252.00 € | **252.50 €** | 7.9 % | **8.1 %** | 252.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 8 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 9 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 8 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 9 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-P41 BLACK | 295.00 € | **295.50 €** | 14.3 % | **14.5 %** | 295.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla 32E325BH 32" HD LED TV | 128.00 € | **128.50 €** | 5.1 % | **5.5 %** | 128.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F49DPW | 171.00 € | **171.50 €** | 8.9 % | **9.2 %** | 171.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje W2PNA94A1W/CZ | 428.00 € | **428.50 €** | 7.0 % | **7.1 %** | 428.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WPNEI72SA1SWIFI | 286.00 € | **286.50 €** | 7.9 % | **8.1 %** | 286.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDIN38646D | 494.00 € | **494.50 €** | 7.0 % | **7.1 %** | 494.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CIP 3E7L0W Rapido | 293.00 € | **293.50 €** | 8.0 % | **8.1 %** | 293.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 600 Quick Start 85282 | 75.00 € | **75.50 €** | 8.7 % | **9.4 %** | 75.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT96425VD | 252.00 € | **252.50 €** | 6.1 % | **6.3 %** | 252.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Panasonic SC-MAX3500 | 642.00 € | **642.50 €** | 7.3 % | **7.4 %** | 642.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-AW592 WHITE 1 karton | 248.00 € | **248.50 €** | 9.1 % | **9.3 %** | 248.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ninja FB151EUWH Frost Vault 47l | 225.00 € | **225.50 €** | 6.5 % | **6.8 %** | 225.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Organic fragrance Peppermint | 16.00 € | **16.50 €** | 7.7 % | **11.0 %** | 16.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal OptiGrill GC7P0810 | 99.00 € | **99.50 €** | 9.9 % | **10.5 %** | 99.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 61521kuchyňská váha Page | 22.00 € | **22.50 €** | 8.3 % | **10.7 %** | 22.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Eddie B-4821 šedý | 29.00 € | **29.50 €** | 8.2 % | **10.1 %** | 29.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| TEFAL HB 643138 | 48.00 € | **48.50 €** | 9.2 % | **10.4 %** | 48.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Crema 1 kg zrno | 20.00 € | **20.50 €** | 6.0 % | **8.7 %** | 20.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit sušák Comfort Tower 420 | 47.00 € | **47.50 €** | 7.5 % | **8.6 %** | 47.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42325PC | 100.00 € | **100.50 €** | 6.9 % | **7.5 %** | 100.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot CSC062X | 155.00 € | **155.50 €** | 5.4 % | **5.8 %** | 155.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot SCV400RD | 52.00 € | **52.50 €** | 9.3 % | **10.3 %** | 52.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal NE553838 | 127.50 € | **128.00 €** | 5.2 % | **5.6 %** | 127.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| iRobot Roomba Plus 515 Combo + Dock (bla | 454.00 € | **454.50 €** | 9.6 % | **9.7 %** | 454.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roborock Qrevo C Pro Black | 608.50 € | **609.00 €** | 5.6 % | **5.7 %** | 608.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Icequeen-Wh | 19.00 € | **19.50 €** | 5.2 % | **8.0 %** | 19.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| EZIDRI FD1000 ULTRA DIGITAL | 268.00 € | **268.50 €** | 8.8 % | **9.0 %** | 268.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9232I | 355.00 € | **355.50 €** | 6.3 % | **6.5 %** | 355.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver VS5910X | 277.00 € | **277.50 €** | 8.1 % | **8.3 %** | 277.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 158.00 € | **158.50 €** | 14.1 % | **14.5 %** | 158.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kaon MZ-104, 4K satelitní přijímač | 115.00 € | **115.50 €** | 6.0 % | **6.5 %** | 115.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje BMX201M2BG | 165.00 € | **165.50 €** | 5.6 % | **5.9 %** | 165.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje BOS6737E06B | 270.00 € | **270.50 €** | 6.6 % | **6.8 %** | 270.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S10 Rear Cam | 24.00 € | **24.50 €** | 8.6 % | **10.8 %** | 24.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Sous Vide SV06 | 132.00 € | **132.50 €** | 8.3 % | **8.8 %** | 132.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT76325VW | 166.00 € | **166.50 €** | 8.4 % | **8.7 %** | 166.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong LEAP-UNA+, FHD GOOGLE TV STICK | 53.00 € | **53.50 €** | 7.2 % | **8.2 %** | 53.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed Pods Pro s ANC FIXPDS-P-BK | 39.00 € | **39.50 €** | 9.9 % | **11.3 %** | 39.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi Redmi Buds 8 Active Blue | 16.00 € | **16.50 €** | 5.6 % | **8.9 %** | 16.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi Redmi Buds 8 Active White | 16.00 € | **16.50 €** | 5.6 % | **8.9 %** | 16.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WHT643E4XBG | 246.00 € | **246.50 €** | 7.9 % | **8.1 %** | 246.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO B5RCNA406HXB3 | 520.00 € | **520.50 €** | 6.9 % | **7.1 %** | 520.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B5XRCNA366HXB | 508.00 € | **508.50 €** | 7.0 % | **7.1 %** | 508.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CDG1S514ESH | 238.00 € | **238.50 €** | 7.7 % | **8.0 %** | 238.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G10153 Horkovzdušná trouba | 169.00 € | **169.50 €** | 8.8 % | **9.1 %** | 169.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE WPNEI94A1SWIFI | 409.00 € | **409.50 €** | 6.9 % | **7.1 %** | 409.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Indesit BTW S50400 EU/N | 262.00 € | **262.50 €** | 7.9 % | **8.1 %** | 262.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10W | 337.00 € | **337.50 €** | 6.9 % | **7.1 %** | 337.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6401 PSB | 178.00 € | **178.50 €** | 8.8 % | **9.1 %** | 178.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica TFB 128 TX | 286.00 € | **286.50 €** | 7.9 % | **8.0 %** | 286.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BBIR17300BCS | 347.00 € | **347.50 €** | 6.9 % | **7.1 %** | 347.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 23210-70/RH Luna | 50.00 € | **50.50 €** | 8.2 % | **9.3 %** | 50.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rixon Soundplates | 42.00 € | **42.50 €** | 8.6 % | **9.9 %** | 42.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux ESKQ9 | 14.00 € | **14.50 €** | 8.8 % | **12.7 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90502 French press Atria 800 ml | 11.00 € | **11.50 €** | 8.3 % | **13.2 %** | 11.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Status STA 176214 | 10.00 € | **10.50 €** | 8.0 % | **13.4 %** | 10.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.00 € | **36.50 €** | 8.7 % | **10.2 %** | 36.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FVB015X | 18.00 € | **18.50 €** | 7.3 % | **10.3 %** | 18.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roadstar TRA-1230/BK Kapesní FM rádio | 15.00 € | **15.50 €** | 8.9 % | **12.5 %** | 15.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-SW100 BLACK | 221.00 € | **221.50 €** | 9.1 % | **9.3 %** | 221.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZIR1505 | 25.00 € | **25.50 €** | 7.4 % | **9.5 %** | 25.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA A-S3200 BLACK | 6002.00 € | **6002.50 €** | 9.3 % | **9.3 %** | 6002.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje R619EAW6 | 481.00 € | **481.50 €** | 6.8 % | **6.9 %** | 481.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-Hepa | 12.00 € | **12.50 €** | 8.4 % | **12.9 %** | 12.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente DigiChef+ kuchyňský robot | 124.00 € | **124.50 €** | 6.9 % | **7.3 %** | 124.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO436BL | 36.00 € | **36.50 €** | 9.3 % | **10.9 %** | 36.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO7059S | 36.00 € | **36.50 €** | 8.9 % | **10.4 %** | 36.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.00 € | **23.50 €** | 6.4 % | **8.7 %** | 23.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO42327PC | 102.00 € | **102.50 €** | 9.4 % | **10.0 %** | 102.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EFS 1 W | 16.00 € | **16.50 €** | 8.6 % | **12.0 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 325 | 253.00 € | **253.50 €** | 6.1 % | **6.4 %** | 253.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZHM2459S | 39.00 € | **39.50 €** | 13.0 % | **14.4 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT65421VC | 127.00 € | **127.50 €** | 8.2 % | **8.6 %** | 127.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| PS5 Laysara: Summit Kingdom Collector's | 64.00 € | **64.50 €** | 8.8 % | **9.6 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Café al’Italienne 1 kg zrno | 21.00 € | **21.50 €** | 5.5 % | **8.0 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje W11NHPI84AS | 285.00 € | **285.50 €** | 7.9 % | **8.1 %** | 285.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE WNHPI84AS/A | 355.00 € | **355.50 €** | 6.9 % | **7.1 %** | 355.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Concept ETV8360bcN | 524.00 € | **524.50 €** | 6.9 % | **7.0 %** | 524.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko FRL5388B | 132.00 € | **132.50 €** | 8.2 % | **8.6 %** | 132.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.00 € | **23.50 €** | 27.7 % | **30.5 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.00 € | **20.50 €** | 24.7 % | **27.8 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.00 € | **23.50 €** | 33.9 % | **36.9 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 30.00 € | **30.50 €** | 7.7 % | **9.5 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.00 € | **30.50 €** | 12.5 % | **14.4 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **44.50 €** | 11.0 % | **12.3 %** | 44.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 21.00 € | **21.50 €** | 22.7 % | **25.6 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.50 € | **41.00 €** | 6.8 % | **8.2 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 43.00 € | **43.50 €** | 5.5 % | **6.7 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| LG GSXE90EVAD | 2198.50 € | **2198.90 €** | 9.0 % | **9.0 %** | 2198.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 151390000 | 101.50 € | **101.90 €** | 10.2 % | **10.6 %** | 101.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun HF5050.IBK | 121.50 € | **121.90 €** | 9.5 % | **9.8 %** | 121.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Rotaro PowerVac 2v1 16V | 113.50 € | **113.90 €** | 9.4 % | **9.8 %** | 113.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Rotaro PowerVac 2v1 20V | 113.50 € | **113.90 €** | 5.3 % | **5.6 %** | 113.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CBT6130/3X | 64.50 € | **64.90 €** | 6.1 % | **6.7 %** | 64.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 8501A | 150.50 € | **150.90 €** | 5.5 % | **5.8 %** | 150.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E7K1-6BP | 69.50 € | **69.90 €** | 11.5 % | **12.2 %** | 69.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.6 % | **12.0 %** | 113.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Albrecht DR 865 | 153.50 € | **153.90 €** | 7.2 % | **7.5 %** | 153.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 8401SE | 124.50 € | **124.90 €** | 7.1 % | **7.4 %** | 124.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW5558E0 | 177.50 € | **177.90 €** | 8.6 % | **8.9 %** | 177.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer kuchyňský robot ZKR2010 | 175.50 € | **175.90 €** | 8.4 % | **8.7 %** | 175.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun IS5247.VI | 183.50 € | **183.90 €** | 7.2 % | **7.4 %** | 183.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.50 € | **84.90 €** | 9.2 % | **9.7 %** | 84.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CA20FMW7NG Candy Wave 600 | 147.50 € | **147.90 €** | 5.2 % | **5.5 %** | 147.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 101 | 158.50 € | **158.90 €** | 8.7 % | **9.0 %** | 158.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO MGC20130BFB | 78.50 € | **78.90 €** | 8.5 % | **9.1 %** | 78.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE SuChef | 82.50 € | **82.90 €** | 7.7 % | **8.3 %** | 82.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANON PIXMA G3430 Black | 142.50 € | **142.90 €** | 5.2 % | **5.5 %** | 142.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 1535SS | 206.50 € | **206.90 €** | 8.3 % | **8.5 %** | 206.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Bellagio červený multikapslový | 114.50 € | **114.90 €** | 6.3 % | **6.6 %** | 114.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 20 | 233.50 € | **233.90 €** | 9.7 % | **9.9 %** | 233.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal RK812110 | 106.50 € | **106.90 €** | 7.1 % | **7.5 %** | 106.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| PRIMO PR406IM | 126.50 € | **126.90 €** | 8.5 % | **8.8 %** | 126.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO331L | 104.50 € | **104.90 €** | 8.0 % | **8.4 %** | 104.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC517DE0 | 129.50 € | **129.90 €** | 8.7 % | **9.0 %** | 129.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC728D10 | 163.50 € | **163.90 €** | 6.0 % | **6.2 %** | 163.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC772830 | 220.50 € | **220.90 €** | 7.6 % | **7.8 %** | 220.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3ferrari G1018100 Horkovzdušná fritéza | 171.50 € | **171.90 €** | 6.7 % | **7.0 %** | 171.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3ferrari G1018700 Multifunkční trouba | 144.50 € | **144.90 €** | 5.4 % | **5.7 %** | 144.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer horkovzdušná fritéza ZAF9230 | 172.50 € | **172.90 €** | 8.5 % | **8.8 %** | 172.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO344DH | 147.50 € | **147.90 €** | 8.7 % | **9.0 %** | 147.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 745390000 | 124.50 € | **124.90 €** | 9.6 % | **9.9 %** | 124.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung VG-SCFA43BWBXC | 66.50 € | **66.90 €** | 7.1 % | **7.8 %** | 66.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA PrimeSound HQ-995X | 179.50 € | **179.90 €** | 8.6 % | **8.9 %** | 179.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.50 € | **114.90 €** | 10.0 % | **10.4 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.4 % | **14.2 %** | 11.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.50 € | **11.90 €** | 5.7 % | **9.4 %** | 11.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 713240002 | 11.50 € | **11.90 €** | 9.5 % | **13.3 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco INTENSO 500 g | 11.50 € | **11.90 €** | 5.0 % | **8.7 %** | 11.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.50 € | **13.90 €** | 14.4 % | **17.8 %** | 13.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson CR 50 | 14.50 € | **14.90 €** | 7.3 % | **10.2 %** | 14.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| KOMA HPU1 - Univerzální hubice | 12.50 € | **12.90 €** | 13.8 % | **17.4 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi PE1600 | 15.50 € | **15.90 €** | 5.6 % | **8.4 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.50 € | **10.90 €** | 6.7 % | **10.8 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-PE145 | 39.50 € | **39.90 €** | 7.4 % | **8.5 %** | 39.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 21.50 € | **21.90 €** | 6.3 % | **8.2 %** | 21.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO8709P | 28.50 € | **28.90 €** | 7.1 % | **8.6 %** | 28.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E200SM | 17.50 € | **17.90 €** | 18.8 % | **21.5 %** | 17.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 160390000 | 17.50 € | **17.90 €** | 10.6 % | **13.2 %** | 17.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9046C | 56.50 € | **56.90 €** | 6.4 % | **7.2 %** | 56.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Onyx BS2400 | 30.50 € | **30.90 €** | 8.7 % | **10.1 %** | 30.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| LENOVO adaptér TAB 68W AC USB ZG38C05739 | 17.50 € | **17.90 €** | 11.0 % | **13.5 %** | 17.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 62.50 € | **62.90 €** | 16.4 % | **17.2 %** | 62.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 24010-56 | 40.50 € | **40.90 €** | 9.8 % | **10.9 %** | 40.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42602S | 38.50 € | **38.90 €** | 5.8 % | **6.9 %** | 38.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FSR2002 | 16.50 € | **16.90 €** | 9.5 % | **12.2 %** | 16.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco SUPREMO 1 kg zrno | 21.50 € | **21.90 €** | 6.7 % | **8.7 %** | 21.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 23310-56/RH | 45.50 € | **45.90 €** | 13.8 % | **14.8 %** | 45.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko ATP3100N | 51.50 € | **51.90 €** | 13.9 % | **14.8 %** | 51.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 321990020 | 55.50 € | **55.90 €** | 9.4 % | **10.2 %** | 55.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Rouge BP3443 | 31.50 € | **31.90 €** | 8.3 % | **9.7 %** | 31.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZCK7650 | 32.50 € | **32.90 €** | 11.2 % | **12.5 %** | 32.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| RICATECH PR1980 Ghettoblaster | 50.50 € | **50.90 €** | 5.2 % | **6.1 %** | 50.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica KF 17191 | 29.50 € | **29.90 €** | 21.1 % | **22.7 %** | 29.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal HB 65KD38 | 55.50 € | **55.90 €** | 11.5 % | **12.3 %** | 55.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9215AV | 32.50 € | **32.90 €** | 9.4 % | **10.7 %** | 32.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9195C | 32.50 € | **32.90 €** | 9.1 % | **10.5 %** | 32.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Espresso Intenso 1 kg zrno | 17.50 € | **17.90 €** | 5.7 % | **8.1 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BL16GE30 | 56.50 € | **56.90 €** | 6.6 % | **7.3 %** | 56.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO 9218 WK | 21.50 € | **21.90 €** | 8.4 % | **10.4 %** | 21.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje SIH1800BLT | 18.50 € | **18.90 €** | 7.1 % | **9.4 %** | 18.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Combi Clean M + náhr. Static | 20.50 € | **20.90 €** | 7.9 % | **10.1 %** | 20.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed Creator Tripod FIXCRT-BK | 42.50 € | **42.90 €** | 8.0 % | **9.0 %** | 42.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 93511 Pánev 28 cm | 32.50 € | **32.90 €** | 5.4 % | **6.7 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22280-56/RH | 61.50 € | **61.90 €** | 19.0 % | **19.8 %** | 61.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Brita Style ESS 2,4l, šedomodrá, PO | 20.50 € | **20.90 €** | 7.0 % | **9.1 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| KOMA RK01 - Univerzální rotační kartáč | 18.50 € | **18.90 €** | 15.0 % | **17.5 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO STM4116B | 31.50 € | **31.90 €** | 7.2 % | **8.6 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 2957 | 40.50 € | **40.90 €** | 7.3 % | **8.3 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26380-70 | 38.50 € | **38.90 €** | 6.0 % | **7.1 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| DURACELL baterie DRNEL14 pro Nikon | 19.50 € | **19.90 €** | 7.3 % | **9.5 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 25.50 € | **25.90 €** | 7.0 % | **8.7 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 26.50 € | **26.90 €** | 8.8 % | **10.5 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenný keramický ohrievač, 2000 W, biely | 39.50 € | **39.90 €** | 4.8 % | **5.9 %** | 39.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 36.50 € | **36.90 €** | 7.4 % | **8.6 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rooma Espresso A7 bílá | 537.50 € | **537.90 €** | 5.9 % | **6.0 %** | 537.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 215RB | 304.50 € | **304.90 €** | 7.9 % | **8.1 %** | 304.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool FFB 8469 BV EE | 343.50 € | **343.90 €** | 6.7 % | **6.8 %** | 343.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI6421B | 384.50 € | **384.90 €** | 6.9 % | **7.1 %** | 384.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 394.50 € | **394.90 €** | 6.9 % | **7.1 %** | 394.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko PowerIntense BDFN26560XP | 545.50 € | **545.90 €** | 8.0 % | **8.1 %** | 545.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 723590000 | 327.50 € | **327.90 €** | 6.5 % | **6.7 %** | 327.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA RX-V4A Black | 501.50 € | **501.90 €** | 9.2 % | **9.3 %** | 501.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje DE69CS | 497.50 € | **497.90 €** | 6.4 % | **6.5 %** | 497.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 363A | 594.50 € | **594.90 €** | 9.2 % | **9.3 %** | 594.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje FH50EAW | 481.50 € | **481.90 €** | 6.1 % | **6.2 %** | 481.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EWS6526WC | 328.50 € | **328.90 €** | 6.5 % | **6.6 %** | 328.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje W3NGPI74A3S | 259.50 € | **259.90 €** | 7.0 % | **7.2 %** | 259.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9079KR-PROMO | 284.50 € | **284.90 €** | 6.3 % | **6.5 %** | 284.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 367.50 € | **367.90 €** | 6.7 % | **6.8 %** | 367.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA R-N800A BLACK | 955.50 € | **955.90 €** | 7.3 % | **7.3 %** | 955.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica MI 446 TBIM | 526.50 € | **526.90 €** | 6.0 % | **6.0 %** | 526.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA MV 447 ADW | 411.50 € | **411.90 €** | 7.0 % | **7.1 %** | 411.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDFS26046XQ | 315.50 € | **315.90 €** | 7.9 % | **8.1 %** | 315.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-F51 BLACK 1 karton | 298.90 € | **299.00 €** | 9.3 % | **9.3 %** | 298.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 256A | 385.90 € | **386.00 €** | 10.0 % | **10.0 %** | 385.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Sensazione černý | 330.90 € | **331.00 €** | 6.0 % | **6.0 %** | 330.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6412 CB | 269.90 € | **270.00 €** | 6.2 % | **6.2 %** | 269.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-777 BLACK 2 kartony | 848.90 € | **849.00 €** | 9.1 % | **9.2 %** | 849.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 195 | 428.90 € | **429.00 €** | 8.0 % | **8.0 %** | 429.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 210G | 458.90 € | **459.00 €** | 6.8 % | **6.8 %** | 459.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO B5RCNA405HG | 438.90 € | **439.00 €** | 7.0 % | **7.0 %** | 439.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje RK58DPB4I | 293.90 € | **294.00 €** | 8.0 % | **8.1 %** | 294.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy BR 10N3BX-S | 487.90 € | **488.00 €** | 9.9 % | **9.9 %** | 488.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy GD 48SB8C-S | 298.90 € | **299.00 €** | 5.7 % | **5.7 %** | 299.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CCGMEE9025PX/E | 798.90 € | **799.00 €** | 7.9 % | **8.0 %** | 799.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool C WD 84M WBS CZ | 638.90 € | **639.00 €** | 6.9 % | **6.9 %** | 639.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDFN26540XP | 441.90 € | **442.00 €** | 5.7 % | **5.7 %** | 442.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EEG69405L | 633.90 € | **634.00 €** | 6.0 % | **6.0 %** | 634.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GI6432BSCWF | 318.90 € | **319.00 €** | 5.6 % | **5.6 %** | 319.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CA6 NP5B3HTX | 340.90 € | **341.00 €** | 7.0 % | **7.1 %** | 341.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool OMSR58CU1SX | 329.90 € | **330.00 €** | 5.6 % | **5.6 %** | 330.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D Tlačiareň Creality K1 MAX | 496.90 € | **497.00 €** | 5.1 % | **5.2 %** | 496.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux MCK CZ | 25.90 € | **26.00 €** | 26.8 % | **27.3 %** | 25.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Filter Hepa 13 for AP100 | 47.90 € | **48.00 €** | 10.0 % | **10.2 %** | 47.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Fortissimo 1 kg zrno | 17.90 € | **18.00 €** | 7.7 % | **8.3 %** | 17.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal B817S255 | 29.90 € | **30.00 €** | 5.5 % | **5.8 %** | 29.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 21395-56 | 51.90 € | **52.00 €** | 7.5 % | **7.7 %** | 51.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 7.0 % | **7.4 %** | 23.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 27011-56 | 44.90 € | **45.00 €** | 5.6 % | **5.8 %** | 44.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 24360-70 Inspire Kettle | 43.90 € | **44.00 €** | 8.7 % | **9.0 %** | 43.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| MKF 23MZ601 mezikus | 47.90 € | **48.00 €** | 56.5 % | **56.8 %** | 47.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 58.90 € | **59.00 €** | 7.4 % | **7.6 %** | 59.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun SI3042VI | 35.90 € | **36.00 €** | 14.1 % | **14.4 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| TP-LINK RE205 AC750 WiFi Range Extender | 30.90 € | **31.00 €** | 10.5 % | **10.8 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| EDIFIER ES20 reproduktor béžový | 48.90 € | **49.00 €** | 5.4 % | **5.6 %** | 49.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Eldonex EWS-1010-BK meteostanice | 37.90 € | **38.00 €** | 7.6 % | **7.9 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Albrecht DR 54 | 62.90 € | **63.00 €** | 7.8 % | **8.0 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.20 € | **9.30 €** | 24.2 % | **25.6 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 34.90 € | **35.00 €** | 38.3 % | **38.7 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 25.90 € | **26.00 €** | 8.9 % | **9.3 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 21.90 € | **22.00 €** | 10.0 % | **10.5 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.70 € | **8.80 €** | 14.5 % | **15.8 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.70 € | **1.80 €** | 22.3 % | **29.5 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 19.6 % | **23.5 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 8.7 % | **9.7 %** | 10.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-50245 | 12.90 € | **13.00 €** | 9.9 % | **10.8 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY sluchátka MDR-ZX110P, růžová | 12.90 € | **13.00 €** | 5.1 % | **5.9 %** | 12.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY sluchátka MDR-ZX110W,bílá | 12.90 € | **13.00 €** | 5.1 % | **5.9 %** | 12.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EF155 | 10.90 € | **11.00 €** | 16.3 % | **17.4 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.20 € | **4.30 €** | 6.0 % | **8.6 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 35B1 | 136.90 € | **137.00 €** | 5.7 % | **5.8 %** | 136.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42102SV | 95.90 € | **96.00 €** | 6.2 % | **6.3 %** | 95.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZMM9802B | 128.90 € | **129.00 €** | 8.3 % | **8.4 %** | 129.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko FRL5474B | 69.90 € | **70.00 €** | 5.3 % | **5.5 %** | 70.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW501815 | 133.90 € | **134.00 €** | 8.0 % | **8.1 %** | 134.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO 221 SV | 120.90 € | **121.00 €** | 9.8 % | **9.9 %** | 121.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO228SV | 120.90 € | **121.00 €** | 9.5 % | **9.6 %** | 121.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Philips TAR4600 Rádiobudík | 64.90 € | **65.00 €** | 7.7 % | **7.9 %** | 65.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BLUETOUCH Elektrický vysokozdvižný vozík | 248.90 € | **249.00 €** | 9.2 % | **9.3 %** | 249.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 86RR | 201.90 € | **202.00 €** | 7.9 % | **8.0 %** | 202.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F49CPW | 194.90 € | **195.00 €** | 5.5 % | **5.6 %** | 195.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung The Frame Pro QE55LS03HW | 1389.90 € | **1390.00 €** | 8.8 % | **8.8 %** | 1390.00 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (840)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D skener Creality Sermoon S1 | 2561.00 € | **2374.50 €** | 15.0 % | **6.6 %** | 2374.69 € | stávame sa najlacnejší |
| BEKO HII 64200 FMTW | 479.00 € | **323.50 €** | 55.5 % | **5.0 %** | 287.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO RFSA240M43WN | 469.00 € | **369.50 €** | 34.1 % | **5.6 %** | 369.70 € | stávame sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **503.50 €** | 26.9 % | **6.7 %** | 503.90 € | stávame sa najlacnejší |
| GORENJE GI520E15X | 379.00 € | **301.50 €** | 32.1 % | **5.1 %** | 289.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BMGB20212B | 259.00 € | **189.90 €** | 43.4 % | **5.1 %** | 182.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BM3WFU3941WBW | 439.00 € | **372.50 €** | 23.9 % | **5.1 %** | 348.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIM14300WMS | 349.00 € | **289.90 €** | 26.4 % | **5.0 %** | 253.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ESS43210SW | 509.00 € | **456.50 €** | 17.1 % | **5.0 %** | 351.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE FN4172CW | 479.00 € | **432.50 €** | 16.3 % | **5.0 %** | 399.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 573.50 € | **529.90 €** | 15.0 % | **6.3 %** | 529.95 € | stávame sa najlacnejší |
| Apple MacBook Neo 8/256GB indigo MHFF4CZ | 841.00 € | **802.90 €** | 10.0 % | **5.0 %** | 800.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock F25 | 348.00 € | **313.50 €** | 22.1 % | **10.0 %** | 313.90 € | stávame sa najlacnejší |
| Gorenje RK416DPS4 | 379.00 € | **345.00 €** | 15.4 % | **5.0 %** | 342.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BDIN38542P | 439.00 € | **406.50 €** | 13.4 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BU1154N | 329.00 € | **298.90 €** | 15.6 % | **5.0 %** | 263.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 407.50 € | **379.90 €** | 15.0 % | **7.2 %** | 379.95 € | stávame sa najlacnejší |
| Reproduktory Edifier S360DB 2.1 (hnedé) | 359.50 € | **334.00 €** | 14.9 % | **6.8 %** | 334.01 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.50 €** | 49.9 % | **19.6 %** | 98.90 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3431B 1600W 12V | 303.90 € | **279.00 €** | 15.0 % | **5.6 %** | 279.39 € | stávame sa najlacnejší |
| Beko RFSA210K40WN | 349.00 € | **327.90 €** | 11.8 % | **5.1 %** | 263.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - na kovovom bubne, 4 zás... | 144.50 € | **123.50 €** | 43.9 % | **23.0 %** | 123.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 98.50 € | **78.90 €** | 44.0 % | **15.3 %** | 79.00 € | stávame sa najlacnejší |
| Beko BM3T372E0W | 415.50 € | **396.90 €** | 10.0 % | **5.1 %** | 339.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, vonk... | 100.50 € | **82.00 €** | 44.0 % | **17.5 %** | 82.50 € | stávame sa najlacnejší |
| Gorenje GS643C90X | 393.50 € | **375.50 €** | 10.1 % | **5.1 %** | 355.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR540066X | 379.50 € | **362.50 €** | 10.0 % | **5.1 %** | 274.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 86.90 € | **70.90 €** | 43.9 % | **17.4 %** | 70.99 € | stávame sa najlacnejší |
| Gorenje RK14DPS4 | 328.50 € | **313.50 €** | 10.1 % | **5.1 %** | 259.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 160.50 € | **147.00 €** | 15.1 % | **5.4 %** | 147.05 € | stávame sa najlacnejší |
| Solight digitálny vreckový kompresor | 52.90 € | **39.50 €** | 41.8 % | **5.9 %** | 39.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **34.90 €** | 54.8 % | **12.8 %** | 35.00 € | stávame sa najlacnejší |
| Beko BCBIE17300KSB | 283.50 € | **270.90 €** | 10.0 % | **5.1 %** | 251.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HII64400SMT | 268.50 € | **256.00 €** | 10.1 % | **5.0 %** | 219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 62.00 € | **49.50 €** | 37.7 % | **10.0 %** | 49.90 € | stávame sa najlacnejší |
| Beko B3RCNA415HXB | 443.90 € | **431.50 €** | 10.0 % | **6.9 %** | 431.80 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 494.90 € | **482.50 €** | 10.0 % | **7.3 %** | 482.90 € | stávame sa najlacnejší |
| Electrolux E6SI1-2MN | 42.00 € | **29.90 €** | 47.8 % | **5.2 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL TOUR ONE M3, Black | 276.90 € | **264.90 €** | 10.1 % | **5.3 %** | 265.00 € | stávame sa najlacnejší |
| JBL TOUR ONE M3, Latte | 276.90 € | **264.90 €** | 10.1 % | **5.3 %** | 265.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 76.50 € | **64.50 €** | 43.6 % | **21.1 %** | 64.90 € | stávame sa najlacnejší |
| ETA 051690000 | 75.99 € | **64.00 €** | 30.0 % | **9.5 %** | 64.50 € | stávame sa najlacnejší |
| Gorenje GI643D90X | 407.00 € | **396.00 €** | 10.0 % | **7.0 %** | 396.10 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 75.00 € | **64.00 €** | 59.1 % | **35.8 %** | 64.21 € | stávame sa najlacnejší |
| Gorenje WSAP84AWI | 377.50 € | **366.50 €** | 10.1 % | **6.9 %** | 366.90 € | stávame sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 59.50 € | **48.90 €** | 40.2 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s RGB podsvietením... | 44.50 € | **34.00 €** | 38.6 % | **5.9 %** | 34.24 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 309.50 € | **299.00 €** | 10.0 % | **6.3 %** | 299.50 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 309.50 € | **299.00 €** | 10.0 % | **6.3 %** | 299.50 € | stávame sa najlacnejší |
| Kit Neewer NK800 two softboxes + bulbs RGB 24W 2700-... | 113.90 € | **103.90 €** | 15.1 % | **5.0 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 157.90 € | **147.90 €** | 15.1 % | **7.8 %** | 147.92 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.24 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 38.50 € | **28.90 €** | 44.6 % | **8.6 %** | 29.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 58.00 € | **48.50 €** | 43.5 % | **20.0 %** | 48.90 € | stávame sa najlacnejší |
| AKAI AS005RA-750B Zesilovač 5.1 | 238.50 € | **229.00 €** | 10.1 % | **5.7 %** | 229.50 € | stávame sa najlacnejší |
| Automatická nastavitelná litinová činka 24 kg REBEL ... | 104.50 € | **95.50 €** | 14.9 % | **5.0 %** | 87.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 25m,... | 45.50 € | **37.00 €** | 44.1 % | **17.2 %** | 37.50 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 39.90 € | **31.90 €** | 35.4 % | **8.2 %** | 32.00 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 47.50 € | **39.50 €** | 38.3 % | **15.0 %** | 39.90 € | stávame sa najlacnejší |
| Electrolux EF167 | 21.99 € | **14.00 €** | 70.9 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **23.00 €** | 54.5 % | **15.0 %** | 23.09 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 76.50 € | **68.90 €** | 43.6 % | **29.4 %** | 69.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 110.00 € | **102.50 €** | 43.6 % | **33.8 %** | 102.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 98.50 € | **91.50 €** | 43.6 % | **33.4 %** | 91.67 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 47.00 € | **40.00 €** | 58.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 28.50 € | **21.50 €** | 58.5 % | **19.6 %** | 21.90 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 28.50 € | **21.50 €** | 58.5 % | **19.6 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 29.00 € | **22.00 €** | 54.0 % | **16.8 %** | 22.45 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 48.90 € | **42.00 €** | 43.9 % | **23.6 %** | 42.50 € | stávame sa najlacnejší |
| Dalekohled monokulární se zaměřovačem LEVENHUK Camo ... | 80.50 € | **73.90 €** | 15.3 % | **5.8 %** | 74.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **34.50 €** | 38.3 % | **16.3 %** | 34.90 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 157.50 € | **151.00 €** | 10.1 % | **5.5 %** | 151.50 € | stávame sa najlacnejší |
| Salente Smartdust | 138.50 € | **132.00 €** | 10.3 % | **5.1 %** | 132.50 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 196.90 € | **190.50 €** | 10.0 % | **6.4 %** | 190.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky + časový spí... | 18.90 € | **12.50 €** | 60.6 % | **6.2 %** | 12.70 € | stávame sa najlacnejší |
| JBL CHARGEES3 | 119.90 € | **114.00 €** | 15.6 % | **9.9 %** | 114.50 € | stávame sa najlacnejší |
| Candy TCA273D3-S | 286.50 € | **280.90 €** | 10.0 % | **7.9 %** | 281.00 € | stávame sa najlacnejší |
| Činky chromované nastavitelné 20kg, REBEL ACTIVE RBA... | 64.50 € | **58.90 €** | 15.4 % | **5.4 %** | 51.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 27.50 € | **21.90 €** | 34.6 % | **7.2 %** | 21.99 € | stávame sa najlacnejší |
| Beko B7RCNA417HXBRW | 665.00 € | **659.50 €** | 5.9 % | **5.1 %** | 571.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 67.50 € | **62.00 €** | 50.4 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 27.00 € | **21.50 €** | 38.2 % | **10.1 %** | 21.90 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 81.50 € | **76.00 €** | 15.3 % | **7.5 %** | 76.50 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.00 € | **64.90 €** | 14.8 % | **6.5 %** | 64.96 € | stávame sa najlacnejší |
| AKAI ATT-200SP Gramofon s  BT | 116.50 € | **111.50 €** | 10.1 % | **5.4 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Partybox Wireless Mic | 110.00 € | **105.00 €** | 10.1 % | **5.1 %** | 104.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.50 €** | 37.8 % | **12.7 %** | 22.68 € | stávame sa najlacnejší |
| Solight dezinfekčná bezozónová UV lampa 100W | 47.00 € | **42.00 €** | 49.6 % | **33.7 %** | 42.27 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 28.00 € | **23.00 €** | 53.7 % | **26.3 %** | 23.37 € | stávame sa najlacnejší |
| Victron Energy VE.Bus BMS | 146.00 € | **141.00 €** | 14.9 % | **11.0 %** | 141.44 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 137.90 € | **133.00 €** | 10.0 % | **6.1 %** | 133.50 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 63.50 € | **58.90 €** | 15.3 % | **7.0 %** | 59.00 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 96.50 € | **91.90 €** | 15.0 % | **9.6 %** | 91.96 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 31.00 € | **26.50 €** | 58.5 % | **35.5 %** | 26.64 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 210.00 € | **205.50 €** | 14.9 % | **12.5 %** | 205.70 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 57.50 € | **53.00 €** | 15.4 % | **6.4 %** | 53.27 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 28.00 € | **23.50 €** | 38.4 % | **16.1 %** | 23.90 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 39.00 € | **34.50 €** | 41.4 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| Gorenje R49CPW | 278.50 € | **274.00 €** | 7.8 % | **6.0 %** | 274.44 € | stávame sa najlacnejší |
| BROTHER DCP-T730DW | 274.50 € | **270.00 €** | 15.0 % | **13.2 %** | 270.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 127.90 € | **123.50 €** | 43.9 % | **38.9 %** | 123.60 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 23.90 € | **19.50 €** | 39.2 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 32.90 € | **28.50 €** | 38.9 % | **20.3 %** | 28.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.50 €** | 59.0 % | **33.9 %** | 23.90 € | stávame sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **18.00 €** | 54.3 % | **26.3 %** | 18.10 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 18.50 € | **14.50 €** | 45.0 % | **13.7 %** | 14.70 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.90 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.90 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.90 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Gold - 9150 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.90 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Rose Gold - 9151 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.90 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.00 € | **48.00 €** | 15.0 % | **6.1 %** | 48.40 € | stávame sa najlacnejší |
| JBL Partybox Club 120 | 269.90 € | **266.00 €** | 11.4 % | **9.8 %** | 266.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.90 € | **8.10 €** | 56.6 % | **6.6 %** | 8.11 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 612 Precise | 63.50 € | **59.90 €** | 14.7 % | **8.2 %** | 59.99 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 19.50 € | **15.90 €** | 46.0 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| Garett Atom Black Steel | 75.50 € | **71.90 €** | 10.5 % | **5.2 %** | 71.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 239.50 € | **235.90 €** | 15.0 % | **13.2 %** | 235.99 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 17.50 € | **14.00 €** | 56.3 % | **25.1 %** | 14.01 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 55.50 € | **52.00 €** | 14.7 % | **7.5 %** | 52.10 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **52.00 €** | 15.2 % | **7.9 %** | 52.17 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A6 (čierne) | 62.50 € | **59.00 €** | 14.4 % | **8.0 %** | 59.20 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 28.50 € | **25.00 €** | 53.4 % | **34.6 %** | 25.24 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 56.50 € | **53.00 €** | 14.8 % | **7.6 %** | 53.33 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24 Ah MHPower MS24-12 | 47.00 € | **43.50 €** | 14.9 % | **6.4 %** | 43.90 € | stávame sa najlacnejší |
| Rowenta IN5011F0 | 122.50 € | **119.00 €** | 10.2 % | **7.0 %** | 119.50 € | stávame sa najlacnejší |
| Ninja AF140EU Single Basket Pro 4,7l | 120.90 € | **117.50 €** | 10.1 % | **7.0 %** | 117.90 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie LECCE, 3CCT, 48W, 290... | 26.90 € | **23.50 €** | 38.7 % | **21.2 %** | 23.80 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 6 zásuviek, vypínač, ... | 10.90 € | **7.70 €** | 49.9 % | **5.9 %** | 7.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov Gosund SuperWind HD21 (ružový) | 40.00 € | **36.90 €** | 14.6 % | **5.7 %** | 25.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 42.00 € | **38.90 €** | 37.7 % | **27.5 %** | 38.95 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 11.00 € | **7.90 €** | 54.5 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| Maxxo DT02 internetové rádio | 68.90 € | **65.90 €** | 10.1 % | **5.3 %** | 60.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1342/04 | 72.50 € | **69.50 €** | 10.1 % | **5.5 %** | 67.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO737BL | 62.50 € | **59.50 €** | 10.7 % | **5.4 %** | 59.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **118.00 €** | 14.9 % | **12.0 %** | 118.04 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8053  DIGITAL AIR FRYE... | 34.50 € | **31.50 €** | 15.1 % | **5.1 %** | 31.55 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 33.50 € | **30.50 €** | 44.7 % | **31.8 %** | 30.55 € | stávame sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 166.50 € | **163.50 €** | 11.3 % | **9.3 %** | 163.56 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **26.90 €** | 50.2 % | **35.2 %** | 27.00 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 71.90 € | **68.90 €** | 15.1 % | **10.3 %** | 69.00 € | stávame sa najlacnejší |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 74.50 € | **71.50 €** | 15.0 % | **10.4 %** | 71.67 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.50 € | **81.50 €** | 10.0 % | **6.1 %** | 81.72 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 79.50 € | **76.50 €** | 43.8 % | **38.3 %** | 76.89 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **22.50 €** | 37.8 % | **21.5 %** | 22.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **35.50 €** | 55.1 % | **43.0 %** | 35.90 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 629.00 € | **626.00 €** | 10.0 % | **9.5 %** | 626.44 € | stávame sa najlacnejší |
| JBL Tune 670NC white | 66.00 € | **63.00 €** | 14.5 % | **9.3 %** | 63.50 € | stávame sa najlacnejší |
| Rowenta RO7457EA | 193.90 € | **191.00 €** | 10.1 % | **8.4 %** | 191.50 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 40.90 € | **38.00 €** | 15.1 % | **6.9 %** | 38.36 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1500mA, stabiliz... | 9.90 € | **7.20 €** | 45.3 % | **5.7 %** | 7.21 € | stávame sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **7.80 €** | 60.5 % | **19.2 %** | 7.90 € | stávame sa najlacnejší |
| EDIFIER ES20 reproduktor černý | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Slim Gold - 9159 | 61.50 € | **58.90 €** | 10.0 % | **5.4 %** | 58.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 20.50 € | **17.90 €** | 41.5 % | **23.5 %** | 18.00 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **70.90 €** | 10.6 % | **6.7 %** | 71.00 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 196.50 € | **193.90 €** | 10.1 % | **8.7 %** | 194.00 € | stávame sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **32.00 €** | 49.6 % | **38.8 %** | 32.10 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 23.00 € | **20.50 €** | 49.1 % | **32.9 %** | 20.75 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 21.50 € | **19.00 €** | 38.5 % | **22.4 %** | 19.32 € | stávame sa najlacnejší |
| SALENTE ToastMax | 49.00 € | **46.50 €** | 15.0 % | **9.1 %** | 46.90 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 52.50 € | **50.00 €** | 15.1 % | **9.6 %** | 50.46 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **24.00 €** | 54.7 % | **40.1 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 14.50 € | **12.00 €** | 57.0 % | **29.9 %** | 12.50 € | stávame sa najlacnejší |
| Salente Friteoiicz | 54.50 € | **52.00 €** | 10.1 % | **5.0 %** | 52.50 € | stávame sa najlacnejší |
| SONY WFC510Y žlutá | 39.50 € | **37.00 €** | 16.9 % | **9.5 %** | 37.50 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 4 zásuvky, 1,5m, biela | 9.10 € | **6.70 €** | 44.2 % | **6.2 %** | 6.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **18.50 €** | 43.0 % | **26.6 %** | 18.75 € | stávame sa najlacnejší |
| Candy CFT610/4N/1 | 52.90 € | **50.50 €** | 14.3 % | **9.1 %** | 50.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 20W, 1500lm... | 9.60 € | **7.30 €** | 38.6 % | **5.4 %** | 4.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 20W, 1500lm... | 9.60 € | **7.30 €** | 38.6 % | **5.4 %** | 4.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 36.00 € | **33.90 €** | 53.8 % | **44.8 %** | 33.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 3 zásuvky, vypínač, 1... | 7.50 € | **5.40 €** | 48.4 % | **6.8 %** | 5.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 12.00 € | **9.90 €** | 52.2 % | **25.6 %** | 9.95 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 15.00 € | **12.90 €** | 45.7 % | **25.3 %** | 12.96 € | stávame sa najlacnejší |
| Gorenje BM201AG1BG | 212.00 € | **209.90 €** | 6.2 % | **5.2 %** | 205.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nastavitelná bitumenová činka 1x20kg, REBEL ACTIVE R... | 22.90 € | **20.90 €** | 15.6 % | **5.5 %** | 17.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Solární panel pro StrongVision | 36.50 € | **34.50 €** | 11.2 % | **5.1 %** | 34.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Pins 4 PRO Pink | 36.50 € | **34.50 €** | 11.5 % | **5.4 %** | 34.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **16.00 €** | 47.4 % | **31.0 %** | 16.02 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 31.50 € | **29.50 €** | 54.7 % | **44.9 %** | 29.52 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **58.00 €** | 14.9 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| G3Ferrari G10152 horkovzdušná trouba | 147.90 € | **145.90 €** | 10.2 % | **8.7 %** | 146.00 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 650lm, Li-Ion | 18.50 € | **16.50 €** | 55.4 % | **38.6 %** | 16.65 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 18.00 € | **16.00 €** | 37.9 % | **22.6 %** | 16.29 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.00 € | **30.00 €** | 14.3 % | **7.2 %** | 30.36 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 16.00 € | **14.00 €** | 53.0 % | **33.9 %** | 14.39 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 37.50 € | **35.50 €** | 39.3 % | **31.9 %** | 35.90 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **20.50 €** | 53.3 % | **39.7 %** | 20.90 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.50 € | **63.50 €** | 20.1 % | **16.4 %** | 63.90 € | stávame sa najlacnejší |
| Tefal MQ723138 | 47.50 € | **45.50 €** | 10.4 % | **5.8 %** | 45.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.00 € | **64.00 €** | 10.1 % | **6.8 %** | 64.50 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 72.90 € | **71.00 €** | 42.1 % | **38.4 %** | 71.39 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 11.90 € | **10.00 €** | 56.8 % | **31.8 %** | 10.41 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund SP1-HE WiFi, 2 ks (HomeK... | 21.90 € | **20.00 €** | 15.5 % | **5.5 %** | 19.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo sluchátka s mikrofon.MONKA HG9069W | 36.90 € | **35.00 €** | 10.7 % | **5.0 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **20.00 €** | 48.6 % | **35.7 %** | 20.15 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 40.90 € | **39.00 €** | 38.1 % | **31.7 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 18.90 € | **17.00 €** | 54.6 % | **39.0 %** | 17.50 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **30.00 €** | 16.9 % | **9.9 %** | 30.50 € | stávame sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **33.00 €** | 12.2 % | **6.1 %** | 33.50 € | stávame sa najlacnejší |
| SONY WFC510L modrá | 38.90 € | **37.00 €** | 15.1 % | **9.5 %** | 37.50 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 11.00 € | **9.20 €** | 54.5 % | **29.2 %** | 9.21 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.00 € | **6.20 €** | 48.8 % | **15.3 %** | 6.25 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2329-3 litinové neoprenové 2x3kg | 20.50 € | **18.90 €** | 15.3 % | **6.3 %** | 14.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| REBEL ACTIVE RBA-2328-20 nastavitelná činka 1x20kg | 20.50 € | **18.90 €** | 15.3 % | **6.3 %** | 17.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 28.50 € | **26.90 €** | 50.2 % | **41.7 %** | 27.00 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.50 € | **10.90 €** | 53.3 % | **33.7 %** | 11.00 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 15.50 € | **13.90 €** | 47.0 % | **31.9 %** | 14.00 € | stávame sa najlacnejší |
| Tefal Safe'Tea KO261130 | 28.50 € | **27.00 €** | 11.1 % | **5.2 %** | 27.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| EJEAS Q7 motorcycle intercom | 44.00 € | **42.50 €** | 14.4 % | **10.5 %** | 42.60 € | stávame sa najlacnejší |
| Budík digitální GARNI 138B | 20.00 € | **18.50 €** | 14.8 % | **6.1 %** | 18.60 € | stávame sa najlacnejší |
| Ružové herné slúchadlá ONIKUMA B90 | 16.50 € | **15.00 €** | 15.6 % | **5.1 %** | 15.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.50 € | **15.00 €** | 48.2 % | **34.8 %** | 15.11 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (modré) | 45.50 € | **44.00 €** | 15.0 % | **11.2 %** | 44.19 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.00 €** | 15.5 % | **11.7 %** | 44.19 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.00 €** | 15.5 % | **11.7 %** | 44.19 € | stávame sa najlacnejší |
| Powerbanka EMOS WI 522 /B0555BL/, 5 000 mAh, 20 W+Wi... | 25.50 € | **24.00 €** | 14.7 % | **8.0 %** | 24.22 € | stávame sa najlacnejší |
| Powerbanka EMOS WI 522 /B0555GY/, 5 000 mAh, 20 W+Wi... | 25.50 € | **24.00 €** | 14.7 % | **8.0 %** | 24.22 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **13.50 €** | 54.0 % | **38.6 %** | 13.85 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 13.50 € | **12.00 €** | 56.1 % | **38.8 %** | 12.36 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 14.50 € | **13.00 €** | 47.4 % | **32.1 %** | 13.45 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 12.50 € | **11.00 €** | 53.5 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **15.00 €** | 39.3 % | **26.6 %** | 15.50 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **24.00 €** | 37.8 % | **29.6 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **22.00 €** | 39.1 % | **30.2 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **14.00 €** | 55.0 % | **40.0 %** | 14.50 € | stávame sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **40.00 €** | 10.4 % | **6.4 %** | 40.50 € | stávame sa najlacnejší |
| Aligator Reproduktor pro MagSafe ABSMB01 | 19.50 € | **18.00 €** | 45.2 % | **34.0 %** | 18.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **16.00 €** | 44.3 % | **31.9 %** | 16.50 € | stávame sa najlacnejší |
| Candy CFT610/5S/1/4U | 48.50 € | **47.00 €** | 10.0 % | **6.6 %** | 47.50 € | stávame sa najlacnejší |
| G3Ferrari G2011300 | 204.90 € | **203.50 €** | 10.1 % | **9.4 %** | 203.90 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 242.90 € | **241.50 €** | 14.3 % | **13.7 %** | 241.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 10.90 € | **9.50 €** | 49.7 % | **30.5 %** | 9.56 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 13.90 € | **12.50 €** | 44.9 % | **30.3 %** | 12.61 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.90 € | **14.50 €** | 56.1 % | **42.4 %** | 14.77 € | stávame sa najlacnejší |
| Pogumované litinové činky HEX REBEL ACTIVE 2×2,5 kg | 16.90 € | **15.50 €** | 14.7 % | **5.2 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 23.90 € | **22.50 €** | 38.4 % | **30.3 %** | 22.53 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 27.90 € | **26.50 €** | 15.4 % | **9.6 %** | 26.56 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Guzzanti GZ 462 | 39.90 € | **38.50 €** | 10.4 % | **6.6 %** | 38.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.40 € | **6.10 €** | 47.8 % | **21.9 %** | 6.20 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 4.20 € | **2.90 €** | 54.5 % | **6.7 %** | 2.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **7.10 €** | 55.5 % | **33.0 %** | 7.17 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., 1 režim | 4.50 € | **3.30 €** | 46.9 % | **7.7 %** | 2.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 6.00 € | **4.80 €** | 49.2 % | **19.3 %** | 4.82 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 7.50 € | **6.30 €** | 59.6 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.90 € | **3.70 €** | 54.4 % | **16.6 %** | 3.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 5.40 € | **4.20 €** | 48.3 % | **15.4 %** | 4.29 € | stávame sa najlacnejší |
| LAMAX StarCube1 | 58.00 € | **56.90 €** | 7.7 % | **5.6 %** | 55.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 19.00 € | **17.90 €** | 37.2 % | **29.2 %** | 17.97 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 31.00 € | **29.90 €** | 43.8 % | **38.7 %** | 29.98 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 3m | 3.80 € | **2.70 €** | 47.8 % | **5.0 %** | 0.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 1,5m, b... | 9.10 € | **8.00 €** | 20.5 % | **5.9 %** | 6.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **10.90 €** | 44.3 % | **31.1 %** | 10.98 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **14.90 €** | 38.4 % | **28.9 %** | 15.00 € | stávame sa najlacnejší |
| Fixed kryt Apple iP Air FIXBLM-1601-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 11.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26483-56 | 21.90 € | **20.90 €** | 11.8 % | **6.7 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2308  bitumenové 2x3kg | 14.50 € | **13.50 €** | 14.1 % | **6.2 %** | 10.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2329-2 litinové neoprenové 2x2kg | 13.50 € | **12.50 €** | 15.5 % | **7.0 %** | 10.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 17PM FIXFLM2-1603-BK | 19.50 € | **18.50 €** | 10.9 % | **5.3 %** | 17.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iPh 17A FIXFLM2-1601-BK | 19.50 € | **18.50 €** | 10.9 % | **5.3 %** | 17.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iPh 17P FIXFLM2-1602-BK | 19.50 € | **18.50 €** | 10.9 % | **5.3 %** | 17.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Breakfast Citrus Juicer 417 černý | 19.50 € | **18.50 €** | 11.6 % | **5.9 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FFC023X | 20.90 € | **19.90 €** | 11.0 % | **5.7 %** | 19.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 16 FIXBLM-1400-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 16 FIXRBM-1400-RA | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Strojek na těstoviny CUL. | 20.50 € | **19.50 €** | 11.6 % | **6.1 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BC50D6V0 | 16.50 € | **15.50 €** | 13.1 % | **6.3 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED Bikee Anti-Shock FIXBIAS-BK | 22.50 € | **21.50 €** | 11.1 % | **6.2 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 13.50 € | **12.50 €** | 56.1 % | **44.6 %** | 12.54 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.90 € | **22.90 €** | 38.4 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.05 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **31.90 €** | 15.4 % | **11.9 %** | 31.96 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.90 € | **7.90 €** | 43.9 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.50 €** | 44.6 % | **36.3 %** | 16.59 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.90 € | **54.90 €** | 11.9 % | **9.9 %** | 55.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **14.90 €** | 37.7 % | **29.0 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.90 € | **9.90 €** | 54.1 % | **40.0 %** | 10.00 € | stávame sa najlacnejší |
| TP-LINK Tapo C100 WiFi camera | 23.90 € | **22.90 €** | 11.1 % | **6.4 %** | 23.00 € | stávame sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.90 € | **17.90 €** | 11.3 % | **5.5 %** | 18.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 55.2 % | **43.7 %** | 12.61 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 18.00 € | **17.00 €** | 52.4 % | **44.0 %** | 17.12 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 11.50 € | **10.50 €** | 56.9 % | **43.2 %** | 10.63 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **14.00 €** | 54.0 % | **43.7 %** | 14.13 € | stávame sa najlacnejší |
| Solight FM transmitter s bluetooth pripojením do aut... | 16.00 € | **15.00 €** | 43.9 % | **34.9 %** | 15.15 € | stávame sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.71 € | stávame sa najlacnejší |
| Dynamický mikrofon Maono PD200x (černý) | 49.00 € | **48.00 €** | 14.7 % | **12.4 %** | 48.23 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **11.50 €** | 47.9 % | **36.1 %** | 11.73 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.27 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 26.50 € | **25.50 €** | 37.7 % | **32.5 %** | 25.80 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **25.00 €** | 42.7 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **34.00 €** | 14.8 % | **11.5 %** | 34.36 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPE-E (typ E) | 19.50 € | **18.50 €** | 12.6 % | **6.8 %** | 18.88 € | stávame sa najlacnejší |
| Solight laserový merač vzdálenosti, 0,05 - 40m | 17.50 € | **16.50 €** | 21.6 % | **14.7 %** | 16.90 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 14.50 € | **13.50 €** | 41.4 % | **31.6 %** | 13.90 € | stávame sa najlacnejší |
| Tefal KO2G08E0 | 35.50 € | **34.50 €** | 10.3 % | **7.2 %** | 34.90 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **28.50 €** | 11.8 % | **8.0 %** | 28.90 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **28.50 €** | 11.8 % | **8.0 %** | 28.90 € | stávame sa najlacnejší |
| Inteligentné nočné svetlo RGB WiFi Gosund LB3 Tuya | 17.50 € | **16.50 €** | 13.9 % | **7.4 %** | 16.90 € | stávame sa najlacnejší |
| Niceboy Podsie 4 POP Black | 15.50 € | **14.50 €** | 16.9 % | **9.4 %** | 14.90 € | stávame sa najlacnejší |
| Niceboy Podsie 4 POP White | 15.50 € | **14.50 €** | 16.9 % | **9.4 %** | 14.90 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **14.00 €** | 48.7 % | **38.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek, vypínač | 4.60 € | **3.60 €** | 49.0 % | **16.6 %** | 3.68 € | stávame sa najlacnejší |
| Salente G4 robotický vysavač | 116.90 € | **116.00 €** | 9.0 % | **8.2 %** | 116.50 € | stávame sa najlacnejší |
| Salente Rtx-G4 | 116.90 € | **116.00 €** | 9.0 % | **8.2 %** | 116.50 € | stávame sa najlacnejší |
| SONY WFC710N Black | 71.90 € | **71.00 €** | 11.0 % | **9.6 %** | 71.50 € | stávame sa najlacnejší |
| Whirlpool MBNA910X | 242.90 € | **242.00 €** | 8.1 % | **7.7 %** | 242.50 € | stávame sa najlacnejší |
| Tefal B5560553 | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 14.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.10 €** | 53.4 % | **39.6 %** | 9.17 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.60 €** | 50.3 % | **37.4 %** | 9.68 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 150 + 100lm,... | 10.90 € | **10.00 €** | 53.6 % | **40.9 %** | 10.20 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 14.90 € | **14.00 €** | 13.6 % | **6.8 %** | 14.50 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 3.30 € | **2.40 €** | 55.1 % | **12.8 %** | 2.44 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **47.00 €** | 38.5 % | **35.9 %** | 47.08 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.90 € | **27.00 €** | 42.8 % | **38.2 %** | 27.18 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **16.00 €** | 38.6 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **22.00 €** | 14.8 % | **10.3 %** | 22.49 € | stávame sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **21.00 €** | 11.6 % | **7.0 %** | 21.50 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **27.00 €** | 11.6 % | **8.0 %** | 27.50 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.00 €** | 13.2 % | **7.5 %** | 17.50 € | stávame sa najlacnejší |
| Sati Hansi Doux et Suave 1000g zrno | 22.90 € | **22.00 €** | 10.8 % | **6.4 %** | 22.50 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 5.40 € | **4.60 €** | 55.1 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.50 €** | 55.0 % | **31.6 %** | 4.60 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 5.10 € | **4.30 €** | 55.3 % | **30.9 %** | 4.40 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **4.00 €** | 45.3 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 5.50 € | **4.80 €** | 53.1 % | **33.6 %** | 4.82 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.90 € | **4.20 €** | 54.4 % | **32.4 %** | 4.26 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely | 2.60 € | **1.90 €** | 48.9 % | **8.8 %** | 2.00 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.60 € | **2.90 €** | 48.6 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 8.20 € | **7.50 €** | 48.8 % | **36.1 %** | 7.54 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.50 €** | 47.8 % | **35.2 %** | 7.60 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 270.50 € | **269.90 €** | 7.9 % | **7.6 %** | 270.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 259.50 € | **258.90 €** | 13.5 % | **13.2 %** | 259.00 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 424.50 € | **423.90 €** | 13.3 % | **13.2 %** | 424.00 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 409.50 € | **408.90 €** | 8.3 % | **8.2 %** | 409.00 € | stávame sa najlacnejší |
| UREVO FoldiMix 5L Pro elektrický bežecký pás (strieb... | 498.50 € | **497.90 €** | 10.6 % | **10.4 %** | 498.00 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 18.50 € | **17.90 €** | 38.9 % | **34.4 %** | 17.94 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 17.50 € | **16.90 €** | 52.0 % | **46.8 %** | 17.00 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **21.90 €** | 12.3 % | **9.3 %** | 22.00 € | stávame sa najlacnejší |
| Leifheit Air Board M Compact | 55.50 € | **54.90 €** | 10.1 % | **8.9 %** | 55.00 € | stávame sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **25.90 €** | 11.3 % | **8.8 %** | 26.00 € | stávame sa najlacnejší |
| Girmi PE3600 | 39.50 € | **38.90 €** | 10.9 % | **9.2 %** | 39.00 € | stávame sa najlacnejší |
| Leifheit Mop na podlahu Easy Spray XL | 32.50 € | **31.90 €** | 9.2 % | **7.2 %** | 32.00 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.70 € | **3.10 €** | 56.7 % | **31.3 %** | 3.17 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.48 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.70 € | **2.10 €** | 50.4 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Fixed kryt Apple iPho 17A FIXPUM-1601-TR | 15.50 € | **14.90 €** | 10.5 % | **6.3 %** | 11.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak mikrofónu Maono BA20 | 13.50 € | **12.90 €** | 10.1 % | **5.2 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.10 € | **7.50 €** | 47.3 % | **36.4 %** | 7.53 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.10 € | **3.50 €** | 54.3 % | **31.7 %** | 3.57 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.40 €** | 53.7 % | **43.5 %** | 8.49 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.40 €** | 53.7 % | **43.5 %** | 8.49 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8027 | 14.50 € | **13.90 €** | 14.1 % | **9.4 %** | 14.00 € | stávame sa najlacnejší |
| Solight lokátor na bicykel, Find My kompatibilný | 15.50 € | **14.90 €** | 41.6 % | **36.1 %** | 15.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.30 € | **5.70 €** | 48.9 % | **34.7 %** | 5.80 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **112.90 €** | 10.4 % | **9.8 %** | 113.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E3S (čierny) | 197.50 € | **196.90 €** | 14.2 % | **13.9 %** | 197.00 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 4 zásuvky, 3m, biela | 9.10 € | **8.60 €** | 12.3 % | **6.1 %** | 6.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 1,5m, b... | 9.10 € | **8.60 €** | 11.6 % | **5.5 %** | 6.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (DGS-105) | 16.00 € | **15.50 €** | 10.6 % | **7.2 %** | 15.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, biely | 6.60 € | **6.10 €** | 47.4 % | **36.2 %** | 6.11 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 10.00 € | **9.50 €** | 43.9 % | **36.7 %** | 9.52 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.90 € | **6.40 €** | 47.2 % | **36.6 %** | 6.42 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.00 € | **19.50 €** | 38.4 % | **34.9 %** | 19.54 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 7.30 € | **6.80 €** | 54.6 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Solight LED reflektor PRO so senzorom, 30W, 2760lm, ... | 20.50 € | **20.00 €** | 48.1 % | **44.5 %** | 20.06 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **4.70 €** | 49.4 % | **35.0 %** | 4.76 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.50 € | **14.00 €** | 44.1 % | **39.1 %** | 14.06 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.80 €** | 53.8 % | **43.2 %** | 6.88 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.80 €** | 53.8 % | **43.2 %** | 6.88 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.00 € | **5.50 €** | 46.9 % | **34.7 %** | 5.58 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.20 € | **4.70 €** | 48.9 % | **34.5 %** | 4.78 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Pro10 (ružovo-zlaté) | 26.00 € | **25.50 €** | 14.8 % | **12.5 %** | 25.58 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.70 €** | 54.5 % | **36.1 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.80 € | **6.30 €** | 54.0 % | **42.7 %** | 6.40 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.20 €** | 49.3 % | **33.4 %** | 4.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.30 € | **4.80 €** | 47.6 % | **33.6 %** | 4.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **11.00 €** | 38.5 % | **32.5 %** | 11.16 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 10.50 € | **10.00 €** | 43.7 % | **36.9 %** | 10.17 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **13.50 €** | 38.3 % | **33.4 %** | 13.70 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-BH-3A-W-WiFi | 30.50 € | **30.00 €** | 15.5 % | **13.7 %** | 30.20 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 14.50 € | **14.00 €** | 20.5 % | **16.4 %** | 14.21 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-EH-16A-W-WiFi | 30.50 € | **30.00 €** | 15.3 % | **13.4 %** | 30.25 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **30.00 €** | 39.2 % | **36.9 %** | 30.27 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.50 € | **12.00 €** | 22.4 % | **17.5 %** | 12.27 € | stávame sa najlacnejší |
| Prenosná pumpa Flextail Tiny Pump 2 (oranžová) | 22.50 € | **22.00 €** | 15.0 % | **12.4 %** | 22.27 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 36.50 € | **36.00 €** | 7.8 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.50 € | **24.00 €** | 26.5 % | **23.9 %** | 24.31 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 46.50 € | **46.00 €** | 11.9 % | **10.7 %** | 46.32 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.00 €** | 40.4 % | **34.3 %** | 11.32 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **15.00 €** | 39.9 % | **35.4 %** | 15.33 € | stávame sa najlacnejší |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 22.50 € | **22.00 €** | 9.9 % | **7.5 %** | 22.33 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.50 € | **38.00 €** | 39.5 % | **37.7 %** | 38.35 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.50 € | **26.00 €** | 37.0 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.50 € | **18.00 €** | 31.6 % | **28.0 %** | 18.37 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, vypínač,... | 10.50 € | **10.00 €** | 29.7 % | **23.6 %** | 10.38 € | stávame sa najlacnejší |
| Tester autobatérií UNI-T UT673A | 35.00 € | **34.50 €** | 11.2 % | **9.7 %** | 34.89 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 25.00 € | **24.50 €** | 22.8 % | **20.4 %** | 24.89 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 11.50 € | **11.00 €** | 31.3 % | **25.6 %** | 11.39 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.50 € | **15.00 €** | 14.1 % | **10.5 %** | 15.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **27.00 €** | 11.2 % | **9.2 %** | 27.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161D | 68.00 € | **67.50 €** | 10.6 % | **9.8 %** | 67.89 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 47.50 € | **47.00 €** | 13.0 % | **11.8 %** | 47.39 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 209.50 € | **209.00 €** | 14.6 % | **14.3 %** | 209.39 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 46.00 € | **45.50 €** | 13.1 % | **11.9 %** | 45.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 59.50 € | **59.00 €** | 12.9 % | **11.9 %** | 59.39 € | stávame sa najlacnejší |
| Tester SMD UNI-T UT116C | 18.00 € | **17.50 €** | 8.4 % | **5.4 %** | 17.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot C1 Pro | 416.50 € | **416.00 €** | 5.3 % | **5.2 %** | 416.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 473.50 € | **473.00 €** | 9.4 % | **9.3 %** | 473.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 543.00 € | **542.50 €** | 6.6 % | **6.5 %** | 542.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 98.00 € | **97.50 €** | 13.6 % | **13.0 %** | 97.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM100A | 32.50 € | **32.00 €** | 9.4 % | **7.7 %** | 32.39 € | stávame sa najlacnejší |
| Laserový diaľkomer UNI-T LM50A | 20.50 € | **20.00 €** | 8.8 % | **6.1 %** | 20.39 € | stávame sa najlacnejší |
| Laserový diaľkomer UNI-T LM70A | 25.50 € | **25.00 €** | 9.5 % | **7.4 %** | 25.39 € | stávame sa najlacnejší |
| Merač vzdialenosti UNI-T LM120A | 43.00 € | **42.50 €** | 8.0 % | **6.7 %** | 42.89 € | stávame sa najlacnejší |
| Anemometer UNI-T UT363S | 29.50 € | **29.00 €** | 11.4 % | **9.5 %** | 29.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 61.50 € | **61.00 €** | 13.0 % | **12.1 %** | 61.39 € | stávame sa najlacnejší |
| Merač vlhkosti dreva UNI-T UT377A | 17.50 € | **17.00 €** | 8.5 % | **5.4 %** | 17.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI- T UT333 | 17.50 € | **17.00 €** | 9.4 % | **6.2 %** | 17.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 224.50 € | **224.00 €** | 14.7 % | **14.5 %** | 224.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 338.00 € | **337.50 €** | 14.9 % | **14.7 %** | 337.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 89.50 € | **89.00 €** | 14.4 % | **13.8 %** | 89.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT VOLT GREEN BOOST PRO 5000 SIN... | 349.50 € | **349.00 €** | 14.8 % | **14.7 %** | 349.39 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 46.00 € | **45.50 €** | 12.5 % | **11.3 %** | 45.89 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 78.50 € | **78.00 €** | 12.3 % | **11.6 %** | 78.39 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 76.50 € | **76.00 €** | 13.9 % | **13.1 %** | 76.39 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387S | 92.00 € | **91.50 €** | 14.1 % | **13.4 %** | 91.89 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 78.50 € | **78.00 €** | 14.4 % | **13.7 %** | 78.39 € | stávame sa najlacnejší |
| TEESA TSA3507 ruční mixér 1200W sada | 36.50 € | **36.00 €** | 14.0 % | **12.4 %** | 36.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 148.00 € | **147.50 €** | 14.2 % | **13.8 %** | 147.89 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 286.50 € | **286.00 €** | 14.5 % | **14.3 %** | 286.39 € | stávame sa najlacnejší |
| Automat na horkou vodu NEDIS KAWD310FBK / 2.7 l / di... | 116.50 € | **116.00 €** | 14.5 % | **14.0 %** | 116.39 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 25.50 € | **25.00 €** | 12.5 % | **10.3 %** | 25.39 € | stávame sa najlacnejší |
| DOMO DO354VD | 132.50 € | **132.00 €** | 10.2 % | **9.8 %** | 132.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 26.50 € | **26.00 €** | 13.2 % | **11.0 %** | 26.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 33.00 € | **32.50 €** | 11.8 % | **10.1 %** | 32.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.00 € | **23.50 €** | 13.6 % | **11.2 %** | 23.89 € | stávame sa najlacnejší |
| Vysavač ruční TEESA TSA5017 | 56.00 € | **55.50 €** | 11.2 % | **10.2 %** | 55.89 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.50 € | **23.00 €** | 12.5 % | **10.1 %** | 23.39 € | stávame sa najlacnejší |
| Viacúčelový čistič na podlahy MOVA P10 Ultra, P10 Pr... | 22.00 € | **21.50 €** | 15.2 % | **12.6 %** | 21.89 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 210.50 € | **210.00 €** | 13.1 % | **12.9 %** | 210.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 59.00 € | **58.50 €** | 13.3 % | **12.4 %** | 58.89 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 112.50 € | **112.00 €** | 8.0 % | **7.5 %** | 112.39 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 285.50 € | **285.00 €** | 9.7 % | **9.5 %** | 285.39 € | stávame sa najlacnejší |
| Meteorologická stanice WS 6462 | 49.50 € | **49.00 €** | 9.4 % | **8.3 %** | 49.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.50 € | **18.00 €** | 41.2 % | **37.4 %** | 18.39 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 68.50 € | **68.00 €** | 7.8 % | **7.1 %** | 68.39 € | stávame sa najlacnejší |
| NEDIS ZBRC10WT chytré dálkové ovládání ZigBee | 15.50 € | **15.00 €** | 13.0 % | **9.4 %** | 15.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.00 € | **11.50 €** | 15.3 % | **10.5 %** | 11.89 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 65.50 € | **65.00 €** | 8.7 % | **7.9 %** | 65.39 € | stávame sa najlacnejší |
| Rádio outdoorové NEDIS RDDB3100GN | 108.00 € | **107.50 €** | 14.7 % | **14.2 %** | 107.89 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 90.50 € | **90.00 €** | 14.2 % | **13.5 %** | 90.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1000 URZ3406-LFP4 700W 12V | 122.00 € | **121.50 €** | 11.2 % | **10.7 %** | 121.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 84.50 € | **84.00 €** | 14.3 % | **13.6 %** | 84.39 € | stávame sa najlacnejší |
| Alcad AI - 133 linkový zesilovač se 2 výstupy / G=24dB | 20.00 € | **19.50 €** | 12.4 % | **9.6 %** | 19.89 € | stávame sa najlacnejší |
| Alcad AM - 187 zesilovač / UHF-BIII-DAB-FM / LTE700 | 26.00 € | **25.50 €** | 13.8 % | **11.6 %** | 25.89 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 27.50 € | **27.00 €** | 15.2 % | **13.1 %** | 27.39 € | stávame sa najlacnejší |
| Alcad CA-210 | 26.00 € | **25.50 €** | 10.7 % | **8.6 %** | 25.89 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 197.00 € | **196.50 €** | 11.0 % | **10.7 %** | 196.89 € | stávame sa najlacnejší |
| Autochladnička TEESA TSA5004.1 s funkcí ohřevu, 20l | 46.50 € | **46.00 €** | 7.6 % | **6.4 %** | 46.39 € | stávame sa najlacnejší |
| Chladící box TEESA TSA5007 25L DC12/24V AC 230V -22°C | 175.50 € | **175.00 €** | 14.9 % | **14.5 %** | 175.39 € | stávame sa najlacnejší |
| Chladící box TEESA TSA5008 13L DC12/24V AC 230V -22°C | 134.50 € | **134.00 €** | 14.7 % | **14.3 %** | 134.39 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6004 40l, 12V/24V/230V/baterie... | 260.00 € | **259.50 €** | 14.8 % | **14.6 %** | 259.89 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6005 50l, 12V/24V/230V/baterie... | 254.00 € | **253.50 €** | 14.7 % | **14.5 %** | 253.89 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 124.50 € | **124.00 €** | 14.2 % | **13.8 %** | 124.39 € | stávame sa najlacnejší |
| Stropné svetlo Yeelight C2201C400 | 64.50 € | **64.00 €** | 15.7 % | **14.8 %** | 64.40 € | stávame sa najlacnejší |
| 3D Tlačiareň Creality CR-10 SE | 189.00 € | **188.50 €** | 14.7 % | **14.4 %** | 188.90 € | stávame sa najlacnejší |
| D-LINK AC13U | 14.00 € | **13.50 €** | 11.4 % | **7.4 %** | 13.90 € | stávame sa najlacnejší |
| LAMAX SoundKid1 pink | 16.00 € | **15.50 €** | 11.1 % | **7.6 %** | 15.90 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.00 € | **104.50 €** | 10.0 % | **9.5 %** | 104.90 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 177.00 € | **176.50 €** | 7.7 % | **7.4 %** | 176.90 € | stávame sa najlacnejší |
| Electrolux 600 Gril EMS4253TBX | 267.00 € | **266.50 €** | 8.2 % | **8.0 %** | 266.90 € | stávame sa najlacnejší |
| GORENJE F4142PW | 222.00 € | **221.50 €** | 8.1 % | **7.8 %** | 221.90 € | stávame sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 451.00 € | **450.50 €** | 7.0 % | **6.9 %** | 450.90 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **15.00 €** | 45.9 % | **41.1 %** | 15.41 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **12.00 €** | 46.0 % | **40.2 %** | 12.41 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 28.50 € | **28.00 €** | 38.6 % | **36.1 %** | 28.41 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 60.50 € | **60.00 €** | 37.2 % | **36.0 %** | 60.41 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.50 € | **12.00 €** | 27.0 % | **22.0 %** | 12.42 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.50 € | **16.00 €** | 10.0 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 17.50 € | **17.00 €** | 11.8 % | **8.6 %** | 17.43 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 38.4 % | **35.1 %** | 20.45 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 30.50 € | **30.00 €** | 38.4 % | **36.1 %** | 30.45 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS ONIKUMA T308 čierna | 10.50 € | **10.00 €** | 12.2 % | **6.8 %** | 10.46 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.50 € | **27.00 €** | 34.4 % | **32.0 %** | 27.47 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.50 € | **31.00 €** | 20.7 % | **18.8 %** | 31.48 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.50 € | **14.00 €** | 33.7 % | **29.0 %** | 14.48 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.48 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **13.00 €** | 14.0 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.50 € | **21.00 €** | 38.2 % | **35.0 %** | 21.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.50 € | **22.00 €** | 31.8 % | **28.9 %** | 22.49 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X12 | 17.50 € | **17.00 €** | 15.6 % | **12.3 %** | 17.49 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3020.90 € | **3020.50 €** | 10.0 % | **10.0 %** | 3020.71 € | stávame sa najlacnejší |
| ETA 4216 90000 | 94.90 € | **94.50 €** | 5.9 % | **5.4 %** | 94.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Motorcycle Intercom EJEAS K1 | 107.90 € | **107.50 €** | 16.0 % | **15.6 %** | 107.64 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 92.90 € | **92.50 €** | 12.8 % | **12.3 %** | 92.72 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 105.90 € | **105.50 €** | 8.3 % | **7.9 %** | 105.73 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 119.90 € | **119.50 €** | 13.8 % | **13.5 %** | 119.79 € | stávame sa najlacnejší |
| Strong LEAP-S3 Google TV 4K UHD Android TV multimedi... | 64.90 € | **64.50 €** | 5.7 % | **5.0 %** | 64.82 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 124.90 € | **124.50 €** | 10.3 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio OpenRock S2 (blackE) | 64.90 € | **64.50 €** | 11.6 % | **10.9 %** | 64.83 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **77.50 €** | 15.0 % | **14.4 %** | 77.89 € | stávame sa najlacnejší |
| Fixed pouzdro Google P 8a FIXOP3-1348-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 7.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 17 P FIXMMY-1602-BK | 13.90 € | **13.50 €** | 12.1 % | **8.9 %** | 10.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 17 PM FIXMMY-1603-BK | 13.90 € | **13.50 €** | 12.1 % | **8.9 %** | 11.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro Apple 17A FIXOP3-1601-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro Xiaomi R A5 FIXOP3-1571-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro Xiaom 15T P FIXOP3-1578-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro Xiaom RN 13 FIXOP3-1282-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.60 €** | 50.8 % | **44.8 %** | 9.61 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.80 €** | 49.4 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.40 € | **5.00 €** | 46.8 % | **36.0 %** | 5.03 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.50 € | **9.10 €** | 44.1 % | **38.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.90 € | **4.50 €** | 55.6 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 4.20 € | **3.80 €** | 48.5 % | **34.3 %** | 3.87 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.90 €** | 55.5 % | **48.0 %** | 7.98 € | stávame sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.70 € | **5.30 €** | 54.0 % | **43.2 %** | 5.39 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **8.40 €** | 38.4 % | **32.1 %** | 8.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.50 €** | 40.4 % | **35.3 %** | 10.60 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.50 €** | 40.4 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 10m | 12.90 € | **12.50 €** | 19.7 % | **16.0 %** | 12.79 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.90 € | **15.50 €** | 10.6 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 47.0 % | **42.1 %** | 11.84 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.50 €** | 45.7 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.50 €** | 19.3 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **10.50 €** | 45.5 % | **40.2 %** | 10.86 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 2.20 € | **1.80 €** | 56.9 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.90 €** | 57.1 % | **29.8 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.59 € | stávame sa najlacnejší |
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
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 4.10 € | **3.70 €** | 47.5 % | **33.1 %** | 3.80 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.90 € | **22.50 €** | 15.1 % | **13.1 %** | 22.65 € | stávame sa najlacnejší |
| Cycplus G1 bicycle computer | 22.90 € | **22.50 €** | 15.1 % | **13.1 %** | 22.65 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.50 €** | 11.4 % | **9.9 %** | 29.67 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.90 € | **16.50 €** | 35.4 % | **32.2 %** | 16.70 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.50 €** | 35.5 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Maono G1 Neo Sound Card Black | 44.90 € | **44.50 €** | 13.3 % | **12.3 %** | 44.70 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 17.90 € | **17.50 €** | 28.7 % | **25.8 %** | 17.72 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **25.50 €** | 39.1 % | **36.9 %** | 25.73 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.90 € | **41.50 €** | 34.9 % | **33.6 %** | 41.73 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.50 €** | 20.3 % | **18.7 %** | 29.74 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, čierna | 30.90 € | **30.50 €** | 38.9 % | **37.1 %** | 30.75 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.90 € | **31.50 €** | 38.7 % | **37.0 %** | 31.77 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 24.90 € | **24.50 €** | 10.9 % | **9.1 %** | 24.78 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.50 €** | 39.1 % | **35.8 %** | 16.79 € | stávame sa najlacnejší |
| Sekáček potravin TEESA TSA3227 | 21.90 € | **21.50 €** | 10.2 % | **8.2 %** | 21.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 29.90 € | **29.50 €** | 34.4 % | **32.6 %** | 29.80 € | stávame sa najlacnejší |
| Stropné svietidlo Yeelight C2201C235 | 37.90 € | **37.50 €** | 6.9 % | **5.8 %** | 37.80 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.90 € | **58.50 €** | 35.6 % | **34.7 %** | 58.80 € | stávame sa najlacnejší |
| Maxxo rádio DAB+/FM PB01 | 29.90 € | **29.50 €** | 11.1 % | **9.6 %** | 29.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.50 €** | 39.6 % | **36.8 %** | 19.80 € | stávame sa najlacnejší |
| Inteligentné okuliare COLMI G06 (ružové) | 29.90 € | **29.50 €** | 7.0 % | **5.6 %** | 29.81 € | stávame sa najlacnejší |
| Inteligentné okuliare COLMI G06 (transparentné) | 29.90 € | **29.50 €** | 7.0 % | **5.6 %** | 29.81 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.90 € | **55.50 €** | 36.4 % | **35.5 %** | 55.81 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 16.90 € | **16.50 €** | 32.9 % | **29.7 %** | 16.83 € | stávame sa najlacnejší |
| Filters ND/PL 8/16/32 Freewell for DJI Neo | 16.90 € | **16.50 €** | 9.1 % | **6.5 %** | 16.83 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.90 € | **45.50 €** | 41.6 % | **40.3 %** | 45.85 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.90 € | **54.50 €** | 38.3 % | **37.3 %** | 54.86 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 21.90 € | **21.50 €** | 24.6 % | **22.3 %** | 21.87 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **41.50 €** | 15.1 % | **14.0 %** | 41.87 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.90 € | **16.50 €** | 12.7 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 263.90 € | **263.50 €** | 8.6 % | **8.5 %** | 263.76 € | stávame sa najlacnejší |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 336.90 € | **336.50 €** | 15.1 % | **14.9 %** | 336.79 € | stávame sa najlacnejší |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 9.00 € | **8.70 €** | 48.1 % | **43.2 %** | 8.79 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.70 € | **3.40 €** | 47.5 % | **35.5 %** | 3.44 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.20 € | **2.90 €** | 48.7 % | **34.7 %** | 2.96 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.60 € | **3.30 €** | 46.3 % | **34.1 %** | 3.37 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 3.20 € | **2.90 €** | 46.2 % | **32.5 %** | 2.99 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 2.10 € | **1.80 €** | 52.4 % | **30.7 %** | 1.85 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 2.00 € | **1.70 €** | 54.9 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight HDMI spojka, HDMI zdierka - HDMI zdierka, pr... | 1.10 € | **0.80 €** | 51.6 % | **10.2 %** | 0.85 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.80 €** | 47.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 5.00 € | **4.70 €** | 54.0 % | **44.7 %** | 4.71 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.80 € | **3.50 €** | 47.8 % | **36.1 %** | 3.51 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.10 €** | 45.9 % | **14.7 %** | 1.12 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.80 € | **2.50 €** | 50.8 % | **34.6 %** | 2.55 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.80 € | **2.50 €** | 50.8 % | **34.6 %** | 2.55 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.40 € | **3.10 €** | 47.0 % | **34.1 %** | 3.17 € | stávame sa najlacnejší |
| Solight LED svietidlo pracovné, 120+40lm, 3W COB + 3... | 3.90 € | **3.60 €** | 53.2 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.00 € | **7.70 €** | 38.1 % | **32.9 %** | 7.80 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 2.80 € | **2.50 €** | 46.9 % | **31.1 %** | 2.60 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 3m, biela | 9.10 € | **8.80 €** | 9.8 % | **6.1 %** | 6.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.80 € | **9.60 €** | 14.5 % | **12.1 %** | 9.69 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 8.90 € | **8.70 €** | 10.6 % | **8.2 %** | 8.79 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.80 € | **9.60 €** | 26.3 % | **23.7 %** | 9.69 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.30 € | **9.10 €** | 14.2 % | **11.8 %** | 9.19 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.70 € | **2.50 €** | 47.3 % | **36.4 %** | 2.51 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.10 € | **1.90 €** | 47.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda červená, závesná, 60cm,... | 4.50 € | **4.30 €** | 49.3 % | **42.7 %** | 4.37 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.30 € | **5.10 €** | 22.8 % | **18.1 %** | 5.19 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.80 € | **5.60 €** | 28.8 % | **24.4 %** | 5.69 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 6.00 € | **5.80 €** | 20.4 % | **16.4 %** | 5.89 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 6.00 € | **5.80 €** | 20.4 % | **16.4 %** | 5.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 6.50 € | **6.30 €** | 11.0 % | **7.6 %** | 6.39 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.90 € | **6.70 €** | 35.8 % | **31.9 %** | 6.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.20 € | **7.00 €** | 23.8 % | **20.3 %** | 7.09 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 6.30 € | **6.10 €** | 20.0 % | **16.1 %** | 6.19 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 6.90 € | **6.70 €** | 21.4 % | **17.9 %** | 6.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **4.80 €** | 28.2 % | **23.1 %** | 4.89 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight zástrčka plochá priama, IP20, čierna | 0.90 € | **0.70 €** | 52.4 % | **18.6 %** | 0.80 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.20 € | **1.00 €** | 54.9 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.50 € | **1.30 €** | 50.6 % | **30.5 %** | 1.35 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.30 € | **1.10 €** | 51.0 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.20 €** | 56.1 % | **43.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.40 € | **2.20 €** | 47.8 % | **35.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.30 € | **3.10 €** | 52.4 % | **43.2 %** | 3.14 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W COB, 3x AAA | 3.90 € | **3.70 €** | 16.1 % | **10.2 %** | 3.79 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.90 €** | 46.2 % | **39.1 %** | 4.00 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 9.10 € | **8.90 €** | 24.8 % | **22.0 %** | 8.99 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.60 € | **7.40 €** | 29.8 % | **26.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 8.60 € | **8.40 €** | 35.8 % | **32.6 %** | 8.49 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 8.10 € | **7.90 €** | 32.8 % | **29.5 %** | 7.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.00 € | **9.80 €** | 12.4 % | **10.2 %** | 9.89 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.80 €** | 38.3 % | **35.5 %** | 9.90 € | stávame sa najlacnejší |
| Salente ProVacs | 57.00 € | **56.90 €** | 5.8 % | **5.6 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 49.00 € | **48.90 €** | 24.8 % | **24.5 %** | 48.95 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 26.4 % | **25.8 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.90 €** | 38.4 % | **37.7 %** | 20.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 22.00 € | **21.90 €** | 38.4 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.00 € | **21.90 €** | 29.4 % | **28.8 %** | 21.96 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.90 €** | 54.5 % | **54.2 %** | 47.97 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 58.00 € | **57.90 €** | 29.5 % | **29.3 %** | 57.98 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 40.00 € | **39.90 €** | 38.2 % | **37.9 %** | 39.98 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 23.00 € | **22.90 €** | 39.2 % | **38.6 %** | 22.99 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 59.00 € | **58.90 €** | 13.2 % | **13.0 %** | 58.99 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.90 €** | 25.3 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 18.00 € | **17.90 €** | 34.4 % | **33.6 %** | 17.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 20.00 € | **19.90 €** | 24.7 % | **24.1 %** | 19.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.00 € | **24.90 €** | 22.9 % | **22.4 %** | 24.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 29.00 € | **28.90 €** | 23.9 % | **23.5 %** | 28.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 34.00 € | **33.90 €** | 26.1 % | **25.7 %** | 33.99 € | stávame sa najlacnejší |
| ND16 filter Freewell pre DJI Mini 5 Pro | 19.00 € | **18.90 €** | 12.6 % | **12.0 %** | 18.99 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.40 € | **4.30 €** | 47.8 % | **44.5 %** | 4.32 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 6.90 € | **6.80 €** | 34.5 % | **32.6 %** | 6.85 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.70 € | **6.60 €** | 13.2 % | **11.6 %** | 6.65 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, bi... | 6.40 € | **6.30 €** | 34.8 % | **32.7 %** | 6.36 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.30 €** | 26.3 % | **24.3 %** | 6.36 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.30 €** | 7.1 % | **5.4 %** | 6.36 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.20 € | **4.10 €** | 38.2 % | **35.0 %** | 4.16 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.70 € | **6.60 €** | 37.6 % | **35.5 %** | 6.67 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.30 €** | 45.4 % | **42.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 7.40 € | **7.30 €** | 12.0 % | **10.5 %** | 7.39 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.80 €** | 45.4 % | **42.9 %** | 5.89 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E1... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 2.10 € | **2.00 €** | 51.1 % | **43.9 %** | 2.02 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 3000K, 510lm | 0.80 € | **0.70 €** | 22.7 % | **7.4 %** | 0.72 € | stávame sa najlacnejší |
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
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.50 € | **1.40 €** | 16.1 % | **8.4 %** | 1.49 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.60 €** | 37.2 % | **32.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.30 € | **1.20 €** | 22.9 % | **13.4 %** | 1.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.50 €** | 21.4 % | **18.1 %** | 3.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.50 € | **3.40 €** | 20.1 % | **16.6 %** | 3.49 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.90 €** | 23.2 % | **17.0 %** | 1.99 € | stávame sa najlacnejší |
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
| Solight LED žiarovka, bodová , 7W, GU10, 4000K, 595l... | 1.00 € | **0.90 €** | 23.2 % | **10.9 %** | 0.99 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, biele... | 1.70 € | **1.60 €** | 53.6 % | **44.5 %** | 1.61 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **1.80 €** | 36.7 % | **29.5 %** | 1.89 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.80 €** | 23.6 % | **17.1 %** | 1.89 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.90 €** | 56.3 % | **53.2 %** | 4.91 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight LED reflektor PRO so senzorom, 10W, 920lm, 5... | 13.00 € | **12.90 €** | 46.0 % | **44.9 %** | 12.92 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 5.80 € | **5.70 €** | 54.6 % | **51.9 %** | 5.72 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.60 € | **8.50 €** | 36.6 % | **35.0 %** | 8.54 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.95 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.10 € | **5.00 €** | 35.9 % | **33.3 %** | 5.05 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.10 € | **6.00 €** | 32.6 % | **30.4 %** | 6.05 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.90 €** | 45.7 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 16.00 € | **15.90 €** | 13.7 % | **13.0 %** | 15.96 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.90 €** | 38.5 % | **37.5 %** | 12.96 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 2m | 4.80 € | **4.70 €** | 37.9 % | **35.0 %** | 4.76 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 13.4 % | **11.8 %** | 7.06 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.40 €** | 36.3 % | **33.8 %** | 5.48 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.10 € | **5.00 €** | 37.3 % | **34.6 %** | 5.08 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.90 €** | 38.4 % | **36.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.90 € | **9.80 €** | 28.2 % | **26.9 %** | 9.89 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.90 €** | 25.1 % | **23.8 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.50 €** | 24.8 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.20 €** | 38.7 % | **35.5 %** | 4.29 € | stávame sa najlacnejší |
| Solight nabíjačka s LCD displejom, AC 230V, 450mA, 4... | 14.00 € | **13.90 €** | 8.6 % | **7.8 %** | 13.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **7.40 €** | 38.9 % | **37.0 %** | 7.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **4.50 €** | 33.6 % | **30.7 %** | 4.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.20 €** | 28.2 % | **25.8 %** | 5.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.20 €** | 18.5 % | **15.8 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.50 € | **9.40 €** | 32.9 % | **31.5 %** | 9.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.90 €** | 25.4 % | **23.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.30 €** | 43.8 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1RC 16,0" | 118.00 € | **117.90 €** | 14.6 % | **14.5 %** | 117.95 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 110.00 € | **109.90 €** | 20.0 % | **19.9 %** | 109.96 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 89.00 € | **88.90 €** | 13.5 % | **13.4 %** | 88.99 € | stávame sa najlacnejší |

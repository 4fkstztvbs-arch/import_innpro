# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-02

Vstup: `premiumstoresk_20260902_0930.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5791**
- Návrh **zvýšiť** cenu: **254** produktov
- Návrh **znížiť** cenu: **1176** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4361** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **328**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (254)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.90 € | **362.50 €** | 15.0 % | **19.5 %** | 348.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE F4142PW | 221.90 € | **232.00 €** | 8.0 % | **12.9 %** | 222.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 33 Ah MHPower MS33-12 | 57.50 € | **65.50 €** | -7.3 % | **5.6 %** | 57.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| ETA Presto 2094 90000, bílý | 94.00 € | **99.00 €** | 6.6 % | **12.3 %** | 94.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo LED800 antracit | 295.50 € | **300.50 €** | 5.1 % | **6.8 %** | 300.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo LED800 bílý | 295.50 € | **300.50 €** | 5.1 % | **6.8 %** | 300.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux LKR64022AW | 458.90 € | **463.50 €** | 6.0 % | **7.0 %** | 459.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux LIB60420CK | 204.50 € | **208.00 €** | 8.2 % | **10.0 %** | 204.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **16.90 €** | 20.1 % | **46.0 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **29.50 €** | 15.2 % | **26.3 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (black) | 11.90 € | **14.50 €** | 16.7 % | **42.2 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.90 € | **179.50 €** | 7.7 % | **9.3 %** | 177.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EOD3H40BX | 224.90 € | **227.50 €** | 6.8 % | **8.0 %** | 225.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **17.00 €** | 10.9 % | **26.6 %** | 16.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 3601 | 96.90 € | **99.00 €** | 5.4 % | **7.7 %** | 99.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 06A1 | 105.00 € | **106.90 €** | 7.7 % | **9.7 %** | 105.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 32.00 € | **33.90 €** | 36.9 % | **45.0 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 23.00 € | **24.90 €** | 46.1 % | **58.2 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.12 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.12 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 18.12 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy OFFICE M40 Vertical | 17.50 € | **19.00 €** | 7.7 % | **16.9 %** | 17.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.00 € | **42.50 €** | 7.4 % | **11.3 %** | 41.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje BMX201M2BG | 170.50 € | **172.00 €** | 9.1 % | **10.0 %** | 170.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 172.50 € | **174.00 €** | 7.5 % | **8.4 %** | 172.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 118.50 € | **119.90 €** | 12.2 % | **13.5 %** | 118.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 37.50 € | **38.90 €** | 6.7 % | **10.7 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.50 € | **39.90 €** | 34.3 % | **39.2 %** | 38.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.6 % | **12.6 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BC50D2V0 | 15.90 € | **17.00 €** | 10.0 % | **17.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.50 € | **14.50 €** | 24.9 % | **34.1 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny týždenný časový spínač, 16 režimov... | 8.60 € | **9.50 €** | 45.1 % | **60.2 %** | 8.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.00 € | **36.90 €** | 7.7 % | **10.4 %** | 36.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 55.00 € | **55.90 €** | 10.1 % | **11.9 %** | 55.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1004500 | 51.00 € | **51.90 €** | 10.1 % | **12.0 %** | 51.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GS  G7-SE Wired Controller XBOx &PC Or | 39.00 € | **39.90 €** | 10.2 % | **12.8 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 35.00 € | **35.90 €** | 39.4 % | **43.0 %** | 35.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.00 € | **23.90 €** | 30.9 % | **36.1 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Veľkej Británie, typ G | 4.80 € | **5.50 €** | 17.9 % | **35.1 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **17.50 €** | 38.6 % | **43.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **8.10 €** | 27.8 % | **38.1 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 4.70 € | **5.30 €** | 22.5 % | **38.1 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 137 | 33.00 € | **33.50 €** | 9.9 % | **11.5 %** | 33.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.00 € | **11.50 €** | 7.2 % | **12.1 %** | 11.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.00 € | **16.50 €** | 8.3 % | **11.7 %** | 16.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90504 French press 800ml | 13.00 € | **13.50 €** | 10.0 % | **14.2 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Easy Chop | 33.00 € | **33.50 €** | 8.5 % | **10.2 %** | 33.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Sky B-4610 zlatý | 65.00 € | **65.50 €** | 9.1 % | **9.9 %** | 65.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Daily PV1100C | 23.00 € | **23.50 €** | 7.9 % | **10.2 %** | 23.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC517DE0 | 137.00 € | **137.50 €** | 8.8 % | **9.2 %** | 137.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 410090000 | 330.00 € | **330.50 €** | 6.9 % | **7.0 %** | 330.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.00 € | **110.50 €** | 9.7 % | **10.2 %** | 110.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RO6164EA | 142.00 € | **142.50 €** | 8.4 % | **8.8 %** | 142.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring Black velikost 8 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 8 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| CUBE1 Smart Ring White velikost 9 | 40.00 € | **40.50 €** | 7.2 % | **8.6 %** | 40.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDIN38646D | 494.00 € | **494.50 €** | 7.0 % | **7.1 %** | 494.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CIP 3E7L0W Rapido | 293.00 € | **293.50 €** | 8.0 % | **8.1 %** | 293.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E7K1-6BP | 69.00 € | **69.50 €** | 10.7 % | **11.5 %** | 69.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko EnergySpin B7WFU68416WBES | 415.00 € | **415.50 €** | 7.6 % | **7.7 %** | 415.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-AW592 WHITE 1 karton | 248.00 € | **248.50 €** | 9.1 % | **9.3 %** | 248.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Organic fragrance Peppermint | 16.00 € | **16.50 €** | 7.7 % | **11.0 %** | 16.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 61521kuchyňská váha Page | 22.00 € | **22.50 €** | 8.3 % | **10.7 %** | 22.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Eddie B-4821 šedý | 29.00 € | **29.50 €** | 8.2 % | **10.1 %** | 29.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.00 € | **60.50 €** | 9.4 % | **10.4 %** | 60.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH1833E0 | 147.00 € | **147.50 €** | 8.4 % | **8.8 %** | 147.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Crema 1 kg zrno | 20.00 € | **20.50 €** | 6.0 % | **8.7 %** | 20.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42329PC | 116.00 € | **116.50 €** | 8.9 % | **9.3 %** | 116.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 808/05 | 59.00 € | **59.50 €** | 7.2 % | **8.1 %** | 59.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BL16GE30 | 57.00 € | **57.50 €** | 7.5 % | **8.4 %** | 57.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Adria B-4780 bílá | 25.00 € | **25.50 €** | 5.0 % | **7.1 %** | 25.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO354VD | 131.00 € | **131.50 €** | 9.0 % | **9.4 %** | 131.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| EZIDRI FD1000 ULTRA DIGITAL | 268.00 € | **268.50 €** | 8.8 % | **9.0 %** | 268.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9286IB | 250.00 € | **250.50 €** | 7.0 % | **7.3 %** | 250.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42102SV | 98.00 € | **98.50 €** | 8.5 % | **9.0 %** | 98.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| PRIMO PR406IM | 127.00 € | **127.50 €** | 8.9 % | **9.3 %** | 127.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver VS5910X | 279.00 € | **279.50 €** | 8.9 % | **9.1 %** | 279.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 158.00 € | **158.50 €** | 14.1 % | **14.5 %** | 158.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.00 € | **39.50 €** | 14.6 % | **16.1 %** | 39.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo Sous Vide SV06 | 132.00 € | **132.50 €** | 8.3 % | **8.8 %** | 132.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT76325VW | 166.00 € | **166.50 €** | 8.4 % | **8.7 %** | 166.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT86325VI | 199.00 € | **199.50 €** | 7.5 % | **7.8 %** | 199.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 EFC226R | 248.00 € | **248.50 €** | 7.9 % | **8.1 %** | 248.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WHT643E4XBG | 246.00 € | **246.50 €** | 7.9 % | **8.1 %** | 246.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO B5RCNA406HXB3 | 520.00 € | **520.50 €** | 6.9 % | **7.1 %** | 520.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B5XRCNA366HXB | 508.00 € | **508.50 €** | 7.0 % | **7.1 %** | 508.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CDG1S514ESH | 238.00 € | **238.50 €** | 7.7 % | **8.0 %** | 238.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G10153 Horkovzdušná trouba | 169.00 € | **169.50 €** | 8.8 % | **9.1 %** | 169.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy GD 49B8-S | 286.00 € | **286.50 €** | 7.9 % | **8.0 %** | 286.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE WPNEI94A1SWIFI | 409.00 € | **409.50 €** | 6.9 % | **7.1 %** | 409.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10W | 337.00 € | **337.50 €** | 6.9 % | **7.1 %** | 337.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6401 PSB | 178.00 € | **178.50 €** | 8.8 % | **9.1 %** | 178.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica TFB 128 TX | 286.00 € | **286.50 €** | 7.9 % | **8.0 %** | 286.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BBIR17300BCS | 347.00 € | **347.50 €** | 6.9 % | **7.1 %** | 347.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rixon Soundplates | 42.00 € | **42.50 €** | 8.6 % | **9.9 %** | 42.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Graef S 10005 | 113.00 € | **113.50 €** | 9.9 % | **10.4 %** | 113.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EF167 | 14.00 € | **14.50 €** | 8.8 % | **12.7 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux ESKQ9 | 14.00 € | **14.50 €** | 8.8 % | **12.7 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90502 French press Atria 800 ml | 11.00 € | **11.50 €** | 8.3 % | **13.2 %** | 11.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Status STA 176214 | 10.00 € | **10.50 €** | 8.0 % | **13.4 %** | 10.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco Pur Arabica Premium 1 kg zrno | 22.00 € | **22.50 €** | 6.1 % | **8.5 %** | 22.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B3BCNA324HS | 626.00 € | **626.50 €** | 9.5 % | **9.6 %** | 626.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.00 € | **36.50 €** | 8.7 % | **10.2 %** | 36.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FVB015X | 18.00 € | **18.50 €** | 7.3 % | **10.3 %** | 18.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA NS-SW100 BLACK | 221.00 € | **221.50 €** | 9.1 % | **9.3 %** | 221.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mio Smartbox IV | 30.00 € | **30.50 €** | 5.6 % | **7.3 %** | 30.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.00 € | **23.50 €** | 6.4 % | **8.7 %** | 23.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9215AV | 32.00 € | **32.50 €** | 7.7 % | **9.4 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO8709P | 28.00 € | **28.50 €** | 5.2 % | **7.1 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E200SM | 16.50 € | **17.00 €** | 12.0 % | **15.4 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip Red | 78.50 € | **79.00 €** | 10.0 % | **10.7 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip White | 78.50 € | **79.00 €** | 10.0 % | **10.7 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung The Frame Pro QE65LS03HW | 1778.00 € | **1778.50 €** | 7.6 % | **7.7 %** | 1778.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.00 € | **16.50 €** | 33.8 % | **38.0 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **15.50 €** | 26.6 % | **30.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.00 € | **21.50 €** | 26.4 % | **29.4 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **18.50 €** | 35.3 % | **39.0 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stropné svetlo Yeelight C2201C400 | 64.00 € | **64.50 €** | 14.8 % | **15.7 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.00 € | **11.50 €** | 35.1 % | **41.2 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.00 € | **13.50 €** | 41.7 % | **47.1 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.00 € | **22.50 €** | 8.7 % | **11.2 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonická zubná kefka s aplikáciou pre deti, sada konc... | 15.00 € | **15.50 €** | 14.0 % | **17.8 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Gracioso horizontal | 202.00 € | **202.50 €** | 12.9 % | **13.2 %** | 202.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 103.00 € | **103.50 €** | 5.0 % | **5.5 %** | 103.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.4 % | **8.3 %** | 56.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 280.00 € | **280.50 €** | 7.4 % | **7.6 %** | 280.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **23.50 €** | 14.0 % | **16.5 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 14.0 % | **16.0 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 10.00 € | **10.50 €** | 21.0 % | **27.0 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.20 € | **4.70 €** | 22.4 % | **37.0 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **36.50 €** | 14.6 % | **16.2 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **36.50 €** | 15.0 % | **16.6 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rapoo 9300M set klávesnice a myši černý | 31.50 € | **32.00 €** | 10.2 % | **12.0 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 60.00 € | **60.50 €** | 36.0 % | **37.2 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.50 €** | 40.0 % | **42.7 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung The Frame Pro QE55LS03HW | 1385.50 € | **1385.90 €** | 8.4 % | **8.4 %** | 1385.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 8501A | 150.50 € | **150.90 €** | 5.5 % | **5.8 %** | 150.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Pizzeria 927/01, černá | 205.50 € | **205.90 €** | 8.0 % | **8.2 %** | 205.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.6 % | **12.0 %** | 113.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 8401SE | 124.50 € | **124.90 €** | 7.1 % | **7.4 %** | 124.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun CG9043 | 214.50 € | **214.90 €** | 7.8 % | **8.0 %** | 214.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW5558E0 | 177.50 € | **177.90 €** | 8.6 % | **8.9 %** | 177.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer kuchyňský robot ZKR2010 | 175.50 € | **175.90 €** | 8.4 % | **8.7 %** | 175.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi FM2100 Mikrovlnná trouba s grilem | 108.50 € | **108.90 €** | 9.7 % | **10.1 %** | 108.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 210A | 216.50 € | **216.90 €** | 7.8 % | **8.0 %** | 216.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal INGENIO Expertise sada 3 ks | 64.50 € | **64.90 €** | 7.6 % | **8.3 %** | 64.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 1535SS | 206.50 € | **206.90 €** | 8.3 % | **8.5 %** | 206.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 20 | 233.50 € | **233.90 €** | 9.7 % | **9.9 %** | 233.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal SV9201E0 | 194.50 € | **194.90 €** | 8.7 % | **8.9 %** | 194.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.4 % | **14.2 %** | 11.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.50 € | **11.90 €** | 5.7 % | **9.4 %** | 11.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 713240002 | 11.50 € | **11.90 €** | 9.5 % | **13.3 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco INTENSO 500 g | 11.50 € | **11.90 €** | 5.0 % | **8.7 %** | 11.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson CR 50 | 14.50 € | **14.90 €** | 7.3 % | **10.2 %** | 14.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laica VT3509 | 11.50 € | **11.90 €** | 6.2 % | **9.9 %** | 11.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.50 € | **12.90 €** | 34.2 % | **38.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.50 € | **12.90 €** | 34.2 % | **38.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.50 € | **10.90 €** | 33.0 % | **38.0 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.50 € | **10.90 €** | 40.2 % | **45.5 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.50 € | **8.90 €** | 27.3 % | **33.3 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.70 € | **7.10 €** | 28.5 % | **36.1 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-PE145 | 39.50 € | **39.90 €** | 7.4 % | **8.5 %** | 39.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.90 €** | 10.1 % | **12.5 %** | 18.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-BC261 | 31.50 € | **31.90 €** | 6.5 % | **7.8 %** | 31.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 24010-56 | 40.50 € | **40.90 €** | 9.8 % | **10.9 %** | 40.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco SUPREMO 1 kg zrno | 21.50 € | **21.90 €** | 6.7 % | **8.7 %** | 21.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 23310-56/RH | 45.50 € | **45.90 €** | 13.8 % | **14.8 %** | 45.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Rouge BP3443 | 31.50 € | **31.90 €** | 8.3 % | **9.7 %** | 31.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZCK7650 | 32.50 € | **32.90 €** | 11.2 % | **12.5 %** | 32.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica KF 17191 | 29.50 € | **29.90 €** | 21.1 % | **22.7 %** | 29.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal HB 65KD38 | 55.50 € | **55.90 €** | 11.5 % | **12.3 %** | 55.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.6 % | **13.2 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Espresso Intenso 1 kg zrno | 17.50 € | **17.90 €** | 5.7 % | **8.1 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Combi Clean M + náhr. Static | 20.50 € | **20.90 €** | 7.9 % | **10.1 %** | 20.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI MiTag set 3ks Google Find My APD006 | 36.50 € | **36.90 €** | 7.0 % | **8.1 %** | 36.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Profi XL + náhrada Static Plus | 61.50 € | **61.90 €** | 8.6 % | **9.3 %** | 61.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.50 € | **32.90 €** | 12.4 % | **13.8 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.50 € | **22.90 €** | 11.7 % | **13.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.50 € | **28.90 €** | 33.2 % | **35.0 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM40T | 28.50 € | **28.90 €** | 10.9 % | **12.4 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Svetelný merač UNI-T UT383 | 16.50 € | **16.90 €** | 11.1 % | **13.8 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rooma Espresso A7 bílá | 537.50 € | **537.90 €** | 5.9 % | **6.0 %** | 537.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 394.50 € | **394.90 €** | 6.9 % | **7.1 %** | 394.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 350.50 € | **350.90 €** | 5.7 % | **5.8 %** | 350.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 110G | 325.50 € | **325.90 €** | 8.5 % | **8.7 %** | 325.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WG894A25 | 499.50 € | **499.90 €** | 9.0 % | **9.1 %** | 499.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Sensazione černý | 333.50 € | **333.90 €** | 6.8 % | **6.9 %** | 333.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH98A9WO | 278.50 € | **278.90 €** | 7.7 % | **7.9 %** | 278.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA CD-S303 BLACK | 378.50 € | **378.90 €** | 5.3 % | **5.4 %** | 378.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool FFB 8469 BV EE | 344.50 € | **344.90 €** | 7.0 % | **7.1 %** | 344.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GECS5C70XPA | 471.50 € | **471.90 €** | 7.0 % | **7.1 %** | 471.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 888.50 € | **888.90 €** | 7.3 % | **7.3 %** | 888.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.60 € | **5.90 €** | 38.0 % | **45.4 %** | 5.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.60 €** | 29.5 % | **38.5 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.70 € | **4.00 €** | 26.4 % | **36.6 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 5.40 € | **5.70 €** | 28.4 % | **35.5 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.50 € | **7.80 €** | 28.6 % | **33.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **5.30 €** | 28.2 % | **35.9 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.30 € | **5.50 €** | 27.5 % | **32.3 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **2.00 €** | 26.2 % | **40.2 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.00 € | **9.20 €** | 28.6 % | **31.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslařský trenažér HMS Premium ZW1600 | 669.90 € | **670.00 €** | 118298.7 % | **118316.4 %** | 669.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 367.90 € | **368.00 €** | 64923.0 % | **64940.7 %** | 367.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Venta Filter Hepa 13 for AP100 | 47.90 € | **48.00 €** | 10.0 % | **10.2 %** | 47.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 30.90 € | **31.00 €** | 12.1 % | **12.5 %** | 30.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 7.0 % | **7.4 %** | 23.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26800-56/RH | 25.90 € | **26.00 €** | 7.3 % | **7.7 %** | 25.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 1548/04 | 28.90 € | **29.00 €** | 9.5 % | **9.9 %** | 28.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 1548/05 | 28.90 € | **29.00 €** | 9.5 % | **9.9 %** | 28.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO436BL | 35.90 € | **36.00 €** | 9.0 % | **9.3 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO7059S | 35.90 € | **36.00 €** | 8.6 % | **8.9 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.20 € | **9.30 €** | 24.2 % | **25.6 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 31.90 € | **32.00 €** | 31.1 % | **31.5 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 16.90 € | **17.00 €** | 6.9 % | **7.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.80 € | **5.90 €** | 9.2 % | **11.0 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.10 € | **5.20 €** | 43.5 % | **46.3 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 6.30 € | **6.40 €** | 34.8 % | **36.9 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.30 € | **4.40 €** | 33.4 % | **36.5 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.50 € | **3.60 €** | 48.2 % | **52.4 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.50 € | **2.60 €** | 29.5 % | **34.6 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 22.2 % | **26.9 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 12.4 % | **16.1 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.80 € | **3.90 €** | 29.3 % | **32.7 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.30 € | **1.40 €** | 22.9 % | **32.4 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 8.7 % | **9.7 %** | 10.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-50245 | 12.90 € | **13.00 €** | 9.9 % | **10.8 %** | 12.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.10 € | **9.20 €** | 18.4 % | **19.7 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.00 € | **5.10 €** | 15.8 % | **18.1 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.00 € | **6.10 €** | 33.3 % | **35.5 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 6.20 € | **6.30 €** | 5.9 % | **7.6 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.10 € | **9.20 €** | 38.0 % | **39.5 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.90 € | **13.00 €** | 20.1 % | **21.1 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.30 €** | 8.7 % | **11.3 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.60 €** | 23.6 % | **26.3 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.20 € | **4.30 €** | 9.1 % | **11.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.30 € | **9.40 €** | 22.9 % | **24.3 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.70 € | **4.80 €** | 13.7 % | **16.1 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 23.3 % | **25.4 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.60 € | **8.70 €** | 5.6 % | **6.8 %** | 8.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.90 € | **10.00 €** | 25.6 % | **26.8 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.60 € | **9.70 €** | 34.8 % | **36.2 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 35B1 | 136.90 € | **137.00 €** | 5.7 % | **5.8 %** | 136.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente DigiChef+ kuchyňský robot | 124.90 € | **125.00 €** | 7.6 % | **7.7 %** | 124.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 100.90 € | **101.00 €** | 5.9 % | **6.0 %** | 101.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 251.90 € | **252.00 €** | 7.8 % | **7.9 %** | 252.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1502 | 235.90 € | **236.00 €** | 41593.2 % | **41610.9 %** | 235.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1801 | 235.90 € | **236.00 €** | 41593.2 % | **41610.9 %** | 235.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1176)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 7402.00 € | **6758.90 €** | 15.0 % | **5.0 %** | 6500.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3641.00 € | **3349.50 €** | 15.0 % | **5.8 %** | 3349.70 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **2909.90 €** | 15.0 % | **6.0 %** | 2910.00 € | stávame sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.50 €** | 15.0 % | **5.9 %** | 2645.65 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2573.90 € | **2350.00 €** | 15.0 % | **5.0 %** | 1825.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 669.00 € | **461.50 €** | 52.3 % | **5.1 %** | 437.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.90 €** | 64.7 % | **6.9 %** | 363.00 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2372.90 €** | 15.0 % | **6.5 %** | 2373.00 € | stávame sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 979.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA Z70 Ultra Roller kompletná sada – Metal Black | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 979.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.00 €** | 28.6 % | **5.9 %** | 633.50 € | stávame sa najlacnejší |
| Samsung OLED QE65S99H | 2914.50 € | **2782.00 €** | 10.0 % | **5.0 %** | 2758.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **334.00 €** | 48.8 % | **6.9 %** | 334.50 € | stávame sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2640.90 € | **2520.50 €** | 10.0 % | **5.0 %** | 1737.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **482.00 €** | 32.7 % | **6.8 %** | 482.50 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **525.90 €** | 28.6 % | **5.8 %** | 526.00 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 529.00 € | **418.00 €** | 32.9 % | **5.0 %** | 369.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2416.50 € | **2306.90 €** | 10.0 % | **5.0 %** | 1522.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2416.50 € | **2306.90 €** | 10.0 % | **5.0 %** | 1620.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **383.00 €** | 35.8 % | **6.4 %** | 383.50 € | stávame sa najlacnejší |
| BEKO HILG64220SW | 269.00 € | **164.00 €** | 72.3 % | **5.1 %** | 152.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO RFSA240M43WN | 469.00 € | **367.50 €** | 34.1 % | **5.1 %** | 367.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S85H | 2185.90 € | **2086.50 €** | 10.0 % | **5.0 %** | 1588.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LIR 60430 | 329.00 € | **231.90 €** | 49.1 % | **5.1 %** | 220.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **506.50 €** | 24.2 % | **5.0 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **983.50 €** | 15.0 % | **6.0 %** | 983.67 € | stávame sa najlacnejší |
| Electrolux EOF3H40TH | 339.00 € | **259.00 €** | 37.4 % | **5.0 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux KGS64362XX | 269.00 € | **190.90 €** | 48.2 % | **5.2 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 303.50 € | **228.90 €** | 43.2 % | **8.0 %** | 229.00 € | stávame sa najlacnejší |
| Gorenje W2PNEI84A1SW | 439.00 € | **369.90 €** | 35.3 % | **14.0 %** | 370.00 € | stávame sa najlacnejší |
| Beko BM3WFU3941WBW | 439.00 € | **372.50 €** | 23.9 % | **5.1 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE FN617EES5 | 469.00 € | **403.90 €** | 24.0 % | **6.8 %** | 404.00 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 746.50 € | **681.50 €** | 15.0 % | **5.0 %** | 662.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE65S85H | 1366.00 € | **1303.90 €** | 10.0 % | **5.0 %** | 880.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.50 €** | 15.0 % | **5.4 %** | 669.89 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 140.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 199.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 357.00 € | **303.50 €** | 72461.0 % | **61587.0 %** | 303.75 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 901.00 € | **848.90 €** | 15.0 % | **8.3 %** | 849.00 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 W | 159.00 € | **109.90 €** | 52.0 % | **5.0 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 B | 159.00 € | **109.90 €** | 52.0 % | **5.0 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Micro RGB MRE55R85H | 1045.90 € | **998.50 €** | 10.0 % | **5.0 %** | 869.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D Tlačiareň Creality K1 MAX | 543.50 € | **496.50 €** | 15.0 % | **5.1 %** | 458.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LHR3233CK | 199.00 € | **153.00 €** | 36.6 % | **5.0 %** | 128.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LaserPecker LX2 40W laserový gravír | 1879.50 € | **1834.90 €** | 15.0 % | **12.3 %** | 1835.00 € | stávame sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **410.90 €** | 18.3 % | **6.8 %** | 411.00 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 612.50 € | **570.00 €** | 15.0 % | **7.0 %** | 570.08 € | stávame sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 117.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 Ultra 12/256GB Black | 924.50 € | **882.50 €** | 10.0 % | **5.0 %** | 782.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 600.90 € | **560.50 €** | 15.0 % | **7.3 %** | 560.89 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **728.90 €** | 15.0 % | **9.2 %** | 729.00 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max robotický s mopom, výk... | 188.50 € | **150.50 €** | 31.9 % | **5.3 %** | 143.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **389.50 €** | 15.0 % | **5.1 %** | 279.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA K30 akumulátorový mopový stojanový vysávač | 422.90 € | **386.50 €** | 15.0 % | **5.1 %** | 164.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Black | 786.90 € | **751.50 €** | 10.0 % | **5.1 %** | 714.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Green | 786.90 € | **751.50 €** | 10.0 % | **5.1 %** | 714.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB White | 786.90 € | **751.50 €** | 10.0 % | **5.1 %** | 714.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 532.90 € | **498.50 €** | 15.0 % | **7.6 %** | 498.90 € | stávame sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **368.90 €** | 15.0 % | **5.3 %** | 369.00 € | stávame sa najlacnejší |
| Electrolux EOF3H50BK | 299.00 € | **267.90 €** | 17.3 % | **5.1 %** | 218.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Midland BTR1 Advanced, Single | 219.00 € | **187.90 €** | 25.0 % | **7.2 %** | 188.00 € | stávame sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 649.90 € | **619.90 €** | 15.0 % | **9.7 %** | 620.00 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 919.90 € | **889.90 €** | 15.0 % | **11.3 %** | 890.00 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 377.50 € | **348.90 €** | 15.0 % | **6.3 %** | 349.00 € | stávame sa najlacnejší |
| Vysávač MOVA Z200 Stick | 343.00 € | **315.50 €** | 14.2 % | **5.0 %** | 222.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 363A | 599.00 € | **571.90 €** | 10.0 % | **5.0 %** | 571.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 476.00 € | **448.90 €** | 15.0 % | **8.5 %** | 449.00 € | stávame sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 274.90 € | **248.00 €** | 18.2 % | **6.6 %** | 248.35 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 685.90 € | **659.90 €** | 15.0 % | **10.7 %** | 660.00 € | stávame sa najlacnejší |
| Čistiaci robot ULTENIC MX50 | 445.90 € | **419.90 €** | 15.0 % | **8.3 %** | 420.00 € | stávame sa najlacnejší |
| Cycplus T2 smart bike trainer | 615.90 € | **589.90 €** | 15.0 % | **10.2 %** | 590.00 € | stávame sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.90 €** | 15.0 % | **9.8 %** | 539.00 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.50 €** | 49.9 % | **19.6 %** | 98.90 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 544.50 € | **519.90 €** | 15.0 % | **9.8 %** | 520.00 € | stávame sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **575.00 €** | 10.9 % | **6.5 %** | 575.34 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **509.00 €** | 15.0 % | **9.9 %** | 509.05 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **348.00 €** | 15.1 % | **7.7 %** | 348.43 € | stávame sa najlacnejší |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 503.50 € | **479.90 €** | 15.0 % | **9.6 %** | 480.00 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 273.50 € | **249.90 €** | 15.0 % | **5.1 %** | 248.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AX | 513.50 € | **490.00 €** | 10.0 % | **5.0 %** | 454.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **64.50 €** | 43.8 % | **5.5 %** | 64.90 € | stávame sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 504.50 € | **481.50 €** | 10.0 % | **5.0 %** | 472.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 711.50 € | **688.50 €** | 10.1 % | **6.5 %** | 688.90 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 69.00 € | **46.00 €** | 58.9 % | **5.9 %** | 46.50 € | stávame sa najlacnejší |
| LG GBBSJ21DPY | 495.50 € | **472.90 €** | 10.0 % | **5.0 %** | 396.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 264.50 € | **241.90 €** | 15.0 % | **5.2 %** | 200.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 315.50 € | **293.00 €** | 15.0 % | **6.8 %** | 293.50 € | stávame sa najlacnejší |
| Gorenje RP619EEW5 | 480.90 € | **458.90 €** | 10.1 % | **5.0 %** | 449.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 274.50 € | **252.50 €** | 14.3 % | **5.2 %** | 244.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max White robotický s mopo... | 145.50 € | **123.90 €** | 24.7 % | **6.2 %** | 124.00 € | stávame sa najlacnejší |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 463.90 € | **442.90 €** | 10.1 % | **5.1 %** | 317.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 554.90 € | **533.90 €** | 10.0 % | **5.8 %** | 534.00 € | stávame sa najlacnejší |
| LG FA2S8V3GN3W | 443.50 € | **422.90 €** | 10.1 % | **5.0 %** | 422.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1329.90 €** | 15.0 % | **13.3 %** | 1330.00 € | stávame sa najlacnejší |
| Gorenje NRK620EABK4 | 443.90 € | **423.90 €** | 10.0 % | **5.1 %** | 330.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 98.50 € | **78.50 €** | 44.0 % | **14.7 %** | 78.90 € | stávame sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 180.90 € | **161.00 €** | 27.3 % | **13.3 %** | 161.04 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 657.90 € | **638.00 €** | 10.1 % | **6.7 %** | 638.50 € | stávame sa najlacnejší |
| BEKO BBIM12300X | 229.00 € | **209.50 €** | 14.9 % | **5.1 %** | 197.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 429.90 € | **410.50 €** | 10.0 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620EAW4 | 413.50 € | **394.50 €** | 10.1 % | **5.0 %** | 360.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **197.50 €** | 15.0 % | **5.2 %** | 187.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 572.50 € | **554.00 €** | 15.0 % | **11.3 %** | 554.45 € | stávame sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 395.50 € | **377.50 €** | 10.1 % | **5.1 %** | 343.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 67.50 € | **49.50 €** | 44.0 % | **5.6 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Catlink BayMax Lite intelligent self-cleaning cat li... | 357.50 € | **339.90 €** | 15.1 % | **9.4 %** | 340.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 138.50 € | **121.00 €** | 27363.8 % | **23893.7 %** | 121.03 € | stávame sa najlacnejší |
| Fén MOVA Aero C v ružovej farbe | 206.00 € | **188.90 €** | 14.6 % | **5.1 %** | 138.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Mini LED UE43M70H | 379.50 € | **362.50 €** | 10.0 % | **5.1 %** | 359.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **281.90 €** | 15.0 % | **8.6 %** | 282.00 € | stávame sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.50 €** | 14.9 % | **9.7 %** | 346.90 € | stávame sa najlacnejší |
| CANDY CCGMEE9025PX/E | 814.50 € | **798.00 €** | 10.0 % | **7.8 %** | 798.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C411 KIT 3MPx, outdoor, IP, WiFi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 45.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 57.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C260 IP, 8MPx, WiFi, prísvit | 79.90 € | **63.50 €** | 32.6 % | **5.4 %** | 62.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 638.00 € | **621.90 €** | 7.7 % | **5.0 %** | 520.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept ETV8360bcN | 539.50 € | **523.50 €** | 10.1 % | **6.8 %** | 523.90 € | stávame sa najlacnejší |
| ETA Storio II 2043 90030 černá | 346.50 € | **330.90 €** | 10.0 % | **5.1 %** | 269.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool TDLR 6240S EU/N | 339.50 € | **323.90 €** | 10.2 % | **5.1 %** | 322.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Waydoo submersible | 287.50 € | **271.90 €** | 15.0 % | **8.8 %** | 272.00 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 339.50 € | **324.00 €** | 10.0 % | **5.0 %** | 311.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 0028 98050 | 79.99 € | **64.50 €** | 30.6 % | **5.3 %** | 63.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy ECNBQT3518E Fresco | 494.90 € | **479.50 €** | 10.0 % | **6.6 %** | 479.90 € | stávame sa najlacnejší |
| Whirlpool MWSC 833 SB | 330.00 € | **315.00 €** | 10.0 % | **5.0 %** | 288.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210G | 472.90 € | **458.00 €** | 10.0 % | **6.5 %** | 458.50 € | stávame sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 403.50 € | **388.90 €** | 11.1 % | **7.1 %** | 389.00 € | stávame sa najlacnejší |
| CrockPot CSC062X | 169.00 € | **154.50 €** | 15.0 % | **5.1 %** | 154.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A6 bílá | 481.50 € | **467.00 €** | 10.0 % | **6.7 %** | 467.50 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 332.50 € | **318.00 €** | 10.1 % | **5.3 %** | 318.50 € | stávame sa najlacnejší |
| ETA Ambito 0516 90000 bílý/tyrkysový | 75.99 € | **61.50 €** | 30.0 % | **5.2 %** | 57.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 8/256GB (ZAFR0272CZ) | 313.00 € | **298.90 €** | 10.0 % | **5.1 %** | 275.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 46.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 129.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 129.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X70 Soundbar | 612.90 € | **598.90 €** | 15.0 % | **12.4 %** | 599.00 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 343.90 € | **330.00 €** | 10.1 % | **5.6 %** | 330.50 € | stávame sa najlacnejší |
| Beko B5RCNA416HXBR | 455.50 € | **441.90 €** | 10.1 % | **6.8 %** | 442.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 65.50 € | **51.90 €** | 33.5 % | **5.8 %** | 51.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **38.90 €** | 50.5 % | **11.5 %** | 39.00 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 311.50 € | **298.00 €** | 10.1 % | **5.3 %** | 298.50 € | stávame sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **34.50 €** | 54.8 % | **11.5 %** | 34.90 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 335.00 € | **322.00 €** | 14.9 % | **10.5 %** | 322.36 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 335.00 € | **322.00 €** | 14.9 % | **10.5 %** | 322.36 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C510W 3MPx, vonkajšia, IP, WiFi,... | 63.90 € | **51.00 €** | 31.7 % | **5.1 %** | 47.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RR8589CE | 411.90 € | **399.00 €** | 10.1 % | **6.6 %** | 399.50 € | stávame sa najlacnejší |
| Electrolux CFG526R | 279.50 € | **266.90 €** | 10.0 % | **5.0 %** | 263.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **665.90 €** | 15.0 % | **12.9 %** | 666.00 € | stávame sa najlacnejší |
| BEKO HIC 64401 | 159.00 € | **146.50 €** | 14.0 % | **5.0 %** | 143.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 176.50 € | **164.00 €** | 19.6 % | **11.1 %** | 164.30 € | stávame sa najlacnejší |
| ETA 0028 92020 | 79.99 € | **67.50 €** | 32.0 % | **11.4 %** | 67.90 € | stávame sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT100 PRO | 145.00 € | **132.90 €** | 14.8 % | **5.2 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **159.90 €** | 14.8 % | **6.8 %** | 159.96 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.90 € | **33.90 €** | 43.6 % | **6.1 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 378.90 € | **366.90 €** | 10.0 % | **6.6 %** | 367.00 € | stávame sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.50 €** | 50.2 % | **38.5 %** | 141.81 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica GWAS610DL | 254.50 € | **242.90 €** | 10.1 % | **5.1 %** | 237.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 79.50 € | **68.00 €** | 59.1 % | **36.1 %** | 68.06 € | stávame sa najlacnejší |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 270.50 € | **259.00 €** | 15.0 % | **10.1 %** | 259.23 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 231.00 € | **219.50 €** | 10.7 % | **5.2 %** | 219.90 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 375.50 € | **364.00 €** | 10.0 % | **6.7 %** | 364.50 € | stávame sa najlacnejší |
| Gorenje RK14CPS4 | 309.50 € | **298.00 €** | 10.1 % | **6.1 %** | 298.50 € | stávame sa najlacnejší |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 73.99 € | **62.50 €** | 37.8 % | **16.4 %** | 62.78 € | stávame sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 243.90 € | **232.50 €** | 10.2 % | **5.0 %** | 197.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.90 € | **135.50 €** | 15.5 % | **6.5 %** | 135.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 38.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **119.90 €** | 14.9 % | **5.2 %** | 111.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UNI-T UT521 tester uzemnenia | 140.00 € | **128.90 €** | 15.0 % | **5.9 %** | 129.00 € | stávame sa najlacnejší |
| Rowenta Extreme Dry Compact DH5250F0 | 242.90 € | **231.90 €** | 10.0 % | **5.0 %** | 191.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mini projektor Phillips N-140 s rozlíšením 720p (biely) | 128.50 € | **117.50 €** | 15.2 % | **5.3 %** | 112.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 69.50 € | **58.50 €** | 43.9 % | **21.1 %** | 58.76 € | stávame sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Nikon | 277.00 € | **266.00 €** | 14.9 % | **10.3 %** | 266.35 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **143.50 €** | 15.1 % | **6.9 %** | 143.90 € | stávame sa najlacnejší |
| Beko BU1154HCN | 289.00 € | **278.00 €** | 13.2 % | **8.9 %** | 278.50 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 380.00 € | **369.00 €** | 13.9 % | **10.6 %** | 369.50 € | stávame sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.00 €** | 25.0 % | **6.3 %** | 62.50 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 3-pack) | 232.50 € | **221.90 €** | 10.1 % | **5.1 %** | 99.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 124.50 € | **113.90 €** | 14.9 % | **5.1 %** | 109.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.90 €** | 14.9 % | **8.9 %** | 190.00 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.00 €** | 10.0 % | **6.8 %** | 340.50 € | stávame sa najlacnejší |
| Tefal RK364G10 Coppertinto | 69.90 € | **59.50 €** | 30.2 % | **10.8 %** | 59.90 € | stávame sa najlacnejší |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 272.90 € | **262.50 €** | 9.3 % | **5.2 %** | 261.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare RayNeo Air 4 Pro AR | 325.90 € | **315.50 €** | 15.0 % | **11.3 %** | 315.58 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **110.50 €** | 14.8 % | **5.3 %** | 88.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 31.50 € | **21.50 €** | 54.7 % | **5.6 %** | 21.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI1009OR | 32.90 € | **22.90 €** | 54.8 % | **7.7 %** | 23.00 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.15 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **181.00 €** | 15.0 % | **9.0 %** | 181.38 € | stávame sa najlacnejší |
| Guzzanti GZ 325 | 262.50 € | **252.50 €** | 10.1 % | **5.9 %** | 252.90 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 182.90 € | **173.00 €** | 15.1 % | **8.9 %** | 173.42 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 46.90 € | **37.00 €** | 42.3 % | **12.2 %** | 37.19 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C310 vonkajšia, IP, FHD, WiFi, p... | 48.50 € | **38.90 €** | 31.3 % | **5.3 %** | 36.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 49.50 € | **39.90 €** | 47.9 % | **19.2 %** | 39.96 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 38.50 € | **28.90 €** | 57.5 % | **18.2 %** | 29.00 € | stávame sa najlacnejší |
| CANON i-SENSYS MF3010 | 202.50 € | **193.00 €** | 10.2 % | **5.0 %** | 154.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 90.00 € | **80.50 €** | 17.4 % | **5.0 %** | 69.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **100.50 €** | 15.0 % | **5.2 %** | 95.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 180.90 € | **171.50 €** | 24.8 % | **18.3 %** | 171.79 € | stávame sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **38.50 €** | 38.7 % | **11.5 %** | 38.90 € | stávame sa najlacnejší |
| Beko TS190340N | 199.00 € | **189.90 €** | 14.8 % | **9.6 %** | 190.00 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 83.50 € | **74.50 €** | 17.9 % | **5.2 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovačka G21 Nefrit | 126.50 € | **117.50 €** | 18.0 % | **9.6 %** | 117.90 € | stávame sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 195.90 € | **187.00 €** | 10.1 % | **5.1 %** | 135.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q7 BF Black | 187.90 € | **179.00 €** | 10.2 % | **5.0 %** | 177.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 210.90 € | **202.00 €** | 24.9 % | **19.7 %** | 202.24 € | stávame sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **184.00 €** | 15.1 % | **9.8 %** | 184.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 50.90 € | **42.00 €** | 44.2 % | **19.0 %** | 42.50 € | stávame sa najlacnejší |
| Batéria Jupio Alkaline AA balenie 100ks | 44.00 € | **35.50 €** | 34.5 % | **8.5 %** | 35.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 53.50 € | **45.00 €** | 43.6 % | **20.7 %** | 45.34 € | stávame sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **236.00 €** | 15.1 % | **11.1 %** | 236.39 € | stávame sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **169.50 €** | 15.0 % | **9.5 %** | 169.90 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 117.90 € | **109.50 €** | 16.2 % | **7.9 %** | 109.89 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 39.90 € | **31.50 €** | 35.4 % | **6.9 %** | 31.90 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 291.00 € | **282.90 €** | 8.1 % | **5.1 %** | 282.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 326.00 € | **317.90 €** | 14.9 % | **12.1 %** | 318.00 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 42.00 € | **33.90 €** | 41.9 % | **14.6 %** | 34.00 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 147.00 € | **138.90 €** | 11.4 % | **5.3 %** | 122.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 177.90 € | **169.90 €** | 10.2 % | **5.2 %** | 140.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 92.90 € | **84.90 €** | 15.0 % | **5.1 %** | 80.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **38.50 €** | 28.3 % | **6.2 %** | 35.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 145.50 € | **137.50 €** | 24.7 % | **17.9 %** | 137.86 € | stávame sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 107.50 € | **99.50 €** | 14.8 % | **6.3 %** | 99.88 € | stávame sa najlacnejší |
| ETA 723590000 | 338.50 € | **330.50 €** | 10.1 % | **7.5 %** | 330.90 € | stávame sa najlacnejší |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 505.90 € | **498.00 €** | 10.1 % | **8.4 %** | 498.50 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 307.50 € | **299.90 €** | 15.0 % | **12.2 %** | 299.97 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **299.90 €** | 15.0 % | **12.2 %** | 299.97 € | stávame sa najlacnejší |
| Naparovač odevov Neakasa Magic 1 | 88.00 € | **80.50 €** | 14.8 % | **5.0 %** | 70.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48S | 165.50 € | **158.00 €** | 10.0 % | **5.1 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **331.00 €** | 15.0 % | **12.4 %** | 331.01 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45P-BK černé se sto... | 277.50 € | **270.00 €** | 21.1 % | **17.9 %** | 270.09 € | stávame sa najlacnejší |
| TP-LINK RE200 AC750 WiFi Range Extender | 29.90 € | **22.50 €** | 39.9 % | **5.3 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO244SV | 147.50 € | **140.50 €** | 10.2 % | **5.0 %** | 132.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 154.50 € | **147.50 €** | 10.2 % | **5.2 %** | 143.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 27.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 119.50 € | **112.50 €** | 11.8 % | **5.2 %** | 112.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 145.50 € | **138.50 €** | 14.9 % | **9.4 %** | 138.53 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 92.00 € | **85.00 €** | 14.8 % | **6.1 %** | 85.22 € | stávame sa najlacnejší |
| Electrolux EB61C4DB | 149.90 € | **143.00 €** | 10.1 % | **5.0 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Spájkovacia stanica FNIRSI DWS-200F s výkonom 200 W | 130.90 € | **124.00 €** | 15.0 % | **8.9 %** | 124.29 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 194.90 € | **188.00 €** | 10.2 % | **6.3 %** | 188.50 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 37.90 € | **31.00 €** | 42.6 % | **16.6 %** | 31.50 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 294.50 € | **287.90 €** | 10.1 % | **7.6 %** | 288.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **23.90 €** | 59.0 % | **24.6 %** | 23.99 € | stávame sa najlacnejší |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 237.50 € | **230.90 €** | 8.1 % | **5.1 %** | 207.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 103RB | 217.50 € | **210.90 €** | 10.1 % | **6.7 %** | 211.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **41.50 €** | 54.5 % | **33.6 %** | 41.73 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA420 Deodorizačný modul... | 42.00 € | **35.50 €** | 33.9 % | **13.1 %** | 35.75 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **78.00 €** | 15.2 % | **6.3 %** | 78.32 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 354.50 € | **348.00 €** | 15.1 % | **12.9 %** | 348.34 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **176.00 €** | 14.9 % | **10.8 %** | 176.38 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 47.50 € | **41.00 €** | 38.3 % | **19.3 %** | 41.50 € | stávame sa najlacnejší |
| Rowenta RO4931EA | 134.90 € | **128.50 €** | 10.3 % | **5.1 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Pink | 146.90 € | **140.50 €** | 10.1 % | **5.3 %** | 138.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.90 € | **82.50 €** | 15.1 % | **6.8 %** | 82.79 € | stávame sa najlacnejší |
| Gorenje W11NHPI84AS | 290.90 € | **284.50 €** | 10.1 % | **7.7 %** | 284.90 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 345.00 € | **338.90 €** | 14.9 % | **12.9 %** | 339.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 75.00 € | **68.90 €** | 14.8 % | **5.5 %** | 67.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| UTRAI JS1 Pro – štartér do auta | 68.90 € | **62.90 €** | 15.2 % | **5.2 %** | 44.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 53.90 € | **47.90 €** | 18.8 % | **5.6 %** | 43.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 176.90 € | **170.90 €** | 10.1 % | **6.4 %** | 171.00 € | stávame sa najlacnejší |
| JBL CHARGEES3 | 119.90 € | **113.90 €** | 15.6 % | **9.8 %** | 114.00 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 25.50 € | **19.50 €** | 55.1 % | **18.6 %** | 19.83 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.50 €** | 15.2 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| Beko VRT96425VD | 261.50 € | **255.50 €** | 10.1 % | **7.6 %** | 255.90 € | stávame sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.90 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 99.90 € | **94.00 €** | 25.0 % | **17.6 %** | 94.12 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **25.00 €** | 59.7 % | **29.2 %** | 25.50 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 279.90 € | **274.00 €** | 10.1 % | **7.8 %** | 274.50 € | stávame sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.50 € | **120.90 €** | 10.1 % | **5.2 %** | 94.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Dvouplotýnka, G10047 dvouplotý | 125.50 € | **119.90 €** | 10.1 % | **5.2 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 122.50 € | **116.90 €** | 10.2 % | **5.2 %** | 106.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.50 € | **121.90 €** | 10.1 % | **5.3 %** | 111.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HNU61422B | 123.50 € | **117.90 €** | 10.3 % | **5.3 %** | 111.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 75.50 € | **69.90 €** | 18.3 % | **9.5 %** | 69.99 € | stávame sa najlacnejší |
| Blesk GODOX V860III TTL pre Sony | 204.50 € | **198.90 €** | 15.0 % | **11.8 %** | 199.00 € | stávame sa najlacnejší |
| Evolveo StrongVision Solar 4G | 129.00 € | **123.50 €** | 10.0 % | **5.3 %** | 103.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 121.00 € | **115.50 €** | 23.4 % | **17.8 %** | 115.74 € | stávame sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 74.00 € | **68.50 €** | 15.0 % | **6.5 %** | 68.87 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **27.00 €** | 59.9 % | **32.9 %** | 27.50 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.50 € | **167.00 €** | 10.2 % | **6.7 %** | 167.50 € | stávame sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 63.00 € | **57.90 €** | 14.8 % | **5.5 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 21.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA100 sada pre výmenu vy... | 24.00 € | **18.90 €** | 33.4 % | **5.0 %** | 18.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42326PC | 114.00 € | **108.90 €** | 10.1 % | **5.2 %** | 108.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 109.00 € | **103.90 €** | 13.3 % | **8.0 %** | 104.00 € | stávame sa najlacnejší |
| CANON PIXMA TS7550i White | 107.90 € | **102.90 €** | 10.2 % | **5.1 %** | 74.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 34.50 € | **29.50 €** | 58.8 % | **35.8 %** | 29.57 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.50 €** | 46.8 % | **9.2 %** | 14.69 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.50 €** | 15.0 % | **14.3 %** | 799.79 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 119.50 € | **114.50 €** | 15.1 % | **10.3 %** | 114.81 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **524.50 €** | 15.0 % | **13.9 %** | 524.90 € | stávame sa najlacnejší |
| Webová kamera EMEET SmartCam S600L | 65.00 € | **60.00 €** | 14.7 % | **5.9 %** | 60.41 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| Tefal B864SA74 | 102.90 € | **98.00 €** | 10.3 % | **5.1 %** | 90.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **130.00 €** | 15.0 % | **10.8 %** | 130.38 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 272.90 € | **268.00 €** | 9.3 % | **7.4 %** | 268.38 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **20.90 €** | 59.8 % | **31.0 %** | 21.00 € | stávame sa najlacnejší |
| UMAX VisionBook 11T LTE Pro | 107.50 € | **102.90 €** | 10.0 % | **5.3 %** | 96.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO331L | 106.50 € | **101.90 €** | 10.0 % | **5.3 %** | 101.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 100.50 € | **95.90 €** | 10.5 % | **5.4 %** | 95.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 183.50 € | **178.90 €** | 8.0 % | **5.3 %** | 179.00 € | stávame sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 44.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Spájkovacia stanica FNIRSI DWS-200 F | 133.00 € | **128.50 €** | 9.0 % | **5.3 %** | 124.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **100.00 €** | 14.9 % | **10.0 %** | 100.14 € | stávame sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 125.00 € | **120.50 €** | 14.9 % | **10.7 %** | 120.66 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **329.50 €** | 14.9 % | **13.4 %** | 329.80 € | stávame sa najlacnejší |
| Letecký simulátor MOZA RACING AB6 | 454.00 € | **449.50 €** | 14.9 % | **13.8 %** | 449.90 € | stávame sa najlacnejší |
| Kaon MZ-102 Skylink Viaccess Orca bezkartový systém | 115.90 € | **111.50 €** | 9.6 % | **5.4 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 98.90 € | **94.50 €** | 10.3 % | **5.4 %** | 83.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IB5100E0 | 93.90 € | **89.50 €** | 10.4 % | **5.3 %** | 82.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 110.90 € | **106.50 €** | 24.3 % | **19.4 %** | 106.51 € | stávame sa najlacnejší |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 196.90 € | **192.50 €** | 15.1 % | **12.5 %** | 192.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 14.90 € | **10.50 €** | 49.7 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 59.90 € | **55.50 €** | 13.9 % | **5.5 %** | 54.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.90 € | **13.50 €** | 46.1 % | **10.2 %** | 13.51 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.50 €** | 59.0 % | **33.9 %** | 23.90 € | stávame sa najlacnejší |
| Chytrý LED pásik TP-Link Tapo L900-5 5m, 13.5W, 230V... | 21.00 € | **16.90 €** | 30.7 % | **5.2 %** | 15.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 36.00 € | **31.90 €** | 19.6 % | **6.0 %** | 31.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 82.00 € | **77.90 €** | 10.7 % | **5.2 %** | 77.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 82.00 € | **77.90 €** | 10.7 % | **5.2 %** | 77.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K4 ruční, bezdrátový set | 122.90 € | **118.90 €** | 8.7 % | **5.2 %** | 69.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS6550i White | 92.50 € | **88.50 €** | 10.0 % | **5.3 %** | 50.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **91.50 €** | 10.1 % | **5.5 %** | 73.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC710N Black | 89.90 € | **85.90 €** | 10.3 % | **5.4 %** | 71.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI PRO MP273A | 88.50 € | **84.50 €** | 10.4 % | **5.4 %** | 77.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Memory card Samsung EVO Plus microSD 2021 64GB (MB-M... | 51.50 € | **47.50 €** | 14.9 % | **5.9 %** | 45.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **42.90 €** | 15.3 % | **5.5 %** | 42.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES60 reproduktor černý | 94.90 € | **90.90 €** | 10.1 % | **5.4 %** | 90.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFC32SGMXC | 82.50 € | **78.50 €** | 10.6 % | **5.3 %** | 78.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **178.50 €** | 15.0 % | **12.5 %** | 178.51 € | stávame sa najlacnejší |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 83.50 € | **79.50 €** | 21.4 % | **15.6 %** | 79.56 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 70.50 € | **66.50 €** | 23.9 % | **16.9 %** | 66.59 € | stávame sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **418.90 €** | 15.1 % | **14.0 %** | 419.00 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **81.50 €** | 14.9 % | **9.5 %** | 81.61 € | stávame sa najlacnejší |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 76.00 € | **72.00 €** | 23.7 % | **17.2 %** | 72.17 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 14.00 € | **10.00 €** | 48.2 % | **5.9 %** | 10.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 21.00 € | **17.00 €** | 36.3 % | **10.3 %** | 17.29 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 81.50 € | **77.50 €** | 24.0 % | **17.9 %** | 77.89 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer černý | 129.00 € | **125.00 €** | 10.0 % | **6.6 %** | 125.50 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 101.90 € | **98.00 €** | 10.3 % | **6.1 %** | 98.50 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 44.90 € | **41.00 €** | 15.3 % | **5.3 %** | 40.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **17.00 €** | 43.0 % | **16.3 %** | 17.13 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **22.00 €** | 39.1 % | **18.1 %** | 22.35 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.90 € | **24.00 €** | 42.8 % | **22.9 %** | 24.43 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **19.00 €** | 54.6 % | **28.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 12.50 € | **8.80 €** | 50.6 % | **6.0 %** | 8.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Adapter, quick release MOZA RACING RS07 for R21/R16/... | 53.50 € | **49.90 €** | 15.3 % | **7.5 %** | 49.96 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 4.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 19.50 € | **15.90 €** | 31.7 % | **7.4 %** | 15.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 75.50 € | **71.90 €** | 10.8 % | **5.5 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO716BL | 84.50 € | **80.90 €** | 10.0 % | **5.3 %** | 80.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO353VD | 84.50 € | **80.90 €** | 10.0 % | **5.3 %** | 80.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 90A1 | 132.50 € | **128.90 €** | 10.4 % | **7.4 %** | 129.00 € | stávame sa najlacnejší |
| Candy CHW6LBX/4U2 IDEA | 82.50 € | **78.90 €** | 10.5 % | **5.6 %** | 79.00 € | stávame sa najlacnejší |
| Lamax PartyGo1 Play | 84.00 € | **80.50 €** | 10.1 % | **5.5 %** | 70.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 117.00 € | **113.50 €** | 8.5 % | **5.3 %** | 112.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **83.00 €** | 15.2 % | **10.5 %** | 83.08 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 84.50 € | **81.00 €** | 13.2 % | **8.5 %** | 81.10 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **52.00 €** | 15.2 % | **7.9 %** | 52.17 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 29.00 € | **25.50 €** | 24.9 % | **9.9 %** | 25.69 € | stávame sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **46.00 €** | 15.3 % | **7.1 %** | 46.21 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **92.00 €** | 14.9 % | **10.7 %** | 92.22 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 171.50 € | **168.00 €** | 8.0 % | **5.8 %** | 168.26 € | stávame sa najlacnejší |
| Stolný statív Puluz PU3070GT | 44.00 € | **40.50 €** | 15.1 % | **5.9 %** | 40.79 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **31.50 €** | 37.3 % | **23.6 %** | 31.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **22.50 €** | 42.8 % | **23.6 %** | 22.90 € | stávame sa najlacnejší |
| Cycplus AS2 mini electric pump | 45.00 € | **41.50 €** | 14.9 % | **5.9 %** | 41.90 € | stávame sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **12.00 €** | 56.3 % | **21.0 %** | 12.50 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **12.50 €** | 35.6 % | **6.0 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Nubela 2569 90100, bílý | 27.99 € | **24.50 €** | 52.5 % | **33.5 %** | 24.90 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 108.90 € | **105.50 €** | 15.0 % | **11.4 %** | 105.66 € | stávame sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.50 €** | 15.2 % | **9.8 %** | 69.90 € | stávame sa najlacnejší |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 98.90 € | **95.50 €** | 21631.5 % | **20884.4 %** | 95.90 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.50 €** | 15.0 % | **9.3 %** | 65.90 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **11.50 €** | 51.8 % | **17.2 %** | 11.63 € | stávame sa najlacnejší |
| Súprava príslušenstva pre vysávač MOVA P50 PU, P50 U | 42.90 € | **39.50 €** | 15.5 % | **6.3 %** | 33.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 342.90 € | **339.50 €** | 6.9 % | **5.9 %** | 339.59 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-WH bílá barva | 342.90 € | **339.50 €** | 6.9 % | **5.9 %** | 339.59 € | stávame sa najlacnejší |
| Stropné svietidlo Yeelight C2201C300 | 45.00 € | **41.90 €** | 14.5 % | **6.6 %** | 41.96 € | stávame sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.90 €** | 14.9 % | **9.4 %** | 62.00 € | stávame sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 240.00 € | **236.90 €** | 15.0 % | **13.5 %** | 237.00 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 82.00 € | **78.90 €** | 13.4 % | **9.1 %** | 79.00 € | stávame sa najlacnejší |
| Inteligentná zásuvka IMOU CE2P, sada 4 ks | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 36.50 € | **33.50 €** | 15.3 % | **5.9 %** | 22.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 30.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi V89 (nerezová oceľ, zlatá... | 33.50 € | **30.50 €** | 15.5 % | **5.2 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **57.50 €** | 10.6 % | **5.1 %** | 55.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 31.90 € | **28.90 €** | 16.7 % | **5.7 %** | 28.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štúdiové slúchadlá Maono MH700 (čierne) | 34.90 € | **31.90 €** | 15.2 % | **5.3 %** | 31.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 62.50 € | **59.50 €** | 10.9 % | **5.6 %** | 59.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **118.00 €** | 14.9 % | **12.0 %** | 118.04 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 50.50 € | **47.50 €** | 24.2 % | **16.8 %** | 47.59 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **102.90 €** | 15.1 % | **11.8 %** | 102.99 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 174.90 € | **171.90 €** | 10.1 % | **8.2 %** | 172.00 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Olympus | 127.90 € | **124.90 €** | 15.1 % | **12.4 %** | 125.00 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **26.90 €** | 50.2 % | **35.2 %** | 27.00 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-beige(beige) | 107.00 € | **104.00 €** | 14.8 % | **11.6 %** | 104.12 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 22.50 € | **19.50 €** | 53.8 % | **33.3 %** | 19.65 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 19.00 € | **16.00 €** | 35.1 % | **13.8 %** | 16.17 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **336.00 €** | 15.0 % | **14.0 %** | 336.18 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.50 € | **59.50 €** | 15.8 % | **10.3 %** | 59.69 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **45.00 €** | 14.5 % | **7.4 %** | 45.25 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **36.00 €** | 14.9 % | **6.1 %** | 36.29 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 13.50 € | **10.50 €** | 47.7 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **101.50 €** | 15.1 % | **11.8 %** | 101.88 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **22.50 €** | 37.8 % | **21.5 %** | 22.90 € | stávame sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 68.50 € | **65.50 €** | 10.2 % | **5.4 %** | 65.90 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.50 € | **126.50 €** | 10.3 % | **7.7 %** | 126.90 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 196.50 € | **193.50 €** | 10.1 % | **8.5 %** | 193.90 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.00 € | **128.00 €** | 10.1 % | **7.6 %** | 128.50 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.00 €** | 38.6 % | **6.7 %** | 10.50 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **92.00 €** | 15.2 % | **11.7 %** | 92.22 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 250.90 € | **248.00 €** | 10.1 % | **8.8 %** | 248.50 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **36.00 €** | 46.1 % | **35.2 %** | 36.47 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NB614.DG | 55.50 € | **52.90 €** | 10.5 % | **5.3 %** | 52.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9046C | 58.50 € | **55.90 €** | 10.2 % | **5.3 %** | 56.00 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **45.90 €** | 15.0 % | **8.9 %** | 46.00 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **14.90 €** | 42.8 % | **21.6 %** | 14.97 € | stávame sa najlacnejší |
| Tefal RK812110 | 109.50 € | **106.90 €** | 10.2 % | **7.5 %** | 107.00 € | stávame sa najlacnejší |
| Domo DO344DH | 149.50 € | **146.90 €** | 10.1 % | **8.2 %** | 147.00 € | stávame sa najlacnejší |
| Concept OPK5160bc | 181.50 € | **178.90 €** | 10.3 % | **8.7 %** | 179.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 160.50 € | **157.90 €** | 10.1 % | **8.3 %** | 158.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **12.50 €** | 28.9 % | **7.4 %** | 9.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 50.00 € | **47.50 €** | 11.0 % | **5.4 %** | 46.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 31.00 € | **28.50 €** | 14.6 % | **5.4 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 75.00 € | **72.50 €** | 8.7 % | **5.0 %** | 72.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **10.00 €** | 47.9 % | **18.3 %** | 10.01 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-6 litinové neoprenové HE... | 37.50 € | **35.00 €** | 22.8 % | **14.6 %** | 35.04 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 23.50 € | **21.00 €** | 38.1 % | **23.5 %** | 21.13 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 7.4V 60C 2S1P Lipo PC materi... | 43.50 € | **41.00 €** | 15.5 % | **8.8 %** | 41.20 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 124.50 € | **122.00 €** | 8.5 % | **6.3 %** | 122.21 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **31.00 €** | 14.5 % | **5.9 %** | 31.29 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **12.00 €** | 37.7 % | **14.0 %** | 12.30 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 28.38 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **47.50 €** | 14.6 % | **8.9 %** | 47.88 € | stávame sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **56.50 €** | 14.9 % | **10.0 %** | 56.90 € | stávame sa najlacnejší |
| Ivo DVB-26 zesilovač 26dB (5-12V) | 27.00 € | **24.50 €** | 34.1 % | **21.7 %** | 24.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **12.00 €** | 58.4 % | **31.1 %** | 12.47 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 21.50 € | **19.00 €** | 38.5 % | **22.4 %** | 19.50 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.50 € | **132.00 €** | 10.3 % | **8.2 %** | 132.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 12.50 € | **10.00 €** | 49.0 % | **19.2 %** | 10.50 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.00 €** | 10.4 % | **6.2 %** | 64.50 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 38.50 € | **36.00 €** | 15.3 % | **7.8 %** | 36.50 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **228.00 €** | 15.0 % | **13.7 %** | 228.50 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **117.50 €** | 11.3 % | **9.1 %** | 117.90 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 181.90 € | **179.50 €** | 10.1 % | **8.6 %** | 179.90 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L630 GU10, 3,7W, 230V, c... | 12.00 € | **9.60 €** | 32.2 % | **5.8 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 12.90 € | **10.50 €** | 49.4 % | **21.6 %** | 10.86 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 13.90 € | **11.50 €** | 35.5 % | **12.1 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **13.50 €** | 37.7 % | **16.9 %** | 13.90 € | stávame sa najlacnejší |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 12.90 € | **10.50 €** | 61.4 % | **31.3 %** | 10.90 € | stávame sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.50 €** | 10.7 % | **5.0 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo HDO, aktivní venkovní anténa | 54.90 € | **52.50 €** | 10.8 % | **5.9 %** | 51.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (biele) | 25.90 € | **23.50 €** | 15.9 % | **5.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko Mezikus PCSKM | 59.90 € | **57.50 €** | 10.3 % | **5.8 %** | 57.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko Mezikus PCSKW | 59.90 € | **57.50 €** | 10.3 % | **5.8 %** | 57.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.20 €** | 60.5 % | **25.3 %** | 8.25 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 7.90 € | **5.60 €** | 55.5 % | **10.2 %** | 5.69 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.90 €** | 55.6 % | **7.4 %** | 4.99 € | stávame sa najlacnejší |
| Beko HSM14540 | 261.00 € | **258.90 €** | 10.0 % | **9.2 %** | 259.00 € | stávame sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 451.00 € | **448.90 €** | 7.0 % | **6.5 %** | 449.00 € | stávame sa najlacnejší |
| SONY WFC510L modrá | 50.00 € | **47.90 €** | 10.1 % | **5.5 %** | 39.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC510Y žlutá | 50.00 € | **47.90 €** | 10.1 % | **5.5 %** | 40.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3751i White | 48.00 € | **45.90 €** | 10.2 % | **5.4 %** | 39.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3752i Blue | 48.00 € | **45.90 €** | 10.2 % | **5.4 %** | 41.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **31.90 €** | 47.3 % | **38.2 %** | 31.96 € | stávame sa najlacnejší |
| ETA 5180 91010 sklo | 13.99 € | **11.90 €** | 27.7 % | **8.6 %** | 12.00 € | stávame sa najlacnejší |
| Niceboy PILOT Q2 WiFi | 46.50 € | **44.50 €** | 10.9 % | **6.1 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **23.50 €** | 15.8 % | **6.7 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **23.00 €** | 14.5 % | **5.3 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff S60ZBTPF Inteligentná zásuvka ZigBee (2ks) | 26.50 € | **24.50 €** | 14.6 % | **6.0 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 28.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE500X AX1500 WiFi 6 Extender | 41.90 € | **39.90 €** | 10.7 % | **5.5 %** | 36.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **32.90 €** | 12.2 % | **5.8 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO 717 MF | 48.50 € | **46.50 €** | 10.0 % | **5.5 %** | 44.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 18.50 € | **16.50 €** | 20.3 % | **7.3 %** | 14.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 12.50 € | **10.50 €** | 29.3 % | **8.6 %** | 9.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200CT  bezdrátová sluchátka | 38.50 € | **36.50 €** | 10.8 % | **5.0 %** | 35.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CFT610/5X/1 | 49.50 € | **47.50 €** | 10.5 % | **6.1 %** | 47.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FFC026X | 41.50 € | **39.50 €** | 11.2 % | **5.8 %** | 39.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26810-56/RH | 46.50 € | **44.50 €** | 10.6 % | **5.8 %** | 44.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE TH60E3B | 79.90 € | **77.90 €** | 7.9 % | **5.2 %** | 77.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **32.50 €** | 14.6 % | **8.0 %** | 32.51 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 25.50 € | **23.50 €** | 15.5 % | **6.4 %** | 23.59 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **112.50 €** | 10.4 % | **8.5 %** | 112.59 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 23.50 € | **21.50 €** | 22.8 % | **12.3 %** | 21.59 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **60.90 €** | 21.8 % | **17.9 %** | 61.00 € | stávame sa najlacnejší |
| Tefal FW402HE0 | 130.90 € | **128.90 €** | 10.3 % | **8.6 %** | 129.00 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **29.90 €** | 16.9 % | **9.5 %** | 30.00 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **22.90 €** | 59.2 % | **46.4 %** | 23.00 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 20.90 € | **18.90 €** | 18.5 % | **7.2 %** | 19.00 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **13.50 €** | 49.3 % | **30.0 %** | 13.62 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **224.50 €** | 15.0 % | **14.0 %** | 224.66 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (žltý) | 161.50 € | **159.50 €** | 15.1 % | **13.7 %** | 159.72 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 18.00 € | **16.00 €** | 36.8 % | **21.6 %** | 16.25 € | stávame sa najlacnejší |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 13.50 € | **11.50 €** | 45.4 % | **23.8 %** | 11.78 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 25.50 € | **23.50 €** | 14.3 % | **5.3 %** | 23.79 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **65.50 €** | 15.2 % | **11.8 %** | 65.82 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 96.50 € | **94.50 €** | 32.8 % | **30.1 %** | 94.83 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **103.50 €** | 15.0 % | **12.8 %** | 103.83 € | stávame sa najlacnejší |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 34.50 € | **32.50 €** | 15.3 % | **8.6 %** | 32.85 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.50 €** | 55.4 % | **42.7 %** | 22.87 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 30.00 € | **28.00 €** | 14.3 % | **6.7 %** | 28.38 € | stávame sa najlacnejší |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 72.00 € | **70.00 €** | 15.0 % | **11.9 %** | 70.38 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.50 € | **42.50 €** | 15.4 % | **10.2 %** | 42.89 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 15.50 € | **13.50 €** | 42.6 % | **24.2 %** | 13.90 € | stávame sa najlacnejší |
| Black&Decker BXDH12E | 166.50 € | **164.50 €** | 10.1 % | **8.7 %** | 164.90 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne | 30.00 € | **28.00 €** | 14.4 % | **6.8 %** | 28.46 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 Gold | 30.00 € | **28.00 €** | 14.4 % | **6.8 %** | 28.46 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board L/Uni | 15.00 € | **13.00 €** | 21.3 % | **5.2 %** | 13.50 € | stávame sa najlacnejší |
| Leifheit Thermo Reflect L/Universal | 15.00 € | **13.00 €** | 21.3 % | **5.2 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 26.00 € | **24.00 €** | 53.8 % | **42.0 %** | 24.50 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.10 €** | 29.9 % | **5.2 %** | 8.11 € | stávame sa najlacnejší |
| Alecto FR-115BW Sada vysílaček pro děti | 35.90 € | **34.00 €** | 10.9 % | **5.0 %** | 29.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 19.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Grafický tablet Huion H950P | 60.90 € | **59.00 €** | 15.1 % | **11.5 %** | 59.38 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **40.00 €** | 15.3 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **40.00 €** | 15.3 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 40.90 € | **39.00 €** | 10.3 % | **5.2 %** | 39.50 € | stávame sa najlacnejší |
| MAXXO DH 919 Extra Tea | 13.69 € | **11.90 €** | 36.6 % | **18.7 %** | 12.00 € | stávame sa najlacnejší |
| TP-LINK Tapo C110 Home Sec. Wi-Fi Camera | 32.50 € | **30.90 €** | 10.7 % | **5.3 %** | 21.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE305 AC1200 WiFi Range Extender | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 32.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.50 € | **20.90 €** | 15.0 % | **6.9 %** | 19.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 23.50 € | **21.90 €** | 14.7 % | **6.9 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Držák fólií (rolí) PARAT ROYAL | 31.50 € | **29.90 €** | 10.9 % | **5.2 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.90 €** | 15.6 % | **9.1 %** | 26.92 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **37.90 €** | 15.3 % | **10.6 %** | 37.92 € | stávame sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 15.0 % | **6.0 %** | 18.98 € | stávame sa najlacnejší |
| GUZZANTIGZ 3601 | 28.50 € | **26.90 €** | 11.7 % | **5.4 %** | 27.00 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 46.50 € | **44.90 €** | 9.5 % | **5.7 %** | 45.00 € | stávame sa najlacnejší |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 20.50 € | **18.90 €** | 13.9 % | **5.0 %** | 19.00 € | stávame sa najlacnejší |
| Fixed Creator Tripod FIXCRT-BK | 43.50 € | **41.90 €** | 10.5 % | **6.5 %** | 42.00 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **15.90 €** | 16.6 % | **6.0 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-2 litinové neoprenové HE... | 14.50 € | **12.90 €** | 23.8 % | **10.2 %** | 12.99 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 108.50 € | **106.90 €** | 6.7 % | **5.1 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.90 €** | 15.0 % | **14.1 %** | 207.93 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.90 €** | 15.0 % | **14.1 %** | 203.94 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **97.90 €** | 10.5 % | **8.7 %** | 98.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 104.00 € | **102.50 €** | 6.6 % | **5.1 %** | 84.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 42.00 € | **40.50 €** | 9.6 % | **5.7 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií XTAR VC4SL 18650 | 27.00 € | **25.50 €** | 12.9 % | **6.6 %** | 19.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar SB-820BT Soundbar | 35.00 € | **33.50 €** | 10.3 % | **5.6 %** | 31.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.00 € | **32.50 €** | 10.3 % | **5.4 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **18.00 €** | 15.6 % | **6.7 %** | 18.04 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.50 €** | 50.1 % | **37.6 %** | 16.64 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **107.00 €** | 14.9 % | **13.3 %** | 107.19 € | stávame sa najlacnejší |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 20.00 € | **18.50 €** | 17.7 % | **8.8 %** | 18.70 € | stávame sa najlacnejší |
| Herná myš ONIKUMA DM02 (čierna) | 17.50 € | **16.00 €** | 16.1 % | **6.2 %** | 16.21 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **15.00 €** | 56.9 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **15.00 €** | 56.9 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 23.50 € | **22.00 €** | 14.6 % | **7.3 %** | 22.27 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 121.00 € | **119.50 €** | 14.9 % | **13.5 %** | 119.79 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 11.50 € | **10.00 €** | 45.2 % | **26.2 %** | 10.33 € | stávame sa najlacnejší |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 23.50 € | **22.00 €** | 14.8 % | **7.5 %** | 22.33 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **24.50 €** | 15.1 % | **8.4 %** | 24.88 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **14.50 €** | 38.4 % | **25.4 %** | 14.90 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.00 € | **10.50 €** | 52.9 % | **33.8 %** | 10.90 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 872.00 € | **870.50 €** | 15.0 % | **14.8 %** | 870.90 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 28.00 € | **26.50 €** | 14.4 % | **8.3 %** | 26.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **24.00 €** | 37.8 % | **29.6 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **22.00 €** | 39.1 % | **30.2 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **14.00 €** | 55.0 % | **40.0 %** | 14.50 € | stávame sa najlacnejší |
| DOMO DO465FR | 66.50 € | **65.00 €** | 10.6 % | **8.1 %** | 65.50 € | stávame sa najlacnejší |
| DOMO DO754K | 36.50 € | **35.00 €** | 10.4 % | **5.9 %** | 35.50 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.50 € | **120.00 €** | 10.3 % | **9.0 %** | 120.50 € | stávame sa najlacnejší |
| Domo DO228SV | 121.50 € | **120.00 €** | 10.0 % | **8.7 %** | 120.50 € | stávame sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.50 € | **24.00 €** | 11.8 % | **5.2 %** | 24.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **32.00 €** | 14.6 % | **9.5 %** | 32.50 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 488.50 € | **487.00 €** | 10.1 % | **9.7 %** | 487.50 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 66.90 € | **65.50 €** | 10.8 % | **8.5 %** | 65.89 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.50 €** | 10.4 % | **8.9 %** | 101.90 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **83.50 €** | 9.7 % | **7.9 %** | 83.90 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 64.90 € | **63.50 €** | 10.3 % | **7.9 %** | 63.90 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 70.90 € | **69.50 €** | 15.3 % | **13.0 %** | 69.90 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 70.90 € | **69.50 €** | 15.3 % | **13.0 %** | 69.90 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 137.90 € | **136.50 €** | 10.0 % | **8.9 %** | 136.90 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 13.90 € | **12.50 €** | 18.6 % | **6.6 %** | 12.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WFM12 bezdrátový klopový mikrofon, vysí... | 33.90 € | **32.50 €** | 9.8 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.B | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 25.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight stropný reflektor (jedna žiarovka) biely | 19.90 € | **18.50 €** | 15.7 % | **7.6 %** | 11.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Onyx BS2400 | 30.90 € | **29.50 €** | 10.1 % | **5.1 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 42.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9258M | 36.90 € | **35.50 €** | 10.4 % | **6.2 %** | 33.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.NBL | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada litinových závaží 4x1,25kg, 51mm, REBEL ACTIVE ... | 18.90 € | **17.50 €** | 16.1 % | **7.5 %** | 15.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Portable NBP003LBL | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.90 € | **21.50 €** | 13.7 % | **6.8 %** | 21.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.90 € | **17.50 €** | 15.0 % | **6.5 %** | 17.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje SIH1800BLT | 19.90 € | **18.50 €** | 15.2 % | **7.1 %** | 18.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **26.50 €** | 11.6 % | **6.0 %** | 26.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 50.90 € | **49.50 €** | 15.1 % | **11.9 %** | 49.67 € | stávame sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.50 €** | 15.2 % | **12.2 %** | 53.68 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 25.90 € | **24.50 €** | 15.4 % | **9.1 %** | 24.78 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.90 € | **17.50 €** | 15.0 % | **6.5 %** | 17.79 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.90 € | **46.50 €** | 8.5 % | **5.3 %** | 46.89 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **15.50 €** | 39.1 % | **27.5 %** | 15.90 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 51.90 € | **50.50 €** | 14.9 % | **11.8 %** | 50.90 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 38.00 € | **36.90 €** | 9.1 % | **6.0 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 32.00 € | **30.90 €** | 10.1 % | **6.4 %** | 27.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.00 € | **16.90 €** | 12.2 % | **5.4 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.00 € | **16.90 €** | 12.2 % | **5.4 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.00 € | **38.90 €** | 10.1 % | **7.1 %** | 39.00 € | stávame sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 18.00 € | stávame sa najlacnejší |
| JBL Tune 670NC white | 64.00 € | **62.90 €** | 11.0 % | **9.1 %** | 63.00 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.90 €** | 39.2 % | **8.6 %** | 3.96 € | stávame sa najlacnejší |
| Batéria AA MediaRange nabíjateľné USB-C Li-Ion , 1,5... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anemometer UNI-T UT363 | 16.00 € | **14.90 €** | 14.0 % | **6.2 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Testovanie zariadenia USB Uni-T UT658LOAD | 16.00 € | **14.90 €** | 14.8 % | **6.9 %** | 13.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria AAA MediaRange nabíjateľné USB-C Li-Ion , 1,... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkové háky REBEL RBA-2505 | 12.00 € | **10.90 €** | 20.9 % | **9.8 %** | 10.91 € | stávame sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.20 €** | 59.1 % | **35.1 %** | 6.24 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 9.00 € | **7.90 €** | 53.7 % | **34.9 %** | 7.99 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.90 €** | 22.4 % | **11.2 %** | 11.00 € | stávame sa najlacnejší |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 124.00 € | **122.90 €** | 16.4 % | **15.3 %** | 123.00 € | stávame sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 111.00 € | **109.90 €** | 8.3 % | **7.3 %** | 110.00 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 103.00 € | **101.90 €** | 7.9 % | **6.7 %** | 102.00 € | stávame sa najlacnejší |
| SONOFF MINI-D Smart WiFi Matter Switch (AC/DC 12-48V... | 13.50 € | **12.50 €** | 15.4 % | **6.9 %** | 6.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-BK | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 16.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.90 € | **18.90 €** | 10.7 % | **5.1 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (čierny) | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-PI | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set PowerClean M+náhr. zdarma | 20.50 € | **19.50 €** | 10.7 % | **5.3 %** | 17.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 15.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **10.90 €** | 15.6 % | **5.9 %** | 9.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.50 €** | 12.9 % | **5.1 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-TI | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G4002300 Odstraňovač žmolků | 22.90 € | **21.90 €** | 11.0 % | **6.2 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skúšačka UNI-T UT18D vadaska | 42.90 € | **41.90 €** | 7.5 % | **5.0 %** | 41.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.90 € | **16.90 €** | 11.7 % | **5.4 %** | 16.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.50 € | **11.50 €** | 16.7 % | **7.3 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR710001 | 26.50 € | **25.50 €** | 10.8 % | **6.6 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo vodní filtry 3+1 | 12.50 € | **11.50 €** | 17.2 % | **7.8 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.4 % | **5.6 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.50 €** | 11.2 % | **7.0 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.50 €** | 59.7 % | **35.1 %** | 5.51 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.50 €** | 45.5 % | **38.8 %** | 20.54 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.50 €** | 15.0 % | **13.1 %** | 61.54 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 15.50 € | **14.50 €** | 54.4 % | **44.5 %** | 14.55 € | stávame sa najlacnejší |
| Stojan na slúchadlá ONIKUMA ST-2 čierny | 13.90 € | **12.90 €** | 15.1 % | **6.8 %** | 12.95 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 4.50 € | **3.50 €** | 55.7 % | **21.1 %** | 3.57 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 14.50 € | **13.50 €** | 25.8 % | **17.1 %** | 13.58 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.58 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.00 € | **22.00 €** | 12.6 % | **7.7 %** | 22.09 € | stávame sa najlacnejší |
| AMIKO dálkové ovládání Univerzální, HD - SD | 14.50 € | **13.50 €** | 26.1 % | **17.4 %** | 13.59 € | stávame sa najlacnejší |
| Girmi BL0301 | 28.90 € | **27.90 €** | 10.8 % | **7.0 %** | 28.00 € | stávame sa najlacnejší |
| Gorenje MVC72HGA | 29.90 € | **28.90 €** | 10.5 % | **6.8 %** | 29.00 € | stávame sa najlacnejší |
| Maxxo VM Master | 241.90 € | **240.90 €** | 7.7 % | **7.2 %** | 241.00 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **57.90 €** | 10.3 % | **8.4 %** | 58.00 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 14.90 € | **13.90 €** | 13.6 % | **6.0 %** | 14.00 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 328.90 € | **327.90 €** | 8.1 % | **7.8 %** | 328.00 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 15.50 € | **14.50 €** | 53.9 % | **43.9 %** | 14.61 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **16.00 €** | 15.2 % | **8.4 %** | 16.13 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.50 €** | 15.6 % | **13.0 %** | 43.63 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **35.00 €** | 38.3 % | **34.4 %** | 35.16 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 16.50 € | **15.50 €** | 66.0 % | **56.0 %** | 15.69 € | stávame sa najlacnejší |
| Náhradní filtrační kapsle GARNI BS 45T | 17.50 € | **16.50 €** | 24.0 % | **17.0 %** | 16.69 € | stávame sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558 | 12.50 € | **11.50 €** | 19.8 % | **10.3 %** | 11.69 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 59.50 € | **58.50 €** | 7.9 % | **6.0 %** | 58.69 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.50 €** | 14.9 % | **12.1 %** | 39.71 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **28.00 €** | 14.8 % | **10.9 %** | 28.21 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.50 €** | 15.6 % | **9.0 %** | 16.75 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **35.00 €** | 15.0 % | **11.9 %** | 35.25 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.50 €** | 15.0 % | **12.0 %** | 36.79 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 20.50 € | **19.50 €** | 15.4 % | **9.8 %** | 19.80 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 37.00 € | **36.00 €** | 41.8 % | **37.9 %** | 36.31 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.33 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 14.50 € | **13.50 €** | 25.8 % | **17.1 %** | 13.84 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 14.50 € | **13.50 €** | 25.8 % | **17.1 %** | 13.84 € | stávame sa najlacnejší |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 15.50 € | **14.50 €** | 15.0 % | **7.6 %** | 14.88 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.50 €** | 47.4 % | **37.2 %** | 13.90 € | stávame sa najlacnejší |
| Ardes AR4B01B | 45.50 € | **44.50 €** | 10.0 % | **7.6 %** | 44.90 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.50 € | **51.50 €** | 10.3 % | **8.2 %** | 51.90 € | stávame sa najlacnejší |
| Girmi PE3600 | 39.50 € | **38.50 €** | 10.9 % | **8.1 %** | 38.90 € | stávame sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 123.50 € | **122.50 €** | 10.3 % | **9.4 %** | 122.90 € | stávame sa najlacnejší |
| Zircon Monoblok Single M-0143 Slim line Skylink | 12.50 € | **11.50 €** | 35.9 % | **25.0 %** | 11.90 € | stávame sa najlacnejší |
| Strong LEAP-S3 V2 Google TV box | 64.50 € | **63.50 €** | 11.4 % | **9.7 %** | 63.90 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **16.50 €** | 11.6 % | **5.2 %** | 16.90 € | stávame sa najlacnejší |
| GORENJE GS620C10S | 343.50 € | **342.50 €** | 7.1 % | **6.8 %** | 342.90 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 373.50 € | **372.50 €** | 7.1 % | **6.9 %** | 372.90 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 12.00 € | **11.00 €** | 52.2 % | **39.5 %** | 11.43 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **10.00 €** | 52.9 % | **39.0 %** | 10.43 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **10.00 €** | 52.9 % | **39.0 %** | 10.43 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **28.00 €** | 47.5 % | **42.5 %** | 28.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 15.00 € | **14.00 €** | 38.3 % | **29.0 %** | 14.50 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **88.00 €** | 15.1 % | **13.8 %** | 88.50 € | stávame sa najlacnejší |
| TP-LINK Archer T3U WiFi Adaptér | 16.90 € | **15.90 €** | 12.3 % | **5.6 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **15.90 €** | 11.9 % | **5.3 %** | 16.00 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **15.90 €** | 12.2 % | **5.5 %** | 16.00 € | stávame sa najlacnejší |
| Nabíjecí bezdrátová podložka pro telefony Compass | 16.90 € | **15.90 €** | 13.0 % | **6.3 %** | 16.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 16.90 € | **15.90 €** | 12.2 % | **5.5 %** | 16.00 € | stávame sa najlacnejší |
| Blender G21 Perfection brown | 211.90 € | **211.00 €** | 18.5 % | **17.9 %** | 211.08 € | stávame sa najlacnejší |
| Blender G21 Perfection Cappuccino | 211.90 € | **211.00 €** | 18.5 % | **17.9 %** | 211.08 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 211.90 € | **211.00 €** | 18.5 % | **17.9 %** | 211.08 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 211.90 € | **211.00 €** | 18.5 % | **17.9 %** | 211.08 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **85.00 €** | 15.1 % | **13.9 %** | 85.22 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 232.90 € | **232.00 €** | 18.3 % | **17.9 %** | 232.23 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 232.90 € | **232.00 €** | 18.3 % | **17.9 %** | 232.23 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 232.90 € | **232.00 €** | 18.3 % | **17.9 %** | 232.23 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 232.90 € | **232.00 €** | 18.3 % | **17.9 %** | 232.23 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 232.90 € | **232.00 €** | 18.3 % | **17.9 %** | 232.23 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.90 € | **64.00 €** | 15.1 % | **13.5 %** | 64.50 € | stávame sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.00 €** | 11.3 % | **5.0 %** | 13.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.00 €** | 12.1 % | **5.3 %** | 13.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.00 €** | 11.8 % | **5.0 %** | 14.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight teplomer | 10.50 € | **9.60 €** | 50.3 % | **37.4 %** | 9.68 € | stávame sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.90 € | **12.00 €** | 15.3 % | **7.2 %** | 12.29 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **13.00 €** | 14.8 % | **7.4 %** | 13.50 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.00 €** | 8.1 % | **5.3 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 21.90 € | **21.00 €** | 10.0 % | **5.5 %** | 21.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.90 € | **22.00 €** | 13.7 % | **9.3 %** | 22.19 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.90 € | **43.00 €** | 15.0 % | **12.6 %** | 43.29 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **17.00 €** | 16.2 % | **10.4 %** | 17.42 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **47.00 €** | 38.5 % | **35.9 %** | 47.50 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.90 € | **24.00 €** | 38.3 % | **33.3 %** | 24.50 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.90 € | **25.00 €** | 22.6 % | **18.3 %** | 25.50 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.90 € | **25.00 €** | 22.6 % | **18.3 %** | 25.50 € | stávame sa najlacnejší |
| SALENTE ToastMax | 46.90 € | **46.00 €** | 10.1 % | **8.0 %** | 46.50 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.20 €** | 53.4 % | **41.1 %** | 9.21 € | stávame sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.20 €** | 48.6 % | **36.7 %** | 9.23 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 9.30 € | **8.50 €** | 48.5 % | **35.8 %** | 8.54 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.50 €** | 55.0 % | **31.6 %** | 4.60 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **6.80 €** | 54.8 % | **40.3 %** | 6.90 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 5.10 € | **4.40 €** | 55.3 % | **34.0 %** | 4.49 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 7.10 € | **6.40 €** | 55.2 % | **39.9 %** | 6.50 € | stávame sa najlacnejší |
| Tesla TE-300 DVBT2 H265 přijímač (HDMI CEC) | 22.50 € | **21.90 €** | 8.5 % | **5.6 %** | 9.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.50 € | **35.90 €** | 7.9 % | **6.1 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM58 ruční všesměrový | 32.50 € | **31.90 €** | 8.2 % | **6.2 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL XA 800512 | 17.50 € | **16.90 €** | 10.3 % | **6.5 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **17.90 €** | 10.4 % | **6.8 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 27.50 € | **26.90 €** | 34.3 % | **31.4 %** | 26.91 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.93 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.93 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.90 €** | 15.7 % | **13.2 %** | 26.96 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **31.90 €** | 59.9 % | **57.0 %** | 32.00 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.70 € | **6.10 €** | 45.6 % | **32.6 %** | 6.11 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 4.40 € | **3.80 €** | 52.9 % | **32.0 %** | 3.87 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.10 € | **1.50 €** | 51.1 % | **7.9 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed řemínek AWU 49mm FIXNST2-1029-RD | 16.50 € | **15.90 €** | 11.1 % | **7.1 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák MagMount Vent FIXMMT-V-BK | 14.50 € | **13.90 €** | 11.6 % | **7.0 %** | 10.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U AC600 WiFi Adaptér | 12.50 € | **11.90 €** | 13.2 % | **7.7 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 11.3 % | **6.7 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Defender Taška na notebook 15,6", Geek | 14.50 € | **13.90 €** | 10.5 % | **5.9 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.90 €** | 16.1 % | **10.6 %** | 11.92 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 9.60 € | **9.00 €** | 54.2 % | **44.6 %** | 9.03 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **14.90 €** | 39.9 % | **34.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **10.90 €** | 38.3 % | **31.1 %** | 11.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.50 € | **66.90 €** | 6.1 % | **5.1 %** | 66.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash F1 (biela) + 6 ventiláto... | 116.50 € | **115.90 €** | 15.0 % | **14.4 %** | 115.93 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 159.50 € | **158.90 €** | 8.0 % | **7.6 %** | 159.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 187.50 € | **186.90 €** | 8.0 % | **7.6 %** | 187.00 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 67.50 € | **66.90 €** | 7.9 % | **6.9 %** | 67.00 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.90 €** | 55.5 % | **37.9 %** | 3.96 € | stávame sa najlacnejší |
| Banquet Termohrnec OLIVES 3,5 l | 18.00 € | **17.50 €** | 10.0 % | **7.0 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.00 € | **15.50 €** | 10.1 % | **6.7 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka na dlažbu Classic s tele | 12.00 € | **11.50 €** | 10.1 % | **5.5 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 25.00 € | **24.50 €** | 9.1 % | **6.9 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 15.00 € | **14.50 €** | 10.6 % | **6.9 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.50 € | **12.00 €** | 9.6 % | **5.2 %** | 12.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **20.00 €** | 48.5 % | **44.9 %** | 20.01 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **8.00 €** | 53.9 % | **44.9 %** | 8.01 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 559.00 € | **558.50 €** | 7.9 % | **7.8 %** | 558.51 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.70 €** | 48.7 % | **36.7 %** | 5.71 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.70 € | **7.20 €** | 54.6 % | **44.5 %** | 7.22 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.10 €** | 53.7 % | **44.7 %** | 8.12 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo, 150+150lm, Li... | 8.60 € | **8.10 €** | 53.7 % | **44.7 %** | 8.12 € | stávame sa najlacnejší |
| Roborock Q10 PF+ Čistiaci robot (čierny) | 335.50 € | **335.00 €** | 15.0 % | **14.9 %** | 335.05 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.20 €** | 55.2 % | **43.6 %** | 6.26 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.90 € | **5.40 €** | 48.0 % | **35.5 %** | 5.46 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.50 €** | 14.9 % | **13.8 %** | 50.56 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.00 € | **12.50 €** | 49.9 % | **44.2 %** | 12.57 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.50 €** | 41.0 % | **38.8 %** | 31.57 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 5.30 € | **4.80 €** | 50.7 % | **36.4 %** | 4.87 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **4.80 €** | 50.7 % | **36.4 %** | 4.87 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.50 €** | 13.6 % | **10.5 %** | 17.58 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.50 €** | 47.2 % | **44.5 %** | 26.59 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.50 € | **32.00 €** | 15.1 % | **13.3 %** | 32.09 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.40 €** | 47.1 % | **34.7 %** | 5.49 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 6.30 € | **5.80 €** | 48.5 % | **36.7 %** | 5.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.50 €** | 14.6 % | **11.9 %** | 20.60 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.20 €** | 49.3 % | **33.4 %** | 4.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **4.90 €** | 47.3 % | **33.7 %** | 5.00 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 14.50 € | **14.00 €** | 49.0 % | **43.9 %** | 14.11 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **32.00 €** | 14.7 % | **13.0 %** | 32.12 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.00 € | **12.50 €** | 49.3 % | **43.5 %** | 12.63 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.63 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **11.00 €** | 49.6 % | **43.1 %** | 11.15 € | stávame sa najlacnejší |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 16.50 € | **16.00 €** | 14.9 % | **11.4 %** | 16.15 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161E | 108.50 € | **108.00 €** | 6.1 % | **5.6 %** | 108.16 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.50 €** | 13.7 % | **10.2 %** | 15.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Router GL.iNet Slate 7 | 208.00 € | **207.50 €** | 14.9 % | **14.6 %** | 207.72 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 29.50 € | **29.00 €** | 7.1 % | **5.3 %** | 29.22 € | stávame sa najlacnejší |
| Herné slúchadlá Onikuma B2 (čierne) | 22.00 € | **21.50 €** | 14.2 % | **11.6 %** | 21.72 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **15.00 €** | 47.4 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **14.00 €** | 16.5 % | **12.5 %** | 14.25 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **19.00 €** | 14.1 % | **11.2 %** | 19.25 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **19.00 €** | 15.0 % | **12.0 %** | 19.25 € | stávame sa najlacnejší |
| Přípravek do chemických toalet HAPPY GREEN Blue 2l | 12.50 € | **12.00 €** | 10.6 % | **6.2 %** | 12.26 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **13.00 €** | 47.5 % | **42.1 %** | 13.27 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **14.00 €** | 47.4 % | **42.3 %** | 14.27 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 11.00 € | **10.50 €** | 48.1 % | **41.3 %** | 10.77 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.50 € | **16.00 €** | 12.2 % | **8.8 %** | 16.29 € | stávame sa najlacnejší |
| Reproduktory k PC 2.1 Rebel CS-50 | 12.00 € | **11.50 €** | 11.5 % | **6.9 %** | 11.79 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **27.50 €** | 13.8 % | **11.7 %** | 27.79 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 62.50 € | **62.00 €** | 6.0 % | **5.2 %** | 62.29 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.00 € | **15.50 €** | 9.7 % | **6.3 %** | 15.79 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.50 €** | 46.4 % | **42.9 %** | 20.80 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **15.00 €** | 16.8 % | **13.0 %** | 15.33 € | stávame sa najlacnejší |
| Elektrický masážny prístroj na tvár Guasha ANLAN 02-... | 35.50 € | **35.00 €** | 15.5 % | **13.9 %** | 35.33 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 19.00 € | **18.50 €** | 9.2 % | **6.3 %** | 18.83 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **12.00 €** | 46.9 % | **41.0 %** | 12.34 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 12.00 € | **11.50 €** | 19.3 % | **14.3 %** | 11.84 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 52.00 € | **51.50 €** | 14.6 % | **13.5 %** | 51.84 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **13.00 €** | 56.1 % | **50.3 %** | 13.35 € | stávame sa najlacnejší |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 12.00 € | **11.50 €** | 10.1 % | **5.5 %** | 11.86 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **44.00 €** | 7.0 % | **5.8 %** | 44.37 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.50 €** | 13.4 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 69.00 € | **68.50 €** | 8.9 % | **8.1 %** | 68.89 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 85.50 € | **85.00 €** | 13.1 % | **12.5 %** | 85.39 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 26.00 € | **25.50 €** | 8.7 % | **6.6 %** | 25.89 € | stávame sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.00 € | **19.50 €** | 9.1 % | **6.4 %** | 19.89 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **15.00 €** | 46.0 % | **41.3 %** | 15.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 32.50 € | **32.00 €** | 9.2 % | **7.5 %** | 32.39 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 46.00 € | **45.50 €** | 9.4 % | **8.2 %** | 45.89 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 32.00 € | **31.50 €** | 6.8 % | **5.1 %** | 31.89 € | stávame sa najlacnejší |
| FNIRSI FNB48P USB port tester čierny | 36.50 € | **36.00 €** | 13.3 % | **11.7 %** | 36.39 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 208.00 € | **207.50 €** | 13.8 % | **13.5 %** | 207.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 57.00 € | **56.50 €** | 10.2 % | **9.2 %** | 56.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 133.50 € | **133.00 €** | 11.6 % | **11.2 %** | 133.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 69.50 € | **69.00 €** | 12.2 % | **11.4 %** | 69.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 89.00 € | **88.50 €** | 13.5 % | **12.9 %** | 88.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 88.00 € | **87.50 €** | 12.9 % | **12.3 %** | 87.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 69.00 € | **68.50 €** | 9.7 % | **8.9 %** | 68.89 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 39.50 € | **39.00 €** | 11.5 % | **10.1 %** | 39.39 € | stávame sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 25.00 € | **24.50 €** | 10.2 % | **8.0 %** | 24.89 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 47.00 € | **46.50 €** | 8.5 % | **7.3 %** | 46.89 € | stávame sa najlacnejší |
| Uni-T UT206B digitálny klešťový multimeter | 66.00 € | **65.50 €** | 9.0 % | **8.1 %** | 65.89 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 82.50 € | **82.00 €** | 11.8 % | **11.1 %** | 82.39 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 108.00 € | **107.50 €** | 12.3 % | **11.7 %** | 107.89 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 33.00 € | **32.50 €** | 7.5 % | **5.9 %** | 32.89 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 57.50 € | **57.00 €** | 10.9 % | **9.9 %** | 57.39 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 51.00 € | **50.50 €** | 7.9 % | **6.9 %** | 50.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 244.00 € | **243.50 €** | 14.3 % | **14.0 %** | 243.89 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 102.00 € | **101.50 €** | 12.0 % | **11.4 %** | 101.89 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 136.50 € | **136.00 €** | 13.9 % | **13.5 %** | 136.39 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 192.00 € | **191.50 €** | 13.5 % | **13.2 %** | 191.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 468.00 € | **467.50 €** | 8.1 % | **8.0 %** | 467.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 902.00 € | **901.50 €** | 14.6 % | **14.6 %** | 901.89 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 92.50 € | **92.00 €** | 13.0 % | **12.4 %** | 92.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 78.50 € | **78.00 €** | 13.2 % | **12.5 %** | 78.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.50 € | **89.00 €** | 14.8 % | **14.1 %** | 89.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 94.00 € | **93.50 €** | 8.9 % | **8.4 %** | 93.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 26.50 € | **26.00 €** | 8.4 % | **6.3 %** | 26.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 130.00 € | **129.50 €** | 13.8 % | **13.4 %** | 129.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 72.50 € | **72.00 €** | 12.8 % | **12.0 %** | 72.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 84.00 € | **83.50 €** | 11.1 % | **10.5 %** | 83.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 60.00 € | **59.50 €** | 10.3 % | **9.3 %** | 59.89 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 53.00 € | **52.50 €** | 9.4 % | **8.4 %** | 52.89 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 52.00 € | **51.50 €** | 8.7 % | **7.6 %** | 51.89 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 100.00 € | **99.50 €** | 11.6 % | **11.0 %** | 99.89 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 33.00 € | **32.50 €** | 7.2 % | **5.6 %** | 32.89 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 80.50 € | **80.00 €** | 11.9 % | **11.2 %** | 80.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 40.00 € | **39.50 €** | 8.9 % | **7.5 %** | 39.89 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 168.50 € | **168.00 €** | 13.8 % | **13.5 %** | 168.39 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 184.00 € | **183.50 €** | 9.4 % | **9.1 %** | 183.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 208.00 € | **207.50 €** | 6.1 % | **5.8 %** | 207.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 327.00 € | **326.50 €** | 10.9 % | **10.8 %** | 326.89 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 78.50 € | **78.00 €** | 12.3 % | **11.6 %** | 78.39 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 73.00 € | **72.50 €** | 8.7 % | **7.9 %** | 72.89 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 142.00 € | **141.50 €** | 13.2 % | **12.8 %** | 141.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 257.00 € | **256.50 €** | 13.7 % | **13.5 %** | 256.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT312A | 282.50 € | **282.00 €** | 14.4 % | **14.2 %** | 282.39 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 102.00 € | **101.50 €** | 12.3 % | **11.8 %** | 101.89 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 121.00 € | **120.50 €** | 12.9 % | **12.4 %** | 120.89 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 59.50 € | **59.00 €** | 14.1 % | **13.2 %** | 59.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 117.50 € | **117.00 €** | 13.5 % | **13.0 %** | 117.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 150.00 € | **149.50 €** | 12.6 % | **12.3 %** | 149.89 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.39 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1299.50 € | **1299.00 €** | 7.3 % | **7.2 %** | 1299.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 143.00 € | **142.50 €** | 10.1 % | **9.7 %** | 142.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 52.00 € | **51.50 €** | 7.5 % | **6.5 %** | 51.89 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 27.00 € | **26.50 €** | 18.9 % | **16.7 %** | 26.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 23.50 € | **23.00 €** | 11.0 % | **8.6 %** | 23.39 € | stávame sa najlacnejší |
| MOVA V10 Akumulátorový vysávač na bazény | 205.50 € | **205.00 €** | 14.3 % | **14.0 %** | 205.39 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 22.50 € | **22.00 €** | 7.5 % | **5.2 %** | 22.39 € | stávame sa najlacnejší |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.50 € | **16.00 €** | 10.9 % | **7.5 %** | 16.39 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 209.00 € | **208.50 €** | 12.1 % | **11.8 %** | 208.89 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 42.50 € | **42.00 €** | 7.0 % | **5.8 %** | 42.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 110.00 € | **109.50 €** | 7.6 % | **7.1 %** | 109.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 242.00 € | **241.50 €** | 9.0 % | **8.8 %** | 241.89 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 133.00 € | **132.50 €** | 6.2 % | **5.8 %** | 132.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 112.50 € | **112.00 €** | 7.0 % | **6.5 %** | 112.39 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 88.00 € | **87.50 €** | 10.8 % | **10.2 %** | 87.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 91.00 € | **90.50 €** | 8.0 % | **7.4 %** | 90.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 190.50 € | **190.00 €** | 8.1 % | **7.9 %** | 190.39 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 24.50 € | **24.00 €** | 15.5 % | **13.2 %** | 24.39 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 272.00 € | **271.50 €** | 7.0 % | **6.8 %** | 271.89 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 209.00 € | **208.50 €** | 9.4 % | **9.1 %** | 208.89 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 195.00 € | **194.50 €** | 9.7 % | **9.4 %** | 194.89 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 113.50 € | **113.00 €** | 17.1 % | **16.5 %** | 113.39 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 113.50 € | **113.00 €** | 17.1 % | **16.5 %** | 113.39 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.50 € | **125.00 €** | 15.2 % | **14.7 %** | 125.39 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 57.00 € | **56.50 €** | 44.6 % | **43.4 %** | 56.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.00 € | **12.50 €** | 28.4 % | **23.5 %** | 12.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 21.00 € | **20.50 €** | 34.2 % | **31.0 %** | 20.90 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 506.00 € | **505.50 €** | 7.0 % | **6.9 %** | 505.90 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **15.00 €** | 45.9 % | **41.1 %** | 15.41 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.50 € | **19.00 €** | 39.7 % | **36.1 %** | 19.42 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **21.00 €** | 15.1 % | **12.4 %** | 21.42 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **29.00 €** | 14.9 % | **13.0 %** | 29.44 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 27.50 € | **27.00 €** | 11.4 % | **9.4 %** | 27.44 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 50.3 % | **46.6 %** | 20.45 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.50 € | **22.00 €** | 9.3 % | **6.9 %** | 22.45 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Classic Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.49 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Eccentric Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.49 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **13.00 €** | 14.0 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **11.00 €** | 31.7 % | **26.0 %** | 11.49 € | stávame sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.50 € | **21.00 €** | 9.6 % | **7.0 %** | 21.49 € | stávame sa najlacnejší |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.50 € | **26.00 €** | 32.5 % | **30.0 %** | 26.49 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **13.00 €** | 33.2 % | **28.3 %** | 13.49 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 26.50 € | **26.00 €** | 7.1 % | **5.1 %** | 26.49 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 123.50 € | **123.00 €** | 21.5 % | **21.0 %** | 123.49 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.50 € | **16.00 €** | 29.1 % | **25.2 %** | 16.49 € | stávame sa najlacnejší |
| ETA Aromo 0064 90000 bílý | 13.99 € | **13.50 €** | 10.3 % | **6.5 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 226.90 € | **226.50 €** | 5.4 % | **5.2 %** | 226.79 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **77.50 €** | 15.0 % | **14.4 %** | 77.79 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 74.90 € | **74.50 €** | 7.6 % | **7.1 %** | 74.89 € | stávame sa najlacnejší |
| Rowenta ZR009001 | 10.90 € | **10.50 €** | 12.7 % | **8.6 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Nano WiFi Adaptér | 10.90 € | **10.50 €** | 11.8 % | **7.6 %** | 8.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Power Bank 10000mAh 22.5W Lite GL | 12.90 € | **12.50 €** | 10.7 % | **7.3 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 13.90 € | **13.50 €** | 9.6 % | **6.5 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 10.90 € | **10.50 €** | 9.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Razer Goliathus Mobile Stealth Ed. | 10.90 € | **10.50 €** | 13.6 % | **9.4 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.5 % | **7.7 %** | 15.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.90 € | **13.50 €** | 10.9 % | **7.7 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.80 €** | 53.7 % | **43.8 %** | 5.85 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.80 €** | 53.7 % | **43.8 %** | 5.85 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **6.00 €** | 53.5 % | **43.9 %** | 6.05 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.90 €** | 55.5 % | **48.0 %** | 7.98 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **8.40 €** | 38.4 % | **32.1 %** | 8.50 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.20 € | **2.80 €** | 35.5 % | **18.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.50 €** | 47.7 % | **43.8 %** | 14.62 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **12.50 €** | 47.7 % | **43.1 %** | 12.66 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **13.50 €** | 20.3 % | **16.9 %** | 13.71 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.72 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.50 €** | 40.4 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.50 €** | 16.5 % | **13.2 %** | 13.79 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.50 €** | 45.7 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.50 €** | 12.0 % | **9.0 %** | 14.87 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.50 €** | 46.2 % | **40.9 %** | 10.87 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.90 € | **14.50 €** | 15.7 % | **12.6 %** | 14.89 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **12.50 €** | 31.1 % | **27.0 %** | 12.89 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 2.10 € | **1.70 €** | 51.1 % | **22.3 %** | 1.80 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.10 €** | 53.0 % | **35.5 %** | 3.14 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.50 €** | 40.9 % | **26.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.90 € | **3.50 €** | 48.2 % | **33.0 %** | 3.60 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.30 € | **6.90 €** | 53.0 % | **44.6 %** | 6.92 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.23 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.60 € | **4.20 €** | 48.4 % | **35.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 4.80 € | **4.40 €** | 54.9 % | **42.0 %** | 4.49 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **4.70 €** | 54.1 % | **42.0 %** | 4.80 € | stávame sa najlacnejší |
| JBL Tune 530BT Black | 38.90 € | **38.50 €** | 7.1 % | **6.0 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.50 €** | 15.8 % | **13.8 %** | 22.54 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **41.50 €** | 15.1 % | **14.0 %** | 41.59 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **27.50 €** | 15.4 % | **13.7 %** | 27.64 € | stávame sa najlacnejší |
| Cabletech UCH0022-S | 20.90 € | **20.50 €** | 8.0 % | **6.0 %** | 20.68 € | stávame sa najlacnejší |
| Uni-T UT201R digitálny klešťový multimeter | 22.90 € | **22.50 €** | 16.0 % | **14.0 %** | 22.69 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 60.90 € | **60.50 €** | 21.4 % | **20.6 %** | 60.69 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.50 €** | 35.5 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **33.50 €** | 20.0 % | **18.6 %** | 33.71 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.50 €** | 15.1 % | **14.4 %** | 63.71 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 27.90 € | **27.50 €** | 25.4 % | **23.6 %** | 27.73 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.50 €** | 38.4 % | **36.1 %** | 23.75 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.90 € | **20.50 €** | 15.0 % | **12.8 %** | 20.75 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **39.50 €** | 38.6 % | **37.2 %** | 39.78 € | stávame sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 26.90 € | **26.50 €** | 11.6 % | **9.9 %** | 26.79 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 30.90 € | **30.50 €** | 10.0 % | **8.6 %** | 30.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.50 €** | 39.6 % | **36.8 %** | 19.80 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.50 €** | 14.9 % | **13.4 %** | 29.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.50 €** | 20.3 % | **18.7 %** | 29.85 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.90 € | **28.50 €** | 39.1 % | **37.2 %** | 28.89 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **16.50 €** | 38.2 % | **35.0 %** | 16.89 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.89 € | stávame sa najlacnejší |
| Masážní přístroj šíje a zad, REBEL ACTIVE RBA-6005 | 32.90 € | **32.50 €** | 7.5 % | **6.2 %** | 32.89 € | stávame sa najlacnejší |
| Tefal KO5S08E0 | 34.90 € | **34.50 €** | 9.7 % | **8.5 %** | 34.89 € | stávame sa najlacnejší |
| LEIFHEIT 51016 | 48.90 € | **48.50 €** | 7.0 % | **6.1 %** | 48.89 € | stávame sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **35.50 €** | 15.0 % | **13.7 %** | 35.89 € | stávame sa najlacnejší |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 9.00 € | **8.70 €** | 48.1 % | **43.2 %** | 8.80 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.70 €** | 38.3 % | **34.1 %** | 9.80 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 4.20 € | **3.90 €** | 55.9 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.60 € | **2.30 €** | 48.9 % | **31.7 %** | 2.39 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.70 €** | 56.3 % | **32.9 %** | 1.71 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.80 €** | 55.2 % | **33.0 %** | 1.82 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.30 €** | 58.6 % | **28.9 %** | 1.35 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.40 €** | 44.0 % | **18.6 %** | 1.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.80 €** | 47.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 4.50 € | **4.20 €** | 53.7 % | **43.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 4.70 € | **4.40 €** | 52.8 % | **43.1 %** | 4.46 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.20 €** | 55.5 % | **42.2 %** | 3.26 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 5.10 € | **4.80 €** | 40.1 % | **31.8 %** | 4.87 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.40 € | **3.10 €** | 46.3 % | **33.4 %** | 3.17 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.50 €** | 48.8 % | **32.8 %** | 2.58 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.80 € | **2.50 €** | 46.9 % | **31.1 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 9.10 € | **8.80 €** | 42.3 % | **37.6 %** | 8.88 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **8.10 €** | 47.7 % | **44.1 %** | 8.15 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.80 €** | 41.8 % | **32.4 %** | 2.84 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.80 €** | 41.0 % | **31.6 %** | 2.84 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.40 €** | 44.5 % | **26.5 %** | 1.50 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.90 €** | 54.2 % | **26.2 %** | 0.98 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.90 €** | 54.2 % | **26.2 %** | 1.00 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.50 € | **1.30 €** | 50.6 % | **30.5 %** | 1.35 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.70 €** | 47.1 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.40 € | **2.20 €** | 35.5 % | **24.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.20 €** | 52.4 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.90 €** | 46.2 % | **39.1 %** | 4.00 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.40 €** | 54.6 % | **51.3 %** | 9.50 € | stávame sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 37.00 € | **36.90 €** | 5.5 % | **5.2 %** | 36.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 44.00 € | **43.90 €** | 5.6 % | **5.4 %** | 43.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.00 € | **17.90 €** | 6.0 % | **5.5 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.90 €** | 14.9 % | **14.7 %** | 54.94 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 16.5 % | **15.9 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.90 €** | 54.5 % | **54.2 %** | 47.97 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.90 €** | 14.6 % | **14.3 %** | 46.97 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.90 €** | 25.3 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.20 € | **4.10 €** | 23.3 % | **20.3 %** | 4.17 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.70 € | **7.60 €** | 53.4 % | **51.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.70 € | **4.60 €** | 11.4 % | **9.0 %** | 4.69 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.10 € | **3.00 €** | 49.1 % | **44.3 %** | 3.01 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.90 € | **2.80 €** | 23.4 % | **19.2 %** | 2.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.80 €** | 17.4 % | **14.4 %** | 3.85 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.90 €** | 46.0 % | **41.2 %** | 2.98 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.40 €** | 34.2 % | **30.4 %** | 3.48 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.60 €** | 37.2 % | **32.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.90 €** | 22.7 % | **19.7 %** | 3.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.50 €** | 15.7 % | **12.5 %** | 3.59 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.70 € | **3.60 €** | 45.3 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **1.90 €** | 23.2 % | **17.0 %** | 1.99 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.10 €** | 43.5 % | **31.5 %** | 1.14 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.10 €** | 39.4 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.80 €** | 45.7 % | **38.1 %** | 1.89 € | stávame sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.00 € | **11.90 €** | 9.3 % | **8.3 %** | 11.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.95 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.50 €** | 32.5 % | **30.5 %** | 6.55 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.50 €** | 32.5 % | **30.5 %** | 6.55 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.90 €** | 45.7 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.30 € | **3.20 €** | 36.2 % | **32.1 %** | 3.25 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.90 €** | 38.5 % | **37.5 %** | 12.96 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **11.90 €** | 47.4 % | **46.1 %** | 11.96 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.96 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.96 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.80 €** | 11.5 % | **10.2 %** | 8.86 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 6.9 % | **5.4 %** | 7.06 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.77 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.20 €** | 37.2 % | **34.6 %** | 5.28 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.10 € | **8.00 €** | 11.1 % | **9.7 %** | 8.09 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.90 €** | 38.4 % | **36.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.30 € | **6.20 €** | 16.9 % | **15.1 %** | 6.29 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.90 €** | 25.1 % | **23.8 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.50 €** | 24.8 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 28.3 % | **26.3 %** | 6.49 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 8.7 % | **7.1 %** | 6.49 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11, V15 | 7.00 € | **6.90 €** | 30.8 % | **29.0 %** | 6.99 € | stávame sa najlacnejší |
| Solight stĺpcový filter pre Dyson V12 | 6.00 € | **5.90 €** | 26.4 % | **24.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.90 €** | 36.9 % | **35.2 %** | 7.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.20 €** | 21.0 % | **18.8 %** | 5.29 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.30 €** | 43.8 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |
| Merač oxidu uhoľnatého Uni-T UT337A | 74.00 € | **73.90 €** | 14.8 % | **14.6 %** | 73.93 € | stávame sa najlacnejší |
| Súprava celodenných filtrov Freewell Real Locking s ... | 220.00 € | **219.90 €** | 14.9 % | **14.9 %** | 219.94 € | stávame sa najlacnejší |

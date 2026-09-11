# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-11

Vstup: `premiumstoresk_20260911_1254.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6173**
- Návrh **zvýšiť** cenu: **271** produktov
- Návrh **znížiť** cenu: **1167** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4735** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **407**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (271)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Samsung The Frame Pro QE75LS03HW | 2683.90 € | **2768.00 €** | 10.0 % | **13.5 %** | 2768.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.50 € | **126.90 €** | 14.6 % | **24.8 %** | 116.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| EMOS E8625 domácí bezdrátová meteostanice | 46.00 € | **55.90 €** | 9.8 % | **33.4 %** | 46.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK620EABK4 | 425.50 € | **433.00 €** | 5.1 % | **7.0 %** | 432.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Nubela 2569 90100, bílý | 20.50 € | **28.00 €** | 11.3 % | **52.0 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 33 Ah MHPower MS33-12 | 57.50 € | **64.90 €** | -6.9 % | **5.0 %** | 57.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Electrolux MCK CZ | 22.90 € | **29.90 €** | 11.7 % | **45.8 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZHM2550 | 34.50 € | **39.90 €** | 11.1 % | **28.5 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sada Combi Classic mop 56792 | 14.00 € | **18.50 €** | 10.6 % | **46.2 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22280-56/RH | 57.50 € | **61.50 €** | 10.9 % | **18.7 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| TP-link Tapo L535E | 19.90 € | **23.50 €** | 11.0 % | **31.1 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 59.50 € | **63.00 €** | 10.5 % | **17.0 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica KF 17191 | 26.90 € | **30.00 €** | 10.0 % | **22.7 %** | 29.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA TW-E5B BROWN | 135.90 € | **139.00 €** | 10.1 % | **12.6 %** | 139.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA TW-E5B GRAY | 135.90 € | **139.00 €** | 10.1 % | **12.6 %** | 139.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 0028 98050 | 64.90 € | **67.90 €** | 5.6 % | **10.5 %** | 64.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **64.00 €** | 19.8 % | **24.7 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 52127 Set Clean Twist M Ergo | 41.90 € | **43.90 €** | 10.3 % | **15.6 %** | 43.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.50 € | **16.50 €** | 10.2 % | **25.4 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.90 €** | 20.1 % | **45.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **15.50 €** | 20.1 % | **33.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 46.00 € | **47.50 €** | 5.9 % | **9.4 %** | 46.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 112.50 € | **113.90 €** | 10.2 % | **11.6 %** | 113.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.3 % | **16.5 %** | 31.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 23310-56/RH | 44.50 € | **45.90 €** | 10.9 % | **14.4 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| KOMA RK01 - Univerzální rotační kartáč | 17.90 € | **19.00 €** | 10.8 % | **17.6 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 251.90 € | **253.00 €** | 7.4 % | **7.9 %** | 252.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **38.50 €** | 10.7 % | **13.6 %** | 38.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Yogurella 617 | 26.50 € | **27.50 €** | 5.2 % | **9.2 %** | 27.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| MAXXO DH 919 Extra Tea | 11.50 € | **12.50 €** | 14.3 % | **24.2 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 21391-56/RH | 49.90 € | **50.90 €** | 10.4 % | **12.6 %** | 50.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 0028 92020 | 67.00 € | **68.00 €** | 10.2 % | **11.8 %** | 68.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZHM2459S | 38.50 € | **39.50 €** | 11.1 % | **14.0 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 25.50 € | **26.50 €** | 6.7 % | **10.9 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BC50D2V0 | 16.00 € | **17.00 €** | 10.3 % | **17.2 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 35.90 € | **36.90 €** | 14.3 % | **17.5 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 35.90 € | **36.90 €** | 14.6 % | **17.8 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.50 €** | 14.6 % | **19.3 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G10152 horkovzdušná trouba | 146.00 € | **146.90 €** | 8.4 % | **9.1 %** | 146.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 5.20 € | **6.10 €** | 13.0 % | **32.6 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 9.80 € | **10.50 €** | 38.6 % | **48.5 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Breakfast Bollitore 2846, černá | 16.90 € | **17.50 €** | 6.8 % | **10.5 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **17.50 €** | 38.6 % | **43.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy OFFICE M40 Vertical | 13.90 € | **14.50 €** | 11.3 % | **16.1 %** | 14.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 13.90 € | **14.50 €** | 38.0 % | **43.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 137 | 33.00 € | **33.50 €** | 9.5 % | **11.1 %** | 33.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong SRT84 Terestriální HDMI přijímač | 28.00 € | **28.50 €** | 9.1 % | **11.1 %** | 28.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.00 € | **18.50 €** | 7.1 % | **10.0 %** | 18.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Décafeinated 500 g zrno | 12.00 € | **12.50 €** | 5.6 % | **10.0 %** | 12.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90504 French press 800ml | 13.00 € | **13.50 €** | 9.5 % | **13.7 %** | 13.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente DigiChef+ kuchyňský robot | 125.00 € | **125.50 €** | 7.4 % | **7.8 %** | 125.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Sky B-4610 zlatý | 65.00 € | **65.50 €** | 8.7 % | **9.5 %** | 65.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.00 € | **22.50 €** | 9.5 % | **12.0 %** | 22.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH1239WO | 161.00 € | **161.50 €** | 8.7 % | **9.0 %** | 161.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal SV4111E0 | 82.00 € | **82.50 €** | 5.0 % | **5.6 %** | 82.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje BMX201M2BG | 171.00 € | **171.50 €** | 9.0 % | **9.3 %** | 171.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA MV 447 ADW | 413.00 € | **413.50 €** | 7.0 % | **7.1 %** | 413.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fagor 4LVF-638ADIT | 470.00 € | **470.50 €** | 6.9 % | **7.1 %** | 470.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Concept ETV8360bcN | 526.00 € | **526.50 €** | 7.0 % | **7.1 %** | 526.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G2015706 Emilia 250 | 363.00 € | **363.50 €** | 6.0 % | **6.1 %** | 363.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.00 € | **11.50 €** | 6.8 % | **11.7 %** | 11.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo HiFi Tuner TR05 | 138.00 € | **138.50 €** | 9.9 % | **10.3 %** | 138.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pedrini Infinity červená 6 porcí | 36.00 € | **36.50 €** | 9.7 % | **11.3 %** | 36.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 61521kuchyňská váha Page | 22.00 € | **22.50 €** | 7.9 % | **10.3 %** | 22.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.00 € | **60.50 €** | 9.1 % | **10.0 %** | 60.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.00 € | **17.50 €** | 8.1 % | **11.2 %** | 17.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Crema 1 kg zrno | 20.00 € | **20.50 €** | 5.6 % | **8.3 %** | 20.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Foodsaver New Fresh 2,3 l | 31.00 € | **31.50 €** | 6.2 % | **7.9 %** | 31.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal J1640574 | 23.50 € | **24.00 €** | 6.4 % | **8.6 %** | 23.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 53.50 € | **54.00 €** | 6.7 % | **7.7 %** | 53.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 30.00 € | **30.50 €** | 6.5 % | **8.2 %** | 30.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot CSC062X | 157.50 € | **158.00 €** | 6.8 % | **7.1 %** | 157.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA EliteCook K70 Ultra | 147.00 € | **147.50 €** | 9.6 % | **9.9 %** | 147.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9286IB | 248.00 € | **248.50 €** | 5.8 % | **6.0 %** | 248.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver VS5910X | 279.00 € | **279.50 €** | 8.5 % | **8.7 %** | 279.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| TP-LINK WiFi AX3000 (Deco X55 1-pack) | 97.50 € | **98.00 €** | 5.3 % | **5.8 %** | 97.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI MiTag set 3ks Google Find My APD006 | 37.00 € | **37.50 €** | 8.1 % | **9.5 %** | 37.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool C WD 84M WBS CZ | 638.00 € | **638.50 €** | 6.4 % | **6.4 %** | 638.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6412 CB | 270.00 € | **270.50 €** | 5.9 % | **6.1 %** | 270.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 410090000 | 331.00 € | **331.50 €** | 6.8 % | **7.0 %** | 331.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Concept OPK5160bc | 178.00 € | **178.50 €** | 7.8 % | **8.1 %** | 178.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 105.00 € | **105.50 €** | 9.6 % | **10.1 %** | 105.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Graef S 10005 | 113.00 € | **113.50 €** | 9.5 % | **10.0 %** | 113.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux ESKQ9 | 14.00 € | **14.50 €** | 8.4 % | **12.3 %** | 14.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 90502 French press Atria 800 ml | 11.00 € | **11.50 €** | 8.0 % | **12.9 %** | 11.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1022300 | 136.00 € | **136.50 €** | 9.8 % | **10.2 %** | 136.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco Pur Arabica Premium 1 kg zrno | 22.00 € | **22.50 €** | 5.8 % | **8.2 %** | 22.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Braun IS5247.VI | 185.00 € | **185.50 €** | 7.7 % | **8.0 %** | 185.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.00 € | **36.50 €** | 8.4 % | **9.9 %** | 36.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FVB015X | 18.00 € | **18.50 €** | 6.9 % | **9.9 %** | 18.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9283EK | 18.00 € | **18.50 €** | 9.7 % | **12.7 %** | 18.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 30.50 € | **31.00 €** | 10.3 % | **12.1 %** | 30.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9215AV | 32.00 € | **32.50 €** | 7.3 % | **9.0 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| KOMA HPU1 - Univerzální hubice | 12.50 € | **13.00 €** | 13.3 % | **17.8 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nutribullet NB614.DG | 54.00 € | **54.50 €** | 7.1 % | **8.1 %** | 54.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO754K | 35.00 € | **35.50 €** | 5.5 % | **7.0 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO 264 AP | 58.00 € | **58.50 €** | 8.2 % | **9.1 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Combi Clean M + náhr. Static | 21.00 € | **21.50 €** | 10.1 % | **12.8 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA YWA-10 BL | 56.50 € | **57.00 €** | 10.5 % | **11.5 %** | 57.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Café al’Italienne 1 kg zrno | 21.00 € | **21.50 €** | 5.1 % | **7.6 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.00 € | **33.50 €** | 31.5 % | **33.4 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.00 € | **33.50 €** | 14.2 % | **15.9 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 36.00 € | **36.50 €** | 37.9 % | **39.8 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 14.00 € | **14.50 €** | 31.0 % | **35.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.00 € | **14.50 €** | 42.3 % | **47.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.00 € | **14.50 €** | 42.3 % | **47.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **18.50 €** | 35.3 % | **39.0 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **12.50 €** | 47.4 % | **53.5 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.00 € | **11.50 €** | 32.3 % | **38.3 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.00 € | **11.50 €** | 35.1 % | **41.2 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.00 € | **13.50 €** | 41.7 % | **47.1 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **557.50 €** | 6.6 % | **6.7 %** | 557.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.00 € | **22.50 €** | 8.7 % | **11.2 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Ultimate Graphite Black | 269.00 € | **269.50 €** | 15.6 % | **15.8 %** | 269.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna smart WIFI meteostanica | 98.00 € | **98.50 €** | 19.0 % | **19.6 %** | 98.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 17.50 € | **18.00 €** | 7.1 % | **10.2 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 15.00 € | **15.50 €** | 12.3 % | **16.0 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 10.00 € | **10.50 €** | 5.9 % | **11.2 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 14.0 % | **16.0 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **42.50 €** | 19.0 % | **20.4 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 8-Port Switch (DES-108) | 20.50 € | **21.00 €** | 12.1 % | **14.8 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 49dB | 25.00 € | **25.50 €** | 28.0 % | **30.6 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.00 € | **22.50 €** | 6.9 % | **9.3 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 60.00 € | **60.50 €** | 36.0 % | **37.2 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1022600 | 120.50 € | **120.90 €** | 9.8 % | **10.2 %** | 120.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.90 €** | 9.8 % | **10.2 %** | 110.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| SAMSUNG MS23K3555EK/EO | 118.50 € | **118.90 €** | 10.1 % | **10.5 %** | 118.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung VG-SCFC43SGMXC | 118.50 € | **118.90 €** | 5.4 % | **5.8 %** | 118.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP ENVY 6520e AiO (714N9B) | 102.50 € | **102.90 €** | 9.7 % | **10.1 %** | 102.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi FG9201 | 116.50 € | **116.90 €** | 9.7 % | **10.1 %** | 116.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi FG4101 | 139.50 € | **139.90 €** | 9.7 % | **10.1 %** | 139.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 101 | 157.50 € | **157.90 €** | 7.6 % | **7.9 %** | 157.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42329PC | 114.50 € | **114.90 €** | 7.1 % | **7.4 %** | 114.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX3200 Router (R32/E) | 82.50 € | **82.90 €** | 8.7 % | **9.3 %** | 82.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE ECT601FM | 136.50 € | **136.90 €** | 8.5 % | **8.8 %** | 136.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal OptiGrill GC7P0810 | 98.50 € | **98.90 €** | 9.0 % | **9.4 %** | 98.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 99.50 € | **99.90 €** | 9.0 % | **9.4 %** | 99.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Nefrit | 117.50 € | **117.90 €** | 9.6 % | **10.0 %** | 117.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.0 % | **13.8 %** | 11.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.50 € | **10.90 €** | 7.8 % | **11.9 %** | 10.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.50 € | **11.90 €** | 5.4 % | **9.1 %** | 11.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board S/M | 14.50 € | **14.90 €** | 8.7 % | **11.6 %** | 14.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo vodní filtry 3+1 | 11.50 € | **11.90 €** | 7.5 % | **11.2 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 713240002 | 11.50 € | **11.90 €** | 9.1 % | **12.9 %** | 11.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laica VT3509 | 11.50 € | **11.90 €** | 5.9 % | **9.6 %** | 11.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.50 € | **14.90 €** | 6.5 % | **9.4 %** | 14.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi PE1600 | 15.50 € | **15.90 €** | 5.3 % | **8.0 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 13.50 € | **13.90 €** | 17.1 % | **20.6 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.50 € | **14.90 €** | 18.4 % | **21.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter digitálny V33 | 11.50 € | **11.90 €** | 16.4 % | **20.5 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.50 € | **10.90 €** | 41.3 % | **46.7 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.50 € | **10.90 €** | 33.0 % | **38.0 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.50 € | **12.90 €** | 30.3 % | **34.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.50 € | **12.90 €** | 15.0 % | **18.6 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio Fx 85 Es Plus 2E | 20.50 € | **20.90 €** | 12.4 % | **14.6 %** | 20.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 16.50 € | **16.90 €** | 5.5 % | **8.1 %** | 16.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.90 €** | 9.7 % | **12.1 %** | 18.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-BC261 | 31.50 € | **31.90 €** | 6.1 % | **7.5 %** | 31.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 24010-56 | 40.50 € | **40.90 €** | 9.5 % | **10.5 %** | 40.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42602S | 39.50 € | **39.90 €** | 8.2 % | **9.3 %** | 39.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje SIH1800BLT | 19.50 € | **19.90 €** | 12.5 % | **14.8 %** | 19.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| San Marco SUPREMO 1 kg zrno | 21.50 € | **21.90 €** | 6.3 % | **8.3 %** | 21.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-PE165 | 59.50 € | **59.90 €** | 7.4 % | **8.1 %** | 59.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje MVC72HGA | 29.50 € | **29.90 €** | 8.6 % | **10.1 %** | 29.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Rouge BP3443 | 31.50 € | **31.90 €** | 8.0 % | **9.3 %** | 31.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Espresso Intenso 1 kg zrno | 17.50 € | **17.90 €** | 5.3 % | **7.8 %** | 17.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit sušák Comfort Tower 420 | 47.50 € | **47.90 €** | 8.2 % | **9.1 %** | 47.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 808/05 | 59.50 € | **59.90 €** | 7.8 % | **8.5 %** | 59.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer rychlovarná konvice ZCK1275 | 39.50 € | **39.90 €** | 10.4 % | **11.6 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO7059S | 35.50 € | **35.90 €** | 7.0 % | **8.2 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.50 € | **28.90 €** | 37.2 % | **39.1 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **49.90 €** | 23.6 % | **24.6 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.50 € | **21.90 €** | 31.5 % | **34.0 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.50 € | **41.90 €** | 33.6 % | **34.9 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.50 € | **19.90 €** | 31.7 % | **34.4 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 16.50 € | **16.90 €** | 7.7 % | **10.4 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.50 € | **17.90 €** | 24.6 % | **27.4 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.90 €** | 18.7 % | **20.3 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.50 € | **22.90 €** | 28.1 % | **30.4 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 27.50 € | **27.90 €** | 13.0 % | **14.7 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.50 € | **38.90 €** | 34.3 % | **35.7 %** | 38.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 21.50 € | **21.90 €** | 8.7 % | **10.7 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 21.50 € | **21.90 €** | 8.7 % | **10.7 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.50 € | **17.90 €** | 10.7 % | **13.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 334.50 € | **334.90 €** | 7.0 % | **7.1 %** | 334.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica MI 446 TBIM | 528.50 € | **528.90 €** | 6.0 % | **6.1 %** | 528.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool TDLR 6240S EU/N | 327.50 € | **327.90 €** | 5.9 % | **6.0 %** | 327.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool C WD 94M WBS CZ | 674.50 € | **674.90 €** | 9.1 % | **9.1 %** | 674.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B3RCSO255S | 275.50 € | **275.90 €** | 7.9 % | **8.0 %** | 275.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WE694A1 | 348.50 € | **348.90 €** | 6.9 % | **7.0 %** | 348.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fagor 4LVF-637ADIT | 444.50 € | **444.90 €** | 7.0 % | **7.1 %** | 444.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI118PT2SSMA | 767.50 € | **767.90 €** | 6.0 % | **6.0 %** | 767.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 888.50 € | **888.90 €** | 6.9 % | **7.0 %** | 888.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WP B9X WBS EE | 703.50 € | **703.90 €** | 9.9 % | **9.9 %** | 703.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 447.50 € | **447.90 €** | 5.8 % | **5.9 %** | 447.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 498.90 € | **499.00 €** | 8.2 % | **8.2 %** | 499.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDIN38646D | 495.90 € | **496.00 €** | 7.0 % | **7.0 %** | 496.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GI6432BSCWF | 318.90 € | **319.00 €** | 5.2 % | **5.2 %** | 319.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslařský trenažér HMS Premium ZW1600 | 670.90 € | **671.00 €** | 121110.5 % | **121128.5 %** | 670.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 368.90 € | **369.00 €** | 66548.6 % | **66566.7 %** | 368.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 6.6 % | **7.1 %** | 23.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 27011-56 | 44.90 € | **45.00 €** | 5.2 % | **5.4 %** | 44.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FFC026X | 39.90 € | **40.00 €** | 6.5 % | **6.8 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9279W | 50.90 € | **51.00 €** | 9.6 % | **9.8 %** | 51.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko Mezikus PCSKM | 57.90 € | **58.00 €** | 6.2 % | **6.4 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko Mezikus PCSKW | 57.90 € | **58.00 €** | 6.2 % | **6.4 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.20 € | **8.30 €** | 12.4 % | **13.8 %** | 8.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 39.90 € | **40.00 €** | 19.2 % | **19.5 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.90 € | **27.00 €** | 35.2 % | **35.7 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.10 € | **5.20 €** | 43.5 % | **46.3 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.10 € | **4.20 €** | 20.3 % | **23.3 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.60 € | **6.70 €** | 28.7 % | **30.6 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 4.80 € | **4.90 €** | 31.8 % | **34.6 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.40 €** | 11.3 % | **13.9 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.30 € | **4.40 €** | 33.4 % | **36.5 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.70 €** | 34.0 % | **37.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.10 € | **5.20 €** | 30.8 % | **33.4 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.60 € | **3.70 €** | 42.8 % | **46.7 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.50 € | **3.60 €** | 48.2 % | **52.4 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.50 € | **2.60 €** | 31.1 % | **36.4 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.20 €** | 16.9 % | **22.5 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.00 €** | 19.7 % | **23.8 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **2.00 €** | 33.2 % | **40.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.30 € | **3.40 €** | 34.1 % | **38.2 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.10 € | **3.20 €** | 33.4 % | **37.7 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.70 € | **1.80 €** | 22.3 % | **29.5 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 22.2 % | **26.9 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 12.4 % | **16.1 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.80 € | **3.90 €** | 29.3 % | **32.7 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.60 €** | 31.7 % | **35.5 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.60 € | **3.70 €** | 41.4 % | **45.3 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.50 € | **3.60 €** | 21.1 % | **24.5 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.30 € | **1.40 €** | 28.9 % | **38.8 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.30 € | **1.40 €** | 22.9 % | **32.4 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.80 € | **1.90 €** | 38.1 % | **45.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 8.3 % | **9.3 %** | 10.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.90 € | **12.00 €** | 27.8 % | **28.9 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.00 € | **8.10 €** | 15.5 % | **17.0 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.00 € | **8.10 €** | 15.5 % | **17.0 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 7.90 € | **8.00 €** | 10.9 % | **12.3 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.20 € | **3.30 €** | 16.1 % | **19.8 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, 20 - 200A | 5.00 € | **5.10 €** | 4.5 % | **6.6 %** | 5.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **9.70 €** | 33.2 % | **34.6 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.10 € | **9.20 €** | 38.0 % | **39.5 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 5.40 € | **5.50 €** | 15.5 % | **17.7 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (black) | 11.90 € | **12.00 €** | 16.7 % | **17.7 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.80 € | **8.90 €** | 31.8 % | **33.3 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.50 € | **9.60 €** | 35.7 % | **37.2 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.50 € | **5.60 €** | 25.6 % | **27.9 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.20 € | **5.30 €** | 35.5 % | **38.1 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.70 € | **4.80 €** | 22.1 % | **24.7 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 18.6 % | **21.0 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 34.2 % | **36.1 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **6.10 €** | 25.4 % | **27.5 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 11.90 € | **12.00 €** | 18.3 % | **19.3 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.40 € | **4.50 €** | 34.0 % | **37.0 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.90 € | **9.00 €** | 9.3 % | **10.5 %** | 8.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.90 € | **10.00 €** | 25.6 % | **26.8 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW5558E0 | 173.90 € | **174.00 €** | 6.1 % | **6.1 %** | 173.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Armodd Prime 3 GPS Black - 9148 | 88.90 € | **89.00 €** | 5.4 % | **5.5 %** | 89.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Midland G9 Pro, PMR+LPD, single | 95.90 € | **96.00 €** | 10.0 % | **10.1 %** | 96.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA DI 6401 PSB | 178.90 € | **179.00 €** | 8.9 % | **9.0 %** | 179.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Gracioso horizontal | 197.90 € | **198.00 €** | 10.6 % | **10.7 %** | 197.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1167)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D skener Creality Sermoon S1 | 2561.00 € | **2338.90 €** | 15.0 % | **5.0 %** | 1972.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality CR-Scan Raptor Pro | 1834.50 € | **1675.50 €** | 15.0 % | **5.0 %** | 800.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 924.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 256GB Graphite | 2200.50 € | **2100.50 €** | 10.0 % | **5.0 %** | 1380.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1441.90 € | **1346.50 €** | 15.0 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1545.50 € | **1452.50 €** | 15.0 % | **8.1 %** | 1452.56 € | stávame sa najlacnejší |
| MSI Cyborg 9S7-15QL42-080 | 1856.90 € | **1772.50 €** | 10.0 % | **5.0 %** | 1409.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality CR-Scan Raptor 3D Scanner | 950.00 € | **867.50 €** | 15.0 % | **5.0 %** | 800.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI Katana 17 HX (B14WGK-282CZ) | 1637.90 € | **1563.50 €** | 10.0 % | **5.0 %** | 1267.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI Katana 17 HX (B14WEK-267CZ) | 1546.50 € | **1476.50 €** | 10.0 % | **5.0 %** | 1099.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro Max 256GB Deep Blue | 1450.90 € | **1384.90 €** | 10.0 % | **5.0 %** | 1215.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro 256GB Cosmic Orange | 1360.50 € | **1298.50 €** | 10.0 % | **5.0 %** | 1092.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1292.50 €** | 15.0 % | **10.1 %** | 1292.73 € | stávame sa najlacnejší |
| Saeco Aurora B2 | 1238.50 € | **1182.00 €** | 10.0 % | **5.0 %** | 999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 140.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Photon P1 | 639.00 € | **583.50 €** | 15.0 % | **5.0 %** | 553.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 194.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 355.90 € | **303.50 €** | 72237.4 % | **61587.0 %** | 303.75 € | stávame sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 882.90 € | **830.90 €** | 15.0 % | **8.2 %** | 830.95 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 508.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LaserPecker LX2 40W laserový gravír | 1879.50 € | **1830.50 €** | 15.0 % | **12.0 %** | 1830.67 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 22 GEN 3 (GS2203) | 542.90 € | **495.90 €** | 15.0 % | **5.1 %** | 410.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 612.50 € | **566.00 €** | 15.0 % | **6.3 %** | 566.36 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **461.50 €** | 15.0 % | **5.1 %** | 421.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 460.50 € | **417.50 €** | 24.3 % | **12.7 %** | 417.60 € | stávame sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 85.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max robotický s mopom, výk... | 188.50 € | **150.50 €** | 31.9 % | **5.3 %** | 125.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Volant MOZA RACING pre Lamborghini Revuelto | 431.00 € | **393.50 €** | 15.0 % | **5.0 %** | 369.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **392.50 €** | 14.9 % | **5.0 %** | 265.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 428.00 € | **391.50 €** | 14.9 % | **5.1 %** | 358.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor JMGO PicoPlay+ | 413.00 € | **378.90 €** | 14.9 % | **5.5 %** | 379.00 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Pro | 506.00 € | **472.00 €** | 15.0 % | **7.2 %** | 472.18 € | stávame sa najlacnejší |
| Xiaomi Pad 8 Pro 12/512GB Green (72207) | 742.50 € | **708.90 €** | 10.0 % | **5.0 %** | 607.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **499.50 €** | 15.0 % | **7.8 %** | 499.90 € | stávame sa najlacnejší |
| PS5 PlayStation®5 Console–1TB | 727.50 € | **694.50 €** | 10.0 % | **5.0 %** | 599.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **445.00 €** | 15.0 % | **7.1 %** | 445.21 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 713.90 € | **681.50 €** | 10.0 % | **5.0 %** | 659.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Karta pamäte Lexar High-Performance Silver Plus micr... | 367.90 € | **335.90 €** | 15.0 % | **5.0 %** | 289.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425 KIT 4MPx, vonkajšie, ... | 144.90 € | **113.90 €** | 33.7 % | **5.1 %** | 101.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 151.90 € | **122.00 €** | 43.8 % | **15.5 %** | 122.43 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 314.00 € | **284.90 €** | 26.3 % | **14.6 %** | 284.96 € | stávame sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **309.50 €** | 15.0 % | **5.1 %** | 293.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3BCNA324HS | 631.50 € | **602.50 €** | 10.1 % | **5.0 %** | 586.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **305.50 €** | 14.9 % | **5.1 %** | 280.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Pro 8/256GB (ZAHD0072CZ) | 603.90 € | **576.50 €** | 10.0 % | **5.0 %** | 518.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 130.00 € | **103.00 €** | 32.5 % | **5.0 %** | 102.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-C603 BLACK | 596.50 € | **569.50 €** | 10.1 % | **5.1 %** | 569.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Ultima Nova C40 | 301.00 € | **274.90 €** | 15.0 % | **5.0 %** | 267.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Pro 8/128GB (ZAHD0017CZ) | 563.00 € | **537.50 €** | 10.0 % | **5.0 %** | 502.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 557.90 € | **532.50 €** | 10.1 % | **5.1 %** | 449.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **347.00 €** | 15.1 % | **7.3 %** | 347.14 € | stávame sa najlacnejší |
| iiyama ProLite XCB4594DQSU-B1 | 538.50 € | **513.90 €** | 10.0 % | **5.0 %** | 502.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620AAXL4 | 640.50 € | **616.00 €** | 10.1 % | **5.9 %** | 616.50 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 326.00 € | **302.00 €** | 14.9 % | **6.5 %** | 302.49 € | stávame sa najlacnejší |
| Lenovo Yoga Tab 12/256GB (ZAG60160CZ) | 525.90 € | **502.00 €** | 10.0 % | **5.0 %** | 479.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **252.50 €** | 15.0 % | **5.2 %** | 228.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **64.50 €** | 43.8 % | **5.5 %** | 64.90 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 490.00 € | **467.90 €** | 10.0 % | **5.0 %** | 439.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Tab Plus 8/256GB (ZAHT0126CZ) | 489.50 € | **467.50 €** | 10.0 % | **5.1 %** | 414.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AW | 478.50 € | **456.50 €** | 10.1 % | **5.0 %** | 427.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI4S8CM1SEA | 477.50 € | **455.90 €** | 10.1 % | **5.1 %** | 400.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210G | 474.50 € | **452.90 €** | 10.0 % | **5.0 %** | 453.00 € | stávame sa najlacnejší |
| Beko BDFS26046XQ | 473.50 € | **452.00 €** | 10.0 % | **5.0 %** | 424.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AURZEN Boom Mini projektor | 250.50 € | **229.00 €** | 15.0 % | **5.2 %** | 229.10 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 305.50 € | **284.00 €** | 15.1 % | **7.0 %** | 284.20 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 601.50 € | **580.00 €** | 10.1 % | **6.2 %** | 580.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C610 KIT 3MPx, vonkajšia, IP PTZ... | 103.90 € | **82.50 €** | 32.6 % | **5.3 %** | 79.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 175.50 € | **154.50 €** | 19.3 % | **5.0 %** | 142.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **657.50 €** | 15.0 % | **11.4 %** | 657.51 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 496.90 € | **475.90 €** | 10.1 % | **5.4 %** | 476.00 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 433.00 € | **412.50 €** | 15.0 % | **9.5 %** | 412.68 € | stávame sa najlacnejší |
| Lenovo Tab Plus 8/128GB (ZAHT0170CZ) | 448.90 € | **428.50 €** | 10.1 % | **5.1 %** | 375.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Pro 8/12GB (ZAHD0103CZ) | 448.90 € | **428.50 €** | 10.1 % | **5.1 %** | 397.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 9N2BR-S | 434.90 € | **414.90 €** | 10.1 % | **5.0 %** | 404.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 10N3B-S | 468.90 € | **448.90 €** | 10.1 % | **5.4 %** | 449.00 € | stávame sa najlacnejší |
| Beko BDFN26540XP | 461.90 € | **441.90 €** | 10.1 % | **5.3 %** | 442.00 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (čierny) | 295.50 € | **275.50 €** | 15.1 % | **7.3 %** | 275.70 € | stávame sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 180.00 € | **160.50 €** | 27.1 % | **13.4 %** | 160.52 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 64.00 € | **44.50 €** | 53.9 % | **7.0 %** | 44.89 € | stávame sa najlacnejší |
| Projektor BlitzWolf BW-V11 | 344.90 € | **325.50 €** | 15.0 % | **8.6 %** | 325.83 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3RCNA375HXB | 404.50 € | **385.90 €** | 10.1 % | **5.0 %** | 369.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A6 bílá | 483.50 € | **465.00 €** | 10.1 % | **5.9 %** | 465.50 € | stávame sa najlacnejší |
| GORENJE N619EAW4 | 392.90 € | **374.90 €** | 10.1 % | **5.1 %** | 365.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **191.50 €** | 15.0 % | **5.1 %** | 188.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 188.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HII64500UFT | 374.90 € | **357.90 €** | 10.1 % | **5.1 %** | 327.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 161.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **176.00 €** | 15.1 % | **5.0 %** | 154.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 137.90 € | **121.00 €** | 27244.8 % | **23893.7 %** | 121.03 € | stávame sa najlacnejší |
| AMICA TR 110 TW | 362.50 € | **345.90 €** | 10.1 % | **5.1 %** | 287.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C411 KIT 3MPx, outdoor, IP, WiFi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 45.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C260 IP, 8MPx, WiFi, prísvit | 79.90 € | **63.50 €** | 32.6 % | **5.4 %** | 55.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 57.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 309.90 € | **293.50 €** | 10.9 % | **5.0 %** | 276.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 597.00 € | **580.90 €** | 8.0 % | **5.0 %** | 530.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BOS6737E20FBG | 357.50 € | **341.50 €** | 10.1 % | **5.1 %** | 335.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 426.00 € | **410.00 €** | 15.0 % | **10.6 %** | 410.21 € | stávame sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70118CZ | 341.50 € | **325.90 €** | 10.0 % | **5.0 %** | 268.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70373CZ | 342.50 € | **326.90 €** | 10.0 % | **5.0 %** | 284.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RR8589CE | 413.50 € | **397.90 €** | 10.1 % | **5.9 %** | 398.00 € | stávame sa najlacnejší |
| Candy BR 26SSB6G-S | 347.50 € | **331.90 €** | 10.1 % | **5.1 %** | 332.00 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **36.90 €** | 50.5 % | **5.7 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **162.90 €** | 15.0 % | **5.2 %** | 138.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 179.00 € | **163.90 €** | 14.9 % | **5.2 %** | 152.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5390 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5396 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 49B8G-S | 331.90 € | **316.90 €** | 10.0 % | **5.1 %** | 309.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **229.50 €** | 15.1 % | **8.0 %** | 229.69 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 69.00 € | **54.50 €** | 58.9 % | **25.5 %** | 54.62 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá VIAIM Nano+ AI s hlasovým záznamníkom (zel... | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 104.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 48SB8C-S | 312.50 € | **298.50 €** | 10.1 % | **5.1 %** | 263.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta GZ5436E0 | 299.90 € | **285.90 €** | 10.1 % | **5.0 %** | 255.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BMTD37146W | 397.50 € | **383.50 €** | 10.0 % | **6.1 %** | 383.90 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 261.00 € | **247.50 €** | 14.9 % | **9.0 %** | 247.66 € | stávame sa najlacnejší |
| Candy GD 49B8-S | 292.90 € | **279.50 €** | 10.1 % | **5.0 %** | 260.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect UPi B7 10.1" 1920x1200 60Hz Portable Monitor | 151.90 € | **138.90 €** | 15.1 % | **5.3 %** | 138.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LXB1SE11W0 | 273.50 € | **260.90 €** | 10.2 % | **5.1 %** | 243.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept LA8383DS | 760.50 € | **747.90 €** | 10.0 % | **8.2 %** | 748.00 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 272.00 € | **259.90 €** | 10.0 % | **5.1 %** | 259.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6342XOK | 266.50 € | **254.50 €** | 10.1 % | **5.2 %** | 195.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 325 | 263.50 € | **251.50 €** | 10.2 % | **5.1 %** | 229.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zmodo ZS-2004-B-1TB | 261.50 € | **249.50 €** | 10.1 % | **5.1 %** | 228.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 114.50 € | **102.50 €** | 17.4 % | **5.1 %** | 84.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 134.00 € | **122.00 €** | 24.7 % | **13.5 %** | 122.14 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 310.50 € | **298.90 €** | 10.0 % | **5.9 %** | 299.00 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 310.50 € | **298.90 €** | 10.0 % | **5.9 %** | 299.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 4/256GB zelená (79232) | 262.00 € | **250.50 €** | 10.0 % | **5.2 %** | 185.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 137.50 € | **126.00 €** | 15.0 % | **5.4 %** | 126.41 € | stávame sa najlacnejší |
| Aligator Blackview BV7300 Black | 252.90 € | **241.50 €** | 10.1 % | **5.2 %** | 201.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator Blackview BV7300 Yellow | 252.90 € | **241.50 €** | 10.1 % | **5.2 %** | 201.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 EFC226R | 253.90 € | **242.50 €** | 10.1 % | **5.1 %** | 236.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 39.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.50 € | **135.50 €** | 15.6 % | **6.9 %** | 135.90 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 344.90 € | **334.00 €** | 10.1 % | **6.6 %** | 334.50 € | stávame sa najlacnejší |
| Samsung The Frame QE43LS03H | 791.50 € | **780.90 €** | 10.0 % | **8.5 %** | 781.00 € | stávame sa najlacnejší |
| Concept IDV5160wh | 364.50 € | **353.90 €** | 10.1 % | **6.9 %** | 354.00 € | stávame sa najlacnejší |
| DOMO DO91124 volně stojící chladnička s | 234.50 € | **223.90 €** | 10.1 % | **5.1 %** | 219.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 47.50 € | **37.00 €** | 38.3 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **216.00 €** | 15.0 % | **9.7 %** | 216.27 € | stávame sa najlacnejší |
| ETA Magic X-treme 7235 90000 černý/modrý | 339.50 € | **329.00 €** | 10.1 % | **6.7 %** | 329.50 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 345.50 € | **335.00 €** | 10.1 % | **6.8 %** | 335.50 € | stávame sa najlacnejší |
| GORENJE GS620C10S | 354.50 € | **344.00 €** | 10.1 % | **6.9 %** | 344.50 € | stávame sa najlacnejší |
| Guzzanti GZ 70G | 230.90 € | **220.50 €** | 10.1 % | **5.2 %** | 211.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 272.90 € | **262.50 €** | 9.3 % | **5.2 %** | 261.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab 4/128GB (ZAFR0358CZ) | 220.00 € | **210.00 €** | 10.0 % | **5.0 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 13Wr Flex (UMM220V30) | 216.50 € | **206.50 €** | 10.2 % | **5.1 %** | 187.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6547FXK | 225.90 € | **215.90 €** | 10.2 % | **5.3 %** | 216.00 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 351.90 € | **341.90 €** | 10.1 % | **7.0 %** | 342.00 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.15 € | stávame sa najlacnejší |
| Whirlpool W7F HP33 A | 348.50 € | **338.50 €** | 10.1 % | **7.0 %** | 338.78 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **212.50 €** | 15.0 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 42.00 € | **32.00 €** | 41.9 % | **8.1 %** | 32.50 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1390.90 € | **1381.00 €** | 10.0 % | **9.2 %** | 1381.50 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 425.90 € | **416.00 €** | 10.0 % | **7.5 %** | 416.50 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 333.90 € | **324.00 €** | 10.0 % | **6.8 %** | 324.50 € | stávame sa najlacnejší |
| GORENJE FN4172CW | 340.50 € | **330.90 €** | 10.1 % | **7.0 %** | 331.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C310 vonkajšia, IP, FHD, WiFi, p... | 48.50 € | **38.90 €** | 31.3 % | **5.3 %** | 37.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 43.50 € | **33.90 €** | 54.0 % | **20.0 %** | 33.99 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 38.50 € | **28.90 €** | 57.5 % | **18.2 %** | 29.00 € | stávame sa najlacnejší |
| Beko VRT96425VD | 262.50 € | **252.90 €** | 10.1 % | **6.1 %** | 253.00 € | stávame sa najlacnejší |
| Epson EcoTank L3310 | 205.50 € | **196.00 €** | 10.1 % | **5.0 %** | 179.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 98.50 € | **89.00 €** | 17.8 % | **6.4 %** | 89.47 € | stávame sa najlacnejší |
| Electrolux EUOC94DB | 212.90 € | **203.50 €** | 10.1 % | **5.2 %** | 169.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 204.50 € | **195.50 €** | 10.1 % | **5.3 %** | 167.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 28 | 193.50 € | **184.50 €** | 10.3 % | **5.2 %** | 160.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 83.50 € | **74.50 €** | 18.3 % | **5.6 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 91 | 197.00 € | **188.00 €** | 10.0 % | **5.0 %** | 183.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **99.50 €** | 14.9 % | **5.4 %** | 98.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal CY851130 | 197.50 € | **188.50 €** | 10.1 % | **5.1 %** | 188.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 204.50 € | **195.50 €** | 14.9 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Maxxo Chamber Line 70 | 360.90 € | **352.00 €** | 10.0 % | **7.3 %** | 352.50 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **37.90 €** | 28.9 % | **5.0 %** | 34.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 24G | 184.50 € | **175.90 €** | 10.1 % | **5.0 %** | 159.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L2622DW | 184.50 € | **175.90 €** | 10.3 % | **5.1 %** | 164.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 9.7 4/128GB Gray (76907) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 183.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q7 BF Black | 188.50 € | **179.90 €** | 10.2 % | **5.2 %** | 177.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HIF-8892 EBT Multimediální HI-F | 191.50 € | **182.90 €** | 10.1 % | **5.1 %** | 182.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 75.50 € | **66.90 €** | 18.8 % | **5.2 %** | 67.00 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 146.50 € | **138.00 €** | 11.5 % | **5.0 %** | 127.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator Hotwav T7 PRO Black | 197.00 € | **188.50 €** | 10.0 % | **5.3 %** | 187.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-T535DW | 208.00 € | **199.50 €** | 10.0 % | **5.5 %** | 199.79 € | stávame sa najlacnejší |
| Epson EcoTank L1350 | 186.90 € | **178.50 €** | 10.0 % | **5.1 %** | 162.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 26.00 € | **17.90 €** | 54.3 % | **6.2 %** | 17.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 90.00 € | **81.90 €** | 17.4 % | **6.9 %** | 82.00 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 2-pack) | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 133.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 498.50 € | **490.50 €** | 6.8 % | **5.1 %** | 462.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-270B Gramofon hnědý | 177.50 € | **169.50 €** | 10.1 % | **5.2 %** | 153.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWF 420 BL | 176.50 € | **168.50 €** | 10.0 % | **5.0 %** | 156.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **87.50 €** | 14.9 % | **5.3 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **86.90 €** | 15.2 % | **5.5 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C113 IP, 3MPx, WiFi, prísvit, vn... | 38.90 € | **30.90 €** | 32.4 % | **5.2 %** | 30.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **33.00 €** | 38.3 % | **11.3 %** | 33.03 € | stávame sa najlacnejší |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 145.00 € | **137.00 €** | 24.8 % | **17.9 %** | 137.16 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **27.00 €** | 37.3 % | **5.9 %** | 27.24 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.90 € | **165.00 €** | 10.1 % | **5.1 %** | 151.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualZone Q787 XXL Deluxe | 166.50 € | **158.90 €** | 10.2 % | **5.2 %** | 137.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 167.50 € | **159.90 €** | 11.3 % | **6.2 %** | 159.95 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 29.00 € | **21.50 €** | 44.4 % | **7.0 %** | 20.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravír XTOOL M2 20 W | 1124.50 € | **1117.00 €** | 15.0 % | **14.3 %** | 1117.25 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **85.00 €** | 15.1 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **85.00 €** | 15.1 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa A3C Pro 13,3" | 129.00 € | **121.50 €** | 14.9 % | **8.3 %** | 121.81 € | stávame sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 357.00 € | **349.50 €** | 9.3 % | **7.0 %** | 349.86 € | stávame sa najlacnejší |
| GUZZANTI GZ 44GW | 206.00 € | **198.50 €** | 10.0 % | **6.0 %** | 198.90 € | stávame sa najlacnejší |
| Niceboy Hurricane H7 Plus | 163.90 € | **156.50 €** | 10.1 % | **5.1 %** | 129.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 37.90 € | **30.50 €** | 42.6 % | **14.7 %** | 30.90 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 284.90 € | **277.50 €** | 15.0 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 537.00 € | **529.90 €** | 7.9 % | **6.5 %** | 529.95 € | stávame sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 119.00 € | **111.90 €** | 11.7 % | **5.1 %** | 105.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.00 € | **80.90 €** | 14.7 % | **5.4 %** | 78.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 258.50 € | **251.50 €** | 8.0 % | **5.0 %** | 239.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **77.50 €** | 15.2 % | **5.6 %** | 70.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L1630W | 158.90 € | **151.90 €** | 10.0 % | **5.2 %** | 148.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 10002 | 148.50 € | **141.50 €** | 10.3 % | **5.1 %** | 138.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S60... | 82.50 € | **75.50 €** | 14.8 % | **5.1 %** | 72.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 11000 | 160.50 € | **153.50 €** | 10.1 % | **5.3 %** | 152.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CH 64 XB | 159.50 € | **152.50 €** | 10.1 % | **5.2 %** | 151.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI G32C4X | 152.90 € | **145.90 €** | 10.1 % | **5.1 %** | 145.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **23.90 €** | 59.7 % | **23.5 %** | 24.00 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (biely) | 189.50 € | **182.50 €** | 15.1 % | **10.8 %** | 182.70 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **81.50 €** | 14.9 % | **5.8 %** | 81.81 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **81.50 €** | 14.9 % | **5.8 %** | 81.81 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 33.50 € | **26.50 €** | 35.9 % | **7.5 %** | 26.89 € | stávame sa najlacnejší |
| Strong SRT24HG4723C | 145.90 € | **139.00 €** | 10.2 % | **5.0 %** | 138.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GEC5C41SG | 319.90 € | **313.00 €** | 10.1 % | **7.7 %** | 313.50 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 318.50 € | **311.90 €** | 10.1 % | **7.8 %** | 312.00 € | stávame sa najlacnejší |
| LEIFHEIT  Regulus PowerVac 2in1 11925 | 144.50 € | **137.90 €** | 10.0 % | **5.0 %** | 124.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO354VD | 117.50 € | **110.90 €** | 16.5 % | **9.9 %** | 111.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač DO TechniSat TechniControl | 25.00 € | **18.50 €** | 42.4 % | **5.4 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT32HG6733C | 151.00 € | **144.50 €** | 10.0 % | **5.3 %** | 140.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 27.50 € | **21.00 €** | 51.2 % | **15.4 %** | 21.36 € | stávame sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 151.50 € | **145.00 €** | 10.4 % | **5.7 %** | 145.41 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 285.50 € | **279.00 €** | 10.0 % | **7.5 %** | 279.50 € | stávame sa najlacnejší |
| TP-LINK WiFi AX1500 (Deco X10 3-pack) | 144.90 € | **138.50 €** | 10.1 % | **5.2 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná 12V / 45 Ah MHPower 6-DMF-45 GEL Tra... | 112.90 € | **106.50 €** | 11.3 % | **5.0 %** | 89.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT24HE4023C | 139.90 € | **133.50 €** | 10.1 % | **5.1 %** | 125.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO6164EA | 144.90 € | **138.50 €** | 10.2 % | **5.4 %** | 134.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 83.90 € | **77.50 €** | 13.7 % | **5.0 %** | 74.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.90 € | **64.50 €** | 16.5 % | **6.0 %** | 64.69 € | stávame sa najlacnejší |
| GORENJE GS520E15W | 270.00 € | **263.90 €** | 10.0 % | **7.5 %** | 264.00 € | stávame sa najlacnejší |
| Merač oxidu uhoľnatého Uni-T UT337A | 74.00 € | **67.90 €** | 14.8 % | **5.3 %** | 63.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko FRL5388B | 134.90 € | **128.90 €** | 10.2 % | **5.3 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 32.90 € | **26.90 €** | 29.0 % | **5.4 %** | 23.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 53.50 € | **47.50 €** | 18.4 % | **5.1 %** | 44.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal EY8328E0 | 124.50 € | **118.50 €** | 10.4 % | **5.1 %** | 118.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 17SSB7-S | 308.90 € | **302.90 €** | 10.1 % | **7.9 %** | 303.00 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 299.90 € | **293.90 €** | 10.1 % | **7.9 %** | 294.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.90 € | **228.90 €** | 10.0 % | **7.2 %** | 229.00 € | stávame sa najlacnejší |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 99.50 € | **93.50 €** | 25.0 % | **17.4 %** | 93.64 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 69.00 € | **63.00 €** | 24.9 % | **14.0 %** | 63.19 € | stávame sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.90 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 120.90 € | **115.00 €** | 23.7 % | **17.7 %** | 115.15 € | stávame sa najlacnejší |
| Guzzanti GZ 460 | 120.50 € | **114.90 €** | 10.4 % | **5.3 %** | 101.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1 | 127.50 € | **121.90 €** | 10.2 % | **5.3 %** | 117.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Soundbar JBL Bar 2.0 All-In-One (MK2) | 198.50 € | **192.90 €** | 8.2 % | **5.1 %** | 189.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 8401SE | 128.50 € | **122.90 €** | 10.1 % | **5.3 %** | 120.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 114.50 € | **108.90 €** | 18.8 % | **13.0 %** | 108.91 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 210.50 € | **204.90 €** | 10.2 % | **7.3 %** | 205.00 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 18.00 € | **12.50 €** | 53.9 % | **6.9 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT32HH5553 | 122.50 € | **117.00 €** | 10.0 % | **5.1 %** | 117.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 125.50 € | **120.00 €** | 14.9 % | **9.9 %** | 120.06 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UGame C2 16" 2560x1600 120Hz | 169.50 € | **164.00 €** | 15.1 % | **11.4 %** | 164.31 € | stávame sa najlacnejší |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 75.00 € | **69.50 €** | 14.7 % | **6.3 %** | 69.90 € | stávame sa najlacnejší |
| TESLA PowerWash & Steam Station TQS600 | 122.90 € | **117.50 €** | 10.1 % | **5.2 %** | 108.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFC55SGMXC | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 118.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Midland BTR1 Advanced, Single | 192.90 € | **187.50 €** | 10.1 % | **7.0 %** | 187.90 € | stávame sa najlacnejší |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 196.90 € | **191.50 €** | 15.1 % | **11.9 %** | 191.90 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 21.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 58.00 € | **52.90 €** | 16.6 % | **6.4 %** | 52.99 € | stávame sa najlacnejší |
| BROTHER HL-L1232W | 118.00 € | **112.90 €** | 10.1 % | **5.3 %** | 111.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 440 | 107.50 € | **102.50 €** | 10.2 % | **5.0 %** | 91.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 41.90 € | **36.90 €** | 20.4 % | **6.0 %** | 36.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK812110 | 109.90 € | **104.90 €** | 10.2 % | **5.2 %** | 104.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WHT643E4XBG | 251.90 € | **246.90 €** | 10.1 % | **7.9 %** | 247.00 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.90 € | **238.90 €** | 10.0 % | **7.8 %** | 239.00 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 505.90 € | **500.90 €** | 10.0 % | **8.9 %** | 501.00 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.50 €** | 37.8 % | **12.7 %** | 22.65 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.50 €** | 14.9 % | **10.0 %** | 114.71 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA310 Umývateľná mopovac... | 25.00 € | **20.00 €** | 38.3 % | **10.6 %** | 20.30 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 117.50 € | **112.50 €** | 15.2 % | **10.3 %** | 112.80 € | stávame sa najlacnejší |
| YAMAHA True X Bar 50A / SR-X50A BLACK | 713.00 € | **708.00 €** | 10.0 % | **9.2 %** | 708.38 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 28.50 € | **23.50 €** | 32.9 % | **9.6 %** | 23.89 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 36.00 € | **31.00 €** | 37.9 % | **18.8 %** | 31.50 € | stávame sa najlacnejší |
| Braun CG9043 | 219.90 € | **215.00 €** | 10.1 % | **7.6 %** | 215.50 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.90 € | **122.00 €** | 10.2 % | **5.9 %** | 122.50 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 42.90 € | **38.00 €** | 29.7 % | **14.8 %** | 38.06 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 52.90 € | **48.00 €** | 25.2 % | **13.6 %** | 48.19 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **8.80 €** | 121.3 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 31.50 € | **26.90 €** | 38.6 % | **18.3 %** | 26.91 € | stávame sa najlacnejší |
| Kaon MZ-102 Skylink Viaccess Orca bezkartový systém | 115.50 € | **110.90 €** | 9.6 % | **5.2 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CMWA23TNDB | 97.50 € | **92.90 €** | 10.3 % | **5.1 %** | 89.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 3601 | 101.50 € | **96.90 €** | 10.0 % | **5.0 %** | 95.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 108.50 € | **103.90 €** | 13.2 % | **8.4 %** | 104.00 € | stávame sa najlacnejší |
| Tesla SlowCook S900 Plus | 92.50 € | **88.00 €** | 10.5 % | **5.1 %** | 74.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dávkovač potravín Oneisall PFD001 Pro (... | 57.00 € | **52.50 €** | 14.6 % | **5.6 %** | 43.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 45.00 € | **40.50 €** | 17.4 % | **5.7 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash DY450 PRO s ventilátorom... | 53.00 € | **48.50 €** | 14.9 % | **5.1 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer BE3600 WiFi 7 Router | 95.50 € | **91.00 €** | 10.2 % | **5.0 %** | 83.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 24440-56 | 109.00 € | **104.50 €** | 10.0 % | **5.5 %** | 99.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GOOLOO GP3000 59,2 Wh štartér | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 48.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.00 € | **10.50 €** | 54.2 % | **7.9 %** | 9.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 54.00 € | **49.50 €** | 19.6 % | **9.7 %** | 49.57 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 20.50 € | **16.00 €** | 48.5 % | **15.9 %** | 16.17 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 20.50 € | **16.00 €** | 45.8 % | **13.8 %** | 16.17 € | stávame sa najlacnejší |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 18.50 € | **14.00 €** | 45.9 % | **10.4 %** | 14.19 € | stávame sa najlacnejší |
| Electrolux EB61C4DB | 150.50 € | **146.00 €** | 10.1 % | **6.8 %** | 146.21 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 89.50 € | **85.00 €** | 20.9 % | **14.8 %** | 85.29 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **43.50 €** | 54.5 % | **40.0 %** | 43.90 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 179.50 € | **175.00 €** | 10.0 % | **7.2 %** | 175.50 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 170.90 € | **166.50 €** | 8.0 % | **5.2 %** | 144.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 81.90 € | **77.50 €** | 11.0 % | **5.0 %** | 76.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 81.90 € | **77.50 €** | 11.0 % | **5.0 %** | 77.69 € | stávame sa najlacnejší |
| Výrobok X.A.3 | 53.90 € | **49.50 €** | 15.0 % | **5.6 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 23.90 € | **19.50 €** | 39.2 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Tefal GV 9620E0 | 374.00 € | **369.90 €** | 10.0 % | **8.8 %** | 370.00 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 35.00 € | **30.90 €** | 19.0 % | **5.0 %** | 30.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HDCG 32220 FX | 97.00 € | **92.90 €** | 10.0 % | **5.4 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator R60 eXtremo Black Orange | 89.00 € | **84.90 €** | 10.1 % | **5.0 %** | 83.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator R60 eXtremo Green | 89.00 € | **84.90 €** | 10.1 % | **5.0 %** | 83.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator R60 eXtremo Orange | 89.00 € | **84.90 €** | 10.1 % | **5.0 %** | 83.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS6550i White | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 50.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K4 ruční, bezdrátový set | 122.90 € | **118.90 €** | 8.7 % | **5.2 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RO 3923 EA | 79.50 € | **75.50 €** | 10.6 % | **5.1 %** | 66.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER HL-1110E | 92.90 € | **88.90 €** | 10.2 % | **5.5 %** | 80.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 10T LTE | 94.90 € | **90.90 €** | 10.0 % | **5.4 %** | 84.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 59.90 € | **55.90 €** | 13.1 % | **5.5 %** | 51.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO Mini HD265 | 49.90 € | **45.90 €** | 14.7 % | **5.5 %** | 41.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 40.90 € | **36.90 €** | 17.5 % | **6.0 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 258.50 € | **254.50 €** | 6.8 % | **5.2 %** | 251.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 19.00 € | **15.00 €** | 33.7 % | **5.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Stormy Home 0517 90000 | 79.50 € | **75.50 €** | 10.7 % | **5.1 %** | 74.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 102.00 € | **98.00 €** | 14.9 % | **10.4 %** | 98.03 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 61.50 € | **57.50 €** | 41.6 % | **32.4 %** | 57.55 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 376.50 € | **372.50 €** | 10.9 % | **9.8 %** | 372.57 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 182.90 € | **178.90 €** | 8.0 % | **5.6 %** | 179.00 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.90 € | **128.90 €** | 10.3 % | **7.0 %** | 129.00 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **82.50 €** | 15.2 % | **9.8 %** | 82.66 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.00 € | **48.00 €** | 15.2 % | **6.3 %** | 48.19 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA520 Umývateľný HEPA fi... | 24.00 € | **20.00 €** | 32.7 % | **10.6 %** | 20.30 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **15.50 €** | 36.9 % | **8.8 %** | 15.90 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **11.50 €** | 49.3 % | **10.8 %** | 11.90 € | stávame sa najlacnejší |
| Barkan 464XL | 125.50 € | **121.50 €** | 24.3 % | **20.4 %** | 121.90 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **43.00 €** | 15.1 % | **5.3 %** | 43.46 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 102.00 € | **98.00 €** | 10.0 % | **5.7 %** | 98.50 € | stávame sa najlacnejší |
| Aligator S6600 Duo 64GB Black | 82.90 € | **79.00 €** | 10.2 % | **5.0 %** | 77.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.90 € | **62.00 €** | 20.2 % | **13.1 %** | 62.08 € | stávame sa najlacnejší |
| Projektor AURZEN Boom Mini Black | 232.90 € | **229.00 €** | 15.1 % | **13.1 %** | 229.10 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 13.50 € | **9.60 €** | 55.7 % | **10.7 %** | 9.70 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.90 € | **38.00 €** | 18.1 % | **7.1 %** | 38.09 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 4.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 19.50 € | **15.90 €** | 31.7 % | **7.4 %** | 15.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 110.50 € | **106.90 €** | 8.6 % | **5.1 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Mijia Smart Humidifier Pro | 80.50 € | **76.90 €** | 10.0 % | **5.1 %** | 60.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje MO 20 A3B | 76.50 € | **72.90 €** | 10.5 % | **5.3 %** | 65.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla AeroStar T700 | 82.50 € | **78.90 €** | 10.2 % | **5.4 %** | 74.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IB5100E0 | 93.50 € | **89.90 €** | 9.6 % | **5.4 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI7160BL | 78.50 € | **74.90 €** | 10.3 % | **5.3 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 95.50 € | **91.90 €** | 14.0 % | **9.7 %** | 91.96 € | stávame sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 73.50 € | **69.90 €** | 14.0 % | **8.5 %** | 69.96 € | stávame sa najlacnejší |
| EcoFlow DELTA 3 Max nabíjecí stanice 1ECO2040 | 1362.00 € | **1358.50 €** | 5.3 % | **5.0 %** | 1198.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica LAI KJ2000W | 80.00 € | **76.50 €** | 10.0 % | **5.2 %** | 50.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 75.00 € | **71.50 €** | 10.5 % | **5.3 %** | 50.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TR4755i Black | 80.00 € | **76.50 €** | 10.1 % | **5.2 %** | 57.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkční balanční podložka HMS BSX02 | 133.00 € | **129.50 €** | 8.2 % | **5.4 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Outdoor Camera CW500 Dual EU | 71.50 € | **68.00 €** | 10.5 % | **5.1 %** | 63.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 29.00 € | **25.50 €** | 21.7 % | **7.0 %** | 23.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **31.00 €** | 47.5 % | **32.6 %** | 31.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **9.00 €** | 56.6 % | **12.7 %** | 9.03 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 20.50 € | **17.00 €** | 33.9 % | **11.0 %** | 17.05 € | stávame sa najlacnejší |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 83.00 € | **79.50 €** | 21.1 % | **16.0 %** | 79.56 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 32.50 € | **29.00 €** | 43.8 % | **28.3 %** | 29.08 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 70.00 € | **66.50 €** | 23.5 % | **17.3 %** | 66.58 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **83.50 €** | 14.8 % | **10.2 %** | 83.65 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 81.00 € | **77.50 €** | 23.7 % | **18.4 %** | 77.69 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 29.50 € | **26.00 €** | 22.2 % | **7.7 %** | 26.29 € | stávame sa najlacnejší |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 50.50 € | **47.00 €** | 24.7 % | **16.0 %** | 47.35 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 55.00 € | **51.50 €** | 39.6 % | **30.7 %** | 51.90 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 210.50 € | **207.00 €** | 10.0 % | **8.2 %** | 207.50 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 79.90 € | **76.50 €** | 10.1 % | **5.4 %** | 65.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator A930 GPS Senior Black | 80.90 € | **77.50 €** | 10.1 % | **5.4 %** | 75.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ANMITE A185W03 18,5" prenosný monitor | 134.90 € | **131.50 €** | 15.0 % | **12.1 %** | 131.73 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 251.90 € | **248.50 €** | 10.2 % | **8.7 %** | 248.90 € | stávame sa najlacnejší |
| UTRAI T1 štartér do auta | 42.90 € | **39.50 €** | 15.2 % | **6.1 %** | 31.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 40.90 € | **37.50 €** | 15.3 % | **5.7 %** | 32.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.50 €** | 18.5 % | **8.7 %** | 37.63 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 28.90 € | **25.50 €** | 25.0 % | **10.3 %** | 25.69 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **19.50 €** | 38.1 % | **17.6 %** | 19.90 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - black | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 200.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - white | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 263.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion H640P | 39.00 € | **35.90 €** | 14.3 % | **5.3 %** | 34.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.00 € | **45.90 €** | 37.2 % | **28.5 %** | 45.96 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **9.90 €** | 38.5 % | **5.5 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Balanční míč HMS Premium BSX Pro | 103.00 € | **99.90 €** | 8.4 % | **5.1 %** | 85.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 65.00 € | **62.00 €** | 10.1 % | **5.0 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla SlowCook S800 Deluxe | 67.50 € | **64.50 €** | 10.6 % | **5.6 %** | 51.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 30.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6872 | 67.00 € | **64.00 €** | 10.1 % | **5.1 %** | 61.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator T100 Black | 68.90 € | **65.90 €** | 10.3 % | **5.5 %** | 64.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meross MOP320MA-EU WiFi inteligentná napájacia lišta... | 34.50 € | **31.50 €** | 15.8 % | **5.7 %** | 29.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 77.50 € | **74.50 €** | 9.5 % | **5.3 %** | 73.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-NEVE 4K UHD Streaming Dongle | 68.50 € | **65.50 €** | 10.3 % | **5.4 %** | 65.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **32.90 €** | 15.0 % | **5.4 %** | 32.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFC32WTBXC | 61.90 € | **58.90 €** | 10.5 % | **5.1 %** | 58.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E15 | 286.90 € | **283.90 €** | 6.2 % | **5.1 %** | 283.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **33.50 €** | 15.2 % | **5.8 %** | 33.54 € | stávame sa najlacnejší |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 20.00 € | **17.00 €** | 27.2 % | **8.1 %** | 17.05 € | stávame sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 62.50 € | **59.50 €** | 10.5 % | **5.2 %** | 59.59 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **13.00 €** | 38.4 % | **12.4 %** | 13.10 € | stávame sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 68.90 € | **65.90 €** | 10.5 % | **5.7 %** | 66.00 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 178.90 € | **175.90 €** | 10.1 % | **8.3 %** | 176.00 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 152.90 € | **149.90 €** | 10.0 % | **7.9 %** | 150.00 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-black (black) | 107.00 € | **104.00 €** | 14.8 % | **11.6 %** | 104.12 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 17.00 € | **14.00 €** | 42.8 % | **17.6 %** | 14.21 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 43.50 € | **40.50 €** | 14.3 % | **6.5 %** | 40.79 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 24.50 € | **21.50 €** | 39.6 % | **22.5 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **22.50 €** | 37.8 % | **21.5 %** | 22.90 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.50 € | **128.50 €** | 10.1 % | **7.6 %** | 128.90 € | stávame sa najlacnejší |
| Black&Decker BXDH12E | 167.50 € | **164.50 €** | 10.3 % | **8.3 %** | 164.90 € | stávame sa najlacnejší |
| Beko VRT76325VW | 169.50 € | **166.50 €** | 10.3 % | **8.4 %** | 166.90 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 92.90 € | **90.00 €** | 15.0 % | **11.4 %** | 90.38 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.90 € | **62.00 €** | 15.1 % | **9.9 %** | 62.49 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.90 € | **127.00 €** | 10.2 % | **7.8 %** | 127.50 € | stávame sa najlacnejší |
| Rowenta 3v1 RH5A32E0 | 119.90 € | **117.00 €** | 10.1 % | **7.4 %** | 117.50 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 197.90 € | **195.00 €** | 10.2 % | **8.6 %** | 195.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 24.90 € | **22.00 €** | 55.2 % | **37.2 %** | 22.20 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **36.00 €** | 14.9 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 10.90 € | **8.20 €** | 40.4 % | **5.7 %** | 7.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C80 WiFi Router | 50.50 € | **47.90 €** | 11.1 % | **5.3 %** | 37.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3752i Blue | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 35.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3750i Black | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 36.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MultiCook RC400 Low Carb | 64.50 € | **61.90 €** | 10.1 % | **5.7 %** | 53.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente ProVacs | 59.50 € | **56.90 €** | 10.0 % | **5.2 %** | 49.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový ovládač 4-kan. k pohonu brán IN SL-600, 100... | 28.50 € | **25.90 €** | 16.4 % | **5.8 %** | 19.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXSH2002E | 57.50 € | **54.90 €** | 10.2 % | **5.2 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo čierne) | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 26.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor elektromagnetického žiarenia FNIRSI ERD-10 | 32.50 € | **29.90 €** | 14.6 % | **5.4 %** | 29.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100(1-pack) regulácia 23... | 13.50 € | **10.90 €** | 31.3 % | **6.0 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 175.50 € | **172.90 €** | 10.1 % | **8.4 %** | 173.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA MG2551S Grey | 56.00 € | **53.50 €** | 10.1 % | **5.2 %** | 36.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 135 | 60.00 € | **57.50 €** | 10.2 % | **5.6 %** | 46.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR TWIN - Black/Silver | 53.50 € | **51.00 €** | 10.2 % | **5.0 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný termostat Avatto ZWT100 3A Zigbee Tuya | 33.00 € | **30.50 €** | 14.3 % | **5.7 %** | 26.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 26.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **12.50 €** | 28.9 % | **7.4 %** | 11.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 48.50 € | **46.00 €** | 23.1 % | **16.8 %** | 46.09 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 14.00 € | **11.50 €** | 30.8 % | **7.5 %** | 11.69 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 16.50 € | **14.00 €** | 25.1 % | **6.2 %** | 14.19 € | stávame sa najlacnejší |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 63.50 € | **61.00 €** | 15.4 % | **10.9 %** | 61.21 € | stávame sa najlacnejší |
| Herní mikrofon Maono DM30RGB (černý) | 40.50 € | **38.00 €** | 14.8 % | **7.8 %** | 38.23 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 28.50 € | **26.00 €** | 53.4 % | **40.0 %** | 26.26 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.00 € | **59.50 €** | 15.3 % | **10.7 %** | 59.79 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **31.00 €** | 14.6 % | **6.1 %** | 31.36 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 24.50 € | **22.00 €** | 23.3 % | **10.8 %** | 22.39 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.00 € | **10.50 €** | 42.1 % | **14.7 %** | 10.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **14.50 €** | 47.5 % | **25.8 %** | 14.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **14.50 €** | 47.5 % | **25.8 %** | 14.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 15.00 € | **12.50 €** | 38.3 % | **15.2 %** | 12.90 € | stávame sa najlacnejší |
| Ivo DVB-26 zesilovač 26dB (5-12V) | 27.00 € | **24.50 €** | 34.6 % | **22.1 %** | 24.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **14.00 €** | 39.3 % | **18.2 %** | 14.50 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 160.50 € | **158.00 €** | 10.2 % | **8.5 %** | 158.50 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.00 €** | 10.0 % | **8.0 %** | 132.50 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 206.50 € | **204.00 €** | 10.2 % | **8.8 %** | 204.50 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 161.50 € | **159.00 €** | 10.2 % | **8.5 %** | 159.50 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.90 € | **169.50 €** | 10.2 % | **8.7 %** | 169.90 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 12.90 € | **10.50 €** | 29.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 12.00 € | **9.60 €** | 49.2 % | **19.3 %** | 9.61 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 15.90 € | **13.50 €** | 31.1 % | **11.3 %** | 13.71 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **13.50 €** | 37.7 % | **16.9 %** | 13.90 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SM5000 | 52.90 € | **50.50 €** | 10.6 % | **5.6 %** | 47.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 49.90 € | **47.50 €** | 11.1 % | **5.8 %** | 46.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 27.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator D950 Antracit | 52.90 € | **50.50 €** | 10.7 % | **5.7 %** | 50.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 55.90 € | **53.50 €** | 15.4 % | **10.4 %** | 53.59 € | stávame sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 62.90 € | **60.50 €** | 24.1 % | **19.4 %** | 60.59 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **14.50 €** | 39.1 % | **19.3 %** | 14.60 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **19.50 €** | 48.6 % | **32.3 %** | 19.67 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 20.90 € | **18.50 €** | 25.2 % | **10.8 %** | 18.89 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.90 € | **19.50 €** | 24.8 % | **11.1 %** | 19.90 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.90 € | **23.50 €** | 22.6 % | **11.2 %** | 23.90 € | stávame sa najlacnejší |
| Aligator Reproduktor pro MagSafe ABSMB01 | 16.90 € | **14.50 €** | 25.5 % | **7.7 %** | 14.90 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.90 € | **37.50 €** | 16.8 % | **9.8 %** | 37.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 11.50 € | **9.30 €** | 57.1 % | **27.1 %** | 9.32 € | stávame sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 128 GB | 28.00 € | **25.90 €** | 14.7 % | **6.1 %** | 21.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.70 € | **5.60 €** | 54.6 % | **12.4 %** | 5.70 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DMR7 směrový, pro fotoaparáty, TRS | 73.50 € | **71.50 €** | 8.5 % | **5.5 %** | 61.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MR80X WiFi Dual Band Router | 43.00 € | **41.00 €** | 10.2 % | **5.1 %** | 32.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZSM7900 | 42.50 € | **40.50 €** | 10.7 % | **5.5 %** | 34.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 26.50 € | **24.50 €** | 15.2 % | **6.5 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria TATTU 10000mAh 14,8V 30C 4S1P Lipo Battery P... | 26.50 € | **24.50 €** | 14.9 % | **6.2 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový ovládač KRUGER & MATZ V-LED | 12.50 € | **10.50 €** | 25.2 % | **5.1 %** | 7.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE300 AC1200 WiFi Range Extender | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 31.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator A675 Senior Red | 48.50 € | **46.50 €** | 10.0 % | **5.5 %** | 43.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus 200 | 42.90 € | **40.90 €** | 10.2 % | **5.1 %** | 39.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.00 €** | 14.6 % | **5.1 %** | 20.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 12.50 € | **10.50 €** | 29.6 % | **8.9 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Airfit-Wh | 48.50 € | **46.50 €** | 10.2 % | **5.6 %** | 45.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny decibelomer Habotest HT622B USB A/C | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 24.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 21.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 381.90 € | **379.90 €** | 7.9 % | **7.4 %** | 379.95 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 36.00 € | **34.00 €** | 18.3 % | **11.7 %** | 34.09 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 29.50 € | **27.50 €** | 14.3 % | **6.6 %** | 27.59 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 23.50 € | **21.50 €** | 23.3 % | **12.8 %** | 21.59 € | stávame sa najlacnejší |
| Elektrický mlynček na zrnkovú kávu HiBREW G3 | 80.00 € | **78.00 €** | 14.9 % | **12.0 %** | 78.10 € | stávame sa najlacnejší |
| Domo DO344DH | 149.90 € | **147.90 €** | 10.1 % | **8.6 %** | 148.00 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 223.90 € | **221.90 €** | 10.1 % | **9.1 %** | 222.00 € | stávame sa najlacnejší |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 167.50 € | **165.50 €** | 8.2 % | **6.9 %** | 165.64 € | stávame sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 24.50 € | **22.50 €** | 23.3 % | **13.3 %** | 22.65 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 18.50 € | **16.50 €** | 40.3 % | **25.1 %** | 16.69 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 29.50 € | **27.50 €** | 22.2 % | **13.9 %** | 27.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 33.50 € | **31.50 €** | 17.7 % | **10.7 %** | 31.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.50 €** | 15.7 % | **8.7 %** | 31.69 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 20.50 € | **18.50 €** | 17.8 % | **6.3 %** | 18.83 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 76.50 € | **74.50 €** | 15.4 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 18.50 € | **16.50 €** | 38.9 % | **23.9 %** | 16.90 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.50 € | **18.50 €** | 27.8 % | **15.3 %** | 18.90 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 15.50 € | **13.50 €** | 42.6 % | **24.2 %** | 13.90 € | stávame sa najlacnejší |
| Domo DO223S | 64.50 € | **62.50 €** | 13.0 % | **9.5 %** | 62.90 € | stávame sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 62.50 € | **60.50 €** | 12.7 % | **9.1 %** | 60.90 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 14.50 € | **12.50 €** | 43.2 % | **23.5 %** | 12.90 € | stávame sa najlacnejší |
| Albrecht DR 54 | 64.50 € | **62.50 €** | 10.6 % | **7.1 %** | 62.90 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **110.00 €** | 15.0 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Aligator Watch GPS Silver | 64.90 € | **63.00 €** | 10.4 % | **7.2 %** | 63.50 € | stávame sa najlacnejší |
| SONY WFC710N Black | 69.90 € | **68.00 €** | 12.9 % | **9.8 %** | 68.50 € | stávame sa najlacnejší |
| SONY WFC710N Blue | 69.90 € | **68.00 €** | 12.9 % | **9.8 %** | 68.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **11.00 €** | 47.7 % | **26.0 %** | 11.49 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **14.00 €** | 56.1 % | **37.5 %** | 14.50 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 7.30 € | **5.40 €** | 47.3 % | **8.9 %** | 5.41 € | stávame sa najlacnejší |
| N'oveen IWH480 | 34.90 € | **33.00 €** | 11.2 % | **5.2 %** | 28.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C6 WiFi Dual Band Router | 36.90 € | **35.00 €** | 10.7 % | **5.0 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E4GK1-4GB | 37.90 € | **36.00 €** | 10.8 % | **5.2 %** | 36.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **26.00 €** | 15.4 % | **7.5 %** | 26.12 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.90 € | **39.00 €** | 10.8 % | **5.7 %** | 39.50 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 20.90 € | **19.00 €** | 18.1 % | **7.3 %** | 19.50 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 7.90 € | **6.10 €** | 46.6 % | **13.2 %** | 6.12 € | stávame sa najlacnejší |
| SONY WHCH520W.CE7 bílá | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 305 Combo 2-pack, 6ZD17AE | 29.50 € | **27.90 €** | 11.1 % | **5.1 %** | 23.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **27.90 €** | 11.4 % | **5.4 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2023F0 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 33.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 22.50 € | **20.90 €** | 16.3 % | **8.0 %** | 20.94 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 46.50 € | **44.90 €** | 9.5 % | **5.7 %** | 45.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **39.90 €** | 10.8 % | **6.6 %** | 40.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **39.90 €** | 10.8 % | **6.6 %** | 40.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **39.90 €** | 10.8 % | **6.6 %** | 40.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 12.50 € | **10.90 €** | 23.2 % | **7.4 %** | 8.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 12.50 € | **10.90 €** | 23.8 % | **7.9 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **13.90 €** | 39.9 % | **25.4 %** | 14.00 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **112.90 €** | 10.0 % | **8.5 %** | 113.00 € | stávame sa najlacnejší |
| Roadstar DJ-390 BT Bluetooth speaker | 114.50 € | **112.90 €** | 10.2 % | **8.7 %** | 113.00 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.90 €** | 10.0 % | **7.4 %** | 65.00 € | stávame sa najlacnejší |
| Leifheit Žehlicí prkno Classic M Basic | 33.50 € | **32.00 €** | 10.1 % | **5.2 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií XTAR VC4SL 18650 | 27.00 € | **25.50 €** | 13.3 % | **7.0 %** | 17.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 19.00 € | **17.50 €** | 16.7 % | **7.5 %** | 12.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Držák fólií (rolí) PARAT ROYAL | 31.50 € | **30.00 €** | 10.5 % | **5.2 %** | 27.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (čierne) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (strieborné) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **15.00 €** | 16.1 % | **5.6 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 23.00 € | **21.50 €** | 14.2 % | **6.8 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 57.00 € | **55.50 €** | 8.0 % | **5.1 %** | 54.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Telegant 72 Protect | 28.50 € | **27.00 €** | 11.1 % | **5.2 %** | 27.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru CABLETECH UCH0219-1 17''-32'' | 16.50 € | **15.00 €** | 30.1 % | **18.3 %** | 15.01 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 5.50 € | **4.00 €** | 53.1 % | **11.4 %** | 4.01 € | stávame sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **16.50 €** | 15.0 % | **5.4 %** | 16.56 € | stávame sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 12.50 € | **11.00 €** | 28.2 % | **12.8 %** | 11.07 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 31.50 € | **30.00 €** | 12.7 % | **7.4 %** | 30.09 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 32.50 € | **31.00 €** | 10.7 % | **5.6 %** | 31.10 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 18.50 € | **17.00 €** | 41.2 % | **29.8 %** | 17.16 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **20.50 €** | 54.3 % | **43.8 %** | 20.67 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 20.00 € | **18.50 €** | 19.2 % | **10.3 %** | 18.69 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.00 € | **52.50 €** | 8.7 % | **5.7 %** | 52.70 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Karta microSD Lexar 3.0 s kapacitou 64 GB | 19.50 € | **18.00 €** | 15.6 % | **6.7 %** | 18.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board L/Uni | 15.00 € | **13.50 €** | 20.9 % | **8.8 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **12.50 €** | 38.3 % | **23.5 %** | 12.90 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 42.50 € | **41.00 €** | 10.9 % | **7.0 %** | 41.40 € | stávame sa najlacnejší |
| CrockPot SCCPBPP605-050 | 102.50 € | **101.00 €** | 10.5 % | **8.9 %** | 101.50 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 31.50 € | **30.00 €** | 10.7 % | **5.4 %** | 30.50 € | stávame sa najlacnejší |
| SALENTE ToastMax | 48.50 € | **47.00 €** | 13.4 % | **9.9 %** | 47.50 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 107.50 € | **106.00 €** | 10.4 % | **8.8 %** | 106.50 € | stávame sa najlacnejší |
| Domo DO8719W | 70.50 € | **69.00 €** | 10.7 % | **8.4 %** | 69.50 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.50 € | **39.00 €** | 11.1 % | **7.0 %** | 39.50 € | stávame sa najlacnejší |
| ANMITE A160W03 16" prenosný monitor | 88.90 € | **87.50 €** | 15.1 % | **13.3 %** | 87.82 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.90 € | **120.50 €** | 10.3 % | **9.1 %** | 120.90 € | stávame sa najlacnejší |
| Domo DO228SV | 121.90 € | **120.50 €** | 10.0 % | **8.8 %** | 120.90 € | stávame sa najlacnejší |
| Aligator R45 eXtremo Black Red | 68.90 € | **67.50 €** | 10.3 % | **8.0 %** | 67.90 € | stávame sa najlacnejší |
| Myš bezdrátová REBEL WM500 | 13.90 € | **12.50 €** | 18.3 % | **6.4 %** | 11.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.20 € | **4.80 €** | 37.7 % | **6.6 %** | 4.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.60 €** | 30.3 % | **12.0 %** | 8.67 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 11.00 € | **9.60 €** | 54.5 % | **34.8 %** | 9.70 € | stávame sa najlacnejší |
| Leifheit Thermo Reflect L/Universal | 14.90 € | **13.50 €** | 20.1 % | **8.8 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.90 € | **10.50 €** | 38.0 % | **21.8 %** | 10.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 14.90 € | **13.50 €** | 37.8 % | **24.9 %** | 13.90 € | stávame sa najlacnejší |
| Sada BOYA BY-WFM12 bezdrátový klopový mikrofon, vysí... | 33.90 € | **32.50 €** | 9.8 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GameSir Nova Lite 2 Luminous White | 34.90 € | **33.50 €** | 10.1 % | **5.6 %** | 21.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 38.90 € | **37.50 €** | 10.3 % | **6.3 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 24992-70 | 40.90 € | **39.50 €** | 10.1 % | **6.3 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje H45W | 39.90 € | **38.50 €** | 10.2 % | **6.3 %** | 35.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PM700 stolní s nastavitelnou směrov... | 40.90 € | **39.50 €** | 8.8 % | **5.1 %** | 37.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO9195C | 32.90 € | **31.50 €** | 10.1 % | **5.4 %** | 29.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada litinových závaží 4x1,25kg, 51mm, REBEL ACTIVE ... | 18.90 € | **17.50 €** | 16.4 % | **7.8 %** | 15.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR720003 | 29.90 € | **28.50 €** | 11.2 % | **6.0 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **16.50 €** | 15.2 % | **6.2 %** | 16.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **16.50 €** | 15.4 % | **6.4 %** | 16.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.90 € | **16.50 €** | 15.2 % | **6.2 %** | 16.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26800-56/RH | 26.90 € | **25.50 €** | 11.0 % | **5.2 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 34.90 € | **33.50 €** | 22.1 % | **17.2 %** | 33.63 € | stávame sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.50 €** | 15.2 % | **12.2 %** | 53.68 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 15.69 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 31.90 € | **30.50 €** | 38.2 % | **32.1 %** | 30.90 € | stávame sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 57.90 € | **56.50 €** | 12.8 % | **10.0 %** | 56.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.00 € | **4.80 €** | 39.0 % | **11.2 %** | 4.90 € | stávame sa najlacnejší |
| Rowenta ZR730200 | 28.00 € | **26.90 €** | 10.2 % | **5.9 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkové cvičební pásy TRX P3-3 REBEL ACTIVE RBA-3... | 20.00 € | **18.90 €** | 12.7 % | **6.5 %** | 16.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Resto 93501 Hrnec s pokličkou 20 cm | 36.00 € | **34.90 €** | 10.2 % | **6.8 %** | 35.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.90 € | **5.80 €** | 38.5 % | **16.4 %** | 5.90 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.70 € | **6.60 €** | 54.6 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.90 € | **3.80 €** | 54.4 % | **19.7 %** | 3.90 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria AAA MediaRange nabíjateľné USB-C Li-Ion , 1,... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 17.00 € | **15.90 €** | 36.8 % | **28.0 %** | 16.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 232.00 € | **230.90 €** | 9.2 % | **8.7 %** | 231.00 € | stávame sa najlacnejší |
| Slúchadlá Niceboy HIVE Beans Concert | 79.90 € | **78.90 €** | 6.4 % | **5.1 %** | 16.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR710001 | 26.50 € | **25.50 €** | 10.4 % | **6.2 %** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-300 | 22.90 € | **21.90 €** | 11.4 % | **6.6 %** | 9.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka HMS Premium MP12 světle šedá | 33.90 € | **32.90 €** | 8.3 % | **5.1 %** | 25.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka HMS Premium MP12 tmavě šedá | 33.90 € | **32.90 €** | 8.3 % | **5.1 %** | 25.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.90 € | **35.90 €** | 9.1 % | **6.1 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINI-D Smart WiFi Matter Switch (AC/DC 12-48V... | 13.50 € | **12.50 €** | 15.4 % | **6.9 %** | 6.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka pamäťových kariet Lexar LRW310X Dual USB-A/C... | 12.50 € | **11.50 €** | 15.9 % | **6.6 %** | 7.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo L900-5 LED pásek, Smart, RG | 20.50 € | **19.50 €** | 11.6 % | **6.1 %** | 16.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Breakfast Toaster 157/03, černý | 23.90 € | **22.90 €** | 11.3 % | **6.6 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C24 AC750 Router | 23.90 € | **22.90 €** | 10.9 % | **6.3 %** | 20.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 64 GB | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 10.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Red) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 8.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W4 TUYA | 13.90 € | **12.90 €** | 15.4 % | **7.1 %** | 11.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic PETG (sivý) 1 kg | 11.50 € | **10.50 €** | 15.1 % | **5.1 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-560BK Black | 19.50 € | **18.50 €** | 11.3 % | **5.6 %** | 17.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 22.90 € | **21.90 €** | 10.7 % | **5.9 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.50 €** | 8.5 % | **5.4 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stojan na slúchadlá ONIKUMA ST-2 čierny | 13.90 € | **12.90 €** | 15.1 % | **6.8 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skúšačka UNI-T UT18D vadaska | 42.90 € | **41.90 €** | 7.5 % | **5.0 %** | 41.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo FF0700A | 18.50 € | **17.50 €** | 12.5 % | **6.4 %** | 17.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer TX1800U Nano Adaptér | 20.90 € | **19.90 €** | 10.5 % | **5.2 %** | 19.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal J1641474 | 12.50 € | **11.50 €** | 14.4 % | **5.3 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Dust Bag Qrevo / QR798 | 14.50 € | **13.50 €** | 12.8 % | **5.0 %** | 13.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mio Smartbox IV | 31.50 € | **30.50 €** | 10.2 % | **6.7 %** | 30.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.50 € | **46.50 €** | 8.0 % | **5.7 %** | 46.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO skleněná poklice 18 | 15.90 € | **14.90 €** | 12.7 % | **5.6 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.90 € | **17.90 €** | 10.9 % | **5.1 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 9.10 € | **8.10 €** | 55.1 % | **38.1 %** | 8.13 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.50 €** | 45.5 % | **38.8 %** | 20.54 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.90 € | **19.90 €** | 21.2 % | **15.4 %** | 19.96 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.96 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.96 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.96 € | stávame sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 36.50 € | **35.50 €** | 16.8 % | **13.6 %** | 35.57 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.00 € | **22.00 €** | 13.1 % | **8.1 %** | 22.09 € | stávame sa najlacnejší |
| Náhradní filtrační kapsle GARNI BS 45T | 17.50 € | **16.50 €** | 24.6 % | **17.5 %** | 16.59 € | stávame sa najlacnejší |
| 3D skener Revopoint POP 4 Premium | 931.90 € | **930.90 €** | 15.0 % | **14.9 %** | 930.99 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.50 €** | 44.6 % | **36.3 %** | 16.59 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.90 € | **11.90 €** | 38.5 % | **27.8 %** | 12.00 € | stávame sa najlacnejší |
| Ufesa Haku | 30.90 € | **29.90 €** | 11.3 % | **7.7 %** | 30.00 € | stávame sa najlacnejší |
| G3Ferrari G2016100 EQUA Kuchyňská váha | 19.90 € | **18.90 €** | 11.9 % | **6.3 %** | 19.00 € | stávame sa najlacnejší |
| Leifheit Page Profi 100 | 29.90 € | **28.90 €** | 11.4 % | **7.6 %** | 29.00 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.90 € | **32.90 €** | 11.1 % | **7.8 %** | 33.00 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.90 € | **22.90 €** | 11.7 % | **7.1 %** | 23.00 € | stávame sa najlacnejší |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.90 € | **35.90 €** | 10.0 % | **7.0 %** | 36.00 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 34.90 € | **33.90 €** | 26.6 % | **22.9 %** | 34.00 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **37.90 €** | 10.1 % | **7.3 %** | 38.00 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **41.90 €** | 10.5 % | **8.0 %** | 42.00 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 236.90 € | **235.90 €** | 42700.4 % | **42519.7 %** | 236.00 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.50 €** | 15.6 % | **13.0 %** | 43.63 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.13 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.13 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.13 € | stávame sa najlacnejší |
| Batéria AA MediaRange nabíjateľné USB-C Li-Ion , 1,5... | 14.00 € | **13.00 €** | 14.5 % | **6.3 %** | 13.14 € | stávame sa najlacnejší |
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
| Planetárium Levenhuk Star Sky P9 | 59.50 € | **58.50 €** | 8.2 % | **6.4 %** | 58.69 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 31.50 € | **30.50 €** | 14.6 % | **11.0 %** | 30.73 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky C10 (biele) | 13.50 € | **12.50 €** | 16.4 % | **7.8 %** | 12.74 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **41.50 €** | 15.0 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 24.50 € | **23.50 €** | 15.4 % | **10.7 %** | 23.79 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 42.00 € | **41.00 €** | 14.7 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| Redmi Buds 8 Lite Black | 20.50 € | **19.50 €** | 12.2 % | **6.8 %** | 19.80 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 16.50 € | **15.50 €** | 14.8 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT113 | 11.50 € | **10.50 €** | 16.4 % | **6.3 %** | 10.85 € | stávame sa najlacnejší |
| Smart Visual Ear-Clean Rod Bebird R1 black | 15.50 € | **14.50 €** | 14.6 % | **7.2 %** | 14.85 € | stávame sa najlacnejší |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 42.50 € | **41.50 €** | 18.9 % | **16.1 %** | 41.88 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **35.00 €** | 15.0 % | **11.9 %** | 35.38 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 13.50 € | **12.50 €** | 15.2 % | **6.6 %** | 12.89 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 341.50 € | **340.50 €** | 6.9 % | **6.6 %** | 340.89 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 29.50 € | **28.50 €** | 37.8 % | **33.2 %** | 28.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **10.50 €** | 38.5 % | **26.5 %** | 10.90 € | stávame sa najlacnejší |
| Termoska G21 nerezová 1200 ml, čierno-sivá | 25.50 € | **24.50 €** | 18.9 % | **14.3 %** | 24.90 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.50 € | **47.50 €** | 11.0 % | **8.7 %** | 47.90 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **35.50 €** | 10.5 % | **7.5 %** | 35.90 € | stávame sa najlacnejší |
| Zircon Monoblok Single M-0143 Slim line Skylink | 12.50 € | **11.50 €** | 36.2 % | **25.3 %** | 11.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 195.50 € | **194.50 €** | 10.0 % | **9.5 %** | 194.90 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Night 160 ml | 12.00 € | **11.00 €** | 23.0 % | **12.8 %** | 11.42 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 19.00 € | **18.00 €** | 14.3 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 44.00 € | **43.00 €** | 14.7 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 22.00 € | **21.00 €** | 14.2 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Grey) | 15.00 € | **14.00 €** | 13.9 % | **6.3 %** | 14.49 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 69.00 € | **68.00 €** | 15.0 % | **13.4 %** | 68.49 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 69.00 € | **68.00 €** | 15.0 % | **13.4 %** | 68.49 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v striebornej ... | 63.00 € | **62.00 €** | 14.8 % | **12.9 %** | 62.49 € | stávame sa najlacnejší |
| Ariete SteamStyle 4301, violet | 33.00 € | **32.00 €** | 10.3 % | **6.9 %** | 32.50 € | stávame sa najlacnejší |
| Ariete SteamStyle 4301/02, coral | 33.00 € | **32.00 €** | 10.3 % | **6.9 %** | 32.50 € | stávame sa najlacnejší |
| Philips SQM3642/00 TV držák na zeď | 21.00 € | **20.00 €** | 10.4 % | **5.2 %** | 20.50 € | stávame sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 25.00 € | **24.00 €** | 9.5 % | **5.1 %** | 24.50 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 17.00 € | **16.00 €** | 40.2 % | **31.9 %** | 16.50 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 16.90 € | **15.90 €** | 12.5 % | **5.9 %** | 16.00 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 83.90 € | **83.00 €** | 10.3 % | **9.2 %** | 83.20 € | stávame sa najlacnejší |
| Guzzanti GZ 210A | 213.90 € | **213.00 €** | 6.1 % | **5.7 %** | 213.50 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **14.00 €** | 21.9 % | **14.5 %** | 14.04 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 7.70 € | **6.80 €** | 44.2 % | **27.4 %** | 6.90 € | stávame sa najlacnejší |
| Digitálny multimeter Habotest HT86B | 11.90 € | **11.00 €** | 16.4 % | **7.6 %** | 11.46 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.00 €** | 15.5 % | **6.0 %** | 10.49 € | stávame sa najlacnejší |
| HP Wireless Mouse 220 Black | 13.90 € | **13.00 €** | 14.3 % | **6.9 %** | 13.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.60 € | **7.70 €** | 47.5 % | **32.1 %** | 7.80 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 58.90 € | **58.00 €** | 15.0 % | **13.2 %** | 58.04 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 43.90 € | **43.00 €** | 8.5 % | **6.3 %** | 43.09 € | stávame sa najlacnejší |
| SONOFF M5-1C-86W WiFi Matter smart wall switch (1-ch... | 16.90 € | **16.00 €** | 15.6 % | **9.4 %** | 16.14 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 32.90 € | **32.00 €** | 11.3 % | **8.2 %** | 32.50 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **47.00 €** | 38.5 % | **35.9 %** | 47.50 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 22.90 € | **22.00 €** | 16.0 % | **11.4 %** | 22.50 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.00 €** | 11.0 % | **7.7 %** | 29.50 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.90 € | **52.00 €** | 10.8 % | **8.9 %** | 52.50 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.00 €** | 11.5 % | **5.6 %** | 16.50 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.00 €** | 10.2 % | **7.5 %** | 36.50 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 40.90 € | **40.00 €** | 10.5 % | **8.0 %** | 40.50 € | stávame sa najlacnejší |
| Domo DO733K | 47.90 € | **47.00 €** | 10.8 % | **8.7 %** | 47.50 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.00 €** | 11.8 % | **5.8 %** | 16.50 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 18.90 € | **18.00 €** | 11.2 % | **5.9 %** | 18.50 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.00 €** | 10.1 % | **6.4 %** | 26.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 26.90 € | **26.00 €** | 32.4 % | **28.0 %** | 26.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 21.90 € | **21.00 €** | 40.0 % | **34.2 %** | 21.50 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.00 €** | 12.7 % | **7.1 %** | 17.50 € | stávame sa najlacnejší |
| Hrazda do dveří Trizand 24784 | 16.90 € | **16.00 €** | 14.9 % | **8.8 %** | 16.50 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 365.90 € | **365.00 €** | 9.3 % | **9.1 %** | 365.50 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 344.90 € | **344.00 €** | 6.7 % | **6.5 %** | 344.50 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 471.90 € | **471.00 €** | 7.1 % | **6.9 %** | 471.50 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 507.90 € | **507.00 €** | 7.1 % | **6.9 %** | 507.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 9.30 € | **8.50 €** | 48.5 % | **35.8 %** | 8.54 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.80 € | **5.10 €** | 42.9 % | **25.6 %** | 5.15 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.50 € | **2.80 €** | 48.2 % | **18.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **1.70 €** | 57.4 % | **11.5 %** | 0.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.50 €** | 47.8 % | **35.2 %** | 7.60 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 7.10 € | **6.40 €** | 55.2 % | **39.9 %** | 6.50 € | stávame sa najlacnejší |
| WHIRLPOOL WI 7020 P | 331.50 € | **330.90 €** | 8.1 % | **7.9 %** | 331.00 € | stávame sa najlacnejší |
| Sušička ovoce Ruhhy 25928 400W | 50.50 € | **49.90 €** | 6.4 % | **5.1 %** | 42.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM58 ruční všesměrový | 32.50 € | **31.90 €** | 8.2 % | **6.2 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WA854RE Wireless N Extender | 17.50 € | **16.90 €** | 11.0 % | **7.2 %** | 13.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Rollfix 210 Lon | 17.50 € | **16.90 €** | 11.3 % | **7.5 %** | 14.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 17.50 € | **16.90 €** | 10.9 % | **7.1 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny TechnoLine WT 3100 do koupelny | 24.50 € | **23.90 €** | 16.1 % | **13.2 %** | 23.96 € | stávame sa najlacnejší |
| Herní mikrofon Maono DGM20 (černý) | 27.50 € | **26.90 €** | 16.0 % | **13.5 %** | 26.99 € | stávame sa najlacnejší |
| Hyper PLA-CF Creality Filament (tmavozelený) | 19.50 € | **18.90 €** | 14.8 % | **11.3 %** | 18.99 € | stávame sa najlacnejší |
| FoodSaver FFC025X | 26.50 € | **25.90 €** | 11.8 % | **9.3 %** | 26.00 € | stávame sa najlacnejší |
| TESLA Cook BBQ150 | 53.50 € | **52.90 €** | 10.5 % | **9.3 %** | 53.00 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 18.50 € | **17.90 €** | 24.9 % | **20.9 %** | 18.00 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **22.90 €** | 11.8 % | **8.9 %** | 23.00 € | stávame sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.50 € | **24.90 €** | 11.5 % | **8.8 %** | 25.00 € | stávame sa najlacnejší |
| Slúchadlá Buxton BHP 7300 BLACK BT | 22.50 € | **21.90 €** | 13.5 % | **10.5 %** | 22.00 € | stávame sa najlacnejší |
| HP 655 Magenta, CZ111AE | 16.50 € | **15.90 €** | 10.9 % | **6.8 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EF167 | 14.50 € | **13.90 €** | 12.3 % | **7.6 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí bezdrátová podložka pro telefony Compass | 16.50 € | **15.90 €** | 10.7 % | **6.7 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E200SM | 16.50 € | **15.90 €** | 11.5 % | **7.5 %** | 15.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 11.50 € | **10.90 €** | 14.3 % | **8.3 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 černá | 16.50 € | **15.90 €** | 10.6 % | **6.6 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **15.90 €** | 10.6 % | **6.6 %** | 16.00 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **15.90 €** | 11.3 % | **7.3 %** | 16.00 € | stávame sa najlacnejší |
| Sati Guatemala Bio Fairtrade 500 g zrno | 12.50 € | **11.90 €** | 14.5 % | **9.1 %** | 12.00 € | stávame sa najlacnejší |
| Domo DO42327PC | 101.50 € | **100.90 €** | 8.5 % | **7.9 %** | 101.00 € | stávame sa najlacnejší |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 123.50 € | **122.90 €** | 16.3 % | **15.8 %** | 123.00 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 67.50 € | **66.90 €** | 8.3 % | **7.3 %** | 67.00 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 109.50 € | **108.90 €** | 10.4 % | **9.8 %** | 109.00 € | stávame sa najlacnejší |
| Girmi FM2105 Mikrovlnná trouba s grilem | 109.50 € | **108.90 €** | 10.4 % | **9.8 %** | 109.00 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.90 €** | 55.5 % | **37.9 %** | 3.96 € | stávame sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 26.00 € | **25.50 €** | 7.5 % | **5.4 %** | 9.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB WiFi adaptér duální VU+ 2,4/5GHz/600Mbps s ANTÉN... | 32.50 € | **32.00 €** | 6.7 % | **5.1 %** | 25.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE FItness MP10 modro-šedá | 25.00 € | **24.50 €** | 7.7 % | **5.6 %** | 18.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 32GB | 13.00 € | **12.50 €** | 12.9 % | **8.6 %** | 9.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 růžovo-šedá | 25.00 € | **24.50 €** | 7.7 % | **5.6 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 zelená-mod... | 25.00 € | **24.50 €** | 7.7 % | **5.6 %** | 22.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N50 eliminátor zápachu pre Petkit PURA MAX 2/PRO lit... | 11.00 € | **10.50 €** | 13.3 % | **8.2 %** | 8.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 žlutá-modr... | 25.00 € | **24.50 €** | 7.7 % | **5.6 %** | 22.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente IceQueen černá | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Icequeen-Wh | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm černý | 13.50 € | **13.00 €** | 9.9 % | **5.8 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm světle šedý | 13.50 € | **13.00 €** | 9.9 % | **5.8 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Stripeglass-Rd | 16.00 € | **15.50 €** | 10.2 % | **6.8 %** | 14.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB02N 75 cm šedo-stříbrný | 13.50 € | **13.00 €** | 9.9 % | **5.8 %** | 12.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-M ( 36 - 40 ) | 12.50 € | **12.00 €** | 9.5 % | **5.1 %** | 11.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Status STA 177159 | 11.00 € | **10.50 €** | 11.0 % | **5.9 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi BL0401 Cestovní silikonová konvice | 15.00 € | **14.50 €** | 10.5 % | **6.8 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 8.60 € | **8.10 €** | 45.1 % | **36.6 %** | 8.11 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **6.10 €** | 47.0 % | **35.9 %** | 6.12 € | stávame sa najlacnejší |
| Solight detektor oxidu uhoľnatého a horľavých plynov | 13.00 € | **12.50 €** | 18.0 % | **13.4 %** | 12.53 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 6.10 € | **5.60 €** | 47.2 % | **35.1 %** | 5.63 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 6.20 € | **5.70 €** | 47.4 % | **35.5 %** | 5.74 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 18.50 € | **18.00 €** | 14.9 % | **11.8 %** | 18.04 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.90 € | **5.40 €** | 48.0 % | **35.5 %** | 5.46 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.00 € | **16.50 €** | 13.5 % | **10.1 %** | 16.58 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.50 € | **23.00 €** | 19.3 % | **16.7 %** | 23.09 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 74.00 € | **73.50 €** | 5.9 % | **5.2 %** | 73.59 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 24.50 € | **24.00 €** | 12.1 % | **9.8 %** | 24.09 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 24.50 € | **24.00 €** | 12.1 % | **9.8 %** | 24.09 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **4.90 €** | 47.3 % | **33.7 %** | 5.00 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 15.50 € | **15.00 €** | 60.5 % | **55.4 %** | 15.13 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 84.00 € | **83.50 €** | 14.9 % | **14.2 %** | 83.63 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 15.50 € | **15.00 €** | 16.1 % | **12.4 %** | 15.17 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Držiak so šnúrkou Sunnylife pre ovládač DJI RC (MM3-... | 15.50 € | **15.00 €** | 16.0 % | **12.3 %** | 15.18 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.50 € | **12.00 €** | 16.7 % | **12.0 %** | 12.19 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 23.00 € | **22.50 €** | 19.0 % | **16.4 %** | 22.71 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 29.50 € | **29.00 €** | 7.5 % | **5.7 %** | 29.22 € | stávame sa najlacnejší |
| Svetlomet Superfire HL06, 500lm, USB | 13.00 € | **12.50 €** | 15.3 % | **10.8 %** | 12.73 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 872.00 € | **871.50 €** | 15.0 % | **14.9 %** | 871.74 € | stávame sa najlacnejší |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.50 € | **55.00 €** | 17.0 % | **15.9 %** | 55.25 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Pro Combo | 780.50 € | **780.00 €** | 14.2 % | **14.1 %** | 780.26 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 23.00 € | **22.50 €** | 16.1 % | **13.5 %** | 22.76 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 46.00 € | **45.50 €** | 9.4 % | **8.2 %** | 45.79 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 23.50 € | **23.00 €** | 46.3 % | **43.2 %** | 23.29 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.7 % | **8.3 %** | 10.29 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.50 € | **16.00 €** | 12.5 % | **9.1 %** | 16.29 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 16.50 € | **16.00 €** | 11.1 % | **7.8 %** | 16.29 € | stávame sa najlacnejší |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **18.00 €** | 15.7 % | **12.6 %** | 18.29 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **27.50 €** | 14.2 % | **12.1 %** | 27.79 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.50 € | **37.00 €** | 21.7 % | **20.1 %** | 37.29 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 62.50 € | **62.00 €** | 6.4 % | **5.5 %** | 62.29 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 53.00 € | **52.50 €** | 7.8 % | **6.8 %** | 52.79 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **12.00 €** | 14.6 % | **10.0 %** | 12.29 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom bi... | 10.50 € | **10.00 €** | 24.3 % | **18.3 %** | 10.30 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.50 € | **28.00 €** | 33.0 % | **30.7 %** | 28.30 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 154.50 € | **154.00 €** | 13.6 % | **13.3 %** | 154.30 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 26.50 € | **26.00 €** | 31.0 % | **28.5 %** | 26.30 € | stávame sa najlacnejší |
| G3Ferrari G1015502 Mikrovlnná trouba | 118.50 € | **118.00 €** | 10.5 % | **10.0 %** | 118.30 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.50 € | **48.00 €** | 13.8 % | **12.6 %** | 48.31 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 48.50 € | **48.00 €** | 16.1 % | **14.9 %** | 48.31 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 14.00 € | **13.50 €** | 14.5 % | **10.4 %** | 13.83 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.35 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 32.50 € | **32.00 €** | 27.8 % | **25.8 %** | 32.37 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.38 € | stávame sa najlacnejší |
| Krüger&Matz HL-CP03 bezdrátový adaptér CarPlay - And... | 22.00 € | **21.50 €** | 8.7 % | **6.3 %** | 21.89 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 69.50 € | **69.00 €** | 9.7 % | **8.9 %** | 69.39 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.50 € | **86.00 €** | 14.5 % | **13.8 %** | 86.39 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 23.00 € | **22.50 €** | 13.0 % | **10.5 %** | 22.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.50 € | **13.00 €** | 10.4 % | **6.3 %** | 13.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.00 € | **21.50 €** | 9.3 % | **6.8 %** | 21.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.50 € | **18.00 €** | 12.6 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| G21 nůž Damascus Premium 13 cm | 43.50 € | **43.00 €** | 11.2 % | **9.9 %** | 43.39 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 26.50 € | **26.00 €** | 11.2 % | **9.1 %** | 26.39 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.50 € | **15.00 €** | 14.1 % | **10.5 %** | 15.39 € | stávame sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 104.00 € | **103.50 €** | 28.9 % | **28.3 %** | 103.89 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **27.00 €** | 15.6 % | **13.5 %** | 27.39 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 34.00 € | **33.50 €** | 13.4 % | **11.8 %** | 33.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 60.50 € | **60.00 €** | 13.6 % | **12.6 %** | 60.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 35.00 € | **34.50 €** | 7.9 % | **6.4 %** | 34.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.50 € | **70.00 €** | 13.8 % | **13.0 %** | 70.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 85.00 € | **84.50 €** | 8.4 % | **7.8 %** | 84.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 69.00 € | **68.50 €** | 8.6 % | **7.8 %** | 68.89 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 40.00 € | **39.50 €** | 12.9 % | **11.5 %** | 39.89 € | stávame sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 25.00 € | **24.50 €** | 10.2 % | **8.0 %** | 24.89 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 49.50 € | **49.00 €** | 14.3 % | **13.1 %** | 49.39 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 79.50 € | **79.00 €** | 7.7 % | **7.0 %** | 79.39 € | stávame sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 37.50 € | **37.00 €** | 6.9 % | **5.5 %** | 37.39 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 104.00 € | **103.50 €** | 8.1 % | **7.6 %** | 103.89 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 35.00 € | **34.50 €** | 14.0 % | **12.4 %** | 34.89 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 51.50 € | **51.00 €** | 9.0 % | **7.9 %** | 51.39 € | stávame sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 44.50 € | **44.00 €** | 6.8 % | **5.6 %** | 44.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 240.00 € | **239.50 €** | 12.4 % | **12.2 %** | 239.89 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 133.00 € | **132.50 €** | 11.0 % | **10.6 %** | 132.89 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 180.00 € | **179.50 €** | 6.4 % | **6.1 %** | 179.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 465.00 € | **464.50 €** | 7.4 % | **7.3 %** | 464.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 899.00 € | **898.50 €** | 14.3 % | **14.2 %** | 898.89 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 93.50 € | **93.00 €** | 14.2 % | **13.6 %** | 93.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.00 € | **78.50 €** | 13.9 % | **13.2 %** | 78.89 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 89.50 € | **89.00 €** | 13.9 % | **13.2 %** | 89.39 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 38.50 € | **38.00 €** | 16.8 % | **15.3 %** | 38.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 27.50 € | **27.00 €** | 12.5 % | **10.4 %** | 27.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 131.50 € | **131.00 €** | 15.1 % | **14.7 %** | 131.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.50 € | **73.00 €** | 14.3 % | **13.5 %** | 73.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 86.50 € | **86.00 €** | 14.4 % | **13.8 %** | 86.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.00 € | **61.50 €** | 13.9 % | **13.0 %** | 61.89 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 97.00 € | **96.50 €** | 8.2 % | **7.7 %** | 96.89 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 34.50 € | **34.00 €** | 12.1 % | **10.4 %** | 34.39 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 77.50 € | **77.00 €** | 7.7 % | **7.0 %** | 77.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 42.00 € | **41.50 €** | 14.3 % | **13.0 %** | 41.89 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 165.50 € | **165.00 €** | 11.8 % | **11.5 %** | 165.39 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 193.00 € | **192.50 €** | 14.7 % | **14.4 %** | 192.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 324.00 € | **323.50 €** | 10.3 % | **10.1 %** | 323.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 73.50 € | **73.00 €** | 9.4 % | **8.7 %** | 73.39 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 143.00 € | **142.50 €** | 14.5 % | **14.1 %** | 142.89 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 98.50 € | **98.00 €** | 8.5 % | **7.9 %** | 98.39 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 118.00 € | **117.50 €** | 10.1 % | **9.6 %** | 117.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 112.00 € | **111.50 €** | 8.1 % | **7.7 %** | 111.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 146.00 € | **145.50 €** | 9.6 % | **9.3 %** | 145.89 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1295.00 € | **1294.50 €** | 7.3 % | **7.2 %** | 1294.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 140.50 € | **140.00 €** | 8.6 % | **8.2 %** | 140.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 58.50 € | **58.00 €** | 21.4 % | **20.4 %** | 58.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 31.50 € | **31.00 €** | 6.9 % | **5.2 %** | 31.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.00 € | **23.50 €** | 13.7 % | **11.3 %** | 23.89 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.00 € | **22.50 €** | 10.3 % | **7.9 %** | 22.89 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 206.50 € | **206.00 €** | 11.2 % | **10.9 %** | 206.39 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 278.50 € | **278.00 €** | 7.2 % | **7.0 %** | 278.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 17.50 € | **17.00 €** | 16.3 % | **13.0 %** | 17.39 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.50 € | **45.00 €** | 15.0 % | **13.7 %** | 45.39 € | stávame sa najlacnejší |
| Tesla GSM-LITE zesilovač/opakovač 900/1800 MHz - kom... | 180.00 € | **179.50 €** | 8.8 % | **8.5 %** | 179.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 239.50 € | **239.00 €** | 8.3 % | **8.1 %** | 239.39 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 136.00 € | **135.50 €** | 9.0 % | **8.6 %** | 135.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 118.00 € | **117.50 €** | 7.7 % | **7.2 %** | 117.89 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 24.00 € | **23.50 €** | 13.2 % | **10.8 %** | 23.89 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 269.50 € | **269.00 €** | 6.4 % | **6.2 %** | 269.39 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 206.00 € | **205.50 €** | 8.2 % | **7.9 %** | 205.89 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 192.00 € | **191.50 €** | 8.4 % | **8.1 %** | 191.89 € | stávame sa najlacnejší |
| DOMO DO91135F | 327.50 € | **327.00 €** | 10.0 % | **9.8 %** | 327.39 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 28.00 € | **27.50 €** | 42.5 % | **39.9 %** | 27.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.50 €** | 38.4 % | **35.1 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 37.4 % | **34.1 %** | 20.90 € | stávame sa najlacnejší |
| Solight pištoľ spájkovacia 100W sada | 12.00 € | **11.50 €** | 18.4 % | **13.5 %** | 11.90 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.50 €** | 10.4 % | **6.2 %** | 12.90 € | stávame sa najlacnejší |
| Beper 50451 Tyčový Vakuový Vysavač S He | 52.00 € | **51.50 €** | 10.2 % | **9.1 %** | 51.90 € | stávame sa najlacnejší |
| KMP H76 (CH564EE) | 17.00 € | **16.50 €** | 10.3 % | **7.1 %** | 16.90 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 20.00 € | **19.50 €** | 25.4 % | **22.2 %** | 19.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.00 € | **15.50 €** | 31.9 % | **27.8 %** | 15.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 23.00 € | **22.50 €** | 34.7 % | **31.8 %** | 22.90 € | stávame sa najlacnejší |
| D-LINK AC13U | 14.00 € | **13.50 €** | 10.9 % | **7.0 %** | 13.90 € | stávame sa najlacnejší |
| Maxlife MXBH-01 černé | 19.00 € | **18.50 €** | 10.4 % | **7.5 %** | 18.90 € | stávame sa najlacnejší |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 59.00 € | **58.50 €** | 15.0 % | **14.0 %** | 58.90 € | stávame sa najlacnejší |
| Gorenje NRK6182PW4 | 348.00 € | **347.50 €** | 6.5 % | **6.4 %** | 347.90 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 177.00 € | **176.50 €** | 7.4 % | **7.1 %** | 176.90 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.50 € | **16.00 €** | 15.0 % | **11.6 %** | 16.42 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 50.3 % | **46.6 %** | 20.45 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Fashion Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **13.00 €** | 14.0 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.50 € | **12.00 €** | 11.7 % | **7.2 %** | 12.49 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.50 € | **25.00 €** | 19.5 % | **17.1 %** | 25.49 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Black) | 14.50 € | **14.00 €** | 16.1 % | **12.1 %** | 14.49 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.50 € | **16.00 €** | 29.1 % | **25.2 %** | 16.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Stropné svetlo Yeelight C2201C400 | 67.90 € | **67.50 €** | 21.8 % | **21.0 %** | 67.75 € | stávame sa najlacnejší |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.90 € | **83.50 €** | 18.2 % | **17.7 %** | 83.79 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 112.90 € | **112.50 €** | 8.6 % | **8.2 %** | 112.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 72.90 € | **72.50 €** | 17.3 % | **16.6 %** | 72.87 € | stávame sa najlacnejší |
| Electrolux EF 26   (EFH 12 W) | 11.90 € | **11.50 €** | 13.6 % | **9.7 %** | 3.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WN722N WiFi USB Adaptér | 11.90 € | **11.50 €** | 11.2 % | **7.5 %** | 9.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 13.90 € | **13.50 €** | 10.0 % | **6.9 %** | 11.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Ouganda Colobus Blend 500 g zrno | 10.90 € | **10.50 €** | 13.1 % | **8.9 %** | 10.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.90 € | **13.50 €** | 10.5 % | **7.3 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.80 €** | 49.4 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 4.20 € | **3.80 €** | 48.5 % | **34.3 %** | 3.87 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.50 €** | 47.7 % | **43.8 %** | 14.62 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.69 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.69 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.50 €** | 40.4 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 11.90 € | **11.50 €** | 17.3 % | **13.3 %** | 11.79 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 15.90 € | **15.50 €** | 9.4 % | **6.6 %** | 15.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 680 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.50 €** | 45.7 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.50 €** | 26.2 % | **21.6 %** | 10.86 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.50 €** | 19.3 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.30 € | **3.90 €** | 46.9 % | **33.2 %** | 4.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.21 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.50 €** | 7.7 % | **6.5 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 35.90 € | **35.50 €** | 7.1 % | **6.0 %** | 35.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.52 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.20 € | **8.80 €** | 37.7 % | **31.8 %** | 8.90 € | stávame sa najlacnejší |
| Cabletech UCH0022-S | 20.90 € | **20.50 €** | 8.4 % | **6.4 %** | 20.68 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.69 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT203R | 53.90 € | **53.50 €** | 15.4 % | **14.5 %** | 53.69 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 16.90 € | **16.50 €** | 14.7 % | **12.0 %** | 16.69 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.50 €** | 35.5 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.90 € | **19.50 €** | 43.7 % | **40.8 %** | 19.70 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 19.90 € | **19.50 €** | 27.2 % | **24.6 %** | 19.74 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Battery Tester Ancel BA101 8-30V DC | 43.90 € | **43.50 €** | 15.3 % | **14.3 %** | 43.78 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.79 € | stávame sa najlacnejší |
| MAXXO VC 1800 | 24.90 € | **24.50 €** | 10.6 % | **8.8 %** | 24.79 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 40.90 € | **40.50 €** | 27.9 % | **26.7 %** | 40.79 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 53.90 € | **53.50 €** | 12.7 % | **11.8 %** | 53.79 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.90 € | **28.50 €** | 30.8 % | **29.0 %** | 28.79 € | stávame sa najlacnejší |
| Multifunkčná baterka SuperFire G20, 470 lm, USB | 20.90 € | **20.50 €** | 22.2 % | **19.9 %** | 20.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.80 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.90 € | **16.50 €** | 18.2 % | **15.4 %** | 16.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.50 €** | 39.6 % | **36.8 %** | 19.80 € | stávame sa najlacnejší |
| Candy CFT610/5X/1 | 47.90 € | **47.50 €** | 6.6 % | **5.7 %** | 47.88 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.90 € | **18.50 €** | 20.0 % | **17.5 %** | 18.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 259.90 € | **259.50 €** | 15.0 % | **14.8 %** | 259.79 € | stávame sa najlacnejší |
| Whirlpool NoFrost WHK 22414 XBR8EA | 878.90 € | **878.50 €** | 10.0 % | **10.0 %** | 878.79 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 7.90 € | **7.60 €** | 48.7 % | **43.0 %** | 7.70 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 2.00 € | **1.70 €** | 54.9 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.73 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.90 € | **2.60 €** | 50.2 % | **34.6 %** | 2.64 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.90 € | **2.60 €** | 48.3 % | **32.9 %** | 2.68 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.30 € | **9.10 €** | 49.7 % | **46.5 %** | 9.20 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.80 € | **4.60 €** | 44.5 % | **38.5 %** | 4.62 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.80 € | **7.60 €** | 33.2 % | **29.8 %** | 7.69 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 7.70 € | **7.50 €** | 26.2 % | **22.9 %** | 7.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.60 €** | 31.8 % | **26.3 %** | 4.69 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.90 € | **1.70 €** | 47.1 % | **31.6 %** | 1.79 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.00 € | **9.80 €** | 20.4 % | **18.0 %** | 9.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.70 € | **9.50 €** | 15.6 % | **13.2 %** | 9.60 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 25.00 € | **24.90 €** | 6.9 % | **6.5 %** | 24.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 27.00 € | **26.90 €** | 32.3 % | **31.8 %** | 26.91 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 16.5 % | **15.9 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 28.00 € | **27.90 €** | 13.4 % | **13.0 %** | 27.98 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 56.00 € | **55.90 €** | 7.4 % | **7.2 %** | 55.99 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.90 €** | 25.3 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 52.00 € | **51.90 €** | 15.0 % | **14.8 %** | 51.99 € | stávame sa najlacnejší |
| Mikrofón Maono DGM20 (biely) | 27.00 € | **26.90 €** | 14.2 % | **13.8 %** | 26.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Cycplus AS2 mini electric pump | 42.00 € | **41.90 €** | 7.2 % | **7.0 %** | 41.99 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.14 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.20 € | **5.10 €** | 22.5 % | **20.2 %** | 5.15 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.70 € | **4.60 €** | 35.0 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.90 € | **3.80 €** | 48.2 % | **44.4 %** | 3.84 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **2.00 €** | 48.5 % | **41.4 %** | 2.05 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.90 € | **2.80 €** | 23.4 % | **19.2 %** | 2.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.80 €** | 17.4 % | **14.4 %** | 3.85 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.90 €** | 46.0 % | **41.2 %** | 2.98 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.40 €** | 34.2 % | **30.4 %** | 3.48 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.60 €** | 37.2 % | **32.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.70 € | **3.60 €** | 18.9 % | **15.7 %** | 3.69 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.10 € | **2.00 €** | 29.3 % | **23.2 %** | 2.09 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.10 €** | 39.4 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Jóga blok HMS KJ02 korkový | 15.00 € | **14.90 €** | 6.8 % | **6.1 %** | 5.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní válec HMS FS104, modrý | 15.00 € | **14.90 €** | 6.8 % | **6.1 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.00 € | **12.90 €** | 6.3 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.50 €** | 38.0 % | **35.0 %** | 4.55 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.90 €** | 45.7 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.30 € | **3.20 €** | 36.2 % | **32.1 %** | 3.25 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.50 € | **9.40 €** | 28.3 % | **26.9 %** | 9.46 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 6.9 % | **5.4 %** | 7.06 € | stávame sa najlacnejší |
| Herná náhlavná súprava ONIKUMA B5 (ružová) | 16.00 € | **15.90 €** | 25.8 % | **25.0 %** | 15.96 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 7 krížový, biely | 4.80 € | **4.70 €** | 38.9 % | **36.0 %** | 4.77 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.20 €** | 37.2 % | **34.6 %** | 5.28 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.90 €** | 25.1 % | **23.8 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.50 €** | 24.8 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 28.3 % | **26.3 %** | 6.49 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 8.7 % | **7.1 %** | 6.49 € | stávame sa najlacnejší |
| Solight stĺpcový filter pre Dyson V12 | 6.00 € | **5.90 €** | 26.4 % | **24.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 9.10 € | **9.00 €** | 23.7 % | **22.4 %** | 9.09 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 5.50 € | **5.40 €** | 35.1 % | **32.6 %** | 5.49 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.90 € | **9.80 €** | 24.2 % | **23.0 %** | 9.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.90 €** | 36.9 % | **35.2 %** | 7.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.60 € | **9.50 €** | 26.9 % | **25.6 %** | 9.59 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.30 €** | 43.8 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 91.00 € | **90.90 €** | 5.5 % | **5.3 %** | 90.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 06A1 | 103.00 € | **102.90 €** | 5.3 % | **5.2 %** | 102.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 75.00 € | **74.90 €** | 7.6 % | **7.4 %** | 74.94 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1801 | 238.00 € | **237.90 €** | 42899.1 % | **42881.0 %** | 237.97 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.00 € | **88.90 €** | 14.1 % | **14.0 %** | 88.99 € | stávame sa najlacnejší |

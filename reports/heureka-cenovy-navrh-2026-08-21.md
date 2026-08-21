# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-21

Vstup: `premiumstoresk_20260821_1208.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6243**
- Návrh **zvýšiť** cenu: **132** produktov
- Návrh **znížiť** cenu: **1623** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4488** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **830**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (132)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **123.90 €** | 15.0 % | **21.9 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5s (biely) | 48.00 € | **54.50 €** | 14.6 % | **30.2 %** | 48.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.90 €** | 10.4 % | **15.6 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 47RB | 142.90 € | **148.00 €** | 10.1 % | **14.0 %** | 142.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BROTHER DCP-T730DW | 274.50 € | **278.50 €** | 15.0 % | **16.7 %** | 274.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Partybox Club 120 | 266.50 € | **269.90 €** | 10.0 % | **11.4 %** | 266.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.90 € | **16.90 €** | 20.1 % | **46.0 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (black) | 11.90 € | **14.50 €** | 16.7 % | **42.2 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 28.00 € | **30.50 €** | 5.0 % | **14.4 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **64.00 €** | 19.8 % | **24.7 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Žehlicí prkno Classic S Basic | 28.90 € | **31.00 €** | 10.8 % | **18.9 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 38.90 € | **40.50 €** | 10.7 % | **15.2 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Black | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.50 €** | 11.8 % | **22.4 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 36.90 € | **38.50 €** | 10.5 % | **15.3 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo vodní filtry 3+1 | 11.90 € | **13.50 €** | 11.6 % | **26.6 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla, 150mm | 43.50 € | **45.00 €** | 20.1 % | **24.3 %** | 43.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 56.50 € | **57.90 €** | 26.2 % | **29.3 %** | 56.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.00 €** | 10.6 % | **12.6 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 541.00 € | **542.00 €** | 6.2 % | **6.4 %** | 541.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 19.90 € | **20.90 €** | 24.1 % | **30.3 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.00 € | **13.00 €** | 11.8 % | **21.1 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CMWA23TNDB | 97.00 € | **98.00 €** | 10.1 % | **11.2 %** | 97.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GS  G7-SE Wired Controller XBOx &PC Or | 39.00 € | **39.90 €** | 10.2 % | **12.8 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong LEAP-S3 V2 Google TV box | 63.90 € | **64.50 €** | 10.4 % | **11.4 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA X25 (čierne) | 13.90 € | **14.50 €** | 16.4 % | **21.4 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI DK 65W USB-C/USB-C 1,2m svět DATKP62 | 10.90 € | **11.50 €** | 11.5 % | **17.6 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI DK 65W USB-C/Light 1,2m svět DATKP63 | 10.90 € | **11.50 €** | 11.5 % | **17.6 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S10 Rear Cam | 24.00 € | **24.50 €** | 8.6 % | **10.8 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Classic Siena 180 Easy | 26.50 € | **27.00 €** | 9.9 % | **12.0 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 39.00 € | **39.50 €** | 31.7 % | **33.4 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.00 € | **23.50 €** | 27.7 % | **30.5 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Air Board M Compact | 55.00 € | **55.50 €** | 9.1 % | **10.1 %** | 55.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.00 € | **22.50 €** | 29.4 % | **32.4 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 15.00 € | **15.50 €** | 23.1 % | **27.2 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.00 € | **23.50 €** | 33.9 % | **36.9 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.00 € | **16.50 €** | 8.3 % | **11.7 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 252.00 € | **252.50 €** | 7.9 % | **8.1 %** | 252.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Svetelný merač UNI-T UT383 | 17.00 € | **17.50 €** | 14.5 % | **17.9 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Garett ROSE Gold Mesh Steel | 67.00 € | **67.50 €** | 9.0 % | **9.8 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Garett ROSE Gold Solid Steel | 67.00 € | **67.50 €** | 9.0 % | **9.8 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 750 | 111.50 € | **112.00 €** | 6.8 % | **7.3 %** | 111.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 30.00 € | **30.50 €** | 7.7 % | **9.5 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.00 € | **30.50 €** | 12.5 % | **14.4 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna smart WIFI meteostanica | 98.50 € | **99.00 €** | 19.6 % | **20.2 %** | 98.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.00 € | **67.50 €** | 5.3 % | **6.0 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 19.6 % | **21.8 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **44.50 €** | 11.0 % | **12.3 %** | 44.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.00 € | **22.50 €** | 28.5 % | **31.4 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.00 € | **22.50 €** | 28.9 % | **31.8 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **42.50 €** | 23.6 % | **25.1 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.50 €** | 40.0 % | **42.7 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CDG1S514ESH | 238.00 € | **238.50 €** | 7.7 % | **8.0 %** | 238.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje R619EAW6 | 481.00 € | **481.50 €** | 6.8 % | **6.9 %** | 481.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10W | 335.00 € | **335.50 €** | 6.3 % | **6.5 %** | 335.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 1226 | 189.00 € | **189.50 €** | 6.8 % | **7.1 %** | 189.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L6 | 151.50 € | **151.90 €** | 5.9 % | **6.1 %** | 151.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Smartdust | 132.50 € | **132.90 €** | 5.5 % | **5.8 %** | 132.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.50 € | **84.90 €** | 9.2 % | **9.7 %** | 84.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip Red | 81.50 € | **81.90 €** | 8.1 % | **8.7 %** | 81.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Grip White | 81.50 € | **81.90 €** | 8.1 % | **8.7 %** | 81.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.6 % | **12.0 %** | 113.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 27.8 % | **28.5 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 27.8 % | **28.5 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **64.90 €** | 21.1 % | **21.9 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool MBNA910X | 242.50 € | **242.90 €** | 8.0 % | **8.1 %** | 242.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.40 € | **8.80 €** | 38.0 % | **44.5 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.4 % | **14.2 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.50 € | **10.90 €** | 6.7 % | **10.8 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.60 € | **10.00 €** | 21.8 % | **26.8 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **21.90 €** | 10.1 % | **12.1 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **49.90 €** | 10.0 % | **10.8 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.50 € | **28.90 €** | 20.3 % | **22.0 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.50 € | **18.90 €** | 10.1 % | **12.5 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.50 € | **34.90 €** | 16.3 % | **17.7 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191E | 57.50 € | **57.90 €** | 9.1 % | **9.8 %** | 57.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenný keramický ohrievač, 2000 W, biely | 39.50 € | **39.90 €** | 4.8 % | **5.9 %** | 39.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight akumulátorové záhradné nožnice | 63.50 € | **63.90 €** | 16.4 % | **17.1 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22760-56/RH | 30.50 € | **30.90 €** | 12.0 % | **13.5 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 321990020 | 55.50 € | **55.90 €** | 9.4 % | **10.2 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.50 € | **30.90 €** | 31.8 % | **33.5 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.50 € | **34.90 €** | 25.1 % | **26.6 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 37.50 € | **37.90 €** | 10.4 % | **11.6 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 8-Port Switch (DES-108) | 20.50 € | **20.90 €** | 12.5 % | **14.7 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.50 € | **471.90 €** | 9.0 % | **9.0 %** | 471.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| WYBOT C1 Pro – bezdrôtový robot na čistenie bazénov | 417.50 € | **417.90 €** | 5.5 % | **5.6 %** | 417.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L7 | 270.50 € | **270.90 €** | 7.9 % | **8.0 %** | 270.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 365.50 € | **365.90 €** | 9.6 % | **9.7 %** | 365.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje RK4182PS4 | 319.50 € | **319.90 €** | 6.5 % | **6.6 %** | 319.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy TCA273D3-S | 280.90 € | **281.00 €** | 7.9 % | **7.9 %** | 280.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 502.90 € | **503.00 €** | 6.4 % | **6.4 %** | 502.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.90 € | **49.00 €** | 15.2 % | **15.4 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 17.90 € | **18.00 €** | 23.5 % | **24.2 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal B817S255 | 29.90 € | **30.00 €** | 5.5 % | **5.8 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.90 € | **30.00 €** | 34.8 % | **35.3 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 7.0 % | **7.4 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.80 € | **6.90 €** | 32.6 % | **34.5 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.60 € | **6.70 €** | 32.5 % | **34.5 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.10 € | **6.20 €** | 21.9 % | **23.8 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.30 € | **4.40 €** | 33.4 % | **36.5 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.20 €** | 16.9 % | **22.5 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.00 €** | 19.7 % | **23.8 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 12.4 % | **16.1 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.80 € | **3.90 €** | 29.3 % | **32.7 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.50 € | **8.60 €** | 16.5 % | **17.9 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.40 € | **5.50 €** | 8.4 % | **10.4 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.40 € | **5.50 €** | 8.4 % | **10.4 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.40 €** | 34.3 % | **35.7 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **9.70 €** | 33.2 % | **34.6 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.90 € | **16.00 €** | 19.0 % | **19.8 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **4.80 €** | 34.5 % | **37.4 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.40 € | **8.50 €** | 10.5 % | **11.8 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 5.70 € | **5.80 €** | 8.5 % | **10.4 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.70 € | **7.80 €** | 40.0 % | **41.9 %** | 7.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.80 € | **8.90 €** | 8.1 % | **9.3 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 116.90 € | **117.00 €** | 9.0 % | **9.1 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 116.90 € | **117.00 €** | 9.0 % | **9.1 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| MAXXO VM Profi | 98.90 € | **99.00 €** | 10.4 % | **10.5 %** | 98.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.90 € | **79.00 €** | 15.3 % | **15.5 %** | 78.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.90 € | **69.00 €** | 12.7 % | **12.8 %** | 68.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.90 € | **177.00 €** | 7.7 % | **7.7 %** | 176.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE F4142PW | 221.90 € | **222.00 €** | 8.0 % | **8.1 %** | 221.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1623)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| ETA 007090010 | 629.99 € | **495.50 €** | 33.6 % | **5.1 %** | 439.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK619DA2XL4 | 599.00 € | **468.90 €** | 34.2 % | **5.1 %** | 469.00 € | stávame sa najlacnejší |
| Čistiaci robot MOVA P50 Pro Ultra | 1411.50 € | **1289.00 €** | 15.0 % | **5.0 %** | 359.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot MOVA P50 Ultra | 1202.50 € | **1097.90 €** | 15.0 % | **5.0 %** | 359.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 1TB Blue | 2148.50 € | **2050.50 €** | 10.0 % | **5.0 %** | 1239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 1TB Purple | 2148.50 € | **2050.50 €** | 10.0 % | **5.0 %** | 1290.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MacBook Air 15" M5 16/1TB mid | 2142.90 € | **2045.50 €** | 10.0 % | **5.0 %** | 1325.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1300 (Deco M5 3-pack) | 279.00 € | **183.50 €** | 60.0 % | **5.2 %** | 119.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1441.90 € | **1346.50 €** | 15.0 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3588.00 € | **3499.90 €** | 15.0 % | **12.2 %** | 3500.00 € | stávame sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 512GB Purple | 1816.50 € | **1733.90 €** | 10.0 % | **5.0 %** | 975.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 512GB Blue | 1816.50 € | **1733.90 €** | 10.0 % | **5.0 %** | 999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame QE65LS03H | 1645.90 € | **1571.50 €** | 10.0 % | **5.0 %** | 1326.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26+ 5G 512GB Purple | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 840.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE85QN70F NEO QLED | 1535.90 € | **1465.90 €** | 10.0 % | **5.0 %** | 1349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **998.90 €** | 15.0 % | **7.7 %** | 999.00 € | stávame sa najlacnejší |
| Samsung QE65LS03FW NEO QLED THE FRAME | 1477.50 € | **1410.50 €** | 10.0 % | **5.0 %** | 765.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75QN80F NEO QLED | 1462.90 € | **1396.50 €** | 10.0 % | **5.0 %** | 999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality Falcon 2 Pro S 22W laserový gravírovací stroj | 819.50 € | **757.90 €** | 15.0 % | **6.4 %** | 758.00 € | stávame sa najlacnejší |
| Čistiaci robot MOVA E40 Ultra | 705.90 € | **644.50 €** | 15.0 % | **5.0 %** | 298.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.90 €** | 15.0 % | **5.4 %** | 670.00 € | stávame sa najlacnejší |
| Samsung Galaxy S26 5G 512GB Blue | 1319.50 € | **1259.90 €** | 10.0 % | **5.0 %** | 700.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 5G 512GB Purple | 1319.50 € | **1259.90 €** | 10.0 % | **5.0 %** | 720.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Revopoint Inspire 2 – Premium edícia | 647.00 € | **591.00 €** | 15.0 % | **5.0 %** | 571.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný samočistiaci box pre mačky MOVA LR10 Pr... | 599.00 € | **547.50 €** | 15.0 % | **5.1 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot MOVA E50 Pro Ultra | 576.50 € | **526.50 €** | 15.0 % | **5.0 %** | 365.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| fit/  Běžecký pás HMS BE8501I | 573.90 € | **524.00 €** | 15.0 % | **5.0 %** | 498.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Purobot Max Pro 2 Petkit Automatická samočistiaca to... | 573.00 € | **523.50 €** | 15.0 % | **5.1 %** | 489.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 5G 256GB Purple | 1073.50 € | **1024.50 €** | 10.0 % | **5.0 %** | 600.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 5G 256GB Blue | 1073.50 € | **1024.50 €** | 10.0 % | **5.0 %** | 600.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75Q6F QLED | 1085.50 € | **1036.50 €** | 10.0 % | **5.0 %** | 643.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Embassy Nairobi | 1082.50 € | **1033.50 €** | 10.0 % | **5.0 %** | 891.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný disk SSD Lexar SL500 2 TB | 562.50 € | **513.90 €** | 15.0 % | **5.1 %** | 310.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 638.50 € | **589.90 €** | 15.0 % | **6.3 %** | 589.94 € | stávame sa najlacnejší |
| Xiaomi 17T Pro 12/1024GB Černá | 1053.90 € | **1005.90 €** | 10.0 % | **5.0 %** | 849.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 5 AI 16-af1003nc (C09WNEA) | 1042.90 € | **995.50 €** | 10.0 % | **5.0 %** | 994.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE55QN90F NEO QLED | 1031.50 € | **984.50 €** | 10.0 % | **5.0 %** | 820.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - na kovovom bubne, 4 zás... | 174.50 € | **127.50 €** | 44.0 % | **5.2 %** | 124.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-V4A Black | 529.00 € | **482.50 €** | 15.2 % | **5.1 %** | 417.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Geneinno T1 200m 4K UHD podvodný dron | 1966.50 € | **1921.90 €** | 15.0 % | **12.4 %** | 1922.00 € | stávame sa najlacnejší |
| Xiaomi 17T Pro 12/512GB Fialová | 948.50 € | **905.50 €** | 10.0 % | **5.0 %** | 699.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBS322AEV | 943.90 € | **900.90 €** | 10.0 % | **5.0 %** | 699.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung S731 Galaxy S25 FE 256GB Black | 933.50 € | **890.90 €** | 10.0 % | **5.0 %** | 520.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG RC81V9AV4N | 649.00 € | **607.50 €** | 12.2 % | **5.0 %** | 550.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT Victron Energy SmartSolar 250... | 480.00 € | **438.50 €** | 15.0 % | **5.1 %** | 392.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 230290000 | 209.99 € | **170.00 €** | 34.1 % | **8.6 %** | 170.30 € | stávame sa najlacnejší |
| Xiaomi 17T Pro 12/256GB Fialová | 864.50 € | **824.90 €** | 10.1 % | **5.0 %** | 683.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Saturn 4 Ultra 16K | 448.90 € | **409.90 €** | 15.0 % | **5.0 %** | 349.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Indesit BTW S50400 EU/N | 309.00 € | **270.50 €** | 23.3 % | **8.0 %** | 270.70 € | stávame sa najlacnejší |
| Samsung S731 Galaxy S25 FE 128GB White | 850.90 € | **812.50 €** | 10.0 % | **5.1 %** | 465.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot C1 | 435.50 € | **397.50 €** | 15.1 % | **5.0 %** | 378.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75Q7F QLED | 825.50 € | **787.90 €** | 10.0 % | **5.0 %** | 560.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 525.50 € | **488.50 €** | 15.0 % | **6.9 %** | 488.77 € | stávame sa najlacnejší |
| Waydoo Subnado submersible - starter kit (red) | 414.00 € | **378.00 €** | 15.0 % | **5.0 %** | 282.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka přenosná IMMAX NEO EV/PHEV AC Type 2 22kW ... | 415.90 € | **379.90 €** | 15.0 % | **5.1 %** | 355.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBS322BPY | 779.50 € | **743.90 €** | 10.0 % | **5.0 %** | 599.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBS322BSW | 779.50 € | **743.90 €** | 10.0 % | **5.0 %** | 636.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch Ultra 2 47mm Silver | 785.90 € | **750.50 €** | 10.0 % | **5.1 %** | 487.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chladící box kompresor SILVER DUAL 40l 230/24/12V -2... | 391.90 € | **357.90 €** | 15.0 % | **5.1 %** | 332.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah MHPower MS150-12(L) LC5-M8 | 391.90 € | **357.90 €** | 15.0 % | **5.1 %** | 350.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 983.90 € | **949.90 €** | 15.0 % | **11.0 %** | 950.00 € | stávame sa najlacnejší |
| Pamäťová karta Lexar PLAY Pro microSD Express 7.1 1TB | 388.50 € | **354.90 €** | 15.0 % | **5.0 %** | 286.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 532.90 € | **500.00 €** | 15.0 % | **7.9 %** | 500.47 € | stávame sa najlacnejší |
| Prenosný disk SSD Lexar SL300 2 TB | 378.50 € | **345.90 €** | 15.0 % | **5.1 %** | 290.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar Professional SILVER PLUS SDXC 1 TB | 378.00 € | **345.50 €** | 15.0 % | **5.1 %** | 312.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Karta pamäte Lexar High-Performance Silver Plus micr... | 367.90 € | **335.90 €** | 15.0 % | **5.0 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo 2 Pro White | 709.50 € | **677.50 €** | 10.0 % | **5.1 %** | 594.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo C Pro White | 704.50 € | **672.50 €** | 10.0 % | **5.0 %** | 660.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-MAX3500 | 669.00 € | **637.90 €** | 11.8 % | **6.6 %** | 637.92 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE MAK 80/850 AZ-M | 361.50 € | **330.50 €** | 15.0 % | **5.1 %** | 329.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 13X Helmet s no... | 348.90 € | **318.50 €** | 15.0 % | **5.0 %** | 115.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V100 TTL pre Sony | 332.50 € | **303.90 €** | 14.9 % | **5.1 %** | 242.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V100 TTL pre Nikon | 332.50 € | **303.90 €** | 14.9 % | **5.1 %** | 303.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 377.50 € | **348.90 €** | 15.0 % | **6.3 %** | 349.00 € | stávame sa najlacnejší |
| Flytec V803-Pro 12000mAh loď na návnadu | 334.00 € | **305.50 €** | 15.0 % | **5.2 %** | 163.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE50Q8F QLED | 614.90 € | **586.90 €** | 10.0 % | **5.0 %** | 378.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Intelligent self-cleaning cat litterbox with camera ... | 325.50 € | **297.50 €** | 14.9 % | **5.1 %** | 296.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný disk SSD Lexar SL500 1 TB | 317.00 € | **289.50 €** | 15.0 % | **5.0 %** | 219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBSJ1CCPY | 576.90 € | **550.50 €** | 10.1 % | **5.0 %** | 445.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná sušička pre domáce zvieratá Catlink Luxury | 302.00 € | **275.90 €** | 15.0 % | **5.0 %** | 256.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO WIFI KIT - kamerový SET 4900 | 304.50 € | **278.50 €** | 15.0 % | **5.2 %** | 269.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus T2 smart bike trainer | 615.90 € | **589.90 €** | 15.0 % | **10.2 %** | 590.00 € | stávame sa najlacnejší |
| Samsung Galaxy Tab S10 Lite 5G Silver | 557.50 € | **531.90 €** | 10.1 % | **5.0 %** | 351.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vestavný blok zásuviek s posuvným krytom, 2 ... | 76.00 € | **50.50 €** | 59.0 % | **5.7 %** | 30.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TV držák NEDIS TVSM5840BK SmartLife motorizovaný (37... | 292.90 € | **267.50 €** | 15.1 % | **5.1 %** | 227.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3431 1600W 12V | 292.90 € | **267.50 €** | 15.0 % | **5.1 %** | 256.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robotický vysávač MOVA E20, čierny | 290.00 € | **264.90 €** | 15.0 % | **5.1 %** | 88.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robotický vysávač MOVA E20, biely | 290.00 € | **264.90 €** | 15.0 % | **5.1 %** | 88.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.90 €** | 15.0 % | **9.8 %** | 539.00 € | stávame sa najlacnejší |
| Vibrační plošina HMS SVP11 | 287.90 € | **262.90 €** | 15.0 % | **5.0 %** | 262.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 746.50 € | **721.50 €** | 15.0 % | **11.2 %** | 721.79 € | stávame sa najlacnejší |
| WHIRLPOOL TKRL 660 IX | 209.00 € | **184.50 €** | 19.1 % | **5.2 %** | 175.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 322.50 € | **298.00 €** | 14.9 % | **6.2 %** | 298.49 € | stávame sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Canon | 278.50 € | **254.50 €** | 15.0 % | **5.1 %** | 235.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **378.90 €** | 15.0 % | **8.2 %** | 379.00 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **509.00 €** | 15.0 % | **9.9 %** | 509.27 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) izol... | 277.50 € | **253.90 €** | 14.9 % | **5.1 %** | 238.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Sony | 270.90 € | **247.50 €** | 15.1 % | **5.1 %** | 208.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Cyberpad (modrý) | 473.90 € | **451.00 €** | 15.0 % | **9.4 %** | 451.50 € | stávame sa najlacnejší |
| Samsung Galaxy Tab S10 Lite WiFi Red | 491.50 € | **468.90 €** | 10.1 % | **5.0 %** | 309.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Tab S10 Lite WiFi Gray | 491.50 € | **468.90 €** | 10.1 % | **5.0 %** | 315.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Tab S10 Lite WiFi Silver | 491.50 € | **468.90 €** | 10.1 % | **5.0 %** | 321.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný cyklotrenažér Cycplus T2H | 407.50 € | **384.90 €** | 15.0 % | **8.6 %** | 385.00 € | stávame sa najlacnejší |
| Fén na vlasy MOVA Shine 20 (strieborný) | 259.50 € | **236.90 €** | 15.1 % | **5.1 %** | 58.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor ZEUSLAP Z22P PRO s 22-palcovým doty... | 330.90 € | **308.90 €** | 15.0 % | **7.4 %** | 309.00 € | stávame sa najlacnejší |
| Whirlpool WOI4S8CM1SBA | 475.90 € | **454.00 €** | 10.1 % | **5.0 %** | 359.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vestavný blok zásuviek s posuvným krytom, 2 ... | 63.90 € | **42.50 €** | 59.3 % | **5.9 %** | 30.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi TV S Mini LED 55 2026 | 472.90 € | **451.50 €** | 10.1 % | **5.1 %** | 445.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X60 Soundbar | 530.00 € | **508.90 €** | 15.0 % | **10.4 %** | 509.00 € | stávame sa najlacnejší |
| Sada videotelefonu EMOS EM-10AHD /H3010/ s ukládáním... | 245.50 € | **224.50 €** | 15.0 % | **5.2 %** | 196.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotrenažér Cycplus T3 | 849.90 € | **828.90 €** | 15.0 % | **12.2 %** | 829.00 € | stávame sa najlacnejší |
| Whirlpool WMD44MW | 455.90 € | **435.00 €** | 10.1 % | **5.0 %** | 343.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WMD44MX | 455.90 € | **435.00 €** | 10.1 % | **5.0 %** | 345.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Tab A11+ 256GB Gray | 447.50 € | **426.90 €** | 10.1 % | **5.0 %** | 308.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S360DB 2.1 (hnedé) | 359.50 € | **338.90 €** | 14.9 % | **8.4 %** | 339.00 € | stávame sa najlacnejší |
| ETA 507590000 | 119.99 € | **99.50 €** | 26.8 % | **5.2 %** | 91.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Makro blesk GODOX MF12-K2 | 235.90 € | **215.50 €** | 15.0 % | **5.0 %** | 114.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 554.90 € | **534.50 €** | 10.0 % | **6.0 %** | 534.70 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1329.90 €** | 15.0 % | **13.3 %** | 1330.00 € | stávame sa najlacnejší |
| Beko B3RCNA415HXB | 443.90 € | **423.90 €** | 10.0 % | **5.0 %** | 355.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL NXTPAPER 14 Gray | 440.00 € | **420.00 €** | 10.0 % | **5.0 %** | 375.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UREVO FoldiMix 5L Pro elektrický bežecký pás (strieb... | 518.50 € | **498.90 €** | 15.0 % | **10.7 %** | 499.00 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Hi | 227.50 € | **207.90 €** | 14.9 % | **5.0 %** | 207.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Partybox Stage 320 | 428.50 € | **409.00 €** | 10.0 % | **5.0 %** | 400.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 65.00 € | **46.00 €** | 58.6 % | **12.3 %** | 46.50 € | stávame sa najlacnejší |
| Blesk GODOX V1 TTL pre Sony | 212.50 € | **194.00 €** | 15.0 % | **5.0 %** | 187.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 68.00 € | **49.90 €** | 43.6 % | **5.4 %** | 49.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka chytrá Victron Energy BlueSmart 12V/30A IP22 | 209.50 € | **191.50 €** | 15.0 % | **5.1 %** | 150.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Monitor přídavný GoSmart EMOS IP-750B /H4021/ pro vi... | 205.50 € | **187.50 €** | 15.1 % | **5.0 %** | 168.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V1 TTL pre Canon | 213.50 € | **195.50 €** | 14.9 % | **5.3 %** | 191.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V1 TTL pre Nikon | 211.50 € | **193.50 €** | 14.9 % | **5.2 %** | 191.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZEUSLAP Z16H 16" prenosný monitor | 246.90 € | **228.90 €** | 15.1 % | **6.7 %** | 229.00 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 247.50 € | **229.50 €** | 14.9 % | **6.6 %** | 229.79 € | stávame sa najlacnejší |
| WHIRLPOOL AKR 749/1 IX | 139.00 € | **121.00 €** | 23.5 % | **7.5 %** | 121.40 € | stávame sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Vonkajšia IP kamera IMOU AOV Dual 10 MP 4G LTE | 204.00 € | **186.50 €** | 15.0 % | **5.1 %** | 153.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V860III TTL pre Canon | 199.90 € | **182.50 €** | 15.1 % | **5.1 %** | 152.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT Epever XTRA4415N G3 BLE, 12/2... | 201.90 € | **184.50 €** | 15.1 % | **5.1 %** | 159.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V860III TTL pre Nikon | 199.90 € | **182.50 €** | 15.1 % | **5.0 %** | 171.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9232I | 367.50 € | **350.90 €** | 10.1 % | **5.1 %** | 347.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar Professional SILVER PLUS SDXC 5... | 194.50 € | **177.90 €** | 14.9 % | **5.1 %** | 126.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carlinkit CPC200-Tbox UHD Carplay/Android bezdrôtový... | 187.00 € | **170.90 €** | 15.0 % | **5.1 %** | 135.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar PLAY Pro microSD Express 7.1 512GB | 191.00 € | **174.90 €** | 14.9 % | **5.2 %** | 149.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-18A (220W) izol... | 185.00 € | **168.90 €** | 15.0 % | **5.0 %** | 156.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS EM-10AHD monitor videotelefonu 7" LCD /H3015/ | 187.00 € | **170.90 €** | 14.9 % | **5.0 %** | 168.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 Pro 8/256GB šedá (70394) | 348.50 € | **332.50 €** | 10.1 % | **5.1 %** | 265.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Retro boxovací pytel DBX BUSHIDO Spartan 150 x 40 cm... | 217.50 € | **201.50 €** | 15.1 % | **6.6 %** | 201.59 € | stávame sa najlacnejší |
| Inteligentný samočistiaci odpadkový kôš pre mačky Ca... | 375.50 € | **359.50 €** | 15.1 % | **10.2 %** | 359.90 € | stávame sa najlacnejší |
| Samsung QE55Q7F QLED | 340.50 € | **324.90 €** | 10.1 % | **5.0 %** | 322.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight meteostanica, XL farebný LCD, teplota, vlhko... | 52.50 € | **36.90 €** | 50.5 % | **5.7 %** | 30.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Karta pamäte Lexar High-Performance Silver Plus micr... | 185.50 € | **169.90 €** | 14.9 % | **5.2 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Al MOVA TPEAK Al NOTE diktafón | 183.50 € | **167.90 €** | 14.9 % | **5.1 %** | 142.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Osciloskop FNIRSI 2D15P | 183.50 € | **167.90 €** | 14.9 % | **5.1 %** | 162.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 002898030 | 65.99 € | **50.50 €** | 37.2 % | **5.0 %** | 45.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 002898050 | 79.99 € | **64.50 €** | 30.6 % | **5.3 %** | 64.90 € | stávame sa najlacnejší |
| Gaggia Classic E24 černá | 484.90 € | **469.50 €** | 10.1 % | **6.6 %** | 469.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, matná ... | 48.00 € | **32.90 €** | 54.5 % | **5.9 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freestyle koloběžka NILS Extreme HS014 Pro | 174.90 € | **159.90 €** | 15.1 % | **5.2 %** | 150.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Step na aerobik HMS AS009 Pro s funkcí lavice | 173.50 € | **158.50 €** | 14.9 % | **5.0 %** | 152.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **246.00 €** | 15.0 % | **8.4 %** | 246.09 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 273.50 € | **258.90 €** | 15.0 % | **8.9 %** | 259.00 € | stávame sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **479.90 €** | 15.0 % | **11.6 %** | 480.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **409.90 €** | 15.0 % | **11.1 %** | 410.00 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 434.50 € | **419.90 €** | 15.0 % | **11.1 %** | 420.00 € | stávame sa najlacnejší |
| Vibrační plošina HMS SVP09 s podpěrami na kliky | 169.50 € | **154.90 €** | 15.1 % | **5.2 %** | 139.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Box R Plus 4K Android TV - UHD multimediáln... | 169.90 € | **155.50 €** | 15.1 % | **5.3 %** | 135.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba FDM 2 výrobník ledové tříště | 318.00 € | **303.90 €** | 10.0 % | **5.1 %** | 207.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP03 zlatá | 165.00 € | **150.90 €** | 14.9 % | **5.1 %** | 97.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 Pro 6/128GB stříbrná (71048) | 304.90 € | **290.90 €** | 10.1 % | **5.1 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 Pro 6/128GB šedá (70403) | 304.90 € | **290.90 €** | 10.1 % | **5.1 %** | 251.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FSP-FP1500 Záložní UPS pro velké kamerové systémy | 165.50 € | **151.50 €** | 14.9 % | **5.2 %** | 128.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multipřepínač GoSAT GS171712E 17/12 | 163.50 € | **149.50 €** | 15.1 % | **5.2 %** | 135.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 173.90 € | **159.90 €** | 15.1 % | **5.8 %** | 159.95 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 472.90 € | **458.90 €** | 10.0 % | **6.8 %** | 459.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **415.90 €** | 14.9 % | **11.3 %** | 416.00 € | stávame sa najlacnejší |
| Gorenje GS541C10W | 354.50 € | **340.90 €** | 10.0 % | **5.8 %** | 341.00 € | stávame sa najlacnejší |
| ZEUSLAP P16 – prenosný herný monitor s uhlopriečkou ... | 157.00 € | **143.50 €** | 14.9 % | **5.0 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada domovního videotelefonu EMOS EM-04Z 2WIRE /H2060/ | 161.00 € | **147.50 €** | 14.9 % | **5.3 %** | 135.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 485.00 € | **471.50 €** | 10.0 % | **6.9 %** | 471.80 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **158.50 €** | 14.8 % | **5.8 %** | 158.90 € | stávame sa najlacnejší |
| D-LINK WiFi 5G AX3000 Router (G530) | 287.90 € | **274.50 €** | 10.1 % | **5.0 %** | 266.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY STRDH190 | 296.90 € | **283.50 €** | 10.1 % | **5.1 %** | 279.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG F4A10S7NWH | 352.90 € | **339.50 €** | 10.1 % | **5.9 %** | 339.90 € | stávame sa najlacnejší |
| Elektronický modulární boxerský terč HMS TB05 s LED,... | 152.00 € | **138.90 €** | 15.0 % | **5.1 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Interkom pre motocykel s nahrávačom EJEAS K1Pro+ | 151.00 € | **137.90 €** | 15.0 % | **5.0 %** | 107.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP07 | 156.00 € | **142.90 €** | 14.8 % | **5.2 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 85R | 292.50 € | **279.50 €** | 10.0 % | **5.1 %** | 215.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP02 červená | 152.50 € | **139.50 €** | 15.1 % | **5.3 %** | 111.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 182.90 € | **169.90 €** | 15.1 % | **6.9 %** | 169.95 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 221.90 € | **208.90 €** | 15.1 % | **8.3 %** | 209.00 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R02B10 (čierny) | 412.50 € | **399.90 €** | 15.0 % | **11.5 %** | 400.00 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 711.50 € | **698.90 €** | 10.1 % | **8.1 %** | 699.00 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 311.50 € | **298.90 €** | 10.1 % | **5.7 %** | 299.00 € | stávame sa najlacnejší |
| Záložní zdroj VOLT POLSKA Sinus Pro 1000 E 12V/230V ... | 146.50 € | **133.90 €** | 15.1 % | **5.2 %** | 81.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Planetárium UFO Levenhuk LabZZ SP50 | 148.50 € | **135.90 €** | 14.9 % | **5.1 %** | 98.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Mileseey S7 s kamerou s dosahom 1... | 148.50 € | **135.90 €** | 14.9 % | **5.2 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka chytrá Victron Energy BlueSmart 12V/15A, 1... | 147.50 € | **134.90 €** | 14.9 % | **5.1 %** | 123.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 252.50 € | **239.90 €** | 15.1 % | **9.3 %** | 239.95 € | stávame sa najlacnejší |
| Gorenje RI409EP1 | 267.50 € | **255.00 €** | 10.2 % | **5.0 %** | 228.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ventilátor EMOS P56PR3 pod radiátor TRIO, bílý | 146.00 € | **133.50 €** | 15.0 % | **5.1 %** | 111.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 54.00 € | **41.50 €** | 37.5 % | **5.7 %** | 32.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT Victron Energy SmartSolar 100... | 144.50 € | **132.00 €** | 15.0 % | **5.1 %** | 125.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi AC USB 3.0 Adaptér (DWA-182) | 35.90 € | **23.50 €** | 63.7 % | **7.2 %** | 23.89 € | stávame sa najlacnejší |
| Samsung Galaxy Tab A11 LTE 64GB Gray | 262.50 € | **250.50 €** | 10.0 % | **5.0 %** | 101.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 4/256GB šedá (79239) | 261.50 € | **249.50 €** | 10.2 % | **5.1 %** | 132.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava vonkajšej IP kamery IMOU AOV PT s funkciou o... | 138.50 € | **126.50 €** | 15.1 % | **5.1 %** | 117.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freestyle koloběžka NILS Extreme HS024 PRO | 141.90 € | **129.90 €** | 15.0 % | **5.3 %** | 122.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E3S (čierny) | 198.90 € | **186.90 €** | 15.1 % | **8.1 %** | 187.00 € | stávame sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.50 €** | 50.2 % | **38.5 %** | 141.81 € | stávame sa najlacnejší |
| HONOR Pad X9a 128GB Gray | 263.90 € | **251.90 €** | 10.1 % | **5.1 %** | 227.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 002892020 | 79.99 € | **68.00 €** | 32.0 % | **12.2 %** | 68.13 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X50 3-pack) | 249.50 € | **237.90 €** | 10.1 % | **5.0 %** | 162.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPL-700-12 UPS 700W 12V čistý ... | 137.50 € | **125.90 €** | 15.0 % | **5.3 %** | 109.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCR001CBK SmartLife | 134.00 € | **122.50 €** | 15.0 % | **5.1 %** | 84.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI DPOX180H 2-v-1 ručný digitálny fosforový osci... | 140.00 € | **128.50 €** | 14.8 % | **5.4 %** | 122.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 270.50 € | **259.00 €** | 15.0 % | **10.1 %** | 259.35 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z20 | 359.00 € | **347.90 €** | 15.0 % | **11.4 %** | 348.00 € | stávame sa najlacnejší |
| Záložní zdroj MHPower WPU-700-12 UPS 700W 12V čistý ... | 132.00 € | **120.90 €** | 14.9 % | **5.3 %** | 113.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower WPU-800-12 UPS 800W 12V čistý ... | 146.00 € | **134.90 €** | 14.9 % | **6.2 %** | 134.91 € | stávame sa najlacnejší |
| Prenosná fototlačiareň Liene Amber M200 4x6" | 127.00 € | **116.00 €** | 15.0 % | **5.0 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A175 Galaxy A17 128GB Gray | 246.50 € | **235.50 €** | 10.1 % | **5.2 %** | 155.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar Professional SILVER PLUS SDXC 2... | 126.90 € | **115.90 €** | 15.1 % | **5.1 %** | 79.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektronický boxerský terč HMS TB13 s LED, Bluetooth... | 130.50 € | **119.50 €** | 14.9 % | **5.2 %** | 107.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Mileseey S50 | 124.90 € | **113.90 €** | 15.1 % | **5.0 %** | 104.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 3-pack) | 232.50 € | **221.90 €** | 10.1 % | **5.1 %** | 99.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Interkom pre motocykel EJEAS K1Pro s nahrávačom | 126.50 € | **115.90 €** | 15.0 % | **5.4 %** | 107.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja FB151EUGY Frost Vault 47l | 234.00 € | **223.50 €** | 10.0 % | **5.1 %** | 130.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fritéza MOVA FD10 Pro Max (čierna) | 123.90 € | **113.50 €** | 15.1 % | **5.5 %** | 74.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Flytec V010 5200mah návnada loď | 118.00 € | **107.90 €** | 14.8 % | **5.0 %** | 97.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 4G 4/128GB (65580) | 217.90 € | **207.90 €** | 10.2 % | **5.1 %** | 132.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier Hecate G2000 PRO, biele | 117.90 € | **107.90 €** | 15.0 % | **5.3 %** | 65.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka chytrá Victron Energy BlueSmart 12V/7A IP6... | 117.50 € | **107.50 €** | 15.2 % | **5.4 %** | 81.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná lampa sufitowa RGB Yeelight Yeelight Ju... | 118.50 € | **108.50 €** | 15.1 % | **5.4 %** | 93.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stabilizátor napětí KEMOT SER-3000 URZ3414 s opožděn... | 117.00 € | **107.00 €** | 14.9 % | **5.1 %** | 92.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP45 | 118.50 € | **108.50 €** | 15.0 % | **5.3 %** | 94.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zariadenie na čistenie a sušenie tlače ELEGOO Mercur... | 114.90 € | **104.90 €** | 15.2 % | **5.2 %** | 97.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Portable Monitor Z1RC 16,0" | 118.50 € | **108.50 €** | 15.1 % | **5.4 %** | 106.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 49.90 € | **39.90 €** | 46.6 % | **17.2 %** | 39.99 € | stávame sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 427.50 € | **417.50 €** | 15.0 % | **12.3 %** | 417.60 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 227.00 € | **217.00 €** | 14.6 % | **9.5 %** | 217.18 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 49.50 € | **39.50 €** | 47.9 % | **18.0 %** | 39.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 255.50 € | **245.50 €** | 15.1 % | **10.6 %** | 245.89 € | stávame sa najlacnejší |
| Elektrická zubná kefka MOVA Fresh 20 Sensus (biela) | 114.90 € | **105.00 €** | 15.0 % | **5.1 %** | 104.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Superior RC UNI TV SAM/LG | 16.99 € | **7.20 €** | 151.1 % | **6.4 %** | 6.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Tab A11 64GB Gray | 218.50 € | **208.90 €** | 10.0 % | **5.2 %** | 101.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Tab A11 64GB Silver | 218.50 € | **208.90 €** | 10.0 % | **5.2 %** | 101.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor KRUGER & MATZ V-LED20 KM0370-FHD | 112.50 € | **102.90 €** | 14.9 % | **5.1 %** | 80.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT208B digitálny klešťový multimeter | 113.50 € | **103.90 €** | 14.9 % | **5.2 %** | 100.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dávkovač krmiva s kamerou EMOS H6004 GoSmart, 4 l, č... | 111.00 € | **101.50 €** | 14.9 % | **5.1 %** | 82.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP01 azurová | 110.00 € | **100.50 €** | 14.9 % | **5.0 %** | 85.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP01 červená | 110.00 € | **100.50 €** | 14.9 % | **5.0 %** | 85.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP01 zlatá | 110.00 € | **100.50 €** | 14.9 % | **5.0 %** | 85.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 41.00 € | **31.50 €** | 37.9 % | **6.0 %** | 18.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dávkovač krmiva s kamerou EMOS H6006 GoSmart, 6 l, č... | 111.00 € | **101.50 €** | 14.9 % | **5.1 %** | 92.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Měřič kvality vzduchu chytrý GARNI 210T OneCare | 108.50 € | **99.00 €** | 15.2 % | **5.1 %** | 94.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH98A9WO | 284.50 € | **275.00 €** | 10.0 % | **6.3 %** | 275.08 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 58.00 € | **48.50 €** | 43.5 % | **20.0 %** | 48.90 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPL-500-12 UPS 500W 12V čistý ... | 109.90 € | **100.50 €** | 15.2 % | **5.3 %** | 94.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta GZ2251E0 | 212.90 € | **203.50 €** | 10.0 % | **5.2 %** | 199.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 148.90 € | **139.50 €** | 15.1 % | **7.9 %** | 139.90 € | stávame sa najlacnejší |
| Maxxo Chamber Line 70 | 359.90 € | **350.50 €** | 10.1 % | **7.2 %** | 350.59 € | stávame sa najlacnejší |
| TP-LINK Deco BE25 (2-pack) | 198.50 € | **189.50 €** | 10.2 % | **5.2 %** | 76.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina ONE Fitness SVP08 | 105.90 € | **96.90 €** | 15.1 % | **5.3 %** | 69.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací žíněnka HMS Premium MGS01 černá | 105.90 € | **96.90 €** | 15.1 % | **5.3 %** | 72.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací žíněnka HMS Premium MGS01 červená | 105.90 € | **96.90 €** | 15.1 % | **5.3 %** | 72.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací žíněnka HMS Premium MGS01 šedá | 105.90 € | **96.90 €** | 15.1 % | **5.3 %** | 72.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ventilátor EMOS P56PR2 pod radiátor DUO, bílý | 105.00 € | **96.00 €** | 14.9 % | **5.1 %** | 81.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi 17 4/128GB Black | 202.50 € | **193.50 €** | 10.1 % | **5.2 %** | 181.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi 17 4/128GB Deep Blue | 202.50 € | **193.50 €** | 10.1 % | **5.2 %** | 181.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi 17 4/128GB Oak Green | 202.50 € | **193.50 €** | 10.1 % | **5.2 %** | 181.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips Mikrosystem TAM4505M2 | 190.90 € | **181.90 €** | 10.2 % | **5.0 %** | 169.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 10m, 1 zásuvka IP44, 3 x ... | 35.50 € | **26.50 €** | 43.1 % | **6.8 %** | 14.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower WPU-500-12 UPS 500W 12V čistý ... | 108.50 € | **99.50 €** | 14.9 % | **5.3 %** | 90.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná fontána pre zvieratá Eversweet Max Petkit | 104.90 € | **95.90 €** | 15.0 % | **5.1 %** | 86.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja FB131EUGY Frost Vault 28l | 196.90 € | **187.90 €** | 10.1 % | **5.1 %** | 186.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 110G | 330.00 € | **321.00 €** | 10.0 % | **7.0 %** | 321.08 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **279.90 €** | 15.0 % | **11.4 %** | 280.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 67.50 € | **58.50 €** | 43.9 % | **24.7 %** | 58.76 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161E | 117.50 € | **108.50 €** | 14.9 % | **6.1 %** | 108.89 € | stávame sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 195.90 € | **187.00 €** | 10.1 % | **5.1 %** | 132.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX TT685II TTL pre Canon | 127.90 € | **119.00 €** | 15.1 % | **7.1 %** | 119.10 € | stávame sa najlacnejší |
| Gorenje W3NGPI74A3S | 266.90 € | **258.00 €** | 10.0 % | **6.4 %** | 258.09 € | stávame sa najlacnejší |
| LED stojací lampa GoSmart EMOS ZCW34BR, černá, 175 c... | 102.50 € | **93.90 €** | 14.9 % | **5.3 %** | 23.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO TAB 10.1 (ZAEH0037CZ) | 195.50 € | **186.90 €** | 10.0 % | **5.2 %** | 152.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 9.7 4/64GB Black (78859) | 187.50 € | **178.90 €** | 10.2 % | **5.2 %** | 146.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 28 | 192.50 € | **183.90 €** | 10.1 % | **5.2 %** | 152.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Měřič kvality vzduchu EMOS E30300 GoSmart s Wifi | 102.50 € | **93.90 €** | 15.1 % | **5.4 %** | 70.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj VOLT POLSKA Sinus Pro 500 E 12V/230V 5... | 99.50 € | **90.90 €** | 15.3 % | **5.3 %** | 80.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT Victron Energy SmartSolar 100... | 102.50 € | **93.90 €** | 14.8 % | **5.2 %** | 87.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Wi-Fi fotookulár Levenhuk Kelvin WFP25 | 96.50 € | **88.00 €** | 15.2 % | **5.1 %** | 66.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X50 2-pack) | 192.00 € | **183.50 €** | 10.0 % | **5.2 %** | 162.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor plynu Ermenrich NG40 Fialový | 104.00 € | **95.50 €** | 14.8 % | **5.4 %** | 92.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja FB131EUWH Frost Vault 28l | 189.00 € | **180.50 €** | 10.0 % | **5.1 %** | 179.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 138.00 € | **129.50 €** | 14.9 % | **7.9 %** | 129.90 € | stávame sa najlacnejší |
| LENOVO TAB 10.1 (ZAEH0095CZ) | 186.90 € | **178.50 €** | 10.1 % | **5.2 %** | 134.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP LaserJet Pro MFP M234sdn (6GX00F) | 181.90 € | **173.50 €** | 10.2 % | **5.1 %** | 149.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WG2PS74A2W | 247.90 € | **239.50 €** | 10.0 % | **6.3 %** | 239.51 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM124T s kotoučovou brzdou fi... | 97.00 € | **88.90 €** | 14.9 % | **5.3 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM124T s kotoučovou brzdou ty... | 97.00 € | **88.90 €** | 14.9 % | **5.3 %** | 87.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **122.90 €** | 14.9 % | **7.8 %** | 123.00 € | stávame sa najlacnejší |
| Samsung Galaxy Buds4 bílá | 178.50 € | **170.50 €** | 10.2 % | **5.3 %** | 104.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef S 12005 | 175.90 € | **167.90 €** | 10.2 % | **5.1 %** | 135.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera IP venkovní dobíjecí NEDIS WIFICBO32WT / Wi-F... | 91.50 € | **83.50 €** | 15.3 % | **5.2 %** | 61.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX U-Box J42 Nano/bez OS | 172.50 € | **164.50 €** | 10.2 % | **5.1 %** | 156.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower WPU-300-12 UPS 300W 12V čistý ... | 93.90 € | **85.90 €** | 15.2 % | **5.4 %** | 79.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48A | 178.50 € | **170.50 €** | 10.2 % | **5.3 %** | 166.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nástenný skener Uni-T UT387S | 92.90 € | **84.90 €** | 15.2 % | **5.3 %** | 84.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210A | 221.00 € | **213.00 €** | 10.0 % | **6.0 %** | 213.02 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 120.90 € | **112.90 €** | 15.0 % | **7.4 %** | 113.00 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 144.00 € | **136.00 €** | 15.0 % | **8.6 %** | 136.39 € | stávame sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **185.00 €** | 15.1 % | **10.4 %** | 185.13 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 24.50 € | **16.90 €** | 53.3 % | **5.8 %** | 11.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektronický boxerský terč HMS TB03 s LED, Bluetooth... | 89.50 € | **81.90 €** | 14.8 % | **5.0 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPL-300-12 UPS 300W 12V čistý ... | 93.50 € | **85.90 €** | 14.8 % | **5.5 %** | 73.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Posilovací lavice REBEL ACTIVE RBA-2007 | 93.00 € | **85.50 €** | 14.9 % | **5.6 %** | 64.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT Victron Energy SmartSolar 100... | 89.00 € | **81.50 €** | 14.9 % | **5.2 %** | 76.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V860III TTL pre Sony | 204.50 € | **197.00 €** | 15.0 % | **10.8 %** | 197.50 € | stávame sa najlacnejší |
| Philips Mikrosystem TAM4205M2 | 160.90 € | **153.50 €** | 10.1 % | **5.0 %** | 147.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Water Fountain for pets Catlink Pure 2 | 87.90 € | **80.50 €** | 15.0 % | **5.3 %** | 79.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Napájačka pre zvieratá MOVA WF20 Pro | 87.90 € | **80.50 €** | 15.0 % | **5.3 %** | 79.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 116.90 € | **109.50 €** | 15.2 % | **7.9 %** | 109.69 € | stávame sa najlacnejší |
| D-LINK WiFi N300 Extender (DAP-1325) | 26.90 € | **19.50 €** | 46.1 % | **5.9 %** | 16.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 284.90 € | **277.50 €** | 15.0 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| Pamäťová karta Lexar PLAY Pro microSD Express 7.1 256GB | 87.00 € | **79.90 €** | 14.7 % | **5.3 %** | 66.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkový blok DBX BUSHIDO T75B | 87.00 € | **79.90 €** | 14.9 % | **5.5 %** | 68.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar microSDXC, 256 GB (SD3.0) | 85.00 € | **77.90 €** | 14.9 % | **5.3 %** | 73.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosná fototlačiareň Liene Pearl 2x3" (biela) | 81.90 € | **74.90 €** | 15.1 % | **5.3 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektronický boxerský terč HMS TB30 s LED, Bluetooth... | 82.90 € | **75.90 €** | 15.3 % | **5.5 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tuner externí USB pro VU+ TURBO 2 DVB-T2/C | 82.50 € | **75.50 €** | 15.1 % | **5.4 %** | 62.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera EMOS IP-1150 SNAP /H4073/ GoSmart venkovní ba... | 81.90 € | **74.90 €** | 15.2 % | **5.4 %** | 63.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Výrobník ledu Ruhhy K5537 | 84.90 € | **77.90 €** | 15.0 % | **5.5 %** | 71.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI G32C4X | 152.50 € | **145.50 €** | 10.2 % | **5.1 %** | 144.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Osciloskop FNIRSI DS215H | 80.50 € | **73.50 €** | 15.2 % | **5.2 %** | 72.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 505.90 € | **498.90 €** | 10.1 % | **8.6 %** | 499.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 52.00 € | **45.00 €** | 43.7 % | **24.3 %** | 45.34 € | stávame sa najlacnejší |
| Ultimea Poseidon D70 Soundbar | 166.50 € | **159.50 €** | 15.1 % | **10.2 %** | 159.90 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B4 | 424.90 € | **418.00 €** | 15.0 % | **13.1 %** | 418.20 € | stávame sa najlacnejší |
| TP-LINK Archer MR600 4G LTE WiFI Router | 143.50 € | **136.90 €** | 10.1 % | **5.0 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi AX1500 Mesh 3-pack (M15-3) | 151.50 € | **144.90 €** | 10.1 % | **5.3 %** | 137.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **88.90 €** | 14.9 % | **6.9 %** | 89.00 € | stávame sa najlacnejší |
| Rotoped DeerRun S500 Pro (čierny) | 246.50 € | **239.90 €** | 15.1 % | **12.0 %** | 240.00 € | stávame sa najlacnejší |
| SONY HTSF150 | 151.00 € | **144.50 €** | 10.1 % | **5.3 %** | 101.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir G7 Pro WT TRI-MODE White | 77.00 € | **70.50 €** | 14.9 % | **5.2 %** | 43.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vodné chladenie CPU DE240 (čierne) | 78.00 € | **71.50 €** | 14.7 % | **5.1 %** | 52.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.15 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.15 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS DICROMAT MINI - zapuštěná montá... | 75.50 € | **69.00 €** | 14.9 % | **5.0 %** | 69.45 € | stávame sa najlacnejší |
| ETA 207990000 | 39.99 € | **33.50 €** | 26.8 % | **6.2 %** | 30.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco M4 3-pack) | 143.90 € | **137.50 €** | 10.3 % | **5.4 %** | 120.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Joystick PXN-2119 PRO na ovládanie letu | 73.90 € | **67.50 €** | 15.1 % | **5.2 %** | 58.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 115.90 € | **109.50 €** | 15.1 % | **8.7 %** | 109.90 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 92.90 € | **86.50 €** | 15.0 % | **7.1 %** | 86.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 38.90 € | **32.50 €** | 27.5 % | **6.5 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky + časový spí... | 18.90 € | **12.50 €** | 60.6 % | **6.2 %** | 12.70 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **327.90 €** | 15.0 % | **12.9 %** | 328.00 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 40.00 € | **33.90 €** | 47.6 % | **25.0 %** | 33.96 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM127 | 73.00 € | **66.90 €** | 14.8 % | **5.2 %** | 33.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM800 Fly růžová | 73.00 € | **66.90 €** | 14.8 % | **5.2 %** | 50.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka Compass 07166 JUMP STARTER 8.000mAh 500A ... | 72.00 € | **65.90 €** | 14.8 % | **5.1 %** | 56.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5101, 2... | 76.00 € | **69.90 €** | 14.8 % | **5.6 %** | 66.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM800 Fly zlatá | 73.00 € | **66.90 €** | 14.8 % | **5.2 %** | 66.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| Dávkovač krmiva EMOS H6002 GoSmart, 4 l, černý, Wi-Fi | 69.90 € | **63.90 €** | 14.9 % | **5.1 %** | 53.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK LabZZ Tellurion | 67.90 € | **61.90 €** | 15.3 % | **5.1 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosná fototlačiareň Liene Pearl 2x3" (biela) | 70.00 € | **64.00 €** | 15.0 % | **5.1 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Asus ROG FALCHION RX Low profile(ROG RX | 135.50 € | **129.50 €** | 10.3 % | **5.4 %** | 111.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 360° Outdoor Camera WiFi IMOU Cruiser Z 5MP | 70.00 € | **64.00 €** | 14.9 % | **5.0 %** | 49.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT161D | 70.90 € | **64.90 €** | 15.3 % | **5.5 %** | 55.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1022300 | 135.90 € | **129.90 €** | 10.1 % | **5.2 %** | 125.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG S4 S40GD (LS24D400GAUXEN) | 132.50 € | **126.50 €** | 10.1 % | **5.1 %** | 122.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava bezdrôtového zvončeka IMOU 2S | 73.50 € | **67.50 €** | 15.1 % | **5.7 %** | 64.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C200 HomeWi-Fi Camera | 34.90 € | **28.90 €** | 28.4 % | **6.3 %** | 27.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6812E0 | 56.90 € | **50.90 €** | 17.9 % | **5.5 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 156.50 € | **150.50 €** | 15.1 % | **10.7 %** | 150.61 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 40.50 € | **34.50 €** | 59.2 % | **35.6 %** | 34.65 € | stávame sa najlacnejší |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 252.50 € | **246.50 €** | 14.9 % | **12.2 %** | 246.67 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 408.50 € | **402.50 €** | 14.8 % | **13.1 %** | 402.78 € | stávame sa najlacnejší |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 115.50 € | **109.50 €** | 15.0 % | **9.0 %** | 109.90 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Johansson KIT 6715 zesilovač + zdroj (2438) | 161.00 € | **155.00 €** | 14.8 % | **10.6 %** | 155.50 € | stávame sa najlacnejší |
| Tréninkový blok DBX BUSHIDO ARS-1201a | 68.90 € | **63.00 €** | 15.0 % | **5.1 %** | 36.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektronický boxerský terč HMS TB12 s LED, Bluetooth... | 68.90 € | **63.00 €** | 15.0 % | **5.1 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 25 Ah  Victron Energy AGM Sup... | 67.90 € | **62.00 €** | 15.1 % | **5.1 %** | 61.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX TT685II TTL pre Sony | 122.90 € | **117.00 €** | 15.0 % | **9.5 %** | 117.50 € | stávame sa najlacnejší |
| Waydoo submersible | 287.50 € | **281.90 €** | 15.0 % | **12.8 %** | 282.00 € | stávame sa najlacnejší |
| Candy ProWash 550 SLIM BP 37SBL8-S | 278.50 € | **272.90 €** | 10.1 % | **7.9 %** | 273.00 € | stávame sa najlacnejší |
| BOBOVR E3 PRO odľahčovací remienok na batérie pre Me... | 66.50 € | **60.90 €** | 15.4 % | **5.7 %** | 22.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací hruška DBX BUSHIDO SK15 černo-červená 15 kg | 64.50 € | **58.90 €** | 15.3 % | **5.3 %** | 42.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací hruška DBX BUSHIDO SK15 černo-bílá 15 kg | 64.50 € | **58.90 €** | 15.3 % | **5.3 %** | 42.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Karta pamäte Lexar High-Performance Silver Plus micr... | 65.50 € | **59.90 €** | 15.3 % | **5.5 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ventilátor EMOS P56PR1 pod radiátor MONO, bílý | 65.50 € | **59.90 €** | 15.3 % | **5.4 %** | 53.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO BT 1 black 0000/3968 reprodukto... | 67.50 € | **61.90 €** | 14.7 % | **5.2 %** | 58.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI AD1 síťový adaptér vyhřívání anemometru | 67.50 € | **61.90 €** | 15.2 % | **5.6 %** | 59.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5100, 2... | 65.50 € | **59.90 €** | 14.8 % | **5.0 %** | 57.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi A7 Pro 4/64GB Green | 126.50 € | **120.90 €** | 10.1 % | **5.2 %** | 93.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta IN3020F0 | 127.50 € | **121.90 €** | 10.1 % | **5.3 %** | 106.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hori XONE/XSX/PC Racing Wheel Overdrive | 120.50 € | **114.90 €** | 10.1 % | **5.0 %** | 106.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG MS23NECBW | 124.50 € | **118.90 €** | 10.3 % | **5.3 %** | 112.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 80.50 € | **74.90 €** | 15.0 % | **7.0 %** | 74.94 € | stávame sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 122.50 € | **116.90 €** | 10.2 % | **5.2 %** | 117.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **224.90 €** | 15.0 % | **12.2 %** | 225.00 € | stávame sa najlacnejší |
| Philips Mikrosystem TAM3505M2 | 113.50 € | **108.00 €** | 10.4 % | **5.0 %** | 89.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER 31700838 PT-P710BT | 115.50 € | **110.00 €** | 10.3 % | **5.0 %** | 93.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM183 růžová | 65.00 € | **59.50 €** | 15.0 % | **5.3 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Coffee Slim Machine 1381/10 metal | 119.50 € | **114.00 €** | 10.1 % | **5.0 %** | 109.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM183 zlatá | 65.00 € | **59.50 €** | 15.0 % | **5.3 %** | 56.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Standa... | 67.00 € | **61.50 €** | 14.8 % | **5.4 %** | 60.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe + Find M... | 21.50 € | **16.00 €** | 41.4 % | **5.2 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM183 tyrkysová | 65.00 € | **59.50 €** | 15.0 % | **5.3 %** | 59.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight cestovný adaptér, univerzálny, uzemnený | 16.50 € | **11.00 €** | 57.6 % | **5.1 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový spúšťač GODOX X3 TTL pre Sony | 75.00 € | **69.50 €** | 14.7 % | **6.3 %** | 69.52 € | stávame sa najlacnejší |
| Diaľkový spúšťač GODOX X3 TTL pre Canon | 73.00 € | **67.50 €** | 14.7 % | **6.0 %** | 67.90 € | stávame sa najlacnejší |
| Beko B3RCSO255S | 280.00 € | **274.50 €** | 10.0 % | **7.9 %** | 274.90 € | stávame sa najlacnejší |
| KMP C81V / PGI-525BK, CLI-526C/M/Y | 23.99 € | **18.50 €** | 67.8 % | **29.4 %** | 18.59 € | stávame sa najlacnejší |
| Asus SBW-06D2X-U BLACK externí BD-RW | 119.90 € | **114.50 €** | 10.2 % | **5.2 %** | 106.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GameSir G8+ Bluetooth mobile controller with phone h... | 64.90 € | **59.50 €** | 15.3 % | **5.7 %** | 53.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný mini osciloskop 3 v 1 FNIRSI DSO-TC4 | 65.90 € | **60.50 €** | 15.2 % | **5.8 %** | 54.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAZ6000 Radiomagnetofon | 115.90 € | **110.50 €** | 10.2 % | **5.1 %** | 107.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultima Apollo S70 Ultra Soundbar | 204.90 € | **199.50 €** | 15.0 % | **12.0 %** | 199.90 € | stávame sa najlacnejší |
| TEFAL HB 643138 | 54.90 € | **49.50 €** | 17.1 % | **5.6 %** | 49.90 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **366.50 €** | 15.1 % | **13.4 %** | 366.90 € | stávame sa najlacnejší |
| MOVA Turbo sušič vlasov (ružový) | 63.00 € | **57.90 €** | 14.9 % | **5.6 %** | 31.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PVR KIT pro VU+ ZERO 4K | 59.00 € | **53.90 €** | 15.1 % | **5.1 %** | 41.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vonkajšia WiFi kamera 360° IMOU Cruiser 2 5MP | 65.00 € | **59.90 €** | 14.6 % | **5.6 %** | 55.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stůl kempingový skládací Cattara 13481 BLED | 62.00 € | **56.90 €** | 14.9 % | **5.4 %** | 55.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 75.00 € | **69.90 €** | 14.8 % | **7.0 %** | 70.00 € | stávame sa najlacnejší |
| TP-LINK WiFi AX1500 (Deco X10 2-pack) | 115.50 € | **110.50 €** | 10.1 % | **5.4 %** | 61.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco M4 2-pack) | 109.50 € | **104.50 €** | 10.4 % | **5.4 %** | 71.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Small Foot Šplhací síť | 55.90 € | **50.90 €** | 15.4 % | **5.1 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruhový tréninkový blok DBX BUSHIDO KS-1 45 cm | 59.90 € | **54.90 €** | 15.3 % | **5.7 %** | 41.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi AX1500 Mesh 2-pack (M15-2) | 107.50 € | **102.50 €** | 10.1 % | **5.0 %** | 90.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X50 1-pack) | 107.90 € | **102.90 €** | 10.3 % | **5.2 %** | 92.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 3-pack) | 108.90 € | **103.90 €** | 10.3 % | **5.2 %** | 93.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička 10W, 490lm, zmena CCT, s... | 21.50 € | **16.50 €** | 39.6 % | **7.1 %** | 7.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8972 | 58.50 € | **53.50 €** | 14.9 % | **5.1 %** | 45.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka USB EMOS V06G120 GaN PD univerzální 5A (12... | 58.50 € | **53.50 €** | 14.9 % | **5.1 %** | 46.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Posilovací lavice REBEL ACTIVE RBA-2003 | 57.50 € | **52.50 €** | 15.2 % | **5.2 %** | 49.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Impregnace na kožené sedačky INPRODUCTS WAX 1l | 59.90 € | **54.90 €** | 15.1 % | **5.5 %** | 52.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA Bambino BM40 - dětská WiFi chůvička s kamerou | 60.90 € | **55.90 €** | 15.1 % | **5.7 %** | 55.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy PILOT S10 Radar 4K | 111.50 € | **106.50 €** | 10.1 % | **5.1 %** | 106.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT161B | 65.50 € | **60.50 €** | 15.0 % | **6.2 %** | 60.59 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 209.90 € | **204.90 €** | 15.1 % | **12.3 %** | 205.00 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 313.90 € | **308.90 €** | 15.0 % | **13.2 %** | 309.00 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir G7 Pro WC Wuchang Edition | 96.00 € | **91.00 €** | 14.8 % | **8.8 %** | 91.12 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **27.50 €** | 59.9 % | **35.3 %** | 27.68 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 119.50 € | **114.50 €** | 15.1 % | **10.3 %** | 114.85 € | stávame sa najlacnejší |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 124.50 € | **119.50 €** | 14.9 % | **10.2 %** | 119.90 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **149.50 €** | 15.1 % | **11.4 %** | 149.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 36.00 € | **31.00 €** | 37.9 % | **18.8 %** | 31.50 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 85.90 € | **81.00 €** | 15.1 % | **8.5 %** | 81.10 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **8.80 €** | 121.3 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| 360° Outdoor Wi-Fi Camera IMOU Cruiser SE+ 5MP | 51.50 € | **46.90 €** | 15.3 % | **5.0 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Outdor Camera with Built-in Solar Panel IMOU Cell 3C... | 52.50 € | **47.90 €** | 15.3 % | **5.2 %** | 38.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní přístroj břišní REBEL ACTIVE RBA-6008 | 55.50 € | **50.90 €** | 14.6 % | **5.1 %** | 44.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UPS VOLT Micro 850VA 480W 9Ah POČÍTAČOVÝ UPS | 54.50 € | **49.90 €** | 15.1 % | **5.4 %** | 45.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Table Clamp MOZA RACING RS12 for R5/R9/R12 | 53.50 € | **48.90 €** | 15.3 % | **5.3 %** | 44.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stabilizátor napětí KEMOT MSER-500 se servomotorem | 55.50 € | **50.90 €** | 14.7 % | **5.2 %** | 48.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 32.50 € | **27.90 €** | 58.6 % | **36.2 %** | 27.91 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.90 €** | 46.8 % | **12.2 %** | 14.99 € | stávame sa najlacnejší |
| LG MS2032GAS | 98.50 € | **93.90 €** | 10.2 % | **5.0 %** | 88.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 74.50 € | **69.90 €** | 15.2 % | **8.0 %** | 69.96 € | stávame sa najlacnejší |
| MOVA WF10 Pro fontána/napájačka pre zvieratá | 54.50 € | **50.00 €** | 14.7 % | **5.2 %** | 25.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Posilovací lavice REBEL ACTIVE RBA-2001 | 55.00 € | **50.50 €** | 14.9 % | **5.5 %** | 46.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka chytrá Victron Energy BlueSmart 6V/12V/1,1... | 58.00 € | **53.50 €** | 14.8 % | **5.9 %** | 52.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 129.00 € | **124.50 €** | 15.0 % | **11.0 %** | 124.59 € | stávame sa najlacnejší |
| G3ferrari G1020400 Pizza trouba, 2 min | 225.50 € | **221.00 €** | 10.2 % | **8.0 %** | 221.09 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **26.00 €** | 59.0 % | **35.5 %** | 26.15 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **525.00 €** | 15.0 % | **14.1 %** | 525.20 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 117.50 € | **113.00 €** | 14.9 % | **10.5 %** | 113.29 € | stávame sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 16.50 € | **12.00 €** | 54.4 % | **12.3 %** | 12.35 € | stávame sa najlacnejší |
| Blesk GODOX TT600 | 81.50 € | **77.00 €** | 15.0 % | **8.7 %** | 77.50 € | stávame sa najlacnejší |
| Reproduktory Edifier R1100 2.0 (čierne) | 78.50 € | **74.00 €** | 15.0 % | **8.4 %** | 74.50 € | stávame sa najlacnejší |
| D-LINK WiFi LTE USB Modem (DWR-933) | 95.90 € | **91.50 €** | 10.1 % | **5.0 %** | 86.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy PILOT XR Radar | 97.90 € | **93.50 €** | 10.1 % | **5.1 %** | 93.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 123.90 € | **119.50 €** | 15.1 % | **11.0 %** | 119.90 € | stávame sa najlacnejší |
| Dopravné prostriedky Sunnylife AQX-16 pre AIR 3S/AIR... | 51.90 € | **47.50 €** | 15.2 % | **5.4 %** | 29.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 2in1 Bulb and 360° Outdoor Camera WiFi IMOU Bulb Cam... | 54.90 € | **50.50 €** | 15.1 % | **5.8 %** | 38.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkový blok DBX BUSHIDO T42 | 52.90 € | **48.50 €** | 15.1 % | **5.6 %** | 41.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM603 modrá | 50.90 € | **46.50 €** | 15.3 % | **5.3 %** | 40.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 256 GB | 51.90 € | **47.50 €** | 15.4 % | **5.6 %** | 41.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WA850RE Wireless N Extender | 21.90 € | **17.50 €** | 35.0 % | **7.9 %** | 11.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM0180 fialová | 52.90 € | **48.50 €** | 15.2 % | **5.6 %** | 43.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 růžová | 50.90 € | **46.50 €** | 15.3 % | **5.3 %** | 43.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM0180 zelená | 52.90 € | **48.50 €** | 15.2 % | **5.6 %** | 46.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Výrobok X.A.3 | 53.90 € | **49.50 €** | 15.0 % | **5.6 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Infračervený teplomer Uni-T UT301C+ | 56.90 € | **52.50 €** | 15.3 % | **6.4 %** | 52.79 € | stávame sa najlacnejší |
| Termovízna kamera THERMAL MASTER T2Max | 292.90 € | **288.50 €** | 15.0 % | **13.3 %** | 288.90 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **329.90 €** | 14.9 % | **13.5 %** | 330.00 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine 776043 dřevěné | 49.00 € | **44.90 €** | 15.1 % | **5.5 %** | 32.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžový / tréninkový postroj DBX BUSHIDO DBX P1 Str... | 50.00 € | **45.90 €** | 14.8 % | **5.4 %** | 39.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210E Mini digitálny klešťový multimeter | 50.00 € | **45.90 €** | 15.1 % | **5.7 %** | 41.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice WS 6462 | 52.00 € | **47.90 €** | 14.7 % | **5.6 %** | 47.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 19.00 € | **14.90 €** | 37.2 % | **7.6 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor PRO so senzorom, 20W, 1840lm, ... | 15.00 € | **10.90 €** | 45.5 % | **5.7 %** | 7.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač, 3x 15A, USB A+C rychlonabíjačka ... | 15.00 € | **10.90 €** | 45.5 % | **5.7 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 85.00 € | **80.90 €** | 14.7 % | **9.2 %** | 80.99 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **211.90 €** | 15.0 % | **12.8 %** | 212.00 € | stávame sa najlacnejší |
| TP-LINK WiFi AX1500 (Deco X10 1-pack) | 78.50 € | **74.50 €** | 10.7 % | **5.0 %** | 61.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM1302 modrá | 46.90 € | **42.90 €** | 15.5 % | **5.6 %** | 31.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP DeskJet 4320 (A24HMB) | 82.50 € | **78.50 €** | 10.4 % | **5.0 %** | 67.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací žíněnka HMS Premium MGS02 černá | 48.50 € | **44.50 €** | 14.6 % | **5.2 %** | 34.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací žíněnka HMS Premium MGS02 růžová | 48.50 € | **44.50 €** | 14.6 % | **5.2 %** | 34.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací žíněnka HMS Premium MGS02 šedá | 48.50 € | **44.50 €** | 14.6 % | **5.2 %** | 34.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM1302 růžová | 46.90 € | **42.90 €** | 15.5 % | **5.6 %** | 33.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Radiátor olejový TEESA TSA8056 | 52.50 € | **48.50 €** | 14.8 % | **6.1 %** | 40.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer BE220 WiFi 7 Router | 88.50 € | **84.50 €** | 10.4 % | **5.4 %** | 80.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská koloběžka NILS Fun HLB02 růžová | 44.50 € | **40.50 €** | 15.6 % | **5.2 %** | 38.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta AC9736WO | 85.50 € | **81.50 €** | 10.5 % | **5.3 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1510 | 46.90 € | **42.90 €** | 15.1 % | **5.3 %** | 41.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT CARSPA 10A - 12/24V | 45.90 € | **41.90 €** | 15.5 % | **5.4 %** | 41.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stabilizátor napětí KEMOT SER-1000 URZ3412 s opožděn... | 47.00 € | **43.00 €** | 14.8 % | **5.0 %** | 42.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 14.90 € | **10.90 €** | 48.5 % | **8.6 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips Mikrosystem TAM3205M2 | 86.50 € | **82.50 €** | 10.2 % | **5.1 %** | 82.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer Air PR... | 63.50 € | **59.50 €** | 15.1 % | **7.8 %** | 59.51 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 60.50 € | **56.50 €** | 37.2 % | **28.1 %** | 56.54 € | stávame sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 110.50 € | **106.50 €** | 14.8 % | **10.7 %** | 106.54 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1610 | 49.90 € | **45.90 €** | 15.2 % | **5.9 %** | 45.96 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 75.50 € | **71.50 €** | 15.4 % | **9.3 %** | 71.56 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.58 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.58 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R14R1 (hnedý) | 388.90 € | **384.90 €** | 15.0 % | **13.8 %** | 385.00 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **81.50 €** | 14.9 % | **9.5 %** | 81.65 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 87.00 € | **83.00 €** | 14.0 % | **8.7 %** | 83.20 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **21.50 €** | 59.8 % | **34.8 %** | 21.72 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 123.50 € | **119.50 €** | 38.9 % | **34.4 %** | 119.73 € | stávame sa najlacnejší |
| Catlink BayMax Lite intelligent self-cleaning cat li... | 357.50 € | **353.50 €** | 15.1 % | **13.8 %** | 353.75 € | stávame sa najlacnejší |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 103.90 € | **100.00 €** | 15.1 % | **10.7 %** | 100.42 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo s cyklo držiakom, 40... | 12.50 € | **8.60 €** | 53.5 % | **5.6 %** | 5.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 13.90 € | **10.00 €** | 48.1 % | **6.6 %** | 10.34 € | stávame sa najlacnejší |
| Horizontální reflexní míč DBX BUSHIDO DBX-SB-2 | 45.90 € | **42.00 €** | 14.9 % | **5.2 %** | 23.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lexar Fingerprint F35pro USB 3.2 128GB pendrive | 43.90 € | **40.00 €** | 15.4 % | **5.1 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 46.90 € | **43.00 €** | 15.5 % | **5.9 %** | 43.09 € | stávame sa najlacnejší |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 17.90 € | **14.00 €** | 66.7 % | **30.4 %** | 14.30 € | stávame sa najlacnejší |
| Medicinbal REBEL ACTIVE RBA-3107-10 35cm 10kg | 40.50 € | **36.90 €** | 15.2 % | **5.0 %** | 20.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM0106 oranžová | 43.50 € | **39.90 €** | 15.1 % | **5.6 %** | 29.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA Rukavice DBX BUSHIDO E1v9 XL | 40.50 € | **36.90 €** | 15.2 % | **5.0 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Karaoke mixér REBEL MIK0115 | 40.50 € | **36.90 €** | 15.2 % | **5.0 %** | 32.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Krbové nářadí a stojan na dřevo Kaminer PK011 | 44.50 € | **40.90 €** | 15.0 % | **5.7 %** | 37.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserová vodováha Uni-T LM570LD-II | 45.50 € | **41.90 €** | 15.0 % | **5.9 %** | 39.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dezinfekčná UV lampa 100W | 49.50 € | **45.90 €** | 49.7 % | **38.8 %** | 45.91 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **63.90 €** | 15.2 % | **9.0 %** | 63.99 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 650lm, Li-Ion | 16.50 € | **12.90 €** | 38.6 % | **8.3 %** | 11.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH965 | 76.50 € | **72.90 €** | 10.4 % | **5.2 %** | 45.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH850 | 70.50 € | **66.90 €** | 10.8 % | **5.1 %** | 48.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal EY245B10 | 82.50 € | **78.90 €** | 10.2 % | **5.4 %** | 71.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 - DualSense CHROMA PEARL | 77.50 € | **73.90 €** | 10.5 % | **5.4 %** | 69.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko FRL5474B | 73.50 € | **69.90 €** | 10.7 % | **5.3 %** | 70.00 € | stávame sa najlacnejší |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban (ružový) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| Samsung VG-SCFF75WTBXC | 70.50 € | **67.00 €** | 10.5 % | **5.0 %** | 36.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel reproduktorový KRUGER & MATZ KM0335 3m konekto... | 43.00 € | **39.50 €** | 14.9 % | **5.5 %** | 18.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie motocyklová 12V / 25Ah Vipow | 44.00 € | **40.50 €** | 14.8 % | **5.6 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská koloběžka NILS Fun HLB09 LED tyrkysová | 42.50 € | **39.00 €** | 14.6 % | **5.2 %** | 30.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha GO Chase´n Race | 78.00 € | **74.50 €** | 10.1 % | **5.2 %** | 71.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská koloběžka NILS Fun HLB12 2v1 růžová | 44.00 € | **40.50 €** | 14.4 % | **5.3 %** | 37.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Step na aerobic HMS AS001 | 47.00 € | **43.50 €** | 14.7 % | **6.2 %** | 40.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 3. generáci... | 42.50 € | **39.00 €** | 14.5 % | **5.1 %** | 36.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GameSir K1 Flux wired controller | 45.00 € | **41.50 €** | 14.6 % | **5.7 %** | 40.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75QN85F NEO QLED | 1195.50 € | **1192.00 €** | 10.0 % | **9.7 %** | 1192.05 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 16.00 € | **12.50 €** | 37.5 % | **7.4 %** | 12.79 € | stávame sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 123.00 € | **119.50 €** | 15.0 % | **11.8 %** | 119.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 13.50 € | **10.00 €** | 48.7 % | **10.2 %** | 10.29 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.50 € | **22.00 €** | 36.9 % | **18.1 %** | 22.35 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **31.50 €** | 37.3 % | **23.6 %** | 31.90 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Nikon | 123.00 € | **119.50 €** | 15.0 % | **11.7 %** | 119.90 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 59.50 € | **56.00 €** | 14.0 % | **7.3 %** | 56.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **12.00 €** | 56.3 % | **21.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **19.00 €** | 55.2 % | **31.0 %** | 19.50 € | stávame sa najlacnejší |
| Steba Sendvičovač 3v1 SG 55 | 77.90 € | **74.50 €** | 10.4 % | **5.6 %** | 57.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Fritéza, G1020700 Friggisano, | 77.90 € | **74.50 €** | 10.4 % | **5.6 %** | 62.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Fritéza, G1021200 Friggisano, | 77.90 € | **74.50 €** | 10.4 % | **5.6 %** | 62.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS WiFi AC1900 Halo H50G (2-pack) | 82.90 € | **79.50 €** | 10.0 % | **5.5 %** | 68.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 DualSense Controller Starlight Blue | 78.90 € | **75.50 €** | 10.3 % | **5.5 %** | 65.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG S30GD (LS24D300GAUXEN) | 75.90 € | **72.50 €** | 10.5 % | **5.5 %** | 62.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 DualSense Controller Galactic Purple | 78.90 € | **75.50 €** | 10.3 % | **5.5 %** | 68.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 DualSense Wireless Midnight Black | 78.90 € | **75.50 €** | 10.2 % | **5.5 %** | 69.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 DualSense Wireless Nova Pink | 78.90 € | **75.50 €** | 10.2 % | **5.5 %** | 71.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 DualSense Wireless Volcanic Red | 78.90 € | **75.50 €** | 10.3 % | **5.5 %** | 71.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 - DualSense CHROMA TEAL | 78.90 € | **75.50 €** | 10.3 % | **5.5 %** | 71.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOBOVR S3 PRO Battery Relief Strap for Meta Quest 3 ... | 67.90 € | **64.50 €** | 15.2 % | **9.4 %** | 64.77 € | stávame sa najlacnejší |
| Rowenta RO3725EA | 76.90 € | **73.50 €** | 10.5 % | **5.6 %** | 73.90 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.50 €** | 15.0 % | **9.3 %** | 65.90 € | stávame sa najlacnejší |
| Sonar Flytec V080 s kapacitou 20 000 mAh pre loď na ... | 251.90 € | **248.50 €** | 15.1 % | **13.5 %** | 248.90 € | stávame sa najlacnejší |
| Baterie motocyklová  12V / 14Ah Vipow | 40.90 € | **37.50 €** | 15.1 % | **5.5 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C54 AC1200 Router | 29.90 € | **26.50 €** | 19.6 % | **6.0 %** | 24.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Infračervený teplomer Uni-T UT301A+ | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 36.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Darkflash DK352 Plus computer case + 4 fans (black a... | 40.90 € | **37.50 €** | 15.1 % | **5.5 %** | 36.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 24.90 € | **21.50 €** | 59.2 % | **37.4 %** | 21.52 € | stávame sa najlacnejší |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 51.90 € | **48.50 €** | 15.2 % | **7.6 %** | 48.59 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 23.90 € | **20.50 €** | 54.2 % | **32.3 %** | 20.81 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **9.20 €** | 46.0 % | **7.5 %** | 9.29 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 3z, 1,5m, biela | 9.60 € | **6.40 €** | 59.3 % | **6.2 %** | 6.49 € | stávame sa najlacnejší |
| Rádio EMOS P-600W /E0091/ bílé, DAB+/FM, 3 W, Blueto... | 41.00 € | **37.90 €** | 14.6 % | **6.0 %** | 27.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0129 TV držák (37-70'' 50kg) černý | 38.00 € | **34.90 €** | 14.8 % | **5.4 %** | 29.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vodní fontána EMOS H6102 GoSmart, 2,6 l, šedá, Wi-Fi | 41.00 € | **37.90 €** | 14.6 % | **5.9 %** | 33.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stabilizátor napětí KEMOT SER-1000-S URZ3438-1000-S ... | 39.00 € | **35.90 €** | 14.3 % | **5.3 %** | 33.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gril stolní Teppanyaki NEDIS FCTE110EBK50 | 41.00 € | **37.90 €** | 14.7 % | **6.0 %** | 37.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR Edge - Red | 72.00 € | **68.90 €** | 10.0 % | **5.3 %** | 40.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CARNEO Smart Ring Black velikost 11 | 72.00 € | **68.90 €** | 10.1 % | **5.4 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TV anténa Televes ELLIPSE LTE700 + 12V zdroj Picokom | 115.00 € | **111.90 €** | 8.0 % | **5.1 %** | 92.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER T5s subwoofer černý | 129.00 € | **125.90 €** | 10.0 % | **7.4 %** | 125.95 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer hnědý | 129.00 € | **125.90 €** | 10.0 % | **7.4 %** | 125.95 € | stávame sa najlacnejší |
| HP 44A Black Laser Toner, CF244A | 66.90 € | **63.90 €** | 10.3 % | **5.4 %** | 53.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Medicinbal REBEL ACTIVE RBA-3107-6 35cm 6kg | 37.50 € | **34.50 €** | 15.0 % | **5.8 %** | 13.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FF203130 | 67.90 € | **64.90 €** | 10.4 % | **5.5 %** | 47.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR TWIN - White | 59.90 € | **56.90 €** | 10.7 % | **5.2 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO ARM-2011A S/M | 36.90 € | **33.90 €** | 15.5 % | **6.1 %** | 20.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 117A Yellow Laser Toner, W2072A | 64.50 € | **61.50 €** | 10.6 % | **5.4 %** | 50.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inverto Ultra Quattro IDLT-QTL412 LNB 0,2 dB | 32.50 € | **29.50 €** | 15.9 % | **5.2 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská tříkolová koloběžka NILS Fun HLB15A mint s LED | 36.00 € | **33.00 €** | 14.6 % | **5.0 %** | 23.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkové obušky DBX BUSHIDO | 36.90 € | **33.90 €** | 15.5 % | **6.1 %** | 24.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Outdoor WiFi/LAN IP Camera IMOU Bullet 3 3MP | 37.00 € | **34.00 €** | 14.3 % | **5.0 %** | 28.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka solární 1,8W udržovací | 34.00 € | **31.00 €** | 15.2 % | **5.0 %** | 27.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NS1 Laysara: Summit Kingdom Collector's | 65.50 € | **62.50 €** | 10.8 % | **5.7 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská tříkolová koloběžka NILS Fun HLB1310 s LED ze... | 40.50 € | **37.50 €** | 14.7 % | **6.2 %** | 35.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| INVERTO Pro - Twin Monoblok 23mm LNB 4.3° (A=19,2/B=... | 33.90 € | **30.90 €** | 15.6 % | **5.4 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera D124 BMW M4 GT3 Safety Car | 62.50 € | **59.50 €** | 10.3 % | **5.0 %** | 57.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská tříkolová koloběžka NILS Fun HLB1310 s LED fi... | 40.50 € | **37.50 €** | 14.7 % | **6.2 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií GP B441 + Speed Dock + 4 x AA 2100... | 35.90 € | **32.90 €** | 15.6 % | **5.9 %** | 31.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera Kruger&Matz KM2241-C pro kamerový set Connect... | 35.50 € | **32.50 €** | 15.8 % | **6.0 %** | 31.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar microSDXC, 128 GB (SD3.0) | 37.00 € | **34.00 €** | 14.6 % | **5.3 %** | 33.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **92.50 €** | 10.1 % | **6.7 %** | 92.56 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **259.90 €** | 15.0 % | **13.7 %** | 260.00 € | stávame sa najlacnejší |
| Čistička vzduchu TEESA PURE LIFE P500 | 76.50 € | **73.50 €** | 14.9 % | **10.4 %** | 73.69 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 16.00 € | **13.00 €** | 41.2 % | **14.8 %** | 13.20 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT139B s meraním skutočne... | 41.00 € | **38.00 €** | 14.4 % | **6.0 %** | 38.29 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 13.00 € | **10.00 €** | 45.0 % | **11.5 %** | 10.33 € | stávame sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 60.00 € | **57.00 €** | 39.6 % | **32.6 %** | 57.34 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 41.00 € | **38.00 €** | 48.6 % | **37.7 %** | 38.35 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **179.50 €** | 15.0 % | **13.2 %** | 179.90 € | stávame sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 221.90 € | **219.00 €** | 15.0 % | **13.5 %** | 219.47 € | stávame sa najlacnejší |
| Solight 4z predlžovací prívod, 2m, 3 x 1mm2, biely, ... | 10.50 € | **7.60 €** | 46.2 % | **5.8 %** | 5.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NEDIS SAMP42244WT domovní zesilovač (1x vstup, 4x vý... | 33.90 € | **31.00 €** | 15.0 % | **5.1 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 34.90 € | **32.00 €** | 15.6 % | **6.0 %** | 32.14 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 24.90 € | **22.00 €** | 55.2 % | **37.2 %** | 22.20 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 50.90 € | **48.00 €** | 15.3 % | **8.7 %** | 48.29 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **36.00 €** | 46.1 % | **35.2 %** | 36.47 € | stávame sa najlacnejší |
| Medicinbal REBEL ACTIVE RBA-3107-8 35cm 8kg | 39.90 € | **37.00 €** | 15.2 % | **6.9 %** | 37.49 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 11.50 € | **8.70 €** | 40.4 % | **6.2 %** | 2.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight univerzálny sieťový adaptér 1500mA, stabiliz... | 9.90 € | **7.20 €** | 45.3 % | **5.7 %** | 7.21 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.50 € | **9.80 €** | 53.5 % | **20.4 %** | 9.90 € | stávame sa najlacnejší |
| Prodlužovací přívod do Racku Acar S8 FA, přepěťová o... | 34.50 € | **31.90 €** | 14.9 % | **6.2 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kingston 128GBmicroSDXC U3V30 A2 200MB/s | 52.50 € | **49.90 €** | 10.9 % | **5.4 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 15Ah XTREME/Enerwell bezúdržb... | 32.50 € | **29.90 €** | 15.4 % | **6.2 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 28370-56/RH Steam Genie 2i | 61.50 € | **58.90 €** | 10.1 % | **5.4 %** | 49.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS WiFi AC1300 Halo H30G (2-pack) | 55.50 € | **52.90 €** | 10.3 % | **5.2 %** | 43.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rehabilitační rotoped Trizand 9642 | 29.50 € | **26.90 €** | 15.6 % | **5.4 %** | 17.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ardes 4B03 | 57.50 € | **54.90 €** | 10.4 % | **5.4 %** | 49.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská koloběžka NILS Fun HLB16 Deer | 32.50 € | **29.90 €** | 15.1 % | **5.9 %** | 26.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alarm/siréna chytrá Wi-Fi NEDIS WIFISI10CWT (85 dB) | 32.50 € | **29.90 €** | 15.0 % | **5.8 %** | 27.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor PWM Victron Energy BlueSolar-LCD&U... | 28.50 € | **25.90 €** | 15.8 % | **5.2 %** | 23.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vnútorná IP kamera IMOU Ranger 2C Pro s rozlíšením 5 MP | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 27.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 31.50 € | **28.90 €** | 38.6 % | **27.1 %** | 28.98 € | stávame sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 49.00 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **45.90 €** | 15.0 % | **8.9 %** | 46.00 € | stávame sa najlacnejší |
| SONOFF S61s – externá zásuvka s podporou Matter cez ... | 34.00 € | **31.50 €** | 14.6 % | **6.2 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Medicinbal REBEL ACTIVE RBA-3107-4 35cm 4kg | 32.00 € | **29.50 €** | 14.3 % | **5.3 %** | 11.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH370 | 50.50 € | **48.00 €** | 10.7 % | **5.2 %** | 37.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 903XL Black, T6M15AE | 55.00 € | **52.50 €** | 10.1 % | **5.1 %** | 43.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS P56400S GoSmart detektor oxidu uhelnatého TCS01... | 34.00 € | **31.50 €** | 14.3 % | **5.9 %** | 26.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rehabilitační rotoped Trizand 9641 | 32.00 € | **29.50 €** | 14.5 % | **5.5 %** | 25.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-UNA+, FHD GOOGLE TV STICK | 54.50 € | **52.00 €** | 10.2 % | **5.2 %** | 48.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HD120L fialová | 32.00 € | **29.50 €** | 14.7 % | **5.7 %** | 26.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lexar Fingerprint F35pro USB 3.2 64GB pendrive | 34.00 € | **31.50 €** | 14.8 % | **6.4 %** | 29.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Medicinbal REBEL ACTIVE RBA-3107-5 35cm 5kg | 34.00 € | **31.50 €** | 15.1 % | **6.7 %** | 29.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-6.8   6,8 kg (15... | 32.00 € | **29.50 €** | 14.3 % | **5.3 %** | 28.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-346 venkovní DVB-T2 anténa | 35.00 € | **32.50 €** | 14.6 % | **6.4 %** | 31.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight cestovný adaptér, univerzálny, neuzemnený | 7.30 € | **4.80 €** | 60.4 % | **5.5 %** | 3.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8500 black | 27.50 € | **25.00 €** | 15.9 % | **5.4 %** | 24.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Karta pamäte Lexar High-Performance Silver Plus micr... | 36.00 € | **33.50 €** | 14.4 % | **6.4 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vařič elektrický TEESA TSA0203 | 35.00 € | **32.50 €** | 14.7 % | **6.5 %** | 32.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 52.00 € | **49.50 €** | 14.7 % | **9.2 %** | 49.57 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 81.50 € | **79.00 €** | 14.7 % | **11.2 %** | 79.08 € | stávame sa najlacnejší |
| Tester autobatérií UNI-T UT673A | 36.00 € | **33.50 €** | 14.4 % | **6.5 %** | 33.59 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 48.50 € | **46.00 €** | 15.3 % | **9.4 %** | 46.09 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.50 € | **16.00 €** | 31.6 % | **13.8 %** | 16.17 € | stávame sa najlacnejší |
| Sluchátka Bluetooth KRUGER & MATZ Street 3 Wireless ... | 37.00 € | **34.50 €** | 15.1 % | **7.3 %** | 34.69 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 31.50 € | **29.00 €** | 14.3 % | **5.3 %** | 29.22 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.50 € | **25.00 €** | 34.4 % | **22.2 %** | 25.24 € | stávame sa najlacnejší |
| Masážní přístroj nohou a lýtek Shiatsu, REBEL ACTIVE... | 35.00 € | **32.50 €** | 14.4 % | **6.2 %** | 32.77 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **31.50 €** | 47.3 % | **36.4 %** | 31.79 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **12.00 €** | 37.7 % | **14.0 %** | 12.30 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 60.50 € | **58.00 €** | 15.0 % | **10.3 %** | 58.38 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 28.38 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SER-500 URZ3418 s opožděný... | 33.50 € | **31.00 €** | 14.4 % | **5.9 %** | 31.39 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| Rapoo 8810ME set klávesnice a myši CZ/SK | 56.50 € | **54.00 €** | 10.1 % | **5.2 %** | 54.42 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 45.50 € | **43.00 €** | 15.5 % | **9.1 %** | 43.43 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 20.50 € | **18.00 €** | 32.9 % | **16.7 %** | 18.44 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **12.00 €** | 58.4 % | **31.1 %** | 12.47 € | stávame sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25630 fialová | 47.50 € | **45.00 €** | 15.2 % | **9.1 %** | 45.50 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 93.90 € | **91.50 €** | 15.0 % | **12.1 %** | 91.59 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 96.90 € | **94.50 €** | 15.0 % | **12.1 %** | 94.59 € | stávame sa najlacnejší |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 12.90 € | **10.50 €** | 61.4 % | **31.3 %** | 10.90 € | stávame sa najlacnejší |
| HP 135A Black Laser Toner, W1350A | 56.90 € | **54.50 €** | 10.4 % | **5.7 %** | 42.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight Cube Light Smart Gaming Lamp Spot + podstavec | 32.90 € | **30.50 €** | 15.0 % | **6.6 %** | 20.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pytlové rukavice DBX BUSHIDO RP4 | 29.90 € | **27.50 €** | 15.3 % | **6.0 %** | 18.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-AIR Google TV HDMI TV stick | 53.90 € | **51.50 €** | 10.0 % | **5.1 %** | 42.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| INTERPHONE Quiklox SMQUIKLOXARMORPRO | 51.90 € | **49.50 €** | 10.7 % | **5.5 %** | 42.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Interphone Univerzální držák SMCRAB24PRO | 56.90 € | **54.50 €** | 10.0 % | **5.4 %** | 47.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer AX53 WiFi Router | 55.90 € | **53.50 €** | 10.2 % | **5.5 %** | 47.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS IP-2001ZW /H5011/ GoSmart přenosný ovladač scén... | 26.90 € | **24.50 €** | 15.7 % | **5.3 %** | 20.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní přístroj Shiatsu, REBEL ACTIVE RBA-6009 | 28.90 € | **26.50 €** | 15.6 % | **6.0 %** | 22.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický ohřívač Lumni 2.0 Kaminer 26376 | 30.90 € | **28.50 €** | 15.4 % | **6.4 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Steam Mop 10in1 4164 | 54.90 € | **52.50 €** | 10.2 % | **5.3 %** | 52.78 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **20.50 €** | 38.1 % | **23.6 %** | 20.90 € | stávame sa najlacnejší |
| Solight cestovný adaptér Europe pre cudzincov v SR, ... | 7.00 € | **4.70 €** | 59.0 % | **6.7 %** | 3.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sací hubice 17 cm | 11.09 € | **8.80 €** | 33.8 % | **6.1 %** | 6.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight cestovný adaptér do Švajčiarska, typ J | 6.50 € | **4.30 €** | 59.7 % | **5.6 %** | 2.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight cestovný adaptér do Talianska, typ L | 6.50 € | **4.30 €** | 59.7 % | **5.6 %** | 2.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight cestovný adaptér do Spojených štátov, typ B | 6.50 € | **4.30 €** | 59.7 % | **5.6 %** | 2.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač, 3x 15A, čierny, vypínač | 7.90 € | **5.70 €** | 47.3 % | **6.3 %** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 10.00 € | **7.80 €** | 36.9 % | **6.8 %** | 7.90 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom bi... | 11.50 € | **9.30 €** | 36.1 % | **10.1 %** | 9.37 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.90 €** | 55.6 % | **7.4 %** | 4.99 € | stávame sa najlacnejší |
| Medicinbal REBEL ACTIVE RBA-3107-3 35cm 3kg | 28.00 € | **25.90 €** | 14.6 % | **6.0 %** | 11.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3751i White | 48.00 € | **45.90 €** | 10.2 % | **5.4 %** | 39.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka USB EMOS V05G65 GaN PD univerzální 3.25A (... | 28.00 € | **25.90 €** | 14.6 % | **6.0 %** | 22.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny - stavebnice TechnoLine Modell Kids Clock | 26.00 € | **23.90 €** | 14.5 % | **5.3 %** | 20.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Náhradný filter pre napájadlo Catlink | 27.00 € | **24.90 €** | 14.8 % | **5.9 %** | 22.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6012-GL 110x42... | 28.00 € | **25.90 €** | 14.6 % | **6.0 %** | 24.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prodlužovací přívod do Racku MHPower PDU-FR4K8 | 26.00 € | **23.90 €** | 14.5 % | **5.3 %** | 23.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vaflovač TEESA TSA3224 | 27.00 € | **24.90 €** | 15.0 % | **6.0 %** | 24.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 12W, 900lm, ... | 8.90 € | **6.80 €** | 38.4 % | **5.7 %** | 2.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **14.90 €** | 47.5 % | **29.3 %** | 14.98 € | stávame sa najlacnejší |
| Roborock Q10 PF čistiaci robot (čierny) | 219.00 € | **216.90 €** | 15.0 % | **13.9 %** | 217.00 € | stávame sa najlacnejší |
| Fixed Stylus FIXGRA-BK | 44.50 € | **42.50 €** | 10.5 % | **5.5 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini MyMoka Indukce modrá 6 porcí | 51.50 € | **49.50 €** | 10.1 % | **5.8 %** | 35.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kingston Canvas Select Plus 128GB | 44.50 € | **42.50 €** | 10.5 % | **5.5 %** | 31.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH360 | 46.50 € | **44.50 €** | 10.1 % | **5.3 %** | 33.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH560 | 42.50 € | **40.50 €** | 11.0 % | **5.7 %** | 31.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kingston Canvas Select Plus/Micro 256GB | 47.90 € | **45.90 €** | 10.1 % | **5.5 %** | 37.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH350 | 46.50 € | **44.50 €** | 10.1 % | **5.3 %** | 37.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový ovládač GameSir Nova 2 Lite (sivý) | 29.50 € | **27.50 €** | 14.5 % | **6.8 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2863E1 | 41.50 € | **39.50 €** | 11.0 % | **5.7 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka EMOS AlphaQ3, 20 000 mAh, 22,5 W, černá | 23.90 € | **21.90 €** | 15.7 % | **6.0 %** | 15.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 206/01 | 41.90 € | **39.90 €** | 10.3 % | **5.0 %** | 33.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Akupresurní podložka s polštářem REBEL ACTIVE RBA-60... | 23.50 € | **21.50 €** | 15.7 % | **5.8 %** | 15.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bialetti Set Mini Express "R" Kandinsky | 39.50 € | **37.50 €** | 11.2 % | **5.6 %** | 32.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušička ovoce TEESA TSA3033  300W | 26.50 € | **24.50 €** | 15.4 % | **6.7 %** | 19.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie motocyklová 12V /  7Ah Vipow | 23.50 € | **21.50 €** | 16.1 % | **6.2 %** | 16.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vileda Ultramat XL TURBO | 44.50 € | **42.50 €** | 10.4 % | **5.5 %** | 37.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| COMPASS 09154 hustilka nožní s manometrem dvoupístov... | 24.50 € | **22.50 €** | 16.1 % | **6.7 %** | 18.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní přístroj Rebel Active Shiatsu RBA-6009-A na ... | 28.50 € | **26.50 €** | 14.2 % | **6.2 %** | 22.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Krbový stojan na dřevo Kaminer 24628 | 25.00 € | **23.00 €** | 14.2 % | **5.1 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač vlhkosti dreva FNIRSI WHD-02 s hrotmi | 23.50 € | **21.50 €** | 15.6 % | **5.7 %** | 18.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS EM-4405G 5G/LTE700 zesilovač / VHF / UHF | 23.50 € | **21.50 €** | 15.4 % | **5.6 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bialetti Set Mini Express "R" Magrite | 39.50 € | **37.50 €** | 11.2 % | **5.6 %** | 34.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka EMOS BetaQ 20, 20 000 mAh, 22,5 W, černá | 25.50 € | **23.50 €** | 15.7 % | **6.6 %** | 20.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gel Blaster Surge | 40.50 € | **38.50 €** | 10.5 % | **5.0 %** | 35.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Předzesilovač anténní Emme Esse 83211TG, na stožár, ... | 25.50 € | **23.50 €** | 14.4 % | **5.4 %** | 21.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sekera SAW 4v1 36 cm | 22.50 € | **20.50 €** | 15.4 % | **5.2 %** | 18.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0211 | 26.50 € | **24.50 €** | 15.6 % | **6.9 %** | 23.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HD026 růžovo-modrá | 26.50 € | **24.50 €** | 15.5 % | **6.8 %** | 23.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Wattmetr a měřič spotřeby elektrické energie SMART n... | 26.50 € | **24.50 €** | 15.6 % | **6.9 %** | 24.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AM - 187 zesilovač / UHF-BIII-DAB-FM / LTE700 | 26.50 € | **24.50 €** | 15.7 % | **7.0 %** | 24.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diagnostic Scanner OBD2 Ancel AD310/AC103 | 24.50 € | **22.50 €** | 16.1 % | **6.6 %** | 22.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 25.90 € | **23.90 €** | 15.0 % | **6.1 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel HDMI-HDMI 15m Kruger&Matz Basic | 23.50 € | **21.50 €** | 15.7 % | **5.8 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **22.90 €** | 59.2 % | **46.4 %** | 22.98 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro Zenless Zone Zero Edition (sivý) | 122.00 € | **120.00 €** | 15.0 % | **13.1 %** | 120.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 7.90 € | **5.90 €** | 48.7 % | **11.0 %** | 5.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, biele, 13W, ... | 8.40 € | **6.40 €** | 38.0 % | **5.1 %** | 6.49 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 13W, 9... | 8.40 € | **6.40 €** | 38.0 % | **5.1 %** | 6.49 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 191.00 € | **189.00 €** | 6.7 % | **5.6 %** | 189.10 € | stávame sa najlacnejší |
| Beko Mezikus PCSKM | 59.90 € | **57.90 €** | 10.3 % | **6.6 %** | 58.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKW | 59.90 € | **57.90 €** | 10.3 % | **6.6 %** | 58.00 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **13.50 €** | 49.3 % | **30.0 %** | 13.61 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 14.50 € | **12.50 €** | 47.4 % | **27.0 %** | 12.69 € | stávame sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 49.50 € | **47.50 €** | 15.3 % | **10.7 %** | 47.69 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 29.50 € | **27.50 €** | 32.6 % | **23.6 %** | 27.73 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 37.50 € | **35.50 €** | 15.6 % | **9.4 %** | 35.79 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 160.50 € | **158.50 €** | 10.1 % | **8.7 %** | 158.80 € | stávame sa najlacnejší |
| Kettlebell litinový nastavitelný 9 kg REBEL ACTIVE R... | 46.50 € | **44.50 €** | 15.6 % | **10.6 %** | 44.82 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 206.00 € | **204.00 €** | 14.9 % | **13.8 %** | 204.34 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **37.50 €** | 15.3 % | **9.4 %** | 37.85 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.50 €** | 55.4 % | **42.7 %** | 22.87 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 16.50 € | **14.50 €** | 24.0 % | **9.0 %** | 14.87 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 30.00 € | **28.00 €** | 14.3 % | **6.7 %** | 28.38 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 76.50 € | **74.50 €** | 15.4 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 37.50 € | **35.50 €** | 39.3 % | **31.9 %** | 35.90 € | stávame sa najlacnejší |
| Ovládacia páka lietadla MOZA RACING MHG | 111.50 € | **109.50 €** | 14.9 % | **12.8 %** | 109.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **34.00 €** | 14.6 % | **8.2 %** | 34.45 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **34.00 €** | 15.0 % | **8.6 %** | 34.45 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 116.90 € | **115.00 €** | 15.1 % | **13.2 %** | 115.24 € | stávame sa najlacnejší |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 196.90 € | **195.00 €** | 15.0 % | **13.9 %** | 195.27 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **110.00 €** | 15.0 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 3 zásuvky, 16A/3680W,... | 6.70 € | **4.80 €** | 48.0 % | **6.0 %** | 4.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.00 € | **6.10 €** | 48.8 % | **13.5 %** | 6.19 € | stávame sa najlacnejší |
| Inteligentná zásuvka Sonoff S60TPF WiFi (2 balenia) | 21.90 € | **20.00 €** | 15.1 % | **5.1 %** | 9.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Obdelníkový stropní držák na boxovací pytel do 150 k... | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 13.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rapoo E9270p bezdrátová klávesnice černá | 37.90 € | **36.00 €** | 10.8 % | **5.3 %** | 30.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini Infinity černá 6 porcí | 36.90 € | **35.00 €** | 10.8 % | **5.1 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lapa na kopy DBX BUSHIDO P1 | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 17.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT133A ručný digitálny multimeter | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 18.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **21.00 €** | 14.8 % | **5.3 %** | 20.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 51.90 € | **50.00 €** | 15.2 % | **10.9 %** | 50.09 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 29.90 € | **28.00 €** | 15.3 % | **8.0 %** | 28.38 € | stávame sa najlacnejší |
| Skládací síť REBEL ACTIVE pro badminton a další sporty | 30.90 € | **29.00 €** | 15.6 % | **8.5 %** | 29.42 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 30.90 € | **29.00 €** | 14.8 % | **7.8 %** | 29.50 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý, vypínač | 6.50 € | **4.70 €** | 47.2 % | **6.4 %** | 3.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 6.60 € | **4.80 €** | 49.9 % | **9.0 %** | 4.87 € | stávame sa najlacnejší |
| Solight nočné LED RGB svetielko so svetelným senzoro... | 5.50 € | **3.80 €** | 54.7 % | **6.9 %** | 3.89 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 6.50 € | **4.80 €** | 59.7 % | **17.9 %** | 4.90 € | stávame sa najlacnejší |
| APPLE AirTag Lokátor | 34.50 € | **32.90 €** | 10.5 % | **5.4 %** | 19.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Stoj. Magsafe 3v1, 15+15+5W, černý | 34.50 € | **32.90 €** | 10.8 % | **5.6 %** | 22.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí baterie GP ReCyko 950 AAA (HR03), 6kusů --C... | 20.50 € | **18.90 €** | 15.0 % | **6.0 %** | 9.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament ANYCUBIC IPHPFFW-101 PLA-CF 1 kg (biela far... | 18.50 € | **16.90 €** | 15.1 % | **5.1 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kingston Canvas Select Plus/Micro 128GB | 30.50 € | **28.90 €** | 11.0 % | **5.2 %** | 21.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WHCH520B.CE7 černá | 37.50 € | **35.90 €** | 10.3 % | **5.6 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha FIRST DC Batweels 2.9 | 31.50 € | **29.90 €** | 11.3 % | **5.6 %** | 23.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 301 Tri-colour, CH562EE | 31.50 € | **29.90 €** | 10.6 % | **5.0 %** | 23.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MR70X WiFi Dual Band Router | 36.50 € | **34.90 €** | 10.1 % | **5.3 %** | 28.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UNI ME 2153 vařič Solo | 31.50 € | **29.90 €** | 11.6 % | **6.0 %** | 24.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH160 | 26.50 € | **24.90 €** | 12.0 % | **5.3 %** | 20.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bedýnka na step REBEL ACTIVE RBA-3225-BL | 21.50 € | **19.90 €** | 14.1 % | **5.6 %** | 15.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skrinka Darkflash B351 | 18.50 € | **16.90 €** | 15.2 % | **5.2 %** | 12.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Latexová posilovací guma REBEL RBA-3000-6 Power Band... | 20.50 € | **18.90 €** | 15.0 % | **6.0 %** | 14.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0906.1 20000 mAh Li-pol 2... | 21.50 € | **19.90 €** | 14.1 % | **5.6 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brousek na nože Ruhhy 23763 - 2 kameny + příslušenství | 21.50 € | **19.90 €** | 14.1 % | **5.6 %** | 15.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NS1 Laysara: Summit Kingdom | 38.50 € | **36.90 €** | 10.7 % | **6.1 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH150 | 26.50 € | **24.90 €** | 12.0 % | **5.3 %** | 20.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hasicí sprej SAFE 750 MAX | 21.50 € | **19.90 €** | 14.1 % | **5.6 %** | 15.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SmartLife chytrá DUO zásuvka NEDIS WIFIP141EWT /Wi-F... | 20.50 € | **18.90 €** | 14.9 % | **5.9 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt pro SG S26+ FIXVM-1705-BK | 34.50 € | **32.90 €** | 10.7 % | **5.6 %** | 29.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK UH720 USB 3.0 7-Port Hub | 37.50 € | **35.90 €** | 10.3 % | **5.6 %** | 32.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlonabíjací kábel SDC DJI Power pre AIR 3 | 23.50 € | **21.90 €** | 14.7 % | **6.9 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Impregnace na outdoorové oděvy INPRODUCTS 200ml | 18.50 € | **16.90 €** | 15.1 % | **5.1 %** | 14.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4104 | 20.50 € | **18.90 €** | 15.0 % | **6.0 %** | 16.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Latexová posilovací guma REBEL RBA-3000-7 Power Band... | 21.50 € | **19.90 €** | 14.1 % | **5.6 %** | 17.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy OFFICE K30 Black | 33.50 € | **31.90 €** | 11.3 % | **6.0 %** | 29.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stan plážový Trizand 20974 samorozkládací | 18.50 € | **16.90 €** | 15.3 % | **5.4 %** | 14.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera Adventní kalendář R/C Offroad | 31.50 € | **29.90 €** | 11.2 % | **5.6 %** | 28.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 28010-56/RH | 30.50 € | **28.90 €** | 10.8 % | **5.0 %** | 27.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha FIRST Spidey Web Spin | 31.50 € | **29.90 €** | 11.2 % | **5.6 %** | 28.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GameSir-T4n Lite wireless controller (purple) | 22.50 € | **20.90 €** | 14.6 % | **6.5 %** | 19.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filtre ND (16/64/256) pre DJI Mini 4 Pro | 23.50 € | **21.90 €** | 14.3 % | **6.5 %** | 20.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1013 | 21.50 € | **19.90 €** | 15.4 % | **6.8 %** | 19.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor plynu Ermenrich NG20 Fialový | 21.50 € | **19.90 €** | 15.5 % | **6.9 %** | 19.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Akupresurní podložka s polštářem REBEL ACTIVE RBA-60... | 21.50 € | **19.90 €** | 14.1 % | **5.6 %** | 19.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bedýnka na step REBEL ACTIVE RBA-3225-PU | 20.50 € | **18.90 €** | 15.0 % | **6.0 %** | 18.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT133B ručný digitálny multimeter | 19.50 € | **17.90 €** | 14.9 % | **5.5 %** | 17.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AI - 133 linkový zesilovač se 2 výstupy / G=24dB | 20.50 € | **18.90 €** | 15.0 % | **6.0 %** | 18.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.90 €** | 15.2 % | **9.7 %** | 31.96 € | stávame sa najlacnejší |
| Tester napätia a spojitosti Uni-T UT15B | 28.50 € | **26.90 €** | 15.0 % | **8.5 %** | 27.00 € | stávame sa najlacnejší |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 20.50 € | **18.90 €** | 13.9 % | **5.0 %** | 19.00 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creality (Purple) | 17.50 € | **15.90 €** | 16.2 % | **5.6 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-Silk PLA Filament Creality (Red Copper) | 17.50 € | **15.90 €** | 16.2 % | **5.6 %** | 14.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Infračervený teplomer Uni-T UT300A+ | 16.50 € | **14.90 €** | 16.3 % | **5.1 %** | 13.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 17.50 € | **15.90 €** | 52.0 % | **38.1 %** | 15.98 € | stávame sa najlacnejší |
| Cyklotaška na zadní nosič | 22.00 € | **20.50 €** | 13.9 % | **6.1 %** | 4.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXPFIT2-1502-BK | 31.00 € | **29.50 €** | 10.3 % | **5.0 %** | 17.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Pack 6 MAXTRApro PO 2024 | 39.00 € | **37.50 €** | 10.1 % | **5.8 %** | 26.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rozpěrný kruh na řetěz boxovacího pytle DBX BUSHIDO R40 | 25.00 € | **23.50 €** | 13.9 % | **7.1 %** | 12.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 21.00 € | **19.50 €** | 14.6 % | **6.4 %** | 9.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gel Blaster Gellet Depot | 24.50 € | **23.00 €** | 12.2 % | **5.3 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Patrový sušák of Classic Tower | 33.50 € | **32.00 €** | 10.1 % | **5.2 %** | 24.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Obdelníkový stropní držák na boxovací pytel do 150 k... | 21.00 € | **19.50 €** | 14.4 % | **6.3 %** | 13.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbank Baseus Compact 5000mAh, 20W, USB-C (biały) | 20.00 € | **18.50 €** | 15.2 % | **6.6 %** | 13.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Latexová posilovací guma REBEL RBA-3000-5 Power Band... | 16.50 € | **15.00 €** | 15.7 % | **5.2 %** | 10.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sprcha kempingová Trizand 8877 | 21.00 € | **19.50 €** | 14.6 % | **6.4 %** | 15.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lopatka skládací multifunkční 16v1 Trizand 22640 | 16.50 € | **15.00 €** | 16.1 % | **5.6 %** | 11.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Pods Pro s ANC FIXPDS-P-BK | 39.00 € | **37.50 €** | 9.9 % | **5.6 %** | 34.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální fotoaparát Kruzzel AC22295 modrý | 22.00 € | **20.50 €** | 15.2 % | **7.3 %** | 17.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální fotoaparát Kruzzel AC22296 růžový | 22.00 € | **20.50 €** | 15.2 % | **7.3 %** | 17.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové vodné čerpadlo Petkit Eversweet FFT1 (UVC... | 20.00 € | **18.50 €** | 13.9 % | **5.3 %** | 15.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Převodník SCART na HDMI | 16.50 € | **15.00 €** | 16.1 % | **5.6 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vnútorná IP kamera IMOU IPC-C32EP | 23.00 € | **21.50 €** | 14.2 % | **6.7 %** | 19.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bedýnka na step aerobik REBEL ACTIVE RBA-3227-BK, 3 ... | 19.00 € | **17.50 €** | 14.8 % | **5.7 %** | 15.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistič mléčných cest do kávovaru AQUALOGIS Latteo 1l | 16.50 € | **15.00 €** | 16.1 % | **5.6 %** | 13.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 800 AAA ... | 17.50 € | **16.00 €** | 14.9 % | **5.1 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lezecké chyty kameny Kruzzel 25395 22 ks | 20.00 € | **18.50 €** | 13.9 % | **5.3 %** | 17.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SmartLife chytrá zásuvka NEDIS WIFIP151EWT /Wi-Fi/mě... | 25.00 € | **23.50 €** | 14.0 % | **7.2 %** | 22.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termotaška Cattara BIG BAG 44l šedá | 21.00 € | **19.50 €** | 14.6 % | **6.4 %** | 18.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík analogový TechnoLine Modell DGW | 21.00 € | **19.50 €** | 14.2 % | **6.0 %** | 18.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní sada REBEL ACTIVE RBA-3054-S6, černomodrá, m... | 16.50 € | **15.00 €** | 15.7 % | **5.2 %** | 14.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezkontaktný tachometer UNI-T UT373 | 20.00 € | **18.50 €** | 14.9 % | **6.3 %** | 18.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Viacúčelový čistič na podlahy MOVA P10 Ultra, P10 Pr... | 22.00 € | **20.50 €** | 15.2 % | **7.3 %** | 20.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 5.50 € | **4.00 €** | 53.1 % | **11.4 %** | 4.01 € | stávame sa najlacnejší |
| Pikniková deka TEESA TSA8904-1 200x300 cm červená ko... | 17.50 € | **16.00 €** | 14.9 % | **5.1 %** | 16.02 € | stávame sa najlacnejší |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 122.50 € | **121.00 €** | 14.9 % | **13.5 %** | 121.03 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.00 € | **14.50 €** | 31.0 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 18.50 € | **17.00 €** | 26.6 % | **16.3 %** | 17.13 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.50 €** | 50.1 % | **37.6 %** | 16.64 € | stávame sa najlacnejší |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.50 € | **126.00 €** | 10.1 % | **8.8 %** | 126.15 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 31.50 € | **30.00 €** | 29.7 % | **23.6 %** | 30.17 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| Uni-T UT210A Mini digitálny klešťový multimeter | 21.50 € | **20.00 €** | 14.2 % | **6.3 %** | 20.19 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 59.50 € | **58.00 €** | 14.7 % | **11.8 %** | 58.19 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 16.50 € | **15.00 €** | 36.3 % | **23.9 %** | 15.19 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 42.50 € | **41.00 €** | 11.3 % | **7.4 %** | 41.20 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 101.50 € | **100.00 €** | 14.9 % | **13.2 %** | 100.21 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 29.50 € | **28.00 €** | 42.0 % | **34.8 %** | 28.29 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 23.50 € | **22.00 €** | 16.1 % | **8.7 %** | 22.32 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 16.00 € | **14.50 €** | 49.9 % | **35.8 %** | 14.82 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.50 € | **22.00 €** | 15.1 % | **7.7 %** | 22.36 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 12.00 € | **10.50 €** | 47.4 % | **29.0 %** | 10.86 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.50 €** | 48.7 % | **33.8 %** | 13.90 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **27.50 €** | 47.5 % | **39.9 %** | 27.90 € | stávame sa najlacnejší |
| Russell Hobbs 26380-70 | 40.00 € | **38.50 €** | 10.2 % | **6.0 %** | 38.90 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.90 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.90 € | stávame sa najlacnejší |
| GameSir-T4n Lite wireless controller (white) | 22.00 € | **20.50 €** | 15.2 % | **7.3 %** | 20.90 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.90 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **27.00 €** | 15.7 % | **9.6 %** | 27.49 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.50 € | **26.00 €** | 15.6 % | **9.3 %** | 26.49 € | stávame sa najlacnejší |
| Niceboy PILOT Q7 2K | 49.50 € | **48.00 €** | 10.0 % | **6.7 %** | 48.50 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **15.00 €** | 39.3 % | **26.6 %** | 15.50 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 28.50 € | **27.00 €** | 20.1 % | **13.7 %** | 27.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **32.00 €** | 14.6 % | **9.5 %** | 32.50 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 22.50 € | **21.00 €** | 43.5 % | **33.9 %** | 21.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 16.50 € | **15.00 €** | 43.0 % | **30.0 %** | 15.50 € | stávame sa najlacnejší |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 75.50 € | **74.00 €** | 15.1 % | **12.8 %** | 74.50 € | stávame sa najlacnejší |
| ETA 518091010 | 13.99 € | **12.50 €** | 27.7 % | **14.1 %** | 12.60 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 84.90 € | **83.50 €** | 15.0 % | **13.1 %** | 83.69 € | stávame sa najlacnejší |
| SONOFF NSPanel Pro 120 Smart Control Panel Matter Wi... | 112.90 € | **111.50 €** | 15.1 % | **13.7 %** | 111.86 € | stávame sa najlacnejší |
| Tefal FW402HE0 | 130.90 € | **129.50 €** | 10.3 % | **9.1 %** | 129.90 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 190.90 € | **189.50 €** | 7.0 % | **6.2 %** | 189.90 € | stávame sa najlacnejší |
| Nabíječka USB EMOS V03G35 GaN PD univerzální 3A (35W... | 15.90 € | **14.50 €** | 15.7 % | **5.5 %** | 13.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NEDIS ZBRC10WT chytré dálkové ovládání ZigBee | 15.90 € | **14.50 €** | 15.6 % | **5.4 %** | 14.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 5.70 € | **4.30 €** | 48.1 % | **11.7 %** | 4.39 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **13.50 €** | 51.8 % | **37.5 %** | 13.63 € | stávame sa najlacnejší |
| Kingston USB 3.2 (gen 1) DT Kyson 128GB | 27.90 € | **26.50 €** | 11.0 % | **5.5 %** | 9.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GameSir Nova Lite 2 Luminous White | 34.90 € | **33.50 €** | 10.4 % | **6.0 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed nabíječka GaN 65W FIXCG65R-2C-WH | 31.90 € | **30.50 €** | 10.2 % | **5.4 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka IMOU CE2P, balenie po 2 ks | 19.90 € | **18.50 €** | 15.2 % | **7.1 %** | 9.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH460 | 34.90 € | **33.50 €** | 10.6 % | **6.2 %** | 27.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerton chytrý prsten Black velikost 8 | 32.90 € | **31.50 €** | 10.3 % | **5.6 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kingston Canvas Select Plus 64GB | 25.90 € | **24.50 €** | 11.4 % | **5.3 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbank Baseus Compact 5000mAh, 20W, USB-C (black) | 19.90 € | **18.50 €** | 14.9 % | **6.8 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo rádio DAB+/FM PB01 | 29.90 € | **28.50 €** | 11.1 % | **5.9 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 903 Black, T6L99AE | 24.90 € | **23.50 €** | 11.7 % | **5.4 %** | 20.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo P100(2-pack)WiFi zásuvka | 24.90 € | **23.50 €** | 11.4 % | **5.1 %** | 20.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerton chytrý prsten Gold velikost 10 | 32.90 € | **31.50 €** | 10.3 % | **5.6 %** | 28.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stan plážový Trizand 10179 samorozkládací | 18.90 € | **17.50 €** | 16.0 % | **7.4 %** | 15.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester USB 2w1 FNIRSI FNAC-28 USB-C USB-A | 19.90 € | **18.50 €** | 14.7 % | **6.7 %** | 16.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerton chytrý prsten Gold velikost 11 | 32.90 € | **31.50 €** | 10.3 % | **5.6 %** | 29.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINI-ZBRBS-E Inteligentný roletový spínač ZigBee | 17.90 € | **16.50 €** | 15.6 % | **6.5 %** | 15.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhelnatého KD-218B REBEL RB-0900 | 16.90 € | **15.50 €** | 16.2 % | **6.6 %** | 14.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Mop na podlahu PICO SPRAY | 24.90 € | **23.50 €** | 11.6 % | **5.3 %** | 23.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT120C vreckový digitálny multimeter | 19.90 € | **18.50 €** | 15.0 % | **6.9 %** | 18.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF M5-3C-80W WiFi Matter smart wall switch (3-ch... | 18.90 € | **17.50 €** | 15.7 % | **7.1 %** | 17.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BELKIN SCREENFORCE™ UltraGlass2 OVA134zz | 29.90 € | **28.50 €** | 11.3 % | **6.0 %** | 28.59 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 18.90 € | **17.50 €** | 46.6 % | **35.8 %** | 17.64 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek, vypínač | 4.60 € | **3.30 €** | 49.0 % | **6.9 %** | 3.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 2m | 5.00 € | **3.70 €** | 43.6 % | **6.3 %** | 3.71 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **3.80 €** | 54.1 % | **14.8 %** | 3.90 € | stávame sa najlacnejší |
| MAXXO DH 919 Extra Tea | 13.69 € | **12.50 €** | 36.6 % | **24.7 %** | 12.57 € | stávame sa najlacnejší |
| Yeelight LED senzorové svetlo do šuplíka (4ks) | 18.00 € | **16.90 €** | 14.4 % | **7.4 %** | 11.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SmartLife chytrá zásuvka NEDIS WIFIPO130EWT /Wi-Fi/m... | 18.00 € | **16.90 €** | 14.2 % | **7.2 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí baterie GP ReCyko 2100 AA (HR6), 6kusů --CE... | 18.00 € | **16.90 €** | 14.4 % | **7.4 %** | 16.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor párov vodičov UNI-T UT682D | 18.00 € | **16.90 €** | 13.9 % | **6.9 %** | 16.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 25.00 € | **23.90 €** | 38.0 % | **31.9 %** | 23.96 € | stávame sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **57.90 €** | 14.9 % | **12.8 %** | 57.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 18.00 € | stávame sa najlacnejší |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 28.00 € | **26.90 €** | 14.1 % | **9.6 %** | 27.00 € | stávame sa najlacnejší |
| Solight náhradné trubičky pro alkohol tester Solight... | 5.20 € | **4.10 €** | 40.0 % | **10.4 %** | 4.19 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.90 €** | 39.2 % | **8.6 %** | 3.96 € | stávame sa najlacnejší |
| Baterie motocyklová  12V /  5Ah Vipow | 17.00 € | **15.90 €** | 13.7 % | **6.3 %** | 7.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistič koženého tréninkového vybavení DBX BUSHIDO Le... | 16.00 € | **14.90 €** | 14.7 % | **6.8 %** | 10.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termotaška Compass na opěrku hlavy 5l | 15.00 € | **13.90 €** | 13.3 % | **5.0 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stan plážový Trizand 20975 | 17.00 € | **15.90 €** | 15.1 % | **7.6 %** | 12.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Svítilna na kolo EMOS P3923 LED přední + zadní nabíj... | 17.00 € | **15.90 €** | 14.2 % | **6.8 %** | 14.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nákupní skládací košík termoizolační - zelený s květy | 15.00 € | **13.90 €** | 13.8 % | **5.4 %** | 12.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet HAPPY GREEN Pink 2l | 13.00 € | **11.90 €** | 15.0 % | **5.3 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný ZigBee LCD senzor teploty a vlhkosti So... | 13.00 € | **11.90 €** | 14.8 % | **5.0 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| INVERTO Ultra - Single IDLT-SNL412 - 0,2 dB | 14.00 € | **12.90 €** | 14.6 % | **5.6 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Akupresurní podložka s polštářem REBEL ACTIVE RBA-60... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 12.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný WiFi spínač na monitorovanie teploty a ... | 16.00 € | **14.90 €** | 15.1 % | **7.2 %** | 14.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.20 €** | 59.1 % | **35.1 %** | 6.24 € | stávame sa najlacnejší |
| CANON PG-40BK Black | 19.99 € | **18.90 €** | 12.5 % | **6.3 %** | 16.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MW493ZM/A 60W USB-C Char.Cable(1m) | 23.00 € | **22.00 €** | 10.1 % | **5.3 %** | 9.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HRA XSX Wild Hearts | 19.90 € | **18.90 €** | 11.3 % | **5.8 %** | 7.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 301 Black, CH561EE | 25.50 € | **24.50 €** | 10.2 % | **5.9 %** | 18.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič kloubů s omotávkou DBX BUSHIDO GM-2 | 13.50 € | **12.50 €** | 16.9 % | **8.2 %** | 6.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0184 | 12.50 € | **11.50 €** | 14.2 % | **5.1 %** | 5.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kingston USB 3.2 (gen 1) DT Kyson 64GB | 19.50 € | **18.50 €** | 12.1 % | **6.4 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Odnímatelné pouzdro mob FIXBIB2-BK | 25.50 € | **24.50 €** | 10.2 % | **5.9 %** | 18.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zástrčka WiFi Gosund SP111 3680W 16A, Tuya | 18.50 € | **17.50 €** | 14.0 % | **7.9 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Podložka na cvičení, jógu a fitness 0,6 cm Rebel Act... | 14.50 € | **13.50 €** | 16.3 % | **8.2 %** | 8.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics BIG BÍLÝ dálkový ovladač originální | 16.50 € | **15.50 €** | 15.3 % | **8.4 %** | 10.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kingston USB 3.2 DT Exodia žlutá 128GB | 15.50 € | **14.50 €** | 12.6 % | **5.3 %** | 9.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kingston USB 3.2 DT Exodia M 128GB | 15.50 € | **14.50 €** | 12.6 % | **5.3 %** | 9.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie nabíjecí Li-Ion 18650 3,7V/3500mAh XTAR | 14.50 € | **13.50 €** | 13.9 % | **6.0 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič kloubů s omotávkou DBX BUSHIDO GM-1 | 12.90 € | **11.90 €** | 15.6 % | **6.7 %** | 7.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotografický dáždnik GODOX UB-008-40 | 12.90 € | **11.90 €** | 16.8 % | **7.7 %** | 7.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 302 Black, F6U66AE | 23.50 € | **22.50 €** | 11.9 % | **7.1 %** | 18.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Podložka na cvičení, jógu a fitness 0,6 cm Rebel Act... | 12.90 € | **11.90 €** | 15.1 % | **6.2 %** | 8.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Podložka na cvičení, jógu a fitness 0,6 cm Rebel Act... | 12.90 € | **11.90 €** | 15.1 % | **6.2 %** | 8.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 308 Black, 7FP21UE | 21.50 € | **20.50 €** | 10.6 % | **5.5 %** | 17.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 651 Tri-colour, C2P11AE | 23.50 € | **22.50 €** | 10.5 % | **5.8 %** | 19.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro A iP 17 FIXPUNM2-1600-PI | 20.90 € | **19.90 €** | 11.7 % | **6.4 %** | 16.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 652 Black, F6V25AE | 19.90 € | **18.90 €** | 12.2 % | **6.6 %** | 15.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vileda Total Reflect potah | 19.90 € | **18.90 €** | 11.5 % | **5.9 %** | 15.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka USB EMOS V04G45 GaN PD univerzální 3A (45W... | 17.50 € | **16.50 €** | 14.6 % | **8.1 %** | 13.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB WiFi adaptér 2,4GHz AB (MT7601U) 150Mbps s antén... | 17.50 € | **16.50 €** | 14.4 % | **7.8 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fujifilm INSTAX MINI EU 2 GLOSSY 10X2/PK | 21.50 € | **20.50 €** | 10.9 % | **5.8 %** | 17.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná žiarovka IMOU CL2B | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 7.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini Kaffettiera Brillant červená 3 p | 19.50 € | **18.50 €** | 12.7 % | **6.9 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINI-ZB2GSL-EDvojkanálový nástenný spínač Zig... | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DGS-108GL) | 24.90 € | **23.90 €** | 10.0 % | **5.6 %** | 21.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro A iP 17PM FIXPUNM2-1603-BK | 20.90 € | **19.90 €** | 11.7 % | **6.4 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| IMOU CE2P Smart Plug | 12.90 € | **11.90 €** | 16.1 % | **7.1 %** | 9.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lezecké chyty kameny Kruzzel 18533 10 ks | 12.50 € | **11.50 €** | 16.9 % | **7.6 %** | 9.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BLOW ASF02 Indikátor satelitního signálu | 10.50 € | **9.50 €** | 17.1 % | **5.9 %** | 7.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysílač DO Homatics BÍLÝ originální | 13.50 € | **12.50 €** | 14.8 % | **6.3 %** | 10.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUGER & MATZ XT50 Držák telefonu na kolo 4v1 se sví... | 13.50 € | **12.50 €** | 15.3 % | **6.8 %** | 10.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák tab/telefonu Relax,FIXRLX-BK | 22.90 € | **21.90 €** | 11.8 % | **6.9 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí baterie GP Recharge 2100 AA (HR6), 6kusů --... | 14.50 € | **13.50 €** | 14.3 % | **6.5 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-595 Black | 20.50 € | **19.50 €** | 11.7 % | **6.3 %** | 17.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel HDMI-HDMI 2.1 8K 3 m Kruger&Matz | 12.00 € | **11.00 €** | 14.9 % | **5.3 %** | 9.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament ANYCUBIC IPHPLGE-107 PLA, 1 kg (sivý) | 12.00 € | **11.00 €** | 14.9 % | **5.3 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Black) | 15.50 € | **14.50 €** | 14.6 % | **7.2 %** | 12.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-560BK Black | 19.50 € | **18.50 €** | 11.7 % | **6.0 %** | 16.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-540BK Black | 18.90 € | **17.90 €** | 11.6 % | **5.7 %** | 16.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set PowerClean M+náhr. zdarma | 20.50 € | **19.50 €** | 10.7 % | **5.3 %** | 17.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotaška nad rám oboustranná + PHONE | 12.00 € | **11.00 €** | 14.8 % | **5.2 %** | 9.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-BK | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-541 Color | 23.50 € | **22.50 €** | 11.9 % | **7.1 %** | 20.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kabel USB-C 2.0 / Lighting MFi, EMOS SM7015W, 1 m, bílý | 13.50 € | **12.50 €** | 15.2 % | **6.6 %** | 10.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vodítko pre psa PetKit Go Free 4,5 m | 12.90 € | **11.90 €** | 16.5 % | **7.5 %** | 10.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Svítilna na kolo LED COB, SET přední + zadní EMOS P3922 | 11.90 € | **10.90 €** | 15.2 % | **5.5 %** | 9.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo EMOS E00387 | 11.90 € | **10.90 €** | 17.0 % | **7.2 %** | 9.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Red) | 15.50 € | **14.50 €** | 14.7 % | **7.3 %** | 13.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Torras Ostand R Fusion Case for iPhone 16 Pro (Black) | 14.50 € | **13.50 €** | 14.5 % | **6.6 %** | 12.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotaška nad rám oboustranná + pouzdro na telefon ... | 12.90 € | **11.90 €** | 15.9 % | **6.9 %** | 10.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čtvercový stropní držák na boxovací pytel do 50 kg D... | 11.90 € | **10.90 €** | 14.9 % | **5.2 %** | 9.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guma posilovací REBEL ACTIVE RBA-3000-S3 Latexová sa... | 11.50 € | **10.50 €** | 15.9 % | **5.8 %** | 9.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (modrý) | 11.50 € | **10.50 €** | 15.7 % | **5.7 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (červený) | 11.50 € | **10.50 €** | 15.6 % | **5.5 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluneční brýle polarizační REBEL ACTIVE RBA-7101-RB | 11.50 € | **10.50 €** | 15.9 % | **5.8 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0026 | 20.90 € | **19.90 €** | 11.1 % | **5.7 %** | 18.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI Síť Nab.65W, 2xUSB-C + USB CHPD0027 | 20.90 € | **19.90 €** | 11.1 % | **5.7 %** | 18.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Forma ORION Bábovka Flower hnědá | 11.90 € | **10.90 €** | 15.9 % | **6.1 %** | 9.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart plug WiFi Sonoff S60TPF | 11.50 € | **10.50 €** | 17.3 % | **7.1 %** | 9.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Snímač prítomnosti človeka ZigBee Sonoff SNZB-06P | 14.50 € | **13.50 €** | 14.7 % | **6.8 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT filtry pro extra tvrdou vodu 6ks | 25.50 € | **24.50 €** | 10.0 % | **5.7 %** | 23.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed nabiječka,mini,USB-C,FIXCG65M-C-WH | 19.50 € | **18.50 €** | 12.4 % | **6.6 %** | 17.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lezecké chyty kameny Kruzzel 25396 15 ks | 14.90 € | **13.90 €** | 14.7 % | **7.0 %** | 12.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čisticí tablety do kávovaru AQUALOGIS Cleaneo 20ks | 14.50 € | **13.50 €** | 13.9 % | **6.0 %** | 12.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skúšačka napätia AC/DC UNI-T UT22B-EU | 14.50 € | **13.50 €** | 13.8 % | **5.9 %** | 12.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odvlhčovač vzduchu ORION NEO 2.2L | 12.90 € | **11.90 €** | 16.3 % | **7.3 %** | 10.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie 9V GP CR-V9 lithiová, blistr -- ks prodej | 10.90 € | **9.90 €** | 15.7 % | **5.1 %** | 8.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Green) | 15.50 € | **14.50 €** | 14.7 % | **7.3 %** | 13.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Myš bezdrátová REBEL WM500 | 13.50 € | **12.50 €** | 14.4 % | **6.0 %** | 11.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXSHM-1706-TR | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 15.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický zvonek na kolo KRUGER & MATZ XH20 | 12.00 € | **11.00 €** | 14.9 % | **5.3 %** | 10.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská tříkolová koloběžka NILS Fun HLB1503 Space | 18.50 € | **17.50 €** | 14.0 % | **7.9 %** | 16.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini Infinity červená 3 porce | 26.50 € | **25.50 €** | 10.4 % | **6.2 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini Infinity černá 3 porce | 26.50 € | **25.50 €** | 10.4 % | **6.2 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt pro SG S26+ FIXSHM-1705-TR | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 15.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vileda Universal sušák na prádlo 18m | 22.50 € | **21.50 €** | 10.9 % | **5.9 %** | 20.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Black) | 11.50 € | **10.50 €** | 15.9 % | **5.8 %** | 9.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Mop na okna a rámy 4 v 1 s tele | 20.90 € | **19.90 €** | 10.9 % | **5.6 %** | 19.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS E2157 digitální grilovací teploměr a minutka | 10.50 € | **9.50 €** | 17.3 % | **6.1 %** | 9.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odžmolkovač LR40 Teesa TSA0214 | 16.50 € | **15.50 €** | 15.2 % | **8.3 %** | 15.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Držák fólií (rolí)  PARAT | 16.50 € | **15.50 €** | 12.3 % | **5.5 %** | 15.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED mini nabíječka 45W FIXC45M-CU-WH | 22.50 € | **21.50 €** | 11.3 % | **6.4 %** | 21.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper ABS Filament Creality (Black) | 14.90 € | **13.90 €** | 14.9 % | **7.2 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovací sáčky 30x40 cm | 17.90 € | **16.90 €** | 11.4 % | **5.2 %** | 16.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný WiFi spínač na monitorovanie teploty a ... | 12.50 € | **11.50 €** | 14.8 % | **5.6 %** | 11.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart Scene Wall Switch WiFi Sonoff M5 1C (1-channel) | 16.50 € | **15.50 €** | 15.3 % | **8.4 %** | 15.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF S61s – externá zásuvka s podporou Matter cez ... | 13.50 € | **12.50 €** | 13.7 % | **5.3 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Držák rolí PARAT | 22.90 € | **21.90 €** | 10.3 % | **5.5 %** | 21.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Lis na česnek PROLINE Knobi Kin | 12.50 € | **11.50 €** | 14.4 % | **5.3 %** | 11.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed kabel USB-C/USB-C FIXDBP-CC2-GR | 19.50 € | **18.50 €** | 12.2 % | **6.4 %** | 18.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sada 2 náhradních potahů hlavic | 14.50 € | **13.50 €** | 13.2 % | **5.4 %** | 13.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff MINIR4M Matter smart WiFi mini switch (HomeKi... | 11.50 € | **10.50 €** | 17.2 % | **7.0 %** | 10.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed sluchátka Buds FIXBDS-WH | 20.90 € | **19.90 €** | 10.5 % | **5.2 %** | 19.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka Avatto OT60-FR | 12.90 € | **11.90 €** | 15.8 % | **6.8 %** | 11.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 40.90 € | **39.90 €** | 10.3 % | **7.6 %** | 39.91 € | stávame sa najlacnejší |
| Solight detektor oxidu uhoľnatého a horľavých plynov | 15.50 € | **14.50 €** | 20.6 % | **12.8 %** | 14.53 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.50 €** | 15.0 % | **13.1 %** | 61.54 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.50 €** | 59.7 % | **35.1 %** | 5.55 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 4.50 € | **3.50 €** | 55.7 % | **21.1 %** | 3.57 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Guma posilovací REBEL ACTIVE RBA-3006 TPE Sada posil... | 14.00 € | **13.00 €** | 14.5 % | **6.3 %** | 13.08 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **35.00 €** | 38.3 % | **34.4 %** | 35.09 € | stávame sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 26.00 € | **25.00 €** | 14.6 % | **10.2 %** | 25.09 € | stávame sa najlacnejší |
| Kompresor REBEL RB-1062 akumulátorový univerzální 7,4V | 18.50 € | **17.50 €** | 13.5 % | **7.4 %** | 17.59 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.50 € | **19.50 €** | 14.7 % | **9.1 %** | 19.59 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 27.50 € | **26.50 €** | 39.3 % | **34.2 %** | 26.60 € | stávame sa najlacnejší |
| Elektrický ohřívač Embego Kaminer 26400 krb s efekte... | 69.90 € | **68.90 €** | 15.2 % | **13.6 %** | 69.00 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **11.50 €** | 46.9 % | **35.1 %** | 11.60 € | stávame sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 52.00 € | **51.00 €** | 14.6 % | **12.4 %** | 51.10 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 23.50 € | **22.50 €** | 15.7 % | **10.7 %** | 22.60 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.90 € | **27.90 €** | 15.7 % | **11.7 %** | 28.00 € | stávame sa najlacnejší |
| Zásuvka NEDIS WIFIP121EWT chytrá Wi-Fi / 16A / 3680W | 13.90 € | **12.90 €** | 15.9 % | **7.6 %** | 13.00 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 18.00 € | **17.00 €** | 13.6 % | **7.3 %** | 17.16 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **19.00 €** | 14.8 % | **9.1 %** | 19.16 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.50 € | **42.50 €** | 14.7 % | **12.1 %** | 42.66 € | stávame sa najlacnejší |
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
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.17 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 55.00 € | **54.00 €** | 14.9 % | **12.9 %** | 54.19 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 126.50 € | **125.50 €** | 15.0 % | **14.1 %** | 125.69 € | stávame sa najlacnejší |
| Grafický tablet Huion H1161 | 74.00 € | **73.00 €** | 14.8 % | **13.2 %** | 73.20 € | stávame sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.71 € | stávame sa najlacnejší |
| Vlákno Hyper PETG Creality (Szary) | 13.50 € | **12.50 €** | 14.7 % | **6.2 %** | 12.71 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND32/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND64/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND16 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 24.50 € | **23.50 €** | 14.1 % | **9.5 %** | 23.79 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 42.00 € | **41.00 €** | 14.7 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.00 € | **33.00 €** | 10.3 % | **7.0 %** | 33.30 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 34.50 € | **33.50 €** | 10.0 % | **6.8 %** | 33.80 € | stávame sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25628 růžová | 47.50 € | **46.50 €** | 15.2 % | **12.7 %** | 46.80 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 37.00 € | **36.00 €** | 41.8 % | **37.9 %** | 36.31 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 72.00 € | **71.00 €** | 14.7 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 20.50 € | **19.50 €** | 48.5 % | **41.3 %** | 19.83 € | stávame sa najlacnejší |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 32.50 € | **31.50 €** | 14.8 % | **11.3 %** | 31.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 11.00 € | **10.00 €** | 45.4 % | **32.2 %** | 10.34 € | stávame sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 16.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, USB A+C, 2 ... | 21.50 € | **20.50 €** | 43.3 % | **36.6 %** | 20.87 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **35.00 €** | 15.0 % | **11.9 %** | 35.38 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 26.50 € | **25.50 €** | 14.2 % | **9.9 %** | 25.89 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.50 €** | 10.5 % | **9.3 %** | 98.90 € | stávame sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 20.90 € | stávame sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.4 % | **5.6 %** | 15.90 € | stávame sa najlacnejší |
| Powerbanka Baseus Bipow 10000 mAh, 20 W (biela) | 19.00 € | **18.00 €** | 13.6 % | **7.6 %** | 18.40 € | stávame sa najlacnejší |
| NEDIS SAMP42222WT domovní zesilovač (1x vstup, 2x vý... | 21.50 € | **20.50 €** | 14.4 % | **9.1 %** | 20.90 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 19.00 € | **18.00 €** | 14.3 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| Baterie olověná  12V / 60 Ah  Victron Energy AGM Sup... | 181.00 € | **180.00 €** | 15.0 % | **14.4 %** | 180.44 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 44.00 € | **43.00 €** | 14.7 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 22.00 € | **21.00 €** | 14.2 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 29.00 € | **28.00 €** | 14.6 % | **10.7 %** | 28.49 € | stávame sa najlacnejší |
| Přípravek do chemických toalet HAPPY GREEN Blue 2l | 13.00 € | **12.00 €** | 15.0 % | **6.2 %** | 12.49 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **88.00 €** | 15.1 % | **13.8 %** | 88.50 € | stávame sa najlacnejší |
| ScanPart Čisticí tablety 90ks | 16.90 € | **15.90 €** | 11.7 % | **5.1 %** | 11.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 652 Tri-colour, F6V24AE | 16.90 € | **15.90 €** | 11.6 % | **5.0 %** | 13.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart čistítí tablekty 2fázové 40ks | 16.90 € | **15.90 €** | 11.7 % | **5.1 %** | 13.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.90 € | **64.00 €** | 15.1 % | **13.5 %** | 64.50 € | stávame sa najlacnejší |
| Laica Bi-flux filtr C3M Coffee & Tea,3ks | 15.90 € | **15.00 €** | 12.0 % | **5.7 %** | 9.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alien 4v1 programovatelný dálkový ovladač | 10.00 € | **9.10 €** | 15.5 % | **5.1 %** | 4.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Fill&Go Vital fil.láhev 0,6l zelen | 13.90 € | **13.00 €** | 12.6 % | **5.3 %** | 9.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Forma na pečení ORION Ořechy 40 silikon hnědá | 10.90 € | **10.00 €** | 15.4 % | **5.9 %** | 8.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhelnatého s alarmem, hlásič CO-602 E... | 10.50 € | **9.60 €** | 15.2 % | **5.3 %** | 8.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT filtry pro extra tvrdou vodu 3ks | 13.90 € | **13.00 €** | 12.4 % | **5.2 %** | 12.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Švihadlo REBEL ACTIVE RBA-3202 | 10.50 € | **9.60 €** | 15.2 % | **5.3 %** | 8.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB-COM LNB AB 01 M Twin | 10.90 € | **10.00 €** | 15.1 % | **5.6 %** | 9.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.00 €** | 46.2 % | **34.2 %** | 10.36 € | stávame sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.90 € | **12.00 €** | 15.1 % | **7.1 %** | 12.39 € | stávame sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.90 € | **12.00 €** | 15.1 % | **7.1 %** | 12.39 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.00 €** | 47.3 % | **37.0 %** | 12.49 € | stávame sa najlacnejší |
| Powerbanka EMOS AlphaQ3, 10 000 mAh, 22,5 W, černá | 15.90 € | **15.00 €** | 15.7 % | **9.2 %** | 15.49 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **13.00 €** | 14.8 % | **7.4 %** | 13.50 € | stávame sa najlacnejší |
| HP 653 Black, 3YM75AE | 17.90 € | **17.00 €** | 10.6 % | **5.0 %** | 14.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PGI-570XL PGBK Black | 17.90 € | **17.00 €** | 10.8 % | **5.2 %** | 15.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Držák k zahradnímu sušáku s cen | 17.90 € | **17.00 €** | 10.9 % | **5.3 %** | 15.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Redmi Buds 8 Active Blue | 16.90 € | **16.00 €** | 11.5 % | **5.6 %** | 15.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Redmi Buds 8 Active White | 16.90 € | **16.00 €** | 11.5 % | **5.6 %** | 15.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2869/05 | 47.90 € | **47.00 €** | 10.6 % | **8.5 %** | 47.01 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 46.90 € | **46.00 €** | 15.1 % | **12.8 %** | 46.08 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.00 €** | 11.9 % | **5.9 %** | 16.09 € | stávame sa najlacnejší |
| Tester káblov HDMI UNI-T UT681HDMI | 19.90 € | **19.00 €** | 15.4 % | **10.2 %** | 19.19 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6013-GL 130x50... | 32.90 € | **32.00 €** | 15.4 % | **12.2 %** | 32.20 € | stávame sa najlacnejší |
| Xiaomi 22.5W Power Bank 20000mAh Gray | 19.90 € | **19.00 €** | 10.3 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Leifheit Mop na podlahu Easy Spray XL | 32.90 € | **32.00 €** | 10.6 % | **7.5 %** | 32.32 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.00 €** | 26.9 % | **20.1 %** | 16.36 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.00 €** | 15.2 % | **9.4 %** | 17.39 € | stávame sa najlacnejší |
| KRUPS KP1A3110 Nescafé Dolce Gusto Picco | 54.90 € | **54.00 €** | 10.7 % | **8.9 %** | 54.42 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 21.90 € | **21.00 €** | 10.0 % | **5.5 %** | 21.50 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-261 místo vyp... | 10.50 € | **9.70 €** | 14.1 % | **5.4 %** | 8.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (biely) | 10.50 € | **9.70 €** | 14.0 % | **5.3 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovací sáčky 20x30 cm | 10.50 € | **9.70 €** | 13.7 % | **5.0 %** | 9.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips AWP305/10 | 10.50 € | **9.70 €** | 13.7 % | **5.0 %** | 9.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.20 €** | 48.6 % | **36.7 %** | 9.23 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 5.40 € | **4.60 €** | 48.8 % | **26.8 %** | 4.69 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo s displejom, 200lm, ... | 10.00 € | **9.20 €** | 54.0 % | **41.7 %** | 9.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.80 € | **5.00 €** | 47.4 % | **27.0 %** | 5.04 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 4.60 € | **3.80 €** | 49.0 % | **23.1 %** | 3.85 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 3.50 € | **2.80 €** | 49.0 % | **19.2 %** | 2.85 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 8.50 € | **7.80 €** | 45.5 % | **33.5 %** | 7.89 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, sviečka, 6W, E14,... | 2.50 € | **1.80 €** | 50.6 % | **8.4 %** | 1.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Svítilna na kolo SET 1+3x LED, na 3+2x AAA, přední+z... | 10.50 € | **9.80 €** | 13.4 % | **5.8 %** | 7.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| COMPASS 09151 hustilka nožní s manometrem jednopístová | 10.00 € | **9.30 €** | 13.2 % | **5.3 %** | 7.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 418191000 | 10.50 € | **9.80 €** | 13.5 % | **6.0 %** | 7.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 9.00 € | **8.30 €** | 53.7 % | **41.8 %** | 8.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.60 € | **7.90 €** | 47.2 % | **35.2 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 7.10 € | **6.40 €** | 55.2 % | **39.9 %** | 6.50 € | stávame sa najlacnejší |
| HP 304 Tri-colour, N9K05AE | 18.50 € | **17.90 €** | 10.8 % | **7.2 %** | 14.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-546 Color | 20.50 € | **19.90 €** | 10.2 % | **6.9 %** | 17.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rapoo 8050T set klávesnice a myši černý | 19.50 € | **18.90 €** | 10.4 % | **7.0 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 19.50 € | **18.90 €** | 15.7 % | **12.2 %** | 18.91 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8610 | 52.50 € | **51.90 €** | 15.1 % | **13.8 %** | 51.94 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6011-GL 72x42c... | 24.50 € | **23.90 €** | 14.5 % | **11.7 %** | 23.95 € | stávame sa najlacnejší |
| EMOS CITY RING-C500 pkojová anténa DVB-T2, DAB, filt... | 20.50 € | **19.90 €** | 13.9 % | **10.6 %** | 19.97 € | stávame sa najlacnejší |
| Filters ND8/16/32 Freewell for DJI Neo | 20.50 € | **19.90 €** | 15.5 % | **12.1 %** | 19.99 € | stávame sa najlacnejší |
| Náhlavný popruh BOBOVR M3 Pro pre Oculus Quest 3 / Q... | 40.50 € | **39.90 €** | 15.2 % | **13.5 %** | 39.99 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.90 € | **7.30 €** | 47.3 % | **36.1 %** | 7.33 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre WIFI SMA... | 2.10 € | **1.50 €** | 52.4 % | **8.9 %** | 1.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 4.20 € | **3.60 €** | 54.5 % | **32.4 %** | 3.66 € | stávame sa najlacnejší |
| HP 912 Yellow, 3YL79AE | 12.50 € | **11.90 €** | 10.6 % | **5.3 %** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkový žebřík Trizand 5067 | 10.00 € | **9.40 €** | 12.1 % | **5.4 %** | 4.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bederní pás CYKLO SPORT | 10.00 € | **9.40 €** | 12.8 % | **6.0 %** | 4.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vak vodotěsný Trizand 20l 55 x 37cm černý | 11.50 € | **10.90 €** | 13.5 % | **7.5 %** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skicovací sada Maaleo 26134 27dílná | 10.00 € | **9.40 €** | 12.1 % | **5.4 %** | 6.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI MiTag lokátor Google Find My APD003 | 15.50 € | **14.90 €** | 12.2 % | **7.9 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 655 Magenta, CZ111AE | 16.50 € | **15.90 €** | 11.2 % | **7.2 %** | 13.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI CN mini PD 20W, USB-C kabel CHPD0017 | 12.50 € | **11.90 €** | 13.3 % | **7.9 %** | 9.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 903 Cyan, T6L87AE | 15.50 € | **14.90 €** | 11.1 % | **6.8 %** | 12.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 903 Yellow, T6L95AE | 15.50 € | **14.90 €** | 11.1 % | **6.8 %** | 12.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart Vodní filtr Philips Saeco, Lava | 10.50 € | **9.90 €** | 12.2 % | **5.8 %** | 7.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ořezávač kabelů RG6/59 CABELCON s klíčem HEX 11mm | 11.50 € | **10.90 €** | 13.5 % | **7.5 %** | 8.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vak vodotěsný Trizand 30l 53 x 71cm černý | 11.50 € | **10.90 €** | 13.5 % | **7.5 %** | 9.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 912 Magenta, 3YL78AE | 12.50 € | **11.90 €** | 10.6 % | **5.3 %** | 10.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo pro TESLA Device MS360 | 11.50 € | **10.90 €** | 13.5 % | **7.5 %** | 9.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 912 Cyan, 3YL77AE | 12.50 € | **11.90 €** | 10.6 % | **5.3 %** | 10.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo vakuovací rolky 40x1000cm | 13.50 € | **12.90 €** | 11.0 % | **6.0 %** | 11.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotaška nad rám přední vidlice + držák na telefon... | 11.50 € | **10.90 €** | 14.9 % | **8.9 %** | 9.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Wireless Mouse 220 Red | 13.50 € | **12.90 €** | 11.1 % | **6.2 %** | 11.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZigBee motion sensor SONOFF SNZB-03P + battery | 11.50 € | **10.90 €** | 13.1 % | **7.2 %** | 10.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sprcha kempingová solární Trizand 23495 | 10.00 € | **9.40 €** | 12.1 % | **5.4 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo IDEA TAB11 FOLIO CASE luna grey | 14.50 € | **13.90 €** | 10.7 % | **6.1 %** | 13.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Návlek na mop PROFI pro venkovn | 13.50 € | **12.90 €** | 11.2 % | **6.3 %** | 12.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 13.95 € | stávame sa najlacnejší |
| Solight detektor spalín CO + alarm, 85dB, 3x AA batéria | 15.50 € | **14.90 €** | 44.0 % | **38.4 %** | 14.98 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **104.90 €** | 10.5 % | **9.9 %** | 105.00 € | stávame sa najlacnejší |
| HP 650 Black, CZ101AE | 17.49 € | **16.90 €** | 10.2 % | **6.5 %** | 13.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.90 €** | 55.5 % | **37.9 %** | 3.96 € | stávame sa najlacnejší |
| ScanPart Čistíci set pro automatické káv | 20.00 € | **19.50 €** | 10.2 % | **7.4 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotaška nad rám přední vidlice + PHONE šedo - černá | 11.00 € | **10.50 €** | 14.1 % | **8.9 %** | 4.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotaška pod sedlo s klipem | 11.00 € | **10.50 €** | 14.1 % | **8.9 %** | 4.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kingston USB 3.2 DT Exodia M 64GB | 11.50 € | **11.00 €** | 10.4 % | **5.6 %** | 6.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX E2YH01 | 15.00 € | **14.50 €** | 10.2 % | **6.5 %** | 11.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 912 Black, 3YL80AE | 20.00 € | **19.50 €** | 10.2 % | **7.4 %** | 16.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bederní opěrný pás Trizand 27458 XL s 24 magnety | 12.00 € | **11.50 €** | 12.8 % | **8.1 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií EMOS N9321 BCN-40 | 12.00 € | **11.50 €** | 14.5 % | **9.7 %** | 9.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka na dlaždice a vanu FLEXI | 12.00 € | **11.50 €** | 10.1 % | **5.5 %** | 9.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CLI-571 XL Y Yellow | 17.00 € | **16.50 €** | 10.3 % | **7.1 %** | 14.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit 3237 Vakuovací role 20x600 cm | 12.00 € | **11.50 €** | 10.6 % | **6.0 %** | 9.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotaška Compass na řídítka | 11.00 € | **10.50 €** | 13.6 % | **8.5 %** | 9.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (DGS-105GL) | 18.00 € | **17.50 €** | 10.4 % | **7.4 %** | 16.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A12T | 11.00 € | **10.50 €** | 14.5 % | **9.3 %** | 9.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 1L | 11.00 € | **10.50 €** | 14.4 % | **9.2 %** | 9.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WN722N WiFi USB Adaptér | 11.00 € | **10.50 €** | 10.1 % | **5.1 %** | 9.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit mop na stírání prachu SUPERDUST | 18.00 € | **17.50 €** | 10.2 % | **7.1 %** | 16.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed sluchátka Buds FIXBDS-BK | 21.00 € | **20.50 €** | 7.8 % | **5.2 %** | 19.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Camino Case FIXCA-C-BK | 12.00 € | **11.50 €** | 10.2 % | **5.6 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament ELEGOO PLA+ (modrý) | 12.00 € | **11.50 €** | 13.2 % | **8.5 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Matter SONOFF M5-1C-80W WiFi smart wall switch (1-ch... | 18.00 € | **17.50 €** | 8.6 % | **5.6 %** | 17.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 13.00 € | **12.50 €** | 13.4 % | **9.0 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight montážne klipy na inštaláciu LED panelov 595... | 2.60 € | **2.10 €** | 36.4 % | **10.1 %** | 2.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.60 € | **1.10 €** | 54.9 % | **6.5 %** | 1.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **20.00 €** | 48.5 % | **44.9 %** | 20.01 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **8.00 €** | 53.9 % | **44.9 %** | 8.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.70 €** | 48.7 % | **36.7 %** | 5.71 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Filament ELEGOO PLA+ (čierny) | 12.00 € | **11.50 €** | 14.6 % | **9.9 %** | 11.51 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.40 € | **2.90 €** | 56.2 % | **33.2 %** | 2.92 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.10 €** | 53.7 % | **44.7 %** | 8.12 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo, 150+150lm, Li... | 8.60 € | **8.10 €** | 53.7 % | **44.7 %** | 8.12 € | stávame sa najlacnejší |
| Leifheit Potah na žehlicí prkno Cotton C | 10.50 € | **10.00 €** | 12.6 % | **7.3 %** | 10.04 € | stávame sa najlacnejší |
| Leifheit Čistič na okna s rozprašovačem | 10.50 € | **10.00 €** | 14.4 % | **9.0 %** | 10.04 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 15.00 € | **14.50 €** | 13.3 % | **9.6 %** | 14.55 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.20 €** | 55.2 % | **43.6 %** | 6.26 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS ISIMAT+ | 22.50 € | **22.00 €** | 14.8 % | **12.2 %** | 22.06 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.50 €** | 41.0 % | **38.8 %** | 31.57 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **4.80 €** | 50.7 % | **36.4 %** | 4.87 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 17.50 € | **17.00 €** | 25.8 % | **22.2 %** | 17.08 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.50 € | **5.00 €** | 54.7 % | **40.7 %** | 5.09 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.50 €** | 47.2 % | **44.5 %** | 26.59 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka IP54, sivá | 2.60 € | **2.10 €** | 54.3 % | **24.6 %** | 2.19 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.40 €** | 47.1 % | **34.7 %** | 5.49 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.50 € | **12.00 €** | 36.4 % | **31.0 %** | 12.10 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **11.00 €** | 16.6 % | **11.5 %** | 11.12 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 45.00 € | **44.50 €** | 14.8 % | **13.6 %** | 44.63 € | stávame sa najlacnejší |
| Fixed nabíječka,2xUSB-C,FIXCG65M-2C1A-WH | 22.50 € | **22.00 €** | 11.1 % | **8.6 %** | 22.15 € | stávame sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.50 € | **18.00 €** | 12.8 % | **9.8 %** | 18.15 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 13.50 € | **13.00 €** | 14.8 % | **10.6 %** | 13.16 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.16 € | stávame sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.00 € | **15.50 €** | 10.1 % | **6.7 %** | 15.67 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Catlink Fresh smart odor absorber | 35.50 € | **35.00 €** | 15.0 % | **13.4 %** | 35.17 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 17.00 € | **16.50 €** | 14.9 % | **11.5 %** | 16.69 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 107.50 € | **107.00 €** | 10.3 % | **9.8 %** | 107.20 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| PXN-F16 Flight Joystick for PC | 34.50 € | **34.00 €** | 15.3 % | **13.7 %** | 34.21 € | stávame sa najlacnejší |
| Leifheit Stěrka na dlažbu Classic s tele | 12.00 € | **11.50 €** | 10.1 % | **5.5 %** | 11.74 € | stávame sa najlacnejší |
| Meross MSP844(EU) inteligentný rýchlonabíjací napája... | 46.50 € | **46.00 €** | 15.5 % | **14.3 %** | 46.24 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 16.50 € | **16.00 €** | 40.0 % | **35.8 %** | 16.25 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **15.00 €** | 47.4 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 819.50 € | **819.00 €** | 6.8 % | **6.7 %** | 819.25 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.50 € | **11.00 €** | 11.7 % | **6.8 %** | 11.26 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **13.00 €** | 47.5 % | **42.1 %** | 13.27 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **14.00 €** | 47.4 % | **42.3 %** | 14.27 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 11.00 € | **10.50 €** | 48.1 % | **41.3 %** | 10.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.50 € | **12.00 €** | 22.4 % | **17.5 %** | 12.27 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 212.50 € | **212.00 €** | 7.5 % | **7.3 %** | 212.27 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 28.50 € | **28.00 €** | 38.6 % | **36.1 %** | 28.28 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 259.50 € | **259.00 €** | 8.0 % | **7.8 %** | 259.28 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.50 € | **15.00 €** | 14.1 % | **10.5 %** | 15.29 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 27.50 € | **27.00 €** | 12.9 % | **10.9 %** | 27.29 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 60.00 € | **59.50 €** | 15.1 % | **14.1 %** | 59.79 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 143.50 € | **143.00 €** | 7.9 % | **7.6 %** | 143.29 € | stávame sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 13.50 € | **13.00 €** | 16.8 % | **12.4 %** | 13.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 17.50 € | **17.00 €** | 37.2 % | **33.3 %** | 17.29 € | stávame sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.50 € | **18.00 €** | 9.0 % | **6.0 %** | 18.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.50 €** | 46.4 % | **42.9 %** | 20.80 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 22.00 € | **21.50 €** | 14.9 % | **12.3 %** | 21.80 € | stávame sa najlacnejší |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 172.50 € | **172.00 €** | 13.3 % | **13.0 %** | 172.31 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.50 € | **24.00 €** | 26.5 % | **23.9 %** | 24.31 € | stávame sa najlacnejší |
| Gorenje W2PNEI84A1SW | 370.50 € | **370.00 €** | 14.2 % | **14.0 %** | 370.31 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.50 € | **15.00 €** | 39.9 % | **35.4 %** | 15.33 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 249.50 € | **249.00 €** | 6.7 % | **6.5 %** | 249.33 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 25.50 € | **25.00 €** | 40.1 % | **37.3 %** | 25.33 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Akumulátor Lipo Tattu 2s 650mAh 95C 7,6V HV z XT30 L... | 10.50 € | **10.00 €** | 16.5 % | **10.9 %** | 10.33 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.50 € | **134.00 €** | 14.6 % | **14.2 %** | 134.34 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.50 € | **12.00 €** | 27.0 % | **22.0 %** | 12.35 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **13.00 €** | 56.1 % | **50.3 %** | 13.35 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 175.50 € | **175.00 €** | 6.2 % | **5.9 %** | 175.35 € | stávame sa najlacnejší |
| Akupresurní podložka s polštářem REBEL ACTIVE RBA-60... | 14.00 € | **13.50 €** | 14.5 % | **10.4 %** | 13.85 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.50 € | **26.00 €** | 37.0 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Tesla GSM-LTE zesilovač/opakovač 900/1800 MHz - komp... | 184.50 € | **184.00 €** | 11.1 % | **10.8 %** | 184.36 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 48.50 € | **48.00 €** | 9.8 % | **8.7 %** | 48.36 € | stávame sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 22.00 € | **21.50 €** | 13.8 % | **11.2 %** | 21.88 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **15.00 €** | 46.0 % | **41.3 %** | 15.39 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.00 € | **47.50 €** | 9.7 % | **8.6 %** | 47.89 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **27.00 €** | 15.6 % | **13.5 %** | 27.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 30.50 € | **30.00 €** | 14.9 % | **13.0 %** | 30.39 € | stávame sa najlacnejší |
| Ardes AR4B01B | 45.50 € | **45.00 €** | 10.0 % | **8.8 %** | 45.39 € | stávame sa najlacnejší |
| CrockPot CSC062X | 157.00 € | **156.50 €** | 6.8 % | **6.5 %** | 156.89 € | stávame sa najlacnejší |
| Tefal RK812110 | 105.50 € | **105.00 €** | 6.1 % | **5.6 %** | 105.39 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 58.50 € | **58.00 €** | 10.3 % | **9.4 %** | 58.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.50 € | **55.00 €** | 14.7 % | **13.7 %** | 55.39 € | stávame sa najlacnejší |
| DOMO DO354VD | 130.50 € | **130.00 €** | 8.5 % | **8.1 %** | 130.39 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 267.00 € | **266.50 €** | 8.4 % | **8.2 %** | 266.89 € | stávame sa najlacnejší |
| DOMO DO42102SV | 98.50 € | **98.00 €** | 9.0 % | **8.5 %** | 98.39 € | stávame sa najlacnejší |
| PRIMO PR406IM | 125.50 € | **125.00 €** | 7.6 % | **7.2 %** | 125.39 € | stávame sa najlacnejší |
| Domo DO331L | 103.50 € | **103.00 €** | 6.9 % | **6.4 %** | 103.39 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 276.00 € | **275.50 €** | 7.7 % | **7.5 %** | 275.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 284.00 € | **283.50 €** | 8.9 % | **8.7 %** | 283.89 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.50 € | **17.00 €** | 12.8 % | **9.6 %** | 17.39 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 28.50 € | **28.00 €** | 15.2 % | **13.1 %** | 28.39 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.50 € | **45.00 €** | 14.6 % | **13.3 %** | 45.39 € | stávame sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 61.50 € | **61.00 €** | 9.1 % | **8.2 %** | 61.39 € | stávame sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 15.00 € | **14.50 €** | 10.6 % | **6.9 %** | 14.89 € | stávame sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.50 € | **21.00 €** | 10.0 % | **7.4 %** | 21.39 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 89.50 € | **89.00 €** | 12.7 % | **12.0 %** | 89.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 202.50 € | **202.00 €** | 14.9 % | **14.7 %** | 202.39 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 59.50 € | **59.00 €** | 12.3 % | **11.3 %** | 59.39 € | stávame sa najlacnejší |
| Elektrická pánev do auta 20cm x 4cm 150W 12V | 42.00 € | **41.50 €** | 14.5 % | **13.2 %** | 41.90 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.00 € | **32.50 €** | 14.2 % | **12.4 %** | 32.90 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.90 € | stávame sa najlacnejší |
| Inteligentná žiarovka Yeelight W1 GU10 (Biela) | 16.00 € | **15.50 €** | 14.3 % | **10.7 %** | 15.90 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.90 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 52.00 € | **51.50 €** | 15.0 % | **13.9 %** | 51.90 € | stávame sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.00 € | **19.50 €** | 10.5 % | **7.7 %** | 19.90 € | stávame sa najlacnejší |
| Dotykový vypínač svetla ZigBee Avatto TS60-EU-W1 Sin... | 21.00 € | **20.50 €** | 15.0 % | **12.2 %** | 20.90 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **26.00 €** | 11.2 % | **9.1 %** | 26.40 € | stávame sa najlacnejší |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.50 € | **15.00 €** | 45.9 % | **41.1 %** | 15.41 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.50 € | **139.00 €** | 7.9 % | **7.5 %** | 139.41 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 373.50 € | **373.00 €** | 7.1 % | **7.0 %** | 373.41 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.50 € | **63.00 €** | 14.5 % | **13.6 %** | 63.42 € | stávame sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **16.00 €** | 15.7 % | **12.2 %** | 16.42 € | stávame sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 29.50 € | **29.00 €** | 26.3 % | **24.2 %** | 29.42 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 38.4 % | **35.1 %** | 20.45 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **11.00 €** | 38.3 % | **32.3 %** | 11.45 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.50 € | **48.00 €** | 14.3 % | **13.1 %** | 48.46 € | stávame sa najlacnejší |
| Interaktívne hračky pre mačky 3 v 1 | 10.50 € | **10.00 €** | 13.8 % | **8.4 %** | 10.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 865.50 € | **865.00 €** | 14.1 % | **14.1 %** | 865.47 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.50 € | **14.00 €** | 33.7 % | **29.0 %** | 14.48 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.48 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **13.00 €** | 14.0 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Súprava na polievanie kvetín v črepníkoch RainPoint ... | 27.50 € | **27.00 €** | 41.1 % | **38.5 %** | 27.49 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 123.50 € | **123.00 €** | 6.4 % | **6.0 %** | 123.49 € | stávame sa najlacnejší |
| Sekáček potravin TEESA TSA3227 | 21.50 € | **21.00 €** | 8.0 % | **5.5 %** | 21.49 € | stávame sa najlacnejší |
| Mio Smartbox IV | 31.50 € | **31.00 €** | 10.7 % | **8.9 %** | 31.49 € | stávame sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 236.50 € | **236.00 €** | 11.3 % | **11.1 %** | 236.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.50 € | **11.00 €** | 10.5 % | **5.7 %** | 11.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Laserový diaľkomer Mileseey D9 Pro s dosahom 100 m | 138.90 € | **138.50 €** | 14.1 % | **13.8 %** | 138.72 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS DICROMAT 2+CR | 70.90 € | **70.50 €** | 9.7 % | **9.1 %** | 70.75 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 69.90 € | **69.50 €** | 12.2 % | **11.5 %** | 69.75 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.90 € | **195.50 €** | 10.1 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 205.90 € | **205.50 €** | 8.2 % | **8.0 %** | 205.80 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.90 € | **212.50 €** | 10.1 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.90 € | **88.50 €** | 6.2 % | **5.7 %** | 88.81 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Army 10x40 se zaměřo... | 108.90 € | **108.50 €** | 5.4 % | **5.0 %** | 108.88 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (čierny) | 252.90 € | **252.50 €** | 6.6 % | **6.4 %** | 252.88 € | stávame sa najlacnejší |
| Fixed pouzdro MMot G75 5G FIXOP3-1498-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 8.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart Vodní filtr pro Bosch | 10.90 € | **10.50 €** | 12.7 % | **8.6 %** | 7.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzd 60N/50N/MS50 FIXOP3-1442-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 9.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI BT selfie tyč HA12, černá HA12 | 10.00 € | **9.60 €** | 10.5 % | **6.0 %** | 7.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| VILEDA F25354 Smeták,VILEDA | 10.00 € | **9.60 €** | 10.2 % | **5.8 %** | 8.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-V-BK | 12.90 € | **12.50 €** | 11.8 % | **8.3 %** | 11.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart DOLCE GUSTO kapsle pro opakovan | 10.00 € | **9.60 €** | 10.3 % | **5.9 %** | 8.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI GL. FULL Xia Not 14 Pro/Pro+ GLF0046 | 10.90 € | **10.50 €** | 11.9 % | **7.8 %** | 9.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ScanPart kávový filtr GOLD TONE | 10.00 € | **9.60 €** | 10.3 % | **5.9 %** | 9.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera 61603 Zatáčka 1/90 2ksGO/GO+/D14 | 10.90 € | **10.50 €** | 10.4 % | **6.3 %** | 9.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **6.00 €** | 53.5 % | **43.9 %** | 6.05 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.90 € | **14.50 €** | 47.7 % | **43.8 %** | 14.62 € | stávame sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.50 €** | 11.8 % | **8.8 %** | 14.63 € | stávame sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 10.68 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 10.90 € | **10.50 €** | 41.8 % | **36.6 %** | 10.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.90 € | **14.50 €** | 16.8 % | **13.7 %** | 14.74 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.50 €** | 40.4 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Hyper PLA Filament Creality (White) | 12.90 € | **12.50 €** | 16.4 % | **12.8 %** | 12.77 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.50 €** | 12.1 % | **9.1 %** | 14.79 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.5 % | **7.7 %** | 15.83 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.50 €** | 45.7 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0904 10000 mAh Li-pol | 13.90 € | **13.50 €** | 11.0 % | **7.8 %** | 13.85 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.90 € | **13.50 €** | 17.8 % | **14.4 %** | 13.85 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.50 €** | 19.3 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **10.50 €** | 45.5 % | **40.2 %** | 10.86 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.30 € | **0.90 €** | 60.1 % | **10.9 %** | 0.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepojovací konektor pre RGB LED pásy, zacva... | 1.30 € | **0.90 €** | 60.1 % | **10.9 %** | 0.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight reťaz pre akumulátorovú pílu RNP100/A/A1 | 3.50 € | **3.10 €** | 20.6 % | **6.8 %** | 2.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.10 €** | 53.0 % | **35.5 %** | 3.14 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.50 €** | 40.9 % | **26.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 3.10 € | **2.70 €** | 50.0 % | **30.7 %** | 2.77 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou, IP20... | 1.70 € | **1.30 €** | 44.0 % | **10.1 %** | 1.40 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.23 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 5.30 € | **4.90 €** | 55.6 % | **43.8 %** | 4.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.20 €** | 48.4 % | **35.5 %** | 4.24 € | stávame sa najlacnejší |
| Sati Fortissimo 1 kg zrno | 17.90 € | **17.50 €** | 7.7 % | **5.3 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-545BK Black | 16.90 € | **16.50 €** | 10.3 % | **7.7 %** | 14.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CLI-571 XL C Cyan | 16.90 € | **16.50 €** | 10.3 % | **7.7 %** | 14.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8235 gold | 39.90 € | **39.50 €** | 15.1 % | **13.9 %** | 39.56 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8235 chrom | 39.90 € | **39.50 €** | 15.1 % | **13.9 %** | 39.56 € | stávame sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 22.90 € | **22.50 €** | 14.9 % | **12.8 %** | 22.65 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.50 €** | 35.5 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.9 % | **15.4 %** | 31.70 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **33.50 €** | 25.7 % | **24.3 %** | 33.72 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.90 € | **41.50 €** | 34.9 % | **33.6 %** | 41.73 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.90 € | **17.50 €** | 15.2 % | **12.6 %** | 17.74 € | stávame sa najlacnejší |
| Freestyle koloběžka NILS Extreme HS033 černo-červená | 48.90 € | **48.50 €** | 10.7 % | **9.8 %** | 48.74 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.50 €** | 38.4 % | **36.1 %** | 23.75 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.90 € | **22.50 €** | 15.1 % | **13.1 %** | 22.76 € | stávame sa najlacnejší |
| Soundbar KRUGER & MATZ Planet 2.1 | 54.90 € | **54.50 €** | 7.8 % | **7.0 %** | 54.77 € | stávame sa najlacnejší |
| Tefal HT310838 | 27.90 € | **27.50 €** | 10.7 % | **9.1 %** | 27.79 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.90 € | **17.50 €** | 33.6 % | **30.6 %** | 17.79 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.90 € | **58.50 €** | 35.6 % | **34.7 %** | 58.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.50 €** | 39.6 % | **36.8 %** | 19.80 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.90 € | **55.50 €** | 36.4 % | **35.5 %** | 55.81 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 13.2 % | **10.6 %** | 17.81 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.50 €** | 20.3 % | **18.7 %** | 29.82 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 16.90 € | **16.50 €** | 32.9 % | **29.7 %** | 16.83 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.90 € | **45.50 €** | 41.6 % | **40.3 %** | 45.85 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.90 € | **54.50 €** | 38.3 % | **37.3 %** | 54.86 € | stávame sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 37.90 € | **37.50 €** | 6.5 % | **5.4 %** | 37.88 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.90 € | **55.50 €** | 11.9 % | **11.1 %** | 55.89 € | stávame sa najlacnejší |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 52.90 € | **52.50 €** | 9.4 % | **8.5 %** | 52.89 € | stávame sa najlacnejší |
| Maxxo VM Chamber Line 90 | 564.90 € | **564.50 €** | 8.5 % | **8.5 %** | 564.78 € | stávame sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (bla | 436.90 € | **436.50 €** | 5.5 % | **5.4 %** | 436.79 € | stávame sa najlacnejší |
| Roborock Qrevo C Pro Black | 607.90 € | **607.50 €** | 5.5 % | **5.4 %** | 607.79 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 499.90 € | **499.50 €** | 9.1 % | **9.0 %** | 499.84 € | stávame sa najlacnejší |
| Solight reťaz pre akumulátorovú pílu RNP255 | 3.10 € | **2.80 €** | 20.0 % | **8.4 %** | 2.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight lišta pre akumulátorovú pílu RNP255 | 3.10 € | **2.80 €** | 20.0 % | **8.4 %** | 2.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 4.20 € | **3.90 €** | 55.9 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.70 €** | 56.3 % | **32.9 %** | 1.71 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 3000K, 510lm | 1.00 € | **0.70 €** | 53.4 % | **7.4 %** | 0.72 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.80 €** | 55.2 % | **33.0 %** | 1.82 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.30 €** | 58.6 % | **28.9 %** | 1.35 € | stávame sa najlacnejší |
| Solight HDMI spojka, HDMI zdierka - HDMI zdierka, pr... | 1.10 € | **0.80 €** | 51.6 % | **10.2 %** | 0.85 € | stávame sa najlacnejší |
| Solight náhradný lievik pre 1T08, 5ks | 2.10 € | **1.80 €** | 39.9 % | **20.0 %** | 1.89 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, biely | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.89 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.40 €** | 44.0 % | **18.6 %** | 1.50 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 4000K, 595l... | 1.20 € | **0.90 €** | 47.8 % | **10.9 %** | 0.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.00 € | **3.70 €** | 47.2 % | **36.1 %** | 3.71 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.10 €** | 45.9 % | **14.7 %** | 1.12 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.50 € | **3.20 €** | 48.2 % | **35.5 %** | 3.25 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 5.10 € | **4.80 €** | 40.1 % | **31.8 %** | 4.87 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.50 €** | 48.8 % | **32.8 %** | 2.58 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.90 € | **3.60 €** | 53.2 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.80 € | **2.50 €** | 46.9 % | **31.1 %** | 2.60 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **8.10 €** | 47.7 % | **44.1 %** | 8.15 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.80 €** | 41.8 % | **32.4 %** | 2.84 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.80 €** | 41.0 % | **31.6 %** | 2.84 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 6.30 € | **6.10 €** | 48.5 % | **43.7 %** | 6.15 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.70 € | **3.50 €** | 18.9 % | **12.5 %** | 3.59 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.10 € | **1.90 €** | 29.3 % | **17.0 %** | 1.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.70 € | **7.50 €** | 38.8 % | **35.2 %** | 7.60 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.90 €** | 54.2 % | **26.2 %** | 0.98 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.90 €** | 54.2 % | **26.2 %** | 1.00 € | stávame sa najlacnejší |
| Solight zástrčka plochá priama, IP20, čierna | 0.90 € | **0.70 €** | 52.4 % | **18.6 %** | 0.80 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.20 € | **1.00 €** | 59.9 % | **33.3 %** | 1.02 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.40 € | **1.20 €** | 51.8 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.40 € | **1.20 €** | 51.8 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.70 €** | 47.1 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.40 € | **1.20 €** | 47.8 % | **26.7 %** | 1.28 € | stávame sa najlacnejší |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.30 €** | 56.3 % | **35.5 %** | 1.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.20 € | **9.00 €** | 39.3 % | **36.3 %** | 9.04 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.60 € | **9.40 €** | 31.2 % | **28.4 %** | 9.46 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.50 € | **9.30 €** | 28.3 % | **25.6 %** | 9.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 6.60 € | **6.40 €** | 13.4 % | **10.0 %** | 6.49 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 100 | 350.00 € | **349.90 €** | 5.1 % | **5.1 %** | 349.95 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 8" (200/1200) | 700.00 € | **699.90 €** | 5.1 % | **5.1 %** | 699.95 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 406.00 € | **405.90 €** | 6.2 % | **6.1 %** | 405.96 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 279.00 € | **278.90 €** | 7.8 % | **7.7 %** | 278.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 26.4 % | **25.8 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 60.00 € | **59.90 €** | 7.8 % | **7.6 %** | 59.96 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 38.00 € | **37.90 €** | 8.9 % | **8.6 %** | 37.96 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 36.00 € | **35.90 €** | 9.6 % | **9.3 %** | 35.97 € | stávame sa najlacnejší |
| Cabletech UCH0204 | 19.00 € | **18.90 €** | 6.6 % | **6.0 %** | 18.98 € | stávame sa najlacnejší |
| Leifheit 81520 Pegasus 200 Solid | 38.00 € | **37.90 €** | 14.2 % | **13.9 %** | 37.99 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 23.00 € | **22.90 €** | 39.2 % | **38.6 %** | 22.99 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.90 €** | 25.3 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 20.00 € | **19.90 €** | 24.7 % | **24.1 %** | 19.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.14 € | stávame sa najlacnejší |
| Solight LED svetelný zdroj do stropných svetiel, 18W... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.14 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **5.10 €** | 20.4 % | **18.1 %** | 5.19 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.30 €** | 45.4 % | **42.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.40 € | **4.30 €** | 13.9 % | **11.3 %** | 4.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.70 € | **4.60 €** | 36.5 % | **33.6 %** | 4.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.40 € | **4.30 €** | 11.1 % | **8.6 %** | 4.39 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.80 €** | 45.4 % | **42.9 %** | 5.89 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.10 €** | 32.1 % | **27.9 %** | 3.16 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.20 € | **3.10 €** | 37.7 % | **33.4 %** | 3.17 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.90 €** | 46.0 % | **41.2 %** | 2.98 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.40 €** | 34.2 % | **30.4 %** | 3.48 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.70 € | **2.60 €** | 37.2 % | **32.1 %** | 2.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.60 € | **3.50 €** | 16.6 % | **13.4 %** | 3.59 € | stávame sa najlacnejší |
| Solight kotúč brusný na oceľ 100 x 2,5 x 16 mm | 0.50 € | **0.40 €** | 40.2 % | **12.1 %** | 0.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 0.50 € | **0.40 €** | 69.4 % | **35.5 %** | 0.41 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.10 €** | 43.5 % | **31.5 %** | 1.14 € | stávame sa najlacnejší |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.10 €** | 39.4 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.80 €** | 23.6 % | **17.1 %** | 1.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 10m | 13.00 € | **12.90 €** | 7.0 % | **6.2 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.95 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.10 € | **5.00 €** | 35.9 % | **33.3 %** | 5.05 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.10 € | **6.00 €** | 32.6 % | **30.4 %** | 6.05 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.90 €** | 45.7 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.90 €** | 38.5 % | **37.5 %** | 12.96 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.96 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.96 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.30 € | **4.20 €** | 35.5 % | **32.4 %** | 4.26 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 13.4 % | **11.8 %** | 7.06 € | stávame sa najlacnejší |
| Náhradné filtre pre Catlink litter box Scooper 2ks. | 10.00 € | **9.90 €** | 7.4 % | **6.3 %** | 9.96 € | stávame sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.50 €** | 54.6 % | **52.9 %** | 9.57 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 16.00 € | **15.90 €** | 39.0 % | **38.1 %** | 15.98 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.20 €** | 37.2 % | **34.6 %** | 5.28 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 14.00 € | **13.90 €** | 32.8 % | **31.9 %** | 13.99 € | stávame sa najlacnejší |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.90 € | **9.80 €** | 28.2 % | **26.9 %** | 9.89 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.90 €** | 25.1 % | **23.8 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.50 €** | 24.8 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 28.3 % | **26.3 %** | 6.49 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 8.7 % | **7.1 %** | 6.49 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.20 €** | 38.7 % | **35.5 %** | 4.29 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 8.70 € | **8.60 €** | 8.2 % | **6.9 %** | 8.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **7.40 €** | 38.9 % | **37.0 %** | 7.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.20 €** | 21.0 % | **18.8 %** | 5.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.60 € | **9.50 €** | 34.3 % | **32.9 %** | 9.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.10 € | **6.00 €** | 27.5 % | **25.4 %** | 6.09 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.30 €** | 43.8 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |
| Salente R2 robotický vysavač | 94.00 € | **93.90 €** | 5.3 % | **5.1 %** | 93.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-R2 | 94.00 € | **93.90 €** | 5.3 % | **5.1 %** | 93.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-104, 4K satelitní přijímač | 114.00 € | **113.90 €** | 5.1 % | **5.0 %** | 113.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 137.00 € | **136.90 €** | 13.6 % | **13.5 %** | 136.99 € | stávame sa najlacnejší |
| Rowenta RO7457EA | 191.00 € | **190.90 €** | 8.4 % | **8.4 %** | 190.99 € | stávame sa najlacnejší |

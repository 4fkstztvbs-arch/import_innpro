# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-26

Vstup: `premiumstoresk_20260826_1243.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5502**
- Návrh **zvýšiť** cenu: **246** produktov
- Návrh **znížiť** cenu: **1207** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4049** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **112**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (246)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Gorenje W2PNEI84A1SW | 361.00 € | **380.00 €** | 11.2 % | **17.1 %** | 380.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.90 € | **362.50 €** | 15.0 % | **19.5 %** | 348.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 170.00 € | **177.50 €** | 5.9 % | **10.6 %** | 174.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo VM Chamber Line 90 | 561.00 € | **568.50 €** | 7.8 % | **9.2 %** | 568.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **124.00 €** | 15.0 % | **22.0 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1-Ss | 130.50 € | **135.50 €** | 10.0 % | **14.2 %** | 135.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GV520E15 | 290.90 € | **294.90 €** | 8.0 % | **9.5 %** | 291.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo CD03 rádio | 134.00 € | **137.90 €** | 7.1 % | **10.2 %** | 137.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 52.50 € | **55.90 €** | 5.1 % | **11.9 %** | 55.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 51.50 € | **54.90 €** | 29.7 % | **38.3 %** | 51.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 35.50 € | **38.50 €** | 6.3 % | **15.3 %** | 38.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Aura 5 ANC | 42.00 € | **45.00 €** | 10.2 % | **18.1 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 326.00 € | **328.90 €** | 7.1 % | **8.1 %** | 328.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **29.50 €** | 15.2 % | **26.3 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.50 € | **66.00 €** | 10.2 % | **14.5 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 46.90 € | **49.00 €** | 10.1 % | **15.0 %** | 49.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/4N/1 | 50.90 € | **53.00 €** | 10.0 % | **14.5 %** | 53.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal RK812110 | 104.50 € | **106.50 €** | 5.1 % | **7.1 %** | 106.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.50 € | **16.50 €** | 11.1 % | **26.4 %** | 16.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5X/1 | 49.50 € | **51.50 €** | 10.5 % | **15.0 %** | 51.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.90 €** | 20.1 % | **45.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo vodní filtry 3+1 | 11.90 € | **13.50 €** | 11.6 % | **26.6 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.00 € | **42.50 €** | 7.4 % | **11.3 %** | 41.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 10.50 € | **12.00 €** | 29.0 % | **47.4 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.7 % | **16.9 %** | 31.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **38.90 €** | 11.0 % | **15.1 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510Y žlutá | 37.50 € | **38.90 €** | 11.0 % | **15.1 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 20.90 € | **22.00 €** | 5.0 % | **10.5 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.90 € | **15.00 €** | 12.4 % | **21.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 90A1 | 127.90 € | **129.00 €** | 6.5 % | **7.4 %** | 129.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1004500 | 50.90 € | **51.90 €** | 9.9 % | **12.0 %** | 51.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CMWA23TNDB | 97.00 € | **98.00 €** | 10.1 % | **11.2 %** | 98.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 17.00 € | **18.00 €** | 36.8 % | **44.9 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.30 € | **5.30 €** | 8.6 % | **33.8 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E7K1-6BP | 69.00 € | **69.90 €** | 10.7 % | **12.2 %** | 69.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT501A tester izolačného odporu | 58.00 € | **58.90 €** | 11.2 % | **13.0 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.50 € | **4.20 €** | 13.4 % | **36.0 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.90 € | **24.50 €** | 39.2 % | **42.7 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP Black | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP White | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W Power Bank 20000mAh Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| EDIFIER T5s subwoofer černý | 126.00 € | **126.50 €** | 7.4 % | **7.9 %** | 126.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 115.00 € | **115.50 €** | 7.2 % | **7.7 %** | 115.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 115.00 € | **115.50 €** | 7.2 % | **7.7 %** | 115.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bravo Adria B-4780 bílá | 25.00 € | **25.50 €** | 5.0 % | **7.1 %** | 25.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 230290000 | 170.00 € | **170.50 €** | 8.6 % | **8.9 %** | 170.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EWS6526WC | 311.00 € | **311.50 €** | 7.9 % | **8.1 %** | 311.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH1833E0 | 147.00 € | **147.50 €** | 8.4 % | **8.8 %** | 147.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board S/M | 14.00 € | **14.50 €** | 5.3 % | **9.1 %** | 14.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Air Board M Compact | 54.50 € | **55.00 €** | 8.1 % | **9.1 %** | 54.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ardes AR4B01B | 45.00 € | **45.50 €** | 8.8 % | **10.0 %** | 45.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 808/05 | 60.00 € | **60.50 €** | 9.1 % | **10.0 %** | 60.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot CSC062X | 155.50 € | **156.00 €** | 5.8 % | **6.1 %** | 155.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO354VD | 130.00 € | **130.50 €** | 8.1 % | **8.5 %** | 130.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver VS5910X | 271.50 € | **272.00 €** | 5.9 % | **6.1 %** | 271.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI držák do auta s Magsafe AMS06BK | 15.00 € | **15.50 €** | 5.0 % | **8.5 %** | 15.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI MiTag set 3ks Google Find My APD006 | 37.00 € | **37.50 €** | 8.4 % | **9.9 %** | 37.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kaon MZ-52, satelitní přijímač Skylink | 60.00 € | **60.50 €** | 6.4 % | **7.3 %** | 60.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.50 € | **15.00 €** | 6.9 % | **10.6 %** | 14.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.00 € | **39.50 €** | 14.6 % | **16.1 %** | 39.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO754K | 36.00 € | **36.50 €** | 8.9 % | **10.4 %** | 36.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| FoodSaver FSR2002 | 16.00 € | **16.50 €** | 6.2 % | **9.5 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Panasonic SC-AKX520E-K | 302.00 € | **302.50 €** | 9.1 % | **9.3 %** | 302.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mio Smartbox IV | 30.00 € | **30.50 €** | 5.6 % | **7.3 %** | 30.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 12.50 € | **13.00 €** | 6.0 % | **10.2 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Café al’Italienne 1 kg zrno | 21.00 € | **21.50 €** | 5.5 % | **8.0 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WG2PS74A2W | 239.00 € | **239.50 €** | 6.1 % | **6.3 %** | 239.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 110G | 325.00 € | **325.50 €** | 8.4 % | **8.5 %** | 325.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.00 € | **16.50 €** | 5.9 % | **9.2 %** | 16.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.00 € | **28.50 €** | 34.8 % | **37.2 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 36.00 € | **36.50 €** | 37.9 % | **39.8 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **20.50 €** | 35.1 % | **38.4 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 12.00 € | **12.50 €** | 12.3 % | **16.9 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.00 € | **15.50 €** | 41.1 % | **45.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.00 € | **12.50 €** | 22.0 % | **27.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.00 € | **15.50 €** | 10.5 % | **14.1 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.00 € | **15.50 €** | 35.4 % | **39.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.00 € | **11.50 €** | 32.3 % | **38.3 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 26.00 € | **26.50 €** | 6.8 % | **8.8 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 10.00 € | **10.50 €** | 11.5 % | **17.1 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.00 € | **22.50 €** | 8.7 % | **11.2 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Svetelný merač UNI-T UT383 | 16.00 € | **16.50 €** | 7.8 % | **11.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 34.00 € | **34.50 €** | 34.7 % | **36.7 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.1 % | **8.0 %** | 56.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 283.00 € | **283.50 €** | 8.2 % | **8.4 %** | 283.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.00 € | **67.50 €** | 5.0 % | **5.8 %** | 67.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 14.00 € | **14.50 €** | 33.9 % | **38.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.00 € | **25.50 €** | 22.9 % | **25.3 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 46.00 € | **46.50 €** | 12.3 % | **13.5 %** | 46.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.00 € | **38.50 €** | 37.7 % | **39.5 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.00 € | **64.50 €** | 20.2 % | **21.1 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 49dB | 25.00 € | **25.50 €** | 28.0 % | **30.6 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 24.00 € | **24.50 €** | 33.5 % | **36.2 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM603 růžová | 35.00 € | **35.50 €** | 6.3 % | **7.9 %** | 35.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 12.00 € | **12.50 €** | 21.0 % | **26.1 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 101 | 158.50 € | **158.90 €** | 8.7 % | **9.0 %** | 158.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Instant Pot Vortex Compact (5,0 L) | 98.50 € | **98.90 €** | 6.6 % | **7.1 %** | 98.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente DigiChef+ kuchyňský robot | 125.50 € | **125.90 €** | 8.2 % | **8.5 %** | 125.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42102SV | 98.50 € | **98.90 €** | 9.0 % | **9.5 %** | 98.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| PRIMO PR406IM | 127.50 € | **127.90 €** | 9.3 % | **9.7 %** | 127.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO331L | 105.50 € | **105.90 €** | 9.0 % | **9.4 %** | 105.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal OptiGrill GC7P0810 | 98.50 € | **98.90 €** | 9.3 % | **9.8 %** | 98.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW402HE0 | 129.50 € | **129.90 €** | 9.1 % | **9.5 %** | 129.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT161E | 108.50 € | **108.90 €** | 6.1 % | **6.5 %** | 108.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 750 | 111.50 € | **111.90 €** | 6.6 % | **7.0 %** | 111.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.50 € | **88.90 €** | 5.7 % | **6.2 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.50 € | **119.90 €** | 34.4 % | **34.9 %** | 119.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.50 € | **78.90 €** | 14.7 % | **15.3 %** | 78.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Stěrka na dlažbu Classic s tele | 11.50 € | **11.90 €** | 5.5 % | **9.2 %** | 11.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.50 € | **15.90 €** | 7.7 % | **10.5 %** | 15.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi PE1600 | 15.50 € | **15.90 €** | 5.6 % | **8.4 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI CN GaN 33W, USB-C+USB, bílá CHPD0020 | 13.50 € | **13.90 €** | 7.7 % | **10.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 12.50 € | **12.90 €** | 40.4 % | **44.9 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.50 € | **14.90 €** | 9.0 % | **12.0 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 7.30 € | **7.70 €** | 45.5 % | **53.4 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.50 € | **11.90 €** | 40.8 % | **45.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový zvonček, do zásuvky, 180m, biely,... | 13.50 € | **13.90 €** | 3.5 % | **6.6 %** | 13.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.50 € | **10.90 €** | 41.3 % | **46.7 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 11.50 € | **11.90 €** | 6.9 % | **10.6 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **10.90 €** | 29.0 % | **33.9 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.50 € | **14.90 €** | 13.7 % | **16.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 16.50 € | **16.90 €** | 5.9 % | **8.4 %** | 16.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Steba Výrobník Muffinů CM 3 | 59.50 € | **59.90 €** | 8.8 % | **9.5 %** | 59.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.50 € | **33.90 €** | 6.8 % | **8.1 %** | 33.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 16.50 € | **16.90 €** | 5.9 % | **8.4 %** | 16.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit sušák Comfort Tower 420 | 47.50 € | **47.90 €** | 8.6 % | **9.5 %** | 47.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BL16GE30 | 57.50 € | **57.90 €** | 8.4 % | **9.2 %** | 57.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 24.50 € | **24.90 €** | 20.4 % | **22.3 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 22.50 € | **22.90 €** | 21.5 % | **23.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 27.50 € | **27.90 €** | 23.6 % | **25.4 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.50 € | **45.90 €** | 40.3 % | **41.6 %** | 45.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 24.50 € | **24.90 €** | 26.6 % | **28.7 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.50 € | **41.90 €** | 33.6 % | **34.9 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.50 € | **19.90 €** | 31.7 % | **34.4 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.50 € | **20.90 €** | 36.4 % | **39.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 58.50 € | **58.90 €** | 34.7 % | **35.6 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 31.50 € | **31.90 €** | 32.3 % | **34.0 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.50 € | **21.90 €** | 5.6 % | **7.5 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.50 € | **17.90 €** | 30.6 % | **33.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.50 € | **55.90 €** | 35.5 % | **36.4 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.90 €** | 18.7 % | **20.3 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.50 € | **33.90 €** | 24.3 % | **25.7 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 36.50 € | **36.90 €** | 7.4 % | **8.6 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **19.90 €** | 36.8 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 534.50 € | **534.90 €** | 6.0 % | **6.0 %** | 534.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 471.50 € | **471.90 €** | 6.9 % | **7.0 %** | 471.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| EZIDRI FD1000 ULTRA DIGITAL | 268.50 € | **268.90 €** | 9.0 % | **9.1 %** | 268.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO9079KR-PROMO | 284.50 € | **284.90 €** | 6.3 % | **6.5 %** | 284.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 449.50 € | **449.90 €** | 6.7 % | **6.8 %** | 449.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.60 €** | 28.5 % | **32.5 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.60 €** | 28.5 % | **32.5 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 235 | 442.90 € | **443.00 €** | 6.4 % | **6.4 %** | 443.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 698.90 € | **699.00 €** | 8.1 % | **8.1 %** | 699.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.90 € | **318.00 €** | 12.1 % | **12.1 %** | 317.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 659.90 € | **660.00 €** | 10.7 % | **10.7 %** | 659.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **561.00 €** | 7.3 % | **7.4 %** | 560.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 27011-56 | 44.90 € | **45.00 €** | 5.6 % | **5.8 %** | 44.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 93511 Pánev 28 cm | 32.90 € | **33.00 €** | 6.7 % | **7.0 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| EDIFIER ES20 reproduktor béžový | 48.90 € | **49.00 €** | 5.4 % | **5.6 %** | 49.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 25.90 € | **26.00 €** | 8.7 % | **9.1 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 17.90 € | **18.00 €** | 6.8 % | **7.4 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko Mezikus PCSKM | 57.90 € | **58.00 €** | 6.6 % | **6.8 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko Mezikus PCSKW | 57.90 € | **58.00 €** | 6.6 % | **6.8 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 25.8 % | **26.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 34.90 € | **35.00 €** | 34.0 % | **34.4 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.90 € | **23.00 €** | 38.6 % | **39.2 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 28.90 € | **29.00 €** | 27.1 % | **27.6 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.90 € | **27.00 €** | 35.2 % | **35.7 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 19.90 € | **20.00 €** | 24.1 % | **24.7 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.90 € | **23.00 €** | 33.7 % | **34.3 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.80 € | **5.90 €** | 36.7 % | **39.0 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.60 € | **5.70 €** | 24.4 % | **26.6 %** | 5.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.70 €** | 38.0 % | **41.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.80 € | **4.90 €** | 23.1 % | **25.7 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.60 € | **6.70 €** | 35.5 % | **37.6 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.80 € | **5.90 €** | 42.9 % | **45.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.50 € | **2.60 €** | 31.1 % | **36.4 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.80 € | **2.90 €** | 19.2 % | **23.4 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.10 € | **3.20 €** | 27.9 % | **32.1 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, čierny | 2.50 € | **2.60 €** | 30.3 % | **35.5 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.10 € | **3.20 €** | 33.4 % | **37.7 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.80 € | **3.90 €** | 23.1 % | **26.3 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.50 € | **3.60 €** | 12.5 % | **15.7 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.60 € | **3.70 €** | 41.4 % | **45.3 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.90 € | **2.00 €** | 17.0 % | **23.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.50 € | **3.60 €** | 21.1 % | **24.5 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 1.80 € | **1.90 €** | 26.2 % | **33.2 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.80 € | **1.90 €** | 17.1 % | **23.6 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-Hepa | 11.90 € | **12.00 €** | 7.5 % | **8.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **14.00 €** | 10.6 % | **11.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 15.90 € | **16.00 €** | 38.1 % | **39.0 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 13.90 € | **14.00 €** | 37.8 % | **38.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná stolná lampička s klipom bi... | 9.30 € | **9.40 €** | 10.1 % | **11.2 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.90 € | **13.00 €** | 37.5 % | **38.5 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.00 € | **8.10 €** | 9.7 % | **11.1 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.70 € | **7.80 €** | 31.5 % | **33.2 %** | 7.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.90 € | **14.00 €** | 31.9 % | **32.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 7.20 € | **7.30 €** | 23.2 % | **24.9 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.90 € | **10.00 €** | 23.8 % | **25.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **10.00 €** | 44.2 % | **45.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.20 € | **4.30 €** | 32.4 % | **35.5 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 26.3 % | **28.3 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 7.1 % | **8.7 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.20 € | **4.30 €** | 35.5 % | **38.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.90 € | **10.00 €** | 30.5 % | **31.8 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.90 € | **8.00 €** | 35.2 % | **36.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.80 € | **8.90 €** | 15.8 % | **17.1 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.40 € | **7.50 €** | 37.0 % | **38.9 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.20 € | **5.30 €** | 18.8 % | **21.0 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 33.7 % | **36.4 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.00 € | **8.10 €** | 35.2 % | **36.9 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **5.30 €** | 34.6 % | **37.2 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 11.8 % | **13.4 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.40 € | **4.50 €** | 34.0 % | **37.0 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.40 € | **6.50 €** | 39.9 % | **42.1 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3ferrari G1020400 Pizza trouba, 2 min | 220.90 € | **221.00 €** | 7.9 % | **8.0 %** | 221.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G2013900 Artiko Výrobník ledu | 125.90 € | **126.00 €** | 8.8 % | **8.8 %** | 126.00 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1207)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| YAMAHA R-N2000A SILVER | 3890.00 € | **3312.00 €** | 27.9 % | **8.9 %** | 3312.50 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2680.90 € | **2447.90 €** | 15.0 % | **5.0 %** | 1623.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-N1000A SILVER | 1599.00 € | **1366.90 €** | 24.2 % | **6.2 %** | 1367.00 € | stávame sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.50 €** | 15.0 % | **5.9 %** | 2645.65 € | stávame sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.00 €** | 64.7 % | **6.7 %** | 362.50 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2374.50 €** | 15.0 % | **6.6 %** | 2374.69 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **3020.50 €** | 15.0 % | **10.0 %** | 3020.71 € | stávame sa najlacnejší |
| GORENJE F4142PW | 359.00 € | **221.90 €** | 74.8 % | **8.0 %** | 222.00 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 479.00 € | **343.00 €** | 48.7 % | **6.5 %** | 343.50 € | stávame sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.50 €** | 28.6 % | **5.9 %** | 633.90 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 309.00 € | **176.90 €** | 88.1 % | **7.7 %** | 177.00 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **526.00 €** | 28.6 % | **5.9 %** | 526.50 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **353.90 €** | 39.7 % | **6.3 %** | 354.00 € | stávame sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.00 €** | 16.8 % | **9.2 %** | 1543.50 € | stávame sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **383.50 €** | 35.8 % | **6.5 %** | 383.90 € | stávame sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **503.50 €** | 26.9 % | **6.7 %** | 503.90 € | stávame sa najlacnejší |
| BEKO RFSA240M43WN | 469.00 € | **374.90 €** | 34.1 % | **7.2 %** | 375.00 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1396.50 € | **1307.50 €** | 15.0 % | **7.6 %** | 1307.89 € | stávame sa najlacnejší |
| Gorenje GECS5C70XPA | 559.00 € | **471.00 €** | 26.8 % | **6.9 %** | 471.50 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **511.00 €** | 24.2 % | **5.9 %** | 511.50 € | stávame sa najlacnejší |
| YAMAHA A-S1200 SILVER | 2399.00 € | **2315.00 €** | 13.1 % | **9.1 %** | 2315.50 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 369.00 € | **285.90 €** | 39.2 % | **7.8 %** | 286.00 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 303.50 € | **228.90 €** | 43.2 % | **8.0 %** | 229.00 € | stávame sa najlacnejší |
| Gorenje RK4182PW4 | 359.00 € | **285.50 €** | 32.2 % | **5.2 %** | 272.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 410090000 | 399.00 € | **329.90 €** | 29.2 % | **6.8 %** | 330.00 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 399.00 € | **334.90 €** | 26.6 % | **6.3 %** | 335.00 € | stávame sa najlacnejší |
| Samsung OLED QE77S99H | 3498.90 € | **3436.90 €** | 6.9 % | **5.0 %** | 3399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **708.90 €** | 15.0 % | **6.2 %** | 709.00 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **220.90 €** | 37.7 % | **9.0 %** | 221.00 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max Plus robotický s mopom... | 272.50 € | **216.90 €** | 32.1 % | **5.1 %** | 191.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 151.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 200.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75QN85F NEO QLED | 1195.50 € | **1141.50 €** | 10.0 % | **5.0 %** | 1049.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **346.90 €** | 22.9 % | **6.9 %** | 347.00 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 640.00 € | **589.90 €** | 15.0 % | **6.0 %** | 589.94 € | stávame sa najlacnejší |
| 3D Tlačiareň Creality K1 MAX | 543.50 € | **497.00 €** | 15.0 % | **5.2 %** | 497.06 € | stávame sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **242.50 €** | 28.7 % | **8.0 %** | 242.90 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 136.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **411.00 €** | 18.3 % | **6.8 %** | 411.50 € | stávame sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **56.90 €** | 96.0 % | **11.7 %** | 57.00 € | stávame sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 118.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 612.50 € | **570.50 €** | 15.0 % | **7.1 %** | 570.79 € | stávame sa najlacnejší |
| Beko BDIN38646D | 535.00 € | **493.90 €** | 15.9 % | **7.0 %** | 494.00 € | stávame sa najlacnejší |
| MOVA K30 akumulátorový mopový stojanový vysávač | 422.90 € | **386.50 €** | 15.0 % | **5.1 %** | 164.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **203.90 €** | 28.0 % | **9.2 %** | 204.00 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **243.90 €** | 24.9 % | **9.1 %** | 244.00 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **243.90 €** | 24.7 % | **9.0 %** | 244.00 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 439.00 € | **405.50 €** | 14.8 % | **6.0 %** | 405.90 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 176.50 € | **143.50 €** | 32.0 % | **7.3 %** | 143.60 € | stávame sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 782.50 € | **749.90 €** | 15.0 % | **10.2 %** | 750.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 404.50 € | **372.50 €** | 15.0 % | **5.9 %** | 372.57 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 279.00 € | **247.90 €** | 22.8 % | **9.1 %** | 248.00 € | stávame sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 649.90 € | **619.90 €** | 15.0 % | **9.7 %** | 620.00 € | stávame sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 793.90 € | **764.90 €** | 10.0 % | **6.0 %** | 765.00 € | stávame sa najlacnejší |
| GARRETT AT Max 8,5 x 11" INTL – detektor kovov | 757.50 € | **729.90 €** | 15.0 % | **10.8 %** | 730.00 € | stávame sa najlacnejší |
| 3D tlačový list ELEGOO OrangeStorm Giga | 2706.50 € | **2678.90 €** | 15.0 % | **13.8 %** | 2678.99 € | stávame sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 274.90 € | **249.00 €** | 18.2 % | **7.0 %** | 249.03 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 323.50 € | **298.00 €** | 15.0 % | **6.0 %** | 298.49 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 544.50 € | **519.90 €** | 15.0 % | **9.8 %** | 520.00 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.90 €** | 49.9 % | **20.0 %** | 99.00 € | stávame sa najlacnejší |
| Samsung OLED QE65S99H | 2914.50 € | **2889.90 €** | 10.0 % | **9.1 %** | 2890.00 € | stávame sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **402.00 €** | 15.0 % | **8.5 %** | 402.29 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 199.00 € | **175.00 €** | 22.9 % | **8.1 %** | 175.50 € | stávame sa najlacnejší |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 503.50 € | **479.90 €** | 15.0 % | **9.6 %** | 480.00 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 927.50 € | **904.00 €** | 10.0 % | **7.3 %** | 904.50 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 911.00 € | **888.00 €** | 10.0 % | **7.2 %** | 888.50 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **510.00 €** | 15.0 % | **10.1 %** | 510.43 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1376.90 €** | 11.0 % | **9.3 %** | 1377.00 € | stávame sa najlacnejší |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 253.50 € | **231.50 €** | 15.1 % | **5.1 %** | 207.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A7 bílá | 558.50 € | **537.00 €** | 10.0 % | **5.8 %** | 537.50 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 566.90 € | **545.90 €** | 10.1 % | **6.0 %** | 546.00 € | stávame sa najlacnejší |
| ETA 507590000 | 119.99 € | **99.50 €** | 26.8 % | **5.2 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE TH60E3B | 99.00 € | **78.90 €** | 33.7 % | **6.6 %** | 79.00 € | stávame sa najlacnejší |
| WHIRLPOOL AKR 749/1 IX | 139.00 € | **118.90 €** | 23.5 % | **5.6 %** | 119.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 298.50 € | **278.90 €** | 15.0 % | **7.5 %** | 278.99 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 297.50 € | **278.00 €** | 15.1 % | **7.5 %** | 278.02 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 657.90 € | **638.50 €** | 10.1 % | **6.8 %** | 638.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **68.90 €** | 43.8 % | **12.7 %** | 69.00 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **411.90 €** | 15.0 % | **10.0 %** | 412.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 269.50 € | **250.50 €** | 15.0 % | **6.9 %** | 250.76 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **410.90 €** | 14.9 % | **10.0 %** | 411.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 279.50 € | **261.00 €** | 15.1 % | **7.5 %** | 261.14 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 277.00 € | **259.00 €** | 15.0 % | **7.5 %** | 259.28 € | stávame sa najlacnejší |
| Rooma Espresso A6 bílá | 481.50 € | **463.90 €** | 10.0 % | **6.0 %** | 464.00 € | stávame sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 447.00 € | **429.50 €** | 14.9 % | **10.4 %** | 429.67 € | stávame sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 691.50 € | **674.00 €** | 10.1 % | **7.3 %** | 674.50 € | stávame sa najlacnejší |
| Gorenje DE69CS | 514.50 € | **497.00 €** | 10.0 % | **6.3 %** | 497.50 € | stávame sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.50 €** | 14.9 % | **9.7 %** | 346.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 59.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 279.50 € | **263.50 €** | 15.1 % | **8.5 %** | 263.76 € | stávame sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 572.50 € | **556.50 €** | 15.0 % | **11.8 %** | 556.90 € | stávame sa najlacnejší |
| CANDY CCGMEE9025PX/E | 814.50 € | **798.50 €** | 10.0 % | **7.9 %** | 798.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 86.90 € | **71.00 €** | 43.9 % | **17.6 %** | 71.24 € | stávame sa najlacnejší |
| Waydoo submersible | 287.50 € | **271.90 €** | 15.0 % | **8.8 %** | 272.00 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 539.50 € | **523.90 €** | 10.1 % | **6.9 %** | 524.00 € | stávame sa najlacnejší |
| ETA 002898050 | 79.99 € | **64.50 €** | 30.6 % | **5.3 %** | 64.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RR8589CE | 411.90 € | **396.90 €** | 10.1 % | **6.0 %** | 397.00 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 534.90 € | **519.90 €** | 10.0 % | **6.9 %** | 520.00 € | stávame sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 364.90 € | **350.00 €** | 10.0 % | **5.5 %** | 350.50 € | stávame sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **479.90 €** | 15.0 % | **11.6 %** | 480.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **409.90 €** | 15.0 % | **11.1 %** | 410.00 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 522.50 € | **507.90 €** | 10.0 % | **6.9 %** | 508.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 225.50 € | **211.00 €** | 14.7 % | **7.3 %** | 211.19 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 211.90 € | **197.50 €** | 12.8 % | **5.2 %** | 188.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 174.00 € | **159.90 €** | 14.9 % | **5.6 %** | 159.95 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 129.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 129.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo LED800 antracit | 309.50 € | **295.50 €** | 10.0 % | **5.1 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo LED800 bílý | 309.50 € | **295.50 €** | 10.0 % | **5.1 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X70 Soundbar | 612.90 € | **598.90 €** | 15.0 % | **12.4 %** | 599.00 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 332.50 € | **318.50 €** | 10.1 % | **5.4 %** | 318.90 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 481.90 € | **468.00 €** | 10.0 % | **6.9 %** | 468.50 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 375.50 € | **361.90 €** | 10.0 % | **6.0 %** | 362.00 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **38.90 €** | 50.5 % | **11.5 %** | 39.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 153.50 € | **140.00 €** | 15.2 % | **5.0 %** | 130.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 65.50 € | **52.00 €** | 33.5 % | **6.0 %** | 52.09 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 343.90 € | **330.50 €** | 10.1 % | **5.8 %** | 330.90 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 183.00 € | **169.90 €** | 14.9 % | **6.7 %** | 169.95 € | stávame sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 253.00 € | **239.90 €** | 15.0 % | **9.0 %** | 239.95 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **105.90 €** | 22.6 % | **9.1 %** | 106.00 € | stávame sa najlacnejší |
| Uperfect UPi B7 10.1" 1920x1200 60Hz Portable Monitor | 151.90 € | **138.90 €** | 15.1 % | **5.3 %** | 138.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **34.90 €** | 54.8 % | **12.8 %** | 35.00 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 343.50 € | **330.50 €** | 10.0 % | **5.8 %** | 330.90 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 311.50 € | **298.50 €** | 10.1 % | **5.5 %** | 298.90 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 53.00 € | **40.00 €** | 43.6 % | **8.4 %** | 40.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C510W 3MPx, vonkajšia, IP, WiFi,... | 63.90 € | **51.00 €** | 31.7 % | **5.1 %** | 46.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **665.90 €** | 15.0 % | **12.9 %** | 666.00 € | stávame sa najlacnejší |
| Gorenje N62CS2XL4 | 447.50 € | **434.90 €** | 10.1 % | **7.0 %** | 435.00 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 455.50 € | **442.90 €** | 10.0 % | **7.0 %** | 443.00 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 62.00 € | **49.50 €** | 37.7 % | **10.0 %** | 49.90 € | stávame sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.00 €** | 10.1 % | **6.9 %** | 413.50 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **30.00 €** | 48.1 % | **5.8 %** | 30.50 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 378.90 € | **367.00 €** | 10.0 % | **6.6 %** | 367.50 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 494.90 € | **483.00 €** | 10.0 % | **7.4 %** | 483.50 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 405.90 € | **394.00 €** | 10.0 % | **6.8 %** | 394.50 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 261.50 € | **249.90 €** | 10.0 % | **5.1 %** | 248.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica OMC6751B | 256.00 € | **244.50 €** | 10.0 % | **5.1 %** | 230.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2850DB 2.0 (čierne) | 281.00 € | **269.50 €** | 14.9 % | **10.2 %** | 269.59 € | stávame sa najlacnejší |
| ETA 723590000 | 338.50 € | **327.00 €** | 10.1 % | **6.4 %** | 327.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 34.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo Chamber Line 70 | 359.90 € | **348.90 €** | 10.1 % | **6.7 %** | 349.00 € | stávame sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 428.50 € | **417.50 €** | 15.0 % | **12.0 %** | 417.60 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 338.90 € | **327.90 €** | 15.1 % | **11.3 %** | 328.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 75.00 € | **64.00 €** | 59.1 % | **35.8 %** | 64.21 € | stávame sa najlacnejší |
| Guzzanti GZ 338 | 581.00 € | **570.00 €** | 10.0 % | **7.9 %** | 570.50 € | stávame sa najlacnejší |
| Arzopa D156 (hnedý) 15,6" digitálny fotorámik | 125.90 € | **115.00 €** | 15.0 % | **5.0 %** | 61.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 555.90 € | **545.00 €** | 10.1 % | **7.9 %** | 545.50 € | stávame sa najlacnejší |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 270.50 € | **259.90 €** | 15.0 % | **10.5 %** | 259.94 € | stávame sa najlacnejší |
| Concept IDV5160wh | 363.50 € | **352.90 €** | 10.1 % | **6.9 %** | 353.00 € | stávame sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 59.50 € | **48.90 €** | 40.2 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 123.50 € | **112.90 €** | 15.2 % | **5.3 %** | 89.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 169.50 € | **158.90 €** | 18.5 % | **11.1 %** | 159.00 € | stávame sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.90 €** | 14.9 % | **8.9 %** | 190.00 € | stávame sa najlacnejší |
| UNI-T UT521 tester uzemnenia | 140.00 € | **129.50 €** | 15.0 % | **6.4 %** | 129.61 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 47.50 € | **37.00 €** | 38.3 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 114.50 € | **104.00 €** | 17.4 % | **6.6 %** | 104.38 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 228.50 € | **218.00 €** | 15.1 % | **9.8 %** | 218.42 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 357.50 € | **347.00 €** | 10.1 % | **6.8 %** | 347.50 € | stávame sa najlacnejší |
| JVC Party reproduktor XS-EP514B | 226.90 € | **216.50 €** | 10.1 % | **5.0 %** | 205.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.50 €** | 25.0 % | **7.1 %** | 62.90 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 279.90 € | **269.50 €** | 10.1 % | **6.0 %** | 269.90 € | stávame sa najlacnejší |
| Tefal GC772830 | 225.50 € | **215.50 €** | 10.1 % | **5.2 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI1040GR | 35.90 € | **25.90 €** | 51.1 % | **9.0 %** | 26.00 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP Z22P PRO s 22-palcovým doty... | 308.90 € | **298.90 €** | 11.5 % | **7.9 %** | 299.00 € | stávame sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 378.90 € | **368.90 €** | 8.2 % | **5.3 %** | 369.00 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.15 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **181.00 €** | 15.0 % | **9.0 %** | 181.38 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.50 €** | 10.0 % | **6.9 %** | 340.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 149.00 € | **139.00 €** | 15.0 % | **7.3 %** | 139.41 € | stávame sa najlacnejší |
| Amica KF 17191 | 39.00 € | **29.00 €** | 60.1 % | **19.0 %** | 29.50 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 182.90 € | **173.00 €** | 15.1 % | **8.9 %** | 173.42 € | stávame sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **45.00 €** | 37.3 % | **12.6 %** | 45.50 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 29.90 € | **20.00 €** | 57.4 % | **5.3 %** | 20.50 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 332.90 € | **323.00 €** | 10.1 % | **6.8 %** | 323.50 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 284.50 € | **274.90 €** | 10.0 % | **6.3 %** | 275.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (čier... | 328.50 € | **318.90 €** | 15.0 % | **11.6 %** | 319.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 328.50 € | **318.90 €** | 15.0 % | **11.6 %** | 319.00 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 424.50 € | **414.90 €** | 10.0 % | **7.5 %** | 415.00 € | stávame sa najlacnejší |
| Guzzanti GZ 325 | 262.50 € | **252.90 €** | 10.1 % | **6.1 %** | 253.00 € | stávame sa najlacnejší |
| Beko VRT96425VD | 261.50 € | **251.90 €** | 10.1 % | **6.0 %** | 252.00 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **468.50 €** | 15.0 % | **12.7 %** | 468.88 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 58.00 € | **48.50 €** | 43.5 % | **20.0 %** | 48.90 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 98.50 € | **89.00 €** | 17.8 % | **6.4 %** | 89.47 € | stávame sa najlacnejší |
| Rowenta GZ5436E0 | 298.50 € | **289.00 €** | 10.0 % | **6.5 %** | 289.50 € | stávame sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 50.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S351DB 2.1 (čierne) | 258.00 € | **248.90 €** | 14.9 % | **10.9 %** | 249.00 € | stávame sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **38.90 €** | 38.7 % | **12.7 %** | 39.00 € | stávame sa najlacnejší |
| Vákuovačka G21 Nefrit | 126.50 € | **117.50 €** | 18.0 % | **9.6 %** | 117.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 19.99 € | **11.00 €** | 91.9 % | **5.6 %** | 11.50 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 250.90 € | **242.00 €** | 10.0 % | **6.1 %** | 242.50 € | stávame sa najlacnejší |
| GUZZANTI GZ 220A | 224.90 € | **216.00 €** | 10.2 % | **5.8 %** | 216.50 € | stávame sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 406.50 € | **397.90 €** | 9.4 % | **7.1 %** | 398.00 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 32.00 € | **23.50 €** | 43.3 % | **5.2 %** | 23.90 € | stávame sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **169.50 €** | 15.0 % | **9.5 %** | 169.90 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 217.50 € | **209.00 €** | 10.1 % | **5.8 %** | 209.50 € | stávame sa najlacnejší |
| Záložní zdroj MHPower WPU-300-12 UPS 300W 12V čistý ... | 94.00 € | **85.90 €** | 15.0 % | **5.1 %** | 79.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 90.00 € | **81.90 €** | 17.4 % | **6.9 %** | 82.00 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 121.00 € | **112.90 €** | 14.8 % | **7.1 %** | 113.00 € | stávame sa najlacnejší |
| Guzzanti GZ 210A | 221.00 € | **212.90 €** | 10.0 % | **6.0 %** | 213.00 € | stávame sa najlacnejší |
| ELECTROLUX ZE064 | 38.99 € | **30.90 €** | 45.3 % | **15.2 %** | 31.00 € | stávame sa najlacnejší |
| Electrolux EF167 | 21.99 € | **13.90 €** | 70.9 % | **8.0 %** | 14.00 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **13.90 €** | 70.9 % | **8.0 %** | 14.00 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **38.50 €** | 28.3 % | **6.2 %** | 35.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 64.50 € | **56.50 €** | 46.2 % | **28.1 %** | 56.54 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 31.00 € | **23.00 €** | 53.7 % | **14.0 %** | 23.12 € | stávame sa najlacnejší |
| Blesk GODOX V100 TTL pre Canon | 315.00 € | **307.00 €** | 15.0 % | **12.1 %** | 307.34 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 151.50 € | **143.50 €** | 12.9 % | **6.9 %** | 143.90 € | stávame sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 232.50 € | **224.50 €** | 10.1 % | **6.3 %** | 224.90 € | stávame sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **185.00 €** | 15.1 % | **10.4 %** | 185.42 € | stávame sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **23.00 €** | 54.5 % | **15.0 %** | 23.20 € | stávame sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 247.50 € | **239.90 €** | 14.9 % | **11.4 %** | 240.00 € | stávame sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 246.00 € | **238.50 €** | 8.4 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **237.00 €** | 15.1 % | **11.6 %** | 237.02 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 111.50 € | **104.00 €** | 14.7 % | **7.0 %** | 104.19 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 111.50 € | **104.00 €** | 14.7 % | **7.0 %** | 104.19 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 196.50 € | **189.00 €** | 10.1 % | **5.9 %** | 189.50 € | stávame sa najlacnejší |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 116.90 € | **109.50 €** | 15.1 % | **7.8 %** | 109.90 € | stávame sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 154.50 € | **147.50 €** | 10.2 % | **5.2 %** | 142.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 109A | 181.90 € | **174.90 €** | 10.1 % | **5.8 %** | 175.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 194.90 € | **187.90 €** | 10.1 % | **6.1 %** | 188.00 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 112.50 € | **105.50 €** | 15.0 % | **7.9 %** | 105.66 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 410.50 € | **403.50 €** | 15.0 % | **13.1 %** | 403.70 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 92.00 € | **85.00 €** | 14.8 % | **6.1 %** | 85.22 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 307.50 € | **300.50 €** | 15.0 % | **12.4 %** | 300.78 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **300.50 €** | 15.0 % | **12.4 %** | 300.78 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 47.00 € | **40.00 €** | 58.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 110.00 € | **103.00 €** | 43.6 % | **34.5 %** | 103.35 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 29.00 € | **22.00 €** | 54.0 % | **16.8 %** | 22.45 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 41.00 € | **34.00 €** | 31.9 % | **9.3 %** | 34.49 € | stávame sa najlacnejší |
| GUZZANTI GZ 8501A | 157.00 € | **150.00 €** | 10.0 % | **5.1 %** | 150.50 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.00 €** | 47.5 % | **6.3 %** | 18.50 € | stávame sa najlacnejší |
| Tefal GC728D10 | 169.90 € | **163.00 €** | 10.1 % | **5.6 %** | 163.50 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 13.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 48.90 € | **42.00 €** | 43.9 % | **23.6 %** | 42.50 € | stávame sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 114.50 € | **107.90 €** | 18.8 % | **11.9 %** | 107.91 € | stávame sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 145.50 € | **138.90 €** | 14.9 % | **9.7 %** | 138.92 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 31.50 € | **25.00 €** | 54.0 % | **22.2 %** | 25.24 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **34.50 €** | 38.3 % | **16.3 %** | 34.90 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 85.00 € | **78.50 €** | 15.0 % | **6.2 %** | 78.90 € | stávame sa najlacnejší |
| Johansson KIT 6715 zesilovač + zdroj (2438) | 161.50 € | **155.00 €** | 14.9 % | **10.3 %** | 155.50 € | stávame sa najlacnejší |
| Candy ProWash 550 SLIM BP 37SBL8-S | 278.50 € | **272.00 €** | 10.1 % | **7.5 %** | 272.50 € | stávame sa najlacnejší |
| Candy CDPH 2D947X | 321.50 € | **315.00 €** | 10.1 % | **7.9 %** | 315.50 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 156.90 € | **150.50 €** | 15.1 % | **10.4 %** | 150.61 € | stávame sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.90 € | **82.50 €** | 15.1 % | **6.8 %** | 82.79 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 345.00 € | **338.90 €** | 14.9 % | **12.9 %** | 339.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **327.90 €** | 15.0 % | **12.9 %** | 328.00 € | stávame sa najlacnejší |
| Braun CG9043 | 219.00 € | **212.90 €** | 10.0 % | **7.0 %** | 213.00 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **15.90 €** | 49.2 % | **7.9 %** | 16.00 € | stávame sa najlacnejší |
| Leifheit Clean Twist M Ergo+náhr. Static | 46.90 € | **40.90 €** | 29.8 % | **13.2 %** | 41.00 € | stávame sa najlacnejší |
| Gorenje W11NHPI84AS | 290.90 € | **284.90 €** | 10.1 % | **7.8 %** | 285.00 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 298.90 € | **292.90 €** | 10.1 % | **7.9 %** | 293.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 194.90 € | **188.90 €** | 10.2 % | **6.8 %** | 189.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 40.50 € | **34.50 €** | 59.2 % | **35.6 %** | 34.65 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **78.50 €** | 15.2 % | **7.0 %** | 78.78 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.50 €** | 15.2 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.90 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 86.50 € | **80.50 €** | 15.2 % | **7.2 %** | 80.90 € | stávame sa najlacnejší |
| Gorenje RK58DPB4I | 299.50 € | **293.50 €** | 10.1 % | **7.9 %** | 293.90 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 142.50 € | **136.50 €** | 10.0 % | **5.4 %** | 136.90 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 678.00 € | **672.00 €** | 10.0 % | **9.0 %** | 672.50 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 176.90 € | **171.00 €** | 10.1 % | **6.4 %** | 171.50 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **114.00 €** | 11.3 % | **5.8 %** | 114.50 € | stávame sa najlacnejší |
| JBL CHARGEES3 | 119.90 € | **114.00 €** | 15.6 % | **9.9 %** | 114.50 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **57.00 €** | 21.8 % | **10.3 %** | 57.50 € | stávame sa najlacnejší |
| Candy TCA273D3-S | 286.50 € | **280.90 €** | 10.0 % | **7.9 %** | 281.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 27.50 € | **21.90 €** | 34.6 % | **7.2 %** | 21.99 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 80.50 € | **74.90 €** | 14.7 % | **6.8 %** | 74.94 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 157.50 € | **151.90 €** | 10.1 % | **6.1 %** | 152.00 € | stávame sa najlacnejší |
| Maxxo Chamber Line 40 | 251.50 € | **245.90 €** | 10.1 % | **7.7 %** | 246.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **224.90 €** | 15.0 % | **12.2 %** | 225.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 28.50 € | **23.00 €** | 32.9 % | **7.3 %** | 23.09 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 67.50 € | **62.00 €** | 50.4 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 74.00 € | **68.50 €** | 15.0 % | **6.5 %** | 68.87 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 202.50 € | **197.00 €** | 14.7 % | **11.5 %** | 197.39 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 27.00 € | **21.50 €** | 38.2 % | **10.1 %** | 21.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 36.00 € | **30.50 €** | 32.0 % | **11.8 %** | 30.90 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 62.50 € | **57.00 €** | 39.6 % | **27.3 %** | 57.50 € | stávame sa najlacnejší |
| Samsung VG-SCFC55SGMXC | 123.50 € | **118.00 €** | 10.3 % | **5.4 %** | 118.50 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 504.50 € | **499.00 €** | 10.1 % | **8.9 %** | 499.50 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 118.90 € | **113.50 €** | 10.3 % | **5.3 %** | 113.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 28.90 € | **23.50 €** | 29.4 % | **5.2 %** | 20.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 63.00 € | **57.90 €** | 14.8 % | **5.5 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 21.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **23.90 €** | 40.6 % | **15.9 %** | 24.00 € | stávame sa najlacnejší |
| DOMO DO9252I | 257.00 € | **251.90 €** | 10.0 % | **7.8 %** | 252.00 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.00 € | **237.90 €** | 10.0 % | **7.7 %** | 238.00 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 172.00 € | **166.90 €** | 10.0 % | **6.8 %** | 167.00 € | stávame sa najlacnejší |
| Beko VRT86325VI | 203.90 € | **198.90 €** | 10.2 % | **7.5 %** | 199.00 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 137.90 € | **132.90 €** | 10.0 % | **6.0 %** | 133.00 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.50 €** | 37.8 % | **12.7 %** | 22.68 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA100 sada pre výmenu vy... | 24.00 € | **19.00 €** | 33.4 % | **5.6 %** | 19.19 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 88.00 € | **83.00 €** | 15.0 % | **8.5 %** | 83.20 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.50 €** | 15.0 % | **14.3 %** | 799.79 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.50 € | **167.50 €** | 10.2 % | **7.0 %** | 167.90 € | stávame sa najlacnejší |
| Webová kamera EMEET SmartCam S600L | 65.00 € | **60.00 €** | 14.7 % | **5.9 %** | 60.41 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 36.00 € | **31.00 €** | 37.9 % | **18.8 %** | 31.50 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **11.00 €** | 56.1 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.90 €** | 14.9 % | **10.4 %** | 114.93 € | stávame sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 74.50 € | **69.90 €** | 14.9 % | **7.8 %** | 69.96 € | stávame sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 44.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **100.00 €** | 14.9 % | **10.0 %** | 100.14 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 31.00 € | **26.50 €** | 58.5 % | **35.5 %** | 26.64 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 20.50 € | **16.00 €** | 45.8 % | **13.8 %** | 16.17 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 354.50 € | **350.00 €** | 15.1 % | **13.6 %** | 350.20 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 15.00 € | **10.50 €** | 53.2 % | **7.2 %** | 10.76 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 39.00 € | **34.50 €** | 41.4 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 28.50 € | **24.00 €** | 58.5 % | **33.5 %** | 24.49 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 209.50 € | **205.00 €** | 10.1 % | **7.7 %** | 205.50 € | stávame sa najlacnejší |
| G3Ferrari G2014401 Zmrzlinovač | 178.50 € | **174.00 €** | 10.0 % | **7.3 %** | 174.50 € | stávame sa najlacnejší |
| Braun IS5247.VI | 188.50 € | **184.00 €** | 10.1 % | **7.5 %** | 184.50 € | stávame sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 104.90 € | **100.50 €** | 10.1 % | **5.5 %** | 100.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 110.90 € | **106.50 €** | 14.9 % | **10.4 %** | 106.54 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 23.90 € | **19.50 €** | 39.2 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 32.90 € | **28.50 €** | 38.9 % | **20.3 %** | 28.90 € | stávame sa najlacnejší |
| Electrolux MCK CZ | 29.90 € | **25.50 €** | 46.4 % | **24.8 %** | 25.90 € | stávame sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 52.00 € | **47.90 €** | 14.3 % | **5.3 %** | 44.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrý LED pásik TP-Link Tapo L900-5 5m, 13.5W, 230V... | 21.00 € | **16.90 €** | 30.7 % | **5.2 %** | 14.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 36.00 € | **31.90 €** | 19.6 % | **6.0 %** | 30.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **37.90 €** | 23.2 % | **11.2 %** | 38.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K4 ruční, bezdrátový set | 122.90 € | **118.90 €** | 8.7 % | **5.2 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **91.50 €** | 10.1 % | **5.5 %** | 91.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer Air PR... | 63.50 € | **59.50 €** | 14.8 % | **7.6 %** | 59.51 € | stávame sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 178.90 € | **174.90 €** | 10.0 % | **7.6 %** | 175.00 € | stávame sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **418.90 €** | 15.1 % | **14.0 %** | 419.00 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.90 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Gold - 9150 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.90 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Rose Gold - 9151 | 92.50 € | **88.50 €** | 10.1 % | **5.3 %** | 88.90 € | stávame sa najlacnejší |
| Moza Racing RS050 adaptér na volant + univerzálny HUB | 45.50 € | **41.50 €** | 15.5 % | **5.3 %** | 41.90 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 128.00 € | **124.00 €** | 10.1 % | **6.6 %** | 124.50 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 209.90 € | **206.00 €** | 10.1 % | **8.0 %** | 206.50 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 46.90 € | **43.00 €** | 15.2 % | **5.6 %** | 43.09 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **17.00 €** | 43.0 % | **16.3 %** | 17.13 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 35.90 € | **32.00 €** | 22.8 % | **9.4 %** | 32.50 € | stávame sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 272.90 € | **269.00 €** | 9.3 % | **7.8 %** | 269.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.90 € | **8.10 €** | 56.6 % | **6.6 %** | 8.11 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 20.50 € | **16.90 €** | 33.9 % | **10.4 %** | 16.96 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 8.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 19.50 € | **15.90 €** | 31.7 % | **7.4 %** | 15.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 19.50 € | **15.90 €** | 46.0 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.00 € | **178.50 €** | 14.7 % | **12.5 %** | 178.51 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.50 € | **81.00 €** | 10.0 % | **5.5 %** | 81.02 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.50 €** | 47.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.50 €** | 47.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.50 €** | 47.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 30.50 € | **27.00 €** | 38.4 % | **22.5 %** | 27.07 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 17.50 € | **14.00 €** | 56.3 % | **25.1 %** | 14.07 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **9.00 €** | 46.0 % | **5.1 %** | 9.09 € | stávame sa najlacnejší |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 52.00 € | **48.50 €** | 15.1 % | **7.4 %** | 48.59 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 215.00 € | **211.50 €** | 15.0 % | **13.1 %** | 211.59 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **83.00 €** | 15.2 % | **10.5 %** | 83.15 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **52.00 €** | 15.2 % | **7.9 %** | 52.17 € | stávame sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **46.00 €** | 15.3 % | **7.1 %** | 46.21 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 17.50 € | **14.00 €** | 45.5 % | **16.4 %** | 14.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 35.00 € | **31.50 €** | 43.9 % | **29.5 %** | 31.72 € | stávame sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Nikon | 269.50 € | **266.00 €** | 15.0 % | **13.5 %** | 266.35 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 20.50 € | **17.00 €** | 33.9 % | **11.0 %** | 17.44 € | stávame sa najlacnejší |
| Candy CHW6LBX/4U2 IDEA | 82.50 € | **79.00 €** | 10.5 % | **5.8 %** | 79.50 € | stávame sa najlacnejší |
| Electrolux E200SM | 19.99 € | **16.50 €** | 35.7 % | **12.0 %** | 16.90 € | stávame sa najlacnejší |
| Čistička vzduchu TEESA PURE LIFE P500 | 76.90 € | **73.50 €** | 15.2 % | **10.1 %** | 73.69 € | stávame sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.50 €** | 15.2 % | **9.8 %** | 69.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 24.90 € | **21.50 €** | 59.2 % | **37.4 %** | 21.52 € | stávame sa najlacnejší |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 55.90 € | **52.50 €** | 15.3 % | **8.2 %** | 52.89 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 629.00 € | **625.90 €** | 10.0 % | **9.5 %** | 626.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **32.90 €** | 15.0 % | **5.1 %** | 32.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stropné svietidlo Yeelight C2201C300 | 45.00 € | **41.90 €** | 14.5 % | **6.6 %** | 41.96 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Cycplus AS2 mini electric pump | 45.00 € | **41.90 €** | 14.9 % | **7.0 %** | 41.99 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 11.00 € | **7.90 €** | 54.5 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 82.00 € | **78.90 €** | 13.4 % | **9.1 %** | 79.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 27.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **33.00 €** | 14.6 % | **5.0 %** | 32.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 31.90 € | **28.90 €** | 16.7 % | **5.7 %** | 28.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štúdiové slúchadlá Maono MH700 (čierne) | 34.90 € | **31.90 €** | 15.2 % | **5.3 %** | 31.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 37.50 € | **34.50 €** | 15.6 % | **6.4 %** | 34.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Akumulátor pre DJI Avata 2 | 121.00 € | **118.00 €** | 14.9 % | **12.1 %** | 118.01 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **118.00 €** | 14.9 % | **12.0 %** | 118.04 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.90 €** | 18.5 % | **9.8 %** | 37.97 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 183.90 € | **180.90 €** | 10.2 % | **8.4 %** | 181.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 45.00 € | **42.00 €** | 17.4 % | **9.6 %** | 42.15 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 16.00 € | **13.00 €** | 41.2 % | **14.8 %** | 13.20 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.00 € | **45.00 €** | 14.8 % | **7.6 %** | 45.23 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **45.00 €** | 14.5 % | **7.4 %** | 45.25 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **36.00 €** | 14.9 % | **6.1 %** | 36.29 € | stávame sa najlacnejší |
| Masážní přístroj nohou a lýtek Shiatsu, REBEL ACTIVE... | 35.50 € | **32.50 €** | 15.7 % | **5.9 %** | 32.85 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **101.50 €** | 15.1 % | **11.8 %** | 101.88 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 211.50 € | **208.50 €** | 18.2 % | **16.5 %** | 208.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 79.50 € | **76.50 €** | 43.8 % | **38.3 %** | 76.89 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **35.50 €** | 55.1 % | **43.0 %** | 35.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.50 €** | 56.5 % | **28.1 %** | 13.90 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **84.00 €** | 14.8 % | **10.9 %** | 84.44 € | stávame sa najlacnejší |
| ETA 160390000 | 19.99 € | **17.00 €** | 26.4 % | **7.5 %** | 17.50 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 81.90 € | **79.00 €** | 15.0 % | **10.9 %** | 79.08 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **103.00 €** | 15.1 % | **12.0 %** | 103.27 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 179.90 € | **177.00 €** | 10.1 % | **8.3 %** | 177.50 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 174.90 € | **172.00 €** | 10.1 % | **8.2 %** | 172.50 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 14.90 € | **12.00 €** | 35.0 % | **8.8 %** | 12.29 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 24.90 € | **22.00 €** | 55.2 % | **37.2 %** | 22.20 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 31.90 € | **29.00 €** | 15.5 % | **5.0 %** | 29.22 € | stávame sa najlacnejší |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 34.90 € | **32.00 €** | 15.3 % | **5.8 %** | 32.29 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 40.90 € | **38.00 €** | 17.5 % | **9.1 %** | 38.30 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **39.00 €** | 15.1 % | **7.2 %** | 39.46 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 57.90 € | **55.00 €** | 16.3 % | **10.5 %** | 55.50 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 20.50 € | **17.90 €** | 41.5 % | **23.5 %** | 18.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 24.50 € | **21.90 €** | 43.5 % | **28.3 %** | 22.00 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.50 € | **131.90 €** | 10.3 % | **8.2 %** | 132.00 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.50 € | **123.90 €** | 10.2 % | **8.0 %** | 124.00 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **131.90 €** | 10.4 % | **8.3 %** | 132.00 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.50 € | **126.90 €** | 10.3 % | **8.1 %** | 127.00 € | stávame sa najlacnejší |
| Beko VRT76325VW | 168.50 € | **165.90 €** | 10.0 % | **8.3 %** | 166.00 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 144.50 € | **141.90 €** | 10.3 % | **8.3 %** | 142.00 € | stávame sa najlacnejší |
| MERACH spinningové kolo MR-S26B2-EU (čierne) | 177.50 € | **174.90 €** | 14.9 % | **13.2 %** | 175.00 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **70.90 €** | 10.6 % | **6.7 %** | 71.00 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 180.50 € | **177.90 €** | 10.3 % | **8.7 %** | 178.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 93.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 16.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **12.50 €** | 28.9 % | **7.4 %** | 10.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 34.00 € | **31.50 €** | 14.8 % | **6.4 %** | 31.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 222.50 € | **220.00 €** | 15.1 % | **13.8 %** | 220.03 € | stávame sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 52.00 € | **49.50 €** | 14.4 % | **8.9 %** | 49.57 € | stávame sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **32.00 €** | 49.6 % | **38.8 %** | 32.10 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **15.00 €** | 42.8 % | **22.4 %** | 15.13 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 25.00 € | **22.50 €** | 47.1 % | **32.4 %** | 22.65 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 41.0 % | **26.6 %** | 22.20 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **31.00 €** | 14.5 % | **5.9 %** | 31.29 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 28.50 € | **26.00 €** | 50.2 % | **37.0 %** | 26.34 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 28.38 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **47.50 €** | 14.6 % | **8.9 %** | 47.88 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **255.00 €** | 15.1 % | **14.0 %** | 255.39 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.00 € | **128.50 €** | 10.1 % | **8.0 %** | 128.90 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **24.00 €** | 54.7 % | **40.1 %** | 24.50 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 162.50 € | **160.00 €** | 10.1 % | **8.4 %** | 160.50 € | stávame sa najlacnejší |
| Tefal BL87G831 | 125.50 € | **123.00 €** | 10.3 % | **8.1 %** | 123.50 € | stávame sa najlacnejší |
| Domo DO344DH | 149.50 € | **147.00 €** | 10.1 % | **8.3 %** | 147.50 € | stávame sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25630 fialová | 47.50 € | **45.00 €** | 14.9 % | **8.8 %** | 45.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 28.50 € | **26.00 €** | 53.4 % | **40.0 %** | 26.50 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.50 €** | 38.6 % | **12.0 %** | 10.90 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.99 € | **17.50 €** | 23.0 % | **7.7 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 250.90 € | **248.50 €** | 10.1 % | **9.1 %** | 248.90 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L630 GU10, 3,7W, 230V, c... | 12.00 € | **9.60 €** | 32.2 % | **5.8 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 15.90 € | **13.50 €** | 31.1 % | **11.3 %** | 13.71 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (biele) | 25.90 € | **23.50 €** | 15.9 % | **5.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 27.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freestyle koloběžka NILS Extreme HS033 černo-červená | 50.90 € | **48.50 €** | 15.0 % | **9.6 %** | 48.74 € | stávame sa najlacnejší |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 39.90 € | **37.50 €** | 13.5 % | **6.7 %** | 37.90 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 15.00 € | **12.90 €** | 45.7 % | **25.3 %** | 12.96 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.00 € | **102.90 €** | 10.0 % | **7.8 %** | 102.96 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.00 € | **104.90 €** | 10.0 % | **7.9 %** | 105.00 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.00 € | **168.90 €** | 10.0 % | **8.7 %** | 169.00 € | stávame sa najlacnejší |
| DOMO DO42602S | 40.50 € | **38.50 €** | 11.3 % | **5.8 %** | 38.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 31.50 € | **29.50 €** | 54.7 % | **44.9 %** | 29.52 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 40.00 € | **38.00 €** | 14.3 % | **8.6 %** | 38.06 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 12.90 € | **10.90 €** | 29.3 % | **9.3 %** | 10.97 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.00 € | **6.00 €** | 48.8 % | **11.6 %** | 6.09 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 138.90 € | **136.90 €** | 10.3 % | **8.7 %** | 137.00 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 159.90 € | **157.90 €** | 10.2 % | **8.8 %** | 158.00 € | stávame sa najlacnejší |
| Russell Hobbs 24992-70 | 40.90 € | **38.90 €** | 10.5 % | **5.1 %** | 39.00 € | stávame sa najlacnejší |
| Salente Combo-4In1 | 126.90 € | **124.90 €** | 10.0 % | **8.3 %** | 125.00 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 167.50 € | **165.50 €** | 8.2 % | **6.9 %** | 165.64 € | stávame sa najlacnejší |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 197.50 € | **195.50 €** | 15.1 % | **14.0 %** | 195.71 € | stávame sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 22.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 98.50 € | **96.50 €** | 43.6 % | **40.7 %** | 96.77 € | stávame sa najlacnejší |
| Kettlebell litinový nastavitelný 9 kg REBEL ACTIVE R... | 46.50 € | **44.50 €** | 15.3 % | **10.3 %** | 44.82 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 14.50 € | **12.50 €** | 57.0 % | **35.3 %** | 12.83 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **103.50 €** | 15.0 % | **12.8 %** | 103.83 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 110.50 € | **108.50 €** | 8.6 % | **6.7 %** | 108.84 € | stávame sa najlacnejší |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 34.50 € | **32.50 €** | 15.3 % | **8.6 %** | 32.85 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 30.00 € | **28.00 €** | 14.3 % | **6.7 %** | 28.38 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 18.89 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 37.50 € | **35.50 €** | 39.3 % | **31.9 %** | 35.90 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.50 € | **63.50 €** | 20.1 % | **16.4 %** | 63.90 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **58.50 €** | 10.4 % | **6.7 %** | 58.90 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.50 € | **56.50 €** | 10.2 % | **6.4 %** | 56.90 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.50 €** | 10.4 % | **7.1 %** | 64.90 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Black | 18.50 € | **16.50 €** | 22.4 % | **9.2 %** | 16.90 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 18.50 € | **16.50 €** | 22.4 % | **9.2 %** | 16.90 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 18.50 € | **16.50 €** | 22.4 % | **9.2 %** | 16.90 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 18.50 € | **16.50 €** | 22.4 % | **9.2 %** | 16.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.00 € | **64.00 €** | 10.1 % | **6.8 %** | 64.50 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 72.90 € | **71.00 €** | 42.1 % | **38.4 %** | 71.39 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 101.90 € | **100.00 €** | 15.0 % | **12.9 %** | 100.47 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **20.00 €** | 48.6 % | **35.7 %** | 20.15 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 46.90 € | **45.00 €** | 15.1 % | **10.4 %** | 45.23 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 59.90 € | **58.00 €** | 13.1 % | **9.5 %** | 58.28 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 47.90 € | **46.00 €** | 15.3 % | **10.7 %** | 46.32 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 29.90 € | **28.00 €** | 15.3 % | **8.0 %** | 28.38 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **40.00 €** | 15.3 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **40.00 €** | 15.3 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Skládací síť REBEL ACTIVE pro badminton a další sporty | 30.90 € | **29.00 €** | 15.3 % | **8.2 %** | 29.49 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 60.90 € | **59.00 €** | 10.3 % | **6.9 %** | 59.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 40.90 € | **39.00 €** | 38.1 % | **31.7 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 18.90 € | **17.00 €** | 54.6 % | **39.0 %** | 17.50 € | stávame sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **40.00 €** | 11.0 % | **5.9 %** | 40.50 € | stávame sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **33.00 €** | 12.2 % | **6.1 %** | 33.50 € | stávame sa najlacnejší |
| EMOS CITY RING-C500 pkojová anténa DVB-T2, DAB, filt... | 21.90 € | **20.00 €** | 15.0 % | **5.0 %** | 20.50 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 11.00 € | **9.20 €** | 54.5 % | **29.2 %** | 9.21 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 6.50 € | **4.80 €** | 59.7 % | **17.9 %** | 4.90 € | stávame sa najlacnejší |
| Tefal B817S255 | 31.50 € | **29.90 €** | 11.1 % | **5.5 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus G1 bicycle computer | 21.50 € | **19.90 €** | 15.0 % | **6.4 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.90 €** | 15.6 % | **9.1 %** | 26.92 € | stávame sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 14.7 % | **5.8 %** | 18.98 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 24.50 € | **22.90 €** | 17.3 % | **9.6 %** | 22.98 € | stávame sa najlacnejší |
| Niceboy PILOT S5 GPS + WIFI | 49.50 € | **47.90 €** | 10.9 % | **7.3 %** | 48.00 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **20.90 €** | 53.3 % | **42.4 %** | 21.00 € | stávame sa najlacnejší |
| LEIFHEIT 51016 | 50.50 € | **48.90 €** | 10.5 % | **7.0 %** | 49.00 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **30.90 €** | 59.9 % | **52.1 %** | 31.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **39.90 €** | 11.2 % | **7.0 %** | 40.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 9 | 41.50 € | **39.90 €** | 11.2 % | **7.0 %** | 40.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **39.90 €** | 11.2 % | **7.0 %** | 40.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **39.90 €** | 11.2 % | **7.0 %** | 40.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **11.90 €** | 55.2 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.50 € | **10.90 €** | 53.3 % | **33.7 %** | 11.00 € | stávame sa najlacnejší |
| Maxxo VM Master | 237.50 € | **235.90 €** | 5.7 % | **5.0 %** | 232.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.90 €** | 15.0 % | **14.1 %** | 207.93 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.90 €** | 15.0 % | **14.1 %** | 203.94 € | stávame sa najlacnejší |
| SALENTE SuChef | 84.50 € | **82.90 €** | 10.4 % | **8.3 %** | 83.00 € | stávame sa najlacnejší |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.00 € | **20.50 €** | 15.2 % | **7.3 %** | 19.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 117.00 € | **115.50 €** | 14.9 % | **13.4 %** | 115.54 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **18.00 €** | 15.6 % | **6.7 %** | 18.04 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 61.00 € | **59.50 €** | 14.8 % | **12.0 %** | 59.54 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **18.00 €** | 36.9 % | **26.4 %** | 18.15 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 20.50 € | **19.00 €** | 17.8 % | **9.2 %** | 19.15 € | stávame sa najlacnejší |
| Cabletech UCH0022-S | 22.00 € | **20.50 €** | 13.4 % | **5.7 %** | 20.68 € | stávame sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 52.50 € | **51.00 €** | 15.4 % | **12.1 %** | 51.23 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 23.50 € | **22.00 €** | 14.6 % | **7.3 %** | 22.27 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 121.00 € | **119.50 €** | 14.9 % | **13.5 %** | 119.79 € | stávame sa najlacnejší |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 23.50 € | **22.00 €** | 14.8 % | **7.5 %** | 22.33 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **13.50 €** | 54.0 % | **38.6 %** | 13.85 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45P-BK černé se sto... | 264.00 € | **262.50 €** | 14.9 % | **14.3 %** | 262.86 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **24.50 €** | 15.1 % | **8.4 %** | 24.88 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **107.00 €** | 14.9 % | **13.3 %** | 107.39 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.50 €** | 48.7 % | **33.8 %** | 13.90 € | stávame sa najlacnejší |
| Leifheit Thermo Reflect L/Universal | 15.00 € | **13.50 €** | 21.3 % | **9.2 %** | 13.90 € | stávame sa najlacnejší |
| Domo DO223S | 64.00 € | **62.50 €** | 12.6 % | **9.9 %** | 62.90 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 52.00 € | **50.50 €** | 15.0 % | **11.7 %** | 50.90 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 13.50 € | **12.00 €** | 56.1 % | **38.8 %** | 12.41 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 14.50 € | **13.00 €** | 47.4 % | **32.1 %** | 13.45 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **119.00 €** | 14.8 % | **13.4 %** | 119.48 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 12.50 € | **11.00 €** | 53.5 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.50 € | **39.00 €** | 10.1 % | **6.0 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **15.00 €** | 39.3 % | **26.6 %** | 15.50 € | stávame sa najlacnejší |
| ETA 210390000 | 41.50 € | **40.00 €** | 10.4 % | **6.4 %** | 40.50 € | stávame sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.00 €** | 10.9 % | **5.2 %** | 28.50 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.50 € | **120.00 €** | 10.3 % | **9.0 %** | 120.50 € | stávame sa najlacnejší |
| Domo DO228SV | 121.50 € | **120.00 €** | 10.0 % | **8.7 %** | 120.50 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **113.00 €** | 10.4 % | **9.0 %** | 113.50 € | stávame sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **40.00 €** | 10.4 % | **6.4 %** | 40.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **32.00 €** | 14.6 % | **9.5 %** | 32.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 16.50 € | **15.00 €** | 43.0 % | **30.0 %** | 15.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **16.00 €** | 44.3 % | **31.9 %** | 16.50 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.50 € | **233.00 €** | 10.2 % | **9.5 %** | 233.50 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **108.50 €** | 15.0 % | **13.6 %** | 108.73 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.50 €** | 10.4 % | **8.9 %** | 101.90 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 13.90 € | **12.50 €** | 19.0 % | **7.0 %** | 12.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 10.90 € | **9.50 €** | 49.7 % | **30.5 %** | 9.56 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 6.00 € | **4.60 €** | 49.2 % | **14.4 %** | 4.69 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 13.90 € | **12.50 €** | 44.9 % | **30.3 %** | 12.74 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.90 € | **14.50 €** | 56.1 % | **42.4 %** | 14.77 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 6.60 € | **5.20 €** | 49.9 % | **18.1 %** | 5.29 € | stávame sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 27.90 € | **26.50 €** | 11.7 % | **6.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 28.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.90 € | **17.50 €** | 15.0 % | **6.5 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi BL0301 | 28.90 € | **27.50 €** | 10.8 % | **5.5 %** | 27.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **21.50 €** | 38.1 % | **29.7 %** | 21.63 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 18.90 € | **17.50 €** | 46.6 % | **35.8 %** | 17.64 € | stávame sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.50 €** | 15.2 % | **12.2 %** | 53.68 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 59.90 € | **58.50 €** | 20.2 % | **17.4 %** | 58.69 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 25.90 € | **24.50 €** | 15.4 % | **9.1 %** | 24.78 € | stávame sa najlacnejší |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 34.90 € | **33.50 €** | 22.1 % | **17.2 %** | 33.90 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **6.60 €** | 55.5 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.40 € | **6.10 €** | 47.8 % | **21.9 %** | 6.20 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 7.50 € | **6.30 €** | 59.6 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.90 € | **3.70 €** | 54.4 % | **16.6 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.95 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| ETA 142390000 | 32.00 € | **30.90 €** | 16.1 % | **12.1 %** | 30.96 € | stávame sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.90 €** | 14.6 % | **9.4 %** | 22.98 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.70 € | **6.60 €** | 54.6 % | **32.5 %** | 6.69 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.90 €** | 22.4 % | **11.2 %** | 11.00 € | stávame sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 76.00 € | **74.90 €** | 10.1 % | **8.5 %** | 75.00 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 159.00 € | **157.90 €** | 14.8 % | **14.0 %** | 158.00 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 64.90 € | **63.90 €** | 10.3 % | **8.6 %** | 64.00 € | stávame sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 14.50 € | **13.50 €** | 14.1 % | **6.2 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 69.90 € | **68.90 €** | 7.0 % | **5.5 %** | 67.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 16.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.4 % | **6.6 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 11.2 % | **6.3 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.50 €** | 10.5 % | **5.1 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.50 €** | 12.9 % | **5.1 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 18.50 € | **17.50 €** | 11.8 % | **5.7 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.50 €** | 14.2 % | **5.0 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.7 % | **6.7 %** | 21.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.40 € | **5.40 €** | 47.0 % | **24.0 %** | 5.41 € | stávame sa najlacnejší |
| Herný stojan ONIKUMA ST-2 (biely) | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 12.93 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 13.50 € | **12.50 €** | 56.1 % | **44.6 %** | 12.54 € | stávame sa najlacnejší |
| Solight vonkajšia otočná IP kamera | 38.50 € | **37.50 €** | 42.7 % | **39.0 %** | 37.54 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.90 € | **22.90 €** | 38.4 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.05 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **11.00 €** | 44.3 % | **32.3 %** | 11.05 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.58 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.90 € | **7.90 €** | 43.9 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.50 € | **19.50 €** | 14.4 % | **8.8 %** | 19.59 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.90 € | **9.90 €** | 54.1 % | **40.0 %** | 10.00 € | stávame sa najlacnejší |
| G3ferrari G1019100 Horkovzdušná fritéza | 105.90 € | **104.90 €** | 10.3 % | **9.3 %** | 105.00 € | stávame sa najlacnejší |
| Zelmer ZHM2550 | 39.90 € | **38.90 €** | 28.9 % | **25.6 %** | 39.00 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **64.90 €** | 10.6 % | **8.9 %** | 65.00 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **83.90 €** | 9.7 % | **8.4 %** | 84.00 € | stávame sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **66.90 €** | 10.5 % | **8.8 %** | 67.00 € | stávame sa najlacnejší |
| Garett ROSE Gold Solid Steel | 67.90 € | **66.90 €** | 10.5 % | **8.8 %** | 67.00 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.90 € | **22.90 €** | 10.5 % | **5.9 %** | 23.00 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **41.90 €** | 10.9 % | **8.3 %** | 42.00 € | stávame sa najlacnejší |
| GS  G7-SE Wired Controller XBOx &PC Or | 39.90 € | **38.90 €** | 12.8 % | **9.9 %** | 39.00 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.90 € | **19.90 €** | 10.8 % | **5.5 %** | 20.00 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.90 € | **21.90 €** | 10.5 % | **5.6 %** | 22.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 55.2 % | **43.7 %** | 12.61 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 18.00 € | **17.00 €** | 52.4 % | **44.0 %** | 17.12 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 11.50 € | **10.50 €** | 56.9 % | **43.2 %** | 10.63 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 32.50 € | **31.50 €** | 14.7 % | **11.2 %** | 31.63 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.50 € | **31.50 €** | 14.7 % | **11.2 %** | 31.63 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 32.50 € | **31.50 €** | 14.7 % | **11.2 %** | 31.63 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **181.50 €** | 14.9 % | **14.3 %** | 181.63 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **16.00 €** | 15.2 % | **8.4 %** | 16.13 € | stávame sa najlacnejší |
| Sada 6 denných filtrov Freewell Standard pre DJI Flip | 26.50 € | **25.50 €** | 15.0 % | **10.7 %** | 25.63 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 46.00 € | **45.00 €** | 14.4 % | **12.0 %** | 45.13 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.50 €** | 15.6 % | **13.0 %** | 43.63 € | stávame sa najlacnejší |
| Solight FM transmitter s bluetooth pripojením do aut... | 16.00 € | **15.00 €** | 43.9 % | **34.9 %** | 15.15 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **19.00 €** | 14.6 % | **8.9 %** | 19.16 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.50 €** | 15.7 % | **11.5 %** | 26.67 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.50 €** | 14.9 % | **12.1 %** | 39.71 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **28.00 €** | 14.8 % | **10.9 %** | 28.21 € | stávame sa najlacnejší |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 21.50 € | **20.50 €** | 15.9 % | **10.5 %** | 20.71 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **14.00 €** | 54.0 % | **43.7 %** | 14.25 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.50 €** | 15.6 % | **9.0 %** | 16.75 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **33.50 €** | 14.6 % | **11.3 %** | 33.75 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.50 €** | 15.0 % | **12.0 %** | 36.79 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 26.50 € | **25.50 €** | 37.7 % | **32.5 %** | 25.80 € | stávame sa najlacnejší |
| Habotest HT126A Digitálny univerzálny multimeter | 26.00 € | **25.00 €** | 14.8 % | **10.4 %** | 25.30 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 20.50 € | **19.50 €** | 15.4 % | **9.8 %** | 19.80 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **25.00 €** | 42.7 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.33 € | stávame sa najlacnejší |
| Elektrická pánev do auta 20cm x 4cm 150W 12V | 42.50 € | **41.50 €** | 15.6 % | **12.9 %** | 41.90 € | stávame sa najlacnejší |
| DOMO DO465FR | 66.50 € | **65.50 €** | 10.6 % | **9.0 %** | 65.90 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **28.50 €** | 11.8 % | **8.0 %** | 28.90 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **28.50 €** | 11.8 % | **8.0 %** | 28.90 € | stávame sa najlacnejší |
| Aligator Reproduktor pro MagSafe ABSMB01 | 17.50 € | **16.50 €** | 30.3 % | **22.8 %** | 16.90 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 488.50 € | **487.50 €** | 10.1 % | **9.8 %** | 487.90 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Night 160 ml | 12.00 € | **11.00 €** | 22.4 % | **12.2 %** | 11.42 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 28.00 € | **27.00 €** | 36.1 % | **31.3 %** | 27.44 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 11.48 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 32.00 € | **31.00 €** | 10.1 % | **6.6 %** | 31.50 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.00 € | **39.00 €** | 10.1 % | **7.4 %** | 39.50 € | stávame sa najlacnejší |
| JBL Grip Red | 79.00 € | **78.00 €** | 10.7 % | **9.3 %** | 78.50 € | stávame sa najlacnejší |
| JBL Grip White | 79.00 € | **78.00 €** | 10.7 % | **9.3 %** | 78.50 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **85.00 €** | 15.1 % | **13.9 %** | 85.22 € | stávame sa najlacnejší |
| Blender G21 Perfection brown | 211.90 € | **211.00 €** | 18.5 % | **17.9 %** | 211.26 € | stávame sa najlacnejší |
| Blender G21 Perfection Cappuccino | 211.90 € | **211.00 €** | 18.5 % | **17.9 %** | 211.26 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 211.90 € | **211.00 €** | 18.5 % | **17.9 %** | 211.26 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 211.90 € | **211.00 €** | 18.5 % | **17.9 %** | 211.26 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 232.90 € | **232.00 €** | 18.3 % | **17.9 %** | 232.43 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 232.90 € | **232.00 €** | 18.3 % | **17.9 %** | 232.43 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 232.90 € | **232.00 €** | 18.3 % | **17.9 %** | 232.43 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 232.90 € | **232.00 €** | 18.3 % | **17.9 %** | 232.43 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 232.90 € | **232.00 €** | 18.3 % | **17.9 %** | 232.43 € | stávame sa najlacnejší |
| Domo DO8719W | 69.90 € | **69.00 €** | 10.2 % | **8.7 %** | 69.50 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.00 €** | 12.0 % | **11.1 %** | 113.50 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 104.90 € | **104.00 €** | 7.6 % | **6.7 %** | 104.50 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 108.90 € | **108.00 €** | 10.1 % | **9.2 %** | 108.50 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **14.00 €** | 21.6 % | **14.3 %** | 14.04 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 12.90 € | **12.00 €** | 18.4 % | **10.1 %** | 12.35 € | stávame sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.90 € | **12.00 €** | 14.9 % | **6.9 %** | 12.39 € | stávame sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.90 € | **12.00 €** | 14.9 % | **6.9 %** | 12.39 € | stávame sa najlacnejší |
| Powerbanka EMOS AlphaQ3, 10 000 mAh, 22,5 W, černá | 15.90 € | **15.00 €** | 15.4 % | **8.9 %** | 15.49 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 3.30 € | **2.40 €** | 55.1 % | **12.8 %** | 2.44 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.30 € | **5.40 €** | 42.7 % | **22.3 %** | 5.48 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.90 € | **18.00 €** | 15.0 % | **9.5 %** | 18.15 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6013-GL 130x50... | 32.90 € | **32.00 €** | 15.1 % | **11.9 %** | 32.27 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **17.00 €** | 16.2 % | **10.4 %** | 17.42 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.90 € | **16.00 €** | 35.4 % | **28.2 %** | 16.49 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **16.00 €** | 38.6 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.00 €** | 10.7 % | **7.7 %** | 32.50 € | stávame sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.90 € | **18.00 €** | 12.5 % | **7.1 %** | 18.50 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.90 € | **25.00 €** | 22.6 % | **18.3 %** | 25.50 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.90 € | **25.00 €** | 22.6 % | **18.3 %** | 25.50 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.00 €** | 11.4 % | **8.0 %** | 29.50 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **27.00 €** | 11.6 % | **8.0 %** | 27.50 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.00 €** | 10.5 % | **7.8 %** | 36.50 € | stávame sa najlacnejší |
| Ariete Breakfast Toaster 157/03, černý | 23.90 € | **23.00 €** | 11.7 % | **7.5 %** | 23.50 € | stávame sa najlacnejší |
| ETA 321990020 | 55.90 € | **55.00 €** | 10.2 % | **8.4 %** | 55.50 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.00 €** | 10.9 % | **8.5 %** | 40.50 € | stávame sa najlacnejší |
| Domo DO 9218 WK | 21.90 € | **21.00 €** | 10.4 % | **5.8 %** | 21.50 € | stávame sa najlacnejší |
| Ariete Breakfast Sandwich 1971, černý | 20.90 € | **20.00 €** | 11.3 % | **6.6 %** | 20.50 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.00 €** | 11.1 % | **8.4 %** | 35.50 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.00 €** | 10.3 % | **8.6 %** | 58.50 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.00 €** | 10.5 % | **6.8 %** | 26.50 € | stávame sa najlacnejší |
| D-LINK 10/100 8-Port Switch (DES-108) | 20.90 € | **20.00 €** | 14.7 % | **9.7 %** | 20.50 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 270.90 € | **270.00 €** | 8.0 % | **7.7 %** | 270.50 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.20 €** | 53.4 % | **41.1 %** | 9.22 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.80 € | **9.00 €** | 48.4 % | **36.3 %** | 9.04 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 5.40 € | **4.60 €** | 55.1 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **4.00 €** | 45.3 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 5.50 € | **4.80 €** | 53.1 % | **33.6 %** | 4.82 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.60 € | **2.90 €** | 48.6 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 8.20 € | **7.50 €** | 48.8 % | **36.1 %** | 7.54 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.50 €** | 47.8 % | **35.2 %** | 7.60 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 799.50 € | **798.90 €** | 15.0 % | **14.9 %** | 799.00 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **297.90 €** | 15.0 % | **14.7 %** | 298.00 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 373.50 € | **372.90 €** | 7.1 % | **7.0 %** | 373.00 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **31.90 €** | 14.7 % | **12.6 %** | 31.92 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8610 | 52.50 € | **51.90 €** | 14.8 % | **13.5 %** | 51.94 € | stávame sa najlacnejší |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 42.50 € | **41.90 €** | 18.9 % | **17.3 %** | 41.97 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.99 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **35.90 €** | 10.2 % | **8.4 %** | 36.00 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **21.90 €** | 12.3 % | **9.3 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **17.90 €** | 39.0 % | **34.5 %** | 18.00 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **29.90 €** | 10.3 % | **8.1 %** | 30.00 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.50 € | **51.90 €** | 10.3 % | **9.1 %** | 52.00 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **18.90 €** | 12.8 % | **9.4 %** | 19.00 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 30.50 € | **29.90 €** | 12.0 % | **9.8 %** | 30.00 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **22.90 €** | 12.3 % | **9.5 %** | 23.00 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.50 € | **53.90 €** | 10.1 % | **8.9 %** | 54.00 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **21.90 €** | 10.7 % | **7.8 %** | 22.00 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **28.90 €** | 10.1 % | **7.8 %** | 29.00 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **35.90 €** | 10.9 % | **9.0 %** | 36.00 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **32.90 €** | 10.2 % | **8.2 %** | 33.00 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **32.90 €** | 11.5 % | **9.5 %** | 33.00 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **23.90 €** | 11.8 % | **9.1 %** | 24.00 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **17.90 €** | 10.3 % | **6.7 %** | 18.00 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **35.90 €** | 10.4 % | **8.6 %** | 36.00 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **22.90 €** | 10.2 % | **7.4 %** | 23.00 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **22.90 €** | 12.2 % | **9.3 %** | 23.00 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.70 € | **6.10 €** | 45.6 % | **32.6 %** | 6.11 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **7.70 €** | 55.5 % | **44.2 %** | 7.74 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.20 € | **3.60 €** | 54.5 % | **32.4 %** | 3.67 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.70 € | **3.10 €** | 56.7 % | **31.3 %** | 3.17 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.70 € | **2.10 €** | 50.4 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 11.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELDONEX EKS4040SL | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.90 €** | 16.1 % | **10.6 %** | 11.92 € | stávame sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 12.50 € | **11.90 €** | 27.5 % | **21.4 %** | 11.94 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 13.95 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.70 €** | 42.7 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.10 € | **3.50 €** | 54.3 % | **31.7 %** | 3.57 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 14.50 € | **13.90 €** | 18.4 % | **13.5 %** | 13.99 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.40 €** | 53.7 % | **43.5 %** | 8.49 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.80 € | **2.20 €** | 50.8 % | **18.5 %** | 2.29 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **6.90 €** | 54.8 % | **42.4 %** | 7.00 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **15.90 €** | 11.0 % | **7.0 %** | 16.00 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **15.90 €** | 11.7 % | **7.6 %** | 16.00 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **10.90 €** | 13.2 % | **7.3 %** | 11.00 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **12.90 €** | 14.2 % | **9.1 %** | 13.00 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **12.90 €** | 13.5 % | **8.5 %** | 13.00 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **9.90 €** | 13.4 % | **6.9 %** | 10.00 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **10.90 €** | 12.1 % | **6.3 %** | 11.00 € | stávame sa najlacnejší |
| Solight lokátor na bicykel, Find My kompatibilný | 15.50 € | **14.90 €** | 41.6 % | **36.1 %** | 15.00 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 152.50 € | **151.90 €** | 13.4 % | **13.0 %** | 151.99 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **112.90 €** | 10.4 % | **9.8 %** | 113.00 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **109.90 €** | 10.2 % | **9.6 %** | 110.00 € | stávame sa najlacnejší |
| SONY WFC710N Black | 71.50 € | **70.90 €** | 10.4 % | **9.5 %** | 71.00 € | stávame sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-M ( 36 - 40 ) | 13.00 € | **12.50 €** | 13.2 % | **8.8 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Icequeen-Wh | 19.50 € | **19.00 €** | 8.0 % | **5.2 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 12.00 € | **11.50 €** | 10.3 % | **5.7 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, biely | 6.60 € | **6.10 €** | 47.4 % | **36.2 %** | 6.11 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6011-GL 72x42c... | 24.50 € | **24.00 €** | 14.3 % | **11.9 %** | 24.01 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 10.00 € | **9.50 €** | 43.9 % | **36.7 %** | 9.52 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.90 € | **6.40 €** | 47.2 % | **36.6 %** | 6.42 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **6.10 €** | 47.0 % | **35.9 %** | 6.12 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 6.10 € | **5.60 €** | 47.2 % | **35.1 %** | 5.63 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.20 €** | 46.8 % | **35.9 %** | 6.24 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 7.30 € | **6.80 €** | 54.6 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.70 € | **5.20 €** | 54.0 % | **40.5 %** | 5.25 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.50 €** | 14.9 % | **13.8 %** | 50.56 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 162.00 € | **161.50 €** | 7.3 % | **6.9 %** | 161.57 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.20 € | **4.70 €** | 48.9 % | **34.5 %** | 4.78 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.50 €** | 13.6 % | **10.5 %** | 17.58 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.70 €** | 54.5 % | **36.1 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.80 €** | 53.8 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.80 €** | 53.8 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.49 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 339.50 € | **339.00 €** | 14.9 % | **14.7 %** | 339.09 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.30 €** | 48.9 % | **33.4 %** | 4.40 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.63 € | stávame sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 23.00 € | **22.50 €** | 15.1 % | **12.6 %** | 22.65 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **11.00 €** | 38.5 % | **32.5 %** | 11.16 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.50 €** | 13.7 % | **10.2 %** | 15.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.50 € | **23.00 €** | 19.3 % | **16.7 %** | 23.19 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 17.00 € | **16.50 €** | 14.6 % | **11.2 %** | 16.69 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.50 € | **12.00 €** | 16.7 % | **12.0 %** | 12.19 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **13.50 €** | 38.3 % | **33.4 %** | 13.70 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 14.50 € | **14.00 €** | 41.4 % | **36.5 %** | 14.20 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.50 €** | 14.6 % | **11.9 %** | 20.71 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **14.00 €** | 16.5 % | **12.5 %** | 14.25 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **19.00 €** | 14.1 % | **11.2 %** | 19.25 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **30.00 €** | 39.2 % | **36.9 %** | 30.27 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.50 € | **14.00 €** | 44.1 % | **39.1 %** | 14.27 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **17.00 €** | 16.6 % | **13.3 %** | 17.29 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 50.50 € | **50.00 €** | 18.4 % | **17.2 %** | 50.29 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 50.50 € | **50.00 €** | 18.4 % | **17.2 %** | 50.29 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.50 € | **28.00 €** | 33.0 % | **30.7 %** | 28.30 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **19.00 €** | 15.0 % | **12.0 %** | 19.30 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.00 €** | 40.4 % | **34.3 %** | 11.32 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 14.00 € | **13.50 €** | 14.3 % | **10.2 %** | 13.83 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **15.00 €** | 16.8 % | **13.0 %** | 15.33 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 52.00 € | **51.50 €** | 14.6 % | **13.5 %** | 51.84 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **18.00 €** | 39.0 % | **35.3 %** | 18.38 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.50 €** | 13.4 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Akupresurní podložka s polštářem REBEL ACTIVE RBA-60... | 14.00 € | **13.50 €** | 14.3 % | **10.2 %** | 13.88 € | stávame sa najlacnejší |
| Ultrazvukový merací prístroj na hrúbku Uni-T UT345A | 87.00 € | **86.50 €** | 7.5 % | **6.9 %** | 86.89 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 71.50 € | **71.00 €** | 12.8 % | **12.0 %** | 71.39 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 85.50 € | **85.00 €** | 13.1 % | **12.5 %** | 85.39 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.00 € | **26.50 €** | 12.5 % | **10.4 %** | 26.89 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **27.00 €** | 15.6 % | **13.5 %** | 27.39 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 48.50 € | **48.00 €** | 15.3 % | **14.1 %** | 48.39 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 33.00 € | **32.50 €** | 10.1 % | **8.4 %** | 32.89 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 205.00 € | **204.50 €** | 12.1 % | **11.8 %** | 204.89 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 44.00 € | **43.50 €** | 8.2 % | **6.9 %** | 43.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 56.50 € | **56.00 €** | 7.2 % | **6.2 %** | 56.39 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 17.50 € | **17.00 €** | 13.8 % | **10.6 %** | 17.39 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 25.50 € | **25.00 €** | 8.3 % | **6.1 %** | 25.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 135.50 € | **135.00 €** | 12.4 % | **12.0 %** | 135.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 69.50 € | **69.00 €** | 12.2 % | **11.4 %** | 69.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 91.00 € | **90.50 €** | 13.1 % | **12.5 %** | 90.89 € | stávame sa najlacnejší |
| Tester napätia a spojitosti Uni-T UT18D | 40.50 € | **40.00 €** | 8.6 % | **7.3 %** | 40.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 71.00 € | **70.50 €** | 12.9 % | **12.1 %** | 70.89 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 39.50 € | **39.00 €** | 11.5 % | **10.1 %** | 39.39 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 25.00 € | **24.50 €** | 7.1 % | **5.0 %** | 24.89 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 52.50 € | **52.00 €** | 12.2 % | **11.1 %** | 52.39 € | stávame sa najlacnejší |
| Uni-T UT206B digitálny klešťový multimeter | 68.00 € | **67.50 €** | 12.3 % | **11.5 %** | 67.89 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 82.00 € | **81.50 €** | 11.1 % | **10.4 %** | 81.89 € | stávame sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 23.50 € | **23.00 €** | 8.1 % | **5.8 %** | 23.39 € | stávame sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 39.00 € | **38.50 €** | 11.2 % | **9.8 %** | 38.89 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 109.00 € | **108.50 €** | 13.3 % | **12.8 %** | 108.89 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 34.00 € | **33.50 €** | 10.7 % | **9.1 %** | 33.89 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 56.50 € | **56.00 €** | 9.0 % | **8.0 %** | 56.39 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 53.00 € | **52.50 €** | 12.2 % | **11.1 %** | 52.89 € | stávame sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 46.00 € | **45.50 €** | 7.2 % | **6.0 %** | 45.89 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 45.00 € | **44.50 €** | 11.7 % | **10.5 %** | 44.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 258.00 € | **257.50 €** | 14.4 % | **14.2 %** | 257.89 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 103.50 € | **103.00 €** | 13.6 % | **13.1 %** | 103.39 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 136.50 € | **136.00 €** | 13.9 % | **13.5 %** | 136.39 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 193.00 € | **192.50 €** | 14.1 % | **13.8 %** | 192.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 470.50 € | **470.00 €** | 8.7 % | **8.6 %** | 470.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 904.50 € | **904.00 €** | 15.0 % | **14.9 %** | 904.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 92.50 € | **92.00 €** | 13.0 % | **12.4 %** | 92.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 96.00 € | **95.50 €** | 11.3 % | **10.7 %** | 95.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **27.50 €** | 14.5 % | **12.5 %** | 27.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 132.50 € | **132.00 €** | 13.5 % | **13.1 %** | 132.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 72.50 € | **72.00 €** | 12.8 % | **12.0 %** | 72.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 89.50 € | **89.00 €** | 12.8 % | **12.2 %** | 89.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 61.00 € | **60.50 €** | 12.1 % | **11.2 %** | 60.89 € | stávame sa najlacnejší |
| Merač vlhkosti dreva Uni-T UT377B | 31.50 € | **31.00 €** | 15.7 % | **13.8 %** | 31.39 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 55.50 € | **55.00 €** | 11.9 % | **10.9 %** | 55.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 52.50 € | **52.00 €** | 9.7 % | **8.7 %** | 52.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 106.00 € | **105.50 €** | 13.2 % | **12.7 %** | 105.89 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 34.00 € | **33.50 €** | 10.4 % | **8.8 %** | 33.89 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 80.50 € | **80.00 €** | 11.9 % | **11.2 %** | 80.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 41.00 € | **40.50 €** | 11.6 % | **10.2 %** | 40.89 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 168.50 € | **168.00 €** | 13.8 % | **13.5 %** | 168.39 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 204.50 € | **204.00 €** | 14.1 % | **13.8 %** | 204.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 90.00 € | **89.50 €** | 14.5 % | **13.9 %** | 89.89 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 76.50 € | **76.00 €** | 9.5 % | **8.7 %** | 76.39 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 75.00 € | **74.50 €** | 11.6 % | **10.9 %** | 74.89 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 140.50 € | **140.00 €** | 12.0 % | **11.6 %** | 140.39 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 271.00 € | **270.50 €** | 14.4 % | **14.1 %** | 270.89 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 103.00 € | **102.50 €** | 13.4 % | **12.9 %** | 102.89 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 123.00 € | **122.50 €** | 9.6 % | **9.2 %** | 122.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 117.50 € | **117.00 €** | 9.8 % | **9.3 %** | 117.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 157.50 € | **157.00 €** | 14.0 % | **13.6 %** | 157.39 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 78.50 € | **78.00 €** | 13.9 % | **13.2 %** | 78.39 € | stávame sa najlacnejší |
| Kávovar na kapsule 3 v 1 HiBREW H1A 1450W | 89.00 € | **88.50 €** | 15.0 % | **14.3 %** | 88.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 149.50 € | **149.00 €** | 14.8 % | **14.4 %** | 149.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.50 € | **55.00 €** | 14.4 % | **13.4 %** | 55.39 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 286.00 € | **285.50 €** | 14.3 % | **14.1 %** | 285.89 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 25.50 € | **25.00 €** | 12.0 % | **9.8 %** | 25.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 33.50 € | **33.00 €** | 13.0 % | **11.3 %** | 33.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.00 € | **23.50 €** | 13.0 % | **10.7 %** | 23.89 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.50 € | **23.00 €** | 12.0 % | **9.6 %** | 23.39 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.00 € | **26.50 €** | 13.5 % | **11.4 %** | 26.89 € | stávame sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.50 € | **12.00 €** | 11.7 % | **7.2 %** | 12.39 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 229.50 € | **229.00 €** | 6.3 % | **6.1 %** | 229.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 245.50 € | **245.00 €** | 10.3 % | **10.1 %** | 245.39 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 136.00 € | **135.50 €** | 8.3 % | **7.9 %** | 135.89 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 89.00 € | **88.50 €** | 11.8 % | **11.1 %** | 88.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 85.00 € | **84.50 €** | 14.5 % | **13.8 %** | 84.89 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 91.00 € | **90.50 €** | 14.3 % | **13.7 %** | 90.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 94.50 € | **94.00 €** | 11.9 % | **11.3 %** | 94.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 79.00 € | **78.50 €** | 6.4 % | **5.7 %** | 78.89 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.00 € | **22.50 €** | 8.5 % | **6.1 %** | 22.89 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 109.50 € | **109.00 €** | 7.6 % | **7.1 %** | 109.39 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 292.50 € | **292.00 €** | 14.8 % | **14.6 %** | 292.39 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 220.00 € | **219.50 €** | 14.8 % | **14.6 %** | 219.89 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 198.00 € | **197.50 €** | 11.0 % | **10.8 %** | 197.89 € | stávame sa najlacnejší |
| Přípravek do chemických toalet HAPPY GREEN Blue 2l | 12.50 € | **12.00 €** | 10.3 % | **5.9 %** | 12.39 € | stávame sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 48.50 € | **48.00 €** | 7.4 % | **6.2 %** | 48.39 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 124.00 € | **123.50 €** | 13.8 % | **13.3 %** | 123.89 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.50 €** | 10.2 % | **9.1 %** | 47.90 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.50 €** | 10.8 % | **6.5 %** | 12.90 € | stávame sa najlacnejší |
| Tefal KO5S08E0 | 35.00 € | **34.50 €** | 10.0 % | **8.5 %** | 34.90 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 503.00 € | **502.50 €** | 6.4 % | **6.3 %** | 502.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **12.00 €** | 46.0 % | **40.2 %** | 12.41 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **21.00 €** | 15.1 % | **12.4 %** | 21.42 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **29.00 €** | 14.9 % | **13.0 %** | 29.44 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Fashion Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 21.8 % | **19.6 %** | 28.46 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.50 € | **16.00 €** | 48.2 % | **43.7 %** | 16.47 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CCPA Apple Carplay/Andr... | 37.50 € | **37.00 €** | 15.4 % | **13.9 %** | 37.49 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.50 € | **33.00 €** | 15.9 % | **14.2 %** | 33.49 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.50 € | **22.00 €** | 11.7 % | **9.3 %** | 22.49 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.50 € | **22.00 €** | 11.7 % | **9.3 %** | 22.49 € | stávame sa najlacnejší |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.50 € | **21.00 €** | 38.2 % | **35.0 %** | 21.49 € | stávame sa najlacnejší |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **13.00 €** | 33.2 % | **28.3 %** | 13.49 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 15.50 € | **15.00 €** | 33.9 % | **29.6 %** | 15.49 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X12 | 17.50 € | **17.00 €** | 15.6 % | **12.3 %** | 17.49 € | stávame sa najlacnejší |
| Blender G21 Experience White | 253.90 € | **253.50 €** | 18.3 % | **18.1 %** | 253.54 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **77.50 €** | 15.0 % | **14.4 %** | 77.69 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 112.90 € | **112.50 €** | 10.1 % | **9.7 %** | 112.79 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 80.90 € | **80.50 €** | 8.9 % | **8.4 %** | 80.79 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 162.90 € | **162.50 €** | 19.8 % | **19.5 %** | 162.80 € | stávame sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BL | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 9.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 13.3 % | **9.5 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 10.2 % | **7.3 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.60 €** | 50.8 % | **44.8 %** | 9.61 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **9.00 €** | 48.4 % | **42.1 %** | 9.02 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.80 €** | 49.4 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.50 € | **5.10 €** | 46.6 % | **35.9 %** | 5.14 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.60 €** | 56.3 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.50 € | **5.10 €** | 54.7 % | **43.5 %** | 5.15 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.50 € | **9.10 €** | 44.1 % | **38.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.90 € | **4.50 €** | 55.6 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 4.20 € | **3.80 €** | 48.5 % | **34.3 %** | 3.87 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.50 €** | 40.4 % | **35.3 %** | 10.60 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.90 € | **13.50 €** | 13.5 % | **10.2 %** | 13.69 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **13.50 €** | 20.3 % | **16.9 %** | 13.71 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.72 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.90 € | **10.50 €** | 10.8 % | **6.7 %** | 10.76 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.50 €** | 15.5 % | **11.3 %** | 10.79 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.50 €** | 16.5 % | **13.2 %** | 13.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 680 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 47.0 % | **42.1 %** | 11.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.90 € | **13.50 €** | 36.2 % | **32.2 %** | 13.84 € | stávame sa najlacnejší |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 14.90 € | **14.50 €** | 15.7 % | **12.6 %** | 14.88 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **12.50 €** | 31.1 % | **27.0 %** | 12.89 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 2.20 € | **1.80 €** | 56.9 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.10 €** | 53.0 % | **35.5 %** | 3.14 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.90 €** | 57.1 % | **29.8 %** | 1.96 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.90 € | **3.50 €** | 48.9 % | **33.6 %** | 3.58 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.80 € | **3.40 €** | 48.5 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.10 € | **4.70 €** | 48.1 % | **36.5 %** | 4.71 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 5.30 € | **4.90 €** | 55.6 % | **43.8 %** | 4.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.20 €** | 48.4 % | **35.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.50 €** | 15.8 % | **13.8 %** | 22.54 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.63 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.69 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.69 € | stávame sa najlacnejší |
| ZigBee LCD senzor teploty Sonoff SNZB-02LD (so sondou) | 17.90 € | **17.50 €** | 17.3 % | **14.6 %** | 17.70 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.90 € | **30.50 €** | 33.5 % | **31.8 %** | 30.70 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.50 €** | 15.1 % | **14.4 %** | 63.71 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.90 € | **20.50 €** | 15.0 % | **12.8 %** | 20.75 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **20.50 €** | 30.3 % | **27.8 %** | 20.76 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.90 € | **22.50 €** | 14.9 % | **12.8 %** | 22.76 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.90 € | **31.50 €** | 38.7 % | **37.0 %** | 31.77 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.79 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.50 €** | 39.1 % | **35.8 %** | 16.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.80 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.90 € | **16.50 €** | 18.2 % | **15.4 %** | 16.80 € | stávame sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.90 € | **36.50 €** | 9.1 % | **7.9 %** | 36.80 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.50 €** | 14.9 % | **13.4 %** | 29.84 € | stávame sa najlacnejší |
| Slúchadlá FIXED Pods 2, bezdrôtové, TWS, biela | 24.90 € | **24.50 €** | 7.9 % | **6.2 %** | 24.86 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.90 € | **23.50 €** | 32.8 % | **30.6 %** | 23.87 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **16.50 €** | 38.2 % | **35.0 %** | 16.89 € | stávame sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **35.50 €** | 15.0 % | **13.7 %** | 35.89 € | stávame sa najlacnejší |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 9.00 € | **8.70 €** | 48.1 % | **43.2 %** | 8.79 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.20 € | **2.90 €** | 48.7 % | **34.7 %** | 2.96 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.60 € | **3.30 €** | 46.3 % | **34.1 %** | 3.37 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 2.10 € | **1.80 €** | 52.4 % | **30.7 %** | 1.85 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 2.00 € | **1.70 €** | 54.9 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 5.00 € | **4.70 €** | 54.0 % | **44.7 %** | 4.71 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.00 € | **3.70 €** | 47.2 % | **36.1 %** | 3.71 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.73 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.74 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.40 € | **3.10 €** | 47.0 % | **34.1 %** | 3.17 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.10 €** | 52.4 % | **33.4 %** | 2.18 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.90 € | **2.60 €** | 48.3 % | **32.9 %** | 2.68 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.90 € | **3.60 €** | 53.2 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.60 € | **9.30 €** | 31.2 % | **27.1 %** | 9.32 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.70 € | **2.50 €** | 47.3 % | **36.4 %** | 2.51 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 6.90 € | **6.70 €** | 34.5 % | **30.6 %** | 6.74 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.44 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.70 € | **7.50 €** | 54.6 % | **50.6 %** | 7.56 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.10 € | **1.90 €** | 47.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.20 € | **1.00 €** | 54.9 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.70 € | **1.50 €** | 53.6 % | **35.5 %** | 1.56 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.20 €** | 56.1 % | **43.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.40 € | **2.20 €** | 47.8 % | **35.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.30 € | **3.10 €** | 52.4 % | **43.2 %** | 3.14 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 9.00 € | **8.80 €** | 47.5 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.00 € | **17.90 €** | 6.0 % | **5.5 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.90 €** | 14.9 % | **14.7 %** | 54.94 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.90 €** | 38.4 % | **37.7 %** | 20.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 22.00 € | **21.90 €** | 38.4 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.00 € | **16.90 €** | 6.1 % | **5.4 %** | 16.96 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 22.00 € | **21.90 €** | 25.2 % | **24.6 %** | 21.97 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.90 €** | 14.6 % | **14.3 %** | 46.97 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 40.00 € | **39.90 €** | 38.2 % | **37.9 %** | 39.98 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.20 €** | 25.6 % | **24.2 %** | 9.29 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.40 € | **4.30 €** | 55.5 % | **52.0 %** | 4.33 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.14 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.90 € | **5.80 €** | 11.0 % | **9.2 %** | 5.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **5.30 €** | 37.2 % | **34.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 2.10 € | **2.00 €** | 51.1 % | **43.9 %** | 2.02 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.60 €** | 46.7 % | **42.8 %** | 3.65 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **2.00 €** | 48.5 % | **41.4 %** | 2.05 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **1.00 €** | 42.0 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.90 € | **3.80 €** | 32.7 % | **29.3 %** | 3.85 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.30 € | **1.20 €** | 51.0 % | **39.4 %** | 1.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.46 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **3.00 €** | 16.1 % | **12.4 %** | 3.08 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.90 €** | 22.7 % | **19.7 %** | 3.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.60 €** | 26.9 % | **22.2 %** | 2.69 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **1.80 €** | 36.7 % | **29.5 %** | 1.89 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.00 € | **10.90 €** | 6.8 % | **5.9 %** | 9.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Návlek VILEDA STEAM XXL POWER 161717 | 11.00 € | **10.90 €** | 9.1 % | **8.1 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 5.80 € | **5.70 €** | 54.6 % | **51.9 %** | 5.72 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.60 € | **8.50 €** | 36.6 % | **35.0 %** | 8.54 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **13.90 €** | 36.5 % | **35.5 %** | 13.95 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.30 € | **3.20 €** | 39.7 % | **35.5 %** | 3.25 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 10.00 € | **9.90 €** | 26.8 % | **25.6 %** | 9.95 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.40 €** | 36.3 % | **33.8 %** | 5.48 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **5.00 €** | 18.1 % | **15.8 %** | 5.09 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.90 €** | 38.4 % | **36.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11, V15 | 7.00 € | **6.90 €** | 30.8 % | **29.0 %** | 6.99 € | stávame sa najlacnejší |
| Solight stĺpcový filter pre Dyson V12 | 6.00 € | **5.90 €** | 26.4 % | **24.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.40 € | **8.30 €** | 54.5 % | **52.7 %** | 8.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.20 €** | 11.3 % | **8.7 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **4.50 €** | 33.6 % | **30.7 %** | 4.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.20 €** | 11.7 % | **9.1 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.30 €** | 31.5 % | **30.1 %** | 9.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.90 €** | 25.4 % | **23.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.70 € | **8.60 €** | 6.8 % | **5.6 %** | 8.69 € | stávame sa najlacnejší |
| Súprava celodenných filtrov Freewell Real Locking s ... | 220.00 € | **219.90 €** | 14.9 % | **14.9 %** | 219.94 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 110.00 € | **109.90 €** | 20.0 % | **19.9 %** | 109.96 € | stávame sa najlacnejší |

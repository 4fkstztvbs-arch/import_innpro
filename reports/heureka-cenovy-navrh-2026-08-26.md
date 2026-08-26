# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-26

Vstup: `premiumstoresk_20260826_2156.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5516**
- Návrh **zvýšiť** cenu: **173** produktov
- Návrh **znížiť** cenu: **1225** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4118** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **103**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (173)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Mobilný ovládač GameSir X5s (biely) | 46.50 € | **54.50 €** | 15.4 % | **35.2 %** | 46.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1-Ss | 130.50 € | **135.50 €** | 10.0 % | **14.2 %** | 130.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 52.50 € | **55.90 €** | 5.1 % | **11.9 %** | 52.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 51.50 € | **54.90 €** | 29.7 % | **38.3 %** | 51.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Aura 5 ANC | 42.00 € | **45.00 €** | 10.2 % | **18.1 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 35.50 € | **38.50 €** | 6.3 % | **15.3 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 46.90 € | **49.00 €** | 10.1 % | **15.0 %** | 46.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/4N/1 | 50.90 € | **53.00 €** | 10.0 % | **14.5 %** | 50.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 115.00 € | **117.00 €** | 7.2 % | **9.1 %** | 115.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 115.00 € | **117.00 €** | 7.2 % | **9.1 %** | 115.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 11.50 € | **13.50 €** | 6.9 % | **25.4 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.50 € | **16.50 €** | 11.1 % | **26.4 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5X/1 | 49.50 € | **51.50 €** | 10.5 % | **15.0 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.90 €** | 20.1 % | **45.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 10.50 € | **12.00 €** | 29.0 % | **47.4 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.7 % | **16.9 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **38.90 €** | 11.0 % | **15.1 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo vodní filtry 3+1 | 11.90 € | **13.00 €** | 11.6 % | **21.9 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 17.00 € | **18.00 €** | 36.8 % | **44.9 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.30 € | **5.30 €** | 8.6 % | **33.8 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **19.90 €** | 37.2 % | **43.7 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.50 € | **4.20 €** | 13.4 % | **36.0 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **17.50 €** | 38.6 % | **43.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.90 € | **24.50 €** | 39.2 % | **42.7 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP Black | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP White | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.00 € | **33.50 €** | 14.2 % | **15.9 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.00 € | **28.50 €** | 34.8 % | **37.2 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 36.00 € | **36.50 €** | 37.9 % | **39.8 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **20.50 €** | 35.1 % | **38.4 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 12.00 € | **12.50 €** | 12.3 % | **16.9 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.00 € | **15.50 €** | 41.1 % | **45.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.00 € | **12.50 €** | 22.0 % | **27.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 15.00 € | **15.50 €** | 35.4 % | **39.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.00 € | **11.50 €** | 32.3 % | **38.3 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 10.00 € | **10.50 €** | 11.5 % | **17.1 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tester napätia a spojitosti Uni-T UT18D | 40.00 € | **40.50 €** | 7.3 % | **8.6 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 470.00 € | **470.50 €** | 8.6 % | **8.7 %** | 470.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 904.00 € | **904.50 €** | 14.9 % | **15.0 %** | 904.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.00 € | **22.50 €** | 8.7 % | **11.2 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO354VD | 130.00 € | **130.50 €** | 8.1 % | **8.5 %** | 130.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Svetelný merač UNI-T UT383 | 16.50 € | **17.00 €** | 11.1 % | **14.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mio Smartbox IV | 30.00 € | **30.50 €** | 5.6 % | **7.3 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 34.00 € | **34.50 €** | 34.7 % | **36.7 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 56.00 € | **56.50 €** | 7.1 % | **8.0 %** | 56.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W Power Bank 20000mAh Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 46.00 € | **46.50 €** | 12.3 % | **13.5 %** | 46.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.00 € | **38.50 €** | 37.7 % | **39.5 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.00 € | **64.50 €** | 20.2 % | **21.1 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kaon MZ-52, satelitní přijímač Skylink | 60.00 € | **60.50 €** | 6.4 % | **7.3 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 124.00 € | **124.50 €** | 22.0 % | **22.5 %** | 124.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.50 € | **64.00 €** | 10.2 % | **11.0 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 49dB | 25.00 € | **25.50 €** | 28.0 % | **30.6 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 24.00 € | **24.50 €** | 33.5 % | **36.2 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.00 € | **39.50 €** | 14.6 % | **16.1 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.00 € | **17.50 €** | 6.1 % | **9.2 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM603 růžová | 35.00 € | **35.50 €** | 6.3 % | **7.9 %** | 35.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 12.00 € | **12.50 €** | 21.0 % | **26.1 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultrazvukový merací prístroj na hrúbku Uni-T UT345A | 86.50 € | **86.90 €** | 6.9 % | **7.4 %** | 86.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191T | 70.50 € | **70.90 €** | 12.1 % | **12.7 %** | 70.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot CSC062X | 155.50 € | **155.90 €** | 5.8 % | **6.0 %** | 155.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO331L | 105.50 € | **105.90 €** | 9.0 % | **9.4 %** | 105.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.50 € | **119.90 €** | 34.4 % | **34.9 %** | 119.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.50 € | **78.90 €** | 14.7 % | **15.3 %** | 78.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 12.50 € | **12.90 €** | 40.4 % | **44.9 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.50 € | **14.90 €** | 9.0 % | **12.0 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 7.30 € | **7.70 €** | 45.5 % | **53.4 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.50 € | **11.90 €** | 40.8 % | **45.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový zvonček, do zásuvky, 180m, biely,... | 13.50 € | **13.90 €** | 3.5 % | **6.6 %** | 13.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.50 € | **10.90 €** | 41.3 % | **46.7 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **10.90 €** | 29.0 % | **33.9 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.50 € | **14.90 €** | 13.7 % | **16.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.50 € | **14.90 €** | 6.9 % | **9.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 22.50 € | **22.90 €** | 21.5 % | **23.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 27.50 € | **27.90 €** | 23.6 % | **25.4 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 26.50 € | **26.90 €** | 8.8 % | **10.5 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.50 € | **45.90 €** | 40.3 % | **41.6 %** | 45.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZigBee LCD senzor teploty Sonoff SNZB-02LD (so sondou) | 17.50 € | **17.90 €** | 14.6 % | **17.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 24.50 € | **24.90 €** | 26.6 % | **28.7 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.50 € | **41.90 €** | 33.6 % | **34.9 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.50 € | **19.90 €** | 31.7 % | **34.4 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.50 € | **33.90 €** | 6.8 % | **8.1 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.50 € | **20.90 €** | 36.4 % | **39.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 58.50 € | **58.90 €** | 34.7 % | **35.6 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 31.50 € | **31.90 €** | 32.3 % | **34.0 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.50 € | **26.90 €** | 11.4 % | **13.1 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.50 € | **21.90 €** | 5.6 % | **7.5 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.50 € | **17.90 €** | 30.6 % | **33.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.50 € | **55.90 €** | 35.5 % | **36.4 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.90 €** | 18.7 % | **20.3 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.50 € | **33.90 €** | 24.3 % | **25.7 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **19.90 €** | 36.8 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 449.50 € | **449.90 €** | 6.7 % | **6.8 %** | 449.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.60 €** | 28.5 % | **32.5 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.60 €** | 28.5 % | **32.5 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 25.8 % | **26.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 34.90 € | **35.00 €** | 34.0 % | **34.4 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.90 € | **23.00 €** | 38.6 % | **39.2 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 28.90 € | **29.00 €** | 27.1 % | **27.6 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1004500 | 50.90 € | **51.00 €** | 9.9 % | **10.1 %** | 50.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 28.90 € | **29.00 €** | 8.6 % | **9.0 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.90 € | **27.00 €** | 35.2 % | **35.7 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 19.90 € | **20.00 €** | 24.1 % | **24.7 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.90 € | **23.00 €** | 33.7 % | **34.3 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.80 € | **5.90 €** | 36.7 % | **39.0 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.70 €** | 38.0 % | **41.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
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
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 15.90 € | **16.00 €** | 38.1 % | **39.0 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 13.90 € | **14.00 €** | 37.8 % | **38.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná stolná lampička s klipom bi... | 9.30 € | **9.40 €** | 10.1 % | **11.2 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.90 € | **13.00 €** | 37.5 % | **38.5 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.00 € | **8.10 €** | 9.7 % | **11.1 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.90 € | **14.00 €** | 20.3 % | **21.2 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.40 € | **8.50 €** | 32.1 % | **33.7 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.90 € | **14.00 €** | 31.9 % | **32.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.90 € | **10.00 €** | 23.8 % | **25.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **10.00 €** | 44.2 % | **45.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.20 € | **4.30 €** | 32.4 % | **35.5 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 26.3 % | **28.3 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 7.1 % | **8.7 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.20 € | **4.30 €** | 35.5 % | **38.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.90 € | **8.00 €** | 35.2 % | **36.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.80 € | **8.90 €** | 15.8 % | **17.1 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.40 € | **7.50 €** | 37.0 % | **38.9 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.20 € | **5.30 €** | 18.8 % | **21.0 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 33.7 % | **36.4 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.00 € | **8.10 €** | 35.2 % | **36.9 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **5.30 €** | 34.6 % | **37.2 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 11.8 % | **13.4 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **14.00 €** | 10.6 % | **11.4 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.40 € | **4.50 €** | 34.0 % | **37.0 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.40 € | **6.50 €** | 39.9 % | **42.1 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1225)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| YAMAHA R-N2000A SILVER | 3890.00 € | **3312.50 €** | 27.9 % | **9.0 %** | 3312.60 € | stávame sa najlacnejší |
| Laserový gravírovací stroj xTool P3 80W | 6803.00 € | **6503.00 €** | 15.0 % | **9.9 %** | 6503.10 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3588.00 € | **3349.50 €** | 15.0 % | **7.4 %** | 3349.70 € | stávame sa najlacnejší |
| YAMAHA R-N1000A SILVER | 1599.00 € | **1367.00 €** | 24.2 % | **6.2 %** | 1367.23 € | stávame sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.50 €** | 64.7 % | **6.8 %** | 362.65 € | stávame sa najlacnejší |
| GORENJE F4142PW | 359.00 € | **221.90 €** | 74.8 % | **8.0 %** | 222.00 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 479.00 € | **343.50 €** | 48.7 % | **6.7 %** | 343.70 € | stávame sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.90 €** | 28.6 % | **6.0 %** | 634.00 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 309.00 € | **176.90 €** | 88.1 % | **7.7 %** | 177.00 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **526.50 €** | 28.6 % | **6.0 %** | 526.90 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **354.00 €** | 39.7 % | **6.3 %** | 354.05 € | stávame sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.50 €** | 16.8 % | **9.3 %** | 1543.60 € | stávame sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **383.90 €** | 35.8 % | **6.6 %** | 384.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1441.90 € | **1346.50 €** | 15.0 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **503.90 €** | 26.9 % | **6.7 %** | 504.00 € | stávame sa najlacnejší |
| BEKO RFSA240M43WN | 469.00 € | **375.00 €** | 34.1 % | **7.2 %** | 375.06 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1396.50 € | **1307.50 €** | 15.0 % | **7.6 %** | 1307.89 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **511.50 €** | 24.2 % | **6.1 %** | 511.63 € | stávame sa najlacnejší |
| Gorenje GECS5C70XPA | 559.00 € | **471.50 €** | 26.8 % | **7.0 %** | 471.80 € | stávame sa najlacnejší |
| YAMAHA A-S1200 SILVER | 2399.00 € | **2315.50 €** | 13.1 % | **9.1 %** | 2315.65 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 369.00 € | **286.00 €** | 39.2 % | **7.9 %** | 286.40 € | stávame sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **986.00 €** | 15.0 % | **6.3 %** | 986.32 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 303.50 € | **228.90 €** | 43.2 % | **8.0 %** | 229.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 983.90 € | **909.90 €** | 15.0 % | **6.4 %** | 910.00 € | stávame sa najlacnejší |
| Gorenje RK4182PW4 | 359.00 € | **289.00 €** | 32.2 % | **6.4 %** | 289.34 € | stávame sa najlacnejší |
| ETA 410090000 | 399.00 € | **330.00 €** | 29.2 % | **6.9 %** | 330.30 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 954.00 € | **889.90 €** | 15.0 % | **7.3 %** | 890.00 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 399.00 € | **335.00 €** | 26.6 % | **6.3 %** | 335.44 € | stávame sa najlacnejší |
| Samsung OLED QE77S99H | 3498.90 € | **3436.90 €** | 6.9 % | **5.0 %** | 3399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.90 €** | 15.0 % | **5.4 %** | 670.00 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **221.00 €** | 37.7 % | **9.1 %** | 221.46 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max Plus robotický s mopom... | 272.50 € | **216.90 €** | 32.1 % | **5.1 %** | 190.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 151.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 200.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 901.00 € | **848.90 €** | 15.0 % | **8.3 %** | 849.00 € | stávame sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **347.00 €** | 22.9 % | **6.9 %** | 347.40 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 512.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 640.00 € | **589.90 €** | 15.0 % | **6.0 %** | 589.94 € | stávame sa najlacnejší |
| Samsung OLED QE65S99H | 2914.50 € | **2868.00 €** | 10.0 % | **8.2 %** | 2868.38 € | stávame sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **242.50 €** | 28.7 % | **8.0 %** | 242.90 € | stávame sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 944.00 € | **898.00 €** | 15.0 % | **9.4 %** | 898.40 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 136.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **411.50 €** | 18.3 % | **7.0 %** | 411.90 € | stávame sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 96.0 % | **11.9 %** | 57.23 € | stávame sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 118.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38646D | 535.00 € | **494.00 €** | 15.9 % | **7.0 %** | 494.30 € | stávame sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 525.50 € | **486.90 €** | 15.0 % | **6.6 %** | 486.99 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 28.0 % | **9.2 %** | 204.08 € | stávame sa najlacnejší |
| Projektor JMGO N1S SE | 702.50 € | **667.50 €** | 15.0 % | **9.3 %** | 667.69 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 24.9 % | **9.2 %** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 24.7 % | **9.0 %** | 244.20 € | stávame sa najlacnejší |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 532.90 € | **498.90 €** | 15.0 % | **7.7 %** | 499.00 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 439.00 € | **405.90 €** | 14.8 % | **6.1 %** | 405.96 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 176.50 € | **143.50 €** | 32.0 % | **7.3 %** | 143.60 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1317.50 €** | 15.0 % | **12.2 %** | 1317.74 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 404.50 € | **372.50 €** | 15.0 % | **5.9 %** | 372.57 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 279.00 € | **248.00 €** | 22.8 % | **9.1 %** | 248.37 € | stávame sa najlacnejší |
| Projektor Ultimea Apollo P60 | 345.50 € | **315.50 €** | 15.0 % | **5.1 %** | 272.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 418.90 € | **389.50 €** | 14.0 % | **6.0 %** | 389.72 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 434.50 € | **405.50 €** | 15.0 % | **7.3 %** | 405.72 € | stávame sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 793.90 € | **765.00 €** | 10.0 % | **6.0 %** | 765.20 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 377.50 € | **348.90 €** | 15.0 % | **6.3 %** | 349.00 € | stávame sa najlacnejší |
| AURZEN Boom Mini projektor | 328.90 € | **300.50 €** | 15.0 % | **5.1 %** | 265.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus T2 smart bike trainer | 615.90 € | **589.90 €** | 15.0 % | **10.2 %** | 590.00 € | stávame sa najlacnejší |
| Nano projektor JMGO N1S | 496.50 € | **470.50 €** | 15.0 % | **9.0 %** | 470.67 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Pro | 506.00 € | **480.00 €** | 15.0 % | **9.0 %** | 480.19 € | stávame sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 274.90 € | **249.00 €** | 18.2 % | **7.0 %** | 249.03 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z20 | 359.00 € | **333.50 €** | 15.0 % | **6.8 %** | 333.84 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 323.50 € | **298.00 €** | 15.0 % | **6.0 %** | 298.49 € | stávame sa najlacnejší |
| Termovízna kamera THERMAL MASTER T2Max | 292.90 € | **267.50 €** | 15.0 % | **5.0 %** | 255.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.90 €** | 15.0 % | **9.8 %** | 539.00 € | stávame sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.90 €** | 49.9 % | **20.0 %** | 99.00 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 199.00 € | **175.50 €** | 22.9 % | **8.4 %** | 175.80 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 927.50 € | **904.50 €** | 10.0 % | **7.3 %** | 904.67 € | stávame sa najlacnejší |
| Ultimea Skywave X70 Soundbar | 598.90 € | **576.00 €** | 12.4 % | **8.1 %** | 576.02 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **349.00 €** | 15.1 % | **8.0 %** | 349.37 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 746.50 € | **723.90 €** | 15.0 % | **11.5 %** | 723.93 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 395.50 € | **372.90 €** | 15.0 % | **8.4 %** | 373.00 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 911.00 € | **888.50 €** | 10.0 % | **7.3 %** | 888.88 € | stávame sa najlacnejší |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 253.50 € | **231.50 €** | 15.1 % | **5.1 %** | 207.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 11.0 % | **9.3 %** | 1377.03 € | stávame sa najlacnejší |
| Projektor JMGO PicoPlay+ | 413.00 € | **391.00 €** | 14.9 % | **8.8 %** | 391.19 € | stávame sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Ultima Poseidon E40 | 402.90 € | **381.00 €** | 15.0 % | **8.8 %** | 381.21 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R02B10 (čierny) | 412.50 € | **390.90 €** | 15.0 % | **9.0 %** | 391.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **267.50 €** | 15.0 % | **6.5 %** | 267.52 € | stávame sa najlacnejší |
| Rooma Espresso A7 bílá | 558.50 € | **537.50 €** | 10.0 % | **5.9 %** | 537.70 € | stávame sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 315.50 € | **294.50 €** | 15.0 % | **7.4 %** | 294.88 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 566.90 € | **546.00 €** | 10.1 % | **6.0 %** | 546.10 € | stávame sa najlacnejší |
| WHIRLPOOL AKR 749/1 IX | 139.00 € | **118.50 €** | 23.5 % | **5.3 %** | 80.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 350.00 € | **329.50 €** | 13.6 % | **6.9 %** | 329.74 € | stávame sa najlacnejší |
| ETA 507590000 | 119.99 € | **99.50 €** | 26.8 % | **5.2 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (čierny) | 295.50 € | **275.50 €** | 15.1 % | **7.3 %** | 275.70 € | stávame sa najlacnejší |
| GORENJE TH60E3B | 99.00 € | **79.00 €** | 33.7 % | **6.7 %** | 79.20 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 298.50 € | **278.90 €** | 15.0 % | **7.5 %** | 278.99 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100BV2 Bluet... | 297.50 € | **278.00 €** | 15.1 % | **7.5 %** | 278.02 € | stávame sa najlacnejší |
| AURZEN Zip Projektor (strieborný) | 356.00 € | **336.50 €** | 15.0 % | **8.7 %** | 336.68 € | stávame sa najlacnejší |
| Projektor BlitzWolf BW-V11 | 352.50 € | **333.00 €** | 15.0 % | **8.6 %** | 333.18 € | stávame sa najlacnejší |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **329.50 €** | 15.0 % | **8.6 %** | 329.71 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **68.90 €** | 43.8 % | **12.7 %** | 69.00 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 657.90 € | **638.90 €** | 10.1 % | **6.9 %** | 639.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **320.00 €** | 15.0 % | **8.5 %** | 320.19 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 269.50 € | **250.50 €** | 15.0 % | **6.9 %** | 250.76 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah GETI GBL-12-100DV2 Displej | 279.50 € | **261.00 €** | 15.1 % | **7.5 %** | 261.14 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V45i | 330.50 € | **312.00 €** | 15.0 % | **8.6 %** | 312.18 € | stávame sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 277.00 € | **259.00 €** | 15.0 % | **7.5 %** | 259.28 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 327.90 € | **310.00 €** | 12.9 % | **6.7 %** | 310.34 € | stávame sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 255.00 € | **237.50 €** | 14.0 % | **6.2 %** | 237.63 € | stávame sa najlacnejší |
| Rooma Espresso A6 bílá | 481.50 € | **464.00 €** | 10.0 % | **6.0 %** | 464.19 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 434.00 € | **416.90 €** | 15.0 % | **10.5 %** | 417.00 € | stávame sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 691.50 € | **674.50 €** | 10.1 % | **7.4 %** | 674.58 € | stávame sa najlacnejší |
| Projektor Ultima Nova C40 | 301.00 € | **284.00 €** | 15.0 % | **8.5 %** | 284.10 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (červený) | 292.50 € | **275.50 €** | 15.0 % | **8.3 %** | 275.70 € | stávame sa najlacnejší |
| Gorenje DE69CS | 514.50 € | **497.50 €** | 10.0 % | **6.4 %** | 497.79 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 59.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás MERACH MR-T25B2 | 372.90 € | **356.50 €** | 15.1 % | **10.0 %** | 356.52 € | stávame sa najlacnejší |
| Reproduktory Edifier S360DB 2.1 (hnedé) | 359.50 € | **343.50 €** | 14.9 % | **9.8 %** | 343.88 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 86.90 € | **71.00 €** | 43.9 % | **17.6 %** | 71.30 € | stávame sa najlacnejší |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 516.90 € | **501.00 €** | 15.0 % | **11.5 %** | 501.36 € | stávame sa najlacnejší |
| CANDY CCGMEE9025PX/E | 814.50 € | **798.90 €** | 10.0 % | **7.9 %** | 799.00 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 468.50 € | **453.00 €** | 12.7 % | **9.0 %** | 453.19 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 244.50 € | **229.00 €** | 15.1 % | **7.8 %** | 229.50 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 539.50 € | **524.00 €** | 10.1 % | **6.9 %** | 524.50 € | stávame sa najlacnejší |
| ETA 002898050 | 79.99 € | **64.50 €** | 30.6 % | **5.3 %** | 64.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (červený) | 245.50 € | **230.50 €** | 15.1 % | **8.0 %** | 230.69 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 411.90 € | **397.00 €** | 10.1 % | **6.1 %** | 397.09 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 534.90 € | **520.00 €** | 10.0 % | **6.9 %** | 520.40 € | stávame sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **154.50 €** | 14.9 % | **5.1 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 225.50 € | **211.00 €** | 14.7 % | **7.3 %** | 211.19 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 522.50 € | **508.00 €** | 10.0 % | **7.0 %** | 508.40 € | stávame sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 364.90 € | **350.50 €** | 10.0 % | **5.7 %** | 350.71 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 174.00 € | **159.90 €** | 14.9 % | **5.6 %** | 159.95 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo LED800 antracit | 309.50 € | **295.50 €** | 10.0 % | **5.1 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo LED800 bílý | 309.50 € | **295.50 €** | 10.0 % | **5.1 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 409.90 € | **396.00 €** | 11.1 % | **7.3 %** | 396.34 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 332.50 € | **318.90 €** | 10.1 % | **5.6 %** | 319.00 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **38.90 €** | 50.5 % | **11.5 %** | 39.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 153.50 € | **140.00 €** | 15.2 % | **5.0 %** | 130.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 375.50 € | **362.00 €** | 10.0 % | **6.1 %** | 362.05 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 65.50 € | **52.00 €** | 33.5 % | **6.0 %** | 52.09 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **158.50 €** | 14.8 % | **5.8 %** | 158.90 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 481.90 € | **468.50 €** | 10.0 % | **7.0 %** | 468.60 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 183.00 € | **169.90 €** | 14.9 % | **6.7 %** | 169.95 € | stávame sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 253.00 € | **239.90 €** | 15.0 % | **9.0 %** | 239.95 € | stávame sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **34.90 €** | 54.8 % | **12.8 %** | 35.00 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 22.6 % | **9.2 %** | 106.20 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C510W 3MPx, vonkajšia, IP, WiFi,... | 63.90 € | **51.00 €** | 31.7 % | **5.1 %** | 46.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Sensazione černý | 343.50 € | **330.90 €** | 10.0 % | **6.0 %** | 330.98 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 311.50 € | **298.90 €** | 10.1 % | **5.7 %** | 299.00 € | stávame sa najlacnejší |
| Gorenje N62CS2XL4 | 447.50 € | **435.00 €** | 10.1 % | **7.0 %** | 435.10 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 53.00 € | **40.50 €** | 43.6 % | **9.8 %** | 40.63 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 433.00 € | **420.50 €** | 15.0 % | **11.7 %** | 420.70 € | stávame sa najlacnejší |
| Grafický tablet Huion Slate 11 | 274.50 € | **262.00 €** | 15.1 % | **9.8 %** | 262.20 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 455.50 € | **443.00 €** | 10.0 % | **7.0 %** | 443.20 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 62.00 € | **49.50 €** | 37.7 % | **10.0 %** | 49.90 € | stávame sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 10.1 % | **7.0 %** | 413.60 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 343.90 € | **331.90 €** | 10.1 % | **6.2 %** | 332.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F03 STD | 137.50 € | **125.90 €** | 15.0 % | **5.3 %** | 119.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 37.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 405.90 € | **394.50 €** | 10.0 % | **6.9 %** | 394.70 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 378.90 € | **367.50 €** | 10.0 % | **6.7 %** | 367.90 € | stávame sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 428.50 € | **417.50 €** | 15.0 % | **12.0 %** | 417.60 € | stávame sa najlacnejší |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 245.90 € | **234.90 €** | 15.0 % | **9.8 %** | 235.00 € | stávame sa najlacnejší |
| ETA 723590000 | 338.50 € | **327.50 €** | 10.1 % | **6.5 %** | 327.69 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 75.00 € | **64.00 €** | 59.1 % | **35.8 %** | 64.21 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **31.00 €** | 48.1 % | **9.3 %** | 31.21 € | stávame sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 59.50 € | **48.90 €** | 40.2 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 123.50 € | **112.90 €** | 15.2 % | **5.3 %** | 89.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 169.50 € | **158.90 €** | 18.5 % | **11.1 %** | 159.00 € | stávame sa najlacnejší |
| Guzzanti GZ 338 | 581.00 € | **570.50 €** | 10.0 % | **8.0 %** | 570.59 € | stávame sa najlacnejší |
| Concept IDV5160wh | 363.50 € | **353.00 €** | 10.1 % | **7.0 %** | 353.10 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 300.50 € | **290.00 €** | 12.4 % | **8.5 %** | 290.18 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 300.50 € | **290.00 €** | 12.4 % | **8.5 %** | 290.18 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 47.50 € | **37.00 €** | 38.3 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 114.50 € | **104.00 €** | 17.4 % | **6.6 %** | 104.38 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 228.50 € | **218.00 €** | 15.1 % | **9.8 %** | 218.42 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.50 € | **217.00 €** | 15.1 % | **9.8 %** | 217.43 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.50 € | **217.00 €** | 15.1 % | **9.8 %** | 217.43 € | stávame sa najlacnejší |
| Taška DJI Power 1000 | 119.90 € | **109.50 €** | 15.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo Chamber Line 70 | 359.90 € | **349.50 €** | 10.1 % | **6.9 %** | 349.51 € | stávame sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 555.90 € | **545.50 €** | 10.1 % | **8.0 %** | 545.69 € | stávame sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.90 €** | 25.0 % | **7.8 %** | 63.00 € | stávame sa najlacnejší |
| Tefal GC772830 | 225.50 € | **215.50 €** | 10.1 % | **5.2 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DI 6412 CB | 279.90 € | **269.90 €** | 10.1 % | **6.2 %** | 269.98 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 357.50 € | **347.50 €** | 10.1 % | **7.0 %** | 347.60 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **212.50 €** | 15.0 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 220.00 € | **210.00 €** | 15.0 % | **9.8 %** | 210.39 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 149.00 € | **139.00 €** | 15.0 % | **7.3 %** | 139.41 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 51.1 % | **9.5 %** | 26.17 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 284.50 € | **274.90 €** | 10.0 % | **6.3 %** | 275.00 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.90 €** | 10.0 % | **7.0 %** | 341.00 € | stávame sa najlacnejší |
| Maxxo Chamber Line 40 | 251.50 € | **242.00 €** | 10.1 % | **5.9 %** | 242.21 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 214.50 € | **205.00 €** | 15.0 % | **9.9 %** | 205.25 € | stávame sa najlacnejší |
| Beko VRT96425VD | 261.50 € | **252.00 €** | 10.1 % | **6.1 %** | 252.29 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 424.50 € | **415.00 €** | 10.0 % | **7.6 %** | 415.33 € | stávame sa najlacnejší |
| Amica KF 17191 | 39.00 € | **29.50 €** | 60.1 % | **21.1 %** | 29.86 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 58.00 € | **48.50 €** | 43.5 % | **20.0 %** | 48.90 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 98.50 € | **89.00 €** | 17.8 % | **6.4 %** | 89.47 € | stávame sa najlacnejší |
| Guzzanti GZ 325 | 262.50 € | **253.00 €** | 10.1 % | **6.1 %** | 253.50 € | stávame sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **45.50 €** | 37.3 % | **13.8 %** | 45.80 € | stávame sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 50.86 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 29.90 € | **20.50 €** | 57.4 % | **7.9 %** | 20.89 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 411.90 € | **402.50 €** | 10.0 % | **7.4 %** | 402.72 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 332.90 € | **323.50 €** | 10.1 % | **7.0 %** | 323.72 € | stávame sa najlacnejší |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 259.90 € | **250.50 €** | 10.5 % | **6.5 %** | 250.77 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 109.00 € | **99.90 €** | 15.0 % | **5.4 %** | 71.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kalibrátor procesov Uni-T UT705 | 333.90 € | **324.90 €** | 15.0 % | **11.9 %** | 325.00 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 204.50 € | **195.50 €** | 14.9 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Vákuovačka G21 Nefrit | 126.50 € | **117.50 €** | 18.0 % | **9.6 %** | 117.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **253.90 €** | 15.0 % | **11.1 %** | 254.00 € | stávame sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **39.00 €** | 38.7 % | **13.0 %** | 39.50 € | stávame sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 406.50 € | **397.90 €** | 9.4 % | **7.1 %** | 398.00 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 19.99 € | **11.50 €** | 91.9 % | **10.4 %** | 11.71 € | stávame sa najlacnejší |
| GUZZANTI GZ 220A | 224.90 € | **216.50 €** | 10.2 % | **6.1 %** | 216.54 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 224.90 € | **216.50 €** | 12.2 % | **8.0 %** | 216.63 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 250.90 € | **242.50 €** | 10.0 % | **6.3 %** | 242.63 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 32.00 € | **23.90 €** | 43.3 % | **7.0 %** | 23.99 € | stávame sa najlacnejší |
| Záložní zdroj MHPower WPU-300-12 UPS 300W 12V čistý ... | 94.00 € | **85.90 €** | 15.0 % | **5.1 %** | 79.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **122.90 €** | 14.9 % | **7.8 %** | 123.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 90.00 € | **81.90 €** | 17.4 % | **6.9 %** | 82.00 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 121.00 € | **112.90 €** | 14.8 % | **7.1 %** | 113.00 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 32.90 € | **24.90 €** | 38.9 % | **5.1 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 93.90 € | **85.90 €** | 15.0 % | **5.2 %** | 82.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **38.50 €** | 28.3 % | **6.2 %** | 35.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210A | 221.00 € | **213.00 €** | 10.0 % | **6.0 %** | 213.02 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 64.50 € | **56.50 €** | 46.2 % | **28.1 %** | 56.54 € | stávame sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **330.50 €** | 15.0 % | **12.2 %** | 330.68 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 426.00 € | **418.00 €** | 15.0 % | **12.8 %** | 418.20 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 217.50 € | **209.50 €** | 10.1 % | **6.0 %** | 209.86 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 31.00 € | **23.00 €** | 53.7 % | **14.0 %** | 23.47 € | stávame sa najlacnejší |
| ELECTROLUX ZE064 | 38.99 € | **31.00 €** | 45.3 % | **15.6 %** | 31.50 € | stávame sa najlacnejší |
| Electrolux EF167 | 21.99 € | **14.00 €** | 70.9 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **14.00 €** | 70.9 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **23.00 €** | 54.5 % | **15.0 %** | 23.20 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 24 GS2401 | 564.90 € | **557.00 €** | 15.0 % | **13.4 %** | 557.20 € | stávame sa najlacnejší |
| Päťzónový indukčný sporák IsEasy LI5-01 | 192.50 € | **185.00 €** | 15.1 % | **10.6 %** | 185.05 € | stávame sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 237.00 € | **229.50 €** | 11.6 % | **8.0 %** | 229.69 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 111.50 € | **104.00 €** | 14.7 % | **7.0 %** | 104.19 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 111.50 € | **104.00 €** | 14.7 % | **7.0 %** | 104.19 € | stávame sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 107.50 € | **100.00 €** | 14.8 % | **6.8 %** | 100.33 € | stávame sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 232.50 € | **225.00 €** | 10.1 % | **6.5 %** | 225.33 € | stávame sa najlacnejší |
| Leifheit Clean Twist M Ergo+náhr. Static | 46.90 € | **39.50 €** | 29.8 % | **9.3 %** | 39.90 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 284.90 € | **277.50 €** | 15.0 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 313.90 € | **306.90 €** | 15.0 % | **12.4 %** | 307.00 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R14R1 (hnedý) | 388.90 € | **381.90 €** | 15.0 % | **13.0 %** | 382.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 410.50 € | **403.50 €** | 15.0 % | **13.1 %** | 403.70 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 47.00 € | **40.00 €** | 58.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 110.00 € | **103.00 €** | 43.6 % | **34.5 %** | 103.35 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 196.50 € | **189.50 €** | 10.1 % | **6.2 %** | 189.90 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 29.00 € | **22.00 €** | 54.0 % | **16.8 %** | 22.45 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 41.00 € | **34.00 €** | 31.9 % | **9.3 %** | 34.49 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 194.90 € | **188.00 €** | 10.1 % | **6.2 %** | 188.22 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 181.90 € | **175.00 €** | 10.1 % | **5.9 %** | 175.35 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 13.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 48.90 € | **42.00 €** | 43.9 % | **23.6 %** | 42.50 € | stávame sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 479.90 € | **473.00 €** | 11.6 % | **10.0 %** | 473.14 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B4 | 424.90 € | **418.00 €** | 15.0 % | **13.1 %** | 418.20 € | stávame sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 114.50 € | **107.90 €** | 18.8 % | **11.9 %** | 107.91 € | stávame sa najlacnejší |
| Rotoped DeerRun S500 Pro (čierny) | 246.50 € | **239.90 €** | 15.1 % | **12.0 %** | 240.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8501A | 157.00 € | **150.50 €** | 10.0 % | **5.5 %** | 150.71 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 31.50 € | **25.00 €** | 54.0 % | **22.2 %** | 25.24 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.35 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.35 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **34.50 €** | 38.3 % | **16.3 %** | 34.90 € | stávame sa najlacnejší |
| Johansson KIT 6715 zesilovač + zdroj (2438) | 161.50 € | **155.00 €** | 14.9 % | **10.3 %** | 155.50 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.5 % | **9.2 %** | 18.67 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 156.90 € | **150.50 €** | 15.1 % | **10.4 %** | 150.61 € | stávame sa najlacnejší |
| Tefal GC728D10 | 169.90 € | **163.50 €** | 10.1 % | **6.0 %** | 163.90 € | stávame sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| MPPT solar panel adapter for DJI power stations | 71.50 € | **65.50 €** | 14.7 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 209.90 € | **203.90 €** | 15.1 % | **11.8 %** | 204.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 410.90 € | **404.90 €** | 10.0 % | **8.4 %** | 405.00 € | stávame sa najlacnejší |
| Candy CDPH 2D947X | 321.50 € | **315.50 €** | 10.1 % | **8.0 %** | 315.60 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 194.90 € | **188.90 €** | 10.2 % | **6.8 %** | 189.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 40.50 € | **34.50 €** | 59.2 % | **35.6 %** | 34.65 € | stávame sa najlacnejší |
| Candy ProWash 550 SLIM BP 37SBL8-S | 278.50 € | **272.50 €** | 10.1 % | **7.7 %** | 272.72 € | stávame sa najlacnejší |
| Braun CG9043 | 219.00 € | **213.00 €** | 10.0 % | **7.0 %** | 213.28 € | stávame sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.90 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **16.00 €** | 49.2 % | **8.6 %** | 16.50 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Spájkovacia stanica FNIRSI DWS-200F s výkonom 200 W | 130.90 € | **125.00 €** | 15.0 % | **9.8 %** | 125.12 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 298.90 € | **293.00 €** | 10.1 % | **8.0 %** | 293.30 € | stávame sa najlacnejší |
| Gorenje W11NHPI84AS | 290.90 € | **285.00 €** | 10.1 % | **7.9 %** | 285.50 € | stávame sa najlacnejší |
| Gorenje RK58DPB4I | 299.50 € | **293.90 €** | 10.1 % | **8.0 %** | 294.00 € | stávame sa najlacnejší |
| Candy TCA273D3-S | 286.50 € | **280.90 €** | 10.0 % | **7.9 %** | 281.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 27.50 € | **21.90 €** | 34.6 % | **7.2 %** | 21.99 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 80.50 € | **74.90 €** | 14.7 % | **6.8 %** | 74.94 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 142.50 € | **136.90 €** | 10.0 % | **5.7 %** | 136.96 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 28.50 € | **23.00 €** | 32.9 % | **7.3 %** | 23.09 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 678.00 € | **672.50 €** | 10.0 % | **9.1 %** | 672.69 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 157.50 € | **152.00 €** | 10.1 % | **6.2 %** | 152.20 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 67.50 € | **62.00 €** | 50.4 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Stojany na činky nastavitelné REBEL ACTIVE RBA-2402 | 67.50 € | **62.00 €** | 15.0 % | **5.6 %** | 62.35 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 202.50 € | **197.00 €** | 14.7 % | **11.5 %** | 197.39 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 27.00 € | **21.50 €** | 38.2 % | **10.1 %** | 21.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 36.00 € | **30.50 €** | 32.0 % | **11.8 %** | 30.90 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 62.50 € | **57.00 €** | 39.6 % | **27.3 %** | 57.50 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 118.90 € | **113.50 €** | 10.3 % | **5.3 %** | 113.65 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **114.50 €** | 11.3 % | **6.3 %** | 114.88 € | stávame sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 176.90 € | **171.50 €** | 10.1 % | **6.7 %** | 171.90 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 28.90 € | **23.50 €** | 29.4 % | **5.2 %** | 20.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **57.50 €** | 21.8 % | **11.3 %** | 57.85 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 290.90 € | **285.50 €** | 8.0 % | **6.0 %** | 285.89 € | stávame sa najlacnejší |
| SigGen 3-v-1 FNIRSI DST-210 ručný digitálny multimet... | 60.00 € | **54.90 €** | 14.8 % | **5.0 %** | 52.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 21.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9252I | 257.00 € | **251.90 €** | 10.0 % | **7.8 %** | 252.00 € | stávame sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.6 % | **16.4 %** | 24.10 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.50 €** | 37.8 % | **12.7 %** | 22.68 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA100 sada pre výmenu vy... | 24.00 € | **19.00 €** | 33.4 % | **5.6 %** | 19.19 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **500.00 €** | 15.0 % | **13.8 %** | 500.20 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 88.00 € | **83.00 €** | 15.0 % | **8.5 %** | 83.20 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 504.50 € | **499.50 €** | 10.1 % | **9.0 %** | 499.75 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.00 € | **238.00 €** | 10.0 % | **7.7 %** | 238.40 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 36.00 € | **31.00 €** | 37.9 % | **18.8 %** | 31.50 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 137.90 € | **133.00 €** | 10.0 % | **6.1 %** | 133.01 € | stávame sa najlacnejší |
| Beko VRT86325VI | 203.90 € | **199.00 €** | 10.2 % | **7.5 %** | 199.40 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **11.00 €** | 56.1 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 74.50 € | **69.90 €** | 14.9 % | **7.8 %** | 69.96 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.50 € | **167.90 €** | 10.2 % | **7.3 %** | 168.00 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash C280 (biela) | 57.00 € | **52.50 €** | 14.6 % | **5.6 %** | 44.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BL87G831 | 125.50 € | **121.00 €** | 10.3 % | **6.4 %** | 121.10 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 119.50 € | **115.00 €** | 15.1 % | **10.8 %** | 115.12 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 31.00 € | **26.50 €** | 58.5 % | **35.5 %** | 26.64 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 20.50 € | **16.00 €** | 45.8 % | **13.8 %** | 16.17 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE E25 Pro | 235.50 € | **231.00 €** | 14.9 % | **12.7 %** | 231.21 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 15.00 € | **10.50 €** | 53.2 % | **7.2 %** | 10.76 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 570.50 € | **566.00 €** | 7.1 % | **6.3 %** | 566.36 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 39.00 € | **34.50 €** | 41.4 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 28.50 € | **24.00 €** | 58.5 % | **33.5 %** | 24.49 € | stávame sa najlacnejší |
| Reproduktory Edifier R1100 2.0 (čierne) | 78.50 € | **74.00 €** | 15.0 % | **8.4 %** | 74.50 € | stávame sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 104.90 € | **100.50 €** | 10.1 % | **5.5 %** | 100.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 110.90 € | **106.50 €** | 14.9 % | **10.4 %** | 106.54 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **130.50 €** | 15.0 % | **11.2 %** | 130.74 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 23.90 € | **19.50 €** | 39.2 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Guzzanti GZ 110G | 325.00 € | **320.90 €** | 8.4 % | **7.0 %** | 320.99 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **329.90 €** | 14.9 % | **13.5 %** | 330.00 € | stávame sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 52.00 € | **47.90 €** | 14.3 % | **5.3 %** | 44.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrý LED pásik TP-Link Tapo L900-5 5m, 13.5W, 230V... | 21.00 € | **16.90 €** | 30.7 % | **5.2 %** | 14.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 36.00 € | **31.90 €** | 19.6 % | **6.0 %** | 31.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 125.00 € | **120.90 €** | 14.9 % | **11.1 %** | 120.98 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K4 ruční, bezdrátový set | 122.90 € | **118.90 €** | 8.7 % | **5.2 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor kovov UNI-T UT387E | 47.00 € | **43.00 €** | 15.0 % | **5.2 %** | 42.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer Air PR... | 63.50 € | **59.50 €** | 14.8 % | **7.6 %** | 59.51 € | stávame sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| Electrolux MCK CZ | 29.90 € | **25.90 €** | 46.4 % | **26.8 %** | 25.95 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 23.2 % | **11.5 %** | 38.17 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 311.00 € | **307.00 €** | 7.9 % | **6.5 %** | 307.20 € | stávame sa najlacnejší |
| Catlink BayMax Lite intelligent self-cleaning cat li... | 357.50 € | **353.50 €** | 15.1 % | **13.8 %** | 353.75 € | stávame sa najlacnejší |
| G3Ferrari G2014401 Zmrzlinovač | 178.50 € | **174.50 €** | 10.0 % | **7.6 %** | 174.78 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 209.50 € | **205.50 €** | 10.1 % | **8.0 %** | 205.79 € | stávame sa najlacnejší |
| Braun IS5247.VI | 188.50 € | **184.50 €** | 10.1 % | **7.8 %** | 184.80 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **81.50 €** | 14.9 % | **9.5 %** | 81.83 € | stávame sa najlacnejší |
| Samsung QE75QN85F NEO QLED | 1195.50 € | **1191.50 €** | 10.0 % | **9.6 %** | 1191.83 € | stávame sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **91.50 €** | 10.1 % | **5.5 %** | 91.88 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 178.90 € | **175.00 €** | 10.0 % | **7.6 %** | 175.19 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 46.90 € | **43.00 €** | 15.2 % | **5.6 %** | 43.09 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **17.00 €** | 43.0 % | **16.3 %** | 17.13 € | stávame sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 272.90 € | **269.00 €** | 9.3 % | **7.8 %** | 269.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.90 € | **8.10 €** | 56.6 % | **6.6 %** | 8.11 € | stávame sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 263.50 € | **259.90 €** | 8.5 % | **7.0 %** | 259.95 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 20.50 € | **16.90 €** | 33.9 % | **10.4 %** | 16.96 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 8.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 19.50 € | **15.90 €** | 31.7 % | **7.4 %** | 15.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 19.50 € | **15.90 €** | 46.0 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Gold - 9150 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Rose Gold - 9151 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban (ružový) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.50 € | **81.00 €** | 10.0 % | **5.5 %** | 81.02 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.50 €** | 47.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.50 €** | 47.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.50 €** | 47.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 30.50 € | **27.00 €** | 38.4 % | **22.5 %** | 27.07 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 17.50 € | **14.00 €** | 56.3 % | **25.1 %** | 14.07 € | stávame sa najlacnejší |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 52.00 € | **48.50 €** | 15.1 % | **7.4 %** | 48.59 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 215.00 € | **211.50 €** | 15.0 % | **13.1 %** | 211.59 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 17.50 € | **14.00 €** | 45.5 % | **16.4 %** | 14.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 35.00 € | **31.50 €** | 43.9 % | **29.5 %** | 31.72 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 128.00 € | **124.50 €** | 10.1 % | **7.1 %** | 124.79 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 20.50 € | **17.00 €** | 33.9 % | **11.0 %** | 17.44 € | stávame sa najlacnejší |
| Electrolux E200SM | 19.99 € | **16.50 €** | 35.7 % | **12.0 %** | 16.90 € | stávame sa najlacnejší |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 103.90 € | **100.50 €** | 15.1 % | **11.3 %** | 100.65 € | stávame sa najlacnejší |
| Čistička vzduchu TEESA PURE LIFE P500 | 76.90 € | **73.50 €** | 15.2 % | **10.1 %** | 73.69 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 209.90 € | **206.50 €** | 10.1 % | **8.3 %** | 206.87 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.50 €** | 15.0 % | **9.3 %** | 65.90 € | stávame sa najlacnejší |
| Sonar Flytec V080 s kapacitou 20 000 mAh pre loď na ... | 251.90 € | **248.50 €** | 15.1 % | **13.5 %** | 248.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 24.90 € | **21.50 €** | 59.2 % | **37.4 %** | 21.52 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 40.90 € | **37.50 €** | 38.1 % | **26.6 %** | 37.53 € | stávame sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.58 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 35.90 € | **32.50 €** | 22.8 % | **11.2 %** | 32.85 € | stávame sa najlacnejší |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 55.90 € | **52.50 €** | 15.3 % | **8.2 %** | 52.89 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.90 €** | 14.9 % | **9.4 %** | 62.00 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 11.00 € | **7.90 €** | 54.5 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 27.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **64.90 €** | 10.5 % | **5.6 %** | 61.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Solid Steel | 67.90 € | **64.90 €** | 10.5 % | **5.6 %** | 61.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 31.90 € | **28.90 €** | 16.7 % | **5.7 %** | 28.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.90 €** | 18.5 % | **9.8 %** | 37.97 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 45.00 € | **42.00 €** | 17.4 % | **9.6 %** | 42.15 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 82.00 € | **79.00 €** | 13.4 % | **9.2 %** | 79.19 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 16.00 € | **13.00 €** | 41.2 % | **14.8 %** | 13.20 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **526.50 €** | 15.0 % | **14.4 %** | 526.70 € | stávame sa najlacnejší |
| Masážní přístroj nohou a lýtek Shiatsu, REBEL ACTIVE... | 35.50 € | **32.50 €** | 15.7 % | **5.9 %** | 32.87 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 428.00 € | **425.00 €** | 14.9 % | **14.1 %** | 425.37 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 211.50 € | **208.50 €** | 18.2 % | **16.5 %** | 208.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 79.50 € | **76.50 €** | 43.8 % | **38.3 %** | 76.89 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 20.50 € | **17.50 €** | 41.5 % | **20.8 %** | 17.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **35.50 €** | 55.1 % | **43.0 %** | 35.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.50 €** | 56.5 % | **28.1 %** | 13.90 € | stávame sa najlacnejší |
| Candy CHW6LBX/4U2 IDEA | 82.50 € | **79.50 €** | 10.5 % | **6.4 %** | 79.90 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 629.00 € | **626.00 €** | 10.0 % | **9.5 %** | 626.44 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 81.90 € | **79.00 €** | 15.0 % | **10.9 %** | 79.08 € | stávame sa najlacnejší |
| Salente Combo-4In1 | 126.90 € | **124.00 €** | 10.0 % | **7.5 %** | 124.11 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 183.90 € | **181.00 €** | 10.2 % | **8.4 %** | 181.25 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 14.90 € | **12.00 €** | 35.0 % | **8.8 %** | 12.29 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 24.90 € | **22.00 €** | 55.2 % | **37.2 %** | 22.20 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 31.90 € | **29.00 €** | 15.5 % | **5.0 %** | 29.22 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 50.90 € | **48.00 €** | 15.3 % | **8.7 %** | 48.29 € | stávame sa najlacnejší |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 34.90 € | **32.00 €** | 15.3 % | **5.8 %** | 32.29 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 40.90 € | **38.00 €** | 17.5 % | **9.1 %** | 38.30 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 8.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 29.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 24.50 € | **21.90 €** | 43.5 % | **28.3 %** | 22.00 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **45.90 €** | 15.0 % | **8.9 %** | 46.00 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **14.90 €** | 42.8 % | **21.6 %** | 14.97 € | stávame sa najlacnejší |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 175.50 € | **172.90 €** | 15.0 % | **13.3 %** | 172.91 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT černé | 167.50 € | **164.90 €** | 14.9 % | **13.1 %** | 164.99 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 167.50 € | **164.90 €** | 14.9 % | **13.1 %** | 164.99 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 211.50 € | **208.90 €** | 14.9 % | **13.5 %** | 209.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 93.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 24.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 16.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **12.50 €** | 28.9 % | **7.4 %** | 10.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 52.00 € | **49.50 €** | 14.4 % | **8.9 %** | 49.57 € | stávame sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **32.00 €** | 49.6 % | **38.8 %** | 32.10 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.50 € | **124.00 €** | 10.2 % | **8.0 %** | 124.11 € | stávame sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 222.50 € | **220.00 €** | 15.1 % | **13.8 %** | 220.12 € | stávame sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 154.50 € | **152.00 €** | 10.2 % | **8.4 %** | 152.12 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 25.00 € | **22.50 €** | 47.1 % | **32.4 %** | 22.65 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 41.0 % | **26.6 %** | 22.20 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **71.00 €** | 10.6 % | **6.9 %** | 71.20 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 144.50 € | **142.00 €** | 10.3 % | **8.4 %** | 142.30 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 60.50 € | **58.00 €** | 15.0 % | **10.3 %** | 58.38 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.00 €** | 10.4 % | **8.3 %** | 132.40 € | stávame sa najlacnejší |
| Beko VRT76325VW | 168.50 € | **166.00 €** | 10.0 % | **8.4 %** | 166.40 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 180.50 € | **178.00 €** | 10.3 % | **8.8 %** | 178.40 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 45.50 € | **43.00 €** | 15.5 % | **9.1 %** | 43.43 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **24.00 €** | 54.7 % | **40.1 %** | 24.50 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.50 € | **132.00 €** | 10.3 % | **8.2 %** | 132.50 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.50 € | **127.00 €** | 10.3 % | **8.2 %** | 127.50 € | stávame sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25630 fialová | 47.50 € | **45.00 €** | 14.9 % | **8.8 %** | 45.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 28.50 € | **26.00 €** | 53.4 % | **40.0 %** | 26.50 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.99 € | **17.50 €** | 23.0 % | **7.7 %** | 17.60 € | stávame sa najlacnejší |
| ETA 160390000 | 19.99 € | **17.50 €** | 26.4 % | **10.6 %** | 17.71 € | stávame sa najlacnejší |
| G3Ferrari G2013900 Artiko Výrobník ledu | 125.90 € | **123.50 €** | 8.8 % | **6.7 %** | 123.71 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 179.90 € | **177.50 €** | 10.1 % | **8.6 %** | 177.80 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 174.90 € | **172.50 €** | 10.1 % | **8.5 %** | 172.90 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L630 GU10, 3,7W, 230V, c... | 12.00 € | **9.60 €** | 32.2 % | **5.8 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 15.90 € | **13.50 €** | 31.1 % | **11.3 %** | 13.71 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 8.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freestyle koloběžka NILS Extreme HS033 černo-červená | 50.90 € | **48.50 €** | 15.0 % | **9.6 %** | 48.74 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 57.90 € | **55.50 €** | 16.3 % | **11.5 %** | 55.87 € | stávame sa najlacnejší |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 39.90 € | **37.50 €** | 13.5 % | **6.7 %** | 37.90 € | stávame sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 26.00 € | **23.90 €** | 14.6 % | **5.4 %** | 23.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 15.00 € | **12.90 €** | 45.7 % | **25.3 %** | 12.96 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.00 € | **102.90 €** | 10.0 % | **7.8 %** | 102.96 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.00 € | **128.90 €** | 10.1 % | **8.3 %** | 129.00 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.90 €** | 38.6 % | **16.3 %** | 11.00 € | stávame sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **39.50 €** | 10.4 % | **5.1 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 22.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42602S | 40.50 € | **38.50 €** | 11.3 % | **5.8 %** | 38.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 31.50 € | **29.50 €** | 54.7 % | **44.9 %** | 29.52 € | stávame sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **58.00 €** | 14.9 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 12.90 € | **10.90 €** | 29.3 % | **9.3 %** | 10.97 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 40.00 € | **38.00 €** | 14.3 % | **8.6 %** | 38.08 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 250.90 € | **248.90 €** | 10.1 % | **9.2 %** | 249.00 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 43.50 € | **41.50 €** | 20.1 % | **14.6 %** | 41.63 € | stávame sa najlacnejší |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 167.50 € | **165.50 €** | 8.2 % | **6.9 %** | 165.64 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 162.50 € | **160.50 €** | 10.1 % | **8.7 %** | 160.70 € | stávame sa najlacnejší |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 197.50 € | **195.50 €** | 15.1 % | **14.0 %** | 195.71 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.00 € | **105.00 €** | 10.0 % | **8.0 %** | 105.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 98.50 € | **96.50 €** | 43.6 % | **40.7 %** | 96.77 € | stávame sa najlacnejší |
| Kettlebell litinový nastavitelný 9 kg REBEL ACTIVE R... | 46.50 € | **44.50 €** | 15.3 % | **10.3 %** | 44.82 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 14.50 € | **12.50 €** | 57.0 % | **35.3 %** | 12.83 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 110.50 € | **108.50 €** | 8.6 % | **6.7 %** | 108.84 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 206.00 € | **204.00 €** | 14.9 % | **13.8 %** | 204.34 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 76.50 € | **74.50 €** | 15.4 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 18.89 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 37.50 € | **35.50 €** | 39.3 % | **31.9 %** | 35.90 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.50 € | **63.50 €** | 20.1 % | **16.4 %** | 63.90 € | stávame sa najlacnejší |
| Domo DO344DH | 149.50 € | **147.50 €** | 10.1 % | **8.7 %** | 147.90 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.50 € | **56.50 €** | 10.2 % | **6.4 %** | 56.90 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **65.50 €** | 15.2 % | **11.8 %** | 65.90 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.00 € | **169.00 €** | 10.0 % | **8.8 %** | 169.40 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 26.00 € | **24.00 €** | 54.3 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 159.90 € | **158.00 €** | 10.2 % | **8.9 %** | 158.20 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 138.90 € | **137.00 €** | 10.3 % | **8.8 %** | 137.30 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **110.00 €** | 15.0 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 72.90 € | **71.00 €** | 42.1 % | **38.4 %** | 71.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.00 € | **6.10 €** | 48.8 % | **13.5 %** | 6.19 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| EMOS CITY RING-C500 pkojová anténa DVB-T2, DAB, filt... | 21.90 € | **20.00 €** | 15.0 % | **5.0 %** | 19.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **20.00 €** | 48.6 % | **35.7 %** | 20.15 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 59.90 € | **58.00 €** | 13.1 % | **9.5 %** | 58.28 € | stávame sa najlacnejší |
| Russell Hobbs 24992-70 | 40.90 € | **39.00 €** | 10.5 % | **5.3 %** | 39.29 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Skládací síť REBEL ACTIVE pro badminton a další sporty | 30.90 € | **29.00 €** | 15.3 % | **8.2 %** | 29.49 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 18.90 € | **17.00 €** | 54.6 % | **39.0 %** | 17.50 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 30.90 € | **29.00 €** | 14.8 % | **7.8 %** | 29.50 € | stávame sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 749.90 € | **748.00 €** | 10.2 % | **10.0 %** | 748.21 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 6.50 € | **4.80 €** | 59.7 % | **17.9 %** | 4.90 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **37.90 €** | 15.3 % | **10.6 %** | 37.94 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 28.50 € | **26.90 €** | 50.2 % | **41.7 %** | 26.96 € | stávame sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 14.7 % | **5.8 %** | 18.98 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 24.50 € | **22.90 €** | 17.3 % | **9.6 %** | 22.98 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 30.50 € | **28.90 €** | 14.9 % | **8.8 %** | 28.99 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **20.90 €** | 53.3 % | **42.4 %** | 21.00 € | stávame sa najlacnejší |
| LEIFHEIT 51016 | 50.50 € | **48.90 €** | 10.5 % | **7.0 %** | 49.00 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **30.90 €** | 59.9 % | **52.1 %** | 31.00 € | stávame sa najlacnejší |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 20.50 € | **18.90 €** | 13.9 % | **5.0 %** | 19.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **11.90 €** | 55.2 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.50 € | **10.90 €** | 53.3 % | **33.7 %** | 11.00 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.90 €** | 10.4 % | **7.7 %** | 65.00 € | stávame sa najlacnejší |
| Aligator AUDIO COMBO set 3v1 AUC001 | 30.50 € | **29.00 €** | 10.7 % | **5.3 %** | 26.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Air Board M Compact | 54.50 € | **53.00 €** | 8.1 % | **5.2 %** | 50.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 33.00 € | **31.50 €** | 14.4 % | **9.2 %** | 31.59 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 117.00 € | **115.50 €** | 14.9 % | **13.4 %** | 115.59 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 61.00 € | **59.50 €** | 14.8 % | **12.0 %** | 59.59 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **27.00 €** | 15.7 % | **9.6 %** | 27.10 € | stávame sa najlacnejší |
| Niceboy PILOT S5 GPS + WIFI | 49.50 € | **48.00 €** | 10.9 % | **7.5 %** | 48.10 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **18.00 €** | 36.9 % | **26.4 %** | 18.15 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 20.50 € | **19.00 €** | 17.8 % | **9.2 %** | 19.15 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| Cabletech UCH0022-S | 22.00 € | **20.50 €** | 13.4 % | **5.7 %** | 20.68 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **274.50 €** | 15.0 % | **14.3 %** | 274.70 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 172.00 € | **170.50 €** | 10.0 % | **9.1 %** | 170.70 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| SALENTE SuChef | 84.50 € | **83.00 €** | 10.4 % | **8.4 %** | 83.25 € | stávame sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 52.50 € | **51.00 €** | 15.4 % | **12.1 %** | 51.25 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT312A | 284.00 € | **282.50 €** | 15.0 % | **14.4 %** | 282.79 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 19.50 € | **18.00 €** | 14.5 % | **5.7 %** | 18.29 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.00 € | **64.50 €** | 10.1 % | **7.6 %** | 64.83 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **13.50 €** | 54.0 % | **38.6 %** | 13.85 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45P-BK černé se sto... | 264.00 € | **262.50 €** | 14.9 % | **14.3 %** | 262.86 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **88.50 €** | 14.8 % | **12.9 %** | 88.89 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.50 €** | 48.7 % | **33.8 %** | 13.90 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 872.00 € | **870.50 €** | 15.0 % | **14.8 %** | 870.90 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.90 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.90 € | stávame sa najlacnejší |
| GameSir-T4n Lite wireless controller (white) | 22.00 € | **20.50 €** | 15.2 % | **7.3 %** | 20.90 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 13.50 € | **12.00 €** | 56.1 % | **38.8 %** | 12.41 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 14.50 € | **13.00 €** | 47.4 % | **32.1 %** | 13.45 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **11.00 €** | 46.0 % | **28.5 %** | 11.49 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 12.50 € | **11.00 €** | 53.5 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| Tefal FW501815 | 136.50 € | **135.00 €** | 10.1 % | **8.9 %** | 135.49 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **15.00 €** | 39.3 % | **26.6 %** | 15.50 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 28.50 € | **27.00 €** | 20.1 % | **13.7 %** | 27.50 € | stávame sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.00 €** | 10.9 % | **5.2 %** | 28.50 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.50 € | **120.00 €** | 10.3 % | **9.0 %** | 120.50 € | stávame sa najlacnejší |
| Domo DO228SV | 121.50 € | **120.00 €** | 10.0 % | **8.7 %** | 120.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 16.50 € | **15.00 €** | 43.0 % | **30.0 %** | 15.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **16.00 €** | 44.3 % | **31.9 %** | 16.50 € | stávame sa najlacnejší |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 75.50 € | **74.00 €** | 15.1 % | **12.8 %** | 74.50 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 101.90 € | **100.50 €** | 15.0 % | **13.5 %** | 100.51 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 211.90 € | **210.50 €** | 18.5 % | **17.7 %** | 210.53 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 85.90 € | **84.50 €** | 15.1 % | **13.2 %** | 84.86 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 13.90 € | **12.50 €** | 19.0 % | **7.0 %** | 12.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 10.90 € | **9.50 €** | 49.7 % | **30.5 %** | 9.56 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 13.90 € | **12.50 €** | 44.9 % | **30.3 %** | 12.74 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.90 € | **14.50 €** | 56.1 % | **42.4 %** | 14.77 € | stávame sa najlacnejší |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 12.90 € | **11.50 €** | 18.4 % | **5.5 %** | 11.86 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 6.60 € | **5.20 €** | 49.9 % | **18.1 %** | 5.29 € | stávame sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 40.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada litinových závaží 4x1,25kg, 51mm, REBEL ACTIVE ... | 18.90 € | **17.50 €** | 15.7 % | **7.1 %** | 15.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 28.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.90 € | **17.50 €** | 15.0 % | **6.5 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovačka G21 Onyx | 59.90 € | **58.50 €** | 20.2 % | **17.4 %** | 58.59 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 60.90 € | **59.50 €** | 10.3 % | **7.8 %** | 59.60 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **21.50 €** | 38.1 % | **29.7 %** | 21.63 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 18.90 € | **17.50 €** | 46.6 % | **35.8 %** | 17.64 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.90 € | **42.50 €** | 15.4 % | **11.7 %** | 42.66 € | stávame sa najlacnejší |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 34.90 € | **33.50 €** | 22.1 % | **17.2 %** | 33.84 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **40.50 €** | 11.0 % | **7.3 %** | 40.90 € | stávame sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **33.50 €** | 12.2 % | **7.7 %** | 33.90 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 494.90 € | **493.50 €** | 10.0 % | **9.7 %** | 493.53 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **6.60 €** | 55.5 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.40 € | **6.10 €** | 47.8 % | **21.9 %** | 6.20 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 6.00 € | **4.70 €** | 49.2 % | **16.9 %** | 4.79 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 7.50 € | **6.30 €** | 59.6 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.90 € | **3.70 €** | 54.4 % | **16.6 %** | 3.79 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 11.00 € | **9.80 €** | 54.5 % | **37.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.95 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| ETA 142390000 | 32.00 € | **30.90 €** | 16.1 % | **12.1 %** | 30.96 € | stávame sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **57.90 €** | 14.9 % | **12.8 %** | 57.99 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 18.00 € | stávame sa najlacnejší |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 28.00 € | **26.90 €** | 14.1 % | **9.6 %** | 27.00 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.70 € | **6.60 €** | 54.6 % | **32.5 %** | 6.69 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.90 €** | 22.4 % | **11.2 %** | 11.00 € | stávame sa najlacnejší |
| Roborock Q10 PF čistiaci robot (čierny) | 219.00 € | **217.90 €** | 15.0 % | **14.4 %** | 218.00 € | stávame sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-BL | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-PI | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-TU | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 14.50 € | **13.50 €** | 14.1 % | **6.2 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 16.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.4 % | **6.6 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 48.50 € | **47.50 €** | 7.4 % | **5.1 %** | 47.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.90 €** | 10.4 % | **9.3 %** | 101.91 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.40 € | **5.40 €** | 47.0 % | **24.0 %** | 5.41 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 13.50 € | **12.50 €** | 56.1 % | **44.6 %** | 12.54 € | stávame sa najlacnejší |
| Solight vonkajšia otočná IP kamera | 38.50 € | **37.50 €** | 42.7 % | **39.0 %** | 37.54 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.50 €** | 15.0 % | **13.1 %** | 61.54 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.90 € | **22.90 €** | 38.4 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.05 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **11.00 €** | 44.3 % | **32.3 %** | 11.05 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **24.50 €** | 15.8 % | **11.3 %** | 24.58 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-beige(beige) | 107.00 € | **106.00 €** | 14.8 % | **13.7 %** | 106.09 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.90 € | **7.90 €** | 43.9 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.50 € | **19.50 €** | 14.4 % | **8.8 %** | 19.59 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.90 € | **9.90 €** | 54.1 % | **40.0 %** | 10.00 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 55.2 % | **43.7 %** | 12.61 € | stávame sa najlacnejší |
| Grafický tablet Huion H1161 | 74.00 € | **73.00 €** | 14.8 % | **13.2 %** | 73.11 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 18.00 € | **17.00 €** | 52.4 % | **44.0 %** | 17.12 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B80... | 88.50 € | **87.50 €** | 15.3 % | **14.0 %** | 87.62 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 11.50 € | **10.50 €** | 56.9 % | **43.2 %** | 10.63 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Solight FM transmitter s bluetooth pripojením do aut... | 16.00 € | **15.00 €** | 43.9 % | **34.9 %** | 15.15 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **113.50 €** | 10.4 % | **9.4 %** | 113.65 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **19.00 €** | 14.6 % | **8.9 %** | 19.16 € | stávame sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.50 €** | 10.5 % | **5.1 %** | 19.67 € | stávame sa najlacnejší |
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
| Beper BEP-PE145 | 40.50 € | **39.50 €** | 10.1 % | **7.4 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 11.2 % | **6.3 %** | 21.70 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.22 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 15.00 € | **14.00 €** | 54.0 % | **43.7 %** | 14.25 € | stávame sa najlacnejší |
| FNIRSI GD-02 Detektor horľavých plynov s farebným di... | 35.50 € | **34.50 €** | 15.4 % | **12.1 %** | 34.75 € | stávame sa najlacnejší |
| ETA 210390000 | 41.50 € | **40.50 €** | 10.4 % | **7.7 %** | 40.75 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND32/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND64/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND16 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **41.50 €** | 15.0 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 13.00 € | **12.00 €** | 53.6 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Powerbanka Baseus Bipow 10000 mAh, 20 W (biela) | 19.00 € | **18.00 €** | 13.6 % | **7.6 %** | 18.28 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 42.00 € | **41.00 €** | 14.7 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.7 % | **6.7 %** | 21.79 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 26.50 € | **25.50 €** | 37.7 % | **32.5 %** | 25.80 € | stávame sa najlacnejší |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 11.50 € | **10.50 €** | 45.6 % | **33.0 %** | 10.81 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 72.00 € | **71.00 €** | 14.7 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 76.00 € | **75.00 €** | 10.1 % | **8.7 %** | 75.32 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **25.00 €** | 42.7 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 16.50 € | **15.50 €** | 14.8 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 32.50 € | **31.50 €** | 14.8 % | **11.3 %** | 31.83 € | stávame sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.50 €** | 14.2 % | **5.0 %** | 11.83 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **351.50 €** | 15.1 % | **14.7 %** | 351.88 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 18.50 € | **17.50 €** | 11.8 % | **5.7 %** | 17.88 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.50 € | **233.50 €** | 10.2 % | **9.7 %** | 233.88 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 159.00 € | **158.00 €** | 14.8 % | **14.1 %** | 158.39 € | stávame sa najlacnejší |
| Elektrická pánev do auta 20cm x 4cm 150W 12V | 42.50 € | **41.50 €** | 15.6 % | **12.9 %** | 41.90 € | stávame sa najlacnejší |
| DOMO DO465FR | 66.50 € | **65.50 €** | 10.6 % | **9.0 %** | 65.90 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Night 160 ml | 12.00 € | **11.00 €** | 22.4 % | **12.2 %** | 11.42 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 17.00 € | **16.00 €** | 13.4 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 19.00 € | **18.00 €** | 14.3 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 85.00 € | **84.00 €** | 14.9 % | **13.5 %** | 84.42 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **35.00 €** | 15.0 % | **11.9 %** | 35.42 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 28.00 € | **27.00 €** | 36.1 % | **31.3 %** | 27.44 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 44.00 € | **43.00 €** | 14.7 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 22.00 € | **21.00 €** | 14.2 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 11.48 € | stávame sa najlacnejší |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 29.00 € | **28.00 €** | 14.6 % | **10.7 %** | 28.49 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **88.00 €** | 15.1 % | **13.8 %** | 88.50 € | stávame sa najlacnejší |
| G3ferrari G1019100 Horkovzdušná fritéza | 105.90 € | **105.00 €** | 10.3 % | **9.4 %** | 105.20 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **65.00 €** | 10.6 % | **9.1 %** | 65.29 € | stávame sa najlacnejší |
| Blender G21 Perfection brown | 211.90 € | **211.00 €** | 18.5 % | **17.9 %** | 211.35 € | stávame sa najlacnejší |
| Blender G21 Perfection Cappuccino | 211.90 € | **211.00 €** | 18.5 % | **17.9 %** | 211.35 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 211.90 € | **211.00 €** | 18.5 % | **17.9 %** | 211.35 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 64.90 € | **64.00 €** | 10.3 % | **8.8 %** | 64.50 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.90 € | **64.00 €** | 15.1 % | **13.5 %** | 64.50 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **14.00 €** | 21.6 % | **14.3 %** | 14.04 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.90 € | **12.00 €** | 14.9 % | **6.9 %** | 12.39 € | stávame sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.90 € | **12.00 €** | 14.9 % | **6.9 %** | 12.39 € | stávame sa najlacnejší |
| Powerbanka EMOS AlphaQ3, 10 000 mAh, 22,5 W, černá | 15.90 € | **15.00 €** | 15.4 % | **8.9 %** | 15.49 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **13.00 €** | 14.8 % | **7.4 %** | 13.50 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 3.30 € | **2.40 €** | 55.1 % | **12.8 %** | 2.44 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.30 € | **5.40 €** | 42.7 % | **22.3 %** | 5.48 € | stávame sa najlacnejší |
| Zelmer ZHM2550 | 39.90 € | **39.00 €** | 28.9 % | **26.0 %** | 39.03 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.09 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.09 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.09 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.09 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.90 € | **18.00 €** | 15.0 % | **9.5 %** | 18.15 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6013-GL 130x50... | 32.90 € | **32.00 €** | 15.1 % | **11.9 %** | 32.27 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.90 € | **20.00 €** | 10.8 % | **6.0 %** | 20.38 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.00 €** | 15.4 % | **9.6 %** | 17.39 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.00 €** | 15.2 % | **9.4 %** | 17.39 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **42.00 €** | 10.9 % | **8.6 %** | 42.41 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.90 € | **22.00 €** | 10.5 % | **6.1 %** | 22.42 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.90 € | **17.00 €** | 15.2 % | **9.4 %** | 17.45 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.90 € | **16.00 €** | 35.4 % | **28.2 %** | 16.49 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **16.00 €** | 38.6 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.90 € | **23.00 €** | 10.5 % | **6.4 %** | 23.49 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.00 €** | 10.7 % | **7.7 %** | 32.50 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.90 € | **25.00 €** | 22.6 % | **18.3 %** | 25.50 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.90 € | **25.00 €** | 22.6 % | **18.3 %** | 25.50 € | stávame sa najlacnejší |
| Domo DO 9218 WK | 21.90 € | **21.00 €** | 10.4 % | **5.8 %** | 21.50 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.00 €** | 10.3 % | **8.6 %** | 58.50 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT315A | 308.90 € | **308.00 €** | 15.0 % | **14.7 %** | 308.19 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.20 €** | 53.4 % | **41.1 %** | 9.22 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.80 € | **9.00 €** | 48.4 % | **36.3 %** | 9.04 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 5.40 € | **4.60 €** | 55.1 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **4.00 €** | 45.3 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 5.50 € | **4.80 €** | 53.1 % | **33.6 %** | 4.82 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.60 € | **2.90 €** | 48.6 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 8.20 € | **7.50 €** | 48.8 % | **36.1 %** | 7.54 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.50 €** | 47.8 % | **35.2 %** | 7.60 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 488.50 € | **487.90 €** | 10.1 % | **9.9 %** | 488.00 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8610 | 52.50 € | **51.90 €** | 14.8 % | **13.5 %** | 51.94 € | stávame sa najlacnejší |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 42.50 € | **41.90 €** | 18.9 % | **17.3 %** | 41.97 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Filters ND8/16/32 Freewell for DJI Neo | 20.50 € | **19.90 €** | 15.5 % | **12.1 %** | 19.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **17.90 €** | 39.0 % | **34.5 %** | 18.00 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **35.90 €** | 10.9 % | **9.0 %** | 36.00 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **35.90 €** | 10.4 % | **8.6 %** | 36.00 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.70 € | **6.10 €** | 45.6 % | **32.6 %** | 6.11 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **7.70 €** | 55.5 % | **44.2 %** | 7.74 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.20 € | **3.60 €** | 54.5 % | **32.4 %** | 3.67 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.70 € | **3.10 €** | 56.7 % | **31.3 %** | 3.17 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.70 € | **2.10 €** | 50.4 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 11.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 12.50 € | **11.90 €** | 27.5 % | **21.4 %** | 11.94 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 13.95 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.70 €** | 42.7 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 10.96 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.10 € | **3.50 €** | 54.3 % | **31.7 %** | 3.57 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 14.50 € | **13.90 €** | 18.4 % | **13.5 %** | 13.99 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 9.00 € | **8.40 €** | 53.7 % | **43.5 %** | 8.49 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **6.90 €** | 54.8 % | **42.4 %** | 7.00 € | stávame sa najlacnejší |
| Solight lokátor na bicykel, Find My kompatibilný | 15.50 € | **14.90 €** | 41.6 % | **36.1 %** | 15.00 € | stávame sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-M ( 36 - 40 ) | 13.00 € | **12.50 €** | 13.2 % | **8.8 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 17.00 € | **16.50 €** | 10.6 % | **7.3 %** | 15.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.50 € | **10.00 €** | 11.3 % | **6.0 %** | 9.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
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
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 32.50 € | **32.00 €** | 19.9 % | **18.0 %** | 32.04 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.5 % | **9.3 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.8 % | **9.6 %** | 24.04 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.20 €** | 46.8 % | **35.9 %** | 6.24 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 7.30 € | **6.80 €** | 54.6 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 152.50 € | **152.00 €** | 13.4 % | **13.1 %** | 152.05 € | stávame sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.70 € | **5.20 €** | 54.0 % | **40.5 %** | 5.25 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 162.00 € | **161.50 €** | 7.3 % | **6.9 %** | 161.57 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 10.3 % | **8.4 %** | 30.08 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.8 % | **9.9 %** | 19.08 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 12.2 % | **9.8 %** | 23.08 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.20 € | **4.70 €** | 48.9 % | **34.5 %** | 4.78 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **24.50 €** | 14.5 % | **12.2 %** | 24.58 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.70 €** | 54.5 % | **36.1 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.80 €** | 53.8 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 7.30 € | **6.80 €** | 53.8 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 339.50 € | **339.00 €** | 14.9 % | **14.7 %** | 339.09 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.30 €** | 48.9 % | **33.4 %** | 4.40 € | stávame sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **11.00 €** | 16.6 % | **11.5 %** | 11.12 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.50 € | **54.00 €** | 10.1 % | **9.1 %** | 54.13 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 45.00 € | **44.50 €** | 10.4 % | **9.2 %** | 44.64 € | stávame sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 23.00 € | **22.50 €** | 15.1 % | **12.6 %** | 22.65 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **11.00 €** | 38.5 % | **32.5 %** | 11.16 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 17.00 € | **16.50 €** | 14.6 % | **11.2 %** | 16.69 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 50.50 € | **50.00 €** | 18.4 % | **17.2 %** | 50.19 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 50.50 € | **50.00 €** | 18.4 % | **17.2 %** | 50.19 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.50 € | **12.00 €** | 16.7 % | **12.0 %** | 12.19 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.3 % | **9.8 %** | 22.20 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **13.50 €** | 38.3 % | **33.4 %** | 13.70 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 14.50 € | **14.00 €** | 41.4 % | **36.5 %** | 14.20 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 12.3 % | **9.9 %** | 23.21 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Black | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.24 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.24 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.24 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.24 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.50 € | **23.00 €** | 19.3 % | **16.7 %** | 23.25 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.5 % | **9.9 %** | 33.25 € | stávame sa najlacnejší |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 12.00 € | **11.50 €** | 10.3 % | **5.7 %** | 11.75 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **30.00 €** | 39.2 % | **36.9 %** | 30.27 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.50 € | **14.00 €** | 44.1 % | **39.1 %** | 14.27 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 12.1 % | **7.2 %** | 11.28 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.7 % | **8.3 %** | 16.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 14.2 % | **10.0 %** | 13.29 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 10.2 % | **8.5 %** | 33.29 € | stávame sa najlacnejší |
| Salente Icequeen-Wh | 19.50 € | **19.00 €** | 8.0 % | **5.2 %** | 19.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 10.2 % | **7.9 %** | 23.29 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 362.50 € | **362.00 €** | 19.5 % | **19.4 %** | 362.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.50 € | **28.00 €** | 33.0 % | **30.7 %** | 28.30 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.00 €** | 10.2 % | **9.7 %** | 110.30 € | stávame sa najlacnejší |
| Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVI... | 10.50 € | **10.00 €** | 14.0 % | **8.5 %** | 10.30 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.00 €** | 40.4 % | **34.3 %** | 11.32 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 14.00 € | **13.50 €** | 14.3 % | **10.2 %** | 13.83 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 32.00 € | **31.50 €** | 10.1 % | **8.3 %** | 31.83 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 30.50 € | **30.00 €** | 12.0 % | **10.2 %** | 30.36 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **18.00 €** | 39.0 % | **35.3 %** | 18.38 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 11.0 % | **7.7 %** | 16.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.7 % | **8.3 %** | 22.38 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 10.1 % | **8.2 %** | 29.38 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **60.00 €** | 10.4 % | **9.4 %** | 60.38 € | stávame sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 22.00 € | **21.50 €** | 13.8 % | **11.2 %** | 21.88 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.38 € | stávame sa najlacnejší |
| Akupresurní podložka s polštářem REBEL ACTIVE RBA-60... | 14.00 € | **13.50 €** | 14.3 % | **10.2 %** | 13.88 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 24.50 € | **24.00 €** | 20.4 % | **17.9 %** | 24.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.50 € | **22.00 €** | 11.7 % | **9.3 %** | 22.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.50 € | **22.00 €** | 11.7 % | **9.3 %** | 22.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.50 € | **22.00 €** | 11.7 % | **9.3 %** | 22.39 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.00 € | **10.50 €** | 11.8 % | **6.7 %** | 10.89 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.00 € | **26.50 €** | 12.5 % | **10.4 %** | 26.89 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 47.50 € | **47.00 €** | 8.6 % | **7.5 %** | 47.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.50 € | **89.00 €** | 14.8 % | **14.1 %** | 89.39 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.50 € | **90.00 €** | 15.1 % | **14.5 %** | 90.39 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 39.00 € | **38.50 €** | 18.3 % | **16.8 %** | 38.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 90.00 € | **89.50 €** | 14.5 % | **13.9 %** | 89.89 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 38.00 € | **37.50 €** | 13.5 % | **12.0 %** | 37.89 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 78.50 € | **78.00 €** | 13.9 % | **13.2 %** | 78.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 149.50 € | **149.00 €** | 14.8 % | **14.4 %** | 149.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.50 € | **55.00 €** | 14.4 % | **13.4 %** | 55.39 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 25.50 € | **25.00 €** | 12.0 % | **9.8 %** | 25.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 33.50 € | **33.00 €** | 13.0 % | **11.3 %** | 33.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.00 € | **23.50 €** | 13.0 % | **10.7 %** | 23.89 € | stávame sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.89 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.50 € | **23.00 €** | 12.0 % | **9.6 %** | 23.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 111.50 € | **111.00 €** | 6.6 % | **6.1 %** | 111.39 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 283.00 € | **282.50 €** | 8.2 % | **8.0 %** | 282.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.00 € | **17.50 €** | 37.4 % | **33.6 %** | 17.89 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 65.50 € | **65.00 €** | 8.2 % | **7.4 %** | 65.39 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.50 € | **45.00 €** | 14.3 % | **13.0 %** | 45.39 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 229.50 € | **229.00 €** | 6.3 % | **6.1 %** | 229.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 245.50 € | **245.00 €** | 10.3 % | **10.1 %** | 245.39 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 136.00 € | **135.50 €** | 8.3 % | **7.9 %** | 135.89 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 89.00 € | **88.50 €** | 11.8 % | **11.1 %** | 88.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 85.00 € | **84.50 €** | 14.5 % | **13.8 %** | 84.89 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 91.00 € | **90.50 €** | 14.3 % | **13.7 %** | 90.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 94.50 € | **94.00 €** | 11.9 % | **11.3 %** | 94.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 79.00 € | **78.50 €** | 6.4 % | **5.7 %** | 78.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 125.00 € | **124.50 €** | 13.4 % | **12.9 %** | 124.89 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 109.50 € | **109.00 €** | 7.6 % | **7.1 %** | 109.39 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 292.50 € | **292.00 €** | 14.8 % | **14.6 %** | 292.39 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 220.00 € | **219.50 €** | 14.8 % | **14.6 %** | 219.89 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 198.00 € | **197.50 €** | 11.0 % | **10.8 %** | 197.89 € | stávame sa najlacnejší |
| Přípravek do chemických toalet HAPPY GREEN Blue 2l | 12.50 € | **12.00 €** | 10.3 % | **5.9 %** | 12.39 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.00 € | **39.50 €** | 10.1 % | **8.7 %** | 39.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **12.00 €** | 46.0 % | **40.2 %** | 12.41 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 373.50 € | **373.00 €** | 7.1 % | **7.0 %** | 373.41 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **113.00 €** | 10.4 % | **9.9 %** | 113.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.42 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **10.00 €** | 13.4 % | **8.0 %** | 10.42 € | stávame sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 29.50 € | **29.00 €** | 26.3 % | **24.2 %** | 29.42 € | stávame sa najlacnejší |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 17.50 € | **17.00 €** | 15.0 % | **11.7 %** | 17.45 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 10.2 % | **8.7 %** | 36.46 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Fashion Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.50 € | **16.00 €** | 48.2 % | **43.7 %** | 16.47 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| SONY WFC710N Black | 71.50 € | **71.00 €** | 10.4 % | **9.6 %** | 71.48 € | stávame sa najlacnejší |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.50 € | **21.00 €** | 38.2 % | **35.0 %** | 21.49 € | stávame sa najlacnejší |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | stávame sa najlacnejší |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.50 € | **26.00 €** | 32.5 % | **30.0 %** | 26.49 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **13.00 €** | 33.2 % | **28.3 %** | 13.49 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.50 € | **16.00 €** | 18.0 % | **14.4 %** | 16.49 € | stávame sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.50 € | **25.00 €** | 11.8 % | **9.6 %** | 25.49 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 15.50 € | **15.00 €** | 33.9 % | **29.6 %** | 15.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 21.8 % | **19.6 %** | 28.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 232.90 € | **232.50 €** | 18.3 % | **18.1 %** | 232.53 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 232.90 € | **232.50 €** | 18.3 % | **18.1 %** | 232.53 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 232.90 € | **232.50 €** | 18.3 % | **18.1 %** | 232.53 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 232.90 € | **232.50 €** | 18.3 % | **18.1 %** | 232.53 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 232.90 € | **232.50 €** | 18.3 % | **18.1 %** | 232.53 € | stávame sa najlacnejší |
| Motorcycle Intercom EJEAS MS8-SE | 86.90 € | **86.50 €** | 15.1 % | **14.6 %** | 86.54 € | stávame sa najlacnejší |
| Blender G21 Experience White | 253.90 € | **253.50 €** | 18.3 % | **18.1 %** | 253.54 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 70.90 € | **70.50 €** | 15.3 % | **14.6 %** | 70.60 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 70.90 € | **70.50 €** | 15.3 % | **14.6 %** | 70.60 € | stávame sa najlacnejší |
| Domo DO8719W | 69.90 € | **69.50 €** | 10.2 % | **9.5 %** | 69.67 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **79.50 €** | 15.2 % | **14.6 %** | 79.79 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 12.0 % | **11.6 %** | 113.79 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 112.90 € | **112.50 €** | 10.1 % | **9.7 %** | 112.79 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 80.90 € | **80.50 €** | 8.9 % | **8.4 %** | 80.79 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 162.90 € | **162.50 €** | 19.8 % | **19.5 %** | 162.80 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.50 €** | 9.7 % | **9.2 %** | 84.80 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 108.90 € | **108.50 €** | 10.1 % | **9.7 %** | 108.80 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.90 € | **88.50 €** | 6.2 % | **5.7 %** | 88.81 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 104.90 € | **104.50 €** | 7.6 % | **7.2 %** | 104.84 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161E | 108.90 € | **108.50 €** | 6.5 % | **6.1 %** | 108.89 € | stávame sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BL | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 9.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
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
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.90 € | **10.50 €** | 10.8 % | **6.7 %** | 10.76 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 13.3 % | **9.5 %** | 11.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 680 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 47.0 % | **42.1 %** | 11.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.90 € | **13.50 €** | 36.2 % | **32.2 %** | 13.84 € | stávame sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 10.2 % | **7.3 %** | 14.88 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **12.50 €** | 31.1 % | **27.0 %** | 12.89 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 2.20 € | **1.80 €** | 56.9 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.10 €** | 53.0 % | **35.5 %** | 3.14 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.90 €** | 57.1 % | **29.8 %** | 1.96 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.90 € | **3.50 €** | 48.9 % | **33.6 %** | 3.58 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.59 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.80 € | **2.40 €** | 50.8 % | **29.2 %** | 2.49 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.80 € | **3.40 €** | 48.5 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.10 € | **4.70 €** | 48.1 % | **36.5 %** | 4.71 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 5.30 € | **4.90 €** | 55.6 % | **43.8 %** | 4.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.20 €** | 48.4 % | **35.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **27.50 €** | 11.6 % | **10.0 %** | 27.54 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.50 €** | 10.5 % | **9.3 %** | 36.58 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.63 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 11.1 % | **9.9 %** | 35.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.63 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.50 €** | 11.4 % | **9.9 %** | 29.67 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.69 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.69 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.90 € | **30.50 €** | 33.5 % | **31.8 %** | 30.70 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **20.50 €** | 30.3 % | **27.8 %** | 20.76 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.90 € | **22.50 €** | 14.9 % | **12.8 %** | 22.76 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.90 € | **31.50 €** | 38.7 % | **37.0 %** | 31.77 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.79 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.50 €** | 39.1 % | **35.8 %** | 16.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.9 % | **9.8 %** | 40.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.80 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.90 € | **16.50 €** | 18.2 % | **15.4 %** | 16.80 € | stávame sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.90 € | **36.50 €** | 9.1 % | **7.9 %** | 36.80 € | stávame sa najlacnejší |
| ETA 321990020 | 55.90 € | **55.50 €** | 10.2 % | **9.4 %** | 55.83 € | stávame sa najlacnejší |
| Slúchadlá FIXED Pods 2, bezdrôtové, TWS, biela | 24.90 € | **24.50 €** | 7.9 % | **6.2 %** | 24.86 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.90 € | **23.50 €** | 32.8 % | **30.6 %** | 23.87 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.90 € | **18.50 €** | 12.5 % | **10.1 %** | 18.88 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **16.50 €** | 38.2 % | **35.0 %** | 16.89 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 58.90 € | **58.50 €** | 13.0 % | **12.2 %** | 58.89 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 270.90 € | **270.50 €** | 8.0 % | **7.9 %** | 270.80 € | stávame sa najlacnejší |
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
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.70 € | **7.50 €** | 31.5 % | **28.1 %** | 7.59 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.70 € | **6.50 €** | 31.9 % | **28.0 %** | 6.59 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.40 € | **7.20 €** | 26.4 % | **23.0 %** | 7.29 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 7.20 € | **7.00 €** | 23.2 % | **19.8 %** | 7.09 € | stávame sa najlacnejší |
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
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.60 € | **5.40 €** | 24.4 % | **20.0 %** | 5.49 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 8.20 € | **8.00 €** | 34.4 % | **31.1 %** | 8.09 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.60 € | **9.40 €** | 23.7 % | **21.1 %** | 9.49 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 503.00 € | **502.90 €** | 6.4 % | **6.4 %** | 502.99 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.90 €** | 38.4 % | **37.7 %** | 20.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 22.00 € | **21.90 €** | 38.4 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 10.2 % | **10.0 %** | 47.96 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 22.00 € | **21.90 €** | 25.2 % | **24.6 %** | 21.97 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 40.00 € | **39.90 €** | 38.2 % | **37.9 %** | 39.98 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.20 €** | 25.6 % | **24.2 %** | 9.29 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Tefal KO5S08E0 | 35.00 € | **34.90 €** | 10.0 % | **9.7 %** | 34.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.14 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.90 € | **5.80 €** | 11.0 % | **9.2 %** | 5.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **5.30 €** | 37.2 % | **34.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.40 € | **4.30 €** | 55.5 % | **52.0 %** | 4.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.40 € | **2.30 €** | 9.6 % | **5.1 %** | 2.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 4.00 € | **3.90 €** | 10.2 % | **7.5 %** | 3.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
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
| Návlek VILEDA STEAM XXL POWER 161717 | 11.00 € | **10.90 €** | 9.1 % | **8.1 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 5.80 € | **5.70 €** | 54.6 % | **51.9 %** | 5.72 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.60 € | **8.50 €** | 36.6 % | **35.0 %** | 8.54 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **13.90 €** | 36.5 % | **35.5 %** | 13.95 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.30 € | **3.20 €** | 39.7 % | **35.5 %** | 3.25 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 10.00 € | **9.90 €** | 26.8 % | **25.6 %** | 9.95 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.8 % | **9.9 %** | 12.96 € | stávame sa najlacnejší |
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
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.90 € | **9.80 €** | 30.5 % | **29.1 %** | 9.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.40 € | **8.30 €** | 54.5 % | **52.7 %** | 8.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.20 €** | 11.3 % | **8.7 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **4.50 €** | 33.6 % | **30.7 %** | 4.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.20 €** | 11.7 % | **9.1 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.30 €** | 31.5 % | **30.1 %** | 9.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.80 € | **4.70 €** | 23.1 % | **20.5 %** | 4.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.90 €** | 25.4 % | **23.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.70 € | **8.60 €** | 6.8 % | **5.6 %** | 8.69 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 110.00 € | **109.90 €** | 20.0 % | **19.9 %** | 109.96 € | stávame sa najlacnejší |

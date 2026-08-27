# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-27

Vstup: `premiumstoresk_20260827_2022.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5569**
- Návrh **zvýšiť** cenu: **195** produktov
- Návrh **znížiť** cenu: **1175** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4199** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **99**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (195)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **124.50 €** | 15.0 % | **22.5 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1-Ss | 130.50 € | **135.50 €** | 10.0 % | **14.2 %** | 130.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX LIR 60430 | 231.90 € | **236.00 €** | 5.1 % | **7.0 %** | 231.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191E | 55.50 € | **59.50 €** | 7.3 % | **15.0 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 51.00 € | **54.90 €** | 28.4 % | **38.3 %** | 51.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Aura 5 ANC | 42.00 € | **45.00 €** | 10.2 % | **18.1 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA AeroStar T300 | 55.50 € | **57.90 €** | 5.5 % | **10.1 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 46.90 € | **49.00 €** | 10.1 % | **15.0 %** | 46.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 39.50 € | **41.50 €** | 15.0 % | **20.8 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 10.00 € | **12.00 €** | 22.8 % | **47.4 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 36.00 € | **38.00 €** | 6.0 % | **11.9 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 14.90 € | **16.90 €** | 9.7 % | **24.5 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 36.90 € | **38.50 €** | 10.5 % | **15.3 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 8.90 € | **10.50 €** | 18.8 % | **40.2 %** | 8.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 24.00 € | **25.50 €** | 24.0 % | **31.8 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.7 % | **16.9 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.20 € | **5.40 €** | 6.0 % | **36.3 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 36.90 € | **38.00 €** | 10.9 % | **14.2 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.90 € | **15.00 €** | 12.4 % | **21.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.90 € | **15.00 €** | 12.4 % | **21.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Presto 2094 90000, bílý | 92.90 € | **94.00 €** | 5.4 % | **6.6 %** | 92.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 27.90 € | **28.90 €** | 34.3 % | **39.1 %** | 27.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 13.50 € | **14.50 €** | 33.8 % | **43.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tester napätia a spojitosti Uni-T UT18D | 39.50 € | **40.50 €** | 5.9 % | **8.6 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 469.50 € | **470.50 €** | 8.5 % | **8.7 %** | 469.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 903.50 € | **904.50 €** | 14.8 % | **15.0 %** | 903.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.50 € | **17.50 €** | 35.4 % | **43.6 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.50 € | **24.50 €** | 36.9 % | **42.7 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO354VD | 129.50 € | **130.50 €** | 7.7 % | **8.5 %** | 129.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kaon MZ-52, satelitní přijímač Skylink | 59.50 € | **60.50 €** | 5.6 % | **7.3 %** | 59.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultrazvukový merací prístroj na hrúbku Uni-T UT345A | 86.00 € | **86.90 €** | 6.3 % | **7.4 %** | 86.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191T | 70.00 € | **70.90 €** | 11.3 % | **12.7 %** | 70.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CrockPot CSC062X | 155.00 € | **155.90 €** | 5.4 % | **6.0 %** | 155.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.00 € | **119.90 €** | 33.9 % | **34.9 %** | 119.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.00 € | **78.90 €** | 14.0 % | **15.3 %** | 78.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.00 € | **14.90 €** | 5.2 % | **12.0 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.00 € | **11.90 €** | 34.7 % | **45.7 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.00 € | **13.90 €** | 30.8 % | **39.9 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.00 € | **10.90 €** | 34.6 % | **46.7 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.00 € | **12.90 €** | 30.6 % | **40.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.00 € | **14.90 €** | 9.8 % | **16.8 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 22.00 € | **22.90 €** | 18.8 % | **23.7 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 27.00 € | **27.90 €** | 21.3 % | **25.4 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.00 € | **17.90 €** | 39.2 % | **46.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.00 € | **16.90 €** | 28.3 % | **35.5 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.00 € | **45.90 €** | 38.8 % | **41.6 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.00 € | **41.90 €** | 32.0 % | **34.9 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.00 € | **19.90 €** | 28.3 % | **34.4 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.00 € | **20.90 €** | 33.1 % | **39.0 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 58.00 € | **58.90 €** | 33.5 % | **35.6 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.00 € | **26.90 €** | 9.3 % | **13.1 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.00 € | **17.90 €** | 26.9 % | **33.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.00 € | **55.90 €** | 34.2 % | **36.4 %** | 55.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.00 € | **29.90 €** | 16.7 % | **20.3 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.90 €** | 22.4 % | **25.7 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.00 € | **19.90 €** | 33.3 % | **39.6 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.40 € | **4.20 €** | 10.1 % | **36.0 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 35.90 € | **36.50 €** | 37.5 % | **39.8 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 19.90 € | **20.50 €** | 34.4 % | **38.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 21.90 € | **22.50 €** | 8.2 % | **11.2 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 45.90 € | **46.50 €** | 12.0 % | **13.5 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 37.90 € | **38.50 €** | 37.4 % | **39.5 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 63.90 € | **64.50 €** | 20.0 % | **21.1 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 49dB | 24.90 € | **25.50 €** | 27.5 % | **30.6 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 12.90 € | **13.50 €** | 8.9 % | **14.0 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 14.90 € | **15.50 €** | 40.2 % | **45.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.90 € | **15.50 €** | 34.4 % | **39.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.90 € | **11.50 €** | 31.1 % | **38.3 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 9.90 € | **10.50 €** | 10.4 % | **17.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 12.90 € | **13.50 €** | 30.3 % | **36.3 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo vodní filtry 3+1 | 11.90 € | **12.50 €** | 11.6 % | **17.2 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP Black | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP White | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 11.90 € | **12.50 €** | 20.0 % | **26.1 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.00 € | **33.50 €** | 14.2 % | **15.9 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.00 € | **12.50 €** | 37.0 % | **42.7 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.50 € | **13.00 €** | 33.2 % | **38.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 18W, 1530lm,... | 12.00 € | **12.50 €** | 34.8 % | **40.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **14.50 €** | 29.0 % | **33.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 23.00 € | **23.50 €** | 33.2 % | **36.1 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.50 € | **20.00 €** | 23.3 % | **26.4 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **47.50 €** | 35.9 % | **37.3 %** | 47.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.00 € | **24.50 €** | 33.3 % | **36.1 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 26.00 € | **26.50 €** | 31.7 % | **34.2 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stropné svetlo Yeelight C2201C400 | 64.00 € | **64.50 €** | 14.8 % | **15.7 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **14.00 €** | 28.1 % | **32.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 7.20 € | **7.70 €** | 43.5 % | **53.4 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight profesionálna laserová vodováha - zelený laser | 37.50 € | **38.00 €** | 30.3 % | **32.0 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.50 € | **23.00 €** | 36.2 % | **39.2 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 28.50 € | **29.00 €** | 25.4 % | **27.6 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.50 € | **22.00 €** | 22.5 % | **25.3 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 28.50 € | **29.00 €** | 7.1 % | **9.0 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 31.00 € | **31.50 €** | 30.2 % | **32.3 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.50 € | **27.00 €** | 33.2 % | **35.7 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 19.50 € | **20.00 €** | 21.6 % | **24.7 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.00 € | **10.50 €** | 22.8 % | **29.0 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.00 € | **10.50 €** | 9.4 % | **14.9 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **44.50 €** | 11.0 % | **12.3 %** | 44.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.50 € | **23.00 €** | 31.4 % | **34.3 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.50 € | **64.00 €** | 10.2 % | **11.0 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky C10 (biele) | 13.00 € | **13.50 €** | 12.1 % | **16.4 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.00 € | **16.50 €** | 15.0 % | **18.6 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.00 € | **39.50 €** | 14.6 % | **16.1 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 16.00 € | **16.50 €** | 32.2 % | **36.3 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 20.00 € | **20.50 €** | 40.3 % | **43.8 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Nefrit | 117.50 € | **117.90 €** | 9.6 % | **10.0 %** | 117.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.50 € | **14.90 €** | 6.9 % | **9.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.50 € | **14.90 €** | 11.1 % | **14.2 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.50 € | **22.90 €** | 11.7 % | **13.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZigBee LCD senzor teploty Sonoff SNZB-02LD (so sondou) | 17.50 € | **17.90 €** | 14.6 % | **17.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.50 € | **33.90 €** | 6.8 % | **8.1 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.70 € | **3.00 €** | 31.4 % | **46.0 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.60 €** | 26.5 % | **32.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **6.60 €** | 26.5 % | **32.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.00 € | **3.30 €** | 23.8 % | **36.2 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná stolná lampička s klipom bi... | 9.20 € | **9.40 €** | 8.9 % | **11.2 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.70 € | **8.90 €** | 14.5 % | **17.1 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.20 € | **8.40 €** | 40.4 % | **43.8 %** | 8.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.70 € | **5.90 €** | 34.3 % | **39.0 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.50 € | **4.70 €** | 35.0 % | **41.0 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.10 € | **4.30 €** | 29.2 % | **35.5 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.40 € | **2.60 €** | 25.9 % | **36.4 %** | 2.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.50 € | **2.70 €** | 27.0 % | **37.2 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 24.3 % | **28.3 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 5.4 % | **8.7 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, čierny | 2.40 € | **2.60 €** | 25.1 % | **35.5 %** | 2.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.00 € | **3.20 €** | 29.0 % | **37.7 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.10 € | **4.30 €** | 32.3 % | **38.7 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.80 € | **8.00 €** | 33.5 % | **36.9 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.40 € | **3.60 €** | 9.3 % | **15.7 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.30 € | **7.50 €** | 35.2 % | **38.9 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.10 € | **5.30 €** | 16.5 % | **21.0 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.80 € | **5.00 €** | 31.0 % | **36.4 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.10 € | **5.30 €** | 32.0 % | **37.2 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.50 € | **6.70 €** | 33.4 % | **37.6 %** | 6.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.30 € | **3.50 €** | 26.6 % | **34.2 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.50 € | **3.70 €** | 37.5 % | **45.3 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.70 € | **5.90 €** | 40.4 % | **45.4 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.50 € | **7.70 €** | 40.5 % | **44.2 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.40 € | **3.60 €** | 17.6 % | **24.5 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.30 € | **6.50 €** | 37.7 % | **42.1 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.00 € | **1.20 €** | 16.1 % | **39.4 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.10 € | **1.30 €** | 19.2 % | **40.9 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.10 € | **1.30 €** | 19.2 % | **40.9 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 1.70 € | **1.90 €** | 19.1 % | **33.2 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.70 € | **1.90 €** | 10.6 % | **23.6 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.80 € | **2.00 €** | 10.9 % | **23.2 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.60 € | **2.80 €** | 25.8 % | **35.5 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.70 € | **2.90 €** | 14.9 % | **23.4 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.70 € | **3.90 €** | 19.8 % | **26.3 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 7.90 € | **8.10 €** | 8.3 % | **11.1 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.30 € | **8.50 €** | 30.5 % | **33.7 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.80 € | **10.00 €** | 36.0 % | **38.7 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.80 € | **10.00 €** | 22.6 % | **25.1 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.80 € | **10.00 €** | 42.8 % | **45.7 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.40 € | **7.60 €** | 21.5 % | **24.8 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 7.90 € | **8.10 €** | 33.5 % | **36.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.90 € | **7.10 €** | 10.2 % | **13.4 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.90 € | **318.00 €** | 12.1 % | **12.1 %** | 317.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 659.90 € | **660.00 €** | 10.7 % | **10.7 %** | 659.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **561.00 €** | 7.3 % | **7.4 %** | 560.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GV520E10 | 298.90 € | **299.00 €** | 5.1 % | **5.2 %** | 298.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 16.90 € | **17.00 €** | 36.0 % | **36.8 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR interiérový senzor, do krabičky od vypín... | 8.70 € | **8.80 €** | 42.6 % | **44.2 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.90 € | **17.00 €** | 32.9 % | **33.7 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 16.90 € | **17.00 €** | 10.4 % | **11.0 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 33.90 € | **34.00 €** | 34.3 % | **34.7 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 60.90 € | **61.00 €** | 18.7 % | **18.9 %** | 60.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.90 € | **25.00 €** | 22.4 % | **22.9 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 25.90 € | **26.00 €** | 33.7 % | **34.2 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.80 € | **4.90 €** | 40.9 % | **43.8 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.60 € | **6.70 €** | 28.7 % | **30.6 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.50 € | **1.60 €** | 28.4 % | **36.9 %** | 1.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.70 € | **1.80 €** | 22.3 % | **29.5 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.90 € | **4.00 €** | 8.6 % | **11.4 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 11.90 € | **12.00 €** | 11.3 % | **12.3 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 11.90 € | **12.00 €** | 20.9 % | **22.0 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 15.90 € | **16.00 €** | 19.4 % | **20.1 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.20 € | **7.30 €** | 34.3 % | **36.1 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.50 € | **9.60 €** | 18.1 % | **19.3 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 13.90 € | **14.00 €** | 33.0 % | **33.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 9.90 € | **10.00 €** | 35.5 % | **36.9 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.40 € | **7.50 €** | 34.6 % | **36.4 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 33.2 % | **36.0 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.50 € | **9.60 €** | 29.8 % | **31.2 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 228.90 € | **229.00 €** | 8.0 % | **8.0 %** | 228.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1175)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 6803.00 € | **6503.50 €** | 15.0 % | **9.9 %** | 6503.58 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3588.00 € | **3349.50 €** | 15.0 % | **7.4 %** | 3349.70 € | stávame sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.50 €** | 64.7 % | **6.8 %** | 362.65 € | stávame sa najlacnejší |
| Samsung OLED QE77S99H | 3600.50 € | **3436.90 €** | 10.0 % | **5.0 %** | 3399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot MOVA V70 Ultra Complete v bielej farbe | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 479.00 € | **343.50 €** | 48.7 % | **6.7 %** | 343.70 € | stávame sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.90 €** | 28.6 % | **6.0 %** | 634.00 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **526.50 €** | 28.6 % | **6.0 %** | 526.90 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **354.00 €** | 39.7 % | **6.3 %** | 354.05 € | stávame sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.50 €** | 16.8 % | **9.3 %** | 1543.60 € | stávame sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **384.90 €** | 35.8 % | **6.9 %** | 385.00 € | stávame sa najlacnejší |
| BEKO RFSA240M43WN | 469.00 € | **369.50 €** | 34.1 % | **5.6 %** | 369.70 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1441.90 € | **1346.50 €** | 15.0 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **505.00 €** | 26.9 % | **7.0 %** | 505.20 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **511.50 €** | 24.2 % | **6.1 %** | 511.63 € | stávame sa najlacnejší |
| Gorenje GECS5C70XPA | 559.00 € | **471.50 €** | 26.8 % | **7.0 %** | 471.80 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 369.00 € | **286.00 €** | 39.2 % | **7.9 %** | 286.40 € | stávame sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **986.90 €** | 15.0 % | **6.4 %** | 986.93 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 983.90 € | **909.90 €** | 15.0 % | **6.4 %** | 910.00 € | stávame sa najlacnejší |
| ETA 410090000 | 399.00 € | **330.00 €** | 29.2 % | **6.9 %** | 330.30 € | stávame sa najlacnejší |
| Samsung OLED QE65S99H | 2914.50 € | **2847.90 €** | 10.0 % | **7.5 %** | 2848.00 € | stávame sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1616.00 € | **1549.90 €** | 15.0 % | **10.3 %** | 1550.00 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 954.00 € | **889.90 €** | 15.0 % | **7.3 %** | 890.00 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 399.00 € | **335.00 €** | 26.6 % | **6.3 %** | 335.44 € | stávame sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.90 €** | 15.0 % | **5.4 %** | 670.00 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **221.00 €** | 37.7 % | **9.1 %** | 221.46 € | stávame sa najlacnejší |
| Blesk GODOX AD300ProII pre upevnenie Godox | 627.00 € | **572.90 €** | 15.0 % | **5.1 %** | 505.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 901.00 € | **848.90 €** | 15.0 % | **8.3 %** | 849.00 € | stávame sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **347.00 €** | 22.9 % | **6.9 %** | 347.40 € | stávame sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 512.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 683.00 € | **632.50 €** | 15.0 % | **6.5 %** | 632.80 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 540.50 € | **493.50 €** | 15.0 % | **5.0 %** | 486.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 612.50 € | **566.00 €** | 15.0 % | **6.3 %** | 566.36 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 576.00 € | **529.90 €** | 15.0 % | **5.8 %** | 529.95 € | stávame sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 944.00 € | **898.00 €** | 15.0 % | **9.4 %** | 898.40 € | stávame sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **411.50 €** | 18.3 % | **7.0 %** | 411.90 € | stávame sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 96.0 % | **11.9 %** | 57.23 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 528.50 € | **486.00 €** | 15.0 % | **5.7 %** | 486.39 € | stávame sa najlacnejší |
| Beko BDIN38646D | 535.00 € | **494.00 €** | 15.9 % | **7.0 %** | 494.30 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 597.50 € | **556.50 €** | 15.0 % | **7.1 %** | 556.81 € | stávame sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 525.50 € | **486.90 €** | 15.0 % | **6.6 %** | 486.99 € | stávame sa najlacnejší |
| Ultimea Skywave X70 Soundbar | 612.90 € | **576.00 €** | 15.0 % | **8.1 %** | 576.02 € | stávame sa najlacnejší |
| ELECTROLUX 300 EFC226R | 283.90 € | **248.00 €** | 23.5 % | **7.9 %** | 248.40 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 28.0 % | **9.2 %** | 204.08 € | stávame sa najlacnejší |
| Projektor JMGO N1S SE | 702.50 € | **667.50 €** | 15.0 % | **9.3 %** | 667.69 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 24.9 % | **9.2 %** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 24.7 % | **9.0 %** | 244.20 € | stávame sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 782.50 € | **748.00 €** | 15.0 % | **10.0 %** | 748.21 € | stávame sa najlacnejší |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 532.90 € | **498.50 €** | 15.0 % | **7.6 %** | 498.90 € | stávame sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **389.50 €** | 15.1 % | **6.0 %** | 389.72 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 439.00 € | **405.90 €** | 14.8 % | **6.1 %** | 405.96 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1317.50 €** | 15.0 % | **12.2 %** | 1317.74 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 279.00 € | **248.00 €** | 22.8 % | **9.1 %** | 248.37 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 401.00 € | **370.50 €** | 15.0 % | **6.2 %** | 370.83 € | stávame sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 418.90 € | **388.90 €** | 15.0 % | **6.8 %** | 389.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 409.50 € | **379.90 €** | 15.0 % | **6.7 %** | 379.95 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 434.50 € | **404.90 €** | 15.0 % | **7.1 %** | 405.00 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **401.90 €** | 15.0 % | **7.3 %** | 402.00 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 370.00 € | **341.00 €** | 15.0 % | **6.0 %** | 341.39 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-WH bílá barva | 370.00 € | **341.00 €** | 15.0 % | **6.0 %** | 341.39 € | stávame sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 793.90 € | **765.00 €** | 10.0 % | **6.0 %** | 765.20 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 377.50 € | **348.90 €** | 15.0 % | **6.3 %** | 349.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **396.00 €** | 15.0 % | **7.3 %** | 396.34 € | stávame sa najlacnejší |
| Čistiaci robot ULTENIC MX50 | 445.90 € | **419.90 €** | 15.0 % | **8.3 %** | 420.00 € | stávame sa najlacnejší |
| Cycplus T2 smart bike trainer | 615.90 € | **589.90 €** | 15.0 % | **10.2 %** | 590.00 € | stávame sa najlacnejší |
| Nano projektor JMGO N1S | 496.50 € | **470.50 €** | 15.0 % | **9.0 %** | 470.67 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Pro | 506.00 € | **480.00 €** | 15.0 % | **9.0 %** | 480.19 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **403.90 €** | 14.9 % | **8.1 %** | 404.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z20 | 359.00 € | **333.50 €** | 15.0 % | **6.8 %** | 333.84 € | stávame sa najlacnejší |
| Termovízna kamera THERMAL MASTER T2Max | 292.90 € | **267.50 €** | 15.0 % | **5.0 %** | 255.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.90 €** | 15.0 % | **9.8 %** | 539.00 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **453.00 €** | 15.0 % | **9.0 %** | 453.19 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 354.50 € | **329.50 €** | 15.1 % | **6.9 %** | 329.74 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **310.00 €** | 15.0 % | **6.7 %** | 310.34 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 199.00 € | **175.50 €** | 22.9 % | **8.4 %** | 175.80 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 927.50 € | **904.50 €** | 10.0 % | **7.3 %** | 904.67 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 395.50 € | **372.90 €** | 15.0 % | **8.4 %** | 373.00 € | stávame sa najlacnejší |
| AURZEN Boom 3 Projektor | 259.50 € | **236.90 €** | 15.1 % | **5.1 %** | 226.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 746.50 € | **724.00 €** | 15.0 % | **11.6 %** | 724.24 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 911.00 € | **888.50 €** | 10.0 % | **7.3 %** | 888.88 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **349.50 €** | 15.1 % | **8.1 %** | 349.59 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 11.0 % | **9.3 %** | 1377.03 € | stávame sa najlacnejší |
| Projektor JMGO PicoPlay+ | 413.00 € | **391.00 €** | 14.9 % | **8.8 %** | 391.19 € | stávame sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Ultima Poseidon E40 | 402.90 € | **381.00 €** | 15.0 % | **8.8 %** | 381.21 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R02B10 (čierny) | 412.50 € | **390.90 €** | 15.0 % | **9.0 %** | 391.00 € | stávame sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **473.00 €** | 15.0 % | **10.0 %** | 473.14 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **267.50 €** | 15.0 % | **6.5 %** | 267.52 € | stávame sa najlacnejší |
| Rooma Espresso A7 bílá | 558.50 € | **537.50 €** | 10.0 % | **5.9 %** | 537.70 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 566.90 € | **546.00 €** | 10.1 % | **6.0 %** | 546.10 € | stávame sa najlacnejší |
| WHIRLPOOL AKR 749/1 IX | 139.00 € | **118.50 €** | 23.5 % | **5.3 %** | 80.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 315.50 € | **295.00 €** | 15.0 % | **7.5 %** | 295.42 € | stávame sa najlacnejší |
| ETA Ambo III 5075 90000 šedý/bílá | 119.99 € | **99.50 €** | 26.8 % | **5.2 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **237.50 €** | 15.1 % | **6.2 %** | 237.63 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (čierny) | 295.50 € | **275.50 €** | 15.1 % | **7.3 %** | 275.70 € | stávame sa najlacnejší |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 270.50 € | **250.50 €** | 15.0 % | **6.5 %** | 250.77 € | stávame sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 279.50 € | **259.90 €** | 15.1 % | **7.0 %** | 259.95 € | stávame sa najlacnejší |
| Detektor kovov Garrett ACE 150 | 224.00 € | **204.50 €** | 15.0 % | **5.0 %** | 192.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor BlitzWolf BW-V11 | 352.50 € | **333.00 €** | 15.0 % | **8.6 %** | 333.18 € | stávame sa najlacnejší |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **329.50 €** | 15.0 % | **8.6 %** | 329.71 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 657.90 € | **638.90 €** | 10.1 % | **6.9 %** | 639.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **320.00 €** | 15.0 % | **8.5 %** | 320.19 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V45i | 330.50 € | **312.00 €** | 15.0 % | **8.6 %** | 312.18 € | stávame sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Catlink BayMax Lite intelligent self-cleaning cat li... | 357.50 € | **339.90 €** | 15.1 % | **9.4 %** | 340.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 307.50 € | **290.00 €** | 15.0 % | **8.5 %** | 290.18 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **290.00 €** | 15.0 % | **8.5 %** | 290.18 € | stávame sa najlacnejší |
| Rooma Espresso A6 bílá | 481.50 € | **464.00 €** | 10.0 % | **6.0 %** | 464.19 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2S PRO 2 v 1 (čie... | 434.00 € | **416.90 €** | 15.0 % | **10.5 %** | 417.00 € | stávame sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 691.50 € | **674.50 €** | 10.1 % | **7.4 %** | 674.58 € | stávame sa najlacnejší |
| Projektor Ultima Nova C40 | 301.00 € | **284.00 €** | 15.0 % | **8.5 %** | 284.10 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (červený) | 292.50 € | **275.50 €** | 15.0 % | **8.3 %** | 275.70 € | stávame sa najlacnejší |
| Gorenje DE69CS | 514.50 € | **497.50 €** | 10.0 % | **6.4 %** | 497.79 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 196.00 € | **179.50 €** | 15.0 % | **5.3 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás MERACH MR-T25B2 | 372.90 € | **356.50 €** | 15.1 % | **10.0 %** | 356.52 € | stávame sa najlacnejší |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 516.90 € | **501.00 €** | 15.0 % | **11.5 %** | 501.36 € | stávame sa najlacnejší |
| CANDY CCGMEE9025PX/E | 814.50 € | **798.90 €** | 10.0 % | **7.9 %** | 799.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 200.50 € | **184.90 €** | 15.1 % | **6.1 %** | 185.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 244.50 € | **229.00 €** | 15.1 % | **7.8 %** | 229.50 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 539.50 € | **524.00 €** | 10.1 % | **6.9 %** | 524.50 € | stávame sa najlacnejší |
| ETA 0028 98050 | 79.99 € | **64.50 €** | 30.6 % | **5.3 %** | 64.90 € | stávame sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **229.50 €** | 15.1 % | **8.0 %** | 229.69 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (červený) | 245.50 € | **230.50 €** | 15.1 % | **8.0 %** | 230.69 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 411.90 € | **397.00 €** | 10.1 % | **6.1 %** | 397.09 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 534.90 € | **520.00 €** | 10.0 % | **6.9 %** | 520.40 € | stávame sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **154.50 €** | 14.9 % | **5.1 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5XRCNA366HXB | 522.50 € | **508.00 €** | 10.0 % | **7.0 %** | 508.40 € | stávame sa najlacnejší |
| Electrolux LIB60420CK | 218.90 € | **204.50 €** | 15.8 % | **8.2 %** | 204.70 € | stávame sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 364.90 € | **350.50 €** | 10.0 % | **5.7 %** | 350.71 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 309.50 € | **295.50 €** | 10.0 % | **5.1 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo LED800 bílý | 309.50 € | **295.50 €** | 10.0 % | **5.1 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **216.50 €** | 15.0 % | **8.0 %** | 216.63 € | stávame sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 463.50 € | **449.50 €** | 10.0 % | **6.7 %** | 449.90 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 332.50 € | **318.90 €** | 10.1 % | **5.6 %** | 319.00 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 375.50 € | **362.00 €** | 10.0 % | **6.1 %** | 362.05 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 241.50 € | **228.00 €** | 15.1 % | **8.6 %** | 228.39 € | stávame sa najlacnejší |
| Electrolux LKR64022AW | 476.50 € | **463.00 €** | 10.0 % | **6.9 %** | 463.40 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 481.90 € | **468.50 €** | 10.0 % | **7.0 %** | 468.60 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 22.6 % | **9.2 %** | 106.20 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 343.50 € | **330.90 €** | 10.0 % | **6.0 %** | 330.98 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 311.50 € | **298.90 €** | 10.1 % | **5.7 %** | 299.00 € | stávame sa najlacnejší |
| Gorenje N62CS2XL4 | 447.50 € | **435.00 €** | 10.1 % | **7.0 %** | 435.10 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 53.00 € | **40.50 €** | 43.6 % | **9.8 %** | 40.63 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 433.00 € | **420.50 €** | 15.0 % | **11.7 %** | 420.70 € | stávame sa najlacnejší |
| Grafický tablet Huion Slate 11 | 274.50 € | **262.00 €** | 15.1 % | **9.8 %** | 262.20 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 455.50 € | **443.00 €** | 10.0 % | **7.0 %** | 443.20 € | stávame sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 10.1 % | **7.0 %** | 413.60 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 343.90 € | **331.90 €** | 10.1 % | **6.2 %** | 332.00 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-700-12 UPS 700W 12V čistý ... | 135.50 € | **123.90 €** | 15.1 % | **5.3 %** | 114.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F03 STD | 137.50 € | **125.90 €** | 15.0 % | **5.3 %** | 119.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 170.50 € | **158.90 €** | 15.1 % | **7.2 %** | 159.00 € | stávame sa najlacnejší |
| Amica OMC6751B | 256.00 € | **244.50 €** | 10.0 % | **5.1 %** | 235.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT černé | 164.90 € | **153.50 €** | 13.1 % | **5.2 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 164.90 € | **153.50 €** | 13.1 % | **5.2 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.90 € | **135.50 €** | 15.1 % | **6.2 %** | 135.90 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 405.90 € | **394.50 €** | 10.0 % | **6.9 %** | 394.70 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 378.90 € | **367.50 €** | 10.0 % | **6.7 %** | 367.90 € | stávame sa najlacnejší |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 245.90 € | **234.90 €** | 15.0 % | **9.8 %** | 235.00 € | stávame sa najlacnejší |
| ETA 723590000 | 338.50 € | **327.50 €** | 10.1 % | **6.5 %** | 327.69 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 158.50 € | **147.50 €** | 15.0 % | **7.0 %** | 147.69 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **31.00 €** | 48.1 % | **9.3 %** | 31.21 € | stávame sa najlacnejší |
| Guzzanti GZ 338 | 581.00 € | **570.50 €** | 10.0 % | **8.0 %** | 570.59 € | stávame sa najlacnejší |
| Concept IDV5160wh | 363.50 € | **353.00 €** | 10.1 % | **7.0 %** | 353.10 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 317.50 € | **307.00 €** | 10.1 % | **6.5 %** | 307.20 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.50 € | **217.00 €** | 15.1 % | **9.8 %** | 217.43 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.50 € | **217.00 €** | 15.1 % | **9.8 %** | 217.43 € | stávame sa najlacnejší |
| Taška DJI Power 1000 | 119.90 € | **109.50 €** | 15.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 205.90 € | **195.50 €** | 15.0 % | **9.2 %** | 195.90 € | stávame sa najlacnejší |
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
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **252.90 €** | 15.0 % | **10.6 %** | 253.00 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 51.1 % | **9.5 %** | 26.17 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 284.50 € | **274.90 €** | 10.0 % | **6.3 %** | 275.00 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.90 €** | 10.0 % | **7.0 %** | 341.00 € | stávame sa najlacnejší |
| Orbitrek REBEL ACTIVE RBA-1011 | 144.50 € | **135.00 €** | 15.1 % | **7.5 %** | 135.05 € | stávame sa najlacnejší |
| Maxxo Chamber Line 40 | 251.50 € | **242.00 €** | 10.1 % | **5.9 %** | 242.21 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 214.50 € | **205.00 €** | 15.0 % | **9.9 %** | 205.25 € | stávame sa najlacnejší |
| Beko VRT96425VD | 261.50 € | **252.00 €** | 10.1 % | **6.1 %** | 252.29 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 424.50 € | **415.00 €** | 10.0 % | **7.6 %** | 415.33 € | stávame sa najlacnejší |
| Amica KF 17191 | 39.00 € | **29.50 €** | 60.1 % | **21.1 %** | 29.86 € | stávame sa najlacnejší |
| Guzzanti GZ 325 | 262.50 € | **253.00 €** | 10.1 % | **6.1 %** | 253.50 € | stávame sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **45.50 €** | 37.3 % | **13.8 %** | 45.80 € | stávame sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 50.86 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 29.90 € | **20.50 €** | 57.4 % | **7.9 %** | 20.89 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 332.90 € | **323.50 €** | 10.1 % | **7.0 %** | 323.72 € | stávame sa najlacnejší |
| Guzzanti GZ 110G | 330.00 € | **320.90 €** | 10.0 % | **7.0 %** | 320.99 € | stávame sa najlacnejší |
| Odšťavovač AMZCHEF CE-ZM1902B-SV | 103.90 € | **94.90 €** | 15.2 % | **5.2 %** | 83.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-500-12 UPS 500W 12V čistý ... | 107.50 € | **98.50 €** | 14.8 % | **5.2 %** | 94.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 204.50 € | **195.50 €** | 14.9 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **39.00 €** | 38.7 % | **13.0 %** | 39.50 € | stávame sa najlacnejší |
| HDD 3.5" 6TB 256MB Seagate SKYHAWK pro kamerové syst... | 349.50 € | **340.90 €** | 15.0 % | **12.2 %** | 341.00 € | stávame sa najlacnejší |
| Tefal GC728D10 | 181.90 € | **173.50 €** | 10.2 % | **5.1 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 224.90 € | **216.50 €** | 10.2 % | **6.1 %** | 216.54 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 250.90 € | **242.50 €** | 10.0 % | **6.3 %** | 242.63 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 32.00 € | **23.90 €** | 43.3 % | **7.0 %** | 23.99 € | stávame sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **122.90 €** | 14.9 % | **7.8 %** | 123.00 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 32.90 € | **24.90 €** | 38.9 % | **5.1 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210A | 221.00 € | **213.00 €** | 10.0 % | **6.0 %** | 213.02 € | stávame sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **330.50 €** | 15.0 % | **12.2 %** | 330.68 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 426.00 € | **418.00 €** | 15.0 % | **12.8 %** | 418.20 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 152.00 € | **144.00 €** | 14.9 % | **8.8 %** | 144.32 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 217.50 € | **209.50 €** | 10.1 % | **6.0 %** | 209.86 € | stávame sa najlacnejší |
| Electrolux EF167 | 21.99 € | **14.00 €** | 70.9 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **14.00 €** | 70.9 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **23.00 €** | 54.5 % | **15.0 %** | 23.22 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 24 GS2401 | 564.90 € | **557.00 €** | 15.0 % | **13.4 %** | 557.20 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 90.00 € | **82.50 €** | 14.8 % | **5.2 %** | 82.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Päťzónový indukčný sporák IsEasy LI5-01 | 192.50 € | **185.00 €** | 15.1 % | **10.6 %** | 185.05 € | stávame sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 232.50 € | **225.00 €** | 10.1 % | **6.5 %** | 225.33 € | stávame sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.90 € | **151.50 €** | 15.0 % | **9.7 %** | 151.90 € | stávame sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 397.90 € | **390.50 €** | 7.1 % | **5.1 %** | 390.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 284.90 € | **277.50 €** | 15.0 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **79.90 €** | 14.8 % | **5.4 %** | 78.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MBNA910X | 242.90 € | **235.90 €** | 8.1 % | **5.0 %** | 233.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 107.50 € | **100.50 €** | 14.8 % | **7.4 %** | 100.54 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R10B2 (čierny) | 313.90 € | **306.90 €** | 15.0 % | **12.4 %** | 307.00 € | stávame sa najlacnejší |
| Veslovací trenažér MERACH MR-R14R1 (hnedý) | 388.90 € | **381.90 €** | 15.0 % | **13.0 %** | 382.00 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 196.50 € | **189.50 €** | 10.1 % | **6.2 %** | 189.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 194.90 € | **188.00 €** | 10.1 % | **6.2 %** | 188.22 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 181.90 € | **175.00 €** | 10.1 % | **5.9 %** | 175.35 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B4 | 424.90 € | **418.00 €** | 15.0 % | **13.1 %** | 418.20 € | stávame sa najlacnejší |
| Electrolux EIV84550 | 524.90 € | **518.00 €** | 8.5 % | **7.0 %** | 518.30 € | stávame sa najlacnejší |
| Tesla GSM-LITE zesilovač/opakovač 900/1800 MHz - kom... | 191.50 € | **184.90 €** | 14.9 % | **11.0 %** | 184.91 € | stávame sa najlacnejší |
| Zátěžová vesta HMS KOR20 20 kg | 87.50 € | **80.90 €** | 15.2 % | **6.5 %** | 80.94 € | stávame sa najlacnejší |
| Rotoped DeerRun S500 Pro (čierny) | 246.50 € | **239.90 €** | 15.1 % | **12.0 %** | 240.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 8501A | 157.00 € | **150.50 €** | 10.0 % | **5.5 %** | 150.71 € | stávame sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 154.50 € | **148.00 €** | 10.2 % | **5.5 %** | 148.33 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **34.50 €** | 38.3 % | **16.3 %** | 34.90 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.40 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.40 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.5 % | **9.2 %** | 18.67 € | stávame sa najlacnejší |
| MPPT solar panel adapter for DJI power stations | 71.50 € | **65.50 €** | 14.7 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 209.90 € | **203.90 €** | 15.1 % | **11.8 %** | 204.00 € | stávame sa najlacnejší |
| Candy CDPH 2D947X | 321.50 € | **315.50 €** | 10.1 % | **8.0 %** | 315.60 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 194.90 € | **188.90 €** | 10.2 % | **6.8 %** | 189.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 40.50 € | **34.50 €** | 59.2 % | **35.6 %** | 34.65 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.50 € | **64.50 €** | 15.1 % | **5.3 %** | 64.69 € | stávame sa najlacnejší |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 29.00 € | **23.00 €** | 37.2 % | **8.8 %** | 23.25 € | stávame sa najlacnejší |
| Braun CG9043 | 219.00 € | **213.00 €** | 10.0 % | **7.0 %** | 213.28 € | stávame sa najlacnejší |
| Beko TS190340N | 199.00 € | **193.00 €** | 14.8 % | **11.4 %** | 193.33 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 55.50 € | **49.50 €** | 23.3 % | **10.0 %** | 49.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 75.50 € | **69.50 €** | 38.8 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **16.00 €** | 49.2 % | **8.6 %** | 16.50 € | stávame sa najlacnejší |
| Spájkovacia stanica FNIRSI DWS-200F s výkonom 200 W | 130.90 € | **125.00 €** | 15.0 % | **9.8 %** | 125.12 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 298.90 € | **293.00 €** | 10.1 % | **8.0 %** | 293.30 € | stávame sa najlacnejší |
| Gorenje W11NHPI84AS | 290.90 € | **285.00 €** | 10.1 % | **7.9 %** | 285.50 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 142.50 € | **136.90 €** | 10.0 % | **5.7 %** | 136.96 € | stávame sa najlacnejší |
| Chránič hrudníku DBX BUSHIDO ARC-1500 | 69.00 € | **63.50 €** | 14.8 % | **5.7 %** | 54.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 678.00 € | **672.50 €** | 10.0 % | **9.1 %** | 672.69 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 81.50 € | **76.00 €** | 14.7 % | **7.0 %** | 76.29 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 80.50 € | **75.00 €** | 15.3 % | **7.4 %** | 75.29 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 27.00 € | **21.50 €** | 38.2 % | **10.1 %** | 21.90 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 118.90 € | **113.50 €** | 10.3 % | **5.3 %** | 113.65 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **114.50 €** | 11.3 % | **6.3 %** | 114.88 € | stávame sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 176.90 € | **171.50 €** | 10.1 % | **6.7 %** | 171.90 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **57.50 €** | 21.8 % | **11.3 %** | 57.85 € | stávame sa najlacnejší |
| SigGen 3-v-1 FNIRSI DST-210 ručný digitálny multimet... | 60.00 € | **54.90 €** | 14.8 % | **5.0 %** | 52.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 63.00 € | **57.90 €** | 14.8 % | **5.5 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 97.00 € | **91.90 €** | 15.0 % | **9.0 %** | 91.96 € | stávame sa najlacnejší |
| DOMO DO9252I | 257.00 € | **251.90 €** | 10.0 % | **7.8 %** | 252.00 € | stávame sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.6 % | **16.4 %** | 24.10 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **500.00 €** | 15.0 % | **13.8 %** | 500.20 € | stávame sa najlacnejší |
| Výrobník ledu TEESA EASY ICE TSA5009 | 79.50 € | **74.50 €** | 15.2 % | **8.0 %** | 74.72 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 504.50 € | **499.50 €** | 10.1 % | **9.0 %** | 499.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 47.00 € | **42.00 €** | 38.3 % | **23.6 %** | 42.50 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 137.90 € | **133.00 €** | 10.0 % | **6.1 %** | 133.01 € | stávame sa najlacnejší |
| Beko VRT86325VI | 203.90 € | **199.00 €** | 10.2 % | **7.5 %** | 199.40 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 57.50 € | **52.90 €** | 14.8 % | **5.6 %** | 52.99 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 63.50 € | **58.90 €** | 14.7 % | **6.4 %** | 59.00 € | stávame sa najlacnejší |
| Salente G4 robotický vysavač | 117.50 € | **112.90 €** | 9.6 % | **5.3 %** | 75.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-G4 | 117.50 € | **112.90 €** | 9.6 % | **5.3 %** | 75.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 73.50 € | **68.90 €** | 20.2 % | **12.7 %** | 69.00 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.50 € | **167.90 €** | 10.2 % | **7.3 %** | 168.00 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **15.00 €** | 36.9 % | **5.3 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BL87G831 | 125.50 € | **121.00 €** | 10.3 % | **6.4 %** | 121.10 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 31.00 € | **26.50 €** | 58.5 % | **35.5 %** | 26.64 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.50 € | **48.00 €** | 15.5 % | **5.6 %** | 48.19 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 119.50 € | **115.00 €** | 15.1 % | **10.8 %** | 115.19 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE E25 Pro | 235.50 € | **231.00 €** | 14.9 % | **12.7 %** | 231.21 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 73.50 € | **69.00 €** | 15.1 % | **8.1 %** | 69.29 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 211.00 € | **206.50 €** | 14.9 % | **12.4 %** | 206.81 € | stávame sa najlacnejší |
| Reproduktory Edifier R1100 2.0 (čierne) | 78.50 € | **74.00 €** | 15.0 % | **8.4 %** | 74.50 € | stávame sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 104.90 € | **100.50 €** | 10.1 % | **5.5 %** | 94.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **130.50 €** | 15.0 % | **11.2 %** | 130.82 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 55.90 € | **51.50 €** | 15.0 % | **5.9 %** | 51.89 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **329.90 €** | 14.9 % | **13.5 %** | 330.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 19.00 € | **15.00 €** | 33.7 % | **5.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 60.50 € | **56.50 €** | 37.2 % | **28.1 %** | 56.54 € | stávame sa najlacnejší |
| Electrolux MCK CZ | 29.90 € | **25.90 €** | 46.4 % | **26.8 %** | 25.95 € | stávame sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 125.00 € | **121.00 €** | 14.9 % | **11.2 %** | 121.06 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 23.2 % | **11.5 %** | 38.17 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.50 € | **123.50 €** | 10.1 % | **6.7 %** | 123.71 € | stávame sa najlacnejší |
| G3Ferrari G2014401 Zmrzlinovač | 178.50 € | **174.50 €** | 10.0 % | **7.6 %** | 174.78 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 209.50 € | **205.50 €** | 10.1 % | **8.0 %** | 205.79 € | stávame sa najlacnejší |
| Braun IS5247.VI | 188.50 € | **184.50 €** | 10.1 % | **7.8 %** | 184.80 € | stávame sa najlacnejší |
| Samsung QE75QN85F NEO QLED | 1195.50 € | **1191.50 €** | 10.0 % | **9.6 %** | 1191.83 € | stávame sa najlacnejší |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 58.50 € | **54.50 €** | 14.7 % | **6.8 %** | 54.84 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **81.50 €** | 14.9 % | **9.5 %** | 81.88 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 38.50 € | **34.50 €** | 39.6 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 73.50 € | **69.50 €** | 14.8 % | **8.6 %** | 69.90 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 18.90 € | **14.90 €** | 36.5 % | **7.6 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo Chamber Line 30 | 178.90 € | **175.00 €** | 10.0 % | **7.6 %** | 175.19 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 72.90 € | **69.00 €** | 15.2 % | **9.1 %** | 69.49 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **17.00 €** | 43.0 % | **16.3 %** | 17.13 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 50.90 € | **47.00 €** | 15.0 % | **6.1 %** | 47.49 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 24.90 € | **21.00 €** | 59.2 % | **34.2 %** | 21.50 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 40.50 € | **36.90 €** | 15.6 % | **5.3 %** | 35.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 20.50 € | **16.90 €** | 29.7 % | **6.9 %** | 16.95 € | stávame sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **91.90 €** | 10.1 % | **6.0 %** | 91.94 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Gold - 9150 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Rose Gold - 9151 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban (ružový) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.50 € | **81.00 €** | 10.0 % | **5.5 %** | 81.02 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.50 €** | 47.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.50 €** | 47.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 30.50 € | **27.00 €** | 38.4 % | **22.5 %** | 27.07 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 14.50 € | **11.00 €** | 42.4 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 44.00 € | **40.50 €** | 14.9 % | **5.7 %** | 40.69 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 72.00 € | **68.50 €** | 14.7 % | **9.1 %** | 68.79 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 128.00 € | **124.50 €** | 10.1 % | **7.1 %** | 124.79 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.50 € | **59.00 €** | 15.5 % | **9.0 %** | 59.49 € | stávame sa najlacnejší |
| Electrolux E200SM | 19.99 € | **16.50 €** | 35.7 % | **12.0 %** | 16.90 € | stávame sa najlacnejší |
| Termoregulačný inteligentný pelech Petoneer Cozy Sofa | 103.90 € | **100.50 €** | 15.1 % | **11.3 %** | 100.71 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 209.90 € | **206.50 €** | 10.1 % | **8.3 %** | 206.87 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.50 €** | 15.0 % | **9.3 %** | 65.90 € | stávame sa najlacnejší |
| Sonar Flytec V080 s kapacitou 20 000 mAh pre loď na ... | 251.90 € | **248.50 €** | 15.1 % | **13.5 %** | 248.90 € | stávame sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.58 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 56.90 € | **53.50 €** | 15.0 % | **8.1 %** | 53.61 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 35.90 € | **32.50 €** | 22.8 % | **11.2 %** | 32.85 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - white | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 228.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - black | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 239.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 52.00 € | **48.90 €** | 22.5 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.90 €** | 14.9 % | **9.4 %** | 62.00 € | stávame sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 240.00 € | **236.90 €** | 15.0 % | **13.5 %** | 237.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 72.00 € | **68.90 €** | 14.7 % | **9.8 %** | 69.00 € | stávame sa najlacnejší |
| Zátěžová vesta HMS KTO05 | 35.50 € | **32.50 €** | 15.1 % | **5.4 %** | 25.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB WiFi adaptér duální VU+ 2,4/5GHz/600Mbps s ANTÉN... | 35.50 € | **32.50 €** | 15.8 % | **6.0 %** | 26.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **64.90 €** | 10.5 % | **5.6 %** | 61.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Solid Steel | 67.90 € | **64.90 €** | 10.5 % | **5.6 %** | 61.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 287.90 € | **284.90 €** | 15.0 % | **13.8 %** | 284.96 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.00 € | **38.00 €** | 14.7 % | **6.3 %** | 38.09 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 19.00 € | **16.00 €** | 35.1 % | **13.8 %** | 16.17 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **526.50 €** | 15.0 % | **14.4 %** | 526.70 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 24.00 € | **21.00 €** | 33.4 % | **16.7 %** | 21.22 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 82.00 € | **79.00 €** | 13.4 % | **9.2 %** | 79.24 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 428.00 € | **425.00 €** | 14.9 % | **14.1 %** | 425.37 € | stávame sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 65.50 € | **62.50 €** | 15.1 % | **9.8 %** | 62.90 € | stávame sa najlacnejší |
| Candy CHW6LBX/4U2 IDEA | 82.50 € | **79.50 €** | 10.5 % | **6.4 %** | 79.90 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 629.00 € | **626.00 €** | 10.0 % | **9.5 %** | 626.44 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 61.00 € | **58.00 €** | 14.8 % | **9.1 %** | 58.50 € | stávame sa najlacnejší |
| Salente Combo-4In1 | 126.90 € | **124.00 €** | 10.0 % | **7.5 %** | 124.11 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 183.90 € | **181.00 €** | 10.2 % | **8.4 %** | 181.25 € | stávame sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 163.90 € | **161.00 €** | 15.0 % | **12.9 %** | 161.31 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.90 € | **37.00 €** | 16.1 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 44.90 € | **42.00 €** | 15.3 % | **7.8 %** | 42.29 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 50.90 € | **48.00 €** | 15.3 % | **8.7 %** | 48.29 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 8.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovladač 4-kan. k pohonu vrat IN SL-600, 1000... | 28.50 € | **25.90 €** | 15.7 % | **5.1 %** | 19.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 29.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 34.50 € | **31.90 €** | 14.5 % | **5.9 %** | 31.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **45.90 €** | 15.0 % | **8.9 %** | 46.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100(1-pack) regulácia 23... | 13.50 € | **10.90 €** | 31.3 % | **6.0 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 298.00 € | **295.50 €** | 5.9 % | **5.0 %** | 274.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 34.00 € | **31.50 €** | 14.8 % | **6.4 %** | 30.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Air Board M Compact | 55.50 € | **53.00 €** | 10.1 % | **5.2 %** | 52.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.50 € | **30.00 €** | 15.5 % | **6.6 %** | 30.09 € | stávame sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **32.00 €** | 49.6 % | **38.8 %** | 32.10 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.50 € | **124.00 €** | 10.2 % | **8.0 %** | 124.11 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 41.0 % | **26.6 %** | 22.20 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.50 € | **25.00 €** | 34.4 % | **22.2 %** | 25.24 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 144.50 € | **142.00 €** | 10.3 % | **8.4 %** | 142.30 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 69.00 € | **66.50 €** | 10.7 % | **6.7 %** | 66.84 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 60.50 € | **58.00 €** | 15.0 % | **10.3 %** | 58.38 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.00 €** | 10.4 % | **8.3 %** | 132.40 € | stávame sa najlacnejší |
| Beko VRT76325VW | 168.50 € | **166.00 €** | 10.0 % | **8.4 %** | 166.40 € | stávame sa najlacnejší |
| AMIKO 9265+ DVB-S2/T2/C kombo přijímač 4K - SLEVA NA... | 66.00 € | **63.50 €** | 15.0 % | **10.6 %** | 63.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 180.50 € | **178.00 €** | 10.3 % | **8.8 %** | 178.40 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 45.50 € | **43.00 €** | 15.5 % | **9.1 %** | 43.43 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.50 € | **127.00 €** | 10.3 % | **8.2 %** | 127.50 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.99 € | **17.50 €** | 23.0 % | **7.7 %** | 17.60 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 179.90 € | **177.50 €** | 10.1 % | **8.6 %** | 177.80 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 174.90 € | **172.50 €** | 10.1 % | **8.5 %** | 172.90 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 8.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hasicí přístroj práškový 2 kg ABC | 29.90 € | **27.50 €** | 15.8 % | **6.5 %** | 22.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.90 € | **14.50 €** | 38.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 32.90 € | **30.50 €** | 15.6 % | **7.2 %** | 30.60 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 46.90 € | **44.50 €** | 15.1 % | **9.2 %** | 44.64 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 24.90 € | **22.50 €** | 24.7 % | **12.7 %** | 22.68 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 57.90 € | **55.50 €** | 16.3 % | **11.5 %** | 55.87 € | stávame sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 26.00 € | **23.90 €** | 14.6 % | **5.4 %** | 23.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 28.00 € | **25.90 €** | 15.2 % | **6.6 %** | 25.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 53.00 € | **50.90 €** | 14.9 % | **10.4 %** | 50.94 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.00 € | **128.90 €** | 10.1 % | **8.3 %** | 129.00 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.90 €** | 38.6 % | **16.3 %** | 11.00 € | stávame sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **39.90 €** | 11.0 % | **5.7 %** | 35.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **39.50 €** | 10.4 % | **5.1 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 23.50 € | **21.50 €** | 16.2 % | **6.3 %** | 20.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 22.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42602S | 40.50 € | **38.50 €** | 11.3 % | **5.8 %** | 38.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 31.50 € | **29.50 €** | 54.7 % | **44.9 %** | 29.52 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 39.50 € | **37.50 €** | 33.4 % | **26.6 %** | 37.53 € | stávame sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **58.00 €** | 14.9 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.50 € | **132.50 €** | 10.3 % | **8.6 %** | 132.60 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 250.90 € | **248.90 €** | 10.1 % | **9.2 %** | 249.00 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 43.50 € | **41.50 €** | 20.1 % | **14.6 %** | 41.63 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.50 €** | 14.9 % | **8.0 %** | 31.69 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 28.50 € | **26.50 €** | 14.8 % | **6.8 %** | 26.69 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 162.50 € | **160.50 €** | 10.1 % | **8.7 %** | 160.70 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.00 € | **105.00 €** | 10.0 % | **8.0 %** | 105.21 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 13.50 € | **11.50 €** | 25.4 % | **6.9 %** | 11.79 € | stávame sa najlacnejší |
| Solight FM transmitter s bluetooth pripojením do aut... | 16.00 € | **14.00 €** | 43.9 % | **25.9 %** | 14.33 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 206.00 € | **204.00 €** | 14.9 % | **13.8 %** | 204.34 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 76.50 € | **74.50 €** | 15.4 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.50 € | **63.50 €** | 20.1 % | **16.4 %** | 63.90 € | stávame sa najlacnejší |
| Domo DO344DH | 149.50 € | **147.50 €** | 10.1 % | **8.7 %** | 147.90 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.50 € | **56.50 €** | 10.2 % | **6.4 %** | 56.90 € | stávame sa najlacnejší |
| Russell Hobbs 26810-56/RH | 46.50 € | **44.50 €** | 10.6 % | **5.8 %** | 44.90 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.00 € | **169.00 €** | 10.0 % | **8.8 %** | 169.40 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 158.90 € | **157.00 €** | 11.1 % | **9.8 %** | 157.12 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 159.90 € | **158.00 €** | 10.2 % | **8.9 %** | 158.20 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 138.90 € | **137.00 €** | 10.3 % | **8.8 %** | 137.30 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **110.00 €** | 15.0 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 15.90 € | **14.00 €** | 42.1 % | **25.1 %** | 14.08 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 13.90 € | **12.00 €** | 42.7 % | **23.2 %** | 12.25 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Air pump Cycplus A2 | 23.90 € | **22.00 €** | 15.1 % | **6.0 %** | 22.06 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 52.90 € | **51.00 €** | 15.4 % | **11.2 %** | 51.08 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **20.00 €** | 48.6 % | **35.7 %** | 20.15 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 30.90 € | **29.00 €** | 14.8 % | **7.8 %** | 29.29 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 26.90 € | **25.00 €** | 15.5 % | **7.4 %** | 25.29 € | stávame sa najlacnejší |
| Russell Hobbs 24992-70 | 40.90 € | **39.00 €** | 10.5 % | **5.3 %** | 39.33 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.50 € | **21.90 €** | 14.7 % | **6.9 %** | 21.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 18.50 € | **16.90 €** | 16.5 % | **6.4 %** | 16.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 52.50 € | **50.90 €** | 14.6 % | **11.2 %** | 50.94 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **37.90 €** | 15.3 % | **10.6 %** | 37.96 € | stávame sa najlacnejší |
| Rýchlonabíjací kábel SDC DJI Power pre Inspire 3 | 20.50 € | **18.90 €** | 13.9 % | **5.0 %** | 19.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí bezdrátová podložka pro telefony Compass | 17.50 € | **15.90 €** | 16.6 % | **6.0 %** | 16.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 17.50 € | **15.90 €** | 15.8 % | **5.2 %** | 16.00 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **65.90 €** | 15.2 % | **12.4 %** | 65.93 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 124.50 € | **122.90 €** | 15.1 % | **13.6 %** | 122.97 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.90 €** | 10.4 % | **7.7 %** | 65.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 5.40 € | **3.90 €** | 48.8 % | **7.5 %** | 3.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **27.00 €** | 15.7 % | **9.6 %** | 27.10 € | stávame sa najlacnejší |
| Niceboy PILOT S5 GPS + WIFI | 49.50 € | **48.00 €** | 10.9 % | **7.5 %** | 48.10 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 24.00 € | **22.50 €** | 41.2 % | **32.4 %** | 22.66 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 15.50 € | **14.00 €** | 16.7 % | **5.4 %** | 14.19 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **274.50 €** | 15.0 % | **14.3 %** | 274.70 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 172.00 € | **170.50 €** | 10.0 % | **9.1 %** | 170.70 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT312A | 284.00 € | **282.50 €** | 15.0 % | **14.4 %** | 282.79 € | stávame sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **25.00 €** | 11.3 % | **5.0 %** | 25.29 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 19.50 € | **18.00 €** | 14.5 % | **5.7 %** | 18.29 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 25.50 € | **24.00 €** | 15.8 % | **9.0 %** | 24.29 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 25.50 € | **24.00 €** | 15.8 % | **9.0 %** | 24.29 € | stávame sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 18.50 € | **17.00 €** | 15.4 % | **6.1 %** | 17.29 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.00 € | **64.50 €** | 10.1 % | **7.6 %** | 64.83 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 60.00 € | **58.50 €** | 15.1 % | **12.2 %** | 58.89 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **88.50 €** | 14.8 % | **12.9 %** | 88.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 71.00 € | **69.50 €** | 30.5 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AY210 Moza Racing AS013 | 28.00 € | **26.50 €** | 14.4 % | **8.3 %** | 26.90 € | stávame sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 68.50 € | **67.00 €** | 10.2 % | **7.8 %** | 67.41 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 28.50 € | **27.00 €** | 20.1 % | **13.7 %** | 27.50 € | stávame sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.00 €** | 10.9 % | **5.2 %** | 28.50 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.50 € | **120.00 €** | 10.3 % | **9.0 %** | 120.50 € | stávame sa najlacnejší |
| Domo DO228SV | 121.50 € | **120.00 €** | 10.0 % | **8.7 %** | 120.50 € | stávame sa najlacnejší |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 75.50 € | **74.00 €** | 15.1 % | **12.8 %** | 74.50 € | stávame sa najlacnejší |
| Electrolux EOD3H40BX | 228.90 € | **227.50 €** | 8.7 % | **8.0 %** | 227.70 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 85.90 € | **84.50 €** | 15.1 % | **13.2 %** | 84.86 € | stávame sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 11.90 € | **10.50 €** | 21.4 % | **7.1 %** | 10.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 18.90 € | **17.50 €** | 15.3 % | **6.7 %** | 12.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-PE165 | 60.90 € | **59.50 €** | 10.3 % | **7.8 %** | 59.60 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **21.50 €** | 38.1 % | **29.7 %** | 21.63 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 18.90 € | **17.50 €** | 46.6 % | **35.8 %** | 17.64 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.90 € | **42.50 €** | 15.4 % | **11.7 %** | 42.66 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **31.50 €** | 14.8 % | **10.0 %** | 31.69 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **33.50 €** | 12.2 % | **7.7 %** | 33.90 € | stávame sa najlacnejší |
| Docking Station Blitzwolf BW-TH5 10in1 USB-C (silver) | 25.90 € | **24.50 €** | 14.9 % | **8.7 %** | 24.90 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 494.90 € | **493.50 €** | 10.0 % | **9.7 %** | 493.53 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **57.90 €** | 14.9 % | **12.8 %** | 57.99 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 18.00 € | stávame sa najlacnejší |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 28.00 € | **26.90 €** | 14.1 % | **9.6 %** | 27.00 € | stávame sa najlacnejší |
| PLA drevené vlákno (indický dub) | 17.00 € | **15.90 €** | 14.4 % | **7.0 %** | 12.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 118.00 € | **116.90 €** | 14.8 % | **13.7 %** | 116.99 € | stávame sa najlacnejší |
| Fixed MagMate FIXMM-BL | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-PI | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-TU | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 11.90 € | **10.90 €** | 16.6 % | **6.8 %** | 7.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **15.50 €** | 15.3 % | **8.4 %** | 12.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 16.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.4 % | **6.6 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV9201E0 | 189.00 € | **188.00 €** | 5.6 % | **5.0 %** | 187.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Jóga válec Dharma REBEL ACTIVE RBA-3062-PU | 12.90 € | **11.90 €** | 14.9 % | **6.0 %** | 11.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.90 €** | 10.4 % | **9.3 %** | 101.91 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 13.50 € | **12.50 €** | 56.1 % | **44.6 %** | 12.54 € | stávame sa najlacnejší |
| Solight vonkajšia otočná IP kamera | 38.50 € | **37.50 €** | 42.7 % | **39.0 %** | 37.54 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.50 €** | 15.0 % | **13.1 %** | 61.54 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.05 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **11.00 €** | 44.3 % | **32.3 %** | 11.05 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **24.50 €** | 15.8 % | **11.3 %** | 24.58 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **34.00 €** | 14.2 % | **11.0 %** | 34.09 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.90 € | **16.90 €** | 15.2 % | **8.8 %** | 16.99 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.50 € | **31.50 €** | 15.1 % | **11.5 %** | 31.59 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-beige(beige) | 107.00 € | **106.00 €** | 14.8 % | **13.7 %** | 106.09 € | stávame sa najlacnejší |
| Kruger & Matz KM1303 | 17.50 € | **16.50 €** | 14.6 % | **8.1 %** | 16.59 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 55.2 % | **43.7 %** | 12.61 € | stávame sa najlacnejší |
| Grafický tablet Huion H1161 | 74.00 € | **73.00 €** | 14.8 % | **13.2 %** | 73.11 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 18.00 € | **17.00 €** | 52.4 % | **44.0 %** | 17.12 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 11.50 € | **10.50 €** | 56.9 % | **43.2 %** | 10.63 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **113.50 €** | 10.4 % | **9.4 %** | 113.65 € | stávame sa najlacnejší |
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
| Budík analogový TechnoLine Modell K red | 16.50 € | **15.50 €** | 16.6 % | **9.6 %** | 15.69 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 64.00 € | **63.00 €** | 15.1 % | **13.3 %** | 63.19 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 19.50 € | **18.50 €** | 15.4 % | **9.5 %** | 18.69 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.50 € | **39.50 €** | 10.1 % | **7.4 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 11.2 % | **6.3 %** | 21.70 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 23.00 € | **22.00 €** | 43.4 % | **37.2 %** | 22.20 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 15.00 € | **14.00 €** | 24.7 % | **16.4 %** | 14.21 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.23 € | stávame sa najlacnejší |
| ETA Activmix Premium 2103 90000, černý | 41.50 € | **40.50 €** | 10.4 % | **7.7 %** | 40.75 € | stávame sa najlacnejší |
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
| Koloběžka Spidoo Kruzzel 25628 růžová | 47.50 € | **46.50 €** | 14.8 % | **12.4 %** | 46.76 € | stávame sa najlacnejší |
| Powerbanka Baseus Bipow 10000 mAh, 20 W (biela) | 19.00 € | **18.00 €** | 13.6 % | **7.6 %** | 18.28 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 24.00 € | **23.00 €** | 14.4 % | **9.6 %** | 23.29 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS ISIMAT+ | 22.50 € | **21.50 €** | 14.4 % | **9.3 %** | 21.79 € | stávame sa najlacnejší |
| Cabletech UCH0023A1 | 12.50 € | **11.50 €** | 16.5 % | **7.2 %** | 11.79 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.29 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 42.00 € | **41.00 €** | 14.7 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.7 % | **6.7 %** | 21.79 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 152.00 € | **151.00 €** | 13.1 % | **12.3 %** | 151.30 € | stávame sa najlacnejší |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 11.50 € | **10.50 €** | 45.6 % | **33.0 %** | 10.81 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 72.00 € | **71.00 €** | 14.7 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 76.00 € | **75.00 €** | 10.1 % | **8.7 %** | 75.32 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 16.50 € | **15.50 €** | 14.8 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 32.50 € | **31.50 €** | 14.8 % | **11.3 %** | 31.83 € | stávame sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.50 €** | 14.2 % | **5.0 %** | 11.83 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 18.50 € | **17.50 €** | 11.8 % | **5.7 %** | 17.88 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.50 € | **233.50 €** | 10.2 % | **9.7 %** | 233.88 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 24.50 € | **23.50 €** | 20.4 % | **15.4 %** | 23.89 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 13.50 € | **12.50 €** | 14.4 % | **6.0 %** | 12.89 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **10.50 €** | 34.3 % | **22.7 %** | 10.89 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.50 € | **88.50 €** | 14.8 % | **13.5 %** | 88.89 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.50 € | **89.50 €** | 15.1 % | **13.9 %** | 89.89 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 39.00 € | **38.00 €** | 18.3 % | **15.3 %** | 38.39 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 19.50 € | **18.50 €** | 16.1 % | **10.1 %** | 18.89 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 159.00 € | **158.00 €** | 14.8 % | **14.1 %** | 158.39 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 23.00 € | **22.00 €** | 15.0 % | **10.0 %** | 22.39 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 14.50 € | **13.50 €** | 41.4 % | **31.6 %** | 13.90 € | stávame sa najlacnejší |
| DOMO DO465FR | 66.50 € | **65.50 €** | 10.6 % | **9.0 %** | 65.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 20.50 € | **19.50 €** | 42.8 % | **35.8 %** | 19.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 49.50 € | **48.50 €** | 22.4 % | **20.0 %** | 48.90 € | stávame sa najlacnejší |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 193.50 € | **192.50 €** | 13.1 % | **12.5 %** | 192.90 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 17.00 € | **16.00 €** | 13.4 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 19.00 € | **18.00 €** | 14.3 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 85.00 € | **84.00 €** | 14.9 % | **13.5 %** | 84.42 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 44.00 € | **43.00 €** | 14.7 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **35.00 €** | 15.0 % | **11.9 %** | 35.46 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 22.00 € | **21.00 €** | 14.2 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 29.00 € | **28.00 €** | 14.6 % | **10.7 %** | 28.49 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 58.00 € | **57.00 €** | 29.5 % | **27.3 %** | 57.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **13.00 €** | 38.3 % | **28.4 %** | 13.50 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **88.00 €** | 15.1 % | **13.8 %** | 88.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 16.00 € | **15.00 €** | 38.7 % | **30.0 %** | 15.50 € | stávame sa najlacnejší |
| G3ferrari G1019100 Horkovzdušná fritéza | 105.90 € | **105.00 €** | 10.3 % | **9.4 %** | 105.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 71.90 € | **71.00 €** | 19.1 % | **17.6 %** | 71.24 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **65.00 €** | 10.6 % | **9.1 %** | 65.29 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.90 € | **85.00 €** | 15.2 % | **14.0 %** | 85.29 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **79.00 €** | 15.2 % | **13.9 %** | 79.39 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 64.90 € | **64.00 €** | 10.3 % | **8.8 %** | 64.50 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.90 € | **64.00 €** | 15.1 % | **13.5 %** | 64.50 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.00 €** | 15.5 % | **6.0 %** | 9.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 3.20 € | **2.30 €** | 46.2 % | **5.1 %** | 2.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 13.90 € | **13.00 €** | 29.4 % | **21.1 %** | 13.01 € | stávame sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 13.90 € | **13.00 €** | 41.3 % | **32.1 %** | 13.45 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.90 € | **11.00 €** | 46.1 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **13.00 €** | 14.8 % | **7.4 %** | 13.50 € | stávame sa najlacnejší |
| Zelmer ZHM2550 | 39.90 € | **39.00 €** | 28.9 % | **26.0 %** | 39.03 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.90 € | **48.00 €** | 14.9 % | **12.8 %** | 48.19 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.90 € | **16.00 €** | 35.4 % | **28.2 %** | 16.32 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.90 € | **20.00 €** | 10.8 % | **6.0 %** | 20.38 € | stávame sa najlacnejší |
| Sada BOYA BY-WFM12 bezdrátový klopový mikrofon, vysí... | 33.90 € | **33.00 €** | 9.8 % | **6.9 %** | 33.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 17.90 € | **17.00 €** | 36.6 % | **29.8 %** | 17.39 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.00 €** | 15.2 % | **9.4 %** | 17.39 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.00 €** | 15.4 % | **9.6 %** | 17.39 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **42.00 €** | 10.9 % | **8.6 %** | 42.41 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.90 € | **22.00 €** | 10.5 % | **6.1 %** | 22.42 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.90 € | **23.00 €** | 10.5 % | **6.4 %** | 23.49 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.00 €** | 10.7 % | **7.7 %** | 32.50 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.90 € | **31.00 €** | 22.2 % | **18.8 %** | 31.50 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.00 €** | 39.1 % | **31.7 %** | 16.50 € | stávame sa najlacnejší |
| Domo DO 9218 WK | 21.90 € | **21.00 €** | 10.4 % | **5.8 %** | 21.50 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.00 €** | 10.3 % | **8.6 %** | 58.50 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT315A | 308.90 € | **308.00 €** | 15.0 % | **14.7 %** | 308.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.10 €** | 17.1 % | **6.6 %** | 8.11 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.20 €** | 53.4 % | **41.1 %** | 9.22 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 5.40 € | **4.60 €** | 55.1 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.40 € | **6.60 €** | 45.7 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.90 € | **6.10 €** | 37.8 % | **21.9 %** | 6.20 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.00 € | **5.20 €** | 37.8 % | **19.4 %** | 5.28 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 5.50 € | **4.80 €** | 53.1 % | **33.6 %** | 4.82 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.50 € | **2.80 €** | 46.7 % | **17.3 %** | 2.84 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 8.20 € | **7.50 €** | 48.8 % | **36.1 %** | 7.54 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.50 €** | 47.8 % | **35.2 %** | 7.60 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 10.50 € | **9.80 €** | 47.4 % | **37.6 %** | 9.90 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 488.50 € | **487.90 €** | 10.1 % | **9.9 %** | 488.00 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 29.50 € | **28.90 €** | 14.8 % | **12.4 %** | 28.99 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Filters ND8/16/32 Freewell for DJI Neo | 20.50 € | **19.90 €** | 15.5 % | **12.1 %** | 19.99 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.90 €** | 7.8 % | **6.0 %** | 34.99 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **35.90 €** | 10.9 % | **9.0 %** | 36.00 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **35.90 €** | 10.4 % | **8.6 %** | 36.00 € | stávame sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 26.50 € | **25.90 €** | 15.3 % | **12.7 %** | 26.00 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **7.70 €** | 55.5 % | **44.2 %** | 7.74 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.20 € | **4.60 €** | 40.0 % | **23.8 %** | 4.66 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **2.90 €** | 53.0 % | **26.8 %** | 2.94 € | stávame sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **11.90 €** | 12.9 % | **7.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 11.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.60 € | **9.00 €** | 45.3 % | **36.3 %** | 9.04 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 10.96 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.10 € | **3.50 €** | 54.3 % | **31.7 %** | 3.57 € | stávame sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.99 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 16.50 € | **15.90 €** | 23.5 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| Sada pro přežití SURVIVAL 32v1 Trizand 19920 | 15.50 € | **14.90 €** | 14.6 % | **10.1 %** | 15.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 140.50 € | **140.00 €** | 5.4 % | **5.0 %** | 130.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, biely | 6.60 € | **6.10 €** | 47.4 % | **36.2 %** | 6.11 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 10.00 € | **9.50 €** | 43.9 % | **36.7 %** | 9.52 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.90 € | **6.40 €** | 47.2 % | **36.6 %** | 6.42 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **6.10 €** | 47.0 % | **35.9 %** | 6.12 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 20.00 € | **19.50 €** | 16.5 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 30.50 € | **30.00 €** | 12.0 % | **10.2 %** | 30.03 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 32.50 € | **32.00 €** | 19.9 % | **18.0 %** | 32.04 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.5 % | **9.3 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.8 % | **9.6 %** | 24.04 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.20 €** | 46.8 % | **35.9 %** | 6.24 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 4.60 € | **4.10 €** | 39.0 % | **23.9 %** | 4.16 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 10.3 % | **8.4 %** | 30.08 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.8 % | **9.9 %** | 19.08 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 12.2 % | **9.8 %** | 23.08 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **24.50 €** | 14.5 % | **12.2 %** | 24.58 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **4.10 €** | 33.6 % | **19.0 %** | 4.18 € | stávame sa najlacnejší |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 14.50 € | **14.00 €** | 13.6 % | **9.7 %** | 14.09 € | stávame sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **11.00 €** | 16.6 % | **11.5 %** | 11.12 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.50 € | **54.00 €** | 10.1 % | **9.1 %** | 54.13 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **11.00 €** | 38.5 % | **32.5 %** | 11.16 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **73.00 €** | 10.6 % | **9.9 %** | 73.16 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 28.00 € | **27.50 €** | 15.2 % | **13.1 %** | 27.69 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 68.00 € | **67.50 €** | 15.0 % | **14.1 %** | 67.69 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.50 € | **13.00 €** | 14.4 % | **10.2 %** | 13.19 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.3 % | **9.8 %** | 22.20 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 13.50 € | **13.00 €** | 19.2 % | **14.8 %** | 13.20 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 12.3 % | **9.9 %** | 23.21 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 14.50 € | **14.00 €** | 48.8 % | **43.7 %** | 14.25 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.50 € | **155.00 €** | 14.4 % | **14.0 %** | 155.25 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.5 % | **9.9 %** | 33.25 € | stávame sa najlacnejší |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 12.00 € | **11.50 €** | 10.3 % | **5.7 %** | 11.75 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.50 € | **10.00 €** | 48.5 % | **41.4 %** | 10.26 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 62.50 € | **62.00 €** | 39.3 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **30.00 €** | 39.2 % | **36.9 %** | 30.27 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.50 € | **14.00 €** | 44.1 % | **39.1 %** | 14.27 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.50 € | **13.00 €** | 47.3 % | **41.9 %** | 13.28 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 21.50 € | **21.00 €** | 46.5 % | **43.1 %** | 21.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.50 € | **12.00 €** | 47.7 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.50 € | **12.00 €** | 47.7 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 12.1 % | **7.2 %** | 11.28 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.50 € | **13.00 €** | 47.3 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 13.50 € | **13.00 €** | 47.3 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 48.50 € | **48.00 €** | 7.3 % | **6.2 %** | 48.29 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS ISIMAT | 22.50 € | **22.00 €** | 14.4 % | **11.9 %** | 22.29 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 12.9 % | **7.5 %** | 10.29 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 17.00 € | **16.50 €** | 15.2 % | **11.8 %** | 16.79 € | stávame sa najlacnejší |
| Solární regulátor PWM Epever VS1024AU, 12/24V, 10A s... | 38.00 € | **37.50 €** | 14.3 % | **12.8 %** | 37.79 € | stávame sa najlacnejší |
| Vestavná bezdrátová indukční nabíječka ORNO OR-AE-13... | 20.50 € | **20.00 €** | 15.0 % | **12.2 %** | 20.29 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.7 % | **8.3 %** | 16.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 14.2 % | **10.0 %** | 13.29 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 50.00 € | **49.50 €** | 17.2 % | **16.0 %** | 49.79 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 50.00 € | **49.50 €** | 17.2 % | **16.0 %** | 49.79 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 10.2 % | **8.5 %** | 33.29 € | stávame sa najlacnejší |
| Salente Icequeen-Wh | 19.50 € | **19.00 €** | 8.0 % | **5.2 %** | 19.29 € | stávame sa najlacnejší |
| Čistička vzduchu TEESA PURE LIFE P500 | 73.50 € | **73.00 €** | 10.0 % | **9.3 %** | 73.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 10.2 % | **7.9 %** | 23.29 € | stávame sa najlacnejší |
| Adaptér KRUGER & MATZ KM0390 (HUB) USB C na port HDM... | 27.50 € | **27.00 €** | 14.2 % | **12.1 %** | 27.29 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 17.00 € | **16.50 €** | 14.5 % | **11.1 %** | 16.79 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.50 € | **65.00 €** | 14.7 % | **13.9 %** | 65.29 € | stávame sa najlacnejší |
| Reproduktory k PC 2.1 Rebel CS-50 | 12.50 € | **12.00 €** | 15.7 % | **11.1 %** | 12.29 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.50 € | **28.00 €** | 15.4 % | **13.4 %** | 28.29 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 35.50 € | **35.00 €** | 14.4 % | **12.8 %** | 35.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.50 € | **138.00 €** | 14.9 % | **14.5 %** | 138.29 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.50 € | **25.00 €** | 14.7 % | **12.4 %** | 25.29 € | stávame sa najlacnejší |
| Aróma difuzér Albi sonický Deluxe - Kvietky | 25.50 € | **25.00 €** | 10.5 % | **8.3 %** | 25.30 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.00 €** | 10.2 % | **9.7 %** | 110.30 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 152.50 € | **152.00 €** | 6.6 % | **6.2 %** | 152.30 € | stávame sa najlacnejší |
| SALENTE SuChef | 83.50 € | **83.00 €** | 9.1 % | **8.4 %** | 83.30 € | stávame sa najlacnejší |
| Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVI... | 10.50 € | **10.00 €** | 14.0 % | **8.5 %** | 10.30 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.00 €** | 40.4 % | **34.3 %** | 11.32 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.50 € | **25.00 €** | 40.0 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 32.00 € | **31.50 €** | 10.1 % | **8.3 %** | 31.83 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.50 € | **40.00 €** | 36.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.50 € | **32.00 €** | 33.2 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| SONY WFC510L modrá | 39.50 € | **39.00 €** | 16.9 % | **15.4 %** | 39.36 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **18.00 €** | 39.0 % | **35.3 %** | 18.38 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 11.0 % | **7.7 %** | 16.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.7 % | **8.3 %** | 22.38 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 10.1 % | **8.2 %** | 29.38 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **60.00 €** | 10.4 % | **9.4 %** | 60.38 € | stávame sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 22.00 € | **21.50 €** | 13.8 % | **11.2 %** | 21.88 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.38 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.50 € | **13.00 €** | 10.2 % | **6.1 %** | 13.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.00 € | **21.50 €** | 9.3 % | **6.8 %** | 21.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.00 € | **21.50 €** | 9.3 % | **6.8 %** | 21.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.50 € | **18.00 €** | 12.6 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.50 € | **18.00 €** | 12.6 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 26.50 € | **26.00 €** | 10.4 % | **8.3 %** | 26.39 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.50 € | **71.00 €** | 39.3 % | **38.4 %** | 71.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.50 € | **89.00 €** | 14.8 % | **14.2 %** | 89.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 245.50 € | **245.00 €** | 15.0 % | **14.7 %** | 245.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 131.50 € | **131.00 €** | 15.1 % | **14.7 %** | 131.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 103.00 € | **102.50 €** | 14.9 % | **14.4 %** | 102.89 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 193.50 € | **193.00 €** | 15.0 % | **14.7 %** | 193.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 211.00 € | **210.50 €** | 7.3 % | **7.0 %** | 210.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 339.00 € | **338.50 €** | 14.6 % | **14.5 %** | 338.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 89.50 € | **89.00 €** | 13.8 % | **13.2 %** | 89.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 153.00 € | **152.50 €** | 14.9 % | **14.5 %** | 152.89 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 78.00 € | **77.50 €** | 13.1 % | **12.4 %** | 77.89 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1307.50 € | **1307.00 €** | 7.6 % | **7.5 %** | 1307.39 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 208.50 € | **208.00 €** | 16.5 % | **16.2 %** | 208.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 149.00 € | **148.50 €** | 14.4 % | **14.0 %** | 148.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.00 € | **54.50 €** | 13.4 % | **12.3 %** | 54.89 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 25.00 € | **24.50 €** | 9.7 % | **7.6 %** | 24.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 33.00 € | **32.50 €** | 11.2 % | **9.5 %** | 32.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 23.50 € | **23.00 €** | 10.6 % | **8.3 %** | 23.39 € | stávame sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.89 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.00 € | **11.50 €** | 12.0 % | **7.3 %** | 11.89 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.00 € | **22.50 €** | 9.6 % | **7.2 %** | 22.89 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 58.50 € | **58.00 €** | 17.4 % | **16.4 %** | 58.39 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 34.00 € | **33.50 €** | 9.3 % | **7.7 %** | 33.89 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 211.50 € | **211.00 €** | 13.1 % | **12.8 %** | 211.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 56.50 € | **56.00 €** | 8.0 % | **7.0 %** | 56.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 111.00 € | **110.50 €** | 6.0 % | **5.6 %** | 110.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 282.50 € | **282.00 €** | 8.0 % | **7.8 %** | 282.39 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 19.50 € | **19.00 €** | 8.8 % | **6.0 %** | 19.39 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 65.00 € | **64.50 €** | 7.3 % | **6.5 %** | 64.89 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.00 € | **44.50 €** | 13.0 % | **11.7 %** | 44.89 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 229.00 € | **228.50 €** | 6.0 % | **5.8 %** | 228.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 112.50 € | **112.00 €** | 9.7 % | **9.2 %** | 112.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 245.00 € | **244.50 €** | 10.0 % | **9.8 %** | 244.89 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 135.50 € | **135.00 €** | 7.9 % | **7.5 %** | 135.39 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 88.50 € | **88.00 €** | 11.1 % | **10.5 %** | 88.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 84.50 € | **84.00 €** | 13.7 % | **13.0 %** | 84.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 80.50 € | **80.00 €** | 8.3 % | **7.7 %** | 80.39 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 90.50 € | **90.00 €** | 13.6 % | **13.0 %** | 90.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 94.00 € | **93.50 €** | 11.2 % | **10.6 %** | 93.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 124.50 € | **124.00 €** | 12.9 % | **12.4 %** | 124.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 197.00 € | **196.50 €** | 11.5 % | **11.2 %** | 196.89 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 109.00 € | **108.50 €** | 7.1 % | **6.6 %** | 108.89 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 292.00 € | **291.50 €** | 14.5 % | **14.3 %** | 291.89 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 219.50 € | **219.00 €** | 14.5 % | **14.3 %** | 219.39 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 197.50 € | **197.00 €** | 10.7 % | **10.4 %** | 197.39 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 104.00 € | **103.50 €** | 6.9 % | **6.4 %** | 103.89 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 104.00 € | **103.50 €** | 6.9 % | **6.4 %** | 103.89 € | stávame sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.39 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 18.00 € | **17.50 €** | 24.2 % | **20.8 %** | 17.90 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.00 € | **39.50 €** | 10.1 % | **8.7 %** | 39.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, USB A+C, 2 ... | 20.00 € | **19.50 €** | 33.3 % | **29.9 %** | 19.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.50 € | **22.00 €** | 31.8 % | **28.9 %** | 22.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 32.00 € | **31.50 €** | 31.5 % | **29.5 %** | 31.90 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P1 | 25.00 € | **24.50 €** | 14.1 % | **11.8 %** | 24.90 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 238.50 € | **238.00 €** | 8.0 % | **7.7 %** | 238.40 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **12.00 €** | 46.0 % | **40.2 %** | 12.41 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 373.50 € | **373.00 €** | 7.1 % | **7.0 %** | 373.41 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 12.50 € | **12.00 €** | 44.6 % | **38.8 %** | 12.42 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **113.00 €** | 10.4 % | **9.9 %** | 113.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.42 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **10.00 €** | 13.4 % | **8.0 %** | 10.42 € | stávame sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 29.50 € | **29.00 €** | 26.3 % | **24.2 %** | 29.42 € | stávame sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO 400 | 32.50 € | **32.00 €** | 15.6 % | **13.8 %** | 32.42 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 103.50 € | **103.00 €** | 35.1 % | **34.5 %** | 103.42 € | stávame sa najlacnejší |
| GORENJE TH60E3B | 81.50 € | **81.00 €** | 10.1 % | **9.4 %** | 81.42 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.50 € | **24.00 €** | 45.4 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.50 € | **24.00 €** | 45.4 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 27.50 € | **27.00 €** | 33.7 % | **31.3 %** | 27.44 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 24.50 € | **24.00 €** | 45.4 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.50 € | **26.00 €** | 42.7 % | **40.0 %** | 26.44 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 22.50 € | **22.00 €** | 19.5 % | **16.8 %** | 22.45 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 10.2 % | **8.7 %** | 36.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.46 € | stávame sa najlacnejší |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 17.50 € | **17.00 €** | 15.0 % | **11.7 %** | 17.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.50 € | **16.00 €** | 48.2 % | **43.7 %** | 16.47 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.50 € | **23.00 €** | 16.5 % | **14.0 %** | 23.48 € | stávame sa najlacnejší |
| SONY WFC710N Black | 71.50 € | **71.00 €** | 10.4 % | **9.6 %** | 71.48 € | stávame sa najlacnejší |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.50 € | **21.00 €** | 38.2 % | **35.0 %** | 21.49 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 26.50 € | **26.00 €** | 8.8 % | **6.8 %** | 26.49 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.50 € | **16.00 €** | 35.4 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | stávame sa najlacnejší |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.50 € | **26.00 €** | 32.5 % | **30.0 %** | 26.49 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **13.00 €** | 33.2 % | **28.3 %** | 13.49 € | stávame sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.50 € | **25.00 €** | 11.8 % | **9.6 %** | 25.49 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 15.50 € | **15.00 €** | 33.9 % | **29.6 %** | 15.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 21.8 % | **19.6 %** | 28.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 24.50 € | **24.00 €** | 36.2 % | **33.5 %** | 24.49 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 70.90 € | **70.50 €** | 15.3 % | **14.6 %** | 70.60 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 70.90 € | **70.50 €** | 15.3 % | **14.6 %** | 70.60 € | stávame sa najlacnejší |
| Domo DO8719W | 69.90 € | **69.50 €** | 10.2 % | **9.5 %** | 69.67 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 75.90 € | **75.50 €** | 15.1 % | **14.5 %** | 75.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 96.90 € | **96.50 €** | 41.3 % | **40.7 %** | 96.77 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 86.90 € | **86.50 €** | 15.0 % | **14.4 %** | 86.79 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 12.0 % | **11.6 %** | 113.79 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.50 €** | 9.7 % | **9.2 %** | 84.80 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 108.90 € | **108.50 €** | 10.1 % | **9.7 %** | 108.80 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 104.90 € | **104.50 €** | 7.6 % | **7.2 %** | 104.84 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161E | 108.90 € | **108.50 €** | 6.5 % | **6.1 %** | 108.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.90 € | **76.50 €** | 39.1 % | **38.3 %** | 76.89 € | stávame sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BL | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 9.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.40 € | **4.00 €** | 36.0 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.60 €** | 50.8 % | **44.8 %** | 9.61 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **9.00 €** | 48.4 % | **42.1 %** | 9.02 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.50 € | **5.10 €** | 46.6 % | **35.9 %** | 5.14 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.60 €** | 56.3 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.50 € | **5.10 €** | 54.7 % | **43.5 %** | 5.15 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.90 € | **10.50 €** | 10.8 % | **6.7 %** | 10.59 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.70 € | **7.30 €** | 31.5 % | **24.7 %** | 7.39 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 7.20 € | **6.80 €** | 23.2 % | **16.4 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.50 €** | 40.4 % | **35.3 %** | 10.60 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 11.90 € | **11.50 €** | 16.6 % | **12.6 %** | 11.69 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 14.2 % | **10.4 %** | 11.71 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.90 € | **12.50 €** | 34.5 % | **30.3 %** | 12.74 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.90 € | **10.50 €** | 11.3 % | **7.2 %** | 10.76 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.90 € | **10.50 €** | 10.8 % | **6.7 %** | 10.76 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 14.90 € | **14.50 €** | 46.3 % | **42.4 %** | 14.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.90 € | **13.50 €** | 13.5 % | **10.2 %** | 13.79 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 13.3 % | **9.5 %** | 11.79 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 12.90 € | **12.50 €** | 39.7 % | **35.3 %** | 12.83 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 47.0 % | **42.1 %** | 11.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.90 € | **13.50 €** | 36.2 % | **32.2 %** | 13.84 € | stávame sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 10.2 % | **7.3 %** | 14.88 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **12.50 €** | 31.1 % | **27.0 %** | 12.89 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.30 € | **2.90 €** | 36.2 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.10 € | **4.70 €** | 48.1 % | **36.5 %** | 4.71 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 5.30 € | **4.90 €** | 55.6 % | **43.8 %** | 4.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.20 €** | 48.4 % | **35.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.60 € | **5.20 €** | 24.4 % | **15.5 %** | 5.29 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.90 € | **21.50 €** | 7.5 % | **5.5 %** | 21.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.50 €** | 10.5 % | **9.3 %** | 36.58 € | stávame sa najlacnejší |
| WiFi extender REBEL KOM1032 | 24.90 € | **24.50 €** | 15.7 % | **13.8 %** | 24.59 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 11.1 % | **9.9 %** | 35.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.63 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.50 €** | 11.4 % | **9.9 %** | 29.67 € | stávame sa najlacnejší |
| GUZZANTIGZ 3601 | 27.90 € | **27.50 €** | 9.4 % | **7.8 %** | 27.69 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 57.90 € | **57.50 €** | 15.1 % | **14.3 %** | 57.69 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.90 € | **16.50 €** | 15.5 % | **12.7 %** | 16.69 € | stávame sa najlacnejší |
| Záložní zdroj MHPower DL181-24 Mini UPS 24V 0,5A | 20.90 € | **20.50 €** | 15.9 % | **13.7 %** | 20.69 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 17.90 € | **17.50 €** | 46.4 % | **43.1 %** | 17.70 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.90 € | **30.50 €** | 33.5 % | **31.8 %** | 30.70 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **20.50 €** | 30.3 % | **27.8 %** | 20.76 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.90 € | **31.50 €** | 38.7 % | **37.0 %** | 31.77 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 49.90 € | **49.50 €** | 15.2 % | **14.3 %** | 49.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.9 % | **9.8 %** | 40.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 25.90 € | **25.50 €** | 34.5 % | **32.5 %** | 25.80 € | stávame sa najlacnejší |
| ETA Mano 3219 90020 | 55.90 € | **55.50 €** | 10.2 % | **9.4 %** | 55.83 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 24.90 € | **24.50 €** | 45.3 % | **43.0 %** | 24.84 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.90 € | **16.50 €** | 39.3 % | **36.1 %** | 16.87 € | stávame sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.90 € | **18.50 €** | 12.5 % | **10.1 %** | 18.88 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 259.90 € | **259.50 €** | 15.0 % | **14.8 %** | 259.79 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 270.90 € | **270.50 €** | 8.0 % | **7.9 %** | 270.80 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 285.90 € | **285.50 €** | 6.2 % | **6.0 %** | 285.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.50 € | **9.20 €** | 22.4 % | **18.5 %** | 9.29 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.40 €** | 45.5 % | **19.8 %** | 1.43 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 5.00 € | **4.70 €** | 54.0 % | **44.7 %** | 4.71 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.00 € | **3.70 €** | 47.2 % | **36.1 %** | 3.71 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.73 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.74 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.60 € | **6.30 €** | 29.9 % | **24.0 %** | 6.39 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.30 € | **7.00 €** | 24.7 % | **19.6 %** | 7.09 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 8.10 € | **7.80 €** | 32.8 % | **27.9 %** | 7.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.50 € | **2.20 €** | 34.6 % | **18.5 %** | 2.29 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **2.90 €** | 16.1 % | **8.7 %** | 2.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.30 € | **6.10 €** | 37.0 % | **32.6 %** | 6.11 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.70 € | **2.50 €** | 47.3 % | **36.4 %** | 2.51 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.00 € | **4.80 €** | 43.6 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.44 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.60 € | **3.40 €** | 41.4 % | **33.5 %** | 3.49 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 6.20 € | **6.00 €** | 15.3 % | **11.6 %** | 6.09 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.80 € | **4.60 €** | 19.3 % | **14.4 %** | 4.69 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.20 €** | 56.1 % | **43.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.40 € | **2.20 €** | 47.8 % | **35.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.30 € | **3.10 €** | 52.4 % | **43.2 %** | 3.14 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.30 € | **2.10 €** | 28.1 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 503.00 € | **502.90 €** | 6.4 % | **6.4 %** | 502.99 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA100 sada pre výmenu vy... | 19.00 € | **18.90 €** | 5.6 % | **5.0 %** | 18.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 52.00 € | **51.90 €** | 6.0 % | **5.8 %** | 51.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.00 € | **54.90 €** | 10.1 % | **9.9 %** | 54.91 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.00 € | **22.90 €** | 33.2 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 18.00 € | **17.90 €** | 45.5 % | **44.7 %** | 17.95 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.00 € | **19.90 €** | 15.2 % | **14.6 %** | 19.96 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.90 €** | 38.4 % | **37.7 %** | 20.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 22.00 € | **21.90 €** | 38.4 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 17.00 € | **16.90 €** | 45.3 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 17.00 € | **16.90 €** | 45.3 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 10.2 % | **10.0 %** | 47.96 € | stávame sa najlacnejší |
| ETA Verto II 1423 90000 bílý/zlatý | 31.00 € | **30.90 €** | 12.5 % | **12.1 %** | 30.96 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 27.00 € | **26.90 €** | 42.3 % | **41.7 %** | 26.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 40.00 € | **39.90 €** | 38.2 % | **37.9 %** | 39.98 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 22.00 € | **21.90 €** | 25.2 % | **24.6 %** | 21.98 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **35.90 €** | 45.0 % | **44.6 %** | 35.99 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 22.00 € | **21.90 €** | 7.7 % | **7.2 %** | 21.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.20 €** | 25.6 % | **24.2 %** | 9.29 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Tefal KO5S08E0 | 35.00 € | **34.90 €** | 10.0 % | **9.7 %** | 34.99 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/B | 17.00 € | **16.90 €** | 14.6 % | **13.9 %** | 16.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.70 € | **5.60 €** | 37.5 % | **35.1 %** | 5.63 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.14 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 6.90 € | **6.80 €** | 46.1 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 6.40 € | **6.30 €** | 36.2 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.90 € | **5.80 €** | 11.0 % | **9.2 %** | 5.89 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.70 € | **6.60 €** | 34.5 % | **32.5 %** | 6.69 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.90 € | **6.80 €** | 45.3 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.90 € | **6.80 €** | 45.3 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **5.30 €** | 37.2 % | **34.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.40 € | **4.30 €** | 55.5 % | **52.0 %** | 4.39 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 2.10 € | **2.00 €** | 51.1 % | **43.9 %** | 2.02 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.50 € | **2.40 €** | 17.5 % | **12.8 %** | 2.44 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.50 € | **2.40 €** | 48.4 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.60 €** | 46.7 % | **42.8 %** | 3.65 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **2.00 €** | 48.5 % | **41.4 %** | 2.05 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.10 € | **1.00 €** | 42.0 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **1.00 €** | 42.0 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 1.80 € | **1.70 €** | 39.4 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.90 € | **3.80 €** | 32.7 % | **29.3 %** | 3.85 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.30 € | **1.20 €** | 51.0 % | **39.4 %** | 1.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.60 € | **1.50 €** | 44.5 % | **35.5 %** | 1.56 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.46 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.00 € | **2.90 €** | 39.4 % | **34.7 %** | 2.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.00 € | **1.90 €** | 40.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.00 € | **1.90 €** | 36.6 % | **29.8 %** | 1.96 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.60 € | **3.50 €** | 41.4 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.70 € | **3.60 €** | 36.1 % | **32.4 %** | 3.67 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.20 € | **3.10 €** | 35.5 % | **31.3 %** | 3.17 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.40 € | **3.30 €** | 38.2 % | **34.1 %** | 3.37 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.20 € | **3.10 €** | 38.4 % | **34.1 %** | 3.17 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 3.90 € | **3.80 €** | 37.9 % | **34.3 %** | 3.87 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.20 € | **2.10 €** | 39.7 % | **33.4 %** | 2.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.70 € | **2.60 €** | 38.1 % | **32.9 %** | 2.68 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.60 € | **3.50 €** | 37.4 % | **33.6 %** | 3.58 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.70 € | **3.60 €** | 45.3 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.90 €** | 22.7 % | **19.7 %** | 3.99 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.50 € | **3.40 €** | 36.8 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.60 €** | 26.9 % | **22.2 %** | 2.69 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 1.90 € | **1.80 €** | 37.9 % | **30.7 %** | 1.85 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **1.80 €** | 36.7 % | **29.5 %** | 1.89 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 1.90 € | **1.80 €** | 35.5 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 5.80 € | **5.70 €** | 54.6 % | **51.9 %** | 5.72 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.60 € | **8.50 €** | 36.6 % | **35.0 %** | 8.54 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **13.90 €** | 36.5 % | **35.5 %** | 13.95 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.90 € | **8.80 €** | 45.9 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.90 € | **8.80 €** | 45.9 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.30 € | **3.20 €** | 39.7 % | **35.5 %** | 3.25 € | stávame sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.30 € | **5.20 €** | 43.2 % | **40.5 %** | 5.25 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 10.00 € | **9.90 €** | 26.8 % | **25.6 %** | 9.95 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.60 € | **7.50 €** | 52.6 % | **50.6 %** | 7.56 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 12.00 € | **11.90 €** | 38.0 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 14.00 € | **13.90 €** | 32.8 % | **31.9 %** | 13.96 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.80 € | **6.70 €** | 32.9 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.8 % | **9.9 %** | 12.96 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.20 € | **9.10 €** | 39.5 % | **38.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 13.00 € | **12.90 €** | 26.3 % | **25.3 %** | 12.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.60 € | **9.50 €** | 31.8 % | **30.5 %** | 9.56 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.60 € | **4.50 €** | 46.1 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 15.00 € | **14.90 €** | 22.4 % | **21.6 %** | 14.97 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 5.50 € | **5.40 €** | 24.6 % | **22.3 %** | 5.48 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.40 €** | 36.3 % | **33.8 %** | 5.48 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 4.80 € | **4.70 €** | 37.4 % | **34.5 %** | 4.78 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **5.00 €** | 18.1 % | **15.8 %** | 5.09 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.90 €** | 38.4 % | **36.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 8.00 € | **7.90 €** | 12.3 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.80 € | **3.70 €** | 19.7 % | **16.6 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.80 € | **3.70 €** | 39.8 % | **36.1 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 8.50 € | **8.40 €** | 45.2 % | **43.5 %** | 8.49 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11, V15 | 7.00 € | **6.90 €** | 30.8 % | **29.0 %** | 6.99 € | stávame sa najlacnejší |
| Solight stĺpcový filter pre Dyson V12 | 6.00 € | **5.90 €** | 26.4 % | **24.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.00 € | **7.90 €** | 29.3 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.90 € | **9.80 €** | 30.5 % | **29.1 %** | 9.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.40 € | **8.30 €** | 54.5 % | **52.7 %** | 8.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.20 €** | 11.3 % | **8.7 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.20 €** | 11.7 % | **9.1 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.30 €** | 31.5 % | **30.1 %** | 9.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.80 € | **4.70 €** | 23.1 % | **20.5 %** | 4.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.90 €** | 25.4 % | **23.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.30 € | **5.20 €** | 20.4 % | **18.1 %** | 5.29 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.70 € | **8.60 €** | 6.8 % | **5.6 %** | 8.69 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 110.00 € | **109.90 €** | 20.0 % | **19.9 %** | 109.96 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 103.00 € | **102.90 €** | 7.9 % | **7.8 %** | 102.96 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 125.00 € | **124.90 €** | 7.7 % | **7.6 %** | 124.99 € | stávame sa najlacnejší |

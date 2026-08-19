# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-19

Vstup: `premiumstoresk_20260819_1051.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **4187**
- Návrh **zvýšiť** cenu: **144** produktov
- Návrh **znížiť** cenu: **879** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **3164** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **200**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (144)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Roborock F25 | 313.90 € | **348.00 €** | 10.1 % | **22.1 %** | 313.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **145.50 €** | 15.0 % | **43.1 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TOUR ONE M3, Black | 265.00 € | **275.00 €** | 5.4 % | **9.3 %** | 265.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TOUR ONE M3, Latte | 265.00 € | **275.00 €** | 5.4 % | **9.3 %** | 265.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 CIR60430CB | 369.00 € | **373.50 €** | 5.8 % | **7.1 %** | 369.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **19.00 €** | 10.9 % | **41.5 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **561.00 €** | 6.6 % | **7.4 %** | 557.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BROTHER DCP-T730DW | 270.50 € | **274.50 €** | 13.4 % | **15.0 %** | 270.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E7K1-6BP | 66.90 € | **69.90 €** | 7.3 % | **12.2 %** | 66.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.50 € | **66.00 €** | 10.2 % | **14.5 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 46.90 € | **49.00 €** | 10.1 % | **15.0 %** | 46.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/4N/1 | 50.90 € | **53.00 €** | 10.0 % | **14.5 %** | 50.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.90 €** | 20.1 % | **45.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.60 € | **8.50 €** | 11.6 % | **43.7 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1-Ss | 130.50 € | **131.90 €** | 10.0 % | **11.2 %** | 130.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.7 % | **16.9 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **38.90 €** | 11.0 % | **15.1 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510Y žlutá | 37.50 € | **38.90 €** | 11.0 % | **15.1 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.40 € | **9.70 €** | 54.5 % | **78.4 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 36.90 € | **38.00 €** | 10.9 % | **14.2 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 284.50 € | **285.50 €** | 9.2 % | **9.6 %** | 284.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.50 € | **68.50 €** | 6.1 % | **7.7 %** | 67.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Carrera autodráha FIRST Spidey Web Spin | 31.50 € | **32.50 €** | 11.2 % | **14.7 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 55.00 € | **55.90 €** | 10.1 % | **11.9 %** | 55.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.00 € | **5.60 €** | 20.6 % | **35.1 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP Black | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP White | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **20.50 €** | 35.1 % | **38.4 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.00 € | **15.50 €** | 41.1 % | **45.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.00 € | **12.50 €** | 22.0 % | **27.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.00 € | **15.50 €** | 10.5 % | **14.1 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **14.50 €** | 29.0 % | **33.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 28.00 € | **28.50 €** | 36.1 % | **38.6 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.00 € | **27.50 €** | 32.0 % | **34.4 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RO7457EA | 191.00 € | **191.50 €** | 8.4 % | **8.7 %** | 191.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.50 € | **13.00 €** | 16.5 % | **21.2 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.00 € | **11.50 €** | 5.7 % | **10.5 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.00 € | **12.50 €** | 17.5 % | **22.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.00 € | **24.50 €** | 23.9 % | **26.5 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, vypínač,... | 10.00 € | **10.50 €** | 23.6 % | **29.7 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.00 € | **18.50 €** | 6.0 % | **9.0 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.00 € | **18.50 €** | 28.0 % | **31.6 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 60.00 € | **60.50 €** | 36.0 % | **37.2 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5S/1/4U | 48.50 € | **49.00 €** | 10.0 % | **11.2 %** | 48.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 116.50 € | **116.90 €** | 8.6 % | **9.0 %** | 116.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 116.50 € | **116.90 €** | 8.6 % | **9.0 %** | 116.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.50 € | **88.90 €** | 5.7 % | **6.2 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 71.50 € | **71.90 €** | 10.4 % | **11.0 %** | 71.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 169.50 € | **169.90 €** | 5.6 % | **5.9 %** | 169.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.50 € | **11.90 €** | 40.8 % | **45.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.50 € | **14.90 €** | 13.7 % | **16.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.50 € | **14.90 €** | 10.6 % | **13.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **16.90 €** | 32.2 % | **35.4 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 39.50 € | **39.90 €** | 15.0 % | **16.1 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.50 € | **16.90 €** | 23.9 % | **26.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.50 € | **17.90 €** | 31.5 % | **34.5 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.50 € | **54.90 €** | 37.3 % | **38.3 %** | 54.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.50 € | **21.90 €** | 22.3 % | **24.6 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.50 € | **45.90 €** | 40.3 % | **41.6 %** | 45.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.50 € | **16.90 €** | 29.7 % | **32.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.50 € | **41.90 €** | 33.6 % | **34.9 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 58.50 € | **58.90 €** | 34.7 % | **35.6 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.50 € | **17.90 €** | 30.6 % | **33.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.50 € | **55.90 €** | 35.5 % | **36.4 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.90 €** | 18.7 % | **20.3 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.6 % | **13.2 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 22dB | 18.50 € | **18.90 €** | 26.6 % | **29.3 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 17.50 € | **17.90 €** | 25.8 % | **28.7 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **19.90 €** | 36.8 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Boombox 3 BLACK | 307.50 € | **307.90 €** | 8.7 % | **8.9 %** | 307.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje RK4182PS4 | 319.50 € | **319.90 €** | 6.5 % | **6.6 %** | 319.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 24.3 % | **28.3 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 5.4 % | **8.7 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.20 € | **1.40 €** | 13.4 % | **32.4 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.90 € | **318.00 €** | 12.1 % | **12.1 %** | 317.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GI6432BSCWF | 318.90 € | **319.00 €** | 5.6 % | **5.6 %** | 318.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 25.8 % | **26.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 21.90 € | **22.00 €** | 28.8 % | **29.4 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.90 € | **23.00 €** | 38.6 % | **39.2 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 19.90 € | **20.00 €** | 24.1 % | **24.7 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.90 € | **25.00 €** | 22.4 % | **22.9 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 21.90 € | **22.00 €** | 28.3 % | **28.9 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **5.20 €** | 18.1 % | **20.4 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.70 €** | 38.0 % | **41.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.80 € | **6.90 €** | 32.6 % | **34.5 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.40 €** | 11.3 % | **13.9 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **4.70 €** | 33.6 % | **36.5 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.40 €** | 11.7 % | **14.3 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.30 € | **4.40 €** | 8.6 % | **11.1 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.70 €** | 48.4 % | **51.6 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.80 € | **5.90 €** | 42.9 % | **45.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.50 € | **1.60 €** | 28.4 % | **36.9 %** | 1.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.10 € | **3.20 €** | 27.9 % | **32.1 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.70 € | **1.80 €** | 22.3 % | **29.5 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.50 € | **3.60 €** | 12.5 % | **15.7 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.40 € | **3.50 €** | 10.1 % | **13.4 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.90 € | **2.00 €** | 17.0 % | **23.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **1.90 €** | 29.5 % | **36.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.80 € | **1.90 €** | 17.1 % | **23.6 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.90 € | **13.00 €** | 37.5 % | **38.5 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.90 € | **14.00 €** | 31.9 % | **32.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.80 € | **9.90 €** | 26.9 % | **28.2 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.00 € | **5.10 €** | 33.3 % | **35.9 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.00 € | **6.10 €** | 30.4 % | **32.6 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.90 € | **10.00 €** | 23.8 % | **25.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **10.00 €** | 44.2 % | **45.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.40 €** | 25.6 % | **26.9 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.20 € | **4.30 €** | 32.4 % | **35.5 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.20 € | **4.30 €** | 35.5 % | **38.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 8.60 € | **8.70 €** | 6.9 % | **8.2 %** | 8.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.40 € | **7.50 €** | 37.0 % | **38.9 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.50 € | **8.60 €** | 35.0 % | **36.6 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.20 € | **5.30 €** | 18.8 % | **21.0 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.50 € | **9.60 €** | 32.9 % | **34.3 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 11.8 % | **13.4 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 23.3 % | **25.4 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **14.00 €** | 10.6 % | **11.4 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 70.90 € | **71.00 €** | 17.4 % | **17.6 %** | 70.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (879)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| YAMAHA A-S3200 BLACK | 6799.00 € | **6002.00 €** | 23.8 % | **9.3 %** | 6002.47 € | stávame sa najlacnejší |
| YAMAHA R-N2000A BLACK | 3890.00 € | **3312.50 €** | 28.3 % | **9.3 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N2000A SILVER | 3890.00 € | **3312.50 €** | 27.9 % | **9.0 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N1000A BLACK | 1599.00 € | **1367.00 €** | 27.8 % | **9.3 %** | 1367.23 € | stávame sa najlacnejší |
| YAMAHA R-N1000A SILVER | 1599.00 € | **1367.00 €** | 24.2 % | **6.2 %** | 1367.23 € | stávame sa najlacnejší |
| Yamaha RX-A6A BLACK | 2799.00 € | **2576.00 €** | 18.7 % | **9.3 %** | 2576.04 € | stávame sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.50 €** | 64.7 % | **6.8 %** | 362.65 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2374.50 €** | 15.0 % | **6.6 %** | 2374.69 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **3020.50 €** | 15.0 % | **10.0 %** | 3020.71 € | stávame sa najlacnejší |
| Gorenje F49DPW | 309.00 € | **171.00 €** | 96.8 % | **8.9 %** | 171.30 € | stávame sa najlacnejší |
| GORENJE F4142PW | 359.00 € | **221.90 €** | 74.8 % | **8.0 %** | 222.00 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 479.00 € | **343.50 €** | 48.7 % | **6.7 %** | 343.70 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 309.00 € | **176.90 €** | 88.1 % | **7.7 %** | 177.00 € | stávame sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 1TB Black | 2885.50 € | **2754.50 €** | 10.0 % | **5.0 %** | 1650.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK619DA2XL4 | 599.00 € | **468.90 €** | 34.2 % | **5.1 %** | 469.00 € | stávame sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 512GB Silver | 2552.50 € | **2436.50 €** | 10.0 % | **5.0 %** | 1399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 512GB Black | 2552.50 € | **2436.50 €** | 10.0 % | **5.0 %** | 1410.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 512GB Blue | 2552.50 € | **2436.50 €** | 10.0 % | **5.0 %** | 1450.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **354.00 €** | 39.7 % | **6.3 %** | 354.05 € | stávame sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 256GB Silver | 2384.00 € | **2275.90 €** | 10.0 % | **5.0 %** | 1269.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 256GB Black | 2384.00 € | **2275.90 €** | 10.0 % | **5.0 %** | 1310.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 256GB Blue | 2384.00 € | **2275.90 €** | 10.0 % | **5.0 %** | 1320.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko ATP3100N | 159.00 € | **51.50 €** | 251.6 % | **13.9 %** | 51.80 € | stávame sa najlacnejší |
| Yamaha YHT-4960 BLACK | 899.00 € | **792.00 €** | 24.0 % | **9.3 %** | 792.22 € | stávame sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.50 €** | 16.8 % | **9.3 %** | 1543.60 € | stávame sa najlacnejší |
| YAMAHA NS-F51 BLACK 1 karton | 399.00 € | **298.90 €** | 45.9 % | **9.3 %** | 298.95 € | stávame sa najlacnejší |
| Gorenje W2PNA94A1W/CZ | 519.00 € | **420.50 €** | 29.7 % | **5.1 %** | 374.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 1TB Black | 2148.50 € | **2050.50 €** | 10.0 % | **5.0 %** | 1250.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 1TB White | 2148.50 € | **2050.50 €** | 10.0 % | **5.0 %** | 1280.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 1TB Black | 2036.50 € | **1943.90 €** | 10.0 % | **5.0 %** | 1003.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 1TB Silver | 2036.50 € | **1943.90 €** | 10.0 % | **5.0 %** | 1007.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 1TB Titan | 2036.50 € | **1943.90 €** | 10.0 % | **5.0 %** | 1015.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 1TB Blue | 2036.50 € | **1943.90 €** | 10.0 % | **5.0 %** | 1025.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFS26120XQ | 419.00 € | **328.00 €** | 36.6 % | **6.9 %** | 328.06 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3588.00 € | **3499.90 €** | 15.0 % | **12.2 %** | 3500.00 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **511.50 €** | 24.2 % | **6.1 %** | 511.63 € | stávame sa najlacnejší |
| YAMAHA A-S1200 BLACK | 2399.00 € | **2315.50 €** | 13.2 % | **9.3 %** | 2315.65 € | stávame sa najlacnejší |
| YAMAHA A-S1200 SILVER | 2399.00 € | **2315.50 €** | 13.1 % | **9.1 %** | 2315.65 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 369.00 € | **286.00 €** | 39.2 % | **7.9 %** | 286.40 € | stávame sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 512GB Black | 1816.50 € | **1733.90 €** | 10.0 % | **5.0 %** | 965.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 512GB White | 1816.50 € | **1733.90 €** | 10.0 % | **5.0 %** | 1030.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 512GB Titan | 1767.90 € | **1687.50 €** | 10.0 % | **5.0 %** | 840.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 512GB Blue | 1767.90 € | **1687.50 €** | 10.0 % | **5.0 %** | 849.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 512GB Silver | 1767.90 € | **1687.50 €** | 10.0 % | **5.0 %** | 850.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RK4182PW4 | 359.00 € | **281.00 €** | 36.1 % | **6.5 %** | 281.12 € | stávame sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 256GB Silver | 1633.90 € | **1559.50 €** | 10.0 % | **5.0 %** | 750.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 256GB Black | 1633.90 € | **1559.50 €** | 10.0 % | **5.0 %** | 755.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 256GB Titan | 1633.90 € | **1559.50 €** | 10.0 % | **5.0 %** | 755.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 256GB Blue | 1633.90 € | **1559.50 €** | 10.0 % | **5.0 %** | 757.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26+ 5G 512GB White | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 820.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26+ 5G 512GB Black | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 840.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 256GB Black | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 880.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 256GB Blue | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 890.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 256GB White | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 890.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 256GB Purple | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 900.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R4142PS | 319.00 € | **248.00 €** | 38.9 % | **8.0 %** | 248.20 € | stávame sa najlacnejší |
| Samsung Galaxy Z Flip7 5G 512GB Black | 1555.50 € | **1484.90 €** | 10.0 % | **5.0 %** | 940.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Flip7 5G 512GB Blue | 1555.50 € | **1484.90 €** | 10.0 % | **5.0 %** | 940.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 410090000 | 399.00 € | **330.00 €** | 29.2 % | **6.9 %** | 330.30 € | stávame sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **998.90 €** | 15.0 % | **7.7 %** | 999.00 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 8" (200/1200) | 765.50 € | **699.90 €** | 15.0 % | **5.2 %** | 699.95 € | stávame sa najlacnejší |
| Samsung Galaxy S26+ 5G 256GB Blue | 1374.50 € | **1311.90 €** | 10.0 % | **5.0 %** | 725.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26+ 5G 256GB Purple | 1374.50 € | **1311.90 €** | 10.0 % | **5.0 %** | 725.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26+ 5G 256GB White | 1374.50 € | **1311.90 €** | 10.0 % | **5.0 %** | 725.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality Falcon 2 Pro S 22W laserový gravírovací stroj | 819.50 € | **757.90 €** | 15.0 % | **6.4 %** | 758.00 € | stávame sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.90 €** | 15.0 % | **5.4 %** | 670.00 € | stávame sa najlacnejší |
| Samsung Galaxy S25 5G 512GB Light Blue | 1319.90 € | **1259.90 €** | 10.0 % | **5.0 %** | 672.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 512GB Dark Blue | 1319.90 € | **1259.90 €** | 10.0 % | **5.0 %** | 715.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 512GB Green | 1319.90 € | **1259.90 €** | 10.0 % | **5.0 %** | 715.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 512GB Silver | 1319.90 € | **1259.90 €** | 10.0 % | **5.0 %** | 770.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 5G 512GB Black | 1319.50 € | **1259.90 €** | 10.0 % | **5.0 %** | 705.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje W2PNEI84A1SW | 439.00 € | **379.50 €** | 35.3 % | **16.9 %** | 379.82 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **221.00 €** | 37.7 % | **9.1 %** | 221.46 € | stávame sa najlacnejší |
| Samsung Galaxy Z Flip7 FE 5G 256GB Black | 1217.90 € | **1162.50 €** | 10.0 % | **5.0 %** | 799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **347.00 €** | 22.9 % | **6.9 %** | 347.40 € | stávame sa najlacnejší |
| Samsung Galaxy Z Flip7 FE 5G 128GB Black | 1127.90 € | **1076.90 €** | 10.0 % | **5.0 %** | 610.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 680.50 € | **629.50 €** | 15.0 % | **6.4 %** | 629.66 € | stávame sa najlacnejší |
| Samsung Galaxy S25 5G 256GB Green | 1101.50 € | **1051.50 €** | 10.0 % | **5.0 %** | 565.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 637.90 € | **589.90 €** | 15.0 % | **6.4 %** | 589.94 € | stávame sa najlacnejší |
| 3D Tlačiareň Creality K1 MAX | 543.50 € | **497.00 €** | 15.0 % | **5.2 %** | 497.06 € | stávame sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **242.50 €** | 28.7 % | **8.0 %** | 242.90 € | stávame sa najlacnejší |
| Samsung Galaxy S25 5G 128GB Dark Blue | 1007.00 € | **961.50 €** | 10.0 % | **5.0 %** | 500.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 128GB Light Blue | 1007.00 € | **961.50 €** | 10.0 % | **5.0 %** | 505.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 128GB Silver | 1007.00 € | **961.50 €** | 10.0 % | **5.0 %** | 505.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 128GB Green | 1007.00 € | **961.50 €** | 10.0 % | **5.0 %** | 515.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE48S85H | 1001.90 € | **956.50 €** | 10.0 % | **5.0 %** | 680.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Geneinno T1 200m 4K UHD podvodný dron | 1966.50 € | **1921.90 €** | 15.0 % | **12.4 %** | 1922.00 € | stávame sa najlacnejší |
| Xiaomi 17T Pro 12/512GB Černá | 948.50 € | **905.50 €** | 10.0 % | **5.0 %** | 650.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17T Pro 12/512GB Modrá | 948.50 € | **905.50 €** | 10.0 % | **5.0 %** | 695.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 96.0 % | **11.9 %** | 57.23 € | stávame sa najlacnejší |
| Samsung S731 Galaxy S25 FE 256GB Navy | 933.50 € | **890.90 €** | 10.0 % | **5.0 %** | 475.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 595.50 € | **554.00 €** | 15.0 % | **7.0 %** | 554.05 € | stávame sa najlacnejší |
| Beko BDIN38646D | 535.00 € | **494.00 €** | 15.9 % | **7.0 %** | 494.30 € | stávame sa najlacnejší |
| YAMAHA NS-SW050 BLACK | 239.00 € | **198.50 €** | 31.5 % | **9.2 %** | 198.58 € | stávame sa najlacnejší |
| YAMAHA A-S701 BLACK | 849.00 € | **808.50 €** | 14.7 % | **9.3 %** | 808.61 € | stávame sa najlacnejší |
| Xiaomi 17T Pro 12/256GB Černá | 864.50 € | **824.90 €** | 10.1 % | **5.0 %** | 599.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lodica na návnadu FLYTEC V080 s lokalizátorom + baté... | 445.50 € | **406.90 €** | 15.0 % | **5.0 %** | 271.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung S731 Galaxy S25 FE 128GB Blue | 850.90 € | **812.50 €** | 10.0 % | **5.1 %** | 476.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MacBook Neo 8/256GB blush MHFH4CZ | 841.00 € | **802.90 €** | 10.0 % | **5.0 %** | 777.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17T 12/512GB Černá | 779.90 € | **744.50 €** | 10.0 % | **5.0 %** | 579.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 28.0 % | **9.2 %** | 204.08 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 24.9 % | **9.2 %** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 24.7 % | **9.0 %** | 244.20 € | stávame sa najlacnejší |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 532.90 € | **498.90 €** | 15.0 % | **7.7 %** | 499.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 983.90 € | **949.90 €** | 15.0 % | **11.0 %** | 950.00 € | stávame sa najlacnejší |
| YAMAHA NS-P41 BLACK | 329.00 € | **295.00 €** | 27.4 % | **14.3 %** | 295.30 € | stávame sa najlacnejší |
| Lodica na návnadu FLYTEC V030 s vyhľadávačom + batériou | 387.90 € | **354.50 €** | 15.0 % | **5.1 %** | 87.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F8 PRO 12/512GB Black | 730.90 € | **697.90 €** | 10.0 % | **5.0 %** | 538.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S880DBMKII 2.0 (biele) | 381.90 € | **348.90 €** | 15.0 % | **5.1 %** | 222.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 100 | 382.50 € | **349.90 €** | 15.0 % | **5.2 %** | 349.95 € | stávame sa najlacnejší |
| Xiaomi 17T 12/256GB Černá | 695.50 € | **663.90 €** | 10.0 % | **5.0 %** | 475.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE MAK 80/850 AZ-M | 361.00 € | **329.90 €** | 14.9 % | **5.0 %** | 329.95 € | stávame sa najlacnejší |
| Ultimea Skywave X60 Soundbar | 530.00 € | **498.90 €** | 15.0 % | **8.2 %** | 499.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, vonk... | 114.50 € | **83.50 €** | 44.1 % | **5.1 %** | 82.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6182PS4 | 359.00 € | **328.00 €** | 18.0 % | **7.8 %** | 328.11 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 279.00 € | **248.00 €** | 22.8 % | **9.1 %** | 248.37 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 399.50 € | **369.00 €** | 15.0 % | **6.2 %** | 369.22 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 439.00 € | **409.00 €** | 14.8 % | **6.9 %** | 409.40 € | stávame sa najlacnejší |
| Projektor Aurzen Eazze D1 Max | 346.00 € | **316.50 €** | 15.0 % | **5.2 %** | 207.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 793.90 € | **765.00 €** | 10.0 % | **6.0 %** | 765.20 € | stávame sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 417.50 € | **388.90 €** | 15.1 % | **7.2 %** | 389.00 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 377.50 € | **348.90 €** | 15.0 % | **6.3 %** | 349.00 € | stávame sa najlacnejší |
| Samsung A576 Galaxy A57 256GB Icy Blue | 634.00 € | **605.50 €** | 10.0 % | **5.1 %** | 346.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Flytec V803-Pro 5200mAh loď na návnadu | 321.00 € | **293.50 €** | 15.0 % | **5.2 %** | 87.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-V4A Black | 529.00 € | **501.50 €** | 15.2 % | **9.2 %** | 501.78 € | stávame sa najlacnejší |
| Samsung RB34C600CWW/EF | 593.50 € | **566.50 €** | 10.1 % | **5.1 %** | 458.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic SC-MAX3500 | 669.00 € | **642.00 €** | 11.8 % | **7.3 %** | 642.35 € | stávame sa najlacnejší |
| Samsung A576 Galaxy A57 128GB Gray | 566.50 € | **540.50 €** | 10.1 % | **5.0 %** | 291.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus T2 smart bike trainer | 615.90 € | **589.90 €** | 15.0 % | **10.2 %** | 590.00 € | stávame sa najlacnejší |
| Samsung A376 Galaxy A37 256GB Gray | 560.50 € | **534.90 €** | 10.1 % | **5.0 %** | 290.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 256GB Lavender | 560.50 € | **534.90 €** | 10.1 % | **5.0 %** | 294.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 256GB Green | 560.50 € | **534.90 €** | 10.1 % | **5.0 %** | 300.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 256GB White | 560.50 € | **534.90 €** | 10.1 % | **5.0 %** | 300.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP11 | 287.50 € | **262.90 €** | 14.9 % | **5.1 %** | 262.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 782.50 € | **757.90 €** | 15.0 % | **11.4 %** | 758.00 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 434.50 € | **409.90 €** | 15.0 % | **8.5 %** | 410.00 € | stávame sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **574.50 €** | 10.9 % | **6.4 %** | 574.88 € | stávame sa najlacnejší |
| YAMAHA CD-C603 SILVER | 599.00 € | **574.50 €** | 12.2 % | **7.6 %** | 574.88 € | stávame sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **378.90 €** | 15.0 % | **8.2 %** | 379.00 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 199.00 € | **175.50 €** | 22.9 % | **8.4 %** | 175.80 € | stávame sa najlacnejší |
| Reproduktory Edifier S360DB 2.1 (hnedé) | 359.50 € | **336.00 €** | 14.9 % | **7.4 %** | 336.36 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 928.50 € | **905.50 €** | 10.0 % | **7.3 %** | 905.67 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Cyberpad (modrý) | 473.90 € | **451.00 €** | 15.0 % | **9.4 %** | 451.50 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 912.50 € | **889.90 €** | 10.1 % | **7.3 %** | 889.92 € | stávame sa najlacnejší |
| Inteligentný cyklotrenažér Cycplus T2H | 407.50 € | **384.90 €** | 15.0 % | **8.6 %** | 385.00 € | stávame sa najlacnejší |
| GORENJE MO17E1W | 79.00 € | **56.90 €** | 46.3 % | **5.4 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.90 €** | 15.0 % | **5.2 %** | 239.00 € | stávame sa najlacnejší |
| Gorenje GV673B65 | 487.50 € | **465.50 €** | 10.1 % | **5.1 %** | 465.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 11.0 % | **9.3 %** | 1377.03 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Combo | 532.50 € | **510.50 €** | 15.0 % | **10.2 %** | 510.65 € | stávame sa najlacnejší |
| Gorenje NRS917E41X | 472.90 € | **451.50 €** | 10.0 % | **5.1 %** | 444.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 128GB White | 458.90 € | **437.90 €** | 10.1 % | **5.1 %** | 235.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 128GB Gray | 458.90 € | **437.90 €** | 10.1 % | **5.1 %** | 240.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotrenažér Cycplus T3 | 849.90 € | **828.90 €** | 15.0 % | **12.2 %** | 829.00 € | stávame sa najlacnejší |
| Rooma Espresso A7 bílá | 558.50 € | **537.50 €** | 10.0 % | **5.9 %** | 537.70 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 566.90 € | **546.00 €** | 10.1 % | **6.0 %** | 546.10 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1329.90 €** | 15.0 % | **13.3 %** | 1330.00 € | stávame sa najlacnejší |
| GORENJE TH60E3B | 99.00 € | **79.00 €** | 33.7 % | **6.7 %** | 79.20 € | stávame sa najlacnejší |
| UREVO FoldiMix 5L Pro elektrický bežecký pás (strieb... | 518.50 € | **498.90 €** | 15.0 % | **10.7 %** | 499.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 98.50 € | **78.90 €** | 44.0 % | **15.3 %** | 79.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 268.50 € | **249.00 €** | 15.0 % | **6.6 %** | 249.33 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Hi | 227.50 € | **208.00 €** | 14.9 % | **5.1 %** | 208.40 € | stávame sa najlacnejší |
| Samsung Mini LED UE50M70H | 413.90 € | **394.90 €** | 10.1 % | **5.0 %** | 390.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **68.90 €** | 43.8 % | **12.7 %** | 69.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 65.00 € | **46.00 €** | 58.6 % | **12.3 %** | 46.50 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 297.50 € | **278.90 €** | 15.0 % | **7.8 %** | 278.99 € | stávame sa najlacnejší |
| Gorenje GS541C10X | 387.90 € | **370.00 €** | 10.1 % | **5.0 %** | 370.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Rooma Espresso A6 bílá | 481.50 € | **464.00 €** | 10.0 % | **6.0 %** | 464.19 € | stávame sa najlacnejší |
| Gramofon KRUGER & MATZ TT-602 | 204.00 € | **186.90 €** | 14.9 % | **5.3 %** | 187.00 € | stávame sa najlacnejší |
| Samsung Mini LED UE43M70H | 379.50 € | **362.50 €** | 10.0 % | **5.1 %** | 359.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 691.50 € | **674.50 €** | 10.1 % | **7.4 %** | 674.58 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 276.00 € | **259.00 €** | 14.9 % | **7.9 %** | 259.28 € | stávame sa najlacnejší |
| Gorenje DE69CS | 514.50 € | **497.50 €** | 10.0 % | **6.4 %** | 497.79 € | stávame sa najlacnejší |
| Niceboy HIVE Beans Black | 34.90 € | **18.00 €** | 126.3 % | **16.7 %** | 18.11 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 195.50 € | **178.90 €** | 15.1 % | **5.3 %** | 179.00 € | stávame sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 279.50 € | **263.50 €** | 15.1 % | **8.5 %** | 263.76 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 199.50 € | **183.90 €** | 15.0 % | **6.0 %** | 184.00 € | stávame sa najlacnejší |
| Guzzanti GZ 235 | 458.50 € | **443.00 €** | 10.1 % | **6.4 %** | 443.01 € | stávame sa najlacnejší |
| Freestyle koloběžka NILS Extreme HS014 Pro | 174.50 € | **159.50 €** | 14.9 % | **5.1 %** | 150.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RR8589CE | 411.90 € | **397.00 €** | 10.1 % | **6.1 %** | 397.09 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 534.90 € | **520.00 €** | 10.0 % | **6.9 %** | 520.40 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 273.50 € | **258.90 €** | 15.0 % | **8.9 %** | 259.00 € | stávame sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **479.90 €** | 15.0 % | **11.6 %** | 480.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **409.90 €** | 15.0 % | **11.1 %** | 410.00 € | stávame sa najlacnejší |
| Homatics Box R Plus 4K Android TV - UHD multimediáln... | 169.50 € | **155.00 €** | 14.9 % | **5.1 %** | 135.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP09 s podpěrami na kliky | 169.00 € | **154.50 €** | 14.9 % | **5.0 %** | 139.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5XRCNA366HXB | 522.50 € | **508.00 €** | 10.0 % | **7.0 %** | 508.40 € | stávame sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 364.90 € | **350.50 €** | 10.0 % | **5.7 %** | 350.71 € | stávame sa najlacnejší |
| Vibrační plošina HMS SVP03 zlatá | 165.00 € | **150.90 €** | 15.0 % | **5.2 %** | 97.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **408.90 €** | 15.1 % | **11.2 %** | 409.00 € | stávame sa najlacnejší |
| Redmi Note 15 Pro 8/256GB Black | 295.50 € | **281.90 €** | 10.2 % | **5.1 %** | 234.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Crystal UHD UE65U8072H | 512.50 € | **498.90 €** | 10.1 % | **7.1 %** | 499.00 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 173.50 € | **159.90 €** | 14.9 % | **5.9 %** | 159.95 € | stávame sa najlacnejší |
| Vibrační plošina HMS SVP07 | 156.00 € | **142.50 €** | 15.0 % | **5.0 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 25m,... | 52.00 € | **38.50 €** | 43.2 % | **6.0 %** | 37.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 375.50 € | **362.00 €** | 10.0 % | **6.1 %** | 362.05 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **39.00 €** | 50.5 % | **11.8 %** | 39.16 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 240.50 € | **227.00 €** | 15.0 % | **8.6 %** | 227.23 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **158.50 €** | 14.8 % | **5.8 %** | 158.90 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 481.90 € | **468.50 €** | 10.0 % | **7.0 %** | 468.60 € | stávame sa najlacnejší |
| JBL Partybox Stage 320 | 432.00 € | **418.90 €** | 10.9 % | **7.6 %** | 419.00 € | stávame sa najlacnejší |
| Vibrační plošina HMS SVP02 červená | 152.50 € | **139.50 €** | 15.2 % | **5.4 %** | 111.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 22.6 % | **9.2 %** | 106.20 € | stávame sa najlacnejší |
| Homatics Box 4K Pro V2 AI-SR Google TV (USB 2.0, USB... | 192.50 € | **179.50 €** | 15.0 % | **7.2 %** | 179.90 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 343.50 € | **330.90 €** | 10.0 % | **6.0 %** | 330.98 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 182.50 € | **169.90 €** | 15.0 % | **7.0 %** | 169.95 € | stávame sa najlacnejší |
| Gorenje N62CS2XL4 | 447.50 € | **435.00 €** | 10.1 % | **7.0 %** | 435.10 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 455.50 € | **443.00 €** | 10.0 % | **7.0 %** | 443.20 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 62.00 € | **49.50 €** | 37.7 % | **10.0 %** | 49.90 € | stávame sa najlacnejší |
| Elektrický mlynček na kávu HiBREW G7 | 143.90 € | **131.50 €** | 15.1 % | **5.2 %** | 111.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freestyle koloběžka NILS Extreme HS024 PRO | 141.90 € | **129.50 €** | 15.2 % | **5.1 %** | 122.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 252.00 € | **239.90 €** | 14.9 % | **9.4 %** | 239.95 € | stávame sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 10.1 % | **7.0 %** | 413.60 € | stávame sa najlacnejší |
| CrockPot CSC062X | 169.00 € | **157.00 €** | 15.0 % | **6.8 %** | 157.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 76.50 € | **64.50 €** | 43.6 % | **21.1 %** | 64.90 € | stávame sa najlacnejší |
| Tefal GC774D | 265.90 € | **253.90 €** | 10.0 % | **5.1 %** | 173.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 723590000 | 338.50 € | **327.00 €** | 10.1 % | **6.4 %** | 327.29 € | stávame sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.00 € | **134.50 €** | 14.9 % | **5.8 %** | 134.90 € | stávame sa najlacnejší |
| ETA 051690000 | 75.99 € | **64.50 €** | 30.0 % | **10.3 %** | 64.58 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCR001CBK SmartLife | 133.90 € | **122.50 €** | 15.0 % | **5.2 %** | 83.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Krups EA201BE0 | 253.90 € | **242.50 €** | 10.1 % | **5.1 %** | 228.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 48.90 € | **37.50 €** | 43.9 % | **10.4 %** | 37.79 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 405.90 € | **394.50 €** | 10.0 % | **6.9 %** | 394.70 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z20 | 359.00 € | **347.90 €** | 15.0 % | **11.4 %** | 348.00 € | stávame sa najlacnejší |
| Samsung A175 Galaxy A17 128GB Black | 246.50 € | **235.50 €** | 10.1 % | **5.2 %** | 147.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Black | 240.50 € | **229.50 €** | 10.1 % | **5.1 %** | 183.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Glacier Blue | 240.50 € | **229.50 €** | 10.1 % | **5.1 %** | 185.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DI6421B | 395.50 € | **384.50 €** | 10.0 % | **6.9 %** | 384.70 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 339.50 € | **328.50 €** | 10.0 % | **6.5 %** | 328.82 € | stávame sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 59.50 € | **48.90 €** | 40.2 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| Rowenta RH20C0WO | 231.50 € | **220.90 €** | 10.1 % | **5.1 %** | 199.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook N15R Pro | 237.00 € | **226.50 €** | 10.0 % | **5.1 %** | 212.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 338 | 581.00 € | **570.50 €** | 10.0 % | **8.0 %** | 570.59 € | stávame sa najlacnejší |
| Concept IDV5160wh | 363.50 € | **353.00 €** | 10.1 % | **7.0 %** | 353.10 € | stávame sa najlacnejší |
| Whirlpool FFS 7469 W EE | 374.50 € | **364.00 €** | 10.1 % | **7.0 %** | 364.20 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Army 10x40 se zaměřo... | 118.90 € | **108.50 €** | 15.2 % | **5.1 %** | 108.79 € | stávame sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 555.90 € | **545.50 €** | 10.1 % | **8.0 %** | 545.74 € | stávame sa najlacnejší |
| MAXXO VM Profi | 109.00 € | **98.90 €** | 21.6 % | **10.4 %** | 99.00 € | stávame sa najlacnejší |
| Gorenje RB413EPS4 | 220.90 € | **210.90 €** | 10.2 % | **5.2 %** | 177.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL PF 610138 | 220.50 € | **210.50 €** | 10.1 % | **5.1 %** | 194.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP45 | 118.50 € | **108.50 €** | 15.1 % | **5.4 %** | 94.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 60/700 AZ2 | 157.50 € | **147.50 €** | 15.2 % | **7.8 %** | 147.53 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 279.90 € | **269.90 €** | 10.1 % | **6.2 %** | 269.98 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 169.90 € | **159.90 €** | 15.1 % | **8.3 %** | 160.00 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 357.50 € | **347.50 €** | 10.1 % | **7.0 %** | 347.60 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.15 € | stávame sa najlacnejší |
| TEFAL FR 495070 | 109.00 € | **99.00 €** | 21.5 % | **10.3 %** | 99.20 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 284.50 € | **274.50 €** | 10.0 % | **6.2 %** | 274.77 € | stávame sa najlacnejší |
| Měnič napětí EPever IPower IP2000-42-Plus-T 2000W 48V | 219.50 € | **209.50 €** | 15.0 % | **9.7 %** | 209.78 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 294.50 € | **284.50 €** | 10.1 % | **6.3 %** | 284.78 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 152.90 € | **143.00 €** | 15.1 % | **7.7 %** | 143.29 € | stávame sa najlacnejší |
| Orbitrek REBEL ACTIVE RBA-1011 | 143.90 € | **134.00 €** | 15.1 % | **7.2 %** | 134.38 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 51.1 % | **9.5 %** | 26.17 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 468.50 € | **458.90 €** | 9.0 % | **6.8 %** | 459.00 € | stávame sa najlacnejší |
| Vibrační plošina HMS SVP01 azurová | 110.00 € | **100.50 €** | 15.1 % | **5.1 %** | 85.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP01 červená | 110.00 € | **100.50 €** | 15.1 % | **5.1 %** | 85.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vibrační plošina HMS SVP01 zlatá | 110.00 € | **100.50 €** | 15.1 % | **5.1 %** | 85.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 14WQ LTE (UMM230242) | 210.50 € | **201.00 €** | 10.0 % | **5.0 %** | 186.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 427.00 € | **417.50 €** | 14.9 % | **12.4 %** | 417.60 € | stávame sa najlacnejší |
| Whirlpool W7F HP33 A | 347.00 € | **337.50 €** | 10.0 % | **7.0 %** | 337.60 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 424.50 € | **415.00 €** | 10.0 % | **7.6 %** | 415.21 € | stávame sa najlacnejší |
| Beko VRT96425VD | 261.50 € | **252.00 €** | 10.1 % | **6.1 %** | 252.29 € | stávame sa najlacnejší |
| Amica KF 17191 | 39.00 € | **29.50 €** | 60.1 % | **21.1 %** | 29.86 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 58.00 € | **48.50 €** | 43.5 % | **20.0 %** | 48.90 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 205.00 € | **195.50 €** | 14.9 % | **9.6 %** | 195.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 148.50 € | **139.00 €** | 15.0 % | **7.6 %** | 139.41 € | stávame sa najlacnejší |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 148.90 € | **139.50 €** | 15.1 % | **7.9 %** | 139.90 € | stávame sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **45.50 €** | 37.3 % | **13.8 %** | 45.80 € | stávame sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 50.86 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 29.90 € | **20.50 €** | 57.4 % | **7.9 %** | 20.89 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 332.90 € | **323.50 €** | 10.1 % | **7.0 %** | 323.72 € | stávame sa najlacnejší |
| Vibrační plošina ONE Fitness SVP08 | 105.90 € | **96.90 €** | 15.2 % | **5.4 %** | 69.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal NE858D38 | 194.90 € | **185.90 €** | 10.2 % | **5.1 %** | 185.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **279.90 €** | 15.0 % | **11.4 %** | 280.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM208T bílá | 121.90 € | **113.00 €** | 15.1 % | **6.7 %** | 113.32 € | stávame sa najlacnejší |
| JBL PartyBox Encore Essential 2 | 188.50 € | **179.90 €** | 10.2 % | **5.2 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AnyCubic Kobra 2 Pro 3D Printer | 207.00 € | **198.50 €** | 9.6 % | **5.1 %** | 184.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 172.00 € | **163.50 €** | 15.0 % | **9.3 %** | 163.56 € | stávame sa najlacnejší |
| GUZZANTI GZ 220A | 224.90 € | **216.50 €** | 10.2 % | **6.1 %** | 216.54 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM124T s kotoučovou brzdou fi... | 97.00 € | **88.90 €** | 15.0 % | **5.4 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM124T s kotoučovou brzdou ty... | 97.00 € | **88.90 €** | 15.0 % | **5.4 %** | 87.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **122.90 €** | 14.9 % | **7.8 %** | 123.00 € | stávame sa najlacnejší |
| Inteligentné okuliare BlitzWolf BW-AG1 Pro AI s vyme... | 94.90 € | **86.90 €** | 15.0 % | **5.3 %** | 73.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 47.50 € | **39.50 €** | 38.3 % | **15.0 %** | 39.90 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **14.00 €** | 70.9 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Tefal PF251835 | 163.50 € | **155.90 €** | 10.3 % | **5.2 %** | 129.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44GW | 205.50 € | **198.00 €** | 10.1 % | **6.1 %** | 198.25 € | stávame sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 232.50 € | **225.00 €** | 10.1 % | **6.5 %** | 225.37 € | stávame sa najlacnejší |
| Tefal GC750830 | 206.50 € | **199.00 €** | 10.2 % | **6.2 %** | 199.43 € | stávame sa najlacnejší |
| Gorenje W3NGPI74A3S | 266.90 € | **259.50 €** | 10.0 % | **7.0 %** | 259.84 € | stávame sa najlacnejší |
| Ručný bazénový vysávač WYBOT Hyson100 bezdrôtový | 86.00 € | **78.90 €** | 14.9 % | **5.5 %** | 66.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Black | 149.50 € | **142.50 €** | 10.3 % | **5.2 %** | 139.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1280T 2.0 (biele) | 83.90 € | **76.90 €** | 15.1 % | **5.5 %** | 75.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210A | 221.00 € | **214.00 €** | 10.0 % | **6.5 %** | 214.02 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 112.50 € | **105.50 €** | 15.0 % | **7.9 %** | 105.66 € | stávame sa najlacnejší |
| TV anténa Televes ELLIPSE LTE700 + 12V zdroj Picokom | 122.50 € | **115.50 €** | 15.2 % | **8.6 %** | 115.80 € | stávame sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 154.50 € | **147.50 €** | 10.2 % | **5.2 %** | 147.80 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP WL HD | 86.50 € | **79.50 €** | 15.1 % | **5.8 %** | 79.90 € | stávame sa najlacnejší |
| Ultimea Poseidon D70 Soundbar | 166.50 € | **159.50 €** | 15.1 % | **10.2 %** | 159.90 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 28.50 € | **21.50 €** | 58.5 % | **19.6 %** | 21.90 € | stávame sa najlacnejší |
| Zátěžová vesta HMS KOR20 20 kg | 87.00 € | **80.00 €** | 15.0 % | **5.8 %** | 80.50 € | stávame sa najlacnejší |
| Tesla GSM-LTE zesilovač/opakovač 900/1800 MHz - komp... | 190.90 € | **184.00 €** | 15.0 % | **10.9 %** | 184.13 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 194.90 € | **188.00 €** | 10.1 % | **6.2 %** | 188.22 € | stávame sa najlacnejší |
| Zelmer ZIR1505 | 31.90 € | **25.00 €** | 37.0 % | **7.4 %** | 25.47 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 48.90 € | **42.00 €** | 43.9 % | **23.6 %** | 42.50 € | stávame sa najlacnejší |
| Tefal NE477838 | 146.50 € | **139.90 €** | 10.0 % | **5.1 %** | 136.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **88.90 €** | 14.9 % | **6.9 %** | 89.00 € | stávame sa najlacnejší |
| JBL PartyBox 330 | 537.00 € | **530.50 €** | 6.4 % | **5.1 %** | 529.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8501A | 157.00 € | **150.50 €** | 10.0 % | **5.5 %** | 150.71 € | stávame sa najlacnejší |
| Maxxo Chamber Line 40 | 251.50 € | **245.00 €** | 10.1 % | **7.3 %** | 245.29 € | stávame sa najlacnejší |
| Tesla 32E325BH 32" HD LED TV | 134.50 € | **128.00 €** | 10.4 % | **5.1 %** | 128.30 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **34.50 €** | 38.3 % | **16.3 %** | 34.90 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.5 % | **9.2 %** | 18.67 € | stávame sa najlacnejší |
| Tefal NE553838 | 140.90 € | **134.50 €** | 10.1 % | **5.1 %** | 127.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 203.90 € | **197.50 €** | 10.2 % | **6.7 %** | 197.52 € | stávame sa najlacnejší |
| GORENJE WNHPI84AS/A | 355.00 € | **348.90 €** | 6.9 % | **5.1 %** | 340.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **327.90 €** | 15.0 % | **12.9 %** | 328.00 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM127 | 73.00 € | **66.90 €** | 14.9 % | **5.3 %** | 33.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM800 Fly růžová | 73.00 € | **66.90 €** | 14.9 % | **5.3 %** | 50.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM800 Fly zlatá | 73.00 € | **66.90 €** | 14.9 % | **5.3 %** | 66.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| Powerbank Baseus Blade 20000 mAh 100 W (čierna) | 72.50 € | **66.50 €** | 15.0 % | **5.5 %** | 64.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **424.90 €** | 15.0 % | **13.4 %** | 425.00 € | stávame sa najlacnejší |
| Candy CDPH 2D947X | 321.50 € | **315.50 €** | 10.1 % | **8.0 %** | 315.60 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 157.50 € | **151.50 €** | 10.1 % | **5.9 %** | 151.68 € | stávame sa najlacnejší |
| Guzzanti GZ 215RB | 310.50 € | **304.50 €** | 10.1 % | **7.9 %** | 304.70 € | stávame sa najlacnejší |
| Salente Smartdust | 138.50 € | **132.50 €** | 10.3 % | **5.5 %** | 132.73 € | stávame sa najlacnejší |
| Braun CG9043 | 219.00 € | **213.00 €** | 10.0 % | **7.0 %** | 213.28 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.50 €** | 15.2 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Leifheit Clean Twist M Ergo+náhr. Static | 46.90 € | **41.00 €** | 29.8 % | **13.5 %** | 41.29 € | stávame sa najlacnejší |
| Gorenje WPNEI72SA1SWIFI | 291.90 € | **286.00 €** | 10.1 % | **7.9 %** | 286.30 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 298.90 € | **293.00 €** | 10.1 % | **8.0 %** | 293.30 € | stávame sa najlacnejší |
| Candy ProWash 550 SLIM BP 37SBL8-S | 278.50 € | **272.90 €** | 10.1 % | **7.9 %** | 273.00 € | stávame sa najlacnejší |
| Candy TCA273D3-S | 286.50 € | **280.90 €** | 10.0 % | **7.9 %** | 281.00 € | stávame sa najlacnejší |
| TEFAL PF 210138 | 121.50 € | **115.90 €** | 10.3 % | **5.3 %** | 92.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 80.50 € | **74.90 €** | 15.1 % | **7.1 %** | 74.94 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 142.50 € | **136.90 €** | 10.0 % | **5.7 %** | 136.96 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 196.50 € | **190.90 €** | 10.1 % | **7.0 %** | 190.99 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **224.90 €** | 15.0 % | **12.2 %** | 225.00 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 156.00 € | **150.50 €** | 14.8 % | **10.8 %** | 150.61 € | stávame sa najlacnejší |
| Solární powerbanka OXE SPB33-B 33800 mAh | 104.50 € | **99.00 €** | 14.9 % | **8.8 %** | 99.13 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 38.50 € | **33.00 €** | 61.7 % | **38.6 %** | 33.14 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 678.00 € | **672.50 €** | 10.0 % | **9.1 %** | 672.69 € | stávame sa najlacnejší |
| Braun IS5247.VI | 188.50 € | **183.00 €** | 10.1 % | **6.9 %** | 183.29 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 27.00 € | **21.50 €** | 38.2 % | **10.1 %** | 21.90 € | stávame sa najlacnejší |
| Beko B3RCSO255S | 280.00 € | **274.50 €** | 10.0 % | **7.9 %** | 274.90 € | stávame sa najlacnejší |
| Ninja AF140EU Single Basket Pro 4,7l | 120.90 € | **115.50 €** | 10.1 % | **5.2 %** | 110.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM183 růžová | 64.90 € | **59.50 €** | 14.9 % | **5.4 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM183 zlatá | 64.90 € | **59.50 €** | 14.9 % | **5.4 %** | 56.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM183 tyrkysová | 64.90 € | **59.50 €** | 14.9 % | **5.4 %** | 59.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 118.90 € | **113.50 €** | 10.3 % | **5.3 %** | 113.70 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **114.50 €** | 11.3 % | **6.3 %** | 114.88 € | stávame sa najlacnejší |
| Ultima Apollo S70 Ultra Soundbar | 204.90 € | **199.50 €** | 15.0 % | **12.0 %** | 199.90 € | stávame sa najlacnejší |
| Beko BM3WFSU37213WB | 298.90 € | **293.50 €** | 10.0 % | **8.0 %** | 293.60 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 275.90 € | **270.50 €** | 10.0 % | **7.9 %** | 270.76 € | stávame sa najlacnejší |
| Oneisall 3L PF05 Inteligentný podávač krmiva pre dom... | 63.00 € | **57.90 €** | 14.9 % | **5.6 %** | 44.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stůl kempingový skládací Cattara 13481 BLED | 62.00 € | **56.90 €** | 15.0 % | **5.5 %** | 54.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 60.90 € | **55.90 €** | 15.0 % | **5.6 %** | 53.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.6 % | **16.4 %** | 24.10 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4APP (čierny) | 209.90 € | **204.90 €** | 15.1 % | **12.3 %** | 205.00 € | stávame sa najlacnejší |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 124.50 € | **119.50 €** | 14.9 % | **10.2 %** | 119.90 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **149.50 €** | 15.1 % | **11.4 %** | 149.90 € | stávame sa najlacnejší |
| Laserová vodováha Uni-T LM575LD | 126.00 € | **121.00 €** | 15.0 % | **10.4 %** | 121.49 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 36.00 € | **31.00 €** | 37.9 % | **18.8 %** | 31.50 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 250.90 € | **246.00 €** | 10.0 % | **7.9 %** | 246.40 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **11.00 €** | 56.1 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| Maxxo Chamber Line 70 | 359.90 € | **355.00 €** | 10.1 % | **8.6 %** | 355.49 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Street X-BASS KM... | 81.50 € | **76.90 €** | 15.1 % | **8.6 %** | 76.94 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 15.00 € | **10.50 €** | 53.2 % | **7.2 %** | 9.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 110G | 330.00 € | **325.50 €** | 10.0 % | **8.5 %** | 325.58 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 599.00 € | **594.50 €** | 10.0 % | **9.2 %** | 594.81 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 28.00 € | **23.50 €** | 38.4 % | **16.1 %** | 23.90 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 39.00 € | **34.50 €** | 41.4 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| Blesk GODOX TT600 | 81.50 € | **77.00 €** | 15.0 % | **8.7 %** | 77.50 € | stávame sa najlacnejší |
| Reproduktory Edifier R1100 2.0 (čierne) | 78.50 € | **74.00 €** | 15.0 % | **8.4 %** | 74.50 € | stávame sa najlacnejší |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 174.90 € | **170.50 €** | 15.0 % | **12.1 %** | 170.63 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM603 modrá | 50.90 € | **46.50 €** | 15.4 % | **5.4 %** | 40.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM0180 fialová | 52.90 € | **48.50 €** | 15.3 % | **5.7 %** | 43.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 růžová | 50.90 € | **46.50 €** | 15.4 % | **5.4 %** | 43.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM0180 zelená | 52.90 € | **48.50 €** | 15.3 % | **5.7 %** | 46.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 32.90 € | **28.50 €** | 38.9 % | **20.3 %** | 28.90 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **329.90 €** | 14.9 % | **13.5 %** | 330.00 € | stávame sa najlacnejší |
| Meteorologická stanice WS 6462 | 52.00 € | **47.90 €** | 14.8 % | **5.7 %** | 47.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 64.00 € | **59.90 €** | 15.1 % | **7.7 %** | 59.96 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **211.90 €** | 15.0 % | **12.8 %** | 212.00 € | stávame sa najlacnejší |
| Tefal FF2588E0 | 83.50 € | **79.50 €** | 10.3 % | **5.1 %** | 76.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 104.90 € | **100.90 €** | 10.1 % | **5.9 %** | 100.94 € | stávame sa najlacnejší |
| Electrolux MCK CZ | 29.90 € | **25.90 €** | 46.4 % | **26.8 %** | 25.95 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 23.90 € | **19.90 €** | 49.0 % | **24.1 %** | 20.00 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **528.90 €** | 15.0 % | **14.1 %** | 529.00 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 23.2 % | **11.5 %** | 38.17 € | stávame sa najlacnejší |
| Soundbar KRUGER & MATZ Planet 2.1 | 58.50 € | **54.50 €** | 15.0 % | **7.1 %** | 54.77 € | stávame sa najlacnejší |
| G3Ferrari G2014401 Zmrzlinovač | 178.50 € | **174.50 €** | 10.0 % | **7.6 %** | 174.78 € | stávame sa najlacnejší |
| Maxxo VM Chamber Line 90 | 572.50 € | **568.50 €** | 10.0 % | **9.2 %** | 568.79 € | stávame sa najlacnejší |
| Sony WFLS910NV fialová | 158.50 € | **154.50 €** | 10.2 % | **7.4 %** | 154.79 € | stávame sa najlacnejší |
| Tefal GV9812E0 | 335.00 € | **331.00 €** | 10.0 % | **8.7 %** | 331.30 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **82.50 €** | 15.2 % | **9.8 %** | 82.80 € | stávame sa najlacnejší |
| Nabíjačka SkyRC Q200neo | 126.90 € | **123.00 €** | 15.0 % | **11.4 %** | 123.07 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 178.90 € | **175.00 €** | 10.0 % | **7.6 %** | 175.19 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 181.90 € | **178.00 €** | 10.1 % | **7.7 %** | 178.19 € | stávame sa najlacnejší |
| SONOFF NSPanel Pro 120 Smart Control Panel Matter Wi... | 112.90 € | **109.00 €** | 15.1 % | **11.1 %** | 109.26 € | stávame sa najlacnejší |
| Gorenje GS541C10W | 344.50 € | **340.90 €** | 6.9 % | **5.8 %** | 341.00 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 modrá | 46.50 € | **42.90 €** | 14.6 % | **5.7 %** | 31.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM0106 oranžová | 43.50 € | **39.90 €** | 15.2 % | **5.7 %** | 29.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM1302 růžová | 46.50 € | **42.90 €** | 14.6 % | **5.7 %** | 33.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská koloběžka NILS Fun HLB09 LED tyrkysová | 42.50 € | **38.90 €** | 14.7 % | **5.0 %** | 30.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA Rukavice DBX BUSHIDO E1v9 XL | 40.50 € | **36.90 €** | 15.4 % | **5.1 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.90 € | **8.30 €** | 56.6 % | **9.2 %** | 8.34 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 19.50 € | **15.90 €** | 46.0 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| Tefal HB94L830 | 79.50 € | **75.90 €** | 10.2 % | **5.2 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DeerRun Q2 Mestský elektrický bežecký pás (čierny) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban (ružový) | 196.50 € | **192.90 €** | 15.0 % | **12.9 %** | 193.00 € | stávame sa najlacnejší |
| Dětská koloběžka NILS Fun HLB12 2v1 růžová | 44.00 € | **40.50 €** | 14.5 % | **5.4 %** | 37.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská koloběžka NILS Fun HLB02 růžová | 44.00 € | **40.50 €** | 14.4 % | **5.3 %** | 37.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9232I | 354.50 € | **351.00 €** | 6.2 % | **5.1 %** | 351.09 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 46.50 € | **43.00 €** | 14.6 % | **6.0 %** | 43.09 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **52.00 €** | 15.2 % | **7.9 %** | 52.17 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.50 € | **129.00 €** | 10.4 % | **7.4 %** | 129.18 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS DICROMAT 2+CR | 74.00 € | **70.50 €** | 14.6 % | **9.2 %** | 70.75 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 128.00 € | **124.50 €** | 10.1 % | **7.1 %** | 124.79 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer černý | 129.00 € | **125.50 €** | 10.0 % | **7.0 %** | 125.80 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer hnědý | 129.00 € | **125.50 €** | 10.0 % | **7.0 %** | 125.80 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 52.00 € | **48.50 €** | 15.0 % | **7.3 %** | 48.90 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 82.00 € | **78.50 €** | 13.4 % | **8.5 %** | 78.90 € | stávame sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 163.50 € | **160.00 €** | 15.1 % | **12.7 %** | 160.46 € | stávame sa najlacnejší |
| Športové okuliare ZEBLAZE Q01 Green AI | 67.50 € | **64.00 €** | 14.8 % | **8.8 %** | 64.50 € | stávame sa najlacnejší |
| Športové okuliare ZEBLAZE Q01 s umelou inteligenciou... | 67.50 € | **64.00 €** | 14.8 % | **8.8 %** | 64.50 € | stávame sa najlacnejší |
| TEFAL VC 140131 | 73.90 € | **70.50 €** | 10.1 % | **5.1 %** | 57.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 1535SS | 209.90 € | **206.50 €** | 10.1 % | **8.3 %** | 206.87 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.50 €** | 15.0 % | **9.3 %** | 65.90 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 46.90 € | **43.50 €** | 15.1 % | **6.7 %** | 43.64 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 35.90 € | **32.50 €** | 22.8 % | **11.2 %** | 32.85 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.90 € | **345.50 €** | 15.0 % | **13.9 %** | 345.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Haylou RS4 Plus (čierne) | 34.50 € | **31.50 €** | 15.3 % | **5.3 %** | 11.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská tříkolová koloběžka NILS Fun HLB15A mint s LED | 36.00 € | **33.00 €** | 14.6 % | **5.1 %** | 23.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal HT464138 | 67.50 € | **64.50 €** | 10.3 % | **5.4 %** | 55.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská tříkolová koloběžka NILS Fun HLB1310 s LED ze... | 40.50 € | **37.50 €** | 14.8 % | **6.3 %** | 35.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HD025 LED modrá | 34.50 € | **31.50 €** | 15.0 % | **5.0 %** | 29.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská tříkolová koloběžka NILS Fun HLB1310 s LED fi... | 40.50 € | **37.50 €** | 14.8 % | **6.3 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **118.00 €** | 14.9 % | **12.0 %** | 118.04 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **259.90 €** | 15.0 % | **13.7 %** | 260.00 € | stávame sa najlacnejší |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 74.50 € | **71.50 €** | 15.0 % | **10.4 %** | 71.67 € | stávame sa najlacnejší |
| Čistička vzduchu TEESA PURE LIFE P500 | 76.50 € | **73.50 €** | 15.0 % | **10.5 %** | 73.69 € | stávame sa najlacnejší |
| Vařič elektrický TEESA TSA0203 | 35.00 € | **32.00 €** | 14.9 % | **5.0 %** | 32.29 € | stávame sa najlacnejší |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 55.50 € | **52.50 €** | 14.8 % | **8.6 %** | 52.89 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **179.50 €** | 15.0 % | **13.2 %** | 179.90 € | stávame sa najlacnejší |
| Televes DAT BOSS LR 700 TFORCE LTE700 | 122.90 € | **120.00 €** | 15.0 % | **12.3 %** | 120.32 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **36.00 €** | 14.9 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 50.90 € | **48.00 €** | 15.4 % | **8.8 %** | 48.36 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 60.90 € | **58.00 €** | 15.0 % | **9.6 %** | 58.50 € | stávame sa najlacnejší |
| Gorenje RKI517E41 | 392.50 € | **389.90 €** | 10.0 % | **9.3 %** | 390.00 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit MINI ULTRA 5 pre CarPla... | 28.50 € | **25.90 €** | 15.9 % | **5.3 %** | 18.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská koloběžka NILS Fun HLB16 Deer | 32.50 € | **29.90 €** | 15.2 % | **6.0 %** | 26.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 20.50 € | **17.90 €** | 41.5 % | **23.5 %** | 18.00 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.90 €** | 56.5 % | **31.9 %** | 13.96 € | stávame sa najlacnejší |
| Gorenje R49CPW | 274.00 € | **271.50 €** | 6.0 % | **5.1 %** | 222.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 Gril EMS4253TBX | 262.00 € | **259.50 €** | 6.2 % | **5.1 %** | 248.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ruční šlehač ZHM2759 | 55.00 € | **52.50 €** | 10.1 % | **5.1 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HD120L fialová | 32.00 € | **29.50 €** | 14.9 % | **5.9 %** | 26.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 52.00 € | **49.50 €** | 14.9 % | **9.3 %** | 49.57 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.50 € | **124.00 €** | 10.2 % | **8.0 %** | 124.11 € | stávame sa najlacnejší |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 34.50 € | **32.00 €** | 14.4 % | **6.1 %** | 32.14 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 41.0 % | **26.6 %** | 22.20 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 31.50 € | **29.00 €** | 14.4 % | **5.3 %** | 29.22 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 144.50 € | **142.00 €** | 10.3 % | **8.4 %** | 142.30 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 24.50 € | **22.00 €** | 53.3 % | **37.7 %** | 22.34 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 91.50 € | **89.00 €** | 15.3 % | **12.1 %** | 89.39 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.00 €** | 10.4 % | **8.3 %** | 132.40 € | stávame sa najlacnejší |
| Beko VRT76325VW | 168.50 € | **166.00 €** | 10.0 % | **8.4 %** | 166.40 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 40.00 € | **37.50 €** | 14.8 % | **7.6 %** | 37.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.90 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 180.50 € | **178.00 €** | 10.3 % | **8.8 %** | 178.40 € | stávame sa najlacnejší |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 32.50 € | **30.00 €** | 14.6 % | **5.8 %** | 30.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 28.50 € | **26.00 €** | 53.4 % | **40.0 %** | 26.50 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **13.50 €** | 35.6 % | **14.4 %** | 13.85 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2+ 6ks | 26.99 € | **24.50 €** | 33.1 % | **20.8 %** | 24.60 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.99 € | **17.50 €** | 23.0 % | **7.7 %** | 17.60 € | stávame sa najlacnejší |
| Electrolux E200SM | 19.99 € | **17.50 €** | 35.7 % | **18.8 %** | 17.70 € | stávame sa najlacnejší |
| ETA 160390000 | 19.99 € | **17.50 €** | 26.4 % | **10.6 %** | 17.71 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **92.50 €** | 15.2 % | **12.3 %** | 92.72 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 179.90 € | **177.50 €** | 10.1 % | **8.6 %** | 177.80 € | stávame sa najlacnejší |
| Banquet Pekáč nepř.PREMIUM DB 39,5x22 | 51.90 € | **49.50 €** | 10.5 % | **5.4 %** | 39.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV5736E0 | 59.90 € | **57.50 €** | 10.1 % | **5.7 %** | 52.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.90 € | **34.50 €** | 17.5 % | **9.8 %** | 34.60 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.90 € | **34.50 €** | 17.8 % | **10.2 %** | 34.60 € | stávame sa najlacnejší |
| Freestyle koloběžka NILS Extreme HS033 černo-červená | 50.90 € | **48.50 €** | 15.4 % | **10.0 %** | 48.74 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 57.90 € | **55.50 €** | 16.3 % | **11.5 %** | 55.87 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **20.50 €** | 38.1 % | **23.6 %** | 20.90 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 27.00 € | **24.90 €** | 15.1 % | **6.2 %** | 24.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stativ pre fotoaparát NEEWER TP53 (základná verzia) | 25.90 € | **23.90 €** | 14.9 % | **6.0 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GT 110838 | 31.90 € | **29.90 €** | 12.7 % | **5.6 %** | 27.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 076 | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 42.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal MB450B38 | 42.50 € | **40.50 €** | 11.1 % | **5.9 %** | 38.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HD026 růžovo-modrá | 26.50 € | **24.50 €** | 15.6 % | **6.9 %** | 23.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AM - 187 zesilovač / UHF-BIII-DAB-FM / LTE700 | 26.50 € | **24.50 €** | 15.8 % | **7.0 %** | 24.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sekáček potravin TEESA TSA3227 | 22.90 € | **20.90 €** | 15.1 % | **5.1 %** | 20.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 71.90 € | **69.90 €** | 15.0 % | **11.8 %** | 69.95 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 37.90 € | **35.90 €** | 15.5 % | **9.4 %** | 35.97 € | stávame sa najlacnejší |
| Russell Hobbs 27011-56 | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 44.99 € | stávame sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 69.00 € | **67.00 €** | 12.2 % | **9.0 %** | 67.09 € | stávame sa najlacnejší |
| Garett ROSE Gold Solid Steel | 69.00 € | **67.00 €** | 12.2 % | **9.0 %** | 67.09 € | stávame sa najlacnejší |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 245.90 € | **243.90 €** | 15.0 % | **14.1 %** | 244.00 € | stávame sa najlacnejší |
| Waydoo Underwater scooter Subnado Lite | 320.90 € | **318.90 €** | 15.0 % | **14.3 %** | 319.00 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 33.50 € | **31.50 €** | 38.0 % | **29.7 %** | 31.62 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Baterie olověná  12V / 17Ah  VIPOW bezúdržbový akumu... | 32.50 € | **30.50 €** | 14.5 % | **7.5 %** | 30.63 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 162.50 € | **160.50 €** | 10.1 % | **8.7 %** | 160.70 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.00 € | **105.00 €** | 10.0 % | **8.0 %** | 105.21 € | stávame sa najlacnejší |
| DOMO DO42602S | 40.50 € | **38.50 €** | 11.3 % | **5.8 %** | 38.79 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 124.00 € | **122.00 €** | 15.0 % | **13.2 %** | 122.34 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 14.00 € | **12.00 €** | 52.8 % | **31.0 %** | 12.37 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 37.50 € | **35.50 €** | 39.3 % | **31.9 %** | 35.90 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.50 € | **63.50 €** | 20.1 % | **16.4 %** | 63.90 € | stávame sa najlacnejší |
| Automat na horkou vodu NEDIS KAWD100FBK / 2.5 l / ov... | 64.50 € | **62.50 €** | 15.0 % | **11.5 %** | 62.90 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.00 € | **169.00 €** | 10.0 % | **8.8 %** | 169.40 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.00 €** | 48.7 % | **28.9 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 116.90 € | **115.00 €** | 15.2 % | **13.3 %** | 115.05 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 159.90 € | **158.00 €** | 10.2 % | **8.9 %** | 158.20 € | stávame sa najlacnejší |
| Salente Combo-4In1 | 126.90 € | **125.00 €** | 10.0 % | **8.4 %** | 125.44 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 11.50 € | **9.60 €** | 57.1 % | **31.2 %** | 9.69 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 59.90 € | **58.00 €** | 14.9 % | **11.3 %** | 58.29 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 47.90 € | **46.00 €** | 15.3 % | **10.7 %** | 46.32 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 40.90 € | **39.00 €** | 38.1 % | **31.7 %** | 39.50 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 30.90 € | **29.00 €** | 14.8 % | **7.8 %** | 29.50 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **15.00 €** | 38.6 % | **23.1 %** | 15.50 € | stávame sa najlacnejší |
| Banquet Konvice smalt MAGNOLIA 3 l | 30.50 € | **28.90 €** | 11.6 % | **5.8 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterka Superfire L6-U – 1480 lm, 330 m, 5 režimov, ... | 18.50 € | **16.90 €** | 15.2 % | **5.2 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AI - 133 linkový zesilovač se 2 výstupy / G=24dB | 20.50 € | **18.90 €** | 15.1 % | **6.1 %** | 18.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s bazénovým čidlem GARNI 245P | 33.50 € | **31.90 €** | 15.4 % | **9.9 %** | 31.96 € | stávame sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 15.1 % | **6.1 %** | 18.98 € | stávame sa najlacnejší |
| Tefal B817S255 | 31.50 € | **29.90 €** | 11.1 % | **5.5 %** | 29.99 € | stávame sa najlacnejší |
| RUSSELL HOBBS 21395-56 | 53.50 € | **51.90 €** | 10.8 % | **7.5 %** | 51.99 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **11.90 €** | 55.2 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| TP-LINK RE205 AC750 WiFi Range Extender | 31.00 € | **29.50 €** | 10.8 % | **5.5 %** | 25.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Mlýnek na strouhanku 30,5cm | 23.50 € | **22.00 €** | 12.3 % | **5.1 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 101.50 € | **100.00 €** | 15.0 % | **13.3 %** | 100.04 € | stávame sa najlacnejší |
| EJEAS Q7 motorcycle intercom | 44.00 € | **42.50 €** | 14.4 % | **10.5 %** | 42.60 € | stávame sa najlacnejší |
| Niceboy PILOT S5 GPS + WIFI | 49.50 € | **48.00 €** | 10.9 % | **7.5 %** | 48.10 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.00 € | **38.50 €** | 10.1 % | **6.0 %** | 38.66 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 60.00 € | **58.50 €** | 15.1 % | **12.2 %** | 58.79 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **31.00 €** | 59.9 % | **52.6 %** | 31.29 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 121.00 € | **119.50 €** | 14.9 % | **13.5 %** | 119.79 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| Roadstar IR-390D+BT/BK | 60.50 € | **59.00 €** | 10.3 % | **7.6 %** | 59.30 € | stávame sa najlacnejší |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 23.50 € | **22.00 €** | 14.8 % | **7.5 %** | 22.33 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 27.50 € | **26.00 €** | 15.1 % | **8.8 %** | 26.39 € | stávame sa najlacnejší |
| Strong LEAP-UNA+, FHD GOOGLE TV STICK | 54.50 € | **53.00 €** | 10.2 % | **7.2 %** | 53.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 41.00 € | **39.50 €** | 48.6 % | **43.2 %** | 39.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **15.00 €** | 39.3 % | **26.6 %** | 15.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **32.00 €** | 14.6 % | **9.5 %** | 32.50 € | stávame sa najlacnejší |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 75.50 € | **74.00 €** | 15.1 % | **12.8 %** | 74.50 € | stávame sa najlacnejší |
| G3Ferrari G1015502 Mikrovlnná trouba | 117.90 € | **116.50 €** | 10.3 % | **9.0 %** | 116.85 € | stávame sa najlacnejší |
| Tefal FW402HE0 | 130.90 € | **129.50 €** | 10.3 % | **9.1 %** | 129.90 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 238.90 € | **237.50 €** | 12.5 % | **11.8 %** | 237.90 € | stávame sa najlacnejší |
| NEDIS ZBRC10WT chytré dálkové ovládání ZigBee | 15.90 € | **14.50 €** | 15.7 % | **5.5 %** | 14.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 6.60 € | **5.20 €** | 49.9 % | **18.1 %** | 5.29 € | stávame sa najlacnejší |
| Banquet Konvice smalt PARIS 2,2 l | 25.90 € | **24.50 €** | 11.1 % | **5.1 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Konvice smalt POPPY 2,2 l | 25.90 € | **24.50 €** | 11.1 % | **5.1 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530C Black | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 32.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-PE165 | 60.90 € | **59.50 €** | 10.3 % | **7.8 %** | 59.60 € | stávame sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.4 % | **5.8 %** | 26.61 € | stávame sa najlacnejší |
| Ariete ART 438/04 | 30.90 € | **29.50 €** | 11.0 % | **6.0 %** | 29.63 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 25.90 € | **24.50 €** | 15.4 % | **9.1 %** | 24.78 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.20 €** | 50.3 % | **31.7 %** | 9.29 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **6.60 €** | 55.5 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.40 € | **6.10 €** | 47.8 % | **21.9 %** | 6.20 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk GPS (sivé) | 43.00 € | **41.90 €** | 14.8 % | **11.8 %** | 42.00 € | stávame sa najlacnejší |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 28.00 € | **26.90 €** | 14.1 % | **9.6 %** | 27.00 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.70 € | **6.60 €** | 54.6 % | **32.5 %** | 6.69 € | stávame sa najlacnejší |
| Roborock Q10 PF čistiaci robot (čierny) | 219.00 € | **217.90 €** | 15.0 % | **14.4 %** | 218.00 € | stávame sa najlacnejší |
| Banquet Termohrnec AVANZA 5 l, bílá | 28.50 € | **27.50 €** | 10.8 % | **6.9 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Hrnec nepř. GRAN. PR 24x11cm | 26.50 € | **25.50 €** | 10.2 % | **6.0 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFA43BWBXC | 66.50 € | **65.50 €** | 7.1 % | **5.5 %** | 59.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termohrnec LAVENDER 3,5 l | 18.50 € | **17.50 €** | 12.6 % | **6.5 %** | 12.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BANQUET Mlýnek na kávu CULINARIA VIII | 15.90 € | **14.90 €** | 12.6 % | **5.5 %** | 10.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4297 Mia | 21.00 € | **20.00 €** | 10.4 % | **5.2 %** | 17.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá QCY Crossky C10 (čierne) | 15.50 € | **14.50 €** | 14.0 % | **6.7 %** | 13.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětská tříkolová koloběžka NILS Fun HLB1503 Space | 18.50 € | **17.50 €** | 14.1 % | **7.9 %** | 16.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal B8644474 | 21.50 € | **20.50 €** | 11.8 % | **6.6 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C100 WiFi camera | 23.90 € | **22.90 €** | 11.1 % | **6.4 %** | 22.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 52.00 € | **51.00 €** | 14.7 % | **12.5 %** | 51.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.40 € | **5.40 €** | 47.0 % | **24.0 %** | 5.41 € | stávame sa najlacnejší |
| Solight vonkajšia otočná IP kamera | 38.50 € | **37.50 €** | 42.7 % | **39.0 %** | 37.54 € | stávame sa najlacnejší |
| Ariete ART 2869/05 | 47.90 € | **46.90 €** | 10.6 % | **8.3 %** | 46.96 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 217.50 € | **216.50 €** | 10.1 % | **9.6 %** | 216.58 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.50 € | **19.50 €** | 14.8 % | **9.2 %** | 19.59 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.90 € | **27.90 €** | 15.7 % | **11.7 %** | 28.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E3S (čierny) | 187.90 € | **186.90 €** | 8.7 % | **8.1 %** | 187.00 € | stávame sa najlacnejší |
| Ariete ART 583/03 | 76.50 € | **75.50 €** | 10.3 % | **8.9 %** | 75.63 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Carrera Auto GO/GO+ 64120 Ford Mustang 1 | 14.50 € | **13.50 €** | 13.9 % | **6.0 %** | 13.66 € | stávame sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.50 €** | 10.5 % | **5.1 %** | 19.67 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.50 € | **39.50 €** | 10.1 % | **7.4 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 11.2 % | **6.3 %** | 21.70 € | stávame sa najlacnejší |
| Braun HF5050.IBK | 122.50 € | **121.50 €** | 10.4 % | **9.5 %** | 121.70 € | stávame sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.50 €** | 10.9 % | **7.1 %** | 28.70 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **113.50 €** | 10.4 % | **9.4 %** | 113.70 € | stávame sa najlacnejší |
| Maono G1 Neo Sound Card Black | 45.50 € | **44.50 €** | 14.8 % | **12.3 %** | 44.70 € | stávame sa najlacnejší |
| Dynamický mikrofon Maono PD200x (černý) | 49.00 € | **48.00 €** | 14.7 % | **12.4 %** | 48.23 € | stávame sa najlacnejší |
| ETA 210390000 | 41.50 € | **40.50 €** | 10.4 % | **7.7 %** | 40.75 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.7 % | **6.7 %** | 21.79 € | stávame sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 76.00 € | **75.00 €** | 10.1 % | **8.7 %** | 75.32 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0904 10000 mAh Li-pol | 14.50 € | **13.50 €** | 15.9 % | **7.9 %** | 13.82 € | stávame sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.50 €** | 14.2 % | **5.0 %** | 11.83 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 18.50 € | **17.50 €** | 11.8 % | **5.7 %** | 17.88 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.50 € | **233.50 €** | 10.2 % | **9.7 %** | 233.88 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 55.50 € | **54.50 €** | 14.8 % | **12.8 %** | 54.89 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 159.00 € | **158.00 €** | 14.8 % | **14.1 %** | 158.39 € | stávame sa najlacnejší |
| Fixed Creator Tripod FIXCRT-BK | 43.50 € | **42.50 €** | 10.5 % | **8.0 %** | 42.89 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.50 €** | 10.5 % | **9.3 %** | 98.90 € | stávame sa najlacnejší |
| Baterie olověná   6V /  7Ah  EMOS | 12.50 € | **11.50 €** | 14.3 % | **5.2 %** | 11.90 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **88.00 €** | 15.1 % | **13.8 %** | 88.50 € | stávame sa najlacnejší |
| Gorenje F49CPW | 194.90 € | **194.00 €** | 5.5 % | **5.0 %** | 180.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1019100 Horkovzdušná fritéza | 105.90 € | **105.00 €** | 10.3 % | **9.4 %** | 105.20 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **65.00 €** | 10.6 % | **9.1 %** | 65.29 € | stávame sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 117.90 € | **117.00 €** | 15.2 % | **14.3 %** | 117.36 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 14.17 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **2.60 €** | 53.0 % | **13.6 %** | 2.70 € | stávame sa najlacnejší |
| Zelmer ZHM2550 | 39.90 € | **39.00 €** | 28.9 % | **26.0 %** | 39.03 € | stávame sa najlacnejší |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.90 € | **36.00 €** | 10.4 % | **7.7 %** | 36.10 € | stávame sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.90 € | **18.00 €** | 15.4 % | **9.9 %** | 18.15 € | stávame sa najlacnejší |
| DOMO DO9192MC | 23.90 € | **23.00 €** | 10.0 % | **5.9 %** | 23.22 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.90 € | **20.00 €** | 10.8 % | **6.0 %** | 20.38 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **42.00 €** | 10.9 % | **8.6 %** | 42.41 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.90 € | **63.00 €** | 15.3 % | **13.7 %** | 63.42 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.90 € | **48.00 €** | 15.4 % | **13.3 %** | 48.46 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.90 € | **23.00 €** | 10.5 % | **6.4 %** | 23.49 € | stávame sa najlacnejší |
| Náhradné filtre pre fontánu PetKit Eversweet (5 ks) | 22.90 € | **22.00 €** | 14.8 % | **10.3 %** | 22.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.80 € | **9.10 €** | 48.4 % | **37.8 %** | 9.16 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely | 2.60 € | **1.90 €** | 48.9 % | **8.8 %** | 2.00 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.60 € | **2.90 €** | 48.6 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Banquet Termohrnec AVANZA 3,5 l, bílá | 20.50 € | **19.90 €** | 10.0 % | **6.8 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 29.50 € | **28.90 €** | 32.6 % | **29.9 %** | 28.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.50 € | **19.90 €** | 37.1 % | **33.0 %** | 19.96 € | stávame sa najlacnejší |
| Sati Fortissimo 1 kg zrno | 18.50 € | **17.90 €** | 11.3 % | **7.7 %** | 17.96 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (modré) | 45.50 € | **44.90 €** | 15.0 % | **13.4 %** | 44.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.99 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.20 € | **3.60 €** | 54.5 % | **32.4 %** | 3.67 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.70 € | **2.10 €** | 50.4 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Banquet Rendlík ner. MATTE NL 0,9 l | 15.50 € | **14.90 €** | 10.5 % | **6.3 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá ONIKUMA T209 | 12.50 € | **11.90 €** | 13.3 % | **7.9 %** | 8.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR009008 | 11.50 € | **10.90 €** | 13.9 % | **7.9 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.90 €** | 16.1 % | **10.6 %** | 11.92 € | stávame sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 11.94 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.70 €** | 42.7 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 10.96 € | stávame sa najlacnejší |
| G3ferrari G1018700 Multifunkční trouba | 144.50 € | **143.90 €** | 5.4 % | **5.0 %** | 143.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Portable Monitor Z1RC 16,0" | 118.50 € | **117.90 €** | 15.1 % | **14.5 %** | 117.95 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 73.50 € | **72.90 €** | 15.3 % | **14.3 %** | 73.00 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **104.90 €** | 10.5 % | **9.9 %** | 105.00 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **7.00 €** | 54.8 % | **44.4 %** | 7.03 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.5 % | **9.3 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.8 % | **9.6 %** | 24.04 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 4.30 € | **3.80 €** | 46.3 % | **29.3 %** | 3.85 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 10.3 % | **8.4 %** | 30.08 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.8 % | **9.9 %** | 19.08 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 12.2 % | **9.8 %** | 23.08 € | stávame sa najlacnejší |
| Fixed sluchátka Buds FIXBDS-BK | 21.50 € | **21.00 €** | 10.4 % | **7.8 %** | 21.08 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 14.50 € | **14.00 €** | 57.8 % | **52.4 %** | 14.09 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.30 €** | 48.9 % | **33.4 %** | 4.40 € | stávame sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **17.00 €** | 11.9 % | **8.7 %** | 17.13 € | stávame sa najlacnejší |
| LEIFHEIT 51016 | 50.50 € | **50.00 €** | 10.5 % | **9.4 %** | 50.13 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Black | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.13 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.13 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.13 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.13 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 14.50 € | **14.00 €** | 41.4 % | **36.5 %** | 14.20 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-BH-3A-W-WiFi | 30.50 € | **30.00 €** | 15.5 % | **13.7 %** | 30.20 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 12.3 % | **9.9 %** | 23.21 € | stávame sa najlacnejší |
| Leifheit Air Board M Compact | 55.50 € | **55.00 €** | 10.1 % | **9.1 %** | 55.24 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-EH-16A-W-WiFi | 30.50 € | **30.00 €** | 15.3 % | **13.4 %** | 30.25 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.5 % | **9.9 %** | 33.25 € | stávame sa najlacnejší |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **18.00 €** | 10.4 % | **7.4 %** | 18.25 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 12.00 € | **11.50 €** | 10.3 % | **5.7 %** | 11.75 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **17.50 €** | 15.0 % | **11.8 %** | 17.77 € | stávame sa najlacnejší |
| Prenosná pumpa Flextail Tiny Pump 2 (oranžová) | 22.50 € | **22.00 €** | 15.0 % | **12.4 %** | 22.27 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 12.1 % | **7.2 %** | 11.28 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.7 % | **8.3 %** | 16.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 14.2 % | **10.0 %** | 13.29 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 10.2 % | **8.5 %** | 33.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 10.2 % | **7.9 %** | 23.29 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.00 €** | 10.2 % | **9.7 %** | 110.30 € | stávame sa najlacnejší |
| DOMO DO9252I | 252.50 € | **252.00 €** | 8.1 % | **7.9 %** | 252.30 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 32.00 € | **31.50 €** | 10.1 % | **8.3 %** | 31.83 € | stávame sa najlacnejší |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 30.50 € | **30.00 €** | 9.5 % | **7.7 %** | 30.34 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.50 € | **30.00 €** | 14.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.50 € | **30.00 €** | 14.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 189.50 € | **189.00 €** | 7.1 % | **6.8 %** | 189.34 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.50 € | **22.00 €** | 31.4 % | **28.5 %** | 22.36 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 11.0 % | **7.7 %** | 16.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.7 % | **8.3 %** | 22.38 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 10.1 % | **8.2 %** | 29.38 € | stávame sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **16.00 €** | 15.8 % | **12.3 %** | 16.38 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.50 €** | 13.4 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Tester autobatérií UNI-T UT673A | 36.00 € | **35.50 €** | 14.4 % | **12.8 %** | 35.89 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 24.00 € | **23.50 €** | 17.9 % | **15.4 %** | 23.89 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 10.50 € | **10.00 €** | 19.9 % | **14.2 %** | 10.39 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.50 € | **48.00 €** | 10.9 % | **9.7 %** | 48.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161D | 66.50 € | **66.00 €** | 8.2 % | **7.3 %** | 66.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 32.50 € | **32.00 €** | 9.7 % | **8.0 %** | 32.39 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 208.00 € | **207.50 €** | 13.8 % | **13.5 %** | 207.89 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 44.50 € | **44.00 €** | 9.4 % | **8.2 %** | 44.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 58.00 € | **57.50 €** | 10.0 % | **9.1 %** | 57.89 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 46.50 € | **46.00 €** | 15.4 % | **14.2 %** | 46.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 472.00 € | **471.50 €** | 9.1 % | **9.0 %** | 471.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 541.50 € | **541.00 €** | 6.3 % | **6.2 %** | 541.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 96.50 € | **96.00 €** | 11.8 % | **11.3 %** | 96.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 60.00 € | **59.50 €** | 10.3 % | **9.3 %** | 59.89 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 44.50 € | **44.00 €** | 8.9 % | **7.7 %** | 44.39 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 77.00 € | **76.50 €** | 10.2 % | **9.5 %** | 76.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 75.00 € | **74.50 €** | 11.6 % | **10.9 %** | 74.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387S | 90.50 € | **90.00 €** | 12.2 % | **11.6 %** | 90.39 € | stávame sa najlacnejší |
| Tefal RK812110 | 106.00 € | **105.50 €** | 6.6 % | **6.1 %** | 105.89 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 285.00 € | **284.50 €** | 13.9 % | **13.7 %** | 284.89 € | stávame sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (bla | 453.50 € | **453.00 €** | 9.5 % | **9.4 %** | 453.39 € | stávame sa najlacnejší |
| Roborock Qrevo C Pro Black | 608.00 € | **607.50 €** | 5.5 % | **5.4 %** | 607.89 € | stávame sa najlacnejší |
| Salente R2 robotický vysavač | 96.00 € | **95.50 €** | 7.5 % | **6.9 %** | 95.89 € | stávame sa najlacnejší |
| Salente Rtx-R2 | 96.00 € | **95.50 €** | 7.5 % | **6.9 %** | 95.89 € | stávame sa najlacnejší |
| DOMO DO354VD | 131.00 € | **130.50 €** | 9.0 % | **8.5 %** | 130.89 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 267.50 € | **267.00 €** | 8.6 % | **8.4 %** | 267.39 € | stávame sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.89 € | stávame sa najlacnejší |
| DOMO DO42102SV | 99.00 € | **98.50 €** | 9.6 % | **9.0 %** | 98.89 € | stávame sa najlacnejší |
| PRIMO PR406IM | 126.00 € | **125.50 €** | 8.0 % | **7.6 %** | 125.89 € | stávame sa najlacnejší |
| Domo DO331L | 104.00 € | **103.50 €** | 7.4 % | **6.9 %** | 103.89 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 276.50 € | **276.00 €** | 7.9 % | **7.7 %** | 276.39 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.50 € | **37.00 €** | 9.9 % | **8.4 %** | 37.39 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.50 € | **26.00 €** | 11.4 % | **9.3 %** | 26.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 17.50 € | **17.00 €** | 33.6 % | **29.8 %** | 17.39 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 28.50 € | **28.00 €** | 15.3 % | **13.3 %** | 28.39 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.50 € | **45.00 €** | 14.7 % | **13.4 %** | 45.39 € | stávame sa najlacnejší |
| Kaon MZ-104, 4K satelitní přijímač | 114.50 € | **114.00 €** | 5.6 % | **5.1 %** | 114.39 € | stávame sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 62.50 € | **62.00 €** | 10.9 % | **10.0 %** | 62.39 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 38.50 € | **38.00 €** | 15.3 % | **13.8 %** | 38.39 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.50 € | **125.00 €** | 15.2 % | **14.7 %** | 125.39 € | stávame sa najlacnejší |
| Niceboy PILOT S10 Rear Cam | 24.50 € | **24.00 €** | 10.8 % | **8.6 %** | 24.40 € | stávame sa najlacnejší |
| Inteligentná žiarovka Yeelight W1 GU10 (Biela) | 16.00 € | **15.50 €** | 14.3 % | **10.7 %** | 15.90 € | stávame sa najlacnejší |
| Dotykový vypínač svetla ZigBee Avatto TS60-EU-W1 Sin... | 21.00 € | **20.50 €** | 15.0 % | **12.2 %** | 20.90 € | stávame sa najlacnejší |
| Fixed Pods Pro s ANC FIXPDS-P-BK | 39.50 € | **39.00 €** | 11.3 % | **9.9 %** | 39.40 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 238.50 € | **238.00 €** | 8.0 % | **7.7 %** | 238.40 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **12.00 €** | 46.0 % | **40.2 %** | 12.41 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **17.00 €** | 11.6 % | **8.4 %** | 17.41 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.42 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **10.00 €** | 13.4 % | **8.0 %** | 10.42 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.50 € | **23.00 €** | 36.9 % | **33.9 %** | 23.44 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 335.50 € | **335.00 €** | 6.5 % | **6.3 %** | 335.44 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 10.2 % | **8.7 %** | 36.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.46 € | stávame sa najlacnejší |
| Strong LEAP-S3 V2 Google TV box | 64.50 € | **64.00 €** | 11.4 % | **10.6 %** | 64.46 € | stávame sa najlacnejší |
| Roadstar TRA-1230/BK Kapesní FM rádio | 15.50 € | **15.00 €** | 12.5 % | **8.9 %** | 15.46 € | stávame sa najlacnejší |
| Gorenje R619EAW6 | 481.50 € | **481.00 €** | 6.9 % | **6.8 %** | 481.47 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.50 € | **23.00 €** | 30.5 % | **27.7 %** | 23.48 € | stávame sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **12.00 €** | 12.9 % | **8.4 %** | 12.49 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **36.00 €** | 10.9 % | **9.3 %** | 36.49 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **36.00 €** | 10.4 % | **8.9 %** | 36.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 21.8 % | **19.6 %** | 28.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **44.00 €** | 12.3 % | **11.0 %** | 44.49 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X12 | 17.50 € | **17.00 €** | 15.6 % | **12.3 %** | 17.49 € | stávame sa najlacnejší |
| Domo DO8719W | 69.90 € | **69.50 €** | 10.2 % | **9.5 %** | 69.67 € | stávame sa najlacnejší |
| CANDY CBT6130/3X | 64.90 € | **64.50 €** | 6.7 % | **6.1 %** | 64.71 € | stávame sa najlacnejší |
| JBL Grip Red | 81.90 € | **81.50 €** | 8.7 % | **8.1 %** | 81.76 € | stávame sa najlacnejší |
| JBL Grip White | 81.90 € | **81.50 €** | 8.7 % | **8.1 %** | 81.76 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 12.0 % | **11.6 %** | 113.79 € | stávame sa najlacnejší |
| ETA 745390000 | 124.90 € | **124.50 €** | 9.9 % | **9.6 %** | 124.80 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.50 €** | 9.7 % | **9.2 %** | 84.80 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 123.90 € | **123.50 €** | 6.8 % | **6.4 %** | 123.89 € | stávame sa najlacnejší |
| Fixed pouzdro Honor X8 5G FIXTOP-1009-BK | 12.90 € | **12.50 €** | 11.6 % | **8.1 %** | 12.57 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 14.2 % | **10.4 %** | 11.71 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.72 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.90 € | **10.50 €** | 10.8 % | **6.7 %** | 10.76 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 13.3 % | **9.5 %** | 11.79 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.50 €** | 16.5 % | **13.2 %** | 13.79 € | stávame sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 10.2 % | **7.3 %** | 14.88 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.10 € | **7.70 €** | 47.3 % | **40.0 %** | 7.80 € | stávame sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **21.50 €** | 11.6 % | **9.6 %** | 21.55 € | stávame sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.90 € | **17.50 €** | 11.7 % | **9.2 %** | 17.58 € | stávame sa najlacnejší |
| Ariete ART 438/05 | 29.90 € | **29.50 €** | 11.5 % | **10.0 %** | 29.63 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 11.1 % | **9.9 %** | 35.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.63 € | stávame sa najlacnejší |
| Cycplus G1 bicycle computer | 22.90 € | **22.50 €** | 15.1 % | **13.1 %** | 22.65 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.50 €** | 10.3 % | **9.5 %** | 58.67 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 30.90 € | **30.50 €** | 13.5 % | **12.0 %** | 30.73 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 30.90 € | **30.50 €** | 10.1 % | **8.7 %** | 30.75 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.9 % | **9.8 %** | 40.79 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.50 €** | 12.2 % | **9.5 %** | 16.79 € | stávame sa najlacnejší |
| Xiaomi Redmi Buds 8 Active Blue | 16.90 € | **16.50 €** | 11.5 % | **8.9 %** | 16.80 € | stávame sa najlacnejší |
| Xiaomi Redmi Buds 8 Active White | 16.90 € | **16.50 €** | 11.5 % | **8.9 %** | 16.80 € | stávame sa najlacnejší |
| ETA 321990020 | 55.90 € | **55.50 €** | 10.2 % | **9.4 %** | 55.83 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **41.50 €** | 15.1 % | **14.0 %** | 41.87 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.50 €** | 10.7 % | **9.4 %** | 32.88 € | stávame sa najlacnejší |
| Domo DO9195C | 32.90 € | **32.50 €** | 10.5 % | **9.1 %** | 32.88 € | stávame sa najlacnejší |
| Domo DO 9218 WK | 21.90 € | **21.50 €** | 10.4 % | **8.4 %** | 21.89 € | stávame sa najlacnejší |
| WYBOT C1 Pro – bezdrôtový robot na čistenie bazénov | 417.90 € | **417.50 €** | 5.6 % | **5.5 %** | 417.79 € | stávame sa najlacnejší |
| Beko HSM14540 | 284.90 € | **284.50 €** | 20.1 % | **19.9 %** | 284.84 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 365.90 € | **365.50 €** | 9.7 % | **9.6 %** | 365.87 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 4.90 € | **4.60 €** | 53.2 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.73 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.70 € | **5.40 €** | 47.6 % | **39.8 %** | 5.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.40 € | **9.20 €** | 9.8 % | **7.5 %** | 9.29 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.40 € | **9.20 €** | 21.1 % | **18.5 %** | 9.29 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.70 € | **7.50 €** | 54.6 % | **50.6 %** | 7.56 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.40 € | **5.20 €** | 20.0 % | **15.5 %** | 5.29 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.50 € | **6.30 €** | 28.0 % | **24.0 %** | 6.39 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.20 € | **7.00 €** | 23.0 % | **19.6 %** | 7.09 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 7.70 € | **7.50 €** | 26.2 % | **22.9 %** | 7.59 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.50 € | **2.30 €** | 34.6 % | **23.8 %** | 2.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 6.80 € | **6.60 €** | 16.9 % | **13.4 %** | 6.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 5.90 € | **5.70 €** | 12.3 % | **8.5 %** | 5.79 € | stávame sa najlacnejší |
| Solight zástrčka plochá priama, IP20, čierna | 0.90 € | **0.70 €** | 52.4 % | **18.6 %** | 0.80 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.70 € | **1.50 €** | 53.6 % | **35.5 %** | 1.56 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.20 €** | 52.4 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.90 € | **2.70 €** | 32.5 % | **23.3 %** | 2.79 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.70 € | **8.50 €** | 19.3 % | **16.5 %** | 8.59 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.60 € | **5.40 €** | 12.4 % | **8.4 %** | 5.49 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.60 € | **5.40 €** | 12.4 % | **8.4 %** | 5.49 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.70 € | **9.50 €** | 23.0 % | **20.5 %** | 9.59 € | stávame sa najlacnejší |
| Guzzanti GZ 256A | 386.00 € | **385.90 €** | 10.0 % | **10.0 %** | 385.97 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 503.00 € | **502.90 €** | 6.4 % | **6.4 %** | 502.99 € | stávame sa najlacnejší |
| Anemometer UNI-T UT363S | 28.00 € | **27.90 €** | 6.2 % | **5.8 %** | 27.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor jadrového žiarenia FNIRSI GC-02 | 41.00 € | **40.90 €** | 6.3 % | **6.0 %** | 40.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR177003 | 20.00 € | **19.90 €** | 7.2 % | **6.7 %** | 19.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BL16GE30 | 56.00 € | **55.90 €** | 5.6 % | **5.4 %** | 55.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 38.00 € | **37.90 €** | 6.8 % | **6.5 %** | 37.92 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 10.2 % | **10.0 %** | 47.96 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.97 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 64.00 € | **63.90 €** | 24.7 % | **24.5 %** | 63.98 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 46.00 € | **45.90 €** | 9.4 % | **9.1 %** | 45.99 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 45.00 € | **44.90 €** | 24.3 % | **24.0 %** | 44.99 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 24.00 € | **23.90 €** | 7.4 % | **7.0 %** | 23.99 € | stávame sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 23.00 € | **22.90 €** | 9.9 % | **9.4 %** | 22.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.40 € | **5.30 €** | 46.8 % | **44.1 %** | 5.31 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 6.20 € | **6.10 €** | 15.3 % | **13.5 %** | 6.19 € | stávame sa najlacnejší |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.40 € | **4.30 €** | 55.5 % | **52.0 %** | 4.39 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **3.00 €** | 16.1 % | **12.4 %** | 3.08 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.60 €** | 26.9 % | **22.2 %** | 2.69 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 6.50 € | **6.40 €** | 7.8 % | **6.2 %** | 6.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 2m | 5.10 € | **5.00 €** | 46.5 % | **43.6 %** | 5.03 € | stávame sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.30 € | **5.20 €** | 43.2 % | **40.5 %** | 5.25 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.8 % | **9.9 %** | 12.96 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 18W, E27, 4000K... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.29 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.80 € | **4.70 €** | 19.3 % | **16.9 %** | 4.79 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.90 € | **9.80 €** | 30.5 % | **29.1 %** | 9.89 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.90 € | **8.80 €** | 9.3 % | **8.1 %** | 8.89 € | stávame sa najlacnejší |
| Evolveo StrongVision PRO 4G, fotopast | 214.00 € | **213.90 €** | 5.2 % | **5.1 %** | 213.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 102.00 € | **101.90 €** | 12.4 % | **12.3 %** | 101.94 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **89.90 €** | 14.8 % | **14.7 %** | 89.99 € | stávame sa najlacnejší |

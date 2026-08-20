# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-20

Vstup: `premiumstoresk_20260820_2153.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **4499**
- Návrh **zvýšiť** cenu: **768** produktov
- Návrh **znížiť** cenu: **858** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **2873** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **235**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (768)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Roborock F25 | 313.50 € | **348.00 €** | 10.0 % | **22.1 %** | 313.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 290.50 € | **305.00 €** | 9.5 % | **14.9 %** | 305.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BROTHER DCP-T730DW | 262.50 € | **274.50 €** | 10.0 % | **15.0 %** | 270.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT161E | 108.50 € | **117.50 €** | 6.1 % | **14.9 %** | 108.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1-Ss | 130.00 € | **136.50 €** | 9.6 % | **15.1 %** | 130.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Súprava inteligentného solárneho vodného čerpadla s ... | 56.50 € | **62.50 €** | 15.1 % | **27.4 %** | 62.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Súprava na polievanie kvetín v črepníkoch RainPoint ... | 22.50 € | **27.50 €** | 15.4 % | **41.1 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 CIR60430CB | 368.90 € | **373.50 €** | 5.8 % | **7.1 %** | 369.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.50 € | **19.00 €** | 8.0 % | **41.5 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 556.90 € | **561.00 €** | 6.6 % | **7.4 %** | 557.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 55.90 € | **59.50 €** | 5.5 % | **12.3 %** | 59.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E7K1-6BP | 66.50 € | **69.90 €** | 6.7 % | **12.2 %** | 66.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.00 € | **41.00 €** | 37.7 % | **48.6 %** | 38.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.00 € | **66.00 €** | 9.3 % | **14.5 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Boombox 3 BLACK | 307.00 € | **309.90 €** | 8.5 % | **9.6 %** | 307.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 42.90 € | **45.50 €** | 14.6 % | **21.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **29.50 €** | 15.2 % | **26.3 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 46.50 € | **49.00 €** | 9.1 % | **15.0 %** | 46.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/4N/1 | 50.50 € | **53.00 €** | 9.1 % | **14.5 %** | 50.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 7.80 € | **10.00 €** | 6.8 % | **36.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 8.90 € | **10.90 €** | 18.8 % | **45.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.50 € | **8.50 €** | 9.9 % | **43.7 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.00 € | **16.00 €** | 6.8 % | **22.0 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 170.50 € | **172.50 €** | 12.0 % | **13.3 %** | 172.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.00 € | **31.90 €** | 9.9 % | **16.9 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.00 € | **38.90 €** | 9.5 % | **15.1 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510Y žlutá | 37.00 € | **38.90 €** | 9.5 % | **15.1 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 15.00 € | **16.50 €** | 23.9 % | **36.3 %** | 15.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 36.50 € | **38.00 €** | 9.7 % | **14.2 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 58.00 € | **59.50 €** | 11.2 % | **14.1 %** | 58.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 115.50 € | **116.90 €** | 7.7 % | **9.0 %** | 116.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 115.50 € | **116.90 €** | 7.7 % | **9.0 %** | 116.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 2m | 3.70 € | **5.00 €** | 6.3 % | **43.6 %** | 3.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TOUR ONE M3, Black | 264.90 € | **266.00 €** | 5.3 % | **5.8 %** | 265.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TOUR ONE M3, Latte | 264.90 € | **266.00 €** | 5.3 % | **5.8 %** | 265.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CBT6130/3X | 64.90 € | **66.00 €** | 6.7 % | **8.6 %** | 64.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 54.90 € | **55.90 €** | 9.9 % | **11.9 %** | 55.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 28.50 € | **29.50 €** | 28.1 % | **32.6 %** | 28.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP Black | 14.50 € | **15.50 €** | 9.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP White | 14.50 € | **15.50 €** | 9.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 26.50 € | **27.50 €** | 8.8 % | **12.9 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 54.50 € | **55.50 €** | 12.7 % | **14.8 %** | 55.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nočná lampička pre deti SuperFire RAB-02 Little Rabb... | 12.90 € | **13.90 €** | 16.3 % | **25.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Chytrá meteorologická stanice GARNI 925T | 160.00 € | **161.00 €** | 12.6 % | **13.3 %** | 161.06 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.00 € | **88.90 €** | 5.1 % | **6.2 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 71.00 € | **71.90 €** | 9.6 % | **11.0 %** | 71.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 169.00 € | **169.90 €** | 5.3 % | **5.9 %** | 169.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zátěžová vesta HMS KOR20 20 kg | 80.00 € | **80.90 €** | 5.7 % | **6.9 %** | 80.94 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.00 € | **11.90 €** | 34.7 % | **45.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.00 € | **13.90 €** | 30.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.00 € | **12.90 €** | 30.6 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.00 € | **10.90 €** | 9.4 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.00 € | **14.90 €** | 9.8 % | **16.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.00 € | **13.90 €** | 10.2 % | **17.8 %** | 13.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 39.00 € | **39.90 €** | 13.5 % | **16.1 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.00 € | **17.90 €** | 39.2 % | **46.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.00 € | **16.90 €** | 28.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.00 € | **16.90 €** | 20.1 % | **26.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.00 € | **17.90 €** | 27.7 % | **34.5 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.00 € | **54.90 €** | 36.0 % | **38.3 %** | 54.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.00 € | **21.90 €** | 19.5 % | **24.6 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.00 € | **45.90 €** | 38.8 % | **41.6 %** | 45.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.00 € | **16.90 €** | 25.8 % | **32.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.00 € | **41.90 €** | 32.0 % | **34.9 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 58.00 € | **58.90 €** | 33.5 % | **35.6 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.00 € | **17.90 €** | 26.9 % | **33.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.00 € | **55.90 €** | 34.2 % | **36.4 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.00 € | **29.90 €** | 16.7 % | **20.3 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.90 €** | 22.4 % | **25.7 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.00 € | **17.90 €** | 7.5 % | **13.2 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.00 € | **19.90 €** | 33.3 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 4.90 € | **5.60 €** | 18.2 % | **35.1 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 19.90 € | **20.50 €** | 34.4 % | **38.4 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 27.90 € | **28.50 €** | 35.7 % | **38.6 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 25.90 € | **26.50 €** | 33.9 % | **37.0 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 26.90 € | **27.50 €** | 31.5 % | **34.4 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 23.90 € | **24.50 €** | 23.4 % | **26.5 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 17.90 € | **18.50 €** | 5.5 % | **9.0 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 17.90 € | **18.50 €** | 27.3 % | **31.6 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 59.90 € | **60.50 €** | 35.8 % | **37.2 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 12.90 € | **13.50 €** | 8.9 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 14.90 € | **15.50 €** | 40.2 % | **45.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 11.90 € | **12.50 €** | 20.9 % | **27.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 14.90 € | **15.50 €** | 9.7 % | **14.1 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.90 € | **14.50 €** | 28.1 % | **33.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.90 € | **15.50 €** | 34.4 % | **39.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 12.90 € | **13.50 €** | 30.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 11.90 € | **12.50 €** | 16.6 % | **22.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna smart WIFI meteostanica | 97.90 € | **98.50 €** | 18.8 % | **19.6 %** | 98.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.00 € | **18.50 €** | 9.8 % | **12.8 %** | 18.15 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 16.00 € | **16.50 €** | 20.2 % | **24.0 %** | 16.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 819.00 € | **819.50 €** | 6.7 % | **6.8 %** | 819.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.00 € | **11.50 €** | 6.8 % | **11.7 %** | 11.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 103RB | 212.00 € | **212.50 €** | 7.3 % | **7.5 %** | 212.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 259.00 € | **259.50 €** | 7.8 % | **8.0 %** | 259.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla GSM-LTE zesilovač/opakovač 900/1800 MHz - komp... | 184.00 € | **184.50 €** | 10.8 % | **11.1 %** | 184.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 143.00 € | **143.50 €** | 7.6 % | **8.0 %** | 143.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 91.00 € | **91.50 €** | 32.7 % | **33.4 %** | 91.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sequential Shifter Moza Racing SGP RS059 | 134.00 € | **134.50 €** | 14.2 % | **14.6 %** | 134.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje W2PNEI84A1SW | 370.00 € | **370.50 €** | 14.0 % | **14.2 %** | 370.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 249.00 € | **249.50 €** | 6.6 % | **6.8 %** | 249.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 25.00 € | **25.50 €** | 37.3 % | **40.1 %** | 25.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 109A | 175.00 € | **175.50 €** | 5.9 % | **6.2 %** | 175.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skládací koloběžka NILS Extreme HM2009 šedá | 48.00 € | **48.50 €** | 8.7 % | **9.9 %** | 48.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter UNI-T UT118B | 27.00 € | **27.50 €** | 13.5 % | **15.6 %** | 27.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM40T | 30.00 € | **30.50 €** | 13.0 % | **14.9 %** | 30.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 236.00 € | **236.50 €** | 11.1 % | **11.3 %** | 236.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 28.00 € | **28.50 €** | 13.1 % | **15.2 %** | 28.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.00 € | **45.50 €** | 13.3 % | **14.6 %** | 45.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| REBEL Micropower 1000 | 89.00 € | **89.50 €** | 12.1 % | **12.7 %** | 89.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 26.00 € | **26.50 €** | 8.7 % | **10.8 %** | 26.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.50 € | **13.00 €** | 33.2 % | **38.5 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.50 € | **20.00 €** | 23.3 % | **26.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **14.00 €** | 28.1 % | **32.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.50 € | **318.00 €** | 11.9 % | **12.1 %** | 317.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 21.50 € | **22.00 €** | 26.5 % | **29.4 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.50 € | **38.00 €** | 30.3 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.50 € | **23.00 €** | 36.2 % | **39.2 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.50 € | **14.00 €** | 31.6 % | **36.5 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.50 € | **22.00 €** | 22.5 % | **25.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE SuChef | 82.50 € | **83.00 €** | 7.7 % | **8.4 %** | 82.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 235.00 € | **235.50 €** | 10.6 % | **10.9 %** | 235.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 19.50 € | **20.00 €** | 21.6 % | **24.7 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.50 € | **25.00 €** | 20.4 % | **22.9 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 21.50 € | **22.00 €** | 25.9 % | **28.9 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.50 € | **14.00 €** | 7.4 % | **11.4 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.50 € | **41.00 €** | 6.8 % | **8.2 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.00 € | **139.50 €** | 7.6 % | **8.0 %** | 139.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.00 € | **16.50 €** | 12.2 % | **15.7 %** | 16.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.00 € | **63.50 €** | 13.6 % | **14.5 %** | 63.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.00 € | **48.50 €** | 13.2 % | **14.4 %** | 48.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 37.50 € | **38.00 €** | 7.5 % | **8.9 %** | 37.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 865.00 € | **865.50 €** | 14.1 % | **14.1 %** | 865.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sekáček potravin TEESA TSA3227 | 21.00 € | **21.50 €** | 5.5 % | **8.0 %** | 21.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 56.00 € | **56.50 €** | 25.1 % | **26.2 %** | 56.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Motorcycle Intercom EJEAS MS20 | 127.00 € | **127.50 €** | 9.1 % | **9.5 %** | 127.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 30.00 € | **30.50 €** | 5.8 % | **7.5 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.00 € | **16.50 €** | 28.2 % | **32.2 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight projekčné hodiny s rádiom a budíkom | 20.00 € | **20.50 €** | 29.7 % | **32.9 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 19.00 € | **19.50 €** | 10.7 % | **13.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 22.00 € | **22.50 €** | 18.8 % | **21.5 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **17.50 €** | 39.2 % | **43.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal INGENIO Expertise sada 3 ks | 64.00 € | **64.50 €** | 6.8 % | **7.6 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 22.00 € | **22.50 €** | 10.2 % | **12.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 14.00 € | **14.50 €** | 21.2 % | **25.5 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.00 € | **13.50 €** | 28.4 % | **33.4 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.00 € | **19.50 €** | 31.5 % | **34.9 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 14.00 € | **14.50 €** | 21.1 % | **25.4 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.00 € | **16.50 €** | 31.7 % | **35.8 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 16.00 € | **16.50 €** | 8.9 % | **12.4 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 22.00 € | **22.50 €** | 27.4 % | **30.3 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.00 € | **10.50 €** | 28.8 % | **35.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.00 € | **31.50 €** | 34.8 % | **37.0 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.00 € | **25.50 €** | 34.2 % | **36.9 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 25.00 € | **25.50 €** | 29.9 % | **32.5 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 21.00 € | **21.50 €** | 19.0 % | **21.8 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 29.00 € | **29.50 €** | 42.5 % | **44.9 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevená vianočná hviezda, závesná, časov... | 10.00 € | **10.50 €** | 22.6 % | **28.8 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 14.00 € | **14.50 €** | 37.5 % | **42.4 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 12.00 € | **12.50 €** | 38.8 % | **44.6 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 10.00 € | **10.50 €** | 36.4 % | **43.2 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 12.00 € | **12.50 €** | 29.9 % | **35.3 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 13.00 € | **13.50 €** | 33.4 % | **38.6 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 34.00 € | **34.50 €** | 9.9 % | **11.5 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 12.00 € | **12.50 €** | 38.0 % | **43.7 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 13.00 € | **13.50 €** | 38.7 % | **44.0 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO42325PC | 102.00 € | **102.50 €** | 9.1 % | **9.6 %** | 102.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter digitálny V33 | 11.00 € | **11.50 €** | 35.9 % | **42.1 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 78.00 € | **78.50 €** | 6.3 % | **7.0 %** | 78.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.00 € | **24.50 €** | 33.3 % | **36.1 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 43.00 € | **43.50 €** | 38.4 % | **40.0 %** | 43.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.00 € | **19.50 €** | 28.3 % | **31.7 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 19.00 € | **19.50 €** | 28.3 % | **31.7 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 23.00 € | **23.50 €** | 31.0 % | **33.9 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC728D10 | 163.00 € | **163.50 €** | 5.6 % | **6.0 %** | 163.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC772830 | 220.00 € | **220.50 €** | 7.4 % | **7.6 %** | 220.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beper BEP-P206RAF200 | 29.00 € | **29.50 €** | 8.0 % | **9.9 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22280-56/RH | 61.00 € | **61.50 €** | 18.1 % | **19.0 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.00 € | **27.50 €** | 8.0 % | **10.0 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3ferrari G1018100 Horkovzdušná fritéza | 171.00 € | **171.50 €** | 6.4 % | **6.7 %** | 171.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Instant Pot Vortex Compact (5,0 L) | 97.00 € | **97.50 €** | 5.0 % | **5.6 %** | 97.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer horkovzdušná fritéza ZAF9230 | 172.00 € | **172.50 €** | 8.2 % | **8.5 %** | 172.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3T1-3ST | 30.00 € | **30.50 €** | 5.8 % | **7.6 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| KOMA RK01 - Univerzální rotační kartáč | 18.00 € | **18.50 €** | 11.9 % | **15.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BL87G831 | 123.00 € | **123.50 €** | 8.1 % | **8.6 %** | 123.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO344DH | 147.00 € | **147.50 €** | 8.3 % | **8.7 %** | 147.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 2957 | 40.00 € | **40.50 €** | 5.9 % | **7.3 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 367.00 € | **367.50 €** | 6.6 % | **6.7 %** | 367.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Icequeen-Wh | 19.00 € | **19.50 €** | 5.2 % | **8.0 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta GZ5436E0 | 289.00 € | **289.50 €** | 6.5 % | **6.7 %** | 289.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH 6756WO | 123.00 € | **123.50 €** | 7.7 % | **8.1 %** | 123.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo VM Compact | 40.00 € | **40.50 €** | 6.4 % | **7.8 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FV2839E0 | 33.00 € | **33.50 €** | 6.1 % | **7.7 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 1019.00 € | **1019.50 €** | 10.1 % | **10.1 %** | 1019.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anycubic Photon Mono M7 Pro 3D Printer | 429.00 € | **429.50 €** | 10.3 % | **10.4 %** | 429.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA R-N800A BLACK | 955.00 € | **955.50 €** | 7.2 % | **7.3 %** | 955.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 92.00 € | **92.50 €** | 10.7 % | **11.3 %** | 92.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 75.00 € | **75.50 €** | 7.0 % | **7.7 %** | 75.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2645.00 € | **2645.50 €** | 5.9 % | **5.9 %** | 2645.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.00 € | **30.50 €** | 29.6 % | **31.8 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.00 € | **12.50 €** | 25.1 % | **30.3 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| TV mount 26-60" Perlesmith PSMFK12 | 17.00 € | **17.50 €** | 8.0 % | **11.2 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 52.00 € | **52.50 €** | 8.0 % | **9.1 %** | 52.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LONGER RAY5 mini 2,5 W laserový gravírovací stroj | 92.00 € | **92.50 €** | 13.7 % | **14.3 %** | 92.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LONGER RAY5 mini 3,5 W laserový gravír | 103.00 € | **103.50 €** | 13.3 % | **13.8 %** | 103.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Colmi V69 smartwatch (black) | 39.00 € | **39.50 €** | 10.7 % | **12.1 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 32.00 € | **32.50 €** | 6.9 % | **8.6 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Colmi P86 (strieborné) | 20.00 € | **20.50 €** | 9.1 % | **11.9 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 89.00 € | **89.50 €** | 10.8 % | **11.4 %** | 89.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 89.00 € | **89.50 €** | 10.8 % | **11.4 %** | 89.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor na bicykel, Find My kompatibilný | 14.00 € | **14.50 €** | 27.9 % | **32.5 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zvuková karta Maono G1 Neo (biela) | 44.00 € | **44.50 €** | 12.5 % | **13.8 %** | 44.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 7S (čierny) | 181.00 € | **181.50 €** | 14.0 % | **14.3 %** | 181.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný 16,1" monitor Arzopa Z1FC Silver Gray | 113.00 € | **113.50 €** | 5.3 % | **5.7 %** | 113.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 14.00 € | **14.50 €** | 31.9 % | **36.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 21.00 € | **21.50 €** | 9.5 % | **12.1 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 16.00 € | **16.50 €** | 5.7 % | **9.0 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 26.00 € | **26.50 €** | 32.9 % | **35.5 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.00 € | **17.50 €** | 9.6 % | **12.8 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF MINI-ZB2GSL-EDvojkanálový nástenný spínač Zig... | 22.00 € | **22.50 €** | 8.6 % | **11.1 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.00 € | **22.50 €** | 11.2 % | **13.8 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 24.00 € | **24.50 €** | 9.0 % | **11.3 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 26.00 € | **26.50 €** | 9.4 % | **11.5 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa DarkFlash DS900WD (biela) | 47.00 € | **47.50 €** | 7.7 % | **8.9 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash M305 bez ventilátorov (č... | 19.00 € | **19.50 €** | 10.8 % | **13.7 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash Q15 | 16.00 € | **16.50 €** | 8.9 % | **12.3 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón Maono PD100X (čierny) | 34.00 € | **34.50 €** | 8.9 % | **10.5 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.00 € | **76.50 €** | 37.4 % | **38.3 %** | 76.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 123.00 € | **123.50 €** | 38.4 % | **38.9 %** | 123.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.00 € | **14.50 €** | 40.2 % | **45.2 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filtrácia CPL Freewell do DJI Air 3S | 17.00 € | **17.50 €** | 7.3 % | **10.5 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 24.00 € | **24.50 €** | 6.2 % | **8.4 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada 6 denných filtrov Freewell Standard pre DJI Flip | 25.00 € | **25.50 €** | 8.5 % | **10.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 42.00 € | **42.50 €** | 8.1 % | **9.4 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 42.00 € | **42.50 €** | 8.1 % | **9.4 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 11.00 € | **11.50 €** | 30.2 % | **36.1 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight projekčné hodiny s meteostanicou | 26.00 € | **26.50 €** | 37.0 % | **39.6 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky Clip C30S (červené) | 35.00 € | **35.50 €** | 10.5 % | **12.1 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 35.00 € | **35.50 €** | 10.5 % | **12.1 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 36.00 € | **36.50 €** | 10.4 % | **12.0 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA PrimeSound HQ-995X | 179.00 € | **179.50 €** | 8.3 % | **8.6 %** | 179.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LED lampa RGB Puluz pre fotoaparát PU560B | 15.00 € | **15.50 €** | 6.6 % | **10.2 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 20.00 € | **20.50 €** | 7.8 % | **10.5 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 16.00 € | **16.50 €** | 31.9 % | **36.1 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.00 € | **27.50 €** | 37.9 % | **40.4 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 22dB | 18.00 € | **18.50 €** | 23.2 % | **26.6 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 17.00 € | **17.50 €** | 22.2 % | **25.8 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic TPU (sivý) 1 kg | 20.00 € | **20.50 €** | 8.8 % | **11.6 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 21.00 € | **21.50 €** | 16.8 % | **19.6 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| EMEET SmartCam S600 webová kamera | 51.00 € | **51.50 €** | 12.4 % | **13.5 %** | 51.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| OBSBOT Tiny 3 MIC Combo | 468.00 € | **468.50 €** | 12.6 % | **12.7 %** | 468.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Webová kamera EMEET Piko (čierna) | 50.00 € | **50.50 €** | 12.7 % | **13.8 %** | 50.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 33.00 € | **33.50 €** | 9.6 % | **11.3 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 68.00 € | **68.50 €** | 11.7 % | **12.5 %** | 68.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 799.00 € | **799.50 €** | 14.2 % | **14.3 %** | 799.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Clutch Pedal Moza Racing CRP2 RS067 | 102.00 € | **102.50 €** | 10.9 % | **11.4 %** | 102.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant MOZA RACING CS Pro RS093 | 346.00 € | **346.50 €** | 9.6 % | **9.7 %** | 346.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný dávkovač krmiva CatLink F04 STD | 108.00 € | **108.50 €** | 13.0 % | **13.6 %** | 108.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sati Hansi Doux et Suave 1000g zrno | 22.00 € | **22.50 €** | 6.4 % | **8.9 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 650lm, Li-Ion | 16.00 € | **16.50 €** | 34.4 % | **38.6 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 14.00 € | **14.50 €** | 8.7 % | **12.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM0107 bílo-oranžová | 58.00 € | **58.50 €** | 9.5 % | **10.4 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterka Superfire TF02 | 63.00 € | **63.50 €** | 13.5 % | **14.4 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Latarka Superfire L3 P90 | 29.00 € | **29.50 €** | 11.5 % | **13.4 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5S/1/4U | 48.00 € | **48.50 €** | 8.9 % | **10.0 %** | 48.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje RK4182PS4 | 319.00 € | **319.50 €** | 6.3 % | **6.5 %** | 319.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LG GSXE90EVAD | 2198.00 € | **2198.50 €** | 9.0 % | **9.0 %** | 2198.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO RFSA240M43WN | 369.00 € | **369.50 €** | 5.5 % | **5.6 %** | 369.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GECS5C70XPA | 471.00 € | **471.50 €** | 6.9 % | **7.0 %** | 471.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica MI 446 TBIM | 526.00 € | **526.50 €** | 5.9 % | **6.0 %** | 526.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA MV 447 ADW | 411.00 € | **411.50 €** | 6.8 % | **7.0 %** | 411.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BDFS26046XQ | 315.00 € | **315.50 €** | 7.8 % | **7.9 %** | 315.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CHW6LBX/4U2 IDEA | 79.00 € | **79.50 €** | 5.8 % | **6.4 %** | 79.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 101.00 € | **101.50 €** | 13.8 % | **14.3 %** | 101.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 101.00 € | **101.50 €** | 7.0 % | **7.5 %** | 101.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 554.00 € | **554.50 €** | 6.9 % | **7.0 %** | 554.51 € | dobehnutie 2. najlacnejšieho konkurenta |
| Televes DAT BOSS LR 700 TFORCE LTE700 | 120.00 € | **120.50 €** | 12.3 % | **12.7 %** | 120.52 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 369.00 € | **369.50 €** | 6.1 % | **6.3 %** | 369.53 € | dobehnutie 2. najlacnejšieho konkurenta |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 122.00 € | **122.50 €** | 13.1 % | **13.6 %** | 122.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| Orbitrek REBEL ACTIVE RBA-1011 | 134.00 € | **134.50 €** | 7.1 % | **7.5 %** | 134.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 227.00 € | **227.50 €** | 8.5 % | **8.7 %** | 227.62 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 629.50 € | **630.00 €** | 6.3 % | **6.4 %** | 630.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 11.00 € | **11.50 €** | 5.7 % | **10.5 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačový list ELEGOO OrangeStorm Giga | 2678.50 € | **2678.90 €** | 13.8 % | **13.8 %** | 2678.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pohybové čidlo ORBIS DICROMAT 2+CR | 70.50 € | **70.90 €** | 9.1 % | **9.8 %** | 70.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.50 € | **195.90 €** | 9.9 % | **10.1 %** | 195.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R9 Pro (čierny) | 252.50 € | **252.90 €** | 6.4 % | **6.6 %** | 252.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete Pizzeria 927/01, černá | 205.50 € | **205.90 €** | 8.0 % | **8.2 %** | 205.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.50 € | **212.90 €** | 9.9 % | **10.1 %** | 212.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Army 10x40 se zaměřo... | 108.50 € | **108.90 €** | 5.0 % | **5.4 %** | 108.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM1000A | 133.50 € | **133.90 €** | 14.4 % | **14.7 %** | 133.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM600A | 90.50 € | **90.90 €** | 14.1 % | **14.6 %** | 90.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 207.50 € | **207.90 €** | 13.9 % | **14.1 %** | 207.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Mileseey D9 Pro s dosahom 100 m | 138.50 € | **138.90 €** | 13.8 % | **14.1 %** | 138.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 109.50 € | **109.90 €** | 19.5 % | **19.9 %** | 109.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZMM9802B | 128.50 € | **128.90 €** | 8.0 % | **8.3 %** | 128.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal FW501815 | 133.50 € | **133.90 €** | 7.7 % | **8.0 %** | 133.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO 221 SV | 120.50 € | **120.90 €** | 9.4 % | **9.8 %** | 120.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO228SV | 120.50 € | **120.90 €** | 9.1 % | **9.5 %** | 120.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 209.50 € | **209.90 €** | 13.8 % | **14.0 %** | 209.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Súprava celodenných filtrov Freewell Real Locking s ... | 219.50 € | **219.90 €** | 14.7 % | **14.9 %** | 219.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Armodd Prime 3 GPS Black - 9148 | 88.50 € | **88.90 €** | 5.3 % | **5.8 %** | 88.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Armodd Prime 3 GPS Gold - 9150 | 88.50 € | **88.90 €** | 5.3 % | **5.8 %** | 88.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Armodd Prime 3 GPS Rose Gold - 9151 | 88.50 € | **88.90 €** | 5.3 % | **5.8 %** | 88.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.50 € | **114.90 €** | 10.0 % | **10.4 %** | 114.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 82.50 € | **82.90 €** | 11.7 % | **12.2 %** | 82.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 70.50 € | **70.90 €** | 16.8 % | **17.4 %** | 70.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 102.50 € | **102.90 €** | 33.8 % | **34.3 %** | 102.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Philips TAR4600 Rádiobudík | 64.50 € | **64.90 €** | 7.1 % | **7.7 %** | 64.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 195.50 € | **195.90 €** | 9.5 % | **9.8 %** | 195.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier S351DB 2.1 (čierne) | 248.50 € | **248.90 €** | 10.7 % | **10.9 %** | 248.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 134.50 € | **134.90 €** | 5.7 % | **6.1 %** | 134.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Octagon SFX6018 S2 IP WL HD | 79.50 € | **79.90 €** | 5.7 % | **6.3 %** | 79.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Aura A50 Pro Soundbar | 129.50 € | **129.90 €** | 10.4 % | **10.7 %** | 129.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Lamp LED Neewer TL120C RGB | 203.50 € | **203.90 €** | 13.8 % | **14.1 %** | 203.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| AKAI AS005RA-750B Zesilovač 5.1 | 233.50 € | **233.90 €** | 7.8 % | **8.0 %** | 233.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 81.50 € | **81.90 €** | 8.5 % | **9.0 %** | 81.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BLUETOUCH Elektrický vysokozdvižný vozík | 248.50 € | **248.90 €** | 9.1 % | **9.2 %** | 248.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 86RR | 201.50 € | **201.90 €** | 7.7 % | **7.9 %** | 201.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy FIDC X602/CA IDEA | 167.50 € | **167.90 €** | 7.0 % | **7.3 %** | 167.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Měnič napětí EPever IPower IP2000-42-Plus-T 2000W 48V | 209.50 € | **209.90 €** | 9.6 % | **9.8 %** | 209.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti Uni-T A13T | 10.50 € | **10.90 €** | 11.3 % | **15.5 %** | 10.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbanka KRUGER & MATZ KM0904 10000 mAh Li-pol | 13.50 € | **13.90 €** | 7.8 % | **11.0 %** | 13.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 10.50 € | **10.90 €** | 26.3 % | **31.1 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 12.50 € | **12.90 €** | 21.4 % | **25.3 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná   6V /  7Ah  EMOS | 11.50 € | **11.90 €** | 5.1 % | **8.7 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 14.50 € | **14.90 €** | 30.1 % | **33.7 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 15.50 € | **15.90 €** | 27.8 % | **31.1 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.20 € | **4.60 €** | 35.5 % | **48.4 %** | 4.24 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freestyle koloběžka NILS Extreme HS033 černo-červená | 48.50 € | **48.90 €** | 9.9 % | **10.8 %** | 48.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Soundbar KRUGER & MATZ Planet 2.1 | 54.50 € | **54.90 €** | 7.1 % | **7.8 %** | 54.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal HT310838 | 27.50 € | **27.90 €** | 9.1 % | **10.7 %** | 27.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM60T | 32.50 € | **32.90 €** | 12.6 % | **14.0 %** | 32.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 52.50 € | **52.90 €** | 8.6 % | **9.4 %** | 52.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.50 € | **20.90 €** | 35.1 % | **37.7 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 22.50 € | **22.90 €** | 30.3 % | **32.6 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 49.50 € | **49.90 €** | 62.0 % | **63.3 %** | 49.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 39.50 € | **39.90 €** | 36.5 % | **37.9 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 21.50 € | **21.90 €** | 35.3 % | **37.8 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 38.50 € | **38.90 €** | 26.2 % | **27.5 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stropné svietidlo Yeelight C2201C300 | 41.50 € | **41.90 €** | 5.6 % | **6.6 %** | 41.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 16.50 € | **16.90 €** | 35.0 % | **38.2 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 23.50 € | **23.90 €** | 37.2 % | **39.5 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 17.50 € | **17.90 €** | 41.4 % | **44.7 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 17.50 € | **17.90 €** | 41.4 % | **44.7 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 16.50 € | **16.90 €** | 41.1 % | **44.5 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 21.50 € | **21.90 €** | 5.2 % | **7.2 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 16.50 € | **16.90 €** | 41.1 % | **44.5 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 26.50 € | **26.90 €** | 32.3 % | **34.3 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.50 € | **21.90 €** | 33.6 % | **36.1 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE R 506 E | 63.50 € | **63.90 €** | 8.5 % | **9.2 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 39.50 € | **39.90 €** | 32.3 % | **33.6 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Automat na horkou vodu NEDIS KAWD100FBK / 2.5 l / ov... | 62.50 € | **62.90 €** | 11.4 % | **12.1 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 1548/04 | 28.50 € | **28.90 €** | 8.0 % | **9.5 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ariete ART 1548/05 | 28.50 € | **28.90 €** | 8.0 % | **9.5 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.50 € | **20.90 €** | 36.4 % | **39.0 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 28.50 € | **28.90 €** | 7.1 % | **8.6 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TV mount 26-60" Perlesmith PSMFK1-EU | 16.50 € | **16.90 €** | 5.5 % | **8.0 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 34.50 € | **34.90 €** | 36.7 % | **38.3 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Eldonex EWS-1010-BK meteostanice | 37.50 € | **37.90 €** | 6.5 % | **7.6 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.50 € | **26.90 €** | 33.2 % | **35.2 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 26.50 € | **26.90 €** | 7.5 % | **9.1 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Albrecht DR 54 | 62.50 € | **62.90 €** | 7.1 % | **7.8 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 31.50 € | **31.90 €** | 11.2 % | **12.6 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fotoštúdio Puluz 40 cm LED 2400 lúmenov PU5040EU | 36.50 € | **36.90 €** | 10.4 % | **11.6 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 46.50 € | **46.90 €** | 13.4 % | **14.3 %** | 46.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo VM Chamber Line 90 | 564.50 € | **564.90 €** | 8.5 % | **8.5 %** | 564.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje WG894A25 | 499.50 € | **499.90 €** | 9.0 % | **9.1 %** | 499.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier R2850DB 2.0 (čierne) | 268.50 € | **268.90 €** | 9.8 % | **10.0 %** | 268.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| iRobot Roomba Plus 515 Combo + Dock (bla | 436.50 € | **436.90 €** | 5.4 % | **5.5 %** | 436.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Creality Hi Combo | 324.50 € | **324.90 €** | 5.4 % | **5.6 %** | 324.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo LED800 antracit | 299.50 € | **299.90 €** | 6.5 % | **6.6 %** | 299.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo LED800 bílý | 299.50 € | **299.90 €** | 6.5 % | **6.6 %** | 299.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje RK58DPB4I | 293.50 € | **293.90 €** | 7.9 % | **8.0 %** | 293.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje FN619EAW6 | 543.50 € | **543.90 €** | 5.9 % | **6.0 %** | 543.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy BR 10N3BX-S | 487.50 € | **487.90 €** | 9.8 % | **9.9 %** | 487.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| AMICA SIS 512 TCX | 503.50 € | **503.90 €** | 6.7 % | **6.7 %** | 503.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CCGMEE9025PX/E | 798.50 € | **798.90 €** | 7.9 % | **7.9 %** | 798.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool C WD 84M WBS CZ | 638.50 € | **638.90 €** | 6.8 % | **6.9 %** | 638.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EEG69405L | 633.50 € | **633.90 €** | 5.9 % | **6.0 %** | 633.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GI6432BSCWF | 318.50 € | **318.90 €** | 5.4 % | **5.6 %** | 318.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CA6 NP5B3HTX | 340.50 € | **340.90 €** | 6.9 % | **7.0 %** | 340.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool OMSR58CU1SX | 329.50 € | **329.90 €** | 5.5 % | **5.6 %** | 329.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 449.50 € | **449.90 €** | 6.7 % | **6.8 %** | 449.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.20 € | **9.50 €** | 24.2 % | **28.3 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.40 € | **3.70 €** | 9.3 % | **18.9 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.30 € | **3.60 €** | 6.9 % | **16.6 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.80 € | **2.10 €** | 10.9 % | **29.3 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.70 € | **3.00 €** | 31.4 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.20 € | **6.50 €** | 22.3 % | **28.3 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.80 € | **6.10 €** | 21.2 % | **27.5 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.70 € | **9.90 €** | 25.6 % | **28.2 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.20 € | **8.40 €** | 40.4 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.00 € | **5.20 €** | 15.8 % | **20.4 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.50 € | **4.70 €** | 35.0 % | **41.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.20 € | **5.40 €** | 40.0 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.10 € | **4.30 €** | 29.2 % | **35.5 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.40 € | **1.60 €** | 19.8 % | **36.9 %** | 1.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.50 € | **2.70 €** | 27.0 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.00 € | **3.20 €** | 23.8 % | **32.1 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.10 € | **4.30 €** | 32.3 % | **38.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.30 € | **7.50 €** | 35.2 % | **38.9 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.40 €** | 8.7 % | **13.9 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.70 €** | 30.7 % | **36.5 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.10 € | **5.30 €** | 16.5 % | **21.0 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.20 € | **4.40 €** | 6.0 % | **11.1 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.50 € | **7.70 €** | 35.2 % | **38.8 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.30 € | **3.50 €** | 26.6 % | **34.2 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.70 € | **5.90 €** | 40.4 % | **45.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.50 € | **7.70 €** | 40.5 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 5.4 % | **8.7 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 0.90 € | **1.10 €** | 10.9 % | **35.5 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.00 € | **1.20 €** | 16.1 % | **39.4 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.60 € | **1.80 €** | 15.1 % | **29.5 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.70 € | **1.90 €** | 10.6 % | **23.6 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.20 € | **1.40 €** | 13.4 % | **32.4 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.00 € | **9.20 €** | 36.3 % | **39.3 %** | 9.04 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.80 € | **10.00 €** | 36.0 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., vypínač, 1 režim | 4.90 € | **5.10 €** | 30.6 % | **35.9 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 5.90 € | **6.10 €** | 28.3 % | **32.6 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.80 € | **10.00 €** | 22.6 % | **25.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.80 € | **10.00 €** | 42.8 % | **45.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.40 € | **7.60 €** | 21.5 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 8.50 € | **8.70 €** | 5.7 % | **8.2 %** | 8.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.60 €** | 31.5 % | **34.3 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.90 € | **7.10 €** | 10.2 % | **13.4 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 100 | 349.90 € | **350.00 €** | 5.1 % | **5.1 %** | 349.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEVENHUK Dobsonův New Skyline PLUS 8" (200/1200) | 699.90 € | **700.00 €** | 5.1 % | **5.1 %** | 699.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE WPNEI94A1SWIFI | 405.90 € | **406.00 €** | 6.1 % | **6.2 %** | 405.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 299.90 € | **300.00 €** | 12.2 % | **12.2 %** | 299.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 299.90 € | **300.00 €** | 12.2 % | **12.2 %** | 299.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 278.90 € | **279.00 €** | 7.8 % | **7.8 %** | 278.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 388.90 € | **389.00 €** | 7.1 % | **7.1 %** | 389.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Panasonic SC-AKX520E-K | 301.90 € | **302.00 €** | 9.1 % | **9.1 %** | 302.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 333.90 € | **334.00 €** | 13.3 % | **13.3 %** | 334.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 338.90 € | **339.00 €** | 12.9 % | **12.9 %** | 339.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X40 Soundbar | 347.90 € | **348.00 €** | 12.9 % | **12.9 %** | 348.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X50 Soundbar | 398.90 € | **399.00 €** | 8.5 % | **8.5 %** | 399.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Panel plynu MOZA AS008 MTP (PC) | 328.90 € | **329.00 €** | 8.5 % | **8.6 %** | 329.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant Moza Racing RS V2 RS25 | 401.90 € | **402.00 €** | 8.5 % | **8.5 %** | 402.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 749.90 € | **750.00 €** | 10.2 % | **10.3 %** | 750.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun A1 Pro (čier... | 318.90 € | **319.00 €** | 11.6 % | **11.7 %** | 319.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 318.90 € | **319.00 €** | 11.6 % | **11.7 %** | 319.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 327.90 € | **328.00 €** | 11.3 % | **11.4 %** | 328.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 418.90 € | **419.00 €** | 11.8 % | **11.8 %** | 419.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 379.90 € | **380.00 €** | 10.5 % | **10.5 %** | 380.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko B3BCNA324HS | 625.90 € | **626.00 €** | 9.5 % | **9.5 %** | 626.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy ECNBQT3518E Fresco | 482.90 € | **483.00 €** | 7.4 % | **7.4 %** | 483.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje W11NHPI84AS | 284.90 € | **285.00 €** | 7.8 % | **7.9 %** | 285.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko BMTD37146W | 383.90 € | **384.00 €** | 6.6 % | **6.6 %** | 384.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Concept ETV8360bcN | 523.90 € | **524.00 €** | 6.9 % | **6.9 %** | 524.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 59.90 € | **60.00 €** | 7.6 % | **7.8 %** | 59.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Koloběžka NILS Extreme HM603 růžová | 35.90 € | **36.00 €** | 9.4 % | **9.7 %** | 35.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cabletech UCH0204 | 18.90 € | **19.00 €** | 6.0 % | **6.6 %** | 18.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTIGZ 3601 | 27.90 € | **28.00 €** | 9.4 % | **9.8 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 28.90 € | **29.00 €** | 12.6 % | **13.0 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Resto 93013 Pánev hluboká Aries 26 cm | 21.90 € | **22.00 €** | 9.3 % | **9.8 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor PRO so senzorom, 30W, 2760lm, ... | 19.90 € | **20.00 €** | 43.8 % | **44.5 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 29.90 € | **30.00 €** | 36.5 % | **36.9 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 31.90 € | **32.00 €** | 30.8 % | **31.2 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 18.90 € | **19.00 €** | 34.1 % | **34.8 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 29.90 € | **30.00 €** | 35.7 % | **36.1 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.90 € | **47.00 €** | 35.6 % | **35.9 %** | 47.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 23.90 € | **24.00 €** | 29.1 % | **29.6 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 21.90 € | **22.00 €** | 29.6 % | **30.2 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 20.90 € | **21.00 €** | 34.3 % | **35.0 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 19.90 € | **20.00 €** | 35.6 % | **36.3 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 34.90 € | **35.00 €** | 40.6 % | **41.0 %** | 35.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 33.90 € | **34.00 €** | 44.5 % | **45.0 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 22.90 € | **23.00 €** | 14.5 % | **15.0 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 9.70 € | **9.80 €** | 37.2 % | **38.6 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 23.90 € | **24.00 €** | 41.8 % | **42.4 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 23.90 € | **24.00 €** | 41.8 % | **42.4 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 23.90 € | **24.00 €** | 41.8 % | **42.4 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 16.90 € | **17.00 €** | 43.1 % | **44.0 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 21.90 € | **22.00 €** | 16.3 % | **16.8 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.70 € | **8.80 €** | 42.6 % | **44.2 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 31.90 € | **32.00 €** | 38.3 % | **38.8 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný termostatický radiátorový ventil Avatto... | 24.90 € | **25.00 €** | 12.3 % | **12.8 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight koaxiálny kábel CC120, voľne, 100m | 24.90 € | **25.00 €** | 36.7 % | **37.2 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM40Mi | 26.90 € | **27.00 €** | 10.0 % | **10.4 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR senzor nástenný, vonkajší, čierny | 8.70 € | **8.80 €** | 42.6 % | **44.2 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini detektor úniku plynu Habotest HT61 | 16.90 € | **17.00 €** | 12.6 % | **13.3 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Habotest MY6238 Viacúčelový detektor 4v1 | 16.90 € | **17.00 €** | 9.7 % | **10.4 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 44.90 € | **45.00 €** | 7.1 % | **7.4 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 53.90 € | **54.00 €** | 13.9 % | **14.1 %** | 54.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dezinfekčná bezozónová UV lampa 100W | 41.90 € | **42.00 €** | 33.4 % | **33.7 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 18.90 € | **19.00 €** | 21.8 % | **22.4 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 25.90 € | **26.00 €** | 33.9 % | **34.4 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 25.90 € | **26.00 €** | 33.9 % | **34.4 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 63.90 € | **64.00 €** | 35.6 % | **35.8 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 39.90 € | **40.00 €** | 34.7 % | **35.1 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal DN853BE0 | 53.90 € | **54.00 €** | 8.9 % | **9.1 %** | 54.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Súprava príslušenstva pre modely Dreame X60 Ultra a ... | 53.90 € | **54.00 €** | 14.7 % | **14.9 %** | 54.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 58.90 € | **59.00 €** | 7.4 % | **7.6 %** | 59.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Turecký kávovar HiBREW CM1179_EU | 45.90 € | **46.00 €** | 6.9 % | **7.1 %** | 46.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZHM2459S | 38.90 € | **39.00 €** | 12.7 % | **13.0 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Girmi PE3600 | 38.90 € | **39.00 €** | 9.2 % | **9.5 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 23.90 € | **24.00 €** | 7.8 % | **8.2 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 23.90 € | **24.00 €** | 7.8 % | **8.2 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 27.90 € | **28.00 €** | 10.5 % | **10.9 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 39.90 € | **40.00 €** | 9.8 % | **10.1 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 39.90 € | **40.00 €** | 9.8 % | **10.1 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zeblaze Btalk 3 Pro Smartwatch (Gray) | 22.90 € | **23.00 €** | 10.0 % | **10.5 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 18.90 € | **19.00 €** | 10.6 % | **11.2 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sieťová nabíjačka Blitzwolf BW-i100 5v1 120W | 44.90 € | **45.00 €** | 14.1 % | **14.3 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 19.90 € | **20.00 €** | 35.0 % | **35.7 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 30.90 € | **31.00 €** | 5.6 % | **5.9 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Centrala Bramka WiFi MSH450MA Meross | 18.90 € | **19.00 €** | 11.4 % | **12.0 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 21.90 € | **22.00 €** | 10.0 % | **10.5 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Matter SONOFF M5-1C-80W WiFi smart wall switch (1-ch... | 17.90 € | **18.00 €** | 8.0 % | **8.6 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 20.90 € | **21.00 €** | 9.0 % | **9.5 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 20.90 € | **21.00 €** | 11.9 % | **12.4 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 22.90 € | **23.00 €** | 13.5 % | **14.0 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 29.90 € | **30.00 €** | 22.9 % | **23.3 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UV filter Freewell pre DJI Mini 5 Pro | 17.90 € | **18.00 €** | 6.1 % | **6.7 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 44.90 € | **45.00 €** | 11.7 % | **12.0 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 49dB | 26.90 € | **27.00 €** | 37.7 % | **38.2 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vlákno HP ASA Creality (čierne) | 20.90 € | **21.00 €** | 8.9 % | **9.4 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| PS5 Laysara: Summit Kingdom Collector's | 63.90 € | **64.00 €** | 8.6 % | **8.8 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gens ace G-Tech 5000mAh 7.4V 60C 2S1P Lipo PC materi... | 39.90 € | **40.00 €** | 5.9 % | **6.2 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niimbot K3 Commercial Lake Blue | 57.90 € | **58.00 €** | 6.5 % | **6.7 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 17.90 € | **18.00 €** | 25.6 % | **26.3 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nepriamy germicidný UV žiarič | 61.90 € | **62.00 €** | 38.0 % | **38.2 %** | 62.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 4.80 € | **4.90 €** | 33.2 % | **36.0 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 7.80 € | **7.90 €** | 46.1 % | **48.0 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 7.60 € | **7.70 €** | 31.2 % | **32.9 %** | 7.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.80 € | **7.90 €** | 34.9 % | **36.7 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.30 € | **7.40 €** | 34.6 % | **36.4 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 5.60 € | **5.70 €** | 41.8 % | **44.4 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 7.80 € | **7.90 €** | 9.5 % | **10.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovový vianočný stromček, 2x AA | 4.60 € | **4.70 €** | 39.0 % | **42.0 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 4.80 € | **4.90 €** | 40.9 % | **43.8 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 5.60 € | **5.70 €** | 41.8 % | **44.4 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 4.60 € | **4.70 €** | 41.7 % | **44.7 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.30 € | **5.40 €** | 31.4 % | **33.8 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 7.10 € | **7.20 €** | 13.9 % | **15.5 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.10 € | **7.20 €** | 34.9 % | **36.8 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak DVB-T a internetové antény na stenu, ... | 7.80 € | **7.90 €** | 26.1 % | **27.7 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.10 € | **4.20 €** | 30.2 % | **33.4 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 4.60 € | **4.70 €** | 31.7 % | **34.5 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.30 € | **6.40 €** | 34.4 % | **36.6 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 5.60 € | **5.70 €** | 49.3 % | **51.9 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 4.60 € | **4.70 €** | 33.6 % | **36.5 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.60 € | **4.70 €** | 25.5 % | **28.2 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.60 € | **4.70 €** | 30.3 % | **33.1 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.10 € | **3.20 €** | 33.4 % | **37.7 %** | 3.17 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 1.70 € | **1.80 €** | 34.2 % | **42.1 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.10 € | **3.20 €** | 12.5 % | **16.1 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.10 € | **2.20 €** | 37.7 % | **44.2 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 2.80 € | **2.90 €** | 38.0 % | **42.9 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.60 € | **3.70 €** | 13.4 % | **16.6 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.00 € | **3.10 €** | 38.6 % | **43.2 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.60 € | **3.70 €** | 32.4 % | **36.1 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.30 € | **3.40 €** | 29.6 % | **33.5 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.10 € | **2.20 €** | 37.7 % | **44.2 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.30 € | **2.40 €** | 8.1 % | **12.8 %** | 2.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 1.90 € | **2.00 €** | 36.7 % | **43.9 %** | 2.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.30 € | **2.40 €** | 36.5 % | **42.4 %** | 2.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 3.80 € | **3.90 €** | 41.1 % | **44.8 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.10 € | **2.20 €** | 37.7 % | **44.2 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.30 € | **2.40 €** | 38.5 % | **44.5 %** | 2.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.60 € | **2.70 €** | 39.1 % | **44.4 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.50 € | **3.60 €** | 38.8 % | **42.8 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 1.90 € | **2.00 €** | 34.3 % | **41.4 %** | 2.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.70 € | **1.80 €** | 35.5 % | **43.5 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 0.70 € | **0.80 €** | 16.1 % | **32.7 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 0.70 € | **0.80 €** | 16.1 % | **32.7 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka 304, priemer 3,5mm x 190mm, AC napä... | 0.70 € | **0.80 €** | 18.6 % | **35.5 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, týždeň, 1 režim | 3.90 € | **4.00 €** | 20.6 % | **23.7 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.10 € | **2.20 €** | 36.6 % | **43.1 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.20 € | **1.30 €** | 22.0 % | **32.1 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 2.80 € | **2.90 €** | 27.9 % | **32.5 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.00 € | **3.10 €** | 27.0 % | **31.3 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.70 € | **0.80 €** | 7.4 % | **22.7 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.50 € | **1.60 €** | 28.4 % | **36.9 %** | 1.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.10 € | **2.20 €** | 28.4 % | **34.5 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, biely | 2.50 € | **2.60 €** | 30.3 % | **35.5 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, čierny | 2.40 € | **2.50 €** | 25.1 % | **30.3 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.70 € | **1.80 €** | 22.3 % | **29.5 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.40 € | **2.50 €** | 31.0 % | **36.4 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.10 € | **2.20 €** | 29.3 % | **35.5 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 2.80 € | **2.90 €** | 30.1 % | **34.7 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.00 € | **2.10 €** | 28.0 % | **34.4 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka plochá priama, IP20, biela | 0.70 € | **0.80 €** | 18.6 % | **35.5 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka priama, IP20, biela | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka priama, IP20, čierna | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 8.4 % | **17.4 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.00 € | **3.10 €** | 29.7 % | **34.1 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka, 16A, biela, vypínač | 1.70 € | **1.80 €** | 26.8 % | **34.3 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.30 € | **3.40 €** | 29.6 % | **33.5 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight SCART kábel, SCART konektor - SCART konektor... | 1.70 € | **1.80 €** | 23.4 % | **30.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight fast charger do auta 30W USB-C + A | 3.80 € | **3.90 €** | 35.5 % | **39.1 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.40 € | **2.50 €** | 22.7 % | **27.8 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 1.70 € | **1.80 €** | 19.1 % | **26.2 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.30 € | **3.40 €** | 29.0 % | **32.9 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 2.90 € | **3.00 €** | 31.7 % | **36.3 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 2.90 € | **3.00 €** | 31.7 % | **36.3 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.30 € | **3.40 €** | 26.0 % | **29.8 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.40 € | **3.50 €** | 29.2 % | **33.0 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 2.50 € | **2.60 €** | 24.7 % | **29.7 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 3.80 € | **3.90 €** | 29.8 % | **33.2 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.90 € | **2.00 €** | 25.6 % | **32.2 %** | 2.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 2.60 € | **2.70 €** | 25.8 % | **30.7 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.00 € | **2.10 €** | 25.1 % | **31.3 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.10 € | **3.20 €** | 29.9 % | **34.1 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.60 € | **2.70 €** | 25.8 % | **30.7 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 28.0 % | **31.7 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.10 € | **3.20 €** | 29.9 % | **34.1 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.90 € | **4.00 €** | 30.5 % | **33.8 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny rozbočovač hybridný priamy | 1.70 € | **1.80 €** | 21.2 % | **28.4 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 0.90 € | **1.00 €** | 28.4 % | **42.6 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka 201, priemer 3mm x 140mm, AC napäti... | 0.60 € | **0.70 €** | 16.1 % | **35.5 %** | 0.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 0.80 € | **0.90 €** | 16.1 % | **30.7 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 0.90 € | **1.00 €** | 16.1 % | **29.0 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 0.90 € | **1.00 €** | 16.1 % | **29.0 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 0.80 € | **0.90 €** | 14.1 % | **28.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 0.80 € | **0.90 €** | 14.1 % | **28.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 0.80 € | **0.90 €** | 14.1 % | **28.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací konektor flexibilný pre COB LED ... | 1.80 € | **1.90 €** | 36.8 % | **44.4 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 1.80 € | **1.90 €** | 34.3 % | **41.7 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 1.80 € | **1.90 €** | 34.3 % | **41.7 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.30 € | **1.40 €** | 28.9 % | **38.8 %** | 1.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.10 € | **1.20 €** | 24.2 % | **35.5 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.10 € | **1.20 €** | 24.2 % | **35.5 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.10 € | **1.20 €** | 24.2 % | **35.5 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.10 € | **1.20 €** | 24.2 % | **35.5 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, biela | 1.80 € | **1.90 €** | 28.4 % | **35.5 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka priama s úchytom, IP20, biela | 1.10 € | **1.20 €** | 24.2 % | **35.5 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 1.80 € | **1.90 €** | 26.2 % | **33.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 1.60 € | **1.70 €** | 23.9 % | **31.6 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.30 € | **1.40 €** | 22.9 % | **32.4 %** | 1.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.80 € | **1.90 €** | 23.0 % | **29.8 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 15.90 € | **16.00 €** | 30.2 % | **31.0 %** | 15.93 € | dobehnutie 2. najlacnejšieho konkurenta |
| Náhradné filtre pre Catlink litter box Scooper 2ks. | 9.90 € | **10.00 €** | 6.3 % | **7.4 %** | 9.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 15.90 € | **16.00 €** | 38.1 % | **39.0 %** | 15.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **5.30 €** | 34.6 % | **37.2 %** | 5.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight FM transmitter s bluetooth pripojením do aut... | 14.90 € | **15.00 €** | 34.0 % | **34.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 13.90 € | **14.00 €** | 37.8 % | **38.8 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **13.00 €** | 31.1 % | **32.1 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 8.60 € | **8.70 €** | 41.5 % | **43.2 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.30 € | **8.40 €** | 30.5 % | **32.1 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.90 € | **11.00 €** | 31.3 % | **32.5 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.60 € | **9.70 €** | 32.7 % | **34.1 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 10.90 € | **11.00 €** | 33.1 % | **34.3 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 15.90 € | **16.00 €** | 21.8 % | **22.6 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.20 € | **7.30 €** | 41.7 % | **43.7 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight drevený snehuliak, 4x LED, 2x AA | 12.90 € | **13.00 €** | 40.8 % | **41.9 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 10.90 € | **11.00 €** | 33.9 % | **35.1 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda červená, závesná, 60cm,... | 4.20 € | **4.30 €** | 39.4 % | **42.7 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 9.90 € | **10.00 €** | 39.0 % | **40.4 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.20 € | **7.30 €** | 41.7 % | **43.7 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.40 € | **4.50 €** | 39.7 % | **42.9 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 12.90 € | **13.00 €** | 40.8 % | **41.9 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 6.50 € | **6.60 €** | 42.1 % | **44.2 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 11.90 € | **12.00 €** | 37.6 % | **38.8 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 13.90 € | **14.00 €** | 39.0 % | **40.0 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 13.90 € | **14.00 €** | 24.2 % | **25.1 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 8.60 € | **8.70 €** | 46.9 % | **48.6 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 8.30 € | **8.40 €** | 41.8 % | **43.5 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.90 € | **12.00 €** | 40.6 % | **41.8 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.90 € | **12.00 €** | 40.6 % | **41.8 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.70 € | **6.80 €** | 41.1 % | **43.2 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.70 € | **6.80 €** | 41.1 % | **43.2 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 13.90 € | **14.00 €** | 42.7 % | **43.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.20 € | **6.30 €** | 40.4 % | **42.7 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 9.00 € | **9.10 €** | 38.1 % | **39.6 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 8.10 € | **8.20 €** | 27.9 % | **29.4 %** | 8.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 14.90 € | **15.00 €** | 12.3 % | **13.0 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT658DUAL tester zásuviek USB | 11.90 € | **12.00 €** | 8.3 % | **9.3 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.70 € | **6.80 €** | 30.6 % | **32.6 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny týždenný časový spínač, 16 režimov... | 9.40 € | **9.50 €** | 35.3 % | **36.7 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR senzor nástenný, vonkajší, biely | 7.00 € | **7.10 €** | 31.1 % | **33.0 %** | 7.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR senzor pro E27 žiarovku, biely | 6.70 € | **6.80 €** | 41.9 % | **44.0 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR stropný senzor, interiérový, biely | 7.20 € | **7.30 €** | 41.7 % | **43.7 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 15.90 € | **16.00 €** | 30.4 % | **31.3 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely | 2.20 € | **2.30 €** | 29.6 % | **35.5 %** | 2.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.20 € | **3.30 €** | 30.1 % | **34.1 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka s viečkom, biela | 6.20 € | **6.30 €** | 32.0 % | **34.1 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66, vodotesná a prachotesná | 14.90 € | **15.00 €** | 32.5 % | **33.4 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.40 € | **7.50 €** | 33.7 % | **35.5 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.00 € | **6.10 €** | 32.2 % | **34.4 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 3.70 € | **3.80 €** | 30.8 % | **34.3 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EF167 | 13.90 € | **14.00 €** | 8.0 % | **8.8 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EFS 1 W | 15.90 € | **16.00 €** | 7.9 % | **8.6 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.00 € | **9.10 €** | 36.5 % | **38.0 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 13.90 € | **14.00 €** | 15.6 % | **16.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| PULUZ PU3224B Držiak na telefón čierny | 13.90 € | **14.00 €** | 11.7 % | **12.5 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 4.70 € | **4.80 €** | 35.0 % | **37.9 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.00 € | **6.10 €** | 34.0 % | **36.2 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.40 € | **9.50 €** | 29.1 % | **30.5 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 5.40 € | **5.50 €** | 18.3 % | **20.5 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 4.70 € | **4.80 €** | 30.9 % | **33.6 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 7.40 € | **7.50 €** | 34.3 % | **36.1 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 15.90 € | **16.00 €** | 7.7 % | **8.4 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 13.90 € | **14.00 €** | 33.0 % | **33.9 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.00 € | **8.10 €** | 5.2 % | **6.6 %** | 8.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.30 € | **8.40 €** | 52.7 % | **54.5 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 14.90 € | **15.00 €** | 33.9 % | **34.8 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.40 € | **8.50 €** | 33.4 % | **35.0 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.00 € | **6.10 €** | 33.6 % | **35.9 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.70 € | **4.80 €** | 20.5 % | **23.1 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.90 € | **7.00 €** | 41.7 % | **43.7 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 7.70 € | **7.80 €** | 17.7 % | **19.2 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 14.90 € | **15.00 €** | 21.6 % | **22.4 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 13.90 € | **14.00 €** | 38.2 % | **39.1 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 4.70 € | **4.80 €** | 30.9 % | **33.6 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.50 € | **4.60 €** | 29.3 % | **32.1 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight WIFI zásuvka s meraním spotreby | 11.90 € | **12.00 €** | 35.5 % | **36.6 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 4.40 € | **4.50 €** | 28.7 % | **31.6 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 9.50 € | **9.60 €** | 43.3 % | **44.8 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.20 € | **4.30 €** | 27.9 % | **30.9 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 10.90 € | **11.00 €** | 42.9 % | **44.2 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.10 € | **9.20 €** | 27.8 % | **29.2 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 10m | 12.90 € | **13.00 €** | 6.2 % | **7.0 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT117C | 136.90 € | **137.00 €** | 13.5 % | **13.6 %** | 136.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 118.90 € | **119.00 €** | 13.3 % | **13.4 %** | 119.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 137.90 € | **138.00 €** | 8.9 % | **9.0 %** | 138.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| OTTOCAST OTTOAIBOX N95C Monitor do auta | 153.90 € | **154.00 €** | 14.4 % | **14.5 %** | 154.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO42327PC | 101.90 € | **102.00 €** | 9.3 % | **9.4 %** | 102.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 70.90 € | **71.00 €** | 38.2 % | **38.4 %** | 71.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal GC517DE0 | 136.90 € | **137.00 €** | 8.7 % | **8.8 %** | 137.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Graef S 10005 | 112.90 € | **113.00 €** | 9.8 % | **9.9 %** | 113.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko FRL5388B | 131.90 € | **132.00 €** | 8.2 % | **8.2 %** | 132.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO353VD | 83.90 € | **84.00 €** | 9.2 % | **9.4 %** | 84.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 325 | 252.90 € | **253.00 €** | 6.1 % | **6.1 %** | 253.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Beko VRT65421VC | 126.90 € | **127.00 €** | 8.1 % | **8.2 %** | 127.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH1833E0 | 146.90 € | **147.00 €** | 8.3 % | **8.4 %** | 147.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RO7457EA | 190.90 € | **191.00 €** | 8.4 % | **8.4 %** | 191.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal SV9201E0 | 190.90 € | **191.00 €** | 6.7 % | **6.7 %** | 191.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 159.90 € | **160.00 €** | 8.2 % | **8.3 %** | 160.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 183.90 € | **184.00 €** | 5.9 % | **6.0 %** | 184.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 178.90 € | **179.00 €** | 5.3 % | **5.3 %** | 179.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas 13 GS1331 | 197.90 € | **198.00 €** | 12.8 % | **12.9 %** | 198.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gramofon KRUGER & MATZ TT-602 | 186.90 € | **187.00 €** | 5.2 % | **5.2 %** | 187.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Stratos 4 (čierne) | 68.90 € | **69.00 €** | 7.5 % | **7.6 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor A1 15,6" | 82.90 € | **83.00 €** | 9.6 % | **9.7 %** | 83.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 87.90 € | **88.00 €** | 13.8 % | **13.9 %** | 88.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projector Blitzwolf, BW-V8, 4K, Android OS | 155.90 € | **156.00 €** | 14.2 % | **14.3 %** | 156.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Albrecht DR 865 | 163.90 € | **164.00 €** | 14.4 % | **14.5 %** | 164.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 117.90 € | **118.00 €** | 9.4 % | **9.5 %** | 118.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 117.90 € | **118.00 €** | 9.4 % | **9.5 %** | 118.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Poseidon D80 BOOM Soundbar | 254.90 € | **255.00 €** | 13.9 % | **14.0 %** | 255.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Webová kamera OBSBOT Meet SE (biela) | 84.90 € | **85.00 €** | 13.7 % | **13.9 %** | 85.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Webová kamera OBSBOT Meet SE (sivá) | 84.90 € | **85.00 €** | 5.9 % | **6.1 %** | 85.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 24G | 176.90 € | **177.00 €** | 6.0 % | **6.0 %** | 177.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje BMX201M2BG | 166.90 € | **167.00 €** | 6.8 % | **6.8 %** | 167.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje MO20A3WH | 70.90 € | **71.00 €** | 6.7 % | **6.9 %** | 71.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE ECT601FM | 132.90 € | **133.00 €** | 6.0 % | **6.1 %** | 133.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Creality K2 Plus Combo | 1085.90 € | **1086.00 €** | 6.1 % | **6.1 %** | 1086.00 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (858)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| YAMAHA R-N2000A BLACK | 3890.00 € | **3312.50 €** | 28.3 % | **9.3 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N2000A SILVER | 3890.00 € | **3312.50 €** | 27.9 % | **9.0 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N1000A BLACK | 1599.00 € | **1367.00 €** | 27.8 % | **9.3 %** | 1367.23 € | stávame sa najlacnejší |
| YAMAHA R-N1000A SILVER | 1599.00 € | **1367.00 €** | 24.2 % | **6.2 %** | 1367.23 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT F7200 s výkonom 7200 W (z... | 2647.50 € | **2417.50 €** | 15.0 % | **5.0 %** | 2400.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.50 €** | 64.7 % | **6.8 %** | 362.65 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2374.50 €** | 15.0 % | **6.6 %** | 2374.69 € | stávame sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 1TB Black | 2885.50 € | **2754.50 €** | 10.0 % | **5.0 %** | 1650.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 512GB Silver | 2552.50 € | **2436.50 €** | 10.0 % | **5.0 %** | 1399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 512GB Black | 2552.50 € | **2436.50 €** | 10.0 % | **5.0 %** | 1410.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 512GB Blue | 2552.50 € | **2436.50 €** | 10.0 % | **5.0 %** | 1420.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **354.00 €** | 39.7 % | **6.3 %** | 354.05 € | stávame sa najlacnejší |
| Elektrický bicykel ENGWE L20 3.0 BOOST 250 W s 20-pa... | 1261.90 € | **1152.50 €** | 15.0 % | **5.0 %** | 1139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 256GB Silver | 2384.00 € | **2275.90 €** | 10.0 % | **5.0 %** | 1269.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 256GB Black | 2384.00 € | **2275.90 €** | 10.0 % | **5.0 %** | 1310.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold7 5G 256GB Blue | 2384.00 € | **2275.90 €** | 10.0 % | **5.0 %** | 1320.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yamaha YHT-4960 BLACK | 899.00 € | **792.00 €** | 24.0 % | **9.3 %** | 792.22 € | stávame sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.50 €** | 16.8 % | **9.3 %** | 1543.60 € | stávame sa najlacnejší |
| Baterie DEYE SE-G5.1Pro-B, 5.1 kWh LV modul do racku | 1141.00 € | **1041.90 €** | 15.0 % | **5.0 %** | 875.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 1TB Black | 2148.50 € | **2050.50 €** | 10.0 % | **5.0 %** | 1250.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 1TB White | 2148.50 € | **2050.50 €** | 10.0 % | **5.0 %** | 1280.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 1TB Titan | 2036.50 € | **1943.90 €** | 10.0 % | **5.0 %** | 923.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 1TB Black | 2036.50 € | **1943.90 €** | 10.0 % | **5.0 %** | 1003.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 1TB Silver | 2036.50 € | **1943.90 €** | 10.0 % | **5.0 %** | 1007.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 1TB Blue | 2036.50 € | **1943.90 €** | 10.0 % | **5.0 %** | 1025.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **511.50 €** | 24.2 % | **6.1 %** | 511.63 € | stávame sa najlacnejší |
| YAMAHA A-S1200 BLACK | 2399.00 € | **2315.50 €** | 13.2 % | **9.3 %** | 2315.65 € | stávame sa najlacnejší |
| YAMAHA A-S1200 SILVER | 2399.00 € | **2315.50 €** | 13.1 % | **9.1 %** | 2315.65 € | stávame sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 512GB Black | 1816.50 € | **1733.90 €** | 10.0 % | **5.0 %** | 965.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 512GB White | 1816.50 € | **1733.90 €** | 10.0 % | **5.0 %** | 1020.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 512GB Titan | 1767.90 € | **1687.50 €** | 10.0 % | **5.0 %** | 840.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 512GB Blue | 1767.90 € | **1687.50 €** | 10.0 % | **5.0 %** | 849.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 512GB Silver | 1767.90 € | **1687.50 €** | 10.0 % | **5.0 %** | 850.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RK4182PW4 | 359.00 € | **281.00 €** | 36.1 % | **6.5 %** | 281.12 € | stávame sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 256GB Silver | 1633.90 € | **1559.50 €** | 10.0 % | **5.0 %** | 750.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 256GB Black | 1633.90 € | **1559.50 €** | 10.0 % | **5.0 %** | 755.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 256GB Blue | 1633.90 € | **1559.50 €** | 10.0 % | **5.0 %** | 755.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 256GB Titan | 1633.90 € | **1559.50 €** | 10.0 % | **5.0 %** | 755.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26+ 5G 512GB White | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 820.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26+ 5G 512GB Black | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 850.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 256GB Black | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 880.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 256GB Blue | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 885.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 256GB White | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 890.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 Ultra 5G 256GB Purple | 1596.90 € | **1524.50 €** | 10.0 % | **5.0 %** | 900.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R4142PS | 319.00 € | **248.00 €** | 38.9 % | **8.0 %** | 248.20 € | stávame sa najlacnejší |
| Samsung Galaxy Z Flip7 5G 512GB Blue | 1555.50 € | **1484.90 €** | 10.0 % | **5.0 %** | 885.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Flip7 5G 512GB Black | 1555.50 € | **1484.90 €** | 10.0 % | **5.0 %** | 940.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26+ 5G 256GB Blue | 1374.50 € | **1311.90 €** | 10.0 % | **5.0 %** | 725.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26+ 5G 256GB Purple | 1374.50 € | **1311.90 €** | 10.0 % | **5.0 %** | 725.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26+ 5G 256GB White | 1374.50 € | **1311.90 €** | 10.0 % | **5.0 %** | 725.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 512GB Light Blue | 1319.90 € | **1259.90 €** | 10.0 % | **5.0 %** | 672.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 512GB Green | 1319.90 € | **1259.90 €** | 10.0 % | **5.0 %** | 710.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 512GB Dark Blue | 1319.90 € | **1259.90 €** | 10.0 % | **5.0 %** | 715.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 512GB Silver | 1319.90 € | **1259.90 €** | 10.0 % | **5.0 %** | 770.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S26 5G 512GB Black | 1319.50 € | **1259.90 €** | 10.0 % | **5.0 %** | 705.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Flip7 FE 5G 256GB Black | 1217.90 € | **1162.50 €** | 10.0 % | **5.0 %** | 799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| VITURE XR Luma Ultra | 635.00 € | **580.00 €** | 15.0 % | **5.0 %** | 487.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Flip7 FE 5G 128GB Black | 1127.90 € | **1076.90 €** | 10.0 % | **5.0 %** | 610.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 256GB Green | 1101.50 € | **1051.50 €** | 10.0 % | **5.0 %** | 565.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D Tlačiareň Creality K1 MAX | 543.50 € | **497.00 €** | 15.0 % | **5.2 %** | 497.06 € | stávame sa najlacnejší |
| Samsung Galaxy S25 5G 128GB Dark Blue | 1007.00 € | **961.50 €** | 10.0 % | **5.0 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 128GB Light Blue | 1007.00 € | **961.50 €** | 10.0 % | **5.0 %** | 505.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 128GB Silver | 1007.00 € | **961.50 €** | 10.0 % | **5.0 %** | 505.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy S25 5G 128GB Green | 1007.00 € | **961.50 €** | 10.0 % | **5.0 %** | 515.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE48S85H | 1001.90 € | **956.50 €** | 10.0 % | **5.0 %** | 680.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 574.50 € | **529.50 €** | 15.0 % | **6.0 %** | 529.90 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 612.50 € | **569.00 €** | 15.0 % | **6.8 %** | 569.27 € | stávame sa najlacnejší |
| Xiaomi 17T Pro 12/512GB Černá | 948.50 € | **905.50 €** | 10.0 % | **5.0 %** | 650.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17T Pro 12/512GB Modrá | 948.50 € | **905.50 €** | 10.0 % | **5.0 %** | 690.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 96.0 % | **11.9 %** | 57.23 € | stávame sa najlacnejší |
| Samsung S731 Galaxy S25 FE 256GB Navy | 933.50 € | **890.90 €** | 10.0 % | **5.0 %** | 515.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-SW050 BLACK | 239.00 € | **198.50 €** | 31.5 % | **9.2 %** | 198.58 € | stávame sa najlacnejší |
| YAMAHA A-S701 BLACK | 849.00 € | **808.50 €** | 14.7 % | **9.3 %** | 808.61 € | stávame sa najlacnejší |
| Xiaomi 17T Pro 12/256GB Černá | 864.50 € | **824.90 €** | 10.1 % | **5.0 %** | 599.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lodica na návnadu FLYTEC V080 s lokalizátorom + baté... | 445.50 € | **406.90 €** | 15.0 % | **5.0 %** | 248.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung S731 Galaxy S25 FE 128GB Blue | 850.90 € | **812.50 €** | 10.0 % | **5.1 %** | 466.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MacBook Neo 8/256GB blush MHFH4CZ | 841.00 € | **802.90 €** | 10.0 % | **5.0 %** | 777.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17T 12/512GB Černá | 779.90 € | **744.50 €** | 10.0 % | **5.0 %** | 579.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 28.0 % | **9.2 %** | 204.08 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 24.9 % | **9.2 %** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 24.7 % | **9.0 %** | 244.20 € | stávame sa najlacnejší |
| Lodica na návnadu FLYTEC V030 s vyhľadávačom + batériou | 387.90 € | **354.50 €** | 15.0 % | **5.1 %** | 87.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjacia stanica FOSSIBOT F800 800 W (zelená) | 387.90 € | **354.50 €** | 15.0 % | **5.1 %** | 314.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F8 PRO 12/512GB Black | 730.90 € | **697.90 €** | 10.0 % | **5.0 %** | 539.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S880DBMKII 2.0 (biele) | 381.90 € | **348.90 €** | 15.0 % | **5.1 %** | 222.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17T 12/256GB Černá | 695.50 € | **663.90 €** | 10.0 % | **5.0 %** | 475.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, vonk... | 114.50 € | **83.50 €** | 44.1 % | **5.1 %** | 82.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Aurzen Eazze D1 Max | 346.00 € | **316.50 €** | 15.0 % | **5.2 %** | 207.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 408.50 € | **379.50 €** | 15.0 % | **6.9 %** | 379.90 € | stávame sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 793.90 € | **765.00 €** | 10.0 % | **6.0 %** | 765.20 € | stávame sa najlacnejší |
| Samsung A576 Galaxy A57 256GB Icy Blue | 634.00 € | **605.50 €** | 10.0 % | **5.1 %** | 346.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 125Ah MHPower MS125-12(L) LC4-M8 | 327.90 € | **299.50 €** | 15.0 % | **5.1 %** | 297.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **739.90 €** | 15.0 % | **10.8 %** | 740.00 € | stávame sa najlacnejší |
| Flytec V803-Pro 5200mAh loď na návnadu | 321.00 € | **293.50 €** | 15.0 % | **5.2 %** | 87.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung RB34C600CWW/EF | 593.50 € | **566.50 €** | 10.1 % | **5.1 %** | 489.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termovízna kamera Mileseey TR20 Pro | 308.00 € | **281.50 €** | 14.9 % | **5.0 %** | 248.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A576 Galaxy A57 128GB Gray | 566.50 € | **540.50 €** | 10.1 % | **5.0 %** | 293.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 256GB Gray | 560.50 € | **534.90 €** | 10.1 % | **5.0 %** | 290.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 256GB Lavender | 560.50 € | **534.90 €** | 10.1 % | **5.0 %** | 294.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 256GB White | 560.50 € | **534.90 €** | 10.1 % | **5.0 %** | 300.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 256GB Green | 560.50 € | **534.90 €** | 10.1 % | **5.0 %** | 320.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3431B 1600W 12V | 304.50 € | **278.90 €** | 15.0 % | **5.4 %** | 279.00 € | stávame sa najlacnejší |
| JBL PartyBox 330 | 555.50 € | **530.50 €** | 10.0 % | **5.1 %** | 529.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 928.50 € | **905.50 €** | 10.0 % | **7.3 %** | 905.67 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 912.50 € | **889.90 €** | 10.1 % | **7.3 %** | 889.92 € | stávame sa najlacnejší |
| Prenosný disk SSD Lexar SL300 1 TB | 257.50 € | **235.00 €** | 15.1 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO17E1W | 79.00 € | **56.90 €** | 46.3 % | **5.4 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GV673B65 | 487.50 € | **465.50 €** | 10.1 % | **5.1 %** | 465.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 11.0 % | **9.3 %** | 1377.03 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Combo | 532.50 € | **510.50 €** | 15.0 % | **10.2 %** | 510.65 € | stávame sa najlacnejší |
| Gorenje NRS917E41X | 472.90 € | **451.50 €** | 10.0 % | **5.1 %** | 444.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 128GB Gray | 458.90 € | **437.90 €** | 10.1 % | **5.1 %** | 240.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A376 Galaxy A37 128GB White | 458.90 € | **437.90 €** | 10.1 % | **5.1 %** | 240.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW7TN3372C | 566.90 € | **546.00 €** | 10.1 % | **6.0 %** | 546.10 € | stávame sa najlacnejší |
| GORENJE TH60E3B | 99.00 € | **79.00 €** | 33.7 % | **6.7 %** | 79.20 € | stávame sa najlacnejší |
| Samsung Mini LED UE50M70H | 413.90 € | **394.90 €** | 10.1 % | **5.0 %** | 340.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AnyCubic Kobra 2 Pro 3D Printer | 217.50 € | **198.50 €** | 15.1 % | **5.1 %** | 185.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS541C10X | 387.90 € | **370.00 €** | 10.1 % | **5.0 %** | 370.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A6 bílá | 481.50 € | **464.00 €** | 10.0 % | **6.0 %** | 464.19 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 225.50 € | **208.00 €** | 15.0 % | **6.1 %** | 208.48 € | stávame sa najlacnejší |
| Samsung Mini LED UE43M70H | 379.50 € | **362.50 €** | 10.0 % | **5.1 %** | 359.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 691.50 € | **674.50 €** | 10.1 % | **7.4 %** | 674.58 € | stávame sa najlacnejší |
| Niceboy HIVE Beans Black | 34.90 € | **18.00 €** | 126.3 % | **16.7 %** | 18.12 € | stávame sa najlacnejší |
| GORENJE WNHPI84AS/A | 365.50 € | **348.90 €** | 10.1 % | **5.1 %** | 340.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 95.00 € | **78.90 €** | 38.8 % | **15.3 %** | 79.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 50Ah MHPower MS50-12(L) LC5-M8 | 184.50 € | **168.50 €** | 15.0 % | **5.1 %** | 155.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE70 Fialový | 186.90 € | **170.90 €** | 15.1 % | **5.2 %** | 170.95 € | stávame sa najlacnejší |
| Guzzanti GZ 235 | 458.50 € | **443.00 €** | 10.1 % | **6.4 %** | 443.01 € | stávame sa najlacnejší |
| OTTOCAST OTTOAIBOX N95C – monitor do auta + zadná ka... | 177.00 € | **161.90 €** | 14.9 % | **5.1 %** | 154.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE60 Fialový | 173.90 € | **158.90 €** | 15.1 % | **5.2 %** | 141.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RR8589CE | 411.90 € | **397.00 €** | 10.1 % | **6.1 %** | 397.09 € | stávame sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 160.50 € | **146.90 €** | 14.9 % | **5.1 %** | 147.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 25m,... | 52.00 € | **38.50 €** | 43.2 % | **6.0 %** | 37.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 375.50 € | **362.00 €** | 10.0 % | **6.1 %** | 362.05 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **39.00 €** | 50.5 % | **11.8 %** | 39.16 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah VIPOW BAT0496 | 254.50 € | **241.00 €** | 14.9 % | **8.8 %** | 241.49 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 481.90 € | **468.50 €** | 10.0 % | **7.0 %** | 468.60 € | stávame sa najlacnejší |
| Gorenje R49CPW | 284.50 € | **271.50 €** | 10.1 % | **5.1 %** | 222.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 38Ah MHPower MS38-12(L) LC1-M6 | 148.90 € | **135.90 €** | 15.1 % | **5.1 %** | 126.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 22.6 % | **9.2 %** | 106.20 € | stávame sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE40 Fialový | 147.50 € | **134.90 €** | 14.9 % | **5.1 %** | 98.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF NSPanel Pro 120 Smart Control Panel Matter Wi... | 146.50 € | **133.90 €** | 15.0 % | **5.1 %** | 111.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje N62CS2XL4 | 447.50 € | **435.00 €** | 10.1 % | **7.0 %** | 435.10 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 455.50 € | **443.00 €** | 10.0 % | **7.0 %** | 443.20 € | stávame sa najlacnejší |
| GoSmart EMOS IP-21PoE /H4034/ videozvonek s klávesnicí | 143.50 € | **131.50 €** | 14.9 % | **5.3 %** | 119.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 Gril EMS4253TBX | 271.50 € | **259.50 €** | 10.0 % | **5.1 %** | 257.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 10.1 % | **7.0 %** | 413.60 € | stávame sa najlacnejší |
| Tefal GC774D | 265.90 € | **253.90 €** | 10.0 % | **5.1 %** | 170.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GoSmart EMOS IP-20PoE /H4033/ videozvonek | 135.50 € | **123.90 €** | 15.1 % | **5.3 %** | 109.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Krups EA201BE0 | 253.90 € | **242.50 €** | 10.1 % | **5.1 %** | 228.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung A175 Galaxy A17 128GB Black | 246.50 € | **235.50 €** | 10.1 % | **5.2 %** | 147.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1000 URZ3406-LFP4 700W 12V | 126.50 € | **115.50 €** | 15.0 % | **5.0 %** | 114.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 158.00 € | **147.00 €** | 14.9 % | **6.9 %** | 147.50 € | stávame sa najlacnejší |
| Rowenta RH20C0WO | 231.50 € | **220.90 €** | 10.1 % | **5.1 %** | 199.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.90 €** | 14.9 % | **8.9 %** | 190.00 € | stávame sa najlacnejší |
| UMAX VisionBook N15R Pro | 237.00 € | **226.50 €** | 10.0 % | **5.1 %** | 206.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 338 | 581.00 € | **570.50 €** | 10.0 % | **8.0 %** | 570.59 € | stávame sa najlacnejší |
| Concept IDV5160wh | 363.50 € | **353.00 €** | 10.1 % | **7.0 %** | 353.10 € | stávame sa najlacnejší |
| Whirlpool FFS 7469 W EE | 374.50 € | **364.00 €** | 10.1 % | **7.0 %** | 364.20 € | stávame sa najlacnejší |
| UNI-T UT521 tester uzemnenia | 140.00 € | **129.50 €** | 15.0 % | **6.4 %** | 129.88 € | stávame sa najlacnejší |
| GORENJE F4142PW | 232.00 € | **221.90 €** | 12.9 % | **8.0 %** | 222.00 € | stávame sa najlacnejší |
| 100 W inteligentná spájkovačka s náradím FNIRSI HS-0... | 118.50 € | **108.50 €** | 15.0 % | **5.3 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RB413EPS4 | 220.90 € | **210.90 €** | 10.2 % | **5.2 %** | 177.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo StrongVision PRO 4G, fotopast | 223.90 € | **213.90 €** | 10.0 % | **5.1 %** | 194.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED ambientní RGB GoSmart osvětlení EMOS ZTV75 za TV... | 114.90 € | **104.90 €** | 15.0 % | **5.0 %** | 87.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL PF 610138 | 220.50 € | **210.50 €** | 10.1 % | **5.1 %** | 194.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WE694A1 | 357.50 € | **347.50 €** | 10.1 % | **7.0 %** | 347.60 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.15 € | stávame sa najlacnejší |
| TEFAL FR 495070 | 109.00 € | **99.00 €** | 21.5 % | **10.3 %** | 99.20 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 51.1 % | **9.5 %** | 26.17 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6004 40l, 12V/24V/230V/baterie... | 260.90 € | **251.00 €** | 15.0 % | **10.6 %** | 251.29 € | stávame sa najlacnejší |
| UMAX VisionBook 14WQ LTE (UMM230242) | 210.50 € | **201.00 €** | 10.0 % | **5.0 %** | 186.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje F49CPW | 203.50 € | **194.00 €** | 10.2 % | **5.0 %** | 180.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 424.50 € | **415.00 €** | 10.0 % | **7.6 %** | 415.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 74.00 € | **64.50 €** | 38.9 % | **21.1 %** | 64.90 € | stávame sa najlacnejší |
| Výrobník ledu Ruhhy K5536 | 111.00 € | **101.90 €** | 14.8 % | **5.3 %** | 86.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 100 W inteligentná spájkovačka s náradím FNIRSI HS-0... | 106.50 € | **97.50 €** | 15.1 % | **5.4 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Spájkovačka FNIRSI HS-02B 100 W | 104.50 € | **95.50 €** | 15.1 % | **5.2 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal NE858D38 | 194.90 € | **185.90 €** | 10.2 % | **5.1 %** | 185.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 204.50 € | **195.50 €** | 15.0 % | **9.9 %** | 195.89 € | stávame sa najlacnejší |
| LED ambientní RGB GoSmart osvětlení EMOS ZTV65 za TV... | 98.50 € | **89.90 €** | 15.1 % | **5.1 %** | 78.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL PartyBox Encore Essential 2 | 188.50 € | **179.90 €** | 10.2 % | **5.2 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 172.00 € | **163.50 €** | 15.0 % | **9.3 %** | 163.56 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 120.00 € | **111.50 €** | 15.0 % | **6.9 %** | 111.90 € | stávame sa najlacnejší |
| Merač CO2 Uni-T A37 | 100.90 € | **92.50 €** | 15.0 % | **5.4 %** | 86.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 224.90 € | **216.50 €** | 10.2 % | **6.1 %** | 216.54 € | stávame sa najlacnejší |
| FNIRSI HS-02B F 100 W inteligentná spájkovačka | 94.00 € | **86.00 €** | 14.9 % | **5.1 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED ambientní RGB GoSmart osvětlení EMOS ZTV55 za TV... | 94.50 € | **86.50 €** | 15.2 % | **5.5 %** | 71.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal PF251835 | 163.50 € | **155.90 €** | 10.3 % | **5.2 %** | 129.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 247.50 € | **239.90 €** | 14.9 % | **11.4 %** | 240.00 € | stávame sa najlacnejší |
| Black&Decker BXOV4500E | 164.00 € | **156.50 €** | 10.0 % | **5.0 %** | 139.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 20Ah MHPower MS20-12(L) LC1-M5 | 90.00 € | **82.50 €** | 14.8 % | **5.2 %** | 78.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat TECHNIRADIO SOLAR 2 solární rádio | 91.00 € | **83.50 €** | 14.9 % | **5.4 %** | 81.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.50 € | **151.00 €** | 15.1 % | **9.7 %** | 151.50 € | stávame sa najlacnejší |
| Stupienok k toaletnému boxu s pohlcovačom zápachu Ne... | 86.00 € | **78.90 €** | 14.9 % | **5.5 %** | 52.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Black | 149.50 € | **142.50 €** | 10.3 % | **5.2 %** | 139.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R1280T 2.0 (biele) | 83.90 € | **76.90 €** | 15.1 % | **5.5 %** | 75.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018700 Multifunkční trouba | 150.90 € | **143.90 €** | 10.1 % | **5.0 %** | 143.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 112.50 € | **105.50 €** | 15.0 % | **7.9 %** | 105.66 € | stávame sa najlacnejší |
| Dalekohled monokulární se zaměřovačem LEVENHUK Camo ... | 80.50 € | **73.50 €** | 15.0 % | **5.0 %** | 73.90 € | stávame sa najlacnejší |
| Whirlpool MBNA910X | 249.50 € | **242.50 €** | 11.1 % | **8.0 %** | 242.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 194.90 € | **188.00 €** | 10.1 % | **6.2 %** | 188.22 € | stávame sa najlacnejší |
| Tefal NE477838 | 146.50 € | **139.90 €** | 10.0 % | **5.1 %** | 136.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **34.50 €** | 38.3 % | **16.3 %** | 34.90 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.5 % | **9.2 %** | 18.67 € | stávame sa najlacnejší |
| Black&Decker BXOV3000E | 138.90 € | **132.50 €** | 10.2 % | **5.1 %** | 116.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal NE553838 | 140.90 € | **134.50 €** | 10.1 % | **5.1 %** | 127.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 203.90 € | **197.50 €** | 10.2 % | **6.7 %** | 197.52 € | stávame sa najlacnejší |
| Merač luxov UNI-T UT381A | 70.00 € | **63.90 €** | 15.1 % | **5.0 %** | 62.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CDPH 2D947X | 321.50 € | **315.50 €** | 10.1 % | **8.0 %** | 315.60 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 55.50 € | **49.50 €** | 23.3 % | **10.0 %** | 49.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 75.50 € | **69.50 €** | 38.8 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| TEFAL PF 210138 | 121.50 € | **115.90 €** | 10.3 % | **5.3 %** | 92.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victron Energy VE.Bus BMS | 146.50 € | **140.90 €** | 15.1 % | **10.7 %** | 141.00 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 81.50 € | **75.90 €** | 15.1 % | **7.2 %** | 76.00 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 85.00 € | **79.50 €** | 14.8 % | **7.3 %** | 79.69 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 678.00 € | **672.50 €** | 10.0 % | **9.1 %** | 672.69 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 214.50 € | **209.00 €** | 15.1 % | **12.1 %** | 209.39 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 69.50 € | **64.00 €** | 15.1 % | **6.0 %** | 64.39 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 27.00 € | **21.50 €** | 38.2 % | **10.1 %** | 21.90 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.00 € | **64.50 €** | 14.6 % | **5.6 %** | 64.90 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 80.00 € | **74.50 €** | 15.0 % | **7.1 %** | 74.90 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 210.50 € | **205.00 €** | 15.0 % | **12.0 %** | 205.50 € | stávame sa najlacnejší |
| Ninja AF140EU Single Basket Pro 4,7l | 120.90 € | **115.50 €** | 10.1 % | **5.2 %** | 106.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Spájkovačka FNIRSI HS-03 Plus | 63.90 € | **58.50 €** | 15.2 % | **5.4 %** | 57.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 612 Precise | 63.90 € | **58.50 €** | 15.2 % | **5.5 %** | 58.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BM3WFSU37213WB | 298.90 € | **293.50 €** | 10.0 % | **8.0 %** | 293.60 € | stávame sa najlacnejší |
| FNIRSI DPS150 DC programovateľný mini laboratórny na... | 64.00 € | **58.90 €** | 14.7 % | **5.5 %** | 58.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 244.00 € | **238.90 €** | 14.1 % | **11.7 %** | 239.00 € | stávame sa najlacnejší |
| Vysavač ruční TEESA TSA5017 | 58.00 € | **53.00 €** | 15.0 % | **5.0 %** | 44.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 12Ah MHPower MS12-12(L) F2-6,3mm | 58.00 € | **53.00 €** | 15.1 % | **5.1 %** | 51.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.6 % | **16.4 %** | 24.10 € | stávame sa najlacnejší |
| Panel tlačidiel ovládacieho panela PXN CB1 | 71.50 € | **66.50 €** | 15.1 % | **7.0 %** | 66.69 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 96.50 € | **91.50 €** | 14.8 % | **8.9 %** | 91.90 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 63.50 € | **58.50 €** | 15.1 % | **6.0 %** | 58.90 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 123.00 € | **118.00 €** | 14.9 % | **10.2 %** | 118.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 47.00 € | **42.00 €** | 38.3 % | **23.6 %** | 42.50 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **11.00 €** | 56.1 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| LED bodové svítidlo GoSmart EMOS ZIW15CR – řetěz 255... | 55.50 € | **50.90 €** | 14.8 % | **5.3 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 57.50 € | **52.90 €** | 15.2 % | **6.0 %** | 53.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 73.50 € | **68.90 €** | 20.2 % | **12.7 %** | 69.00 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 144.50 € | **140.00 €** | 15.2 % | **11.6 %** | 140.09 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 37.50 € | **33.00 €** | 57.5 % | **38.6 %** | 33.14 € | stávame sa najlacnejší |
| Gorenje F49DPW | 175.50 € | **171.00 €** | 11.8 % | **8.9 %** | 171.20 € | stávame sa najlacnejší |
| Výrobník ledu TEESA EASY ICE TSA5009 | 79.00 € | **74.50 €** | 14.9 % | **8.3 %** | 74.72 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 545.50 € | **541.00 €** | 7.1 % | **6.2 %** | 541.50 € | stávame sa najlacnejší |
| Autochladnička TEESA TSA5004.1 s funkcí ohřevu, 20l | 49.90 € | **45.50 €** | 15.2 % | **5.0 %** | 45.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk GPS (sivé) | 54.00 € | **49.90 €** | 14.5 % | **5.8 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.00 € | **47.90 €** | 14.8 % | **5.7 %** | 48.00 € | stávame sa najlacnejší |
| MAXXO VM Profi | 103.00 € | **98.90 €** | 14.9 % | **10.4 %** | 99.00 € | stávame sa najlacnejší |
| GoSmart LED vánoční řetěz EMOS D4ZR01, 8 m, venkovní... | 49.50 € | **45.50 €** | 15.2 % | **5.9 %** | 23.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI HS-02B 100 W inteligentná spájkovačka | 48.50 € | **44.50 €** | 15.0 % | **5.5 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff AirGuard CO2 SAWF-08P WiFi LCD meradlo kvalit... | 49.50 € | **45.50 €** | 14.9 % | **5.7 %** | 44.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 104.90 € | **100.90 €** | 10.1 % | **5.9 %** | 100.94 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 55.90 € | **51.90 €** | 15.3 % | **7.1 %** | 52.00 € | stávame sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S08B1-EU (čierny) | 203.90 € | **199.90 €** | 15.0 % | **12.7 %** | 200.00 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 56.90 € | **52.90 €** | 15.3 % | **7.2 %** | 53.00 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 23.2 % | **11.5 %** | 38.17 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 32.50 € | **28.50 €** | 37.2 % | **20.3 %** | 28.90 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 38.50 € | **34.50 €** | 39.6 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| Nabíjačka SkyRC Q200neo | 126.90 € | **123.00 €** | 15.0 % | **11.4 %** | 123.07 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 178.90 € | **175.00 €** | 10.0 % | **7.6 %** | 175.19 € | stávame sa najlacnejší |
| Ventilátor EMOS P56EXT1 rozšířující radiátorový set ... | 44.90 € | **41.00 €** | 15.1 % | **5.1 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **51.00 €** | 15.2 % | **7.0 %** | 51.21 € | stávame sa najlacnejší |
| MOZA RACING RS078 predlžovacia doska základne pedálo... | 43.50 € | **39.90 €** | 14.5 % | **5.0 %** | 33.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor jadrového žiarenia FNIRSI GC-02 | 44.50 € | **40.90 €** | 15.3 % | **6.0 %** | 40.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 60/700 AZ2 | 147.50 € | **143.90 €** | 7.8 % | **5.1 %** | 123.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Homatics Box 4K Pro V2 AI-SR Google TV (USB 2.0, USB... | 179.50 € | **175.90 €** | 7.2 % | **5.0 %** | 160.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal HB94L830 | 79.50 € | **75.90 €** | 10.2 % | **5.2 %** | 68.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ JOY 2 KM0561 | 44.00 € | **40.50 €** | 14.9 % | **5.8 %** | 36.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie LiFePO4 12,8V 10Ah MHPower MS10-12(L) F2-6,3mm | 45.00 € | **41.50 €** | 14.8 % | **5.9 %** | 40.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 24 Ah MHPower MS24-12 | 47.00 € | **43.50 €** | 14.7 % | **6.1 %** | 43.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **52.00 €** | 15.2 % | **7.9 %** | 52.17 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.50 € | **129.00 €** | 10.4 % | **7.4 %** | 129.18 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 72.00 € | **68.50 €** | 15.1 % | **9.5 %** | 68.90 € | stávame sa najlacnejší |
| TEFAL VC 140131 | 73.90 € | **70.50 €** | 10.1 % | **5.1 %** | 57.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.50 €** | 15.2 % | **9.8 %** | 69.90 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.90 € | **36.50 €** | 15.0 % | **5.2 %** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GoSmart LED vánoční řetěz EMOS D4ZR01, 8 m, venkovní... | 41.00 € | **37.90 €** | 14.4 % | **5.8 %** | 23.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED pásek EMOS ZPW518R GoSmart WiFi 5 m, 22W, 1000lm... | 41.00 € | **37.90 €** | 14.4 % | **5.8 %** | 31.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 52.00 € | **48.90 €** | 22.5 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.00 € | **37.90 €** | 15.1 % | **6.4 %** | 38.00 € | stávame sa najlacnejší |
| Tefal HT464138 | 67.50 € | **64.50 €** | 10.3 % | **5.4 %** | 55.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFA43BWBXC | 68.50 € | **65.50 €** | 10.3 % | **5.5 %** | 58.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rozšírenie inteligentných svetelnch panelov Yeelight... | 37.50 € | **34.50 €** | 15.4 % | **6.2 %** | 32.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA TSA3507 ruční mixér 1200W sada | 36.90 € | **33.90 €** | 15.0 % | **5.7 %** | 33.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.90 €** | 15.0 % | **6.5 %** | 37.92 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **118.00 €** | 14.9 % | **12.0 %** | 118.04 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **36.00 €** | 14.9 % | **6.1 %** | 36.29 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 149.50 € | **146.50 €** | 15.1 % | **12.8 %** | 146.89 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 40.00 € | **37.00 €** | 14.5 % | **6.0 %** | 37.39 € | stávame sa najlacnejší |
| Guma posilovací REBEL ACTIVE RBA-3001-S7 TPE sada cv... | 32.90 € | **30.00 €** | 15.4 % | **5.2 %** | 29.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.90 € | **37.00 €** | 16.1 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8053  DIGITAL AIR FRYE... | 34.50 € | **31.90 €** | 14.9 % | **6.2 %** | 31.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anemometer UNI-T UT363S | 30.50 € | **27.90 €** | 15.7 % | **5.8 %** | 27.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.50 € | **29.90 €** | 15.8 % | **6.6 %** | 30.00 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 52.50 € | **49.90 €** | 14.9 % | **9.2 %** | 50.00 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **101.90 €** | 15.1 % | **12.3 %** | 101.94 € | stávame sa najlacnejší |
| MERACH spinningové kolo MR-S26B2-EU (čierne) | 177.50 € | **174.90 €** | 14.9 % | **13.2 %** | 175.00 € | stávame sa najlacnejší |
| Zelmer ruční šlehač ZHM2759 | 55.00 € | **52.50 €** | 10.1 % | **5.1 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 8.90 € | **6.40 €** | 47.7 % | **6.2 %** | 6.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFS26120XQ | 330.50 € | **328.00 €** | 7.7 % | **6.9 %** | 328.06 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.50 € | **124.00 €** | 10.2 % | **8.0 %** | 124.11 € | stávame sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 65.00 € | **62.50 €** | 14.6 % | **10.2 %** | 62.69 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 41.0 % | **26.6 %** | 22.20 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 339.00 € | **336.50 €** | 15.0 % | **14.1 %** | 336.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 34.00 € | **31.50 €** | 14.9 % | **6.5 %** | 31.89 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Street X-BASS KM... | 76.90 € | **74.50 €** | 8.5 % | **5.1 %** | 64.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pekáč nepř.PREMIUM DB 39,5x22 | 51.90 € | **49.50 €** | 10.5 % | **5.4 %** | 39.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV5736E0 | 59.90 € | **57.50 €** | 10.1 % | **5.7 %** | 51.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED ambientní lampa EMOS ZCW11BR GoSmart, černá, tep... | 30.90 € | **28.50 €** | 14.9 % | **6.0 %** | 23.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED ambientní lampa EMOS ZCW11WR GoSmart, bílá, tepl... | 30.90 € | **28.50 €** | 14.9 % | **6.0 %** | 23.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brána GoSmart multifunkční ZigBee EMOS IP-2000Z s Bl... | 30.90 € | **28.50 €** | 15.2 % | **6.2 %** | 27.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 25.90 € | **23.50 €** | 28.0 % | **16.1 %** | 23.90 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 287.00 € | **284.90 €** | 15.0 % | **14.2 %** | 284.96 € | stávame sa najlacnejší |
| Fixed nabíjecí stojan 3v1 FIXMFLE-AL-GR | 51.00 € | **48.90 €** | 10.2 % | **5.7 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skriňa na disky SSD/M2 Lexar LPAE06N 10Gb/s | 25.50 € | **23.50 €** | 15.0 % | **6.0 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Colmi P71 Smartwatch (Purple) | 23.00 € | **21.00 €** | 15.1 % | **5.1 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED pásek EMOS ZPW218R GoSmart WiFi 2m, 11W, 450lm, ... | 24.90 € | **22.90 €** | 15.7 % | **6.4 %** | 19.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zastrihávač pre domáce zvieratá 2v1 Petkit | 25.90 € | **23.90 €** | 14.9 % | **6.0 %** | 21.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GT 110838 | 31.90 € | **29.90 €** | 12.7 % | **5.6 %** | 27.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 076 | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 42.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal MB450B38 | 42.50 € | **40.50 €** | 11.1 % | **5.9 %** | 38.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente R2 robotický vysavač | 96.00 € | **94.00 €** | 7.5 % | **5.3 %** | 94.09 € | stávame sa najlacnejší |
| Salente Rtx-R2 | 96.00 € | **94.00 €** | 7.5 % | **5.3 %** | 94.09 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 27.90 € | **25.90 €** | 15.1 % | **6.9 %** | 26.00 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 33.50 € | **31.50 €** | 38.0 % | **29.7 %** | 31.62 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **224.50 €** | 15.0 % | **14.0 %** | 224.66 € | stávame sa najlacnejší |
| DOMO DO42602S | 40.50 € | **38.50 €** | 11.3 % | **5.8 %** | 38.69 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 162.50 € | **160.50 €** | 10.1 % | **8.7 %** | 160.70 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.00 € | **105.00 €** | 10.0 % | **8.0 %** | 105.21 € | stávame sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 69.00 € | **67.00 €** | 12.2 % | **9.0 %** | 67.30 € | stávame sa najlacnejší |
| Garett ROSE Gold Solid Steel | 69.00 € | **67.00 €** | 12.2 % | **9.0 %** | 67.30 € | stávame sa najlacnejší |
| Salente Smartdust | 134.50 € | **132.50 €** | 7.1 % | **5.5 %** | 132.83 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **103.50 €** | 15.0 % | **12.8 %** | 103.83 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 90.00 € | **88.00 €** | 14.8 % | **12.2 %** | 88.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT GETI GWH04W 5kW (pro FV ohřev... | 337.50 € | **335.50 €** | 15.0 % | **14.4 %** | 335.89 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 79.00 € | **77.00 €** | 14.9 % | **12.0 %** | 77.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.50 € | **22.50 €** | 15.7 % | **6.2 %** | 22.89 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 24.00 € | **22.00 €** | 14.7 % | **5.2 %** | 22.39 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.50 € | **63.50 €** | 20.1 % | **16.4 %** | 63.90 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **24.00 €** | 14.5 % | **5.7 %** | 24.49 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 159.90 € | **158.00 €** | 10.2 % | **8.9 %** | 158.20 € | stávame sa najlacnejší |
| Salente Combo-4In1 | 126.90 € | **125.00 €** | 10.0 % | **8.4 %** | 125.20 € | stávame sa najlacnejší |
| EMOS IP-2213Z /H5022/ GoSmart opakovač signálu pro Z... | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 15.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Clean Twist M Ergo+náhr. Static | 42.90 € | **41.00 €** | 18.8 % | **13.5 %** | 41.29 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 40.90 € | **39.00 €** | 38.1 % | **31.7 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **15.00 €** | 38.6 % | **23.1 %** | 15.50 € | stávame sa najlacnejší |
| Banquet Konvice smalt MAGNOLIA 3 l | 30.50 € | **28.90 €** | 11.6 % | **5.8 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS P5735SS GoSmart stříbrný domovní bezdrátový zvo... | 24.50 € | **22.90 €** | 14.1 % | **6.7 %** | 18.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS P5735WS GoSmart bílý domovní bezdrátový zvonek ... | 24.50 € | **22.90 €** | 14.1 % | **6.7 %** | 18.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dvojkanálový mini prepínač bez N Sonoff MINI-ZB2GS-L... | 20.50 € | **18.90 €** | 15.0 % | **6.0 %** | 15.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DJI RoboMaster TT celoplošný ochranný kryt vrtule | 23.50 € | **21.90 €** | 14.6 % | **6.8 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterka Superfire L6-U – 1480 lm, 330 m, 5 režimov, ... | 18.50 € | **16.90 €** | 15.2 % | **5.2 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 19.50 € | **17.90 €** | 34.6 % | **23.5 %** | 18.00 € | stávame sa najlacnejší |
| Powerbanka EMOS WI 522 /B0555BL/, 5 000 mAh, 20 W+Wi... | 25.50 € | **23.90 €** | 14.5 % | **7.4 %** | 24.00 € | stávame sa najlacnejší |
| Powerbanka EMOS WI 522 /B0555GY/, 5 000 mAh, 20 W+Wi... | 25.50 € | **23.90 €** | 14.5 % | **7.4 %** | 24.00 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) EMOS GS22111, IP20 1200W... | 16.50 € | **14.90 €** | 16.6 % | **5.3 %** | 8.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 17.50 € | **15.90 €** | 16.1 % | **5.5 %** | 16.00 € | stávame sa najlacnejší |
| Sprchový stan Trizand 23492 | 24.00 € | **22.50 €** | 14.2 % | **7.0 %** | 16.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM208T bílá | 113.00 € | **111.50 €** | 6.6 % | **5.2 %** | 107.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Mlýnek na strouhanku 30,5cm | 23.50 € | **22.00 €** | 12.3 % | **5.1 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální GARNI 138B | 20.00 € | **18.50 €** | 14.5 % | **5.9 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EJEAS Q7 motorcycle intercom | 44.00 € | **42.50 €** | 14.4 % | **10.5 %** | 42.60 € | stávame sa najlacnejší |
| Niceboy PILOT S5 GPS + WIFI | 49.50 € | **48.00 €** | 10.9 % | **7.5 %** | 48.10 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.00 € | **17.50 €** | 16.9 % | **7.7 %** | 17.60 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 153.00 € | **151.50 €** | 6.9 % | **5.9 %** | 151.79 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 285.50 € | **284.00 €** | 9.5 % | **8.9 %** | 284.39 € | stávame sa najlacnejší |
| Elektrický ohřívač Lumni Kaminer 26374 | 23.50 € | **22.00 €** | 15.4 % | **8.1 %** | 22.50 € | stávame sa najlacnejší |
| Rozváděč R-FVE-A40-1 – třída ochrany I+II (s AC Svod... | 1284.50 € | **1283.00 €** | 15.0 % | **14.9 %** | 1283.50 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 68.50 € | **67.00 €** | 7.6 % | **5.3 %** | 67.50 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 72.90 € | **71.50 €** | 14.2 % | **12.0 %** | 71.76 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 82.90 € | **81.50 €** | 15.2 % | **13.2 %** | 81.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 70.90 € | **69.50 €** | 30.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, vypínač,... | 9.90 € | **8.50 €** | 22.3 % | **5.0 %** | 7.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator Sada 3ks přívešků Life APD002 | 34.90 € | **33.50 €** | 10.5 % | **6.1 %** | 24.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Konvice smalt PARIS 2,2 l | 25.90 € | **24.50 €** | 11.1 % | **5.1 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Konvice smalt POPPY 2,2 l | 25.90 € | **24.50 €** | 11.1 % | **5.1 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZigBee LCD senzor teploty a vlhkosti Sonoff SNZB-02WD | 18.90 € | **17.50 €** | 15.7 % | **7.1 %** | 10.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE205 AC750 WiFi Range Extender | 30.90 € | **29.50 €** | 10.5 % | **5.5 %** | 25.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530C Black | 34.90 € | **33.50 €** | 10.3 % | **5.9 %** | 32.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.4 % | **5.8 %** | 26.53 € | stávame sa najlacnejší |
| Tester napätia a spojitosti Uni-T UT18D | 42.90 € | **41.50 €** | 15.0 % | **11.3 %** | 41.59 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 60.90 € | **59.50 €** | 10.3 % | **7.8 %** | 59.60 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Ariete ART 438/04 | 30.90 € | **29.50 €** | 11.0 % | **6.0 %** | 29.66 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **31.50 €** | 15.2 % | **10.3 %** | 31.90 € | stávame sa najlacnejší |
| Black&Decker BXPC1100E | 32.00 € | **30.90 €** | 10.1 % | **6.3 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Ania 5R, chladicí podst. pro NTB | 25.00 € | **23.90 €** | 10.3 % | **5.4 %** | 22.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **33.90 €** | 14.6 % | **11.0 %** | 34.00 € | stávame sa najlacnejší |
| Zdroj pulzní EMOS N3113 s hřebínkem 2250mA (3-12V) u... | 16.00 € | **14.90 €** | 14.7 % | **6.8 %** | 13.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PIR senzor a přítomnosti (pohybové čidlo) ORNO OR-CR... | 17.00 € | **15.90 €** | 14.9 % | **7.5 %** | 14.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PIR senzor a přítomnosti (pohybové čidlo) ORNO OR-CR... | 17.00 € | **15.90 €** | 14.9 % | **7.5 %** | 15.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BMGB25332BG | 178.00 € | **176.90 €** | 8.4 % | **7.7 %** | 177.00 € | stávame sa najlacnejší |
| Leifheit Odpeckovávač švestek s nádobkou | 19.90 € | **18.90 €** | 11.5 % | **5.9 %** | 8.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termohrnec AVANZA 5 l, bílá | 28.50 € | **27.50 €** | 10.8 % | **6.9 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Hrnec nepř. GRAN. PR 24x11cm | 26.50 € | **25.50 €** | 10.2 % | **6.0 %** | 17.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termohrnec LAVENDER 3,5 l | 18.50 € | **17.50 €** | 12.6 % | **6.5 %** | 12.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Coox Quiche forma 3 díly se skleněnou po | 20.90 € | **19.90 €** | 11.5 % | **6.2 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GoSmart bezdrátový dveřní senzor EMOS IP-2011Z, ZigBee | 13.50 € | **12.50 €** | 14.9 % | **6.4 %** | 7.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BANQUET Mlýnek na kávu CULINARIA VIII | 15.90 € | **14.90 €** | 12.6 % | **5.5 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní válec REBEL ACTIVE RBA-3052-90  15x90cm černý | 12.90 € | **11.90 €** | 15.1 % | **6.2 %** | 7.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluneční brýle polarizační REBEL ACTIVE RBA-7101-BK | 11.50 € | **10.50 €** | 15.9 % | **5.8 %** | 7.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4297 Mia | 21.00 € | **20.00 €** | 10.4 % | **5.2 %** | 17.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluneční brýle polarizační REBEL ACTIVE RBA-7100-RB | 11.50 € | **10.50 €** | 15.9 % | **5.8 %** | 8.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s bazénovým čidlem GARNI 245P | 31.90 € | **30.90 €** | 9.8 % | **6.4 %** | 30.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal B8644474 | 21.50 € | **20.50 €** | 11.8 % | **6.6 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C100 WiFi camera | 23.90 € | **22.90 €** | 11.1 % | **6.4 %** | 22.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR177003 | 20.90 € | **19.90 €** | 12.0 % | **6.7 %** | 19.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.40 € | **5.40 €** | 47.0 % | **24.0 %** | 5.41 € | stávame sa najlacnejší |
| Solight vonkajšia otočná IP kamera | 38.50 € | **37.50 €** | 42.7 % | **39.0 %** | 37.54 € | stávame sa najlacnejší |
| ETA 051690000 | 65.50 € | **64.50 €** | 12.0 % | **10.3 %** | 64.58 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 62.50 € | **61.50 €** | 10.9 % | **9.1 %** | 61.59 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **19.90 €** | 30.3 % | **24.1 %** | 20.00 € | stávame sa najlacnejší |
| Rozváděč R-FVE-A40-3 – třída ochrany I+II (bez AC Sv... | 974.90 € | **973.90 €** | 15.0 % | **14.9 %** | 974.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 69.90 € | **68.90 €** | 11.7 % | **10.1 %** | 69.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 51,2V 100Ah GETI GBLW-51-100V2 nástěnná | 1027.90 € | **1026.90 €** | 15.0 % | **14.9 %** | 1027.00 € | stávame sa najlacnejší |
| Casio Fx 85 Es Plus 2E | 20.90 € | **19.90 €** | 15.0 % | **9.5 %** | 20.00 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Carrera Auto GO/GO+ 64120 Ford Mustang 1 | 14.50 € | **13.50 €** | 13.9 % | **6.0 %** | 13.66 € | stávame sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.50 €** | 10.5 % | **5.1 %** | 19.67 € | stávame sa najlacnejší |
| Ariete ART 583/03 | 76.50 € | **75.50 €** | 10.3 % | **8.9 %** | 75.69 € | stávame sa najlacnejší |
| Dynamický mikrofon Maono PD200x (černý) | 49.00 € | **48.00 €** | 14.7 % | **12.4 %** | 48.23 € | stávame sa najlacnejší |
| Nabíječka USB KRUGER & MATZ KM0856 GaN 45W | 13.50 € | **12.50 €** | 14.8 % | **6.3 %** | 12.73 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X25 (čierne) | 15.00 € | **14.00 €** | 25.6 % | **17.2 %** | 14.27 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.50 € | **26.50 €** | 14.9 % | **10.8 %** | 26.89 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8027 | 14.50 € | **13.50 €** | 13.9 % | **6.0 %** | 13.90 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 34.50 € | **33.50 €** | 55.5 % | **51.0 %** | 33.90 € | stávame sa najlacnejší |
| Leifheit Air Board M Compact | 56.00 € | **55.00 €** | 11.1 % | **9.1 %** | 55.50 € | stávame sa najlacnejší |
| Rozváděč R-HW-SW16P-AP (pro Huawei) | 974.00 € | **973.00 €** | 15.0 % | **14.9 %** | 973.50 € | stávame sa najlacnejší |
| Solární regulátor MPPT Antik Water Heater PWH 9kW (p... | 1024.00 € | **1023.00 €** | 15.0 % | **14.9 %** | 1023.50 € | stávame sa najlacnejší |
| CP-USP-D2520L10-D 2.0 Mpix venkovní PTZ kamera 4V1 s... | 482.00 € | **481.00 €** | 15.0 % | **14.8 %** | 481.50 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 13.00 € | **12.00 €** | 21.1 % | **11.8 %** | 12.50 € | stávame sa najlacnejší |
| CP-UNR-4K4042-P4V3 Síťový videorekordér H.265 4K pro... | 482.00 € | **481.00 €** | 15.0 % | **14.8 %** | 481.50 € | stávame sa najlacnejší |
| G3ferrari G1019100 Horkovzdušná fritéza | 105.90 € | **105.00 €** | 10.3 % | **9.4 %** | 105.20 € | stávame sa najlacnejší |
| CP-UNC-TC51L5C-VMDS 5.0 Mpix venkovní IP kamera s IR... | 227.90 € | **227.00 €** | 15.1 % | **14.6 %** | 227.50 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 60Ah VIPOW BAT0490 | 169.90 € | **169.00 €** | 15.1 % | **14.5 %** | 169.50 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 227.90 € | **227.00 €** | 15.1 % | **14.6 %** | 227.50 € | stávame sa najlacnejší |
| Powerbanka EMOS NTBF30 /B0561B/, 27 000 mAh, 100 W P... | 69.90 € | **69.00 €** | 15.3 % | **13.8 %** | 69.50 € | stávame sa najlacnejší |
| LCD displej KRUGER & MATZ KM2021 Android Auto Apple ... | 81.90 € | **81.00 €** | 15.2 % | **14.0 %** | 81.50 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 87.90 € | **87.00 €** | 15.2 % | **14.0 %** | 87.50 € | stávame sa najlacnejší |
| Rotoped REBEL ACTIVE RBA-1013 | 70.90 € | **70.00 €** | 15.3 % | **13.8 %** | 70.50 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 14.17 € | stávame sa najlacnejší |
| Zelmer ZHM2550 | 39.90 € | **39.00 €** | 28.9 % | **26.0 %** | 39.03 € | stávame sa najlacnejší |
| DOMO DO9192MC | 23.90 € | **23.00 €** | 10.0 % | **5.9 %** | 23.22 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 26.90 € | **26.00 €** | 15.3 % | **11.4 %** | 26.49 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.90 € | **22.00 €** | 14.9 % | **10.3 %** | 22.50 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.90 € | **16.00 €** | 15.9 % | **9.7 %** | 16.50 € | stávame sa najlacnejší |
| TELEVES INNOVA BOSS LTE700 5G pokojová inteligentní ... | 57.90 € | **57.00 €** | 15.4 % | **13.6 %** | 57.50 € | stávame sa najlacnejší |
| TESLA TE-344 venkovní anténa | 21.90 € | **21.00 €** | 16.0 % | **11.2 %** | 21.50 € | stávame sa najlacnejší |
| Dětská elektrická kytara 22407 růžová + mikrofon + z... | 36.90 € | **36.00 €** | 15.6 % | **12.8 %** | 36.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.90 € | **26.00 €** | 44.8 % | **40.0 %** | 26.50 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 328.90 € | **328.00 €** | 8.1 % | **7.8 %** | 328.11 € | stávame sa najlacnejší |
| Solární regulátor MPPT Victron Energy SmartSolar 150... | 588.90 € | **588.00 €** | 15.0 % | **14.8 %** | 588.50 € | stávame sa najlacnejší |
| CP-UNC-TD61L4E-MD-0360 6.0 Mpix venkovní IP kamera s... | 299.90 € | **299.00 €** | 15.0 % | **14.7 %** | 299.50 € | stávame sa najlacnejší |
| CP-UNC-VB81ZL4-VMDS 4K 8.0 Mpix  venkovní IP kamera ... | 328.90 € | **328.00 €** | 15.0 % | **14.7 %** | 328.50 € | stávame sa najlacnejší |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 258.90 € | **258.00 €** | 15.1 % | **14.7 %** | 258.50 € | stávame sa najlacnejší |
| FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 598.90 € | **598.00 €** | 15.0 % | **14.8 %** | 598.50 € | stávame sa najlacnejší |
| Běžecký pás REBEL ACTIVE RBA-1001 | 278.90 € | **278.00 €** | 15.1 % | **14.7 %** | 278.50 € | stávame sa najlacnejší |
| Sluneční brýle Kruger&Matz KM00035 polarizační | 10.50 € | **9.70 €** | 14.6 % | **5.9 %** | 8.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-261/B | 10.50 € | **9.70 €** | 14.1 % | **5.4 %** | 9.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.90 € | **6.10 €** | 37.8 % | **21.9 %** | 6.20 € | stávame sa najlacnejší |
| CP PLUS CP-UNB-CM352 IP vnitřní videomonitor | 281.50 € | **280.90 €** | 15.0 % | **14.8 %** | 281.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 403.50 € | **402.90 €** | 15.0 % | **14.9 %** | 403.00 € | stávame sa najlacnejší |
| Klimatizace MW POWER ALFA 12K WIFI V1, 12000BTu, R32 | 535.50 € | **534.90 €** | 15.0 % | **14.9 %** | 535.00 € | stávame sa najlacnejší |
| Roborock Qrevo C Pro Black | 608.50 € | **607.90 €** | 5.6 % | **5.5 %** | 608.00 € | stávame sa najlacnejší |
| Puškohled LEVENHUK Halo NVR50 s nočním viděním | 425.50 € | **424.90 €** | 15.0 % | **14.9 %** | 425.00 € | stávame sa najlacnejší |
| Multipřepínač TeleTek 13/32 | 468.50 € | **467.90 €** | 15.0 % | **14.8 %** | 468.00 € | stávame sa najlacnejší |
| CP-UNC-VB51ZL4-VMDS-27135 5.0 Mpix venkovní IP kamer... | 273.50 € | **272.90 €** | 15.1 % | **14.8 %** | 273.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower L100-12-OUT | 551.50 € | **550.90 €** | 15.0 % | **14.9 %** | 551.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 345Ah SOLARFAM AST-345 s výhře... | 696.50 € | **695.90 €** | 15.0 % | **14.9 %** | 696.00 € | stávame sa najlacnejší |
| HDD 3.5" 6TB 256MB Seagate SKYHAWK pro kamerové syst... | 348.50 € | **347.90 €** | 15.0 % | **14.9 %** | 348.00 € | stávame sa najlacnejší |
| CP-UVR-1601K2-I3 Šestnáctikanálový 5v1 DVR s kompres... | 528.50 € | **527.90 €** | 15.0 % | **14.8 %** | 528.00 € | stávame sa najlacnejší |
| FINLUX 55FQK9060 ULTRA HD 4K QLED SMART TIVO | 610.50 € | **609.90 €** | 15.0 % | **14.9 %** | 610.00 € | stávame sa najlacnejší |
| MASCOM MC22TFW11 – 22” Full HD Smart TV (12 V, WebOS... | 294.50 € | **293.90 €** | 15.0 % | **14.8 %** | 294.00 € | stávame sa najlacnejší |
| Televes AVANT 12 PRO (532203) | 386.50 € | **385.90 €** | 15.0 % | **14.9 %** | 386.00 € | stávame sa najlacnejší |
| Candy TCA273D3-S | 281.50 € | **280.90 €** | 8.1 % | **7.9 %** | 281.00 € | stávame sa najlacnejší |
| Banquet Termohrnec AVANZA 3,5 l, bílá | 20.50 € | **19.90 €** | 10.0 % | **6.8 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 17Ah  VIPOW bezúdržbový akumu... | 30.50 € | **29.90 €** | 7.4 % | **5.3 %** | 29.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CCPA Apple Carplay/Andr... | 37.50 € | **36.90 €** | 15.4 % | **13.6 %** | 37.00 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 19.50 € | **18.90 €** | 16.4 % | **12.8 %** | 19.00 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V200 | 32.50 € | **31.90 €** | 15.8 % | **13.7 %** | 32.00 € | stávame sa najlacnejší |
| Vysílač DO TechniSat TechniControl | 20.50 € | **19.90 €** | 16.4 % | **13.0 %** | 20.00 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.50 € | **24.90 €** | 15.0 % | **12.3 %** | 25.00 € | stávame sa najlacnejší |
| Činky litinové nastavitelné 15kg, REBEL ACTIVE RBA-2... | 46.50 € | **45.90 €** | 15.6 % | **14.1 %** | 46.00 € | stávame sa najlacnejší |
| Banquet Prkénko BRILL.Bamboo 35cm moz. | 15.50 € | **14.90 €** | 10.5 % | **6.3 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Rendlík ner. MATTE NL 0,9 l | 15.50 € | **14.90 €** | 10.5 % | **6.3 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MikroTik napájecí adaptér 24V 1,2A 29W, rovný konektor | 12.50 € | **11.90 €** | 13.7 % | **8.2 %** | 8.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá ONIKUMA T209 | 12.50 € | **11.90 €** | 13.3 % | **7.9 %** | 8.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR009008 | 11.50 € | **10.90 €** | 13.9 % | **7.9 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SecureQ i13 - bezdrátový detektor pohybu | 11.50 € | **10.90 €** | 13.1 % | **7.2 %** | 9.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.90 €** | 16.1 % | **10.6 %** | 11.92 € | stávame sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 11.94 € | stávame sa najlacnejší |
| Napájecí zdroj spínaný URZ1169  12V / 5A - 2,1/5,5 | 12.50 € | **11.90 €** | 13.7 % | **8.2 %** | 12.00 € | stávame sa najlacnejší |
| Cabletech UCH0023A1 | 12.50 € | **11.90 €** | 16.9 % | **11.3 %** | 12.00 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 16.50 € | **15.90 €** | 23.5 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| Sada pro přežití SURVIVAL 32v1 Trizand 19920 | 15.50 € | **14.90 €** | 14.9 % | **10.4 %** | 15.00 € | stávame sa najlacnejší |
| Solární regulátor MPPT Epever XTRA3210N G3 BLE, 12/2... | 126.50 € | **125.90 €** | 15.2 % | **14.6 %** | 126.00 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 234.50 € | **233.90 €** | 15.1 % | **14.8 %** | 234.00 € | stávame sa najlacnejší |
| CP-UNC-VC21L5-VMDS-0280 2.0 Mpix venkovní IP kamera ... | 204.50 € | **203.90 €** | 15.1 % | **14.8 %** | 204.00 € | stávame sa najlacnejší |
| CP-UVR-0401L1B-4KH Čtyřkanálový 4K 5v1 DVR s kompres... | 249.50 € | **248.90 €** | 15.1 % | **14.8 %** | 249.00 € | stávame sa najlacnejší |
| CP-UVR-0801E1-CV4 Osmikanálový 5v1 mini DVR s kompre... | 135.50 € | **134.90 €** | 15.2 % | **14.7 %** | 135.00 € | stávame sa najlacnejší |
| Alcad CA-662 | 146.50 € | **145.90 €** | 15.1 % | **14.6 %** | 146.00 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4507-G - ŠEDÝ  11' ... | 187.50 € | **186.90 €** | 15.1 % | **14.7 %** | 187.00 € | stávame sa najlacnejší |
| Spinningové kolo REBEL ACTIVE RBA-1007 | 205.50 € | **204.90 €** | 15.1 % | **14.7 %** | 205.00 € | stávame sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-L ( 40 - 43 ) | 13.00 € | **12.50 €** | 13.5 % | **9.2 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guma posilovací REBEL ACTIVE RBA-3004 Latexová sada ... | 11.00 € | **10.50 €** | 13.8 % | **8.6 %** | 9.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guma posilovací REBEL ACTIVE RBA-3005 Latexová sada ... | 11.00 € | **10.50 €** | 13.8 % | **8.6 %** | 10.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **7.00 €** | 54.8 % | **44.4 %** | 7.03 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.5 % | **9.3 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.8 % | **9.6 %** | 24.04 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 10.3 % | **8.4 %** | 30.08 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.8 % | **9.9 %** | 19.08 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 12.2 % | **9.8 %** | 23.08 € | stávame sa najlacnejší |
| Fixed sluchátka Buds FIXBDS-BK | 21.50 € | **21.00 €** | 10.4 % | **7.8 %** | 21.08 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.00 € | **56.50 €** | 14.9 % | **13.9 %** | 56.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.40 €** | 17.1 % | **10.5 %** | 8.49 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 14.50 € | **14.00 €** | 57.8 % | **52.4 %** | 14.09 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely | 2.40 € | **1.90 €** | 37.4 % | **8.8 %** | 2.00 € | stávame sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **17.00 €** | 11.9 % | **8.7 %** | 17.13 € | stávame sa najlacnejší |
| LEIFHEIT 51016 | 50.50 € | **50.00 €** | 10.5 % | **9.4 %** | 50.13 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-BH-3A-W-WiFi | 30.50 € | **30.00 €** | 15.5 % | **13.7 %** | 30.20 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 12.3 % | **9.9 %** | 23.21 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **17.50 €** | 15.0 % | **11.8 %** | 17.72 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-EH-16A-W-WiFi | 30.50 € | **30.00 €** | 15.3 % | **13.4 %** | 30.25 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.5 % | **9.9 %** | 33.25 € | stávame sa najlacnejší |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **18.00 €** | 10.4 % | **7.4 %** | 18.25 € | stávame sa najlacnejší |
| GUZZANTI GZ 44GW | 198.50 € | **198.00 €** | 6.4 % | **6.1 %** | 198.25 € | stávame sa najlacnejší |
| Prenosná pumpa Flextail Tiny Pump 2 (oranžová) | 22.50 € | **22.00 €** | 25.0 % | **22.3 %** | 22.27 € | stávame sa najlacnejší |
| Braun CG9043 | 213.50 € | **213.00 €** | 7.3 % | **7.0 %** | 213.28 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 12.1 % | **7.2 %** | 11.28 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.7 % | **8.3 %** | 16.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 14.2 % | **10.0 %** | 13.29 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 10.2 % | **8.5 %** | 33.29 € | stávame sa najlacnejší |
| Beko VRT96425VD | 252.50 € | **252.00 €** | 6.3 % | **6.1 %** | 252.29 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.50 € | **65.00 €** | 9.9 % | **9.1 %** | 65.29 € | stávame sa najlacnejší |
| ETA 723590000 | 327.50 € | **327.00 €** | 6.5 % | **6.4 %** | 327.29 € | stávame sa najlacnejší |
| Maxxo Chamber Line 40 | 245.50 € | **245.00 €** | 7.5 % | **7.3 %** | 245.29 € | stávame sa najlacnejší |
| Braun IS5247.VI | 183.50 € | **183.00 €** | 7.2 % | **6.9 %** | 183.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 10.2 % | **7.9 %** | 23.29 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 31.50 € | **31.00 €** | 55.0 % | **52.6 %** | 31.29 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 36.50 € | **36.00 €** | 7.8 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE E25 Pro | 235.50 € | **235.00 €** | 14.9 % | **14.7 %** | 235.29 € | stávame sa najlacnejší |
| ETA 410090000 | 330.50 € | **330.00 €** | 7.0 % | **6.9 %** | 330.30 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.00 €** | 10.2 % | **9.7 %** | 110.30 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 271.00 € | **270.50 €** | 8.1 % | **7.9 %** | 270.80 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 142.50 € | **142.00 €** | 8.8 % | **8.4 %** | 142.30 € | stávame sa najlacnejší |
| DOMO DO9252I | 252.50 € | **252.00 €** | 8.1 % | **7.9 %** | 252.30 € | stávame sa najlacnejší |
| Tefal GV9812E0 | 331.50 € | **331.00 €** | 8.9 % | **8.7 %** | 331.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 9 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| Roadstar IR-390D+BT/BK | 59.50 € | **59.00 €** | 8.5 % | **7.6 %** | 59.30 € | stávame sa najlacnejší |
| YAMAHA NS-P41 BLACK | 295.50 € | **295.00 €** | 14.5 % | **14.3 %** | 295.30 € | stávame sa najlacnejší |
| TV anténa Televes ELLIPSE LTE700 + 12V zdroj Picokom | 115.50 € | **115.00 €** | 8.5 % | **8.0 %** | 115.30 € | stávame sa najlacnejší |
| Tesla 32E325BH 32" HD LED TV | 128.50 € | **128.00 €** | 5.5 % | **5.1 %** | 128.30 € | stávame sa najlacnejší |
| Gorenje WPNEI72SA1SWIFI | 286.50 € | **286.00 €** | 8.1 % | **7.9 %** | 286.30 € | stávame sa najlacnejší |
| Beko BDIN38646D | 494.50 € | **494.00 €** | 7.1 % | **7.0 %** | 494.30 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 293.50 € | **293.00 €** | 8.1 % | **8.0 %** | 293.30 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 46.50 € | **46.00 €** | 11.9 % | **10.7 %** | 46.32 € | stávame sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 75.50 € | **75.00 €** | 9.4 % | **8.7 %** | 75.32 € | stávame sa najlacnejší |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 22.50 € | **22.00 €** | 9.9 % | **7.5 %** | 22.33 € | stávame sa najlacnejší |
| YAMAHA CD-C603 BLACK | 575.50 € | **575.00 €** | 6.6 % | **6.5 %** | 575.34 € | stávame sa najlacnejší |
| YAMAHA CD-C603 SILVER | 575.50 € | **575.00 €** | 7.8 % | **7.7 %** | 575.34 € | stávame sa najlacnejší |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 30.50 € | **30.00 €** | 9.5 % | **7.7 %** | 30.34 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.50 € | **30.00 €** | 14.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.50 € | **30.00 €** | 14.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 22.50 € | **22.00 €** | 40.8 % | **37.7 %** | 22.34 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 189.50 € | **189.00 €** | 7.1 % | **6.8 %** | 189.34 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Black | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.35 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.35 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.35 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.35 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.50 € | **22.00 €** | 31.4 % | **28.5 %** | 22.36 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 12.50 € | **12.00 €** | 36.4 % | **31.0 %** | 12.37 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 248.50 € | **248.00 €** | 9.3 % | **9.1 %** | 248.37 € | stávame sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 225.50 € | **225.00 €** | 6.8 % | **6.5 %** | 225.37 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 11.0 % | **7.7 %** | 16.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.7 % | **8.3 %** | 22.38 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 10.1 % | **8.2 %** | 29.38 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.50 € | **20.00 €** | 8.7 % | **6.0 %** | 20.38 € | stávame sa najlacnejší |
| Bezkontaktný otáčkomer Uni-T UT372 | 70.50 € | **70.00 €** | 14.7 % | **13.9 %** | 70.39 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.50 € | **48.00 €** | 10.9 % | **9.7 %** | 48.39 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 194.50 € | **194.00 €** | 15.0 % | **14.7 %** | 194.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 32.50 € | **32.00 €** | 9.7 % | **8.0 %** | 32.39 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 203.50 € | **203.00 €** | 11.3 % | **11.0 %** | 203.39 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 44.50 € | **44.00 €** | 9.4 % | **8.2 %** | 44.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 58.00 € | **57.50 €** | 10.0 % | **9.1 %** | 57.89 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 27.00 € | **26.50 €** | 14.6 % | **12.5 %** | 26.89 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 17.50 € | **17.00 €** | 13.8 % | **10.6 %** | 17.39 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 46.50 € | **46.00 €** | 15.4 % | **14.2 %** | 46.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 472.00 € | **471.50 €** | 9.1 % | **9.0 %** | 471.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 96.50 € | **96.00 €** | 11.8 % | **11.3 %** | 96.39 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 206.00 € | **205.50 €** | 14.9 % | **14.7 %** | 205.89 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 170.00 € | **169.50 €** | 14.9 % | **14.5 %** | 169.89 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 104.50 € | **104.00 €** | 15.1 % | **14.5 %** | 104.39 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 44.50 € | **44.00 €** | 8.9 % | **7.7 %** | 44.39 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 267.50 € | **267.00 €** | 8.6 % | **8.4 %** | 267.39 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 276.50 € | **276.00 €** | 7.9 % | **7.7 %** | 276.39 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 158.50 € | **158.00 €** | 14.5 % | **14.1 %** | 158.39 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.50 € | **37.00 €** | 9.9 % | **8.4 %** | 37.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 17.50 € | **17.00 €** | 33.6 % | **29.8 %** | 17.39 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 16A, USB A+C rychlonabíjačka ... | 15.00 € | **14.50 €** | 45.5 % | **40.7 %** | 14.89 € | stávame sa najlacnejší |
| Kaon MZ-104, 4K satelitní přijímač | 114.50 € | **114.00 €** | 5.6 % | **5.1 %** | 114.39 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 38.50 € | **38.00 €** | 15.3 % | **13.8 %** | 38.39 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 111.50 € | **111.00 €** | 15.0 % | **14.5 %** | 111.39 € | stávame sa najlacnejší |
| Niceboy PILOT S10 Rear Cam | 24.50 € | **24.00 €** | 10.8 % | **8.6 %** | 24.40 € | stávame sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 16.00 € | **15.50 €** | 13.4 % | **9.9 %** | 15.90 € | stávame sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150  černé s LED podsv... | 117.00 € | **116.50 €** | 15.0 % | **14.5 %** | 116.90 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 34.00 € | **33.50 €** | 15.1 % | **13.4 %** | 33.90 € | stávame sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 27.00 € | **26.50 €** | 12.0 % | **9.9 %** | 26.90 € | stávame sa najlacnejší |
| WYBOT C1 Pro – bezdrôtový robot na čistenie bazénov | 418.00 € | **417.50 €** | 5.7 % | **5.5 %** | 417.90 € | stávame sa najlacnejší |
| Solární regulátor ANTIK AC Water Heater (On-Grid) | 415.00 € | **414.50 €** | 15.0 % | **14.8 %** | 414.90 € | stávame sa najlacnejší |
| Solární regulátor MPPT VOLT GREEN BOOST PRO 4000 SIN... | 339.00 € | **338.50 €** | 15.0 % | **14.8 %** | 338.90 € | stávame sa najlacnejší |
| Tefal FF2588E0 | 82.50 € | **82.00 €** | 9.0 % | **8.4 %** | 82.40 € | stávame sa najlacnejší |
| Kuchyňský robot TEESA TSA3545-B EASY COOK SINGLE BLA... | 85.00 € | **84.50 €** | 15.1 % | **14.4 %** | 84.90 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 132.50 € | **132.00 €** | 8.8 % | **8.3 %** | 132.40 € | stávame sa najlacnejší |
| Beko VRT76325VW | 166.50 € | **166.00 €** | 8.7 % | **8.4 %** | 166.40 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 50XN GPS s nočn... | 255.00 € | **254.50 €** | 15.0 % | **14.8 %** | 254.90 € | stávame sa najlacnejší |
| CP PLUS CP-L4C-DX40FL3 4.0 Mpix venkovní dome kamera... | 133.00 € | **132.50 €** | 15.0 % | **14.6 %** | 132.90 € | stávame sa najlacnejší |
| CP-UNC-TA51L3C-0360 5.0 Mpix venkovní IP kamera s IR... | 129.00 € | **128.50 €** | 15.0 % | **14.5 %** | 128.90 € | stávame sa najlacnejší |
| CP-UNC-TC21ZL6-VMDS-27135 2.0 Mpix venkovní IP kamer... | 223.00 € | **222.50 €** | 15.0 % | **14.7 %** | 222.90 € | stávame sa najlacnejší |
| CP PLUS CP-VNC-V4KZR3-VMD-V2 4K venkovní antivandal ... | 342.00 € | **341.50 €** | 15.0 % | **14.8 %** | 341.90 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 409.00 € | **408.50 €** | 14.9 % | **14.8 %** | 408.90 € | stávame sa najlacnejší |
| Baterie olověná  12V /  7,5Ah XTREME / Enerwell bezú... | 16.00 € | **15.50 €** | 15.3 % | **11.7 %** | 15.90 € | stávame sa najlacnejší |
| CP-UVR-0401L1B-4KI3 Čtyřkanálový 4K 5v1 DVR s kompre... | 268.00 € | **267.50 €** | 14.9 % | **14.7 %** | 267.90 € | stávame sa najlacnejší |
| Fixed Pods Pro s ANC FIXPDS-P-BK | 39.50 € | **39.00 €** | 11.3 % | **9.9 %** | 39.40 € | stávame sa najlacnejší |
| FINLUX 32FQI8061 SMART QLED TV FULL HD TIVO | 302.00 € | **301.50 €** | 15.0 % | **14.8 %** | 301.90 € | stávame sa najlacnejší |
| LEM DSA15-5G automatický programovatelný DVB-T/T2 ze... | 205.00 € | **204.50 €** | 15.0 % | **14.7 %** | 204.90 € | stávame sa najlacnejší |
| Hoverboard Rebel Cruiser Paint | 146.00 € | **145.50 €** | 15.0 % | **14.6 %** | 145.90 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 246.50 € | **246.00 €** | 8.1 % | **7.9 %** | 246.40 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 520.50 € | **520.00 €** | 7.1 % | **6.9 %** | 520.40 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 508.50 € | **508.00 €** | 7.1 % | **7.0 %** | 508.40 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 238.50 € | **238.00 €** | 8.0 % | **7.7 %** | 238.40 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 169.50 € | **169.00 €** | 9.1 % | **8.8 %** | 169.40 € | stávame sa najlacnejší |
| Chladící box TEESA TSA5007 25L DC12/24V AC 230V -22°C | 176.00 € | **175.50 €** | 15.0 % | **14.6 %** | 175.90 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 178.50 € | **178.00 €** | 9.1 % | **8.8 %** | 178.40 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 286.50 € | **286.00 €** | 8.0 % | **7.9 %** | 286.40 € | stávame sa najlacnejší |
| BEKO BBIR17300BCS | 347.50 € | **347.00 €** | 7.1 % | **6.9 %** | 347.40 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **12.00 €** | 46.0 % | **40.2 %** | 12.41 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.50 € | **42.00 €** | 9.9 % | **8.6 %** | 42.41 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 14.50 € | **14.00 €** | 12.7 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.42 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **10.00 €** | 13.4 % | **8.0 %** | 10.42 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.50 € | **23.00 €** | 36.9 % | **33.9 %** | 23.44 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **17.00 €** | 11.6 % | **8.4 %** | 17.44 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 335.50 € | **335.00 €** | 6.5 % | **6.3 %** | 335.44 € | stávame sa najlacnejší |
| CrockPot CSC062X | 157.50 € | **157.00 €** | 7.1 % | **6.8 %** | 157.45 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 10.2 % | **8.7 %** | 36.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.46 € | stávame sa najlacnejší |
| Strong LEAP-S3 V2 Google TV box | 64.50 € | **64.00 €** | 11.4 % | **10.6 %** | 64.46 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 221.50 € | **221.00 €** | 9.3 % | **9.1 %** | 221.46 € | stávame sa najlacnejší |
| YAMAHA A-S3200 BLACK | 6002.50 € | **6002.00 €** | 9.3 % | **9.3 %** | 6002.47 € | stávame sa najlacnejší |
| Gorenje R619EAW6 | 481.50 € | **481.00 €** | 6.9 % | **6.8 %** | 481.47 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.50 € | **23.00 €** | 30.5 % | **27.7 %** | 23.48 € | stávame sa najlacnejší |
| Laserová vodováha Uni-T LM575LD | 121.50 € | **121.00 €** | 10.9 % | **10.4 %** | 121.49 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **36.00 €** | 10.9 % | **9.3 %** | 36.49 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **36.00 €** | 10.4 % | **8.9 %** | 36.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 21.8 % | **19.6 %** | 28.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **44.00 €** | 12.3 % | **11.0 %** | 44.49 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.50 € | **23.00 €** | 8.7 % | **6.4 %** | 23.49 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X12 | 17.50 € | **17.00 €** | 15.6 % | **12.3 %** | 17.49 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 24.50 € | **24.00 €** | 36.2 % | **33.5 %** | 24.49 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3020.90 € | **3020.50 €** | 10.0 % | **10.0 %** | 3020.71 € | stávame sa najlacnejší |
| JBL Grip Red | 81.90 € | **81.50 €** | 8.7 % | **8.1 %** | 81.62 € | stávame sa najlacnejší |
| JBL Grip White | 81.90 € | **81.50 €** | 8.7 % | **8.1 %** | 81.62 € | stávame sa najlacnejší |
| Domo DO8719W | 69.90 € | **69.50 €** | 10.2 % | **9.5 %** | 69.67 € | stávame sa najlacnejší |
| Braun HF5050.IBK | 121.90 € | **121.50 €** | 9.8 % | **9.5 %** | 121.70 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 113.90 € | **113.50 €** | 9.8 % | **9.4 %** | 113.70 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 113.90 € | **113.50 €** | 5.6 % | **5.3 %** | 113.70 € | stávame sa najlacnejší |
| GUZZANTI GZ 8501A | 150.90 € | **150.50 €** | 5.8 % | **5.5 %** | 150.71 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 92.90 € | **92.50 €** | 12.8 % | **12.3 %** | 92.72 € | stávame sa najlacnejší |
| G3Ferrari G2014401 Zmrzlinovač | 174.90 € | **174.50 €** | 7.8 % | **7.6 %** | 174.78 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 72.90 € | **72.50 €** | 15.0 % | **14.4 %** | 72.79 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 104.90 € | **104.50 €** | 15.1 % | **14.7 %** | 104.79 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.90 € | **73.50 €** | 14.9 % | **14.3 %** | 73.79 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 158.90 € | **158.50 €** | 15.0 % | **14.7 %** | 158.79 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 119.90 € | **119.50 €** | 13.8 % | **13.5 %** | 119.79 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 12.0 % | **11.6 %** | 113.79 € | stávame sa najlacnejší |
| Sony WFLS910NV fialová | 154.90 € | **154.50 €** | 7.7 % | **7.4 %** | 154.79 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 124.90 € | **124.50 €** | 7.4 % | **7.1 %** | 124.79 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 177.90 € | **177.50 €** | 8.9 % | **8.6 %** | 177.80 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 175.90 € | **175.50 €** | 8.7 % | **8.4 %** | 175.80 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.50 €** | 9.7 % | **9.2 %** | 84.80 € | stávame sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 147.90 € | **147.50 €** | 5.5 % | **5.2 %** | 147.80 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 124.90 € | **124.50 €** | 10.3 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| G3Ferrari G1015502 Mikrovlnná trouba | 116.90 € | **116.50 €** | 9.3 % | **9.0 %** | 116.85 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 206.90 € | **206.50 €** | 8.5 % | **8.3 %** | 206.87 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 114.90 € | **114.50 €** | 6.6 % | **6.3 %** | 114.88 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 233.90 € | **233.50 €** | 9.9 % | **9.7 %** | 233.88 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 76.90 € | **76.50 €** | 10.0 % | **9.5 %** | 76.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 74.90 € | **74.50 €** | 11.5 % | **10.9 %** | 74.89 € | stávame sa najlacnejší |
| Tefal RK812110 | 105.90 € | **105.50 €** | 6.5 % | **6.1 %** | 105.89 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 123.90 € | **123.50 €** | 6.8 % | **6.4 %** | 123.89 € | stávame sa najlacnejší |
| DOMO DO354VD | 130.90 € | **130.50 €** | 8.9 % | **8.5 %** | 130.89 € | stávame sa najlacnejší |
| DOMO DO42102SV | 98.90 € | **98.50 €** | 9.5 % | **9.0 %** | 98.89 € | stávame sa najlacnejší |
| PRIMO PR406IM | 125.90 € | **125.50 €** | 8.0 % | **7.6 %** | 125.89 € | stávame sa najlacnejší |
| Domo DO331L | 103.90 € | **103.50 €** | 7.3 % | **6.9 %** | 103.89 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.60 €** | 56.3 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Fixed pouzdro Honor X8 5G FIXTOP-1009-BK | 12.90 € | **12.50 €** | 11.6 % | **8.1 %** | 12.58 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 10.00 € | **9.60 €** | 26.8 % | **21.8 %** | 9.70 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 14.2 % | **10.4 %** | 11.71 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.72 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.90 € | **11.50 €** | 9.4 % | **5.7 %** | 11.75 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.90 € | **10.50 €** | 11.3 % | **7.2 %** | 10.76 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.90 € | **10.50 €** | 10.8 % | **6.7 %** | 10.76 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 13.3 % | **9.5 %** | 11.79 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.50 €** | 16.5 % | **13.2 %** | 13.79 € | stávame sa najlacnejší |
| San Marco INTENSO 500 g | 11.90 € | **11.50 €** | 8.7 % | **5.0 %** | 11.83 € | stávame sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 10.2 % | **7.3 %** | 14.88 € | stávame sa najlacnejší |
| Laica VT3509 | 11.90 € | **11.50 €** | 9.9 % | **6.2 %** | 11.89 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.30 € | **2.90 €** | 36.2 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HD025 LED modrá | 31.90 € | **31.50 €** | 6.3 % | **5.0 %** | 29.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **21.50 €** | 11.6 % | **9.6 %** | 21.55 € | stávame sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.90 € | **17.50 €** | 11.7 % | **9.2 %** | 17.58 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2+ 6ks | 24.90 € | **24.50 €** | 22.8 % | **20.8 %** | 24.60 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 11.1 % | **9.9 %** | 35.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.63 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.90 € | **20.50 €** | 15.4 % | **13.2 %** | 20.63 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.50 €** | 10.3 % | **9.5 %** | 58.67 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **41.50 €** | 15.1 % | **14.0 %** | 41.67 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 39.90 € | **39.50 €** | 8.5 % | **7.4 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 21.90 € | **21.50 €** | 8.2 % | **6.3 %** | 21.70 € | stávame sa najlacnejší |
| DOMO DO8709P | 28.90 € | **28.50 €** | 8.6 % | **7.1 %** | 28.70 € | stávame sa najlacnejší |
| Electrolux E200SM | 17.90 € | **17.50 €** | 21.5 % | **18.8 %** | 17.70 € | stávame sa najlacnejší |
| Maono G1 Neo Sound Card Black | 44.90 € | **44.50 €** | 13.3 % | **12.3 %** | 44.70 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| ETA 160390000 | 17.90 € | **17.50 €** | 13.2 % | **10.6 %** | 17.71 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 38.90 € | **38.50 €** | 7.1 % | **6.0 %** | 38.72 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 30.90 € | **30.50 €** | 13.5 % | **12.0 %** | 30.73 € | stávame sa najlacnejší |
| ETA 210390000 | 40.90 € | **40.50 €** | 8.8 % | **7.7 %** | 40.75 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 30.90 € | **30.50 €** | 10.1 % | **8.7 %** | 30.75 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 24.90 € | **24.50 €** | 10.9 % | **9.1 %** | 24.78 € | stávame sa najlacnejší |
| Kompresor REBEL RB-1062 akumulátorový univerzální 7,4V | 18.90 € | **18.50 €** | 16.1 % | **13.6 %** | 18.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.9 % | **9.8 %** | 40.79 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.50 €** | 12.2 % | **9.5 %** | 16.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 37.90 € | **37.50 €** | 11.6 % | **10.4 %** | 37.79 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 21.90 € | **21.50 €** | 8.7 % | **6.7 %** | 21.79 € | stávame sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 45.90 € | **45.50 €** | 14.8 % | **13.8 %** | 45.80 € | stávame sa najlacnejší |
| Beko ATP3100N | 51.90 € | **51.50 €** | 14.8 % | **13.9 %** | 51.80 € | stávame sa najlacnejší |
| ETA 321990020 | 55.90 € | **55.50 €** | 10.2 % | **9.4 %** | 55.83 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 31.90 € | **31.50 €** | 9.7 % | **8.3 %** | 31.83 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 32.90 € | **32.50 €** | 12.5 % | **11.2 %** | 32.85 € | stávame sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 50.90 € | **50.50 €** | 6.1 % | **5.2 %** | 50.86 € | stávame sa najlacnejší |
| Amica KF 17191 | 29.90 € | **29.50 €** | 22.7 % | **21.1 %** | 29.86 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 55.90 € | **55.50 €** | 12.3 % | **11.5 %** | 55.87 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.50 €** | 10.7 % | **9.4 %** | 32.88 € | stávame sa najlacnejší |
| Domo DO9195C | 32.90 € | **32.50 €** | 10.5 % | **9.1 %** | 32.88 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.90 € | **16.50 €** | 12.7 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 17.90 € | **17.50 €** | 8.1 % | **5.7 %** | 17.88 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 23.90 € | **23.50 €** | 17.4 % | **15.4 %** | 23.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 59.90 € | **59.50 €** | 10.1 % | **9.3 %** | 59.89 € | stávame sa najlacnejší |
| Domo DO 9218 WK | 21.90 € | **21.50 €** | 10.4 % | **8.4 %** | 21.89 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 20.90 € | **20.50 €** | 10.1 % | **7.9 %** | 20.89 € | stávame sa najlacnejší |
| Rooma Espresso A7 bílá | 537.90 € | **537.50 €** | 6.0 % | **5.9 %** | 537.70 € | stávame sa najlacnejší |
| Guzzanti GZ 215RB | 304.90 € | **304.50 €** | 8.1 % | **7.9 %** | 304.70 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 343.90 € | **343.50 €** | 6.8 % | **6.7 %** | 343.70 € | stávame sa najlacnejší |
| AMICA DI6421B | 384.90 € | **384.50 €** | 7.1 % | **6.9 %** | 384.70 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 394.90 € | **394.50 €** | 7.1 % | **6.9 %** | 394.70 € | stávame sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 350.90 € | **350.50 €** | 5.8 % | **5.7 %** | 350.71 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 323.90 € | **323.50 €** | 7.1 % | **7.0 %** | 323.72 € | stávame sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 545.90 € | **545.50 €** | 8.1 % | **8.0 %** | 545.74 € | stávame sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 263.90 € | **263.50 €** | 8.6 % | **8.5 %** | 263.76 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 284.90 € | **284.50 €** | 6.5 % | **6.3 %** | 284.78 € | stávame sa najlacnejší |
| Gorenje DE69CS | 497.90 € | **497.50 €** | 6.5 % | **6.4 %** | 497.79 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 594.90 € | **594.50 €** | 9.3 % | **9.2 %** | 594.81 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 328.90 € | **328.50 €** | 6.6 % | **6.5 %** | 328.82 € | stávame sa najlacnejší |
| Beko HSM14540 | 284.90 € | **284.50 €** | 20.1 % | **19.9 %** | 284.84 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 365.90 € | **365.50 €** | 9.7 % | **9.6 %** | 365.87 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 284.90 € | **284.50 €** | 13.9 % | **13.7 %** | 284.89 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.73 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.40 € | **2.10 €** | 33.6 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.00 € | **7.70 €** | 45.5 % | **40.0 %** | 7.80 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 4.00 € | **3.80 €** | 36.1 % | **29.3 %** | 3.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 6.80 € | **6.60 €** | 16.9 % | **13.4 %** | 6.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 5.90 € | **5.70 €** | 12.3 % | **8.5 %** | 5.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.30 €** | 39.6 % | **33.4 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.70 € | **8.50 €** | 19.3 % | **16.5 %** | 8.59 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.60 € | **5.40 €** | 12.4 % | **8.4 %** | 5.49 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.60 € | **5.40 €** | 12.4 % | **8.4 %** | 5.49 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.00 € | **8.80 €** | 10.5 % | **8.1 %** | 8.90 € | stávame sa najlacnejší |
| YAMAHA NS-F51 BLACK 1 karton | 299.00 € | **298.90 €** | 9.3 % | **9.3 %** | 298.95 € | stávame sa najlacnejší |
| Guzzanti GZ 256A | 386.00 € | **385.90 €** | 10.0 % | **10.0 %** | 385.97 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 331.00 € | **330.90 €** | 6.0 % | **6.0 %** | 330.98 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 270.00 € | **269.90 €** | 6.2 % | **6.2 %** | 269.98 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 503.00 € | **502.90 €** | 6.4 % | **6.4 %** | 502.99 € | stávame sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.90 €** | 14.9 % | **14.7 %** | 54.94 € | stávame sa najlacnejší |
| Electrolux MCK CZ | 26.00 € | **25.90 €** | 27.3 % | **26.8 %** | 25.95 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 33.7 % | **33.0 %** | 19.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 10.2 % | **10.0 %** | 47.96 € | stávame sa najlacnejší |
| Sati Fortissimo 1 kg zrno | 18.00 € | **17.90 €** | 8.3 % | **7.7 %** | 17.96 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot K2 (biela) | 49.00 € | **48.90 €** | 19.5 % | **19.3 %** | 48.96 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.97 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 64.00 € | **63.90 €** | 24.7 % | **24.5 %** | 63.98 € | stávame sa najlacnejší |
| Tefal B817S255 | 30.00 € | **29.90 €** | 5.8 % | **5.5 %** | 29.99 € | stávame sa najlacnejší |
| Solight teplomer | 9.30 € | **9.20 €** | 33.1 % | **31.7 %** | 9.29 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 45.00 € | **44.90 €** | 24.3 % | **24.0 %** | 44.99 € | stávame sa najlacnejší |
| RUSSELL HOBBS 21395-56 | 52.00 € | **51.90 €** | 7.7 % | **7.5 %** | 51.99 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 24.00 € | **23.90 €** | 7.4 % | **7.0 %** | 23.99 € | stávame sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 23.00 € | **22.90 €** | 9.9 % | **9.4 %** | 22.99 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.30 € | **9.20 €** | 19.8 % | **18.5 %** | 9.29 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/B | 17.00 € | **16.90 €** | 14.9 % | **14.2 %** | 16.99 € | stávame sa najlacnejší |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 30.00 € | **29.90 €** | 14.5 % | **14.1 %** | 29.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (modré) | 45.00 € | **44.90 €** | 13.7 % | **13.4 %** | 44.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.00 € | **44.90 €** | 14.3 % | **14.0 %** | 44.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.00 € | **44.90 €** | 14.3 % | **14.0 %** | 44.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.40 € | **5.30 €** | 46.8 % | **44.1 %** | 5.31 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.70 € | **6.60 €** | 34.5 % | **32.5 %** | 6.69 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.40 € | **6.30 €** | 26.0 % | **24.0 %** | 6.39 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.70 € | **6.60 €** | 31.9 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.40 € | **5.30 €** | 22.6 % | **20.4 %** | 5.39 € | stávame sa najlacnejší |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.40 € | **4.30 €** | 55.5 % | **52.0 %** | 4.39 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.60 € | **1.50 €** | 44.5 % | **35.5 %** | 1.56 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.60 € | **3.50 €** | 41.4 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.70 € | **3.60 €** | 36.1 % | **32.4 %** | 3.67 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **3.00 €** | 16.1 % | **12.4 %** | 3.08 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.40 € | **2.30 €** | 29.2 % | **23.8 %** | 2.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.60 €** | 26.9 % | **22.2 %** | 2.69 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.30 € | **5.20 €** | 43.2 % | **40.5 %** | 5.25 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.60 € | **7.50 €** | 52.6 % | **50.6 %** | 7.56 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 12.00 € | **11.90 €** | 38.0 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 14.00 € | **13.90 €** | 32.8 % | **31.9 %** | 13.96 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.80 € | **6.70 €** | 32.9 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.00 € | **10.90 €** | 9.7 % | **8.7 %** | 10.96 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.8 % | **9.9 %** | 12.96 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.30 € | **2.20 €** | 46.1 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.30 € | **5.20 €** | 17.7 % | **15.5 %** | 5.29 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.10 € | **7.00 €** | 21.3 % | **19.6 %** | 7.09 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 18W, E27, 4000K... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.29 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 7.60 € | **7.50 €** | 24.6 % | **22.9 %** | 7.59 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.80 € | **2.70 €** | 27.9 % | **23.3 %** | 2.79 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.80 € | **4.70 €** | 19.3 % | **16.9 %** | 4.79 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.90 € | **9.80 €** | 30.5 % | **29.1 %** | 9.89 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.70 € | **9.60 €** | 32.5 % | **31.2 %** | 9.69 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 137.00 € | **136.90 €** | 5.8 % | **5.7 %** | 136.96 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 79.00 € | **78.90 €** | 9.2 % | **9.1 %** | 78.98 € | stávame sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 117.00 € | **116.90 €** | 14.2 % | **14.1 %** | 116.99 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 191.00 € | **190.90 €** | 7.1 % | **7.0 %** | 190.99 € | stávame sa najlacnejší |

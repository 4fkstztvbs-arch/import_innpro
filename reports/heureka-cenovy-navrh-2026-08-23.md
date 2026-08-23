# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-23

Vstup: `premiumstoresk_20260823_1411.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5397**
- Návrh **zvýšiť** cenu: **198** produktov
- Návrh **znížiť** cenu: **1255** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **3944** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **120**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (198)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| JBL Tuner 3 White Přenosné rádio | 116.90 € | **128.00 €** | 5.2 % | **15.1 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **124.00 €** | 15.0 % | **22.0 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Combo-4In1-Ss | 130.50 € | **135.50 €** | 10.0 % | **14.2 %** | 130.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 35.50 € | **38.50 €** | 6.3 % | **15.3 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **29.50 €** | 15.2 % | **26.3 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.50 € | **66.00 €** | 10.2 % | **14.5 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 46.90 € | **49.00 €** | 10.1 % | **15.0 %** | 46.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/4N/1 | 50.90 € | **53.00 €** | 10.0 % | **14.5 %** | 50.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 8.90 € | **10.90 €** | 18.8 % | **45.5 %** | 8.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.50 € | **16.50 €** | 10.6 % | **25.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5X/1 | 49.50 € | **51.50 €** | 10.5 % | **15.0 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **16.90 €** | 10.9 % | **25.8 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed MagPad, bílá FIXMPAD2-WH | 12.90 € | **14.50 €** | 11.8 % | **25.7 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.00 € | **27.50 €** | 9.3 % | **15.6 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.7 % | **16.9 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **38.90 €** | 11.0 % | **15.1 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510Y žlutá | 37.50 € | **38.90 €** | 11.0 % | **15.1 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy VEGA X Lite | 29.00 € | **30.00 €** | 10.3 % | **14.1 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CMWA23TNDB | 97.00 € | **98.00 €** | 10.1 % | **11.2 %** | 97.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 15.90 € | **16.90 €** | 19.4 % | **26.9 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 119.00 € | **119.90 €** | 33.9 % | **34.9 %** | 119.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.00 € | **14.90 €** | 5.2 % | **12.0 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.00 € | **11.90 €** | 34.7 % | **45.7 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.00 € | **13.90 €** | 30.8 % | **39.9 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.00 € | **13.90 €** | 26.7 % | **35.5 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.00 € | **12.90 €** | 30.6 % | **40.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.00 € | **10.90 €** | 22.8 % | **33.9 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.00 € | **10.90 €** | 9.4 % | **19.3 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 14.00 € | **14.90 €** | 9.8 % | **16.8 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 35.00 € | **35.90 €** | 30.1 % | **33.4 %** | 35.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 27.00 € | **27.90 €** | 21.3 % | **25.4 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.00 € | **17.90 €** | 39.2 % | **46.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 55.00 € | **55.90 €** | 10.1 % | **11.9 %** | 55.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.00 € | **16.90 €** | 28.3 % | **35.5 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.00 € | **45.90 €** | 38.8 % | **41.6 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.00 € | **16.90 €** | 25.8 % | **32.9 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.00 € | **41.90 €** | 32.0 % | **34.9 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| G3Ferrari G1004500 | 51.00 € | **51.90 €** | 10.1 % | **12.0 %** | 51.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 58.00 € | **58.90 €** | 33.5 % | **35.6 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.00 € | **17.90 €** | 26.9 % | **33.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.00 € | **55.90 €** | 34.2 % | **36.4 %** | 55.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.00 € | **29.90 €** | 16.7 % | **20.3 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.90 €** | 22.4 % | **25.7 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 48.00 € | **48.90 €** | 18.7 % | **20.9 %** | 48.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **36.90 €** | 14.6 % | **17.5 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **36.90 €** | 15.0 % | **17.8 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.00 € | **19.90 €** | 33.3 % | **39.6 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 27.90 € | **28.50 €** | 34.3 % | **37.2 %** | 27.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 19.90 € | **20.50 €** | 34.4 % | **38.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 30.90 € | **31.50 €** | 18.4 % | **20.7 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 36.90 € | **37.50 €** | 10.9 % | **12.7 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 20.90 € | **21.50 €** | 25.8 % | **29.4 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 27.90 € | **28.50 €** | 35.7 % | **38.6 %** | 27.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 26.90 € | **27.50 €** | 13.3 % | **15.8 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 21.90 € | **22.50 €** | 8.2 % | **11.2 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 23.90 € | **24.50 €** | 23.4 % | **26.5 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 37.90 € | **38.50 €** | 37.4 % | **39.5 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.10 € | **5.70 €** | 16.5 % | **30.2 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.90 € | **15.50 €** | 25.8 % | **30.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 12.90 € | **13.50 €** | 8.9 % | **14.0 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 11.90 € | **12.50 €** | 11.3 % | **16.9 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 14.90 € | **15.50 €** | 40.2 % | **45.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 11.90 € | **12.50 €** | 20.9 % | **27.0 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 14.90 € | **15.50 €** | 9.7 % | **14.1 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.90 € | **14.50 €** | 28.1 % | **33.7 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.90 € | **15.50 €** | 34.4 % | **39.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.90 € | **11.50 €** | 31.1 % | **38.3 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 12.90 € | **13.50 €** | 30.3 % | **36.3 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 14.90 € | **15.50 €** | 29.1 % | **34.3 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.90 € | **10.50 €** | 5.5 % | **11.9 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.90 € | **10.50 €** | 30.9 % | **38.8 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 11.90 € | **12.50 €** | 16.6 % | **22.4 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP Black | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP White | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 14.00 € | **14.50 €** | 14.6 % | **18.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 33.50 € | **34.00 €** | 23.6 % | **25.4 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.50 € | **13.00 €** | 33.2 % | **38.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 39.00 € | **39.50 €** | 31.7 % | **33.4 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.50 € | **20.00 €** | 23.3 % | **26.4 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **14.00 €** | 28.1 % | **32.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 22.00 € | **22.50 €** | 29.4 % | **32.4 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight profesionálna laserová vodováha - zelený laser | 37.50 € | **38.00 €** | 30.3 % | **32.0 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.50 € | **23.00 €** | 36.2 % | **39.2 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 15.00 € | **15.50 €** | 23.1 % | **27.2 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 17.00 € | **17.50 €** | 31.9 % | **35.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.50 € | **22.00 €** | 22.5 % | **25.3 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 21.00 € | **21.50 €** | 34.2 % | **37.4 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 283.00 € | **283.50 €** | 8.3 % | **8.5 %** | 283.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.00 € | **67.50 €** | 5.1 % | **5.9 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W Power Bank 20000mAh Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 19.50 € | **20.00 €** | 21.6 % | **24.7 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 34.00 € | **34.50 €** | 33.7 % | **35.6 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.40 € | **8.90 €** | 10.5 % | **17.1 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **42.50 €** | 23.6 % | **25.1 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 56.00 € | **56.50 €** | 27.0 % | **28.1 %** | 56.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GameSir Kaleid Xbox Wired Controller | 39.00 € | **39.50 €** | 10.2 % | **11.7 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.50 €** | 40.0 % | **42.7 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT161E | 108.50 € | **108.90 €** | 6.1 % | **6.5 %** | 108.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E7K1-6BP | 69.50 € | **69.90 €** | 11.5 % | **12.2 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 750 | 111.50 € | **111.90 €** | 6.6 % | **7.0 %** | 111.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.50 € | **88.90 €** | 5.7 % | **6.2 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 27.8 % | **28.5 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 27.8 % | **28.5 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **64.90 €** | 21.1 % | **21.9 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool MBNA910X | 242.50 € | **242.90 €** | 8.0 % | **8.1 %** | 242.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 13.50 € | **13.90 €** | 37.2 % | **41.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 11.50 € | **11.90 €** | 7.0 % | **10.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **21.90 €** | 10.1 % | **12.1 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **49.90 €** | 10.0 % | **10.8 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.50 € | **28.90 €** | 20.3 % | **22.0 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.50 € | **34.90 €** | 16.3 % | **17.7 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 63.50 € | **63.90 €** | 16.4 % | **17.1 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.50 € | **33.90 €** | 6.8 % | **8.1 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.50 € | **34.90 €** | 25.1 % | **26.6 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.6 % | **13.2 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.70 € | **3.00 €** | 31.4 % | **46.0 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná stolná lampička s klipom bi... | 9.20 € | **9.40 €** | 8.9 % | **11.2 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 9.70 € | **9.90 €** | 19.1 % | **21.6 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.20 € | **9.40 €** | 32.9 % | **35.7 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.70 € | **9.90 €** | 25.6 % | **28.2 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.20 € | **8.40 €** | 40.4 % | **43.8 %** | 8.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás so svetelným a pohybovým se... | 6.00 € | **6.20 €** | 41.4 % | **46.1 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.50 € | **4.70 €** | 35.0 % | **41.0 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.20 € | **5.40 €** | 40.0 % | **45.4 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.10 € | **4.30 €** | 29.2 % | **35.5 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.50 € | **2.70 €** | 27.0 % | **37.2 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 24.3 % | **28.3 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 5.4 % | **8.7 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.00 € | **3.20 €** | 23.8 % | **32.1 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Veľkej Británie, typ G | 4.70 € | **4.90 €** | 15.4 % | **20.4 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.10 € | **4.30 €** | 32.3 % | **38.7 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 6.20 € | **6.40 €** | 32.6 % | **36.9 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.80 € | **8.00 €** | 33.5 % | **36.9 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.40 € | **3.60 €** | 9.3 % | **15.7 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 7.70 € | **7.90 €** | 5.4 % | **8.1 %** | 7.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.30 € | **7.50 €** | 35.2 % | **38.9 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.50 € | **3.70 €** | 37.5 % | **45.3 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.70 € | **5.90 €** | 40.4 % | **45.4 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.50 € | **7.70 €** | 40.5 % | **44.2 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.40 € | **3.60 €** | 17.6 % | **24.5 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.00 € | **1.20 €** | 16.1 % | **39.4 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.10 € | **1.30 €** | 19.2 % | **40.9 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.10 € | **1.30 €** | 19.2 % | **40.9 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.70 € | **1.90 €** | 10.6 % | **23.6 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.80 € | **2.00 €** | 10.9 % | **23.2 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.60 € | **2.80 €** | 25.8 % | **35.5 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.70 € | **2.90 €** | 14.9 % | **23.4 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.70 € | **3.90 €** | 19.8 % | **26.3 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.80 € | **10.00 €** | 36.0 % | **38.7 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.80 € | **10.00 €** | 36.0 % | **38.7 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., vypínač, 1 režim | 4.90 € | **5.10 €** | 30.6 % | **35.9 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 5.90 € | **6.10 €** | 28.3 % | **32.6 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.80 € | **10.00 €** | 22.6 % | **25.1 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.80 € | **10.00 €** | 42.8 % | **45.7 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.40 € | **7.60 €** | 21.5 % | **24.8 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.40 € | **7.60 €** | 33.4 % | **37.0 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.90 € | **7.10 €** | 10.2 % | **13.4 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy TCA273D3-S | 280.90 € | **281.00 €** | 7.9 % | **7.9 %** | 280.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.90 € | **49.00 €** | 15.2 % | **15.4 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 17.90 € | **18.00 €** | 23.5 % | **24.2 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 24.90 € | **25.00 €** | 21.7 % | **22.2 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 22dB | 16.90 € | **17.00 €** | 15.7 % | **16.3 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.90 € | **17.00 €** | 21.5 % | **22.2 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 21.90 € | **22.00 €** | 36.5 % | **37.2 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.60 € | **6.70 €** | 32.5 % | **34.5 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.10 € | **6.20 €** | 21.9 % | **23.8 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.30 € | **4.40 €** | 33.4 % | **36.5 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.10 € | **4.20 €** | 32.3 % | **35.5 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.20 €** | 16.9 % | **22.5 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.00 €** | 19.7 % | **23.8 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.60 € | **3.70 €** | 32.4 % | **36.1 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 2,5A, biela | 1.10 € | **1.20 €** | 24.2 % | **35.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.00 € | **5.10 €** | 41.1 % | **44.0 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.40 €** | 34.3 % | **35.7 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **9.70 €** | 33.2 % | **34.6 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor Premium, Find My kompatibilný | 12.90 € | **13.00 €** | 13.9 % | **14.8 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.90 € | **16.00 €** | 19.0 % | **19.8 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **4.80 €** | 34.5 % | **37.4 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 24.5 % | **27.0 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 8.90 € | **9.00 €** | 34.7 % | **36.3 %** | 8.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.70 € | **7.80 €** | 40.0 % | **41.9 %** | 7.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **14.00 €** | 10.6 % | **11.4 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 14.90 € | **15.00 €** | 23.1 % | **23.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 15.90 € | **16.00 €** | 13.1 % | **13.8 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna smart WIFI meteostanica | 98.90 € | **99.00 €** | 20.0 % | **20.2 %** | 98.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.90 € | **79.00 €** | 15.3 % | **15.5 %** | 78.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.90 € | **69.00 €** | 12.7 % | **12.8 %** | 68.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| WHIRLPOOL AKR 749/1 IX | 118.90 € | **119.00 €** | 5.6 % | **5.7 %** | 118.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.90 € | **177.00 €** | 7.7 % | **7.7 %** | 176.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE F4142PW | 221.90 € | **222.00 €** | 8.0 % | **8.1 %** | 221.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1255)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| YAMAHA R-N2000A SILVER | 3890.00 € | **3312.50 €** | 27.9 % | **9.0 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N1000A SILVER | 1599.00 € | **1367.00 €** | 24.2 % | **6.2 %** | 1367.23 € | stávame sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.50 €** | 15.0 % | **5.9 %** | 2645.65 € | stávame sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.50 €** | 64.7 % | **6.8 %** | 362.65 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 559.00 € | **365.50 €** | 67.6 % | **9.6 %** | 365.87 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2374.50 €** | 15.0 % | **6.6 %** | 2374.69 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 519.00 € | **373.00 €** | 48.9 % | **7.0 %** | 373.41 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **3020.50 €** | 15.0 % | **10.0 %** | 3020.71 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 479.00 € | **343.50 €** | 48.7 % | **6.7 %** | 343.70 € | stávame sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.90 €** | 28.6 % | **6.0 %** | 634.00 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **526.50 €** | 28.6 % | **6.0 %** | 526.90 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **354.00 €** | 39.7 % | **6.3 %** | 354.05 € | stávame sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.50 €** | 16.8 % | **9.3 %** | 1543.60 € | stávame sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **383.90 €** | 35.8 % | **6.6 %** | 384.00 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Plus Combo | 1176.90 € | **1074.90 €** | 15.0 % | **5.0 %** | 1009.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje FN619EAW6 | 639.00 € | **538.90 €** | 24.5 % | **5.0 %** | 519.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFS26120XQ | 419.00 € | **322.50 €** | 36.6 % | **5.1 %** | 313.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **503.90 €** | 26.9 % | **6.7 %** | 504.00 € | stávame sa najlacnejší |
| BEKO RFSA240M43WN | 469.00 € | **375.00 €** | 34.1 % | **7.2 %** | 375.06 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **511.50 €** | 24.2 % | **6.1 %** | 511.63 € | stávame sa najlacnejší |
| Gorenje GECS5C70XPA | 559.00 € | **471.50 €** | 26.8 % | **7.0 %** | 471.80 € | stávame sa najlacnejší |
| YAMAHA A-S1200 SILVER | 2399.00 € | **2315.50 €** | 13.1 % | **9.1 %** | 2315.65 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 369.00 € | **286.00 €** | 39.2 % | **7.9 %** | 286.40 € | stávame sa najlacnejší |
| Gorenje R619EAW6 | 559.00 € | **481.00 €** | 24.1 % | **6.8 %** | 481.47 € | stávame sa najlacnejší |
| Gorenje WDSI96A | 499.00 € | **422.90 €** | 23.9 % | **5.0 %** | 364.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 410090000 | 399.00 € | **330.00 €** | 29.2 % | **6.9 %** | 330.30 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 8" (200/1200) | 767.50 € | **700.90 €** | 15.0 % | **5.0 %** | 699.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS620C10W | 399.00 € | **335.00 €** | 26.6 % | **6.3 %** | 335.44 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **221.00 €** | 37.7 % | **9.1 %** | 221.46 € | stávame sa najlacnejší |
| Gorenje GECS5B70CLI | 599.00 € | **541.90 €** | 16.1 % | **5.1 %** | 471.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **347.00 €** | 22.9 % | **6.9 %** | 347.40 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 585.90 € | **534.90 €** | 15.0 % | **5.0 %** | 534.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 639.50 € | **589.90 €** | 15.0 % | **6.1 %** | 589.94 € | stávame sa najlacnejší |
| Bezdrôtový vysávač na mokré a suché vysávanie Mova M10 | 538.90 € | **491.90 €** | 15.0 % | **5.0 %** | 158.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D Tlačiareň Creality K1 MAX | 543.50 € | **497.00 €** | 15.0 % | **5.2 %** | 497.06 € | stávame sa najlacnejší |
| ELECTROLUX EPF61RR | 135.00 € | **89.90 €** | 58.3 % | **5.4 %** | 71.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **411.50 €** | 18.3 % | **7.0 %** | 411.90 € | stávame sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 96.0 % | **11.9 %** | 57.23 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 983.90 € | **941.00 €** | 15.0 % | **10.0 %** | 941.15 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 612.50 € | **570.50 €** | 15.0 % | **7.1 %** | 570.67 € | stávame sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 944.00 € | **902.90 €** | 15.0 % | **10.0 %** | 902.99 € | stávame sa najlacnejší |
| Beko BDIN38646D | 535.00 € | **494.00 €** | 15.9 % | **7.0 %** | 494.30 € | stávame sa najlacnejší |
| YAMAHA CD-C603 SILVER | 599.00 € | **560.90 €** | 12.2 % | **5.1 %** | 555.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 28.0 % | **9.2 %** | 204.08 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 24.9 % | **9.2 %** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 24.7 % | **9.0 %** | 244.20 € | stávame sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 782.50 € | **748.00 €** | 15.0 % | **10.0 %** | 748.21 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 100 | 383.50 € | **350.50 €** | 15.0 % | **5.1 %** | 349.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný samočistiaci odpadkový kôš pre mačky Ca... | 375.50 € | **342.90 €** | 15.1 % | **5.1 %** | 334.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AURZEN Zip Projektor (sivý) | 377.50 € | **344.90 €** | 15.0 % | **5.0 %** | 340.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW7W2481C | 686.50 € | **655.00 €** | 10.1 % | **5.0 %** | 559.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **567.50 €** | 10.9 % | **5.1 %** | 555.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor JMGO O2S Ultra | 2398.00 € | **2366.50 €** | 15.0 % | **13.5 %** | 2366.56 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 279.00 € | **248.00 €** | 22.8 % | **9.1 %** | 248.37 € | stávame sa najlacnejší |
| Projektor JMGO N1S SE | 702.50 € | **671.50 €** | 15.0 % | **9.9 %** | 671.90 € | stávame sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 649.90 € | **619.90 €** | 15.0 % | **9.7 %** | 620.00 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Hi Combo | 354.00 € | **324.90 €** | 15.0 % | **5.6 %** | 324.99 € | stávame sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 793.90 € | **765.00 €** | 10.0 % | **6.0 %** | 765.20 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **739.90 €** | 15.0 % | **10.8 %** | 740.00 € | stávame sa najlacnejší |
| GARRETT AT Max 8,5 x 11" INTL – detektor kovov | 757.50 € | **729.90 €** | 15.0 % | **10.8 %** | 730.00 € | stávame sa najlacnejší |
| 3D tlačový list ELEGOO OrangeStorm Giga | 2706.50 € | **2678.90 €** | 15.0 % | **13.8 %** | 2678.99 € | stávame sa najlacnejší |
| Ultimea Skywave X70 Soundbar | 612.90 € | **586.00 €** | 15.0 % | **10.0 %** | 586.25 € | stávame sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **653.00 €** | 15.0 % | **10.7 %** | 653.19 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 323.00 € | **298.00 €** | 14.9 % | **6.0 %** | 298.49 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 544.50 € | **519.90 €** | 15.0 % | **9.8 %** | 520.00 € | stávame sa najlacnejší |
| Gorenje MO 20 E1S | 95.00 € | **70.90 €** | 40.9 % | **5.1 %** | 57.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **398.90 €** | 15.1 % | **8.5 %** | 399.00 € | stávame sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **402.00 €** | 15.0 % | **8.5 %** | 402.29 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 199.00 € | **175.50 €** | 22.9 % | **8.4 %** | 175.80 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (čierny) | 272.90 € | **249.50 €** | 15.0 % | **5.2 %** | 234.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **509.50 €** | 15.0 % | **10.0 %** | 509.90 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 927.50 € | **904.50 €** | 10.0 % | **7.3 %** | 904.67 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 911.00 € | **888.50 €** | 10.0 % | **7.3 %** | 888.88 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 11.0 % | **9.3 %** | 1377.03 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Pro | 506.00 € | **484.00 €** | 15.0 % | **10.0 %** | 484.24 € | stávame sa najlacnejší |
| Nano projektor JMGO N1S | 496.50 € | **474.50 €** | 15.0 % | **9.9 %** | 474.90 € | stávame sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **473.00 €** | 15.0 % | **10.0 %** | 473.14 € | stávame sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (bla | 455.90 € | **434.90 €** | 10.1 % | **5.0 %** | 420.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **457.00 €** | 15.0 % | **10.0 %** | 457.18 € | stávame sa najlacnejší |
| Rooma Espresso A7 bílá | 558.50 € | **537.50 €** | 10.0 % | **5.9 %** | 537.70 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 566.90 € | **546.00 €** | 10.1 % | **6.0 %** | 546.10 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 599.00 € | **578.50 €** | 10.0 % | **6.2 %** | 578.85 € | stávame sa najlacnejší |
| ETA 507590000 | 119.99 € | **99.50 €** | 26.8 % | **5.2 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE TH60E3B | 99.00 € | **79.00 €** | 33.7 % | **6.7 %** | 79.20 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 269.00 € | **249.00 €** | 14.9 % | **6.4 %** | 249.33 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 298.00 € | **278.90 €** | 14.9 % | **7.6 %** | 278.99 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 657.90 € | **638.90 €** | 10.1 % | **6.9 %** | 639.00 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 434.50 € | **415.50 €** | 15.0 % | **9.9 %** | 415.78 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **405.50 €** | 15.0 % | **9.9 %** | 405.90 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **412.00 €** | 15.0 % | **10.0 %** | 412.12 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **411.00 €** | 14.9 % | **10.0 %** | 411.04 € | stávame sa najlacnejší |
| TCL 65V6C 4K SMART Google TV | 412.90 € | **394.50 €** | 10.0 % | **5.1 %** | 387.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DI6421B | 395.50 € | **377.50 €** | 10.0 % | **5.0 %** | 279.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor JMGO PicoPlay+ | 413.00 € | **395.00 €** | 14.9 % | **9.9 %** | 395.21 € | stávame sa najlacnejší |
| Projektor Ultima Poseidon E40 | 402.90 € | **385.00 €** | 15.0 % | **9.9 %** | 385.20 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 276.90 € | **259.00 €** | 15.0 % | **7.6 %** | 259.28 € | stávame sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 447.00 € | **429.50 €** | 14.9 % | **10.4 %** | 429.67 € | stávame sa najlacnejší |
| Rooma Espresso A6 bílá | 481.50 € | **464.00 €** | 10.0 % | **6.0 %** | 464.28 € | stávame sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 691.50 € | **674.50 €** | 10.1 % | **7.4 %** | 674.58 € | stávame sa najlacnejší |
| Gorenje DE69CS | 514.50 € | **497.50 €** | 10.0 % | **6.4 %** | 497.79 € | stávame sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.50 €** | 14.9 % | **9.7 %** | 346.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás MERACH MR-T25B2 | 372.90 € | **356.50 €** | 15.1 % | **10.0 %** | 356.52 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 5G 8/256GB ZAFM0293CZ | 353.50 € | **337.50 €** | 10.0 % | **5.0 %** | 314.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS541C10W | 354.50 € | **338.50 €** | 10.0 % | **5.1 %** | 333.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (čierny) | 295.50 € | **279.50 €** | 15.1 % | **8.8 %** | 279.67 € | stávame sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 279.50 € | **263.50 €** | 15.1 % | **8.5 %** | 263.76 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z20 | 359.00 € | **343.00 €** | 15.0 % | **9.9 %** | 343.39 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 354.50 € | **338.90 €** | 15.1 % | **10.0 %** | 338.93 € | stávame sa najlacnejší |
| Eliptický trenažér MERACH MR-E33B3-EU (čierny) | 395.50 € | **379.90 €** | 15.0 % | **10.5 %** | 380.00 € | stávame sa najlacnejší |
| Waydoo submersible | 287.50 € | **271.90 €** | 15.0 % | **8.8 %** | 272.00 € | stávame sa najlacnejší |
| CANDY CCGMEE9025PX/E | 814.50 € | **798.90 €** | 10.0 % | **7.9 %** | 799.00 € | stávame sa najlacnejší |
| Guzzanti GZ 235 | 458.50 € | **443.00 €** | 10.1 % | **6.4 %** | 443.01 € | stávame sa najlacnejší |
| AURZEN Zip Projektor (strieborný) | 356.00 € | **340.50 €** | 15.0 % | **10.0 %** | 340.55 € | stávame sa najlacnejší |
| Projektor BlitzWolf BW-V11 | 352.50 € | **337.00 €** | 15.0 % | **10.0 %** | 337.17 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 539.50 € | **524.00 €** | 10.1 % | **6.9 %** | 524.50 € | stávame sa najlacnejší |
| ETA 002898050 | 79.99 € | **64.50 €** | 30.6 % | **5.3 %** | 64.90 € | stávame sa najlacnejší |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **333.50 €** | 15.0 % | **10.0 %** | 333.65 € | stávame sa najlacnejší |
| Candy BR 48SBL6G-S | 338.00 € | **322.90 €** | 10.0 % | **5.1 %** | 299.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **324.00 €** | 15.0 % | **9.9 %** | 324.31 € | stávame sa najlacnejší |
| Rowenta RH 6756WO | 139.00 € | **124.00 €** | 21.7 % | **8.5 %** | 124.40 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 411.90 € | **397.00 €** | 10.1 % | **6.1 %** | 397.09 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 534.90 € | **520.00 €** | 10.0 % | **6.9 %** | 520.40 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V45i | 330.50 € | **316.00 €** | 15.0 % | **10.0 %** | 316.06 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **319.50 €** | 15.0 % | **10.0 %** | 319.58 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 522.50 € | **508.00 €** | 10.0 % | **7.0 %** | 508.40 € | stávame sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 364.90 € | **350.50 €** | 10.0 % | **5.7 %** | 350.71 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 174.00 € | **159.90 €** | 14.9 % | **5.6 %** | 159.95 € | stávame sa najlacnejší |
| Gorenje W3NGPI61SAS | 304.90 € | **290.90 €** | 10.1 % | **5.0 %** | 259.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 5G 8/256GB ZAFM0053CZ | 304.90 € | **290.90 €** | 10.1 % | **5.0 %** | 288.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GI6432BSCWF | 332.50 € | **318.90 €** | 10.1 % | **5.6 %** | 319.00 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 375.50 € | **362.00 €** | 10.0 % | **6.1 %** | 362.05 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 307.50 € | **294.00 €** | 15.0 % | **9.9 %** | 294.14 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **294.00 €** | 15.0 % | **9.9 %** | 294.14 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **39.00 €** | 50.5 % | **11.8 %** | 39.16 € | stávame sa najlacnejší |
| Gorenje WPNEI72SA1SWIFI | 291.90 € | **278.50 €** | 10.1 % | **5.1 %** | 269.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fagor 4LVF-638ADIT | 481.90 € | **468.50 €** | 10.0 % | **7.0 %** | 468.60 € | stávame sa najlacnejší |
| Termovízna kamera THERMAL MASTER T2Max | 292.90 € | **279.50 €** | 15.0 % | **9.7 %** | 279.90 € | stávame sa najlacnejší |
| Projektor Ultima Nova C40 | 301.00 € | **287.90 €** | 15.0 % | **10.0 %** | 287.92 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 183.00 € | **169.90 €** | 15.0 % | **6.8 %** | 169.95 € | stávame sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 252.90 € | **239.90 €** | 15.0 % | **9.1 %** | 239.95 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 343.90 € | **330.90 €** | 10.1 % | **5.9 %** | 331.00 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (červený) | 292.50 € | **279.50 €** | 15.0 % | **9.9 %** | 279.67 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 22.6 % | **9.2 %** | 106.20 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 335.00 € | **322.00 €** | 14.9 % | **10.5 %** | 322.36 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 335.00 € | **322.00 €** | 14.9 % | **10.5 %** | 322.36 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 42.99 € | **30.00 €** | 57.9 % | **10.2 %** | 30.40 € | stávame sa najlacnejší |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 47.90 € | **35.00 €** | 54.8 % | **13.1 %** | 35.12 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **276.00 €** | 15.0 % | **9.8 %** | 276.42 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 343.50 € | **330.90 €** | 10.0 % | **6.0 %** | 330.98 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 311.50 € | **298.90 €** | 10.1 % | **5.7 %** | 299.00 € | stávame sa najlacnejší |
| Gorenje N62CS2XL4 | 447.50 € | **435.00 €** | 10.1 % | **7.0 %** | 435.10 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 53.00 € | **40.50 €** | 43.6 % | **9.8 %** | 40.63 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 455.50 € | **443.00 €** | 10.0 % | **7.0 %** | 443.20 € | stávame sa najlacnejší |
| JBL TOUR ONE M3, Black | 276.90 € | **264.50 €** | 10.1 % | **5.2 %** | 257.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL TOUR ONE M3, Latte | 276.90 € | **264.50 €** | 10.1 % | **5.2 %** | 257.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 10.1 % | **7.0 %** | 413.60 € | stávame sa najlacnejší |
| Reproduktory Edifier R2850DB 2.0 (čierne) | 281.00 € | **269.00 €** | 14.9 % | **10.0 %** | 269.31 € | stávame sa najlacnejší |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 270.50 € | **258.50 €** | 15.0 % | **9.9 %** | 258.86 € | stávame sa najlacnejší |
| Záložní zdroj MHPower WPU-800-12 UPS 800W 12V čistý ... | 146.50 € | **134.90 €** | 15.1 % | **6.0 %** | 134.91 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **246.00 €** | 15.1 % | **10.0 %** | 246.11 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **30.50 €** | 48.1 % | **7.6 %** | 30.90 € | stávame sa najlacnejší |
| ETA 051690000 | 75.99 € | **64.50 €** | 30.0 % | **10.3 %** | 64.58 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 405.90 € | **394.50 €** | 10.0 % | **6.9 %** | 394.70 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 494.90 € | **483.50 €** | 10.0 % | **7.5 %** | 483.82 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 378.90 € | **367.50 €** | 10.0 % | **6.7 %** | 367.90 € | stávame sa najlacnejší |
| Redmi 17 4/256GB Black | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 218.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi 17 4/256GB Deep Blue | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 218.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi 17 4/256GB Oak Green | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 218.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 428.50 € | **417.50 €** | 15.0 % | **12.1 %** | 417.60 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Urban (či... | 338.90 € | **327.90 €** | 15.1 % | **11.3 %** | 328.00 € | stávame sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **233.50 €** | 15.1 % | **9.9 %** | 233.66 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 75.00 € | **64.00 €** | 59.1 % | **35.8 %** | 64.21 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (červený) | 245.50 € | **234.50 €** | 15.1 % | **9.9 %** | 234.75 € | stávame sa najlacnejší |
| ETA 723590000 | 338.50 € | **327.50 €** | 10.1 % | **6.5 %** | 327.78 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 339.50 € | **328.50 €** | 10.0 % | **6.5 %** | 328.82 € | stávame sa najlacnejší |
| Maxxo Chamber Line 70 | 359.90 € | **349.00 €** | 10.1 % | **6.8 %** | 349.45 € | stávame sa najlacnejší |
| Ninja AF500EU Foodi Flex Drawer 10,4l | 226.50 € | **215.90 €** | 10.2 % | **5.1 %** | 167.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.90 €** | 14.9 % | **8.9 %** | 190.00 € | stávame sa najlacnejší |
| Guzzanti GZ 338 | 581.00 € | **570.50 €** | 10.0 % | **8.0 %** | 570.59 € | stávame sa najlacnejší |
| Concept IDV5160wh | 363.50 € | **353.00 €** | 10.1 % | **7.0 %** | 353.10 € | stávame sa najlacnejší |
| Whirlpool FFS 7469 W EE | 374.50 € | **364.00 €** | 10.1 % | **7.0 %** | 364.20 € | stávame sa najlacnejší |
| UNI-T UT521 tester uzemnenia | 140.00 € | **129.50 €** | 15.0 % | **6.4 %** | 129.88 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.50 € | **217.00 €** | 15.1 % | **9.8 %** | 217.43 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.50 € | **217.00 €** | 15.1 % | **9.8 %** | 217.43 € | stávame sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 555.90 € | **545.50 €** | 10.1 % | **8.0 %** | 545.74 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Army 10x40 se zaměřo... | 119.00 € | **108.90 €** | 15.0 % | **5.2 %** | 108.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.90 €** | 25.0 % | **7.8 %** | 63.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **220.50 €** | 15.0 % | **10.0 %** | 220.54 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 279.90 € | **269.90 €** | 10.1 % | **6.2 %** | 269.98 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 357.50 € | **347.50 €** | 10.1 % | **7.0 %** | 347.60 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.15 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 153.00 € | **143.00 €** | 14.9 % | **7.4 %** | 143.29 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **181.00 €** | 15.0 % | **9.0 %** | 181.38 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 220.00 € | **210.00 €** | 15.0 % | **9.8 %** | 210.39 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V  75Ah MHPower MS75-12(L) LC5-M8 | 228.00 € | **218.00 €** | 14.9 % | **9.9 %** | 218.42 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 148.90 € | **139.00 €** | 15.0 % | **7.4 %** | 139.41 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 182.90 € | **173.00 €** | 15.1 % | **8.9 %** | 173.42 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 51.1 % | **9.5 %** | 26.17 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 294.50 € | **284.90 €** | 10.1 % | **6.5 %** | 284.91 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (čier... | 328.50 € | **318.90 €** | 15.0 % | **11.6 %** | 319.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A1 Pro (stri... | 328.50 € | **318.90 €** | 15.0 % | **11.6 %** | 319.00 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.90 €** | 10.0 % | **7.0 %** | 341.00 € | stávame sa najlacnejší |
| BROTHER DCP-T535DW | 207.50 € | **197.90 €** | 10.1 % | **5.0 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC750830 | 206.50 € | **196.90 €** | 10.2 % | **5.1 %** | 191.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 214.50 € | **205.00 €** | 15.0 % | **9.9 %** | 205.25 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 424.50 € | **415.00 €** | 10.0 % | **7.6 %** | 415.33 € | stávame sa najlacnejší |
| Amica KF 17191 | 39.00 € | **29.50 €** | 60.1 % | **21.1 %** | 29.86 € | stávame sa najlacnejší |
| Beko VRT96425VD | 261.50 € | **252.00 €** | 10.1 % | **6.1 %** | 252.38 € | stávame sa najlacnejší |
| Guzzanti GZ 325 | 262.50 € | **253.00 €** | 10.1 % | **6.1 %** | 253.50 € | stávame sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **45.50 €** | 37.3 % | **13.8 %** | 45.80 € | stávame sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 50.86 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 29.90 € | **20.50 €** | 57.4 % | **7.9 %** | 20.89 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 332.90 € | **323.50 €** | 10.1 % | **7.0 %** | 323.72 € | stávame sa najlacnejší |
| Reproduktory Edifier S351DB 2.1 (čierne) | 258.00 € | **248.90 €** | 14.9 % | **10.9 %** | 249.00 € | stávame sa najlacnejší |
| Gorenje W2PNEI84A1SW | 389.00 € | **380.00 €** | 19.9 % | **17.1 %** | 380.31 € | stávame sa najlacnejší |
| Rowenta GZ5436E0 | 298.50 € | **289.50 €** | 10.0 % | **6.7 %** | 289.90 € | stávame sa najlacnejší |
| Rowenta RO7457EA | 193.90 € | **185.00 €** | 10.1 % | **5.0 %** | 182.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **39.00 €** | 38.7 % | **13.0 %** | 39.50 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 309.50 € | **300.90 €** | 10.0 % | **7.0 %** | 300.96 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 309.50 € | **300.90 €** | 10.0 % | **7.0 %** | 300.96 € | stávame sa najlacnejší |
| Stojany na činky nastavitelné REBEL ACTIVE RBA-2403 | 102.50 € | **93.90 €** | 14.8 % | **5.2 %** | 88.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 433.00 € | **424.50 €** | 15.0 % | **12.7 %** | 424.51 € | stávame sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 172.00 € | **163.50 €** | 15.0 % | **9.3 %** | 163.56 € | stávame sa najlacnejší |
| Grafický tablet Huion Slate 11 | 274.50 € | **266.00 €** | 15.1 % | **11.5 %** | 266.27 € | stávame sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **169.50 €** | 15.0 % | **9.5 %** | 169.90 € | stávame sa najlacnejší |
| Gorenje WG2PS74A2W | 247.90 € | **239.50 €** | 10.0 % | **6.3 %** | 239.51 € | stávame sa najlacnejší |
| GUZZANTI GZ 220A | 224.90 € | **216.50 €** | 10.2 % | **6.1 %** | 216.54 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 250.90 € | **242.50 €** | 10.0 % | **6.3 %** | 242.63 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 32.00 € | **23.90 €** | 43.3 % | **7.0 %** | 23.99 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 121.00 € | **112.90 €** | 14.9 % | **7.2 %** | 113.00 € | stávame sa najlacnejší |
| Inteligentné okuliare BlitzWolf BW-AG1 Pro AI s vyme... | 94.90 € | **86.90 €** | 15.0 % | **5.3 %** | 73.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Moza Racing MTLP AS009 Panel pre vzlet a pristátie (PC) | 154.50 € | **146.50 €** | 15.1 % | **9.2 %** | 146.62 € | stávame sa najlacnejší |
| Blesk GODOX V100 TTL pre Canon | 315.00 € | **307.00 €** | 15.0 % | **12.1 %** | 307.34 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 217.50 € | **209.50 €** | 10.1 % | **6.0 %** | 209.86 € | stávame sa najlacnejší |
| ELECTROLUX ZE064 | 38.99 € | **31.00 €** | 45.3 % | **15.6 %** | 31.50 € | stávame sa najlacnejší |
| Electrolux EF167 | 21.99 € | **14.00 €** | 70.9 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **14.00 €** | 70.9 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Salente Combo-4In1 | 132.90 € | **125.00 €** | 15.2 % | **8.4 %** | 125.20 € | stávame sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **185.00 €** | 15.1 % | **10.4 %** | 185.21 € | stávame sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **23.00 €** | 54.5 % | **15.0 %** | 23.18 € | stávame sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 232.50 € | **224.90 €** | 10.1 % | **6.5 %** | 224.99 € | stávame sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 247.50 € | **239.90 €** | 14.9 % | **11.4 %** | 240.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 44GW | 205.50 € | **198.00 €** | 10.1 % | **6.1 %** | 198.25 € | stávame sa najlacnejší |
| Ninja FN101EUGY Crispi 4v1 | 166.90 € | **159.50 €** | 10.2 % | **5.3 %** | 130.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 245.90 € | **238.90 €** | 15.0 % | **11.7 %** | 239.00 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 112.50 € | **105.50 €** | 15.0 % | **7.9 %** | 105.66 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 92.00 € | **85.00 €** | 14.8 % | **6.1 %** | 85.22 € | stávame sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 145.50 € | **138.50 €** | 14.9 % | **9.4 %** | 138.77 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 410.00 € | **403.00 €** | 15.0 % | **13.0 %** | 403.28 € | stávame sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 154.50 € | **147.50 €** | 10.2 % | **5.2 %** | 147.80 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 196.50 € | **189.50 €** | 10.1 % | **6.2 %** | 189.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 194.90 € | **188.00 €** | 10.1 % | **6.2 %** | 188.22 € | stávame sa najlacnejší |
| Termovízna kamera Mileseey TR256A | 389.90 € | **383.00 €** | 15.0 % | **13.0 %** | 383.40 € | stávame sa najlacnejší |
| MERACH MR-2403B1 Stepper | 78.50 € | **71.90 €** | 15.1 % | **5.4 %** | 66.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Smartdust | 138.50 € | **132.00 €** | 10.3 % | **5.1 %** | 131.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8501A | 157.00 € | **150.50 €** | 10.0 % | **5.5 %** | 150.71 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 85.00 € | **78.50 €** | 15.0 % | **6.2 %** | 78.90 € | stávame sa najlacnejší |
| Johansson KIT 6715 zesilovač + zdroj (2438) | 161.50 € | **155.00 €** | 15.0 % | **10.4 %** | 155.50 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.5 % | **9.2 %** | 18.67 € | stávame sa najlacnejší |
| Tesla AeroStar T700 | 84.90 € | **78.50 €** | 13.8 % | **5.3 %** | 74.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.90 € | **82.50 €** | 15.1 % | **6.8 %** | 82.79 € | stávame sa najlacnejší |
| Tefal GC728D10 | 169.90 € | **163.50 €** | 10.1 % | **6.0 %** | 163.90 € | stávame sa najlacnejší |
| Beko BDFS26046XQ | 321.90 € | **315.50 €** | 10.1 % | **7.9 %** | 315.90 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 345.00 € | **338.90 €** | 14.9 % | **12.9 %** | 339.00 € | stávame sa najlacnejší |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 75.50 € | **69.50 €** | 14.8 % | **5.7 %** | 67.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pohybové čidlo ORBIS DICROMAT MINI - zapuštěná montá... | 75.50 € | **69.50 €** | 14.7 % | **5.6 %** | 69.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CDPH 2D947X | 321.50 € | **315.50 €** | 10.1 % | **8.0 %** | 315.60 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 156.50 € | **150.50 €** | 14.9 % | **10.5 %** | 150.61 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **78.50 €** | 15.2 % | **7.0 %** | 78.78 € | stávame sa najlacnejší |
| Braun CG9043 | 219.00 € | **213.00 €** | 10.0 % | **7.0 %** | 213.28 € | stávame sa najlacnejší |
| Candy ProWash 550 SLIM BP 37SBL8-S | 278.50 € | **272.50 €** | 10.1 % | **7.7 %** | 272.82 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.50 €** | 15.2 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 253.00 € | **247.00 €** | 14.9 % | **12.2 %** | 247.42 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 124.00 € | **118.00 €** | 15.0 % | **9.5 %** | 118.44 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 124.00 € | **118.00 €** | 15.0 % | **9.5 %** | 118.44 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **16.00 €** | 49.2 % | **8.6 %** | 16.50 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 194.90 € | **189.00 €** | 10.2 % | **6.8 %** | 189.34 € | stávame sa najlacnejší |
| Leifheit Clean Twist M Ergo+náhr. Static | 46.90 € | **41.00 €** | 29.8 % | **13.5 %** | 41.29 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 298.90 € | **293.00 €** | 10.1 % | **8.0 %** | 293.30 € | stávame sa najlacnejší |
| Gorenje W11NHPI84AS | 290.90 € | **285.00 €** | 10.1 % | **7.9 %** | 285.50 € | stávame sa najlacnejší |
| Gorenje RK58DPB4I | 299.50 € | **293.90 €** | 10.1 % | **8.0 %** | 294.00 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161B | 65.50 € | **59.90 €** | 15.0 % | **5.2 %** | 59.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi A7 Pro 4/64GB Mist Blue | 126.50 € | **120.90 €** | 10.1 % | **5.2 %** | 93.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 80.50 € | **74.90 €** | 14.8 % | **6.8 %** | 74.94 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 142.50 € | **136.90 €** | 10.0 % | **5.7 %** | 136.96 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 157.50 € | **152.00 €** | 10.1 % | **6.2 %** | 152.04 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 678.00 € | **672.50 €** | 10.0 % | **9.1 %** | 672.69 € | stávame sa najlacnejší |
| Maxxo Chamber Line 40 | 251.50 € | **246.00 €** | 10.1 % | **7.7 %** | 246.30 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 129.00 € | **123.50 €** | 15.0 % | **10.1 %** | 123.89 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 118.90 € | **113.50 €** | 10.3 % | **5.3 %** | 113.70 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **114.50 €** | 11.3 % | **6.3 %** | 114.88 € | stávame sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 176.90 € | **171.50 €** | 10.1 % | **6.7 %** | 171.90 € | stávame sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **57.50 €** | 21.8 % | **11.3 %** | 57.85 € | stávame sa najlacnejší |
| Beko BM3WFSU37213WB | 298.90 € | **293.50 €** | 10.0 % | **8.0 %** | 293.60 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301C+ | 56.90 € | **51.90 €** | 15.3 % | **5.2 %** | 51.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.6 % | **16.4 %** | 24.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 35.00 € | **30.00 €** | 43.9 % | **23.3 %** | 30.12 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.50 €** | 37.8 % | **12.7 %** | 22.65 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.50 €** | 46.8 % | **9.2 %** | 14.69 € | stávame sa najlacnejší |
| Panel tlačidiel ovládacieho panela PXN CB1 | 71.50 € | **66.50 €** | 15.1 % | **7.0 %** | 66.69 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 172.00 € | **167.00 €** | 10.0 % | **6.8 %** | 167.20 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.50 €** | 15.0 % | **14.3 %** | 799.79 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 504.50 € | **499.50 €** | 10.1 % | **9.0 %** | 499.84 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 180.00 € | **175.00 €** | 8.9 % | **5.9 %** | 175.35 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **205.50 €** | 15.1 % | **12.4 %** | 205.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 123.00 € | **118.00 €** | 14.9 % | **10.2 %** | 118.39 € | stávame sa najlacnejší |
| Tefal GC772830 | 225.50 € | **220.50 €** | 10.1 % | **7.6 %** | 220.90 € | stávame sa najlacnejší |
| Samsung VG-SCFC55SGMXC | 123.50 € | **118.50 €** | 10.3 % | **5.8 %** | 118.90 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **81.50 €** | 15.2 % | **8.5 %** | 81.90 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.00 € | **238.00 €** | 10.0 % | **7.7 %** | 238.40 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 137.90 € | **133.00 €** | 10.0 % | **6.1 %** | 133.10 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 87.90 € | **83.00 €** | 15.0 % | **8.6 %** | 83.20 € | stávame sa najlacnejší |
| Beko VRT86325VI | 203.90 € | **199.00 €** | 10.2 % | **7.5 %** | 199.40 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **11.00 €** | 56.1 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.90 €** | 14.9 % | **10.4 %** | 114.93 € | stávame sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 74.50 € | **69.90 €** | 15.0 % | **7.9 %** | 69.96 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.50 € | **167.90 €** | 10.2 % | **7.3 %** | 168.00 € | stávame sa najlacnejší |
| Tefal FV9848E0 | 98.50 € | **94.00 €** | 10.1 % | **5.1 %** | 86.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 882.50 € | **878.00 €** | 15.0 % | **14.4 %** | 878.04 € | stávame sa najlacnejší |
| Guzzanti GZ 110G | 330.00 € | **325.50 €** | 10.0 % | **8.5 %** | 325.58 € | stávame sa najlacnejší |
| G3ferrari G1020400 Pizza trouba, 2 min | 225.50 € | **221.00 €** | 10.2 % | **8.0 %** | 221.09 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 37.50 € | **33.00 €** | 57.5 % | **38.6 %** | 33.14 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 31.00 € | **26.50 €** | 58.5 % | **35.5 %** | 26.64 € | stávame sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **100.00 €** | 14.9 % | **10.0 %** | 100.35 € | stávame sa najlacnejší |
| Niimbot K3 Commercial Lake Blue | 62.50 € | **58.00 €** | 15.0 % | **6.7 %** | 58.41 € | stávame sa najlacnejší |
| KOMA RK01 - Univerzální rotační kartáč | 22.99 € | **18.50 €** | 42.9 % | **15.0 %** | 18.90 € | stávame sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 110.90 € | **106.50 €** | 15.0 % | **10.5 %** | 106.54 € | stávame sa najlacnejší |
| Tefal FF2588E0 | 83.50 € | **79.50 €** | 10.3 % | **5.1 %** | 76.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1610 | 49.90 € | **45.90 €** | 15.0 % | **5.7 %** | 45.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer Air PR... | 63.50 € | **59.50 €** | 14.9 % | **7.6 %** | 59.51 € | stávame sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 104.90 € | **100.90 €** | 10.1 % | **5.9 %** | 100.94 € | stávame sa najlacnejší |
| Electrolux MCK CZ | 29.90 € | **25.90 €** | 46.4 % | **26.8 %** | 25.95 € | stávame sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S08B1-EU (čierny) | 203.90 € | **199.90 €** | 15.0 % | **12.7 %** | 200.00 € | stávame sa najlacnejší |
| Gorenje RK4182PW4 | 285.00 € | **281.00 €** | 8.0 % | **6.5 %** | 281.12 € | stávame sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **83.00 €** | 15.0 % | **9.7 %** | 83.13 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 23.2 % | **11.5 %** | 38.17 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS DICROMAT 2+CR | 74.50 € | **70.50 €** | 15.1 % | **8.9 %** | 70.75 € | stávame sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **334.50 €** | 15.0 % | **13.6 %** | 334.77 € | stávame sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **91.50 €** | 10.1 % | **5.5 %** | 91.78 € | stávame sa najlacnejší |
| G3Ferrari G2014401 Zmrzlinovač | 178.50 € | **174.50 €** | 10.0 % | **7.6 %** | 174.78 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 209.50 € | **205.50 €** | 10.1 % | **8.0 %** | 205.79 € | stávame sa najlacnejší |
| Maxxo VM Chamber Line 90 | 572.50 € | **568.50 €** | 10.0 % | **9.2 %** | 568.79 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 426.00 € | **422.00 €** | 15.0 % | **13.9 %** | 422.29 € | stávame sa najlacnejší |
| Sony WFLS910NV fialová | 158.50 € | **154.50 €** | 10.2 % | **7.4 %** | 154.79 € | stávame sa najlacnejší |
| Braun IS5247.VI | 188.50 € | **184.50 €** | 10.1 % | **7.8 %** | 184.80 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 178.90 € | **175.00 €** | 10.0 % | **7.6 %** | 175.19 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 46.90 € | **43.00 €** | 15.3 % | **5.7 %** | 43.09 € | stávame sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **51.00 €** | 15.2 % | **7.0 %** | 51.21 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 24 GS2401 | 564.90 € | **561.00 €** | 15.0 % | **14.2 %** | 561.18 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Ariete ART 583/03 | 76.50 € | **72.90 €** | 10.3 % | **5.1 %** | 69.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO3320 | 74.50 € | **70.90 €** | 10.4 % | **5.0 %** | 70.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Gold - 9150 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Rose Gold - 9151 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Tesla T500 | 71.50 € | **68.00 €** | 10.4 % | **5.0 %** | 59.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210A | 216.50 € | **213.00 €** | 7.8 % | **6.0 %** | 213.02 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **14.50 €** | 47.4 % | **18.7 %** | 14.54 € | stávame sa najlacnejší |
| Samsung QE75QN85F NEO QLED | 1195.50 € | **1192.00 €** | 10.0 % | **9.7 %** | 1192.05 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 17.50 € | **14.00 €** | 56.3 % | **25.1 %** | 14.06 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 4... | 30.50 € | **27.00 €** | 38.4 % | **22.5 %** | 27.07 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 278.50 € | **275.00 €** | 7.7 % | **6.3 %** | 275.08 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 45.00 € | **41.50 €** | 24.3 % | **14.6 %** | 41.63 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **52.00 €** | 15.2 % | **7.9 %** | 52.17 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.50 € | **129.00 €** | 10.4 % | **7.4 %** | 129.18 € | stávame sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **46.00 €** | 15.3 % | **7.1 %** | 46.21 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 17.50 € | **14.00 €** | 45.5 % | **16.4 %** | 14.21 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 128.00 € | **124.50 €** | 10.1 % | **7.1 %** | 124.79 € | stávame sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Nikon | 269.50 € | **266.00 €** | 15.0 % | **13.5 %** | 266.35 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 48.50 € | **45.00 €** | 15.3 % | **7.0 %** | 45.39 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 80.50 € | **77.00 €** | 15.2 % | **10.2 %** | 77.39 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 144.50 € | **141.00 €** | 15.2 % | **12.4 %** | 141.39 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.50 € | **51.00 €** | 37.3 % | **28.4 %** | 51.48 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 275.50 € | **272.00 €** | 7.5 % | **6.1 %** | 272.49 € | stávame sa najlacnejší |
| Čistička vzduchu TEESA PURE LIFE P500 | 76.90 € | **73.50 €** | 15.3 % | **10.2 %** | 73.69 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 209.90 € | **206.50 €** | 10.1 % | **8.3 %** | 206.87 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 93.90 € | **90.50 €** | 15.0 % | **10.9 %** | 90.89 € | stávame sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.50 €** | 15.2 % | **9.8 %** | 69.90 € | stávame sa najlacnejší |
| Kabel reproduktorový KRUGER & MATZ KM0335-5M 5m kone... | 51.90 € | **48.50 €** | 14.9 % | **7.4 %** | 48.59 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 35.90 € | **32.50 €** | 22.8 % | **11.2 %** | 32.85 € | stávame sa najlacnejší |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 55.90 € | **52.50 €** | 15.3 % | **8.3 %** | 52.89 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 409.00 € | **405.90 €** | 6.9 % | **6.1 %** | 405.96 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 506.00 € | **502.90 €** | 7.0 % | **6.4 %** | 502.99 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT139B s meraním skutočne... | 41.00 € | **37.90 €** | 14.4 % | **5.7 %** | 37.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stropné svietidlo Yeelight C2201C300 | 45.00 € | **41.90 €** | 14.5 % | **6.6 %** | 41.96 € | stávame sa najlacnejší |
| Cycplus AS2 mini electric pump | 45.00 € | **41.90 €** | 14.9 % | **7.0 %** | 41.99 € | stávame sa najlacnejší |
| Lenovo batoh CONS Legion Armored II 17" | 65.00 € | **62.00 €** | 10.1 % | **5.0 %** | 52.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Akumulátor pre DJI Avata 2 | 121.00 € | **118.00 €** | 14.9 % | **12.1 %** | 118.01 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **118.00 €** | 14.9 % | **12.0 %** | 118.04 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 50.90 € | **47.90 €** | 15.1 % | **8.3 %** | 47.99 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **259.90 €** | 15.0 % | **13.7 %** | 260.00 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 82.00 € | **79.00 €** | 13.4 % | **9.2 %** | 79.10 € | stávame sa najlacnejší |
| Tefal RK812110 | 109.50 € | **106.50 €** | 10.2 % | **7.1 %** | 106.69 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **92.50 €** | 14.9 % | **11.3 %** | 92.72 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 7.4V 60C 2S1P Lipo PC materi... | 43.50 € | **40.50 €** | 15.5 % | **7.5 %** | 40.74 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **45.00 €** | 14.5 % | **7.4 %** | 45.25 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **36.00 €** | 14.9 % | **6.1 %** | 36.29 € | stávame sa najlacnejší |
| Masážní přístroj nohou a lýtek Shiatsu, REBEL ACTIVE... | 35.50 € | **32.50 €** | 15.8 % | **6.0 %** | 32.83 € | stávame sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.00 € | **53.00 €** | 14.8 % | **8.6 %** | 53.35 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **101.50 €** | 15.1 % | **11.8 %** | 101.88 € | stávame sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 49.50 € | **46.50 €** | 15.3 % | **8.4 %** | 46.89 € | stávame sa najlacnejší |
| Candy CHW6LBX/4U2 IDEA | 82.50 € | **79.50 €** | 10.5 % | **6.4 %** | 79.90 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 629.00 € | **626.00 €** | 10.0 % | **9.5 %** | 626.44 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **13.00 €** | 35.6 % | **10.2 %** | 13.09 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 81.90 € | **79.00 €** | 15.1 % | **11.0 %** | 79.08 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 101.90 € | **99.00 €** | 10.3 % | **7.2 %** | 99.09 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **103.00 €** | 15.1 % | **12.0 %** | 103.16 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 183.90 € | **181.00 €** | 10.2 % | **8.4 %** | 181.25 € | stávame sa najlacnejší |
| Modul plynu Moza Racing AS016 TQA | 44.90 € | **42.00 €** | 15.2 % | **7.7 %** | 42.10 € | stávame sa najlacnejší |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 34.90 € | **32.00 €** | 15.4 % | **5.8 %** | 32.14 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 31.90 € | **29.00 €** | 15.6 % | **5.1 %** | 29.22 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.90 € | **37.00 €** | 16.1 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **36.00 €** | 14.9 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| RUSSELL HOBBS 21395-56 | 53.50 € | **50.90 €** | 10.8 % | **5.5 %** | 42.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rapoo 8810ME set klávesnice a myši CZ/SK | 56.50 € | **53.90 €** | 10.1 % | **5.0 %** | 49.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 22.50 € | **19.90 €** | 40.8 % | **24.5 %** | 19.95 € | stávame sa najlacnejší |
| MERACH spinningové kolo MR-S26B2-EU (čierne) | 177.50 € | **174.90 €** | 14.9 % | **13.2 %** | 175.00 € | stávame sa najlacnejší |
| Moza Racing modul osi Z AS003 | 96.00 € | **93.50 €** | 14.9 % | **11.9 %** | 93.52 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.50 € | **82.00 €** | 10.0 % | **6.8 %** | 82.03 € | stávame sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 52.00 € | **49.50 €** | 14.5 % | **9.0 %** | 49.57 € | stávame sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **32.00 €** | 49.6 % | **38.8 %** | 32.10 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 20.50 € | **18.00 €** | 43.8 % | **26.3 %** | 18.10 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.50 € | **124.00 €** | 10.2 % | **8.0 %** | 124.11 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.50 € | **28.00 €** | 14.4 % | **5.0 %** | 28.12 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 41.0 % | **26.6 %** | 22.20 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **71.00 €** | 10.6 % | **6.9 %** | 71.20 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **15.00 €** | 42.8 % | **22.4 %** | 15.21 € | stávame sa najlacnejší |
| DOMO DO9276C | 58.50 € | **56.00 €** | 10.5 % | **5.8 %** | 56.29 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 271.50 € | **269.00 €** | 10.2 % | **9.2 %** | 269.29 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **31.00 €** | 14.5 % | **5.9 %** | 31.29 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 144.50 € | **142.00 €** | 10.3 % | **8.4 %** | 142.30 € | stávame sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 222.00 € | **219.50 €** | 14.9 % | **13.6 %** | 219.84 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 107.00 € | **104.50 €** | 9.8 % | **7.2 %** | 104.84 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **47.50 €** | 14.6 % | **8.9 %** | 47.88 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 34.00 € | **31.50 €** | 14.8 % | **6.4 %** | 31.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 138.50 € | **136.00 €** | 14.9 % | **12.8 %** | 136.39 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 59.50 € | **57.00 €** | 14.7 % | **9.9 %** | 57.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 99.00 € | **96.50 €** | 14.7 % | **11.8 %** | 96.89 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.00 €** | 10.4 % | **8.3 %** | 132.40 € | stávame sa najlacnejší |
| Beko VRT76325VW | 168.50 € | **166.00 €** | 10.0 % | **8.4 %** | 166.40 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 180.50 € | **178.00 €** | 10.3 % | **8.8 %** | 178.40 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.50 € | **132.00 €** | 10.3 % | **8.2 %** | 132.50 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.50 € | **127.00 €** | 10.3 % | **8.2 %** | 127.50 € | stávame sa najlacnejší |
| Koloběžka Spidoo Kruzzel 25630 fialová | 47.50 € | **45.00 €** | 15.0 % | **8.9 %** | 45.50 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.99 € | **17.50 €** | 23.0 % | **7.7 %** | 17.60 € | stávame sa najlacnejší |
| Electrolux E200SM | 19.99 € | **17.50 €** | 35.7 % | **18.8 %** | 17.70 € | stávame sa najlacnejší |
| ETA 160390000 | 19.99 € | **17.50 €** | 26.4 % | **10.6 %** | 17.71 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **92.50 €** | 15.2 % | **12.3 %** | 92.72 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 179.90 € | **177.50 €** | 10.1 % | **8.6 %** | 177.80 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 84.90 € | **82.50 €** | 15.0 % | **11.8 %** | 82.89 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 174.90 € | **172.50 €** | 10.1 % | **8.5 %** | 172.90 € | stávame sa najlacnejší |
| Ariete ART 2869/05 | 47.90 € | **45.50 €** | 10.6 % | **5.0 %** | 44.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freestyle koloběžka NILS Extreme HS033 černo-červená | 50.90 € | **48.50 €** | 15.1 % | **9.7 %** | 48.74 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 57.90 € | **55.50 €** | 16.3 % | **11.5 %** | 55.87 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **44.50 €** | 15.3 % | **9.4 %** | 44.89 € | stávame sa najlacnejší |
| Panasonic SC-AKX520E-K | 304.90 € | **302.50 €** | 10.1 % | **9.3 %** | 302.54 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo s displejom, 200lm, ... | 9.10 € | **6.90 €** | 40.1 % | **6.2 %** | 6.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.00 € | **128.90 €** | 10.1 % | **8.3 %** | 129.00 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.90 €** | 38.6 % | **16.3 %** | 11.00 € | stávame sa najlacnejší |
| Inteligentný prsteň COLMI R02, veľkosť 10, 19,8 mm (... | 27.50 € | **25.50 €** | 14.6 % | **6.3 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjací kábel SDC DJI Power (nabíjačka do auta) (12 V) | 28.50 € | **26.50 €** | 15.0 % | **7.0 %** | 22.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 31.50 € | **29.50 €** | 54.7 % | **44.9 %** | 29.52 € | stávame sa najlacnejší |
| Baterie olověná  12V / 12Ah  GETI bezúdržbový akumul... | 40.00 € | **38.00 €** | 14.4 % | **8.7 %** | 38.03 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 23.90 € | **21.90 €** | 36.0 % | **24.6 %** | 21.95 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 127.90 € | **125.90 €** | 10.2 % | **8.5 %** | 125.99 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 250.90 € | **248.90 €** | 10.1 % | **9.2 %** | 249.00 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **224.50 €** | 15.0 % | **14.0 %** | 224.66 € | stávame sa najlacnejší |
| DOMO DO42602S | 40.50 € | **38.50 €** | 11.3 % | **5.8 %** | 38.69 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 162.50 € | **160.50 €** | 10.1 % | **8.7 %** | 160.70 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.00 € | **105.00 €** | 10.0 % | **8.0 %** | 105.21 € | stávame sa najlacnejší |
| Tefal BL87G831 | 125.50 € | **123.50 €** | 10.3 % | **8.6 %** | 123.79 € | stávame sa najlacnejší |
| Kettlebell litinový nastavitelný 9 kg REBEL ACTIVE R... | 46.50 € | **44.50 €** | 15.4 % | **10.4 %** | 44.82 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **103.50 €** | 15.0 % | **12.8 %** | 103.83 € | stávame sa najlacnejší |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 34.50 € | **32.50 €** | 15.3 % | **8.6 %** | 32.85 € | stávame sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 26.00 € | **24.00 €** | 14.6 % | **5.8 %** | 24.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 55.00 € | **53.00 €** | 14.9 % | **10.8 %** | 53.39 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 77.50 € | **75.50 €** | 15.4 % | **12.4 %** | 75.89 € | stávame sa najlacnejší |
| DOMO DO354VD | 132.50 € | **130.50 €** | 10.2 % | **8.5 %** | 130.89 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 41.50 € | **39.50 €** | 20.8 % | **15.0 %** | 39.90 € | stávame sa najlacnejší |
| Domo DO344DH | 149.50 € | **147.50 €** | 10.1 % | **8.7 %** | 147.90 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 211.50 € | **209.50 €** | 14.9 % | **13.8 %** | 209.90 € | stávame sa najlacnejší |
| GPS bike computer Cycplus M1 | 23.50 € | **21.50 €** | 15.7 % | **5.8 %** | 21.90 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.00 € | **169.00 €** | 10.0 % | **8.8 %** | 169.40 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 117.00 € | **115.00 €** | 15.0 % | **13.0 %** | 115.44 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 159.90 € | **158.00 €** | 10.2 % | **8.9 %** | 158.20 € | stávame sa najlacnejší |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 122.90 € | **121.00 €** | 15.1 % | **13.3 %** | 121.24 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 138.90 € | **137.00 €** | 10.3 % | **8.8 %** | 137.30 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 101.90 € | **100.00 €** | 15.1 % | **13.0 %** | 100.38 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 82.90 € | **81.00 €** | 15.2 % | **12.6 %** | 81.39 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Sekáček potravin TEESA TSA3227 | 22.90 € | **21.00 €** | 14.9 % | **5.3 %** | 20.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 128 GB | 26.90 € | **25.00 €** | 15.2 % | **7.1 %** | 25.10 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **20.00 €** | 48.6 % | **35.7 %** | 20.15 € | stávame sa najlacnejší |
| Russell Hobbs 24992-70 | 40.90 € | **39.00 €** | 10.5 % | **5.3 %** | 39.25 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 47.90 € | **46.00 €** | 15.3 % | **10.7 %** | 46.32 € | stávame sa najlacnejší |
| Tester napätia a spojitosti Uni-T UT18D | 42.90 € | **41.00 €** | 15.0 % | **9.9 %** | 41.39 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **40.00 €** | 15.3 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **40.00 €** | 15.3 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Skládací síť REBEL ACTIVE pro badminton a další sporty | 30.90 € | **29.00 €** | 15.4 % | **8.3 %** | 29.46 € | stávame sa najlacnejší |
| FIXED kryt pro SG S26 Ultr FIXVM-1706-BK | 34.50 € | **32.90 €** | 10.7 % | **5.6 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C110 Home Sec. Wi-Fi Camera | 32.50 € | **30.90 €** | 10.7 % | **5.3 %** | 22.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt pro SG S26 FIXVM-1704-BK | 34.50 € | **32.90 €** | 10.7 % | **5.6 %** | 29.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Smart Air Purifier 4 Filter | 30.50 € | **28.90 €** | 11.1 % | **5.3 %** | 25.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210A Mini digitálny klešťový multimeter | 21.50 € | **19.90 €** | 14.2 % | **5.7 %** | 19.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.90 €** | 15.6 % | **9.1 %** | 26.92 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.50 € | **56.90 €** | 10.2 % | **7.2 %** | 56.96 € | stávame sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 14.9 % | **5.9 %** | 18.98 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **58.90 €** | 10.4 % | **7.4 %** | 59.00 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.90 €** | 15.0 % | **14.1 %** | 207.93 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.90 €** | 15.0 % | **14.1 %** | 203.94 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.90 €** | 10.4 % | **7.7 %** | 65.00 € | stávame sa najlacnejší |
| Sada kabelových oček, fastonů a smršťovacích bužírek... | 16.50 € | **15.00 €** | 15.5 % | **5.0 %** | 14.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-L dvoulůžková 186x... | 24.00 € | **22.50 €** | 12.0 % | **5.0 %** | 22.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslařský trenažér REBEL ACTIVE RBA-1005 | 197.00 € | **195.50 €** | 14.9 % | **14.0 %** | 195.51 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **18.00 €** | 15.6 % | **6.7 %** | 18.04 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 61.00 € | **59.50 €** | 14.9 % | **12.1 %** | 59.54 € | stávame sa najlacnejší |
| EJEAS Q7 motorcycle intercom | 44.00 € | **42.50 €** | 14.4 % | **10.5 %** | 42.60 € | stávame sa najlacnejší |
| Niceboy PILOT S5 GPS + WIFI | 49.50 € | **48.00 €** | 10.9 % | **7.5 %** | 48.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 3m, 3 x 1mm2,... | 16.50 € | **15.00 €** | 48.2 % | **34.8 %** | 15.11 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.50 € | **11.00 €** | 53.3 % | **34.9 %** | 11.13 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 28.50 € | **27.00 €** | 50.2 % | **42.3 %** | 27.14 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board L/Uni | 16.50 € | **15.00 €** | 33.5 % | **21.3 %** | 15.15 € | stávame sa najlacnejší |
| SALENTE SuChef | 84.50 € | **83.00 €** | 10.4 % | **8.4 %** | 83.15 € | stávame sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 52.50 € | **51.00 €** | 15.5 % | **12.2 %** | 51.18 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 16.00 € | **14.50 €** | 53.0 % | **38.7 %** | 14.69 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 85.50 € | **84.00 €** | 10.5 % | **8.6 %** | 84.24 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 23.50 € | **22.00 €** | 14.6 % | **7.3 %** | 22.27 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 121.00 € | **119.50 €** | 14.9 % | **13.5 %** | 119.79 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **107.00 €** | 14.9 % | **13.3 %** | 107.29 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| Roadstar IR-390D+BT/BK | 60.50 € | **59.00 €** | 10.3 % | **7.6 %** | 59.30 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.00 € | **64.50 €** | 10.1 % | **7.6 %** | 64.83 € | stávame sa najlacnejší |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 23.50 € | **22.00 €** | 14.8 % | **7.5 %** | 22.33 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.50 € | **22.00 €** | 14.9 % | **7.6 %** | 22.36 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **24.50 €** | 15.1 % | **8.4 %** | 24.88 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 52.00 € | **50.50 €** | 15.0 % | **11.7 %** | 50.90 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.90 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.90 € | stávame sa najlacnejší |
| GameSir-T4n Lite wireless controller (white) | 22.00 € | **20.50 €** | 15.2 % | **7.3 %** | 20.90 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **119.00 €** | 14.8 % | **13.4 %** | 119.48 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **108.50 €** | 15.0 % | **13.6 %** | 108.73 € | stávame sa najlacnejší |
| Xiaomi 33W PB 20000mAh Tan GL 57865 | 26.90 € | **25.50 €** | 11.6 % | **5.8 %** | 19.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/04 | 30.90 € | **29.50 €** | 11.0 % | **6.0 %** | 27.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.4 % | **5.8 %** | 25.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal HT310838 | 27.90 € | **26.50 €** | 10.7 % | **5.1 %** | 25.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.90 € | **28.50 €** | 11.1 % | **5.9 %** | 28.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompresor REBEL RB-1062 akumulátorový univerzální 7,4V | 18.90 € | **17.50 €** | 15.8 % | **7.2 %** | 17.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi BL0301 | 28.90 € | **27.50 €** | 10.8 % | **5.5 %** | 27.59 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 60.90 € | **59.50 €** | 10.3 % | **7.8 %** | 59.60 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 25.90 € | **24.50 €** | 15.4 % | **9.1 %** | 24.78 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 26.90 € | **25.50 €** | 15.3 % | **9.3 %** | 25.89 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 26.90 € | **25.50 €** | 15.7 % | **9.7 %** | 25.89 € | stávame sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **40.50 €** | 11.0 % | **7.3 %** | 40.90 € | stávame sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **33.50 €** | 12.2 % | **7.7 %** | 33.90 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 10.50 € | **9.20 €** | 47.4 % | **29.2 %** | 9.21 € | stávame sa najlacnejší |
| Solight náhradné trubičky pro alkohol tester Solight... | 5.20 € | **4.00 €** | 40.0 % | **7.7 %** | 3.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 19.00 € | **17.90 €** | 53.6 % | **44.7 %** | 17.94 € | stávame sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.90 €** | 14.6 % | **9.4 %** | 22.99 € | stávame sa najlacnejší |
| Banquet Hrnec nepř. GRAN. PR 20x9,5cm | 21.50 € | **20.50 €** | 11.4 % | **6.2 %** | 15.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Mlýnek na kávu LAVENDER | 21.50 € | **20.50 €** | 12.2 % | **7.0 %** | 15.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Hansi Rond et Riche 1000g zrno | 22.90 € | **21.90 €** | 10.8 % | **5.9 %** | 17.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka Sonoff S60ZBTPF ZigBee | 14.50 € | **13.50 €** | 14.7 % | **6.8 %** | 9.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/03 | 30.50 € | **29.50 €** | 10.3 % | **6.7 %** | 27.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL XA 801112 | 19.50 € | **18.50 €** | 12.1 % | **6.4 %** | 16.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (White) | 11.50 € | **10.50 €** | 15.7 % | **5.7 %** | 9.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO3102 | 27.90 € | **26.90 €** | 10.1 % | **6.2 %** | 25.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt pro SG S26 FIXMMY-1704-BK | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 15.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt pro SG S26 FIXSHM-1704-TR | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 15.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pikniková deka TEESA TSA8904-1 200x300 cm červená ko... | 17.50 € | **16.50 €** | 14.7 % | **8.2 %** | 16.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed nabíječka,2xUSB-C,FIXCG65M-2C1A-WH | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 21.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zásuvka NEDIS WIFIP121EWT chytrá Wi-Fi / 16A / 3680W | 13.90 € | **12.90 €** | 15.7 % | **7.3 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica LAI LC7107 | 21.90 € | **20.90 €** | 10.2 % | **5.2 %** | 20.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica LAI KS5020 | 20.90 € | **19.90 €** | 11.3 % | **6.0 %** | 19.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0904 10000 mAh Li-pol | 14.50 € | **13.50 €** | 15.6 % | **7.6 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT8208 Dvbt přijímač | 26.50 € | **25.50 €** | 11.1 % | **6.9 %** | 25.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 13.50 € | **12.50 €** | 16.8 % | **8.1 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera Auto GO/GO+ 64120 Ford Mustang 1 | 14.50 € | **13.50 €** | 13.9 % | **6.0 %** | 13.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica XXL Milano bílá | 22.50 € | **21.50 €** | 10.5 % | **5.6 %** | 21.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.40 € | **5.40 €** | 47.0 % | **24.0 %** | 5.41 € | stávame sa najlacnejší |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 23.50 € | **22.50 €** | 36.1 % | **30.3 %** | 22.53 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 13.50 € | **12.50 €** | 56.1 % | **44.6 %** | 12.54 € | stávame sa najlacnejší |
| Solight vonkajšia otočná IP kamera | 38.50 € | **37.50 €** | 42.7 % | **39.0 %** | 37.54 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.05 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **11.00 €** | 44.3 % | **32.3 %** | 11.05 € | stávame sa najlacnejší |
| EMOS CITY RING-C500 pkojová anténa DVB-T2, DAB, filt... | 20.90 € | **19.90 €** | 16.0 % | **10.4 %** | 19.97 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.50 € | **19.50 €** | 14.5 % | **8.9 %** | 19.59 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.90 €** | 10.4 % | **9.3 %** | 102.00 € | stávame sa najlacnejší |
| Elektrický ohřívač Embego Kaminer 26400 krb s efekte... | 69.90 € | **68.90 €** | 15.1 % | **13.4 %** | 69.00 € | stávame sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **40.50 €** | 10.4 % | **7.8 %** | 40.60 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **37.90 €** | 10.5 % | **7.6 %** | 38.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 55.2 % | **43.7 %** | 12.61 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 18.00 € | **17.00 €** | 52.4 % | **44.0 %** | 17.12 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 11.50 € | **10.50 €** | 56.9 % | **43.2 %** | 10.63 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **181.50 €** | 14.9 % | **14.3 %** | 181.63 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **16.00 €** | 15.2 % | **8.4 %** | 16.13 € | stávame sa najlacnejší |
| Sada 6 denných filtrov Freewell Standard pre DJI Flip | 26.50 € | **25.50 €** | 15.0 % | **10.7 %** | 25.63 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 46.00 € | **45.00 €** | 14.4 % | **12.0 %** | 45.13 € | stávame sa najlacnejší |
| Solight FM transmitter s bluetooth pripojením do aut... | 16.00 € | **15.00 €** | 43.9 % | **34.9 %** | 15.15 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **19.00 €** | 14.7 % | **8.9 %** | 19.16 € | stávame sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.50 €** | 10.5 % | **5.1 %** | 19.67 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.50 €** | 15.7 % | **11.5 %** | 26.67 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **26.50 €** | 15.6 % | **11.4 %** | 26.69 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 44.50 € | **43.50 €** | 8.9 % | **6.4 %** | 43.69 € | stávame sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **25.50 €** | 11.3 % | **7.1 %** | 25.69 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 17.50 € | **16.50 €** | 40.2 % | **32.2 %** | 16.70 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.50 € | **39.50 €** | 10.1 % | **7.4 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 11.2 % | **6.3 %** | 21.70 € | stávame sa najlacnejší |
| Braun HF5050.IBK | 122.50 € | **121.50 €** | 10.4 % | **9.5 %** | 121.70 € | stávame sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.50 €** | 10.9 % | **7.1 %** | 28.70 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **113.50 €** | 10.4 % | **9.4 %** | 113.70 € | stávame sa najlacnejší |
| Maono G1 Neo Sound Card Black | 45.50 € | **44.50 €** | 14.8 % | **12.3 %** | 44.70 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.50 €** | 14.9 % | **12.1 %** | 39.71 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **28.00 €** | 14.8 % | **10.9 %** | 28.21 € | stávame sa najlacnejší |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 21.50 € | **20.50 €** | 15.9 % | **10.5 %** | 20.71 € | stávame sa najlacnejší |
| Dynamický mikrofon Maono PD200x (černý) | 49.00 € | **48.00 €** | 14.7 % | **12.4 %** | 48.23 € | stávame sa najlacnejší |
| ETA 210390000 | 41.50 € | **40.50 €** | 10.4 % | **7.7 %** | 40.75 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.50 €** | 15.6 % | **9.0 %** | 16.75 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **33.50 €** | 14.6 % | **11.3 %** | 33.75 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 17.50 € | **16.50 €** | 17.9 % | **11.1 %** | 16.79 € | stávame sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.50 €** | 12.9 % | **5.1 %** | 13.79 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.50 €** | 15.0 % | **12.0 %** | 36.79 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.7 % | **6.7 %** | 21.79 € | stávame sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 76.00 € | **75.00 €** | 10.1 % | **8.7 %** | 75.32 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.33 € | stávame sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.50 €** | 14.2 % | **5.0 %** | 11.83 € | stávame sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 489.00 € | **488.00 €** | 7.0 % | **6.8 %** | 488.37 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 18.50 € | **17.50 €** | 11.8 % | **5.7 %** | 17.88 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.50 € | **233.50 €** | 10.2 % | **9.7 %** | 233.88 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **11.50 €** | 27.0 % | **16.9 %** | 11.89 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 34.50 € | **33.50 €** | 15.1 % | **11.8 %** | 33.89 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 17.50 € | **16.50 €** | 13.8 % | **7.3 %** | 16.89 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 27.00 € | **26.00 €** | 14.6 % | **10.4 %** | 26.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 35.50 € | **34.50 €** | 9.4 % | **6.4 %** | 34.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 71.00 € | **70.00 €** | 14.6 % | **13.0 %** | 70.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 92.50 € | **91.50 €** | 15.0 % | **13.7 %** | 91.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 72.50 € | **71.50 €** | 15.2 % | **13.6 %** | 71.89 € | stávame sa najlacnejší |
| Uni-T UT206B digitálny klešťový multimeter | 69.50 € | **68.50 €** | 14.8 % | **13.1 %** | 68.89 € | stávame sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 25.00 € | **24.00 €** | 15.0 % | **10.4 %** | 24.39 € | stávame sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 40.50 € | **39.50 €** | 15.5 % | **12.6 %** | 39.89 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 110.50 € | **109.50 €** | 14.9 % | **13.8 %** | 109.89 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 35.50 € | **34.50 €** | 15.6 % | **12.4 %** | 34.89 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 54.50 € | **53.50 €** | 15.4 % | **13.2 %** | 53.89 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 46.50 € | **45.50 €** | 15.4 % | **13.0 %** | 45.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 259.50 € | **258.50 €** | 15.1 % | **14.6 %** | 258.89 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 194.50 € | **193.50 €** | 15.0 % | **14.4 %** | 193.89 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 94.00 € | **93.00 €** | 14.9 % | **13.6 %** | 93.39 € | stávame sa najlacnejší |
| Inteligentný termostatický radiátorový ventil Avatto... | 25.50 € | **24.50 €** | 15.0 % | **10.5 %** | 24.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **27.00 €** | 14.5 % | **10.4 %** | 27.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 134.00 € | **133.00 €** | 14.8 % | **14.0 %** | 133.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 33.00 € | **32.00 €** | 14.4 % | **10.9 %** | 32.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 91.00 € | **90.00 €** | 14.7 % | **13.4 %** | 90.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.50 € | **61.50 €** | 14.9 % | **13.0 %** | 61.89 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 57.00 € | **56.00 €** | 14.9 % | **12.9 %** | 56.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 107.50 € | **106.50 €** | 14.8 % | **13.7 %** | 106.89 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 35.50 € | **34.50 €** | 15.3 % | **12.1 %** | 34.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 42.50 € | **41.50 €** | 15.7 % | **13.0 %** | 41.89 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 170.00 € | **169.00 €** | 14.9 % | **14.2 %** | 169.39 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 206.00 € | **205.00 €** | 14.9 % | **14.4 %** | 205.39 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 272.50 € | **271.50 €** | 15.0 % | **14.6 %** | 271.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT312A | 284.00 € | **283.00 €** | 15.0 % | **14.6 %** | 283.39 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 104.50 € | **103.50 €** | 15.1 % | **14.0 %** | 103.89 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 59.50 € | **58.50 €** | 14.1 % | **12.2 %** | 58.89 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 39.50 € | **38.50 €** | 18.0 % | **15.0 %** | 38.89 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-beige(beige) | 107.00 € | **106.00 €** | 14.8 % | **13.7 %** | 106.39 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 287.50 € | **286.50 €** | 14.9 % | **14.5 %** | 286.89 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 159.00 € | **158.00 €** | 14.8 % | **14.1 %** | 158.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 19.50 € | **18.50 €** | 48.9 % | **41.2 %** | 18.89 € | stávame sa najlacnejší |
| Fixed Creator Tripod FIXCRT-BK | 43.50 € | **42.50 €** | 10.5 % | **8.0 %** | 42.89 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 24.50 € | **23.50 €** | 15.5 % | **10.8 %** | 23.89 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **89.00 €** | 14.8 % | **13.5 %** | 89.39 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.50 € | **124.50 €** | 15.2 % | **14.2 %** | 124.89 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.50 € | **120.50 €** | 10.3 % | **9.4 %** | 120.90 € | stávame sa najlacnejší |
| Domo DO228SV | 121.50 € | **120.50 €** | 10.0 % | **9.1 %** | 120.90 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 23.00 € | **22.00 €** | 13.0 % | **8.1 %** | 22.40 € | stávame sa najlacnejší |
| NEDIS SAMP42222WT domovní zesilovač (1x vstup, 2x vý... | 21.50 € | **20.50 €** | 14.2 % | **8.9 %** | 20.90 € | stávame sa najlacnejší |
| Cycplus G1 bicycle computer | 21.50 € | **20.50 €** | 15.0 % | **9.6 %** | 20.90 € | stávame sa najlacnejší |
| Grafický tablet Huion H1161 | 74.00 € | **73.00 €** | 14.8 % | **13.2 %** | 73.47 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 231.00 € | **230.00 €** | 8.7 % | **8.3 %** | 230.50 € | stávame sa najlacnejší |
| G3ferrari G1019100 Horkovzdušná fritéza | 105.90 € | **105.00 €** | 10.3 % | **9.4 %** | 105.20 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **85.00 €** | 15.1 % | **13.9 %** | 85.22 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **65.00 €** | 10.6 % | **9.1 %** | 65.29 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 72.90 € | **72.00 €** | 15.0 % | **13.6 %** | 72.39 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.90 € | **86.00 €** | 15.0 % | **13.8 %** | 86.39 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 104.90 € | **104.00 €** | 15.1 % | **14.2 %** | 104.39 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 137.90 € | **137.00 €** | 15.1 % | **14.3 %** | 137.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.90 € | **73.00 €** | 14.9 % | **13.5 %** | 73.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 158.90 € | **158.00 €** | 15.0 % | **14.4 %** | 158.39 € | stávame sa najlacnejší |
| SONY WFC710N Black | 71.90 € | **71.00 €** | 11.0 % | **9.6 %** | 71.48 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 64.90 € | **64.00 €** | 10.3 % | **8.8 %** | 64.50 € | stávame sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 14.17 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.00 €** | 15.5 % | **6.0 %** | 10.39 € | stávame sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.90 € | **12.00 €** | 15.0 % | **7.0 %** | 12.39 € | stávame sa najlacnejší |
| Podložka na cvičení, jógu a fitness 1,5 cm Rebel Act... | 12.90 € | **12.00 €** | 15.0 % | **7.0 %** | 12.39 € | stávame sa najlacnejší |
| Powerbanka EMOS AlphaQ3, 10 000 mAh, 22,5 W, černá | 15.90 € | **15.00 €** | 15.5 % | **9.0 %** | 15.49 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 3.30 € | **2.40 €** | 55.1 % | **12.8 %** | 2.44 € | stávame sa najlacnejší |
| Zelmer ZHM2550 | 39.90 € | **39.00 €** | 28.9 % | **26.0 %** | 39.03 € | stávame sa najlacnejší |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 22.90 € | **22.00 €** | 15.1 % | **10.5 %** | 22.08 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 18.90 € | **18.00 €** | 32.7 % | **26.4 %** | 18.15 € | stávame sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.90 € | **18.00 €** | 15.1 % | **9.6 %** | 18.15 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.90 € | **27.00 €** | 42.8 % | **38.2 %** | 27.18 € | stávame sa najlacnejší |
| DOMO DO9192MC | 23.90 € | **23.00 €** | 10.0 % | **5.9 %** | 23.22 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6013-GL 130x50... | 32.90 € | **32.00 €** | 15.2 % | **12.0 %** | 32.24 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.90 € | **20.00 €** | 10.8 % | **6.0 %** | 20.38 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 25.90 € | **25.00 €** | 27.2 % | **22.8 %** | 25.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 57.90 € | **57.00 €** | 9.8 % | **8.1 %** | 57.39 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 40.90 € | **40.00 €** | 15.4 % | **12.9 %** | 40.39 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 53.90 € | **53.00 €** | 15.2 % | **13.2 %** | 53.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 29.90 € | **29.00 €** | 12.6 % | **9.2 %** | 29.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 37.90 € | **37.00 €** | 11.6 % | **8.9 %** | 37.39 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **42.00 €** | 10.9 % | **8.6 %** | 42.41 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **17.00 €** | 16.2 % | **10.4 %** | 17.42 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.90 € | **22.00 €** | 10.5 % | **6.1 %** | 22.42 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.90 € | **17.00 €** | 15.2 % | **9.4 %** | 17.49 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.90 € | **23.00 €** | 10.5 % | **6.4 %** | 23.49 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 16.90 € | **16.00 €** | 39.3 % | **31.9 %** | 16.50 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 328.90 € | **328.00 €** | 8.1 % | **7.8 %** | 328.11 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT315A | 308.90 € | **308.00 €** | 15.0 % | **14.7 %** | 308.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 471.90 € | **471.00 €** | 9.0 % | **8.8 %** | 471.39 € | stávame sa najlacnejší |
| Banquet Kávovar JADE 3 šálky | 10.50 € | **9.70 €** | 14.0 % | **5.3 %** | 6.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SecureQ i13 - bezdrátový detektor otevření WDS... | 10.50 € | **9.70 €** | 14.4 % | **5.7 %** | 8.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.20 €** | 53.4 % | **41.1 %** | 9.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.10 €** | 17.1 % | **6.6 %** | 8.11 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **4.00 €** | 45.3 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 5.50 € | **4.80 €** | 53.1 % | **33.6 %** | 4.82 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 8.20 € | **7.50 €** | 48.8 % | **36.1 %** | 7.54 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.50 € | **9.80 €** | 35.3 % | **26.3 %** | 9.89 € | stávame sa najlacnejší |
| Gosund ST20 Tuya smart ZigBee motion sensor | 10.50 € | **9.80 €** | 17.3 % | **9.4 %** | 9.90 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 488.50 € | **487.90 €** | 10.1 % | **9.9 %** | 488.00 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 19.50 € | **18.90 €** | 15.6 % | **12.0 %** | 18.91 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **31.90 €** | 14.7 % | **12.6 %** | 31.92 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8610 | 52.50 € | **51.90 €** | 14.9 % | **13.5 %** | 51.94 € | stávame sa najlacnejší |
| Akupresurní podložka REBEL ACTIVE RBA-6011-GL 72x42c... | 24.50 € | **23.90 €** | 14.3 % | **11.5 %** | 23.98 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (modré) | 45.50 € | **44.90 €** | 15.0 % | **13.4 %** | 44.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.99 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.99 € | stávame sa najlacnejší |
| GUZZANTIGZ 3601 | 28.50 € | **27.90 €** | 11.7 % | **9.4 %** | 28.00 € | stávame sa najlacnejší |
| TP-Link Tapo RVA300 | 15.50 € | **14.90 €** | 12.1 % | **7.8 %** | 13.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Folio Case Polar Blue | 14.50 € | **13.90 €** | 10.8 % | **6.2 %** | 13.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT12E-EU Bezkontaktný tester napätia | 10.00 € | **9.40 €** | 12.3 % | **5.6 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.90 €** | 16.1 % | **10.6 %** | 11.92 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 11.94 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 10.96 € | stávame sa najlacnejší |
| DOMO DO465FR | 66.50 € | **65.90 €** | 10.6 % | **9.6 %** | 66.00 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **104.90 €** | 10.5 % | **9.9 %** | 105.00 € | stávame sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (GO-SW-5G) | 16.00 € | **15.50 €** | 10.1 % | **6.6 %** | 9.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rapoo M300 Silent bezdrátová myš, modrá | 13.00 € | **12.50 €** | 10.4 % | **6.2 %** | 11.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio Fx 85 Es Plus 2E | 20.00 € | **19.50 €** | 10.0 % | **7.3 %** | 19.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely | 2.40 € | **1.90 €** | 37.4 % | **8.8 %** | 1.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, biely | 6.60 € | **6.10 €** | 47.4 % | **36.2 %** | 6.11 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 10.00 € | **9.50 €** | 43.9 % | **36.7 %** | 9.52 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 6.90 € | **6.40 €** | 47.2 % | **36.6 %** | 6.42 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **6.10 €** | 47.0 % | **35.9 %** | 6.12 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 20.00 € | **19.50 €** | 16.5 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **7.00 €** | 54.8 % | **44.4 %** | 7.03 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **25.50 €** | 34.4 % | **31.8 %** | 25.53 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.00 € | **19.50 €** | 38.4 % | **34.9 %** | 19.54 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.5 % | **9.3 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.8 % | **9.6 %** | 24.04 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.20 €** | 46.8 % | **35.9 %** | 6.24 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (black) | 14.50 € | **14.00 €** | 42.2 % | **37.3 %** | 14.04 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS ISIMAT+ | 22.50 € | **22.00 €** | 14.5 % | **12.0 %** | 22.06 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.50 € | **14.00 €** | 44.1 % | **39.1 %** | 14.06 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.50 €** | 14.9 % | **13.8 %** | 50.56 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.50 € | **47.00 €** | 37.3 % | **35.9 %** | 47.08 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 10.3 % | **8.4 %** | 30.08 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.8 % | **9.9 %** | 19.08 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 12.2 % | **9.8 %** | 23.08 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.50 €** | 13.6 % | **10.5 %** | 17.58 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 14.50 € | **14.00 €** | 57.8 % | **52.4 %** | 14.09 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.50 € | **54.00 €** | 10.1 % | **9.1 %** | 54.13 € | stávame sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **17.00 €** | 11.9 % | **8.7 %** | 17.13 € | stávame sa najlacnejší |
| LEIFHEIT 51016 | 50.50 € | **50.00 €** | 10.5 % | **9.4 %** | 50.13 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.63 € | stávame sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 23.00 € | **22.50 €** | 15.1 % | **12.6 %** | 22.65 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **11.00 €** | 38.5 % | **32.5 %** | 11.16 € | stávame sa najlacnejší |
| Solight lokátor na bicykel, Find My kompatibilný | 15.50 € | **15.00 €** | 41.6 % | **37.0 %** | 15.16 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.67 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.50 €** | 13.7 % | **10.2 %** | 15.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 17.00 € | **16.50 €** | 14.7 % | **11.3 %** | 16.69 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.3 % | **9.8 %** | 22.20 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **13.50 €** | 38.3 % | **33.4 %** | 13.70 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-BH-3A-W-WiFi | 30.50 € | **30.00 €** | 15.5 % | **13.7 %** | 30.20 € | stávame sa najlacnejší |
| Zvuková karta Maono G1 Neo (biela) | 45.00 € | **44.50 €** | 15.1 % | **13.8 %** | 44.70 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 12.3 % | **9.9 %** | 23.21 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.50 €** | 14.6 % | **11.9 %** | 20.71 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 71.50 € | **71.00 €** | 18.4 % | **17.6 %** | 71.24 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 14.50 € | **14.00 €** | 48.8 % | **43.7 %** | 14.25 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.5 % | **9.9 %** | 33.25 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **14.00 €** | 16.5 % | **12.5 %** | 14.25 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **19.00 €** | 14.1 % | **11.2 %** | 19.25 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **19.00 €** | 15.0 % | **12.0 %** | 19.25 € | stávame sa najlacnejší |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **18.00 €** | 10.4 % | **7.4 %** | 18.25 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 12.00 € | **11.50 €** | 10.3 % | **5.7 %** | 11.75 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.50 € | **10.00 €** | 48.5 % | **41.4 %** | 10.26 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 62.50 € | **62.00 €** | 39.3 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **30.00 €** | 39.2 % | **36.9 %** | 30.27 € | stávame sa najlacnejší |
| Solight dezinfekčná bezozónová UV lampa 100W | 42.50 € | **42.00 €** | 35.3 % | **33.7 %** | 42.27 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X25 (čierne) | 14.50 € | **14.00 €** | 21.4 % | **17.2 %** | 14.27 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.50 € | **13.00 €** | 47.3 % | **41.9 %** | 13.28 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 21.50 € | **21.00 €** | 46.5 % | **43.1 %** | 21.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.50 € | **12.00 €** | 47.7 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.50 € | **12.00 €** | 47.7 % | **41.8 %** | 12.28 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 12.1 % | **7.2 %** | 11.28 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 103.50 € | **103.00 €** | 35.1 % | **34.5 %** | 103.28 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 26.50 € | **26.00 €** | 9.1 % | **7.1 %** | 26.29 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.50 € | **13.00 €** | 47.3 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 24.00 € | **23.50 €** | 14.4 % | **12.0 %** | 23.79 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **17.00 €** | 16.6 % | **13.3 %** | 17.29 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.7 % | **8.3 %** | 16.29 € | stávame sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **12.00 €** | 12.9 % | **8.4 %** | 12.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 14.2 % | **10.0 %** | 13.29 € | stávame sa najlacnejší |
| Kávovar na kapsule 3 v 1 HiBREW H1A 1450W | 89.00 € | **88.50 €** | 15.0 % | **14.3 %** | 88.79 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 10.2 % | **8.5 %** | 33.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 10.2 % | **7.9 %** | 23.29 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 31.50 € | **31.00 €** | 55.0 % | **52.6 %** | 31.29 € | stávame sa najlacnejší |
| Cabletech UCH0023A1 | 12.50 € | **12.00 €** | 16.7 % | **12.0 %** | 12.29 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE E25 Pro | 235.50 € | **235.00 €** | 14.9 % | **14.7 %** | 235.29 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.00 €** | 10.2 % | **9.7 %** | 110.30 € | stávame sa najlacnejší |
| DOMO DO9252I | 252.50 € | **252.00 €** | 8.1 % | **7.9 %** | 252.30 € | stávame sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.50 € | **67.00 €** | 9.8 % | **9.0 %** | 67.30 € | stávame sa najlacnejší |
| Garett ROSE Gold Solid Steel | 67.50 € | **67.00 €** | 9.8 % | **9.0 %** | 67.30 € | stávame sa najlacnejší |
| Sieťová nabíjačka Blitzwolf BW-i100 5v1 120W | 45.50 € | **45.00 €** | 15.6 % | **14.3 %** | 45.31 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.50 € | **11.00 €** | 40.4 % | **34.3 %** | 11.32 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.50 € | **22.00 €** | 31.8 % | **28.9 %** | 22.32 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **15.00 €** | 16.8 % | **13.0 %** | 15.33 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.50 € | **25.00 €** | 40.0 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 32.00 € | **31.50 €** | 10.1 % | **8.3 %** | 31.83 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.50 € | **40.00 €** | 36.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 52.00 € | **51.50 €** | 14.6 % | **13.5 %** | 51.84 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.50 € | **32.00 €** | 33.2 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Black | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.35 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.35 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.35 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.35 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.50 € | **26.00 €** | 37.0 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.50 € | **26.00 €** | 37.0 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Maxxo vodní filtry 3+1 | 13.50 € | **13.00 €** | 26.6 % | **21.9 %** | 13.36 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.50 € | **22.00 €** | 31.4 % | **28.5 %** | 22.36 € | stávame sa najlacnejší |
| Akupresurní podložka s polštářem REBEL ACTIVE RBA-60... | 14.00 € | **13.50 €** | 14.4 % | **10.3 %** | 13.86 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 12.50 € | **12.00 €** | 36.4 % | **31.0 %** | 12.37 € | stávame sa najlacnejší |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 54.50 € | **54.00 €** | 15.2 % | **14.1 %** | 54.37 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 11.0 % | **7.7 %** | 16.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.7 % | **8.3 %** | 22.38 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 10.1 % | **8.2 %** | 29.38 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.50 €** | 13.4 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.50 € | **48.00 €** | 10.9 % | **9.7 %** | 48.39 € | stávame sa najlacnejší |
| Leifheit Air Board M Compact | 55.50 € | **55.00 €** | 10.1 % | **9.1 %** | 55.39 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.50 € | **71.00 €** | 39.3 % | **38.4 %** | 71.39 € | stávame sa najlacnejší |
| CrockPot CSC062X | 156.50 € | **156.00 €** | 6.5 % | **6.1 %** | 156.39 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 58.50 € | **58.00 €** | 10.3 % | **9.4 %** | 58.39 € | stávame sa najlacnejší |
| Salente Icequeen-Wh | 19.50 € | **19.00 €** | 8.0 % | **5.2 %** | 19.39 € | stávame sa najlacnejší |
| DOMO DO42102SV | 99.50 € | **99.00 €** | 10.1 % | **9.6 %** | 99.39 € | stávame sa najlacnejší |
| PRIMO PR406IM | 128.50 € | **128.00 €** | 10.2 % | **9.8 %** | 128.39 € | stávame sa najlacnejší |
| Domo DO331L | 106.50 € | **106.00 €** | 10.0 % | **9.5 %** | 106.39 € | stávame sa najlacnejší |
| Mio Smartbox IV | 31.00 € | **30.50 €** | 8.9 % | **7.2 %** | 30.89 € | stávame sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.50 € | **21.00 €** | 10.0 % | **7.4 %** | 21.39 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 36.00 € | **35.50 €** | 9.4 % | **7.9 %** | 35.89 € | stávame sa najlacnejší |
| Elektrická pánev do auta 20cm x 4cm 150W 12V | 42.00 € | **41.50 €** | 14.4 % | **13.0 %** | 41.90 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.00 € | **32.50 €** | 14.2 % | **12.4 %** | 32.90 € | stávame sa najlacnejší |
| Niceboy PILOT S10 Rear Cam | 24.50 € | **24.00 €** | 10.8 % | **8.6 %** | 24.40 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 12.50 € | **12.00 €** | 44.6 % | **38.8 %** | 12.40 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.00 € | **39.50 €** | 10.1 % | **8.7 %** | 39.90 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.90 € | stávame sa najlacnejší |
| Defender Taška na notebook 15,6", Geek | 14.50 € | **14.00 €** | 10.5 % | **6.7 %** | 14.40 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **12.00 €** | 46.0 % | **40.2 %** | 12.41 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **113.00 €** | 10.4 % | **9.9 %** | 113.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.42 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **10.00 €** | 13.4 % | **8.0 %** | 10.42 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **21.00 €** | 15.1 % | **12.4 %** | 21.42 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.50 € | **24.00 €** | 45.4 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.50 € | **24.00 €** | 45.4 % | **42.4 %** | 24.43 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **29.00 €** | 14.9 % | **13.0 %** | 29.44 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 24.50 € | **24.00 €** | 45.4 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.50 € | **23.00 €** | 36.9 % | **33.9 %** | 23.44 € | stávame sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **16.00 €** | 15.5 % | **12.0 %** | 16.44 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 13.50 € | **13.00 €** | 37.2 % | **32.1 %** | 13.45 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 22.50 € | **22.00 €** | 19.5 % | **16.8 %** | 22.45 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.50 € | **23.00 €** | 16.5 % | **14.0 %** | 23.45 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 10.2 % | **8.7 %** | 36.46 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.50 € | **52.00 €** | 10.3 % | **9.3 %** | 52.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.46 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 10.50 € | **10.00 €** | 38.4 % | **31.8 %** | 10.46 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.50 € | **23.00 €** | 30.5 % | **27.7 %** | 23.48 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CCPA Apple Carplay/Andr... | 37.50 € | **37.00 €** | 15.4 % | **13.9 %** | 37.49 € | stávame sa najlacnejší |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.50 € | **21.00 €** | 38.2 % | **35.0 %** | 21.49 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.50 € | **11.00 €** | 41.2 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.50 € | **12.00 €** | 13.8 % | **9.3 %** | 12.49 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.50 € | **16.00 €** | 35.4 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **36.00 €** | 10.9 % | **9.3 %** | 36.49 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **36.00 €** | 10.4 % | **8.9 %** | 36.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 21.8 % | **19.6 %** | 28.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **44.00 €** | 12.3 % | **11.0 %** | 44.49 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X12 | 17.50 € | **17.00 €** | 15.6 % | **12.3 %** | 17.49 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 24.50 € | **24.00 €** | 36.2 % | **33.5 %** | 24.49 € | stávame sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 49.50 € | **49.00 €** | 9.7 % | **8.5 %** | 49.49 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **12.00 €** | 13.9 % | **9.4 %** | 12.49 € | stávame sa najlacnejší |
| Domo DO8719W | 69.90 € | **69.50 €** | 10.2 % | **9.5 %** | 69.67 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **77.50 €** | 15.0 % | **14.4 %** | 77.69 € | stávame sa najlacnejší |
| Salente G4 robotický vysavač | 115.90 € | **115.50 €** | 8.1 % | **7.7 %** | 115.79 € | stávame sa najlacnejší |
| Salente Rtx-G4 | 115.90 € | **115.50 €** | 8.1 % | **7.7 %** | 115.79 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 12.0 % | **11.6 %** | 113.79 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 108.90 € | **108.50 €** | 10.1 % | **9.7 %** | 108.80 € | stávame sa najlacnejší |
| Motorcycle Intercom EJEAS MS8-SE | 86.90 € | **86.50 €** | 15.1 % | **14.6 %** | 86.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 94.90 € | **94.50 €** | 38.4 % | **37.8 %** | 94.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.90 € | **76.50 €** | 39.1 % | **38.3 %** | 76.89 € | stávame sa najlacnejší |
| Fixed pouzdro Honor X8 5G FIXTOP-1009-BK | 12.90 € | **12.50 €** | 11.6 % | **8.1 %** | 9.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Mlýnek na kávu CULINARIA | 15.90 € | **15.50 €** | 11.1 % | **8.3 %** | 13.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI DK 65W USB-C/USB-C 1,2m svět DATKP62 | 10.90 € | **10.50 €** | 11.5 % | **7.4 %** | 9.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI DK 65W USB-C/Light 1,2m svět DATKP63 | 10.90 € | **10.50 €** | 11.5 % | **7.4 %** | 9.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.60 €** | 50.8 % | **44.8 %** | 9.61 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **9.00 €** | 48.4 % | **42.1 %** | 9.02 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.60 €** | 56.3 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.60 € | **8.20 €** | 17.9 % | **12.4 %** | 8.29 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.30 € | **7.90 €** | 41.8 % | **34.9 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.50 €** | 40.4 % | **35.3 %** | 10.60 € | stávame sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.50 €** | 11.3 % | **8.5 %** | 15.69 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 14.2 % | **10.4 %** | 11.71 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.72 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 11.90 € | **11.50 €** | 40.8 % | **36.1 %** | 11.73 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.90 € | **12.50 €** | 34.5 % | **30.3 %** | 12.74 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.90 € | **10.50 €** | 11.3 % | **7.2 %** | 10.76 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.90 € | **10.50 €** | 10.8 % | **6.7 %** | 10.76 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 14.90 € | **14.50 €** | 46.3 % | **42.4 %** | 14.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 12.90 € | **12.50 €** | 39.7 % | **35.3 %** | 12.78 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.50 €** | 12.1 % | **9.1 %** | 14.79 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 13.3 % | **9.5 %** | 11.79 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.50 €** | 16.5 % | **13.2 %** | 13.79 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 47.0 % | **42.1 %** | 11.84 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 13.90 € | **13.50 €** | 42.7 % | **38.6 %** | 13.85 € | stávame sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.87 € | stávame sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 10.2 % | **7.3 %** | 14.88 € | stávame sa najlacnejší |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 14.90 € | **14.50 €** | 15.7 % | **12.6 %** | 14.88 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **12.50 €** | 31.1 % | **27.0 %** | 12.89 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.10 € | **4.70 €** | 48.1 % | **36.5 %** | 4.71 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 5.30 € | **4.90 €** | 55.6 % | **43.8 %** | 4.94 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 7.80 € | **7.40 €** | 33.5 % | **26.7 %** | 7.49 € | stávame sa najlacnejší |
| Tester napätia a spojitosti Uni-T UT15B | 26.90 € | **26.50 €** | 8.5 % | **6.9 %** | 26.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester káblov HDMI UNI-T UT681HDMI | 18.90 € | **18.50 €** | 9.6 % | **7.3 %** | 18.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.90 € | **17.50 €** | 11.7 % | **9.2 %** | 17.52 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **27.50 €** | 11.6 % | **10.0 %** | 27.54 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.50 €** | 15.8 % | **13.8 %** | 22.54 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.50 €** | 10.5 % | **9.3 %** | 36.58 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 11.1 % | **9.9 %** | 35.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.63 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.50 €** | 11.4 % | **9.9 %** | 29.67 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.50 €** | 10.3 % | **9.5 %** | 58.67 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **41.50 €** | 15.1 % | **14.0 %** | 41.67 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 17.90 € | **17.50 €** | 46.4 % | **43.1 %** | 17.70 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.90 € | **30.50 €** | 33.5 % | **31.8 %** | 30.70 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.50 €** | 15.1 % | **14.4 %** | 63.71 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 30.90 € | **30.50 €** | 10.1 % | **8.7 %** | 30.75 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.90 € | **20.50 €** | 15.0 % | **12.8 %** | 20.75 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.90 € | **20.50 €** | 22.9 % | **20.5 %** | 20.76 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 20.90 € | **20.50 €** | 36.7 % | **34.1 %** | 20.76 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **20.50 €** | 30.3 % | **27.8 %** | 20.76 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.90 € | **22.50 €** | 14.9 % | **12.9 %** | 22.76 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.90 € | **31.50 €** | 38.7 % | **37.0 %** | 31.77 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 16.90 € | **16.50 €** | 46.0 % | **42.6 %** | 16.78 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.50 €** | 39.1 % | **35.8 %** | 16.79 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.79 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 60.90 € | **60.50 €** | 10.7 % | **10.0 %** | 60.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.9 % | **9.8 %** | 40.79 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.50 €** | 12.2 % | **9.5 %** | 16.79 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.90 € | **37.50 €** | 11.1 % | **9.9 %** | 37.79 € | stávame sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 60.90 € | **60.50 €** | 8.0 % | **7.3 %** | 60.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.90 € | **39.50 €** | 17.2 % | **16.1 %** | 39.79 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 25.90 € | **25.50 €** | 34.5 % | **32.5 %** | 25.80 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 57.90 € | **57.50 €** | 29.3 % | **28.4 %** | 57.81 € | stávame sa najlacnejší |
| ETA 321990020 | 55.90 € | **55.50 €** | 10.2 % | **9.4 %** | 55.83 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 24.90 € | **24.50 €** | 45.3 % | **43.0 %** | 24.84 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.50 €** | 14.9 % | **13.4 %** | 29.84 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.90 € | **16.50 €** | 39.3 % | **36.1 %** | 16.87 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.50 €** | 10.7 % | **9.4 %** | 32.88 € | stávame sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.90 € | **18.50 €** | 12.5 % | **10.1 %** | 18.88 € | stávame sa najlacnejší |
| Domo DO9195C | 32.90 € | **32.50 €** | 10.5 % | **9.1 %** | 32.88 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **16.50 €** | 38.2 % | **35.0 %** | 16.89 € | stávame sa najlacnejší |
| Domo DO 9218 WK | 21.90 € | **21.50 €** | 10.4 % | **8.4 %** | 21.89 € | stávame sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **35.50 €** | 15.0 % | **13.7 %** | 35.89 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.90 € | **25.50 €** | 27.3 % | **25.3 %** | 25.89 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 45.90 € | **45.50 €** | 15.0 % | **14.0 %** | 45.89 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 270.90 € | **270.50 €** | 8.0 % | **7.9 %** | 270.80 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 4.90 € | **4.60 €** | 37.8 % | **29.4 %** | 4.69 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.90 € | **7.60 €** | 34.9 % | **29.8 %** | 7.69 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.90 € | **8.60 €** | 9.3 % | **5.6 %** | 8.69 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.10 € | **2.80 €** | 31.3 % | **18.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka IP54, sivá | 2.10 € | **1.80 €** | 24.6 % | **6.8 %** | 1.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 5.00 € | **4.70 €** | 54.0 % | **44.7 %** | 4.71 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.73 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.74 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.10 € | **5.80 €** | 35.5 % | **28.8 %** | 5.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.90 € | **3.60 €** | 53.2 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 7.20 € | **6.90 €** | 41.7 % | **35.8 %** | 6.99 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.50 € | **2.20 €** | 34.6 % | **18.5 %** | 2.29 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.90 € | **2.60 €** | 32.5 % | **18.8 %** | 2.69 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 4.50 € | **4.20 €** | 24.0 % | **15.8 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.90 € | **2.60 €** | 36.3 % | **22.2 %** | 2.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.30 € | **5.00 €** | 35.9 % | **28.2 %** | 5.09 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.00 € | **2.70 €** | 31.1 % | **18.0 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 8.70 € | **8.40 €** | 42.6 % | **37.7 %** | 8.49 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.50 € | **5.30 €** | 10.4 % | **6.4 %** | 5.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 5.50 € | **5.30 €** | 10.4 % | **6.4 %** | 5.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 6.40 € | **6.20 €** | 10.0 % | **6.6 %** | 6.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 5.80 € | **5.60 €** | 10.4 % | **6.6 %** | 5.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.70 € | **2.50 €** | 47.3 % | **36.4 %** | 2.51 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.00 € | **4.80 €** | 43.6 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.44 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.60 € | **3.40 €** | 41.4 % | **33.5 %** | 3.49 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.80 € | **4.60 €** | 19.3 % | **14.4 %** | 4.69 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.90 € | **1.70 €** | 36.7 % | **22.3 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.20 €** | 56.1 % | **43.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.40 € | **2.20 €** | 47.8 % | **35.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.30 € | **3.10 €** | 52.4 % | **43.2 %** | 3.14 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.30 € | **2.10 €** | 46.1 % | **33.4 %** | 2.18 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.70 € | **8.50 €** | 47.1 % | **43.7 %** | 8.54 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.50 € | **9.30 €** | 32.9 % | **30.1 %** | 9.39 € | stávame sa najlacnejší |
| Sluchátka Bluetooth KRUGER & MATZ Street 3 Wireless ... | 34.00 € | **33.90 €** | 5.5 % | **5.2 %** | 32.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.90 €** | 14.9 % | **14.7 %** | 54.94 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **8.20 €** | 55.5 % | **53.6 %** | 8.25 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.00 € | **22.90 €** | 33.2 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 18.00 € | **17.90 €** | 45.5 % | **44.7 %** | 17.95 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.90 €** | 38.4 % | **37.7 %** | 20.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom LECCE, ... | 22.00 € | **21.90 €** | 38.4 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 33.7 % | **33.0 %** | 19.96 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 17.00 € | **16.90 €** | 45.3 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 17.00 € | **16.90 €** | 45.3 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 10.2 % | **10.0 %** | 47.96 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.97 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.90 €** | 14.6 % | **14.3 %** | 46.97 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 40.00 € | **39.90 €** | 38.2 % | **37.9 %** | 39.98 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 64.00 € | **63.90 €** | 24.7 % | **24.5 %** | 63.98 € | stávame sa najlacnejší |
| Tefal B817S255 | 30.00 € | **29.90 €** | 5.8 % | **5.5 %** | 29.99 € | stávame sa najlacnejší |
| Solight LED reflektor PRO, 20W, 1840lm, 5000K, IP65 | 8.80 € | **8.70 €** | 44.8 % | **43.2 %** | 8.79 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **35.90 €** | 45.0 % | **44.6 %** | 35.99 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 22.00 € | **21.90 €** | 7.7 % | **7.2 %** | 21.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.20 €** | 25.6 % | **24.2 %** | 9.29 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Tefal KO5S08E0 | 35.00 € | **34.90 €** | 10.0 % | **9.7 %** | 34.99 € | stávame sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.00 € | **17.90 €** | 6.0 % | **5.5 %** | 17.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.40 € | **5.30 €** | 46.8 % | **44.1 %** | 5.31 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.70 € | **5.60 €** | 37.5 % | **35.1 %** | 5.63 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 6.90 € | **6.80 €** | 34.5 % | **32.6 %** | 6.85 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 6.90 € | **6.80 €** | 46.1 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda červená, závesná, 60cm,... | 4.40 € | **4.30 €** | 46.0 % | **42.7 %** | 4.37 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 7.20 € | **7.10 €** | 34.9 % | **33.0 %** | 7.17 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.70 € | **4.60 €** | 35.0 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 6.40 € | **6.30 €** | 36.2 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.90 € | **5.80 €** | 11.0 % | **9.2 %** | 5.89 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.70 € | **6.60 €** | 34.5 % | **32.5 %** | 6.69 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.90 € | **6.80 €** | 45.3 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.90 € | **6.80 €** | 45.3 % | **43.2 %** | 6.89 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.70 € | **6.60 €** | 31.9 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.40 € | **4.30 €** | 55.5 % | **52.0 %** | 4.39 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 2.10 € | **2.00 €** | 51.1 % | **43.9 %** | 2.02 € | stávame sa najlacnejší |
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
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.60 € | **3.50 €** | 35.5 % | **31.7 %** | 3.57 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.70 € | **2.60 €** | 38.1 % | **32.9 %** | 2.68 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.60 € | **3.50 €** | 37.4 % | **33.6 %** | 3.58 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **3.00 €** | 16.1 % | **12.4 %** | 3.08 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.90 €** | 22.7 % | **19.7 %** | 3.99 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.50 € | **3.40 €** | 36.8 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.50 € | **3.40 €** | 13.4 % | **10.1 %** | 3.49 € | stávame sa najlacnejší |
| Solight skúšačka 304, priemer 3,5mm x 190mm, AC napä... | 0.90 € | **0.80 €** | 52.4 % | **35.5 %** | 0.82 € | stávame sa najlacnejší |
| Solight zástrčka plochá priama, IP20, biela | 0.90 € | **0.80 €** | 52.4 % | **35.5 %** | 0.82 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.96 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 0.90 € | **0.80 €** | 49.3 % | **32.7 %** | 0.87 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 0.90 € | **0.80 €** | 49.3 % | **32.7 %** | 0.87 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight náhradný lievik pre 1T08, 5ks | 1.70 € | **1.60 €** | 13.3 % | **6.6 %** | 1.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
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
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.90 € | **8.80 €** | 45.9 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.90 € | **8.80 €** | 45.9 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 45.8 % | **43.7 %** | 7.05 € | stávame sa najlacnejší |
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
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.40 €** | 36.3 % | **33.8 %** | 5.48 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 4.80 € | **4.70 €** | 37.4 % | **34.5 %** | 4.78 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.10 € | **9.00 €** | 6.3 % | **5.1 %** | 9.09 € | stávame sa najlacnejší |
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
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.00 € | **7.90 €** | 29.3 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 8.60 € | **8.50 €** | 6.9 % | **5.7 %** | 8.59 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 6.10 € | **6.00 €** | 13.5 % | **11.6 %** | 6.09 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.40 € | **8.30 €** | 54.5 % | **52.7 %** | 8.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.20 €** | 11.3 % | **8.7 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **4.50 €** | 33.6 % | **30.7 %** | 4.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.20 €** | 11.7 % | **9.1 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.30 € | **4.20 €** | 8.6 % | **6.0 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.90 €** | 25.4 % | **23.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.30 € | **5.20 €** | 20.4 % | **18.1 %** | 5.29 € | stávame sa najlacnejší |
| Súprava celodenných filtrov Freewell Real Locking s ... | 220.00 € | **219.90 €** | 14.9 % | **14.9 %** | 219.94 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 110.00 € | **109.90 €** | 20.0 % | **19.9 %** | 109.96 € | stávame sa najlacnejší |
| JBL Grip Red | 80.00 € | **79.90 €** | 6.1 % | **6.0 %** | 79.99 € | stávame sa najlacnejší |
| JBL Grip White | 80.00 € | **79.90 €** | 6.1 % | **6.0 %** | 79.99 € | stávame sa najlacnejší |

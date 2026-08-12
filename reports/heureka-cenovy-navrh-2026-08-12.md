# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-12

Vstup: `premiumstore-sk_2026-08-12_21-17.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **7104**
- Návrh **zvýšiť** cenu: **232** produktov
- Návrh **znížiť** cenu: **730** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **6142** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **307**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (232)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| JBL BAR 800 | 560.50 € | **649.00 €** | 5.1 % | **21.7 %** | 560.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá ONEODIO Studio Max 2 (čierne) | 143.50 € | **187.50 €** | 15.0 % | **50.2 %** | 187.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Káblové slúchadlá OneOdio OpenRock Link 10 (čierne) | 47.90 € | **63.00 €** | 15.4 % | **51.8 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio A10 (čierne) | 57.50 € | **70.50 €** | 7.1 % | **31.4 %** | 60.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio A10 ANC (biele) | 57.50 € | **70.50 €** | 7.0 % | **31.2 %** | 60.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio A1 Pro (čierne) | 33.50 € | **43.00 €** | 15.2 % | **47.9 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant PXN W AS | 66.90 € | **76.00 €** | 15.2 % | **30.9 %** | 76.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 442.50 € | **451.00 €** | 5.0 % | **7.0 %** | 442.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s RGB podsvietením... | 34.00 € | **41.90 €** | 5.9 % | **30.5 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L7 | 263.50 € | **270.00 €** | 5.1 % | **7.7 %** | 263.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia otočná IP kamera | 38.50 € | **45.00 €** | 42.7 % | **66.8 %** | 38.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stolný ramenný stojan Puluz s 26cm LED Vlogging Ring... | 29.50 € | **35.50 €** | 15.5 % | **39.0 %** | 35.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude Pro Recycled | 18.90 € | **24.50 €** | 12.2 % | **45.4 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Neotion CAM 803 Nagra Skylink CZ+SK | 35.90 € | **40.50 €** | 10.5 % | **24.7 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| MAXXO VM Profi | 94.50 € | **99.00 €** | 5.4 % | **10.5 %** | 94.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.50 € | **18.50 €** | 8.0 % | **37.7 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Baseus Bowie D05 Bluetooth 5.2 ... | 32.90 € | **36.90 €** | 33.7 % | **50.0 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 113.00 € | **116.50 €** | 5.4 % | **8.6 %** | 113.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 113.00 € | **116.50 €** | 5.4 % | **8.6 %** | 113.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant PXN-V900 Gen2 | 99.50 € | **102.90 €** | 14.8 % | **18.8 %** | 102.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **209.50 €** | 14.9 % | **16.3 %** | 209.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Endurance Peak III white | 82.50 € | **84.90 €** | 5.4 % | **8.5 %** | 82.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Edifier Open-Ear Comfo Flex white | 45.50 € | **47.90 €** | 10.0 % | **15.8 %** | 47.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Boombox 3 BLACK | 307.50 € | **309.90 €** | 8.7 % | **9.6 %** | 307.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (hnedé) | 36.90 € | **39.00 €** | 6.6 % | **12.6 %** | 36.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (modré) | 36.90 € | **39.00 €** | 9.6 % | **15.8 %** | 36.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (ružové) | 36.90 € | **39.00 €** | 8.3 % | **14.5 %** | 36.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (zlaté) | 36.90 € | **39.00 €** | 12.2 % | **18.6 %** | 36.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.90 €** | 20.1 % | **45.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 36.90 € | **38.50 €** | 10.5 % | **15.3 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 20W, 1500lm... | 7.30 € | **8.90 €** | 5.4 % | **28.5 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 20W, 1500lm... | 7.30 € | **8.90 €** | 5.4 % | **28.5 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **93.50 €** | 14.9 % | **16.9 %** | 93.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjačka SkyRC iMax B6 Mini | 32.50 € | **34.00 €** | 14.8 % | **20.1 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 31.50 € | **33.00 €** | 32.3 % | **38.6 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANON PIXMA G3430 Pink | 145.50 € | **146.90 €** | 9.1 % | **10.1 %** | 145.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.40 € | **9.70 €** | 54.5 % | **78.4 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| EDIFIER ES60 reproduktor černý | 94.90 € | **95.90 €** | 10.1 % | **11.2 %** | 95.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L6 | 150.50 € | **151.50 €** | 5.2 % | **5.9 %** | 150.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong LEAP-S3 V2 Google TV box | 63.50 € | **64.50 €** | 9.7 % | **11.4 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., 1 režim | 3.30 € | **4.20 €** | 7.7 % | **37.1 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.00 € | **17.90 €** | 39.2 % | **46.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| LENOVO adaptér TAB 68W AC USB ZG38C05739 | 17.00 € | **17.90 €** | 7.8 % | **13.5 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 36.90 € | **37.50 €** | 10.9 % | **12.7 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, vypínač,... | 9.90 € | **10.50 €** | 22.3 % | **29.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| EDIFIER T5s subwoofer černý | 125.00 € | **125.50 €** | 6.6 % | **7.0 %** | 125.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| EDIFIER T5s subwoofer hnědý | 125.00 € | **125.50 €** | 6.6 % | **7.0 %** | 125.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.00 € | **23.50 €** | 6.4 % | **8.7 %** | 23.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čelovka Flextail Tiny Helio 700Z (oranžová) | 23.00 € | **23.50 €** | 14.9 % | **17.4 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná pumpa Flextail Tiny Pump 2 (čierna) | 22.50 € | **23.00 €** | 15.0 % | **17.5 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S10 Rear Cam | 24.00 € | **24.50 €** | 8.6 % | **10.8 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **20.50 €** | 35.1 % | **38.4 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **31.50 €** | 18.8 % | **20.7 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **15.50 €** | 26.6 % | **30.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.00 € | **15.50 €** | 41.1 % | **45.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.00 € | **12.50 €** | 22.0 % | **27.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.00 € | **21.50 €** | 26.4 % | **29.4 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **14.50 €** | 29.0 % | **33.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 16.00 € | **16.50 €** | 20.2 % | **24.0 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 39.00 € | **39.50 €** | 31.7 % | **33.4 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.00 € | **13.50 €** | 23.3 % | **28.1 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO234S | 85.00 € | **85.50 €** | 5.3 % | **5.9 %** | 85.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Smartdust | 132.00 € | **132.50 €** | 5.1 % | **5.5 %** | 132.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 252.00 € | **252.50 €** | 7.9 % | **8.1 %** | 252.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Creality Ender-3 V3 Plus 3D Printer | 348.00 € | **348.50 €** | 11.0 % | **11.1 %** | 348.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W Power Bank 20000mAh Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 46.00 € | **46.50 €** | 12.3 % | **13.5 %** | 46.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.00 € | **12.50 €** | 17.5 % | **22.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.00 € | **24.50 €** | 23.9 % | **26.5 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **42.50 €** | 23.6 % | **25.1 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.00 € | **38.50 €** | 37.7 % | **39.5 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 25m,... | 37.00 € | **37.50 €** | 17.2 % | **18.8 %** | 37.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, vonk... | 82.00 € | **82.50 €** | 17.5 % | **18.2 %** | 82.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.20 € | **5.70 €** | 25.8 % | **37.9 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 12.00 € | **12.50 €** | 22.0 % | **27.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TOUR ONE M3, Black | 275.00 € | **275.50 €** | 9.3 % | **9.5 %** | 275.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TOUR ONE M3, Latte | 275.00 € | **275.50 €** | 9.3 % | **9.5 %** | 275.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky C10 (biele) | 13.00 € | **13.50 €** | 12.1 % | **16.4 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 60.00 € | **60.50 €** | 36.0 % | **37.2 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 10.00 € | **10.50 €** | 40.4 % | **47.4 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Indesit BTW S50400 EU/N | 262.00 € | **262.50 €** | 7.9 % | **8.1 %** | 262.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10W | 337.00 € | **337.50 €** | 6.9 % | **7.1 %** | 337.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 1226 | 192.00 € | **192.50 €** | 8.5 % | **8.8 %** | 192.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio OpenRock S2 (blackE) | 64.50 € | **64.90 €** | 10.9 % | **11.6 %** | 64.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 189.50 € | **189.90 €** | 15.1 % | **15.3 %** | 189.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 65.50 € | **65.90 €** | 9.3 % | **10.0 %** | 65.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE SuChef | 82.50 € | **82.90 €** | 7.7 % | **8.3 %** | 82.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 4216 90000 | 94.50 € | **94.90 €** | 5.4 % | **5.9 %** | 94.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.50 € | **84.90 €** | 9.2 % | **9.7 %** | 84.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.50 € | **88.90 €** | 5.7 % | **6.2 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 27.8 % | **28.5 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **69.90 €** | 27.8 % | **28.5 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **64.90 €** | 21.1 % | **21.9 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CBT6130/3X | 64.50 € | **64.90 €** | 6.1 % | **6.7 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje BM201AG1BG | 215.50 € | **215.90 €** | 8.0 % | **8.2 %** | 215.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool MBNA910X | 242.50 € | **242.90 €** | 8.0 % | **8.1 %** | 242.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 174.50 € | **174.90 €** | 8.7 % | **9.0 %** | 174.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.50 € | **13.90 €** | 31.6 % | **35.5 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.4 % | **14.2 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 42.50 € | **42.90 €** | 12.1 % | **13.2 %** | 42.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná pumpa Flextail Tiny Pump X (oranžová) | 18.50 € | **18.90 €** | 15.5 % | **18.0 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 35.50 € | **35.90 €** | 31.9 % | **33.4 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **21.90 €** | 10.1 % | **12.1 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **49.90 €** | 10.0 % | **10.8 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.50 € | **28.90 €** | 20.3 % | **22.0 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná stolná lampička s displejom... | 23.50 € | **23.90 €** | 19.3 % | **21.3 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.50 € | **39.90 €** | 15.0 % | **16.1 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 39.50 € | **39.90 €** | 15.0 % | **16.1 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, čierna | 30.50 € | **30.90 €** | 37.1 % | **38.9 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.50 € | **54.90 €** | 37.3 % | **38.3 %** | 54.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.50 € | **34.90 €** | 16.3 % | **17.7 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.50 € | **21.90 €** | 22.3 % | **24.6 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.50 € | **45.90 €** | 40.3 % | **41.6 %** | 45.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight laserový merač vzdálenosti, 0,05 - 40m | 16.50 € | **16.90 €** | 14.7 % | **17.4 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.50 € | **16.90 €** | 29.7 % | **32.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 23.50 € | **23.90 €** | 16.1 % | **18.1 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 63.50 € | **63.90 €** | 16.4 % | **17.1 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.50 € | **41.90 €** | 33.6 % | **34.9 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 321990020 | 55.50 € | **55.90 €** | 9.4 % | **10.2 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 16.50 € | **16.90 €** | 37.2 % | **40.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.50 € | **20.90 €** | 36.4 % | **39.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 34.50 € | **34.90 €** | 36.7 % | **38.3 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.50 € | **34.90 €** | 25.1 % | **26.6 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.50 € | **55.90 €** | 35.5 % | **36.4 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.90 €** | 18.7 % | **20.3 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 48.50 € | **48.90 €** | 20.0 % | **20.9 %** | 48.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 21.50 € | **21.90 €** | 19.6 % | **21.8 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 21.50 € | **21.90 €** | 19.6 % | **21.8 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.50 € | **18.90 €** | 31.6 % | **34.4 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo 550, 550lm, L... | 16.50 € | **16.90 €** | 29.7 % | **32.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **19.90 €** | 36.8 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 328.50 € | **328.90 €** | 8.0 % | **8.1 %** | 328.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3m, 3 zásuvky, vypínač, 1... | 5.40 € | **5.70 €** | 6.8 % | **12.8 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.50 € | **4.70 €** | 35.0 % | **41.0 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.90 € | **318.00 €** | 6.5 % | **6.5 %** | 317.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **561.00 €** | 7.3 % | **7.4 %** | 560.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL PartyBox 330W | 558.90 € | **559.00 €** | 9.1 % | **9.1 %** | 558.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Xtreme 5 Black | 308.90 € | **309.00 €** | 6.9 % | **6.9 %** | 308.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Party reproduktor JBL PartyBox 130 | 367.90 € | **368.00 €** | 7.7 % | **7.8 %** | 367.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PW4 | 347.90 € | **348.00 €** | 6.9 % | **6.9 %** | 347.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 398.90 € | **399.00 €** | 19.6 % | **19.6 %** | 398.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux 600 Gril EMS4253TBX | 266.90 € | **267.00 €** | 8.1 % | **8.2 %** | 266.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| EDIFIER M1360 reproduktory černé | 39.90 € | **40.00 €** | 11.0 % | **11.3 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.90 € | **49.00 €** | 15.2 % | **15.4 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 17.90 € | **18.00 €** | 23.5 % | **24.2 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 48.90 € | **49.00 €** | 24.5 % | **24.8 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 25.8 % | **26.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 21.90 € | **22.00 €** | 28.8 % | **29.4 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.90 € | **23.00 €** | 38.6 % | **39.2 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente ProVacs | 56.90 € | **57.00 €** | 5.6 % | **5.8 %** | 56.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TP-LINK RE205 AC750 WiFi Range Extender | 30.90 € | **31.00 €** | 10.5 % | **10.8 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TP-LINK Tapo C100 WiFi camera | 22.90 € | **23.00 €** | 6.4 % | **6.9 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 19.90 € | **20.00 €** | 24.1 % | **24.7 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá QCY H3 pro ANC (čierne) | 40.90 € | **41.00 €** | 5.5 % | **5.8 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| OWS OneOdio OpenRock Pro Wireless Headphones (silver) | 49.90 € | **50.00 €** | 11.9 % | **12.1 %** | 49.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.60 € | **6.70 €** | 32.5 % | **34.5 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, bi... | 6.30 € | **6.40 €** | 32.7 % | **34.8 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.40 €** | 24.3 % | **26.3 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.40 €** | 5.4 % | **7.1 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 6.30 € | **6.40 €** | 34.8 % | **36.9 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.10 € | **6.20 €** | 21.9 % | **23.8 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.10 € | **4.20 €** | 35.0 % | **38.2 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.60 € | **6.70 €** | 35.5 % | **37.6 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.80 € | **5.90 €** | 42.9 % | **45.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 3000K, 510lm | 0.70 € | **0.80 €** | 7.4 % | **22.7 %** | 0.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.20 €** | 16.9 % | **22.5 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.10 € | **3.20 €** | 27.9 % | **32.1 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.00 €** | 19.7 % | **23.8 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.70 € | **1.80 €** | 22.3 % | **29.5 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka plochá priama, IP20, čierna | 0.70 € | **0.80 €** | 18.6 % | **35.5 %** | 0.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.20 € | **1.30 €** | 13.4 % | **22.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 2.50 € | **2.60 €** | 31.1 % | **36.4 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 28.1 % | **33.0 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.50 € | **3.60 €** | 18.1 % | **21.4 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **1.90 €** | 29.5 % | **36.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.80 € | **1.90 €** | 17.1 % | **23.6 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.90 € | **13.00 €** | 37.5 % | **38.5 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.30 € | **9.40 €** | 34.3 % | **35.7 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.80 € | **9.90 €** | 26.9 % | **28.2 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.00 € | **5.10 €** | 33.3 % | **35.9 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.00 € | **6.10 €** | 30.4 % | **32.6 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.90 € | **10.00 €** | 23.8 % | **25.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **10.00 €** | 44.2 % | **45.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **9.70 €** | 33.2 % | **34.6 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.20 € | **4.30 €** | 32.4 % | **35.5 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.20 € | **4.30 €** | 35.5 % | **38.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.90 € | **16.00 €** | 19.0 % | **19.8 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **4.80 €** | 34.5 % | **37.4 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.40 € | **7.50 €** | 37.0 % | **38.9 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 6 zásuviek, vypínač, ... | 8.50 € | **8.60 €** | 16.9 % | **18.3 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.30 €** | 15.4 % | **18.1 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.60 €** | 30.7 % | **33.6 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.70 € | **3.80 €** | 33.1 % | **36.7 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.00 € | **5.10 €** | 34.6 % | **37.3 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 2m | 4.70 € | **4.80 €** | 35.0 % | **37.9 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 35.5 % | **37.8 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.00 € | **8.10 €** | 35.2 % | **36.9 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.50 € | **7.60 €** | 35.2 % | **37.0 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 8.50 € | **8.60 €** | 35.8 % | **37.4 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY sluchátka MDR-ZX110P, růžová | 12.90 € | **13.00 €** | 5.1 % | **5.9 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY sluchátka MDR-ZX110W,bílá | 12.90 € | **13.00 €** | 5.1 % | **5.9 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.90 € | **79.00 €** | 15.3 % | **15.5 %** | 78.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.90 € | **69.00 €** | 29.4 % | **29.6 %** | 68.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 104.90 € | **105.00 €** | 9.9 % | **10.0 %** | 104.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.90 € | **177.00 €** | 7.7 % | **7.7 %** | 176.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE F4142PW | 221.90 € | **222.00 €** | 8.0 % | **8.1 %** | 221.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (730)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D skener Creality Sermoon S1 | 2561.00 € | **2374.50 €** | 15.0 % | **6.6 %** | 2374.69 € | stávame sa najlacnejší |
| Skaner 3D Creality RaptorX | 3298.90 € | **3149.50 €** | 10.0 % | **5.0 %** | 2997.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE83S85H | 3278.90 € | **3129.90 €** | 10.0 % | **5.0 %** | 2799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Střídač hybridní DEYE SUN-10K-SG01HP3-EU-AM2, 10kW, ... | 1621.50 € | **1480.50 €** | 15.0 % | **5.0 %** | 1212.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **3020.50 €** | 15.0 % | **10.0 %** | 3020.71 € | stávame sa najlacnejší |
| MOVA S70 Ultra Roller RVC (biela) | 1154.00 € | **1053.90 €** | 15.0 % | **5.0 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi TV S Mini LED 98 2026 | 2070.90 € | **1976.50 €** | 10.0 % | **5.0 %** | 1925.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R619EAW6 | 559.00 € | **482.00 €** | 24.1 % | **7.0 %** | 482.20 € | stávame sa najlacnejší |
| WHIRLPOOL MWF 421 SL | 259.00 € | **184.90 €** | 47.3 % | **5.2 %** | 183.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA S70 Roller (biela) | 807.50 € | **737.50 €** | 15.0 % | **5.0 %** | 504.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Revopoint POP 4 | 793.90 € | **724.90 €** | 15.0 % | **5.0 %** | 717.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 111.90 € | **46.00 €** | 183.9 % | **16.7 %** | 46.09 € | stávame sa najlacnejší |
| Roborock Qrevo Edge 5V1 čistiaci robot (biely) (N) | 719.00 € | **656.90 €** | 15.0 % | **5.1 %** | 524.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Kobra S1 Combo 3D tlačiareň + Hotend + Fila... | 693.00 € | **632.90 €** | 15.0 % | **5.0 %** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS520E15S | 359.00 € | **298.90 €** | 26.3 % | **5.1 %** | 288.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi TV S Mini LED 85 2026 | 1250.90 € | **1193.90 €** | 10.0 % | **5.0 %** | 1165.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň QiDi Q2C Combo | 608.00 € | **555.50 €** | 15.0 % | **5.1 %** | 539.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 901.00 € | **848.90 €** | 15.0 % | **8.3 %** | 849.00 € | stávame sa najlacnejší |
| Bezdrôtový masážny prístroj/regeneračná obuv s techn... | 542.90 € | **495.90 €** | 15.0 % | **5.1 %** | 481.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skaner 3D Revopoint MetroY | 1153.50 € | **1106.90 €** | 9.4 % | **5.0 %** | 1089.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA S10 Plus robot vaccum cleaner | 519.00 € | **474.50 €** | 14.9 % | **5.1 %** | 439.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MacBook Neo 8/512GB indigo MHFG4CZ | 967.00 € | **923.50 €** | 10.0 % | **5.1 %** | 820.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier Airpulse A100 2.0 (čierne) | 765.00 € | **722.00 €** | 15.0 % | **8.5 %** | 722.48 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 572.50 € | **529.90 €** | 15.0 % | **6.5 %** | 529.95 € | stávame sa najlacnejší |
| Electrolux EHF46547XK | 329.00 € | **289.50 €** | 19.4 % | **5.1 %** | 213.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TWS Edifier STAX S10 ANC planar headphones (black) | 435.00 € | **397.50 €** | 15.0 % | **5.1 %** | 276.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi TV S Mini LED 75 2026 | 823.90 € | **786.50 €** | 10.0 % | **5.0 %** | 770.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA S10 robot vacuum cleaner | 425.50 € | **388.50 €** | 15.1 % | **5.0 %** | 339.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook 16 (M1502NAQ-BQ057W) | 769.90 € | **734.90 €** | 10.0 % | **5.0 %** | 552.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE55S85H | 746.50 € | **712.50 €** | 10.0 % | **5.0 %** | 690.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MKF 17DF441 Fixní držák na TV | 39.00 € | **7.30 €** | 496.0 % | **11.6 %** | 7.33 € | stávame sa najlacnejší |
| Xiaomi TV S Mini LED 65 2026 | 645.50 € | **615.90 €** | 10.1 % | **5.0 %** | 607.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WPS C7X WBS EE X | 616.50 € | **588.50 €** | 10.0 % | **5.0 %** | 559.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S85H | 1326.90 € | **1298.90 €** | 10.0 % | **7.7 %** | 1299.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 407.00 € | **379.90 €** | 15.0 % | **7.4 %** | 379.95 € | stávame sa najlacnejší |
| Gorenje MO 20 A3B | 99.00 € | **72.50 €** | 43.6 % | **5.1 %** | 65.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 745390000 | 149.99 € | **124.50 €** | 32.0 % | **9.6 %** | 124.90 € | stávame sa najlacnejší |
| Reproduktory Edifier M90 (biele) | 290.00 € | **264.90 €** | 15.0 % | **5.1 %** | 227.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier M90 (čierne) | 290.00 € | **264.90 €** | 15.0 % | **5.1 %** | 227.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3431B 1600W 12V | 303.50 € | **279.00 €** | 15.0 % | **5.7 %** | 279.39 € | stávame sa najlacnejší |
| Roborock H60 Hub Ultra Black | 541.90 € | **517.50 €** | 10.0 % | **5.1 %** | 392.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple AirPods Max Midnight (2024) | 530.90 € | **506.50 €** | 10.1 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Mars 5 Ultra | 276.50 € | **252.90 €** | 14.9 % | **5.1 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja ON400EU Speedi 10v1 5,7l | 526.00 € | **502.50 €** | 10.0 % | **5.1 %** | 154.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 213890000 | 105.99 € | **82.50 €** | 34.9 % | **5.0 %** | 76.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 255R G10 (CH7J9AT) | 477.50 € | **455.90 €** | 10.0 % | **5.0 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE48S85H | 670.50 € | **648.90 €** | 10.1 % | **6.5 %** | 649.00 € | stávame sa najlacnejší |
| JBL Boombox4 Black Přenosný reproduktor | 470.90 € | **449.50 €** | 10.0 % | **5.0 %** | 444.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (whi | 455.90 € | **434.90 €** | 10.1 % | **5.0 %** | 390.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotrenažér Cycplus T3 | 849.90 € | **828.90 €** | 15.0 % | **12.2 %** | 829.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 580.50 € | **559.90 €** | 14.0 % | **9.9 %** | 560.00 € | stávame sa najlacnejší |
| AI TWS slúchadlá VIAIM Recdot 2 s diktafónom (čierne) | 233.50 € | **213.00 €** | 15.1 % | **5.0 %** | 159.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI TWS slúchadlá VIAIM Recdot 2 s diktafónom (zlaté) | 233.50 € | **213.00 €** | 15.1 % | **5.0 %** | 159.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Kruger&Matz KM1995-S | 232.90 € | **212.90 €** | 15.0 % | **5.2 %** | 162.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shark IP1251EUT Power Detect Pet | 428.00 € | **408.50 €** | 10.0 % | **5.0 %** | 355.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 50T69C QLED 4K SMART Google TV | 432.90 € | **413.50 €** | 10.0 % | **5.1 %** | 349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L6390 | 425.00 € | **405.90 €** | 10.0 % | **5.1 %** | 360.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba Plus 415 Combo+AutoWash do | 396.50 € | **378.50 €** | 10.1 % | **5.1 %** | 319.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ritter AES 62 SR | 396.50 € | **378.50 €** | 10.0 % | **5.0 %** | 345.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 516.50 € | **498.90 €** | 11.5 % | **7.7 %** | 499.00 € | stávame sa najlacnejší |
| Moza Racing mBooster RS076 aktívny univerzálny pedál... | 823.50 € | **806.50 €** | 7.3 % | **5.0 %** | 639.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Open Note s diktafónom (čierne) | 192.90 € | **176.00 €** | 15.1 % | **5.0 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Open Note s diktafónom (sivé) | 192.90 € | **176.00 €** | 15.1 % | **5.0 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shark IW3612EU Detect Pro Auto-Empty | 349.50 € | **333.50 €** | 10.2 % | **5.1 %** | 324.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE55LS03HW | 1405.90 € | **1389.90 €** | 10.0 % | **8.8 %** | 1390.00 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 5G 8/256GB ZAFM0297CZ | 345.50 € | **329.90 €** | 10.0 % | **5.1 %** | 327.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT 51003 Vysavač okna+tyč 43cm+mop | 59.90 € | **44.50 €** | 41.4 % | **5.1 %** | 39.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock H60 Ultra Black | 345.90 € | **330.50 €** | 10.0 % | **5.1 %** | 259.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV A17 Pro Max (strieborný) | 172.00 € | **157.50 €** | 14.9 % | **5.2 %** | 144.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický mlynček na zrnkovú kávu HiBREW G5 | 172.00 € | **157.50 €** | 14.9 % | **5.2 %** | 153.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock vysavač Q10 VF White | 312.90 € | **298.50 €** | 10.1 % | **5.1 %** | 177.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L4360 | 301.50 € | **287.90 €** | 10.1 % | **5.1 %** | 223.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 43S5K QLED FullHD SMART Android TV | 288.90 € | **275.90 €** | 10.0 % | **5.1 %** | 243.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 276.50 € | **263.50 €** | 13.8 % | **8.5 %** | 263.76 € | stávame sa najlacnejší |
| Candy CDPH 2L1047W | 280.90 € | **268.00 €** | 10.1 % | **5.0 %** | 208.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 8x42 | 148.00 € | **135.50 €** | 14.9 % | **5.2 %** | 104.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OfficeJet Pro 9132e AiO HP+ (404M5B) | 273.00 € | **260.90 €** | 10.0 % | **5.1 %** | 208.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica PPS 61002 W | 249.00 € | **236.90 €** | 10.4 % | **5.0 %** | 232.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Edifier R1700BT white speakers | 135.50 € | **123.50 €** | 15.2 % | **5.0 %** | 102.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica GWAS610DL | 254.50 € | **242.90 €** | 10.1 % | **5.1 %** | 237.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 051690000 | 75.99 € | **64.50 €** | 30.0 % | **10.3 %** | 64.58 € | stávame sa najlacnejší |
| HP OfficeJet 9730e AiO (537P6B) | 243.00 € | **231.90 €** | 10.0 % | **5.0 %** | 203.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 126490000 | 52.99 € | **41.90 €** | 32.8 % | **5.0 %** | 39.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong Mira 1 přenosný projektor | 242.50 € | **231.50 €** | 10.0 % | **5.0 %** | 191.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D Tlačiareň Creality CR-10 SE | 189.50 € | **178.50 €** | 15.0 % | **8.4 %** | 178.60 € | stávame sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 768.90 € | **757.90 €** | 13.0 % | **11.4 %** | 758.00 € | stávame sa najlacnejší |
| DOMO DO9232I | 367.50 € | **356.50 €** | 10.1 % | **6.8 %** | 356.69 € | stávame sa najlacnejší |
| Gorenje R49DPW | 239.90 € | **229.00 €** | 10.0 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WSAP84AWI | 377.50 € | **366.90 €** | 10.1 % | **7.0 %** | 367.00 € | stávame sa najlacnejší |
| HP 255R G10 (CH7K2AT) | 511.00 € | **500.50 €** | 7.2 % | **5.0 %** | 478.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja NC302EU CREAMi 7v1 zmrzlinovač | 238.90 € | **228.50 €** | 10.0 % | **5.2 %** | 188.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406B 700W 12V | 124.90 € | **114.50 €** | 15.0 % | **5.4 %** | 114.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS8751 white | 218.90 € | **208.90 €** | 10.0 % | **5.0 %** | 161.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C6 WiFi Dual Band Router | 44.90 € | **34.90 €** | 35.3 % | **5.1 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 268.90 € | **258.90 €** | 13.2 % | **9.0 %** | 259.00 € | stávame sa najlacnejší |
| Gorenje GS541C10W | 354.50 € | **344.50 €** | 10.0 % | **6.9 %** | 344.90 € | stávame sa najlacnejší |
| HP OfficeJet 9720e AiO (53N95B) | 214.90 € | **205.00 €** | 10.1 % | **5.0 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Arzopa S1 TABLE 15,6" | 114.90 € | **105.00 €** | 15.0 % | **5.1 %** | 77.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Výrobník ľadu Euhomy IM08, 1,2 l, 12 kg (strieborný) | 114.90 € | **105.00 €** | 15.0 % | **5.1 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Euhomy IM016 12 kg výrobník ľadových kociek (čierny) | 114.90 € | **105.00 €** | 15.0 % | **5.1 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja SL400EU Double Stack MAX 9,5l | 215.50 € | **205.90 €** | 10.0 % | **5.1 %** | 172.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 14WQ LTE (UMM230242) | 210.50 € | **201.00 €** | 10.0 % | **5.0 %** | 186.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **159.50 €** | 14.9 % | **8.5 %** | 159.90 € | stávame sa najlacnejší |
| ETA 227090000 | 52.99 € | **43.50 €** | 29.4 % | **6.2 %** | 38.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 148.90 € | **139.50 €** | 15.1 % | **7.9 %** | 139.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio OpenRock Link 20 (čierne) | 107.00 € | **97.90 €** | 15.0 % | **5.2 %** | 92.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odvlhčovač vzduchu TEESA TSA8077 | 108.00 € | **98.90 €** | 14.9 % | **5.2 %** | 97.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 142390000 | 39.99 € | **30.90 €** | 45.1 % | **12.1 %** | 30.96 € | stávame sa najlacnejší |
| AB CryptoBox 742 HD Combo | 104.90 € | **95.90 €** | 15.0 % | **5.1 %** | 84.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3409 500W 12V nástěnný | 108.50 € | **99.50 €** | 15.0 % | **5.4 %** | 90.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 Lite | 218.90 € | **209.90 €** | 9.5 % | **5.0 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AB CryptoBox 740 HD | 96.90 € | **88.50 €** | 15.2 % | **5.2 %** | 77.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 9.7 4/64GB Silver (76954) | 174.50 € | **166.50 €** | 10.3 % | **5.2 %** | 153.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 9.7 4/64GB Gray (76950) | 174.50 € | **166.50 €** | 10.3 % | **5.2 %** | 153.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GEC5C41SG | 309.50 € | **301.50 €** | 8.0 % | **5.2 %** | 295.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 865 | 167.90 € | **159.90 €** | 17.2 % | **11.6 %** | 159.99 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 39.90 € | **32.00 €** | 35.4 % | **8.6 %** | 32.32 € | stávame sa najlacnejší |
| Superior RC UNI TV Panasonic | 13.99 € | **6.10 €** | 169.5 % | **17.5 %** | 6.20 € | stávame sa najlacnejší |
| Shark RV2820VEEU PowerDetect Auto-Empty | 459.50 € | **451.90 €** | 6.8 % | **5.0 %** | 346.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 6, bílý | 166.50 € | **158.90 €** | 10.1 % | **5.0 %** | 128.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 6, růžový | 166.50 € | **158.90 €** | 10.1 % | **5.0 %** | 128.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny notebook Huion Note X10 | 88.50 € | **80.90 €** | 15.2 % | **5.3 %** | 53.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 145.50 € | **138.00 €** | 14.9 % | **9.0 %** | 138.06 € | stávame sa najlacnejší |
| HP OfficeJet Pro 8132e AiO HP+ (40Q45B) | 150.90 € | **143.90 €** | 10.2 % | **5.1 %** | 93.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 5 white | 146.50 € | **139.50 €** | 10.3 % | **5.0 %** | 116.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kuchyňský robot TEESA TSA3545-W EASY COOK SINGLE WHI... | 84.50 € | **77.50 €** | 14.8 % | **5.3 %** | 58.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1588/04 | 147.50 € | **140.50 €** | 10.2 % | **5.0 %** | 128.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED smart stojaca lampa Rainbow, wifi, RGB, ... | 37.50 € | **30.50 €** | 29.2 % | **5.1 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Edifier QS30 Computer soundbar (black) | 81.50 € | **74.50 €** | 15.2 % | **5.3 %** | 65.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Edifier QS30 Computer soundbar (white) | 81.50 € | **74.50 €** | 15.2 % | **5.3 %** | 65.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sony SRS-LS1 LinkBuds speaker, černý | 152.50 € | **145.50 €** | 10.2 % | **5.2 %** | 137.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TD-W9960 VDSL Router | 42.90 € | **35.90 €** | 25.9 % | **5.3 %** | 32.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 133.90 € | **127.00 €** | 19.3 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Concept LK3354wh | 376.50 € | **369.90 €** | 6.9 % | **5.1 %** | 347.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO 9265+ DVB-S2/T2/C kombo přijímač 4K | 76.50 € | **69.90 €** | 15.3 % | **5.4 %** | 67.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický běžecký pás HMS BE8501I | 529.00 € | **522.50 €** | 6.4 % | **5.1 %** | 496.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-1510E | 141.50 € | **135.00 €** | 10.1 % | **5.0 %** | 125.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON SELPHY CP-1500 Black | 149.00 € | **142.50 €** | 10.0 % | **5.2 %** | 136.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 373.00 € | **366.50 €** | 7.0 % | **5.1 %** | 363.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 45.50 € | **39.00 €** | 30.4 % | **11.8 %** | 39.16 € | stávame sa najlacnejší |
| Samsung Galaxy Buds3 Silver | 139.90 € | **133.50 €** | 10.2 % | **5.1 %** | 75.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Buds3 White | 139.90 € | **133.50 €** | 10.2 % | **5.1 %** | 75.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Venkovní sušák Linomatic 500 Pl | 140.90 € | **134.50 €** | 10.0 % | **5.0 %** | 114.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla AeroStar T700 | 84.90 € | **78.50 €** | 13.8 % | **5.3 %** | 74.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Cooler Master CMP 520 (čierna) | 51.90 € | **45.50 €** | 19.8 % | **5.0 %** | 40.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (black) | 71.90 € | **65.90 €** | 15.0 % | **5.4 %** | 45.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS7750i White | 138.90 € | **132.90 €** | 10.0 % | **5.3 %** | 118.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy FIDC N100 | 139.50 € | **133.50 €** | 10.1 % | **5.4 %** | 126.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-52 - DOTOVANÝ PŘIJÍMAČ | 72.90 € | **66.90 €** | 15.0 % | **5.5 %** | 62.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier CX7 2.1 (čierne) | 198.90 € | **192.90 €** | 8.4 % | **5.1 %** | 193.00 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 72.50 € | **66.50 €** | 15.3 % | **5.8 %** | 66.89 € | stávame sa najlacnejší |
| Tesla EliteCook K70 WiFi tlakový hrnec | 127.90 € | **122.00 €** | 10.1 % | **5.0 %** | 98.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herná súprava PXN VD4 EU | 278.50 € | **272.90 €** | 7.3 % | **5.1 %** | 253.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OfficeJet Pro 8122e AiO HP+ (405U3B) | 130.50 € | **124.90 €** | 10.0 % | **5.3 %** | 64.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4696 Kuchyňský robot | 124.50 € | **118.90 €** | 10.0 % | **5.1 %** | 89.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hliníkový statív Neewer SAB264 s monopodom a panoram... | 61.50 € | **56.00 €** | 15.4 % | **5.1 %** | 41.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá Oneodio Pro50 (čierne) | 44.50 € | **39.00 €** | 34.4 % | **17.8 %** | 39.02 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 118.50 € | **113.00 €** | 13.9 % | **8.7 %** | 113.49 € | stávame sa najlacnejší |
| FoodSaver VS2190X | 112.90 € | **107.50 €** | 10.3 % | **5.0 %** | 106.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.00 € | **59.90 €** | 14.6 % | **5.6 %** | 55.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 859990040 | 31.99 € | **26.90 €** | 26.6 % | **6.4 %** | 26.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 780NC Blue | 105.90 € | **100.90 €** | 10.3 % | **5.1 %** | 73.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 780NC White | 105.90 € | **100.90 €** | 10.3 % | **5.1 %** | 73.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Flip 7, černý | 114.90 € | **109.90 €** | 10.1 % | **5.4 %** | 95.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RY6555WH | 105.90 € | **100.90 €** | 10.3 % | **5.1 %** | 94.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vakuová svářečka folií Ruhhy 22533 | 59.50 € | **54.50 €** | 14.8 % | **5.2 %** | 50.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla LifeStar UV550 | 85.50 € | **80.50 €** | 11.6 % | **5.1 %** | 77.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 62.00 € | **57.00 €** | 20.1 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 124.50 € | **119.50 €** | 14.9 % | **10.2 %** | 119.90 € | stávame sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DMS-108/E) | 105.90 € | **101.00 €** | 10.1 % | **5.0 %** | 92.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 209.90 € | **205.00 €** | 15.0 % | **12.4 %** | 205.40 € | stávame sa najlacnejší |
| Nutribullet Turbo NBT1006MB | 103.50 € | **98.90 €** | 10.1 % | **5.2 %** | 94.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica OTP6641BG | 119.50 € | **114.90 €** | 9.5 % | **5.3 %** | 114.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 96.50 € | **91.90 €** | 15.2 % | **9.7 %** | 91.96 € | stávame sa najlacnejší |
| Rojeco 2L WiFi automatický dávkovač krmiva (biely) | 57.00 € | **52.50 €** | 14.6 % | **5.6 %** | 38.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Linomatic 400 Easy 85285 | 98.50 € | **94.00 €** | 10.1 % | **5.1 %** | 88.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 124.00 € | **119.50 €** | 15.0 % | **10.9 %** | 119.90 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 124.00 € | **119.50 €** | 15.0 % | **10.9 %** | 119.90 € | stávame sa najlacnejší |
| ETA 051790000 | 79.99 € | **75.50 €** | 11.7 % | **5.5 %** | 67.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remoska R301002 6,3l VentoSteamChef | 95.90 € | **91.50 €** | 10.2 % | **5.2 %** | 88.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (white) | 53.90 € | **49.50 €** | 15.2 % | **5.8 %** | 45.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO DBD-B-3 10 oz | 48.00 € | **43.90 €** | 14.9 % | **5.1 %** | 36.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 22000-56/RH | 113.00 € | **108.90 €** | 9.2 % | **5.2 %** | 100.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet® CrispLite 6L NBA0611DG | 90.00 € | **85.90 €** | 10.1 % | **5.1 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS6550i White | 92.50 € | **88.50 €** | 10.0 % | **5.3 %** | 57.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG S30GD (LS27D300GAUXEN) | 97.50 € | **93.50 €** | 10.1 % | **5.5 %** | 69.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI Pods Transl.TWS+překladač ATR10BK | 91.50 € | **87.50 €** | 10.2 % | **5.4 %** | 75.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky C50 (sivé) | 48.90 € | **44.90 €** | 15.0 % | **5.6 %** | 36.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER HL-1110E | 92.50 € | **88.50 €** | 10.1 % | **5.4 %** | 82.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4262 | 104.00 € | **100.00 €** | 9.3 % | **5.1 %** | 94.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak na bicykel Baseus PrimeTrip 2 v 1, držiak na ... | 47.00 € | **43.00 €** | 14.9 % | **5.1 %** | 38.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Automatický dávkovač krmiva Rojeco 2 l | 46.00 € | **42.00 €** | 15.1 % | **5.1 %** | 38.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Colmi i28 Ultra smartwatch (black) | 46.00 € | **42.00 €** | 15.1 % | **5.1 %** | 39.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KÁVOVAR 4 v 1 HiBREW H1A-biely (biely) | 95.50 € | **91.50 €** | 10.2 % | **5.5 %** | 88.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Positano stolní mixér 583/PO | 80.50 € | **76.50 €** | 10.5 % | **5.0 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 460 s FM radiopřijímačem | 49.50 € | **45.50 €** | 14.7 % | **5.4 %** | 44.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung WMN-B50EB/XC | 82.50 € | **78.50 €** | 10.6 % | **5.3 %** | 78.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Pro10 (ružovo-zlaté) | 29.50 € | **25.50 €** | 30.2 % | **12.5 %** | 25.58 € | stávame sa najlacnejší |
| Slúchadlá Oneodio Pro10 (červené) | 29.50 € | **25.50 €** | 43.4 % | **24.0 %** | 25.58 € | stávame sa najlacnejší |
| Slúchadlá Oneodio Pro10 (čierne) | 29.50 € | **25.50 €** | 35.5 % | **17.1 %** | 25.58 € | stávame sa najlacnejší |
| Slúchadlá Oneodio Pro10 (modré) | 29.50 € | **25.50 €** | 39.8 % | **20.9 %** | 25.58 € | stávame sa najlacnejší |
| Slúchadlá Oneodio Pro10 (sivé) | 29.50 € | **25.50 €** | 37.0 % | **18.5 %** | 25.58 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8079 DIGITAL AIR FRYER... | 57.90 € | **53.90 €** | 15.3 % | **7.3 %** | 53.99 € | stávame sa najlacnejší |
| Apple MacBook Neo 8/256GB indigo MHFF4CZ | 814.90 € | **810.90 €** | 6.6 % | **6.1 %** | 811.00 € | stávame sa najlacnejší |
| TP-LINK Tapo P100 (1-pack) WiFi zásuvka | 15.99 € | **12.00 €** | 40.5 % | **5.5 %** | 6.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW6SM226CC | 550.50 € | **546.90 €** | 5.8 % | **5.1 %** | 541.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP ENVY 6120e AiO (714L8B) | 82.50 € | **78.90 €** | 10.3 % | **5.5 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 128 | 128.50 € | **124.90 €** | 8.1 % | **5.1 %** | 111.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black+Decker BXSM1000E | 78.50 € | **74.90 €** | 10.1 % | **5.1 %** | 74.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (DMS-105/E) | 70.50 € | **66.90 €** | 10.8 % | **5.1 %** | 66.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett Atom Black Steel | 75.50 € | **71.90 €** | 10.5 % | **5.2 %** | 72.00 € | stávame sa najlacnejší |
| Počítačová skriňa Cooler Master CMP 520L (čierna) | 39.50 € | **36.00 €** | 15.4 % | **5.1 %** | 30.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica OTP6641WG | 99.00 € | **95.50 €** | 9.0 % | **5.2 %** | 91.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **43.50 €** | 14.6 % | **6.1 %** | 42.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínač garážových brán Meross MSG100HK ... | 44.00 € | **40.50 €** | 14.5 % | **5.4 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV9201E0 | 194.50 € | **191.00 €** | 8.7 % | **6.7 %** | 191.15 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **52.00 €** | 15.2 % | **7.9 %** | 52.17 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 128.00 € | **124.50 €** | 13.0 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| CANON PIXMA G3430 Black | 149.50 € | **146.00 €** | 10.3 % | **7.8 %** | 146.37 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 137.00 € | **133.50 €** | 9.3 % | **6.5 %** | 133.90 € | stávame sa najlacnejší |
| CANON PIXMA TR4756i White | 79.90 € | **76.50 €** | 10.3 % | **5.6 %** | 67.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remoska R301001 5,5l Vento | 73.90 € | **70.50 €** | 10.4 % | **5.3 %** | 68.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 69.90 € | **66.50 €** | 12.1 % | **6.6 %** | 66.79 € | stávame sa najlacnejší |
| Stropné svietidlo Yeelight C2201C235 | 40.90 € | **37.50 €** | 15.4 % | **5.8 %** | 37.80 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Melobuds N65 (biele) | 39.00 € | **35.90 €** | 14.9 % | **5.7 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá QCY Melobuds N65 (čierne) | 39.00 € | **35.90 €** | 14.9 % | **5.7 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla GSM-01 zesilovač/opakovač 900 MHz - kompletní ... | 113.00 € | **109.90 €** | 8.0 % | **5.0 %** | 109.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 černá | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 45.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 modrá | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 45.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo C225 | 71.50 € | **68.50 €** | 10.3 % | **5.7 %** | 51.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 117A Cyan Laser Toner, W2071A | 64.50 € | **61.50 €** | 10.6 % | **5.4 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit SET Vysavač na okna a koupelny | 64.50 € | **61.50 €** | 10.6 % | **5.4 %** | 50.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Steam Mop Foldable 10in1 4175 | 66.50 € | **63.50 €** | 10.8 % | **5.8 %** | 57.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXVMS602E Tyčový vysavač | 60.90 € | **57.90 €** | 10.6 % | **5.1 %** | 53.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Profi XL + náhrada Static Plus | 62.50 € | **59.50 €** | 10.3 % | **5.0 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AKAI ABTS-45 Přenosný BT reproduktor | 66.50 € | **63.50 €** | 10.1 % | **5.1 %** | 61.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gramofon KRUGER & MATZ TT-501 | 102.90 € | **99.90 €** | 8.5 % | **5.3 %** | 99.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8053  DIGITAL AIR FRYE... | 34.50 € | **31.50 €** | 15.2 % | **5.2 %** | 31.55 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ JOY 2 KM0561 | 43.90 € | **40.90 €** | 15.1 % | **7.2 %** | 40.99 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 151.00 € | **148.00 €** | 14.9 % | **12.6 %** | 148.15 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 14.00 € | **11.00 €** | 37.5 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| Selfie tyč / statív 3 m Carbon Fiber Telesin for cam... | 40.50 € | **37.50 €** | 14.5 % | **6.0 %** | 37.80 € | stávame sa najlacnejší |
| Ariete ART 1342/04 | 72.50 € | **69.50 €** | 10.1 % | **5.5 %** | 69.90 € | stávame sa najlacnejší |
| Káblové slúchadlá Oneodio A71 (čierno-červené) | 27.00 € | **24.00 €** | 30.7 % | **16.2 %** | 24.46 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 127.90 € | **125.00 €** | 10.2 % | **7.7 %** | 125.39 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **36.00 €** | 14.9 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 32.90 € | **30.00 €** | 23.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 32.90 € | **30.00 €** | 23.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 40.90 € | **38.00 €** | 15.2 % | **7.0 %** | 38.36 € | stávame sa najlacnejší |
| Carrera autodráha GO Škoda Rally | 59.50 € | **56.90 €** | 10.5 % | **5.7 %** | 53.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja BC151EUNV Blast Přenosný mixér | 53.50 € | **50.90 €** | 10.5 % | **5.1 %** | 49.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný termostat na ohrev vody Avatto WT100 3A... | 32.50 € | **29.90 €** | 15.3 % | **6.1 %** | 29.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor černý | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 49.00 € | stávame sa najlacnejší |
| Kruger&Matz KM0816.1 | 93.50 € | **90.90 €** | 8.1 % | **5.1 %** | 88.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 3 GPS (sivé) | 34.00 € | **31.50 €** | 14.4 % | **6.0 %** | 21.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 10.00 € | **7.50 €** | 40.4 % | **5.3 %** | 3.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Air Board M Compact | 55.50 € | **53.00 €** | 10.1 % | **5.2 %** | 50.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný termostat Avatto ZWT100 3A Zigbee Tuya | 33.00 € | **30.50 €** | 14.3 % | **5.7 %** | 27.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný termostat Avatto ZWT100 3A Zigbee Tuya | 33.00 € | **30.50 €** | 14.3 % | **5.7 %** | 27.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI L28 (čierne + čierny oceľ... | 39.00 € | **36.50 €** | 13.1 % | **5.8 %** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 465W s radiopřijímačem | 34.00 € | **31.50 €** | 14.4 % | **6.0 %** | 31.69 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 41.0 % | **26.6 %** | 22.20 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **71.00 €** | 10.6 % | **6.9 %** | 71.20 € | stávame sa najlacnejší |
| Kaon MZ-104, 4K satelitní přijímač | 119.00 € | **116.50 €** | 9.7 % | **7.4 %** | 116.79 € | stávame sa najlacnejší |
| Impregnace na kožené oděvy INPRODUCTS WAX 400 ml | 28.50 € | **26.00 €** | 15.3 % | **5.2 %** | 26.29 € | stávame sa najlacnejší |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 32.50 € | **30.00 €** | 16.7 % | **7.7 %** | 30.34 € | stávame sa najlacnejší |
| DOMO DO737BL | 62.00 € | **59.50 €** | 9.8 % | **5.4 %** | 59.90 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **92.50 €** | 15.2 % | **12.3 %** | 92.72 € | stávame sa najlacnejší |
| Elektrický mlynček na kávu HiBREW G7 | 143.90 € | **141.50 €** | 15.1 % | **13.2 %** | 141.75 € | stávame sa najlacnejší |
| CANON PIXMA MG2556S Black | 55.90 € | **53.50 €** | 10.3 % | **5.6 %** | 39.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAT3509WT Bezdrátová sluchátka | 55.90 € | **53.50 €** | 10.1 % | **5.3 %** | 41.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK550RT bezdrátová sluchtátka | 56.90 € | **54.50 €** | 10.1 % | **5.5 %** | 43.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXVMS601E | 48.90 € | **46.50 €** | 10.8 % | **5.4 %** | 36.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4676 Pečící pánev | 48.90 € | **46.50 €** | 10.5 % | **5.1 %** | 41.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 10x25 | 44.90 € | **42.50 €** | 11.6 % | **5.7 %** | 41.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.50 €** | 10.7 % | **5.0 %** | 43.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 22.90 € | **20.50 €** | 42.8 % | **27.8 %** | 20.76 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **20.50 €** | 38.1 % | **23.6 %** | 20.90 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot C1 Pro | 419.90 € | **417.50 €** | 6.1 % | **5.5 %** | 417.89 € | stávame sa najlacnejší |
| ALI DK 100W, USB-C/USB-C, bílý DATKP47 | 10.50 € | **8.30 €** | 34.2 % | **6.1 %** | 7.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0828 analogové stolní | 30.00 € | **27.90 €** | 13.7 % | **5.7 %** | 23.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Interaktívne hračky pre mačky 2 v 1 | 27.00 € | **24.90 €** | 14.5 % | **5.6 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý kožený... | 39.00 € | **36.90 €** | 12.0 % | **5.9 %** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 39.00 € | **36.90 €** | 24.1 % | **17.5 %** | 36.95 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 39.00 € | **36.90 €** | 24.5 % | **17.8 %** | 36.95 € | stávame sa najlacnejší |
| Solight cestovný adaptér pre JAR, Afriku a Stredný v... | 6.40 € | **4.30 €** | 57.2 % | **5.6 %** | 3.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.00 € | **13.90 €** | 51.8 % | **31.9 %** | 13.96 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 5.90 € | **3.90 €** | 85.9 % | **22.9 %** | 4.00 € | stávame sa najlacnejší |
| JBL Quantum 100 černá | 47.50 € | **45.50 €** | 10.7 % | **6.1 %** | 33.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO ARB407v1 6 oz | 27.50 € | **25.50 €** | 15.2 % | **6.9 %** | 17.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO ARB407v2 6 oz | 27.50 € | **25.50 €** | 15.2 % | **6.9 %** | 17.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS KT2265 (32-90" 60kg) naklápěcí TV držák | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 16.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor dymu X-Sense XS01-WT Tuya WiFi | 25.90 € | **23.90 €** | 15.1 % | **6.2 %** | 18.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0208-1 | 28.50 € | **26.50 €** | 14.6 % | **6.6 %** | 21.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200MP bezdrátová sluchátka | 38.50 € | **36.50 €** | 10.8 % | **5.0 %** | 31.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 235BS | 25.00 € | **23.00 €** | 14.3 % | **5.2 %** | 18.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2957/01 | 41.90 € | **39.90 €** | 11.0 % | **5.7 %** | 36.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Music Box Mini K... | 26.50 € | **24.50 €** | 15.5 % | **6.8 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka herní Kruger&Matz Warrior GH-10 s mikrofonem | 22.90 € | **20.90 €** | 15.3 % | **5.2 %** | 18.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boffin II 3D | 40.90 € | **38.90 €** | 11.0 % | **5.6 %** | 36.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák prádla 81435 TOWER 190 | 43.50 € | **41.50 €** | 10.7 % | **5.6 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger&Matz Warrior GH-50 herní sluchátka s mikrofon... | 22.90 € | **20.90 €** | 15.3 % | **5.2 %** | 19.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.00 € | **30.00 €** | 14.5 % | **7.3 %** | 30.09 € | stávame sa najlacnejší |
| Ninja AF140EU Single Basket Pro 4,7l | 120.90 € | **118.90 €** | 10.1 % | **8.3 %** | 119.00 € | stávame sa najlacnejší |
| Niceboy Pins 4 PRO Pink | 36.50 € | **34.50 €** | 11.5 % | **5.4 %** | 34.60 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 33.50 € | **31.50 €** | 38.0 % | **29.7 %** | 31.62 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.50 € | **15.50 €** | 43.3 % | **26.9 %** | 15.82 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM100A | 35.50 € | **33.50 €** | 19.5 % | **12.7 %** | 33.89 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24 Ah MHPower MS24-12 | 45.50 € | **43.50 €** | 11.4 % | **6.5 %** | 43.90 € | stávame sa najlacnejší |
| TP-LINK TL-WR841N WiFi N Router | 19.99 € | **18.00 €** | 16.8 % | **5.2 %** | 15.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 013390020 | 84.90 € | **83.00 €** | 7.4 % | **5.0 %** | 80.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo pro měření 2 teplot a relativní vlh... | 41.90 € | **40.00 €** | 10.1 % | **5.1 %** | 39.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo sluchátka s mikrofon.MONKA HG9069W | 36.90 € | **35.00 €** | 10.7 % | **5.0 %** | 35.04 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **15.00 €** | 38.6 % | **23.1 %** | 15.50 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W, 150lm, z... | 6.80 € | **5.00 €** | 44.0 % | **5.9 %** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka JBL Tune 520C Purple | 34.50 € | **32.90 €** | 11.4 % | **6.2 %** | 27.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BLOW 4625 FHD H.265 V2 | 20.50 € | **18.90 €** | 16.1 % | **7.0 %** | 15.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower DL181-9 Mini UPS 9V 1,2A | 20.50 € | **18.90 €** | 14.9 % | **6.0 %** | 15.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE315 AC1200 WiFi Range Extender | 36.50 € | **34.90 €** | 10.7 % | **5.9 %** | 31.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rozbočovač hdmi/hdmi 1->2 - NEDIS, černý, Ultra HD V... | 19.50 € | **17.90 €** | 16.4 % | **6.8 %** | 14.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE305 AC1200 WiFi Range Extender | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 32.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black+Decker BXJB500E | 31.50 € | **29.90 €** | 11.1 % | **5.4 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal MQ723138 | 47.50 € | **45.90 €** | 10.4 % | **6.7 %** | 46.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0832 analogové přenosné solární | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **11.90 €** | 55.2 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| Breville VST070X | 69.50 € | **67.90 €** | 7.8 % | **5.3 %** | 67.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX310,bílá | 18.50 € | **17.00 €** | 14.6 % | **5.3 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX310,černá | 18.50 € | **17.00 €** | 14.6 % | **5.3 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX310,červ. | 18.50 € | **17.00 €** | 14.6 % | **5.3 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Telefon GSM Kruger&Matz IRON 4 4G odolný | 49.00 € | **47.50 €** | 8.4 % | **5.1 %** | 43.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 (čierne) | 69.00 € | **67.50 €** | 7.6 % | **5.3 %** | 65.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT113C | 19.50 € | **18.00 €** | 14.1 % | **5.4 %** | 16.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální projekční TechnoLine WT 519 | 33.50 € | **32.00 €** | 10.0 % | **5.1 %** | 30.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EJEAS Q7 motorcycle intercom | 44.00 € | **42.50 €** | 14.4 % | **10.5 %** | 42.60 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (modré) | 45.50 € | **44.00 €** | 15.0 % | **11.2 %** | 44.19 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.00 €** | 15.5 % | **11.7 %** | 44.19 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.00 €** | 15.5 % | **11.7 %** | 44.19 € | stávame sa najlacnejší |
| Tefal Safe'Tea KO261130 | 28.50 € | **27.00 €** | 11.1 % | **5.2 %** | 27.24 € | stávame sa najlacnejší |
| JVC Party reproduktor XS-EP514B | 209.50 € | **208.00 €** | 12.2 % | **11.4 %** | 208.25 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 59.50 € | **58.00 €** | 32.9 % | **29.5 %** | 58.27 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.00 € | **64.50 €** | 10.1 % | **7.6 %** | 64.83 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 17.00 € | **15.50 €** | 18.2 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 23.50 € | **22.00 €** | 47.1 % | **37.7 %** | 22.34 € | stávame sa najlacnejší |
| MAXXO VC 1800 | 26.00 € | **24.50 €** | 15.8 % | **9.1 %** | 24.89 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 26.50 € | **25.00 €** | 36.6 % | **28.9 %** | 25.45 € | stávame sa najlacnejší |
| Kruger & Matz KM1303 | 17.50 € | **16.00 €** | 15.4 % | **5.5 %** | 16.49 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 244.50 € | **243.00 €** | 15.1 % | **14.4 %** | 243.50 € | stávame sa najlacnejší |
| Whirlpool W55Z1 112W | 248.90 € | **247.50 €** | 5.8 % | **5.2 %** | 229.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro Everyday (... | 80.90 € | **79.50 €** | 41.0 % | **38.6 %** | 79.89 € | stávame sa najlacnejší |
| G3ferrari G1018700 Multifunkční trouba | 146.90 € | **145.50 €** | 7.2 % | **6.2 %** | 145.90 € | stávame sa najlacnejší |
| Philips TAT2000BL Bezdrátová sluchátka | 31.90 € | **30.50 €** | 10.2 % | **5.3 %** | 16.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAH3209BK Bezdrátová sluchátka | 26.90 € | **25.50 €** | 11.1 % | **5.3 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAH3209WT Bezdrátová sluchátka | 26.90 € | **25.50 €** | 11.1 % | **5.3 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Beans 4 POP White | 28.90 € | **27.50 €** | 10.4 % | **5.1 %** | 20.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Jacobs Barista Crema 1 kg zrno | 22.90 € | **21.50 €** | 11.9 % | **5.0 %** | 14.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAT2000WT Bezdrátová sluchátka | 31.90 € | **30.50 €** | 10.2 % | **5.3 %** | 26.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALMA 2930 - set-top box DVB-T2 (H.265/HEVC) | 20.90 € | **19.50 €** | 15.3 % | **7.6 %** | 16.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MR60X WiFi Dual Band Router | 32.90 € | **31.50 €** | 10.6 % | **5.9 %** | 28.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák Telegant Plus 100 bílý | 30.90 € | **29.50 €** | 10.2 % | **5.2 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16075 | 25.90 € | **24.50 €** | 11.5 % | **5.4 %** | 24.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.90 € | **15.50 €** | 15.3 % | **5.7 %** | 15.59 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **31.50 €** | 15.6 % | **10.7 %** | 31.69 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 59.90 € | **58.50 €** | 8.9 % | **6.4 %** | 58.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 5.80 € | **4.60 €** | 33.2 % | **5.6 %** | 4.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SIS 512 TCX | 505.00 € | **503.90 €** | 7.0 % | **6.7 %** | 504.00 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 356.00 € | **354.90 €** | 6.9 % | **6.6 %** | 355.00 € | stávame sa najlacnejší |
| Philips TAT2139BK Bezdrátová sluchátka | 31.00 € | **29.90 €** | 10.3 % | **6.3 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Rotation Disc Mop Ergo | 27.00 € | **25.90 €** | 10.1 % | **5.7 %** | 23.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3T1-3ST | 31.00 € | **29.90 €** | 9.3 % | **5.5 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 413/03 | 54.00 € | **52.90 €** | 7.7 % | **5.5 %** | 51.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetická mini powerbanka Baseus 5000mAh, USB-C 20W... | 18.00 € | **16.90 €** | 13.4 % | **6.5 %** | 15.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.70 € | **6.60 €** | 54.6 % | **32.5 %** | 6.69 € | stávame sa najlacnejší |
| Small Foot Plyšový králíček | 17.00 € | **15.90 €** | 15.0 % | **7.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q10 PF čistiaci robot (čierny) | 219.00 € | **217.90 €** | 15.0 % | **14.4 %** | 218.00 € | stávame sa najlacnejší |
| Philips TAT1209PK Bezdrátová sluchátka | 24.50 € | **23.50 €** | 10.8 % | **6.3 %** | 16.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (dvojbaleni... | 15.50 € | **14.50 €** | 14.8 % | **7.4 %** | 8.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Sora White | 24.50 € | **23.50 €** | 10.8 % | **6.3 %** | 17.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Houpací síť Gardlov 21078 pro dvě osoby 260x160cm | 14.50 € | **13.50 €** | 14.8 % | **6.9 %** | 9.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Simax Konvice skl. SVATAVA 1,7 l mix | 13.50 € | **12.50 €** | 13.7 % | **5.3 %** | 8.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C24 AC750 Router | 23.90 € | **22.90 €** | 11.3 % | **6.6 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK2000MP drátová sluchátka | 18.50 € | **17.50 €** | 12.1 % | **6.0 %** | 15.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  4,5Ah  EMOS bezúdržbový akum... | 15.50 € | **14.50 €** | 13.5 % | **6.2 %** | 12.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 612 Precise | 59.50 € | **58.50 €** | 7.6 % | **5.8 %** | 57.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sound Cube MIIIW Wireless Headphones (White) | 15.90 € | **14.90 €** | 14.9 % | **7.7 %** | 13.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální kuchyňská váha EMOS EV014 TY3101 bílá | 11.90 € | **10.90 €** | 16.1 % | **6.4 %** | 9.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Převodník NEDIS BTTR050BK audio Bluetooth + AUX IN 3... | 17.50 € | **16.50 €** | 14.7 % | **8.2 %** | 15.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WA854RE Wireless N Extender | 15.50 € | **14.50 €** | 13.2 % | **5.9 %** | 13.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal KO2G08E0 | 34.90 € | **33.90 €** | 8.4 % | **5.3 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Powerbanka 10 000 FIXZEN2-10-BK | 15.90 € | **14.90 €** | 12.3 % | **5.2 %** | 14.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Tyč teleskopická 145 -400cm CS | 21.50 € | **20.50 €** | 10.4 % | **5.3 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Partybox Wireless Mic | 106.00 € | **105.00 €** | 6.1 % | **5.1 %** | 105.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC510L modrá | 39.90 € | **38.90 €** | 18.1 % | **15.1 %** | 38.93 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 59.00 € | **58.00 €** | 13.0 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.00 € | **41.00 €** | 13.4 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 16.00 € | **15.00 €** | 31.9 % | **23.7 %** | 15.07 € | stávame sa najlacnejší |
| FoodSaver FFC023X | 20.90 € | **19.90 €** | 11.0 % | **5.7 %** | 19.99 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 25.00 € | **24.00 €** | 14.3 % | **9.7 %** | 24.09 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 25.00 € | **24.00 €** | 14.3 % | **9.7 %** | 24.09 € | stávame sa najlacnejší |
| G3Ferrari G2011300 | 204.90 € | **203.90 €** | 10.1 % | **9.6 %** | 204.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E3S (čierny) | 198.90 € | **197.90 €** | 15.1 % | **14.5 %** | 198.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 259.90 € | **258.90 €** | 13.7 % | **13.2 %** | 259.00 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 424.90 € | **423.90 €** | 13.4 % | **13.2 %** | 424.00 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 429.90 € | **428.90 €** | 13.7 % | **13.5 %** | 429.00 € | stávame sa najlacnejší |
| UREVO FoldiMix 5L Pro elektrický bežecký pás (strieb... | 498.90 € | **497.90 €** | 10.7 % | **10.4 %** | 498.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.00 € | **21.00 €** | 28.5 % | **22.7 %** | 21.16 € | stávame sa najlacnejší |
| Maono G1 Neo Sound Card Black | 45.50 € | **44.50 €** | 14.8 % | **12.3 %** | 44.70 € | stávame sa najlacnejší |
| Nutribullet NB907MAW | 73.50 € | **72.50 €** | 6.5 % | **5.1 %** | 72.71 € | stávame sa najlacnejší |
| Dynamický mikrofon Maono PD200x (černý) | 49.00 € | **48.00 €** | 14.7 % | **12.4 %** | 48.23 € | stávame sa najlacnejší |
| FIXED Bikee Anti-Shock FIXBIAS-BK | 22.50 € | **21.50 €** | 11.1 % | **6.2 %** | 21.75 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.00 € | **31.00 €** | 57.5 % | **52.6 %** | 31.29 € | stávame sa najlacnejší |
| Filters ND/PL 8/16/32 Freewell for DJI Neo | 17.50 € | **16.50 €** | 13.0 % | **6.5 %** | 16.83 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **34.00 €** | 15.0 % | **11.7 %** | 34.36 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 13.00 € | **12.00 €** | 41.9 % | **31.0 %** | 12.37 € | stávame sa najlacnejší |
| Tefal BC50D6V0 | 16.50 € | **15.50 €** | 13.1 % | **6.3 %** | 15.88 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161D | 70.00 € | **69.00 €** | 13.8 % | **12.2 %** | 69.39 € | stávame sa najlacnejší |
| Úhloměr digitální UNI-T LM320D | 29.00 € | **28.00 €** | 9.9 % | **6.1 %** | 28.39 € | stávame sa najlacnejší |
| SONY WFC510Y žlutá | 37.50 € | **36.50 €** | 11.0 % | **8.0 %** | 36.90 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 17.00 € | **16.00 €** | 13.4 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **17.00 €** | 15.0 % | **8.6 %** | 17.43 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.00 € | **23.00 €** | 33.3 % | **27.7 %** | 23.48 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **77.00 €** | 15.0 % | **13.7 %** | 77.29 € | stávame sa najlacnejší |
| Evolveo Xany 4, aktivní pokojová anténa | 19.90 € | **19.00 €** | 10.1 % | **5.2 %** | 15.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WA855RE Wireless N Extender | 18.90 € | **18.00 €** | 10.5 % | **5.2 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo T310 | 17.90 € | **17.00 €** | 11.1 % | **5.5 %** | 15.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze Btalk Plus Smartwatch (Black). | 16.90 € | **16.00 €** | 11.1 % | **5.2 %** | 15.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 462 | 38.90 € | **38.00 €** | 7.7 % | **5.2 %** | 38.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.70 € | **8.80 €** | 32.5 % | **20.2 %** | 8.90 € | stávame sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.90 € | **18.00 €** | 11.3 % | **6.0 %** | 18.19 € | stávame sa najlacnejší |
| Leifheit Mop na podlahu Easy Spray XL | 32.90 € | **32.00 €** | 10.6 % | **7.5 %** | 32.32 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.90 € | **23.00 €** | 39.2 % | **33.9 %** | 23.44 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 16.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-546 Color | 20.50 € | **19.90 €** | 10.2 % | **6.9 %** | 17.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16090 | 17.50 € | **16.90 €** | 11.2 % | **7.3 %** | 14.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Palačinkovač Teesa TSA3235 | 17.50 € | **16.90 €** | 10.9 % | **7.1 %** | 15.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **31.90 €** | 14.7 % | **12.6 %** | 31.92 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.50 € | **19.90 €** | 37.1 % | **33.0 %** | 19.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.50 € | **29.90 €** | 37.5 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Laserový diaľkomer UNI-T LM50A | 21.50 € | **20.90 €** | 14.1 % | **10.9 %** | 20.99 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Maxxo VM Compact | 40.50 € | **39.90 €** | 7.8 % | **6.2 %** | 40.00 € | stávame sa najlacnejší |
| Samsung EO-IC100BW os.stereo HF USB-C,WT | 14.50 € | **13.90 €** | 12.4 % | **7.7 %** | 9.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WR820N WiFi N Router | 14.50 € | **13.90 €** | 12.6 % | **7.9 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16330 | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 10.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.70 €** | 42.7 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 67.50 € | **66.90 €** | 14.9 % | **13.9 %** | 66.91 € | stávame sa najlacnejší |
| ARB-407-BLUE 10 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 33.50 € | **33.00 €** | 6.6 % | **5.0 %** | 17.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARB-407-BLUE 12 OZ BOXERSKÉ RUKAVICE DBX BUSHIDO | 33.50 € | **33.00 €** | 6.6 % | **5.0 %** | 17.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací hruška DBX BUSHIDO ARS-1152 | 33.50 € | **33.00 €** | 6.6 % | **5.0 %** | 25.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK SG2 | 63.50 € | **63.00 €** | 5.8 % | **5.0 %** | 58.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy MW200 | 20.00 € | **19.50 €** | 8.3 % | **5.6 %** | 16.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosná pumpa Flextail Tiny Pump 2X (oranžová) | 25.00 € | **24.50 €** | 7.4 % | **5.3 %** | 22.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Baseus Bowie WM02 TWS, Bluetoot... | 21.50 € | **21.00 €** | 7.6 % | **5.1 %** | 19.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kempingová lampa Superfire T25 – 400 lm, USB, 3 režimy | 11.00 € | **10.50 €** | 12.9 % | **7.8 %** | 8.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Stanice PS5 FIXPS5-MCS-BW | 26.50 € | **26.00 €** | 7.1 % | **5.1 %** | 25.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální projekční GARNI 140 čas a vnitřní te... | 24.00 € | **23.50 €** | 7.3 % | **5.0 %** | 23.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Obal na venkovní sušáky (EVO) | 15.50 € | **15.00 €** | 8.5 % | **5.0 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 12.00 € | **11.50 €** | 41.0 % | **35.1 %** | 11.56 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.00 € | **16.50 €** | 12.5 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 16.00 € | **15.50 €** | 13.8 % | **10.3 %** | 15.59 € | stávame sa najlacnejší |
| Tester SMD UNI-T UT116C | 18.50 € | **18.00 €** | 11.4 % | **8.4 %** | 18.09 € | stávame sa najlacnejší |
| Odvlhčovač vzduchu Geti GMD821 | 62.00 € | **61.50 €** | 9.3 % | **8.4 %** | 61.59 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 14.50 € | **14.00 €** | 57.8 % | **52.4 %** | 14.09 € | stávame sa najlacnejší |
| Automatické vodítko 3 m Rojeco (zelené) | 10.50 € | **10.00 €** | 12.9 % | **7.5 %** | 10.12 € | stávame sa najlacnejší |
| OTTOCAST OTTOAIBOX N95 Monitor do auta | 154.00 € | **153.50 €** | 10.9 % | **10.5 %** | 153.63 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| AnyCubic Kobra 2 Pro 3D Printer | 207.00 € | **206.50 €** | 9.6 % | **9.3 %** | 206.68 € | stávame sa najlacnejší |
| Tester sieťových káblov UNI-T UT681C | 13.00 € | **12.50 €** | 12.9 % | **8.6 %** | 12.69 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 59.50 € | **59.00 €** | 14.1 % | **13.2 %** | 59.19 € | stávame sa najlacnejší |
| Girmi PE3600 | 39.50 € | **39.00 €** | 10.9 % | **9.5 %** | 39.19 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 38.00 € | **37.50 €** | 11.9 % | **10.4 %** | 37.69 € | stávame sa najlacnejší |
| Alcad AM - 187 zesilovač / UHF-BIII-DAB-FM / LTE700 | 26.00 € | **25.50 €** | 13.9 % | **11.7 %** | 25.69 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.3 % | **9.8 %** | 22.20 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 11.00 € | **10.50 €** | 12.4 % | **7.2 %** | 10.76 € | stávame sa najlacnejší |
| Prenosná pumpa Flextail Tiny Pump 2 (oranžová) | 22.50 € | **22.00 €** | 15.0 % | **12.4 %** | 22.27 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 26.50 € | **26.00 €** | 9.7 % | **7.6 %** | 26.29 € | stávame sa najlacnejší |
| Napájecí zdroj spínaný URZ1169  12V / 5A - 2,1/5,5 | 12.50 € | **12.00 €** | 14.1 % | **9.5 %** | 12.29 € | stávame sa najlacnejší |
| Banquet Strojek na těstoviny CUL. | 20.00 € | **19.50 €** | 8.8 % | **6.1 %** | 19.79 € | stávame sa najlacnejší |
| NEDIS ZBSD10WT chytrý dveřní nebo okenní snímač ZigB... | 14.50 € | **14.00 €** | 11.8 % | **8.0 %** | 14.29 € | stávame sa najlacnejší |
| Merač vzdialenosti UNI-T LM120A | 44.50 € | **44.00 €** | 11.8 % | **10.5 %** | 44.29 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.7 % | **8.3 %** | 10.29 € | stávame sa najlacnejší |
| Victron Energy VE.Bus BMS | 141.00 € | **140.50 €** | 11.2 % | **10.8 %** | 140.79 € | stávame sa najlacnejší |
| Automat na horkou vodu NEDIS KAWD310FBK / 2.7 l / di... | 108.50 € | **108.00 €** | 6.8 % | **6.3 %** | 108.29 € | stávame sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **26.00 €** | 11.3 % | **9.2 %** | 26.29 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 48.00 € | **47.50 €** | 6.3 % | **5.2 %** | 47.79 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 59.00 € | **58.50 €** | 13.5 % | **12.5 %** | 58.79 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 76.00 € | **75.50 €** | 7.7 % | **7.0 %** | 75.79 € | stávame sa najlacnejší |
| Meteorologická stanice WS 6462 | 49.50 € | **49.00 €** | 9.5 % | **8.4 %** | 49.29 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0903 Powerbanka 10000 mAh Li-pol | 11.50 € | **11.00 €** | 13.3 % | **8.4 %** | 11.29 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.50 € | **22.00 €** | 13.3 % | **10.8 %** | 22.29 € | stávame sa najlacnejší |
| Reproduktory k PC 2.1 Rebel CS-50 | 12.50 € | **12.00 €** | 16.5 % | **11.9 %** | 12.29 € | stávame sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.50 € | **12.00 €** | 9.6 % | **5.2 %** | 12.29 € | stávame sa najlacnejší |
| Záložní zdroj MHPower DL181-24 Mini UPS 24V 0,5A | 20.50 € | **20.00 €** | 14.5 % | **11.7 %** | 20.29 € | stávame sa najlacnejší |
| Alcad CA-210 | 26.00 € | **25.50 €** | 10.9 % | **8.8 %** | 25.79 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 53.00 € | **52.50 €** | 7.8 % | **6.8 %** | 52.79 € | stávame sa najlacnejší |
| Xiaomi Buds 6 Ceramic White | 98.50 € | **98.00 €** | 5.7 % | **5.2 %** | 98.30 € | stávame sa najlacnejší |
| Xiaomi Buds 6 Graphite Black | 98.50 € | **98.00 €** | 5.7 % | **5.2 %** | 98.30 € | stávame sa najlacnejší |
| Tefal B5560553 | 14.50 € | **14.00 €** | 9.4 % | **5.6 %** | 14.38 € | stávame sa najlacnejší |
| UNI-T UT343D tester hrúbky farby | 89.00 € | **88.50 €** | 7.4 % | **6.8 %** | 88.89 € | stávame sa najlacnejší |
| Tester autobatérií UNI-T UT673A | 36.00 € | **35.50 €** | 14.4 % | **12.8 %** | 35.89 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 25.50 € | **25.00 €** | 25.3 % | **22.8 %** | 25.39 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.50 € | **12.00 €** | 42.7 % | **37.0 %** | 12.39 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.00 € | **10.50 €** | 28.5 % | **22.7 %** | 10.89 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.50 € | **15.00 €** | 14.1 % | **10.5 %** | 15.39 € | stávame sa najlacnejší |
| Solight LED vianočné záves, hviezdy, šírka 1,8m, 77L... | 12.00 € | **11.50 €** | 38.8 % | **33.0 %** | 11.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.00 € | **11.50 €** | 41.8 % | **35.9 %** | 11.89 € | stávame sa najlacnejší |
| Domo DO42323PC | 78.00 € | **77.50 €** | 6.2 % | **5.5 %** | 77.89 € | stávame sa najlacnejší |
| DOMO DO42324PC | 85.00 € | **84.50 €** | 5.8 % | **5.2 %** | 84.89 € | stávame sa najlacnejší |
| DOMO DO42325PC | 102.00 € | **101.50 €** | 9.1 % | **8.5 %** | 101.89 € | stávame sa najlacnejší |
| Anemometer UNI-T UT363 | 15.50 € | **15.00 €** | 12.6 % | **9.0 %** | 15.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 28.50 € | **28.00 €** | 15.3 % | **13.3 %** | 28.39 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 48.50 € | **48.00 €** | 15.3 % | **14.1 %** | 48.39 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **210.00 €** | 15.1 % | **14.8 %** | 210.39 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 28.00 € | **27.50 €** | 15.0 % | **12.9 %** | 27.89 € | stávame sa najlacnejší |
| Skúšačka napätia a spojitosti UNI-T UT18E | 41.50 € | **41.00 €** | 7.0 % | **5.7 %** | 41.39 € | stávame sa najlacnejší |
| Inteligentný termostatický radiátorový ventil Avatto... | 25.50 € | **25.00 €** | 15.0 % | **12.8 %** | 25.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 99.00 € | **98.50 €** | 14.7 % | **14.2 %** | 98.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **27.50 €** | 14.5 % | **12.5 %** | 27.89 € | stávame sa najlacnejší |
| Anemometer UNI-T UT363S | 30.50 € | **30.00 €** | 15.5 % | **13.6 %** | 30.39 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT320A | 16.00 € | **15.50 €** | 11.0 % | **7.5 %** | 15.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 68.50 € | **68.00 €** | 15.3 % | **14.5 %** | 68.39 € | stávame sa najlacnejší |
| Merač vlhkosti dreva UNI-T UT377A | 19.00 € | **18.50 €** | 10.9 % | **8.0 %** | 18.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI- T UT333 | 18.50 € | **18.00 €** | 15.6 % | **12.5 %** | 18.39 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) EMOS H5024 GoSmart IP20,... | 18.50 € | **18.00 €** | 8.3 % | **5.4 %** | 18.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 224.50 € | **224.00 €** | 14.9 % | **14.7 %** | 224.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT VOLT GREEN BOOST PRO 5000 SIN... | 349.50 € | **349.00 €** | 15.0 % | **14.8 %** | 349.39 € | stávame sa najlacnejší |
| Detektor drôtov FNIRSI WD-02 | 37.50 € | **37.00 €** | 6.8 % | **5.4 %** | 37.39 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 46.50 € | **46.00 €** | 13.8 % | **12.5 %** | 46.39 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 79.00 € | **78.50 €** | 13.0 % | **12.3 %** | 78.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 77.50 € | **77.00 €** | 15.4 % | **14.6 %** | 77.39 € | stávame sa najlacnejší |
| CrockPot CSC062X | 157.00 € | **156.50 €** | 6.8 % | **6.5 %** | 156.89 € | stávame sa najlacnejší |
| Salente Friteoiicz | 54.00 € | **53.50 €** | 9.0 % | **8.0 %** | 53.89 € | stávame sa najlacnejší |
| Tefal RK812110 | 108.50 € | **108.00 €** | 9.2 % | **8.7 %** | 108.39 € | stávame sa najlacnejší |
| Tefal NE553838 | 129.50 € | **129.00 €** | 6.9 % | **6.5 %** | 129.39 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 19.00 € | **18.50 €** | 13.8 % | **10.8 %** | 18.89 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 99.00 € | **98.50 €** | 7.2 % | **6.6 %** | 98.89 € | stávame sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 52.00 € | **51.50 €** | 15.0 % | **13.9 %** | 51.89 € | stávame sa najlacnejší |
| Topinkovač TEESA TSA3300 | 28.50 € | **28.00 €** | 7.8 % | **5.9 %** | 28.39 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-beige(beige) | 107.00 € | **106.50 €** | 14.8 % | **14.3 %** | 106.89 € | stávame sa najlacnejší |
| Kapsulový kávovar 5 v 1 HiBREW H2B (biely) | 115.50 € | **115.00 €** | 10.5 % | **10.0 %** | 115.39 € | stávame sa najlacnejší |
| Kávovar na kapsule 3 v 1 HiBREW H1A 1450W | 89.00 € | **88.50 €** | 15.0 % | **14.3 %** | 88.89 € | stávame sa najlacnejší |
| TEESA TSA3507 ruční mixér 1200W sada | 36.00 € | **35.50 €** | 12.6 % | **11.0 %** | 35.89 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 58.50 € | **58.00 €** | 10.3 % | **9.4 %** | 58.39 € | stávame sa najlacnejší |
| Domo DO9285PZ | 77.50 € | **77.00 €** | 5.9 % | **5.2 %** | 77.39 € | stávame sa najlacnejší |
| Roborock Qrevo C Pro Black | 610.50 € | **610.00 €** | 5.9 % | **5.9 %** | 610.39 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **25.50 €** | 14.9 % | **12.7 %** | 25.89 € | stávame sa najlacnejší |
| DOMO DO42602S | 39.50 € | **39.00 €** | 8.6 % | **7.2 %** | 39.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 26.50 € | **26.00 €** | 13.3 % | **11.1 %** | 26.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.00 € | **23.50 €** | 13.7 % | **11.3 %** | 23.89 € | stávame sa najlacnejší |
| Domo DO223S | 64.00 € | **63.50 €** | 12.6 % | **11.7 %** | 63.89 € | stávame sa najlacnejší |
| DOMO DO42102SV | 97.50 € | **97.00 €** | 7.9 % | **7.4 %** | 97.39 € | stávame sa najlacnejší |
| Rowenta RO7457EA | 191.00 € | **190.50 €** | 8.4 % | **8.1 %** | 190.89 € | stávame sa najlacnejší |
| Tepovač GETI GW07 | 83.00 € | **82.50 €** | 6.5 % | **5.8 %** | 82.89 € | stávame sa najlacnejší |
| Vysavač ruční TEESA TSA5017 | 56.00 € | **55.50 €** | 11.4 % | **10.4 %** | 55.89 € | stávame sa najlacnejší |
| PRIMO PR406IM | 128.50 € | **128.00 €** | 10.2 % | **9.8 %** | 128.39 € | stávame sa najlacnejší |
| Domo DO331L | 106.50 € | **106.00 €** | 10.0 % | **9.5 %** | 106.39 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 279.00 € | **278.50 €** | 8.9 % | **8.7 %** | 278.89 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.50 € | **23.00 €** | 12.7 % | **10.3 %** | 23.39 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 52.00 € | **51.50 €** | 7.7 % | **6.6 %** | 51.89 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 210.00 € | **209.50 €** | 13.0 % | **12.8 %** | 209.89 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.00 € | **26.50 €** | 13.5 % | **11.4 %** | 26.89 € | stávame sa najlacnejší |
| Meteostanice TESLA Device MS360se - chytrá WiFi s ex... | 61.50 € | **61.00 €** | 15.4 % | **14.5 %** | 61.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 18.00 € | **17.50 €** | 22.2 % | **18.8 %** | 17.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 19.50 € | **19.00 €** | 48.9 % | **45.0 %** | 19.39 € | stávame sa najlacnejší |
| Sonoff MINIR4M Matter smart WiFi mini switch (HomeKi... | 11.50 € | **11.00 €** | 17.2 % | **12.1 %** | 11.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 13.50 € | **13.00 €** | 29.7 % | **24.9 %** | 13.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 11.50 € | **11.00 €** | 29.3 % | **23.7 %** | 11.39 € | stávame sa najlacnejší |
| Lenovo Idea Tab Folio Case Polar Blue | 14.50 € | **14.00 €** | 10.4 % | **6.6 %** | 14.39 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 65.50 € | **65.00 €** | 8.9 % | **8.0 %** | 65.39 € | stávame sa najlacnejší |
| Rádio outdoorové NEDIS RDDB3100GN | 100.00 € | **99.50 €** | 6.3 % | **5.8 %** | 99.89 € | stávame sa najlacnejší |
| Strong SRT8208 Dvbt přijímač | 26.50 € | **26.00 €** | 11.1 % | **9.0 %** | 26.39 € | stávame sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (DGS-105) | 16.00 € | **15.50 €** | 10.6 % | **7.2 %** | 15.89 € | stávame sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.50 € | **21.00 €** | 10.0 % | **7.4 %** | 21.39 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 91.00 € | **90.50 €** | 15.0 % | **14.3 %** | 90.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1000 URZ3406-LFP4 700W 12V | 121.50 € | **121.00 €** | 10.9 % | **10.4 %** | 121.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 81.00 € | **80.50 €** | 9.7 % | **9.0 %** | 80.89 € | stávame sa najlacnejší |
| Alcad AI - 133 linkový zesilovač se 2 výstupy / G=24dB | 20.50 € | **20.00 €** | 15.4 % | **12.6 %** | 20.39 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 195.50 € | **195.00 €** | 10.3 % | **10.0 %** | 195.39 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 167.00 € | **166.50 €** | 6.8 % | **6.5 %** | 166.89 € | stávame sa najlacnejší |
| Chladící box TEESA TSA5007 25L DC12/24V AC 230V -22°C | 168.00 € | **167.50 €** | 10.1 % | **9.8 %** | 167.89 € | stávame sa najlacnejší |
| Chladící box TEESA TSA5008 13L DC12/24V AC 230V -22°C | 134.50 € | **134.00 €** | 14.9 % | **14.5 %** | 134.39 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6004 40l, 12V/24V/230V/baterie... | 258.00 € | **257.50 €** | 14.1 % | **13.9 %** | 257.89 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6005 50l, 12V/24V/230V/baterie... | 254.00 € | **253.50 €** | 14.9 % | **14.7 %** | 253.89 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **89.50 €** | 14.8 % | **14.2 %** | 89.89 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.50 € | **125.00 €** | 15.2 % | **14.7 %** | 125.39 € | stávame sa najlacnejší |
| Solight LED RGB osvetlenie Gaming, diaľkový ovládač,... | 11.50 € | **11.00 €** | 53.5 % | **46.8 %** | 11.40 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **113.00 €** | 10.4 % | **9.9 %** | 113.42 € | stávame sa najlacnejší |
| Fixed Powerbanka 30 000 FIXZEN2-30-BK | 31.50 € | **31.00 €** | 10.9 % | **9.2 %** | 31.42 € | stávame sa najlacnejší |
| Fixed MagPad, bílá FIXMPAD2-WH | 14.50 € | **14.00 €** | 25.7 % | **21.3 %** | 14.43 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 145.50 € | **145.00 €** | 43.1 % | **42.6 %** | 145.45 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 50.50 € | **50.00 €** | 10.8 % | **9.7 %** | 50.46 € | stávame sa najlacnejší |
| Skúšačka napätia AC/DC UNI-T UT22B-EU | 14.50 € | **14.00 €** | 13.8 % | **9.9 %** | 14.49 € | stávame sa najlacnejší |
| Ardes 449TI | 16.50 € | **16.00 €** | 11.0 % | **7.6 %** | 16.49 € | stávame sa najlacnejší |
| Smartphone HOTWAV A16 Pro Max (zelený) | 128.50 € | **128.00 €** | 15.0 % | **14.6 %** | 128.49 € | stávame sa najlacnejší |
| Pamäťová karta SANDISK EXTREME PRO SDXC 128 GB 200/9... | 49.50 € | **49.00 €** | 119.6 % | **117.3 %** | 49.49 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 18.50 € | **18.00 €** | 38.1 % | **34.4 %** | 18.49 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.50 € | **25.00 €** | 25.3 % | **22.9 %** | 25.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 29.50 € | **29.00 €** | 26.0 % | **23.9 %** | 29.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **44.00 €** | 12.3 % | **11.0 %** | 44.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 23.50 € | **23.00 €** | 37.6 % | **34.7 %** | 23.49 € | stávame sa najlacnejší |
| XAVAX 111310 fixační destičky pro sušičk | 10.50 € | **10.00 €** | 12.0 % | **6.7 %** | 10.49 € | stávame sa najlacnejší |
| Dalekohled monokulární se zaměřovačem LEVENHUK Camo ... | 73.90 € | **73.50 €** | 6.0 % | **5.4 %** | 73.69 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 64.90 € | **64.50 €** | 6.6 % | **6.0 %** | 64.69 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 147.90 € | **147.50 €** | 8.0 % | **7.7 %** | 147.69 € | stávame sa najlacnejší |
| Tesla AirCook Q10 | 73.90 € | **73.50 €** | 10.3 % | **9.7 %** | 73.79 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387S | 92.90 € | **92.50 €** | 15.2 % | **14.7 %** | 92.79 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 78.90 € | **78.50 €** | 15.2 % | **14.6 %** | 78.79 € | stávame sa najlacnejší |
| Ezidri Snackmaker FD500 sušička ovoce | 185.90 € | **185.50 €** | 8.7 % | **8.4 %** | 185.79 € | stávame sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 146.90 € | **146.50 €** | 5.5 % | **5.2 %** | 146.79 € | stávame sa najlacnejší |
| Autochladnička Euhomy CF003, 35 l | 226.90 € | **226.50 €** | 13.5 % | **13.3 %** | 226.79 € | stávame sa najlacnejší |
| Brita Pack 2 MAXTRApro PO 2024 | 13.90 € | **13.50 €** | 11.0 % | **7.8 %** | 10.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA V50 TSA0230 vakuová svářečka fólií, 28 cm , 90W | 15.90 € | **15.50 €** | 7.7 % | **5.0 %** | 15.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 13.90 € | **13.50 €** | 35.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Fixed pouzdro Xiaom RN 13 FIXOP3-1282-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.69 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8027 | 13.90 € | **13.50 €** | 9.6 % | **6.5 %** | 13.79 € | stávame sa najlacnejší |
| NEDIS ZBRC10WT chytré dálkové ovládání ZigBee | 15.90 € | **15.50 €** | 16.0 % | **13.1 %** | 15.79 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 4 zásuvky, vypínač, 1... | 5.80 € | **5.40 €** | 14.7 % | **6.8 %** | 4.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **27.50 €** | 11.6 % | **10.0 %** | 27.54 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 16.90 € | **16.50 €** | 11.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Laserový diaľkomer UNI-T LM70A | 26.90 € | **26.50 €** | 15.5 % | **13.8 %** | 26.59 € | stávame sa najlacnejší |
| Cycplus G1 bicycle computer | 22.90 € | **22.50 €** | 15.1 % | **13.1 %** | 22.65 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 27.90 € | **27.50 €** | 15.5 % | **13.8 %** | 27.69 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 61.90 € | **61.50 €** | 17.4 % | **16.7 %** | 61.69 € | stávame sa najlacnejší |
| Bravo Nora B-4781 bílo/červená | 19.90 € | **19.50 €** | 9.5 % | **7.3 %** | 19.69 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.90 € | **16.50 €** | 16.2 % | **13.5 %** | 16.69 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.9 % | **15.4 %** | 31.70 € | stávame sa najlacnejší |
| Sekáček potravin TEESA TSA3227 | 21.90 € | **21.50 €** | 10.4 % | **8.4 %** | 21.79 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.50 €** | 12.2 % | **9.5 %** | 16.79 € | stávame sa najlacnejší |
| Russell Hobbs 23210-70/RH Luna | 50.90 € | **50.50 €** | 10.2 % | **9.3 %** | 50.80 € | stávame sa najlacnejší |
| Xiaomi Redmi Buds 8 Active Blue | 16.90 € | **16.50 €** | 11.5 % | **8.9 %** | 16.80 € | stávame sa najlacnejší |
| Xiaomi Redmi Buds 8 Active White | 16.90 € | **16.50 €** | 11.5 % | **8.9 %** | 16.80 € | stávame sa najlacnejší |
| Casio Fx 85 Es Plus 2E | 20.90 € | **20.50 €** | 15.0 % | **12.8 %** | 20.80 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 28.90 € | **28.50 €** | 29.9 % | **28.1 %** | 28.82 € | stávame sa najlacnejší |
| Powerbank Baseus OS Free2Pull 10000mAh 30W +cable (b... | 26.90 € | **26.50 €** | 64.1 % | **61.6 %** | 26.82 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 13.2 % | **10.6 %** | 17.82 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **41.50 €** | 15.1 % | **14.0 %** | 41.87 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.90 € | **55.50 €** | 11.9 % | **11.1 %** | 55.89 € | stávame sa najlacnejší |
| Bravo B-4812 černá | 25.90 € | **25.50 €** | 7.0 % | **5.3 %** | 25.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Black | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| SONY WFC510W bílá | 38.90 € | **38.50 €** | 15.1 % | **13.9 %** | 38.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 474.90 € | **474.50 €** | 9.7 % | **9.6 %** | 474.79 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 337.90 € | **337.50 €** | 15.0 % | **14.9 %** | 337.79 € | stávame sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (bla | 455.90 € | **455.50 €** | 10.1 % | **10.0 %** | 455.79 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 610.90 € | **610.50 €** | 12.2 % | **12.1 %** | 610.83 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 2.90 € | **2.60 €** | 26.8 % | **13.6 %** | 2.70 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 9.80 € | **9.60 €** | 34.4 % | **31.6 %** | 9.69 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 8.80 € | **8.60 €** | 38.9 % | **35.8 %** | 8.69 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 8.40 € | **8.20 €** | 37.7 % | **34.4 %** | 8.29 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.10 €** | 25.6 % | **22.9 %** | 9.19 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 4 zásuvky, 1,5m, biela | 9.80 € | **9.60 €** | 55.3 % | **52.1 %** | 9.69 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 4 zásuvky, 3m, biela | 9.80 € | **9.60 €** | 20.9 % | **18.4 %** | 9.69 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 1,5m, b... | 9.80 € | **9.60 €** | 29.8 % | **27.1 %** | 9.69 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 3m, biela | 9.80 € | **9.60 €** | 18.2 % | **15.8 %** | 9.69 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 1,5m, b... | 9.80 € | **9.60 €** | 20.2 % | **17.7 %** | 9.69 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.50 € | **6.30 €** | 30.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.50 € | **6.30 €** | 30.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.70 € | **7.50 €** | 54.6 % | **50.6 %** | 7.56 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.00 € | **5.80 €** | 39.0 % | **34.3 %** | 5.89 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.80 € | **5.60 €** | 28.8 % | **24.4 %** | 5.69 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 6.70 € | **6.50 €** | 34.5 % | **30.5 %** | 6.59 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 6.70 € | **6.50 €** | 34.5 % | **30.5 %** | 6.59 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 6.70 € | **6.50 €** | 14.4 % | **11.0 %** | 6.59 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 3.70 € | **3.50 €** | 13.9 % | **7.8 %** | 3.59 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.70 € | **3.50 €** | 45.3 % | **37.5 %** | 3.59 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 7.20 € | **7.00 €** | 41.7 % | **37.8 %** | 7.09 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.80 € | **7.60 €** | 33.2 % | **29.8 %** | 7.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 2m, ... | 3.10 € | **2.90 €** | 32.6 % | **24.1 %** | 2.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 5.30 € | **5.10 €** | 22.8 % | **18.1 %** | 5.19 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.90 € | **7.70 €** | 35.8 % | **32.4 %** | 7.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 7.00 € | **6.80 €** | 33.3 % | **29.5 %** | 6.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.50 € | **4.30 €** | 24.0 % | **18.5 %** | 4.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.80 € | **4.60 €** | 21.2 % | **16.1 %** | 4.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.20 € | **5.00 €** | 33.4 % | **28.2 %** | 5.09 € | stávame sa najlacnejší |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.20 € | **2.00 €** | 35.5 % | **23.2 %** | 2.09 € | stávame sa najlacnejší |
| Solight skúšačka 201, priemer 3mm x 140mm, AC napäti... | 0.80 € | **0.60 €** | 54.9 % | **16.1 %** | 0.70 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.80 € | **1.60 €** | 39.4 % | **23.9 %** | 1.69 € | stávame sa najlacnejší |
| Solight vypínač do vlhka IP54, č. 1 jednopólový, sivý | 2.00 € | **1.80 €** | 21.3 % | **9.2 %** | 1.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.80 € | **3.60 €** | 30.4 % | **23.5 %** | 3.69 € | stávame sa najlacnejší |
| Salente Combo-Pdus5 | 10.00 € | **9.80 €** | 7.5 % | **5.4 %** | 9.89 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.60 € | **9.40 €** | 19.3 % | **16.9 %** | 9.49 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.00 € | **9.80 €** | 28.8 % | **26.3 %** | 9.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 4 zásuvky, vypínač, 1... | 7.60 € | **7.40 €** | 12.1 % | **9.2 %** | 7.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 7.60 € | **7.40 €** | 33.7 % | **30.2 %** | 7.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.60 € | **9.40 €** | 34.3 % | **31.5 %** | 9.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.10 € | **5.90 €** | 27.5 % | **23.3 %** | 5.99 € | stávame sa najlacnejší |
| Alcad MM-307 | 10.00 € | **9.80 €** | 12.6 % | **10.4 %** | 9.89 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 10.00 € | **9.80 €** | 22.8 % | **20.4 %** | 9.89 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W COB, 3x AAA | 4.60 € | **4.40 €** | 37.0 % | **31.0 %** | 4.49 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 8.70 € | **8.50 €** | 10.3 % | **7.8 %** | 8.59 € | stávame sa najlacnejší |
| ETA 110390000 | 33.00 € | **32.90 €** | 5.6 % | **5.3 %** | 30.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Palm růžový lesk 500ml SIXTOL | 22.00 € | **21.90 €** | 6.4 % | **5.9 %** | 21.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor hořlavých plynů GD-3300 | 58.00 € | **57.90 €** | 5.8 % | **5.6 %** | 57.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AM - 487 zesilovač / FM / DAB-BIII / UHF1 / UH... | 30.00 € | **29.90 €** | 6.4 % | **6.0 %** | 29.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad CA-215 | 26.00 € | **25.90 €** | 6.1 % | **5.7 %** | 25.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FSR2802 | 18.00 € | **17.90 €** | 7.1 % | **6.5 %** | 17.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.97 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 64.00 € | **63.90 €** | 24.7 % | **24.5 %** | 63.98 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 24.00 € | **23.90 €** | 14.4 % | **13.9 %** | 23.99 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 45.00 € | **44.90 €** | 24.3 % | **24.0 %** | 44.99 € | stávame sa najlacnejší |
| Sada 3 filtrov Telesin ND 8/16/32 pre GoPro GoPro He... | 21.00 € | **20.90 €** | 13.8 % | **13.3 %** | 20.99 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 53.00 € | **52.90 €** | 6.5 % | **6.3 %** | 52.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **22.90 €** | 26.3 % | **25.7 %** | 22.99 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.20 € | **5.10 €** | 18.1 % | **15.8 %** | 5.19 € | stávame sa najlacnejší |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.40 € | **4.30 €** | 55.5 % | **52.0 %** | 4.39 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.60 € | **1.50 €** | 44.5 % | **35.5 %** | 1.56 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.00 € | **0.90 €** | 23.2 % | **10.9 %** | 0.99 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 4000K, 595l... | 1.00 € | **0.90 €** | 23.2 % | **10.9 %** | 0.99 € | stávame sa najlacnejší |
| Inteligentný spínač/merača spotreby WiFi Sonoff POWR316 | 12.00 € | **11.90 €** | 8.8 % | **7.9 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AI-200 zesilovač | 16.00 € | **15.90 €** | 7.6 % | **6.9 %** | 15.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínač/merač spotreby WiFi Sonoff POWR316D | 13.00 € | **12.90 €** | 8.7 % | **7.9 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.00 € | **15.90 €** | 31.0 % | **30.2 %** | 15.93 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 18W, E27, 4000K... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.29 € | stávame sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 13.00 € | **12.90 €** | 13.2 % | **12.3 %** | 12.99 € | stávame sa najlacnejší |
| Konektor MC4 pro solární panely, rozbočení 4 panely,... | 15.00 € | **14.90 €** | 13.7 % | **12.9 %** | 14.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 10.00 € | **9.90 €** | 31.8 % | **30.5 %** | 9.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 14.00 € | **13.90 €** | 33.9 % | **33.0 %** | 13.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 9.00 € | **8.90 €** | 18.4 % | **17.1 %** | 8.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 7.30 € | **7.20 €** | 10.5 % | **9.0 %** | 7.29 € | stávame sa najlacnejší |
| Salente R2 robotický vysavač | 94.00 € | **93.90 €** | 5.3 % | **5.1 %** | 93.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-R2 | 94.00 € | **93.90 €** | 5.3 % | **5.1 %** | 93.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A6 (biele) | 69.00 € | **68.90 €** | 44.8 % | **44.6 %** | 68.95 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A6 (čierne) | 69.00 € | **68.90 €** | 26.3 % | **26.2 %** | 68.95 € | stávame sa najlacnejší |

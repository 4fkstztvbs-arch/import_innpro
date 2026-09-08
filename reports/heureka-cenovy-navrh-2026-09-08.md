# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-08

Vstup: `premiumstoresk_20260908_1647.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6079**
- Návrh **zvýšiť** cenu: **168** produktov
- Návrh **znížiť** cenu: **979** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4932** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **276**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (168)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **127.50 €** | 15.0 % | **25.4 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 33 Ah MHPower MS33-12 | 57.50 € | **65.50 €** | -7.1 % | **5.8 %** | 57.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight GSM diaľkovo ovládaná zásuvka | 55.90 € | **60.50 €** | 26.7 % | **37.2 %** | 55.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 10.90 € | **14.50 €** | 7.0 % | **42.4 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 60.50 € | **64.00 €** | 17.9 % | **24.7 %** | 60.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.50 € | **16.90 €** | 16.6 % | **46.0 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **39.90 €** | 10.7 % | **17.7 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 52127 Set Clean Twist M Ergo | 41.90 € | **43.90 €** | 10.3 % | **15.6 %** | 41.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 8.90 € | **10.90 €** | 18.8 % | **45.5 %** | 8.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 10.50 € | **12.50 €** | 5.9 % | **26.1 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 18.90 € | **20.50 €** | 32.6 % | **43.8 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 11.00 € | **12.50 €** | 7.2 % | **21.9 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.00 € | **11.50 €** | 20.3 % | **38.3 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 25.50 € | **27.00 €** | 27.8 % | **35.3 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.3 % | **16.5 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 20.90 € | **21.90 €** | 19.1 % | **24.8 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 30.50 € | **31.50 €** | 16.9 % | **20.7 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.50 € | **18.50 €** | 31.5 % | **39.0 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 5.60 € | **6.60 €** | 12.4 % | **32.5 %** | 5.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 10.50 € | **11.50 €** | 29.0 % | **41.2 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 12.50 € | **13.50 €** | 36.2 % | **47.1 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 12.90 € | **13.90 €** | 29.8 % | **39.9 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 9.90 € | **10.90 €** | 25.4 % | **38.0 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 70.00 € | **71.00 €** | 12.6 % | **14.2 %** | 70.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.50 € | **14.50 €** | 24.9 % | **34.1 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.00 € | **78.90 €** | 14.0 % | **15.3 %** | 78.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.00 € | **13.90 €** | 19.6 % | **27.8 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.00 € | **13.90 €** | 12.6 % | **20.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.00 € | **28.90 €** | 30.8 % | **35.0 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.00 € | **23.90 €** | 30.9 % | **36.1 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.00 € | **39.90 €** | 36.0 % | **39.2 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **36.90 €** | 14.6 % | **17.5 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **36.90 €** | 15.0 % | **17.8 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.10 € | **4.80 €** | 6.5 % | **24.7 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 18.90 € | **19.50 €** | 10.1 % | **13.6 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 21.90 € | **22.50 €** | 9.7 % | **12.7 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.90 € | **47.50 €** | 35.6 % | **37.3 %** | 46.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 25.90 € | **26.50 €** | 6.3 % | **8.8 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **17.50 €** | 38.6 % | **43.6 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 19.90 € | **20.50 €** | 34.7 % | **38.8 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 53.90 € | **54.50 €** | 24.1 % | **25.5 %** | 53.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 32.90 € | **33.50 €** | 16.5 % | **18.6 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 25.90 € | **26.50 €** | 39.4 % | **42.7 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.60 € | **5.20 €** | 6.5 % | **20.4 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 11.90 € | **12.50 €** | 35.9 % | **42.7 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 12.90 € | **13.50 €** | 11.7 % | **16.9 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 16.00 € | **16.50 €** | 21.3 % | **25.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.00 € | **33.50 €** | 31.5 % | **33.4 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 52.00 € | **52.50 €** | 31.9 % | **33.2 %** | 52.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.70 € | **6.20 €** | 34.3 % | **46.1 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 36.00 € | **36.50 €** | 32.8 % | **34.6 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.50 € | **13.00 €** | 33.2 % | **38.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.00 € | **12.50 €** | 18.5 % | **23.5 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.50 € | **318.00 €** | 11.9 % | **12.1 %** | 317.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 659.50 € | **660.00 €** | 10.6 % | **10.7 %** | 659.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **557.50 €** | 6.6 % | **6.7 %** | 557.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.00 € | **20.50 €** | 24.7 % | **27.8 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.50 € | **17.00 €** | 26.0 % | **29.8 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.00 € | **22.50 €** | 8.7 % | **11.2 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.00 € | **14.50 €** | 38.8 % | **43.8 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10A, biely-sivý | 2.80 € | **3.30 €** | 18.6 % | **39.7 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 28.50 € | **29.00 €** | 16.6 % | **18.7 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 57.00 € | **57.50 €** | 31.2 % | **32.4 %** | 57.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 17.50 € | **18.00 €** | 6.9 % | **9.9 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 80.50 € | **81.00 €** | 7.8 % | **8.5 %** | 80.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 22.50 € | **23.00 €** | 11.5 % | **14.0 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.00 € | **28.50 €** | 14.0 % | **16.0 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.00 € | **76.50 €** | 18.6 % | **19.4 %** | 76.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 14.50 € | **15.00 €** | 50.2 % | **55.4 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 13.50 € | **14.00 €** | 11.3 % | **15.4 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.00 € | **22.50 €** | 6.9 % | **9.3 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 105.00 € | **105.50 €** | 9.6 % | **10.1 %** | 105.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 173.00 € | **173.50 €** | 7.4 % | **7.7 %** | 173.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 113.50 € | **113.90 €** | 11.2 % | **11.6 %** | 113.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.50 € | **114.90 €** | 10.0 % | **10.4 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **64.90 €** | 5.5 % | **6.1 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.50 € | **13.90 €** | 24.4 % | **28.1 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.50 € | **14.90 €** | 30.8 % | **34.4 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.50 € | **14.90 €** | 18.4 % | **21.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.0 % | **13.8 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.50 € | **14.90 €** | 6.5 % | **9.4 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 7.20 € | **7.60 €** | 43.5 % | **51.4 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 40.50 € | **40.90 €** | 17.9 % | **19.1 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.50 € | **16.90 €** | 23.9 % | **26.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 26.50 € | **26.90 €** | 16.6 % | **18.3 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 24.50 € | **24.90 €** | 26.6 % | **28.7 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.50 € | **20.90 €** | 12.8 % | **15.0 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 27.50 € | **27.90 €** | 13.0 % | **14.7 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.50 € | **17.90 €** | 10.7 % | **13.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 334.50 € | **334.90 €** | 7.0 % | **7.1 %** | 334.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.10 € | **5.40 €** | 37.3 % | **45.4 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.10 € | **4.40 €** | 6.2 % | **13.9 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.60 € | **4.90 €** | 11.3 % | **18.6 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.60 € | **8.90 €** | 5.6 % | **9.3 %** | 8.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.60 € | **5.90 €** | 38.0 % | **45.4 %** | 5.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.70 € | **10.00 €** | 23.0 % | **26.8 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.70 € | **2.00 €** | 19.1 % | **40.2 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.70 € | **6.00 €** | 7.3 % | **12.9 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.00 € | **5.30 €** | 30.3 % | **38.1 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.30 € | **7.60 €** | 31.6 % | **37.0 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.80 € | **7.10 €** | 30.4 % | **36.1 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.80 € | **6.10 €** | 21.2 % | **27.5 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 8.90 € | **9.20 €** | 35.0 % | **39.5 %** | 8.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.70 € | **8.90 €** | 30.3 % | **33.3 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.40 € | **3.60 €** | 44.0 % | **52.4 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.40 € | **1.60 €** | 19.8 % | **36.9 %** | 1.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.00 € | **7.20 €** | 33.0 % | **36.8 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 2.50 € | **2.70 €** | 24.7 % | **34.7 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.80 € | **4.00 €** | 29.8 % | **36.6 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.50 € | **2.70 €** | 17.5 % | **26.9 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 2.90 € | **3.10 €** | 8.7 % | **16.1 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.60 € | **7.80 €** | 30.4 % | **33.8 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.80 € | **5.00 €** | 31.0 % | **36.4 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.50 € | **4.70 €** | 31.1 % | **37.0 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.10 € | **5.30 €** | 30.8 % | **35.9 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.80 € | **4.00 €** | 5.8 % | **11.4 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.30 € | **4.50 €** | 30.9 % | **37.0 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.40 € | **3.60 €** | 17.6 % | **24.5 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 2,5A, biela | 1.00 € | **1.20 €** | 12.9 % | **35.5 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.60 € | **1.80 €** | 15.1 % | **29.5 %** | 1.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.20 € | **1.40 €** | 13.4 % | **32.4 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.70 € | **1.90 €** | 30.4 % | **45.7 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.70 € | **3.90 €** | 25.9 % | **32.7 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 4.90 € | **5.10 €** | 38.3 % | **44.0 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.60 €** | 28.5 % | **32.5 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 7.90 € | **8.10 €** | 14.1 % | **17.0 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.40 € | **4.60 €** | 32.5 % | **38.5 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.40 € | **9.60 €** | 16.9 % | **19.3 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.40 € | **5.60 €** | 30.3 % | **35.1 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.30 € | **8.50 €** | 32.6 % | **35.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.50 € | **9.70 €** | 33.4 % | **36.2 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 20.90 € | **21.00 €** | 25.8 % | **26.4 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191E | 54.90 € | **55.00 €** | 6.1 % | **6.3 %** | 54.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 34.90 € | **35.00 €** | 7.6 % | **7.9 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 61.90 € | **62.00 €** | 12.9 % | **13.1 %** | 61.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 30.90 € | **31.00 €** | 11.7 % | **12.1 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný dvojramenný konzolový držiak pre plo... | 28.90 € | **29.00 €** | 27.9 % | **28.3 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 32.90 € | **33.00 €** | 11.2 % | **11.5 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 16.90 € | **17.00 €** | 7.3 % | **7.9 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.90 € | **64.00 €** | 10.5 % | **10.7 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 21.90 € | **22.00 €** | 36.5 % | **37.2 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5X/1 | 47.90 € | **48.00 €** | 6.6 % | **6.8 %** | 47.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 5.60 € | **5.70 €** | 41.8 % | **44.4 %** | 5.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 7.10 € | **7.20 €** | 13.9 % | **15.5 %** | 7.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.10 € | **4.20 €** | 32.8 % | **36.0 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 5.60 € | **5.70 €** | 33.1 % | **35.5 %** | 5.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.10 € | **2.20 €** | 37.7 % | **44.2 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.30 € | **2.40 €** | 38.5 % | **44.5 %** | 2.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.10 € | **2.20 €** | 28.4 % | **34.5 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, biely | 2.50 € | **2.60 €** | 30.3 % | **35.5 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka, 16A, biela, vypínač | 1.70 € | **1.80 €** | 26.8 % | **34.3 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.90 € | **4.00 €** | 30.5 % | **33.8 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, biela | 1.80 € | **1.90 €** | 28.4 % | **35.5 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.90 € | **15.00 €** | 25.8 % | **26.6 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **16.00 €** | 28.0 % | **28.8 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.00 € | **8.10 €** | 15.5 % | **17.0 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.00 € | **6.10 €** | 11.4 % | **13.2 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny týždenný časový spínač, 16 režimov... | 8.00 € | **8.10 €** | 34.9 % | **36.6 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 15.90 € | **16.00 €** | 15.2 % | **15.9 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight držiak DVB-T a internetové antény na stenu, ... | 7.90 € | **8.00 €** | 27.7 % | **29.3 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 13.90 € | **14.00 €** | 16.7 % | **17.6 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor Premium, Find My kompatibilný | 12.90 € | **13.00 €** | 27.4 % | **28.4 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 5.40 € | **5.50 €** | 15.5 % | **17.7 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 8.00 € | **8.10 €** | 36.4 % | **38.1 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 15.90 € | **16.00 €** | 13.1 % | **13.8 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.90 € | **177.00 €** | 7.3 % | **7.4 %** | 176.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux LIB60420CK | 203.90 € | **204.00 €** | 7.5 % | **7.5 %** | 203.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (979)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| BEKO HII64500UFT | 559.00 € | **364.50 €** | 64.1 % | **7.0 %** | 364.90 € | stávame sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 479.00 € | **344.50 €** | 48.2 % | **6.6 %** | 344.89 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **335.50 €** | 48.2 % | **6.9 %** | 335.90 € | stávame sa najlacnejší |
| ELECTROLUX 300 EFC226R | 369.00 € | **242.50 €** | 60.0 % | **5.1 %** | 236.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE75LS03HW | 2799.00 € | **2683.50 €** | 14.7 % | **10.0 %** | 2683.81 € | stávame sa najlacnejší |
| Electrolux EHF6547FXK | 329.00 € | **216.00 €** | 60.5 % | **5.4 %** | 216.23 € | stávame sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **383.90 €** | 35.3 % | **6.2 %** | 384.00 € | stávame sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 256GB Graphite | 2200.50 € | **2100.50 €** | 10.0 % | **5.0 %** | 1390.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslařský trenažér HMS Premium ZW1600 | 765.00 € | **671.90 €** | 138111.4 % | **121291.1 %** | 672.00 € | stávame sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **982.00 €** | 15.0 % | **5.9 %** | 982.04 € | stávame sa najlacnejší |
| GORENJE GS620C10S | 429.00 € | **344.50 €** | 33.3 % | **7.0 %** | 344.60 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 303.50 € | **228.90 €** | 43.2 % | **8.0 %** | 229.00 € | stávame sa najlacnejší |
| MSI Katana 17 HX (B14WGK-282CZ) | 1637.90 € | **1563.50 €** | 10.0 % | **5.0 %** | 1267.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI Katana 17 HX (B14WEK-267CZ) | 1546.50 € | **1476.50 €** | 10.0 % | **5.0 %** | 1099.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE FN617EES5 | 469.00 € | **406.00 €** | 23.6 % | **7.0 %** | 406.20 € | stávame sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.90 €** | 15.0 % | **5.4 %** | 670.00 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **222.00 €** | 37.2 % | **9.2 %** | 222.24 € | stávame sa najlacnejší |
| Saeco Aurora B2 | 1238.50 € | **1182.00 €** | 10.0 % | **5.0 %** | 999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 148.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E15 | 339.00 € | **283.90 €** | 25.5 % | **5.1 %** | 280.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 199.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 356.50 € | **303.50 €** | 72359.3 % | **61587.0 %** | 303.75 € | stávame sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 507.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 417.00 € | **369.90 €** | 75238.8 % | **66729.3 %** | 370.00 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 461.50 € | **417.50 €** | 24.3 % | **12.5 %** | 417.60 € | stávame sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 125.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max robotický s mopom, výk... | 188.50 € | **150.50 €** | 31.9 % | **5.3 %** | 142.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 478.50 € | **440.50 €** | 15.0 % | **5.9 %** | 440.75 € | stávame sa najlacnejší |
| CANDY CCGMEE9025PX/E | 817.50 € | **779.90 €** | 10.1 % | **5.0 %** | 719.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.50 €** | 27.5 % | **9.1 %** | 204.81 € | stávame sa najlacnejší |
| AMICA TR 110 TW | 379.00 € | **345.90 €** | 15.1 % | **5.1 %** | 287.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6182PW4 | 379.99 € | **347.90 €** | 16.3 % | **6.5 %** | 348.00 € | stávame sa najlacnejší |
| MKF 17DF441 Fixní držák na TV | 39.00 € | **7.30 €** | 493.8 % | **11.1 %** | 7.33 € | stávame sa najlacnejší |
| Midland BTR1 Advanced, Single | 219.00 € | **187.90 €** | 25.0 % | **7.2 %** | 188.00 € | stávame sa najlacnejší |
| kamerový set TP-Link Tapo C425 KIT 4MPx, vonkajšie, ... | 144.90 € | **113.90 €** | 33.7 % | **5.1 %** | 97.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 314.50 € | **284.90 €** | 26.2 % | **14.3 %** | 284.96 € | stávame sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **569.50 €** | 10.5 % | **5.1 %** | 526.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **309.50 €** | 15.0 % | **5.1 %** | 293.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3BCNA324HS | 631.50 € | **602.50 €** | 10.1 % | **5.0 %** | 587.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Pro 8/256GB (ZAHD0072CZ) | 603.90 € | **576.50 €** | 10.0 % | **5.0 %** | 524.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 130.00 € | **103.00 €** | 32.5 % | **5.0 %** | 102.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Ultima Nova C40 | 301.00 € | **274.90 €** | 15.0 % | **5.0 %** | 267.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje MO 20 A3B | 99.00 € | **72.90 €** | 43.1 % | **5.3 %** | 65.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Pro 8/128GB (ZAHD0017CZ) | 563.00 € | **537.50 €** | 10.0 % | **5.0 %** | 503.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight profesionálna smart WIFI meteostanica | 123.50 € | **98.00 €** | 49.9 % | **19.0 %** | 98.50 € | stávame sa najlacnejší |
| iiyama ProLite XCB4594DQSU-B1 | 538.50 € | **513.90 €** | 10.0 % | **5.0 %** | 503.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6342XOK | 279.00 € | **254.50 €** | 15.3 % | **5.2 %** | 195.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620AAXL4 | 640.50 € | **616.50 €** | 10.1 % | **5.9 %** | 616.80 € | stávame sa najlacnejší |
| Lenovo Yoga Tab 12/256GB (ZAG60160CZ) | 525.90 € | **502.00 €** | 10.0 % | **5.0 %** | 479.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **252.50 €** | 15.0 % | **5.2 %** | 228.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 328.90 € | **305.50 €** | 13.2 % | **5.1 %** | 280.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 199.00 € | **176.00 €** | 22.5 % | **8.4 %** | 176.40 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 260.50 € | **237.90 €** | 46964.1 % | **42881.0 %** | 237.97 € | stávame sa najlacnejší |
| Lenovo Tab Plus 8/256GB (ZAHT0126CZ) | 489.50 € | **467.50 €** | 10.0 % | **5.1 %** | 414.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AW | 478.50 € | **456.50 €** | 10.1 % | **5.0 %** | 436.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AURZEN Boom Mini projektor | 250.50 € | **228.90 €** | 15.0 % | **5.1 %** | 222.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max White robotický s mopo... | 145.50 € | **123.90 €** | 24.7 % | **6.2 %** | 124.00 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 474.50 € | **453.00 €** | 10.0 % | **5.0 %** | 453.36 € | stávame sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 315.50 € | **294.00 €** | 15.0 % | **7.2 %** | 294.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C610 KIT 3MPx, vonkajšia, IP PTZ... | 103.90 € | **82.50 €** | 32.6 % | **5.3 %** | 77.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 176.00 € | **154.90 €** | 19.4 % | **5.1 %** | 142.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 659.90 € | **638.90 €** | 10.0 % | **6.5 %** | 639.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 601.50 € | **580.50 €** | 10.1 % | **6.2 %** | 580.73 € | stávame sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 239.90 € | **219.00 €** | 24.6 % | **13.7 %** | 219.10 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 496.90 € | **476.00 €** | 10.1 % | **5.5 %** | 476.10 € | stávame sa najlacnejší |
| Lenovo Tab Plus 8/128GB (ZAHT0170CZ) | 448.90 € | **428.50 €** | 10.1 % | **5.1 %** | 375.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 9N2BR-S | 434.90 € | **414.90 €** | 10.1 % | **5.0 %** | 404.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 180.50 € | **160.50 €** | 27.2 % | **13.1 %** | 160.79 € | stávame sa najlacnejší |
| Candy GD 10N3B-S | 468.90 € | **449.00 €** | 10.1 % | **5.4 %** | 449.10 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 486.90 € | **467.90 €** | 9.3 % | **5.0 %** | 439.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA V10 Akumulátorový vysávač na bazény | 206.90 € | **188.90 €** | 15.1 % | **5.1 %** | 118.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 188.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A6 bílá | 483.50 € | **465.50 €** | 10.1 % | **6.0 %** | 465.82 € | stávame sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 465.50 € | **447.50 €** | 10.1 % | **5.8 %** | 447.90 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1381.50 €** | 10.6 % | **9.3 %** | 1381.89 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 638.00 € | **620.90 €** | 7.9 % | **5.0 %** | 520.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 161.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 138.00 € | **121.00 €** | 27264.7 % | **23893.7 %** | 121.03 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 598.50 € | **582.00 €** | 8.0 % | **5.0 %** | 556.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C411 KIT 3MPx, outdoor, IP, WiFi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 45.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C260 IP, 8MPx, WiFi, prísvit | 79.90 € | **63.50 €** | 32.6 % | **5.4 %** | 55.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 57.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 310.50 € | **294.50 €** | 10.9 % | **5.1 %** | 275.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70118CZ | 341.50 € | **325.90 €** | 10.0 % | **5.0 %** | 269.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70373CZ | 342.50 € | **326.90 €** | 10.0 % | **5.0 %** | 285.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **36.90 €** | 50.5 % | **5.7 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 207.00 € | **191.50 €** | 13.6 % | **5.1 %** | 188.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BR 26SSB6G-S | 347.50 € | **332.00 €** | 10.1 % | **5.2 %** | 332.10 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 413.50 € | **398.00 €** | 10.1 % | **6.0 %** | 398.49 € | stávame sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **162.90 €** | 15.0 % | **5.2 %** | 138.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 179.00 € | **163.90 €** | 14.9 % | **5.2 %** | 152.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5390 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5396 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 49B8G-S | 331.90 € | **316.90 €** | 10.0 % | **5.1 %** | 309.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool OMSR58CU1SX | 344.90 € | **329.90 €** | 10.0 % | **5.2 %** | 330.00 € | stávame sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **229.50 €** | 15.1 % | **8.0 %** | 229.69 € | stávame sa najlacnejší |
| Flytec V060 12000mah návnada loď | 172.00 € | **157.50 €** | 14.9 % | **5.2 %** | 118.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 48SB8C-S | 312.50 € | **298.50 €** | 10.1 % | **5.1 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 65.50 € | **52.00 €** | 33.5 % | **6.0 %** | 52.09 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 261.00 € | **247.50 €** | 14.9 % | **9.0 %** | 247.83 € | stávame sa najlacnejší |
| Candy GD 49B8-S | 292.90 € | **279.50 €** | 10.1 % | **5.0 %** | 260.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 262.50 € | **249.90 €** | 19.8 % | **14.1 %** | 250.00 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.50 €** | 22.2 % | **9.3 %** | 106.57 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 53.00 € | **40.50 €** | 43.2 % | **9.4 %** | 40.63 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 134.50 € | **122.00 €** | 24.9 % | **13.3 %** | 122.34 € | stávame sa najlacnejší |
| Taška DJI Power 1000 | 143.90 € | **131.50 €** | 15.1 % | **5.2 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 272.00 € | **259.90 €** | 10.0 % | **5.1 %** | 259.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 403.50 € | **391.50 €** | 8.4 % | **5.1 %** | 358.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 114.50 € | **102.50 €** | 17.4 % | **5.1 %** | 84.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 325 | 263.50 € | **251.50 €** | 10.2 % | **5.1 %** | 243.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 4/256GB zelená (79232) | 262.00 € | **250.50 €** | 10.0 % | **5.2 %** | 185.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 39.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL 430406 Partybox 710 - black | 559.00 € | **547.90 €** | 15.2 % | **12.9 %** | 548.00 € | stávame sa najlacnejší |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 73.99 € | **62.90 €** | 37.4 % | **16.8 %** | 63.00 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 126.00 € | **115.00 €** | 24.2 % | **13.4 %** | 115.05 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 230.50 € | **219.50 €** | 10.6 % | **5.3 %** | 219.60 € | stávame sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.50 € | **135.50 €** | 15.3 % | **6.7 %** | 135.90 € | stávame sa najlacnejší |
| Braun SI7160BL | 89.90 € | **79.00 €** | 26.4 % | **11.0 %** | 79.38 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 47.50 € | **37.00 €** | 38.3 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Concept IDV5160wh | 364.50 € | **354.00 €** | 10.1 % | **6.9 %** | 354.40 € | stávame sa najlacnejší |
| Projektor AURZEN Boom Mini Black | 232.90 € | **222.50 €** | 15.1 % | **9.9 %** | 222.70 € | stávame sa najlacnejší |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 272.90 € | **262.50 €** | 9.3 % | **5.2 %** | 261.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Sensazione černý | 344.90 € | **334.50 €** | 10.1 % | **6.8 %** | 334.90 € | stávame sa najlacnejší |
| Router GL.iNet Slate 7 | 208.00 € | **197.90 €** | 14.9 % | **9.3 %** | 197.93 € | stávame sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.90 €** | 25.0 % | **7.8 %** | 63.00 € | stávame sa najlacnejší |
| Lenovo Idea Tab 4/128GB (ZAFR0358CZ) | 220.00 € | **210.00 €** | 10.0 % | **5.0 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA DI 6412 CB | 280.90 € | **270.90 €** | 10.1 % | **6.2 %** | 270.93 € | stávame sa najlacnejší |
| ETA Magic X-treme 7235 90000 černý/modrý | 339.50 € | **329.50 €** | 10.1 % | **6.8 %** | 329.60 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.15 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 31.50 € | **21.50 €** | 59.3 % | **8.7 %** | 21.90 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 351.90 € | **342.00 €** | 10.1 % | **7.0 %** | 342.20 € | stávame sa najlacnejší |
| Superior RC UNI TV SAM/LG | 16.99 € | **7.20 €** | 150.2 % | **6.0 %** | 6.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C310 vonkajšia, IP, FHD, WiFi, p... | 48.50 € | **38.90 €** | 31.3 % | **5.3 %** | 37.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L3310 | 205.50 € | **196.00 €** | 10.1 % | **5.0 %** | 179.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 109.50 € | **100.00 €** | 24.1 % | **13.4 %** | 100.04 € | stávame sa najlacnejší |
| Beko VRT96425VD | 262.50 € | **253.00 €** | 10.1 % | **6.1 %** | 253.18 € | stávame sa najlacnejší |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 180.50 € | **171.00 €** | 24.7 % | **18.2 %** | 171.21 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 98.50 € | **89.00 €** | 17.8 % | **6.4 %** | 89.47 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 425.90 € | **416.50 €** | 10.0 % | **7.6 %** | 416.77 € | stávame sa najlacnejší |
| Amica KF 17191 | 39.00 € | **29.90 €** | 59.5 % | **22.3 %** | 29.98 € | stávame sa najlacnejší |
| GUZZANTI GZ 28 | 193.50 € | **184.50 €** | 10.3 % | **5.2 %** | 160.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 185.00 € | **176.00 €** | 10.4 % | **5.0 %** | 154.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 83.50 € | **74.50 €** | 18.1 % | **5.4 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 210.50 € | **201.50 €** | 24.9 % | **19.5 %** | 201.56 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 159.00 € | **150.00 €** | 14.4 % | **8.0 %** | 150.30 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 538.50 € | **529.90 €** | 8.0 % | **6.2 %** | 529.95 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 184.50 € | **175.90 €** | 10.1 % | **5.0 %** | 159.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 9.7 4/128GB Gray (76907) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 183.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HIF-8892 EBT Multimediální HI-F | 191.50 € | **182.90 €** | 10.1 % | **5.1 %** | 182.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERACH stroj na drepy MR-R07BH1 | 103.00 € | **94.50 €** | 14.8 % | **5.4 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 147.00 € | **138.50 €** | 11.6 % | **5.1 %** | 127.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 145.50 € | **137.00 €** | 24.9 % | **17.6 %** | 137.39 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **174.00 €** | 15.0 % | **9.7 %** | 174.50 € | stávame sa najlacnejší |
| Epson EcoTank L1350 | 186.90 € | **178.50 €** | 10.0 % | **5.1 %** | 162.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210A | 221.90 € | **213.50 €** | 10.1 % | **5.9 %** | 213.75 € | stávame sa najlacnejší |
| Maxxo Chamber Line 70 | 360.90 € | **352.50 €** | 10.0 % | **7.4 %** | 352.82 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT černé | 168.00 € | **159.90 €** | 15.7 % | **10.1 %** | 159.99 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 168.00 € | **159.90 €** | 15.7 % | **10.1 %** | 159.99 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 90.00 € | **81.90 €** | 17.4 % | **6.9 %** | 82.00 € | stávame sa najlacnejší |
| Victrola VTA-270B Gramofon hnědý | 177.50 € | **169.50 €** | 10.1 % | **5.2 %** | 154.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 2-pack) | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 159.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 499.50 € | **491.50 €** | 6.8 % | **5.1 %** | 485.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **87.50 €** | 14.9 % | **5.3 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 29.50 € | **21.50 €** | 46.5 % | **6.8 %** | 20.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **38.50 €** | 28.3 % | **6.2 %** | 37.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **86.90 €** | 15.2 % | **5.5 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C113 IP, 3MPx, WiFi, prísvit, vn... | 38.90 € | **30.90 €** | 32.4 % | **5.2 %** | 30.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 117.50 € | **109.50 €** | 16.0 % | **8.1 %** | 109.57 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 176.00 € | **168.00 €** | 21.5 % | **16.0 %** | 168.44 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.90 € | **165.00 €** | 10.1 % | **5.1 %** | 151.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 200.90 € | **193.00 €** | 14.2 % | **9.7 %** | 193.29 € | stávame sa najlacnejší |
| TESLA AirCook DualZone Q787 XXL Deluxe | 166.50 € | **158.90 €** | 10.2 % | **5.2 %** | 150.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 167.50 € | **159.90 €** | 11.0 % | **6.0 %** | 159.95 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 20 W | 1124.50 € | **1117.00 €** | 15.0 % | **14.3 %** | 1117.25 € | stávame sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 357.00 € | **349.50 €** | 9.3 % | **7.0 %** | 349.86 € | stávame sa najlacnejší |
| Niceboy Hurricane H7 Plus | 163.90 € | **156.50 €** | 10.1 % | **5.1 %** | 129.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44GW | 206.00 € | **198.90 €** | 10.0 % | **6.2 %** | 198.96 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **77.50 €** | 15.2 % | **5.6 %** | 70.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 119.50 € | **112.50 €** | 11.9 % | **5.4 %** | 105.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L1630W | 158.90 € | **151.90 €** | 10.0 % | **5.2 %** | 148.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 259.00 € | **252.00 €** | 7.9 % | **5.0 %** | 248.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 10002 | 148.50 € | **141.50 €** | 10.3 % | **5.1 %** | 138.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 37.50 € | **30.50 €** | 29.5 % | **5.3 %** | 28.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 11000 | 160.50 € | **153.50 €** | 10.1 % | **5.3 %** | 152.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI G32C4X | 152.90 € | **145.90 €** | 10.1 % | **5.1 %** | 145.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 119.90 € | **112.90 €** | 14.2 % | **7.5 %** | 112.99 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 295.50 € | **288.50 €** | 10.0 % | **7.4 %** | 288.63 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 27.50 € | **20.50 €** | 51.2 % | **12.7 %** | 20.79 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 33.50 € | **26.50 €** | 35.6 % | **7.2 %** | 26.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 49.00 € | **42.00 €** | 38.8 % | **19.0 %** | 42.50 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT  Regulus PowerVac 2in1 11925 | 144.50 € | **137.90 €** | 10.0 % | **5.0 %** | 124.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 75.50 € | **68.90 €** | 15.2 % | **5.2 %** | 60.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **81.90 €** | 14.9 % | **6.3 %** | 81.99 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **81.90 €** | 14.9 % | **6.3 %** | 81.99 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač DO TechniSat TechniControl | 25.00 € | **18.50 €** | 42.1 % | **5.2 %** | 13.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (biely) | 189.50 € | **183.00 €** | 15.1 % | **11.1 %** | 183.09 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 69.50 € | **63.00 €** | 25.5 % | **13.8 %** | 63.19 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 71.00 € | **64.50 €** | 16.4 % | **5.8 %** | 64.69 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.0 % | **8.8 %** | 18.67 € | stávame sa najlacnejší |
| TP-LINK WiFi AX1500 (Deco X10 3-pack) | 144.90 € | **138.50 €** | 10.1 % | **5.2 %** | 99.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná 12V / 45 Ah MHPower 6-DMF-45 GEL Tra... | 113.00 € | **106.90 €** | 11.2 % | **5.2 %** | 90.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač oxidu uhoľnatého Uni-T UT337A | 74.00 € | **67.90 €** | 14.8 % | **5.3 %** | 63.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 84.00 € | **77.90 €** | 13.6 % | **5.3 %** | 74.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 53.90 € | **47.90 €** | 19.0 % | **5.7 %** | 44.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH98A9WO | 285.50 € | **279.50 €** | 10.0 % | **7.7 %** | 279.80 € | stávame sa najlacnejší |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 99.50 € | **93.50 €** | 24.7 % | **17.2 %** | 93.80 € | stávame sa najlacnejší |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 121.00 € | **115.00 €** | 23.5 % | **17.4 %** | 115.35 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 55.50 € | **49.50 €** | 38.5 % | **23.6 %** | 49.90 € | stávame sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.90 € | stávame sa najlacnejší |
| DOMO DO9252I | 257.90 € | **251.90 €** | 10.0 % | **7.4 %** | 252.00 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.99 € | **14.00 €** | 60.1 % | **12.1 %** | 14.25 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Uperfect UGame C2 16" 2560x1600 120Hz | 169.90 € | **164.00 €** | 15.0 % | **11.0 %** | 164.31 € | stávame sa najlacnejší |
| Candy GD 17SSB7-S | 308.90 € | **303.00 €** | 10.1 % | **8.0 %** | 303.21 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 299.90 € | **294.00 €** | 10.1 % | **8.0 %** | 294.30 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 41.50 € | **35.90 €** | 32.4 % | **14.5 %** | 35.94 € | stávame sa najlacnejší |
| Guzzanti GZ 460 | 120.50 € | **114.90 €** | 10.4 % | **5.3 %** | 101.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 8401SE | 128.50 € | **122.90 €** | 10.1 % | **5.3 %** | 120.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 56.50 € | **51.00 €** | 24.7 % | **12.5 %** | 51.01 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 680.50 € | **675.00 €** | 10.0 % | **9.1 %** | 675.05 € | stávame sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 125.50 € | **120.00 €** | 14.9 % | **9.9 %** | 120.31 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 210.50 € | **205.00 €** | 10.2 % | **7.3 %** | 205.39 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 28.90 € | **23.50 €** | 29.4 % | **5.2 %** | 22.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 274.90 € | **269.50 €** | 18.2 % | **15.8 %** | 269.85 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 21.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 58.00 € | **52.90 €** | 16.3 % | **6.1 %** | 52.99 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.50 € | **102.50 €** | 10.2 % | **5.0 %** | 91.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 41.90 € | **36.90 €** | 20.2 % | **5.8 %** | 36.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK812110 | 109.90 € | **104.90 €** | 10.2 % | **5.2 %** | 104.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 272.90 € | **267.90 €** | 9.3 % | **7.3 %** | 267.93 € | stávame sa najlacnejší |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 99.50 € | **94.50 €** | 23.9 % | **17.7 %** | 94.56 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 377.50 € | **372.50 €** | 7.8 % | **6.3 %** | 372.57 € | stávame sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 108.90 € | **103.90 €** | 13.3 % | **8.1 %** | 104.00 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **500.00 €** | 15.0 % | **13.8 %** | 500.20 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA310 Umývateľná mopovac... | 25.00 € | **20.00 €** | 38.3 % | **10.6 %** | 20.40 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 28.50 € | **23.50 €** | 32.9 % | **9.6 %** | 23.90 € | stávame sa najlacnejší |
| UMAX VisionBook 11T LTE Pro | 107.90 € | **103.00 €** | 10.1 % | **5.1 %** | 96.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 123.90 € | **119.00 €** | 10.2 % | **5.9 %** | 119.05 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **130.00 €** | 15.0 % | **10.8 %** | 130.17 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.90 € | **239.00 €** | 10.0 % | **7.8 %** | 239.20 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 251.90 € | **247.00 €** | 10.1 % | **7.9 %** | 247.30 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 52.90 € | **48.00 €** | 24.9 % | **13.3 %** | 48.19 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 505.90 € | **501.00 €** | 10.0 % | **8.9 %** | 501.50 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **8.80 €** | 121.3 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| CANDY CMWA23TNDB | 97.50 € | **92.90 €** | 10.3 % | **5.1 %** | 89.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 73.50 € | **68.90 €** | 20.2 % | **12.7 %** | 69.00 € | stávame sa najlacnejší |
| TP-LINK Archer BE3600 WiFi 7 Router | 95.50 € | **91.00 €** | 10.2 % | **5.0 %** | 76.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-102 Skylink Viaccess Orca bezkartový systém | 115.50 € | **111.00 €** | 9.3 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla SlowCook S900 Plus | 92.50 € | **88.00 €** | 10.5 % | **5.1 %** | 77.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 45.00 € | **40.50 €** | 17.4 % | **5.7 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GOOLOO GP3000 59,2 Wh štartér | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 48.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 35.50 € | **31.00 €** | 20.4 % | **5.1 %** | 30.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 54.00 € | **49.50 €** | 19.4 % | **9.4 %** | 49.52 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Pro Combo | 786.50 € | **782.00 €** | 15.0 % | **14.4 %** | 782.07 € | stávame sa najlacnejší |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 18.50 € | **14.00 €** | 45.6 % | **10.2 %** | 14.09 € | stávame sa najlacnejší |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 110.50 € | **106.00 €** | 24.0 % | **19.0 %** | 106.16 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.50 € | **48.00 €** | 16.0 % | **6.1 %** | 48.19 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 89.50 € | **85.00 €** | 20.6 % | **14.5 %** | 85.29 € | stávame sa najlacnejší |
| ETA Stormy Home 0517 90000 | 79.99 € | **75.50 €** | 11.4 % | **5.1 %** | 66.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun CG9043 | 219.90 € | **215.50 €** | 10.1 % | **7.9 %** | 215.60 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.90 € | **122.50 €** | 10.2 % | **6.4 %** | 122.67 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 73.90 € | **69.50 €** | 30.8 % | **23.0 %** | 69.90 € | stávame sa najlacnejší |
| Výrobok X.A.3 | 53.90 € | **49.50 €** | 15.0 % | **5.6 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO Mini HD265 | 50.00 € | **45.90 €** | 14.6 % | **5.2 %** | 42.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 171.00 € | **166.90 €** | 7.8 % | **5.2 %** | 164.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 183.00 € | **178.90 €** | 7.8 % | **5.4 %** | 179.00 € | stávame sa najlacnejší |
| KOMA RK01 - Univerzální rotační kartáč | 22.99 € | **18.90 €** | 42.4 % | **17.0 %** | 19.00 € | stávame sa najlacnejší |
| ETA Fragranza 0066 90000 nerez | 19.99 € | **15.90 €** | 32.3 % | **5.3 %** | 13.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K4 ruční, bezdrátový set | 122.90 € | **118.90 €** | 8.7 % | **5.2 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 62.50 € | **58.50 €** | 12.4 % | **5.2 %** | 40.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER HL-1110E | 92.90 € | **88.90 €** | 10.2 % | **5.5 %** | 80.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkční balanční podložka HMS BSX02 | 133.50 € | **129.50 €** | 8.4 % | **5.2 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 59.90 € | **55.90 €** | 13.1 % | **5.5 %** | 51.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 40.90 € | **36.90 €** | 17.5 % | **6.0 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 19.00 € | **15.00 €** | 33.7 % | **5.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 81.90 € | **77.90 €** | 10.7 % | **5.3 %** | 77.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 81.90 € | **77.90 €** | 10.7 % | **5.3 %** | 77.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 75.90 € | **71.90 €** | 23.7 % | **17.2 %** | 71.92 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 95.90 € | **91.90 €** | 14.3 % | **9.5 %** | 91.96 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 70.50 € | **66.50 €** | 24.1 % | **17.0 %** | 66.59 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 81.50 € | **77.50 €** | 24.2 % | **18.1 %** | 77.79 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 179.50 € | **175.50 €** | 10.0 % | **7.6 %** | 175.80 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 310.50 € | **306.50 €** | 10.0 % | **8.6 %** | 306.86 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 310.50 € | **306.50 €** | 10.0 % | **8.6 %** | 306.86 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA520 Umývateľný HEPA fi... | 24.00 € | **20.00 €** | 32.7 % | **10.6 %** | 20.40 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.90 € | **129.00 €** | 10.3 % | **7.1 %** | 129.50 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.90 € | **38.00 €** | 17.8 % | **6.9 %** | 38.09 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 20.50 € | **16.90 €** | 33.9 % | **10.4 %** | 16.92 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 4.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 19.50 € | **15.90 €** | 31.7 % | **7.4 %** | 15.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFC32SGMXC | 82.50 € | **78.90 €** | 10.3 % | **5.5 %** | 35.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 110.50 € | **106.90 €** | 8.6 % | **5.1 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 73.50 € | **69.90 €** | 13.8 % | **8.2 %** | 69.96 € | stávame sa najlacnejší |
| EcoFlow DELTA 3 Max nabíjecí stanice 1ECO2040 | 1365.00 € | **1361.50 €** | 5.3 % | **5.0 %** | 1099.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 75.00 € | **71.50 €** | 10.2 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 83.00 € | **79.50 €** | 20.8 % | **15.7 %** | 79.56 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **83.50 €** | 14.8 % | **10.2 %** | 83.65 € | stávame sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 36.00 € | **32.50 €** | 19.6 % | **8.0 %** | 32.74 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 29.50 € | **26.00 €** | 21.9 % | **7.5 %** | 26.29 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 44.00 € | **40.50 €** | 37.6 % | **26.7 %** | 40.79 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 102.00 € | **98.50 €** | 10.0 % | **6.3 %** | 98.86 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 20.50 € | **17.00 €** | 33.9 % | **11.0 %** | 17.40 € | stávame sa najlacnejší |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 50.50 € | **47.00 €** | 24.4 % | **15.8 %** | 47.43 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 77.90 € | **74.50 €** | 9.8 % | **5.0 %** | 73.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 98.90 € | **95.50 €** | 21631.5 % | **20884.4 %** | 95.57 € | stávame sa najlacnejší |
| ANMITE A185W03 18,5" prenosný monitor | 134.90 € | **131.50 €** | 15.0 % | **12.1 %** | 131.73 € | stávame sa najlacnejší |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 40.90 € | **37.50 €** | 15.3 % | **5.7 %** | 32.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 62.90 € | **59.50 €** | 11.0 % | **5.0 %** | 56.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.50 €** | 18.5 % | **8.7 %** | 37.67 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 28.90 € | **25.50 €** | 24.7 % | **10.0 %** | 25.69 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - black | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 200.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - white | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 272.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 52.00 € | **48.90 €** | 22.5 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| KOMA HPU1 - Univerzální hubice | 15.99 € | **12.90 €** | 44.9 % | **16.9 %** | 13.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 30.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla SlowCook S800 Deluxe | 67.50 € | **64.50 €** | 10.6 % | **5.6 %** | 58.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meross MOP320MA-EU WiFi inteligentná napájacia lišta... | 34.50 € | **31.50 €** | 15.8 % | **5.7 %** | 29.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-NEVE 4K UHD Streaming Dongle | 68.50 € | **65.50 €** | 10.3 % | **5.4 %** | 65.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **32.90 €** | 15.0 % | **5.4 %** | 32.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **118.00 €** | 14.9 % | **12.0 %** | 118.04 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 382.90 € | **379.90 €** | 8.0 % | **7.1 %** | 379.95 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 35.90 € | **32.90 €** | 22.3 % | **12.1 %** | 32.98 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 251.90 € | **248.90 €** | 10.2 % | **8.8 %** | 249.00 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 210.50 € | **207.50 €** | 10.0 % | **8.4 %** | 207.60 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-black (black) | 107.00 € | **104.00 €** | 14.8 % | **11.6 %** | 104.12 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 44.50 € | **41.50 €** | 39.3 % | **29.9 %** | 41.73 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 43.50 € | **40.50 €** | 14.1 % | **6.2 %** | 40.79 € | stávame sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 68.90 € | **66.00 €** | 10.5 % | **5.8 %** | 66.36 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 92.90 € | **90.00 €** | 15.0 % | **11.4 %** | 90.38 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.90 € | **132.00 €** | 10.2 % | **7.9 %** | 132.50 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 14.90 € | **12.00 €** | 35.0 % | **8.8 %** | 12.29 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 60.90 € | **58.00 €** | 10.3 % | **5.1 %** | 54.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 24.90 € | **22.00 €** | 25.1 % | **10.5 %** | 22.39 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MultiCook RC400 Low Carb | 64.50 € | **61.90 €** | 10.1 % | **5.7 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový ovládač 4-kan. k pohonu brán IN SL-600, 100... | 28.50 € | **25.90 €** | 16.2 % | **5.6 %** | 19.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXSH2002E | 57.50 € | **54.90 €** | 10.2 % | **5.2 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo čierne) | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **31.90 €** | 14.6 % | **6.0 %** | 30.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor elektromagnetického žiarenia FNIRSI ERD-10 | 32.50 € | **29.90 €** | 14.6 % | **5.4 %** | 29.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100(1-pack) regulácia 23... | 13.50 € | **10.90 €** | 31.3 % | **6.0 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR černé | 197.50 € | **194.90 €** | 17.5 % | **16.0 %** | 194.99 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 197.50 € | **194.90 €** | 17.5 % | **16.0 %** | 194.99 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.50 € | **128.90 €** | 10.1 % | **7.9 %** | 129.00 € | stávame sa najlacnejší |
| Black&Decker BXDH12E | 167.50 € | **164.90 €** | 10.3 % | **8.6 %** | 165.00 € | stávame sa najlacnejší |
| Beko VRT76325VW | 169.50 € | **166.90 €** | 10.3 % | **8.6 %** | 167.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 198.00 € | **195.50 €** | 6.6 % | **5.3 %** | 167.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Balanční míč HMS Premium BSX Pro | 103.00 € | **100.50 €** | 8.1 % | **5.5 %** | 85.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 135 | 60.00 € | **57.50 €** | 10.2 % | **5.6 %** | 46.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR TWIN - Black/Silver | 53.50 € | **51.00 €** | 10.2 % | **5.0 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS Baseus Bowie WX5 (modré) | 33.00 € | **30.50 €** | 15.0 % | **6.3 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 50.00 € | **47.50 €** | 11.1 % | **5.6 %** | 44.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **12.50 €** | 28.9 % | **7.4 %** | 11.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 48.50 € | **46.00 €** | 22.8 % | **16.5 %** | 46.16 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| GUZZANTI GZ 3601 | 101.50 € | **99.00 €** | 10.0 % | **7.3 %** | 99.17 € | stávame sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 63.00 € | **60.50 €** | 24.0 % | **19.1 %** | 60.69 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 16.50 € | **14.00 €** | 24.8 % | **5.9 %** | 14.19 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.00 € | **59.50 €** | 15.1 % | **10.4 %** | 59.79 € | stávame sa najlacnejší |
| Ivo DVB-26 zesilovač 26dB (5-12V) | 27.00 € | **24.50 €** | 34.3 % | **21.9 %** | 24.90 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 48.50 € | **46.00 €** | 22.3 % | **16.0 %** | 46.49 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 15.50 € | **13.00 €** | 49.3 % | **25.2 %** | 13.50 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 175.50 € | **173.00 €** | 10.1 % | **8.5 %** | 173.50 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 197.90 € | **195.50 €** | 10.2 % | **8.9 %** | 195.60 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.90 € | **127.50 €** | 10.2 % | **8.2 %** | 127.90 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 12.90 € | **10.50 €** | 29.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 15.90 € | **13.50 €** | 31.1 % | **11.3 %** | 13.71 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 27.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 24.90 € | **22.50 €** | 25.1 % | **13.1 %** | 22.65 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **19.50 €** | 48.6 % | **32.3 %** | 19.67 € | stávame sa najlacnejší |
| Ultrazvukový masážny prístroj na tvár so svetelnou t... | 37.90 € | **35.50 €** | 15.2 % | **7.9 %** | 35.88 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 20.90 € | **18.50 €** | 24.9 % | **10.6 %** | 18.89 € | stávame sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 128 GB | 28.00 € | **25.90 €** | 14.7 % | **6.1 %** | 21.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DMR7 směrový, pro fotoaparáty, TRS | 73.50 € | **71.50 €** | 8.5 % | **5.5 %** | 61.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C320WS | 50.90 € | **48.90 €** | 10.0 % | **5.7 %** | 39.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 26.50 € | **24.50 €** | 15.2 % | **6.5 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 25.00 € | **23.00 €** | 14.3 % | **5.2 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E4GK1-4GB | 38.00 € | **36.00 €** | 11.1 % | **5.2 %** | 33.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.00 €** | 14.6 % | **5.1 %** | 20.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Neutralizátor zápachu na čistenie podláh pre MOVA V5... | 26.50 € | **24.50 €** | 14.7 % | **6.0 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 12.50 € | **10.50 €** | 29.5 % | **8.7 %** | 9.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny decibelomer Habotest HT622B USB A/C | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 24.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 22.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický masážny prístroj na krk EMS ANLAN 09-AMJY... | 26.50 € | **24.50 €** | 15.4 % | **6.7 %** | 24.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 33.00 € | **31.00 €** | 41.1 % | **32.6 %** | 31.01 € | stávame sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **58.00 €** | 14.9 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 36.00 € | **34.00 €** | 18.0 % | **11.5 %** | 34.09 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 29.50 € | **27.50 €** | 14.3 % | **6.6 %** | 27.59 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 23.50 € | **21.50 €** | 23.0 % | **12.6 %** | 21.59 € | stávame sa najlacnejší |
| Elektrický mlynček na zrnkovú kávu HiBREW G3 | 80.00 € | **78.00 €** | 14.9 % | **12.0 %** | 78.10 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.90 € | **169.90 €** | 10.2 % | **8.9 %** | 170.00 € | stávame sa najlacnejší |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 167.50 € | **165.50 €** | 8.2 % | **6.9 %** | 165.64 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 29.50 € | **27.50 €** | 21.9 % | **13.7 %** | 27.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 33.50 € | **31.50 €** | 17.4 % | **10.4 %** | 31.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.50 €** | 15.4 % | **8.5 %** | 31.69 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 160.50 € | **158.50 €** | 10.2 % | **8.9 %** | 158.70 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 161.50 € | **159.50 €** | 10.2 % | **8.9 %** | 159.70 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 197.00 € | **195.00 €** | 10.0 % | **8.9 %** | 195.20 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 20.50 € | **18.50 €** | 17.8 % | **6.3 %** | 18.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 34.00 € | **32.00 €** | 33.7 % | **25.8 %** | 32.37 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 23.50 € | **21.50 €** | 43.8 % | **31.5 %** | 21.88 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 30.00 € | **28.00 €** | 14.3 % | **6.7 %** | 28.38 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 342.50 € | **340.50 €** | 6.9 % | **6.3 %** | 340.89 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.50 € | **22.50 €** | 36.1 % | **25.0 %** | 22.90 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.50 €** | 10.0 % | **8.4 %** | 132.90 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 64.00 € | **62.00 €** | 13.5 % | **9.9 %** | 62.49 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.00 € | **10.00 €** | 52.9 % | **27.4 %** | 10.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 17.00 € | **15.00 €** | 27.3 % | **12.3 %** | 15.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **110.00 €** | 15.0 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.00 €** | 10.0 % | **8.0 %** | 101.50 € | stávame sa najlacnejší |
| Domo DO344DH | 149.90 € | **148.00 €** | 10.1 % | **8.7 %** | 148.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.90 € | **33.00 €** | 17.7 % | **11.3 %** | 33.03 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **26.00 €** | 15.4 % | **7.5 %** | 26.12 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 21.90 € | **20.00 €** | 24.8 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.90 € | **20.00 €** | 24.8 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 57.50 € | **55.90 €** | 8.7 % | **5.7 %** | 54.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 22.50 € | **20.90 €** | 16.3 % | **8.0 %** | 20.94 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 46.50 € | **44.90 €** | 9.5 % | **5.7 %** | 45.00 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 56.50 € | **54.90 €** | 8.5 % | **5.4 %** | 55.00 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 59.50 € | **57.90 €** | 8.0 % | **5.1 %** | 58.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový ovládač KRUGER & MATZ V-LED | 12.50 € | **10.90 €** | 24.8 % | **8.9 %** | 7.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 12.50 € | **10.90 €** | 22.9 % | **7.2 %** | 7.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 12.50 € | **10.90 €** | 23.6 % | **7.8 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 67.50 € | **65.90 €** | 8.0 % | **5.5 %** | 66.00 € | stávame sa najlacnejší |
| Nabíječka baterií XTAR VC4SL 18650 | 27.00 € | **25.50 €** | 13.0 % | **6.7 %** | 19.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 19.00 € | **17.50 €** | 16.4 % | **7.2 %** | 12.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Držák fólií (rolí) PARAT ROYAL | 31.50 € | **30.00 €** | 10.5 % | **5.2 %** | 27.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (čierne) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (strieborné) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **15.00 €** | 15.9 % | **5.4 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **18.00 €** | 15.6 % | **6.7 %** | 18.04 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **16.50 €** | 15.0 % | **5.4 %** | 16.56 € | stávame sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 12.50 € | **11.00 €** | 28.2 % | **12.8 %** | 11.07 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 31.50 € | **30.00 €** | 12.5 % | **7.1 %** | 30.09 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 110.50 € | **109.00 €** | 14.9 % | **13.3 %** | 109.19 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 20.00 € | **18.50 €** | 18.9 % | **10.0 %** | 18.69 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.50 € | **36.00 €** | 9.5 % | **5.1 %** | 36.29 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom bi... | 11.50 € | **10.00 €** | 36.1 % | **18.3 %** | 10.30 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **65.00 €** | 10.0 % | **7.5 %** | 65.30 € | stávame sa najlacnejší |
| Leifheit Telegant 72 Protect | 28.50 € | **27.00 €** | 11.1 % | **5.2 %** | 27.35 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **40.00 €** | 10.8 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **40.00 €** | 10.8 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **40.00 €** | 10.8 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 31.50 € | **30.00 €** | 15.3 % | **9.8 %** | 30.43 € | stávame sa najlacnejší |
| Karta microSD Lexar 3.0 s kapacitou 64 GB | 19.50 € | **18.00 €** | 15.6 % | **6.7 %** | 18.44 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 138.50 € | **137.00 €** | 10.1 % | **8.9 %** | 137.49 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 28.50 € | **27.00 €** | 20.1 % | **13.7 %** | 27.50 € | stávame sa najlacnejší |
| Roadstar DJ-390 BT Bluetooth speaker | 114.50 € | **113.00 €** | 10.2 % | **8.8 %** | 113.50 € | stávame sa najlacnejší |
| Blender G21 Experience Graphite Black | 253.90 € | **252.50 €** | 18.3 % | **17.6 %** | 252.53 € | stávame sa najlacnejší |
| ANMITE A160W03 16" prenosný monitor | 88.90 € | **87.50 €** | 15.1 % | **13.3 %** | 87.82 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 70.90 € | **69.50 €** | 36.7 % | **34.0 %** | 69.90 € | stávame sa najlacnejší |
| Myš bezdrátová REBEL WM500 | 13.90 € | **12.50 €** | 18.1 % | **6.2 %** | 11.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.60 €** | 30.3 % | **12.0 %** | 8.67 € | stávame sa najlacnejší |
| Sada BOYA BY-WFM12 bezdrátový klopový mikrofon, vysí... | 33.90 € | **32.50 €** | 9.8 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GameSir Nova Lite 2 Luminous White | 34.90 € | **33.50 €** | 10.1 % | **5.6 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PM700 stolní s nastavitelnou směrov... | 40.90 € | **39.50 €** | 8.8 % | **5.1 %** | 37.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO9195C | 32.90 € | **31.50 €** | 10.1 % | **5.4 %** | 29.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada litinových závaží 4x1,25kg, 51mm, REBEL ACTIVE ... | 18.90 € | **17.50 €** | 16.1 % | **7.5 %** | 15.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.90 € | **46.50 €** | 8.7 % | **5.5 %** | 46.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 34.90 € | **33.50 €** | 22.1 % | **17.2 %** | 33.68 € | stávame sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.50 €** | 15.2 % | **12.2 %** | 53.68 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.90 € | **24.50 €** | 22.6 % | **15.9 %** | 24.69 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 15.69 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.90 € | **39.50 €** | 10.8 % | **7.0 %** | 39.90 € | stávame sa najlacnejší |
| Veslo pro paddleboard REBEL ACTIVE | 21.00 € | **19.90 €** | 11.7 % | **5.8 %** | 18.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.20 € | **6.10 €** | 35.8 % | **15.1 %** | 6.20 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria AAA MediaRange nabíjateľné USB-C Li-Ion , 1,... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.50 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 187.00 € | **185.90 €** | 7.8 % | **7.2 %** | 186.00 € | stávame sa najlacnejší |
| Slúchadlá Niceboy HIVE Beans Concert | 79.90 € | **78.90 €** | 6.4 % | **5.1 %** | 21.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 63.00 € | **62.00 €** | 6.7 % | **5.0 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka HMS Premium MP12 světle šedá | 34.00 € | **33.00 €** | 8.4 % | **5.2 %** | 25.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.90 € | **35.90 €** | 9.1 % | **6.1 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 47.50 € | **46.50 €** | 8.2 % | **5.9 %** | 42.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka pamäťových kariet Lexar LRW310X Dual USB-A/C... | 12.50 € | **11.50 €** | 15.9 % | **6.6 %** | 7.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 81.90 € | **80.90 €** | 6.7 % | **5.4 %** | 78.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 64 GB | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 10.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 14.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W4 TUYA | 13.90 € | **12.90 €** | 15.4 % | **7.1 %** | 11.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic PETG (sivý) 1 kg | 11.50 € | **10.50 €** | 15.1 % | **5.1 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.50 €** | 8.3 % | **5.2 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skúšačka UNI-T UT18D vadaska | 42.90 € | **41.90 €** | 7.5 % | **5.0 %** | 41.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stojan na slúchadlá ONIKUMA ST-2 čierny | 13.90 € | **12.90 €** | 15.1 % | **6.8 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.50 € | **16.50 €** | 12.6 % | **6.2 %** | 16.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 26.50 € | **25.50 €** | 9.5 % | **5.4 %** | 25.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 108.90 € | **107.90 €** | 13.0 % | **11.9 %** | 107.91 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 36.00 € | **35.00 €** | 32.0 % | **28.3 %** | 35.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.40 € | **5.40 €** | 29.1 % | **8.9 %** | 5.41 € | stávame sa najlacnejší |
| CrockPot SCCPBPP605-050 | 102.50 € | **101.50 €** | 10.5 % | **9.5 %** | 101.54 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 114.00 € | **113.00 €** | 11.8 % | **10.8 %** | 113.04 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.90 € | **19.90 €** | 20.9 % | **15.2 %** | 19.96 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.00 € | **22.00 €** | 12.8 % | **7.9 %** | 22.09 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.99 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.99 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.99 € | stávame sa najlacnejší |
| AMIKO diaľkové ovládanie Univerzálny, HD - SD | 14.50 € | **13.50 €** | 26.4 % | **17.6 %** | 13.59 € | stávame sa najlacnejší |
| Tefal INGENIO skleněná poklice 18 | 15.90 € | **14.90 €** | 12.7 % | **5.6 %** | 15.00 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.90 € | **120.90 €** | 10.3 % | **9.4 %** | 121.00 € | stávame sa najlacnejší |
| Domo DO228SV | 121.90 € | **120.90 €** | 10.0 % | **9.1 %** | 121.00 € | stávame sa najlacnejší |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 123.90 € | **122.90 €** | 16.5 % | **15.5 %** | 123.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 261.90 € | **260.90 €** | 14.6 % | **14.1 %** | 261.00 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 396.90 € | **395.90 €** | 5.9 % | **5.7 %** | 396.00 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 404.90 € | **403.90 €** | 7.3 % | **7.1 %** | 404.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.13 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.50 €** | 15.6 % | **13.0 %** | 43.63 € | stávame sa najlacnejší |
| Domo DO8719W | 70.50 € | **69.50 €** | 10.7 % | **9.1 %** | 69.67 € | stávame sa najlacnejší |
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
| Náhradní filtrační kapsle GARNI BS 45T | 17.50 € | **16.50 €** | 24.3 % | **17.2 %** | 16.69 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 84.00 € | **83.00 €** | 10.2 % | **8.9 %** | 83.20 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 20.50 € | **19.50 €** | 31.0 % | **24.6 %** | 19.74 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **41.50 €** | 15.0 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 251.50 € | **250.50 €** | 7.8 % | **7.4 %** | 250.76 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **35.00 €** | 15.0 % | **11.9 %** | 35.29 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 72.00 € | **71.00 €** | 14.7 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT113 | 11.50 € | **10.50 €** | 16.4 % | **6.3 %** | 10.85 € | stávame sa najlacnejší |
| Foodsaver New Fresh 2,3 l | 32.50 € | **31.50 €** | 11.3 % | **7.9 %** | 31.89 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 13.50 € | **12.50 €** | 14.9 % | **6.4 %** | 12.89 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.50 € | **43.50 €** | 15.4 % | **12.8 %** | 43.89 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 29.00 € | **28.00 €** | 21.4 % | **17.2 %** | 28.39 € | stávame sa najlacnejší |
| Tefal J1641474 | 12.50 € | **11.50 €** | 14.4 % | **5.3 %** | 11.90 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.50 € | **39.50 €** | 11.1 % | **8.3 %** | 39.90 € | stávame sa najlacnejší |
| GODOX LUX Junior Retro blesk | 63.50 € | **62.50 €** | 15.4 % | **13.6 %** | 62.90 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 35.50 € | **34.50 €** | 28.7 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| Zircon Monoblok Single M-0143 Slim line Skylink | 12.50 € | **11.50 €** | 36.0 % | **25.2 %** | 11.90 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Night 160 ml | 12.00 € | **11.00 €** | 23.0 % | **12.8 %** | 11.42 € | stávame sa najlacnejší |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 77.00 € | **76.00 €** | 14.7 % | **13.2 %** | 76.48 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 69.00 € | **68.00 €** | 15.0 % | **13.4 %** | 68.49 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v striebornej ... | 63.00 € | **62.00 €** | 14.8 % | **12.9 %** | 62.49 € | stávame sa najlacnejší |
| Resto 93501 Hrnec s pokličkou 20 cm | 36.00 € | **35.00 €** | 10.2 % | **7.1 %** | 35.50 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 16.90 € | **15.90 €** | 12.3 % | **5.7 %** | 16.00 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **14.00 €** | 21.6 % | **14.3 %** | 14.04 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 13.90 € | **13.00 €** | 20.2 % | **12.4 %** | 13.10 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 13.90 € | **13.00 €** | 18.6 % | **10.9 %** | 13.22 € | stávame sa najlacnejší |
| Ufesa Haku | 30.90 € | **30.00 €** | 11.3 % | **8.1 %** | 30.08 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 43.90 € | **43.00 €** | 8.3 % | **6.0 %** | 43.09 € | stávame sa najlacnejší |
| G3Ferrari G2016100 EQUA Kuchyňská váha | 19.90 € | **19.00 €** | 11.9 % | **6.8 %** | 19.17 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.7 % | **9.6 %** | 24.19 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.7 % | **9.6 %** | 24.19 € | stávame sa najlacnejší |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.90 € | **36.00 €** | 10.0 % | **7.3 %** | 36.20 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **38.00 €** | 10.1 % | **7.5 %** | 38.20 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 23.90 € | **23.00 €** | 48.8 % | **43.2 %** | 23.29 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.90 € | **33.00 €** | 11.1 % | **8.1 %** | 33.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.90 € | **23.00 €** | 11.7 % | **7.5 %** | 23.29 € | stávame sa najlacnejší |
| Ardes AR4B01B | 45.90 € | **45.00 €** | 10.6 % | **8.4 %** | 45.39 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **42.00 €** | 10.5 % | **8.2 %** | 42.41 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2+ 12ks + dárek A5 | 46.90 € | **46.00 €** | 10.7 % | **8.6 %** | 46.46 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.90 € | **23.00 €** | 10.2 % | **6.0 %** | 23.49 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.90 € | **25.00 €** | 22.6 % | **18.3 %** | 25.50 € | stávame sa najlacnejší |
| Leifheit Page Profi 100 | 29.90 € | **29.00 €** | 11.4 % | **8.0 %** | 29.50 € | stávame sa najlacnejší |
| Hrazda do dveří Trizand 24784 | 16.90 € | **16.00 €** | 14.6 % | **8.5 %** | 16.50 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 5.40 € | **4.60 €** | 55.1 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.60 € | **2.90 €** | 48.6 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 10.50 € | **9.80 €** | 27.0 % | **18.6 %** | 9.90 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM58 ruční všesměrový | 32.50 € | **31.90 €** | 8.2 % | **6.2 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Rollfix 210 Lon | 17.50 € | **16.90 €** | 11.3 % | **7.5 %** | 14.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 30.50 € | **29.90 €** | 8.2 % | **6.1 %** | 29.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 17.50 € | **16.90 €** | 10.7 % | **6.9 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.50 € | **17.90 €** | 8.6 % | **5.1 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 27.50 € | **26.90 €** | 34.4 % | **31.5 %** | 26.91 € | stávame sa najlacnejší |
| Hodiny TechnoLine WT 3100 do koupelny | 24.50 € | **23.90 €** | 15.9 % | **13.0 %** | 23.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.50 € | **47.90 €** | 11.0 % | **9.6 %** | 47.96 € | stávame sa najlacnejší |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 42.50 € | **41.90 €** | 18.9 % | **17.3 %** | 41.97 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **28.90 €** | 11.4 % | **9.1 %** | 28.99 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **28.90 €** | 11.4 % | **9.1 %** | 28.99 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **35.90 €** | 10.5 % | **8.7 %** | 36.00 € | stávame sa najlacnejší |
| Jóga blok HMS KJ02 korkový | 15.50 € | **14.90 €** | 10.1 % | **5.8 %** | 5.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní válec HMS FS104, modrý | 15.50 € | **14.90 €** | 10.1 % | **5.8 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 11.50 € | **10.90 €** | 14.3 % | **8.3 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 11.50 € | **10.90 €** | 36.1 % | **29.0 %** | 10.97 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 14.50 € | **13.90 €** | 18.4 % | **13.5 %** | 13.99 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.50 € | **11.90 €** | 34.2 % | **27.8 %** | 12.00 € | stávame sa najlacnejší |
| Nabíjecí bezdrátová podložka pro telefony Compass | 16.50 € | **15.90 €** | 10.5 % | **6.5 %** | 16.00 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 16.50 € | **15.90 €** | 23.5 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| ETA Presto 2094 90000, bílý | 93.50 € | **92.90 €** | 5.7 % | **5.0 %** | 80.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 75.50 € | **74.90 €** | 8.0 % | **7.2 %** | 74.94 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.40 € | **3.90 €** | 55.5 % | **37.9 %** | 3.96 € | stávame sa najlacnejší |
| Sušička ovoce Ruhhy 25928 400W | 50.50 € | **50.00 €** | 6.1 % | **5.1 %** | 42.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 32GB | 13.00 € | **12.50 €** | 12.9 % | **8.6 %** | 9.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 růžovo-šedá | 25.00 € | **24.50 €** | 7.5 % | **5.3 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 zelená-mod... | 25.00 € | **24.50 €** | 7.5 % | **5.3 %** | 22.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 žlutá-modr... | 25.00 € | **24.50 €** | 7.5 % | **5.3 %** | 22.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE FItness MP10 modro-šedá | 25.00 € | **24.50 €** | 7.5 % | **5.3 %** | 22.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Icequeen-Wh | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm černý | 13.50 € | **13.00 €** | 9.6 % | **5.6 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm světle šedý | 13.50 € | **13.00 €** | 9.6 % | **5.6 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB02N 75 cm šedo-stříbrný | 13.50 € | **13.00 €** | 9.6 % | **5.6 %** | 12.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N50 eliminátor zápachu pre Petkit PURA MAX 2/PRO lit... | 11.00 € | **10.50 €** | 13.3 % | **8.2 %** | 10.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.00 € | **24.50 €** | 9.3 % | **7.1 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 25.00 € | **24.50 €** | 9.3 % | **7.1 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **19.50 €** | 15.1 % | **12.2 %** | 19.56 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.90 € | **5.40 €** | 48.0 % | **35.5 %** | 5.46 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 11.8 % | **9.4 %** | 23.08 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.00 € | **16.50 €** | 13.5 % | **10.1 %** | 16.58 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.50 € | **23.00 €** | 19.3 % | **16.7 %** | 23.09 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 75.50 € | **75.00 €** | 8.0 % | **7.3 %** | 75.09 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.30 €** | 48.9 % | **33.4 %** | 4.40 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 109.50 € | **109.00 €** | 10.4 % | **9.9 %** | 109.10 € | stávame sa najlacnejší |
| Girmi FM2105 Mikrovlnná trouba s grilem | 109.50 € | **109.00 €** | 10.4 % | **9.9 %** | 109.10 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 84.00 € | **83.50 €** | 14.9 % | **14.2 %** | 83.63 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 18.50 € | **18.00 €** | 22.0 % | **18.7 %** | 18.14 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 18.50 € | **18.00 €** | 22.0 % | **18.7 %** | 18.14 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 18.50 € | **18.00 €** | 22.0 % | **18.7 %** | 18.14 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 16.50 € | **16.00 €** | 14.9 % | **11.4 %** | 16.15 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| SAMSUNG MS23K3555EK/EO | 119.00 € | **118.50 €** | 10.6 % | **10.1 %** | 118.70 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 23.00 € | **22.50 €** | 18.7 % | **16.1 %** | 22.71 € | stávame sa najlacnejší |
| D-LINK AC13U | 14.50 € | **14.00 €** | 14.9 % | **10.9 %** | 14.21 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 29.50 € | **29.00 €** | 7.3 % | **5.4 %** | 29.22 € | stávame sa najlacnejší |
| Svetlomet Superfire HL06, 500lm, USB | 13.00 € | **12.50 €** | 15.3 % | **10.8 %** | 12.73 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.50 € | **155.00 €** | 14.4 % | **14.0 %** | 155.25 € | stávame sa najlacnejší |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.50 € | **55.00 €** | 16.7 % | **15.7 %** | 55.25 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 23.00 € | **22.50 €** | 15.9 % | **13.3 %** | 22.76 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 29.50 € | **29.00 €** | 9.6 % | **7.8 %** | 29.29 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.5 % | **8.1 %** | 10.29 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.50 € | **16.00 €** | 12.4 % | **8.9 %** | 16.29 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 57.50 € | **57.00 €** | 10.3 % | **9.3 %** | 57.29 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.3 % | **8.0 %** | 16.29 € | stávame sa najlacnejší |
| Barkan 4400 polohovací držák pro TV 32"-80" | 84.00 € | **83.50 €** | 18.1 % | **17.4 %** | 83.79 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 17.00 € | **16.50 €** | 14.5 % | **11.1 %** | 16.79 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 48.50 € | **48.00 €** | 9.9 % | **8.7 %** | 48.29 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 18.50 € | **18.00 €** | 8.7 % | **5.7 %** | 18.29 € | stávame sa najlacnejší |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **18.00 €** | 15.7 % | **12.6 %** | 18.29 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 36.50 € | **36.00 €** | 7.8 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 12.00 € | **11.50 €** | 18.0 % | **13.1 %** | 11.79 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.00 € | **11.50 €** | 12.0 % | **7.3 %** | 11.79 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.50 € | **41.00 €** | 13.3 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **27.50 €** | 13.9 % | **11.9 %** | 27.79 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.50 € | **37.00 €** | 21.5 % | **19.8 %** | 37.29 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 62.50 € | **62.00 €** | 6.2 % | **5.3 %** | 62.29 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.00 € | **15.50 €** | 9.9 % | **6.4 %** | 15.79 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 85.50 € | **85.00 €** | 7.8 % | **7.2 %** | 85.29 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 29.00 € | **28.50 €** | 31.0 % | **28.7 %** | 28.79 € | stávame sa najlacnejší |
| Casio Fx 85 Es Plus 2E | 20.50 € | **20.00 €** | 12.4 % | **9.6 %** | 20.29 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **12.00 €** | 14.3 % | **9.7 %** | 12.29 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.50 € | **28.00 €** | 33.0 % | **30.7 %** | 28.30 € | stávame sa najlacnejší |
| Domo DO223S | 64.50 € | **64.00 €** | 13.0 % | **12.2 %** | 64.30 € | stávame sa najlacnejší |
| WHIRLPOOL WI 7020 P | 331.50 € | **331.00 €** | 8.1 % | **8.0 %** | 331.30 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 85.50 € | **85.00 €** | 6.4 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 85.50 € | **85.00 €** | 6.4 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.50 € | **48.00 €** | 16.0 % | **14.8 %** | 48.31 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 48.50 € | **48.00 €** | 12.7 % | **11.6 %** | 48.31 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 14.00 € | **13.50 €** | 14.3 % | **10.2 %** | 13.83 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 204.50 € | **204.00 €** | 14.1 % | **13.8 %** | 204.34 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 26.50 € | **26.00 €** | 30.7 % | **28.2 %** | 26.35 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.36 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 31.50 € | **31.00 €** | 7.8 % | **6.1 %** | 31.36 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 566.50 € | **566.00 €** | 6.4 % | **6.3 %** | 566.36 € | stávame sa najlacnejší |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.50 € | **11.00 €** | 25.7 % | **20.2 %** | 11.36 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 10.6 % | **7.2 %** | 16.38 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.38 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.50 € | **22.00 €** | 11.7 % | **9.3 %** | 22.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.50 € | **18.00 €** | 12.6 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.00 € | **17.50 €** | 9.5 % | **6.5 %** | 17.89 € | stávame sa najlacnejší |
| TESLA Cook BBQ150 | 53.50 € | **53.00 €** | 10.5 % | **9.5 %** | 53.39 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.50 € | **27.00 €** | 15.1 % | **13.0 %** | 27.39 € | stávame sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.50 € | **20.00 €** | 12.0 % | **9.3 %** | 20.39 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 54.50 € | **54.00 €** | 8.7 % | **7.7 %** | 54.39 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 35.00 € | **34.50 €** | 18.4 % | **16.7 %** | 34.89 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.50 € | **16.00 €** | 21.5 % | **17.8 %** | 16.39 € | stávame sa najlacnejší |
| DOMO DO42329PC | 114.50 € | **114.00 €** | 7.1 % | **6.6 %** | 114.39 € | stávame sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 105.00 € | **104.50 €** | 29.8 % | **29.2 %** | 104.89 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **27.00 €** | 15.6 % | **13.5 %** | 27.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 86.00 € | **85.50 €** | 9.7 % | **9.1 %** | 85.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 67.00 € | **66.50 €** | 6.5 % | **5.7 %** | 66.89 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 80.50 € | **80.00 €** | 9.0 % | **8.4 %** | 80.39 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 55.50 € | **55.00 €** | 7.0 % | **6.1 %** | 55.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 241.00 € | **240.50 €** | 12.9 % | **12.6 %** | 240.89 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 134.00 € | **133.50 €** | 11.8 % | **11.4 %** | 133.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 466.00 € | **465.50 €** | 7.7 % | **7.6 %** | 465.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 900.00 € | **899.50 €** | 14.4 % | **14.3 %** | 899.89 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.50 € | **90.00 €** | 15.1 % | **14.5 %** | 90.39 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 39.50 € | **39.00 €** | 19.8 % | **18.3 %** | 39.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 81.50 € | **81.00 €** | 7.8 % | **7.1 %** | 81.39 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 53.50 € | **53.00 €** | 10.4 % | **9.4 %** | 53.39 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 78.50 € | **78.00 €** | 9.1 % | **8.4 %** | 78.39 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 166.50 € | **166.00 €** | 12.5 % | **12.2 %** | 166.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 325.00 € | **324.50 €** | 10.4 % | **10.2 %** | 324.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 254.50 € | **254.00 €** | 12.6 % | **12.4 %** | 254.39 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 99.50 € | **99.00 €** | 9.6 % | **9.0 %** | 99.39 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 119.00 € | **118.50 €** | 11.0 % | **10.6 %** | 118.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 115.50 € | **115.00 €** | 11.5 % | **11.0 %** | 115.39 € | stávame sa najlacnejší |
| CrockPot CSC062X | 157.50 € | **157.00 €** | 6.8 % | **6.4 %** | 157.39 € | stávame sa najlacnejší |
| TESLA EliteCook K70 Ultra | 147.50 € | **147.00 €** | 9.9 % | **9.6 %** | 147.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 141.50 € | **141.00 €** | 9.1 % | **8.7 %** | 141.39 € | stávame sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1549.50 € | **1549.00 €** | 10.3 % | **10.2 %** | 1549.39 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 25.00 € | **24.50 €** | 10.3 % | **8.1 %** | 24.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 26.00 € | **25.50 €** | 11.0 % | **8.8 %** | 25.89 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.00 € | **11.50 €** | 12.0 % | **7.3 %** | 11.89 € | stávame sa najlacnejší |
| DOMO DO9286IB | 248.50 € | **248.00 €** | 6.0 % | **5.8 %** | 248.39 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 53.50 € | **53.00 €** | 7.4 % | **6.4 %** | 53.39 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.50 € | **19.00 €** | 12.5 % | **9.6 %** | 19.39 € | stávame sa najlacnejší |
| D-LINK WiFi AX3200 Router (R32/E) | 83.50 € | **83.00 €** | 10.1 % | **9.4 %** | 83.39 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 1-pack) | 98.50 € | **98.00 €** | 6.4 % | **5.8 %** | 98.39 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 207.50 € | **207.00 €** | 11.5 % | **11.2 %** | 207.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 113.50 € | **113.00 €** | 8.9 % | **8.5 %** | 113.39 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 279.50 € | **279.00 €** | 7.3 % | **7.1 %** | 279.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.50 € | **18.00 €** | 23.0 % | **19.7 %** | 18.39 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 64.50 € | **64.00 €** | 7.0 % | **6.1 %** | 64.39 € | stávame sa najlacnejší |
| Tesla GSM-LITE zesilovač/opakovač 900/1800 MHz - kom... | 178.50 € | **178.00 €** | 7.6 % | **7.3 %** | 178.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 108.50 € | **108.00 €** | 6.2 % | **5.8 %** | 108.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 240.50 € | **240.00 €** | 8.5 % | **8.3 %** | 240.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 89.00 € | **88.50 €** | 5.8 % | **5.2 %** | 88.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 119.00 € | **118.50 €** | 8.4 % | **7.9 %** | 118.89 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 270.50 € | **270.00 €** | 6.6 % | **6.4 %** | 270.39 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 207.00 € | **206.50 €** | 8.5 % | **8.2 %** | 206.89 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 193.00 € | **192.50 €** | 8.7 % | **8.4 %** | 192.89 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 110.50 € | **110.00 €** | 14.1 % | **13.6 %** | 110.39 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 110.50 € | **110.00 €** | 14.1 % | **13.6 %** | 110.39 € | stávame sa najlacnejší |
| Stropné svetlo Yeelight C2201C400 | 64.50 € | **64.00 €** | 15.7 % | **14.8 %** | 64.40 € | stávame sa najlacnejší |
| Girmi BL0401 Cestovní silikonová konvice | 15.00 € | **14.50 €** | 10.5 % | **6.8 %** | 14.90 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 312.50 € | **312.00 €** | 8.1 % | **7.9 %** | 312.40 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 126.50 € | **126.00 €** | 5.8 % | **5.4 %** | 126.41 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.50 € | **139.00 €** | 8.1 % | **7.7 %** | 139.41 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 10.50 € | **10.00 €** | 31.7 % | **25.5 %** | 10.41 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.50 € | **16.00 €** | 10.0 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 18.50 € | **18.00 €** | 11.2 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 84.50 € | **84.00 €** | 14.2 % | **13.5 %** | 84.42 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 29.50 € | **29.00 €** | 34.7 % | **32.4 %** | 29.44 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 113.50 € | **113.00 €** | 9.1 % | **8.6 %** | 113.44 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 50.3 % | **46.6 %** | 20.45 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 231.50 € | **231.00 €** | 17.6 % | **17.4 %** | 231.45 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 231.50 € | **231.00 €** | 17.6 % | **17.4 %** | 231.45 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 231.50 € | **231.00 €** | 17.6 % | **17.4 %** | 231.45 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 231.50 € | **231.00 €** | 17.6 % | **17.4 %** | 231.45 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 231.50 € | **231.00 €** | 17.6 % | **17.4 %** | 231.45 € | stávame sa najlacnejší |
| FoodSaver FFC025X | 26.50 € | **26.00 €** | 11.8 % | **9.7 %** | 26.46 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Fashion Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| Digitálny multimeter Habotest HT86B | 11.50 € | **11.00 €** | 12.5 % | **7.6 %** | 11.46 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 43.50 € | **43.00 €** | 13.4 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 21.50 € | **21.00 €** | 11.6 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **13.00 €** | 14.0 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.50 € | **16.00 €** | 18.0 % | **14.4 %** | 16.49 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 33.50 € | **33.00 €** | 7.7 % | **6.1 %** | 33.49 € | stávame sa najlacnejší |
| Rapoo E9270p bezdrátová klávesnice černá | 37.50 € | **37.00 €** | 9.3 % | **7.8 %** | 37.49 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.50 € | **25.00 €** | 19.5 % | **17.1 %** | 25.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **44.00 €** | 7.0 % | **5.8 %** | 44.49 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Black) | 14.50 € | **14.00 €** | 16.1 % | **12.1 %** | 14.49 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Grey) | 14.50 € | **14.00 €** | 10.1 % | **6.3 %** | 14.49 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 68.50 € | **68.00 €** | 14.2 % | **13.4 %** | 68.49 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.50 € | **16.00 €** | 29.1 % | **25.2 %** | 16.49 € | stávame sa najlacnejší |
| TESLA TE-344 venkovní anténa | 27.50 € | **27.00 €** | 45.8 % | **43.2 %** | 27.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1297.90 € | **1297.50 €** | 7.3 % | **7.2 %** | 1297.79 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1346.90 € | **1346.50 €** | 7.4 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.90 € | **195.50 €** | 10.1 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 91.90 € | **91.50 €** | 6.5 % | **6.0 %** | 91.79 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 97.90 € | **97.50 €** | 9.2 % | **8.8 %** | 97.79 € | stávame sa najlacnejší |
| DOMO DO42102SV | 99.90 € | **99.50 €** | 10.2 % | **9.7 %** | 99.79 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.50 €** | 9.4 % | **8.8 %** | 84.80 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.90 € | **212.50 €** | 10.1 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 82.90 € | **82.50 €** | 10.4 % | **9.8 %** | 82.80 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa A3C Pro 13,3" | 121.90 € | **121.50 €** | 8.6 % | **8.3 %** | 121.81 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 74.90 € | **74.50 €** | 13.0 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 123.90 € | **123.50 €** | 6.2 % | **5.8 %** | 123.89 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 74.90 € | **74.50 €** | 7.8 % | **7.2 %** | 74.89 € | stávame sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 13.90 € | **13.50 €** | 9.8 % | **6.7 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.80 €** | 49.4 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 4.20 € | **3.80 €** | 48.5 % | **34.3 %** | 3.87 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.50 €** | 15.5 % | **11.3 %** | 10.59 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **8.40 €** | 38.4 % | **32.1 %** | 8.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.90 € | **13.50 €** | 13.5 % | **10.2 %** | 13.69 € | stávame sa najlacnejší |
| HP Wireless Mouse 220 Black | 13.90 € | **13.50 €** | 13.8 % | **10.5 %** | 13.71 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.50 €** | 40.4 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.90 € | **10.50 €** | 24.8 % | **20.2 %** | 10.79 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.79 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.79 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.90 € | **10.50 €** | 31.3 % | **26.5 %** | 10.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 680 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.90 € | **15.50 €** | 10.6 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.50 €** | 45.7 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.50 €** | 26.2 % | **21.6 %** | 10.86 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.50 €** | 19.3 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.10 € | **4.70 €** | 35.9 % | **25.3 %** | 4.79 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.90 € | **52.50 €** | 10.8 % | **10.0 %** | 52.54 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.55 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.50 €** | 10.2 % | **9.0 %** | 36.58 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.50 €** | 11.5 % | **8.9 %** | 16.63 € | stávame sa najlacnejší |
| Domo DO733K | 47.90 € | **47.50 €** | 10.8 % | **9.9 %** | 47.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.1 % | **8.5 %** | 26.63 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.50 €** | 11.0 % | **9.5 %** | 29.67 € | stávame sa najlacnejší |
| Cabletech UCH0022-S | 20.90 € | **20.50 €** | 8.2 % | **6.1 %** | 20.68 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.69 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT203R | 53.90 € | **53.50 €** | 15.4 % | **14.5 %** | 53.69 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 16.90 € | **16.50 €** | 14.4 % | **11.7 %** | 16.69 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 60.90 € | **60.50 €** | 21.6 % | **20.8 %** | 60.69 € | stávame sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.90 € | **21.50 €** | 11.7 % | **9.7 %** | 21.69 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.50 €** | 35.5 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.90 € | **19.50 €** | 43.7 % | **40.8 %** | 19.70 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.73 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 27.90 € | **27.50 €** | 25.4 % | **23.6 %** | 27.73 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND32/PL | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND64/PL | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND16 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.50 €** | 20.3 % | **18.7 %** | 29.76 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.50 €** | 15.2 % | **12.6 %** | 17.77 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.50 €** | 15.4 % | **12.8 %** | 17.77 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.90 € | **32.50 €** | 13.8 % | **12.4 %** | 32.79 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 23.90 € | **23.50 €** | 17.4 % | **15.4 %** | 23.79 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 23.90 € | **23.50 €** | 11.6 % | **9.7 %** | 23.79 € | stávame sa najlacnejší |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 44.90 € | **44.50 €** | 14.9 % | **13.9 %** | 44.79 € | stávame sa najlacnejší |
| DOMO DO42602S | 39.90 € | **39.50 €** | 9.3 % | **8.2 %** | 39.79 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.90 € | **24.50 €** | 17.8 % | **15.9 %** | 24.79 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.50 €** | 11.8 % | **9.2 %** | 16.79 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.90 € | **23.50 €** | 14.4 % | **12.5 %** | 23.79 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.50 €** | 7.7 % | **6.5 %** | 33.79 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.90 € | **39.50 €** | 16.8 % | **15.6 %** | 39.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.80 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.90 € | **16.50 €** | 18.2 % | **15.4 %** | 16.80 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 20.90 € | **20.50 €** | 18.1 % | **15.8 %** | 20.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.50 €** | 39.6 % | **36.8 %** | 19.80 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 35.90 € | **35.50 €** | 7.1 % | **6.0 %** | 35.86 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.90 € | **23.50 €** | 32.8 % | **30.6 %** | 23.87 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 12.7 % | **10.2 %** | 17.88 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 44.90 € | **44.50 €** | 6.8 % | **5.8 %** | 44.89 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.90 € | **18.50 €** | 20.0 % | **17.5 %** | 18.89 € | stávame sa najlacnejší |
| Filters ND8/16/32 Freewell for DJI Neo | 17.90 € | **17.50 €** | 19.6 % | **16.9 %** | 17.89 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (čierny) | 275.90 € | **275.50 €** | 7.4 % | **7.3 %** | 275.70 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 277.90 € | **277.50 €** | 12.2 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 848.90 € | **848.50 €** | 8.3 % | **8.3 %** | 848.79 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.90 € | **348.50 €** | 15.0 % | **14.9 %** | 348.79 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 471.90 € | **471.50 €** | 7.1 % | **7.0 %** | 471.80 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 507.90 € | **507.50 €** | 7.1 % | **7.0 %** | 507.80 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 324.90 € | **324.50 €** | 7.1 % | **6.9 %** | 324.84 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 347.90 € | **347.50 €** | 7.6 % | **7.5 %** | 347.86 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 2.00 € | **1.70 €** | 54.9 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.90 € | **2.60 €** | 48.3 % | **32.9 %** | 2.68 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.40 € | **2.10 €** | 33.6 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **5.00 €** | 15.5 % | **11.1 %** | 5.09 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.20 € | **8.00 €** | 40.1 % | **36.6 %** | 8.09 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 791.00 € | **790.90 €** | 13.8 % | **13.8 %** | 790.99 € | stávame sa najlacnejší |
| 3D skener Revopoint POP 4 Premium | 931.00 € | **930.90 €** | 14.9 % | **14.9 %** | 930.99 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 279.00 € | **278.90 €** | 8.0 % | **7.9 %** | 278.99 € | stávame sa najlacnejší |
| Beper 50451 Tyčový Vakuový Vysavač S He | 52.00 € | **51.90 €** | 10.2 % | **10.0 %** | 51.92 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 16.5 % | **15.9 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Maxlife MXBH-01 černé | 19.00 € | **18.90 €** | 10.4 % | **9.8 %** | 18.95 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.97 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 28.00 € | **27.90 €** | 13.4 % | **13.0 %** | 27.98 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.90 €** | 25.3 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Mio Smartbox IV | 31.00 € | **30.90 €** | 8.3 % | **8.0 %** | 30.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Cycplus AS2 mini electric pump | 42.00 € | **41.90 €** | 7.2 % | **7.0 %** | 41.99 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 5.20 € | **5.10 €** | 13.0 % | **10.9 %** | 5.15 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.70 € | **5.60 €** | 37.1 % | **34.7 %** | 5.67 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
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
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.20 € | **1.10 €** | 39.4 % | **27.8 %** | 1.18 € | stávame sa najlacnejší |
| Electrolux EF167 | 14.00 € | **13.90 €** | 8.4 % | **7.6 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.00 € | **15.90 €** | 7.2 % | **6.5 %** | 15.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.95 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.90 €** | 45.7 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.30 € | **3.20 €** | 36.2 % | **32.1 %** | 3.25 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **11.90 €** | 47.4 % | **46.1 %** | 11.96 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.4 % | **9.6 %** | 12.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.60 € | **9.50 €** | 21.0 % | **19.7 %** | 9.56 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.20 € | **9.10 €** | 31.5 % | **30.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 6.9 % | **5.4 %** | 7.06 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.77 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.50 € | **9.40 €** | 28.3 % | **26.9 %** | 9.48 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.20 €** | 37.2 % | **34.6 %** | 5.28 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 12.00 € | **11.90 €** | 19.3 % | **18.3 %** | 11.98 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.20 € | **8.10 €** | 12.4 % | **11.1 %** | 8.19 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.90 €** | 25.1 % | **23.8 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.50 €** | 24.8 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 28.3 % | **26.3 %** | 6.49 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 8.7 % | **7.1 %** | 6.49 € | stávame sa najlacnejší |
| Solight stĺpcový filter pre Dyson V12 | 6.00 € | **5.90 €** | 26.4 % | **24.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.90 €** | 36.9 % | **35.2 %** | 7.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.80 €** | 11.5 % | **10.2 %** | 8.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.20 €** | 21.0 % | **18.8 %** | 5.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.60 € | **9.50 €** | 26.9 % | **25.6 %** | 9.59 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.30 €** | 43.8 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 67.00 € | **66.90 €** | 5.2 % | **5.0 %** | 65.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 06A1 | 103.00 € | **102.90 €** | 5.3 % | **5.2 %** | 102.96 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1801 | 238.00 € | **237.90 €** | 42899.1 % | **42881.0 %** | 237.97 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 201.00 € | **200.90 €** | 10.0 % | **9.9 %** | 200.99 € | stávame sa najlacnejší |

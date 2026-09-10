# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-10

Vstup: `premiumstoresk_20260910_0839.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6130**
- Návrh **zvýšiť** cenu: **211** produktov
- Návrh **znížiť** cenu: **837** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5082** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **238**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (211)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Samsung The Frame Pro QE75LS03HW | 2683.90 € | **2768.00 €** | 10.0 % | **13.5 %** | 2683.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Nubela 2569 90100, bílý | 20.50 € | **28.00 €** | 11.3 % | **52.0 %** | 27.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux MCK CZ | 22.90 € | **29.90 €** | 11.7 % | **45.8 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 21.90 € | **28.90 €** | 5.4 % | **39.1 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS520E15W | 257.90 € | **264.00 €** | 5.1 % | **7.6 %** | 257.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZHM2550 | 34.50 € | **39.90 €** | 11.1 % | **28.5 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 55.50 € | **60.50 €** | 25.8 % | **37.2 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO MGC20130BFB | 76.50 € | **81.50 €** | 5.4 % | **12.3 %** | 76.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.90 € | **26.50 €** | 7.9 % | **30.6 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sada Combi Classic mop 56792 | 14.00 € | **18.50 €** | 10.6 % | **46.2 %** | 18.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EB61C4DB | 143.50 € | **148.00 €** | 5.0 % | **8.3 %** | 143.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **34.00 €** | 20.3 % | **36.8 %** | 29.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22280-56/RH | 57.50 € | **61.50 €** | 10.9 % | **18.7 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna meteostanica, prehľadný a diza... | 60.00 € | **64.00 €** | 16.9 % | **24.7 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka USB-C, 90W, PD fast charger | 13.00 € | **16.90 €** | 12.3 % | **46.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| TP-link Tapo L535E | 19.90 € | **23.50 €** | 11.0 % | **31.1 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 10.90 € | **14.50 €** | 7.0 % | **42.4 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 59.50 € | **63.00 €** | 10.5 % | **17.0 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Amica KF 17191 | 26.90 € | **30.00 €** | 10.0 % | **22.7 %** | 29.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA TW-E5B BROWN | 135.90 € | **139.00 €** | 10.1 % | **12.6 %** | 139.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA TW-E5B GRAY | 135.90 € | **139.00 €** | 10.1 % | **12.6 %** | 139.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 8.80 € | **10.90 €** | 17.5 % | **45.5 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 52127 Set Clean Twist M Ergo | 41.90 € | **43.90 €** | 10.3 % | **15.6 %** | 41.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.00 € | **69.00 €** | 5.4 % | **8.5 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 25.00 € | **27.00 €** | 25.3 % | **35.3 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 18.50 € | **20.50 €** | 29.8 % | **43.8 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.90 € | **7.70 €** | 11.0 % | **44.9 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 9.90 € | **11.50 €** | 19.1 % | **38.3 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 30.00 € | **31.50 €** | 14.9 % | **20.7 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 17.00 € | **18.50 €** | 27.7 % | **39.0 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 10.00 € | **11.50 €** | 22.8 % | **41.2 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 12.00 € | **13.50 €** | 30.8 % | **47.1 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 11.50 € | **13.00 €** | 7.2 % | **21.2 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.00 € | **25.50 €** | 12.3 % | **19.3 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 112.50 € | **113.90 €** | 10.2 % | **11.6 %** | 113.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 12.50 € | **13.90 €** | 8.2 % | **20.3 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 12.50 € | **13.90 €** | 25.8 % | **39.9 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 23310-56/RH | 44.50 € | **45.90 €** | 10.9 % | **14.4 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 20.50 € | **21.90 €** | 16.8 % | **24.8 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.3 % | **16.5 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| KOMA RK01 - Univerzální rotační kartáč | 17.90 € | **19.00 €** | 10.8 % | **17.6 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 9.80 € | **10.90 €** | 31.9 % | **46.7 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 9.80 € | **10.90 €** | 24.1 % | **38.0 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| MAXXO DH 919 Extra Tea | 11.50 € | **12.50 €** | 14.3 % | **24.2 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 21391-56/RH | 49.90 € | **50.90 €** | 10.4 % | **12.6 %** | 50.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 0028 92020 | 67.00 € | **68.00 €** | 10.2 % | **11.8 %** | 68.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZHM2459S | 38.50 € | **39.50 €** | 11.1 % | **14.0 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E200SM | 16.50 € | **17.50 €** | 11.5 % | **18.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 35.50 € | **36.50 €** | 36.0 % | **39.8 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 27.90 € | **28.90 €** | 30.4 % | **35.0 %** | 27.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 18.50 € | **19.50 €** | 7.7 % | **13.6 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 21.90 € | **22.90 €** | 18.3 % | **23.7 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 11.50 € | **12.50 €** | 31.3 % | **42.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.50 € | **47.50 €** | 34.4 % | **37.3 %** | 46.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.00 € | **17.00 €** | 22.1 % | **29.8 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor úniku horľavých plynov. Polovodičov... | 12.90 € | **13.90 €** | 18.6 % | **27.8 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.50 € | **17.50 €** | 35.4 % | **43.6 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 40.90 € | **41.90 €** | 31.6 % | **34.9 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 19.50 € | **20.50 €** | 32.0 % | **38.8 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 28.00 € | **29.00 €** | 14.6 % | **18.7 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 12.90 € | **13.90 €** | 11.7 % | **20.3 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 53.50 € | **54.50 €** | 23.2 % | **25.5 %** | 53.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 32.50 € | **33.50 €** | 15.1 % | **18.6 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 69.90 € | **70.90 €** | 12.4 % | **14.1 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 14.00 € | **15.00 €** | 45.0 % | **55.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **38.50 €** | 10.7 % | **13.6 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 13.00 € | **14.00 €** | 7.2 % | **15.4 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 25.50 € | **26.50 €** | 37.3 % | **42.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.00 € | **114.90 €** | 9.6 % | **10.4 %** | 114.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.00 € | **13.90 €** | 19.8 % | **28.1 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.00 € | **14.90 €** | 26.3 % | **34.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.00 € | **14.90 €** | 14.3 % | **21.6 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.00 € | **13.90 €** | 20.2 % | **28.6 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.00 € | **20.90 €** | 31.8 % | **37.7 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.00 € | **16.90 €** | 20.1 % | **26.9 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 26.00 € | **26.90 €** | 14.4 % | **18.3 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 24.00 € | **24.90 €** | 24.0 % | **28.7 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.00 € | **21.90 €** | 30.5 % | **36.1 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.10 € | **4.80 €** | 6.5 % | **24.7 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 556.90 € | **557.50 €** | 6.6 % | **6.7 %** | 556.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 32.90 € | **33.50 €** | 31.1 % | **33.4 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 51.90 € | **52.50 €** | 31.7 % | **33.2 %** | 51.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.90 € | **33.50 €** | 13.8 % | **15.9 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 35.90 € | **36.50 €** | 32.4 % | **34.6 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 21.90 € | **22.50 €** | 8.2 % | **11.2 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 56.90 € | **57.50 €** | 31.0 % | **32.4 %** | 56.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 27.90 € | **28.50 €** | 13.6 % | **16.0 %** | 27.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy OFFICE M40 Vertical | 13.90 € | **14.50 €** | 11.3 % | **16.1 %** | 14.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 15.90 € | **16.50 €** | 20.6 % | **25.1 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.90 € | **12.50 €** | 17.6 % | **23.5 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 13.90 € | **14.50 €** | 37.8 % | **43.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SAMSUNG MS23K3555EK/EO | 118.50 € | **119.00 €** | 10.1 % | **10.6 %** | 118.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 30.50 € | **31.00 €** | 10.3 % | **12.1 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer ZCK7650 | 32.50 € | **33.00 €** | 10.7 % | **12.4 %** | 32.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| KOMA HPU1 - Univerzální hubice | 12.50 € | **13.00 €** | 13.3 % | **17.8 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Combi Clean M + náhr. Static | 21.00 € | **21.50 €** | 10.1 % | **12.8 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| YAMAHA YWA-10 BL | 56.50 € | **57.00 €** | 10.5 % | **11.5 %** | 57.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.50 € | **15.00 €** | 22.4 % | **26.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.00 € | **12.50 €** | 28.9 % | **34.2 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 20.50 € | **21.00 €** | 23.4 % | **26.4 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.50 € | **16.00 €** | 24.8 % | **28.8 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 14.00 € | **14.50 €** | 15.2 % | **19.3 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 16.00 € | **16.50 €** | 8.9 % | **12.4 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 15.50 € | **16.00 €** | 12.3 % | **15.9 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 61.50 € | **62.00 €** | 12.2 % | **13.1 %** | 61.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 137 | 33.00 € | **33.50 €** | 9.5 % | **11.1 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 13.50 € | **14.00 €** | 13.4 % | **17.6 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 32.50 € | **33.00 €** | 9.8 % | **11.5 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.30 € | **5.80 €** | 21.0 % | **32.5 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.50 € | **5.00 €** | 8.9 % | **21.0 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 16.00 € | **16.50 €** | 32.2 % | **36.3 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 15.50 € | **16.00 €** | 10.3 % | **13.8 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (žltý) | 20.50 € | **21.00 €** | 6.9 % | **9.5 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (zelený) | 20.50 € | **21.00 €** | 6.9 % | **9.5 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir T4n Nova Lite (ružový) | 20.50 € | **21.00 €** | 6.9 % | **9.5 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 21.50 € | **22.00 €** | 34.0 % | **37.2 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 105.00 € | **105.50 €** | 9.6 % | **10.1 %** | 105.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 122.50 € | **122.90 €** | 16.0 % | **16.4 %** | 122.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **64.90 €** | 5.5 % | **6.1 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 101 | 157.50 € | **157.90 €** | 7.6 % | **7.9 %** | 157.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **10.90 €** | 26.5 % | **31.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 5.50 € | **5.90 €** | 10.4 % | **18.4 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.00 € | **5.40 €** | 34.6 % | **45.4 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.0 % | **13.8 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor Premium, Find My kompatibilný | 12.50 € | **12.90 €** | 23.5 % | **27.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.20 € | **9.60 €** | 31.5 % | **37.2 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.50 € | **14.90 €** | 6.5 % | **9.4 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.50 € | **12.90 €** | 15.0 % | **18.6 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.60 € | **9.00 €** | 5.6 % | **10.5 %** | 8.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.50 € | **5.90 €** | 35.5 % | **45.4 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.60 € | **10.00 €** | 21.8 % | **26.8 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.10 € | **6.50 €** | 33.3 % | **42.1 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.60 € | **2.00 €** | 12.1 % | **40.2 %** | 1.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 4.90 € | **5.30 €** | 27.7 % | **38.1 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.20 € | **7.60 €** | 29.8 % | **37.0 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.70 € | **7.10 €** | 28.5 % | **36.1 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.70 € | **6.10 €** | 19.1 % | **27.5 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje SIH1800BLT | 19.50 € | **19.90 €** | 12.5 % | **14.8 %** | 19.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zelmer rychlovarná konvice ZCK1275 | 39.50 € | **39.90 €** | 10.4 % | **11.6 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 23.50 € | **23.90 €** | 43.8 % | **46.2 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 27.50 € | **27.90 €** | 13.0 % | **14.7 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio Fx 85 Es Plus 2E | 20.50 € | **20.90 €** | 12.4 % | **14.6 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 334.50 € | **334.90 €** | 7.0 % | **7.1 %** | 334.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.60 € | **4.90 €** | 6.5 % | **13.5 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.60 € | **8.90 €** | 28.8 % | **33.3 %** | 8.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.10 € | **4.40 €** | 6.2 % | **13.9 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.20 € | **8.50 €** | 31.0 % | **35.8 %** | 8.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 3.90 € | **4.20 €** | 14.5 % | **23.3 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 2.40 € | **2.70 €** | 19.7 % | **34.7 %** | 2.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.40 € | **2.70 €** | 12.8 % | **26.9 %** | 2.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.40 € | **3.70 €** | 33.5 % | **45.3 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.30 € | **3.60 €** | 14.2 % | **24.5 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.30 € | **1.60 €** | 11.3 % | **36.9 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.50 € | **1.80 €** | 7.9 % | **29.5 %** | 1.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 0.90 € | **1.20 €** | 10.9 % | **47.8 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 4.80 € | **5.10 €** | 35.5 % | **44.0 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 7.80 € | **8.10 €** | 12.6 % | **17.0 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 3.60 € | **3.90 €** | 13.4 % | **22.9 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.30 € | **4.60 €** | 29.5 % | **38.5 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.70 € | **4.00 €** | 26.4 % | **36.6 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.60 € | **3.90 €** | 22.5 % | **32.7 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.30 € | **5.60 €** | 27.9 % | **35.1 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 5.80 € | **6.10 €** | 29.2 % | **35.9 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.50 € | **7.80 €** | 28.6 % | **33.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.70 € | **5.00 €** | 28.2 % | **36.4 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.40 € | **4.70 €** | 28.2 % | **37.0 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **5.30 €** | 28.2 % | **35.9 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.60 € | **1.90 €** | 22.7 % | **45.7 %** | 1.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.20 € | **4.50 €** | 27.9 % | **37.0 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.30 € | **9.60 €** | 15.6 % | **19.3 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.40 € | **9.70 €** | 32.0 % | **36.2 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 5.50 € | **5.70 €** | 39.3 % | **44.4 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.00 € | **2.20 €** | 22.3 % | **34.5 %** | 2.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, biely | 2.40 € | **2.60 €** | 25.1 % | **35.5 %** | 2.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, čierny | 2.40 € | **2.60 €** | 25.1 % | **35.5 %** | 2.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 7.00 € | **7.20 €** | 12.2 % | **15.5 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 5.30 € | **5.50 €** | 13.4 % | **17.7 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 2.90 € | **3.10 €** | 8.7 % | **16.1 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.00 € | **4.20 €** | 29.6 % | **36.0 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 5.50 € | **5.70 €** | 30.7 % | **35.5 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.80 € | **4.00 €** | 27.1 % | **33.8 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.80 € | **4.00 €** | 5.8 % | **11.4 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 2,5A, biela | 1.00 € | **1.20 €** | 12.9 % | **35.5 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, biela | 1.70 € | **1.90 €** | 21.2 % | **35.5 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.20 € | **1.40 €** | 13.4 % | **32.4 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka, 16A, biela, vypínač | 1.60 € | **1.80 €** | 19.3 % | **34.3 %** | 1.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.20 € | **2.40 €** | 32.5 % | **44.5 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10A, biely-sivý | 2.70 € | **2.90 €** | 14.3 % | **22.8 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 7.90 € | **8.10 €** | 14.1 % | **17.0 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 5.90 € | **6.10 €** | 9.5 % | **13.2 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny týždenný časový spínač, 16 režimov... | 7.90 € | **8.10 €** | 33.3 % | **36.6 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.90 € | **8.10 €** | 34.6 % | **38.1 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.20 € | **8.30 €** | 12.4 % | **13.8 %** | 8.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 6.6 % | **7.1 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 27.90 € | **28.00 €** | 13.0 % | **13.4 %** | 27.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 30.90 € | **31.00 €** | 16.3 % | **16.6 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 615W Precise | 54.90 € | **55.00 €** | 5.3 % | **5.5 %** | 54.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5X/1 | 47.90 € | **48.00 €** | 6.6 % | **6.8 %** | 47.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.60 € | **6.70 €** | 28.7 % | **30.6 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.50 € | **3.60 €** | 48.2 % | **52.4 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.50 € | **1.60 €** | 28.4 % | **36.9 %** | 1.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.50 € | **2.60 €** | 29.5 % | **34.6 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, 20 - 200A | 5.00 € | **5.10 €** | 4.5 % | **6.6 %** | 5.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 8.3 % | **9.3 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely | 2.20 € | **2.30 €** | 29.6 % | **35.5 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.10 € | **9.20 €** | 38.0 % | **39.5 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.50 € | **9.60 €** | 29.8 % | **31.2 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysávač TP-Link Tapo RV20 Max White robotický s mopo... | 123.90 € | **124.00 €** | 6.2 % | **6.3 %** | 123.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 228.90 € | **229.00 €** | 8.0 % | **8.0 %** | 228.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1801 | 237.90 € | **238.00 €** | 42881.0 % | **42899.1 %** | 237.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (837)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| 3D skener Creality CR-Scan Raptor Pro | 1834.50 € | **1675.50 €** | 15.0 % | **5.0 %** | 800.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 256GB Graphite | 2200.50 € | **2100.50 €** | 10.0 % | **5.0 %** | 1385.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI Cyborg 9S7-15QL42-080 | 1857.50 € | **1772.90 €** | 10.0 % | **5.0 %** | 1412.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI Katana 17 HX (B14WGK-282CZ) | 1637.90 € | **1563.50 €** | 10.0 % | **5.0 %** | 1267.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1549.50 € | **1475.90 €** | 10.3 % | **5.0 %** | 924.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI Katana 17 HX (B14WEK-267CZ) | 1546.50 € | **1476.50 €** | 10.0 % | **5.0 %** | 1099.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro 256GB Cosmic Orange | 1360.50 € | **1298.50 €** | 10.0 % | **5.0 %** | 1071.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Saeco Aurora B2 | 1238.50 € | **1182.00 €** | 10.0 % | **5.0 %** | 999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Photon P1 | 639.00 € | **583.50 €** | 15.0 % | **5.0 %** | 553.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 508.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 22 GEN 3 (GS2203) | 542.90 € | **495.90 €** | 15.0 % | **5.1 %** | 410.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **461.50 €** | 15.0 % | **5.1 %** | 421.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CCGMEE9025PX/E | 817.50 € | **779.90 €** | 10.1 % | **5.0 %** | 719.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Volant MOZA RACING pre Lamborghini Revuelto | 431.00 € | **393.50 €** | 15.0 % | **5.0 %** | 369.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 428.00 € | **391.50 €** | 14.9 % | **5.1 %** | 358.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2372.90 € | **2338.90 €** | 6.5 % | **5.0 %** | 1972.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 176.50 € | **142.50 €** | 32.0 % | **6.6 %** | 142.70 € | stávame sa najlacnejší |
| PS5 PlayStation®5 Console–1TB | 727.50 € | **694.50 €** | 10.0 % | **5.0 %** | 599.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **309.50 €** | 15.0 % | **5.1 %** | 293.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3BCNA324HS | 631.50 € | **602.50 €** | 10.1 % | **5.0 %** | 587.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **305.50 €** | 14.9 % | **5.1 %** | 280.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Pro 8/256GB (ZAHD0072CZ) | 603.90 € | **576.50 €** | 10.0 % | **5.0 %** | 518.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-C603 BLACK | 596.50 € | **569.50 €** | 10.1 % | **5.1 %** | 526.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Ultima Nova C40 | 301.00 € | **274.90 €** | 15.0 % | **5.0 %** | 267.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Pro 8/128GB (ZAHD0017CZ) | 563.00 € | **537.50 €** | 10.0 % | **5.0 %** | 502.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iiyama ProLite XCB4594DQSU-B1 | 538.50 € | **513.90 €** | 10.0 % | **5.0 %** | 502.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620AAXL4 | 640.50 € | **616.50 €** | 10.1 % | **5.9 %** | 616.80 € | stávame sa najlacnejší |
| Lenovo Yoga Tab 12/256GB (ZAG60160CZ) | 525.90 € | **502.00 €** | 10.0 % | **5.0 %** | 479.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **252.50 €** | 15.0 % | **5.2 %** | 228.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BR 10N3BX-S | 490.00 € | **467.90 €** | 10.0 % | **5.0 %** | 439.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Tab Plus 8/256GB (ZAHT0126CZ) | 489.50 € | **467.50 €** | 10.0 % | **5.1 %** | 414.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AW | 478.50 € | **456.50 €** | 10.1 % | **5.0 %** | 427.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 403.00 € | **381.00 €** | 11.1 % | **5.0 %** | 372.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AURZEN Boom Mini projektor | 250.50 € | **229.00 €** | 15.0 % | **5.2 %** | 229.10 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 305.50 € | **284.00 €** | 15.1 % | **7.0 %** | 284.20 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 474.50 € | **453.00 €** | 10.0 % | **5.0 %** | 453.36 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 659.90 € | **638.50 €** | 10.0 % | **6.4 %** | 638.89 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 601.50 € | **580.50 €** | 10.1 % | **6.2 %** | 580.73 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 496.90 € | **476.00 €** | 10.1 % | **5.5 %** | 476.10 € | stávame sa najlacnejší |
| Lenovo Tab Plus 8/128GB (ZAHT0170CZ) | 448.90 € | **428.50 €** | 10.1 % | **5.1 %** | 375.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Pro 8/12GB (ZAHD0103CZ) | 448.90 € | **428.50 €** | 10.1 % | **5.1 %** | 418.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 9N2BR-S | 434.90 € | **414.90 €** | 10.1 % | **5.0 %** | 404.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 98.50 € | **78.50 €** | 44.0 % | **14.7 %** | 78.90 € | stávame sa najlacnejší |
| Candy GD 10N3B-S | 468.90 € | **449.00 €** | 10.1 % | **5.4 %** | 449.10 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 410.90 € | **392.50 €** | 10.0 % | **5.0 %** | 265.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **191.50 €** | 15.0 % | **5.1 %** | 188.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 188.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A6 bílá | 483.50 € | **465.50 €** | 10.1 % | **6.0 %** | 465.82 € | stávame sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 161.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **176.00 €** | 15.1 % | **5.0 %** | 154.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA TR 110 TW | 362.50 € | **345.90 €** | 10.1 % | **5.1 %** | 287.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BOS6737E20FBG | 357.50 € | **341.50 €** | 10.1 % | **5.1 %** | 304.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE N619EAW4 | 392.90 € | **376.90 €** | 10.1 % | **5.6 %** | 376.91 € | stávame sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70118CZ | 341.50 € | **325.90 €** | 10.0 % | **5.0 %** | 268.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70373CZ | 342.50 € | **326.90 €** | 10.0 % | **5.0 %** | 284.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **36.90 €** | 50.5 % | **5.7 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BR 26SSB6G-S | 347.50 € | **332.00 €** | 10.1 % | **5.2 %** | 332.10 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 413.50 € | **398.00 €** | 10.1 % | **6.0 %** | 398.49 € | stávame sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **162.90 €** | 15.0 % | **5.2 %** | 138.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 179.00 € | **163.90 €** | 14.9 % | **5.2 %** | 152.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5390 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5396 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 49B8G-S | 331.90 € | **316.90 €** | 10.0 % | **5.1 %** | 309.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool OMSR58CU1SX | 344.90 € | **329.90 €** | 10.0 % | **5.2 %** | 330.00 € | stávame sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **229.50 €** | 15.1 % | **8.0 %** | 229.69 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.00 € | **302.50 €** | 11.8 % | **6.7 %** | 302.51 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 312.50 € | **298.50 €** | 10.1 % | **5.1 %** | 263.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta GZ5436E0 | 299.90 € | **285.90 €** | 10.1 % | **5.0 %** | 255.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Router GL.iNet Puli AX 5G NR | 522.90 € | **509.00 €** | 15.0 % | **12.0 %** | 509.29 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 297.50 € | **283.90 €** | 10.1 % | **5.1 %** | 280.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BMTD37146W | 397.50 € | **383.90 €** | 10.0 % | **6.2 %** | 384.00 € | stávame sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO X6 | 125.50 € | **111.90 €** | 18.0 % | **5.2 %** | 99.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FINLUX 65FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 672.00 € | **658.50 €** | 5429.8 % | **5318.7 %** | 658.90 € | stávame sa najlacnejší |
| Candy GD 49B8-S | 292.90 € | **279.50 €** | 10.1 % | **5.0 %** | 260.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect UPi B7 10.1" 1920x1200 60Hz Portable Monitor | 151.90 € | **138.90 €** | 15.1 % | **5.3 %** | 138.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LXB1SE11W0 | 273.50 € | **260.90 €** | 10.2 % | **5.1 %** | 243.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO BT 2 gray 0001/3973 reproduktor... | 167.50 € | **154.90 €** | 13.7 % | **5.2 %** | 144.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1304.90 € | **1292.50 €** | 11.2 % | **10.1 %** | 1292.73 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 272.00 € | **259.90 €** | 10.0 % | **5.1 %** | 259.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6342XOK | 266.50 € | **254.50 €** | 10.1 % | **5.2 %** | 195.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 325 | 263.50 € | **251.50 €** | 10.2 % | **5.1 %** | 229.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 132.50 € | **120.50 €** | 24.5 % | **13.2 %** | 120.88 € | stávame sa najlacnejší |
| Gorenje NRK6182PW4 | 359.50 € | **347.90 €** | 10.1 % | **6.5 %** | 348.00 € | stávame sa najlacnejší |
| Redmi Pad 2 4/256GB zelená (79232) | 262.00 € | **250.50 €** | 10.0 % | **5.2 %** | 185.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 169.50 € | **158.00 €** | 18.5 % | **10.5 %** | 158.01 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 310.50 € | **299.00 €** | 10.0 % | **5.9 %** | 299.38 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 310.50 € | **299.00 €** | 10.0 % | **5.9 %** | 299.38 € | stávame sa najlacnejší |
| ELECTROLUX 300 EFC226R | 253.90 € | **242.50 €** | 10.1 % | **5.1 %** | 236.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Perfection Cappuccino | 211.90 € | **200.50 €** | 18.5 % | **12.1 %** | 200.90 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 355.50 € | **344.50 €** | 10.0 % | **6.6 %** | 344.89 € | stávame sa najlacnejší |
| Concept IDV5160wh | 364.50 € | **354.00 €** | 10.1 % | **6.9 %** | 354.40 € | stávame sa najlacnejší |
| Samsung The Frame QE43LS03H | 791.50 € | **781.00 €** | 10.0 % | **8.6 %** | 781.47 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 280.90 € | **270.50 €** | 10.1 % | **6.1 %** | 270.79 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 344.90 € | **334.50 €** | 10.1 % | **6.8 %** | 334.90 € | stávame sa najlacnejší |
| BEKO HII64500UFT | 374.90 € | **364.50 €** | 10.1 % | **7.0 %** | 364.90 € | stávame sa najlacnejší |
| Vibračná platforma MERACH MR-2440P1-EU (ružová) | 121.00 € | **110.90 €** | 14.9 % | **5.3 %** | 51.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 374.90 € | **364.90 €** | 7.9 % | **5.1 %** | 317.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab 4/128GB (ZAFR0358CZ) | 220.00 € | **210.00 €** | 10.0 % | **5.0 %** | 179.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Magic X-treme 7235 90000 černý/modrý | 339.50 € | **329.50 €** | 10.1 % | **6.8 %** | 329.60 € | stávame sa najlacnejší |
| GORENJE GS620C10S | 354.50 € | **344.50 €** | 10.1 % | **7.0 %** | 344.60 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.15 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 345.50 € | **335.50 €** | 10.1 % | **6.9 %** | 335.90 € | stávame sa najlacnejší |
| Electrolux EHF6547FXK | 225.90 € | **216.00 €** | 10.2 % | **5.4 %** | 216.23 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 351.90 € | **342.00 €** | 10.1 % | **7.0 %** | 342.20 € | stávame sa najlacnejší |
| Epson EcoTank L3310 | 205.50 € | **196.00 €** | 10.1 % | **5.0 %** | 179.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT96425VD | 262.50 € | **253.00 €** | 10.1 % | **6.1 %** | 253.18 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1390.90 € | **1381.50 €** | 10.0 % | **9.3 %** | 1381.89 € | stávame sa najlacnejší |
| Electrolux EUOC94DB | 212.90 € | **203.50 €** | 10.1 % | **5.2 %** | 166.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 425.90 € | **416.50 €** | 10.0 % | **7.6 %** | 416.62 € | stávame sa najlacnejší |
| DOMO DO9286IB | 257.90 € | **248.50 €** | 10.0 % | **6.0 %** | 248.79 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 333.90 € | **324.50 €** | 10.0 % | **6.9 %** | 324.84 € | stávame sa najlacnejší |
| Creality CR-Scan Raptor 3D Scanner | 876.50 € | **867.50 €** | 6.1 % | **5.0 %** | 800.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 204.50 € | **195.50 €** | 10.1 % | **5.3 %** | 167.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 28 | 193.50 € | **184.50 €** | 10.3 % | **5.2 %** | 160.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal CY851130 | 197.50 € | **188.50 €** | 10.1 % | **5.1 %** | 167.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovačka G21 Nefrit | 126.50 € | **117.50 €** | 18.0 % | **9.6 %** | 117.90 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 184.50 € | **175.90 €** | 10.1 % | **5.0 %** | 159.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 9.7 4/128GB Gray (76907) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 183.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HIF-8892 EBT Multimediální HI-F | 191.50 € | **182.90 €** | 10.1 % | **5.1 %** | 182.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria Jupio Alkaline AA balenie 100ks | 44.00 € | **35.50 €** | 34.5 % | **8.5 %** | 35.75 € | stávame sa najlacnejší |
| Epson EcoTank L1350 | 186.90 € | **178.50 €** | 10.0 % | **5.1 %** | 162.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210A | 221.90 € | **213.50 €** | 10.1 % | **5.9 %** | 213.75 € | stávame sa najlacnejší |
| Maxxo Chamber Line 70 | 360.90 € | **352.50 €** | 10.0 % | **7.4 %** | 352.82 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 507.90 € | **499.50 €** | 9.6 % | **7.8 %** | 499.90 € | stávame sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 110.00 € | **101.90 €** | 13.6 % | **5.2 %** | 92.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 110.00 € | **101.90 €** | 13.6 % | **5.2 %** | 92.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 2-pack) | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 133.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-270B Gramofon hnědý | 177.50 € | **169.50 €** | 10.1 % | **5.2 %** | 153.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TV držák Kruger&Matz KM1310  (43-100'' 80kg) univerz... | 60.90 € | **52.90 €** | 20.9 % | **5.1 %** | 51.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 150.90 € | **142.90 €** | 11.1 % | **5.2 %** | 141.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **87.50 €** | 14.9 % | **5.3 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **86.90 €** | 15.2 % | **5.5 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 665.50 € | **657.50 €** | 12.8 % | **11.4 %** | 657.51 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 193.00 € | **185.00 €** | 9.7 % | **5.1 %** | 185.09 € | stávame sa najlacnejší |
| Projektor JMGO PicoPlay+ | 386.90 € | **378.90 €** | 7.7 % | **5.5 %** | 379.00 € | stávame sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 155.00 € | **147.00 €** | 11.0 % | **5.3 %** | 147.19 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.90 € | **165.00 €** | 10.1 % | **5.1 %** | 151.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualZone Q787 XXL Deluxe | 166.50 € | **158.90 €** | 10.2 % | **5.2 %** | 137.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 223.50 € | **216.00 €** | 13.5 % | **9.7 %** | 216.27 € | stávame sa najlacnejší |
| Niceboy Hurricane H7 Plus | 163.90 € | **156.50 €** | 10.1 % | **5.1 %** | 129.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 688.90 € | **681.50 €** | 6.2 % | **5.0 %** | 660.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor BlitzWolf BW-V11 | 332.90 € | **325.50 €** | 11.0 % | **8.6 %** | 325.83 € | stávame sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.00 € | **80.90 €** | 14.7 % | **5.4 %** | 78.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44GW | 206.00 € | **198.90 €** | 10.0 % | **6.2 %** | 198.96 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT černé | 159.90 € | **152.90 €** | 10.1 % | **5.3 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 159.90 € | **152.90 €** | 10.1 % | **5.3 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 84.50 € | **77.50 €** | 15.2 % | **5.6 %** | 70.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L1630W | 158.90 € | **151.90 €** | 10.0 % | **5.2 %** | 148.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 10002 | 148.50 € | **141.50 €** | 10.3 % | **5.1 %** | 137.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S60... | 82.50 € | **75.50 €** | 14.8 % | **5.1 %** | 72.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 11000 | 160.50 € | **153.50 €** | 10.1 % | **5.3 %** | 152.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CH 64 XB | 159.50 € | **152.50 €** | 10.1 % | **5.2 %** | 151.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI G32C4X | 152.90 € | **145.90 €** | 10.1 % | **5.1 %** | 145.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (biely) | 189.50 € | **182.50 €** | 15.1 % | **10.8 %** | 182.70 € | stávame sa najlacnejší |
| Strong SRT24HG4723C | 145.90 € | **139.00 €** | 10.2 % | **5.0 %** | 138.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT  Regulus PowerVac 2in1 11925 | 144.50 € | **137.90 €** | 10.0 % | **5.0 %** | 124.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT32HG6733C | 151.00 € | **144.50 €** | 10.0 % | **5.3 %** | 143.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA420 Deodorizačný modul... | 42.00 € | **35.50 €** | 33.9 % | **13.1 %** | 35.75 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Pro Combo | 786.50 € | **780.00 €** | 15.0 % | **14.1 %** | 780.26 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 318.50 € | **312.00 €** | 10.1 % | **7.9 %** | 312.40 € | stávame sa najlacnejší |
| Strong SRT24HE4023C | 139.90 € | **133.50 €** | 10.1 % | **5.1 %** | 122.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HRA-1782ND+BT Rádio s přehrávač | 143.90 € | **137.50 €** | 10.2 % | **5.3 %** | 128.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 105.90 € | **99.50 €** | 12.2 % | **5.4 %** | 98.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 251.90 € | **245.50 €** | 12.1 % | **9.2 %** | 245.90 € | stávame sa najlacnejší |
| Gorenje GEC5C41SG | 319.90 € | **313.50 €** | 10.1 % | **7.9 %** | 313.90 € | stávame sa najlacnejší |
| Merač oxidu uhoľnatého Uni-T UT337A | 74.00 € | **67.90 €** | 14.8 % | **5.3 %** | 63.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko FRL5388B | 134.90 € | **128.90 €** | 10.2 % | **5.3 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5RCNA416HXBR | 444.00 € | **438.00 €** | 6.9 % | **5.5 %** | 438.16 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 285.50 € | **279.50 €** | 10.0 % | **7.7 %** | 279.80 € | stávame sa najlacnejší |
| Candy GD 17SSB7-S | 308.90 € | **303.00 €** | 10.1 % | **8.0 %** | 303.21 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 299.90 € | **294.00 €** | 10.1 % | **8.0 %** | 294.30 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 680.50 € | **674.90 €** | 10.0 % | **9.1 %** | 674.99 € | stávame sa najlacnejší |
| Televes 552220 Crocodile 5G LTE700 domovní zesilovač | 38.50 € | **32.90 €** | 24.3 % | **6.2 %** | 29.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 460 | 120.50 € | **114.90 €** | 10.4 % | **5.3 %** | 101.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Soundbar JBL Bar 2.0 All-In-One (MK2) | 198.50 € | **192.90 €** | 8.2 % | **5.1 %** | 189.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 8401SE | 128.50 € | **122.90 €** | 10.1 % | **5.3 %** | 120.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal EY8328E0 | 124.00 € | **118.50 €** | 10.0 % | **5.1 %** | 114.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C100 IP, FHD, WiFi, prísvit | 29.00 € | **23.50 €** | 29.8 % | **5.1 %** | 23.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT32HH5553 | 122.50 € | **117.00 €** | 10.0 % | **5.1 %** | 117.30 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 210.50 € | **205.00 €** | 10.2 % | **7.3 %** | 205.39 € | stávame sa najlacnejší |
| Samsung VG-SCFC55SGMXC | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 118.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 75.90 € | **70.50 €** | 18.5 % | **10.1 %** | 70.90 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.50 € | **102.50 €** | 10.2 % | **5.0 %** | 91.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-6 litinové neoprenové HE... | 37.50 € | **32.50 €** | 22.9 % | **6.5 %** | 27.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK812110 | 109.90 € | **104.90 €** | 10.2 % | **5.2 %** | 104.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Midland BTR1 Advanced, Single | 192.90 € | **187.90 €** | 10.1 % | **7.2 %** | 188.00 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 27.50 € | **22.50 €** | 37.8 % | **12.7 %** | 22.65 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA100 sada pre výmenu vy... | 24.00 € | **19.00 €** | 33.4 % | **5.6 %** | 19.19 € | stávame sa najlacnejší |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 127.50 € | **122.50 €** | 15.2 % | **10.7 %** | 122.75 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 50.50 € | **45.50 €** | 18.4 % | **6.6 %** | 45.79 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 50.50 € | **45.50 €** | 18.4 % | **6.6 %** | 45.79 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 117.50 € | **112.50 €** | 15.2 % | **10.3 %** | 112.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **10.50 €** | 56.3 % | **5.9 %** | 10.90 € | stávame sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 123.90 € | **119.00 €** | 10.2 % | **5.9 %** | 119.05 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.90 € | **239.00 €** | 10.0 % | **7.8 %** | 239.20 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 251.90 € | **247.00 €** | 10.1 % | **7.9 %** | 247.30 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 505.90 € | **501.00 €** | 10.0 % | **8.9 %** | 501.50 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **8.80 €** | 121.3 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 36.50 € | **31.90 €** | 21.6 % | **6.3 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CMWA23TNDB | 97.50 € | **92.90 €** | 10.3 % | **5.1 %** | 89.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 3601 | 101.50 € | **96.90 €** | 10.0 % | **5.0 %** | 95.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 73.50 € | **68.90 €** | 20.2 % | **12.7 %** | 69.00 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 181.50 € | **176.90 €** | 10.1 % | **7.3 %** | 177.00 € | stávame sa najlacnejší |
| Tesla SlowCook S900 Plus | 92.50 € | **88.00 €** | 10.5 % | **5.1 %** | 77.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer BE3600 WiFi 7 Router | 95.50 € | **91.00 €** | 10.2 % | **5.0 %** | 83.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 24440-56 | 109.00 € | **104.50 €** | 10.0 % | **5.5 %** | 99.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GOOLOO GP3000 59,2 Wh štartér | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 48.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 20 | 233.50 € | **229.00 €** | 9.4 % | **7.2 %** | 229.13 € | stávame sa najlacnejší |
| CrockPot CSC062X | 162.50 € | **158.00 €** | 10.1 % | **7.1 %** | 158.29 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 24.00 € | **19.50 €** | 33.4 % | **8.4 %** | 19.83 € | stávame sa najlacnejší |
| LaserPecker LX2 40W laserový gravír | 1834.90 € | **1830.50 €** | 12.3 % | **12.0 %** | 1830.67 € | stávame sa najlacnejší |
| DOMO DO42102SV | 99.90 € | **95.50 €** | 10.2 % | **5.3 %** | 92.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun CG9043 | 219.90 € | **215.50 €** | 10.1 % | **7.9 %** | 215.60 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.90 € | **122.50 €** | 10.2 % | **6.4 %** | 122.88 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 73.90 € | **69.50 €** | 30.8 % | **23.0 %** | 69.90 € | stávame sa najlacnejší |
| Výrobok X.A.3 | 53.90 € | **49.50 €** | 15.0 % | **5.6 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 835.00 € | **830.90 €** | 8.8 % | **8.2 %** | 830.95 € | stávame sa najlacnejší |
| ROWENTA RO 3923 EA | 79.50 € | **75.50 €** | 10.6 % | **5.1 %** | 66.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER HL-1110E | 92.90 € | **88.90 €** | 10.2 % | **5.5 %** | 80.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO6164EA | 142.50 € | **138.50 €** | 8.4 % | **5.4 %** | 134.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Stormy Home 0517 90000 | 79.50 € | **75.50 €** | 10.7 % | **5.1 %** | 74.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 102.00 € | **98.00 €** | 14.9 % | **10.4 %** | 98.03 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 242.90 € | **238.90 €** | 8.5 % | **6.7 %** | 239.00 € | stávame sa najlacnejší |
| Tefal GV 9620E0 | 374.00 € | **370.00 €** | 10.0 % | **8.8 %** | 370.21 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 179.50 € | **175.50 €** | 10.0 % | **7.6 %** | 175.80 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **15.50 €** | 36.9 % | **8.8 %** | 15.90 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **43.00 €** | 15.1 % | **5.3 %** | 43.46 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1453.90 € | **1450.00 €** | 8.2 % | **7.9 %** | 1450.09 € | stávame sa najlacnejší |
| Projektor AURZEN Boom Mini Black | 232.90 € | **229.00 €** | 15.1 % | **13.1 %** | 229.10 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.90 € | **129.00 €** | 10.3 % | **7.1 %** | 129.50 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Pro | 475.90 € | **472.00 €** | 8.1 % | **7.2 %** | 472.18 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 24 GS2401 | 552.90 € | **549.00 €** | 12.6 % | **11.8 %** | 549.20 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 413.90 € | **410.00 €** | 11.7 % | **10.6 %** | 410.21 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 448.90 € | **445.00 €** | 8.0 % | **7.1 %** | 445.21 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 21.50 € | **17.90 €** | 27.6 % | **6.2 %** | 17.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Mijia Smart Humidifier Pro | 80.50 € | **76.90 €** | 10.0 % | **5.1 %** | 60.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje MO 20 A3B | 76.50 € | **72.90 €** | 10.5 % | **5.3 %** | 65.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI7160BL | 78.50 € | **74.90 €** | 10.3 % | **5.3 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica LAI KJ2000W | 80.00 € | **76.50 €** | 10.0 % | **5.2 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 16.00 € | **12.50 €** | 36.8 % | **6.9 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 32.50 € | **29.00 €** | 43.8 % | **28.3 %** | 29.08 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 73.00 € | **69.50 €** | 14.9 % | **9.4 %** | 69.59 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **83.50 €** | 14.8 % | **10.2 %** | 83.65 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 416.00 € | **412.50 €** | 10.5 % | **9.5 %** | 412.68 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 30.50 € | **27.00 €** | 19.7 % | **5.9 %** | 27.24 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 44.00 € | **40.50 €** | 37.6 % | **26.7 %** | 40.79 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 47.00 € | **43.50 €** | 51.3 % | **40.0 %** | 43.90 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 102.00 € | **98.50 €** | 10.0 % | **6.3 %** | 98.90 € | stávame sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 110.90 € | **107.50 €** | 8.3 % | **5.0 %** | 100.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UTRAI T1 štartér do auta | 42.90 € | **39.50 €** | 15.2 % | **6.1 %** | 31.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 40.90 € | **37.50 €** | 15.3 % | **5.7 %** | 32.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **19.50 €** | 38.1 % | **17.6 %** | 19.90 € | stávame sa najlacnejší |
| Grafický tablet Huion H640P | 39.00 € | **35.90 €** | 14.3 % | **5.3 %** | 34.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 52.00 € | **48.90 €** | 22.5 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 65.00 € | **62.00 €** | 10.1 % | **5.0 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla SlowCook S800 Deluxe | 67.50 € | **64.50 €** | 10.6 % | **5.6 %** | 58.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 670NC white | 63.90 € | **60.90 €** | 10.5 % | **5.3 %** | 57.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6872 | 67.00 € | **64.00 €** | 10.1 % | **5.1 %** | 61.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meross MOP320MA-EU WiFi inteligentná napájacia lišta... | 34.50 € | **31.50 €** | 15.8 % | **5.7 %** | 29.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 13.50 € | **10.50 €** | 38.8 % | **7.9 %** | 9.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-NEVE 4K UHD Streaming Dongle | 68.50 € | **65.50 €** | 10.3 % | **5.4 %** | 65.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **32.90 €** | 15.0 % | **5.4 %** | 32.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung VG-SCFC32WTBXC | 61.90 € | **58.90 €** | 10.5 % | **5.1 %** | 58.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **118.00 €** | 14.9 % | **12.0 %** | 118.04 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 128.50 € | **125.50 €** | 10.4 % | **7.8 %** | 125.59 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 16.00 € | **13.00 €** | 38.4 % | **12.4 %** | 13.10 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 251.90 € | **248.90 €** | 10.2 % | **8.8 %** | 249.00 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 210.50 € | **207.50 €** | 10.0 % | **8.4 %** | 207.60 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-black (black) | 107.00 € | **104.00 €** | 14.8 % | **11.6 %** | 104.12 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 115.50 € | **112.50 €** | 11.5 % | **8.6 %** | 112.69 € | stávame sa najlacnejší |
| DOMO DO42329PC | 117.90 € | **115.00 €** | 10.2 % | **7.5 %** | 115.29 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 152.90 € | **150.00 €** | 10.0 % | **8.0 %** | 150.30 € | stávame sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 68.90 € | **66.00 €** | 10.5 % | **5.8 %** | 66.36 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 178.90 € | **176.00 €** | 10.1 % | **8.4 %** | 176.40 € | stávame sa najlacnejší |
| UTRAI JS1 Pro – štartér do auta | 68.90 € | **66.00 €** | 15.2 % | **10.4 %** | 66.47 € | stávame sa najlacnejší |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 10.90 € | **8.20 €** | 40.4 % | **5.7 %** | 7.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MultiCook RC400 Low Carb | 64.50 € | **61.90 €** | 10.1 % | **5.7 %** | 53.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXSH2002E | 57.50 € | **54.90 €** | 10.2 % | **5.2 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo čierne) | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 26.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **31.90 €** | 14.6 % | **6.0 %** | 30.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor elektromagnetického žiarenia FNIRSI ERD-10 | 32.50 € | **29.90 €** | 14.6 % | **5.4 %** | 29.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.50 € | **128.90 €** | 10.1 % | **7.9 %** | 129.00 € | stávame sa najlacnejší |
| Black&Decker BXDH12E | 167.50 € | **164.90 €** | 10.3 % | **8.6 %** | 165.00 € | stávame sa najlacnejší |
| Beko VRT76325VW | 169.50 € | **166.90 €** | 10.3 % | **8.6 %** | 167.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 135 | 60.00 € | **57.50 €** | 10.2 % | **5.6 %** | 46.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR TWIN - Black/Silver | 53.50 € | **51.00 €** | 10.2 % | **5.0 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný termostat Avatto ZWT100 3A Zigbee Tuya | 33.00 € | **30.50 €** | 14.3 % | **5.7 %** | 26.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 26.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Termostatická hlavica SONOFF ZigBee TRVZB, balenie p... | 63.50 € | **61.00 €** | 15.4 % | **10.9 %** | 61.21 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 175.50 € | **173.00 €** | 10.1 % | **8.5 %** | 173.50 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 197.90 € | **195.50 €** | 10.2 % | **8.9 %** | 195.59 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 211.90 € | **209.50 €** | 18.5 % | **17.1 %** | 209.90 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 211.90 € | **209.50 €** | 18.5 % | **17.1 %** | 209.90 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.90 € | **127.50 €** | 10.2 % | **8.2 %** | 127.90 € | stávame sa najlacnejší |
| Rowenta 3v1 RH5A32E0 | 119.90 € | **117.50 €** | 10.1 % | **7.9 %** | 117.90 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sprchový stan Trizand 23492 | 24.90 € | **22.50 €** | 18.5 % | **7.1 %** | 16.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 27.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **19.50 €** | 48.6 % | **32.3 %** | 19.67 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 16.90 € | **14.50 €** | 46.6 % | **25.8 %** | 14.90 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.90 € | **19.50 €** | 24.8 % | **11.1 %** | 19.90 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 11.90 € | **9.60 €** | 37.2 % | **10.7 %** | 9.70 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **7.80 €** | 38.7 % | **8.2 %** | 7.90 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 483.00 € | **480.90 €** | 5.5 % | **5.1 %** | 463.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 128 GB | 28.00 € | **25.90 €** | 14.7 % | **6.1 %** | 21.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.70 € | **5.60 €** | 54.6 % | **12.4 %** | 5.70 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.00 € | **9.90 €** | 27.9 % | **5.5 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZSM7900 | 42.50 € | **40.50 €** | 10.7 % | **5.5 %** | 34.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 26.50 € | **24.50 €** | 15.2 % | **6.5 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 50.00 € | **48.00 €** | 9.5 % | **5.1 %** | 44.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.00 €** | 14.6 % | **5.1 %** | 20.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny decibelomer Habotest HT622B USB A/C | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 24.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO 400 | 31.50 € | **29.50 €** | 12.5 % | **5.3 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 21.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušička ovoce Ruhhy 25929 400W | 50.50 € | **48.50 €** | 10.3 % | **6.0 %** | 48.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 33.00 € | **31.00 €** | 41.1 % | **32.6 %** | 31.01 € | stávame sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **58.00 €** | 14.9 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Elektrický mlynček na zrnkovú kávu HiBREW G3 | 80.00 € | **78.00 €** | 14.9 % | **12.0 %** | 78.10 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.90 € | **169.90 €** | 10.2 % | **8.9 %** | 170.00 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 160.50 € | **158.50 €** | 10.2 % | **8.9 %** | 158.70 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 161.50 € | **159.50 €** | 10.2 % | **8.9 %** | 159.70 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 197.00 € | **195.00 €** | 10.0 % | **8.9 %** | 195.20 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 206.50 € | **204.50 €** | 10.2 % | **9.1 %** | 204.81 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 34.00 € | **32.00 €** | 33.7 % | **25.8 %** | 32.37 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.50 € | **22.50 €** | 36.1 % | **25.0 %** | 22.90 € | stávame sa najlacnejší |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 13.50 € | **11.50 €** | 30.0 % | **10.8 %** | 11.90 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.50 €** | 10.0 % | **8.4 %** | 132.90 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 223.90 € | **222.00 €** | 10.1 % | **9.2 %** | 222.24 € | stávame sa najlacnejší |
| Blender G21 Perfection brown | 211.90 € | **210.00 €** | 18.5 % | **17.4 %** | 210.46 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **101.00 €** | 10.0 % | **8.0 %** | 101.50 € | stávame sa najlacnejší |
| Domo DO344DH | 149.90 € | **148.00 €** | 10.1 % | **8.7 %** | 148.50 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 37.90 € | **36.00 €** | 10.8 % | **5.2 %** | 33.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.90 € | **33.00 €** | 17.7 % | **11.3 %** | 33.03 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **26.00 €** | 15.4 % | **7.5 %** | 26.12 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 35.90 € | **34.00 €** | 14.5 % | **8.4 %** | 34.12 € | stávame sa najlacnejší |
| Krüger&Matz HL-CP03 bezdrátový adaptér CarPlay - And... | 23.90 € | **22.00 €** | 17.8 % | **8.4 %** | 22.39 € | stávame sa najlacnejší |
| SONY WHCH520W.CE7 bílá | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK690B černá | 37.50 € | **35.90 €** | 10.9 % | **6.2 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **27.90 €** | 11.4 % | **5.4 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 22.50 € | **20.90 €** | 16.3 % | **8.0 %** | 20.94 € | stávame sa najlacnejší |
| Albrecht DR 54 | 64.50 € | **62.90 €** | 10.6 % | **7.8 %** | 63.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Držák fólií (rolí) PARAT ROYAL | 31.50 € | **30.00 €** | 10.5 % | **5.2 %** | 27.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (čierne) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (strieborné) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 23.00 € | **21.50 €** | 14.2 % | **6.8 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **18.00 €** | 15.6 % | **6.7 %** | 18.04 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 35.00 € | **33.50 €** | 10.5 % | **5.8 %** | 33.54 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **16.50 €** | 15.0 % | **5.4 %** | 16.56 € | stávame sa najlacnejší |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 20.00 € | **18.50 €** | 17.7 % | **8.8 %** | 18.70 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 38.50 € | **37.00 €** | 12.1 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom bi... | 11.50 € | **10.00 €** | 36.1 % | **18.3 %** | 10.30 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **65.00 €** | 10.0 % | **7.5 %** | 65.30 € | stávame sa najlacnejší |
| Leifheit Telegant 72 Protect | 28.50 € | **27.00 €** | 11.1 % | **5.2 %** | 27.35 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 367.00 € | **365.50 €** | 9.6 % | **9.2 %** | 365.87 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 16.00 € | **14.50 €** | 38.8 % | **25.8 %** | 14.90 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.00 € | **23.50 €** | 18.3 % | **11.2 %** | 23.90 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **40.00 €** | 10.8 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **40.00 €** | 10.8 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **40.00 €** | 10.8 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 152.50 € | **151.00 €** | 13.4 % | **12.3 %** | 151.41 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **113.00 €** | 10.0 % | **8.6 %** | 113.44 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 138.50 € | **137.00 €** | 10.1 % | **8.9 %** | 137.49 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 28.50 € | **27.00 €** | 20.1 % | **13.7 %** | 27.50 € | stávame sa najlacnejší |
| Roadstar DJ-390 BT Bluetooth speaker | 114.50 € | **113.00 €** | 10.2 % | **8.8 %** | 113.50 € | stávame sa najlacnejší |
| Slúchadlá VIAIM Nano+ AI s hlasovým záznamníkom (zel... | 151.90 € | **150.50 €** | 6.2 % | **5.2 %** | 104.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Experience White | 253.90 € | **252.50 €** | 18.3 % | **17.6 %** | 252.64 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 70.90 € | **69.50 €** | 36.7 % | **34.0 %** | 69.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.20 € | **4.80 €** | 37.7 % | **6.6 %** | 4.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 11.90 € | **10.50 €** | 38.0 % | **21.8 %** | 10.90 € | stávame sa najlacnejší |
| GameSir Nova Lite 2 Luminous White | 34.90 € | **33.50 €** | 10.1 % | **5.6 %** | 21.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO9195C | 32.90 € | **31.50 €** | 10.1 % | **5.4 %** | 29.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR720003 | 29.90 € | **28.50 €** | 11.2 % | **6.0 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **16.50 €** | 15.2 % | **6.2 %** | 16.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **16.50 €** | 15.4 % | **6.4 %** | 16.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.90 € | **16.50 €** | 15.2 % | **6.2 %** | 16.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.50 €** | 15.2 % | **12.2 %** | 53.68 € | stávame sa najlacnejší |
| Freewell Neutral Density ND1000 Filter pre OSMO NANO | 17.90 € | **16.50 €** | 15.5 % | **6.5 %** | 16.69 € | stávame sa najlacnejší |
| Filter Freewell Black Glow Mist pre OSMO NANO | 17.90 € | **16.50 €** | 15.5 % | **6.5 %** | 16.69 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 15.69 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.90 € | **39.50 €** | 10.8 % | **7.0 %** | 39.90 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 19.90 € | **18.50 €** | 24.1 % | **15.3 %** | 18.90 € | stávame sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 545.00 € | **543.90 €** | 7.5 % | **7.3 %** | 543.98 € | stávame sa najlacnejší |
| Rowenta ZR730200 | 28.00 € | **26.90 €** | 10.2 % | **5.9 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor PWM Epever VS2024AU, 12/24V, 20A s... | 42.00 € | **40.90 €** | 8.5 % | **5.7 %** | 34.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 33.00 € | **31.90 €** | 9.6 % | **6.0 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.20 € | **6.10 €** | 35.8 % | **15.1 %** | 6.20 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.90 €** | 23.0 % | **11.8 %** | 11.00 € | stávame sa najlacnejší |
| TESLA MediaBox XT850 Android TV 11 box 4K s tunerem ... | 90.00 € | **88.90 €** | 6.8 % | **5.5 %** | 75.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR710001 | 26.50 € | **25.50 €** | 10.4 % | **6.2 %** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINI-D Smart WiFi Matter Switch (AC/DC 12-48V... | 13.50 € | **12.50 €** | 15.4 % | **6.9 %** | 6.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka pamäťových kariet Lexar LRW310X Dual USB-A/C... | 12.50 € | **11.50 €** | 15.9 % | **6.6 %** | 7.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo L900-5 LED pásek, Smart, RG | 20.50 € | **19.50 €** | 11.6 % | **6.1 %** | 16.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Breakfast Toaster 157/03, černý | 23.90 € | **22.90 €** | 11.3 % | **6.6 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.90 € | **22.90 €** | 10.2 % | **5.5 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 64 GB | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 10.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed krytApple iPh 17PM FIXSHM-1603-TR | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 14.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Red) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 8.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W4 TUYA | 13.90 € | **12.90 €** | 15.4 % | **7.1 %** | 11.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic PETG (sivý) 1 kg | 11.50 € | **10.50 €** | 15.1 % | **5.1 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 22.90 € | **21.90 €** | 10.7 % | **5.9 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stojan na slúchadlá ONIKUMA ST-2 čierny | 13.90 € | **12.90 €** | 15.1 % | **6.8 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo FF0700A | 18.50 € | **17.50 €** | 12.5 % | **6.4 %** | 17.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.90 € | **17.90 €** | 10.9 % | **5.1 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.40 € | **5.40 €** | 29.1 % | **8.9 %** | 5.41 € | stávame sa najlacnejší |
| CrockPot SCCPBPP605-050 | 102.50 € | **101.50 €** | 10.5 % | **9.5 %** | 101.54 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.10 € | **5.10 €** | 32.6 % | **10.9 %** | 5.15 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 107.50 € | **106.50 €** | 10.4 % | **9.3 %** | 106.57 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.08 € | stávame sa najlacnejší |
| Tefal INGENIO skleněná poklice 18 | 15.90 € | **14.90 €** | 12.7 % | **5.6 %** | 15.00 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.90 € | **120.90 €** | 10.3 % | **9.4 %** | 121.00 € | stávame sa najlacnejší |
| Domo DO228SV | 121.90 € | **120.90 €** | 10.0 % | **9.1 %** | 121.00 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 237.90 € | **236.90 €** | 42881.0 % | **42700.4 %** | 237.00 € | stávame sa najlacnejší |
| Veslařský trenažér HMS Premium ZW1600 | 671.90 € | **670.90 €** | 121291.1 % | **121110.5 %** | 671.00 € | stávame sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 369.90 € | **368.90 €** | 66729.3 % | **66548.6 %** | 369.00 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.50 €** | 15.6 % | **13.0 %** | 43.63 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 29.50 € | **28.50 €** | 20.4 % | **16.3 %** | 28.65 € | stávame sa najlacnejší |
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
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 20.50 € | **19.50 €** | 31.0 % | **24.6 %** | 19.74 € | stávame sa najlacnejší |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Tefal J1641474 | 12.50 € | **11.50 €** | 14.4 % | **5.3 %** | 11.79 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 57.50 € | **56.50 €** | 10.3 % | **8.4 %** | 56.79 € | stávame sa najlacnejší |
| Herní mikrofon Maono DM30RGB (černý) | 40.50 € | **39.50 €** | 14.8 % | **12.0 %** | 39.81 € | stávame sa najlacnejší |
| Smart Visual Ear-Clean Rod Bebird R1 black | 15.50 € | **14.50 €** | 14.6 % | **7.2 %** | 14.85 € | stávame sa najlacnejší |
| Foodsaver New Fresh 2,3 l | 32.50 € | **31.50 €** | 11.3 % | **7.9 %** | 31.89 € | stávame sa najlacnejší |
| Mio Smartbox IV | 31.50 € | **30.50 €** | 10.1 % | **6.6 %** | 30.89 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 24.50 € | **23.50 €** | 15.9 % | **11.2 %** | 23.90 € | stávame sa najlacnejší |
| Ariete Vintage 2868/05, modrá | 40.50 € | **39.50 €** | 11.1 % | **8.3 %** | 39.90 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 35.50 € | **34.50 €** | 28.7 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 17.50 € | **16.50 €** | 19.7 % | **12.8 %** | 16.90 € | stávame sa najlacnejší |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 59.50 € | **58.50 €** | 14.9 % | **12.9 %** | 58.90 € | stávame sa najlacnejší |
| Resto 93501 Hrnec s pokličkou 20 cm | 36.00 € | **35.00 €** | 10.2 % | **7.1 %** | 35.50 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 162.00 € | **161.00 €** | 7.3 % | **6.6 %** | 161.50 € | stávame sa najlacnejší |
| ETA Fragranza 0066 90000 nerez | 16.90 € | **15.90 €** | 11.9 % | **5.3 %** | 13.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.00 €** | 15.5 % | **6.0 %** | 10.49 € | stávame sa najlacnejší |
| Ufesa Haku | 30.90 € | **30.00 €** | 11.3 % | **8.1 %** | 30.08 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 60.90 € | **60.00 €** | 10.3 % | **8.7 %** | 60.09 € | stávame sa najlacnejší |
| SONOFF M5-1C-86W WiFi Matter smart wall switch (1-ch... | 16.90 € | **16.00 €** | 15.6 % | **9.4 %** | 16.14 € | stávame sa najlacnejší |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.90 € | **36.00 €** | 10.0 % | **7.3 %** | 36.20 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **38.00 €** | 10.1 % | **7.5 %** | 38.20 € | stávame sa najlacnejší |
| G3Ferrari G2016100 EQUA Kuchyňská váha | 19.90 € | **19.00 €** | 11.9 % | **6.8 %** | 19.21 € | stávame sa najlacnejší |
| Karta microSD Lexar 3.0 s kapacitou 64 GB | 18.90 € | **18.00 €** | 12.1 % | **6.7 %** | 18.25 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 23.90 € | **23.00 €** | 48.8 % | **43.2 %** | 23.29 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.90 € | **33.00 €** | 11.1 % | **8.1 %** | 33.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.90 € | **23.00 €** | 11.7 % | **7.5 %** | 23.29 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **42.00 €** | 10.5 % | **8.2 %** | 42.41 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2+ 12ks + dárek A5 | 46.90 € | **46.00 €** | 10.7 % | **8.6 %** | 46.46 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 20.90 € | **20.00 €** | 19.1 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Leifheit Page Profi 100 | 29.90 € | **29.00 €** | 11.4 % | **8.0 %** | 29.50 € | stávame sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 347.90 € | **347.00 €** | 7.6 % | **7.3 %** | 347.14 € | stávame sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 267.90 € | **267.00 €** | 7.3 % | **7.0 %** | 267.38 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.50 € | **7.80 €** | 33.7 % | **22.7 %** | 7.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 10.50 € | **9.80 €** | 27.0 % | **18.6 %** | 9.90 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Rollfix 210 Lon | 17.50 € | **16.90 €** | 11.3 % | **7.5 %** | 14.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.50 € | **47.90 €** | 11.0 % | **9.6 %** | 47.96 € | stávame sa najlacnejší |
| DOMO DO42602S | 40.50 € | **39.90 €** | 10.9 % | **9.3 %** | 39.99 € | stávame sa najlacnejší |
| Herní mikrofon Maono DGM20 (černý) | 27.50 € | **26.90 €** | 16.0 % | **13.5 %** | 26.99 € | stávame sa najlacnejší |
| Hyper PLA-CF Creality Filament (tmavozelený) | 19.50 € | **18.90 €** | 14.8 % | **11.3 %** | 18.99 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **35.90 €** | 10.5 % | **8.7 %** | 36.00 € | stávame sa najlacnejší |
| Slúchadlá Buxton BHP 7300 BLACK BT | 22.50 € | **21.90 €** | 13.5 % | **10.5 %** | 22.00 € | stávame sa najlacnejší |
| Electrolux EF167 | 14.50 € | **13.90 €** | 12.3 % | **7.6 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 11.50 € | **10.90 €** | 14.3 % | **8.3 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 15.50 € | **14.90 €** | 10.1 % | **5.8 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 11.50 € | **10.90 €** | 36.1 % | **29.0 %** | 11.00 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 16.50 € | **15.90 €** | 23.5 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 226.50 € | **225.90 €** | 5.3 % | **5.0 %** | 219.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO 9265+ DVB-S2/T2/C kombo přijímač 4K | 70.50 € | **69.90 €** | 6.0 % | **5.1 %** | 63.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 1535 | 195.50 € | **194.90 €** | 10.0 % | **9.7 %** | 194.91 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 159.50 € | **158.90 €** | 8.1 % | **7.7 %** | 159.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 187.50 € | **186.90 €** | 8.1 % | **7.7 %** | 187.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 251.50 € | **250.90 €** | 10.0 % | **9.7 %** | 251.00 € | stávame sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 32GB | 13.00 € | **12.50 €** | 12.9 % | **8.6 %** | 9.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N50 eliminátor zápachu pre Petkit PURA MAX 2/PRO lit... | 11.00 € | **10.50 €** | 13.3 % | **8.2 %** | 8.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Icequeen-Wh | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm modrý | 13.50 € | **13.00 €** | 9.5 % | **5.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm šedý | 13.50 € | **13.00 €** | 9.5 % | **5.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight detektor oxidu uhoľnatého a horľavých plynov | 13.00 € | **12.50 €** | 18.0 % | **13.4 %** | 12.53 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit AIR X2 Carplay/Android ... | 32.50 € | **32.00 €** | 14.9 % | **13.2 %** | 32.05 € | stávame sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.60 € | **5.10 €** | 32.0 % | **20.2 %** | 5.15 € | stávame sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 120.50 € | **120.00 €** | 10.4 % | **9.9 %** | 120.06 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 11.8 % | **9.4 %** | 23.08 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.00 € | **16.50 €** | 13.5 % | **10.1 %** | 16.58 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.30 € | **5.80 €** | 26.5 % | **16.4 %** | 5.90 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 109.50 € | **109.00 €** | 10.4 % | **9.9 %** | 109.10 € | stávame sa najlacnejší |
| Girmi FM2105 Mikrovlnná trouba s grilem | 109.50 € | **109.00 €** | 10.4 % | **9.9 %** | 109.10 € | stávame sa najlacnejší |
| Motorcycle Intercom EJEAS MS8-SE | 86.00 € | **85.50 €** | 16.4 % | **15.7 %** | 85.61 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 84.00 € | **83.50 €** | 14.9 % | **14.2 %** | 83.63 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 143.50 € | **143.00 €** | 8.1 % | **7.7 %** | 143.17 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Držiak so šnúrkou Sunnylife pre ovládač DJI RC (MM3-... | 15.50 € | **15.00 €** | 16.0 % | **12.3 %** | 15.18 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Prenosná pumpa Flextail Tiny Pump X (oranžová) | 17.00 € | **16.50 €** | 17.1 % | **13.7 %** | 16.69 € | stávame sa najlacnejší |
| Philips SQM3642/00 TV držák na zeď | 21.00 € | **20.50 €** | 10.4 % | **7.8 %** | 20.70 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 872.00 € | **871.50 €** | 15.0 % | **14.9 %** | 871.74 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 20 W | 1117.50 € | **1117.00 €** | 14.3 % | **14.3 %** | 1117.25 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.3 % | **8.0 %** | 16.29 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 48.50 € | **48.00 €** | 9.9 % | **8.7 %** | 48.29 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 18.50 € | **18.00 €** | 8.7 % | **5.7 %** | 18.29 € | stávame sa najlacnejší |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **18.00 €** | 15.7 % | **12.6 %** | 18.29 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 36.50 € | **36.00 €** | 7.8 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.50 € | **41.00 €** | 13.3 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.50 € | **138.00 €** | 15.4 % | **15.0 %** | 138.29 € | stávame sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 269.50 € | **269.00 €** | 15.8 % | **15.6 %** | 269.30 € | stávame sa najlacnejší |
| Domo DO223S | 64.50 € | **64.00 €** | 13.0 % | **12.2 %** | 64.30 € | stávame sa najlacnejší |
| WHIRLPOOL WI 7020 P | 331.50 € | **331.00 €** | 8.1 % | **8.0 %** | 331.30 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 85.50 € | **85.00 €** | 6.4 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 85.50 € | **85.00 €** | 6.4 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UGame C2 16" 2560x1600 120Hz | 164.50 € | **164.00 €** | 11.7 % | **11.4 %** | 164.31 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 82.00 € | **81.50 €** | 6.5 % | **5.8 %** | 81.81 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 82.00 € | **81.50 €** | 6.5 % | **5.8 %** | 81.81 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 71.50 € | **71.00 €** | 13.9 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.50 € | **48.00 €** | 16.0 % | **14.8 %** | 48.31 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 48.50 € | **48.00 €** | 12.7 % | **11.6 %** | 48.31 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 12.00 € | **11.50 €** | 19.3 % | **14.3 %** | 11.84 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.50 € | **13.00 €** | 36.3 % | **31.3 %** | 13.35 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.50 € | **22.00 €** | 9.3 % | **6.9 %** | 22.35 € | stávame sa najlacnejší |
| Concept LA8383DS | 748.50 € | **748.00 €** | 8.3 % | **8.2 %** | 748.35 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.50 € | **26.00 €** | 37.0 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 31.50 € | **31.00 €** | 7.8 % | **6.1 %** | 31.36 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 21.50 € | **21.00 €** | 18.2 % | **15.4 %** | 21.36 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 566.50 € | **566.00 €** | 6.4 % | **6.3 %** | 566.36 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 10.6 % | **7.2 %** | 16.38 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 28.50 € | **28.00 €** | 8.6 % | **6.7 %** | 28.38 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 90.50 € | **90.00 €** | 12.0 % | **11.4 %** | 90.38 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 110.50 € | **110.00 €** | 13.6 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 10.50 € | **10.00 €** | 31.7 % | **25.5 %** | 10.38 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.38 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 35.50 € | **35.00 €** | 13.5 % | **11.9 %** | 35.38 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.50 € | **13.00 €** | 10.2 % | **6.1 %** | 13.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.00 € | **21.50 €** | 9.3 % | **6.8 %** | 21.89 € | stávame sa najlacnejší |
| Tefal J1640574 | 24.50 € | **24.00 €** | 10.9 % | **8.6 %** | 24.39 € | stávame sa najlacnejší |
| TESLA Cook BBQ150 | 53.50 € | **53.00 €** | 10.5 % | **9.5 %** | 53.39 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.00 € | **26.50 €** | 13.0 % | **10.9 %** | 26.89 € | stávame sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.00 € | **19.50 €** | 9.2 % | **6.5 %** | 19.89 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 54.50 € | **54.00 €** | 8.7 % | **7.7 %** | 54.39 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.50 € | **48.00 €** | 10.5 % | **9.3 %** | 48.39 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 31.00 € | **30.50 €** | 10.0 % | **8.2 %** | 30.89 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.50 € | **16.00 €** | 21.5 % | **17.8 %** | 16.39 € | stávame sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 104.50 € | **104.00 €** | 29.2 % | **28.5 %** | 104.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **27.00 €** | 15.6 % | **13.5 %** | 27.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 61.50 € | **61.00 €** | 15.4 % | **14.5 %** | 61.39 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 80.50 € | **80.00 €** | 9.0 % | **8.4 %** | 80.39 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 105.00 € | **104.50 €** | 9.1 % | **8.6 %** | 104.89 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 55.50 € | **55.00 €** | 7.0 % | **6.1 %** | 55.39 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 181.00 € | **180.50 €** | 7.0 % | **6.7 %** | 180.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 466.00 € | **465.50 €** | 7.7 % | **7.6 %** | 465.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 900.00 € | **899.50 €** | 14.4 % | **14.3 %** | 899.89 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.50 € | **90.00 €** | 15.1 % | **14.5 %** | 90.39 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 39.50 € | **39.00 €** | 19.8 % | **18.3 %** | 39.39 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 53.50 € | **53.00 €** | 10.4 % | **9.4 %** | 53.39 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 78.50 € | **78.00 €** | 9.1 % | **8.4 %** | 78.39 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 166.50 € | **166.00 €** | 12.5 % | **12.2 %** | 166.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 324.50 € | **324.00 €** | 10.2 % | **10.0 %** | 324.39 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 254.50 € | **254.00 €** | 12.6 % | **12.4 %** | 254.39 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 99.50 € | **99.00 €** | 9.6 % | **9.0 %** | 99.39 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 119.00 € | **118.50 €** | 11.0 % | **10.6 %** | 118.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 147.00 € | **146.50 €** | 10.4 % | **10.0 %** | 146.89 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1297.50 € | **1297.00 €** | 7.2 % | **7.2 %** | 1297.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 141.00 € | **140.50 €** | 8.7 % | **8.3 %** | 140.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 25.50 € | **25.00 €** | 8.8 % | **6.6 %** | 25.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.50 € | **24.00 €** | 15.8 % | **13.4 %** | 24.39 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.50 € | **23.00 €** | 12.5 % | **10.1 %** | 23.39 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 53.00 € | **52.50 €** | 6.4 % | **5.4 %** | 52.89 € | stávame sa najlacnejší |
| Leifheit Set PowerClean M+náhr. zdarma | 20.50 € | **20.00 €** | 10.3 % | **7.6 %** | 20.39 € | stávame sa najlacnejší |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.50 € | **16.00 €** | 10.5 % | **7.2 %** | 16.39 € | stávame sa najlacnejší |
| D-LINK WiFi AX3200 Router (R32/E) | 83.50 € | **83.00 €** | 10.1 % | **9.4 %** | 83.39 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 1-pack) | 98.50 € | **98.00 €** | 6.4 % | **5.8 %** | 98.39 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 207.00 € | **206.50 €** | 11.1 % | **10.9 %** | 206.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 279.00 € | **278.50 €** | 7.1 % | **6.9 %** | 278.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.50 € | **18.00 €** | 23.0 % | **19.7 %** | 18.39 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 64.00 € | **63.50 €** | 6.1 % | **5.3 %** | 63.89 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 46.00 € | **45.50 €** | 16.0 % | **14.7 %** | 45.89 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 108.00 € | **107.50 €** | 5.7 % | **5.2 %** | 107.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 240.00 € | **239.50 €** | 8.2 % | **8.0 %** | 239.89 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 136.50 € | **136.00 €** | 9.1 % | **8.7 %** | 136.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 118.50 € | **118.00 €** | 7.9 % | **7.4 %** | 118.39 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 270.00 € | **269.50 €** | 6.3 % | **6.1 %** | 269.89 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 206.50 € | **206.00 €** | 8.2 % | **7.9 %** | 206.39 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 192.50 € | **192.00 €** | 8.4 % | **8.1 %** | 192.39 € | stávame sa najlacnejší |
| Whirlpool WP B9X WBS EE | 704.50 € | **704.00 €** | 10.0 % | **10.0 %** | 704.39 € | stávame sa najlacnejší |
| Status STA 177159 | 11.00 € | **10.50 €** | 11.0 % | **5.9 %** | 10.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 40.00 € | **39.50 €** | 16.4 % | **15.0 %** | 39.90 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 37.4 % | **34.1 %** | 20.90 € | stávame sa najlacnejší |
| Solight pištoľ spájkovacia 100W sada | 12.00 € | **11.50 €** | 18.4 % | **13.5 %** | 11.90 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 31.00 € | **30.50 €** | 9.0 % | **7.2 %** | 30.90 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 231.00 € | **230.50 €** | 17.4 % | **17.1 %** | 230.90 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 231.00 € | **230.50 €** | 17.4 % | **17.1 %** | 230.90 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 231.00 € | **230.50 €** | 17.4 % | **17.1 %** | 230.90 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 231.00 € | **230.50 €** | 17.4 % | **17.1 %** | 230.90 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 231.00 € | **230.50 €** | 17.4 % | **17.1 %** | 230.90 € | stávame sa najlacnejší |
| Ariete SteamStyle 4301, violet | 33.00 € | **32.50 €** | 10.3 % | **8.6 %** | 32.90 € | stávame sa najlacnejší |
| Ariete SteamStyle 4301/02, coral | 33.00 € | **32.50 €** | 10.3 % | **8.6 %** | 32.90 € | stávame sa najlacnejší |
| Girmi BL0401 Cestovní silikonová konvice | 15.00 € | **14.50 €** | 10.5 % | **6.8 %** | 14.90 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.00 € | **15.50 €** | 14.4 % | **10.8 %** | 15.90 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 40 x 50 cm, 50 ks, hladké | 12.00 € | **11.50 €** | 16.4 % | **11.6 %** | 11.90 € | stávame sa najlacnejší |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 192.00 € | **191.50 €** | 12.2 % | **11.9 %** | 191.90 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 126.50 € | **126.00 €** | 5.8 % | **5.4 %** | 126.41 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.50 € | **16.00 €** | 10.0 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 18.50 € | **18.00 €** | 11.2 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 84.50 € | **84.00 €** | 14.2 % | **13.5 %** | 84.42 € | stávame sa najlacnejší |
| Sati Guatemala Bio Fairtrade 500 g zrno | 12.50 € | **12.00 €** | 14.5 % | **10.0 %** | 12.44 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.50 € | **20.00 €** | 50.3 % | **46.6 %** | 20.45 € | stávame sa najlacnejší |
| FoodSaver FFC025X | 26.50 € | **26.00 €** | 11.8 % | **9.7 %** | 26.46 € | stávame sa najlacnejší |
| Digitálny multimeter Habotest HT86B | 11.50 € | **11.00 €** | 12.5 % | **7.6 %** | 11.46 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 43.50 € | **43.00 €** | 13.4 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 21.50 € | **21.00 €** | 11.6 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 44.50 € | **44.00 €** | 39.3 % | **37.7 %** | 44.48 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Eccentric Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.49 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.50 € | **13.00 €** | 14.0 % | **9.8 %** | 13.49 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 24.50 € | **24.00 €** | 8.0 % | **5.8 %** | 24.49 € | stávame sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.50 € | **25.00 €** | 11.5 % | **9.3 %** | 25.49 € | stávame sa najlacnejší |
| Rapoo E9270p bezdrátová klávesnice černá | 37.50 € | **37.00 €** | 9.3 % | **7.8 %** | 37.49 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.50 € | **25.00 €** | 19.5 % | **17.1 %** | 25.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **44.00 €** | 7.0 % | **5.8 %** | 44.49 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Black) | 14.50 € | **14.00 €** | 16.1 % | **12.1 %** | 14.49 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Grey) | 14.50 € | **14.00 €** | 10.1 % | **6.3 %** | 14.49 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 68.50 € | **68.00 €** | 14.2 % | **13.4 %** | 68.49 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 68.50 € | **68.00 €** | 14.2 % | **13.4 %** | 68.49 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.50 € | **16.00 €** | 29.1 % | **25.2 %** | 16.49 € | stávame sa najlacnejší |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790... | 36.50 € | **36.00 €** | 23.5 % | **21.8 %** | 36.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v striebornej ... | 62.50 € | **62.00 €** | 13.9 % | **12.9 %** | 62.49 € | stávame sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 62.50 € | **62.00 €** | 10.8 % | **9.9 %** | 62.49 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1346.90 € | **1346.50 €** | 7.4 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 247.90 € | **247.50 €** | 9.2 % | **9.0 %** | 247.66 € | stávame sa najlacnejší |
| ANMITE A185W03 18,5" prenosný monitor | 131.90 € | **131.50 €** | 12.4 % | **12.1 %** | 131.73 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.90 € | **195.50 €** | 10.1 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 85.90 € | **85.50 €** | 9.6 % | **9.1 %** | 85.79 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 240.90 € | **240.50 €** | 12.8 % | **12.6 %** | 240.79 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 133.90 € | **133.50 €** | 11.7 % | **11.4 %** | 133.79 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **79.50 €** | 15.2 % | **14.6 %** | 79.79 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 91.90 € | **91.50 €** | 6.5 % | **6.0 %** | 91.79 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 97.90 € | **97.50 €** | 9.2 % | **8.8 %** | 97.79 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 74.90 € | **74.50 €** | 7.2 % | **6.6 %** | 74.79 € | stávame sa najlacnejší |
| TESLA EliteCook K70 Ultra | 147.90 € | **147.50 €** | 10.2 % | **9.9 %** | 147.79 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.50 €** | 9.4 % | **8.8 %** | 84.80 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.90 € | **212.50 €** | 10.1 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa A3C Pro 13,3" | 121.90 € | **121.50 €** | 8.6 % | **8.3 %** | 121.81 € | stávame sa najlacnejší |
| ANMITE A160W03 16" prenosný monitor | 87.90 € | **87.50 €** | 13.8 % | **13.3 %** | 87.82 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 82.90 € | **82.50 €** | 10.4 % | **9.8 %** | 82.83 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 74.90 € | **74.50 €** | 13.0 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| Electrolux EF 26   (EFH 12 W) | 11.90 € | **11.50 €** | 13.6 % | **9.7 %** | 3.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 75 cm černý | 14.90 € | **14.50 €** | 8.4 % | **5.5 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Ouganda Colobus Blend 500 g zrno | 10.90 € | **10.50 €** | 13.1 % | **8.9 %** | 10.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.20 € | **4.80 €** | 49.4 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.00 € | **6.60 €** | 40.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| HP Wireless Mouse 220 Black | 13.90 € | **13.50 €** | 13.8 % | **10.5 %** | 13.71 € | stávame sa najlacnejší |
| Svetlomet Superfire HL06, 500lm, USB | 12.90 € | **12.50 €** | 14.4 % | **10.8 %** | 12.73 € | stávame sa najlacnejší |
| Solight axiálny ventilátor | 12.90 € | **12.50 €** | 40.4 % | **36.0 %** | 12.75 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.90 € | **13.50 €** | 13.5 % | **10.2 %** | 13.79 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.90 € | **10.50 €** | 24.8 % | **20.2 %** | 10.79 € | stávame sa najlacnejší |
| Solight digitálny infračervený teplomer -50° +380°C | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.79 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.90 € | **10.50 €** | 31.3 % | **26.5 %** | 10.79 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.90 € | **15.50 €** | 10.6 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.90 € | **11.50 €** | 45.7 % | **40.8 %** | 11.84 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT113 | 10.90 € | **10.50 €** | 10.4 % | **6.3 %** | 10.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.90 € | **10.50 €** | 26.2 % | **21.6 %** | 10.86 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.90 € | **10.50 €** | 19.3 % | **14.9 %** | 10.86 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 59.90 € | **59.50 €** | 5.7 % | **5.0 %** | 56.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot SCV400RD | 52.90 € | **52.50 €** | 10.8 % | **10.0 %** | 52.54 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.50 €** | 10.2 % | **9.0 %** | 36.58 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm svetlé drevo 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.59 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.90 € | **27.50 €** | 8.1 % | **6.6 %** | 27.59 € | stávame sa najlacnejší |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 9.20 € | **8.80 €** | 37.7 % | **31.8 %** | 8.90 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.50 €** | 11.5 % | **8.9 %** | 16.63 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 40.90 € | **40.50 €** | 10.5 % | **9.4 %** | 40.63 € | stávame sa najlacnejší |
| Domo DO733K | 47.90 € | **47.50 €** | 10.8 % | **9.9 %** | 47.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.1 % | **8.5 %** | 26.63 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.50 €** | 11.0 % | **9.5 %** | 29.67 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 18.90 € | **18.50 €** | 11.2 % | **8.8 %** | 18.67 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.69 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT203R | 53.90 € | **53.50 €** | 15.4 % | **14.5 %** | 53.69 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 32.90 € | **32.50 €** | 11.3 % | **9.9 %** | 32.70 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.90 € | **16.50 €** | 35.5 % | **32.3 %** | 16.70 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.90 € | **19.50 €** | 43.7 % | **40.8 %** | 19.70 € | stávame sa najlacnejší |
| Russell Hobbs 26800-56/RH | 25.90 € | **25.50 €** | 6.9 % | **5.2 %** | 25.70 € | stávame sa najlacnejší |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.90 € | **17.50 €** | 46.6 % | **43.3 %** | 17.71 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 27.90 € | **27.50 €** | 25.4 % | **23.6 %** | 27.73 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND64/PL | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND16 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 41.90 € | **41.50 €** | 13.4 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.90 € | **17.50 €** | 13.3 % | **10.7 %** | 17.75 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 20.90 € | **20.50 €** | 46.0 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 16.90 € | **16.50 €** | 10.4 % | **7.7 %** | 16.78 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 23.90 € | **23.50 €** | 17.4 % | **15.4 %** | 23.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.79 € | stávame sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 26.90 € | **26.50 €** | 11.2 % | **9.5 %** | 26.79 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 32.90 € | **32.50 €** | 11.6 % | **10.2 %** | 32.79 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 23.90 € | **23.50 €** | 12.6 % | **10.7 %** | 23.79 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 58.90 € | **58.50 €** | 21.9 % | **21.1 %** | 58.79 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.50 €** | 11.8 % | **9.2 %** | 16.79 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.50 €** | 7.7 % | **6.5 %** | 33.79 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.90 € | **37.50 €** | 10.7 % | **9.5 %** | 37.79 € | stávame sa najlacnejší |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 18.90 € | **18.50 €** | 25.6 % | **23.0 %** | 18.80 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 20.90 € | **20.50 €** | 18.1 % | **15.8 %** | 20.80 € | stávame sa najlacnejší |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.90 € | **19.50 €** | 39.6 % | **36.8 %** | 19.80 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 35.90 € | **35.50 €** | 7.1 % | **6.0 %** | 35.86 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 18.90 € | **18.50 €** | 9.6 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 12.7 % | **10.2 %** | 17.88 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.89 € | stávame sa najlacnejší |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.90 € | **18.50 €** | 20.0 % | **17.5 %** | 18.89 € | stávame sa najlacnejší |
| Filters ND8/16/32 Freewell for DJI Neo | 17.90 € | **17.50 €** | 19.6 % | **16.9 %** | 17.89 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.90 € | **39.50 €** | 16.8 % | **15.6 %** | 39.89 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 43.90 € | **43.50 €** | 13.8 % | **12.8 %** | 43.89 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (čierny) | 275.90 € | **275.50 €** | 7.4 % | **7.3 %** | 275.70 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 277.90 € | **277.50 €** | 12.2 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 848.90 € | **848.50 €** | 8.3 % | **8.3 %** | 848.79 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.90 € | **348.50 €** | 15.0 % | **14.9 %** | 348.79 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 471.90 € | **471.50 €** | 7.1 % | **7.0 %** | 471.80 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 507.90 € | **507.50 €** | 7.1 % | **7.0 %** | 507.80 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.00 € | **1.70 €** | 31.1 % | **11.5 %** | 0.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Superior RC UNI TV SAM/LG | 7.50 € | **7.20 €** | 10.5 % | **6.0 %** | 6.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.70 € | **5.40 €** | 37.1 % | **29.9 %** | 5.50 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.70 € | **4.50 €** | 41.0 % | **35.0 %** | 4.55 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.40 € | **1.20 €** | 51.8 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.20 € | **8.00 €** | 40.1 % | **36.6 %** | 8.09 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 5.60 € | **5.40 €** | 37.5 % | **32.6 %** | 5.49 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 791.00 € | **790.90 €** | 13.8 % | **13.8 %** | 790.99 € | stávame sa najlacnejší |
| 3D skener Revopoint POP 4 Premium | 931.00 € | **930.90 €** | 14.9 % | **14.9 %** | 930.99 € | stávame sa najlacnejší |
| Beper 50451 Tyčový Vakuový Vysavač S He | 52.00 € | **51.90 €** | 10.2 % | **10.0 %** | 51.92 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.00 € | **19.90 €** | 16.5 % | **15.9 %** | 19.95 € | stávame sa najlacnejší |
| Solight profesionálna laserová vodováha - zelený laser | 38.00 € | **37.90 €** | 32.0 % | **31.7 %** | 37.95 € | stávame sa najlacnejší |
| Maxlife MXBH-01 černé | 19.00 € | **18.90 €** | 10.4 % | **9.8 %** | 18.95 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 22.00 € | **21.90 €** | 25.3 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 52.00 € | **51.90 €** | 6.0 % | **5.8 %** | 51.99 € | stávame sa najlacnejší |
| KMP H76 (CH564EE) | 17.00 € | **16.90 €** | 10.3 % | **9.7 %** | 16.99 € | stávame sa najlacnejší |
| Mikrofón Maono DGM20 (biely) | 27.00 € | **26.90 €** | 14.2 % | **13.8 %** | 26.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Cycplus AS2 mini electric pump | 42.00 € | **41.90 €** | 7.2 % | **7.0 %** | 41.99 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.70 € | **4.60 €** | 35.0 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.70 € | **7.60 €** | 44.2 % | **42.4 %** | 7.67 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 2m | 3.90 € | **3.80 €** | 48.2 % | **44.4 %** | 3.84 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.10 € | **2.00 €** | 48.5 % | **41.4 %** | 2.05 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.20 €** | 40.9 % | **30.1 %** | 1.25 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.90 € | **2.80 €** | 23.4 % | **19.2 %** | 2.85 € | stávame sa najlacnejší |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 1.80 € | **1.70 €** | 39.4 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.90 € | **3.80 €** | 17.4 % | **14.4 %** | 3.85 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 4.00 € | **3.90 €** | 41.4 % | **37.9 %** | 3.96 € | stávame sa najlacnejší |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 3.90 € | **3.80 €** | 37.9 % | **34.3 %** | 3.87 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.90 €** | 46.0 % | **41.2 %** | 2.98 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.70 € | **2.60 €** | 38.1 % | **32.9 %** | 2.68 € | stávame sa najlacnejší |
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
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 12.00 € | **11.90 €** | 8.8 % | **7.9 %** | 11.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 10.00 € | **9.90 €** | 45.7 % | **44.2 %** | 9.95 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.30 € | **3.20 €** | 36.2 % | **32.1 %** | 3.25 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.00 € | **11.90 €** | 47.4 % | **46.1 %** | 11.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.50 € | **9.40 €** | 28.3 % | **26.9 %** | 9.46 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.4 % | **9.6 %** | 12.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.50 € | **5.40 €** | 38.0 % | **35.5 %** | 5.46 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 6.9 % | **5.4 %** | 7.06 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 7 krížový, biely | 4.80 € | **4.70 €** | 38.9 % | **36.0 %** | 4.77 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.30 € | **5.20 €** | 37.2 % | **34.6 %** | 5.28 € | stávame sa najlacnejší |
| Solight digitálny merač spotreby el. energie, veľký ... | 10.00 € | **9.90 €** | 25.1 % | **23.8 %** | 9.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.60 € | **7.50 €** | 24.8 % | **23.2 %** | 7.59 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 28.3 % | **26.3 %** | 6.49 € | stávame sa najlacnejší |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.50 € | **6.40 €** | 8.7 % | **7.1 %** | 6.49 € | stávame sa najlacnejší |
| Solight stĺpcový filter pre Dyson V12 | 6.00 € | **5.90 €** | 26.4 % | **24.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 8.00 € | **7.90 €** | 36.9 % | **35.2 %** | 7.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.80 €** | 11.5 % | **10.2 %** | 8.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.60 € | **9.50 €** | 26.9 % | **25.6 %** | 9.59 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.40 € | **8.30 €** | 43.8 % | **42.1 %** | 8.39 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 103.00 € | **102.90 €** | 5.3 % | **5.2 %** | 102.96 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 198.00 € | **197.90 €** | 10.7 % | **10.6 %** | 197.99 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 113.00 € | **112.90 €** | 8.4 % | **8.3 %** | 112.99 € | stávame sa najlacnejší |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-12

Vstup: `premiumstore-sk_2026-09-12_21-26.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6224**
- Návrh **zvýšiť** cenu: **160** produktov
- Návrh **znížiť** cenu: **1516** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4548** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **503**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (160)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Gorenje NRKI517E41 | 464.50 € | **473.50 €** | 10.0 % | **12.1 %** | 464.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.90 € | **26.50 €** | 8.3 % | **31.1 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GV520E15 | 283.90 € | **286.90 €** | 5.1 % | **6.2 %** | 283.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Gracioso horizontal | 198.00 € | **200.50 €** | 10.7 % | **12.0 %** | 198.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.00 € | **69.50 €** | 5.7 % | **9.7 %** | 67.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 37.50 € | **39.90 €** | 9.8 % | **16.8 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 15.00 € | **17.00 €** | 10.5 % | **25.2 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.50 € | **64.50 €** | 9.5 % | **13.0 %** | 62.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.50 € | **16.50 €** | 7.7 % | **22.5 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/5X/1 | 47.50 € | **49.50 €** | 5.7 % | **10.1 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 68.00 € | **69.90 €** | 9.8 % | **12.9 %** | 68.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Blue | 68.00 € | **69.90 €** | 9.8 % | **12.9 %** | 68.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy ORYX X220 Iris | 19.00 € | **20.90 €** | 7.3 % | **18.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná stolná lampička s klipom bi... | 10.00 € | **11.50 €** | 18.3 % | **36.1 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 47.00 € | **48.50 €** | 9.9 % | **13.4 %** | 47.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 18.50 € | **19.90 €** | 15.3 % | **24.1 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Aquabelo 1264 90000, černý/bílý | 44.50 € | **45.90 €** | 11.1 % | **14.6 %** | 44.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.50 € | **14.50 €** | 8.8 % | **16.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 14.90 € | **15.90 €** | 39.9 % | **49.3 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO354VD | 110.90 € | **111.90 €** | 9.9 % | **10.9 %** | 110.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 210A | 213.00 € | **213.90 €** | 5.7 % | **6.1 %** | 213.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP Wireless Mouse 220 Black | 13.00 € | **13.90 €** | 6.4 % | **13.8 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **19.90 €** | 37.2 % | **43.7 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 17.00 € | **17.90 €** | 29.8 % | **36.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.00 € | **17.90 €** | 7.1 % | **12.7 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 365.00 € | **365.90 €** | 9.1 % | **9.3 %** | 365.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool FFB 8469 BV EE | 344.00 € | **344.90 €** | 6.5 % | **6.7 %** | 344.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 507.00 € | **507.90 €** | 6.9 % | **7.1 %** | 507.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná dekorácia vianočný stromček, 24... | 3.30 € | **4.00 €** | 19.8 % | **45.2 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| WHIRLPOOL WI 7020 P | 330.90 € | **331.50 €** | 7.9 % | **8.1 %** | 330.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.90 € | **24.50 €** | 39.2 % | **42.7 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **20.50 €** | 46.6 % | **50.3 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **31.50 €** | 18.8 % | **20.7 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.00 € | **14.50 €** | 18.2 % | **22.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.00 € | **21.50 €** | 26.4 % | **29.4 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.00 € | **20.50 €** | 38.4 % | **41.8 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **47.50 €** | 35.9 % | **37.3 %** | 47.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 22.00 € | **22.50 €** | 11.4 % | **14.0 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 14.00 € | **14.50 €** | 37.5 % | **42.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 302.00 € | **302.50 €** | 6.5 % | **6.7 %** | 302.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 23.00 € | **23.50 €** | 43.2 % | **46.3 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 41.00 € | **41.50 €** | 4.9 % | **6.1 %** | 41.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO461FR | 36.00 € | **36.50 €** | 7.5 % | **9.0 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Creality K2 Pro Combo | 780.00 € | **780.50 €** | 14.1 % | **14.2 %** | 780.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.00 € | **41.50 €** | 7.0 % | **8.3 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Watch GPS Silver | 63.00 € | **63.50 €** | 7.2 % | **8.0 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 32.00 € | **32.50 €** | 8.1 % | **9.8 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Karta microSD Lexar 3.0 s kapacitou 64 GB | 18.00 € | **18.50 €** | 6.7 % | **9.7 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 32.00 € | **32.50 €** | 25.8 % | **27.8 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 122.00 € | **122.50 €** | 15.5 % | **16.0 %** | 122.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.50 € | **14.00 €** | 7.0 % | **10.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 16.00 € | **16.50 €** | 31.9 % | **36.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.00 € | **16.50 €** | 25.2 % | **29.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.50 €** | 40.0 % | **42.7 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PW4 | 347.50 € | **348.00 €** | 6.4 % | **6.5 %** | 347.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.50 € | **177.00 €** | 7.1 % | **7.4 %** | 176.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.50 € | **114.90 €** | 10.0 % | **10.4 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 72.50 € | **72.90 €** | 16.6 % | **17.3 %** | 72.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **64.90 €** | 5.5 % | **6.1 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **12.90 €** | 23.5 % | **27.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **12.90 €** | 15.2 % | **18.9 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **10.90 €** | 26.5 % | **31.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 13.50 € | **13.90 €** | 4.6 % | **7.7 %** | 13.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.50 € | **11.90 €** | 40.8 % | **45.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.50 € | **13.90 €** | 24.2 % | **27.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor Premium, Find My kompatibilný | 12.50 € | **12.90 €** | 23.5 % | **27.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **10.90 €** | 21.6 % | **26.2 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.50 € | **13.90 €** | 24.9 % | **28.6 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky C10 (biele) | 12.50 € | **12.90 €** | 7.8 % | **11.2 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 51.50 € | **51.90 €** | 30.7 % | **31.7 %** | 51.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **21.90 €** | 22.5 % | **24.8 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.50 € | **28.90 €** | 33.2 % | **35.0 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.50 € | **20.90 €** | 35.1 % | **37.7 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.50 € | **16.90 €** | 23.9 % | **26.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 40.50 € | **40.90 €** | 26.7 % | **27.9 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 18.50 € | **18.90 €** | 4.2 % | **6.4 %** | 18.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.50 € | **18.90 €** | 17.5 % | **20.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 19.50 € | **19.90 €** | 24.6 % | **27.2 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.50 € | **33.90 €** | 6.5 % | **7.7 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 30.50 € | **30.90 €** | 14.7 % | **16.3 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi Outdoor Camera CW500 Dual EU | 63.50 € | **63.90 €** | 5.1 % | **5.8 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 35.50 € | **35.90 €** | 6.0 % | **7.1 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **19.90 €** | 36.8 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 7.30 € | **7.60 €** | 45.5 % | **51.4 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 8.80 € | **9.10 €** | 19.6 % | **23.7 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.30 € | **9.60 €** | 27.1 % | **31.2 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE FN4172CW | 330.90 € | **331.00 €** | 7.0 % | **7.0 %** | 330.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS520E15W | 263.90 € | **264.00 €** | 7.5 % | **7.6 %** | 263.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 45.90 € | **46.00 €** | 28.5 % | **28.8 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 15.9 % | **16.5 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 23.90 € | **24.00 €** | 23.5 % | **24.0 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 35.90 € | **36.00 €** | 7.0 % | **7.3 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 28.90 € | **29.00 €** | 18.2 % | **18.7 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 27.90 € | **28.00 €** | 13.0 % | **13.4 %** | 27.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 33.90 € | **34.00 €** | 22.9 % | **23.3 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Buxton BHP 7300 BLACK BT | 21.90 € | **22.00 €** | 10.5 % | **11.0 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 7.60 € | **7.70 €** | 43.0 % | **44.9 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.10 € | **5.20 €** | 20.2 % | **22.5 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.80 € | **4.90 €** | 11.2 % | **13.5 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 5.80 € | **5.90 €** | 16.4 % | **18.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.10 € | **5.20 €** | 25.6 % | **28.1 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 3.80 € | **3.90 €** | 19.7 % | **22.9 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10A, biely-sivý | 2.80 € | **2.90 €** | 18.6 % | **22.8 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.80 € | **2.90 €** | 19.2 % | **23.4 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, čierny | 2.50 € | **2.60 €** | 30.3 % | **35.5 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.80 € | **3.90 €** | 14.4 % | **17.4 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.90 € | **4.00 €** | 33.2 % | **36.6 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.70 €** | 15.7 % | **18.9 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **2.10 €** | 23.2 % | **29.3 %** | 2.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.90 € | **12.00 €** | 27.8 % | **28.9 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **16.00 €** | 28.0 % | **28.8 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 13.90 € | **14.00 €** | 25.4 % | **26.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.50 € | **4.60 €** | 35.0 % | **38.0 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.90 € | **10.00 €** | 23.8 % | **25.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **10.00 €** | 44.2 % | **45.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.40 € | **9.50 €** | 26.9 % | **28.3 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 26.3 % | **28.3 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 7.1 % | **8.7 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.30 €** | 32.1 % | **36.2 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Veľkej Británie, typ G | 5.40 € | **5.50 €** | 32.6 % | **35.1 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.50 € | **9.60 €** | 13.2 % | **14.4 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.90 € | **8.00 €** | 35.2 % | **36.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.50 € | **9.60 €** | 25.6 % | **26.9 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.70 € | **7.80 €** | 32.1 % | **33.8 %** | 7.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 33.7 % | **36.4 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **5.30 €** | 34.6 % | **37.2 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.50 € | **7.60 €** | 35.2 % | **37.0 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 5.4 % | **6.9 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.60 € | **9.70 €** | 34.8 % | **36.2 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.40 € | **6.50 €** | 39.9 % | **42.1 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1801 | 237.90 € | **238.00 €** | 42881.0 % | **42899.1 %** | 237.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 06A1 | 102.90 € | **103.00 €** | 5.2 % | **5.3 %** | 102.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1516)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 7402.00 € | **6758.90 €** | 15.0 % | **5.0 %** | 6503.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3641.00 € | **3349.50 €** | 15.0 % | **5.8 %** | 3349.70 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **2909.90 €** | 15.0 % | **6.0 %** | 2910.00 € | stávame sa najlacnejší |
| Laserový gravír xTool S1 40 W 2 v 1 – súprava „všetk... | 2783.00 € | **2541.00 €** | 15.0 % | **5.0 %** | 2254.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2634.00 €** | 15.0 % | **5.5 %** | 2634.19 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2573.90 € | **2350.00 €** | 15.0 % | **5.0 %** | 1999.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S99H | 3613.00 € | **3448.90 €** | 10.0 % | **5.0 %** | 3359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE65S99H | 2924.90 € | **2791.90 €** | 10.0 % | **5.0 %** | 2750.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2326.50 € | **2198.90 €** | 15.0 % | **8.7 %** | 2199.00 € | stávame sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2649.90 € | **2529.50 €** | 10.0 % | **5.0 %** | 1726.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1490.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1600.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr Fold 16+512GB Blue | 2190.50 € | **2090.90 €** | 10.0 % | **5.0 %** | 1395.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S85H | 2193.50 € | **2093.90 €** | 10.0 % | **5.0 %** | 1429.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE65LS03HW | 1823.90 € | **1740.90 €** | 10.0 % | **5.0 %** | 1691.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro Max 512GB Orange | 1721.90 € | **1643.90 €** | 10.0 % | **5.0 %** | 1391.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro Max 512GB Deep Blue | 1721.90 € | **1643.90 €** | 10.0 % | **5.0 %** | 1430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 901.50 € | **823.50 €** | 15.0 % | **5.0 %** | 660.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 303.50 € | **228.90 €** | 43.2 % | **8.0 %** | 229.00 € | stávame sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 854.50 € | **780.50 €** | 15.0 % | **5.0 %** | 619.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjacia stanica FOSSIBOT F2400 2400 W (čierna) | 806.50 € | **736.90 €** | 15.0 % | **5.1 %** | 737.00 € | stávame sa najlacnejší |
| Xiaomi 17 Ultra 16/512GB Black | 1522.90 € | **1453.90 €** | 10.0 % | **5.0 %** | 1099.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 954.00 € | **889.90 €** | 15.0 % | **7.3 %** | 890.00 € | stávame sa najlacnejší |
| Samsung OLED QE65S85H | 1370.90 € | **1308.50 €** | 10.0 % | **5.0 %** | 1271.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr 70 Ultra 16+512GB Blue | 1358.00 € | **1296.50 €** | 10.0 % | **5.0 %** | 1219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 707.50 € | **646.50 €** | 15.0 % | **5.1 %** | 520.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.90 €** | 15.0 % | **5.4 %** | 670.00 € | stávame sa najlacnejší |
| 3D tlačiareň QiDi Q2 Combo | 684.50 € | **625.00 €** | 15.0 % | **5.0 %** | 559.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo Edge 2 Pro White | 1275.90 € | **1217.90 €** | 10.0 % | **5.0 %** | 818.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ANCEL DS600 BT – profesionálny diagnostický skener OBD2 | 586.50 € | **535.50 €** | 15.0 % | **5.0 %** | 529.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Carbon | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 753.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Olive | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 839.50 € | **789.90 €** | 15.0 % | **8.2 %** | 790.00 € | stávame sa najlacnejší |
| Electrolux EIS8959 | 1062.50 € | **1014.50 €** | 10.0 % | **5.0 %** | 967.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Micro RGB MRE55R85H | 1049.50 € | **1001.90 €** | 10.0 % | **5.0 %** | 969.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 Ultra 16/512GB Black | 1035.50 € | **988.50 €** | 10.0 % | **5.0 %** | 899.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHFF 6404 X6E | 1023.50 € | **976.90 €** | 10.0 % | **5.0 %** | 898.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 525.50 € | **479.90 €** | 15.0 % | **5.1 %** | 424.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17 12/256GB Venture Green | 972.90 € | **928.90 €** | 10.0 % | **5.0 %** | 779.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nano projektor JMGO N1S | 496.50 € | **453.50 €** | 15.0 % | **5.0 %** | 379.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 Ultra 12/256GB Black | 927.90 € | **885.50 €** | 10.0 % | **5.0 %** | 771.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Blue | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 574.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Red | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 627.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **728.90 €** | 15.0 % | **9.2 %** | 729.00 € | stávame sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 782.50 € | **744.00 €** | 15.0 % | **9.4 %** | 744.47 € | stávame sa najlacnejší |
| Electrolux ENA7CE19S | 820.50 € | **783.50 €** | 10.0 % | **5.1 %** | 758.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **389.50 €** | 15.0 % | **5.1 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Black | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Green | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB White | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus T2 smart bike trainer | 625.90 € | **589.90 €** | 15.0 % | **8.4 %** | 590.00 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 415.00 € | **379.50 €** | 15.0 % | **5.1 %** | 349.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 515.00 € | **479.90 €** | 15.0 % | **7.1 %** | 480.00 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K1C 2025 | 401.90 € | **366.90 €** | 15.0 % | **5.0 %** | 339.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare VITURE XR Luma Pro (veľkosť L) | 407.50 € | **372.50 €** | 15.0 % | **5.1 %** | 355.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA7CE18S1 | 752.50 € | **718.00 €** | 10.1 % | **5.0 %** | 648.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 394.00 € | **359.90 €** | 15.0 % | **5.0 %** | 322.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 176.50 € | **142.50 €** | 32.0 % | **6.6 %** | 142.60 € | stávame sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **368.90 €** | 15.0 % | **5.3 %** | 369.00 € | stávame sa najlacnejší |
| 3D tlačiareň CREALITY SparkX i7 Combo | 391.50 € | **357.90 €** | 15.0 % | **5.1 %** | 318.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **461.00 €** | 15.0 % | **7.2 %** | 461.19 € | stávame sa najlacnejší |
| PS5 PlayStation 5 Digital + 2x DS5 | 727.50 € | **694.50 €** | 10.0 % | **5.0 %** | 579.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW8F5412SAC | 709.90 € | **677.90 €** | 10.0 % | **5.1 %** | 665.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation®5 Digital Edition–825GB | 671.50 € | **641.00 €** | 10.0 % | **5.0 %** | 576.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Plus | 354.00 € | **323.50 €** | 15.0 % | **5.1 %** | 288.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Blue | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 481.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Wood | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 481.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač MOVA Z200 Stick | 345.50 € | **315.50 €** | 15.0 % | **5.0 %** | 200.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Aurzen Eazze D1 Max | 346.00 € | **316.50 €** | 15.0 % | **5.2 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 433.90 € | **404.90 €** | 15.0 % | **7.3 %** | 404.93 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **402.50 €** | 15.0 % | **7.4 %** | 402.72 € | stávame sa najlacnejší |
| Electrolux EOC6H76X | 572.90 € | **546.90 €** | 10.0 % | **5.0 %** | 460.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS5B70CLI | 569.50 € | **543.50 €** | 10.0 % | **5.0 %** | 470.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot ULTENIC MX50 | 445.90 € | **419.90 €** | 15.0 % | **8.3 %** | 420.00 € | stávame sa najlacnejší |
| Okuliare RayNeo Air 4 Pro AR | 325.90 € | **300.00 €** | 15.0 % | **5.9 %** | 300.42 € | stávame sa najlacnejší |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 551.00 € | **525.90 €** | 10.0 % | **5.0 %** | 447.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.90 €** | 15.0 % | **9.8 %** | 539.00 € | stávame sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 556.90 € | **531.90 €** | 10.0 % | **5.1 %** | 467.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA6LE18S | 549.00 € | **524.00 €** | 10.0 % | **5.0 %** | 504.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO LEGION TAB (ZAEF0021CZ) | 530.90 € | **506.50 €** | 10.1 % | **5.0 %** | 457.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BDIN38640D | 532.50 € | **508.50 €** | 10.0 % | **5.1 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE NRS8182KX | 525.90 € | **501.90 €** | 10.0 % | **5.0 %** | 494.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AX | 515.50 € | **491.90 €** | 10.1 % | **5.0 %** | 449.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Excellent white | 232.90 € | **209.50 €** | 18.3 % | **6.5 %** | 209.90 € | stávame sa najlacnejší |
| Priemyselná infračervená termokamera Habotest HT820 | 273.90 € | **250.50 €** | 15.0 % | **5.2 %** | 211.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **399.50 €** | 15.1 % | **8.7 %** | 399.83 € | stávame sa najlacnejší |
| YAMAHA TT-S303 BLACK | 511.50 € | **488.50 €** | 10.0 % | **5.1 %** | 439.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 506.50 € | **483.50 €** | 10.1 % | **5.1 %** | 477.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBSJ21DPY | 497.50 € | **474.90 €** | 10.1 % | **5.1 %** | 398.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 264.50 € | **241.90 €** | 15.0 % | **5.2 %** | 200.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R619EES5 | 493.50 € | **471.00 €** | 10.0 % | **5.0 %** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS6C70WPA | 499.90 € | **477.50 €** | 10.0 % | **5.1 %** | 415.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Acer Aspire Lite 15 (NX.DRPEC.001) | 559.90 € | **537.50 €** | 10.0 % | **5.6 %** | 537.67 € | stávame sa najlacnejší |
| Beko BDIN38441P | 484.50 € | **462.50 €** | 10.1 % | **5.1 %** | 415.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 486.90 € | **464.90 €** | 10.0 % | **5.1 %** | 442.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RP619EEW5 | 482.50 € | **460.50 €** | 10.1 % | **5.0 %** | 444.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BRS 7N3BX-S | 482.90 € | **460.90 €** | 10.1 % | **5.1 %** | 449.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 401.90 € | **379.90 €** | 11.2 % | **5.1 %** | 372.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 79.50 € | **57.50 €** | 59.1 % | **15.1 %** | 57.90 € | stávame sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 261.90 € | **239.90 €** | 19.9 % | **9.8 %** | 239.95 € | stávame sa najlacnejší |
| Reproduktory Edifier S355DB 2.1 (hnedé) | 379.90 € | **358.00 €** | 15.0 % | **8.4 %** | 358.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 92.00 € | **70.50 €** | 43.6 % | **10.1 %** | 70.90 € | stávame sa najlacnejší |
| Xiaomi Pad 8 8/128GB Green (71768) | 458.90 € | **437.90 €** | 10.1 % | **5.0 %** | 333.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 465.50 € | **444.50 €** | 10.1 % | **5.1 %** | 352.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZTE Nubia Air Pro 5G bílý | 459.50 € | **438.50 €** | 10.1 % | **5.1 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3WFU4841MCC | 461.50 € | **440.50 €** | 10.0 % | **5.0 %** | 432.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A7 bílá | 560.50 € | **539.50 €** | 10.0 % | **5.9 %** | 539.60 € | stávame sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 315.50 € | **295.00 €** | 15.0 % | **7.5 %** | 295.04 € | stávame sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 239.00 € | **218.50 €** | 24.5 % | **13.8 %** | 218.64 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 557.50 € | **537.00 €** | 10.0 % | **6.0 %** | 537.20 € | stávame sa najlacnejší |
| LG FA2S8V3GN3W | 444.90 € | **424.50 €** | 10.1 % | **5.0 %** | 358.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B5RCNA416HXBR | 456.90 € | **436.50 €** | 10.0 % | **5.1 %** | 426.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Router GL.iNet Puli AX 5G NR | 522.90 € | **502.50 €** | 15.0 % | **10.5 %** | 502.74 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 439.50 € | **419.50 €** | 10.0 % | **5.0 %** | 368.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 9N3B-S | 434.90 € | **414.90 €** | 10.1 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 98.50 € | **78.50 €** | 44.0 % | **14.7 %** | 78.90 € | stávame sa najlacnejší |
| Guzzanti GZ 340A | 431.90 € | **412.00 €** | 10.1 % | **5.0 %** | 383.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 451.90 € | **432.00 €** | 15.0 % | **9.9 %** | 432.20 € | stávame sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 431.50 € | **411.90 €** | 10.0 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 478.50 € | **458.90 €** | 15.0 % | **10.3 %** | 459.00 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 422.50 € | **403.00 €** | 10.1 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE75LS03HW | 2768.00 € | **2748.50 €** | 13.5 % | **12.7 %** | 2748.71 € | stávame sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 693.90 € | **674.50 €** | 10.1 % | **7.0 %** | 674.58 € | stávame sa najlacnejší |
| Gorenje NRK620EAW4 | 414.90 € | **395.90 €** | 10.1 % | **5.0 %** | 377.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **68.90 €** | 43.8 % | **12.7 %** | 69.00 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **192.00 €** | 15.1 % | **5.0 %** | 173.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 572.50 € | **554.00 €** | 15.0 % | **11.3 %** | 554.45 € | stávame sa najlacnejší |
| Beko HII64600AFT | 390.50 € | **372.50 €** | 10.1 % | **5.0 %** | 284.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fén MOVA Aero C v ružovej farbe | 206.90 € | **188.90 €** | 15.1 % | **5.1 %** | 121.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 BLACK | 396.90 € | **378.90 €** | 10.0 % | **5.1 %** | 319.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS642D90X | 394.90 € | **376.90 €** | 10.1 % | **5.1 %** | 323.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BM3WFU3941WBW | 391.50 € | **373.50 €** | 10.1 % | **5.0 %** | 358.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WDSI96A | 391.50 € | **373.50 €** | 10.1 % | **5.0 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 396.90 € | **378.90 €** | 10.1 % | **5.1 %** | 369.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 67.50 € | **49.50 €** | 44.0 % | **5.6 %** | 49.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 24 GS2401 | 505.50 € | **487.90 €** | 15.0 % | **11.0 %** | 487.95 € | stávame sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Thomas Aqua + Pet & Family | 381.50 € | **364.00 €** | 10.1 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Mini LED UE43M70H | 380.90 € | **363.50 €** | 10.0 % | **5.0 %** | 325.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 384.90 € | **367.50 €** | 10.0 % | **5.0 %** | 363.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 547.00 € | **529.90 €** | 15.0 % | **11.4 %** | 529.95 € | stávame sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 366.50 € | **349.50 €** | 10.1 % | **5.0 %** | 324.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje DE69CS | 516.50 € | **499.50 €** | 10.1 % | **6.5 %** | 499.55 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (červený) | 292.50 € | **275.50 €** | 15.0 % | **8.3 %** | 275.70 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 387.00 € | **370.00 €** | 15.0 % | **9.9 %** | 370.32 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **281.90 €** | 15.0 % | **8.6 %** | 282.00 € | stávame sa najlacnejší |
| BEKO BBIR17300BCS | 358.50 € | **342.00 €** | 10.1 % | **5.0 %** | 254.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Aurzen Eazze D1G | 196.00 € | **179.50 €** | 14.9 % | **5.2 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kalibrátor procesov Uni-T UT705 | 289.00 € | **272.50 €** | 15.0 % | **8.4 %** | 272.68 € | stávame sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.50 €** | 14.9 % | **9.7 %** | 346.90 € | stávame sa najlacnejší |
| Gorenje RK14CPS4 | 362.90 € | **346.50 €** | 10.1 % | **5.1 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás MERACH MR-T25B2 | 372.90 € | **356.50 €** | 15.1 % | **10.0 %** | 356.52 € | stávame sa najlacnejší |
| ETA Storio II 2043 90030 černá | 347.90 € | **331.90 €** | 10.1 % | **5.0 %** | 268.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 5G 8/256GB ZAFM0293CZ | 354.90 € | **338.90 €** | 10.1 % | **5.1 %** | 312.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 200.00 € | **184.50 €** | 14.0 % | **5.2 %** | 184.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 113.50 € | **98.00 €** | 43.9 % | **24.3 %** | 98.34 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 347.90 € | **332.50 €** | 10.0 % | **5.2 %** | 321.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool OMSR58CU1SX | 344.90 € | **329.50 €** | 10.0 % | **5.1 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 235 | 459.90 € | **444.50 €** | 10.0 % | **6.4 %** | 444.54 € | stávame sa najlacnejší |
| Whirlpool MWSC 833 SB | 331.50 € | **316.50 €** | 10.1 % | **5.2 %** | 250.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT černé | 167.50 € | **152.50 €** | 15.7 % | **5.3 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 167.50 € | **152.50 €** | 15.7 % | **5.3 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO B5RCNA406HXB3 | 536.90 € | **522.00 €** | 10.0 % | **7.0 %** | 522.20 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 524.50 € | **510.00 €** | 10.1 % | **7.0 %** | 510.10 € | stávame sa najlacnejší |
| MOTOROLA Moto G57 Power 12+256GB Green | 305.50 € | **291.50 €** | 10.2 % | **5.1 %** | 228.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá VIAIM Nano+ AI s hlasovým záznamníkom (str... | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 104.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E10 | 313.90 € | **299.90 €** | 10.0 % | **5.1 %** | 254.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 303.90 € | **289.90 €** | 10.1 % | **5.1 %** | 274.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO X6 | 125.50 € | **111.50 €** | 18.4 % | **5.2 %** | 99.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SIS 512 TCX | 498.50 € | **484.50 €** | 10.1 % | **7.0 %** | 484.60 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **216.50 €** | 15.0 % | **8.0 %** | 216.63 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 301.50 € | **287.90 €** | 10.0 % | **5.1 %** | 254.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 65.50 € | **51.90 €** | 33.5 % | **5.8 %** | 51.99 € | stávame sa najlacnejší |
| Okuliare RayNeo X3 Pro AR | 1549.90 € | **1536.50 €** | 15.0 % | **14.0 %** | 1536.90 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 292.90 € | **279.50 €** | 10.1 % | **5.0 %** | 229.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY STRDH190 | 297.90 € | **284.50 €** | 10.1 % | **5.1 %** | 274.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera IP venkovní NEDIS WIFICO22CWT / Wi-Fi / 3MP /... | 99.00 € | **85.90 €** | 21.5 % | **5.4 %** | 78.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-S202D SILVER | 284.50 € | **271.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CIO 225 EE/N | 286.50 € | **273.50 €** | 10.1 % | **5.1 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT385 Meracie zariadenie výkonu lasera | 156.50 € | **143.50 €** | 14.9 % | **5.3 %** | 141.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 335.00 € | **322.00 €** | 14.9 % | **10.5 %** | 322.01 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R25 RS091 | 1008.50 € | **995.50 €** | 15.0 % | **13.5 %** | 995.90 € | stávame sa najlacnejší |
| Electrolux EOF3H50BK | 281.50 € | **268.90 €** | 10.1 % | **5.1 %** | 207.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOF3H40TH | 272.50 € | **259.90 €** | 10.1 % | **5.0 %** | 234.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO BT 2 gray 0001/3973 reproduktor... | 167.00 € | **154.50 €** | 13.8 % | **5.3 %** | 143.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 307.50 € | **295.00 €** | 15.0 % | **10.3 %** | 295.08 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **295.00 €** | 15.0 % | **10.3 %** | 295.08 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1292.50 € | **1280.00 €** | 10.1 % | **9.0 %** | 1280.29 € | stávame sa najlacnejší |
| Beko BU1154HCN | 281.90 € | **269.50 €** | 10.0 % | **5.2 %** | 265.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT100 PRO | 145.00 € | **132.90 €** | 14.8 % | **5.2 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica GWAS610DL | 255.50 € | **243.50 €** | 10.2 % | **5.0 %** | 215.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **141.50 €** | 50.2 % | **38.5 %** | 141.81 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 81.50 € | **69.50 €** | 57.1 % | **34.0 %** | 69.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 81.50 € | **69.50 €** | 44.2 % | **23.0 %** | 69.90 € | stávame sa najlacnejší |
| Beko CF200EWN | 259.90 € | **248.00 €** | 10.1 % | **5.0 %** | 214.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool OMK38HU0B | 259.90 € | **248.00 €** | 10.0 % | **5.0 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540WP | 426.90 € | **415.00 €** | 10.1 % | **7.0 %** | 415.10 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 247.50 € | **235.90 €** | 10.2 % | **5.1 %** | 235.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0033 FUN WHEELS LIGHT ... | 113.00 € | **101.50 €** | 17.1 % | **5.1 %** | 92.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka elektrická REBEL ZAB0034 FUN WHEELS LIGHT ... | 113.00 € | **101.50 €** | 17.1 % | **5.1 %** | 92.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 169.50 € | **158.00 €** | 18.5 % | **10.5 %** | 158.02 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 407.50 € | **396.00 €** | 10.1 % | **7.0 %** | 396.10 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 380.50 € | **369.00 €** | 10.1 % | **6.8 %** | 369.20 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 250.90 € | **239.50 €** | 10.0 % | **5.0 %** | 228.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 131.90 € | **120.50 €** | 24.3 % | **13.6 %** | 120.57 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 246.90 € | **235.50 €** | 10.1 % | **5.0 %** | 235.70 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **251.50 €** | 15.0 % | **10.0 %** | 251.52 € | stávame sa najlacnejší |
| FINLUX 65FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 669.90 € | **658.50 €** | 5429.3 % | **5335.2 %** | 658.90 € | stávame sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **119.90 €** | 14.9 % | **5.2 %** | 111.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 3-pack) | 233.50 € | **222.50 €** | 10.2 % | **5.0 %** | 97.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta Extreme Dry Compact DH5250F0 | 243.90 € | **232.90 €** | 10.1 % | **5.1 %** | 187.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Black | 241.50 € | **230.50 €** | 10.2 % | **5.2 %** | 196.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 215.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 215.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 230.00 € | **219.00 €** | 10.7 % | **5.4 %** | 219.14 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 69.50 € | **58.50 €** | 43.9 % | **21.1 %** | 58.76 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 125.50 € | **114.50 €** | 24.1 % | **13.2 %** | 114.81 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **143.50 €** | 15.1 % | **6.9 %** | 143.90 € | stávame sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 59.50 € | **48.90 €** | 40.2 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 4/128GB (ZAFR0018CZ) | 228.50 € | **217.90 €** | 10.2 % | **5.1 %** | 183.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC772830 | 226.50 € | **215.90 €** | 10.2 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.90 €** | 14.9 % | **8.9 %** | 190.00 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **247.00 €** | 15.1 % | **10.4 %** | 247.03 € | stávame sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1559.50 € | **1549.00 €** | 10.0 % | **9.3 %** | 1549.04 € | stávame sa najlacnejší |
| Guzzanti GZ 338 | 583.00 € | **572.50 €** | 10.0 % | **8.0 %** | 572.54 € | stávame sa najlacnejší |
| Router GL.iNet Slate 7 | 208.00 € | **197.50 €** | 14.9 % | **9.1 %** | 197.60 € | stávame sa najlacnejší |
| G3Ferrari G2017500 | 229.90 € | **219.50 €** | 10.0 % | **5.1 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica DRP 6412 DW | 217.50 € | **207.50 €** | 10.2 % | **5.2 %** | 158.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 373.50 € | **363.50 €** | 7.9 % | **5.0 %** | 317.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIM12300X | 220.00 € | **210.00 €** | 10.0 % | **5.0 %** | 175.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **110.50 €** | 14.8 % | **5.3 %** | 83.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo C420S2 | 212.90 € | **202.90 €** | 10.2 % | **5.0 %** | 190.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 225.50 € | **215.50 €** | 10.1 % | **5.2 %** | 205.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X70 Soundbar | 612.90 € | **602.90 €** | 15.0 % | **13.1 %** | 602.94 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 217.50 € | **207.50 €** | 15.1 % | **9.8 %** | 207.82 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 109.50 € | **99.50 €** | 24.5 % | **13.1 %** | 99.83 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **181.00 €** | 15.0 % | **9.0 %** | 181.38 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 182.90 € | **173.00 €** | 15.1 % | **8.9 %** | 173.42 € | stávame sa najlacnejší |
| Habotest HT2302 Digitálny tester zemného odporu | 116.00 € | **106.50 €** | 14.9 % | **5.5 %** | 88.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 110G | 331.50 € | **322.00 €** | 10.1 % | **7.0 %** | 322.12 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 214.50 € | **205.00 €** | 15.0 % | **9.9 %** | 205.25 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **324.50 €** | 15.0 % | **11.7 %** | 324.84 € | stávame sa najlacnejší |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 180.00 € | **170.50 €** | 24.7 % | **18.2 %** | 170.85 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **415.00 €** | 15.0 % | **12.5 %** | 415.35 € | stávame sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **159.50 €** | 14.9 % | **8.5 %** | 159.90 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **100.50 €** | 15.0 % | **5.2 %** | 94.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá GARRETT MS-2 s 2-pinovým konektorom a vodo... | 123.90 € | **114.50 €** | 15.0 % | **6.3 %** | 114.67 € | stávame sa najlacnejší |
| CANON i-SENSYS MF3010 | 202.90 € | **193.90 €** | 10.0 % | **5.1 %** | 153.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 1226 | 195.50 € | **186.50 €** | 10.1 % | **5.1 %** | 172.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2011300 | 205.50 € | **196.50 €** | 10.1 % | **5.2 %** | 191.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux KGS64362XX | 200.50 € | **191.50 €** | 10.1 % | **5.1 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **95.50 €** | 14.9 % | **5.0 %** | 92.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 31.00 € | **22.00 €** | 53.7 % | **9.1 %** | 22.05 € | stávame sa najlacnejší |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 210.00 € | **201.00 €** | 24.9 % | **19.6 %** | 201.14 € | stávame sa najlacnejší |
| Moza Racing MTLP AS009 Panel pre vzlet a pristátie (PC) | 154.50 € | **145.50 €** | 15.1 % | **8.4 %** | 145.78 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 64.90 € | **56.00 €** | 25.0 % | **7.8 %** | 56.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 50.90 € | **42.00 €** | 44.2 % | **19.0 %** | 42.50 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **280.00 €** | 15.0 % | **11.4 %** | 280.44 € | stávame sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 135.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NEEWER SF120Q 120 cm parabolický softbox | 102.00 € | **93.50 €** | 14.8 % | **5.2 %** | 82.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC728D10 | 182.50 € | **174.00 €** | 10.2 % | **5.0 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **330.50 €** | 15.0 % | **12.1 %** | 330.59 € | stávame sa najlacnejší |
| Batéria Jupio Alkaline AA balenie 100ks | 44.00 € | **35.50 €** | 34.5 % | **8.5 %** | 35.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 53.50 € | **45.00 €** | 43.6 % | **20.7 %** | 45.34 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 117.50 € | **109.00 €** | 16.3 % | **7.9 %** | 109.34 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 104.50 € | **96.00 €** | 43.9 % | **32.2 %** | 96.37 € | stávame sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 657.50 € | **649.00 €** | 11.4 % | **10.0 %** | 649.43 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 94.50 € | **86.00 €** | 19.5 % | **8.8 %** | 86.49 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **174.00 €** | 15.0 % | **9.7 %** | 174.50 € | stávame sa najlacnejší |
| Blender G21 Perfection brown | 211.90 € | **203.50 €** | 18.5 % | **13.8 %** | 203.90 € | stávame sa najlacnejší |
| Blender G21 Perfection Cappuccino | 211.90 € | **203.50 €** | 18.5 % | **13.8 %** | 203.90 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **97.50 €** | 15.1 % | **6.0 %** | 97.90 € | stávame sa najlacnejší |
| Electrolux 600 FLEX EES42210IX | 471.00 € | **462.90 €** | 6.9 % | **5.0 %** | 439.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64220SW | 172.50 € | **164.50 €** | 10.1 % | **5.0 %** | 122.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 177.50 € | **169.50 €** | 10.1 % | **5.1 %** | 141.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-830SB-BLK Century Signature | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 147.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX U-Box J42 Nano/bez OS | 176.90 € | **168.90 €** | 10.1 % | **5.1 %** | 156.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48S | 166.50 € | **158.50 €** | 10.3 % | **5.0 %** | 149.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TV držák Kruger&Matz KM1310  (43-100'' 80kg) univerz... | 60.90 € | **52.90 €** | 21.4 % | **5.4 %** | 51.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 150.50 € | **142.50 €** | 11.2 % | **5.3 %** | 141.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 103RB | 218.50 € | **210.50 €** | 10.2 % | **6.2 %** | 210.58 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 47.50 € | **39.50 €** | 38.3 % | **15.0 %** | 39.90 € | stávame sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 49.90 € | **42.00 €** | 64.6 % | **38.5 %** | 42.21 € | stávame sa najlacnejší |
| Gorenje NRK620EABK4 | 433.00 € | **425.50 €** | 7.0 % | **5.1 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Naparovač odevov Neakasa Magic 1 | 88.00 € | **80.50 €** | 14.8 % | **5.0 %** | 70.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 154.50 € | **147.00 €** | 11.1 % | **5.7 %** | 147.19 € | stávame sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 107.50 € | **100.00 €** | 14.8 % | **6.8 %** | 100.42 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 41.50 € | **34.00 €** | 32.4 % | **8.4 %** | 34.43 € | stávame sa najlacnejší |
| TESLA AirCook & Grill QG800 WiFi | 164.90 € | **157.50 €** | 10.3 % | **5.3 %** | 113.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| XIAOMI Mesh System AX3000 NE (3-pack) | 165.90 € | **158.50 €** | 10.0 % | **5.1 %** | 116.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LHR3233CK | 160.90 € | **153.50 €** | 10.1 % | **5.0 %** | 128.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat VIOLA 200 /bílé-černé/ 0000/2936 | 49.90 € | **42.50 €** | 23.7 % | **5.3 %** | 42.90 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 158.00 € | **150.90 €** | 10.0 % | **5.1 %** | 145.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Arzopa A1 GAMUT 15,6" | 85.00 € | **77.90 €** | 15.0 % | **5.4 %** | 76.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HIC 64401 | 154.00 € | **147.00 €** | 10.0 % | **5.0 %** | 135.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8501A | 157.50 € | **150.50 €** | 10.0 % | **5.1 %** | 144.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT310 | 289.90 € | **282.90 €** | 15.0 % | **12.3 %** | 282.95 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 189.50 € | **182.50 €** | 15.1 % | **10.8 %** | 182.63 € | stávame sa najlacnejší |
| Odšťavovač AMZCHEF CE-ZM1902B-SV | 81.00 € | **74.00 €** | 15.0 % | **5.1 %** | 74.15 € | stávame sa najlacnejší |
| Ultimea Poseidon R3T Soundbar | 90.00 € | **83.00 €** | 14.9 % | **6.0 %** | 83.22 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **175.50 €** | 14.9 % | **10.5 %** | 175.78 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **522.50 €** | 15.0 % | **13.5 %** | 522.80 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 47.00 € | **40.00 €** | 58.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 91.50 € | **84.50 €** | 14.9 % | **6.1 %** | 84.90 € | stávame sa najlacnejší |
| DOMO DO244SV | 147.90 € | **141.00 €** | 10.2 % | **5.0 %** | 131.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 79.90 € | **73.00 €** | 15.0 % | **5.1 %** | 67.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OfficeJet Pro 8132e AiO HP+ (40Q45B) | 149.50 € | **142.90 €** | 10.1 % | **5.2 %** | 97.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 Power 4+256GB Blue | 152.50 € | **145.90 €** | 10.0 % | **5.2 %** | 112.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO4931EA | 135.50 € | **128.90 €** | 10.4 % | **5.0 %** | 106.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA EliteCook K70 Ultra | 147.50 € | **140.90 €** | 9.9 % | **5.0 %** | 129.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC517DE0 | 139.50 € | **132.90 €** | 10.4 % | **5.2 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Pink | 147.50 € | **140.90 €** | 10.2 % | **5.2 %** | 132.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX TT600S | 78.50 € | **71.90 €** | 15.0 % | **5.3 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 35B1 | 143.00 € | **136.50 €** | 10.0 % | **5.0 %** | 126.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenciou | 77.00 € | **70.50 €** | 14.9 % | **5.2 %** | 67.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA420 Deodorizačný modul... | 42.00 € | **35.50 €** | 33.9 % | **13.1 %** | 35.75 € | stávame sa najlacnejší |
| Herný volant PXN-V900 Gen2 | 99.50 € | **93.00 €** | 14.8 % | **7.3 %** | 93.27 € | stávame sa najlacnejší |
| IPL epilátor ANLAN 02-ATMY52-0RE | 110.50 € | **104.00 €** | 15.0 % | **8.2 %** | 104.31 € | stávame sa najlacnejší |
| Xiaomi Watch S4 Silver | 144.90 € | **138.50 €** | 10.0 % | **5.1 %** | 118.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 47.90 € | **41.50 €** | 49.9 % | **29.9 %** | 41.62 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 345.00 € | **338.90 €** | 14.9 % | **12.9 %** | 339.00 € | stávame sa najlacnejší |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 142.00 € | **135.90 €** | 10.0 % | **5.3 %** | 130.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal OptiGrill 2v1 GC773D30 | 167.00 € | **160.90 €** | 10.1 % | **6.0 %** | 161.00 € | stávame sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| UTRAI JS1 Pro – štartér do auta | 68.90 € | **62.90 €** | 15.2 % | **5.2 %** | 49.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Low Sugar Rice Cooker 3000WT | 128.90 € | **122.90 €** | 10.2 % | **5.1 %** | 79.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO 4250 CLI | 137.50 € | **131.50 €** | 10.2 % | **5.4 %** | 103.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kodak Friendly Zoom FZ45 Black | 136.90 € | **130.90 €** | 10.0 % | **5.2 %** | 108.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1-Ss | 131.00 € | **125.00 €** | 10.0 % | **5.0 %** | 113.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálne nočné videnie FNIRSI NVS-40 so záznamom v ... | 69.50 € | **63.50 €** | 15.3 % | **5.4 %** | 54.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW501815 | 136.90 € | **130.90 €** | 10.1 % | **5.2 %** | 122.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 70.00 € | **64.00 €** | 15.0 % | **5.1 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS620C10S | 344.00 € | **338.00 €** | 6.9 % | **5.0 %** | 334.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Televes 552220 Crocodile 5G LTE700 domovní zesilovač | 38.50 € | **32.50 €** | 24.7 % | **5.2 %** | 29.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjačka SkyRC Q200neo | 128.50 € | **122.50 €** | 15.2 % | **9.8 %** | 122.63 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 77.50 € | **71.50 €** | 15.3 % | **6.3 %** | 71.67 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 77.50 € | **71.50 €** | 15.4 % | **6.4 %** | 71.67 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 25.50 € | **19.50 €** | 55.1 % | **18.6 %** | 19.74 € | stávame sa najlacnejší |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 29.00 € | **23.00 €** | 37.2 % | **8.8 %** | 23.25 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.50 €** | 15.2 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 56.50 € | **50.50 €** | 25.1 % | **11.8 %** | 50.90 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 74.00 € | **68.00 €** | 15.0 % | **5.7 %** | 68.47 € | stávame sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 272.90 € | **267.00 €** | 9.3 % | **7.0 %** | 267.27 € | stávame sa najlacnejší |
| Evolveo StrongVision Solar 4G | 129.50 € | **123.90 €** | 10.0 % | **5.3 %** | 103.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 169.50 € | **163.90 €** | 8.7 % | **5.1 %** | 163.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 119.50 € | **113.90 €** | 10.5 % | **5.3 %** | 113.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA PrimeSound HQ-995X | 182.50 € | **176.90 €** | 10.0 % | **6.7 %** | 176.92 € | stávame sa najlacnejší |
| Blesk GODOX V860III TTL pre Sony | 204.50 € | **198.90 €** | 15.0 % | **11.8 %** | 199.00 € | stávame sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 3-pack) | 120.50 € | **115.00 €** | 10.1 % | **5.0 %** | 93.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.00 €** | 46.8 % | **5.4 %** | 6.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera EMEET SmartCam S600L | 65.00 € | **59.50 €** | 14.7 % | **5.0 %** | 54.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-6 litinové neoprenové HE... | 37.50 € | **32.00 €** | 23.3 % | **5.2 %** | 27.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 161 | 248.50 € | **243.00 €** | 10.2 % | **7.7 %** | 243.03 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 67.50 € | **62.00 €** | 50.4 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 99.50 € | **94.00 €** | 24.2 % | **17.4 %** | 94.36 € | stávame sa najlacnejší |
| Športové okuliare ZEBLAZE Q01 Green AI | 67.50 € | **62.00 €** | 14.8 % | **5.4 %** | 62.49 € | stávame sa najlacnejší |
| Športové okuliare ZEBLAZE Q01 s umelou inteligenciou... | 67.50 € | **62.00 €** | 14.8 % | **5.4 %** | 62.49 € | stávame sa najlacnejší |
| Beko HNU61422B | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 88.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.90 € | **121.50 €** | 10.0 % | **5.4 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta HU4020F0 | 112.90 € | **107.50 €** | 10.4 % | **5.1 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 W | 115.90 € | **110.50 €** | 10.4 % | **5.2 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 B | 115.90 € | **110.50 €** | 10.4 % | **5.2 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 4+64GB Blue | 117.90 € | **112.50 €** | 10.3 % | **5.2 %** | 98.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG MS23K3555EK/EO | 118.90 € | **113.50 €** | 10.5 % | **5.4 %** | 109.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 250.90 € | **245.50 €** | 12.0 % | **9.6 %** | 245.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.90 € | **33.50 €** | 35.7 % | **16.8 %** | 33.53 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 63.00 € | **57.90 €** | 14.8 % | **5.5 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.00 € | **113.90 €** | 10.1 % | **5.3 %** | 112.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS7550i White | 108.50 € | **103.50 €** | 10.4 % | **5.3 %** | 76.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RY6555WH | 106.50 € | **101.50 €** | 10.5 % | **5.3 %** | 87.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal CY505EE0 | 110.50 € | **105.50 €** | 10.4 % | **5.4 %** | 96.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DMS-108/E) | 106.50 € | **101.50 €** | 10.3 % | **5.2 %** | 92.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.50 € | **51.50 €** | 15.3 % | **5.1 %** | 44.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente G4 robotický vysavač | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 108.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-G4 | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 108.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 105.50 € | **100.50 €** | 10.3 % | **5.1 %** | 96.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Puzdro Sunnylife AQX-20 pre Mavic 4 PRO & RC 2 c | 57.50 € | **52.50 €** | 15.3 % | **5.3 %** | 50.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42326PC | 114.50 € | **109.50 €** | 10.2 % | **5.4 %** | 108.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 34.50 € | **29.50 €** | 58.8 % | **35.8 %** | 29.57 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 50.50 € | **45.50 €** | 18.4 % | **6.6 %** | 45.79 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 50.50 € | **45.50 €** | 18.4 % | **6.6 %** | 45.79 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.50 €** | 15.0 % | **14.3 %** | 799.79 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA210 Jednorazové vrecko... | 25.00 € | **20.00 €** | 38.3 % | **10.6 %** | 20.30 € | stávame sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **10.50 €** | 56.3 % | **5.9 %** | 10.90 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 85.90 € | **81.00 €** | 15.1 % | **8.5 %** | 81.10 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 104.90 € | **100.00 €** | 15.1 % | **9.8 %** | 100.11 € | stávame sa najlacnejší |
| Vodotesné puzdro Puluz (45 m) pre iPhone: na podvodn... | 64.90 € | **60.00 €** | 15.0 % | **6.3 %** | 60.46 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **26.00 €** | 59.7 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 830.90 € | **826.00 €** | 8.2 % | **7.6 %** | 826.35 € | stávame sa najlacnejší |
| Rowenta RO3753EA | 96.50 € | **91.90 €** | 10.5 % | **5.2 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 110.50 € | **105.90 €** | 24.4 % | **19.2 %** | 105.93 € | stávame sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 99.00 € | **94.50 €** | 10.0 % | **5.0 %** | 83.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RH 6545 WH | 97.50 € | **93.00 €** | 10.1 % | **5.0 %** | 87.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovačka Vacu Power 500 | 90.50 € | **86.00 €** | 10.6 % | **5.1 %** | 83.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal B864SA74 | 103.00 € | **98.50 €** | 10.1 % | **5.3 %** | 98.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **26.00 €** | 59.0 % | **35.5 %** | 26.15 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **81.00 €** | 14.9 % | **8.8 %** | 81.28 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 36.50 € | **32.00 €** | 22.1 % | **7.0 %** | 32.29 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 24.00 € | **19.50 €** | 33.4 % | **8.4 %** | 19.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 21.00 € | **16.50 €** | 43.6 % | **12.8 %** | 16.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **21.50 €** | 42.8 % | **18.1 %** | 21.90 € | stávame sa najlacnejší |
| Letecký simulátor MOZA RACING AB6 | 454.00 € | **449.50 €** | 14.9 % | **13.8 %** | 449.90 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 31.50 € | **27.00 €** | 54.0 % | **32.0 %** | 27.47 € | stávame sa najlacnejší |
| TEFAL GC 305012 | 95.90 € | **91.50 €** | 10.2 % | **5.1 %** | 73.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fujifilm INSTAX MINI 13 - Green | 91.90 € | **87.50 €** | 10.4 % | **5.1 %** | 78.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fujifilm INSTAX MINI 13 - Pink | 91.90 € | **87.50 €** | 10.4 % | **5.1 %** | 78.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO331L | 106.90 € | **102.50 €** | 10.0 % | **5.5 %** | 101.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 123.90 € | **119.50 €** | 15.1 % | **11.0 %** | 119.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 14.90 € | **10.50 €** | 49.7 % | **5.5 %** | 9.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.90 € | **20.50 €** | 38.3 % | **13.8 %** | 20.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **23.50 €** | 59.0 % | **33.9 %** | 23.90 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 13.90 € | **9.60 €** | 56.1 % | **7.8 %** | 9.70 € | stávame sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 36.00 € | **31.90 €** | 19.6 % | **6.0 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **82.90 €** | 15.0 % | **9.6 %** | 82.98 € | stávame sa najlacnejší |
| Lamax PartyGo1 Play | 84.50 € | **80.50 €** | 10.3 % | **5.1 %** | 50.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell „Standard Day“ pre OSMO NANO –... | 46.90 € | **42.90 €** | 15.2 % | **5.3 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 99.90 € | **95.90 €** | 9.4 % | **5.0 %** | 77.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 2-pack) | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 63.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SALENTE SuChef | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 72.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **45.50 €** | 15.3 % | **6.0 %** | 39.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI DSO-TC3 SigGen 3-v-1 tester tranzistorov – ru... | 50.50 € | **46.50 €** | 14.7 % | **5.6 %** | 42.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **42.90 €** | 15.3 % | **5.5 %** | 42.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI PRO MP273 E14A | 88.50 € | **84.50 €** | 10.0 % | **5.1 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 40.00 € | **36.00 €** | 47.6 % | **32.8 %** | 36.03 € | stávame sa najlacnejší |
| Cycplus AS1 PRO POCKET PRO AIRBANK – mini pumpa na b... | 51.00 € | **47.00 €** | 14.7 % | **5.7 %** | 47.04 € | stávame sa najlacnejší |
| Ariete ART 4631 | 138.50 € | **134.50 €** | 10.2 % | **7.1 %** | 134.67 € | stávame sa najlacnejší |
| Digitálny kliešťový merač Habotest HT208D | 47.50 € | **43.50 €** | 15.1 % | **5.4 %** | 43.68 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 410.00 € | **406.00 €** | 10.6 % | **9.6 %** | 406.19 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 412.50 € | **408.50 €** | 9.5 % | **8.5 %** | 408.69 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.50 € | **223.50 €** | 15.1 % | **13.1 %** | 223.69 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.50 € | **223.50 €** | 15.1 % | **13.1 %** | 223.69 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V45i | 330.50 € | **326.50 €** | 15.0 % | **13.7 %** | 326.69 € | stávame sa najlacnejší |
| Grafický tablet Huion Slate 11 | 274.50 € | **270.50 €** | 15.1 % | **13.4 %** | 270.70 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (červený) | 245.50 € | **241.50 €** | 15.1 % | **13.2 %** | 241.70 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE E25 Pro | 235.50 € | **231.50 €** | 14.9 % | **13.0 %** | 231.70 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 220.00 € | **216.00 €** | 15.0 % | **12.9 %** | 216.21 € | stávame sa najlacnejší |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 305.00 € | **301.00 €** | 14.9 % | **13.4 %** | 301.21 € | stávame sa najlacnejší |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 75.50 € | **71.50 €** | 23.4 % | **16.9 %** | 71.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 21.00 € | **17.00 €** | 36.3 % | **10.3 %** | 17.29 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.90 € | **81.00 €** | 10.2 % | **5.1 %** | 76.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 108.90 € | **105.00 €** | 15.0 % | **10.8 %** | 105.05 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.50 € | **9.60 €** | 55.0 % | **10.2 %** | 9.70 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 30.90 € | **27.00 €** | 38.9 % | **21.3 %** | 27.10 € | stávame sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 447.90 € | **444.00 €** | 5.9 % | **5.0 %** | 380.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **345.00 €** | 15.0 % | **13.7 %** | 345.08 € | stávame sa najlacnejší |
| Projektor Ultima Poseidon E40 | 402.90 € | **399.00 €** | 15.0 % | **13.9 %** | 399.10 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V25i Pro II | 317.90 € | **314.00 €** | 15.0 % | **13.6 %** | 314.11 € | stávame sa najlacnejší |
| Tefal GV 9620E0 | 369.90 € | **366.00 €** | 8.8 % | **7.7 %** | 366.20 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 28.50 € | **24.90 €** | 20.9 % | **5.6 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mobilný ovládač GameSir X5s (čierny) | 45.50 € | **41.90 €** | 14.5 % | **5.5 %** | 38.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus AS210 MAX AT1 Max Anoutway – mini pumpa na b... | 43.50 € | **39.90 €** | 14.5 % | **5.0 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **28.90 €** | 59.9 % | **42.2 %** | 29.00 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 19.50 € | **15.90 €** | 46.0 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| Tefal FV6840E0 | 76.50 € | **72.90 €** | 10.7 % | **5.5 %** | 69.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Continenta Dřevěný chlebník | 76.50 € | **72.90 €** | 10.6 % | **5.4 %** | 70.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Arzopa A3C Pro 13,3" | 121.50 € | **117.90 €** | 8.3 % | **5.1 %** | 117.92 € | stávame sa najlacnejší |
| Strong SRT 420 Android TV box | 78.00 € | **74.50 €** | 10.0 % | **5.1 %** | 64.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Memory card Samsung EVO Plus microSD 2021 64GB (MB-M... | 47.00 € | **43.50 €** | 14.4 % | **5.9 %** | 35.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Doplnok xTool Smart World pre mBot2 | 82.50 € | **79.00 €** | 15.0 % | **10.1 %** | 79.12 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 35.50 € | **32.00 €** | 19.8 % | **8.0 %** | 32.21 € | stávame sa najlacnejší |
| Stolný statív Puluz PU3070GT | 44.00 € | **40.50 €** | 15.1 % | **5.9 %** | 40.79 € | stávame sa najlacnejší |
| Súprava inteligentného solárneho vodného čerpadla s ... | 62.50 € | **59.00 €** | 14.7 % | **8.3 %** | 59.30 € | stávame sa najlacnejší |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 98.50 € | **95.00 €** | 21543.6 % | **20774.5 %** | 95.37 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 27.50 € | **24.00 €** | 34.6 % | **17.5 %** | 24.50 € | stávame sa najlacnejší |
| Ariete ART 583/04 | 76.90 € | **73.50 €** | 10.5 % | **5.6 %** | 66.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Excellent brown | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 211.90 € | **208.50 €** | 18.5 % | **16.6 %** | 208.90 € | stávame sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.50 €** | 15.2 % | **9.8 %** | 69.90 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Sony | 127.90 € | **124.50 €** | 15.1 % | **12.1 %** | 124.90 € | stávame sa najlacnejší |
| Súprava príslušenstva pre vysávač MOVA P50 PU, P50 U | 42.90 € | **39.50 €** | 15.5 % | **6.3 %** | 33.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 62.90 € | **59.50 €** | 11.4 % | **5.3 %** | 56.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **19.50 €** | 54.6 % | **31.7 %** | 19.90 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 51.90 € | **48.50 €** | 14.9 % | **7.4 %** | 48.90 € | stávame sa najlacnejší |
| Inteligentný pohlcovač zápachu Petkit | 41.00 € | **37.90 €** | 14.6 % | **5.9 %** | 20.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus AS1 POCKET AIRBANK – mini pumpa na bicykel | 38.00 € | **34.90 €** | 14.9 % | **5.6 %** | 34.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.90 €** | 14.9 % | **9.4 %** | 62.00 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **10.90 €** | 36.5 % | **6.3 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 16.00 € | **12.90 €** | 48.0 % | **19.3 %** | 12.96 € | stávame sa najlacnejší |
| Moza Racing modul osi Z AS003 | 96.00 € | **92.90 €** | 14.9 % | **11.2 %** | 92.98 € | stávame sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 240.00 € | **236.90 €** | 15.0 % | **13.5 %** | 237.00 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 242.00 € | **238.90 €** | 8.4 % | **7.0 %** | 239.00 € | stávame sa najlacnejší |
| ETA Ambito 0516 90000 bílý/tyrkysový | 64.90 € | **61.90 €** | 10.6 % | **5.5 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH955 | 76.50 € | **73.50 €** | 10.0 % | **5.7 %** | 37.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka IMOU CE2P, sada 4 ks | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N'oveen ohřívač vody IWH960 | 76.50 € | **73.50 €** | 10.0 % | **5.7 %** | 49.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FF203130 | 67.90 € | **64.90 €** | 10.0 % | **5.1 %** | 52.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BL16GE30 | 58.90 € | **55.90 €** | 10.7 % | **5.1 %** | 47.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2904/04 | 69.50 € | **66.50 €** | 10.2 % | **5.5 %** | 58.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka s pumpovanými koly NILS Extreme HC300 červená | 110.50 € | **107.50 €** | 8.3 % | **5.4 %** | 100.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné stropné svietidlo CW Yeelight Meteor C300. | 33.90 € | **30.90 €** | 15.4 % | **5.2 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi AX3200 Router (R32/E) | 82.90 € | **79.90 €** | 9.3 % | **5.3 %** | 74.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 36.00 € | **33.00 €** | 14.8 % | **5.3 %** | 28.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Indukční vařič, G1013700, jedn | 70.90 € | **67.90 €** | 10.2 % | **5.6 %** | 63.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 103.90 € | **100.90 €** | 8.4 % | **5.3 %** | 97.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Profi XL + náhrada Static Plus | 62.90 € | **59.90 €** | 10.7 % | **5.4 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.50 € | **63.50 €** | 10.6 % | **5.6 %** | 60.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN-F16 Flight Joystick for PC | 34.50 € | **31.50 €** | 15.3 % | **5.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi V89 (nerezová oceľ, zlatá... | 33.50 € | **30.50 €** | 15.5 % | **5.2 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 58.50 € | **55.50 €** | 10.8 % | **5.1 %** | 54.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 14.90 € | **11.90 €** | 35.0 % | **7.9 %** | 11.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **64.90 €** | 10.1 % | **5.2 %** | 64.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrické čerpadlo Cycplus AL1 | 36.50 € | **33.50 €** | 15.5 % | **6.0 %** | 32.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štúdiové slúchadlá Maono MH700 (čierne) | 34.90 € | **31.90 €** | 15.2 % | **5.3 %** | 31.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 0028 98050 | 67.90 € | **64.90 €** | 10.5 % | **5.6 %** | 64.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Systémy kvapkového a rozprašovacieho zavlažovania | 41.00 € | **38.00 €** | 14.6 % | **6.2 %** | 38.05 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 22.50 € | **19.50 €** | 53.8 % | **33.3 %** | 19.65 € | stávame sa najlacnejší |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 74.50 € | **71.50 €** | 15.0 % | **10.4 %** | 71.67 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **45.00 €** | 14.5 % | **7.4 %** | 45.25 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **36.00 €** | 14.9 % | **6.1 %** | 36.29 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 23.50 € | **20.50 €** | 38.1 % | **20.5 %** | 20.90 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **45.50 €** | 15.0 % | **7.9 %** | 45.90 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **66.00 €** | 15.0 % | **10.2 %** | 66.10 € | stávame sa najlacnejší |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | stávame sa najlacnejší |
| Sprchový stan Trizand 23492 | 24.90 € | **22.00 €** | 18.9 % | **5.1 %** | 16.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9046C | 58.90 € | **56.00 €** | 10.5 % | **5.1 %** | 56.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **36.00 €** | 46.1 % | **35.2 %** | 36.47 € | stávame sa najlacnejší |
| Strong LEAP-AIR Google TV HDMI TV stick | 61.50 € | **58.90 €** | 10.3 % | **5.6 %** | 41.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Aura 5 ANC | 53.50 € | **50.90 €** | 10.9 % | **5.5 %** | 40.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK364G10 Coppertinto | 59.50 € | **56.90 €** | 10.4 % | **5.6 %** | 48.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Vědro Profi Compact + mop P | 52.50 € | **49.90 €** | 11.0 % | **5.5 %** | 43.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3751i White | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 39.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1004500 | 51.50 € | **48.90 €** | 10.7 % | **5.1 %** | 43.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 35.50 € | **32.90 €** | 14.5 % | **6.1 %** | 28.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1019800 Napěňovač Choco-lat | 58.50 € | **55.90 €** | 10.1 % | **5.2 %** | 53.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1013400 | 56.50 € | **53.90 €** | 10.4 % | **5.4 %** | 51.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **25.90 €** | 15.7 % | **5.1 %** | 23.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **57.90 €** | 10.2 % | **5.5 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maono PD100 Microphone Black | 30.50 € | **27.90 €** | 15.1 % | **5.3 %** | 26.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 47.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 23210-70/RH Luna | 51.50 € | **48.90 €** | 11.1 % | **5.5 %** | 48.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **35.90 €** | 55.1 % | **44.6 %** | 35.99 € | stávame sa najlacnejší |
| Joystick PXN-2113 PRO Ovládanie letu PC | 31.50 € | **28.90 €** | 14.6 % | **5.1 %** | 28.99 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.90 €** | 56.5 % | **31.9 %** | 13.96 € | stávame sa najlacnejší |
| LIMO BAR TWIN - Black | 59.00 € | **56.50 €** | 10.0 % | **5.4 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 31.00 € | **28.50 €** | 14.6 % | **5.4 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá QCY HT18 LITE Titanium TWS | 47.00 € | **44.50 €** | 15.1 % | **9.0 %** | 44.53 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 11.50 € | **9.00 €** | 45.2 % | **13.6 %** | 9.04 € | stávame sa najlacnejší |
| Maono BA92 Boom Arm Black | 50.50 € | **48.00 €** | 15.2 % | **9.5 %** | 48.08 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 3 zásuvky IP44, 3 x 2... | 24.00 € | **21.50 €** | 36.3 % | **22.1 %** | 21.67 € | stávame sa najlacnejší |
| Elektrická pumpa Cycplus AS280PRO | 40.50 € | **38.00 €** | 15.5 % | **8.4 %** | 38.17 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 44.9 % | **30.1 %** | 22.20 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **20.00 €** | 55.2 % | **37.9 %** | 20.24 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 53.00 € | **50.50 €** | 14.9 % | **9.5 %** | 50.76 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **31.00 €** | 14.5 % | **5.9 %** | 31.29 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **12.00 €** | 37.7 % | **14.0 %** | 12.30 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 42.50 € | **40.00 €** | 15.1 % | **8.3 %** | 40.33 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 28.38 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **14.50 €** | 47.5 % | **25.8 %** | 14.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **12.00 €** | 58.4 % | **31.1 %** | 12.47 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **83.50 €** | 15.1 % | **11.9 %** | 83.63 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 211.90 € | **209.50 €** | 18.5 % | **17.1 %** | 209.90 € | stávame sa najlacnejší |
| Rowenta RO4B25EA | 96.90 € | **94.50 €** | 10.4 % | **7.6 %** | 94.90 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 10.00 € | **7.60 €** | 38.7 % | **5.4 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 11.90 € | **9.50 €** | 50.0 % | **19.7 %** | 9.56 € | stávame sa najlacnejší |
| Evolveo HDO, aktivní venkovní anténa | 54.90 € | **52.50 €** | 10.4 % | **5.6 %** | 45.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2877/05 | 49.90 € | **47.50 €** | 10.5 % | **5.2 %** | 43.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer VR300 VDSL Router | 53.90 € | **51.50 €** | 10.4 % | **5.4 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO 717 MF | 48.90 € | **46.50 €** | 10.5 % | **5.1 %** | 43.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 52.90 € | **50.50 €** | 10.2 % | **5.2 %** | 50.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecká na odpadky pre Petkit litter box Purobot ULTR... | 31.90 € | **29.50 €** | 15.1 % | **6.4 %** | 29.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 62.90 € | **60.50 €** | 10.4 % | **6.2 %** | 60.55 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.90 € | **19.50 €** | 24.8 % | **11.1 %** | 19.90 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.90 €** | 55.6 % | **7.4 %** | 4.99 € | stávame sa najlacnejší |
| Tefal HT461138 | 45.00 € | **42.90 €** | 10.2 % | **5.1 %** | 35.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel RBY-2003-4 PREMIUM 4 kg (100x150... | 33.00 € | **30.90 €** | 12.3 % | **5.1 %** | 28.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.90 € | **5.80 €** | 55.5 % | **14.2 %** | 5.90 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 11.90 € | **9.80 €** | 44.0 % | **18.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **6.80 €** | 38.4 % | **6.9 %** | 6.90 € | stávame sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 60.50 € | **58.50 €** | 9.2 % | **5.6 %** | 41.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 481.50 € | **479.50 €** | 5.5 % | **5.1 %** | 462.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26380-70 | 40.50 € | **38.50 €** | 11.2 % | **5.7 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff S60ZBTPF Inteligentná zásuvka ZigBee (2ks) | 26.50 € | **24.50 €** | 14.6 % | **6.0 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Pack 6 MAXTRApro PO 2024 | 39.50 € | **37.50 €** | 11.1 % | **5.5 %** | 26.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy PILOT Q2 WiFi | 46.50 € | **44.50 €** | 10.5 % | **5.7 %** | 34.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2863E1 | 41.50 € | **39.50 €** | 10.7 % | **5.3 %** | 35.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 49.90 € | **47.90 €** | 9.6 % | **5.3 %** | 44.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 21.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR ECO - White | 39.90 € | **37.90 €** | 10.9 % | **5.3 %** | 34.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-PA4010 Powerline Starter Kit | 45.50 € | **43.50 €** | 10.1 % | **5.2 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE500X AX1500 WiFi 6 Extender | 41.90 € | **39.90 €** | 10.3 % | **5.1 %** | 36.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Napěňovač mléka, G1017301, 30 | 46.90 € | **44.90 €** | 10.5 % | **5.7 %** | 42.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 18.50 € | **16.50 €** | 20.3 % | **7.3 %** | 14.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1009800 | 42.90 € | **40.90 €** | 10.2 % | **5.1 %** | 38.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar SB-820BT Soundbar | 35.50 € | **33.50 €** | 11.5 % | **5.2 %** | 31.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 20.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Neutralizátor zápachu na čistenie podláh pre MOVA V5... | 26.50 € | **24.50 €** | 14.7 % | **6.0 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **49.50 €** | 10.2 % | **5.9 %** | 48.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO 400 | 31.50 € | **29.50 €** | 12.9 % | **5.7 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.50 € | **32.50 €** | 11.5 % | **5.0 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| Vodné chladenie pre procesor DE360 (biely) | 109.50 € | **107.50 €** | 15.1 % | **13.0 %** | 107.53 € | stávame sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 35.50 € | **33.50 €** | 13.6 % | **7.2 %** | 33.57 € | stávame sa najlacnejší |
| Blender G21 Experience Graphite Black | 253.90 € | **251.90 €** | 18.3 % | **17.3 %** | 252.00 € | stávame sa najlacnejší |
| Blender G21 Experience White | 253.90 € | **251.90 €** | 18.3 % | **17.3 %** | 252.00 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 25.50 € | **23.50 €** | 15.5 % | **6.4 %** | 23.69 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 112.50 € | **110.50 €** | 10.5 % | **8.5 %** | 110.69 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **37.50 €** | 15.3 % | **9.4 %** | 37.72 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 52.50 € | **50.50 €** | 14.6 % | **10.3 %** | 50.76 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 25.50 € | **23.50 €** | 14.3 % | **5.3 %** | 23.79 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **103.50 €** | 15.0 % | **12.8 %** | 103.83 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **24.50 €** | 54.7 % | **43.0 %** | 24.84 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **22.50 €** | 55.4 % | **42.7 %** | 22.87 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 30.00 € | **28.00 €** | 14.3 % | **6.7 %** | 28.38 € | stávame sa najlacnejší |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 72.00 € | **70.00 €** | 15.0 % | **11.9 %** | 70.38 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 14.50 € | **12.50 €** | 25.8 % | **8.5 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 14.50 € | **12.50 €** | 25.8 % | **8.5 %** | 12.90 € | stávame sa najlacnejší |
| Rádio Imperial Dabman 280 CDBK s funkcí ASA | 231.50 € | **229.50 €** | 12.5 % | **11.6 %** | 229.90 € | stávame sa najlacnejší |
| MOZA RACING RS061 predĺženie stĺpika riadenia | 120.50 € | **118.50 €** | 15.1 % | **13.2 %** | 118.90 € | stávame sa najlacnejší |
| Ovládacia páka lietadla MOZA RACING MHG | 111.50 € | **109.50 €** | 14.9 % | **12.8 %** | 109.90 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne | 30.00 € | **28.00 €** | 14.4 % | **6.8 %** | 28.46 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 Gold | 30.00 € | **28.00 €** | 14.4 % | **6.8 %** | 28.46 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 26.00 € | **24.00 €** | 53.8 % | **42.0 %** | 24.50 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 72.90 € | **71.00 €** | 42.1 % | **38.4 %** | 71.19 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 250.90 € | **249.00 €** | 7.8 % | **7.0 %** | 249.23 € | stávame sa najlacnejší |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 19.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovačka G21 Onyx | 59.90 € | **58.00 €** | 20.2 % | **16.4 %** | 58.19 € | stávame sa najlacnejší |
| Držiak mikrofónu Maono BA37 | 29.90 € | **28.00 €** | 15.3 % | **8.0 %** | 28.32 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **32.00 €** | 39.0 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Herní mikrofon Maono DGM20 (černý) | 26.90 € | **25.00 €** | 13.5 % | **5.5 %** | 25.45 € | stávame sa najlacnejší |
| Mikrofón Maono DGM20 (biely) | 26.90 € | **25.00 €** | 13.8 % | **5.8 %** | 25.45 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 21.90 € | **20.00 €** | 24.8 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.80 € | **6.10 €** | 47.1 % | **15.1 %** | 6.20 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **8.80 €** | 38.4 % | **16.0 %** | 8.90 € | stávame sa najlacnejší |
| Panasonic sluchátka RZ-B110W | 36.50 € | **34.90 €** | 10.2 % | **5.4 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WHCH520L.CE7 modrá | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 27.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.90 €** | 10.9 % | **6.0 %** | 28.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200CT  bezdrátová sluchátka | 38.50 € | **36.90 €** | 10.4 % | **5.8 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro Profi Comp SOE55080 | 34.50 € | **32.90 €** | 11.1 % | **5.9 %** | 28.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **39.90 €** | 10.0 % | **5.8 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2839E0 | 34.50 € | **32.90 €** | 10.6 % | **5.4 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2020E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2022E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK690B černá | 37.50 € | **35.90 €** | 10.9 % | **6.2 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 32.50 € | **30.90 €** | 11.5 % | **6.0 %** | 27.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL KO 299130 | 30.50 € | **28.90 €** | 11.6 % | **5.8 %** | 26.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro Apple iPad FIXTRI-727-BK | 34.50 € | **32.90 €** | 10.3 % | **5.2 %** | 30.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **27.90 €** | 11.4 % | **5.4 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal KO5S08E0 | 35.50 € | **33.90 €** | 11.2 % | **6.2 %** | 33.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 23.50 € | **21.90 €** | 14.7 % | **6.9 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.90 €** | 15.6 % | **9.1 %** | 26.92 € | stávame sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 15.6 % | **6.6 %** | 18.98 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **15.90 €** | 16.6 % | **6.0 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.90 €** | 60.5 % | **36.0 %** | 8.92 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **11.90 €** | 55.2 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| Aligator R45 eXtremo Black Red | 67.50 € | **65.90 €** | 8.0 % | **5.5 %** | 62.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.90 €** | 15.0 % | **14.1 %** | 203.94 € | stávame sa najlacnejší |
| Lavazza Crema E Gusto 1000 g | 23.50 € | **22.00 €** | 12.3 % | **5.1 %** | 15.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Puluz PU425 1,5 m USB-C klopový mikrofón | 19.00 € | **17.50 €** | 14.2 % | **5.2 %** | 11.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.B | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 29.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Podlahový mop PROFI cotton plus | 30.50 € | **29.00 €** | 10.8 % | **5.3 %** | 25.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.NBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Portable NBP003LBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9258M | 37.00 € | **35.50 €** | 10.3 % | **5.8 %** | 32.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C110 Home Sec. Wi-Fi Camera | 32.50 € | **31.00 €** | 10.3 % | **5.2 %** | 28.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2012400 | 39.00 € | **37.50 €** | 10.1 % | **5.9 %** | 35.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1020500 | 39.00 € | **37.50 €** | 10.2 % | **5.9 %** | 35.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.00 € | **20.50 €** | 14.1 % | **6.4 %** | 19.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 22.00 € | **20.50 €** | 13.8 % | **6.0 %** | 19.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 41.00 € | **39.50 €** | 10.2 % | **6.1 %** | 38.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkové ovládanie Telesin pre GoPro Hero 13 / 12 / ... | 19.00 € | **17.50 €** | 14.6 % | **5.5 %** | 17.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Tiara II 1269 90000 červená | 31.50 € | **30.00 €** | 10.6 % | **5.3 %** | 29.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrické čerpadlo Cycplus A12 | 21.00 € | **19.50 €** | 13.7 % | **5.6 %** | 19.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Comfort Graphite Black | 152.50 € | **151.00 €** | 13.4 % | **12.3 %** | 151.03 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **11.00 €** | 56.6 % | **37.8 %** | 11.06 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **16.50 €** | 50.1 % | **37.6 %** | 16.64 € | stávame sa najlacnejší |
| Sada radiacich páčok MOZA RACING RS094 | 49.50 € | **48.00 €** | 15.0 % | **11.5 %** | 48.14 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise pánev 28 cm | 26.50 € | **25.00 €** | 11.8 % | **5.5 %** | 25.19 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 28.00 € | **26.50 €** | 15.0 % | **8.8 %** | 26.69 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.50 € | **36.00 €** | 9.5 % | **5.1 %** | 36.19 € | stávame sa najlacnejší |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 20.00 € | **18.50 €** | 17.7 % | **8.8 %** | 18.70 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1452.50 € | **1451.00 €** | 8.1 % | **8.0 %** | 1451.22 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.50 € | **88.00 €** | 14.8 % | **12.9 %** | 88.23 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **15.00 €** | 56.9 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **15.00 €** | 56.9 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **20.50 €** | 53.7 % | **43.2 %** | 20.76 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 23.50 € | **22.00 €** | 14.6 % | **7.3 %** | 22.27 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **21.00 €** | 53.3 % | **43.1 %** | 21.28 € | stávame sa najlacnejší |
| Nabíjačka SkyRC NC3000 Pro | 72.00 € | **70.50 €** | 14.9 % | **12.5 %** | 70.80 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 28.00 € | **26.50 €** | 14.7 % | **8.6 %** | 26.90 € | stávame sa najlacnejší |
| Pedrini Infinity červená 6 porcí | 36.50 € | **35.00 €** | 11.3 % | **6.7 %** | 35.41 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **24.00 €** | 15.0 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **29.00 €** | 39.2 % | **32.4 %** | 29.44 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 14.50 € | **13.00 €** | 49.2 % | **33.8 %** | 13.48 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 59.50 € | **58.00 €** | 14.7 % | **11.8 %** | 58.49 € | stávame sa najlacnejší |
| AMIKO diaľkové ovládanie Univerzálny, HD - SD | 14.50 € | **13.00 €** | 26.6 % | **13.5 %** | 13.49 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **24.00 €** | 37.8 % | **29.6 %** | 24.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **22.00 €** | 39.1 % | **30.2 %** | 22.50 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **14.00 €** | 55.0 % | **40.0 %** | 14.50 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 28.50 € | **27.00 €** | 20.1 % | **13.7 %** | 27.50 € | stávame sa najlacnejší |
| TESLA MediaBox XT850 Android TV 11 box 4K s tunerem ... | 89.90 € | **88.50 €** | 7.0 % | **5.3 %** | 75.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX TT685II TTL pre Canon | 127.90 € | **126.50 €** | 15.1 % | **13.8 %** | 126.60 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 230.90 € | **229.50 €** | 8.7 % | **8.0 %** | 229.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 6.20 € | **4.80 €** | 47.0 % | **13.8 %** | 4.81 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **13.50 €** | 51.8 % | **37.5 %** | 13.63 € | stávame sa najlacnejší |
| Rapoo E9270p bezdrátová klávesnice černá | 37.90 € | **36.50 €** | 10.4 % | **6.4 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alecto FR-115BW Sada vysílaček pro děti | 35.90 € | **34.50 €** | 10.5 % | **6.2 %** | 29.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rapoo 9300M set klávesnice a myši černý | 31.90 € | **30.50 €** | 11.3 % | **6.4 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.0 % | **5.4 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/05 | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 28.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.90 € | **28.50 €** | 10.7 % | **5.5 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16075 | 25.90 € | **24.50 €** | 11.1 % | **5.1 %** | 24.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO hluboká pánev 24 cm | 29.90 € | **28.50 €** | 11.2 % | **6.0 %** | 28.55 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 17.90 € | **16.50 €** | 49.7 % | **38.0 %** | 16.61 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.90 € | **42.50 €** | 15.4 % | **11.7 %** | 42.66 € | stávame sa najlacnejší |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 50.90 € | **49.50 €** | 15.1 % | **11.9 %** | 49.67 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.90 € | **24.50 €** | 22.6 % | **15.9 %** | 24.69 € | stávame sa najlacnejší |
| Solight lokátor pre batožinu, Find My kompatibilný | 23.90 € | **22.50 €** | 41.7 % | **33.4 %** | 22.89 € | stávame sa najlacnejší |
| Casio Fx 85 Es Plus 2E | 20.90 € | **19.50 €** | 14.6 % | **6.9 %** | 19.89 € | stávame sa najlacnejší |
| Tefal HT652538 | 58.90 € | **57.50 €** | 10.4 % | **7.8 %** | 57.90 € | stávame sa najlacnejší |
| Stojan na mikrofón Fifine BM88 (ružový) | 42.90 € | **41.50 €** | 15.1 % | **11.4 %** | 41.90 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 500.90 € | **499.50 €** | 8.9 % | **8.6 %** | 499.76 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **6.60 €** | 55.5 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 7.50 € | **6.30 €** | 59.6 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **8.80 €** | 38.3 % | **21.7 %** | 8.90 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 54.00 € | **52.90 €** | 7.7 % | **5.5 %** | 44.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Onyx BS2400 | 31.00 € | **29.90 €** | 10.1 % | **6.2 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 36.00 € | **34.90 €** | 32.0 % | **27.9 %** | 34.92 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 18.00 € | **16.90 €** | 53.9 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Tefal Coppertinto KI280G10 | 31.00 € | **29.90 €** | 10.1 % | **6.2 %** | 30.00 € | stávame sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 18.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.90 € | **5.80 €** | 38.5 % | **16.4 %** | 5.90 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.90 €** | 39.2 % | **8.6 %** | 3.96 € | stávame sa najlacnejší |
| Anemometer UNI-T UT363 | 16.00 € | **14.90 €** | 14.0 % | **6.2 %** | 10.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 17.00 € | **15.90 €** | 15.0 % | **7.5 %** | 14.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Testovanie zariadenia USB Uni-T UT658LOAD | 16.00 € | **14.90 €** | 14.8 % | **6.9 %** | 13.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný generátor signálu FNIRSI SG-002 | 17.00 € | **15.90 €** | 13.8 % | **6.4 %** | 15.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-2 litinové neoprenové HE... | 14.00 € | **12.90 €** | 20.1 % | **10.6 %** | 12.92 € | stávame sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.20 €** | 59.1 % | **35.1 %** | 6.24 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **10.90 €** | 44.3 % | **31.1 %** | 10.98 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 9.00 € | **7.90 €** | 53.7 % | **34.9 %** | 7.99 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.40 €** | 59.7 % | **32.6 %** | 5.49 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.90 €** | 23.0 % | **11.8 %** | 11.00 € | stávame sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 145.00 € | **144.00 €** | 5.8 % | **5.0 %** | 127.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 67W Charging Combo (Type-A) EU | 24.50 € | **23.50 €** | 10.5 % | **6.0 %** | 14.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI Síto pro FD1000 ULTRA | 14.50 € | **13.50 €** | 13.0 % | **5.2 %** | 5.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor PWM Epever VS2024AU, 12/24V, 20A s... | 41.90 € | **40.90 €** | 8.6 % | **6.0 %** | 34.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska cest. PENTA 1,5l ner. | 20.90 € | **19.90 €** | 10.9 % | **5.6 %** | 14.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-BK | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 16.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Coox Quiche forma 3 díly se skleněnou po | 20.90 € | **19.90 €** | 11.1 % | **5.8 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B -4239 čtverec | 21.90 € | **20.90 €** | 10.9 % | **5.9 %** | 15.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-TI | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 16.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (čierny) | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechnoLine WS 8005 digitální budík | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 17.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-BL | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-TU | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica Norma J9073A4 set | 23.90 € | **22.90 €** | 11.0 % | **6.3 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Bluetooth Speaker Essential Green | 14.90 € | **13.90 €** | 12.7 % | **5.1 %** | 10.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Podsie 4 POP White | 19.50 € | **18.50 €** | 11.8 % | **6.1 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 8.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska s pum.CUL.1,9l černá | 21.50 € | **20.50 €** | 12.6 % | **7.3 %** | 18.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK WiFi N300 Extender (DAP-1325) | 20.50 € | **19.50 €** | 11.0 % | **5.6 %** | 17.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco ESPRESSO BARISTA 1kg | 19.50 € | **18.50 €** | 12.5 % | **6.8 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-546 Color | 20.90 € | **19.90 €** | 11.9 % | **6.6 %** | 18.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-541 Color | 23.50 € | **22.50 €** | 11.5 % | **6.7 %** | 20.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Blue) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 8.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 15.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RVA100 | 21.50 € | **20.50 €** | 10.6 % | **5.5 %** | 19.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RVA100 | 21.50 € | **20.50 €** | 10.6 % | **5.5 %** | 19.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo P100(2-pack)WiFi zásuvka | 22.50 € | **21.50 €** | 10.9 % | **6.0 %** | 20.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Beige) | 13.50 € | **12.50 €** | 16.3 % | **7.7 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Yellow) | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 11.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Yogurella 617 | 27.50 € | **26.50 €** | 9.2 % | **5.2 %** | 25.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.50 € | **19.50 €** | 11.3 % | **5.9 %** | 18.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **20.90 €** | 11.3 % | **6.2 %** | 20.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro Lenovo Tab M11 FIXTOT-1296 | 14.90 € | **13.90 €** | 12.8 % | **5.2 %** | 13.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 13.50 € | **12.50 €** | 14.1 % | **5.6 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G4002300 Odstraňovač žmolků | 22.90 € | **21.90 €** | 10.6 % | **5.8 %** | 21.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.0 % | **6.2 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **25.50 €** | 10.9 % | **6.8 %** | 25.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Podlahový mop Picobello M Micro | 19.50 € | **18.50 €** | 11.2 % | **5.5 %** | 18.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise rendlík 20 cm | 24.50 € | **23.50 €** | 10.7 % | **6.1 %** | 23.51 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 9.20 € | **8.20 €** | 47.8 % | **31.8 %** | 8.21 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 30.50 € | **29.50 €** | 11.6 % | **7.9 %** | 29.52 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 13.50 € | **12.50 €** | 56.1 % | **44.6 %** | 12.54 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.50 €** | 15.0 % | **13.1 %** | 61.54 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.00 €** | 47.4 % | **39.2 %** | 17.05 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.90 € | **22.90 €** | 38.4 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 15.50 € | **14.50 €** | 54.4 % | **44.5 %** | 14.55 € | stávame sa najlacnejší |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.10 € | **5.10 €** | 32.6 % | **10.9 %** | 5.15 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.10 € | **4.10 €** | 44.0 % | **15.7 %** | 4.17 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.50 € | **12.50 €** | 55.7 % | **44.2 %** | 12.57 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **4.10 €** | 54.1 % | **23.9 %** | 4.17 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.08 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **24.50 €** | 15.8 % | **11.3 %** | 24.58 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 10.8 % | **5.9 %** | 21.59 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| TP-LINK Tapo C100 WiFi camera | 23.50 € | **22.50 €** | 10.3 % | **5.6 %** | 22.59 € | stávame sa najlacnejší |
| TP-LINK Tapo C100 WiFi camera | 23.50 € | **22.50 €** | 10.3 % | **5.6 %** | 22.59 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 10 W | 1227.90 € | **1226.90 €** | 15.0 % | **14.9 %** | 1227.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 235.90 € | **234.90 €** | 42519.7 % | **42339.0 %** | 235.00 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 15.00 € | **14.00 €** | 54.0 % | **43.7 %** | 14.13 € | stávame sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.50 €** | 10.5 % | **6.8 %** | 28.63 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit AIR X2 Carplay/Android ... | 32.50 € | **31.50 €** | 14.9 % | **11.4 %** | 31.65 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **35.00 €** | 38.3 % | **34.4 %** | 35.16 € | stávame sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.50 € | **15.50 €** | 13.2 % | **6.3 %** | 15.67 € | stávame sa najlacnejší |
| Ring light with phone holder PULUZ | 14.50 € | **13.50 €** | 16.4 % | **8.3 %** | 13.67 € | stávame sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 13.00 € | **12.00 €** | 47.8 % | **36.4 %** | 12.20 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 13.00 € | **12.00 €** | 47.8 % | **36.4 %** | 12.20 € | stávame sa najlacnejší |
| ETA Nubela 2569 90100, bílý | 28.00 € | **27.00 €** | 52.0 % | **46.5 %** | 27.20 € | stávame sa najlacnejší |
| Diaľkový spúšťač GODOX X3 TTL pre Canon | 73.00 € | **72.00 €** | 14.7 % | **13.1 %** | 72.20 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.50 €** | 14.9 % | **12.1 %** | 39.71 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **28.00 €** | 14.8 % | **10.9 %** | 28.21 € | stávame sa najlacnejší |
| Súprava na polievanie kvetín v črepníkoch RainPoint ... | 27.50 € | **26.50 €** | 14.7 % | **10.5 %** | 26.72 € | stávame sa najlacnejší |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 15.50 € | **14.50 €** | 13.9 % | **6.6 %** | 14.72 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **11.50 €** | 47.9 % | **36.1 %** | 11.73 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 21.50 € | **20.50 €** | 16.1 % | **10.7 %** | 20.75 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.50 €** | 15.6 % | **9.0 %** | 16.75 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 14.00 € | **13.00 €** | 52.8 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.50 €** | 15.0 % | **12.0 %** | 36.79 € | stávame sa najlacnejší |
| Tesla GSM-LITE zesilovač/opakovač 900/1800 MHz - kom... | 179.50 € | **178.50 €** | 8.5 % | **7.9 %** | 178.79 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 871.50 € | **870.50 €** | 14.9 % | **14.8 %** | 870.80 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900G (čierna) | 51.00 € | **50.00 €** | 14.5 % | **12.2 %** | 50.30 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 20.50 € | **19.50 €** | 15.4 % | **9.8 %** | 19.80 € | stávame sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.81 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 72.00 € | **71.00 €** | 14.7 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **10.00 €** | 54.5 % | **40.4 %** | 10.33 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **25.00 €** | 42.7 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.33 € | stávame sa najlacnejší |
| CrockPot CSC062X | 158.00 € | **157.00 €** | 7.1 % | **6.4 %** | 157.39 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 66.50 € | **65.50 €** | 10.6 % | **8.9 %** | 65.89 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 22.50 € | **21.50 €** | 21.5 % | **16.1 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.50 € | **12.50 €** | 16.9 % | **8.2 %** | 12.90 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.50 € | **15.50 €** | 18.0 % | **10.8 %** | 15.90 € | stávame sa najlacnejší |
| GODOX LUX Junior Retro blesk | 63.50 € | **62.50 €** | 15.4 % | **13.6 %** | 62.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (béžové) | 38.50 € | **37.50 €** | 15.5 % | **12.5 %** | 37.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (sivé) | 38.50 € | **37.50 €** | 15.5 % | **12.5 %** | 37.90 € | stávame sa najlacnejší |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 85.00 € | **84.00 €** | 14.9 % | **13.5 %** | 84.42 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 12.00 € | **11.00 €** | 52.2 % | **39.5 %** | 11.43 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **10.00 €** | 52.9 % | **39.0 %** | 10.43 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **10.00 €** | 52.9 % | **39.0 %** | 10.43 € | stávame sa najlacnejší |
| TP-LINK Archer T3U WiFi Adaptér | 16.90 € | **15.90 €** | 11.9 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Video kabel FIXHU-CHDMI-GR | 15.90 € | **15.00 €** | 11.5 % | **5.2 %** | 11.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laica Bi-Flux Cartridge 3+1ks | 15.90 € | **15.00 €** | 11.6 % | **5.3 %** | 13.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 12.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G2017100 kuchyňská váha | 15.90 € | **15.00 €** | 11.4 % | **5.1 %** | 14.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo L630 | 10.50 € | **9.60 €** | 15.0 % | **5.2 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.60 €** | 50.3 % | **37.4 %** | 9.68 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **11.00 €** | 15.6 % | **6.8 %** | 11.26 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **13.00 €** | 14.8 % | **7.4 %** | 13.50 € | stávame sa najlacnejší |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.90 € | **19.00 €** | 10.3 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL XA 800512 | 17.90 € | **17.00 €** | 12.5 % | **6.8 %** | 17.08 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 33.90 € | **33.00 €** | 15.0 % | **11.9 %** | 33.09 € | stávame sa najlacnejší |
| Cycplus AS230 PRO DP5 PRO Mini Bike Pump | 45.90 € | **45.00 €** | 15.0 % | **12.8 %** | 45.25 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.90 € | **43.00 €** | 15.0 % | **12.6 %** | 43.29 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **17.00 €** | 16.2 % | **10.4 %** | 17.42 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.90 € | **19.00 €** | 42.5 % | **36.1 %** | 19.42 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **20.00 €** | 43.0 % | **36.9 %** | 20.44 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **16.00 €** | 38.6 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.20 €** | 48.6 % | **36.7 %** | 9.23 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.80 € | **6.00 €** | 54.0 % | **35.9 %** | 6.08 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.50 € | **3.70 €** | 55.0 % | **27.5 %** | 3.79 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.50 € | **4.70 €** | 46.6 % | **25.3 %** | 4.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.20 € | **5.40 €** | 49.1 % | **29.9 %** | 5.50 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **4.00 €** | 45.3 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 5.40 € | **4.70 €** | 48.8 % | **29.5 %** | 4.79 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 953.50 € | **952.90 €** | 15.0 % | **14.9 %** | 953.00 € | stávame sa najlacnejší |
| TP-LINK TL-WA850RE Wireless N Extender | 20.50 € | **19.90 €** | 10.4 % | **7.1 %** | 8.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Breakfast Bollitore 2846, černá | 17.50 € | **16.90 €** | 10.5 % | **6.8 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt pro SG S26 FIXFLM2-1704-BK | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 16.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXFLM-1706-BK | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 16.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.90 €** | 10.2 % | **6.9 %** | 19.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Foodsaver New Fresh 2,3 l | 31.50 € | **30.90 €** | 7.9 % | **5.8 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stabilizátor AOCHUAN X Pro Standard (čierny) | 55.50 € | **54.90 €** | 15.1 % | **13.9 %** | 54.94 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.90 €** | 15.7 % | **13.2 %** | 26.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.30 € | **7.70 €** | 47.0 % | **36.4 %** | 7.72 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 7.70 € | **7.10 €** | 48.0 % | **36.5 %** | 7.12 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.90 € | **7.30 €** | 47.3 % | **36.1 %** | 7.33 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.90 € | **5.30 €** | 51.3 % | **35.9 %** | 5.35 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.90 € | **7.30 €** | 55.5 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 4.40 € | **3.80 €** | 52.9 % | **32.0 %** | 3.87 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.30 €** | 47.1 % | **32.2 %** | 5.40 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.10 € | **1.50 €** | 51.1 % | **7.9 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.70 € | **3.10 €** | 56.7 % | **31.3 %** | 3.17 € | stávame sa najlacnejší |
| Fixed řemínek AWU 49mm FIXNST2-1029-RD | 16.50 € | **15.90 €** | 10.7 % | **6.7 %** | 4.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 655 Yellow, CZ112AE | 16.50 € | **15.90 €** | 10.9 % | **6.8 %** | 9.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EFS 1 W | 16.50 € | **15.90 €** | 11.5 % | **7.5 %** | 9.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák MagMount Vent FIXMMT-V-BK | 14.50 € | **13.90 €** | 11.2 % | **6.6 %** | 10.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks® Blonde Espresso Roast 450 g | 15.50 € | **14.90 €** | 10.0 % | **5.8 %** | 11.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks Colombia Medium Roast 450 g | 15.50 € | **14.90 €** | 10.0 % | **5.8 %** | 11.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.90 €** | 12.5 % | **7.8 %** | 10.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U AC600 WiFi Adaptér | 12.50 € | **11.90 €** | 12.8 % | **7.4 %** | 9.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Starbucks Breakfast Blend káva 450g | 16.50 € | **15.90 €** | 10.2 % | **6.2 %** | 13.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo L530E | 11.50 € | **10.90 €** | 11.4 % | **5.6 %** | 9.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 10.9 % | **6.3 %** | 12.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm modrý | 13.50 € | **12.90 €** | 10.0 % | **5.1 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm šedý | 13.50 € | **12.90 €** | 10.0 % | **5.1 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **11.90 €** | 12.5 % | **7.1 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 15.50 € | **14.90 €** | 10.3 % | **6.1 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.90 €** | 16.1 % | **10.6 %** | 11.92 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 9.60 € | **9.00 €** | 54.2 % | **44.6 %** | 9.03 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.90 €** | 47.4 % | **41.3 %** | 13.95 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **9.40 €** | 53.4 % | **44.2 %** | 9.45 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.70 €** | 42.7 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 11.50 € | **10.90 €** | 36.1 % | **29.0 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **8.80 €** | 48.4 % | **38.9 %** | 8.90 € | stávame sa najlacnejší |
| AMIKO 9265+ DVB-S2/T2/C kombo přijímač 4K | 70.50 € | **69.90 €** | 6.4 % | **5.5 %** | 63.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-T535DW | 199.50 € | **198.90 €** | 5.5 % | **5.2 %** | 194.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash F1 (biela) + 6 ventiláto... | 116.50 € | **115.90 €** | 15.0 % | **14.4 %** | 115.93 € | stávame sa najlacnejší |
| DDPAI N1 Dual Dash cam WiFi 1296p + Rear camera 1080p | 67.50 € | **66.90 €** | 15.1 % | **14.1 %** | 66.99 € | stávame sa najlacnejší |
| DOMO DO465FR | 66.50 € | **65.90 €** | 10.2 % | **9.2 %** | 66.00 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.80 €** | 55.5 % | **46.1 %** | 7.90 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **7.80 €** | 47.7 % | **38.8 %** | 7.90 € | stávame sa najlacnejší |
| Fixed pouzdro SG A36 5G FIXOP3-1502-BRW | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 9.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro ME60 F 5G FIXOP3-1564-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro pro SG S26+ FIXOP3-1705-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro XRedmi 15C FIXOP3-1576-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED pouzdro SG S25 FIXOP3-1504-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 11.00 € | **10.50 €** | 12.8 % | **7.6 %** | 9.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed sklo Apple iP17PM FIXGFADA-1603-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 9.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Aromo 0064 90000 bílý | 14.00 € | **13.50 €** | 10.1 % | **6.1 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED 2 skla SG A37 5G FIXGFADA-1702-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed 2skla SG A17 4/5G FIXGFADA-1700-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED Sklo apl. SG S26+ FIXGFADA-1705-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED Sklo s apl.SG S26 FIXGFADA-1704-BK | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tvrzené sklo FIXED Full-Cover s aplikáto | 11.00 € | **10.50 €** | 10.5 % | **5.5 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Hyper PETG Creality (zelený) | 11.00 € | **10.50 €** | 12.8 % | **7.6 %** | 10.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **20.00 €** | 48.5 % | **44.9 %** | 20.01 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **8.00 €** | 53.9 % | **44.9 %** | 8.01 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.70 € | **2.20 €** | 52.4 % | **24.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.70 €** | 48.7 % | **36.7 %** | 5.71 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Filament ELEGOO PLA+ (čierny) | 12.00 € | **11.50 €** | 14.6 % | **9.9 %** | 11.51 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.40 € | **6.90 €** | 55.1 % | **44.6 %** | 6.92 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **8.10 €** | 53.7 % | **44.7 %** | 8.12 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **7.00 €** | 54.8 % | **44.4 %** | 7.03 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **14.00 €** | 47.4 % | **42.3 %** | 14.04 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.2 % | **9.0 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.5 % | **9.2 %** | 24.04 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.20 €** | 46.8 % | **35.9 %** | 6.24 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 7.30 € | **6.80 €** | 54.6 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.20 €** | 55.2 % | **43.6 %** | 6.26 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.50 €** | 14.9 % | **13.8 %** | 50.56 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **31.50 €** | 41.0 % | **38.8 %** | 31.57 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 162.00 € | **161.50 €** | 7.3 % | **6.9 %** | 161.57 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **4.80 €** | 50.7 % | **36.4 %** | 4.87 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 5.30 € | **4.80 €** | 50.7 % | **36.4 %** | 4.87 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.4 % | **9.6 %** | 19.08 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 14.00 € | **13.50 €** | 13.7 % | **9.6 %** | 13.58 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **24.50 €** | 14.5 % | **12.2 %** | 24.58 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.50 €** | 13.6 % | **10.5 %** | 17.58 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Elektrické čerpadlo Cycplus A14 | 23.00 € | **22.50 €** | 14.2 % | **11.7 %** | 22.58 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **26.50 €** | 47.2 % | **44.5 %** | 26.59 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.69 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.70 €** | 55.9 % | **37.4 %** | 3.79 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN P2 s AI senzorom (biely) | 81.50 € | **81.00 €** | 15.1 % | **14.4 %** | 81.09 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **4.20 €** | 49.3 % | **33.4 %** | 4.30 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **45.00 €** | 15.5 % | **14.3 %** | 45.11 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **45.00 €** | 15.5 % | **14.3 %** | 45.11 € | stávame sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **17.00 €** | 11.5 % | **8.3 %** | 17.13 € | stávame sa najlacnejší |
| Ariete Ice Machine 651 | 99.50 € | **99.00 €** | 10.4 % | **9.8 %** | 99.13 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.63 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **11.00 €** | 49.6 % | **43.1 %** | 11.15 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **11.00 €** | 49.6 % | **43.1 %** | 11.15 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **15.00 €** | 16.8 % | **13.0 %** | 15.15 € | stávame sa najlacnejší |
| Braun SI1040GR | 26.50 € | **26.00 €** | 11.2 % | **9.1 %** | 26.17 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.50 €** | 13.7 % | **10.2 %** | 15.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim | 29.50 € | **29.00 €** | 10.5 % | **8.6 %** | 29.19 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 29.50 € | **29.00 €** | 14.8 % | **12.8 %** | 29.19 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.50 € | **32.00 €** | 15.1 % | **13.3 %** | 32.19 € | stávame sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 269.50 € | **269.00 €** | 15.8 % | **15.6 %** | 269.19 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 279.50 € | **279.00 €** | 8.7 % | **8.5 %** | 279.19 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **17.00 €** | 42.8 % | **38.8 %** | 17.19 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **19.00 €** | 16.3 % | **13.3 %** | 19.20 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **16.50 €** | 47.5 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 11.9 % | **9.5 %** | 23.21 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.50 €** | 14.6 % | **11.9 %** | 20.71 € | stávame sa najlacnejší |
| Strong SRT84 Terestriální HDMI přijímač | 28.50 € | **28.00 €** | 11.1 % | **9.1 %** | 28.24 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.50 € | **33.00 €** | 15.9 % | **14.2 %** | 33.25 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **15.00 €** | 47.4 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.50 € | **557.00 €** | 6.7 % | **6.6 %** | 557.25 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.1 % | **9.5 %** | 33.25 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **14.00 €** | 16.5 % | **12.5 %** | 14.25 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **19.00 €** | 14.1 % | **11.2 %** | 19.25 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 14.50 € | **14.00 €** | 16.1 % | **12.1 %** | 14.25 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **18.00 €** | 10.0 % | **7.1 %** | 18.25 € | stávame sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **12.00 €** | 10.0 % | **5.6 %** | 12.25 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.50 € | **10.00 €** | 48.5 % | **41.4 %** | 10.26 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **13.00 €** | 47.1 % | **41.7 %** | 13.26 € | stávame sa najlacnejší |
| Wireless controler GameSir T4n (white) | 25.50 € | **25.00 €** | 19.3 % | **16.9 %** | 25.26 € | stávame sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 14.50 € | **14.00 €** | 35.7 % | **31.0 %** | 14.27 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **14.00 €** | 47.4 % | **42.3 %** | 14.27 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 17.50 € | **17.00 €** | 43.6 % | **39.5 %** | 17.28 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.00 € | **17.50 €** | 9.5 % | **6.5 %** | 17.79 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 13.7 % | **9.5 %** | 13.29 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 125.50 € | **125.00 €** | 7.8 % | **7.4 %** | 125.29 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.50 € | **65.00 €** | 9.5 % | **8.7 %** | 65.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 10.50 € | **10.00 €** | 11.2 % | **5.9 %** | 10.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Maxxo HiFi Tuner TR05 | 138.50 € | **138.00 €** | 10.3 % | **9.9 %** | 138.29 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 52.50 € | **52.00 €** | 6.9 % | **5.9 %** | 52.29 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.0 % | **9.5 %** | 22.30 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **20.50 €** | 46.4 % | **42.9 %** | 20.80 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 161.50 € | **161.00 €** | 9.0 % | **8.7 %** | 161.30 € | stávame sa najlacnejší |
| Tefal SV4111E0 | 82.50 € | **82.00 €** | 5.6 % | **5.0 %** | 82.30 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.50 € | **22.00 €** | 9.3 % | **6.9 %** | 22.30 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 171.50 € | **171.00 €** | 9.3 % | **9.0 %** | 171.30 € | stávame sa najlacnejší |
| AMICA MV 447 ADW | 413.50 € | **413.00 €** | 7.1 % | **7.0 %** | 413.30 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 470.50 € | **470.00 €** | 7.1 % | **6.9 %** | 470.30 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 526.50 € | **526.00 €** | 7.1 % | **7.0 %** | 526.30 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 36.50 € | **36.00 €** | 39.8 % | **37.9 %** | 36.31 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 363.50 € | **363.00 €** | 6.1 % | **6.0 %** | 363.31 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.50 € | **22.00 €** | 11.2 % | **8.7 %** | 22.32 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 11.7 % | **6.8 %** | 11.33 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash B275 (biela) | 29.00 € | **28.50 €** | 14.9 % | **12.9 %** | 28.83 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **12.00 €** | 46.9 % | **41.0 %** | 12.34 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **13.00 €** | 56.1 % | **50.3 %** | 13.35 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 16.50 € | **16.00 €** | 25.4 % | **21.6 %** | 16.36 € | stávame sa najlacnejší |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 12.00 € | **11.50 €** | 10.4 % | **5.8 %** | 11.86 € | stávame sa najlacnejší |
| Paddleboard Jbay Zone J2 Comet 320x81x15, 145 Kg, Th... | 322.50 € | **322.00 €** | 6.5 % | **6.3 %** | 322.36 € | stávame sa najlacnejší |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.50 € | **85.00 €** | 20.2 % | **19.5 %** | 85.37 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **17.00 €** | 11.2 % | **8.1 %** | 17.37 € | stávame sa najlacnejší |
| Herné reproduktory Onikuma L2 | 12.50 € | **12.00 €** | 16.4 % | **11.8 %** | 12.37 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **18.00 €** | 39.0 % | **35.3 %** | 18.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.3 % | **7.9 %** | 22.38 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **60.00 €** | 10.0 % | **9.1 %** | 60.38 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.50 €** | 13.4 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.50 € | **20.00 €** | 8.3 % | **5.6 %** | 20.38 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 69.00 € | **68.50 €** | 8.9 % | **8.1 %** | 68.89 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 22.50 € | **22.00 €** | 10.5 % | **8.1 %** | 22.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.50 € | **22.00 €** | 11.7 % | **9.3 %** | 22.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.50 € | **18.00 €** | 12.6 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.50 € | **18.00 €** | 12.6 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| MAXXO VC 1800 | 24.50 € | **24.00 €** | 8.8 % | **6.6 %** | 24.39 € | stávame sa najlacnejší |
| Tefal J1640574 | 24.00 € | **23.50 €** | 8.6 % | **6.4 %** | 23.89 € | stávame sa najlacnejší |
| G21 nůž Damascus Premium 13 cm | 43.00 € | **42.50 €** | 9.9 % | **8.6 %** | 42.89 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.00 € | **10.50 €** | 26.0 % | **20.2 %** | 10.89 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 26.00 € | **25.50 €** | 9.1 % | **7.0 %** | 25.89 € | stávame sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.50 € | **20.00 €** | 12.3 % | **9.6 %** | 20.39 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **15.00 €** | 46.0 % | **41.3 %** | 15.39 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 30.50 € | **30.00 €** | 8.2 % | **6.5 %** | 30.39 € | stávame sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 103.50 € | **103.00 €** | 28.4 % | **27.7 %** | 103.39 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 33.50 € | **33.00 €** | 11.8 % | **10.1 %** | 33.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 60.00 € | **59.50 €** | 12.6 % | **11.7 %** | 59.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 84.50 € | **84.00 €** | 7.8 % | **7.2 %** | 84.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 68.50 € | **68.00 €** | 7.8 % | **7.0 %** | 68.39 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 39.50 € | **39.00 €** | 11.5 % | **10.1 %** | 39.39 € | stávame sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 24.50 € | **24.00 €** | 8.0 % | **5.8 %** | 24.39 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 49.00 € | **48.50 €** | 13.1 % | **12.0 %** | 48.89 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 79.00 € | **78.50 €** | 7.0 % | **6.3 %** | 78.89 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 103.50 € | **103.00 €** | 7.6 % | **7.1 %** | 103.39 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 34.50 € | **34.00 €** | 12.4 % | **10.7 %** | 34.39 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 51.00 € | **50.50 €** | 7.9 % | **6.9 %** | 50.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 239.50 € | **239.00 €** | 12.2 % | **11.9 %** | 239.39 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 132.50 € | **132.00 €** | 10.6 % | **10.2 %** | 132.39 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 179.50 € | **179.00 €** | 6.1 % | **5.8 %** | 179.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 464.50 € | **464.00 €** | 7.3 % | **7.2 %** | 464.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 898.50 € | **898.00 €** | 14.2 % | **14.1 %** | 898.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 93.00 € | **92.50 €** | 13.6 % | **13.0 %** | 92.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 27.00 € | **26.50 €** | 10.4 % | **8.4 %** | 26.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.00 € | **72.50 €** | 13.5 % | **12.8 %** | 72.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 86.00 € | **85.50 €** | 13.8 % | **13.1 %** | 85.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 61.50 € | **61.00 €** | 13.0 % | **12.1 %** | 61.39 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 53.50 € | **53.00 €** | 10.4 % | **9.4 %** | 53.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 53.50 € | **53.00 €** | 11.8 % | **10.8 %** | 53.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 96.50 € | **96.00 €** | 7.7 % | **7.1 %** | 96.39 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 34.00 € | **33.50 €** | 10.4 % | **8.8 %** | 33.89 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 77.00 € | **76.50 €** | 7.0 % | **6.3 %** | 76.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 41.50 € | **41.00 €** | 13.0 % | **11.6 %** | 41.39 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 165.00 € | **164.50 €** | 11.5 % | **11.1 %** | 164.89 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 192.50 € | **192.00 €** | 14.4 % | **14.1 %** | 192.39 € | stávame sa najlacnejší |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 23.50 € | **23.00 €** | 14.1 % | **11.7 %** | 23.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 323.50 € | **323.00 €** | 10.2 % | **10.0 %** | 323.39 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 73.00 € | **72.50 €** | 8.7 % | **7.9 %** | 72.89 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 142.50 € | **142.00 €** | 14.1 % | **13.7 %** | 142.39 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 259.50 € | **259.00 €** | 14.8 % | **14.6 %** | 259.39 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 98.00 € | **97.50 €** | 7.9 % | **7.4 %** | 97.89 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 117.50 € | **117.00 €** | 9.6 % | **9.2 %** | 117.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 111.50 € | **111.00 €** | 7.7 % | **7.2 %** | 111.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 145.50 € | **145.00 €** | 9.3 % | **8.9 %** | 145.39 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1294.00 € | **1293.50 €** | 7.3 % | **7.2 %** | 1293.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 140.00 € | **139.50 €** | 8.3 % | **7.9 %** | 139.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 58.00 € | **57.50 €** | 20.4 % | **19.4 %** | 57.89 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 27.00 € | **26.50 €** | 19.4 % | **17.2 %** | 26.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 23.50 € | **23.00 €** | 11.5 % | **9.1 %** | 23.39 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.00 € | **11.50 €** | 12.0 % | **7.3 %** | 11.89 € | stávame sa najlacnejší |
| DOMO DO9286IB | 248.50 € | **248.00 €** | 6.0 % | **5.8 %** | 248.39 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 22.50 € | **22.00 €** | 8.0 % | **5.6 %** | 22.39 € | stávame sa najlacnejší |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.50 € | **16.00 €** | 10.5 % | **7.2 %** | 16.39 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 1-pack) | 98.00 € | **97.50 €** | 5.8 % | **5.3 %** | 97.89 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 206.00 € | **205.50 €** | 11.0 % | **10.7 %** | 205.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 278.00 € | **277.50 €** | 7.1 % | **6.9 %** | 277.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 17.00 € | **16.50 €** | 13.0 % | **9.7 %** | 16.89 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 45.00 € | **44.50 €** | 13.8 % | **12.6 %** | 44.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 239.00 € | **238.50 €** | 8.1 % | **7.9 %** | 238.89 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 135.50 € | **135.00 €** | 8.7 % | **8.3 %** | 135.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 117.50 € | **117.00 €** | 7.3 % | **6.9 %** | 117.39 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.50 € | **23.00 €** | 10.8 % | **8.5 %** | 23.39 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 269.00 € | **268.50 €** | 6.3 % | **6.1 %** | 268.89 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 205.50 € | **205.00 €** | 8.0 % | **7.8 %** | 205.39 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 191.50 € | **191.00 €** | 8.2 % | **7.9 %** | 191.39 € | stávame sa najlacnejší |
| Whirlpool NoFrost WHK 22414 XBR8EA | 878.50 € | **878.00 €** | 10.0 % | **9.9 %** | 878.39 € | stávame sa najlacnejší |
| DOMO DO91135F | 327.00 € | **326.50 €** | 9.8 % | **9.7 %** | 326.89 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 638.50 € | **638.00 €** | 6.4 % | **6.4 %** | 638.39 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 270.50 € | **270.00 €** | 6.1 % | **5.9 %** | 270.39 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **89.50 €** | 14.8 % | **14.2 %** | 89.89 € | stávame sa najlacnejší |
| Solight profesionálny multimeter | 14.00 € | **13.50 €** | 29.5 % | **24.9 %** | 13.90 € | stávame sa najlacnejší |
| ETA 410090000 | 331.50 € | **331.00 €** | 7.0 % | **6.8 %** | 331.40 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 40 x 50 cm, 50 ks, hladké | 12.00 € | **11.50 €** | 16.4 % | **11.6 %** | 11.90 € | stávame sa najlacnejší |
| SONY WFC510L modrá | 38.50 € | **38.00 €** | 13.6 % | **12.1 %** | 38.40 € | stávame sa najlacnejší |
| D-LINK 10/100 8-Port Switch (DES-108) | 21.00 € | **20.50 €** | 14.8 % | **12.1 %** | 20.90 € | stávame sa najlacnejší |
| Concept OPK5160bc | 178.50 € | **178.00 €** | 8.1 % | **7.8 %** | 178.40 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **105.00 €** | 10.1 % | **9.6 %** | 105.40 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 60.50 € | **60.00 €** | 37.2 % | **36.0 %** | 60.41 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **113.00 €** | 10.0 % | **9.5 %** | 113.42 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 14.50 € | **14.00 €** | 12.3 % | **8.4 %** | 14.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 12.9 % | **8.0 %** | 11.42 € | stávame sa najlacnejší |
| G3Ferrari G1022300 | 136.50 € | **136.00 €** | 10.2 % | **9.8 %** | 136.42 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **21.00 €** | 15.1 % | **12.4 %** | 21.42 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.50 € | **22.00 €** | 8.2 % | **5.8 %** | 22.42 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **29.00 €** | 14.9 % | **13.0 %** | 29.44 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **11.00 €** | 38.3 % | **32.3 %** | 11.45 € | stávame sa najlacnejší |
| Braun IS5247.VI | 185.50 € | **185.00 €** | 8.0 % | **7.7 %** | 185.45 € | stávame sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 160.50 € | **160.00 €** | 13.4 % | **13.1 %** | 160.45 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 9.9 % | **8.4 %** | 36.46 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Classic Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Eccentric Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| Solight high bay, 200W, 28000lm, 120°, Meanwell,  50... | 94.50 € | **94.00 €** | 20.0 % | **19.4 %** | 94.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 9.9 % | **6.9 %** | 18.46 € | stávame sa najlacnejší |
| DOMO DO9283EK | 18.50 € | **18.00 €** | 12.7 % | **9.7 %** | 18.46 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **26.00 €** | 10.9 % | **8.8 %** | 26.46 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.50 € | **22.00 €** | 38.4 % | **35.3 %** | 22.47 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.50 € | **33.00 €** | 33.4 % | **31.5 %** | 33.48 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.50 € | **12.00 €** | 42.7 % | **37.0 %** | 12.49 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.50 € | **11.00 €** | 41.2 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.50 € | **45.00 €** | 8.2 % | **7.0 %** | 45.49 € | stávame sa najlacnejší |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | stávame sa najlacnejší |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.50 € | **26.00 €** | 32.5 % | **30.0 %** | 26.49 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **13.00 €** | 33.2 % | **28.3 %** | 13.49 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 15.50 € | **15.00 €** | 33.9 % | **29.6 %** | 15.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 16.0 % | **14.0 %** | 28.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **44.00 €** | 7.0 % | **5.8 %** | 44.49 € | stávame sa najlacnejší |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790... | 36.50 € | **36.00 €** | 24.0 % | **22.3 %** | 36.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creality (Gold) | 17.50 € | **17.00 €** | 14.4 % | **11.1 %** | 17.49 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.50 € | **44.00 €** | 15.4 % | **14.1 %** | 44.49 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 225.90 € | **225.50 €** | 5.4 % | **5.2 %** | 219.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1022600 | 120.90 € | **120.50 €** | 10.2 % | **9.8 %** | 120.70 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.90 € | **110.50 €** | 10.2 % | **9.8 %** | 110.70 € | stávame sa najlacnejší |
| Samsung VG-SCFC43SGMXC | 118.90 € | **118.50 €** | 5.8 % | **5.4 %** | 118.71 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 97.90 € | **97.50 €** | 20.2 % | **19.7 %** | 97.74 € | stávame sa najlacnejší |
| Paddleboard Jbay Zone H1 Kame 297x76x15, 120 Kg, All... | 221.90 € | **221.50 €** | 5.4 % | **5.3 %** | 221.74 € | stávame sa najlacnejší |
| Paddleboard Jbay Zone H3 Kame 297x81x10, 99 Kg, All ... | 221.90 € | **221.50 €** | 5.4 % | **5.3 %** | 221.74 € | stávame sa najlacnejší |
| DOMO DO42329PC | 114.90 € | **114.50 €** | 7.4 % | **7.1 %** | 114.79 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 11.6 % | **11.2 %** | 113.79 € | stávame sa najlacnejší |
| HP ENVY 6520e AiO (714N9B) | 102.90 € | **102.50 €** | 10.1 % | **9.7 %** | 102.79 € | stávame sa najlacnejší |
| GORENJE ECT601FM | 136.90 € | **136.50 €** | 8.8 % | **8.5 %** | 136.79 € | stávame sa najlacnejší |
| G3Ferrari G10152 horkovzdušná trouba | 146.90 € | **146.50 €** | 9.1 % | **8.8 %** | 146.80 € | stávame sa najlacnejší |
| Girmi FG9201 | 116.90 € | **116.50 €** | 10.1 % | **9.7 %** | 116.82 € | stávame sa najlacnejší |
| Girmi FG4101 | 139.90 € | **139.50 €** | 10.1 % | **9.7 %** | 139.83 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 157.90 € | **157.50 €** | 7.9 % | **7.6 %** | 157.88 € | stávame sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.50 €** | 11.3 % | **8.4 %** | 8.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto Latte Macchiato 30ca | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 4.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CORTADO 30cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 5.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR009001 | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Nano WiFi Adaptér | 10.90 € | **10.50 €** | 11.3 % | **7.2 %** | 8.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Plus WiFi Adaptér | 14.90 € | **14.50 €** | 11.0 % | **8.1 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto ESPRESSO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo TopSound černý | 12.90 € | **12.50 €** | 10.1 % | **6.6 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAFE AU LAIT 30Cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESCAFÉ® DG Flat White kapsle 30 ks | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.50 €** | 11.0 % | **8.2 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-V-BK | 12.90 € | **12.50 €** | 11.5 % | **8.0 %** | 11.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAPPUCCINO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 9.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 75 cm černý | 14.90 € | **14.50 €** | 8.8 % | **5.9 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Razer Goliathus Mobile Stealth Ed. | 10.90 € | **10.50 €** | 13.2 % | **9.0 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.1 % | **7.3 %** | 15.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.90 € | **12.50 €** | 12.8 % | **9.3 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.40 € | **5.00 €** | 47.3 % | **36.4 %** | 5.01 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.60 €** | 50.8 % | **44.8 %** | 9.61 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.60 €** | 56.3 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.80 €** | 53.7 % | **43.8 %** | 5.85 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.80 €** | 53.7 % | **43.8 %** | 5.85 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **6.00 €** | 53.5 % | **43.9 %** | 6.05 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.90 € | **4.50 €** | 55.6 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.50 €** | 40.4 % | **35.3 %** | 10.60 € | stávame sa najlacnejší |
| Laica VT3509 | 11.90 € | **11.50 €** | 9.6 % | **5.9 %** | 11.65 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **12.50 €** | 47.7 % | **43.1 %** | 12.66 € | stávame sa najlacnejší |
| Selfie tyč Puluz pre Insta360 One RS / X2 / X3 / X4 ... | 12.90 € | **12.50 €** | 15.3 % | **11.7 %** | 12.67 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 13.8 % | **10.0 %** | 11.71 € | stávame sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 11.9 % | **7.8 %** | 10.71 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **13.50 €** | 20.3 % | **16.9 %** | 13.71 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.90 € | **12.50 €** | 34.5 % | **30.3 %** | 12.73 € | stávame sa najlacnejší |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 13.90 € | **13.50 €** | 49.7 % | **45.4 %** | 13.74 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.90 € | **10.50 €** | 46.7 % | **41.3 %** | 10.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.50 €** | 11.6 % | **8.7 %** | 14.79 € | stávame sa najlacnejší |
| Maxxo vodní filtry 3+1 | 11.90 € | **11.50 €** | 11.2 % | **7.5 %** | 11.79 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 12.9 % | **9.1 %** | 11.79 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.50 €** | 16.5 % | **13.2 %** | 13.79 € | stávame sa najlacnejší |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.90 € | **10.50 €** | 38.0 % | **33.0 %** | 10.81 € | stávame sa najlacnejší |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.90 € | **12.50 €** | 18.6 % | **15.0 %** | 12.82 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 20.5 % | **16.4 %** | 11.84 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.84 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 11.90 € | **11.50 €** | 38.6 % | **33.9 %** | 11.86 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **10.50 €** | 45.5 % | **40.2 %** | 10.86 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.50 €** | 21.6 % | **18.4 %** | 14.87 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.50 €** | 46.2 % | **40.9 %** | 10.87 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.90 € | **14.50 €** | 15.7 % | **12.6 %** | 14.88 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.90 € | **13.50 €** | 35.8 % | **31.9 %** | 13.88 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **12.50 €** | 31.1 % | **27.0 %** | 12.89 € | stávame sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.90 € | **14.50 €** | 9.4 % | **6.5 %** | 14.89 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 2.20 € | **1.80 €** | 56.9 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **3.10 €** | 53.0 % | **35.5 %** | 3.14 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.50 €** | 40.9 % | **26.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.90 €** | 57.1 % | **29.8 %** | 1.96 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.90 € | **3.50 €** | 48.9 % | **33.6 %** | 3.58 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.80 € | **3.40 €** | 48.5 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 6.10 € | **5.70 €** | 55.0 % | **44.8 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.23 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.60 € | **4.20 €** | 48.4 % | **35.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 4.80 € | **4.40 €** | 54.9 % | **42.0 %** | 4.49 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| UMAX Webcam W5 | 16.90 € | **16.50 €** | 10.7 % | **8.1 %** | 14.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **27.50 €** | 11.2 % | **9.6 %** | 27.54 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.50 €** | 15.8 % | **13.8 %** | 22.54 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 10.7 % | **9.5 %** | 35.63 € | stávame sa najlacnejší |
| Tefal Copertinto BL439G10 | 59.90 € | **59.50 €** | 10.5 % | **9.7 %** | 59.67 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.90 € | **29.50 €** | 20.3 % | **18.7 %** | 29.68 € | stávame sa najlacnejší |
| Uni-T UT201R digitálny klešťový multimeter | 22.90 € | **22.50 €** | 16.0 % | **14.0 %** | 22.69 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 59.90 € | **59.50 €** | 8.5 % | **7.8 %** | 59.69 € | stávame sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 16.90 € | **16.50 €** | 8.1 % | **5.5 %** | 16.71 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.50 €** | 15.1 % | **14.4 %** | 63.71 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **25.50 €** | 39.1 % | **36.9 %** | 25.73 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.90 € | **41.50 €** | 34.9 % | **33.6 %** | 41.73 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **23.50 €** | 38.4 % | **36.1 %** | 23.75 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.90 € | **17.50 €** | 13.3 % | **10.7 %** | 17.75 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 31.90 € | **31.50 €** | 55.0 % | **53.1 %** | 31.77 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **39.50 €** | 38.6 % | **37.2 %** | 39.78 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 16.90 € | **16.50 €** | 10.4 % | **7.7 %** | 16.78 € | stávame sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.90 € | **18.50 €** | 12.1 % | **9.7 %** | 18.79 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 47.90 € | **47.50 €** | 9.1 % | **8.2 %** | 47.79 € | stávame sa najlacnejší |
| Beper BEP-BC261 | 31.90 € | **31.50 €** | 7.5 % | **6.1 %** | 31.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.5 % | **9.5 %** | 40.79 € | stávame sa najlacnejší |
| DOMO DO42602S | 39.90 € | **39.50 €** | 9.3 % | **8.2 %** | 39.79 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.90 € | **19.50 €** | 14.8 % | **12.5 %** | 19.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 21.90 € | **21.50 €** | 8.3 % | **6.3 %** | 21.79 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 59.90 € | **59.50 €** | 8.1 % | **7.4 %** | 59.80 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 26.90 € | **26.50 €** | 38.7 % | **36.6 %** | 26.80 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.5 % | **15.0 %** | 31.80 € | stávame sa najlacnejší |
| Russell Hobbs 23840-70 | 18.90 € | **18.50 €** | 12.3 % | **9.9 %** | 18.80 € | stávame sa najlacnejší |
| Gorenje MVC72HGA | 29.90 € | **29.50 €** | 10.1 % | **8.6 %** | 29.80 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 21.90 € | **21.50 €** | 34.0 % | **31.5 %** | 21.82 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 30.90 € | **30.50 €** | 54.8 % | **52.8 %** | 30.82 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.90 € | **36.50 €** | 17.5 % | **16.2 %** | 36.82 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.90 € | **36.50 €** | 17.8 % | **16.6 %** | 36.82 € | stávame sa najlacnejší |
| Bezkontaktný laserový teplomer Habotest HT650B | 17.90 € | **17.50 €** | 15.2 % | **12.6 %** | 17.83 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 31.90 € | **31.50 €** | 9.3 % | **8.0 %** | 31.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 27.90 € | **27.50 €** | 14.7 % | **13.0 %** | 27.83 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.50 €** | 14.9 % | **13.4 %** | 29.84 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 21.90 € | **21.50 €** | 50.3 % | **47.5 %** | 21.87 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 17.90 € | **17.50 €** | 7.8 % | **5.3 %** | 17.88 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.90 € | **28.50 €** | 39.1 % | **37.2 %** | 28.89 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **16.50 €** | 38.2 % | **35.0 %** | 16.89 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.89 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 28.90 € | **28.50 €** | 15.1 % | **13.5 %** | 28.89 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 55.90 € | **55.50 €** | 7.2 % | **6.4 %** | 55.89 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.90 € | **17.50 €** | 27.4 % | **24.6 %** | 17.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **33.50 €** | 20.0 % | **18.6 %** | 33.89 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 334.90 € | **334.50 €** | 7.1 % | **7.0 %** | 334.70 € | stávame sa najlacnejší |
| Amica MI 446 TBIM | 528.90 € | **528.50 €** | 6.1 % | **6.0 %** | 528.70 € | stávame sa najlacnejší |
| Whirlpool TDLR 6240S EU/N | 327.90 € | **327.50 €** | 6.0 % | **5.9 %** | 327.75 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 674.90 € | **674.50 €** | 9.1 % | **9.1 %** | 674.79 € | stávame sa najlacnejší |
| Whirlpool WP B9X WBS EE | 703.90 € | **703.50 €** | 9.9 % | **9.9 %** | 703.79 € | stávame sa najlacnejší |
| Beko B3RCSO255S | 275.90 € | **275.50 €** | 8.0 % | **7.9 %** | 275.80 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 348.90 € | **348.50 €** | 7.0 % | **6.9 %** | 348.80 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 444.90 € | **444.50 €** | 7.1 % | **7.0 %** | 444.80 € | stávame sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 767.90 € | **767.50 €** | 6.0 % | **6.0 %** | 767.80 € | stávame sa najlacnejší |
| Concept LA8383DS | 747.90 € | **747.50 €** | 8.2 % | **8.2 %** | 747.87 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 888.90 € | **888.50 €** | 7.0 % | **6.9 %** | 888.88 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.60 € | **2.30 €** | 48.9 % | **31.7 %** | 2.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 3.20 € | **2.90 €** | 46.2 % | **32.5 %** | 2.99 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.70 €** | 56.3 % | **32.9 %** | 1.71 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.80 €** | 55.2 % | **33.0 %** | 1.82 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 2.10 € | **1.80 €** | 52.4 % | **30.7 %** | 1.85 € | stávame sa najlacnejší |
| Solight bezpečnostná zátka - sada 5ks+1 kľúčik | 1.60 € | **1.30 €** | 60.6 % | **30.5 %** | 1.36 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.40 €** | 44.0 % | **18.6 %** | 1.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.80 €** | 47.2 % | **26.2 %** | 1.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.30 € | **3.00 €** | 49.1 % | **35.5 %** | 3.03 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 4.50 € | **4.20 €** | 53.7 % | **43.5 %** | 4.24 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.74 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.10 € | **3.80 €** | 54.3 % | **43.0 %** | 3.85 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 4.70 € | **4.40 €** | 52.8 % | **43.1 %** | 4.46 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.20 €** | 55.5 % | **42.2 %** | 3.26 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.40 € | **3.10 €** | 47.0 % | **34.1 %** | 3.17 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.90 € | **2.60 €** | 48.3 % | **32.9 %** | 2.68 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.50 €** | 48.8 % | **32.8 %** | 2.58 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 9.10 € | **8.80 €** | 42.3 % | **37.6 %** | 8.88 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.80 € | **9.60 €** | 18.0 % | **15.6 %** | 9.69 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.20 € | **3.00 €** | 53.9 % | **44.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.60 € | **2.40 €** | 47.8 % | **36.4 %** | 2.41 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.80 €** | 41.8 % | **32.4 %** | 2.84 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.80 €** | 41.0 % | **31.6 %** | 2.84 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.10 € | **1.90 €** | 47.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 7.50 € | **7.30 €** | 22.9 % | **19.7 %** | 7.39 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.30 €** | 50.6 % | **38.5 %** | 2.40 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.40 €** | 44.5 % | **26.5 %** | 1.50 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.10 € | **0.90 €** | 56.9 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.90 €** | 54.2 % | **26.2 %** | 0.98 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.90 €** | 54.2 % | **26.2 %** | 1.00 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.20 € | **1.00 €** | 54.9 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.50 € | **1.30 €** | 50.6 % | **30.5 %** | 1.35 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.70 €** | 47.1 % | **31.6 %** | 1.75 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.70 € | **1.50 €** | 53.6 % | **35.5 %** | 1.56 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.30 € | **1.10 €** | 60.1 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.70 € | **1.50 €** | 31.6 % | **16.1 %** | 1.59 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.20 €** | 56.1 % | **43.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.20 €** | 52.4 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.90 €** | 46.2 % | **39.1 %** | 4.00 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 9.00 € | **8.80 €** | 47.5 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.60 € | **7.40 €** | 29.8 % | **26.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.80 €** | 38.7 % | **36.0 %** | 9.90 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 4ks, 6,5cm, ba... | 10.00 € | **9.80 €** | 53.4 % | **50.3 %** | 9.90 € | stávame sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 37.00 € | **36.90 €** | 5.5 % | **5.2 %** | 36.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 44.00 € | **43.90 €** | 5.6 % | **5.4 %** | 43.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-BP654 | 27.00 € | **26.90 €** | 10.4 % | **10.0 %** | 26.92 € | stávame sa najlacnejší |
| Bravo B-4813 Žehlička SERENA červená | 46.00 € | **45.90 €** | 10.1 % | **9.8 %** | 45.92 € | stávame sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.90 €** | 14.9 % | **14.7 %** | 54.94 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 22.00 € | **21.90 €** | 38.4 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 40.00 € | **39.90 €** | 19.5 % | **19.2 %** | 39.96 € | stávame sa najlacnejší |
| ETA Verto II 1423 90000 bílý/zlatý | 31.00 € | **30.90 €** | 12.1 % | **11.7 %** | 30.96 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.97 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.90 €** | 14.6 % | **14.3 %** | 46.97 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 64.00 € | **63.90 €** | 24.7 % | **24.5 %** | 63.98 € | stávame sa najlacnejší |
| Amica KF 17191 | 30.00 € | **29.90 €** | 22.7 % | **22.3 %** | 29.98 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.00 € | **22.90 €** | 16.7 % | **16.2 %** | 22.99 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.30 € | **8.20 €** | 13.8 % | **12.4 %** | 8.29 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 24.00 € | **23.90 €** | 7.1 % | **6.6 %** | 23.99 € | stávame sa najlacnejší |
| Russell Hobbs 27011-56 | 45.00 € | **44.90 €** | 5.4 % | **5.2 %** | 44.99 € | stávame sa najlacnejší |
| Solight 40mm kulma na dlhé vlasy pre Dyson Airwrap (... | 21.00 € | **20.90 €** | 30.3 % | **29.7 %** | 20.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.80 € | **9.70 €** | 23.0 % | **21.7 %** | 9.79 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.00 € | **24.90 €** | 17.1 % | **16.7 %** | 24.99 € | stávame sa najlacnejší |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 30.00 € | **29.90 €** | 14.5 % | **14.1 %** | 29.99 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.20 € | **5.10 €** | 46.3 % | **43.5 %** | 5.15 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.20 € | **5.10 €** | 33.4 % | **30.8 %** | 5.16 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.20 € | **4.10 €** | 23.3 % | **20.3 %** | 4.17 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 4.90 € | **4.80 €** | 34.6 % | **31.8 %** | 4.87 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.30 €** | 45.4 % | **42.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.40 € | **4.30 €** | 13.9 % | **11.3 %** | 4.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.70 € | **4.60 €** | 37.0 % | **34.0 %** | 4.69 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **1.00 €** | 49.1 % | **35.5 %** | 1.02 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **1.00 €** | 49.1 % | **35.5 %** | 1.02 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.60 €** | 46.7 % | **42.8 %** | 3.65 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **1.00 €** | 42.0 % | **29.0 %** | 1.05 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.90 € | **3.80 €** | 32.7 % | **29.3 %** | 3.85 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.30 € | **1.20 €** | 51.0 % | **39.4 %** | 1.25 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.46 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 2.00 € | **1.90 €** | 40.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.40 € | **3.30 €** | 38.2 % | **34.1 %** | 3.37 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.20 € | **3.10 €** | 37.7 % | **33.4 %** | 3.17 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.60 € | **3.50 €** | 35.5 % | **31.7 %** | 3.57 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.60 € | **3.50 €** | 24.5 % | **21.1 %** | 3.57 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **1.00 €** | 56.9 % | **42.6 %** | 1.08 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.28 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **3.00 €** | 16.1 % | **12.4 %** | 3.08 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.60 € | **3.50 €** | 52.4 % | **48.2 %** | 3.59 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.80 € | **1.70 €** | 29.5 % | **22.3 %** | 1.79 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.90 €** | 22.7 % | **19.7 %** | 3.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.60 €** | 26.9 % | **22.2 %** | 2.69 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.70 € | **3.60 €** | 45.3 % | **41.4 %** | 3.69 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **1.10 €** | 43.5 % | **31.5 %** | 1.14 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.40 € | **1.30 €** | 38.8 % | **28.9 %** | 1.35 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.30 €** | 32.4 % | **22.9 %** | 1.35 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.80 €** | 45.7 % | **38.1 %** | 1.89 € | stávame sa najlacnejší |
| Batéria AA MediaRange nabíjateľné USB-C Li-Ion , 1,5... | 13.00 € | **12.90 €** | 6.3 % | **5.5 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Svetelný merač UNI-T UT383 | 16.00 € | **15.90 €** | 7.8 % | **7.1 %** | 15.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.00 € | **12.90 €** | 6.3 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Vlákno Creality TPU (biele) | 16.00 € | **15.90 €** | 13.5 % | **12.8 %** | 15.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 36.1 % | **34.2 %** | 7.05 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 10.00 € | **9.90 €** | 26.8 % | **25.6 %** | 9.95 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.90 €** | 38.7 % | **37.4 %** | 9.96 € | stávame sa najlacnejší |
| Solight LED drevená vianočná hviezda, závesná, časov... | 12.00 € | **11.90 €** | 52.9 % | **51.6 %** | 11.96 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.00 € | **10.90 €** | 9.3 % | **8.3 %** | 10.96 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.20 € | **9.10 €** | 39.5 % | **38.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.60 € | **9.50 €** | 37.2 % | **35.7 %** | 9.56 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.60 € | **5.50 €** | 27.9 % | **25.6 %** | 5.56 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.30 € | **5.20 €** | 38.1 % | **35.5 %** | 5.26 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.10 € | **8.00 €** | 17.0 % | **15.5 %** | 8.07 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.10 € | **8.00 €** | 17.0 % | **15.5 %** | 8.07 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.10 € | **6.00 €** | 27.5 % | **25.4 %** | 6.07 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.40 €** | 36.3 % | **33.8 %** | 5.48 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 5.50 € | **5.40 €** | 17.7 % | **15.5 %** | 5.48 € | stávame sa najlacnejší |
| Solight izbová anténa, DVB-T2/FM, 36dB | 12.00 € | **11.90 €** | 19.3 % | **18.3 %** | 11.98 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 8.00 € | **7.90 €** | 12.3 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11, V15 | 7.00 € | **6.90 €** | 30.8 % | **29.0 %** | 6.99 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 9.00 € | **8.90 €** | 12.7 % | **11.5 %** | 8.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.90 € | **8.80 €** | 33.3 % | **31.8 %** | 8.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.80 € | **4.70 €** | 24.7 % | **22.1 %** | 4.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **4.90 €** | 21.0 % | **18.6 %** | 4.99 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.50 € | **4.40 €** | 37.0 % | **34.0 %** | 4.49 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.00 € | **8.90 €** | 10.5 % | **9.3 %** | 8.99 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 174.00 € | **173.90 €** | 6.1 % | **6.1 %** | 173.96 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.00 € | **69.90 €** | 13.0 % | **12.8 %** | 69.99 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 89.00 € | **88.90 €** | 13.2 % | **13.1 %** | 88.99 € | stávame sa najlacnejší |

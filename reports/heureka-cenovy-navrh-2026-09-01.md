# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-01

Vstup: `premiumstoresk_20260901_2104.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5799**
- Návrh **zvýšiť** cenu: **150** produktov
- Návrh **znížiť** cenu: **1124** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4525** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **163**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (150)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Gorenje NRK6192AXL4 | 369.50 € | **380.00 €** | 10.8 % | **13.9 %** | 369.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GV520E15 | 282.90 € | **291.00 €** | 5.1 % | **8.1 %** | 282.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.50 € | **123.50 €** | 14.6 % | **21.5 %** | 116.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux EIV84550 | 518.50 € | **525.00 €** | 7.1 % | **8.5 %** | 518.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.00 € | **119.90 €** | 9.9 % | **15.6 %** | 114.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjačka B6AC Neo | 49.50 € | **53.50 €** | 15.2 % | **24.6 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO716BL | 80.90 € | **84.50 €** | 5.3 % | **10.0 %** | 80.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 45.00 € | **47.90 €** | 7.6 % | **14.5 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 15.50 € | **17.90 €** | 6.0 % | **22.4 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná stolná lampička s klipom bi... | 9.20 € | **11.50 €** | 8.9 % | **36.1 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 36.50 € | **38.50 €** | 9.3 % | **15.3 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE TH60E3B | 77.90 € | **79.90 €** | 5.2 % | **7.9 %** | 77.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 449.00 € | **451.00 €** | 6.6 % | **7.0 %** | 449.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.00 € | **31.90 €** | 9.9 % | **16.9 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy ORYX X220 Iris | 19.00 € | **20.90 €** | 7.7 % | **18.5 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.00 € | **25.90 €** | 12.3 % | **21.2 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 8.90 € | **10.50 €** | 18.8 % | **40.2 %** | 8.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.50 € | **15.00 €** | 9.2 % | **21.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.50 € | **15.00 €** | 9.2 % | **21.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 36.50 € | **38.00 €** | 9.7 % | **14.2 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo vodní filtry 3+1 | 11.50 € | **12.50 €** | 7.8 % | **17.2 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 83.90 € | **84.90 €** | 8.4 % | **9.7 %** | 83.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.00 € | **64.00 €** | 9.3 % | **11.0 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP White | 14.50 € | **15.50 €** | 9.3 % | **16.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 102.00 € | **103.00 €** | 6.8 % | **7.9 %** | 102.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo VM Master | 241.00 € | **241.90 €** | 7.3 % | **7.7 %** | 241.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.00 € | **69.90 €** | 33.0 % | **34.7 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.00 € | **69.90 €** | 22.1 % | **23.7 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.00 € | **14.90 €** | 5.2 % | **12.0 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.00 € | **11.90 €** | 34.7 % | **45.7 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.00 € | **13.90 €** | 30.8 % | **39.9 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.00 € | **12.90 €** | 30.6 % | **40.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.00 € | **13.90 €** | 12.6 % | **20.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.00 € | **14.90 €** | 7.3 % | **14.2 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.00 € | **28.90 €** | 34.8 % | **39.1 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.00 € | **21.90 €** | 19.6 % | **24.8 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.00 € | **49.90 €** | 22.3 % | **24.6 %** | 49.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 27.00 € | **27.90 €** | 21.3 % | **25.4 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.00 € | **17.90 €** | 39.2 % | **46.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.00 € | **16.90 €** | 28.3 % | **35.5 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 34.00 € | **34.90 €** | 14.7 % | **17.7 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.00 € | **45.90 €** | 98.3 % | **102.3 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 63.00 € | **63.90 €** | 15.5 % | **17.1 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.00 € | **33.90 €** | 5.3 % | **8.1 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.00 € | **34.90 €** | 23.3 % | **26.6 %** | 34.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.00 € | **29.90 €** | 16.7 % | **20.3 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.90 €** | 16.9 % | **20.0 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 31.00 € | **31.90 €** | 27.4 % | **31.1 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 21.00 € | **21.90 €** | 6.2 % | **10.7 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.00 € | **19.90 €** | 33.3 % | **39.6 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 328.00 € | **328.90 €** | 7.8 % | **8.1 %** | 328.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10S | 342.90 € | **343.50 €** | 6.9 % | **7.1 %** | 342.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 CIR60430CB | 372.90 € | **373.50 €** | 7.0 % | **7.1 %** | 372.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 19.90 € | **20.50 €** | 91.9 % | **97.7 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 30.90 € | **31.50 €** | 18.4 % | **20.7 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 26.90 € | **27.50 €** | 13.3 % | **15.8 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 26.90 € | **27.50 €** | 9.0 % | **11.4 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong LEAP-S3 V2 Google TV box | 63.90 € | **64.50 €** | 10.4 % | **11.4 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.50 €** | 5.5 % | **7.0 %** | 43.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 41.90 € | **42.50 €** | 18.7 % | **20.4 %** | 41.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 37.90 € | **38.50 €** | 32.2 % | **34.3 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 21.90 € | **22.50 €** | 6.4 % | **9.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 12.90 € | **13.50 €** | 8.9 % | **14.0 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 14.90 € | **15.50 €** | 40.2 % | **45.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.90 € | **15.50 €** | 34.4 % | **39.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.90 € | **11.50 €** | 31.1 % | **38.3 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 12.90 € | **13.50 €** | 30.3 % | **36.3 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 14.90 € | **15.50 €** | 11.5 % | **16.0 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 750 | 109.90 € | **110.50 €** | 5.1 % | **5.7 %** | 109.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.50 € | **49.00 €** | 14.3 % | **15.4 %** | 48.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 56.50 € | **57.00 €** | 26.2 % | **27.3 %** | 56.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.50 € | **13.00 €** | 33.2 % | **38.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 7.50 € | **8.00 €** | 29.5 % | **38.1 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **13.00 €** | 23.5 % | **28.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.50 € | **20.00 €** | 13.6 % | **16.5 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 11.50 € | **12.00 €** | 41.2 % | **47.4 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 7.20 € | **7.70 €** | 43.5 % | **53.4 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight profesionálna laserová vodováha - zelený laser | 37.50 € | **38.00 €** | 30.3 % | **32.0 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.50 € | **23.00 €** | 7.6 % | **10.0 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.50 € | **22.00 €** | 22.5 % | **25.3 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 20.00 € | **20.50 €** | 11.1 % | **13.9 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 20.50 € | **21.00 €** | 31.0 % | **34.2 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.50 € | **16.00 €** | 16.0 % | **19.8 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 17.50 € | **18.00 €** | 6.6 % | **9.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 118.00 € | **118.50 €** | 11.7 % | **12.2 %** | 118.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.50 € | **69.00 €** | 12.0 % | **12.8 %** | 68.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Marvo HG8928 sluchátka s mikrofonem | 12.00 € | **12.50 €** | 5.2 % | **9.6 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 11.50 € | **12.00 €** | 14.3 % | **19.3 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.00 € | **16.50 €** | 25.2 % | **29.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 17.50 € | **17.90 €** | 31.4 % | **34.4 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 47.50 € | **47.90 €** | 10.4 % | **11.3 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.70 € | **3.00 €** | 31.4 % | **46.0 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.20 € | **9.40 €** | 32.9 % | **35.7 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.20 € | **9.40 €** | 32.9 % | **35.7 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.70 € | **8.90 €** | 9.0 % | **11.5 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.20 € | **8.40 €** | 40.4 % | **43.8 %** | 8.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.50 € | **4.70 €** | 35.0 % | **41.0 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.00 € | **4.20 €** | 17.4 % | **23.3 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.50 € | **6.70 €** | 30.5 % | **34.5 %** | 6.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.50 € | **2.70 €** | 27.0 % | **37.2 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 24.3 % | **28.3 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 5.4 % | **8.7 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.00 € | **2.20 €** | 11.4 % | **22.5 %** | 2.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.80 € | **3.00 €** | 15.6 % | **23.8 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.10 € | **4.30 €** | 23.5 % | **29.5 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.60 € | **4.80 €** | 31.7 % | **37.4 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.80 € | **8.00 €** | 33.5 % | **36.9 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.40 € | **3.60 €** | 9.3 % | **15.7 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.30 € | **7.50 €** | 24.4 % | **27.8 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.00 € | **6.20 €** | 13.2 % | **17.0 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.10 € | **5.30 €** | 16.5 % | **21.0 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.10 € | **5.30 €** | 32.0 % | **37.2 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.50 € | **6.70 €** | 24.6 % | **28.5 %** | 6.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.30 € | **3.50 €** | 26.6 % | **34.2 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.50 € | **3.70 €** | 37.5 % | **45.3 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.50 € | **7.70 €** | 40.5 % | **44.2 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.00 € | **1.20 €** | 16.1 % | **39.4 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.10 € | **1.30 €** | 19.2 % | **40.9 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.10 € | **1.30 €** | 19.2 % | **40.9 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.70 € | **1.90 €** | 30.4 % | **45.7 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.80 € | **2.00 €** | 10.9 % | **23.2 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 3.70 € | **3.90 €** | 16.6 % | **22.9 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.60 € | **2.80 €** | 25.8 % | **35.5 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.70 € | **2.90 €** | 14.9 % | **23.4 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.10 € | **3.30 €** | 27.9 % | **36.2 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.70 € | **3.90 €** | 11.4 % | **17.4 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 7.90 € | **8.10 €** | 8.3 % | **11.1 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.80 € | **10.00 €** | 36.0 % | **38.7 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.60 €** | 28.5 % | **32.5 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.60 €** | 28.5 % | **32.5 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.80 € | **10.00 €** | 22.6 % | **25.1 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.80 € | **10.00 €** | 42.8 % | **45.7 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.40 € | **7.60 €** | 21.5 % | **24.8 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.50 € | **9.70 €** | 31.8 % | **34.6 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.40 € | **7.60 €** | 33.4 % | **37.0 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 505.90 € | **506.00 €** | 7.0 % | **7.0 %** | 505.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 25.90 € | **26.00 €** | 8.9 % | **9.3 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.90 € | **25.00 €** | 16.7 % | **17.1 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 17.90 € | **18.00 €** | 5.5 % | **6.0 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.90 € | **19.00 €** | 34.4 % | **35.1 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.30 € | **5.40 €** | 6.9 % | **8.9 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.50 € | **1.60 €** | 28.4 % | **36.9 %** | 1.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 14.90 € | **15.00 €** | 9.7 % | **10.5 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.20 € | **6.30 €** | 6.1 % | **7.8 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 9.90 € | **10.00 €** | 19.8 % | **21.0 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 5.4 % | **6.9 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1124)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2326.50 € | **2124.50 €** | 15.0 % | **5.0 %** | 1999.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S99H | 3600.50 € | **3436.90 €** | 10.0 % | **5.0 %** | 3399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje FN619EEW5 | 639.00 € | **480.00 €** | 39.8 % | **5.0 %** | 475.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot MOVA V70 Ultra Complete v bielej farbe | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.50 €** | 16.8 % | **9.3 %** | 1543.60 € | stávame sa najlacnejší |
| MOTOROLA Razr Fold 16+512GB Blue | 2182.90 € | **2083.50 €** | 10.0 % | **5.0 %** | 1449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL WI 7020 P | 479.00 € | **386.90 €** | 30.1 % | **5.1 %** | 331.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WDSI96A | 499.00 € | **422.90 €** | 23.9 % | **5.0 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr 70 Ultra 16+512GB Blue | 1353.50 € | **1291.90 €** | 10.0 % | **5.0 %** | 1218.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS520E15W | 339.00 € | **282.90 €** | 25.9 % | **5.1 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **235.90 €** | 28.7 % | **5.0 %** | 233.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool OMK38HU0B | 299.00 € | **247.50 €** | 27.0 % | **5.2 %** | 228.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný samočistiaci záchod pre mačky Catlink P... | 589.50 € | **538.50 €** | 15.0 % | **5.1 %** | 508.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Carbon | 1091.50 € | **1041.90 €** | 10.0 % | **5.0 %** | 779.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Olive | 1091.50 € | **1041.90 €** | 10.0 % | **5.0 %** | 819.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R619EES5 | 519.00 € | **469.50 €** | 16.1 % | **5.0 %** | 407.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHFF 6404 X6E | 1019.50 € | **973.50 €** | 10.0 % | **5.0 %** | 959.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 463.00 € | **417.50 €** | 24.3 % | **12.1 %** | 417.60 € | stávame sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 96.0 % | **11.9 %** | 57.23 € | stávame sa najlacnejší |
| YAMAHA TT-S303 BLACK | 529.00 € | **486.50 €** | 14.2 % | **5.0 %** | 466.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E10 | 339.00 € | **298.90 €** | 19.2 % | **5.1 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Blue | 873.50 € | **833.50 €** | 10.1 % | **5.0 %** | 569.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Red | 873.50 € | **833.50 €** | 10.1 % | **5.0 %** | 678.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 2-in-1 laser engraving machine xTool S1 40W Basic (B... | 1825.00 € | **1787.00 €** | 15.0 % | **12.6 %** | 1787.46 € | stávame sa najlacnejší |
| YAMAHA A-S301 BLACK | 439.00 € | **402.50 €** | 14.6 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 28.0 % | **9.2 %** | 204.08 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 24.9 % | **9.2 %** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 24.7 % | **9.0 %** | 244.20 € | stávame sa najlacnejší |
| kamerový set TP-Link Tapo C425 KIT 4MPx, vonkajšie, ... | 144.90 € | **113.90 €** | 33.7 % | **5.1 %** | 97.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality Hi Combo | 354.00 € | **323.50 €** | 15.0 % | **5.1 %** | 322.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Blue | 654.90 € | **625.00 €** | 10.0 % | **5.0 %** | 475.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Wood | 654.90 € | **625.00 €** | 10.0 % | **5.0 %** | 475.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 793.90 € | **765.00 €** | 10.0 % | **6.0 %** | 765.20 € | stávame sa najlacnejší |
| GORENJE MO 4250 CLI | 159.00 € | **130.90 €** | 27.9 % | **5.3 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE NRS8182KX | 598.50 € | **571.50 €** | 10.0 % | **5.1 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje MO 20 A3B | 99.00 € | **72.50 €** | 43.6 % | **5.1 %** | 65.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple AirPods Max 2 - Midnight | 576.50 € | **550.50 €** | 10.1 % | **5.1 %** | 490.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 263.50 € | **239.90 €** | 19.9 % | **9.2 %** | 239.95 € | stávame sa najlacnejší |
| Apple AirPods Max Midnight (2024) | 520.00 € | **496.50 €** | 10.0 % | **5.0 %** | 395.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS6C70WPA | 498.50 € | **475.50 €** | 10.1 % | **5.0 %** | 422.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 927.50 € | **904.50 €** | 10.0 % | **7.3 %** | 904.67 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 11.0 % | **9.3 %** | 1377.03 € | stávame sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 13 GS1331 | 246.50 € | **225.00 €** | 15.1 % | **5.0 %** | 196.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C610 KIT 3MPx, vonkajšia, IP PTZ... | 103.90 € | **82.50 €** | 32.6 % | **5.3 %** | 79.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 240.50 € | **219.50 €** | 24.5 % | **13.6 %** | 219.84 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 566.90 € | **546.00 €** | 10.1 % | **6.0 %** | 546.10 € | stávame sa najlacnejší |
| Samsung The Frame Pro QE65LS03HW | 1798.50 € | **1778.00 €** | 8.9 % | **7.6 %** | 1778.50 € | stávame sa najlacnejší |
| ETA Ambo III 5075 90000 šedý/bílá | 119.99 € | **99.50 €** | 26.8 % | **5.2 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE55LS03HW | 1405.90 € | **1385.50 €** | 10.0 % | **8.4 %** | 1385.90 € | stávame sa najlacnejší |
| Gorenje GS642D90X | 393.50 € | **375.50 €** | 10.1 % | **5.1 %** | 296.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 188.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZEUSLAP Z16H 16" prenosný monitor | 246.90 € | **228.90 €** | 15.1 % | **6.7 %** | 229.00 € | stávame sa najlacnejší |
| BROTHER DCP-L3560CDW | 392.90 € | **375.50 €** | 10.0 % | **5.1 %** | 354.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 40.00 € | **22.90 €** | 84.1 % | **5.4 %** | 22.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 691.50 € | **674.50 €** | 10.1 % | **7.4 %** | 674.58 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 311.50 € | **295.50 €** | 10.9 % | **5.2 %** | 275.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 406.50 € | **390.50 €** | 9.4 % | **5.1 %** | 388.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 39.50 € | **23.50 €** | 80.3 % | **7.3 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT černé | 168.50 € | **153.00 €** | 15.7 % | **5.1 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 168.50 € | **153.00 €** | 15.7 % | **5.1 %** | 139.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **154.50 €** | 14.9 % | **5.1 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo LED800 antracit | 309.50 € | **295.50 €** | 10.0 % | **5.1 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo LED800 bílý | 309.50 € | **295.50 €** | 10.0 % | **5.1 %** | 285.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 410B8-S | 314.90 € | **300.90 €** | 10.0 % | **5.1 %** | 296.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 Pro 8/256GB Black | 295.50 € | **281.90 €** | 10.2 % | **5.1 %** | 244.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G57 Power 12+256GB Green | 304.00 € | **290.50 €** | 10.0 % | **5.1 %** | 228.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fagor 4LVF-638ADIT | 481.90 € | **468.50 €** | 10.0 % | **7.0 %** | 468.60 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 42.99 € | **29.90 €** | 57.9 % | **9.8 %** | 29.94 € | stávame sa najlacnejší |
| YAMAHA R-S202D SILVER | 283.50 € | **270.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 22.6 % | **9.2 %** | 106.20 € | stávame sa najlacnejší |
| Gorenje N62CS2XL4 | 447.50 € | **435.00 €** | 10.1 % | **7.0 %** | 435.10 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 53.00 € | **40.50 €** | 43.6 % | **9.8 %** | 40.63 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 455.50 € | **443.00 €** | 10.0 % | **7.0 %** | 443.20 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 110.00 € | **97.50 €** | 35.1 % | **19.7 %** | 97.74 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 134.90 € | **122.50 €** | 24.9 % | **13.4 %** | 122.76 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Brownie... | 31.90 € | **19.90 €** | 69.5 % | **5.7 %** | 19.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 10.1 % | **7.0 %** | 413.60 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 221.90 € | **210.00 €** | 15.1 % | **8.9 %** | 210.46 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F03 STD | 137.50 € | **125.90 €** | 15.0 % | **5.3 %** | 119.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Black | 240.50 € | **229.50 €** | 10.1 % | **5.1 %** | 192.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **31.00 €** | 48.1 % | **9.3 %** | 31.21 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **25.00 €** | 51.1 % | **5.3 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 338 | 581.00 € | **570.50 €** | 10.0 % | **8.0 %** | 570.59 € | stávame sa najlacnejší |
| Concept IDV5160wh | 363.50 € | **353.00 €** | 10.1 % | **7.0 %** | 353.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 113.50 € | **103.00 €** | 43.9 % | **30.6 %** | 103.26 € | stávame sa najlacnejší |
| Taška DJI Power 1000 | 119.90 € | **109.50 €** | 15.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 555.90 € | **545.50 €** | 10.1 % | **8.0 %** | 545.69 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 600.00 € | **589.90 €** | 7.9 % | **6.1 %** | 589.94 € | stávame sa najlacnejší |
| GORENJE F4142PW | 232.00 € | **221.90 €** | 12.9 % | **8.0 %** | 222.00 € | stávame sa najlacnejší |
| Tefal GC772830 | 225.50 € | **215.50 €** | 10.1 % | **5.2 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WE694A1 | 357.50 € | **347.50 €** | 10.1 % | **7.0 %** | 347.60 € | stávame sa najlacnejší |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 23.90 € | **13.90 €** | 85.2 % | **7.7 %** | 13.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1 | 130.90 € | **121.50 €** | 13.5 % | **5.4 %** | 117.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 148.90 € | **139.50 €** | 15.1 % | **7.9 %** | 139.90 € | stávame sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 50.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládaním Penley,... | 27.50 € | **18.90 €** | 54.8 % | **6.4 %** | 18.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C220 IP, 4MPx, WiFi, prísvit | 44.00 € | **35.50 €** | 31.2 % | **5.8 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 192.50 € | **184.00 €** | 14.4 % | **9.4 %** | 184.19 € | stávame sa najlacnejší |
| Tefal GC728D10 | 181.90 € | **173.50 €** | 10.2 % | **5.1 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 224.90 € | **216.50 €** | 10.2 % | **6.1 %** | 216.54 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 501.00 € | **492.90 €** | 6.8 % | **5.1 %** | 483.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 168.00 € | **159.90 €** | 11.0 % | **5.7 %** | 159.95 € | stávame sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 471.00 € | **463.00 €** | 6.8 % | **5.0 %** | 442.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L2622DW | 183.50 € | **175.50 €** | 10.1 % | **5.3 %** | 164.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 29.50 € | **21.50 €** | 46.1 % | **6.5 %** | 20.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C113 IP, 3MPx, WiFi, prísvit, vn... | 38.90 € | **30.90 €** | 32.4 % | **5.2 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Portable Monitor Arzopa A1T 15,6" | 125.50 € | **117.50 €** | 15.0 % | **7.6 %** | 117.84 € | stávame sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **23.00 €** | 54.5 % | **15.0 %** | 23.18 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 798.50 € | **790.90 €** | 14.9 % | **13.8 %** | 790.99 € | stávame sa najlacnejší |
| JBL Charge 6, černý | 166.50 € | **158.90 €** | 10.1 % | **5.0 %** | 129.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 39.50 € | **32.00 €** | 45.7 % | **18.0 %** | 32.04 € | stávame sa najlacnejší |
| Spájkovacia stanica FNIRSI DWS-200 F | 140.50 € | **133.00 €** | 15.1 % | **9.0 %** | 133.25 € | stávame sa najlacnejší |
| LEIFHEIT Zametač koberců REGULUS | 36.99 € | **29.50 €** | 32.9 % | **6.0 %** | 25.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-L7 | 270.90 € | **263.50 €** | 8.0 % | **5.1 %** | 256.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 487.00 € | **479.90 €** | 6.6 % | **5.1 %** | 427.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 33.50 € | **26.50 €** | 35.2 % | **6.9 %** | 26.69 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP AT156 s uhlopriečkou 15,6" | 137.50 € | **130.50 €** | 15.1 % | **9.2 %** | 130.79 € | stávame sa najlacnejší |
| Projector Blitzwolf, BW-V8, 4K, Android OS | 156.90 € | **150.00 €** | 15.0 % | **9.9 %** | 150.42 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P15A s uhlopriečkou 15,6" | 105.90 € | **99.00 €** | 15.0 % | **7.5 %** | 99.46 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 37.50 € | **30.90 €** | 28.9 % | **6.2 %** | 28.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 114.50 € | **107.90 €** | 18.8 % | **11.9 %** | 107.91 € | stávame sa najlacnejší |
| MOTOROLA Moto G06 Power 4+256GB Blue | 152.00 € | **145.50 €** | 10.0 % | **5.3 %** | 107.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 69.50 € | **63.00 €** | 25.1 % | **13.4 %** | 63.19 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 71.00 € | **64.50 €** | 16.1 % | **5.4 %** | 64.69 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 31.50 € | **25.00 €** | 54.0 % | **22.2 %** | 25.24 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.24 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **82.00 €** | 14.9 % | **6.5 %** | 82.24 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.5 % | **9.2 %** | 18.67 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 115.90 € | **109.50 €** | 15.1 % | **8.7 %** | 109.90 € | stávame sa najlacnejší |
| Baterie olověná 12V / 45 Ah MHPower 6-DMF-45 GEL Tra... | 113.50 € | **107.50 €** | 11.3 % | **5.5 %** | 90.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW501815 | 136.50 € | **130.50 €** | 10.1 % | **5.3 %** | 121.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MPPT solar panel adapter for DJI power stations | 71.50 € | **65.50 €** | 14.7 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 378.50 € | **372.50 €** | 7.7 % | **6.0 %** | 372.57 € | stávame sa najlacnejší |
| Candy CDPH 2D947X | 321.50 € | **315.50 €** | 10.1 % | **8.0 %** | 315.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 40.50 € | **34.50 €** | 59.2 % | **35.6 %** | 34.65 € | stávame sa najlacnejší |
| ZEUSLAP Z10P 10-palcový prenosný monitor | 104.00 € | **98.00 €** | 15.0 % | **8.4 %** | 98.50 € | stávame sa najlacnejší |
| Candy GD 49B8-S | 291.90 € | **286.00 €** | 10.1 % | **7.9 %** | 286.40 € | stávame sa najlacnejší |
| MOTOROLA Moto G06 4+64GB Blue | 117.50 € | **111.90 €** | 10.3 % | **5.0 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 56.50 € | **51.00 €** | 24.3 % | **12.2 %** | 51.18 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 678.00 € | **672.50 €** | 10.0 % | **9.1 %** | 672.69 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 28.90 € | **23.50 €** | 29.4 % | **5.2 %** | 23.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1-Ss | 130.00 € | **124.90 €** | 9.6 % | **5.3 %** | 114.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 41.90 € | **36.90 €** | 19.8 % | **5.5 %** | 35.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Presto 2094 90000, bílý | 99.00 € | **94.00 €** | 12.3 % | **6.6 %** | 94.05 € | stávame sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 54.50 € | **49.50 €** | 20.1 % | **9.1 %** | 49.57 € | stávame sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.6 % | **16.4 %** | 24.10 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 53.00 € | **48.00 €** | 24.8 % | **13.0 %** | 48.19 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **500.00 €** | 15.0 % | **13.8 %** | 500.20 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA310 Umývateľná mopovac... | 25.00 € | **20.00 €** | 38.3 % | **10.6 %** | 20.45 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **11.00 €** | 56.1 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 18.90 € | **14.00 €** | 48.3 % | **9.9 %** | 14.09 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **8.80 €** | 121.3 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Electrolux LKR64022AW | 463.50 € | **458.90 €** | 7.0 % | **6.0 %** | 459.00 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 36.50 € | **31.90 €** | 21.3 % | **6.0 %** | 31.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 3601 | 101.50 € | **96.90 €** | 10.4 % | **5.4 %** | 90.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO4B25EA | 96.50 € | **91.90 €** | 10.3 % | **5.0 %** | 89.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.90 €** | 14.9 % | **10.4 %** | 114.93 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.50 € | **48.00 €** | 15.7 % | **5.8 %** | 48.19 € | stávame sa najlacnejší |
| Guzzanti GZ 110G | 330.00 € | **325.50 €** | 10.0 % | **8.5 %** | 325.72 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16BT s 16-palcovým dotykov... | 210.90 € | **206.50 €** | 15.0 % | **12.6 %** | 206.63 € | stávame sa najlacnejší |
| Stepper REBEL ACTIVE RBA-3220 s madlem | 64.90 € | **60.50 €** | 21.2 % | **13.0 %** | 60.67 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 123.90 € | **119.50 €** | 15.1 % | **11.0 %** | 119.90 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 143.90 € | **139.90 €** | 8.1 % | **5.1 %** | 130.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovačka Vacu Power 500 | 89.90 € | **85.90 €** | 10.2 % | **5.3 %** | 83.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 19.00 € | **15.00 €** | 33.7 % | **5.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 35.50 € | **31.50 €** | 20.0 % | **6.5 %** | 30.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 25.90 € | **21.90 €** | 63.0 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 42.00 € | **38.00 €** | 17.7 % | **6.5 %** | 38.09 € | stávame sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 104.90 € | **100.90 €** | 10.1 % | **5.9 %** | 101.00 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 23.2 % | **11.5 %** | 38.17 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA520 Umývateľný HEPA fi... | 24.00 € | **20.00 €** | 32.7 % | **10.6 %** | 20.45 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 28.50 € | **24.90 €** | 20.9 % | **5.6 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP Z15ST s 15,6-palcovým dotyk... | 134.00 € | **130.50 €** | 15.0 % | **12.0 %** | 130.67 € | stávame sa najlacnejší |
| Electrolux LIB60420CK | 208.00 € | **204.50 €** | 10.0 % | **8.2 %** | 204.70 € | stávame sa najlacnejší |
| SALENTE SuChef | 83.90 € | **80.50 €** | 9.6 % | **5.1 %** | 72.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT 420 Android TV box | 71.90 € | **68.50 €** | 10.3 % | **5.1 %** | 68.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - white | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 227.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - black | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 239.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **64.90 €** | 10.5 % | **5.6 %** | 61.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 20.00 € | **17.00 €** | 26.5 % | **7.6 %** | 17.05 € | stávame sa najlacnejší |
| ZEUSLAP Z23 LITE 23" prenosný monitor | 179.50 € | **176.50 €** | 15.1 % | **13.2 %** | 176.58 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-black (black) | 107.00 € | **104.00 €** | 14.8 % | **11.6 %** | 104.12 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 45.00 € | **42.00 €** | 17.4 % | **9.6 %** | 42.15 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 43.50 € | **40.50 €** | 13.7 % | **5.9 %** | 40.69 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **35.50 €** | 55.1 % | **43.0 %** | 35.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.50 €** | 56.5 % | **28.1 %** | 13.90 € | stávame sa najlacnejší |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 24.90 € | **22.00 €** | 55.2 % | **37.2 %** | 22.20 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.90 € | **37.00 €** | 16.1 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **36.00 €** | 14.9 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 8.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovladač 4-kan. k pohonu vrat IN SL-600, 1000... | 28.50 € | **25.90 €** | 15.9 % | **5.3 %** | 19.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo čierne) | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 58.50 € | **55.90 €** | 10.4 % | **5.5 %** | 52.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 33.50 € | **30.90 €** | 15.3 % | **6.3 %** | 29.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 24.50 € | **21.90 €** | 43.5 % | **28.3 %** | 22.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100(1-pack) regulácia 23... | 13.50 € | **10.90 €** | 31.3 % | **6.0 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 179.50 € | **176.90 €** | 9.3 % | **7.7 %** | 177.00 € | stávame sa najlacnejší |
| Electrolux EOD3H40BX | 227.50 € | **224.90 €** | 8.0 % | **6.8 %** | 225.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 22.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **14.50 €** | 47.5 % | **25.8 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **14.50 €** | 47.5 % | **25.8 %** | 14.54 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **14.50 €** | 47.5 % | **25.8 %** | 14.54 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 3 zásuvky IP44, 3 x 2... | 24.00 € | **21.50 €** | 36.3 % | **22.1 %** | 21.54 € | stávame sa najlacnejší |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 34.50 € | **32.00 €** | 47.5 % | **36.9 %** | 32.10 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| Solight stropné osvetlenie prachotesné, G13, pre 2x ... | 21.50 € | **19.00 €** | 55.4 % | **37.3 %** | 19.11 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 16.50 € | **14.00 €** | 24.4 % | **5.6 %** | 14.19 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 44.9 % | **30.1 %** | 22.20 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **71.00 €** | 10.6 % | **6.9 %** | 71.20 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 16.50 € | **14.00 €** | 36.1 % | **15.4 %** | 14.23 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P15AT s 15,6-palcovým dotyk... | 135.00 € | **132.50 €** | 14.9 % | **12.8 %** | 132.79 € | stávame sa najlacnejší |
| PXN-F16 Flight Joystick for PC | 34.50 € | **32.00 €** | 15.3 % | **7.0 %** | 32.33 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **24.00 €** | 54.7 % | **40.1 %** | 24.50 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 196.90 € | **194.50 €** | 10.0 % | **8.7 %** | 194.90 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 8.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-AIR Google TV HDMI TV stick | 53.90 € | **51.50 €** | 10.0 % | **5.1 %** | 49.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 24.90 € | **22.50 €** | 24.7 % | **12.6 %** | 22.65 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 24.90 € | **22.50 €** | 24.7 % | **12.7 %** | 22.68 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 23.90 € | **21.50 €** | 20.8 % | **8.7 %** | 21.90 € | stávame sa najlacnejší |
| BWT fitrační konvice VIDA MEI Petrol | 11.99 € | **9.80 €** | 28.6 % | **5.1 %** | 8.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 62.00 € | **59.90 €** | 9.1 % | **5.4 %** | 59.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 53.00 € | **50.90 €** | 14.9 % | **10.4 %** | 50.94 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DMR7 směrový, pro fotoaparáty, TRS | 73.50 € | **71.50 €** | 8.5 % | **5.5 %** | 61.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 26.50 € | **24.50 €** | 15.2 % | **6.5 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **39.90 €** | 11.0 % | **5.7 %** | 35.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **39.50 €** | 10.4 % | **5.1 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odstraňovač čiernych bodiek s kamerou inFace CF-05E ... | 25.00 € | **23.00 €** | 14.3 % | **5.2 %** | 20.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus 200 | 42.90 € | **40.90 €** | 10.6 % | **5.4 %** | 39.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit 52127 Set Clean Twist M Ergo | 41.90 € | **39.90 €** | 10.7 % | **5.4 %** | 39.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2877/05 | 49.50 € | **47.50 €** | 10.0 % | **5.6 %** | 46.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 22.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 12.50 € | **10.50 €** | 27.5 % | **7.1 %** | 10.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42602S | 40.50 € | **38.50 €** | 11.3 % | **5.8 %** | 38.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 23.90 € | **21.90 €** | 36.0 % | **24.6 %** | 21.94 € | stávame sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **58.00 €** | 14.9 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 36.00 € | **34.00 €** | 17.6 % | **11.1 %** | 34.09 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 43.50 € | **41.50 €** | 20.1 % | **14.6 %** | 41.63 € | stávame sa najlacnejší |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 167.50 € | **165.50 €** | 8.2 % | **6.9 %** | 165.64 € | stávame sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 22.65 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.50 €** | 14.9 % | **12.9 %** | 114.67 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 29.50 € | **27.50 €** | 21.6 % | **13.3 %** | 27.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 33.50 € | **31.50 €** | 17.1 % | **10.1 %** | 31.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.50 €** | 15.1 % | **8.2 %** | 31.69 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 162.50 € | **160.50 €** | 10.1 % | **8.7 %** | 160.70 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.00 € | **105.00 €** | 10.0 % | **8.0 %** | 105.21 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 14.50 € | **12.50 €** | 55.7 % | **34.2 %** | 12.87 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 37.50 € | **35.50 €** | 39.3 % | **31.9 %** | 35.90 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 159.90 € | **158.00 €** | 10.2 % | **8.9 %** | 158.20 € | stávame sa najlacnejší |
| ZEUSLAP ZB156 15,6" prenosný monitor | 86.90 € | **85.00 €** | 15.2 % | **12.7 %** | 85.21 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 106.90 € | **105.00 €** | 9.7 % | **7.7 %** | 105.46 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.90 € | **12.00 €** | 35.8 % | **17.3 %** | 12.50 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Russell Hobbs 24992-70 | 40.90 € | **39.00 €** | 10.5 % | **5.3 %** | 39.08 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **20.00 €** | 48.6 % | **35.7 %** | 20.15 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 30.90 € | **29.00 €** | 36.8 % | **28.3 %** | 29.19 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Veľkej Británie, typ G | 6.50 € | **4.80 €** | 59.7 % | **17.9 %** | 4.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 9.20 € | **7.50 €** | 47.8 % | **20.5 %** | 7.54 € | stávame sa najlacnejší |
| Leifheit Podlahový mop PROFI cotton plus | 30.50 € | **28.90 €** | 11.2 % | **5.4 %** | 26.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 52.50 € | **50.90 €** | 14.6 % | **11.2 %** | 50.94 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **20.90 €** | 53.3 % | **42.4 %** | 21.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 12.50 € | **10.90 €** | 22.6 % | **6.9 %** | 7.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente G4 robotický vysavač | 114.50 € | **112.90 €** | 6.8 % | **5.3 %** | 109.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-G4 | 114.50 € | **112.90 €** | 6.8 % | **5.3 %** | 109.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 19.00 € | **17.50 €** | 16.1 % | **6.9 %** | 12.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **15.00 €** | 15.5 % | **5.0 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 31.50 € | **30.00 €** | 12.1 % | **6.8 %** | 30.09 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **27.00 €** | 15.7 % | **9.6 %** | 27.10 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.00 € | **17.50 €** | 16.9 % | **7.7 %** | 17.60 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 24.00 € | **22.50 €** | 49.4 % | **40.1 %** | 22.62 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 20.50 € | **19.00 €** | 17.8 % | **9.2 %** | 19.15 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 22.00 € | **20.50 €** | 54.3 % | **43.8 %** | 20.67 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 20.00 € | **18.50 €** | 18.5 % | **9.6 %** | 18.69 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 42.50 € | **41.00 €** | 11.3 % | **7.4 %** | 41.20 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 172.00 € | **170.50 €** | 10.0 % | **9.1 %** | 170.70 € | stávame sa najlacnejší |
| Gorenje F492PW | 174.00 € | **172.50 €** | 8.4 % | **7.5 %** | 172.70 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 PRO | 137.50 € | **136.00 €** | 15.0 % | **13.7 %** | 136.22 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 28.00 € | **26.50 €** | 14.7 % | **8.6 %** | 26.90 € | stávame sa najlacnejší |
| Monitor mount 13-30" Huanuo HNCM7 | 19.50 € | **18.00 €** | 15.0 % | **6.2 %** | 18.46 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **15.00 €** | 39.3 % | **26.6 %** | 15.50 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 27.50 € | **26.00 €** | 39.3 % | **31.7 %** | 26.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 13.50 € | **12.00 €** | 55.7 % | **38.4 %** | 12.50 € | stávame sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.00 €** | 10.9 % | **5.2 %** | 28.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **16.00 €** | 44.3 % | **31.9 %** | 16.50 € | stávame sa najlacnejší |
| ZEUSLAP Z14P 14-palcový prenosný monitor | 113.90 € | **112.50 €** | 15.0 % | **13.6 %** | 112.75 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 233.90 € | **232.50 €** | 10.1 % | **9.4 %** | 232.90 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 11.00 € | **9.60 €** | 36.7 % | **19.3 %** | 9.61 € | stávame sa najlacnejší |
| Philips TAQ2000BK Bezdrátová sluchátka | 36.90 € | **35.50 €** | 10.6 % | **6.4 %** | 31.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PM700 stolní s nastavitelnou směrov... | 40.90 € | **39.50 €** | 8.8 % | **5.1 %** | 37.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper ABS Filament Creality (White) | 18.90 € | **17.50 €** | 15.3 % | **6.7 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.90 € | **28.50 €** | 11.1 % | **5.9 %** | 28.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-PE165 | 60.90 € | **59.50 €** | 10.3 % | **7.8 %** | 59.60 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **21.50 €** | 38.1 % | **29.7 %** | 21.63 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 18.90 € | **17.50 €** | 67.6 % | **55.2 %** | 17.64 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.90 € | **42.50 €** | 15.4 % | **11.7 %** | 42.66 € | stávame sa najlacnejší |
| Ariete ART 438/05 | 30.90 € | **29.50 €** | 11.0 % | **6.0 %** | 29.70 € | stávame sa najlacnejší |
| Beper BEP-BC261 | 32.90 € | **31.50 €** | 11.2 % | **6.5 %** | 31.79 € | stávame sa najlacnejší |
| D-LINK WiFi 6 AX3000 Router (M30/E) | 38.90 € | **37.50 €** | 10.7 % | **6.7 %** | 37.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 7.70 € | **6.40 €** | 48.0 % | **23.0 %** | 6.42 € | stávame sa najlacnejší |
| Veslo pro paddleboard REBEL ACTIVE | 21.00 € | **19.90 €** | 11.3 % | **5.5 %** | 18.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 28.00 € | **26.90 €** | 23.2 % | **18.3 %** | 26.91 € | stávame sa najlacnejší |
| JBL Tune 530BT Black | 40.00 € | **38.90 €** | 10.1 % | **7.1 %** | 38.99 € | stávame sa najlacnejší |
| LEIFHEIT 51016 | 50.00 € | **48.90 €** | 9.4 % | **7.0 %** | 49.00 € | stávame sa najlacnejší |
| Coox Quiche forma 3 díly se skleněnou po | 20.90 € | **19.90 €** | 11.5 % | **6.2 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska cest. PENTA 1,5l ner. | 20.90 € | **19.90 €** | 11.3 % | **6.0 %** | 15.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-BL | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-TU | 17.50 € | **16.50 €** | 12.3 % | **5.9 %** | 12.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips SHP2500/10 | 21.90 € | **20.90 €** | 11.8 % | **6.7 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska s pum.CUL.1,9l černá | 21.00 € | **20.00 €** | 10.3 % | **5.0 %** | 18.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 23.00 € | **22.00 €** | 10.1 % | **5.3 %** | 21.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, černý | 29.50 € | **28.50 €** | 10.4 % | **6.6 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.4 % | **6.6 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 16.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.70 € | **4.70 €** | 48.5 % | **22.5 %** | 4.71 € | stávame sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 157.90 € | **156.90 €** | 10.4 % | **9.7 %** | 156.92 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 10.00 € | **9.00 €** | 36.4 % | **22.8 %** | 9.04 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **11.00 €** | 44.3 % | **32.3 %** | 11.05 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 15.00 € | **14.00 €** | 54.0 % | **43.7 %** | 14.06 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 26.00 € | **25.00 €** | 14.6 % | **10.2 %** | 25.09 € | stávame sa najlacnejší |
| 3D skener Revopoint POP 4 Premium | 931.90 € | **930.90 €** | 15.0 % | **14.9 %** | 930.99 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.50 €** | 44.6 % | **36.3 %** | 16.59 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 44.00 € | **43.00 €** | 8.2 % | **5.7 %** | 43.09 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.90 € | **9.90 €** | 54.1 % | **40.0 %** | 10.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 248.90 € | **247.90 €** | 8.9 % | **8.4 %** | 248.00 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 397.90 € | **396.90 €** | 6.2 % | **5.9 %** | 397.00 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 400.90 € | **399.90 €** | 6.1 % | **5.8 %** | 400.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 399.90 € | **398.90 €** | 7.0 % | **6.8 %** | 399.00 € | stávame sa najlacnejší |
| MERACH spinningové kolo MR-S26B2-EU (čierne) | 171.90 € | **170.90 €** | 11.3 % | **10.7 %** | 171.00 € | stávame sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S08B1-EU (čierny) | 204.90 € | **203.90 €** | 13.1 % | **12.5 %** | 204.00 € | stávame sa najlacnejší |
| Ležérny cvičebný bicykel MERACH MR-S23B1-EU (čierny) | 228.90 € | **227.90 €** | 13.2 % | **12.8 %** | 228.00 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 236.90 € | **235.90 €** | 41769.9 % | **41593.2 %** | 236.00 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1801 | 236.90 € | **235.90 €** | 41769.9 % | **41593.2 %** | 236.00 € | stávame sa najlacnejší |
| Veslařský trenažér HMS Premium ZW1600 | 670.90 € | **669.90 €** | 118475.5 % | **118298.7 %** | 670.00 € | stávame sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 368.90 € | **367.90 €** | 65099.7 % | **64923.0 %** | 368.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 55.2 % | **43.7 %** | 12.61 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 151.50 € | **150.50 €** | 11.3 % | **10.5 %** | 150.61 € | stávame sa najlacnejší |
| ZEUSLAP Z14Lite 14-palcový prenosný monitor | 115.50 € | **114.50 €** | 15.0 % | **14.0 %** | 114.63 € | stávame sa najlacnejší |
| Sada 6 denných filtrov Freewell Standard pre DJI Flip | 26.50 € | **25.50 €** | 15.0 % | **10.7 %** | 25.63 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 27.00 € | **26.00 €** | 35.3 % | **30.3 %** | 26.15 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **19.00 €** | 14.7 % | **8.9 %** | 19.16 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 18.00 € | **17.00 €** | 41.5 % | **33.7 %** | 17.16 € | stávame sa najlacnejší |
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
| Sonoff ZBM5-1C-86W (1 kanál) Inteligentný dotykový n... | 22.00 € | **21.00 €** | 14.7 % | **9.4 %** | 21.19 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 84.00 € | **83.00 €** | 9.9 % | **8.6 %** | 83.20 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 15.00 € | **14.00 €** | 26.0 % | **17.6 %** | 14.21 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16 Ultra s uhlopriečkou 16... | 138.00 € | **137.00 €** | 14.9 % | **14.1 %** | 137.21 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| FNIRSI GD-02 Detektor horľavých plynov s farebným di... | 35.50 € | **34.50 €** | 15.4 % | **12.1 %** | 34.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket 4P ND16 ND/PL | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| YAMAHA CD-S303 BLACK | 379.50 € | **378.50 €** | 5.6 % | **5.3 %** | 378.80 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 23.00 € | **22.00 €** | 13.7 % | **8.7 %** | 22.32 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 152.50 € | **151.50 €** | 13.4 % | **12.7 %** | 151.86 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 29.50 € | **28.50 €** | 37.8 % | **33.2 %** | 28.90 € | stávame sa najlacnejší |
| Leifheit Profi XL + náhrada Static Plus | 62.50 € | **61.50 €** | 10.3 % | **8.6 %** | 61.90 € | stávame sa najlacnejší |
| G3ferrari G1019100 Horkovzdušná fritéza | 105.90 € | **105.00 €** | 10.3 % | **9.4 %** | 105.20 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 71.90 € | **71.00 €** | 15.7 % | **14.2 %** | 71.23 € | stávame sa najlacnejší |
| Blender G21 Experience White | 253.90 € | **253.00 €** | 18.3 % | **17.8 %** | 253.38 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 12.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kettlebell Soft Vinylový 5 kg REBEL ACTIVE RBA-2333-05 | 10.90 € | **10.00 €** | 15.5 % | **6.0 %** | 9.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **14.00 €** | 21.6 % | **14.3 %** | 14.04 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.07 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.07 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.07 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.07 € | stávame sa najlacnejší |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.90 € | **36.00 €** | 10.4 % | **7.7 %** | 36.10 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.90 € | **55.00 €** | 11.9 % | **10.1 %** | 55.12 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.90 € | **21.00 €** | 24.8 % | **19.6 %** | 21.13 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.3 % | **9.2 %** | 24.29 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.3 % | **9.2 %** | 24.29 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.00 €** | 10.7 % | **7.7 %** | 32.50 € | stávame sa najlacnejší |
| Domo DO 9218 WK | 21.90 € | **21.00 €** | 10.4 % | **5.8 %** | 21.50 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.80 € | **4.00 €** | 33.6 % | **11.4 %** | 4.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 6.20 € | **5.40 €** | 47.4 % | **28.4 %** | 5.42 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **4.00 €** | 45.3 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.90 € | **6.20 €** | 71.0 % | **53.7 %** | 6.24 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 953.50 € | **952.90 €** | 15.0 % | **14.9 %** | 953.00 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.90 €** | 7.9 % | **6.1 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 17.50 € | **16.90 €** | 10.4 % | **6.6 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **17.90 €** | 98.7 % | **92.2 %** | 18.00 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **35.90 €** | 10.9 % | **9.0 %** | 36.00 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **35.90 €** | 10.4 % | **8.6 %** | 36.00 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **7.70 €** | 55.5 % | **44.2 %** | 7.74 € | stávame sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **11.90 €** | 12.9 % | **7.5 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 11.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.60 € | **9.00 €** | 37.2 % | **28.6 %** | 9.04 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 75.50 € | **74.90 €** | 7.7 % | **6.9 %** | 74.94 € | stávame sa najlacnejší |
| DOMO DO9252I | 252.50 € | **251.90 €** | 8.1 % | **7.8 %** | 252.00 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 151.00 € | **150.50 €** | 5.5 % | **5.2 %** | 138.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 78.50 € | **78.00 €** | 5.8 % | **5.1 %** | 75.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune110 white | 11.00 € | **10.50 €** | 10.1 % | **5.1 %** | 7.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.90 € | **8.40 €** | 11.5 % | **5.2 %** | 8.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 22.50 € | **22.00 €** | 7.5 % | **5.1 %** | 21.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, biely | 6.60 € | **6.10 €** | 47.4 % | **36.2 %** | 6.11 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 10.00 € | **9.50 €** | 43.9 % | **36.7 %** | 9.52 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **6.10 €** | 47.0 % | **35.9 %** | 6.12 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 20.00 € | **19.50 €** | 16.5 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **61.00 €** | 19.8 % | **18.9 %** | 61.03 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.5 % | **9.3 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.8 % | **9.6 %** | 24.04 € | stávame sa najlacnejší |
| Leifheit Čistič na okna s rozprašovačem | 10.50 € | **10.00 €** | 14.4 % | **9.0 %** | 10.04 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.20 €** | 46.8 % | **35.9 %** | 6.24 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.00 € | **57.50 €** | 33.5 % | **32.4 %** | 57.55 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 162.00 € | **161.50 €** | 7.3 % | **6.9 %** | 161.57 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 10.3 % | **8.4 %** | 30.08 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.8 % | **9.9 %** | 19.08 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 12.2 % | **9.8 %** | 23.08 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.50 € | **23.00 €** | 9.6 % | **7.3 %** | 23.09 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.70 € | **5.20 €** | 29.4 % | **18.1 %** | 5.29 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.30 €** | 48.9 % | **33.4 %** | 4.40 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.00 € | **54.50 €** | 26.7 % | **25.5 %** | 54.62 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Black | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.12 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.12 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.12 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 18.50 € | **18.00 €** | 22.4 % | **19.1 %** | 18.12 € | stávame sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **11.00 €** | 16.6 % | **11.5 %** | 11.12 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.50 € | **54.00 €** | 10.1 % | **9.1 %** | 54.13 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 15.50 € | **15.00 €** | 60.5 % | **55.4 %** | 15.13 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **11.00 €** | 38.5 % | **32.5 %** | 11.16 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP Z14W s 14-palcovým dvojitým... | 274.50 € | **274.00 €** | 15.1 % | **14.9 %** | 274.17 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 181.50 € | **181.00 €** | 8.7 % | **8.4 %** | 181.17 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.50 € | **23.00 €** | 19.3 % | **16.7 %** | 23.19 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 103.50 € | **103.00 €** | 5.5 % | **5.0 %** | 103.19 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-WH dřevěný stoj... | 484.00 € | **483.50 €** | 5.5 % | **5.3 %** | 483.69 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.3 % | **9.8 %** | 22.20 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 13.50 € | **13.00 €** | 33.4 % | **28.4 %** | 13.20 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 12.3 % | **9.9 %** | 23.21 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 32.50 € | **32.00 €** | 9.7 % | **8.0 %** | 32.21 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.50 € | **23.00 €** | 33.8 % | **30.9 %** | 23.22 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 14.50 € | **14.00 €** | 75.2 % | **69.1 %** | 14.25 € | stávame sa najlacnejší |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 23.50 € | **23.00 €** | 11.2 % | **8.8 %** | 23.25 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.50 € | **155.00 €** | 14.4 % | **14.0 %** | 155.25 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.5 % | **9.9 %** | 33.25 € | stávame sa najlacnejší |
| TV mount 26-60" Perlesmith PSMFK12 | 17.00 € | **16.50 €** | 14.4 % | **11.0 %** | 16.75 € | stávame sa najlacnejší |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.50 € | **55.00 €** | 16.4 % | **15.3 %** | 55.25 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **13.00 €** | 28.1 % | **23.3 %** | 13.26 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 62.50 € | **62.00 €** | 39.3 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 14.50 € | **14.00 €** | 35.7 % | **31.0 %** | 14.27 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **14.00 €** | 47.4 % | **42.3 %** | 14.27 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **30.00 €** | 39.2 % | **36.9 %** | 30.27 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.50 € | **13.00 €** | 55.0 % | **49.3 %** | 13.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.50 € | **12.00 €** | 73.7 % | **66.8 %** | 12.28 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 12.50 € | **12.00 €** | 73.7 % | **66.8 %** | 12.28 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 17.50 € | **17.00 €** | 43.6 % | **39.5 %** | 17.28 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 259.50 € | **259.00 €** | 7.8 % | **7.6 %** | 259.28 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 12.1 % | **7.2 %** | 11.28 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 26.50 € | **26.00 €** | 9.2 % | **7.1 %** | 26.29 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.50 € | **13.00 €** | 55.7 % | **49.9 %** | 13.29 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 13.50 € | **13.00 €** | 47.3 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 46.50 € | **46.00 €** | 10.6 % | **9.4 %** | 46.29 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 29.50 € | **29.00 €** | 9.6 % | **7.8 %** | 29.29 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.1 % | **7.7 %** | 10.29 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.7 % | **8.3 %** | 16.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 14.2 % | **10.0 %** | 13.29 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 12.50 € | **12.00 €** | 13.3 % | **8.8 %** | 12.29 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 10.2 % | **8.5 %** | 33.29 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.50 € | **65.00 €** | 9.9 % | **9.1 %** | 65.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 10.2 % | **7.9 %** | 23.29 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 362.50 € | **362.00 €** | 19.5 % | **19.4 %** | 362.29 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 17.00 € | **16.50 €** | 14.5 % | **11.1 %** | 16.79 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 48.50 € | **48.00 €** | 9.9 % | **8.7 %** | 48.29 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 18.50 € | **18.00 €** | 8.7 % | **5.7 %** | 18.29 € | stávame sa najlacnejší |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **18.00 €** | 15.7 % | **12.6 %** | 18.29 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 56.50 € | **56.00 €** | 8.1 % | **7.2 %** | 56.29 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.50 € | **41.00 €** | 13.3 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.50 € | **85.00 €** | 14.8 % | **14.1 %** | 85.29 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.50 € | **37.00 €** | 21.1 % | **19.5 %** | 37.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **18.00 €** | 15.3 % | **12.2 %** | 18.29 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.50 € | **138.00 €** | 15.1 % | **14.7 %** | 138.29 € | stávame sa najlacnejší |
| Inteligentná zásuvka Blitzwolf BW-SHP15, ZigBee, 3680W | 16.00 € | **15.50 €** | 15.0 % | **11.4 %** | 15.79 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 25.50 € | **25.00 €** | 14.9 % | **12.6 %** | 25.29 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 53.50 € | **53.00 €** | 8.3 % | **7.3 %** | 53.29 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **12.00 €** | 14.1 % | **9.5 %** | 12.29 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.50 € | **28.00 €** | 33.0 % | **30.7 %** | 28.30 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 137.50 € | **137.00 €** | 9.2 % | **8.8 %** | 137.30 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 34.50 € | **34.00 €** | 10.0 % | **8.4 %** | 34.30 € | stávame sa najlacnejší |
| ETA 410090000 | 330.50 € | **330.00 €** | 7.0 % | **6.9 %** | 330.30 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.00 €** | 10.2 % | **9.7 %** | 110.30 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 142.50 € | **142.00 €** | 8.8 % | **8.4 %** | 142.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 40.50 € | **40.00 €** | 8.6 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 38.50 € | **38.00 €** | 10.6 % | **9.1 %** | 38.30 € | stávame sa najlacnejší |
| Beko BDIN38646D | 494.50 € | **494.00 €** | 7.1 % | **7.0 %** | 494.30 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 293.50 € | **293.00 €** | 8.1 % | **8.0 %** | 293.30 € | stávame sa najlacnejší |
| Electrolux E200SM | 17.00 € | **16.50 €** | 15.4 % | **12.0 %** | 16.81 € | stávame sa najlacnejší |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 71.50 € | **71.00 €** | 13.9 % | **13.1 %** | 71.31 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 46.50 € | **46.00 €** | 11.9 % | **10.7 %** | 46.32 € | stávame sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 75.50 € | **75.00 €** | 9.4 % | **8.7 %** | 75.32 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 19.00 € | **18.50 €** | 37.7 % | **34.1 %** | 18.82 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 69.50 € | **69.00 €** | 11.5 % | **10.7 %** | 69.32 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 638.50 € | **638.00 €** | 7.6 % | **7.6 %** | 638.32 € | stávame sa najlacnejší |
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 46.50 € | **46.00 €** | 17.4 % | **16.1 %** | 46.32 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 38.00 € | **37.50 €** | 10.1 % | **8.7 %** | 37.82 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 10.50 € | **10.00 €** | 47.4 % | **40.4 %** | 10.33 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.50 € | **25.00 €** | 40.0 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 415.50 € | **415.00 €** | 7.7 % | **7.6 %** | 415.33 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.50 € | **49.00 €** | 38.6 % | **37.2 %** | 49.34 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.50 € | **40.00 €** | 36.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 204.50 € | **204.00 €** | 14.1 % | **13.8 %** | 204.34 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.50 € | **32.00 €** | 33.2 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.50 € | **26.00 €** | 37.0 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.50 € | **11.00 €** | 25.3 % | **19.9 %** | 11.36 € | stávame sa najlacnejší |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.50 € | **85.00 €** | 20.2 % | **19.5 %** | 85.37 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 425.50 € | **425.00 €** | 14.3 % | **14.1 %** | 425.37 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 248.50 € | **248.00 €** | 9.3 % | **9.1 %** | 248.37 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **18.00 €** | 39.0 % | **35.3 %** | 18.38 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 11.0 % | **7.7 %** | 16.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.7 % | **8.3 %** | 22.38 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 10.1 % | **8.2 %** | 29.38 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **60.00 €** | 10.4 % | **9.4 %** | 60.38 € | stávame sa najlacnejší |
| Rowenta RH1833E0 | 147.50 € | **147.00 €** | 8.8 % | **8.4 %** | 147.38 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 100.50 € | **100.00 €** | 13.6 % | **13.0 %** | 100.38 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 104.50 € | **104.00 €** | 7.1 % | **6.6 %** | 104.38 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 110.50 € | **110.00 €** | 13.6 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.38 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.50 € | **20.00 €** | 8.7 % | **6.0 %** | 20.38 € | stávame sa najlacnejší |
| Ultrazvukový merací prístroj na hrúbku Uni-T UT345A | 85.50 € | **85.00 €** | 5.7 % | **5.1 %** | 85.39 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 69.50 € | **69.00 €** | 9.7 % | **8.9 %** | 69.39 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.00 € | **85.50 €** | 13.8 % | **13.1 %** | 85.89 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 13.50 € | **13.00 €** | 10.2 % | **6.1 %** | 13.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.00 € | **17.50 €** | 9.5 % | **6.5 %** | 17.89 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.00 € | **11.50 €** | 37.4 % | **31.7 %** | 11.89 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 26.50 € | **26.00 €** | 10.5 % | **8.5 %** | 26.39 € | stávame sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.50 € | **20.00 €** | 11.6 % | **8.9 %** | 20.39 € | stávame sa najlacnejší |
| DOMO DO42329PC | 116.50 € | **116.00 €** | 9.3 % | **8.9 %** | 116.39 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.50 € | **71.00 €** | 39.3 % | **38.4 %** | 71.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **27.00 €** | 15.6 % | **13.5 %** | 27.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 33.00 € | **32.50 €** | 10.9 % | **9.2 %** | 32.89 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 32.50 € | **32.00 €** | 8.4 % | **6.8 %** | 32.39 € | stávame sa najlacnejší |
| FNIRSI FNB48P USB port tester čierny | 37.00 € | **36.50 €** | 14.8 % | **13.3 %** | 36.89 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 208.50 € | **208.00 €** | 14.0 % | **13.8 %** | 208.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 57.50 € | **57.00 €** | 11.1 % | **10.2 %** | 57.39 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 12.50 € | **12.00 €** | 39.4 % | **33.8 %** | 12.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 134.00 € | **133.50 €** | 12.1 % | **11.6 %** | 133.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 35.00 € | **34.50 €** | 7.9 % | **6.4 %** | 34.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 70.00 € | **69.50 €** | 13.0 % | **12.2 %** | 69.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 89.50 € | **89.00 €** | 14.2 % | **13.5 %** | 89.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 88.50 € | **88.00 €** | 13.6 % | **12.9 %** | 88.39 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 69.50 € | **69.00 €** | 10.5 % | **9.7 %** | 69.39 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 40.00 € | **39.50 €** | 12.9 % | **11.5 %** | 39.89 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 47.50 € | **47.00 €** | 9.6 % | **8.5 %** | 47.39 € | stávame sa najlacnejší |
| Uni-T UT206B digitálny klešťový multimeter | 66.50 € | **66.00 €** | 9.8 % | **9.0 %** | 66.39 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 83.00 € | **82.50 €** | 12.4 % | **11.8 %** | 82.89 € | stávame sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 37.50 € | **37.00 €** | 6.9 % | **5.5 %** | 37.39 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 108.50 € | **108.00 €** | 12.8 % | **12.3 %** | 108.39 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 33.50 € | **33.00 €** | 9.1 % | **7.5 %** | 33.39 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 58.00 € | **57.50 €** | 11.8 % | **10.9 %** | 57.89 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 51.50 € | **51.00 €** | 9.0 % | **7.9 %** | 51.39 € | stávame sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 44.50 € | **44.00 €** | 6.8 % | **5.6 %** | 44.39 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT315A | 308.00 € | **307.50 €** | 14.7 % | **14.5 %** | 307.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 244.50 € | **244.00 €** | 14.5 % | **14.3 %** | 244.39 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 102.50 € | **102.00 €** | 12.5 % | **12.0 %** | 102.39 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 137.00 € | **136.50 €** | 14.3 % | **13.9 %** | 136.89 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 192.50 € | **192.00 €** | 13.8 % | **13.5 %** | 192.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 468.50 € | **468.00 €** | 8.3 % | **8.1 %** | 468.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 902.50 € | **902.00 €** | 14.7 % | **14.6 %** | 902.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 93.00 € | **92.50 €** | 13.6 % | **13.0 %** | 92.89 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.00 € | **78.50 €** | 13.9 % | **13.2 %** | 78.89 € | stávame sa najlacnejší |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 87.50 € | **87.00 €** | 11.3 % | **10.7 %** | 87.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 94.50 € | **94.00 €** | 9.5 % | **8.9 %** | 94.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 27.00 € | **26.50 €** | 10.4 % | **8.4 %** | 26.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 130.50 € | **130.00 €** | 14.3 % | **13.8 %** | 130.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 29.00 € | **28.50 €** | 12.8 % | **10.9 %** | 28.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.00 € | **72.50 €** | 13.5 % | **12.8 %** | 72.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 84.50 € | **84.00 €** | 11.8 % | **11.1 %** | 84.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 60.50 € | **60.00 €** | 11.2 % | **10.3 %** | 60.39 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.50 € | **10.00 €** | 11.3 % | **6.0 %** | 10.39 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 53.50 € | **53.00 €** | 10.4 % | **9.4 %** | 53.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 52.50 € | **52.00 €** | 9.7 % | **8.7 %** | 52.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 100.50 € | **100.00 €** | 12.1 % | **11.6 %** | 100.39 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 33.50 € | **33.00 €** | 8.8 % | **7.2 %** | 33.39 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 81.00 € | **80.50 €** | 12.6 % | **11.9 %** | 80.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 40.50 € | **40.00 €** | 10.2 % | **8.9 %** | 40.39 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 169.00 € | **168.50 €** | 14.2 % | **13.8 %** | 168.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 208.50 € | **208.00 €** | 6.2 % | **5.9 %** | 208.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 327.50 € | **327.00 €** | 10.9 % | **10.7 %** | 327.39 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 79.00 € | **78.50 €** | 13.0 % | **12.3 %** | 78.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 73.50 € | **73.00 €** | 9.4 % | **8.7 %** | 73.39 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 142.50 € | **142.00 €** | 13.6 % | **13.2 %** | 142.39 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 257.50 € | **257.00 €** | 14.0 % | **13.7 %** | 257.39 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT312A | 283.00 € | **282.50 €** | 14.6 % | **14.4 %** | 282.89 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 102.50 € | **102.00 €** | 12.9 % | **12.3 %** | 102.39 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 121.50 € | **121.00 €** | 13.4 % | **12.9 %** | 121.39 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 60.00 € | **59.50 €** | 15.1 % | **14.1 %** | 59.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 118.00 € | **117.50 €** | 13.9 % | **13.5 %** | 117.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 150.50 € | **150.00 €** | 13.0 % | **12.6 %** | 150.39 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 59.50 € | **59.00 €** | 8.1 % | **7.2 %** | 59.39 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1300.00 € | **1299.50 €** | 7.1 % | **7.1 %** | 1299.89 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Black | 47.00 € | **46.50 €** | 10.2 % | **9.0 %** | 46.89 € | stávame sa najlacnejší |
| Mixér G21 VitalStick 800 W, Red/Black | 47.00 € | **46.50 €** | 10.2 % | **9.0 %** | 46.89 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 57.50 € | **57.00 €** | 8.4 % | **7.5 %** | 57.39 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 202.50 € | **202.00 €** | 13.2 % | **12.9 %** | 202.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 143.50 € | **143.00 €** | 10.3 % | **9.9 %** | 143.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 52.50 € | **52.00 €** | 8.4 % | **7.3 %** | 52.39 € | stávame sa najlacnejší |
| Fén MOVA Aero C v ružovej farbe | 206.50 € | **206.00 €** | 14.8 % | **14.6 %** | 206.39 € | stávame sa najlacnejší |
| DOMO DO354VD | 131.50 € | **131.00 €** | 9.4 % | **9.0 %** | 131.39 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 268.50 € | **268.00 €** | 9.0 % | **8.8 %** | 268.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.00 € | **23.50 €** | 13.1 % | **10.8 %** | 23.89 € | stávame sa najlacnejší |
| DOMO DO9286IB | 250.50 € | **250.00 €** | 7.3 % | **7.0 %** | 250.39 € | stávame sa najlacnejší |
| DOMO DO252SV | 109.50 € | **109.00 €** | 9.2 % | **8.7 %** | 109.39 € | stávame sa najlacnejší |
| DOMO DO42102SV | 98.50 € | **98.00 €** | 9.0 % | **8.5 %** | 98.39 € | stávame sa najlacnejší |
| MOVA V10 Akumulátorový vysávač na bazény | 206.00 € | **205.50 €** | 14.6 % | **14.3 %** | 205.89 € | stávame sa najlacnejší |
| Vysávač MOVA Z200 Stick | 343.50 € | **343.00 €** | 14.4 % | **14.2 %** | 343.39 € | stávame sa najlacnejší |
| PRIMO PR406IM | 127.50 € | **127.00 €** | 9.3 % | **8.9 %** | 127.39 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 279.50 € | **279.00 €** | 9.1 % | **8.9 %** | 279.39 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.00 € | **22.50 €** | 9.7 % | **7.4 %** | 22.89 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 56.50 € | **56.00 €** | 13.4 % | **12.4 %** | 56.39 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 158.50 € | **158.00 €** | 14.5 % | **14.1 %** | 158.39 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 37.00 € | **36.50 €** | 8.4 % | **7.0 %** | 36.89 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 34.00 € | **33.50 €** | 9.3 % | **7.7 %** | 33.89 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 209.50 € | **209.00 €** | 12.2 % | **11.9 %** | 209.39 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 280.50 € | **280.00 €** | 7.4 % | **7.2 %** | 280.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 19.50 € | **19.00 €** | 29.6 % | **26.3 %** | 19.39 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.50 € | **17.00 €** | 12.6 % | **9.4 %** | 17.39 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.50 € | **17.00 €** | 12.8 % | **9.6 %** | 17.39 € | stávame sa najlacnejší |
| Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVI... | 10.50 € | **10.00 €** | 14.0 % | **8.5 %** | 10.39 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.50 € | **22.00 €** | 12.6 % | **10.1 %** | 22.39 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 43.00 € | **42.50 €** | 8.1 % | **6.8 %** | 42.89 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 255.50 € | **255.00 €** | 14.2 % | **14.0 %** | 255.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 110.50 € | **110.00 €** | 7.9 % | **7.4 %** | 110.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 242.50 € | **242.00 €** | 9.1 % | **8.8 %** | 242.39 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 133.50 € | **133.00 €** | 6.4 % | **6.0 %** | 133.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 113.00 € | **112.50 €** | 7.3 % | **6.8 %** | 112.89 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 88.50 € | **88.00 €** | 11.2 % | **10.6 %** | 88.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 91.50 € | **91.00 €** | 8.4 % | **7.8 %** | 91.39 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 191.00 € | **190.50 €** | 8.2 % | **8.0 %** | 190.89 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.50 € | **39.00 €** | 16.1 % | **14.6 %** | 39.39 € | stávame sa najlacnejší |
| Johansson 6700 Revolution programovatelný zesilovač | 272.50 € | **272.00 €** | 7.0 % | **6.8 %** | 272.39 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 209.50 € | **209.00 €** | 9.5 % | **9.2 %** | 209.39 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 195.50 € | **195.00 €** | 9.8 % | **9.5 %** | 195.39 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 89.00 € | **88.50 €** | 13.5 % | **12.9 %** | 88.89 € | stávame sa najlacnejší |
| Stropné svetlo Yeelight C2201C400 | 64.50 € | **64.00 €** | 15.7 % | **14.8 %** | 64.40 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 12.50 € | **12.00 €** | 44.6 % | **38.8 %** | 12.40 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 143.50 € | **143.00 €** | 7.3 % | **6.9 %** | 143.40 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 132.50 € | **132.00 €** | 8.8 % | **8.3 %** | 132.40 € | stávame sa najlacnejší |
| Beko VRT76325VW | 166.50 € | **166.00 €** | 8.7 % | **8.4 %** | 166.40 € | stávame sa najlacnejší |
| Beko VRT86325VI | 199.50 € | **199.00 €** | 7.8 % | **7.5 %** | 199.40 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.50 € | **26.00 €** | 42.7 % | **40.0 %** | 26.40 € | stávame sa najlacnejší |
| ELECTROLUX 300 EFC226R | 248.50 € | **248.00 €** | 8.1 % | **7.9 %** | 248.40 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 246.50 € | **246.00 €** | 8.1 % | **7.9 %** | 246.40 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 520.50 € | **520.00 €** | 7.1 % | **6.9 %** | 520.40 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 508.50 € | **508.00 €** | 7.1 % | **7.0 %** | 508.40 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 238.50 € | **238.00 €** | 8.0 % | **7.7 %** | 238.40 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 169.50 € | **169.00 €** | 9.1 % | **8.8 %** | 169.40 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 409.50 € | **409.00 €** | 7.1 % | **6.9 %** | 409.40 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 337.50 € | **337.00 €** | 7.1 % | **6.9 %** | 337.40 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 178.50 € | **178.00 €** | 9.1 % | **8.8 %** | 178.40 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 286.50 € | **286.00 €** | 8.0 % | **7.9 %** | 286.40 € | stávame sa najlacnejší |
| BEKO BBIR17300BCS | 347.50 € | **347.00 €** | 7.1 % | **6.9 %** | 347.40 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.50 € | **12.00 €** | 62.6 % | **56.1 %** | 12.41 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.50 € | **139.00 €** | 7.8 % | **7.4 %** | 139.41 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.50 € | **42.00 €** | 9.9 % | **8.6 %** | 42.41 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 60.50 € | **60.00 €** | 37.2 % | **36.0 %** | 60.41 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Night 160 ml | 11.50 € | **11.00 €** | 17.3 % | **12.2 %** | 11.42 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **113.00 €** | 10.4 % | **9.9 %** | 113.42 € | stávame sa najlacnejší |
| Electrolux EF167 | 14.50 € | **14.00 €** | 12.7 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 14.50 € | **14.00 €** | 12.7 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.42 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **10.00 €** | 13.4 % | **8.0 %** | 10.42 € | stávame sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 29.50 € | **29.00 €** | 26.3 % | **24.2 %** | 29.42 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.50 € | **16.00 €** | 10.0 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 18.50 € | **18.00 €** | 11.2 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 84.50 € | **84.00 €** | 14.2 % | **13.5 %** | 84.42 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.50 € | **22.00 €** | 8.5 % | **6.1 %** | 22.42 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.50 € | **24.00 €** | 71.1 % | **67.6 %** | 24.43 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 24.50 € | **24.00 €** | 71.1 % | **67.6 %** | 24.43 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 43.50 € | **43.00 €** | 10.4 % | **9.1 %** | 43.43 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 360 LED, 9m x 0... | 24.50 € | **24.00 €** | 45.4 % | **42.4 %** | 24.44 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 17.50 € | **17.00 €** | 14.3 % | **11.0 %** | 17.44 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 117.50 € | **117.00 €** | 9.0 % | **8.5 %** | 117.44 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 115.50 € | **115.00 €** | 13.5 % | **13.1 %** | 115.44 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 168.50 € | **168.00 €** | 15.9 % | **15.6 %** | 168.44 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 626.50 € | **626.00 €** | 9.6 % | **9.5 %** | 626.44 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 13.50 € | **13.00 €** | 54.6 % | **48.9 %** | 13.45 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 22.50 € | **22.00 €** | 33.5 % | **30.6 %** | 22.45 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.50 € | **17.00 €** | 12.6 % | **9.4 %** | 17.45 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.50 € | **23.00 €** | 16.5 % | **14.0 %** | 23.45 € | stávame sa najlacnejší |
| Niceboy PILOT S5 GPS + WIFI | 49.50 € | **49.00 €** | 10.9 % | **9.7 %** | 49.46 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 10.2 % | **8.7 %** | 36.46 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Fashion Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| Solight high bay, 200W, 28000lm, 120°, Meanwell,  50... | 94.50 € | **94.00 €** | 20.0 % | **19.4 %** | 94.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.46 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 221.50 € | **221.00 €** | 9.3 % | **9.1 %** | 221.46 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 43.50 € | **43.00 €** | 13.4 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.50 € | **22.00 €** | 38.4 % | **35.3 %** | 22.47 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 89.50 € | **89.00 €** | 7.0 % | **6.4 %** | 89.47 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 21.50 € | **21.00 €** | 11.6 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CCPA Apple Carplay/Andr... | 37.50 € | **37.00 €** | 15.4 % | **13.9 %** | 37.49 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **16.00 €** | 32.2 % | **28.2 %** | 16.49 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.50 € | **11.00 €** | 41.2 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.50 € | **12.00 €** | 13.8 % | **9.3 %** | 12.49 € | stávame sa najlacnejší |
| MEROSS MA151-UN Inteligentný Wi-Fi detektor dymu | 28.50 € | **28.00 €** | 12.6 % | **10.7 %** | 28.49 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.50 € | **16.00 €** | 35.4 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | stávame sa najlacnejší |
| Bravo Adria B-4780 bílá | 25.50 € | **25.00 €** | 7.1 % | **5.0 %** | 25.49 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.50 € | **16.00 €** | 18.0 % | **14.4 %** | 16.49 € | stávame sa najlacnejší |
| Mio Smartbox IV | 30.50 € | **30.00 €** | 7.3 % | **5.6 %** | 30.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 16.0 % | **14.0 %** | 28.49 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.50 € | **23.00 €** | 8.7 % | **6.4 %** | 23.49 € | stávame sa najlacnejší |
| TESLA TE-344 venkovní anténa | 27.50 € | **27.00 €** | 45.4 % | **42.7 %** | 27.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 28.50 € | **28.00 €** | 18.9 % | **16.9 %** | 28.49 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1346.90 € | **1346.50 €** | 7.4 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| Projektor Blitzwolf BW-Vision A1 | 71.90 € | **71.50 €** | 15.0 % | **14.4 %** | 71.63 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 83.90 € | **83.50 €** | 10.8 % | **10.2 %** | 83.65 € | stávame sa najlacnejší |
| Domo DO8719W | 69.90 € | **69.50 €** | 10.2 % | **9.5 %** | 69.67 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 124.90 € | **124.50 €** | 8.8 % | **8.5 %** | 124.70 € | stávame sa najlacnejší |
| GUZZANTI GZ 8501A | 150.90 € | **150.50 €** | 5.8 % | **5.5 %** | 150.71 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.90 € | **195.50 €** | 10.1 % | **9.9 %** | 195.75 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 250.90 € | **250.50 €** | 7.2 % | **7.0 %** | 250.76 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 205.90 € | **205.50 €** | 8.2 % | **8.0 %** | 205.79 € | stávame sa najlacnejší |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.90 € | **83.50 €** | 17.6 % | **17.0 %** | 83.79 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 12.0 % | **11.6 %** | 113.79 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 124.90 € | **124.50 €** | 7.4 % | **7.1 %** | 124.79 € | stávame sa najlacnejší |
| Braun CG9043 | 214.90 € | **214.50 €** | 8.0 % | **7.8 %** | 214.80 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 177.90 € | **177.50 €** | 8.9 % | **8.6 %** | 177.80 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 175.90 € | **175.50 €** | 8.7 % | **8.4 %** | 175.80 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.90 € | **212.50 €** | 10.1 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 108.90 € | **108.50 €** | 10.1 % | **9.7 %** | 108.80 € | stávame sa najlacnejší |
| Guzzanti GZ 210A | 216.90 € | **216.50 €** | 8.0 % | **7.8 %** | 216.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 96.90 € | **96.50 €** | 33.4 % | **32.8 %** | 96.81 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 64.90 € | **64.50 €** | 8.3 % | **7.6 %** | 64.83 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 108.90 € | **108.50 €** | 7.1 % | **6.7 %** | 108.84 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 84.90 € | **84.50 €** | 13.7 % | **13.2 %** | 84.86 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 206.90 € | **206.50 €** | 8.5 % | **8.3 %** | 206.87 € | stávame sa najlacnejší |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 94.90 € | **94.50 €** | 17.8 % | **17.3 %** | 94.88 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 74.90 € | **74.50 €** | 13.0 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 233.90 € | **233.50 €** | 9.9 % | **9.7 %** | 233.88 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161E | 108.90 € | **108.50 €** | 6.5 % | **6.1 %** | 108.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.90 € | **76.50 €** | 20.0 % | **19.4 %** | 76.89 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 15.90 € | **15.50 €** | 7.9 % | **5.2 %** | 9.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo TopSound černý | 12.90 € | **12.50 €** | 10.4 % | **7.0 %** | 10.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdr XRN14P5G/PX7 FIXOP3-1432-BK | 11.90 € | **11.50 €** | 10.4 % | **6.7 %** | 10.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.60 €** | 50.8 % | **44.8 %** | 9.61 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **9.00 €** | 48.4 % | **42.1 %** | 9.02 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.50 € | **5.10 €** | 46.6 % | **35.9 %** | 5.14 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.60 €** | 56.3 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.50 €** | 40.4 % | **35.3 %** | 10.60 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 13.90 € | **13.50 €** | 14.6 % | **11.3 %** | 13.71 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 14.2 % | **10.4 %** | 11.71 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.90 € | **12.50 €** | 34.5 % | **30.3 %** | 12.73 € | stávame sa najlacnejší |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 13.90 € | **13.50 €** | 49.7 % | **45.4 %** | 13.74 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.90 € | **11.50 €** | 9.4 % | **5.7 %** | 11.75 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.90 € | **10.50 €** | 22.4 % | **17.9 %** | 10.76 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 14.90 € | **14.50 €** | 53.1 % | **49.0 %** | 14.77 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.79 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.79 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 13.3 % | **9.5 %** | 11.79 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 11.90 € | **11.50 €** | 16.7 % | **12.8 %** | 11.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 680 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.90 € | **10.50 €** | 38.0 % | **33.0 %** | 10.81 € | stávame sa najlacnejší |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.90 € | **12.50 €** | 18.6 % | **15.0 %** | 12.82 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 13.90 € | **13.50 €** | 13.5 % | **10.2 %** | 13.83 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.90 € | **15.50 €** | 10.6 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| San Marco INTENSO 500 g | 11.90 € | **11.50 €** | 8.7 % | **5.0 %** | 11.83 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 20.5 % | **16.4 %** | 11.84 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.90 € | **13.50 €** | 28.6 % | **24.9 %** | 13.84 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 13.90 € | **13.50 €** | 67.9 % | **63.1 %** | 13.85 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 11.90 € | **11.50 €** | 38.6 % | **33.9 %** | 11.86 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.90 € | **12.50 €** | 38.5 % | **34.2 %** | 12.87 € | stávame sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 10.2 % | **7.3 %** | 14.88 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 12.90 € | **12.50 €** | 9.5 % | **6.1 %** | 12.89 € | stávame sa najlacnejší |
| Laica VT3509 | 11.90 € | **11.50 €** | 9.9 % | **6.2 %** | 11.89 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.90 € | **2.50 €** | 50.2 % | **29.5 %** | 2.51 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.60 € | **2.20 €** | 47.8 % | **25.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.21 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 6.10 € | **5.70 €** | 55.0 % | **44.8 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.20 €** | 34.0 % | **22.4 %** | 4.24 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.90 € | **21.50 €** | 7.6 % | **5.7 %** | 21.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **21.50 €** | 11.6 % | **9.6 %** | 21.54 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.50 €** | 10.5 % | **9.3 %** | 36.58 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.61 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 11.1 % | **9.9 %** | 35.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.63 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.90 € | **36.50 €** | 17.5 % | **16.2 %** | 36.66 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.90 € | **36.50 €** | 17.8 % | **16.6 %** | 36.66 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.50 €** | 11.4 % | **9.9 %** | 29.67 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 19.90 € | **19.50 €** | 37.2 % | **34.5 %** | 19.67 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 16.90 € | **16.50 €** | 16.6 % | **13.9 %** | 16.69 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.69 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 16.90 € | **16.50 €** | 14.0 % | **11.3 %** | 16.69 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 39.90 € | **39.50 €** | 8.5 % | **7.4 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 21.90 € | **21.50 €** | 8.2 % | **6.3 %** | 21.70 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.90 € | **19.50 €** | 43.7 % | **40.8 %** | 19.70 € | stávame sa najlacnejší |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 29.90 € | **29.50 €** | 14.1 % | **12.5 %** | 29.70 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 22.90 € | **22.50 €** | 17.8 % | **15.8 %** | 22.71 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.73 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell Osmo Pocket 4P ND8 ND/PL filter | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND32/PL | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter Freewell Osmo Pocket ND64/PL | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND16 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 19.90 € | **19.50 €** | 10.7 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 41.90 € | **41.50 €** | 13.4 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **20.50 €** | 30.3 % | **27.8 %** | 20.76 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.90 € | **22.50 €** | 15.0 % | **13.0 %** | 22.76 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 31.90 € | **31.50 €** | 55.0 % | **53.1 %** | 31.77 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 16.90 € | **16.50 €** | 46.0 % | **42.6 %** | 16.78 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.90 € | **32.50 €** | 13.8 % | **12.4 %** | 32.79 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 23.90 € | **23.50 €** | 11.6 % | **9.7 %** | 23.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.9 % | **9.8 %** | 40.79 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 20.90 € | **20.50 €** | 10.1 % | **8.0 %** | 20.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 21.90 € | **21.50 €** | 8.7 % | **6.7 %** | 21.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.90 € | **16.50 €** | 18.2 % | **15.4 %** | 16.80 € | stávame sa najlacnejší |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 33.90 € | **33.50 €** | 18.6 % | **17.2 %** | 33.80 € | stávame sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 45.90 € | **45.50 €** | 14.8 % | **13.8 %** | 45.80 € | stávame sa najlacnejší |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 18.90 € | **18.50 €** | 25.2 % | **22.6 %** | 18.80 € | stávame sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.90 € | **36.50 €** | 9.1 % | **7.9 %** | 36.80 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 30.90 € | **30.50 €** | 54.8 % | **52.8 %** | 30.82 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.90 € | **19.50 €** | 42.5 % | **39.7 %** | 19.82 € | stávame sa najlacnejší |
| ETA Mano 3219 90020 | 55.90 € | **55.50 €** | 10.2 % | **9.4 %** | 55.83 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 31.90 € | **31.50 €** | 9.7 % | **8.3 %** | 31.83 € | stávame sa najlacnejší |
| Bezdrôtové napájadlo pre domáce zvieratá Rojeco 2,5 L | 31.90 € | **31.50 €** | 12.7 % | **11.3 %** | 31.83 € | stávame sa najlacnejší |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 54.90 € | **54.50 €** | 7.8 % | **7.0 %** | 54.84 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 32.90 € | **32.50 €** | 12.5 % | **11.2 %** | 32.85 € | stávame sa najlacnejší |
| Amica KF 17191 | 29.90 € | **29.50 €** | 22.7 % | **21.1 %** | 29.86 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.90 € | **23.50 €** | 32.8 % | **30.6 %** | 23.87 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 55.90 € | **55.50 €** | 12.3 % | **11.5 %** | 55.87 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 30.90 € | **30.50 €** | 13.3 % | **11.8 %** | 30.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, USB A+C, 2 ... | 20.90 € | **20.50 €** | 39.3 % | **36.6 %** | 20.87 € | stávame sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.90 € | **18.50 €** | 12.5 % | **10.1 %** | 18.88 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 18.90 € | **18.50 €** | 9.6 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 21.90 € | **21.50 €** | 13.3 % | **11.2 %** | 21.88 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 13.2 % | **10.6 %** | 17.88 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 17.90 € | **17.50 €** | 8.1 % | **5.7 %** | 17.88 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 18.90 € | **18.50 €** | 12.7 % | **10.3 %** | 18.89 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 20.90 € | **20.50 €** | 10.1 % | **7.9 %** | 20.89 € | stávame sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 60.90 € | **60.50 €** | 19.5 % | **18.8 %** | 60.89 € | stávame sa najlacnejší |
| Solight lokátor pre batožinu, Find My kompatibilný | 22.90 € | **22.50 €** | 35.8 % | **33.4 %** | 22.89 € | stávame sa najlacnejší |
| Rooma Espresso A7 bílá | 537.90 € | **537.50 €** | 6.0 % | **5.9 %** | 537.70 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 274.90 € | **274.50 €** | 14.5 % | **14.3 %** | 274.70 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 394.90 € | **394.50 €** | 7.1 % | **6.9 %** | 394.70 € | stávame sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 350.90 € | **350.50 €** | 5.8 % | **5.7 %** | 350.71 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 277.90 € | **277.50 €** | 12.2 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 499.90 € | **499.50 €** | 9.1 % | **9.0 %** | 499.75 € | stávame sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 263.90 € | **263.50 €** | 8.6 % | **8.5 %** | 263.76 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 333.90 € | **333.50 €** | 6.9 % | **6.8 %** | 333.80 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 278.90 € | **278.50 €** | 7.9 % | **7.7 %** | 278.80 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 344.90 € | **344.50 €** | 7.1 % | **7.0 %** | 344.80 € | stávame sa najlacnejší |
| Gorenje GECS5C70XPA | 471.90 € | **471.50 €** | 7.1 % | **7.0 %** | 471.80 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 888.90 € | **888.50 €** | 7.3 % | **7.3 %** | 888.88 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 468.90 € | **468.50 €** | 12.8 % | **12.7 %** | 468.88 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 374.90 € | **374.50 €** | 7.7 % | **7.5 %** | 374.89 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.90 € | **9.60 €** | 39.0 % | **34.8 %** | 9.70 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.70 € | **2.40 €** | 52.4 % | **35.5 %** | 2.44 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.60 € | **1.30 €** | 51.3 % | **22.9 %** | 1.35 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.00 € | **3.70 €** | 36.6 % | **26.4 %** | 3.71 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.60 € | **7.30 €** | 41.7 % | **36.1 %** | 7.33 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.73 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.80 € | **7.50 €** | 33.8 % | **28.6 %** | 7.53 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.30 € | **5.00 €** | 35.9 % | **28.2 %** | 5.03 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.00 € | **6.70 €** | 36.5 % | **30.6 %** | 6.74 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.74 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.80 € | **9.60 €** | 33.9 % | **31.2 %** | 9.61 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 9.30 € | **9.10 €** | 21.0 % | **18.4 %** | 9.19 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.00 € | **4.80 €** | 43.6 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.20 € | **6.00 €** | 37.7 % | **33.3 %** | 6.09 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 6.40 € | **6.20 €** | 9.3 % | **5.9 %** | 6.29 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.60 € | **3.40 €** | 59.9 % | **51.1 %** | 3.49 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 6.90 € | **6.70 €** | 13.1 % | **9.8 %** | 6.79 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.50 € | **2.30 €** | 27.8 % | **17.6 %** | 2.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.90 € | **4.70 €** | 16.1 % | **11.4 %** | 4.79 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 4.20 € | **4.00 €** | 15.8 % | **10.2 %** | 4.09 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.10 €** | 46.8 % | **24.2 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.20 €** | 56.1 % | **43.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 530.00 € | **529.90 €** | 5.9 % | **5.9 %** | 529.95 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 380.00 € | **379.90 €** | 6.8 % | **6.8 %** | 379.95 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 285.00 € | **284.90 €** | 14.0 % | **14.0 %** | 284.96 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 279.00 € | **278.90 €** | 7.6 % | **7.6 %** | 278.99 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 17.00 € | **16.90 €** | 11.0 % | **10.4 %** | 16.92 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.00 € | **22.90 €** | 33.2 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 18.00 € | **17.90 €** | 71.2 % | **70.2 %** | 17.95 € | stávame sa najlacnejší |
| Aligator Reproduktor pro MagSafe ABSMB01 | 17.00 € | **16.90 €** | 26.6 % | **25.8 %** | 16.95 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.00 € | **16.90 €** | 7.6 % | **6.9 %** | 16.95 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.00 € | **19.90 €** | 15.3 % | **14.7 %** | 19.96 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.90 €** | 38.4 % | **37.7 %** | 20.96 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 17.00 € | **16.90 €** | 45.3 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 17.00 € | **16.90 €** | 45.3 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 10.2 % | **10.0 %** | 47.96 € | stávame sa najlacnejší |
| ETA Verto II 1423 90000 bílý/zlatý | 31.00 € | **30.90 €** | 12.5 % | **12.1 %** | 30.96 € | stávame sa najlacnejší |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 42.00 € | **41.90 €** | 17.5 % | **17.3 %** | 41.97 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 46.00 € | **45.90 €** | 10.1 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 46.00 € | **45.90 €** | 10.1 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 22.00 € | **21.90 €** | 7.7 % | **7.2 %** | 21.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.20 €** | 25.6 % | **24.2 %** | 9.29 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 24.00 € | **23.90 €** | 7.4 % | **7.0 %** | 23.99 € | stávame sa najlacnejší |
| Tefal KO5S08E0 | 35.00 € | **34.90 €** | 10.0 % | **9.7 %** | 34.99 € | stávame sa najlacnejší |
| Russell Hobbs 26800-56/RH | 26.00 € | **25.90 €** | 7.7 % | **7.3 %** | 25.99 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.00 € | **28.90 €** | 9.9 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.00 € | **28.90 €** | 9.9 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 53.00 € | **52.90 €** | 6.0 % | **5.8 %** | 52.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 18.00 € | **17.90 €** | 28.1 % | **27.4 %** | 17.99 € | stávame sa najlacnejší |
| Filters ND8/16/32 Freewell for DJI Neo | 20.00 € | **19.90 €** | 12.7 % | **12.1 %** | 19.99 € | stávame sa najlacnejší |
| Niceboy Aura 5 ANC | 45.00 € | **44.90 €** | 18.1 % | **17.8 %** | 44.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 8.2 % | **7.9 %** | 40.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.70 € | **5.60 €** | 37.5 % | **35.1 %** | 5.63 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.14 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.20 € | **5.10 €** | 46.3 % | **43.5 %** | 5.15 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 6.90 € | **6.80 €** | 46.1 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.40 € | **7.30 €** | 55.1 % | **53.0 %** | 7.37 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 7.40 € | **7.30 €** | 31.1 % | **29.3 %** | 7.37 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.70 € | **4.60 €** | 35.0 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 6.40 € | **6.30 €** | 36.2 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.70 € | **5.60 €** | 40.4 % | **38.0 %** | 5.68 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.90 € | **5.80 €** | 11.0 % | **9.2 %** | 5.89 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.30 €** | 45.4 % | **42.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.70 € | **6.60 €** | 46.4 % | **44.2 %** | 6.69 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.90 € | **6.80 €** | 71.0 % | **68.6 %** | 6.89 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.70 € | **6.60 €** | 31.9 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **5.30 €** | 29.9 % | **27.5 %** | 5.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.40 € | **2.30 €** | 9.6 % | **5.1 %** | 2.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.20 € | **3.10 €** | 53.9 % | **49.1 %** | 3.14 € | stávame sa najlacnejší |
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
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.00 € | **2.90 €** | 35.5 % | **31.0 %** | 2.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.00 € | **1.90 €** | 40.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.00 € | **1.90 €** | 36.6 % | **29.8 %** | 1.96 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.60 € | **3.50 €** | 41.4 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.70 € | **3.60 €** | 39.3 % | **35.5 %** | 3.67 € | stávame sa najlacnejší |
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
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.70 € | **3.60 €** | 64.4 % | **59.9 %** | 3.69 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.60 € | **3.50 €** | 52.4 % | **48.2 %** | 3.59 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.50 € | **3.40 €** | 36.8 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.60 €** | 26.9 % | **22.2 %** | 2.69 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.00 € | **0.90 €** | 35.5 % | **22.0 %** | 0.96 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.00 € | **0.90 €** | 35.5 % | **22.0 %** | 0.96 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
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
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **1.80 €** | 33.2 % | **26.2 %** | 1.89 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 1.90 € | **1.80 €** | 35.5 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 11.00 € | **10.90 €** | 8.4 % | **7.4 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.00 € | **12.90 €** | 6.1 % | **5.3 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.60 € | **8.50 €** | 28.8 % | **27.3 %** | 8.54 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **13.90 €** | 36.5 % | **35.5 %** | 13.95 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.90 € | **8.80 €** | 45.9 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.90 € | **8.80 €** | 45.9 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.30 € | **3.20 €** | 39.7 % | **35.5 %** | 3.25 € | stávame sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.30 € | **5.20 €** | 65.7 % | **62.6 %** | 5.25 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 10.00 € | **9.90 €** | 26.8 % | **25.6 %** | 9.95 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.60 € | **7.50 €** | 66.1 % | **63.9 %** | 7.56 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 12.00 € | **11.90 €** | 38.0 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.80 € | **6.70 €** | 32.9 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.00 € | **10.90 €** | 9.7 % | **8.7 %** | 10.96 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.8 % | **9.9 %** | 12.96 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.20 € | **9.10 €** | 39.5 % | **38.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 13.00 € | **12.90 €** | 20.2 % | **19.3 %** | 12.96 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.60 € | **9.50 €** | 21.0 % | **19.7 %** | 9.56 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.60 € | **4.50 €** | 46.1 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 11.00 € | **10.90 €** | 10.3 % | **9.3 %** | 10.97 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 5.50 € | **5.40 €** | 24.6 % | **22.3 %** | 5.48 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.40 €** | 36.3 % | **33.8 %** | 5.48 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 4.80 € | **4.70 €** | 31.0 % | **28.2 %** | 4.78 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **5.00 €** | 18.1 % | **15.8 %** | 5.09 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 8.00 € | **7.90 €** | 12.3 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.80 € | **3.70 €** | 30.9 % | **27.5 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.80 € | **3.70 €** | 41.1 % | **37.4 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 8.50 € | **8.40 €** | 70.6 % | **68.6 %** | 8.49 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.00 € | **7.90 €** | 29.3 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 13.00 € | **12.90 €** | 20.9 % | **20.0 %** | 12.99 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.90 € | **9.80 €** | 24.2 % | **23.0 %** | 9.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.20 €** | 11.3 % | **8.7 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **4.50 €** | 26.3 % | **23.6 %** | 4.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.20 €** | 11.7 % | **9.1 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.30 €** | 24.3 % | **22.9 %** | 9.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.80 € | **4.70 €** | 16.1 % | **13.7 %** | 4.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.90 €** | 25.4 % | **23.3 %** | 5.99 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.70 € | **8.60 €** | 6.8 % | **5.6 %** | 8.69 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 92.00 € | **91.90 €** | 9.3 % | **9.2 %** | 91.96 € | stávame sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 70.00 € | **69.90 €** | 8.0 % | **7.9 %** | 69.96 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 137.00 € | **136.90 €** | 5.8 % | **5.7 %** | 136.96 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 125.00 € | **124.90 €** | 7.5 % | **7.4 %** | 124.99 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR černé | 195.00 € | **194.90 €** | 15.7 % | **15.6 %** | 194.99 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 195.00 € | **194.90 €** | 15.7 % | **15.6 %** | 194.99 € | stávame sa najlacnejší |

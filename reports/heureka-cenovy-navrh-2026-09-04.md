# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-04

Vstup: `premiumstoresk_20260904_0907.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **5957**
- Návrh **zvýšiť** cenu: **406** produktov
- Návrh **znížiť** cenu: **1271** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **4280** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **360**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (406)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Samsung The Frame Pro QE75LS03HW | 2683.90 € | **2799.00 €** | 10.0 % | **14.7 %** | 2683.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL 430406 Partybox 710 - black | 533.50 € | **559.00 €** | 10.0 % | **15.2 %** | 533.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 379.90 € | **399.00 €** | 13.5 % | **19.2 %** | 379.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 33.90 € | **44.50 €** | 6.1 % | **39.3 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| WHIRLPOOL WI 7020 P | 322.00 € | **331.50 €** | 5.0 % | **8.1 %** | 322.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy GD 49B8-S | 279.50 € | **287.50 €** | 5.0 % | **8.0 %** | 279.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.00 € | **119.90 €** | 9.5 % | **15.2 %** | 114.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GV520E15 | 283.90 € | **289.50 €** | 5.1 % | **7.2 %** | 283.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.00 € | **34.00 €** | 16.7 % | **36.8 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 13.00 € | **17.00 €** | 6.1 % | **38.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 123.50 € | **127.50 €** | 21.5 % | **25.4 %** | 123.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.00 € | **28.50 €** | 13.8 % | **29.7 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 42.90 € | **45.50 €** | 14.6 % | **21.5 %** | 42.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.00 € | **16.50 €** | 6.4 % | **25.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Nefrit | 115.90 € | **117.90 €** | 8.1 % | **10.0 %** | 116.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.50 € | **350.50 €** | 14.9 % | **15.6 %** | 348.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FENDA F&D A180X | 42.50 € | **44.50 €** | 11.1 % | **16.3 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE TH60E3B | 79.00 € | **80.90 €** | 6.4 % | **8.9 %** | 79.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy ORYX X220 Iris | 19.00 € | **20.90 €** | 7.3 % | **18.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Chamberi horizontal | 156.50 € | **158.00 €** | 9.4 % | **10.5 %** | 158.02 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.50 € | **15.00 €** | 8.8 % | **20.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.00 € | **38.50 €** | 9.2 % | **13.6 %** | 37.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **15.00 €** | 10.1 % | **18.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.50 € | **14.50 €** | 8.8 % | **16.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo vodní filtry 3+1 | 11.50 € | **12.50 €** | 7.5 % | **16.8 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 35.90 € | **36.90 €** | 14.3 % | **17.5 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 35.90 € | **36.90 €** | 14.6 % | **17.8 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510B černá | 37.50 € | **38.50 €** | 10.7 % | **13.6 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 47.50 € | **48.50 €** | 13.6 % | **16.0 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 47.50 € | **48.50 €** | 10.4 % | **12.7 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.00 € | **78.90 €** | 14.0 % | **15.3 %** | 78.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.00 € | **84.90 €** | 8.2 % | **9.4 %** | 84.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 11.00 € | **11.90 €** | 7.2 % | **16.0 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.00 € | **12.90 €** | 18.5 % | **27.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.00 € | **14.90 €** | 5.2 % | **12.0 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.00 € | **11.90 €** | 34.7 % | **45.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 15.00 € | **15.90 €** | 8.7 % | **15.2 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.00 € | **13.90 €** | 30.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.00 € | **13.90 €** | 19.6 % | **27.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.00 € | **12.90 €** | 30.6 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.00 € | **10.90 €** | 15.8 % | **26.2 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.00 € | **10.90 €** | 9.4 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 11.00 € | **11.90 €** | 9.3 % | **18.3 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.00 € | **28.90 €** | 34.8 % | **39.1 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 22.00 € | **22.90 €** | 18.8 % | **23.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 27.00 € | **27.90 €** | 21.3 % | **25.4 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.00 € | **17.90 €** | 39.2 % | **46.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.00 € | **16.90 €** | 28.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.00 € | **18.90 €** | 14.3 % | **20.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 20.00 € | **20.90 €** | 27.8 % | **33.6 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.00 € | **17.90 €** | 7.6 % | **13.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.00 € | **19.90 €** | 33.3 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.00 € | **32.90 €** | 10.7 % | **13.8 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **19.90 €** | 37.2 % | **43.7 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM40T | 28.00 € | **28.90 €** | 8.9 % | **12.4 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux 600 FLEX EES42210IX | 471.00 € | **471.90 €** | 6.9 % | **7.1 %** | 471.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná dekorácia vianočný stromček, 24... | 3.30 € | **4.00 €** | 19.8 % | **45.2 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 19.90 € | **20.50 €** | 45.9 % | **50.3 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 40.90 € | **41.50 €** | 19.1 % | **20.8 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 46.90 € | **47.50 €** | 35.6 % | **37.3 %** | 47.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 24.90 € | **25.50 €** | 28.7 % | **31.8 %** | 25.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 30.90 € | **31.50 €** | 16.3 % | **18.5 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.50 €** | 5.5 % | **7.0 %** | 44.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 21.90 € | **22.50 €** | 6.4 % | **9.3 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic TPU (čierny) 1 kg | 20.90 € | **21.50 €** | 8.5 % | **11.6 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 12.90 € | **13.50 €** | 8.9 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 14.90 € | **15.50 €** | 40.2 % | **45.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.90 € | **14.50 €** | 28.1 % | **33.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 12.90 € | **13.50 €** | 30.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 15.90 € | **16.50 €** | 24.4 % | **29.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonická zubná kefka s aplikáciou pre deti, sada konc... | 14.90 € | **15.50 €** | 13.2 % | **17.8 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO716BL | 83.90 € | **84.50 €** | 8.8 % | **9.6 %** | 83.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 25.00 € | **25.50 €** | 22.8 % | **25.3 %** | 25.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.00 € | **22.50 €** | 9.3 % | **11.7 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Palm tmavé drevo 500 ml | 22.00 € | **22.50 €** | 9.3 % | **11.7 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.00 € | **18.50 €** | 9.5 % | **12.6 %** | 18.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.00 € | **18.50 €** | 9.5 % | **12.6 %** | 18.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny kapesny kompresor mini | 39.00 € | **39.50 €** | 18.3 % | **19.8 %** | 39.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Gracioso horizontal | 201.00 € | **201.50 €** | 12.3 % | **12.6 %** | 201.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Onyx | 55.00 € | **55.50 €** | 10.4 % | **11.4 %** | 55.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.00 € | **18.50 €** | 19.7 % | **23.0 %** | 18.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.50 € | **15.00 €** | 30.8 % | **35.4 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.50 € | **20.00 €** | 13.6 % | **16.5 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 11.50 € | **12.00 €** | 41.2 % | **47.4 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.50 € | **11.00 €** | 26.3 % | **32.3 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.50 € | **38.00 €** | 30.3 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.50 € | **22.00 €** | 22.5 % | **25.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vysávač TP-Link Tapo RV20 Max White robotický s mopo... | 123.50 € | **124.00 €** | 5.9 % | **6.3 %** | 123.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 28.50 € | **29.00 €** | 16.6 % | **18.7 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 228.50 € | **229.00 €** | 7.8 % | **8.0 %** | 228.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 33.50 € | **34.00 €** | 13.2 % | **14.9 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Comfort Graphite Black | 151.00 € | **151.50 €** | 12.3 % | **12.7 %** | 151.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.00 € | **18.50 €** | 9.5 % | **12.6 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight projekčné hodiny s rádiom a budíkom | 21.00 € | **21.50 €** | 44.1 % | **47.5 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **15.50 €** | 26.6 % | **30.9 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 16.00 € | **16.50 €** | 38.8 % | **43.2 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 13.00 € | **13.50 €** | 12.8 % | **17.1 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 13.00 € | **13.50 €** | 12.8 % | **17.1 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.00 € | **12.50 €** | 37.0 % | **42.7 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.00 € | **12.50 €** | 37.4 % | **43.1 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 16.00 € | **16.50 €** | 38.8 % | **43.2 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 17.00 € | **17.50 €** | 39.2 % | **43.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 16.00 € | **16.50 €** | 38.8 % | **43.2 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 29.00 € | **29.50 €** | 33.5 % | **35.8 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 22.00 € | **22.50 €** | 39.5 % | **42.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 26.00 € | **26.50 €** | 41.8 % | **44.5 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.00 € | **21.50 €** | 26.4 % | **29.4 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.00 € | **13.50 €** | 12.6 % | **16.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 14.00 € | **14.50 €** | 21.1 % | **25.4 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 15.00 € | **15.50 €** | 23.4 % | **27.5 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.00 € | **39.50 €** | 35.4 % | **37.2 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.00 € | **25.50 €** | 34.2 % | **36.9 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, UGR | 23.00 € | **23.50 €** | 33.2 % | **36.1 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 31.00 € | **31.50 €** | 21.6 % | **23.6 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.00 € | **18.50 €** | 12.0 % | **15.1 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 14.00 € | **14.50 €** | 39.0 % | **43.9 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevená vianočná hviezda, závesná, časov... | 10.00 € | **10.50 €** | 27.4 % | **33.8 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 20.00 € | **20.50 €** | 39.7 % | **43.2 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 20.00 € | **20.50 €** | 39.7 % | **43.2 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 12.00 € | **12.50 €** | 38.4 % | **44.2 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 14.00 € | **14.50 €** | 39.5 % | **44.5 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 20.00 € | **20.50 €** | 39.7 % | **43.2 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sada 3 LED vianočných darčekov, 48x LED, IP44 | 34.00 € | **34.50 €** | 9.9 % | **11.5 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 14.00 € | **14.50 €** | 5.4 % | **9.2 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.00 € | **10.50 €** | 34.2 % | **40.9 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 141.00 € | **141.50 €** | 38.0 % | **38.5 %** | 141.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 31.00 € | **31.50 €** | 36.6 % | **38.8 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 26.00 € | **26.50 €** | 34.0 % | **36.6 %** | 26.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.00 € | **10.50 €** | 34.6 % | **41.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 20.00 € | **20.50 €** | 39.5 % | **42.9 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.00 € | **14.50 €** | 38.8 % | **43.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.00 € | **41.50 €** | 32.0 % | **33.6 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.00 € | **19.50 €** | 28.3 % | **31.7 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 19.00 € | **19.50 €** | 28.3 % | **31.7 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 23.00 € | **23.50 €** | 31.0 % | **33.9 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor s časovačom | 16.00 € | **16.50 €** | 33.4 % | **37.6 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.00 € | **12.50 €** | 22.0 % | **27.0 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Excellent Graphite Black | 231.00 € | **231.50 €** | 17.4 % | **17.6 %** | 231.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blender G21 Excellent red | 231.00 € | **231.50 €** | 17.4 % | **17.6 %** | 231.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo TP-Link Tapo RVA420 Deodorizačný modul... | 35.00 € | **35.50 €** | 11.5 % | **13.1 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 19.00 € | **19.50 €** | 29.9 % | **33.3 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 10.00 € | **10.50 €** | 25.1 % | **31.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.00 € | **20.50 €** | 35.4 % | **38.8 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna smart WIFI meteostanica | 98.00 € | **98.50 €** | 19.0 % | **19.6 %** | 98.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 18.00 € | **18.50 €** | 5.9 % | **8.8 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.00 € | **17.50 €** | 21.0 % | **24.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 19.00 € | **19.50 €** | 15.5 % | **18.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 11.00 € | **11.50 €** | 18.5 % | **23.8 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.50 €** | 16.9 % | **18.6 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 22.00 € | **22.50 €** | 20.9 % | **23.6 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 58.00 € | **58.50 €** | 20.1 % | **21.1 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Batéria Jupio Alkaline AA balenie 100ks | 35.00 € | **35.50 €** | 7.0 % | **8.5 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálne hodiny s bluetooth synchronizáciou | 11.00 € | **11.50 €** | 12.1 % | **17.2 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 56.00 € | **56.50 €** | 27.0 % | **28.1 %** | 56.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 19.00 € | **19.50 €** | 33.3 % | **36.8 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stropné svetlo Yeelight C2201C400 | 64.00 € | **64.50 €** | 14.8 % | **15.7 %** | 64.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 26.00 € | **26.50 €** | 6.8 % | **8.8 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 17.50 € | **18.00 €** | 7.0 % | **10.0 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 18.00 € | **18.50 €** | 18.7 % | **22.0 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 18.00 € | **18.50 €** | 18.7 % | **22.0 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 18.00 € | **18.50 €** | 18.7 % | **22.0 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.50 € | **41.00 €** | 6.8 % | **8.2 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 42.00 € | **42.50 €** | 10.4 % | **11.7 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS2 mini electric pump | 41.50 € | **42.00 €** | 5.9 % | **7.2 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 688.50 € | **689.00 €** | 6.1 % | **6.2 %** | 688.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10S | 344.00 € | **344.50 €** | 6.9 % | **7.0 %** | 344.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1FC 16,1" | 114.50 € | **114.90 €** | 10.0 % | **10.4 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **64.90 €** | 5.5 % | **6.1 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.50 € | **10.90 €** | 20.2 % | **24.8 %** | 10.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 11.50 € | **11.90 €** | 7.3 % | **11.1 %** | 11.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.50 € | **10.90 €** | 26.5 % | **31.3 %** | 10.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Honey Day 160 ml | 10.50 € | **10.90 €** | 7.5 % | **11.6 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 13.50 € | **13.90 €** | 37.2 % | **41.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 10.50 € | **10.90 €** | 25.9 % | **30.7 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 14.50 € | **14.90 €** | 18.4 % | **21.6 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 13.50 € | **13.90 €** | 4.6 % | **7.7 %** | 13.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Mixér G21 VitalStick 800 W, Black | 45.50 € | **45.90 €** | 6.6 % | **7.6 %** | 45.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mixér G21 VitalStick 800 W, Red/Black | 45.50 € | **45.90 €** | 6.6 % | **7.6 %** | 45.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.50 € | **28.90 €** | 33.2 % | **35.0 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 34.50 € | **34.90 €** | 32.5 % | **34.0 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 33.50 € | **33.90 €** | 43.3 % | **45.0 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 39.50 € | **39.90 €** | 18.0 % | **19.2 %** | 39.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 23.50 € | **23.90 €** | 22.5 % | **24.6 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 31.50 € | **31.90 €** | 55.0 % | **57.0 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 22.50 € | **22.90 €** | 43.8 % | **46.4 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 38.50 € | **38.90 €** | 10.3 % | **11.5 %** | 38.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.50 € | **26.90 €** | 33.2 % | **35.2 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 20.50 € | **20.90 €** | 28.5 % | **31.0 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 34.50 € | **34.90 €** | 6.4 % | **7.6 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.50 € | **33.90 €** | 6.5 % | **7.7 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.50 € | **27.90 €** | 6.6 % | **8.1 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 35.50 € | **35.90 €** | 6.0 % | **7.1 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.70 € | **3.00 €** | 31.4 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **5.70 €** | 29.9 % | **37.1 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.70 € | **8.90 €** | 9.0 % | **11.5 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.20 € | **8.40 €** | 40.4 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.60 € | **5.80 €** | 24.4 % | **28.8 %** | 5.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.70 € | **5.90 €** | 34.3 % | **39.0 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.50 € | **4.70 €** | 35.0 % | **41.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.10 € | **6.30 €** | 13.2 % | **16.9 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 5.00 € | **5.20 €** | 8.7 % | **13.0 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.50 € | **6.70 €** | 26.7 % | **30.6 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.50 € | **2.70 €** | 27.0 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 24.3 % | **28.3 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.50 €** | 5.4 % | **8.7 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, čierny | 2.40 € | **2.60 €** | 25.1 % | **35.5 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.80 € | **8.00 €** | 33.5 % | **36.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.40 € | **3.60 €** | 9.3 % | **15.7 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.10 € | **5.30 €** | 16.5 % | **21.0 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.80 € | **5.00 €** | 31.0 % | **36.4 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.10 € | **5.30 €** | 32.0 % | **37.2 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.30 € | **3.50 €** | 26.6 % | **34.2 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.50 € | **7.70 €** | 40.5 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.00 € | **1.20 €** | 16.1 % | **39.4 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.10 € | **1.30 €** | 19.2 % | **40.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.10 € | **1.30 €** | 19.2 % | **40.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.60 € | **1.80 €** | 15.1 % | **29.5 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.70 € | **1.90 €** | 30.4 % | **45.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.80 € | **2.00 €** | 10.9 % | **23.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10A, biely-sivý | 2.70 € | **2.90 €** | 14.3 % | **22.8 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.60 € | **2.80 €** | 25.8 % | **35.5 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.70 € | **2.90 €** | 14.9 % | **23.4 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.10 € | **3.30 €** | 27.9 % | **36.2 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.70 € | **3.90 €** | 11.4 % | **17.4 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 7.90 € | **8.10 €** | 8.3 % | **11.1 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.80 € | **10.00 €** | 36.0 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.80 € | **10.00 €** | 22.6 % | **25.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.80 € | **10.00 €** | 42.8 % | **45.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.40 € | **7.60 €** | 21.5 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.90 € | **318.00 €** | 12.1 % | **12.1 %** | 317.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 659.90 € | **660.00 €** | 10.7 % | **10.7 %** | 659.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslařský trenažér HMS Premium ZW1600 | 669.90 € | **670.00 €** | 120929.8 % | **120947.9 %** | 669.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 367.90 € | **368.00 €** | 66367.9 % | **66386.0 %** | 367.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE FN617EES5 | 405.90 € | **406.00 €** | 7.0 % | **7.0 %** | 405.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux LKR64022AW | 458.90 € | **459.00 €** | 5.6 % | **5.6 %** | 458.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 35.90 € | **36.00 €** | 37.5 % | **37.9 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 27.90 € | **28.00 €** | 41.9 % | **42.5 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 19.90 € | **20.00 €** | 44.2 % | **44.9 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 23.90 € | **24.00 €** | 29.1 % | **29.6 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 21.90 € | **22.00 €** | 29.6 % | **30.2 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 34.90 € | **35.00 €** | 34.0 % | **34.4 %** | 35.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 31.90 € | **32.00 €** | 30.8 % | **31.2 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 23.90 € | **24.00 €** | 41.4 % | **42.0 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 18.90 € | **19.00 €** | 21.8 % | **22.4 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 61.90 € | **62.00 €** | 12.9 % | **13.1 %** | 62.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 25.90 € | **26.00 €** | 33.9 % | **34.4 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 18.90 € | **19.00 €** | 27.6 % | **28.3 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 25.90 € | **26.00 €** | 29.5 % | **30.0 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 26.90 € | **27.00 €** | 32.4 % | **32.9 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor kľúčenka, Find My kompatibilný | 18.90 € | **19.00 €** | 35.4 % | **36.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 45.90 € | **46.00 €** | 5.7 % | **5.9 %** | 46.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 16.90 € | **17.00 €** | 9.7 % | **10.3 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 41.90 € | **42.00 €** | 18.7 % | **19.0 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 44.90 € | **45.00 €** | 20.5 % | **20.7 %** | 45.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 8.70 € | **8.80 €** | 36.0 % | **37.6 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 22dB | 16.90 € | **17.00 €** | 15.7 % | **16.3 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 49dB | 23.90 € | **24.00 €** | 22.4 % | **22.9 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prídavná zásuvka pre GSM zásuvku | 35.90 € | **36.00 €** | 34.8 % | **35.2 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.90 € | **24.00 €** | 32.7 % | **33.3 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 7.80 € | **7.90 €** | 46.1 % | **48.0 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 7.80 € | **7.90 €** | 34.9 % | **36.7 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.10 € | **6.20 €** | 41.3 % | **43.6 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovový vianočný stromček, 2x AA | 4.30 € | **4.40 €** | 38.7 % | **42.0 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 4.30 € | **4.40 €** | 39.8 % | **43.1 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 6.80 € | **6.90 €** | 42.5 % | **44.6 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.10 € | **7.20 €** | 42.5 % | **44.5 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 4.10 € | **4.20 €** | 40.1 % | **43.5 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.80 € | **7.90 €** | 33.2 % | **34.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vypínač do vlhka, jednopólový, biely | 6.10 € | **6.20 €** | 33.0 % | **35.1 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 4.60 € | **4.70 €** | 39.0 % | **42.0 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.10 € | **4.20 €** | 32.8 % | **36.0 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 4.80 € | **4.90 €** | 5.2 % | **7.4 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight filter pre Dyson V11, V15 | 6.80 € | **6.90 €** | 27.1 % | **29.0 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stĺpcový filter pre Dyson V12 | 5.80 € | **5.90 €** | 22.2 % | **24.3 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 6.80 € | **6.90 €** | 17.4 % | **19.1 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 6.30 € | **6.40 €** | 34.8 % | **36.9 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB-C 20W fast charger | 5.30 € | **5.40 €** | 32.2 % | **34.7 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.10 € | **4.20 €** | 30.2 % | **33.4 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.30 € | **5.40 €** | 33.0 % | **35.5 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.30 € | **4.40 €** | 33.4 % | **36.5 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.10 € | **4.20 €** | 32.3 % | **35.5 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 5.60 € | **5.70 €** | 33.1 % | **35.5 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 5.60 € | **5.70 €** | 34.3 % | **36.7 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.30 € | **4.40 €** | 30.9 % | **34.0 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.30 € | **6.40 €** | 37.7 % | **39.9 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.20 € | **1.30 €** | 25.1 % | **35.5 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 1.70 € | **1.80 €** | 34.2 % | **42.1 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 3.80 € | **3.90 €** | 5.8 % | **8.6 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 2.90 € | **3.00 €** | 39.5 % | **44.3 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **2.20 €** | 33.4 % | **39.7 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.10 € | **3.20 €** | 37.7 % | **42.2 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.10 € | **2.20 €** | 18.6 % | **24.2 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 1.70 € | **1.80 €** | 35.5 % | **43.5 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.10 € | **2.20 €** | 37.7 % | **44.2 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.10 € | **2.20 €** | 37.7 % | **44.2 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.30 € | **2.40 €** | 38.5 % | **44.5 %** | 2.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.20 € | **1.30 €** | 19.0 % | **28.9 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 3,6 x 300mm, čierna... | 2.00 € | **2.10 €** | 25.1 % | **31.3 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.40 € | **3.50 €** | 22.9 % | **26.5 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.40 € | **2.50 €** | 25.9 % | **31.1 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, IP20, biela | 1.00 € | **1.10 €** | 19.6 % | **31.5 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.30 €** | 20.4 % | **30.5 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.50 € | **2.60 €** | 29.5 % | **34.6 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.00 € | **3.10 €** | 29.0 % | **33.4 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 3.80 € | **3.90 €** | 16.6 % | **19.7 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.70 € | **1.80 €** | 25.6 % | **33.0 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.60 € | **2.70 €** | 25.8 % | **30.7 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.30 € | **3.40 €** | 29.6 % | **33.5 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight fast charger do auta 30W USB-C + A | 3.80 € | **3.90 €** | 35.5 % | **39.1 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.10 € | **2.20 €** | 7.4 % | **12.5 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 1.70 € | **1.80 €** | 19.1 % | **26.2 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.90 € | **4.00 €** | 33.2 % | **36.6 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.40 € | **2.50 €** | 27.5 % | **32.8 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.80 € | **3.90 €** | 34.3 % | **37.9 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.10 € | **3.20 €** | 29.9 % | **34.1 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka mini, IP68, 3-9mm, ... | 2.80 € | **2.90 €** | 38.0 % | **42.9 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.50 € | **3.60 €** | 37.5 % | **41.4 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 3.80 € | **3.90 €** | 41.1 % | **44.8 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.00 € | **3.10 €** | 31.1 % | **35.5 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.40 € | **3.50 €** | 17.6 % | **21.1 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 0.80 € | **0.90 €** | 12.1 % | **26.2 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 0.80 € | **0.90 €** | 22.7 % | **38.1 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 0.90 € | **1.00 €** | 10.9 % | **23.2 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 0.80 € | **0.90 €** | 12.1 % | **26.2 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny koaxiálny kábel, kombinované konekto... | 0.80 € | **0.90 €** | 14.1 % | **28.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 1.80 € | **1.90 €** | 36.8 % | **44.4 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.10 € | **1.20 €** | 24.2 % | **35.5 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.10 € | **1.20 €** | 24.2 % | **35.5 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 1.60 € | **1.70 €** | 25.1 % | **32.9 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.30 € | **1.40 €** | 10.1 % | **18.6 %** | 1.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 1.80 € | **1.90 €** | 28.4 % | **35.5 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 5 x 2,5A, biely | 1.60 € | **1.70 €** | 23.9 % | **31.6 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.30 € | **1.40 €** | 17.4 % | **26.5 %** | 1.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.10 € | **9.20 €** | 30.0 % | **31.5 %** | 9.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 8.90 € | **9.00 €** | 15.8 % | **17.1 %** | 8.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 6.90 € | **7.00 €** | 35.8 % | **37.8 %** | 6.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.60 € | **9.70 €** | 20.4 % | **21.7 %** | 9.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 12.90 € | **13.00 €** | 41.0 % | **42.1 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samolepiace hodiny G21 Classic Style | 11.90 € | **12.00 €** | 12.1 % | **13.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samolepiace hodiny G21 Eccentric Style | 11.90 € | **12.00 €** | 12.1 % | **13.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.30 € | **9.40 €** | 49.7 % | **51.3 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.90 € | **11.00 €** | 41.8 % | **43.1 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 13.90 € | **14.00 €** | 41.3 % | **42.3 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 12.90 € | **13.00 €** | 49.2 % | **50.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.00 € | **8.10 €** | 42.3 % | **44.1 %** | 8.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 14.90 € | **15.00 €** | 40.4 % | **41.3 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.30 € | **8.40 €** | 30.5 % | **32.1 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 9.60 € | **9.70 €** | 32.7 % | **34.1 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 7.90 € | **8.00 €** | 43.0 % | **44.9 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.80 € | **9.90 €** | 36.0 % | **37.4 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenná lampička CELE, 1x GU10, biela | 9.80 € | **9.90 €** | 36.0 % | **37.4 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 15.90 € | **16.00 €** | 20.8 % | **21.6 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 6.70 € | **6.80 €** | 38.3 % | **40.3 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 10.90 € | **11.00 €** | 38.2 % | **39.5 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 14.90 € | **15.00 €** | 41.7 % | **42.6 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 14.90 € | **15.00 €** | 41.7 % | **42.6 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 8.90 € | **9.00 €** | 43.0 % | **44.6 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 13.90 € | **14.00 €** | 39.0 % | **40.0 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 9.90 € | **10.00 €** | 37.6 % | **39.0 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 9.90 € | **10.00 €** | 37.6 % | **39.0 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 5.70 € | **5.80 €** | 41.3 % | **43.8 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 5.70 € | **5.80 €** | 41.3 % | **43.8 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 9.00 € | **9.10 €** | 38.1 % | **39.6 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 14.90 € | **15.00 €** | 41.7 % | **42.6 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.00 € | **4.10 €** | 17.4 % | **20.3 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer | 9.50 € | **9.60 €** | 36.0 % | **37.4 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vypínač Slim č. 1 jednopólový, biely | 2.70 € | **2.80 €** | 27.6 % | **32.4 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 11.90 € | **12.00 €** | 39.8 % | **41.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 11.90 € | **12.00 €** | 13.0 % | **14.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 4.70 € | **4.80 €** | 29.1 % | **31.8 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.20 € | **2.30 €** | 26.0 % | **31.7 %** | 2.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 9.10 € | **9.20 €** | 35.3 % | **36.7 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 11.90 € | **12.00 €** | 30.0 % | **31.1 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 12.90 € | **13.00 €** | 27.3 % | **28.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Indie, typ D | 5.40 € | **5.50 €** | 32.6 % | **35.1 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Veľkej Británie, typ G | 5.40 € | **5.50 €** | 32.6 % | **35.1 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.50 € | **4.60 €** | 35.5 % | **38.5 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 6.20 € | **6.30 €** | 32.6 % | **34.8 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 4.50 € | **4.60 €** | 6.7 % | **9.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.90 € | **10.00 €** | 18.0 % | **19.2 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 8.00 € | **8.10 €** | 36.4 % | **38.1 %** | 8.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.70 € | **7.80 €** | 32.1 % | **33.8 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.40 € | **8.50 €** | 34.2 % | **35.8 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.20 € | **5.30 €** | 33.4 % | **35.9 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 8.10 € | **8.20 €** | 23.8 % | **25.3 %** | 8.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 9.90 € | **10.00 €** | 17.2 % | **18.3 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 3.70 € | **3.80 €** | 28.6 % | **32.0 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 15.90 € | **16.00 €** | 13.1 % | **13.8 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 4.40 € | **4.50 €** | 28.7 % | **31.6 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 2.70 € | **2.80 €** | 26.9 % | **31.6 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 5.90 € | **6.00 €** | 41.5 % | **43.9 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.00 € | **8.10 €** | 42.9 % | **44.7 %** | 8.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.60 € | **9.70 €** | 34.8 % | **36.2 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, 20 - 200A | 5.00 € | **5.10 €** | 4.5 % | **6.6 %** | 5.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 5.4 % | **6.9 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 15.90 € | **16.00 €** | 7.4 % | **8.0 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 67.90 € | **68.00 €** | 35.9 % | **36.1 %** | 68.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sous vide G21 Maestro, WiFi, 1200 W | 105.90 € | **106.00 €** | 9.8 % | **10.0 %** | 106.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1502 | 235.90 € | **236.00 €** | 42519.7 % | **42537.8 %** | 235.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELECTROLUX 300 EFC226R | 248.90 € | **249.00 €** | 7.9 % | **8.0 %** | 248.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.90 € | **177.00 €** | 7.3 % | **7.4 %** | 176.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1271)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 7402.00 € | **6758.90 €** | 15.0 % | **5.0 %** | 6497.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3641.00 € | **3349.50 €** | 15.0 % | **5.8 %** | 3349.70 € | stávame sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.50 €** | 15.0 % | **5.9 %** | 2645.65 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2573.90 € | **2350.00 €** | 15.0 % | **5.0 %** | 1825.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOC6H76X | 769.00 € | **546.90 €** | 47.7 % | **5.0 %** | 517.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE77S99H | 3613.00 € | **3448.90 €** | 10.0 % | **5.0 %** | 3399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 519.00 € | **367.50 €** | 48.3 % | **5.0 %** | 363.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 977.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WDSI96A | 499.00 € | **373.50 €** | 40.3 % | **5.0 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 639.00 € | **525.90 €** | 27.6 % | **5.0 %** | 495.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.00 €** | 16.3 % | **8.9 %** | 1543.50 € | stávame sa najlacnejší |
| MOTOROLA Razr Fold 16+512GB Blue | 2190.50 € | **2090.90 €** | 10.0 % | **5.0 %** | 1449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica TFB 128 TX | 369.00 € | **279.50 €** | 38.7 % | **5.0 %** | 269.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **981.00 €** | 15.0 % | **5.8 %** | 981.43 € | stávame sa najlacnejší |
| GORENJE GS520E15W | 339.00 € | **257.90 €** | 38.1 % | **5.1 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality CR-Scan Raptor 3D Scanner | 950.00 € | **877.00 €** | 15.0 % | **6.2 %** | 877.11 € | stávame sa najlacnejší |
| Xiaomi 17 Ultra 16/512GB Black | 1522.90 € | **1453.90 €** | 10.0 % | **5.0 %** | 1125.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HDMI 32400 DTX | 319.00 € | **250.50 €** | 33.9 % | **5.2 %** | 215.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr 70 Ultra 16+512GB Blue | 1358.00 € | **1296.50 €** | 10.0 % | **5.0 %** | 1220.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo Edge 2 Pro White | 1275.90 € | **1217.90 €** | 10.0 % | **5.0 %** | 831.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS5B70CLI | 599.00 € | **543.50 €** | 15.7 % | **5.0 %** | 470.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **236.90 €** | 28.2 % | **5.1 %** | 233.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool OMK38HU0B | 299.00 € | **248.00 €** | 26.6 % | **5.0 %** | 228.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Carbon | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 779.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Olive | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 819.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R619EES5 | 519.00 € | **471.00 €** | 15.7 % | **5.0 %** | 407.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EIS8959 | 1062.50 € | **1014.50 €** | 10.0 % | **5.0 %** | 967.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 256GB White | 1039.50 € | **992.00 €** | 10.0 % | **5.0 %** | 820.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 256GB Black | 1039.50 € | **992.00 €** | 10.0 % | **5.0 %** | 825.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE NRS8182KX | 549.00 € | **501.90 €** | 14.9 % | **5.0 %** | 494.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 Ultra 16/512GB Black | 1035.50 € | **988.50 €** | 10.0 % | **5.0 %** | 899.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHFF 6404 X6E | 1023.50 € | **976.90 €** | 10.0 % | **5.0 %** | 899.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 525.50 € | **479.90 €** | 15.0 % | **5.1 %** | 426.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 17 12/256GB Venture Green | 972.90 € | **928.90 €** | 10.0 % | **5.0 %** | 911.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **56.90 €** | 95.4 % | **11.3 %** | 57.00 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT F2400 2400 W (čierna) | 779.50 € | **736.90 €** | 15.0 % | **8.7 %** | 737.00 € | stávame sa najlacnejší |
| POCO F9 Ultra 12/256GB Black | 927.90 € | **885.50 €** | 10.0 % | **5.0 %** | 780.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TT-S303 BLACK | 529.00 € | **488.50 €** | 13.8 % | **5.1 %** | 466.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Blue | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 634.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Red | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 678.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E10 | 339.00 € | **299.90 €** | 18.8 % | **5.1 %** | 254.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 720.50 € | **681.50 €** | 11.0 % | **5.0 %** | 662.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA7CE19S | 820.50 € | **783.50 €** | 10.0 % | **5.1 %** | 759.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **389.50 €** | 15.0 % | **5.1 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA A-S301 BLACK | 439.00 € | **403.90 €** | 14.1 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **203.90 €** | 27.5 % | **8.8 %** | 204.00 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **243.90 €** | 24.4 % | **8.8 %** | 244.00 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **243.90 €** | 24.2 % | **8.6 %** | 244.00 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K1C 2025 | 401.90 € | **366.90 €** | 15.0 % | **5.0 %** | 348.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA7CE18S1 | 752.50 € | **718.00 €** | 10.1 % | **5.0 %** | 684.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 Pro 12/512GB Green (72207) | 742.50 € | **708.90 €** | 10.0 % | **5.0 %** | 609.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň CREALITY SparkX i7 Combo | 391.50 € | **357.90 €** | 15.0 % | **5.1 %** | 339.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 387.00 € | **353.50 €** | 15.0 % | **5.0 %** | 349.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation 5 Digital + 2x DS5 | 727.50 € | **694.50 €** | 10.0 % | **5.0 %** | 579.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation®5 Console–1TB | 727.50 € | **694.50 €** | 10.0 % | **5.0 %** | 599.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW8F5412SAC | 709.90 € | **677.90 €** | 10.0 % | **5.1 %** | 665.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425 KIT 4MPx, vonkajšie, ... | 144.90 € | **113.90 €** | 33.7 % | **5.1 %** | 97.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Blue | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 442.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Wood | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 475.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač MOVA Z200 Stick | 345.50 € | **315.50 €** | 15.0 % | **5.0 %** | 222.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Aurzen Eazze D1 Max | 346.00 € | **316.50 €** | 15.0 % | **5.2 %** | 207.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG FCR5A95WW | 610.50 € | **582.50 €** | 10.1 % | **5.0 %** | 500.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WP E12X WBS EE | 618.50 € | **590.50 €** | 10.0 % | **5.1 %** | 569.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE MO 4250 CLI | 159.00 € | **131.50 €** | 27.4 % | **5.4 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW7TN3372C | 596.90 € | **569.50 €** | 10.1 % | **5.0 %** | 567.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 930.50 € | **904.00 €** | 10.0 % | **6.9 %** | 904.50 € | stávame sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 556.90 € | **531.90 €** | 10.0 % | **5.1 %** | 499.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA6LE18S | 549.00 € | **524.00 €** | 10.0 % | **5.0 %** | 509.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **574.00 €** | 10.5 % | **5.9 %** | 574.04 € | stávame sa najlacnejší |
| LENOVO LEGION TAB (ZAEF0021CZ) | 530.90 € | **506.50 €** | 10.1 % | **5.0 %** | 448.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **347.50 €** | 15.1 % | **7.5 %** | 347.63 € | stávame sa najlacnejší |
| UMAX Webcam W5 | 39.90 € | **16.50 €** | 161.4 % | **8.1 %** | 14.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MKF 17DF441 Fixní držák na TV | 39.00 € | **15.90 €** | 493.8 % | **142.1 %** | 15.99 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 264.50 € | **241.90 €** | 15.0 % | **5.2 %** | 200.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 262.50 € | **239.90 €** | 19.9 % | **9.6 %** | 239.95 € | stávame sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS6C70WPA | 499.90 € | **477.50 €** | 10.0 % | **5.1 %** | 415.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1376.90 €** | 10.6 % | **8.9 %** | 1377.00 € | stávame sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 486.90 € | **464.90 €** | 10.0 % | **5.1 %** | 442.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38441P | 484.50 € | **462.50 €** | 10.1 % | **5.1 %** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BRS 7N3BX-S | 482.90 € | **460.90 €** | 10.1 % | **5.1 %** | 449.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 388.90 € | **367.00 €** | 19.0 % | **12.3 %** | 367.50 € | stávame sa najlacnejší |
| Rooma Espresso A7 bílá | 560.50 € | **539.00 €** | 10.0 % | **5.8 %** | 539.50 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C610 KIT 3MPx, vonkajšia, IP PTZ... | 103.90 € | **82.50 €** | 32.6 % | **5.3 %** | 79.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/128GB Green (71768) | 458.90 € | **437.90 €** | 10.1 % | **5.0 %** | 364.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 175.90 € | **154.90 €** | 19.4 % | **5.2 %** | 142.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3WFU4841MCC | 461.50 € | **440.50 €** | 10.0 % | **5.0 %** | 432.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE55LS03HW | 1385.90 € | **1365.00 €** | 8.1 % | **6.4 %** | 1365.50 € | stávame sa najlacnejší |
| Guzzanti GZ 340A | 431.90 € | **412.00 €** | 10.1 % | **5.0 %** | 383.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 693.90 € | **674.00 €** | 10.1 % | **6.9 %** | 674.50 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 474.50 € | **454.90 €** | 10.0 % | **5.5 %** | 455.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **197.50 €** | 15.0 % | **5.2 %** | 184.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HII64600AFT | 390.50 € | **372.50 €** | 10.1 % | **5.0 %** | 301.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS642D90X | 394.90 € | **376.90 €** | 10.1 % | **5.1 %** | 323.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fén MOVA Aero C v ružovej farbe | 206.90 € | **188.90 €** | 15.1 % | **5.1 %** | 138.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L3560CDW | 394.50 € | **376.50 €** | 10.1 % | **5.0 %** | 354.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 310.00 € | **293.90 €** | 10.8 % | **5.0 %** | 276.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 5G 8/256GB ZAFM0293CZ | 354.90 € | **338.90 €** | 10.1 % | **5.1 %** | 316.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO B5RCNA406HXB3 | 536.90 € | **521.90 €** | 10.0 % | **7.0 %** | 522.00 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 524.50 € | **509.90 €** | 10.1 % | **7.0 %** | 510.00 € | stávame sa najlacnejší |
| Candy GD 410B8-S | 316.00 € | **301.90 €** | 10.0 % | **5.1 %** | 296.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G57 Power 12+256GB Green | 305.50 € | **291.50 €** | 10.2 % | **5.1 %** | 228.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta GZ5436E0 | 299.90 € | **285.90 €** | 10.1 % | **5.0 %** | 255.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 135.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 135.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO X6 | 125.50 € | **111.50 €** | 18.2 % | **5.0 %** | 99.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 2-pack) | 84.90 € | **70.90 €** | 26.1 % | **5.3 %** | 63.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 Pro 8/256GB Black | 296.50 € | **282.90 €** | 10.2 % | **5.1 %** | 244.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-L7 | 301.50 € | **287.90 €** | 10.0 % | **5.1 %** | 255.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FINLUX 65FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 672.00 € | **658.50 €** | 5435.4 % | **5324.2 %** | 658.90 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 42.99 € | **29.50 €** | 57.3 % | **7.9 %** | 29.75 € | stávame sa najlacnejší |
| SONY STRDH190 | 297.90 € | **284.50 €** | 10.1 % | **5.1 %** | 274.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 557.90 € | **544.50 €** | 10.1 % | **7.4 %** | 544.77 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **105.90 €** | 22.2 % | **8.7 %** | 106.00 € | stávame sa najlacnejší |
| YAMAHA R-S202D SILVER | 284.50 € | **271.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechniSat DIGITRADIO BT 2 gray 0001/3973 reproduktor... | 167.50 € | **154.50 €** | 13.9 % | **5.0 %** | 143.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CIO 225 EE/N | 286.50 € | **273.50 €** | 10.1 % | **5.1 %** | 271.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Základňa volantu MOZA RACING R25 RS091 | 1008.50 € | **995.50 €** | 15.0 % | **13.5 %** | 995.90 € | stávame sa najlacnejší |
| Electrolux E3TB1-4GG | 53.00 € | **40.00 €** | 43.2 % | **8.0 %** | 40.50 € | stávame sa najlacnejší |
| Guzzanti GZ 338 | 583.00 € | **570.00 €** | 10.0 % | **7.6 %** | 570.50 € | stávame sa najlacnejší |
| Gorenje N62CS2XL4 | 448.90 € | **436.00 €** | 10.0 % | **6.8 %** | 436.50 € | stávame sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT100 PRO | 145.00 € | **132.90 €** | 14.8 % | **5.2 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 325 | 263.50 € | **251.50 €** | 10.2 % | **5.1 %** | 251.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540WP | 426.90 € | **414.90 €** | 10.1 % | **7.0 %** | 415.00 € | stávame sa najlacnejší |
| Beko CF200EWN | 259.90 € | **248.00 €** | 10.1 % | **5.0 %** | 214.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 407.50 € | **395.90 €** | 10.1 % | **7.0 %** | 396.00 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **30.50 €** | 47.6 % | **7.2 %** | 30.90 € | stávame sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **119.90 €** | 14.9 % | **5.2 %** | 111.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Black | 241.50 € | **230.50 €** | 10.2 % | **5.2 %** | 196.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mini projektor Phillips N-140 s rozlíšením 720p (biely) | 128.50 € | **117.50 €** | 15.2 % | **5.3 %** | 112.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **518.50 €** | 15.0 % | **12.6 %** | 518.90 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 125.90 € | **115.00 €** | 24.3 % | **13.5 %** | 115.10 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 4/128GB (ZAFR0018CZ) | 228.50 € | **217.90 €** | 10.2 % | **5.1 %** | 184.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC772830 | 226.50 € | **215.90 €** | 10.2 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI1040GR | 35.90 € | **25.50 €** | 50.6 % | **7.0 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare RayNeo Air 4 Pro AR | 325.90 € | **315.50 €** | 15.0 % | **11.3 %** | 315.58 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **110.50 €** | 14.8 % | **5.3 %** | 88.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo C420S2 | 212.90 € | **202.90 €** | 10.2 % | **5.0 %** | 188.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.15 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 109.50 € | **100.00 €** | 24.2 % | **13.5 %** | 100.08 € | stávame sa najlacnejší |
| Blender G21 Perfection brown | 210.00 € | **200.50 €** | 17.4 % | **12.1 %** | 200.90 € | stávame sa najlacnejší |
| GUZZANTI GZ 220A | 225.50 € | **216.00 €** | 10.1 % | **5.5 %** | 216.50 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **100.50 €** | 15.0 % | **5.2 %** | 95.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 50.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 91 | 197.00 € | **188.00 €** | 10.0 % | **5.0 %** | 183.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **235.50 €** | 15.1 % | **10.9 %** | 235.85 € | stávame sa najlacnejší |
| Gorenje FN619EEW5 | 490.50 € | **481.90 €** | 6.9 % | **5.1 %** | 414.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L2622DW | 184.50 € | **175.90 €** | 10.3 % | **5.1 %** | 164.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC728D10 | 182.50 € | **174.00 €** | 10.2 % | **5.0 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C220 IP, 4MPx, WiFi, prísvit | 44.00 € | **35.50 €** | 31.2 % | **5.8 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **267.50 €** | 15.0 % | **11.4 %** | 267.59 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 307.50 € | **299.00 €** | 15.0 % | **11.8 %** | 299.30 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **299.00 €** | 15.0 % | **11.8 %** | 299.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.00 € | **69.50 €** | 38.0 % | **23.0 %** | 69.90 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 680.50 € | **672.00 €** | 10.0 % | **8.6 %** | 672.50 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 146.90 € | **138.50 €** | 11.6 % | **5.3 %** | 122.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **184.50 €** | 15.1 % | **10.1 %** | 184.54 € | stávame sa najlacnejší |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 451.90 € | **443.50 €** | 15.0 % | **12.9 %** | 443.90 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 499.00 € | **490.90 €** | 6.8 % | **5.1 %** | 463.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP LaserJet Pro MFP M234dw (6GW99F) | 176.90 € | **168.90 €** | 10.1 % | **5.1 %** | 130.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 6, černý | 167.50 € | **159.50 €** | 10.3 % | **5.1 %** | 129.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX U-Box J42 Nano/bez OS | 176.90 € | **168.90 €** | 10.1 % | **5.1 %** | 156.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 388.50 € | **380.50 €** | 7.2 % | **5.0 %** | 376.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 29.50 € | **21.50 €** | 46.7 % | **6.9 %** | 20.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C113 IP, 3MPx, WiFi, prísvit, vn... | 38.90 € | **30.90 €** | 32.4 % | **5.2 %** | 30.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG Odyssey G40B (LS25BG400EUXEN) | 167.90 € | **160.00 €** | 10.2 % | **5.0 %** | 134.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **23.00 €** | 54.5 % | **15.0 %** | 23.11 € | stávame sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 49.90 € | **42.00 €** | 64.6 % | **38.5 %** | 42.21 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 597.50 € | **589.90 €** | 7.9 % | **6.5 %** | 589.94 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 167.50 € | **159.90 €** | 11.1 % | **6.1 %** | 159.95 € | stávame sa najlacnejší |
| Naparovač odevov Neakasa Magic 1 | 88.00 € | **80.50 €** | 14.8 % | **5.0 %** | 70.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 39.50 € | **32.00 €** | 45.7 % | **18.0 %** | 32.04 € | stávame sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 138.50 € | **131.00 €** | 33.0 % | **25.8 %** | 131.43 € | stávame sa najlacnejší |
| D-LINK WiFi N300 Extender (DAP-1325) | 26.90 € | **19.50 €** | 45.6 % | **5.6 %** | 17.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-L6 | 158.00 € | **150.90 €** | 10.0 % | **5.1 %** | 138.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal HT461138 | 49.90 € | **42.90 €** | 22.2 % | **5.1 %** | 36.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 154.90 € | **147.90 €** | 10.1 % | **5.1 %** | 143.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 49.00 € | **42.00 €** | 38.8 % | **19.0 %** | 42.50 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.00 €** | 47.0 % | **5.9 %** | 18.50 € | stávame sa najlacnejší |
| Guzzanti GZ 1836A | 265.90 € | **259.00 €** | 10.0 % | **7.2 %** | 259.13 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 37.50 € | **30.90 €** | 28.9 % | **6.2 %** | 28.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OfficeJet Pro 8132e AiO HP+ (40Q45B) | 149.50 € | **142.90 €** | 10.1 % | **5.2 %** | 97.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 Power 4+256GB Blue | 152.50 € | **145.90 €** | 10.0 % | **5.2 %** | 114.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (biely) | 189.50 € | **182.90 €** | 15.1 % | **11.1 %** | 182.97 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 189.50 € | **182.90 €** | 15.1 % | **11.1 %** | 182.97 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **34.50 €** | 38.3 % | **16.3 %** | 34.90 € | stávame sa najlacnejší |
| Blender G21 Perfection Cappuccino | 210.00 € | **203.50 €** | 17.4 % | **13.8 %** | 203.90 € | stávame sa najlacnejší |
| ROWENTA RO 3985 EA | 78.50 € | **72.00 €** | 14.6 % | **5.1 %** | 72.49 € | stávame sa najlacnejší |
| Xiaomi Watch S4 Silver | 144.90 € | **138.50 €** | 10.0 % | **5.1 %** | 117.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON SELPHY CP-1500 Pink | 147.90 € | **141.50 €** | 10.0 % | **5.2 %** | 139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.90 € | **64.50 €** | 16.4 % | **5.9 %** | 64.69 € | stávame sa najlacnejší |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 251.90 € | **245.50 €** | 12.2 % | **9.4 %** | 245.90 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **15.90 €** | 48.6 % | **7.5 %** | 9.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW5558E0 | 178.50 € | **172.50 €** | 8.9 % | **5.2 %** | 107.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Low Sugar Rice Cooker 3000WT | 128.90 € | **122.90 €** | 10.2 % | **5.1 %** | 92.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kodak Friendly Zoom FZ45 Black | 136.90 € | **130.90 €** | 10.0 % | **5.2 %** | 109.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná 12V / 45 Ah MHPower 6-DMF-45 GEL Tra... | 112.90 € | **106.90 €** | 11.2 % | **5.3 %** | 90.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1-Ss | 131.00 € | **125.00 €** | 10.0 % | **5.0 %** | 113.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW501815 | 136.90 € | **130.90 €** | 10.1 % | **5.2 %** | 121.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 70.00 € | **64.00 €** | 15.0 % | **5.1 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 53.90 € | **47.90 €** | 19.1 % | **5.9 %** | 43.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 83.90 € | **77.90 €** | 13.5 % | **5.4 %** | 74.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **113.90 €** | 10.9 % | **5.3 %** | 112.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla 32E325BH 32" HD LED TV | 134.50 € | **128.50 €** | 10.0 % | **5.1 %** | 128.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 40.50 € | **34.50 €** | 59.2 % | **35.6 %** | 34.65 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 69.00 € | **63.00 €** | 24.8 % | **13.9 %** | 63.19 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 55.50 € | **49.50 €** | 38.5 % | **23.6 %** | 49.90 € | stávame sa najlacnejší |
| JBL Flip 7, černý | 115.50 € | **110.00 €** | 10.3 % | **5.1 %** | 95.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 56.50 € | **51.00 €** | 24.8 % | **12.7 %** | 51.03 € | stávame sa najlacnejší |
| Beko B3RCSO255S | 281.00 € | **275.50 €** | 10.0 % | **7.9 %** | 275.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 125.00 € | **119.50 €** | 18.4 % | **13.2 %** | 119.85 € | stávame sa najlacnejší |
| Rowenta HU4020F0 | 112.90 € | **107.50 €** | 10.4 % | **5.1 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 4+64GB Blue | 117.90 € | **112.50 €** | 10.3 % | **5.2 %** | 89.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **17.50 €** | 38.1 % | **5.5 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 28.90 € | **23.50 €** | 29.4 % | **5.2 %** | 22.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 63.00 € | **57.90 €** | 14.8 % | **5.5 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **23.90 €** | 40.2 % | **15.5 %** | 24.00 € | stávame sa najlacnejší |
| ROWENTA RY6555WH | 106.50 € | **101.50 €** | 10.5 % | **5.3 %** | 87.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DMS-108/E) | 106.50 € | **101.50 €** | 10.3 % | **5.2 %** | 92.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.50 € | **51.50 €** | 15.3 % | **5.1 %** | 44.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente G4 robotický vysavač | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 109.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-G4 | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 109.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 41.90 € | **36.90 €** | 20.3 % | **5.9 %** | 36.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 105.50 € | **100.50 €** | 10.3 % | **5.1 %** | 100.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **54.00 €** | 14.9 % | **5.2 %** | 53.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 119.50 € | **114.50 €** | 15.1 % | **10.3 %** | 114.54 € | stávame sa najlacnejší |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 99.50 € | **94.50 €** | 24.0 % | **17.8 %** | 94.60 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.90 € | **238.90 €** | 10.0 % | **7.8 %** | 239.00 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **75.50 €** | 14.9 % | **7.7 %** | 75.66 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.50 € | **25.50 €** | 39.2 % | **16.4 %** | 25.90 € | stávame sa najlacnejší |
| Tefal EY8328E0 | 124.50 € | **119.50 €** | 10.4 % | **6.0 %** | 119.90 € | stávame sa najlacnejší |
| Beko VRT86325VI | 204.50 € | **199.50 €** | 10.1 % | **7.4 %** | 199.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 36.00 € | **31.00 €** | 37.9 % | **18.8 %** | 31.50 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **130.00 €** | 15.0 % | **10.8 %** | 130.08 € | stávame sa najlacnejší |
| Vodotesné puzdro Puluz (45 m) pre iPhone: na podvodn... | 64.90 € | **60.00 €** | 15.0 % | **6.3 %** | 60.46 € | stávame sa najlacnejší |
| Braun CG9043 | 219.90 € | **215.00 €** | 10.1 % | **7.6 %** | 215.50 € | stávame sa najlacnejší |
| Guzzanti GZ 210A | 221.90 € | **217.00 €** | 10.1 % | **7.7 %** | 217.50 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 52.90 € | **48.00 €** | 25.1 % | **13.5 %** | 48.19 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **8.80 €** | 121.3 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Rowenta RO3753EA | 96.50 € | **91.90 €** | 10.5 % | **5.2 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI MAG 274CXF | 100.50 € | **95.90 €** | 10.2 % | **5.2 %** | 95.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dozownik karmy PETKIT Fresh Element SOLO 3L | 78.50 € | **73.90 €** | 14.7 % | **8.0 %** | 73.92 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 73.50 € | **68.90 €** | 20.2 % | **12.7 %** | 69.00 € | stávame sa najlacnejší |
| Leifheit Vakuovačka Vacu Power 500 | 90.50 € | **86.00 €** | 10.6 % | **5.1 %** | 83.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 17.00 € | **12.50 €** | 45.3 % | **6.9 %** | 10.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 35.50 € | **31.00 €** | 20.5 % | **5.2 %** | 30.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 54.00 € | **49.50 €** | 19.5 % | **9.5 %** | 49.57 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 59.00 € | **54.50 €** | 35.9 % | **25.5 %** | 54.62 € | stávame sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **100.00 €** | 14.9 % | **10.0 %** | 100.14 € | stávame sa najlacnejší |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 18.50 € | **14.00 €** | 45.7 % | **10.3 %** | 14.19 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.50 € | **48.00 €** | 16.1 % | **6.2 %** | 48.19 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 142.90 € | **138.50 €** | 8.7 % | **5.4 %** | 134.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO4B25EA | 96.90 € | **92.50 €** | 10.4 % | **5.4 %** | 89.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 376.90 € | **372.50 €** | 7.7 % | **6.4 %** | 372.57 € | stávame sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 421.90 € | **417.50 €** | 13.8 % | **12.6 %** | 417.60 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **37.90 €** | 22.8 % | **10.8 %** | 38.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **8.40 €** | 56.6 % | **5.2 %** | 8.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **82.90 €** | 15.0 % | **9.6 %** | 82.98 € | stávame sa najlacnejší |
| Sada filtrov Freewell „Standard Day“ pre OSMO NANO –... | 46.90 € | **42.90 €** | 15.2 % | **5.3 %** | 19.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV4111E0 | 86.00 € | **82.00 €** | 10.1 % | **5.0 %** | 72.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SALENTE SuChef | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 72.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 10T LTE | 94.90 € | **90.90 €** | 10.0 % | **5.4 %** | 84.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 59.90 € | **55.90 €** | 13.1 % | **5.5 %** | 51.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMIKO Mini HD265 | 49.90 € | **45.90 €** | 14.5 % | **5.3 %** | 42.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 19.00 € | **15.00 €** | 33.7 % | **5.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **42.90 €** | 15.3 % | **5.5 %** | 42.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 47.90 € | **43.90 €** | 15.0 % | **5.4 %** | 43.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **26.90 €** | 54.2 % | **34.3 %** | 26.91 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **178.50 €** | 15.0 % | **12.5 %** | 178.51 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 85.00 € | **81.00 €** | 13.9 % | **8.5 %** | 81.10 € | stávame sa najlacnejší |
| Digitálny kliešťový merač Habotest HT208D | 47.50 € | **43.50 €** | 15.1 % | **5.4 %** | 43.68 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.50 €** | 39.6 % | **12.4 %** | 16.69 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 27.50 € | **23.50 €** | 39.3 % | **19.0 %** | 23.90 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 47.50 € | **43.50 €** | 52.9 % | **40.0 %** | 43.90 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **335.00 €** | 15.0 % | **13.6 %** | 335.42 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 108.90 € | **105.00 €** | 15.0 % | **10.8 %** | 105.05 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.90 € | **38.00 €** | 17.9 % | **6.9 %** | 38.09 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 28.50 € | **24.90 €** | 20.9 % | **5.6 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 40.50 € | **36.90 €** | 15.5 % | **5.2 %** | 36.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.90 €** | 58.5 % | **36.1 %** | 21.92 € | stávame sa najlacnejší |
| Tefal FV6840E0 | 76.50 € | **72.90 €** | 10.7 % | **5.5 %** | 68.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CHW6LBX/4U2 IDEA | 82.50 € | **78.90 €** | 10.1 % | **5.3 %** | 78.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Flex 2 bílá | 78.00 € | **74.50 €** | 10.1 % | **5.2 %** | 62.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Flex 2 černá | 78.00 € | **74.50 €** | 10.1 % | **5.2 %** | 62.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Memory card Samsung EVO Plus microSD 2021 64GB (MB-M... | 47.00 € | **43.50 €** | 14.4 % | **5.9 %** | 35.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 14.50 € | **11.00 €** | 42.4 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **46.00 €** | 15.3 % | **7.1 %** | 46.21 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 35.50 € | **32.00 €** | 19.8 % | **8.0 %** | 32.21 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **92.00 €** | 14.9 % | **10.7 %** | 92.22 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **26.50 €** | 35.3 % | **19.5 %** | 26.90 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 79.90 € | **76.50 €** | 10.1 % | **5.4 %** | 74.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 13.90 € | **10.50 €** | 42.9 % | **7.9 %** | 9.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava príslušenstva pre vysávač MOVA P50 PU, P50 U | 42.90 € | **39.50 €** | 15.5 % | **6.3 %** | 33.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C54 AC1200 Router | 29.90 € | **26.50 €** | 19.2 % | **5.6 %** | 22.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 62.90 € | **59.50 €** | 11.1 % | **5.1 %** | 56.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.90 € | **18.50 €** | 24.8 % | **5.4 %** | 16.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.50 €** | 18.5 % | **8.7 %** | 37.67 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 12.90 € | **9.60 €** | 48.8 % | **10.7 %** | 9.70 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - white | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 227.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - black | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 239.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 52.00 € | **48.90 €** | 22.5 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 162.00 € | **158.90 €** | 7.3 % | **5.2 %** | 156.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka IMOU CE2P, sada 4 ks | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 černá | 63.90 € | **60.90 €** | 10.6 % | **5.4 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 modrá | 63.90 € | **60.90 €** | 10.6 % | **5.4 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 36.50 € | **33.50 €** | 15.3 % | **5.9 %** | 22.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné stropné svietidlo CW Yeelight Meteor C300. | 33.90 € | **30.90 €** | 15.4 % | **5.2 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2904/04 | 69.50 € | **66.50 €** | 10.2 % | **5.5 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **64.90 €** | 10.1 % | **5.2 %** | 60.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi V89 (nerezová oceľ, zlatá... | 33.50 € | **30.50 €** | 15.5 % | **5.2 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN-F16 Flight Joystick for PC | 34.50 € | **31.50 €** | 15.3 % | **5.3 %** | 30.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štúdiové slúchadlá Maono MH700 (čierne) | 34.90 € | **31.90 €** | 15.2 % | **5.3 %** | 31.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 34.50 € | **31.50 €** | 15.1 % | **5.1 %** | 31.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 35.50 € | **32.50 €** | 15.6 % | **5.9 %** | 32.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 35.50 € | **32.50 €** | 15.3 % | **5.6 %** | 32.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO464FR | 62.90 € | **59.90 €** | 10.4 % | **5.1 %** | 59.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **21.50 €** | 38.8 % | **21.8 %** | 21.51 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **118.00 €** | 14.9 % | **12.0 %** | 118.04 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **89.50 €** | 15.1 % | **11.4 %** | 89.54 € | stávame sa najlacnejší |
| ETA Presto 2094 90000, bílý | 97.00 € | **94.00 €** | 9.7 % | **6.3 %** | 94.05 € | stávame sa najlacnejší |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 20.00 € | **17.00 €** | 27.1 % | **8.1 %** | 17.05 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 91.90 € | **88.90 €** | 9.0 % | **5.4 %** | 89.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 35.00 € | **32.00 €** | 43.9 % | **31.5 %** | 32.10 € | stávame sa najlacnejší |
| Gorenje F492PW | 175.50 € | **172.50 €** | 9.0 % | **7.1 %** | 172.70 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 24.50 € | **21.50 €** | 39.6 % | **22.5 %** | 21.90 € | stávame sa najlacnejší |
| Electrolux EHF6547FXK | 224.50 € | **221.50 €** | 9.5 % | **8.0 %** | 221.90 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **66.00 €** | 15.0 % | **10.2 %** | 66.10 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **92.00 €** | 15.2 % | **11.7 %** | 92.22 € | stávame sa najlacnejší |
| Tefal SV9201E0 | 197.90 € | **195.00 €** | 10.2 % | **8.6 %** | 195.50 € | stávame sa najlacnejší |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 39.90 € | **37.00 €** | 16.1 % | **7.7 %** | 37.23 € | stávame sa najlacnejší |
| Strong LEAP-AIR Google TV HDMI TV stick | 61.50 € | **58.90 €** | 10.3 % | **5.6 %** | 49.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 730BT Beige | 58.50 € | **55.90 €** | 10.5 % | **5.6 %** | 48.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 730BT Blue | 58.50 € | **55.90 €** | 10.5 % | **5.6 %** | 48.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Vědro Profi Compact + mop P | 52.50 € | **49.90 €** | 11.0 % | **5.5 %** | 42.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Flex 2 modrá | 59.50 € | **56.90 €** | 10.3 % | **5.5 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dálkový ovladač 4-kan. k pohonu vrat IN SL-600, 1000... | 28.50 € | **25.90 €** | 16.3 % | **5.7 %** | 19.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 670NC white | 63.50 € | **60.90 €** | 9.8 % | **5.3 %** | 57.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Aura 5 ANC | 53.50 € | **50.90 €** | 10.9 % | **5.5 %** | 47.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera autodráha GO Škoda Rally | 59.50 € | **56.90 €** | 10.1 % | **5.3 %** | 53.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100(1-pack) regulácia 23... | 13.50 € | **10.90 €** | 31.3 % | **6.0 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 440 | 107.50 € | **104.90 €** | 10.2 % | **7.5 %** | 105.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 3601 | 101.50 € | **98.90 €** | 10.0 % | **7.2 %** | 99.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 31.00 € | **28.50 €** | 14.6 % | **5.4 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 55.00 € | **52.50 €** | 39.6 % | **33.2 %** | 52.58 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 3 zásuvky IP44, 3 x 2... | 24.00 € | **21.50 €** | 36.3 % | **22.1 %** | 21.67 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 16.50 € | **14.00 €** | 24.9 % | **6.0 %** | 14.19 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 44.9 % | **30.1 %** | 22.20 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **71.00 €** | 10.3 % | **6.5 %** | 71.20 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 16.50 € | **14.00 €** | 36.1 % | **15.4 %** | 14.23 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **20.00 €** | 55.2 % | **37.9 %** | 20.24 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 42.50 € | **40.00 €** | 15.1 % | **8.3 %** | 40.33 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT312A | 284.00 € | **281.50 €** | 15.0 % | **14.0 %** | 281.89 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 160.50 € | **158.00 €** | 10.2 % | **8.5 %** | 158.50 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 161.50 € | **159.00 €** | 10.2 % | **8.5 %** | 159.50 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **83.50 €** | 15.1 % | **11.9 %** | 83.63 € | stávame sa najlacnejší |
| Rowenta 3v1 RH5A32E0 | 119.90 € | **117.50 €** | 10.1 % | **7.9 %** | 117.90 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 12.00 € | **9.60 €** | 37.8 % | **10.2 %** | 9.70 € | stávame sa najlacnejší |
| JBL Wave Buds 2 černá | 49.90 € | **47.50 €** | 10.5 % | **5.2 %** | 37.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP DeskJet 2920 (89F97B) | 50.90 € | **48.50 €** | 10.3 % | **5.1 %** | 40.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 28.90 € | **26.50 €** | 15.1 % | **5.6 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer VR300 VDSL Router | 53.90 € | **51.50 €** | 10.4 % | **5.4 %** | 47.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2877/05 | 49.90 € | **47.50 €** | 10.5 % | **5.2 %** | 46.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (biele) | 25.90 € | **23.50 €** | 15.9 % | **5.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 24.90 € | **22.50 €** | 25.2 % | **13.1 %** | 22.65 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo, 2x zásuvka, vypínač... | 24.90 € | **22.50 €** | 24.7 % | **12.7 %** | 22.68 € | stávame sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 62.90 € | **60.50 €** | 24.0 % | **19.2 %** | 60.69 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.90 € | **19.50 €** | 24.8 % | **11.1 %** | 19.90 € | stávame sa najlacnejší |
| Hlavná kefa pre vysávač MOVA Z50 Ultra | 27.00 € | **24.90 €** | 14.8 % | **5.9 %** | 23.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **25.90 €** | 14.5 % | **5.9 %** | 25.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 29.00 € | **26.90 €** | 27.6 % | **18.3 %** | 26.91 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **14.90 €** | 52.6 % | **33.7 %** | 14.91 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 10.90 € | **8.80 €** | 40.4 % | **13.4 %** | 8.90 € | stávame sa najlacnejší |
| ETA Dita 1603 90000 bílá | 19.99 € | **17.90 €** | 25.9 % | **12.7 %** | 18.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **23.50 €** | 15.8 % | **6.7 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **23.00 €** | 14.5 % | **5.3 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff S60ZBTPF Inteligentná zásuvka ZigBee (2ks) | 26.50 € | **24.50 €** | 14.6 % | **6.0 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Pack 6 MAXTRApro PO 2024 | 39.50 € | **37.50 €** | 11.1 % | **5.5 %** | 26.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DMR7 směrový, pro fotoaparáty, TRS | 73.50 € | **71.50 €** | 8.5 % | **5.5 %** | 61.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **39.90 €** | 10.6 % | **5.3 %** | 35.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAT3509GY Bezdrátová sluchátka | 46.90 € | **44.90 €** | 10.5 % | **5.8 %** | 41.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer AX12 WiFi Router | 42.50 € | **40.50 €** | 10.5 % | **5.3 %** | 36.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO5 Blue | 48.50 € | **46.50 €** | 10.3 % | **5.7 %** | 44.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 57.50 € | **55.50 €** | 8.8 % | **5.0 %** | 54.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Beige | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Blue | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Lavender | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT White | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit 52127 Set Clean Twist M Ergo | 41.90 € | **39.90 €** | 10.3 % | **5.1 %** | 39.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechniSat IMETEO 400 | 31.50 € | **29.50 €** | 12.7 % | **5.5 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 12.50 € | **10.50 €** | 28.0 % | **7.5 %** | 10.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 25.50 € | **23.50 €** | 15.5 % | **6.4 %** | 23.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42602S | 40.50 € | **38.50 €** | 10.9 % | **5.5 %** | 38.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **34.00 €** | 53.5 % | **45.0 %** | 34.01 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **32.50 €** | 14.6 % | **8.0 %** | 32.51 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 72.90 € | **70.90 €** | 17.3 % | **14.1 %** | 70.94 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 36.00 € | **34.00 €** | 18.2 % | **11.6 %** | 34.09 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **65.50 €** | 15.2 % | **11.8 %** | 65.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.50 €** | 14.5 % | **9.4 %** | 42.63 € | stávame sa najlacnejší |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 167.50 € | **165.50 €** | 8.2 % | **6.9 %** | 165.64 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **224.50 €** | 15.0 % | **14.0 %** | 224.66 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 29.50 € | **27.50 €** | 22.1 % | **13.8 %** | 27.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 33.50 € | **31.50 €** | 17.6 % | **10.6 %** | 31.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.50 €** | 15.5 % | **8.6 %** | 31.69 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 601.00 € | **599.00 €** | 10.0 % | **9.6 %** | 599.22 € | stávame sa najlacnejší |
| Barkan 464XL | 125.50 € | **123.50 €** | 24.2 % | **22.2 %** | 123.90 € | stávame sa najlacnejší |
| Ovládacia páka lietadla MOZA RACING MHG | 111.50 € | **109.50 €** | 14.9 % | **12.8 %** | 109.90 € | stávame sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 449.50 € | **447.50 €** | 6.3 % | **5.8 %** | 447.90 € | stávame sa najlacnejší |
| Tefal FF2588E0 | 83.90 € | **82.00 €** | 10.5 % | **8.0 %** | 82.40 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 9.10 € | **7.20 €** | 45.9 % | **15.5 %** | 7.21 € | stávame sa najlacnejší |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 19.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **20.00 €** | 48.6 % | **35.7 %** | 20.15 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 16.90 € | **15.00 €** | 26.5 % | **12.3 %** | 15.50 € | stávame sa najlacnejší |
| SONY WHCH520L.CE7 modrá | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **39.90 €** | 10.0 % | **5.8 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.50 € | **24.90 €** | 13.5 % | **6.6 %** | 21.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2020E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2022E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.50 € | **20.90 €** | 15.0 % | **6.9 %** | 19.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **16.90 €** | 15.3 % | **5.4 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **16.90 €** | 15.3 % | **5.4 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 23.50 € | **21.90 €** | 14.7 % | **6.9 %** | 21.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.90 €** | 15.6 % | **9.1 %** | 26.92 € | stávame sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 12.50 € | **10.90 €** | 23.0 % | **7.3 %** | 7.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **15.90 €** | 16.6 % | **6.0 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 12.50 € | **10.90 €** | 23.6 % | **7.8 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC710N Blue | 68.50 € | **66.90 €** | 10.7 % | **8.1 %** | 66.91 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.90 €** | 15.0 % | **14.1 %** | 207.93 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.90 €** | 15.0 % | **14.1 %** | 203.94 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **106.90 €** | 14.9 % | **13.2 %** | 106.99 € | stávame sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 171.00 € | **169.50 €** | 6.1 % | **5.1 %** | 141.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Crema E Gusto 1000 g | 23.50 € | **22.00 €** | 12.3 % | **5.1 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 19.00 € | **17.50 €** | 16.6 % | **7.4 %** | 12.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Podlahový mop PROFI cotton plus | 30.50 € | **29.00 €** | 10.8 % | **5.3 %** | 25.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **15.00 €** | 16.0 % | **5.5 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **18.00 €** | 15.6 % | **6.7 %** | 18.04 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 31.50 € | **30.00 €** | 12.6 % | **7.2 %** | 30.09 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.00 € | **17.50 €** | 16.5 % | **7.3 %** | 17.60 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 85.00 € | **83.50 €** | 16.2 % | **14.2 %** | 83.63 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 18.50 € | **17.00 €** | 41.2 % | **29.8 %** | 17.16 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 20.00 € | **18.50 €** | 19.0 % | **10.1 %** | 18.69 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 23.50 € | **22.00 €** | 46.5 % | **37.2 %** | 22.20 € | stávame sa najlacnejší |
| Herná myš ONIKUMA DM02 (čierna) | 17.50 € | **16.00 €** | 16.1 % | **6.2 %** | 16.21 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 59.50 € | **58.00 €** | 13.1 % | **10.3 %** | 58.38 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.00 € | **10.50 €** | 37.0 % | **19.9 %** | 10.90 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.00 € | **14.50 €** | 30.9 % | **18.6 %** | 14.90 € | stávame sa najlacnejší |
| JBL Grip Red | 79.00 € | **77.50 €** | 10.3 % | **8.2 %** | 77.90 € | stávame sa najlacnejší |
| JBL Grip White | 79.00 € | **77.50 €** | 10.3 % | **8.2 %** | 77.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 28.00 € | **26.50 €** | 14.7 % | **8.6 %** | 26.90 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 28.50 € | **27.00 €** | 20.1 % | **13.7 %** | 27.50 € | stávame sa najlacnejší |
| Domo DO8719W | 70.50 € | **69.00 €** | 10.7 % | **8.4 %** | 69.50 € | stávame sa najlacnejší |
| Guzzanti GZ 161 | 248.50 € | **247.00 €** | 10.2 % | **9.5 %** | 247.50 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 68.90 € | **67.50 €** | 9.5 % | **7.3 %** | 67.89 € | stávame sa najlacnejší |
| Merač hladiny hluku Uni-T UT35 | 120.90 € | **119.50 €** | 12.8 % | **11.5 %** | 119.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 70.90 € | **69.50 €** | 36.7 % | **34.0 %** | 69.90 € | stávame sa najlacnejší |
| Myš bezdrátová REBEL WM500 | 13.90 € | **12.50 €** | 18.2 % | **6.3 %** | 11.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 11.00 € | **9.60 €** | 36.7 % | **19.3 %** | 9.61 € | stávame sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 11.90 € | **10.50 €** | 20.0 % | **5.9 %** | 10.90 € | stávame sa najlacnejší |
| Yeelight stropný reflektor (jedna žiarovka) biely | 19.90 € | **18.50 €** | 15.7 % | **7.6 %** | 11.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rapoo E9270p bezdrátová klávesnice černá | 37.90 € | **36.50 €** | 10.4 % | **6.4 %** | 30.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAQ2000BK Bezdrátová sluchátka | 36.90 € | **35.50 €** | 10.3 % | **6.1 %** | 31.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PM700 stolní s nastavitelnou směrov... | 40.90 € | **39.50 €** | 8.8 % | **5.1 %** | 37.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.0 % | **5.4 %** | 24.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje H45W | 39.90 € | **38.50 €** | 10.2 % | **6.3 %** | 36.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.90 € | **28.50 €** | 10.7 % | **5.5 %** | 27.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Yogurella 617 | 27.90 € | **26.50 €** | 10.8 % | **5.2 %** | 25.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, černý | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, červený | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, modrý | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16075 | 25.90 € | **24.50 €** | 11.1 % | **5.1 %** | 24.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 24992-70 | 40.90 € | **39.50 €** | 10.1 % | **6.3 %** | 39.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/05 | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 58.90 € | **57.50 €** | 35.6 % | **32.4 %** | 57.55 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 50.90 € | **49.50 €** | 15.1 % | **11.9 %** | 49.67 € | stávame sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.50 €** | 15.2 % | **12.2 %** | 53.68 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 56.90 € | **55.50 €** | 10.0 % | **7.3 %** | 55.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 467.90 € | **466.50 €** | 8.1 % | **7.8 %** | 466.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 560.90 € | **559.50 €** | 7.3 % | **7.1 %** | 559.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 901.90 € | **900.50 €** | 14.6 % | **14.4 %** | 900.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 10.90 € | **9.60 €** | 22.4 % | **7.8 %** | 9.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.50 € | **5.30 €** | 31.1 % | **6.9 %** | 1.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR730200 | 28.00 € | **26.90 €** | 10.2 % | **5.9 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 8500 black | 26.00 € | **24.90 €** | 9.9 % | **5.2 %** | 21.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C320WS | 46.00 € | **44.90 €** | 10.1 % | **7.5 %** | 45.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.20 € | **6.10 €** | 35.8 % | **15.1 %** | 6.20 € | stávame sa najlacnejší |
| Anemometer UNI-T UT363 | 16.00 € | **14.90 €** | 14.0 % | **6.2 %** | 12.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Testovanie zariadenia USB Uni-T UT658LOAD | 16.00 € | **14.90 €** | 14.8 % | **6.9 %** | 13.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WFC710N Black | 68.00 € | **66.90 €** | 9.8 % | **8.1 %** | 66.91 € | stávame sa najlacnejší |
| Slúchadlá Niceboy HIVE Beans Concert | 79.90 € | **78.90 €** | 6.4 % | **5.1 %** | 32.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 54 | 62.50 € | **61.50 €** | 7.1 % | **5.4 %** | 46.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 67W Charging Combo (Type-A) EU | 24.50 € | **23.50 €** | 10.5 % | **6.0 %** | 12.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák Classic 100 Easy | 20.50 € | **19.50 €** | 11.5 % | **6.0 %** | 8.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Coox Quiche forma 3 díly se skleněnou po | 20.90 € | **19.90 €** | 11.1 % | **5.8 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (čierny) | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska cest. PENTA 1,5l ner. | 20.90 € | **19.90 €** | 10.9 % | **5.6 %** | 15.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechnoLine WS 8005 digitální budík | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 17.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-BL | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-TU | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV 1713E0 | 26.50 € | **25.50 €** | 10.5 % | **6.4 %** | 21.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo P100(2-pack)WiFi zásuvka | 24.90 € | **23.90 €** | 11.0 % | **6.5 %** | 20.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 308 Black, 7FP21UE | 21.50 € | **20.50 €** | 10.3 % | **5.2 %** | 17.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament ELEGOO PLA+ (Star Gray) | 10.90 € | **9.90 €** | 16.8 % | **6.0 %** | 6.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Breakfast Toaster 157/03, černý | 23.90 € | **22.90 €** | 11.3 % | **6.6 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK690B černá | 36.90 € | **35.90 €** | 9.1 % | **6.2 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530 Black | 28.50 € | **27.50 €** | 10.7 % | **6.8 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Podsie 4 POP White | 19.50 € | **18.50 €** | 11.8 % | **6.1 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C24 AC750 Router | 23.90 € | **22.90 €** | 10.9 % | **6.3 %** | 20.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska s pum.CUL.1,9l černá | 21.50 € | **20.50 €** | 12.6 % | **7.3 %** | 18.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips SHP2500/10 | 21.90 € | **20.90 €** | 11.5 % | **6.4 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-540BK Black | 18.90 € | **17.90 €** | 11.2 % | **5.3 %** | 16.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslo pro paddleboard REBEL ACTIVE | 20.90 € | **19.90 €** | 11.2 % | **5.9 %** | 18.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-541 Color | 23.50 € | **22.50 €** | 11.5 % | **6.7 %** | 20.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-546 Color | 20.90 € | **19.90 €** | 11.9 % | **6.6 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.50 €** | 8.4 % | **5.3 %** | 33.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gel Blaster Gellet Depot | 24.50 € | **23.50 €** | 11.7 % | **7.2 %** | 22.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **10.90 €** | 15.6 % | **5.9 %** | 9.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mio Smartbox IV | 31.50 € | **30.50 €** | 10.2 % | **6.7 %** | 29.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **16.50 €** | 11.5 % | **5.1 %** | 16.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.0 % | **6.2 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 10.8 % | **5.9 %** | 21.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **25.50 €** | 10.9 % | **6.8 %** | 25.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 24.90 € | **23.90 €** | 9.8 % | **5.4 %** | 23.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EF155 | 10.90 € | **9.90 €** | 15.8 % | **5.2 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.50 €** | 10.5 % | **6.8 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.50 € | **19.50 €** | 11.8 % | **6.3 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 9.20 € | **8.20 €** | 47.8 % | **31.8 %** | 8.21 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 15.00 € | **14.00 €** | 54.0 % | **43.7 %** | 14.02 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 10.00 € | **9.00 €** | 36.4 % | **22.8 %** | 9.04 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **61.50 €** | 15.0 % | **13.1 %** | 61.54 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **11.00 €** | 44.3 % | **32.3 %** | 11.05 € | stávame sa najlacnejší |
| Joystick PXN-2113 PRO Ovládanie letu PC | 31.50 € | **30.50 €** | 14.6 % | **10.9 %** | 30.55 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.58 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **13.50 €** | 54.7 % | **44.0 %** | 13.59 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 77.50 € | **76.50 €** | 10.9 % | **9.5 %** | 76.59 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.50 €** | 44.6 % | **36.3 %** | 16.59 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 21.00 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 21.00 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 21.00 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 21.00 € | stávame sa najlacnejší |
| Ufesa Haku | 30.90 € | **29.90 €** | 11.3 % | **7.7 %** | 30.00 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.90 € | **53.90 €** | 10.5 % | **8.5 %** | 54.00 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash LEO (čierna) | 26.90 € | **25.90 €** | 15.5 % | **11.2 %** | 26.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok z prírodného vosku, 3ks, AAA | 13.50 € | **12.50 €** | 55.2 % | **43.7 %** | 12.61 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **16.00 €** | 15.2 % | **8.4 %** | 16.13 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **11.00 €** | 49.6 % | **37.2 %** | 11.13 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.50 €** | 15.6 % | **13.0 %** | 43.63 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 27.00 € | **26.00 €** | 35.3 % | **30.3 %** | 26.15 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **35.00 €** | 15.0 % | **11.9 %** | 35.17 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 17.50 € | **16.50 €** | 32.7 % | **25.1 %** | 16.69 € | stávame sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 13.00 € | **12.00 €** | 47.8 % | **36.4 %** | 12.20 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 13.00 € | **12.00 €** | 47.8 % | **36.4 %** | 12.20 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 15.00 € | **14.00 €** | 26.0 % | **17.6 %** | 14.21 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **28.00 €** | 14.8 % | **10.9 %** | 28.21 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 28.50 € | **27.50 €** | 15.4 % | **11.4 %** | 27.71 € | stávame sa najlacnejší |
| Redmi Buds 8 Lite Black | 20.50 € | **19.50 €** | 12.2 % | **6.8 %** | 19.80 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 68.50 € | **67.50 €** | 8.1 % | **6.5 %** | 67.89 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 207.50 € | **206.50 €** | 13.5 % | **12.9 %** | 206.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 88.50 € | **87.50 €** | 12.9 % | **11.6 %** | 87.89 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 87.50 € | **86.50 €** | 12.3 % | **11.0 %** | 86.89 € | stávame sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 46.50 € | **45.50 €** | 7.3 % | **5.0 %** | 45.89 € | stávame sa najlacnejší |
| Uni-T UT206B digitálny klešťový multimeter | 65.50 € | **64.50 €** | 8.1 % | **6.5 %** | 64.89 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 107.50 € | **106.50 €** | 11.7 % | **10.7 %** | 106.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 243.50 € | **242.50 €** | 14.0 % | **13.6 %** | 242.89 € | stávame sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 101.50 € | **100.50 €** | 11.4 % | **10.3 %** | 100.89 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 191.50 € | **190.50 €** | 13.2 % | **12.6 %** | 190.89 € | stávame sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 669.50 € | **668.50 €** | 5.4 % | **5.2 %** | 668.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 93.50 € | **92.50 €** | 8.4 % | **7.2 %** | 92.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 129.50 € | **128.50 €** | 13.4 % | **12.5 %** | 128.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 83.50 € | **82.50 €** | 10.5 % | **9.1 %** | 82.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 59.50 € | **58.50 €** | 9.3 % | **7.5 %** | 58.89 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 51.50 € | **50.50 €** | 7.6 % | **5.5 %** | 50.89 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 99.50 € | **98.50 €** | 11.0 % | **9.9 %** | 98.89 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 183.50 € | **182.50 €** | 9.1 % | **8.5 %** | 182.89 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 72.50 € | **71.50 €** | 7.9 % | **6.4 %** | 71.89 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 141.50 € | **140.50 €** | 12.8 % | **12.0 %** | 140.89 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 256.50 € | **255.50 €** | 13.5 % | **13.1 %** | 255.89 € | stávame sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 101.50 € | **100.50 €** | 11.8 % | **10.7 %** | 100.89 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 149.50 € | **148.50 €** | 12.3 % | **11.5 %** | 148.89 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 508.50 € | **507.50 €** | 9.7 % | **9.5 %** | 507.89 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 31.50 € | **30.50 €** | 36.4 % | **32.1 %** | 30.90 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.50 € | **11.50 €** | 33.2 % | **22.5 %** | 11.90 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.50 € | **15.50 €** | 18.0 % | **10.8 %** | 15.90 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 35.50 € | **34.50 €** | 28.7 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 18.50 € | **17.50 €** | 26.5 % | **19.7 %** | 17.90 € | stávame sa najlacnejší |
| NEDIS SAMP42222WT domovní zesilovač (1x vstup, 2x vý... | 21.50 € | **20.50 €** | 14.7 % | **9.4 %** | 20.90 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 230.00 € | **229.00 €** | 8.3 % | **7.8 %** | 229.50 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 83.90 € | **83.00 €** | 10.2 % | **9.0 %** | 83.20 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 69.90 € | **69.00 €** | 11.8 % | **10.3 %** | 69.32 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 84.90 € | **84.00 €** | 12.3 % | **11.2 %** | 84.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 132.90 € | **132.00 €** | 11.1 % | **10.4 %** | 132.39 € | stávame sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 81.90 € | **81.00 €** | 10.9 % | **9.7 %** | 81.39 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 135.90 € | **135.00 €** | 13.4 % | **12.7 %** | 135.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 91.90 € | **91.00 €** | 12.3 % | **11.2 %** | 91.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 88.90 € | **88.00 €** | 14.0 % | **12.8 %** | 88.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 71.90 € | **71.00 €** | 11.8 % | **10.4 %** | 71.39 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 79.90 € | **79.00 €** | 11.0 % | **9.8 %** | 79.39 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 167.90 € | **167.00 €** | 13.4 % | **12.8 %** | 167.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 116.90 € | **116.00 €** | 12.9 % | **12.0 %** | 116.39 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **77.00 €** | 15.0 % | **13.7 %** | 77.39 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 124.90 € | **124.00 €** | 14.6 % | **13.8 %** | 124.39 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 68.90 € | **68.00 €** | 11.2 % | **9.8 %** | 68.49 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 124.90 € | **124.00 €** | 7.3 % | **6.5 %** | 124.49 € | stávame sa najlacnejší |
| Maxxo INFRA DRY+ | 193.90 € | **193.00 €** | 10.1 % | **9.6 %** | 193.50 € | stávame sa najlacnejší |
| Fixed Video kabel FIXHU-CHDMI-GR | 15.90 € | **15.00 €** | 11.5 % | **5.2 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament ELEGOO PETG Pro (biely) | 10.50 € | **9.60 €** | 15.2 % | **5.3 %** | 6.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR740001 | 15.90 € | **15.00 €** | 11.8 % | **5.5 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 11.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **12.00 €** | 46.9 % | **36.6 %** | 12.02 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **14.00 €** | 21.6 % | **14.3 %** | 14.04 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 300lm, Cree, zoom, ... | 11.90 € | **11.00 €** | 56.0 % | **44.2 %** | 11.06 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 43.90 € | **43.00 €** | 8.4 % | **6.2 %** | 43.09 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1016 | 19.90 € | **19.00 €** | 14.6 % | **9.4 %** | 19.16 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 29.90 € | **29.00 €** | 32.3 % | **28.3 %** | 29.19 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.7 % | **9.6 %** | 24.19 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.7 % | **9.6 %** | 24.19 € | stávame sa najlacnejší |
| D-LINK Mobile WiFi 4G Hotspot (DWR-932) | 36.90 € | **36.00 €** | 10.0 % | **7.3 %** | 36.20 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **38.00 €** | 10.1 % | **7.5 %** | 38.20 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 58.90 € | **58.00 €** | 13.0 % | **11.2 %** | 58.29 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 38.90 € | **38.00 €** | 9.8 % | **7.2 %** | 38.39 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 56.90 € | **56.00 €** | 9.7 % | **8.0 %** | 56.39 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 23.90 € | **23.00 €** | 12.7 % | **8.5 %** | 23.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 31.90 € | **31.00 €** | 13.0 % | **9.8 %** | 31.49 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.00 €** | 11.0 % | **7.7 %** | 29.50 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.90 € | **52.00 €** | 10.8 % | **8.9 %** | 52.50 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.00 €** | 10.2 % | **7.5 %** | 36.50 € | stávame sa najlacnejší |
| Tefal Copertinto BL439G10 | 59.90 € | **59.00 €** | 10.5 % | **8.8 %** | 59.50 € | stávame sa najlacnejší |
| Domo DO733K | 47.90 € | **47.00 €** | 10.8 % | **8.7 %** | 47.50 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.00 €** | 10.7 % | **7.9 %** | 35.50 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.00 €** | 10.1 % | **6.4 %** | 26.50 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 568.90 € | **568.00 €** | 6.8 % | **6.7 %** | 568.43 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.80 € | **4.00 €** | 33.6 % | **11.4 %** | 4.01 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.70 €** | 55.8 % | **33.1 %** | 4.74 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **4.00 €** | 45.3 % | **23.7 %** | 4.01 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **1.70 €** | 57.4 % | **11.5 %** | 0.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 10.50 € | **9.80 €** | 27.0 % | **18.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.50 €** | 47.8 % | **35.2 %** | 7.60 € | stávame sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.90 €** | 10.2 % | **6.9 %** | 19.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 17.50 € | **16.90 €** | 10.8 % | **7.0 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 50.50 € | **49.90 €** | 6.9 % | **5.6 %** | 49.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.93 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.90 €** | 15.5 % | **14.0 %** | 44.93 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 18.50 € | **17.90 €** | 38.9 % | **34.4 %** | 17.94 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 39.50 € | **38.90 €** | 7.5 % | **5.9 %** | 38.99 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **18.90 €** | 12.4 % | **9.0 %** | 19.00 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **22.90 €** | 11.9 % | **9.1 %** | 23.00 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **23.90 €** | 11.5 % | **8.7 %** | 24.00 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **22.90 €** | 11.8 % | **8.9 %** | 23.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.30 € | **7.70 €** | 47.0 % | **36.4 %** | 7.72 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 7.70 € | **7.10 €** | 48.0 % | **36.5 %** | 7.12 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **7.70 €** | 55.5 % | **44.2 %** | 7.74 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **5.80 €** | 28.5 % | **16.4 %** | 5.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **5.80 €** | 28.5 % | **16.4 %** | 5.90 € | stávame sa najlacnejší |
| JBL Tune110 white | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 7.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 655 Yellow, CZ112AE | 16.50 € | **15.90 €** | 10.9 % | **6.8 %** | 13.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WR820N WiFi N Router | 14.50 € | **13.90 €** | 12.3 % | **7.6 %** | 11.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo L530E | 11.50 € | **10.90 €** | 11.4 % | **5.6 %** | 9.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Bluetooth Speaker Essential Green | 12.50 € | **11.90 €** | 13.9 % | **8.5 %** | 11.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **11.90 €** | 12.5 % | **7.1 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 černá | 16.50 € | **15.90 €** | 10.6 % | **6.6 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.60 € | **4.00 €** | 53.9 % | **33.8 %** | 4.01 € | stávame sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.90 €** | 16.1 % | **10.6 %** | 11.92 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **12.90 €** | 13.2 % | **8.1 %** | 13.00 € | stávame sa najlacnejší |
| Leifheit Čistič na okna s rozprašovačem | 10.50 € | **9.90 €** | 14.0 % | **7.5 %** | 10.00 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 16.50 € | **15.90 €** | 23.5 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash F1 (biela) + 6 ventiláto... | 116.50 € | **115.90 €** | 15.0 % | **14.4 %** | 115.93 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 75.50 € | **74.90 €** | 8.2 % | **7.3 %** | 74.94 € | stávame sa najlacnejší |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 75.50 € | **74.90 €** | 10.5 % | **9.6 %** | 75.00 € | stávame sa najlacnejší |
| Ariete Ice Machine 651 | 99.50 € | **98.90 €** | 10.4 % | **9.7 %** | 99.00 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 109.50 € | **108.90 €** | 10.4 % | **9.8 %** | 109.00 € | stávame sa najlacnejší |
| Sušička ovoce Ruhhy 25928 400W | 50.50 € | **50.00 €** | 6.2 % | **5.2 %** | 42.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente IceQueen černá | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-545BK Black | 17.00 € | **16.50 €** | 10.6 % | **7.3 %** | 15.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 22.5W Power Bank 20000mAh Gray | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 19.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 103.50 € | **103.00 €** | 5.5 % | **5.0 %** | 102.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 8.60 € | **8.10 €** | 45.1 % | **36.6 %** | 8.11 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 600mA, stabilizo... | 7.70 € | **7.20 €** | 46.3 % | **36.8 %** | 7.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 479.50 € | **479.00 €** | 6.2 % | **6.1 %** | 479.01 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.90 €** | 55.3 % | **32.5 %** | 2.92 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.42 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **6.10 €** | 47.0 % | **35.9 %** | 6.12 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 20.00 € | **19.50 €** | 16.5 % | **13.6 %** | 19.53 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.60 €** | 55.2 % | **44.2 %** | 6.63 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 61.50 € | **61.00 €** | 19.8 % | **18.9 %** | 61.03 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.20 €** | 46.8 % | **35.9 %** | 6.24 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.50 €** | 14.9 % | **13.8 %** | 50.56 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.50 €** | 13.6 % | **10.5 %** | 17.58 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.50 € | **23.00 €** | 19.3 % | **16.7 %** | 23.09 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 52.50 € | **52.00 €** | 8.4 % | **7.3 %** | 52.09 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.50 €** | 14.6 % | **11.9 %** | 20.60 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.50 €** | 14.7 % | **12.1 %** | 21.63 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 15.50 € | **15.00 €** | 60.5 % | **55.4 %** | 15.13 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **32.00 €** | 14.7 % | **13.0 %** | 32.13 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 195.50 € | **195.00 €** | 10.0 % | **9.8 %** | 195.14 € | stávame sa najlacnejší |
| Smart Scene Wall Switch WiFi Sonoff M5 3C (3-channel) | 16.50 € | **16.00 €** | 14.9 % | **11.4 %** | 16.15 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.50 €** | 13.7 % | **10.2 %** | 15.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 45.50 € | **45.00 €** | 8.2 % | **7.0 %** | 45.19 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **11.00 €** | 38.5 % | **32.5 %** | 11.20 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 34.50 € | **34.00 €** | 10.0 % | **8.4 %** | 34.20 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 13.50 € | **13.00 €** | 33.4 % | **28.4 %** | 13.20 € | stávame sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 120.50 € | **120.00 €** | 10.4 % | **9.9 %** | 120.23 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 300.00 € | **299.50 €** | 6.3 % | **6.1 %** | 299.74 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 300.00 € | **299.50 €** | 6.3 % | **6.1 %** | 299.74 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 45.50 € | **45.00 €** | 8.5 % | **7.4 %** | 45.25 € | stávame sa najlacnejší |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 23.50 € | **23.00 €** | 11.2 % | **8.8 %** | 23.25 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.50 € | **155.00 €** | 14.4 % | **14.0 %** | 155.25 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.1 % | **9.5 %** | 33.25 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **14.00 €** | 16.5 % | **12.5 %** | 14.25 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **19.00 €** | 14.1 % | **11.2 %** | 19.25 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **19.00 €** | 16.3 % | **13.3 %** | 19.25 € | stávame sa najlacnejší |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.50 € | **55.00 €** | 16.8 % | **15.8 %** | 55.25 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 181.50 € | **181.00 €** | 8.3 % | **8.1 %** | 181.25 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.50 € | **10.00 €** | 48.5 % | **41.4 %** | 10.26 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **13.00 €** | 47.1 % | **41.7 %** | 13.26 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 62.50 € | **62.00 €** | 39.3 % | **38.2 %** | 62.26 € | stávame sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 14.50 € | **14.00 €** | 35.7 % | **31.0 %** | 14.27 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **14.00 €** | 47.4 % | **42.3 %** | 14.27 € | stávame sa najlacnejší |
| Lenovo Folio Keyboard for IdeaTab Grey | 29.50 € | **29.00 €** | 10.4 % | **8.5 %** | 29.27 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 22.50 € | **22.00 €** | 9.7 % | **7.3 %** | 22.27 € | stávame sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 268.00 € | **267.50 €** | 7.4 % | **7.2 %** | 267.77 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 21.50 € | **21.00 €** | 46.5 % | **43.1 %** | 21.28 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 17.50 € | **17.00 €** | 43.6 % | **39.5 %** | 17.28 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 26.50 € | **26.00 €** | 9.6 % | **7.6 %** | 26.29 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 13.50 € | **13.00 €** | 47.3 % | **41.9 %** | 13.29 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.50 € | **43.00 €** | 13.9 % | **12.6 %** | 43.29 € | stávame sa najlacnejší |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 23.50 € | **23.00 €** | 46.3 % | **43.2 %** | 23.29 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.7 % | **8.3 %** | 10.29 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.3 % | **8.0 %** | 16.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 13.7 % | **9.5 %** | 13.29 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 12.50 € | **12.00 €** | 13.3 % | **8.8 %** | 12.29 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 9.8 % | **8.1 %** | 33.29 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.50 € | **65.00 €** | 9.5 % | **8.7 %** | 65.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 9.9 % | **7.5 %** | 23.29 € | stávame sa najlacnejší |
| Router GL.iNet Slate 7 | 208.00 € | **207.50 €** | 14.9 % | **14.6 %** | 207.79 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 36.50 € | **36.00 €** | 7.6 % | **6.1 %** | 36.29 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 13.00 € | **12.50 €** | 21.3 % | **16.7 %** | 12.79 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 56.50 € | **56.00 €** | 8.6 % | **7.6 %** | 56.29 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 31.50 € | **31.00 €** | 7.6 % | **5.9 %** | 31.29 € | stávame sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.50 € | **12.00 €** | 11.7 % | **7.2 %** | 12.29 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.50 € | **85.00 €** | 15.3 % | **14.6 %** | 85.29 € | stávame sa najlacnejší |
| Solight projekčné hodiny s meteostanicou | 27.50 € | **27.00 €** | 51.2 % | **48.4 %** | 27.29 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.50 € | **37.00 €** | 21.6 % | **19.9 %** | 37.29 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 138.50 € | **138.00 €** | 15.6 % | **15.1 %** | 138.29 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 52.50 € | **52.00 €** | 6.7 % | **5.7 %** | 52.29 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **12.00 €** | 14.4 % | **9.9 %** | 12.29 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.0 % | **9.5 %** | 22.30 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.50 € | **28.00 €** | 33.0 % | **30.7 %** | 28.30 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 161.50 € | **161.00 €** | 9.0 % | **8.7 %** | 161.30 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 69.50 € | **69.00 €** | 6.4 % | **5.6 %** | 69.30 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 247.50 € | **247.00 €** | 8.1 % | **7.9 %** | 247.30 € | stávame sa najlacnejší |
| G3Ferrari G1015502 Mikrovlnná trouba | 118.50 € | **118.00 €** | 10.5 % | **10.0 %** | 118.30 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 171.50 € | **171.00 €** | 9.3 % | **9.0 %** | 171.30 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 294.50 € | **294.00 €** | 8.1 % | **8.0 %** | 294.30 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 470.50 € | **470.00 €** | 7.1 % | **6.9 %** | 470.30 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 338.50 € | **338.00 €** | 7.1 % | **6.9 %** | 338.30 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **16.00 €** | 38.0 % | **33.8 %** | 16.32 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.50 € | **22.00 €** | 11.2 % | **8.7 %** | 22.32 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 10.50 € | **10.00 €** | 47.4 % | **40.4 %** | 10.33 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **15.00 €** | 16.8 % | **13.0 %** | 15.33 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 25.50 € | **25.00 €** | 40.0 % | **37.2 %** | 25.33 € | stávame sa najlacnejší |
| Elektrický masážny prístroj na tvár Guasha ANLAN 02-... | 35.50 € | **35.00 €** | 15.5 % | **13.9 %** | 35.33 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 11.7 % | **6.8 %** | 11.33 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 21.50 € | **21.00 €** | 12.1 % | **9.5 %** | 21.33 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 103.00 € | **102.50 €** | 30.6 % | **30.0 %** | 102.83 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 415.50 € | **415.00 €** | 7.3 % | **7.2 %** | 415.33 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.50 € | **49.00 €** | 38.6 % | **37.2 %** | 49.34 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 40.50 € | **40.00 €** | 36.7 % | **35.1 %** | 40.34 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 348.50 € | **348.00 €** | 13.1 % | **12.9 %** | 348.34 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 32.50 € | **32.00 €** | 33.2 % | **31.2 %** | 32.35 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA520 Umývateľný HEPA fi... | 20.50 € | **20.00 €** | 13.4 % | **10.6 %** | 20.35 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA310 Umývateľná mopovac... | 20.50 € | **20.00 €** | 13.4 % | **10.6 %** | 20.35 € | stávame sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Nikon | 266.50 € | **266.00 €** | 10.5 % | **10.3 %** | 266.35 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.50 € | **23.00 €** | 16.5 % | **14.0 %** | 23.35 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 12.50 € | **12.00 €** | 44.6 % | **38.8 %** | 12.36 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.50 € | **26.00 €** | 37.0 % | **34.4 %** | 26.36 € | stávame sa najlacnejší |
| Pedrini Infinity červená 6 porcí | 36.50 € | **36.00 €** | 11.3 % | **9.7 %** | 36.36 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 71.50 € | **71.00 €** | 9.3 % | **8.5 %** | 71.36 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 322.50 € | **322.00 €** | 10.6 % | **10.5 %** | 322.36 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 322.50 € | **322.00 €** | 10.6 % | **10.5 %** | 322.36 € | stávame sa najlacnejší |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.50 € | **11.00 €** | 25.8 % | **20.4 %** | 11.36 € | stávame sa najlacnejší |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.50 € | **85.00 €** | 20.2 % | **19.5 %** | 85.37 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **18.00 €** | 39.0 % | **35.3 %** | 18.38 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 10.6 % | **7.2 %** | 16.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.3 % | **7.9 %** | 22.38 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 9.7 % | **7.9 %** | 29.38 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **60.00 €** | 10.0 % | **9.1 %** | 60.38 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 28.50 € | **28.00 €** | 7.1 % | **5.2 %** | 28.38 € | stávame sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierne) | 28.50 € | **28.00 €** | 8.6 % | **6.7 %** | 28.38 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 176.50 € | **176.00 €** | 11.1 % | **10.8 %** | 176.38 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 90.50 € | **90.00 €** | 12.0 % | **11.4 %** | 90.38 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 181.50 € | **181.00 €** | 9.3 % | **9.0 %** | 181.38 € | stávame sa najlacnejší |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 70.50 € | **70.00 €** | 12.7 % | **11.9 %** | 70.38 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.50 € | **20.00 €** | 8.3 % | **5.6 %** | 20.38 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 17.00 € | **16.50 €** | 25.2 % | **21.5 %** | 16.89 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 71.50 € | **71.00 €** | 39.3 % | **38.4 %** | 71.39 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1298.00 € | **1297.50 €** | 7.4 % | **7.3 %** | 1297.89 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 205.50 € | **205.00 €** | 7.6 % | **7.3 %** | 205.39 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 279.50 € | **279.00 €** | 8.7 % | **8.5 %** | 279.39 € | stávame sa najlacnejší |
| ALI MiTag set 3ks Google Find My APD006 | 36.50 € | **36.00 €** | 6.6 % | **5.1 %** | 36.39 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 279.50 € | **279.00 €** | 7.4 % | **7.2 %** | 279.39 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.50 € | **22.00 €** | 13.1 % | **10.6 %** | 22.39 € | stávame sa najlacnejší |
| DC-DC nabíječka Orion-Tr Smart 12/12-30A (360W) neiz... | 226.50 € | **226.00 €** | 5.5 % | **5.2 %** | 226.39 € | stávame sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (DGS-105) | 16.00 € | **15.50 €** | 10.2 % | **6.8 %** | 15.89 € | stávame sa najlacnejší |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.50 € | **39.00 €** | 15.6 % | **14.2 %** | 39.39 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 28.50 € | **28.00 €** | 19.4 % | **17.3 %** | 28.39 € | stávame sa najlacnejší |
| Status STA 177159 | 11.00 € | **10.50 €** | 11.0 % | **5.9 %** | 10.90 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 21.00 € | **20.50 €** | 37.4 % | **34.1 %** | 20.90 € | stávame sa najlacnejší |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 42.00 € | **41.50 €** | 17.5 % | **16.1 %** | 41.90 € | stávame sa najlacnejší |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 30.50 € | **30.00 €** | 37.5 % | **35.3 %** | 30.40 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 176.50 € | **176.00 €** | 8.7 % | **8.4 %** | 176.40 € | stávame sa najlacnejší |
| Beper BEP-BP654 | 27.00 € | **26.50 €** | 10.4 % | **8.3 %** | 26.90 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 231.00 € | **230.50 €** | 17.4 % | **17.1 %** | 230.90 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 231.00 € | **230.50 €** | 17.4 % | **17.1 %** | 230.90 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 231.00 € | **230.50 €** | 17.4 % | **17.1 %** | 230.90 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 210.00 € | **209.50 €** | 17.4 % | **17.1 %** | 209.90 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 210.00 € | **209.50 €** | 17.4 % | **17.1 %** | 209.90 € | stávame sa najlacnejší |
| ETA 410090000 | 331.50 € | **331.00 €** | 7.0 % | **6.8 %** | 331.40 € | stávame sa najlacnejší |
| Ariete SteamStyle 4301, violet | 33.00 € | **32.50 €** | 10.3 % | **8.6 %** | 32.90 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 143.00 € | **142.50 €** | 6.9 % | **6.6 %** | 142.90 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 40 x 50 cm, 50 ks, hladké | 12.00 € | **11.50 €** | 16.4 % | **11.6 %** | 11.90 € | stávame sa najlacnejší |
| Beper 50451 Tyčový Vakuový Vysavač S He | 52.00 € | **51.50 €** | 10.2 % | **9.1 %** | 51.90 € | stávame sa najlacnejší |
| Bravo B-4813 Žehlička SERENA červená | 46.00 € | **45.50 €** | 10.1 % | **8.9 %** | 45.90 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.50 € | **41.00 €** | 8.3 % | **7.0 %** | 41.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 40.50 € | **40.00 €** | 8.2 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 40.50 € | **40.00 €** | 8.2 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 40.50 € | **40.00 €** | 8.2 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 46.00 € | **45.50 €** | 9.1 % | **7.9 %** | 45.90 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **105.00 €** | 10.1 % | **9.6 %** | 105.40 € | stávame sa najlacnejší |
| Gorenje GECS5C70XPA | 473.50 € | **473.00 €** | 7.1 % | **6.9 %** | 473.40 € | stávame sa najlacnejší |
| Concept IDV5160wh | 354.50 € | **354.00 €** | 7.0 % | **6.9 %** | 354.40 € | stávame sa najlacnejší |
| Electrolux LIB60420CK | 205.50 € | **205.00 €** | 8.3 % | **8.0 %** | 205.40 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.50 € | **139.00 €** | 8.2 % | **7.8 %** | 139.41 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 14.50 € | **14.00 €** | 34.1 % | **29.5 %** | 14.41 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.50 € | **42.00 €** | 9.5 % | **8.2 %** | 42.41 € | stávame sa najlacnejší |
| Webová kamera EMEET SmartCam S600L | 60.50 € | **60.00 €** | 6.8 % | **5.9 %** | 60.41 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Night 160 ml | 11.50 € | **11.00 €** | 17.8 % | **12.6 %** | 11.42 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.50 € | **17.00 €** | 13.6 % | **10.4 %** | 17.42 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **113.00 €** | 10.0 % | **9.5 %** | 113.42 € | stávame sa najlacnejší |
| Electrolux EF167 | 14.50 € | **14.00 €** | 12.3 % | **8.4 %** | 14.42 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 14.50 € | **14.00 €** | 12.3 % | **8.4 %** | 14.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 12.9 % | **8.0 %** | 11.42 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **10.00 €** | 12.9 % | **7.5 %** | 10.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 24.50 € | **24.00 €** | 10.5 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 24.50 € | **24.00 €** | 10.5 % | **8.2 %** | 24.42 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **21.00 €** | 15.1 % | **12.4 %** | 21.42 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 173.50 € | **173.00 €** | 9.2 % | **8.9 %** | 173.42 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.50 € | **22.00 €** | 8.2 % | **5.8 %** | 22.42 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 17.50 € | **17.00 €** | 14.3 % | **11.0 %** | 17.43 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 81.50 € | **81.00 €** | 9.5 % | **8.8 %** | 81.43 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **29.00 €** | 14.9 % | **13.0 %** | 29.44 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 168.50 € | **168.00 €** | 16.4 % | **16.1 %** | 168.44 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.50 € | **26.00 €** | 42.7 % | **40.0 %** | 26.44 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 626.50 € | **626.00 €** | 9.2 % | **9.1 %** | 626.44 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 22.50 € | **22.00 €** | 33.5 % | **30.6 %** | 22.45 € | stávame sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 554.50 € | **554.00 €** | 11.4 % | **11.3 %** | 554.45 € | stávame sa najlacnejší |
| FoodSaver FFC025X | 26.50 € | **26.00 €** | 11.8 % | **9.7 %** | 26.46 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 9.9 % | **8.4 %** | 36.46 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Fashion Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| Solight high bay, 200W, 28000lm, 120°, Meanwell,  50... | 94.50 € | **94.00 €** | 20.0 % | **19.4 %** | 94.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 9.9 % | **6.9 %** | 18.46 € | stávame sa najlacnejší |
| DOMO DO9283EK | 18.50 € | **18.00 €** | 12.7 % | **9.7 %** | 18.46 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne | 28.50 € | **28.00 €** | 8.7 % | **6.8 %** | 28.46 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI C28 Gold | 28.50 € | **28.00 €** | 8.7 % | **6.8 %** | 28.46 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 40.50 € | **40.00 €** | 11.4 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 40.50 € | **40.00 €** | 11.4 % | **10.1 %** | 40.46 € | stávame sa najlacnejší |
| Guzzanti GZ 06A1 | 105.50 € | **105.00 €** | 7.9 % | **7.4 %** | 105.46 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.50 € | **22.00 €** | 38.4 % | **35.3 %** | 22.47 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.50 € | **27.00 €** | 34.4 % | **32.0 %** | 27.47 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 89.50 € | **89.00 €** | 7.0 % | **6.4 %** | 89.47 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.50 € | **33.00 €** | 33.4 % | **31.5 %** | 33.48 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **19.00 €** | 38.3 % | **34.8 %** | 19.48 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 13.50 € | **13.00 €** | 38.9 % | **33.8 %** | 13.48 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.50 € | **11.00 €** | 41.2 % | **35.1 %** | 11.49 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.50 € | **16.00 €** | 35.4 % | **31.3 %** | 16.49 € | stávame sa najlacnejší |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **10.00 €** | 33.0 % | **26.6 %** | 10.49 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 113.50 € | **113.00 €** | 9.0 % | **8.6 %** | 113.49 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 248.50 € | **248.00 €** | 9.4 % | **9.2 %** | 248.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **28.00 €** | 16.0 % | **14.0 %** | 28.49 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.50 € | **23.00 €** | 8.3 % | **6.0 %** | 23.49 € | stávame sa najlacnejší |
| TESLA TE-344 venkovní anténa | 27.50 € | **27.00 €** | 46.0 % | **43.4 %** | 27.49 € | stávame sa najlacnejší |
| Motorcycle Intercom EJEAS MS8-SE | 86.90 € | **86.50 €** | 15.1 % | **14.6 %** | 86.67 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.90 € | **110.50 €** | 10.2 % | **9.8 %** | 110.70 € | stávame sa najlacnejší |
| GUZZANTI GZ 8501A | 150.90 € | **150.50 €** | 5.4 % | **5.1 %** | 150.71 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (žltý) | 159.90 € | **159.50 €** | 14.0 % | **13.7 %** | 159.72 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 97.90 € | **97.50 €** | 20.2 % | **19.7 %** | 97.74 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 250.90 € | **250.50 €** | 7.6 % | **7.5 %** | 250.76 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 78.90 € | **78.50 €** | 7.5 % | **7.0 %** | 78.78 € | stávame sa najlacnejší |
| DOMO DO42329PC | 115.90 € | **115.50 €** | 8.4 % | **8.0 %** | 115.79 € | stávame sa najlacnejší |
| DOMO DO354VD | 130.90 € | **130.50 €** | 8.5 % | **8.2 %** | 130.79 € | stávame sa najlacnejší |
| DOMO DO9286IB | 249.90 € | **249.50 €** | 6.6 % | **6.5 %** | 249.79 € | stávame sa najlacnejší |
| DOMO DO42102SV | 97.90 € | **97.50 €** | 8.0 % | **7.5 %** | 97.79 € | stávame sa najlacnejší |
| PRIMO PR406IM | 125.90 € | **125.50 €** | 7.6 % | **7.2 %** | 125.79 € | stávame sa najlacnejší |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.90 € | **83.50 €** | 18.1 % | **17.5 %** | 83.79 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 11.6 % | **11.2 %** | 113.79 € | stávame sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 82.90 € | **82.50 €** | 8.0 % | **7.5 %** | 82.79 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 124.90 € | **124.50 €** | 7.0 % | **6.7 %** | 124.79 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 137.90 € | **137.50 €** | 9.1 % | **8.8 %** | 137.80 € | stávame sa najlacnejší |
| G3Ferrari G10152 horkovzdušná trouba | 146.90 € | **146.50 €** | 9.1 % | **8.8 %** | 146.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 96.90 € | **96.50 €** | 33.4 % | **32.8 %** | 96.81 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 64.90 € | **64.50 €** | 7.9 % | **7.3 %** | 64.83 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 124.90 € | **124.50 €** | 10.3 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 103.90 € | **103.50 €** | 13.2 % | **12.8 %** | 103.83 € | stávame sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 68.90 € | **68.50 €** | 7.1 % | **6.5 %** | 68.87 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 206.90 € | **206.50 €** | 8.1 % | **7.9 %** | 206.87 € | stávame sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 99.90 € | **99.50 €** | 6.7 % | **6.3 %** | 99.88 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 101.90 € | **101.50 €** | 12.3 % | **11.8 %** | 101.88 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 233.90 € | **233.50 €** | 9.5 % | **9.4 %** | 233.88 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 111.90 € | **111.50 €** | 6.7 % | **6.3 %** | 111.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 189.90 € | **189.50 €** | 8.1 % | **7.8 %** | 189.89 € | stávame sa najlacnejší |
| Nescafé Dolce Gusto Latte Macchiato 30ca | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 4.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Plus WiFi Adaptér | 14.90 € | **14.50 €** | 11.0 % | **8.1 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto ESPRESSO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAFE AU LAIT 30Cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESCAFÉ® DG Flat White kapsle 30 ks | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo TopSound černý | 12.90 € | **12.50 €** | 10.1 % | **6.6 %** | 10.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON GI-41 BK Black | 10.90 € | **10.50 €** | 13.9 % | **9.7 %** | 8.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdr XRN14P5G/PX7 FIXOP3-1432-BK | 11.90 € | **11.50 €** | 10.1 % | **6.4 %** | 10.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAPPUCCINO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 9.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.40 € | **5.00 €** | 47.3 % | **36.4 %** | 5.01 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.60 €** | 50.8 % | **44.8 %** | 9.61 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **9.00 €** | 48.4 % | **42.1 %** | 9.02 € | stávame sa najlacnejší |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.50 € | **5.10 €** | 46.6 % | **35.9 %** | 5.14 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.60 €** | 56.3 % | **43.8 %** | 4.64 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **6.10 €** | 45.2 % | **36.2 %** | 6.14 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 10.00 € | **9.60 €** | 26.2 % | **21.2 %** | 9.69 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.50 €** | 40.4 % | **35.3 %** | 10.60 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **12.50 €** | 47.3 % | **42.7 %** | 12.70 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 13.90 € | **13.50 €** | 14.6 % | **11.3 %** | 13.71 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 13.8 % | **10.0 %** | 11.71 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **13.50 €** | 20.3 % | **16.9 %** | 13.71 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.50 €** | 17.1 % | **12.8 %** | 10.72 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.90 € | **12.50 €** | 34.5 % | **30.3 %** | 12.73 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 11.90 € | **11.50 €** | 9.1 % | **5.4 %** | 11.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **14.50 €** | 49.2 % | **45.2 %** | 14.77 € | stávame sa najlacnejší |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 11.90 € | **11.50 €** | 9.9 % | **6.2 %** | 11.77 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.79 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.79 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 12.9 % | **9.1 %** | 11.79 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.50 €** | 16.5 % | **13.2 %** | 13.79 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 11.90 € | **11.50 €** | 17.1 % | **13.2 %** | 11.79 € | stávame sa najlacnejší |
| Selfie tyč Puluz pre Insta360 One RS / X2 / X3 / X4 ... | 12.90 € | **12.50 €** | 15.3 % | **11.7 %** | 12.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 680 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.90 € | **10.50 €** | 38.0 % | **33.0 %** | 10.81 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 13.90 € | **13.50 €** | 13.5 % | **10.2 %** | 13.83 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.50 €** | 20.5 % | **16.4 %** | 11.84 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.90 € | **13.50 €** | 39.9 % | **35.8 %** | 13.84 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 11.90 € | **11.50 €** | 38.6 % | **33.9 %** | 11.86 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **10.50 €** | 45.5 % | **40.2 %** | 10.86 € | stávame sa najlacnejší |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 11.90 € | **11.50 €** | 9.4 % | **5.8 %** | 11.86 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.90 € | **12.50 €** | 38.5 % | **34.2 %** | 12.87 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.90 € | **12.50 €** | 38.5 % | **34.2 %** | 12.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.90 € | **13.50 €** | 35.8 % | **31.9 %** | 13.88 € | stávame sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 9.8 % | **6.9 %** | 14.88 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 12.90 € | **12.50 €** | 9.9 % | **6.5 %** | 12.89 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.90 € | **14.50 €** | 15.7 % | **12.6 %** | 14.89 € | stávame sa najlacnejší |
| Laica VT3509 | 11.90 € | **11.50 €** | 9.6 % | **5.9 %** | 11.89 € | stávame sa najlacnejší |
| Stojan na slúchadlá ONIKUMA ST-2 čierny | 13.90 € | **13.50 €** | 15.1 % | **11.8 %** | 13.89 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **2.10 €** | 56.3 % | **31.3 %** | 2.14 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.30 € | **2.90 €** | 36.2 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.60 € | **4.20 €** | 49.0 % | **36.0 %** | 4.21 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.72 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 6.10 € | **5.70 €** | 55.0 % | **44.8 %** | 5.72 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.70 €** | 54.5 % | **44.4 %** | 5.73 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| TP-LINK TL-WA855RE Wireless N Extender | 18.90 € | **18.50 €** | 10.1 % | **7.7 %** | 15.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 31.90 € | **31.50 €** | 7.2 % | **5.9 %** | 31.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.54 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.50 €** | 15.8 % | **13.8 %** | 22.54 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.90 € | **55.50 €** | 11.4 % | **10.6 %** | 55.59 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **27.50 €** | 15.4 % | **13.7 %** | 27.64 € | stávame sa najlacnejší |
| Uni-T UT201R digitálny klešťový multimeter | 22.90 € | **22.50 €** | 16.0 % | **14.0 %** | 22.69 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 16.90 € | **16.50 €** | 14.5 % | **11.8 %** | 16.69 € | stávame sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DGS-108) | 21.90 € | **21.50 €** | 11.7 % | **9.7 %** | 21.69 € | stávame sa najlacnejší |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 33.90 € | **33.50 €** | 18.6 % | **17.2 %** | 33.70 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.90 € | **16.50 €** | 46.6 % | **43.2 %** | 16.71 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 39.90 € | **39.50 €** | 13.2 % | **12.1 %** | 39.71 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 22.90 € | **22.50 €** | 18.4 % | **16.3 %** | 22.71 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.50 €** | 15.1 % | **14.4 %** | 63.71 € | stávame sa najlacnejší |
| Herné slúchadlá Onikuma B2 (čierne) | 21.90 € | **21.50 €** | 13.7 % | **11.6 %** | 21.72 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.73 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 23.90 € | **23.50 €** | 40.0 % | **37.6 %** | 23.74 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.90 € | **20.50 €** | 15.0 % | **12.8 %** | 20.75 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 16.90 € | **16.50 €** | 11.6 % | **9.0 %** | 16.75 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **20.50 €** | 30.3 % | **27.8 %** | 20.76 € | stávame sa najlacnejší |
| Electrolux E200SM | 17.90 € | **17.50 €** | 21.0 % | **18.3 %** | 17.76 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 22.90 € | **22.50 €** | 15.4 % | **13.4 %** | 22.76 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 31.90 € | **31.50 €** | 55.0 % | **53.1 %** | 31.77 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 30.90 € | **30.50 €** | 13.3 % | **11.8 %** | 30.77 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 16.90 € | **16.50 €** | 46.0 % | **42.6 %** | 16.78 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.79 € | stávame sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.90 € | **18.50 €** | 12.1 % | **9.7 %** | 18.79 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 23.90 € | **23.50 €** | 7.1 % | **5.3 %** | 23.79 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8062 s imitací krbu... | 53.90 € | **53.50 €** | 11.6 % | **10.8 %** | 53.79 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 58.90 € | **58.50 €** | 6.7 % | **6.0 %** | 58.79 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 56.90 € | **56.50 €** | 6.9 % | **6.2 %** | 56.79 € | stávame sa najlacnejší |
| Beper BEP-BC261 | 31.90 € | **31.50 €** | 7.5 % | **6.1 %** | 31.79 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.5 % | **9.5 %** | 40.79 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.90 € | **25.50 €** | 21.4 % | **19.5 %** | 25.79 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 36.90 € | **36.50 €** | 13.2 % | **12.0 %** | 36.79 € | stávame sa najlacnejší |
| Stolný statív Puluz PU3070GT | 40.90 € | **40.50 €** | 7.0 % | **5.9 %** | 40.79 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **27.50 €** | 42.5 % | **40.4 %** | 27.79 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.90 € | **28.50 €** | 30.7 % | **28.9 %** | 28.79 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 21.90 € | **21.50 €** | 8.3 % | **6.3 %** | 21.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.90 € | **16.50 €** | 18.2 % | **15.4 %** | 16.80 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 59.90 € | **59.50 €** | 8.1 % | **7.4 %** | 59.80 € | stávame sa najlacnejší |
| Tesla KT500X | 23.90 € | **23.50 €** | 10.7 % | **8.9 %** | 23.80 € | stávame sa najlacnejší |
| Inverto HOME Pro - Quattro Universal 40mm PLL LNB | 18.90 € | **18.50 €** | 25.7 % | **23.1 %** | 18.80 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.90 € | **21.50 €** | 8.1 % | **6.1 %** | 21.80 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 19.90 € | **19.50 €** | 12.0 % | **9.8 %** | 19.80 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 37.90 € | **37.50 €** | 10.6 % | **9.4 %** | 37.80 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 30.90 € | **30.50 €** | 54.8 % | **52.8 %** | 30.82 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 35.90 € | **35.50 €** | 13.3 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 35.90 € | **35.50 €** | 13.3 % | **12.1 %** | 35.82 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 31.90 € | **31.50 €** | 9.3 % | **8.0 %** | 31.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.90 € | **23.50 €** | 36.1 % | **33.8 %** | 23.83 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 24.90 € | **24.50 €** | 45.3 % | **43.0 %** | 24.84 € | stávame sa najlacnejší |
| Solight profesionálny multimeter, tru RMS | 23.90 € | **23.50 €** | 46.2 % | **43.8 %** | 23.84 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 51.90 € | **51.50 €** | 14.4 % | **13.5 %** | 51.84 € | stávame sa najlacnejší |
| Hrazda multifunkční REBEL ACTIVE RBA-2401 | 54.90 € | **54.50 €** | 8.2 % | **7.4 %** | 54.84 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.50 €** | 14.9 % | **13.4 %** | 29.84 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.90 € | **23.50 €** | 11.5 % | **9.6 %** | 23.86 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.90 € | **39.50 €** | 39.2 % | **37.8 %** | 39.86 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.90 € | **23.50 €** | 32.8 % | **30.6 %** | 23.87 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **24.50 €** | 38.3 % | **36.1 %** | 24.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, USB A+C, 2 ... | 20.90 € | **20.50 €** | 39.3 % | **36.6 %** | 20.87 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 16.90 € | **16.50 €** | 39.3 % | **36.1 %** | 16.87 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.90 € | **16.50 €** | 12.7 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 47.90 € | **47.50 €** | 9.8 % | **8.9 %** | 47.88 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 24.90 € | **24.50 €** | 10.2 % | **8.4 %** | 24.88 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 12.7 % | **10.2 %** | 17.88 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 17.90 € | **17.50 €** | 7.8 % | **5.3 %** | 17.88 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 31.90 € | **31.50 €** | 6.5 % | **5.1 %** | 31.89 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 18.90 € | **18.50 €** | 13.2 % | **10.8 %** | 18.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 22.90 € | **22.50 €** | 8.4 % | **6.5 %** | 22.89 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 20.90 € | **20.50 €** | 9.6 % | **7.5 %** | 20.89 € | stávame sa najlacnejší |
| Solight lokátor pre batožinu, Find My kompatibilný | 22.90 € | **22.50 €** | 35.8 % | **33.4 %** | 22.89 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 40.90 € | **40.50 €** | 7.4 % | **6.3 %** | 40.89 € | stávame sa najlacnejší |
| FINLUX 55FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 545.90 € | **545.50 €** | 5.1 % | **5.0 %** | 538.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6182PS4 | 334.90 € | **334.50 €** | 7.1 % | **7.0 %** | 334.70 € | stávame sa najlacnejší |
| Candy CDPH 2D947X | 316.90 € | **316.50 €** | 8.1 % | **8.0 %** | 316.70 € | stávame sa najlacnejší |
| Guzzanti GZ 110G | 325.90 € | **325.50 €** | 8.3 % | **8.1 %** | 325.72 € | stávame sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 440.90 € | **440.50 €** | 6.5 % | **6.4 %** | 440.75 € | stávame sa najlacnejší |
| Gorenje WG894A25 | 499.90 € | **499.50 €** | 8.7 % | **8.6 %** | 499.75 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 267.90 € | **267.50 €** | 8.3 % | **8.2 %** | 267.79 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 799.90 € | **799.50 €** | 14.3 % | **14.3 %** | 799.79 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 279.90 € | **279.50 €** | 7.9 % | **7.7 %** | 279.80 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 329.90 € | **329.50 €** | 13.5 % | **13.4 %** | 329.80 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 348.90 € | **348.50 €** | 7.0 % | **6.9 %** | 348.80 € | stávame sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 410.90 € | **410.50 €** | 7.1 % | **7.0 %** | 410.80 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 444.90 € | **444.50 €** | 7.1 % | **7.0 %** | 444.80 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 507.90 € | **507.50 €** | 7.1 % | **7.0 %** | 507.80 € | stávame sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 767.90 € | **767.50 €** | 6.0 % | **6.0 %** | 767.80 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 888.90 € | **888.50 €** | 7.0 % | **6.9 %** | 888.88 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 374.90 € | **374.50 €** | 8.1 % | **8.0 %** | 374.89 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, vyp... | 3.30 € | **3.00 €** | 49.9 % | **36.3 %** | 3.01 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.60 € | **7.30 €** | 41.7 % | **36.1 %** | 7.33 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.30 € | **3.00 €** | 49.1 % | **35.5 %** | 3.03 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.73 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.70 €** | 49.6 % | **34.7 %** | 2.74 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.10 € | **4.80 €** | 18.1 % | **11.2 %** | 4.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.80 € | **9.60 €** | 33.9 % | **31.2 %** | 9.61 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.60 € | **2.40 €** | 47.8 % | **36.4 %** | 2.41 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.40 €** | 51.3 % | **32.4 %** | 1.41 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.30 €** | 47.3 % | **35.5 %** | 2.32 € | stávame sa najlacnejší |
| Solight teplomer, teplota, veľký displej, dátum, čas... | 5.00 € | **4.80 €** | 43.6 % | **37.9 %** | 4.83 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.90 €** | 52.7 % | **42.9 %** | 2.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **5.80 €** | 25.4 % | **21.2 %** | 5.90 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.90 €** | 59.7 % | **30.7 %** | 0.92 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.30 €** | 52.4 % | **32.1 %** | 1.32 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 2.00 € | **1.80 €** | 49.2 % | **34.3 %** | 1.82 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.80 €** | 57.9 % | **42.1 %** | 1.83 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.80 € | **2.60 €** | 45.9 % | **35.5 %** | 2.62 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.20 €** | 56.1 % | **43.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.40 € | **2.20 €** | 46.7 % | **34.5 %** | 2.23 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **2.10 €** | 47.2 % | **34.4 %** | 2.14 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.30 € | **2.10 €** | 28.1 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.50 € | **8.30 €** | 45.2 % | **41.8 %** | 8.39 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 4ks, 6,5cm, ba... | 10.00 € | **9.80 €** | 53.4 % | **50.3 %** | 9.90 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 530.00 € | **529.90 €** | 6.4 % | **6.3 %** | 529.95 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 380.00 € | **379.90 €** | 7.3 % | **7.3 %** | 379.95 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 285.00 € | **284.90 €** | 14.5 % | **14.4 %** | 284.96 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 279.00 € | **278.90 €** | 8.1 % | **8.0 %** | 278.99 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 19 | 30.00 € | **29.90 €** | 6.5 % | **6.1 %** | 29.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 17.00 € | **16.90 €** | 11.0 % | **10.4 %** | 16.92 € | stávame sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.90 €** | 14.9 % | **14.7 %** | 54.94 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.00 € | **22.90 €** | 33.2 % | **32.6 %** | 22.95 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.00 € | **19.90 €** | 15.8 % | **15.2 %** | 19.96 € | stávame sa najlacnejší |
| Hodiny TechnoLine WT 3100 do koupelny | 24.00 € | **23.90 €** | 13.6 % | **13.1 %** | 23.96 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.90 €** | 38.4 % | **37.7 %** | 20.96 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 22.00 € | **21.90 €** | 38.4 % | **37.8 %** | 21.96 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 17.00 € | **16.90 €** | 45.3 % | **44.5 %** | 16.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 9.8 % | **9.6 %** | 47.96 € | stávame sa najlacnejší |
| ETA Verto II 1423 90000 bílý/zlatý | 31.00 € | **30.90 €** | 12.1 % | **11.7 %** | 30.96 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.00 € | **26.90 €** | 13.6 % | **13.2 %** | 26.96 € | stávame sa najlacnejší |
| Adapter, quick release MOZA RACING RS07 for R21/R16/... | 50.00 € | **49.90 €** | 7.7 % | **7.5 %** | 49.96 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.90 €** | 14.6 % | **14.3 %** | 46.97 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 46.00 € | **45.90 €** | 10.1 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 46.00 € | **45.90 €** | 10.1 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.90 €** | 63.6 % | **63.3 %** | 49.99 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **35.90 €** | 45.0 % | **44.6 %** | 35.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.20 €** | 25.6 % | **24.2 %** | 9.29 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **39.90 €** | 33.9 % | **33.6 %** | 39.99 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 24.00 € | **23.90 €** | 7.1 % | **6.6 %** | 23.99 € | stávame sa najlacnejší |
| Russell Hobbs 26800-56/RH | 26.00 € | **25.90 €** | 7.3 % | **6.9 %** | 25.99 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.00 € | **28.90 €** | 9.5 % | **9.1 %** | 28.99 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.00 € | **28.90 €** | 9.5 % | **9.1 %** | 28.99 € | stávame sa najlacnejší |
| Domo DO223S | 64.00 € | **63.90 €** | 12.2 % | **12.0 %** | 63.99 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 53.00 € | **52.90 €** | 6.4 % | **6.2 %** | 52.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.70 € | **5.60 €** | 37.5 % | **35.1 %** | 5.63 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.20 € | **5.10 €** | 46.8 % | **44.0 %** | 5.14 € | stávame sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.20 € | **5.10 €** | 46.3 % | **43.5 %** | 5.15 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 6.90 € | **6.80 €** | 46.1 % | **44.0 %** | 6.85 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **6.10 €** | 36.6 % | **34.4 %** | 6.15 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.40 € | **7.30 €** | 45.7 % | **43.7 %** | 7.37 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 4.20 € | **4.10 €** | 19.4 % | **16.6 %** | 4.17 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 4.20 € | **4.10 €** | 19.4 % | **16.6 %** | 4.17 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.70 € | **4.60 €** | 35.0 % | **32.1 %** | 4.67 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 6.40 € | **6.30 €** | 36.2 % | **34.1 %** | 6.38 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 5.90 € | **5.80 €** | 11.0 % | **9.2 %** | 5.89 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.30 €** | 45.4 % | **42.7 %** | 5.39 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 6.70 € | **6.60 €** | 46.4 % | **44.2 %** | 6.69 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 6.70 € | **6.60 €** | 31.9 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.70 € | **4.60 €** | 37.0 % | **34.0 %** | 4.69 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.80 €** | 45.4 % | **42.9 %** | 5.89 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.90 €** | 52.0 % | **44.4 %** | 1.91 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.90 €** | 48.5 % | **44.8 %** | 3.91 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.50 € | **2.40 €** | 50.6 % | **44.5 %** | 2.41 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.30 € | **1.20 €** | 46.8 % | **35.5 %** | 1.21 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **1.00 €** | 49.1 % | **35.5 %** | 1.02 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **1.00 €** | 49.1 % | **35.5 %** | 1.02 € | stávame sa najlacnejší |
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
| Solight viacnásobná zásuvka, 3 zásuvky | 2.00 € | **1.90 €** | 40.2 % | **33.2 %** | 1.96 € | stávame sa najlacnejší |
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
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.40 €** | 55.5 % | **51.1 %** | 3.49 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.60 € | **3.50 €** | 52.4 % | **48.2 %** | 3.59 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 2.90 € | **2.80 €** | 32.5 % | **27.9 %** | 2.89 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.50 € | **3.40 €** | 36.8 % | **32.9 %** | 3.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.60 €** | 26.9 % | **22.2 %** | 2.69 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.90 €** | 53.4 % | **38.1 %** | 0.95 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.00 € | **0.90 €** | 42.6 % | **28.4 %** | 0.95 € | stávame sa najlacnejší |
| Solight izolačná páska, 15mm x 0,13mm x 20m, čierna | 0.90 € | **0.80 €** | 38.1 % | **22.7 %** | 0.89 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.60 €** | 45.5 % | **36.9 %** | 1.61 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.11 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.80 €** | 51.4 % | **43.5 %** | 1.82 € | stávame sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.30 €** | 32.4 % | **22.9 %** | 1.35 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 1.90 € | **1.80 €** | 37.9 % | **30.7 %** | 1.85 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.18 € | stávame sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.20 € | **1.10 €** | 35.5 % | **24.2 %** | 1.18 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 1.90 € | **1.80 €** | 35.5 % | **28.4 %** | 1.89 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 2,5W, 3000K, 215lm | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.70 €** | 49.8 % | **44.4 %** | 2.71 € | stávame sa najlacnejší |
| Solight zásuvka nástenná, 5-pólová, 400v/16A, IP44 | 7.60 € | **7.50 €** | 37.3 % | **35.5 %** | 7.51 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, hvězda, 2x AA | 8.90 € | **8.80 €** | 45.9 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 8.90 € | **8.80 €** | 45.9 % | **44.2 %** | 8.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **7.00 €** | 36.1 % | **34.2 %** | 7.05 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 10.00 € | **9.90 €** | 26.8 % | **25.6 %** | 9.95 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 12.00 € | **11.90 €** | 38.0 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 14.00 € | **13.90 €** | 32.8 % | **31.9 %** | 13.96 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 6.80 € | **6.70 €** | 32.9 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.00 € | **10.90 €** | 9.3 % | **8.3 %** | 10.96 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.4 % | **9.6 %** | 12.96 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.20 € | **9.10 €** | 39.5 % | **38.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 13.00 € | **12.90 €** | 20.2 % | **19.3 %** | 12.96 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.30 € | **5.20 €** | 38.1 % | **35.5 %** | 5.26 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.60 € | **4.50 €** | 46.1 % | **42.9 %** | 4.57 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 10.00 € | **9.90 €** | 26.0 % | **24.8 %** | 9.97 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 5.50 € | **5.40 €** | 24.6 % | **22.3 %** | 5.48 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.40 €** | 36.3 % | **33.8 %** | 5.48 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 2.80 € | **2.70 €** | 35.5 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.40 €** | 38.3 % | **36.4 %** | 7.49 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 8.00 € | **7.90 €** | 12.3 % | **10.9 %** | 7.99 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.20 €** | 19.8 % | **16.1 %** | 3.29 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.80 € | **3.70 €** | 30.9 % | **27.5 %** | 3.79 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 3.80 € | **3.70 €** | 41.1 % | **37.4 %** | 3.79 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.00 € | **7.90 €** | 29.3 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.90 € | **8.80 €** | 33.3 % | **31.8 %** | 8.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.20 €** | 11.3 % | **8.7 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.60 € | **4.50 €** | 26.3 % | **23.6 %** | 4.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.30 € | **4.20 €** | 11.7 % | **9.1 %** | 4.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.30 €** | 24.3 % | **22.9 %** | 9.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.80 € | **4.70 €** | 16.1 % | **13.7 %** | 4.79 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.30 € | **5.20 €** | 35.9 % | **33.4 %** | 5.29 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.70 € | **8.60 €** | 6.8 % | **5.6 %** | 8.69 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 67.00 € | **66.90 €** | 5.5 % | **5.4 %** | 66.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 105.00 € | **104.90 €** | 30.0 % | **29.8 %** | 104.91 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 92.00 € | **91.90 €** | 9.7 % | **9.6 %** | 91.96 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 160.00 € | **159.90 €** | 6.8 % | **6.8 %** | 159.96 € | stávame sa najlacnejší |
| Ariete XVapor Comfort 4145/BL | 82.00 € | **81.90 €** | 10.0 % | **9.9 %** | 81.96 € | stávame sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 70.00 € | **69.90 €** | 8.5 % | **8.3 %** | 69.96 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 137.00 € | **136.90 €** | 5.4 % | **5.3 %** | 136.96 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1801 | 238.00 € | **237.90 €** | 42899.1 % | **42881.0 %** | 237.97 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 201.00 € | **200.90 €** | 10.1 % | **10.0 %** | 200.99 € | stávame sa najlacnejší |

# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-15

Vstup: `premiumstoresk_20260815_1940.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **4050**
- Návrh **zvýšiť** cenu: **187** produktov
- Návrh **znížiť** cenu: **1022** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **2841** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **134**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (187)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Roborock F25 | 313.90 € | **348.00 €** | 10.1 % | **22.1 %** | 313.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 159.50 € | **169.00 €** | 8.5 % | **14.9 %** | 169.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 261.90 € | **270.50 €** | 11.3 % | **15.0 %** | 270.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.90 €** | 10.4 % | **15.6 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| BROTHER DCP-T730DW | 270.50 € | **274.50 €** | 13.4 % | **15.0 %** | 270.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Partybox Club 120 | 266.50 € | **269.90 €** | 10.0 % | **11.4 %** | 266.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anycubic Photon Mono 4 3D printer | 163.50 € | **166.50 €** | 9.3 % | **11.3 %** | 163.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Tune 670NC white | 63.50 € | **66.00 €** | 10.2 % | **14.5 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash C305 ATX (biela) | 40.90 € | **43.00 €** | 9.1 % | **14.7 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 45.90 € | **48.00 €** | 9.7 % | **14.7 %** | 48.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 46.90 € | **49.00 €** | 10.1 % | **15.0 %** | 46.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové okuliare ZEBLAZE Q01 Green AI | 62.50 € | **64.50 €** | 6.3 % | **9.7 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové okuliare ZEBLAZE Q01 s umelou inteligenciou... | 62.50 € | **64.50 €** | 6.3 % | **9.7 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 142390000 | 30.90 € | **32.90 €** | 12.1 % | **19.4 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510Y žlutá | 37.50 € | **39.50 €** | 11.0 % | **16.9 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CFT610/4N/1 | 50.90 € | **52.90 €** | 10.0 % | **14.3 %** | 50.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.90 €** | 20.1 % | **45.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.7 % | **16.9 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **38.90 €** | 11.0 % | **15.1 %** | 37.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA X25 (čierne) | 13.90 € | **15.00 €** | 16.4 % | **25.6 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Colmi P80 (strieborné) | 20.90 € | **21.90 €** | 10.1 % | **15.4 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 18.50 € | **19.50 €** | 37.7 % | **45.2 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Motorcycle Intercom EJEAS K1 | 107.00 € | **107.90 €** | 15.0 % | **16.0 %** | 107.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 55.00 € | **55.90 €** | 10.1 % | **11.9 %** | 55.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP Black | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy Podsie 4 POP White | 14.90 € | **15.50 €** | 12.4 % | **16.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Pro10 (ružovo-zlaté) | 25.50 € | **26.00 €** | 12.5 % | **14.8 %** | 25.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný termostat WiFi Avatto WT20R-EH-16A-W-WiFi | 30.00 € | **30.50 €** | 13.4 % | **15.3 %** | 30.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná pumpa Flextail Tiny Pump 2 (oranžová) | 22.00 € | **22.50 €** | 12.4 % | **15.0 %** | 22.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 36.00 € | **36.50 €** | 6.3 % | **7.8 %** | 36.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 46.00 € | **46.50 €** | 10.7 % | **11.9 %** | 46.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 22.00 € | **22.50 €** | 7.5 % | **9.9 %** | 22.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stropné svetlo Yeelight C2201C400 | 64.00 € | **64.50 €** | 14.8 % | **15.7 %** | 64.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.00 € | **16.50 €** | 6.7 % | **10.0 %** | 16.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 17.00 € | **17.50 €** | 8.6 % | **11.8 %** | 17.43 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá TWS ONIKUMA T308 čierna | 10.00 € | **10.50 €** | 6.8 % | **12.2 %** | 10.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skúšačka napätia AC/DC UNI-T UT22B-EU | 14.00 € | **14.50 €** | 9.9 % | **13.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **20.50 €** | 35.1 % | **38.4 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **31.50 €** | 18.8 % | **20.7 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 41.00 € | **41.50 €** | 19.3 % | **20.8 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.00 € | **15.50 €** | 41.1 % | **45.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 12.00 € | **12.50 €** | 22.0 % | **27.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **14.50 €** | 29.0 % | **33.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 16.00 € | **16.50 €** | 20.2 % | **24.0 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.00 € | **27.50 €** | 32.0 % | **34.4 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L7 | 270.00 € | **270.50 €** | 7.7 % | **7.9 %** | 270.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Mop na podlahu Easy Spray XL | 32.00 € | **32.50 €** | 7.5 % | **9.2 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.50 € | **13.00 €** | 16.7 % | **21.3 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.00 € | **12.50 €** | 17.5 % | **22.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.00 € | **24.50 €** | 23.9 % | **26.5 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, vypínač,... | 10.00 € | **10.50 €** | 23.6 % | **29.7 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.00 € | **38.50 €** | 37.7 % | **39.5 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.00 € | **18.50 €** | 28.0 % | **31.6 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 60.00 € | **60.50 €** | 36.0 % | **37.2 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener Creality Sermoon P1 | 3020.50 € | **3020.90 €** | 10.0 % | **10.0 %** | 3020.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový reproduktor QCY SP300 (biely) | 92.50 € | **92.90 €** | 12.3 % | **12.8 %** | 92.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kávovar HiBREW H11 1450 W | 105.50 € | **105.90 €** | 7.9 % | **8.3 %** | 105.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 119.50 € | **119.90 €** | 13.5 % | **13.8 %** | 119.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 124.50 € | **124.90 €** | 9.9 % | **10.3 %** | 124.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio OpenRock S2 (blackE) | 64.50 € | **64.90 €** | 10.9 % | **11.6 %** | 64.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.50 € | **77.90 €** | 14.4 % | **15.0 %** | 77.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 119.50 € | **119.90 €** | 10.2 % | **10.6 %** | 119.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 139.50 € | **139.90 €** | 7.9 % | **8.2 %** | 139.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 65.50 € | **65.90 €** | 9.3 % | **10.0 %** | 65.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 116.50 € | **116.90 €** | 8.6 % | **9.0 %** | 116.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 116.50 € | **116.90 €** | 8.6 % | **9.0 %** | 116.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 4216 90000 | 94.50 € | **94.90 €** | 5.4 % | **5.9 %** | 94.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 71.50 € | **71.90 €** | 10.4 % | **11.0 %** | 71.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool MBNA910X | 242.50 € | **242.90 €** | 8.0 % | **8.1 %** | 242.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.50 € | **15.90 €** | 7.8 % | **10.6 %** | 15.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.50 € | **11.90 €** | 40.8 % | **45.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 10m | 12.50 € | **12.90 €** | 16.0 % | **19.7 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.50 € | **14.90 €** | 10.6 % | **13.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maono G1 Neo Sound Card Black | 44.50 € | **44.90 €** | 12.3 % | **13.3 %** | 44.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 24.50 € | **24.90 €** | 9.1 % | **10.9 %** | 24.78 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stropné svietidlo Yeelight C2201C235 | 37.50 € | **37.90 €** | 5.8 % | **6.9 %** | 37.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné okuliare COLMI G06 (ružové) | 29.50 € | **29.90 €** | 5.6 % | **7.0 %** | 29.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné okuliare COLMI G06 (transparentné) | 29.50 € | **29.90 €** | 5.6 % | **7.0 %** | 29.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filters ND/PL 8/16/32 Freewell for DJI Neo | 16.50 € | **16.90 €** | 6.5 % | **9.1 %** | 16.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.50 € | **41.90 €** | 14.0 % | **15.1 %** | 41.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.50 € | **16.90 €** | 10.0 % | **12.7 %** | 16.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dotykový vypínač svetla ZigBee Avatto TS60-EU-W1 Sin... | 20.50 € | **20.90 €** | 12.2 % | **14.4 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 31.50 € | **31.90 €** | 11.2 % | **12.6 %** | 31.92 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.50 € | **16.90 €** | 32.2 % | **35.4 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 29.50 € | **29.90 €** | 32.6 % | **34.4 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, čierna | 30.50 € | **30.90 €** | 37.1 % | **38.9 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.50 € | **54.90 €** | 37.3 % | **38.3 %** | 54.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.50 € | **21.90 €** | 22.3 % | **24.6 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.50 € | **45.90 €** | 40.3 % | **41.6 %** | 45.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.50 € | **16.90 €** | 29.7 % | **32.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.50 € | **41.90 €** | 33.6 % | **34.9 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 58.50 € | **58.90 €** | 34.7 % | **35.6 %** | 58.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 34.50 € | **34.90 €** | 36.7 % | **38.3 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.50 € | **55.90 €** | 35.5 % | **36.4 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.90 €** | 18.7 % | **20.3 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.6 % | **13.2 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 17.50 € | **17.90 €** | 25.8 % | **28.7 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **19.90 €** | 36.8 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 263.50 € | **263.90 €** | 8.5 % | **8.6 %** | 263.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 317.90 € | **318.00 €** | 6.5 % | **6.5 %** | 318.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Jupiter 2 | 848.90 € | **849.00 €** | 8.3 % | **8.3 %** | 849.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 258.90 € | **259.00 €** | 9.0 % | **9.1 %** | 259.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 498.90 € | **499.00 €** | 7.7 % | **7.7 %** | 499.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 757.90 € | **758.00 €** | 11.4 % | **11.4 %** | 758.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cyklotrenažér Cycplus T3 | 828.90 € | **829.00 €** | 12.2 % | **12.2 %** | 829.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux 600 Gril EMS4253TBX | 266.90 € | **267.00 €** | 8.1 % | **8.2 %** | 266.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 450.90 € | **451.00 €** | 7.0 % | **7.0 %** | 450.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND16 filter Freewell pre DJI Mini 5 Pro | 18.90 € | **19.00 €** | 12.0 % | **12.6 %** | 18.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti UNI-T UT333S | 23.90 € | **24.00 €** | 13.9 % | **14.4 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 16.90 € | **17.00 €** | 9.1 % | **9.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 57.90 € | **58.00 €** | 29.3 % | **29.5 %** | 57.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 48.90 € | **49.00 €** | 24.5 % | **24.8 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 25.8 % | **26.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 21.90 € | **22.00 €** | 28.8 % | **29.4 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.90 € | **23.00 €** | 38.6 % | **39.2 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente ProVacs | 56.90 € | **57.00 €** | 5.6 % | **5.8 %** | 56.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.90 € | **18.00 €** | 33.6 % | **34.4 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 19.90 € | **20.00 €** | 24.1 % | **24.7 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.90 € | **25.00 €** | 22.4 % | **22.9 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.90 € | **29.00 €** | 23.5 % | **23.9 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **34.00 €** | 25.7 % | **26.1 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.70 €** | 38.0 % | **41.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.80 € | **6.90 €** | 32.6 % | **34.5 %** | 6.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, bi... | 6.30 € | **6.40 €** | 32.7 % | **34.8 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.40 €** | 24.3 % | **26.3 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.40 €** | 5.4 % | **7.1 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 7.30 € | **7.40 €** | 10.5 % | **12.0 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.10 € | **4.20 €** | 35.0 % | **38.2 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.60 € | **6.70 €** | 11.6 % | **13.2 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.60 € | **6.70 €** | 35.5 % | **37.6 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.80 € | **5.90 €** | 42.9 % | **45.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 3000K, 510lm | 0.70 € | **0.80 €** | 7.4 % | **22.7 %** | 0.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.10 € | **3.20 €** | 27.9 % | **32.1 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.20 € | **1.30 €** | 13.4 % | **22.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 28.1 % | **33.0 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.50 € | **3.60 €** | 18.1 % | **21.4 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.40 € | **3.50 €** | 16.6 % | **20.1 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.90 € | **2.00 €** | 17.0 % | **23.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka 201, priemer 3mm x 140mm, AC napäti... | 0.60 € | **0.70 €** | 16.1 % | **35.5 %** | 0.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **1.90 €** | 29.5 % | **36.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.80 € | **1.90 €** | 17.1 % | **23.6 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.90 € | **13.00 €** | 37.5 % | **38.5 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.80 € | **9.90 €** | 26.9 % | **28.2 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.00 € | **5.10 €** | 33.3 % | **35.9 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.00 € | **6.10 €** | 30.4 % | **32.6 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.90 € | **10.00 €** | 23.8 % | **25.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **10.00 €** | 44.2 % | **45.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.20 € | **4.30 €** | 35.5 % | **38.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka s LCD displejom, AC 230V, 450mA, 4... | 13.90 € | **14.00 €** | 7.8 % | **8.6 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.40 € | **7.50 €** | 37.0 % | **38.9 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.60 €** | 30.7 % | **33.6 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.20 € | **5.30 €** | 25.8 % | **28.2 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.00 € | **5.10 €** | 34.6 % | **37.3 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.20 € | **4.30 €** | 15.8 % | **18.5 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.40 € | **9.50 €** | 31.5 % | **32.9 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 2m | 4.70 € | **4.80 €** | 35.0 % | **37.9 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 11.8 % | **13.4 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 23.3 % | **25.4 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **14.00 €** | 10.6 % | **11.4 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LAMAX SoundKid1 pink | 15.90 € | **16.00 €** | 10.4 % | **11.1 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor Z1RC 16,0" | 117.90 € | **118.00 €** | 14.5 % | **14.6 %** | 117.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Roborock Q10 PF čistiaci robot (čierny) | 217.90 € | **218.00 €** | 14.4 % | **14.5 %** | 218.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic Kobra 2 Pro 3D Printer | 206.90 € | **207.00 €** | 9.5 % | **9.6 %** | 207.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 104.90 € | **105.00 €** | 9.9 % | **10.0 %** | 104.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.90 € | **177.00 €** | 7.7 % | **7.7 %** | 176.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE F4142PW | 221.90 € | **222.00 €** | 8.0 % | **8.1 %** | 221.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1022)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| YAMAHA A-S3200 BLACK | 6799.00 € | **6002.00 €** | 23.8 % | **9.3 %** | 6002.47 € | stávame sa najlacnejší |
| YAMAHA R-N2000A BLACK | 3890.00 € | **3312.50 €** | 28.3 % | **9.3 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N2000A SILVER | 3890.00 € | **3312.50 €** | 27.9 % | **9.0 %** | 3312.60 € | stávame sa najlacnejší |
| YAMAHA R-N1000A BLACK | 1599.00 € | **1367.00 €** | 27.8 % | **9.3 %** | 1367.23 € | stávame sa najlacnejší |
| YAMAHA R-N1000A SILVER | 1599.00 € | **1367.00 €** | 24.2 % | **6.2 %** | 1367.23 € | stávame sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2645.00 €** | 15.0 % | **5.9 %** | 2645.50 € | stávame sa najlacnejší |
| Yamaha RX-A6A BLACK | 2799.00 € | **2576.00 €** | 18.7 % | **9.3 %** | 2576.04 € | stávame sa najlacnejší |
| BEKO HII64500UFT | 559.00 € | **362.50 €** | 64.7 % | **6.8 %** | 362.65 € | stávame sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 519.00 € | **368.90 €** | 48.9 % | **5.8 %** | 369.00 € | stávame sa najlacnejší |
| YAMAHA R-N800A BLACK | 1099.00 € | **955.50 €** | 23.4 % | **7.3 %** | 955.90 € | stávame sa najlacnejší |
| Gorenje F49DPW | 309.00 € | **171.00 €** | 96.8 % | **8.9 %** | 171.30 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 479.00 € | **343.50 €** | 48.7 % | **6.7 %** | 343.70 € | stávame sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **633.90 €** | 28.6 % | **6.0 %** | 634.00 € | stávame sa najlacnejší |
| Gorenje NRK619DA2XL4 | 599.00 € | **468.90 €** | 34.2 % | **5.1 %** | 454.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **526.50 €** | 28.6 % | **6.0 %** | 526.90 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 465.00 € | **354.00 €** | 39.7 % | **6.3 %** | 354.05 € | stávame sa najlacnejší |
| Beko ATP3100N | 159.00 € | **51.50 €** | 251.6 % | **13.9 %** | 51.80 € | stávame sa najlacnejší |
| Yamaha YHT-4960 BLACK | 899.00 € | **792.00 €** | 24.0 % | **9.3 %** | 792.22 € | stávame sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1543.50 €** | 16.8 % | **9.3 %** | 1543.60 € | stávame sa najlacnejší |
| Beko BMTD37146W | 489.00 € | **383.90 €** | 35.8 % | **6.6 %** | 384.00 € | stávame sa najlacnejší |
| YAMAHA NS-F51 BLACK 1 karton | 399.00 € | **298.90 €** | 45.9 % | **9.3 %** | 298.95 € | stávame sa najlacnejší |
| Beko BDFS26120XQ | 419.00 € | **328.00 €** | 36.6 % | **6.9 %** | 328.06 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Plus Combo | 1176.90 € | **1085.90 €** | 15.0 % | **6.1 %** | 1086.00 € | stávame sa najlacnejší |
| Gorenje R619EAXL6 | 599.00 € | **508.00 €** | 26.2 % | **7.0 %** | 508.10 € | stávame sa najlacnejší |
| Gorenje W2PNA94A1W/CZ | 519.00 € | **428.00 €** | 29.7 % | **7.0 %** | 428.30 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3588.00 € | **3499.50 €** | 15.0 % | **12.2 %** | 3499.90 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **511.50 €** | 24.2 % | **6.1 %** | 511.63 € | stávame sa najlacnejší |
| YAMAHA A-S1200 BLACK | 2399.00 € | **2315.50 €** | 13.2 % | **9.3 %** | 2315.65 € | stávame sa najlacnejší |
| YAMAHA A-S1200 SILVER | 2399.00 € | **2315.50 €** | 13.1 % | **9.1 %** | 2315.65 € | stávame sa najlacnejší |
| Amica TFB 128 TX | 369.00 € | **286.00 €** | 39.2 % | **7.9 %** | 286.40 € | stávame sa najlacnejší |
| Gorenje RK4182PW4 | 359.00 € | **281.00 €** | 36.1 % | **6.5 %** | 281.12 € | stávame sa najlacnejší |
| Gorenje R619EAW6 | 559.00 € | **481.00 €** | 24.1 % | **6.8 %** | 481.47 € | stávame sa najlacnejší |
| Gorenje R4142PS | 319.00 € | **248.00 €** | 38.9 % | **8.0 %** | 248.20 € | stávame sa najlacnejší |
| ETA 410090000 | 399.00 € | **330.00 €** | 29.2 % | **6.9 %** | 330.30 € | stávame sa najlacnejší |
| Sada plynového pedálu CRP2 + aktívny univerzálny ped... | 1066.50 € | **998.50 €** | 15.0 % | **7.6 %** | 998.90 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 8" (200/1200) | 764.50 € | **699.90 €** | 15.0 % | **5.3 %** | 699.95 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 954.00 € | **889.50 €** | 15.0 % | **7.2 %** | 889.90 € | stávame sa najlacnejší |
| Creality Falcon 2 Pro S 22W laserový gravírovací stroj | 819.50 € | **757.50 €** | 15.0 % | **6.3 %** | 757.90 € | stávame sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.50 €** | 15.0 % | **5.4 %** | 669.90 € | stávame sa najlacnejší |
| Gorenje W2PNEI84A1SW | 439.00 € | **380.00 €** | 35.3 % | **17.1 %** | 380.24 € | stávame sa najlacnejší |
| JBL PartyBox Ultimate | 1279.50 € | **1221.50 €** | 10.0 % | **5.0 %** | 953.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 279.00 € | **221.00 €** | 37.7 % | **9.1 %** | 221.46 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 559.00 € | **506.00 €** | 18.2 % | **7.0 %** | 506.10 € | stávame sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **347.00 €** | 22.9 % | **6.9 %** | 347.40 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 679.50 € | **628.50 €** | 15.0 % | **6.3 %** | 628.87 € | stávame sa najlacnejší |
| YAMAHA NS-777 BLACK 2 kartony | 899.00 € | **848.90 €** | 15.6 % | **9.1 %** | 849.00 € | stávame sa najlacnejší |
| Gorenje BOS6737E06B | 319.00 € | **270.00 €** | 25.9 % | **6.6 %** | 270.39 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 637.00 € | **589.90 €** | 15.0 % | **6.5 %** | 589.94 € | stávame sa najlacnejší |
| 3D Tlačiareň Creality K1 MAX | 543.50 € | **496.90 €** | 15.0 % | **5.1 %** | 497.00 € | stávame sa najlacnejší |
| Gorenje RK4182PS4 | 379.00 € | **332.50 €** | 26.3 % | **10.8 %** | 332.63 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 1064.90 € | **1019.00 €** | 15.0 % | **10.1 %** | 1019.50 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá ONEODIO Studio Max 2 (čierne) | 187.50 € | **143.00 €** | 50.2 % | **14.6 %** | 143.50 € | stávame sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **411.50 €** | 18.3 % | **7.0 %** | 411.90 € | stávame sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 96.0 % | **11.9 %** | 57.23 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 594.50 € | **553.00 €** | 15.0 % | **6.9 %** | 553.36 € | stávame sa najlacnejší |
| Beko BDIN38646D | 535.00 € | **494.00 €** | 15.9 % | **7.0 %** | 494.30 € | stávame sa najlacnejší |
| YAMAHA NS-SW050 BLACK | 239.00 € | **198.50 €** | 31.5 % | **9.2 %** | 198.58 € | stávame sa najlacnejší |
| YAMAHA A-S701 BLACK | 849.00 € | **808.50 €** | 14.7 % | **9.3 %** | 808.61 € | stávame sa najlacnejší |
| ETA 151390000 | 139.99 € | **101.50 €** | 52.0 % | **10.2 %** | 101.67 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Pro Combo | 786.50 € | **748.50 €** | 15.0 % | **9.5 %** | 748.90 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 239.00 € | **204.00 €** | 28.0 % | **9.2 %** | 204.08 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **244.00 €** | 24.9 % | **9.2 %** | 244.20 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **244.00 €** | 24.7 % | **9.0 %** | 244.20 € | stávame sa najlacnejší |
| Inteligentný samočistiaci odpadkový kôš pre mačky Ca... | 398.90 € | **364.50 €** | 15.0 % | **5.1 %** | 362.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-P41 BLACK | 329.00 € | **295.00 €** | 27.4 % | **14.3 %** | 295.30 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Combo | 532.50 € | **498.50 €** | 15.0 % | **7.6 %** | 498.90 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 399.00 € | **365.90 €** | 19.6 % | **9.7 %** | 365.93 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 100 | 382.00 € | **349.90 €** | 15.0 % | **5.3 %** | 349.95 € | stávame sa najlacnejší |
| Ultimea Skywave X60 Soundbar | 530.00 € | **498.50 €** | 15.0 % | **8.1 %** | 498.90 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE MAK 80/850 AZ-M | 360.90 € | **329.90 €** | 15.0 % | **5.2 %** | 329.95 € | stávame sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 279.00 € | **248.00 €** | 22.8 % | **9.1 %** | 248.37 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo NVB10 Helmet s ... | 399.00 € | **368.50 €** | 15.0 % | **6.2 %** | 368.77 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL002CBK SmartLife | 350.90 € | **320.50 €** | 15.0 % | **5.1 %** | 315.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 439.00 € | **409.00 €** | 14.8 % | **6.9 %** | 409.40 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Hi Combo | 354.00 € | **324.90 €** | 15.0 % | **5.6 %** | 324.99 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 377.50 € | **348.50 €** | 15.0 % | **6.2 %** | 348.90 € | stávame sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 793.90 € | **765.00 €** | 10.0 % | **6.0 %** | 765.20 € | stávame sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **650.00 €** | 15.0 % | **10.2 %** | 650.50 € | stávame sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 416.90 € | **388.90 €** | 15.0 % | **7.3 %** | 389.00 € | stávame sa najlacnejší |
| 3D tlačový list ELEGOO OrangeStorm Giga | 2706.50 € | **2678.50 €** | 15.0 % | **13.8 %** | 2678.90 € | stávame sa najlacnejší |
| YAMAHA RX-V4A Black | 529.00 € | **501.50 €** | 15.2 % | **9.2 %** | 501.78 € | stávame sa najlacnejší |
| Panasonic SC-MAX3500 | 669.00 € | **642.00 €** | 11.8 % | **7.3 %** | 642.35 € | stávame sa najlacnejší |
| Cycplus T2 smart bike trainer | 615.90 € | **589.50 €** | 15.0 % | **10.1 %** | 589.90 € | stávame sa najlacnejší |
| Beko B7RCNA417HXBRW | 690.90 € | **665.00 €** | 10.1 % | **5.9 %** | 665.50 € | stávame sa najlacnejší |
| Albrecht DR 865 | 179.00 € | **153.50 €** | 25.0 % | **7.2 %** | 153.79 € | stávame sa najlacnejší |
| ETA 745390000 | 149.99 € | **124.50 €** | 32.0 % | **9.6 %** | 124.90 € | stávame sa najlacnejší |
| YAMAHA CD-C603 BLACK | 599.00 € | **574.00 €** | 10.9 % | **6.3 %** | 574.16 € | stávame sa najlacnejší |
| YAMAHA CD-C603 SILVER | 599.00 € | **574.00 €** | 12.2 % | **7.5 %** | 574.16 € | stávame sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 434.50 € | **409.50 €** | 15.0 % | **8.3 %** | 409.90 € | stávame sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **378.50 €** | 15.0 % | **8.1 %** | 378.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 983.90 € | **959.50 €** | 15.0 % | **12.2 %** | 959.90 € | stávame sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **401.90 €** | 15.0 % | **8.5 %** | 402.00 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 199.00 € | **175.50 €** | 22.9 % | **8.4 %** | 175.80 € | stávame sa najlacnejší |
| Concept ETV8560bcN | 510.90 € | **487.50 €** | 10.1 % | **5.0 %** | 426.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Cyberpad (modrý) | 473.90 € | **450.90 €** | 15.0 % | **9.4 %** | 451.00 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0304ncx (D9MH3EA) | 928.50 € | **905.50 €** | 10.0 % | **7.3 %** | 905.67 € | stávame sa najlacnejší |
| Inteligentný cyklotrenažér Cycplus T2H | 407.50 € | **384.50 €** | 15.0 % | **8.5 %** | 384.90 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 912.50 € | **889.90 €** | 10.1 % | **7.3 %** | 889.92 € | stávame sa najlacnejší |
| LG FCR5A85WW | 534.50 € | **512.00 €** | 10.1 % | **5.4 %** | 512.05 € | stávame sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 238.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Foldi Mini (čierny a or... | 258.00 € | **235.90 €** | 15.0 % | **5.1 %** | 235.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1399.00 € | **1377.00 €** | 11.0 % | **9.3 %** | 1377.03 € | stávame sa najlacnejší |
| GORENJE MO17E1W | 79.00 € | **57.50 €** | 46.3 % | **6.5 %** | 57.52 € | stávame sa najlacnejší |
| Candy BR 9N3BX-S | 461.90 € | **440.90 €** | 10.1 % | **5.1 %** | 427.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A7 bílá | 558.50 € | **537.50 €** | 10.0 % | **5.9 %** | 537.70 € | stávame sa najlacnejší |
| Electrolux EW7TN3372C | 566.90 € | **546.00 €** | 10.1 % | **6.0 %** | 546.10 € | stávame sa najlacnejší |
| Apple MacBook Neo 8/256GB blush MHFH4CZ | 841.00 € | **820.50 €** | 10.0 % | **7.3 %** | 820.67 € | stávame sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1329.50 €** | 15.0 % | **13.2 %** | 1329.90 € | stávame sa najlacnejší |
| LG GSXE90EVAD | 2218.90 € | **2198.50 €** | 10.0 % | **9.0 %** | 2198.90 € | stávame sa najlacnejší |
| GORENJE TH60E3B | 99.00 € | **79.00 €** | 33.7 % | **6.7 %** | 79.20 € | stávame sa najlacnejší |
| UREVO FoldiMix 5L Pro elektrický bežecký pás (strieb... | 518.50 € | **498.50 €** | 15.0 % | **10.6 %** | 498.90 € | stávame sa najlacnejší |
| JBL Partybox Stage 320 | 428.50 € | **409.00 €** | 10.0 % | **5.0 %** | 371.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality Hi | 227.50 € | **208.00 €** | 14.9 % | **5.1 %** | 208.50 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 657.90 € | **638.90 €** | 10.1 % | **6.9 %** | 639.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 268.00 € | **249.00 €** | 14.9 % | **6.8 %** | 249.33 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 65.00 € | **46.00 €** | 58.6 % | **12.3 %** | 46.50 € | stávame sa najlacnejší |
| Počítačový napájací zdroj DarkFlash PMT1050 (biely) | 122.00 € | **103.00 €** | 35.4 % | **14.3 %** | 103.50 € | stávame sa najlacnejší |
| Beko BDFN26540XP | 460.50 € | **441.90 €** | 10.1 % | **5.7 %** | 442.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 297.00 € | **278.90 €** | 15.0 % | **8.0 %** | 278.99 € | stávame sa najlacnejší |
| Gorenje FH50EAW | 499.50 € | **481.50 €** | 10.0 % | **6.1 %** | 481.82 € | stávame sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.50 €** | 14.9 % | **8.6 %** | 308.90 € | stávame sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 447.00 € | **429.00 €** | 14.9 % | **10.3 %** | 429.50 € | stávame sa najlacnejší |
| Gorenje GS541C10X | 387.90 € | **370.00 €** | 10.1 % | **5.0 %** | 352.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A6 bílá | 481.50 € | **464.00 €** | 10.0 % | **6.0 %** | 464.24 € | stávame sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 691.50 € | **674.50 €** | 10.1 % | **7.4 %** | 674.58 € | stávame sa najlacnejší |
| Gramofon KRUGER & MATZ TT-602 | 203.90 € | **186.90 €** | 15.0 % | **5.4 %** | 187.00 € | stávame sa najlacnejší |
| Gorenje DE69CS | 514.50 € | **497.50 €** | 10.0 % | **6.4 %** | 497.79 € | stávame sa najlacnejší |
| Niceboy HIVE Beans Black | 34.90 € | **18.00 €** | 126.3 % | **16.7 %** | 18.12 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 275.90 € | **259.00 €** | 15.0 % | **8.0 %** | 259.28 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 559.90 € | **543.00 €** | 9.9 % | **6.6 %** | 543.39 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 195.00 € | **178.90 €** | 15.0 % | **5.5 %** | 179.00 € | stávame sa najlacnejší |
| Samsung The Frame Pro QE55LS03HW | 1405.90 € | **1389.90 €** | 10.0 % | **8.8 %** | 1390.00 € | stávame sa najlacnejší |
| CANDY CCGMEE9025PX/E | 814.50 € | **798.90 €** | 10.0 % | **7.9 %** | 799.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 199.50 € | **183.90 €** | 15.1 % | **6.1 %** | 184.00 € | stávame sa najlacnejší |
| Guzzanti GZ 235 | 458.50 € | **443.00 €** | 10.1 % | **6.4 %** | 443.01 € | stávame sa najlacnejší |
| Káblové slúchadlá OneOdio OpenRock Link 10 (čierne) | 63.00 € | **47.50 €** | 51.8 % | **14.5 %** | 47.90 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 539.50 € | **524.00 €** | 10.1 % | **6.9 %** | 524.50 € | stávame sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **479.50 €** | 15.0 % | **11.5 %** | 479.90 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 411.90 € | **397.00 €** | 10.1 % | **6.1 %** | 397.09 € | stávame sa najlacnejší |
| BEKO B5RCNA406HXB3 | 534.90 € | **520.00 €** | 10.0 % | **6.9 %** | 520.40 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A6 (biele) | 69.00 € | **54.50 €** | 44.8 % | **14.4 %** | 54.90 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 522.50 € | **508.00 €** | 10.0 % | **7.0 %** | 508.40 € | stávame sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **408.50 €** | 15.1 % | **11.1 %** | 408.90 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 472.90 € | **458.90 €** | 10.0 % | **6.8 %** | 459.00 € | stávame sa najlacnejší |
| Whirlpool OMSR58CU1SX | 343.90 € | **329.90 €** | 10.1 % | **5.6 %** | 330.00 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 332.50 € | **318.90 €** | 10.1 % | **5.6 %** | 319.00 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 173.50 € | **159.90 €** | 15.1 % | **6.0 %** | 159.95 € | stávame sa najlacnejší |
| Ovládacia páka lietadla MOZA MH16 | 159.00 € | **145.50 €** | 14.8 % | **5.1 %** | 145.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GV673B65 | 487.50 € | **474.00 €** | 10.1 % | **7.0 %** | 474.03 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 375.50 € | **362.00 €** | 10.0 % | **6.1 %** | 362.05 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **39.00 €** | 50.5 % | **11.8 %** | 39.16 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 481.90 € | **468.50 €** | 10.0 % | **7.0 %** | 468.60 € | stávame sa najlacnejší |
| Boxovací pytel MMA DBX BUSHIDO 130 cm 40 kg | 147.90 € | **134.90 €** | 15.1 % | **5.0 %** | 130.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GV561C10 | 348.50 € | **335.50 €** | 10.1 % | **6.0 %** | 335.61 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 119.00 € | **106.00 €** | 22.6 % | **9.2 %** | 106.20 € | stávame sa najlacnejší |
| AMICA 510CE1.30P(W) | 281.90 € | **269.00 €** | 10.0 % | **5.0 %** | 259.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Sensazione černý | 343.50 € | **330.90 €** | 10.0 % | **6.0 %** | 330.98 € | stávame sa najlacnejší |
| BEKO B5RCNA405HG | 451.50 € | **438.90 €** | 10.1 % | **7.0 %** | 439.00 € | stávame sa najlacnejší |
| Candy GD 48SB8C-S | 311.50 € | **298.90 €** | 10.1 % | **5.7 %** | 299.00 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 182.50 € | **169.90 €** | 15.1 % | **7.2 %** | 169.95 € | stávame sa najlacnejší |
| JBL Boombox 3 BLACK | 309.50 € | **297.00 €** | 9.4 % | **5.0 %** | 260.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje N62CS2XL4 | 447.50 € | **435.00 €** | 10.1 % | **7.0 %** | 435.10 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 455.50 € | **443.00 €** | 10.0 % | **7.0 %** | 443.20 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 42.99 € | **30.90 €** | 57.9 % | **13.5 %** | 30.93 € | stávame sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 251.90 € | **239.90 €** | 15.0 % | **9.5 %** | 239.95 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (čierny) | 272.90 € | **260.90 €** | 15.0 % | **10.0 %** | 261.00 € | stávame sa najlacnejší |
| Beko BDFN26540WP | 425.50 € | **413.50 €** | 10.1 % | **7.0 %** | 413.60 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 211.50 € | **199.50 €** | 14.9 % | **8.4 %** | 199.90 € | stávame sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.00 € | **134.50 €** | 15.0 % | **5.9 %** | 134.90 € | stávame sa najlacnejší |
| LEIFHEIT Žehlicí prkno Compact M Plus NF | 73.99 € | **62.50 €** | 37.8 % | **16.4 %** | 62.78 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 405.90 € | **394.50 €** | 10.0 % | **6.9 %** | 394.70 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 378.90 € | **367.50 €** | 10.0 % | **6.7 %** | 367.90 € | stávame sa najlacnejší |
| Samsung OLED QE48S85H | 680.00 € | **668.90 €** | 11.6 % | **9.8 %** | 669.00 € | stávame sa najlacnejší |
| Bezdrátové čidlo koncentrace CO2 GARNI 102Q | 131.50 € | **120.50 €** | 14.9 % | **5.3 %** | 120.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-1400-24 UPS 1400W 24V čist... | 240.00 € | **229.00 €** | 14.9 % | **9.7 %** | 229.20 € | stávame sa najlacnejší |
| AMICA DI6421B | 395.50 € | **384.50 €** | 10.0 % | **6.9 %** | 384.70 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **31.00 €** | 48.1 % | **9.3 %** | 31.21 € | stávame sa najlacnejší |
| ETA 723590000 | 338.50 € | **327.50 €** | 10.1 % | **6.5 %** | 327.75 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 339.50 € | **328.50 €** | 10.0 % | **6.5 %** | 328.82 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK KARMA PRO 10x32 | 169.50 € | **158.90 €** | 15.0 % | **7.8 %** | 159.00 € | stávame sa najlacnejší |
| Guzzanti GZ 338 | 581.00 € | **570.50 €** | 10.0 % | **8.0 %** | 570.59 € | stávame sa najlacnejší |
| Concept IDV5160wh | 363.50 € | **353.00 €** | 10.1 % | **7.0 %** | 353.10 € | stávame sa najlacnejší |
| Whirlpool FFS 7469 W EE | 374.50 € | **364.00 €** | 10.1 % | **7.0 %** | 364.20 € | stávame sa najlacnejší |
| GORENJE WNHPI84AS/A | 365.50 € | **355.00 €** | 10.1 % | **6.9 %** | 355.50 € | stávame sa najlacnejší |
| Tesla 40E635BFS 40" FHD LED AndroidTV 11 | 224.90 € | **214.50 €** | 10.2 % | **5.1 %** | 184.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150 KM0790-BLED+ masáž... | 122.90 € | **112.50 €** | 15.2 % | **5.4 %** | 95.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 555.90 € | **545.50 €** | 10.1 % | **8.0 %** | 545.74 € | stávame sa najlacnejší |
| ETA 006890000 | 59.99 € | **49.90 €** | 26.4 % | **5.1 %** | 47.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Albrecht DR 54 | 72.90 € | **62.90 €** | 25.0 % | **7.8 %** | 63.00 € | stávame sa najlacnejší |
| Evolveo StrongVision PRO 4G, fotopast | 223.90 € | **213.90 €** | 10.0 % | **5.1 %** | 209.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Měnič napětí EPever IPower IP2000-42-Plus-T 2000W 48V | 219.50 € | **209.50 €** | 15.1 % | **9.9 %** | 209.52 € | stávame sa najlacnejší |
| AMICA DI 6412 CB | 279.90 € | **269.90 €** | 10.1 % | **6.2 %** | 269.98 € | stávame sa najlacnejší |
| Gorenje WE694A1 | 357.50 € | **347.50 €** | 10.1 % | **7.0 %** | 347.60 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Army 10x40 se zaměřo... | 118.50 € | **108.50 €** | 14.9 % | **5.2 %** | 108.66 € | stávame sa najlacnejší |
| TEFAL FR 495070 | 109.00 € | **99.00 €** | 21.5 % | **10.3 %** | 99.20 € | stávame sa najlacnejší |
| Rowenta RH9A73WO | 301.00 € | **291.00 €** | 10.0 % | **6.4 %** | 291.25 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 294.50 € | **284.50 €** | 10.1 % | **6.3 %** | 284.89 € | stávame sa najlacnejší |
| Reproduktory Edifier R2850DB 2.0 (čierne) | 281.00 € | **271.00 €** | 14.9 % | **10.9 %** | 271.50 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A1 Pro (čierne) | 43.00 € | **33.00 €** | 47.9 % | **13.5 %** | 33.50 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **468.00 €** | 15.0 % | **12.6 %** | 468.50 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 51.1 % | **9.5 %** | 26.17 € | stávame sa najlacnejší |
| Candy CA6 NP5B3HTX | 350.50 € | **340.90 €** | 10.0 % | **7.0 %** | 341.00 € | stávame sa najlacnejší |
| Kávovar na kapsule 4v1 1450W HiBREW H3A | 114.00 € | **104.50 €** | 14.8 % | **5.2 %** | 104.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 60/700 AZ2 | 157.00 € | **147.50 €** | 14.9 % | **8.0 %** | 147.53 € | stávame sa najlacnejší |
| Rowenta RH98A9WO | 284.50 € | **275.00 €** | 10.0 % | **6.3 %** | 275.04 € | stávame sa najlacnejší |
| Whirlpool W7F HP33 A | 347.00 € | **337.50 €** | 10.0 % | **7.0 %** | 337.60 € | stávame sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 424.50 € | **415.00 €** | 10.0 % | **7.6 %** | 415.21 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PLUS 70 | 152.50 € | **143.00 €** | 14.9 % | **7.8 %** | 143.29 € | stávame sa najlacnejší |
| Orbitrek REBEL ACTIVE RBA-1011 | 143.50 € | **134.00 €** | 14.9 % | **7.3 %** | 134.32 € | stávame sa najlacnejší |
| Beko VRT96425VD | 261.50 € | **252.00 €** | 10.1 % | **6.1 %** | 252.34 € | stávame sa najlacnejší |
| Amica KF 17191 | 39.00 € | **29.50 €** | 60.1 % | **21.1 %** | 29.86 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 148.50 € | **139.00 €** | 15.1 % | **7.8 %** | 139.41 € | stávame sa najlacnejší |
| Guzzanti GZ 325 | 262.50 € | **253.00 €** | 10.1 % | **6.1 %** | 253.50 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCR001CBK SmartLife | 133.90 € | **124.50 €** | 15.1 % | **7.1 %** | 124.90 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1715, 2x bezdrátový ... | 204.90 € | **195.50 €** | 15.0 % | **9.7 %** | 195.90 € | stávame sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **45.50 €** | 37.3 % | **13.8 %** | 45.80 € | stávame sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 50.86 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 29.90 € | **20.50 €** | 57.4 % | **7.9 %** | 20.89 € | stávame sa najlacnejší |
| Reproduktor Edifier ES60 Bluetooth (biely) | 105.00 € | **95.90 €** | 15.0 % | **5.0 %** | 95.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 426.50 € | **417.50 €** | 15.0 % | **12.5 %** | 417.60 € | stávame sa najlacnejší |
| Tesla GSM-LTE zesilovač/opakovač 900/1800 MHz - komp... | 190.50 € | **181.50 €** | 14.9 % | **9.5 %** | 181.76 € | stávame sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **39.00 €** | 38.7 % | **13.0 %** | 39.50 € | stávame sa najlacnejší |
| Moza Racing MTLP AS009 Panel pre vzlet a pristátie (PC) | 154.50 € | **145.90 €** | 15.1 % | **8.7 %** | 146.00 € | stávame sa najlacnejší |
| Gorenje F49CPW | 203.50 € | **194.90 €** | 10.2 % | **5.5 %** | 195.00 € | stávame sa najlacnejší |
| Diagnostický skener motocyklov Ancel MT100 | 97.50 € | **89.00 €** | 15.1 % | **5.0 %** | 68.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **122.50 €** | 14.9 % | **7.5 %** | 122.90 € | stávame sa najlacnejší |
| Slúchadlá Oneodio Pro30 (strieborné) | 40.00 € | **31.50 €** | 44.5 % | **13.8 %** | 31.90 € | stávame sa najlacnejší |
| Motorcycle Intercom EJEAS MS20 | 135.50 € | **127.00 €** | 15.2 % | **8.0 %** | 127.50 € | stávame sa najlacnejší |
| GUZZANTI GZ 220A | 224.90 € | **216.50 €** | 10.2 % | **6.1 %** | 216.54 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 32.00 € | **23.90 €** | 43.3 % | **7.0 %** | 23.99 € | stávame sa najlacnejší |
| Projektor Blitzwolf BW-V1 Ultra | 92.00 € | **84.00 €** | 15.0 % | **5.0 %** | 60.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150  černo zelené | 93.50 € | **85.50 €** | 15.0 % | **5.2 %** | 77.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150  černo šedé | 92.90 € | **84.90 €** | 15.0 % | **5.1 %** | 77.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herní křeslo KRUGER & MATZ GX-150 černé | 93.50 € | **85.50 €** | 15.0 % | **5.2 %** | 79.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 109A | 181.90 € | **173.90 €** | 10.1 % | **5.2 %** | 170.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 202.00 € | **194.00 €** | 14.9 % | **10.4 %** | 194.02 € | stávame sa najlacnejší |
| JBL PartyBox 330 | 544.90 € | **536.90 €** | 7.9 % | **6.4 %** | 537.00 € | stávame sa najlacnejší |
| Guzzanti GZ 195 | 436.90 € | **428.90 €** | 10.0 % | **8.0 %** | 429.00 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **14.00 €** | 70.9 % | **8.8 %** | 14.42 € | stávame sa najlacnejší |
| Tepovač GETI GW07 | 89.90 € | **82.00 €** | 15.2 % | **5.0 %** | 81.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **185.00 €** | 15.1 % | **10.4 %** | 185.50 € | stávame sa najlacnejší |
| JBL Charge 6, černý | 166.50 € | **158.90 €** | 10.1 % | **5.0 %** | 129.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér do auta Ottocast OttoAibox E2 Car... | 145.50 € | **137.90 €** | 14.9 % | **8.9 %** | 138.00 € | stávame sa najlacnejší |
| Rádio TechniSat DIGITRADIO 317 /bílé/ | 89.00 € | **81.50 €** | 14.9 % | **5.2 %** | 79.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 44GW | 205.50 € | **198.00 €** | 10.1 % | **6.1 %** | 198.25 € | stávame sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 232.50 € | **225.00 €** | 10.1 % | **6.5 %** | 225.37 € | stávame sa najlacnejší |
| BEKO STM4116B | 39.00 € | **31.50 €** | 32.7 % | **7.2 %** | 31.90 € | stávame sa najlacnejší |
| Ultimea Poseidon D70 Soundbar | 166.50 € | **159.00 €** | 15.1 % | **9.9 %** | 159.50 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **101.00 €** | 14.9 % | **7.0 %** | 101.50 € | stávame sa najlacnejší |
| Gorenje W3NGPI74A3S | 266.90 € | **259.50 €** | 10.0 % | **7.0 %** | 259.84 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 92.00 € | **84.90 €** | 14.8 % | **5.9 %** | 85.00 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110W,bílá | 19.99 € | **12.90 €** | 62.8 % | **5.1 %** | 12.99 € | stávame sa najlacnejší |
| JBL PartyBox 330W | 544.90 € | **537.90 €** | 6.4 % | **5.0 %** | 537.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 210A | 221.00 € | **214.00 €** | 10.0 % | **6.5 %** | 214.02 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 204.00 € | **197.00 €** | 14.9 % | **11.0 %** | 197.09 € | stávame sa najlacnejší |
| SONOFF NSPanel Pro 120 Smart Control Panel Matter Wi... | 112.90 € | **105.90 €** | 15.1 % | **8.0 %** | 106.00 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 150Ah VIPOW BAT0498 Bluetooth | 408.50 € | **401.50 €** | 15.0 % | **13.0 %** | 401.78 € | stávame sa najlacnejší |
| Candy CA20FMW7NG Candy Wave 600 | 154.50 € | **147.50 €** | 10.2 % | **5.2 %** | 147.80 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **88.50 €** | 14.9 % | **6.5 %** | 88.90 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP WL HD | 86.50 € | **79.50 €** | 15.3 % | **5.9 %** | 79.90 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX110P, růžová | 19.90 € | **12.90 €** | 62.1 % | **5.1 %** | 12.99 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 183.90 € | **177.00 €** | 10.2 % | **6.0 %** | 177.04 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 194.90 € | **188.00 €** | 10.1 % | **6.2 %** | 188.22 € | stávame sa najlacnejší |
| Schody pre podstielky Catlink Scooper | 82.90 € | **76.00 €** | 15.1 % | **5.5 %** | 76.50 € | stávame sa najlacnejší |
| TEFAL HB 643138 | 54.90 € | **48.00 €** | 24.9 % | **9.2 %** | 48.38 € | stávame sa najlacnejší |
| Zelmer ZIR1505 | 31.90 € | **25.00 €** | 37.0 % | **7.4 %** | 25.47 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 354.50 € | **347.90 €** | 15.1 % | **12.9 %** | 348.00 € | stávame sa najlacnejší |
| Slúchadlá Oneodio Pro50 (čierne) | 44.50 € | **37.90 €** | 34.4 % | **14.5 %** | 38.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 8501A | 157.00 € | **150.50 €** | 10.0 % | **5.5 %** | 150.71 € | stávame sa najlacnejší |
| Guzzanti GZ 09B2 | 186.50 € | **180.00 €** | 10.0 % | **6.2 %** | 180.22 € | stávame sa najlacnejší |
| Tesla 32E325BH 32" HD LED TV | 134.50 € | **128.00 €** | 10.4 % | **5.1 %** | 128.30 € | stávame sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.50 €** | 14.8 % | **6.2 %** | 80.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A6 (čierne) | 69.00 € | **62.50 €** | 26.3 % | **14.4 %** | 62.90 € | stávame sa najlacnejší |
| Inteligentný WiFi termostat Meross MTS200BHK(EU) (Ho... | 46.50 € | **40.00 €** | 31.9 % | **13.4 %** | 40.50 € | stávame sa najlacnejší |
| Digitálny fotorámik Arzopa D10 (zlatý) 10,1" | 80.50 € | **74.00 €** | 14.9 % | **5.6 %** | 74.50 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **216.00 €** | 15.0 % | **11.7 %** | 216.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DS900 AIR (čierna) | 40.50 € | **34.00 €** | 35.3 % | **13.6 %** | 34.50 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 77.50 € | **71.00 €** | 15.3 % | **5.6 %** | 71.50 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 77.50 € | **71.00 €** | 15.4 % | **5.7 %** | 71.50 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 24.99 € | **18.50 €** | 47.5 % | **9.2 %** | 18.67 € | stávame sa najlacnejší |
| Ariete ART 4631 | 137.90 € | **131.50 €** | 10.2 % | **5.0 %** | 103.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH6A35WO | 135.90 € | **129.50 €** | 10.3 % | **5.1 %** | 128.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion H1060P | 74.90 € | **68.50 €** | 15.2 % | **5.4 %** | 68.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 203.90 € | **197.50 €** | 10.2 % | **6.7 %** | 197.52 € | stávame sa najlacnejší |
| Tefal GC728D10 | 169.90 € | **163.50 €** | 10.1 % | **6.0 %** | 163.90 € | stávame sa najlacnejší |
| Drôtové slúchadlá Oneodio A71D (čierne) | 25.90 € | **19.50 €** | 51.2 % | **13.8 %** | 19.90 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **424.50 €** | 15.0 % | **13.3 %** | 424.90 € | stávame sa najlacnejší |
| Beko BDFS26046XQ | 321.90 € | **315.50 €** | 10.1 % | **7.9 %** | 315.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio OpenRock E (čierne) | 31.00 € | **24.90 €** | 42.7 % | **14.6 %** | 25.00 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (strieborné) | 124.00 € | **117.90 €** | 15.0 % | **9.4 %** | 118.00 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Nano+ s diktafónom (zelené) | 124.00 € | **117.90 €** | 15.0 % | **9.4 %** | 118.00 € | stávame sa najlacnejší |
| Gorenje GS541C10W | 344.50 € | **338.50 €** | 6.9 % | **5.1 %** | 333.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová vesta HMS KOR20 20 kg | 86.90 € | **80.90 €** | 15.0 % | **7.1 %** | 80.94 € | stávame sa najlacnejší |
| Candy CDPH 2D947X | 321.50 € | **315.50 €** | 10.1 % | **8.0 %** | 315.60 € | stávame sa najlacnejší |
| Guzzanti GZ 215RB | 310.50 € | **304.50 €** | 10.1 % | **7.9 %** | 304.70 € | stávame sa najlacnejší |
| Braun CG9043 | 219.00 € | **213.00 €** | 10.0 % | **7.0 %** | 213.28 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Gorenje R49CPW | 284.50 € | **278.50 €** | 10.1 % | **7.8 %** | 278.90 € | stávame sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **16.00 €** | 49.2 % | **8.6 %** | 16.50 € | stávame sa najlacnejší |
| Ultima Apollo S70 Ultra Soundbar | 204.90 € | **199.00 €** | 15.0 % | **11.7 %** | 199.50 € | stávame sa najlacnejší |
| Gorenje WPNEI72SA1SWIFI | 291.90 € | **286.00 €** | 10.1 % | **7.9 %** | 286.30 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 298.90 € | **293.00 €** | 10.1 % | **8.0 %** | 293.30 € | stávame sa najlacnejší |
| Gorenje W11NHPI84AS | 290.90 € | **285.00 €** | 10.1 % | **7.9 %** | 285.50 € | stávame sa najlacnejší |
| Gorenje RK58DPB4I | 299.50 € | **293.90 €** | 10.1 % | **8.0 %** | 294.00 € | stávame sa najlacnejší |
| Candy ProWash 550 SLIM BP 37SBL8-S | 278.50 € | **272.90 €** | 10.1 % | **7.9 %** | 273.00 € | stávame sa najlacnejší |
| Pamäťová karta Lexar Professional SILVER PLUS SDXC 1... | 66.50 € | **60.90 €** | 14.8 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 80.50 € | **74.90 €** | 15.3 % | **7.2 %** | 74.94 € | stávame sa najlacnejší |
| Guzzanti GZ 35B1 | 142.50 € | **136.90 €** | 10.0 % | **5.7 %** | 136.96 € | stávame sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 10x42 | 160.50 € | **154.90 €** | 15.1 % | **11.1 %** | 154.99 € | stávame sa najlacnejší |
| Niimbot K3 Commercial Cream | 65.00 € | **59.50 €** | 14.8 % | **5.1 %** | 58.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Manuálny mlynček na kávu HiBREW G4B s nastaviteľným ... | 65.00 € | **59.50 €** | 15.0 % | **5.3 %** | 59.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 8x42 | 156.00 € | **150.50 €** | 15.0 % | **10.9 %** | 150.61 € | stávame sa najlacnejší |
| Solární powerbanka OXE SPB33-B 33800 mAh | 104.50 € | **99.00 €** | 15.0 % | **8.9 %** | 99.13 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 38.50 € | **33.00 €** | 61.7 % | **38.6 %** | 33.14 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 678.00 € | **672.50 €** | 10.0 % | **9.1 %** | 672.69 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 119.00 € | **113.50 €** | 17.0 % | **11.6 %** | 113.79 € | stávame sa najlacnejší |
| Počítačová skriňa Darflash FT418 PRO + 7 ventilátoro... | 78.50 € | **73.00 €** | 23.0 % | **14.4 %** | 73.50 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **799.00 €** | 15.0 % | **14.2 %** | 799.50 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **149.00 €** | 15.1 % | **11.0 %** | 149.50 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 118.90 € | **113.50 €** | 10.3 % | **5.3 %** | 113.70 € | stávame sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **114.50 €** | 11.3 % | **6.3 %** | 114.88 € | stávame sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 176.90 € | **171.50 €** | 10.1 % | **6.7 %** | 171.90 € | stávame sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 63.90 € | **58.50 €** | 15.0 % | **5.3 %** | 58.73 € | stávame sa najlacnejší |
| Beko BM3WFSU37213WB | 298.90 € | **293.50 €** | 10.0 % | **8.0 %** | 293.60 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **333.90 €** | 15.0 % | **13.3 %** | 334.00 € | stávame sa najlacnejší |
| MKF 23MZ601 mezikus | 53.00 € | **47.90 €** | 73.1 % | **56.5 %** | 47.99 € | stávame sa najlacnejší |
| Meteostanice TESLA Device MS360se - chytrá WiFi s ex... | 61.50 € | **56.50 €** | 15.3 % | **5.9 %** | 50.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8079 DIGITAL AIR FRYER... | 57.90 € | **52.90 €** | 15.1 % | **5.2 %** | 50.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 10x40 | 59.00 € | **54.00 €** | 14.9 % | **5.1 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 7x50 | 59.00 € | **54.00 €** | 14.9 % | **5.1 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.6 % | **16.4 %** | 24.10 € | stávame sa najlacnejší |
| Braun IS5247.VI | 188.50 € | **183.50 €** | 10.1 % | **7.2 %** | 183.80 € | stávame sa najlacnejší |
| Tefal GC772830 | 225.50 € | **220.50 €** | 10.1 % | **7.6 %** | 220.90 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 119.50 € | **114.50 €** | 14.9 % | **10.0 %** | 114.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DS900 (čierna) + 7 venti... | 74.00 € | **69.00 €** | 22.2 % | **13.9 %** | 69.50 € | stávame sa najlacnejší |
| Gorenje F492PW | 174.90 € | **170.00 €** | 9.0 % | **5.9 %** | 170.18 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 79.90 € | **75.00 €** | 15.0 % | **8.0 %** | 75.30 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 250.90 € | **246.00 €** | 10.0 % | **7.9 %** | 246.40 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **11.00 €** | 56.1 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.90 € | **344.00 €** | 15.0 % | **13.4 %** | 344.50 € | stávame sa najlacnejší |
| Niimbot K3 Commercial Lake Blue | 62.50 € | **57.90 €** | 15.0 % | **6.5 %** | 58.00 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Street X-BASS KM... | 81.50 € | **76.90 €** | 15.2 % | **8.7 %** | 76.94 € | stávame sa najlacnejší |
| Reproduktory Edifier R1100 2.0 (čierne) | 78.50 € | **73.90 €** | 15.0 % | **8.3 %** | 74.00 € | stávame sa najlacnejší |
| Strong Q1 mini projektor | 109.00 € | **104.50 €** | 10.0 % | **5.5 %** | 84.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MAXXO VM Profi | 99.00 € | **94.50 €** | 10.5 % | **5.4 %** | 92.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1-Ss | 130.50 € | **126.00 €** | 10.0 % | **6.2 %** | 126.07 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 39.00 € | **34.50 €** | 24.1 % | **9.8 %** | 34.60 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 39.00 € | **34.50 €** | 24.5 % | **10.2 %** | 34.60 € | stávame sa najlacnejší |
| Maxxo Chamber Line 40 | 251.50 € | **247.00 €** | 10.1 % | **8.1 %** | 247.21 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 15.00 € | **10.50 €** | 53.2 % | **7.2 %** | 10.76 € | stávame sa najlacnejší |
| GUZZANTI GZ 363A | 599.00 € | **594.50 €** | 10.0 % | **9.2 %** | 594.81 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **329.50 €** | 14.9 % | **13.4 %** | 329.90 € | stávame sa najlacnejší |
| Blesk GODOX TT600 | 81.50 € | **77.00 €** | 15.0 % | **8.7 %** | 77.50 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **82.00 €** | 15.2 % | **9.2 %** | 82.50 € | stávame sa najlacnejší |
| KOMA RK01 - Univerzální rotační kartáč | 22.99 € | **18.50 €** | 42.9 % | **15.0 %** | 18.90 € | stávame sa najlacnejší |
| Salente Combo-4In1 | 126.90 € | **122.50 €** | 10.0 % | **6.2 %** | 122.56 € | stávame sa najlacnejší |
| Baterie olověná  12V / 65Ah  EMOS bezúdržbový akumul... | 174.90 € | **170.50 €** | 15.1 % | **12.2 %** | 170.63 € | stávame sa najlacnejší |
| Solight LED vianočné záves, hviezdy, šírka 1,8m, 77L... | 13.50 € | **9.10 €** | 56.1 % | **5.2 %** | 9.19 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 561.00 € | **556.90 €** | 7.4 % | **6.6 %** | 557.00 € | stávame sa najlacnejší |
| Russell Hobbs 25630-56 | 94.50 € | **90.50 €** | 10.0 % | **5.4 %** | 89.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.00 € | **44.00 €** | 14.8 % | **5.2 %** | 43.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL GC 305012 | 95.50 € | **91.50 €** | 10.1 % | **5.5 %** | 91.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 104.90 € | **100.90 €** | 10.1 % | **5.9 %** | 100.94 € | stávame sa najlacnejší |
| Electrolux MCK CZ | 29.90 € | **25.90 €** | 46.4 % | **26.8 %** | 25.95 € | stávame sa najlacnejší |
| BROTHER DCP-T535DW | 207.50 € | **203.50 €** | 10.1 % | **8.0 %** | 203.59 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1000 URZ3406-LFP4 700W 12V | 126.00 € | **122.00 €** | 14.8 % | **11.2 %** | 122.09 € | stávame sa najlacnejší |
| Braun SI3042VI | 39.90 € | **35.90 €** | 26.8 % | **14.1 %** | 36.00 € | stávame sa najlacnejší |
| Guzzanti GZ 86RR | 205.90 € | **201.90 €** | 10.1 % | **7.9 %** | 202.00 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 42.00 € | **38.00 €** | 23.2 % | **11.5 %** | 38.17 € | stávame sa najlacnejší |
| Soundbar KRUGER & MATZ Planet 2.1 | 58.50 € | **54.50 €** | 15.1 % | **7.3 %** | 54.77 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 69.50 € | **65.50 €** | 15.3 % | **8.7 %** | 65.89 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash AIRNOVA (biela) + 3 vent... | 72.50 € | **68.50 €** | 21.1 % | **14.4 %** | 68.90 € | stávame sa najlacnejší |
| Vodný chladič CPU Darkflash DV360S (čierny) | 102.00 € | **98.00 €** | 19.2 % | **14.5 %** | 98.50 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 73.00 € | **69.00 €** | 14.6 % | **8.3 %** | 69.50 € | stávame sa najlacnejší |
| Amica OTP6641WG | 99.90 € | **96.00 €** | 10.0 % | **5.7 %** | 96.26 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **102.00 €** | 15.1 % | **10.9 %** | 102.50 € | stávame sa najlacnejší |
| Slúchadlá Oneodio Pro10 (červené) | 26.90 € | **23.00 €** | 30.8 % | **11.8 %** | 23.50 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 46.90 € | **43.00 €** | 15.1 % | **5.5 %** | 43.50 € | stávame sa najlacnejší |
| Modul plynu Moza Racing AS015 TQB | 45.50 € | **41.90 €** | 14.8 % | **5.7 %** | 41.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **45.90 €** | 15.3 % | **6.9 %** | 46.00 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 7.4V 60C 2S1P Lipo PC materi... | 43.50 € | **39.90 €** | 15.5 % | **5.9 %** | 40.00 € | stávame sa najlacnejší |
| Ariete ART 583/03 | 76.50 € | **72.90 €** | 10.3 % | **5.1 %** | 69.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko FRL5474B | 73.50 € | **69.90 €** | 10.7 % | **5.3 %** | 70.00 € | stávame sa najlacnejší |
| JBL Grip Red | 83.00 € | **79.50 €** | 10.1 % | **5.5 %** | 73.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Grip White | 83.00 € | **79.50 €** | 10.1 % | **5.5 %** | 73.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio A10 (čierne) | 60.00 € | **56.50 €** | 11.8 % | **5.3 %** | 53.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A10 ANC (biele) | 60.00 € | **56.50 €** | 11.7 % | **5.2 %** | 53.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 214.00 € | **210.50 €** | 15.0 % | **13.1 %** | 210.59 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer černý | 129.00 € | **125.50 €** | 10.0 % | **7.0 %** | 125.64 € | stávame sa najlacnejší |
| EDIFIER T5s subwoofer hnědý | 129.00 € | **125.50 €** | 10.0 % | **7.0 %** | 125.64 € | stávame sa najlacnejší |
| Guzzanti GZ 90A1 | 132.50 € | **129.00 €** | 10.4 % | **7.4 %** | 129.18 € | stávame sa najlacnejší |
| Pohybové čidlo ORBIS DICROMAT 2+CR | 74.00 € | **70.50 €** | 14.8 % | **9.3 %** | 70.75 € | stávame sa najlacnejší |
| Guzzanti GZ 8401SE | 128.00 € | **124.50 €** | 10.1 % | **7.1 %** | 124.79 € | stávame sa najlacnejší |
| BEKO MGC20130BFB | 82.00 € | **78.50 €** | 13.4 % | **8.5 %** | 78.81 € | stávame sa najlacnejší |
| GUZZANTI GZ 1226 | 192.50 € | **189.00 €** | 8.8 % | **6.8 %** | 189.34 € | stávame sa najlacnejší |
| CANON PIXMA G3430 Black | 146.00 € | **142.50 €** | 7.8 % | **5.2 %** | 142.85 € | stávame sa najlacnejší |
| Stropné svietidlo Yeelight C2201C300 | 45.00 € | **41.50 €** | 14.5 % | **5.6 %** | 41.90 € | stávame sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.50 €** | 14.9 % | **8.7 %** | 61.90 € | stávame sa najlacnejší |
| Káblové slúchadlá Oneodio A71 (čierno-červené) | 27.00 € | **23.50 €** | 30.7 % | **13.8 %** | 23.90 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **92.00 €** | 14.9 % | **10.7 %** | 92.50 € | stávame sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 55.50 € | **52.00 €** | 15.3 % | **8.0 %** | 52.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **89.00 €** | 15.1 % | **10.8 %** | 89.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **89.00 €** | 15.1 % | **10.8 %** | 89.50 € | stávame sa najlacnejší |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 182.50 € | **179.00 €** | 15.0 % | **12.8 %** | 179.50 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 93.50 € | **90.00 €** | 19.1 % | **14.6 %** | 90.50 € | stávame sa najlacnejší |
| KOMA HPU1 - Univerzální hubice | 15.99 € | **12.50 €** | 45.6 % | **13.8 %** | 12.90 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 209.90 € | **206.50 €** | 10.1 % | **8.3 %** | 206.87 € | stávame sa najlacnejší |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 18.90 € | **15.50 €** | 39.2 % | **14.1 %** | 15.59 € | stávame sa najlacnejší |
| Autochladnička TEESA TSA5004.1 s funkcí ohřevu, 20l | 49.90 € | **46.50 €** | 15.4 % | **7.6 %** | 46.59 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 35.90 € | **32.50 €** | 22.8 % | **11.2 %** | 32.85 € | stávame sa najlacnejší |
| Modul plynu Moza Racing AS016 TQA | 44.90 € | **41.50 €** | 15.2 % | **6.4 %** | 41.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **259.50 €** | 15.0 % | **13.5 %** | 259.90 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **44.90 €** | 14.5 % | **7.1 %** | 45.00 € | stávame sa najlacnejší |
| Moza Racing modul osi Z AS003 | 96.00 € | **92.90 €** | 14.9 % | **11.2 %** | 93.00 € | stávame sa najlacnejší |
| Inteligentná zástrčka WiFi Gosund SP111 3680W 16A, Tuya | 36.50 € | **33.50 €** | 15.7 % | **6.2 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 68.50 € | **65.50 €** | 10.2 % | **5.4 %** | 55.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor PWM Victron Energy BlueSolar-LCD&U... | 38.90 € | **35.90 €** | 14.9 % | **6.1 %** | 35.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný WiFi termostat Meross MTS200HK(EU) (Hom... | 44.90 € | **41.90 €** | 22.9 % | **14.7 %** | 42.00 € | stávame sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.90 €** | 15.0 % | **6.5 %** | 38.00 € | stávame sa najlacnejší |
| Guzzanti GZ 90B1 | 160.50 € | **157.50 €** | 10.1 % | **8.0 %** | 157.61 € | stávame sa najlacnejší |
| Čistička vzduchu TEESA PURE LIFE P500 | 76.50 € | **73.50 €** | 15.1 % | **10.6 %** | 73.69 € | stávame sa najlacnejší |
| Vařič elektrický TEESA TSA0203 | 35.00 € | **32.00 €** | 15.0 % | **5.2 %** | 32.29 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 35.50 € | **32.50 €** | 15.3 % | **5.5 %** | 32.89 € | stávame sa najlacnejší |
| Činková tyč olympijská rovná s ložisky 120cm 9kg 50m... | 55.50 € | **52.50 €** | 15.0 % | **8.8 %** | 52.89 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **47.00 €** | 14.6 % | **7.7 %** | 47.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 41.00 € | **38.00 €** | 22.2 % | **13.3 %** | 38.50 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY N70 HT18 LITE (fialové) | 47.00 € | **44.00 €** | 15.1 % | **7.7 %** | 44.50 € | stávame sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **44.00 €** | 15.1 % | **7.7 %** | 44.50 € | stávame sa najlacnejší |
| Cyklocomputer Cycplus M3 - kompatibilný s: Strava, T... | 36.00 € | **33.00 €** | 14.9 % | **5.3 %** | 33.50 € | stávame sa najlacnejší |
| Slúchadlá Oneodio Pro10 (modré) | 26.90 € | **24.00 €** | 27.5 % | **13.8 %** | 24.50 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 270.90 € | **268.00 €** | 10.0 % | **8.8 %** | 268.39 € | stávame sa najlacnejší |
| Inteligentný vypínač WiFi s monitorovaním energie So... | 35.50 € | **32.90 €** | 14.6 % | **6.2 %** | 28.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 49.00 € | stávame sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **30.90 €** | 14.5 % | **5.6 %** | 31.00 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **42.90 €** | 21.5 % | **14.6 %** | 43.00 € | stávame sa najlacnejší |
| Gens ace G-Tech Soaring 4000mAh 11.1V 30C 3S1P Lipo ... | 37.50 € | **34.90 €** | 15.3 % | **7.3 %** | 35.00 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.90 €** | 56.5 % | **31.9 %** | 13.96 € | stávame sa najlacnejší |
| Tefal FW501815 | 136.50 € | **133.90 €** | 10.1 % | **8.0 %** | 134.00 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **101.90 €** | 15.1 % | **12.3 %** | 102.00 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **85.90 €** | 14.9 % | **11.5 %** | 86.00 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **85.90 €** | 14.9 % | **11.5 %** | 86.00 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **254.90 €** | 15.1 % | **13.9 %** | 255.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **227.90 €** | 15.0 % | **13.7 %** | 228.00 € | stávame sa najlacnejší |
| Powerbanka EMOS WI 1046 /B0551GY/, 10 000 mAh, 20 W+... | 32.00 € | **29.50 €** | 14.3 % | **5.4 %** | 23.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka EMOS WI 1046 /B0551BL/, 10 000 mAh, 20 W+... | 32.00 € | **29.50 €** | 14.3 % | **5.4 %** | 24.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický EMS masážny strojček na krk ANLAN ALMJY01-02 | 27.50 € | **25.00 €** | 15.8 % | **5.3 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 52.00 € | **49.50 €** | 15.0 % | **9.4 %** | 49.57 € | stávame sa najlacnejší |
| G3Ferrari G1018900 Pákový kávovar | 126.50 € | **124.00 €** | 10.2 % | **8.0 %** | 124.11 € | stávame sa najlacnejší |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 34.50 € | **32.00 €** | 14.5 % | **6.2 %** | 32.14 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 41.0 % | **26.6 %** | 22.20 € | stávame sa najlacnejší |
| Rowenta RH6A75WO | 165.50 € | **163.00 €** | 10.1 % | **8.4 %** | 163.30 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 144.50 € | **142.00 €** | 10.3 % | **8.4 %** | 142.30 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 24.50 € | **22.00 €** | 53.3 % | **37.7 %** | 22.34 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 31.50 € | **29.00 €** | 14.6 % | **5.5 %** | 29.35 € | stávame sa najlacnejší |
| Meteorologická stanice WS 6462 | 52.00 € | **49.50 €** | 14.9 % | **9.4 %** | 49.89 € | stávame sa najlacnejší |
| Aroma difuzer Stone šedé dřevo 500ml SIXTOL | 32.50 € | **30.00 €** | 14.8 % | **6.0 %** | 30.40 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **15.50 €** | 47.4 % | **26.9 %** | 15.90 € | stávame sa najlacnejší |
| Maxxo Sous Vide SV06 | 134.50 € | **132.00 €** | 10.4 % | **8.3 %** | 132.40 € | stávame sa najlacnejší |
| Beko VRT76325VW | 168.50 € | **166.00 €** | 10.0 % | **8.4 %** | 166.40 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DY460 (čierna) + 4 venti... | 100.00 € | **97.50 €** | 17.5 % | **14.6 %** | 97.90 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot K2 (biela) | 56.00 € | **53.50 €** | 14.8 % | **9.7 %** | 53.90 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 180.50 € | **178.00 €** | 10.3 % | **8.8 %** | 178.40 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.50 € | **132.00 €** | 10.3 % | **8.2 %** | 132.50 € | stávame sa najlacnejší |
| Beko VRT65421VC | 129.50 € | **127.00 €** | 10.3 % | **8.2 %** | 127.50 € | stávame sa najlacnejší |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 22.50 € | **20.00 €** | 25.9 % | **11.9 %** | 20.50 € | stávame sa najlacnejší |
| Inteligentné hodinky BlitzWolf BW-AT5 (oranžové) | 34.50 € | **32.00 €** | 15.3 % | **6.9 %** | 32.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 (čierne) | 71.50 € | **69.00 €** | 11.5 % | **7.6 %** | 69.50 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (žltý) | 161.50 € | **159.00 €** | 15.1 % | **13.4 %** | 159.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **42.00 €** | 14.5 % | **8.1 %** | 42.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **42.00 €** | 14.5 % | **8.1 %** | 42.50 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **13.50 €** | 35.6 % | **14.4 %** | 13.85 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2+ 6ks | 26.99 € | **24.50 €** | 33.1 % | **20.8 %** | 24.60 € | stávame sa najlacnejší |
| Niceboy OFFICE M40 Vertical | 19.99 € | **17.50 €** | 23.0 % | **7.7 %** | 17.60 € | stávame sa najlacnejší |
| Electrolux E200SM | 19.99 € | **17.50 €** | 35.7 % | **18.8 %** | 17.70 € | stávame sa najlacnejší |
| ETA 160390000 | 19.99 € | **17.50 €** | 26.4 % | **10.6 %** | 17.71 € | stávame sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 101.90 € | **99.50 €** | 10.3 % | **7.7 %** | 99.59 € | stávame sa najlacnejší |
| Tefal FW5558E0 | 179.90 € | **177.50 €** | 10.1 % | **8.6 %** | 177.80 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 174.90 € | **172.50 €** | 10.1 % | **8.5 %** | 172.90 € | stávame sa najlacnejší |
| TESLA PrimeSound HQ-995X | 181.90 € | **179.50 €** | 10.1 % | **8.6 %** | 179.90 € | stávame sa najlacnejší |
| Cvičebný bicykel UREVO T1 (čierno-žltý) | 245.90 € | **243.50 €** | 15.0 % | **13.9 %** | 243.90 € | stávame sa najlacnejší |
| Ariete Steam Mop 10in1 4164 | 54.90 € | **52.50 €** | 10.2 % | **5.3 %** | 50.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2869/05 | 47.90 € | **45.50 €** | 10.6 % | **5.0 %** | 43.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Palm tmavé dřevo 500ml SIXTOL | 29.90 € | **27.50 €** | 15.4 % | **6.1 %** | 27.69 € | stávame sa najlacnejší |
| Tefal HB 65KD38 | 57.90 € | **55.50 €** | 16.3 % | **11.5 %** | 55.87 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **20.50 €** | 38.1 % | **23.6 %** | 20.90 € | stávame sa najlacnejší |
| Počítačové puzdro Darkflash Aquarius Acrylic | 26.90 € | **24.50 €** | 24.3 % | **13.2 %** | 24.90 € | stávame sa najlacnejší |
| Slúchadlá Oneodio Pro10 (sivé) | 26.90 € | **24.50 €** | 25.0 % | **13.8 %** | 24.90 € | stávame sa najlacnejší |
| Panasonic SC-AKX520E-K | 304.90 € | **302.50 €** | 10.1 % | **9.3 %** | 302.54 € | stávame sa najlacnejší |
| Waydoo Underwater scooter Subnado Lite | 320.90 € | **318.50 €** | 15.0 % | **14.2 %** | 318.90 € | stávame sa najlacnejší |
| GoSAT GS240ET2 set top box | 25.00 € | **22.90 €** | 14.8 % | **5.2 %** | 20.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| QCY Crossky Clip C30 Headphones (white) | 27.00 € | **24.90 €** | 15.2 % | **6.2 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **42.90 €** | 14.9 % | **9.5 %** | 43.00 € | stávame sa najlacnejší |
| Zelmer ZMM9802B | 131.00 € | **128.90 €** | 10.1 % | **8.3 %** | 129.00 € | stávame sa najlacnejší |
| Electrolux EF155 | 12.99 € | **10.90 €** | 38.6 % | **16.3 %** | 11.00 € | stávame sa najlacnejší |
| JBL Tune 530BT Black | 45.50 € | **43.50 €** | 10.7 % | **5.8 %** | 39.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 Laysara: Summit Kingdom | 38.50 € | **36.50 €** | 11.3 % | **5.5 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka EMOS WI 522 /B0555S/, 5 000 mAh, 20 W+Wir... | 25.50 € | **23.50 €** | 14.7 % | **5.7 %** | 20.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus 200 | 42.90 € | **40.90 €** | 10.6 % | **5.4 %** | 39.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor dymu X-Sense XS01-WT Tuya WiFi | 25.90 € | **23.90 €** | 15.1 % | **6.2 %** | 22.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO5 Black | 48.50 € | **46.50 €** | 10.7 % | **6.1 %** | 46.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO5 Red | 48.50 € | **46.50 €** | 10.7 % | **6.1 %** | 46.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (zlaté) | 36.90 € | **34.90 €** | 12.2 % | **6.2 %** | 34.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9064C | 47.50 € | **45.50 €** | 10.2 % | **5.6 %** | 45.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9047W | 43.90 € | **41.90 €** | 10.4 % | **5.4 %** | 41.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný LED pásik WiFI s RGBWW Meross MSL320 (5... | 25.50 € | **23.50 €** | 15.4 % | **6.3 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 12x50 | 71.90 € | **69.90 €** | 15.1 % | **11.9 %** | 69.95 € | stávame sa najlacnejší |
| Russell Hobbs 27011-56 | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 44.99 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 30.90 € | **28.90 €** | 14.8 % | **7.4 %** | 29.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **39.90 €** | 15.3 % | **9.8 %** | 40.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **39.90 €** | 15.3 % | **9.8 %** | 40.00 € | stávame sa najlacnejší |
| Slúchadlá Oneodio Pro10 (čierne) | 26.90 € | **24.90 €** | 23.6 % | **14.4 %** | 25.00 € | stávame sa najlacnejší |
| BLUETOUCH Elektrický vysokozdvižný vozík | 250.90 € | **248.90 €** | 10.1 % | **9.2 %** | 249.00 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 33.50 € | **31.50 €** | 38.0 % | **29.7 %** | 31.62 € | stávame sa najlacnejší |
| Baterie olověná  12V / 17Ah  VIPOW bezúdržbový akumu... | 32.50 € | **30.50 €** | 14.6 % | **7.6 %** | 30.63 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 17.00 € | **15.00 €** | 40.2 % | **23.7 %** | 15.15 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 162.50 € | **160.50 €** | 10.1 % | **8.7 %** | 160.70 € | stávame sa najlacnejší |
| Guzzanti GZ 440 | 107.00 € | **105.00 €** | 10.0 % | **8.0 %** | 105.21 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.50 € | **56.50 €** | 10.2 % | **6.4 %** | 56.74 € | stávame sa najlacnejší |
| DOMO DO42602S | 40.50 € | **38.50 €** | 11.3 % | **5.8 %** | 38.79 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 160.50 € | **158.50 €** | 10.1 % | **8.7 %** | 158.80 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 14.00 € | **12.00 €** | 52.8 % | **31.0 %** | 12.37 € | stávame sa najlacnejší |
| Gorenje BM201AG1BG | 214.00 € | **212.00 €** | 7.2 % | **6.2 %** | 212.37 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 80.50 € | **78.50 €** | 15.2 % | **12.3 %** | 78.89 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **207.50 €** | 15.0 % | **13.9 %** | 207.90 € | stávame sa najlacnejší |
| Tefal GC517DE0 | 131.50 € | **129.50 €** | 10.4 % | **8.7 %** | 129.90 € | stávame sa najlacnejší |
| Domo DO344DH | 149.50 € | **147.50 €** | 10.1 % | **8.7 %** | 147.90 € | stávame sa najlacnejší |
| Samsung VG-SCFA43BWBXC | 68.50 € | **66.50 €** | 10.3 % | **7.1 %** | 66.90 € | stávame sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.50 €** | 15.6 % | **7.5 %** | 26.90 € | stávame sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 93.50 € | **91.50 €** | 16.9 % | **14.4 %** | 91.90 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **203.50 €** | 15.0 % | **13.8 %** | 203.90 € | stávame sa najlacnejší |
| G3Ferrari G10153 Horkovzdušná trouba | 171.00 € | **169.00 €** | 10.0 % | **8.8 %** | 169.40 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **24.00 €** | 15.1 % | **6.2 %** | 24.50 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 159.90 € | **158.00 €** | 10.2 % | **8.9 %** | 158.20 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 123.90 € | **122.00 €** | 15.1 % | **13.3 %** | 122.29 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **108.00 €** | 15.0 % | **13.0 %** | 108.50 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 11.50 € | **9.60 €** | 57.1 % | **31.2 %** | 9.69 € | stávame sa najlacnejší |
| Vysavač ruční TEESA TSA5017 | 57.90 € | **56.00 €** | 15.0 % | **11.2 %** | 56.29 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **15.00 €** | 38.6 % | **23.1 %** | 15.50 € | stávame sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **34.00 €** | 15.0 % | **8.9 %** | 34.50 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.90 € | **27.00 €** | 15.7 % | **8.1 %** | 27.50 € | stávame sa najlacnejší |
| Sada 4 filtrov CPL ND 4/8 UV Sunnylife pre DJI Mini ... | 19.50 € | **17.90 €** | 14.5 % | **5.1 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filtračná hmlovina 1/4 voľnej jamky pre DJI Mini 5 Pro | 19.50 € | **17.90 €** | 15.6 % | **6.1 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s bazénovým čidlem GARNI 245P | 33.50 € | **31.90 €** | 15.6 % | **10.0 %** | 31.96 € | stávame sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 15.3 % | **6.3 %** | 18.98 € | stávame sa najlacnejší |
| Tefal B817S255 | 31.50 € | **29.90 €** | 11.1 % | **5.5 %** | 29.99 € | stávame sa najlacnejší |
| RUSSELL HOBBS 21395-56 | 53.50 € | **51.90 €** | 10.8 % | **7.5 %** | 51.99 € | stávame sa najlacnejší |
| Diagnostic Scanner OBD2 Ancel AD310/AC103 | 24.50 € | **22.90 €** | 16.1 % | **8.5 %** | 23.00 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.50 € | **58.90 €** | 10.4 % | **7.4 %** | 59.00 € | stávame sa najlacnejší |
| Automat na horkou vodu NEDIS KAWD100FBK / 2.5 l / ov... | 64.50 € | **62.90 €** | 15.2 % | **12.3 %** | 63.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 19.50 € | **17.90 €** | 14.5 % | **5.2 %** | 18.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **23.90 €** | 15.0 % | **7.8 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **23.90 €** | 15.0 % | **7.8 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **31.90 €** | 14.6 % | **9.2 %** | 32.00 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 26.50 € | **24.90 €** | 14.8 % | **7.9 %** | 25.00 € | stávame sa najlacnejší |
| Počítačová skrinka Darkflash B351 | 18.50 € | **16.90 €** | 15.2 % | **5.2 %** | 17.00 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 19.50 € | **17.90 €** | 15.6 % | **6.1 %** | 18.00 € | stávame sa najlacnejší |
| IMOU SG108C 8-portový prepínač LAN | 17.50 € | **15.90 €** | 16.0 % | **5.4 %** | 14.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **11.90 €** | 55.2 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **118.90 €** | 14.8 % | **13.3 %** | 119.00 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 101.50 € | **99.90 €** | 15.1 % | **13.3 %** | 100.00 € | stávame sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 116.50 € | **114.90 €** | 14.9 % | **13.4 %** | 115.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 244.50 € | **242.90 €** | 15.1 % | **14.3 %** | 243.00 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.90 €** | 10.4 % | **7.7 %** | 65.00 € | stávame sa najlacnejší |
| isEasy LT2V-15 Two-Zones electric ceramic stove | 75.50 € | **73.90 €** | 15.1 % | **12.7 %** | 74.00 € | stávame sa najlacnejší |
| LEIFHEIT Pegasus 180 Solid Classic 81510 | 33.00 € | **31.50 €** | 10.2 % | **5.2 %** | 22.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530 White | 28.50 € | **27.00 €** | 11.0 % | **5.2 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka EMOS WI 521 Micro, 5 000 mAh, 20 W+Wireless | 20.00 € | **18.50 €** | 13.8 % | **5.3 %** | 16.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Impregnace na koženou obuv INPRODUCTS WAX 200 ml | 17.50 € | **16.00 €** | 15.2 % | **5.3 %** | 14.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 32F bezdrátové čidlo | 16.50 € | **15.00 €** | 16.1 % | **5.6 %** | 14.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P86 (ružové zlato) | 22.00 € | **20.50 €** | 15.2 % | **7.4 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy PILOT S5 GPS + WIFI | 49.50 € | **48.00 €** | 10.9 % | **7.5 %** | 48.10 € | stávame sa najlacnejší |
| Tefal BL87G831 | 122.50 € | **121.00 €** | 10.0 % | **8.7 %** | 121.16 € | stávame sa najlacnejší |
| Aroma difuzer Vulcan modrý lesk 350ml SIXTOL | 22.00 € | **20.50 €** | 15.1 % | **7.3 %** | 20.69 € | stávame sa najlacnejší |
| LAMAX StarCube1 | 59.50 € | **58.00 €** | 10.5 % | **7.7 %** | 58.20 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **31.00 €** | 59.9 % | **52.6 %** | 31.29 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **40.00 €** | 11.2 % | **7.2 %** | 40.30 € | stávame sa najlacnejší |
| Televes DAT BOSS LR 700 TFORCE LTE700 | 122.50 € | **121.00 €** | 14.8 % | **13.4 %** | 121.37 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.50 €** | 48.7 % | **33.8 %** | 13.90 € | stávame sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.00 € | **32.50 €** | 10.3 % | **5.4 %** | 32.90 € | stávame sa najlacnejší |
| Russell Hobbs 26380-70 | 40.00 € | **38.50 €** | 10.2 % | **6.0 %** | 38.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk GPS (sivé) | 43.00 € | **41.50 €** | 14.8 % | **10.8 %** | 41.90 € | stávame sa najlacnejší |
| Strong LEAP-UNA+, FHD GOOGLE TV STICK | 54.50 € | **53.00 €** | 10.2 % | **7.2 %** | 53.40 € | stávame sa najlacnejší |
| Sada 2 filtrov Freewell Gradient pre DJI Air 3S | 28.00 € | **26.50 €** | 14.1 % | **8.0 %** | 26.90 € | stávame sa najlacnejší |
| Vysavač ruční Xtrobb 26203 | 24.50 € | **23.00 €** | 15.5 % | **8.5 %** | 23.50 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 49.50 € | **48.00 €** | 14.8 % | **11.3 %** | 48.50 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **41.00 €** | 15.0 % | **11.0 %** | 41.50 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **39.00 €** | 14.9 % | **10.7 %** | 39.50 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 182.50 € | **181.00 €** | 14.9 % | **14.0 %** | 181.50 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **16.00 €** | 15.6 % | **5.7 %** | 16.50 € | stávame sa najlacnejší |
| SONOFF MINI-ZB2GSL-EDvojkanálový nástenný spínač Zig... | 23.50 € | **22.00 €** | 16.0 % | **8.6 %** | 22.50 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **26.00 €** | 15.7 % | **9.4 %** | 26.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 34.50 € | **33.00 €** | 19.1 % | **13.9 %** | 33.50 € | stávame sa najlacnejší |
| Sada 6 denných filtrov Freewell Standard pre DJI Flip | 26.50 € | **25.00 €** | 15.0 % | **8.5 %** | 25.50 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.00 €** | 15.2 % | **10.5 %** | 35.50 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **35.00 €** | 15.2 % | **10.5 %** | 35.50 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **36.00 €** | 15.0 % | **10.4 %** | 36.50 € | stávame sa najlacnejší |
| Vodotesný batoh na fotoaparát Puluz PU5011B (čierny) | 21.50 € | **20.00 €** | 15.9 % | **7.8 %** | 20.50 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 34.50 € | **33.00 €** | 14.6 % | **9.6 %** | 33.50 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E3S (čierny) | 198.90 € | **197.50 €** | 15.1 % | **14.2 %** | 197.90 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 6.60 € | **5.20 €** | 49.9 % | **18.1 %** | 5.29 € | stávame sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá +3x PO | 30.90 € | **29.50 €** | 10.9 % | **5.9 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, černý | 33.90 € | **32.50 €** | 11.1 % | **6.5 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/04 | 30.90 € | **29.50 €** | 11.0 % | **6.0 %** | 26.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/05 | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 26.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA B90 Čierne | 17.90 € | **16.50 €** | 15.5 % | **6.5 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (modré) | 36.90 € | **35.50 €** | 9.6 % | **5.4 %** | 34.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun MQ10.202M | 31.90 € | **30.50 €** | 10.2 % | **5.3 %** | 30.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart Scene Wall Switch WiFi Sonoff M5 2C (2-channel) | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 15.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-P101CUD100 | 34.90 € | **33.50 €** | 10.7 % | **6.2 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell Glow Mist 1/4 diffusion filter for DJI Osmo... | 17.90 € | **16.50 €** | 15.1 % | **6.1 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartwatch Zeblaze Btalk 3 Plus (orchid) | 19.90 € | **18.50 €** | 15.8 % | **7.7 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS QCY Buds HT15 ANC (modré) | 17.90 € | **16.50 €** | 14.8 % | **5.8 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 12Ah  VIPOW bezúdržbový akumu... | 23.90 € | **22.50 €** | 15.7 % | **8.9 %** | 22.58 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 60.90 € | **59.50 €** | 10.3 % | **7.8 %** | 59.60 € | stávame sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.4 % | **5.8 %** | 26.61 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8059 | 17.90 € | **16.50 €** | 14.8 % | **5.8 %** | 16.79 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **61.50 €** | 21.8 % | **19.0 %** | 61.90 € | stávame sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **40.50 €** | 11.0 % | **7.3 %** | 40.90 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **6.60 €** | 55.5 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| iRobot 4410724 Braava-Multi-Purpose Clea | 26.00 € | **24.90 €** | 10.1 % | **5.4 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný WiFi spínač na monitorovanie teploty a ... | 18.00 € | **16.90 €** | 14.2 % | **7.3 %** | 16.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 52.00 € | **50.90 €** | 14.8 % | **12.4 %** | 50.99 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **27.90 €** | 14.8 % | **10.5 %** | 28.00 € | stávame sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.90 €** | 14.6 % | **9.4 %** | 23.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 46.00 € | **44.90 €** | 14.4 % | **11.7 %** | 45.00 € | stávame sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 22.00 € | **20.90 €** | 14.7 % | **8.9 %** | 21.00 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.70 € | **6.60 €** | 54.6 % | **32.5 %** | 6.69 € | stávame sa najlacnejší |
| Sonoff AirGuard TH SNZB-02DR2 ZigBee LCD senzor tepl... | 15.00 € | **13.90 €** | 13.8 % | **5.4 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný WiFi nástenný spínač SONOFF M5-1C-80 (1... | 17.00 € | **15.90 €** | 15.2 % | **7.7 %** | 16.00 € | stávame sa najlacnejší |
| Maxxo VM Master | 237.00 € | **235.90 €** | 5.5 % | **5.0 %** | 233.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 89.00 € | **87.90 €** | 15.1 % | **13.6 %** | 88.00 € | stávame sa najlacnejší |
| SONOFF MINI-D Smart WiFi Matter Switch (AC/DC 12-48V... | 13.50 € | **12.50 €** | 15.4 % | **6.9 %** | 6.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 438/03 | 30.50 € | **29.50 €** | 10.3 % | **6.7 %** | 27.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL XA 801112 | 19.50 € | **18.50 €** | 12.1 % | **6.4 %** | 17.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ONIKUMA B90 Gaming headset (Blue/Purple) | 17.50 € | **16.50 €** | 14.1 % | **7.6 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (ružové) | 36.90 € | **35.90 €** | 8.3 % | **5.4 %** | 34.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla TE-300 DVBT2 H265 přijímač (HDMI CEC) | 22.90 € | **21.90 €** | 10.6 % | **5.8 %** | 21.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT803 (biele) | 15.50 € | **14.50 €** | 15.4 % | **8.0 %** | 14.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT803 (čierne) | 15.50 € | **14.50 €** | 15.4 % | **8.0 %** | 14.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herná náhlavná súprava ONIKUMA X15 PRO Cat (Black) | 14.50 € | **13.50 €** | 15.2 % | **7.3 %** | 13.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kettlebell Litinový  4 kg REBEL ACTIVE RBA-2323-04 | 12.00 € | **11.00 €** | 15.2 % | **5.6 %** | 10.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový mikrofón Puluz PU3151B Lavalier typ C | 13.00 € | **12.00 €** | 14.5 % | **5.7 %** | 12.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart Hub WiFi/RF 433MHz Sonoff RF BridgeR2 | 13.50 € | **12.50 €** | 14.0 % | **5.5 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 12.50 € | **11.50 €** | 46.9 % | **35.1 %** | 11.56 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 217.50 € | **216.50 €** | 10.1 % | **9.6 %** | 216.58 € | stávame sa najlacnejší |
| Sekáček potravin TEESA TSA3227 | 22.90 € | **21.90 €** | 15.3 % | **10.2 %** | 21.99 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0913-BL Powerbanka 10000mAh MagSafe | 20.50 € | **19.50 €** | 14.9 % | **9.3 %** | 19.59 € | stávame sa najlacnejší |
| Alcad CA-210 | 27.00 € | **26.00 €** | 15.0 % | **10.7 %** | 26.09 € | stávame sa najlacnejší |
| Avatto SDL-V1-S100 100 mm Strieborná digitálna vložk... | 92.90 € | **91.90 €** | 15.1 % | **13.9 %** | 92.00 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **16.90 €** | 16.2 % | **9.7 %** | 17.00 € | stávame sa najlacnejší |
| Zeblaze Btalk 3 Pro Smartwatch (Gray) | 23.90 € | **22.90 €** | 14.8 % | **10.0 %** | 23.00 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **37.90 €** | 10.5 % | **7.6 %** | 38.00 € | stávame sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.90 € | **87.90 €** | 15.1 % | **13.8 %** | 88.00 € | stávame sa najlacnejší |
| Inteligentný dotykový nástenný vypínač Sonoff TX T5 ... | 22.90 € | **21.90 €** | 15.1 % | **10.0 %** | 22.00 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **84.90 €** | 15.1 % | **13.7 %** | 85.00 € | stávame sa najlacnejší |
| Carrera Auto GO/GO+ 64120 Ford Mustang 1 | 14.50 € | **13.50 €** | 13.9 % | **6.0 %** | 13.66 € | stávame sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.50 €** | 10.5 % | **5.1 %** | 19.67 € | stávame sa najlacnejší |
| Beper BEP-PE145 | 40.50 € | **39.50 €** | 10.1 % | **7.4 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 11.2 % | **6.3 %** | 21.70 € | stávame sa najlacnejší |
| Braun HF5050.IBK | 122.50 € | **121.50 €** | 10.4 % | **9.5 %** | 121.70 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **113.50 €** | 10.4 % | **9.4 %** | 113.70 € | stávame sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 163.00 € | **162.00 €** | 14.9 % | **14.2 %** | 162.20 € | stávame sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.50 €** | 10.9 % | **7.1 %** | 28.72 € | stávame sa najlacnejší |
| Aroma difuzer Bloom červené dřevo 200ml SIXTOL | 14.00 € | **13.00 €** | 13.1 % | **5.1 %** | 13.29 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.7 % | **6.7 %** | 21.79 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0904 10000 mAh Li-pol | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 13.81 € | stávame sa najlacnejší |
| Leifheit LinoLift 600 Quick Start 85282 | 76.00 € | **75.00 €** | 10.1 % | **8.7 %** | 75.32 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 15.50 € | **14.50 €** | 28.9 % | **20.5 %** | 14.82 € | stávame sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.50 €** | 14.2 % | **5.0 %** | 11.83 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 18.50 € | **17.50 €** | 11.8 % | **5.7 %** | 17.88 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.50 € | **233.50 €** | 10.2 % | **9.7 %** | 233.88 € | stávame sa najlacnejší |
| UNI-T UT343D tester hrúbky farby | 88.50 € | **87.50 €** | 6.8 % | **5.6 %** | 87.89 € | stávame sa najlacnejší |
| Tester autobatérií UNI-T UT673A | 36.00 € | **35.00 €** | 14.4 % | **11.2 %** | 35.39 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 28.50 € | **27.50 €** | 15.3 % | **11.2 %** | 27.89 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 48.50 € | **47.50 €** | 15.3 % | **13.0 %** | 47.89 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **209.50 €** | 15.1 % | **14.6 %** | 209.89 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256 | 27.50 € | **26.50 €** | 12.9 % | **8.8 %** | 26.89 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 60.50 € | **59.50 €** | 14.8 % | **12.9 %** | 59.89 € | stávame sa najlacnejší |
| Tester SMD UNI-T UT116C | 19.00 € | **18.00 €** | 14.4 % | **8.4 %** | 18.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot C1 Pro | 417.50 € | **416.50 €** | 5.5 % | **5.3 %** | 416.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 474.50 € | **473.50 €** | 9.6 % | **9.4 %** | 473.89 € | stávame sa najlacnejší |
| Inteligentný termostatický radiátorový ventil Avatto... | 25.50 € | **24.50 €** | 15.0 % | **10.5 %** | 24.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 99.00 € | **98.00 €** | 14.7 % | **13.6 %** | 98.39 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM100A | 33.50 € | **32.50 €** | 12.7 % | **9.4 %** | 32.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **27.00 €** | 14.5 % | **10.4 %** | 27.39 € | stávame sa najlacnejší |
| Laserový diaľkomer UNI-T LM50A | 21.50 € | **20.50 €** | 14.1 % | **8.8 %** | 20.89 € | stávame sa najlacnejší |
| Laserový diaľkomer UNI-T LM70A | 26.50 € | **25.50 €** | 13.8 % | **9.5 %** | 25.89 € | stávame sa najlacnejší |
| Anemometer UNI-T UT363S | 30.50 € | **29.50 €** | 15.2 % | **11.4 %** | 29.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.50 € | **61.50 €** | 14.9 % | **13.0 %** | 61.89 € | stávame sa najlacnejší |
| Merač vlhkosti dreva UNI-T UT377A | 18.50 € | **17.50 €** | 14.7 % | **8.5 %** | 17.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI- T UT333 | 18.50 € | **17.50 €** | 15.6 % | **9.4 %** | 17.89 € | stávame sa najlacnejší |
| Detektor kovov UNI-T UT387E | 47.00 € | **46.00 €** | 15.0 % | **12.5 %** | 46.39 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 77.50 € | **76.50 €** | 15.4 % | **13.9 %** | 76.89 € | stávame sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 60.00 € | **59.00 €** | 15.1 % | **13.2 %** | 59.39 € | stávame sa najlacnejší |
| HiBREW 5-in-1 capsule coffee maker H1B-beige(beige) | 107.00 € | **106.00 €** | 14.8 % | **13.7 %** | 106.39 € | stávame sa najlacnejší |
| Robotický čistič okien MOVA N1 (biely) | 287.50 € | **286.50 €** | 14.9 % | **14.5 %** | 286.89 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 159.00 € | **158.00 €** | 14.8 % | **14.1 %** | 158.39 € | stávame sa najlacnejší |
| Sonoff MINIR4M Matter smart WiFi mini switch (HomeKi... | 11.50 € | **10.50 €** | 17.2 % | **7.0 %** | 10.89 € | stávame sa najlacnejší |
| Fixed Creator Tripod FIXCRT-BK | 43.50 € | **42.50 €** | 10.5 % | **8.0 %** | 42.89 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **89.00 €** | 14.8 % | **13.5 %** | 89.39 € | stávame sa najlacnejší |
| Plynová varná doska IsEasy MGBS-765 z nehrdzavejúcej... | 125.50 € | **124.50 €** | 15.2 % | **14.2 %** | 124.89 € | stávame sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 12.3 % | **7.0 %** | 20.90 € | stávame sa najlacnejší |
| G3ferrari G1018700 Multifunkční trouba | 145.50 € | **144.50 €** | 6.2 % | **5.4 %** | 144.90 € | stávame sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.4 % | **5.6 %** | 15.90 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.50 €** | 43.0 % | **36.4 %** | 20.90 € | stávame sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.50 €** | 11.2 % | **7.0 %** | 25.90 € | stávame sa najlacnejší |
| Držiak mikrofónu Maono BA20 (čierny) | 14.50 € | **13.50 €** | 15.7 % | **7.7 %** | 13.90 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **423.50 €** | 15.0 % | **14.8 %** | 423.90 € | stávame sa najlacnejší |
| Grafický tablet Huion H1161 | 74.00 € | **73.00 €** | 14.8 % | **13.2 %** | 73.50 € | stávame sa najlacnejší |
| LONGER RAY5 mini 2,5 W laserový gravírovací stroj | 93.00 € | **92.00 €** | 14.9 % | **13.7 %** | 92.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **20.00 €** | 14.6 % | **9.1 %** | 20.50 € | stávame sa najlacnejší |
| Zvuková karta Maono G1 Neo (biela) | 45.00 € | **44.00 €** | 15.1 % | **12.5 %** | 44.50 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 37.00 € | **36.00 €** | 17.0 % | **13.8 %** | 36.50 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **17.00 €** | 13.6 % | **7.3 %** | 17.50 € | stávame sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **15.00 €** | 13.7 % | **6.6 %** | 15.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| EMEET SmartCam S600 webová kamera | 52.00 € | **51.00 €** | 14.6 % | **12.4 %** | 51.50 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **50.00 €** | 14.9 % | **12.7 %** | 50.50 € | stávame sa najlacnejší |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 102.00 € | **101.00 €** | 14.9 % | **13.8 %** | 101.50 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Black | 16.90 € | **15.90 €** | 11.8 % | **5.2 %** | 15.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 16.90 € | **15.90 €** | 11.8 % | **5.2 %** | 15.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL TUNE 305 USB-C Red | 16.90 € | **15.90 €** | 11.8 % | **5.2 %** | 15.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL TUNE 305 USB-C White | 16.90 € | **15.90 €** | 11.8 % | **5.2 %** | 15.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente R2 robotický vysavač | 96.90 € | **96.00 €** | 8.5 % | **7.5 %** | 96.09 € | stávame sa najlacnejší |
| Salente Rtx-R2 | 96.90 € | **96.00 €** | 8.5 % | **7.5 %** | 96.09 € | stávame sa najlacnejší |
| G3ferrari G1019100 Horkovzdušná fritéza | 105.90 € | **105.00 €** | 10.3 % | **9.4 %** | 105.20 € | stávame sa najlacnejší |
| Ninja FB131EUGY Frost Vault 28l | 196.90 € | **196.00 €** | 10.1 % | **9.6 %** | 196.23 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **65.00 €** | 10.6 % | **9.1 %** | 65.29 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT161D | 68.90 € | **68.00 €** | 12.1 % | **10.6 %** | 68.39 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387S | 92.90 € | **92.00 €** | 15.2 % | **14.1 %** | 92.39 € | stávame sa najlacnejší |
| Domo DO42327PC | 102.90 € | **102.00 €** | 10.4 % | **9.4 %** | 102.50 € | stávame sa najlacnejší |
| Tefal NE477838 | 136.90 € | **136.00 €** | 8.6 % | **7.9 %** | 136.50 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 189.90 € | **189.00 €** | 15.3 % | **14.8 %** | 189.50 € | stávame sa najlacnejší |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.90 € | **88.00 €** | 6.2 % | **5.1 %** | 88.50 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **116.00 €** | 15.0 % | **14.1 %** | 116.50 € | stávame sa najlacnejší |
| PS5 Laysara: Summit Kingdom Collector's | 64.90 € | **64.00 €** | 10.3 % | **8.8 %** | 64.50 € | stávame sa najlacnejší |
| Laica Bi-Flux Cartridge 3+1ks | 15.90 € | **15.00 €** | 12.0 % | **5.7 %** | 13.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 14.17 € | stávame sa najlacnejší |
| LED lampa Puluz pre fotoaparát 860 lúmenov | 12.90 € | **12.00 €** | 15.4 % | **7.3 %** | 12.50 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **10.00 €** | 17.1 % | **7.4 %** | 10.50 € | stávame sa najlacnejší |
| Superfire TH04-S,1000lmm USB-C čelová baterka | 14.90 € | **14.00 €** | 15.7 % | **8.7 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **2.60 €** | 53.0 % | **13.6 %** | 2.70 € | stávame sa najlacnejší |
| Zelmer ZHM2550 | 39.90 € | **39.00 €** | 28.9 % | **26.0 %** | 39.03 € | stávame sa najlacnejší |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 18.90 € | **18.00 €** | 15.5 % | **10.0 %** | 18.15 € | stávame sa najlacnejší |
| DOMO DO9192MC | 23.90 € | **23.00 €** | 10.0 % | **5.9 %** | 23.24 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.90 € | **20.00 €** | 10.8 % | **6.0 %** | 20.38 € | stávame sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **46.00 €** | 15.3 % | **13.1 %** | 46.39 € | stávame sa najlacnejší |
| Merač vzdialenosti UNI-T LM120A | 43.90 € | **43.00 €** | 10.3 % | **8.0 %** | 43.39 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 33.90 € | **33.00 €** | 14.8 % | **11.8 %** | 33.39 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **42.00 €** | 10.9 % | **8.6 %** | 42.41 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 59.90 € | **59.00 €** | 15.0 % | **13.3 %** | 59.49 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **20.00 €** | 30.3 % | **24.7 %** | 20.50 € | stávame sa najlacnejší |
| Inteligentná Wi-Fi brána MEROSS MSH400HK-EU | 18.90 € | **18.00 €** | 15.7 % | **10.2 %** | 18.50 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **22.00 €** | 15.8 % | **11.2 %** | 22.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 bez ventilátorov (č... | 19.90 € | **19.00 €** | 16.1 % | **10.8 %** | 19.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Q15 | 16.90 € | **16.00 €** | 15.0 % | **8.9 %** | 16.50 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 21.90 € | **21.00 €** | 10.0 % | **5.5 %** | 21.50 € | stávame sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 17.90 € | **17.00 €** | 11.7 % | **6.1 %** | 17.50 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **63.00 €** | 15.1 % | **13.5 %** | 63.50 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **29.00 €** | 14.9 % | **11.5 %** | 29.50 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 328.90 € | **328.00 €** | 8.1 % | **7.8 %** | 328.11 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 707.50 € | **706.90 €** | 15.0 % | **14.9 %** | 707.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 901.50 € | **900.90 €** | 15.0 % | **14.9 %** | 901.00 € | stávame sa najlacnejší |
| Creality Ender-3 V3 Plus 3D Printer | 348.50 € | **347.90 €** | 11.1 % | **10.9 %** | 348.00 € | stávame sa najlacnejší |
| Termovízna kamera THERMAL MASTER X3 | 526.50 € | **525.90 €** | 15.0 % | **14.8 %** | 526.00 € | stávame sa najlacnejší |
| Candy BR 10N3BX-S | 488.50 € | **487.90 €** | 10.1 % | **9.9 %** | 488.00 € | stávame sa najlacnejší |
| Fixed sklo Apple iPhon 17 FIXGA2-1600-BK | 18.50 € | **17.90 €** | 10.4 % | **6.8 %** | 14.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.50 € | **19.90 €** | 37.1 % | **33.0 %** | 19.96 € | stávame sa najlacnejší |
| Sati Fortissimo 1 kg zrno | 18.50 € | **17.90 €** | 11.3 % | **7.7 %** | 17.96 € | stávame sa najlacnejší |
| RUSSELL HOBBS 24360-70 Inspire Kettle | 44.50 € | **43.90 €** | 10.2 % | **8.7 %** | 43.99 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CCPA Apple Carplay/Andr... | 37.50 € | **36.90 €** | 15.4 % | **13.6 %** | 37.00 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **28.90 €** | 14.9 % | **12.6 %** | 29.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 18.50 € | **17.90 €** | 39.0 % | **34.5 %** | 18.00 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 17.50 € | **16.90 €** | 14.0 % | **10.1 %** | 17.00 € | stávame sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **16.90 €** | 16.6 % | **12.6 %** | 17.00 € | stávame sa najlacnejší |
| Inteligentný spínač garážových brán Meross MSG200HK ... | 54.50 € | **53.90 €** | 15.2 % | **13.9 %** | 54.00 € | stávame sa najlacnejší |
| Inteligentný WiFi termostat Meross MTS215BMA(EU) | 60.50 € | **59.90 €** | 14.8 % | **13.7 %** | 60.00 € | stávame sa najlacnejší |
| Ufesa Ruby Red BS4717 | 40.50 € | **39.90 €** | 11.1 % | **9.4 %** | 40.00 € | stávame sa najlacnejší |
| Držiak na telefón so statívom PULUZ PU3222H Sivý | 21.50 € | **20.90 €** | 15.9 % | **12.7 %** | 21.00 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.50 € | **25.90 €** | 11.4 % | **8.9 %** | 26.00 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **18.90 €** | 14.1 % | **10.6 %** | 19.00 € | stávame sa najlacnejší |
| Sieťová nabíjačka Blitzwolf BW-i100 5v1 120W | 45.50 € | **44.90 €** | 15.6 % | **14.1 %** | 45.00 € | stávame sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **18.90 €** | 15.0 % | **11.4 %** | 19.00 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 35.50 € | **34.90 €** | 14.4 % | **12.5 %** | 35.00 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **20.90 €** | 15.1 % | **11.9 %** | 21.00 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 30x mini LED, 3m,... | 2.10 € | **1.50 €** | 51.1 % | **7.9 %** | 0.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.20 € | **3.60 €** | 54.5 % | **32.4 %** | 3.67 € | stávame sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.70 €** | 42.7 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 10.96 € | stávame sa najlacnejší |
| Solight LED RGB osvetlenie Gaming, diaľkový ovládač,... | 11.50 € | **10.90 €** | 53.5 % | **45.5 %** | 11.00 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **14.90 €** | 16.8 % | **12.3 %** | 15.00 € | stávame sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **13.90 €** | 16.5 % | **11.7 %** | 14.00 € | stávame sa najlacnejší |
| Baterie olověná   6V /  7Ah  EMOS | 12.50 € | **11.90 €** | 14.4 % | **9.0 %** | 12.00 € | stávame sa najlacnejší |
| Inteligentný nástenný vypínač Meross MSS815MA-UN WiF... | 12.50 € | **11.90 €** | 13.5 % | **8.1 %** | 12.00 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky C10 (biele) | 13.50 € | **12.90 €** | 16.4 % | **11.2 %** | 13.00 € | stávame sa najlacnejší |
| OTTOCAST OTTOAIBOX N95C Monitor do auta | 154.50 € | **153.90 €** | 14.9 % | **14.4 %** | 154.00 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.50 € | **120.90 €** | 10.3 % | **9.8 %** | 121.00 € | stávame sa najlacnejší |
| Domo DO228SV | 121.50 € | **120.90 €** | 10.0 % | **9.5 %** | 121.00 € | stávame sa najlacnejší |
| Rowenta RH 6756WO | 123.50 € | **122.90 €** | 8.1 % | **7.6 %** | 123.00 € | stávame sa najlacnejší |
| Počítačový chladič Darkflash DN-D360 WHITE | 81.50 € | **80.90 €** | 15.1 % | **14.2 %** | 81.00 € | stávame sa najlacnejší |
| Leifheit Čistič prachu DUSTY Telescope 2 | 15.00 € | **14.50 €** | 10.3 % | **6.6 %** | 9.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune110 blue | 11.00 € | **10.50 €** | 10.1 % | **5.1 %** | 7.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA X15Pro Pink Cat's Ears | 16.00 € | **15.50 €** | 8.6 % | **5.2 %** | 13.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Klip mikrofónu Puluz PU3045 3m, 3,5 mm Jack | 11.00 € | **10.50 €** | 12.9 % | **7.8 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42324PC | 85.00 € | **84.50 €** | 5.8 % | **5.2 %** | 84.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBMINIL2 inteligentný mini spínač ZigBee | 12.00 € | **11.50 €** | 12.7 % | **8.0 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| N50 eliminátor zápachu pre Petkit PURA MAX 2/PRO lit... | 11.00 € | **10.50 €** | 13.3 % | **8.2 %** | 10.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný WiFi prepínač Meross MSS715MA-UN (Matter) | 12.00 € | **11.50 €** | 13.0 % | **8.3 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dvojitý ramenný popruh Puluz pre fotoaparáty PU6002 | 12.00 € | **11.50 €** | 14.1 % | **9.4 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.90 € | **5.40 €** | 35.5 % | **24.0 %** | 5.41 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.5 % | **9.3 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.8 % | **9.6 %** | 24.04 € | stávame sa najlacnejší |
| Ufesa Haku | 30.50 € | **30.00 €** | 10.3 % | **8.4 %** | 30.08 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.8 % | **9.9 %** | 19.08 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 12.2 % | **9.8 %** | 23.08 € | stávame sa najlacnejší |
| Fixed sluchátka Buds FIXBDS-BK | 21.50 € | **21.00 €** | 10.4 % | **7.8 %** | 21.08 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 14.50 € | **14.00 €** | 57.8 % | **52.4 %** | 14.09 € | stávame sa najlacnejší |
| BANQUET Mlýnek na kávu CULINARIA VIII | 10.50 € | **10.00 €** | 14.3 % | **8.8 %** | 10.13 € | stávame sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **17.00 €** | 11.9 % | **8.7 %** | 17.13 € | stávame sa najlacnejší |
| LEIFHEIT 51016 | 50.50 € | **50.00 €** | 10.5 % | **9.4 %** | 50.13 € | stávame sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 11.64 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 12.3 % | **9.9 %** | 23.21 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.5 % | **9.9 %** | 33.25 € | stávame sa najlacnejší |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.50 € | **19.00 €** | 8.1 % | **5.3 %** | 19.25 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **18.00 €** | 10.4 % | **7.4 %** | 18.25 € | stávame sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.50 € | **12.00 €** | 10.3 % | **5.9 %** | 12.25 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 12.00 € | **11.50 €** | 10.3 % | **5.7 %** | 11.75 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 21.50 € | **21.00 €** | 25.6 % | **22.7 %** | 21.26 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 11.00 € | **10.50 €** | 11.8 % | **6.7 %** | 10.76 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 12.1 % | **7.2 %** | 11.28 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.7 % | **8.3 %** | 16.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 14.2 % | **10.0 %** | 13.29 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 10.2 % | **8.5 %** | 33.29 € | stávame sa najlacnejší |
| Ufesa Daily PV1100C | 23.50 € | **23.00 €** | 10.2 % | **7.9 %** | 23.29 € | stávame sa najlacnejší |
| Leifheit Clean Twist M Ergo+náhr. Static | 41.50 € | **41.00 €** | 14.9 % | **13.5 %** | 41.29 € | stávame sa najlacnejší |
| G21 Pěchovadlo pro nádoby 0,9 l | 12.50 € | **12.00 €** | 14.4 % | **9.9 %** | 12.30 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.50 € | **110.00 €** | 10.2 % | **9.7 %** | 110.30 € | stávame sa najlacnejší |
| DOMO DO9252I | 252.50 € | **252.00 €** | 8.1 % | **7.9 %** | 252.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.50 € | **44.00 €** | 12.3 % | **11.0 %** | 44.31 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 32.00 € | **31.50 €** | 10.1 % | **8.3 %** | 31.83 € | stávame sa najlacnejší |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 30.50 € | **30.00 €** | 9.5 % | **7.7 %** | 30.34 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.50 € | **30.00 €** | 14.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.50 € | **30.00 €** | 14.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 11.0 % | **7.7 %** | 16.38 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **99.00 €** | 10.5 % | **9.9 %** | 99.38 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.7 % | **8.3 %** | 22.38 € | stávame sa najlacnejší |
| Bravo Eddie B-4821 šedý | 29.50 € | **29.00 €** | 10.1 % | **8.2 %** | 29.38 € | stávame sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **16.00 €** | 15.9 % | **12.4 %** | 16.38 € | stávame sa najlacnejší |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 25.50 € | **25.00 €** | 25.3 % | **22.8 %** | 25.39 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.00 € | **11.50 €** | 37.0 % | **31.3 %** | 11.89 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 47.50 € | **47.00 €** | 8.6 % | **7.5 %** | 47.39 € | stávame sa najlacnejší |
| DOMO DO42325PC | 100.50 € | **100.00 €** | 7.5 % | **6.9 %** | 100.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 225.00 € | **224.50 €** | 15.0 % | **14.7 %** | 224.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 338.50 € | **338.00 €** | 15.0 % | **14.9 %** | 338.39 € | stávame sa najlacnejší |
| Solární regulátor MPPT EPever DR1206-DDS, 12/24V, 10... | 90.00 € | **89.50 €** | 15.0 % | **14.4 %** | 89.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT VOLT GREEN BOOST PRO 5000 SIN... | 350.00 € | **349.50 €** | 15.0 % | **14.8 %** | 349.89 € | stávame sa najlacnejší |
| CrockPot CSC062X | 155.50 € | **155.00 €** | 5.8 % | **5.4 %** | 155.39 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.50 € | **52.00 €** | 10.3 % | **9.3 %** | 52.39 € | stávame sa najlacnejší |
| Tefal RK812110 | 107.00 € | **106.50 €** | 7.6 % | **7.1 %** | 106.89 € | stávame sa najlacnejší |
| Tefal NE553838 | 128.00 € | **127.50 €** | 5.6 % | **5.2 %** | 127.89 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 57.00 € | **56.50 €** | 7.5 % | **6.6 %** | 56.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 148.50 € | **148.00 €** | 14.6 % | **14.2 %** | 148.39 € | stávame sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (bla | 454.50 € | **454.00 €** | 9.7 % | **9.6 %** | 454.39 € | stávame sa najlacnejší |
| Roborock Qrevo C Pro Black | 609.00 € | **608.50 €** | 5.7 % | **5.6 %** | 608.89 € | stávame sa najlacnejší |
| Automat na horkou vodu NEDIS KAWD310FBK / 2.7 l / di... | 117.00 € | **116.50 €** | 15.0 % | **14.5 %** | 116.89 € | stávame sa najlacnejší |
| Salente Icequeen-Wh | 19.50 € | **19.00 €** | 8.0 % | **5.2 %** | 19.39 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **25.50 €** | 14.8 % | **12.5 %** | 25.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.50 € | **24.00 €** | 15.9 % | **13.6 %** | 24.39 € | stávame sa najlacnejší |
| DOMO DO9232I | 355.50 € | **355.00 €** | 6.5 % | **6.3 %** | 355.39 € | stávame sa najlacnejší |
| PRIMO PR406IM | 127.00 € | **126.50 €** | 8.9 % | **8.5 %** | 126.89 € | stávame sa najlacnejší |
| Domo DO331L | 105.00 € | **104.50 €** | 8.5 % | **8.0 %** | 104.89 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 277.50 € | **277.00 €** | 8.3 % | **8.1 %** | 277.39 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 24.00 € | **23.50 €** | 14.9 % | **12.5 %** | 23.89 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.00 € | **18.50 €** | 10.0 % | **7.1 %** | 18.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 286.00 € | **285.50 €** | 9.9 % | **9.7 %** | 285.89 € | stávame sa najlacnejší |
| ALI AN 3,4A,2xUSB,Lightning,čern CHS0007 | 11.50 € | **11.00 €** | 10.8 % | **6.0 %** | 11.39 € | stávame sa najlacnejší |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 19.00 € | **18.50 €** | 45.0 % | **41.2 %** | 18.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **12.00 €** | 20.1 % | **15.3 %** | 12.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 37.00 € | **36.50 €** | 8.9 % | **7.4 %** | 36.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.50 € | **10.00 €** | 18.1 % | **12.4 %** | 10.39 € | stávame sa najlacnejší |
| Rádio outdoorové NEDIS RDDB3100GN | 108.50 € | **108.00 €** | 15.2 % | **14.7 %** | 108.39 € | stávame sa najlacnejší |
| Kaon MZ-104, 4K satelitní přijímač | 115.50 € | **115.00 €** | 6.5 % | **6.0 %** | 115.39 € | stávame sa najlacnejší |
| REBEL Micropower 1000 | 91.00 € | **90.50 €** | 14.8 % | **14.2 %** | 90.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 85.00 € | **84.50 €** | 15.0 % | **14.3 %** | 84.89 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 38.50 € | **38.00 €** | 15.3 % | **13.8 %** | 38.39 € | stávame sa najlacnejší |
| Alcad AI - 133 linkový zesilovač se 2 výstupy / G=24dB | 20.50 € | **20.00 €** | 15.3 % | **12.4 %** | 20.39 € | stávame sa najlacnejší |
| Alcad AM - 187 zesilovač / UHF-BIII-DAB-FM / LTE700 | 26.50 € | **26.00 €** | 16.0 % | **13.8 %** | 26.39 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 165.50 € | **165.00 €** | 5.9 % | **5.6 %** | 165.39 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6004 40l, 12V/24V/230V/baterie... | 260.50 € | **260.00 €** | 15.0 % | **14.8 %** | 260.39 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6005 50l, 12V/24V/230V/baterie... | 254.50 € | **254.00 €** | 15.0 % | **14.7 %** | 254.39 € | stávame sa najlacnejší |
| Niceboy PILOT S10 Rear Cam | 24.50 € | **24.00 €** | 10.8 % | **8.6 %** | 24.40 € | stávame sa najlacnejší |
| Inteligentná žiarovka Yeelight W1 GU10 (Biela) | 16.00 € | **15.50 €** | 14.3 % | **10.7 %** | 15.90 € | stávame sa najlacnejší |
| Inteligentný Wi-Fi termostat MEROSS MTS215BMA-B(EU) ... | 62.00 € | **61.50 €** | 15.1 % | **14.2 %** | 61.90 € | stávame sa najlacnejší |
| Kávovar na kapsule 3 v 1 HiBREW H1A 1450W | 89.00 € | **88.50 €** | 15.0 % | **14.3 %** | 88.90 € | stávame sa najlacnejší |
| 3D Tlačiareň Creality CR-10 SE | 189.50 € | **189.00 €** | 15.0 % | **14.7 %** | 189.40 € | stávame sa najlacnejší |
| Súprava celodenných filtrov Freewell Real Locking s ... | 220.00 € | **219.50 €** | 14.9 % | **14.7 %** | 219.90 € | stávame sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.00 € | **19.50 €** | 10.1 % | **7.3 %** | 19.90 € | stávame sa najlacnejší |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenciou | 77.00 € | **76.50 €** | 14.9 % | **14.1 %** | 76.90 € | stávame sa najlacnejší |
| Fixed Pods Pro s ANC FIXPDS-P-BK | 39.50 € | **39.00 €** | 11.3 % | **9.9 %** | 39.40 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.50 €** | 8.2 % | **6.8 %** | 40.90 € | stávame sa najlacnejší |
| Xiaomi Redmi Buds 8 Active Blue | 16.50 € | **16.00 €** | 8.9 % | **5.6 %** | 16.40 € | stávame sa najlacnejší |
| Xiaomi Redmi Buds 8 Active White | 16.50 € | **16.00 €** | 8.9 % | **5.6 %** | 16.40 € | stávame sa najlacnejší |
| Držiak mikrofónu Maono BA20 | 14.00 € | **13.50 €** | 14.2 % | **10.1 %** | 13.90 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **46.50 €** | 14.6 % | **13.4 %** | 46.90 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 238.50 € | **238.00 €** | 8.0 % | **7.7 %** | 238.40 € | stávame sa najlacnejší |
| Indesit BTW S50400 EU/N | 262.50 € | **262.00 €** | 8.1 % | **7.9 %** | 262.40 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 337.50 € | **337.00 €** | 7.1 % | **6.9 %** | 337.40 € | stávame sa najlacnejší |
| Russell Hobbs 23210-70/RH Luna | 50.50 € | **50.00 €** | 9.3 % | **8.2 %** | 50.41 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.50 € | **63.00 €** | 14.7 % | **13.8 %** | 63.42 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.42 € | stávame sa najlacnejší |
| Status STA 176214 | 10.50 € | **10.00 €** | 13.4 % | **8.0 %** | 10.42 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.50 € | **23.00 €** | 36.9 % | **33.9 %** | 23.44 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.50 € | **36.00 €** | 10.2 % | **8.7 %** | 36.46 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.50 € | **48.00 €** | 14.6 % | **13.4 %** | 48.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.50 € | **18.00 €** | 10.3 % | **7.3 %** | 18.46 € | stávame sa najlacnejší |
| Strong LEAP-S3 V2 Google TV box | 64.50 € | **64.00 €** | 11.4 % | **10.6 %** | 64.46 € | stávame sa najlacnejší |
| Roadstar TRA-1230/BK Kapesní FM rádio | 15.50 € | **15.00 €** | 12.5 % | **8.9 %** | 15.46 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.50 € | **23.00 €** | 30.5 % | **27.7 %** | 23.48 € | stávame sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **12.00 €** | 12.9 % | **8.4 %** | 12.48 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 124.50 € | **124.00 €** | 7.3 % | **6.9 %** | 124.49 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **36.00 €** | 10.9 % | **9.3 %** | 36.49 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **36.00 €** | 10.4 % | **8.9 %** | 36.49 € | stávame sa najlacnejší |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.50 € | **23.00 €** | 8.7 % | **6.4 %** | 23.49 € | stávame sa najlacnejší |
| Domo DO42323PC | 77.90 € | **77.50 €** | 6.0 % | **5.5 %** | 77.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO8719W | 69.90 € | **69.50 €** | 10.2 % | **9.5 %** | 69.67 € | stávame sa najlacnejší |
| CANDY CBT6130/3X | 64.90 € | **64.50 €** | 6.7 % | **6.1 %** | 64.71 € | stávame sa najlacnejší |
| Electrolux E7K1-6BP | 69.90 € | **69.50 €** | 12.2 % | **11.5 %** | 69.75 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8089 AIR FRYER DUAL PO... | 78.90 € | **78.50 €** | 15.0 % | **14.4 %** | 78.79 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 112.90 € | **112.50 €** | 8.4 % | **8.0 %** | 112.79 € | stávame sa najlacnejší |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 68.90 € | **68.50 €** | 8.5 % | **7.8 %** | 68.79 € | stávame sa najlacnejší |
| Chladící box TEESA TSA5007 25L DC12/24V AC 230V -22°C | 175.90 € | **175.50 €** | 15.1 % | **14.9 %** | 175.79 € | stávame sa najlacnejší |
| Chladící box TEESA TSA5008 13L DC12/24V AC 230V -22°C | 134.90 € | **134.50 €** | 15.1 % | **14.7 %** | 134.79 € | stávame sa najlacnejší |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.90 € | **84.50 €** | 9.7 % | **9.2 %** | 84.80 € | stávame sa najlacnejší |
| Strong LEAP-S3 Google TV 4K UHD Android TV multimedi... | 64.90 € | **64.50 €** | 5.7 % | **5.0 %** | 64.82 € | stávame sa najlacnejší |
| SALENTE SuChef | 82.90 € | **82.50 €** | 8.3 % | **7.7 %** | 82.85 € | stávame sa najlacnejší |
| Fixed pouzdro Honor X8 5G FIXTOP-1009-BK | 12.90 € | **12.50 €** | 11.6 % | **8.1 %** | 12.56 € | stávame sa najlacnejší |
| Automatické vodítko 3 m Rojeco (zelené) | 10.00 € | **9.60 €** | 18.2 % | **13.4 %** | 9.70 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 14.2 % | **10.4 %** | 11.71 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 13.3 % | **9.5 %** | 11.79 € | stávame sa najlacnejší |
| NEDIS ZBRC10WT chytré dálkové ovládání ZigBee | 15.90 € | **15.50 €** | 15.9 % | **13.0 %** | 15.79 € | stávame sa najlacnejší |
| Thomson CR 50 | 14.90 € | **14.50 €** | 10.2 % | **7.3 %** | 14.88 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 2.10 € | **1.70 €** | 51.1 % | **22.3 %** | 1.80 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.40 € | **3.00 €** | 35.5 % | **19.6 %** | 3.08 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (hnedé) | 36.90 € | **36.50 €** | 6.6 % | **5.4 %** | 34.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beper BEP-P101FRI100 | 29.90 € | **29.50 €** | 11.4 % | **9.9 %** | 29.58 € | stávame sa najlacnejší |
| TEESA TSA3507 ruční mixér 1200W sada | 36.90 € | **36.50 €** | 15.3 % | **14.0 %** | 36.59 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 11.1 % | **9.9 %** | 35.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.5 % | **8.8 %** | 26.63 € | stávame sa najlacnejší |
| Domo DO 264 AP | 58.90 € | **58.50 €** | 10.3 % | **9.5 %** | 58.67 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 30.90 € | **30.50 €** | 10.1 % | **8.7 %** | 30.75 € | stávame sa najlacnejší |
| LENOVO adaptér TAB 68W AC USB ZG38C05739 | 17.90 € | **17.50 €** | 13.5 % | **11.0 %** | 17.77 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.9 % | **9.8 %** | 40.79 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 26.90 € | **26.50 €** | 14.9 % | **13.2 %** | 26.79 € | stávame sa najlacnejší |
| FoodSaver FSR2002 | 16.90 € | **16.50 €** | 12.2 % | **9.5 %** | 16.79 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPE-E (typ E) | 19.90 € | **19.50 €** | 14.9 % | **12.6 %** | 19.79 € | stávame sa najlacnejší |
| ETA 321990020 | 55.90 € | **55.50 €** | 10.2 % | **9.4 %** | 55.83 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.50 €** | 10.7 % | **9.4 %** | 32.88 € | stávame sa najlacnejší |
| Domo DO9195C | 32.90 € | **32.50 €** | 10.5 % | **9.1 %** | 32.88 € | stávame sa najlacnejší |
| Domo DO 9218 WK | 21.90 € | **21.50 €** | 10.4 % | **8.4 %** | 21.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.90 € | **22.50 €** | 34.1 % | **31.8 %** | 22.89 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 9.30 € | **9.10 €** | 27.5 % | **24.8 %** | 9.19 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 8.80 € | **8.60 €** | 38.9 % | **35.8 %** | 8.69 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 8.30 € | **8.10 €** | 36.0 % | **32.8 %** | 8.19 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 4 zásuvky, 1,5m, biela | 9.30 € | **9.10 €** | 47.4 % | **44.2 %** | 9.19 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 4 zásuvky, 3m, biela | 9.30 € | **9.10 €** | 14.7 % | **12.3 %** | 9.19 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 1,5m, b... | 9.30 € | **9.10 €** | 23.1 % | **20.5 %** | 9.19 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 3m, biela | 9.30 € | **9.10 €** | 12.2 % | **9.8 %** | 9.19 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 1,5m, b... | 9.30 € | **9.10 €** | 14.0 % | **11.6 %** | 9.19 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.60 € | **2.40 €** | 54.3 % | **42.4 %** | 2.44 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.70 € | **7.50 €** | 54.6 % | **50.6 %** | 7.56 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.50 € | **5.30 €** | 27.4 % | **22.8 %** | 5.39 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.00 € | **5.80 €** | 33.3 % | **28.8 %** | 5.89 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 6.20 € | **6.00 €** | 24.5 % | **20.4 %** | 6.09 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 6.20 € | **6.00 €** | 24.5 % | **20.4 %** | 6.09 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 6.70 € | **6.50 €** | 14.4 % | **11.0 %** | 6.59 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 7.80 € | **7.60 €** | 33.2 % | **29.8 %** | 7.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 4.80 € | **4.60 €** | 11.2 % | **6.5 %** | 4.69 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.40 € | **7.20 €** | 27.2 % | **23.8 %** | 7.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 6.50 € | **6.30 €** | 23.8 % | **20.0 %** | 6.39 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.20 € | **5.00 €** | 33.4 % | **28.2 %** | 5.09 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.70 € | **1.50 €** | 53.6 % | **35.5 %** | 1.56 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 4000K, 595l... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.09 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 4000K... | 1.70 € | **1.50 €** | 31.6 % | **16.1 %** | 1.59 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.20 €** | 52.4 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W COB, 3x AAA | 4.10 € | **3.90 €** | 22.1 % | **16.1 %** | 3.99 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.00 € | **9.80 €** | 16.8 % | **14.5 %** | 9.89 € | stávame sa najlacnejší |
| Solight LED zimná dedinka, modulárna, 14x prvkov, 10... | 7.10 € | **6.90 €** | 39.8 % | **35.8 %** | 6.99 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.10 € | **8.90 €** | 13.1 % | **10.6 %** | 8.99 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.00 € | **9.80 €** | 28.8 % | **26.3 %** | 9.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 7.10 € | **6.90 €** | 24.9 % | **21.4 %** | 6.99 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.50 € | **9.30 €** | 16.7 % | **14.2 %** | 9.39 € | stávame sa najlacnejší |
| Guzzanti GZ 256A | 386.00 € | **385.90 €** | 10.0 % | **10.0 %** | 385.97 € | stávame sa najlacnejší |
| Rowenta ZR177003 | 20.00 € | **19.90 €** | 7.2 % | **6.7 %** | 19.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FSR2802 | 18.00 € | **17.90 €** | 7.1 % | **6.5 %** | 17.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá QCY H3 pro ANC (čierne) | 41.00 € | **40.90 €** | 5.8 % | **5.5 %** | 40.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 10.2 % | **10.0 %** | 47.96 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.97 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 64.00 € | **63.90 €** | 24.7 % | **24.5 %** | 63.98 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 45.00 € | **44.90 €** | 24.3 % | **24.0 %** | 44.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.20 €** | 25.6 % | **24.2 %** | 9.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.80 € | **8.70 €** | 15.8 % | **14.5 %** | 8.79 € | stávame sa najlacnejší |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.40 € | **4.30 €** | 55.5 % | **52.0 %** | 4.32 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 2m, ... | 2.60 € | **2.50 €** | 11.3 % | **7.0 %** | 2.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.00 € | **0.90 €** | 23.2 % | **10.9 %** | 0.99 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.8 % | **9.9 %** | 12.96 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 18W, E27, 4000K... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.29 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.30 € | **4.20 €** | 8.6 % | **6.0 %** | 4.29 € | stávame sa najlacnejší |
| DOMO DO42102SV | 96.00 € | **95.90 €** | 6.3 % | **6.2 %** | 95.99 € | stávame sa najlacnejší |

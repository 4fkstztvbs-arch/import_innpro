# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-08

Vstup: `premiumstoresk_20260908_2219.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6077**
- Návrh **zvýšiť** cenu: **298** produktov
- Návrh **znížiť** cenu: **1780** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **3999** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **657**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (298)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Grafický tablet Huion Kamvas Studio 24 KS2401 | 2012.00 € | **2346.00 €** | 15.0 % | **34.1 %** | 2346.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 954.50 € | **1014.90 €** | 15.0 % | **22.3 %** | 1014.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini projektor Phillips N-100 s rozlíšením 480p (biely) | 90.50 € | **117.50 €** | 15.1 % | **49.5 %** | 117.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Phillips N-160 s rozlíšením 1080p (tmavošedý) | 219.50 € | **241.90 €** | 14.9 % | **26.7 %** | 241.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mini projektor Phillips N-110 s rozlíšením 720p (čie... | 107.50 € | **126.90 €** | 15.0 % | **35.7 %** | 126.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Phillips N-150 s rozlíšením 1080p (tmavošedý) | 190.50 € | **209.00 €** | 15.1 % | **26.3 %** | 209.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL 430406 Partybox 710 - black | 533.90 € | **548.00 €** | 10.0 % | **13.0 %** | 533.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Indukčná varná doska IsEasy LI3-17 | 134.50 € | **148.50 €** | 15.2 % | **27.1 %** | 148.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 33 Ah MHPower MS33-12 | 57.50 € | **65.50 €** | -7.1 % | **5.8 %** | 57.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Reproduktory Edifier MR3 2.0 (biele) | 84.00 € | **91.90 €** | 5.1 % | **14.9 %** | 91.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier MR3 2.0 (čierne) | 84.00 € | **91.90 €** | 5.1 % | **14.9 %** | 91.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ottocast Play2Video Plus Carplay/Android Auto bezdrô... | 61.50 € | **67.50 €** | 15.2 % | **26.5 %** | 67.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL CHARGEES3 | 114.50 € | **119.90 €** | 10.0 % | **15.2 %** | 114.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.90 € | **73.50 €** | 12.7 % | **20.2 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Creality K2 Pro Combo | 782.00 € | **786.50 €** | 14.4 % | **15.0 %** | 782.07 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **73.90 €** | 23.0 % | **30.8 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Gracioso horizontal | 194.00 € | **198.00 €** | 8.4 % | **10.7 %** | 194.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 40.50 € | **44.00 €** | 26.7 % | **37.6 %** | 40.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.90 € | **52.00 €** | 15.2 % | **22.5 %** | 49.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| MEROSS MRS200MA-EU – inteligentný navíjací mechanizm... | 120.90 € | **124.00 €** | 15.1 % | **18.1 %** | 124.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro ND/PL Brig... | 83.90 € | **87.00 €** | 15.2 % | **19.4 %** | 87.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 41.50 € | **44.50 €** | 29.9 % | **39.3 %** | 41.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 25.50 € | **28.50 €** | 16.1 % | **29.7 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 45.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 30W, prenosný, nabijací, 3000... | 31.00 € | **33.00 €** | 32.6 % | **41.1 %** | 31.01 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 32.00 € | **34.00 €** | 25.8 % | **33.7 %** | 32.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.50 € | **23.50 €** | 31.5 % | **43.8 %** | 21.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 22.50 € | **24.50 €** | 25.0 % | **36.1 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **16.90 €** | 10.6 % | **25.5 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 33.00 € | **34.90 €** | 11.3 % | **17.7 %** | 33.03 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 62.90 € | **64.50 €** | 10.2 % | **13.0 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **38.50 €** | 7.7 % | **12.1 %** | 37.23 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná stolná lampička s klipom bi... | 10.00 € | **11.50 €** | 18.3 % | **36.1 %** | 10.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight ručná akumulátorová píla 21V, lišta 100mm | 27.00 € | **28.50 €** | 13.7 % | **20.1 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ručný multimeter do auta UNI-T UT107 | 28.00 € | **29.50 €** | 14.3 % | **20.4 %** | 29.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter MOVA pre model I10 | 13.50 € | **15.00 €** | 14.8 % | **27.6 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.50 € | **70.90 €** | 34.0 % | **36.7 %** | 69.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Black | 68.50 € | **69.90 €** | 10.7 % | **12.9 %** | 68.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC710N Blue | 68.50 € | **69.90 €** | 10.7 % | **12.9 %** | 68.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA GT886 (čierne) | 23.50 € | **24.90 €** | 16.1 % | **23.0 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy ORYX X220 Iris | 19.50 € | **20.90 €** | 10.2 % | **18.1 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Blue | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C Red | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL TUNE 305 USB-C White | 16.90 € | **18.00 €** | 11.4 % | **18.7 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.10 € | **7.20 €** | 15.1 % | **35.8 %** | 6.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.90 € | **15.00 €** | 12.0 % | **20.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **6.40 €** | 8.9 % | **29.1 %** | 5.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 5.10 € | **6.10 €** | 10.9 % | **32.6 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 19.50 € | **20.50 €** | 24.6 % | **31.0 %** | 19.74 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 34.50 € | **35.50 €** | 25.1 % | **28.7 %** | 34.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight projekčné hodiny s meteostanicou | 20.50 € | **21.50 €** | 12.7 % | **18.2 %** | 21.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Motorcycle Intercom EJEAS MS8-SE | 85.00 € | **86.00 €** | 15.1 % | **16.4 %** | 86.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná cyklistická pumpa Flextail Tiny Bike Pump P... | 57.00 € | **58.00 €** | 15.0 % | **17.0 %** | 58.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE ToastMax | 47.50 € | **48.50 €** | 11.1 % | **13.4 %** | 47.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BC50D2V0 | 16.00 € | **17.00 €** | 10.3 % | **17.2 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 23.00 € | **23.90 €** | 43.2 % | **48.8 %** | 23.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Karta microSD Lexar 3.0 s kapacitou 64 GB | 18.00 € | **18.90 €** | 6.7 % | **12.1 %** | 18.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **19.90 €** | 37.2 % | **43.7 %** | 19.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filters ND8/16/32 Freewell for DJI Neo | 17.00 € | **17.90 €** | 13.6 % | **19.6 %** | 17.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 9.80 € | **10.50 €** | 18.6 % | **27.0 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 10.90 € | **11.50 €** | 29.0 % | **36.1 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.90 € | **16.50 €** | 19.0 % | **23.5 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herná myš ONIKUMA CW953 (čierna) | 12.90 € | **13.50 €** | 15.4 % | **20.7 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.90 € | **14.50 €** | 12.0 % | **16.8 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 41.00 € | **41.50 €** | 4.9 % | **6.1 %** | 41.06 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravír XTOOL M2 20 W | 1117.00 € | **1117.50 €** | 14.3 % | **14.3 %** | 1117.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT501A tester izolačného odporu | 57.00 € | **57.50 €** | 9.3 % | **10.3 %** | 57.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Svetelný merač UNI-T UT383 | 16.50 € | **17.00 €** | 11.1 % | **14.5 %** | 16.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 48.00 € | **48.50 €** | 8.7 % | **9.9 %** | 48.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 18.00 € | **18.50 €** | 5.7 % | **8.7 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Colmi P71 Smartwatch (Blue) | 18.00 € | **18.50 €** | 12.6 % | **15.7 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 36.00 € | **36.50 €** | 6.3 % | **7.8 %** | 36.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 41.00 € | **41.50 €** | 12.0 % | **13.3 %** | 41.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 35.00 € | **35.50 €** | 11.9 % | **13.5 %** | 35.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 85.00 € | **85.50 €** | 5.8 % | **6.4 %** | 85.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 85.00 € | **85.50 €** | 5.8 % | **6.4 %** | 85.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Uperfect UGame C2 16" 2560x1600 120Hz | 164.00 € | **164.50 €** | 11.4 % | **11.7 %** | 164.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 120.00 € | **120.50 €** | 9.9 % | **10.4 %** | 120.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 71.00 € | **71.50 €** | 13.1 % | **13.9 %** | 71.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 48.00 € | **48.50 €** | 14.8 % | **16.0 %** | 48.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (zelená) | 48.00 € | **48.50 €** | 11.6 % | **12.7 %** | 48.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor ZEUSLAP P16KT s 16-palcovým dotykov... | 204.00 € | **204.50 €** | 13.8 % | **14.1 %** | 204.34 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 31.00 € | **31.50 €** | 6.1 % | **7.8 %** | 31.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický skúter NAVEE GT5 Max | 566.00 € | **566.50 €** | 6.3 % | **6.4 %** | 566.36 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodinky Colmi V89 Smartwatch (čierne) | 28.00 € | **28.50 €** | 6.7 % | **8.6 %** | 28.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 90.00 € | **90.50 €** | 11.4 % | **12.0 %** | 90.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 110.00 € | **110.50 €** | 13.0 % | **13.6 %** | 110.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.00 € | **24.50 €** | 12.9 % | **15.2 %** | 24.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.00 € | **16.50 €** | 17.8 % | **21.5 %** | 16.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter UNI-T UT118B | 27.00 € | **27.50 €** | 13.5 % | **15.6 %** | 27.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT207B digitálny klešťový multimeter | 80.00 € | **80.50 €** | 8.4 % | **9.0 %** | 80.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 55.00 € | **55.50 €** | 6.1 % | **7.0 %** | 55.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 465.50 € | **466.00 €** | 7.6 % | **7.7 %** | 465.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 899.50 € | **900.00 €** | 14.3 % | **14.4 %** | 899.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.00 € | **90.50 €** | 14.5 % | **15.1 %** | 90.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny kapesny kompresor mini | 39.00 € | **39.50 €** | 18.3 % | **19.8 %** | 39.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM600A | 81.00 € | **81.50 €** | 7.1 % | **7.8 %** | 81.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 53.00 € | **53.50 €** | 9.4 % | **10.4 %** | 53.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kontaktný teplomer Uni-T UT325 | 78.00 € | **78.50 €** | 8.4 % | **9.1 %** | 78.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT362H Anemometer | 166.00 € | **166.50 €** | 12.2 % | **12.5 %** | 166.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibračný tester Uni-T UT311A | 254.00 € | **254.50 €** | 12.4 % | **12.6 %** | 254.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| 4-kanálový teplomer Uni-T UT325F | 99.00 € | **99.50 €** | 9.0 % | **9.6 %** | 99.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač hladiny hluku Uni-T UT35 | 118.50 € | **119.00 €** | 10.6 % | **11.0 %** | 118.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 115.00 € | **115.50 €** | 11.0 % | **11.5 %** | 115.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1549.00 € | **1549.50 €** | 10.2 % | **10.3 %** | 1549.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 5m, 3 x 2.5mm2, gumová H07RN-F3... | 18.00 € | **18.50 €** | 19.7 % | **23.0 %** | 18.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stropné svetlo Yeelight C2201C400 | 64.00 € | **64.50 €** | 14.8 % | **15.7 %** | 64.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT117C | 126.00 € | **126.50 €** | 5.4 % | **5.8 %** | 126.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 10.00 € | **10.50 €** | 25.5 % | **31.7 %** | 10.41 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.00 € | **16.50 €** | 6.7 % | **10.0 %** | 16.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 18.00 € | **18.50 €** | 8.2 % | **11.2 %** | 18.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Schodík pred mačaciu toaletu Catlink Scooper (sivé) | 84.00 € | **84.50 €** | 13.5 % | **14.2 %** | 84.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 29.00 € | **29.50 €** | 32.4 % | **34.7 %** | 29.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **20.50 €** | 46.6 % | **50.3 %** | 20.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Habotest HT86B | 11.00 € | **11.50 €** | 7.6 % | **12.5 %** | 11.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| GameSir G7 HE wired controller (white) | 43.00 € | **43.50 €** | 12.1 % | **13.4 %** | 43.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superfire BM01 4-in-1 bicycle light | 19.00 € | **19.50 €** | 11.1 % | **14.1 %** | 19.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic TPU (čierny) 1 kg | 21.00 € | **21.50 €** | 9.0 % | **11.6 %** | 21.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenc... | 76.00 € | **76.50 €** | 13.2 % | **13.9 %** | 76.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 25.00 € | **25.50 €** | 17.1 % | **19.5 %** | 25.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 44.00 € | **44.50 €** | 5.8 % | **7.0 %** | 44.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic ABS-Like Resin Pro 2 (Black) | 14.00 € | **14.50 €** | 12.1 % | **16.1 %** | 14.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic ABS-Like Resin Pro 2 (Grey) | 14.00 € | **14.50 €** | 6.3 % | **10.1 %** | 14.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 68.00 € | **68.50 €** | 13.4 % | **14.2 %** | 68.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 68.00 € | **68.50 €** | 13.4 % | **14.2 %** | 68.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.00 € | **16.50 €** | 25.2 % | **29.1 %** | 16.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| CR-Silk PLA Filament Creallity (Silver) | 17.00 € | **17.50 €** | 11.5 % | **14.7 %** | 17.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové slnečné okuliare ZEBLAZE Q01 v striebornej ... | 62.00 € | **62.50 €** | 12.9 % | **13.9 %** | 62.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 62.00 € | **62.50 €** | 9.9 % | **10.8 %** | 62.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevená vianočná hviezda, závesná, časov... | 10.00 € | **10.50 €** | 27.4 % | **33.8 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 10W, prenosný, nabijací, 1000... | 13.00 € | **13.50 €** | 25.2 % | **30.0 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonická zubná kefka s aplikáciou pre deti, sada konc... | 15.00 € | **15.50 €** | 14.0 % | **17.8 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 294.00 € | **294.50 €** | 7.2 % | **7.4 %** | 294.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna smart WIFI meteostanica | 98.00 € | **98.50 €** | 19.0 % | **19.6 %** | 98.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 174.00 € | **174.50 €** | 9.7 % | **10.0 %** | 174.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **42.50 €** | 19.0 % | **20.4 %** | 42.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čelovka Flextail Tiny Helio 700Z (oranžová) | 22.00 € | **22.50 €** | 14.5 % | **17.1 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosná pumpa Flextail Tiny Pump X (oranžová) | 16.50 € | **17.00 €** | 13.7 % | **17.1 %** | 17.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit LinoLift 500 85359 | 54.00 € | **54.50 €** | 7.7 % | **8.7 %** | 54.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| TP-LINK WiFi AX3000 (Deco X55 1-pack) | 98.00 € | **98.50 €** | 5.8 % | **6.4 %** | 98.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rapoo E9270p bezdrátová klávesnice černá | 37.00 € | **37.50 €** | 7.8 % | **9.3 %** | 37.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V /  9,0 Ah  MHPower GE9-12 GEL | 17.50 € | **18.00 €** | 6.9 % | **9.9 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 15.00 € | **15.50 €** | 12.3 % | **16.0 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.00 € | **22.50 €** | 6.9 % | **9.3 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Casio Fx 85 Es Plus 2E | 20.00 € | **20.50 €** | 9.6 % | **12.4 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| WHIRLPOOL WI 7020 P | 331.00 € | **331.50 €** | 8.0 % | **8.1 %** | 331.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1346.50 € | **1346.90 €** | 7.4 % | **7.4 %** | 1346.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung The Frame Pro QE75LS03HW | 2683.50 € | **2683.90 €** | 10.0 % | **10.0 %** | 2683.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ANMITE A185W03 18,5" prenosný monitor | 131.50 € | **131.90 €** | 12.1 % | **12.4 %** | 131.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 195.50 € | **195.90 €** | 9.9 % | **10.1 %** | 195.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer Uni-T LM1000 | 91.50 € | **91.90 €** | 6.0 % | **6.5 %** | 91.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Infračervený teplomer Uni-T UT303C+ | 97.50 € | **97.90 €** | 8.8 % | **9.2 %** | 97.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 212.50 € | **212.90 €** | 9.9 % | **10.1 %** | 212.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 82.50 € | **82.90 €** | 9.8 % | **10.4 %** | 82.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Arzopa A3C Pro 13,3" | 121.50 € | **121.90 €** | 8.3 % | **8.6 %** | 121.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| ANMITE A160W03 16" prenosný monitor | 87.50 € | **87.90 €** | 13.3 % | **13.8 %** | 87.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 247.50 € | **247.90 €** | 9.0 % | **9.2 %** | 247.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 74.50 € | **74.90 €** | 12.4 % | **13.0 %** | 74.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 85.50 € | **85.90 €** | 9.1 % | **9.6 %** | 85.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 240.50 € | **240.90 €** | 12.6 % | **12.8 %** | 240.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač LCR Uni-T UT612 | 133.50 € | **133.90 €** | 11.4 % | **11.7 %** | 133.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.50 € | **84.90 €** | 8.8 % | **9.4 %** | 84.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie LECCE s diaľkovým ovládačom, ... | 13.50 € | **13.90 €** | 4.6 % | **7.7 %** | 13.55 € | dobehnutie 2. najlacnejšieho konkurenta |
| Svetlomet Superfire HL06, 500lm, USB | 12.50 € | **12.90 €** | 10.8 % | **14.4 %** | 12.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.50 € | **10.90 €** | 20.2 % | **24.8 %** | 10.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 10.50 € | **10.90 €** | 26.5 % | **31.3 %** | 10.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 15.50 € | **15.90 €** | 7.8 % | **10.6 %** | 15.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.50 € | **11.90 €** | 40.8 % | **45.7 %** | 11.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny univerzálny multimeter Habotest HT113 | 10.50 € | **10.90 €** | 6.3 % | **10.4 %** | 10.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **10.90 €** | 21.6 % | **26.2 %** | 10.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP Wireless Mouse 220 Black | 13.50 € | **13.90 €** | 11.0 % | **14.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., vypínač, 1 režim | 4.70 € | **5.10 €** | 25.3 % | **35.9 %** | 4.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.70 € | **5.10 €** | 34.5 % | **46.0 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 27.50 € | **27.90 €** | 6.6 % | **8.1 %** | 27.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit 2AIR | 32.50 € | **32.90 €** | 12.4 % | **13.8 %** | 32.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 16.50 € | **16.90 €** | 43.2 % | **46.6 %** | 16.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 27.50 € | **27.90 €** | 23.6 % | **25.4 %** | 27.73 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell Osmo Pocket ND32/PL | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter Freewell Osmo Pocket ND64/PL | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell Osmo Pocket 4P ND16 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell Osmo Pocket 4P ND32 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell Osmo Pocket 4P ND8 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| ND filter Freewell pre Osmo Pocket ND64 | 19.50 € | **19.90 €** | 8.5 % | **10.7 %** | 19.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 41.50 € | **41.90 €** | 12.3 % | **13.4 %** | 41.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 20.50 € | **20.90 €** | 43.2 % | **46.0 %** | 20.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.90 €** | 18.7 % | **20.3 %** | 29.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.50 € | **17.90 €** | 12.8 % | **15.4 %** | 17.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.50 € | **17.90 €** | 12.6 % | **15.2 %** | 17.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 23.50 € | **23.90 €** | 15.4 % | **17.4 %** | 23.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač teploty a vlhkosti UNI-T UT333S | 23.50 € | **23.90 €** | 10.7 % | **12.6 %** | 23.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| ANLAN 02-AGSY53-02A Masážny prístroj 2 v 1 na tvár a... | 44.50 € | **44.90 €** | 13.9 % | **14.9 %** | 44.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **19.90 €** | 36.8 % | **39.6 %** | 19.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 18.50 € | **18.90 €** | 7.3 % | **9.6 %** | 18.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultrazvukový masážny prístroj na tvár so svetelnou t... | 35.50 € | **35.90 €** | 7.9 % | **9.1 %** | 35.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 44.50 € | **44.90 €** | 5.8 % | **6.8 %** | 44.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.50 € | **18.90 €** | 17.5 % | **20.0 %** | 18.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 43.50 € | **43.90 €** | 12.8 % | **13.8 %** | 43.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, obdĺžnikov... | 19.50 € | **19.90 €** | 31.7 % | **34.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| GODOX LUX Junior Retro blesk | 62.50 € | **62.90 €** | 13.6 % | **14.4 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Klávesnica ONIKUMA MT706 (biela) (QWERTY) | 40.50 € | **40.90 €** | 15.4 % | **16.5 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 21.50 € | **21.90 €** | 8.7 % | **10.7 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **49.90 €** | 23.6 % | **24.6 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Evolveo Motion D1, ovladač s klávesnicí | 33.50 € | **33.90 €** | 6.5 % | **7.7 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AX9U | 17.50 € | **17.90 €** | 10.2 % | **12.7 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 35.50 € | **35.90 €** | 6.0 % | **7.1 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi AC1300 Extender (DAP-1620) | 39.50 € | **39.90 €** | 15.6 % | **16.8 %** | 39.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.50 € | **17.90 €** | 10.7 % | **13.3 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R9 Plus (čierny) | 275.50 € | **275.90 €** | 7.3 % | **7.4 %** | 275.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Anycubic Photon Mono M7 Pro 3D Printer | 440.50 € | **440.90 €** | 5.9 % | **6.0 %** | 440.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Intelligent self-cleaning cat litterbox UBPet C20 | 277.50 € | **277.90 €** | 12.0 % | **12.2 %** | 277.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Jupiter 2 | 848.50 € | **848.90 €** | 8.3 % | **8.3 %** | 848.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň ELEGOO Neptune 4 Max | 348.50 € | **348.90 €** | 14.9 % | **15.0 %** | 348.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Letové pedále MOZA Racing AS019 | 347.50 € | **347.90 €** | 7.5 % | **7.6 %** | 347.86 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux 600 FLEX EES42210IX | 471.50 € | **471.90 €** | 7.0 % | **7.1 %** | 471.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GV663B65 | 507.50 € | **507.90 €** | 7.0 % | **7.1 %** | 507.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Whirlpool WOI4S8PPM1SX | 447.50 € | **447.90 €** | 5.8 % | **5.9 %** | 447.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.60 € | **6.90 €** | 32.5 % | **38.5 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 8.00 € | **8.20 €** | 36.6 % | **40.1 %** | 8.09 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Veľkej Británie, typ G | 5.40 € | **5.60 €** | 32.6 % | **37.5 %** | 5.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **10.00 €** | 38.1 % | **40.9 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 790.90 € | **791.00 €** | 13.8 % | **13.8 %** | 790.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener Revopoint POP 4 Premium | 930.90 € | **931.00 €** | 14.9 % | **14.9 %** | 930.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robot na čistenie bazénov WYBOT M1C | 669.90 € | **670.00 €** | 5.4 % | **5.5 %** | 670.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 395.90 € | **396.00 €** | 5.7 % | **5.7 %** | 396.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 403.90 € | **404.00 €** | 7.1 % | **7.1 %** | 404.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 15.9 % | **16.5 %** | 19.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS2 mini electric pump | 41.90 € | **42.00 €** | 7.0 % | **7.2 %** | 41.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíječka baterií GP ReCyko B423 4× AA GP ReCyko 210... | 16.90 € | **17.00 €** | 7.3 % | **7.9 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rapoo 9300M set klávesnice a myši černý | 31.90 € | **32.00 €** | 11.3 % | **11.6 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.60 € | **5.70 €** | 34.7 % | **37.1 %** | 5.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.60 € | **4.70 €** | 32.1 % | **35.0 %** | 4.67 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.70 €** | 38.0 % | **41.0 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.30 € | **4.40 €** | 33.4 % | **36.5 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka retro, klasický tvar, 8W, E27, ... | 2.00 € | **2.10 €** | 41.4 % | **48.5 %** | 2.05 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.80 € | **2.90 €** | 19.2 % | **23.4 %** | 2.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight napájací kábel 2-pin, 230V, 2,5 A, 2m | 1.70 € | **1.80 €** | 31.6 % | **39.4 %** | 1.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.80 € | **3.90 €** | 14.4 % | **17.4 %** | 3.85 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **4.00 €** | 37.9 % | **41.4 %** | 3.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priebežná IP44, 16A, čierna, vypínač | 3.80 € | **3.90 €** | 34.3 % | **37.9 %** | 3.87 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.60 € | **2.70 €** | 32.9 % | **38.1 %** | 2.68 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.70 €** | 15.7 % | **18.9 %** | 3.69 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.20 €** | 16.9 % | **22.5 %** | 2.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.00 €** | 19.7 % | **23.8 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **2.10 €** | 23.2 % | **29.3 %** | 2.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 6000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.18 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **10.00 €** | 44.2 % | **45.7 %** | 9.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.30 €** | 32.1 % | **36.2 %** | 3.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 11.90 € | **12.00 €** | 46.1 % | **47.4 %** | 11.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2.5m, 3 x 2.5mm2, gumová H07RN-... | 9.50 € | **9.60 €** | 19.7 % | **21.0 %** | 9.56 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 3x 0,75mm2, pletená, 3m | 5.40 € | **5.50 €** | 35.5 % | **38.0 %** | 5.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.10 € | **9.20 €** | 30.0 % | **31.5 %** | 9.16 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 5.4 % | **6.9 %** | 7.06 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.77 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.40 € | **9.50 €** | 26.9 % | **28.3 %** | 9.48 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **5.30 €** | 34.6 % | **37.2 %** | 5.28 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 11.90 € | **12.00 €** | 18.3 % | **19.3 %** | 11.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.10 € | **8.20 €** | 11.1 % | **12.4 %** | 8.19 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.90 € | **10.00 €** | 23.8 % | **25.1 %** | 9.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 26.3 % | **28.3 %** | 6.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 7.1 % | **8.7 %** | 6.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.90 € | **8.00 €** | 35.2 % | **36.9 %** | 7.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.80 € | **8.90 €** | 10.2 % | **11.5 %** | 8.89 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.20 € | **5.30 €** | 18.8 % | **21.0 %** | 5.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.50 € | **9.60 €** | 25.6 % | **26.9 %** | 9.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.90 € | **12.00 €** | 27.8 % | **28.9 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.40 € | **8.50 €** | 32.1 % | **33.7 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **9.70 €** | 33.2 % | **34.6 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stĺpcový filter pre Dyson V12 | 5.90 € | **6.00 €** | 24.3 % | **26.4 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK AC13U | 13.90 € | **14.00 €** | 10.1 % | **10.9 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktor Edifier D12 (čierny) | 81.90 € | **82.00 €** | 6.3 % | **6.5 %** | 81.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktor Edifier D12 (hnedý) | 81.90 € | **82.00 €** | 6.3 % | **6.5 %** | 81.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 251.90 € | **252.00 €** | 7.4 % | **7.5 %** | 251.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 06A1 | 102.90 € | **103.00 €** | 5.2 % | **5.3 %** | 102.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1780)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Laserový gravírovací stroj xTool P3 80W | 7402.00 € | **6758.90 €** | 15.0 % | **5.0 %** | 6503.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool P2S (sivý) | 3641.00 € | **3348.50 €** | 15.0 % | **5.8 %** | 3348.90 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **2909.90 €** | 15.0 % | **6.0 %** | 2910.00 € | stávame sa najlacnejší |
| Geneinno T1-Pro 150m 4K UHD podvodný dron | 2872.00 € | **2644.90 €** | 15.0 % | **5.9 %** | 2645.00 € | stávame sa najlacnejší |
| 3D skener Revopoint MetroY Ultra – edícia CCM | 2573.90 € | **2350.00 €** | 15.0 % | **5.0 %** | 1825.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOC6H76X | 769.00 € | **546.90 €** | 47.7 % | **5.0 %** | 484.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK6192AXL4 | 559.00 € | **367.00 €** | 67.0 % | **9.6 %** | 367.11 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2372.90 €** | 15.0 % | **6.5 %** | 2373.00 € | stávame sa najlacnejší |
| Samsung OLED QE77S99H | 3613.00 € | **3448.90 €** | 10.0 % | **5.0 %** | 3379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 CIR60430CB | 519.00 € | **367.50 €** | 48.3 % | **5.0 %** | 363.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje FN619EEW5 | 639.00 € | **490.50 €** | 39.3 % | **6.9 %** | 490.90 € | stávame sa najlacnejší |
| Samsung OLED QE65S99H | 2924.90 € | **2791.90 €** | 10.0 % | **5.0 %** | 2549.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EEG69405L | 769.00 € | **636.00 €** | 28.2 % | **6.0 %** | 636.20 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2326.50 € | **2198.50 €** | 15.0 % | **8.7 %** | 2198.90 € | stávame sa najlacnejší |
| Gorenje WDSI96A | 499.00 € | **373.50 €** | 40.3 % | **5.0 %** | 359.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Z Fold8 Ultra 5G 512GB Violet | 2649.90 € | **2529.50 €** | 10.0 % | **5.0 %** | 1726.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **484.50 €** | 32.2 % | **7.0 %** | 484.60 € | stávame sa najlacnejší |
| ELECTROLUX PerfectCare 700 EW7TN23372C | 639.00 € | **525.90 €** | 27.6 % | **5.0 %** | 447.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica MI 446 TBIM | 639.00 € | **528.50 €** | 28.2 % | **6.0 %** | 528.70 € | stávame sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Lavender | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1503.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 512GB Cream | 2425.00 € | **2314.90 €** | 10.0 % | **5.0 %** | 1600.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux 600 FLEX EES42210L | 529.00 € | **419.50 €** | 32.4 % | **5.0 %** | 369.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HILG64220SW | 269.00 € | **164.50 €** | 71.7 % | **5.0 %** | 152.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA RX-A4A BLACK | 1649.00 € | **1549.00 €** | 16.3 % | **9.3 %** | 1549.04 € | stávame sa najlacnejší |
| Samsung OLED QE77S85H | 2193.50 € | **2093.90 €** | 10.0 % | **5.0 %** | 1429.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr Fold 16+512GB Blue | 2190.50 € | **2090.90 €** | 10.0 % | **5.0 %** | 1449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslařský trenažér HMS Premium ZW1600 | 765.00 € | **671.90 €** | 138111.4 % | **121291.1 %** | 672.00 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1545.50 € | **1453.90 €** | 15.0 % | **8.2 %** | 1454.00 € | stávame sa najlacnejší |
| BEKO BDIN38640D | 599.00 € | **508.50 €** | 23.8 % | **5.1 %** | 430.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica TFB 128 TX | 369.00 € | **279.50 €** | 38.7 % | **5.0 %** | 269.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE65LS03HW | 1823.90 € | **1740.90 €** | 10.0 % | **5.0 %** | 1691.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS520E15W | 339.00 € | **257.90 €** | 38.1 % | **5.1 %** | 257.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOF3H40TH | 339.00 € | **259.90 €** | 37.0 % | **5.0 %** | 234.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux KGS64362XX | 269.00 € | **191.50 €** | 47.7 % | **5.1 %** | 188.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 303.50 € | **228.90 €** | 43.2 % | **8.0 %** | 229.00 € | stávame sa najlacnejší |
| Creality CR-Scan Raptor 3D Scanner | 950.00 € | **876.50 €** | 15.0 % | **6.1 %** | 876.90 € | stávame sa najlacnejší |
| Xiaomi 17 Ultra 16/512GB Black | 1522.90 € | **1453.90 €** | 10.0 % | **5.0 %** | 1099.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 410090000 | 399.00 € | **331.00 €** | 28.7 % | **6.8 %** | 331.40 € | stávame sa najlacnejší |
| GORENJE GS620C10W | 399.00 € | **332.50 €** | 26.2 % | **5.2 %** | 321.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BM3WFU3941WBW | 439.00 € | **373.50 €** | 23.4 % | **5.0 %** | 358.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AY210 (PC) | 746.50 € | **681.50 €** | 15.0 % | **5.0 %** | 681.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 954.00 € | **889.50 €** | 15.0 % | **7.2 %** | 889.90 € | stávame sa najlacnejší |
| Samsung OLED QE65S85H | 1370.90 € | **1308.50 €** | 10.0 % | **5.0 %** | 880.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Razr 70 Ultra 16+512GB Blue | 1358.00 € | **1296.50 €** | 10.0 % | **5.0 %** | 1220.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo Edge 2 Pro White | 1275.90 € | **1217.90 €** | 10.0 % | **5.0 %** | 755.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIR17300BCS | 399.00 € | **342.00 €** | 22.5 % | **5.0 %** | 254.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ45 Wifi/Bluetooth | 207.50 € | **151.90 €** | 43.5 % | **5.0 %** | 140.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS5B70CLI | 599.00 € | **543.50 €** | 15.7 % | **5.0 %** | 470.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425(2-pack) 4MPx, vonkajš... | 256.50 € | **202.00 €** | 33.4 % | **5.0 %** | 199.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower MPU-3500-48 UPS 3500W 48V čist... | 356.50 € | **303.50 €** | 72359.3 % | **61587.0 %** | 303.75 € | stávame sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **236.90 €** | 28.2 % | **5.1 %** | 233.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotopasca Camouflage EZ2 Elite Dual Lens | 203.50 € | **151.90 €** | 40.7 % | **5.0 %** | 141.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 649.90 € | **598.50 €** | 15.0 % | **5.9 %** | 598.90 € | stávame sa najlacnejší |
| Whirlpool OMK38HU0B | 299.00 € | **248.00 €** | 26.6 % | **5.0 %** | 228.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Carbon | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 778.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Signature 16+512GB Olive | 1095.50 € | **1045.50 €** | 10.0 % | **5.0 %** | 799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 W | 159.00 € | **110.50 €** | 51.4 % | **5.2 %** | 92.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO CTB 6250 B | 159.00 € | **110.50 €** | 51.4 % | **5.2 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R619EES5 | 519.00 € | **471.00 €** | 15.7 % | **5.0 %** | 407.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EIS8959 | 1062.50 € | **1014.50 €** | 10.0 % | **5.0 %** | 967.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 882.90 € | **835.00 €** | 15.0 % | **8.8 %** | 835.50 € | stávame sa najlacnejší |
| Samsung Micro RGB MRE55R85H | 1049.50 € | **1001.90 €** | 10.0 % | **5.0 %** | 895.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 256GB White | 1039.50 € | **992.00 €** | 10.0 % | **5.0 %** | 820.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE NRS8182KX | 549.00 € | **501.90 €** | 14.9 % | **5.0 %** | 494.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 417.00 € | **369.90 €** | 75238.8 % | **66729.3 %** | 370.00 € | stávame sa najlacnejší |
| POCO F9 Ultra 16/512GB Black | 1035.50 € | **988.50 €** | 10.0 % | **5.0 %** | 899.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHFF 6404 X6E | 1023.50 € | **976.90 €** | 10.0 % | **5.0 %** | 899.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 525.50 € | **479.90 €** | 15.0 % | **5.1 %** | 393.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX LHR3233CK | 199.00 € | **153.50 €** | 36.1 % | **5.0 %** | 128.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1350.00 € | **1304.90 €** | 15.0 % | **11.2 %** | 1305.00 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max robotický s mopom, 530... | 223.50 € | **178.50 €** | 31.8 % | **5.3 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LaserPecker LX2 40W laserový gravír | 1879.50 € | **1834.90 €** | 15.0 % | **12.3 %** | 1835.00 € | stávame sa najlacnejší |
| Xiaomi 17 12/256GB Venture Green | 972.90 € | **928.90 €** | 10.0 % | **5.0 %** | 779.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 3055 Arcus Wi-Fi meteorologická stanice | 461.50 € | **417.50 €** | 24.3 % | **12.5 %** | 417.60 € | stávame sa najlacnejší |
| YAMAHA A-S201 BLACK | 279.00 € | **235.50 €** | 24.4 % | **5.0 %** | 235.70 € | stávame sa najlacnejší |
| YAMAHA A-S201 SILVER | 279.00 € | **235.90 €** | 24.2 % | **5.1 %** | 235.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nano projektor JMGO N1S | 496.50 € | **453.50 €** | 15.0 % | **5.0 %** | 384.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA YWA-10 BL | 99.90 € | **57.00 €** | 95.4 % | **11.5 %** | 57.44 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT F2400 2400 W (čierna) | 779.50 € | **736.90 €** | 15.0 % | **8.7 %** | 737.00 € | stávame sa najlacnejší |
| POCO F9 Ultra 12/256GB Black | 927.90 € | **885.50 €** | 10.0 % | **5.0 %** | 799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C720 4MPx, vonkajší, IP, W... | 205.00 € | **162.90 €** | 32.3 % | **5.2 %** | 125.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA MV 447 ADW | 455.00 € | **413.00 €** | 17.8 % | **7.0 %** | 413.30 € | stávame sa najlacnejší |
| YAMAHA TT-S303 BLACK | 529.00 € | **488.50 €** | 13.8 % | **5.1 %** | 439.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Blue | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 574.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 12+512GB Red | 876.50 € | **836.50 €** | 10.1 % | **5.0 %** | 631.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA NS-AW592 WHITE 1 karton | 279.00 € | **239.50 €** | 22.3 % | **5.0 %** | 228.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GV520E10 | 339.00 € | **299.90 €** | 18.8 % | **5.1 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38646D | 535.00 € | **495.90 €** | 15.5 % | **7.0 %** | 496.00 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **728.50 €** | 15.0 % | **9.1 %** | 728.90 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max robotický s mopom, výk... | 188.50 € | **150.50 €** | 31.9 % | **5.3 %** | 142.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA7CE19S | 820.50 € | **783.50 €** | 10.0 % | **5.1 %** | 758.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X70 Soundbar | 612.90 € | **575.90 €** | 15.0 % | **8.1 %** | 576.00 € | stávame sa najlacnejší |
| Herný volant Moza Racing RS V2 RS25 | 426.00 € | **389.50 €** | 15.0 % | **5.1 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus T2 smart bike trainer | 625.90 € | **589.50 €** | 15.0 % | **8.3 %** | 589.90 € | stávame sa najlacnejší |
| POCO F9 PRO 12/256GB Black | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB Green | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| POCO F9 PRO 12/256GB White | 789.90 € | **753.90 €** | 10.0 % | **5.0 %** | 692.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE WPNEI94A1SWIFI | 439.00 € | **403.00 €** | 14.4 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality K1C 2025 | 401.90 € | **366.90 €** | 15.0 % | **5.0 %** | 348.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare VITURE XR Luma Pro (veľkosť L) | 407.50 € | **372.50 €** | 15.0 % | **5.1 %** | 355.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 782.50 € | **747.90 €** | 15.0 % | **9.9 %** | 748.00 € | stávame sa najlacnejší |
| Electrolux ENA7CE18S1 | 752.50 € | **718.00 €** | 10.1 % | **5.0 %** | 650.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (červený) | 394.00 € | **359.90 €** | 15.0 % | **5.0 %** | 322.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **368.90 €** | 15.0 % | **5.3 %** | 369.00 € | stávame sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **389.00 €** | 15.1 % | **5.8 %** | 389.50 € | stávame sa najlacnejší |
| 3D tlačiareň CREALITY SparkX i7 Combo | 391.50 € | **357.90 €** | 15.0 % | **5.1 %** | 318.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation 5 Digital + 2x DS5 | 727.50 € | **694.50 €** | 10.0 % | **5.0 %** | 579.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V1Pro TTL pre Nikon | 367.90 € | **335.90 €** | 15.0 % | **5.0 %** | 265.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW8F5412SAC | 709.90 € | **677.90 €** | 10.0 % | **5.1 %** | 674.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| kamerový set TP-Link Tapo C425 KIT 4MPx, vonkajšie, ... | 144.90 € | **113.90 €** | 33.7 % | **5.1 %** | 97.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation®5 Digital Edition–825GB | 671.50 € | **641.00 €** | 10.0 % | **5.0 %** | 598.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EOF3H50BK | 299.00 € | **268.90 €** | 16.9 % | **5.1 %** | 218.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE GT5 Pro | 506.00 € | **475.90 €** | 15.0 % | **8.1 %** | 476.00 € | stávame sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Blue | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 481.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA EDGE 70 PRO 8+256GB Wood | 657.50 € | **627.50 €** | 10.1 % | **5.1 %** | 481.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač MOVA Z200 Stick | 345.50 € | **315.50 €** | 15.0 % | **5.0 %** | 222.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice s 24hod /10denní předpovědí G... | 314.50 € | **284.90 €** | 26.2 % | **14.3 %** | 284.96 € | stávame sa najlacnejší |
| Projektor Aurzen Eazze D1 Max | 346.00 € | **316.50 €** | 15.0 % | **5.2 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 151.90 € | **122.50 €** | 43.8 % | **16.0 %** | 122.90 € | stávame sa najlacnejší |
| Whirlpool WOI118PT2SSMA | 796.90 € | **767.50 €** | 10.0 % | **6.0 %** | 767.80 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 478.00 € | **448.90 €** | 15.0 % | **8.0 %** | 449.00 € | stávame sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 424.50 € | **395.90 €** | 15.0 % | **7.3 %** | 396.00 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 | 387.00 € | **358.50 €** | 15.0 % | **6.5 %** | 358.90 € | stávame sa najlacnejší |
| GORENJE MO 4250 CLI | 159.00 € | **131.50 €** | 27.4 % | **5.4 %** | 102.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C615F KIT 3MPx, vonkajšia, IP PT... | 130.00 € | **103.00 €** | 32.5 % | **5.0 %** | 102.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor JMGO PicoPlay+ | 413.00 € | **386.90 €** | 14.9 % | **7.7 %** | 387.00 € | stávame sa najlacnejší |
| Čistiaci robot ULTENIC MX50 | 445.90 € | **419.90 €** | 15.0 % | **8.3 %** | 420.00 € | stávame sa najlacnejší |
| Okuliare RayNeo Air 4 Pro AR | 325.90 € | **299.90 €** | 15.0 % | **5.8 %** | 300.00 € | stávame sa najlacnejší |
| Projektor Ultima Poseidon E40 | 402.90 € | **376.90 €** | 15.0 % | **7.6 %** | 377.00 € | stávame sa najlacnejší |
| HP OmniBook 3 16-bu0303ncx (D9MH2EA) | 914.50 € | **888.50 €** | 10.0 % | **6.9 %** | 888.88 € | stávame sa najlacnejší |
| Blesk GODOX AD600BMII Wistro s uchytením Bowens | 564.00 € | **538.90 €** | 15.0 % | **9.8 %** | 539.00 € | stávame sa najlacnejší |
| Whirlpool WHK 26373 XBR6EA AI AdaptiveCo | 556.90 € | **531.90 €** | 10.0 % | **5.1 %** | 492.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux ENA6LE18S | 549.00 € | **524.00 €** | 10.0 % | **5.0 %** | 509.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **507.90 €** | 15.0 % | **9.6 %** | 508.00 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 713.90 € | **688.90 €** | 10.0 % | **6.2 %** | 689.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M1 | 544.50 € | **519.50 €** | 15.0 % | **9.8 %** | 519.90 € | stávame sa najlacnejší |
| LENOVO LEGION TAB (ZAEF0021CZ) | 530.90 € | **506.50 €** | 10.1 % | **5.0 %** | 466.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 334.00 € | **309.90 €** | 15.0 % | **6.7 %** | 310.00 € | stávame sa najlacnejší |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 503.50 € | **479.50 €** | 15.0 % | **9.5 %** | 479.90 € | stávame sa najlacnejší |
| Electrolux LKR64022AX | 515.50 € | **491.90 €** | 10.1 % | **5.0 %** | 453.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 278.00 € | **254.50 €** | 14.9 % | **5.2 %** | 251.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX Webcam W5 | 39.90 € | **16.50 €** | 161.4 % | **8.1 %** | 14.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Priemyselná infračervená termokamera Habotest HT820 | 273.90 € | **250.50 €** | 15.0 % | **5.2 %** | 211.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 69.00 € | **45.90 €** | 58.9 % | **5.7 %** | 46.00 € | stávame sa najlacnejší |
| Samsung Neo QLED QE43QN70H | 506.50 € | **483.50 €** | 10.1 % | **5.1 %** | 477.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LG GBBSJ21DPY | 497.50 € | **474.90 €** | 10.1 % | **5.1 %** | 396.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Neptune 4 Pro | 264.50 € | **241.90 €** | 15.0 % | **5.2 %** | 200.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 260.50 € | **237.90 €** | 46964.1 % | **42881.0 %** | 237.97 € | stávame sa najlacnejší |
| Steering Truck Wheel Moza Racing TSW RS060 (PC) | 261.00 € | **238.50 €** | 15.0 % | **5.1 %** | 229.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GECS6C70WPA | 499.90 € | **477.50 €** | 10.0 % | **5.1 %** | 415.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WHK 22372 X5EA1 AI AdaptiveCoo | 486.90 € | **464.90 €** | 10.0 % | **5.1 %** | 442.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDIN38441P | 484.50 € | **462.50 €** | 10.1 % | **5.1 %** | 449.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BRS 7N3BX-S | 482.90 € | **460.90 €** | 10.1 % | **5.1 %** | 449.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje RP619EEW5 | 482.50 € | **460.50 €** | 10.1 % | **5.0 %** | 449.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 288.90 € | **267.00 €** | 15.0 % | **6.3 %** | 267.50 € | stávame sa najlacnejší |
| DeerRun A1 Pro Move + skladací elektrický bežecký pá... | 494.50 € | **472.90 €** | 15.0 % | **9.9 %** | 473.00 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV20 Max White robotický s mopo... | 145.50 € | **123.90 €** | 24.7 % | **6.2 %** | 124.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C610 KIT 3MPx, vonkajšia, IP PTZ... | 103.90 € | **82.50 €** | 32.6 % | **5.3 %** | 77.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 176.00 € | **154.90 €** | 19.4 % | **5.1 %** | 142.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Pad 8 8/128GB Green (71768) | 458.90 € | **437.90 €** | 10.1 % | **5.0 %** | 333.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 Pro+ 5G 8/256GB Brown | 465.50 € | **444.50 €** | 10.1 % | **5.1 %** | 352.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZTE Nubia Air Pro 5G bílý | 459.50 € | **438.50 €** | 10.1 % | **5.1 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko B3WFU4841MCC | 461.50 € | **440.50 €** | 10.0 % | **5.0 %** | 432.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A7 bílá | 560.50 € | **539.50 €** | 10.0 % | **5.9 %** | 539.60 € | stávame sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 239.90 € | **219.00 €** | 24.6 % | **13.7 %** | 219.10 € | stávame sa najlacnejší |
| Electrolux 600 E62LD200S | 444.50 € | **424.00 €** | 10.1 % | **5.0 %** | 380.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW7TN3372C | 557.50 € | **537.00 €** | 10.0 % | **6.0 %** | 537.20 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 257.50 € | **237.00 €** | 15.1 % | **5.9 %** | 237.50 € | stávame sa najlacnejší |
| LG FA2S8V3GN3W | 444.90 € | **424.50 €** | 10.1 % | **5.0 %** | 358.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 305.00 € | **284.90 €** | 14.9 % | **7.4 %** | 285.00 € | stávame sa najlacnejší |
| Gorenje NRK620EABK4 | 445.50 € | **425.50 €** | 10.1 % | **5.1 %** | 330.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 180.50 € | **160.50 €** | 27.2 % | **13.1 %** | 160.79 € | stávame sa najlacnejší |
| Guzzanti GZ 340A | 431.90 € | **412.00 €** | 10.1 % | **5.0 %** | 383.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Phillips N-250 s rozlíšením 1080p (biely) | 348.90 € | **329.00 €** | 15.0 % | **8.5 %** | 329.50 € | stávame sa najlacnejší |
| POCO M8 PRO 5G 12/512GB Silver | 431.50 € | **411.90 €** | 10.0 % | **5.0 %** | 299.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BU1154HCN | 289.00 € | **269.50 €** | 12.8 % | **5.2 %** | 265.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor JMGO O2S Ultra | 2398.00 € | **2378.50 €** | 15.0 % | **14.1 %** | 2378.90 € | stávame sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 572.50 € | **553.00 €** | 15.0 % | **11.1 %** | 553.50 € | stávame sa najlacnejší |
| HP 15-fd0324nc (D42VYEA) | 693.90 € | **674.50 €** | 10.1 % | **7.0 %** | 674.58 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 8 Pro (sivý) | 339.00 € | **319.90 €** | 15.0 % | **8.5 %** | 320.00 € | stávame sa najlacnejší |
| Gorenje NRK620EAW4 | 414.90 € | **395.90 €** | 10.1 % | **5.0 %** | 360.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO BBIM12300X | 229.00 € | **210.00 €** | 14.5 % | **5.0 %** | 175.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C125 IP, 4MPx, WiFi, prísvit | 86.90 € | **67.90 €** | 34.6 % | **5.2 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **410.90 €** | 14.9 % | **10.0 %** | 411.00 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE V45i | 330.50 € | **311.90 €** | 15.0 % | **8.6 %** | 312.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (čierny) | 218.00 € | **199.50 €** | 15.0 % | **5.2 %** | 175.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **192.00 €** | 15.1 % | **5.0 %** | 173.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk SP1  Lite (či... | 216.00 € | **197.50 €** | 15.0 % | **5.2 %** | 197.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Okuliare RayNeo X3 Pro AR | 1549.90 € | **1531.50 €** | 15.0 % | **13.6 %** | 1531.90 € | stávame sa najlacnejší |
| Beko HII64600AFT | 390.50 € | **372.50 €** | 10.1 % | **5.0 %** | 301.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA CD-S303 BLACK | 396.90 € | **378.90 €** | 10.0 % | **5.1 %** | 319.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GS642D90X | 394.90 € | **376.90 €** | 10.1 % | **5.1 %** | 323.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fén MOVA Aero C v ružovej farbe | 206.90 € | **188.90 €** | 15.1 % | **5.1 %** | 138.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB PRO (ZAE40120CZ) | 396.90 € | **378.90 €** | 10.1 % | **5.1 %** | 355.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 67.50 € | **49.50 €** | 44.0 % | **5.6 %** | 49.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.50 €** | 14.9 % | **8.6 %** | 308.90 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 307.50 € | **289.90 €** | 15.0 % | **8.4 %** | 290.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (čierny) | 307.50 € | **289.90 €** | 15.0 % | **8.4 %** | 290.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 244.50 € | **227.00 €** | 15.1 % | **6.9 %** | 227.50 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (červený) | 292.50 € | **275.00 €** | 15.0 % | **8.1 %** | 275.50 € | stávame sa najlacnejší |
| Samsung Mini LED UE43M70H | 380.90 € | **363.50 €** | 10.0 % | **5.0 %** | 330.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM50 Helmet s ... | 638.00 € | **620.90 €** | 7.9 % | **5.0 %** | 520.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kalibrátor procesov Uni-T UT705 | 289.00 € | **271.90 €** | 15.0 % | **8.2 %** | 272.00 € | stávame sa najlacnejší |
| ASUS Vivobook Go 14 (E1404TA-EB093W) | 366.50 € | **349.50 €** | 10.1 % | **5.0 %** | 324.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 75Ah  VIPOW bezúdržbový akumu... | 138.00 € | **121.00 €** | 27264.7 % | **23893.7 %** | 121.03 € | stávame sa najlacnejší |
| Gorenje DE69CS | 516.50 € | **499.50 €** | 10.1 % | **6.5 %** | 499.55 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **281.50 €** | 15.0 % | **8.4 %** | 281.90 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 22 Plus GS2202 | 433.00 € | **416.00 €** | 15.0 % | **10.5 %** | 416.50 € | stávame sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.00 €** | 14.9 % | **9.6 %** | 346.50 € | stávame sa najlacnejší |
| Elektrický bežecký pás MERACH MR-T25B2 | 372.90 € | **356.00 €** | 15.1 % | **9.8 %** | 356.50 € | stávame sa najlacnejší |
| LEVENHUK Dobsonův New Skyline PLUS 6" (150/1200) | 598.50 € | **582.00 €** | 8.0 % | **5.0 %** | 556.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Aurzen Eazze D1G | 196.00 € | **179.50 €** | 14.9 % | **5.2 %** | 166.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C411 KIT 3MPx, outdoor, IP, WiFi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 45.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C260 IP, 8MPx, WiFi, prísvit | 79.90 € | **63.50 €** | 32.6 % | **5.4 %** | 55.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 KIT 3MPx, vonkajšia, IP, Wi... | 78.90 € | **62.50 €** | 33.5 % | **5.7 %** | 57.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Storio II 2043 90030 černá | 347.90 € | **331.90 €** | 10.1 % | **5.0 %** | 268.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENOVO IDEA TAB 11 5G 8/256GB ZAFM0293CZ | 354.90 € | **338.90 €** | 10.1 % | **5.1 %** | 313.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 3500/48 URZ3430  2400W 48V | 310.50 € | **294.50 €** | 10.9 % | **5.1 %** | 275.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier Airpulse A80 2.0 (hnedé) | 451.90 € | **435.90 €** | 15.0 % | **10.9 %** | 436.00 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Pro (červený) | 245.50 € | **230.00 €** | 15.1 % | **7.8 %** | 230.50 € | stávame sa najlacnejší |
| Guzzanti GZ 235 | 459.90 € | **444.50 €** | 10.0 % | **6.4 %** | 444.54 € | stávame sa najlacnejší |
| ETA 0028 98050 | 79.99 € | **64.90 €** | 30.1 % | **5.6 %** | 64.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWSC 833 SB | 331.50 € | **316.50 €** | 10.1 % | **5.2 %** | 296.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C410 3MPx, vonkajšie, IP, WiFi, ... | 69.00 € | **54.00 €** | 34.2 % | **5.0 %** | 46.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO B5RCNA406HXB3 | 536.90 € | **522.00 €** | 10.0 % | **7.0 %** | 522.20 € | stávame sa najlacnejší |
| Concept ETV8360bcN | 540.90 € | **526.00 €** | 10.0 % | **7.0 %** | 526.30 € | stávame sa najlacnejší |
| Gorenje GI6432BSCWF | 333.50 € | **318.90 €** | 10.0 % | **5.2 %** | 319.00 € | stávame sa najlacnejší |
| Beko B5XRCNA366HXB | 524.50 € | **510.00 €** | 10.1 % | **7.0 %** | 510.10 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E4W (čierny) | 230.50 € | **216.00 €** | 15.0 % | **7.7 %** | 216.50 € | stávame sa najlacnejší |
| Candy GD 410B8-S | 316.00 € | **301.90 €** | 10.0 % | **5.1 %** | 290.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C520WS 4MPx, vonkajšie, IP PTZ, ... | 70.00 € | **55.90 €** | 32.2 % | **5.6 %** | 49.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Ambito 0516 90000 bílý/tyrkysový | 75.99 € | **61.90 €** | 29.5 % | **5.5 %** | 54.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K5 | 122.90 € | **108.90 €** | 18.7 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G57 Power 12+256GB Green | 305.50 € | **291.50 €** | 10.2 % | **5.1 %** | 228.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Stolní mixér, G2013700, 10 ryc | 303.90 € | **289.90 €** | 10.1 % | **5.1 %** | 283.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá VIAIM Nano+ AI s hlasovým záznamníkom (str... | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 150.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE V25i Pro II | 317.90 € | **303.90 €** | 15.0 % | **10.0 %** | 304.00 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R25 RS091 | 1008.50 € | **994.50 €** | 15.0 % | **13.4 %** | 994.90 € | stávame sa najlacnejší |
| G3Ferrari G2015706 Emilia 250 | 376.90 € | **363.00 €** | 10.1 % | **6.0 %** | 363.31 € | stávame sa najlacnejší |
| Salente Rtx-L7 | 301.50 € | **287.90 €** | 10.0 % | **5.1 %** | 255.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C120 IP, 3MPx, WiFi, prísvit | 65.50 € | **52.00 €** | 33.5 % | **6.0 %** | 52.09 € | stávame sa najlacnejší |
| Fagor 4LVF-638ADIT | 483.50 € | **470.00 €** | 10.0 % | **6.9 %** | 470.30 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 194.50 € | **181.00 €** | 15.0 % | **7.0 %** | 181.50 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 42.99 € | **29.50 €** | 57.3 % | **7.9 %** | 29.52 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP OL133ED s 13,3-palcovým dot... | 221.90 € | **208.50 €** | 15.1 % | **8.1 %** | 208.90 € | stávame sa najlacnejší |
| SONY STRDH190 | 297.90 € | **284.50 €** | 10.1 % | **5.1 %** | 274.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 335.00 € | **321.90 €** | 14.9 % | **10.4 %** | 322.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot A1 | 172.00 € | **158.90 €** | 14.8 % | **6.1 %** | 159.00 € | stávame sa najlacnejší |
| Tefal RK364G10 Coppertinto | 69.90 € | **56.90 €** | 29.7 % | **5.6 %** | 48.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA R-S202D SILVER | 284.50 € | **271.50 €** | 10.1 % | **5.1 %** | 225.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANDY CIO 225 EE/N | 286.50 € | **273.50 €** | 10.1 % | **5.1 %** | 269.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT385 Meracie zariadenie výkonu lasera | 156.50 € | **143.50 €** | 14.9 % | **5.3 %** | 141.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool TDLR 6240S EU/N | 340.50 € | **327.50 €** | 10.1 % | **5.9 %** | 327.75 € | stávame sa najlacnejší |
| Fagor 4LVF-637ADIT | 457.50 € | **444.50 €** | 10.1 % | **7.0 %** | 444.80 € | stávame sa najlacnejší |
| Solight laserová vodováha 12 línií, 360 °, zelený laser | 153.50 € | **140.50 €** | 50.2 % | **37.5 %** | 140.90 € | stávame sa najlacnejší |
| Koleso MOZA RS068 FSR V2 (PC) | 678.50 € | **665.50 €** | 15.0 % | **12.8 %** | 665.90 € | stávame sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 557.90 € | **545.00 €** | 10.1 % | **7.5 %** | 545.10 € | stávame sa najlacnejší |
| Beko B5RCNA416HXBR | 456.90 € | **444.00 €** | 10.0 % | **6.9 %** | 444.30 € | stávame sa najlacnejší |
| Grafický tablet Huion Slate 11 | 274.50 € | **261.90 €** | 15.1 % | **9.8 %** | 262.00 € | stávame sa najlacnejší |
| Slúchadlá VIAIM Nano+ AI s hlasovým záznamníkom (zel... | 164.50 € | **151.90 €** | 15.0 % | **6.2 %** | 152.00 € | stávame sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 262.50 € | **249.90 €** | 19.8 % | **14.1 %** | 250.00 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 134.50 € | **122.00 €** | 24.9 % | **13.3 %** | 122.34 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 282.90 € | **270.50 €** | 10.0 % | **5.2 %** | 270.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 16 GEN 3 GS1563 | 426.00 € | **413.90 €** | 15.0 % | **11.7 %** | 414.00 € | stávame sa najlacnejší |
| Diagnostický skener pre motocykle ANCEL MT100 PRO | 145.00 € | **132.90 €** | 14.8 % | **5.2 %** | 99.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM3000L superkardioidní puškový, XLR | 114.50 € | **102.50 €** | 17.4 % | **5.1 %** | 84.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO HIC 64401 | 159.00 € | **147.00 €** | 13.6 % | **5.0 %** | 142.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept LA8383DS | 760.50 € | **748.50 €** | 10.0 % | **8.3 %** | 748.56 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 24 GS2401 | 564.90 € | **552.90 €** | 15.0 % | **12.6 %** | 553.00 € | stávame sa najlacnejší |
| Projektor BlitzWolf BW-V11 | 344.90 € | **332.90 €** | 15.0 % | **11.0 %** | 333.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD výsuvný blok zásuviek, 2... | 79.50 € | **67.50 €** | 59.1 % | **35.1 %** | 67.90 € | stávame sa najlacnejší |
| Okuliare XREAL 1S pre rozšírenú realitu | 529.50 € | **517.50 €** | 15.0 % | **12.4 %** | 517.90 € | stávame sa najlacnejší |
| ETA 0028 92020 | 79.99 € | **68.00 €** | 31.5 % | **11.8 %** | 68.13 € | stávame sa najlacnejší |
| Beko CF200EWN | 259.90 € | **248.00 €** | 10.1 % | **5.0 %** | 214.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFN26540WP | 426.90 € | **415.00 €** | 10.1 % | **7.0 %** | 415.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod 20m, 1 zásuvka IP44, 3 x ... | 69.50 € | **57.90 €** | 43.9 % | **19.9 %** | 58.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro K3 | 110.50 € | **98.90 €** | 17.5 % | **5.1 %** | 36.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 161 | 248.50 € | **236.90 €** | 10.2 % | **5.0 %** | 235.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 193.50 € | **181.90 €** | 15.0 % | **8.1 %** | 182.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 113.50 € | **101.90 €** | 43.9 % | **29.2 %** | 102.00 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 407.50 € | **396.00 €** | 10.1 % | **7.0 %** | 396.10 € | stávame sa najlacnejší |
| Shark RV2620WDEU Matrix Plus 2v1 mop | 380.50 € | **369.00 €** | 10.1 % | **6.8 %** | 369.20 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C230 IP, 5MPx, WiFi, prísvit | 54.90 € | **43.50 €** | 33.0 % | **5.4 %** | 39.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbanka / štartér Lokithor J401 - 2500A 12V 74Wh | 131.00 € | **119.90 €** | 14.9 % | **5.2 %** | 111.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 3-pack) | 233.50 € | **222.50 €** | 10.2 % | **5.0 %** | 98.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta Extreme Dry Compact DH5250F0 | 243.90 € | **232.90 €** | 10.1 % | **5.1 %** | 190.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 15 8/256GB Black | 241.50 € | **230.50 €** | 10.2 % | **5.2 %** | 196.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 216.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo RV20 Max Plus | 244.50 € | **233.50 €** | 10.0 % | **5.1 %** | 216.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 126.00 € | **115.00 €** | 24.2 % | **13.4 %** | 115.05 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 230.50 € | **219.50 €** | 10.6 % | **5.3 %** | 219.60 € | stávame sa najlacnejší |
| Electrolux E3T1-3ST | 42.00 € | **31.00 €** | 47.6 % | **9.0 %** | 31.21 € | stávame sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.50 €** | 14.9 % | **8.6 %** | 189.90 € | stávame sa najlacnejší |
| Octagon SF8008 V3 SUPREME Twin 4K UHD, dual OS Enigm... | 146.50 € | **135.50 €** | 15.3 % | **6.7 %** | 135.90 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 127.50 € | **116.50 €** | 25.4 % | **14.6 %** | 116.90 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **143.50 €** | 15.1 % | **6.9 %** | 143.90 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120 | 182.90 € | **172.00 €** | 15.1 % | **8.2 %** | 172.50 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 100W, 9000... | 49.50 € | **38.90 €** | 47.9 % | **16.2 %** | 39.00 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 31.50 € | **20.90 €** | 59.3 % | **5.7 %** | 21.00 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 4/128GB (ZAFR0018CZ) | 228.50 € | **217.90 €** | 10.2 % | **5.1 %** | 188.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC772830 | 226.50 € | **215.90 €** | 10.2 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (čierny) | 227.50 € | **216.90 €** | 15.1 % | **9.7 %** | 217.00 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R10 Pro (oranžový) | 227.50 € | **216.90 €** | 15.1 % | **9.7 %** | 217.00 € | stávame sa najlacnejší |
| Guzzanti GZ 338 | 583.00 € | **572.50 €** | 10.0 % | **8.0 %** | 572.54 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 217.50 € | **207.00 €** | 15.1 % | **9.5 %** | 207.50 € | stávame sa najlacnejší |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 217.50 € | **207.00 €** | 15.1 % | **9.5 %** | 207.50 € | stávame sa najlacnejší |
| G3Ferrari G2017500 | 229.90 € | **219.50 €** | 10.0 % | **5.1 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard Capriolo Orange 335 x 83x 15 cm, 150 kg | 272.90 € | **262.50 €** | 9.3 % | **5.2 %** | 261.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WE694A1 | 358.90 € | **348.50 €** | 10.1 % | **6.9 %** | 348.80 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-Plus 4+64 GB | 129.00 € | **118.90 €** | 14.9 % | **5.9 %** | 119.00 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas Pro 13 GT133 | 220.00 € | **209.90 €** | 15.0 % | **9.7 %** | 210.00 € | stávame sa najlacnejší |
| Termovízna kamera FNIRSI TDM-120P | 191.00 € | **180.90 €** | 15.0 % | **8.9 %** | 181.00 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit TBOX-S2P Carplay&Androi... | 120.50 € | **110.50 €** | 14.8 % | **5.3 %** | 83.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo C420S2 | 212.90 € | **202.90 €** | 10.2 % | **5.0 %** | 187.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 220A | 225.50 € | **215.50 €** | 10.1 % | **5.2 %** | 205.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **159.00 €** | 14.9 % | **8.1 %** | 159.50 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Nikon | 127.90 € | **118.00 €** | 15.1 % | **6.2 %** | 118.50 € | stávame sa najlacnejší |
| Braun SI1040GR | 35.90 € | **26.00 €** | 50.6 % | **9.1 %** | 26.17 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C310 vonkajšia, IP, FHD, WiFi, p... | 48.50 € | **38.90 €** | 31.3 % | **5.3 %** | 37.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 214.50 € | **204.90 €** | 15.0 % | **9.8 %** | 205.00 € | stávame sa najlacnejší |
| Habotest HT2302 Digitálny tester zemného odporu | 116.00 € | **106.50 €** | 14.9 % | **5.5 %** | 88.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 109.50 € | **100.00 €** | 24.1 % | **13.4 %** | 100.04 € | stávame sa najlacnejší |
| Guzzanti GZ 110G | 331.50 € | **322.00 €** | 10.1 % | **7.0 %** | 322.12 € | stávame sa najlacnejší |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 180.50 € | **171.00 €** | 24.7 % | **18.2 %** | 171.21 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-PVM3000M studiový stereofonní, XLR | 98.50 € | **89.00 €** | 17.8 % | **6.4 %** | 89.47 € | stávame sa najlacnejší |
| Solight predlžovací prívod 15m, 1 zásuvka IP44, 3 x ... | 53.50 € | **44.00 €** | 43.6 % | **18.1 %** | 44.50 € | stávame sa najlacnejší |
| Inteligentný dávkovač krmiva CatLink F04 STD | 109.90 € | **100.50 €** | 15.0 % | **5.2 %** | 95.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RICATECH PR1980 Ghettoblaster | 59.90 € | **50.50 €** | 24.8 % | **5.2 %** | 46.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI1009OR | 32.90 € | **23.50 €** | 54.3 % | **10.2 %** | 23.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 50.90 € | **41.50 €** | 44.2 % | **17.6 %** | 41.90 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 260.90 € | **251.50 €** | 14.1 % | **10.0 %** | 251.52 € | stávame sa najlacnejší |
| CANON i-SENSYS MF3010 | 202.90 € | **193.90 €** | 10.0 % | **5.1 %** | 153.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 1226 | 195.50 € | **186.50 €** | 10.1 % | **5.1 %** | 172.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 83.50 € | **74.50 €** | 18.1 % | **5.4 %** | 62.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2011300 | 205.50 € | **196.50 €** | 10.1 % | **5.2 %** | 191.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LONGER RAY5 mini 3,5 W laserový gravír | 104.50 € | **95.50 €** | 14.9 % | **5.0 %** | 92.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 210.50 € | **201.50 €** | 24.9 % | **19.5 %** | 201.56 € | stávame sa najlacnejší |
| RUSSELL HOBBS 23310-56/RH | 54.90 € | **45.90 €** | 36.8 % | **14.4 %** | 46.00 € | stávame sa najlacnejší |
| IMOU S800 PRO palubná kamera, 4K | 107.50 € | **98.50 €** | 14.8 % | **5.2 %** | 98.90 € | stávame sa najlacnejší |
| Solight LED vianočná girlanda s ihličím, 7m, 112x LE... | 30.90 € | **22.00 €** | 54.5 % | **10.0 %** | 22.50 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 538.50 € | **529.90 €** | 8.0 % | **6.2 %** | 529.95 € | stávame sa najlacnejší |
| Whirlpool WHK 22373 X6EA AI AdaptiveCool | 507.50 € | **498.90 €** | 10.0 % | **8.2 %** | 499.00 € | stávame sa najlacnejší |
| Redmi Pad 2 4/128GB šedá (65579) | 196.50 € | **187.90 €** | 10.0 % | **5.2 %** | 135.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - na bubne, 4 zásuvky, 25... | 104.50 € | **95.90 €** | 43.9 % | **32.0 %** | 96.00 € | stávame sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 147.00 € | **138.50 €** | 11.6 % | **5.1 %** | 127.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC728D10 | 182.50 € | **174.00 €** | 10.2 % | **5.0 %** | 163.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 145.50 € | **137.00 €** | 24.9 % | **17.6 %** | 137.39 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim | 36.99 € | **28.50 €** | 38.5 % | **6.7 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer ZHM2459S | 47.90 € | **39.50 €** | 38.2 % | **14.0 %** | 39.70 € | stávame sa najlacnejší |
| Leifheit Combi Clean M + náhr. Static | 29.90 € | **21.50 €** | 56.8 % | **12.8 %** | 21.71 € | stávame sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 49.90 € | **41.50 €** | 64.6 % | **36.9 %** | 41.90 € | stávame sa najlacnejší |
| Electrolux E3HB1-4GG | 32.00 € | **23.90 €** | 42.8 % | **6.6 %** | 23.99 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT černé | 168.00 € | **159.90 €** | 15.7 % | **10.1 %** | 159.99 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD BT stříbrné | 168.00 € | **159.90 €** | 15.7 % | **10.1 %** | 159.99 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K1 klopový, bezdrátový | 90.00 € | **81.90 €** | 17.4 % | **6.9 %** | 82.00 € | stávame sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus Black | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Charles i4 Plus White | 178.50 € | **170.50 €** | 10.1 % | **5.2 %** | 112.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP LaserJet Pro MFP M234dw (6GW99F) | 176.90 € | **168.90 €** | 10.1 % | **5.1 %** | 130.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G1018100 Horkovzdušná fritéza | 177.50 € | **169.50 €** | 10.1 % | **5.1 %** | 148.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX U-Box J42 Nano/bez OS | 176.90 € | **168.90 €** | 10.1 % | **5.1 %** | 156.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 48S | 166.50 € | **158.50 €** | 10.3 % | **5.0 %** | 149.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-135-BK dřevěný stoj... | 499.50 € | **491.50 €** | 6.8 % | **5.1 %** | 485.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0835 SOS FM/ AM, Bluetooth, po... | 29.50 € | **21.50 €** | 46.5 % | **6.8 %** | 20.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus BH-1258 Burgundy Metallic Line ... | 46.50 € | **38.50 €** | 28.3 % | **6.2 %** | 37.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C113 IP, 3MPx, WiFi, prísvit, vn... | 38.90 € | **30.90 €** | 32.4 % | **5.2 %** | 30.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 117.50 € | **109.50 €** | 16.0 % | **8.1 %** | 109.57 € | stávame sa najlacnejší |
| Guzzanti GZ 103RB | 218.50 € | **210.50 €** | 10.2 % | **6.2 %** | 210.58 € | stávame sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501 11'6" 350x81x1... | 176.00 € | **168.00 €** | 21.5 % | **16.0 %** | 168.44 € | stávame sa najlacnejší |
| Electrolux ESKQ9 | 21.99 € | **14.00 €** | 70.3 % | **8.4 %** | 14.42 € | stávame sa najlacnejší |
| SAMSUNG Odyssey G40B (LS25BG400EUXEN) | 167.90 € | **160.00 €** | 10.2 % | **5.0 %** | 136.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 200.90 € | **193.00 €** | 14.2 % | **9.7 %** | 193.29 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 29.50 € | **21.90 €** | 42.0 % | **5.4 %** | 19.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled fotobinokulární Levenhuk Kelvin Snap 12x50 | 167.50 € | **159.90 €** | 11.0 % | **6.0 %** | 159.95 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 189.50 € | **181.90 €** | 15.1 % | **10.5 %** | 182.00 € | stávame sa najlacnejší |
| Naparovač odevov Neakasa Magic 1 | 88.00 € | **80.50 €** | 14.8 % | **5.0 %** | 70.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bežecký pás Acra GB4500N pre chôdzu a pomalý beh | 357.00 € | **349.50 €** | 9.3 % | **7.0 %** | 349.86 € | stávame sa najlacnejší |
| Solight vstavaná zásuvka + USB A+C + Wireless 10W, o... | 47.00 € | **39.50 €** | 58.7 % | **33.4 %** | 39.90 € | stávame sa najlacnejší |
| XIAOMI Mesh System AX3000 NE (3-pack) | 165.90 € | **158.50 €** | 10.0 % | **5.1 %** | 127.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **98.50 €** | 15.1 % | **7.1 %** | 98.90 € | stávame sa najlacnejší |
| D-LINK WiFi N300 Extender (DAP-1325) | 26.90 € | **19.50 €** | 45.6 % | **5.6 %** | 16.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **40.90 €** | 54.5 % | **31.6 %** | 41.00 € | stávame sa najlacnejší |
| Salente Rtx-L6 | 158.00 € | **150.90 €** | 10.0 % | **5.1 %** | 145.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Poseidon R3T Soundbar | 90.00 € | **82.90 €** | 14.9 % | **5.8 %** | 83.00 € | stávame sa najlacnejší |
| Kamera EMOS IP-1300 LANTERN /4074/ GoSmart venkovní ... | 119.50 € | **112.50 €** | 11.9 % | **5.4 %** | 105.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal HT461138 | 49.90 € | **42.90 €** | 22.2 % | **5.1 %** | 36.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 8501A | 157.50 € | **150.50 €** | 10.0 % | **5.1 %** | 144.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EB61C4DB | 150.50 € | **143.50 €** | 10.1 % | **5.0 %** | 139.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEVENHUK New Skyline BASE 70/900 EQ1 | 259.00 € | **252.00 €** | 7.9 % | **5.0 %** | 248.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 37.50 € | **30.50 €** | 29.5 % | **5.3 %** | 28.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C210 IP, 3MP, WiFi, prísvit | 36.50 € | **29.50 €** | 31.6 % | **6.4 %** | 27.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 119.90 € | **112.90 €** | 14.2 % | **7.5 %** | 112.99 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 37.90 € | **30.90 €** | 42.6 % | **16.3 %** | 31.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0836 SOS FM/ AM, Bluetooth, po... | 33.50 € | **26.50 €** | 35.6 % | **7.2 %** | 26.79 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 25.50 € | **18.50 €** | 55.1 % | **12.5 %** | 18.90 € | stávame sa najlacnejší |
| Herný volant PXN-V900 Gen2 | 99.50 € | **92.50 €** | 14.8 % | **6.8 %** | 92.90 € | stávame sa najlacnejší |
| DOMO DO244SV | 147.90 € | **141.00 €** | 10.2 % | **5.0 %** | 132.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor ZEUSLAP AP156 s uhlopriečkou 15,6" | 115.90 € | **109.00 €** | 15.1 % | **8.2 %** | 109.50 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM20 všesměrový klopový s předzesil... | 35.90 € | **29.00 €** | 30.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OfficeJet Pro 8132e AiO HP+ (40Q45B) | 149.50 € | **142.90 €** | 10.1 % | **5.2 %** | 97.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 Power 4+256GB Blue | 152.50 € | **145.90 €** | 10.0 % | **5.2 %** | 114.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO4931EA | 135.50 € | **128.90 €** | 10.4 % | **5.0 %** | 106.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA G3430 Pink | 147.50 € | **140.90 €** | 10.2 % | **5.2 %** | 130.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal GC517DE0 | 139.50 € | **132.90 €** | 10.4 % | **5.2 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong LEAP-S3+ V2 Google TV 4K UHD Android TV multi... | 75.50 € | **68.90 €** | 15.2 % | **5.2 %** | 60.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX TT600S | 78.50 € | **71.90 €** | 15.0 % | **5.3 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW5558E0 | 180.50 € | **173.90 €** | 10.1 % | **6.1 %** | 173.96 € | stávame sa najlacnejší |
| Nástenný skener Uni-T UT387LM | 77.50 € | **70.90 €** | 15.4 % | **5.5 %** | 71.00 € | stávame sa najlacnejší |
| IPL epilátor ANLAN 02-ATMY52-0RE | 110.50 € | **103.90 €** | 15.0 % | **8.1 %** | 104.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 35B1 | 143.00 € | **136.50 €** | 10.0 % | **5.0 %** | 126.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač DO TechniSat TechniControl | 25.00 € | **18.50 €** | 42.1 % | **5.2 %** | 13.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajší stĺpik Ragusa 500, 7W, 450lm, 3... | 29.00 € | **22.50 €** | 37.2 % | **6.5 %** | 22.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 69.50 € | **63.00 €** | 25.5 % | **13.8 %** | 63.19 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 71.00 € | **64.50 €** | 16.4 % | **5.8 %** | 64.69 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 345.00 € | **338.50 €** | 14.9 % | **12.8 %** | 338.90 € | stávame sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.50 €** | 14.8 % | **6.2 %** | 80.90 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.00 €** | 15.2 % | **9.5 %** | 124.50 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.00 €** | 15.1 % | **12.9 %** | 346.50 € | stávame sa najlacnejší |
| Xiaomi Watch S4 Silver | 144.90 € | **138.50 €** | 10.0 % | **5.1 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON SELPHY CP-1500 Pink | 147.90 € | **141.50 €** | 10.0 % | **5.2 %** | 139.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná 12V / 45 Ah MHPower 6-DMF-45 GEL Tra... | 113.00 € | **106.90 €** | 11.2 % | **5.2 %** | 90.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Dvouplotýnkový vařič, G1013800 | 142.00 € | **135.90 €** | 10.0 % | **5.3 %** | 130.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 LFP4 RB-4026 300W 12V | 84.00 € | **77.90 €** | 13.6 % | **5.3 %** | 74.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 75.00 € | **68.90 €** | 14.8 % | **5.5 %** | 68.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EFS 1 W | 21.99 € | **15.90 €** | 48.6 % | **7.5 %** | 9.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lauben Low Sugar Rice Cooker 3000WT | 128.90 € | **122.90 €** | 10.2 % | **5.1 %** | 84.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kodak Friendly Zoom FZ45 Black | 136.90 € | **130.90 €** | 10.0 % | **5.2 %** | 108.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-4In1-Ss | 131.00 € | **125.00 €** | 10.0 % | **5.0 %** | 113.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálne nočné videnie FNIRSI NVS-40 so záznamom v ... | 69.50 € | **63.50 €** | 15.3 % | **5.4 %** | 54.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FW501815 | 136.90 € | **130.90 €** | 10.1 % | **5.2 %** | 121.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO354VD | 132.90 € | **126.90 €** | 10.2 % | **5.2 %** | 120.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA AIR FRYER TSA8046W | 53.90 € | **47.90 €** | 19.0 % | **5.7 %** | 44.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Bellagio červený multikapslový | 119.90 € | **113.90 €** | 10.9 % | **5.3 %** | 112.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 72.90 € | **66.90 €** | 15.0 % | **5.6 %** | 66.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tlmič nárazov pre pedále MRP MOZA RACING AS020 | 70.00 € | **64.00 €** | 15.0 % | **5.1 %** | 64.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 99.50 € | **93.50 €** | 24.7 % | **17.2 %** | 93.80 € | stávame sa najlacnejší |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 121.00 € | **115.00 €** | 23.5 % | **17.4 %** | 115.35 € | stávame sa najlacnejší |
| Žehlička Nedis IRONCL250 naparovacia | 45.50 € | **39.50 €** | 21.3 % | **5.3 %** | 39.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **26.50 €** | 59.9 % | **30.4 %** | 26.90 € | stávame sa najlacnejší |
| Blesk GODOX V860III TTL pre Sony | 204.50 € | **198.50 €** | 15.0 % | **11.6 %** | 198.90 € | stávame sa najlacnejší |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 804.50 € | **798.50 €** | 15.0 % | **14.1 %** | 798.90 € | stávame sa najlacnejší |
| Solight nepriamy germicidný UV žiarič | 67.50 € | **61.50 €** | 50.4 % | **37.1 %** | 61.90 € | stávame sa najlacnejší |
| Tefal OptiGrill 2v1 GC773D30 | 167.00 € | **161.00 €** | 10.1 % | **6.1 %** | 161.47 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 153.00 € | **147.00 €** | 14.9 % | **10.4 %** | 147.50 € | stávame sa najlacnejší |
| Dynamický mikrofón Maono PD200W (čierny) | 74.00 € | **68.00 €** | 15.0 % | **5.7 %** | 68.50 € | stávame sa najlacnejší |
| Slúchadlá JBL Wave Beam2 biele | 66.90 € | **61.00 €** | 15.3 % | **5.2 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2013900 Artiko Výrobník ledu | 127.90 € | **122.00 €** | 10.1 % | **5.0 %** | 111.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.00 €** | 15.0 % | **10.0 %** | 129.50 € | stávame sa najlacnejší |
| TP-LINK RE200 AC750 WiFi Range Extender | 29.90 € | **24.00 €** | 30.8 % | **5.0 %** | 20.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 30.90 € | **25.00 €** | 59.7 % | **29.2 %** | 25.50 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 41.50 € | **35.90 €** | 32.4 % | **14.5 %** | 35.94 € | stávame sa najlacnejší |
| Solight 1z + USB-C 20W PD vstavaná zásuvka, 2m, stri... | 25.50 € | **19.90 €** | 59.8 % | **24.7 %** | 20.00 € | stávame sa najlacnejší |
| Evolveo StrongVision Solar 4G | 129.50 € | **123.90 €** | 10.0 % | **5.3 %** | 103.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 20V | 119.50 € | **113.90 €** | 10.5 % | **5.3 %** | 113.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA PrimeSound HQ-995X | 182.50 € | **176.90 €** | 10.0 % | **6.7 %** | 176.92 € | stávame sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 3-pack) | 120.50 € | **115.00 €** | 10.1 % | **5.0 %** | 90.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Flip 7, černý | 115.50 € | **110.00 €** | 10.3 % | **5.1 %** | 95.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera EMEET SmartCam S600L | 65.00 € | **59.50 €** | 14.7 % | **5.0 %** | 54.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash DY451 PRO s ventilátorom... | 66.00 € | **60.50 €** | 15.0 % | **5.4 %** | 56.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO MGC20130BFB | 82.00 € | **76.50 €** | 13.0 % | **5.4 %** | 74.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 19.50 € | **14.00 €** | 46.8 % | **5.4 %** | 14.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 56.50 € | **51.00 €** | 24.7 % | **12.5 %** | 51.01 € | stávame sa najlacnejší |
| Beko B3RCSO255S | 281.00 € | **275.50 €** | 10.0 % | **7.9 %** | 275.80 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, hliní... | 34.50 € | **29.00 €** | 58.8 % | **33.5 %** | 29.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket Every Day (balenie... | 75.50 € | **70.00 €** | 15.4 % | **7.0 %** | 70.50 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **80.00 €** | 14.9 % | **7.5 %** | 80.50 € | stávame sa najlacnejší |
| Redmi A7 Pro 4/64GB Black | 126.90 € | **121.50 €** | 10.0 % | **5.4 %** | 95.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta HU4020F0 | 112.90 € | **107.50 €** | 10.4 % | **5.1 %** | 84.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOTOROLA Moto G06 4+64GB Blue | 117.90 € | **112.50 €** | 10.3 % | **5.2 %** | 92.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 122.90 € | **117.50 €** | 10.2 % | **5.3 %** | 106.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HNU61422B | 123.90 € | **118.50 €** | 10.2 % | **5.4 %** | 114.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vodotesné puzdro Puluz (45 m) pre iPhone: na podvodn... | 64.90 € | **59.50 €** | 15.0 % | **5.4 %** | 59.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Recenzia zariadenia Uni-T RCD UT582+ | 104.90 € | **99.50 €** | 15.1 % | **9.2 %** | 99.90 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 28.90 € | **23.50 €** | 29.4 % | **5.2 %** | 22.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa DarkFlash C280 (čierna) + 7 ventil... | 62.90 € | **57.50 €** | 15.1 % | **5.2 %** | 57.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Ultimate Graphite Black | 274.90 € | **269.50 €** | 18.2 % | **15.8 %** | 269.85 € | stávame sa najlacnejší |
| Stolové svorky pre základňu AB9 Moza Racing AS004 | 63.00 € | **57.90 €** | 14.8 % | **5.5 %** | 55.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100 (2-pack) regulácia 2... | 27.00 € | **21.90 €** | 31.2 % | **6.4 %** | 21.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 58.00 € | **52.90 €** | 16.3 % | **6.1 %** | 52.99 € | stávame sa najlacnejší |
| Otočný stojan Puluz 45 cm (biely) | 68.00 € | **62.90 €** | 14.9 % | **6.3 %** | 63.00 € | stávame sa najlacnejší |
| CANON PIXMA TS7550i White | 108.50 € | **103.50 €** | 10.4 % | **5.3 %** | 76.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RY6555WH | 106.50 € | **101.50 €** | 10.5 % | **5.3 %** | 82.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DMS-108/E) | 106.50 € | **101.50 €** | 10.3 % | **5.2 %** | 92.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal CY505EE0 | 110.50 € | **105.50 €** | 10.4 % | **5.4 %** | 97.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 56.50 € | **51.50 €** | 15.3 % | **5.1 %** | 44.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1000608 Pizza trouba DELIZIA | 105.50 € | **100.50 €** | 10.3 % | **5.1 %** | 96.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente G4 robotický vysavač | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 109.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Rtx-G4 | 118.50 € | **113.50 €** | 10.1 % | **5.5 %** | 109.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **54.00 €** | 14.9 % | **5.2 %** | 53.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0837 SOS FM/ AM, powerbanka 10... | 41.90 € | **36.90 €** | 20.2 % | **5.8 %** | 36.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO42326PC | 114.50 € | **109.50 €** | 10.2 % | **5.4 %** | 109.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.50 € | **57.50 €** | 14.9 % | **5.7 %** | 57.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 272.90 € | **267.90 €** | 9.3 % | **7.3 %** | 267.93 € | stávame sa najlacnejší |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 99.50 € | **94.50 €** | 23.9 % | **17.7 %** | 94.56 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 377.50 € | **372.50 €** | 7.8 % | **6.3 %** | 372.57 € | stávame sa najlacnejší |
| Solight dvojzásuvka IP66, vodotesná a prachotesná | 30.90 € | **25.90 €** | 54.2 % | **29.3 %** | 26.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 27.90 € | **22.90 €** | 59.0 % | **30.5 %** | 23.00 € | stávame sa najlacnejší |
| BEKO SIM3126R | 29.00 € | **24.00 €** | 40.2 % | **16.0 %** | 24.10 € | stávame sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 108.90 € | **103.90 €** | 13.3 % | **8.1 %** | 104.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 28.50 € | **23.50 €** | 32.9 % | **9.6 %** | 23.89 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 27.50 € | **22.50 €** | 39.3 % | **14.0 %** | 22.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.50 € | **25.50 €** | 37.5 % | **15.0 %** | 25.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44 s LED osvetlením, plast... | 30.50 € | **25.50 €** | 59.0 % | **32.9 %** | 25.90 € | stávame sa najlacnejší |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 31.50 € | **26.50 €** | 54.0 % | **29.6 %** | 26.90 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA310 Umývateľná mopovac... | 25.00 € | **20.00 €** | 38.3 % | **10.6 %** | 20.40 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 21.50 € | **16.50 €** | 53.1 % | **17.5 %** | 16.90 € | stávame sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 60.50 € | **55.50 €** | 37.2 % | **25.8 %** | 55.90 € | stávame sa najlacnejší |
| GODOX SB-USW80120 Softbox s dáždnikom | 66.00 € | **61.00 €** | 14.7 % | **6.0 %** | 61.50 € | stávame sa najlacnejší |
| Letecký simulátor MOZA RACING AB6 | 454.00 € | **449.00 €** | 14.9 % | **13.7 %** | 449.50 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 108.90 € | **104.00 €** | 15.0 % | **9.8 %** | 104.50 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 123.90 € | **119.00 €** | 15.1 % | **10.5 %** | 119.50 € | stávame sa najlacnejší |
| TERMOVÍZNA KAMERA THERMAL MASTER P2 USB-C Mini | 196.90 € | **192.00 €** | 15.1 % | **12.2 %** | 192.50 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 52.90 € | **48.00 €** | 24.9 % | **13.3 %** | 48.19 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 22.90 € | **18.00 €** | 54.6 % | **21.5 %** | 18.50 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 22dB | 20.90 € | **16.00 €** | 43.0 % | **9.5 %** | 16.50 € | stávame sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 54.50 € | **49.90 €** | 15.4 % | **5.6 %** | 49.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Huanuo HNDS8 double monitor mount 13-32" | 56.50 € | **51.90 €** | 15.0 % | **5.6 %** | 51.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Adapter, quick release MOZA RACING RS07 for R21/R16/... | 53.50 € | **48.90 €** | 15.3 % | **5.3 %** | 49.00 € | stávame sa najlacnejší |
| Rowenta RO3753EA | 96.50 € | **91.90 €** | 10.5 % | **5.2 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE E25 Pro | 235.50 € | **230.90 €** | 14.9 % | **12.7 %** | 231.00 € | stávame sa najlacnejší |
| Kaon MZ-102 Skylink Viaccess Orca bezkartový systém | 115.50 € | **111.00 €** | 9.3 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Coffio, pákový kávovar, nerez | 99.00 € | **94.50 €** | 10.0 % | **5.0 %** | 83.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8OD všesměrový klopový, XLR | 45.00 € | **40.50 €** | 17.4 % | **5.7 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Vakuovačka Vacu Power 500 | 90.50 € | **86.00 €** | 10.6 % | **5.1 %** | 83.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-8   8 kg (150x20... | 35.50 € | **31.00 €** | 20.4 % | **5.1 %** | 30.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal B864SA74 | 103.00 € | **98.50 €** | 10.1 % | **5.3 %** | 98.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 55.00 € | **50.50 €** | 14.9 % | **5.5 %** | 50.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 13.90 € | **9.40 €** | 56.1 % | **5.6 %** | 9.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI 072L čidlo detekce blesků | 54.00 € | **49.50 €** | 19.4 % | **9.4 %** | 49.52 € | stávame sa najlacnejší |
| TV držák Kruger & Matz KM1304-1  (32-45'' 35kg) černý | 18.50 € | **14.00 €** | 45.6 % | **10.2 %** | 14.09 € | stávame sa najlacnejší |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 110.50 € | **106.00 €** | 24.0 % | **19.0 %** | 106.16 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.50 € | **48.00 €** | 16.0 % | **6.1 %** | 48.19 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 89.50 € | **85.00 €** | 20.6 % | **14.5 %** | 85.29 € | stávame sa najlacnejší |
| Solight LED núdzové osvetlenie, 4W, 200lm, IP65, LiF... | 35.00 € | **30.50 €** | 37.3 % | **19.7 %** | 30.90 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 240... | 26.00 € | **21.50 €** | 54.3 % | **27.6 %** | 21.90 € | stávame sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 87.00 € | **82.50 €** | 15.0 % | **9.1 %** | 82.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 5m, 3 zásuvky IP44,... | 21.00 € | **16.50 €** | 36.3 % | **7.1 %** | 16.90 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Jamil, 48W... | 20.50 € | **16.00 €** | 39.6 % | **8.9 %** | 16.50 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 25.50 € | **21.00 €** | 58.5 % | **30.5 %** | 21.50 € | stávame sa najlacnejší |
| TEFAL GC 305012 | 95.90 € | **91.50 €** | 10.2 % | **5.1 %** | 73.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO331L | 106.90 € | **102.50 €** | 10.0 % | **5.5 %** | 90.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 14.90 € | **10.50 €** | 49.7 % | **5.5 %** | 9.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AeroStar T300 | 59.90 € | **55.50 €** | 13.5 % | **5.1 %** | 54.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 49.90 € | **45.50 €** | 15.2 % | **5.0 %** | 45.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 27.90 € | **23.50 €** | 42.8 % | **20.3 %** | 23.90 € | stávame sa najlacnejší |
| Solight drevený snehuliak, 4x LED, 2x AA | 13.50 € | **9.30 €** | 55.0 % | **6.8 %** | 9.40 € | stávame sa najlacnejší |
| AMIKO Mini HD265 | 50.00 € | **45.90 €** | 14.6 % | **5.2 %** | 42.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne 12m, 3 zásuvky, ... | 26.00 € | **21.90 €** | 42.8 % | **20.3 %** | 22.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **8.40 €** | 56.6 % | **5.2 %** | 8.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **12.90 €** | 47.5 % | **11.9 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **12.90 €** | 47.5 % | **11.9 %** | 13.00 € | stávame sa najlacnejší |
| LEVENHUK New Skyline BASE 76/700 AZ1 | 171.00 € | **166.90 €** | 7.8 % | **5.2 %** | 164.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 94.00 € | **89.90 €** | 14.9 % | **9.8 %** | 90.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 70 | 183.00 € | **178.90 €** | 7.8 % | **5.4 %** | 179.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-WM8 PRO-K4 ruční, bezdrátový set | 122.90 € | **118.90 €** | 8.7 % | **5.2 %** | 82.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell „Standard Day“ pre OSMO NANO –... | 46.90 € | **42.90 €** | 15.2 % | **5.3 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lamax PartyGo1 Play | 84.50 € | **80.50 €** | 10.3 % | **5.1 %** | 62.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK WiFi AC1200 (Deco E4 2-pack) | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 63.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV4111E0 | 86.00 € | **82.00 €** | 10.1 % | **5.0 %** | 72.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SALENTE SuChef | 84.90 € | **80.90 €** | 10.5 % | **5.3 %** | 72.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Turecký kávovar HiBREW CM1179_EU | 49.50 € | **45.50 €** | 15.3 % | **6.0 %** | 39.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkční balanční podložka HMS BSX02 | 133.50 € | **129.50 €** | 8.4 % | **5.2 %** | 124.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M1000 2směrový studiový, XLR | 59.90 € | **55.90 €** | 13.1 % | **5.5 %** | 51.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-F8C lavalier-kardioidný | 40.90 € | **36.90 €** | 17.5 % | **6.0 %** | 33.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI DSO-TC3 SigGen 3-v-1 tester tranzistorov – ru... | 50.50 € | **46.50 €** | 14.7 % | **5.6 %** | 42.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 62.50 € | **58.50 €** | 12.4 % | **5.2 %** | 54.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110 regulácia 230V cez I... | 19.00 € | **15.00 €** | 33.7 % | **5.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4011 300W 12V nástěnný | 81.90 € | **77.90 €** | 10.7 % | **5.3 %** | 77.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT 420 Android TV box | 81.50 € | **77.50 €** | 10.6 % | **5.2 %** | 77.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multimeter Uni-T UT256A | 46.90 € | **42.90 €** | 15.3 % | **5.5 %** | 42.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3404B 300W 12V | 81.90 € | **77.90 €** | 10.7 % | **5.3 %** | 77.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IB5100E0 | 93.90 € | **89.90 €** | 10.0 % | **5.4 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny merací prístroj Uni-T UT220 | 47.90 € | **43.90 €** | 15.0 % | **5.4 %** | 43.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny kliešťový merač Habotest HT208D | 47.50 € | **43.50 €** | 15.1 % | **5.4 %** | 43.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 88.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 14.00 € | **10.00 €** | 48.2 % | **5.9 %** | 10.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 75.90 € | **71.90 €** | 23.7 % | **17.2 %** | 71.92 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 95.90 € | **91.90 €** | 14.3 % | **9.5 %** | 91.96 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 70.50 € | **66.50 €** | 24.1 % | **17.0 %** | 66.59 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.90 € | **69.90 €** | 14.9 % | **8.7 %** | 70.00 € | stávame sa najlacnejší |
| Solight vstavaná podlahová zásuvka, IP55, okrúhle vi... | 22.90 € | **18.90 €** | 54.6 % | **27.6 %** | 19.00 € | stávame sa najlacnejší |
| Photo Studio PULUZ 80 cm (PU5083EU) | 92.90 € | **88.90 €** | 15.0 % | **10.0 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.90 € | **88.90 €** | 10.1 % | **5.4 %** | 89.00 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **25.90 €** | 50.2 % | **30.1 %** | 26.00 € | stávame sa najlacnejší |
| Bezdrôtový konferenčný reproduktor EMEET OfficeCore ... | 110.90 € | **106.90 €** | 15.1 % | **10.9 %** | 107.00 € | stávame sa najlacnejší |
| Solight digitálne hodiny s bluetooth synchronizáciou | 14.90 € | **10.90 €** | 51.8 % | **11.0 %** | 11.00 € | stávame sa najlacnejší |
| Ariete ART 4631 | 138.50 € | **134.50 €** | 10.2 % | **7.1 %** | 134.67 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 81.50 € | **77.50 €** | 24.2 % | **18.1 %** | 77.79 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 400... | 24.50 € | **20.50 €** | 38.8 % | **16.1 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz s diaľkový ovlá... | 27.50 € | **23.50 €** | 34.6 % | **15.0 %** | 23.90 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 89.50 € | **85.50 €** | 14.8 % | **9.7 %** | 85.90 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 131.50 € | **127.50 €** | 15.1 % | **11.6 %** | 127.90 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 143.50 € | **139.50 €** | 14.9 % | **11.7 %** | 139.90 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA520 Umývateľný HEPA fi... | 24.00 € | **20.00 €** | 32.7 % | **10.6 %** | 20.40 € | stávame sa najlacnejší |
| Kávovar na kapsule HiBREW H2B 5 v 1 (sivý) | 104.50 € | **100.50 €** | 15.1 % | **10.7 %** | 100.90 € | stávame sa najlacnejší |
| Solight bezdrôtová nabíjačka, Qi2, MagSafe kompatibilná | 22.50 € | **18.50 €** | 53.8 % | **26.5 %** | 18.90 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, či... | 35.50 € | **31.50 €** | 19.8 % | **6.3 %** | 31.90 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **44.50 €** | 15.0 % | **5.5 %** | 44.90 € | stávame sa najlacnejší |
| Braun IS5247.VI | 189.00 € | **185.00 €** | 10.0 % | **7.7 %** | 185.45 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 109.00 € | **105.00 €** | 13.3 % | **9.1 %** | 105.49 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 71.00 € | **67.00 €** | 14.6 % | **8.1 %** | 67.50 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 64.00 € | **60.00 €** | 24.7 % | **16.9 %** | 60.50 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 2 x 1.5mm2, gumová H05RR-F... | 16.00 € | **12.00 €** | 48.0 % | **11.0 %** | 12.50 € | stávame sa najlacnejší |
| DOMO DO353VD | 84.90 € | **81.00 €** | 10.2 % | **5.1 %** | 76.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO716BL | 84.90 € | **81.00 €** | 10.1 % | **5.1 %** | 76.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept OPK5160bc | 181.90 € | **178.00 €** | 10.1 % | **7.8 %** | 178.40 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.90 € | **83.00 €** | 15.0 % | **9.8 %** | 83.50 € | stávame sa najlacnejší |
| Ottocast CA400-S 4-in-1 Carplay/Android adapter (black) | 72.90 € | **69.00 €** | 15.2 % | **9.1 %** | 69.50 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Sony | 127.90 € | **124.00 €** | 15.1 % | **11.6 %** | 124.50 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.90 € | **38.00 €** | 17.8 % | **6.9 %** | 38.09 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 16.90 € | **13.00 €** | 46.0 % | **12.3 %** | 13.50 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 28.50 € | **24.90 €** | 20.9 % | **5.6 %** | 19.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mobilný ovládač GameSir X5s (čierny) | 45.50 € | **41.90 €** | 14.5 % | **5.5 %** | 38.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210C Mini digitálny klešťový multimeter | 40.50 € | **36.90 €** | 15.5 % | **5.2 %** | 36.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT331+ | 42.50 € | **38.90 €** | 15.7 % | **5.9 %** | 38.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 20.50 € | **16.90 €** | 33.9 % | **10.4 %** | 16.92 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **21.90 €** | 37.8 % | **18.3 %** | 22.00 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-DM200 všesměrový, lightning, iOS | 16.50 € | **12.90 €** | 34.4 % | **5.1 %** | 4.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110M regulácia 230V cez ... | 19.50 € | **15.90 €** | 31.7 % | **7.4 %** | 15.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 14.50 € | **10.90 €** | 42.4 % | **7.0 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K6 | 110.50 € | **106.90 €** | 8.6 % | **5.1 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV6840E0 | 76.50 € | **72.90 €** | 10.7 % | **5.5 %** | 69.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Continenta Dřevěný chlebník | 76.50 € | **72.90 €** | 10.6 % | **5.4 %** | 70.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo pro měření ovlhčení listů GARNI 098W | 73.50 € | **69.90 €** | 13.8 % | **8.2 %** | 69.96 € | stávame sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 91.50 € | **87.90 €** | 14.9 % | **10.4 %** | 88.00 € | stávame sa najlacnejší |
| Doplnok xTool Smart World pre mBot2 | 82.50 € | **78.90 €** | 15.0 % | **10.0 %** | 79.00 € | stávame sa najlacnejší |
| EcoFlow DELTA 3 Max nabíjecí stanice 1ECO2040 | 1365.00 € | **1361.50 €** | 5.3 % | **5.0 %** | 1099.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA TE-3000 Skylink Irdeto systém na kartu | 75.00 € | **71.50 €** | 10.2 % | **5.1 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune Flex 2 bílá | 78.00 € | **74.50 €** | 10.1 % | **5.2 %** | 62.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Memory card Samsung EVO Plus microSD 2021 64GB (MB-M... | 47.00 € | **43.50 €** | 14.4 % | **5.9 %** | 35.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stolný statív Puluz PU3070GT | 44.00 € | **40.50 €** | 15.1 % | **5.9 %** | 40.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARNI GAR 191 USB datalogger pro měření teploty a re... | 83.00 € | **79.50 €** | 20.8 % | **15.7 %** | 79.56 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 29.50 € | **26.00 €** | 21.9 % | **7.5 %** | 26.29 € | stávame sa najlacnejší |
| GUZZANTI GZ 101 | 161.00 € | **157.50 €** | 10.0 % | **7.6 %** | 157.88 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA411 Vodotesná podložka... | 20.50 € | **17.00 €** | 33.9 % | **11.0 %** | 17.40 € | stávame sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 240.00 € | **236.50 €** | 15.0 % | **13.3 %** | 236.90 € | stávame sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.50 €** | 14.9 % | **8.7 %** | 61.90 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900WD (biela) | 50.00 € | **46.50 €** | 14.6 % | **6.6 %** | 46.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 3 zásuvky IP44, 3 x 2... | 24.00 € | **20.50 €** | 36.3 % | **16.4 %** | 20.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 21.00 € | **17.50 €** | 43.6 % | **19.7 %** | 17.90 € | stávame sa najlacnejší |
| CP-USC-TA24L2-0360 2.4Mpix venkovní kamera 4v1 s IR | 50.50 € | **47.00 €** | 24.4 % | **15.8 %** | 47.43 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.00 €** | 56.5 % | **23.3 %** | 13.50 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **29.00 €** | 59.9 % | **42.7 %** | 29.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 60.50 € | **57.00 €** | 15.0 % | **8.4 %** | 57.50 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **19.00 €** | 55.2 % | **31.0 %** | 19.50 € | stávame sa najlacnejší |
| ALI BT sluchátka AH02,FM,SD,bílá  AH02WT | 15.99 € | **12.50 €** | 35.1 % | **5.6 %** | 12.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 500 RB-4001 300W 12V | 77.90 € | **74.50 €** | 9.8 % | **5.0 %** | 73.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Grip White | 78.90 € | **75.50 €** | 10.2 % | **5.4 %** | 74.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 98.90 € | **95.50 €** | 21631.5 % | **20884.4 %** | 95.57 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (biela) | 85.90 € | **82.50 €** | 15.1 % | **10.5 %** | 82.90 € | stávame sa najlacnejší |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 11.00 € | **7.60 €** | 54.5 % | **6.7 %** | 7.70 € | stávame sa najlacnejší |
| Súprava príslušenstva pre vysávač MOVA P50 PU, P50 U | 42.90 € | **39.50 €** | 15.5 % | **6.3 %** | 33.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skříň kempingová Cattara 13480 MODICA | 62.90 € | **59.50 €** | 11.0 % | **5.0 %** | 56.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 40.90 € | **37.50 €** | 15.4 % | **5.8 %** | 37.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM57 ruční všesměrový, TRS | 40.90 € | **37.50 €** | 18.5 % | **8.7 %** | 37.67 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 28.90 € | **25.50 €** | 24.7 % | **10.0 %** | 25.69 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 16.90 € | **13.50 €** | 38.2 % | **10.4 %** | 13.90 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 24.90 € | **21.50 €** | 59.2 % | **37.4 %** | 21.90 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 51.90 € | **48.50 €** | 14.9 % | **7.4 %** | 48.90 € | stávame sa najlacnejší |
| Solight prídavná zásuvka pre GSM zásuvku | 38.90 € | **35.50 €** | 46.1 % | **33.3 %** | 35.90 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - black | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 200.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač Niceboy ION Charles i9 Plus - white | 333.00 € | **329.90 €** | 6.1 % | **5.1 %** | 272.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX AD600B TTL Wistro s uchytením Bowens | 676.00 € | **672.90 €** | 15.0 % | **14.4 %** | 673.00 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXD bezdrátový, iOS, dosah 60m | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Prijímač BOYA BY-WM4RXU bezdrátový, USB-C, Android, ... | 49.00 € | **45.90 €** | 17.2 % | **9.8 %** | 45.98 € | stávame sa najlacnejší |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 48.00 € | **44.90 €** | 14.5 % | **7.1 %** | 45.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 39.00 € | **35.90 €** | 14.9 % | **5.8 %** | 36.00 € | stávame sa najlacnejší |
| Slúchadlá QCY HT18 LITE Titanium TWS | 47.00 € | **43.90 €** | 15.1 % | **7.5 %** | 44.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **9.80 €** | 47.3 % | **11.9 %** | 9.90 € | stávame sa najlacnejší |
| Solight cestovný adaptér s USB do Spojených štátov, ... | 12.90 € | **9.80 €** | 61.4 % | **22.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight powerbanka, 5000 mAh, kompatibilná s MagSafe | 17.00 € | **13.90 €** | 52.6 % | **24.7 %** | 14.00 € | stávame sa najlacnejší |
| Inteligentná zásuvka IMOU CE2P, sada 4 ks | 36.90 € | **33.90 €** | 14.9 % | **5.6 %** | 9.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 černá | 63.90 € | **60.90 €** | 10.6 % | **5.4 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 modrá | 63.90 € | **60.90 €** | 10.6 % | **5.4 %** | 41.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné stropné svietidlo CW Yeelight Meteor C300. | 33.90 € | **30.90 €** | 15.4 % | **5.2 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit AIR X1 Carplay/Android ... | 36.50 € | **33.50 €** | 15.3 % | **5.9 %** | 22.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2904/04 | 69.50 € | **66.50 €** | 10.2 % | **5.5 %** | 59.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10 lavalier-klopový | 39.90 € | **36.90 €** | 14.4 % | **5.8 %** | 30.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Indukční vařič, G1013700, jedn | 70.90 € | **67.90 €** | 10.2 % | **5.6 %** | 63.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Garett ROSE Gold Mesh Steel | 67.90 € | **64.90 €** | 10.1 % | **5.2 %** | 60.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal BL16GE30 | 58.90 € | **55.90 €** | 10.7 % | **5.1 %** | 51.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Profi XL + náhrada Static Plus | 62.90 € | **59.90 €** | 10.7 % | **5.4 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.50 € | **63.50 €** | 10.6 % | **5.6 %** | 60.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PXN-F16 Flight Joystick for PC | 34.50 € | **31.50 €** | 15.3 % | **5.3 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi V89 (nerezová oceľ, zlatá... | 33.50 € | **30.50 €** | 15.5 % | **5.2 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štúdiové slúchadlá Maono MH700 (čierne) | 34.90 € | **31.90 €** | 15.2 % | **5.3 %** | 31.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 35.50 € | **32.50 €** | 15.6 % | **5.9 %** | 32.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 34.50 € | **31.50 €** | 15.1 % | **5.1 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, sivé, 20W, 1... | 14.50 € | **11.50 €** | 37.7 % | **9.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 382.90 € | **379.90 €** | 8.0 % | **7.1 %** | 379.95 € | stávame sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 36.00 € | **33.00 €** | 19.6 % | **9.6 %** | 33.08 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Olympus | 127.90 € | **124.90 €** | 15.1 % | **12.4 %** | 125.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C predlžovací prívod - kocka, 2m,... | 13.90 € | **10.90 €** | 49.7 % | **17.4 %** | 11.00 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.90 €** | 15.0 % | **10.0 %** | 66.00 € | stávame sa najlacnejší |
| Mini stepper REBEL ACTIVE RBA-3229 | 43.50 € | **40.50 €** | 14.1 % | **6.2 %** | 40.79 € | stávame sa najlacnejší |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 16.50 € | **13.50 €** | 54.4 % | **26.3 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 12... | 23.50 € | **20.50 €** | 38.1 % | **20.5 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 38.50 € | **35.50 €** | 55.1 % | **43.0 %** | 35.90 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 35.50 € | **32.50 €** | 15.3 % | **5.6 %** | 32.90 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **21.50 €** | 44.9 % | **27.1 %** | 21.90 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, plast, 2 zásuvky, hran... | 14.50 € | **11.50 €** | 58.4 % | **25.7 %** | 11.90 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **14.50 €** | 55.7 % | **29.0 %** | 14.90 € | stávame sa najlacnejší |
| Double monitor mount 13-30" Huanuo HNDS6 | 49.50 € | **46.50 €** | 15.2 % | **8.2 %** | 46.90 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **64.50 €** | 15.2 % | **10.1 %** | 64.90 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7S (žltý) | 161.50 € | **158.50 €** | 15.1 % | **13.0 %** | 158.90 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro All Day | 44.50 € | **41.50 €** | 14.5 % | **6.8 %** | 41.90 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Everyday Kit | 44.50 € | **41.50 €** | 14.5 % | **6.8 %** | 41.90 € | stávame sa najlacnejší |
| Stativová hlavica Dolly pre stativy Neewer SW-600, v... | 39.50 € | **36.50 €** | 15.3 % | **6.5 %** | 36.90 € | stávame sa najlacnejší |
| Herný pedál PXN Vector X Clutch | 105.50 € | **102.50 €** | 15.0 % | **11.7 %** | 102.90 € | stávame sa najlacnejší |
| Ovládacia páka lietadla MOZA RACING MHG | 111.50 € | **108.50 €** | 14.9 % | **11.8 %** | 108.90 € | stávame sa najlacnejší |
| Maono BA92 Boom Arm Black | 50.50 € | **47.50 €** | 15.2 % | **8.4 %** | 47.90 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **223.50 €** | 15.0 % | **13.5 %** | 223.90 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 26.00 € | **23.00 €** | 53.8 % | **36.1 %** | 23.50 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **126.00 €** | 14.9 % | **12.2 %** | 126.50 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 53.00 € | **50.00 €** | 14.9 % | **8.4 %** | 50.50 € | stávame sa najlacnejší |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 72.00 € | **69.00 €** | 15.0 % | **10.3 %** | 69.50 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 9.40 € | **6.50 €** | 54.1 % | **6.5 %** | 6.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 12.50 € | **9.60 €** | 49.0 % | **14.4 %** | 9.70 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 14.90 € | **12.00 €** | 35.0 % | **8.8 %** | 12.29 € | stávame sa najlacnejší |
| DOMO DO9046C | 58.90 € | **56.00 €** | 10.5 % | **5.1 %** | 56.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 24.90 € | **22.00 €** | 25.1 % | **10.5 %** | 22.39 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **14.00 €** | 39.1 % | **15.2 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **8.80 €** | 49.6 % | **14.5 %** | 8.90 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k metostaniciam radu TE9xWiFi | 12.50 € | **9.80 €** | 47.9 % | **16.0 %** | 9.90 € | stávame sa najlacnejší |
| Strong LEAP-AIR Google TV HDMI TV stick | 61.50 € | **58.90 €** | 10.3 % | **5.6 %** | 41.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 730BT Beige | 58.50 € | **55.90 €** | 10.5 % | **5.6 %** | 46.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 730BT Blue | 58.50 € | **55.90 €** | 10.5 % | **5.6 %** | 46.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Vědro Profi Compact + mop P | 52.50 € | **49.90 €** | 11.0 % | **5.5 %** | 43.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3751i White | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 39.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový ovládač 4-kan. k pohonu brán IN SL-600, 100... | 28.50 € | **25.90 €** | 16.2 % | **5.6 %** | 19.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Flex 2 modrá | 59.50 € | **56.90 €** | 10.3 % | **5.5 %** | 50.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Aura 5 ANC | 53.50 € | **50.90 €** | 10.9 % | **5.5 %** | 46.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Steba Výrobník Muffinů CM 3 | 60.50 € | **57.90 €** | 10.2 % | **5.5 %** | 55.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1019800 Napěňovač Choco-lat | 58.50 € | **55.90 €** | 10.1 % | **5.2 %** | 53.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1013400 | 56.50 € | **53.90 €** | 10.4 % | **5.4 %** | 51.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Carlinkit CP2A | 28.50 € | **25.90 €** | 15.7 % | **5.1 %** | 23.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maono PD100 Microphone Black | 30.50 € | **27.90 €** | 15.1 % | **5.3 %** | 26.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – strieborné + hnedý ... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne s hnedým kož... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 v zlatej farbe s biel... | 32.50 € | **29.90 €** | 14.7 % | **5.5 %** | 28.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1004500 | 51.50 € | **48.90 €** | 10.7 % | **5.1 %** | 48.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 33.50 € | **30.90 €** | 14.5 % | **5.6 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Joystick PXN-2113 PRO Ovládanie letu PC | 31.50 € | **28.90 €** | 14.6 % | **5.1 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 17A, 200W, IP20 | 24.50 € | **21.90 €** | 55.4 % | **38.9 %** | 22.00 € | stávame sa najlacnejší |
| Solight LED kovový svietnik, 5x LED, čierny, 40cm | 26.50 € | **23.90 €** | 54.7 % | **39.5 %** | 24.00 € | stávame sa najlacnejší |
| EDIFIER ES20 reproduktor béžový | 51.50 € | **48.90 €** | 10.6 % | **5.0 %** | 49.00 € | stávame sa najlacnejší |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 42.50 € | **39.90 €** | 15.1 % | **8.1 %** | 40.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100(1-pack) regulácia 23... | 13.50 € | **10.90 €** | 31.3 % | **6.0 %** | 8.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 49dB | 17.50 € | **14.90 €** | 42.8 % | **21.6 %** | 15.00 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR černé | 197.50 € | **194.90 €** | 17.5 % | **16.0 %** | 194.99 € | stávame sa najlacnejší |
| TechniSat DIGITRADIO 372 CD IR stříbrné | 197.50 € | **194.90 €** | 17.5 % | **16.0 %** | 194.99 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.50 € | **86.90 €** | 14.8 % | **11.4 %** | 87.00 € | stávame sa najlacnejší |
| Lamp LED Neewer TL120C RGB | 205.50 € | **202.90 €** | 15.0 % | **13.5 %** | 203.00 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **105.90 €** | 14.9 % | **12.2 %** | 106.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WM4 Pro-K4 | 136.00 € | **133.50 €** | 7.2 % | **5.2 %** | 89.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Nedis IRON2000 napařovací | 37.00 € | **34.50 €** | 13.2 % | **5.6 %** | 2.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Balanční míč HMS Premium BSX Pro | 103.00 € | **100.50 €** | 8.1 % | **5.5 %** | 85.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR TWIN - Black | 59.00 € | **56.50 €** | 10.0 % | **5.4 %** | 42.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PVM50 směrový studiový, TRS | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-M2D všesměrový klopový, Lightning | 24.50 € | **22.00 €** | 17.3 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Přípravek do chemických toalet STACHEMA QUALICAR NEW 5L | 50.00 € | **47.50 €** | 11.1 % | **5.6 %** | 44.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **12.50 €** | 28.9 % | **7.4 %** | 11.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (zlaté) | 31.00 € | **28.50 €** | 14.6 % | **5.4 %** | 28.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 30.50 € | **28.00 €** | 14.6 % | **5.2 %** | 28.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa DarkFlash B275 (čierna) | 31.00 € | **28.50 €** | 14.4 % | **5.1 %** | 28.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 48.50 € | **46.00 €** | 22.8 % | **16.5 %** | 46.16 € | stávame sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 63.00 € | **60.50 €** | 24.0 % | **19.1 %** | 60.69 € | stávame sa najlacnejší |
| Zdroj Alcad AL-105 (2xvýstup, 12V/100mA) napájecí | 16.50 € | **14.00 €** | 24.8 % | **5.9 %** | 14.19 € | stávame sa najlacnejší |
| Soundbar Kruger&Matz KM0576 Universe 2.1 | 62.00 € | **59.50 €** | 15.1 % | **10.4 %** | 59.79 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 34.00 € | **31.50 €** | 47.3 % | **36.4 %** | 31.90 € | stávame sa najlacnejší |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 36.00 € | **33.50 €** | 53.5 % | **42.8 %** | 33.90 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **19.50 €** | 53.7 % | **36.2 %** | 19.90 € | stávame sa najlacnejší |
| Ivo DVB-26 zesilovač 26dB (5-12V) | 27.00 € | **24.50 €** | 34.3 % | **21.9 %** | 24.90 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 48.50 € | **46.00 €** | 22.3 % | **16.0 %** | 46.49 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 3CCT, 36W, 2520... | 25.50 € | **23.00 €** | 37.8 % | **24.2 %** | 23.50 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 4400lm, 400... | 23.50 € | **21.00 €** | 39.1 % | **24.3 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED drevený betlehem podsvietený, 26x17cm, 6... | 22.50 € | **20.00 €** | 53.3 % | **36.3 %** | 20.50 € | stávame sa najlacnejší |
| Solight LED vianočné mestečko s kostolom, 30x19cm, 2... | 13.50 € | **11.00 €** | 56.1 % | **27.2 %** | 11.50 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **11.00 €** | 55.2 % | **26.5 %** | 11.50 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.50 € | **30.00 €** | 15.1 % | **6.2 %** | 30.50 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.00 €** | 14.7 % | **10.0 %** | 59.50 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 52.50 € | **50.00 €** | 14.6 % | **9.2 %** | 50.50 € | stávame sa najlacnejší |
| Magnetické filtre Freewell ND NEO 2 „Standard Day“ –... | 28.50 € | **26.00 €** | 15.6 % | **5.5 %** | 26.50 € | stávame sa najlacnejší |
| MOZA RACING RS061 predĺženie stĺpika riadenia | 120.50 € | **118.00 €** | 15.1 % | **12.8 %** | 118.50 € | stávame sa najlacnejší |
| G3Ferrari G10152 horkovzdušná trouba | 148.50 € | **146.00 €** | 10.3 % | **8.4 %** | 146.50 € | stávame sa najlacnejší |
| Electrolux E200SM | 19.99 € | **17.50 €** | 35.1 % | **18.3 %** | 17.76 € | stávame sa najlacnejší |
| Rowenta RO6164EA | 144.90 € | **142.50 €** | 10.2 % | **8.4 %** | 142.80 € | stávame sa najlacnejší |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 72.90 € | **70.50 €** | 42.1 % | **37.4 %** | 70.90 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-M17R směrový, TRS, závit 1/4” | 12.90 € | **10.50 €** | 29.3 % | **5.3 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Car Flame do auta čierny 100ml,... | 15.90 € | **13.50 €** | 31.1 % | **11.3 %** | 13.71 € | stávame sa najlacnejší |
| HP DeskJet 2920 (89F97B) | 50.90 € | **48.50 €** | 10.3 % | **5.1 %** | 40.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo HDO, aktivní venkovní anténa | 54.90 € | **52.50 €** | 10.4 % | **5.6 %** | 45.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO 717 MF | 48.90 € | **46.50 €** | 10.5 % | **5.1 %** | 43.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer VR300 VDSL Router | 53.90 € | **51.50 €** | 10.4 % | **5.4 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2877/05 | 49.90 € | **47.50 €** | 10.5 % | **5.2 %** | 46.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (biele) | 25.90 € | **23.50 €** | 15.9 % | **5.1 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 28.90 € | **26.50 €** | 15.1 % | **5.6 %** | 26.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 62.90 € | **60.50 €** | 10.4 % | **6.2 %** | 60.55 € | stávame sa najlacnejší |
| Bezdrátové čidlo Technoline TX108DTH pro WS9252 | 24.90 € | **22.50 €** | 25.1 % | **13.1 %** | 22.65 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 20.90 € | **18.50 €** | 24.9 % | **10.6 %** | 18.89 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 17.90 € | **15.50 €** | 49.7 % | **29.6 %** | 15.90 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Wh... | 33.90 € | **31.50 €** | 39.0 % | **29.1 %** | 31.90 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 33.90 € | **31.50 €** | 39.0 % | **29.1 %** | 31.90 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **58.50 €** | 15.3 % | **10.8 %** | 58.90 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.90 € | **41.50 €** | 15.4 % | **9.1 %** | 41.90 € | stávame sa najlacnejší |
| Držiak mikrofónu Maono BA37 | 29.90 € | **27.50 €** | 15.3 % | **6.1 %** | 27.90 € | stávame sa najlacnejší |
| Solight účastnícka zásuvka koncová so SAT, útlm: 3dB | 7.10 € | **4.80 €** | 55.6 % | **5.2 %** | 4.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 11.50 € | **9.30 €** | 45.2 % | **17.4 %** | 9.40 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT802 (čierne) | 28.00 € | **25.90 €** | 14.2 % | **5.7 %** | 22.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hlavná kefa pre vysávač MOVA Z50 Ultra | 27.00 € | **24.90 €** | 14.8 % | **5.9 %** | 23.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **25.90 €** | 14.5 % | **5.9 %** | 25.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 26.00 € | **23.90 €** | 14.6 % | **5.4 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 – čierne | 30.00 € | **27.90 €** | 14.4 % | **6.4 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI C28 Gold | 30.00 € | **27.90 €** | 14.4 % | **6.4 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 26.00 € | **23.90 €** | 15.1 % | **5.8 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 27011-56 | 47.00 € | **44.90 €** | 10.1 % | **5.2 %** | 44.99 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 500 LED, 50m, prívod 5m,... | 22.00 € | **19.90 €** | 53.7 % | **39.0 %** | 20.00 € | stávame sa najlacnejší |
| Reproduktory Edifier P12 2.0 (hnedé) | 61.00 € | **58.90 €** | 15.0 % | **11.0 %** | 59.00 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X Pro Standard (čierny) | 55.00 € | **52.90 €** | 14.7 % | **10.3 %** | 53.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKM | 60.00 € | **57.90 €** | 10.0 % | **6.2 %** | 58.00 € | stávame sa najlacnejší |
| Beko Mezikus PCSKW | 60.00 € | **57.90 €** | 10.0 % | **6.2 %** | 58.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 18.00 € | **15.90 €** | 36.8 % | **20.8 %** | 16.00 € | stávame sa najlacnejší |
| Solight axiálny ventilátor s časovačom | 18.00 € | **15.90 €** | 50.1 % | **32.6 %** | 16.00 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **8.80 €** | 45.5 % | **17.5 %** | 8.90 € | stávame sa najlacnejší |
| Sonoff S60ZBTPF Inteligentná zásuvka ZigBee (2ks) | 26.50 € | **24.50 €** | 14.6 % | **6.0 %** | 13.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Pack 6 MAXTRApro PO 2024 | 39.50 € | **37.50 €** | 11.1 % | **5.5 %** | 26.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DMR7 směrový, pro fotoaparáty, TRS | 73.50 € | **71.50 €** | 8.5 % | **5.5 %** | 61.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LIMO BAR ECO - White | 39.90 € | **37.90 €** | 10.9 % | **5.3 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.90 €** | 10.3 % | **5.6 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-A7H | 20.50 € | **18.50 €** | 19.4 % | **7.7 %** | 14.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy PILOT Q2 WiFi | 46.50 € | **44.50 €** | 10.5 % | **5.7 %** | 40.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2957 | 41.90 € | **39.90 €** | 10.6 % | **5.3 %** | 35.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAT3509GY Bezdrátová sluchátka | 46.90 € | **44.90 €** | 10.2 % | **5.5 %** | 41.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak do auta s indukčnou nabíjačkou Baseus MagPro ... | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 21.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-PA4010 Powerline Starter Kit | 45.50 € | **43.50 €** | 10.1 % | **5.2 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE500X AX1500 WiFi 6 Extender | 41.90 € | **39.90 €** | 10.3 % | **5.1 %** | 36.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **32.90 €** | 11.8 % | **5.4 %** | 29.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO5 Blue | 48.50 € | **46.50 €** | 10.3 % | **5.7 %** | 44.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari Napěňovač mléka, G1017301, 30 | 46.90 € | **44.90 €** | 10.5 % | **5.7 %** | 42.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1009800 | 42.90 € | **40.90 €** | 10.2 % | **5.1 %** | 38.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 18.50 € | **16.50 €** | 20.3 % | **7.3 %** | 14.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar SB-820BT Soundbar | 35.50 € | **33.50 €** | 11.5 % | **5.2 %** | 31.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-1.5 litinové neoprenové ... | 12.50 € | **10.50 €** | 29.5 % | **8.7 %** | 9.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Vědro 55076 PROFI s ná SOE55076 | 51.50 € | **49.50 €** | 10.2 % | **5.9 %** | 48.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Beige | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Blue | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT Lavender | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530BT White | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 37.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 24.50 € | **22.50 €** | 15.5 % | **6.1 %** | 22.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Resto 93511 Pánev 28 cm | 34.50 € | **32.50 €** | 11.5 % | **5.0 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 25.50 € | **23.50 €** | 14.3 % | **5.3 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový merač Uni-T UT202R | 25.50 € | **23.50 €** | 15.5 % | **6.4 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 25.50 € | **23.50 €** | 15.0 % | **6.0 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 25.50 € | **23.50 €** | 15.0 % | **6.0 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 22.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-2C-86W (2-kanálový) inteligentný dotykov... | 25.50 € | **23.50 €** | 15.8 % | **6.7 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff ZBM5-3C-86W (3-kanálový) inteligentný dotykov... | 25.00 € | **23.00 €** | 14.5 % | **5.3 %** | 23.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 36.00 € | **34.00 €** | 18.0 % | **11.5 %** | 34.09 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 23.50 € | **21.50 €** | 23.0 % | **12.6 %** | 21.59 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 38W, 4180l... | 23.90 € | **21.90 €** | 38.4 % | **26.8 %** | 22.00 € | stávame sa najlacnejší |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 13.90 € | **11.90 €** | 44.9 % | **24.0 %** | 12.00 € | stávame sa najlacnejší |
| Solight lokátor pre batožinu, Find My kompatibilný | 23.90 € | **21.90 €** | 41.7 % | **29.9 %** | 22.00 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 11.50 € | **9.50 €** | 57.1 % | **29.8 %** | 9.60 € | stávame sa najlacnejší |
| AMICA DI 6401 PSB | 180.90 € | **178.90 €** | 10.2 % | **8.9 %** | 179.00 € | stávame sa najlacnejší |
| Čistička vzduchu OPUS Aeroprime X auto, do 35 m2, HE... | 167.50 € | **165.50 €** | 8.2 % | **6.9 %** | 165.64 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 29.50 € | **27.50 €** | 21.9 % | **13.7 %** | 27.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 33.50 € | **31.50 €** | 17.4 % | **10.4 %** | 31.69 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.50 € | **31.50 €** | 15.4 % | **8.5 %** | 31.69 € | stávame sa najlacnejší |
| Rowenta RH1239WO | 163.00 € | **161.00 €** | 10.0 % | **8.7 %** | 161.30 € | stávame sa najlacnejší |
| Mikrofón BOYA BY-BM2021 kondenzátorový směrový pro f... | 20.50 € | **18.50 €** | 17.8 % | **6.3 %** | 18.83 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-105-BK černá barva | 342.50 € | **340.50 €** | 6.9 % | **6.3 %** | 340.89 € | stávame sa najlacnejší |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 15.50 € | **13.50 €** | 53.9 % | **34.0 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 15.50 € | **13.50 €** | 55.0 % | **35.0 %** | 13.90 € | stávame sa najlacnejší |
| Russell Hobbs 26810-56/RH | 46.50 € | **44.50 €** | 10.2 % | **5.5 %** | 44.90 € | stávame sa najlacnejší |
| Colmi V69 smartwatch (black) | 40.50 € | **38.50 €** | 14.9 % | **9.3 %** | 38.90 € | stávame sa najlacnejší |
| Waterproof diving case PULUZ for Insta360 X4 | 62.50 € | **60.50 €** | 15.0 % | **11.3 %** | 60.90 € | stávame sa najlacnejší |
| Solight digitální hodiny s bluetooth synchronizáciou | 14.50 € | **12.50 €** | 49.2 % | **28.6 %** | 12.90 € | stávame sa najlacnejší |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 37.50 € | **35.50 €** | 15.0 % | **8.9 %** | 35.90 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 20.50 € | **18.50 €** | 43.8 % | **29.8 %** | 18.90 € | stávame sa najlacnejší |
| Solight budík s Qi bezdrôtovú nabíjačkou | 13.00 € | **11.00 €** | 47.8 % | **25.1 %** | 11.50 € | stávame sa najlacnejší |
| Solight wifi Smart LED svetelný pás, RGB, 5m, sada s... | 29.00 € | **27.00 €** | 47.5 % | **37.4 %** | 27.50 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 14.00 € | **12.00 €** | 52.8 % | **31.0 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED vianočný svietnik s hviezdami, 30cm, 5x ... | 18.00 € | **16.00 €** | 53.9 % | **36.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 15.00 € | **13.00 €** | 54.0 % | **33.4 %** | 13.50 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze GTR 3 Pro (striebro) | 29.00 € | **27.00 €** | 14.8 % | **6.9 %** | 27.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 28.00 € | **26.00 €** | 14.7 % | **6.5 %** | 26.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 27.00 € | **25.00 €** | 35.3 % | **25.3 %** | 25.50 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 172.90 € | **171.00 €** | 10.2 % | **9.0 %** | 171.30 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Canon | 127.90 € | **126.00 €** | 15.1 % | **13.4 %** | 126.50 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI Black | 70.90 € | **69.00 €** | 15.3 % | **12.2 %** | 69.50 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 70.90 € | **69.00 €** | 15.3 % | **12.2 %** | 69.50 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **76.00 €** | 15.0 % | **12.2 %** | 76.50 € | stávame sa najlacnejší |
| Solight WIFI zásuvka s meraním spotreby | 12.90 € | **11.00 €** | 46.9 % | **25.3 %** | 11.50 € | stávame sa najlacnejší |
| TP-LINK RE305 AC1200 WiFi Range Extender | 37.90 € | **36.00 €** | 10.8 % | **5.2 %** | 31.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruhové osvetlenie Puluz 20 cm na vlogovanie s držia... | 21.90 € | **20.00 €** | 15.5 % | **5.4 %** | 19.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 21.90 € | **20.00 €** | 24.8 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 21.90 € | **20.00 €** | 24.8 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 47.90 € | **46.00 €** | 15.3 % | **10.7 %** | 46.50 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.90 € | **42.00 €** | 15.0 % | **10.0 %** | 42.50 € | stávame sa najlacnejší |
| Stojan na mikrofón Fifine BM88 (ružový) | 42.90 € | **41.00 €** | 15.1 % | **10.0 %** | 41.50 € | stávame sa najlacnejší |
| Wireless controler GameSir T4n (white) | 25.90 € | **24.00 €** | 21.2 % | **12.3 %** | 24.50 € | stávame sa najlacnejší |
| Gens ace G-Tech 6500mAh 11.1V 60C 3S1P Lipo Battery ... | 50.90 € | **49.00 €** | 15.1 % | **10.8 %** | 49.50 € | stávame sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 570J, 3 zásuvky | 10.50 € | **8.70 €** | 60.5 % | **33.0 %** | 8.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 5m | 6.20 € | **4.50 €** | 47.0 % | **6.7 %** | 4.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY WHCH520L.CE7 modrá | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 28.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Panasonic sluchátka RZ-B110W | 36.50 € | **34.90 €** | 10.2 % | **5.4 %** | 27.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Sada nádobí SWING B 4ks | 36.50 € | **34.90 €** | 10.9 % | **6.0 %** | 28.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **39.90 €** | 10.0 % | **5.8 %** | 35.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2020E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2022E1 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED MagClick 2 s MgSf 15W FIXMCLI2-BK | 32.50 € | **30.90 €** | 11.5 % | **6.0 %** | 27.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Petoneer Fresco EZ smart pet fountain/drinker | 20.50 € | **18.90 €** | 14.3 % | **5.4 %** | 16.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM0107 bílo-růžová | 57.50 € | **55.90 €** | 8.7 % | **5.7 %** | 54.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200CT  bezdrátová sluchátka | 38.50 € | **36.90 €** | 10.4 % | **5.8 %** | 35.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Powerstation Uni FIXPOS-U-BK | 34.50 € | **32.90 €** | 10.3 % | **5.2 %** | 32.05 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal KO5S08E0 | 35.50 € | **33.90 €** | 11.2 % | **6.2 %** | 33.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT210B Mini digitálny klešťový multimeter | 23.50 € | **21.90 €** | 14.7 % | **6.9 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Centrala Bramka WiFi MSH450MA Meross | 19.50 € | **17.90 €** | 16.3 % | **6.8 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic ASA (biely) 1 kg | 18.50 € | **16.90 €** | 15.3 % | **5.4 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vlákno HP ASA Creality (čierne) | 23.50 € | **21.90 €** | 14.6 % | **6.8 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosná pumpa na pneumatiky Flextail Evo 150 (čierna) | 21.50 € | **19.90 €** | 15.7 % | **7.1 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver FFC026X | 41.50 € | **39.90 €** | 10.8 % | **6.5 %** | 40.00 € | stávame sa najlacnejší |
| Hrniec Berlingerhaus s mramorovým povrchom 28 cm Bla... | 46.50 € | **44.90 €** | 9.5 % | **5.7 %** | 45.00 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 56.50 € | **54.90 €** | 8.5 % | **5.4 %** | 55.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 27.50 € | **25.90 €** | 15.7 % | **9.0 %** | 26.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 24.50 € | **22.90 €** | 43.5 % | **34.1 %** | 23.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **43.90 €** | 15.5 % | **11.5 %** | 44.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **43.90 €** | 15.5 % | **11.5 %** | 44.00 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **6.70 €** | 55.5 % | **25.5 %** | 6.80 € | stávame sa najlacnejší |
| Diaľkový ovládač KRUGER & MATZ V-LED | 12.50 € | **10.90 €** | 24.8 % | **8.9 %** | 7.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Badmintonový set REBEL ACTIVE RBA-4102 | 12.50 € | **10.90 €** | 22.9 % | **7.2 %** | 7.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mini detektor úniku plynu Habotest HT61 | 17.50 € | **15.90 €** | 16.6 % | **6.0 %** | 15.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 12.50 € | **10.90 €** | 23.6 % | **7.8 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 17.50 € | **15.90 €** | 15.6 % | **5.0 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **15.90 €** | 15.8 % | **5.2 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **15.90 €** | 15.9 % | **5.3 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 12.50 € | **10.90 €** | 21.9 % | **6.3 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 11.50 € | **9.90 €** | 38.3 % | **19.1 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **14.90 €** | 56.9 % | **41.7 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED vianočná záves okenná, strieborná, 300x ... | 13.50 € | **11.90 €** | 55.7 % | **37.2 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia zvončeky, 100x LED, ... | 13.50 € | **11.90 €** | 55.7 % | **37.2 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 400 LED, 20m, ... | 15.50 € | **13.90 €** | 54.4 % | **38.5 %** | 14.00 € | stávame sa najlacnejší |
| Solight vianočný veniec, priemer 40cm, 15LED, 3x AA,... | 14.50 € | **12.90 €** | 54.7 % | **37.6 %** | 13.00 € | stávame sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **13.90 €** | 46.0 % | **30.9 %** | 14.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne 10m, 3 zásuvky, ... | 17.50 € | **15.90 €** | 44.3 % | **31.1 %** | 16.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV A17 Pro Max (oranžový) | 117.50 € | **115.90 €** | 15.2 % | **13.6 %** | 116.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 2,5m | 5.40 € | **3.90 €** | 48.8 % | **7.5 %** | 3.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.40 € | **3.90 €** | 48.3 % | **7.1 %** | 3.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lavazza Crema E Gusto 1000 g | 23.50 € | **22.00 €** | 12.3 % | **5.1 %** | 15.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií XTAR VC4SL 18650 | 27.00 € | **25.50 €** | 13.0 % | **6.7 %** | 19.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka NEDIS HPWD1201BK Hi-Fi televizní s 6 m kab... | 19.00 € | **17.50 €** | 16.4 % | **7.2 %** | 12.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.B | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 29.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Podlahový mop PROFI cotton plus | 30.50 € | **29.00 €** | 10.8 % | **5.3 %** | 25.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet NBP003.NBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet Portable NBP003LBL | 35.00 € | **33.50 €** | 10.2 % | **5.5 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9258M | 37.00 € | **35.50 €** | 10.3 % | **5.8 %** | 33.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C110 Home Sec. Wi-Fi Camera | 32.50 € | **31.00 €** | 10.3 % | **5.2 %** | 28.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **15.00 €** | 15.9 % | **5.4 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2012400 | 39.00 € | **37.50 €** | 10.1 % | **5.9 %** | 35.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1020500 | 39.00 € | **37.50 €** | 10.2 % | **5.9 %** | 35.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný digitálny multimeter UNI-T UT123D | 22.00 € | **20.50 €** | 14.1 % | **6.4 %** | 19.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkové ovládanie Telesin pre GoPro Hero 13 / 12 / ... | 19.00 € | **17.50 €** | 14.6 % | **5.5 %** | 17.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra ND32/PL ND/PL | 25.00 € | **23.50 €** | 13.9 % | **7.0 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filter Freewell pre Insta360 Luna Ultra ND16/PL | 25.00 € | **23.50 €** | 13.9 % | **7.0 %** | 23.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart WiFi Touch Wall Switch Sonoff TX T5 3C (3-chan... | 22.00 € | **20.50 €** | 13.8 % | **6.0 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru CABLETECH UCH0219-1 17''-32'' | 16.50 € | **15.00 €** | 29.9 % | **18.1 %** | 15.01 € | stávame sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 12.50 € | **11.00 €** | 28.2 % | **12.8 %** | 11.07 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 31.50 € | **30.00 €** | 12.5 % | **7.1 %** | 30.09 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.90 € | **6.40 €** | 55.5 % | **26.0 %** | 6.50 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE81WIFI | 5.30 € | **3.80 €** | 50.7 % | **8.0 %** | 3.90 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise pánev 28 cm | 26.50 € | **25.00 €** | 11.8 % | **5.5 %** | 25.19 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 20.00 € | **18.50 €** | 18.9 % | **10.0 %** | 18.69 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 300 LED, 30m, prívod 5m,... | 16.50 € | **15.00 €** | 56.9 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Beper BEP-PE165 | 61.00 € | **59.50 €** | 10.1 % | **7.4 %** | 59.80 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 37.00 € | **35.50 €** | 41.8 % | **36.0 %** | 35.90 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 17.00 € | **15.50 €** | 47.5 % | **34.5 %** | 15.90 € | stávame sa najlacnejší |
| Solight LED snehuliak, 26cm, 6x LED, IP20, 3x AA | 15.00 € | **13.50 €** | 54.2 % | **38.8 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED vianočná dedinka, 34x17cm, drevo, 4 LED,... | 12.00 € | **10.50 €** | 52.2 % | **33.2 %** | 10.90 € | stávame sa najlacnejší |
| Solight vianočný drevený betlehem podsvietený, 5x LE... | 18.00 € | **16.50 €** | 53.9 % | **41.1 %** | 16.90 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, voľne, 100m | 26.00 € | **24.50 €** | 42.7 % | **34.5 %** | 24.90 € | stávame sa najlacnejší |
| Solight stojan teleskopický pre LED reflektory, 60-1... | 21.00 € | **19.50 €** | 46.4 % | **36.0 %** | 19.90 € | stávame sa najlacnejší |
| Solight stredný fixný držiak pre ploché TV, 66cm - 1... | 12.00 € | **10.50 €** | 44.3 % | **26.3 %** | 10.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P86 (strieborné) | 21.00 € | **19.50 €** | 14.6 % | **6.4 %** | 19.90 € | stávame sa najlacnejší |
| Slnečné okuliare Zeblaze Eyewear s umelou inteligenciou | 77.00 € | **75.50 €** | 14.9 % | **12.6 %** | 75.90 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostanici TE90 | 12.00 € | **10.50 €** | 49.6 % | **30.9 %** | 10.90 € | stávame sa najlacnejší |
| Herné slúchadlá Onikuma B2 (čierne) | 22.00 € | **20.50 €** | 14.2 % | **6.4 %** | 20.90 € | stávame sa najlacnejší |
| Filament Anycubic TPU (sivý) 1 kg | 21.00 € | **19.50 €** | 14.3 % | **6.1 %** | 19.90 € | stávame sa najlacnejší |
| Webová kamera EMEET Piko (čierna) | 51.00 € | **49.50 €** | 14.9 % | **11.5 %** | 49.90 € | stávame sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 31.50 € | **30.00 €** | 15.3 % | **9.8 %** | 30.43 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.50 € | **30.00 €** | 20.7 % | **14.9 %** | 30.50 € | stávame sa najlacnejší |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.50 € | **28.00 €** | 14.9 % | **9.1 %** | 28.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB, 3m, sada s 12V adapté... | 14.50 € | **13.00 €** | 47.4 % | **32.1 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED SMD RGB pásik, sada s adaptérom, 3m, dia... | 20.50 € | **19.00 €** | 48.5 % | **37.7 %** | 19.50 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **13.00 €** | 47.4 % | **32.1 %** | 13.50 € | stávame sa najlacnejší |
| Solight high bay, 200W, 28000lm, 120°, Meanwell,  50... | 94.50 € | **93.00 €** | 20.0 % | **18.1 %** | 93.50 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.50 € | **17.00 €** | 39.0 % | **27.7 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.50 € | **48.00 €** | 38.6 % | **34.4 %** | 48.50 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 9W, 850lm, 4... | 22.50 € | **21.00 €** | 38.4 % | **29.1 %** | 21.50 € | stávame sa najlacnejší |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.50 € | **10.00 €** | 41.2 % | **22.8 %** | 10.50 € | stávame sa najlacnejší |
| Habotest HT121, bezkontaktná skúšačka napätia / skúš... | 15.50 € | **14.00 €** | 16.8 % | **5.5 %** | 14.50 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **12.00 €** | 47.1 % | **30.8 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.50 € | **11.00 €** | 46.9 % | **29.2 %** | 11.50 € | stávame sa najlacnejší |
| Solight LED solárne stĺpikové osvetlenie Palermo, 5W... | 30.50 € | **29.00 €** | 37.5 % | **30.8 %** | 29.50 € | stávame sa najlacnejší |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.50 € | **18.00 €** | 14.1 % | **5.4 %** | 18.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.50 € | **20.00 €** | 15.1 % | **7.0 %** | 20.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 14.50 € | **13.00 €** | 34.1 % | **20.2 %** | 13.50 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 20.50 € | **19.00 €** | 15.4 % | **7.0 %** | 19.50 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **35.00 €** | 15.2 % | **10.5 %** | 35.50 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **31.00 €** | 14.7 % | **9.4 %** | 31.50 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 2 + 1, 2 zásuv... | 17.50 € | **16.00 €** | 44.6 % | **32.2 %** | 16.50 € | stávame sa najlacnejší |
| ETA 5180 91010 sklo | 13.99 € | **12.50 €** | 27.2 % | **13.7 %** | 12.60 € | stávame sa najlacnejší |
| Blender G21 Experience Graphite Black | 253.90 € | **252.50 €** | 18.3 % | **17.6 %** | 252.53 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.90 € | **233.50 €** | 10.0 % | **9.4 %** | 233.88 € | stávame sa najlacnejší |
| Myš bezdrátová REBEL WM500 | 13.90 € | **12.50 €** | 18.1 % | **6.2 %** | 11.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka kariet TP-Link UA430D USB3.0 Typ C, microSD/... | 10.00 € | **8.60 €** | 30.3 % | **12.0 %** | 8.67 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka s viečkom, biela | 7.50 € | **6.10 €** | 59.6 % | **29.8 %** | 6.20 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.90 € | **12.50 €** | 39.9 % | **25.8 %** | 12.90 € | stávame sa najlacnejší |
| Solight rotačná kefa pre DysonV6, V7, V8, V10, V11 | 12.90 € | **11.50 €** | 31.1 % | **16.9 %** | 11.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod 6 zásuviek, 2m, 3 x 1mm2,... | 14.90 € | **13.50 €** | 49.2 % | **35.2 %** | 13.90 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 5.30 € | **3.90 €** | 55.6 % | **14.5 %** | 4.00 € | stávame sa najlacnejší |
| Solight bezdrôtový senzor k meteostaniciam TE81, TE8... | 5.30 € | **3.90 €** | 50.7 % | **10.9 %** | 4.00 € | stávame sa najlacnejší |
| Sada BOYA BY-WFM12 bezdrátový klopový mikrofon, vysí... | 33.90 € | **32.50 €** | 9.8 % | **5.3 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-DM10UC lavalier-klopový | 29.90 € | **28.50 €** | 10.8 % | **5.7 %** | 18.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Yeelight stropný reflektor (jedna žiarovka) biely | 19.90 € | **18.50 €** | 15.7 % | **7.6 %** | 11.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alecto FR-115BW Sada vysílaček pro děti | 35.90 € | **34.50 €** | 10.5 % | **6.2 %** | 29.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-81162 20m, 3 zásuvky | 46.90 € | **45.50 €** | 9.2 % | **5.9 %** | 42.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-PM700 stolní s nastavitelnou směrov... | 40.90 € | **39.50 €** | 8.8 % | **5.1 %** | 37.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada litinových závaží 4x1,25kg, 51mm, REBEL ACTIVE ... | 18.90 € | **17.50 €** | 16.1 % | **7.5 %** | 15.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje H45W | 39.90 € | **38.50 €** | 10.2 % | **6.3 %** | 36.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Yogurella 617 | 27.90 € | **26.50 €** | 10.8 % | **5.2 %** | 25.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, černý | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, červený | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL GO Essential 2, modrý | 29.90 € | **28.50 €** | 11.5 % | **6.2 %** | 27.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16075 | 25.90 € | **24.50 €** | 11.1 % | **5.1 %** | 24.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák PEGASUS 120 Compact | 29.90 € | **28.50 €** | 10.7 % | **5.5 %** | 28.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.90 € | **46.50 €** | 8.7 % | **5.5 %** | 46.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO hluboká pánev 24 cm | 29.90 € | **28.50 €** | 11.2 % | **6.0 %** | 28.55 € | stávame sa najlacnejší |
| Ariete ART 438/05 | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 29.61 € | stávame sa najlacnejší |
| Fixed VR Protective Case FIXMQ-PC-GR | 27.90 € | **26.50 €** | 11.0 % | **5.4 %** | 26.61 € | stávame sa najlacnejší |
| Termoska G21 nerezová 2500 ml, čierno-sivá | 34.90 € | **33.50 €** | 22.1 % | **17.2 %** | 33.68 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – pieskovo béžová | 25.90 € | **24.50 €** | 22.6 % | **15.9 %** | 24.69 € | stávame sa najlacnejší |
| Beper BEP-BC261 | 32.90 € | **31.50 €** | 10.8 % | **6.1 %** | 31.79 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.90 € | **20.50 €** | 24.8 % | **16.8 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, guľaté, ... | 16.90 € | **15.50 €** | 38.6 % | **27.2 %** | 15.90 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22280-56/RH | 62.90 € | **61.50 €** | 21.4 % | **18.7 %** | 61.90 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 30.90 € | **29.50 €** | 54.8 % | **47.8 %** | 29.90 € | stávame sa najlacnejší |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.90 € | **18.50 €** | 42.5 % | **32.5 %** | 18.90 € | stávame sa najlacnejší |
| Sonoff ZBM5-2C-80W (2-kanálový) inteligentný dotykov... | 22.90 € | **21.50 €** | 15.8 % | **8.7 %** | 21.90 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.50 €** | 15.6 % | **6.5 %** | 16.90 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X20 (čierne) | 19.90 € | **18.50 €** | 16.0 % | **7.8 %** | 18.90 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 17dB | 27.90 € | **26.50 €** | 42.5 % | **35.3 %** | 26.90 € | stávame sa najlacnejší |
| Baterka Superfire TF02 | 63.90 € | **62.50 €** | 15.1 % | **12.6 %** | 62.90 € | stávame sa najlacnejší |
| Latarka Superfire L3 P90 | 29.90 € | **28.50 €** | 14.9 % | **9.6 %** | 28.90 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **9.70 €** | 52.9 % | **34.8 %** | 9.80 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.90 € | **3.60 €** | 54.4 % | **13.4 %** | 3.70 € | stávame sa najlacnejší |
| Solight LED vonkajšie cencúle, 50LED, časovač, 8 fun... | 6.80 € | **5.50 €** | 54.0 % | **24.6 %** | 5.60 € | stávame sa najlacnejší |
| Solight vianočná LED drevená dekorácia, stromček, 2x AA | 9.00 € | **7.70 €** | 53.7 % | **31.5 %** | 7.80 € | stávame sa najlacnejší |
| Solight vypínač do vlhka, jednopólový, biely | 7.30 € | **6.00 €** | 59.1 % | **30.8 %** | 6.10 € | stávame sa najlacnejší |
| Solight cestovný adaptér do Indie, typ D | 6.50 € | **5.20 €** | 59.7 % | **27.7 %** | 5.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, gumová, čierna, 5m | 9.20 € | **7.90 €** | 47.8 % | **26.9 %** | 8.00 € | stávame sa najlacnejší |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 10.90 € | **9.70 €** | 54.1 % | **37.2 %** | 9.80 € | stávame sa najlacnejší |
| Solight závesné príslušenstvo pre LED panely 60x60, ... | 5.00 € | **3.80 €** | 39.2 % | **5.8 %** | 3.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie Corato s nastaviteľnou wattáž... | 10.00 € | **8.80 €** | 36.4 % | **20.0 %** | 8.90 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, 10x LED, 3x AA | 11.00 € | **9.80 €** | 54.5 % | **37.6 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 11.00 € | **9.80 €** | 48.1 % | **31.9 %** | 9.90 € | stávame sa najlacnejší |
| MAXXO DH 919 Extra Tea | 13.69 € | **12.50 €** | 36.1 % | **24.2 %** | 12.57 € | stávame sa najlacnejší |
| Ufesa Onyx BS2400 | 31.00 € | **29.90 €** | 10.1 % | **6.2 %** | 25.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Veslo pro paddleboard REBEL ACTIVE | 21.00 € | **19.90 €** | 11.7 % | **5.8 %** | 18.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 18.00 € | **16.90 €** | 13.6 % | **6.7 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pedrini MyMoka Indukce modrá 3 porce | 41.00 € | **39.90 €** | 10.2 % | **7.2 %** | 39.91 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **16.90 €** | 47.4 % | **38.4 %** | 17.00 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 100W, max. 14000lm, 3CCT,... | 27.00 € | **25.90 €** | 47.2 % | **41.2 %** | 26.00 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 36W, 3960lm, 300... | 22.00 € | **20.90 €** | 38.4 % | **31.5 %** | 21.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 36.00 € | **34.90 €** | 38.3 % | **34.0 %** | 35.00 € | stávame sa najlacnejší |
| Solight doplnkový pohybový senzor pre GSM alarm 1D11 | 32.00 € | **30.90 €** | 41.0 % | **36.2 %** | 31.00 € | stávame sa najlacnejší |
| Solight kónická kefová hubica pre Dyson V11, V15, Ou... | 40.00 € | **38.90 €** | 33.9 % | **30.3 %** | 39.00 € | stávame sa najlacnejší |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash B275 (biela) | 29.00 € | **27.90 €** | 14.9 % | **10.5 %** | 28.00 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash DS900G (čierna) | 51.00 € | **49.90 €** | 14.5 % | **12.0 %** | 50.00 € | stávame sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **45.90 €** | 14.6 % | **11.9 %** | 46.00 € | stávame sa najlacnejší |
| Solight PIR stropný senzor, interiérový, biely | 7.90 € | **6.80 €** | 55.5 % | **33.9 %** | 6.90 € | stávame sa najlacnejší |
| Anemometer UNI-T UT363 | 16.00 € | **14.90 €** | 14.0 % | **6.2 %** | 12.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Avatto CS20-EU-W WiFi dotykový inteligentný spínač r... | 17.00 € | **15.90 €** | 15.0 % | **7.5 %** | 14.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Testovanie zariadenia USB Uni-T UT658LOAD | 16.00 € | **14.90 €** | 14.8 % | **6.9 %** | 13.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vákuovacie fólie G21 rola 20 x 600 cm 2 ks | 10.50 € | **9.40 €** | 17.6 % | **5.3 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný generátor signálu FNIRSI SG-002 | 17.00 € | **15.90 €** | 13.8 % | **6.4 %** | 15.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria AAA MediaRange nabíjateľné USB-C Li-Ion , 1,... | 14.00 € | **12.90 €** | 14.5 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **15.90 €** | 13.4 % | **6.0 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LED lampa RGB Puluz pre fotoaparát PU560B | 16.00 € | **14.90 €** | 13.7 % | **5.9 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 13.00 € | **11.90 €** | 47.8 % | **35.3 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás, RGB + 3CCT, 5m, sada s 24V... | 17.00 € | **15.90 €** | 47.5 % | **38.0 %** | 16.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **9.80 €** | 40.4 % | **26.3 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **5.50 €** | 32.5 % | **10.4 %** | 5.60 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **9.90 €** | 52.9 % | **37.6 %** | 10.00 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 10.00 € | **8.90 €** | 53.4 % | **36.5 %** | 9.00 € | stávame sa najlacnejší |
| Solight teplomer | 10.50 € | **9.40 €** | 50.3 % | **34.5 %** | 9.50 € | stávame sa najlacnejší |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.90 € | **9.80 €** | 38.0 % | **24.1 %** | 9.90 € | stávame sa najlacnejší |
| Diaľkový spúšťač GODOX X3 TTL pre Canon | 73.00 € | **71.90 €** | 14.7 % | **12.9 %** | 72.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 71.00 € | **69.90 €** | 14.2 % | **12.4 %** | 70.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Edifier ES850NB, ANC (čierne) | 99.00 € | **97.90 €** | 14.8 % | **13.5 %** | 98.00 € | stávame sa najlacnejší |
| Slúchadlá Niceboy HIVE Beans Concert | 79.90 € | **78.90 €** | 6.4 % | **5.1 %** | 18.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi 67W Charging Combo (Type-A) EU | 24.50 € | **23.50 €** | 10.5 % | **6.0 %** | 12.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI Síto pro FD1000 ULTRA | 14.50 € | **13.50 €** | 13.0 % | **5.2 %** | 5.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka HMS Premium MP12 světle šedá | 34.00 € | **33.00 €** | 8.4 % | **5.2 %** | 25.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysielač BOYA BY-TX8 Pro na mikrofón | 36.90 € | **35.90 €** | 9.1 % | **6.1 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-BK | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 16.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Predlžovací kábel Yato YT-8116 10m, 3 zásuvky | 29.90 € | **28.90 €** | 8.8 % | **5.1 %** | 23.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Coox Quiche forma 3 díly se skleněnou po | 20.90 € | **19.90 €** | 11.1 % | **5.8 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament PLA Anycubic 1 KG (čierny) | 14.50 € | **13.50 €** | 16.0 % | **8.0 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska cest. PENTA 1,5l ner. | 20.90 € | **19.90 €** | 10.9 % | **5.6 %** | 15.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TechnoLine WS 8005 digitální budík | 22.50 € | **21.50 €** | 11.1 % | **6.1 %** | 17.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Blue) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 6.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-BL | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-PI | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagMate FIXMM-TU | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 12.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 530 Black | 28.50 € | **27.50 €** | 10.7 % | **6.8 %** | 24.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Podsie 4 POP White | 19.50 € | **18.50 €** | 11.8 % | **6.1 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1548/04 | 28.90 € | **27.90 €** | 9.1 % | **5.4 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Transparent) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 8.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Termoska s pum.CUL.1,9l černá | 21.50 € | **20.50 €** | 12.6 % | **7.3 %** | 18.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-540BK Black | 18.90 € | **17.90 €** | 11.2 % | **5.3 %** | 15.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco ESPRESSO BARISTA 1kg | 19.50 € | **18.50 €** | 12.5 % | **6.8 %** | 16.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-V01 stereofonní kondenzátorový,TRS | 12.00 € | **11.00 €** | 15.0 % | **5.5 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-541 Color | 23.50 € | **22.50 €** | 11.5 % | **6.7 %** | 20.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-546 Color | 20.90 € | **19.90 €** | 11.9 % | **6.6 %** | 18.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FIXED kryt SG S26 Ultra FIXMMY-1706-BK | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 15.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA X12 | 15.90 € | **14.90 €** | 15.1 % | **7.9 %** | 13.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo P100(2-pack)WiFi zásuvka | 22.50 € | **21.50 €** | 10.9 % | **6.0 %** | 20.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Beige) | 13.50 € | **12.50 €** | 16.3 % | **7.7 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Yellow) | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 11.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.50 €** | 8.3 % | **5.2 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vrecko na odpadky pre mačky Catlink pre Scooper 2x20ks | 11.90 € | **10.90 €** | 15.6 % | **5.9 %** | 9.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **20.90 €** | 11.3 % | **6.2 %** | 19.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skúšačka UNI-T UT18D vadaska | 42.90 € | **41.90 €** | 7.5 % | **5.0 %** | 41.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed MagPad Slim Qi2 15W FIXMPADS-TI | 22.50 € | **21.50 €** | 10.7 % | **5.7 %** | 20.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G4002300 Odstraňovač žmolků | 22.90 € | **21.90 €** | 10.6 % | **5.8 %** | 21.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Bluetooth Speaker Essential Green | 14.90 € | **13.90 €** | 12.7 % | **5.1 %** | 13.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Ellis B-4364 šedá | 17.50 € | **16.50 €** | 11.5 % | **5.1 %** | 16.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed USB-C/Lightning FIXDLS-CL2-WH | 19.50 € | **18.50 €** | 12.0 % | **6.2 %** | 18.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Sušák na prádlo Pegasus Bath 11 | 22.50 € | **21.50 €** | 10.8 % | **5.9 %** | 21.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák na prádlo QUARTETT Duo | 18.90 € | **17.90 €** | 12.1 % | **6.1 %** | 17.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **25.50 €** | 10.9 % | **6.8 %** | 25.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.90 € | **13.90 €** | 15.7 % | **7.9 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka na dlažbu Classic s tele | 12.50 € | **11.50 €** | 14.3 % | **5.2 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Metal selfie stick 2 m PULUZ for Insta360 One RS/X2/... | 14.00 € | **13.00 €** | 13.7 % | **5.6 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PULUZ PU3224B Držiak na telefón čierny | 14.50 € | **13.50 €** | 16.5 % | **8.5 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herná myš ONIKUMA DM02 (čierna) | 16.50 € | **15.50 €** | 14.9 % | **8.0 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.90 € | **11.90 €** | 15.3 % | **6.3 %** | 11.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Onikuma MP006 RGB herná podložka pod myš (čierna) | 11.50 € | **10.50 €** | 16.4 % | **6.3 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI PB Magsafe+USB-C, 10000mAh AMS04WT | 26.50 € | **25.50 €** | 10.9 % | **6.7 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herné slúchadlá ONIKUMA X25 (čierne) | 14.90 € | **13.90 €** | 15.3 % | **7.5 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 15.50 € | **14.50 €** | 13.9 % | **6.6 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný stojan ONIKUMA ST-2 (ružový) | 11.50 € | **10.50 €** | 15.4 % | **5.4 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Selfie tyč Puluz pre Insta360 One RS / X2 / X3 / X4 ... | 12.90 € | **11.90 €** | 15.3 % | **6.3 %** | 11.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hyper PLA Filament Creality (Grey) | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čelovka 2v1 Superfire TH04 – 600 lm, USB-C, 5 režimo... | 12.50 € | **11.50 €** | 16.1 % | **6.9 %** | 11.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal INGENIO Expertise rendlík 20 cm | 24.50 € | **23.50 €** | 10.7 % | **6.1 %** | 23.51 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **26.90 €** | 11.2 % | **7.2 %** | 26.91 € | stávame sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 108.90 € | **107.90 €** | 13.0 % | **11.9 %** | 107.91 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 36.00 € | **35.00 €** | 32.0 % | **28.3 %** | 35.01 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **22.00 €** | 14.0 % | **9.1 %** | 22.05 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 181 | 20.90 € | **19.90 €** | 20.9 % | **15.2 %** | 19.96 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.00 € | **22.00 €** | 12.8 % | **7.9 %** | 22.09 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.99 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.99 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 21.90 € | **20.90 €** | 24.8 % | **19.1 %** | 20.99 € | stávame sa najlacnejší |
| Russell Hobbs 26800-56/RH | 26.90 € | **25.90 €** | 11.0 % | **6.9 %** | 25.99 € | stávame sa najlacnejší |
| AMIKO diaľkové ovládanie Univerzálny, HD - SD | 14.50 € | **13.50 €** | 26.4 % | **17.6 %** | 13.59 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 21.90 € | **20.90 €** | 50.3 % | **43.4 %** | 21.00 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.90 € | **27.90 €** | 35.0 % | **30.4 %** | 28.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.90 € | **11.90 €** | 47.3 % | **35.9 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.90 € | **11.90 €** | 47.7 % | **36.3 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **38.90 €** | 38.6 % | **35.1 %** | 39.00 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené, 40W, 4800l... | 25.90 € | **24.90 €** | 39.1 % | **33.7 %** | 25.00 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, UGR | 23.90 € | **22.90 €** | 38.4 % | **32.6 %** | 23.00 € | stávame sa najlacnejší |
| Solight LED WIFI smart vonkajšia vianočná reťaz, 400... | 31.90 € | **30.90 €** | 55.0 % | **50.2 %** | 31.00 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 33.90 € | **32.90 €** | 15.0 % | **11.6 %** | 33.00 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.90 € | **12.90 €** | 27.8 % | **18.6 %** | 13.00 € | stávame sa najlacnejší |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.90 € | **16.90 €** | 16.2 % | **9.7 %** | 17.00 € | stávame sa najlacnejší |
| Solight high bay, 150W, 21000lm, 120°, Philips, MW, ... | 97.90 € | **96.90 €** | 20.2 % | **19.0 %** | 97.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Ragusa, 7W... | 24.90 € | **23.90 €** | 38.3 % | **32.7 %** | 24.00 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Terni, 12W... | 26.90 € | **25.90 €** | 38.7 % | **33.5 %** | 26.00 € | stávame sa najlacnejší |
| Tefal HT652538 | 58.90 € | **57.90 €** | 10.4 % | **8.5 %** | 58.00 € | stávame sa najlacnejší |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.90 € | **12.90 €** | 20.3 % | **11.7 %** | 13.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod kocka 3m, 3 zásuvky IP44,... | 13.90 € | **12.90 €** | 35.8 % | **26.1 %** | 13.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.90 € | **22.90 €** | 36.1 % | **30.4 %** | 23.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 39.90 € | **38.90 €** | 39.2 % | **35.7 %** | 39.00 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 5.50 € | **4.50 €** | 55.8 % | **27.5 %** | 4.60 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.90 € | **35.90 €** | 17.5 % | **14.3 %** | 36.00 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.90 € | **35.90 €** | 17.8 % | **14.6 %** | 36.00 € | stávame sa najlacnejší |
| Johansson KIT 7474 L2 zesilovač + zdroj (2437) | 123.90 € | **122.90 €** | 16.5 % | **15.5 %** | 123.00 € | stávame sa najlacnejší |
| Vrecko na odpadky pre mačaciu toaletu Catlink Baymax... | 10.90 € | **9.90 €** | 17.1 % | **6.3 %** | 10.00 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **12.90 €** | 14.8 % | **6.6 %** | 13.00 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 7.10 € | **6.10 €** | 55.2 % | **33.3 %** | 6.20 € | stávame sa najlacnejší |
| DOMO DO8709P | 29.50 € | **28.50 €** | 10.5 % | **6.8 %** | 28.64 € | stávame sa najlacnejší |
| ScanPart vodní filtr kompatibilní 4ks | 16.50 € | **15.50 €** | 13.2 % | **6.3 %** | 15.67 € | stávame sa najlacnejší |
| Náhradní filtrační kapsle GARNI BS 45T | 17.50 € | **16.50 €** | 24.3 % | **17.2 %** | 16.69 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 59.50 € | **58.50 €** | 8.0 % | **6.2 %** | 58.69 € | stávame sa najlacnejší |
| Přenosná turistická toaleta Rebel Active RBA-5102, 2... | 84.00 € | **83.00 €** | 10.2 % | **8.9 %** | 83.20 € | stávame sa najlacnejší |
| Fixed kryt Apple iP 17P FIXBLM-1602-BP | 17.50 € | **16.50 €** | 11.9 % | **5.5 %** | 16.71 € | stávame sa najlacnejší |
| Sati Ethiopia Moka Sidamo 500 g zrno | 12.50 € | **11.50 €** | 14.5 % | **5.4 %** | 11.75 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 251.50 € | **250.50 €** | 7.8 % | **7.4 %** | 250.76 € | stávame sa najlacnejší |
| San Marco SUPREMO 1 kg zrno | 22.50 € | **21.50 €** | 11.3 % | **6.3 %** | 21.79 € | stávame sa najlacnejší |
| Ufesa Rouge BP3443 | 32.50 € | **31.50 €** | 11.4 % | **8.0 %** | 31.83 € | stávame sa najlacnejší |
| Sati Espresso Intenso 1 kg zrno | 18.50 € | **17.50 €** | 11.4 % | **5.3 %** | 17.88 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1019 | 13.50 € | **12.50 €** | 14.9 % | **6.4 %** | 12.89 € | stávame sa najlacnejší |
| Nutribullet NB614.DG | 55.50 € | **54.50 €** | 10.1 % | **8.1 %** | 54.89 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 29.00 € | **28.00 €** | 21.4 % | **17.2 %** | 28.39 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.50 € | **12.50 €** | 47.5 % | **36.6 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička nabíjacia, 5W, RGB podsv... | 19.50 € | **18.50 €** | 13.6 % | **7.7 %** | 18.90 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 12.50 € | **11.50 €** | 42.7 % | **31.3 %** | 11.90 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP20 | 13.50 € | **12.50 €** | 56.1 % | **44.6 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 13.50 € | **12.50 €** | 16.9 % | **8.2 %** | 12.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **10.50 €** | 38.5 % | **26.5 %** | 10.90 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.50 € | **46.50 €** | 37.3 % | **34.4 %** | 46.90 € | stávame sa najlacnejší |
| Solight high bay, 100W, 14000lm, 120°, Philips, MW, ... | 85.50 € | **84.50 €** | 20.2 % | **18.8 %** | 84.90 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 17.50 € | **16.50 €** | 43.6 % | **35.4 %** | 16.90 € | stávame sa najlacnejší |
| Tefal OptiGrill GC7P0810 | 99.50 € | **98.50 €** | 10.1 % | **9.0 %** | 98.90 € | stávame sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 11.8 % | **6.6 %** | 20.90 € | stávame sa najlacnejší |
| Solight rotačná kefa pre Dyson V8, V10, V12, V15 | 26.50 € | **25.50 €** | 32.5 % | **27.5 %** | 25.90 € | stávame sa najlacnejší |
| DOMO DO754K | 36.50 € | **35.50 €** | 10.0 % | **7.0 %** | 35.90 € | stávame sa najlacnejší |
| Solight spodný kĺbový nadstavec pre Dyson V7, V8, V1... | 13.50 € | **12.50 €** | 33.2 % | **23.3 %** | 12.90 € | stávame sa najlacnejší |
| Girmi PE1600 | 16.50 € | **15.50 €** | 12.1 % | **5.3 %** | 15.90 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 953.50 € | **952.50 €** | 15.0 % | **14.9 %** | 952.90 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 20.50 € | **19.50 €** | 38.8 % | **32.0 %** | 19.90 € | stávame sa najlacnejší |
| DURACELL baterie DRNEL14 pro Nikon | 20.50 € | **19.50 €** | 11.6 % | **6.2 %** | 19.90 € | stávame sa najlacnejší |
| Zircon Monoblok Single M-0143 Slim line Skylink | 12.50 € | **11.50 €** | 36.0 % | **25.2 %** | 11.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash F1 (biela) + 6 ventiláto... | 116.50 € | **115.50 €** | 15.0 % | **14.0 %** | 115.90 € | stávame sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 54.50 € | **53.50 €** | 25.5 % | **23.2 %** | 53.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.50 € | **32.50 €** | 18.6 % | **15.1 %** | 32.90 € | stávame sa najlacnejší |
| Herné reproduktory Onikuma L2 | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.90 € | stávame sa najlacnejší |
| Cycplus AS210 MAX AT1 Max Anoutway – mini pumpa na b... | 40.50 € | **39.50 €** | 15.7 % | **12.8 %** | 39.90 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.50 € | **25.50 €** | 42.7 % | **37.3 %** | 25.90 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Night 160 ml | 12.00 € | **11.00 €** | 23.0 % | **12.8 %** | 11.42 € | stávame sa najlacnejší |
| Solight LED svetelný pás 5m, 198LED/m, 16W/m, 1500lm... | 17.00 € | **16.00 €** | 47.5 % | **38.8 %** | 16.50 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 13.00 € | **12.00 €** | 38.5 % | **27.9 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.00 €** | 38.4 % | **31.8 %** | 20.50 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 318.00 € | **317.00 €** | 12.1 % | **11.8 %** | 317.50 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT M2 | 660.00 € | **659.00 €** | 10.7 % | **10.5 %** | 659.50 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 17.00 € | **16.00 €** | 29.8 % | **22.1 %** | 16.50 € | stávame sa najlacnejší |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 48.00 € | **47.00 €** | 54.5 % | **51.3 %** | 47.50 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.00 €** | 31.9 % | **19.9 %** | 10.50 € | stávame sa najlacnejší |
| Solight štrbinová hubica pre Dyson V7, V8, V10, V11,... | 11.00 € | **10.00 €** | 31.9 % | **19.9 %** | 10.50 € | stávame sa najlacnejší |
| Tefal Coppertinto KI280G10 | 31.00 € | **30.00 €** | 10.1 % | **6.6 %** | 30.50 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 29.00 € | **28.00 €** | 18.7 % | **14.6 %** | 28.50 € | stávame sa najlacnejší |
| Dvojkanálový nástenný spínač SONOFF MINI-2GS-E Matter. | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.50 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 81.00 € | **80.00 €** | 8.5 % | **7.2 %** | 80.50 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 15.00 € | **14.00 €** | 55.4 % | **45.0 %** | 14.50 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 14.00 € | **13.00 €** | 15.4 % | **7.2 %** | 13.50 € | stávame sa najlacnejší |
| Sati Café al’Italienne 1 kg zrno | 22.00 € | **21.00 €** | 10.1 % | **5.1 %** | 21.50 € | stávame sa najlacnejší |
| TP-LINK Archer T3U WiFi Adaptér | 16.90 € | **15.90 €** | 11.9 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0833 analogové přenosné solární | 16.90 € | **15.90 €** | 12.3 % | **5.7 %** | 16.00 € | stávame sa najlacnejší |
| Bravo Sky B-4610 zlatý | 65.90 € | **65.00 €** | 10.2 % | **8.7 %** | 65.29 € | stávame sa najlacnejší |
| Graef S 10005 | 113.90 € | **113.00 €** | 10.4 % | **9.5 %** | 113.42 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 114.90 € | **114.00 €** | 10.4 % | **9.6 %** | 114.50 € | stávame sa najlacnejší |
| Leifheit Vakuovací role 30x600 cm | 14.90 € | **14.00 €** | 12.0 % | **5.2 %** | 12.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carrera GO 64270 Škoda Fabia RS Rally 2 | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 10.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3ferrari G2017100 kuchyňská váha | 15.90 € | **15.00 €** | 11.4 % | **5.1 %** | 14.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo L630 | 10.50 € | **9.60 €** | 15.0 % | **5.2 %** | 9.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Bloom biele drevo 200 ml | 14.90 € | **14.00 €** | 21.6 % | **14.3 %** | 14.04 € | stávame sa najlacnejší |
| Solight LED vianočné záves, cencúle, 120 LED, 3m x 0... | 9.60 € | **8.70 €** | 54.2 % | **39.8 %** | 8.80 € | stávame sa najlacnejší |
| Solight časový spínač, týždeň, 1 režim | 4.70 € | **3.80 €** | 45.3 % | **17.5 %** | 3.90 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.50 € | **6.60 €** | 46.2 % | **28.7 %** | 6.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 3m | 3.20 € | **2.30 €** | 46.2 % | **5.1 %** | 2.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 2,5m | 7.70 € | **6.80 €** | 48.0 % | **30.7 %** | 6.90 € | stávame sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 5.90 € | **5.00 €** | 51.3 % | **28.2 %** | 5.10 € | stávame sa najlacnejší |
| Rajnica Berlingerhaus s mramorovým povrchom 16 cm Bu... | 13.90 € | **13.00 €** | 18.6 % | **10.9 %** | 13.22 € | stávame sa najlacnejší |
| Sati Décafeinated 500 g zrno | 12.90 € | **12.00 €** | 13.5 % | **5.6 %** | 12.25 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 12.90 € | **12.00 €** | 38.5 % | **28.9 %** | 12.50 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 13.90 € | **13.00 €** | 28.1 % | **19.8 %** | 13.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 14.90 € | **14.00 €** | 34.4 % | **26.3 %** | 14.50 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.90 € | **14.00 €** | 21.6 % | **14.3 %** | 14.50 € | stávame sa najlacnejší |
| Solight multimeter digitálny V33 | 11.90 € | **11.00 €** | 20.5 % | **11.4 %** | 11.50 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V/10A, NCV | 10.90 € | **10.00 €** | 46.2 % | **34.2 %** | 10.50 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 11.90 € | **11.00 €** | 38.6 % | **28.1 %** | 11.50 € | stávame sa najlacnejší |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.90 € | **13.00 €** | 16.5 % | **9.0 %** | 13.50 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 5 sériový - lustrový, biely | 3.90 € | **3.00 €** | 40.9 % | **8.4 %** | 3.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.40 €** | 42.7 % | **25.1 %** | 6.50 € | stávame sa najlacnejší |
| TP-LINK Archer T3U Plus WiFi Adaptér | 19.90 € | **19.00 €** | 10.3 % | **5.3 %** | 14.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEFAL XA 800512 | 17.90 € | **17.00 €** | 12.5 % | **6.8 %** | 17.08 € | stávame sa najlacnejší |
| Koloběžka NILS Extreme HM1302 černá | 43.90 € | **43.00 €** | 8.3 % | **6.0 %** | 43.09 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 54.90 € | **54.00 €** | 10.5 % | **8.7 %** | 54.13 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.7 % | **9.6 %** | 24.19 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 24.90 € | **24.00 €** | 13.7 % | **9.6 %** | 24.19 € | stávame sa najlacnejší |
| Ufesa Vario 1400 Titanium XL Max BP4752 | 60.90 € | **60.00 €** | 10.7 % | **9.1 %** | 60.38 € | stávame sa najlacnejší |
| Sati Crema 1 kg zrno | 20.90 € | **20.00 €** | 10.4 % | **5.6 %** | 20.38 € | stávame sa najlacnejší |
| San Marco Pur Arabica Premium 1 kg zrno | 22.90 € | **22.00 €** | 10.1 % | **5.8 %** | 22.42 € | stávame sa najlacnejší |
| Leifheit 3233 4-dílná sada vak. Krabiček | 36.90 € | **36.00 €** | 11.1 % | **8.4 %** | 36.46 € | stávame sa najlacnejší |
| FoodSaver FVB015X | 18.90 € | **18.00 €** | 12.2 % | **6.9 %** | 18.46 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 40.90 € | **40.00 €** | 19.1 % | **16.4 %** | 40.50 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.90 € | **16.00 €** | 26.9 % | **20.1 %** | 16.50 € | stávame sa najlacnejší |
| Termoska na jedlo G21 750 ml – eukalyptovo zelená | 25.90 € | **25.00 €** | 22.6 % | **18.3 %** | 25.50 € | stávame sa najlacnejší |
| Uni-T UT201R digitálny klešťový multimeter | 22.90 € | **22.00 €** | 16.0 % | **11.4 %** | 22.50 € | stávame sa najlacnejší |
| Bezkontaktný laserový teplomer Habotest HT650B | 17.90 € | **17.00 €** | 15.2 % | **9.4 %** | 17.50 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 11W, 1200lm,... | 26.90 € | **26.00 €** | 18.3 % | **14.4 %** | 26.50 € | stávame sa najlacnejší |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 24.90 € | **24.00 €** | 28.7 % | **24.0 %** | 24.50 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.90 € | **20.00 €** | 15.0 % | **10.1 %** | 20.50 € | stávame sa najlacnejší |
| Hrazda do dveří Trizand 24784 | 16.90 € | **16.00 €** | 14.6 % | **8.5 %** | 16.50 € | stávame sa najlacnejší |
| Solight rozbočka kocka, 3x 16A + USB A+C, biela, vyp... | 10.00 € | **9.20 €** | 48.6 % | **36.7 %** | 9.23 € | stávame sa najlacnejší |
| Solight rozbočovač, 3x 15A, biely-sivý, vypínač | 7.90 € | **7.10 €** | 47.3 % | **32.4 %** | 7.20 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 5m | 8.30 € | **7.50 €** | 47.0 % | **32.8 %** | 7.60 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 350mm, natura... | 3.70 € | **2.90 €** | 56.7 % | **22.8 %** | 3.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 2,5m | 4.70 € | **3.90 €** | 49.3 % | **23.9 %** | 4.00 € | stávame sa najlacnejší |
| Solight magnetický USB-C 3.1 kábel, USB-C konektor -... | 4.40 € | **3.60 €** | 52.9 % | **25.1 %** | 3.70 € | stávame sa najlacnejší |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 4.50 € | **3.70 €** | 55.0 % | **27.5 %** | 3.79 € | stávame sa najlacnejší |
| Solight nabíjacie nočné LED svetielko s pohybovým a ... | 8.50 € | **7.70 €** | 53.9 % | **39.4 %** | 7.80 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.10 € | **6.30 €** | 55.2 % | **37.7 %** | 6.40 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 4.10 € | **3.30 €** | 54.3 % | **24.2 %** | 3.40 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 7.30 € | **6.50 €** | 54.6 % | **37.6 %** | 6.60 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.00 €** | 45.5 % | **28.4 %** | 6.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 3m | 6.60 € | **5.80 €** | 47.0 % | **29.2 %** | 5.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 3m | 6.20 € | **5.40 €** | 48.7 % | **29.5 %** | 5.50 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.10 € | **3.30 €** | 54.3 % | **24.2 %** | 3.40 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 1 jednopólový, biely | 3.00 € | **2.30 €** | 41.8 % | **8.7 %** | 2.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.80 € | **4.10 €** | 24.7 % | **6.5 %** | 4.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.50 € | **4.80 €** | 54.7 % | **35.0 %** | 4.90 € | stávame sa najlacnejší |
| Solight drevená lampáš s LED sviečkou, 3x AAA | 7.90 € | **7.20 €** | 55.5 % | **41.7 %** | 7.30 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda, závesná, 60cm, 20x LED... | 7.40 € | **6.70 €** | 55.1 % | **40.4 %** | 6.80 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz rolničky, 10x LED, zlatá,... | 4.20 € | **3.50 €** | 55.9 % | **29.9 %** | 3.60 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.70 € | **7.00 €** | 54.6 % | **40.5 %** | 7.10 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.70 € | **2.00 €** | 52.4 % | **12.9 %** | 2.10 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.20 € | **2.50 €** | 54.9 % | **21.0 %** | 2.60 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.20 €** | 47.1 % | **29.7 %** | 5.30 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.20 € | **2.50 €** | 54.9 % | **21.0 %** | 2.60 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 6.40 € | **5.70 €** | 53.5 % | **36.7 %** | 5.80 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 4,8 x 300mm, natura... | 3.40 € | **2.70 €** | 55.3 % | **23.3 %** | 2.80 € | stávame sa najlacnejší |
| Solight koaxiálny kábel CC120, sáčok, 15m | 3.90 € | **3.20 €** | 53.2 % | **25.7 %** | 3.30 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 3.90 € | **3.20 €** | 53.2 % | **25.7 %** | 3.30 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 2,5m | 3.90 € | **3.20 €** | 48.9 % | **22.1 %** | 3.30 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **1.60 €** | 57.1 % | **9.3 %** | 1.70 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **9.80 €** | 38.4 % | **29.1 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED vianočné dekorácie, zasnežená krajina s ... | 7.10 € | **6.40 €** | 55.2 % | **39.9 %** | 6.50 € | stávame sa najlacnejší |
| Solight LED solárna lampáš nástenná, teplá biela, 12... | 5.10 € | **4.40 €** | 54.1 % | **33.0 %** | 4.50 € | stávame sa najlacnejší |
| Solight držiak príslušenstva pre Dyson V7, V8, V10, ... | 10.50 € | **9.80 €** | 33.0 % | **24.1 %** | 9.90 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 2A, 24W, IP20 | 10.00 € | **9.30 €** | 50.8 % | **40.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.60 € | **7.90 €** | 53.7 % | **41.2 %** | 8.00 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.50 € | **556.90 €** | 6.7 % | **6.6 %** | 557.00 € | stávame sa najlacnejší |
| Ariete Breakfast Bollitore 2846, černá | 17.50 € | **16.90 €** | 10.5 % | **6.8 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón BOYA BY-BM58 ruční všesměrový | 32.50 € | **31.90 €** | 8.2 % | **6.2 %** | 28.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BWT Penguin MEI 2,7l černá + 2ks filtru | 20.50 € | **19.90 €** | 10.2 % | **6.9 %** | 19.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 265 s teploměrem | 17.50 € | **16.90 €** | 10.7 % | **6.9 %** | 16.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multimeter Uni-T UT256 | 26.50 € | **25.90 €** | 8.8 % | **6.3 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 27.50 € | **26.90 €** | 34.4 % | **31.5 %** | 26.91 € | stávame sa najlacnejší |
| Hodiny TechnoLine WT 3100 do koupelny | 24.50 € | **23.90 €** | 15.9 % | **13.0 %** | 23.96 € | stávame sa najlacnejší |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 42.50 € | **41.90 €** | 18.9 % | **17.3 %** | 41.97 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.50 € | **32.90 €** | 33.4 % | **31.1 %** | 33.00 € | stávame sa najlacnejší |
| Solight profesionálny bezkontaktný alkohol tester, F... | 52.50 € | **51.90 €** | 33.2 % | **31.7 %** | 52.00 € | stávame sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 36.50 € | **35.90 €** | 34.6 % | **32.4 %** | 36.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 45W, 4500l... | 19.50 € | **18.90 €** | 38.3 % | **34.1 %** | 19.00 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.50 € | **19.90 €** | 27.8 % | **24.1 %** | 20.00 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 29.50 € | **28.90 €** | 14.8 % | **12.4 %** | 29.00 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 22.50 € | **21.90 €** | 11.2 % | **8.2 %** | 22.00 € | stávame sa najlacnejší |
| Elektrický masážny prístroj na tvár Guasha ANLAN 02-... | 35.50 € | **34.90 €** | 15.5 % | **13.6 %** | 35.00 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **35.90 €** | 10.0 % | **8.2 %** | 36.00 € | stávame sa najlacnejší |
| Solight batériová kamera WiFi so solárnym panelom | 57.50 € | **56.90 €** | 32.4 % | **31.0 %** | 57.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.50 € | **27.90 €** | 16.0 % | **13.6 %** | 28.00 € | stávame sa najlacnejší |
| DJI RoboMaster TT celoplošný ochranný kryt vrtule | 18.50 € | **17.90 €** | 13.9 % | **10.2 %** | 18.00 € | stávame sa najlacnejší |
| Filament Anycubic ASA (sivý) 1 kg | 18.50 € | **17.90 €** | 15.3 % | **11.6 %** | 18.00 € | stávame sa najlacnejší |
| Kapsula Flextail AVS (sivá) | 23.50 € | **22.90 €** | 16.1 % | **13.1 %** | 23.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.20 € | **4.60 €** | 20.4 % | **6.5 %** | 4.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED svetelný pás so svetelným a pohybovým se... | 6.20 € | **5.60 €** | 46.1 % | **32.0 %** | 5.70 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.70 €** | 55.5 % | **44.2 %** | 7.80 € | stávame sa najlacnejší |
| Solight LED svetielko s diaľkovým ovládaním, 5 LED, ... | 6.70 € | **6.10 €** | 55.2 % | **41.3 %** | 6.20 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz hviezdy, 10x LED, drevo, ... | 4.90 € | **4.30 €** | 55.6 % | **36.6 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.60 €** | 53.7 % | **38.8 %** | 5.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, biela, 3m | 5.40 € | **4.80 €** | 47.3 % | **31.0 %** | 4.90 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV01, AV02 | 2.10 € | **1.50 €** | 51.1 % | **7.9 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP40, čierna-oranžová | 3.40 € | **2.80 €** | 47.0 % | **21.1 %** | 2.90 € | stávame sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 2.10 € | **1.50 €** | 55.2 % | **10.9 %** | 1.60 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, biela, plochá,... | 2.90 € | **2.30 €** | 48.3 % | **17.6 %** | 2.40 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.30 €** | 53.2 % | **29.6 %** | 3.40 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 4.00 € | **3.40 €** | 53.4 % | **30.4 %** | 3.50 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 2.50 € | **1.90 €** | 56.3 % | **18.8 %** | 2.00 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.70 € | **3.10 €** | 55.1 % | **29.9 %** | 3.20 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka Fast, IP68, 5-9mm, ... | 4.20 € | **3.60 €** | 55.9 % | **33.6 %** | 3.70 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **2.90 €** | 53.0 % | **26.8 %** | 3.00 € | stávame sa najlacnejší |
| Fixed řemínek AWU 49mm FIXNST2-1029-RD | 16.50 € | **15.90 €** | 10.7 % | **6.7 %** | 4.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Jóga blok HMS KJ02 korkový | 15.50 € | **14.90 €** | 10.1 % | **5.8 %** | 5.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák MagMount Vent FIXMMT-V-BK | 14.50 € | **13.90 €** | 11.2 % | **6.6 %** | 10.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune110 white | 11.50 € | **10.90 €** | 14.7 % | **8.7 %** | 7.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 655 Yellow, CZ112AE | 16.50 € | **15.90 €** | 10.9 % | **6.8 %** | 13.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U AC600 WiFi Adaptér | 12.50 € | **11.90 €** | 12.8 % | **7.4 %** | 10.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo L530E | 11.50 € | **10.90 €** | 11.4 % | **5.6 %** | 9.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní válec HMS FS104, modrý | 15.50 € | **14.90 €** | 10.1 % | **5.8 %** | 13.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Watch42/44/45 černý,FIXMEST-434-BK | 14.50 € | **13.90 €** | 12.5 % | **7.8 %** | 12.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Banquet Pánev nepř. GRANITE P 24 ind | 14.50 € | **13.90 €** | 10.9 % | **6.3 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Combo-Hepa | 12.50 € | **11.90 €** | 12.5 % | **7.1 %** | 11.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UNI-T UT658DUAL tester zásuviek USB | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| San Marco INTENSO 500 g | 12.50 € | **11.90 €** | 13.8 % | **8.3 %** | 11.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LENCO ICR-210 černá | 16.50 € | **15.90 €** | 10.6 % | **6.6 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 9.40 € | **8.80 €** | 54.1 % | **44.2 %** | 8.84 € | stávame sa najlacnejší |
| ELDONEX EKS4040SL | 11.50 € | **10.90 €** | 14.3 % | **8.3 %** | 10.96 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 14.50 € | **13.90 €** | 18.4 % | **13.5 %** | 13.99 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 16.50 € | **15.90 €** | 25.1 % | **20.6 %** | 16.00 € | stávame sa najlacnejší |
| Čítacia lampa Yeelight Led Neck Book Light | 11.50 € | **10.90 €** | 15.7 % | **9.7 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 11.50 € | **10.90 €** | 49.6 % | **41.8 %** | 11.00 € | stávame sa najlacnejší |
| Solight LED reflektor so senzorom TOP, 30W, max. 390... | 15.50 € | **14.90 €** | 46.0 % | **40.4 %** | 15.00 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **11.90 €** | 23.5 % | **17.6 %** | 12.00 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 10.00 € | **9.40 €** | 38.3 % | **30.0 %** | 9.50 € | stávame sa najlacnejší |
| Solight LED solárna reťaz, 200LED, 22m, teplá biela | 7.50 € | **6.90 €** | 54.8 % | **42.4 %** | 7.00 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda stolná, pletená, 35x LE... | 6.10 € | **5.50 €** | 54.5 % | **39.3 %** | 5.60 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 30W, 2550lm... | 14.50 € | **13.90 €** | 43.8 % | **37.8 %** | 14.00 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.30 € | **2.70 €** | 39.7 % | **14.3 %** | 2.80 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka, IP44, čierna | 4.60 € | **4.00 €** | 49.0 % | **29.6 %** | 4.10 € | stávame sa najlacnejší |
| Nabíjecí bezdrátová podložka pro telefony Compass | 16.50 € | **15.90 €** | 10.5 % | **6.5 %** | 16.00 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 2x USB, 3100mA max., A... | 6.50 € | **5.90 €** | 45.2 % | **31.8 %** | 6.00 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.80 € | **3.20 €** | 48.5 % | **25.1 %** | 3.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 2m | 4.60 € | **4.00 €** | 48.4 % | **29.0 %** | 4.10 € | stávame sa najlacnejší |
| Filament PLA ELEGOO (Szary) | 10.50 € | **9.90 €** | 13.2 % | **6.7 %** | 10.00 € | stávame sa najlacnejší |
| Sieťový adaptér SkyRC 15V / 4A | 16.50 € | **15.90 €** | 15.5 % | **11.3 %** | 16.00 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 LEVENHUK Wezzer Air MC10 | 75.50 € | **74.90 €** | 8.0 % | **7.2 %** | 74.94 € | stávame sa najlacnejší |
| KRUPS KP143GF0 Nescafé Dolce Gusto Mini | 100.50 € | **99.90 €** | 10.1 % | **9.4 %** | 99.99 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 76.50 € | **75.90 €** | 19.4 % | **18.5 %** | 76.00 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 67.50 € | **66.90 €** | 8.0 % | **7.1 %** | 67.00 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 20W, max. 2600lm, 3CCT, v... | 8.30 € | **7.80 €** | 47.7 % | **38.8 %** | 7.90 € | stávame sa najlacnejší |
| Solight anténny rozbočovač hybridný priamy | 2.20 € | **1.70 €** | 56.9 % | **21.2 %** | 1.80 € | stávame sa najlacnejší |
| Sušička ovoce Ruhhy 25928 400W | 50.50 € | **50.00 €** | 6.1 % | **5.1 %** | 42.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 růžovo-šedá | 25.00 € | **24.50 €** | 7.5 % | **5.3 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 zelená-mod... | 25.00 € | **24.50 €** | 7.5 % | **5.3 %** | 22.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE Fitness MP10 žlutá-modr... | 25.00 € | **24.50 €** | 7.5 % | **5.3 %** | 22.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ochranná puzzle podložka ONE FItness MP10 modro-šedá | 25.00 € | **24.50 €** | 7.5 % | **5.3 %** | 22.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PG-545BK Black | 17.00 € | **16.50 €** | 10.6 % | **7.3 %** | 15.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm černý | 13.50 € | **13.00 €** | 9.6 % | **5.6 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm světle šedý | 13.50 € | **13.00 €** | 9.6 % | **5.6 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB02N 75 cm šedo-stříbrný | 13.50 € | **13.00 €** | 9.6 % | **5.6 %** | 12.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Aromo 0064 90000 bílý | 14.00 € | **13.50 €** | 10.1 % | **6.1 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Hyper PETG Creality (zelený) | 11.00 € | **10.50 €** | 12.8 % | **7.6 %** | 10.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, farba natural, 100k... | 1.60 € | **1.10 €** | 58.6 % | **9.1 %** | 1.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NEDIS WIFIWC10WT SmartLife vypínač Wi-Fi, řídicí jed... | 25.00 € | **24.50 €** | 9.3 % | **7.1 %** | 24.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 4.00 € | **3.50 €** | 53.4 % | **34.2 %** | 3.51 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Tefal EY8328E0 | 124.50 € | **124.00 €** | 10.4 % | **10.0 %** | 124.02 € | stávame sa najlacnejší |
| Eldonex EPG-1100-SL elektrický mlýnek | 13.50 € | **13.00 €** | 13.2 % | **9.0 %** | 13.04 € | stávame sa najlacnejší |
| Beper Bt602-H Vaflovač 780W | 24.50 € | **24.00 €** | 11.5 % | **9.2 %** | 24.04 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1mm2, gumová, čierna, 5m | 6.70 € | **6.20 €** | 46.8 % | **35.9 %** | 6.24 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 1016 | 20.00 € | **19.50 €** | 15.1 % | **12.2 %** | 19.56 € | stávame sa najlacnejší |
| Beper Bp101-H Elektrický Citrusovač | 19.50 € | **19.00 €** | 12.4 % | **9.6 %** | 19.08 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.20 € | **2.70 €** | 54.9 % | **30.7 %** | 2.78 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.50 € | **23.00 €** | 19.3 % | **16.7 %** | 23.09 € | stávame sa najlacnejší |
| Solight LED kovový vianočný stromček, 2x AA | 4.80 € | **4.30 €** | 54.9 % | **38.7 %** | 4.40 € | stávame sa najlacnejší |
| Solight LED vianočná gula sklenená, 10LED, 2x AA, IP20 | 4.70 € | **4.20 €** | 52.8 % | **36.6 %** | 4.30 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.70 € | **1.20 €** | 53.6 % | **8.4 %** | 1.30 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 5m, prí... | 6.20 € | **5.70 €** | 53.7 % | **41.3 %** | 5.80 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 4.50 € | **4.00 €** | 53.7 % | **36.6 %** | 4.10 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 50LED, 5m, 8 f... | 3.50 € | **3.00 €** | 55.5 % | **33.3 %** | 3.10 € | stávame sa najlacnejší |
| Solight prodlužovací prívodný kábel k vianočným reťa... | 2.40 € | **1.90 €** | 57.4 % | **24.6 %** | 2.00 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 4ks, 6,5cm, ba... | 10.00 € | **9.50 €** | 53.4 % | **45.7 %** | 9.60 € | stávame sa najlacnejší |
| Solight LED SMART WIFI žiarovka, klasický tvar, 15W,... | 9.40 € | **8.90 €** | 48.4 % | **40.5 %** | 9.00 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.60 € | **7.10 €** | 51.4 % | **41.5 %** | 7.20 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **1.90 €** | 56.1 % | **23.6 %** | 2.00 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 250mm, natura... | 2.00 € | **1.50 €** | 56.3 % | **17.3 %** | 1.60 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo nabíjacie, 150+60lm, Li... | 5.00 € | **4.50 €** | 56.3 % | **40.7 %** | 4.60 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 30W, 2550lm, 4000K, IP6... | 9.00 € | **8.50 €** | 47.5 % | **39.3 %** | 8.60 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, matný čierny | 2.60 € | **2.10 €** | 48.9 % | **20.2 %** | 2.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.80 € | **2.30 €** | 46.9 % | **20.6 %** | 2.40 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.60 €** | 49.8 % | **14.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.60 € | **3.10 €** | 46.3 % | **26.0 %** | 3.20 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.40 € | **2.90 €** | 46.3 % | **24.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight SCART kábel, SCART konektor - SCART konektor... | 2.10 € | **1.60 €** | 52.4 % | **16.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 2m | 2.10 € | **1.60 €** | 47.2 % | **12.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, vypí... | 3.30 € | **2.80 €** | 49.9 % | **27.2 %** | 2.90 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, biela, 2m | 3.00 € | **2.50 €** | 49.6 % | **24.7 %** | 2.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3m, 1 zásuvka, 16A/3680W,... | 6.10 € | **5.60 €** | 55.0 % | **42.3 %** | 5.70 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 5 zásuviek | 2.80 € | **2.30 €** | 48.8 % | **22.2 %** | 2.40 € | stávame sa najlacnejší |
| Solight magnetické puzdro na karty, MagSafe kompatib... | 9.10 € | **8.60 €** | 42.3 % | **34.5 %** | 8.70 € | stávame sa najlacnejší |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.90 € | **3.40 €** | 53.2 % | **33.5 %** | 3.50 € | stávame sa najlacnejší |
| Ariete Ice Machine 651 | 99.50 € | **99.00 €** | 10.4 % | **9.8 %** | 99.13 € | stávame sa najlacnejší |
| CrockPot CSC113X Pomalý hrnec 3,5 l | 75.50 € | **75.00 €** | 10.5 % | **9.7 %** | 75.17 € | stávame sa najlacnejší |
| Domo DO 264 AP | 59.00 € | **58.50 €** | 10.1 % | **9.1 %** | 58.67 € | stávame sa najlacnejší |
| Strong SRT84 Terestriální HDMI přijímač | 28.50 € | **28.00 €** | 11.1 % | **9.1 %** | 28.19 € | stávame sa najlacnejší |
| Tefal ZP2M04E0 | 23.50 € | **23.00 €** | 11.9 % | **9.5 %** | 23.21 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0912 10000mAh Powerbanka MagSafe | 23.00 € | **22.50 €** | 18.7 % | **16.1 %** | 22.71 € | stávame sa najlacnejší |
| Powerbanka KRUGER & MATZ KM0914 20000 mAh Li-ion 65W... | 29.50 € | **29.00 €** | 7.3 % | **5.4 %** | 29.22 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna PRO+, T8, 22W, 3080lm,... | 15.50 € | **15.00 €** | 47.4 % | **42.6 %** | 15.25 € | stávame sa najlacnejší |
| Pec na pizzu Cattara MARGHERITA plynová s regulátorem | 155.50 € | **155.00 €** | 14.4 % | **14.0 %** | 155.25 € | stávame sa najlacnejší |
| Guzzanti GZ 137 | 33.50 € | **33.00 €** | 11.1 % | **9.5 %** | 33.25 € | stávame sa najlacnejší |
| Maxxo HiFi Tuner TR05 | 138.50 € | **138.00 €** | 10.3 % | **9.9 %** | 138.25 € | stávame sa najlacnejší |
| Fixed sklo Apple iPho 17P FIXGA2-1602-BK | 18.50 € | **18.00 €** | 10.0 % | **7.1 %** | 18.25 € | stávame sa najlacnejší |
| IVO I133 aktivní rozbočovač 8x výstup"F" 18dB zisk +... | 55.50 € | **55.00 €** | 16.7 % | **15.7 %** | 55.25 € | stávame sa najlacnejší |
| Bezdrátové digitální bazénové čidlo GARNI 065P | 23.00 € | **22.50 €** | 15.9 % | **13.3 %** | 22.76 € | stávame sa najlacnejší |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 14.50 € | **14.00 €** | 47.4 % | **42.3 %** | 14.27 € | stávame sa najlacnejší |
| Gorenje F492PW | 173.50 € | **173.00 €** | 7.7 % | **7.4 %** | 173.28 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.5 % | **8.1 %** | 10.29 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.50 € | **16.00 €** | 12.4 % | **8.9 %** | 16.29 € | stávame sa najlacnejší |
| Resto 90504 French press 800ml | 13.50 € | **13.00 €** | 13.7 % | **9.5 %** | 13.29 € | stávame sa najlacnejší |
| DOMO DO9279W | 51.50 € | **51.00 €** | 10.9 % | **9.8 %** | 51.29 € | stávame sa najlacnejší |
| Barkan 4400 polohovací držák pro TV 32"-80" | 84.00 € | **83.50 €** | 18.1 % | **17.4 %** | 83.79 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 12.00 € | **11.50 €** | 18.0 % | **13.1 %** | 11.79 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.00 € | **11.50 €** | 12.0 % | **7.3 %** | 11.79 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **27.50 €** | 13.9 % | **11.9 %** | 27.79 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.50 € | **37.00 €** | 21.5 % | **19.8 %** | 37.29 € | stávame sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 62.50 € | **62.00 €** | 6.2 % | **5.3 %** | 62.29 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.00 € | **15.50 €** | 9.9 % | **6.4 %** | 15.79 € | stávame sa najlacnejší |
| Zdroj záložní Rebel POWER-800 RB-4002 500W 12V | 85.50 € | **85.00 €** | 7.8 % | **7.2 %** | 85.29 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 29.00 € | **28.50 €** | 31.0 % | **28.7 %** | 28.79 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **12.00 €** | 14.3 % | **9.7 %** | 12.29 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.0 % | **9.5 %** | 22.30 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L430C(2-pack) E14, 4,8W,... | 28.50 € | **28.00 €** | 33.0 % | **30.7 %** | 28.30 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom tmavé drevo 200 ml | 14.00 € | **13.50 €** | 14.3 % | **10.2 %** | 13.83 € | stávame sa najlacnejší |
| ER CS poutko AirTag ERCSATGLO-BR-CN | 11.50 € | **11.00 €** | 11.7 % | **6.8 %** | 11.33 € | stávame sa najlacnejší |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 26.50 € | **26.00 €** | 30.7 % | **28.2 %** | 26.35 € | stávame sa najlacnejší |
| Pedrini Infinity červená 6 porcí | 36.50 € | **36.00 €** | 11.3 % | **9.7 %** | 36.36 € | stávame sa najlacnejší |
| LED čelovka Cattara STRIP SENSOR 350lm nabíjacia | 12.00 € | **11.50 €** | 10.4 % | **5.8 %** | 11.86 € | stávame sa najlacnejší |
| Hula hoop REBEL ACTIVE RBA-3066-BL se závažím a masá... | 11.50 € | **11.00 €** | 25.7 % | **20.2 %** | 11.36 € | stávame sa najlacnejší |
| Leifheit 61521kuchyňská váha Page | 22.50 € | **22.00 €** | 10.3 % | **7.9 %** | 22.38 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm šedý lesk 500 ml | 22.50 € | **22.00 €** | 11.7 % | **9.3 %** | 22.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan bílé dřevo 350ml | 18.50 € | **18.00 €** | 12.6 % | **9.5 %** | 18.39 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan tmavé drevo 350 ml | 18.00 € | **17.50 €** | 9.5 % | **6.5 %** | 17.89 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.50 € | **27.00 €** | 15.1 % | **13.0 %** | 27.39 € | stávame sa najlacnejší |
| Nafukovací matrace Rebel RBA-5001-M jednolůžková 186... | 20.50 € | **20.00 €** | 12.0 % | **9.3 %** | 20.39 € | stávame sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 105.00 € | **104.50 €** | 29.8 % | **29.2 %** | 104.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 325.00 € | **324.50 €** | 10.4 % | **10.2 %** | 324.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 141.50 € | **141.00 €** | 9.1 % | **8.7 %** | 141.39 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 25.00 € | **24.50 €** | 10.3 % | **8.1 %** | 24.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 26.00 € | **25.50 €** | 11.0 % | **8.8 %** | 25.89 € | stávame sa najlacnejší |
| Laica VT3509 | 12.00 € | **11.50 €** | 10.5 % | **5.9 %** | 11.89 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.00 € | **11.50 €** | 12.0 % | **7.3 %** | 11.89 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 53.50 € | **53.00 €** | 7.4 % | **6.4 %** | 53.39 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 207.50 € | **207.00 €** | 11.5 % | **11.2 %** | 207.39 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 750 | 113.50 € | **113.00 €** | 8.9 % | **8.5 %** | 113.39 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 279.50 € | **279.00 €** | 7.3 % | **7.1 %** | 279.39 € | stávame sa najlacnejší |
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
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 15.00 € | **14.50 €** | 26.6 % | **22.4 %** | 14.90 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.00 € | **20.50 €** | 26.4 % | **23.4 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 16.00 € | **15.50 €** | 28.8 % | **24.8 %** | 15.90 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 60W, 7800l... | 50.00 € | **49.50 €** | 63.6 % | **62.0 %** | 49.90 € | stávame sa najlacnejší |
| Senzor Uni-T Flex Clamp UT-CS09D | 55.00 € | **54.50 €** | 14.9 % | **13.9 %** | 54.90 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 35.00 € | **34.50 €** | 7.9 % | **6.4 %** | 34.90 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 16.00 € | **15.50 €** | 15.9 % | **12.3 %** | 15.90 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 62.00 € | **61.50 €** | 13.1 % | **12.2 %** | 61.90 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 14.00 € | **13.50 €** | 17.6 % | **13.4 %** | 13.90 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 13.00 € | **12.50 €** | 28.4 % | **23.5 %** | 12.90 € | stávame sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 33.00 € | **32.50 €** | 11.5 % | **9.8 %** | 32.90 € | stávame sa najlacnejší |
| Dynamický mikrofon Maono PD200x (bílý) | 49.00 € | **48.50 €** | 14.5 % | **13.3 %** | 48.90 € | stávame sa najlacnejší |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 30.00 € | **29.50 €** | 14.5 % | **12.5 %** | 29.90 € | stávame sa najlacnejší |
| Vlákno Creality TPU (biele) | 16.00 € | **15.50 €** | 13.5 % | **10.0 %** | 15.90 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 16.00 € | **15.50 €** | 13.8 % | **10.3 %** | 15.90 € | stávame sa najlacnejší |
| Solight LED nabíjacie ručné svietidlo s power bankom... | 22.00 € | **21.50 €** | 37.2 % | **34.0 %** | 21.90 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **105.00 €** | 10.1 % | **9.6 %** | 105.40 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **89.50 €** | 14.8 % | **14.2 %** | 89.90 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Halo 30XN s nočním v... | 139.50 € | **139.00 €** | 8.1 % | **7.7 %** | 139.41 € | stávame sa najlacnejší |
| ALI CN GaN 33W, USB-C/USB-C, bí CHPD0021 | 17.50 € | **17.00 €** | 11.2 % | **8.1 %** | 17.41 € | stávame sa najlacnejší |
| Resto 90502 French press Atria 800 ml | 11.50 € | **11.00 €** | 12.9 % | **8.0 %** | 11.42 € | stávame sa najlacnejší |
| G3Ferrari G1022300 | 136.50 € | **136.00 €** | 10.2 % | **9.8 %** | 136.42 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 231.50 € | **231.00 €** | 17.6 % | **17.4 %** | 231.45 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 231.50 € | **231.00 €** | 17.6 % | **17.4 %** | 231.45 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 231.50 € | **231.00 €** | 17.6 % | **17.4 %** | 231.45 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 231.50 € | **231.00 €** | 17.6 % | **17.4 %** | 231.45 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 231.50 € | **231.00 €** | 17.6 % | **17.4 %** | 231.45 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Fashion Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| DOMO DO9283EK | 18.50 € | **18.00 €** | 12.7 % | **9.7 %** | 18.46 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.50 € | **16.00 €** | 18.0 % | **14.4 %** | 16.49 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC510 3MPx, venkovní, IP PTZ... | 33.50 € | **33.00 €** | 7.7 % | **6.1 %** | 33.49 € | stávame sa najlacnejší |
| TESLA TE-344 venkovní anténa | 27.50 € | **27.00 €** | 45.8 % | **43.2 %** | 27.49 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1297.90 € | **1297.50 €** | 7.3 % | **7.2 %** | 1297.79 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.90 € | **64.50 €** | 6.1 % | **5.5 %** | 64.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G1022600 | 120.90 € | **120.50 €** | 10.2 % | **9.8 %** | 120.70 € | stávame sa najlacnejší |
| G3Ferrari G1000606 Pizza trouba DELIZIA | 110.90 € | **110.50 €** | 10.2 % | **9.8 %** | 110.70 € | stávame sa najlacnejší |
| Thomson MIC201IBT | 113.90 € | **113.50 €** | 11.6 % | **11.2 %** | 113.79 € | stávame sa najlacnejší |
| Girmi FG9201 | 116.90 € | **116.50 €** | 10.1 % | **9.7 %** | 116.82 € | stávame sa najlacnejší |
| Girmi FG4101 | 139.90 € | **139.50 €** | 10.1 % | **9.7 %** | 139.83 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 74.90 € | **74.50 €** | 7.8 % | **7.2 %** | 74.89 € | stávame sa najlacnejší |
| Nescafé Dolce Gusto Latte Macchiato 30ca | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 4.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta ZR009001 | 10.90 € | **10.50 €** | 12.3 % | **8.2 %** | 6.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ali pouzdro Mag-Skin iP17 ProMax PAS0029 | 14.90 € | **14.50 €** | 11.3 % | **8.4 %** | 10.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Nano WiFi Adaptér | 10.90 € | **10.50 €** | 11.3 % | **7.2 %** | 8.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer T2U Plus WiFi Adaptér | 14.90 € | **14.50 €** | 11.0 % | **8.1 %** | 12.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto ESPRESSO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nesmeky na boty REBEL ACTIVE RBA-5000-XL ( 44 - 47 ) | 13.90 € | **13.50 €** | 9.8 % | **6.7 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAFE AU LAIT 30Cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| NESCAFÉ® DG Flat White kapsle 30 ks | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 8.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo TopSound černý | 12.90 € | **12.50 €** | 10.1 % | **6.6 %** | 10.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON GI-41 BK Black | 10.90 € | **10.50 €** | 13.9 % | **9.7 %** | 8.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nescafé Dolce Gusto CAPPUCCINO 30 cap | 10.90 € | **10.50 €** | 13.8 % | **9.6 %** | 9.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Razer Goliathus Mobile Stealth Ed. | 10.90 € | **10.50 €** | 13.2 % | **9.0 %** | 9.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed držák do auta FIXICQ-FLEXXL-BK | 15.90 € | **15.50 €** | 10.1 % | **7.3 %** | 15.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.90 € | **12.50 €** | 12.8 % | **9.3 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Perfect Steam Air Board S/M | 14.90 € | **14.50 €** | 11.6 % | **8.7 %** | 14.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo vodní filtry 3+1 | 11.90 € | **11.50 €** | 11.2 % | **7.5 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALI držák do auta s Magsafe AMS06BK | 15.90 € | **15.50 €** | 11.0 % | **8.2 %** | 15.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nabíjacia RGB lucerna, Li-Ion, USB-C | 9.60 € | **9.20 €** | 54.6 % | **48.1 %** | 9.30 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 9W, 900lm,... | 7.50 € | **7.10 €** | 38.3 % | **30.9 %** | 7.20 € | stávame sa najlacnejší |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.40 € | **5.00 €** | 45.4 % | **34.6 %** | 5.10 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 20x LED, 2m... | 3.20 € | **2.80 €** | 53.9 % | **34.7 %** | 2.90 € | stávame sa najlacnejší |
| Solight vidlica priama, 5-pólová, 400v/16A, IP44 | 5.50 € | **5.10 €** | 36.3 % | **26.4 %** | 5.20 € | stávame sa najlacnejší |
| Solight zásuvka priama, 5-pólová, 400v/16A, IP44 | 6.20 € | **5.80 €** | 36.6 % | **27.8 %** | 5.90 € | stávame sa najlacnejší |
| Solight filter pre Dyson V11, V15 | 7.00 € | **6.60 €** | 30.8 % | **23.4 %** | 6.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.90 € | **4.50 €** | 18.6 % | **8.9 %** | 4.60 € | stávame sa najlacnejší |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.90 € | **5.50 €** | 45.4 % | **35.5 %** | 5.60 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 10.00 € | **9.60 €** | 26.8 % | **21.8 %** | 9.70 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.90 € | **13.50 €** | 13.5 % | **10.2 %** | 13.69 € | stávame sa najlacnejší |
| Superior FREEDOM 4v1 USB | 11.90 € | **11.50 €** | 13.8 % | **10.0 %** | 11.71 € | stávame sa najlacnejší |
| CL držák vent. horiz., černý HANDYDRIVEK | 10.90 € | **10.50 €** | 11.9 % | **7.8 %** | 10.71 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.79 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 350 ml, oceľovo šedá | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.79 € | stávame sa najlacnejší |
| ETA 713240002 | 11.90 € | **11.50 €** | 12.9 % | **9.1 %** | 11.79 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 680 ml, nerezová | 11.90 € | **11.50 €** | 19.0 % | **15.0 %** | 11.80 € | stávame sa najlacnejší |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.90 € | **14.50 €** | 9.4 % | **6.5 %** | 14.89 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.60 € | **1.20 €** | 44.5 % | **8.4 %** | 1.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.70 €** | 56.6 % | **26.8 %** | 1.80 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 0,75mm2, čierna, plochá, 2m | 2.10 € | **1.70 €** | 47.2 % | **19.1 %** | 1.80 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 1.60 € | **1.20 €** | 51.3 % | **13.4 %** | 1.30 € | stávame sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 10mm zacvaká... | 1.30 € | **0.90 €** | 60.1 % | **10.9 %** | 0.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm zdier... | 1.30 € | **0.90 €** | 60.1 % | **10.9 %** | 1.00 € | stávame sa najlacnejší |
| Solight prepojovací konektor pevný pre COB LED pásy,... | 1.30 € | **0.90 €** | 60.1 % | **10.9 %** | 1.00 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre LED pásy, 8mm, zacv... | 1.30 € | **0.90 €** | 60.1 % | **10.9 %** | 1.00 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, s priebežnou zásuvkou | 1.70 € | **1.30 €** | 44.0 % | **10.1 %** | 1.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight napájací konektor pre COB LED pásy, opasok-n... | 1.50 € | **1.10 €** | 56.3 % | **14.7 %** | 1.20 € | stávame sa najlacnejší |
| Solight prepojovací konektor flexibilný pre COB LED ... | 2.00 € | **1.60 €** | 52.0 % | **21.6 %** | 1.70 € | stávame sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.60 €** | 57.9 % | **26.3 %** | 1.70 € | stávame sa najlacnejší |
| Solight LED reťaz retiazka s dekoráciami, 20LED reťa... | 2.40 € | **2.00 €** | 57.4 % | **31.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight LED reťaz s ozdobnými príveskami 20LED, 60x ... | 3.10 € | **2.70 €** | 52.7 % | **33.0 %** | 2.80 € | stávame sa najlacnejší |
| Solight LED žiarivka lineárna T8, 18W, 2520lm, 4000K... | 4.00 € | **3.60 €** | 48.5 % | **33.6 %** | 3.70 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 200mm, čierna... | 1.50 € | **1.10 €** | 52.4 % | **11.8 %** | 1.20 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.50 € | **1.10 €** | 50.6 % | **10.4 %** | 1.20 € | stávame sa najlacnejší |
| Solight rozbočovač, 5 x 2,5A, biely | 1.90 € | **1.50 €** | 47.1 % | **16.1 %** | 1.60 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.40 €** | 45.9 % | **25.1 %** | 2.50 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky | 2.00 € | **1.60 €** | 40.2 % | **12.1 %** | 1.70 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 3 zásuvky, vypínač | 2.90 € | **2.50 €** | 50.2 % | **29.5 %** | 2.60 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.30 € | **2.90 €** | 49.1 % | **31.0 %** | 3.00 € | stávame sa najlacnejší |
| Solight zástrčka gumová do vlhka a prachu, priama, I... | 2.30 € | **1.90 €** | 47.2 % | **21.6 %** | 2.00 € | stávame sa najlacnejší |
| Solight vypínač Slim č. 6 striedavý - schodiskový, b... | 3.00 € | **2.60 €** | 41.0 % | **22.2 %** | 2.70 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 5.10 € | **4.70 €** | 40.1 % | **29.1 %** | 4.80 € | stávame sa najlacnejší |
| Solight fast charger do auta 30W USB-C + A | 4.10 € | **3.70 €** | 46.2 % | **31.9 %** | 3.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.30 € | **4.90 €** | 38.1 % | **27.7 %** | 5.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.60 € | **7.20 €** | 37.0 % | **29.8 %** | 7.30 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.10 € | **6.70 €** | 36.1 % | **28.5 %** | 6.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.10 € | **5.70 €** | 27.5 % | **19.1 %** | 5.80 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.55 € | stávame sa najlacnejší |
| Bravo Kery B-4660 400W bílý | 35.90 € | **35.50 €** | 10.7 % | **9.5 %** | 35.63 € | stávame sa najlacnejší |
| Tefal Copertinto BL439G10 | 59.90 € | **59.50 €** | 10.5 % | **9.7 %** | 59.67 € | stávame sa najlacnejší |
| Cabletech UCH0022-S | 20.90 € | **20.50 €** | 8.2 % | **6.1 %** | 20.68 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.69 € | stávame sa najlacnejší |
| PIR senzor (pohybové čidlo) ORNO OR-CR-271/W | 16.90 € | **16.50 €** | 14.4 % | **11.7 %** | 16.69 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 60.90 € | **60.50 €** | 21.6 % | **20.8 %** | 60.69 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Palm biele drevo 500 ml | 22.90 € | **22.50 €** | 13.7 % | **11.7 %** | 22.73 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Russell Hobbs 24010-56 | 40.90 € | **40.50 €** | 10.5 % | **9.5 %** | 40.79 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3237 | 24.90 € | **24.50 €** | 17.8 % | **15.9 %** | 24.79 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.90 € | **23.50 €** | 14.4 % | **12.5 %** | 23.79 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan svetlé drevo 350 ml | 17.90 € | **17.50 €** | 8.9 % | **6.5 %** | 17.80 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 1900 ml, nerezová | 16.90 € | **16.50 €** | 18.2 % | **15.4 %** | 16.80 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.5 % | **15.0 %** | 31.80 € | stávame sa najlacnejší |
| Gorenje MVC72HGA | 29.90 € | **29.50 €** | 10.1 % | **8.6 %** | 29.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 27.90 € | **27.50 €** | 14.7 % | **13.0 %** | 27.83 € | stávame sa najlacnejší |
| Múdra žiarovka TP-Link Tapo L535E E27, 8,7W, 230V, c... | 23.90 € | **23.50 €** | 32.8 % | **30.6 %** | 23.87 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.50 €** | 10.3 % | **9.0 %** | 32.88 € | stávame sa najlacnejší |
| Gorenje NRK6182PS4 | 334.90 € | **334.50 €** | 7.1 % | **7.0 %** | 334.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.40 € | **4.10 €** | 13.9 % | **6.2 %** | 4.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.90 € | **8.60 €** | 9.3 % | **5.6 %** | 8.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.70 €** | 38.7 % | **34.6 %** | 9.80 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, biela | 10.00 € | **9.70 €** | 38.7 % | **34.6 %** | 9.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.90 € | **8.60 €** | 33.3 % | **28.8 %** | 8.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.50 € | **8.20 €** | 35.8 % | **31.0 %** | 8.30 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.70 € | **3.40 €** | 46.7 % | **34.8 %** | 3.50 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky | 2.60 € | **2.30 €** | 47.8 % | **30.8 %** | 2.40 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 2.70 € | **2.40 €** | 34.7 % | **19.7 %** | 2.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.40 €** | 26.9 % | **12.8 %** | 2.50 € | stávame sa najlacnejší |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.60 € | **3.30 €** | 24.5 % | **14.2 %** | 3.40 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, zdierka 5,5 ... | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 4000K, 260l... | 1.00 € | **0.70 €** | 53.4 % | **7.4 %** | 0.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.30 € | **1.00 €** | 46.8 % | **12.9 %** | 1.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E27, 4000K, 720lm | 1.30 € | **1.00 €** | 46.8 % | **12.9 %** | 1.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight viazacie nylonové pásky, 2,5 x 200mm, natura... | 1.10 € | **0.80 €** | 59.7 % | **16.1 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vypínač šnúrový, jednopólový priechodný, čierny | 1.10 € | **0.80 €** | 54.2 % | **12.1 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight zástrčka priama s úchytom, IP20, biela | 1.30 € | **1.00 €** | 46.8 % | **12.9 %** | 1.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight anténny koaxiálny kábel, kombinované konekto... | 1.10 € | **0.80 €** | 56.9 % | **14.1 %** | 0.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepojovací kábel pre LED pásy, 8mm zacvakáv... | 1.30 € | **1.00 €** | 51.0 % | **16.1 %** | 1.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepojovací pravouhlý konektor pre LED pásy,... | 2.00 € | **1.70 €** | 57.9 % | **34.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight napájací konektor pre LED pásy, 5,5 mm, rozb... | 2.00 € | **1.70 €** | 52.0 % | **29.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E14, 6000K, 510lm | 1.00 € | **0.70 €** | 53.4 % | **7.4 %** | 0.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 1.00 € | **0.70 €** | 53.4 % | **7.4 %** | 0.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 3000K,... | 1.10 € | **0.80 €** | 56.9 % | **14.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 7W, E27, 4000K,... | 1.10 € | **0.80 €** | 56.9 % | **14.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 6W, E27, 4000K, 510lm | 1.00 € | **0.70 €** | 53.4 % | **7.4 %** | 0.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.30 € | **1.00 €** | 46.8 % | **12.9 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka, miniglobe, 8W, E14, 4000K, 720... | 1.30 € | **1.00 €** | 46.8 % | **12.9 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 4000K, 510lm | 1.00 € | **0.70 €** | 53.4 % | **7.4 %** | 0.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 6W, E14, 6000K, 510lm | 1.00 € | **0.70 €** | 53.4 % | **7.4 %** | 0.80 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 3000K, 720lm | 1.30 € | **1.00 €** | 46.8 % | **12.9 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED žiarovka, sviečka, 8W, E14, 4000K, 720lm | 1.30 € | **1.00 €** | 46.8 % | **12.9 %** | 1.10 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.60 € | **1.30 €** | 36.9 % | **11.3 %** | 1.40 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.80 € | **1.50 €** | 29.5 % | **7.9 %** | 1.60 € | stávame sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, biela | 1.10 € | **0.80 €** | 49.1 % | **8.4 %** | 0.90 € | stávame sa najlacnejší |
| Solight USB kábel, USB 2.0 A konektor - USB B micro ... | 1.10 € | **0.80 €** | 56.9 % | **14.1 %** | 0.90 € | stávame sa najlacnejší |
| Solight viazacie nylonové pásky, 3,6 x 150mm, čierna... | 1.20 € | **0.90 €** | 54.9 % | **16.1 %** | 0.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight zástrčka priama, IP20, biela | 1.20 € | **0.90 €** | 47.8 % | **10.9 %** | 0.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **0.90 €** | 47.8 % | **10.9 %** | 1.00 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.20 € | **0.90 €** | 47.8 % | **10.9 %** | 1.00 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.20 € | **0.90 €** | 47.8 % | **10.9 %** | 1.00 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.20 € | **0.90 €** | 47.8 % | **10.9 %** | 1.00 € | stávame sa najlacnejší |
| Solight zástrčka uhlová, IP20, biela | 1.20 € | **0.90 €** | 43.5 % | **7.6 %** | 1.00 € | stávame sa najlacnejší |
| Solight UTP CAT.5E kábel, RJ45 konektor - RJ45 konek... | 2.30 € | **2.00 €** | 52.0 % | **32.2 %** | 2.03 € | stávame sa najlacnejší |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 5.10 € | **4.80 €** | 44.0 % | **35.5 %** | 4.90 € | stávame sa najlacnejší |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.00 € | **7.70 €** | 38.4 % | **33.2 %** | 7.80 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.60 € | **6.30 €** | 32.5 % | **26.5 %** | 6.40 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.10 € | **7.80 €** | 17.0 % | **12.6 %** | 7.90 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 30x mini LED, 3m, 3 x... | 1.90 € | **1.60 €** | 51.4 % | **27.5 %** | 1.70 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.30 € | **2.00 €** | 50.8 % | **31.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.30 € | **2.00 €** | 50.8 % | **31.1 %** | 2.10 € | stávame sa najlacnejší |
| Solight LED žiarovka retro, sviečka 4W, E14, 3000K, ... | 1.90 € | **1.60 €** | 51.4 % | **27.5 %** | 1.70 € | stávame sa najlacnejší |
| ECOLUX LED žiarovka Ecolux 3-pack, miniglobe, 6W, E2... | 2.50 € | **2.20 €** | 50.6 % | **32.5 %** | 2.30 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, biely | 2.50 € | **2.20 €** | 47.3 % | **29.6 %** | 2.30 € | stávame sa najlacnejší |
| Solight kefka na čistenie filtra pre Dyson Airwrap | 4.00 € | **3.70 €** | 22.7 % | **13.5 %** | 3.80 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.70 €** | 20.8 % | **15.7 %** | 6.80 € | stávame sa najlacnejší |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.60 € | **4.30 €** | 38.5 % | **29.5 %** | 4.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.00 € | **3.70 €** | 36.6 % | **26.4 %** | 3.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.90 € | **3.60 €** | 32.7 % | **22.5 %** | 3.70 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.60 € | **5.30 €** | 35.1 % | **27.9 %** | 5.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.80 € | **7.50 €** | 33.8 % | **28.6 %** | 7.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.00 € | **4.70 €** | 36.4 % | **28.2 %** | 4.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.70 € | **4.40 €** | 37.0 % | **28.2 %** | 4.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.30 € | **5.00 €** | 35.9 % | **28.2 %** | 5.10 € | stávame sa najlacnejší |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.90 € | **1.60 €** | 45.7 % | **22.7 %** | 1.70 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.50 € | **4.20 €** | 37.0 % | **27.9 %** | 4.30 € | stávame sa najlacnejší |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.60 € | **9.30 €** | 19.3 % | **15.6 %** | 9.40 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.70 € | **9.40 €** | 36.2 % | **32.0 %** | 9.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.10 € | **2.90 €** | 16.1 % | **8.7 %** | 2.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **3.80 €** | 11.4 % | **5.8 %** | 3.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.10 € | **1.90 €** | 56.6 % | **41.7 %** | 1.94 € | stávame sa najlacnejší |
| Solight LED dekorácie závesná, les a jeleň, biela a ... | 5.70 € | **5.50 €** | 44.4 % | **39.3 %** | 5.60 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10 A, biely, vypínač | 2.20 € | **2.00 €** | 34.5 % | **22.3 %** | 2.10 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, biely | 2.60 € | **2.40 €** | 35.5 % | **25.1 %** | 2.50 € | stávame sa najlacnejší |
| Solight univerzálny sieťový adaptér 1000mA, stabiliz... | 7.20 € | **7.00 €** | 15.5 % | **12.2 %** | 7.10 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 5.50 € | **5.30 €** | 17.7 % | **13.4 %** | 5.40 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 4.20 € | **4.00 €** | 36.0 % | **29.6 %** | 4.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 5.70 € | **5.50 €** | 35.5 % | **30.7 %** | 5.60 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 4.00 € | **3.80 €** | 33.8 % | **27.1 %** | 3.90 € | stávame sa najlacnejší |
| Solight izolačná páska, 38mm x 0,13mm x 10m, čierna | 1.10 € | **0.90 €** | 42.0 % | **16.1 %** | 0.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight zásuvka plochá 2.5A, priama, IP20, čierna | 1.10 € | **0.90 €** | 49.1 % | **22.0 %** | 1.00 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 2,5A, biela | 1.20 € | **1.00 €** | 35.5 % | **12.9 %** | 1.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight zásuvka priama, IP20, biela | 1.40 € | **1.20 €** | 32.4 % | **13.4 %** | 1.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 6000K... | 1.50 € | **1.30 €** | 48.7 % | **28.9 %** | 1.40 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, čierna | 1.70 € | **1.50 €** | 45.5 % | **28.4 %** | 1.60 € | stávame sa najlacnejší |
| Solight rozbočka, 3x 10A, biela | 1.90 € | **1.70 €** | 35.5 % | **21.2 %** | 1.80 € | stávame sa najlacnejší |
| Solight zástrčka priama, IP20, čierna | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight zásuvka, 16A, biela, vypínač | 1.80 € | **1.60 €** | 34.3 % | **19.3 %** | 1.70 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.40 € | **2.20 €** | 52.4 % | **39.7 %** | 2.28 € | stávame sa najlacnejší |
| Solight LED nástenná dekorácia vianočný stromček, 24... | 3.30 € | **3.10 €** | 19.8 % | **12.5 %** | 3.20 € | stávame sa najlacnejší |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.10 €** | 19.8 % | **12.5 %** | 3.20 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 3,5W, 3000K, 300lm | 2.40 € | **2.20 €** | 44.5 % | **32.5 %** | 2.30 € | stávame sa najlacnejší |
| Solight LED žiarovka G9, 4,5W, 3000K, 400lm | 2.80 € | **2.60 €** | 49.8 % | **39.1 %** | 2.70 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.10 € | **7.90 €** | 17.0 % | **14.1 %** | 8.00 € | stávame sa najlacnejší |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.10 € | **5.90 €** | 13.2 % | **9.5 %** | 6.00 € | stávame sa najlacnejší |
| Solight digitálny týždenný časový spínač, 16 režimov... | 8.10 € | **7.90 €** | 36.6 % | **33.3 %** | 8.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 8.10 € | **7.90 €** | 38.1 % | **34.6 %** | 8.00 € | stávame sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 70 | 279.00 € | **278.90 €** | 8.0 % | **7.9 %** | 278.99 € | stávame sa najlacnejší |
| Beper BEP-BP654 | 27.00 € | **26.90 €** | 10.4 % | **10.0 %** | 26.92 € | stávame sa najlacnejší |
| Bravo B-4813 Žehlička SERENA červená | 46.00 € | **45.90 €** | 10.1 % | **9.8 %** | 45.92 € | stávame sa najlacnejší |
| Candy CFT610/5X/1 | 48.00 € | **47.90 €** | 6.8 % | **6.6 %** | 47.95 € | stávame sa najlacnejší |
| ETA Verto II 1423 90000 bílý/zlatý | 31.00 € | **30.90 €** | 12.1 % | **11.7 %** | 30.96 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 28.00 € | **27.90 €** | 13.4 % | **13.0 %** | 27.98 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.60 € | **3.50 €** | 52.4 % | **48.2 %** | 3.59 € | stávame sa najlacnejší |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.20 € | **9.10 €** | 39.5 % | **38.0 %** | 9.16 € | stávame sa najlacnejší |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 6.00 € | **5.90 €** | 12.9 % | **11.0 %** | 5.99 € | stávame sa najlacnejší |
| Rádio NEDIS RDDBCR2000GN nouzové DAB+/FM, ruční klik... | 67.00 € | **66.90 €** | 5.2 % | **5.0 %** | 65.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1801 | 238.00 € | **237.90 €** | 42899.1 % | **42881.0 %** | 237.97 € | stávame sa najlacnejší |
| Electrolux LIB60420CK | 204.00 € | **203.90 €** | 7.5 % | **7.5 %** | 203.97 € | stávame sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 75.00 € | **74.90 €** | 7.3 % | **7.2 %** | 74.99 € | stávame sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 201.00 € | **200.90 €** | 10.0 % | **9.9 %** | 200.99 € | stávame sa najlacnejší |

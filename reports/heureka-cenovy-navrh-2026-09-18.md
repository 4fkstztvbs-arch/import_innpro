# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-18

Vstup: `premiumstore-sk_2026-09-18_12-54.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6764**
- Návrh **zvýšiť** cenu: **179** produktov
- Návrh **znížiť** cenu: **1118** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5467** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **312**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **371**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (179)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **127.00 €** | 15.0 % | **24.9 %** | 116.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED MagRound 3 držák s MgS FIXMRO3-BK | 22.50 € | **32.00 €** | 12.1 % | **59.4 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.90 € | **26.00 €** | 8.5 % | **28.8 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mixér G21 VitalStick 800 W, Black | 46.50 € | **49.90 €** | 9.0 % | **16.9 %** | 46.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mixér G21 VitalStick 800 W, Red/Black | 46.50 € | **49.90 €** | 9.0 % | **16.9 %** | 46.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator TWS sluchátka Pods ANC TWS08WT | 14.50 € | **17.50 €** | 10.7 % | **33.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 66.90 € | **69.50 €** | 5.8 % | **9.9 %** | 66.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 52127 Set Clean Twist M Ergo | 41.90 € | **43.90 €** | 10.3 % | **15.6 %** | 43.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje MO20A3WH | 73.50 € | **75.50 €** | 10.3 % | **13.3 %** | 75.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hrniec Berlingerhaus s mramorovým povrchom a pokriev... | 26.90 € | **28.90 €** | 5.9 % | **13.8 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Russell Hobbs 26380-70 | 38.50 € | **40.50 €** | 5.7 % | **11.2 %** | 38.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **16.90 €** | 10.6 % | **25.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 112.50 € | **113.90 €** | 10.2 % | **11.6 %** | 113.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.50 € | **31.90 €** | 11.3 % | **16.5 %** | 31.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Podlahový mop Picobello M Micro | 18.50 € | **19.90 €** | 5.5 % | **13.5 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 4.80 € | **5.90 €** | 19.7 % | **47.1 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.90 € | **15.00 €** | 12.0 % | **20.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel kúpeľňový 2v1, 3CCT, podhľado... | 8.80 € | **9.90 €** | 21.7 % | **36.9 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 13.90 € | **14.90 €** | 12.0 % | **20.1 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 0028 92020 | 67.00 € | **68.00 €** | 10.2 % | **11.8 %** | 68.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 5.40 € | **6.40 €** | 15.5 % | **36.9 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 101 | 156.90 € | **157.90 €** | 7.2 % | **7.9 %** | 156.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 18.90 € | **19.50 €** | 17.8 % | **21.6 %** | 18.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.20 € | **9.80 €** | 25.7 % | **33.9 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy OFFICE M40 Vertical | 13.90 € | **14.50 €** | 11.3 % | **16.1 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.50 € | **38.00 €** | 10.7 % | **12.1 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 33.00 € | **33.50 €** | 31.5 % | **33.4 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 51.00 € | **51.50 €** | 29.4 % | **30.7 %** | 51.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.00 € | **12.50 €** | 18.5 % | **23.5 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 33.00 € | **33.50 €** | 26.7 % | **28.7 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 32.00 € | **32.50 €** | 31.2 % | **33.2 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED 2v1 vonkajšia vianočná reťaz, gule, diaľ... | 14.00 € | **14.50 €** | 39.0 % | **43.9 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený vianočný stromek s dekoráciami, ... | 35.00 € | **35.50 €** | 41.0 % | **43.0 %** | 35.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 11.00 € | **11.50 €** | 35.1 % | **41.2 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočný kolotoč, otáčajúci sa, 7x LED, ... | 14.00 € | **14.50 €** | 40.0 % | **45.0 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 11.00 € | **11.50 €** | 38.9 % | **45.2 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenný keramický ohrievač, 2000 W, čierne | 31.00 € | **31.50 €** | 4.8 % | **6.5 %** | 31.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 19.00 € | **19.50 €** | 21.4 % | **24.6 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Xtreme 3 black | 188.00 € | **188.50 €** | 9.9 % | **10.2 %** | 188.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor kľúčenka, Find My kompatibilný | 19.00 € | **19.50 €** | 36.1 % | **39.7 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.00 € | **10.50 €** | 15.8 % | **21.6 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.00 € | **10.50 €** | 9.4 % | **14.9 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 32.00 € | **32.50 €** | 25.8 % | **27.8 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 11.00 € | **11.50 €** | 10.5 % | **15.6 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 10.00 € | **10.50 €** | 5.9 % | **11.2 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.50 €** | 16.9 % | **18.6 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 121.50 € | **122.00 €** | 15.0 % | **15.5 %** | 121.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **36.50 €** | 14.6 % | **16.2 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **36.50 €** | 15.0 % | **16.6 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 14.00 € | **14.50 €** | 39.1 % | **44.1 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.00 € | **16.50 €** | 25.2 % | **29.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prídavná zásuvka pre GSM zásuvku | 36.00 € | **36.50 €** | 35.2 % | **37.1 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 1400lm, zoom, power... | 26.00 € | **26.50 €** | 40.0 % | **42.7 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje RK14CPS4 | 284.00 € | **284.50 €** | 7.8 % | **8.0 %** | 284.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 105.00 € | **105.50 €** | 9.6 % | **10.1 %** | 105.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux KGS64362XX | 198.00 € | **198.50 €** | 8.7 % | **9.0 %** | 198.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 210A | 213.50 € | **213.90 €** | 5.9 % | **6.1 %** | 213.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.50 € | **11.90 €** | 23.5 % | **27.8 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **12.90 €** | 15.2 % | **18.9 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 13.50 € | **13.90 €** | 21.8 % | **25.4 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.50 € | **14.90 €** | 18.4 % | **21.6 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.50 € | **10.90 €** | 26.3 % | **31.1 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.50 € | **11.90 €** | 40.8 % | **45.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový zvonček, 2 tlačidlá, do zásuvky, ... | 15.50 € | **15.90 €** | 3.7 % | **6.4 %** | 15.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.50 € | **10.90 €** | 41.3 % | **46.7 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.0 % | **13.8 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.50 € | **10.90 €** | 33.0 % | **38.0 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.50 € | **12.90 €** | 30.3 % | **34.5 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hyper PLA Filament Creality (Grey) | 11.50 € | **11.90 €** | 7.1 % | **10.8 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED adventný kalendár - kniha, 8x LED, 40x30... | 21.50 € | **21.90 €** | 5.6 % | **7.6 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 13.6 % | **16.1 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termoska G21 nerezová 3800 ml, čierno-sivá | 41.50 € | **41.90 €** | 16.1 % | **17.3 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.50 € | **21.90 €** | 31.5 % | **34.0 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.50 € | **18.90 €** | 17.5 % | **20.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight akumulátorové záhradné nožnice | 63.50 € | **63.90 €** | 15.9 % | **16.6 %** | 63.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vestavný blok zásuviek s posuvným krytom, 3 ... | 32.50 € | **32.90 €** | 17.3 % | **18.7 %** | 32.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rýchlovarná kanvica Hyundai VK309 | 24.50 € | **24.90 €** | 4.6 % | **6.3 %** | 24.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.50 € | **23.90 €** | 9.6 % | **11.5 %** | 23.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.50 € | **24.90 €** | 14.8 % | **16.7 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 16.50 € | **16.90 €** | 12.8 % | **15.6 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 27.50 € | **27.90 €** | 13.0 % | **14.7 %** | 27.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **19.90 €** | 36.8 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 301.50 € | **301.90 €** | 6.3 % | **6.4 %** | 301.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.70 € | **9.00 €** | 9.0 % | **12.7 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Creality K2 Pro Combo | 748.90 € | **749.00 €** | 9.5 % | **9.5 %** | 748.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Boombox4 Black Přenosný reproduktor | 458.90 € | **459.00 €** | 6.8 % | **6.9 %** | 458.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| JBL Partybox Stage 320 | 418.90 € | **419.00 €** | 7.2 % | **7.2 %** | 418.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 15.9 % | **16.5 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 6.6 % | **7.1 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtová 15W vstavaná nabíjačka, biela | 20.90 € | **21.00 €** | 33.6 % | **34.2 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 27.90 € | **28.00 €** | 13.0 % | **13.4 %** | 27.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.70 € | **9.80 €** | 28.2 % | **29.6 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| GameSir G8+ Bluetooth mobile controller with phone h... | 60.90 € | **61.00 €** | 13.2 % | **13.4 %** | 60.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.10 € | **5.20 €** | 43.5 % | **46.3 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.80 € | **4.90 €** | 6.6 % | **8.8 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.70 €** | 38.0 % | **41.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.10 € | **4.20 €** | 20.3 % | **23.3 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 4.80 € | **4.90 €** | 31.8 % | **34.6 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.30 € | **4.40 €** | 11.3 % | **13.9 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.60 € | **4.70 €** | 34.0 % | **37.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.60 € | **4.70 €** | 32.1 % | **35.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.10 € | **5.20 €** | 25.6 % | **28.1 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.30 € | **3.40 €** | 19.8 % | **23.4 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.80 € | **3.90 €** | 43.0 % | **46.8 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.60 € | **3.70 €** | 42.8 % | **46.7 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E27, 3000K, 720lm | 1.20 € | **1.30 €** | 35.5 % | **46.8 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, týždeň, 1 režim | 3.80 € | **3.90 €** | 17.5 % | **20.6 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.90 € | **2.00 €** | 33.2 % | **40.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.30 € | **3.40 €** | 34.1 % | **38.2 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.10 € | **3.20 €** | 33.4 % | **37.7 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.40 € | **3.50 €** | 32.9 % | **36.8 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.80 € | **3.90 €** | 14.4 % | **17.4 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.70 €** | 15.7 % | **18.9 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 3.00 € | **3.10 €** | 12.4 % | **16.1 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.80 € | **3.90 €** | 29.3 % | **32.7 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.50 € | **3.60 €** | 31.7 % | **35.5 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.60 € | **3.70 €** | 41.4 % | **45.3 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **2.10 €** | 23.2 % | **29.3 %** | 2.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.50 € | **3.60 €** | 21.1 % | **24.5 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezpečnostná zátka - sada 5ks+1 kľúčik | 1.30 € | **1.40 €** | 30.5 % | **40.5 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 3000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.10 € | **1.20 €** | 35.5 % | **47.8 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.30 € | **1.40 €** | 22.9 % | **32.4 %** | 1.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.80 € | **1.90 €** | 38.1 % | **45.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.30 € | **8.40 €** | 13.8 % | **15.2 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Adrano s ochranou proti vlhko... | 8.80 € | **8.90 €** | 31.8 % | **33.3 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.50 € | **6.60 €** | 30.5 % | **32.5 %** | 6.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.50 € | **6.60 €** | 30.5 % | **32.5 %** | 6.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.00 € | **8.10 €** | 15.5 % | **17.0 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 8.00 € | **8.10 €** | 15.5 % | **17.0 %** | 8.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 7.90 € | **8.00 €** | 10.9 % | **12.3 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.70 € | **3.80 €** | 27.5 % | **30.9 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 9.80 € | **9.90 €** | 38.6 % | **40.0 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.50 € | **6.60 €** | 20.7 % | **22.5 %** | 6.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 26.3 % | **28.3 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 7.1 % | **8.7 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.30 €** | 32.1 % | **36.2 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Veľkej Británie, typ G | 5.40 € | **5.50 €** | 32.6 % | **35.1 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.10 € | **9.20 €** | 38.0 % | **39.5 %** | 9.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.40 € | **9.50 €** | 17.9 % | **19.2 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.90 € | **8.00 €** | 35.2 % | **36.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.70 € | **2.80 €** | 26.9 % | **31.6 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.50 € | **9.60 €** | 35.7 % | **37.2 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.20 € | **5.30 €** | 35.5 % | **38.1 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 5.40 € | **5.50 €** | 40.3 % | **42.9 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.50 € | **8.60 €** | 35.8 % | **37.4 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **5.30 €** | 34.6 % | **37.2 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 18.6 % | **21.0 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 5.4 % | **6.9 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 6.00 € | **6.10 €** | 25.4 % | **27.5 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.40 € | **4.50 €** | 34.0 % | **37.0 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.00 € | **9.10 €** | 10.5 % | **11.8 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.90 € | **10.00 €** | 25.6 % | **26.8 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fotopasca Camouflage EZ-Solar Wifi/Bluetooth | 228.90 € | **229.00 €** | 8.0 % | **8.0 %** | 228.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna smart WIFI meteostanica | 97.90 € | **98.00 €** | 18.8 % | **19.0 %** | 97.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1801 | 237.90 € | **238.00 €** | 42881.0 % | **42899.1 %** | 237.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1118)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| TCL 98C765 QD-MiniLED | 66811.50 € | **63774.90 €** | 10.0 % | **5.0 %** | 61952.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **2898.00 €** | 15.0 % | **5.5 %** | 2898.12 € | stávame sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2338.90 €** | 15.0 % | **5.0 %** | 1972.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75QN900F NEO QLED 8K | 4134.90 € | **3946.90 €** | 10.0 % | **5.0 %** | 3762.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 924.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2326.50 € | **2198.90 €** | 15.0 % | **8.7 %** | 2199.00 € | stávame sa najlacnejší |
| 3D tlačiareň QIDI Max 4 Combo | 1386.50 € | **1265.90 €** | 15.0 % | **5.0 %** | 1249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria FOSSIBOT FB3840 s kapacitou 3840 Wh | 1267.90 € | **1157.90 €** | 15.0 % | **5.0 %** | 1150.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE55S99H | 2236.50 € | **2134.90 €** | 10.0 % | **5.0 %** | 2059.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 256GB Lavender | 2200.50 € | **2100.50 €** | 10.0 % | **5.0 %** | 1360.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1441.90 € | **1346.50 €** | 15.0 % | **7.4 %** | 1346.85 € | stávame sa najlacnejší |
| MSI Cyborg 9S7-15QL42-080 | 1864.50 € | **1779.50 €** | 10.0 % | **5.0 %** | 1469.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality CR-Scan Raptor 3D Scanner | 950.00 € | **867.50 €** | 15.0 % | **5.0 %** | 800.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 954.50 € | **879.50 €** | 15.0 % | **6.0 %** | 879.52 € | stávame sa najlacnejší |
| MSI Katana 17 HX (B14WGK-282CZ) | 1637.90 € | **1563.50 €** | 10.0 % | **5.0 %** | 1264.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 854.50 € | **780.50 €** | 15.0 % | **5.0 %** | 620.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple iPhone 17 Pro Max 256GB Deep Blue | 1450.90 € | **1384.90 €** | 10.0 % | **5.0 %** | 1220.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 954.00 € | **889.90 €** | 15.0 % | **7.3 %** | 890.00 € | stávame sa najlacnejší |
| Apple iPhone 17 Pro 256GB Cosmic Orange | 1360.50 € | **1298.50 €** | 10.0 % | **5.0 %** | 1063.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov WYBOT M1C | 730.50 € | **669.90 €** | 15.0 % | **5.4 %** | 670.00 € | stávame sa najlacnejší |
| ANCEL DS600 BT – profesionálny diagnostický skener OBD2 | 586.50 € | **535.50 €** | 15.0 % | **5.0 %** | 529.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 839.50 € | **789.90 €** | 15.0 % | **8.2 %** | 790.00 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K1 Max 2025 | 561.90 € | **512.90 €** | 15.0 % | **5.0 %** | 427.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 22 GEN 3 (GS2203) | 542.90 € | **495.90 €** | 15.0 % | **5.1 %** | 406.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max Plus Gen2 robotický s ... | 230.00 € | **183.50 €** | 31.8 % | **5.2 %** | 142.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 612.50 € | **566.00 €** | 15.0 % | **6.3 %** | 566.36 € | stávame sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **486.90 €** | 15.0 % | **5.1 %** | 451.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LaserPecker LX2 40W laserový gravír | 1879.50 € | **1834.90 €** | 15.0 % | **12.3 %** | 1835.00 € | stávame sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **461.50 €** | 15.0 % | **5.1 %** | 421.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 983.90 € | **941.00 €** | 15.0 % | **10.0 %** | 941.15 € | stávame sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 478.50 € | **439.00 €** | 15.0 % | **5.5 %** | 439.12 € | stávame sa najlacnejší |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 767.50 € | **728.90 €** | 15.0 % | **9.2 %** | 729.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **392.50 €** | 14.9 % | **5.0 %** | 265.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L8180 | 808.90 € | **771.90 €** | 10.1 % | **5.0 %** | 678.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Luminiscenčná letová mapa DJI RoboMaster TT | 837.90 € | **801.00 €** | 15.0 % | **9.9 %** | 801.31 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 428.00 € | **391.50 €** | 14.9 % | **5.1 %** | 358.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus T2 smart bike trainer | 625.90 € | **589.90 €** | 15.0 % | **8.4 %** | 590.00 € | stávame sa najlacnejší |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 515.00 € | **479.90 €** | 15.0 % | **7.1 %** | 480.00 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 176.50 € | **142.00 €** | 32.0 % | **6.2 %** | 142.40 € | stávame sa najlacnejší |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 402.90 € | **368.90 €** | 15.0 % | **5.3 %** | 369.00 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 487.90 € | **454.00 €** | 15.0 % | **7.0 %** | 454.43 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C460 KIT 8MPx, vonkajšia, IP, Wi... | 159.50 € | **126.00 €** | 33.0 % | **5.1 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 456.50 € | **424.90 €** | 15.0 % | **7.1 %** | 424.99 € | stávame sa najlacnejší |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 358.50 € | **327.50 €** | 15.1 % | **5.1 %** | 271.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 3D printer | 403.00 € | **372.00 €** | 15.0 % | **6.1 %** | 372.42 € | stávame sa najlacnejší |
| PS5 PlayStation®5 Digital Edition–825GB | 671.50 € | **641.00 €** | 10.0 % | **5.0 %** | 579.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARRETT AT Max 8,5 x 11" INTL – detektor kovov | 760.00 € | **729.90 €** | 15.0 % | **10.4 %** | 730.00 € | stávame sa najlacnejší |
| EPSON EcoTank L8160 | 653.50 € | **623.90 €** | 10.0 % | **5.0 %** | 527.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 341.00 € | **311.50 €** | 14.9 % | **5.0 %** | 271.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C460 8MPx, vonkajšia, IP, WiFi, ... | 143.00 € | **113.50 €** | 32.8 % | **5.4 %** | 110.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM2000 | 686.50 € | **657.00 €** | 15.0 % | **10.0 %** | 657.06 € | stávame sa najlacnejší |
| Electrolux EWN7F447WI | 637.90 € | **608.90 €** | 10.0 % | **5.0 %** | 534.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **309.50 €** | 15.0 % | **5.1 %** | 292.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 433.90 € | **404.90 €** | 15.0 % | **7.3 %** | 404.93 € | stávame sa najlacnejší |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 524.00 € | **495.50 €** | 14.9 % | **8.7 %** | 495.71 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **402.50 €** | 15.0 % | **7.4 %** | 402.72 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C425 4MPx, vonkajší, IP, WiFi, p... | 130.50 € | **103.00 €** | 33.1 % | **5.0 %** | 85.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRB620C6X4WFE | 600.50 € | **573.00 €** | 10.0 % | **5.0 %** | 568.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 Pro Max 8/512GB Black | 604.90 € | **577.50 €** | 10.0 % | **5.0 %** | 493.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 Pro Max 8/512GB Blush | 604.90 € | **577.50 €** | 10.0 % | **5.0 %** | 493.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 Pro Max 8/512GB Green | 604.90 € | **577.50 €** | 10.0 % | **5.0 %** | 493.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 315.50 € | **288.50 €** | 15.0 % | **5.2 %** | 252.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple AirPods Max 2 - Midnight | 578.50 € | **552.00 €** | 10.0 % | **5.0 %** | 490.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čistiaci robot ULTENIC MX50 | 445.90 € | **419.90 €** | 15.0 % | **8.3 %** | 420.00 € | stávame sa najlacnejší |
| Projektor JMGO PicoPlay+ | 413.00 € | **387.00 €** | 14.9 % | **7.7 %** | 387.20 € | stávame sa najlacnejší |
| Lenovo Idea Tab Pro 8/128GB (ZAHD0017CZ) | 563.00 € | **537.50 €** | 10.0 % | **5.0 %** | 518.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 557.90 € | **532.50 €** | 10.1 % | **5.1 %** | 449.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C501GW 2MPx, vonkajšia, IP PTZ, ... | 119.90 € | **94.90 €** | 32.7 % | **5.0 %** | 74.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 50Q7C QD-MiniLED 4K SMART Google TV | 547.90 € | **522.90 €** | 10.1 % | **5.0 %** | 515.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Acer Aspire Lite 15 (NX.DRPEC.001) | 559.90 € | **534.90 €** | 10.0 % | **5.1 %** | 535.00 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 354.50 € | **329.50 €** | 15.1 % | **6.9 %** | 329.74 € | stávame sa najlacnejší |
| iiyama ProLite XCB4594DQSU-B1 | 538.50 € | **513.90 €** | 10.0 % | **5.0 %** | 507.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook 14 (X1404VA-EB2276WZ) | 541.00 € | **516.50 €** | 10.0 % | **5.0 %** | 329.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje NRK620AAXL4 | 640.50 € | **616.00 €** | 10.1 % | **5.9 %** | 616.50 € | stávame sa najlacnejší |
| Apple iPad 11" 128GB Silver | 530.50 € | **506.50 €** | 10.1 % | **5.1 %** | 377.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 Pro Max 8/256GB Black | 528.90 € | **504.90 €** | 10.0 % | **5.0 %** | 427.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 Pro Max 8/256GB Blush | 528.90 € | **504.90 €** | 10.0 % | **5.0 %** | 427.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 Pro Max 8/256GB Green | 528.90 € | **504.90 €** | 10.0 % | **5.0 %** | 427.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Yoga Tab 12/256GB (ZAG60160CZ) | 525.90 € | **502.00 €** | 10.0 % | **5.0 %** | 479.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 278.00 € | **254.50 €** | 14.9 % | **5.2 %** | 249.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **64.50 €** | 43.8 % | **5.5 %** | 61.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blender G21 Excellent white | 232.90 € | **209.50 €** | 18.3 % | **6.5 %** | 209.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 87.90 € | **64.50 €** | 43.8 % | **5.5 %** | 64.90 € | stávame sa najlacnejší |
| Redmi Note 17 Pro 5G 8/512GB Black | 507.90 € | **484.50 €** | 10.1 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 Pro 5G 8/512GB Purple | 507.90 € | **484.50 €** | 10.1 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 Pro 5G 8/512GB Sky Blue | 507.90 € | **484.50 €** | 10.1 % | **5.0 %** | 399.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy ECNBQT3518E Fresco | 496.90 € | **474.00 €** | 10.1 % | **5.0 %** | 441.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 217.00 € | **194.90 €** | 17.1 % | **5.2 %** | 167.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Tab Plus 8/256GB (ZAHT0126CZ) | 489.50 € | **467.50 €** | 10.0 % | **5.1 %** | 417.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AW | 478.50 € | **456.50 €** | 10.1 % | **5.0 %** | 427.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gaggia Classic E24 černá | 486.50 € | **464.50 €** | 10.0 % | **5.1 %** | 437.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 401.00 € | **379.00 €** | 11.1 % | **5.0 %** | 356.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 69.00 € | **47.00 €** | 58.9 % | **8.2 %** | 47.50 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 474.50 € | **452.90 €** | 10.0 % | **5.0 %** | 453.00 € | stávame sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 261.50 € | **239.90 €** | 19.9 % | **10.0 %** | 239.95 € | stávame sa najlacnejší |
| Whirlpool WOI4S8CM1SEA | 465.50 € | **444.00 €** | 10.1 % | **5.0 %** | 391.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFS26046XQ | 473.50 € | **452.00 €** | 10.0 % | **5.0 %** | 424.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AURZEN Boom Mini projektor | 250.50 € | **229.00 €** | 15.0 % | **5.2 %** | 229.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 92.00 € | **70.50 €** | 43.6 % | **10.1 %** | 70.90 € | stávame sa najlacnejší |
| Electrolux LBD4Z | 476.90 € | **455.50 €** | 10.0 % | **5.1 %** | 441.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 238.90 € | **218.00 €** | 24.6 % | **13.7 %** | 218.09 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C560WS 8MPx, vonkajšia, IP PTZ, ... | 102.00 € | **81.50 €** | 32.2 % | **5.6 %** | 66.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Tab Plus 8/128GB (ZAHT0170CZ) | 448.90 € | **428.50 €** | 10.1 % | **5.1 %** | 369.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung The Frame Pro QE75LS03HW | 2649.00 € | **2628.90 €** | 8.6 % | **7.7 %** | 2629.00 € | stávame sa najlacnejší |
| CANON i-SENSYS MF461dw | 440.90 € | **420.90 €** | 10.0 % | **5.0 %** | 322.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje W2PNA94A1W/CZ | 441.90 € | **421.90 €** | 10.1 % | **5.1 %** | 374.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 64.00 € | **44.00 €** | 53.9 % | **5.8 %** | 44.12 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (čierny) | 295.50 € | **275.50 €** | 15.1 % | **7.3 %** | 275.70 € | stávame sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 179.90 € | **160.00 €** | 27.4 % | **13.3 %** | 160.05 € | stávame sa najlacnejší |
| CANON MAXIFY GX2040 | 437.50 € | **417.90 €** | 10.0 % | **5.1 %** | 268.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 98.50 € | **78.90 €** | 44.0 % | **15.3 %** | 79.00 € | stávame sa najlacnejší |
| Apple AirPods Max Midnight (2024) | 433.00 € | **413.50 €** | 10.0 % | **5.1 %** | 365.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor BlitzWolf BW-V11 | 352.50 € | **333.00 €** | 15.0 % | **8.6 %** | 333.18 € | stávame sa najlacnejší |
| Redmi Note 17 Pro 5G 6/256GB Black | 423.00 € | **403.90 €** | 10.0 % | **5.0 %** | 321.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 Pro 5G 6/256GB Sky Blue | 423.00 € | **403.90 €** | 10.0 % | **5.0 %** | 321.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera NEDIS WIFICBO51WT SmartLife venkovní bateriov... | 157.50 € | **138.50 €** | 19.8 % | **5.3 %** | 78.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L6390 | 426.50 € | **407.50 €** | 10.0 % | **5.1 %** | 365.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **192.00 €** | 15.1 % | **5.0 %** | 173.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rooma Espresso A6 bílá | 483.50 € | **465.00 €** | 10.1 % | **5.9 %** | 465.50 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **191.50 €** | 15.0 % | **5.1 %** | 188.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE N619EAW4 | 392.90 € | **374.90 €** | 10.1 % | **5.1 %** | 374.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria FOSSIBOT FBP1200-B s kapacitou 1985 Wh (zelená) | 537.50 € | **519.90 €** | 15.0 % | **11.2 %** | 520.00 € | stávame sa najlacnejší |
| Ultima Apollo S90 Soundbar | 326.50 € | **308.90 €** | 14.9 % | **8.7 %** | 309.00 € | stávame sa najlacnejší |
| Chladící box TEESA TSA6002 40l, 12V/24V/230V/baterie... | 238.00 € | **220.90 €** | 13.1 % | **5.0 %** | 207.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L6370 | 371.90 € | **354.90 €** | 10.0 % | **5.0 %** | 292.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 160.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **176.00 €** | 15.1 % | **5.0 %** | 153.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 | 298.50 € | **281.90 €** | 15.0 % | **8.6 %** | 282.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C530WS 5MPx, vonkajšia, IP PTZ, ... | 81.50 € | **64.90 €** | 32.3 % | **5.4 %** | 59.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant MOZA RACING CS Pro RS093 | 363.00 € | **346.50 €** | 14.9 % | **9.7 %** | 346.90 € | stávame sa najlacnejší |
| Redmi Note 17 5G 6/256GB Black | 359.90 € | **343.50 €** | 10.1 % | **5.1 %** | 277.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 5G 6/256GB Purple | 359.90 € | **343.50 €** | 10.1 % | **5.1 %** | 277.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 5G 6/256GB Sky Teal | 359.90 € | **343.50 €** | 10.1 % | **5.1 %** | 277.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER MFC-T930DW | 352.50 € | **336.50 €** | 10.1 % | **5.1 %** | 243.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BOS6737E20FBG | 357.50 € | **341.50 €** | 10.1 % | **5.1 %** | 335.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C411 3MPx, vonkajšia, IP, Wi-Fi,... | 69.90 € | **54.00 €** | 36.0 % | **5.0 %** | 45.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70118CZ | 341.50 € | **325.90 €** | 10.0 % | **5.0 %** | 267.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70373CZ | 342.50 € | **326.90 €** | 10.0 % | **5.0 %** | 284.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BR 48SBL6G-S | 339.50 € | **323.90 €** | 10.1 % | **5.1 %** | 297.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RR8589CE | 413.50 € | **397.90 €** | 10.1 % | **5.9 %** | 398.00 € | stávame sa najlacnejší |
| Candy BR 26SSB6G-S | 347.50 € | **331.90 €** | 10.1 % | **5.1 %** | 332.00 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 199.90 € | **184.50 €** | 14.2 % | **5.4 %** | 184.82 € | stávame sa najlacnejší |
| Herný volant Moza Racing R5 Pro | 434.00 € | **418.90 €** | 15.0 % | **11.0 %** | 419.00 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 261.00 € | **245.90 €** | 14.9 % | **8.3 %** | 245.98 € | stávame sa najlacnejší |
| HP Color LaserJet 178nw (4ZB96A) | 333.50 € | **318.50 €** | 10.1 % | **5.1 %** | 223.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 5G 6/128GB Black | 325.90 € | **310.90 €** | 10.1 % | **5.0 %** | 240.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 5G 6/128GB Purple | 325.90 € | **310.90 €** | 10.1 % | **5.0 %** | 240.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 5G 6/128GB Sky Teal | 325.90 € | **310.90 €** | 10.1 % | **5.0 %** | 240.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5390 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5396 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **229.50 €** | 15.1 % | **8.0 %** | 229.69 € | stávame sa najlacnejší |
| GORENJE GS620C10S | 357.50 € | **342.50 €** | 10.1 % | **5.5 %** | 342.89 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 89.50 € | **74.90 €** | 44.0 % | **20.5 %** | 75.00 € | stávame sa najlacnejší |
| EPSON EcoTank L5316 | 323.00 € | **308.50 €** | 10.0 % | **5.1 %** | 275.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L5310 | 323.00 € | **308.50 €** | 10.0 % | **5.1 %** | 277.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **154.50 €** | 14.9 % | **5.1 %** | 152.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R619EAW6 | 497.50 € | **483.00 €** | 10.0 % | **6.8 %** | 483.11 € | stávame sa najlacnejší |
| Slúchadlá VIAIM Nano+ AI s hlasovým záznamníkom (zel... | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 103.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultimea Skywave X50 Soundbar | 422.90 € | **408.90 €** | 15.1 % | **11.2 %** | 409.00 € | stávame sa najlacnejší |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 334.50 € | **320.50 €** | 15.1 % | **10.3 %** | 320.73 € | stávame sa najlacnejší |
| EPSON EcoTank L4360 | 302.50 € | **288.90 €** | 10.1 % | **5.1 %** | 225.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L4366 | 302.50 € | **288.90 €** | 10.1 % | **5.1 %** | 225.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra X Combo | 553.50 € | **539.90 €** | 15.0 % | **12.2 %** | 540.00 € | stávame sa najlacnejší |
| EPSON WorkForce WF-100W | 295.90 € | **282.50 €** | 10.1 % | **5.2 %** | 237.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 49B8-S | 292.90 € | **279.50 €** | 10.1 % | **5.0 %** | 260.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Revopoint POP 4 Premium | 944.00 € | **930.90 €** | 15.0 % | **13.4 %** | 930.99 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C400 2MPx, vonkajšia, IP, WiFi, ... | 65.00 € | **51.90 €** | 32.2 % | **5.5 %** | 51.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 6/256GB Black | 283.50 € | **270.50 €** | 10.0 % | **5.0 %** | 237.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 6/256GB Purple | 283.50 € | **270.50 €** | 10.0 % | **5.0 %** | 237.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH98A9WO | 285.50 € | **272.50 €** | 10.0 % | **5.0 %** | 245.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 6/256GB Sky Teal | 283.50 € | **270.50 €** | 10.0 % | **5.0 %** | 254.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Sensazione černý | 344.90 € | **331.90 €** | 10.1 % | **5.9 %** | 332.00 € | stávame sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 194.50 € | **181.50 €** | 15.0 % | **7.3 %** | 181.83 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 81.50 € | **68.50 €** | 57.1 % | **32.0 %** | 68.90 € | stávame sa najlacnejší |
| ELECTROLUX LXB1SE11W0 | 273.50 € | **260.90 €** | 10.2 % | **5.1 %** | 241.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 244.50 € | **232.00 €** | 15.1 % | **9.2 %** | 232.20 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 310.50 € | **298.00 €** | 10.0 % | **5.6 %** | 298.50 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 345.50 € | **333.00 €** | 10.1 % | **6.1 %** | 333.50 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 133.90 € | **121.50 €** | 24.9 % | **13.3 %** | 121.78 € | stávame sa najlacnejší |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 195.90 € | **183.50 €** | 18.7 % | **11.2 %** | 183.89 € | stávame sa najlacnejší |
| HP OfficeJet Pro 9132e AiO HP+ (404M5B) | 270.90 € | **258.50 €** | 10.1 % | **5.1 %** | 195.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS520E15W | 270.00 € | **257.90 €** | 10.0 % | **5.1 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 272.00 € | **259.90 €** | 10.0 % | **5.1 %** | 259.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EHF6342XOK | 266.50 € | **254.50 €** | 10.1 % | **5.2 %** | 201.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 325 | 263.50 € | **251.50 €** | 10.2 % | **5.1 %** | 229.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **195.00 €** | 14.9 % | **8.3 %** | 195.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 81.50 € | **69.50 €** | 44.2 % | **23.0 %** | 69.90 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Pro | 506.00 € | **494.00 €** | 15.0 % | **12.2 %** | 494.47 € | stávame sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 229.50 € | **217.90 €** | 10.6 % | **5.0 %** | 207.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 169.50 € | **158.00 €** | 18.5 % | **10.5 %** | 158.01 € | stávame sa najlacnejší |
| Router GL.iNet Flint | 137.00 € | **125.50 €** | 15.0 % | **5.4 %** | 125.52 € | stávame sa najlacnejší |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 131.50 € | **120.00 €** | 24.2 % | **13.3 %** | 120.27 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 137.50 € | **126.00 €** | 15.0 % | **5.4 %** | 126.41 € | stávame sa najlacnejší |
| ETA Magic X-treme 7235 90000 černý/modrý | 339.50 € | **328.00 €** | 10.1 % | **6.3 %** | 328.50 € | stávame sa najlacnejší |
| EPSON EcoTank L3286 | 252.90 € | **241.50 €** | 10.2 % | **5.2 %** | 177.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator Blackview BV7300 Black | 252.90 € | **241.50 €** | 10.1 % | **5.2 %** | 200.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator Blackview BV7300 Yellow | 252.90 € | **241.50 €** | 10.1 % | **5.2 %** | 200.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 EFC226R | 253.90 € | **242.50 €** | 10.1 % | **5.1 %** | 236.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Arzopa A3C Pro 13,3" | 129.00 € | **117.90 €** | 14.9 % | **5.1 %** | 117.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OfficeJet 9730e AiO (537P6B) | 240.90 € | **229.90 €** | 10.0 % | **5.0 %** | 209.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 4/128GB Purple | 241.50 € | **230.50 €** | 10.2 % | **5.2 %** | 219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Note 17 4/128GB Sky Teal | 241.50 € | **230.50 €** | 10.2 % | **5.2 %** | 219.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C320WS 4MPx, venkovní, IP, FHD, ... | 56.50 € | **45.50 €** | 31.1 % | **5.5 %** | 38.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 125.50 € | **114.50 €** | 24.3 % | **13.4 %** | 114.52 € | stávame sa najlacnejší |
| Shifter Moza Racing HGP RS039 | 154.50 € | **143.50 €** | 15.1 % | **6.9 %** | 143.90 € | stávame sa najlacnejší |
| UMAX VisionBook N15R Pro | 237.90 € | **227.00 €** | 10.0 % | **5.0 %** | 206.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 49.90 € | **39.00 €** | 64.6 % | **28.6 %** | 39.50 € | stávame sa najlacnejší |
| Samsung The Frame QE43LS03H | 791.50 € | **780.90 €** | 10.0 % | **8.5 %** | 781.00 € | stávame sa najlacnejší |
| Electrolux EWS6526WC | 318.50 € | **307.90 €** | 10.1 % | **6.5 %** | 308.00 € | stávame sa najlacnejší |
| Concept IDV5160wh | 364.50 € | **353.90 €** | 10.1 % | **6.9 %** | 354.00 € | stávame sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 59.50 € | **48.90 €** | 40.2 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| HP Smart Tank 720 Wireless AiO (6UU46A) | 227.50 € | **216.90 €** | 10.2 % | **5.1 %** | 175.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Smart Tank 725 Wireless AiO (28B51A) | 227.50 € | **216.90 €** | 10.2 % | **5.1 %** | 204.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 200.50 € | **189.90 €** | 14.9 % | **8.9 %** | 190.00 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 295.50 € | **285.00 €** | 10.0 % | **6.1 %** | 285.50 € | stávame sa najlacnejší |
| Whirlpool W7F HP33 A | 348.50 € | **338.00 €** | 10.1 % | **6.8 %** | 338.50 € | stávame sa najlacnejší |
| Guzzanti GZ 70G | 230.90 € | **220.50 €** | 10.1 % | **5.2 %** | 211.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FINLUX 65FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 668.90 € | **658.50 €** | 5432.3 % | **5346.2 %** | 658.90 € | stávame sa najlacnejší |
| CANON PIXMA G3410 Black | 214.50 € | **204.50 €** | 10.2 % | **5.1 %** | 128.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L3276 | 223.50 € | **213.50 €** | 10.1 % | **5.2 %** | 166.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS8751 white | 219.90 € | **209.90 €** | 10.2 % | **5.2 %** | 164.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS8750 Black | 219.90 € | **209.90 €** | 10.2 % | **5.2 %** | 170.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 13Wr Flex (UMM220V30) | 216.50 € | **206.50 €** | 10.2 % | **5.1 %** | 187.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CA6 NP5B3HTX | 351.90 € | **341.90 €** | 10.1 % | **7.0 %** | 342.00 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **212.50 €** | 15.0 % | **9.9 %** | 212.80 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1390.90 € | **1381.00 €** | 10.0 % | **9.2 %** | 1381.50 € | stávame sa najlacnejší |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 179.90 € | **170.00 €** | 24.9 % | **18.0 %** | 170.42 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P300 3x french socket, 2x... | 47.90 € | **38.00 €** | 32.5 % | **5.2 %** | 37.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 425.90 € | **416.00 €** | 10.0 % | **7.5 %** | 416.50 € | stávame sa najlacnejší |
| GORENJE FN4172CW | 340.50 € | **330.90 €** | 10.1 % | **7.0 %** | 331.00 € | stávame sa najlacnejší |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 38.50 € | **28.90 €** | 57.5 % | **18.2 %** | 29.00 € | stávame sa najlacnejší |
| HP LaserJet Pro MFP M234sdw (6GX01F) | 213.50 € | **203.90 €** | 10.2 % | **5.2 %** | 165.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT96425VD | 262.50 € | **252.90 €** | 10.1 % | **6.1 %** | 253.00 € | stávame sa najlacnejší |
| Epson EcoTank L3310 | 205.50 € | **196.00 €** | 10.1 % | **5.0 %** | 179.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 166.50 € | **157.00 €** | 15.5 % | **8.9 %** | 157.05 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 109.00 € | **99.50 €** | 24.1 % | **13.3 %** | 99.58 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **266.50 €** | 15.0 % | **11.0 %** | 266.60 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 204.50 € | **195.00 €** | 14.9 % | **9.6 %** | 195.29 € | stávame sa najlacnejší |
| Solight cestovná nabíjačka 3v1, MagSafe kompatibilná | 34.50 € | **25.00 €** | 82.3 % | **32.1 %** | 25.50 € | stávame sa najlacnejší |
| AMICA VM 852.3 AW | 204.90 € | **195.50 €** | 10.2 % | **5.1 %** | 158.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EUOC94DB | 212.90 € | **203.50 €** | 10.1 % | **5.2 %** | 167.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Smart Tank 675 Wireless AiO (28C12A) | 206.90 € | **197.50 €** | 10.0 % | **5.0 %** | 182.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíječka baterií GP B441 + Speed Dock + 4 x AA 2100... | 41.90 € | **32.50 €** | 35.8 % | **5.3 %** | 31.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-T535DW | 208.00 € | **198.90 €** | 10.0 % | **5.2 %** | 179.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pioneer GM-A6704 zesilovač | 198.50 € | **189.50 €** | 10.1 % | **5.1 %** | 138.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 204.50 € | **195.50 €** | 10.1 % | **5.3 %** | 167.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L1270 | 192.50 € | **183.50 €** | 10.2 % | **5.1 %** | 155.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 28 | 193.50 € | **184.50 €** | 10.3 % | **5.2 %** | 159.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE R492PW | 201.50 € | **192.50 €** | 10.1 % | **5.1 %** | 177.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-T435W | 198.50 € | **189.50 €** | 10.3 % | **5.3 %** | 183.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 91 | 197.00 € | **188.00 €** | 10.0 % | **5.0 %** | 183.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 62.50 € | **53.50 €** | 23.6 % | **5.8 %** | 49.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 104.50 € | **95.50 €** | 15.1 % | **5.1 %** | 95.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 119.00 € | **110.00 €** | 14.9 % | **6.2 %** | 110.09 € | stávame sa najlacnejší |
| JBL PartyBox 330 | 549.90 € | **540.90 €** | 8.5 % | **6.8 %** | 541.00 € | stávame sa najlacnejší |
| JBL PartyBox 330W | 549.90 € | **540.90 €** | 7.0 % | **5.2 %** | 541.00 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 251.90 € | **242.90 €** | 10.1 % | **6.1 %** | 243.00 € | stávame sa najlacnejší |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 209.50 € | **200.50 €** | 24.8 % | **19.5 %** | 200.63 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 41.00 € | **32.00 €** | 43.0 % | **11.6 %** | 32.37 € | stávame sa najlacnejší |
| Vákuovačka G21 Nefrit | 126.50 € | **117.50 €** | 18.0 % | **9.6 %** | 117.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 50.90 € | **42.00 €** | 44.2 % | **19.0 %** | 42.50 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 184.50 € | **175.90 €** | 10.1 % | **5.0 %** | 159.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q7 BF Black | 188.50 € | **179.90 €** | 10.2 % | **5.2 %** | 175.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HIF-8892 EBT Multimediální HI-F | 191.50 € | **182.90 €** | 10.1 % | **5.1 %** | 182.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **169.50 €** | 15.0 % | **9.5 %** | 169.90 € | stávame sa najlacnejší |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 144.90 € | **136.50 €** | 25.0 % | **17.7 %** | 136.76 € | stávame sa najlacnejší |
| Blender G21 Perfection Cappuccino | 211.90 € | **203.50 €** | 18.5 % | **13.8 %** | 203.90 € | stávame sa najlacnejší |
| Clutch Pedal Moza Racing CRP2 RS067 | 105.90 € | **97.50 €** | 15.1 % | **6.0 %** | 97.90 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 2-pack) | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 133.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-270B Gramofon hnědý | 177.50 € | **169.50 €** | 10.1 % | **5.2 %** | 153.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 92.90 € | **84.90 €** | 15.0 % | **5.1 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWF 420 BL | 176.50 € | **168.50 €** | 10.0 % | **5.0 %** | 160.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 108.50 € | **100.50 €** | 13.5 % | **5.1 %** | 99.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI HS-02A F 100 W inteligentná spájkovačka | 105.90 € | **97.90 €** | 15.1 % | **6.4 %** | 97.96 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 117.00 € | **109.00 €** | 16.0 % | **8.1 %** | 109.06 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 103.00 € | **95.00 €** | 14.9 % | **6.0 %** | 95.09 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 47.50 € | **39.50 €** | 38.3 % | **15.0 %** | 39.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 47.50 € | **39.50 €** | 38.3 % | **15.0 %** | 39.90 € | stávame sa najlacnejší |
| Beko HSM14540 | 261.90 € | **253.90 €** | 10.0 % | **6.7 %** | 254.00 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.90 € | **165.00 €** | 10.1 % | **5.1 %** | 151.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TV držák Kruger&Matz KM1310  (43-100'' 80kg) univerz... | 60.50 € | **52.90 €** | 20.8 % | **5.6 %** | 51.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 41.50 € | **33.90 €** | 32.4 % | **8.1 %** | 34.00 € | stávame sa najlacnejší |
| JBL Tour One M2 černá | 161.50 € | **153.90 €** | 10.3 % | **5.1 %** | 107.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tour One M2 champagne | 161.50 € | **153.90 €** | 10.3 % | **5.1 %** | 107.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 91.50 € | **83.90 €** | 14.9 % | **5.4 %** | 69.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualZone Q787 XXL Deluxe | 166.50 € | **158.90 €** | 10.2 % | **5.2 %** | 144.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 233.50 € | **225.90 €** | 10.2 % | **6.6 %** | 226.00 € | stávame sa najlacnejší |
| Päťzónový indukčný sporák IsEasy LI5-01 | 192.50 € | **185.00 €** | 15.1 % | **10.6 %** | 185.05 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 20 W | 1124.50 € | **1117.00 €** | 15.0 % | **14.3 %** | 1117.25 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **85.00 €** | 15.1 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **85.00 €** | 15.1 % | **5.8 %** | 85.31 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (biely) | 189.50 € | **182.00 €** | 15.1 % | **10.5 %** | 182.34 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 189.50 € | **182.00 €** | 15.1 % | **10.5 %** | 182.34 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 284.90 € | **277.50 €** | 15.0 % | **12.0 %** | 277.75 € | stávame sa najlacnejší |
| Tesla 32E635BHS 32" HD LED AndroidTV 11 | 156.00 € | **148.90 €** | 10.0 % | **5.0 %** | 147.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EB61C4DB | 150.50 € | **143.50 €** | 10.1 % | **5.0 %** | 131.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 80.50 € | **73.50 €** | 15.2 % | **5.2 %** | 68.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L1630W | 158.90 € | **151.90 €** | 10.0 % | **5.2 %** | 148.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 10002 | 148.50 € | **141.50 €** | 10.3 % | **5.1 %** | 138.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **81.50 €** | 14.9 % | **5.8 %** | 81.64 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **81.50 €** | 14.9 % | **5.8 %** | 81.64 € | stávame sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.50 € | **151.50 €** | 15.8 % | **10.7 %** | 151.90 € | stávame sa najlacnejší |
| Súprava umývacej a kondicionovacej stanice ELEGOO Me... | 126.90 € | **120.00 €** | 15.2 % | **8.9 %** | 120.48 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 178.90 € | **172.00 €** | 10.1 % | **5.9 %** | 172.50 € | stávame sa najlacnejší |
| Creative Zen Hybrid Pro Classic | 145.50 € | **138.90 €** | 10.2 % | **5.2 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 175.50 € | **168.90 €** | 10.1 % | **5.9 %** | 169.00 € | stávame sa najlacnejší |
| Beko VRT76325VW | 169.50 € | **162.90 €** | 10.3 % | **6.0 %** | 163.00 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 11.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 36.00 € | **29.50 €** | 43.5 % | **17.6 %** | 29.63 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 69.00 € | **62.50 €** | 25.2 % | **13.4 %** | 62.79 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.50 € | **64.00 €** | 16.1 % | **5.4 %** | 64.29 € | stávame sa najlacnejší |
| CrockPot CSC062X | 162.50 € | **156.00 €** | 10.1 % | **5.7 %** | 156.50 € | stávame sa najlacnejší |
| Strong SRT24HE4023C | 139.90 € | **133.50 €** | 10.1 % | **5.1 %** | 118.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO6164EA | 144.90 € | **138.50 €** | 10.2 % | **5.4 %** | 134.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 47.90 € | **41.50 €** | 49.9 % | **29.9 %** | 41.56 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA420 Deodorizačný modul... | 41.90 € | **35.50 €** | 33.5 % | **13.1 %** | 35.75 € | stávame sa najlacnejší |
| TechniSat VIOLA 200 /bílé-černé/ 0000/2936 | 49.90 € | **43.50 €** | 23.9 % | **8.0 %** | 43.90 € | stávame sa najlacnejší |
| Inteligentná batéria pre DJI Mini 5 Pro | 87.00 € | **80.90 €** | 14.8 % | **6.7 %** | 81.00 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.90 € | **128.90 €** | 10.2 % | **5.3 %** | 91.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 70.50 € | **64.50 €** | 14.8 % | **5.0 %** | 61.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla 32E325BH 32" HD LED TV | 134.50 € | **128.50 €** | 10.0 % | **5.1 %** | 128.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 73.00 € | **67.00 €** | 14.9 % | **5.4 %** | 67.09 € | stávame sa najlacnejší |
| Braun CG9043 | 219.90 € | **213.90 €** | 10.1 % | **7.1 %** | 214.00 € | stávame sa najlacnejší |
| Candy GD 17SSB7-S | 308.90 € | **302.90 €** | 10.1 % | **7.9 %** | 303.00 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 299.90 € | **293.90 €** | 10.1 % | **7.9 %** | 294.00 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.90 € | **228.90 €** | 10.0 % | **7.2 %** | 229.00 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash F1 (biela) + 6 ventiláto... | 115.00 € | **109.00 €** | 14.8 % | **8.9 %** | 109.11 € | stávame sa najlacnejší |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 120.50 € | **114.50 €** | 23.6 % | **17.4 %** | 114.81 € | stávame sa najlacnejší |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 99.00 € | **93.00 €** | 24.7 % | **17.1 %** | 93.37 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 55.50 € | **49.50 €** | 38.5 % | **23.6 %** | 49.90 € | stávame sa najlacnejší |
| Herný volant MOZA RACING KS Pro RS095 | 352.50 € | **346.50 €** | 15.1 % | **13.1 %** | 346.90 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 30.90 € | **25.00 €** | 38.9 % | **12.4 %** | 25.31 € | stávame sa najlacnejší |
| Solight PIR interiérový senzor, do krabičky od vypín... | 13.50 € | **7.80 €** | 121.3 % | **27.9 %** | 7.90 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 631.50 € | **625.90 €** | 10.1 % | **9.1 %** | 626.00 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **61.90 €** | 15.2 % | **5.6 %** | 61.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v striebornej ... | 67.50 € | **61.90 €** | 14.8 % | **5.2 %** | 61.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 460 | 120.50 € | **114.90 €** | 10.4 % | **5.3 %** | 97.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 56.00 € | **50.50 €** | 24.2 % | **12.0 %** | 50.78 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UGame C2 16" 2560x1600 120Hz | 169.50 € | **164.00 €** | 15.1 % | **11.4 %** | 164.31 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra (12-dielna) | 143.50 € | **138.00 €** | 15.0 % | **10.6 %** | 138.38 € | stávame sa najlacnejší |
| Blesk GODOX V100 TTL pre Fujifilm | 356.00 € | **350.50 €** | 14.9 % | **13.1 %** | 350.90 € | stávame sa najlacnejší |
| G3Ferrari Dvouplotýnka, G10047 dvouplotý | 125.90 € | **120.50 €** | 10.1 % | **5.4 %** | 113.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tuner 3 White Přenosné rádio | 122.90 € | **117.50 €** | 10.2 % | **5.3 %** | 117.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Spájkovacia stanica FNIRSI DWS-200F s výkonom 200 W | 130.90 € | **125.50 €** | 15.0 % | **10.2 %** | 125.54 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.63 € | stávame sa najlacnejší |
| Domo DO344DH | 149.90 € | **144.50 €** | 10.1 % | **6.1 %** | 144.90 € | stávame sa najlacnejší |
| Ultimea Aura A50 Pro Soundbar | 134.90 € | **129.50 €** | 15.0 % | **10.4 %** | 129.90 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 57.90 € | **52.50 €** | 16.7 % | **5.8 %** | 52.69 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 150W, max. 21000lm, 3CCT,... | 31.90 € | **26.50 €** | 38.2 % | **14.8 %** | 26.90 € | stávame sa najlacnejší |
| YAMAHA True X Bar 50A / SR-X50A BLACK | 713.00 € | **707.90 €** | 10.0 % | **9.2 %** | 708.00 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-6 litinové neoprenové HE... | 37.00 € | **31.90 €** | 21.9 % | **5.1 %** | 27.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 60.00 € | **54.90 €** | 15.1 % | **5.3 %** | 54.99 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 39.00 € | **33.90 €** | 41.4 % | **22.9 %** | 34.00 € | stávame sa najlacnejší |
| Roborock Q10 PF čistiaci robot (čierny) | 219.00 € | **213.90 €** | 15.0 % | **12.3 %** | 214.00 € | stávame sa najlacnejší |
| FNIRSI HS-02A 100 W inteligentná spájkovačka | 57.90 € | **52.90 €** | 15.0 % | **5.0 %** | 29.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Girmi FM2105 Mikrovlnná trouba s grilem | 109.50 € | **104.50 €** | 10.4 % | **5.3 %** | 91.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 24440-56 | 112.90 € | **107.90 €** | 10.1 % | **5.2 %** | 99.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 15.50 € | **10.50 €** | 60.5 % | **8.7 %** | 6.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SigGen 3-v-1 FNIRSI DST-210 ručný digitálny multimet... | 61.50 € | **56.50 €** | 15.0 % | **5.7 %** | 52.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK812110 | 109.90 € | **104.90 €** | 10.2 % | **5.2 %** | 104.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot SCCPBPP605-050 | 102.50 € | **97.50 €** | 10.5 % | **5.1 %** | 97.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Spájkovacia stanica FNIRSI DWS-200 F | 130.50 € | **125.50 €** | 15.1 % | **10.7 %** | 125.54 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.90 € | **238.90 €** | 10.0 % | **7.8 %** | 239.00 € | stávame sa najlacnejší |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 99.00 € | **94.00 €** | 23.8 % | **17.6 %** | 94.13 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA210 Jednorazové vrecko... | 25.00 € | **20.00 €** | 38.9 % | **11.1 %** | 20.25 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 52.50 € | **47.50 €** | 24.5 % | **12.7 %** | 47.79 € | stávame sa najlacnejší |
| Blesk GODOX TT600 | 87.00 € | **82.00 €** | 14.7 % | **8.1 %** | 82.37 € | stávame sa najlacnejší |
| GODOX LUX Junior Retro blesk | 67.50 € | **62.50 €** | 15.2 % | **6.7 %** | 62.90 € | stávame sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 104.50 € | **99.50 €** | 29.8 % | **23.6 %** | 99.90 € | stávame sa najlacnejší |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 250.50 € | **245.50 €** | 12.0 % | **9.8 %** | 245.90 € | stávame sa najlacnejší |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 15.50 € | **10.50 €** | 56.3 % | **5.9 %** | 10.90 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 36.00 € | **31.00 €** | 37.9 % | **18.8 %** | 31.50 € | stávame sa najlacnejší |
| DOMO DO9252I | 257.90 € | **252.90 €** | 10.0 % | **7.9 %** | 253.00 € | stávame sa najlacnejší |
| UMAX VisionBook 11T LTE Pro | 107.90 € | **103.00 €** | 10.1 % | **5.1 %** | 96.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 31.50 € | **26.90 €** | 59.3 % | **36.0 %** | 26.94 € | stávame sa najlacnejší |
| GUZZANTI GZ 3601 | 101.50 € | **96.90 €** | 10.0 % | **5.0 %** | 95.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G2014401 Zmrzlinovač | 179.50 € | **174.90 €** | 10.3 % | **7.4 %** | 175.00 € | stávame sa najlacnejší |
| MSI MAG 274CF E20 | 113.50 € | **108.90 €** | 10.4 % | **5.9 %** | 109.00 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 181.50 € | **176.90 €** | 10.1 % | **7.3 %** | 177.00 € | stávame sa najlacnejší |
| Tesla SlowCook S900 Plus | 92.50 € | **88.00 €** | 10.5 % | **5.1 %** | 70.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 40.00 € | **35.50 €** | 47.6 % | **31.0 %** | 35.53 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 85.50 € | **81.00 €** | 14.9 % | **8.8 %** | 81.14 € | stávame sa najlacnejší |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 110.00 € | **105.50 €** | 24.0 % | **19.0 %** | 105.67 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.00 € | **47.50 €** | 15.5 % | **5.5 %** | 47.79 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 89.00 € | **84.50 €** | 20.5 % | **14.4 %** | 84.79 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 28.00 € | **23.50 €** | 38.4 % | **16.1 %** | 23.90 € | stávame sa najlacnejší |
| Letecký simulátor MOZA RACING AB6 | 454.00 € | **449.50 €** | 14.9 % | **13.8 %** | 449.90 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **82.00 €** | 15.2 % | **9.2 %** | 82.42 € | stávame sa najlacnejší |
| Adapter, quick release MOZA RACING RS07 for R21/R16/... | 53.50 € | **49.00 €** | 15.3 % | **5.6 %** | 49.46 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 246.50 € | **242.00 €** | 11.7 % | **9.7 %** | 242.49 € | stávame sa najlacnejší |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 160.90 € | **156.50 €** | 15.1 % | **12.0 %** | 156.51 € | stávame sa najlacnejší |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 123.90 € | **119.50 €** | 15.1 % | **11.0 %** | 119.90 € | stávame sa najlacnejší |
| Výrobok X.A.3 | 53.90 € | **49.50 €** | 15.0 % | **5.6 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 41.90 € | **37.50 €** | 18.4 % | **5.9 %** | 37.79 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 24.90 € | **20.50 €** | 38.3 % | **13.8 %** | 20.90 € | stávame sa najlacnejší |
| BEKO HDCG 32220 FX | 97.00 € | **92.90 €** | 10.0 % | **5.4 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 102.00 € | **97.90 €** | 10.0 % | **5.6 %** | 98.00 € | stávame sa najlacnejší |
| HDD 3.5" 4TB 256MB Seagate SKYHAWK pro kamerové syst... | 221.50 € | **217.50 €** | 7.1 % | **5.2 %** | 185.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amiko Mini HD265 WiFi | 56.50 € | **52.50 €** | 13.6 % | **5.5 %** | 42.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RO 3923 EA | 79.50 € | **75.50 €** | 10.6 % | **5.1 %** | 66.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 10T LTE | 94.90 € | **90.90 €** | 10.0 % | **5.4 %** | 84.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 35.90 € | **31.90 €** | 19.3 % | **6.0 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 - DualSense CHROMA INDIGO | 79.50 € | **75.50 €** | 10.7 % | **5.1 %** | 71.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 62.50 € | **58.50 €** | 13.0 % | **5.7 %** | 55.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI FNB58 USB port tester, čierny | 46.00 € | **42.00 €** | 15.1 % | **5.1 %** | 41.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Stormy Home 0517 90000 | 79.50 € | **75.50 €** | 10.7 % | **5.1 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IB5100E0 | 93.90 € | **89.90 €** | 10.0 % | **5.4 %** | 89.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 20.50 € | **16.50 €** | 33.9 % | **7.7 %** | 16.58 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 36.50 € | **32.50 €** | 22.3 % | **8.9 %** | 32.59 € | stávame sa najlacnejší |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 75.50 € | **71.50 €** | 23.7 % | **17.1 %** | 71.59 € | stávame sa najlacnejší |
| Blesk GODOX V860III TTL pre Fuji | 218.90 € | **214.90 €** | 15.0 % | **12.9 %** | 215.00 € | stávame sa najlacnejší |
| Blesk GODOX V860III TTL pre Olympus | 218.90 € | **214.90 €** | 15.0 % | **12.9 %** | 215.00 € | stávame sa najlacnejší |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 304.50 € | **300.50 €** | 15.0 % | **13.5 %** | 300.65 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 21.50 € | **17.50 €** | 53.1 % | **24.6 %** | 17.68 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 70.00 € | **66.00 €** | 23.7 % | **16.7 %** | 66.19 € | stávame sa najlacnejší |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 25.50 € | **21.50 €** | 37.8 % | **16.1 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Laskos, 48... | 23.50 € | **19.50 €** | 38.1 % | **14.6 %** | 19.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 19.00 € | **15.00 €** | 42.2 % | **12.3 %** | 15.50 € | stávame sa najlacnejší |
| Projektor AURZEN Boom Mini Black | 232.90 € | **229.00 €** | 15.1 % | **13.1 %** | 229.10 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 80.90 € | **77.00 €** | 23.9 % | **17.9 %** | 77.29 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 28.90 € | **25.00 €** | 25.3 % | **8.4 %** | 25.29 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 21.90 € | **18.00 €** | 50.3 % | **23.5 %** | 18.38 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash TH285M (biela) | 52.50 € | **48.90 €** | 15.4 % | **7.4 %** | 48.99 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 16.50 € | **12.90 €** | 66.0 % | **29.8 %** | 12.92 € | stávame sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 19.50 € | **15.90 €** | 46.0 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| Braun SI7160BL | 78.50 € | **74.90 €** | 10.3 % | **5.3 %** | 68.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi Mijia Smart Humidifier Pro | 80.50 € | **76.90 €** | 10.0 % | **5.1 %** | 75.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 98.50 € | **94.90 €** | 21543.6 % | **20752.6 %** | 94.99 € | stávame sa najlacnejší |
| CANON PIXMA TR4755i Black | 80.00 € | **76.50 €** | 10.1 % | **5.2 %** | 57.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 108.50 € | **105.00 €** | 14.9 % | **11.2 %** | 105.17 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 29.00 € | **25.50 €** | 20.4 % | **5.9 %** | 25.79 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 210.50 € | **207.00 €** | 10.0 % | **8.2 %** | 207.50 € | stávame sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 68.90 € | **65.50 €** | 10.5 % | **5.0 %** | 57.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator A930 GPS Senior Black | 80.90 € | **77.50 €** | 10.1 % | **5.4 %** | 74.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domácí monitorovací systém TechnoLine MA10001 Starte... | 74.90 € | **71.50 €** | 13.9 % | **8.7 %** | 71.69 € | stávame sa najlacnejší |
| ANMITE A185W03 18,5" prenosný monitor | 134.90 € | **131.50 €** | 15.0 % | **12.1 %** | 131.73 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 211.90 € | **208.50 €** | 18.5 % | **16.6 %** | 208.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 14.90 € | **11.50 €** | 37.8 % | **6.4 %** | 11.63 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 15.90 € | **12.50 €** | 37.7 % | **8.2 %** | 12.90 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.58 € | stávame sa najlacnejší |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 51.90 € | **48.50 €** | 14.9 % | **7.4 %** | 48.90 € | stávame sa najlacnejší |
| Freewell neutrálny filter ND32 pre OSMO 360 | 65.00 € | **61.90 €** | 14.9 % | **9.4 %** | 62.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 11.90 € | **8.80 €** | 44.0 % | **6.5 %** | 8.90 € | stávame sa najlacnejší |
| Čistiaci robot PROSCENIC Q20 Plus | 240.00 € | **236.90 €** | 15.0 % | **13.5 %** | 237.00 € | stávame sa najlacnejší |
| Balanční míč HMS Premium BSX Pro | 102.90 € | **99.90 €** | 8.5 % | **5.4 %** | 85.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 66.50 € | **63.50 €** | 10.8 % | **5.8 %** | 57.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera EMOS IP-220G /H4072/ GoSmart vnitřní otočná s... | 36.50 € | **33.50 €** | 14.7 % | **5.2 %** | 29.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| USB Adaptér 6v1 Kruger&Matz KM0391.2  (HUB) typu C n... | 32.50 € | **29.50 €** | 16.8 % | **6.0 %** | 27.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator T100 Black | 68.90 € | **65.90 €** | 10.3 % | **5.5 %** | 64.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje MO20E1T4 | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 66.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 37.50 € | **34.50 €** | 15.6 % | **6.4 %** | 34.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 119.00 € | **116.00 €** | 8.9 % | **6.1 %** | 116.09 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 152.90 € | **149.90 €** | 10.0 % | **7.9 %** | 150.00 € | stávame sa najlacnejší |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 29.90 € | **26.90 €** | 50.2 % | **35.2 %** | 27.00 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **36.00 €** | 14.7 % | **5.9 %** | 36.17 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 55.50 € | **52.50 €** | 15.2 % | **8.9 %** | 52.67 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 17.00 € | **14.00 €** | 40.2 % | **15.4 %** | 14.23 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 67.50 € | **64.50 €** | 15.4 % | **10.3 %** | 64.76 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 24.50 € | **21.50 €** | 23.6 % | **8.5 %** | 21.79 € | stávame sa najlacnejší |
| Prevodovka PXN - usporiadanie H 7+1 | 84.00 € | **81.00 €** | 15.0 % | **10.9 %** | 81.38 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 24.50 € | **21.50 €** | 39.6 % | **22.5 %** | 21.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom Siena, ... | 21.50 € | **18.50 €** | 38.5 % | **19.2 %** | 18.90 € | stávame sa najlacnejší |
| Tesla MediaBox XG500 | 62.50 € | **59.50 €** | 10.8 % | **5.5 %** | 59.90 € | stávame sa najlacnejší |
| Výrobok X.A.2 | 48.50 € | **45.50 €** | 15.0 % | **7.9 %** | 45.90 € | stávame sa najlacnejší |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 223.00 € | **220.00 €** | 15.0 % | **13.4 %** | 220.42 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 71.90 € | **69.00 €** | 15.2 % | **10.5 %** | 69.28 € | stávame sa najlacnejší |
| Blender G21 Experience Graphite Black | 253.90 € | **251.00 €** | 18.3 % | **16.9 %** | 251.36 € | stávame sa najlacnejší |
| Blender G21 Experience White | 253.90 € | **251.00 €** | 18.3 % | **16.9 %** | 251.36 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 211.90 € | **209.00 €** | 18.5 % | **16.8 %** | 209.40 € | stávame sa najlacnejší |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | stávame sa najlacnejší |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 40.90 € | **38.00 €** | 15.3 % | **7.1 %** | 38.17 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 40.90 € | **38.00 €** | 15.4 % | **7.2 %** | 38.29 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 20.90 € | **18.00 €** | 25.5 % | **8.1 %** | 18.29 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **36.00 €** | 14.9 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 10.90 € | **8.20 €** | 40.4 % | **5.7 %** | 7.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C80 WiFi Router | 50.50 € | **47.90 €** | 11.1 % | **5.3 %** | 37.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MultiCook RC400 Low Carb | 64.50 € | **61.90 €** | 10.1 % | **5.7 %** | 52.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente ProVacs | 59.50 € | **56.90 €** | 10.0 % | **5.2 %** | 49.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Flex 2 modrá | 59.50 € | **56.90 €** | 10.3 % | **5.5 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový ovládač 4-kan. k pohonu brán IN SL-600, 100... | 28.50 € | **25.90 €** | 16.7 % | **6.1 %** | 19.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXSH2002E | 57.50 € | **54.90 €** | 10.2 % | **5.2 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3750i Black | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 41.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo čierne) | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 26.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9279W | 51.50 € | **48.90 €** | 10.9 % | **5.3 %** | 47.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.90 €** | 15.2 % | **8.6 %** | 42.92 € | stávame sa najlacnejší |
| Herní mikrofon Maono DM30RGB (černý) | 40.50 € | **37.90 €** | 14.8 % | **7.5 %** | 37.95 € | stávame sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 31.50 € | **28.90 €** | 15.7 % | **6.2 %** | 28.99 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.90 €** | 14.9 % | **11.7 %** | 92.92 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 241.50 € | **238.90 €** | 19.2 % | **17.9 %** | 239.00 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 8.30 € | **5.80 €** | 55.5 % | **8.7 %** | 5.90 € | stávame sa najlacnejší |
| CANON PIXMA MG2551S Grey | 56.00 € | **53.50 €** | 10.1 % | **5.2 %** | 36.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 135 | 60.00 € | **57.50 €** | 10.2 % | **5.6 %** | 41.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 26.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria Jupio Alkaline balenie 40ks (AA tužkové) | 17.00 € | **14.50 €** | 25.6 % | **7.2 %** | 13.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický mlynček na zrnkovú kávu HiBREW G3 | 80.00 € | **77.50 €** | 14.9 % | **11.3 %** | 77.52 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash LEO (čierna) | 29.50 € | **27.00 €** | 15.7 % | **5.9 %** | 27.04 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 14.50 € | **12.00 €** | 31.4 % | **8.8 %** | 12.05 € | stávame sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 36.00 € | **33.50 €** | 15.2 % | **7.2 %** | 33.57 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 35.50 € | **33.00 €** | 15.6 % | **7.5 %** | 33.09 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 59.50 € | **57.00 €** | 14.7 % | **9.9 %** | 57.09 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 112.00 € | **109.50 €** | 10.2 % | **7.7 %** | 109.59 € | stávame sa najlacnejší |
| Solight zásuvka IP66, vodotesná a prachotesná | 17.50 € | **15.00 €** | 55.7 % | **33.4 %** | 15.10 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 22.50 € | **20.00 €** | 55.2 % | **37.9 %** | 20.24 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 143.50 € | **141.00 €** | 14.9 % | **12.9 %** | 141.25 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 23.50 € | **21.00 €** | 23.6 % | **10.4 %** | 21.29 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **106.00 €** | 14.9 % | **12.3 %** | 106.29 € | stávame sa najlacnejší |
| Ultimea Poseidon D80 BOOM Soundbar | 255.00 € | **252.50 €** | 14.0 % | **12.9 %** | 252.80 € | stávame sa najlacnejší |
| Tlakový stroj HiBREW H7B Cob | 554.00 € | **551.50 €** | 11.3 % | **10.8 %** | 551.84 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.50 € | **30.00 €** | 15.1 % | **6.2 %** | 30.36 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **31.00 €** | 14.6 % | **6.1 %** | 31.36 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **11.50 €** | 36.5 % | **12.1 %** | 11.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 24.00 € | **21.50 €** | 36.6 % | **22.4 %** | 21.90 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 160.50 € | **158.00 €** | 10.2 % | **8.5 %** | 158.50 € | stávame sa najlacnejší |
| Solight stolová nabíjačka 3v1, Qi2, MagSafe kompatib... | 30.50 € | **28.00 €** | 52.8 % | **40.3 %** | 28.50 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 206.50 € | **204.00 €** | 10.2 % | **8.8 %** | 204.50 € | stávame sa najlacnejší |
| Herný volant PXN WCS R2 | 174.90 € | **172.50 €** | 15.1 % | **13.5 %** | 172.54 € | stávame sa najlacnejší |
| Krüger&Matz HL-CP03 bezdrátový adaptér CarPlay - And... | 23.90 € | **21.50 €** | 18.4 % | **6.5 %** | 14.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SM5000 | 52.90 € | **50.50 €** | 10.6 % | **5.6 %** | 49.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DN853BE0 | 54.90 € | **52.50 €** | 10.5 % | **5.7 %** | 52.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 49.90 € | **47.50 €** | 15.2 % | **9.6 %** | 47.59 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-797 5G | 22.90 € | **20.50 €** | 30.0 % | **16.4 %** | 20.69 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.90 € | **33.50 €** | 18.3 % | **10.4 %** | 33.79 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 55.90 € | **53.50 €** | 15.4 % | **10.4 %** | 53.79 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-424 5G | 22.90 € | **20.50 €** | 30.0 % | **16.4 %** | 20.89 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-949 5G | 22.90 € | **20.50 €** | 30.0 % | **16.4 %** | 20.89 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.90 € | **19.50 €** | 24.8 % | **11.1 %** | 19.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.80 € | **5.60 €** | 47.1 % | **5.6 %** | 4.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 128 GB | 28.00 € | **25.90 €** | 14.7 % | **6.1 %** | 21.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 26.00 € | **23.90 €** | 14.6 % | **5.4 %** | 23.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight smart vianočný stromček, 150 LED, 1,5m, IP44... | 37.00 € | **34.90 €** | 53.6 % | **44.9 %** | 34.92 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 48.00 € | **45.90 €** | 21.6 % | **16.3 %** | 46.00 € | stávame sa najlacnejší |
| LCD displej KRUGER & MATZ KM2021 Android Auto Apple ... | 79.00 € | **76.90 €** | 11.8 % | **8.9 %** | 76.99 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 8.80 € | **6.80 €** | 38.4 % | **6.9 %** | 6.90 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, čierny | 8.80 € | **6.80 €** | 44.2 % | **11.5 %** | 6.90 € | stávame sa najlacnejší |
| Fixed Selfie stick MagSnap FIXSN-M-BK | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Selfie stick MagSnap FIXSN-M-BK | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MR80X WiFi Dual Band Router | 43.00 € | **41.00 €** | 10.2 % | **5.1 %** | 32.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26810-56/RH | 46.50 € | **44.50 €** | 10.2 % | **5.5 %** | 40.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE300 AC1200 WiFi Range Extender | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.00 €** | 14.6 % | **5.1 %** | 20.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator A675 Senior Red | 48.50 € | **46.50 €** | 10.0 % | **5.5 %** | 45.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Airfit-Wh | 48.50 € | **46.50 €** | 10.2 % | **5.6 %** | 45.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus G1 bicycle computer | 22.90 € | **20.90 €** | 15.1 % | **5.1 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 12.50 € | **10.50 €** | 28.2 % | **7.6 %** | 9.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 21.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nabíjacie svietidlo, 1000lm, zoom, darče... | 20.50 € | **18.50 €** | 43.8 % | **29.8 %** | 18.52 € | stávame sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **37.00 €** | 14.5 % | **8.7 %** | 37.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **43.00 €** | 14.9 % | **9.8 %** | 43.04 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **83.00 €** | 14.8 % | **12.1 %** | 83.08 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **35.00 €** | 15.1 % | **8.9 %** | 35.08 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 110.50 € | **108.50 €** | 14.9 % | **12.8 %** | 108.59 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 23.90 € | **21.90 €** | 36.2 % | **24.8 %** | 21.99 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 15.00 € | **13.00 €** | 29.2 % | **12.0 %** | 13.10 € | stávame sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 29.50 € | **27.50 €** | 14.3 % | **6.6 %** | 27.60 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash B275 PRO (biela) + 6 ven... | 54.90 € | **52.90 €** | 15.3 % | **11.1 %** | 53.00 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 223.90 € | **221.90 €** | 10.1 % | **9.1 %** | 222.00 € | stávame sa najlacnejší |
| Colmi V69 Smartwatch (Silver) | 38.50 € | **36.50 €** | 15.7 % | **9.7 %** | 36.63 € | stávame sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **224.50 €** | 15.0 % | **14.0 %** | 224.66 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 48.50 € | **46.50 €** | 15.3 % | **10.6 %** | 46.69 € | stávame sa najlacnejší |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 36.00 € | **34.00 €** | 14.8 % | **8.4 %** | 34.19 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 44.50 € | **42.50 €** | 14.7 % | **9.6 %** | 42.71 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 29.00 € | **27.00 €** | 20.4 % | **12.1 %** | 27.29 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 33.00 € | **31.00 €** | 16.2 % | **9.2 %** | 31.29 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 31.50 € | **29.50 €** | 13.0 % | **5.8 %** | 29.79 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 33.00 € | **31.00 €** | 14.2 % | **7.3 %** | 31.29 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 20.00 € | **18.00 €** | 19.5 % | **7.5 %** | 18.29 € | stávame sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 22.80 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 56.00 € | **54.00 €** | 15.0 % | **10.9 %** | 54.31 € | stávame sa najlacnejší |
| Reproduktory Edifier S355DB 2.1 (hnedé) | 358.00 € | **356.00 €** | 8.4 % | **7.8 %** | 356.31 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 17 Pro s držiakom 17 mm | 74.00 € | **72.00 €** | 14.8 % | **11.7 %** | 72.33 € | stávame sa najlacnejší |
| Tablet HOTWAV TAB R9 Ultra 5G (čierny) | 322.00 € | **320.00 €** | 10.5 % | **9.8 %** | 320.36 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 76.50 € | **74.50 €** | 15.4 % | **12.4 %** | 74.88 € | stávame sa najlacnejší |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 18.50 € | **16.50 €** | 38.9 % | **23.9 %** | 16.90 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 15.50 € | **13.50 €** | 42.6 % | **24.2 %** | 13.90 € | stávame sa najlacnejší |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 52.50 € | **50.50 €** | 15.5 % | **11.1 %** | 50.90 € | stávame sa najlacnejší |
| Solight lokátor Premium, Find My kompatibilný | 14.50 € | **12.50 €** | 43.2 % | **23.5 %** | 12.90 € | stávame sa najlacnejší |
| Úložné puzdro PGYTECH DJI Air 3/3S | 65.50 € | **63.50 €** | 15.1 % | **11.6 %** | 63.90 € | stávame sa najlacnejší |
| TechniSat VIOLA 2 černé | 37.50 € | **35.50 €** | 14.9 % | **8.7 %** | 35.90 € | stávame sa najlacnejší |
| Ovládacia páka lietadla MOZA RACING MHG | 111.50 € | **109.50 €** | 14.9 % | **12.8 %** | 109.90 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 17.00 € | **15.00 €** | 37.8 % | **21.6 %** | 15.49 € | stávame sa najlacnejší |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 37.00 € | **35.00 €** | 41.8 % | **34.1 %** | 35.50 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **101.00 €** | 15.1 % | **13.0 %** | 101.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 66.90 € | **65.00 €** | 15.2 % | **11.9 %** | 65.13 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **110.00 €** | 15.0 % | **13.0 %** | 110.38 € | stávame sa najlacnejší |
| Aligator Watch GPS Silver | 64.90 € | **63.00 €** | 10.4 % | **7.2 %** | 63.50 € | stávame sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 200 LED, 10m, ... | 12.90 € | **11.00 €** | 55.8 % | **32.9 %** | 11.50 € | stávame sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **14.00 €** | 56.1 % | **37.5 %** | 14.50 € | stávame sa najlacnejší |
| Trekingové hole NILS TK8604 | 60.90 € | **59.00 €** | 8.4 % | **5.0 %** | 49.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux E4GK1-4GB | 37.90 € | **36.00 €** | 10.8 % | **5.2 %** | 33.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 58.90 € | **57.00 €** | 15.0 % | **11.3 %** | 57.04 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **26.00 €** | 15.4 % | **7.5 %** | 26.12 € | stávame sa najlacnejší |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 21.90 € | **20.00 €** | 48.6 % | **35.7 %** | 20.15 € | stávame sa najlacnejší |
| Počítačové puzdro Darkflash Aquarius Acrylic | 26.90 € | **25.00 €** | 15.5 % | **7.4 %** | 25.25 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 33.90 € | **32.00 €** | 15.0 % | **8.5 %** | 32.29 € | stávame sa najlacnejší |
| Pamäťová karta Lexar Professional 800x Pro SDXC 64 GB | 30.90 € | **29.00 €** | 15.3 % | **8.2 %** | 29.37 € | stávame sa najlacnejší |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 59.90 € | **58.00 €** | 38.2 % | **33.8 %** | 58.43 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 21.90 € | **20.00 €** | 24.8 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 21.90 € | **20.00 €** | 24.8 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 21.90 € | **20.00 €** | 24.8 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Acer Nitro KG240YP0BI | 60.90 € | **59.00 €** | 10.5 % | **7.1 %** | 59.50 € | stávame sa najlacnejší |
| Solight LED záhradné osvetlenie, snehové vločky, 5ks... | 9.40 € | **7.70 €** | 44.2 % | **18.1 %** | 7.80 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 10.50 € | **8.80 €** | 38.4 % | **16.0 %** | 8.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 11.50 € | **9.80 €** | 38.5 % | **18.0 %** | 9.90 € | stávame sa najlacnejší |
| AMICA PIH6541PHTSUN 3.0 BL MATT | 395.50 € | **393.90 €** | 6.8 % | **6.4 %** | 394.00 € | stávame sa najlacnejší |
| HP 305 Combo 2-pack, 6ZD17AE | 29.50 € | **27.90 €** | 11.1 % | **5.1 %** | 23.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2023F0 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **27.90 €** | 11.4 % | **5.4 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 15.7 % | **6.7 %** | 18.98 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 32.50 € | **30.90 €** | 10.7 % | **5.3 %** | 31.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 41.50 € | **39.90 €** | 10.8 % | **6.6 %** | 40.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 41.50 € | **39.90 €** | 10.8 % | **6.6 %** | 40.00 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 41.50 € | **39.90 €** | 10.8 % | **6.6 %** | 40.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **14.90 €** | 16.4 % | **5.2 %** | 13.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558 | 12.50 € | **10.90 €** | 20.6 % | **5.1 %** | 9.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 114.50 € | **112.90 €** | 10.0 % | **8.5 %** | 112.97 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 66.50 € | **64.90 €** | 10.0 % | **7.4 %** | 65.00 € | stávame sa najlacnejší |
| Nordic walking hole NILS NW8613 | 49.50 € | **48.00 €** | 8.5 % | **5.2 %** | 44.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK690B černá | 37.00 € | **35.50 €** | 10.0 % | **5.5 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trekingové hole NILS TK8605 | 49.50 € | **48.00 €** | 8.5 % | **5.2 %** | 46.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 24.00 € | **22.50 €** | 12.5 % | **5.5 %** | 21.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 15.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trekingové hole NILS TK8606 | 55.00 € | **53.50 €** | 8.1 % | **5.1 %** | 53.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Telegant 72 Protect | 28.50 € | **27.00 €** | 11.1 % | **5.2 %** | 27.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete SteamStyle 4301, violet | 33.00 € | **31.50 €** | 10.3 % | **5.3 %** | 31.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.04 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **56.00 €** | 15.0 % | **12.0 %** | 56.04 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **11.00 €** | 56.6 % | **37.8 %** | 11.06 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **16.50 €** | 15.0 % | **5.4 %** | 16.56 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 49.50 € | **48.00 €** | 38.6 % | **34.4 %** | 48.13 € | stávame sa najlacnejší |
| Meter hluku FNIRSI FDM01 | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.63 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 17.50 € | **16.00 €** | 16.2 % | **6.3 %** | 16.13 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 46.00 € | **44.50 €** | 14.9 % | **11.1 %** | 44.67 € | stávame sa najlacnejší |
| Kaon MZ-52, satelitní přijímač Skylink | 62.50 € | **61.00 €** | 10.5 % | **7.8 %** | 61.19 € | stávame sa najlacnejší |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 35.50 € | **34.00 €** | 14.5 % | **9.6 %** | 34.19 € | stávame sa najlacnejší |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 20.00 € | **18.50 €** | 17.7 % | **8.8 %** | 18.70 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 21.50 € | **20.00 €** | 16.1 % | **8.0 %** | 20.22 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 250.50 € | **249.00 €** | 7.9 % | **7.2 %** | 249.23 € | stávame sa najlacnejší |
| Digitálny kliešťový meter FNIRSI DMC-100 | 35.50 € | **34.00 €** | 11.6 % | **6.9 %** | 34.25 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 47.00 € | **45.50 €** | 14.7 % | **11.0 %** | 45.78 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 23.00 € | **21.50 €** | 13.3 % | **5.9 %** | 21.79 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 24.50 € | **23.00 €** | 15.4 % | **8.3 %** | 23.29 € | stávame sa najlacnejší |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 33.50 € | **32.00 €** | 11.7 % | **6.7 %** | 32.29 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 24.50 € | **23.00 €** | 15.5 % | **8.4 %** | 23.29 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom bi... | 11.50 € | **10.00 €** | 36.1 % | **18.3 %** | 10.30 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-2 litinové neoprenové HE... | 14.00 € | **12.50 €** | 20.3 % | **7.4 %** | 12.88 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, nastaviteľná teplo... | 12.00 € | **10.50 €** | 31.8 % | **15.4 %** | 10.90 € | stávame sa najlacnejší |
| Solight LED reflektor Quick so senzorom, 20W, 1700lm... | 12.00 € | **10.50 €** | 41.0 % | **23.4 %** | 10.90 € | stávame sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 33.00 € | **31.50 €** | 24.2 % | **18.5 %** | 31.90 € | stávame sa najlacnejší |
| Rádio Imperial Dabman 280 CDBK s funkcí ASA | 231.00 € | **229.50 €** | 12.5 % | **11.8 %** | 229.90 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 18.50 € | **17.00 €** | 14.9 % | **5.6 %** | 17.42 € | stávame sa najlacnejší |
| Router GL.iNet Slate 7 | 197.50 € | **196.00 €** | 9.1 % | **8.3 %** | 196.45 € | stávame sa najlacnejší |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790... | 36.50 € | **35.00 €** | 24.2 % | **19.1 %** | 35.49 € | stávame sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **12.00 €** | 55.2 % | **38.0 %** | 12.50 € | stávame sa najlacnejší |
| RUSSELL HOBBS 22760-56/RH | 30.50 € | **29.00 €** | 11.6 % | **6.1 %** | 29.50 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 107.50 € | **106.00 €** | 10.4 % | **8.8 %** | 106.50 € | stávame sa najlacnejší |
| Domo DO8719W | 70.50 € | **69.00 €** | 10.7 % | **8.4 %** | 69.50 € | stávame sa najlacnejší |
| ANMITE A160W03 16" prenosný monitor | 88.90 € | **87.50 €** | 15.1 % | **13.3 %** | 87.82 € | stávame sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 82.90 € | **81.50 €** | 15.2 % | **13.2 %** | 81.89 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **9.60 €** | 52.9 % | **33.4 %** | 9.70 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 11.00 € | **9.60 €** | 54.5 % | **34.8 %** | 9.70 € | stávame sa najlacnejší |
| Tréninkové háky REBEL RBA-2505 | 11.90 € | **10.50 €** | 20.6 % | **6.4 %** | 10.83 € | stávame sa najlacnejší |
| LEIFHEIT Zametač koberců REGULUS | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 20.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 24992-70 | 40.90 € | **39.50 €** | 10.1 % | **6.3 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.90 € | **16.50 €** | 15.2 % | **6.2 %** | 16.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO9195C | 32.90 € | **31.50 €** | 10.1 % | **5.4 %** | 31.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mio Smartbox IV | 31.90 € | **30.50 €** | 11.1 % | **6.2 %** | 30.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 26800-56/RH | 26.90 € | **25.50 €** | 11.0 % | **5.2 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 34.90 € | **33.50 €** | 10.9 % | **6.5 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carlinkit HD2CP-PRO bezdrôtový adaptér Carplay&Android | 37.90 € | **36.50 €** | 15.1 % | **10.9 %** | 36.57 € | stávame sa najlacnejší |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 17.90 € | **16.50 €** | 49.7 % | **38.0 %** | 16.61 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.90 € | **46.50 €** | 38.5 % | **34.4 %** | 46.62 € | stávame sa najlacnejší |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 15.69 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.90 € | **38.50 €** | 38.6 % | **33.7 %** | 38.81 € | stávame sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.88 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 28.90 € | **27.50 €** | 15.1 % | **9.5 %** | 27.89 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 27.90 € | **26.50 €** | 15.0 % | **9.3 %** | 26.90 € | stávame sa najlacnejší |
| Stojan na mikrofón Fifine BM88 (ružový) | 42.90 € | **41.50 €** | 15.1 % | **11.4 %** | 41.90 € | stávame sa najlacnejší |
| JBL Bar 1000 MK2 Soundbar | 946.90 € | **945.50 €** | 5.5 % | **5.3 %** | 945.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 9.10 € | **7.80 €** | 36.2 % | **16.8 %** | 7.90 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 6.00 € | **4.80 €** | 39.0 % | **11.2 %** | 4.90 € | stávame sa najlacnejší |
| Veslařský trenažér HMS Premium ZW1600 | 671.00 € | **669.90 €** | 121128.5 % | **120929.8 %** | 670.00 € | stávame sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 369.00 € | **367.90 €** | 66566.7 % | **66367.9 %** | 368.00 € | stávame sa najlacnejší |
| Polarizer Filter Freewell for DJI Avata 2 | 19.00 € | **17.90 €** | 13.7 % | **7.1 %** | 18.00 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 59.00 € | **57.90 €** | 7.6 % | **5.6 %** | 58.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.70 € | **6.60 €** | 54.6 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.90 € | **3.80 €** | 54.4 % | **19.7 %** | 3.90 € | stávame sa najlacnejší |
| Solight LED reťaz s hviezdou na vianočný strom, výšk... | 17.00 € | **15.90 €** | 54.4 % | **44.4 %** | 15.96 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.90 €** | 23.0 % | **11.8 %** | 11.00 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 233.00 € | **231.90 €** | 41995.8 % | **41797.0 %** | 232.00 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim | 29.50 € | **28.50 €** | 10.5 % | **6.7 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrazda do dveří s vodováhou HMS DD400 | 30.50 € | **29.50 €** | 8.7 % | **5.1 %** | 23.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Powerbanka 20 000 FIXZEN2-20-BK | 22.50 € | **21.50 €** | 12.1 % | **7.1 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ONIKUMA CW905 Pink 2.4G Wireless Gaming Mouse | 13.50 € | **12.50 €** | 16.5 % | **7.9 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nordic walking hole NILS NW8612 | 30.50 € | **29.50 €** | 8.7 % | **5.1 %** | 27.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-586 Color | 23.90 € | **22.90 €** | 10.7 % | **6.0 %** | 20.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Xany 2C, aktivní pokojová anténa | 18.50 € | **17.50 €** | 11.2 % | **5.2 %** | 15.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Torras Ostand R Fusion Case for iPhone 16 Pro (Black) | 14.50 € | **13.50 €** | 14.5 % | **6.6 %** | 12.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic PETG (sivý) 1 kg | 11.50 € | **10.50 €** | 15.1 % | **5.1 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Koloběžka NILS Extreme HM603 růžová | 35.50 € | **34.50 €** | 8.8 % | **5.7 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trekingové hole NILS TK8602 | 39.90 € | **38.90 €** | 8.3 % | **5.6 %** | 37.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer TX1800U Nano Adaptér | 20.90 € | **19.90 €** | 10.5 % | **5.2 %** | 19.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal J1641474 | 12.50 € | **11.50 €** | 14.4 % | **5.3 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.90 € | **12.90 €** | 13.7 % | **5.5 %** | 12.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 11.8 % | **6.6 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Russell Hobbs 23840-70 | 18.90 € | **17.90 €** | 12.3 % | **6.4 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 22.90 € | **21.90 €** | 10.7 % | **5.9 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.90 € | **17.90 €** | 10.9 % | **5.1 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 15.50 € | **14.50 €** | 46.0 % | **36.6 %** | 14.54 € | stávame sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **24.00 €** | 13.9 % | **9.3 %** | 24.08 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **35.00 €** | 15.0 % | **11.9 %** | 35.08 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Floco, ... | 43.50 € | **42.50 €** | 37.7 % | **34.5 %** | 42.59 € | stávame sa najlacnejší |
| Recenzia zariadenia SMD Uni-T UT116A | 25.50 € | **24.50 €** | 14.3 % | **9.8 %** | 24.59 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 27.00 € | **26.00 €** | 15.7 % | **11.4 %** | 26.09 € | stávame sa najlacnejší |
| Solight PIR senzor pro E27 žiarovku, biely | 6.80 € | **5.80 €** | 44.0 % | **22.8 %** | 5.90 € | stávame sa najlacnejší |
| Ufesa Haku | 30.90 € | **29.90 €** | 11.3 % | **7.7 %** | 30.00 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.90 € | **32.90 €** | 11.1 % | **7.8 %** | 33.00 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.90 € | **120.90 €** | 10.3 % | **9.4 %** | 121.00 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 10 W | 1227.90 € | **1226.90 €** | 15.0 % | **14.9 %** | 1227.00 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **37.90 €** | 10.1 % | **7.3 %** | 38.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.90 € | **41.90 €** | 10.5 % | **8.0 %** | 42.00 € | stávame sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **261.90 €** | 15.0 % | **14.6 %** | 262.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 36.00 € | **35.00 €** | 38.1 % | **34.3 %** | 35.13 € | stávame sa najlacnejší |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 46.00 € | **45.00 €** | 14.4 % | **12.0 %** | 45.13 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **35.50 €** | 15.2 % | **12.1 %** | 35.63 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.50 €** | 15.6 % | **13.0 %** | 43.63 € | stávame sa najlacnejší |
| Filtračný systém Freewell UV Osmo Pocket 4P | 19.50 € | **18.50 €** | 14.9 % | **9.0 %** | 18.66 € | stávame sa najlacnejší |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 19.50 € | **18.50 €** | 14.9 % | **9.0 %** | 18.67 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra Glow Mist 1/8 | 19.50 € | **18.50 €** | 15.0 % | **9.1 %** | 18.67 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND64 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND8 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND1000 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND32 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 20.50 € | **19.50 €** | 14.2 % | **8.6 %** | 19.67 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 Plus | 44.50 € | **43.50 €** | 14.6 % | **12.1 %** | 43.67 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT18B MAX | 88.00 € | **87.00 €** | 12.9 % | **11.6 %** | 87.18 € | stávame sa najlacnejší |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 13.00 € | **12.00 €** | 47.8 % | **36.4 %** | 12.20 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **21.00 €** | 14.7 % | **9.5 %** | 21.21 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 33.50 € | **32.50 €** | 38.0 % | **33.9 %** | 32.73 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 31.50 € | **30.50 €** | 14.6 % | **11.0 %** | 30.73 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 20.50 € | **19.50 €** | 14.1 % | **8.5 %** | 19.75 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **41.50 €** | 15.0 % | **12.3 %** | 41.75 € | stávame sa najlacnejší |
| Pamäťová karta Lexar GOLD microSDXC 128 GB | 81.00 € | **80.00 €** | 8.5 % | **7.2 %** | 80.28 € | stávame sa najlacnejší |
| Meross MSP844(EU) inteligentný rýchlonabíjací napája... | 46.50 € | **45.50 €** | 15.5 % | **13.1 %** | 45.78 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 14.50 € | **13.50 €** | 18.6 % | **10.4 %** | 13.79 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.50 € | **15.50 €** | 12.8 % | **6.0 %** | 15.79 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.50 € | **15.50 €** | 15.0 % | **8.1 %** | 15.79 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 42.00 € | **41.00 €** | 14.7 % | **12.0 %** | 41.29 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 28.00 € | **27.00 €** | 14.5 % | **10.4 %** | 27.29 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 53.00 € | **52.00 €** | 8.1 % | **6.1 %** | 52.29 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.50 € | **11.50 €** | 14.8 % | **5.6 %** | 11.79 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 49.00 € | **48.00 €** | 15.0 % | **12.6 %** | 48.31 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 16.50 € | **15.50 €** | 14.8 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT113 | 11.50 € | **10.50 €** | 16.4 % | **6.3 %** | 10.85 € | stávame sa najlacnejší |
| Smart Visual Ear-Clean Rod Bebird R1 black | 15.50 € | **14.50 €** | 14.6 % | **7.2 %** | 14.85 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.50 € | **11.50 €** | 16.7 % | **7.3 %** | 11.89 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 57.50 € | **56.50 €** | 15.4 % | **13.4 %** | 56.89 € | stávame sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.50 € | **24.50 €** | 11.5 % | **7.1 %** | 24.89 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.50 € | **46.50 €** | 8.3 % | **6.0 %** | 46.89 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 29.50 € | **28.50 €** | 37.8 % | **33.2 %** | 28.90 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.50 € | **47.50 €** | 11.0 % | **8.7 %** | 47.90 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.50 € | **15.50 €** | 18.0 % | **10.8 %** | 15.90 € | stávame sa najlacnejší |
| Univerzálna montážna doska Moza Racing RS089 | 34.00 € | **33.00 €** | 15.1 % | **11.7 %** | 33.40 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 19.00 € | **18.00 €** | 14.3 % | **8.2 %** | 18.42 € | stávame sa najlacnejší |
| Solight LED 3D drevená vianočná dekorácia v ráme, 12... | 11.00 € | **10.00 €** | 52.9 % | **39.0 %** | 10.43 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 36W, 3... | 30.00 € | **29.00 €** | 36.9 % | **32.4 %** | 29.44 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 44.00 € | **43.00 €** | 14.7 % | **12.1 %** | 43.46 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Grey) | 15.00 € | **14.00 €** | 13.9 % | **6.3 %** | 14.49 € | stávame sa najlacnejší |
| Solight LED reflektor TOP, 50W, max. 6500lm, 3CCT, v... | 13.00 € | **12.00 €** | 42.1 % | **31.1 %** | 12.50 € | stávame sa najlacnejší |
| Domo DO 264 AP | 59.00 € | **58.00 €** | 10.1 % | **8.2 %** | 58.50 € | stávame sa najlacnejší |
| Philips SQM3642/00 TV držák na zeď | 21.00 € | **20.00 €** | 10.4 % | **5.2 %** | 20.50 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 69.90 € | **69.00 €** | 15.2 % | **13.8 %** | 69.28 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 69.90 € | **69.00 €** | 14.9 % | **13.5 %** | 69.28 € | stávame sa najlacnejší |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 69.90 € | **69.00 €** | 15.1 % | **13.6 %** | 69.28 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.90 € | **73.00 €** | 14.9 % | **13.5 %** | 73.38 € | stávame sa najlacnejší |
| Ariete Gran Gelato 4in1 644 | 172.90 € | **172.00 €** | 10.0 % | **9.5 %** | 172.50 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 11.90 € | **11.00 €** | 17.6 % | **8.7 %** | 11.29 € | stávame sa najlacnejší |
| Digitálny multimeter Habotest HT86B | 11.90 € | **11.00 €** | 16.4 % | **7.6 %** | 11.46 € | stávame sa najlacnejší |
| UV svietidlo Superfire A5, 365NM | 13.90 € | **13.00 €** | 14.8 % | **7.4 %** | 13.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 8.60 € | **7.70 €** | 47.5 % | **32.1 %** | 7.80 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 10Ah MHPower MS10-12(L) F2-6,3mm | 41.90 € | **41.00 €** | 7.5 % | **5.2 %** | 40.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.90 € | **23.00 €** | 39.2 % | **33.9 %** | 23.15 € | stávame sa najlacnejší |
| Filtr CPL Freewell do DJI Osmo Action 5 Pro | 17.90 € | **17.00 €** | 15.6 % | **9.8 %** | 17.25 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT203R | 53.90 € | **53.00 €** | 15.4 % | **13.5 %** | 53.29 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.90 € | **28.00 €** | 31.2 % | **27.1 %** | 28.29 € | stávame sa najlacnejší |
| FNIRSI DPS150 DC programovateľný mini laboratórny na... | 61.90 € | **61.00 €** | 10.9 % | **9.3 %** | 61.33 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 38.90 € | **38.00 €** | 15.6 % | **12.9 %** | 38.33 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.90 € | **18.00 €** | 16.1 % | **10.5 %** | 18.39 € | stávame sa najlacnejší |
| Puluz vodotesný fotografický batoh pre DJI Ronin-SC ... | 28.90 € | **28.00 €** | 15.1 % | **11.5 %** | 28.46 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.90 € | **18.00 €** | 17.6 % | **12.0 %** | 18.48 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – pieskovo béžový | 20.90 € | **20.00 €** | 19.1 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.00 €** | 10.3 % | **7.3 %** | 32.50 € | stávame sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **21.00 €** | 11.3 % | **6.7 %** | 21.50 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.00 €** | 11.0 % | **7.7 %** | 29.50 € | stávame sa najlacnejší |
| CrockPot SCV400RD | 52.90 € | **52.00 €** | 10.8 % | **8.9 %** | 52.50 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.00 €** | 11.5 % | **5.6 %** | 16.50 € | stávame sa najlacnejší |
| DOMO DO461FR | 36.90 € | **36.00 €** | 10.2 % | **7.5 %** | 36.50 € | stávame sa najlacnejší |
| Domo DO733K | 47.90 € | **47.00 €** | 10.8 % | **8.7 %** | 47.50 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 18.90 € | **18.00 €** | 11.2 % | **5.9 %** | 18.50 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.00 €** | 10.1 % | **6.4 %** | 26.50 € | stávame sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.00 € | **4.20 €** | 56.3 % | **31.3 %** | 4.27 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 6.20 € | **5.40 €** | 49.1 % | **29.9 %** | 5.50 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.50 €** | 55.0 % | **31.6 %** | 4.60 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.40 € | **4.70 €** | 48.3 % | **29.1 %** | 4.79 € | stávame sa najlacnejší |
| Solight rozbočovač, 2x 10A, biely-sivý | 3.50 € | **2.80 €** | 48.2 % | **18.6 %** | 2.90 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.60 € | **2.90 €** | 48.6 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.50 €** | 47.8 % | **35.2 %** | 7.60 € | stávame sa najlacnejší |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 7.10 € | **6.40 €** | 55.2 % | **39.9 %** | 6.50 € | stávame sa najlacnejší |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 953.50 € | **952.90 €** | 15.0 % | **14.9 %** | 953.00 € | stávame sa najlacnejší |
| Trekingové hole NILS TK8601 červené | 29.50 € | **28.90 €** | 7.8 % | **5.6 %** | 20.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trekingové hole NILS TK8601 modré | 29.50 € | **28.90 €** | 7.8 % | **5.6 %** | 20.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WA854RE Wireless N Extender | 17.50 € | **16.90 €** | 11.0 % | **7.2 %** | 13.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrazda do dveří s počítadlem a vodováhou HMS DD501 | 26.50 € | **25.90 €** | 7.9 % | **5.5 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrazda do dveří s počítadlem a vodováhou HMS DD500 | 23.50 € | **22.90 €** | 8.1 % | **5.3 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 35.50 € | **34.90 €** | 15.3 % | **13.4 %** | 34.91 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.50 € | **22.90 €** | 19.3 % | **16.2 %** | 22.99 € | stávame sa najlacnejší |
| Hyper PLA-CF Creality Filament (tmavozelený) | 19.50 € | **18.90 €** | 14.8 % | **11.3 %** | 18.99 € | stávame sa najlacnejší |
| FoodSaver FFC025X | 26.50 € | **25.90 €** | 11.8 % | **9.3 %** | 26.00 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **35.90 €** | 10.5 % | **8.7 %** | 36.00 € | stávame sa najlacnejší |
| DOMO DO754K | 36.50 € | **35.90 €** | 10.0 % | **8.2 %** | 36.00 € | stávame sa najlacnejší |
| EMS posilovač svalů HMS ABS Master PRO Multiset | 47.50 € | **46.90 €** | 8.3 % | **6.9 %** | 47.00 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **35.90 €** | 10.0 % | **8.2 %** | 36.00 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **22.90 €** | 11.8 % | **8.9 %** | 23.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.70 € | **7.10 €** | 47.6 % | **36.1 %** | 7.13 € | stávame sa najlacnejší |
| Solight andel s LED osvetlením a časovačom, 37cm, 3xAA | 8.30 € | **7.70 €** | 55.1 % | **43.9 %** | 7.76 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 4.40 € | **3.80 €** | 47.8 % | **27.7 %** | 3.90 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.70 € | **2.10 €** | 50.4 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Electrolux EF167 | 14.50 € | **13.90 €** | 12.3 % | **7.6 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm modrý | 13.50 € | **12.90 €** | 10.1 % | **5.2 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm šedý | 13.50 € | **12.90 €** | 10.1 % | **5.2 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.50 € | **15.90 €** | 10.5 % | **6.5 %** | 15.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 15.50 € | **14.90 €** | 10.5 % | **6.3 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester USB 2w1 FNIRSI FNAC-28 USB-C USB-A | 16.50 € | **15.90 €** | 12.7 % | **8.6 %** | 15.95 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 11.50 € | **10.90 €** | 36.1 % | **29.0 %** | 11.00 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **15.90 €** | 10.6 % | **6.6 %** | 16.00 € | stávame sa najlacnejší |
| Ardes 449TI | 16.50 € | **15.90 €** | 10.6 % | **6.6 %** | 16.00 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **15.90 €** | 11.3 % | **7.3 %** | 16.00 € | stávame sa najlacnejší |
| Nabíjačka SkyRC Q200neo | 122.50 € | **121.90 €** | 9.8 % | **9.3 %** | 121.91 € | stávame sa najlacnejší |
| DDPAI N1 Dual Dash cam WiFi 1296p + Rear camera 1080p | 67.50 € | **66.90 €** | 15.1 % | **14.1 %** | 66.99 € | stávame sa najlacnejší |
| Flytec V060 12000mah návnada loď | 118.50 € | **117.90 €** | 14.9 % | **14.3 %** | 117.99 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 10x42 | 186.50 € | **185.90 €** | 8.1 % | **7.7 %** | 186.00 € | stávame sa najlacnejší |
| G3Ferrari G1015502 Mikrovlnná trouba | 118.50 € | **117.90 €** | 10.5 % | **9.9 %** | 118.00 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 109.50 € | **108.90 €** | 10.4 % | **9.8 %** | 109.00 € | stávame sa najlacnejší |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 8.30 € | **7.80 €** | 55.5 % | **46.1 %** | 7.90 € | stávame sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 32GB | 13.00 € | **12.50 €** | 12.9 % | **8.6 %** | 9.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente IceQueen černá | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada 2x LED sklenené sviečky, časovač, 7,5x1... | 8.50 € | **8.00 €** | 53.9 % | **44.9 %** | 8.01 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.70 € | **2.20 €** | 52.4 % | **24.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.70 € | **3.20 €** | 55.1 % | **34.1 %** | 3.21 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.50 € | **7.00 €** | 46.2 % | **36.5 %** | 7.02 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.80 € | **5.30 €** | 48.8 % | **35.9 %** | 5.33 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **24.00 €** | 14.4 % | **12.1 %** | 24.04 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 13.50 € | **13.00 €** | 47.1 % | **41.7 %** | 13.05 € | stávame sa najlacnejší |
| Solight drevený LED svietnik, 10x LED, 25cm, 2x AA | 10.00 € | **9.50 €** | 51.7 % | **44.1 %** | 9.56 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.40 €** | 47.1 % | **34.7 %** | 5.46 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 162.00 € | **161.50 €** | 7.3 % | **6.9 %** | 161.57 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.00 € | **16.50 €** | 13.5 % | **10.1 %** | 16.58 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **18.00 €** | 37.9 % | **34.1 %** | 18.09 € | stávame sa najlacnejší |
| Odšťavovač G21 Gracioso horizontal | 205.50 € | **205.00 €** | 14.8 % | **14.6 %** | 205.09 € | stávame sa najlacnejší |
| Solight detektor dymu s WIFI pripojením | 18.50 € | **18.00 €** | 41.2 % | **37.4 %** | 18.13 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **24.00 €** | 15.2 % | **12.9 %** | 24.13 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 84.00 € | **83.50 €** | 14.9 % | **14.2 %** | 83.63 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.64 € | stávame sa najlacnejší |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.50 € | **14.00 €** | 54.3 % | **49.0 %** | 14.16 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.00 € | **18.50 €** | 37.2 % | **33.6 %** | 18.67 € | stávame sa najlacnejší |
| Solight ventilátor do kúpeľne | 10.50 € | **10.00 €** | 51.1 % | **43.9 %** | 10.17 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.50 €** | 13.9 % | **11.4 %** | 22.67 € | stávame sa najlacnejší |
| Herné slúchadlá QCY Heroad VNT200 (čierne) | 27.00 € | **26.50 €** | 15.0 % | **12.9 %** | 26.67 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.50 €** | 14.3 % | **11.6 %** | 20.68 € | stávame sa najlacnejší |
| Hodiny TechnoLine WT 3100 do koupelny | 24.00 € | **23.50 €** | 14.0 % | **11.7 %** | 23.69 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 67.00 € | **66.50 €** | 7.7 % | **6.9 %** | 66.69 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.20 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.00 € | **44.50 €** | 14.3 % | **13.0 %** | 44.73 € | stávame sa najlacnejší |
| Svetlomet Superfire HL06, 500lm, USB | 13.00 € | **12.50 €** | 15.3 % | **10.8 %** | 12.73 € | stávame sa najlacnejší |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 124.50 € | **124.00 €** | 13.8 % | **13.4 %** | 124.25 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.50 € | **22.00 €** | 9.3 % | **6.9 %** | 22.25 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.50 € | **12.00 €** | 53.5 % | **47.4 %** | 12.27 € | stávame sa najlacnejší |
| Blitzwolf BW-i113 GaN, USB-A, 3xUSB-C, 105W sieťová ... | 46.00 € | **45.50 €** | 14.9 % | **13.6 %** | 45.78 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI v oranžovej f... | 69.50 € | **69.00 €** | 14.8 % | **14.0 %** | 69.28 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 28.00 € | **27.50 €** | 14.3 % | **12.2 %** | 27.79 € | stávame sa najlacnejší |
| Konektor MC4 pro solární panely, rozbočení 4 panely,... | 15.50 € | **15.00 €** | 17.8 % | **14.0 %** | 15.29 € | stávame sa najlacnejší |
| AMIKO diaľkové ovládanie Univerzálny, HD - SD | 14.50 € | **14.00 €** | 26.9 % | **22.5 %** | 14.29 € | stávame sa najlacnejší |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.50 € | **83.00 €** | 18.0 % | **17.3 %** | 83.29 € | stávame sa najlacnejší |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **18.00 €** | 15.7 % | **12.6 %** | 18.29 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.50 € | **12.00 €** | 17.2 % | **12.5 %** | 12.29 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 60.50 € | **60.00 €** | 21.4 % | **20.4 %** | 60.29 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 74.50 € | **74.00 €** | 7.7 % | **7.0 %** | 74.29 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.00 € | **36.50 €** | 20.4 % | **18.7 %** | 36.79 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 137.50 € | **137.00 €** | 15.1 % | **14.7 %** | 137.29 € | stávame sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 12.50 € | **12.00 €** | 24.1 % | **19.1 %** | 12.29 € | stávame sa najlacnejší |
| Domo DO223S | 64.50 € | **64.00 €** | 13.0 % | **12.2 %** | 64.30 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC230 IP, 5MPx, WiFi, prísvit | 22.50 € | **22.00 €** | 9.1 % | **6.7 %** | 22.30 € | stávame sa najlacnejší |
| WHIRLPOOL WI 7020 P | 331.50 € | **331.00 €** | 8.1 % | **8.0 %** | 331.30 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 35dB | 19.50 € | **19.00 €** | 43.3 % | **39.7 %** | 19.31 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **45.00 €** | 21.5 % | **20.2 %** | 45.33 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.50 € | **17.00 €** | 31.5 % | **27.7 %** | 17.34 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 12.50 € | **12.00 €** | 46.9 % | **41.0 %** | 12.34 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.50 € | **12.00 €** | 36.4 % | **31.0 %** | 12.35 € | stávame sa najlacnejší |
| Paddleboard Jbay Zone J2 Comet 320x81x15, 145 Kg, Th... | 322.50 € | **322.00 €** | 6.5 % | **6.3 %** | 322.36 € | stávame sa najlacnejší |
| Blesk GODOX iM30 | 30.50 € | **30.00 €** | 15.3 % | **13.4 %** | 30.38 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 53.00 € | **52.50 €** | 15.0 % | **13.9 %** | 52.88 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (biely) | 50.50 € | **50.00 €** | 9.5 % | **8.4 %** | 50.38 € | stávame sa najlacnejší |
| Mikrofón Maono DM40 Pro (čierny) | 50.50 € | **50.00 €** | 10.3 % | **9.2 %** | 50.38 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.00 € | **26.50 €** | 13.5 % | **11.4 %** | 26.89 € | stávame sa najlacnejší |
| Domo DO42327PC | 99.00 € | **98.50 €** | 5.8 % | **5.3 %** | 98.89 € | stávame sa najlacnejší |
| DOMO DO42329PC | 113.50 € | **113.00 €** | 6.1 % | **5.7 %** | 113.39 € | stávame sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 35.50 € | **35.00 €** | 15.3 % | **13.7 %** | 35.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 245.50 € | **245.00 €** | 15.0 % | **14.7 %** | 245.39 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 472.00 € | **471.50 €** | 9.1 % | **9.0 %** | 471.89 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 901.50 € | **901.00 €** | 14.6 % | **14.5 %** | 901.39 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 94.00 € | **93.50 €** | 14.9 % | **14.2 %** | 93.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **27.50 €** | 14.5 % | **12.5 %** | 27.89 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.50 € | **62.00 €** | 14.9 % | **13.9 %** | 62.39 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 55.00 € | **54.50 €** | 14.9 % | **13.9 %** | 54.89 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 170.00 € | **169.50 €** | 14.9 % | **14.5 %** | 169.89 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 193.50 € | **193.00 €** | 15.0 % | **14.7 %** | 193.39 € | stávame sa najlacnejší |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 23.50 € | **23.00 €** | 14.1 % | **11.7 %** | 23.39 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 153.00 € | **152.50 €** | 14.9 % | **14.5 %** | 152.89 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 58.50 € | **58.00 €** | 6.0 % | **5.1 %** | 58.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 143.00 € | **142.50 €** | 10.8 % | **10.4 %** | 142.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 58.50 € | **58.00 €** | 21.7 % | **20.7 %** | 58.39 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 27.00 € | **26.50 €** | 19.6 % | **17.4 %** | 26.89 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3236 | 31.50 € | **31.00 €** | 7.2 % | **5.5 %** | 31.39 € | stávame sa najlacnejší |
| DOMO DO9286IB | 247.00 € | **246.50 €** | 5.4 % | **5.2 %** | 246.89 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 278.00 € | **277.50 €** | 8.1 % | **7.9 %** | 277.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 276.00 € | **275.50 €** | 6.5 % | **6.3 %** | 275.89 € | stávame sa najlacnejší |
| HP ENVY 6520e AiO (714N9B) | 101.50 € | **101.00 €** | 8.7 % | **8.1 %** | 101.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 94.00 € | **93.50 €** | 12.2 % | **11.6 %** | 93.89 € | stávame sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 24.50 € | **24.00 €** | 15.5 % | **13.2 %** | 24.39 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 208.50 € | **208.00 €** | 9.8 % | **9.5 %** | 208.39 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 196.00 € | **195.50 €** | 10.9 % | **10.6 %** | 195.89 € | stávame sa najlacnejší |
| Nabíjačka SkyRC NC3000 Pro | 70.50 € | **70.00 €** | 12.5 % | **11.7 %** | 70.39 € | stávame sa najlacnejší |
| Whirlpool NoFrost WHK 22414 XBR8EA | 877.00 € | **876.50 €** | 9.8 % | **9.7 %** | 876.89 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 688.00 € | **687.50 €** | 6.0 % | **6.0 %** | 687.89 € | stávame sa najlacnejší |
| DOMO DO91135F | 325.50 € | **325.00 €** | 9.3 % | **9.2 %** | 325.39 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 637.00 € | **636.50 €** | 6.2 % | **6.1 %** | 636.89 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 673.50 € | **673.00 €** | 8.9 % | **8.8 %** | 673.39 € | stávame sa najlacnejší |
| Whirlpool WP B9X WBS EE | 702.50 € | **702.00 €** | 9.7 % | **9.6 %** | 702.39 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **89.50 €** | 14.8 % | **14.2 %** | 89.89 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 21.00 € | **20.50 €** | 38.4 % | **35.1 %** | 20.90 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – pieskovo béžová | 20.00 € | **19.50 €** | 13.9 % | **11.1 %** | 19.90 € | stávame sa najlacnejší |
| Solight LED vonkajší vianočný záves, hviezdy, šírka ... | 14.00 € | **13.50 €** | 43.7 % | **38.6 %** | 13.90 € | stávame sa najlacnejší |
| Solight profesionálny multimeter | 14.00 € | **13.50 €** | 29.5 % | **24.9 %** | 13.90 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 16.00 € | **15.50 €** | 15.9 % | **12.3 %** | 15.90 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.50 €** | 10.4 % | **6.2 %** | 12.90 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 40 x 50 cm, 50 ks, hladké | 12.00 € | **11.50 €** | 16.4 % | **11.6 %** | 11.90 € | stávame sa najlacnejší |
| Beper 50451 Tyčový Vakuový Vysavač S He | 52.00 € | **51.50 €** | 10.2 % | **9.1 %** | 51.90 € | stávame sa najlacnejší |
| DOMO DO42102SV | 81.00 € | **80.50 €** | 9.1 % | **8.5 %** | 80.90 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.50 € | **41.00 €** | 8.3 % | **7.0 %** | 41.40 € | stávame sa najlacnejší |
| Solight lokátor na bicykel, Find My kompatibilný | 15.00 € | **14.50 €** | 41.6 % | **36.9 %** | 14.90 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 36.00 € | **35.50 €** | 32.0 % | **30.1 %** | 35.90 € | stávame sa najlacnejší |
| Karta microSD Lexar 3.0 s kapacitou 64 GB | 18.50 € | **18.00 €** | 9.7 % | **6.7 %** | 18.40 € | stávame sa najlacnejší |
| Maxlife MXBH-01 černé | 19.00 € | **18.50 €** | 10.4 % | **7.5 %** | 18.90 € | stávame sa najlacnejší |
| TESLA TE-344 venkovní anténa | 27.00 € | **26.50 €** | 43.8 % | **41.2 %** | 26.90 € | stávame sa najlacnejší |
| FRACARRO anténa LP45F 700 s LTE | 18.50 € | **18.00 €** | 10.8 % | **7.8 %** | 18.42 € | stávame sa najlacnejší |
| Filtrácia CPL Freewell do DJI Air 3S | 17.50 € | **17.00 €** | 10.5 % | **7.3 %** | 17.44 € | stávame sa najlacnejší |
| Hyper PLA Filament Creality (Blue) | 13.50 € | **13.00 €** | 21.8 % | **17.3 %** | 13.46 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **19.00 €** | 14.1 % | **11.1 %** | 19.46 € | stávame sa najlacnejší |
| Sous vide G21 Maestro, WiFi, 1200 W | 110.50 € | **110.00 €** | 14.6 % | **14.1 %** | 110.47 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 21.50 € | **21.00 €** | 11.6 % | **9.0 %** | 21.47 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 19.50 € | **19.00 €** | 34.9 % | **31.5 %** | 19.48 € | stávame sa najlacnejší |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.50 € | **14.00 €** | 12.6 % | **8.7 %** | 14.48 € | stávame sa najlacnejší |
| Herné slúchadlá QCY Heroad VN200 (čierne a červené) | 22.50 € | **22.00 €** | 14.3 % | **11.8 %** | 22.48 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Classic Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.49 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Eccentric Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.49 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 124.50 € | **124.00 €** | 6.9 % | **6.5 %** | 124.49 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 15.50 € | **15.00 €** | 33.9 % | **29.6 %** | 15.49 € | stávame sa najlacnejší |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 11.50 € | **11.00 €** | 68.8 % | **61.4 %** | 11.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 11.50 € | **11.00 €** | 37.1 % | **31.1 %** | 11.49 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Black) | 14.50 € | **14.00 €** | 16.1 % | **12.1 %** | 14.49 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **17.00 €** | 14.7 % | **11.5 %** | 17.49 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.50 € | **44.00 €** | 15.4 % | **14.1 %** | 44.49 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2x 1,5mm2, gumová, čierna, 5m | 8.20 € | **7.70 €** | 48.5 % | **39.4 %** | 7.80 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1291.90 € | **1291.50 €** | 7.3 % | **7.2 %** | 1291.79 € | stávame sa najlacnejší |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2404 | 107.90 € | **107.50 €** | 15.3 % | **14.8 %** | 107.54 € | stávame sa najlacnejší |
| Arzopa Portable Monitor A1 15,6" | 82.90 € | **82.50 €** | 9.6 % | **9.1 %** | 82.58 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 150.90 € | **150.50 €** | 12.3 % | **12.0 %** | 150.65 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 114.90 € | **114.50 €** | 10.4 % | **10.0 %** | 114.71 € | stávame sa najlacnejší |
| Paddleboard Jbay Zone H1 Kame 297x76x15, 120 Kg, All... | 221.90 € | **221.50 €** | 5.4 % | **5.3 %** | 221.74 € | stávame sa najlacnejší |
| Paddleboard Jbay Zone H3 Kame 297x81x10, 99 Kg, All ... | 221.90 € | **221.50 €** | 5.4 % | **5.3 %** | 221.74 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 67.90 € | **67.50 €** | 7.1 % | **6.5 %** | 67.79 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 137.90 € | **137.50 €** | 15.1 % | **14.7 %** | 137.79 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 93.90 € | **93.50 €** | 8.8 % | **8.4 %** | 93.79 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 86.90 € | **86.50 €** | 15.0 % | **14.4 %** | 86.79 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz KM2240 Connect C200 Tuya Wi-Fi | 166.90 € | **166.50 €** | 13.3 % | **13.0 %** | 166.79 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 135.90 € | **135.50 €** | 9.2 % | **8.9 %** | 135.79 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 175.90 € | **175.50 €** | 7.8 % | **7.6 %** | 175.80 € | stávame sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 119.90 € | **119.50 €** | 9.8 % | **9.4 %** | 119.81 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **79.50 €** | 15.2 % | **14.6 %** | 79.89 € | stávame sa najlacnejší |
| Nordic walking hole NILS NW602 EXTREME | 15.90 € | **15.50 €** | 8.0 % | **5.3 %** | 12.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trekingové hole NILS TK696 EXTREME | 15.90 € | **15.50 €** | 8.0 % | **5.3 %** | 12.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nordic walking hole NILS EXTREME NW607 modré | 15.90 € | **15.50 €** | 8.0 % | **5.3 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nordic walking hole NILS NW608 EXTREME | 15.90 € | **15.50 €** | 8.0 % | **5.3 %** | 14.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nordic walking hole NILS NW603 EXTREME | 15.90 € | **15.50 €** | 8.0 % | **5.3 %** | 14.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.40 € | **5.00 €** | 47.3 % | **36.4 %** | 5.01 € | stávame sa najlacnejší |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.90 € | **10.50 €** | 40.4 % | **35.3 %** | 10.60 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.40 € | **5.00 €** | 34.7 % | **24.7 %** | 5.10 € | stávame sa najlacnejší |
| Solight USB-C fast charger 20W | 5.40 € | **5.00 €** | 45.4 % | **34.6 %** | 5.10 € | stávame sa najlacnejší |
| Solight USB-C fast charger 20W | 5.40 € | **5.00 €** | 45.4 % | **34.6 %** | 5.10 € | stávame sa najlacnejší |
| Slúchadlá QCY Crossky C10 (biele) | 12.90 € | **12.50 €** | 11.2 % | **7.8 %** | 12.65 € | stávame sa najlacnejší |
| HP Wireless Mouse 220 Black | 13.90 € | **13.50 €** | 13.8 % | **10.5 %** | 13.71 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 4.30 € | **3.90 €** | 46.9 % | **33.2 %** | 4.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.40 €** | 48.9 % | **36.5 %** | 4.41 € | stávame sa najlacnejší |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 5.30 € | **4.90 €** | 47.1 % | **36.0 %** | 4.94 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.10 € | **6.70 €** | 55.2 % | **46.4 %** | 6.80 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| Solight náhradný akumulátor typ 18650, 3,7 V, Li-Ion... | 8.10 € | **7.70 €** | 44.7 % | **37.6 %** | 7.80 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C206 IP, 2MPx, WiFi, prísvit | 34.90 € | **34.50 €** | 7.7 % | **6.5 %** | 34.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 34.90 € | **34.50 €** | 15.3 % | **14.0 %** | 34.54 € | stávame sa najlacnejší |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.90 € | **43.50 €** | 15.0 % | **13.9 %** | 43.59 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell O... | 18.90 € | **18.50 €** | 15.6 % | **13.2 %** | 18.67 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.69 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 16.90 € | **16.50 €** | 13.8 % | **11.1 %** | 16.69 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.90 € | **18.50 €** | 16.1 % | **13.6 %** | 18.75 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.90 € | **17.50 €** | 13.3 % | **10.7 %** | 17.75 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.50 €** | 15.4 % | **12.8 %** | 17.77 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.50 €** | 15.2 % | **12.6 %** | 17.77 € | stávame sa najlacnejší |
| Battery Tester Ancel BA101 8-30V DC | 43.90 € | **43.50 €** | 15.3 % | **14.3 %** | 43.78 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 58.90 € | **58.50 €** | 10.6 % | **9.8 %** | 58.79 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.90 € | **23.50 €** | 14.9 % | **13.0 %** | 23.79 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 54.90 € | **54.50 €** | 5.9 % | **5.1 %** | 54.79 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 20.90 € | **20.50 €** | 18.1 % | **15.8 %** | 20.80 € | stávame sa najlacnejší |
| Redmi Buds 8 Lite Black | 19.90 € | **19.50 €** | 8.9 % | **6.8 %** | 19.80 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 39.90 € | **39.50 €** | 24.8 % | **23.6 %** | 39.82 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 19.90 € | **19.50 €** | 10.6 % | **8.4 %** | 19.83 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 35.90 € | **35.50 €** | 7.1 % | **6.0 %** | 35.86 € | stávame sa najlacnejší |
| Resto 93501 Hrnec s pokličkou 20 cm | 35.90 € | **35.50 €** | 9.8 % | **8.6 %** | 35.88 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 12.7 % | **10.2 %** | 17.88 € | stávame sa najlacnejší |
| JBL Tune 530BT Blue | 38.90 € | **38.50 €** | 6.7 % | **5.6 %** | 38.89 € | stávame sa najlacnejší |
| JBL Tune 530BT Lavender | 38.90 € | **38.50 €** | 6.7 % | **5.6 %** | 38.89 € | stávame sa najlacnejší |
| Dalekohled monokulární LEVENHUK Halo NVM20 Helmet s ... | 555.90 € | **555.50 €** | 7.9 % | **7.9 %** | 555.74 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 504.90 € | **504.50 €** | 6.4 % | **6.3 %** | 504.74 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 325.90 € | **325.50 €** | 11.2 % | **11.1 %** | 325.79 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 259.90 € | **259.50 €** | 15.0 % | **14.8 %** | 259.79 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 365.90 € | **365.50 €** | 9.3 % | **9.2 %** | 365.87 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 286.90 € | **286.50 €** | 6.2 % | **6.0 %** | 286.87 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 344.90 € | **344.50 €** | 6.7 % | **6.6 %** | 344.89 € | stávame sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 10.00 € | **9.70 €** | 38.7 % | **34.6 %** | 9.71 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **9.50 €** | 38.1 % | **33.9 %** | 9.56 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight zásuvka do vlhka, priama, IP44, čierna | 3.10 € | **2.80 €** | 50.0 % | **35.5 %** | 2.82 € | stávame sa najlacnejší |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 3.50 € | **3.20 €** | 49.0 % | **36.2 %** | 3.21 € | stávame sa najlacnejší |
| Solight digitálny časový spínač | 7.30 € | **7.00 €** | 45.5 % | **39.5 %** | 7.02 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 1x USB, 2400mA, AC 230... | 4.80 € | **4.50 €** | 45.1 % | **36.0 %** | 4.53 € | stávame sa najlacnejší |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 3.30 € | **3.00 €** | 49.1 % | **35.5 %** | 3.03 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.90 € | **2.60 €** | 48.3 % | **32.9 %** | 2.68 € | stávame sa najlacnejší |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.80 € | **2.50 €** | 46.9 % | **31.1 %** | 2.60 € | stávame sa najlacnejší |
| Solight rozbočovač, 4 x 10A, čierny | 2.80 € | **2.50 €** | 45.9 % | **30.3 %** | 2.60 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 8.00 € | **7.80 €** | 38.1 % | **34.6 %** | 7.81 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 2.10 € | **1.90 €** | 49.8 % | **35.5 %** | 1.91 € | stávame sa najlacnejší |
| Solight LED svetelný zdroj do stropných svetiel, 24W... | 6.00 € | **5.80 €** | 48.3 % | **43.3 %** | 5.85 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.70 € | **5.50 €** | 30.2 % | **25.6 %** | 5.56 € | stávame sa najlacnejší |
| Solight LED svetelný zdroj do stropných svetiel, 12W... | 4.00 € | **3.80 €** | 49.2 % | **41.7 %** | 3.87 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 6.80 € | **6.60 €** | 16.1 % | **12.7 %** | 6.69 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 50m, pr... | 5.30 € | **5.10 €** | 31.4 % | **26.4 %** | 5.19 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.60 € | **2.40 €** | 56.6 % | **44.5 %** | 2.49 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 7.90 € | **7.70 €** | 38.4 % | **34.9 %** | 7.80 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.70 € | **1.50 €** | 45.5 % | **28.4 %** | 1.54 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.40 € | **2.20 €** | 56.1 % | **43.1 %** | 2.23 € | stávame sa najlacnejší |
| Solight napájací kábel pre lineárne osvetlenie, dĺžk... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.29 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.00 € | **8.80 €** | 8.4 % | **6.0 %** | 8.89 € | stávame sa najlacnejší |
| Anténa NEDIS ANIR2502BK700 / 0-25 km / 30 dB / FM/VH... | 27.00 € | **26.90 €** | 32.6 % | **32.1 %** | 26.91 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 17.00 € | **16.90 €** | 24.6 % | **23.9 %** | 16.97 € | stávame sa najlacnejší |
| Huanuo HNCM9 13-32" monitor mount | 30.00 € | **29.90 €** | 14.2 % | **13.9 %** | 29.97 € | stávame sa najlacnejší |
| Solight stredný dvojramenný konzolový držiak pre plo... | 29.00 € | **28.90 €** | 28.3 % | **27.9 %** | 28.97 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 64.00 € | **63.90 €** | 24.7 % | **24.5 %** | 63.98 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.00 € | **32.90 €** | 14.2 % | **13.8 %** | 32.99 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 29.00 € | **28.90 €** | 12.8 % | **12.4 %** | 28.99 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.90 €** | 12.1 % | **11.8 %** | 40.99 € | stávame sa najlacnejší |
| Statív s 3D 360° hlavou + držiak na telefón Puluz PU... | 26.00 € | **25.90 €** | 14.3 % | **13.9 %** | 25.99 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, 20 - 200A | 6.70 € | **6.60 €** | 40.0 % | **37.9 %** | 6.67 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 7.40 € | **7.30 €** | 20.1 % | **18.5 %** | 7.39 € | stávame sa najlacnejší |
| Solight LED žiarovka G4, 1,5W, 3000K, 130lm | 2.10 € | **2.00 €** | 49.8 % | **42.6 %** | 2.02 € | stávame sa najlacnejší |
| Solight LED svietidlo pracovné, 120+40lm, 3W COB + 3... | 3.90 € | **3.80 €** | 53.2 % | **49.2 %** | 3.83 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 3000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.45 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 4000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.45 € | stávame sa najlacnejší |
| Solight držiak viacnásobné zásuvky, 5 - 6 zásuviek | 1.60 € | **1.50 €** | 64.7 % | **54.4 %** | 1.55 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.90 €** | 46.0 % | **41.2 %** | 2.98 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV04/5/6/7/T | 1.20 € | **1.10 €** | 52.4 % | **39.7 %** | 1.15 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 8W, E14, 300... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.17 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 8W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.17 € | stávame sa najlacnejší |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.90 € | **1.80 €** | 36.7 % | **29.5 %** | 1.89 € | stávame sa najlacnejší |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.21 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 22W, E27, 3000K... | 3.30 € | **3.20 €** | 48.2 % | **43.7 %** | 3.21 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 22W, E27, 4000K... | 3.30 € | **3.20 €** | 48.2 % | **43.7 %** | 3.21 € | stávame sa najlacnejší |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **4.20 €** | 54.0 % | **50.4 %** | 4.21 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.60 € | **9.50 €** | 35.3 % | **33.9 %** | 9.56 € | stávame sa najlacnejší |
| Solight magnetický Lightning kábel, USB 2.0 A konekt... | 4.30 € | **4.20 €** | 55.4 % | **51.8 %** | 4.27 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.80 € | **3.70 €** | 55.2 % | **51.2 %** | 3.77 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 3.80 € | **3.70 €** | 55.2 % | **51.2 %** | 3.77 € | stávame sa najlacnejší |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 9.10 € | **9.00 €** | 23.7 % | **22.4 %** | 9.09 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.00 € | **7.90 €** | 29.3 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| GUZZANTI GZ 44GW | 199.00 € | **198.90 €** | 6.3 % | **6.2 %** | 198.96 € | stávame sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 78.00 € | **77.90 €** | 6.3 % | **6.2 %** | 77.98 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 71.00 € | **70.90 €** | 14.6 % | **14.4 %** | 70.99 € | stávame sa najlacnejší |

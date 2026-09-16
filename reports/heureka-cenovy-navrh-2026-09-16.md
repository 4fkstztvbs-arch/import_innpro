# Návrh na úpravu cien podľa Heureka porovnania — 2026-09-16

Vstup: `premiumstore-sk_2026-09-16_18-34.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **6493**
- Návrh **zvýšiť** cenu: **422** produktov
- Návrh **znížiť** cenu: **1049** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **5022** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **338**
- Zľava zrušená, lebo by nepohla cenovou pozíciou: **282**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (422)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Router GL.iNet Puli AX 5G NR | 502.50 € | **522.90 €** | 10.5 % | **15.0 %** | 522.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 116.90 € | **127.00 €** | 15.0 % | **24.9 %** | 126.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá GARRETT MS-2 s 2-pinovým konektorom a vodo... | 114.50 € | **123.90 €** | 6.3 % | **15.0 %** | 123.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 15m, 2 x 1,5mm... | 4.80 € | **13.90 €** | 19.7 % | **246.7 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux 600 FLEX EES42210IX | 462.90 € | **471.90 €** | 5.0 % | **7.1 %** | 462.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux KGS64362XX | 191.50 € | **198.50 €** | 5.1 % | **9.0 %** | 191.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit MINI ULTRA Carplay a An... | 14.00 € | **20.00 €** | 14.9 % | **64.1 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| IMOU S800 PRO palubná kamera, 4K | 100.00 € | **105.50 €** | 6.8 % | **12.7 %** | 105.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 21.50 € | **26.90 €** | 8.7 % | **36.0 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10S | 338.00 € | **343.00 €** | 5.0 % | **6.6 %** | 338.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjecí baterie GP ReCyko Pro Professional 2000 AA ... | 21.90 € | **26.50 €** | 8.4 % | **31.1 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový adaptér Carlinkit AIR X2 Carplay/Android ... | 27.50 € | **31.50 €** | 14.4 % | **31.1 %** | 31.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| AnyCubic Wash & Cure 3 - Print cleaning and drying d... | 84.50 € | **88.50 €** | 6.1 % | **11.2 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS1 PRO POCKET PRO AIRBANK – mini pumpa na b... | 47.00 € | **51.00 €** | 5.7 % | **14.7 %** | 51.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje GEC5C41SG | 313.90 € | **317.00 €** | 8.0 % | **9.1 %** | 313.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight izbová anténa, DVB-T2/FM, 36dB | 11.50 € | **14.50 €** | 14.3 % | **44.1 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 37.00 € | **39.90 €** | 7.7 % | **16.1 %** | 37.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor so sklopným stojanom, 30W, 270... | 16.00 € | **18.90 €** | 15.9 % | **37.0 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V/10A, max. DC 600V/1... | 8.90 € | **11.50 €** | 12.4 % | **45.2 %** | 8.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uperfect UXbox E4 M185T08 18'' 1920x1080 120Hz preno... | 171.90 € | **174.50 €** | 15.1 % | **16.9 %** | 174.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 66.90 € | **69.50 €** | 5.7 % | **9.8 %** | 66.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrická pumpa Cycplus AS280PRO | 38.00 € | **40.50 €** | 8.4 % | **15.5 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Múdra zásuvka TP-Link Tapo P100M(EU) regulácia 230V ... | 12.50 € | **15.00 €** | 7.7 % | **29.2 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 2m, v... | 32.00 € | **34.50 €** | 25.8 % | **35.6 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 52127 Set Clean Twist M Ergo | 41.50 € | **43.90 €** | 9.3 % | **15.6 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 45.90 € | **48.00 €** | 28.5 % | **34.4 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fotoateliér Puluz 40cm 24W 5500K PU5042EU | 51.50 € | **53.50 €** | 5.1 % | **9.2 %** | 53.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná teplovzdušná pištoľ FNIRSI SAG-55 | 45.50 € | **47.50 €** | 5.3 % | **9.9 %** | 47.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herní mikrofon Maono DGM20 (černý) | 25.00 € | **27.00 €** | 5.5 % | **13.9 %** | 26.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón Maono DGM20 (biely) | 25.00 € | **27.00 €** | 5.8 % | **14.2 %** | 26.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartphone HOTWAV Hyper 7 Pro (červený) | 305.50 € | **307.50 €** | 5.1 % | **5.8 %** | 307.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 21.90 € | **23.90 €** | 8.2 % | **18.1 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA Verto II 1423 90000 bílý/zlatý | 30.00 € | **32.00 €** | 8.4 % | **15.7 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| HP 15,6" Taška Prelude | 14.00 € | **16.00 €** | 6.0 % | **21.1 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje MO20A3WH | 73.50 € | **75.50 €** | 10.3 % | **13.3 %** | 73.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **16.90 €** | 10.6 % | **25.5 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Thomson MIC201IBT | 112.00 € | **113.90 €** | 9.7 % | **11.6 %** | 112.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 2in1 Diagnostic Scanner OBD2 and Battery Tester Ance... | 47.00 € | **48.90 €** | 15.0 % | **19.6 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Carlinkit U2W MINI bezdrôtový adaptér Apple Carplay ... | 19.00 € | **20.90 €** | 14.8 % | **26.2 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal VC139810 | 30.00 € | **31.90 €** | 9.5 % | **16.5 %** | 30.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal BC50D2V0 | 15.90 € | **17.50 €** | 9.6 % | **20.7 %** | 15.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas Pro 19 GT1902 | 870.50 € | **872.00 €** | 14.8 % | **15.0 %** | 872.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS210 MAX AT1 Max Anoutway – mini pumpa na b... | 42.00 € | **43.50 €** | 10.5 % | **14.5 %** | 43.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Perfect Steam Air Board L/Uni | 13.50 € | **15.00 €** | 8.8 % | **20.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 36.50 € | **38.00 €** | 9.3 % | **13.8 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Odšťavovač G21 Gracioso horizontal | 203.50 € | **205.00 €** | 13.7 % | **14.6 %** | 203.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 25.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 26.50 € | **27.90 €** | 8.8 % | **14.6 %** | 27.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 0028 92020 | 66.90 € | **68.00 €** | 10.0 % | **11.8 %** | 66.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Smartring Colmi R12 19,1MM 9 (čierny) | 34.50 € | **35.50 €** | 15.4 % | **18.7 %** | 35.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 35.50 € | **36.50 €** | 14.4 % | **17.6 %** | 36.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (béžové) | 37.50 € | **38.50 €** | 12.5 % | **15.5 %** | 38.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Edifier W800BT Pro, ANC (sivé) | 37.50 € | **38.50 €** | 12.5 % | **15.5 %** | 38.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Recenzia zariadenia SMD Uni-T UT116A | 23.50 € | **24.50 €** | 5.3 % | **9.8 %** | 24.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Colmi V69 smartwatch (black) | 35.50 € | **36.50 €** | 15.4 % | **18.7 %** | 36.63 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 10.90 € | **11.90 €** | 6.3 % | **16.0 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK WiFi N300 USB Adaptér (DWA-137) | 14.50 € | **15.50 €** | 6.5 % | **13.8 %** | 14.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SONY WFC510L modrá | 37.00 € | **38.00 €** | 9.2 % | **12.1 %** | 37.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 334.00 € | **335.00 €** | 6.8 % | **7.2 %** | 334.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 70.00 € | **70.90 €** | 9.3 % | **10.7 %** | 70.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.00 € | **69.90 €** | 33.0 % | **34.7 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 69.00 € | **69.90 €** | 22.1 % | **23.7 %** | 69.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 78.00 € | **78.90 €** | 14.0 % | **15.3 %** | 78.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 14.00 € | **14.90 €** | 14.3 % | **21.6 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter digitálny V33 | 11.00 € | **11.90 €** | 11.4 % | **20.5 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick so senzorom, 10W, 850lm,... | 10.00 € | **10.90 €** | 34.6 % | **46.7 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.00 € | **11.90 €** | 5.2 % | **13.8 %** | 11.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač 1x 16A + 2x 2,5A, 2xUSB A+C rychl... | 10.00 € | **10.90 €** | 26.6 % | **38.0 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký fixný držiak pre ploché TV, 94cm - 190... | 12.00 € | **12.90 €** | 25.1 % | **34.5 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.60 € | **5.50 €** | 19.5 % | **42.9 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 5.70 € | **6.60 €** | 14.4 % | **32.5 %** | 5.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **36.90 €** | 14.6 % | **17.5 %** | 36.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **36.90 €** | 15.0 % | **17.8 %** | 36.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus AS230 PRO DP5 PRO Mini Bike Pump | 45.00 € | **45.90 €** | 12.8 % | **15.0 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 28.00 € | **28.90 €** | 34.8 % | **39.1 %** | 28.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displayom, 6W, 4100K, ... | 21.00 € | **21.90 €** | 13.4 % | **18.3 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička stmievaťelná, 12W, voľba... | 39.00 € | **39.90 €** | 13.5 % | **16.1 %** | 39.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 20.00 € | **20.90 €** | 11.1 % | **16.1 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.00 € | **21.90 €** | 28.5 % | **34.0 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 16.00 € | **16.90 €** | 9.4 % | **15.6 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 15m,... | 27.00 € | **27.90 €** | 11.0 % | **14.7 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 5.80 € | **6.60 €** | 16.4 % | **32.5 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT210B Mini digitálny klešťový multimeter | 21.90 € | **22.50 €** | 6.9 % | **9.8 %** | 22.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 32.90 € | **33.50 €** | 31.1 % | **33.4 %** | 32.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 20.90 € | **21.50 €** | 6.2 % | **9.2 %** | 20.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkovým ovladačem Estela Bl... | 31.90 € | **32.50 €** | 30.8 % | **33.2 %** | 31.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 27.90 € | **28.50 €** | 13.6 % | **16.0 %** | 27.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás 5m, 120LED/m, 10W/m, 1100lm... | 11.90 € | **12.50 €** | 35.9 % | **42.7 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED  projekčná guľa, multicolor, 9 režimov, ... | 10.90 € | **11.50 €** | 33.9 % | **41.2 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vianočná kométa, 10x LED, drevená, 30cm | 9.90 € | **10.50 €** | 40.0 % | **48.5 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy OFFICE M40 Vertical | 13.90 € | **14.50 €** | 11.3 % | **16.1 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Guzzanti GZ 05A1 | 104.90 € | **105.50 €** | 9.5 % | **10.1 %** | 104.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| PULUZ PU3224B Držiak na telefón čierny | 14.00 € | **14.50 €** | 12.5 % | **16.5 %** | 14.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless Lavalier Microphone PULUZ 1 TX + 1 RX | 19.00 € | **19.50 €** | 11.2 % | **14.1 %** | 19.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás UREVO Spacewalk E1L (čierny) | 205.00 € | **205.50 €** | 9.9 % | **10.2 %** | 205.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vlákno HP ASA Creality (čierne) | 22.00 € | **22.50 €** | 7.3 % | **9.7 %** | 22.27 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 36.00 € | **36.50 €** | 6.1 % | **7.6 %** | 36.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Príslušenstvo Puluz Ultimate Combo Kits pre športové... | 31.00 € | **31.50 €** | 5.9 % | **7.6 %** | 31.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 2 v 1 xTool M1 10W + pohl... | 1280.00 € | **1280.50 €** | 9.0 % | **9.1 %** | 1280.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic ASA (sivý) 1 kg | 18.00 € | **18.50 €** | 12.2 % | **15.3 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Filament Anycubic ASA (biely) 1 kg | 18.00 € | **18.50 €** | 12.2 % | **15.3 %** | 18.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant Moza Racing RS V2 RS25 | 402.00 € | **402.50 €** | 8.5 % | **8.6 %** | 402.29 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa DarkFlash DS900G (čierna) | 50.00 € | **50.50 €** | 12.2 % | **13.4 %** | 50.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Súprava inteligentného solárneho vodného čerpadla s ... | 59.00 € | **59.50 €** | 8.3 % | **9.2 %** | 59.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| IPL epilátor ANLAN 02-ATMY52-0RE | 104.00 € | **104.50 €** | 8.2 % | **8.8 %** | 104.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cestovný batoh pre domáce zvieratá PetKit Breezy 2 (... | 71.00 € | **71.50 €** | 13.1 % | **13.9 %** | 71.31 € | dobehnutie 2. najlacnejšieho konkurenta |
| Držiak mikrofónu Maono BA37 | 28.00 € | **28.50 €** | 8.0 % | **9.9 %** | 28.32 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff ZBM5-1C-80W (1 kanál) Inteligentný dotykový n... | 21.00 € | **21.50 €** | 9.5 % | **12.1 %** | 21.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Set of 6 Freewell All Day filters for DJI Mini 3 Pro... | 40.00 € | **40.50 €** | 8.3 % | **9.7 %** | 40.33 € | dobehnutie 2. najlacnejšieho konkurenta |
| Projektor Phillips G-900 s rozlíšením 2160p (čierny) | 826.00 € | **826.50 €** | 7.6 % | **7.7 %** | 826.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun Z10Pro (čierny) | 415.00 € | **415.50 €** | 12.5 % | **12.6 %** | 415.35 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné reproduktory Onikuma L2 | 12.00 € | **12.50 €** | 11.8 % | **16.4 %** | 12.37 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodinky Colmi V89 Smartwatch (čierna oceľ) | 28.00 € | **28.50 €** | 5.2 % | **7.1 %** | 28.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hodinky Colmi V89 Smartwatch (čierne) | 28.00 € | **28.50 €** | 6.7 % | **8.6 %** | 28.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nastaviteľný stojan na herný volant PXN-A9 (čierny) | 70.00 € | **70.50 €** | 11.9 % | **12.7 %** | 70.38 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálna vložka zámku Avatto SDL-V1-B90 90 mm čierna | 90.00 € | **90.50 €** | 14.5 % | **15.1 %** | 90.39 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier S355DB 2.1 (hnedé) | 358.00 € | **358.50 €** | 8.4 % | **8.6 %** | 358.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| MINI-PC Minis Forum MS-01-S1390 Intel Core i9-13900H... | 770.00 € | **770.50 €** | 9.9 % | **10.0 %** | 770.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Habotest MY6238 Viacúčelový detektor 4v1 | 17.00 € | **17.50 €** | 10.4 % | **13.6 %** | 17.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Btalk Pro (čierne) | 24.00 € | **24.50 €** | 8.2 % | **10.5 %** | 24.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Zeblaze Btalk Pro (strieborné) | 24.00 € | **24.50 €** | 8.2 % | **10.5 %** | 24.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Okuliare RayNeo Air 4 Pro AR | 300.00 € | **300.50 €** | 5.9 % | **6.0 %** | 300.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash M305 Mesh bez ventilátor... | 21.00 € | **21.50 €** | 5.7 % | **8.2 %** | 21.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Termovízna kamera FNIRSI TDM-120 | 173.00 € | **173.50 €** | 8.9 % | **9.2 %** | 173.42 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný svetelný pásik Wi-Fi MSL320 Meross (Hom... | 29.00 € | **29.50 €** | 13.0 % | **14.9 %** | 29.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás DeerRun Z10 (ružový) | 280.00 € | **280.50 €** | 11.4 % | **11.6 %** | 280.44 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tlakový stroj HiBREW H7B Cob | 554.00 € | **554.50 €** | 11.3 % | **11.4 %** | 554.45 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI C28 – čierne | 28.00 € | **28.50 €** | 6.8 % | **8.7 %** | 28.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky COLMI C28 Gold | 28.00 € | **28.50 €** | 6.8 % | **8.7 %** | 28.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vodotesné puzdro Puluz (45 m) pre iPhone: na podvodn... | 60.00 € | **60.50 €** | 6.3 % | **7.2 %** | 60.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Dynamický mikrofón Maono PD200W (čierny) | 68.00 € | **68.50 €** | 5.7 % | **6.5 %** | 68.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 744.00 € | **744.50 €** | 9.4 % | **9.4 %** | 744.47 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meradlo osvetlenia FNIRSI FPM-02 s farebným displejom | 25.50 € | **26.00 €** | 14.9 % | **17.1 %** | 25.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| CR-Silk PLA Filament Creality (Gold) | 17.00 € | **17.50 €** | 11.1 % | **14.4 %** | 17.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové okuliare ZEBLAZE Q01 Green AI | 62.00 € | **62.50 €** | 5.4 % | **6.3 %** | 62.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Športové okuliare ZEBLAZE Q01 s umelou inteligenciou... | 62.00 € | **62.50 €** | 5.4 % | **6.3 %** | 62.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Uperfect Z14-3S M140G12 14'' 2240x1... | 344.50 € | **345.00 €** | 15.0 % | **15.2 %** | 345.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrické čerpadlo Cycplus A14 | 22.50 € | **23.00 €** | 11.7 % | **14.2 %** | 23.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UV svietidlo Superfire A5, 365NM | 13.00 € | **13.50 €** | 7.4 % | **11.5 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Uni-T UT261B – tester fáz a smeru otáčania motora | 43.00 € | **43.50 €** | 12.6 % | **13.9 %** | 43.59 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 48.50 € | **49.00 €** | 14.3 % | **15.4 %** | 48.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight hodiny s budíkom, biele LED podsvietenie, tr... | 16.00 € | **16.50 €** | 33.8 % | **38.0 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná stolná lampička s klipom, 3... | 10.50 € | **11.00 €** | 24.3 % | **30.2 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **31.50 €** | 18.8 % | **20.7 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 14.00 € | **14.50 €** | 18.2 % | **22.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 12.00 € | **12.50 €** | 37.4 % | **43.1 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| LEIFHEIT Sušák PEGASUS 120 Compact | 28.50 € | **29.00 €** | 5.5 % | **7.4 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 21.00 € | **21.50 €** | 26.4 % | **29.4 %** | 21.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie prachotesné, IP65, 18W, 1800l... | 10.00 € | **10.50 €** | 28.8 % | **35.3 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvětlení s dálkový ovladačem Cala, 48W,... | 22.00 € | **22.50 €** | 11.4 % | **14.0 %** | 22.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 14.00 € | **14.50 €** | 37.5 % | **42.4 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight multimeter, max. AC 600V, max. DC 600V / 10A... | 6.10 € | **6.60 €** | 13.2 % | **22.5 %** | 6.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 41.00 € | **41.50 €** | 28.3 % | **29.9 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nástenný keramický ohrievač, 2000 W, čierne | 31.00 € | **31.50 €** | 4.8 % | **6.5 %** | 31.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight detektor dymu s WIFI pripojením | 17.50 € | **18.00 €** | 33.6 % | **37.4 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| RUSSELL HOBBS 22760-56/RH | 29.00 € | **29.50 €** | 6.1 % | **7.9 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO461FR | 36.00 € | **36.50 €** | 7.5 % | **9.0 %** | 36.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Watch GPS Silver | 63.00 € | **63.50 €** | 7.2 % | **8.0 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight domáca kamera s nočným svetlom a hodinami | 32.00 € | **32.50 €** | 8.1 % | **9.8 %** | 32.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 15.50 € | **16.00 €** | 16.0 % | **19.8 %** | 15.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna smart WIFI meteostanica | 98.00 € | **98.50 €** | 19.0 % | **19.6 %** | 98.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight adaptér 3+1, 48W, QC3.0+PD, 3x USB-A, 1x USB-C | 14.00 € | **14.50 €** | 31.9 % | **36.6 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 10m, 3 x 1.5mm2, gumová H07RN-F... | 19.50 € | **20.00 €** | 32.3 % | **35.7 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Acer Aspire Lite 15 (NX.DRPEC.001) | 537.00 € | **537.50 €** | 5.5 % | **5.6 %** | 537.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.00 € | **17.50 €** | 21.0 % | **24.6 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 47.00 € | **47.50 €** | 8.2 % | **9.4 %** | 47.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 10m,... | 15.00 € | **15.50 €** | 12.3 % | **16.0 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5 zásuviek, USB A+C 20W P... | 10.00 € | **10.50 €** | 5.9 % | **11.2 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.00 € | **29.50 €** | 16.7 % | **18.7 %** | 29.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.00 € | **33.50 €** | 16.9 % | **18.6 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 122.00 € | **122.50 €** | 15.5 % | **16.0 %** | 122.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 42.00 € | **42.50 €** | 19.0 % | **20.4 %** | 42.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 68.50 € | **69.00 €** | 12.0 % | **12.8 %** | 68.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia anténa, DVB-T2, 47dB | 16.00 € | **16.50 €** | 25.2 % | **29.1 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjačka SkyRC NC3000 Pro | 70.50 € | **70.90 €** | 12.5 % | **13.1 %** | 70.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (čierny) | 207.50 € | **207.90 €** | 9.8 % | **10.0 %** | 207.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Elektrický bežecký pás DeerRun Q2 Urban Plus (ružový) | 207.50 € | **207.90 €** | 9.8 % | **10.0 %** | 207.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 124.50 € | **124.90 €** | 9.9 % | **10.3 %** | 124.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný pedál PXN Vector X Clutch | 103.50 € | **103.90 €** | 12.8 % | **13.2 %** | 103.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 159.50 € | **159.90 €** | 8.5 % | **8.7 %** | 159.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor ZEUSLAP P16A s uhlopriečkou 16" a o... | 119.50 € | **119.90 €** | 11.0 % | **11.4 %** | 119.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Aura A50 Pro Soundbar | 129.50 € | **129.90 €** | 10.4 % | **10.7 %** | 129.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ovládacia páka lietadla MOZA RACING MHG | 109.50 € | **109.90 €** | 12.8 % | **13.2 %** | 109.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Clutch Pedal Moza Racing CRP2 RS067 | 97.50 € | **97.90 €** | 6.0 % | **6.4 %** | 97.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Shifter Moza Racing HGP RS039 | 143.50 € | **143.90 €** | 6.9 % | **7.2 %** | 143.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vákuovačka G21 Nefrit | 117.50 € | **117.90 €** | 9.6 % | **10.0 %** | 117.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 64.50 € | **64.90 €** | 5.5 % | **6.1 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Powerbank OS-Baseus Compact IP 5000mAh 20W (white) | 13.50 € | **13.90 €** | 16.9 % | **20.3 %** | 13.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá TWS QCY MeloBuds HT16 (čierne) | 14.50 € | **14.90 €** | 6.6 % | **9.5 %** | 14.72 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ring light with phone holder PULUZ | 13.50 € | **13.90 €** | 8.3 % | **11.6 %** | 13.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový router IMOU HR340 s rýchlosťou 300 Mbps | 13.50 € | **13.90 €** | 13.2 % | **16.5 %** | 13.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Hyper PLA Filament Creality (Grey) | 11.50 € | **11.90 €** | 7.1 % | **10.8 %** | 11.81 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vibrating ring Satisfyer Rocket Ring (dark blue) | 12.50 € | **12.90 €** | 15.0 % | **18.6 %** | 12.82 € | dobehnutie 2. najlacnejšieho konkurenta |
| Senzor Flex Uni-T UT-CS06A s upínacím držiakom | 14.50 € | **14.90 €** | 12.6 % | **15.7 %** | 14.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 24W, 1800lm,... | 12.50 € | **12.90 €** | 8.2 % | **11.7 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 12.50 € | **12.90 €** | 23.5 % | **27.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED montážna lampa 5W, 400lm, COB, kábel 5m | 11.50 € | **11.90 €** | 40.8 % | **45.7 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor úniku horľavých plynov. Polovodičov... | 13.50 € | **13.90 €** | 24.2 % | **27.8 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 10.50 € | **10.90 €** | 23.4 % | **28.1 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka gumová do vlhka a prachu, priama, IP... | 2.80 € | **3.20 €** | 19.2 % | **36.2 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight lokátor Premium, Find My kompatibilný | 12.50 € | **12.90 €** | 23.5 % | **27.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 10.50 € | **10.90 €** | 21.6 % | **26.2 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie cyklo svietidlo, 550lm, Li-Ion | 10.50 € | **10.90 €** | 5.9 % | **9.9 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.40 € | **5.80 €** | 23.3 % | **32.5 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentné hodinky Colmi P86 (strieborné) | 20.50 € | **20.90 €** | 11.9 % | **14.0 %** | 20.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterka Superfire TF02 | 63.50 € | **63.90 €** | 14.4 % | **15.1 %** | 63.71 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný vypínač SONOFF MINIR4M-E Matter. | 16.50 € | **16.90 €** | 9.0 % | **11.6 %** | 16.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón Maono DM40 Pro (biely) | 50.50 € | **50.90 €** | 9.5 % | **10.4 %** | 50.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Mikrofón Maono DM40 Pro (čierny) | 50.50 € | **50.90 €** | 10.3 % | **11.2 %** | 50.76 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny klešťový merač Uni-T UT202R | 23.50 € | **23.90 €** | 6.4 % | **8.3 %** | 23.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Štúdiová súprava Puluz softbox 50x70 cm, statív, LED... | 36.50 € | **36.90 €** | 12.0 % | **13.2 %** | 36.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stolný statív Puluz PU3070GT | 40.50 € | **40.90 €** | 5.9 % | **7.0 %** | 40.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herné slúchadlá ONIKUMA GT811 (čierne) | 19.50 € | **19.90 €** | 9.8 % | **12.0 %** | 19.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezkontaktný laserový teplomer Habotest HT650B | 17.50 € | **17.90 €** | 12.6 % | **15.2 %** | 17.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa DarkFlash B275 (biela) | 28.50 € | **28.90 €** | 12.9 % | **14.5 %** | 28.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Latarka Superfire L3 P90 | 29.50 € | **29.90 €** | 13.4 % | **14.9 %** | 29.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 16.50 € | **16.90 €** | 10.0 % | **12.7 %** | 16.88 € | dobehnutie 2. najlacnejšieho konkurenta |
| GODOX LUX Junior Retro blesk | 62.50 € | **62.90 €** | 6.7 % | **7.4 %** | 62.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Blitzwolf 8in1 docking station BW-TH16 USB 100W LCD ... | 48.50 € | **48.90 €** | 7.4 % | **8.3 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash Aquarius Mesh (čierna) | 26.50 € | **26.90 €** | 9.3 % | **10.9 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Stojan na mikrofón Fifine BM88 (ružový) | 41.50 € | **41.90 €** | 11.4 % | **12.5 %** | 41.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Výrobok X.A.2 | 45.50 € | **45.90 €** | 7.9 % | **8.9 %** | 45.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Úložné puzdro PGYTECH DJI Air 3/3S | 63.50 € | **63.90 €** | 11.6 % | **12.3 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 51.50 € | **51.90 €** | 30.7 % | **31.7 %** | 51.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aróma difuzér Sixtol Vulcan čierny lesk 350 ml | 18.50 € | **18.90 €** | 12.6 % | **15.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 21.50 € | **21.90 €** | 22.5 % | **24.8 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 49.50 € | **49.90 €** | 23.6 % | **24.6 %** | 49.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľná lampička s nočným svetielko... | 28.50 € | **28.90 €** | 33.2 % | **35.0 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.50 € | **20.90 €** | 35.1 % | **37.7 %** | 20.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nástenná lampička, stmievateľná, 4W, 280... | 16.50 € | **16.90 €** | 23.9 % | **26.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Larios ... | 33.50 € | **33.90 €** | 28.7 % | **30.2 %** | 33.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 18.50 € | **18.90 €** | 17.5 % | **20.0 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rýchlovarná kanvica Hyundai VK309 | 24.50 € | **24.90 €** | 4.1 % | **5.8 %** | 24.50 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Solight bezdrôtová 15W vstavaná nabíjačka, čierna | 19.50 € | **19.90 €** | 24.6 % | **27.2 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vonkajšia IP kamera s LED světlom | 30.50 € | **30.90 €** | 14.7 % | **16.3 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.50 € | **24.90 €** | 14.8 % | **16.7 %** | 24.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 22.50 € | **22.90 €** | 28.1 % | **30.4 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Slate 11 | 270.50 € | **270.90 €** | 13.4 % | **13.6 %** | 270.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tablet HOTWAV TAB R9 Plus (červený) | 275.50 € | **275.90 €** | 8.3 % | **8.5 %** | 275.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Základňa volantu MOZA RACING R21 Direct Drive RS090 | 799.50 € | **799.90 €** | 14.3 % | **14.3 %** | 799.79 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultimea Skywave X50 Soundbar | 399.50 € | **399.90 €** | 8.7 % | **8.8 %** | 399.83 € | dobehnutie 2. najlacnejšieho konkurenta |
| Skladací elektrický bežecký pás DeerRun A6 Plus | 324.50 € | **324.90 €** | 11.7 % | **11.8 %** | 324.84 € | dobehnutie 2. najlacnejšieho konkurenta |
| Letecký simulátor MOZA RACING AB6 | 449.50 € | **449.90 €** | 13.8 % | **13.9 %** | 449.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant MOZA RACING CS Pro RS093 | 346.50 € | **346.90 €** | 9.7 % | **9.8 %** | 346.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Herný volant MOZA RACING KS Pro RS095 | 346.50 € | **346.90 €** | 13.1 % | **13.2 %** | 346.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 8.10 € | **8.40 €** | 11.1 % | **15.2 %** | 8.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.50 € | **9.80 €** | 25.6 % | **29.6 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED ratanová hviezda, 40x LED, 2x AA, 40cm | 3.10 € | **3.40 €** | 12.5 % | **23.4 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny časový spínač | 6.70 € | **7.00 €** | 30.6 % | **36.5 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.50 € | **2.80 €** | 17.5 % | **31.6 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 5.00 € | **5.30 €** | 28.2 % | **35.9 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 8.80 € | **9.10 €** | 8.1 % | **11.8 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 8.70 € | **8.90 €** | 14.6 % | **17.3 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 9.70 € | **9.90 €** | 17.4 % | **19.8 %** | 9.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 8.70 € | **8.90 €** | 30.3 % | **33.3 %** | 8.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED pásik pre TV, 100cm, USB, vypínač, stude... | 4.00 € | **4.20 €** | 12.9 % | **18.6 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko s pohybovým a svetelným ... | 7.70 € | **7.90 €** | 44.2 % | **48.0 %** | 7.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nočné LED svetielko so svetelným senzorom, 3... | 5.00 € | **5.20 €** | 40.7 % | **46.3 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 12W, 900lm, 3... | 6.70 € | **6.90 €** | 5.4 % | **8.5 %** | 6.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.50 € | **4.70 €** | 35.0 % | **41.0 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.20 € | **5.40 €** | 40.0 % | **45.4 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED drevený svietnik, 5x LED, prírodné drevo... | 7.80 € | **8.00 €** | 9.5 % | **12.3 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka G9, 6,0W, 3000K, 600lm | 3.50 € | **3.70 €** | 38.8 % | **46.7 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight náhradný akumulátor typ 18650, 3,7V, Li-Ion,... | 4.00 € | **4.20 €** | 17.4 % | **23.3 %** | 4.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.50 € | **6.70 €** | 30.5 % | **34.5 %** | 6.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka Slim, pootočená horná zásuvka, b... | 4.70 € | **4.90 €** | 29.1 % | **34.6 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 6 zásuviek | 3.00 € | **3.20 €** | 29.0 % | **37.7 %** | 3.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB A+C 20W fast charger | 5.30 € | **5.50 €** | 13.4 % | **17.7 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 4.60 € | **4.80 €** | 31.7 % | **37.4 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight flexo šnúra, 2x 0,75mm2, biela, plochá, 5m | 3.30 € | **3.50 €** | 29.0 % | **36.8 %** | 3.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.30 € | **5.50 €** | 27.5 % | **32.3 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 1,5 m | 2.90 € | **3.10 €** | 8.7 % | **16.1 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.40 €** | 8.7 % | **13.9 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 6.00 € | **6.20 €** | 13.2 % | **17.0 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, čierny, 3m | 5.10 € | **5.30 €** | 32.9 % | **38.1 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 1,5 m | 4.50 € | **4.70 €** | 31.1 % | **37.0 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 4.80 € | **5.00 €** | 16.1 % | **21.0 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.60 €** | 28.0 % | **35.5 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight káblová vodotesná spojka uni, IP68,4-11mm, m... | 3.50 € | **3.70 €** | 37.5 % | **45.3 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 100lm, senso... | 4.30 € | **4.50 €** | 30.9 % | **37.0 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo malé, 50lm, 1W LED, čie... | 3.40 € | **3.60 €** | 17.6 % | **24.5 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.00 € | **1.20 €** | 23.2 % | **47.8 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 3W, GU10, 3000K, 260l... | 0.80 € | **1.00 €** | 22.7 % | **53.4 %** | 0.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 7W, GU10, 6000K, 595l... | 1.00 € | **1.20 €** | 23.2 % | **47.8 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 8W, E14, 3000K, 720... | 1.10 € | **1.30 €** | 24.2 % | **46.8 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **2.00 €** | 26.2 % | **40.2 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.60 € | **1.80 €** | 15.1 % | **29.5 %** | 1.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.20 € | **1.40 €** | 13.4 % | **32.4 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.70 € | **1.90 €** | 30.4 % | **45.7 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reťaz vianočné gule bavlnené, 10LED, 1m,... | 3.60 € | **3.80 €** | 24.0 % | **30.9 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 5 zásuviek, vypínač | 3.20 € | **3.40 €** | 30.1 % | **38.2 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 3.70 € | **3.90 €** | 25.9 % | **32.7 %** | 3.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 7.90 € | **8.10 €** | 14.1 % | **17.0 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 7.90 € | **8.10 €** | 14.1 % | **17.0 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplomer | 9.50 € | **9.70 €** | 36.0 % | **38.8 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý konzolový držiak pre ploché TV, 26cm - ... | 9.00 € | **9.20 €** | 36.5 % | **39.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 9.40 € | **9.60 €** | 34.3 % | **37.2 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.90 € | **7.10 €** | 32.3 % | **36.1 %** | 6.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.90 € | **6.10 €** | 23.3 % | **27.5 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 9.80 € | **10.00 €** | 24.3 % | **26.8 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Diagnostický skener ANCEL DS600 ELITE OBD2 | 529.90 € | **530.00 €** | 11.4 % | **11.4 %** | 529.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Diagnostický skener pre motocykle ANCEL MT310 | 282.90 € | **283.00 €** | 12.3 % | **12.3 %** | 282.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Grafický tablet Huion Kamvas 24 GS2401 | 487.90 € | **488.00 €** | 11.0 % | **11.0 %** | 487.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Robot na čistenie bazénov WYBOT M1C | 669.90 € | **670.00 €** | 5.4 % | **5.5 %** | 670.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čistiaci robot ULTENIC MX50 | 419.90 € | **420.00 €** | 8.3 % | **8.3 %** | 420.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener REVOPOINT Mini 2 – Advanced Edition | 952.90 € | **953.00 €** | 14.9 % | **14.9 %** | 953.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener REVOPOINT Mini 2 (štandardná verzia) | 789.90 € | **790.00 €** | 8.2 % | **8.2 %** | 790.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D tlačiareň Anycubic Kobra 3 V2 | 281.90 € | **282.00 €** | 8.6 % | **8.6 %** | 282.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravírovací stroj 3 v 1 xTool M1 10W | 889.90 € | **890.00 €** | 7.3 % | **7.3 %** | 890.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Batéria FOSSIBOT FBP1200-B s kapacitou 1985 Wh (zelená) | 519.90 € | **520.00 €** | 11.2 % | **11.2 %** | 520.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nabíjacia stanica FOSSIBOT FBP1200 1200 W (zelená) | 728.90 € | **729.00 €** | 9.2 % | **9.2 %** | 729.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Ultima Apollo S90 Soundbar | 308.90 € | **309.00 €** | 8.7 % | **8.8 %** | 309.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Steering Wheel Moza Racing GS V2P RS056 (PC) | 368.90 € | **369.00 €** | 5.3 % | **5.3 %** | 369.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Cycplus T2 smart bike trainer | 589.90 € | **590.00 €** | 8.4 % | **8.4 %** | 590.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE FN4172CW | 330.90 € | **331.00 €** | 7.0 % | **7.0 %** | 330.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff ZBM5-3C-80W (3-kanálový) inteligentný dotykov... | 26.90 € | **27.00 €** | 13.2 % | **13.6 %** | 26.96 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 46.90 € | **47.00 €** | 14.3 % | **14.6 %** | 46.97 € | dobehnutie 2. najlacnejšieho konkurenta |
| Základný krúžok Freewell 67 mm s vekom pre Real Lock... | 29.90 € | **30.00 €** | 14.1 % | **14.5 %** | 29.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Joystick PXN-2113 PRO Ovládanie letu PC | 28.90 € | **29.00 €** | 5.1 % | **5.5 %** | 28.99 € | dobehnutie 2. najlacnejšieho konkurenta |
| Freewell neutrálny filter ND32 pre OSMO 360 | 61.90 € | **62.00 €** | 9.4 % | **9.6 %** | 62.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizer Filter Freewell for DJI Avata 2 | 17.90 € | **18.00 €** | 7.1 % | **7.7 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 16.90 € | **17.00 €** | 9.1 % | **9.8 %** | 17.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight alkohol tester mini, Fuel Cell, 0,0 - 5,0‰ B... | 41.90 € | **42.00 €** | 38.2 % | **38.5 %** | 41.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight invertor 12V, USB 500mA, kovový, čierny, max... | 35.90 € | **36.00 €** | 37.5 % | **37.9 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor s vysokým stojanom, 50W, 4500l... | 35.90 € | **36.00 €** | 32.4 % | **32.8 %** | 35.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 16.90 € | **17.00 €** | 24.5 % | **25.2 %** | 16.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 15.9 % | **16.5 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová zásuvka, IP55, matná biel... | 17.90 € | **18.00 €** | 20.9 % | **21.5 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E3HB1-4GG | 23.90 € | **24.00 €** | 6.6 % | **7.1 %** | 23.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight veľký konzolový držiak pre ploché TV, 76cm -... | 28.90 € | **29.00 €** | 18.2 % | **18.7 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Kamera TP-Link Tapo C200 IP, FHD, WiFi, prisvietenie | 27.90 € | **28.00 €** | 13.0 % | **13.4 %** | 27.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight otočná IP kamera | 33.90 € | **34.00 €** | 22.9 % | **23.3 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight meteostanica, farebný LCD, teplota, vlhkosť,... | 26.90 € | **27.00 €** | 35.2 % | **35.7 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 43.90 € | **44.00 €** | 5.5 % | **5.8 %** | 43.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 600lm, Cree XM-L2 T... | 19.90 € | **20.00 €** | 37.2 % | **37.9 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, 6V - 380V AC/DC, LED diódy | 4.80 € | **4.90 €** | 33.2 % | **36.0 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED RGB pásik pre TV, 2 x 50cm, USB, vypínač... | 7.60 € | **7.70 €** | 43.0 % | **44.9 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás so svetelným a pohybovým se... | 5.10 € | **5.20 €** | 20.2 % | **22.5 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.80 € | **4.90 €** | 11.2 % | **13.5 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 4.80 € | **4.90 €** | 6.6 % | **8.8 %** | 4.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight PIR interiérový senzor, do krabičky od vypín... | 7.80 € | **7.90 €** | 27.9 % | **29.5 %** | 7.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.30 € | **4.40 €** | 33.4 % | **36.5 %** | 4.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 4.60 € | **4.70 €** | 32.1 % | **35.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.10 € | **5.20 €** | 25.6 % | **28.1 %** | 5.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná reťaz medená, 100x mini LED, 10m, 3... | 2.10 € | **2.20 €** | 18.6 % | **24.2 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vianočná reťaz medená, 50x mini LED, 5m, 3 x... | 2.10 € | **2.20 €** | 37.7 % | **44.2 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.00 € | **1.10 €** | 23.2 % | **35.5 %** | 1.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo s karabínou, 30lm, COB LED, 2x... | 2.10 € | **2.20 €** | 36.6 % | **43.1 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor Quick, 10W, 850lm, 4000K, IP65... | 3.80 € | **3.90 €** | 27.7 % | **31.0 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 3.80 € | **3.90 €** | 19.7 % | **22.9 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 1x 10A + 2x 2,5A, biely, vypínač | 2.50 € | **2.60 €** | 31.1 % | **36.4 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2x 10A, biely-sivý | 2.80 € | **2.90 €** | 18.6 % | **22.8 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka uhlová, nízky profil od steny, IP20... | 1.20 € | **1.30 €** | 30.1 % | **40.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.10 € | **2.20 €** | 16.9 % | **22.5 %** | 2.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 2.90 € | **3.00 €** | 19.7 % | **23.8 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 4 x 10A, čierny | 2.50 € | **2.60 €** | 30.3 % | **35.5 %** | 2.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 4 zásuvky, vypínač | 2.90 € | **3.00 €** | 31.0 % | **35.5 %** | 2.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 2m | 3.80 € | **3.90 €** | 14.4 % | **17.4 %** | 3.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 1,5m | 3.90 € | **4.00 €** | 33.2 % | **36.6 %** | 3.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.60 € | **3.70 €** | 15.7 % | **18.9 %** | 3.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 2.0 A konektor... | 3.10 € | **3.20 €** | 29.9 % | **34.1 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 2.00 € | **2.10 €** | 23.2 % | **29.3 %** | 2.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, uhlová, IP44, čierna | 1.80 € | **1.90 €** | 28.4 % | **35.5 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálne hodiny s Qi bezdrôtovú nabíjačkou | 11.90 € | **12.00 €** | 35.3 % | **36.4 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.90 € | **12.00 €** | 27.8 % | **28.9 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 11.90 € | **12.00 €** | 27.8 % | **28.9 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight sieťový adaptér 230V - 12V, 5000mA, 60W | 13.90 € | **14.00 €** | 30.0 % | **31.0 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 13.90 € | **14.00 €** | 41.3 % | **42.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás, 5m, SMD5050 60LED/m, 14,4W... | 13.90 € | **14.00 €** | 41.3 % | **42.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Thermo Reflect L/Universal | 14.90 € | **15.00 €** | 20.1 % | **20.9 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 9.80 € | **9.90 €** | 18.0 % | **19.2 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 13.90 € | **14.00 €** | 25.4 % | **26.3 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie Acate s ochranou proti vlhkos... | 10.90 € | **11.00 €** | 31.1 % | **32.3 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight kliešťový multimeter, max. AC 600V/600A, max... | 12.90 € | **13.00 €** | 40.6 % | **41.7 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| ELDONEX EKS4040SL | 10.90 € | **11.00 €** | 8.3 % | **9.3 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 9.60 € | **9.70 €** | 33.2 % | **34.6 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka do vlhka, priama, IP44, čierna | 2.70 € | **2.80 €** | 30.7 % | **35.5 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 26.3 % | **28.3 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.40 € | **6.50 €** | 7.1 % | **8.7 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.20 € | **3.30 €** | 32.1 % | **36.2 %** | 3.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66, vodotesná a prachotesná | 14.90 € | **15.00 €** | 32.5 % | **33.4 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight cestovný adaptér do Veľkej Británie, typ G | 5.40 € | **5.50 €** | 32.6 % | **35.1 %** | 5.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 17W, cestovný predlžovací prívo... | 9.50 € | **9.60 €** | 39.4 % | **40.9 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3 zásuvky, USB A+C 20W PD... | 9.50 € | **9.60 €** | 13.2 % | **14.4 %** | 9.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 7.90 € | **8.00 €** | 35.2 % | **36.9 %** | 7.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 10.90 € | **11.00 €** | 36.5 % | **37.8 %** | 10.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 5m | 7.70 € | **7.80 €** | 32.1 % | **33.8 %** | 7.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 4.90 € | **5.00 €** | 33.7 % | **36.4 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.50 € | **8.60 €** | 35.8 % | **37.4 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 2m | 5.20 € | **5.30 €** | 34.6 % | **37.2 %** | 5.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 7.50 € | **7.60 €** | 35.2 % | **37.0 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 7.00 € | **7.10 €** | 5.4 % | **6.9 %** | 7.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 9.60 € | **9.70 €** | 34.8 % | **36.2 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjací zadné cyklo svetlo, 3W COB, nab... | 6.40 € | **6.50 €** | 39.9 % | **42.1 %** | 6.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Arzopa Portable Monitor A1 15,6" | 82.90 € | **83.00 €** | 9.6 % | **9.7 %** | 82.98 € | dobehnutie 2. najlacnejšieho konkurenta |
| Čistiaci robot PROSCENIC Q20 Plus | 236.90 € | **237.00 €** | 13.5 % | **13.5 %** | 237.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentná batéria pre DJI Mini 5 Pro | 80.90 € | **81.00 €** | 6.7 % | **6.9 %** | 81.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier R2750DB 2.0 (čierne) | 189.90 € | **190.00 €** | 8.9 % | **8.9 %** | 190.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM alarm, pohybový senzor, diaľk. ovl., biely | 70.90 € | **71.00 €** | 38.2 % | **38.4 %** | 70.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Magnetický veslařský trenažér HMS ZM1801 | 237.90 € | **238.00 €** | 42881.0 % | **42899.1 %** | 237.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| BEKO BMGB25332BG | 176.90 € | **177.00 €** | 7.3 % | **7.4 %** | 176.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| 3D skener Creality Sermoon P1 | 2909.90 € | **2910.00 €** | 6.0 % | **6.0 %** | 2910.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravír XTOOL M2 Deluxe 10 W | 1226.90 € | **1227.00 €** | 14.9 % | **14.9 %** | 1227.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový gravír XTOOL M1 Ultra 20 W 4 v 1 – súprava ... | 2198.90 € | **2199.00 €** | 8.7 % | **8.7 %** | 2199.00 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (1049)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| TCL 98C765 QD-MiniLED | 66811.50 € | **63774.90 €** | 10.0 % | **5.0 %** | 61952.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2338.90 €** | 15.0 % | **5.0 %** | 1972.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung QE75QN900F NEO QLED 8K | 4134.90 € | **3946.90 €** | 10.0 % | **5.0 %** | 2305.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality CR-Scan Raptor Pro | 1834.50 € | **1675.50 €** | 15.0 % | **5.0 %** | 800.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA Z70 Ultra Roller - sto... | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 924.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kompletný čistiaci robot MOVA V70 Ultra (čierny) | 1616.00 € | **1475.90 €** | 15.0 % | **5.0 %** | 1463.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria FOSSIBOT FB3840 s kapacitou 3840 Wh | 1267.90 € | **1157.90 €** | 15.0 % | **5.0 %** | 1150.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Z Fold8 5G 256GB Lavender | 2200.50 € | **2100.50 €** | 10.0 % | **5.0 %** | 1360.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT S2 Solar ... | 1441.90 € | **1346.00 €** | 15.0 % | **7.4 %** | 1346.50 € | stávame sa najlacnejší |
| MSI Cyborg 9S7-15QL42-080 | 1861.90 € | **1777.50 €** | 10.0 % | **5.0 %** | 1479.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creality CR-Scan Raptor 3D Scanner | 950.00 € | **867.50 €** | 15.0 % | **5.0 %** | 800.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MSI Katana 17 HX (B14WGK-282CZ) | 1637.90 € | **1563.50 €** | 10.0 % | **5.0 %** | 1267.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Robot na čistenie bazénov Wybot L1 | 854.50 € | **780.50 €** | 15.0 % | **5.0 %** | 620.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjacia stanica FOSSIBOT F2400 2400 W (čierna) | 806.50 € | **736.90 €** | 15.0 % | **5.1 %** | 737.00 € | stávame sa najlacnejší |
| Apple iPhone 17 Pro Max 256GB Deep Blue | 1450.90 € | **1384.90 €** | 10.0 % | **5.0 %** | 1220.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Phillips PR-860 s rozlíšením 1080p (biely) | 954.50 € | **890.00 €** | 15.0 % | **7.3 %** | 890.13 € | stávame sa najlacnejší |
| Apple iPhone 17 Pro 256GB Cosmic Orange | 1360.50 € | **1298.50 €** | 10.0 % | **5.0 %** | 1063.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Photon P1 | 639.00 € | **583.50 €** | 15.0 % | **5.0 %** | 583.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ANCEL DS600 BT – profesionálny diagnostický skener OBD2 | 586.50 € | **535.50 €** | 15.0 % | **5.0 %** | 529.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LaserPecker LX2 40W laserový gravír | 1879.50 € | **1830.00 €** | 15.0 % | **12.0 %** | 1830.50 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K1 Max 2025 | 561.90 € | **512.90 €** | 15.0 % | **5.0 %** | 427.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Grafický tablet Huion Kamvas 22 GEN 3 (GS2203) | 542.90 € | **495.90 €** | 15.0 % | **5.1 %** | 406.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový masážny prístroj/regeneračná obuv s techn... | 542.90 € | **495.90 €** | 15.0 % | **5.1 %** | 424.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický skúter NAVEE GT5 Max | 612.50 € | **565.90 €** | 15.0 % | **6.3 %** | 566.00 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max Plus Gen2 robotický s ... | 230.00 € | **183.50 €** | 31.8 % | **5.2 %** | 142.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baza na joystick Moza Racing AB9 Force Feedback | 532.90 € | **486.90 €** | 15.0 % | **5.1 %** | 451.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ANYCUBIC Kobra S1 ACE 2 Pro Combo | 510.50 € | **466.50 €** | 15.0 % | **5.1 %** | 446.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality Halot X1 Combo | 505.00 € | **461.50 €** | 15.0 % | **5.1 %** | 421.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO CyberMega (čierny) | 983.90 € | **941.00 €** | 15.0 % | **10.0 %** | 941.15 € | stávame sa najlacnejší |
| OBSBOT Tiny 3 MIC Combo | 487.90 € | **445.50 €** | 15.0 % | **5.0 %** | 445.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Volant MOZA RACING pre Lamborghini Revuelto | 431.00 € | **393.50 €** | 15.0 % | **5.0 %** | 393.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO FoldiMix 5 Pro (silver) | 429.50 € | **392.50 €** | 14.9 % | **5.0 %** | 265.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L8180 | 808.90 € | **771.90 €** | 10.1 % | **5.0 %** | 678.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Luminiscenčná letová mapa DJI RoboMaster TT | 837.90 € | **800.90 €** | 15.0 % | **9.9 %** | 801.00 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 Max | 428.00 € | **391.50 €** | 14.9 % | **5.1 %** | 358.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor kovov GARRETT Ace Apex 8,5x11+MS-3 | 515.00 € | **479.90 €** | 15.0 % | **7.1 %** | 480.00 € | stávame sa najlacnejší |
| Samsung The Frame Pro QE75LS03HW | 2683.50 € | **2648.90 €** | 10.0 % | **8.6 %** | 2649.00 € | stávame sa najlacnejší |
| Vysávač TP-Link Tapo RV30 Max White robotický s mopo... | 176.50 € | **142.00 €** | 32.0 % | **6.2 %** | 142.40 € | stávame sa najlacnejší |
| Projektor JMGO PicoPlay+ | 413.00 € | **378.50 €** | 14.9 % | **5.3 %** | 378.90 € | stávame sa najlacnejší |
| Elektrický skúter NAVEE GT5 Pro | 506.00 € | **471.90 €** | 15.0 % | **7.2 %** | 472.00 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C460 KIT 8MPx, vonkajšia, IP, Wi... | 159.50 € | **126.00 €** | 33.0 % | **5.1 %** | 119.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Karta pamäte Lexar High-Performance Silver Plus micr... | 367.90 € | **335.90 €** | 15.0 % | **5.0 %** | 282.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX DP800IIIV | 369.50 € | **337.50 €** | 15.0 % | **5.0 %** | 337.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 358.50 € | **327.50 €** | 15.1 % | **5.1 %** | 271.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UREVO Foldi 3S Smart elektrický bežecký pás (čierny) | 433.90 € | **402.90 €** | 15.0 % | **6.8 %** | 403.00 € | stávame sa najlacnejší |
| Ultimea Skywave X40 Soundbar | 354.50 € | **323.90 €** | 15.1 % | **5.1 %** | 284.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PS5 PlayStation®5 Digital Edition–825GB | 671.50 € | **641.00 €** | 10.0 % | **5.0 %** | 549.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GARRETT AT Max 8,5 x 11" INTL – detektor kovov | 760.00 € | **729.50 €** | 15.0 % | **10.4 %** | 729.90 € | stávame sa najlacnejší |
| UREVO Cyberpad pre elektrický bežecký pás Office 2 (... | 430.90 € | **400.90 €** | 15.0 % | **7.0 %** | 401.00 € | stávame sa najlacnejší |
| EPSON EcoTank L8160 | 653.50 € | **623.90 €** | 10.0 % | **5.0 %** | 529.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná sušička pre domáce zvieratá PetKit AIRS... | 341.00 € | **311.50 €** | 14.9 % | **5.0 %** | 271.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C460 8MPx, vonkajšia, IP, WiFi, ... | 143.00 € | **113.50 €** | 32.8 % | **5.4 %** | 110.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 3D printer | 403.00 € | **373.50 €** | 15.0 % | **6.6 %** | 373.79 € | stávame sa najlacnejší |
| Electrolux EWN7F447WI | 637.90 € | **608.90 €** | 10.0 % | **5.0 %** | 534.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Subwoofer Edifier Airpulse SW8 (čierny) | 338.50 € | **309.50 €** | 15.0 % | **5.1 %** | 292.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX AD600B TTL Wistro s uchytením Bowens | 704.50 € | **675.90 €** | 15.0 % | **10.3 %** | 676.00 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Kobra 3 V2 Combo | 334.00 € | **305.50 €** | 14.9 % | **5.1 %** | 280.54 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C425 4MPx, vonkajší, IP, WiFi, p... | 130.50 € | **103.00 €** | 33.1 % | **5.0 %** | 85.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor BlitzWolf BW-V11 | 352.50 € | **325.00 €** | 15.0 % | **6.0 %** | 325.50 € | stávame sa najlacnejší |
| Apple AirPods Max 2 - Midnight | 578.50 € | **552.00 €** | 10.0 % | **5.0 %** | 490.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Projektor Ultima Nova C40 | 301.00 € | **274.90 €** | 15.0 % | **5.0 %** | 267.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX DP600IIIV | 302.50 € | **276.50 €** | 15.1 % | **5.2 %** | 276.90 € | stávame sa najlacnejší |
| Lenovo Idea Tab Pro 8/128GB (ZAHD0017CZ) | 563.00 € | **537.50 €** | 10.0 % | **5.0 %** | 501.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko PowerIntense BDFN26560XP | 557.90 € | **532.50 €** | 10.1 % | **5.1 %** | 449.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Letové pedále MOZA Racing AS019 | 371.90 € | **346.50 €** | 15.1 % | **7.2 %** | 346.56 € | stávame sa najlacnejší |
| Whirlpool WHK 22414 X7EA1 AI AdaptiveCoo | 713.90 € | **688.50 €** | 10.0 % | **6.1 %** | 688.89 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C501GW 2MPx, vonkajšia, IP PTZ, ... | 119.90 € | **94.90 €** | 32.7 % | **5.0 %** | 74.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 50Q7C QD-MiniLED 4K SMART Google TV | 547.90 € | **522.90 €** | 10.1 % | **5.0 %** | 511.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iiyama ProLite XCB4594DQSU-B1 | 538.50 € | **513.90 €** | 10.0 % | **5.0 %** | 501.78 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE55S99H | 2171.00 € | **2146.90 €** | 6.8 % | **5.6 %** | 2147.00 € | stávame sa najlacnejší |
| Apple iPad 11" 128GB Silver | 530.50 € | **506.50 €** | 10.1 % | **5.1 %** | 447.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Yoga Tab 12/256GB (ZAG60160CZ) | 525.90 € | **502.00 €** | 10.0 % | **5.0 %** | 479.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 278.00 € | **254.50 €** | 14.9 % | **5.2 %** | 254.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V100 TTL pre Fujifilm | 356.00 € | **332.50 €** | 14.9 % | **7.3 %** | 332.90 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM2000 | 686.50 € | **663.00 €** | 15.0 % | **11.1 %** | 663.50 € | stávame sa najlacnejší |
| Blender G21 Excellent white | 232.90 € | **209.50 €** | 18.3 % | **6.5 %** | 209.90 € | stávame sa najlacnejší |
| Termovízna kamera Mileseey TR256C s Wi-Fi | 524.00 € | **500.90 €** | 14.9 % | **9.9 %** | 501.00 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 496.90 € | **474.00 €** | 10.1 % | **5.0 %** | 467.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX DP400IIIV | 263.90 € | **241.50 €** | 15.0 % | **5.3 %** | 241.90 € | stávame sa najlacnejší |
| Lenovo Tab Plus 8/256GB (ZAHT0126CZ) | 489.50 € | **467.50 €** | 10.0 % | **5.1 %** | 418.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LKR64022AW | 478.50 € | **456.50 €** | 10.1 % | **5.0 %** | 427.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled digitální fotomonokulární Levenhuk Kelvin... | 401.50 € | **379.50 €** | 11.2 % | **5.1 %** | 372.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG6020 | 250.90 € | **229.00 €** | 15.1 % | **5.0 %** | 224.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Systém riadenia vlákien Creality CFS | 252.50 € | **230.90 €** | 15.0 % | **5.1 %** | 209.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartring RingConn Gen 2 (veľkosť 7, zlatá) | 253.50 € | **231.90 €** | 14.9 % | **5.2 %** | 230.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KEMOT PROsolar-2500 URZ3419 1800W 30-100V měnič napě... | 261.50 € | **239.90 €** | 19.8 % | **9.9 %** | 239.95 € | stávame sa najlacnejší |
| AURZEN Boom Mini projektor | 250.50 € | **228.90 €** | 15.0 % | **5.1 %** | 229.00 € | stávame sa najlacnejší |
| Whirlpool WOI4S8CM1SEA | 465.50 € | **444.00 €** | 10.1 % | **5.0 %** | 391.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko BDFS26046XQ | 473.50 € | **452.00 €** | 10.0 % | **5.0 %** | 424.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux LBD4Z | 476.90 € | **455.50 €** | 10.0 % | **5.1 %** | 441.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-VB21ZL4C-VMDS-27135 2.0 Mpix venkovní IP anti... | 239.00 € | **218.00 €** | 24.6 % | **13.6 %** | 218.36 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C560WS 8MPx, vonkajšia, IP PTZ, ... | 102.00 € | **81.50 €** | 32.2 % | **5.6 %** | 66.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tablet HOTWAV TAB R9 Plus (čierny) | 295.50 € | **275.00 €** | 15.1 % | **7.1 %** | 275.50 € | stávame sa najlacnejší |
| Lenovo Tab Plus 8/128GB (ZAHT0170CZ) | 448.90 € | **428.50 €** | 10.1 % | **5.1 %** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON i-SENSYS MF461dw | 440.90 € | **420.90 €** | 10.0 % | **5.0 %** | 322.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje W2PNA94A1W/CZ | 441.90 € | **421.90 €** | 10.1 % | **5.1 %** | 374.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chytrá meteorologická stanice GARNI 925T | 179.90 € | **160.00 €** | 27.3 % | **13.2 %** | 160.25 € | stávame sa najlacnejší |
| CANON MAXIFY GX2040 | 437.50 € | **417.90 €** | 10.0 % | **5.1 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple AirPods Max Midnight (2024) | 433.00 € | **413.50 €** | 10.0 % | **5.1 %** | 365.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera NEDIS WIFICBO51WT SmartLife venkovní bateriov... | 157.90 € | **138.50 €** | 20.0 % | **5.3 %** | 78.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L6390 | 426.50 € | **407.50 €** | 10.0 % | **5.1 %** | 365.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu Uni-T UT533 | 210.50 € | **192.00 €** | 15.1 % | **5.0 %** | 173.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono M7 Pro 3D Printer | 458.90 € | **440.50 €** | 10.3 % | **5.9 %** | 440.75 € | stávame sa najlacnejší |
| GORENJE N619EAW4 | 392.90 € | **374.90 €** | 10.1 % | **5.1 %** | 365.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový adaptér Ottocast PCS50 a AI asistent OTTO... | 209.50 € | **191.50 €** | 15.0 % | **5.1 %** | 188.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Funkčný generátor FNIRSI TSG3020 | 209.90 € | **191.90 €** | 15.1 % | **5.2 %** | 188.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV Cyber 16 Pro (zlatý) | 244.50 € | **226.90 €** | 15.1 % | **6.8 %** | 227.00 € | stávame sa najlacnejší |
| EPSON EcoTank L6370 | 371.90 € | **354.90 €** | 10.0 % | **5.0 %** | 293.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 195.90 € | **178.90 €** | 15.1 % | **5.1 %** | 161.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sušič vlasov MOVA Flip 10 | 192.90 € | **176.00 €** | 15.1 % | **5.0 %** | 153.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C530WS 5MPx, vonkajšia, IP PTZ, ... | 81.50 € | **64.90 €** | 32.3 % | **5.4 %** | 57.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chladící box TEESA TSA6002 40l, 12V/24V/230V/baterie... | 238.00 € | **221.50 €** | 13.1 % | **5.2 %** | 207.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny mikroohmmer Uni-T UT620C+ | 194.50 € | **178.00 €** | 15.0 % | **5.2 %** | 178.39 € | stávame sa najlacnejší |
| BROTHER MFC-T930DW | 352.50 € | **336.50 €** | 10.1 % | **5.1 %** | 243.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje BOS6737E20FBG | 357.50 € | **341.50 €** | 10.1 % | **5.1 %** | 335.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C411 3MPx, vonkajšia, IP, Wi-Fi,... | 69.90 € | **54.00 €** | 36.0 % | **5.0 %** | 45.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70118CZ | 341.50 € | **325.90 €** | 10.0 % | **5.0 %** | 268.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab Plus 8/256GB ZAG70373CZ | 342.50 € | **326.90 €** | 10.0 % | **5.0 %** | 284.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BR 48SBL6G-S | 339.50 € | **323.90 €** | 10.1 % | **5.1 %** | 297.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy BR 26SSB6G-S | 347.50 € | **332.00 €** | 10.1 % | **5.2 %** | 332.10 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3407 1200W 12V | 200.00 € | **184.50 €** | 14.1 % | **5.3 %** | 184.82 € | stávame sa najlacnejší |
| Simulačná súprava Moza Racing R5 Pro | 434.00 € | **418.50 €** | 15.0 % | **10.9 %** | 418.90 € | stávame sa najlacnejší |
| Smarton HOTWAV Cyber 16 Pro (čierny) | 244.50 € | **229.00 €** | 15.1 % | **7.8 %** | 229.50 € | stávame sa najlacnejší |
| HP Color LaserJet 178nw (4ZB96A) | 333.50 € | **318.50 €** | 10.1 % | **5.1 %** | 223.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5390 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L5396 | 330.50 € | **315.50 €** | 10.1 % | **5.1 %** | 283.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V860III TTL pre Fuji | 218.90 € | **204.00 €** | 15.0 % | **7.2 %** | 204.50 € | stávame sa najlacnejší |
| Blesk GODOX V860III TTL pre Olympus | 218.90 € | **204.00 €** | 15.0 % | **7.2 %** | 204.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, čier... | 89.50 € | **74.90 €** | 44.0 % | **20.5 %** | 75.00 € | stávame sa najlacnejší |
| EPSON EcoTank L5316 | 323.00 € | **308.50 €** | 10.0 % | **5.1 %** | 275.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L5310 | 323.00 € | **308.50 €** | 10.0 % | **5.1 %** | 277.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá VIAIM Nano+ AI s hlasovým záznamníkom (zel... | 164.50 € | **150.50 €** | 15.0 % | **5.2 %** | 103.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Uperfect Ustation Z14-S M140G13 14"... | 168.50 € | **154.50 €** | 14.9 % | **5.3 %** | 152.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Anycubic Kobra X Combo | 553.50 € | **539.50 €** | 15.0 % | **12.1 %** | 539.90 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 261.00 € | **247.00 €** | 14.9 % | **8.8 %** | 247.50 € | stávame sa najlacnejší |
| EPSON EcoTank L4360 | 302.50 € | **288.90 €** | 10.1 % | **5.1 %** | 225.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L4366 | 302.50 € | **288.90 €** | 10.1 % | **5.1 %** | 225.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Revopoint POP 4 Premium | 944.00 € | **930.50 €** | 15.0 % | **13.3 %** | 930.90 € | stávame sa najlacnejší |
| 3D tlačiareň Creality K2 Pro Combo | 780.50 € | **767.00 €** | 14.2 % | **12.2 %** | 767.40 € | stávame sa najlacnejší |
| EPSON WorkForce WF-100W | 295.90 € | **282.50 €** | 10.1 % | **5.2 %** | 237.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy GD 49B8-S | 292.90 € | **279.50 €** | 10.1 % | **5.0 %** | 260.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C400 2MPx, vonkajšia, IP, WiFi, ... | 65.00 € | **51.90 €** | 32.2 % | **5.5 %** | 51.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický bežecký pás UREVO Strol 2E Smart 2 v 1 (č... | 262.90 € | **249.90 €** | 15.0 % | **9.3 %** | 250.00 € | stávame sa najlacnejší |
| ELECTROLUX LXB1SE11W0 | 273.50 € | **260.90 €** | 10.2 % | **5.1 %** | 241.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GODOX ML60II BI LED videolampa | 197.50 € | **185.00 €** | 14.9 % | **7.7 %** | 185.50 € | stávame sa najlacnejší |
| HP OfficeJet Pro 9132e AiO HP+ (404M5B) | 270.90 € | **258.50 €** | 10.1 % | **5.1 %** | 208.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 272.00 € | **259.90 €** | 10.0 % | **5.1 %** | 259.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uperfect UPi B7 10.1" 1920x1200 60Hz Portable Monitor | 150.00 € | **137.90 €** | 15.0 % | **5.7 %** | 138.00 € | stávame sa najlacnejší |
| Electrolux EHF6342XOK | 266.50 € | **254.50 €** | 10.1 % | **5.2 %** | 201.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 325 | 263.50 € | **251.50 €** | 10.2 % | **5.1 %** | 229.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX V1 TTL pre Olympus | 224.00 € | **212.00 €** | 14.9 % | **8.8 %** | 212.50 € | stávame sa najlacnejší |
| CP-UNC-TB21L3-MDS-V2-0360 2.0 Mpix venkovní IP kamer... | 131.90 € | **120.00 €** | 24.4 % | **13.2 %** | 120.42 € | stávame sa najlacnejší |
| LED svietidlo GODOX FH50R | 215.90 € | **204.00 €** | 15.1 % | **8.7 %** | 204.50 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT117C | 137.50 € | **125.90 €** | 15.0 % | **5.3 %** | 126.00 € | stávame sa najlacnejší |
| Hoverboard Rebel Cruiser Joy | 150.00 € | **138.50 €** | 14.2 % | **5.4 %** | 138.51 € | stávame sa najlacnejší |
| Odšťavovač G21 Chamberi horizontal | 169.50 € | **158.00 €** | 18.5 % | **10.5 %** | 158.09 € | stávame sa najlacnejší |
| EPSON EcoTank L3286 | 252.90 € | **241.50 €** | 10.2 % | **5.2 %** | 177.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator Blackview BV7300 Black | 252.90 € | **241.50 €** | 10.1 % | **5.2 %** | 200.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator Blackview BV7300 Yellow | 252.90 € | **241.50 €** | 10.1 % | **5.2 %** | 200.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 229.90 € | **218.50 €** | 10.7 % | **5.2 %** | 207.62 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ELECTROLUX 300 EFC226R | 253.90 € | **242.50 €** | 10.1 % | **5.1 %** | 236.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Arzopa A3C Pro 13,3" | 129.00 € | **117.90 €** | 14.9 % | **5.1 %** | 117.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OfficeJet 9730e AiO (537P6B) | 240.90 € | **229.90 €** | 10.0 % | **5.0 %** | 209.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C320WS 4MPx, venkovní, IP, FHD, ... | 56.50 € | **45.50 €** | 31.1 % | **5.5 %** | 38.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-PT13L1-VMW 1.3Mpix vnitřní IP kamera PT Wi-Fi... | 125.50 € | **114.50 €** | 24.2 % | **13.3 %** | 114.66 € | stávame sa najlacnejší |
| ETA Magic X-treme 7235 90000 černý/modrý | 339.50 € | **328.50 €** | 10.1 % | **6.5 %** | 328.84 € | stávame sa najlacnejší |
| GODOX MF-R76 makro prstencový blesk | 161.50 € | **150.50 €** | 15.1 % | **7.3 %** | 150.90 € | stávame sa najlacnejší |
| HP Smart Tank 720 Wireless AiO (6UU46A) | 227.50 € | **216.90 €** | 10.2 % | **5.1 %** | 196.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Smart Tank 725 Wireless AiO (28B51A) | 227.50 € | **216.90 €** | 10.2 % | **5.1 %** | 205.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dvojkanálová nabíjačka lítiových batérií SkyRC PC108... | 226.50 € | **215.90 €** | 15.0 % | **9.6 %** | 216.00 € | stávame sa najlacnejší |
| Router GL.iNet Flint | 137.00 € | **126.50 €** | 15.0 % | **6.2 %** | 126.76 € | stávame sa najlacnejší |
| FINLUX 65FQK9070 ULTRA HD 4K QLED SMART ANDROID TV | 669.00 € | **658.50 €** | 5427.5 % | **5340.7 %** | 658.90 € | stávame sa najlacnejší |
| Prenosný monitor Uperfect UMax 23 M238T01 23,8'' 192... | 222.50 € | **212.00 €** | 15.0 % | **9.6 %** | 212.50 € | stávame sa najlacnejší |
| Guzzanti GZ 70G | 230.90 € | **220.50 €** | 10.1 % | **5.2 %** | 211.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamerový set Kruger&Matz Connect C210 Tuya Wi-Fi | 205.00 € | **194.90 €** | 10.6 % | **5.1 %** | 167.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **196.90 €** | 14.9 % | **9.3 %** | 197.00 € | stávame sa najlacnejší |
| EPSON EcoTank L3276 | 223.50 € | **213.50 €** | 10.1 % | **5.2 %** | 163.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS8751 white | 219.90 € | **209.90 €** | 10.2 % | **5.2 %** | 164.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS8750 Black | 219.90 € | **209.90 €** | 10.2 % | **5.2 %** | 170.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Lenovo Idea Tab 4/128GB (ZAFR0358CZ) | 220.00 € | **210.00 €** | 10.0 % | **5.0 %** | 179.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UMAX VisionBook 13Wr Flex (UMM220V30) | 216.50 € | **206.50 €** | 10.2 % | **5.1 %** | 187.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX FT-AD600PRO | 144.90 € | **134.90 €** | 15.1 % | **7.1 %** | 135.00 € | stávame sa najlacnejší |
| GODOX LC500R MiNi štúdiové osvetlenie | 139.90 € | **129.90 €** | 15.1 % | **6.9 %** | 130.00 € | stávame sa najlacnejší |
| PetKit Pura MAX 2 PREMIUM inteligentný samočistiaci ... | 434.50 € | **424.50 €** | 15.0 % | **12.3 %** | 424.65 € | stávame sa najlacnejší |
| Domo DO9079KR-PROMO | 295.50 € | **285.50 €** | 10.0 % | **6.3 %** | 285.83 € | stávame sa najlacnejší |
| LED svietidlo GODOX ES30 pre e-šport | 134.00 € | **124.00 €** | 15.0 % | **6.4 %** | 124.50 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P300 3x french socket, 2x... | 47.90 € | **38.00 €** | 32.5 % | **5.2 %** | 37.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CA6 NP5B3HTX | 351.90 € | **342.00 €** | 10.1 % | **7.0 %** | 342.20 € | stávame sa najlacnejší |
| HP LaserJet Pro MFP M234sdw (6GX01F) | 213.50 € | **203.90 €** | 10.2 % | **5.2 %** | 165.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Epson EcoTank L3310 | 205.50 € | **196.00 €** | 10.1 % | **5.0 %** | 179.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT96425VD | 262.50 € | **253.00 €** | 10.1 % | **6.1 %** | 253.18 € | stávame sa najlacnejší |
| CP-D21 2.0 Mpix vnitřní IP kamera s IR přísvitem, Wi... | 109.00 € | **99.50 €** | 24.0 % | **13.2 %** | 99.71 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Fujifilm | 137.00 € | **127.50 €** | 15.0 % | **7.0 %** | 127.90 € | stávame sa najlacnejší |
| Blesk GODOX TT685II TTL pre Olympus | 137.00 € | **127.50 €** | 15.0 % | **7.0 %** | 127.90 € | stávame sa najlacnejší |
| Blesk GODOX V480 TTL pre Nikon | 151.00 € | **141.50 €** | 14.8 % | **7.6 %** | 141.90 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam G16 15,6" 1920x1080... | 204.50 € | **195.00 €** | 14.9 % | **9.6 %** | 195.50 € | stávame sa najlacnejší |
| AMICA VM 852.3 AW | 204.90 € | **195.50 €** | 10.2 % | **5.1 %** | 158.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EUOC94DB | 212.90 € | **203.50 €** | 10.1 % | **5.2 %** | 168.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP Smart Tank 675 Wireless AiO (28C12A) | 206.90 € | **197.50 €** | 10.0 % | **5.0 %** | 181.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-UNC-WC21L5C-MDS 2.0 Mpix venkovní IP kamera dome ... | 179.90 € | **170.50 €** | 24.8 % | **18.3 %** | 170.63 € | stávame sa najlacnejší |
| CP-VNC-T41ZR5C-MD 4.0 Mpix venkovní IP kamera s IR a... | 209.90 € | **200.50 €** | 25.0 % | **19.4 %** | 200.88 € | stávame sa najlacnejší |
| Nabíječka baterií GP B441 + Speed Dock + 4 x AA 2100... | 41.90 € | **32.50 €** | 35.7 % | **5.2 %** | 31.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko EnergySpin B7WFU68416WBES | 425.90 € | **416.50 €** | 10.0 % | **7.6 %** | 416.62 € | stávame sa najlacnejší |
| 3D tlačiareň Anycubic Photon Mono 4 Ultra | 276.00 € | **266.90 €** | 15.0 % | **11.2 %** | 267.00 € | stávame sa najlacnejší |
| BROTHER DCP-T535DW | 208.00 € | **198.90 €** | 10.0 % | **5.2 %** | 195.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pioneer GM-A6704 zesilovač | 198.50 € | **189.50 €** | 10.1 % | **5.1 %** | 139.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L3271 | 198.50 € | **189.50 €** | 10.2 % | **5.3 %** | 153.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko VRT86325VI | 204.50 € | **195.50 €** | 10.1 % | **5.3 %** | 167.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L1270 | 192.50 € | **183.50 €** | 10.2 % | **5.1 %** | 156.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 28 | 193.50 € | **184.50 €** | 10.3 % | **5.2 %** | 159.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE R492PW | 201.50 € | **192.50 €** | 10.1 % | **5.1 %** | 178.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-T435W | 198.50 € | **189.50 €** | 10.3 % | **5.3 %** | 183.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV9201E0 | 197.90 € | **188.90 €** | 10.2 % | **5.2 %** | 187.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 4-kanálový teplomer Uni-T UT325F | 104.50 € | **95.50 €** | 15.1 % | **5.1 %** | 95.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Plynová varná doska ISEASY MGBG-603, 3 horáky (biela) | 108.50 € | **99.50 €** | 14.9 % | **5.4 %** | 99.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT511 | 119.00 € | **110.00 €** | 14.9 % | **6.2 %** | 110.19 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512 | 153.00 € | **144.00 €** | 14.9 % | **8.1 %** | 144.39 € | stávame sa najlacnejší |
| GODOX LUX Senior Retro blesk | 125.50 € | **116.50 €** | 15.1 % | **6.9 %** | 116.90 € | stávame sa najlacnejší |
| Makro blesk GODOX MF12 | 114.00 € | **105.00 €** | 15.0 % | **5.9 %** | 105.50 € | stávame sa najlacnejší |
| Ultima Poseidon D60 Soundbar | 178.00 € | **169.00 €** | 15.0 % | **9.2 %** | 169.50 € | stávame sa najlacnejší |
| Guzzanti GZ 24G | 184.50 € | **175.90 €** | 10.1 % | **5.0 %** | 159.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roadstar HIF-8892 EBT Multimediální HI-F | 191.50 € | **182.90 €** | 10.1 % | **5.1 %** | 182.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator Hotwav T7 PRO Black | 197.00 € | **188.50 €** | 10.0 % | **5.3 %** | 187.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera TP-Link Tapo C220 IP, 4MPx, WiFi, prísvit | 44.00 € | **35.50 €** | 31.2 % | **5.8 %** | 34.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Batéria Jupio Alkaline AA balenie 100ks | 44.00 € | **35.50 €** | 34.5 % | **8.5 %** | 35.75 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C206 IP, 2MPx, WiFi, prísvit | 43.00 € | **34.50 €** | 32.7 % | **6.5 %** | 34.79 € | stávame sa najlacnejší |
| Presný klešťový multimeter Uni-T 60A UT211B | 110.50 € | **102.00 €** | 14.9 % | **6.0 %** | 102.39 € | stávame sa najlacnejší |
| Běžecký pás REBEL ACTIVE RBA-1021 rychlost 1–12 km/h... | 192.00 € | **183.50 €** | 16.3 % | **11.1 %** | 183.89 € | stávame sa najlacnejší |
| LED štúdiová lampa GODOX ML40Bi | 100.00 € | **91.90 €** | 15.0 % | **5.7 %** | 92.00 € | stávame sa najlacnejší |
| TP-LINK WiFi AX3000 (Deco X55 2-pack) | 179.50 € | **171.50 €** | 10.1 % | **5.2 %** | 133.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Victrola VTA-270B Gramofon hnědý | 177.50 € | **169.50 €** | 10.1 % | **5.2 %** | 153.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MWF 420 BL | 176.50 € | **168.50 €** | 10.0 % | **5.0 %** | 160.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kajak REBEL ACTIVE RBA-4516 nafukovací dvoumístný 35... | 108.50 € | **100.50 €** | 13.4 % | **5.0 %** | 99.36 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (čierny) | 95.50 € | **87.50 €** | 14.9 % | **5.3 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **86.90 €** | 15.2 % | **5.5 %** | 86.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Infračervený teplomer Uni-T UT303C+ | 103.00 € | **95.00 €** | 14.9 % | **6.0 %** | 95.19 € | stávame sa najlacnejší |
| Johansson KIT 7473 L2 zesilovač + zdroj (2437) | 117.00 € | **109.00 €** | 15.9 % | **8.0 %** | 109.20 € | stávame sa najlacnejší |
| Štúdiové LED osvetlenie GODOX ML40R | 115.50 € | **107.50 €** | 15.2 % | **7.2 %** | 107.90 € | stávame sa najlacnejší |
| Štúdiové LED osvetlenie GODOX FL15Bi | 96.00 € | **88.00 €** | 15.0 % | **5.4 %** | 88.50 € | stávame sa najlacnejší |
| Candy FIDC X602/CA IDEA | 172.90 € | **165.00 €** | 10.1 % | **5.1 %** | 151.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (biele) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **84.00 €** | 14.9 % | **5.1 %** | 83.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Beko HSM14540 | 261.90 € | **254.00 €** | 10.0 % | **6.7 %** | 254.30 € | stávame sa najlacnejší |
| Intelligent self-cleaning cat litterbox UBPet C20 | 284.90 € | **277.00 €** | 15.0 % | **11.8 %** | 277.50 € | stávame sa najlacnejší |
| TV držák Kruger&Matz KM1310  (43-100'' 80kg) univerz... | 60.50 € | **52.90 €** | 20.7 % | **5.5 %** | 51.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA AirCook DualZone Q787 XXL Deluxe | 166.50 € | **158.90 €** | 10.2 % | **5.2 %** | 149.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (čierne) | 92.50 € | **84.90 €** | 15.1 % | **5.7 %** | 85.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 Pro (hnedé) | 92.50 € | **84.90 €** | 15.1 % | **5.7 %** | 85.00 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 20 W | 1124.50 € | **1116.90 €** | 15.0 % | **14.2 %** | 1117.00 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT17B MAX | 90.00 € | **82.50 €** | 14.8 % | **5.2 %** | 80.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA500 nádobka na prach p... | 41.50 € | **34.00 €** | 32.4 % | **8.4 %** | 34.05 € | stávame sa najlacnejší |
| Päťzónový indukčný sporák IsEasy LI5-01 | 192.50 € | **185.00 €** | 15.1 % | **10.6 %** | 185.05 € | stávame sa najlacnejší |
| Ninja FB151EUWH Frost Vault 47l | 233.50 € | **226.00 €** | 10.2 % | **6.6 %** | 226.13 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (biely) | 189.50 € | **182.00 €** | 15.1 % | **10.5 %** | 182.41 € | stávame sa najlacnejší |
| Merač izolačného odporu pri vysokom napätí Uni-T UT512D | 245.50 € | **238.00 €** | 15.0 % | **11.5 %** | 238.50 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (čierny) | 88.50 € | **81.00 €** | 14.9 % | **5.2 %** | 81.50 € | stávame sa najlacnejší |
| Reproduktor Edifier D12 (hnedý) | 88.50 € | **81.00 €** | 14.9 % | **5.2 %** | 81.50 € | stávame sa najlacnejší |
| Blender G21 Perfection Cappuccino | 211.90 € | **204.50 €** | 18.5 % | **14.3 %** | 204.90 € | stávame sa najlacnejší |
| Uperfect Ubegin B5 15.6" 1920x1080 60Hz Portable Mon... | 88.00 € | **80.90 €** | 14.7 % | **5.4 %** | 78.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla 32E635BHS 32" HD LED AndroidTV 11 | 156.00 € | **148.90 €** | 10.0 % | **5.0 %** | 147.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Odyssey G55C (LS27CG554EUXEN) | 146.50 € | **139.50 €** | 10.3 % | **5.0 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Creative Zen Hybrid Pro Classic | 145.50 € | **138.50 €** | 10.4 % | **5.1 %** | 119.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX TT600S | 82.90 € | **75.90 €** | 14.9 % | **5.2 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Barkan 3400L.W - 4 pohybový prodloužený do 600x400mm... | 60.50 € | **53.50 €** | 19.6 % | **5.8 %** | 49.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-L1630W | 158.90 € | **151.90 €** | 10.0 % | **5.2 %** | 148.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač izolačného odporu Uni-T UT501B | 80.50 € | **73.50 €** | 15.2 % | **5.2 %** | 69.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Graef SKS 10002 | 148.50 € | **141.50 €** | 10.3 % | **5.1 %** | 138.06 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S60... | 82.50 € | **75.50 €** | 14.8 % | **5.1 %** | 72.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT207B digitálny klešťový multimeter | 84.90 € | **77.90 €** | 15.0 % | **5.5 %** | 77.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kontaktný teplomer Uni-T UT325 | 82.90 € | **75.90 €** | 15.2 % | **5.5 %** | 75.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava umývacej a kondicionovacej stanice ELEGOO Me... | 126.90 € | **119.90 €** | 15.2 % | **8.8 %** | 120.00 € | stávame sa najlacnejší |
| Rádio TechniSat CLASSIC 800 IR /černé/ | 158.50 € | **151.50 €** | 15.7 % | **10.6 %** | 151.90 € | stávame sa najlacnejší |
| Blesk GODOX LUX Senior (zelený) | 118.50 € | **111.50 €** | 15.0 % | **8.2 %** | 111.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash F1 (biela) + 6 ventiláto... | 115.90 € | **109.00 €** | 14.4 % | **7.6 %** | 109.24 € | stávame sa najlacnejší |
| Merač LCR Uni-T UT612 | 137.90 € | **131.00 €** | 15.1 % | **9.3 %** | 131.39 € | stávame sa najlacnejší |
| LEIFHEIT  Regulus PowerVac 2in1 11925 | 144.50 € | **137.90 €** | 10.0 % | **5.0 %** | 124.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 78.50 € | **71.90 €** | 15.0 % | **5.3 %** | 70.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 LFP4 RB-4028 700W 12V | 119.50 € | **112.90 €** | 14.3 % | **8.0 %** | 113.00 € | stávame sa najlacnejší |
| Súprava Kit-Pro IMOU na monitorovanie prostredníctvo... | 295.00 € | **288.50 €** | 7.5 % | **5.2 %** | 252.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P110(2-pack)(EU) reguláci... | 34.00 € | **27.50 €** | 31.8 % | **6.6 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar Professional 800x Pro SDXC 256GD | 81.00 € | **74.50 €** | 14.7 % | **5.5 %** | 69.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong SRT24HE4023C | 139.90 € | **133.50 €** | 10.1 % | **5.1 %** | 120.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RO6164EA | 144.90 € | **138.50 €** | 10.2 % | **5.4 %** | 134.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA420 Deodorizačný modul... | 41.90 € | **35.50 €** | 33.5 % | **13.1 %** | 35.75 € | stávame sa najlacnejší |
| TechniSat VIOLA 200 /bílé-černé/ 0000/2936 | 49.90 € | **43.50 €** | 23.8 % | **7.9 %** | 43.90 € | stávame sa najlacnejší |
| Beko FRL5388B | 134.90 € | **128.90 €** | 10.2 % | **5.3 %** | 91.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS520E15W | 263.90 € | **257.90 €** | 7.5 % | **5.1 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v fialovej farbe | 70.50 € | **64.50 €** | 14.8 % | **5.0 %** | 62.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard Capriolo Blue C PRO 335 x 83x 15 cm, 150 kg | 272.90 € | **266.90 €** | 9.3 % | **6.9 %** | 266.94 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz Connect C300 IP POE Tuya | 167.00 € | **161.00 €** | 11.2 % | **7.2 %** | 161.13 € | stávame sa najlacnejší |
| Tesla 32E325BH 32" HD LED TV | 134.50 € | **128.50 €** | 10.0 % | **5.1 %** | 128.70 € | stávame sa najlacnejší |
| CP-UNC-C13L1-VMW 1,3Mpix vnitřní IP kamera s IR přís... | 56.50 € | **50.50 €** | 25.2 % | **11.9 %** | 50.84 € | stávame sa najlacnejší |
| 14 filtrov Voľne použiteľné pre DJI Osmo Pocket 3 | 125.50 € | **119.50 €** | 14.9 % | **9.4 %** | 119.86 € | stávame sa najlacnejší |
| GUZZANTI GZ 1535 | 194.50 € | **188.50 €** | 9.5 % | **6.1 %** | 188.87 € | stávame sa najlacnejší |
| Router GL.iNet Flint 2 Wi-Fi 6 | 232.50 € | **226.50 €** | 15.1 % | **12.1 %** | 226.88 € | stávame sa najlacnejší |
| Blesk GODOX TT600 | 87.00 € | **81.00 €** | 14.7 % | **6.8 %** | 81.50 € | stávame sa najlacnejší |
| Braun CG9043 | 219.90 € | **214.00 €** | 10.1 % | **7.1 %** | 214.03 € | stávame sa najlacnejší |
| GUZZANTI GZ 20 | 234.90 € | **229.00 €** | 10.0 % | **7.2 %** | 229.13 € | stávame sa najlacnejší |
| Sequential Shifter Moza Racing SGP RS059 | 134.90 € | **129.00 €** | 15.0 % | **10.0 %** | 129.50 € | stávame sa najlacnejší |
| Candy GD 17SSB7-S | 308.90 € | **303.00 €** | 10.1 % | **8.0 %** | 303.21 € | stávame sa najlacnejší |
| Hohem microphone (2TX + 1RX + charging case) | 67.50 € | **61.90 €** | 15.2 % | **5.6 %** | 61.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Športové slnečné okuliare ZEBLAZE Q01 v striebornej ... | 67.50 € | **61.90 €** | 14.8 % | **5.2 %** | 62.00 € | stávame sa najlacnejší |
| Guzzanti GZ 460 | 120.50 € | **114.90 €** | 10.4 % | **5.3 %** | 97.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný monitor Uperfect UGame C2 16" 2560x1600 120Hz | 169.50 € | **163.90 €** | 15.1 % | **11.3 %** | 164.00 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 197.00 € | **191.50 €** | 10.0 % | **7.0 %** | 191.68 € | stávame sa najlacnejší |
| CP-UNC-DA21PL3C-V3-0360  2.0 Mpix venkovní IP dome k... | 99.50 € | **94.00 €** | 24.4 % | **17.5 %** | 94.24 € | stávame sa najlacnejší |
| Kamera TP-Link Mercusys MC230 IP, 5MPx, WiFi, prísvit | 27.50 € | **22.00 €** | 33.4 % | **6.7 %** | 22.30 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra (12-dielna) | 143.50 € | **138.00 €** | 15.0 % | **10.6 %** | 138.38 € | stávame sa najlacnejší |
| Beko B3BCNA324HS | 631.50 € | **626.00 €** | 10.1 % | **9.1 %** | 626.44 € | stávame sa najlacnejší |
| Blesk GODOX TT350 TTL pre Canon | 86.50 € | **81.00 €** | 14.8 % | **7.5 %** | 81.50 € | stávame sa najlacnejší |
| Blesk GODOX TT350 TTL pre Fujifilm | 86.50 € | **81.00 €** | 14.8 % | **7.5 %** | 81.50 € | stávame sa najlacnejší |
| Blesk GODOX TT350 TTL pre Nikon | 86.50 € | **81.00 €** | 14.8 % | **7.5 %** | 81.50 € | stávame sa najlacnejší |
| Blesk GODOX TT350 TTL pre Olympus | 86.50 € | **81.00 €** | 14.8 % | **7.5 %** | 81.50 € | stávame sa najlacnejší |
| Blesk GODOX TT350 TTL pre Sony | 86.50 € | **81.00 €** | 14.8 % | **7.5 %** | 81.50 € | stávame sa najlacnejší |
| Blitzwolf 100-palcové elektrické premietacie plátno ... | 210.50 € | **205.00 €** | 14.9 % | **11.9 %** | 205.50 € | stávame sa najlacnejší |
| G3Ferrari Dvouplotýnka, G10047 dvouplotý | 125.90 € | **120.50 €** | 10.1 % | **5.4 %** | 113.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa DarkFlash C280 (čierna) + 7 ventil... | 62.90 € | **57.50 €** | 15.1 % | **5.2 %** | 57.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| UNI-T UT501A tester izolačného odporu | 60.00 € | **54.90 €** | 15.1 % | **5.3 %** | 54.99 € | stávame sa najlacnejší |
| Roborock Q7 BF Black | 185.00 € | **179.90 €** | 8.2 % | **5.2 %** | 175.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q10 PF čistiaci robot (čierny) | 219.00 € | **213.90 €** | 15.0 % | **12.3 %** | 214.00 € | stávame sa najlacnejší |
| Diaľkový spúšť GODOX X3 TTL pre Fujifilm | 78.00 € | **72.90 €** | 14.7 % | **7.2 %** | 73.00 € | stávame sa najlacnejší |
| Diaľkový spúšťač GODOX X3 TTL pre Sony | 78.00 € | **72.90 €** | 14.7 % | **7.2 %** | 73.00 € | stávame sa najlacnejší |
| Girmi FM2105 Mikrovlnná trouba s grilem | 109.50 € | **104.50 €** | 10.4 % | **5.3 %** | 91.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EB61C4DB | 148.50 € | **143.50 €** | 8.7 % | **5.0 %** | 131.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-6 litinové neoprenové HE... | 37.00 € | **32.00 €** | 21.8 % | **5.3 %** | 27.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal RK812110 | 109.90 € | **104.90 €** | 10.2 % | **5.2 %** | 104.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000 | 99.00 € | **94.00 €** | 14.7 % | **8.9 %** | 94.09 € | stávame sa najlacnejší |
| CrockPot SCCPBPP605-050 | 102.50 € | **97.50 €** | 10.5 % | **5.1 %** | 97.59 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA210 Jednorazové vrecko... | 25.00 € | **20.00 €** | 38.9 % | **11.1 %** | 20.30 € | stávame sa najlacnejší |
| FINLUX 32FWI5670 SMART ANDROID TV FULL HD BÍLÁ | 250.50 € | **245.50 €** | 11.9 % | **9.7 %** | 245.90 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 468.00 € | **463.00 €** | 8.1 % | **7.0 %** | 463.50 € | stávame sa najlacnejší |
| Meradlo hrúbky povlaku Uni-T UT343A | 72.90 € | **68.00 €** | 15.0 % | **7.3 %** | 68.09 € | stávame sa najlacnejší |
| Candy CDG1S514ESH | 243.90 € | **239.00 €** | 10.0 % | **7.8 %** | 239.20 € | stávame sa najlacnejší |
| Sklokeramická/elektrická varná doska IsEasy LT5-02 | 160.90 € | **156.00 €** | 15.1 % | **11.6 %** | 156.50 € | stávame sa najlacnejší |
| DOMO DO9252I | 257.90 € | **253.00 €** | 10.0 % | **7.9 %** | 253.20 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash TH285M (biela) | 52.50 € | **47.90 €** | 15.4 % | **5.3 %** | 46.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT216A digitálny klešťový multimeter | 54.50 € | **49.90 €** | 15.4 % | **5.6 %** | 49.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darflash FT418 + 6 ventilátorov aR... | 64.50 € | **59.90 €** | 14.7 % | **6.5 %** | 60.00 € | stávame sa najlacnejší |
| CANDY CMWA23TNDB | 97.50 € | **92.90 €** | 10.3 % | **5.1 %** | 89.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 3601 | 101.50 € | **96.90 €** | 10.0 % | **5.0 %** | 95.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Paddleboard SUP REBEL ACTIVE RBA-4501-OR 11'6" 350x8... | 166.50 € | **161.90 €** | 15.4 % | **12.2 %** | 161.91 € | stávame sa najlacnejší |
| GODOX UB-165W parabolický odrazový dáždnik | 69.50 € | **64.90 €** | 15.0 % | **7.4 %** | 65.00 € | stávame sa najlacnejší |
| Tesla SlowCook S900 Plus | 92.50 € | **88.00 €** | 10.5 % | **5.1 %** | 76.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 15.00 € | **10.50 €** | 55.4 % | **8.7 %** | 6.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GOOLOO GP3000 59,2 Wh štartér | 56.00 € | **51.50 €** | 14.8 % | **5.5 %** | 48.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash DS900WS (čierna) + 4 ven... | 53.00 € | **48.50 €** | 15.0 % | **5.2 %** | 47.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EWS6526WC | 312.50 € | **308.00 €** | 8.1 % | **6.5 %** | 308.21 € | stávame sa najlacnejší |
| CP-UNC-TA41L3C-L 4.0 Mpix venkovní IP kamera s duáln... | 110.00 € | **105.50 €** | 24.0 % | **18.9 %** | 105.80 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA105 sada na výmenu vys... | 24.00 € | **19.50 €** | 33.4 % | **8.4 %** | 19.83 € | stávame sa najlacnejší |
| Zelmer horkovzdušná fritéza ZAF9230 | 173.50 € | **169.00 €** | 8.8 % | **6.0 %** | 169.37 € | stávame sa najlacnejší |
| Počítačová skriňa DarkFlash AIRNOVA (biela) + 3 vent... | 73.00 € | **68.50 €** | 14.9 % | **7.8 %** | 68.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DS900WD (čierna) + 4 ven... | 64.00 € | **59.50 €** | 14.8 % | **6.7 %** | 59.90 € | stávame sa najlacnejší |
| G3Ferrari G2014401 Zmrzlinovač | 179.50 € | **175.00 €** | 10.3 % | **7.5 %** | 175.41 € | stávame sa najlacnejší |
| MSI MAG 274CF E20 | 113.50 € | **109.00 €** | 10.4 % | **6.0 %** | 109.46 € | stávame sa najlacnejší |
| Gorenje WHT643E4XBG | 247.50 € | **243.00 €** | 8.1 % | **6.2 %** | 243.48 € | stávame sa najlacnejší |
| Blesk GODOX iT30Pro pre Nikon | 69.50 € | **65.00 €** | 14.8 % | **7.3 %** | 65.50 € | stávame sa najlacnejší |
| Blesk GODOX iT30Pro pre Canon | 69.50 € | **65.00 €** | 14.8 % | **7.3 %** | 65.50 € | stávame sa najlacnejší |
| Blesk GODOX iT30Pro pre Olympus | 69.50 € | **65.00 €** | 14.8 % | **7.3 %** | 65.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darflash FT418 + 6 ventilátorov aR... | 61.50 € | **57.00 €** | 15.1 % | **6.7 %** | 57.50 € | stávame sa najlacnejší |
| Reflektor GODOX RFT-25S | 69.50 € | **65.00 €** | 14.8 % | **7.3 %** | 65.50 € | stávame sa najlacnejší |
| Ovládacia páka lietadla Sidestick MOZA MA3X | 86.50 € | **82.00 €** | 15.2 % | **9.2 %** | 82.50 € | stávame sa najlacnejší |
| HDD 3.5" 4TB 256MB Seagate SKYHAWK pro kamerové syst... | 221.90 € | **217.50 €** | 7.2 % | **5.1 %** | 185.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fujifilm INSTAX MINI 13 - Green | 91.90 € | **87.50 €** | 10.4 % | **5.1 %** | 61.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fujifilm INSTAX MINI 13 - Pink | 91.90 € | **87.50 €** | 10.4 % | **5.1 %** | 61.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Výrobok X.A.3 | 53.90 € | **49.50 €** | 15.0 % | **5.6 %** | 48.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné okuliare BlitzWolf BW-AG1 s umelou inte... | 57.90 € | **53.50 €** | 15.0 % | **6.3 %** | 53.90 € | stávame sa najlacnejší |
| Inteligentné slnečné okuliare BlitzWolf BW-AG1 s ume... | 57.90 € | **53.50 €** | 15.0 % | **6.3 %** | 53.90 € | stávame sa najlacnejší |
| Cycplus AS2 mini electric pump | 48.00 € | **43.90 €** | 15.0 % | **5.2 %** | 41.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá QCY N70 HT18 LITE (čierne) | 47.00 € | **42.90 €** | 15.1 % | **5.1 %** | 43.00 € | stávame sa najlacnejší |
| BEKO HDCG 32220 FX | 97.00 € | **92.90 €** | 10.0 % | **5.4 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| IsEasy MGBG-603 trojzónový plynový sporák so sklenen... | 102.00 € | **97.90 €** | 14.9 % | **10.3 %** | 98.00 € | stávame sa najlacnejší |
| ROWENTA RO 3923 EA | 79.50 € | **75.50 €** | 10.6 % | **5.1 %** | 66.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK770 nerez | 35.90 € | **31.90 €** | 19.3 % | **6.0 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA Sound BS70 - bezdrátový Bluetooth reproduktor ... | 62.50 € | **58.50 €** | 12.9 % | **5.7 %** | 55.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA Stormy Home 0517 90000 | 79.50 € | **75.50 €** | 10.7 % | **5.1 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal IB5100E0 | 93.90 € | **89.90 €** | 10.0 % | **5.4 %** | 89.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sáčok TP-Link Tapo RVA200 jednorazový, prachový Tapo | 20.50 € | **16.50 €** | 32.8 % | **6.9 %** | 16.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rowenta RH98A9WO | 279.90 € | **275.90 €** | 7.9 % | **6.3 %** | 275.97 € | stávame sa najlacnejší |
| Zátěžová deka Rebel Active RBA-6014-9   9 kg (150x20... | 36.50 € | **32.50 €** | 22.2 % | **8.8 %** | 32.59 € | stávame sa najlacnejší |
| Projektor AURZEN Boom Mini Black | 232.90 € | **228.90 €** | 15.1 % | **13.1 %** | 229.00 € | stávame sa najlacnejší |
| Zelmer kuchyňský robot ZKR2010 | 176.50 € | **172.50 €** | 8.7 % | **6.2 %** | 172.65 € | stávame sa najlacnejší |
| CP-USC-TC51PL2-0360 5.0 Mpix vekovní IP kamera s IR ... | 75.50 € | **71.50 €** | 23.6 % | **17.0 %** | 71.68 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DRX70 MESH + 4 RGB venti... | 52.50 € | **48.50 €** | 14.6 % | **5.9 %** | 48.72 € | stávame sa najlacnejší |
| Beko VRT76325VW | 167.00 € | **163.00 €** | 8.7 % | **6.1 %** | 163.31 € | stávame sa najlacnejší |
| Digitálny vyhľadávač káblov UNI-T UT683KIT | 48.50 € | **44.50 €** | 15.3 % | **5.8 %** | 44.89 € | stávame sa najlacnejší |
| Súprava príslušenstva GODOX AK-R1 pre blesky s okrúh... | 50.00 € | **46.00 €** | 15.0 % | **5.8 %** | 46.50 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre objektív Fuji XF 23 mm F2... | 87.00 € | **83.00 €** | 14.8 % | **9.6 %** | 83.50 € | stávame sa najlacnejší |
| ANMITE A185W03 18,5" prenosný monitor | 134.90 € | **131.00 €** | 15.0 % | **11.6 %** | 131.50 € | stávame sa najlacnejší |
| GODOX SFUV5050 Softbox, 50x50cm | 43.50 € | **39.90 €** | 14.8 % | **5.3 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Adapter, quick release MOZA RACING RS07 for R21/R16/... | 53.50 € | **49.90 €** | 15.3 % | **7.5 %** | 49.96 € | stávame sa najlacnejší |
| Súprava softboxu GODOX SFUV8080 80cm | 49.50 € | **45.90 €** | 14.9 % | **6.5 %** | 46.00 € | stávame sa najlacnejší |
| Xiaomi Mijia Smart Humidifier Pro | 80.50 € | **76.90 €** | 10.0 % | **5.1 %** | 75.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Braun SI7160BL | 78.50 € | **74.90 €** | 10.3 % | **5.3 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO344DH | 148.50 € | **144.90 €** | 9.0 % | **6.4 %** | 144.98 € | stávame sa najlacnejší |
| Baterie olověná  12V / 55Ah  VIPOW bezúdržbový akumu... | 98.50 € | **94.90 €** | 21543.6 % | **20752.6 %** | 94.99 € | stávame sa najlacnejší |
| GODOX CS-85D Softbox | 69.50 € | **65.90 €** | 14.8 % | **8.9 %** | 66.00 € | stávame sa najlacnejší |
| CANON PIXMA TR4755i Black | 80.00 € | **76.50 €** | 10.1 % | **5.2 %** | 57.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GODOX CBA-PA0007 Pozadie | 39.50 € | **36.00 €** | 15.5 % | **5.3 %** | 36.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GODOX CBA-TA0016 Skladacie pozadie | 39.50 € | **36.00 €** | 15.5 % | **5.3 %** | 36.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Instant Pot Vortex Compact (5,0 L) | 102.00 € | **98.50 €** | 10.0 % | **6.3 %** | 98.53 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 108.50 € | **105.00 €** | 14.9 % | **11.2 %** | 105.17 € | stávame sa najlacnejší |
| Počítačová skriňa Darflash FT418 PRO + 7 ventilátoro... | 76.50 € | **73.00 €** | 15.2 % | **9.9 %** | 73.50 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 17 Pro Max so 17 mm držiakom | 67.50 € | **64.00 €** | 15.4 % | **9.4 %** | 64.50 € | stávame sa najlacnejší |
| GODOX SFUV6060 Softbox, 60x60 cm | 43.50 € | **40.00 €** | 15.1 % | **5.9 %** | 40.50 € | stávame sa najlacnejší |
| Mobilný ovládač GameSir X5 Lite GN Bright Green | 28.50 € | **25.00 €** | 29.7 % | **13.8 %** | 25.50 € | stávame sa najlacnejší |
| Aligator A930 GPS Senior Black | 80.90 € | **77.50 €** | 10.1 % | **5.4 %** | 75.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domácí monitorovací systém TechnoLine MA10001 Starte... | 74.90 € | **71.50 €** | 13.8 % | **8.7 %** | 71.69 € | stávame sa najlacnejší |
| Blender G21 Excellent brown | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Excellent Cappuccino | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Excellent Graphite Black | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Excellent red | 232.90 € | **229.50 €** | 18.3 % | **16.6 %** | 229.90 € | stávame sa najlacnejší |
| Blender G21 Experience Graphite Black | 253.90 € | **250.50 €** | 18.3 % | **16.7 %** | 250.90 € | stávame sa najlacnejší |
| Blender G21 Experience White | 253.90 € | **250.50 €** | 18.3 % | **16.7 %** | 250.90 € | stávame sa najlacnejší |
| Blender G21 Perfection white | 211.90 € | **208.50 €** | 18.5 % | **16.6 %** | 208.90 € | stávame sa najlacnejší |
| Klávesnica ONIKUMA MT706 (čierna) (QWERTY) | 40.90 € | **37.50 €** | 15.3 % | **5.7 %** | 32.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI L28 (strieborná-zelená + ... | 40.90 € | **37.50 €** | 15.5 % | **5.9 %** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (Czarny) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Vibe 8 Abyss (SK) | 41.90 € | **38.50 €** | 15.3 % | **5.9 %** | 38.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar High-Endurance microSDHC/microS... | 40.90 € | **37.50 €** | 15.0 % | **5.4 %** | 37.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight GSM diaľkovo ovládaná zásuvka | 59.90 € | **56.50 €** | 35.8 % | **28.1 %** | 56.54 € | stávame sa najlacnejší |
| Gorenje GV663B65 | 507.90 € | **504.50 €** | 7.1 % | **6.3 %** | 504.74 € | stávame sa najlacnejší |
| Grafický tablet Huion H640P | 39.00 € | **35.90 €** | 14.3 % | **5.3 %** | 35.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **16.90 €** | 46.6 % | **23.9 %** | 16.97 € | stávame sa najlacnejší |
| Tester USB FNIRSI FNB-C2 | 39.00 € | **35.90 €** | 14.7 % | **5.6 %** | 36.00 € | stávame sa najlacnejší |
| Mini termovízna kamera Mileseey TR256i pre iPhone | 223.00 € | **219.90 €** | 15.0 % | **13.4 %** | 220.00 € | stávame sa najlacnejší |
| Aligator T100 Black | 68.90 € | **65.90 €** | 10.3 % | **5.5 %** | 64.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (čierne) | 36.50 € | **33.50 €** | 15.2 % | **5.8 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meross MOP320MA-EU WiFi inteligentná napájacia lišta... | 34.50 € | **31.50 €** | 15.8 % | **5.7 %** | 29.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje MO20E1T4 | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 66.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Mikrofón Maono PD100X (čierny) | 35.90 € | **32.90 €** | 15.0 % | **5.4 %** | 32.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FNIRSI BTM-24 multifunkčný tester autobatérií | 35.50 € | **32.50 €** | 15.3 % | **5.6 %** | 32.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Súprava GODOX LR (LR15Bi + LR30Bi) | 34.90 € | **31.90 €** | 15.5 % | **5.6 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá QCY Crossky Clip C30S (červené) | 36.50 € | **33.50 €** | 15.2 % | **5.8 %** | 33.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Žehlička Berlingerhaus naparovacia 2200 W Taupe Coll... | 36.50 € | **33.50 €** | 16.8 % | **7.2 %** | 33.57 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T UT139A s meraním skutočne... | 37.50 € | **34.50 €** | 15.6 % | **6.4 %** | 34.59 € | stávame sa najlacnejší |
| Vysavač robotický NEDIS WIFIVCL001CBK SmartLife 3v1 ... | 241.90 € | **238.90 €** | 8.5 % | **7.1 %** | 239.00 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **35.90 €** | 14.9 % | **6.0 %** | 36.00 € | stávame sa najlacnejší |
| ZEUSLAP ZP156 – prenosný monitor s uhlopriečkou 15,6" | 92.90 € | **89.90 €** | 15.0 % | **11.3 %** | 90.00 € | stávame sa najlacnejší |
| Počítačová skrinka Darkflash DK351 + 4 ventilátory (... | 41.90 € | **38.90 €** | 15.1 % | **6.9 %** | 39.00 € | stávame sa najlacnejší |
| Guzzanti GZ 1535SS | 210.50 € | **207.50 €** | 10.0 % | **8.4 %** | 207.60 € | stávame sa najlacnejší |
| Sada filtrov Freewell Insta360 Luna Ultra na každode... | 55.50 € | **52.50 €** | 15.2 % | **8.9 %** | 52.67 € | stávame sa najlacnejší |
| Solight projekčné hodiny s rádiom a budíkom | 21.00 € | **18.00 €** | 44.1 % | **23.5 %** | 18.20 € | stávame sa najlacnejší |
| Prevodovka PXN - usporiadanie H 7+1 | 84.00 € | **81.00 €** | 15.0 % | **10.9 %** | 81.38 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191E | 61.50 € | **58.50 €** | 15.4 % | **9.8 %** | 58.89 € | stávame sa najlacnejší |
| Infračervený teplomer Uni-T UT301D+ | 55.00 € | **52.00 €** | 14.9 % | **8.7 %** | 52.39 € | stávame sa najlacnejší |
| LCR tester FNIRSI LCR-ST2Plus | 45.50 € | **42.50 €** | 15.2 % | **7.6 %** | 42.90 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 29.50 € | **26.50 €** | 33.0 % | **19.5 %** | 26.90 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 2 v 1 pre FUJI X100VI/X... | 95.50 € | **92.50 €** | 14.9 % | **11.3 %** | 92.90 € | stávame sa najlacnejší |
| TESLA SecureQ i13 - Wi-Fi smart bezpečnostní systém | 102.50 € | **99.50 €** | 27.2 % | **23.5 %** | 99.90 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Meross MTS215MA(EU) (Mat... | 56.00 € | **53.00 €** | 15.0 % | **8.9 %** | 53.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darflash FT350 + 5 ventilátorov aR... | 58.00 € | **55.00 €** | 14.6 % | **8.7 %** | 55.50 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DS900 Mesh bez ventiláto... | 38.00 € | **35.00 €** | 15.0 % | **5.9 %** | 35.50 € | stávame sa najlacnejší |
| Batéria Jupio AAA 1000 mAh (mikrotužkové) 4ks, dobíj... | 11.50 € | **8.60 €** | 46.1 % | **9.2 %** | 8.66 € | stávame sa najlacnejší |
| Uni-T UT202BT Inteligentný svorkový multimeter | 40.90 € | **38.00 €** | 15.4 % | **7.2 %** | 38.29 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 35.90 € | **33.00 €** | 15.5 % | **6.1 %** | 33.50 € | stávame sa najlacnejší |
| Ufesa Sensazione černý | 334.90 € | **332.00 €** | 6.9 % | **6.0 %** | 332.14 € | stávame sa najlacnejší |
| Solight LED stropné svietidlo PLAIN, 15W, 1000lm, 40... | 10.90 € | **8.20 €** | 40.4 % | **5.7 %** | 7.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (štvorbalen... | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C80 WiFi Router | 50.50 € | **47.90 €** | 11.1 % | **5.3 %** | 37.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TESLA MultiCook RC400 Low Carb | 64.50 € | **61.90 €** | 10.1 % | **5.7 %** | 53.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente ProVacs | 59.50 € | **56.90 €** | 10.0 % | **5.2 %** | 49.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Diaľkový ovládač 4-kan. k pohonu brán IN SL-600, 100... | 28.50 € | **25.90 €** | 16.7 % | **6.0 %** | 19.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXSH2002E | 57.50 € | **54.90 €** | 10.2 % | **5.2 %** | 48.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS3750i Black | 48.50 € | **45.90 €** | 10.9 % | **5.0 %** | 41.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo čierne) | 30.50 € | **27.90 €** | 15.9 % | **6.0 %** | 26.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO9279W | 51.50 € | **48.90 €** | 10.9 % | **5.3 %** | 47.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Blesk GODOX iM30 | 30.50 € | **27.90 €** | 15.3 % | **5.5 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash LEO (čierna) | 29.50 € | **26.90 €** | 15.7 % | **5.5 %** | 26.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač hladiny hluku FNIRSI FDM-02 | 31.50 € | **28.90 €** | 15.7 % | **6.2 %** | 28.99 € | stávame sa najlacnejší |
| Uni-T UT320T 2-v-1 teplomer | 35.50 € | **32.90 €** | 15.3 % | **6.9 %** | 33.00 € | stávame sa najlacnejší |
| Inteligentný WiFi termostat Meross MTS200HK(EU) (Hom... | 40.50 € | **37.90 €** | 15.2 % | **7.9 %** | 38.00 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **56.90 €** | 15.2 % | **10.2 %** | 57.00 € | stávame sa najlacnejší |
| Inteligentné hodinky Zeblaze Lily 2 (ružové) | 33.50 € | **30.90 €** | 14.6 % | **5.7 %** | 31.00 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DB330M Mesh (čierna) | 29.50 € | **26.90 €** | 15.8 % | **5.6 %** | 27.00 € | stávame sa najlacnejší |
| Herní mikrofon Maono DM30RGB (černý) | 40.50 € | **37.90 €** | 14.8 % | **7.5 %** | 38.00 € | stávame sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (green) | 45.50 € | **42.90 €** | 21.5 % | **14.6 %** | 43.00 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA301 umývateľná handrič... | 14.50 € | **11.90 €** | 31.4 % | **7.9 %** | 10.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 4 kusoch | 33.00 € | **30.50 €** | 14.6 % | **5.9 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA MG2551S Grey | 56.00 € | **53.50 €** | 10.1 % | **5.2 %** | 36.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 135 | 60.00 € | **57.50 €** | 10.2 % | **5.6 %** | 42.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný termostat Avatto ZWT100 3A Zigbee Tuya | 33.00 € | **30.50 €** | 14.3 % | **5.7 %** | 26.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Colmi P80 (oceľovo-zlaté) | 30.00 € | **27.50 €** | 14.8 % | **5.3 %** | 26.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 16.00 € | **13.50 €** | 38.8 % | **17.1 %** | 13.58 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T 400A 2. generáci... | 35.50 € | **33.00 €** | 15.6 % | **7.5 %** | 33.19 € | stávame sa najlacnejší |
| Uni-T 400A – digitálny klešťový multimeter 4. generá... | 59.50 € | **57.00 €** | 14.7 % | **9.9 %** | 57.19 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI White (s modr... | 71.50 € | **69.00 €** | 14.5 % | **10.5 %** | 69.28 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti Uni-T UT332+ | 62.50 € | **60.00 €** | 14.9 % | **10.3 %** | 60.39 € | stávame sa najlacnejší |
| Kalibrátor procesov Uni-T UT701 | 193.50 € | **191.00 €** | 15.0 % | **13.5 %** | 191.39 € | stávame sa najlacnejší |
| Yeelight Pura Monitor Light Bar Pro | 59.00 € | **56.50 €** | 14.9 % | **10.0 %** | 56.90 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DB460M (čierna) | 31.00 € | **28.50 €** | 14.6 % | **5.4 %** | 28.90 € | stávame sa najlacnejší |
| Detektor drôtov UNI-T UT25CL | 143.50 € | **141.00 €** | 14.9 % | **12.9 %** | 141.50 € | stávame sa najlacnejší |
| Inteligentný roletový spínač ZigBee Sonoff MINI-ZBRB... | 52.50 € | **50.00 €** | 15.5 % | **10.0 %** | 50.50 € | stávame sa najlacnejší |
| Adapter 10in1 HUB Blitzwolf BW-NEW TH8 | 37.50 € | **35.00 €** | 15.3 % | **7.6 %** | 35.50 € | stávame sa najlacnejší |
| Filter and lens set FREEWELL for DJI Osmo Pocket 3 | 116.50 € | **114.00 €** | 14.9 % | **12.4 %** | 114.50 € | stávame sa najlacnejší |
| Ovládač GameSir G7 Pro BK TRI-MODE Black and Red | 76.50 € | **74.00 €** | 15.4 % | **11.6 %** | 74.50 € | stávame sa najlacnejší |
| Herný volant PXN WCS R2 | 174.90 € | **172.50 €** | 15.1 % | **13.5 %** | 172.54 € | stávame sa najlacnejší |
| Blender G21 Perfection red | 211.90 € | **209.50 €** | 18.5 % | **17.1 %** | 209.66 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600 | 73.90 € | **71.50 €** | 14.9 % | **11.2 %** | 71.89 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM600A | 86.90 € | **84.50 €** | 15.0 % | **11.8 %** | 84.89 € | stávame sa najlacnejší |
| PROSCENIC P11 Ultra – bezdrôtový vertikálny vysávač | 91.90 € | **89.50 €** | 15.2 % | **12.2 %** | 89.90 € | stávame sa najlacnejší |
| Inteligentná zásuvka Gosund EP2 WiFi, 4 kusy (štvorb... | 28.90 € | **26.50 €** | 15.7 % | **6.1 %** | 12.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 30.90 € | **28.50 €** | 15.7 % | **6.7 %** | 27.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT205E digitálny klešťový multimeter | 49.90 € | **47.50 €** | 15.2 % | **9.6 %** | 47.69 € | stávame sa najlacnejší |
| Monitorovacie zariadenia Uni-T A25D na meranie PM2,5 | 55.90 € | **53.50 €** | 15.4 % | **10.4 %** | 53.79 € | stávame sa najlacnejší |
| Termoska na jedlo G21 500 ml – eukalyptovo zelená | 21.90 € | **19.50 €** | 24.8 % | **11.1 %** | 19.90 € | stávame sa najlacnejší |
| Počítačové puzdro Darkflash Aquarius Acrylic | 26.90 € | **24.50 €** | 15.5 % | **5.2 %** | 24.90 € | stávame sa najlacnejší |
| AMICA MV 647 AW | 335.90 € | **333.50 €** | 7.1 % | **6.3 %** | 333.66 € | stávame sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 128 GB | 28.00 € | **25.90 €** | 14.7 % | **6.1 %** | 21.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Huanuo HNCM9 13-32" monitor mount | 30.00 € | **27.90 €** | 14.2 % | **6.2 %** | 26.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Uni-T UT201F digitálny klešťový multimeter | 26.00 € | **23.90 €** | 14.6 % | **5.4 %** | 23.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM40Mi | 28.00 € | **25.90 €** | 14.5 % | **5.9 %** | 25.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight smart vianočný stromček, 150 LED, 1,5m, IP44... | 37.00 € | **34.90 €** | 53.6 % | **44.9 %** | 34.92 € | stávame sa najlacnejší |
| LCR tester FNIRSI LCR-ST2 | 39.00 € | **36.90 €** | 14.5 % | **8.4 %** | 37.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Bright Day“... | 45.00 € | **42.90 €** | 14.9 % | **9.5 %** | 43.00 € | stávame sa najlacnejší |
| Napájací zdroj FNIRSI 100 W | 37.00 € | **34.90 €** | 15.1 % | **8.5 %** | 35.00 € | stávame sa najlacnejší |
| Elektrický mlynček na zrnkovú kávu HiBREW G3 | 80.00 € | **77.90 €** | 14.9 % | **11.8 %** | 77.92 € | stávame sa najlacnejší |
| LCD displej KRUGER & MATZ KM2021 Android Auto Apple ... | 79.00 € | **76.90 €** | 11.8 % | **8.8 %** | 76.99 € | stávame sa najlacnejší |
| Súprava 4 filtrov Split ND Freewell pre DJI Air 3 | 85.00 € | **82.90 €** | 14.8 % | **12.0 %** | 83.00 € | stávame sa najlacnejší |
| Sada 8 filtrov Freewell DJI Osmo Pocket 3 | 81.00 € | **78.90 €** | 8.8 % | **6.0 %** | 79.00 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 17 Pro s držiakom 17 mm | 74.00 € | **71.90 €** | 14.8 % | **11.6 %** | 72.00 € | stávame sa najlacnejší |
| Fixed Selfie stick MagSnap FIXSN-M-BK | 40.50 € | **38.50 €** | 11.1 % | **5.6 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MR80X WiFi Dual Band Router | 43.00 € | **41.00 €** | 10.2 % | **5.1 %** | 32.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Capri Citrusovač 413/CA | 67.50 € | **65.50 €** | 8.2 % | **5.0 %** | 57.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartring Colmi R03 18.9MM 9 (black) | 27.50 € | **25.50 €** | 15.0 % | **6.6 %** | 19.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skriňa na disky SSD/M2 Lexar LPAE06N 10Gb/s | 23.90 € | **21.90 €** | 15.6 % | **5.9 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE300 AC1200 WiFi Range Extender | 36.50 € | **34.50 €** | 11.3 % | **5.2 %** | 31.55 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze GTS 3 PRO Smartwatch (White) | 24.00 € | **22.00 €** | 14.6 % | **5.1 %** | 20.48 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aligator A675 Senior Red | 48.50 € | **46.50 €** | 10.0 % | **5.5 %** | 45.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cycplus G1 bicycle computer | 22.90 € | **20.90 €** | 15.1 % | **5.1 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente Airfit-Wh | 48.50 € | **46.50 €** | 10.2 % | **5.6 %** | 45.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Termoska Berlingerhaus nerez s LED displejom 450 ml ... | 12.50 € | **10.50 €** | 28.2 % | **7.6 %** | 9.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny decibelomer Habotest HT622B USB A/C | 26.90 € | **24.90 €** | 15.2 % | **6.6 %** | 24.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GPS bike computer Cycplus M1 | 26.50 € | **24.50 €** | 14.2 % | **5.6 %** | 23.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dotykový nástenný vypínač WiFi Sonoff T... | 24.50 € | **22.50 €** | 15.4 % | **6.0 %** | 21.97 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 29.50 € | **27.50 €** | 14.3 % | **6.6 %** | 27.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Podwójne inteligentne gniazdko WiFi Gosund SP211, 2 ... | 24.50 € | **22.50 €** | 15.5 % | **6.1 %** | 22.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Laserový diaľkomer Uni-T LM60Mi | 27.90 € | **25.90 €** | 15.4 % | **7.1 %** | 26.00 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra All Da... | 102.90 € | **100.90 €** | 15.1 % | **12.9 %** | 101.00 € | stávame sa najlacnejší |
| Širokouhlý objektív Freewell 16 mm s bajonetom 17 mm | 111.90 € | **109.90 €** | 15.0 % | **12.9 %** | 110.00 € | stávame sa najlacnejší |
| Pamäťová karta Lexar Professional 800x Pro SDXC 64 GB | 30.90 € | **28.90 €** | 15.3 % | **7.8 %** | 29.00 € | stávame sa najlacnejší |
| Blesk GODOX AD-L pre AD200 | 24.90 € | **22.90 €** | 15.0 % | **5.8 %** | 23.00 € | stávame sa najlacnejší |
| Colmi V69 Smartwatch (Silver) | 38.50 € | **36.50 €** | 15.7 % | **9.7 %** | 36.63 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 13.50 € | **11.50 €** | 24.9 % | **6.4 %** | 11.63 € | stávame sa najlacnejší |
| PetKit Eversweet SOLO SE fontána pre psov a mačky (t... | 36.00 € | **34.00 €** | 14.8 % | **8.4 %** | 34.19 € | stávame sa najlacnejší |
| Russell Hobbs 26520-56 | 160.50 € | **158.50 €** | 10.2 % | **8.9 %** | 158.70 € | stávame sa najlacnejší |
| Guzzanti GZ 109A | 161.50 € | **159.50 €** | 10.2 % | **8.9 %** | 159.70 € | stávame sa najlacnejší |
| Sada filtrov Freewell Osmo Pocket 4/3 Xtra Muse | 44.50 € | **42.50 €** | 14.7 % | **9.6 %** | 42.71 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 16.00 € | **14.00 €** | 31.9 % | **15.4 %** | 14.23 € | stávame sa najlacnejší |
| Meteorologická stanice GARNI 615W Precise | 56.50 € | **54.50 €** | 8.9 % | **5.0 %** | 54.79 € | stávame sa najlacnejší |
| Univerzálny diaľkový ovládač IR WiFi Avatto S16 TUYA | 24.50 € | **22.50 €** | 14.5 % | **5.1 %** | 22.80 € | stávame sa najlacnejší |
| Blender G21 Comfort Graphite Black | 152.50 € | **150.50 €** | 13.4 % | **12.0 %** | 150.84 € | stávame sa najlacnejší |
| Domo DO42327PC | 101.50 € | **99.50 €** | 8.5 % | **6.4 %** | 99.89 € | stávame sa najlacnejší |
| Rádio Imperial Dabman 280 CDBK s funkcí ASA | 231.50 € | **229.50 €** | 12.6 % | **11.7 %** | 229.90 € | stávame sa najlacnejší |
| TechniSat VIOLA 2 černé | 37.50 € | **35.50 €** | 14.8 % | **8.7 %** | 35.90 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM60T | 32.00 € | **30.00 €** | 13.3 % | **6.2 %** | 30.44 € | stávame sa najlacnejší |
| Solight LED svetelný panel Backlit, 40W, 3600lm, 400... | 17.00 € | **15.00 €** | 37.8 % | **21.6 %** | 15.49 € | stávame sa najlacnejší |
| Vodou chladený chladič procesora DarkFlash CB360 (či... | 48.00 € | **46.00 €** | 14.6 % | **9.9 %** | 46.50 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 Pro s 17 mm uchytením | 46.00 € | **44.00 €** | 14.9 % | **9.9 %** | 44.50 € | stávame sa najlacnejší |
| Laserový gravír XTOOL M2 Deluxe 20 W | 1448.90 € | **1447.00 €** | 7.8 % | **7.7 %** | 1447.31 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre Insta360 Luna Ultra Bright... | 66.90 € | **65.00 €** | 15.2 % | **11.9 %** | 65.13 € | stávame sa najlacnejší |
| YAMAHA NS-SW100 BLACK | 223.90 € | **222.00 €** | 10.1 % | **9.2 %** | 222.24 € | stávame sa najlacnejší |
| ANMITE A160W03 16" prenosný monitor | 88.90 € | **87.00 €** | 15.1 % | **12.6 %** | 87.50 € | stávame sa najlacnejší |
| Solight PIR senzor nástenný, vonkajší, biely | 7.70 € | **5.80 €** | 44.2 % | **8.7 %** | 5.90 € | stávame sa najlacnejší |
| Electrolux E4GK1-4GB | 37.90 € | **36.00 €** | 10.8 % | **5.2 %** | 33.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 58.90 € | **57.00 €** | 15.0 % | **11.3 %** | 57.04 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT60BT s Bluetooth | 33.90 € | **32.00 €** | 15.0 % | **8.5 %** | 32.29 € | stávame sa najlacnejší |
| Solight LED stropné svetlo štvorcové Treviso, 48W, 2... | 59.90 € | **58.00 €** | 38.2 % | **33.8 %** | 58.43 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – eukalyptovo zelený | 21.90 € | **20.00 €** | 24.8 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Gens ace G-Tech 5500mAh 4S1P 14.8V 60C HardCase RC c... | 54.90 € | **53.00 €** | 15.2 % | **11.2 %** | 53.50 € | stávame sa najlacnejší |
| Vibračný tester Uni-T UT311A | 259.90 € | **258.00 €** | 15.0 % | **14.2 %** | 258.39 € | stávame sa najlacnejší |
| HP 305 Combo 2-pack, 6ZD17AE | 29.50 € | **27.90 €** | 11.1 % | **5.1 %** | 23.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor PWM Epever LS2024B, 12/24V, 20A | 39.50 € | **37.90 €** | 10.5 % | **6.0 %** | 34.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **27.90 €** | 11.4 % | **5.4 %** | 25.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal DT2023F0 | 36.50 € | **34.90 €** | 10.0 % | **5.2 %** | 33.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjačka batérií GODOX VC18 | 19.50 € | **17.90 €** | 15.1 % | **5.7 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cabletech UCH0204 | 20.50 € | **18.90 €** | 15.7 % | **6.6 %** | 18.98 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **40.90 €** | 14.7 % | **10.4 %** | 41.00 € | stávame sa najlacnejší |
| Filtre Freewell Bright Day pre DJI Mini 4 Pro (6 bal... | 57.50 € | **55.90 €** | 15.0 % | **11.8 %** | 56.00 € | stávame sa najlacnejší |
| SONOFF MINIR4 (Extreme) spínač, balenie po 2 kusoch | 17.50 € | **15.90 €** | 16.5 % | **5.9 %** | 10.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0219 (13-32'' 10kg) černý | 16.50 € | **14.90 €** | 16.3 % | **5.1 %** | 13.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Teploměr digitální s vlhkoměrem EMOS E0558 | 12.50 € | **10.90 €** | 20.6 % | **5.1 %** | 9.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **8.30 €** | 44.2 % | **20.9 %** | 8.40 € | stávame sa najlacnejší |
| DOMO DO42102SV | 82.50 € | **80.90 €** | 11.2 % | **9.0 %** | 81.00 € | stávame sa najlacnejší |
| Kruger&Matz KM0818.1 internetové rádio s DAB+, Wi-Fi... | 65.00 € | **63.50 €** | 8.2 % | **5.7 %** | 57.57 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nordic walking hole NILS NW8613 | 49.50 € | **48.00 €** | 8.4 % | **5.1 %** | 44.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (čierne) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 4 (strieborné) | 23.00 € | **21.50 €** | 14.9 % | **7.4 %** | 18.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trekingové hole NILS TK8605 | 49.50 € | **48.00 €** | 8.4 % | **5.1 %** | 46.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjecí baterie GP ReCyko 2600 AA (HR6), 6kusů --CE... | 24.00 € | **22.50 €** | 12.5 % | **5.4 %** | 21.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Klávesnica Onikuma G55 (čierna) (QWERTY) | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 15.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sonda FNIRSI P4100 | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 16.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruhové svetlo GODOX LR30Bi | 21.00 € | **19.50 €** | 14.0 % | **5.8 %** | 19.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **16.50 €** | 15.0 % | **5.4 %** | 16.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Televizor Kruger&Matz KM0243FHD-V3 VIDAA 43" smart D... | 236.50 € | **235.00 €** | 8.2 % | **7.5 %** | 235.03 € | stávame sa najlacnejší |
| Zelmer ZCK7650 | 32.50 € | **31.00 €** | 10.7 % | **5.6 %** | 31.10 € | stávame sa najlacnejší |
| Meter hluku FNIRSI FDM01 | 22.00 € | **20.50 €** | 14.7 % | **6.9 %** | 20.63 € | stávame sa najlacnejší |
| Polarizačný filter Freewell CPL pre OSMO Action 6 | 17.50 € | **16.00 €** | 16.2 % | **6.3 %** | 16.13 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 24.50 € | **23.00 €** | 42.7 % | **33.9 %** | 23.15 € | stávame sa najlacnejší |
| Fontána/napájačka pre psa a mačku PetKit Eversweet S... | 35.50 € | **34.00 €** | 14.5 % | **9.6 %** | 34.19 € | stávame sa najlacnejší |
| Trekingové hole NILS TK8606 | 55.00 € | **53.50 €** | 8.0 % | **5.0 %** | 53.69 € | stávame sa najlacnejší |
| Batéria Jupio C 5000mAh (malé monočlánky) 2ks, dobíj... | 20.00 € | **18.50 €** | 17.7 % | **8.8 %** | 18.70 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 100Ah MHPower MS100-12(L) LC4-M8 | 250.50 € | **249.00 €** | 7.8 % | **7.1 %** | 249.23 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 24.50 € | **23.00 €** | 15.4 % | **8.3 %** | 23.29 € | stávame sa najlacnejší |
| Baterie olověná  12V / 20Ah XTREME bezúdržbový akumu... | 33.50 € | **32.00 €** | 11.6 % | **6.6 %** | 32.29 € | stávame sa najlacnejší |
| Magnetické filtre Freewell NEO 2 „Everyday“ – 3 ks. | 24.50 € | **23.00 €** | 15.5 % | **8.4 %** | 23.29 € | stávame sa najlacnejší |
| Odpojená indukčná varná doska IsEasy LI2V-15 | 90.00 € | **88.50 €** | 14.8 % | **12.9 %** | 88.89 € | stávame sa najlacnejší |
| BlitzWolf BW-VS4 100" projection screen. | 30.00 € | **28.50 €** | 14.8 % | **9.1 %** | 28.90 € | stávame sa najlacnejší |
| Činky REBEL ACTIVE RBA-2330-2 litinové neoprenové HE... | 14.00 € | **12.50 €** | 20.2 % | **7.3 %** | 12.90 € | stávame sa najlacnejší |
| UV filter Freewell pre DJI Mini 5 Pro | 18.50 € | **17.00 €** | 14.9 % | **5.6 %** | 17.42 € | stávame sa najlacnejší |
| USB Adaptér 6v1 Kruger&Matz KM0391.2  (HUB) typu C n... | 32.50 € | **31.00 €** | 16.7 % | **11.3 %** | 31.47 € | stávame sa najlacnejší |
| Solight LED mini panel CCT, prisazený, 24W, 1800lm, ... | 20.50 € | **19.00 €** | 41.8 % | **31.5 %** | 19.48 € | stávame sa najlacnejší |
| Inteligentný WiFi termostat Meross MTS200BHK(EU) (Ho... | 40.50 € | **39.00 €** | 14.8 % | **10.6 %** | 39.50 € | stávame sa najlacnejší |
| Filtračný vložka Black Glow Mist 1/4 Freewell pre Os... | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| Filtračný nástavec Black Glow Mist Freewell pre Osmo... | 19.50 € | **18.00 €** | 14.9 % | **6.0 %** | 18.50 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna na zníženie vplyvu sve... | 19.50 € | **18.00 €** | 15.0 % | **6.1 %** | 18.50 € | stávame sa najlacnejší |
| Filter Freewell Insta360 Luna Ultra Glow Mist 1/8 | 19.50 € | **18.00 €** | 15.0 % | **6.1 %** | 18.50 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell O... | 19.50 € | **18.00 €** | 14.9 % | **6.0 %** | 18.50 € | stávame sa najlacnejší |
| Filtračný systém Freewell UV Osmo Pocket 4P | 19.50 € | **18.00 €** | 14.9 % | **6.0 %** | 18.50 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND64 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell Insta360 Luna Ultra ND8 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| Filter ND Freewell Osmo Pocket 4P ND1000 | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND32 | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell Osmo Pocket 4P ND8 | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND1000 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND16 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell pre Insta360 Luna Ultra ND32 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| ND filter Freewell pre Osmo Pocket ND64 | 20.50 € | **19.00 €** | 14.1 % | **5.7 %** | 19.50 € | stávame sa najlacnejší |
| Filter Ultra Glow Mist Freewell pre Insta360 Luna 1/4 | 20.50 € | **19.00 €** | 14.2 % | **5.8 %** | 19.50 € | stávame sa najlacnejší |
| Freewell set of 4 ND/PL filters for DJI Osmo Action ... | 42.50 € | **41.00 €** | 15.0 % | **11.0 %** | 41.50 € | stávame sa najlacnejší |
| PXN PD HM spojkový pedál (Windows 7/8/10/11). | 31.50 € | **30.00 €** | 14.6 % | **9.2 %** | 30.50 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (black) | 44.50 € | **43.00 €** | 15.6 % | **11.7 %** | 43.50 € | stávame sa najlacnejší |
| Tréninkové háky REBEL RBA-2505 | 11.90 € | **10.50 €** | 20.5 % | **6.3 %** | 10.84 € | stávame sa najlacnejší |
| Trekingové hole NILS TK8604 | 60.90 € | **59.50 €** | 8.3 % | **5.9 %** | 49.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Zametač koberců REGULUS | 30.90 € | **29.50 €** | 10.6 % | **5.6 %** | 23.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný WiFi nástenný vypínač Sonoff M5 2C, siv... | 16.90 € | **15.50 €** | 16.0 % | **6.4 %** | 15.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO9195C | 32.90 € | **31.50 €** | 10.1 % | **5.4 %** | 31.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT200R | 17.90 € | **16.50 €** | 15.2 % | **6.2 %** | 16.45 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná WiFi zásuvka Sonoff WS01TPF-E (typ F) | 19.90 € | **18.50 €** | 15.4 % | **7.3 %** | 18.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nabíjačka batérií GODOX VC26 pre model V1 AD100PRO | 16.90 € | **15.50 €** | 14.7 % | **5.2 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stropné svietidlo PLAIN s PIR senzorom, ... | 19.90 € | **18.50 €** | 43.7 % | **33.6 %** | 18.67 € | stávame sa najlacnejší |
| Ariete SteamStyle 4301, violet | 32.90 € | **31.50 €** | 9.9 % | **5.3 %** | 31.90 € | stávame sa najlacnejší |
| Acer Nitro KG240YP0BI | 60.90 € | **59.50 €** | 10.5 % | **8.0 %** | 59.90 € | stávame sa najlacnejší |
| Rýchlovarná kanvica Hyundai VK690B černá | 37.00 € | **35.90 €** | 9.4 % | **6.2 %** | 32.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trekingové hole NILS TK8602 | 40.00 € | **38.90 €** | 8.5 % | **5.5 %** | 37.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filter Freewell ND/PL pre Insta360 Luna Ultra ND64/PL | 25.00 € | **23.90 €** | 13.9 % | **8.9 %** | 24.00 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač pre rolety SONOFF MINI-... | 19.00 € | **17.90 €** | 14.3 % | **7.6 %** | 18.00 € | stávame sa najlacnejší |
| Set of 4 filters ND8,16,32,64 Freewell for DJI Avata 2 | 42.00 € | **40.90 €** | 14.7 % | **11.7 %** | 41.00 € | stávame sa najlacnejší |
| Puzdro Freewell pre Iphone 15 PRO MAX so 17 mm držiakom | 46.00 € | **44.90 €** | 14.4 % | **11.7 %** | 45.00 € | stávame sa najlacnejší |
| Filament Anycubic TPU (čierny) 1 kg | 22.00 € | **20.90 €** | 14.2 % | **8.5 %** | 21.00 € | stávame sa najlacnejší |
| GameSir G7 HE wired controller (white) | 44.00 € | **42.90 €** | 14.7 % | **11.9 %** | 43.00 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (ružový) | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (žltý) | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (zelený) | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| Ovládač GameSir T4n Nova Lite (modrý) | 22.00 € | **20.90 €** | 14.7 % | **9.0 %** | 21.00 € | stávame sa najlacnejší |
| Prenosná tlačiareň štítkov Niimbot B21 Pro (biela) | 49.00 € | **47.90 €** | 15.0 % | **12.4 %** | 48.00 € | stávame sa najlacnejší |
| Bebird EarSight Plus otoskop s kamerou na čistenie u... | 36.00 € | **34.90 €** | 15.0 % | **11.5 %** | 35.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 100 LED, 10m, p... | 7.70 € | **6.60 €** | 54.6 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight LED reťaz s hviezdou na vianočný strom, výšk... | 17.00 € | **15.90 €** | 54.4 % | **44.4 %** | 15.96 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Honey Day 160 ml | 12.00 € | **10.90 €** | 23.0 % | **11.8 %** | 11.00 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Grey) | 15.00 € | **13.90 €** | 13.9 % | **5.5 %** | 14.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.80 € | **7.80 €** | 54.2 % | **36.7 %** | 7.90 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim | 29.50 € | **28.50 €** | 10.5 % | **6.7 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Čítačka pamäťových kariet Lexar LRW310X Dual USB-A/C... | 12.50 € | **11.50 €** | 15.9 % | **6.6 %** | 7.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ONIKUMA CW905 Pink 2.4G Wireless Gaming Mouse | 13.50 € | **12.50 €** | 16.5 % | **7.9 %** | 8.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nordic walking hole NILS NW8612 | 30.50 € | **29.50 €** | 8.6 % | **5.0 %** | 27.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-586 Color | 23.90 € | **22.90 €** | 10.7 % | **6.0 %** | 20.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Evolveo Xany 2C, aktivní pokojová anténa | 18.50 € | **17.50 €** | 11.2 % | **5.2 %** | 15.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CR-PETG Filament Creality (Red) | 11.50 € | **10.50 €** | 16.6 % | **6.4 %** | 8.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 64 GB | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 11.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínací modul ZigBee Avatto ZWSM16-W4 TUYA | 13.90 € | **12.90 €** | 15.4 % | **7.1 %** | 11.47 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Torras Ostand R Fusion Case for iPhone 16 Pro (Black) | 14.50 € | **13.50 €** | 14.5 % | **6.6 %** | 12.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Filament Anycubic PETG (sivý) 1 kg | 11.50 € | **10.50 €** | 15.1 % | **5.1 %** | 9.14 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stojan na slúchadlá ONIKUMA ST-2 čierny | 13.90 € | **12.90 €** | 15.1 % | **6.8 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer TX1800U Nano Adaptér | 20.90 € | **19.90 €** | 10.5 % | **5.2 %** | 19.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT113 | 11.50 € | **10.50 €** | 16.4 % | **6.3 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BEKO SIM3126R | 22.90 € | **21.90 €** | 10.7 % | **5.9 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 16.50 € | **15.50 €** | 14.8 % | **7.8 %** | 15.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smart Visual Ear-Clean Rod Bebird R1 black | 15.50 € | **14.50 €** | 14.6 % | **7.2 %** | 14.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Carlinkit HD2CP-PRO bezdrôtový adaptér Carplay&Android | 37.90 € | **36.90 €** | 15.1 % | **12.1 %** | 36.91 € | stávame sa najlacnejší |
| Zelmer ZJP3900 | 107.50 € | **106.50 €** | 10.4 % | **9.3 %** | 106.57 € | stávame sa najlacnejší |
| DDPAI N1 Dual Dash cam WiFi 1296p + Rear camera 1080p | 66.90 € | **65.90 €** | 14.1 % | **12.4 %** | 65.99 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Floco, ... | 43.50 € | **42.50 €** | 37.7 % | **34.5 %** | 42.59 € | stávame sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT127B | 28.90 € | **27.90 €** | 15.1 % | **11.1 %** | 27.99 € | stávame sa najlacnejší |
| Solight držiak DVB-T a internetové antény na stenu, ... | 8.90 € | **7.90 €** | 43.9 % | **27.7 %** | 7.99 € | stávame sa najlacnejší |
| Digitálny multimeter Habotest HT86B | 11.90 € | **10.90 €** | 16.4 % | **6.6 %** | 11.00 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (biely) | 69.90 € | **68.90 €** | 15.2 % | **13.6 %** | 69.00 € | stávame sa najlacnejší |
| Stabilizátor AOCHUAN X2 s AI senzorom (čierny) | 69.90 € | **68.90 €** | 14.9 % | **13.3 %** | 69.00 € | stávame sa najlacnejší |
| Puluz vodotesný fotografický batoh pre DJI Ronin-SC ... | 28.90 € | **27.90 €** | 15.1 % | **11.1 %** | 28.00 € | stávame sa najlacnejší |
| Magnetický veslařský trenažér HMS ZM1502 | 233.90 € | **232.90 €** | 42158.4 % | **41977.7 %** | 233.00 € | stávame sa najlacnejší |
| Veslařský trenažér HMS Premium ZW1600 | 671.90 € | **670.90 €** | 121291.1 % | **121110.5 %** | 671.00 € | stávame sa najlacnejší |
| Veslovací trenažér se vzduchovým odporem HMS ZP6591 | 369.90 € | **368.90 €** | 66729.3 % | **66548.6 %** | 369.00 € | stávame sa najlacnejší |
| Beko BMTD37146W | 383.90 € | **382.90 €** | 6.6 % | **6.3 %** | 383.00 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 36.00 € | **35.00 €** | 38.1 % | **34.3 %** | 35.13 € | stávame sa najlacnejší |
| Domo DO8719W | 70.50 € | **69.50 €** | 10.7 % | **9.1 %** | 69.67 € | stávame sa najlacnejší |
| Puzdro Freewell pre iPhone 16 Plus | 44.50 € | **43.50 €** | 14.6 % | **12.1 %** | 43.67 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 47.00 € | **46.00 €** | 14.7 % | **12.2 %** | 46.24 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 16.50 € | **15.50 €** | 15.0 % | **8.1 %** | 15.79 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Iron Oa... | 40.50 € | **39.50 €** | 26.7 % | **23.6 %** | 39.82 € | stávame sa najlacnejší |
| Inteligentná zásuvka MEROSS MSS315CFH-EU s monitorov... | 44.50 € | **43.50 €** | 15.4 % | **12.8 %** | 43.89 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 19.50 € | **18.50 €** | 21.6 % | **15.3 %** | 18.90 € | stávame sa najlacnejší |
| Inteligentný WiFi detektor dymu Meross GS559A (HomeKit) | 23.50 € | **22.50 €** | 14.1 % | **9.3 %** | 22.90 € | stávame sa najlacnejší |
| Brita Style ESS 2,4l, šedomodrá, PO | 21.50 € | **20.50 €** | 11.8 % | **6.6 %** | 20.90 € | stávame sa najlacnejší |
| Black&Decker BXDH12E | 167.50 € | **166.50 €** | 10.3 % | **9.7 %** | 166.90 € | stávame sa najlacnejší |
| Gaggia Classic E24 černá | 486.50 € | **485.50 €** | 10.0 % | **9.8 %** | 485.90 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 30 x 40 cm, 100 ks, hladké | 16.50 € | **15.50 €** | 18.0 % | **10.8 %** | 15.90 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 49dB | 25.00 € | **24.00 €** | 28.0 % | **22.9 %** | 24.40 € | stávame sa najlacnejší |
| Hyper PLA-CF Creality Filament (tmavozelený) | 19.50 € | **18.50 €** | 14.8 % | **8.9 %** | 18.90 € | stávame sa najlacnejší |
| Solight LED 3D drevená vianočná dekorácia v ráme, 12... | 11.00 € | **10.00 €** | 52.9 % | **39.0 %** | 10.43 € | stávame sa najlacnejší |
| TESLA TE-2800 PW venkovní anténa pro DVB-T2, 470-790... | 35.00 € | **34.00 €** | 19.0 % | **15.6 %** | 34.49 € | stávame sa najlacnejší |
| Filter Freewell CPL pre Insta360 Luna Ultra | 23.00 € | **22.00 €** | 13.9 % | **8.9 %** | 22.50 € | stávame sa najlacnejší |
| UV Filter Freewell for DJI Avata 2 | 17.00 € | **16.00 €** | 13.5 % | **6.8 %** | 16.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (mliečna biela) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadný) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná modrá) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| Filament Anycubic TPU (priehľadná zelená) 1 kg | 21.00 € | **20.00 €** | 14.3 % | **8.8 %** | 20.50 € | stávame sa najlacnejší |
| Webová kamera OBSBOT Meet SE (sivá) | 84.00 € | **83.00 €** | 14.9 % | **13.5 %** | 83.50 € | stávame sa najlacnejší |
| Pretekársky volant  PXN-V3 (PC / PS3 / PS4 / XBOX ON... | 59.00 € | **58.00 €** | 15.0 % | **13.1 %** | 58.50 € | stávame sa najlacnejší |
| Svetlomet Superfire HL06, 500lm, USB | 13.00 € | **12.00 €** | 15.3 % | **6.4 %** | 12.50 € | stávame sa najlacnejší |
| Telebjektív Freewell 1,7x pre smartfóny, bajonet 17 mm | 114.90 € | **114.00 €** | 15.0 % | **14.1 %** | 114.10 € | stávame sa najlacnejší |
| Profesionálny digitálny multimeter UNI-T UT191T | 67.90 € | **67.00 €** | 6.9 % | **5.4 %** | 67.19 € | stávame sa najlacnejší |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 69.90 € | **69.00 €** | 15.1 % | **13.6 %** | 69.28 € | stávame sa najlacnejší |
| Tester batérií Uni-T UT675A | 86.90 € | **86.00 €** | 15.0 % | **13.8 %** | 86.50 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-B60... | 79.90 € | **79.00 €** | 15.2 % | **13.9 %** | 79.50 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1FC 16,1" | 114.90 € | **114.00 €** | 10.4 % | **9.6 %** | 114.50 € | stávame sa najlacnejší |
| Filtre Freewell pre DJI Mini 4 Pro Mega Pack (16 kusov) | 112.90 € | **112.00 €** | 10.7 % | **9.8 %** | 112.50 € | stávame sa najlacnejší |
| SCANPART podložka pod pračku Tlmiaca | 13.90 € | **13.00 €** | 12.8 % | **5.5 %** | 9.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Merač teploty a vlhkosti Uni-T A13T | 10.90 € | **10.00 €** | 15.5 % | **6.0 %** | 9.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 8,4A, 100W, ... | 15.90 € | **15.00 €** | 56.1 % | **47.3 %** | 15.33 € | stávame sa najlacnejší |
| Smart Switch WiFi + RF 433 Sonoff T2 EU TX (3-channe... | 12.90 € | **12.00 €** | 15.3 % | **7.2 %** | 12.50 € | stávame sa najlacnejší |
| Baterie LiFePO4 12,8V 10Ah MHPower MS10-12(L) F2-6,3mm | 41.90 € | **41.00 €** | 7.5 % | **5.2 %** | 40.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ufesa Haku | 30.90 € | **30.00 €** | 11.3 % | **8.1 %** | 30.08 € | stávame sa najlacnejší |
| Eldonex EWS-1010-BK meteostanice | 38.90 € | **38.00 €** | 10.1 % | **7.5 %** | 38.20 € | stávame sa najlacnejší |
| Digitálny klešťový multimeter Uni-T UT203R | 53.90 € | **53.00 €** | 15.4 % | **13.5 %** | 53.29 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 12V, 5A, 60W, IP65 | 25.90 € | **25.00 €** | 54.3 % | **48.9 %** | 25.30 € | stávame sa najlacnejší |
| Filtr CPL Freewell do DJI Osmo Action 5 Pro | 17.90 € | **17.00 €** | 15.6 % | **9.8 %** | 17.35 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml - grafitovo modrý | 20.90 € | **20.00 €** | 19.1 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Termohrnček G21 FlowCup 1200 ml – levanduľový | 20.90 € | **20.00 €** | 19.1 % | **13.9 %** | 20.49 € | stávame sa najlacnejší |
| Battery Tester Ancel BA101 8-30V DC | 43.90 € | **43.00 €** | 15.3 % | **13.0 %** | 43.50 € | stávame sa najlacnejší |
| SONOFF M5-2C-86W WiFi Matter smart wall switch (2-ch... | 17.90 € | **17.00 €** | 15.2 % | **9.4 %** | 17.50 € | stávame sa najlacnejší |
| SONOFF M5-3C-86W WiFi Matter smart wall switch (3-ch... | 17.90 € | **17.00 €** | 15.4 % | **9.6 %** | 17.50 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov Wybot S2 Pro | 897.90 € | **897.00 €** | 14.1 % | **14.0 %** | 897.50 € | stávame sa najlacnejší |
| Pendrive Lexar JumpDrive M22 USB 2.0 64GB | 10.50 € | **9.70 €** | 13.8 % | **5.1 %** | 8.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight magnetický USB-C/Lightning kábel, USB-C kone... | 5.00 € | **4.20 €** | 56.3 % | **31.3 %** | 4.27 € | stávame sa najlacnejší |
| Solight anténny adaptér, s napájací výhybkou, 100mA | 5.30 € | **4.50 €** | 55.0 % | **31.6 %** | 4.60 € | stávame sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 302.50 € | **301.90 €** | 6.7 % | **6.4 %** | 302.00 € | stávame sa najlacnejší |
| Trekingové hole NILS TK8601 červené | 29.50 € | **28.90 €** | 7.7 % | **5.6 %** | 20.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trekingové hole NILS TK8601 modré | 29.50 € | **28.90 €** | 7.7 % | **5.6 %** | 20.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WA854RE Wireless N Extender | 17.50 € | **16.90 €** | 11.0 % | **7.2 %** | 13.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hrazda do dveří s počítadlem a vodováhou HMS DD500 | 23.50 € | **22.90 €** | 8.0 % | **5.2 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 10/100 5-Port Switch (DES-105) | 18.50 € | **17.90 €** | 8.6 % | **5.1 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvětlení s dálkový ovladačem Laskos, 48... | 23.50 € | **22.90 €** | 38.1 % | **34.6 %** | 22.93 € | stávame sa najlacnejší |
| Vákuovacia dóza G21 2 L, marinovacia | 23.50 € | **22.90 €** | 19.3 % | **16.2 %** | 22.99 € | stávame sa najlacnejší |
| Digitálny multimeter UNI-T UT118B | 27.50 € | **26.90 €** | 15.6 % | **13.1 %** | 27.00 € | stávame sa najlacnejší |
| Colmi P71 Smartwatch (Blue) | 18.50 € | **17.90 €** | 15.7 % | **11.9 %** | 18.00 € | stávame sa najlacnejší |
| Bezdrôtový mikrofón PULUZ PU647B | 24.50 € | **23.90 €** | 14.4 % | **11.6 %** | 24.00 € | stávame sa najlacnejší |
| Karta microSD Lexar 3.0 s kapacitou 64 GB | 18.50 € | **17.90 €** | 9.7 % | **6.1 %** | 18.00 € | stávame sa najlacnejší |
| Držiak na spätné zrkadlo PULUZ pre akčné kamery (vrá... | 24.50 € | **23.90 €** | 15.2 % | **12.4 %** | 24.00 € | stávame sa najlacnejší |
| Sada filtrov FREEWELL pre DJI Mavic 4 Pro Gradient (... | 45.50 € | **44.90 €** | 14.7 % | **13.2 %** | 45.00 € | stávame sa najlacnejší |
| Slúchadlá Buxton BHP 7300 BLACK BT | 22.50 € | **21.90 €** | 13.5 % | **10.5 %** | 22.00 € | stávame sa najlacnejší |
| CR-Silk PLA Filament Creallity (Silver) | 17.50 € | **16.90 €** | 14.7 % | **10.8 %** | 17.00 € | stávame sa najlacnejší |
| Superfire BM01 4-in-1 bicycle light | 19.50 € | **18.90 €** | 14.1 % | **10.5 %** | 19.00 € | stávame sa najlacnejší |
| Solight andel s LED osvetlením a časovačom, 37cm, 3xAA | 8.30 € | **7.70 €** | 55.1 % | **43.9 %** | 7.76 € | stávame sa najlacnejší |
| Electrolux EF167 | 14.50 € | **13.90 €** | 12.3 % | **7.6 %** | 12.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gymnastický míč HMS YB01N 75 cm modrý | 13.50 € | **12.90 €** | 10.1 % | **5.2 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Masážní gymnastický míč HMS YB03N 65 cm šedý | 13.50 € | **12.90 €** | 10.1 % | **5.2 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínací modul ZigBee Avatto LZWSM16-W3 ... | 11.50 € | **10.90 €** | 14.3 % | **8.3 %** | 10.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 15.50 € | **14.90 €** | 10.5 % | **6.3 %** | 14.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight digitálny časový spínač | 7.60 € | **7.00 €** | 51.4 % | **39.5 %** | 7.02 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom čierny lesk 200 ml | 14.50 € | **13.90 €** | 18.6 % | **13.7 %** | 13.99 € | stávame sa najlacnejší |
| Držiak so šnúrkou Sunnylife pre ovládač DJI RC (MM3-... | 15.50 € | **14.90 €** | 16.0 % | **11.5 %** | 15.00 € | stávame sa najlacnejší |
| AnyCubic ABS-Like Resin Pro 2 (Black) | 14.50 € | **13.90 €** | 16.1 % | **11.3 %** | 14.00 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S80... | 89.50 € | **88.90 €** | 14.8 % | **14.0 %** | 89.00 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM1000A | 131.50 € | **130.90 €** | 15.1 % | **14.6 %** | 131.00 € | stávame sa najlacnejší |
| Sada 5 magnetických filtrov Freewell série M2 II 82 mm | 124.50 € | **123.90 €** | 13.8 % | **13.3 %** | 124.00 € | stávame sa najlacnejší |
| Krüger&Matz HL-CP03 bezdrátový adaptér CarPlay - And... | 22.00 € | **21.50 €** | 8.9 % | **6.4 %** | 15.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar Dual Type-C a Type-A USB 3.1 32GB | 13.00 € | **12.50 €** | 12.9 % | **8.6 %** | 9.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický posilovač svalů ELECTRO BF | 19.00 € | **18.50 €** | 8.3 % | **5.5 %** | 15.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente IceQueen černá | 20.00 € | **19.50 €** | 10.4 % | **7.6 %** | 18.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pendrive Lexar JumpDrive M400 USB 3.0 64GB | 11.00 € | **10.50 €** | 13.3 % | **8.2 %** | 9.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed pouzdro XRedmi 15 FIXOP3-1618-BK | 12.00 € | **11.50 €** | 10.9 % | **6.2 %** | 10.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Softbox GODOX SB1520, univerzálny typ, 15x20 cm | 11.00 € | **10.50 €** | 12.8 % | **7.6 %** | 10.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada 2x LED sklenené sviečky, časovač, 7,5x1... | 8.50 € | **8.00 €** | 53.9 % | **44.9 %** | 8.01 € | stávame sa najlacnejší |
| Fixed Dokova stanice PS5 FIXPS5PS-MCS-BW | 40.00 € | **39.50 €** | 10.1 % | **8.7 %** | 39.52 € | stávame sa najlacnejší |
| Solight detektor oxidu uhoľnatého a horľavých plynov | 12.50 € | **12.00 €** | 13.4 % | **8.9 %** | 12.03 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 33.00 € | **32.50 €** | 15.1 % | **13.4 %** | 32.53 € | stávame sa najlacnejší |
| Maxxo LED800 antracit | 299.00 € | **298.50 €** | 5.9 % | **5.7 %** | 298.55 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 299.00 € | **298.50 €** | 5.9 % | **5.7 %** | 298.55 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 10.00 € | **9.50 €** | 40.9 % | **33.9 %** | 9.56 € | stávame sa najlacnejší |
| Solight drevený LED svietnik, 10x LED, 25cm, 2x AA | 10.00 € | **9.50 €** | 51.7 % | **44.1 %** | 9.56 € | stávame sa najlacnejší |
| Solight USB-C 20W fast charger | 5.90 € | **5.40 €** | 47.1 % | **34.7 %** | 5.46 € | stávame sa najlacnejší |
| Vysávač Niceboy ION Charles i4 - white | 162.00 € | **161.50 €** | 7.3 % | **6.9 %** | 161.57 € | stávame sa najlacnejší |
| Ufesa Steam Travel PV0500 | 23.50 € | **23.00 €** | 11.8 % | **9.4 %** | 23.08 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie so senzorom a nasta... | 18.50 € | **18.00 €** | 37.9 % | **34.1 %** | 18.09 € | stávame sa najlacnejší |
| Mascom Monoblok Twin MCM4T01HD Gold LNB 4,3st | 33.50 € | **33.00 €** | 20.1 % | **18.3 %** | 33.09 € | stávame sa najlacnejší |
| Girmi FM2100 Mikrovlnná trouba s grilem | 109.50 € | **109.00 €** | 10.4 % | **9.9 %** | 109.10 € | stávame sa najlacnejší |
| Solight LED smart stropné svetlo Wave, 30W, 2300lm, ... | 47.00 € | **46.50 €** | 35.9 % | **34.4 %** | 46.62 € | stávame sa najlacnejší |
| Solight LED COB pásik, sada s adaptérom, vypínač, 5m... | 18.00 € | **17.50 €** | 47.4 % | **43.3 %** | 17.63 € | stávame sa najlacnejší |
| Uperfect UGame J5 M173J15 17,3" 3840*2160 60Hz preno... | 301.00 € | **300.50 €** | 13.7 % | **13.5 %** | 300.65 € | stávame sa najlacnejší |
| Solight pracovná nabíjacia LED lampa, 500lm + 70lm, ... | 14.50 € | **14.00 €** | 54.3 % | **49.0 %** | 14.16 € | stávame sa najlacnejší |
| Solight ventilátor do kúpeľne | 10.50 € | **10.00 €** | 51.1 % | **43.9 %** | 10.17 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 279.00 € | **278.50 €** | 8.5 % | **8.3 %** | 278.67 € | stávame sa najlacnejší |
| Domo DO 264 AP | 59.00 € | **58.50 €** | 10.1 % | **9.1 %** | 58.67 € | stávame sa najlacnejší |
| Vaflovač TEESA TSA3224 | 26.50 € | **26.00 €** | 13.5 % | **11.4 %** | 26.19 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 rola 28 x 600 cm 2 ks | 12.50 € | **12.00 €** | 16.7 % | **12.0 %** | 12.19 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 66.50 € | **66.00 €** | 17.5 % | **16.6 %** | 66.19 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 1000 RB-4003 700W 12V | 110.00 € | **109.50 €** | 8.1 % | **7.6 %** | 109.69 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406 700W 12V | 116.50 € | **116.00 €** | 6.5 % | **6.0 %** | 116.19 € | stávame sa najlacnejší |
| Solight LED kúpeľňové osvetlenie nad zrkadlo 3v1, 7W... | 19.50 € | **19.00 €** | 36.9 % | **33.4 %** | 19.20 € | stávame sa najlacnejší |
| Leifheit Rotaro PowerVac 2v1 16V | 113.50 € | **113.00 €** | 9.1 % | **8.6 %** | 113.22 € | stávame sa najlacnejší |
| Meross MSP844(EU) inteligentný rýchlonabíjací napája... | 46.50 € | **46.00 €** | 15.5 % | **14.3 %** | 46.24 € | stávame sa najlacnejší |
| Súprava príslušenstva Puluz pre športové kamery PKT3... | 20.50 € | **20.00 €** | 10.7 % | **8.0 %** | 20.25 € | stávame sa najlacnejší |
| Solight cestovná nabíjačka 3v1, MagSafe kompatibilná | 34.50 € | **34.00 €** | 82.3 % | **79.6 %** | 34.26 € | stávame sa najlacnejší |
| Solight LED nábytkové osvetlenie, 2,5 W, 200lm, nabí... | 12.50 € | **12.00 €** | 53.5 % | **47.4 %** | 12.27 € | stávame sa najlacnejší |
| Športové slnečné okuliare Colmi V06 AI v oranžovej f... | 69.50 € | **69.00 €** | 14.8 % | **14.0 %** | 69.28 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 26.00 € | **25.50 €** | 7.8 % | **5.8 %** | 25.79 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 27.50 € | **27.00 €** | 14.1 % | **12.0 %** | 27.29 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 34.00 € | **33.50 €** | 11.9 % | **10.3 %** | 33.79 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 31.50 € | **31.00 €** | 10.9 % | **9.1 %** | 31.29 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 30.00 € | **29.50 €** | 7.5 % | **5.7 %** | 29.79 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7400 | 31.50 € | **31.00 €** | 8.9 % | **7.2 %** | 31.29 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7160 | 22.00 € | **21.50 €** | 8.3 % | **5.9 %** | 21.79 € | stávame sa najlacnejší |
| Ručný multimeter do auta UNI-T UT107 | 28.00 € | **27.50 €** | 14.3 % | **12.2 %** | 27.79 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 38.00 € | **37.50 €** | 7.3 % | **5.9 %** | 37.79 € | stávame sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.00 € | **15.50 €** | 9.3 % | **5.9 %** | 15.79 € | stávame sa najlacnejší |
| Konektor MC4 pro solární panely, rozbočení 4 panely,... | 15.50 € | **15.00 €** | 17.8 % | **14.0 %** | 15.29 € | stávame sa najlacnejší |
| BWT VIDA MEI černá, 2,6l + 3x filtr | 16.50 € | **16.00 €** | 11.3 % | **8.0 %** | 16.29 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 18.50 € | **18.00 €** | 11.1 % | **8.1 %** | 18.29 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 15T / GARNI AH 15T | 48.00 € | **47.50 €** | 13.8 % | **12.6 %** | 47.79 € | stávame sa najlacnejší |
| Sada náhradních filtrů GARNI AC 45T / GARNI AH 45T | 63.00 € | **62.50 €** | 14.3 % | **13.3 %** | 62.79 € | stávame sa najlacnejší |
| Ufesa Easy Chop | 33.50 € | **33.00 €** | 9.8 % | **8.1 %** | 33.29 € | stávame sa najlacnejší |
| EMS posilovač svalů HMS ABS Master PRO Multiset | 47.50 € | **47.00 €** | 8.2 % | **7.0 %** | 47.29 € | stávame sa najlacnejší |
| AMIKO diaľkové ovládanie Univerzálny, HD - SD | 14.50 € | **14.00 €** | 26.8 % | **22.4 %** | 14.29 € | stávame sa najlacnejší |
| Barkan 4400 polohovací držák pro TV 32"-80" | 83.50 € | **83.00 €** | 17.9 % | **17.2 %** | 83.29 € | stávame sa najlacnejší |
| Svetelný merač UNI-T UT383 | 17.00 € | **16.50 €** | 14.5 % | **11.1 %** | 16.79 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 48.00 € | **47.50 €** | 6.5 % | **5.4 %** | 47.79 € | stávame sa najlacnejší |
| CP-UNC-C30L1-VMW 3.0Mpix vnitřní IP kamera s IR přís... | 77.50 € | **77.00 €** | 18.6 % | **17.8 %** | 77.29 € | stávame sa najlacnejší |
| AB-COM LNB AB 01 M Quattro | 11.50 € | **11.00 €** | 13.6 % | **8.7 %** | 11.29 € | stávame sa najlacnejší |
| INVERTO Ultra - Twin HGLN 40 mm - 0,2 dB | 21.50 € | **21.00 €** | 13.0 % | **10.4 %** | 21.29 € | stávame sa najlacnejší |
| Mascom Monoblok LNB MC M4-S01 UHD | 12.50 € | **12.00 €** | 17.1 % | **12.4 %** | 12.29 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 64.50 € | **64.00 €** | 6.2 % | **5.4 %** | 64.29 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SER-2000 URZ3413 s opožděn... | 60.50 € | **60.00 €** | 21.3 % | **20.3 %** | 60.29 € | stávame sa najlacnejší |
| Držiak na bicykel Sunnylife pre ovládač DJI RC 2 (ZJ... | 16.50 € | **16.00 €** | 15.9 % | **12.4 %** | 16.29 € | stávame sa najlacnejší |
| GARNI GAR 175 USB datalogger pro měření teploty a re... | 85.00 € | **84.50 €** | 15.0 % | **14.3 %** | 84.79 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.00 € | **21.50 €** | 11.0 % | **8.4 %** | 21.79 € | stávame sa najlacnejší |
| Octagon SFX6018 S2 IP HD | 74.50 € | **74.00 €** | 7.6 % | **6.9 %** | 74.29 € | stávame sa najlacnejší |
| MASCOM MC720T2 HD DVB-T2 H.265/HEVC | 27.50 € | **27.00 €** | 12.4 % | **10.3 %** | 27.29 € | stávame sa najlacnejší |
| MASCOM MC820T2 HD DVB-T2 H.265/HEVC | 37.00 € | **36.50 €** | 20.3 % | **18.7 %** | 36.79 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 137.50 € | **137.00 €** | 15.1 % | **14.6 %** | 137.29 € | stávame sa najlacnejší |
| Zdroj Alcad AL-100 (2xvýstup, 24V/100mA) napájecí | 18.50 € | **18.00 €** | 10.4 % | **7.4 %** | 18.29 € | stávame sa najlacnejší |
| FAGOR AD 620 D2 5G/LTE700 zesilovač / VHF / UHF | 25.50 € | **25.00 €** | 10.5 % | **8.3 %** | 25.29 € | stávame sa najlacnejší |
| Ivo DVBR-03 aktivní rozbočovač 4x výstup"F" 5dB zisk | 28.50 € | **28.00 €** | 29.2 % | **27.0 %** | 28.29 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 58.50 € | **58.00 €** | 6.6 % | **5.7 %** | 58.29 € | stávame sa najlacnejší |
| Sada pálek a míčků pro stolní tenis REBEL ACTIVE RBA... | 12.50 € | **12.00 €** | 24.1 % | **19.1 %** | 12.29 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 53.00 € | **52.50 €** | 8.0 % | **7.0 %** | 52.79 € | stávame sa najlacnejší |
| Kruger&Matz KM0127 brašna na rám kola | 12.00 € | **11.50 €** | 10.2 % | **5.6 %** | 11.79 € | stávame sa najlacnejší |
| Domo DO223S | 64.50 € | **64.00 €** | 13.0 % | **12.2 %** | 64.30 € | stávame sa najlacnejší |
| YAMAHA True X Speaker 1A / WS-X1A BLACK | 150.50 € | **150.00 €** | 8.3 % | **8.0 %** | 150.30 € | stávame sa najlacnejší |
| Philips TAR4600 Rádiobudík | 65.50 € | **65.00 €** | 8.3 % | **7.5 %** | 65.30 € | stávame sa najlacnejší |
| Herné slúchadlá QCY Heroad VNT200 (čierne) | 27.00 € | **26.50 €** | 15.0 % | **12.9 %** | 26.80 € | stávame sa najlacnejší |
| Múdra zásuvka TP-Link Tapo P410M vonkajšia, reguláci... | 22.50 € | **22.00 €** | 9.3 % | **6.9 %** | 22.30 € | stávame sa najlacnejší |
| G3Ferrari G1015502 Mikrovlnná trouba | 118.50 € | **118.00 €** | 10.5 % | **10.0 %** | 118.30 € | stávame sa najlacnejší |
| Candy CIP 3E7L0W Rapido | 294.50 € | **294.00 €** | 8.1 % | **8.0 %** | 294.30 € | stávame sa najlacnejší |
| WHIRLPOOL WI 7020 P | 331.50 € | **331.00 €** | 8.1 % | **8.0 %** | 331.30 € | stávame sa najlacnejší |
| Solight LED stropné osvetlenie prisadené kulaté, 48W... | 39.00 € | **38.50 €** | 35.4 % | **33.7 %** | 38.81 € | stávame sa najlacnejší |
| Solight vonkajšia anténa, DVB-T2, 35dB | 19.50 € | **19.00 €** | 43.3 % | **39.7 %** | 19.31 € | stávame sa najlacnejší |
| Leifheit Telegant 72 Protect | 27.50 € | **27.00 €** | 7.2 % | **5.2 %** | 27.33 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.50 € | **17.00 €** | 31.5 % | **27.7 %** | 17.34 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie Siena, biele, 20W, ... | 12.50 € | **12.00 €** | 36.4 % | **31.0 %** | 12.35 € | stávame sa najlacnejší |
| Paddleboard Jbay Zone J2 Comet 320x81x15, 145 Kg, Th... | 322.50 € | **322.00 €** | 6.5 % | **6.3 %** | 322.36 € | stávame sa najlacnejší |
| Guzzanti GZ 210G | 453.50 € | **453.00 €** | 5.1 % | **5.0 %** | 453.36 € | stávame sa najlacnejší |
| Venta Organic fragrance Peppermint | 16.50 € | **16.00 €** | 10.6 % | **7.2 %** | 16.38 € | stávame sa najlacnejší |
| YAMAHA True X Bar 50A / SR-X50A BLACK | 708.50 € | **708.00 €** | 9.3 % | **9.2 %** | 708.38 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Bloom šedé drevo 200 ml | 13.50 € | **13.00 €** | 10.4 % | **6.3 %** | 13.39 € | stávame sa najlacnejší |
| G21 nůž Damascus Premium 13 cm | 42.50 € | **42.00 €** | 8.6 % | **7.3 %** | 42.39 € | stávame sa najlacnejší |
| Matrace nafukovací AVENLI 24175EU 191x99x30 cm s ele... | 27.00 € | **26.50 €** | 13.4 % | **11.3 %** | 26.89 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.50 € | **48.00 €** | 10.5 % | **9.3 %** | 48.39 € | stávame sa najlacnejší |
| Tefal CY851130 | 197.50 € | **197.00 €** | 10.1 % | **9.8 %** | 197.39 € | stávame sa najlacnejší |
| DOMO DO42329PC | 114.50 € | **114.00 €** | 7.1 % | **6.6 %** | 114.39 € | stávame sa najlacnejší |
| Solight digitálny kapesny kompresor mini | 39.50 € | **39.00 €** | 19.8 % | **18.3 %** | 39.39 € | stávame sa najlacnejší |
| Uni-T UT362H Anemometer | 170.00 € | **169.50 €** | 14.9 % | **14.5 %** | 169.89 € | stávame sa najlacnejší |
| Solární regulátor MPPT ECO SOLAR BOOST EVO MPPT-4000... | 322.50 € | **322.00 €** | 10.0 % | **9.8 %** | 322.39 € | stávame sa najlacnejší |
| Ariete ART 808/05 | 59.50 € | **59.00 €** | 7.8 % | **6.9 %** | 59.39 € | stávame sa najlacnejší |
| Ariete Pizzeria 927/01, černá | 205.50 € | **205.00 €** | 7.6 % | **7.3 %** | 205.39 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 139.00 € | **138.50 €** | 7.6 % | **7.2 %** | 138.89 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3241-B SUPREME FUN 1200W | 57.00 € | **56.50 €** | 18.5 % | **17.5 %** | 56.89 € | stávame sa najlacnejší |
| Sendvičovač TEESA TSA3221  3v1 | 26.00 € | **25.50 €** | 15.1 % | **12.9 %** | 25.89 € | stávame sa najlacnejší |
| DOMO DO42602S | 39.50 € | **39.00 €** | 8.2 % | **6.8 %** | 39.39 € | stávame sa najlacnejší |
| Vákuovačka G21 Onyx | 57.50 € | **57.00 €** | 15.4 % | **14.4 %** | 57.39 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.50 € | **19.00 €** | 12.5 % | **9.6 %** | 19.39 € | stávame sa najlacnejší |
| Leifheit Stěrka na okna XL 2v1 (40 cm) s | 16.50 € | **16.00 €** | 10.5 % | **7.2 %** | 16.39 € | stávame sa najlacnejší |
| Kamerový set Kruger&Matz KM2240 Connect C200 Tuya Wi-Fi | 167.00 € | **166.50 €** | 13.3 % | **12.9 %** | 166.89 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 277.00 € | **276.50 €** | 6.8 % | **6.6 %** | 276.89 € | stávame sa najlacnejší |
| HP ENVY 6520e AiO (714N9B) | 102.50 € | **102.00 €** | 9.7 % | **9.2 %** | 102.39 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0838 SOS FM/ AM, powerbanka 10... | 44.00 € | **43.50 €** | 11.4 % | **10.1 %** | 43.89 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3411 1600W 12V nástěnný | 238.00 € | **237.50 €** | 7.8 % | **7.6 %** | 237.89 € | stávame sa najlacnejší |
| Stabilizátor napětí KEMOT SHB-3000 URZ3415 s opožděn... | 134.50 € | **134.00 €** | 8.0 % | **7.6 %** | 134.39 € | stávame sa najlacnejší |
| Zdroj záložní REBEL POWER 800 LFP4 RB-4027 500W 12V | 94.00 € | **93.50 €** | 12.2 % | **11.6 %** | 93.89 € | stávame sa najlacnejší |
| Johansson 6711 Revolution programovatelný zesilovač | 204.50 € | **204.00 €** | 7.6 % | **7.3 %** | 204.39 € | stávame sa najlacnejší |
| Johansson 6714 Profino Revolution Lite programovatel... | 190.50 € | **190.00 €** | 7.7 % | **7.4 %** | 190.39 € | stávame sa najlacnejší |
| DOMO DO91135F | 326.50 € | **326.00 €** | 9.7 % | **9.5 %** | 326.39 € | stávame sa najlacnejší |
| Whirlpool C WD 94M WBS CZ | 674.50 € | **674.00 €** | 9.1 % | **9.0 %** | 674.39 € | stávame sa najlacnejší |
| Whirlpool WP B9X WBS EE | 703.50 € | **703.00 €** | 9.9 % | **9.8 %** | 703.39 € | stávame sa najlacnejší |
| Vákuovacie fólie G21 sáčky 40 x 50 cm, 50 ks, hladké | 12.00 € | **11.50 €** | 16.4 % | **11.6 %** | 11.90 € | stávame sa najlacnejší |
| Domo DO 221 SV | 121.50 € | **121.00 €** | 10.0 % | **9.5 %** | 121.40 € | stávame sa najlacnejší |
| D-LINK WiFi AX1500 Range Extender (E15) | 41.50 € | **41.00 €** | 8.3 % | **7.0 %** | 41.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring Black velikost 8 | 40.50 € | **40.00 €** | 8.2 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 8 | 40.50 € | **40.00 €** | 8.2 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| CUBE1 Smart Ring White velikost 9 | 40.50 € | **40.00 €** | 8.2 % | **6.8 %** | 40.40 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C202 IP, 2MPx FHD, WiFi, prísvit | 36.00 € | **35.50 €** | 32.0 % | **30.1 %** | 35.90 € | stávame sa najlacnejší |
| Slúchadlá QCY H3 Pro (biele) | 41.00 € | **40.50 €** | 8.2 % | **6.8 %** | 40.90 € | stávame sa najlacnejší |
| Candy CFT610/5X/1 | 49.50 € | **49.00 €** | 10.1 % | **9.0 %** | 49.40 € | stávame sa najlacnejší |
| Concept IDV5160wh | 354.50 € | **354.00 €** | 7.0 % | **6.9 %** | 354.40 € | stávame sa najlacnejší |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 182.50 € | **182.00 €** | 10.8 % | **10.5 %** | 182.41 € | stávame sa najlacnejší |
| Rixon Soundplates | 42.50 € | **42.00 €** | 9.5 % | **8.2 %** | 42.41 € | stávame sa najlacnejší |
| FoodSaver FFC025X | 26.50 € | **26.00 €** | 11.8 % | **9.7 %** | 26.46 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Classic Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| Samolepiace hodiny G21 Eccentric Style | 12.50 € | **12.00 €** | 17.8 % | **13.0 %** | 12.46 € | stávame sa najlacnejší |
| Samsung The Frame QE43LS03H | 781.50 € | **781.00 €** | 8.6 % | **8.6 %** | 781.47 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, zelená s rukoväťou | 18.50 € | **18.00 €** | 15.1 % | **12.0 %** | 18.48 € | stávame sa najlacnejší |
| Ardes 449TI | 16.50 € | **16.00 €** | 10.6 % | **7.2 %** | 16.49 € | stávame sa najlacnejší |
| DOMO DO436BL | 36.50 € | **36.00 €** | 10.5 % | **9.0 %** | 36.49 € | stávame sa najlacnejší |
| DOMO DO754K | 36.50 € | **36.00 €** | 10.0 % | **8.5 %** | 36.49 € | stávame sa najlacnejší |
| Rowenta RR8589CE | 398.50 € | **398.00 €** | 6.1 % | **6.0 %** | 398.49 € | stávame sa najlacnejší |
| Domo DO7059S | 36.50 € | **36.00 €** | 10.0 % | **8.5 %** | 36.49 € | stávame sa najlacnejší |
| Solight nabíjačka USB-C, 90W, PD fast charger | 15.50 € | **15.00 €** | 33.9 % | **29.6 %** | 15.49 € | stávame sa najlacnejší |
| CP-UNC-TA21L3C-L 2.0 Mpix venkovní IP kamera s duáln... | 93.50 € | **93.00 €** | 17.6 % | **17.0 %** | 93.49 € | stávame sa najlacnejší |
| Kamera TP-Link Tapo C200C IP, 2MPx FHD, WiFi, prísvit | 23.50 € | **23.00 €** | 9.6 % | **7.3 %** | 23.49 € | stávame sa najlacnejší |
| Herné slúchadlá QCY Heroad VN200 (čierne a červené) | 22.50 € | **22.00 €** | 14.3 % | **11.8 %** | 22.49 € | stávame sa najlacnejší |
| Klimatizace GETI GKH18K hybridní 5kW | 1292.90 € | **1292.50 €** | 7.3 % | **7.2 %** | 1292.79 € | stávame sa najlacnejší |
| YAMAHA XDA-AMP5400RK | 1381.90 € | **1381.50 €** | 9.3 % | **9.3 %** | 1381.89 € | stávame sa najlacnejší |
| Multifunkční tréninková hrazda REBEL ACTIVE RBA-2404 | 107.90 € | **107.50 €** | 15.2 % | **14.8 %** | 107.54 € | stávame sa najlacnejší |
| Ariete Gran Gelato 4in1 644 | 172.90 € | **172.50 €** | 10.0 % | **9.8 %** | 172.58 € | stávame sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 66.90 € | **66.50 €** | 7.5 % | **6.8 %** | 66.69 € | stávame sa najlacnejší |
| CrockPot CSC062X | 156.90 € | **156.50 €** | 6.4 % | **6.1 %** | 156.70 € | stávame sa najlacnejší |
| Paddleboard Jbay Zone H1 Kame 297x76x15, 120 Kg, All... | 221.90 € | **221.50 €** | 5.4 % | **5.3 %** | 221.74 € | stávame sa najlacnejší |
| Paddleboard Jbay Zone H3 Kame 297x81x10, 99 Kg, All ... | 221.90 € | **221.50 €** | 5.4 % | **5.3 %** | 221.74 € | stávame sa najlacnejší |
| DOMO DO9286IB | 247.90 € | **247.50 €** | 5.8 % | **5.6 %** | 247.79 € | stávame sa najlacnejší |
| Maxxo Chamber Line 30 | 175.90 € | **175.50 €** | 7.8 % | **7.6 %** | 175.80 € | stávame sa najlacnejší |
| YAMAHA NS-AW392 WHITE 1 karton | 204.90 € | **204.50 €** | 9.3 % | **9.1 %** | 204.81 € | stávame sa najlacnejší |
| Nordic walking hole NILS NW602 EXTREME | 15.90 € | **15.50 €** | 7.9 % | **5.2 %** | 12.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Trekingové hole NILS TK696 EXTREME | 15.90 € | **15.50 €** | 7.9 % | **5.2 %** | 12.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nordic walking hole NILS EXTREME NW607 modré | 15.90 € | **15.50 €** | 7.9 % | **5.2 %** | 13.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nordic walking hole NILS NW608 EXTREME | 15.90 € | **15.50 €** | 7.9 % | **5.2 %** | 14.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nordic walking hole NILS NW603 EXTREME | 15.90 € | **15.50 €** | 7.9 % | **5.2 %** | 14.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slúchadlá QCY Crossky C10 (biele) | 12.90 € | **12.50 €** | 11.2 % | **7.8 %** | 12.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  4,0Ah XTREME bezúdržbový aku... | 10.90 € | **10.50 €** | 12.6 % | **8.5 %** | 10.57 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 9.50 € | **9.10 €** | 29.8 % | **24.3 %** | 9.20 € | stávame sa najlacnejší |
| Solight LED napájací zdroj, 230V - 24V, 4,17A, 100W,... | 10.90 € | **10.50 €** | 54.4 % | **48.7 %** | 10.63 € | stávame sa najlacnejší |
| Tefal J1641474 | 11.90 € | **11.50 €** | 9.0 % | **5.3 %** | 11.69 € | stávame sa najlacnejší |
| HP Wireless Mouse 220 Black | 13.90 € | **13.50 €** | 13.8 % | **10.5 %** | 13.71 € | stávame sa najlacnejší |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 10.90 € | **10.50 €** | 45.5 % | **40.2 %** | 10.86 € | stávame sa najlacnejší |
| Solight prepojovací konektor pre RGB LED pásy, zacva... | 1.30 € | **0.90 €** | 60.1 % | **10.9 %** | 0.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CrockPot SCV400RD | 52.90 € | **52.50 €** | 10.8 % | **10.0 %** | 52.54 € | stávame sa najlacnejší |
| Plastikowe wodoodporne etui Puluz na iPhone 15 Plus/... | 34.90 € | **34.50 €** | 15.3 % | **14.0 %** | 34.54 € | stávame sa najlacnejší |
| Príslušenstvo TP-Link Tapo RVA410 Vodotesná podložka... | 16.90 € | **16.50 €** | 10.4 % | **7.7 %** | 16.58 € | stávame sa najlacnejší |
| Solight stolná lampa Falun, E27, biela | 26.90 € | **26.50 €** | 20.9 % | **19.1 %** | 26.60 € | stávame sa najlacnejší |
| BWT náhradní vodní filtr 3+1ks REFILL | 16.90 € | **16.50 €** | 11.5 % | **8.9 %** | 16.63 € | stávame sa najlacnejší |
| Domo DO733K | 47.90 € | **47.50 €** | 10.8 % | **9.9 %** | 47.63 € | stávame sa najlacnejší |
| Ufesa GlidePro PV2600 | 26.90 € | **26.50 €** | 10.1 % | **8.5 %** | 26.63 € | stávame sa najlacnejší |
| Russell Hobbs 26800-56/RH | 25.90 € | **25.50 €** | 6.9 % | **5.2 %** | 25.66 € | stávame sa najlacnejší |
| Beper BEP-P206RAF200 | 29.90 € | **29.50 €** | 11.0 % | **9.5 %** | 29.67 € | stávame sa najlacnejší |
| Russell Hobbs 26481-56 | 18.90 € | **18.50 €** | 11.2 % | **8.8 %** | 18.67 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan šedý lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.69 € | stávame sa najlacnejší |
| Hodiny TechnoLine WT 3100 do koupelny | 23.90 € | **23.50 €** | 13.4 % | **11.5 %** | 23.69 € | stávame sa najlacnejší |
| Termoska G21 na pitie, 1000 ml, šedá s rukoväťou | 18.90 € | **18.50 €** | 17.6 % | **15.1 %** | 18.69 € | stávame sa najlacnejší |
| Evolveo Motion D1, ovladač s klávesnicí | 33.90 € | **33.50 €** | 7.7 % | **6.5 %** | 33.69 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 52.90 € | **52.50 €** | 6.5 % | **5.7 %** | 52.69 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-797 5G | 20.90 € | **20.50 €** | 18.6 % | **16.3 %** | 20.69 € | stávame sa najlacnejší |
| Tefal DN853BE0 | 52.90 € | **52.50 €** | 6.5 % | **5.7 %** | 52.70 € | stávame sa najlacnejší |
| Philips SQM3642/00 TV držák na zeď | 20.90 € | **20.50 €** | 9.9 % | **7.8 %** | 20.70 € | stávame sa najlacnejší |
| Aróma difuzér Sixtol Vulcan biely lesk 350 ml | 18.90 € | **18.50 €** | 15.0 % | **12.6 %** | 18.75 € | stávame sa najlacnejší |
| Čítačka kariet TP-Link UA440C USB3.0 Typ C, microSD/... | 17.90 € | **17.50 €** | 13.3 % | **10.7 %** | 17.75 € | stávame sa najlacnejší |
| Leifheit Classic Siena 180 Easy | 26.90 € | **26.50 €** | 11.2 % | **9.5 %** | 26.79 € | stávame sa najlacnejší |
| Vakuová svářečka fólií TEESA V100 | 23.90 € | **23.50 €** | 14.8 % | **12.9 %** | 23.79 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 20.90 € | **20.50 €** | 18.1 % | **15.8 %** | 20.80 € | stávame sa najlacnejší |
| Redmi Buds 8 Lite Black | 19.90 € | **19.50 €** | 8.9 % | **6.8 %** | 19.80 € | stávame sa najlacnejší |
| FIXED HUB Quadri FIXHU-QR-BK | 35.90 € | **35.50 €** | 7.1 % | **6.0 %** | 35.86 € | stávame sa najlacnejší |
| Domo DO9215AV | 32.90 € | **32.50 €** | 10.3 % | **9.0 %** | 32.88 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 12.7 % | **10.2 %** | 17.88 € | stávame sa najlacnejší |
| Mio Smartbox IV | 30.90 € | **30.50 €** | 7.8 % | **6.4 %** | 30.89 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-424 5G | 20.90 € | **20.50 €** | 18.6 % | **16.3 %** | 20.89 € | stávame sa najlacnejší |
| Anténní zesilovač EVERCON AM-949 5G | 20.90 € | **20.50 €** | 18.6 % | **16.3 %** | 20.89 € | stávame sa najlacnejší |
| Whirlpool W7F HP33 A | 338.90 € | **338.50 €** | 7.1 % | **7.0 %** | 338.78 € | stávame sa najlacnejší |
| Whirlpool NoFrost WHK 22414 XBR8EA | 877.90 € | **877.50 €** | 9.9 % | **9.9 %** | 877.79 € | stávame sa najlacnejší |
| Whirlpool C WD 84M WBS CZ | 637.90 € | **637.50 €** | 6.3 % | **6.3 %** | 637.79 € | stávame sa najlacnejší |
| Gorenje NRK620AAXL4 | 616.90 € | **616.50 €** | 6.0 % | **5.9 %** | 616.80 € | stávame sa najlacnejší |
| Rooma Espresso A6 bílá | 465.90 € | **465.50 €** | 6.1 % | **6.0 %** | 465.82 € | stávame sa najlacnejší |
| Beko EnergySpin BM3WFU3721WBW | 324.90 € | **324.50 €** | 7.1 % | **6.9 %** | 324.84 € | stávame sa najlacnejší |
| Gorenje NRK6192AXL4 | 365.90 € | **365.50 €** | 9.3 % | **9.2 %** | 365.87 € | stávame sa najlacnejší |
| GORENJE GV520E15 | 286.90 € | **286.50 €** | 6.2 % | **6.0 %** | 286.87 € | stávame sa najlacnejší |
| Whirlpool FFB 8469 BV EE | 344.90 € | **344.50 €** | 6.7 % | **6.6 %** | 344.89 € | stávame sa najlacnejší |
| Solight LED nabíjacia lampička Lucca, 120lm, zmena C... | 9.80 € | **9.50 €** | 38.1 % | **33.9 %** | 9.56 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.00 € | **9.70 €** | 8.5 % | **5.3 %** | 9.79 € | stávame sa najlacnejší |
| Solight flexo šnúra, 2m, 2 x 0,75mm2, čierna, plochá... | 2.60 € | **2.30 €** | 32.9 % | **17.6 %** | 2.35 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, 1x USB, 2400mA, AC 230... | 4.80 € | **4.50 €** | 45.1 % | **36.0 %** | 4.53 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1,5mm2, gumová, čierna, 5m | 9.40 € | **9.20 €** | 13.2 % | **10.8 %** | 9.29 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo T5, vypínač, 4W, 400... | 8.00 € | **7.80 €** | 38.1 % | **34.6 %** | 7.81 € | stávame sa najlacnejší |
| Solight LED svetelný zdroj do stropných svetiel, 24W... | 6.00 € | **5.80 €** | 48.3 % | **43.3 %** | 5.85 € | stávame sa najlacnejší |
| Solight LED svetelný zdroj do stropných svetiel, 12W... | 4.00 € | **3.80 €** | 49.2 % | **41.7 %** | 3.87 € | stávame sa najlacnejší |
| Solight LED svetielka s diaľkovým ovládaním, 3x 50lm... | 7.20 € | **7.00 €** | 23.0 % | **19.6 %** | 7.09 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 50 LED, 50m, pr... | 5.70 € | **5.50 €** | 41.3 % | **36.3 %** | 5.59 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo, 120lm, Li-... | 2.60 € | **2.40 €** | 56.6 % | **44.5 %** | 2.49 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely, vypínač | 3.60 € | **3.40 €** | 52.4 % | **44.0 %** | 3.50 € | stávame sa najlacnejší |
| Solight napájací kábel pre lineárne osvetlenie, dĺžk... | 2.40 € | **2.20 €** | 57.4 % | **44.2 %** | 2.29 € | stávame sa najlacnejší |
| Solight LED solárne nástenné svetlo, teplá a studená... | 7.10 € | **6.90 €** | 16.4 % | **13.1 %** | 6.99 € | stávame sa najlacnejší |
| Russell Hobbs 23840-70 | 18.00 € | **17.90 €** | 7.0 % | **6.4 %** | 17.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nástenná lampička CELE, 1x GU10, čierna | 9.80 € | **9.70 €** | 36.0 % | **34.6 %** | 9.71 € | stávame sa najlacnejší |
| Beper 50451 Tyčový Vakuový Vysavač S He | 52.00 € | **51.90 €** | 10.2 % | **10.0 %** | 51.92 € | stávame sa najlacnejší |
| Maxlife MXBH-01 černé | 19.00 € | **18.90 €** | 10.4 % | **9.8 %** | 18.95 € | stávame sa najlacnejší |
| Venta Filter Hepa 13 for AP100 | 48.00 € | **47.90 €** | 9.8 % | **9.6 %** | 47.96 € | stávame sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 64.00 € | **63.90 €** | 24.7 % | **24.5 %** | 63.98 € | stávame sa najlacnejší |
| Univerzálna montážna doska Moza Racing RS089 | 34.00 € | **33.90 €** | 15.1 % | **14.7 %** | 33.98 € | stávame sa najlacnejší |
| Bezdrôtový adaptér Carlinkit 2AIR | 33.00 € | **32.90 €** | 14.2 % | **13.8 %** | 32.99 € | stávame sa najlacnejší |
| Laserový diaľkomer Uni-T LM40T | 29.00 € | **28.90 €** | 12.8 % | **12.4 %** | 28.99 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 38.00 € | **37.90 €** | 24.7 % | **24.3 %** | 37.99 € | stávame sa najlacnejší |
| Leifheit Stěrka XL40 cm s teles.tyčí | 25.00 € | **24.90 €** | 9.3 % | **8.8 %** | 24.99 € | stávame sa najlacnejší |
| Skládací koloběžka NILS Extreme HM2009 šedá | 47.00 € | **46.90 €** | 7.0 % | **6.8 %** | 46.99 € | stávame sa najlacnejší |
| Solight kliešťový multimeter, 20 - 200A | 6.70 € | **6.60 €** | 40.0 % | **37.9 %** | 6.67 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 7.40 € | **7.30 €** | 20.1 % | **18.5 %** | 7.39 € | stávame sa najlacnejší |
| Solight LED žiarovka G4, 1,5W, 3000K, 130lm | 2.10 € | **2.00 €** | 49.8 % | **42.6 %** | 2.02 € | stávame sa najlacnejší |
| Solight LED svietidlo pracovné, 120+40lm, 3W COB + 3... | 3.90 € | **3.80 €** | 53.2 % | **49.2 %** | 3.83 € | stávame sa najlacnejší |
| Solight rozbočka, 2,5A + 2x 10A, biela | 1.60 € | **1.50 €** | 36.9 % | **28.4 %** | 1.54 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 3000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.45 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 12W, E27, 4000K... | 1.50 € | **1.40 €** | 48.7 % | **38.8 %** | 1.45 € | stávame sa najlacnejší |
| Solight držiak viacnásobné zásuvky, 5 - 6 zásuviek | 1.60 € | **1.50 €** | 64.7 % | **54.4 %** | 1.55 € | stávame sa najlacnejší |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 3.00 € | **2.90 €** | 46.0 % | **41.2 %** | 2.98 € | stávame sa najlacnejší |
| Solight spätná klapka pre AV04/5/6/7/T | 1.20 € | **1.10 €** | 52.4 % | **39.7 %** | 1.15 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 3000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 15W, E27, 6000K... | 1.90 € | **1.80 €** | 47.1 % | **39.4 %** | 1.86 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 8W, E14, 400... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.17 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 8W, E14, 300... | 1.20 € | **1.10 €** | 47.8 % | **35.5 %** | 1.17 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 22W, E27, 3000K... | 3.30 € | **3.20 €** | 48.2 % | **43.7 %** | 3.21 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 22W, E27, 4000K... | 3.30 € | **3.20 €** | 48.2 % | **43.7 %** | 3.21 € | stávame sa najlacnejší |
| Solight LED nabíjacia žiarovka Camping, 100lm, Li-Io... | 4.30 € | **4.20 €** | 54.0 % | **50.4 %** | 4.21 € | stávame sa najlacnejší |
| Solight diaľkovo ovládané vonkajšie zásuvky set 2 + ... | 13.00 € | **12.90 €** | 30.8 % | **29.8 %** | 12.92 € | stávame sa najlacnejší |
| Beper BEP-50245 | 13.00 € | **12.90 €** | 10.4 % | **9.6 %** | 12.96 € | stávame sa najlacnejší |
| Solight magnetický Lightning kábel, USB 2.0 A konekt... | 4.30 € | **4.20 €** | 55.4 % | **51.8 %** | 4.27 € | stávame sa najlacnejší |
| Solight USB-C 3.1 kábel, USB-C konektor - USB-C kone... | 3.80 € | **3.70 €** | 55.2 % | **51.2 %** | 3.77 € | stávame sa najlacnejší |
| Solight USB-C kábel, USB 2.0 A konektor - USB-C 3.1 ... | 3.80 € | **3.70 €** | 55.2 % | **51.2 %** | 3.77 € | stávame sa najlacnejší |
| Solight univerzálny zdroj pre netbooky a notebooky, ... | 9.10 € | **9.00 €** | 23.7 % | **22.4 %** | 9.09 € | stávame sa najlacnejší |
| Solight 1z pohyblivý prívod - spojka, 10m, 2 x 1,5mm... | 9.60 € | **9.50 €** | 20.4 % | **19.2 %** | 9.59 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.80 € | **4.70 €** | 31.8 % | **29.1 %** | 4.79 € | stávame sa najlacnejší |
| AI-NC-T50L3-MW-0360 5.0 Mpix venkovní IP kamera s IR... | 137.00 € | **136.90 €** | 18.1 % | **18.0 %** | 136.93 € | stávame sa najlacnejší |
| CP-UNC-DA41PL3-D-0360 4.0Mpix venkovní IP dome kamer... | 122.00 € | **121.90 €** | 13.7 % | **13.6 %** | 121.93 € | stávame sa najlacnejší |
| CP-UNC-DA41L3C-L 4.0 Mpix venkovní dome IP kamera s ... | 115.00 € | **114.90 €** | 17.9 % | **17.8 %** | 114.96 € | stávame sa najlacnejší |
| GUZZANTI GZ 44GW | 199.00 € | **198.90 €** | 6.3 % | **6.2 %** | 198.96 € | stávame sa najlacnejší |
| Digitálny multimeter Uni-T True RMS UT15B MAX | 71.00 € | **70.90 €** | 14.6 % | **14.4 %** | 70.99 € | stávame sa najlacnejší |
| Digitálna cylindrická vložka zámku Avatto SDL-V1-S70... | 94.00 € | **93.90 €** | 14.9 % | **14.7 %** | 93.99 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 125.00 € | **124.90 €** | 7.4 % | **7.3 %** | 124.99 € | stávame sa najlacnejší |

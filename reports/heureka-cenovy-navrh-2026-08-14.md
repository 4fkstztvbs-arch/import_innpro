# Návrh na úpravu cien podľa Heureka porovnania — 2026-08-14

Vstup: `premiumstore-sk_2026-08-14_10-13.csv` (automaticky spracované denným behom).

**Pravidlo:** sme najlacnejší → zvýšiť na 2. najlacnejšieho konkurenta. Nie sme najlacnejší → znížiť tesne pod aktuálne najlacnejšieho. Cena nikdy neklesne pod floor = nákupná cena bez DPH × (1 + 5 % marža) × (1 + DPH). Marža = prirážka nad nákupnú cenu bez DPH (rovnaká definícia ako `KB_MIN_MARGIN` v `transform-kb.js`), nie klasická obchodná marža z predajnej ceny.

## Súhrn

- Spárovaných produktov cez EAN: **4751**
- Návrh **zvýšiť** cenu: **247** produktov
- Návrh **znížiť** cenu: **829** produktov
- Bez zmeny (už optimálne / chýbajú dáta): **3675** produktov
- Z toho obmedzené min. maržou 5 % (nedosiahli plný cieľ): **452**

Zoradené od najväčšieho dopadu (rozdiel medzi terajšou a odporúčanou cenou).

## Návrh zvýšiť cenu (247)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Bezdrôtové slúchadlá ONEODIO Studio Max 2 (čierne) | 143.50 € | **187.50 €** | 15.0 % | **50.2 %** | 187.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6192AXL4 | 365.90 € | **399.00 €** | 9.7 % | **19.6 %** | 365.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Samsung OLED QE48S85H | 649.00 € | **680.00 €** | 6.5 % | **11.6 %** | 649.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Káblové slúchadlá OneOdio OpenRock Link 10 (čierne) | 47.90 € | **63.00 €** | 15.4 % | **51.8 %** | 63.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio A6 (biele) | 54.90 € | **69.00 €** | 15.2 % | **44.8 %** | 68.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Etui Nillkin LensWing Magnetic iPhone 16 Pro Max (fi... | 4.80 € | **17.50 €** | 15.5 % | **320.9 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nillkin Super Frosted Shield Pro Magnetic iPhone 16 ... | 2.80 € | **13.50 €** | 14.4 % | **451.5 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nillkin Super Frosted Shield obal pre Xiaomi 11 Lite... | 1.60 € | **11.90 €** | 17.2 % | **771.6 %** | 11.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nillkin CP+PRO tvrdené sklo iPhone 16 Plus | 3.10 € | **13.00 €** | 14.6 % | **380.4 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio A1 Pro (čierne) | 33.50 € | **43.00 €** | 15.2 % | **47.9 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Baseus Bowie D05 Bluetooth 5.2 ... | 28.50 € | **36.90 €** | 15.9 % | **50.0 %** | 28.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nillkin Nature TPU Pro Magnetic iPhone 16 Plus Case ... | 2.30 € | **10.50 €** | 15.4 % | **426.9 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Oneodio Pro30 (strieborné) | 31.90 € | **40.00 €** | 15.2 % | **44.5 %** | 40.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nillkin CamShield Pro iPhone 16 Pro Max Case (blue) | 2.20 € | **10.00 €** | 16.9 % | **431.4 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Nillkin Super Frosted Shield Pro puzdro pre iPhone 1... | 2.70 € | **10.50 €** | 16.8 % | **354.1 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Oneodio Pro50 (čierne) | 38.00 € | **44.50 €** | 14.8 % | **34.4 %** | 39.02 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio A6 (čierne) | 62.90 € | **69.00 €** | 15.2 % | **26.3 %** | 68.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá OneOdio OpenRock E (čierne) | 25.00 € | **31.00 €** | 15.1 % | **42.7 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Drôtové slúchadlá Oneodio A71D (čierne) | 19.90 € | **25.90 €** | 16.1 % | **51.2 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačový napájací zdroj DarkFlash PMT1050 (biely) | 116.90 € | **122.00 €** | 15.0 % | **20.0 %** | 122.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný WiFi termostat Meross MTS200BHK(EU) (Ho... | 41.50 € | **46.50 €** | 14.9 % | **28.7 %** | 46.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darflash FT418 PRO + 7 ventilátoro... | 73.50 € | **78.50 €** | 15.2 % | **23.0 %** | 78.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje F492PW | 170.00 € | **174.90 €** | 5.9 % | **9.0 %** | 170.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Neotion CAM 803 Nagra Skylink CZ+SK | 35.90 € | **40.50 €** | 10.5 % | **24.7 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash DS900 (čierna) + 7 venti... | 69.50 € | **74.00 €** | 14.8 % | **22.2 %** | 74.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot S1 | 557.00 € | **561.00 €** | 6.6 % | **7.4 %** | 557.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| BROTHER DCP-T730DW | 266.50 € | **270.50 €** | 11.7 % | **13.4 %** | 266.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Aligator Reproduktor pro MagSafe ABSMB01 | 14.90 € | **18.50 €** | 10.9 % | **37.7 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa DarkFlash AIRNOVA (biela) + 3 vent... | 68.90 € | **72.50 €** | 15.1 % | **21.1 %** | 72.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Vodný chladič CPU Darkflash DV360S (čierny) | 98.50 € | **102.00 €** | 15.1 % | **19.2 %** | 102.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GUZZANTI GZ 1226 | 189.00 € | **192.50 €** | 6.8 % | **8.8 %** | 189.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Oneodio Pro10 (červené) | 23.50 € | **26.90 €** | 14.3 % | **30.8 %** | 25.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Káblové slúchadlá Oneodio A71 (čierno-červené) | 23.90 € | **27.00 €** | 15.7 % | **30.7 %** | 24.46 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierne) | 36.00 € | **39.00 €** | 14.6 % | **24.1 %** | 36.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (čierno-červ... | 36.00 € | **39.00 €** | 15.0 % | **24.5 %** | 36.95 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa DarkFlash DS950V s displejom (biel... | 90.50 € | **93.50 €** | 15.2 % | **19.1 %** | 93.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Inteligentný WiFi termostat Meross MTS200HK(EU) (Hom... | 42.00 € | **44.90 €** | 14.9 % | **22.9 %** | 44.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash DS900WS ATX bez ventilát... | 38.50 € | **41.00 €** | 14.8 % | **22.2 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Earphones TWS Baseus Eli Sport 1, (green) | 43.00 € | **45.50 €** | 14.8 % | **21.5 %** | 43.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Oneodio Pro10 (modré) | 24.50 € | **26.90 €** | 16.1 % | **27.5 %** | 25.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash DY460 (čierna) + 4 venti... | 97.90 € | **100.00 €** | 15.1 % | **17.5 %** | 100.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Oneodio Pro10 (sivé) | 24.90 € | **26.90 €** | 15.7 % | **25.0 %** | 25.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Chladič počítača Darkflash Z4 PRO MIST WHITE | 20.50 € | **22.50 €** | 14.7 % | **25.9 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash DS900 AIR (čierna) | 38.50 € | **40.50 €** | 14.9 % | **20.9 %** | 40.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačové puzdro Darkflash Aquarius Acrylic | 24.90 € | **26.90 €** | 15.1 % | **24.3 %** | 26.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje BM201AG1BG | 212.00 € | **214.00 €** | 6.2 % | **7.2 %** | 212.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C prenosné stolné zásuvky, 2m, bi... | 9.00 € | **10.90 €** | 20.1 % | **45.5 %** | 9.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá Oneodio Pro10 (čierne) | 25.00 € | **26.90 €** | 14.8 % | **23.6 %** | 25.58 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong LEAP-S3 V2 Google TV box | 63.90 € | **65.50 €** | 10.4 % | **13.2 %** | 65.26 € | dobehnutie 2. najlacnejšieho konkurenta |
| FIXED HUB Quadri FIXHU-QR-BK | 36.90 € | **38.50 €** | 10.5 % | **15.3 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed MagPad, bílá FIXMPAD2-WH | 12.90 € | **14.50 €** | 11.8 % | **25.7 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktory Edifier MR3 2.0 (čierne) | 91.90 € | **93.50 €** | 14.9 % | **16.9 %** | 93.25 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RO7457EA | 190.00 € | **191.50 €** | 7.8 % | **8.7 %** | 190.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Wireless controler GameSir T4n (white) | 24.50 € | **25.90 €** | 14.6 % | **21.2 %** | 25.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight batériová kamera WiFi so solárnym panelom | 57.50 € | **58.90 €** | 32.4 % | **35.6 %** | 57.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 1 zásuvka, 16A/3680W,... | 8.40 € | **9.70 €** | 54.5 % | **78.4 %** | 8.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 33.50 € | **34.50 €** | 15.7 % | **19.1 %** | 34.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, biela | 28.90 € | **29.90 €** | 29.9 % | **34.4 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Gorenje NRK6182PS4 | 328.00 € | **328.90 €** | 7.8 % | **8.1 %** | 328.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit 81520 Pegasus 200 Solid | 36.90 € | **37.50 €** | 10.9 % | **12.7 %** | 36.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Strong LEAP-S3 V2 Google TV box | 63.90 € | **64.50 €** | 10.4 % | **11.4 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla TE-222 Dongle, DVB-T2 přijímač | 23.00 € | **23.50 €** | 6.4 % | **8.7 %** | 23.49 € | dobehnutie 2. najlacnejšieho konkurenta |
| Počítačová skriňa Darkflash DK151 LED s 3 ventilátor... | 36.50 € | **37.00 €** | 15.4 % | **17.0 %** | 37.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Niceboy PILOT S10 Rear Cam | 24.00 € | **24.50 €** | 8.6 % | **10.8 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| UNI-T UT343D tester hrúbky farby | 88.00 € | **88.50 €** | 6.2 % | **6.8 %** | 88.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacia lampička 3v1, 280lm, zmena CCT... | 20.00 € | **20.50 €** | 35.1 % | **38.4 %** | 20.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička s displejom, 9W, voľba t... | 31.00 € | **31.50 €** | 18.8 % | **20.7 %** | 31.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, čier... | 13.00 € | **13.50 €** | 9.8 % | **14.0 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stmievateľný pásik s bezdotykovým ovláda... | 15.00 € | **15.50 €** | 41.1 % | **45.9 %** | 15.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svetelný pás s testrom, 5m, sada s 12V a... | 10.00 € | **10.50 €** | 16.8 % | **22.7 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, prisazený, 18W, 1530lm, ... | 14.00 € | **14.50 €** | 29.0 % | **33.7 %** | 14.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 16.00 € | **16.50 €** | 20.2 % | **24.0 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Multimeter Uni-T UT256 | 27.00 € | **27.50 €** | 10.9 % | **12.9 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Profesionálny digitálny multimeter UNI-T UT191E | 60.00 € | **60.50 €** | 13.8 % | **14.8 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov Wybot C1 Pro | 417.00 € | **417.50 €** | 5.4 % | **5.5 %** | 417.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 PRO | 474.00 € | **474.50 €** | 9.5 % | **9.6 %** | 474.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight teplovzdušný konvektor 2300W, LCD, ventiláto... | 45.00 € | **45.50 €** | 4.5 % | **5.6 %** | 45.00 € | min. marža (5%) vyžaduje vyššiu cenu než 2. najlacnejší konkurent — zvýšené na floor, nad úroveň 2. najlacnejšieho |
| Laserový diaľkomer Uni-T LM100A | 33.00 € | **33.50 €** | 11.0 % | **12.7 %** | 33.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Laserový diaľkomer UNI-T LM70A | 26.00 € | **26.50 €** | 11.7 % | **13.8 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač vlhkosti dreva UNI-T UT377A | 18.00 € | **18.50 €** | 11.6 % | **14.7 %** | 18.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z + USB A+C 20W PD vstavaná zásuvka s posuv... | 26.00 € | **26.50 €** | 34.4 % | **37.0 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, 4 zásuvky, gumový kábe... | 13.00 € | **13.50 €** | 31.3 % | **36.3 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka IP66 s vypínačom, vodotesná a pracho... | 27.00 € | **27.50 €** | 32.0 % | **34.4 %** | 27.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente G4 robotický vysavač | 116.00 € | **116.50 €** | 8.2 % | **8.6 %** | 116.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-G4 | 116.00 € | **116.50 €** | 8.2 % | **8.6 %** | 116.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L6 | 151.00 € | **151.50 €** | 5.5 % | **5.9 %** | 151.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Icequeen-Wh | 19.00 € | **19.50 €** | 5.2 % | **8.0 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Rowenta RH 6756WO | 123.00 € | **123.50 €** | 7.7 % | **8.1 %** | 123.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Smartdust | 132.00 € | **132.50 €** | 5.1 % | **5.5 %** | 132.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| DOMO DO9252I | 252.00 € | **252.50 €** | 7.9 % | **8.1 %** | 252.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| MAXXO VM Profi | 98.50 € | **99.00 €** | 9.9 % | **10.5 %** | 98.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Leifheit Clean Twist M Ergo+náhr. Static | 41.00 € | **41.50 €** | 13.5 % | **14.9 %** | 41.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Creality Ender-3 V3 Plus 3D Printer | 348.00 € | **348.50 €** | 11.0 % | **11.1 %** | 348.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Sonoff CAM-B1P 2K vonkajšia WiFi inteligentná kamera | 26.00 € | **26.50 €** | 9.3 % | **11.4 %** | 26.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W Power Bank 20000mAh Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi 22.5W PWB 20000mAh Light Gray | 19.00 € | **19.50 €** | 5.3 % | **8.1 %** | 19.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 12.00 € | **12.50 €** | 17.5 % | **22.4 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, gumový k... | 24.00 € | **24.50 €** | 23.9 % | **26.5 %** | 24.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod IP44, 4 zásuvky, vypínač,... | 10.00 € | **10.50 €** | 23.6 % | **29.7 %** | 10.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 37.00 € | **37.50 €** | 8.9 % | **10.4 %** | 37.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne, 4 zásuvky, 20m,... | 38.00 € | **38.50 €** | 37.7 % | **39.5 %** | 38.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 12.00 € | **12.50 €** | 22.0 % | **27.0 %** | 12.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY Crossky C10 (biele) | 13.00 € | **13.50 €** | 12.1 % | **16.4 %** | 13.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi Buds 6 Nebula Purple | 98.00 € | **98.50 €** | 5.2 % | **5.7 %** | 98.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi Redmi Buds 8 Active Blue | 16.00 € | **16.50 €** | 5.6 % | **8.9 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Xiaomi Redmi Buds 8 Active White | 16.00 € | **16.50 €** | 5.6 % | **8.9 %** | 16.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight GSM diaľkovo ovládaná zásuvka | 60.00 € | **60.50 €** | 36.0 % | **37.2 %** | 60.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy CDG1S514ESH | 238.00 € | **238.50 €** | 7.7 % | **8.0 %** | 238.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Indesit BTW S50400 EU/N | 262.00 € | **262.50 €** | 7.9 % | **8.1 %** | 262.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| GORENJE GS620C10W | 337.00 € | **337.50 €** | 6.9 % | **7.1 %** | 337.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Reproduktor Edifier ES300 Bluetooth (čierny) | 189.50 € | **189.90 €** | 15.1 % | **15.3 %** | 189.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Digitálny multimeter Uni-T UT161D | 68.50 € | **68.90 €** | 11.4 % | **12.1 %** | 68.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tefal NE477838 | 136.50 € | **136.90 €** | 8.3 % | **8.6 %** | 136.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Electrolux E7K1-6BP | 69.50 € | **69.90 €** | 11.5 % | **12.2 %** | 69.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| SALENTE SuChef | 82.50 € | **82.90 €** | 7.7 % | **8.3 %** | 82.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Fixed AirLink, 100W PD 3.0 FIXA-AL-BK | 84.50 € | **84.90 €** | 9.2 % | **9.7 %** | 84.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Meteorologická stanice GARNI 750 | 112.50 € | **112.90 €** | 8.1 % | **8.5 %** | 112.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Prenosný monitor Arzopa Z1C 16,1'' | 88.50 € | **88.90 €** | 5.7 % | **6.2 %** | 88.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Baterie olověná  12V / 26Ah  EMOS bezúdržbový akumul... | 68.50 € | **68.90 €** | 7.9 % | **8.6 %** | 68.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| CANDY CBT6130/3X | 64.50 € | **64.90 €** | 6.1 % | **6.7 %** | 64.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny infračervený teplomer -50° +380°C | 13.50 € | **13.90 €** | 35.8 % | **39.9 %** | 13.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight axiálny ventilátor | 12.50 € | **12.90 €** | 36.0 % | **40.4 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Superior FREEDOM 4v1 USB | 11.50 € | **11.90 €** | 10.4 % | **14.2 %** | 11.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 2z + USB A+C 20W PD, cestovný predlžovací pr... | 10.50 € | **10.90 €** | 14.9 % | **19.3 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 12.50 € | **12.90 €** | 20.1 % | **24.0 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 10m | 12.50 € | **12.90 €** | 16.0 % | **19.7 %** | 12.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 6x vy... | 10.50 € | **10.90 €** | 18.1 % | **22.6 %** | 10.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla TE-300 DVBT2 H265 přijímač (HDMI CEC) | 22.50 € | **22.90 €** | 8.8 % | **10.7 %** | 22.75 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stolná lampa Falun, E27, čierna | 30.50 € | **30.90 €** | 37.1 % | **38.9 %** | 30.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED WIFI smart RGB pásik pre TV, 4x50cm, USB | 17.50 € | **17.90 €** | 43.3 % | **46.6 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED lineárne svietidlo podlinkové, 15W, 4100... | 16.50 € | **16.90 €** | 32.3 % | **35.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Solid O... | 54.50 € | **54.90 €** | 37.3 % | **38.3 %** | 54.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny multimeter, tru RMS | 21.50 € | **21.90 €** | 22.3 % | **24.6 %** | 21.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 50W, prenosný, nabijací, 5000... | 45.50 € | **45.90 €** | 40.3 % | **41.6 %** | 45.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Merač vzdialenosti UNI-T LM120A | 43.50 € | **43.90 €** | 9.3 % | **10.3 %** | 43.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight detektor dymu s WIFI pripojením | 16.50 € | **16.90 €** | 29.7 % | **32.9 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight vstavaná podlahová dvojzásuvka, IP55, okrúhl... | 41.50 € | **41.90 €** | 33.6 % | **34.9 %** | 41.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| ETA 321990020 | 55.50 € | **55.90 €** | 9.4 % | **10.2 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight stredný konzolový držiak pre ploché TV, 43cm... | 16.50 € | **16.90 €** | 37.2 % | **40.5 %** | 16.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| LENOVO adaptér TAB 68W AC USB ZG38C05739 | 17.50 € | **17.90 €** | 11.0 % | **13.5 %** | 17.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 55.50 € | **55.90 €** | 35.5 % | **36.4 %** | 55.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 29.50 € | **29.90 €** | 18.7 % | **20.3 %** | 29.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Tesla TE-300 DVBT2 H265 přijímač (HDMI CEC) | 22.50 € | **22.90 €** | 8.8 % | **10.7 %** | 22.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight diaľkovo ovládané zásuvky set 3 + 1, 3 zásuv... | 18.50 € | **18.90 €** | 31.6 % | **34.4 %** | 18.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie profesionálne svietidlo, 600lm... | 19.50 € | **19.90 €** | 36.8 % | **39.6 %** | 19.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtový robot na čistenie bazénov WYBOT C2 Pro Vi... | 559.50 € | **559.90 €** | 9.8 % | **9.9 %** | 559.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Automatické vodítko 3 m Rojeco (zelené) | 9.70 € | **10.00 €** | 14.6 % | **18.2 %** | 10.12 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 5W, 400lm, ... | 2.80 € | **3.00 €** | 36.3 % | **46.0 %** | 2.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 7 zásuviek, biely, vypín... | 5.80 € | **6.00 €** | 21.2 % | **25.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, bodová , 5W, GU10, 3000K, 425l... | 0.90 € | **1.10 €** | 18.0 % | **44.2 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 9.30 € | **9.50 €** | 30.1 % | **32.9 %** | 9.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Salente Rtx-L7 | 269.90 € | **270.00 €** | 7.6 % | **7.7 %** | 269.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Candy TCA273D3-S | 280.90 € | **281.00 €** | 7.9 % | **7.9 %** | 280.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálny bezkontaktný alkohol tester, F... | 57.90 € | **58.00 €** | 29.3 % | **29.5 %** | 57.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Estela ... | 17.90 € | **18.00 €** | 34.5 % | **35.3 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 48.90 € | **49.00 €** | 24.5 % | **24.8 %** | 48.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 19.90 € | **20.00 €** | 25.8 % | **26.4 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED reflektor, 20W, prenosný, nabijací, 2000... | 21.90 € | **22.00 €** | 28.8 % | **29.4 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálna laserová vodováha - zelený laser | 37.90 € | **38.00 €** | 31.7 % | **32.0 %** | 37.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný laserový merač vzdálenosti, 0,... | 22.90 € | **23.00 €** | 38.6 % | **39.2 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight záhradný stĺpik IP44, nerez oceľ, 2 zásuvky,... | 21.90 € | **22.00 €** | 24.8 % | **25.3 %** | 21.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Domo DO223S | 63.90 € | **64.00 €** | 12.4 % | **12.6 %** | 63.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| TP-LINK RE205 AC750 WiFi Range Extender | 30.90 € | **31.00 €** | 10.5 % | **10.8 %** | 30.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight bezdrôtový teplomer, teplota, čas, budík, biely | 9.20 € | **9.30 €** | 14.4 % | **15.6 %** | 9.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 20m, 2 x 1,5mm... | 17.90 € | **18.00 €** | 33.6 % | **34.4 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 25m, 2 x 1,5mm... | 19.90 € | **20.00 €** | 24.1 % | **24.7 %** | 19.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight 1z pohyblivý prívod - spojka, 30m, 2 x 1,5mm... | 24.90 € | **25.00 €** | 22.4 % | **22.9 %** | 24.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 25m,... | 28.90 € | **29.00 €** | 23.5 % | **23.9 %** | 28.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 30 m... | 33.90 € | **34.00 €** | 25.7 % | **26.1 %** | 33.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod na bubne 15m, 3 zásuvky, ... | 22.90 € | **23.00 €** | 34.1 % | **34.7 %** | 22.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Bezdrôtové slúchadlá QCY H3 pro ANC (čierne) | 40.90 € | **41.00 €** | 5.5 % | **5.8 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Slúchadlá QCY H3 Pro (biele) | 40.90 € | **41.00 €** | 7.9 % | **8.2 %** | 40.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| D-LINK 10/100 5-Port Switch (DES-105) | 17.90 € | **18.00 €** | 5.5 % | **6.0 %** | 17.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED mini panel CCT, podhľadový, 6W, 450lm, 3... | 5.60 € | **5.70 €** | 29.7 % | **32.0 %** | 5.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED podhľadové svietidlo bodové, 9W, 720lm, ... | 4.60 € | **4.70 €** | 38.0 % | **41.0 %** | 4.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie oválne, 13W, 910lm,... | 6.30 € | **6.40 €** | 26.5 % | **28.5 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED anjeli, drevo, biela farba, 2x AA | 5.30 € | **5.40 €** | 42.7 % | **45.4 %** | 5.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., 1 režim | 4.10 € | **4.20 €** | 33.9 % | **37.1 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C nabíjačkou, 2 x 10A, bi... | 6.30 € | **6.40 €** | 32.7 % | **34.8 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.40 €** | 24.3 % | **26.3 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač s USB A+C rychlonabíjačkou 20W PD... | 6.30 € | **6.40 €** | 5.4 % | **7.1 %** | 6.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 3m, 3 zásuvky, vypínač, 1... | 5.60 € | **5.70 €** | 10.8 % | **12.8 %** | 5.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 7m | 7.30 € | **7.40 €** | 10.5 % | **12.0 %** | 7.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.10 € | **4.20 €** | 35.0 % | **38.2 %** | 4.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 5.60 € | **5.70 €** | 35.5 % | **37.9 %** | 5.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 5m | 6.60 € | **6.70 €** | 25.7 % | **27.6 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 6.60 € | **6.70 €** | 35.5 % | **37.6 %** | 6.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W + červené svetlo, 3... | 5.80 € | **5.90 €** | 42.9 % | **45.4 %** | 5.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie vreckové svietidlo, 200lm, 3W,... | 7.60 € | **7.70 €** | 42.4 % | **44.2 %** | 7.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E27, 3000K, 510lm | 0.70 € | **0.80 €** | 7.4 % | **22.7 %** | 0.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočka, 3x 10A, trojuholník, biela | 2.60 € | **2.70 €** | 32.1 % | **37.2 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight rozbočovač, 3 x 10A, biely, vypínač | 3.10 € | **3.20 €** | 27.9 % | **32.1 %** | 3.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zástrčka do vlhka, priama, IP44, čierna | 1.70 € | **1.80 €** | 22.3 % | **29.5 %** | 1.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight zásuvka priama, IP20, biela | 1.20 € | **1.30 €** | 13.4 % | **22.9 %** | 1.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 1,5m... | 2.60 € | **2.70 €** | 28.1 % | **33.0 %** | 2.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 3m, ... | 3.50 € | **3.60 €** | 18.1 % | **21.4 %** | 3.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 2m | 3.40 € | **3.50 €** | 16.6 % | **20.1 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight HDMI kábel s Ethernetom, HDMI 1.4 A konektor... | 3.40 € | **3.50 €** | 30.4 % | **34.2 %** | 3.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED svietidlo, 120lm, 3W LED COB, 3 x AAA | 1.90 € | **2.00 €** | 17.0 % | **23.2 %** | 1.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 3000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, miniglobe, 6W, E14, 4000K, 510... | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED žiarovka, sviečka, 6W, E14, 3000K, 510lm | 0.90 € | **1.00 €** | 38.1 % | **53.4 %** | 0.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight skúšačka, LCD, AC napätie: 12 - 230V | 1.10 € | **1.20 €** | 27.8 % | **39.4 %** | 1.10 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight viacnásobná zásuvka, 3 zásuvky | 1.80 € | **1.90 €** | 29.5 % | **36.7 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové COB svietidlo, 3W, modrá, 3x AAA | 1.80 € | **1.90 €** | 17.1 % | **23.6 %** | 1.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED bezdotykové podlinkové a nábytkové sviet... | 14.90 € | **15.00 €** | 9.7 % | **10.5 %** | 14.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 13W, 41... | 12.90 € | **13.00 €** | 37.5 % | **38.5 %** | 12.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kuchynské svietidlo T5, vypínač, 9W, 410... | 9.40 € | **9.50 €** | 28.9 % | **30.2 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED stropné svietidlo PLAIN, 15W, 1200lm, 30... | 9.90 € | **10.00 €** | 37.4 % | **38.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight profesionálný kliešťový multimeter, 10mA - 1... | 9.80 € | **9.90 €** | 26.9 % | **28.2 %** | 9.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, 24 h., vypínač, 1 režim | 5.00 € | **5.10 €** | 33.3 % | **35.9 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight časový spínač, vonkajší, 24 h., 1 režim | 6.00 € | **6.10 €** | 30.4 % | **32.6 %** | 6.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight digitálny merač spotreby el. energie, veľký ... | 9.90 € | **10.00 €** | 23.8 % | **25.1 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight montážna lampa, E27, AC 230V, 5m, oranžová s... | 9.90 € | **10.00 €** | 44.2 % | **45.7 %** | 9.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté s mriežkou, ... | 7.50 € | **7.60 €** | 23.2 % | **24.8 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 20W, 1500lm... | 8.80 € | **8.90 €** | 27.1 % | **28.5 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED vonkajšie osvetlenie guľaté, 20W, 1500lm... | 8.80 € | **8.90 €** | 27.1 % | **28.5 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight dvojzásuvka do vlhka IP54, sivá | 4.20 € | **4.30 €** | 32.4 % | **35.5 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight malý naklápací držiak pre ploché TV, 26cm - ... | 4.20 € | **4.30 €** | 35.5 % | **38.7 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight nabíjačka s LCD displejom, AC 230V, 450mA, 4... | 13.90 € | **14.00 €** | 7.8 % | **8.6 %** | 13.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 10m,... | 8.80 € | **8.90 €** | 15.8 % | **17.1 %** | 8.80 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 2m, ... | 2.70 € | **2.80 €** | 15.5 % | **19.8 %** | 2.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 5m, ... | 4.90 € | **5.00 €** | 13.5 % | **15.8 %** | 4.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.50 € | **7.60 €** | 28.9 % | **30.6 %** | 7.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod - spojka, 1 zásuvka, 7m, ... | 7.40 € | **7.50 €** | 37.0 % | **38.9 %** | 7.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 4 zásuvky, vypínač, 1... | 7.20 € | **7.30 €** | 6.2 % | **7.7 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod 5m, 6 zásuviek, vypínač, ... | 8.50 € | **8.60 €** | 16.9 % | **18.3 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, 3m | 4.20 € | **4.30 €** | 15.4 % | **18.1 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 3 zásuvky, biely, vypína... | 4.50 € | **4.60 €** | 30.7 % | **33.6 %** | 4.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, 3m | 5.00 € | **5.10 €** | 34.6 % | **37.3 %** | 5.00 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 4.20 € | **4.30 €** | 15.8 % | **18.5 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 7.20 € | **7.30 €** | 26.7 % | **28.5 %** | 7.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 4 zásuvky, čierny, 3m | 4.40 € | **4.50 €** | 11.1 % | **13.6 %** | 4.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, 2m | 4.70 € | **4.80 €** | 35.0 % | **37.9 %** | 4.70 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 5.90 € | **6.00 €** | 35.5 % | **37.8 %** | 5.90 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight predlžovací prívod, 6 zásuviek, biely, vypín... | 8.50 € | **8.60 €** | 35.8 % | **37.4 %** | 8.50 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 150J, 4 zásuvky, 1,5m, biela | 9.40 € | **9.50 €** | 49.0 % | **50.6 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 150J, 4 zásuvky, 3m, biela | 9.40 € | **9.50 €** | 16.0 % | **17.2 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 1,5m, b... | 9.40 € | **9.50 €** | 24.5 % | **25.8 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 150J, 5 zásuviek, 3m, biela | 9.40 € | **9.50 €** | 13.4 % | **14.6 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 1,5m, b... | 9.40 € | **9.50 €** | 15.3 % | **16.5 %** | 9.40 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 9.60 € | **9.70 €** | 17.9 % | **19.1 %** | 9.60 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED čelové svietidlo, 3W COB, 3x AAA | 4.20 € | **4.30 €** | 25.1 % | **28.1 %** | 4.20 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED kovové svietidlo, 150lm, 3W CREE LED, či... | 8.30 € | **8.40 €** | 42.1 % | **43.8 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Solight LED nabíjacie svietidlo, 9 x LED, červenočie... | 8.30 € | **8.40 €** | 5.3 % | **6.5 %** | 8.30 € | dobehnutie 2. najlacnejšieho konkurenta |
| Maxxo VM Master | 236.90 € | **237.00 €** | 5.5 % | **5.5 %** | 236.90 € | dobehnutie 2. najlacnejšieho konkurenta |

## Návrh znížiť cenu (829)

| Názov | Naša cena | → Nová cena | Marža teraz | → Nová marža | Heureka najlacnejší | Poznámka |
|---|---:|---:|---:|---:|---:|---|
| Skaner 3D Creality RaptorX | 3449.00 € | **3149.50 €** | 15.0 % | **5.0 %** | 3000.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality Sermoon S1 | 2561.00 € | **2374.50 €** | 15.0 % | **6.6 %** | 2374.69 € | stávame sa najlacnejší |
| BOSE Smart Ultra Soundbar - čierna | 999.00 € | **819.50 €** | 28.1 % | **5.1 %** | 773.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE83S85H | 3278.90 € | **3129.90 €** | 10.0 % | **5.0 %** | 2799.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Střídač hybridní DEYE SUN-10K-SG01HP3-EU-AM2, 10kW, ... | 1622.50 € | **1481.90 €** | 15.0 % | **5.0 %** | 1213.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Creality Sermoon P1 | 3158.50 € | **3020.50 €** | 15.0 % | **10.0 %** | 3020.71 € | stávame sa najlacnejší |
| GORENJE F4142PW | 359.00 € | **221.90 €** | 74.8 % | **8.0 %** | 222.00 € | stávame sa najlacnejší |
| BEKO BMGB25332BG | 309.00 € | **176.90 €** | 88.1 % | **7.7 %** | 177.00 € | stávame sa najlacnejší |
| Skaner 3D Revopoint MetroY | 1212.00 € | **1106.90 €** | 15.0 % | **5.0 %** | 1089.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA S70 Ultra Roller RVC (biela) | 1154.00 € | **1053.90 €** | 15.0 % | **5.0 %** | 499.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AMICA SIS 512 TCX | 599.00 € | **503.90 €** | 26.9 % | **6.7 %** | 504.00 € | stávame sa najlacnejší |
| Xiaomi TV S Mini LED 98 2026 | 2070.90 € | **1976.50 €** | 10.0 % | **5.0 %** | 1924.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE Bass Module 500 - čierna | 499.00 € | **408.90 €** | 28.2 % | **5.1 %** | 399.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje GEC5C41SG | 399.00 € | **309.50 €** | 39.2 % | **8.0 %** | 309.80 € | stávame sa najlacnejší |
| Samsung Galaxy S25 Ultra 5G 512GB Black | 1767.90 € | **1687.50 €** | 10.0 % | **5.0 %** | 865.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Moza Racing mBooster RS076 aktívny univerzálny pedál... | 882.90 € | **806.50 €** | 15.0 % | **5.0 %** | 639.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| WHIRLPOOL MWF 421 SL | 259.00 € | **184.90 €** | 47.3 % | **5.2 %** | 183.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA S70 Roller (biela) | 807.50 € | **737.50 €** | 15.0 % | **5.0 %** | 504.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D skener Revopoint POP 4 | 793.90 € | **724.90 €** | 15.0 % | **5.0 %** | 717.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP-USC-DA24L2-0360 2.4Mpix venkovní dome kamera 4v1 ... | 111.90 € | **46.00 €** | 183.8 % | **16.7 %** | 46.07 € | stávame sa najlacnejší |
| BOSE Soundlink Max - čierna | 399.00 € | **333.50 €** | 25.8 % | **5.1 %** | 321.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Qrevo Edge 5V1 čistiaci robot (biely) (N) | 719.00 € | **656.90 €** | 15.0 % | **5.1 %** | 519.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Kobra S1 Combo 3D tlačiareň + Hotend + Fila... | 693.00 € | **632.90 €** | 15.0 % | **5.0 %** | 379.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE GS520E15S | 359.00 € | **298.90 €** | 26.3 % | **5.1 %** | 288.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi TV S Mini LED 85 2026 | 1250.90 € | **1193.90 €** | 10.0 % | **5.0 %** | 1165.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Profesionální kožený boxovací pytel DBX BUSHIDO Sove... | 608.00 € | **555.50 €** | 15.0 % | **5.1 %** | 375.53 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň QiDi Q2C Combo | 608.00 € | **555.50 €** | 15.0 % | **5.1 %** | 539.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE Ultra Open Earbuds - biela | 349.00 € | **296.90 €** | 23.5 % | **5.0 %** | 196.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE Ultra Open Earbuds - čierna | 349.00 € | **296.90 €** | 23.5 % | **5.0 %** | 196.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Jupiter 2 | 901.00 € | **848.90 €** | 15.0 % | **8.3 %** | 849.00 € | stávame sa najlacnejší |
| Bezdrôtový masážny prístroj/regeneračná obuv s techn... | 542.90 € | **495.90 €** | 15.0 % | **5.1 %** | 481.81 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool MBNA910X | 289.00 € | **242.50 €** | 28.7 % | **8.0 %** | 242.90 € | stávame sa najlacnejší |
| BOSE SoundLink Plus - čierna | 279.00 € | **232.90 €** | 25.8 % | **5.0 %** | 219.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA S10 Plus robot vaccum cleaner | 519.00 € | **474.50 €** | 14.9 % | **5.1 %** | 439.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MacBook Neo 8/512GB indigo MHFG4CZ | 967.00 € | **923.50 €** | 10.0 % | **5.1 %** | 820.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze ED 100 | 572.90 € | **529.90 €** | 15.0 % | **6.4 %** | 529.95 € | stávame sa najlacnejší |
| Reproduktory Edifier Airpulse A100 2.0 (čierne) | 765.00 € | **722.00 €** | 15.0 % | **8.5 %** | 722.48 € | stávame sa najlacnejší |
| JBL Bar 1000 MK2 Soundbar | 1147.50 € | **1106.90 €** | 8.9 % | **5.0 %** | 968.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bose QuietComfort Ultra Earbuds ( 2.Gen ) - čierna | 299.00 € | **258.50 €** | 23.8 % | **7.0 %** | 258.90 € | stávame sa najlacnejší |
| Electrolux EHF46547XK | 329.00 € | **289.50 €** | 19.4 % | **5.1 %** | 213.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TWS Edifier STAX S10 ANC planar headphones (black) | 435.00 € | **397.50 €** | 15.0 % | **5.1 %** | 276.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi TV S Mini LED 75 2026 | 823.90 € | **786.50 €** | 10.0 % | **5.0 %** | 770.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MOVA S10 robot vacuum cleaner | 425.50 € | **388.50 €** | 15.1 % | **5.0 %** | 339.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S2000MKIII 2.0 (hnedé) | 368.50 € | **332.90 €** | 16.3 % | **5.1 %** | 316.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S2000MKIII 2.0 (hnedé) | 368.50 € | **332.90 €** | 16.3 % | **5.1 %** | 316.73 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ASUS Vivobook 16 (M1502NAQ-BQ057W) | 769.90 € | **734.90 €** | 10.0 % | **5.0 %** | 552.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch Ultra 2025 Blue | 743.50 € | **709.50 €** | 10.1 % | **5.0 %** | 324.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch Ultra 2025 Gray | 743.50 € | **709.50 €** | 10.1 % | **5.0 %** | 324.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch Ultra 2025 Silver | 743.50 € | **709.50 €** | 10.1 % | **5.0 %** | 324.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung OLED QE55S85H | 746.50 € | **712.50 €** | 10.0 % | **5.0 %** | 700.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herný volant pre nákladné vozidlá Moza Racing RS071 ... | 532.90 € | **498.90 €** | 15.0 % | **7.7 %** | 499.00 € | stávame sa najlacnejší |
| Gorenje NRK6182PW4 | 379.99 € | **347.90 €** | 16.7 % | **6.9 %** | 348.00 € | stávame sa najlacnejší |
| ETA 013390020 | 114.99 € | **83.00 €** | 45.5 % | **5.0 %** | 79.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE SoundLink Flex II - Black | 179.00 € | **148.90 €** | 26.5 % | **5.3 %** | 138.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE SoundLink Flex II - Blue Dusk | 179.00 € | **148.90 €** | 26.5 % | **5.3 %** | 138.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE SoundLink Flex II - Sandstone | 179.00 € | **148.90 €** | 26.5 % | **5.3 %** | 138.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Xiaomi TV S Mini LED 65 2026 | 645.50 € | **615.90 €** | 10.1 % | **5.0 %** | 607.60 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE QuietComfort Earbuds - biela | 199.00 € | **169.50 €** | 23.5 % | **5.2 %** | 164.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE QuietComfort Earbuds - biela | 199.00 € | **169.50 €** | 23.5 % | **5.2 %** | 164.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE QuietComfort Earbuds - čierna | 199.00 € | **169.50 €** | 23.5 % | **5.2 %** | 164.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch 8 46mm LTE Black | 619.50 € | **591.50 €** | 10.1 % | **5.1 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WPS C7X WBS EE X | 616.50 € | **588.50 €** | 10.0 % | **5.0 %** | 559.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK New Blaze PRO 100 | 407.00 € | **379.90 €** | 14.9 % | **7.3 %** | 379.95 € | stávame sa najlacnejší |
| Gorenje MO 20 A3B | 99.00 € | **72.50 €** | 43.6 % | **5.1 %** | 65.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Electrolux EW6SM226CC | 572.90 € | **546.90 €** | 10.1 % | **5.1 %** | 546.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch 8 46mm Black | 564.90 € | **539.00 €** | 10.1 % | **5.0 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch 8 46mm White | 564.90 € | **539.00 €** | 10.1 % | **5.0 %** | 239.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Herná súprava PXN VD4 EU | 298.50 € | **272.90 €** | 15.0 % | **5.1 %** | 253.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtový robot na čistenie bazénov WYBOT F1 | 343.50 € | **317.90 €** | 15.1 % | **6.5 %** | 318.00 € | stávame sa najlacnejší |
| ETA 4216 90000 | 119.99 € | **94.50 €** | 33.9 % | **5.4 %** | 94.90 € | stávame sa najlacnejší |
| Reproduktory Edifier M90 (biele) | 290.00 € | **264.90 €** | 15.0 % | **5.1 %** | 227.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier M90 (čierne) | 290.00 € | **264.90 €** | 15.0 % | **5.1 %** | 227.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Skladací bežecký pás DeerRun X20 s nastaviteľným skl... | 782.50 € | **757.90 €** | 15.0 % | **11.4 %** | 758.00 € | stávame sa najlacnejší |
| Grafický tablet Huion Kamvas 24 Plus GS2402 | 796.00 € | **771.50 €** | 8.4 % | **5.0 %** | 676.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3431B 1600W 12V | 303.50 € | **279.00 €** | 14.9 % | **5.7 %** | 279.39 € | stávame sa najlacnejší |
| Roborock H60 Hub Ultra Black | 541.90 € | **517.50 €** | 10.0 % | **5.1 %** | 392.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple AirPods Max Midnight (2024) | 530.90 € | **506.50 €** | 10.1 % | **5.0 %** | 389.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 255R G10 (CH7K2AT) | 524.50 € | **500.50 €** | 10.1 % | **5.0 %** | 478.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň ELEGOO Mars 5 Ultra | 276.50 € | **252.90 €** | 14.9 % | **5.1 %** | 249.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja ON400EU Speedi 10v1 5,7l | 526.00 € | **502.50 €** | 10.0 % | **5.1 %** | 157.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 213890000 | 105.99 € | **82.50 €** | 34.9 % | **5.0 %** | 76.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE Soundlink Micro 2nd Gen - čierna | 129.00 € | **105.90 €** | 28.2 % | **5.3 %** | 87.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE Soundlink Micro 2nd Gen - Dusk Blue | 129.00 € | **105.90 €** | 28.2 % | **5.3 %** | 87.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE QuietComfort headphones - biela | 239.00 € | **216.50 €** | 16.0 % | **5.1 %** | 160.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BOSE QuietComfort headphones - čierna | 239.00 € | **216.50 €** | 16.0 % | **5.1 %** | 160.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací pytel DBX BUSHIDO Hydro Bag 2.0, 80 kg, černý | 251.90 € | **230.00 €** | 15.0 % | **5.0 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shark RV2820VEEU PowerDetect Auto-Empty | 473.50 € | **451.90 €** | 10.0 % | **5.0 %** | 348.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 255R G10 (CH7J9AT) | 477.50 € | **455.90 €** | 10.0 % | **5.0 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (whi | 455.90 € | **434.90 €** | 10.1 % | **5.0 %** | 390.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Cyklotrenažér Cycplus T3 | 849.90 € | **828.90 €** | 15.0 % | **12.2 %** | 829.00 € | stávame sa najlacnejší |
| AI TWS slúchadlá VIAIM Recdot 2 s diktafónom (čierne) | 233.50 € | **213.00 €** | 15.1 % | **5.0 %** | 159.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI TWS slúchadlá VIAIM Recdot 2 s diktafónom (zlaté) | 233.50 € | **213.00 €** | 15.1 % | **5.0 %** | 159.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Kruger&Matz KM1995-S | 233.00 € | **212.90 €** | 15.0 % | **5.1 %** | 162.43 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| RUSSELL HOBBS 22000-56/RH | 129.00 € | **108.90 €** | 24.6 % | **5.2 %** | 100.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Webová kamera OBSBOT Tiny 3 Lite | 229.90 € | **209.90 €** | 15.0 % | **5.0 %** | 209.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 98.50 € | **78.90 €** | 44.0 % | **15.3 %** | 79.00 € | stávame sa najlacnejší |
| Shark IP1251EUT Power Detect Pet | 428.00 € | **408.50 €** | 10.0 % | **5.0 %** | 355.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Boombox4 Black Přenosný reproduktor | 469.00 € | **449.50 €** | 9.6 % | **5.0 %** | 429.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 50T69C QLED 4K SMART Google TV | 432.90 € | **413.50 €** | 10.0 % | **5.1 %** | 358.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L6390 | 425.00 € | **405.90 €** | 10.0 % | **5.1 %** | 355.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Štartér LOKITHOR J5000 PRO, 99,84 Wh, 5000 A | 222.00 € | **202.90 €** | 14.9 % | **5.1 %** | 183.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight 3z + USB A+C 20W PD, Wireless 10W, výsuvný b... | 65.00 € | **46.00 €** | 58.6 % | **12.3 %** | 46.50 € | stávame sa najlacnejší |
| JBL PartyBox 330W | 563.50 € | **544.90 €** | 10.0 % | **6.4 %** | 545.00 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, vonk... | 100.50 € | **82.00 €** | 44.0 % | **17.5 %** | 82.50 € | stávame sa najlacnejší |
| Reproduktory Edifier CX7 2.1 (čierne) | 211.00 € | **192.90 €** | 15.0 % | **5.1 %** | 193.00 € | stávame sa najlacnejší |
| iRobot Roomba Plus 415 Combo+AutoWash do | 396.50 € | **378.50 €** | 10.1 % | **5.1 %** | 319.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ritter AES 62 SR | 396.50 € | **378.50 €** | 10.0 % | **5.0 %** | 356.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Concept LK3354wh | 387.50 € | **369.90 €** | 10.1 % | **5.1 %** | 347.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch 8 44mm Graphite | 373.50 € | **356.50 €** | 10.1 % | **5.1 %** | 194.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Watch 8 44mm Silver | 373.50 € | **356.50 €** | 10.1 % | **5.1 %** | 194.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LOKITHOR J3250 Pro 74,24 Wh 3250 A štartér | 198.50 € | **181.50 €** | 14.9 % | **5.1 %** | 161.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 40 m... | 61.00 € | **44.00 €** | 53.9 % | **11.0 %** | 44.26 € | stávame sa najlacnejší |
| AI slúchadlá VIAIM Open Note s diktafónom (čierne) | 192.90 € | **176.00 €** | 15.1 % | **5.0 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AI slúchadlá VIAIM Open Note s diktafónom (sivé) | 192.90 € | **176.00 €** | 15.1 % | **5.0 %** | 149.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Shark IW3612EU Detect Pro Auto-Empty | 349.50 € | **333.50 €** | 10.2 % | **5.1 %** | 305.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný dotykový monitor Uperfect UMax21 T-S 1920x1... | 279.50 € | **263.50 €** | 15.1 % | **8.5 %** | 263.76 € | stávame sa najlacnejší |
| LENOVO IDEA TAB 11 5G 8/256GB ZAFM0297CZ | 345.50 € | **329.90 €** | 10.0 % | **5.1 %** | 327.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT 51003 Vysavač okna+tyč 43cm+mop | 59.90 € | **44.50 €** | 41.4 % | **5.1 %** | 39.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock H60 Ultra Black | 345.90 € | **330.50 €** | 10.0 % | **5.1 %** | 259.04 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger&Matz KM0224-V3  24" ( 61 cm ) Smart televizor... | 176.00 € | **160.90 €** | 15.0 % | **5.1 %** | 135.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| 3D tlačiareň Creality Hi Combo | 383.90 € | **369.00 €** | 9.5 % | **5.3 %** | 369.17 € | stávame sa najlacnejší |
| LOKITHOR J402 PRO 88,8 Wh 3500 A štartér | 171.50 € | **156.90 €** | 15.0 % | **5.2 %** | 146.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Elektrický mlynček na zrnkovú kávu HiBREW G5 | 172.00 € | **157.50 €** | 14.9 % | **5.2 %** | 153.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Smartphone HOTWAV A17 Pro Max (strieborný) | 172.00 € | **157.50 €** | 14.9 % | **5.2 %** | 157.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock vysavač Q10 VF White | 312.90 € | **298.50 €** | 10.1 % | **5.1 %** | 177.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL PartyBox 330 | 559.00 € | **544.90 €** | 10.7 % | **7.9 %** | 545.00 € | stávame sa najlacnejší |
| Uperfect Portable Monitor USteam E6 Pro 18,5" 1920x1... | 273.00 € | **258.90 €** | 15.0 % | **9.0 %** | 259.00 € | stávame sa najlacnejší |
| Televize Kruger&Matz KM0232-V3  32'' HD smart DVB-T2... | 163.90 € | **149.90 €** | 15.1 % | **5.3 %** | 147.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EPSON EcoTank L4360 | 301.50 € | **287.90 €** | 10.1 % | **5.1 %** | 217.03 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OTTOCAST OTTOAIBOX N95 Monitor do auta | 159.50 € | **145.90 €** | 14.9 % | **5.1 %** | 124.71 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Průmyslový endoskop Ermenrich Seek VE50 Fialový | 160.50 € | **147.00 €** | 15.2 % | **5.5 %** | 147.05 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 52.50 € | **39.00 €** | 50.5 % | **11.8 %** | 39.16 € | stávame sa najlacnejší |
| SONY sluchátka MDR-ZX310,bílá | 29.99 € | **17.00 €** | 85.7 % | **5.3 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX310,černá | 29.99 € | **17.00 €** | 85.7 % | **5.3 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SONY sluchátka MDR-ZX310,červ. | 29.99 € | **17.00 €** | 85.7 % | **5.3 %** | 13.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy CDPH 2L1047W | 280.90 € | **268.00 €** | 10.1 % | **5.0 %** | 208.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Whirlpool WOI4S8PPM1SX | 463.50 € | **450.90 €** | 10.0 % | **7.0 %** | 451.00 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Nitro ED 8x42 | 148.00 € | **135.50 €** | 14.8 % | **5.1 %** | 104.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stmievateľná lampička s bezdrôtovým nabí... | 62.00 € | **49.50 €** | 37.7 % | **10.0 %** | 49.90 € | stávame sa najlacnejší |
| Meteorologická stanice s 24hod /7denní předpovědí GA... | 298.50 € | **286.00 €** | 14.8 % | **10.0 %** | 286.44 € | stávame sa najlacnejší |
| HP OfficeJet Pro 9132e AiO HP+ (404M5B) | 273.00 € | **260.90 €** | 10.0 % | **5.1 %** | 208.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica PPS 61002 W | 249.00 € | **236.90 €** | 10.4 % | **5.0 %** | 232.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Edifier R1700BT white speakers | 135.50 € | **123.50 €** | 15.2 % | **5.0 %** | 102.83 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 76.50 € | **64.50 €** | 43.6 % | **21.1 %** | 64.90 € | stávame sa najlacnejší |
| JBL TOUR ONE M3, Black | 276.90 € | **265.00 €** | 10.1 % | **5.4 %** | 265.24 € | stávame sa najlacnejší |
| JBL TOUR ONE M3, Latte | 276.90 € | **265.00 €** | 10.1 % | **5.4 %** | 265.24 € | stávame sa najlacnejší |
| Amica GWAS610DL | 254.50 € | **242.90 €** | 10.1 % | **5.1 %** | 237.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TCL 43S5K QLED FullHD SMART Android TV | 257.50 € | **245.90 €** | 10.0 % | **5.1 %** | 243.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 051690000 | 75.99 € | **64.50 €** | 30.0 % | **10.3 %** | 64.58 € | stávame sa najlacnejší |
| Whirlpool W55Z1 112W | 258.90 € | **247.50 €** | 10.0 % | **5.2 %** | 228.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OfficeJet 9730e AiO (537P6B) | 243.00 € | **231.90 €** | 10.0 % | **5.0 %** | 206.31 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 126490000 | 52.99 € | **41.90 €** | 32.8 % | **5.0 %** | 39.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Strong Mira 1 přenosný projektor | 242.50 € | **231.50 €** | 10.0 % | **5.0 %** | 191.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje R49DPW | 239.90 € | **229.00 €** | 10.0 % | **5.0 %** | 199.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkové lano DBX Bushido C15 | 125.90 € | **115.00 €** | 15.0 % | **5.0 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gorenje WSAP84AWI | 377.50 € | **366.90 €** | 10.1 % | **7.0 %** | 367.00 € | stávame sa najlacnejší |
| Solight alkohol tester profesionálny, Fuel Cell, 0,0... | 59.50 € | **48.90 €** | 40.2 % | **15.2 %** | 49.00 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3406B 700W 12V | 125.00 € | **114.50 €** | 15.0 % | **5.4 %** | 113.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla GSM-01 zesilovač/opakovač 900 MHz - kompletní ... | 120.50 € | **110.00 €** | 15.1 % | **5.0 %** | 109.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier S360DB 2.1 (hnedé) | 344.50 € | **334.00 €** | 10.1 % | **6.8 %** | 334.01 € | stávame sa najlacnejší |
| Ninja NC302EU CREAMi 7v1 zmrzlinovač | 238.90 € | **228.50 €** | 10.0 % | **5.2 %** | 188.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS8751 white | 218.90 € | **208.90 €** | 10.0 % | **5.0 %** | 161.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GUZZANTI GZ 85 | 221.50 € | **211.50 €** | 10.1 % | **5.2 %** | 203.15 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C6 WiFi Dual Band Router | 44.90 € | **34.90 €** | 35.3 % | **5.1 %** | 31.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Maxxo LED800 antracit | 309.50 € | **299.50 €** | 10.0 % | **6.5 %** | 299.63 € | stávame sa najlacnejší |
| Maxxo LED800 bílý | 309.50 € | **299.50 €** | 10.0 % | **6.5 %** | 299.63 € | stávame sa najlacnejší |
| Záložní zdroj MHPower MPU-1050-24 UPS 1050W 24V čist... | 157.50 € | **147.50 €** | 14.9 % | **7.6 %** | 147.69 € | stávame sa najlacnejší |
| Herná súprava PXN-V10 Ultra - volant + pedál + svork... | 207.00 € | **197.00 €** | 14.9 % | **9.4 %** | 197.24 € | stávame sa najlacnejší |
| Gorenje GS541C10W | 354.50 € | **344.50 €** | 10.0 % | **6.9 %** | 344.90 € | stávame sa najlacnejší |
| HP OfficeJet 9720e AiO (53N95B) | 214.90 € | **205.00 €** | 10.1 % | **5.0 %** | 128.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Výrobník ľadu Euhomy IM08, 1,2 l, 12 kg (strieborný) | 114.90 € | **105.00 €** | 15.0 % | **5.1 %** | 94.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja SL400EU Double Stack MAX 9,5l | 215.50 € | **205.90 €** | 10.0 % | **5.1 %** | 172.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED smart stojaca lampa Rainbow, wifi, RGB, ... | 40.00 € | **30.50 €** | 37.8 % | **5.1 %** | 18.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Multifunkčný detektor ionizujúceho žiarenia FNIRSI G... | 112.00 € | **102.50 €** | 15.0 % | **5.3 %** | 91.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL PartyBox On-The-GO 2 | 296.00 € | **286.50 €** | 8.6 % | **5.1 %** | 285.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný fotorámik Lexar PX-110BLKGLR (čierny) 11" | 169.00 € | **159.50 €** | 14.9 % | **8.5 %** | 159.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, vonk... | 58.00 € | **48.50 €** | 43.5 % | **20.0 %** | 48.90 € | stávame sa najlacnejší |
| ETA 227090000 | 52.99 € | **43.50 €** | 29.4 % | **6.2 %** | 38.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ZEUSLAP P16 Plus – prenosný 16-palcový monitor | 148.90 € | **139.50 €** | 15.1 % | **7.9 %** | 139.90 € | stávame sa najlacnejší |
| AB CryptoBox 742 HD Combo | 105.00 € | **95.90 €** | 15.0 % | **5.0 %** | 84.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio OpenRock Link 20 (čierne) | 107.00 € | **97.90 €** | 15.0 % | **5.2 %** | 92.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Odvlhčovač vzduchu TEESA TSA8077 | 108.00 € | **98.90 €** | 14.9 % | **5.2 %** | 97.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gramofon KRUGER & MATZ TT-501 | 109.00 € | **99.90 €** | 14.8 % | **5.2 %** | 99.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zdroj záložní KEMOT PROsinus URZ3409 500W 12V nástěnný | 108.50 € | **99.50 €** | 14.9 % | **5.4 %** | 88.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight domáca kamera s nočným svetlom a hodinami | 44.00 € | **35.00 €** | 74.3 % | **38.7 %** | 35.14 € | stávame sa najlacnejší |
| AKAI AS005RA-750B Zesilovač 5.1 | 238.50 € | **229.50 €** | 10.1 % | **5.9 %** | 229.76 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 50m,... | 78.50 € | **69.50 €** | 44.3 % | **27.8 %** | 69.90 € | stávame sa najlacnejší |
| Gorenje DPNE83/GNLWIFI | 484.50 € | **475.90 €** | 7.0 % | **5.1 %** | 399.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkové lano DBX Bushido C12 | 101.50 € | **92.90 €** | 14.9 % | **5.2 %** | 81.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger&Matz KM0816.1 | 99.50 € | **90.90 €** | 14.9 % | **5.0 %** | 88.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 25m,... | 45.50 € | **37.00 €** | 44.1 % | **17.2 %** | 37.50 € | stávame sa najlacnejší |
| AB CryptoBox 740 HD | 96.90 € | **88.50 €** | 15.1 % | **5.1 %** | 77.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Powerbank Baseus OS Free2Pull 10000mAh 30W +cable (b... | 26.90 € | **18.50 €** | 64.1 % | **12.8 %** | 18.89 € | stávame sa najlacnejší |
| Candy ECNBQT3518E Fresco | 491.00 € | **482.90 €** | 9.2 % | **7.4 %** | 482.95 € | stávame sa najlacnejší |
| Dětské odrážedlo NILS Fun RB901 s 12" pumpovanými ko... | 97.00 € | **88.90 €** | 14.9 % | **5.3 %** | 84.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight profesionálna meteostanica, prehľadný a diza... | 71.90 € | **63.90 €** | 40.1 % | **24.5 %** | 63.98 € | stávame sa najlacnejší |
| Redmi Pad 2 9.7 4/64GB Silver (76954) | 174.50 € | **166.50 €** | 10.3 % | **5.2 %** | 152.44 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Redmi Pad 2 9.7 4/64GB Gray (76950) | 174.50 € | **166.50 €** | 10.3 % | **5.2 %** | 153.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| KÁVOVAR 4 v 1 HiBREW H1A-biely (biely) | 99.50 € | **91.50 €** | 14.8 % | **5.5 %** | 88.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 12W, voľba... | 47.50 € | **39.50 €** | 38.3 % | **15.0 %** | 39.90 € | stávame sa najlacnejší |
| Leifheit Pegasus 150 Solid Slim BLACK | 39.90 € | **32.00 €** | 35.4 % | **8.6 %** | 32.32 € | stávame sa najlacnejší |
| JBL Charge 6, bílý | 166.50 € | **158.90 €** | 10.1 % | **5.0 %** | 128.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 6, růžový | 166.50 € | **158.90 €** | 10.1 % | **5.0 %** | 128.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny notebook Huion Note X10 | 88.50 € | **80.90 €** | 15.2 % | **5.3 %** | 53.74 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod na bubne, 4 zásuvky, 50m,... | 76.50 € | **68.90 €** | 43.6 % | **29.4 %** | 69.00 € | stávame sa najlacnejší |
| Kuchyňský robot TEESA TSA3545-W EASY COOK SINGLE WHI... | 84.90 € | **77.50 €** | 15.2 % | **5.2 %** | 58.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkový blok DBX BUSHIDO T75 | 86.90 € | **79.50 €** | 15.1 % | **5.3 %** | 66.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 110390000 | 39.99 € | **32.90 €** | 28.0 % | **5.3 %** | 30.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP OfficeJet Pro 8132e AiO HP+ (40Q45B) | 150.90 € | **143.90 €** | 10.2 % | **5.1 %** | 93.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Charge 5 white | 146.50 € | **139.50 €** | 10.3 % | **5.0 %** | 116.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 1588/04 | 147.50 € | **140.50 €** | 10.2 % | **5.0 %** | 128.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Edifier QS30 Computer soundbar (black) | 81.50 € | **74.50 €** | 15.2 % | **5.3 %** | 65.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Edifier QS30 Computer soundbar (white) | 81.50 € | **74.50 €** | 15.2 % | **5.3 %** | 65.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sony SRS-LS1 LinkBuds speaker, černý | 152.50 € | **145.50 €** | 10.2 % | **5.2 %** | 137.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TD-W9960 VDSL Router | 42.90 € | **35.90 €** | 25.9 % | **5.3 %** | 32.52 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosný kávovar 3 v 1 s puzdrom HiBREW H4-premium 80W | 85.50 € | **78.50 €** | 14.8 % | **5.4 %** | 77.42 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled monokulární se zaměřovačem LEVENHUK Camo ... | 80.50 € | **73.50 €** | 15.3 % | **5.3 %** | 73.69 € | stávame sa najlacnejší |
| Kávovar HiBREW H11 1450 W | 112.50 € | **105.50 €** | 15.0 % | **7.9 %** | 105.73 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, biela | 28.50 € | **21.50 €** | 58.5 % | **19.6 %** | 21.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod na bubne, 1 zásuvka, 25m,... | 48.90 € | **42.00 €** | 43.9 % | **23.6 %** | 42.50 € | stávame sa najlacnejší |
| AMIKO 9265+ DVB-S2/T2/C kombo přijímač 4K | 76.50 € | **69.90 €** | 15.2 % | **5.3 %** | 67.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkové lano DBX Bushido C9 | 77.50 € | **71.00 €** | 14.7 % | **5.1 %** | 52.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Suspenzor DBX BUSHIDO DBX-GG1 ProFighter | 73.50 € | **67.00 €** | 15.3 % | **5.1 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Suspenzor DBX BUSHIDO DBX-GG1 ProFighter | 73.50 € | **67.00 €** | 15.3 % | **5.1 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Suspenzor DBX BUSHIDO DBX-GG1 ProFighter | 73.50 € | **67.00 €** | 15.3 % | **5.1 %** | 54.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER DCP-1510E | 141.50 € | **135.00 €** | 10.1 % | **5.0 %** | 125.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CP PLUS CP-UNC-DA21PL3-V3-0280 2.0 Mpix venkovní IP ... | 87.00 € | **80.50 €** | 13.5 % | **5.1 %** | 74.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON SELPHY CP-1500 Black | 149.00 € | **142.50 €** | 10.0 % | **5.2 %** | 137.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Woody, ... | 41.00 € | **34.50 €** | 38.3 % | **16.3 %** | 34.90 € | stávame sa najlacnejší |
| Samsung Galaxy Buds3 Silver | 139.90 € | **133.50 €** | 10.2 % | **5.1 %** | 75.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung Galaxy Buds3 White | 139.90 € | **133.50 €** | 10.2 % | **5.1 %** | 75.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Venkovní sušák Linomatic 500 Pl | 140.90 € | **134.50 €** | 10.0 % | **5.0 %** | 114.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla AeroStar T700 | 84.90 € | **78.50 €** | 13.8 % | **5.3 %** | 70.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LOKITHOR J1350 Pro 25,6 Wh štartér | 74.90 € | **68.50 €** | 15.2 % | **5.4 %** | 65.77 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kaon MZ-52 - DOTOVANÝ PŘIJÍMAČ | 73.00 € | **66.90 €** | 15.0 % | **5.4 %** | 62.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chrániče holení DBX BUSHIDO SP-10v6 | 68.90 € | **62.90 €** | 15.3 % | **5.3 %** | 39.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič hrudníku DBX Bushido OT01 | 68.90 € | **62.90 €** | 15.3 % | **5.3 %** | 42.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič hrudníku DBX Bushido OT01 | 68.90 € | **62.90 €** | 15.3 % | **5.3 %** | 42.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Titan GPS Black - 9141 | 135.90 € | **129.90 €** | 10.1 % | **5.3 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Titan GPS Silver - 9142 | 135.90 € | **129.90 €** | 10.1 % | **5.3 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 128 | 130.90 € | **124.90 €** | 10.1 % | **5.1 %** | 104.16 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (black) | 71.90 € | **65.90 €** | 15.0 % | **5.4 %** | 45.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS7750i White | 138.90 € | **132.90 €** | 10.0 % | **5.3 %** | 118.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Candy FIDC N100 | 139.50 € | **133.50 €** | 10.1 % | **5.4 %** | 126.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal SV9201E0 | 196.90 € | **190.90 €** | 10.0 % | **6.7 %** | 190.99 € | stávame sa najlacnejší |
| Strong LEAP-S3 Google TV 4K UHD Android TV multimedi... | 70.50 € | **64.50 €** | 14.8 % | **5.1 %** | 64.82 € | stávame sa najlacnejší |
| Sada filtrov Freewell pre DJI Mini 5 Pro Mega Kit | 130.50 € | **124.50 €** | 15.2 % | **9.9 %** | 124.83 € | stávame sa najlacnejší |
| Detektor oxidu uhličitého CO2 Levenhuk Wezzer PLUS LP90 | 72.50 € | **66.50 €** | 15.2 % | **5.7 %** | 66.89 € | stávame sa najlacnejší |
| Tesla EliteCook K70 WiFi tlakový hrnec | 127.90 € | **122.00 €** | 10.1 % | **5.0 %** | 98.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerská helma DBX BUSHIDO ARH-2192 | 65.50 € | **59.90 €** | 15.0 % | **5.2 %** | 40.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerská helma DBX BUSHIDO ARH-2193 | 62.50 € | **56.90 €** | 15.4 % | **5.0 %** | 46.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerská helma DBX BUSHIDO ARH-2193 | 62.50 € | **56.90 €** | 15.4 % | **5.0 %** | 46.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| OPENBOX ForTe2 HYBRID DVB-T2 (Android 9, USB 2.0/3.0... | 67.50 € | **61.90 €** | 14.8 % | **5.3 %** | 61.99 € | stávame sa najlacnejší |
| HP OfficeJet Pro 8122e AiO HP+ (405U3B) | 130.50 € | **124.90 €** | 10.0 % | **5.3 %** | 64.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Titan GPS Black - 9139 | 123.50 € | **117.90 €** | 10.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Titan GPS Silver - 9140 | 123.50 € | **117.90 €** | 10.1 % | **5.1 %** | 99.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4696 Kuchyňský robot | 124.50 € | **118.90 €** | 10.0 % | **5.1 %** | 106.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Amica OTP6641BG | 120.50 € | **114.90 €** | 10.4 % | **5.3 %** | 107.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hliníkový statív Neewer SAB264 s monopodom a panoram... | 61.50 € | **56.00 €** | 15.4 % | **5.1 %** | 45.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný dávkovač krmiva WiFi Oneisall 5L PF08 | 66.00 € | **60.50 €** | 15.0 % | **5.4 %** | 55.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled pozorovací LEVENHUK SG2 | 69.00 € | **63.50 €** | 14.9 % | **5.7 %** | 58.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vonkajšia IP kamera s LED světlom | 38.50 € | **33.00 €** | 61.7 % | **38.6 %** | 33.14 € | stávame sa najlacnejší |
| Meteorologická stanice WS 9050 | 70.00 € | **64.50 €** | 14.9 % | **5.9 %** | 64.69 € | stávame sa najlacnejší |
| Victron Energy VE.Bus BMS | 146.00 € | **140.50 €** | 15.0 % | **10.7 %** | 140.79 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine MA10410 | 81.00 € | **75.50 €** | 14.7 % | **6.9 %** | 75.79 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička 2v1, podstavec aj ... | 27.00 € | **21.50 €** | 38.2 % | **10.1 %** | 21.90 € | stávame sa najlacnejší |
| Instant Pot Classic XL (7,1 L) | 165.90 € | **160.50 €** | 8.9 % | **5.3 %** | 155.72 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| FoodSaver VS2190X | 112.90 € | **107.50 €** | 10.3 % | **5.0 %** | 106.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Astroplanetárium LEVENHUK LabZZ SP10 Astralis | 71.90 € | **66.50 €** | 15.2 % | **6.6 %** | 66.79 € | stávame sa najlacnejší |
| G3ferrari G1018700 Multifunkční trouba | 150.90 € | **145.50 €** | 10.1 % | **6.2 %** | 145.90 € | stávame sa najlacnejší |
| Sada pro trénink boxu DBX BUSHIDO DBX Kids60.2 červená | 64.00 € | **58.90 €** | 14.8 % | **5.6 %** | 29.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prémiové MMA rukavice DBX BUSHIDO Warrior černé | 64.00 € | **58.90 €** | 14.8 % | **5.6 %** | 49.07 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chrániče kolen DBX BUSHIDO DBX-KG | 64.00 € | **58.90 €** | 14.8 % | **5.6 %** | 49.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chrániče loktů DBX BUSHIDO DBX-EG | 64.00 € | **58.90 €** | 14.8 % | **5.6 %** | 49.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor hořlavých plynů GD-3300 | 63.00 € | **57.90 €** | 14.9 % | **5.6 %** | 57.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ETA 859990040 | 31.99 € | **26.90 €** | 26.6 % | **6.4 %** | 26.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 780NC Blue | 105.90 € | **100.90 €** | 10.3 % | **5.1 %** | 73.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Tune 780NC White | 105.90 € | **100.90 €** | 10.3 % | **5.1 %** | 73.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Flip 7, černý | 114.90 € | **109.90 €** | 10.1 % | **5.4 %** | 92.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ROWENTA RY6555WH | 105.90 € | **100.90 €** | 10.3 % | **5.1 %** | 94.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Vakuová svářečka folií Ruhhy 22533 | 59.50 € | **54.50 €** | 14.8 % | **5.1 %** | 50.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Meteorologická stanice GARNI 612 Precise | 63.50 € | **58.50 €** | 14.8 % | **5.7 %** | 58.52 € | stávame sa najlacnejší |
| Športové okuliare ZEBLAZE Q01 Green AI | 67.50 € | **62.50 €** | 14.8 % | **6.3 %** | 62.58 € | stávame sa najlacnejší |
| Športové okuliare ZEBLAZE Q01 s umelou inteligenciou... | 67.50 € | **62.50 €** | 14.8 % | **6.3 %** | 62.58 € | stávame sa najlacnejší |
| Planetárium Levenhuk Star Sky P9 | 63.50 € | **58.50 €** | 15.4 % | **6.3 %** | 58.79 € | stávame sa najlacnejší |
| ZEUSLAP P16 – prenosný 16-palcový monitor | 124.50 € | **119.50 €** | 14.9 % | **10.2 %** | 119.90 € | stávame sa najlacnejší |
| JBL Partybox Wireless Mic | 110.00 € | **105.00 €** | 10.1 % | **5.1 %** | 105.40 € | stávame sa najlacnejší |
| D-LINK 8-Port Gigabit Switch (DMS-108/E) | 105.90 € | **101.00 €** | 10.1 % | **5.0 %** | 92.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4262 | 104.90 € | **100.00 €** | 10.2 % | **5.1 %** | 94.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight vianočný stromček 45cm, 15LED, 3x AA, IP44, ... | 15.90 € | **11.00 €** | 56.1 % | **8.0 %** | 11.16 € | stávame sa najlacnejší |
| Reproduktory Edifier S1000MKII 2.0 (hnedé) | 266.50 € | **261.90 €** | 13.3 % | **11.3 %** | 261.91 € | stávame sa najlacnejší |
| Electrolux 600 Gril EMS4253TBX | 271.50 € | **266.90 €** | 10.0 % | **8.1 %** | 267.00 € | stávame sa najlacnejší |
| Meteorologická stanice TechnoLine WS 9251 | 57.50 € | **52.90 €** | 15.5 % | **6.2 %** | 52.99 € | stávame sa najlacnejší |
| Nutribullet Turbo NBT1006MB | 103.50 € | **98.90 €** | 10.1 % | **5.2 %** | 88.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 500 | 96.50 € | **91.90 €** | 15.1 % | **9.6 %** | 91.96 € | stávame sa najlacnejší |
| Rojeco 2L WiFi automatický dávkovač krmiva (biely) | 57.00 € | **52.50 €** | 14.6 % | **5.6 %** | 38.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkový blok DBX BUSHIDO T55 | 55.00 € | **50.50 €** | 15.1 % | **5.7 %** | 40.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruhový tréninkový blok DBX BUSHIDO KS-2 40 cm | 55.00 € | **50.50 €** | 15.1 % | **5.7 %** | 41.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Linomatic 400 Easy 85285 | 98.50 € | **94.00 €** | 10.1 % | **5.1 %** | 88.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Spájkovacia stanica FNIRSI DWS-200 F | 133.00 € | **128.50 €** | 9.0 % | **5.3 %** | 125.37 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA TSA5035 elektrický mop | 109.00 € | **104.50 €** | 10.0 % | **5.5 %** | 101.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ozvučovací systém KRUGER MATZ KM1718 | 210.00 € | **205.50 €** | 15.0 % | **12.6 %** | 205.53 € | stávame sa najlacnejší |
| Solight LED vonkajšia dekorácia stromček, 85x LED, č... | 15.00 € | **10.50 €** | 53.2 % | **7.2 %** | 10.76 € | stávame sa najlacnejší |
| Kruger & Matz BT-1 KM0352 Bluetooth transmitter 2v1 ... | 52.00 € | **47.50 €** | 15.1 % | **5.1 %** | 47.79 € | stávame sa najlacnejší |
| Solight LED solárne svetlo so senzorom, 8W, 600lm, L... | 28.00 € | **23.50 €** | 38.4 % | **16.1 %** | 23.90 € | stávame sa najlacnejší |
| Solight otočná IP kamera | 39.00 € | **34.50 €** | 41.4 % | **25.1 %** | 34.90 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 8z, USB A+C, 2m, čierna | 28.50 € | **24.00 €** | 58.5 % | **33.5 %** | 24.49 € | stávame sa najlacnejší |
| ETA 051790000 | 79.99 € | **75.50 €** | 11.7 % | **5.5 %** | 67.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remoska R301002 6,3l VentoSteamChef | 95.90 € | **91.50 €** | 10.2 % | **5.2 %** | 88.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE ECT601FM | 137.90 € | **133.50 €** | 10.0 % | **6.5 %** | 133.90 € | stávame sa najlacnejší |
| Počítačová skriňa Cooler Master CMP 520 (čierna) | 49.90 € | **45.50 €** | 15.2 % | **5.0 %** | 40.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Earphones TWS Baseus Eli Sport 1, (white) | 53.90 € | **49.50 €** | 15.2 % | **5.8 %** | 45.33 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED stmievateľná lampička s nočným svetielko... | 32.90 € | **28.50 €** | 38.9 % | **20.3 %** | 28.90 € | stávame sa najlacnejší |
| Telefon GSM Kruger&Matz IRON 4 4G odolný | 52.00 € | **47.90 €** | 14.9 % | **5.9 %** | 43.66 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Nutribullet® CrispLite 6L NBA0611DG | 90.00 € | **85.90 €** | 10.1 % | **5.1 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO DBD-B-3 | 48.00 € | **44.00 €** | 14.8 % | **5.2 %** | 12.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TS6550i White | 92.50 € | **88.50 €** | 10.0 % | **5.3 %** | 57.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tréninkový blok DBX BUSHIDO T42b | 52.50 € | **48.50 €** | 14.6 % | **5.9 %** | 25.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| SAMSUNG S30GD (LS27D300GAUXEN) | 97.50 € | **93.50 €** | 10.1 % | **5.5 %** | 73.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Oboustranné boxerské lapy DBX BUSHIDO ARF-1119 | 49.90 € | **45.90 €** | 15.0 % | **5.7 %** | 35.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa DarkFlash C365 (čierna) | 46.00 € | **42.00 €** | 15.1 % | **5.1 %** | 31.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Guzzanti GZ 3641A | 136.50 € | **132.50 €** | 8.3 % | **5.1 %** | 123.87 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruhový tréninkový blok DBX BUSHIDO TO-Black 40 cm | 49.90 € | **45.90 €** | 15.0 % | **5.7 %** | 38.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruhový tréninkový blok DBX BUSHIDO TO-Red 40 cm | 49.90 € | **45.90 €** | 15.0 % | **5.7 %** | 38.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BROTHER HL-1110E | 92.50 € | **88.50 €** | 10.1 % | **5.4 %** | 81.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky C50 (sivé) | 48.90 € | **44.90 €** | 15.0 % | **5.6 %** | 39.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držiak na bicykel Baseus PrimeTrip 2 v 1, držiak na ... | 47.00 € | **43.00 €** | 14.9 % | **5.1 %** | 38.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tesla LifeStar UV550 | 84.50 € | **80.50 €** | 10.3 % | **5.1 %** | 77.25 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Colmi i28 Ultra smartwatch (black) | 46.00 € | **42.00 €** | 15.1 % | **5.1 %** | 38.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| COLMI G06 Inteligentné okuliare Čierne | 46.00 € | **42.00 €** | 15.1 % | **5.1 %** | 40.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Positano stolní mixér 583/PO | 80.50 € | **76.50 €** | 10.5 % | **5.0 %** | 74.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B GRAY | 85.50 € | **81.50 €** | 10.3 % | **5.1 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B GREEN | 85.50 € | **81.50 €** | 10.3 % | **5.1 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dalekohled binokulární LEVENHUK Travel 10x25 | 46.50 € | **42.50 €** | 15.5 % | **5.6 %** | 41.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B BLUE | 84.90 € | **80.90 €** | 10.4 % | **5.2 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| YAMAHA TW-E3B PURPLE | 84.90 € | **80.90 €** | 10.4 % | **5.2 %** | 79.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 460 s FM radiopřijímačem | 49.50 € | **45.50 €** | 14.6 % | **5.3 %** | 44.76 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Samsung WMN-B50EB/XC | 82.50 € | **78.50 €** | 10.6 % | **5.3 %** | 78.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Apple MacBook Neo 8/256GB indigo MHFF4CZ | 806.90 € | **802.90 €** | 5.5 % | **5.0 %** | 803.00 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Explorer | 55.50 € | **51.50 €** | 14.8 % | **6.5 %** | 51.89 € | stávame sa najlacnejší |
| TP-LINK Tapo P100 (1-pack) WiFi zásuvka | 15.99 € | **12.00 €** | 40.5 % | **5.5 %** | 6.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrátové čidlo pro měření 2 teplot a relativní vlh... | 43.90 € | **40.00 €** | 15.3 % | **5.0 %** | 39.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight nabíjačka batérií Li-Ion, LiFePO4, Ni-MH/CD,... | 19.50 € | **15.90 €** | 46.0 % | **19.0 %** | 16.00 € | stávame sa najlacnejší |
| HP ENVY 6120e AiO (714L8B) | 82.50 € | **78.90 €** | 10.3 % | **5.5 %** | 39.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black+Decker BXSM1000E | 78.50 € | **74.90 €** | 10.1 % | **5.1 %** | 74.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (DMS-105/E) | 70.50 € | **66.90 €** | 10.8 % | **5.1 %** | 66.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální piano Kruger&Matz KMDP-45-BK  černé | 239.50 € | **235.90 €** | 15.0 % | **13.3 %** | 235.99 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Rose Gold - 9155 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Candywatch 5 GPS Silver - 9154 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Black - 9148 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Gold - 9150 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Armodd Prime 3 GPS Rose Gold - 9151 | 92.50 € | **88.90 €** | 10.1 % | **5.8 %** | 89.00 € | stávame sa najlacnejší |
| Garett Atom Black Steel | 75.50 € | **71.90 €** | 10.5 % | **5.2 %** | 72.00 € | stávame sa najlacnejší |
| Počítačová skriňa Cooler Master CMP 520L (čierna) | 39.50 € | **36.00 €** | 15.4 % | **5.1 %** | 30.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W + COB, 15... | 11.00 € | **7.50 €** | 54.5 % | **5.3 %** | 3.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Gens ace G-Tech 5000mAh 14.8V 4S1P 60C Lipo Battery ... | 47.00 € | **43.50 €** | 14.6 % | **6.1 %** | 42.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínač garážových brán Meross MSG100HK ... | 44.00 € | **40.50 €** | 14.5 % | **5.4 %** | 39.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kuchyňský robot Ruhhy 25728 | 151.50 € | **148.00 €** | 15.2 % | **12.5 %** | 148.04 € | stávame sa najlacnejší |
| Televízny adaptér do auta MAX Ottocast CA361-C4 | 55.50 € | **52.00 €** | 15.2 % | **7.9 %** | 52.17 € | stávame sa najlacnejší |
| DOMO DO42324PC | 88.50 € | **85.00 €** | 10.1 % | **5.8 %** | 85.19 € | stávame sa najlacnejší |
| Mini stepper Rebel Active RBA-3226 | 56.50 € | **53.00 €** | 14.8 % | **7.7 %** | 53.28 € | stávame sa najlacnejší |
| CANON PIXMA G3430 Black | 149.50 € | **146.00 €** | 10.3 % | **7.8 %** | 146.37 € | stávame sa najlacnejší |
| Solight LED stmievateľná stolná lampička s displejom... | 27.00 € | **23.50 €** | 37.0 % | **19.3 %** | 23.90 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24 Ah MHPower MS24-12 | 47.00 € | **43.50 €** | 15.0 % | **6.4 %** | 43.90 € | stávame sa najlacnejší |
| ROWENTA RO 3923 EA | 81.90 € | **78.50 €** | 10.1 % | **5.5 %** | 66.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON PIXMA TR4756i White | 79.90 € | **76.50 €** | 10.3 % | **5.6 %** | 65.94 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Remoska R301001 5,5l Vento | 73.90 € | **70.50 €** | 10.4 % | **5.3 %** | 68.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.50 €** | 15.0 % | **9.3 %** | 65.90 € | stávame sa najlacnejší |
| Reproduktory Edifier HECATE G2000 2.0 (čierne) | 68.90 € | **65.50 €** | 15.0 % | **9.3 %** | 65.90 € | stávame sa najlacnejší |
| Stropné svietidlo Yeelight C2201C235 | 40.90 € | **37.50 €** | 15.4 % | **5.8 %** | 37.80 € | stávame sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ JOY 2 KM0561 | 43.90 € | **40.50 €** | 15.0 % | **6.1 %** | 40.89 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Melobuds N65 (biele) | 39.00 € | **35.90 €** | 14.9 % | **5.7 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá QCY Melobuds N65 (čierne) | 39.00 € | **35.90 €** | 14.9 % | **5.7 %** | 31.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětské odrážedlo NILS Fun RB134 10" modré | 39.00 € | **35.90 €** | 14.3 % | **5.3 %** | 32.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětské odrážedlo NILS Fun RB134 10" černé | 39.00 € | **35.90 €** | 14.3 % | **5.3 %** | 32.67 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětské odrážedlo NILS Fun RB134 10" zelené | 39.00 € | **35.90 €** | 14.3 % | **5.3 %** | 32.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý kožený... | 40.00 € | **36.90 €** | 14.8 % | **5.9 %** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa DarkFlash B275 (biela) | 46.00 € | **42.90 €** | 15.1 % | **7.3 %** | 43.00 € | stávame sa najlacnejší |
| Breville VST070X | 71.00 € | **67.90 €** | 10.1 % | **5.3 %** | 67.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 černá | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 44.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Wave Beam 2 modrá | 69.50 € | **66.50 €** | 10.1 % | **5.3 %** | 44.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo C225 | 71.50 € | **68.50 €** | 10.3 % | **5.7 %** | 52.13 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| HP 117A Cyan Laser Toner, W2071A | 64.50 € | **61.50 €** | 10.6 % | **5.4 %** | 49.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit SET Vysavač na okna a koupelny | 64.50 € | **61.50 €** | 10.6 % | **5.4 %** | 50.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pytlové rukavice DBX BUSHIDO ARB-727 | 38.90 € | **35.90 €** | 14.9 % | **6.1 %** | 24.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA Rukavice DBX BUSHIDO E1v9-B | 41.50 € | **38.50 €** | 14.5 % | **6.2 %** | 29.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Armodd Slim Black - 9162 | 69.50 € | **66.50 €** | 10.4 % | **5.6 %** | 59.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chrániče nártu a kotníku DBX BUSHIDO ARS-2054 | 34.50 € | **31.50 €** | 15.5 % | **5.5 %** | 24.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chrániče nártu a kotníku DBX BUSHIDO ARS-2054 | 34.50 € | **31.50 €** | 15.5 % | **5.5 %** | 24.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chrániče nártu a kotníku DBX BUSHIDO ARS-2054 | 34.50 € | **31.50 €** | 15.5 % | **5.5 %** | 24.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chrániče nártu a kotníku DBX BUSHIDO ARS-2054 | 34.50 € | **31.50 €** | 15.5 % | **5.5 %** | 24.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete Steam Mop Foldable 10in1 4175 | 66.50 € | **63.50 €** | 10.8 % | **5.8 %** | 57.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXVMS602E Tyčový vysavač | 60.90 € | **57.90 €** | 10.6 % | **5.1 %** | 53.08 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Profi XL + náhrada Static Plus | 62.50 € | **59.50 €** | 10.3 % | **5.0 %** | 56.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AKAI ABTS-45 Přenosný BT reproduktor | 66.50 € | **63.50 €** | 10.1 % | **5.1 %** | 61.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Suspenzor DBX BUSHIDO DBX-GG2 Warrior | 36.50 € | **33.50 €** | 14.6 % | **5.2 %** | 32.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Suspenzor DBX BUSHIDO DBX-GG2 Warrior | 36.50 € | **33.50 €** | 14.6 % | **5.2 %** | 32.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Suspenzor DBX BUSHIDO DBX-GG2 Warrior | 36.50 € | **33.50 €** | 14.6 % | **5.2 %** | 32.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pamäťová karta Lexar Professional SILVER PLUS SDXC 6... | 39.50 € | **36.50 €** | 15.2 % | **6.4 %** | 35.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální projekční TechnoLine WT 519 | 35.00 € | **32.00 €** | 14.9 % | **5.0 %** | 31.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky COLMI L28 (čierne + čierny oceľ... | 39.50 € | **36.50 €** | 14.5 % | **5.8 %** | 36.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji série X1... | 121.00 € | **118.00 €** | 14.9 % | **12.0 %** | 118.04 € | stávame sa najlacnejší |
| Horkovzdušná fritéza TEESA TSA8053  DIGITAL AIR FRYE... | 34.50 € | **31.50 €** | 15.1 % | **5.1 %** | 31.55 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (hnedé) | 39.90 € | **36.90 €** | 15.2 % | **6.6 %** | 36.95 € | stávame sa najlacnejší |
| Domo DO42323PC | 80.90 € | **77.90 €** | 10.1 % | **6.0 %** | 77.99 € | stávame sa najlacnejší |
| Športové okuliare Colmi V06 AI (čierne s modrými skl... | 74.50 € | **71.50 €** | 15.0 % | **10.4 %** | 71.67 € | stávame sa najlacnejší |
| Solight LED stmievateľná lampička s RGB podsvietením... | 44.50 € | **41.50 €** | 38.6 % | **29.2 %** | 41.90 € | stávame sa najlacnejší |
| DOMO DO737BL | 62.50 € | **59.50 €** | 10.7 % | **5.4 %** | 59.90 € | stávame sa najlacnejší |
| Ariete ART 1342/04 | 72.50 € | **69.50 €** | 10.1 % | **5.5 %** | 69.90 € | stávame sa najlacnejší |
| Rowenta IN5011F0 | 122.50 € | **119.50 €** | 10.2 % | **7.5 %** | 119.90 € | stávame sa najlacnejší |
| Inteligentné hodinky COLMI L28 (zlaté + zlatý oceľov... | 38.90 € | **36.00 €** | 14.9 % | **6.3 %** | 36.29 € | stávame sa najlacnejší |
| Bazénové bezdrátové čidlo GARNI 057P | 40.90 € | **38.00 €** | 15.1 % | **7.0 %** | 38.36 € | stávame sa najlacnejší |
| Torras Ostand R Fusion Case for iPhone 16 (Pink) | 28.50 € | **25.90 €** | 15.9 % | **5.3 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ARDES 4C03 | 53.50 € | **50.90 €** | 10.6 % | **5.2 %** | 41.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO E1v7 | 29.50 € | **26.90 €** | 15.8 % | **5.6 %** | 19.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětské odrážedlo NILS Fun RB002 fialové | 31.50 € | **28.90 €** | 14.5 % | **5.1 %** | 23.01 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dětské odrážedlo NILS Fun RB002 modré | 31.50 € | **28.90 €** | 14.5 % | **5.1 %** | 24.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rádio KRUGER & MATZ KM0828 analogové stolní | 30.50 € | **27.90 €** | 15.5 % | **5.6 %** | 23.41 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 413/03 | 55.50 € | **52.90 €** | 10.7 % | **5.5 %** | 51.12 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ninja BC151EUNV Blast Přenosný mixér | 53.50 € | **50.90 €** | 10.5 % | **5.1 %** | 49.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stolný ramenný stojan Puluz s 26cm LED Vlogging Ring... | 29.50 € | **26.90 €** | 15.5 % | **5.3 %** | 26.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný termostat na ohrev vody Avatto WT100 3A... | 32.50 € | **29.90 €** | 15.3 % | **6.1 %** | 29.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AM - 487 zesilovač / FM / DAB-BIII / UHF1 / UH... | 32.50 € | **29.90 €** | 15.1 % | **5.9 %** | 29.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight alkohol tester, 0,0 - 1,5‰ BAC, citlivosť 0,2‰ | 20.50 € | **17.90 €** | 41.5 % | **23.5 %** | 18.00 € | stávame sa najlacnejší |
| Salente ProVacs | 59.50 € | **56.90 €** | 10.4 % | **5.6 %** | 57.00 € | stávame sa najlacnejší |
| EDIFIER ES20 reproduktor černý | 51.50 € | **48.90 €** | 11.0 % | **5.4 %** | 49.00 € | stávame sa najlacnejší |
| Armodd Slim Gold - 9159 | 61.50 € | **58.90 €** | 10.0 % | **5.4 %** | 59.00 € | stávame sa najlacnejší |
| Solight LED drevený vianočný veniec, 10x LED, biela,... | 16.50 € | **13.90 €** | 56.5 % | **31.9 %** | 13.96 € | stávame sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO ARB-407-Blue | 36.00 € | **33.50 €** | 14.5 % | **6.5 %** | 17.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO ARB-407-Blue | 36.00 € | **33.50 €** | 14.5 % | **6.5 %** | 17.35 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze GTS 3 GPS (sivé) | 34.00 € | **31.50 €** | 14.4 % | **6.0 %** | 21.32 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxovací hruška DBX BUSHIDO ARS-1152 | 36.00 € | **33.50 €** | 14.5 % | **6.5 %** | 25.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reflexní míč, speedbag DBX BUSHIDO ARS-1150 R | 30.50 € | **28.00 €** | 14.4 % | **5.0 %** | 20.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pytlové rukavice DBX BUSHIDO B-132 | 30.50 € | **28.00 €** | 14.4 % | **5.0 %** | 23.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Pytlové rukavice DBX BUSHIDO B-132 | 30.50 € | **28.00 €** | 14.4 % | **5.0 %** | 23.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný termostat Avatto ZWT100 3A Zigbee Tuya | 33.00 € | **30.50 €** | 14.3 % | **5.7 %** | 27.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný termostat Avatto ZWT100 3A Zigbee Tuya | 33.00 € | **30.50 €** | 14.3 % | **5.7 %** | 27.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 465W s radiopřijímačem | 34.00 € | **31.50 €** | 14.3 % | **5.9 %** | 31.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kamera IP venkovní Kruger&Matz Connect C80 Tuya Wi-Fi | 33.00 € | **30.50 €** | 14.0 % | **5.3 %** | 30.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Anycubic Photon Mono 4 3D printer | 166.00 € | **163.50 €** | 11.0 % | **9.3 %** | 163.56 € | stávame sa najlacnejší |
| Solight predlžovací prívod IP44, 3 zásuvky, gumový k... | 23.50 € | **21.00 €** | 37.3 % | **22.7 %** | 21.16 € | stávame sa najlacnejší |
| Freewell Neutral Density ND64 Filter pre OSMO 360 | 59.50 € | **57.00 €** | 15.2 % | **10.4 %** | 57.17 € | stávame sa najlacnejší |
| Solight detektor dymu a oxidu uhoľnatého, LCD disple... | 24.50 € | **22.00 €** | 41.0 % | **26.6 %** | 22.20 € | stávame sa najlacnejší |
| Gorenje MO20A3WH | 73.50 € | **71.00 €** | 10.6 % | **6.9 %** | 71.20 € | stávame sa najlacnejší |
| Inteligentné okuliare COLMI G06 (ružové) | 32.00 € | **29.50 €** | 14.5 % | **5.6 %** | 29.79 € | stávame sa najlacnejší |
| Inteligentné okuliare COLMI G06 (transparentné) | 32.00 € | **29.50 €** | 14.5 % | **5.6 %** | 29.79 € | stávame sa najlacnejší |
| Impregnace na kožené oděvy INPRODUCTS WAX 400 ml | 28.50 € | **26.00 €** | 15.2 % | **5.1 %** | 26.29 € | stávame sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **15.50 €** | 47.4 % | **26.9 %** | 15.82 € | stávame sa najlacnejší |
| Solight 1z predlžovací prívod - spojka, 15m, 3 x 1,5... | 24.50 € | **22.00 €** | 53.3 % | **37.7 %** | 22.34 € | stávame sa najlacnejší |
| Solight laserový merač vzdálenosti, 0,05 - 40m | 19.00 € | **16.50 €** | 32.0 % | **14.7 %** | 16.90 € | stávame sa najlacnejší |
| Baterie olověná  12V / 24Ah  REBEL bezúdržbový akumu... | 52.50 € | **50.00 €** | 15.2 % | **9.7 %** | 50.46 € | stávame sa najlacnejší |
| Guzzanti GZ 91 | 196.50 € | **194.00 €** | 10.1 % | **8.7 %** | 194.50 € | stávame sa najlacnejší |
| Dalekohled binokulární LEVENHUK Atom Digital DNB250 ... | 168.90 € | **166.50 €** | 6.5 % | **5.0 %** | 166.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentné hodinky Zeblaze Stratos 4 (čierne) | 73.90 € | **71.50 €** | 15.3 % | **11.5 %** | 71.60 € | stávame sa najlacnejší |
| Bezdrôtový reproduktor QCY SP300 (biely) | 94.90 € | **92.50 €** | 15.2 % | **12.3 %** | 92.72 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio OpenRock S2 (blackE) | 66.90 € | **64.50 €** | 15.0 % | **10.9 %** | 64.83 € | stávame sa najlacnejší |
| CANON PIXMA MG2556S Black | 55.90 € | **53.50 €** | 10.3 % | **5.6 %** | 39.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAT3509WT Bezdrátová sluchátka | 55.90 € | **53.50 €** | 10.1 % | **5.3 %** | 41.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK550RT bezdrátová sluchtátka | 56.90 € | **54.50 €** | 10.2 % | **5.6 %** | 43.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black&Decker BXVMS601E | 48.90 € | **46.50 €** | 10.8 % | **5.4 %** | 36.34 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4676 Pečící pánev | 48.90 € | **46.50 €** | 10.5 % | **5.1 %** | 41.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Prenosná pumpa Flextail Tiny Pump 2X (oranžová) | 26.90 € | **24.50 €** | 15.6 % | **5.3 %** | 22.27 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Clean Twist M Ergo Mobile | 46.90 € | **44.50 €** | 10.7 % | **5.0 %** | 43.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík analogový TechnoLine WT 757BK | 27.90 € | **25.50 €** | 15.4 % | **5.5 %** | 25.79 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 24W, 2... | 22.90 € | **20.50 €** | 38.1 % | **23.6 %** | 20.90 € | stávame sa najlacnejší |
| Solight LED čelové nabíjacie svietidlo, 3W, 150lm, z... | 7.30 € | **5.00 €** | 54.6 % | **5.9 %** | 4.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight cestovný adaptér pre JAR, Afriku a Stredný v... | 6.50 € | **4.30 €** | 59.7 % | **5.6 %** | 3.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO E1v3 Black | 30.00 € | **27.90 €** | 14.2 % | **6.2 %** | 17.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO E1v3 Black | 30.00 € | **27.90 €** | 14.2 % | **6.2 %** | 17.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO E1v3 Black | 30.00 € | **27.90 €** | 14.2 % | **6.2 %** | 17.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Interaktívne hračky pre mačky 2 v 1 | 27.00 € | **24.90 €** | 14.5 % | **5.6 %** | 21.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor plynu EMOS GS869 /P56450/ | 36.00 € | **33.90 €** | 12.4 % | **5.9 %** | 33.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad CA-215 | 28.00 € | **25.90 €** | 14.2 % | **5.6 %** | 25.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (ružové) | 39.00 € | **36.90 €** | 14.5 % | **8.3 %** | 36.95 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash C305 ATX (biela) | 43.00 € | **40.90 €** | 14.7 % | **9.1 %** | 41.00 € | stávame sa najlacnejší |
| Počítačová skriňa Darkflash DK431 Mesh (čierna) | 48.00 € | **45.90 €** | 14.7 % | **9.7 %** | 46.00 € | stávame sa najlacnejší |
| Solight LED vonkajšia vánočná reťaz, 200 LED, 20m, p... | 11.00 € | **8.90 €** | 30.0 % | **5.2 %** | 5.85 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod 3m, 4 zásuvky, vypínač, 1... | 7.50 € | **5.40 €** | 48.4 % | **6.8 %** | 2.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED COB svetelný pás 5m, 10W/m, 1000lm/m, CR... | 18.00 € | **15.90 €** | 47.4 % | **30.2 %** | 15.93 € | stávame sa najlacnejší |
| JBL Quantum 100 černá | 47.50 € | **45.50 €** | 10.7 % | **6.1 %** | 33.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4673 Koupelnový infrazářič | 39.50 € | **37.50 €** | 11.4 % | **5.8 %** | 28.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO ARB407v1 6 oz. | 27.50 € | **25.50 €** | 15.2 % | **6.8 %** | 17.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boxerské rukavice DBX BUSHIDO ARB407v2 6 oz. | 27.50 € | **25.50 €** | 15.2 % | **6.8 %** | 17.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| EMOS KT2265 (32-90" 60kg) naklápěcí TV držák | 24.50 € | **22.50 €** | 14.4 % | **5.1 %** | 16.82 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák na prádlo Tower 340 | 37.50 € | **35.50 €** | 11.4 % | **5.5 %** | 29.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Držák monitoru Cabletech UCH0208-1 | 28.50 € | **26.50 €** | 14.5 % | **6.5 %** | 21.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK4200MP bezdrátová sluchátka | 38.50 € | **36.50 €** | 10.8 % | **5.0 %** | 31.56 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO E1V6 | 26.50 € | **24.50 €** | 14.8 % | **6.1 %** | 19.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO E1V6 | 26.50 € | **24.50 €** | 14.8 % | **6.1 %** | 19.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MMA rukavice DBX BUSHIDO E1V6 | 26.50 € | **24.50 €** | 14.8 % | **6.1 %** | 19.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na karate DBX BUSHIDO DBX-KM červené | 26.50 € | **24.50 €** | 14.8 % | **6.1 %** | 19.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na karate DBX BUSHIDO DBX-KM červené | 26.50 € | **24.50 €** | 14.8 % | **6.1 %** | 19.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na karate DBX BUSHIDO DBX-KM červené | 26.50 € | **24.50 €** | 14.8 % | **6.1 %** | 19.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na karate DBX BUSHIDO DBX-KM červené | 26.50 € | **24.50 €** | 14.8 % | **6.1 %** | 19.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na karate DBX BUSHIDO DBX-KM modré | 26.50 € | **24.50 €** | 14.8 % | **6.1 %** | 19.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na karate DBX BUSHIDO DBX-KM modré | 26.50 € | **24.50 €** | 14.8 % | **6.1 %** | 19.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na karate DBX BUSHIDO DBX-KM modré | 26.50 € | **24.50 €** | 14.8 % | **6.1 %** | 19.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na karate DBX BUSHIDO DBX-KM modré | 26.50 € | **24.50 €** | 14.8 % | **6.1 %** | 19.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální TechnoLine WT 235BS | 25.00 € | **23.00 €** | 14.3 % | **5.1 %** | 18.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Ariete ART 2957/01 | 41.90 € | **39.90 €** | 11.0 % | **5.7 %** | 36.26 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktor Bluetooth KRUGER & MATZ Music Box Mini K... | 26.50 € | **24.50 €** | 15.5 % | **6.7 %** | 21.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka herní Kruger&Matz Warrior GH-10 s mikrofonem | 22.90 € | **20.90 €** | 15.2 % | **5.1 %** | 18.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Boffin II 3D | 40.90 € | **38.90 €** | 11.0 % | **5.6 %** | 36.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Baseus Bowie WM02 TWS, Bluetoot... | 23.00 € | **21.00 €** | 15.1 % | **5.1 %** | 19.18 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák prádla 81435 TOWER 190 | 43.50 € | **41.50 €** | 10.7 % | **5.6 %** | 39.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kruger&Matz Warrior GH-50 herní sluchátka s mikrofon... | 22.90 € | **20.90 €** | 15.2 % | **5.1 %** | 19.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit 52127 Set Clean Twist M Ergo | 41.90 € | **39.90 €** | 10.7 % | **5.4 %** | 39.28 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální projekční GARNI 140 čas a vnitřní te... | 25.90 € | **23.90 €** | 15.7 % | **6.8 %** | 23.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Aroma difuzer Palm růžový lesk 500ml SIXTOL | 23.90 € | **21.90 €** | 15.5 % | **5.9 %** | 21.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Počítačová skriňa Darkflash C275P bez ventilátorov (... | 24.50 € | **22.50 €** | 14.8 % | **5.4 %** | 22.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Freewell Neutral Density ND16 Filter pre OSMO 360 | 60.00 € | **58.00 €** | 14.9 % | **11.1 %** | 58.04 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (modré) | 38.90 € | **36.90 €** | 15.5 % | **9.6 %** | 36.95 € | stávame sa najlacnejší |
| Solight digitálna izbová anténa, DVB-T2, 45dB | 17.00 € | **15.00 €** | 40.2 % | **23.7 %** | 15.07 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7245 | 32.00 € | **30.00 €** | 14.4 % | **7.2 %** | 30.09 € | stávame sa najlacnejší |
| Ninja AF140EU Single Basket Pro 4,7l | 120.90 € | **118.90 €** | 10.1 % | **8.3 %** | 119.00 € | stávame sa najlacnejší |
| Niceboy Pins 4 PRO Pink | 36.50 € | **34.50 €** | 11.5 % | **5.4 %** | 34.60 € | stávame sa najlacnejší |
| Solight LED lineárne osvetlenie prepojiteľné, 50W, 4... | 33.50 € | **31.50 €** | 38.0 % | **29.7 %** | 31.62 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (silver) | 61.50 € | **59.50 €** | 14.7 % | **11.0 %** | 59.63 € | stávame sa najlacnejší |
| Súprava piatich filtrov Freewell M2 Series Quick Swa... | 129.00 € | **127.00 €** | 14.9 % | **13.1 %** | 127.13 € | stávame sa najlacnejší |
| Solight LED vianočný lampáš biely, 33cm, 3x LED svie... | 14.00 € | **12.00 €** | 52.8 % | **31.0 %** | 12.37 € | stávame sa najlacnejší |
| Solight alkohol tester, 0,0 - 3,0‰ BAC, přesnosť 0,1‰ | 37.50 € | **35.50 €** | 39.3 % | **31.9 %** | 35.90 € | stávame sa najlacnejší |
| Solight akumulátorové záhradné nožnice | 65.50 € | **63.50 €** | 20.1 % | **16.4 %** | 63.90 € | stávame sa najlacnejší |
| JBL Boombox 3 BLACK | 311.50 € | **309.50 €** | 10.1 % | **9.4 %** | 309.90 € | stávame sa najlacnejší |
| Solight LED dotykové podlinkové a nábytkové svietidl... | 23.00 € | **21.00 €** | 38.4 % | **26.4 %** | 21.50 € | stávame sa najlacnejší |
| TP-LINK TL-WR841N WiFi N Router | 19.99 € | **18.00 €** | 16.8 % | **5.2 %** | 15.23 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| G3Ferrari G10152 horkovzdušná trouba | 147.90 € | **146.00 €** | 10.2 % | **8.8 %** | 146.30 € | stávame sa najlacnejší |
| Solight LED vianočné záves, hviezdy, šírka 1,8m, 77L... | 11.00 € | **9.10 €** | 27.2 % | **5.2 %** | 9.19 € | stávame sa najlacnejší |
| Solight záhradný stĺpik IP44, 2 zásuvky, gumový kábe... | 11.50 € | **9.60 €** | 57.1 % | **31.2 %** | 9.69 € | stávame sa najlacnejší |
| Marvo sluchátka s mikrofon.MONKA HG9069W | 36.90 € | **35.00 €** | 10.7 % | **5.0 %** | 35.04 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio A10 (čierne) | 61.90 € | **60.00 €** | 15.3 % | **11.8 %** | 60.19 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio A10 ANC (biele) | 61.90 € | **60.00 €** | 15.2 % | **11.7 %** | 60.19 € | stávame sa najlacnejší |
| Wireless adapter, Ottocast, CP82, U2-AIR PRO Carplay... | 47.90 € | **46.00 €** | 15.3 % | **10.7 %** | 46.32 € | stávame sa najlacnejší |
| Solight LED osvetlenie s diaľkovým ovládačom Grey, 6... | 40.90 € | **39.00 €** | 38.1 % | **31.7 %** | 39.50 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 16.90 € | **15.00 €** | 38.6 % | **23.1 %** | 15.50 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, vypína... | 6.40 € | **4.60 €** | 47.0 % | **5.6 %** | 2.80 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sluchátka JBL Tune 520C Purple | 34.50 € | **32.90 €** | 11.4 % | **6.2 %** | 27.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| BLOW 4625 FHD H.265 V2 | 20.50 € | **18.90 €** | 16.0 % | **6.9 %** | 15.17 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Záložní zdroj MHPower DL181-9 Mini UPS 9V 1,2A | 20.50 € | **18.90 €** | 14.9 % | **5.9 %** | 15.21 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE305 AC1200 WiFi Range Extender | 37.50 € | **35.90 €** | 10.0 % | **5.3 %** | 32.70 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rozbočovač hdmi/hdmi 1->2 - NEDIS, černý, Ultra HD V... | 19.50 € | **17.90 €** | 16.3 % | **6.8 %** | 14.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK RE315 AC1200 WiFi Range Extender | 36.50 € | **34.90 €** | 10.7 % | **5.9 %** | 32.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Black+Decker BXJB500E | 31.50 € | **29.90 €** | 11.1 % | **5.4 %** | 28.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal MQ723138 | 47.50 € | **45.90 €** | 10.4 % | **6.7 %** | 46.00 € | stávame sa najlacnejší |
| OWS OneOdio OpenRock Pro Wireless Headphones (silver) | 51.50 € | **49.90 €** | 15.5 % | **11.9 %** | 50.00 € | stávame sa najlacnejší |
| Rádio KRUGER & MATZ KM0832 analogové přenosné solární | 17.50 € | **15.90 €** | 16.4 % | **5.8 %** | 15.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight sada LED sviečok s časovačom, 3ks, 10/13/15c... | 13.50 € | **11.90 €** | 55.2 % | **36.8 %** | 11.96 € | stávame sa najlacnejší |
| JBL Live Buds 3 Blue | 138.50 € | **136.90 €** | 6.3 % | **5.1 %** | 134.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Buds 3 Purple | 138.50 € | **136.90 €** | 6.3 % | **5.1 %** | 134.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL Live Buds 3 Silver | 138.50 € | **136.90 €** | 6.3 % | **5.1 %** | 134.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Salente R2 robotický vysavač | 98.50 € | **96.90 €** | 10.3 % | **8.5 %** | 96.99 € | stávame sa najlacnejší |
| Salente Rtx-R2 | 98.50 € | **96.90 €** | 10.3 % | **8.5 %** | 96.99 € | stávame sa najlacnejší |
| Solight LED stolná lampička stmievateľná, 11W, zmena... | 42.00 € | **40.50 €** | 9.1 % | **5.2 %** | 30.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na taekwondo DBX BUSHIDO DBX-T-1 | 21.00 € | **19.50 €** | 14.7 % | **6.5 %** | 16.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na taekwondo DBX BUSHIDO DBX-T-1 | 21.00 € | **19.50 €** | 14.7 % | **6.5 %** | 16.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na taekwondo DBX BUSHIDO DBX-T-1 | 21.00 € | **19.50 €** | 14.7 % | **6.5 %** | 16.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Rukavice na taekwondo DBX BUSHIDO DBX-T-1 | 21.00 € | **19.50 €** | 14.7 % | **6.5 %** | 16.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Budík digitální GARNI 138W | 20.00 € | **18.50 €** | 14.8 % | **6.2 %** | 16.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitálny univerzálny multimeter Habotest HT113C | 19.50 € | **18.00 €** | 14.1 % | **5.4 %** | 16.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny nástěnné TechnoLine 635205 černé | 16.50 € | **15.00 €** | 15.6 % | **5.1 %** | 13.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Fixed Stanice PS5 FIXPS5-MCS-BW | 27.50 € | **26.00 €** | 11.1 % | **5.1 %** | 25.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Zeblaze Btalk Plus Smartwatch (Black). | 17.50 € | **16.00 €** | 15.0 % | **5.2 %** | 15.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| PIR senzor (pohybové čidlo) EMOS H5024 GoSmart IP20,... | 19.50 € | **18.00 €** | 14.1 % | **5.3 %** | 17.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšia vianočná reťaz, 100LED, 10m, 3... | 5.00 € | **3.50 €** | 54.0 % | **7.8 %** | 3.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sada filtrov Freewell pre OSMO Action 6 „Standard Da... | 42.50 € | **41.00 €** | 14.7 % | **10.7 %** | 41.04 € | stávame sa najlacnejší |
| EJEAS Q7 motorcycle intercom | 44.00 € | **42.50 €** | 14.4 % | **10.5 %** | 42.60 € | stávame sa najlacnejší |
| Budík digitální GARNI 138B | 20.00 € | **18.50 €** | 14.8 % | **6.2 %** | 18.60 € | stávame sa najlacnejší |
| Ružové herné slúchadlá ONIKUMA B90 | 16.50 € | **15.00 €** | 15.6 % | **5.1 %** | 15.10 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (modré) | 45.50 € | **44.00 €** | 15.0 % | **11.2 %** | 44.19 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá QCY Crossky R70 (sivé) | 45.50 € | **44.00 €** | 15.5 % | **11.7 %** | 44.19 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY Crossky R70 (čierne) | 45.50 € | **44.00 €** | 15.5 % | **11.7 %** | 44.19 € | stávame sa najlacnejší |
| Tefal Safe'Tea KO261130 | 28.50 € | **27.00 €** | 11.1 % | **5.2 %** | 27.24 € | stávame sa najlacnejší |
| Solight bezdrôtová 15W + USB A+C 20W PD výsuvná nabí... | 32.50 € | **31.00 €** | 59.9 % | **52.6 %** | 31.29 € | stávame sa najlacnejší |
| Slnečná clona Freewell pre fotoaparáty Fuji radu X10... | 121.00 € | **119.50 €** | 14.9 % | **13.5 %** | 119.79 € | stávame sa najlacnejší |
| Tefal INGENIO Expertise sada 3 ks | 66.00 € | **64.50 €** | 10.1 % | **7.6 %** | 64.83 € | stávame sa najlacnejší |
| Profesionálne herné slúchadlá ONIKUMA GT828 | 23.50 € | **22.00 €** | 14.8 % | **7.5 %** | 22.33 € | stávame sa najlacnejší |
| Alcad AM - 387 zesilovač / FM / DAB-BIII / UHF / LTE700 | 27.00 € | **25.50 €** | 13.2 % | **6.9 %** | 25.89 € | stávame sa najlacnejší |
| Solight LED stolná nabíjacia lampička, 2W, 210lm, 3C... | 15.00 € | **13.50 €** | 48.7 % | **33.8 %** | 13.90 € | stávame sa najlacnejší |
| Kruger & Matz KM1303 | 17.50 € | **16.00 €** | 15.3 % | **5.4 %** | 16.49 € | stávame sa najlacnejší |
| Solight LED stolná lampička, 4,5W, 300lm, 3CCT, biel... | 16.50 € | **15.00 €** | 39.3 % | **26.6 %** | 15.50 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS ONIKUMA T35 Pink | 14.90 € | **13.50 €** | 16.3 % | **5.3 %** | 8.51 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Baterie olověná  12V /  4,5Ah  EMOS bezúdržbový akum... | 15.90 € | **14.50 €** | 16.5 % | **6.2 %** | 12.92 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight senzor pre meteostanice TE110 | 6.60 € | **5.20 €** | 49.9 % | **18.1 %** | 5.29 € | stávame sa najlacnejší |
| Philips TAT2000BL Bezdrátová sluchátka | 31.90 € | **30.50 €** | 10.2 % | **5.3 %** | 16.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AKAI ACRB-2000 Budík s bezdrátovým nab | 33.90 € | **32.50 €** | 10.7 % | **6.2 %** | 20.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAH3209BK Bezdrátová sluchátka | 26.90 € | **25.50 €** | 11.1 % | **5.3 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAH3209WT Bezdrátová sluchátka | 26.90 € | **25.50 €** | 11.1 % | **5.3 %** | 16.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Beans 4 POP White | 28.90 € | **27.50 €** | 10.4 % | **5.1 %** | 20.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Jacobs Barista Crema 1 kg zrno | 22.90 € | **21.50 €** | 11.9 % | **5.0 %** | 14.98 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAT2000WT Bezdrátová sluchátka | 31.90 € | **30.50 €** | 10.2 % | **5.3 %** | 26.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| ALMA 2930 - set-top box DVB-T2 (H.265/HEVC) | 20.90 € | **19.50 €** | 15.2 % | **7.5 %** | 16.84 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| MERCUSYS MR60X WiFi Dual Band Router | 32.90 € | **31.50 €** | 10.6 % | **5.9 %** | 28.95 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| LEIFHEIT Sušák Telegant Plus 100 bílý | 30.90 € | **29.50 €** | 10.2 % | **5.2 %** | 27.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16075 | 25.90 € | **24.50 €** | 11.5 % | **5.4 %** | 24.00 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo B-4812 černá | 26.90 € | **25.50 €** | 11.1 % | **5.3 %** | 25.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Detektor plynu ORNO OR-DC-614 pro zemní plyn a LPG | 16.90 € | **15.50 €** | 15.2 % | **5.6 %** | 15.59 € | stávame sa najlacnejší |
| Freewell FujiX100 filter set with lens hood (black) | 60.90 € | **59.50 €** | 15.3 % | **12.7 %** | 59.63 € | stávame sa najlacnejší |
| Hodiny nástěnné TechnoLine WT 7235 | 32.90 € | **31.50 €** | 15.5 % | **10.6 %** | 31.69 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA GT808 (čierne) | 25.90 € | **24.50 €** | 15.4 % | **9.1 %** | 24.78 € | stávame sa najlacnejší |
| Filters ND/PL 8/16/32 Freewell for DJI Neo | 17.90 € | **16.50 €** | 15.6 % | **6.5 %** | 16.83 € | stávame sa najlacnejší |
| Tefal FV2839E0 | 34.90 € | **33.50 €** | 12.2 % | **7.7 %** | 33.90 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 3 zásuvky, biely, 5m | 7.40 € | **6.10 €** | 47.8 % | **21.9 %** | 6.20 € | stávame sa najlacnejší |
| Philips TAT2139BK Bezdrátová sluchátka | 31.00 € | **29.90 €** | 10.3 % | **6.3 %** | 15.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Set Rotation Disc Mop Ergo | 27.00 € | **25.90 €** | 10.1 % | **5.7 %** | 23.63 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Magnetická mini powerbanka Baseus 5000mAh, USB-C 20W... | 18.00 € | **16.90 €** | 13.4 % | **6.5 %** | 15.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Palačinkovač Teesa TSA3235 | 18.00 € | **16.90 €** | 14.0 % | **7.0 %** | 15.96 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vianočná hviezda zlatá, závesná, časovač... | 7.70 € | **6.60 €** | 54.6 % | **32.5 %** | 6.69 € | stávame sa najlacnejší |
| Small Foot Plyšový králíček | 17.00 € | **15.90 €** | 14.9 % | **7.5 %** | 11.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TEESA V50 TSA0230 vakuová svářečka fólií, 28 cm , 90W | 17.00 € | **15.90 €** | 15.1 % | **7.6 %** | 15.22 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Alcad AI-200 zesilovač | 17.00 € | **15.90 €** | 14.2 % | **6.8 %** | 15.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE TH60E3X | 79.00 € | **77.90 €** | 6.7 % | **5.2 %** | 73.86 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Roborock Q10 PF čistiaci robot (čierny) | 219.00 € | **217.90 €** | 15.0 % | **14.4 %** | 218.00 € | stávame sa najlacnejší |
| Laica LAI BR70C01 | 19.50 € | **18.50 €** | 12.4 % | **6.6 %** | 9.02 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAT1209PK Bezdrátová sluchátka | 24.50 € | **23.50 €** | 10.8 % | **6.3 %** | 16.49 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy Sora White | 24.50 € | **23.50 €** | 10.8 % | **6.3 %** | 17.88 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Hodiny digitální TechnoLine WS 8019 nástěnné | 49.50 € | **48.50 €** | 7.6 % | **5.4 %** | 43.19 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sati Hansi Intense 1000g zrno | 22.90 € | **21.90 €** | 10.8 % | **5.9 %** | 17.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Houpací síť Gardlov 21078 pro dvě osoby 260x160cm | 14.50 € | **13.50 €** | 14.7 % | **6.8 %** | 9.58 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Simax Konvice skl. SVATAVA 1,7 l mix | 13.50 € | **12.50 €** | 13.7 % | **5.3 %** | 8.59 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Niceboy MW200 | 20.50 € | **19.50 €** | 11.0 % | **5.6 %** | 16.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Archer C24 AC750 Router | 23.90 € | **22.90 €** | 11.3 % | **6.6 %** | 19.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentná zásuvka Gosund EP2-Z ZigBee (dvojbaleni... | 15.50 € | **14.50 €** | 14.8 % | **7.4 %** | 11.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Philips TAK2000MP drátová sluchátka | 18.50 € | **17.50 €** | 12.1 % | **6.0 %** | 15.38 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Sound Cube MIIIW Wireless Headphones (White) | 15.90 € | **14.90 €** | 14.9 % | **7.7 %** | 13.46 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WA854RE Wireless N Extender | 15.50 € | **14.50 €** | 13.2 % | **5.9 %** | 13.20 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Digitální kuchyňská váha EMOS EV014 TY3101 bílá | 11.90 € | **10.90 €** | 16.0 % | **6.3 %** | 9.65 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Převodník NEDIS BTTR050BK audio Bluetooth + AUX IN 3... | 17.50 € | **16.50 €** | 14.7 % | **8.2 %** | 15.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Stolná lampa Yeelight Jasmine (dobíjacia) | 15.50 € | **14.50 €** | 13.8 % | **6.5 %** | 13.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solární regulátor PWM Geti GSR020 | 17.50 € | **16.50 €** | 12.4 % | **6.0 %** | 16.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kontaktný teplomer Uni-T UT320A | 16.50 € | **15.50 €** | 14.5 % | **7.5 %** | 15.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínač/merač spotreby WiFi Sonoff POWR316D | 13.90 € | **12.90 €** | 16.3 % | **7.9 %** | 12.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Tyč teleskopická 145 -400cm CS | 21.50 € | **20.50 €** | 10.4 % | **5.3 %** | 20.50 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Fusion A70 (zlaté) | 37.90 € | **36.90 €** | 15.3 % | **12.2 %** | 36.95 € | stávame sa najlacnejší |
| Solight LED reflektor Quick, 50W, 4250lm, 4000K, IP6... | 12.50 € | **11.50 €** | 46.9 % | **35.1 %** | 11.56 € | stávame sa najlacnejší |
| Guzzanti GZ 462 | 39.90 € | **38.90 €** | 10.4 % | **7.7 %** | 38.96 € | stávame sa najlacnejší |
| Filter na zníženie svetelného znečistenia Freewell p... | 17.50 € | **16.50 €** | 15.8 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| ND64/PL filter Freewell pre DJI Mini 5 Pro | 17.50 € | **16.50 €** | 15.9 % | **9.2 %** | 16.58 € | stávame sa najlacnejší |
| FoodSaver FFC023X | 20.90 € | **19.90 €** | 11.0 % | **5.7 %** | 19.99 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463B s FM radiopřijímačem | 25.00 € | **24.00 €** | 14.3 % | **9.7 %** | 24.09 € | stávame sa najlacnejší |
| Budík digitální TechnoLine WT 463R s FM radiopřijímačem | 25.00 € | **24.00 €** | 14.3 % | **9.7 %** | 24.09 € | stávame sa najlacnejší |
| Reproduktory k PC 2.1 Rebel CS-50 | 12.50 € | **11.50 €** | 16.4 % | **7.1 %** | 11.59 € | stávame sa najlacnejší |
| G3Ferrari G2011300 | 204.90 € | **203.90 €** | 10.1 % | **9.6 %** | 204.00 € | stávame sa najlacnejší |
| Maxxo VM Compact | 41.50 € | **40.50 €** | 10.4 % | **7.8 %** | 40.60 € | stávame sa najlacnejší |
| Inteligentné hodinky Colmi P80 (strieborné) | 21.90 € | **20.90 €** | 15.4 % | **10.1 %** | 21.00 € | stávame sa najlacnejší |
| Polarizačný filter Freewell pre DJI Mini 5 Pro | 17.90 € | **16.90 €** | 15.6 % | **9.1 %** | 17.00 € | stávame sa najlacnejší |
| Candy CFT610/5S/1/4U | 48.50 € | **47.50 €** | 10.0 % | **7.8 %** | 47.60 € | stávame sa najlacnejší |
| Maono G1 Neo Sound Card Black | 45.50 € | **44.50 €** | 14.8 % | **12.3 %** | 44.70 € | stávame sa najlacnejší |
| Dynamický mikrofon Maono PD200x (černý) | 49.00 € | **48.00 €** | 14.7 % | **12.4 %** | 48.23 € | stávame sa najlacnejší |
| FIXED Bikee Anti-Shock FIXBIAS-BK | 22.50 € | **21.50 €** | 11.1 % | **6.2 %** | 21.75 € | stávame sa najlacnejší |
| Banquet Strojek na těstoviny CUL. | 20.50 € | **19.50 €** | 11.6 % | **6.1 %** | 19.79 € | stávame sa najlacnejší |
| Teplovzdušný ventilátor TEESA TSA8027 | 14.50 € | **13.50 €** | 14.2 % | **6.4 %** | 13.79 € | stávame sa najlacnejší |
| Cabletech UCH0023A1 | 12.50 € | **11.50 €** | 17.2 % | **7.8 %** | 11.79 € | stávame sa najlacnejší |
| CP PLUS CP-USC-DC51PL2-V3-0360 5.0 Mpix vnitřní dome... | 65.50 € | **64.50 €** | 15.4 % | **13.7 %** | 64.79 € | stávame sa najlacnejší |
| Freewell Filtr Glow Mist 1/4 pre OSMO Action 6 | 16.50 € | **15.50 €** | 14.8 % | **7.8 %** | 15.83 € | stávame sa najlacnejší |
| Budík digitální projekční TechnoLine WT 538 | 35.00 € | **34.00 €** | 14.9 % | **11.6 %** | 34.36 € | stávame sa najlacnejší |
| Tefal BC50D6V0 | 16.50 € | **15.50 €** | 13.1 % | **6.3 %** | 15.88 € | stávame sa najlacnejší |
| Solight detektor úniku horľavých plynov. Polovodičov... | 14.50 € | **13.50 €** | 41.4 % | **31.6 %** | 13.90 € | stávame sa najlacnejší |
| Solight stredný konzolový držiak pre ploché TV, 58cm... | 21.50 € | **20.50 €** | 43.0 % | **36.4 %** | 20.90 € | stávame sa najlacnejší |
| TWS QCY MeloBuds Pro HT08 headphones, ANC (gold) | 32.50 € | **31.50 €** | 14.7 % | **11.2 %** | 31.90 € | stávame sa najlacnejší |
| Bezdrôtový ovládač GameSir SuperNova T4n Pro (ružový) | 43.50 € | **42.50 €** | 14.7 % | **12.1 %** | 42.90 € | stávame sa najlacnejší |
| Freewell ND1000 Filter pre OSMO Action 6 | 17.00 € | **16.00 €** | 13.4 % | **6.7 %** | 16.42 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS QCY T13x (čierne) | 18.00 € | **17.00 €** | 15.0 % | **8.6 %** | 17.43 € | stávame sa najlacnejší |
| Zdroj záložní KEMOT PROsinus 1500/24 URZ3427 1050W 24V | 137.90 € | **137.00 €** | 15.1 % | **14.3 %** | 137.19 € | stávame sa najlacnejší |
| Budík digitální Izoxis 26337 | 10.90 € | **10.00 €** | 15.4 % | **5.9 %** | 6.75 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Leifheit Obal na venkovní sušáky (EVO) | 15.90 € | **15.00 €** | 11.3 % | **5.0 %** | 14.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Marvo HG8928 sluchátka s mikrofonem | 12.90 € | **12.00 €** | 13.1 % | **5.2 %** | 11.99 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal B5560553 | 14.90 € | **14.00 €** | 12.4 % | **5.6 %** | 14.38 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá TWS ONIKUMA T308 čierna | 10.90 € | **10.00 €** | 16.4 % | **6.8 %** | 10.46 € | stávame sa najlacnejší |
| Evolveo Xany 4, aktivní pokojová anténa | 19.90 € | **19.00 €** | 10.1 % | **5.2 %** | 15.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WA855RE Wireless N Extender | 18.90 € | **18.00 €** | 10.5 % | **5.2 %** | 16.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-Link Tapo T310 | 17.90 € | **17.00 €** | 11.1 % | **5.5 %** | 15.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK Tapo C100 WiFi camera | 23.90 € | **23.00 €** | 11.1 % | **6.9 %** | 23.01 € | stávame sa najlacnejší |
| Herné slúchadlá ONIKUMA X15Pro Pink Cat's Ears | 16.90 € | **16.00 €** | 14.7 % | **8.6 %** | 16.03 € | stávame sa najlacnejší |
| Bezdrátové čidlo k modelu WS 6750 a WS 6760 TX70DTH | 22.90 € | **22.00 €** | 15.1 % | **10.6 %** | 22.29 € | stávame sa najlacnejší |
| Solight LED venkovné osvetlenie, prisadené, štvorcov... | 23.90 € | **23.00 €** | 39.2 % | **33.9 %** | 23.44 € | stávame sa najlacnejší |
| Solight LED nabíjacie vreckové svietidlo so zoomom, ... | 3.50 € | **2.70 €** | 53.0 % | **18.0 %** | 2.80 € | stávame sa najlacnejší |
| Solight sieťový adaptér pre LED pásiky, 230V - 12V, ... | 7.30 € | **6.60 €** | 43.7 % | **29.9 %** | 6.69 € | stávame sa najlacnejší |
| Solight rozbočovač, 3 x 10A, čierny, vypínač | 3.60 € | **2.90 €** | 48.6 % | **19.7 %** | 3.00 € | stávame sa najlacnejší |
| Solight vypínač do vlhka IP54, č. 1 jednopólový, sivý | 2.50 € | **1.80 €** | 51.7 % | **9.2 %** | 1.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight predlžovací prívod, 5 zásuviek, biely, vypín... | 8.70 € | **8.00 €** | 47.1 % | **35.2 %** | 8.10 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 6 zásuviek, biely, 5m | 8.20 € | **7.50 €** | 47.8 % | **35.2 %** | 7.60 € | stávame sa najlacnejší |
| EZIDRI FD1000 ULTRA DIGITAL | 271.50 € | **270.90 €** | 10.2 % | **10.0 %** | 270.99 € | stávame sa najlacnejší |
| Niceboy ORYX X220 Iris | 19.50 € | **18.90 €** | 10.6 % | **7.2 %** | 16.09 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| CANON CL-546 Color | 20.50 € | **19.90 €** | 10.2 % | **6.9 %** | 17.68 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16090 | 17.50 € | **16.90 €** | 11.2 % | **7.3 %** | 16.10 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tefal KO2G08E0 | 35.50 € | **34.90 €** | 10.3 % | **8.4 %** | 34.91 € | stávame sa najlacnejší |
| Solight LED osvetlenie s ochranou proti vlhkosti, IP... | 20.50 € | **19.90 €** | 37.1 % | **33.0 %** | 19.96 € | stávame sa najlacnejší |
| Ariete ART 1548/04 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| Ariete ART 1548/05 | 29.50 € | **28.90 €** | 11.8 % | **9.5 %** | 28.99 € | stávame sa najlacnejší |
| ND16 filter Freewell pre DJI Mini 5 Pro | 19.50 € | **18.90 €** | 15.6 % | **12.0 %** | 18.99 € | stávame sa najlacnejší |
| Solight rozbočovač, 2 x 10A, biely, vypínač | 2.70 € | **2.10 €** | 50.4 % | **16.9 %** | 2.20 € | stávame sa najlacnejší |
| Samsung EO-IC100BW os.stereo HF USB-C,WT | 14.50 € | **13.90 €** | 12.4 % | **7.7 %** | 9.64 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| TP-LINK TL-WR820N WiFi N Router | 14.50 € | **13.90 €** | 12.6 % | **7.9 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| König & Meyer 16330 | 12.50 € | **11.90 €** | 10.3 % | **5.0 %** | 10.40 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Inteligentný spínač/merača spotreby WiFi Sonoff POWR316 | 12.50 € | **11.90 €** | 13.3 % | **7.9 %** | 11.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight detektor dymu + alarm, 85dB, biely + 9V batéria | 7.30 € | **6.70 €** | 42.7 % | **30.9 %** | 6.76 € | stávame sa najlacnejší |
| XAVAX 111310 fixační destičky pro sušičk | 10.50 € | **9.90 €** | 12.0 % | **5.6 %** | 9.99 € | stávame sa najlacnejší |
| Arzopa Portable Monitor Z1RC 16,0" | 118.50 € | **117.90 €** | 15.1 % | **14.5 %** | 117.95 € | stávame sa najlacnejší |
| Smartphone HOTWAV A16 Pro Max (zelený) | 128.50 € | **127.90 €** | 15.0 % | **14.5 %** | 127.99 € | stávame sa najlacnejší |
| Guzzanti GZ 05A1 | 105.50 € | **104.90 €** | 10.5 % | **9.9 %** | 105.00 € | stávame sa najlacnejší |
| Ardes BBQ 01 gril | 35.00 € | **34.50 €** | 7.4 % | **5.8 %** | 20.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Chránič zubů DBX BUSHIDO černo-červený - juniorský | 11.00 € | **10.50 €** | 15.4 % | **10.1 %** | 5.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR4 2.0 (biele) | 87.50 € | **87.00 €** | 5.7 % | **5.1 %** | 82.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Reproduktory Edifier MR4 2.0 (čierne) | 87.50 € | **87.00 €** | 5.7 % | **5.1 %** | 82.91 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Kempingová lampa Superfire T25 – 400 lm, USB, 3 režimy | 11.00 € | **10.50 €** | 12.9 % | **7.8 %** | 8.69 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bravo Nora B-4781 bílo/červená | 20.00 € | **19.50 €** | 10.0 % | **7.3 %** | 19.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Dotykový spínač svetla Avatto TS20-EU-W3 WiFi | 15.00 € | **14.50 €** | 9.8 % | **6.1 %** | 14.29 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Tester sieťových káblov UNI-T UT681C | 13.00 € | **12.50 €** | 12.9 % | **8.6 %** | 12.39 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight prepäťová ochrana do zásuvky, 236J, 1 zásuvk... | 3.40 € | **2.90 €** | 26.2 % | **7.7 %** | 2.90 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Bezdrôtové slúchadlá Oneodio Pro10 (ružovo-zlaté) | 26.00 € | **25.50 €** | 14.8 % | **12.5 %** | 25.58 € | stávame sa najlacnejší |
| Budík analogový TechnoLine Modell K red | 16.00 € | **15.50 €** | 13.8 % | **10.3 %** | 15.59 € | stávame sa najlacnejší |
| Solight prepäťová ochrana, 150J, 6 zásuviek, 3m, biela | 14.50 € | **14.00 €** | 57.8 % | **52.4 %** | 14.09 € | stávame sa najlacnejší |
| Solight USB A+C 20W fast charger | 6.80 € | **6.30 €** | 45.5 % | **34.8 %** | 6.40 € | stávame sa najlacnejší |
| Solight LED lineárne svietidlo podlinkové, 10W, 4100... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Potenza, 2... | 14.00 € | **13.50 €** | 36.5 % | **31.6 %** | 13.67 € | stávame sa najlacnejší |
| Leifheit Air Board M Compact | 55.50 € | **55.00 €** | 10.1 % | **9.1 %** | 55.18 € | stávame sa najlacnejší |
| Girmi PE3600 | 39.50 € | **39.00 €** | 10.9 % | **9.5 %** | 39.19 € | stávame sa najlacnejší |
| Resto 93013 Pánev hluboká Aries 26 cm | 22.50 € | **22.00 €** | 12.3 % | **9.8 %** | 22.20 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-BH-3A-W-WiFi | 30.50 € | **30.00 €** | 15.5 % | **13.7 %** | 30.20 € | stávame sa najlacnejší |
| Inteligentný termostat WiFi Avatto WT20R-EH-16A-W-WiFi | 30.50 € | **30.00 €** | 15.3 % | **13.4 %** | 30.25 € | stávame sa najlacnejší |
| Prenosná pumpa Flextail Tiny Pump 2 (oranžová) | 22.50 € | **22.00 €** | 15.0 % | **12.4 %** | 22.27 € | stávame sa najlacnejší |
| Napájecí zdroj spínaný URZ1169  12V / 5A - 2,1/5,5 | 12.50 € | **12.00 €** | 13.9 % | **9.4 %** | 12.29 € | stávame sa najlacnejší |
| Bezdrátový detektor pohybu ORNO OR-MA-701 | 10.50 € | **10.00 €** | 13.7 % | **8.3 %** | 10.29 € | stávame sa najlacnejší |
| Pec na pizzu TEESA TSA3240 SUPREME ELITE 2200 W mult... | 149.00 € | **148.50 €** | 15.0 % | **14.6 %** | 148.79 € | stávame sa najlacnejší |
| Bravo Adria B-4780 bílá | 26.50 € | **26.00 €** | 11.3 % | **9.2 %** | 26.29 € | stávame sa najlacnejší |
| Adaptér KRUGER & MATZ KM0390 (HUB) USB C na port HDM... | 27.50 € | **27.00 €** | 14.9 % | **12.8 %** | 27.29 € | stávame sa najlacnejší |
| KRUGER & MATZ KM0903 Powerbanka 10000 mAh Li-pol | 11.50 € | **11.00 €** | 13.2 % | **8.3 %** | 11.29 € | stávame sa najlacnejší |
| Záložní zdroj MHPower DL181-24 Mini UPS 24V 0,5A | 20.50 € | **20.00 €** | 14.4 % | **11.6 %** | 20.29 € | stávame sa najlacnejší |
| Leifheit Mop na podlahu Easy Spray XL | 32.50 € | **32.00 €** | 9.2 % | **7.5 %** | 32.32 € | stávame sa najlacnejší |
| Solight meteostanica, aplikácia Smart Life, extra ve... | 30.50 € | **30.00 €** | 9.5 % | **7.7 %** | 30.34 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.50 € | **30.00 €** | 14.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| Solight meteostanica, extra veľký farebný LCD, teplo... | 30.50 € | **30.00 €** | 14.4 % | **12.5 %** | 30.34 € | stávame sa najlacnejší |
| Inteligentný nástenný spínač SONOFF ZBMINIL2-E ZigBee | 17.00 € | **16.50 €** | 13.4 % | **10.0 %** | 16.88 € | stávame sa najlacnejší |
| Leifheit sušák Comfort Tower 420 | 48.00 € | **47.50 €** | 9.7 % | **8.6 %** | 47.89 € | stávame sa najlacnejší |
| DOMO DO42325PC | 101.00 € | **100.50 €** | 8.0 % | **7.5 %** | 100.89 € | stávame sa najlacnejší |
| CrockPot CSC062X | 156.00 € | **155.50 €** | 6.1 % | **5.8 %** | 155.89 € | stávame sa najlacnejší |
| Salente Friteoiicz | 53.00 € | **52.50 €** | 7.0 % | **6.0 %** | 52.89 € | stávame sa najlacnejší |
| Tefal RK812110 | 107.50 € | **107.00 €** | 8.2 % | **7.6 %** | 107.39 € | stávame sa najlacnejší |
| Tefal NE553838 | 128.50 € | **128.00 €** | 6.1 % | **5.6 %** | 128.39 € | stávame sa najlacnejší |
| Náhradní vodní filtr GARNI WF 45T | 19.00 € | **18.50 €** | 13.7 % | **10.8 %** | 18.89 € | stávame sa najlacnejší |
| Rowenta ZR177003 | 20.50 € | **20.00 €** | 9.9 % | **7.2 %** | 20.39 € | stávame sa najlacnejší |
| Tefal BL16GE30 | 57.50 € | **57.00 €** | 8.4 % | **7.5 %** | 57.39 € | stávame sa najlacnejší |
| iRobot Roomba Plus 515 Combo + Dock (bla | 455.00 € | **454.50 €** | 9.9 % | **9.7 %** | 454.89 € | stávame sa najlacnejší |
| Roborock Qrevo C Pro Black | 609.50 € | **609.00 €** | 5.8 % | **5.7 %** | 609.39 € | stávame sa najlacnejší |
| FoodSaver FSR2802 | 18.50 € | **18.00 €** | 10.1 % | **7.1 %** | 18.39 € | stávame sa najlacnejší |
| DOMO DO42102SV | 96.50 € | **96.00 €** | 6.8 % | **6.3 %** | 96.39 € | stávame sa najlacnejší |
| DOMO DO9232I | 356.00 € | **355.50 €** | 6.6 % | **6.5 %** | 355.89 € | stávame sa najlacnejší |
| PRIMO PR406IM | 127.50 € | **127.00 €** | 9.3 % | **8.9 %** | 127.39 € | stávame sa najlacnejší |
| Domo DO331L | 105.50 € | **105.00 €** | 9.0 % | **8.5 %** | 105.39 € | stávame sa najlacnejší |
| FoodSaver VS5910X | 278.00 € | **277.50 €** | 8.5 % | **8.3 %** | 277.89 € | stávame sa najlacnejší |
| Gorenje SIH1800BLT | 19.50 € | **19.00 €** | 12.9 % | **10.0 %** | 19.39 € | stávame sa najlacnejší |
| Sada 3 filtrov Telesin ND 8/16/32 pre GoPro GoPro He... | 21.00 € | **20.50 €** | 13.8 % | **11.1 %** | 20.89 € | stávame sa najlacnejší |
| Evolveo Solární panel pro StrongVision | 35.00 € | **34.50 €** | 6.7 % | **5.1 %** | 34.89 € | stávame sa najlacnejší |
| Kaon MZ-104, 4K satelitní přijímač | 116.00 € | **115.50 €** | 7.0 % | **6.5 %** | 115.89 € | stávame sa najlacnejší |
| D-LINK 5-Port Gigabit Switch (DGS-105) | 16.00 € | **15.50 €** | 10.6 % | **7.2 %** | 15.89 € | stávame sa najlacnejší |
| Gorenje BMX201M2BG | 166.00 € | **165.50 €** | 6.2 % | **5.9 %** | 165.89 € | stávame sa najlacnejší |
| Solight LED RGB osvetlenie Gaming, diaľkový ovládač,... | 11.50 € | **11.00 €** | 53.5 % | **46.8 %** | 11.40 € | stávame sa najlacnejší |
| Dotykový vypínač svetla ZigBee Avatto TS60-EU-W1 Sin... | 21.00 € | **20.50 €** | 15.0 % | **12.2 %** | 20.90 € | stávame sa najlacnejší |
| Casio FX 350 ES PLUS 2E ACCSFX350SDB | 18.50 € | **18.00 €** | 15.4 % | **12.3 %** | 18.40 € | stávame sa najlacnejší |
| Graef S 10005 | 113.50 € | **113.00 €** | 10.4 % | **9.9 %** | 113.42 € | stávame sa najlacnejší |
| Bezdrôtové slúchadlá OneOdio Studio Max 1 (čierne) | 145.50 € | **145.00 €** | 43.1 % | **42.6 %** | 145.45 € | stávame sa najlacnejší |
| Solight LED stropné svetlo Star, okrúhle, 24W, 2400l... | 23.50 € | **23.00 €** | 30.5 % | **27.7 %** | 23.48 € | stávame sa najlacnejší |
| Skúšačka napätia AC/DC UNI-T UT22B-EU | 14.50 € | **14.00 €** | 13.8 % | **9.9 %** | 14.49 € | stávame sa najlacnejší |
| Nutribullet NB907MAW | 72.90 € | **72.50 €** | 5.7 % | **5.1 %** | 71.11 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| JBL CHARGEES3 | 119.90 € | **119.50 €** | 15.6 % | **15.2 %** | 119.74 € | stávame sa najlacnejší |
| Salente DigiChef+ kuchyňský robot | 124.90 € | **124.50 €** | 7.6 % | **7.3 %** | 124.89 € | stávame sa najlacnejší |
| Plynová varná doska ISEASY MGBG-312A, 2 horáky (biela) | 77.90 € | **77.50 €** | 15.0 % | **14.4 %** | 77.89 € | stávame sa najlacnejší |
| Brita Pack 2 MAXTRApro PO 2024 | 13.90 € | **13.50 €** | 11.0 % | **7.8 %** | 10.30 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 20W, 150... | 10.00 € | **9.60 €** | 38.7 % | **33.2 %** | 9.70 € | stávame sa najlacnejší |
| Fixed pouzdro Xiaom RN 13 FIXOP3-1282-BK | 11.90 € | **11.50 €** | 10.3 % | **6.6 %** | 11.69 € | stávame sa najlacnejší |
| HP 15,6" Taška Prelude | 14.90 € | **14.50 €** | 13.6 % | **10.6 %** | 14.89 € | stávame sa najlacnejší |
| Solight lightning kábel, USB 2.0 A konektor - Lightn... | 3.90 € | **3.50 €** | 53.2 % | **37.5 %** | 3.56 € | stávame sa najlacnejší |
| Solight rozbočovač s podperou, 3 x 10A, biely | 2.30 € | **1.90 €** | 31.7 % | **8.8 %** | 2.00 € | stávame sa najlacnejší |
| Solight USB nabíjací adaptér, fast charge: 1x USB Qu... | 5.10 € | **4.70 €** | 46.0 % | **34.5 %** | 4.80 € | stávame sa najlacnejší |
| Solight predlžovací prívod, 4 zásuvky, biely, 1,5m | 4.10 € | **3.70 €** | 47.5 % | **33.1 %** | 3.80 € | stávame sa najlacnejší |
| BWT náhradní filtry Mg2 + VIDA MEI bílá | 27.90 € | **27.50 €** | 11.6 % | **10.0 %** | 27.54 € | stávame sa najlacnejší |
| LEIFHEIT Sušák Telegant  Plus 70 bílý | 21.90 € | **21.50 €** | 11.6 % | **9.6 %** | 21.55 € | stávame sa najlacnejší |
| Cycplus G1 bicycle computer | 22.90 € | **22.50 €** | 15.1 % | **13.1 %** | 22.65 € | stávame sa najlacnejší |
| Budík analogový TechnoLine WT 757W | 27.90 € | **27.50 €** | 15.4 % | **13.8 %** | 27.69 € | stávame sa najlacnejší |
| USB WiFi adaptér OCTAGON WL618 600Mb/s, RT8811CU s a... | 16.90 € | **16.50 €** | 16.1 % | **13.4 %** | 16.69 € | stávame sa najlacnejší |
| Tefal VC139810 | 31.90 € | **31.50 €** | 16.9 % | **15.4 %** | 31.70 € | stávame sa najlacnejší |
| Candy CFT610/4N/1 | 52.90 € | **52.50 €** | 14.3 % | **13.5 %** | 52.70 € | stávame sa najlacnejší |
| Solight LED reflektor so sklopným stojanom, 50W, 450... | 20.90 € | **20.50 €** | 30.3 % | **27.8 %** | 20.76 € | stávame sa najlacnejší |
| Russell Hobbs 23210-70/RH Luna | 50.90 € | **50.50 €** | 10.2 % | **9.3 %** | 50.80 € | stávame sa najlacnejší |
| Sati Hansi Doux et Suave 1000g zrno | 22.90 € | **22.50 €** | 10.8 % | **8.9 %** | 22.80 € | stávame sa najlacnejší |
| D-LINK AX9U | 17.90 € | **17.50 €** | 13.2 % | **10.6 %** | 17.82 € | stávame sa najlacnejší |
| Zvukový zosilňovač Blitzwolf AS-22, 45 W, Bluetooth ... | 41.90 € | **41.50 €** | 15.1 % | **14.0 %** | 41.87 € | stávame sa najlacnejší |
| Leifheit LinoLift 500 85359 | 55.90 € | **55.50 €** | 11.9 % | **11.1 %** | 55.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Black | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Blue | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C Red | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| JBL TUNE 305 USB-C White | 19.90 € | **19.50 €** | 31.6 % | **29.0 %** | 19.89 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie štvorcové, 13W, 910... | 6.90 € | **6.60 €** | 38.5 % | **32.5 %** | 6.70 € | stávame sa najlacnejší |
| Solight LED žiarovka, bodová , 7W, GU10, 4000K, 595l... | 1.20 € | **0.90 €** | 47.8 % | **10.9 %** | 0.99 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz farebné gule, 40x LED, 4m... | 3.90 € | **3.60 €** | 43.5 % | **32.4 %** | 3.67 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 50x mini LED, 5m,... | 2.40 € | **2.10 €** | 42.4 % | **24.6 %** | 2.18 € | stávame sa najlacnejší |
| Solight flexo šnúra, 3x 1mm2, čierna, 2m | 2.80 € | **2.50 €** | 46.9 % | **31.1 %** | 2.60 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie oválne, 20W, 1500lm... | 9.60 € | **9.30 €** | 38.6 % | **34.3 %** | 9.40 € | stávame sa najlacnejší |
| Solight LED vianočná hviezda strieborná, závesná, ča... | 7.70 € | **7.50 €** | 54.6 % | **50.6 %** | 7.56 € | stávame sa najlacnejší |
| Solight zástrčka plochá priama, IP20, čierna | 0.90 € | **0.70 €** | 52.4 % | **18.6 %** | 0.80 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, teplé... | 1.70 € | **1.50 €** | 53.6 % | **35.5 %** | 1.56 € | stávame sa najlacnejší |
| Solight vianočná reťaz strieborná, 30x mini LED, 3m,... | 2.00 € | **1.80 €** | 43.9 % | **29.5 %** | 1.90 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 300... | 1.20 € | **1.00 €** | 47.8 % | **23.2 %** | 1.10 € | stávame sa najlacnejší |
| Solight set nabíjacích cyklo svietidiel, 160lm predn... | 10.00 € | **9.80 €** | 40.4 % | **37.6 %** | 9.90 € | stávame sa najlacnejší |
| MAXXO VC 1800 | 24.00 € | **23.90 €** | 6.9 % | **6.5 %** | 23.89 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Solight LED vonkajšie nástenné osvetlenie Crotone, 7... | 30.00 € | **29.90 €** | 35.3 % | **34.8 %** | 29.96 € | stávame sa najlacnejší |
| ETA 142390000 | 31.00 € | **30.90 €** | 12.5 % | **12.1 %** | 30.96 € | stávame sa najlacnejší |
| Solight LED kuchynské svietidlo výklopné, vypínač, 1... | 18.00 € | **17.90 €** | 35.3 % | **34.5 %** | 17.97 € | stávame sa najlacnejší |
| Merač teploty a vlhkosti UNI-T UT333S | 24.00 € | **23.90 €** | 14.4 % | **13.9 %** | 23.99 € | stávame sa najlacnejší |
| Solight ručná akumulátorová píla, 150mm | 45.00 € | **44.90 €** | 24.3 % | **24.0 %** | 44.99 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie, 18W, 1350lm, 4000K... | 9.30 € | **9.20 €** | 25.6 % | **24.2 %** | 9.29 € | stávame sa najlacnejší |
| Solight predlžovací prívod - spojka, 1 zásuvka, 20m,... | 23.00 € | **22.90 €** | 26.3 % | **25.7 %** | 22.99 € | stávame sa najlacnejší |
| Solight USB-C/Lightning kábel, USB-C konektor - Ligh... | 4.40 € | **4.30 €** | 55.5 % | **52.0 %** | 4.31 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED vonkajšie osvetlenie guľaté, 13W, 910lm,... | 6.40 € | **6.30 €** | 28.5 % | **26.5 %** | 6.36 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, 3m, 20xLED, 3x AA, modré... | 2.00 € | **1.90 €** | 57.9 % | **50.0 %** | 1.96 € | stávame sa najlacnejší |
| Solight LED vianočná reťaz, hviezdy, 1,5m, 10x LED, ... | 2.20 € | **2.10 €** | 39.7 % | **33.4 %** | 2.18 € | stávame sa najlacnejší |
| Solight LED žiarovka reflektorová, R50, 5W, E14, 400... | 1.00 € | **0.90 €** | 23.2 % | **10.9 %** | 0.99 € | stávame sa najlacnejší |
| LAMAX SoundKid1 pink | 16.00 € | **15.90 €** | 11.1 % | **10.4 %** | 15.96 € | stávame sa najlacnejší |
| Solight samočistiaca mäkká prachová kefa pre Dyson V... | 11.00 € | **10.90 €** | 31.9 % | **30.7 %** | 10.98 € | stávame sa najlacnejší |
| Inteligentný spínač WiFi + RF 433 Sonoff RF R2 (NOVI... | 10.00 € | **9.90 €** | 8.5 % | **7.5 %** | 9.98 € | stávame sa najlacnejší |
| Solight LED žiarovka, klasický tvar, 18W, E27, 4000K... | 2.30 € | **2.20 €** | 50.8 % | **44.2 %** | 2.29 € | stávame sa najlacnejší |
| Konektor MC4 pro solární panely, rozbočení 4 panely,... | 15.00 € | **14.90 €** | 13.7 % | **12.9 %** | 14.99 € | stávame sa najlacnejší |
| Solight nástavec na vyhladzovanie vlasov Coanda pre ... | 7.00 € | **6.90 €** | 20.8 % | **19.1 %** | 6.99 € | stávame sa najlacnejší |
| Ardes 354 | 87.00 € | **86.90 €** | 5.3 % | **5.2 %** | 76.79 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| GORENJE BM201AG1X | 140.00 € | **139.90 €** | 5.1 % | **5.0 %** | 132.61 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| DOMO DO716BL | 81.00 € | **80.90 €** | 5.4 % | **5.3 %** | 79.93 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| Domo DO234S | 85.00 € | **84.90 €** | 5.3 % | **5.2 %** | 84.24 € | floor (min. marža 5%) je nad cenou konkurencie — znížené len po floor, nestaneme sa najlacnejší |
| AnyCubic Kobra 2 Pro 3D Printer | 207.00 € | **206.90 €** | 9.6 % | **9.5 %** | 206.91 € | stávame sa najlacnejší |
